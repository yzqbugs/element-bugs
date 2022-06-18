const Fo=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Fo();function wr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Ro="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lo=wr(Ro);function fi(e){return!!e||e===""}function _r(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=G(r)?Do(r):_r(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(G(e))return e;if(Z(e))return e}}const jo=/;(?![^(]*\))/g,zo=/:(.+)/;function Do(e){const t={};return e.split(jo).forEach(n=>{if(n){const r=n.split(zo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function kr(e){let t="";if(G(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=kr(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const W={},mt=[],ye=()=>{},$o=()=>!1,Uo=/^on[^a-z]/,bn=e=>Uo.test(e),Ar=e=>e.startsWith("onUpdate:"),ne=Object.assign,Or=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Bo=Object.prototype.hasOwnProperty,D=(e,t)=>Bo.call(e,t),L=Array.isArray,Tt=e=>yn(e)==="[object Map]",Ho=e=>yn(e)==="[object Set]",R=e=>typeof e=="function",G=e=>typeof e=="string",Er=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",ci=e=>Z(e)&&R(e.then)&&R(e.catch),Yo=Object.prototype.toString,yn=e=>Yo.call(e),Wo=e=>yn(e).slice(8,-1),Ko=e=>yn(e)==="[object Object]",Cr=e=>G(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zt=wr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},qo=/-(\w)/g,Ie=xn(e=>e.replace(qo,(t,n)=>n?n.toUpperCase():"")),Xo=/\B([A-Z])/g,bt=xn(e=>e.replace(Xo,"-$1").toLowerCase()),wn=xn(e=>e.charAt(0).toUpperCase()+e.slice(1)),jn=xn(e=>e?`on${wn(e)}`:""),on=(e,t)=>!Object.is(e,t),zn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},sn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Vo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ca;const Jo=()=>ca||(ca=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ae;class Go{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ae&&(this.parent=Ae,this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ae;try{return Ae=this,t()}finally{Ae=n}}}on(){Ae=this}off(){Ae=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Zo(e,t=Ae){t&&t.active&&t.effects.push(e)}const Pr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ui=e=>(e.w&Ke)>0,di=e=>(e.n&Ke)>0,Qo=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ke},es=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ui(a)&&!di(a)?a.delete(e):t[n++]=a,a.w&=~Ke,a.n&=~Ke}t.length=n}},qn=new WeakMap;let Ct=0,Ke=1;const Xn=30;let he;const et=Symbol(""),Vn=Symbol("");class Ir{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Zo(this,r)}run(){if(!this.active)return this.fn();let t=he,n=Ye;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=he,he=this,Ye=!0,Ke=1<<++Ct,Ct<=Xn?Qo(this):ua(this),this.fn()}finally{Ct<=Xn&&es(this),Ke=1<<--Ct,he=this.parent,Ye=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){he===this?this.deferStop=!0:this.active&&(ua(this),this.onStop&&this.onStop(),this.active=!1)}}function ua(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ye=!0;const mi=[];function yt(){mi.push(Ye),Ye=!1}function xt(){const e=mi.pop();Ye=e===void 0?!0:e}function ue(e,t,n){if(Ye&&he){let r=qn.get(e);r||qn.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Pr()),pi(a)}}function pi(e,t){let n=!1;Ct<=Xn?di(e)||(e.n|=Ke,n=!ui(e)):n=!e.has(he),n&&(e.add(he),he.deps.push(e))}function Me(e,t,n,r,a,i){const o=qn.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?Cr(n)&&s.push(o.get("length")):(s.push(o.get(et)),Tt(e)&&s.push(o.get(Vn)));break;case"delete":L(e)||(s.push(o.get(et)),Tt(e)&&s.push(o.get(Vn)));break;case"set":Tt(e)&&s.push(o.get(et));break}if(s.length===1)s[0]&&Jn(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);Jn(Pr(l))}}function Jn(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&da(r);for(const r of n)r.computed||da(r)}function da(e,t){(e!==he||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ts=wr("__proto__,__v_isRef,__isVue"),hi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Er)),ns=Tr(),rs=Tr(!1,!0),as=Tr(!0),ma=is();function is(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)ue(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){yt();const r=U(this)[t].apply(this,n);return xt(),r}}),e}function Tr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ws:xi:t?yi:bi).get(r))return r;const o=L(r);if(!e&&o&&D(ma,a))return Reflect.get(ma,a,i);const s=Reflect.get(r,a,i);return(Er(a)?hi.has(a):ts(a))||(e||ue(r,"get",a),t)?s:te(s)?o&&Cr(a)?s:s.value:Z(s)?e?wi(s):Mr(s):s}}const os=gi(),ss=gi(!0);function gi(e=!1){return function(n,r,a,i){let o=n[r];if(jt(o)&&te(o)&&!te(a))return!1;if(!e&&!jt(a)&&(Gn(a)||(a=U(a),o=U(o)),!L(n)&&te(o)&&!te(a)))return o.value=a,!0;const s=L(n)&&Cr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?on(a,o)&&Me(n,"set",r,a):Me(n,"add",r,a)),l}}function ls(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Me(e,"delete",t,void 0),r}function fs(e,t){const n=Reflect.has(e,t);return(!Er(t)||!hi.has(t))&&ue(e,"has",t),n}function cs(e){return ue(e,"iterate",L(e)?"length":et),Reflect.ownKeys(e)}const vi={get:ns,set:os,deleteProperty:ls,has:fs,ownKeys:cs},us={get:as,set(e,t){return!0},deleteProperty(e,t){return!0}},ds=ne({},vi,{get:rs,set:ss}),Sr=e=>e,_n=e=>Reflect.getPrototypeOf(e);function Kt(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&ue(a,"get",t),ue(a,"get",i));const{has:o}=_n(a),s=r?Sr:n?Lr:Rr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function qt(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&ue(r,"has",e),ue(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Xt(e,t=!1){return e=e.__v_raw,!t&&ue(U(e),"iterate",et),Reflect.get(e,"size",e)}function pa(e){e=U(e);const t=U(this);return _n(t).has.call(t,e)||(t.add(e),Me(t,"add",e,e)),this}function ha(e,t){t=U(t);const n=U(this),{has:r,get:a}=_n(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?on(t,o)&&Me(n,"set",e,t):Me(n,"add",e,t),this}function ga(e){const t=U(this),{has:n,get:r}=_n(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Me(t,"delete",e,void 0),i}function va(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Me(e,"clear",void 0,void 0),n}function Vt(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Sr:e?Lr:Rr;return!e&&ue(s,"iterate",et),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function Jt(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=Tt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Sr:t?Lr:Rr;return!t&&ue(i,"iterate",l?Vn:et),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function $e(e){return function(...t){return e==="delete"?!1:this}}function ms(){const e={get(i){return Kt(this,i)},get size(){return Xt(this)},has:qt,add:pa,set:ha,delete:ga,clear:va,forEach:Vt(!1,!1)},t={get(i){return Kt(this,i,!1,!0)},get size(){return Xt(this)},has:qt,add:pa,set:ha,delete:ga,clear:va,forEach:Vt(!1,!0)},n={get(i){return Kt(this,i,!0)},get size(){return Xt(this,!0)},has(i){return qt.call(this,i,!0)},add:$e("add"),set:$e("set"),delete:$e("delete"),clear:$e("clear"),forEach:Vt(!0,!1)},r={get(i){return Kt(this,i,!0,!0)},get size(){return Xt(this,!0)},has(i){return qt.call(this,i,!0)},add:$e("add"),set:$e("set"),delete:$e("delete"),clear:$e("clear"),forEach:Vt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Jt(i,!1,!1),n[i]=Jt(i,!0,!1),t[i]=Jt(i,!1,!0),r[i]=Jt(i,!0,!0)}),[e,n,t,r]}const[ps,hs,gs,vs]=ms();function Nr(e,t){const n=t?e?vs:gs:e?hs:ps;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const bs={get:Nr(!1,!1)},ys={get:Nr(!1,!0)},xs={get:Nr(!0,!1)},bi=new WeakMap,yi=new WeakMap,xi=new WeakMap,ws=new WeakMap;function _s(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ks(e){return e.__v_skip||!Object.isExtensible(e)?0:_s(Wo(e))}function Mr(e){return jt(e)?e:Fr(e,!1,vi,bs,bi)}function As(e){return Fr(e,!1,ds,ys,yi)}function wi(e){return Fr(e,!0,us,xs,xi)}function Fr(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ks(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function pt(e){return jt(e)?pt(e.__v_raw):!!(e&&e.__v_isReactive)}function jt(e){return!!(e&&e.__v_isReadonly)}function Gn(e){return!!(e&&e.__v_isShallow)}function _i(e){return pt(e)||jt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function ki(e){return sn(e,"__v_skip",!0),e}const Rr=e=>Z(e)?Mr(e):e,Lr=e=>Z(e)?wi(e):e;function Os(e){Ye&&he&&(e=U(e),pi(e.dep||(e.dep=Pr())))}function Es(e,t){e=U(e),e.dep&&Jn(e.dep)}function te(e){return!!(e&&e.__v_isRef===!0)}function Cs(e){return te(e)?e.value:e}const Ps={get:(e,t,n)=>Cs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return te(a)&&!te(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ai(e){return pt(e)?e:new Proxy(e,Ps)}class Is{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ir(t,()=>{this._dirty||(this._dirty=!0,Es(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Os(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ts(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=ye):(r=e.get,a=e.set),new Is(r,a,i||!a,n)}function We(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){kn(i,t,n)}return a}function xe(e,t,n,r){if(R(e)){const i=We(e,t,n,r);return i&&ci(i)&&i.catch(o=>{kn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(xe(e[i],t,n,r));return a}function kn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){We(l,null,10,[e,o,s]);return}}Ss(e,n,a,r)}function Ss(e,t,n,r=!0){console.error(e)}let ln=!1,Zn=!1;const fe=[];let Ne=0;const St=[];let Pt=null,lt=0;const Nt=[];let Be=null,ft=0;const Oi=Promise.resolve();let jr=null,Qn=null;function Ns(e){const t=jr||Oi;return e?t.then(this?e.bind(this):e):t}function Ms(e){let t=Ne+1,n=fe.length;for(;t<n;){const r=t+n>>>1;zt(fe[r])<e?t=r+1:n=r}return t}function Ei(e){(!fe.length||!fe.includes(e,ln&&e.allowRecurse?Ne+1:Ne))&&e!==Qn&&(e.id==null?fe.push(e):fe.splice(Ms(e.id),0,e),Ci())}function Ci(){!ln&&!Zn&&(Zn=!0,jr=Oi.then(Ti))}function Fs(e){const t=fe.indexOf(e);t>Ne&&fe.splice(t,1)}function Pi(e,t,n,r){L(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Ci()}function Rs(e){Pi(e,Pt,St,lt)}function Ls(e){Pi(e,Be,Nt,ft)}function An(e,t=null){if(St.length){for(Qn=t,Pt=[...new Set(St)],St.length=0,lt=0;lt<Pt.length;lt++)Pt[lt]();Pt=null,lt=0,Qn=null,An(e,t)}}function Ii(e){if(An(),Nt.length){const t=[...new Set(Nt)];if(Nt.length=0,Be){Be.push(...t);return}for(Be=t,Be.sort((n,r)=>zt(n)-zt(r)),ft=0;ft<Be.length;ft++)Be[ft]();Be=null,ft=0}}const zt=e=>e.id==null?1/0:e.id;function Ti(e){Zn=!1,ln=!0,An(e),fe.sort((n,r)=>zt(n)-zt(r));const t=ye;try{for(Ne=0;Ne<fe.length;Ne++){const n=fe[Ne];n&&n.active!==!1&&We(n,null,14)}}finally{Ne=0,fe.length=0,Ii(),ln=!1,jr=null,(fe.length||St.length||Nt.length)&&Ti(e)}}function js(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||W;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||W;b&&(a=n.map(O=>O.trim())),m&&(a=n.map(Vo))}let s,l=r[s=jn(t)]||r[s=jn(Ie(t))];!l&&i&&(l=r[s=jn(bt(t))]),l&&xe(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,xe(u,e,6,a)}}function Si(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=u=>{const d=Si(u,t,!0);d&&(s=!0,ne(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):ne(o,i),r.set(e,o),o)}function On(e,t){return!e||!bn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,bt(t))||D(e,t))}let Ce=null,Ni=null;function fn(e){const t=Ce;return Ce=e,Ni=e&&e.type.__scopeId||null,t}function zs(e,t=Ce,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ca(-1);const i=fn(t),o=e(...a);return fn(i),r._d&&Ca(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Dn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:b,setupState:O,ctx:F,inheritAttrs:j}=e;let S,y;const E=fn(e);try{if(n.shapeFlag&4){const z=a||r;S=Ee(d.call(z,z,m,i,O,b,F)),y=l}else{const z=t;S=Ee(z.length>1?z(i,{attrs:l,slots:s,emit:u}):z(i,null)),y=t.props?l:Ds(l)}}catch(z){Mt.length=0,kn(z,e,1),S=ce(Dt)}let N=S;if(y&&j!==!1){const z=Object.keys(y),{shapeFlag:Y}=N;z.length&&Y&7&&(o&&z.some(Ar)&&(y=$s(y,o)),N=gt(N,y))}return n.dirs&&(N=gt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),S=N,fn(E),S}const Ds=e=>{let t;for(const n in e)(n==="class"||n==="style"||bn(n))&&((t||(t={}))[n]=e[n]);return t},$s=(e,t)=>{const n={};for(const r in e)(!Ar(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Us(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ba(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!On(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ba(r,o,u):!0:!!o;return!1}function ba(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!On(n,i))return!0}return!1}function Bs({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Hs=e=>e.__isSuspense;function Ys(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):Ls(e)}function Ws(e,t){if(J){let n=J.provides;const r=J.parent&&J.parent.provides;r===n&&(n=J.provides=Object.create(r)),n[e]=t}}function $n(e,t,n=!1){const r=J||Ce;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const ya={};function Qt(e,t,n){return Mi(e,t,n)}function Mi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=W){const s=J;let l,u=!1,d=!1;if(te(e)?(l=()=>e.value,u=Gn(e)):pt(e)?(l=()=>e,r=!0):L(e)?(d=!0,u=e.some(y=>pt(y)||Gn(y)),l=()=>e.map(y=>{if(te(y))return y.value;if(pt(y))return ct(y);if(R(y))return We(y,s,2)})):R(e)?t?l=()=>We(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),xe(e,s,3,[b])}:l=ye,t&&r){const y=l;l=()=>ct(y())}let m,b=y=>{m=S.onStop=()=>{We(y,s,4)}};if(Ut)return b=ye,t?n&&xe(t,s,3,[l(),d?[]:void 0,b]):l(),ye;let O=d?[]:ya;const F=()=>{if(!!S.active)if(t){const y=S.run();(r||u||(d?y.some((E,N)=>on(E,O[N])):on(y,O)))&&(m&&m(),xe(t,s,3,[y,O===ya?void 0:O,b]),O=y)}else S.run()};F.allowRecurse=!!t;let j;a==="sync"?j=F:a==="post"?j=()=>oe(F,s&&s.suspense):j=()=>Rs(F);const S=new Ir(l,j);return t?n?F():O=S.run():a==="post"?oe(S.run.bind(S),s&&s.suspense):S.run(),()=>{S.stop(),s&&s.scope&&Or(s.scope.effects,S)}}function Ks(e,t,n){const r=this.proxy,a=G(e)?e.includes(".")?Fi(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=J;vt(this);const s=Mi(a,i.bind(r),n);return o?vt(o):tt(),s}function Fi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ct(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),te(e))ct(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)ct(e[n],t);else if(Ho(e)||Tt(e))e.forEach(n=>{ct(n,t)});else if(Ko(e))for(const n in e)ct(e[n],t);return e}function zr(e){return R(e)?{setup:e,name:e.name}:e}const en=e=>!!e.type.__asyncLoader,Ri=e=>e.type.__isKeepAlive;function qs(e,t){Li(e,"a",t)}function Xs(e,t){Li(e,"da",t)}function Li(e,t,n=J){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(En(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ri(a.parent.vnode)&&Vs(r,t,n,a),a=a.parent}}function Vs(e,t,n,r){const a=En(t,e,r,!0);ji(()=>{Or(r[t],a)},n)}function En(e,t,n=J,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;yt(),vt(n);const s=xe(t,n,e,o);return tt(),xt(),s});return r?a.unshift(i):a.push(i),i}}const je=e=>(t,n=J)=>(!Ut||e==="sp")&&En(e,t,n),Js=je("bm"),Gs=je("m"),Zs=je("bu"),Qs=je("u"),el=je("bum"),ji=je("um"),tl=je("sp"),nl=je("rtg"),rl=je("rtc");function al(e,t=J){En("ec",e,t)}function Ve(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(yt(),xe(l,n,8,[e.el,s,e,t]),xt())}}const zi="components";function il(e,t){return sl(zi,e,!0,t)||e}const ol=Symbol();function sl(e,t,n=!0,r=!1){const a=Ce||J;if(a){const i=a.type;if(e===zi){const s=$l(i,!1);if(s&&(s===t||s===Ie(t)||s===wn(Ie(t))))return i}const o=xa(a[e]||i[e],t)||xa(a.appContext[e],t);return!o&&r?i:o}}function xa(e,t){return e&&(e[t]||e[Ie(t)]||e[wn(Ie(t))])}const er=e=>e?Vi(e)?Hr(e)||e.proxy:er(e.parent):null,cn=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>er(e.parent),$root:e=>er(e.root),$emit:e=>e.emit,$options:e=>$i(e),$forceUpdate:e=>e.f||(e.f=()=>Ei(e.update)),$nextTick:e=>e.n||(e.n=Ns.bind(e.proxy)),$watch:e=>Ks.bind(e)}),ll={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const O=o[t];if(O!==void 0)switch(O){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==W&&D(r,t))return o[t]=1,r[t];if(a!==W&&D(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==W&&D(n,t))return o[t]=4,n[t];tr&&(o[t]=0)}}const d=cn[t];let m,b;if(d)return t==="$attrs"&&ue(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==W&&D(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,D(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==W&&D(a,t)?(a[t]=n,!0):r!==W&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==W&&D(e,o)||t!==W&&D(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(cn,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let tr=!0;function fl(e){const t=$i(e),n=e.proxy,r=e.ctx;tr=!1,t.beforeCreate&&wa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:O,updated:F,activated:j,deactivated:S,beforeDestroy:y,beforeUnmount:E,destroyed:N,unmounted:z,render:Y,renderTracked:Q,renderTriggered:se,errorCaptured:we,serverPrefetch:re,expose:_t,inheritAttrs:at,components:kt,directives:Yt,filters:aa}=t;if(u&&cl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const V in o){const K=o[V];R(K)&&(r[V]=K.bind(n))}if(a){const V=a.call(n,n);Z(V)&&(e.data=Mr(V))}if(tr=!0,i)for(const V in i){const K=i[V],Te=R(K)?K.bind(n,n):R(K.get)?K.get.bind(n,n):ye,Fn=!R(K)&&R(K.set)?K.set.bind(n):ye,At=me({get:Te,set:Fn});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>At.value,set:it=>At.value=it})}if(s)for(const V in s)Di(s[V],r,n,V);if(l){const V=R(l)?l.call(n):l;Reflect.ownKeys(V).forEach(K=>{Ws(K,V[K])})}d&&wa(d,e,"c");function ae(V,K){L(K)?K.forEach(Te=>V(Te.bind(n))):K&&V(K.bind(n))}if(ae(Js,m),ae(Gs,b),ae(Zs,O),ae(Qs,F),ae(qs,j),ae(Xs,S),ae(al,we),ae(rl,Q),ae(nl,se),ae(el,E),ae(ji,z),ae(tl,re),L(_t))if(_t.length){const V=e.exposed||(e.exposed={});_t.forEach(K=>{Object.defineProperty(V,K,{get:()=>n[K],set:Te=>n[K]=Te})})}else e.exposed||(e.exposed={});Y&&e.render===ye&&(e.render=Y),at!=null&&(e.inheritAttrs=at),kt&&(e.components=kt),Yt&&(e.directives=Yt)}function cl(e,t,n=ye,r=!1){L(e)&&(e=nr(e));for(const a in e){const i=e[a];let o;Z(i)?"default"in i?o=$n(i.from||a,i.default,!0):o=$n(i.from||a):o=$n(i),te(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function wa(e,t,n){xe(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Di(e,t,n,r){const a=r.includes(".")?Fi(n,r):()=>n[r];if(G(e)){const i=t[e];R(i)&&Qt(a,i)}else if(R(e))Qt(a,e.bind(n));else if(Z(e))if(L(e))e.forEach(i=>Di(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&Qt(a,i,e)}}function $i(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>un(l,u,o,!0)),un(l,t,o)),i.set(t,l),l}function un(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&un(e,i,n,!0),a&&a.forEach(o=>un(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=ul[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const ul={data:_a,props:Ge,emits:Ge,methods:Ge,computed:Ge,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:Ge,directives:Ge,watch:ml,provide:_a,inject:dl};function _a(e,t){return t?e?function(){return ne(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function dl(e,t){return Ge(nr(e),nr(t))}function nr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ee(e,t){return e?[...new Set([].concat(e,t))]:t}function Ge(e,t){return e?ne(ne(Object.create(null),e),t):t}function ml(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=ee(e[r],t[r]);return n}function pl(e,t,n,r=!1){const a={},i={};sn(i,Cn,1),e.propsDefaults=Object.create(null),Ui(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:As(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function hl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(On(e.emitsOptions,b))continue;const O=t[b];if(l)if(D(i,b))O!==i[b]&&(i[b]=O,u=!0);else{const F=Ie(b);a[F]=rr(l,s,F,O,e,!1)}else O!==i[b]&&(i[b]=O,u=!0)}}}else{Ui(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=bt(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=rr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],u=!0)}u&&Me(e,"set","$attrs")}function Ui(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Zt(l))continue;const u=t[l];let d;a&&D(a,d=Ie(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:On(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=U(n),u=s||W;for(let d=0;d<i.length;d++){const m=i[d];n[m]=rr(a,l,m,u[m],e,!D(u,m))}}return o}function rr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(vt(a),r=u[n]=l.call(null,t),tt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===bt(n))&&(r=!0))}return r}function Bi(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[b,O]=Bi(m,t,!0);ne(o,b),O&&s.push(...O)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,mt),mt;if(L(i))for(let d=0;d<i.length;d++){const m=Ie(i[d]);ka(m)&&(o[m]=W)}else if(i)for(const d in i){const m=Ie(d);if(ka(m)){const b=i[d],O=o[m]=L(b)||R(b)?{type:b}:b;if(O){const F=Ea(Boolean,O.type),j=Ea(String,O.type);O[0]=F>-1,O[1]=j<0||F<j,(F>-1||D(O,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function ka(e){return e[0]!=="$"}function Aa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Oa(e,t){return Aa(e)===Aa(t)}function Ea(e,t){return L(t)?t.findIndex(n=>Oa(n,e)):R(t)&&Oa(t,e)?0:-1}const Hi=e=>e[0]==="_"||e==="$stable",Dr=e=>L(e)?e.map(Ee):[Ee(e)],gl=(e,t,n)=>{if(t._n)return t;const r=zs((...a)=>Dr(t(...a)),n);return r._c=!1,r},Yi=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Hi(a))continue;const i=e[a];if(R(i))t[a]=gl(a,i,r);else if(i!=null){const o=Dr(i);t[a]=()=>o}}},Wi=(e,t)=>{const n=Dr(t);e.slots.default=()=>n},vl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),sn(t,"_",n)):Yi(t,e.slots={})}else e.slots={},t&&Wi(e,t);sn(e.slots,Cn,1)},bl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=W;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ne(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Yi(t,a)),o=t}else t&&(Wi(e,t),o={default:1});if(i)for(const s in a)!Hi(s)&&!(s in o)&&delete a[s]};function Ki(){return{app:null,config:{isNativeTag:$o,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yl=0;function xl(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!Z(a)&&(a=null);const i=Ki(),o=new Set;let s=!1;const l=i.app={_uid:yl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Bl,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&R(u.install)?(o.add(u),u.install(l,...d)):R(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const b=ce(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,m),s=!0,l._container=u,u.__vue_app__=l,Hr(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function ar(e,t,n,r,a=!1){if(L(e)){e.forEach((b,O)=>ar(b,t&&(L(t)?t[O]:t),n,r,a));return}if(en(r)&&!a)return;const i=r.shapeFlag&4?Hr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===W?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(G(u)?(d[u]=null,D(m,u)&&(m[u]=null)):te(u)&&(u.value=null)),R(l))We(l,s,12,[o,d]);else{const b=G(l),O=te(l);if(b||O){const F=()=>{if(e.f){const j=b?d[l]:l.value;a?L(j)&&Or(j,i):L(j)?j.includes(i)||j.push(i):b?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,D(m,l)&&(m[l]=o)):O&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,oe(F,n)):F()}}}const oe=Ys;function wl(e){return _l(e)}function _l(e,t){const n=Jo();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:O=ye,cloneNode:F,insertStaticContent:j}=e,S=(f,c,p,g=null,h=null,w=null,k=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Et(f,c)&&(g=Wt(f),De(f,h,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:v,ref:P,shapeFlag:C}=c;switch(v){case $r:y(f,c,p,g);break;case Dt:E(f,c,p,g);break;case Un:f==null&&N(c,p,g,k);break;case Oe:Yt(f,c,p,g,h,w,k,x,_);break;default:C&1?Q(f,c,p,g,h,w,k,x,_):C&6?aa(f,c,p,g,h,w,k,x,_):(C&64||C&128)&&v.process(f,c,p,g,h,w,k,x,_,ot)}P!=null&&h&&ar(P,f&&f.ref,w,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},E=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},N=(f,c,p,g)=>{[f.el,f.anchor]=j(f.children,c,p,g,f.el,f.anchor)},z=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=b(f),r(f,p,g),f=h;r(c,p,g)},Y=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=b(f),a(f),f=p;a(c)},Q=(f,c,p,g,h,w,k,x,_)=>{k=k||c.type==="svg",f==null?se(c,p,g,h,w,k,x,_):_t(f,c,h,w,k,x,_)},se=(f,c,p,g,h,w,k,x)=>{let _,v;const{type:P,props:C,shapeFlag:I,transition:M,patchFlag:$,dirs:B}=f;if(f.el&&F!==void 0&&$===-1)_=f.el=F(f.el);else{if(_=f.el=o(f.type,w,C&&C.is,C),I&8?d(_,f.children):I&16&&re(f.children,_,null,g,h,w&&P!=="foreignObject",k,x),B&&Ve(f,null,g,"created"),C){for(const q in C)q!=="value"&&!Zt(q)&&i(_,q,null,C[q],w,f.children,g,h,Se);"value"in C&&i(_,"value",null,C.value),(v=C.onVnodeBeforeMount)&&ke(v,g,f)}we(_,f,f.scopeId,k,g)}B&&Ve(f,null,g,"beforeMount");const H=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;H&&M.beforeEnter(_),r(_,c,p),((v=C&&C.onVnodeMounted)||H||B)&&oe(()=>{v&&ke(v,g,f),H&&M.enter(_),B&&Ve(f,null,g,"mounted")},h)},we=(f,c,p,g,h)=>{if(p&&O(f,p),g)for(let w=0;w<g.length;w++)O(f,g[w]);if(h){let w=h.subTree;if(c===w){const k=h.vnode;we(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},re=(f,c,p,g,h,w,k,x,_=0)=>{for(let v=_;v<f.length;v++){const P=f[v]=x?He(f[v]):Ee(f[v]);S(null,P,c,p,g,h,w,k,x)}},_t=(f,c,p,g,h,w,k)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:v,dirs:P}=c;_|=f.patchFlag&16;const C=f.props||W,I=c.props||W;let M;p&&Je(p,!1),(M=I.onVnodeBeforeUpdate)&&ke(M,p,c,f),P&&Ve(c,f,p,"beforeUpdate"),p&&Je(p,!0);const $=h&&c.type!=="foreignObject";if(v?at(f.dynamicChildren,v,x,p,g,$,w):k||Te(f,c,x,null,p,g,$,w,!1),_>0){if(_&16)kt(x,c,C,I,p,g,h);else if(_&2&&C.class!==I.class&&i(x,"class",null,I.class,h),_&4&&i(x,"style",C.style,I.style,h),_&8){const B=c.dynamicProps;for(let H=0;H<B.length;H++){const q=B[H],pe=C[q],st=I[q];(st!==pe||q==="value")&&i(x,q,pe,st,h,f.children,p,g,Se)}}_&1&&f.children!==c.children&&d(x,c.children)}else!k&&v==null&&kt(x,c,C,I,p,g,h);((M=I.onVnodeUpdated)||P)&&oe(()=>{M&&ke(M,p,c,f),P&&Ve(c,f,p,"updated")},g)},at=(f,c,p,g,h,w,k)=>{for(let x=0;x<c.length;x++){const _=f[x],v=c[x],P=_.el&&(_.type===Oe||!Et(_,v)||_.shapeFlag&70)?m(_.el):p;S(_,v,P,null,g,h,w,k,!0)}},kt=(f,c,p,g,h,w,k)=>{if(p!==g){for(const x in g){if(Zt(x))continue;const _=g[x],v=p[x];_!==v&&x!=="value"&&i(f,x,v,_,k,c.children,h,w,Se)}if(p!==W)for(const x in p)!Zt(x)&&!(x in g)&&i(f,x,p[x],null,k,c.children,h,w,Se);"value"in g&&i(f,"value",p.value,g.value)}},Yt=(f,c,p,g,h,w,k,x,_)=>{const v=c.el=f?f.el:s(""),P=c.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:I,slotScopeIds:M}=c;M&&(x=x?x.concat(M):M),f==null?(r(v,p,g),r(P,p,g),re(c.children,p,P,h,w,k,x,_)):C>0&&C&64&&I&&f.dynamicChildren?(at(f.dynamicChildren,I,p,h,w,k,x),(c.key!=null||h&&c===h.subTree)&&qi(f,c,!0)):Te(f,c,p,P,h,w,k,x,_)},aa=(f,c,p,g,h,w,k,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,k,_):Mn(c,p,g,h,w,k,_):ae(f,c,_)},Mn=(f,c,p,g,h,w,k)=>{const x=f.component=Rl(f,g,h);if(Ri(f)&&(x.ctx.renderer=ot),Ll(x),x.asyncDep){if(h&&h.registerDep(x,V),!f.el){const _=x.subTree=ce(Dt);E(null,_,c,p)}return}V(x,f,c,p,h,w,k)},ae=(f,c,p)=>{const g=c.component=f.component;if(Us(f,c,p))if(g.asyncDep&&!g.asyncResolved){K(g,c,p);return}else g.next=c,Fs(g.update),g.update();else c.el=f.el,g.vnode=c},V=(f,c,p,g,h,w,k)=>{const x=()=>{if(f.isMounted){let{next:P,bu:C,u:I,parent:M,vnode:$}=f,B=P,H;Je(f,!1),P?(P.el=$.el,K(f,P,k)):P=$,C&&zn(C),(H=P.props&&P.props.onVnodeBeforeUpdate)&&ke(H,M,P,$),Je(f,!0);const q=Dn(f),pe=f.subTree;f.subTree=q,S(pe,q,m(pe.el),Wt(pe),f,h,w),P.el=q.el,B===null&&Bs(f,q.el),I&&oe(I,h),(H=P.props&&P.props.onVnodeUpdated)&&oe(()=>ke(H,M,P,$),h)}else{let P;const{el:C,props:I}=c,{bm:M,m:$,parent:B}=f,H=en(c);if(Je(f,!1),M&&zn(M),!H&&(P=I&&I.onVnodeBeforeMount)&&ke(P,B,c),Je(f,!0),C&&Ln){const q=()=>{f.subTree=Dn(f),Ln(C,f.subTree,f,h,null)};H?c.type.__asyncLoader().then(()=>!f.isUnmounted&&q()):q()}else{const q=f.subTree=Dn(f);S(null,q,p,g,f,h,w),c.el=q.el}if($&&oe($,h),!H&&(P=I&&I.onVnodeMounted)){const q=c;oe(()=>ke(P,B,q),h)}(c.shapeFlag&256||B&&en(B.vnode)&&B.vnode.shapeFlag&256)&&f.a&&oe(f.a,h),f.isMounted=!0,c=p=g=null}},_=f.effect=new Ir(x,()=>Ei(v),f.scope),v=f.update=()=>_.run();v.id=f.uid,Je(f,!0),v()},K=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,hl(f,c.props,g,p),bl(f,c.children,p),yt(),An(void 0,f.update),xt()},Te=(f,c,p,g,h,w,k,x,_=!1)=>{const v=f&&f.children,P=f?f.shapeFlag:0,C=c.children,{patchFlag:I,shapeFlag:M}=c;if(I>0){if(I&128){At(v,C,p,g,h,w,k,x,_);return}else if(I&256){Fn(v,C,p,g,h,w,k,x,_);return}}M&8?(P&16&&Se(v,h,w),C!==v&&d(p,C)):P&16?M&16?At(v,C,p,g,h,w,k,x,_):Se(v,h,w,!0):(P&8&&d(p,""),M&16&&re(C,p,g,h,w,k,x,_))},Fn=(f,c,p,g,h,w,k,x,_)=>{f=f||mt,c=c||mt;const v=f.length,P=c.length,C=Math.min(v,P);let I;for(I=0;I<C;I++){const M=c[I]=_?He(c[I]):Ee(c[I]);S(f[I],M,p,null,h,w,k,x,_)}v>P?Se(f,h,w,!0,!1,C):re(c,p,g,h,w,k,x,_,C)},At=(f,c,p,g,h,w,k,x,_)=>{let v=0;const P=c.length;let C=f.length-1,I=P-1;for(;v<=C&&v<=I;){const M=f[v],$=c[v]=_?He(c[v]):Ee(c[v]);if(Et(M,$))S(M,$,p,null,h,w,k,x,_);else break;v++}for(;v<=C&&v<=I;){const M=f[C],$=c[I]=_?He(c[I]):Ee(c[I]);if(Et(M,$))S(M,$,p,null,h,w,k,x,_);else break;C--,I--}if(v>C){if(v<=I){const M=I+1,$=M<P?c[M].el:g;for(;v<=I;)S(null,c[v]=_?He(c[v]):Ee(c[v]),p,$,h,w,k,x,_),v++}}else if(v>I)for(;v<=C;)De(f[v],h,w,!0),v++;else{const M=v,$=v,B=new Map;for(v=$;v<=I;v++){const le=c[v]=_?He(c[v]):Ee(c[v]);le.key!=null&&B.set(le.key,v)}let H,q=0;const pe=I-$+1;let st=!1,sa=0;const Ot=new Array(pe);for(v=0;v<pe;v++)Ot[v]=0;for(v=M;v<=C;v++){const le=f[v];if(q>=pe){De(le,h,w,!0);continue}let _e;if(le.key!=null)_e=B.get(le.key);else for(H=$;H<=I;H++)if(Ot[H-$]===0&&Et(le,c[H])){_e=H;break}_e===void 0?De(le,h,w,!0):(Ot[_e-$]=v+1,_e>=sa?sa=_e:st=!0,S(le,c[_e],p,null,h,w,k,x,_),q++)}const la=st?kl(Ot):mt;for(H=la.length-1,v=pe-1;v>=0;v--){const le=$+v,_e=c[le],fa=le+1<P?c[le+1].el:g;Ot[v]===0?S(null,_e,p,fa,h,w,k,x,_):st&&(H<0||v!==la[H]?it(_e,p,fa,2):H--)}}},it=(f,c,p,g,h=null)=>{const{el:w,type:k,transition:x,children:_,shapeFlag:v}=f;if(v&6){it(f.component.subTree,c,p,g);return}if(v&128){f.suspense.move(c,p,g);return}if(v&64){k.move(f,c,p,ot);return}if(k===Oe){r(w,c,p);for(let C=0;C<_.length;C++)it(_[C],c,p,g);r(f.anchor,c,p);return}if(k===Un){z(f,c,p);return}if(g!==2&&v&1&&x)if(g===0)x.beforeEnter(w),r(w,c,p),oe(()=>x.enter(w),h);else{const{leave:C,delayLeave:I,afterLeave:M}=x,$=()=>r(w,c,p),B=()=>{C(w,()=>{$(),M&&M()})};I?I(w,$,B):B()}else r(w,c,p)},De=(f,c,p,g=!1,h=!1)=>{const{type:w,props:k,ref:x,children:_,dynamicChildren:v,shapeFlag:P,patchFlag:C,dirs:I}=f;if(x!=null&&ar(x,null,p,f,!0),P&256){c.ctx.deactivate(f);return}const M=P&1&&I,$=!en(f);let B;if($&&(B=k&&k.onVnodeBeforeUnmount)&&ke(B,c,f),P&6)Mo(f.component,p,g);else{if(P&128){f.suspense.unmount(p,g);return}M&&Ve(f,null,c,"beforeUnmount"),P&64?f.type.remove(f,c,p,h,ot,g):v&&(w!==Oe||C>0&&C&64)?Se(v,c,p,!1,!0):(w===Oe&&C&384||!h&&P&16)&&Se(_,c,p),g&&ia(f)}($&&(B=k&&k.onVnodeUnmounted)||M)&&oe(()=>{B&&ke(B,c,f),M&&Ve(f,null,c,"unmounted")},p)},ia=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===Oe){No(p,g);return}if(c===Un){Y(f);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:x}=h,_=()=>k(p,w);x?x(f.el,w,_):_()}else w()},No=(f,c)=>{let p;for(;f!==c;)p=b(f),a(f),f=p;a(c)},Mo=(f,c,p)=>{const{bum:g,scope:h,update:w,subTree:k,um:x}=f;g&&zn(g),h.stop(),w&&(w.active=!1,De(k,f,c,p)),x&&oe(x,c),oe(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Se=(f,c,p,g=!1,h=!1,w=0)=>{for(let k=w;k<f.length;k++)De(f[k],c,p,g,h)},Wt=f=>f.shapeFlag&6?Wt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),oa=(f,c,p)=>{f==null?c._vnode&&De(c._vnode,null,null,!0):S(c._vnode||null,f,c,null,null,null,p),Ii(),c._vnode=f},ot={p:S,um:De,m:it,r:ia,mt:Mn,mc:re,pc:Te,pbc:at,n:Wt,o:e};let Rn,Ln;return t&&([Rn,Ln]=t(ot)),{render:oa,hydrate:Rn,createApp:xl(oa,Rn)}}function Je({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function qi(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=He(a[i]),s.el=o.el),n||qi(o,s))}}function kl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Al=e=>e.__isTeleport,Oe=Symbol(void 0),$r=Symbol(void 0),Dt=Symbol(void 0),Un=Symbol(void 0),Mt=[];let ve=null;function Ol(e=!1){Mt.push(ve=e?null:[])}function El(){Mt.pop(),ve=Mt[Mt.length-1]||null}let $t=1;function Ca(e){$t+=e}function Cl(e){return e.dynamicChildren=$t>0?ve||mt:null,El(),$t>0&&ve&&ve.push(e),e}function Pl(e,t,n,r,a,i){return Cl(Ur(e,t,n,r,a,i,!0))}function ir(e){return e?e.__v_isVNode===!0:!1}function Et(e,t){return e.type===t.type&&e.key===t.key}const Cn="__vInternal",Xi=({key:e})=>e!=null?e:null,tn=({ref:e,ref_key:t,ref_for:n})=>e!=null?G(e)||te(e)||R(e)?{i:Ce,r:e,k:t,f:!!n}:e:null;function Ur(e,t=null,n=null,r=0,a=null,i=e===Oe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xi(t),ref:t&&tn(t),scopeId:Ni,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Br(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=G(n)?8:16),$t>0&&!o&&ve&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ve.push(l),l}const ce=Il;function Il(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===ol)&&(e=Dt),ir(e)){const s=gt(e,t,!0);return n&&Br(s,n),$t>0&&!i&&ve&&(s.shapeFlag&6?ve[ve.indexOf(e)]=s:ve.push(s)),s.patchFlag|=-2,s}if(Ul(e)&&(e=e.__vccOpts),t){t=Tl(t);let{class:s,style:l}=t;s&&!G(s)&&(t.class=kr(s)),Z(l)&&(_i(l)&&!L(l)&&(l=ne({},l)),t.style=_r(l))}const o=G(e)?1:Hs(e)?128:Al(e)?64:Z(e)?4:R(e)?2:0;return Ur(e,t,n,r,a,o,i,!0)}function Tl(e){return e?_i(e)||Cn in e?ne({},e):e:null}function gt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Nl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Xi(s),ref:t&&t.ref?n&&a?L(a)?a.concat(tn(t)):[a,tn(t)]:tn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gt(e.ssContent),ssFallback:e.ssFallback&&gt(e.ssFallback),el:e.el,anchor:e.anchor}}function Sl(e=" ",t=0){return ce($r,null,e,t)}function Ee(e){return e==null||typeof e=="boolean"?ce(Dt):L(e)?ce(Oe,null,e.slice()):typeof e=="object"?He(e):ce($r,null,String(e))}function He(e){return e.el===null||e.memo?e:gt(e)}function Br(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Br(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Cn in t)?t._ctx=Ce:a===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:Ce},n=32):(t=String(t),r&64?(n=16,t=[Sl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Nl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=kr([t.class,r.class]));else if(a==="style")t.style=_r([t.style,r.style]);else if(bn(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function ke(e,t,n,r=null){xe(e,t,7,[n,r])}const Ml=Ki();let Fl=0;function Rl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Ml,i={uid:Fl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Go(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bi(r,a),emitsOptions:Si(r,a),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=js.bind(null,i),e.ce&&e.ce(i),i}let J=null;const vt=e=>{J=e,e.scope.on()},tt=()=>{J&&J.scope.off(),J=null};function Vi(e){return e.vnode.shapeFlag&4}let Ut=!1;function Ll(e,t=!1){Ut=t;const{props:n,children:r}=e.vnode,a=Vi(e);pl(e,n,a,t),vl(e,r);const i=a?jl(e,t):void 0;return Ut=!1,i}function jl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ki(new Proxy(e.ctx,ll));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Dl(e):null;vt(e),yt();const i=We(r,e,0,[e.props,a]);if(xt(),tt(),ci(i)){if(i.then(tt,tt),t)return i.then(o=>{Pa(e,o,t)}).catch(o=>{kn(o,e,0)});e.asyncDep=i}else Pa(e,i,t)}else Ji(e,t)}function Pa(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=Ai(t)),Ji(e,n)}let Ia;function Ji(e,t,n){const r=e.type;if(!e.render){if(!t&&Ia&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ne(ne({isCustomElement:i,delimiters:s},o),l);r.render=Ia(a,u)}}e.render=r.render||ye}vt(e),yt(),fl(e),xt(),tt()}function zl(e){return new Proxy(e.attrs,{get(t,n){return ue(e,"get","$attrs"),t[n]}})}function Dl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=zl(e))},slots:e.slots,emit:e.emit,expose:t}}function Hr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ai(ki(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in cn)return cn[n](e)}}))}function $l(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function Ul(e){return R(e)&&"__vccOpts"in e}const me=(e,t)=>Ts(e,t,Ut);function Gi(e,t,n){const r=arguments.length;return r===2?Z(t)&&!L(t)?ir(t)?ce(e,null,[t]):ce(e,t):ce(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ir(n)&&(n=[n]),ce(e,t,n))}const Bl="3.2.37",Hl="http://www.w3.org/2000/svg",Ze=typeof document!="undefined"?document:null,Ta=Ze&&Ze.createElement("template"),Yl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Ze.createElementNS(Hl,e):Ze.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Ze.createTextNode(e),createComment:e=>Ze.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ze.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ta.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ta.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Wl(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Kl(e,t,n){const r=e.style,a=G(n);if(n&&!a){for(const i in n)or(r,i,n[i]);if(t&&!G(t))for(const i in t)n[i]==null&&or(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Sa=/\s*!important$/;function or(e,t,n){if(L(n))n.forEach(r=>or(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ql(e,t);Sa.test(n)?e.setProperty(bt(r),n.replace(Sa,""),"important"):e[r]=n}}const Na=["Webkit","Moz","ms"],Bn={};function ql(e,t){const n=Bn[t];if(n)return n;let r=Ie(t);if(r!=="filter"&&r in e)return Bn[t]=r;r=wn(r);for(let a=0;a<Na.length;a++){const i=Na[a]+r;if(i in e)return Bn[t]=i}return t}const Ma="http://www.w3.org/1999/xlink";function Xl(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ma,t.slice(6,t.length)):e.setAttributeNS(Ma,t,n);else{const i=Lo(t);n==null||i&&!fi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Vl(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=fi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[Zi,Jl]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let sr=0;const Gl=Promise.resolve(),Zl=()=>{sr=0},Ql=()=>sr||(Gl.then(Zl),sr=Zi());function ef(e,t,n,r){e.addEventListener(t,n,r)}function tf(e,t,n,r){e.removeEventListener(t,n,r)}function nf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=rf(t);if(r){const u=i[t]=af(r,a);ef(e,s,u,l)}else o&&(tf(e,s,o,l),i[t]=void 0)}}const Fa=/(?:Once|Passive|Capture)$/;function rf(e){let t;if(Fa.test(e)){t={};let n;for(;n=e.match(Fa);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[bt(e.slice(2)),t]}function af(e,t){const n=r=>{const a=r.timeStamp||Zi();(Jl||a>=n.attached-1)&&xe(of(r,n.value),t,5,[r])};return n.value=e,n.attached=Ql(),n}function of(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ra=/^on[a-z]/,sf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Wl(e,r,a):t==="style"?Kl(e,n,r):bn(t)?Ar(t)||nf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lf(e,t,r,a))?Vl(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Xl(e,t,r,a))};function lf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ra.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ra.test(t)&&G(n)?!1:t in e}const ff=ne({patchProp:sf},Yl);let La;function cf(){return La||(La=wl(ff))}const uf=(...e)=>{const t=cf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=df(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function df(e){return G(e)?document.querySelector(e):e}var mf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const pf={},hf=Ur("h2",null,"fontawesome icon",-1);function gf(e,t){const n=il("font-awesome-icon");return Ol(),Pl(Oe,null,[hf,ce(n,{icon:"fa-solid fa-user-secret"}),ce(n,{icon:"fa-solid fa-user-secret",style:{color:"red","font-size":"4rem"}})],64)}var vf=mf(pf,[["render",gf]]);/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function ja(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ja(Object(n),!0).forEach(function(r){xf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ja(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dn(e){return dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dn(e)}function bf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function za(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function yf(e,t,n){return t&&za(e.prototype,t),n&&za(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yr(e,t){return _f(e)||Af(e,t)||Qi(e,t)||Ef()}function Pn(e){return wf(e)||kf(e)||Qi(e)||Of()}function wf(e){if(Array.isArray(e))return lr(e)}function _f(e){if(Array.isArray(e))return e}function kf(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Af(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Qi(e,t){if(!!e){if(typeof e=="string")return lr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lr(e,t)}}function lr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Of(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ef(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Da=function(){},Wr={},eo={},to=null,no={mark:Da,measure:Da};try{typeof window!="undefined"&&(Wr=window),typeof document!="undefined"&&(eo=document),typeof MutationObserver!="undefined"&&(to=MutationObserver),typeof performance!="undefined"&&(no=performance)}catch{}var Cf=Wr.navigator||{},$a=Cf.userAgent,Ua=$a===void 0?"":$a,qe=Wr,X=eo,Ba=to,Gt=no;qe.document;var ze=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",ro=~Ua.indexOf("MSIE")||~Ua.indexOf("Trident/"),Fe="___FONT_AWESOME___",fr=16,ao="fa",io="svg-inline--fa",nt="data-fa-i2svg",cr="data-fa-pseudo-element",Pf="data-fa-pseudo-element-pending",Kr="data-prefix",qr="data-icon",Ha="fontawesome-i2svg",If="async",Tf=["HTML","HEAD","STYLE","SCRIPT"],oo=function(){try{return!0}catch{return!1}}(),Xr={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},mn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},so={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Sf={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Nf=/fa[srltdbk\-\ ]/,lo="fa-layers-text",Mf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Ff={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},fo=[1,2,3,4,5,6,7,8,9,10],Rf=fo.concat([11,12,13,14,15,16,17,18,19,20]),Lf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Qe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},jf=[].concat(Pn(Object.keys(mn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Qe.GROUP,Qe.SWAP_OPACITY,Qe.PRIMARY,Qe.SECONDARY]).concat(fo.map(function(e){return"".concat(e,"x")})).concat(Rf.map(function(e){return"w-".concat(e)})),co=qe.FontAwesomeConfig||{};function zf(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Df(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var $f=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];$f.forEach(function(e){var t=Yr(e,2),n=t[0],r=t[1],a=Df(zf(n));a!=null&&(co[r]=a)})}var Uf={familyPrefix:ao,styleDefault:"solid",replacementClass:io,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ft=A(A({},Uf),co);Ft.autoReplaceSvg||(Ft.observeMutations=!1);var T={};Object.keys(Ft).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Ft[e]=n,nn.forEach(function(r){return r(T)})},get:function(){return Ft[e]}})});qe.FontAwesomeConfig=T;var nn=[];function Bf(e){return nn.push(e),function(){nn.splice(nn.indexOf(e),1)}}var Ue=fr,Pe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hf(e){if(!(!e||!ze)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Yf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Bt(){for(var e=12,t="";e-- >0;)t+=Yf[Math.random()*62|0];return t}function wt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Vr(e){return e.classList?wt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function uo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wf(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(uo(e[n]),'" ')},"").trim()}function In(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Jr(e){return e.size!==Pe.size||e.x!==Pe.x||e.y!==Pe.y||e.rotate!==Pe.rotate||e.flipX||e.flipY}function Kf(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function qf(e){var t=e.transform,n=e.width,r=n===void 0?fr:n,a=e.height,i=a===void 0?fr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ro?l+="translate(".concat(t.x/Ue-r/2,"em, ").concat(t.y/Ue-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ue,"em), calc(-50% + ").concat(t.y/Ue,"em)) "):l+="translate(".concat(t.x/Ue,"em, ").concat(t.y/Ue,"em) "),l+="scale(".concat(t.size/Ue*(t.flipX?-1:1),", ").concat(t.size/Ue*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Xf=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function mo(){var e=ao,t=io,n=T.familyPrefix,r=T.replacementClass,a=Xf;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ya=!1;function Hn(){T.autoAddCss&&!Ya&&(Hf(mo()),Ya=!0)}var Vf={mixout:function(){return{dom:{css:mo,insertCss:Hn}}},hooks:function(){return{beforeDOMElementCreation:function(){Hn()},beforeI2svg:function(){Hn()}}}},Re=qe||{};Re[Fe]||(Re[Fe]={});Re[Fe].styles||(Re[Fe].styles={});Re[Fe].hooks||(Re[Fe].hooks={});Re[Fe].shims||(Re[Fe].shims=[]);var be=Re[Fe],po=[],Jf=function e(){X.removeEventListener("DOMContentLoaded",e),pn=1,po.map(function(t){return t()})},pn=!1;ze&&(pn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),pn||X.addEventListener("DOMContentLoaded",Jf));function Gf(e){!ze||(pn?setTimeout(e,0):po.push(e))}function Ht(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?uo(e):"<".concat(t," ").concat(Wf(r),">").concat(i.map(Ht).join(""),"</").concat(t,">")}function Wa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Zf=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Yn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Zf(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Qf(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ur(e){var t=Qf(e);return t.length===1?t[0].toString(16):null}function ec(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ka(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function dr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ka(t);typeof be.hooks.addPack=="function"&&!a?be.hooks.addPack(e,Ka(t)):be.styles[e]=A(A({},be.styles[e]||{}),i),e==="fas"&&dr("fa",t)}var Rt=be.styles,tc=be.shims,nc=Object.values(so),Gr=null,ho={},go={},vo={},bo={},yo={},rc=Object.keys(Xr);function ac(e){return~jf.indexOf(e)}function ic(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!ac(a)?a:null}var xo=function(){var t=function(i){return Yn(Rt,function(o,s,l){return o[l]=Yn(s,i,{}),o},{})};ho=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),go=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),yo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Rt||T.autoFetchSvg,r=Yn(tc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});vo=r.names,bo=r.unicodes,Gr=Tn(T.styleDefault)};Bf(function(e){Gr=Tn(e.styleDefault)});xo();function Zr(e,t){return(ho[e]||{})[t]}function oc(e,t){return(go[e]||{})[t]}function ut(e,t){return(yo[e]||{})[t]}function wo(e){return vo[e]||{prefix:null,iconName:null}}function sc(e){var t=bo[e],n=Zr("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Xe(){return Gr}var Qr=function(){return{prefix:null,iconName:null,rest:[]}};function Tn(e){var t=Xr[e],n=mn[e]||mn[t],r=e in be.styles?e:null;return n||r||null}function Sn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=ic(T.familyPrefix,s);if(Rt[s]?(s=nc.includes(s)?Sf[s]:s,a=s,o.prefix=s):rc.indexOf(s)>-1?(a=s,o.prefix=Tn(s)):l?o.iconName=l:s!==T.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?wo(o.iconName):{},d=ut(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Rt.far&&Rt.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},Qr());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Xe()||"fas"),i}var lc=function(){function e(){bf(this,e),this.definitions={}}return yf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),dr(s,o[s]);var l=so[s];l&&dr(l,o[s]),xo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),qa=[],dt={},ht={},fc=Object.keys(ht);function cc(e,t){var n=t.mixoutsTo;return qa=e,dt={},Object.keys(ht).forEach(function(r){fc.indexOf(r)===-1&&delete ht[r]}),qa.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),dn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){dt[o]||(dt[o]=[]),dt[o].push(i[o])})}r.provides&&r.provides(ht)}),n}function mr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=dt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function rt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=dt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Le(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ht[e]?ht[e].apply(null,t):void 0}function pr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Xe();if(!!t)return t=ut(n,t)||t,Wa(_o.definitions,n,t)||Wa(be.styles,n,t)}var _o=new lc,uc=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,rt("noAuto")},dc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ze?(rt("beforeI2svg",t),Le("pseudoElements2svg",t),Le("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Gf(function(){pc({autoReplaceSvgRoot:n}),rt("watch",t)})}},mc={icon:function(t){if(t===null)return null;if(dn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ut(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Tn(t[0]);return{prefix:r,iconName:ut(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.familyPrefix,"-"))>-1||t.match(Nf))){var a=Sn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Xe(),iconName:ut(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Xe();return{prefix:i,iconName:ut(i,t)||t}}}},de={noAuto:uc,config:T,dom:dc,parse:mc,library:_o,findIconDefinition:pr,toHtml:Ht},pc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(be.styles).length>0||T.autoFetchSvg)&&ze&&T.autoReplaceSvg&&de.dom.i2svg({node:r})};function Nn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ht(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!ze){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function hc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Jr(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=In(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function gc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function ea(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,O=b===void 0?!1:b,F=r.found?r:n,j=F.width,S=F.height,y=a==="fak",E=[T.replacementClass,i?"".concat(T.familyPrefix,"-").concat(i):""].filter(function(re){return m.classes.indexOf(re)===-1}).filter(function(re){return re!==""||!!re}).concat(m.classes).join(" "),N={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(S)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(j/S*16*.0625,"em")}:{};O&&(N.attributes[nt]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||Bt())},children:[l]}),delete N.attributes.title);var Y=A(A({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},z),m.styles)}),Q=r.found&&n.found?Le("generateAbstractMask",Y)||{children:[],attributes:{}}:Le("generateAbstractIcon",Y)||{children:[],attributes:{}},se=Q.children,we=Q.attributes;return Y.children=se,Y.attributes=we,s?gc(Y):hc(Y)}function Xa(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[nt]="");var d=A({},o.styles);Jr(a)&&(d.transform=qf({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=In(d);m.length>0&&(u.style=m);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function vc(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=In(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Wn=be.styles;function hr(e){var t=e[0],n=e[1],r=e.slice(4),a=Yr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.familyPrefix,"-").concat(Qe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(Qe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(Qe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var bc={found:!1,width:512,height:512};function yc(e,t){!oo&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function gr(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Xe()),new Promise(function(r,a){if(Le("missingIconAbstract"),n==="fa"){var i=wo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Wn[t]&&Wn[t][e]){var o=Wn[t][e];return r(hr(o))}yc(e,t),r(A(A({},bc),{},{icon:T.showMissingIcons&&e?Le("missingIconAbstract")||{}:{}}))})}var Va=function(){},vr=T.measurePerformance&&Gt&&Gt.mark&&Gt.measure?Gt:{mark:Va,measure:Va},It='FA "6.1.1"',xc=function(t){return vr.mark("".concat(It," ").concat(t," begins")),function(){return ko(t)}},ko=function(t){vr.mark("".concat(It," ").concat(t," ends")),vr.measure("".concat(It," ").concat(t),"".concat(It," ").concat(t," begins"),"".concat(It," ").concat(t," ends"))},ta={begin:xc,end:ko},rn=function(){};function Ja(e){var t=e.getAttribute?e.getAttribute(nt):null;return typeof t=="string"}function wc(e){var t=e.getAttribute?e.getAttribute(Kr):null,n=e.getAttribute?e.getAttribute(qr):null;return t&&n}function _c(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function kc(){if(T.autoReplaceSvg===!0)return an.replace;var e=an[T.autoReplaceSvg];return e||an.replace}function Ac(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Oc(e){return X.createElement(e)}function Ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ac:Oc:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ao(o,{ceFn:r}))}),a}function Ec(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var an={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ao(a),n)}),n.getAttribute(nt)===null&&T.keepOriginalSource){var r=X.createComment(Ec(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Vr(n).indexOf(T.replacementClass))return an.replace(t);var a=new RegExp("".concat(T.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ht(s)}).join(`
`);n.setAttribute(nt,""),n.innerHTML=o}};function Ga(e){e()}function Oo(e,t){var n=typeof t=="function"?t:rn;if(e.length===0)n();else{var r=Ga;T.mutateApproach===If&&(r=qe.requestAnimationFrame||Ga),r(function(){var a=kc(),i=ta.begin("mutate");e.map(a),i(),n()})}}var na=!1;function Eo(){na=!0}function br(){na=!1}var hn=null;function Za(e){if(!!Ba&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?rn:t,r=e.nodeCallback,a=r===void 0?rn:r,i=e.pseudoElementsCallback,o=i===void 0?rn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;hn=new Ba(function(u){if(!na){var d=Xe();wt(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ja(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ja(m.target)&&~Lf.indexOf(m.attributeName))if(m.attributeName==="class"&&wc(m.target)){var b=Sn(Vr(m.target)),O=b.prefix,F=b.iconName;m.target.setAttribute(Kr,O||d),F&&m.target.setAttribute(qr,F)}else _c(m.target)&&a(m.target)})}}),ze&&hn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Cc(){!hn||hn.disconnect()}function Pc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ic(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Sn(Vr(e));return a.prefix||(a.prefix=Xe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=oc(a.prefix,e.innerText)||Zr(a.prefix,ur(e.innerText))),a}function Tc(e){var t=wt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Bt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Sc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Pe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ic(e),r=n.iconName,a=n.prefix,i=n.rest,o=Tc(e),s=mr("parseNodeAttributes",{},e),l=t.styleParser?Pc(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Pe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Nc=be.styles;function Co(e){var t=T.autoReplaceSvg==="nest"?Qa(e,{styleParser:!1}):Qa(e);return~t.extra.classes.indexOf(lo)?Le("generateLayersText",e,t):Le("generateSvgReplacementMutation",e,t)}function ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ze)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Ha,"-").concat(m))},a=function(m){return n.remove("".concat(Ha,"-").concat(m))},i=T.autoFetchSvg?Object.keys(Xr):Object.keys(Nc),o=[".".concat(lo,":not([").concat(nt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(nt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=wt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ta.begin("onTree"),u=s.reduce(function(d,m){try{var b=Co(m);b&&d.push(b)}catch(O){oo||O.name==="MissingIcon"&&console.error(O)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(b){Oo(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function Mc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Co(e).then(function(n){n&&Oo([n],t)})}function Fc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:pr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:pr(a||{})),e(r,A(A({},n),{},{mask:a}))}}var Rc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Pe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,b=m===void 0?null:m,O=n.titleId,F=O===void 0?null:O,j=n.classes,S=j===void 0?[]:j,y=n.attributes,E=y===void 0?{}:y,N=n.styles,z=N===void 0?{}:N;if(!!t){var Y=t.prefix,Q=t.iconName,se=t.icon;return Nn(A({type:"icon"},t),function(){return rt("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(b?E["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(F||Bt()):(E["aria-hidden"]="true",E.focusable="false")),ea({icons:{main:hr(se),mask:l?hr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:Q,transform:A(A({},Pe),a),symbol:o,title:b,maskId:d,titleId:F,extra:{attributes:E,styles:z,classes:S}})})}},Lc={mixout:function(){return{icon:Fc(Rc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ei,n.nodeCallback=Mc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return ei(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(O,F){Promise.all([gr(a,s),d.iconName?gr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var S=Yr(j,2),y=S[0],E=S[1];O([n,ea({icons:{main:y,mask:E},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=In(s);l.length>0&&(a.style=l);var u;return Jr(o)&&(u=Le("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},jc={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Nn({type:"layer"},function(){rt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.familyPrefix,"-layers")].concat(Pn(i)).join(" ")},children:o}]})}}}},zc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Nn({type:"counter",content:n},function(){return rt("beforeDOMElementCreation",{content:n,params:r}),vc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(T.familyPrefix,"-layers-counter")].concat(Pn(s))}})})}}}},Dc={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Pe:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,O=b===void 0?{}:b;return Nn({type:"text",content:n},function(){return rt("beforeDOMElementCreation",{content:n,params:r}),Xa({content:n,transform:A(A({},Pe),i),title:s,extra:{attributes:m,styles:O,classes:["".concat(T.familyPrefix,"-layers-text")].concat(Pn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ro){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Xa({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},$c=new RegExp('"',"ug"),ti=[1105920,1112319];function Uc(e){var t=e.replace($c,""),n=ec(t,0),r=n>=ti[0]&&n<=ti[1],a=t.length===2?t[0]===t[1]:!1;return{value:ur(a?t[0]:t),isSecondary:r||a}}function ni(e,t){var n="".concat(Pf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=wt(e.children),o=i.filter(function(Q){return Q.getAttribute(cr)===t})[0],s=qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Mf),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?mn[l[2].toLowerCase()]:Ff[u],O=Uc(m),F=O.value,j=O.isSecondary,S=l[0].startsWith("FontAwesome"),y=Zr(b,F),E=y;if(S){var N=sc(F);N.iconName&&N.prefix&&(y=N.iconName,b=N.prefix)}if(y&&!j&&(!o||o.getAttribute(Kr)!==b||o.getAttribute(qr)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var z=Sc(),Y=z.extra;Y.attributes[cr]=t,gr(y,b).then(function(Q){var se=ea(A(A({},z),{},{icons:{main:Q,mask:Qr()},prefix:b,iconName:E,extra:Y,watchable:!0})),we=X.createElement("svg");t==="::before"?e.insertBefore(we,e.firstChild):e.appendChild(we),we.outerHTML=se.map(function(re){return Ht(re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Bc(e){return Promise.all([ni(e,"::before"),ni(e,"::after")])}function Hc(e){return e.parentNode!==document.head&&!~Tf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(cr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ri(e){if(!!ze)return new Promise(function(t,n){var r=wt(e.querySelectorAll("*")).filter(Hc).map(Bc),a=ta.begin("searchPseudoElements");Eo(),Promise.all(r).then(function(){a(),br(),t()}).catch(function(){a(),br(),n()})})}var Yc={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ri,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;T.searchPseudoElements&&ri(a)}}},ai=!1,Wc={mixout:function(){return{dom:{unwatch:function(){Eo(),ai=!0}}}},hooks:function(){return{bootstrap:function(){Za(mr("mutationObserverCallbacks",{}))},noAuto:function(){Cc()},watch:function(n){var r=n.observeMutationsRoot;ai?br():Za(mr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ii=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Kc={mixout:function(){return{parse:{transform:function(n){return ii(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ii(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},O={outer:s,inner:m,path:b};return{tag:"g",attributes:A({},O.outer),children:[{tag:"g",attributes:A({},O.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),O.path)}]}]}}}},Kn={x:0,y:0,width:"100%",height:"100%"};function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qc(e){return e.tag==="g"?e.children:[e]}var Xc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Sn(a.split(" ").map(function(o){return o.trim()})):Qr();return i.prefix||(i.prefix=Xe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,b=o.icon,O=Kf({transform:l,containerWidth:m,iconWidth:u}),F={tag:"rect",attributes:A(A({},Kn),{},{fill:"white"})},j=d.children?{children:d.children.map(oi)}:{},S={tag:"g",attributes:A({},O.inner),children:[oi(A({tag:d.tag,attributes:A(A({},d.attributes),O.path)},j))]},y={tag:"g",attributes:A({},O.outer),children:[S]},E="mask-".concat(s||Bt()),N="clip-".concat(s||Bt()),z={tag:"mask",attributes:A(A({},Kn),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,y]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:qc(b)},z]};return r.push(Y,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(E,")")},Kn)}),{children:r,attributes:a}}}},Vc={provides:function(t){var n=!1;qe.matchMedia&&(n=qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Jc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Gc=[Vf,Lc,jc,zc,Dc,Yc,Wc,Kc,Xc,Vc,Jc];cc(Gc,{mixoutsTo:de});de.noAuto;var Po=de.config,Zc=de.library;de.dom;var gn=de.parse;de.findIconDefinition;de.toHtml;var Qc=de.icon;de.layer;var eu=de.text;de.counter;function si(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?si(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):si(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vn(e){return vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vn(e)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function nu(e,t){if(e==null)return{};var n=tu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function yr(e){return ru(e)||au(e)||iu(e)||ou()}function ru(e){if(Array.isArray(e))return xr(e)}function au(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function iu(e,t){if(!!e){if(typeof e=="string")return xr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xr(e,t)}}function xr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ou(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var su=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Io={exports:{}};(function(e){(function(t){var n=function(y,E,N){if(!u(E)||m(E)||b(E)||O(E)||l(E))return E;var z,Y=0,Q=0;if(d(E))for(z=[],Q=E.length;Y<Q;Y++)z.push(n(y,E[Y],N));else{z={};for(var se in E)Object.prototype.hasOwnProperty.call(E,se)&&(z[y(se,N)]=n(y,E[se],N))}return z},r=function(y,E){E=E||{};var N=E.separator||"_",z=E.split||/(?=[A-Z])/;return y.split(z).join(N)},a=function(y){return F(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(E,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var E=a(y);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(y,E){return r(y,E).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},O=function(y){return s.call(y)=="[object Boolean]"},F=function(y){return y=y-0,y===y},j=function(y,E){var N=E&&"process"in E?E.process:E;return typeof N!="function"?y:function(z,Y){return N(z,y,Y)}},S={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,E){return n(j(a,E),y)},decamelizeKeys:function(y,E){return n(j(o,E),y,E)},pascalizeKeys:function(y,E){return n(j(i,E),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(su)})(Io);var lu=Io.exports,fu=["class","style"];function cu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=lu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function uu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ra(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ra(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=uu(d);break;case"style":l.style=cu(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=nu(n,fu);return Gi(e.tag,ge(ge(ge({},t),{},{class:a.class,style:ge(ge({},a.style),o)},a.attrs),s),r)}var To=!1;try{To=!0}catch{}function du(){if(!To&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Lt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ie({},e,t):{}}function mu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ie(t,"fa-".concat(e.size),e.size!==null),ie(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ie(t,"fa-pull-".concat(e.pull),e.pull!==null),ie(t,"fa-swap-opacity",e.swapOpacity),ie(t,"fa-bounce",e.bounce),ie(t,"fa-shake",e.shake),ie(t,"fa-beat",e.beat),ie(t,"fa-fade",e.fade),ie(t,"fa-beat-fade",e.beatFade),ie(t,"fa-flash",e.flash),ie(t,"fa-spin-pulse",e.spinPulse),ie(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function li(e){if(e&&vn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(gn.icon)return gn.icon(e);if(e===null)return null;if(vn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var pu=zr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=me(function(){return li(t.icon)}),i=me(function(){return Lt("classes",mu(t))}),o=me(function(){return Lt("transform",typeof t.transform=="string"?gn.transform(t.transform):t.transform)}),s=me(function(){return Lt("mask",li(t.mask))}),l=me(function(){return Qc(a.value,ge(ge(ge(ge({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Qt(l,function(d){if(!d)return du("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=me(function(){return l.value?ra(l.value.abstract[0],{},r):null});return function(){return u.value}}});zr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Po.familyPrefix,i=me(function(){return["".concat(a,"-layers")].concat(yr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Gi("div",{class:i.value},r.default?r.default():[])}}});zr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Po.familyPrefix,i=me(function(){return Lt("classes",[].concat(yr(t.counter?["".concat(a,"-layers-counter")]:[]),yr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=me(function(){return Lt("transform",typeof t.transform=="string"?gn.transform(t.transform):t.transform)}),s=me(function(){var u=eu(t.value.toString(),ge(ge({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=me(function(){return ra(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var hu={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M377.7 338.8l37.15-92.87C419 235.4 411.3 224 399.1 224h-57.48C348.5 209.2 352 193 352 176c0-4.117-.8359-8.057-1.217-12.08C390.7 155.1 416 142.3 416 128c0-16.08-31.75-30.28-80.31-38.99C323.8 45.15 304.9 0 277.4 0c-10.38 0-19.62 4.5-27.38 10.5c-15.25 11.88-36.75 11.88-52 0C190.3 4.5 181.1 0 170.7 0C143.2 0 124.4 45.16 112.5 88.98C63.83 97.68 32 111.9 32 128c0 14.34 25.31 27.13 65.22 35.92C96.84 167.9 96 171.9 96 176C96 193 99.47 209.2 105.5 224H48.02C36.7 224 28.96 235.4 33.16 245.9l37.15 92.87C27.87 370.4 0 420.4 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 420.4 420.1 370.4 377.7 338.8zM176 479.1L128 288l64 32l16 32L176 479.1zM271.1 479.1L240 352l16-32l64-32L271.1 479.1zM320 186C320 207 302.8 224 281.6 224h-12.33c-16.46 0-30.29-10.39-35.63-24.99C232.1 194.9 228.4 192 224 192S215.9 194.9 214.4 199C209 213.6 195.2 224 178.8 224h-12.33C145.2 224 128 207 128 186V169.5C156.3 173.6 188.1 176 224 176s67.74-2.383 96-6.473V186z"]};Zc.add(hu);const So=uf(vf);So.component("font-awesome-icon",pu);So.mount("#app");
