import{_,d as n,f as g,o as c,c as p,a,w as l,v as r,n as i,j as h,p as w,i as V}from"./index-DtUxaEMg.js";const v=u=>(w("data-v-586e0905"),u=u(),V(),u),b={class:"add"},k=v(()=>a("h5",null,"Добавление товара на нашей платформе",-1)),x={class:"forms"},S=["disabled"],U={key:0,class:"success"},C=v(()=>a("p",null,"Товар успешно загружен",-1)),j=[C],I={__name:"AddProductView",setup(u){const m=n({}),d=n(!1),e=n({title:"",price:0,description:"",category:"",image:""}),f=g(()=>e.value.title&&e.value.price&&e.value.description&&e.value.category&&e.value.image),y=async()=>{try{const s=await fetch("https://5ea90011a42bf510.mokky.dev/products",{method:"POST",body:JSON.stringify(e.value),headers:{"Content-type":"application/json; charset=UTF-8"}});if(!s.ok)throw new ErrorCodes(`Ошибка при отправке данных: ${s.status}`);const t=await s.json();console.log("Успех:",t),m.value=t,d.value=!0,setTimeout(()=>{d.value=!1},5e3),e.value={title:"",price:0,description:"",category:"",image:""}}catch(s){console.log(s)}};return(s,t)=>(c(),p("div",b,[k,a("div",x,[l(a("input",{class:i(["form",{error:!e.value.title}]),"onUpdate:modelValue":t[0]||(t[0]=o=>e.value.title=o),type:"text",placeholder:"Название"},null,2),[[r,e.value.title]]),l(a("input",{class:i(["form",{error:!e.value.price}]),"onUpdate:modelValue":t[1]||(t[1]=o=>e.value.price=o),type:"number",min:"0",placeholder:"Цена"},null,2),[[r,e.value.price,void 0,{number:!0}]]),l(a("input",{class:i(["form",{error:!e.value.description}]),"onUpdate:modelValue":t[2]||(t[2]=o=>e.value.description=o),type:"text",placeholder:"Описание"},null,2),[[r,e.value.description]]),l(a("input",{class:i(["form",{error:!e.value.category}]),"onUpdate:modelValue":t[3]||(t[3]=o=>e.value.category=o),type:"text",placeholder:"Категория"},null,2),[[r,e.value.category]]),l(a("input",{class:i(["form",{error:!e.value.image}]),"onUpdate:modelValue":t[4]||(t[4]=o=>e.value.image=o),type:"url",placeholder:"Ссылка на картинку"},null,2),[[r,e.value.image]]),a("button",{onClick:y,disabled:!f.value},"Отправить",8,S),d.value?(c(),p("div",U,j)):h("",!0)])]))}},T=_(I,[["__scopeId","data-v-586e0905"]]);export{T as default};
