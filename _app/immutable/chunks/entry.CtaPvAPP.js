import{n as q,f as lt,aO as ft,aj as ut}from"./runtime.bQ6G5Iqo.js";import{s as dt}from"./utils.DIi_LTsu.js";import{a as ht,b as U}from"./paths.CmqexS5n.js";new URL("sveltekit-internal://");function pt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function gt(e){return e.split("%25").map(decodeURI).join("%25")}function mt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ue({href:e}){return e.split("#")[0]}const yt=["href","pathname","search","toString","toJSON"];function _t(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of yt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const wt="/__data.json",bt=".html__data.json";function vt(e){return e.endsWith(".html")?e.replace(/\.html$/,bt):e.replace(/\/$/,"")+wt}function At(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Et(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const $e=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&G.delete(ye(e)),$e(e,n));const G=new Map;function kt(e,n){const t=ye(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&G.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Et(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function St(e,n,t){if(G.size>0){const r=ye(e,t),a=G.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);G.delete(r)}}return window.fetch(n,t)}function ye(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${At(...a)}"]`}return r}const Rt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function It(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Ut(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return de(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return de(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=Rt.exec(c),[,h,m,u,p]=d;return n.push({name:u,matcher:p,optional:!!h,rest:!!m,chained:m?l===1&&i[0]==="":!1}),m?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return de(c)}).join("")}).join("")}/?$`),params:n}}function Tt(e){return!/^\([^)]+\)$/.test(e)}function Ut(e){return e.slice(1).split("/").filter(Tt)}function Lt(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){r[c.name]=l;const d=n[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function de(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function xt({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,l,d]])=>{const{pattern:h,params:m}=It(s),u={id:s,exec:p=>{const f=h.exec(p);if(f)return Lt(f,m,r)},errors:[1,...d||[]].map(p=>e[p]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function Be(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Ue(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}const N=[];function Pt(e,n){return{subscribe:ae(e,n).subscribe}}function ae(e,n=q){let t=null;const r=new Set;function a(s){if(ft(e,s)&&(e=s,t)){const c=!N.length;for(const l of r)l[1](),N.push(l,e);if(c){for(let l=0;l<N.length;l+=2)N[l][0](N[l+1]);N.length=0}}}function o(s){a(s(e))}function i(s,c=q){const l=[s,c];return r.add(l),r.size===1&&(t=n(a,o)||q),s(e),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:a,update:o,subscribe:i}}function dn(e,n,t){const r=!Array.isArray(e),a=r?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const o=n.length<2;return Pt(t,(i,s)=>{let c=!1;const l=[];let d=0,h=q;const m=()=>{if(d)return;h();const p=n(r?l[0]:l,i,s);o?i(p):h=typeof p=="function"?p:q},u=a.map((p,f)=>dt(p,g=>{l[f]=g,d&=~(1<<f),c&&m()},()=>{d|=1<<f}));return c=!0,m(),function(){lt(u),h(),c=!1}})}function hn(e){return{subscribe:e.subscribe.bind(e)}}const Ct="1734383263583",Fe="sveltekit:snapshot",Ve="sveltekit:scroll",qe="sveltekit:states",Nt="sveltekit:pageurl",D="sveltekit:history",H="sveltekit:navigation",J={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Y=location.origin;function Ge(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function _e(){return{x:pageXOffset,y:pageYOffset}}function O(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Le={...J,"":J.hover};function Me(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function He(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Me(e)}}function pe(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||oe(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===Y&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function X(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=O(s,"preload-code")),a===null&&(a=O(s,"preload-data")),n===null&&(n=O(s,"keepfocus")),t===null&&(t=O(s,"noscroll")),o===null&&(o=O(s,"reload")),i===null&&(i=O(s,"replacestate")),s=Me(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Le[r??"off"],preload_data:Le[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function xe(e){const n=ae(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Ot(){const{set:e,subscribe:n}=ae(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${ht}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Ct;return i&&(e(!0),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:r}}function oe(e,n){return e.origin!==Y||!e.pathname.startsWith(n)}function Pe(e){const n=Dt(e),t=new ArrayBuffer(n.length),r=new DataView(t);for(let a=0;a<t.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return t}const jt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Dt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,r=0;for(let a=0;a<e.length;a++)t<<=6,t|=jt.indexOf(e[a]),r+=6,r===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=r=0);return r===12?(t>>=4,n+=String.fromCharCode(t)):r===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const $t=-1,Bt=-2,Ft=-3,Vt=-4,qt=-5,Gt=-6;function Mt(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===$t)return;if(o===Ft)return NaN;if(o===Vt)return 1/0;if(o===qt)return-1/0;if(o===Gt)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const m=Object.create(null);r[o]=m;for(let u=1;u<s.length;u+=2)m[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],p=s[1],f=Pe(p),g=new u(f);r[o]=g;break}case"ArrayBuffer":{const u=s[1],p=Pe(u);r[o]=p;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==Bt&&(c[l]=a(d))}}else{const c={};r[o]=c;for(const l in s){const d=s[l];c[l]=a(d)}}return r[o]}return a(0)}const Ke=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ke];const Ht=new Set([...Ke]);[...Ht];function Kt(e){return e.filter(n=>n!=null)}class se{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class We{constructor(n,t){this.status=n,this.location=t}}class we extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const Wt="x-sveltekit-invalidated",Yt="x-sveltekit-trailing-slash";function Z(e){return e instanceof se||e instanceof we?e.status:500}function zt(e){return e instanceof we?e.text:"Internal Error"}const Jt=new Set(["icon","shortcut icon","apple-touch-icon"]),C=Be(Ve)??{},K=Be(Fe)??{},x={url:xe({}),page:xe({}),navigating:ae(null),updated:Ot()};function be(e){C[e]=_e()}function Xt(e,n){let t=e+1;for(;C[t];)delete C[t],t+=1;for(t=n+1;K[t];)delete K[t],t+=1}function B(e){return location.href=e.href,new Promise(()=>{})}async function Ye(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function Ce(){}let ie,ge,Q,L,me,F;const ze=[],ee=[];let R=null;const Je=[],Zt=[];let j=[],_={branch:[],error:null,url:null},ve=!1,te=!1,Ne=!0,W=!1,V=!1,Xe=!1,Ae=!1,Ee,S,T,I,ne;const M=new Set;async function pn(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),F=e,ie=xt(e),L=document.documentElement,me=n,ge=e.nodes[0],Q=e.nodes[1],ge(),Q(),S=(a=history.state)==null?void 0:a[D],T=(o=history.state)==null?void 0:o[H],S||(S=T=Date.now(),history.replaceState({...history.state,[D]:S,[H]:T},""));const r=C[S];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await sn(me,t):an(location.href,{replaceState:!0}),on()}function Qt(){ze.length=0,Ae=!1}function Ze(e){ee.some(n=>n==null?void 0:n.snapshot)&&(K[e]=ee.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function Qe(e){var n;(n=K[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=ee[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function Oe(){be(S),Ue(Ve,C),Ze(T),Ue(Fe,K)}async function et(e,n,t,r){return z({type:"goto",url:Ge(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(Ae=!0)}})}async function en(e){if(e.id!==(R==null?void 0:R.id)){const n={};M.add(n),R={id:e.id,token:n,promise:nt({...e,preload:n}).then(t=>(M.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function he(e){const n=ie.find(t=>t.exec(rt(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function tt(e,n,t){var o;_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),I=e.props.page,Ee=new F.root({target:n,props:{...e.props,stores:x,components:ee},hydrate:t,sync:!1}),Qe(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(i=>i(a)),te=!0}function re({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if(U&&(e.pathname===U||e.pathname===U+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=pt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Kt(t).map(u=>u.node.component),page:I}};i!==void 0&&(c.props.form=i);let l={},d=!I,h=0;for(let u=0;u<Math.max(t.length,_.branch.length);u+=1){const p=t[u],f=_.branch[u];(p==null?void 0:p.data)!==(f==null?void 0:f.data)&&(d=!0),p&&(l={...l,...p.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||i!==void 0&&i!==I.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:I.data}),c}async function ke({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var d,h,m;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const g of f){const{href:v}=new URL(g,t);c.dependencies.add(v)}};const p={route:new Proxy(a,{get:(f,g)=>(s&&(c.route=!0),f[g])}),params:new Proxy(r,{get:(f,g)=>(s&&c.params.add(g),f[g])}),data:(o==null?void 0:o.data)??null,url:_t(t,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,g){let v;f instanceof Request?(v=f.url,g={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...g}):v=f;const E=new URL(v,t);return s&&u(E.href),E.origin===t.origin&&(v=E.href.slice(t.origin.length)),te?St(v,E.href,g):kt(v,g)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,p)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((m=l.universal)==null?void 0:m.trailingSlash)??(o==null?void 0:o.slash)}}function je(e,n,t,r,a,o){if(Ae)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(ze.some(s=>s(new URL(i))))return!0;return!1}function Se(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function tn(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}function De({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:I,constructors:[]}}}async function nt({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((R==null?void 0:R.id)===e)return M.delete(R.token),R.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(y=>y==null?void 0:y().catch(()=>{})),l.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let d=null;const h=_.url?e!==_.url.pathname+_.url.search:!1,m=_.route?a.id!==_.route.id:!1,u=tn(_.url,t);let p=!1;const f=l.map((y,b)=>{var P;const A=_.branch[b],k=!!(y!=null&&y[0])&&((A==null?void 0:A.loader)!==y[1]||je(p,m,h,u,(P=A.server)==null?void 0:P.uses,r));return k&&(p=!0),k});if(f.some(Boolean)){try{d=await st(t,f)}catch(y){const b=await $(y,{url:t,params:r,route:{id:e}});return M.has(o)?De({error:b,url:t,params:r,route:a}):ce({status:Z(y),error:b,url:t,route:a})}if(d.type==="redirect")return d}const g=d==null?void 0:d.nodes;let v=!1;const E=l.map(async(y,b)=>{var le;if(!y)return;const A=_.branch[b],k=g==null?void 0:g[b];if((!k||k.type==="skip")&&y[1]===(A==null?void 0:A.loader)&&!je(v,m,h,u,(le=A.universal)==null?void 0:le.uses,r))return A;if(v=!0,(k==null?void 0:k.type)==="error")throw k;return ke({loader:y[1],url:t,params:r,route:a,parent:async()=>{var Te;const Ie={};for(let fe=0;fe<b;fe+=1)Object.assign(Ie,(Te=await E[fe])==null?void 0:Te.data);return Ie},server_data_node:Se(k===void 0&&y[0]?{type:"skip"}:k??null,y[0]?A==null?void 0:A.server:void 0)})});for(const y of E)y.catch(()=>{});const w=[];for(let y=0;y<l.length;y+=1)if(l[y])try{w.push(await E[y])}catch(b){if(b instanceof We)return{type:"redirect",location:b.location};if(M.has(o))return De({error:await $(b,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let A=Z(b),k;if(g!=null&&g.includes(b))A=b.status??A,k=b.error;else if(b instanceof se)k=b.body;else{if(await x.updated.check())return await Ye(),await B(t);k=await $(b,{params:r,url:t,route:{id:a.id}})}const P=await nn(y,w,i);return P?re({url:t,params:r,branch:w.slice(0,P.idx).concat(P.node),status:A,error:k,route:a}):await ot(t,{id:a.id},k,A)}else w.push(void 0);return re({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function nn(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:e,error:n,url:t,route:r}){const a={};let o=null;if(F.server_loads[0]===0)try{const l=await st(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==Y||t.pathname!==location.pathname||ve)&&await B(t)}const s=await ke({loader:ge,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Se(o)}),c={node:await Q(),loader:Q,universal:null,server:null,data:null};return re({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function Re(e,n){if(!e||oe(e,U))return;let t;try{t=F.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=rt(t);for(const a of ie){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:mt(o),url:e}}}function rt(e){return gt(e.slice(U.length)||"/")}function at({url:e,type:n,intent:t,delta:r}){let a=!1;const o=ct(_,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return W||Je.forEach(s=>s(i)),a?null:o}async function z({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Ce,block:d=Ce}){const h=Re(n,!1),m=at({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!m){d();return}const u=S,p=T;l(),W=!0,te&&x.navigating.set(m.navigation),ne=c;let f=h&&await nt(h);if(!f){if(oe(n,U))return await B(n);f=await ot(n,{id:null},await $(new we(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,ne!==c)return m.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await ce({status:500,error:await $(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return et(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await x.updated.check()&&(await Ye(),await B(n));if(Qt(),be(u),Ze(p),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=t?t.state:i,!t){const w=o?0:1,y={[D]:S+=w,[H]:T+=w,[qe]:i};(o?history.replaceState:history.pushState).call(history,y,"",n),o||Xt(S,T)}if(R=null,f.props.page.state=i,te){_=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(Zt.map(y=>y(m.navigation)))).filter(y=>typeof y=="function");if(w.length>0){let y=function(){j=j.filter(b=>!w.includes(b))};w.push(y),j.push(...w)}Ee.$set(f.props),Xe=!0}else tt(f,me,!1);const{activeElement:g}=document;await ut();const v=t?t.scroll:a?_e():null;if(Ne){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));v?scrollTo(v.x,v.y):w?w.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==g&&document.activeElement!==document.body;!r&&!E&&cn(),Ne=!0,f.props.page&&(I=f.props.page),W=!1,e==="popstate"&&Qe(T),m.fulfil(void 0),j.forEach(w=>w(m.navigation)),x.navigating.set(null)}async function ot(e,n,t,r){return e.origin===Y&&e.pathname===location.pathname&&!ve?await ce({status:r,error:t,url:e,route:n}):await B(e)}function rn(){let e;L.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){o.defaultPrevented||r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(he(i.target.href),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=He(o,L);if(!s)return;const{url:c,external:l,download:d}=pe(s,U);if(l||d)return;const h=X(s),m=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!m)if(i<=h.preload_data){const u=Re(c,!1);u&&en(u)}else i<=h.preload_code&&he(c.pathname)}function a(){t.disconnect();for(const o of L.querySelectorAll("a")){const{url:i,external:s,download:c}=pe(o,U);if(s||c)continue;const l=X(o);l.reload||(l.preload_code===J.viewport&&t.observe(o),l.preload_code===J.eager&&he(i.pathname))}}j.push(a),a()}function $(e,n){if(e instanceof se)return e.body;const t=Z(e),r=zt(e);return F.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function an(e,n={}){return e=Ge(e),e.origin!==Y?Promise.reject(new Error("goto: invalid URL")):et(e,n,0)}function on(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Oe(),!W){const a=ct(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Je.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Oe()}),(n=navigator.connection)!=null&&n.saveData||rn(),L.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=He(t.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:i,download:s}=pe(r,U);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=X(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=a.href.split("#"),m=d===ue(location);if(o||c.reload&&(!m||!h)){at({url:a,type:"link"})?W=!0:t.preventDefault();return}if(h!==void 0&&m){const[,u]=_.url.href.split("#");if(u===h){if(t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const p=r.ownerDocument.getElementById(decodeURIComponent(h));p&&(p.scrollIntoView(),p.focus())}return}if(V=!0,be(S),e(a),!c.replace_state)return;V=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),z({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(oe(s,U))return;const c=t.target,l=X(c);if(l.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),z({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[D]){const a=t.state[D];if(ne={},a===S)return;const o=C[a],i=t.state[qe]??{},s=new URL(t.state[Nt]??location.href),c=t.state[H],l=ue(location)===ue(_.url);if(c===T&&(Xe||l)){e(s),C[S]=_e(),o&&scrollTo(o.x,o.y),i!==I.state&&(I={...I,state:i},Ee.$set({page:I})),S=a;return}const h=a-S;await z({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{S=a,T=c},block:()=>{history.go(-h)},nav_token:ne})}else if(!V){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[D]:++S,[H]:T},"",location.href))});for(const t of document.querySelectorAll("link"))Jt.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&x.navigating.set(null)});function e(t){_.url=t,x.page.set({...I,url:t}),x.page.notify()}}async function sn(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){ve=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Re(c,!1)||{});let l,d=!0;try{const h=r.map(async(p,f)=>{const g=i[f];return g!=null&&g.uses&&(g.uses=it(g.uses)),ke({loader:F.nodes[p],url:c,params:a,route:o,parent:async()=>{const v={};for(let E=0;E<f;E+=1)Object.assign(v,(await h[E]).data);return v},server_data_node:Se(g)})}),m=await Promise.all(h),u=ie.find(({id:p})=>p===o.id);if(u){const p=u.layouts;for(let f=0;f<p.length;f++)p[f]||m.splice(f,0,void 0)}l=re({url:c,params:a,branch:m,status:n,error:t,form:s,route:u??null})}catch(h){if(h instanceof We){await B(new URL(h.location,location.href));return}l=await ce({status:Z(h),error:await $(h,{url:c,params:a,route:o}),url:c,route:o}),e.textContent="",d=!1}l.props.page&&(l.props.page.state={}),tt(l,e,d)}async function st(e,n){var a;const t=new URL(e);t.pathname=vt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Yt,"1"),t.searchParams.append(Wt,n.map(o=>o?"1":"0").join(""));const r=await $e(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new se(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(m){return Mt(m,{Promise:u=>new Promise((p,f)=>{i.set(u,{fulfil:p,reject:f})})})}let d="";for(;;){const{done:m,value:u}=await s.read();if(m&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const p=d.indexOf(`
`);if(p===-1)break;const f=JSON.parse(d.slice(0,p));if(d=d.slice(p+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(g=>{(g==null?void 0:g.type)==="data"&&(g.uses=it(g.uses),g.data=l(g.data))}),o(f);else if(f.type==="chunk"){const{id:g,data:v,error:E}=f,w=i.get(g);i.delete(g),E?w.reject(l(E)):w.fulfil(l(v))}}}})}function it(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function cn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ct(e,n,t,r){var c,l;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{hn as a,pn as b,dn as d,an as g,Pt as r,x as s,ae as w};
