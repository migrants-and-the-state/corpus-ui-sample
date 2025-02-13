import{K as V,a4 as L,a3 as N,V as C,L as w,aw as Y,ag as q,k as x,v as S,T as E,aK as z,aL as F,x as p,D as c,y as R,z as W,aM as M,aN as K,_ as Q,aO as O,C as b,U as J,aP as X,aQ as Z,Q as ee,A as te,aR as re,G as ne,p as ae,b as oe,h as ie}from"./D8_uhm_e.js";function he(e,t){if(t){const r=document.body;e.autofocus=!0,V(()=>{document.activeElement===r&&e.focus()})}}let P=!1;function se(){P||(P=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function $(e){var t=C,r=w;L(null),N(null);try{return e()}finally{L(t),N(r)}}function me(e,t,r,o=r){e.addEventListener(t,()=>$(r));const a=e.__on_r;a?e.__on_r=()=>{a(),o()}:e.__on_r=o,se()}const j=new Set,k=new Set;function ue(e,t,r,o){function a(n){if(o.capture||g.call(t,n),!n.cancelBubble)return $(()=>r.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?V(()=>{t.addEventListener(e,a,o)}):t.addEventListener(e,a,o),a}function ye(e,t,r,o,a){var n={capture:o,passive:a},i=ue(e,t,r,n);(t===document.body||t===window||t===document)&&Y(()=>{t.removeEventListener(e,i,n)})}function ge(e){for(var t=0;t<e.length;t++)j.add(e[t]);for(var r of k)r(e)}function g(e){var I;var t=this,r=t.ownerDocument,o=e.type,a=((I=e.composedPath)==null?void 0:I.call(e))||[],n=a[0]||e.target,i=0,d=e.__root;if(d){var f=a.indexOf(d);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var h=a.indexOf(t);if(h===-1)return;f<=h&&(i=f)}if(n=a[i]||e.target,n!==t){q(e,"currentTarget",{configurable:!0,get(){return n||r}});var A=C,l=w;L(null),N(null);try{for(var s,u=[];n!==null;){var v=n.assignedSlot||n.parentNode||n.host||null;try{var m=n["__"+o];if(m!==void 0&&!n.disabled)if(x(m)){var[U,...G]=m;U.apply(n,[e,...G])}else m.call(n,e)}catch(T){s?u.push(T):s=T}if(e.cancelBubble||v===t||v===null)break;n=v}if(s){for(let T of u)queueMicrotask(()=>{throw T});throw s}}finally{e.__root=t,delete e.currentTarget,L(A),N(l)}}}function B(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function _(e,t){var r=w;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Ee(e,t){var r=(t&z)!==0,o=(t&F)!==0,a,n=!e.startsWith("<!>");return()=>{if(p)return _(c,null),c;a===void 0&&(a=B(n?e:"<!>"+e),r||(a=E(a)));var i=o?document.importNode(a,!0):a.cloneNode(!0);if(r){var d=E(i),f=i.lastChild;_(d,f)}else _(i,i);return i}}function we(e,t,r="svg"){var o=!e.startsWith("<!>"),a=`<${r}>${o?e:"<!>"+e}</${r}>`,n;return()=>{if(p)return _(c,null),c;if(!n){var i=B(a),d=E(i);n=E(d)}var f=n.cloneNode(!0);return _(f,f),f}}function Te(e=""){if(!p){var t=S(e+"");return _(t,t),t}var r=c;return r.nodeType!==3&&(r.before(r=S()),R(r)),_(r,r),r}function be(){if(p)return _(c,null),c;var e=document.createDocumentFragment(),t=document.createComment(""),r=S();return e.append(t,r),_(t,r),e}function Le(e,t){if(p){w.nodes_end=c,W();return}e!==null&&e.before(t)}function Ne(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const fe=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Se(e){return fe.includes(e)}const ce={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function Ae(e){return e=e.toLowerCase(),ce[e]??e}const de=["touchstart","touchmove"];function le(e){return de.includes(e)}function Oe(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function _e(e,t){return H(e,t)}function Re(e,t){M(),t.intro=t.intro??!1;const r=t.target,o=p,a=c;try{for(var n=E(r);n&&(n.nodeType!==8||n.data!==K);)n=Q(n);if(!n)throw O;b(!0),R(n),W();const i=H(e,{...t,anchor:n});if(c===null||c.nodeType!==8||c.data!==J)throw X(),O;return b(!1),i}catch(i){if(i===O)return t.recover===!1&&Z(),M(),ee(r),b(!1),_e(e,t);throw i}finally{b(o),R(a)}}const y=new Map;function H(e,{target:t,anchor:r,props:o={},events:a,context:n,intro:i=!0}){M();var d=new Set,f=l=>{for(var s=0;s<l.length;s++){var u=l[s];if(!d.has(u)){d.add(u);var v=le(u);t.addEventListener(u,g,{passive:v});var m=y.get(u);m===void 0?(document.addEventListener(u,g,{passive:v}),y.set(u,1)):y.set(u,m+1)}}};f(te(j)),k.add(f);var h=void 0,A=re(()=>{var l=r??t.appendChild(S());return ne(()=>{if(n){ae({});var s=ie;s.c=n}a&&(o.$$events=a),p&&_(l,null),h=e(l,o)||{},p&&(w.nodes_end=c),n&&oe()}),()=>{var v;for(var s of d){t.removeEventListener(s,g);var u=y.get(s);--u===0?(document.removeEventListener(s,g),y.delete(s)):y.set(s,u)}k.delete(f),D.delete(h),l!==r&&((v=l.parentNode)==null||v.removeChild(l))}});return D.set(h,A),h}let D=new WeakMap;function Me(e){const t=D.get(e);t&&t()}const ve="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ve);export{Le as a,Te as b,be as c,se as d,ye as e,ue as f,ge as g,Re as h,Ne as i,he as j,Ae as k,Se as l,_e as m,we as n,me as o,Oe as s,Ee as t,Me as u};
