(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function s(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(f){if(f.ep)return;f.ep=!0;const p=s(f);fetch(f.href,p)}})();function Og(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var ms={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh;function Cg(){if(Lh)return al;Lh=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(c,f,p){var g=null;if(p!==void 0&&(g=""+p),f.key!==void 0&&(g=""+f.key),"key"in f){p={};for(var S in f)S!=="key"&&(p[S]=f[S])}else p=f;return f=p.ref,{$$typeof:l,type:c,key:g,ref:f!==void 0?f:null,props:p}}return al.Fragment=o,al.jsx=s,al.jsxs=s,al}var Gh;function Mg(){return Gh||(Gh=1,ms.exports=Cg()),ms.exports}var d=Mg(),ps={exports:{}},it={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function _g(){if(Qh)return it;Qh=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),T=Symbol.iterator;function M(y){return y===null||typeof y!="object"?null:(y=T&&y[T]||y["@@iterator"],typeof y=="function"?y:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,q={};function X(y,B,L){this.props=y,this.context=B,this.refs=q,this.updater=L||k}X.prototype.isReactComponent={},X.prototype.setState=function(y,B){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,B,"setState")},X.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function U(){}U.prototype=X.prototype;function Z(y,B,L){this.props=y,this.context=B,this.refs=q,this.updater=L||k}var Y=Z.prototype=new U;Y.constructor=Z,H(Y,X.prototype),Y.isPureReactComponent=!0;var F=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function J(y,B,L,Q,W,st){return L=st.ref,{$$typeof:l,type:y,key:B,ref:L!==void 0?L:null,props:st}}function wt(y,B){return J(y.type,B,void 0,void 0,void 0,y.props)}function vt(y){return typeof y=="object"&&y!==null&&y.$$typeof===l}function ne(y){var B={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(L){return B[L]})}var ie=/\/+/g;function Lt(y,B){return typeof y=="object"&&y!==null&&y.key!=null?ne(""+y.key):B.toString(36)}function $e(){}function We(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then($e,$e):(y.status="pending",y.then(function(B){y.status==="pending"&&(y.status="fulfilled",y.value=B)},function(B){y.status==="pending"&&(y.status="rejected",y.reason=B)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function Gt(y,B,L,Q,W){var st=typeof y;(st==="undefined"||st==="boolean")&&(y=null);var et=!1;if(y===null)et=!0;else switch(st){case"bigint":case"string":case"number":et=!0;break;case"object":switch(y.$$typeof){case l:case o:et=!0;break;case b:return et=y._init,Gt(et(y._payload),B,L,Q,W)}}if(et)return W=W(y),et=Q===""?"."+Lt(y,0):Q,F(W)?(L="",et!=null&&(L=et.replace(ie,"$&/")+"/"),Gt(W,B,L,"",function(It){return It})):W!=null&&(vt(W)&&(W=wt(W,L+(W.key==null||y&&y.key===W.key?"":(""+W.key).replace(ie,"$&/")+"/")+et)),B.push(W)),1;et=0;var Qt=Q===""?".":Q+":";if(F(y))for(var gt=0;gt<y.length;gt++)Q=y[gt],st=Qt+Lt(Q,gt),et+=Gt(Q,B,L,st,W);else if(gt=M(y),typeof gt=="function")for(y=gt.call(y),gt=0;!(Q=y.next()).done;)Q=Q.value,st=Qt+Lt(Q,gt++),et+=Gt(Q,B,L,st,W);else if(st==="object"){if(typeof y.then=="function")return Gt(We(y),B,L,Q,W);throw B=String(y),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return et}function D(y,B,L){if(y==null)return y;var Q=[],W=0;return Gt(y,Q,"","",function(st){return B.call(L,st,W++)}),Q}function G(y){if(y._status===-1){var B=y._result;B=B(),B.then(function(L){(y._status===0||y._status===-1)&&(y._status=1,y._result=L)},function(L){(y._status===0||y._status===-1)&&(y._status=2,y._result=L)}),y._status===-1&&(y._status=0,y._result=B)}if(y._status===1)return y._result.default;throw y._result}var P=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function ct(){}return it.Children={map:D,forEach:function(y,B,L){D(y,function(){B.apply(this,arguments)},L)},count:function(y){var B=0;return D(y,function(){B++}),B},toArray:function(y){return D(y,function(B){return B})||[]},only:function(y){if(!vt(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},it.Component=X,it.Fragment=s,it.Profiler=f,it.PureComponent=Z,it.StrictMode=c,it.Suspense=x,it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,it.__COMPILER_RUNTIME={__proto__:null,c:function(y){return V.H.useMemoCache(y)}},it.cache=function(y){return function(){return y.apply(null,arguments)}},it.cloneElement=function(y,B,L){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var Q=H({},y.props),W=y.key,st=void 0;if(B!=null)for(et in B.ref!==void 0&&(st=void 0),B.key!==void 0&&(W=""+B.key),B)!I.call(B,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&B.ref===void 0||(Q[et]=B[et]);var et=arguments.length-2;if(et===1)Q.children=L;else if(1<et){for(var Qt=Array(et),gt=0;gt<et;gt++)Qt[gt]=arguments[gt+2];Q.children=Qt}return J(y.type,W,void 0,void 0,st,Q)},it.createContext=function(y){return y={$$typeof:g,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:p,_context:y},y},it.createElement=function(y,B,L){var Q,W={},st=null;if(B!=null)for(Q in B.key!==void 0&&(st=""+B.key),B)I.call(B,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(W[Q]=B[Q]);var et=arguments.length-2;if(et===1)W.children=L;else if(1<et){for(var Qt=Array(et),gt=0;gt<et;gt++)Qt[gt]=arguments[gt+2];W.children=Qt}if(y&&y.defaultProps)for(Q in et=y.defaultProps,et)W[Q]===void 0&&(W[Q]=et[Q]);return J(y,st,void 0,void 0,null,W)},it.createRef=function(){return{current:null}},it.forwardRef=function(y){return{$$typeof:S,render:y}},it.isValidElement=vt,it.lazy=function(y){return{$$typeof:b,_payload:{_status:-1,_result:y},_init:G}},it.memo=function(y,B){return{$$typeof:h,type:y,compare:B===void 0?null:B}},it.startTransition=function(y){var B=V.T,L={};V.T=L;try{var Q=y(),W=V.S;W!==null&&W(L,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(ct,P)}catch(st){P(st)}finally{V.T=B}},it.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},it.use=function(y){return V.H.use(y)},it.useActionState=function(y,B,L){return V.H.useActionState(y,B,L)},it.useCallback=function(y,B){return V.H.useCallback(y,B)},it.useContext=function(y){return V.H.useContext(y)},it.useDebugValue=function(){},it.useDeferredValue=function(y,B){return V.H.useDeferredValue(y,B)},it.useEffect=function(y,B,L){var Q=V.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Q.useEffect(y,B)},it.useId=function(){return V.H.useId()},it.useImperativeHandle=function(y,B,L){return V.H.useImperativeHandle(y,B,L)},it.useInsertionEffect=function(y,B){return V.H.useInsertionEffect(y,B)},it.useLayoutEffect=function(y,B){return V.H.useLayoutEffect(y,B)},it.useMemo=function(y,B){return V.H.useMemo(y,B)},it.useOptimistic=function(y,B){return V.H.useOptimistic(y,B)},it.useReducer=function(y,B,L){return V.H.useReducer(y,B,L)},it.useRef=function(y){return V.H.useRef(y)},it.useState=function(y){return V.H.useState(y)},it.useSyncExternalStore=function(y,B,L){return V.H.useSyncExternalStore(y,B,L)},it.useTransition=function(){return V.H.useTransition()},it.version="19.1.1",it}var Xh;function Bs(){return Xh||(Xh=1,ps.exports=_g()),ps.exports}var A=Bs();const Me=Og(A);var gs={exports:{}},il={},xs={exports:{}},vs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function Bg(){return Vh||(Vh=1,(function(l){function o(D,G){var P=D.length;D.push(G);t:for(;0<P;){var ct=P-1>>>1,y=D[ct];if(0<f(y,G))D[ct]=G,D[P]=y,P=ct;else break t}}function s(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var G=D[0],P=D.pop();if(P!==G){D[0]=P;t:for(var ct=0,y=D.length,B=y>>>1;ct<B;){var L=2*(ct+1)-1,Q=D[L],W=L+1,st=D[W];if(0>f(Q,P))W<y&&0>f(st,Q)?(D[ct]=st,D[W]=P,ct=W):(D[ct]=Q,D[L]=P,ct=L);else if(W<y&&0>f(st,P))D[ct]=st,D[W]=P,ct=W;else break t}}return G}function f(D,G){var P=D.sortIndex-G.sortIndex;return P!==0?P:D.id-G.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var g=Date,S=g.now();l.unstable_now=function(){return g.now()-S}}var x=[],h=[],b=1,T=null,M=3,k=!1,H=!1,q=!1,X=!1,U=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function F(D){for(var G=s(h);G!==null;){if(G.callback===null)c(h);else if(G.startTime<=D)c(h),G.sortIndex=G.expirationTime,o(x,G);else break;G=s(h)}}function V(D){if(q=!1,F(D),!H)if(s(x)!==null)H=!0,I||(I=!0,Lt());else{var G=s(h);G!==null&&Gt(V,G.startTime-D)}}var I=!1,J=-1,wt=5,vt=-1;function ne(){return X?!0:!(l.unstable_now()-vt<wt)}function ie(){if(X=!1,I){var D=l.unstable_now();vt=D;var G=!0;try{t:{H=!1,q&&(q=!1,Z(J),J=-1),k=!0;var P=M;try{e:{for(F(D),T=s(x);T!==null&&!(T.expirationTime>D&&ne());){var ct=T.callback;if(typeof ct=="function"){T.callback=null,M=T.priorityLevel;var y=ct(T.expirationTime<=D);if(D=l.unstable_now(),typeof y=="function"){T.callback=y,F(D),G=!0;break e}T===s(x)&&c(x),F(D)}else c(x);T=s(x)}if(T!==null)G=!0;else{var B=s(h);B!==null&&Gt(V,B.startTime-D),G=!1}}break t}finally{T=null,M=P,k=!1}G=void 0}}finally{G?Lt():I=!1}}}var Lt;if(typeof Y=="function")Lt=function(){Y(ie)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,We=$e.port2;$e.port1.onmessage=ie,Lt=function(){We.postMessage(null)}}else Lt=function(){U(ie,0)};function Gt(D,G){J=U(function(){D(l.unstable_now())},G)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(D){D.callback=null},l.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):wt=0<D?Math.floor(1e3/D):5},l.unstable_getCurrentPriorityLevel=function(){return M},l.unstable_next=function(D){switch(M){case 1:case 2:case 3:var G=3;break;default:G=M}var P=M;M=G;try{return D()}finally{M=P}},l.unstable_requestPaint=function(){X=!0},l.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var P=M;M=D;try{return G()}finally{M=P}},l.unstable_scheduleCallback=function(D,G,P){var ct=l.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ct+P:ct):P=ct,D){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=P+y,D={id:b++,callback:G,priorityLevel:D,startTime:P,expirationTime:y,sortIndex:-1},P>ct?(D.sortIndex=P,o(h,D),s(x)===null&&D===s(h)&&(q?(Z(J),J=-1):q=!0,Gt(V,P-ct))):(D.sortIndex=y,o(x,D),H||k||(H=!0,I||(I=!0,Lt()))),D},l.unstable_shouldYield=ne,l.unstable_wrapCallback=function(D){var G=M;return function(){var P=M;M=G;try{return D.apply(this,arguments)}finally{M=P}}}})(vs)),vs}var Zh;function Ug(){return Zh||(Zh=1,xs.exports=Bg()),xs.exports}var bs={exports:{}},ee={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function kg(){if(Kh)return ee;Kh=1;var l=Bs();function o(x){var h="https://react.dev/errors/"+x;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)h+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+x+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(o(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(x,h,b){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:T==null?null:""+T,children:x,containerInfo:h,implementation:b}}var g=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(x,h){if(x==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ee.createPortal=function(x,h){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(o(299));return p(x,h,null,b)},ee.flushSync=function(x){var h=g.T,b=c.p;try{if(g.T=null,c.p=2,x)return x()}finally{g.T=h,c.p=b,c.d.f()}},ee.preconnect=function(x,h){typeof x=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(x,h))},ee.prefetchDNS=function(x){typeof x=="string"&&c.d.D(x)},ee.preinit=function(x,h){if(typeof x=="string"&&h&&typeof h.as=="string"){var b=h.as,T=S(b,h.crossOrigin),M=typeof h.integrity=="string"?h.integrity:void 0,k=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;b==="style"?c.d.S(x,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:T,integrity:M,fetchPriority:k}):b==="script"&&c.d.X(x,{crossOrigin:T,integrity:M,fetchPriority:k,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ee.preinitModule=function(x,h){if(typeof x=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var b=S(h.as,h.crossOrigin);c.d.M(x,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(x)},ee.preload=function(x,h){if(typeof x=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var b=h.as,T=S(b,h.crossOrigin);c.d.L(x,b,{crossOrigin:T,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ee.preloadModule=function(x,h){if(typeof x=="string")if(h){var b=S(h.as,h.crossOrigin);c.d.m(x,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(x)},ee.requestFormReset=function(x){c.d.r(x)},ee.unstable_batchedUpdates=function(x,h){return x(h)},ee.useFormState=function(x,h,b){return g.H.useFormState(x,h,b)},ee.useFormStatus=function(){return g.H.useHostTransitionStatus()},ee.version="19.1.1",ee}var Jh;function Hg(){if(Jh)return bs.exports;Jh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),bs.exports=kg(),bs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function qg(){if($h)return il;$h=1;var l=Ug(),o=Bs(),s=Hg();function c(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function p(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function S(t){if(p(t)!==t)throw Error(c(188))}function x(t){var e=t.alternate;if(!e){if(e=p(t),e===null)throw Error(c(188));return e!==t?null:t}for(var n=t,a=e;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return S(i),t;if(r===a)return S(i),e;r=r.sibling}throw Error(c(188))}if(n.return!==a.return)n=i,a=r;else{for(var u=!1,m=i.child;m;){if(m===n){u=!0,n=i,a=r;break}if(m===a){u=!0,a=i,n=r;break}m=m.sibling}if(!u){for(m=r.child;m;){if(m===n){u=!0,n=r,a=i;break}if(m===a){u=!0,a=r,n=i;break}m=m.sibling}if(!u)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?t:e}function h(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=h(t),e!==null)return e;t=t.sibling}return null}var b=Object.assign,T=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),vt=Symbol.for("react.activity"),ne=Symbol.for("react.memo_cache_sentinel"),ie=Symbol.iterator;function Lt(t){return t===null||typeof t!="object"?null:(t=ie&&t[ie]||t["@@iterator"],typeof t=="function"?t:null)}var $e=Symbol.for("react.client.reference");function We(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$e?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case X:return"Profiler";case q:return"StrictMode";case V:return"Suspense";case I:return"SuspenseList";case vt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case k:return"Portal";case Y:return(t.displayName||"Context")+".Provider";case Z:return(t._context.displayName||"Context")+".Consumer";case F:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case J:return e=t.displayName||null,e!==null?e:We(t.type)||"Memo";case wt:e=t._payload,t=t._init;try{return We(t(e))}catch{}}return null}var Gt=Array.isArray,D=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ct=[],y=-1;function B(t){return{current:t}}function L(t){0>y||(t.current=ct[y],ct[y]=null,y--)}function Q(t,e){y++,ct[y]=t.current,t.current=e}var W=B(null),st=B(null),et=B(null),Qt=B(null);function gt(t,e){switch(Q(et,e),Q(st,t),Q(W,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?ph(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=ph(e),t=gh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}L(W),Q(W,t)}function It(){L(W),L(st),L(et)}function Qn(t){t.memoizedState!==null&&Q(Qt,t);var e=W.current,n=gh(e,t.type);e!==n&&(Q(st,t),Q(W,n))}function Fe(t){st.current===t&&(L(W),L(st)),Qt.current===t&&(L(Qt),Ii._currentValue=P)}var ze=Object.prototype.hasOwnProperty,to=l.unstable_scheduleCallback,eo=l.unstable_cancelCallback,sp=l.unstable_shouldYield,up=l.unstable_requestPaint,qe=l.unstable_now,fp=l.unstable_getCurrentPriorityLevel,Js=l.unstable_ImmediatePriority,$s=l.unstable_UserBlockingPriority,pl=l.unstable_NormalPriority,dp=l.unstable_LowPriority,Ws=l.unstable_IdlePriority,hp=l.log,mp=l.unstable_setDisableYieldValue,ri=null,fe=null;function vn(t){if(typeof hp=="function"&&mp(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(ri,t)}catch{}}var de=Math.clz32?Math.clz32:xp,pp=Math.log,gp=Math.LN2;function xp(t){return t>>>=0,t===0?32:31-(pp(t)/gp|0)|0}var gl=256,xl=4194304;function Xn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vl(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var i=0,r=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var m=a&134217727;return m!==0?(a=m&~r,a!==0?i=Xn(a):(u&=m,u!==0?i=Xn(u):n||(n=m&~t,n!==0&&(i=Xn(n))))):(m=a&~r,m!==0?i=Xn(m):u!==0?i=Xn(u):n||(n=a&~t,n!==0&&(i=Xn(n)))),i===0?0:e!==0&&e!==i&&(e&r)===0&&(r=i&-i,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:i}function oi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function vp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fs(){var t=gl;return gl<<=1,(gl&4194048)===0&&(gl=256),t}function Is(){var t=xl;return xl<<=1,(xl&62914560)===0&&(xl=4194304),t}function no(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ci(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function bp(t,e,n,a,i,r){var u=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var m=t.entanglements,v=t.expirationTimes,j=t.hiddenUpdates;for(n=u&~n;0<n;){var O=31-de(n),_=1<<O;m[O]=0,v[O]=-1;var R=j[O];if(R!==null)for(j[O]=null,O=0;O<R.length;O++){var N=R[O];N!==null&&(N.lane&=-536870913)}n&=~_}a!==0&&Ps(t,a,0),r!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=r&~(u&~e))}function Ps(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-de(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&4194090}function tu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-de(n),i=1<<a;i&e|t[a]&e&&(t[a]|=e),n&=~i}}function ao(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function io(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function eu(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Bh(t.type))}function yp(t,e){var n=G.p;try{return G.p=t,e()}finally{G.p=n}}var bn=Math.random().toString(36).slice(2),Pt="__reactFiber$"+bn,le="__reactProps$"+bn,fa="__reactContainer$"+bn,lo="__reactEvents$"+bn,wp="__reactListeners$"+bn,Sp="__reactHandles$"+bn,nu="__reactResources$"+bn,si="__reactMarker$"+bn;function ro(t){delete t[Pt],delete t[le],delete t[lo],delete t[wp],delete t[Sp]}function da(t){var e=t[Pt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fa]||n[Pt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yh(t);t!==null;){if(n=t[Pt])return n;t=yh(t)}return e}t=n,n=t.parentNode}return null}function ha(t){if(t=t[Pt]||t[fa]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function ui(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(c(33))}function ma(t){var e=t[nu];return e||(e=t[nu]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Xt(t){t[si]=!0}var au=new Set,iu={};function Vn(t,e){pa(t,e),pa(t+"Capture",e)}function pa(t,e){for(iu[t]=e,t=0;t<e.length;t++)au.add(e[t])}var zp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lu={},ru={};function Ap(t){return ze.call(ru,t)?!0:ze.call(lu,t)?!1:zp.test(t)?ru[t]=!0:(lu[t]=!0,!1)}function bl(t,e,n){if(Ap(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function yl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Ie(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}var oo,ou;function ga(t){if(oo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);oo=e&&e[1]||"",ou=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oo+t+ou}var co=!1;function so(t,e){if(!t||co)return"";co=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(N){var R=N}Reflect.construct(t,[],_)}else{try{_.call()}catch(N){R=N}t.call(_.prototype)}}else{try{throw Error()}catch(N){R=N}(_=t())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(N){if(N&&R&&typeof N.stack=="string")return[N.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),u=r[0],m=r[1];if(u&&m){var v=u.split(`
`),j=m.split(`
`);for(i=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;i<j.length&&!j[i].includes("DetermineComponentFrameRoot");)i++;if(a===v.length||i===j.length)for(a=v.length-1,i=j.length-1;1<=a&&0<=i&&v[a]!==j[i];)i--;for(;1<=a&&0<=i;a--,i--)if(v[a]!==j[i]){if(a!==1||i!==1)do if(a--,i--,0>i||v[a]!==j[i]){var O=`
`+v[a].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=a&&0<=i);break}}}finally{co=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?ga(n):""}function Ep(t){switch(t.tag){case 26:case 27:case 5:return ga(t.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 15:return so(t.type,!1);case 11:return so(t.type.render,!1);case 1:return so(t.type,!0);case 31:return ga("Activity");default:return""}}function cu(t){try{var e="";do e+=Ep(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ae(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function su(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jp(t){var e=su(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(u){a=""+u,r.call(this,u)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wl(t){t._valueTracker||(t._valueTracker=jp(t))}function uu(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=su(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function Sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Rp=/[\n"\\]/g;function Ee(t){return t.replace(Rp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function uo(t,e,n,a,i,r,u,m){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ae(e)):t.value!==""+Ae(e)&&(t.value=""+Ae(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?fo(t,u,Ae(e)):n!=null?fo(t,u,Ae(n)):a!=null&&t.removeAttribute("value"),i==null&&r!=null&&(t.defaultChecked=!!r),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.name=""+Ae(m):t.removeAttribute("name")}function fu(t,e,n,a,i,r,u,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null))return;n=n!=null?""+Ae(n):"",e=e!=null?""+Ae(e):n,m||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=m?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u)}function fo(t,e,n){e==="number"&&Sl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function xa(t,e,n,a){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&a&&(t[n].defaultSelected=!0)}else{for(n=""+Ae(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function du(t,e,n){if(e!=null&&(e=""+Ae(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Ae(n):""}function hu(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(c(92));if(Gt(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=Ae(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a)}function va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Np=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mu(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||Np.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function pu(t,e,n){if(e!=null&&typeof e!="object")throw Error(c(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&n[i]!==a&&mu(t,i,a)}else for(var r in e)e.hasOwnProperty(r)&&mu(t,r,e[r])}function ho(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zl(t){return Dp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var mo=null;function po(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ba=null,ya=null;function gu(t){var e=ha(t);if(e&&(t=e.stateNode)){var n=t[le]||null;t:switch(t=e.stateNode,e.type){case"input":if(uo(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ee(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var i=a[le]||null;if(!i)throw Error(c(90));uo(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&uu(a)}break t;case"textarea":du(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&xa(t,!!n.multiple,e,!1)}}}var go=!1;function xu(t,e,n){if(go)return t(e,n);go=!0;try{var a=t(e);return a}finally{if(go=!1,(ba!==null||ya!==null)&&(cr(),ba&&(e=ba,t=ya,ya=ba=null,gu(e),t)))for(e=0;e<t.length;e++)gu(t[e])}}function fi(t,e){var n=t.stateNode;if(n===null)return null;var a=n[le]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(c(231,e,typeof n));return n}var Pe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xo=!1;if(Pe)try{var di={};Object.defineProperty(di,"passive",{get:function(){xo=!0}}),window.addEventListener("test",di,di),window.removeEventListener("test",di,di)}catch{xo=!1}var yn=null,vo=null,Al=null;function vu(){if(Al)return Al;var t,e=vo,n=e.length,a,i="value"in yn?yn.value:yn.textContent,r=i.length;for(t=0;t<n&&e[t]===i[t];t++);var u=n-t;for(a=1;a<=u&&e[n-a]===i[r-a];a++);return Al=i.slice(t,1<a?1-a:void 0)}function El(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function jl(){return!0}function bu(){return!1}function re(t){function e(n,a,i,r,u){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=u,this.currentTarget=null;for(var m in t)t.hasOwnProperty(m)&&(n=t[m],this[m]=n?n(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?jl:bu,this.isPropagationStopped=bu,this}return b(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),e}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=re(Zn),hi=b({},Zn,{view:0,detail:0}),Op=re(hi),bo,yo,mi,Nl=b({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mi&&(mi&&t.type==="mousemove"?(bo=t.screenX-mi.screenX,yo=t.screenY-mi.screenY):yo=bo=0,mi=t),bo)},movementY:function(t){return"movementY"in t?t.movementY:yo}}),yu=re(Nl),Cp=b({},Nl,{dataTransfer:0}),Mp=re(Cp),_p=b({},hi,{relatedTarget:0}),wo=re(_p),Bp=b({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Up=re(Bp),kp=b({},Zn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hp=re(kp),qp=b({},Zn,{data:0}),wu=re(qp),Yp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qp(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Gp[t])?!!e[t]:!1}function So(){return Qp}var Xp=b({},hi,{key:function(t){if(t.key){var e=Yp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=El(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(t){return t.type==="keypress"?El(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?El(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vp=re(Xp),Zp=b({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Su=re(Zp),Kp=b({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),Jp=re(Kp),$p=b({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wp=re($p),Fp=b({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ip=re(Fp),Pp=b({},Zn,{newState:0,oldState:0}),t0=re(Pp),e0=[9,13,27,32],zo=Pe&&"CompositionEvent"in window,pi=null;Pe&&"documentMode"in document&&(pi=document.documentMode);var n0=Pe&&"TextEvent"in window&&!pi,zu=Pe&&(!zo||pi&&8<pi&&11>=pi),Au=" ",Eu=!1;function ju(t,e){switch(t){case"keyup":return e0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ru(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wa=!1;function a0(t,e){switch(t){case"compositionend":return Ru(e);case"keypress":return e.which!==32?null:(Eu=!0,Au);case"textInput":return t=e.data,t===Au&&Eu?null:t;default:return null}}function i0(t,e){if(wa)return t==="compositionend"||!zo&&ju(t,e)?(t=vu(),Al=vo=yn=null,wa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zu&&e.locale!=="ko"?null:e.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!l0[t.type]:e==="textarea"}function Tu(t,e,n,a){ba?ya?ya.push(a):ya=[a]:ba=a,e=mr(e,"onChange"),0<e.length&&(n=new Rl("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var gi=null,xi=null;function r0(t){uh(t,0)}function Tl(t){var e=ui(t);if(uu(e))return t}function Du(t,e){if(t==="change")return e}var Ou=!1;if(Pe){var Ao;if(Pe){var Eo="oninput"in document;if(!Eo){var Cu=document.createElement("div");Cu.setAttribute("oninput","return;"),Eo=typeof Cu.oninput=="function"}Ao=Eo}else Ao=!1;Ou=Ao&&(!document.documentMode||9<document.documentMode)}function Mu(){gi&&(gi.detachEvent("onpropertychange",_u),xi=gi=null)}function _u(t){if(t.propertyName==="value"&&Tl(xi)){var e=[];Tu(e,xi,t,po(t)),xu(r0,e)}}function o0(t,e,n){t==="focusin"?(Mu(),gi=e,xi=n,gi.attachEvent("onpropertychange",_u)):t==="focusout"&&Mu()}function c0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(xi)}function s0(t,e){if(t==="click")return Tl(e)}function u0(t,e){if(t==="input"||t==="change")return Tl(e)}function f0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var he=typeof Object.is=="function"?Object.is:f0;function vi(t,e){if(he(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!ze.call(e,i)||!he(t[i],e[i]))return!1}return!0}function Bu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uu(t,e){var n=Bu(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Bu(n)}}function ku(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ku(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hu(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Sl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sl(t.document)}return e}function jo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var d0=Pe&&"documentMode"in document&&11>=document.documentMode,Sa=null,Ro=null,bi=null,No=!1;function qu(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;No||Sa==null||Sa!==Sl(a)||(a=Sa,"selectionStart"in a&&jo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),bi&&vi(bi,a)||(bi=a,a=mr(Ro,"onSelect"),0<a.length&&(e=new Rl("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=Sa)))}function Kn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var za={animationend:Kn("Animation","AnimationEnd"),animationiteration:Kn("Animation","AnimationIteration"),animationstart:Kn("Animation","AnimationStart"),transitionrun:Kn("Transition","TransitionRun"),transitionstart:Kn("Transition","TransitionStart"),transitioncancel:Kn("Transition","TransitionCancel"),transitionend:Kn("Transition","TransitionEnd")},To={},Yu={};Pe&&(Yu=document.createElement("div").style,"AnimationEvent"in window||(delete za.animationend.animation,delete za.animationiteration.animation,delete za.animationstart.animation),"TransitionEvent"in window||delete za.transitionend.transition);function Jn(t){if(To[t])return To[t];if(!za[t])return t;var e=za[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yu)return To[t]=e[n];return t}var Lu=Jn("animationend"),Gu=Jn("animationiteration"),Qu=Jn("animationstart"),h0=Jn("transitionrun"),m0=Jn("transitionstart"),p0=Jn("transitioncancel"),Xu=Jn("transitionend"),Vu=new Map,Do="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Do.push("scrollEnd");function Be(t,e){Vu.set(t,e),Vn(e,[t])}var Zu=new WeakMap;function je(t,e){if(typeof t=="object"&&t!==null){var n=Zu.get(t);return n!==void 0?n:(e={value:t,source:e,stack:cu(e)},Zu.set(t,e),e)}return{value:t,source:e,stack:cu(e)}}var Re=[],Aa=0,Oo=0;function Dl(){for(var t=Aa,e=Oo=Aa=0;e<t;){var n=Re[e];Re[e++]=null;var a=Re[e];Re[e++]=null;var i=Re[e];Re[e++]=null;var r=Re[e];if(Re[e++]=null,a!==null&&i!==null){var u=a.pending;u===null?i.next=i:(i.next=u.next,u.next=i),a.pending=i}r!==0&&Ku(n,i,r)}}function Ol(t,e,n,a){Re[Aa++]=t,Re[Aa++]=e,Re[Aa++]=n,Re[Aa++]=a,Oo|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Co(t,e,n,a){return Ol(t,e,n,a),Cl(t)}function Ea(t,e){return Ol(t,null,null,e),Cl(t)}function Ku(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var i=!1,r=t.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(i=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,i&&e!==null&&(i=31-de(n),t=r.hiddenUpdates,a=t[i],a===null?t[i]=[e]:a.push(e),e.lane=n|536870912),r):null}function Cl(t){if(50<Xi)throw Xi=0,Hc=null,Error(c(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ja={};function g0(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function me(t,e,n,a){return new g0(t,e,n,a)}function Mo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tn(t,e){var n=t.alternate;return n===null?(n=me(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Ju(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ml(t,e,n,a,i,r){var u=0;if(a=t,typeof t=="function")Mo(t)&&(u=1);else if(typeof t=="string")u=vg(t,n,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case vt:return t=me(31,n,e,i),t.elementType=vt,t.lanes=r,t;case H:return $n(n.children,i,r,e);case q:u=8,i|=24;break;case X:return t=me(12,n,e,i|2),t.elementType=X,t.lanes=r,t;case V:return t=me(13,n,e,i),t.elementType=V,t.lanes=r,t;case I:return t=me(19,n,e,i),t.elementType=I,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:case Y:u=10;break t;case Z:u=9;break t;case F:u=11;break t;case J:u=14;break t;case wt:u=16,a=null;break t}u=29,n=Error(c(130,t===null?"null":typeof t,"")),a=null}return e=me(u,n,e,i),e.elementType=t,e.type=a,e.lanes=r,e}function $n(t,e,n,a){return t=me(7,t,a,e),t.lanes=n,t}function _o(t,e,n){return t=me(6,t,null,e),t.lanes=n,t}function Bo(t,e,n){return e=me(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ra=[],Na=0,_l=null,Bl=0,Ne=[],Te=0,Wn=null,en=1,nn="";function Fn(t,e){Ra[Na++]=Bl,Ra[Na++]=_l,_l=t,Bl=e}function $u(t,e,n){Ne[Te++]=en,Ne[Te++]=nn,Ne[Te++]=Wn,Wn=t;var a=en;t=nn;var i=32-de(a)-1;a&=~(1<<i),n+=1;var r=32-de(e)+i;if(30<r){var u=i-i%5;r=(a&(1<<u)-1).toString(32),a>>=u,i-=u,en=1<<32-de(e)+i|n<<i|a,nn=r+t}else en=1<<r|n<<i|a,nn=t}function Uo(t){t.return!==null&&(Fn(t,1),$u(t,1,0))}function ko(t){for(;t===_l;)_l=Ra[--Na],Ra[Na]=null,Bl=Ra[--Na],Ra[Na]=null;for(;t===Wn;)Wn=Ne[--Te],Ne[Te]=null,nn=Ne[--Te],Ne[Te]=null,en=Ne[--Te],Ne[Te]=null}var ae=null,Ot=null,mt=!1,In=null,Ye=!1,Ho=Error(c(519));function Pn(t){var e=Error(c(418,""));throw Si(je(e,t)),Ho}function Wu(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[Pt]=t,e[le]=a,n){case"dialog":ft("cancel",e),ft("close",e);break;case"iframe":case"object":case"embed":ft("load",e);break;case"video":case"audio":for(n=0;n<Zi.length;n++)ft(Zi[n],e);break;case"source":ft("error",e);break;case"img":case"image":case"link":ft("error",e),ft("load",e);break;case"details":ft("toggle",e);break;case"input":ft("invalid",e),fu(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),wl(e);break;case"select":ft("invalid",e);break;case"textarea":ft("invalid",e),hu(e,a.value,a.defaultValue,a.children),wl(e)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||mh(e.textContent,n)?(a.popover!=null&&(ft("beforetoggle",e),ft("toggle",e)),a.onScroll!=null&&ft("scroll",e),a.onScrollEnd!=null&&ft("scrollend",e),a.onClick!=null&&(e.onclick=pr),e=!0):e=!1,e||Pn(t)}function Fu(t){for(ae=t.return;ae;)switch(ae.tag){case 5:case 13:Ye=!1;return;case 27:case 3:Ye=!0;return;default:ae=ae.return}}function yi(t){if(t!==ae)return!1;if(!mt)return Fu(t),mt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||ts(t.type,t.memoizedProps)),n=!n),n&&Ot&&Pn(t),Fu(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Ot=ke(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Ot=null}}else e===27?(e=Ot,Un(t.type)?(t=is,is=null,Ot=t):Ot=e):Ot=ae?ke(t.stateNode.nextSibling):null;return!0}function wi(){Ot=ae=null,mt=!1}function Iu(){var t=In;return t!==null&&(se===null?se=t:se.push.apply(se,t),In=null),t}function Si(t){In===null?In=[t]:In.push(t)}var qo=B(null),ta=null,an=null;function wn(t,e,n){Q(qo,e._currentValue),e._currentValue=n}function ln(t){t._currentValue=qo.current,L(qo)}function Yo(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function Lo(t,e,n,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var r=i.dependencies;if(r!==null){var u=i.child;r=r.firstContext;t:for(;r!==null;){var m=r;r=i;for(var v=0;v<e.length;v++)if(m.context===e[v]){r.lanes|=n,m=r.alternate,m!==null&&(m.lanes|=n),Yo(r.return,n,t),a||(u=null);break t}r=m.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(c(341));u.lanes|=n,r=u.alternate,r!==null&&(r.lanes|=n),Yo(u,n,t),u=null}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===t){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function zi(t,e,n,a){t=null;for(var i=e,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var m=i.type;he(i.pendingProps.value,u.value)||(t!==null?t.push(m):t=[m])}}else if(i===Qt.current){if(u=i.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ii):t=[Ii])}i=i.return}t!==null&&Lo(e,t,n,a),e.flags|=262144}function Ul(t){for(t=t.firstContext;t!==null;){if(!he(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ea(t){ta=t,an=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function te(t){return Pu(ta,t)}function kl(t,e){return ta===null&&ea(t),Pu(t,e)}function Pu(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},an===null){if(t===null)throw Error(c(308));an=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else an=an.next=e;return n}var x0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},v0=l.unstable_scheduleCallback,b0=l.unstable_NormalPriority,qt={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Go(){return{controller:new x0,data:new Map,refCount:0}}function Ai(t){t.refCount--,t.refCount===0&&v0(b0,function(){t.controller.abort()})}var Ei=null,Qo=0,Ta=0,Da=null;function y0(t,e){if(Ei===null){var n=Ei=[];Qo=0,Ta=Vc(),Da={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Qo++,e.then(tf,tf),e}function tf(){if(--Qo===0&&Ei!==null){Da!==null&&(Da.status="fulfilled");var t=Ei;Ei=null,Ta=0,Da=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function w0(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<n.length;i++)(0,n[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var ef=D.S;D.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&y0(t,e),ef!==null&&ef(t,e)};var na=B(null);function Xo(){var t=na.current;return t!==null?t:jt.pooledCache}function Hl(t,e){e===null?Q(na,na.current):Q(na,e.pool)}function nf(){var t=Xo();return t===null?null:{parent:qt._currentValue,pool:t}}var ji=Error(c(460)),af=Error(c(474)),ql=Error(c(542)),Vo={then:function(){}};function lf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Yl(){}function rf(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Yl,Yl),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,cf(t),t;default:if(typeof e.status=="string")e.then(Yl,Yl);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(c(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,cf(t),t}throw Ri=e,ji}}var Ri=null;function of(){if(Ri===null)throw Error(c(459));var t=Ri;return Ri=null,t}function cf(t){if(t===ji||t===ql)throw Error(c(483))}var Sn=!1;function Zo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ko(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function zn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function An(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(bt&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=Cl(t),Ku(t,null,n),e}return Ol(t,a,e,n),Cl(t)}function Ni(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,tu(t,n)}}function Jo(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?i=r=u:r=r.next=u,n=n.next}while(n!==null);r===null?i=r=e:r=r.next=e}else i=r=e;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var $o=!1;function Ti(){if($o){var t=Da;if(t!==null)throw t}}function Di(t,e,n,a){$o=!1;var i=t.updateQueue;Sn=!1;var r=i.firstBaseUpdate,u=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var v=m,j=v.next;v.next=null,u===null?r=j:u.next=j,u=v;var O=t.alternate;O!==null&&(O=O.updateQueue,m=O.lastBaseUpdate,m!==u&&(m===null?O.firstBaseUpdate=j:m.next=j,O.lastBaseUpdate=v))}if(r!==null){var _=i.baseState;u=0,O=j=v=null,m=r;do{var R=m.lane&-536870913,N=R!==m.lane;if(N?(dt&R)===R:(a&R)===R){R!==0&&R===Ta&&($o=!0),O!==null&&(O=O.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});t:{var at=t,tt=m;R=e;var At=n;switch(tt.tag){case 1:if(at=tt.payload,typeof at=="function"){_=at.call(At,_,R);break t}_=at;break t;case 3:at.flags=at.flags&-65537|128;case 0:if(at=tt.payload,R=typeof at=="function"?at.call(At,_,R):at,R==null)break t;_=b({},_,R);break t;case 2:Sn=!0}}R=m.callback,R!==null&&(t.flags|=64,N&&(t.flags|=8192),N=i.callbacks,N===null?i.callbacks=[R]:N.push(R))}else N={lane:R,tag:m.tag,payload:m.payload,callback:m.callback,next:null},O===null?(j=O=N,v=_):O=O.next=N,u|=R;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;N=m,m=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);O===null&&(v=_),i.baseState=v,i.firstBaseUpdate=j,i.lastBaseUpdate=O,r===null&&(i.shared.lanes=0),Cn|=u,t.lanes=u,t.memoizedState=_}}function sf(t,e){if(typeof t!="function")throw Error(c(191,t));t.call(e)}function uf(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)sf(n[t],e)}var Oa=B(null),Ll=B(0);function ff(t,e){t=dn,Q(Ll,t),Q(Oa,e),dn=t|e.baseLanes}function Wo(){Q(Ll,dn),Q(Oa,Oa.current)}function Fo(){dn=Ll.current,L(Oa),L(Ll)}var En=0,rt=null,St=null,Bt=null,Gl=!1,Ca=!1,aa=!1,Ql=0,Oi=0,Ma=null,S0=0;function Mt(){throw Error(c(321))}function Io(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!he(t[n],e[n]))return!1;return!0}function Po(t,e,n,a,i,r){return En=r,rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=t===null||t.memoizedState===null?Jf:$f,aa=!1,r=n(a,i),aa=!1,Ca&&(r=hf(e,n,a,i)),df(t),r}function df(t){D.H=$l;var e=St!==null&&St.next!==null;if(En=0,Bt=St=rt=null,Gl=!1,Oi=0,Ma=null,e)throw Error(c(300));t===null||Vt||(t=t.dependencies,t!==null&&Ul(t)&&(Vt=!0))}function hf(t,e,n,a){rt=t;var i=0;do{if(Ca&&(Ma=null),Oi=0,Ca=!1,25<=i)throw Error(c(301));if(i+=1,Bt=St=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}D.H=T0,r=e(n,a)}while(Ca);return r}function z0(){var t=D.H,e=t.useState()[0];return e=typeof e.then=="function"?Ci(e):e,t=t.useState()[0],(St!==null?St.memoizedState:null)!==t&&(rt.flags|=1024),e}function tc(){var t=Ql!==0;return Ql=0,t}function ec(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function nc(t){if(Gl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Gl=!1}En=0,Bt=St=rt=null,Ca=!1,Oi=Ql=0,Ma=null}function oe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?rt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Ut(){if(St===null){var t=rt.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Bt===null?rt.memoizedState:Bt.next;if(e!==null)Bt=e,St=t;else{if(t===null)throw rt.alternate===null?Error(c(467)):Error(c(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Bt===null?rt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ci(t){var e=Oi;return Oi+=1,Ma===null&&(Ma=[]),t=rf(Ma,t,e),e=rt,(Bt===null?e.memoizedState:Bt.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?Jf:$f),t}function Xl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ci(t);if(t.$$typeof===Y)return te(t)}throw Error(c(438,String(t)))}function ic(t){var e=null,n=rt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=rt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=ac(),rt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=ne;return e.index++,n}function rn(t,e){return typeof e=="function"?e(t):e}function Vl(t){var e=Ut();return lc(e,St,t)}function lc(t,e,n){var a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var i=t.baseQueue,r=a.pending;if(r!==null){if(i!==null){var u=i.next;i.next=r.next,r.next=u}e.baseQueue=i=r,a.pending=null}if(r=t.baseState,i===null)t.memoizedState=r;else{e=i.next;var m=u=null,v=null,j=e,O=!1;do{var _=j.lane&-536870913;if(_!==j.lane?(dt&_)===_:(En&_)===_){var R=j.revertLane;if(R===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),_===Ta&&(O=!0);else if((En&R)===R){j=j.next,R===Ta&&(O=!0);continue}else _={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},v===null?(m=v=_,u=r):v=v.next=_,rt.lanes|=R,Cn|=R;_=j.action,aa&&n(r,_),r=j.hasEagerState?j.eagerState:n(r,_)}else R={lane:_,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},v===null?(m=v=R,u=r):v=v.next=R,rt.lanes|=_,Cn|=_;j=j.next}while(j!==null&&j!==e);if(v===null?u=r:v.next=m,!he(r,t.memoizedState)&&(Vt=!0,O&&(n=Da,n!==null)))throw n;t.memoizedState=r,t.baseState=u,t.baseQueue=v,a.lastRenderedState=r}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function rc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=t;var a=n.dispatch,i=n.pending,r=e.memoizedState;if(i!==null){n.pending=null;var u=i=i.next;do r=t(r,u.action),u=u.next;while(u!==i);he(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,a]}function mf(t,e,n){var a=rt,i=Ut(),r=mt;if(r){if(n===void 0)throw Error(c(407));n=n()}else n=e();var u=!he((St||i).memoizedState,n);u&&(i.memoizedState=n,Vt=!0),i=i.queue;var m=xf.bind(null,a,i,t);if(Mi(2048,8,m,[t]),i.getSnapshot!==e||u||Bt!==null&&Bt.memoizedState.tag&1){if(a.flags|=2048,_a(9,Zl(),gf.bind(null,a,i,n,e),null),jt===null)throw Error(c(349));r||(En&124)!==0||pf(a,e,n)}return n}function pf(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=rt.updateQueue,e===null?(e=ac(),rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gf(t,e,n,a){e.value=n,e.getSnapshot=a,vf(e)&&bf(t)}function xf(t,e,n){return n(function(){vf(e)&&bf(t)})}function vf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!he(t,n)}catch{return!0}}function bf(t){var e=Ea(t,2);e!==null&&be(e,t,2)}function oc(t){var e=oe();if(typeof t=="function"){var n=t;if(t=n(),aa){vn(!0);try{n()}finally{vn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rn,lastRenderedState:t},e}function yf(t,e,n,a){return t.baseState=n,lc(t,St,typeof a=="function"?a:rn)}function A0(t,e,n,a,i){if(Jl(t))throw Error(c(485));if(t=e.action,t!==null){var r={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){r.listeners.push(u)}};D.T!==null?n(!0):r.isTransition=!1,a(r),n=e.pending,n===null?(r.next=e.pending=r,wf(e,r)):(r.next=n.next,e.pending=n.next=r)}}function wf(t,e){var n=e.action,a=e.payload,i=t.state;if(e.isTransition){var r=D.T,u={};D.T=u;try{var m=n(i,a),v=D.S;v!==null&&v(u,m),Sf(t,e,m)}catch(j){cc(t,e,j)}finally{D.T=r}}else try{r=n(i,a),Sf(t,e,r)}catch(j){cc(t,e,j)}}function Sf(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){zf(t,e,a)},function(a){return cc(t,e,a)}):zf(t,e,n)}function zf(t,e,n){e.status="fulfilled",e.value=n,Af(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,wf(t,n)))}function cc(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,Af(e),e=e.next;while(e!==a)}t.action=null}function Af(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ef(t,e){return e}function jf(t,e){if(mt){var n=jt.formState;if(n!==null){t:{var a=rt;if(mt){if(Ot){e:{for(var i=Ot,r=Ye;i.nodeType!==8;){if(!r){i=null;break e}if(i=ke(i.nextSibling),i===null){i=null;break e}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Ot=ke(i.nextSibling),a=i.data==="F!";break t}}Pn(a)}a=!1}a&&(e=n[0])}}return n=oe(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ef,lastRenderedState:e},n.queue=a,n=Vf.bind(null,rt,a),a.dispatch=n,a=oc(!1),r=hc.bind(null,rt,!1,a.queue),a=oe(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,n=A0.bind(null,rt,i,r,n),i.dispatch=n,a.memoizedState=t,[e,n,!1]}function Rf(t){var e=Ut();return Nf(e,St,t)}function Nf(t,e,n){if(e=lc(t,e,Ef)[0],t=Vl(rn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Ci(e)}catch(u){throw u===ji?ql:u}else a=e;e=Ut();var i=e.queue,r=i.dispatch;return n!==e.memoizedState&&(rt.flags|=2048,_a(9,Zl(),E0.bind(null,i,n),null)),[a,r,t]}function E0(t,e){t.action=e}function Tf(t){var e=Ut(),n=St;if(n!==null)return Nf(e,n,t);Ut(),e=e.memoizedState,n=Ut();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function _a(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=rt.updateQueue,e===null&&(e=ac(),rt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function Zl(){return{destroy:void 0,resource:void 0}}function Df(){return Ut().memoizedState}function Kl(t,e,n,a){var i=oe();a=a===void 0?null:a,rt.flags|=t,i.memoizedState=_a(1|e,Zl(),n,a)}function Mi(t,e,n,a){var i=Ut();a=a===void 0?null:a;var r=i.memoizedState.inst;St!==null&&a!==null&&Io(a,St.memoizedState.deps)?i.memoizedState=_a(e,r,n,a):(rt.flags|=t,i.memoizedState=_a(1|e,r,n,a))}function Of(t,e){Kl(8390656,8,t,e)}function Cf(t,e){Mi(2048,8,t,e)}function Mf(t,e){return Mi(4,2,t,e)}function _f(t,e){return Mi(4,4,t,e)}function Bf(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Uf(t,e,n){n=n!=null?n.concat([t]):null,Mi(4,4,Bf.bind(null,e,t),n)}function sc(){}function kf(t,e){var n=Ut();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&Io(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function Hf(t,e){var n=Ut();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&Io(e,a[1]))return a[0];if(a=t(),aa){vn(!0);try{t()}finally{vn(!1)}}return n.memoizedState=[a,e],a}function uc(t,e,n){return n===void 0||(En&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=Ld(),rt.lanes|=t,Cn|=t,n)}function qf(t,e,n,a){return he(n,e)?n:Oa.current!==null?(t=uc(t,n,a),he(t,e)||(Vt=!0),t):(En&42)===0?(Vt=!0,t.memoizedState=n):(t=Ld(),rt.lanes|=t,Cn|=t,e)}function Yf(t,e,n,a,i){var r=G.p;G.p=r!==0&&8>r?r:8;var u=D.T,m={};D.T=m,hc(t,!1,e,n);try{var v=i(),j=D.S;if(j!==null&&j(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var O=w0(v,a);_i(t,e,O,ve(t))}else _i(t,e,a,ve(t))}catch(_){_i(t,e,{then:function(){},status:"rejected",reason:_},ve())}finally{G.p=r,D.T=u}}function j0(){}function fc(t,e,n,a){if(t.tag!==5)throw Error(c(476));var i=Lf(t).queue;Yf(t,i,e,P,n===null?j0:function(){return Gf(t),n(a)})}function Lf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rn,lastRenderedState:P},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Gf(t){var e=Lf(t).next.queue;_i(t,e,{},ve())}function dc(){return te(Ii)}function Qf(){return Ut().memoizedState}function Xf(){return Ut().memoizedState}function R0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ve();t=zn(n);var a=An(e,t,n);a!==null&&(be(a,e,n),Ni(a,e,n)),e={cache:Go()},t.payload=e;return}e=e.return}}function N0(t,e,n){var a=ve();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Jl(t)?Zf(e,n):(n=Co(t,e,n,a),n!==null&&(be(n,t,a),Kf(n,e,a)))}function Vf(t,e,n){var a=ve();_i(t,e,n,a)}function _i(t,e,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jl(t))Zf(e,i);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var u=e.lastRenderedState,m=r(u,n);if(i.hasEagerState=!0,i.eagerState=m,he(m,u))return Ol(t,e,i,0),jt===null&&Dl(),!1}catch{}finally{}if(n=Co(t,e,i,a),n!==null)return be(n,t,a),Kf(n,e,a),!0}return!1}function hc(t,e,n,a){if(a={lane:2,revertLane:Vc(),action:a,hasEagerState:!1,eagerState:null,next:null},Jl(t)){if(e)throw Error(c(479))}else e=Co(t,n,a,2),e!==null&&be(e,t,2)}function Jl(t){var e=t.alternate;return t===rt||e!==null&&e===rt}function Zf(t,e){Ca=Gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kf(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,tu(t,n)}}var $l={readContext:te,use:Xl,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt,useHostTransitionStatus:Mt,useFormState:Mt,useActionState:Mt,useOptimistic:Mt,useMemoCache:Mt,useCacheRefresh:Mt},Jf={readContext:te,use:Xl,useCallback:function(t,e){return oe().memoizedState=[t,e===void 0?null:e],t},useContext:te,useEffect:Of,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Kl(4194308,4,Bf.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Kl(4194308,4,t,e)},useInsertionEffect:function(t,e){Kl(4,2,t,e)},useMemo:function(t,e){var n=oe();e=e===void 0?null:e;var a=t();if(aa){vn(!0);try{t()}finally{vn(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=oe();if(n!==void 0){var i=n(e);if(aa){vn(!0);try{n(e)}finally{vn(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=N0.bind(null,rt,t),[a.memoizedState,t]},useRef:function(t){var e=oe();return t={current:t},e.memoizedState=t},useState:function(t){t=oc(t);var e=t.queue,n=Vf.bind(null,rt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:sc,useDeferredValue:function(t,e){var n=oe();return uc(n,t,e)},useTransition:function(){var t=oc(!1);return t=Yf.bind(null,rt,t.queue,!0,!1),oe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=rt,i=oe();if(mt){if(n===void 0)throw Error(c(407));n=n()}else{if(n=e(),jt===null)throw Error(c(349));(dt&124)!==0||pf(a,e,n)}i.memoizedState=n;var r={value:n,getSnapshot:e};return i.queue=r,Of(xf.bind(null,a,r,t),[t]),a.flags|=2048,_a(9,Zl(),gf.bind(null,a,r,n,e),null),n},useId:function(){var t=oe(),e=jt.identifierPrefix;if(mt){var n=nn,a=en;n=(a&~(1<<32-de(a)-1)).toString(32)+n,e="«"+e+"R"+n,n=Ql++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=S0++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:dc,useFormState:jf,useActionState:jf,useOptimistic:function(t){var e=oe();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=hc.bind(null,rt,!0,n),n.dispatch=e,[t,e]},useMemoCache:ic,useCacheRefresh:function(){return oe().memoizedState=R0.bind(null,rt)}},$f={readContext:te,use:Xl,useCallback:kf,useContext:te,useEffect:Cf,useImperativeHandle:Uf,useInsertionEffect:Mf,useLayoutEffect:_f,useMemo:Hf,useReducer:Vl,useRef:Df,useState:function(){return Vl(rn)},useDebugValue:sc,useDeferredValue:function(t,e){var n=Ut();return qf(n,St.memoizedState,t,e)},useTransition:function(){var t=Vl(rn)[0],e=Ut().memoizedState;return[typeof t=="boolean"?t:Ci(t),e]},useSyncExternalStore:mf,useId:Qf,useHostTransitionStatus:dc,useFormState:Rf,useActionState:Rf,useOptimistic:function(t,e){var n=Ut();return yf(n,St,t,e)},useMemoCache:ic,useCacheRefresh:Xf},T0={readContext:te,use:Xl,useCallback:kf,useContext:te,useEffect:Cf,useImperativeHandle:Uf,useInsertionEffect:Mf,useLayoutEffect:_f,useMemo:Hf,useReducer:rc,useRef:Df,useState:function(){return rc(rn)},useDebugValue:sc,useDeferredValue:function(t,e){var n=Ut();return St===null?uc(n,t,e):qf(n,St.memoizedState,t,e)},useTransition:function(){var t=rc(rn)[0],e=Ut().memoizedState;return[typeof t=="boolean"?t:Ci(t),e]},useSyncExternalStore:mf,useId:Qf,useHostTransitionStatus:dc,useFormState:Tf,useActionState:Tf,useOptimistic:function(t,e){var n=Ut();return St!==null?yf(n,St,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:ic,useCacheRefresh:Xf},Ba=null,Bi=0;function Wl(t){var e=Bi;return Bi+=1,Ba===null&&(Ba=[]),rf(Ba,t,e)}function Ui(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Fl(t,e){throw e.$$typeof===T?Error(c(525)):(t=Object.prototype.toString.call(e),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Wf(t){var e=t._init;return e(t._payload)}function Ff(t){function e(z,w){if(t){var E=z.deletions;E===null?(z.deletions=[w],z.flags|=16):E.push(w)}}function n(z,w){if(!t)return null;for(;w!==null;)e(z,w),w=w.sibling;return null}function a(z){for(var w=new Map;z!==null;)z.key!==null?w.set(z.key,z):w.set(z.index,z),z=z.sibling;return w}function i(z,w){return z=tn(z,w),z.index=0,z.sibling=null,z}function r(z,w,E){return z.index=E,t?(E=z.alternate,E!==null?(E=E.index,E<w?(z.flags|=67108866,w):E):(z.flags|=67108866,w)):(z.flags|=1048576,w)}function u(z){return t&&z.alternate===null&&(z.flags|=67108866),z}function m(z,w,E,C){return w===null||w.tag!==6?(w=_o(E,z.mode,C),w.return=z,w):(w=i(w,E),w.return=z,w)}function v(z,w,E,C){var K=E.type;return K===H?O(z,w,E.props.children,C,E.key):w!==null&&(w.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===wt&&Wf(K)===w.type)?(w=i(w,E.props),Ui(w,E),w.return=z,w):(w=Ml(E.type,E.key,E.props,null,z.mode,C),Ui(w,E),w.return=z,w)}function j(z,w,E,C){return w===null||w.tag!==4||w.stateNode.containerInfo!==E.containerInfo||w.stateNode.implementation!==E.implementation?(w=Bo(E,z.mode,C),w.return=z,w):(w=i(w,E.children||[]),w.return=z,w)}function O(z,w,E,C,K){return w===null||w.tag!==7?(w=$n(E,z.mode,C,K),w.return=z,w):(w=i(w,E),w.return=z,w)}function _(z,w,E){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=_o(""+w,z.mode,E),w.return=z,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case M:return E=Ml(w.type,w.key,w.props,null,z.mode,E),Ui(E,w),E.return=z,E;case k:return w=Bo(w,z.mode,E),w.return=z,w;case wt:var C=w._init;return w=C(w._payload),_(z,w,E)}if(Gt(w)||Lt(w))return w=$n(w,z.mode,E,null),w.return=z,w;if(typeof w.then=="function")return _(z,Wl(w),E);if(w.$$typeof===Y)return _(z,kl(z,w),E);Fl(z,w)}return null}function R(z,w,E,C){var K=w!==null?w.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return K!==null?null:m(z,w,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case M:return E.key===K?v(z,w,E,C):null;case k:return E.key===K?j(z,w,E,C):null;case wt:return K=E._init,E=K(E._payload),R(z,w,E,C)}if(Gt(E)||Lt(E))return K!==null?null:O(z,w,E,C,null);if(typeof E.then=="function")return R(z,w,Wl(E),C);if(E.$$typeof===Y)return R(z,w,kl(z,E),C);Fl(z,E)}return null}function N(z,w,E,C,K){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return z=z.get(E)||null,m(w,z,""+C,K);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case M:return z=z.get(C.key===null?E:C.key)||null,v(w,z,C,K);case k:return z=z.get(C.key===null?E:C.key)||null,j(w,z,C,K);case wt:var ot=C._init;return C=ot(C._payload),N(z,w,E,C,K)}if(Gt(C)||Lt(C))return z=z.get(E)||null,O(w,z,C,K,null);if(typeof C.then=="function")return N(z,w,E,Wl(C),K);if(C.$$typeof===Y)return N(z,w,E,kl(w,C),K);Fl(w,C)}return null}function at(z,w,E,C){for(var K=null,ot=null,$=w,nt=w=0,Kt=null;$!==null&&nt<E.length;nt++){$.index>nt?(Kt=$,$=null):Kt=$.sibling;var ht=R(z,$,E[nt],C);if(ht===null){$===null&&($=Kt);break}t&&$&&ht.alternate===null&&e(z,$),w=r(ht,w,nt),ot===null?K=ht:ot.sibling=ht,ot=ht,$=Kt}if(nt===E.length)return n(z,$),mt&&Fn(z,nt),K;if($===null){for(;nt<E.length;nt++)$=_(z,E[nt],C),$!==null&&(w=r($,w,nt),ot===null?K=$:ot.sibling=$,ot=$);return mt&&Fn(z,nt),K}for($=a($);nt<E.length;nt++)Kt=N($,z,nt,E[nt],C),Kt!==null&&(t&&Kt.alternate!==null&&$.delete(Kt.key===null?nt:Kt.key),w=r(Kt,w,nt),ot===null?K=Kt:ot.sibling=Kt,ot=Kt);return t&&$.forEach(function(Ln){return e(z,Ln)}),mt&&Fn(z,nt),K}function tt(z,w,E,C){if(E==null)throw Error(c(151));for(var K=null,ot=null,$=w,nt=w=0,Kt=null,ht=E.next();$!==null&&!ht.done;nt++,ht=E.next()){$.index>nt?(Kt=$,$=null):Kt=$.sibling;var Ln=R(z,$,ht.value,C);if(Ln===null){$===null&&($=Kt);break}t&&$&&Ln.alternate===null&&e(z,$),w=r(Ln,w,nt),ot===null?K=Ln:ot.sibling=Ln,ot=Ln,$=Kt}if(ht.done)return n(z,$),mt&&Fn(z,nt),K;if($===null){for(;!ht.done;nt++,ht=E.next())ht=_(z,ht.value,C),ht!==null&&(w=r(ht,w,nt),ot===null?K=ht:ot.sibling=ht,ot=ht);return mt&&Fn(z,nt),K}for($=a($);!ht.done;nt++,ht=E.next())ht=N($,z,nt,ht.value,C),ht!==null&&(t&&ht.alternate!==null&&$.delete(ht.key===null?nt:ht.key),w=r(ht,w,nt),ot===null?K=ht:ot.sibling=ht,ot=ht);return t&&$.forEach(function(Dg){return e(z,Dg)}),mt&&Fn(z,nt),K}function At(z,w,E,C){if(typeof E=="object"&&E!==null&&E.type===H&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case M:t:{for(var K=E.key;w!==null;){if(w.key===K){if(K=E.type,K===H){if(w.tag===7){n(z,w.sibling),C=i(w,E.props.children),C.return=z,z=C;break t}}else if(w.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===wt&&Wf(K)===w.type){n(z,w.sibling),C=i(w,E.props),Ui(C,E),C.return=z,z=C;break t}n(z,w);break}else e(z,w);w=w.sibling}E.type===H?(C=$n(E.props.children,z.mode,C,E.key),C.return=z,z=C):(C=Ml(E.type,E.key,E.props,null,z.mode,C),Ui(C,E),C.return=z,z=C)}return u(z);case k:t:{for(K=E.key;w!==null;){if(w.key===K)if(w.tag===4&&w.stateNode.containerInfo===E.containerInfo&&w.stateNode.implementation===E.implementation){n(z,w.sibling),C=i(w,E.children||[]),C.return=z,z=C;break t}else{n(z,w);break}else e(z,w);w=w.sibling}C=Bo(E,z.mode,C),C.return=z,z=C}return u(z);case wt:return K=E._init,E=K(E._payload),At(z,w,E,C)}if(Gt(E))return at(z,w,E,C);if(Lt(E)){if(K=Lt(E),typeof K!="function")throw Error(c(150));return E=K.call(E),tt(z,w,E,C)}if(typeof E.then=="function")return At(z,w,Wl(E),C);if(E.$$typeof===Y)return At(z,w,kl(z,E),C);Fl(z,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,w!==null&&w.tag===6?(n(z,w.sibling),C=i(w,E),C.return=z,z=C):(n(z,w),C=_o(E,z.mode,C),C.return=z,z=C),u(z)):n(z,w)}return function(z,w,E,C){try{Bi=0;var K=At(z,w,E,C);return Ba=null,K}catch($){if($===ji||$===ql)throw $;var ot=me(29,$,null,z.mode);return ot.lanes=C,ot.return=z,ot}finally{}}}var Ua=Ff(!0),If=Ff(!1),De=B(null),Le=null;function jn(t){var e=t.alternate;Q(Yt,Yt.current&1),Q(De,t),Le===null&&(e===null||Oa.current!==null||e.memoizedState!==null)&&(Le=t)}function Pf(t){if(t.tag===22){if(Q(Yt,Yt.current),Q(De,t),Le===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Le=t)}}else Rn()}function Rn(){Q(Yt,Yt.current),Q(De,De.current)}function on(t){L(De),Le===t&&(Le=null),L(Yt)}var Yt=B(0);function Il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||as(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function mc(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:b({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pc={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=ve(),i=zn(a);i.payload=e,n!=null&&(i.callback=n),e=An(t,i,a),e!==null&&(be(e,t,a),Ni(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=ve(),i=zn(a);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=An(t,i,a),e!==null&&(be(e,t,a),Ni(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ve(),a=zn(n);a.tag=2,e!=null&&(a.callback=e),e=An(t,a,n),e!==null&&(be(e,t,n),Ni(e,t,n))}};function td(t,e,n,a,i,r,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,r,u):e.prototype&&e.prototype.isPureReactComponent?!vi(n,a)||!vi(i,r):!0}function ed(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&pc.enqueueReplaceState(e,e.state,null)}function ia(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=b({},n));for(var i in t)n[i]===void 0&&(n[i]=t[i])}return n}var Pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function nd(t){Pl(t)}function ad(t){console.error(t)}function id(t){Pl(t)}function tr(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function ld(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function gc(t,e,n){return n=zn(n),n.tag=3,n.payload={element:null},n.callback=function(){tr(t,e)},n}function rd(t){return t=zn(t),t.tag=3,t}function od(t,e,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=a.value;t.payload=function(){return i(r)},t.callback=function(){ld(e,n,a)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){ld(e,n,a),typeof i!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function D0(t,e,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&zi(e,n,i,!0),n=De.current,n!==null){switch(n.tag){case 13:return Le===null?Yc():n.alternate===null&&Ct===0&&(Ct=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Vo?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),Gc(t,a,i)),!1;case 22:return n.flags|=65536,a===Vo?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),Gc(t,a,i)),!1}throw Error(c(435,n.tag))}return Gc(t,a,i),Yc(),!1}if(mt)return e=De.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==Ho&&(t=Error(c(422),{cause:a}),Si(je(t,n)))):(a!==Ho&&(e=Error(c(423),{cause:a}),Si(je(e,n))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=je(a,n),i=gc(t.stateNode,a,i),Jo(t,i),Ct!==4&&(Ct=2)),!1;var r=Error(c(520),{cause:a});if(r=je(r,n),Qi===null?Qi=[r]:Qi.push(r),Ct!==4&&(Ct=2),e===null)return!0;a=je(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=i&-i,n.lanes|=t,t=gc(n.stateNode,a,t),Jo(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))))return n.flags|=65536,i&=-i,n.lanes|=i,i=rd(i),od(i,t,n,a),Jo(n,i),!1}n=n.return}while(n!==null);return!1}var cd=Error(c(461)),Vt=!1;function $t(t,e,n,a){e.child=t===null?If(e,null,n,a):Ua(e,t.child,n,a)}function sd(t,e,n,a,i){n=n.render;var r=e.ref;if("ref"in a){var u={};for(var m in a)m!=="ref"&&(u[m]=a[m])}else u=a;return ea(e),a=Po(t,e,n,u,r,i),m=tc(),t!==null&&!Vt?(ec(t,e,i),cn(t,e,i)):(mt&&m&&Uo(e),e.flags|=1,$t(t,e,a,i),e.child)}function ud(t,e,n,a,i){if(t===null){var r=n.type;return typeof r=="function"&&!Mo(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,fd(t,e,r,a,i)):(t=Ml(n.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!Ac(t,i)){var u=r.memoizedProps;if(n=n.compare,n=n!==null?n:vi,n(u,a)&&t.ref===e.ref)return cn(t,e,i)}return e.flags|=1,t=tn(r,a),t.ref=e.ref,t.return=e,e.child=t}function fd(t,e,n,a,i){if(t!==null){var r=t.memoizedProps;if(vi(r,a)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=a=r,Ac(t,i))(t.flags&131072)!==0&&(Vt=!0);else return e.lanes=t.lanes,cn(t,e,i)}return xc(t,e,n,a,i)}function dd(t,e,n){var a=e.pendingProps,i=a.children,r=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,t!==null){for(i=e.child=t.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;e.childLanes=r&~a}else e.childLanes=0,e.child=null;return hd(t,e,a,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Hl(e,r!==null?r.cachePool:null),r!==null?ff(e,r):Wo(),Pf(e);else return e.lanes=e.childLanes=536870912,hd(t,e,r!==null?r.baseLanes|n:n,n)}else r!==null?(Hl(e,r.cachePool),ff(e,r),Rn(),e.memoizedState=null):(t!==null&&Hl(e,null),Wo(),Rn());return $t(t,e,i,n),e.child}function hd(t,e,n,a){var i=Xo();return i=i===null?null:{parent:qt._currentValue,pool:i},e.memoizedState={baseLanes:n,cachePool:i},t!==null&&Hl(e,null),Wo(),Pf(e),t!==null&&zi(t,e,a,!0),null}function er(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function xc(t,e,n,a,i){return ea(e),n=Po(t,e,n,a,void 0,i),a=tc(),t!==null&&!Vt?(ec(t,e,i),cn(t,e,i)):(mt&&a&&Uo(e),e.flags|=1,$t(t,e,n,i),e.child)}function md(t,e,n,a,i,r){return ea(e),e.updateQueue=null,n=hf(e,a,n,i),df(t),a=tc(),t!==null&&!Vt?(ec(t,e,r),cn(t,e,r)):(mt&&a&&Uo(e),e.flags|=1,$t(t,e,n,r),e.child)}function pd(t,e,n,a,i){if(ea(e),e.stateNode===null){var r=ja,u=n.contextType;typeof u=="object"&&u!==null&&(r=te(u)),r=new n(a,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=pc,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=a,r.state=e.memoizedState,r.refs={},Zo(e),u=n.contextType,r.context=typeof u=="object"&&u!==null?te(u):ja,r.state=e.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(mc(e,n,u,a),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(u=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),u!==r.state&&pc.enqueueReplaceState(r,r.state,null),Di(e,a,r,i),Ti(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){r=e.stateNode;var m=e.memoizedProps,v=ia(n,m);r.props=v;var j=r.context,O=n.contextType;u=ja,typeof O=="object"&&O!==null&&(u=te(O));var _=n.getDerivedStateFromProps;O=typeof _=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=e.pendingProps!==m,O||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||j!==u)&&ed(e,r,a,u),Sn=!1;var R=e.memoizedState;r.state=R,Di(e,a,r,i),Ti(),j=e.memoizedState,m||R!==j||Sn?(typeof _=="function"&&(mc(e,n,_,a),j=e.memoizedState),(v=Sn||td(e,n,v,a,R,j,u))?(O||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=j),r.props=a,r.state=j,r.context=u,a=v):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{r=e.stateNode,Ko(t,e),u=e.memoizedProps,O=ia(n,u),r.props=O,_=e.pendingProps,R=r.context,j=n.contextType,v=ja,typeof j=="object"&&j!==null&&(v=te(j)),m=n.getDerivedStateFromProps,(j=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u!==_||R!==v)&&ed(e,r,a,v),Sn=!1,R=e.memoizedState,r.state=R,Di(e,a,r,i),Ti();var N=e.memoizedState;u!==_||R!==N||Sn||t!==null&&t.dependencies!==null&&Ul(t.dependencies)?(typeof m=="function"&&(mc(e,n,m,a),N=e.memoizedState),(O=Sn||td(e,n,O,a,R,N,v)||t!==null&&t.dependencies!==null&&Ul(t.dependencies))?(j||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,N,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,N,v)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||u===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=N),r.props=a,r.state=N,r.context=v,a=O):(typeof r.componentDidUpdate!="function"||u===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),a=!1)}return r=a,er(t,e),a=(e.flags&128)!==0,r||a?(r=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&a?(e.child=Ua(e,t.child,null,i),e.child=Ua(e,null,n,i)):$t(t,e,n,i),e.memoizedState=r.state,t=e.child):t=cn(t,e,i),t}function gd(t,e,n,a){return wi(),e.flags|=256,$t(t,e,n,a),e.child}var vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(t){return{baseLanes:t,cachePool:nf()}}function yc(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Oe),t}function xd(t,e,n){var a=e.pendingProps,i=!1,r=(e.flags&128)!==0,u;if((u=r)||(u=t!==null&&t.memoizedState===null?!1:(Yt.current&2)!==0),u&&(i=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(mt){if(i?jn(e):Rn(),mt){var m=Ot,v;if(v=m){t:{for(v=m,m=Ye;v.nodeType!==8;){if(!m){m=null;break t}if(v=ke(v.nextSibling),v===null){m=null;break t}}m=v}m!==null?(e.memoizedState={dehydrated:m,treeContext:Wn!==null?{id:en,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},v=me(18,null,null,0),v.stateNode=m,v.return=e,e.child=v,ae=e,Ot=null,v=!0):v=!1}v||Pn(e)}if(m=e.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return as(m)?e.lanes=32:e.lanes=536870912,null;on(e)}return m=a.children,a=a.fallback,i?(Rn(),i=e.mode,m=nr({mode:"hidden",children:m},i),a=$n(a,i,n,null),m.return=e,a.return=e,m.sibling=a,e.child=m,i=e.child,i.memoizedState=bc(n),i.childLanes=yc(t,u,n),e.memoizedState=vc,a):(jn(e),wc(e,m))}if(v=t.memoizedState,v!==null&&(m=v.dehydrated,m!==null)){if(r)e.flags&256?(jn(e),e.flags&=-257,e=Sc(t,e,n)):e.memoizedState!==null?(Rn(),e.child=t.child,e.flags|=128,e=null):(Rn(),i=a.fallback,m=e.mode,a=nr({mode:"visible",children:a.children},m),i=$n(i,m,n,null),i.flags|=2,a.return=e,i.return=e,a.sibling=i,e.child=a,Ua(e,t.child,null,n),a=e.child,a.memoizedState=bc(n),a.childLanes=yc(t,u,n),e.memoizedState=vc,e=i);else if(jn(e),as(m)){if(u=m.nextSibling&&m.nextSibling.dataset,u)var j=u.dgst;u=j,a=Error(c(419)),a.stack="",a.digest=u,Si({value:a,source:null,stack:null}),e=Sc(t,e,n)}else if(Vt||zi(t,e,n,!1),u=(n&t.childLanes)!==0,Vt||u){if(u=jt,u!==null&&(a=n&-n,a=(a&42)!==0?1:ao(a),a=(a&(u.suspendedLanes|n))!==0?0:a,a!==0&&a!==v.retryLane))throw v.retryLane=a,Ea(t,a),be(u,t,a),cd;m.data==="$?"||Yc(),e=Sc(t,e,n)}else m.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=v.treeContext,Ot=ke(m.nextSibling),ae=e,mt=!0,In=null,Ye=!1,t!==null&&(Ne[Te++]=en,Ne[Te++]=nn,Ne[Te++]=Wn,en=t.id,nn=t.overflow,Wn=e),e=wc(e,a.children),e.flags|=4096);return e}return i?(Rn(),i=a.fallback,m=e.mode,v=t.child,j=v.sibling,a=tn(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,j!==null?i=tn(j,i):(i=$n(i,m,n,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,a=i,i=e.child,m=t.child.memoizedState,m===null?m=bc(n):(v=m.cachePool,v!==null?(j=qt._currentValue,v=v.parent!==j?{parent:j,pool:j}:v):v=nf(),m={baseLanes:m.baseLanes|n,cachePool:v}),i.memoizedState=m,i.childLanes=yc(t,u,n),e.memoizedState=vc,a):(jn(e),n=t.child,t=n.sibling,n=tn(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=n,e.memoizedState=null,n)}function wc(t,e){return e=nr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function nr(t,e){return t=me(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Sc(t,e,n){return Ua(e,t.child,null,n),t=wc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vd(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Yo(t.return,e,n)}function zc(t,e,n,a,i){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=i)}function bd(t,e,n){var a=e.pendingProps,i=a.revealOrder,r=a.tail;if($t(t,e,a.children,n),a=Yt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vd(t,n,e);else if(t.tag===19)vd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(Q(Yt,a),i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Il(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),zc(e,!1,i,n,r);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Il(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}zc(e,!0,n,null,r);break;case"together":zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(zi(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(c(153));if(e.child!==null){for(t=e.child,n=tn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ac(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ul(t)))}function O0(t,e,n){switch(e.tag){case 3:gt(e,e.stateNode.containerInfo),wn(e,qt,t.memoizedState.cache),wi();break;case 27:case 5:Qn(e);break;case 4:gt(e,e.stateNode.containerInfo);break;case 10:wn(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(jn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?xd(t,e,n):(jn(e),t=cn(t,e,n),t!==null?t.sibling:null);jn(e);break;case 19:var i=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(zi(t,e,n,!1),a=(n&e.childLanes)!==0),i){if(a)return bd(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(Yt,Yt.current),a)break;return null;case 22:case 23:return e.lanes=0,dd(t,e,n);case 24:wn(e,qt,t.memoizedState.cache)}return cn(t,e,n)}function yd(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Vt=!0;else{if(!Ac(t,n)&&(e.flags&128)===0)return Vt=!1,O0(t,e,n);Vt=(t.flags&131072)!==0}else Vt=!1,mt&&(e.flags&1048576)!==0&&$u(e,Bl,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,i=a._init;if(a=i(a._payload),e.type=a,typeof a=="function")Mo(a)?(t=ia(a,t),e.tag=1,e=pd(null,e,a,t,n)):(e.tag=0,e=xc(null,e,a,t,n));else{if(a!=null){if(i=a.$$typeof,i===F){e.tag=11,e=sd(null,e,a,t,n);break t}else if(i===J){e.tag=14,e=ud(null,e,a,t,n);break t}}throw e=We(a)||a,Error(c(306,e,""))}}return e;case 0:return xc(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,i=ia(a,e.pendingProps),pd(t,e,a,i,n);case 3:t:{if(gt(e,e.stateNode.containerInfo),t===null)throw Error(c(387));a=e.pendingProps;var r=e.memoizedState;i=r.element,Ko(t,e),Di(e,a,null,n);var u=e.memoizedState;if(a=u.cache,wn(e,qt,a),a!==r.cache&&Lo(e,[qt],n,!0),Ti(),a=u.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=gd(t,e,a,n);break t}else if(a!==i){i=je(Error(c(424)),e),Si(i),e=gd(t,e,a,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ot=ke(t.firstChild),ae=e,mt=!0,In=null,Ye=!0,n=If(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(wi(),a===i){e=cn(t,e,n);break t}$t(t,e,a,n)}e=e.child}return e;case 26:return er(t,e),t===null?(n=Ah(e.type,null,e.pendingProps,null))?e.memoizedState=n:mt||(n=e.type,t=e.pendingProps,a=gr(et.current).createElement(n),a[Pt]=e,a[le]=t,Ft(a,n,t),Xt(a),e.stateNode=a):e.memoizedState=Ah(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Qn(e),t===null&&mt&&(a=e.stateNode=wh(e.type,e.pendingProps,et.current),ae=e,Ye=!0,i=Ot,Un(e.type)?(is=i,Ot=ke(a.firstChild)):Ot=i),$t(t,e,e.pendingProps.children,n),er(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&mt&&((i=a=Ot)&&(a=lg(a,e.type,e.pendingProps,Ye),a!==null?(e.stateNode=a,ae=e,Ot=ke(a.firstChild),Ye=!1,i=!0):i=!1),i||Pn(e)),Qn(e),i=e.type,r=e.pendingProps,u=t!==null?t.memoizedProps:null,a=r.children,ts(i,r)?a=null:u!==null&&ts(i,u)&&(e.flags|=32),e.memoizedState!==null&&(i=Po(t,e,z0,null,null,n),Ii._currentValue=i),er(t,e),$t(t,e,a,n),e.child;case 6:return t===null&&mt&&((t=n=Ot)&&(n=rg(n,e.pendingProps,Ye),n!==null?(e.stateNode=n,ae=e,Ot=null,t=!0):t=!1),t||Pn(e)),null;case 13:return xd(t,e,n);case 4:return gt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Ua(e,null,a,n):$t(t,e,a,n),e.child;case 11:return sd(t,e,e.type,e.pendingProps,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,wn(e,e.type,a.value),$t(t,e,a.children,n),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,ea(e),i=te(i),a=a(i),e.flags|=1,$t(t,e,a,n),e.child;case 14:return ud(t,e,e.type,e.pendingProps,n);case 15:return fd(t,e,e.type,e.pendingProps,n);case 19:return bd(t,e,n);case 31:return a=e.pendingProps,n=e.mode,a={mode:a.mode,children:a.children},t===null?(n=nr(a,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=tn(t.child,a),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return dd(t,e,n);case 24:return ea(e),a=te(qt),t===null?(i=Xo(),i===null&&(i=jt,r=Go(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=n),i=r),e.memoizedState={parent:a,cache:i},Zo(e),wn(e,qt,i)):((t.lanes&n)!==0&&(Ko(t,e),Di(e,null,null,n),Ti()),i=t.memoizedState,r=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),wn(e,qt,a)):(a=r.cache,wn(e,qt,a),a!==i.cache&&Lo(e,[qt],n,!0))),$t(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(c(156,e.tag))}function sn(t){t.flags|=4}function wd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Th(e)){if(e=De.current,e!==null&&((dt&4194048)===dt?Le!==null:(dt&62914560)!==dt&&(dt&536870912)===0||e!==Le))throw Ri=Vo,af;t.flags|=8192}}function ar(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Is():536870912,t.lanes|=e,Ya|=e)}function ki(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function C0(t,e,n){var a=e.pendingProps;switch(ko(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(e),null;case 1:return Tt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ln(qt),It(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(yi(e)?sn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Iu())),Tt(e),null;case 26:return n=e.memoizedState,t===null?(sn(e),n!==null?(Tt(e),wd(e,n)):(Tt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(sn(e),Tt(e),wd(e,n)):(Tt(e),e.flags&=-16777217):(t.memoizedProps!==a&&sn(e),Tt(e),e.flags&=-16777217),null;case 27:Fe(e),n=et.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&sn(e);else{if(!a){if(e.stateNode===null)throw Error(c(166));return Tt(e),null}t=W.current,yi(e)?Wu(e):(t=wh(i,a,n),e.stateNode=t,sn(e))}return Tt(e),null;case 5:if(Fe(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&sn(e);else{if(!a){if(e.stateNode===null)throw Error(c(166));return Tt(e),null}if(t=W.current,yi(e))Wu(e);else{switch(i=gr(et.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}t[Pt]=e,t[le]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(Ft(t,n,a),n){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&sn(e)}}return Tt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&sn(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(c(166));if(t=et.current,yi(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,i=ae,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[Pt]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||mh(t.nodeValue,n)),t||Pn(e)}else t=gr(t).createTextNode(a),t[Pt]=e,e.stateNode=t}return Tt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=yi(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(c(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[Pt]=e}else wi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Tt(e),i=!1}else i=Iu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(on(e),e):(on(e),null)}if(on(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=a!==null,t=t!==null&&t.memoizedState!==null,n){a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==i&&(a.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),ar(e,e.updateQueue),Tt(e),null;case 4:return It(),t===null&&$c(e.stateNode.containerInfo),Tt(e),null;case 10:return ln(e.type),Tt(e),null;case 19:if(L(Yt),i=e.memoizedState,i===null)return Tt(e),null;if(a=(e.flags&128)!==0,r=i.rendering,r===null)if(a)ki(i,!1);else{if(Ct!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(r=Il(t),r!==null){for(e.flags|=128,ki(i,!1),t=r.updateQueue,e.updateQueue=t,ar(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Ju(n,t),n=n.sibling;return Q(Yt,Yt.current&1|2),e.child}t=t.sibling}i.tail!==null&&qe()>rr&&(e.flags|=128,a=!0,ki(i,!1),e.lanes=4194304)}else{if(!a)if(t=Il(r),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,ar(e,t),ki(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!mt)return Tt(e),null}else 2*qe()-i.renderingStartTime>rr&&n!==536870912&&(e.flags|=128,a=!0,ki(i,!1),e.lanes=4194304);i.isBackwards?(r.sibling=e.child,e.child=r):(t=i.last,t!==null?t.sibling=r:e.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=qe(),e.sibling=null,t=Yt.current,Q(Yt,a?t&1|2:t&1),e):(Tt(e),null);case 22:case 23:return on(e),Fo(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(Tt(e),e.subtreeFlags&6&&(e.flags|=8192)):Tt(e),n=e.updateQueue,n!==null&&ar(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&L(na),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ln(qt),Tt(e),null;case 25:return null;case 30:return null}throw Error(c(156,e.tag))}function M0(t,e){switch(ko(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ln(qt),It(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Fe(e),null;case 13:if(on(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(c(340));wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return L(Yt),null;case 4:return It(),null;case 10:return ln(e.type),null;case 22:case 23:return on(e),Fo(),t!==null&&L(na),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ln(qt),null;case 25:return null;default:return null}}function Sd(t,e){switch(ko(e),e.tag){case 3:ln(qt),It();break;case 26:case 27:case 5:Fe(e);break;case 4:It();break;case 13:on(e);break;case 19:L(Yt);break;case 10:ln(e.type);break;case 22:case 23:on(e),Fo(),t!==null&&L(na);break;case 24:ln(qt)}}function Hi(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&t)===t){a=void 0;var r=n.create,u=n.inst;a=r(),u.destroy=a}n=n.next}while(n!==i)}}catch(m){Et(e,e.return,m)}}function Nn(t,e,n){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&t)===t){var u=a.inst,m=u.destroy;if(m!==void 0){u.destroy=void 0,i=e;var v=n,j=m;try{j()}catch(O){Et(i,v,O)}}}a=a.next}while(a!==r)}}catch(O){Et(e,e.return,O)}}function zd(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{uf(e,n)}catch(a){Et(t,t.return,a)}}}function Ad(t,e,n){n.props=ia(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){Et(t,e,a)}}function qi(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(i){Et(t,e,i)}}function Ge(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){Et(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function Ed(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){Et(t,t.return,i)}}function Ec(t,e,n){try{var a=t.stateNode;tg(a,t.type,n,e),a[le]=e}catch(i){Et(t,t.return,i)}}function jd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Un(t.type)||t.tag===4}function jc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||jd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Un(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rc(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pr));else if(a!==4&&(a===27&&Un(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Rc(t,e,n),t=t.sibling;t!==null;)Rc(t,e,n),t=t.sibling}function ir(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&Un(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(ir(t,e,n),t=t.sibling;t!==null;)ir(t,e,n),t=t.sibling}function Rd(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ft(e,a,n),e[Pt]=t,e[le]=n}catch(r){Et(t,t.return,r)}}var un=!1,_t=!1,Nc=!1,Nd=typeof WeakSet=="function"?WeakSet:Set,Zt=null;function _0(t,e){if(t=t.containerInfo,Ic=Sr,t=Hu(t),jo(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var u=0,m=-1,v=-1,j=0,O=0,_=t,R=null;e:for(;;){for(var N;_!==n||i!==0&&_.nodeType!==3||(m=u+i),_!==r||a!==0&&_.nodeType!==3||(v=u+a),_.nodeType===3&&(u+=_.nodeValue.length),(N=_.firstChild)!==null;)R=_,_=N;for(;;){if(_===t)break e;if(R===n&&++j===i&&(m=u),R===r&&++O===a&&(v=u),(N=_.nextSibling)!==null)break;_=R,R=_.parentNode}_=N}n=m===-1||v===-1?null:{start:m,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pc={focusedElem:t,selectionRange:n},Sr=!1,Zt=e;Zt!==null;)if(e=Zt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Zt=t;else for(;Zt!==null;){switch(e=Zt,r=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&r!==null){t=void 0,n=e,i=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var at=ia(n.type,i,n.elementType===n.type);t=a.getSnapshotBeforeUpdate(at,r),a.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Et(n,n.return,tt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)ns(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ns(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(c(163))}if(t=e.sibling,t!==null){t.return=e.return,Zt=t;break}Zt=e.return}}function Td(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Tn(t,n),a&4&&Hi(5,n);break;case 1:if(Tn(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(u){Et(n,n.return,u)}else{var i=ia(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){Et(n,n.return,u)}}a&64&&zd(n),a&512&&qi(n,n.return);break;case 3:if(Tn(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{uf(t,e)}catch(u){Et(n,n.return,u)}}break;case 27:e===null&&a&4&&Rd(n);case 26:case 5:Tn(t,n),e===null&&a&4&&Ed(n),a&512&&qi(n,n.return);break;case 12:Tn(t,n);break;case 13:Tn(t,n),a&4&&Cd(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Q0.bind(null,n),og(t,n))));break;case 22:if(a=n.memoizedState!==null||un,!a){e=e!==null&&e.memoizedState!==null||_t,i=un;var r=_t;un=a,(_t=e)&&!r?Dn(t,n,(n.subtreeFlags&8772)!==0):Tn(t,n),un=i,_t=r}break;case 30:break;default:Tn(t,n)}}function Dd(t){var e=t.alternate;e!==null&&(t.alternate=null,Dd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ro(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Nt=null,ce=!1;function fn(t,e,n){for(n=n.child;n!==null;)Od(t,e,n),n=n.sibling}function Od(t,e,n){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(ri,n)}catch{}switch(n.tag){case 26:_t||Ge(n,e),fn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:_t||Ge(n,e);var a=Nt,i=ce;Un(n.type)&&(Nt=n.stateNode,ce=!1),fn(t,e,n),Ji(n.stateNode),Nt=a,ce=i;break;case 5:_t||Ge(n,e);case 6:if(a=Nt,i=ce,Nt=null,fn(t,e,n),Nt=a,ce=i,Nt!==null)if(ce)try{(Nt.nodeType===9?Nt.body:Nt.nodeName==="HTML"?Nt.ownerDocument.body:Nt).removeChild(n.stateNode)}catch(r){Et(n,e,r)}else try{Nt.removeChild(n.stateNode)}catch(r){Et(n,e,r)}break;case 18:Nt!==null&&(ce?(t=Nt,bh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),nl(t)):bh(Nt,n.stateNode));break;case 4:a=Nt,i=ce,Nt=n.stateNode.containerInfo,ce=!0,fn(t,e,n),Nt=a,ce=i;break;case 0:case 11:case 14:case 15:_t||Nn(2,n,e),_t||Nn(4,n,e),fn(t,e,n);break;case 1:_t||(Ge(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Ad(n,e,a)),fn(t,e,n);break;case 21:fn(t,e,n);break;case 22:_t=(a=_t)||n.memoizedState!==null,fn(t,e,n),_t=a;break;default:fn(t,e,n)}}function Cd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{nl(t)}catch(n){Et(e,e.return,n)}}function B0(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Nd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Nd),e;default:throw Error(c(435,t.tag))}}function Tc(t,e){var n=B0(t);e.forEach(function(a){var i=X0.bind(null,t,a);n.has(a)||(n.add(a),a.then(i,i))})}function pe(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],r=t,u=e,m=u;t:for(;m!==null;){switch(m.tag){case 27:if(Un(m.type)){Nt=m.stateNode,ce=!1;break t}break;case 5:Nt=m.stateNode,ce=!1;break t;case 3:case 4:Nt=m.stateNode.containerInfo,ce=!0;break t}m=m.return}if(Nt===null)throw Error(c(160));Od(r,u,i),Nt=null,ce=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Md(e,t),e=e.sibling}var Ue=null;function Md(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pe(e,t),ge(t),a&4&&(Nn(3,t,t.return),Hi(3,t),Nn(5,t,t.return));break;case 1:pe(e,t),ge(t),a&512&&(_t||n===null||Ge(n,n.return)),a&64&&un&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Ue;if(pe(e,t),ge(t),a&512&&(_t||n===null||Ge(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":r=i.getElementsByTagName("title")[0],(!r||r[si]||r[Pt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(a),i.head.insertBefore(r,i.querySelector("head > title"))),Ft(r,a,n),r[Pt]=t,Xt(r),a=r;break t;case"link":var u=Rh("link","href",i).get(a+(n.href||""));if(u){for(var m=0;m<u.length;m++)if(r=u[m],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(m,1);break e}}r=i.createElement(a),Ft(r,a,n),i.head.appendChild(r);break;case"meta":if(u=Rh("meta","content",i).get(a+(n.content||""))){for(m=0;m<u.length;m++)if(r=u[m],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(m,1);break e}}r=i.createElement(a),Ft(r,a,n),i.head.appendChild(r);break;default:throw Error(c(468,a))}r[Pt]=t,Xt(r),a=r}t.stateNode=a}else Nh(i,t.type,t.stateNode);else t.stateNode=jh(i,a,t.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?Nh(i,t.type,t.stateNode):jh(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Ec(t,t.memoizedProps,n.memoizedProps)}break;case 27:pe(e,t),ge(t),a&512&&(_t||n===null||Ge(n,n.return)),n!==null&&a&4&&Ec(t,t.memoizedProps,n.memoizedProps);break;case 5:if(pe(e,t),ge(t),a&512&&(_t||n===null||Ge(n,n.return)),t.flags&32){i=t.stateNode;try{va(i,"")}catch(N){Et(t,t.return,N)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,Ec(t,i,n!==null?n.memoizedProps:i)),a&1024&&(Nc=!0);break;case 6:if(pe(e,t),ge(t),a&4){if(t.stateNode===null)throw Error(c(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(N){Et(t,t.return,N)}}break;case 3:if(br=null,i=Ue,Ue=xr(e.containerInfo),pe(e,t),Ue=i,ge(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{nl(e.containerInfo)}catch(N){Et(t,t.return,N)}Nc&&(Nc=!1,_d(t));break;case 4:a=Ue,Ue=xr(t.stateNode.containerInfo),pe(e,t),ge(t),Ue=a;break;case 12:pe(e,t),ge(t);break;case 13:pe(e,t),ge(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Bc=qe()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Tc(t,a)));break;case 22:i=t.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,j=un,O=_t;if(un=j||i,_t=O||v,pe(e,t),_t=O,un=j,ge(t),a&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(n===null||v||un||_t||la(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){v=n=e;try{if(r=v.stateNode,i)u=r.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{m=v.stateNode;var _=v.memoizedProps.style,R=_!=null&&_.hasOwnProperty("display")?_.display:null;m.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(N){Et(v,v.return,N)}}}else if(e.tag===6){if(n===null){v=e;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(N){Et(v,v.return,N)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Tc(t,n))));break;case 19:pe(e,t),ge(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Tc(t,a)));break;case 30:break;case 21:break;default:pe(e,t),ge(t)}}function ge(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(jd(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var i=n.stateNode,r=jc(t);ir(t,r,i);break;case 5:var u=n.stateNode;n.flags&32&&(va(u,""),n.flags&=-33);var m=jc(t);ir(t,m,u);break;case 3:case 4:var v=n.stateNode.containerInfo,j=jc(t);Rc(t,j,v);break;default:throw Error(c(161))}}catch(O){Et(t,t.return,O)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _d(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;_d(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Tn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Td(t,e.alternate,e),e=e.sibling}function la(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Nn(4,e,e.return),la(e);break;case 1:Ge(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Ad(e,e.return,n),la(e);break;case 27:Ji(e.stateNode);case 26:case 5:Ge(e,e.return),la(e);break;case 22:e.memoizedState===null&&la(e);break;case 30:la(e);break;default:la(e)}t=t.sibling}}function Dn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,r=e,u=r.flags;switch(r.tag){case 0:case 11:case 15:Dn(i,r,n),Hi(4,r);break;case 1:if(Dn(i,r,n),a=r,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(j){Et(a,a.return,j)}if(a=r,i=a.updateQueue,i!==null){var m=a.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)sf(v[i],m)}catch(j){Et(a,a.return,j)}}n&&u&64&&zd(r),qi(r,r.return);break;case 27:Rd(r);case 26:case 5:Dn(i,r,n),n&&a===null&&u&4&&Ed(r),qi(r,r.return);break;case 12:Dn(i,r,n);break;case 13:Dn(i,r,n),n&&u&4&&Cd(i,r);break;case 22:r.memoizedState===null&&Dn(i,r,n),qi(r,r.return);break;case 30:break;default:Dn(i,r,n)}e=e.sibling}}function Dc(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Ai(n))}function Oc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ai(t))}function Qe(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bd(t,e,n,a),e=e.sibling}function Bd(t,e,n,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Qe(t,e,n,a),i&2048&&Hi(9,e);break;case 1:Qe(t,e,n,a);break;case 3:Qe(t,e,n,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ai(t)));break;case 12:if(i&2048){Qe(t,e,n,a),t=e.stateNode;try{var r=e.memoizedProps,u=r.id,m=r.onPostCommit;typeof m=="function"&&m(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(v){Et(e,e.return,v)}}else Qe(t,e,n,a);break;case 13:Qe(t,e,n,a);break;case 23:break;case 22:r=e.stateNode,u=e.alternate,e.memoizedState!==null?r._visibility&2?Qe(t,e,n,a):Yi(t,e):r._visibility&2?Qe(t,e,n,a):(r._visibility|=2,ka(t,e,n,a,(e.subtreeFlags&10256)!==0)),i&2048&&Dc(u,e);break;case 24:Qe(t,e,n,a),i&2048&&Oc(e.alternate,e);break;default:Qe(t,e,n,a)}}function ka(t,e,n,a,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var r=t,u=e,m=n,v=a,j=u.flags;switch(u.tag){case 0:case 11:case 15:ka(r,u,m,v,i),Hi(8,u);break;case 23:break;case 22:var O=u.stateNode;u.memoizedState!==null?O._visibility&2?ka(r,u,m,v,i):Yi(r,u):(O._visibility|=2,ka(r,u,m,v,i)),i&&j&2048&&Dc(u.alternate,u);break;case 24:ka(r,u,m,v,i),i&&j&2048&&Oc(u.alternate,u);break;default:ka(r,u,m,v,i)}e=e.sibling}}function Yi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,i=a.flags;switch(a.tag){case 22:Yi(n,a),i&2048&&Dc(a.alternate,a);break;case 24:Yi(n,a),i&2048&&Oc(a.alternate,a);break;default:Yi(n,a)}e=e.sibling}}var Li=8192;function Ha(t){if(t.subtreeFlags&Li)for(t=t.child;t!==null;)Ud(t),t=t.sibling}function Ud(t){switch(t.tag){case 26:Ha(t),t.flags&Li&&t.memoizedState!==null&&yg(Ue,t.memoizedState,t.memoizedProps);break;case 5:Ha(t);break;case 3:case 4:var e=Ue;Ue=xr(t.stateNode.containerInfo),Ha(t),Ue=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Li,Li=16777216,Ha(t),Li=e):Ha(t));break;default:Ha(t)}}function kd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Gi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Zt=a,qd(a,t)}kd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hd(t),t=t.sibling}function Hd(t){switch(t.tag){case 0:case 11:case 15:Gi(t),t.flags&2048&&Nn(9,t,t.return);break;case 3:Gi(t);break;case 12:Gi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,lr(t)):Gi(t);break;default:Gi(t)}}function lr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Zt=a,qd(a,t)}kd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Nn(8,e,e.return),lr(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,lr(e));break;default:lr(e)}t=t.sibling}}function qd(t,e){for(;Zt!==null;){var n=Zt;switch(n.tag){case 0:case 11:case 15:Nn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ai(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Zt=a;else t:for(n=t;Zt!==null;){a=Zt;var i=a.sibling,r=a.return;if(Dd(a),a===n){Zt=null;break t}if(i!==null){i.return=r,Zt=i;break t}Zt=r}}}var U0={getCacheForType:function(t){var e=te(qt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},k0=typeof WeakMap=="function"?WeakMap:Map,bt=0,jt=null,ut=null,dt=0,yt=0,xe=null,On=!1,qa=!1,Cc=!1,dn=0,Ct=0,Cn=0,ra=0,Mc=0,Oe=0,Ya=0,Qi=null,se=null,_c=!1,Bc=0,rr=1/0,or=null,Mn=null,Wt=0,_n=null,La=null,Ga=0,Uc=0,kc=null,Yd=null,Xi=0,Hc=null;function ve(){if((bt&2)!==0&&dt!==0)return dt&-dt;if(D.T!==null){var t=Ta;return t!==0?t:Vc()}return eu()}function Ld(){Oe===0&&(Oe=(dt&536870912)===0||mt?Fs():536870912);var t=De.current;return t!==null&&(t.flags|=32),Oe}function be(t,e,n){(t===jt&&(yt===2||yt===9)||t.cancelPendingCommit!==null)&&(Qa(t,0),Bn(t,dt,Oe,!1)),ci(t,n),((bt&2)===0||t!==jt)&&(t===jt&&((bt&2)===0&&(ra|=n),Ct===4&&Bn(t,dt,Oe,!1)),Xe(t))}function Gd(t,e,n){if((bt&6)!==0)throw Error(c(327));var a=!n&&(e&124)===0&&(e&t.expiredLanes)===0||oi(t,e),i=a?Y0(t,e):Lc(t,e,!0),r=a;do{if(i===0){qa&&!a&&Bn(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!H0(n)){i=Lc(t,e,!1),r=!1;continue}if(i===2){if(r=e,t.errorRecoveryDisabledLanes&r)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var m=t;i=Qi;var v=m.current.memoizedState.isDehydrated;if(v&&(Qa(m,u).flags|=256),u=Lc(m,u,!1),u!==2){if(Cc&&!v){m.errorRecoveryDisabledLanes|=r,ra|=r,i=4;break t}r=se,se=i,r!==null&&(se===null?se=r:se.push.apply(se,r))}i=u}if(r=!1,i!==2)continue}}if(i===1){Qa(t,0),Bn(t,e,0,!0);break}t:{switch(a=t,r=i,r){case 0:case 1:throw Error(c(345));case 4:if((e&4194048)!==e)break;case 6:Bn(a,e,Oe,!On);break t;case 2:se=null;break;case 3:case 5:break;default:throw Error(c(329))}if((e&62914560)===e&&(i=Bc+300-qe(),10<i)){if(Bn(a,e,Oe,!On),vl(a,0,!0)!==0)break t;a.timeoutHandle=xh(Qd.bind(null,a,n,se,or,_c,e,Oe,ra,Ya,On,r,2,-0,0),i);break t}Qd(a,n,se,or,_c,e,Oe,ra,Ya,On,r,0,-0,0)}}break}while(!0);Xe(t)}function Qd(t,e,n,a,i,r,u,m,v,j,O,_,R,N){if(t.timeoutHandle=-1,_=e.subtreeFlags,(_&8192||(_&16785408)===16785408)&&(Fi={stylesheets:null,count:0,unsuspend:bg},Ud(e),_=wg(),_!==null)){t.cancelPendingCommit=_(Wd.bind(null,t,e,r,n,a,i,u,m,v,O,1,R,N)),Bn(t,r,u,!j);return}Wd(t,e,r,n,a,i,u,m,v)}function H0(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!he(r(),i))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e,n,a){e&=~Mc,e&=~ra,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var r=31-de(i),u=1<<r;a[r]=-1,i&=~u}n!==0&&Ps(t,n,e)}function cr(){return(bt&6)===0?(Vi(0),!1):!0}function qc(){if(ut!==null){if(yt===0)var t=ut.return;else t=ut,an=ta=null,nc(t),Ba=null,Bi=0,t=ut;for(;t!==null;)Sd(t.alternate,t),t=t.return;ut=null}}function Qa(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,ng(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),qc(),jt=t,ut=n=tn(t.current,null),dt=e,yt=0,xe=null,On=!1,qa=oi(t,e),Cc=!1,Ya=Oe=Mc=ra=Cn=Ct=0,se=Qi=null,_c=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-de(a),r=1<<i;e|=t[i],a&=~r}return dn=e,Dl(),n}function Xd(t,e){rt=null,D.H=$l,e===ji||e===ql?(e=of(),yt=3):e===af?(e=of(),yt=4):yt=e===cd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,xe=e,ut===null&&(Ct=1,tr(t,je(e,t.current)))}function Vd(){var t=D.H;return D.H=$l,t===null?$l:t}function Zd(){var t=D.A;return D.A=U0,t}function Yc(){Ct=4,On||(dt&4194048)!==dt&&De.current!==null||(qa=!0),(Cn&134217727)===0&&(ra&134217727)===0||jt===null||Bn(jt,dt,Oe,!1)}function Lc(t,e,n){var a=bt;bt|=2;var i=Vd(),r=Zd();(jt!==t||dt!==e)&&(or=null,Qa(t,e)),e=!1;var u=Ct;t:do try{if(yt!==0&&ut!==null){var m=ut,v=xe;switch(yt){case 8:qc(),u=6;break t;case 3:case 2:case 9:case 6:De.current===null&&(e=!0);var j=yt;if(yt=0,xe=null,Xa(t,m,v,j),n&&qa){u=0;break t}break;default:j=yt,yt=0,xe=null,Xa(t,m,v,j)}}q0(),u=Ct;break}catch(O){Xd(t,O)}while(!0);return e&&t.shellSuspendCounter++,an=ta=null,bt=a,D.H=i,D.A=r,ut===null&&(jt=null,dt=0,Dl()),u}function q0(){for(;ut!==null;)Kd(ut)}function Y0(t,e){var n=bt;bt|=2;var a=Vd(),i=Zd();jt!==t||dt!==e?(or=null,rr=qe()+500,Qa(t,e)):qa=oi(t,e);t:do try{if(yt!==0&&ut!==null){e=ut;var r=xe;e:switch(yt){case 1:yt=0,xe=null,Xa(t,e,r,1);break;case 2:case 9:if(lf(r)){yt=0,xe=null,Jd(e);break}e=function(){yt!==2&&yt!==9||jt!==t||(yt=7),Xe(t)},r.then(e,e);break t;case 3:yt=7;break t;case 4:yt=5;break t;case 7:lf(r)?(yt=0,xe=null,Jd(e)):(yt=0,xe=null,Xa(t,e,r,7));break;case 5:var u=null;switch(ut.tag){case 26:u=ut.memoizedState;case 5:case 27:var m=ut;if(!u||Th(u)){yt=0,xe=null;var v=m.sibling;if(v!==null)ut=v;else{var j=m.return;j!==null?(ut=j,sr(j)):ut=null}break e}}yt=0,xe=null,Xa(t,e,r,5);break;case 6:yt=0,xe=null,Xa(t,e,r,6);break;case 8:qc(),Ct=6;break t;default:throw Error(c(462))}}L0();break}catch(O){Xd(t,O)}while(!0);return an=ta=null,D.H=a,D.A=i,bt=n,ut!==null?0:(jt=null,dt=0,Dl(),Ct)}function L0(){for(;ut!==null&&!sp();)Kd(ut)}function Kd(t){var e=yd(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?sr(t):ut=e}function Jd(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=md(n,e,e.pendingProps,e.type,void 0,dt);break;case 11:e=md(n,e,e.pendingProps,e.type.render,e.ref,dt);break;case 5:nc(e);default:Sd(n,e),e=ut=Ju(e,dn),e=yd(n,e,dn)}t.memoizedProps=t.pendingProps,e===null?sr(t):ut=e}function Xa(t,e,n,a){an=ta=null,nc(e),Ba=null,Bi=0;var i=e.return;try{if(D0(t,i,e,n,dt)){Ct=1,tr(t,je(n,t.current)),ut=null;return}}catch(r){if(i!==null)throw ut=i,r;Ct=1,tr(t,je(n,t.current)),ut=null;return}e.flags&32768?(mt||a===1?t=!0:qa||(dt&536870912)!==0?t=!1:(On=t=!0,(a===2||a===9||a===3||a===6)&&(a=De.current,a!==null&&a.tag===13&&(a.flags|=16384))),$d(e,t)):sr(e)}function sr(t){var e=t;do{if((e.flags&32768)!==0){$d(e,On);return}t=e.return;var n=C0(e.alternate,e,dn);if(n!==null){ut=n;return}if(e=e.sibling,e!==null){ut=e;return}ut=e=t}while(e!==null);Ct===0&&(Ct=5)}function $d(t,e){do{var n=M0(t.alternate,t);if(n!==null){n.flags&=32767,ut=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ut=t;return}ut=t=n}while(t!==null);Ct=6,ut=null}function Wd(t,e,n,a,i,r,u,m,v){t.cancelPendingCommit=null;do ur();while(Wt!==0);if((bt&6)!==0)throw Error(c(327));if(e!==null){if(e===t.current)throw Error(c(177));if(r=e.lanes|e.childLanes,r|=Oo,bp(t,n,r,u,m,v),t===jt&&(ut=jt=null,dt=0),La=e,_n=t,Ga=n,Uc=r,kc=i,Yd=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,V0(pl,function(){return eh(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=D.T,D.T=null,i=G.p,G.p=2,u=bt,bt|=4;try{_0(t,e,n)}finally{bt=u,G.p=i,D.T=a}}Wt=1,Fd(),Id(),Pd()}}function Fd(){if(Wt===1){Wt=0;var t=_n,e=La,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var a=G.p;G.p=2;var i=bt;bt|=4;try{Md(e,t);var r=Pc,u=Hu(t.containerInfo),m=r.focusedElem,v=r.selectionRange;if(u!==m&&m&&m.ownerDocument&&ku(m.ownerDocument.documentElement,m)){if(v!==null&&jo(m)){var j=v.start,O=v.end;if(O===void 0&&(O=j),"selectionStart"in m)m.selectionStart=j,m.selectionEnd=Math.min(O,m.value.length);else{var _=m.ownerDocument||document,R=_&&_.defaultView||window;if(R.getSelection){var N=R.getSelection(),at=m.textContent.length,tt=Math.min(v.start,at),At=v.end===void 0?tt:Math.min(v.end,at);!N.extend&&tt>At&&(u=At,At=tt,tt=u);var z=Uu(m,tt),w=Uu(m,At);if(z&&w&&(N.rangeCount!==1||N.anchorNode!==z.node||N.anchorOffset!==z.offset||N.focusNode!==w.node||N.focusOffset!==w.offset)){var E=_.createRange();E.setStart(z.node,z.offset),N.removeAllRanges(),tt>At?(N.addRange(E),N.extend(w.node,w.offset)):(E.setEnd(w.node,w.offset),N.addRange(E))}}}}for(_=[],N=m;N=N.parentNode;)N.nodeType===1&&_.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<_.length;m++){var C=_[m];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}Sr=!!Ic,Pc=Ic=null}finally{bt=i,G.p=a,D.T=n}}t.current=e,Wt=2}}function Id(){if(Wt===2){Wt=0;var t=_n,e=La,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var a=G.p;G.p=2;var i=bt;bt|=4;try{Td(t,e.alternate,e)}finally{bt=i,G.p=a,D.T=n}}Wt=3}}function Pd(){if(Wt===4||Wt===3){Wt=0,up();var t=_n,e=La,n=Ga,a=Yd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Wt=5:(Wt=0,La=_n=null,th(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Mn=null),io(n),e=e.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(ri,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=D.T,i=G.p,G.p=2,D.T=null;try{for(var r=t.onRecoverableError,u=0;u<a.length;u++){var m=a[u];r(m.value,{componentStack:m.stack})}}finally{D.T=e,G.p=i}}(Ga&3)!==0&&ur(),Xe(t),i=t.pendingLanes,(n&4194090)!==0&&(i&42)!==0?t===Hc?Xi++:(Xi=0,Hc=t):Xi=0,Vi(0)}}function th(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ai(e)))}function ur(t){return Fd(),Id(),Pd(),eh()}function eh(){if(Wt!==5)return!1;var t=_n,e=Uc;Uc=0;var n=io(Ga),a=D.T,i=G.p;try{G.p=32>n?32:n,D.T=null,n=kc,kc=null;var r=_n,u=Ga;if(Wt=0,La=_n=null,Ga=0,(bt&6)!==0)throw Error(c(331));var m=bt;if(bt|=4,Hd(r.current),Bd(r,r.current,u,n),bt=m,Vi(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(ri,r)}catch{}return!0}finally{G.p=i,D.T=a,th(t,e)}}function nh(t,e,n){e=je(n,e),e=gc(t.stateNode,e,2),t=An(t,e,2),t!==null&&(ci(t,2),Xe(t))}function Et(t,e,n){if(t.tag===3)nh(t,t,n);else for(;e!==null;){if(e.tag===3){nh(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Mn===null||!Mn.has(a))){t=je(n,t),n=rd(2),a=An(e,n,2),a!==null&&(od(n,a,e,t),ci(a,2),Xe(a));break}}e=e.return}}function Gc(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new k0;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(n)||(Cc=!0,i.add(n),t=G0.bind(null,t,e,n),e.then(t,t))}function G0(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,jt===t&&(dt&n)===n&&(Ct===4||Ct===3&&(dt&62914560)===dt&&300>qe()-Bc?(bt&2)===0&&Qa(t,0):Mc|=n,Ya===dt&&(Ya=0)),Xe(t)}function ah(t,e){e===0&&(e=Is()),t=Ea(t,e),t!==null&&(ci(t,e),Xe(t))}function Q0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ah(t,n)}function X0(t,e){var n=0;switch(t.tag){case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(e),ah(t,n)}function V0(t,e){return to(t,e)}var fr=null,Va=null,Qc=!1,dr=!1,Xc=!1,oa=0;function Xe(t){t!==Va&&t.next===null&&(Va===null?fr=Va=t:Va=Va.next=t),dr=!0,Qc||(Qc=!0,K0())}function Vi(t,e){if(!Xc&&dr){Xc=!0;do for(var n=!1,a=fr;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var r=0;else{var u=a.suspendedLanes,m=a.pingedLanes;r=(1<<31-de(42|t)+1)-1,r&=i&~(u&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,oh(a,r))}else r=dt,r=vl(a,a===jt?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||oi(a,r)||(n=!0,oh(a,r));a=a.next}while(n);Xc=!1}}function Z0(){ih()}function ih(){dr=Qc=!1;var t=0;oa!==0&&(eg()&&(t=oa),oa=0);for(var e=qe(),n=null,a=fr;a!==null;){var i=a.next,r=lh(a,e);r===0?(a.next=null,n===null?fr=i:n.next=i,i===null&&(Va=n)):(n=a,(t!==0||(r&3)!==0)&&(dr=!0)),a=i}Vi(t)}function lh(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var u=31-de(r),m=1<<u,v=i[u];v===-1?((m&n)===0||(m&a)!==0)&&(i[u]=vp(m,e)):v<=e&&(t.expiredLanes|=m),r&=~m}if(e=jt,n=dt,n=vl(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(yt===2||yt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&eo(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||oi(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&eo(a),io(n)){case 2:case 8:n=$s;break;case 32:n=pl;break;case 268435456:n=Ws;break;default:n=pl}return a=rh.bind(null,t),n=to(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&eo(a),t.callbackPriority=2,t.callbackNode=null,2}function rh(t,e){if(Wt!==0&&Wt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(ur()&&t.callbackNode!==n)return null;var a=dt;return a=vl(t,t===jt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Gd(t,a,e),lh(t,qe()),t.callbackNode!=null&&t.callbackNode===n?rh.bind(null,t):null)}function oh(t,e){if(ur())return null;Gd(t,e,!0)}function K0(){ag(function(){(bt&6)!==0?to(Js,Z0):ih()})}function Vc(){return oa===0&&(oa=Fs()),oa}function ch(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zl(""+t)}function sh(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function J0(t,e,n,a,i){if(e==="submit"&&n&&n.stateNode===i){var r=ch((i[le]||null).action),u=a.submitter;u&&(e=(e=u[le]||null)?ch(e.formAction):u.getAttribute("formAction"),e!==null&&(r=e,u=null));var m=new Rl("action","action",null,a,i);t.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(oa!==0){var v=u?sh(i,u):new FormData(i);fc(n,{pending:!0,data:v,method:i.method,action:r},null,v)}}else typeof r=="function"&&(m.preventDefault(),v=u?sh(i,u):new FormData(i),fc(n,{pending:!0,data:v,method:i.method,action:r},r,v))},currentTarget:i}]})}}for(var Zc=0;Zc<Do.length;Zc++){var Kc=Do[Zc],$0=Kc.toLowerCase(),W0=Kc[0].toUpperCase()+Kc.slice(1);Be($0,"on"+W0)}Be(Lu,"onAnimationEnd"),Be(Gu,"onAnimationIteration"),Be(Qu,"onAnimationStart"),Be("dblclick","onDoubleClick"),Be("focusin","onFocus"),Be("focusout","onBlur"),Be(h0,"onTransitionRun"),Be(m0,"onTransitionStart"),Be(p0,"onTransitionCancel"),Be(Xu,"onTransitionEnd"),pa("onMouseEnter",["mouseout","mouseover"]),pa("onMouseLeave",["mouseout","mouseover"]),pa("onPointerEnter",["pointerout","pointerover"]),pa("onPointerLeave",["pointerout","pointerover"]),Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zi));function uh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],i=a.event;a=a.listeners;t:{var r=void 0;if(e)for(var u=a.length-1;0<=u;u--){var m=a[u],v=m.instance,j=m.currentTarget;if(m=m.listener,v!==r&&i.isPropagationStopped())break t;r=m,i.currentTarget=j;try{r(i)}catch(O){Pl(O)}i.currentTarget=null,r=v}else for(u=0;u<a.length;u++){if(m=a[u],v=m.instance,j=m.currentTarget,m=m.listener,v!==r&&i.isPropagationStopped())break t;r=m,i.currentTarget=j;try{r(i)}catch(O){Pl(O)}i.currentTarget=null,r=v}}}}function ft(t,e){var n=e[lo];n===void 0&&(n=e[lo]=new Set);var a=t+"__bubble";n.has(a)||(fh(e,t,2,!1),n.add(a))}function Jc(t,e,n){var a=0;e&&(a|=4),fh(n,t,a,e)}var hr="_reactListening"+Math.random().toString(36).slice(2);function $c(t){if(!t[hr]){t[hr]=!0,au.forEach(function(n){n!=="selectionchange"&&(F0.has(n)||Jc(n,!1,t),Jc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hr]||(e[hr]=!0,Jc("selectionchange",!1,e))}}function fh(t,e,n,a){switch(Bh(e)){case 2:var i=Ag;break;case 8:i=Eg;break;default:i=ss}n=i.bind(null,e,n,t),i=void 0,!xo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Wc(t,e,n,a,i){var r=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var m=a.stateNode.containerInfo;if(m===i)break;if(u===4)for(u=a.return;u!==null;){var v=u.tag;if((v===3||v===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;m!==null;){if(u=da(m),u===null)return;if(v=u.tag,v===5||v===6||v===26||v===27){a=r=u;continue t}m=m.parentNode}}a=a.return}xu(function(){var j=r,O=po(n),_=[];t:{var R=Vu.get(t);if(R!==void 0){var N=Rl,at=t;switch(t){case"keypress":if(El(n)===0)break t;case"keydown":case"keyup":N=Vp;break;case"focusin":at="focus",N=wo;break;case"focusout":at="blur",N=wo;break;case"beforeblur":case"afterblur":N=wo;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Jp;break;case Lu:case Gu:case Qu:N=Up;break;case Xu:N=Wp;break;case"scroll":case"scrollend":N=Op;break;case"wheel":N=Ip;break;case"copy":case"cut":case"paste":N=Hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Su;break;case"toggle":case"beforetoggle":N=t0}var tt=(e&4)!==0,At=!tt&&(t==="scroll"||t==="scrollend"),z=tt?R!==null?R+"Capture":null:R;tt=[];for(var w=j,E;w!==null;){var C=w;if(E=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||E===null||z===null||(C=fi(w,z),C!=null&&tt.push(Ki(w,C,E))),At)break;w=w.return}0<tt.length&&(R=new N(R,at,null,n,O),_.push({event:R,listeners:tt}))}}if((e&7)===0){t:{if(R=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",R&&n!==mo&&(at=n.relatedTarget||n.fromElement)&&(da(at)||at[fa]))break t;if((N||R)&&(R=O.window===O?O:(R=O.ownerDocument)?R.defaultView||R.parentWindow:window,N?(at=n.relatedTarget||n.toElement,N=j,at=at?da(at):null,at!==null&&(At=p(at),tt=at.tag,at!==At||tt!==5&&tt!==27&&tt!==6)&&(at=null)):(N=null,at=j),N!==at)){if(tt=yu,C="onMouseLeave",z="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Su,C="onPointerLeave",z="onPointerEnter",w="pointer"),At=N==null?R:ui(N),E=at==null?R:ui(at),R=new tt(C,w+"leave",N,n,O),R.target=At,R.relatedTarget=E,C=null,da(O)===j&&(tt=new tt(z,w+"enter",at,n,O),tt.target=E,tt.relatedTarget=At,C=tt),At=C,N&&at)e:{for(tt=N,z=at,w=0,E=tt;E;E=Za(E))w++;for(E=0,C=z;C;C=Za(C))E++;for(;0<w-E;)tt=Za(tt),w--;for(;0<E-w;)z=Za(z),E--;for(;w--;){if(tt===z||z!==null&&tt===z.alternate)break e;tt=Za(tt),z=Za(z)}tt=null}else tt=null;N!==null&&dh(_,R,N,tt,!1),at!==null&&At!==null&&dh(_,At,at,tt,!0)}}t:{if(R=j?ui(j):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var K=Du;else if(Nu(R))if(Ou)K=u0;else{K=c0;var ot=o0}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?j&&ho(j.elementType)&&(K=Du):K=s0;if(K&&(K=K(t,j))){Tu(_,K,n,O);break t}ot&&ot(t,R,j),t==="focusout"&&j&&R.type==="number"&&j.memoizedProps.value!=null&&fo(R,"number",R.value)}switch(ot=j?ui(j):window,t){case"focusin":(Nu(ot)||ot.contentEditable==="true")&&(Sa=ot,Ro=j,bi=null);break;case"focusout":bi=Ro=Sa=null;break;case"mousedown":No=!0;break;case"contextmenu":case"mouseup":case"dragend":No=!1,qu(_,n,O);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":qu(_,n,O)}var $;if(zo)t:{switch(t){case"compositionstart":var nt="onCompositionStart";break t;case"compositionend":nt="onCompositionEnd";break t;case"compositionupdate":nt="onCompositionUpdate";break t}nt=void 0}else wa?ju(t,n)&&(nt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(nt="onCompositionStart");nt&&(zu&&n.locale!=="ko"&&(wa||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&wa&&($=vu()):(yn=O,vo="value"in yn?yn.value:yn.textContent,wa=!0)),ot=mr(j,nt),0<ot.length&&(nt=new wu(nt,t,null,n,O),_.push({event:nt,listeners:ot}),$?nt.data=$:($=Ru(n),$!==null&&(nt.data=$)))),($=n0?a0(t,n):i0(t,n))&&(nt=mr(j,"onBeforeInput"),0<nt.length&&(ot=new wu("onBeforeInput","beforeinput",null,n,O),_.push({event:ot,listeners:nt}),ot.data=$)),J0(_,t,j,n,O)}uh(_,e)})}function Ki(t,e,n){return{instance:t,listener:e,currentTarget:n}}function mr(t,e){for(var n=e+"Capture",a=[];t!==null;){var i=t,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=fi(t,n),i!=null&&a.unshift(Ki(t,i,r)),i=fi(t,e),i!=null&&a.push(Ki(t,i,r))),t.tag===3)return a;t=t.return}return[]}function Za(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function dh(t,e,n,a,i){for(var r=e._reactName,u=[];n!==null&&n!==a;){var m=n,v=m.alternate,j=m.stateNode;if(m=m.tag,v!==null&&v===a)break;m!==5&&m!==26&&m!==27||j===null||(v=j,i?(j=fi(n,r),j!=null&&u.unshift(Ki(n,j,v))):i||(j=fi(n,r),j!=null&&u.push(Ki(n,j,v)))),n=n.return}u.length!==0&&t.push({event:e,listeners:u})}var I0=/\r\n?/g,P0=/\u0000|\uFFFD/g;function hh(t){return(typeof t=="string"?t:""+t).replace(I0,`
`).replace(P0,"")}function mh(t,e){return e=hh(e),hh(t)===e}function pr(){}function zt(t,e,n,a,i,r){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||va(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&va(t,""+a);break;case"className":yl(t,"class",a);break;case"tabIndex":yl(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":yl(t,n,a);break;case"style":pu(t,a,r);break;case"data":if(e!=="object"){yl(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=zl(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&zt(t,e,"name",i.name,i,null),zt(t,e,"formEncType",i.formEncType,i,null),zt(t,e,"formMethod",i.formMethod,i,null),zt(t,e,"formTarget",i.formTarget,i,null)):(zt(t,e,"encType",i.encType,i,null),zt(t,e,"method",i.method,i,null),zt(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=zl(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=pr);break;case"onScroll":a!=null&&ft("scroll",t);break;case"onScrollEnd":a!=null&&ft("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(c(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=zl(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":ft("beforetoggle",t),ft("toggle",t),bl(t,"popover",a);break;case"xlinkActuate":Ie(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ie(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ie(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ie(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ie(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ie(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ie(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ie(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ie(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":bl(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Tp.get(n)||n,bl(t,n,a))}}function Fc(t,e,n,a,i,r){switch(n){case"style":pu(t,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(c(60));t.innerHTML=n}}break;case"children":typeof a=="string"?va(t,a):(typeof a=="number"||typeof a=="bigint")&&va(t,""+a);break;case"onScroll":a!=null&&ft("scroll",t);break;case"onScrollEnd":a!=null&&ft("scrollend",t);break;case"onClick":a!=null&&(t.onclick=pr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!iu.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),e=n.slice(2,i?n.length-7:void 0),r=t[le]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,i),typeof a=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,i);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):bl(t,n,a)}}}function Ft(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ft("error",t),ft("load",t);var a=!1,i=!1,r;for(r in n)if(n.hasOwnProperty(r)){var u=n[r];if(u!=null)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:zt(t,e,r,u,n,null)}}i&&zt(t,e,"srcSet",n.srcSet,n,null),a&&zt(t,e,"src",n.src,n,null);return;case"input":ft("invalid",t);var m=r=u=i=null,v=null,j=null;for(a in n)if(n.hasOwnProperty(a)){var O=n[a];if(O!=null)switch(a){case"name":i=O;break;case"type":u=O;break;case"checked":v=O;break;case"defaultChecked":j=O;break;case"value":r=O;break;case"defaultValue":m=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,e));break;default:zt(t,e,a,O,n,null)}}fu(t,r,m,v,j,u,i,!1),wl(t);return;case"select":ft("invalid",t),a=u=r=null;for(i in n)if(n.hasOwnProperty(i)&&(m=n[i],m!=null))switch(i){case"value":r=m;break;case"defaultValue":u=m;break;case"multiple":a=m;default:zt(t,e,i,m,n,null)}e=r,n=u,t.multiple=!!a,e!=null?xa(t,!!a,e,!1):n!=null&&xa(t,!!a,n,!0);return;case"textarea":ft("invalid",t),r=i=a=null;for(u in n)if(n.hasOwnProperty(u)&&(m=n[u],m!=null))switch(u){case"value":a=m;break;case"defaultValue":i=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:zt(t,e,u,m,n,null)}hu(t,a,i,r),wl(t);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(a=n[v],a!=null))switch(v){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:zt(t,e,v,a,n,null)}return;case"dialog":ft("beforetoggle",t),ft("toggle",t),ft("cancel",t),ft("close",t);break;case"iframe":case"object":ft("load",t);break;case"video":case"audio":for(a=0;a<Zi.length;a++)ft(Zi[a],t);break;case"image":ft("error",t),ft("load",t);break;case"details":ft("toggle",t);break;case"embed":case"source":case"link":ft("error",t),ft("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in n)if(n.hasOwnProperty(j)&&(a=n[j],a!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:zt(t,e,j,a,n,null)}return;default:if(ho(e)){for(O in n)n.hasOwnProperty(O)&&(a=n[O],a!==void 0&&Fc(t,e,O,a,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(a=n[m],a!=null&&zt(t,e,m,a,n,null))}function tg(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,u=null,m=null,v=null,j=null,O=null;for(N in n){var _=n[N];if(n.hasOwnProperty(N)&&_!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":v=_;default:a.hasOwnProperty(N)||zt(t,e,N,null,a,_)}}for(var R in a){var N=a[R];if(_=n[R],a.hasOwnProperty(R)&&(N!=null||_!=null))switch(R){case"type":r=N;break;case"name":i=N;break;case"checked":j=N;break;case"defaultChecked":O=N;break;case"value":u=N;break;case"defaultValue":m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,e));break;default:N!==_&&zt(t,e,R,N,a,_)}}uo(t,u,m,v,j,O,r,i);return;case"select":N=u=m=R=null;for(r in n)if(v=n[r],n.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":N=v;default:a.hasOwnProperty(r)||zt(t,e,r,null,a,v)}for(i in a)if(r=a[i],v=n[i],a.hasOwnProperty(i)&&(r!=null||v!=null))switch(i){case"value":R=r;break;case"defaultValue":m=r;break;case"multiple":u=r;default:r!==v&&zt(t,e,i,r,a,v)}e=m,n=u,a=N,R!=null?xa(t,!!n,R,!1):!!a!=!!n&&(e!=null?xa(t,!!n,e,!0):xa(t,!!n,n?[]:"",!1));return;case"textarea":N=R=null;for(m in n)if(i=n[m],n.hasOwnProperty(m)&&i!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:zt(t,e,m,null,a,i)}for(u in a)if(i=a[u],r=n[u],a.hasOwnProperty(u)&&(i!=null||r!=null))switch(u){case"value":R=i;break;case"defaultValue":N=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==r&&zt(t,e,u,i,a,r)}du(t,R,N);return;case"option":for(var at in n)if(R=n[at],n.hasOwnProperty(at)&&R!=null&&!a.hasOwnProperty(at))switch(at){case"selected":t.selected=!1;break;default:zt(t,e,at,null,a,R)}for(v in a)if(R=a[v],N=n[v],a.hasOwnProperty(v)&&R!==N&&(R!=null||N!=null))switch(v){case"selected":t.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:zt(t,e,v,R,a,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in n)R=n[tt],n.hasOwnProperty(tt)&&R!=null&&!a.hasOwnProperty(tt)&&zt(t,e,tt,null,a,R);for(j in a)if(R=a[j],N=n[j],a.hasOwnProperty(j)&&R!==N&&(R!=null||N!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,e));break;default:zt(t,e,j,R,a,N)}return;default:if(ho(e)){for(var At in n)R=n[At],n.hasOwnProperty(At)&&R!==void 0&&!a.hasOwnProperty(At)&&Fc(t,e,At,void 0,a,R);for(O in a)R=a[O],N=n[O],!a.hasOwnProperty(O)||R===N||R===void 0&&N===void 0||Fc(t,e,O,R,a,N);return}}for(var z in n)R=n[z],n.hasOwnProperty(z)&&R!=null&&!a.hasOwnProperty(z)&&zt(t,e,z,null,a,R);for(_ in a)R=a[_],N=n[_],!a.hasOwnProperty(_)||R===N||R==null&&N==null||zt(t,e,_,R,a,N)}var Ic=null,Pc=null;function gr(t){return t.nodeType===9?t:t.ownerDocument}function ph(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ts(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var es=null;function eg(){var t=window.event;return t&&t.type==="popstate"?t===es?!1:(es=t,!0):(es=null,!1)}var xh=typeof setTimeout=="function"?setTimeout:void 0,ng=typeof clearTimeout=="function"?clearTimeout:void 0,vh=typeof Promise=="function"?Promise:void 0,ag=typeof queueMicrotask=="function"?queueMicrotask:typeof vh<"u"?function(t){return vh.resolve(null).then(t).catch(ig)}:xh;function ig(t){setTimeout(function(){throw t})}function Un(t){return t==="head"}function bh(t,e){var n=e,a=0,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var u=t.ownerDocument;if(n&1&&Ji(u.documentElement),n&2&&Ji(u.body),n&4)for(n=u.head,Ji(n),u=n.firstChild;u;){var m=u.nextSibling,v=u.nodeName;u[si]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=m}}if(i===0){t.removeChild(r),nl(e);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);nl(e)}function ns(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ns(n),ro(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function lg(t,e,n,a){for(;t.nodeType===1;){var i=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[si])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=ke(t.nextSibling),t===null)break}return null}function rg(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ke(t.nextSibling),t===null))return null;return t}function as(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function og(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function ke(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var is=null;function yh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function wh(t,e,n){switch(e=gr(n),t){case"html":if(t=e.documentElement,!t)throw Error(c(452));return t;case"head":if(t=e.head,!t)throw Error(c(453));return t;case"body":if(t=e.body,!t)throw Error(c(454));return t;default:throw Error(c(451))}}function Ji(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ro(t)}var Ce=new Map,Sh=new Set;function xr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var hn=G.d;G.d={f:cg,r:sg,D:ug,C:fg,L:dg,m:hg,X:pg,S:mg,M:gg};function cg(){var t=hn.f(),e=cr();return t||e}function sg(t){var e=ha(t);e!==null&&e.tag===5&&e.type==="form"?Gf(e):hn.r(t)}var Ka=typeof document>"u"?null:document;function zh(t,e,n){var a=Ka;if(a&&typeof e=="string"&&e){var i=Ee(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Sh.has(i)||(Sh.add(i),t={rel:t,crossOrigin:n,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),Ft(e,"link",t),Xt(e),a.head.appendChild(e)))}}function ug(t){hn.D(t),zh("dns-prefetch",t,null)}function fg(t,e){hn.C(t,e),zh("preconnect",t,e)}function dg(t,e,n){hn.L(t,e,n);var a=Ka;if(a&&t&&e){var i='link[rel="preload"][as="'+Ee(e)+'"]';e==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Ee(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Ee(n.imageSizes)+'"]')):i+='[href="'+Ee(t)+'"]';var r=i;switch(e){case"style":r=Ja(t);break;case"script":r=$a(t)}Ce.has(r)||(t=b({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ce.set(r,t),a.querySelector(i)!==null||e==="style"&&a.querySelector($i(r))||e==="script"&&a.querySelector(Wi(r))||(e=a.createElement("link"),Ft(e,"link",t),Xt(e),a.head.appendChild(e)))}}function hg(t,e){hn.m(t,e);var n=Ka;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Ee(a)+'"][href="'+Ee(t)+'"]',r=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=$a(t)}if(!Ce.has(r)&&(t=b({rel:"modulepreload",href:t},e),Ce.set(r,t),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Wi(r)))return}a=n.createElement("link"),Ft(a,"link",t),Xt(a),n.head.appendChild(a)}}}function mg(t,e,n){hn.S(t,e,n);var a=Ka;if(a&&t){var i=ma(a).hoistableStyles,r=Ja(t);e=e||"default";var u=i.get(r);if(!u){var m={loading:0,preload:null};if(u=a.querySelector($i(r)))m.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ce.get(r))&&ls(t,n);var v=u=a.createElement("link");Xt(v),Ft(v,"link",t),v._p=new Promise(function(j,O){v.onload=j,v.onerror=O}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,vr(u,e,a)}u={type:"stylesheet",instance:u,count:1,state:m},i.set(r,u)}}}function pg(t,e){hn.X(t,e);var n=Ka;if(n&&t){var a=ma(n).hoistableScripts,i=$a(t),r=a.get(i);r||(r=n.querySelector(Wi(i)),r||(t=b({src:t,async:!0},e),(e=Ce.get(i))&&rs(t,e),r=n.createElement("script"),Xt(r),Ft(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function gg(t,e){hn.M(t,e);var n=Ka;if(n&&t){var a=ma(n).hoistableScripts,i=$a(t),r=a.get(i);r||(r=n.querySelector(Wi(i)),r||(t=b({src:t,async:!0,type:"module"},e),(e=Ce.get(i))&&rs(t,e),r=n.createElement("script"),Xt(r),Ft(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function Ah(t,e,n,a){var i=(i=et.current)?xr(i):null;if(!i)throw Error(c(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ja(n.href),n=ma(i).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ja(n.href);var r=ma(i).hoistableStyles,u=r.get(t);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,u),(r=i.querySelector($i(t)))&&!r._p&&(u.instance=r,u.state.loading=5),Ce.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ce.set(t,n),r||xg(i,t,n,u.state))),e&&a===null)throw Error(c(528,""));return u}if(e&&a!==null)throw Error(c(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=$a(n),n=ma(i).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,t))}}function Ja(t){return'href="'+Ee(t)+'"'}function $i(t){return'link[rel="stylesheet"]['+t+"]"}function Eh(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function xg(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Ft(e,"link",n),Xt(e),t.head.appendChild(e))}function $a(t){return'[src="'+Ee(t)+'"]'}function Wi(t){return"script[async]"+t}function jh(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Ee(n.href)+'"]');if(a)return e.instance=a,Xt(a),a;var i=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Xt(a),Ft(a,"style",i),vr(a,n.precedence,t),e.instance=a;case"stylesheet":i=Ja(n.href);var r=t.querySelector($i(i));if(r)return e.state.loading|=4,e.instance=r,Xt(r),r;a=Eh(n),(i=Ce.get(i))&&ls(a,i),r=(t.ownerDocument||t).createElement("link"),Xt(r);var u=r;return u._p=new Promise(function(m,v){u.onload=m,u.onerror=v}),Ft(r,"link",a),e.state.loading|=4,vr(r,n.precedence,t),e.instance=r;case"script":return r=$a(n.src),(i=t.querySelector(Wi(r)))?(e.instance=i,Xt(i),i):(a=n,(i=Ce.get(r))&&(a=b({},n),rs(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),Xt(i),Ft(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(c(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,vr(a,n.precedence,t));return e.instance}function vr(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,r=i,u=0;u<a.length;u++){var m=a[u];if(m.dataset.precedence===e)r=m;else if(r!==i)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function ls(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function rs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var br=null;function Rh(t,e,n){if(br===null){var a=new Map,i=br=new Map;i.set(n,a)}else i=br,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),i=0;i<n.length;i++){var r=n[i];if(!(r[si]||r[Pt]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var u=r.getAttribute(e)||"";u=t+u;var m=a.get(u);m?m.push(r):a.set(u,[r])}}return a}function Nh(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function vg(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Th(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Fi=null;function bg(){}function yg(t,e,n){if(Fi===null)throw Error(c(475));var a=Fi;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Ja(n.href),r=t.querySelector($i(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=yr.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=r,Xt(r);return}r=t.ownerDocument||t,n=Eh(n),(i=Ce.get(i))&&ls(n,i),r=r.createElement("link"),Xt(r);var u=r;u._p=new Promise(function(m,v){u.onload=m,u.onerror=v}),Ft(r,"link",n),e.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=yr.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function wg(){if(Fi===null)throw Error(c(475));var t=Fi;return t.stylesheets&&t.count===0&&os(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&os(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function yr(){if(this.count--,this.count===0){if(this.stylesheets)os(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wr=null;function os(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wr=new Map,e.forEach(Sg,t),wr=null,yr.call(t))}function Sg(t,e){if(!(e.state.loading&4)){var n=wr.get(t);if(n)var a=n.get(null);else{n=new Map,wr.set(t,n);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var u=i[r];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),a=u)}a&&n.set(null,a)}i=e.instance,u=i.getAttribute("data-precedence"),r=n.get(u)||a,r===a&&n.set(null,i),n.set(u,i),this.count++,a=yr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),r?r.parentNode.insertBefore(i,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Ii={$$typeof:Y,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function zg(t,e,n,a,i,r,u,m){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=no(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=no(0),this.hiddenUpdates=no(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Dh(t,e,n,a,i,r,u,m,v,j,O,_){return t=new zg(t,e,n,u,m,v,j,_),e=1,r===!0&&(e|=24),r=me(3,null,null,e),t.current=r,r.stateNode=t,e=Go(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:e},Zo(r),t}function Oh(t){return t?(t=ja,t):ja}function Ch(t,e,n,a,i,r){i=Oh(i),a.context===null?a.context=i:a.pendingContext=i,a=zn(e),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=An(t,a,e),n!==null&&(be(n,t,e),Ni(n,t,e))}function Mh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cs(t,e){Mh(t,e),(t=t.alternate)&&Mh(t,e)}function _h(t){if(t.tag===13){var e=Ea(t,67108864);e!==null&&be(e,t,67108864),cs(t,67108864)}}var Sr=!0;function Ag(t,e,n,a){var i=D.T;D.T=null;var r=G.p;try{G.p=2,ss(t,e,n,a)}finally{G.p=r,D.T=i}}function Eg(t,e,n,a){var i=D.T;D.T=null;var r=G.p;try{G.p=8,ss(t,e,n,a)}finally{G.p=r,D.T=i}}function ss(t,e,n,a){if(Sr){var i=us(a);if(i===null)Wc(t,e,a,zr,n),Uh(t,a);else if(Rg(i,t,e,n,a))a.stopPropagation();else if(Uh(t,a),e&4&&-1<jg.indexOf(t)){for(;i!==null;){var r=ha(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var u=Xn(r.pendingLanes);if(u!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;u;){var v=1<<31-de(u);m.entanglements[1]|=v,u&=~v}Xe(r),(bt&6)===0&&(rr=qe()+500,Vi(0))}}break;case 13:m=Ea(r,2),m!==null&&be(m,r,2),cr(),cs(r,2)}if(r=us(a),r===null&&Wc(t,e,a,zr,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else Wc(t,e,a,null,n)}}function us(t){return t=po(t),fs(t)}var zr=null;function fs(t){if(zr=null,t=da(t),t!==null){var e=p(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=g(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return zr=t,null}function Bh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fp()){case Js:return 2;case $s:return 8;case pl:case dp:return 32;case Ws:return 268435456;default:return 32}default:return 32}}var ds=!1,kn=null,Hn=null,qn=null,Pi=new Map,tl=new Map,Yn=[],jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Uh(t,e){switch(t){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Pi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(e.pointerId)}}function el(t,e,n,a,i,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},e!==null&&(e=ha(e),e!==null&&_h(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Rg(t,e,n,a,i){switch(e){case"focusin":return kn=el(kn,t,e,n,a,i),!0;case"dragenter":return Hn=el(Hn,t,e,n,a,i),!0;case"mouseover":return qn=el(qn,t,e,n,a,i),!0;case"pointerover":var r=i.pointerId;return Pi.set(r,el(Pi.get(r)||null,t,e,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,tl.set(r,el(tl.get(r)||null,t,e,n,a,i)),!0}return!1}function kh(t){var e=da(t.target);if(e!==null){var n=p(e);if(n!==null){if(e=n.tag,e===13){if(e=g(n),e!==null){t.blockedOn=e,yp(t.priority,function(){if(n.tag===13){var a=ve();a=ao(a);var i=Ea(n,a);i!==null&&be(i,n,a),cs(n,a)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ar(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=us(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);mo=a,n.target.dispatchEvent(a),mo=null}else return e=ha(n),e!==null&&_h(e),t.blockedOn=n,!1;e.shift()}return!0}function Hh(t,e,n){Ar(t)&&n.delete(e)}function Ng(){ds=!1,kn!==null&&Ar(kn)&&(kn=null),Hn!==null&&Ar(Hn)&&(Hn=null),qn!==null&&Ar(qn)&&(qn=null),Pi.forEach(Hh),tl.forEach(Hh)}function Er(t,e){t.blockedOn===e&&(t.blockedOn=null,ds||(ds=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Ng)))}var jr=null;function qh(t){jr!==t&&(jr=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){jr===t&&(jr=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(fs(a||n)===null)continue;break}var r=ha(n);r!==null&&(t.splice(e,3),e-=3,fc(r,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function nl(t){function e(v){return Er(v,t)}kn!==null&&Er(kn,t),Hn!==null&&Er(Hn,t),qn!==null&&Er(qn,t),Pi.forEach(e),tl.forEach(e);for(var n=0;n<Yn.length;n++){var a=Yn[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)kh(n),n.blockedOn===null&&Yn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],r=n[a+1],u=i[le]||null;if(typeof r=="function")u||qh(n);else if(u){var m=null;if(r&&r.hasAttribute("formAction")){if(i=r,u=r[le]||null)m=u.formAction;else if(fs(i)!==null)continue}else m=u.action;typeof m=="function"?n[a+1]=m:(n.splice(a,3),a-=3),qh(n)}}}function hs(t){this._internalRoot=t}Rr.prototype.render=hs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(c(409));var n=e.current,a=ve();Ch(n,a,t,e,null,null)},Rr.prototype.unmount=hs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ch(t.current,2,null,t,null,null),cr(),e[fa]=null}};function Rr(t){this._internalRoot=t}Rr.prototype.unstable_scheduleHydration=function(t){if(t){var e=eu();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yn.length&&e!==0&&e<Yn[n].priority;n++);Yn.splice(n,0,t),n===0&&kh(t)}};var Yh=o.version;if(Yh!=="19.1.1")throw Error(c(527,Yh,"19.1.1"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=x(e),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var Tg={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{ri=Nr.inject(Tg),fe=Nr}catch{}}return il.createRoot=function(t,e){if(!f(t))throw Error(c(299));var n=!1,a="",i=nd,r=ad,u=id,m=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(m=e.unstable_transitionCallbacks)),e=Dh(t,1,!1,null,null,n,a,i,r,u,m,null),t[fa]=e.current,$c(t),new hs(e)},il.hydrateRoot=function(t,e,n){if(!f(t))throw Error(c(299));var a=!1,i="",r=nd,u=ad,m=id,v=null,j=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks),n.formState!==void 0&&(j=n.formState)),e=Dh(t,1,!0,e,n??null,a,i,r,u,m,v,j),e.context=Oh(null),n=e.current,a=ve(),a=ao(a),i=zn(a),i.callback=null,An(n,i,a),n=a,e.current.lanes=n,ci(e,n),Xe(e),t[fa]=e.current,$c(t),new Rr(e)},il.version="19.1.1",il}var Wh;function Yg(){if(Wh)return gs.exports;Wh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),gs.exports=qg(),gs.exports}var Lg=Yg();/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fh="popstate";function Gg(l={}){function o(c,f){let{pathname:p,search:g,hash:S}=c.location;return js("",{pathname:p,search:g,hash:S},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function s(c,f){return typeof f=="string"?f:sl(f)}return Xg(o,s,null,l)}function Dt(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function Ze(l,o){if(!l){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Qg(){return Math.random().toString(36).substring(2,10)}function Ih(l,o){return{usr:l.state,key:l.key,idx:o}}function js(l,o,s=null,c){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof o=="string"?ai(o):o,state:s,key:o&&o.key||c||Qg()}}function sl({pathname:l="/",search:o="",hash:s=""}){return o&&o!=="?"&&(l+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(l+=s.charAt(0)==="#"?s:"#"+s),l}function ai(l){let o={};if(l){let s=l.indexOf("#");s>=0&&(o.hash=l.substring(s),l=l.substring(0,s));let c=l.indexOf("?");c>=0&&(o.search=l.substring(c),l=l.substring(0,c)),l&&(o.pathname=l)}return o}function Xg(l,o,s,c={}){let{window:f=document.defaultView,v5Compat:p=!1}=c,g=f.history,S="POP",x=null,h=b();h==null&&(h=0,g.replaceState({...g.state,idx:h},""));function b(){return(g.state||{idx:null}).idx}function T(){S="POP";let X=b(),U=X==null?null:X-h;h=X,x&&x({action:S,location:q.location,delta:U})}function M(X,U){S="PUSH";let Z=js(q.location,X,U);h=b()+1;let Y=Ih(Z,h),F=q.createHref(Z);try{g.pushState(Y,"",F)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;f.location.assign(F)}p&&x&&x({action:S,location:q.location,delta:1})}function k(X,U){S="REPLACE";let Z=js(q.location,X,U);h=b();let Y=Ih(Z,h),F=q.createHref(Z);g.replaceState(Y,"",F),p&&x&&x({action:S,location:q.location,delta:0})}function H(X){return Vg(X)}let q={get action(){return S},get location(){return l(f,g)},listen(X){if(x)throw new Error("A history only accepts one active listener");return f.addEventListener(Fh,T),x=X,()=>{f.removeEventListener(Fh,T),x=null}},createHref(X){return o(f,X)},createURL:H,encodeLocation(X){let U=H(X);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:M,replace:k,go(X){return g.go(X)}};return q}function Vg(l,o=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Dt(s,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:sl(l);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=s+c),new URL(c,s)}function ym(l,o,s="/"){return Zg(l,o,s,!1)}function Zg(l,o,s,c){let f=typeof o=="string"?ai(o):o,p=gn(f.pathname||"/",s);if(p==null)return null;let g=wm(l);Kg(g);let S=null;for(let x=0;S==null&&x<g.length;++x){let h=i1(p);S=n1(g[x],h,c)}return S}function wm(l,o=[],s=[],c="",f=!1){let p=(g,S,x=f,h)=>{let b={relativePath:h===void 0?g.path||"":h,caseSensitive:g.caseSensitive===!0,childrenIndex:S,route:g};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(c)&&x)return;Dt(b.relativePath.startsWith(c),`Absolute route path "${b.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(c.length)}let T=pn([c,b.relativePath]),M=s.concat(b);g.children&&g.children.length>0&&(Dt(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),wm(g.children,o,M,T,x)),!(g.path==null&&!g.index)&&o.push({path:T,score:t1(T,g.index),routesMeta:M})};return l.forEach((g,S)=>{if(g.path===""||!g.path?.includes("?"))p(g,S);else for(let x of Sm(g.path))p(g,S,!0,x)}),o}function Sm(l){let o=l.split("/");if(o.length===0)return[];let[s,...c]=o,f=s.endsWith("?"),p=s.replace(/\?$/,"");if(c.length===0)return f?[p,""]:[p];let g=Sm(c.join("/")),S=[];return S.push(...g.map(x=>x===""?p:[p,x].join("/"))),f&&S.push(...g),S.map(x=>l.startsWith("/")&&x===""?"/":x)}function Kg(l){l.sort((o,s)=>o.score!==s.score?s.score-o.score:e1(o.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var Jg=/^:[\w-]+$/,$g=3,Wg=2,Fg=1,Ig=10,Pg=-2,Ph=l=>l==="*";function t1(l,o){let s=l.split("/"),c=s.length;return s.some(Ph)&&(c+=Pg),o&&(c+=Wg),s.filter(f=>!Ph(f)).reduce((f,p)=>f+(Jg.test(p)?$g:p===""?Fg:Ig),c)}function e1(l,o){return l.length===o.length&&l.slice(0,-1).every((c,f)=>c===o[f])?l[l.length-1]-o[o.length-1]:0}function n1(l,o,s=!1){let{routesMeta:c}=l,f={},p="/",g=[];for(let S=0;S<c.length;++S){let x=c[S],h=S===c.length-1,b=p==="/"?o:o.slice(p.length)||"/",T=qr({path:x.relativePath,caseSensitive:x.caseSensitive,end:h},b),M=x.route;if(!T&&h&&s&&!c[c.length-1].route.index&&(T=qr({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},b)),!T)return null;Object.assign(f,T.params),g.push({params:f,pathname:pn([p,T.pathname]),pathnameBase:c1(pn([p,T.pathnameBase])),route:M}),T.pathnameBase!=="/"&&(p=pn([p,T.pathnameBase]))}return g}function qr(l,o){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[s,c]=a1(l.path,l.caseSensitive,l.end),f=o.match(s);if(!f)return null;let p=f[0],g=p.replace(/(.)\/+$/,"$1"),S=f.slice(1);return{params:c.reduce((h,{paramName:b,isOptional:T},M)=>{if(b==="*"){let H=S[M]||"";g=p.slice(0,p.length-H.length).replace(/(.)\/+$/,"$1")}const k=S[M];return T&&!k?h[b]=void 0:h[b]=(k||"").replace(/%2F/g,"/"),h},{}),pathname:p,pathnameBase:g,pattern:l}}function a1(l,o=!1,s=!0){Ze(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,S,x)=>(c.push({paramName:S,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(c.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),c]}function i1(l){try{return l.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Ze(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),l}}function gn(l,o){if(o==="/")return l;if(!l.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,c=l.charAt(s);return c&&c!=="/"?null:l.slice(s)||"/"}function l1(l,o="/"){let{pathname:s,search:c="",hash:f=""}=typeof l=="string"?ai(l):l;return{pathname:s?s.startsWith("/")?s:r1(s,o):o,search:s1(c),hash:u1(f)}}function r1(l,o){let s=o.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function ys(l,o,s,c){return`Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function o1(l){return l.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function zm(l){let o=o1(l);return o.map((s,c)=>c===o.length-1?s.pathname:s.pathnameBase)}function Am(l,o,s,c=!1){let f;typeof l=="string"?f=ai(l):(f={...l},Dt(!f.pathname||!f.pathname.includes("?"),ys("?","pathname","search",f)),Dt(!f.pathname||!f.pathname.includes("#"),ys("#","pathname","hash",f)),Dt(!f.search||!f.search.includes("#"),ys("#","search","hash",f)));let p=l===""||f.pathname==="",g=p?"/":f.pathname,S;if(g==null)S=s;else{let T=o.length-1;if(!c&&g.startsWith("..")){let M=g.split("/");for(;M[0]==="..";)M.shift(),T-=1;f.pathname=M.join("/")}S=T>=0?o[T]:"/"}let x=l1(f,S),h=g&&g!=="/"&&g.endsWith("/"),b=(p||g===".")&&s.endsWith("/");return!x.pathname.endsWith("/")&&(h||b)&&(x.pathname+="/"),x}var pn=l=>l.join("/").replace(/\/\/+/g,"/"),c1=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),s1=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,u1=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function f1(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var Em=["POST","PUT","PATCH","DELETE"];new Set(Em);var d1=["GET",...Em];new Set(d1);var ii=A.createContext(null);ii.displayName="DataRouter";var Zr=A.createContext(null);Zr.displayName="DataRouterState";A.createContext(!1);var jm=A.createContext({isTransitioning:!1});jm.displayName="ViewTransition";var h1=A.createContext(new Map);h1.displayName="Fetchers";var m1=A.createContext(null);m1.displayName="Await";var Ke=A.createContext(null);Ke.displayName="Navigation";var fl=A.createContext(null);fl.displayName="Location";var Je=A.createContext({outlet:null,matches:[],isDataRoute:!1});Je.displayName="Route";var Us=A.createContext(null);Us.displayName="RouteError";function p1(l,{relative:o}={}){Dt(dl(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=A.useContext(Ke),{hash:f,pathname:p,search:g}=hl(l,{relative:o}),S=p;return s!=="/"&&(S=p==="/"?s:pn([s,p])),c.createHref({pathname:S,search:g,hash:f})}function dl(){return A.useContext(fl)!=null}function xn(){return Dt(dl(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(fl).location}var Rm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Nm(l){A.useContext(Ke).static||A.useLayoutEffect(l)}function Ht(){let{isDataRoute:l}=A.useContext(Je);return l?T1():g1()}function g1(){Dt(dl(),"useNavigate() may be used only in the context of a <Router> component.");let l=A.useContext(ii),{basename:o,navigator:s}=A.useContext(Ke),{matches:c}=A.useContext(Je),{pathname:f}=xn(),p=JSON.stringify(zm(c)),g=A.useRef(!1);return Nm(()=>{g.current=!0}),A.useCallback((x,h={})=>{if(Ze(g.current,Rm),!g.current)return;if(typeof x=="number"){s.go(x);return}let b=Am(x,JSON.parse(p),f,h.relative==="path");l==null&&o!=="/"&&(b.pathname=b.pathname==="/"?o:pn([o,b.pathname])),(h.replace?s.replace:s.push)(b,h.state,h)},[o,s,p,f,l])}A.createContext(null);function x1(){let{matches:l}=A.useContext(Je),o=l[l.length-1];return o?o.params:{}}function hl(l,{relative:o}={}){let{matches:s}=A.useContext(Je),{pathname:c}=xn(),f=JSON.stringify(zm(s));return A.useMemo(()=>Am(l,JSON.parse(f),c,o==="path"),[l,f,c,o])}function v1(l,o){return Tm(l,o)}function Tm(l,o,s,c){Dt(dl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=A.useContext(Ke),{matches:p}=A.useContext(Je),g=p[p.length-1],S=g?g.params:{},x=g?g.pathname:"/",h=g?g.pathnameBase:"/",b=g&&g.route;{let U=b&&b.path||"";Dm(x,!b||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let T=xn(),M;if(o){let U=typeof o=="string"?ai(o):o;Dt(h==="/"||U.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${U.pathname}" was given in the \`location\` prop.`),M=U}else M=T;let k=M.pathname||"/",H=k;if(h!=="/"){let U=h.replace(/^\//,"").split("/");H="/"+k.replace(/^\//,"").split("/").slice(U.length).join("/")}let q=ym(l,{pathname:H});Ze(b||q!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ze(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=z1(q&&q.map(U=>Object.assign({},U,{params:Object.assign({},S,U.params),pathname:pn([h,f.encodeLocation?f.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?h:pn([h,f.encodeLocation?f.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),p,s,c);return o&&X?A.createElement(fl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},X):X}function b1(){let l=N1(),o=f1(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),s=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",l),g=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:p},"ErrorBoundary")," or"," ",A.createElement("code",{style:p},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},o),s?A.createElement("pre",{style:f},s):null,g)}var y1=A.createElement(b1,null),w1=class extends A.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,o){return o.location!==l.location||o.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:o.error,location:o.location,revalidation:l.revalidation||o.revalidation}}componentDidCatch(l,o){console.error("React Router caught the following error during render",l,o)}render(){return this.state.error!==void 0?A.createElement(Je.Provider,{value:this.props.routeContext},A.createElement(Us.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function S1({routeContext:l,match:o,children:s}){let c=A.useContext(ii);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),A.createElement(Je.Provider,{value:l},s)}function z1(l,o=[],s=null,c=null){if(l==null){if(!s)return null;if(s.errors)l=s.matches;else if(o.length===0&&!s.initialized&&s.matches.length>0)l=s.matches;else return null}let f=l,p=s?.errors;if(p!=null){let x=f.findIndex(h=>h.route.id&&p?.[h.route.id]!==void 0);Dt(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,x+1))}let g=!1,S=-1;if(s)for(let x=0;x<f.length;x++){let h=f[x];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(S=x),h.route.id){let{loaderData:b,errors:T}=s,M=h.route.loader&&!b.hasOwnProperty(h.route.id)&&(!T||T[h.route.id]===void 0);if(h.route.lazy||M){g=!0,S>=0?f=f.slice(0,S+1):f=[f[0]];break}}}return f.reduceRight((x,h,b)=>{let T,M=!1,k=null,H=null;s&&(T=p&&h.route.id?p[h.route.id]:void 0,k=h.route.errorElement||y1,g&&(S<0&&b===0?(Dm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,H=null):S===b&&(M=!0,H=h.route.hydrateFallbackElement||null)));let q=o.concat(f.slice(0,b+1)),X=()=>{let U;return T?U=k:M?U=H:h.route.Component?U=A.createElement(h.route.Component,null):h.route.element?U=h.route.element:U=x,A.createElement(S1,{match:h,routeContext:{outlet:x,matches:q,isDataRoute:s!=null},children:U})};return s&&(h.route.ErrorBoundary||h.route.errorElement||b===0)?A.createElement(w1,{location:s.location,revalidation:s.revalidation,component:k,error:T,children:X(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):X()},null)}function ks(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function A1(l){let o=A.useContext(ii);return Dt(o,ks(l)),o}function E1(l){let o=A.useContext(Zr);return Dt(o,ks(l)),o}function j1(l){let o=A.useContext(Je);return Dt(o,ks(l)),o}function Hs(l){let o=j1(l),s=o.matches[o.matches.length-1];return Dt(s.route.id,`${l} can only be used on routes that contain a unique "id"`),s.route.id}function R1(){return Hs("useRouteId")}function N1(){let l=A.useContext(Us),o=E1("useRouteError"),s=Hs("useRouteError");return l!==void 0?l:o.errors?.[s]}function T1(){let{router:l}=A1("useNavigate"),o=Hs("useNavigate"),s=A.useRef(!1);return Nm(()=>{s.current=!0}),A.useCallback(async(f,p={})=>{Ze(s.current,Rm),s.current&&(typeof f=="number"?l.navigate(f):await l.navigate(f,{fromRouteId:o,...p}))},[l,o])}var tm={};function Dm(l,o,s){!o&&!tm[l]&&(tm[l]=!0,Ze(!1,s))}A.memo(D1);function D1({routes:l,future:o,state:s}){return Tm(l,void 0,s,o)}function rl(l){Dt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function O1({basename:l="/",children:o=null,location:s,navigationType:c="POP",navigator:f,static:p=!1}){Dt(!dl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=l.replace(/^\/*/,"/"),S=A.useMemo(()=>({basename:g,navigator:f,static:p,future:{}}),[g,f,p]);typeof s=="string"&&(s=ai(s));let{pathname:x="/",search:h="",hash:b="",state:T=null,key:M="default"}=s,k=A.useMemo(()=>{let H=gn(x,g);return H==null?null:{location:{pathname:H,search:h,hash:b,state:T,key:M},navigationType:c}},[g,x,h,b,T,M,c]);return Ze(k!=null,`<Router basename="${g}"> is not able to match the URL "${x}${h}${b}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:A.createElement(Ke.Provider,{value:S},A.createElement(fl.Provider,{children:o,value:k}))}function C1({children:l,location:o}){return v1(Rs(l),o)}function Rs(l,o=[]){let s=[];return A.Children.forEach(l,(c,f)=>{if(!A.isValidElement(c))return;let p=[...o,f];if(c.type===A.Fragment){s.push.apply(s,Rs(c.props.children,p));return}Dt(c.type===rl,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Dt(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=Rs(c.props.children,p)),s.push(g)}),s}var Cr="get",Mr="application/x-www-form-urlencoded";function Kr(l){return l!=null&&typeof l.tagName=="string"}function M1(l){return Kr(l)&&l.tagName.toLowerCase()==="button"}function _1(l){return Kr(l)&&l.tagName.toLowerCase()==="form"}function B1(l){return Kr(l)&&l.tagName.toLowerCase()==="input"}function U1(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function k1(l,o){return l.button===0&&(!o||o==="_self")&&!U1(l)}var Tr=null;function H1(){if(Tr===null)try{new FormData(document.createElement("form"),0),Tr=!1}catch{Tr=!0}return Tr}var q1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ws(l){return l!=null&&!q1.has(l)?(Ze(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mr}"`),null):l}function Y1(l,o){let s,c,f,p,g;if(_1(l)){let S=l.getAttribute("action");c=S?gn(S,o):null,s=l.getAttribute("method")||Cr,f=ws(l.getAttribute("enctype"))||Mr,p=new FormData(l)}else if(M1(l)||B1(l)&&(l.type==="submit"||l.type==="image")){let S=l.form;if(S==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=l.getAttribute("formaction")||S.getAttribute("action");if(c=x?gn(x,o):null,s=l.getAttribute("formmethod")||S.getAttribute("method")||Cr,f=ws(l.getAttribute("formenctype"))||ws(S.getAttribute("enctype"))||Mr,p=new FormData(S,l),!H1()){let{name:h,type:b,value:T}=l;if(b==="image"){let M=h?`${h}.`:"";p.append(`${M}x`,"0"),p.append(`${M}y`,"0")}else h&&p.append(h,T)}}else{if(Kr(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Cr,c=null,f=Mr,g=l}return p&&f==="text/plain"&&(g=p,p=void 0),{action:c,method:s.toLowerCase(),encType:f,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function qs(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function L1(l,o,s){let c=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return c.pathname==="/"?c.pathname=`_root.${s}`:o&&gn(c.pathname,o)==="/"?c.pathname=`${o.replace(/\/$/,"")}/_root.${s}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${s}`,c}async function G1(l,o){if(l.id in o)return o[l.id];try{let s=await import(l.module);return o[l.id]=s,s}catch(s){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Q1(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function X1(l,o,s){let c=await Promise.all(l.map(async f=>{let p=o.routes[f.route.id];if(p){let g=await G1(p,s);return g.links?g.links():[]}return[]}));return J1(c.flat(1).filter(Q1).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function em(l,o,s,c,f,p){let g=(x,h)=>s[h]?x.route.id!==s[h].route.id:!0,S=(x,h)=>s[h].pathname!==x.pathname||s[h].route.path?.endsWith("*")&&s[h].params["*"]!==x.params["*"];return p==="assets"?o.filter((x,h)=>g(x,h)||S(x,h)):p==="data"?o.filter((x,h)=>{let b=c.routes[x.route.id];if(!b||!b.hasLoader)return!1;if(g(x,h)||S(x,h))return!0;if(x.route.shouldRevalidate){let T=x.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function V1(l,o,{includeHydrateFallback:s}={}){return Z1(l.map(c=>{let f=o.routes[c.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function Z1(l){return[...new Set(l)]}function K1(l){let o={},s=Object.keys(l).sort();for(let c of s)o[c]=l[c];return o}function J1(l,o){let s=new Set;return new Set(o),l.reduce((c,f)=>{let p=JSON.stringify(K1(f));return s.has(p)||(s.add(p),c.push({key:p,link:f})),c},[])}function Om(){let l=A.useContext(ii);return qs(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function $1(){let l=A.useContext(Zr);return qs(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Ys=A.createContext(void 0);Ys.displayName="FrameworkContext";function Cm(){let l=A.useContext(Ys);return qs(l,"You must render this element inside a <HydratedRouter> element"),l}function W1(l,o){let s=A.useContext(Ys),[c,f]=A.useState(!1),[p,g]=A.useState(!1),{onFocus:S,onBlur:x,onMouseEnter:h,onMouseLeave:b,onTouchStart:T}=o,M=A.useRef(null);A.useEffect(()=>{if(l==="render"&&g(!0),l==="viewport"){let q=U=>{U.forEach(Z=>{g(Z.isIntersecting)})},X=new IntersectionObserver(q,{threshold:.5});return M.current&&X.observe(M.current),()=>{X.disconnect()}}},[l]),A.useEffect(()=>{if(c){let q=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(q)}}},[c]);let k=()=>{f(!0)},H=()=>{f(!1),g(!1)};return s?l!=="intent"?[p,M,{}]:[p,M,{onFocus:ll(S,k),onBlur:ll(x,H),onMouseEnter:ll(h,k),onMouseLeave:ll(b,H),onTouchStart:ll(T,k)}]:[!1,M,{}]}function ll(l,o){return s=>{l&&l(s),s.defaultPrevented||o(s)}}function F1({page:l,...o}){let{router:s}=Om(),c=A.useMemo(()=>ym(s.routes,l,s.basename),[s.routes,l,s.basename]);return c?A.createElement(P1,{page:l,matches:c,...o}):null}function I1(l){let{manifest:o,routeModules:s}=Cm(),[c,f]=A.useState([]);return A.useEffect(()=>{let p=!1;return X1(l,o,s).then(g=>{p||f(g)}),()=>{p=!0}},[l,o,s]),c}function P1({page:l,matches:o,...s}){let c=xn(),{manifest:f,routeModules:p}=Cm(),{basename:g}=Om(),{loaderData:S,matches:x}=$1(),h=A.useMemo(()=>em(l,o,x,f,c,"data"),[l,o,x,f,c]),b=A.useMemo(()=>em(l,o,x,f,c,"assets"),[l,o,x,f,c]),T=A.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let H=new Set,q=!1;if(o.forEach(U=>{let Z=f.routes[U.route.id];!Z||!Z.hasLoader||(!h.some(Y=>Y.route.id===U.route.id)&&U.route.id in S&&p[U.route.id]?.shouldRevalidate||Z.hasClientLoader?q=!0:H.add(U.route.id))}),H.size===0)return[];let X=L1(l,g,"data");return q&&H.size>0&&X.searchParams.set("_routes",o.filter(U=>H.has(U.route.id)).map(U=>U.route.id).join(",")),[X.pathname+X.search]},[g,S,c,f,h,o,l,p]),M=A.useMemo(()=>V1(b,f),[b,f]),k=I1(b);return A.createElement(A.Fragment,null,T.map(H=>A.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...s})),M.map(H=>A.createElement("link",{key:H,rel:"modulepreload",href:H,...s})),k.map(({key:H,link:q})=>A.createElement("link",{key:H,nonce:s.nonce,...q})))}function tx(...l){return o=>{l.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var Mm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Mm&&(window.__reactRouterVersion="7.8.1")}catch{}function ex({basename:l,children:o,window:s}){let c=A.useRef();c.current==null&&(c.current=Gg({window:s,v5Compat:!0}));let f=c.current,[p,g]=A.useState({action:f.action,location:f.location}),S=A.useCallback(x=>{A.startTransition(()=>g(x))},[g]);return A.useLayoutEffect(()=>f.listen(S),[f,S]),A.createElement(O1,{basename:l,children:o,location:p.location,navigationType:p.action,navigator:f})}var _m=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ls=A.forwardRef(function({onClick:o,discover:s="render",prefetch:c="none",relative:f,reloadDocument:p,replace:g,state:S,target:x,to:h,preventScrollReset:b,viewTransition:T,...M},k){let{basename:H}=A.useContext(Ke),q=typeof h=="string"&&_m.test(h),X,U=!1;if(typeof h=="string"&&q&&(X=h,Mm))try{let vt=new URL(window.location.href),ne=h.startsWith("//")?new URL(vt.protocol+h):new URL(h),ie=gn(ne.pathname,H);ne.origin===vt.origin&&ie!=null?h=ie+ne.search+ne.hash:U=!0}catch{Ze(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Z=p1(h,{relative:f}),[Y,F,V]=W1(c,M),I=lx(h,{replace:g,state:S,target:x,preventScrollReset:b,relative:f,viewTransition:T});function J(vt){o&&o(vt),vt.defaultPrevented||I(vt)}let wt=A.createElement("a",{...M,...V,href:X||Z,onClick:U||p?o:J,ref:tx(k,F),target:x,"data-discover":!q&&s==="render"?"true":void 0});return Y&&!q?A.createElement(A.Fragment,null,wt,A.createElement(F1,{page:Z})):wt});Ls.displayName="Link";var nx=A.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:c="",end:f=!1,style:p,to:g,viewTransition:S,children:x,...h},b){let T=hl(g,{relative:h.relative}),M=xn(),k=A.useContext(Zr),{navigator:H,basename:q}=A.useContext(Ke),X=k!=null&&ux(T)&&S===!0,U=H.encodeLocation?H.encodeLocation(T).pathname:T.pathname,Z=M.pathname,Y=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;s||(Z=Z.toLowerCase(),Y=Y?Y.toLowerCase():null,U=U.toLowerCase()),Y&&q&&(Y=gn(Y,q)||Y);const F=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let V=Z===U||!f&&Z.startsWith(U)&&Z.charAt(F)==="/",I=Y!=null&&(Y===U||!f&&Y.startsWith(U)&&Y.charAt(U.length)==="/"),J={isActive:V,isPending:I,isTransitioning:X},wt=V?o:void 0,vt;typeof c=="function"?vt=c(J):vt=[c,V?"active":null,I?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let ne=typeof p=="function"?p(J):p;return A.createElement(Ls,{...h,"aria-current":wt,className:vt,ref:b,style:ne,to:g,viewTransition:S},typeof x=="function"?x(J):x)});nx.displayName="NavLink";var ax=A.forwardRef(({discover:l="render",fetcherKey:o,navigate:s,reloadDocument:c,replace:f,state:p,method:g=Cr,action:S,onSubmit:x,relative:h,preventScrollReset:b,viewTransition:T,...M},k)=>{let H=cx(),q=sx(S,{relative:h}),X=g.toLowerCase()==="get"?"get":"post",U=typeof S=="string"&&_m.test(S),Z=Y=>{if(x&&x(Y),Y.defaultPrevented)return;Y.preventDefault();let F=Y.nativeEvent.submitter,V=F?.getAttribute("formmethod")||g;H(F||Y.currentTarget,{fetcherKey:o,method:V,navigate:s,replace:f,state:p,relative:h,preventScrollReset:b,viewTransition:T})};return A.createElement("form",{ref:k,method:X,action:q,onSubmit:c?x:Z,...M,"data-discover":!U&&l==="render"?"true":void 0})});ax.displayName="Form";function ix(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bm(l){let o=A.useContext(ii);return Dt(o,ix(l)),o}function lx(l,{target:o,replace:s,state:c,preventScrollReset:f,relative:p,viewTransition:g}={}){let S=Ht(),x=xn(),h=hl(l,{relative:p});return A.useCallback(b=>{if(k1(b,o)){b.preventDefault();let T=s!==void 0?s:sl(x)===sl(h);S(l,{replace:T,state:c,preventScrollReset:f,relative:p,viewTransition:g})}},[x,S,h,s,c,o,l,f,p,g])}var rx=0,ox=()=>`__${String(++rx)}__`;function cx(){let{router:l}=Bm("useSubmit"),{basename:o}=A.useContext(Ke),s=R1();return A.useCallback(async(c,f={})=>{let{action:p,method:g,encType:S,formData:x,body:h}=Y1(c,o);if(f.navigate===!1){let b=f.fetcherKey||ox();await l.fetch(b,s,f.action||p,{preventScrollReset:f.preventScrollReset,formData:x,body:h,formMethod:f.method||g,formEncType:f.encType||S,flushSync:f.flushSync})}else await l.navigate(f.action||p,{preventScrollReset:f.preventScrollReset,formData:x,body:h,formMethod:f.method||g,formEncType:f.encType||S,replace:f.replace,state:f.state,fromRouteId:s,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,o,s])}function sx(l,{relative:o}={}){let{basename:s}=A.useContext(Ke),c=A.useContext(Je);Dt(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),p={...hl(l||".",{relative:o})},g=xn();if(l==null){p.search=g.search;let S=new URLSearchParams(p.search),x=S.getAll("index");if(x.some(b=>b==="")){S.delete("index"),x.filter(T=>T).forEach(T=>S.append("index",T));let b=S.toString();p.search=b?`?${b}`:""}}return(!l||l===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(p.pathname=p.pathname==="/"?s:pn([s,p.pathname])),sl(p)}function ux(l,{relative:o}={}){let s=A.useContext(jm);Dt(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Bm("useViewTransitionState"),f=hl(l,{relative:o});if(!s.isTransitioning)return!1;let p=gn(s.currentLocation.pathname,c)||s.currentLocation.pathname,g=gn(s.nextLocation.pathname,c)||s.nextLocation.pathname;return qr(f.pathname,g)!=null||qr(f.pathname,p)!=null}var ue=function(){return ue=Object.assign||function(o){for(var s,c=1,f=arguments.length;c<f;c++){s=arguments[c];for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(o[p]=s[p])}return o},ue.apply(this,arguments)};function Yr(l,o,s){if(s||arguments.length===2)for(var c=0,f=o.length,p;c<f;c++)(p||!(c in o))&&(p||(p=Array.prototype.slice.call(o,0,c)),p[c]=o[c]);return l.concat(p||Array.prototype.slice.call(o))}var Rt="-ms-",cl="-moz-",xt="-webkit-",Um="comm",Jr="rule",Gs="decl",fx="@import",km="@keyframes",dx="@layer",Hm=Math.abs,Qs=String.fromCharCode,Ns=Object.assign;function hx(l,o){return Jt(l,0)^45?(((o<<2^Jt(l,0))<<2^Jt(l,1))<<2^Jt(l,2))<<2^Jt(l,3):0}function qm(l){return l.trim()}function mn(l,o){return(l=o.exec(l))?l[0]:l}function lt(l,o,s){return l.replace(o,s)}function _r(l,o,s){return l.indexOf(o,s)}function Jt(l,o){return l.charCodeAt(o)|0}function Ia(l,o,s){return l.slice(o,s)}function Ve(l){return l.length}function Ym(l){return l.length}function ol(l,o){return o.push(l),l}function mx(l,o){return l.map(o).join("")}function nm(l,o){return l.filter(function(s){return!mn(s,o)})}var $r=1,Pa=1,Lm=0,_e=0,kt=0,li="";function Wr(l,o,s,c,f,p,g,S){return{value:l,root:o,parent:s,type:c,props:f,children:p,line:$r,column:Pa,length:g,return:"",siblings:S}}function Gn(l,o){return Ns(Wr("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},o)}function Wa(l){for(;l.root;)l=Gn(l.root,{children:[l]});ol(l,l.siblings)}function px(){return kt}function gx(){return kt=_e>0?Jt(li,--_e):0,Pa--,kt===10&&(Pa=1,$r--),kt}function He(){return kt=_e<Lm?Jt(li,_e++):0,Pa++,kt===10&&(Pa=1,$r++),kt}function sa(){return Jt(li,_e)}function Br(){return _e}function Fr(l,o){return Ia(li,l,o)}function Ts(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xx(l){return $r=Pa=1,Lm=Ve(li=l),_e=0,[]}function vx(l){return li="",l}function Ss(l){return qm(Fr(_e-1,Ds(l===91?l+2:l===40?l+1:l)))}function bx(l){for(;(kt=sa())&&kt<33;)He();return Ts(l)>2||Ts(kt)>3?"":" "}function yx(l,o){for(;--o&&He()&&!(kt<48||kt>102||kt>57&&kt<65||kt>70&&kt<97););return Fr(l,Br()+(o<6&&sa()==32&&He()==32))}function Ds(l){for(;He();)switch(kt){case l:return _e;case 34:case 39:l!==34&&l!==39&&Ds(kt);break;case 40:l===41&&Ds(l);break;case 92:He();break}return _e}function wx(l,o){for(;He()&&l+kt!==57;)if(l+kt===84&&sa()===47)break;return"/*"+Fr(o,_e-1)+"*"+Qs(l===47?l:He())}function Sx(l){for(;!Ts(sa());)He();return Fr(l,_e)}function zx(l){return vx(Ur("",null,null,null,[""],l=xx(l),0,[0],l))}function Ur(l,o,s,c,f,p,g,S,x){for(var h=0,b=0,T=g,M=0,k=0,H=0,q=1,X=1,U=1,Z=0,Y="",F=f,V=p,I=c,J=Y;X;)switch(H=Z,Z=He()){case 40:if(H!=108&&Jt(J,T-1)==58){_r(J+=lt(Ss(Z),"&","&\f"),"&\f",Hm(h?S[h-1]:0))!=-1&&(U=-1);break}case 34:case 39:case 91:J+=Ss(Z);break;case 9:case 10:case 13:case 32:J+=bx(H);break;case 92:J+=yx(Br()-1,7);continue;case 47:switch(sa()){case 42:case 47:ol(Ax(wx(He(),Br()),o,s,x),x);break;default:J+="/"}break;case 123*q:S[h++]=Ve(J)*U;case 125*q:case 59:case 0:switch(Z){case 0:case 125:X=0;case 59+b:U==-1&&(J=lt(J,/\f/g,"")),k>0&&Ve(J)-T&&ol(k>32?im(J+";",c,s,T-1,x):im(lt(J," ","")+";",c,s,T-2,x),x);break;case 59:J+=";";default:if(ol(I=am(J,o,s,h,b,f,S,Y,F=[],V=[],T,p),p),Z===123)if(b===0)Ur(J,o,I,I,F,p,T,S,V);else switch(M===99&&Jt(J,3)===110?100:M){case 100:case 108:case 109:case 115:Ur(l,I,I,c&&ol(am(l,I,I,0,0,f,S,Y,f,F=[],T,V),V),f,V,T,S,c?F:V);break;default:Ur(J,I,I,I,[""],V,0,S,V)}}h=b=k=0,q=U=1,Y=J="",T=g;break;case 58:T=1+Ve(J),k=H;default:if(q<1){if(Z==123)--q;else if(Z==125&&q++==0&&gx()==125)continue}switch(J+=Qs(Z),Z*q){case 38:U=b>0?1:(J+="\f",-1);break;case 44:S[h++]=(Ve(J)-1)*U,U=1;break;case 64:sa()===45&&(J+=Ss(He())),M=sa(),b=T=Ve(Y=J+=Sx(Br())),Z++;break;case 45:H===45&&Ve(J)==2&&(q=0)}}return p}function am(l,o,s,c,f,p,g,S,x,h,b,T){for(var M=f-1,k=f===0?p:[""],H=Ym(k),q=0,X=0,U=0;q<c;++q)for(var Z=0,Y=Ia(l,M+1,M=Hm(X=g[q])),F=l;Z<H;++Z)(F=qm(X>0?k[Z]+" "+Y:lt(Y,/&\f/g,k[Z])))&&(x[U++]=F);return Wr(l,o,s,f===0?Jr:S,x,h,b,T)}function Ax(l,o,s,c){return Wr(l,o,s,Um,Qs(px()),Ia(l,2,-2),0,c)}function im(l,o,s,c,f){return Wr(l,o,s,Gs,Ia(l,0,c),Ia(l,c+1,-1),c,f)}function Gm(l,o,s){switch(hx(l,o)){case 5103:return xt+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xt+l+l;case 4789:return cl+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return xt+l+cl+l+Rt+l+l;case 5936:switch(Jt(l,o+11)){case 114:return xt+l+Rt+lt(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return xt+l+Rt+lt(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return xt+l+Rt+lt(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return xt+l+Rt+l+l;case 6165:return xt+l+Rt+"flex-"+l+l;case 5187:return xt+l+lt(l,/(\w+).+(:[^]+)/,xt+"box-$1$2"+Rt+"flex-$1$2")+l;case 5443:return xt+l+Rt+"flex-item-"+lt(l,/flex-|-self/g,"")+(mn(l,/flex-|baseline/)?"":Rt+"grid-row-"+lt(l,/flex-|-self/g,""))+l;case 4675:return xt+l+Rt+"flex-line-pack"+lt(l,/align-content|flex-|-self/g,"")+l;case 5548:return xt+l+Rt+lt(l,"shrink","negative")+l;case 5292:return xt+l+Rt+lt(l,"basis","preferred-size")+l;case 6060:return xt+"box-"+lt(l,"-grow","")+xt+l+Rt+lt(l,"grow","positive")+l;case 4554:return xt+lt(l,/([^-])(transform)/g,"$1"+xt+"$2")+l;case 6187:return lt(lt(lt(l,/(zoom-|grab)/,xt+"$1"),/(image-set)/,xt+"$1"),l,"")+l;case 5495:case 3959:return lt(l,/(image-set\([^]*)/,xt+"$1$`$1");case 4968:return lt(lt(l,/(.+:)(flex-)?(.*)/,xt+"box-pack:$3"+Rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xt+l+l;case 4200:if(!mn(l,/flex-|baseline/))return Rt+"grid-column-align"+Ia(l,o)+l;break;case 2592:case 3360:return Rt+lt(l,"template-","")+l;case 4384:case 3616:return s&&s.some(function(c,f){return o=f,mn(c.props,/grid-\w+-end/)})?~_r(l+(s=s[o].value),"span",0)?l:Rt+lt(l,"-start","")+l+Rt+"grid-row-span:"+(~_r(s,"span",0)?mn(s,/\d+/):+mn(s,/\d+/)-+mn(l,/\d+/))+";":Rt+lt(l,"-start","")+l;case 4896:case 4128:return s&&s.some(function(c){return mn(c.props,/grid-\w+-start/)})?l:Rt+lt(lt(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return lt(l,/(.+)-inline(.+)/,xt+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ve(l)-1-o>6)switch(Jt(l,o+1)){case 109:if(Jt(l,o+4)!==45)break;case 102:return lt(l,/(.+:)(.+)-([^]+)/,"$1"+xt+"$2-$3$1"+cl+(Jt(l,o+3)==108?"$3":"$2-$3"))+l;case 115:return~_r(l,"stretch",0)?Gm(lt(l,"stretch","fill-available"),o,s)+l:l}break;case 5152:case 5920:return lt(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,p,g,S,x,h){return Rt+f+":"+p+h+(g?Rt+f+"-span:"+(S?x:+x-+p)+h:"")+l});case 4949:if(Jt(l,o+6)===121)return lt(l,":",":"+xt)+l;break;case 6444:switch(Jt(l,Jt(l,14)===45?18:11)){case 120:return lt(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xt+(Jt(l,14)===45?"inline-":"")+"box$3$1"+xt+"$2$3$1"+Rt+"$2box$3")+l;case 100:return lt(l,":",":"+Rt)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return lt(l,"scroll-","scroll-snap-")+l}return l}function Lr(l,o){for(var s="",c=0;c<l.length;c++)s+=o(l[c],c,l,o)||"";return s}function Ex(l,o,s,c){switch(l.type){case dx:if(l.children.length)break;case fx:case Gs:return l.return=l.return||l.value;case Um:return"";case km:return l.return=l.value+"{"+Lr(l.children,c)+"}";case Jr:if(!Ve(l.value=l.props.join(",")))return""}return Ve(s=Lr(l.children,c))?l.return=l.value+"{"+s+"}":""}function jx(l){var o=Ym(l);return function(s,c,f,p){for(var g="",S=0;S<o;S++)g+=l[S](s,c,f,p)||"";return g}}function Rx(l){return function(o){o.root||(o=o.return)&&l(o)}}function Nx(l,o,s,c){if(l.length>-1&&!l.return)switch(l.type){case Gs:l.return=Gm(l.value,l.length,s);return;case km:return Lr([Gn(l,{value:lt(l.value,"@","@"+xt)})],c);case Jr:if(l.length)return mx(s=l.props,function(f){switch(mn(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wa(Gn(l,{props:[lt(f,/:(read-\w+)/,":"+cl+"$1")]})),Wa(Gn(l,{props:[f]})),Ns(l,{props:nm(s,c)});break;case"::placeholder":Wa(Gn(l,{props:[lt(f,/:(plac\w+)/,":"+xt+"input-$1")]})),Wa(Gn(l,{props:[lt(f,/:(plac\w+)/,":"+cl+"$1")]})),Wa(Gn(l,{props:[lt(f,/:(plac\w+)/,Rt+"input-$1")]})),Wa(Gn(l,{props:[f]})),Ns(l,{props:nm(s,c)});break}return""})}}var Tx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ye={},ti=typeof process<"u"&&ye!==void 0&&(ye.REACT_APP_SC_ATTR||ye.SC_ATTR)||"data-styled",Qm="active",Xm="data-styled-version",Ir="6.1.19",Xs=`/*!sc*/
`,Gr=typeof window<"u"&&typeof document<"u",Dx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ye!==void 0&&ye.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ye.REACT_APP_SC_DISABLE_SPEEDY!==""?ye.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ye.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ye!==void 0&&ye.SC_DISABLE_SPEEDY!==void 0&&ye.SC_DISABLE_SPEEDY!==""&&ye.SC_DISABLE_SPEEDY!=="false"&&ye.SC_DISABLE_SPEEDY),Pr=Object.freeze([]),ei=Object.freeze({});function Ox(l,o,s){return s===void 0&&(s=ei),l.theme!==s.theme&&l.theme||o||s.theme}var Vm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Cx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Mx=/(^-|-$)/g;function lm(l){return l.replace(Cx,"-").replace(Mx,"")}var _x=/(a)(d)/gi,Dr=52,rm=function(l){return String.fromCharCode(l+(l>25?39:97))};function Os(l){var o,s="";for(o=Math.abs(l);o>Dr;o=o/Dr|0)s=rm(o%Dr)+s;return(rm(o%Dr)+s).replace(_x,"$1-$2")}var zs,Zm=5381,Fa=function(l,o){for(var s=o.length;s;)l=33*l^o.charCodeAt(--s);return l},Km=function(l){return Fa(Zm,l)};function Bx(l){return Os(Km(l)>>>0)}function Ux(l){return l.displayName||l.name||"Component"}function As(l){return typeof l=="string"&&!0}var Jm=typeof Symbol=="function"&&Symbol.for,$m=Jm?Symbol.for("react.memo"):60115,kx=Jm?Symbol.for("react.forward_ref"):60112,Hx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Wm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yx=((zs={})[kx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zs[$m]=Wm,zs);function om(l){return("type"in(o=l)&&o.type.$$typeof)===$m?Wm:"$$typeof"in l?Yx[l.$$typeof]:Hx;var o}var Lx=Object.defineProperty,Gx=Object.getOwnPropertyNames,cm=Object.getOwnPropertySymbols,Qx=Object.getOwnPropertyDescriptor,Xx=Object.getPrototypeOf,sm=Object.prototype;function Fm(l,o,s){if(typeof o!="string"){if(sm){var c=Xx(o);c&&c!==sm&&Fm(l,c,s)}var f=Gx(o);cm&&(f=f.concat(cm(o)));for(var p=om(l),g=om(o),S=0;S<f.length;++S){var x=f[S];if(!(x in qx||s&&s[x]||g&&x in g||p&&x in p)){var h=Qx(o,x);try{Lx(l,x,h)}catch{}}}}return l}function ni(l){return typeof l=="function"}function Vs(l){return typeof l=="object"&&"styledComponentId"in l}function ca(l,o){return l&&o?"".concat(l," ").concat(o):l||o||""}function um(l,o){if(l.length===0)return"";for(var s=l[0],c=1;c<l.length;c++)s+=l[c];return s}function ul(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Cs(l,o,s){if(s===void 0&&(s=!1),!s&&!ul(l)&&!Array.isArray(l))return o;if(Array.isArray(o))for(var c=0;c<o.length;c++)l[c]=Cs(l[c],o[c]);else if(ul(o))for(var c in o)l[c]=Cs(l[c],o[c]);return l}function Zs(l,o){Object.defineProperty(l,"toString",{value:o})}function ml(l){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Vx=(function(){function l(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return l.prototype.indexOfGroup=function(o){for(var s=0,c=0;c<o;c++)s+=this.groupSizes[c];return s},l.prototype.insertRules=function(o,s){if(o>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,p=f;o>=p;)if((p<<=1)<0)throw ml(16,"".concat(o));this.groupSizes=new Uint32Array(p),this.groupSizes.set(c),this.length=p;for(var g=f;g<p;g++)this.groupSizes[g]=0}for(var S=this.indexOfGroup(o+1),x=(g=0,s.length);g<x;g++)this.tag.insertRule(S,s[g])&&(this.groupSizes[o]++,S++)},l.prototype.clearGroup=function(o){if(o<this.length){var s=this.groupSizes[o],c=this.indexOfGroup(o),f=c+s;this.groupSizes[o]=0;for(var p=c;p<f;p++)this.tag.deleteRule(c)}},l.prototype.getGroup=function(o){var s="";if(o>=this.length||this.groupSizes[o]===0)return s;for(var c=this.groupSizes[o],f=this.indexOfGroup(o),p=f+c,g=f;g<p;g++)s+="".concat(this.tag.getRule(g)).concat(Xs);return s},l})(),kr=new Map,Qr=new Map,Hr=1,Or=function(l){if(kr.has(l))return kr.get(l);for(;Qr.has(Hr);)Hr++;var o=Hr++;return kr.set(l,o),Qr.set(o,l),o},Zx=function(l,o){Hr=o+1,kr.set(l,o),Qr.set(o,l)},Kx="style[".concat(ti,"][").concat(Xm,'="').concat(Ir,'"]'),Jx=new RegExp("^".concat(ti,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$x=function(l,o,s){for(var c,f=s.split(","),p=0,g=f.length;p<g;p++)(c=f[p])&&l.registerName(o,c)},Wx=function(l,o){for(var s,c=((s=o.textContent)!==null&&s!==void 0?s:"").split(Xs),f=[],p=0,g=c.length;p<g;p++){var S=c[p].trim();if(S){var x=S.match(Jx);if(x){var h=0|parseInt(x[1],10),b=x[2];h!==0&&(Zx(b,h),$x(l,b,x[3]),l.getTag().insertRules(h,f)),f.length=0}else f.push(S)}}},fm=function(l){for(var o=document.querySelectorAll(Kx),s=0,c=o.length;s<c;s++){var f=o[s];f&&f.getAttribute(ti)!==Qm&&(Wx(l,f),f.parentNode&&f.parentNode.removeChild(f))}};function Fx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Im=function(l){var o=document.head,s=l||o,c=document.createElement("style"),f=(function(S){var x=Array.from(S.querySelectorAll("style[".concat(ti,"]")));return x[x.length-1]})(s),p=f!==void 0?f.nextSibling:null;c.setAttribute(ti,Qm),c.setAttribute(Xm,Ir);var g=Fx();return g&&c.setAttribute("nonce",g),s.insertBefore(c,p),c},Ix=(function(){function l(o){this.element=Im(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(s){if(s.sheet)return s.sheet;for(var c=document.styleSheets,f=0,p=c.length;f<p;f++){var g=c[f];if(g.ownerNode===s)return g}throw ml(17)})(this.element),this.length=0}return l.prototype.insertRule=function(o,s){try{return this.sheet.insertRule(s,o),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},l.prototype.getRule=function(o){var s=this.sheet.cssRules[o];return s&&s.cssText?s.cssText:""},l})(),Px=(function(){function l(o){this.element=Im(o),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(o,s){if(o<=this.length&&o>=0){var c=document.createTextNode(s);return this.element.insertBefore(c,this.nodes[o]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},l.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},l})(),tv=(function(){function l(o){this.rules=[],this.length=0}return l.prototype.insertRule=function(o,s){return o<=this.length&&(this.rules.splice(o,0,s),this.length++,!0)},l.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},l.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},l})(),dm=Gr,ev={isServer:!Gr,useCSSOMInjection:!Dx},Pm=(function(){function l(o,s,c){o===void 0&&(o=ei),s===void 0&&(s={});var f=this;this.options=ue(ue({},ev),o),this.gs=s,this.names=new Map(c),this.server=!!o.isServer,!this.server&&Gr&&dm&&(dm=!1,fm(this)),Zs(this,function(){return(function(p){for(var g=p.getTag(),S=g.length,x="",h=function(T){var M=(function(U){return Qr.get(U)})(T);if(M===void 0)return"continue";var k=p.names.get(M),H=g.getGroup(T);if(k===void 0||!k.size||H.length===0)return"continue";var q="".concat(ti,".g").concat(T,'[id="').concat(M,'"]'),X="";k!==void 0&&k.forEach(function(U){U.length>0&&(X+="".concat(U,","))}),x+="".concat(H).concat(q,'{content:"').concat(X,'"}').concat(Xs)},b=0;b<S;b++)h(b);return x})(f)})}return l.registerId=function(o){return Or(o)},l.prototype.rehydrate=function(){!this.server&&Gr&&fm(this)},l.prototype.reconstructWithOptions=function(o,s){return s===void 0&&(s=!0),new l(ue(ue({},this.options),o),this.gs,s&&this.names||void 0)},l.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(s){var c=s.useCSSOMInjection,f=s.target;return s.isServer?new tv(f):c?new Ix(f):new Px(f)})(this.options),new Vx(o)));var o},l.prototype.hasNameForId=function(o,s){return this.names.has(o)&&this.names.get(o).has(s)},l.prototype.registerName=function(o,s){if(Or(o),this.names.has(o))this.names.get(o).add(s);else{var c=new Set;c.add(s),this.names.set(o,c)}},l.prototype.insertRules=function(o,s,c){this.registerName(o,s),this.getTag().insertRules(Or(o),c)},l.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},l.prototype.clearRules=function(o){this.getTag().clearGroup(Or(o)),this.clearNames(o)},l.prototype.clearTag=function(){this.tag=void 0},l})(),nv=/&/g,av=/^\s*\/\/.*$/gm;function tp(l,o){return l.map(function(s){return s.type==="rule"&&(s.value="".concat(o," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(o," ")),s.props=s.props.map(function(c){return"".concat(o," ").concat(c)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=tp(s.children,o)),s})}function iv(l){var o,s,c,f=ei,p=f.options,g=p===void 0?ei:p,S=f.plugins,x=S===void 0?Pr:S,h=function(M,k,H){return H.startsWith(s)&&H.endsWith(s)&&H.replaceAll(s,"").length>0?".".concat(o):M},b=x.slice();b.push(function(M){M.type===Jr&&M.value.includes("&")&&(M.props[0]=M.props[0].replace(nv,s).replace(c,h))}),g.prefix&&b.push(Nx),b.push(Ex);var T=function(M,k,H,q){k===void 0&&(k=""),H===void 0&&(H=""),q===void 0&&(q="&"),o=q,s=k,c=new RegExp("\\".concat(s,"\\b"),"g");var X=M.replace(av,""),U=zx(H||k?"".concat(H," ").concat(k," { ").concat(X," }"):X);g.namespace&&(U=tp(U,g.namespace));var Z=[];return Lr(U,jx(b.concat(Rx(function(Y){return Z.push(Y)})))),Z};return T.hash=x.length?x.reduce(function(M,k){return k.name||ml(15),Fa(M,k.name)},Zm).toString():"",T}var lv=new Pm,Ms=iv(),ep=Me.createContext({shouldForwardProp:void 0,styleSheet:lv,stylis:Ms});ep.Consumer;Me.createContext(void 0);function hm(){return A.useContext(ep)}var rv=(function(){function l(o,s){var c=this;this.inject=function(f,p){p===void 0&&(p=Ms);var g=c.name+p.hash;f.hasNameForId(c.id,g)||f.insertRules(c.id,g,p(c.rules,g,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=s,Zs(this,function(){throw ml(12,String(c.name))})}return l.prototype.getName=function(o){return o===void 0&&(o=Ms),this.name+o.hash},l})(),ov=function(l){return l>="A"&&l<="Z"};function mm(l){for(var o="",s=0;s<l.length;s++){var c=l[s];if(s===1&&c==="-"&&l[0]==="-")return l;ov(c)?o+="-"+c.toLowerCase():o+=c}return o.startsWith("ms-")?"-"+o:o}var np=function(l){return l==null||l===!1||l===""},ap=function(l){var o,s,c=[];for(var f in l){var p=l[f];l.hasOwnProperty(f)&&!np(p)&&(Array.isArray(p)&&p.isCss||ni(p)?c.push("".concat(mm(f),":"),p,";"):ul(p)?c.push.apply(c,Yr(Yr(["".concat(f," {")],ap(p),!1),["}"],!1)):c.push("".concat(mm(f),": ").concat((o=f,(s=p)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||o in Tx||o.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return c};function ua(l,o,s,c){if(np(l))return[];if(Vs(l))return[".".concat(l.styledComponentId)];if(ni(l)){if(!ni(p=l)||p.prototype&&p.prototype.isReactComponent||!o)return[l];var f=l(o);return ua(f,o,s,c)}var p;return l instanceof rv?s?(l.inject(s,c),[l.getName(c)]):[l]:ul(l)?ap(l):Array.isArray(l)?Array.prototype.concat.apply(Pr,l.map(function(g){return ua(g,o,s,c)})):[l.toString()]}function cv(l){for(var o=0;o<l.length;o+=1){var s=l[o];if(ni(s)&&!Vs(s))return!1}return!0}var sv=Km(Ir),uv=(function(){function l(o,s,c){this.rules=o,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&cv(o),this.componentId=s,this.baseHash=Fa(sv,s),this.baseStyle=c,Pm.registerId(s)}return l.prototype.generateAndInjectStyles=function(o,s,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,s,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))f=ca(f,this.staticRulesId);else{var p=um(ua(this.rules,o,s,c)),g=Os(Fa(this.baseHash,p)>>>0);if(!s.hasNameForId(this.componentId,g)){var S=c(p,".".concat(g),void 0,this.componentId);s.insertRules(this.componentId,g,S)}f=ca(f,g),this.staticRulesId=g}else{for(var x=Fa(this.baseHash,c.hash),h="",b=0;b<this.rules.length;b++){var T=this.rules[b];if(typeof T=="string")h+=T;else if(T){var M=um(ua(T,o,s,c));x=Fa(x,M+b),h+=M}}if(h){var k=Os(x>>>0);s.hasNameForId(this.componentId,k)||s.insertRules(this.componentId,k,c(h,".".concat(k),void 0,this.componentId)),f=ca(f,k)}}return f},l})(),ip=Me.createContext(void 0);ip.Consumer;var Es={};function fv(l,o,s){var c=Vs(l),f=l,p=!As(l),g=o.attrs,S=g===void 0?Pr:g,x=o.componentId,h=x===void 0?(function(F,V){var I=typeof F!="string"?"sc":lm(F);Es[I]=(Es[I]||0)+1;var J="".concat(I,"-").concat(Bx(Ir+I+Es[I]));return V?"".concat(V,"-").concat(J):J})(o.displayName,o.parentComponentId):x,b=o.displayName,T=b===void 0?(function(F){return As(F)?"styled.".concat(F):"Styled(".concat(Ux(F),")")})(l):b,M=o.displayName&&o.componentId?"".concat(lm(o.displayName),"-").concat(o.componentId):o.componentId||h,k=c&&f.attrs?f.attrs.concat(S).filter(Boolean):S,H=o.shouldForwardProp;if(c&&f.shouldForwardProp){var q=f.shouldForwardProp;if(o.shouldForwardProp){var X=o.shouldForwardProp;H=function(F,V){return q(F,V)&&X(F,V)}}else H=q}var U=new uv(s,M,c?f.componentStyle:void 0);function Z(F,V){return(function(I,J,wt){var vt=I.attrs,ne=I.componentStyle,ie=I.defaultProps,Lt=I.foldedComponentIds,$e=I.styledComponentId,We=I.target,Gt=Me.useContext(ip),D=hm(),G=I.shouldForwardProp||D.shouldForwardProp,P=Ox(J,Gt,ie)||ei,ct=(function(st,et,Qt){for(var gt,It=ue(ue({},et),{className:void 0,theme:Qt}),Qn=0;Qn<st.length;Qn+=1){var Fe=ni(gt=st[Qn])?gt(It):gt;for(var ze in Fe)It[ze]=ze==="className"?ca(It[ze],Fe[ze]):ze==="style"?ue(ue({},It[ze]),Fe[ze]):Fe[ze]}return et.className&&(It.className=ca(It.className,et.className)),It})(vt,J,P),y=ct.as||We,B={};for(var L in ct)ct[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&ct.theme===P||(L==="forwardedAs"?B.as=ct.forwardedAs:G&&!G(L,y)||(B[L]=ct[L]));var Q=(function(st,et){var Qt=hm(),gt=st.generateAndInjectStyles(et,Qt.styleSheet,Qt.stylis);return gt})(ne,ct),W=ca(Lt,$e);return Q&&(W+=" "+Q),ct.className&&(W+=" "+ct.className),B[As(y)&&!Vm.has(y)?"class":"className"]=W,wt&&(B.ref=wt),A.createElement(y,B)})(Y,F,V)}Z.displayName=T;var Y=Me.forwardRef(Z);return Y.attrs=k,Y.componentStyle=U,Y.displayName=T,Y.shouldForwardProp=H,Y.foldedComponentIds=c?ca(f.foldedComponentIds,f.styledComponentId):"",Y.styledComponentId=M,Y.target=c?f.target:l,Object.defineProperty(Y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=c?(function(V){for(var I=[],J=1;J<arguments.length;J++)I[J-1]=arguments[J];for(var wt=0,vt=I;wt<vt.length;wt++)Cs(V,vt[wt],!0);return V})({},f.defaultProps,F):F}}),Zs(Y,function(){return".".concat(Y.styledComponentId)}),p&&Fm(Y,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Y}function pm(l,o){for(var s=[l[0]],c=0,f=o.length;c<f;c+=1)s.push(o[c],l[c+1]);return s}var gm=function(l){return Object.assign(l,{isCss:!0})};function dv(l){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];if(ni(l)||ul(l))return gm(ua(pm(Pr,Yr([l],o,!0))));var c=l;return o.length===0&&c.length===1&&typeof c[0]=="string"?ua(c):gm(ua(pm(c,o)))}function _s(l,o,s){if(s===void 0&&(s=ei),!o)throw ml(1,o);var c=function(f){for(var p=[],g=1;g<arguments.length;g++)p[g-1]=arguments[g];return l(o,s,dv.apply(void 0,Yr([f],p,!1)))};return c.attrs=function(f){return _s(l,o,ue(ue({},s),{attrs:Array.prototype.concat(s.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return _s(l,o,ue(ue({},s),f))},c}var lp=function(l){return _s(fv,l)},pt=lp;Vm.forEach(function(l){pt[l]=lp(l)});const hv=pt.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 10px;
  background-color: black;
  color: white;

  .content-section {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .content-section .text1 {
    width: 90%;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
  }

  .content-section .content-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
  .content-section .content-controls input {
    width: 100%;
    padding: 15px;
    background-color: #000000a8;
    border: 1px solid #423e3eff;
    border-radius: 5px;
    max-width: 400px;
    color: white;
  }

  .content-section .content-controls button {
    margin-top: 12px;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 5px;
    border: none;
    background-color: #e50914;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;
    margin-bottom: 20px;

    &:hover {
      background-color: #be0811ff;
    }
  }
  .doubt-container {
    margin-top: 20px;
    margin-bottom: 50px;
    align-items: start;
    width: 90%;
  }

  .doubt-container span {
    text-decoration: underline;
    cursor: pointer;
    &:hover{
        color: #8d8585ff;

    }

  }
  .doubt {
    color: #b3b3b3;
  }

  .p1 {
    width: 90%;
    font-size: 0.9rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    color: #b3b3b3;
    text-decoration: underline;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .p1 p{
    &:hover{
        color: #8d8585ff;
    }
  }

  .p2 {
    width: 90%;
    font-size: 0.9rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    color: #b3b3b3;
    text-decoration: underline;
    margin-bottom: 10px;
    cursor: pointer;
  }

   .p2 p{
    &:hover{
        color: #8d8585ff;
    }
  }

  .p3 {
    width: 90%;
    font-size: 0.9rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    color: #b3b3b3;
    text-decoration: underline;
    margin-bottom: 10px;
    cursor: pointer;
  }
   .p3 p{
    &:hover{
        color: #8d8585ff;
    }
  }

  .p4 {
    width: 90%;
    font-size: 0.9rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    color: #b3b3b3;
    text-decoration: underline;
    margin-bottom: 10px;
    cursor: pointer;
  }

   .p4 p{
    &:hover{
        color: #8d8585ff;
    }
  }

  .p5 {
    width: 90%;
    font-size: 0.9rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    color: #b3b3b3;
    text-decoration: underline;
    cursor: pointer;
  }

   .p5 p{
    &:hover{
        color: #8d8585ff;
    }
  }

  .final {
    width: 90%;
    align-items: start;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 50px;
    color: #b3b3b3;
  }

  select {
    padding: 5px;
    font-weight: normal;
    border-radius: 5px;
    font-size: 0.75rem;
    text-align: center;
    background-color: #0000008c;
    color: white;
    font-size: 1rem;
    width: 150px;
    text-align: center;
    margin-bottom: 30px;
  }

  option {
    background-color: white;
    color: black;
  }

  .final p {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 600px) {
    .content-section .content-controls {
      flex-direction: row;
      width: 100%;
      gap: 10px;
      margin-bottom: 35px;
    }

    .content-section .content-controls input {
      padding: 15px;
      font-size: 1rem;
    }

    .content-section .content-controls button {
      margin-bottom: 0;
      margin-top: 0;
      padding: 15px;
      font-size: 1rem;
    }
    .p1 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .p2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .p3 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .p4 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 768px) {
    .content-section .text1 {
      font-size: 1.1rem;
    }
    .content-section p {
      font-size: 1.1rem;
    }

    .content-section .content-controls input {
      font-size: 1.1rem;
    }
    .content-section .content-controls button {
      font-size: 1.1rem;
    }
    select {
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: 992px) {
    .content-section .text1 {
      font-size: 1.2rem;
    }

    .content-section .content-controls input {
      font-size: 1.2rem;
    }
    .content-section .content-controls button {
      font-size: 1.2rem;
    }
    select {
      font-size: 1.2rem;
    }

    .p1 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    .p2 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    .p3 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    .p4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;function mv(){return d.jsx(hv,{children:d.jsxs("section",{className:"content-section",children:[d.jsx("p",{className:"text1",children:"Quer assistir? Informe seu email para criar ou reiniciar sua assinatura."}),d.jsxs("div",{className:"content-controls",children:[d.jsx("input",{type:"text",placeholder:"Email"}),d.jsxs("button",{children:["Vamos Lá ",d.jsx("span",{children:">"})," "]})]}),d.jsx("div",{className:"doubt-container",children:d.jsxs("p",{className:"doubt",children:["Dúvidas? Ligue para ",d.jsx("span",{children:"0800 591 2876"})]})}),d.jsxs("div",{className:"p1",children:[d.jsx("p",{children:"Perguntas Frequentes"}),d.jsx("p",{children:"Central de Ajuda"}),d.jsx("p",{children:"Conta"}),d.jsx("p",{children:"Media Center"})]}),d.jsxs("div",{className:"p2",children:[d.jsx("p",{children:"Relações com Investidores"}),d.jsx("p",{children:"Carreiras"}),d.jsx("p",{children:"Resgatar cartão pré-pago"}),d.jsx("p",{children:"Comprar cartão pré-pago"})]}),d.jsxs("div",{className:"p3",children:[d.jsx("p",{children:"Formas de assistir"}),d.jsx("p",{children:"Termos de Uso"}),d.jsx("p",{children:"Privacidade"}),d.jsx("p",{children:"Preferências de cookies"})]}),d.jsxs("div",{className:"p4",children:[d.jsx("p",{children:"Informações corporativas"}),d.jsx("p",{children:"Entre em contato"}),d.jsx("p",{children:"Teste de velocidade"}),d.jsx("p",{children:"Avisos legais"})]}),d.jsx("div",{className:"p5",children:d.jsx("p",{children:"Só na Netflix"})}),d.jsxs("div",{className:"final",children:[d.jsxs("select",{children:[d.jsx("option",{value:"portugues",children:"Português"}),d.jsx("option",{value:"ingles",children:"Inglês"})]}),d.jsx("p",{children:"Netflix Brasil"})]})]})})}const pv=pt.div`
  width: 100%;
  padding: 20px;
  padding-bottom: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.9) 0%,
  rgba(0, 0, 0, 0.6) 40%,
  rgba(0, 0, 0, 0.3) 70%,
  rgba(0, 0, 0, 0) 100%
);

  img {
    width: 100px;
  }

  .user-controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .user-controls select {
    padding: 5px;
    font-weight: normal;
    border-radius: 5px;
    font-size: 0.75rem;
    text-align: center;
    background-color: #0000008c;
    color: white;
  }

  .user-controls option{
    background-color: white;
    color:black;
  }

  .user-controls button {
    padding: 5px;
    font-weight: 550;
    border-radius: 5px;
    border: none;
    font-size: 0.75rem;
    background-color: #e50914;
    color: white;
    width: 65px;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      background-color: #be0811ff;
    }
  }

  @media screen and (min-width: 530px) {
    img {
      width: 130px;
    }

    .user-controls {
      gap: 20px;
    }

    .user-controls select {
      font-size: 0.85rem;
    }
    .user-controls button {
      font-size: 0.85rem;
    }
  }

  @media screen and (min-width: 768px) {
    padding-inline: 30px;

    img {
      width: 150px;
    }

    .user-controls select {
      font-size: 1rem;
    }
    .user-controls button {
      font-size: 1rem;
      width: 80px;
    }
  }

  @media screen and (min-width: 992px) {
    img {
      width: 170px;
    }
    .user-controls {
    }
    .user-controls select {
      font-size: 1.1rem;
      height: 38px;

      width: 160px;
    }
    .user-controls button {
      font-size: 1.1rem;
      width: 90px;
      padding: 8px;
    }
  }

  @media screen and (min-width: 1200px) {
    img {
      width: 180px;
    }
    .user-controls {
    }
    .user-controls select {
      font-size: 1.2rem;
      height: 40px;
      width: 170px;
    }
    .user-controls button {
      font-size: 1.2rem;
      width: 100px;
      padding: 8px;
    }
  }
`,Ks="/Movies-ReactJS/assets/Logonetflix-cJzkA86F.png";function gv(){const l=Ht(),o=()=>{l("/sign-in")};return d.jsxs(pv,{children:[d.jsx("img",{src:Ks,alt:"Logo da Netflix"}),d.jsxs("div",{className:"user-controls",children:[d.jsxs("select",{children:[d.jsx("option",{value:"portugues",children:"Português"}),d.jsx("option",{value:"ingles",children:"Inglês"})]}),d.jsx("button",{onClick:o,children:"Entrar"})]})]})}const xv="/Movies-ReactJS/assets/background-G0Np5zM9.jpg",vv=pt.div`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  width: 100%;
  height: 100vh;
  background-image: url(${xv});
  background-position: center left;
  background-size: cover;
  color: white;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
 



  .content-section{
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-bottom: 20px;
  }
  
  .content-section h1{
    font-family: 'Bebas Neue';
    font-size: 2.3rem;
    text-align: center;
    width: 80%;
    text-shadow: 2px 2px 4px #000000c2;
  }

    .content-section p{
    font-size: 1rem;
    text-align: center;
    width: 80%;
    text-shadow: 2px 2px 4px #000000c2;
    
  }
   .content-section .controls{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

  }

  .content-section .p2{
    font-size: 1rem;
    text-align: center;
    width: 80%;
  }

  .content-section input{
    width: 80%;
    padding: 15px;
    background-color: #000000a8;
    border: 1px solid #423e3eff;
    border-radius: 5px;
    max-width: 400px;
    color: white;
  }

  .content-section button{
    margin-top: 12px;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 5px;
    border: none;
    background-color: #e50914;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: .4s ease;
    

    &:hover{
    background-color: #be0811ff;

    }
  }
.content-section button span{
    font-family:sans-serif;
}

@media screen and (min-width:530px){
    .content-section h1{
        font-size: 2.4rem;
    }

     .content-section p{
        font-size: 1rem;
    }

     .content-section .p2{
        font-size: 1rem;
    }

    .content-section button{
        font-size: 1.3rem;
    }
}


@media screen and (min-width:768px){
    .content-section h1{
        font-size: 2.8rem;
    }

      .content-section p{
        font-size: 1.1rem;
    }

     .content-section .p2{
        font-size: 1.1rem;
    }


    .content-section .controls{
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 10px;
    }

     .content-section input{
        width: 100%;
        font-size: 1.3rem;
        padding: 15px;
    }

    .content-section button{
        font-size: 1.3rem;
        padding: 15px;
        margin-top: 0;
    }
}
 @media screen and (min-width:992px){
    .content-section h1{
        font-size: 3.1rem;
    }

     .content-section p{
        font-size: 1.2rem;
    }

     .content-section .p2{
        font-size: 1.2rem;
    }


    .content-section .controls{
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 10px;
    }

     .content-section input{
        font-size: 1.3rem;
        padding: 15px;
    }

    .content-section button{
        font-size: 1.3rem;
        padding: 15px;
        margin-top: 0;
    }
}

@media screen and (min-width:1200px){
   
    .content-section h1{
        
        font-size: 4rem;
    }


    .content-section .controls{
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 10px;
        
    }
       .content-section p{
        font-size: 1.5rem;
    }

     .content-section .p2{
        font-size: 1.5rem;
    }

     .content-section input{
        font-size: 1.5rem;
        padding: 15px;
    }

    .content-section button{
        font-size: 1.5rem;
        padding: 15px;
        margin-top: 0;
        width: 170px;
    }
}
  
  `;function bv(){const[l,o]=A.useState(""),s=Ht(),c=()=>{if(!l.trim()){alert("Digite o seu email!");return}s("/sign-in",{state:{email:l}})};return d.jsx(d.Fragment,{children:d.jsxs(vv,{children:[d.jsx(gv,{}),d.jsxs("section",{className:"content-section",children:[d.jsx("h1",{children:"Filmes, Séries e muito mais, sem limites"}),d.jsx("p",{children:"Assista onde quiser. Cancele quando quiser"}),d.jsx("p",{className:"p2",children:"Quer assistir? Informe seu email para criar ou reiniciar sua assinatura."}),d.jsxs("div",{className:"controls",children:[d.jsx("input",{type:"text",placeholder:"Email",value:l,onChange:f=>o(f.target.value)}),d.jsxs("button",{onClick:c,children:["Vamos Lá ",d.jsx("span",{children:">"})]})]})]})]})})}const yv=pt.div`
  width: 100%;
  height: 200px;

  /* gradiente vertical suave no topo + gradiente horizontal de cores */
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 60%
    ),
    linear-gradient(90deg, #17002e, #6a0268, #8b0000);

  /* sombra suave (opcional) para reforçar a transição */
  box-shadow: inset 0 20px 50px rgba(0, 0, 0, 0.4);

  .content-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    gap: 20px;
    width: 100%;
    padding: 10px;
  }
  .content-section img {
    width: 70px;
  }
  .content-section .content {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }

  .content-section .content h2 {
    font-size: 1rem;
    color: white;
  }

  .content-section .content p {
    font-size: 0.9rem;
    color: white;
  }

  .content-section .content a {
    background-color: #000000b6;
    border-radius: 5px;
    padding: 5px;
    text-decoration: none;
    color: white;
    transition: .4s ease;
    &:hover{
     background-color: white;
    color:black;
    }
  }

  @media screen and (min-width: 530px) {
    .content-section img{
        width: 80px;
        margin-left: 20px;
    }

    .content-section .content h2 {
        font-size: 1.2rem;
    }

     .content-section .content p {
        font-size: 1.1rem;
    }
    .content-section .content a {
        font-size: 1.1rem;
    }
  }

   @media screen and (min-width: 768px) {
    .content-section{
        justify-content: center;
    }
    .content-section img{
        width: 90px;
        
    }

    .content-section .content h2 {
        font-size: 1.3rem;
    }

     .content-section .content p {
        font-size: 1.1rem;
    }
    .content-section .content a {
        font-size: 1.1rem;
        padding: 8px;
    }
  }

     @media screen and (min-width: 992px) {
    .content-section{
        justify-content: center;
    }
    .content-section img{
        width: 100px;
        
    }

    .content-section .content h2 {
        font-size: 1.4rem;
    }

    
   
  }
`,wv="/Movies-ReactJS/assets/pipoca-C290b5xr.png";function Sv(){return d.jsx(yv,{children:d.jsxs("section",{className:"content-section",children:[d.jsx("img",{src:wv,alt:"Imagem da pipoca"}),d.jsxs("div",{className:"content",children:[d.jsx("h2",{children:"A Netflix que você adora por apenas R$ 20,90."}),d.jsx("p",{children:"Assine o plano Padrão com anúncios."}),d.jsx(Ls,{to:"/",children:" Saiba Mais > "})]})]})})}const zv=pt.div`
  width: 100%;
  height: 80vh;
  background-color: black;
  color: white;
   display: flex;
  align-items: center;
  justify-content: center;


  .content-section {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    text-align: center;
  }

  .content-section h2 {
    font-size: 1.8rem;
    /* position: relative;
    bottom: 50px; */
    margin-bottom: 50px;
  }

  .content-section p {
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
  }

  .content-section img {
    width: 250px;
  }

  @media screen and (min-width: 530px) {
    .content-section{
      align-items: center;
      justify-items: center;
    }
    .content-section h2 {
      font-size: 2rem;
    }

    .content-section p {
      font-size: 1rem;
    }

    .content-section img {
      width: 270px;
    }
  }

  @media screen and (min-width: 800px) {
    .content-section {
      flex-direction: row;
      text-align: start;
      justify-content: space-between;
      padding: 20px;

   
    
    }
    .content-section h2 {
      font-size: 2.2rem;
      bottom: 0;
      margin-bottom: 10px;
    }

    .content-section p {
      font-size: 1.1rem;
      text-align: start;
      width: 500px;
    }

    .content-section img {
      width: 240px;
    }
  }
  @media screen and (min-width: 992px) {
     .content-section{
      width: 95%;
    }
    .content-section h2 {
      font-size: 3rem;
    }
    .content-section p {
      font-size: 1.3rem;
      width: 550px;
    }

    .content-section img {
      width: 300px;
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section h2 {
      font-size: 4rem;
    }
    .content-section p {
      font-size: 1.5rem;
      width: 620px;
    }

    .content-section img {
      width: 400px;
    }
  }
`,Av="/Movies-ReactJS/assets/tv-netflix-BWLwypTF.png";function Ev(){return d.jsx(zv,{children:d.jsxs("div",{className:"content-section",children:[d.jsxs("div",{className:"text",children:[d.jsx("h2",{children:"Aproveite na tv"}),d.jsx("p",{children:"Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."})]}),d.jsx("img",{src:Av,alt:"Versão TV"})]})})}const jv=pt.div`
  width: 100%;
  height: 80vh;
  background-color: black;
  color: white;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .content-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    text-align: center;
    width: 90%;
  }
  .content-section img {
    width: 250px;
    position: relative;
    bottom: 50px;

    left: 15px;
  }

  .content-section h2 {
    font-size: 1.8rem;
    position: relative;
    margin-bottom: 50px;
  }

  .content-section p {
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 530px) {
    .content-section h2 {
      font-size: 2rem;
    }

    .content-section p {
      font-size: 1rem;
    }

    .content-section img {
      width: 270px;
    }
  }

  @media screen and (min-width: 800px) {
    .content-section {
      flex-direction: row;
      text-align: start;
      justify-content: space-between;
      padding: 20px;
    }
    .content-section h2 {
      font-size: 2.2rem;
      bottom: 0;
      margin-bottom: 10px;
    }

    .content-section p {
      font-size: 1.1rem;
      text-align: start;
      width: 450px;
    }

    .content-section img {
      width: 240px;
      left: 0px;
    }
  }
  @media screen and (min-width: 992px) {
    .content-section {
      width: 95%;
    }
    .content-section h2 {
      font-size: 3rem;
    }
    .content-section p {
      font-size: 1.3rem;
      width: 550px;
    }

    .content-section img {
      width: 300px;
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section {
      align-items: center;
    }
    .content-section h2 {
      font-size: 4rem;
    }
    .content-section p {
      font-size: 1.5rem;
      width: 620px;
    }

    .content-section img {
      width: 400px;

      position: relative;
      bottom: 0px;

      left: 0px;
    }
  }
`,Rv="/Movies-ReactJS/assets/dispositivos-Yv656wfi.png";function Nv(){return d.jsx(jv,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("img",{src:Rv,alt:"Mobile"}),d.jsxs("div",{className:"text",children:[d.jsx("h2",{children:"Assista onde quiser"}),d.jsx("p",{children:"Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV."})]})]})})}const Tv=pt.div`
   width: 100%;
  height: 80vh;
  background-color: black;
  color: white;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .content-section {
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    text-align: center;
    width: 90%;
  }

  
  .content-section h2 {
      font-size: 1.8rem;
    margin-bottom: 50px;
    
    
  }

  .content-section p {
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    
  }
    .content-section img {
    
    width: 250px;
  }





  @media screen and (min-width: 530px) {
    .content-section h2 {
      font-size: 2rem;
    }

    .content-section p {
      font-size: 1rem;
    }

    .content-section img {
      width: 270px;
    }
  }

  @media screen and (min-width: 800px) {
    .content-section {
      flex-direction: row;
      text-align: start;
      justify-content: space-between;
      padding: 20px;
      
      
    }
    .content-section h2 {
      font-size: 2.2rem;
      bottom: 0;
      margin-bottom: 10px;
    }

    .content-section p {
      font-size: 1.1rem;
      text-align: start;
     width: 500px;
      
    }


    .content-section img {
      width: 240px;
      
    }
  }
  @media screen and (min-width: 992px) {
    .content-section{
      width: 95%;
    }
    .content-section h2 {
      font-size: 3rem;
    }
    .content-section p {
      font-size: 1.3rem;
      width: 550px;
    }

    .content-section img {
      width:350px;
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section h2 {
      font-size: 4rem;
    }
    .content-section p {
      font-size: 1.5rem;
      width: 620px;
    }

    .content-section img {
      width: 450px;
    }
  }
`,Dv="/Movies-ReactJS/assets/kids-DbAjh5sn.png";function Ov(){return d.jsx(Tv,{children:d.jsxs("div",{className:"content-section",children:[d.jsxs("div",{className:"text",children:[d.jsx("h2",{children:"Crie perfis para crianças"}),d.jsx("p",{children:"Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."})]}),d.jsx("img",{src:Dv,alt:"Mobile"})]})})}const Cv=pt.div`
  width: 100%;
  height: 80vh;
  background-color: black;
  color: white;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .content-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    text-align: center;
    width: 90%;
    gap: 50px;
  }
  .content-section img {
    width: 250px;
    position: relative;
   
  }

  .content-section h2 {
    font-size: 1.8rem;
    position: relative;
    margin-bottom: 50px;
   
  }

  .content-section p {
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 530px) {
    .content-section h2 {
      font-size: 2rem;
    }

    .content-section p {
      font-size: 1rem;
    }

    .content-section img {
      width: 270px;
    }
  }

  @media screen and (min-width: 800px) {
    .content-section {
      flex-direction: row;
      text-align: start;
      justify-content: space-between;
      padding: 20px;
    }
    .content-section h2 {
      font-size: 2.2rem;
      bottom: 0;
      margin-bottom: 10px;
    }

    .content-section p {
      font-size: 1.1rem;
      text-align: start;
      width: 500px;
    }

    .content-section img {
      width: 220px;
      left: 0px;
      margin-bottom: 100px;
    }
  }
  @media screen and (min-width: 992px) {
    .content-section {
      justify-content: space-between;
      width: 100%;
    }
    .content-section h2 {
      font-size: 3rem;
    }
    .content-section p {
      font-size: 1.3rem;
      width: 100%;
    }

    .content-section img {
      width: 400px;
      position: relative;
      margin-bottom: 70px;
    }
  }

  @media screen and (min-width: 1200px) {
  .content-section {
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; /* garante alinhamento vertical */
    padding-right: 12px;
   
  }

  .content-section h2 {
    font-size: 4rem;
    margin-bottom: 10px; /* mantém espaçamento consistente */
    width: 100%;
  }

  .content-section p {
    font-size: 1.5rem;
    width: 620px; /* igual Section4 */
    text-align: start;
  }

  .content-section img {
    width: 400px; /* igual Section4 */
    margin-bottom: 0; /* remove desalinhamento vertical */
    position: static; /* garante fluxo normal do flexbox */
  }
}

`,Mv="/Movies-ReactJS/assets/movel-A3IsfRxB.png";function _v(){return d.jsx(Cv,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("img",{src:Mv,alt:"Mobile"}),d.jsxs("div",{className:"text",children:[d.jsx("h2",{children:"Baixe séries para assistir offline"}),d.jsx("p",{children:"Assista em um avião, trem ou submarino..."})]})]})})}const Bv=pt.div`
  width: 100%;
  min-height: 100vh; 
  color: white;
  margin-top: 10px;
  background-color: black;
  display: flex;
  align-items: flex-start; 
  justify-content: center;
  padding: 40px 0;

  .content-section {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .content-section h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .cards {
    width: 80%;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  .faq-item {
    background-color: #2b2929ff;
    margin-bottom: 15px;
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 6px;
  }

  .faq-item:hover {
    background-color: #363434ff;
  }

  .faq-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .faq-header p {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }

  .faq-header span {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }

  .faq-item.active .faq-header span {
    transform: rotate(180deg);
  }

  .faq-answer {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #b3b3b3;
    line-height: 1.4rem;
    transition: opacity 0.3s ease;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }

  .faq-item.active .faq-answer {
    opacity: 1;
    max-height: 500px; 
  }


  @media screen and (min-width: 530px) {
    .content-section h3 {
      font-size: 1.6rem;
    }

    .faq-header p {
      font-size: 1.1rem;
    }

    .faq-header span {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 992px) {
    .content-section h3 {
      font-size: 2rem;
    }

    .cards {
      font-size: 1.2rem;
    }

    .faq-header p {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section h3 {
      font-size: 2.2rem;
    }

    .faq-header p {
      font-size: 1.3rem;
    }

     .faq-answer {
      font-size: 1.2rem;

    }
  }
`;function Uv(){const[l,o]=A.useState(null),s=f=>{o(l===f?null:f)},c=[{question:"O que é Netflix?",answer:"A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes."},{question:"Quanto custa a Netflix?",answer:"Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 20,90 a R$ 59,90 por mês. Sem contrato nem taxas extras."},{question:"Onde posso assistir?",answer:"Assista onde quiser, quando quiser. Acesse sua conta Netflix em netflix.com para assistir no computador ou em qualquer aparelho conectado à internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. Leve a Netflix com você para qualquer lugar."},{question:"Como faço para cancelar?",answer:"A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento."},{question:"O que eu posso assistir na Netflix?",answer:"A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser."},{question:"A Netflix é adequada para crianças?",answer:"A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis. O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam."}];return d.jsx(Bv,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("h3",{children:"Perguntas frequentes"}),d.jsx("div",{className:"cards",children:c.map((f,p)=>d.jsxs("div",{className:`faq-item ${l===p?"active":""}`,onClick:()=>s(p),children:[d.jsxs("div",{className:"faq-header",children:[d.jsx("p",{children:f.question}),d.jsx("span",{children:l===p?"−":"+"})]}),l===p&&d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:f.answer})})]},p))})]})})}function kv(){return d.jsxs(d.Fragment,{children:[d.jsx(bv,{}),d.jsx(Sv,{}),d.jsx(Ev,{}),d.jsx(Nv,{}),d.jsx(Ov,{}),d.jsx(_v,{}),d.jsx(Uv,{}),d.jsx(mv,{})]})}const Hv=pt.div`

    
  background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.9) 0%,
  rgba(0, 0, 0, 0.6) 40%,
  rgba(0, 0, 0, 0.47) 70%,
  rgba(0, 0, 0, 0.07) 100%
);
    img{
        width: 120px;
        margin-left: 20px;
        margin-top: 20px;
    }

    @media screen and (min-width:530px) {
          img{
        width: 150px;
        
    }
    }

      @media screen and (min-width:768px) {
          img{
        width: 170px;
        
    }
    }

       @media screen and (min-width:992px) {
          img{
        width: 180px;
        
    }
    }

       @media screen and (min-width:1200px) {
          img{
        width: 200px;
        
    }
    }


`;function qv(){return d.jsx(Hv,{children:d.jsx("img",{src:Ks,alt:"Netflix-Logo"})})}const xm="/Movies-ReactJS/assets/back01-BieqImTc.jpg",Yv=pt.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  /* background-image: url(${xm}); */
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;

  .content-section {
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    background-color: #0000009d;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 30px;
    min-height: 560px;
  
  }

  .content-section h2 {
    font-size: 2.1rem;
    margin-bottom: 20px;
    margin-top: 40px;
    width: 90%;
    font-weight: 650;
  }

  .content-section input {
    padding: 15px;
    font-size: 0.9rem;
    width: 90%;
    background-color: #181717ff;
    border: 1px solid grey;
    border-radius: 5px;
    margin-bottom: 15px;
    color:white;
  }

  ::placeholder {
    color: #b3a4a4ff;
  }

  .content-section button {
    padding: 10px;
    font-weight: 550;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    background-color: #e50914;
    color: white;
    width: 90%;
    cursor: pointer;
    transition: 0.4s ease;
    margin-bottom: 20px;

    &:hover {
      background-color: #be0811ff;
    }
  }

  .separate {
    color: #b3a4a4ff;
    margin-bottom: 10px;
  }

  .forgot-password {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .forgot-password p {
    padding: 8px;
    width: 90%;
    background-color: #333333;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  .forgot-password a {
    color: white;
    margin-bottom: 20px;
     transition: .4s ease;
    &:hover{
        color: #ccbbbbff;
    }
  }

  .remember {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
    padding: 10px 0;
    justify-content: flex-start;
    width: 90%;
  }

  .remember label {
    margin: 0;
    width: auto;
    line-height: 1;
  }

  .remember input {
    margin: 0;
    height: 18px;
    width: 18px;
    background-color: black !important;
    color: black !important;
  }

  .sign-up-now {
    margin-top: 20px;
    width: 90%;
    display: flex;
    gap: 10px;
    align-items: flex-start;
    color: #bbafafff;
  }

  p > strong {
    color: white;
    cursor: pointer;
    transition: .4s ease;
    &:hover{
        color: #ccbbbbff;
    }
  }

  @media screen and (min-width: 600px) {
    background-image: url(${xm});
    height: 100%;
    .container {
      width: 100%;
      height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
    .container .content-section {
      width: 80%;
      max-width: 500px;
      max-height: 650px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

   

  }

  @media screen and (min-width: 768px) {
    .container {
      width: 100%;
      height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
    .container .content-section {
      width: 80%;
    }
  }

  @media screen and (min-width: 992px) {
    .container {
      width: 100%;
      height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
    .container .content-section {
      width: 80%;
    }
  }

  @media screen and (min-width: 1200px) {
    .container {
      width: 100%;
      height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
    .container .content-section h2{
      font-size:2.4rem;
    }
    .container .content-section input{
        font-size: 1.1rem;
    }
    .container .content-section button{
        font-size: 1.1rem;
    }
     .separate {
    font-size: 1.1rem;
  }



  .forgot-password p {
   font-size: 1.1rem;
  }

  .forgot-password a {
    font-size: 1.1rem;
  }



  .remember label {
    margin: 0;
    width: auto;
    line-height: 1;
    font-size: 1.1rem;
  }

 

  .sign-up-now {
    font-size: 1.1rem;
  }

  }
`;function Lv(){const o=xn().state?.email||"",[s,c]=A.useState(o||""),[f,p]=A.useState(""),g=Ht(),S=()=>{g("/")},x=()=>{if(!s.trim()||!f.trim()){alert("Preencha todos os campos!");return}g("/main-app")};return d.jsx(d.Fragment,{children:d.jsxs(Yv,{children:[d.jsx(qv,{}),d.jsx("div",{className:"container",children:d.jsxs("div",{className:"content-section",children:[d.jsx("h2",{children:"Entrar"}),d.jsx("input",{type:"text",placeholder:"E-mail ou número de celular",value:s,onChange:h=>c(h.target.value),name:"new-email",autoComplete:"new-email"}),d.jsx("input",{type:"password",placeholder:"Senha",value:f,onChange:h=>p(h.target.value),name:"new-password",autoComplete:"new-password"}),d.jsx("button",{onClick:x,children:"Entrar"}),d.jsx("p",{className:"separate",children:"OU"}),d.jsxs("div",{className:"forgot-password",children:[d.jsx("p",{children:"Use um código de login"}),d.jsx("a",{href:"#",children:"Esqueceu sua senha?"})]}),d.jsxs("div",{className:"remember",children:[d.jsx("input",{type:"checkbox"}),d.jsx("label",{children:"Lembra de Mim?"})]}),d.jsxs("div",{className:"sign-up-now",children:[d.jsx("p",{children:"Novo na Netflix"}),d.jsx("p",{onClick:S,children:d.jsx("strong",{children:"Assine Já"})})]})]})})]})})}const Gv=pt.div`
  background-color: #151515;
  width: 100%;
  padding: 10px;
  color: #bbaeaeff;
  .content-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .content-section .doubt {
    width: 90%;
    margin-top: 10px;
    margin-bottom: 20px;
    text-decoration: none;
    cursor: text;
    &:hover {
      color: #bbaeaeff;
    }
  }
  .content-section .questions {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .content-section p {
    width: 100%;
    text-decoration: underline;
    margin-top: 10px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      color: #998c8cff;
    }
  }
  select {
    padding: 5px;
    font-weight: normal;
    border-radius: 5px;
    font-size: 0.9rem;
    text-align: center;
    background-color: #0000008c;
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 150px;
  }

  option {
    background-color: white;
    color: black;
  }

  @media screen and (min-width: 768px) {
    padding: 40px 0px;
    .content-section p {
      font-size: 1.1rem;
    }
    select {
      font-size: 1.1rem;
      max-width: 160px;
    }
  }
`;function Qv(){return d.jsx(Gv,{children:d.jsxs("footer",{className:"content-section",children:[d.jsx("p",{className:"doubt",children:"Dúvidas? Ligue para 0800 591 2876 (ligação gratuita)"}),d.jsxs("div",{className:"questions",children:[d.jsxs("div",{className:"q1",children:[d.jsx("p",{children:"Perguntas frequentes"}),d.jsx("p",{children:"Termos de Uso"}),d.jsx("p",{children:"Preferências de cookies"})]}),d.jsxs("div",{className:"q2",children:[d.jsx("p",{children:"Central de ajuda"}),d.jsx("p",{children:"Privacidade"}),d.jsx("p",{children:"Informações corporativas"})]}),d.jsxs("select",{children:[d.jsx("option",{value:"portugues",children:"Português"}),d.jsx("option",{value:"ingles",children:"Inglês"})]})]})]})})}function Xv(){return d.jsxs(d.Fragment,{children:[d.jsx(Lv,{}),d.jsx(Qv,{})]})}const Vv=pt.div`
  width: 100%;
  background-color: black;
  color: white;
  padding: 10px 20px;
  position: relative;

  .content-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }

  .p1 {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .p1 img {
    width: 120px;
    cursor: pointer;
  }

  /* Menu desktop */
  .desktop-menu {
    display: none;
    gap: 20px;
  }

  .desktop-menu p {
    cursor: pointer;
    transition: 0.3s ease;
  }

  .desktop-menu p:hover {
    color: #c5babaff;
  }

  .p2 {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .p2 button {
    display: none;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .p2 button:hover {
    background-color: white;
    color: black;
    transform: scale(1.05);
  }

  .btn-mobile {
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
  }

  /* Menu lateral direito mobile */
  .side-menu {
    position: fixed;
    top: 0;
    right: -250px;
    width: 250px;
    height: 100vh;
    background-color: #141414;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: 0.3s ease;
    z-index: 1000;
  }

  .side-menu.open {
    right: 0;
  }

  .side-menu p {
    cursor: pointer;
    transition: 0.3s ease;
    font-size: 1.1rem;
  }

  .side-menu p:hover {
    color: #c5babaff;
  }

  .close-btn {
    align-self: flex-end;
    font-size: 2rem;
    cursor: pointer;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 500;
  }

  /* Desktop */
  @media screen and (min-width: 768px) {
    .desktop-menu {
      display: flex;
      margin-left: 25px;
    }

    .p2 button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      padding: 8px;
      text-align: center;
      font-weight: normal;
      background-color: #242323ff;
      border: none;
      border-radius: 5px;
      color: white;
      font-size: 1rem;
    }

    .btn-mobile, .side-menu, .overlay {
      display: none;
    }
  }

  @media screen and (min-width: 1200px) {
    .p1 img {
      width: 150px;
    }

    .desktop-menu p {
      font-size: 1.2rem;
    }

    .p2 button {
      width: 100px;
      font-size: 1.2rem;
    }
  }
`;function Zv(){const l=Ht(),o=()=>l("/"),[s,c]=A.useState(!1),f=()=>c(!s),p=g=>{const S=document.getElementById(g);S&&S.scrollIntoView({behavior:"smooth"})};return d.jsxs(Vv,{children:[d.jsxs("div",{className:"content-section",children:[d.jsxs("div",{className:"p1",children:[d.jsx("img",{src:Ks,alt:"Logo Netflix"}),d.jsxs("div",{className:"desktop-menu",children:[d.jsx("p",{children:"Início"}),d.jsx("p",{onClick:()=>p("series"),children:"Séries"}),d.jsx("p",{onClick:()=>p("filmes"),children:"Filmes"}),d.jsx("p",{onClick:()=>p("populares"),children:"Novos & Populares"}),d.jsx("p",{onClick:()=>p("sagas"),children:"Top Sagas"})]})]}),d.jsxs("div",{className:"p2",children:[d.jsx("button",{onClick:o,children:"Sair"}),d.jsx("div",{className:"btn-mobile",onClick:f,children:d.jsx("p",{children:"☰"})})]})]}),d.jsxs("div",{className:`side-menu ${s?"open":""}`,children:[d.jsx("div",{className:"close-btn",onClick:f,children:"×"}),d.jsx("p",{children:"Início"}),d.jsx("p",{onClick:()=>p("series"),children:"Séries"}),d.jsx("p",{onClick:()=>p("filmes"),children:"Filmes"}),d.jsx("p",{onClick:()=>p("populares"),children:"Novos & Populares"}),d.jsx("p",{onClick:()=>p("sagas"),children:"Top Sagas"})]}),s&&d.jsx("div",{className:"overlay",onClick:f})]})}const Kv=pt.div`
  position: relative;
  width: 100%;
  height: 48vh;
  background-image: url(${l=>l.bg});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  color: white;
  padding: 20px;
  overflow: hidden;
  

  /* Gradiente por cima da imagem */
  &::before {
    content: "";
    position: absolute;
    inset: 0; /* cobre toda a área */
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.1) 20%,
      /* mais escuro embaixo */ rgba(0, 0, 0, 0.6) 60%,
      rgba(0, 0, 0, 1) 100% /* transparente no topo */
    );
    z-index: 1;
  }

  .content-section {
    position: relative; /* faz o texto ficar acima do gradiente */
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }

  .title h1 {
    font-family: "Benguiat";
    font-size: 2rem;
    color: white;
    text-align: center;
      text-shadow: 2px 4px 6px #0000009d;
   
  }

  .desc {
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 100%;
  }

  .desc .season{
    color: white;
    position: relative;
    top: 10px;
  }

  .content-section .title {
    width: 70%;
  }

  .desc p {
    font-size: 1rem;
    width: 100%;
    text-align: start;
    color: #cab7b7ff;
  }

  .desc .btn button {
    padding: 9px;
    font-size: 1rem;
    background-color: #151616;
    border: none;
    color: white;
    border-radius: 5px;
    width: 95px;
    cursor: pointer;
    transition: .4s ease;
    &:hover{
      background-color: white;
      color: black;
    }
  }

  .desc .btn .play {
    background-color: white;
    color: black;
    transition: .4s ease;
    &:hover{
      background-color: red ;
      color: white;
    }
  }

  .desc .btn .more{
    width: 165px;
  }

  .btn {
    display: flex;
    gap: 5px;
  }

  @media screen and (min-width: 530px) {
    background-image: url(${l=>l.bg3});
    background-position: center top;
    height: 60vh;

    .content-section .title {
      width: 50%;
    }
    .title h1 {
      font-size: 2.1rem;
      text-align: center;
    }

    .desc p {
      font-size: 1.1rem;
      width: 80%;
    }

    .desc .btn button {
      font-size: 1.1rem;
      width: 100px;
    }

    .desc .btn .play {
      background-color: white;
      color: black;
    }

    .desc .btn .play {
      width: 115px;
  }

  .desc .btn .more{
    width: 175px;
  }

    .btn {
      display: flex;
      gap: 5px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 10px;
    background-image: url(${l=>l.bg2});
    height: 70vh;
    width: 100%;
    background-size: cover;
    background-position: center center;
  background-attachment: fixed;
    
    .content-section .title {
      margin-top: 50px;
      padding-right: 70px;
      align-items: flex-start;
      justify-content: flex-start;
      display: flex;
      text-align: center;
      margin-left: 0;
      /* background-color: red; */
    }

    .content-section .desc p {
      font-size: 1.2rem;
      width: 50%;
    }

    .content-section .desc {
      margin: 10px;
    }

    .desc .btn button {
      padding: 12px;
    }

        .desc .btn .play {
      width: 115px;
  }

  .desc .btn .more{
    width: 195px;
  }

    .content-section .title h1 {
      font-size: 3.2rem;
    }
    .content-section {
      width: 100%;
      align-items: flex-start;
    }
  }

  @media screen and (min-width: 992px) {
    background-image: url(${l=>l.bg2});
    height: 70vh;
    width: 100%;
    background-size: cover;
    background-position: center center;

     .content-section .title {
      /* padding-right: 100px; */
      margin-top: 70px;
      padding-left: 12px;
      width: 200px;
      
    }
    .content-section .title h1 {
      font-size: 3.5rem;
    }

  
  }

    @media screen and (min-width: 1200px) {
    background-image: url(${l=>l.bg2});
    height: 70vh;
    width: 100%;
    background-size: cover;
    background-position: center center;
     
    .content-section .title {
      /* padding-right: 100px; */
      margin-top: 90px;
      padding-left: 15px;
      width: 200px;
    }

    .content-section .title h1 {
      font-size: 4.5rem;
    }

    .content-section .desc{
      margin-left: 15px;
    }

    .content-section .desc p {
      font-size: 1.4rem;
      width: 45%;
    }

    .content-section .desc button{
      font-size: 1.3rem;
      width: 115px;
    }

         .desc .btn .play {
      width: 125px;
  }

  .desc .btn .more{
    width: 222px;
  }
  }
`;function Jv(){const[l,o]=A.useState(""),[s,c]=A.useState(""),[f,p]=A.useState(),[g,S]=A.useState(""),[x,h]=A.useState(""),[b,T]=A.useState(""),M=Ht(),k=(H,q)=>{M(`/details/${H}`,{state:{type:q}})};return A.useEffect(()=>{(async()=>{const q="ee96350ded551df8af41839e03615c58";try{const U=await(await fetch(`https://api.themoviedb.org/3/tv/66732?api_key=${q}&language=pt-BR`)).json();o(U.name),p(U.number_of_seasons),c(U.overview);const Y=await(await fetch(`https://api.themoviedb.org/3/tv/66732/images?api_key=${q}`)).json(),F=Y.posters[30],V=Y.backdrops[2],I=Y.backdrops[30];S(`https://image.tmdb.org/t/p/w500${F.file_path}`),T(`https://image.tmdb.org/t/p/original${V.file_path}`),h(`https://image.tmdb.org/t/p/original${I.file_path}`)}catch(X){console.error("Erro ao buscar banner:",X)}})()},[]),d.jsx(Kv,{bg:g,bg2:b,bg3:x,children:d.jsxs("div",{className:"content-section",children:[d.jsx("div",{className:"title",children:d.jsx("h1",{children:l.toUpperCase()})}),d.jsxs("div",{className:"desc",children:[d.jsxs("p",{className:"season",children:["Assista a temporada ",f]}),d.jsxs("p",{children:[s.slice(0,85),"..."]}),d.jsxs("div",{className:"btn",children:[d.jsx("a",{href:"https://youtu.be/iKZyYdwS3Wg?si=_PmLTcQVMn-G5chD",target:"_blank",children:d.jsx("button",{className:"play",children:" ▶ Assistir"})}),d.jsx("button",{onClick:()=>k(66732,"tv"),className:"more",children:"Mais Informações"})]})]})]})})}const $v=pt.div`
  width: 100%;
  background-color: black;
  color: white;

  .content-section p {
    font-size: 1.1rem;
    padding-top: 20px;
    padding-left: 20px;
    margin-left: 12px;
    padding-bottom: 10px;
  }

  .content-section .cards {
    display: flex;
    gap: 15px;
    margin-left: 18px;
    align-items: center;
    height: 100%;
    overflow-x: auto; /* scroll horizontal */
    scroll-behavior: smooth; /* suave */
    padding: 10px;
  }

  /* Esconde barra de rolagem */
  .content-section .cards::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
  .content-section .cards {
    -ms-overflow-style: none; /* IE e Edge */
    scrollbar-width: none; /* Firefox */
  }

  .content-section .cards .card {
    flex: 0 0 auto; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: visible; 
    border: 2px solid rgba(255, 255, 255, 0.1); /* borda sutil */
    border-radius: 10px; 
    padding: 2px; 
    background-color: rgba(0, 0, 0, 0.3); 
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    will-change: transform, box-shadow;
  }

  .content-section .cards .card img {
    width: auto;
    max-height: 220px;
    border-radius: 10px;
    object-fit: contain;
    background-color: black;
    transition: transform 0.4s ease-in-out, filter 0.3s ease;
  }

  .content-section .cards .card:hover {
    transform: scale(1.01); /* aumenta levemente */
    z-index: 2; 
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); /* glow leve */
  }

  .content-section .cards .card:hover img {
    filter: brightness(1.2) contrast(1.1);
  }

  .carousel-container {
    position: relative; /* Essencial para as setas ficarem dentro da div */
    display: flex;
    align-items: center;
  }

  /* setas */
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.4);
    border: none;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
    padding: 12px;
    z-index: 10;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center; /* centraliza o ícone dentro do botão */
    opacity: 0;
    transition: opacity 0.3s ease, background 0.3s ease;
  }

  .arrow:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .arrow.left {
    left: 5px;
  }

  .arrow.right {
    right: 5px;
  }

  /* ================= MEDIA QUERIES ================= */
  @media screen and (min-width:530px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 230px;
    }
  }

  @media screen and (min-width:768px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
     .carousel-container:hover .arrow {
      opacity: 1;
    }
  }

  @media screen and (min-width:992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;var rp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},vm=Me.createContext&&Me.createContext(rp),Wv=["attr","size","title"];function Fv(l,o){if(l==null)return{};var s=Iv(l,o),c,f;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(l);for(f=0;f<p.length;f++)c=p[f],!(o.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(l,c)&&(s[c]=l[c])}return s}function Iv(l,o){if(l==null)return{};var s={};for(var c in l)if(Object.prototype.hasOwnProperty.call(l,c)){if(o.indexOf(c)>=0)continue;s[c]=l[c]}return s}function Xr(){return Xr=Object.assign?Object.assign.bind():function(l){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(l[c]=s[c])}return l},Xr.apply(this,arguments)}function bm(l,o){var s=Object.keys(l);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);o&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),s.push.apply(s,c)}return s}function Vr(l){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?bm(Object(s),!0).forEach(function(c){Pv(l,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(s)):bm(Object(s)).forEach(function(c){Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(s,c))})}return l}function Pv(l,o,s){return o=tb(o),o in l?Object.defineProperty(l,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[o]=s,l}function tb(l){var o=eb(l,"string");return typeof o=="symbol"?o:o+""}function eb(l,o){if(typeof l!="object"||!l)return l;var s=l[Symbol.toPrimitive];if(s!==void 0){var c=s.call(l,o);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(l)}function op(l){return l&&l.map((o,s)=>Me.createElement(o.tag,Vr({key:s},o.attr),op(o.child)))}function cp(l){return o=>Me.createElement(nb,Xr({attr:Vr({},l.attr)},o),op(l.child))}function nb(l){var o=s=>{var{attr:c,size:f,title:p}=l,g=Fv(l,Wv),S=f||s.size||"1em",x;return s.className&&(x=s.className),l.className&&(x=(x?x+" ":"")+l.className),Me.createElement("svg",Xr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,c,g,{className:x,style:Vr(Vr({color:l.color||s.color},s.style),l.style),height:S,width:S,xmlns:"http://www.w3.org/2000/svg"}),p&&Me.createElement("title",null,p),l.children)};return vm!==void 0?Me.createElement(vm.Consumer,null,s=>o(s)):o(rp)}function we(l){return cp({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(l)}function Se(l){return cp({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(l)}function ab(){const[l,o]=A.useState([]),s=Ht(),c=A.useRef(null),f="ee96350ded551df8af41839e03615c58",p=async()=>{const b=await(await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${f}&language=pt-BR&page=1`)).json();o(b.results)};A.useEffect(()=>{p()},[]);const g=h=>{s(`/details/${h}`)},S=()=>{c.current&&c.current.scrollBy({left:-500,behavior:"smooth"})},x=()=>{c.current&&c.current.scrollBy({left:500,behavior:"smooth"})};return d.jsx($v,{children:d.jsxs("div",{className:"content-section",id:"populares",children:[d.jsx("p",{className:"saga-title",children:d.jsx("strong",{children:"Populares na Netflix"})}),d.jsxs("div",{className:"carousel-container",children:[d.jsx("button",{className:"arrow left",onClick:S,children:d.jsx(we,{})}),d.jsx("div",{className:"cards",ref:c,children:l.filter(h=>h.poster_path).map(h=>d.jsx("div",{className:"card",onClick:()=>g(h.id),children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${h.poster_path}`,alt:h.title})},h.id))}),d.jsx("button",{className:"arrow right",onClick:x,children:d.jsx(Se,{})})]})]})})}const ib=pt.div`
  width: 100%;
  background-color: black;
  color: white;

  .content-section p {
    font-size: 1.1rem;
    padding-top: 20px;
    padding-left: 20px;
    margin-left: 12px;
    padding-bottom: 10px;
  }

  .content-section .cards {
    display: flex;
    gap: 15px;
    margin-left: 18px;
    align-items: center;
    height: 100%;
    overflow-x: auto; /* scroll horizontal */
    scroll-behavior: smooth; /* suave */
    padding: 10px;
  }

  /* Esconde barra de rolagem */
  .content-section .cards::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
  .content-section .cards {
    -ms-overflow-style: none; /* IE e Edge */
    scrollbar-width: none; /* Firefox */
  }

  .content-section .cards .card {
    flex: 0 0 auto; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: visible; 
    border: 2px solid rgba(255, 255, 255, 0.1); /* borda sutil */
    border-radius: 10px; 
    padding: 2px; 
    background-color: rgba(0, 0, 0, 0.3); 
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    will-change: transform, box-shadow;
  }

  .content-section .cards .card img {
    width: auto;
    max-height: 220px;
    border-radius: 10px;
    object-fit: contain;
    background-color: black;
    transition: transform 0.4s ease-in-out, filter 0.3s ease;
  }

  .content-section .cards .card:hover {
    transform: scale(1.01); /* aumenta levemente */
    z-index: 2; 
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); /* glow leve */
  }

  .content-section .cards .card:hover img {
    filter: brightness(1.2) contrast(1.1);
  }

  .carousel-container {
    position: relative; /* Essencial para as setas ficarem dentro da div */
    display: flex;
    align-items: center;
  }

  /* setas */
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.4);
    border: none;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
    padding: 12px;
    z-index: 10;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center; /* centraliza o ícone dentro do botão */
    opacity: 0;
    transition: opacity 0.3s ease, background 0.3s ease;
  }

  .arrow:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .arrow.left {
    left: 5px;
  }

  .arrow.right {
    right: 5px;
  }

  /* ================= MEDIA QUERIES ================= */
  @media screen and (min-width:530px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 230px;
    }
  }

  @media screen and (min-width:768px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
     .carousel-container:hover .arrow {
      opacity: 1;
    }
  }

  @media screen and (min-width:992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function lb(){const[l,o]=A.useState([]),s="ee96350ded551df8af41839e03615c58",c=Ht(),f=A.useRef(null),p=async()=>{const b=await(await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${s}&with_networks=213&language=pt-BR&page=1`)).json();o(b.results)};A.useEffect(()=>{p()},[]);const g=h=>{c(`/details/${h}`,{state:{type:"tv"}})},S=()=>{f.current&&f.current.scrollBy({left:-500,behavior:"smooth"})},x=()=>{f.current&&f.current.scrollBy({left:500,behavior:"smooth"})};return d.jsx(ib,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{className:"saga-title",children:d.jsx("strong",{children:"Originais Netflix"})}),d.jsxs("div",{className:"carousel-container",children:[d.jsx("button",{className:"arrow left",onClick:S,children:d.jsx(we,{})}),d.jsx("div",{className:"cards",ref:f,children:l.filter(h=>h.poster_path).map(h=>d.jsx("div",{className:"card",onClick:()=>g(h.id),children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${h.poster_path}`,alt:h.name})},h.id))}),d.jsx("button",{className:"arrow right",onClick:x,children:d.jsx(Se,{})})]})]})})}const rb=pt.div`
  width: 100%;
  background-color: black;
  color: white;

  .content-section p {
    font-size: 1.1rem;
    padding-top: 20px;
    padding-left: 20px;
    margin-left: 12px;
    padding-bottom: 10px;
  }

  .content-section .cards {
    display: flex;
    gap: 15px;
    margin-left: 18px;
    align-items: center;
    height: 100%;
    overflow-x: auto; /* scroll horizontal */
    scroll-behavior: smooth; /* suave */
    padding: 10px;
  }

  /* Esconde barra de rolagem */
  .content-section .cards::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
  .content-section .cards {
    -ms-overflow-style: none; /* IE e Edge */
    scrollbar-width: none; /* Firefox */
  }

  .content-section .cards .card {
    flex: 0 0 auto; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: visible; 
    border: 2px solid rgba(255, 255, 255, 0.1); /* borda sutil */
    border-radius: 10px; 
    padding: 2px; 
    background-color: rgba(0, 0, 0, 0.3); 
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    will-change: transform, box-shadow;
  }

  .content-section .cards .card img {
    width: auto;
    max-height: 220px;
    border-radius: 10px;
    object-fit: contain;
    background-color: black;
    transition: transform 0.4s ease-in-out, filter 0.3s ease;
  }

  .content-section .cards .card:hover {
    transform: scale(1.01); /* aumenta levemente */
    z-index: 2; 
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); /* glow leve */
  }

  .content-section .cards .card:hover img {
    filter: brightness(1.2) contrast(1.1);
  }

  .carousel-container {
    position: relative; /* Essencial para as setas ficarem dentro da div */
    display: flex;
    align-items: center;
  }

  /* setas */
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.4);
    border: none;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
    padding: 12px;
    z-index: 10;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center; /* centraliza o ícone dentro do botão */
    opacity: 0;
    transition: opacity 0.3s ease, background 0.3s ease;
  }

  .arrow:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .arrow.left {
    left: 5px;
  }

  .arrow.right {
    right: 5px;
  }

  /* ================= MEDIA QUERIES ================= */
  @media screen and (min-width:530px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 230px;
    }
  }

  @media screen and (min-width:768px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
     .carousel-container:hover .arrow {
      opacity: 1;
    }
  }

  @media screen and (min-width:992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function ob(){const[l,o]=A.useState([]),s="ee96350ded551df8af41839e03615c58",c=Ht(),f=A.useRef(null),p=async()=>{const b=await(await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${s}&language=pt-BR&page=1`)).json();o(b.results)};A.useEffect(()=>{p()},[]);const g=h=>{c(`/details/${h}`)},S=()=>{f.current&&f.current.scrollBy({left:-500,behavior:"smooth"})},x=()=>{f.current&&f.current.scrollBy({left:500,behavior:"smooth"})};return d.jsx(rb,{id:"filmes",children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{className:"saga-title",children:d.jsx("strong",{children:"Em Alta"})}),d.jsxs("div",{className:"carousel-container",children:[d.jsx("button",{className:"arrow left",onClick:S,children:d.jsx(we,{})}),d.jsx("div",{className:"cards",ref:f,children:l.filter(h=>h.poster_path).map(h=>d.jsx("div",{className:"card",onClick:()=>g(h.id),children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${h.poster_path}`,alt:h.title})},h.id))}),d.jsx("button",{className:"arrow right",onClick:x,children:d.jsx(Se,{})})]})]})})}const cb=pt.div`
  width: 100%;
  background-color: black;
  color: white;

  .content-section p {
    font-size: 1.1rem;
    padding-top: 20px;
    padding-left: 20px;
    margin-left: 12px;
    padding-bottom: 10px;
  }

  .content-section .cards {
    display: flex;
    gap: 15px;
    margin-left: 18px;
    align-items: center;
    height: 100%;
    overflow-x: auto; /* scroll horizontal */
    scroll-behavior: smooth; /* suave */
    padding: 10px;
  }

  /* Esconde barra de rolagem */
  .content-section .cards::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
  .content-section .cards {
    -ms-overflow-style: none; /* IE e Edge */
    scrollbar-width: none; /* Firefox */
  }

  .content-section .cards .card {
    flex: 0 0 auto; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: visible; 
    border: 2px solid rgba(255, 255, 255, 0.1); /* borda sutil */
    border-radius: 10px; 
    padding: 2px; 
    background-color: rgba(0, 0, 0, 0.3); 
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    will-change: transform, box-shadow;
  }

  .content-section .cards .card img {
    width: auto;
    max-height: 220px;
    border-radius: 10px;
    object-fit: contain;
    background-color: black;
    transition: transform 0.4s ease-in-out, filter 0.3s ease;
  }

  .content-section .cards .card:hover {
    transform: scale(1.01); /* aumenta levemente */
    z-index: 2; 
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); /* glow leve */
  }

  .content-section .cards .card:hover img {
    filter: brightness(1.2) contrast(1.1);
  }

  .carousel-container {
    position: relative; /* Essencial para as setas ficarem dentro da div */
    display: flex;
    align-items: center;
  }

  /* setas */
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.4);
    border: none;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
    padding: 12px;
    z-index: 10;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center; /* centraliza o ícone dentro do botão */
    opacity: 0;
    transition: opacity 0.3s ease, background 0.3s ease;
  }

  .arrow:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .arrow.left {
    left: 5px;
  }

  .arrow.right {
    right: 5px;
  }

  /* ================= MEDIA QUERIES ================= */
  @media screen and (min-width:530px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 230px;
    }
  }

  @media screen and (min-width:768px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
     .carousel-container:hover .arrow {
      opacity: 1;
    }
  }

  @media screen and (min-width:992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function sb(){const[l,o]=A.useState([]),s="ee96350ded551df8af41839e03615c58",c=Ht(),f=A.useRef(null),p=async()=>{const b=await(await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${s}&language=pt-BR&page=1`)).json();o(b.results)};A.useEffect(()=>{p()},[]);const g=h=>{c(`/details/${h}`)},S=()=>{f.current&&f.current.scrollBy({left:-500,behavior:"smooth"})},x=()=>{f.current&&f.current.scrollBy({left:500,behavior:"smooth"})};return d.jsx(cb,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{className:"saga-title",children:d.jsx("strong",{children:"Comédia"})}),d.jsxs("div",{className:"carousel-container",children:[d.jsx("button",{className:"arrow left",onClick:S,children:d.jsx(we,{})}),d.jsx("div",{className:"cards",ref:f,children:l.filter(h=>h.poster_path).map(h=>d.jsx("div",{className:"card",onClick:()=>g(h.id),children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${h.poster_path}`,alt:h.title})},h.id))}),d.jsx("button",{className:"arrow right",onClick:x,children:d.jsx(Se,{})})]})]})})}const ub=pt.div`
  width: 100%;
  background-color: black;
  color: white;

  .content-section p {
    font-size: 1.1rem;
    padding-top: 20px;
    padding-left: 20px;
    margin-left: 12px;
    padding-bottom: 10px;
  }

  .content-section .cards {
    display: flex;
    gap: 15px;
    margin-left: 18px;
    align-items: center;
    height: 100%;
    overflow-x: auto; /* scroll horizontal */
    scroll-behavior: smooth; /* suave */
    padding: 10px;
  }

  /* Esconde barra de rolagem */
  .content-section .cards::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
  .content-section .cards {
    -ms-overflow-style: none; /* IE e Edge */
    scrollbar-width: none; /* Firefox */
  }

  .content-section .cards .card {
    flex: 0 0 auto; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: visible; 
    border: 2px solid rgba(255, 255, 255, 0.1); /* borda sutil */
    border-radius: 10px; 
    padding: 2px; 
    background-color: rgba(0, 0, 0, 0.3); 
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    will-change: transform, box-shadow;
  }

  .content-section .cards .card img {
    width: auto;
    max-height: 220px;
    border-radius: 10px;
    object-fit: contain;
    background-color: black;
    transition: transform 0.4s ease-in-out, filter 0.3s ease;
  }

  .content-section .cards .card:hover {
    transform: scale(1.01); /* aumenta levemente */
    z-index: 2; 
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); /* glow leve */
  }

  .content-section .cards .card:hover img {
    filter: brightness(1.2) contrast(1.1);
  }

  .carousel-container {
    position: relative; /* Essencial para as setas ficarem dentro da div */
    display: flex;
    align-items: center;
  }

  /* setas */
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.4);
    border: none;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
    padding: 12px;
    z-index: 10;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center; /* centraliza o ícone dentro do botão */
    opacity: 0;
    transition: opacity 0.3s ease, background 0.3s ease;
  }

  .arrow:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .arrow.left {
    left: 5px;
  }

  .arrow.right {
    right: 5px;
  }

  

  /* ================= MEDIA QUERIES ================= */
  @media screen and (min-width:530px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 230px;
    }
  }

  @media screen and (min-width:768px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
      .carousel-container:hover .arrow {
      opacity: 1;
    }
  }

  @media screen and (min-width:992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function fb(){const[l,o]=A.useState([]),s=Ht(),c=A.useRef(null),f="ee96350ded551df8af41839e03615c58",p=async()=>{const b=await(await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${f}&language=pt-BR&page=1`)).json();o(b.results)};A.useEffect(()=>{p()},[]);const g=h=>{s(`/details/${h}`)},S=()=>{c.current&&c.current.scrollBy({left:-500,behavior:"smooth"})},x=()=>{c.current&&c.current.scrollBy({left:500,behavior:"smooth"})};return d.jsx(ub,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{className:"saga-title",children:d.jsx("strong",{children:"Terror"})}),d.jsxs("div",{className:"carousel-container",children:[d.jsx("button",{className:"arrow left",onClick:S,children:d.jsx(we,{})}),d.jsx("div",{className:"cards",ref:c,children:l.filter(h=>h.poster_path).map(h=>d.jsx("div",{className:"card",onClick:()=>g(h.id),children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${h.poster_path}`,alt:h.title})},h.id))}),d.jsx("button",{className:"arrow right",onClick:x,children:d.jsx(Se,{})})]})]})})}const db=pt.div`
  width: 100%;
  background-color: black;
  color: white;

  .content-section p {
    font-size: 1.1rem;
    padding-top: 20px;
    padding-left: 20px;
    margin-left: 12px;
    padding-bottom: 10px;
  }

  .content-section .cards {
    display: flex;
    gap: 15px;
    margin-left: 18px;
    align-items: center;
    height: 100%;
    overflow-x: auto; /* scroll horizontal */
    scroll-behavior: smooth; /* suave */
    padding: 10px;
    padding-bottom: 35px;
  }

  /* Esconde barra de rolagem */
  .content-section .cards::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
  .content-section .cards {
    -ms-overflow-style: none; /* IE e Edge */
    scrollbar-width: none; /* Firefox */
  }

  .content-section .cards .card {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: visible;
    border: 2px solid rgba(255, 255, 255, 0.1); /* borda sutil */
    border-radius: 10px;
    padding: 2px;
    background-color: rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    will-change: transform, box-shadow;
  }

  .content-section .cards .card img {
    width: auto;
    max-height: 220px;
    border-radius: 10px;
    object-fit: contain;
    background-color: black;
    transition: transform 0.4s ease-in-out, filter 0.3s ease;
  }

  .content-section .cards .card:hover {
    transform: scale(1.01); /* aumenta levemente */
    z-index: 2;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); /* glow leve */
  }

  .content-section .cards .card:hover img {
    filter: brightness(1.2) contrast(1.1);
  }

  .carousel-container {
    position: relative; /* Essencial para as setas ficarem dentro da div */
    display: flex;
    align-items: center;
  }

  /* setas */
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.4);
    border: none;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
    padding: 12px;
    z-index: 10;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center; /* centraliza o ícone dentro do botão */
    opacity: 0;
    transition: opacity 0.3s ease, background 0.3s ease;
  }

  .arrow:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .arrow.left {
    left: 5px;
  }

  .arrow.right {
    right: 5px;
  }

  /* ================= MEDIA QUERIES ================= */
  @media screen and (min-width: 530px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 230px;
    }
  }

  @media screen and (min-width: 768px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
    .carousel-container:hover .arrow {
      opacity: 1;
    }
  }

  @media screen and (min-width: 992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function hb(){const[l,o]=A.useState([]),s="ee96350ded551df8af41839e03615c58",c=Ht(),f=A.useRef(null),p=async()=>{const b=await(await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${s}&language=pt-BR&page=1`)).json();o(b.results)};A.useEffect(()=>{p()},[]);const g=h=>{c(`/details/${h}`,{state:{type:"tv"}})},S=()=>{f.current&&f.current.scrollBy({left:-500,behavior:"smooth"})},x=()=>{f.current&&f.current.scrollBy({left:500,behavior:"smooth"})};return d.jsx(db,{id:"series",children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{className:"saga-title",children:d.jsx("strong",{children:"Séries de TV"})}),d.jsxs("div",{className:"carousel-container",children:[d.jsx("button",{className:"arrow left",onClick:S,children:d.jsx(we,{})}),d.jsx("div",{className:"cards",ref:f,children:l.filter(h=>h.poster_path).map(h=>d.jsx("div",{className:"card",onClick:()=>g(h.id),children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${h.poster_path}`,alt:h.name||h.title})},h.id))}),d.jsx("button",{className:"arrow right",onClick:x,children:d.jsx(Se,{})})]})]})})}const mb=pt.div`
  width: 100%;
  background-color: black;
  color: white;
  padding-bottom: 0px;

  .content-section h2 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-left: 20px;
    margin-bottom: 15px;
    margin-top: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    position: relative;
    padding-top: 20px;
  }

  /* Barra gradiente estilo Netflix */
  .content-section h2::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #ff0000, #ff6600);
    border-radius: 2px;
  }

  /* .saga-block {
    margin-bottom: 35px;
  } */

  .saga-title {
    font-size: 1.1rem;
    padding-left: 30px;
    margin-top: 25px;
    margin-bottom: 15px;

    color: #ccc;
  }

  .content-section .cards {
    display: flex;
    gap: 15px;
    margin-left: 18px;
    align-items: center;
    height: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px;
    /* padding-bottom: 20px;  */
  }

  /* Esconde barra de rolagem */
  .content-section .cards::-webkit-scrollbar {
    display: none;
  }
  .content-section .cards {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Cards iguais */
  .content-section .cards .card {
    flex: 0 0 auto; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: visible; 
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px; 
    padding: 2px; 
    background-color: rgba(0, 0, 0, 0.3); 
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    will-change: transform, box-shadow;
  }

  .content-section .cards .card img {
    width: auto;
    max-height: 220px;
    border-radius: 10px;
    object-fit: contain;
    background-color: black;
    transition: transform 0.4s ease-in-out, filter 0.3s ease;
  }

  .content-section .cards .card:hover {
    transform: scale(1.01);
    z-index: 2; 
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }

  .content-section .cards .card:hover img {
    filter: brightness(1.2) contrast(1.1);
  }

   .carousel-container {
  position: relative; /* Essencial para as setas ficarem dentro da div */
  display: flex;
  align-items: center;
}

/* setas */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 12px;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center; /* centraliza o ícone dentro do botão */
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.7);
}

.arrow.left {
  left: 5px;
}

.arrow.right {
  right: 5px;
}

  /* ================= MEDIA QUERIES ================= */
  @media screen and (min-width:530px) {
    .content-section h2 {
      font-size: 1.6rem;
    }
    .saga-title {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 230px;
    }
  }

  @media screen and (min-width:768px) {
    .content-section h2 {
      font-size: 1.8rem;
    }
    .saga-title {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }

          .carousel-container:hover .arrow {
    opacity: 1;
  }
  }

  @media screen and (min-width:992px) {
    .content-section h2 {
      font-size: 2rem;
    }
    .saga-title {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function pb(){const[l,o]=A.useState([]),s="ee96350ded551df8af41839e03615c58",c=Ht(),f=A.useRef(null),p=async()=>{const b=await(await fetch(`https://api.themoviedb.org/3/search/movie?query=star%20wars&api_key=${s}&language=pt-BR&page=1`)).json();o(b.results)};A.useEffect(()=>{p()},[]);const g=(h,b)=>{c(`/details/${h}`,{state:{type:b}})},S=()=>{f.current&&f.current.scrollBy({left:-500,behavior:"smooth"})},x=()=>{f.current&&f.current.scrollBy({left:500,behavior:"smooth"})};return d.jsx(mb,{id:"sagas",children:d.jsxs("div",{className:"content-section",children:[d.jsx("h2",{className:"main-title",children:"Sagas Populares"}),d.jsx("p",{className:"saga-title",children:d.jsx("strong",{children:"Universo Star Wars"})}),d.jsxs("div",{className:"saga-block carousel-container",children:[d.jsx("button",{className:"arrow left",onClick:S,children:d.jsx(we,{})}),d.jsx("div",{className:"cards",ref:f,children:l.filter(h=>h.poster_path).map(h=>d.jsx("div",{className:"card",onClick:()=>g(h.id,h.media_type),children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${h.poster_path}`,alt:h.title})},h.id))}),d.jsx("button",{className:"arrow right",onClick:x,children:d.jsx(Se,{})})]})]})})}const gb=pt.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;

  .content-section p {
    font-size: 1.1rem;
    padding-left: 20px;
    margin-left: 15px;
    padding-bottom: 10px;
    color: #ccc;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .content-section .cards {
    display: flex;
    gap: 15px;
    margin-left: 18px;
    align-items: center;
    height: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px;
    padding-bottom: 20px; /* igual a Section8 */
  }

  /* Esconde barra de rolagem */
  .content-section .cards::-webkit-scrollbar {
    display: none;
  }
  .content-section .cards {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Cards iguais */
  .content-section .cards .card {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: visible;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 2px;
    background-color: rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    will-change: transform, box-shadow;
  }

  .content-section .cards .card img {
    width: auto;
    max-height: 220px;
    border-radius: 10px;
    object-fit: contain;
    background-color: black;
    transition: transform 0.4s ease-in-out, filter 0.3s ease;
  }

  .content-section .cards .card:hover {
    transform: scale(1.01);
    z-index: 2;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }

  .content-section .cards .card:hover img {
    filter: brightness(1.2) contrast(1.1);
  }

     .carousel-container {
  position: relative; /* Essencial para as setas ficarem dentro da div */
  display: flex;
  align-items: center;
}

/* setas */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 12px;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center; /* centraliza o ícone dentro do botão */
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.7);
}

.arrow.left {
  left: 5px;
}

.arrow.right {
  right: 5px;
}

  /* ================= MEDIA QUERIES ================= */
  @media screen and (min-width: 530px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 230px;
    }
  }

  @media screen and (min-width: 768px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
       .carousel-container:hover .arrow {
    opacity: 1;
  }
  }

  @media screen and (min-width: 992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function xb(){const[l,o]=A.useState([]),s="ee96350ded551df8af41839e03615c58",c=Ht(),f=A.useRef(null),p=async()=>{const b=await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${s}&language=pt-BR&query=Indiana%20Jones`)).json();o(b.results)};A.useEffect(()=>{p()},[]);const g=(h,b)=>{c(`/details/${h}`,{state:{type:b}})},S=()=>{f.current&&f.current.scrollBy({left:-500,behavior:"smooth"})},x=()=>{f.current&&f.current.scrollBy({left:500,behavior:"smooth"})};return d.jsx(gb,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Universo Indiana Jones"})}),d.jsxs("div",{className:"carousel-container",children:[d.jsx("button",{className:"arrow left",onClick:S,children:d.jsx(we,{})}),d.jsx("div",{className:"cards",ref:f,children:l.filter(h=>h.poster_path).map(h=>d.jsx("div",{className:"card",onClick:()=>g(h.id,h.media_type),children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${h.poster_path}`,alt:h.title||h.name})},h.id))}),d.jsx("button",{className:"arrow right",onClick:x,children:d.jsx(Se,{})})]})]})})}const vb=pt.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;

  .content-section p {
    font-size: 1.1rem;
    padding-left: 20px;
    margin-left: 15px;
    padding-bottom: 10px;
    color: #ccc;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .content-section .cards {
    display: flex;
    gap: 15px;
    margin-left: 18px;
    align-items: center;
    height: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px;
    padding-bottom: 20px; /* igual a Section8 */
  }

  /* Esconde barra de rolagem */
  .content-section .cards::-webkit-scrollbar {
    display: none;
  }
  .content-section .cards {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Cards iguais */
  .content-section .cards .card {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: visible;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 2px;
    background-color: rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    will-change: transform, box-shadow;
  }

  .content-section .cards .card img {
    width: auto;
    max-height: 220px;
    border-radius: 10px;
    object-fit: contain;
    background-color: black;
    transition: transform 0.4s ease-in-out, filter 0.3s ease;
  }

  .content-section .cards .card:hover {
    transform: scale(1.01);
    z-index: 2;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }

  .content-section .cards .card:hover img {
    filter: brightness(1.2) contrast(1.1);
  }

   .carousel-container {
  position: relative; /* Essencial para as setas ficarem dentro da div */
  display: flex;
  align-items: center;
}

/* setas */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 12px;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center; /* centraliza o ícone dentro do botão */
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.7);
}

.arrow.left {
  left: 5px;
}

.arrow.right {
  right: 5px;
}


  /* ================= MEDIA QUERIES ================= */
  @media screen and (min-width: 530px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 230px;
    }
  }

  @media screen and (min-width: 768px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
     .carousel-container:hover .arrow {
    opacity: 1;
  }
  }

  @media screen and (min-width: 992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function bb(){const[l,o]=A.useState([]),s="ee96350ded551df8af41839e03615c58",c=Ht(),f=A.useRef(null),p=async()=>{const b=await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${s}&language=pt-BR&query=Jurassic%20Park`)).json();o(b.results)};A.useEffect(()=>{p()},[]);const g=(h,b)=>{c(`/details/${h}`,{state:{type:b}})},S=()=>{f.current&&f.current.scrollBy({left:-500,behavior:"smooth"})},x=()=>{f.current&&f.current.scrollBy({left:500,behavior:"smooth"})};return d.jsx(vb,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Universo Jurassic Park"})}),d.jsxs("div",{className:"carousel-container",children:[d.jsx("button",{className:"arrow left",onClick:S,children:d.jsx(we,{})}),d.jsx("div",{className:"cards",ref:f,children:l.filter(h=>h.poster_path).map(h=>d.jsx("div",{className:"card",onClick:()=>g(h.id,h.media_type),children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${h.poster_path}`,alt:h.title||h.name})},h.id))}),d.jsx("button",{className:"arrow right",onClick:x,children:d.jsx(Se,{})})]})]})})}const yb=pt.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;

  .content-section p {
    font-size: 1.1rem;
    padding-left: 20px;
    margin-left: 15px;
    padding-bottom: 10px;
    color: #ccc;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .content-section .cards {
    display: flex;
    gap: 15px;
    margin-left: 18px;
    align-items: center;
    height: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px;
    padding-bottom: 20px; /* igual a Section8 */
  }

  /* Esconde barra de rolagem */
  .content-section .cards::-webkit-scrollbar {
    display: none;
  }
  .content-section .cards {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Cards iguais */
  .content-section .cards .card {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: visible;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 2px;
    background-color: rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    will-change: transform, box-shadow;
  }

  .content-section .cards .card img {
    width: auto;
    max-height: 220px;
    border-radius: 10px;
    object-fit: contain;
    background-color: black;
    transition: transform 0.4s ease-in-out, filter 0.3s ease;
  }

  .content-section .cards .card:hover {
    transform: scale(1.01);
    z-index: 2;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }

  .content-section .cards .card:hover img {
    filter: brightness(1.2) contrast(1.1);
  }
  .carousel-container {
  position: relative; /* Essencial para as setas ficarem dentro da div */
  display: flex;
  align-items: center;
}

/* setas */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 12px;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center; /* centraliza o ícone dentro do botão */
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.7);
}

.arrow.left {
  left: 5px;
}

.arrow.right {
  right: 5px;
}


  /* ================= MEDIA QUERIES ================= */
  @media screen and (min-width: 530px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 230px;
    }
  }

  @media screen and (min-width: 768px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
    
    .carousel-container:hover .arrow {
    opacity: 1;
  }
  }

  @media screen and (min-width: 992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function wb(){const[l,o]=A.useState([]),s="ee96350ded551df8af41839e03615c58",c=Ht(),f=A.useRef(null),p=async()=>{const b=await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${s}&language=pt-BR&query=Harry%20Potter`)).json();o(b.results)};A.useEffect(()=>{p()},[]);const g=(h,b)=>{c(`/details/${h}`,{state:{type:b}})},S=()=>{f.current&&f.current.scrollBy({left:-500,behavior:"smooth"})},x=()=>{f.current&&f.current.scrollBy({left:500,behavior:"smooth"})};return d.jsx(yb,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Universo Harry Potter"})}),d.jsxs("div",{className:"carousel-container",children:[d.jsx("button",{className:"arrow left",onClick:S,children:d.jsx(we,{})}),d.jsx("div",{className:"cards",ref:f,children:l.filter(h=>h.poster_path).map(h=>d.jsx("div",{className:"card",onClick:()=>g(h.id,h.media_type),children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${h.poster_path}`,alt:h.title||h.name})},h.id))}),d.jsx("button",{className:"arrow right",onClick:x,children:d.jsx(Se,{})})]})]})})}const Sb=pt.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;

  .content-section p {
    font-size: 1.1rem;
    padding-left: 20px;
    margin-left: 15px;
    padding-bottom: 10px;
    color: #ccc;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .content-section .cards {
    display: flex;
    gap: 15px;
    margin-left: 18px;
    align-items: center;
    height: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px;
    padding-bottom: 20px; /* igual a Section8 */
  }

  /* Esconde barra de rolagem */
  .content-section .cards::-webkit-scrollbar {
    display: none;
  }
  .content-section .cards {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Cards iguais */
  .content-section .cards .card {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: visible;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 2px;
    background-color: rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    will-change: transform, box-shadow;
  }

  .content-section .cards .card img {
    width: auto;
    max-height: 220px;
    border-radius: 10px;
    object-fit: contain;
    background-color: black;
    transition: transform 0.4s ease-in-out, filter 0.3s ease;
  }

  .content-section .cards .card:hover {
    transform: scale(1.01);
    z-index: 2;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }

  .content-section .cards .card:hover img {
    filter: brightness(1.2) contrast(1.1);
  }

    .carousel-container {
  position: relative; /* Essencial para as setas ficarem dentro da div */
  display: flex;
  align-items: center;
}

/* setas */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 12px;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center; /* centraliza o ícone dentro do botão */
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.7);
}

.arrow.left {
  left: 5px;
}

.arrow.right {
  right: 5px;
}

  /* ================= MEDIA QUERIES ================= */
  @media screen and (min-width: 530px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 230px;
    }
  }

  @media screen and (min-width: 768px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
      .carousel-container:hover .arrow {
    opacity: 1;
  }
  }

  @media screen and (min-width: 992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function zb(){const[l,o]=A.useState([]),s="ee96350ded551df8af41839e03615c58",c=Ht(),f=A.useRef(null),p=async()=>{const b=await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${s}&language=pt-BR&query=The%20Lord%20Of%20Rings`)).json();o(b.results)};A.useEffect(()=>{p()},[]);const g=(h,b)=>{c(`/details/${h}`,{state:{type:b}})},S=()=>{f.current&&f.current.scrollBy({left:-500,behavior:"smooth"})},x=()=>{f.current&&f.current.scrollBy({left:500,behavior:"smooth"})};return d.jsx(Sb,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Universo Senhor dos Anéis"})}),d.jsxs("div",{className:"carousel-container",children:[d.jsx("button",{className:"arrow left",onClick:S,children:d.jsx(we,{})}),d.jsx("div",{className:"cards",ref:f,children:l.filter(h=>h.poster_path).map(h=>d.jsx("div",{className:"card",onClick:()=>g(h.id,h.media_type),children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${h.poster_path}`,alt:h.title||h.name})},h.id))}),d.jsx("button",{className:"arrow right",onClick:x,children:d.jsx(Se,{})})]})]})})}const Ab=pt.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;

  .content-section p {
    font-size: 1.1rem;
    padding-left: 20px;
    margin-left: 15px;
    padding-bottom: 10px;
    color: #ccc;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .content-section .cards {
    display: flex;
    gap: 15px;
    margin-left: 18px;
    align-items: center;
    height: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px;
    padding-bottom: 20px; /* igual a Section8 */
  }

  /* Esconde barra de rolagem */
  .content-section .cards::-webkit-scrollbar {
    display: none;
  }
  .content-section .cards {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Cards iguais */
  .content-section .cards .card {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: visible;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 2px;
    background-color: rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    will-change: transform, box-shadow;
  }

  .content-section .cards .card img {
    width: auto;
    max-height: 220px;
    border-radius: 10px;
    object-fit: contain;
    background-color: black;
    transition: transform 0.4s ease-in-out, filter 0.3s ease;
  }

  .content-section .cards .card:hover {
    transform: scale(1.01);
    z-index: 2;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }

  .content-section .cards .card:hover img {
    filter: brightness(1.2) contrast(1.1);
  }

  .carousel-container {
  position: relative; /* Essencial para as setas ficarem dentro da div */
  display: flex;
  align-items: center;
}

/* setas */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 12px;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center; /* centraliza o ícone dentro do botão */
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.7);
}

.arrow.left {
  left: 5px;
}

.arrow.right {
  right: 5px;
}



  /* ================= MEDIA QUERIES ================= */
  @media screen and (min-width: 530px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 230px;
    }
  }

  @media screen and (min-width: 768px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
    .carousel-container:hover .arrow {
    opacity: 1;
  }
  }

  @media screen and (min-width: 992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function Eb(){const[l,o]=A.useState([]),s="ee96350ded551df8af41839e03615c58",c=Ht(),f=A.useRef(null),p=async()=>{const b=await(await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${s}&language=pt-BR&with_companies=420`)).json();o(b.results)};A.useEffect(()=>{p()},[]);const g=(h,b)=>{c(`/details/${h}`,{state:{type:b}})},S=()=>{f.current&&f.current.scrollBy({left:-500,behavior:"smooth"})},x=()=>{f.current&&f.current.scrollBy({left:500,behavior:"smooth"})};return d.jsx(Ab,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Universo Marvel"})}),d.jsxs("div",{className:"carousel-container",children:[d.jsx("button",{className:"arrow left",onClick:S,children:d.jsx(we,{})}),d.jsx("div",{className:"cards",ref:f,children:l.filter(h=>h.poster_path).map(h=>d.jsx("div",{className:"card",onClick:()=>g(h.id,h.media_type),children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${h.poster_path}`,alt:h.title||h.name})},h.id))}),d.jsx("button",{className:"arrow right",onClick:x,children:d.jsx(Se,{})})]})]})})}const jb=pt.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;

  .content-section p {
    font-size: 1.1rem;
    padding-left: 20px;
    margin-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #ccc;
  }

  .carousel-container {
    position: relative; /* Essencial para posicionar setas */
    display: flex;
    align-items: center;
  }

  .content-section .cards {
    display: flex;
    gap: 15px;
    margin-left: 18px;
    align-items: center;
    height: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px;
    padding-bottom: 20px;
  }

  /* Esconde barra de rolagem */
  .content-section .cards::-webkit-scrollbar {
    display: none;
  }
  .content-section .cards {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Cards */
  .content-section .cards .card {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: visible;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 2px;
    background-color: rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    will-change: transform, box-shadow;
  }

  .content-section .cards .card img {
    width: auto;
    max-height: 220px;
    border-radius: 10px;
    object-fit: contain;
    background-color: black;
    transition: transform 0.4s ease-in-out, filter 0.3s ease;
  }

  .content-section .cards .card:hover {
    transform: scale(1.01);
    z-index: 2;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }

  .content-section .cards .card:hover img {
    filter: brightness(1.2) contrast(1.1);
  }

    .carousel-container {
  position: relative; /* Essencial para as setas ficarem dentro da div */
  display: flex;
  align-items: center;
}

/* setas */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 12px;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center; /* centraliza o ícone dentro do botão */
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.7);
}

.arrow.left {
  left: 5px;
}

.arrow.right {
  right: 5px;
}

  /* ================= MEDIA QUERIES ================= */
  @media screen and (min-width: 530px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 230px;
    }
  }

  @media screen and (min-width: 768px) {
    /* setas */
    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%); /* centraliza vertical */
      background: rgba(0, 0, 0, 0.4);
      border: none;
      color: white;
      font-size: 2.5rem;
      cursor: pointer;
      padding: 12px;
      z-index: 10;
      border-radius: 50%;
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center; /* centraliza o ícone dentro do círculo */
      transition: opacity 0.3s ease, background 0.3s ease;
    }

    .arrow:hover {
      background: rgba(0, 0, 0, 0.7);
    }

    .arrow.left {
      left: 5px;
    }

    .arrow.right {
      right: 5px;
    }

    /* só mostra as setas quando o mouse passa por cima */
    .carousel-container:hover .arrow {
      opacity: 1;
    }
  }

  @media screen and (min-width: 992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function Rb(){const[l,o]=A.useState([]),s="ee96350ded551df8af41839e03615c58",c=[268,49026,297802,297761,272,141052,297762,474395,155,209112,464052,1042305],f=Ht(),p=A.useRef(null),g=async()=>{try{const b=c.map(M=>fetch(`https://api.themoviedb.org/3/movie/${M}?api_key=${s}&language=pt-BR`).then(k=>k.json())),T=await Promise.all(b);o(T.filter(M=>M.poster_path))}catch(b){console.error("Erro ao buscar filmes DC:",b)}};A.useEffect(()=>{g()},[]);const S=(b,T)=>{f(`/details/${b}`,{state:{type:T}})},x=()=>{p.current&&p.current.scrollBy({left:-500,behavior:"smooth"})},h=()=>{p.current&&p.current.scrollBy({left:500,behavior:"smooth"})};return d.jsx(jb,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Universo DC"})}),d.jsxs("div",{className:"carousel-container",children:[d.jsx("button",{className:"arrow left",onClick:x,children:d.jsx(we,{})}),d.jsx("div",{className:"cards",ref:p,children:l.map(b=>d.jsx("div",{className:"card",onClick:()=>S(b.id,b.media_type),children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${b.poster_path}`,alt:b.title||b.name})},b.id))}),d.jsx("button",{className:"arrow right",onClick:h,children:d.jsx(Se,{})})]})]})})}const Nb=pt.div`
  max-height: 700px;
  width: 100%;
  background-color: black;
  color: white;

  .content-section {
    padding: 25px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  /* wrapper para centralizar social + informations */
  .content-main {
    flex: 1; /* ocupa todo espaço */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* centraliza no meio */
  }

  .content-section .social-media {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
   
  }

  img {
    width: 50px;
    margin-bottom: 20px;
     cursor: pointer;
    transition: .4s ease;

    &:hover{
        transform: scale(1.08);
    }
  }

  .content-section .informations {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
  .content-section .social-media{
    align-items: center;
    justify-content: center;
}

  .content-section .informations p {
    font-size: 1.1rem;
    margin-bottom: 6px;
    text-align: center;
    color: white;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .content-section p {
    color: #ccc;
  }

  /* parte de baixo sempre fixa */
  .content-section .foot-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .content-section .foot {
    font-size: 1rem;
    color: #757575;
    text-align: center;
    margin-top: 15px;
  }

  @media screen and (min-width: 768px) {
    .content-main {
      align-items: center;
      justify-content: center; /* garante centralização vertical */
    }

  .content-section .social-media{
    align-items: center;
    justify-content: center;
}

    .content-section .informations {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      width: 100%;
    }

    .content-section .informations .p1,
    .content-section .informations .p2,
    .content-section .informations .p3 {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    img {
      width: 40px;
    }

    .content-section .informations p {
      text-align: start;
      font-size: 1.1rem;
    }

    .content-section .foot {
      font-size: 1rem;
      padding-top: 20px;
    }
  }

  @media screen and (min-width: 992px){
       .content-section .informations{
        display: flex;
        align-items: center;
        justify-content: space-around;
       
    }


  }

  @media screen and (min-width: 1200px) {
    .content-section .informations p {
      font-size: 1.2rem;
    }

 

    .content-section .foot {
      font-size: 1.1rem;
    }
    
  }
`,Tb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAANxUlEQVR4nO3dCaxdRR3H8SO7S2XRyL6IoBGCCkHZ1yKJQBcpuAC2toIGiomxItgWQVGjYQtBlkJFLTsChYgBpNCUxCUqiywFChWhLQFBKNgShLZfM3n/anm2772ZM+fOzDm/T/IS0pB7Z/5z5p4zc2b+U1UiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiJSB/A+YC9gAnAWcClwFTATuKsjfzOtzpdaDMZbTDZJ3T7SY8CHgBOAa4HnkME8B1wDHA9sn7r9pAHAtsBU4InUV1sLPG6x3DZ1u0oNwFrAkcBsYHnqq6qFlgP3WIzXSt3e4tcxjgYeTX0FdcgjwFhgndTtLwMADtVjVFKPAcNTXwfSD7A5MCP11SH/9Wtg69TXhfR1jmOAV//XNpKJxcAXUl8fnQVsAFyQ+iqQQbk7+7tSXy+dAmwHPDR420gmHgC2SX3ddAKwM7AgdYtL0AvHj6e+floN2AN4yb9tJBMvA/umvo5ayQUWWNqDRnwFmA/8BZiTwTqppv/mWF3nW92bthTYO/X11CrALvbrE9trNiU5Cdgf+EDVccCmwAEWk9ssRrH90z0qp65rmwbkiyI2zr+Bm4BRwHqp65c7YD1gNHCzxS4WN47UwD3CVO79kRpkiU0Lb5W6XoXfXc6M+N7pr8A7U9erWMBlERphBXCFHp+id5RfWmzrujh1fUp+Q17Xk5o1aQ6wH/BUhHb6XOq6FAXYIsJt/Drgvanr0nbAhsANEZalbJa6LsUArq8RbHfbPy11HboGmFLzkevq1HUoacl6qGXAV1LXoavo25br2iDUwanrkDW34abGfg7366XOkRh9+/1D7yRzgbVT1yFbwHGE02NVXo9bobREfnWAdwAPBwb1+tTll7ezTCgh3FZp7XHvDxhTYypXs1V5zm7ND2zT0anLnx3LPuLLPevqPUem6FvTFTIeuTt12XNcbxUSyCtSl73lGSfHAz+xbItHhewMBK4MTCmkdVorAacHrq3S8pEGACetYRXvIuCwgIQarwe07+TmalgYYF5AAM9LXe42Ar41SNyXAZ/x/MyQ3AFzm6tleblyfbll11umLnvbuNy7Q1zSvtBnFa5bQR24VH67quvsxZKvm1KXu42A73m0wRjPz74loJ0nVF1nWdZ9jaoK56amgd1tevvLwMnAqfZ3sv3bGPt/hvWoTLd6tMEPejCNr/VZAUcQvFraTkBgXdtT/13bBx6yQ9I91vzWJjT2cZ/ZQDl/41GeH3t+9vrAv3zrXHWZTSX6uq0qp1OMsu29bsYtNnex3QiMjNVZgHM8vn9swOffHlDPjauuctktAgI2qcqYm78HzgdepHf+4Wb16ubDBXYb4vuoxSGnTwGnBNRtz6qr7EWUr/2rDAE7Aj+LnNjAl/vuy93MYI16XDSE7/la4GcfGFCncVVXAT8KCNimVX6D7Qtq7oOI7S27owwLfDT86RruJG8A36gRK/fS0JfXZECrAJd4BmtxlRG3NDtySqLYFobu9wZ2Bc623Fi32uRA7fcSAVupL6q6yk5W9TGvyoD7Za6xnDsFN5jfsMoA/it8Z1Rd5Tnv7tyfQZl3KvR4tydySB4NPOhZ7plVVwGzPIN1b+Lyjg5ceJcLV/aRiWN4r2eZZ1VdFbAHZHbCso6zwW/p3GTCCQnjOLuUNk+ulGDZCtcYWQRzsSLV+yQKafMslBAsO964TZ0jaRYYCmjzbOQeLFsq0sT7DZeuczpwojs2GdjBLamwdxDr2n+7fzvENi9Nr7G/eyBv9XpMQuZtnpWcgwV8IvKA3M0iTQU+WHPvzOmRz4J/vZezW2Tc5tnJNVjAe4DHiOM+4GiX1ihyGd3d5feRytizzDBk2uZZyjVYAS8wV2dRyIrXgLKOAP4eobzXd7nNs5RjsGz5SF3TgHc3XdZ+dzy3SDH7YwjIsM2zlVuwbOGh7wau/gdUfrHJMg5S/mNrjpsWNr17kczaPGu5BSsw+8ZK7pDRfZosn8dR2XX2opzbpTbPWk7Bsv0cy2qc2rpL1Y5Tgd+qs5+kpDbPXk7Bss1OIV7PMf2p3UlCt/pO60KbZy+XYNk22TdpWbp+G5OE7kzcus1tXoRcgmV7yLP6pY2lxuzWuW1u8yLkECxb2uGSHvh61k2vVplzCacD35O80FBqoeRtXowcgmXrrUJ8tiqEe78RWMfD29jmxcghWJa3ytfvqsIAf8zh7ToZtHkxUgfLZWgMnOmJ/svatMA75WuxH7NSt3lRUgfL0oH6eiL2wsMengHpFiX62ityOdRBSgmW5cr1NaUqFHBG6vqiDlJOsCyRtK/tq0LZagFfd0YugzpIKcEKWJj4VFU44GnPOi+I/P3qICUEy1bu+u41n14Vzh186lnnFTHf96iDlNNBPom/E6vC2eE8vnaL+P3qIIV0kCPxN7wqHPDplC9FUQcppoO4I858BSdcKPzQ1LERv18dpJAO8nX8eR8akxvg/QH1nhjx+9VBCukgk/FX1NmIA5wV6Os7Eb9fHWSo1EF6Tx2kIHrE6j09YhUkcQdx2dp9aZBekzpIu6d5D6kKBxwaUO/REb9fHaSQDrI7/k6qChf4aLlrxO9XBymkgwzr6FKTn3vWeYWWmiSSOlgBJ9TOrwoXsD/92cjfrw7S8uXujSVVaxrwkYD63hG5DOogLd8wNbUqFHBmQH0nRy6DOkgpwXK5dPHXtS23e0YuhzpIKcEC1rHEBL5GVIWxI6x9veZiFLkc6iAlBQu4EX9/qAoD/Cmgnte1sc2LUXjiuDFVIWocCnRYG9u8GDkEyx6znsffgkJSjw6zg3F8vaDUo4nlEizgPMJcXrVvD/pK57S5zYuQS7Bcqn9L+R/i2CpTwJcC6/QGsFWb27wIOQWrxjEB7gCd/arMuOlZOzMxxKVdaPPs5RQsYAc7fqwNR7B9rMYRbG82uayfjNo8e7kFq8ZYBLsg983kzvFSjXqc3aU2z1puwaox47Pq49axicccdY6BbnxmjszaPGs5BqvGYTOrmt7LKWDr2KGzVas6qottnq1cgwXMoL5FMbeqDlDWEcAzEcp7bdNlzbnNs5RrsNyvPzDXs2xr8oDrKMBakRcejgg8NWp15rm7UKzyldjmWco5WDYTVOd5vr8n7XyOHWvu5zgzcFXumizt5QwcGbd5dnIPFjCyxtTvQJ62McNEy5Xrzu3YxI6EW8/++8OWYGGibZMNOal2MK5uR/Q4prM9y6gOknOwgOMC9q6XwNVpQoJ4zvYspzpI7sECJrWsk7i6fDNRLGd7llUdpIRg2UC7icetXlsGnJAwjrM9y9vpDjLLM1j3Ji7vyMgD915b2usxR3+uDT3LPKvqKuBWz2Ddn0GZdwIeoTyPu5m5DOL3oGe5Z1ZdBVzlGax5VQbsPcnVlOPKXDZ3AfM9yz6j6irgYs9gLa4yYstS6qzdatqCXiwf8RGQJOOiqquAHwY0+qZVRmwd1HmZDeDdkvVzcrlrrARsHlCXs6quAsYHBGz/Kt9jBS6rsTMxBrcTcFquxzQABwbUaVzVVcBeAQGbVGXMtu+ea0kPeuV5u2M0sk02FuDbqRPXFcWWVPi6rSqAZUs5wuWWCkxON5hX3Qpc4PDYyd2aAtwRUM+Nqy4Dngu4MIo6K9A6i7tbTgHudBnTAy6UZ+0Cm2y7BovoFCsBGwBLPOu8sOo64JqUJx4lnirezU66GmeLEk+1v4n25v5I+3+yGmyHcLNpAe18VdV1btlDQOBuSl1uafylsDO+6jpg+4DAuZmiLVOXXbwmLtzUs69th/gV7WbLIHydn7rcMjTAhQHt++gQP779bPDqa0luLw3l/wFbBC7wPG01H9dN7lYKLA8I4i9Sl10amYRx18LWg3x0twD3BG78yS7tp/QBDgrcaNbdJe5rYlOaIZ4CNkxdfnk7YCPgb4FtOqrfx4mlsnkoMKC/Sl1+eTs3FR/Ylo/ETJHUKsAxhJuSuvzSx9Ibhfq8fYz0B6wNPBYYWPese3zqOnQd8NUanUN3j8EAw0tNSNB19HUO1wahP3AHpq5Dm6cGVw301NR16OD48Qzq6e7W2sCdZ4trBtwd76zZrd7MVt1cs61e0UtfT26wRn0uQcABqevS8vccT0dop6z2zRcDuCRC8FdYVo/NU9enZctHriaOC1PXp1jA+i4XVuT92lrCUG9V7gU1Dgftz+XI2iB1vYoGbGPpa2JxS+VvsTf366euXyE7AY+y/RwhS9bX5Jnc99AXA9jZTpKNza0Ivh04xTJudP4xzCZIDrIEC3cEbJMdCnfI6EdT17VVgL0j3toH2/PuBvf3AXOAu1r+N8fqOt/q3rQlnc5U0iTgU8CLPWhEacbLwD6pr6NWc7fmwKwgktaiXh711mk2cI81uyXN+7MG5GmmgN2Uo+RtmmYL02dYd0sVJC+vAGNSXx/S10k2c4vdWnaOYMlu0NqqDAEHA3NTXx0d9rDWvmXObbgBRtjcvvSuY4x1G95St7/47VEYDdwdmFJIBrbcDmEd5WKdur2l/iI7lxVdj1/1PeqSumnatqWA7YAJdoCoe3klA1tosXKngSlXbte4A1qAPewIgu/bwaJuRmxmBuukevU30+p8scVgnMVko9TtIyIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiUpXtP6MrU4WpL2ZMAAAAAElFTkSuQmCC",Db="/Movies-ReactJS/assets/facebook2-1kk7hThO.png",Ob="/Movies-ReactJS/assets/x2-X5CHVD4u.png",Cb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAAJFBMVEVHcEzz8/P6+vr8/Pz9/f39/f3+/v7+/v7+/v7+/v7+/v7///8O3y3aAAAAC3RSTlMAEyc/WHKLo8DX7jCgBDoAAAjBSURBVHja7dxPTFVnGgbw5xwuOjqbc7G2qd1cLk0kcYPAYpzZ0KqTTLuhiaUdcMEsqFWnSSWpxZBxZpy0MrKApjM6LRtMHGK9G+og/76Nq+ksWTKLKltt4j37AqdcQd425PLHcjmH8zw/gro9j8/7+XHPGyEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIim+Bla/L5urqmJc3NJ0xz05LGxny+NpvFjvJQEVkv8IIsslj+fflP2LwoRBHFKPzxVzHZAXjZbJDNekG2BJVRLInCpe9iMUxGAF5tzdLz1toz7wRL40mx+PBJGEcANUsPvfRdEyB+0cMnxYfFpe+dCaAmn883ZpFExW8fPHjwsHIBePmSAMkWPSgJsb285pNnrrld5PbFU8cDbJdX3y+4XWj609exDQ68M+R2ramPjv7Mp2/rd7vcZNfzZ3DwmkuF22/heXjvutT4JMCWvdDvUmTyNWzRYZcy3aTPb7pJn990b+n5qROodinVik3xh1xKTeWwGR0ute5hE+pdil3BhjIu1VqwkfMu1caxgb0u5T7Eurx+l3KTAdbzsku9z7AOv+BSbzqH8o44AndRlldwBKYDlLPPURhEOf2OwiTK2ONIdG7upyC6n4mqHI0GGHPI0bgJY3odjQnSCTANnBNgbnJOgJkoMwHMM7DfURkudwvivQsVHJXptW+DyLSuPQK4D4E3HZmxtUcA9SGQcXRayn8YxvjB2BFH5+7aaxDzVWjI0ZkCjO8I5VDio6QKhBpgAWRAqAUWQB6E8jAdjtA9mF5HaAJmyBGawirPUQpWD0EflHIKQAEAvl0E6TSsBpAFpSznB4JmbLUBOVDyFcAzjhQAZCwJPrk5BUAeABTAU790pEYB+AACkPIUgN2EKY2pAct6HakJNWD5uxCAU/RbNQA+4INWzraEOTWoASV7HK1ONcBW5CgNqgElrzhaXwM+kAMt334a5jSmBsAHNTUAPhCAlqcAFIAPD8QCBUAfQEYNUAAKoPLmB9gbMDFKHkB0/T53AIj65rgDwMLZMKEBBNgZ8+eQPN4OBoDvTpMHgEd/Ig8A/xsgDwDjwwkMYEeN3Eey7HADEF2doRwBs3gppBwBM9/OOQLm+w7OETCPPyAPALMDrAHYdYDzEDQjo0gK30MMohszSIYgngCw2DOXlAAQj4VzrCNg1wHWEbDrAOcImNnLnCNgvhnkHAEzPko6AnYduE85Amaxb461Afa6hLIBZv48ZwPM4z9yNsD8/zJnA8w3A6wNsO0J1gbY9gRpA+LfnrAG0F4HfCTCfDt5APj+NOLhB0iGRx8gDp6PpJgd4GyAGR9mbYBtT7A2wLYn6BoQ//aEjySZb2cdAXtdwjoC9rqEcwTM7J85R8D8d5h1BGx7gnUEbHuCdQRse4J0BGx7grUBdh1gbYBdB1gPQdueYB0Be13COQJmYpS1AbY9wdoA255gPQTtdQnpCNj2BOcImMenOUfAPLrMGoBdB8gDwMQw5SFoopH7lIegifpmKEfALFwKuQPAfDtrALY9wRqAbU+QB4DZAYIA4tie0H+ru2sCeKOTO4D6C9wNeOlz7hGovgXqADIjoA6g6mqAyvFDJJzX04DKiXwk3bkW7s8D3mgFmBtw7AL3TfDwFVAH8OI/UGGRHyK5Mv/kfjNUdSOA4TsE/Z4cQDwC3tkW7s8Dft8KQ3gVPvYHGMIzoP4K90diL34OQzgC1f+GIRyBqusAcwP8vhyYG+CdbeB+L9DeCjCPwK87YQhHoP6vtK/G7ALAOQJ2ASAegcwI99th/2oAEI+Ad6kBYB6B9haAswG2A8HcgF9dAJgb8NLfAOYGHLzFvSSVuQ7qAPwbAWLiR4m4AOQQk9BPyg4EZwNsB4KzAbYDwdkA24HgbIDtQHA2wHYgOBtgOxCcDbAdCNIG2A4EcwPaWxG3MM4AjnXCcI2A7UBwjoC9AuEcAXsFwjkCtgPBOQK2A0E8ArYDEX8AnBcA4yOMbwcifpEFENsORPwBUF4ALICYLgCUZ4DtQDCOgO1A0AZgOxCcZ4DtQHCeAbYDwTgCtgPBGYDtQFAHUH0L1AFkRpDMACKCVyBlhTsWgNeTA3MA3rkWUAfwu1YkUghgjyPWaQ3gFCoA+gAyCkAjwB4AQtCKoAAUADAHWov6b3XVAJ0B7A3IqAFYBKuV8v/C0fqLGlBS7Wi1qgElvqOVUwOeKjhS0wB8y4GNdb/XkZpQA5a96UiNqQHLXnGkvl5pQAhS0UoACyA1sxLAIkjNKQAFoACe6neUJgHAtyToWPN/4yj9Rw14FkARlOyx9zpKH642YBGU5hSAAnhmyBGaQolvWbBZVAAWwAwILcDsc4QGYaodoVYY3xHKwc6AxTlQWfvMHY7OPQDmiKNzF4DZx/mPgMk4Oi0wjFsi0/ipDs4z0Ox3ZIbxU9Wk90BT4DwCTAfnEWD2Ex4BzDeBBhjGbcEJrHXIEbmJtapIJ8D0ck6AOcQ5AaaKdAJMB+ctyOxxJDphGI/BSZTzsqMwiHK8giMwHaCsI47AXZTnFwgKkINhPAU+w3q8fpdykwHWtZdgN259512qjWMjGZL3QeXVuxS7gk3o4PgpqDx/yKXUVA6bUk3yNqi8wy6VugHqBLoB6gS6AeoEurFFL/S7FJl8DVvmvetS45MAz+PgNZcKt9/C8zrQ1r/ry991FD9L3TtDbtea+ugotsGr7xfcLjT96evYLl7zyTNful3kq4unmgJsM6/u5Jm/u8T718VTjQEq58CJtkt3XCLdudF1/Ch2Rk3TibfP9HxZSMSsf3X14tsnmmoRBy/ffLLt474vYujEnS/6Pu46dTwfIBm8mrqlVrS9Z2lU5pnf61r6226sDbBNPFRE1gt+/JVFFl6AzYtCFEtfURiFz34vohI87KTlHDwEAAIPqyKEK78+fWIRERERERERERERERERERERERERERERERERERERERERERERERER2dAPzihcjVvoSgUAAAAASUVORK5CYII=";function Mb(){return d.jsx(Nb,{children:d.jsxs("div",{className:"content-section",children:[d.jsxs("div",{className:"social-media",children:[d.jsx("div",{children:d.jsx("a",{href:"https://www.instagram.com/netflixbrasil/",target:"_blank",children:d.jsx("img",{src:Tb,alt:"Instagram Logo"})})}),d.jsx("div",{children:d.jsx("a",{href:"https://www.facebook.com/netflixbrasil/?locale=pt_BR",target:"_blank",children:d.jsx("img",{src:Db,alt:"Facebook Logo"})})}),d.jsx("div",{children:d.jsx("a",{href:"https://x.com/netflixbrasil",target:"_blank",children:d.jsx("img",{src:Ob,alt:"X Logo"})})}),d.jsx("div",{children:d.jsx("a",{href:"https://www.youtube.com/@NetflixBrasil",target:"_blank",children:d.jsx("img",{src:Cb,alt:"Youtube Logo"})})})]}),d.jsxs("div",{className:"informations",children:[d.jsxs("div",{className:"p1",children:[d.jsx("p",{children:"Central de Ajuda"}),d.jsx("p",{children:"Descrição de Áudio"}),d.jsx("p",{children:"Cartões Presente"}),d.jsx("p",{children:" Relações com Investidores"})]}),d.jsxs("div",{className:"p2",children:[d.jsx("p",{children:"Imprensa Oficial"}),d.jsx("p",{children:"Oportunidades de Carreira"}),d.jsx("p",{children:"Termos de Serviço"}),d.jsx("p",{children:"Política de Privacidade"})]}),d.jsxs("div",{className:"p3",children:[d.jsx("p",{children:"Avisos Legais"}),d.jsx("p",{children:"Preferências de Cookies"}),d.jsx("p",{children:"Informações Corporativas"}),d.jsx("p",{children:"Entre em Contato"})]})]}),d.jsx("div",{className:"foot-container",children:d.jsx("p",{className:"foot",children:"© 2025 - Todos os Direitos Reservados"})})]})})}function _b(){return d.jsxs(d.Fragment,{children:[d.jsx(Zv,{}),d.jsx(Jv,{}),d.jsx(ab,{}),d.jsx(lb,{}),d.jsx(ob,{}),d.jsx(sb,{}),d.jsx(fb,{}),d.jsx(hb,{}),d.jsx(pb,{}),d.jsx(xb,{}),d.jsx(bb,{}),d.jsx(wb,{}),d.jsx(zb,{}),d.jsx(Eb,{}),d.jsx(Rb,{}),d.jsx(Mb,{})]})}const Bb=pt.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  color: red;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  font-family: "Netflix Sans", sans-serif;

  .dot {
    animation: blink 1s infinite;
  }
  .dot:nth-child(1) {
    animation-delay: 0s;
  }
  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }
  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes blink {
    0%,
    50%,
    100% {
      opacity: 0;
    }
    25%,
    75% {
      opacity: 1;
    }
  }
`,Ub=pt.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.24)
    ),
    url(${l=>l.bg2});
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  .img {
    width: 100%;
    height: 100%;
    position: relative;
    right: 25px;
    top: 10px;
  }

  .img img {
    width: 50px;
    cursor: pointer;
    margin-left: 10px;
  }

  .info {
    width: 100%;
    margin-bottom: 10px;
    margin-top: 30px;
  }

  .info h1 {
    font-size: 2.5rem;
    width: 100%;
    text-shadow: 2px 4px 2px #00000085;
    margin-top: 40px;
    position: relative;
    right: 5px;
  }

  .info-extras {
    display: flex;
    gap: 20px;
    color: #e4d8d8ff;
  }
  .description {
    height: 100%;
  }

  .btns {
    display: flex;
    gap: 10px;
    margin-bottom: 40px;
    margin-top: 20px;
  }

  button {
    padding: 9px;
    font-size: 1rem;
    background-color: #151616;
    border: none;
    color: white;
    border-radius: 5px;
    width: 95px;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      background-color: white;
      color: black;
    }
  }

  .play {
    background-color: white;
    color: black;
    transition: 0.4s ease;

    &:hover {
      background-color: red;
      color: white;
    }
  }

  .more-info {
    width: 180px;
  }

  .casting {
    margin-bottom: 10px;
  }

  h3 {
    font-weight: normal;
  }

  .genres {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 530px) {
    .img img {
      width: 70px;

      margin-left: 0px;
    }

    .info h1 {
      font-size: 2.7rem;
    }

    .description {
      height: 100%;
    }

    button {
      padding: 11px;
      height: auto;
    }

    .play {
      background-color: white;
      color: black;
      transition: 0.4s ease;
      font-size: 1.2rem;
      width: 112px;

      &:hover {
        background-color: red;
        color: white;
      }
    }

    .more-info {
      width: 220px;
      font-size: 1.2rem;
    }
    .description {
      font-size: 1.1rem;
      width: 75%;
    }

    .info-extras {
      font-size: 1.1rem;
    }

    .casting {
      margin-bottom: 10px;
      p {
        font-size: 1.1rem;
      }
    }

    h3 {
      font-weight: normal;
      font-size: 1.3rem;
    }

    .genres {
      margin-bottom: 20px;
      p {
        font-size: 1.1rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.45),
        rgba(0, 0, 0, 0)
      ),
      url(${l=>l.bg||l.bg2});

    .img img {
      width: 80px;
    }

    .info h1 {
      font-size: 3rem;
    }

    .description {
      height: 100%;
    }

    button {
      padding: 11px;
      height: auto;
      text-align: center;
    }

    .img img {
      margin-left: 0px;
    }

    .play {
      background-color: white;
      color: black;
      transition: 0.4s ease;
      font-size: 1.3rem;
      width: 120px;

      &:hover {
        background-color: red;
        color: white;
      }
    }

    .more-info {
      width: 220px;
      font-size: 1.2rem;
    }
    .description {
      font-size: 1.2rem;
      width: 75%;
    }

    .info-extras {
      font-size: 1.2rem;
    }

    .casting {
      margin-bottom: 10px;
      p {
        font-size: 1.2rem;
      }
    }

    h3 {
      font-weight: normal;
      font-size: 1.4rem;
    }

    .genres {
      margin-bottom: 20px;
      p {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (min-width: 992px) {
    padding: 30px;

    .img img {
      width: 80px;
    }

    .info h1 {
      font-size: 3rem;
    }

    .description {
      height: 100%;
    }

    button {
      padding: 11px;
      height: auto;
      text-align: center;
    }

    .play {
      background-color: white;
      color: black;
      transition: 0.4s ease;
      font-size: 1.3rem;
      width: 140px;

      &:hover {
        background-color: red;
        color: white;
      }
    }

    .more-info {
      width: 245px;
      font-size: 1.2rem;
      height: auto;
    }
    .description {
      font-size: 1.2rem;
      width: 75%;
    }

    .info-extras {
      font-size: 1.2rem;
    }

    .casting {
      margin-bottom: 10px;
      p {
        font-size: 1.3rem;
      }
    }

    h3 {
      font-weight: normal;
      font-size: 1.4rem;
    }

    .genres {
      margin-bottom: 20px;
      p {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .img img {
      width: 100px;
    }

    .info h1 {
      font-size: 3.5rem;
    }

    .description {
      height: 100%;
    }

    button {
      padding: 15px;
      height: auto;
      text-align: center;
    }

    .play {
      background-color: white;
      color: black;
      transition: 0.4s ease;
      font-size: 1.5rem;
      width: 170px;

      &:hover {
        background-color: red;
        color: white;
      }
    }

    .more-info {
      width: 275px;
      font-size: 1.5rem;
      height: auto;
    }
    .description {
      font-size: 1.4rem;
      width: 45%;
    }

    .info-extras {
      font-size: 1.4rem;
    }

    .casting {
      margin-bottom: 10px;
      p {
        font-size: 1.4rem;
      }
    }

    h3 {
      font-weight: normal;
      font-size: 1.6rem;
    }

    .genres {
      margin-bottom: 20px;
      p {
        font-size: 1.4rem;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .img img {
      width: 100px;
    }

    .info h1 {
      font-size: 4rem;
    }

    .description {
      height: 100%;
    }

    button {
      padding: 15px;
      height: auto;
      text-align: center;
    }

    .play {
      background-color: white;
      color: black;
      transition: 0.4s ease;
      font-size: 1.6rem;
      width: 170px;

      &:hover {
        background-color: red;
        color: white;
      }
    }

    .more-info {
      width: 275px;
      font-size: 1.6rem;
      height: auto;
    }
    .description {
      font-size: 1.5rem;
      width: 45%;
    }

    .info-extras {
      font-size: 1.5rem;
    }

    .casting {
      margin-bottom: 10px;
      p {
        font-size: 1.5rem;
      }
    }

    h3 {
      font-weight: normal;
      font-size: 1.7rem;
    }

    .genres {
      margin-bottom: 20px;
      p {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 1536px) {
    .img img {
      width: 100px;
    }

    .info h1 {
      font-size: 4.2rem;
    }

    .description {
      height: 100%;
    }

    button {
      padding: 15px;
      height: auto;
      text-align: center;
    }

    .play {
      background-color: white;
      color: black;
      transition: 0.4s ease;
      font-size: 1.7rem;
      width: 190px;

      &:hover {
        background-color: red;
        color: white;
      }
    }

    .more-info {
      width: 295px;
      font-size: 1.7rem;
      height: auto;
    }
    .description {
      font-size: 1.6rem;
      width: 45%;
    }

    .info-extras {
      font-size: 1.6rem;
    }

    .casting {
      margin-bottom: 10px;
      p {
        font-size: 1.6rem;
      }
    }

    h3 {
      font-weight: normal;
      font-size: 1.8rem;
    }

    .genres {
      margin-bottom: 20px;
      p {
        font-size: 1.6rem;
      }
    }
  }
`,kb="/Movies-ReactJS/assets/logo-yAEqU2JB.png";function Hb(){const{id:l}=x1(),{state:o}=xn(),s=o?.type||"movie",[c,f]=A.useState(null),[p,g]=A.useState(null),[S,x]=A.useState("Livre"),[h,b]=A.useState([]),T="ee96350ded551df8af41839e03615c58",M=Ht(),k=()=>M("/main-app");if(A.useEffect(()=>{(async()=>{try{const Y=await fetch(`https://api.themoviedb.org/3/${s}/${l}?api_key=${T}&language=pt-BR`);if(!Y.ok)throw new Error("Não encontrado");const F=await Y.json();if(f(F),s==="movie"){const I=await fetch(`https://api.themoviedb.org/3/movie/${l}/release_dates?api_key=${T}`);if(I.ok){const wt=(await I.json()).results?.find(vt=>vt.iso_3166_1==="BR");wt?.release_dates?.length>0&&x(wt.release_dates[0].certification||"Livre")}}s==="movie"||s==="tv"&&g(F.number_of_seasons);const V=await fetch(`https://api.themoviedb.org/3/${s}/${l}/credits?api_key=${T}&language=pt-BR`);if(V.ok){const I=await V.json();b(I.cast?.slice(0,5)||[])}}catch(Y){console.error("Erro ao buscar detalhes:",Y),f(null)}})()},[l,s]),!c)return d.jsx(Bb,{children:d.jsxs("p",{children:["CARREGANDO",d.jsx("span",{className:"dot",children:"."}),d.jsx("span",{className:"dot",children:"."}),d.jsx("span",{className:"dot",children:"."})]})});const H=s==="movie"?c.title:c.name,q=c.backdrop_path?`https://image.tmdb.org/t/p/original${c.backdrop_path}`:"",X=c.poster_path?`https://image.tmdb.org/t/p/original${c.poster_path}`:"",U=async()=>{try{const Z=await fetch(`https://api.themoviedb.org/3/${s}/${l}/videos?api_key=${T}&language=pt-BR`);if(!Z.ok)throw new Error("Vídeo não encontrado");const F=(await Z.json()).results.find(V=>V.type==="Trailer"&&V.site==="YouTube");if(F){const V=`https://www.youtube.com/watch?v=${F.key}`;window.open(V,"_blank")}else alert("Trailer não disponível.")}catch(Z){console.error(Z),alert("Erro ao buscar trailer.")}};return d.jsxs(Ub,{bg:q,bg2:X,children:[d.jsx("div",{className:"img",onClick:k,children:d.jsx("img",{src:kb,alt:"Logo da Netflix"})}),d.jsxs("div",{className:"info",children:[d.jsx("h1",{children:H.length>23?H.toUpperCase().slice(0,19)+"...":H.toUpperCase()}),d.jsxs("div",{className:"info-extras",children:[d.jsx("p",{children:s==="movie"?c.release_date?.slice(0,4):c.first_air_date?.slice(0,4)}),d.jsx("p",{children:S}),s==="movie"?d.jsx("p",{children:c.runtime?`${Math.floor(c.runtime/60)}h ${c.runtime%60}min`:"N/A"}):d.jsxs("p",{children:["Temporadas: ",c.number_of_seasons||"N/A"]})]})]}),d.jsx("div",{className:"description",children:d.jsxs("p",{children:[c.overview?.slice(0,120)||"Sem descrição","..."]})}),d.jsxs("div",{className:"btns",children:[d.jsx("button",{className:"play",onClick:U,children:"▶ Assistir"}),d.jsx("button",{className:"more-info",children:"ℹ Mais Informações"})]}),d.jsxs("div",{className:"casting",children:[d.jsx("h3",{children:"Elenco:"}),d.jsx("p",{children:h?.slice(0,3).map((Z,Y)=>d.jsxs("span",{children:[Z.name,Y<2?", ":"..."]},Z.cast_id||Z.id))})]}),d.jsxs("div",{className:"genres",children:[d.jsx("h3",{children:"Gênero:"}),d.jsxs("p",{children:[c.genres?.map(Z=>Z.name).join(", ").slice(0,30),c.genres?.map(Z=>Z.name).join(", ").length>30?"...":""]})]})]})}function qb(){return d.jsx(d.Fragment,{children:d.jsx(ex,{basename:"/Movies-ReactJS",children:d.jsxs(C1,{children:[d.jsx(rl,{path:"/",element:d.jsx(kv,{})}),d.jsx(rl,{path:"/sign-in",element:d.jsx(Xv,{})}),d.jsx(rl,{path:"main-app",element:d.jsx(_b,{})}),d.jsx(rl,{path:"details/:id",element:d.jsx(Hb,{})})]})})})}Lg.createRoot(document.getElementById("root")).render(d.jsx(A.StrictMode,{children:d.jsx(qb,{})}));
