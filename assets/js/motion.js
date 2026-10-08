(()=>{'use strict';
const root=document.documentElement;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const motionOK=()=>!reduced.matches;
// Existing site.js controls intersection reveals; preserve visible content if a script fails.
if(motionOK() && 'IntersectionObserver' in window) {
  root.classList.add('motion-ready');
  // Existing observer in site.js may miss a target due to DOM timing or offscreen layout changes.
  const pending=[...document.querySelectorAll('.reveal:not(.visible)')];
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}},{rootMargin:'0px 0px 30px 0px',threshold:.03});
  pending.forEach(el=>observer.observe(el));
  window.addEventListener('pageshow',e=>{if(e.persisted){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}}, {once:true});
  // Visibility safeguard: if an observer misses an onscreen element, reveal it on scroll.
  const rescueVisible=()=>{document.querySelectorAll('.reveal:not(.visible)').forEach(el=>{const r=el.getBoundingClientRect();if(r.top<innerHeight+90&&r.bottom>-90)el.classList.add('visible')})};
  addEventListener('scroll',rescueVisible,{passive:true});addEventListener('resize',rescueVisible,{passive:true});setTimeout(rescueVisible,1500);
}
// First visit intro, but never on a deep link, repeat visit, or reduced-motion preference.
const intro=document.querySelector('.brand-intro');
if(intro){
  if(root.classList.contains('intro-eligible'))root.classList.add('intro-was-shown');
  let finished=false;
  const closeIntro=()=>{if(finished)return;finished=true;root.classList.remove('intro-eligible');try{sessionStorage.setItem('kj-intro-v32-seen','1')}catch(e){}}
  intro.querySelector('.brand-intro__skip')?.addEventListener('click',closeIntro);
  intro.addEventListener('animationend',e=>{if(e.target===intro)closeIntro()});
  // Short timeout is a safety net, not a loading timer.
  if(root.classList.contains('intro-eligible'))setTimeout(closeIntro,1600);
  else intro.remove();
  reduced.addEventListener?.('change',e=>{if(e.matches)closeIntro()});
}
// Reading progress and compact header, scheduled to animation frames.
const progress=document.querySelector('.scroll-progress');const header=document.querySelector('.header');
let pendingScroll=false;
function onScroll(){if(pendingScroll)return;pendingScroll=true;requestAnimationFrame(()=>{pendingScroll=false;const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);if(progress)progress.style.transform=`scaleX(${Math.min(1,Math.max(0,scrollY/max))})`;header?.classList.toggle('is-scrolled',scrollY>16)})}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll,{passive:true});onScroll();
// Optional pointer effects only for desktop. Not mounted on touch devices.
if(motionOK() && matchMedia('(pointer:fine) and (hover:hover)').matches){
  document.querySelectorAll('.glow-surface').forEach(card=>{
    let frame=0,x=50,y=50;
    card.addEventListener('pointermove',e=>{const rect=card.getBoundingClientRect();x=(e.clientX-rect.left)/rect.width*100;y=(e.clientY-rect.top)/rect.height*100;if(!frame)frame=requestAnimationFrame(()=>{card.style.setProperty('--glow-x',x+'%');card.style.setProperty('--glow-y',y+'%');frame=0})},{passive:true});
  });
  document.querySelectorAll('.hero .btn').forEach(b=>{
    b.classList.add('magnet');
    b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)*.12,y=(e.clientY-r.top-r.height/2)*.12;b.style.setProperty('--mag-x',`${x.toFixed(2)}px`);b.style.setProperty('--mag-y',`${y.toFixed(2)}px`)},{passive:true});
    b.addEventListener('pointerleave',()=>{b.style.removeProperty('--mag-x');b.style.removeProperty('--mag-y')});
  });
}
// Animate connected nodes in sync with existing accessible tab controls.
const steps=[...document.querySelectorAll('.step-button')];const nodes=[...document.querySelectorAll('.rail-node')];const lines=[...document.querySelectorAll('.rail-line-fill')];const workflow=document.querySelector('.workflow-panel');
if(steps.length && nodes.length){
 const sync=()=>{const active=Math.max(0,steps.findIndex(e=>e.getAttribute('aria-selected')==='true'));nodes.forEach((el,i)=>{el.classList.toggle('active',i===active);el.classList.toggle('done',i<active)});lines.forEach((el,i)=>{el.style.width=i<active?'100%':'0%'});if(motionOK() && workflow){workflow.classList.remove('stage-animating');void workflow.offsetWidth;workflow.classList.add('stage-animating')}};
 steps.forEach(btn=>btn.addEventListener('click',sync));
 document.querySelector('.workflow-list')?.addEventListener('keydown',e=>{if(e.key.startsWith('Arrow'))requestAnimationFrame(sync)});
 sync();
}
})();
