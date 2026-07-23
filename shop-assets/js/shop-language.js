const pageId = document.body?.dataset.shopPage || location.pathname.split('/').pop() || 'shop.html';
const cache = new Map();
const aliases = {zh:'zh-CN',pt:'pt-BR',tl:'fil'};
const supported = new Set(['en','hi','ne','ja','fr','de','it','es','ru','ar','zh-CN','ko','fil','id','pt-BR','zh-TW','vi']);
let applying=false;
function normalize(value){const raw=String(value||'').trim(); if(!raw)return'en'; if(aliases[raw])return aliases[raw]; const exact=[...supported].find(x=>x.toLowerCase()===raw.toLowerCase()); if(exact)return exact; const base=raw.split('-')[0].toLowerCase(); return aliases[base]||[...supported].find(x=>x.split('-')[0].toLowerCase()===base)||'en';}
function interpolate(value,vars={}){return String(value??'').replace(/\{(\w+)\}/g,(_,k)=>vars[k]??`{${k}}`)}
async function load(lang){if(cache.has(lang))return cache.get(lang); const r=await fetch(new URL(`../i18n/${lang}.json`,import.meta.url),{cache:'no-cache'}); if(!r.ok)throw new Error(`Unable to load ${lang}`); const d=await r.json(); cache.set(lang,d); return d;}
function variables(el,payload){const market=document.body?.dataset.currentMarketCode||''; return {...el.dataset,country:payload.markets?.[market]||market,currency:document.body?.dataset.marketCurrency||'',count:el.dataset.count||document.body?.dataset.productCount||'',brand:document.body?.dataset.platformBrand||''};}
function applyRoot(payload,page){const dict={...(payload.shared||{}),...(page.text||{})}; const categories=page.categories||{};
 document.querySelectorAll('[data-smart-i18n]').forEach(el=>{const v=dict[el.dataset.smartI18n]; if(v!==undefined)el.textContent=interpolate(v,variables(el,payload));});
 document.querySelectorAll('[data-smart-i18n-html]').forEach(el=>{const v=dict[el.dataset.smartI18nHtml]; if(v!==undefined)el.innerHTML=interpolate(v,variables(el,payload));});
 document.querySelectorAll('[data-smart-i18n-template]').forEach(el=>{const v=dict[el.dataset.smartI18nTemplate]; if(v!==undefined)el.textContent=interpolate(v,variables(el,payload));});
 document.querySelectorAll('[data-smart-i18n-placeholder]').forEach(el=>{const v=dict[el.dataset.smartI18nPlaceholder]; if(v!==undefined)el.setAttribute('placeholder',interpolate(v,variables(el,payload)));});
 document.querySelectorAll('[data-smart-i18n-aria-label]').forEach(el=>{const v=dict[el.dataset.smartI18nAriaLabel]; if(v!==undefined)el.setAttribute('aria-label',interpolate(v,variables(el,payload)));});
 document.querySelectorAll('[data-smart-category]').forEach(el=>{const k=el.dataset.smartCategory; el.textContent=categories[k]||dict[k]||k;});
 document.querySelectorAll('[data-market-code]').forEach(el=>{if(el===document.body)return; const v=payload.markets?.[el.dataset.marketCode]; if(v!==undefined)el.textContent=v;});
 document.title=dict.page_title||document.title; const md=document.querySelector('meta[name="description"]'); if(md&&dict.meta_description)md.content=dict.meta_description; const og=document.querySelector('meta[property="og:title"]'); if(og&&dict.page_title)og.content=dict.page_title; const ogd=document.querySelector('meta[property="og:description"]'); if(ogd&&dict.meta_description)ogd.content=dict.meta_description; const tw=document.querySelector('meta[name="twitter:title"]'); if(tw&&dict.page_title)tw.content=dict.page_title; const twd=document.querySelector('meta[name="twitter:description"]'); if(twd&&dict.meta_description)twd.content=dict.meta_description;
 return {dict,categories};}
export async function applyLanguage(requested){if(applying)return; applying=true; let lang=normalize(requested); try{let payload; try{payload=await load(lang)}catch{lang='en'; payload=await load('en')} const page=payload.pages?.[pageId]||{text:{},categories:{}}; document.documentElement.lang=lang; document.documentElement.dir=lang==='ar'?'rtl':'ltr'; localStorage.setItem('de-smart-language',lang); const {dict,categories}=applyRoot(payload,page); document.dispatchEvent(new CustomEvent('shop:language-applied',{detail:{language:lang,dictionary:dict,categories,markets:payload.markets||{}}}));}finally{applying=false;}}
window.deApplySmartLanguage=applyLanguage; window.deNormalizeSmartLanguage=normalize;
