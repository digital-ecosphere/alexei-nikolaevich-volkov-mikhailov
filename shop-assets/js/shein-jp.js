(() => {
  const root=document.querySelector('.de-browse-panel');
  if(!root) return;
  const q=root.querySelector('.de-search'), cat=root.querySelector('.de-category-filter');
  const cards=[...root.querySelectorAll('.de-browse-card')], empty=root.querySelector('.de-empty');
  const count=root.querySelector('.de-result-count');
  function draw(){
    const term=(q?.value||'').trim().toLowerCase(), selected=cat?.value||'';
    let shown=0;
    cards.forEach(card=>{const ok=(!term||(card.dataset.title||card.textContent).toLowerCase().includes(term))&&(!selected||card.dataset.category===selected); card.hidden=!ok; if(ok) shown++;});
    if(empty) empty.hidden=shown>0; if(count) count.textContent=String(shown);
  }
  q?.addEventListener('input',draw); cat?.addEventListener('change',draw); draw();
})();

document.addEventListener('click',async event=>{const b=event.target.closest('#copy-shein-code'); if(!b)return; const code='Z732U'; try{await navigator.clipboard.writeText(code); document.dispatchEvent(new CustomEvent('shop:copy-success'));}catch{window.prompt('Copy referral code:',code);}});
