import{S as O,N as W,O as X,P as w,Q as J,k as y,U as h,R as S,o as P,T as q,V as k,K as ee,y as re,d as ne,W as Y,e as j,i as B,h as L,b as ie,E as te,X as se,Y as ae,Z as fe,_ as U,g as ue,$ as le,a0 as ce,A as C,a1 as de,a2 as _e,a3 as ve,a4 as z,a5 as oe,a6 as M,a7 as m,a8 as Q,a9 as he,aa as pe,ab as H,ac as be,w as Pe,ad as we,ae as ye,H as Z,af as ge,ag as Re,ah as Ee}from"./runtime.D5J1aCs5.js";import{j as Ie}from"./store.BtD9tB7l.js";function I(e,r=null,t){if(typeof e!="object"||e===null||O in e)return e;const a=ee(e);if(a!==W&&a!==X)return e;var i=new Map,c=re(e),v=w(0);c&&i.set("length",w(e.length));var o;return new Proxy(e,{defineProperty(l,n,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&J();var f=i.get(n);return f===void 0?(f=w(s.value),i.set(n,f)):y(f,I(s.value,o)),!0},deleteProperty(l,n){var s=i.get(n);if(s===void 0)n in l&&i.set(n,w(h));else{if(c&&typeof n=="string"){var f=i.get("length"),u=Number(n);Number.isInteger(u)&&u<f.v&&y(f,u)}y(s,h),$(v)}return!0},get(l,n,s){var p;if(n===O)return e;var f=i.get(n),u=n in l;if(f===void 0&&(!u||(p=S(l,n))!=null&&p.writable)&&(f=w(I(u?l[n]:h,o)),i.set(n,f)),f!==void 0){var d=P(f);return d===h?void 0:d}return Reflect.get(l,n,s)},getOwnPropertyDescriptor(l,n){var s=Reflect.getOwnPropertyDescriptor(l,n);if(s&&"value"in s){var f=i.get(n);f&&(s.value=P(f))}else if(s===void 0){var u=i.get(n),d=u==null?void 0:u.v;if(u!==void 0&&d!==h)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return s},has(l,n){var d;if(n===O)return!0;var s=i.get(n),f=s!==void 0&&s.v!==h||Reflect.has(l,n);if(s!==void 0||q!==null&&(!f||(d=S(l,n))!=null&&d.writable)){s===void 0&&(s=w(f?I(l[n],o):h),i.set(n,s));var u=P(s);if(u===h)return!1}return f},set(l,n,s,f){var R;var u=i.get(n),d=n in l;if(c&&n==="length")for(var p=s;p<u.v;p+=1){var g=i.get(p+"");g!==void 0?y(g,h):p in l&&(g=w(h),i.set(p+"",g))}u===void 0?(!d||(R=S(l,n))!=null&&R.writable)&&(u=w(void 0),y(u,I(s,o)),i.set(n,u)):(d=u.v!==h,y(u,I(s,o)));var b=Reflect.getOwnPropertyDescriptor(l,n);if(b!=null&&b.set&&b.set.call(f,s),!d){if(c&&typeof n=="string"){var x=i.get("length"),T=Number(n);Number.isInteger(T)&&T>=x.v&&y(x,T+1)}$(v)}return!0},ownKeys(l){P(v);var n=Reflect.ownKeys(l).filter(u=>{var d=i.get(u);return d===void 0||d.v!==h});for(var[s,f]of i)f.v!==h&&!(s in l)&&n.push(s);return n},setPrototypeOf(){k()}})}function $(e,r=1){y(e,e.v+r)}function me(e,r,t,a=null,i=!1){L&&ie();var c=e,v=null,o=null,l=null,n=i?te:0;ne(()=>{if(l===(l=!!r()))return;let s=!1;if(L){const f=c.data===se;l===f&&(c=ae(),fe(c),U(!1),s=!0)}l?(v?Y(v):v=j(()=>t(c)),o&&B(o,()=>{o=null})):(o?Y(o):a&&(o=j(()=>a(c))),v&&B(v,()=>{v=null})),s&&U(!0)},n),L&&(c=ue)}function G(e,r){return e===r||(e==null?void 0:e[O])===r}function Ne(e={},r,t,a){return le(()=>{var i,c;return ce(()=>{i=c,c=[],C(()=>{e!==t(...c)&&(r(e,...c),i&&G(t(...i),e)&&r(null,...i))})}),()=>{de(()=>{c&&G(t(...c),e)&&r(null,...c)})}}),e}function De(e,r=1){const t=e();return e(t+r),t}const Oe={get(e,r){if(!e.exclude.includes(r))return P(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,t){return r in e.special||(e.special[r]=xe({get[r](){return e.props[r]}},r,z)),e.special[r](t),M(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),M(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Le(e,r){return new Proxy({props:e,exclude:r,special:{},version:w(0)},Oe)}const Se={get(e,r){let t=e.props.length;for(;t--;){let a=e.props[t];if(m(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},set(e,r,t){let a=e.props.length;for(;a--;){let i=e.props[a];m(i)&&(i=i());const c=S(i,r);if(c&&c.set)return c.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let a=e.props[t];if(m(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const i=S(a,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){if(r===O||r===Q)return!1;for(let t of e.props)if(m(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props){m(t)&&(t=t());for(const a in t)r.includes(a)||r.push(a)}return r}};function qe(...e){return new Proxy({props:e},Se)}function V(e){for(var r=q,t=q;r!==null&&!(r.f&(he|pe));)r=r.parent;try{return H(r),e()}finally{H(t)}}function xe(e,r,t,a){var K;var i=(t&be)!==0,c=!Pe||(t&we)!==0,v=(t&ye)!==0,o=(t&Re)!==0,l=!1,n;v?[n,l]=Ie(()=>e[r]):n=e[r];var s=O in e||Q in e,f=((K=S(e,r))==null?void 0:K.set)??(s&&v&&r in e?_=>e[r]=_:void 0),u=a,d=!0,p=!1,g=()=>(p=!0,d&&(d=!1,o?u=C(a):u=a),u);n===void 0&&a!==void 0&&(f&&c&&_e(),n=g(),f&&f(n));var b;if(c)b=()=>{var _=e[r];return _===void 0?g():(d=!0,p=!1,_)};else{var x=V(()=>(i?Z:ge)(()=>e[r]));x.f|=ve,b=()=>{var _=P(x);return _!==void 0&&(u=void 0),_===void 0?u:_}}if(!(t&z))return b;if(f){var T=e.$$legacy;return function(_,E){return arguments.length>0?((!c||!E||T||l)&&f(E?b():_),_):b()}}var R=!1,F=!1,N=Ee(n),A=V(()=>Z(()=>{var _=b(),E=P(N);return R?(R=!1,F=!0,E):(F=!1,N.v=_)}));return i||(A.equals=oe),function(_,E){if(arguments.length>0){const D=E?P(A):c&&v?I(_):_;return A.equals(D)||(R=!0,y(N,D),p&&u!==void 0&&(u=D),C(()=>P(A))),_}return P(A)}}export{I as a,Ne as b,me as i,Le as l,xe as p,qe as s,De as u};
