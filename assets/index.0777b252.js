import{_ as it}from"./plugin-vue_export-helper.21dcd24c.js";import{o as lt,j as ut,a6 as N,a7 as b}from"./index.462a6d42.js";function ft(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ht=Object.prototype.hasOwnProperty,v=(t,e)=>ht.call(t,e),h=Array.isArray,T=t=>U(t)==="[object Map]",pt=t=>typeof t=="string",$=t=>typeof t=="symbol",x=t=>t!==null&&typeof t=="object",dt=Object.prototype.toString,U=t=>dt.call(t),_t=t=>U(t).slice(8,-1),B=t=>pt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,X=(t,e)=>!Object.is(t,e),Z=t=>{const e=new Set(t);return e.w=0,e.n=0,e},gt=t=>(t.w&C)>0,wt=t=>(t.n&C)>0,z=new WeakMap;let C=1,O;const _=Symbol(""),V=Symbol("");let K=!0;const k=[];function mt(){k.push(K),K=!1}function bt(){const t=k.pop();K=t===void 0?!0:t}function u(t,e,n){if(K&&O){let r=z.get(t);r||z.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Z()),Et(s)}}function Et(t,e){let n=!1;wt(t)||(t.n|=C,n=!gt(t)),n&&(t.add(O),O.deps.push(t))}function d(t,e,n,r,s,o){const c=z.get(t);if(!c)return;let a=[];if(e==="clear")a=[...c.values()];else if(n==="length"&&h(t))c.forEach((l,f)=>{(f==="length"||f>=r)&&a.push(l)});else switch(n!==void 0&&a.push(c.get(n)),e){case"add":h(t)?B(n)&&a.push(c.get("length")):(a.push(c.get(_)),T(t)&&a.push(c.get(V)));break;case"delete":h(t)||(a.push(c.get(_)),T(t)&&a.push(c.get(V)));break;case"set":T(t)&&a.push(c.get(_));break}if(a.length===1)a[0]&&y(a[0]);else{const l=[];for(const f of a)f&&l.push(...f);y(Z(l))}}function y(t,e){const n=h(t)?t:[...t];for(const r of n)r.computed&&D(r);for(const r of n)r.computed||D(r)}function D(t,e){(t!==O||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const It=ft("__proto__,__v_isRef,__isVue"),tt=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($)),St=et(),Rt=et(!0),q=Mt();function Mt(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=i(this);for(let o=0,c=this.length;o<c;o++)u(r,"get",o+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(i)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){mt();const r=i(this)[e].apply(this,n);return bt(),r}}),t}function et(t=!1,e=!1){return function(r,s,o){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&o===(t?e?Ht:rt:e?Ct:st).get(r))return r;const c=h(r);if(!t&&c&&v(q,s))return Reflect.get(q,s,o);const a=Reflect.get(r,s,o);return($(s)?tt.has(s):It(s))||(t||u(r,"get",s),e)?a:g(a)?c&&B(s)?a:a.value:x(a)?t?ot(a):j(a):a}}const Tt=Ot();function Ot(t=!1){return function(n,r,s,o){let c=n[r];if(W(c)&&g(c)&&!g(s))return!1;if(!t&&!W(s)&&(yt(s)||(s=i(s),c=i(c)),!h(n)&&g(c)&&!g(s)))return c.value=s,!0;const a=h(n)&&B(r)?Number(r)<n.length:v(n,r),l=Reflect.set(n,r,s,o);return n===i(o)&&(a?X(s,c)&&d(n,"set",r,s):d(n,"add",r,s)),l}}function Kt(t,e){const n=v(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&d(t,"delete",e,void 0),r}function jt(t,e){const n=Reflect.has(t,e);return(!$(e)||!tt.has(e))&&u(t,"has",e),n}function vt(t){return u(t,"iterate",h(t)?"length":_),Reflect.ownKeys(t)}const xt={get:St,set:Tt,deleteProperty:Kt,has:jt,ownKeys:vt},Pt={get:Rt,set(t,e){return!0},deleteProperty(t,e){return!0}},H=t=>t,P=t=>Reflect.getPrototypeOf(t);function E(t,e,n=!1,r=!1){t=t.__v_raw;const s=i(t),o=i(e);n||(e!==o&&u(s,"get",e),u(s,"get",o));const{has:c}=P(s),a=r?H:n?Y:G;if(c.call(s,e))return a(t.get(e));if(c.call(s,o))return a(t.get(o));t!==s&&t.get(e)}function I(t,e=!1){const n=this.__v_raw,r=i(n),s=i(t);return e||(t!==s&&u(r,"has",t),u(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function S(t,e=!1){return t=t.__v_raw,!e&&u(i(t),"iterate",_),Reflect.get(t,"size",t)}function F(t){t=i(t);const e=i(this);return P(e).has.call(e,t)||(e.add(t),d(e,"add",t,t)),this}function L(t,e){e=i(e);const n=i(this),{has:r,get:s}=P(n);let o=r.call(n,t);o||(t=i(t),o=r.call(n,t));const c=s.call(n,t);return n.set(t,e),o?X(e,c)&&d(n,"set",t,e):d(n,"add",t,e),this}function J(t){const e=i(this),{has:n,get:r}=P(e);let s=n.call(e,t);s||(t=i(t),s=n.call(e,t)),r&&r.call(e,t);const o=e.delete(t);return s&&d(e,"delete",t,void 0),o}function Q(){const t=i(this),e=t.size!==0,n=t.clear();return e&&d(t,"clear",void 0,void 0),n}function R(t,e){return function(r,s){const o=this,c=o.__v_raw,a=i(c),l=e?H:t?Y:G;return!t&&u(a,"iterate",_),c.forEach((f,w)=>r.call(s,l(f),l(w),o))}}function M(t,e,n){return function(...r){const s=this.__v_raw,o=i(s),c=T(o),a=t==="entries"||t===Symbol.iterator&&c,l=t==="keys"&&c,f=s[t](...r),w=n?H:e?Y:G;return!e&&u(o,"iterate",l?V:_),{next(){const{value:m,done:A}=f.next();return A?{value:m,done:A}:{value:a?[w(m[0]),w(m[1])]:w(m),done:A}},[Symbol.iterator](){return this}}}}function p(t){return function(...e){return t==="delete"?!1:this}}function At(){const t={get(o){return E(this,o)},get size(){return S(this)},has:I,add:F,set:L,delete:J,clear:Q,forEach:R(!1,!1)},e={get(o){return E(this,o,!1,!0)},get size(){return S(this)},has:I,add:F,set:L,delete:J,clear:Q,forEach:R(!1,!0)},n={get(o){return E(this,o,!0)},get size(){return S(this,!0)},has(o){return I.call(this,o,!0)},add:p("add"),set:p("set"),delete:p("delete"),clear:p("clear"),forEach:R(!0,!1)},r={get(o){return E(this,o,!0,!0)},get size(){return S(this,!0)},has(o){return I.call(this,o,!0)},add:p("add"),set:p("set"),delete:p("delete"),clear:p("clear"),forEach:R(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=M(o,!1,!1),n[o]=M(o,!0,!1),e[o]=M(o,!1,!0),r[o]=M(o,!0,!0)}),[t,n,e,r]}const[Nt,zt,Vt,Wt]=At();function nt(t,e){const n=e?t?Wt:Vt:t?zt:Nt;return(r,s,o)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(v(n,s)&&s in r?n:r,s,o)}const $t={get:nt(!1,!1)},Bt={get:nt(!0,!1)},st=new WeakMap,Ct=new WeakMap,rt=new WeakMap,Ht=new WeakMap;function Gt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yt(t){return t.__v_skip||!Object.isExtensible(t)?0:Gt(_t(t))}function j(t){return W(t)?t:ct(t,!1,xt,$t,st)}function ot(t){return ct(t,!0,Pt,Bt,rt)}function ct(t,e,n,r,s){if(!x(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=s.get(t);if(o)return o;const c=Yt(t);if(c===0)return t;const a=new Proxy(t,c===2?r:n);return s.set(t,a),a}function W(t){return!!(t&&t.__v_isReadonly)}function yt(t){return!!(t&&t.__v_isShallow)}function i(t){const e=t&&t.__v_raw;return e?i(e):t}const G=t=>x(t)?j(t):t,Y=t=>x(t)?ot(t):t;function g(t){return!!(t&&t.__v_isRef===!0)}function Dt(t){const e=h(t)?new Array(t.length):{};for(const n in t)e[n]=at(t,n);return e}class qt{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function at(t,e,n){const r=t[e];return g(r)?r:new qt(t,e,n)}const Ft={setup(){let t=j({name:"\u674E\u900D\u9065",age:"\u7537",gameSkills:{q:"\u5FA1\u5251\u672F"}}),e=j({pokemoName:"\u56FA\u62C9\u591A",gameSkills:"\u65AD\u5D16\u4E4B\u5251"});const n=Dt(e);return{name:t.name,age:at(t,"age"),...n}}};function Lt(t,e,n,r,s,o){return lt(),ut("div",null,[N("p",null,"\u59D3\u540D\uFF1A"+b(r.name),1),N("p",null,"\u6027\u522B\uFF1A"+b(r.age),1),N("p",null,"\u5BA0\u7269\uFF1A"+b(t.pokemoName)+"---\u6280\u80FD\uFF1A"+b(t.gameSkills),1)])}var Ut=it(Ft,[["render",Lt]]);export{Ut as default};
