import{C}from"./CardProduct-WIDxhMmx.js";import{_,o as t,c,a as $,r as o,b as w,d as P,e as u,f,F as v,g as B,h as I,B as g,i as y,p as V,j as L}from"./index-Cy_1z8FX.js";const S={},x={class:"condition"},N=$('<div class="card" data-v-16e4fe55><i class="pi pi-truck" data-v-16e4fe55></i><p data-v-16e4fe55>Ваша доставка бесплатна</p><span data-v-16e4fe55>При покупке от 1000 рублей</span></div><div class="vl" data-v-16e4fe55></div><div class="card" data-v-16e4fe55><i class="pi pi-clock" data-v-16e4fe55></i><p data-v-16e4fe55>Онлайн 24/7</p><span data-v-16e4fe55>Работаем в любое время</span></div><div class="vl" data-v-16e4fe55></div><div class="card" data-v-16e4fe55><i class="pi pi-wallet" data-v-16e4fe55></i><p data-v-16e4fe55>Возврат средств</p><span data-v-16e4fe55>Если товар оказался неисправен, вернем деньги</span></div>',5),b=[N];function F(s,d,r,i,p,n){return t(),c("div",x,b)}const H=_(S,[["render",F],["__scopeId","data-v-16e4fe55"]]),T=s=>(V("data-v-40d728eb"),s=s(),L(),s),j={class:"container"},A={key:0,class:"loader-wrapper"},D=T(()=>f("div",{class:"loader"},null,-1)),E=[D],M={key:1,class:"catalog"},O={__name:"HomeView",setup(s){const d=o({}),r=o(!0),i=o(""),p=o([]),n=o("");w(async()=>{const e=await I();d.value=e,r.value=!1});const h=P(()=>{let e=d.value;return i.value.trim()!==""&&(e=e.filter(a=>a.title.toLowerCase().includes(i.value.toLowerCase()))),e.sort((a,l)=>n.value==="asc"?a.price-l.price:n.value==="desc"?l.price-a.price:0)}),m=e=>{p.value.push(e)};return(e,k)=>(t(),c(v,null,[u(g),u(H,{class:"condition"}),f("div",j,[r.value?(t(),c("div",A,E)):(t(),c("div",M,[(t(!0),c(v,null,B(h.value,a=>(t(),y(C,{key:a.id,product:a,onAddToCart:m,onClick:l=>e.$router.push({name:"product",params:{id:a.id}})},null,8,["product","onClick"]))),128))]))])],64))}},G=_(O,[["__scopeId","data-v-40d728eb"]]);export{G as default};
