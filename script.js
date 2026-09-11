const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu?.setAttribute("aria-expanded","false")}));

document.querySelectorAll(".faq-item button").forEach(btn=>btn.addEventListener("click",()=>{
  const item=btn.parentElement;
  document.querySelectorAll(".faq-item").forEach(x=>{if(x!==item)x.classList.remove("active")});
  item.classList.toggle("active");
}));

const slides=[...document.querySelectorAll(".testimonial")], dots=[...document.querySelectorAll(".dot")]; let current=0;
function show(i){if(!slides.length)return;current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle("active",n===current));dots.forEach((d,n)=>d.classList.toggle("active",n===current))}
document.querySelector(".prev")?.addEventListener("click",()=>show(current-1));
document.querySelector(".next")?.addEventListener("click",()=>show(current+1));
dots.forEach(d=>d.addEventListener("click",()=>show(Number(d.dataset.slide))));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
