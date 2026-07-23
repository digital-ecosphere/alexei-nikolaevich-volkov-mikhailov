const cards=[...document.querySelectorAll('.product')];
const search=document.querySelector('#search');
const category=document.querySelector('#category');
const sort=document.querySelector('#sort');
const results=document.querySelector('#results');
const load=document.querySelector('#loadMore');
let limit=24;
let dictionary={products_count_of:'{visible} of {total} products shown'};
function interpolate(value,variables={}){return String(value).replace(/\{(\w+)\}/g,(_,key)=>variables[key]??`{${key}}`)}
function apply(){
 const q=(search?.value||'').toLowerCase().trim(),c=category?.value||'';
 let list=cards.filter(x=>(!q||String(x.dataset.title||'').includes(q))&&(!c||x.dataset.category===c));
 if(sort?.value==='sales')list.sort((a,b)=>+b.dataset.sales-+a.dataset.sales);
 else if(sort?.value==='price-low')list.sort((a,b)=>+a.dataset.price-+b.dataset.price);
 else if(sort?.value==='price-high')list.sort((a,b)=>+b.dataset.price-+a.dataset.price);
 else list.sort((a,b)=>+a.dataset.rank-+b.dataset.rank);
 cards.forEach(x=>x.hidden=true);
 list.forEach((x,i)=>{x.style.order=i;x.hidden=i>=limit});
 if(results)results.textContent=interpolate(dictionary.products_count_of||'{visible} of {total} products shown',{visible:Math.min(limit,list.length),total:list.length});
 if(load)load.hidden=list.length<=limit;
}
[search,category,sort].filter(Boolean).forEach(x=>x.addEventListener('input',()=>{limit=24;apply()}));
load?.addEventListener('click',()=>{limit+=24;apply()});
document.addEventListener('shop:language-applied',event=>{dictionary=event.detail?.dictionary||dictionary;apply()});
apply();
