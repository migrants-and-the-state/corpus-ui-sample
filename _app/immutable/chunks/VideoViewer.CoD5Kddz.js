import{R as a,r as u,c as v,w as h,a as m,b as w,d as g,f as _,g as b,h as O}from"./6.Byt_hQxr.js";function P(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e,n){return e&&R(t.prototype,e),t}function V(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function f(t,e){return f=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},f(t,e)}function j(t){var e=T();return function(){var r=c(t),o;if(e){var s=c(this).constructor;o=Reflect.construct(r,arguments,s)}else o=r.apply(this,arguments);return I(this,o)}}function I(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return S(t)}function S(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},c(t)}var p=function(t){V(n,t);var e=j(n);function n(){return P(this,n),e.apply(this,arguments)}return E(n,[{key:"render",value:function(){var o=this.props,s=o.captions,l=o.classes,d=o.videoOptions,y=o.videoResources;return a.createElement("div",{className:l.container},a.createElement("video",Object.assign({className:l.video},d),y.map(function(i){return a.createElement(u.Fragment,{key:i.id},a.createElement("source",{src:i.id,type:i.getFormat()}))}),s.map(function(i){return a.createElement(u.Fragment,{key:i.id},a.createElement("track",{src:i.id,label:i.getDefaultLabel(),srcLang:i.getProperty("language")}))})))}}]),n}(u.Component);p.defaultProps={captions:[],videoOptions:{},videoResources:[]};var k=function(e,n){var r=n.windowId;return{captions:_(e,{windowId:r})||[],videoOptions:b(e).videoOptions,videoResources:O(e,{windowId:r})||[]}},x=function(){return{container:{alignItems:"center",display:"flex",width:"100%"},video:{maxHeight:"100%",width:"100%"}}},C=v(g(),w(x),m(k,null),h("VideoViewer"));const F=C(p);export{F as default};
