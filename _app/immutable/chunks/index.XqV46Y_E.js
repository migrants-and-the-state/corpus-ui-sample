import{n as f,s as w,r as m,a as q}from"./utils.BPQkNdah.js";const a=[];function x(e,u){return{subscribe:z(e,u).subscribe}}function z(e,u=f){let t=null;const r=new Set;function i(n){if(q(e,n)&&(e=n,t)){const o=!a.length;for(const s of r)s[1](),a.push(s,e);if(o){for(let s=0;s<a.length;s+=2)a[s][0](a[s+1]);a.length=0}}}function b(n){i(n(e))}function l(n,o=f){const s=[n,o];return r.add(s),r.size===1&&(t=u(i,b)||f),n(e),()=>{r.delete(s),r.size===0&&t&&(t(),t=null)}}return{set:i,update:b,subscribe:l}}function B(e,u,t){const r=!Array.isArray(e),i=r?[e]:e;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=u.length<2;return x(t,(l,n)=>{let o=!1;const s=[];let d=0,p=f;const g=()=>{if(d)return;p();const c=u(r?s[0]:s,l,n);b?l(c):p=typeof c=="function"?c:f},_=i.map((c,y)=>w(c,h=>{s[y]=h,d&=~(1<<y),o&&g()},()=>{d|=1<<y}));return o=!0,g(),function(){m(_),p(),o=!1}})}function E(e){return{subscribe:e.subscribe.bind(e)}}export{E as a,B as d,x as r,z as w};
