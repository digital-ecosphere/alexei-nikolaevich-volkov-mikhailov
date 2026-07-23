import {
  LANGUAGES, MARKET_ORDER, FLAGS, STOREFRONTS,
  normalizeLanguage, currentFile, storefrontForFile,
  storefrontsForCountry, destinationUrl
} from "./storefront-registry.js";
import { applyLanguage } from "./shop-language.js";

const LANGUAGE_KEY = "de-smart-language";
const MARKET_KEY = "de-selected-market";
const current = storefrontForFile();
let activeLanguage = "en";
let activePayload = null;
const payloadCache = new Map();
const MARKETPLACE_HOSTS = /(^|\.)(aliexpress\.com|amazon\.co\.jp|shein\.com|temu\.to|temu\.com|tiktok\.com)$/i;

function normalizeMarketplaceLink(link) {
  if (!(link instanceof HTMLAnchorElement)) return;
  let url;
  try { url = new URL(link.href, location.href); }
  catch { return; }
  if (!MARKETPLACE_HOSTS.test(url.hostname)) return;

  // Native, same-context HTTPS navigation gives iOS Universal Links the best
  // opportunity to open the installed marketplace app. The same URL remains
  // the browser fallback when the app is absent or iOS keeps the link on web.
  link.removeAttribute("target");
  link.dataset.mobileNativeLink = "true";
  const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
  rel.add("nofollow");
  rel.add("sponsored");
  link.setAttribute("rel", [...rel].join(" "));
}

function normalizeMarketplaceLinks(root = document) {
  root.querySelectorAll?.('a[href^="http://"],a[href^="https://"]').forEach(normalizeMarketplaceLink);
}

function watchMarketplaceLinks() {
  normalizeMarketplaceLinks();
  const observer = new MutationObserver(records => {
    records.forEach(record => record.addedNodes.forEach(node => {
      if (node.nodeType !== Node.ELEMENT_NODE) return;
      if (node.matches?.("a[href]")) normalizeMarketplaceLink(node);
      normalizeMarketplaceLinks(node);
    }));
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
}

async function loadPayload(language) {
  const lang = normalizeLanguage(language);
  if (payloadCache.has(lang)) return payloadCache.get(lang);
  const response = await fetch(new URL(`../i18n/${lang}.json`, import.meta.url), { cache: "no-cache" });
  if (!response.ok) throw new Error(`Unable to load ${lang} storefront labels`);
  const payload = await response.json();
  payloadCache.set(lang, payload);
  return payload;
}
function initialLanguage() {
  const query = new URL(location.href).searchParams.get("lang");
  return normalizeLanguage(query || localStorage.getItem(LANGUAGE_KEY) || navigator.languages?.[0] || navigator.language || "en");
}
function mount() {
  if (document.getElementById("de-storefront-controls")) return;
  const nav = document.createElement("nav");
  nav.id = "de-storefront-controls";
  nav.className = "de-storefront-controls";
  nav.setAttribute("aria-label", "Shop controls");
  nav.innerHTML = `<div class="de-storefront-controls__inner">
    <a class="de-storefront-controls__home" href="shop.html" aria-label="Shop directory" title="Shop directory">🏬</a>
    <div class="de-storefront-control">
      <label id="de-storefront-country-label" for="de-storefront-country"></label>
      <select id="de-storefront-country"></select>
    </div>
    <div class="de-storefront-control">
      <label id="de-storefront-shop-label" for="de-storefront-shop"></label>
      <select id="de-storefront-shop"></select>
    </div>
    <div class="de-storefront-control de-storefront-control--language">
      <label id="de-storefront-language-label" for="de-storefront-language"></label>
      <select id="de-storefront-language"></select>
    </div>
  </div>`;
  const header = document.querySelector("header");
  if (header) header.insertAdjacentElement("afterend", nav);
  else document.body.insertAdjacentElement("afterbegin", nav);
}
function setLanguageUrl(language) {
  const url = new URL(location.href);
  url.searchParams.set("lang", normalizeLanguage(language));
  history.replaceState(null, "", url);
}
function fillLanguages() {
  const select = document.getElementById("de-storefront-language");
  select.innerHTML = LANGUAGES.map(item => `<option value="${item.code}">${item.label}</option>`).join("");
}
function fillCountries(selectedCountry) {
  const select = document.getElementById("de-storefront-country");
  const markets = activePayload?.markets || {};
  select.innerHTML = MARKET_ORDER.map(code => `<option value="${code}">${FLAGS[code] || "🌍"} ${markets[code] || code}</option>`).join("");
  select.value = selectedCountry;
}
function fillShops(country, selectedFile = "") {
  const select = document.getElementById("de-storefront-shop");
  const markets = activePayload?.markets || {};
  const list = storefrontsForCountry(country);
  select.innerHTML = list.map(store => `<option value="${store.file}">${store.brand} ${markets[store.country] || store.country}</option>`).join("");
  if (list.some(store => store.file === selectedFile)) select.value = selectedFile;
  return list;
}
function renderLabels() {
  const shared = activePayload?.shared || {};
  document.getElementById("de-storefront-country-label").textContent = `📦🌍 ${shared.select_delivery_country || shared.delivery || "Select delivery country"}`;
  document.getElementById("de-storefront-shop-label").textContent = `🛍️ ${shared.select_shop || shared.shop || "Select shop"}`;
  document.getElementById("de-storefront-language-label").textContent = `🌐 ${shared.select_language || shared.language || "Select language"}`;
  const home = document.querySelector(".de-storefront-controls__home");
  const shopLabel = shared.nav_shop || "Shop";
  home.setAttribute("aria-label", shopLabel);
  home.setAttribute("title", shopLabel);
}
async function useLanguage(requested, updateUrl = true) {
  activeLanguage = normalizeLanguage(requested);
  try { activePayload = await loadPayload(activeLanguage); }
  catch (error) {
    console.error(error);
    activeLanguage = "en";
    activePayload = await loadPayload("en");
  }
  localStorage.setItem(LANGUAGE_KEY, activeLanguage);
  if (updateUrl) setLanguageUrl(activeLanguage);
  document.documentElement.lang = activeLanguage;
  document.documentElement.dir = activeLanguage === "ar" ? "rtl" : "ltr";
  renderLabels();
  const selectedCountry = document.getElementById("de-storefront-country")?.value || current?.country || localStorage.getItem(MARKET_KEY) || "JP";
  fillCountries(selectedCountry);
  fillShops(selectedCountry, currentFile());
  document.getElementById("de-storefront-language").value = activeLanguage;
  await applyLanguage(activeLanguage);
}
function navigate(file) {
  if (!file || file === currentFile()) return;
  location.href = destinationUrl(file, activeLanguage);
}
async function init() {
  watchMarketplaceLinks();
  mount();
  fillLanguages();
  activeLanguage = initialLanguage();
  try { activePayload = await loadPayload(activeLanguage); }
  catch { activeLanguage = "en"; activePayload = await loadPayload("en"); }
  const initialCountry = current?.country || localStorage.getItem(MARKET_KEY) || "JP";
  fillCountries(initialCountry);
  fillShops(initialCountry, currentFile());
  renderLabels();
  document.getElementById("de-storefront-language").value = activeLanguage;
  await useLanguage(activeLanguage, true);

  document.getElementById("de-storefront-country").addEventListener("change", event => {
    const country = event.target.value;
    localStorage.setItem(MARKET_KEY, country);
    const list = fillShops(country, "");
    const samePlatform = list.find(store => store.platform === current?.platform);
    navigate((samePlatform || list[0])?.file);
  });
  document.getElementById("de-storefront-shop").addEventListener("change", event => navigate(event.target.value));
  document.getElementById("de-storefront-language").addEventListener("change", event => useLanguage(event.target.value, true));
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
else init();
