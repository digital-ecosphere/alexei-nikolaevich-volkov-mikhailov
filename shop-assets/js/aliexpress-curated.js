(() => {
 const grid=document.getElementById("grid");
 if(!grid)return;
 const cards=[...grid.querySelectorAll(".ae-static-card")];
 const search=document.getElementById("search"),tier=document.getElementById("tier"),
 sort=document.getElementById("sort"),chips=document.getElementById("chips"),
 count=document.getElementById("count"),empty=document.getElementById("empty"),
 loadWrap=document.getElementById("loadWrap"),loadMore=document.getElementById("loadMore");
 let category="all",visible=24;
 const categories=[...new Set(cards.map(c=>c.dataset.category))].sort();
 function makeChips(){
   if(!chips)return; chips.innerHTML="";
   ["all",...categories].forEach(v=>{
     const b=document.createElement("button"); b.type="button";
     b.className="chip"+(category===v?" active":"");
     b.textContent=v==="all"?"All categories":v;
     b.onclick=()=>{category=v;visible=24;makeChips();draw()}; chips.appendChild(b);
   });
 }
 function filtered(){
   const q=(search?.value||"").trim().toLowerCase(),t=tier?.value||"all";
   const a=cards.filter(c=>(!q||c.dataset.title.includes(q)||c.dataset.category.toLowerCase().includes(q))&&(t==="all"||c.dataset.tier===t)&&(category==="all"||c.dataset.category===category));
   const mode=sort?.value||"rank";
   a.sort((x,y)=>{
     if(mode==="sales")return Number(y.dataset.sales)-Number(x.dataset.sales);
     if(mode==="rating")return Number(y.dataset.feedback)-Number(x.dataset.feedback);
     if(mode==="price-asc")return Number(x.dataset.price)-Number(y.dataset.price);
     if(mode==="price-desc")return Number(y.dataset.price)-Number(x.dataset.price);
     return Number(x.dataset.rank)-Number(y.dataset.rank);
   });
   return a;
 }
 function draw(){
   const a=filtered(),shown=new Set(a.slice(0,visible));
   cards.forEach(c=>c.style.display=shown.has(c)?"":"none");
   a.forEach(c=>grid.appendChild(c));
   if(count)count.textContent=a.length.toLocaleString();
   if(empty)empty.style.display=a.length?"none":"block";
   if(loadWrap)loadWrap.style.display=a.length>visible?"block":"none";
 }
 search?.addEventListener("input",()=>{visible=24;draw()});
 tier?.addEventListener("change",()=>{visible=24;draw()});
 sort?.addEventListener("change",draw);
 loadMore?.addEventListener("click",()=>{visible+=24;draw()});
 makeChips(); draw();
})();
