const languageSelect=document.getElementById("language-select");
const countrySelect=document.getElementById("shop-delivery-country");
const tiles=[...document.querySelectorAll(".shop-platform-tile[data-delivery-country]")];
const supported=["en","hi","ne","ja","fr","de","it","es","ru","ar","zh-CN","ko","fil","id","pt-BR","zh-TW","vi"];
const aliases={zh:"zh-CN",pt:"pt-BR",tl:"fil"};
const cache=new Map();
const tMap={t0:"skip",t1:"brand_tagline",t2:"nav_home",t3:"nav_about",t4:"nav_publications",t5:"nav_peer_review",t6:"nav_editorial",t7:"nav_gallery",t8:"nav_poetry",t9:"nav_social",t10:"nav_shop",t11:"nav_support",t56:"site_tagline",t57:"footer_location"};
function normalize(v){const raw=String(v||"").trim();if(!raw)return"en";if(aliases[raw])return aliases[raw];const exact=supported.find(x=>x.toLowerCase()===raw.toLowerCase());if(exact)return exact;const base=raw.split("-")[0].toLowerCase();return aliases[base]||supported.find(x=>x.split("-")[0].toLowerCase()===base)||"en";}
async function load(lang){if(cache.has(lang))return cache.get(lang);const r=await fetch(`shop-assets/i18n/${lang}.json`,{cache:"no-cache"});if(!r.ok)throw new Error(`Unable to load ${lang}`);const d=await r.json();cache.set(lang,d);return d;}
function setText(selector,dict,keyAttr){document.querySelectorAll(selector).forEach(el=>{const key=el.dataset[keyAttr];if(dict[key]!==undefined)el.textContent=dict[key];});}
function filterStores(){const code=countrySelect?.value||"all";tiles.forEach(tile=>tile.hidden=code!=="all"&&tile.dataset.deliveryCountry!==code);try{localStorage.setItem("de-shop-delivery-country",code)}catch{}}
async function applyLanguage(requested){let lang=normalize(requested);let payload;try{payload=await load(lang)}catch{lang="en";payload=await load("en");}
 const shared=payload.shared||{},ui=payload.directory||{};document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";try{localStorage.setItem("de-smart-language",lang)}catch{}
 setText("[data-ui-key]",ui,"uiKey");
 document.querySelectorAll("[data-i18n]").forEach(el=>{const key=tMap[el.dataset.i18n];if(key&&shared[key]!==undefined)el.textContent=shared[key];});
 document.querySelectorAll("[data-smart-i18n]").forEach(el=>{const key=el.dataset.smartI18n;if(shared[key]!==undefined)el.textContent=shared[key];});
 document.querySelectorAll("[data-market-code]").forEach(el=>{if(el===document.body)return;const value=payload.markets?.[el.dataset.marketCode];if(value!==undefined)el.textContent=value;});
 if(countrySelect){const selected=countrySelect.value||"all";[...countrySelect.options].forEach(opt=>{if(!opt.dataset.flag)opt.dataset.flag=(opt.textContent.match(/^\S+/)||[""])[0];if(opt.value==="all")opt.textContent=ui.all_markets||opt.textContent;else opt.textContent=`${opt.dataset.flag} ${payload.markets?.[opt.value]||opt.value}`.trim();});countrySelect.value=selected;}
 tiles.forEach(tile=>{const original=tile.dataset.baseHref||tile.getAttribute("href");tile.dataset.baseHref=original.split("?")[0];const url=new URL(tile.dataset.baseHref,document.baseURI);const file=url.pathname.split("/").pop();const desc=tile.querySelector("[data-store-description]");const text=payload.pages?.[file]?.text?.hero_intro;if(desc&&text)desc.textContent=text;url.searchParams.set("lang",lang);tile.href=url.href;});
 if(languageSelect)languageSelect.value=lang;document.title=ui.page_title||document.title;const md=document.querySelector('meta[name="description"]');if(md&&ui.meta_description)md.content=ui.meta_description;filterStores();document.dispatchEvent(new CustomEvent("shop:directory-language-applied",{detail:{language:lang}}));}
if(languageSelect)languageSelect.addEventListener("change",()=>applyLanguage(languageSelect.value));if(countrySelect)countrySelect.addEventListener("change",filterStores);
const savedCountry=localStorage.getItem("de-shop-delivery-country");if(countrySelect&&savedCountry&&[...countrySelect.options].some(o=>o.value===savedCountry))countrySelect.value=savedCountry;
const requested=new URLSearchParams(location.search).get("lang")||localStorage.getItem("de-smart-language")||(navigator.languages?.[0]||navigator.language||"en");applyLanguage(requested);
