import{d as i,k as _,o as u,c as d,a as e,w as r,v as p,t as m,j as f,l as w,m as y,q as h}from"./index-hm79hTaG.js";const g={class:"register"},b=e("h2",null,"Регистрация",-1),k=e("label",{for:"username"},"Имя пользователя",-1),V=e("label",{for:"email"},"Email:",-1),x=e("label",{for:"password"},"Пароль:",-1),D=e("button",{type:"submit"},"Зарегистрироваться",-1),M={key:0},T={__name:"RegisterView",setup(N){const s=i({username:"",email:"",password:""}),l=i(null),n=i(null),v=async()=>{try{const t=await fetch("https://5ea90011a42bf510.mokky.dev/users",{method:"POST",body:JSON.stringify(s.value),header:{"Content-Type":"application/json"}});if(!t.ok){const a=await t.json();l.value=a.message||"Ошибка регистрации";return}n.value="Вы успешно зарегистрировавлись",s.value={username:"",email:"",password:""},h.push("/")}catch(t){console.log(t),l.value="Произошла ошибка при регистрации"}};return(t,a)=>{const c=_("id");return u(),d("div",g,[b,e("form",{onSubmit:y(v,["prevent"])},[e("div",null,[k,r(e("input",{type:"text",id:"username","onUpdate:modelValue":a[0]||(a[0]=o=>s.value.username=o)},null,512),[[p,s.value.username]])]),e("div",null,[V,r(e("input",{type:"email",id:"email","onUpdate:modelValue":a[1]||(a[1]=o=>s.value.email=o)},null,512),[[p,s.value.email]])]),e("div",null,[x,r(e("input",{type:"password",id:"password","onUpdate:modelValue":a[2]||(a[2]=o=>s.value.password=o)},null,512),[[p,s.value.password]])]),D,n.value?(u(),d("p",M,m(n.value),1)):f("",!0),r((u(),d("p",null,[w(m(l.value),1)])),[[c,l.value]])],32)])}}};export{T as default};
