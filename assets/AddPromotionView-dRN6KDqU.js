import{_ as m,r as p,d as N,o as r,c as v,f as l,w as i,v as s,k as c,p as y,j as _}from"./index-Cy_1z8FX.js";const u=a=>(y("data-v-d0a3ac0a"),a=a(),_(),a),T={class:"add-promotion"},h=u(()=>l("h2",null,"Добавить страницу акции",-1)),x={class:"form"},f={class:"inputs"},U=u(()=>l("h3",null,"Что нового?",-1)),g={class:"inputs"},k={class:"input"},S={class:"input"},b={class:"input"},j={class:"input"},C=["disabled"],I={key:0,class:"success"},P=u(()=>l("p",null,"Страница успешно загружен",-1)),B=[P],A={__name:"AddPromotionView",setup(a){const d=p(!1),e=p({url:"",title:"",description:"",image:"",NewVisionTitle:"",NewVision:"",NewVisionTitle2:"",NewVision2:"",NewVisionTitle3:"",NewVision3:"",NewVisionTitle4:"",NewVision4:""}),V=N(()=>e.value.url&&e.value.title&&e.value.description&&e.value.image&&e.value.NewVision&&e.value.NewVisionTitle),w=async()=>{try{const n=await fetch("https://5ea90011a42bf510.mokky.dev/promotions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.value)});if(!n.ok)throw new ErrorCodes("Ошибка при отправке данных: "+n.status);const t=await n.json();d.value=!0,console.log("Успех:",t),e.value={url:"",title:"",description:"",image:"",NewVision:"",NewVision2:"",NewVision3:"",NewVision4:""}}catch(n){console.log(n)}};return(n,t)=>(r(),v("div",T,[h,l("div",x,[l("div",f,[i(l("input",{type:"text",placeholder:"Название для URL","onUpdate:modelValue":t[0]||(t[0]=o=>e.value.url=o)},null,512),[[s,e.value.url]]),i(l("input",{type:"text",placeholder:"Название акции","onUpdate:modelValue":t[1]||(t[1]=o=>e.value.title=o)},null,512),[[s,e.value.title]]),i(l("input",{type:"text",placeholder:"Описание товара","onUpdate:modelValue":t[2]||(t[2]=o=>e.value.description=o)},null,512),[[s,e.value.description]]),i(l("input",{type:"url",placeholder:"Картинка товара","onUpdate:modelValue":t[3]||(t[3]=o=>e.value.image=o)},null,512),[[s,e.value.image]])]),U,l("div",g,[l("div",k,[i(l("input",{type:"text",placeholder:"Название нововвидение 1","onUpdate:modelValue":t[4]||(t[4]=o=>e.value.NewVisionTitle=o)},null,512),[[s,e.value.NewVisionTitle]]),i(l("input",{type:"text",placeholder:"Нововвидение 1","onUpdate:modelValue":t[5]||(t[5]=o=>e.value.NewVision=o)},null,512),[[s,e.value.NewVision]])]),l("div",S,[i(l("input",{type:"text",placeholder:"Название нововвидение 2","onUpdate:modelValue":t[6]||(t[6]=o=>e.value.NewVisionTitle2=o)},null,512),[[s,e.value.NewVisionTitle2]]),i(l("input",{type:"text",placeholder:"Нововвидение 2","onUpdate:modelValue":t[7]||(t[7]=o=>e.value.NewVision2=o)},null,512),[[s,e.value.NewVision2]])]),l("div",b,[i(l("input",{type:"text",placeholder:"Название нововвидение 3","onUpdate:modelValue":t[8]||(t[8]=o=>e.value.NewVisionTitle3=o)},null,512),[[s,e.value.NewVisionTitle3]]),i(l("input",{type:"text",placeholder:"Нововвидение 3","onUpdate:modelValue":t[9]||(t[9]=o=>e.value.NewVision3=o)},null,512),[[s,e.value.NewVision3]])]),l("div",j,[i(l("input",{type:"text",placeholder:"Название нововвидение 4","onUpdate:modelValue":t[10]||(t[10]=o=>e.value.NewVisionTitle4=o)},null,512),[[s,e.value.NewVisionTitle4]]),i(l("input",{type:"text",placeholder:"Нововвидение 4","onUpdate:modelValue":t[11]||(t[11]=o=>e.value.NewVision4=o)},null,512),[[s,e.value.NewVision4]])])]),l("button",{onClick:w,disabled:!V.value},"Отправить",8,C),d.value?(r(),v("div",I,B)):c("",!0)])]))}},E=m(A,[["__scopeId","data-v-d0a3ac0a"]]);export{E as default};