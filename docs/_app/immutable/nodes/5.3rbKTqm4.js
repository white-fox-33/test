import{s as me,b as ge,n as ce,r as Ce,c as xe,o as be,d as ke}from"../chunks/scheduler.NrZV1iTz.js";import{S as Oe,i as ye,e as s,s as g,c as a,a as D,l as c,f as C,d as M,o as U,n as l,p,g as Le,h as e,u as pe,q as G,r as Ne,v as Ie}from"../chunks/index.CHYubJbX.js";import{u as de}from"../chunks/user.C2Qrz-SY.js";import{b as fe}from"../chunks/paths.G58mdfx5.js";import{g as Te}from"../chunks/entry.ClWBGd9s.js";function ze(i){let x,u,d,O="Registrering",w,t,r,y,b,J="Namn:",F,_,H,f,j="E-post:",V,h,Q,q,te="Lösenord:",W,m,X,S,le="Favoritfärg:",Y,o,L,ne="Blå",N,se="Röd",I,ae="Grön",T,oe="Gul",z,re="Lila",E,ie="Svart",P,ue="Vit",Z,B,$,R,ve=`<a href="${fe}/login" title="Logga in">Logga in</a>`,ee,_e;return{c(){x=s("main"),u=s("div"),d=s("h1"),d.textContent=O,w=g(),t=s("form"),r=s("div"),y=g(),b=s("label"),b.textContent=J,F=g(),_=s("input"),H=g(),f=s("label"),f.textContent=j,V=g(),h=s("input"),Q=g(),q=s("label"),q.textContent=te,W=g(),m=s("input"),X=g(),S=s("label"),S.textContent=le,Y=g(),o=s("select"),L=s("option"),L.textContent=ne,N=s("option"),N.textContent=se,I=s("option"),I.textContent=ae,T=s("option"),T.textContent=oe,z=s("option"),z.textContent=re,E=s("option"),E.textContent=ie,P=s("option"),P.textContent=ue,Z=g(),B=s("input"),$=g(),R=s("ref"),R.innerHTML=ve,this.h()},l(v){x=a(v,"MAIN",{class:!0});var k=D(x);u=a(k,"DIV",{class:!0});var K=D(u);d=a(K,"H1",{"data-svelte-h":!0}),c(d)!=="svelte-1bygy45"&&(d.textContent=O),w=C(K),t=a(K,"FORM",{});var n=D(t);r=a(n,"DIV",{style:!0});var he=D(r);he.forEach(M),y=C(n),b=a(n,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),c(b)!=="svelte-t4ghih"&&(b.textContent=J),F=C(n),_=a(n,"INPUT",{type:!0,id:!0,class:!0}),H=C(n),f=a(n,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),c(f)!=="svelte-q2vly4"&&(f.textContent=j),V=C(n),h=a(n,"INPUT",{type:!0,id:!0,class:!0}),Q=C(n),q=a(n,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),c(q)!=="svelte-1weckky"&&(q.textContent=te),W=C(n),m=a(n,"INPUT",{type:!0,id:!0,class:!0}),X=C(n),S=a(n,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),c(S)!=="svelte-zlhcgx"&&(S.textContent=le),Y=C(n),o=a(n,"SELECT",{id:!0,class:!0});var A=D(o);L=a(A,"OPTION",{"data-svelte-h":!0}),c(L)!=="svelte-ah6lgh"&&(L.textContent=ne),N=a(A,"OPTION",{"data-svelte-h":!0}),c(N)!=="svelte-cg3acp"&&(N.textContent=se),I=a(A,"OPTION",{"data-svelte-h":!0}),c(I)!=="svelte-1adna36"&&(I.textContent=ae),T=a(A,"OPTION",{"data-svelte-h":!0}),c(T)!=="svelte-1kh70yg"&&(T.textContent=oe),z=a(A,"OPTION",{"data-svelte-h":!0}),c(z)!=="svelte-5kcq7k"&&(z.textContent=re),E=a(A,"OPTION",{"data-svelte-h":!0}),c(E)!=="svelte-1isrnrr"&&(E.textContent=ie),P=a(A,"OPTION",{"data-svelte-h":!0}),c(P)!=="svelte-19dujp6"&&(P.textContent=ue),A.forEach(M),Z=C(n),B=a(n,"INPUT",{type:!0,class:!0}),$=C(n),R=a(n,"REF",{class:!0,"data-svelte-h":!0}),c(R)!=="svelte-1g9vg8n"&&(R.innerHTML=ve),n.forEach(M),K.forEach(M),k.forEach(M),this.h()},h(){U(r,"width","100px"),U(r,"height","100px"),U(r,"border-radius","50%"),U(r,"overflow","hidden"),U(r,"background-color",i[3]),U(r,"margin","auto"),l(b,"for","name"),l(b,"class","svelte-1enzkvc"),l(_,"type","text"),l(_,"id","name"),_.required=!0,l(_,"class","svelte-1enzkvc"),l(f,"for","email"),l(f,"class","svelte-1enzkvc"),l(h,"type","email"),l(h,"id","email"),h.required=!0,l(h,"class","svelte-1enzkvc"),l(q,"for","password"),l(q,"class","svelte-1enzkvc"),l(m,"type","password"),l(m,"id","password"),m.required=!0,l(m,"class","svelte-1enzkvc"),l(S,"for","color"),l(S,"class","svelte-1enzkvc"),L.__value="blue",p(L,L.__value),N.__value="red",p(N,N.__value),I.__value="green",p(I,I.__value),T.__value="yellow",p(T,T.__value),z.__value="purple",p(z,z.__value),E.__value="black",p(E,E.__value),P.__value="white",p(P,P.__value),l(o,"id","color"),l(o,"class","svelte-1enzkvc"),i[3]===void 0&&ge(()=>i[8].call(o)),l(B,"type","submit"),B.value="Registrera",l(B,"class","svelte-1enzkvc"),l(R,"class","svelte-1enzkvc"),l(u,"class","container svelte-1enzkvc"),l(x,"class","svelte-1enzkvc")},m(v,k){Le(v,x,k),e(x,u),e(u,d),e(u,w),e(u,t),e(t,r),e(t,y),e(t,b),e(t,F),e(t,_),p(_,i[0]),e(t,H),e(t,f),e(t,V),e(t,h),p(h,i[1]),e(t,Q),e(t,q),e(t,W),e(t,m),p(m,i[2]),e(t,X),e(t,S),e(t,Y),e(t,o),e(o,L),e(o,N),e(o,I),e(o,T),e(o,z),e(o,E),e(o,P),pe(o,i[3],!0),e(t,Z),e(t,B),e(t,$),e(t,R),ee||(_e=[G(_,"input",i[5]),G(h,"input",i[6]),G(m,"input",i[7]),G(o,"change",i[8]),G(t,"submit",Ne(i[4]))],ee=!0)},p(v,[k]){k&8&&U(r,"background-color",v[3]),k&1&&_.value!==v[0]&&p(_,v[0]),k&2&&h.value!==v[1]&&p(h,v[1]),k&4&&m.value!==v[2]&&p(m,v[2]),k&8&&pe(o,v[3])},i:ce,o:ce,d(v){v&&M(x),ee=!1,Ce(_e)}}}function Ee(i,x,u){let d;xe(i,de,f=>u(10,d=f));let O="",w="",t="",r="blue",y=[];be(()=>{d.length>2&&(y=JSON.parse(d))});function b(){if(y.filter(V=>V.username===O).length>0){alert("Användarnamnet är redan taget!");return}let j={username:O,password:t,email:w,color:r};y=[...y,j],ke(de,d=JSON.stringify(y),d),alert(`Registrering lyckades, ${O}!`),Te(`${fe}/login`)}function J(){O=this.value,u(0,O)}function F(){w=this.value,u(1,w)}function _(){t=this.value,u(2,t)}function H(){r=Ie(this),u(3,r)}return[O,w,t,r,b,J,F,_,H]}class Re extends Oe{constructor(x){super(),ye(this,x,Ee,ze,me,{})}}export{Re as component};
