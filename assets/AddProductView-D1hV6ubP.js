import{_,d,e as g,o as n,c as p,a,w as l,v as r,n as i,i as h,p as b,b as w}from"./index-BV9eI-R4.js";const v=u=>(b("data-v-3cfa82b5"),u=u(),w(),u),V={class:"add"},k=v(()=>a("h5",null,"Добавление товара на нашей платформе",-1)),x={class:"forms"},S=["disabled"],U={key:0,class:"success"},C=v(()=>a("p",null,"Товар успешно загружен",-1)),I=[C],P={__name:"AddProductView",setup(u){const m=d({}),c=d(!1),e=d({title:"",price:0,description:"",category:"",image:""}),f=g(()=>e.value.title&&e.value.price&&e.value.description&&e.value.category&&e.value.image),y=async()=>{try{const s=await fetch("https://5ea90011a42bf510.mokky.dev/products",{method:"POST",body:JSON.stringify(e.value),headers:{"Content-type":"application/json; charset=UTF-8"}});if(!s.ok)throw new ErrorCodes(`Ошибка при отправке данных: ${s.status}`);const t=await s.json();console.log("Успех:",t),m.value=t,c.value=!0,setTimeout(()=>{c.value=!1},5e3),e.value={title:"",price:0,description:"",category:"",image:""}}catch(s){console.log(s)}};return(s,t)=>(n(),p("div",V,[k,a("div",x,[l(a("input",{class:i(["form",{error:!e.value.title}]),"onUpdate:modelValue":t[0]||(t[0]=o=>e.value.title=o),type:"text",placeholder:"Название"},null,2),[[r,e.value.title]]),l(a("input",{class:i(["form",{error:!e.value.price}]),"onUpdate:modelValue":t[1]||(t[1]=o=>e.value.price=o),type:"number",min:"0",placeholder:"Цена"},null,2),[[r,e.value.price,void 0,{number:!0}]]),l(a("input",{class:i(["form",{error:!e.value.description}]),"onUpdate:modelValue":t[2]||(t[2]=o=>e.value.description=o),type:"text",placeholder:"Описание"},null,2),[[r,e.value.description]]),l(a("input",{class:i(["form",{error:!e.value.category}]),"onUpdate:modelValue":t[3]||(t[3]=o=>e.value.category=o),type:"text",placeholder:"Категория"},null,2),[[r,e.value.category]]),l(a("input",{class:i(["form",{error:!e.value.image}]),"onUpdate:modelValue":t[4]||(t[4]=o=>e.value.image=o),type:"url",placeholder:"Ссылка на картинку"},null,2),[[r,e.value.image]]),a("button",{onClick:y,disabled:!f.value},"Отправить",8,S),c.value?(n(),p("div",U,I)):h("",!0)])]))}},j=_(P,[["__scopeId","data-v-3cfa82b5"]]);export{j as default};
