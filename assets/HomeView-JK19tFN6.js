import{_ as v,o as a,c,r as m,a as d,t as f,F as _,b as w,d as n,e as y,f as g,g as h,h as I,C as P,p as B,i as S}from"./index-LfsWhENY.js";const V=async()=>await(await fetch("https://5ea90011a42bf510.mokky.dev/products")).json(),b={class:"text"},L=["onClick"],x=["src"],A={__name:"TheBanner",props:{stocks:Array},setup(o){return(r,i)=>(a(!0),c(_,null,m(r.$store.state.stockApple,e=>(a(),c("div",{class:"banner",key:e.id},[d("div",b,[d("h3",null,f(e.title),1),d("p",null,f(e.description),1),d("button",{onClick:l=>r.$router.push({name:"stock",params:{url:e.url}})},"Подробнее",8,L)]),d("img",{class:"img",src:e.image},null,8,x)]))),128))}},N=v(A,[["__scopeId","data-v-f7eb7456"]]),T={},D={class:"condition"},F=w('<div class="card" data-v-e79fd876><i class="pi pi-truck" data-v-e79fd876></i><p data-v-e79fd876>Ваша доставка бесплатна</p><span data-v-e79fd876>При покупке от 1000 рублей</span></div><div class="vl" data-v-e79fd876></div><div class="card" data-v-e79fd876><i class="pi pi-clock" data-v-e79fd876></i><p data-v-e79fd876>Работа 24/7</p><span data-v-e79fd876>Работае в любое время</span></div><div class="vl" data-v-e79fd876></div><div class="card" data-v-e79fd876><i class="pi pi-wallet" data-v-e79fd876></i><p data-v-e79fd876>Возврат средств</p><span data-v-e79fd876>Если товар оказался не исправен, вернем деньги</span></div>',5),H=[F];function j(o,r,i,e,l,p){return a(),c("div",D,H)}const E=v(T,[["render",j],["__scopeId","data-v-e79fd876"]]),M=o=>(B("data-v-56cfe7a1"),o=o(),S(),o),O={class:"container"},Q={key:0,class:"loader-wrapper"},q=M(()=>d("div",{class:"loader"},null,-1)),z=[q],G={key:1,class:"catalog"},J={__name:"HomeView",setup(o){n(!0);const r=n({}),i=n(!0),e=n(""),l=n([]),p=n("");y(async()=>{const t=await V();r.value=t,i.value=!1});const $=g(()=>{let t=r.value;return e.value.trim()!==""&&(t=t.filter(s=>s.title.toLowerCase().includes(e.value.toLowerCase()))),t.sort((s,u)=>p.value==="asc"?s.price-u.price:p.value==="desc"?u.price-s.price:0)}),k=t=>{l.value.push(t)};return(t,C)=>(a(),c(_,null,[h(N),h(E,{class:"condition"}),d("div",O,[i.value?(a(),c("div",Q,z)):(a(),c("div",G,[(a(!0),c(_,null,m($.value,s=>(a(),I(P,{key:s.id,product:s,onAddToCart:k,onClick:u=>t.$router.push({name:"product",params:{id:s.id}})},null,8,["product","onClick"]))),128))]))])],64))}},U=v(J,[["__scopeId","data-v-56cfe7a1"]]);export{U as default};
