export const LANGUAGES = [
  {
    "code": "en",
    "label": "English"
  },
  {
    "code": "hi",
    "label": "हिन्दी"
  },
  {
    "code": "ne",
    "label": "नेपाली"
  },
  {
    "code": "ja",
    "label": "日本語"
  },
  {
    "code": "fr",
    "label": "Français"
  },
  {
    "code": "de",
    "label": "Deutsch"
  },
  {
    "code": "it",
    "label": "Italiano"
  },
  {
    "code": "es",
    "label": "Español"
  },
  {
    "code": "ru",
    "label": "Русский"
  },
  {
    "code": "ar",
    "label": "العربية"
  },
  {
    "code": "zh-CN",
    "label": "简体中文"
  },
  {
    "code": "ko",
    "label": "한국어"
  },
  {
    "code": "fil",
    "label": "Filipino"
  },
  {
    "code": "id",
    "label": "Bahasa Indonesia"
  },
  {
    "code": "pt-BR",
    "label": "Português (Brasil)"
  },
  {
    "code": "zh-TW",
    "label": "繁體中文"
  },
  {
    "code": "vi",
    "label": "Tiếng Việt"
  }
];
export const MARKET_ORDER = ["JP", "US", "FR", "IT", "AU", "ES", "BR", "NP", "DE", "GB", "HK", "KR", "ZA", "MX", "AE", "SA"];
export const FLAGS = {
  "JP": "🇯🇵",
  "US": "🇺🇸",
  "FR": "🇫🇷",
  "IT": "🇮🇹",
  "AU": "🇦🇺",
  "ES": "🇪🇸",
  "BR": "🇧🇷",
  "NP": "🇳🇵",
  "DE": "🇩🇪",
  "GB": "🇬🇧",
  "HK": "🇭🇰",
  "KR": "🇰🇷",
  "ZA": "🇿🇦",
  "MX": "🇲🇽",
  "AE": "🇦🇪",
  "SA": "🇸🇦"
};
export const STOREFRONTS = [
  {
    "country": "JP",
    "file": "tiktokshop-jp.html",
    "platform": "tiktokshop",
    "brand": "TikTok Shop",
    "currency": "JPY"
  },
  {
    "country": "JP",
    "file": "temu-jp.html",
    "platform": "temu",
    "brand": "Temu",
    "currency": "JPY"
  },
  {
    "country": "JP",
    "file": "shein-jp.html",
    "platform": "shein",
    "brand": "SHEIN",
    "currency": "JPY"
  },
  {
    "country": "JP",
    "file": "aliexpress-jp.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "JPY"
  },
  {
    "country": "JP",
    "file": "amazon-jp.html",
    "platform": "amazon",
    "brand": "Amazon",
    "currency": "JPY"
  },
  {
    "country": "US",
    "file": "aliexpress-us.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "USD"
  },
  {
    "country": "FR",
    "file": "aliexpress-france.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "EUR"
  },
  {
    "country": "IT",
    "file": "aliexpress-italy.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "EUR"
  },
  {
    "country": "AU",
    "file": "aliexpress-australia.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "AUD"
  },
  {
    "country": "ES",
    "file": "aliexpress-spain.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "EUR"
  },
  {
    "country": "BR",
    "file": "aliexpress-brazil.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "BRL"
  },
  {
    "country": "NP",
    "file": "aliexpress-nepal.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "NPR"
  },
  {
    "country": "DE",
    "file": "aliexpress-germany.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "EUR"
  },
  {
    "country": "GB",
    "file": "aliexpress-uk.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "GBP"
  },
  {
    "country": "HK",
    "file": "aliexpress-hong-kong.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "HKD"
  },
  {
    "country": "KR",
    "file": "aliexpress-south-korea.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "KRW"
  },
  {
    "country": "ZA",
    "file": "aliexpress-south-africa.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "ZAR"
  },
  {
    "country": "MX",
    "file": "aliexpress-mexico.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "MXN"
  },
  {
    "country": "AE",
    "file": "aliexpress-uae.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "AED"
  },
  {
    "country": "SA",
    "file": "aliexpress-saudi-arabia.html",
    "platform": "aliexpress",
    "brand": "AliExpress",
    "currency": "SAR"
  }
];
export const SUPPORTED_LANGUAGES = new Set(LANGUAGES.map(item => item.code));
export const LANGUAGE_ALIASES = { zh: "zh-CN", pt: "pt-BR", tl: "fil" };
export function normalizeLanguage(value) {
  const raw = String(value || "").trim();
  if (!raw) return "en";
  if (LANGUAGE_ALIASES[raw]) return LANGUAGE_ALIASES[raw];
  const exact = LANGUAGES.find(item => item.code.toLowerCase() === raw.toLowerCase());
  if (exact) return exact.code;
  const base = raw.split("-")[0].toLowerCase();
  if (LANGUAGE_ALIASES[base]) return LANGUAGE_ALIASES[base];
  return LANGUAGES.find(item => item.code.split("-")[0].toLowerCase() === base)?.code || "en";
}
export function currentFile() {
  return location.pathname.split("/").pop() || "shop.html";
}
export function storefrontForFile(file = currentFile()) {
  return STOREFRONTS.find(store => store.file === file) || null;
}
export function storefrontsForCountry(country) {
  return STOREFRONTS.filter(store => store.country === country);
}
export function destinationUrl(file, language) {
  const url = new URL(file, location.href);
  url.searchParams.set("lang", normalizeLanguage(language));
  return url.href;
}
