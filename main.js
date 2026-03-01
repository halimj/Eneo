const SERVICES=[
{slug:"tuinaanleg",title:"Tuin aanleg",excerpt:"Complete aanleg van tuinen."},
{slug:"bestrating",title:"Bestrating",excerpt:"Strakke en duurzame bestrating."},
{slug:"kunstgras",title:"Kunstgras",excerpt:"Altijd groen zonder onderhoud."},
{slug:"onderhoud",title:"Onderhoud",excerpt:"Volledig tuinonderhoud."}
];
function qs(k){return new URLSearchParams(location.search).get(k);}
function renderServices(el){
el.innerHTML=SERVICES.map(s=>`
<a class="card" href="dienst.html?s=${s.slug}">
<h3>${s.title}</h3><p>${s.excerpt}</p>
</a>`).join("");
}
document.addEventListener("DOMContentLoaded",()=>{
const g=document.querySelector("[data-services]");
if(g)renderServices(g);
const slug=qs("s");
const d=document.querySelector("[data-detail]");
if(d&&slug){
const s=SERVICES.find(x=>x.slug===slug);
d.innerHTML=`<div class="card"><h1>${s?.title||"Dienst"}</h1><p>${s?.excerpt||""}</p></div>`;
}
});
