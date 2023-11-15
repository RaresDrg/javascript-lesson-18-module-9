const e=document.getElementById("statusMessage");new Promise(((e,s)=>{setTimeout((()=>{e({status:"ok",message:"Totul a fost ok"})}),2e3)})).then((s=>{console.log(s),e.innerHTML=`<h1>${s.status}</h1><p>${s.message}</p>`})).catch((s=>{console.log(s),e.innerHTML=`<h1>${s.status}</h1><p>${s.message}</p>`}));
//# sourceMappingURL=04-example-4.0d32cc40.js.map
