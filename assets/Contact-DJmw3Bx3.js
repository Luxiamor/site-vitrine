import{Q as b,r as s,R as c,Z as C,T as a,U as x,i as l,X as V,Y as m,a1 as U,V as g,P as q,W as w}from"./index-CJPsEzn1.js";import{V as _,c as y}from"./VCard-BZU3N4co.js";import{V as z,a as f,b as A}from"./VTextarea-CnB693pu.js";const k=b({__name:"Contact",setup(B){const o=s(!1),r=s({required:u=>!!u||"Requis.",email:u=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(u)||"Doit être un email"}),n=s(""),d=s(""),i=s(""),p=()=>{v()},v=()=>{n.value="",d.value="",i.value=""};return(u,e)=>(c(),C(x,{style:{width:"100%",height:"100%"}},{default:a(()=>[l(w,{justify:"center",align:"center",dense:"",style:{width:"100%",height:"100%"}},{default:a(()=>[l(V,{cols:"4"},{default:a(()=>e[4]||(e[4]=[m("h1",null,"Une question ?",-1),m("h3",null,"Écrivez nous et nous répondrons dans les plus bref délais",-1)])),_:1}),l(V,{cols:"6"},{default:a(()=>[l(_,{class:"pt-5",color:"white",border:"xl"},{default:a(()=>[l(z,{modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=t=>o.value=t)},{default:a(()=>[l(f,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=t=>n.value=t),label:"Email",rules:[r.value.required,r.value.email]},null,8,["modelValue","rules"]),l(f,{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=t=>d.value=t),label:"Sujet",rules:[r.value.required]},null,8,["modelValue","rules"]),l(A,{modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=t=>i.value=t),label:"Message"},null,8,["modelValue"])]),_:1},8,["modelValue"]),l(y,null,{default:a(()=>[l(U),l(g,{onClick:p,variant:"flat",color:"blue",disabled:!o.value},{default:a(()=>e[5]||(e[5]=[q("Envoyer")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{k as default};
