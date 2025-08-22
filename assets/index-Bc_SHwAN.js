(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const x of m.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&r(x)}).observe(document,{childList:!0,subtree:!0});function u(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(f){if(f.ep)return;f.ep=!0;const m=u(f);fetch(f.href,m)}})();function wg(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var su={exports:{}},Pi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function Ag(){if(Hh)return Pi;Hh=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(r,f,m){var x=null;if(m!==void 0&&(x=""+m),f.key!==void 0&&(x=""+f.key),"key"in f){m={};for(var S in f)S!=="key"&&(m[S]=f[S])}else m=f;return f=m.ref,{$$typeof:l,type:r,key:x,ref:f!==void 0?f:null,props:m}}return Pi.Fragment=o,Pi.jsx=u,Pi.jsxs=u,Pi}var qh;function zg(){return qh||(qh=1,su.exports=Ag()),su.exports}var d=zg(),fu={exports:{}},it={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh;function Eg(){if(Yh)return it;Yh=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),x=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),O=Symbol.iterator;function _(y){return y===null||typeof y!="object"?null:(y=O&&y[O]||y["@@iterator"],typeof y=="function"?y:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,H={};function Q(y,U,L){this.props=y,this.context=U,this.refs=H,this.updater=L||q}Q.prototype.isReactComponent={},Q.prototype.setState=function(y,U){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,U,"setState")},Q.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function B(){}B.prototype=Q.prototype;function K(y,U,L){this.props=y,this.context=U,this.refs=H,this.updater=L||q}var X=K.prototype=new B;X.constructor=K,Y(X,Q.prototype),X.isPureReactComponent=!0;var F=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},nt=Object.prototype.hasOwnProperty;function J(y,U,L,G,W,ut){return L=ut.ref,{$$typeof:l,type:y,key:U,ref:L!==void 0?L:null,props:ut}}function jt(y,U){return J(y.type,U,void 0,void 0,void 0,y.props)}function At(y){return typeof y=="object"&&y!==null&&y.$$typeof===l}function ee(y){var U={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(L){return U[L]})}var ae=/\/+/g;function Lt(y,U){return typeof y=="object"&&y!==null&&y.key!=null?ee(""+y.key):U.toString(36)}function Ve(){}function Ze(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Ve,Ve):(y.status="pending",y.then(function(U){y.status==="pending"&&(y.status="fulfilled",y.value=U)},function(U){y.status==="pending"&&(y.status="rejected",y.reason=U)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function kt(y,U,L,G,W){var ut=typeof y;(ut==="undefined"||ut==="boolean")&&(y=null);var tt=!1;if(y===null)tt=!0;else switch(ut){case"bigint":case"string":case"number":tt=!0;break;case"object":switch(y.$$typeof){case l:case o:tt=!0;break;case E:return tt=y._init,kt(tt(y._payload),U,L,G,W)}}if(tt)return W=W(y),tt=G===""?"."+Lt(y,0):G,F(W)?(L="",tt!=null&&(L=tt.replace(ae,"$&/")+"/"),kt(W,U,L,"",function(Ft){return Ft})):W!=null&&(At(W)&&(W=jt(W,L+(W.key==null||y&&y.key===W.key?"":(""+W.key).replace(ae,"$&/")+"/")+tt)),U.push(W)),1;tt=0;var Gt=G===""?".":G+":";if(F(y))for(var pt=0;pt<y.length;pt++)G=y[pt],ut=Gt+Lt(G,pt),tt+=kt(G,U,L,ut,W);else if(pt=_(y),typeof pt=="function")for(y=pt.call(y),pt=0;!(G=y.next()).done;)G=G.value,ut=Gt+Lt(G,pt++),tt+=kt(G,U,L,ut,W);else if(ut==="object"){if(typeof y.then=="function")return kt(Ze(y),U,L,G,W);throw U=String(y),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return tt}function N(y,U,L){if(y==null)return y;var G=[],W=0;return kt(y,G,"","",function(ut){return U.call(L,ut,W++)}),G}function k(y){if(y._status===-1){var U=y._result;U=U(),U.then(function(L){(y._status===0||y._status===-1)&&(y._status=1,y._result=L)},function(L){(y._status===0||y._status===-1)&&(y._status=2,y._result=L)}),y._status===-1&&(y._status=0,y._result=U)}if(y._status===1)return y._result.default;throw y._result}var I=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function rt(){}return it.Children={map:N,forEach:function(y,U,L){N(y,function(){U.apply(this,arguments)},L)},count:function(y){var U=0;return N(y,function(){U++}),U},toArray:function(y){return N(y,function(U){return U})||[]},only:function(y){if(!At(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},it.Component=Q,it.Fragment=u,it.Profiler=f,it.PureComponent=K,it.StrictMode=r,it.Suspense=v,it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,it.__COMPILER_RUNTIME={__proto__:null,c:function(y){return V.H.useMemoCache(y)}},it.cache=function(y){return function(){return y.apply(null,arguments)}},it.cloneElement=function(y,U,L){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var G=Y({},y.props),W=y.key,ut=void 0;if(U!=null)for(tt in U.ref!==void 0&&(ut=void 0),U.key!==void 0&&(W=""+U.key),U)!nt.call(U,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&U.ref===void 0||(G[tt]=U[tt]);var tt=arguments.length-2;if(tt===1)G.children=L;else if(1<tt){for(var Gt=Array(tt),pt=0;pt<tt;pt++)Gt[pt]=arguments[pt+2];G.children=Gt}return J(y.type,W,void 0,void 0,ut,G)},it.createContext=function(y){return y={$$typeof:x,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:m,_context:y},y},it.createElement=function(y,U,L){var G,W={},ut=null;if(U!=null)for(G in U.key!==void 0&&(ut=""+U.key),U)nt.call(U,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(W[G]=U[G]);var tt=arguments.length-2;if(tt===1)W.children=L;else if(1<tt){for(var Gt=Array(tt),pt=0;pt<tt;pt++)Gt[pt]=arguments[pt+2];W.children=Gt}if(y&&y.defaultProps)for(G in tt=y.defaultProps,tt)W[G]===void 0&&(W[G]=tt[G]);return J(y,ut,void 0,void 0,null,W)},it.createRef=function(){return{current:null}},it.forwardRef=function(y){return{$$typeof:S,render:y}},it.isValidElement=At,it.lazy=function(y){return{$$typeof:E,_payload:{_status:-1,_result:y},_init:k}},it.memo=function(y,U){return{$$typeof:p,type:y,compare:U===void 0?null:U}},it.startTransition=function(y){var U=V.T,L={};V.T=L;try{var G=y(),W=V.S;W!==null&&W(L,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(rt,I)}catch(ut){I(ut)}finally{V.T=U}},it.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},it.use=function(y){return V.H.use(y)},it.useActionState=function(y,U,L){return V.H.useActionState(y,U,L)},it.useCallback=function(y,U){return V.H.useCallback(y,U)},it.useContext=function(y){return V.H.useContext(y)},it.useDebugValue=function(){},it.useDeferredValue=function(y,U){return V.H.useDeferredValue(y,U)},it.useEffect=function(y,U,L){var G=V.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return G.useEffect(y,U)},it.useId=function(){return V.H.useId()},it.useImperativeHandle=function(y,U,L){return V.H.useImperativeHandle(y,U,L)},it.useInsertionEffect=function(y,U){return V.H.useInsertionEffect(y,U)},it.useLayoutEffect=function(y,U){return V.H.useLayoutEffect(y,U)},it.useMemo=function(y,U){return V.H.useMemo(y,U)},it.useOptimistic=function(y,U){return V.H.useOptimistic(y,U)},it.useReducer=function(y,U,L){return V.H.useReducer(y,U,L)},it.useRef=function(y){return V.H.useRef(y)},it.useState=function(y){return V.H.useState(y)},it.useSyncExternalStore=function(y,U,L){return V.H.useSyncExternalStore(y,U,L)},it.useTransition=function(){return V.H.useTransition()},it.version="19.1.1",it}var Lh;function Mu(){return Lh||(Lh=1,fu.exports=Eg()),fu.exports}var j=Mu();const ll=wg(j);var du={exports:{}},tl={},hu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kh;function jg(){return kh||(kh=1,(function(l){function o(N,k){var I=N.length;N.push(k);t:for(;0<I;){var rt=I-1>>>1,y=N[rt];if(0<f(y,k))N[rt]=k,N[I]=y,I=rt;else break t}}function u(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var k=N[0],I=N.pop();if(I!==k){N[0]=I;t:for(var rt=0,y=N.length,U=y>>>1;rt<U;){var L=2*(rt+1)-1,G=N[L],W=L+1,ut=N[W];if(0>f(G,I))W<y&&0>f(ut,G)?(N[rt]=ut,N[W]=I,rt=W):(N[rt]=G,N[L]=I,rt=L);else if(W<y&&0>f(ut,I))N[rt]=ut,N[W]=I,rt=W;else break t}}return k}function f(N,k){var I=N.sortIndex-k.sortIndex;return I!==0?I:N.id-k.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;l.unstable_now=function(){return m.now()}}else{var x=Date,S=x.now();l.unstable_now=function(){return x.now()-S}}var v=[],p=[],E=1,O=null,_=3,q=!1,Y=!1,H=!1,Q=!1,B=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function F(N){for(var k=u(p);k!==null;){if(k.callback===null)r(p);else if(k.startTime<=N)r(p),k.sortIndex=k.expirationTime,o(v,k);else break;k=u(p)}}function V(N){if(H=!1,F(N),!Y)if(u(v)!==null)Y=!0,nt||(nt=!0,Lt());else{var k=u(p);k!==null&&kt(V,k.startTime-N)}}var nt=!1,J=-1,jt=5,At=-1;function ee(){return Q?!0:!(l.unstable_now()-At<jt)}function ae(){if(Q=!1,nt){var N=l.unstable_now();At=N;var k=!0;try{t:{Y=!1,H&&(H=!1,K(J),J=-1),q=!0;var I=_;try{e:{for(F(N),O=u(v);O!==null&&!(O.expirationTime>N&&ee());){var rt=O.callback;if(typeof rt=="function"){O.callback=null,_=O.priorityLevel;var y=rt(O.expirationTime<=N);if(N=l.unstable_now(),typeof y=="function"){O.callback=y,F(N),k=!0;break e}O===u(v)&&r(v),F(N)}else r(v);O=u(v)}if(O!==null)k=!0;else{var U=u(p);U!==null&&kt(V,U.startTime-N),k=!1}}break t}finally{O=null,_=I,q=!1}k=void 0}}finally{k?Lt():nt=!1}}}var Lt;if(typeof X=="function")Lt=function(){X(ae)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Ze=Ve.port2;Ve.port1.onmessage=ae,Lt=function(){Ze.postMessage(null)}}else Lt=function(){B(ae,0)};function kt(N,k){J=B(function(){N(l.unstable_now())},k)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(N){N.callback=null},l.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):jt=0<N?Math.floor(1e3/N):5},l.unstable_getCurrentPriorityLevel=function(){return _},l.unstable_next=function(N){switch(_){case 1:case 2:case 3:var k=3;break;default:k=_}var I=_;_=k;try{return N()}finally{_=I}},l.unstable_requestPaint=function(){Q=!0},l.unstable_runWithPriority=function(N,k){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var I=_;_=N;try{return k()}finally{_=I}},l.unstable_scheduleCallback=function(N,k,I){var rt=l.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?rt+I:rt):I=rt,N){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=I+y,N={id:E++,callback:k,priorityLevel:N,startTime:I,expirationTime:y,sortIndex:-1},I>rt?(N.sortIndex=I,o(p,N),u(v)===null&&N===u(p)&&(H?(K(J),J=-1):H=!0,kt(V,I-rt))):(N.sortIndex=y,o(v,N),Y||q||(Y=!0,nt||(nt=!0,Lt()))),N},l.unstable_shouldYield=ee,l.unstable_wrapCallback=function(N){var k=_;return function(){var I=_;_=k;try{return N.apply(this,arguments)}finally{_=I}}}})(mu)),mu}var Gh;function Rg(){return Gh||(Gh=1,hu.exports=jg()),hu.exports}var pu={exports:{}},te={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function Tg(){if(Qh)return te;Qh=1;var l=Mu();function o(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var r={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(v,p,E){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:O==null?null:""+O,children:v,containerInfo:p,implementation:E}}var x=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,te.createPortal=function(v,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(o(299));return m(v,p,null,E)},te.flushSync=function(v){var p=x.T,E=r.p;try{if(x.T=null,r.p=2,v)return v()}finally{x.T=p,r.p=E,r.d.f()}},te.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(v,p))},te.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},te.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var E=p.as,O=S(E,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,q=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?r.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:O,integrity:_,fetchPriority:q}):E==="script"&&r.d.X(v,{crossOrigin:O,integrity:_,fetchPriority:q,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},te.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=S(p.as,p.crossOrigin);r.d.M(v,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(v)},te.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,O=S(E,p.crossOrigin);r.d.L(v,E,{crossOrigin:O,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},te.preloadModule=function(v,p){if(typeof v=="string")if(p){var E=S(p.as,p.crossOrigin);r.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(v)},te.requestFormReset=function(v){r.d.r(v)},te.unstable_batchedUpdates=function(v,p){return v(p)},te.useFormState=function(v,p,E){return x.H.useFormState(v,p,E)},te.useFormStatus=function(){return x.H.useHostTransitionStatus()},te.version="19.1.1",te}var Xh;function Ng(){if(Xh)return pu.exports;Xh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),pu.exports=Tg(),pu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function Dg(){if(Vh)return tl;Vh=1;var l=Rg(),o=Mu(),u=Ng();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function x(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function S(t){if(m(t)!==t)throw Error(r(188))}function v(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(r(188));return e!==t?null:t}for(var n=t,a=e;;){var i=n.return;if(i===null)break;var c=i.alternate;if(c===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===c.child){for(c=i.child;c;){if(c===n)return S(i),t;if(c===a)return S(i),e;c=c.sibling}throw Error(r(188))}if(n.return!==a.return)n=i,a=c;else{for(var s=!1,h=i.child;h;){if(h===n){s=!0,n=i,a=c;break}if(h===a){s=!0,a=i,n=c;break}h=h.sibling}if(!s){for(h=c.child;h;){if(h===n){s=!0,n=c,a=i;break}if(h===a){s=!0,a=c,n=i;break}h=h.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==a)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?t:e}function p(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=p(t),e!==null)return e;t=t.sibling}return null}var E=Object.assign,O=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),K=Symbol.for("react.consumer"),X=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),At=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function Lt(t){return t===null||typeof t!="object"?null:(t=ae&&t[ae]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Symbol.for("react.client.reference");function Ze(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ve?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Y:return"Fragment";case Q:return"Profiler";case H:return"StrictMode";case V:return"Suspense";case nt:return"SuspenseList";case At:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case q:return"Portal";case X:return(t.displayName||"Context")+".Provider";case K:return(t._context.displayName||"Context")+".Consumer";case F:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case J:return e=t.displayName||null,e!==null?e:Ze(t.type)||"Memo";case jt:e=t._payload,t=t._init;try{return Ze(t(e))}catch{}}return null}var kt=Array.isArray,N=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},rt=[],y=-1;function U(t){return{current:t}}function L(t){0>y||(t.current=rt[y],rt[y]=null,y--)}function G(t,e){y++,rt[y]=t.current,t.current=e}var W=U(null),ut=U(null),tt=U(null),Gt=U(null);function pt(t,e){switch(G(tt,e),G(ut,t),G(W,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?fh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=fh(e),t=dh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}L(W),G(W,t)}function Ft(){L(W),L(ut),L(tt)}function qn(t){t.memoizedState!==null&&G(Gt,t);var e=W.current,n=dh(e,t.type);e!==n&&(G(ut,t),G(W,n))}function Ke(t){ut.current===t&&(L(W),L(ut)),Gt.current===t&&(L(Gt),Ji._currentValue=I)}var be=Object.prototype.hasOwnProperty,Wc=l.unstable_scheduleCallback,Fc=l.unstable_cancelCallback,tp=l.unstable_shouldYield,ep=l.unstable_requestPaint,Ue=l.unstable_now,np=l.unstable_getCurrentPriorityLevel,Xu=l.unstable_ImmediatePriority,Vu=l.unstable_UserBlockingPriority,hl=l.unstable_NormalPriority,ap=l.unstable_LowPriority,Zu=l.unstable_IdlePriority,ip=l.log,lp=l.unstable_setDisableYieldValue,ni=null,se=null;function hn(t){if(typeof ip=="function"&&lp(t),se&&typeof se.setStrictMode=="function")try{se.setStrictMode(ni,t)}catch{}}var fe=Math.clz32?Math.clz32:rp,cp=Math.log,op=Math.LN2;function rp(t){return t>>>=0,t===0?32:31-(cp(t)/op|0)|0}var ml=256,pl=4194304;function Yn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gl(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var i=0,c=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var h=a&134217727;return h!==0?(a=h&~c,a!==0?i=Yn(a):(s&=h,s!==0?i=Yn(s):n||(n=h&~t,n!==0&&(i=Yn(n))))):(h=a&~c,h!==0?i=Yn(h):s!==0?i=Yn(s):n||(n=a&~t,n!==0&&(i=Yn(n)))),i===0?0:e!==0&&e!==i&&(e&c)===0&&(c=i&-i,n=e&-e,c>=n||c===32&&(n&4194048)!==0)?e:i}function ai(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function up(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ku(){var t=ml;return ml<<=1,(ml&4194048)===0&&(ml=256),t}function Ju(){var t=pl;return pl<<=1,(pl&62914560)===0&&(pl=4194304),t}function Ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ii(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function sp(t,e,n,a,i,c){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var h=t.entanglements,g=t.expirationTimes,z=t.hiddenUpdates;for(n=s&~n;0<n;){var D=31-fe(n),C=1<<D;h[D]=0,g[D]=-1;var R=z[D];if(R!==null)for(z[D]=null,D=0;D<R.length;D++){var T=R[D];T!==null&&(T.lane&=-536870913)}n&=~C}a!==0&&$u(t,a,0),c!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=c&~(s&~e))}function $u(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-fe(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&4194090}function Wu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-fe(n),i=1<<a;i&e|t[a]&e&&(t[a]|=e),n&=~i}}function Pc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function to(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Fu(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:Mh(t.type))}function fp(t,e){var n=k.p;try{return k.p=t,e()}finally{k.p=n}}var mn=Math.random().toString(36).slice(2),It="__reactFiber$"+mn,ie="__reactProps$"+mn,oa="__reactContainer$"+mn,eo="__reactEvents$"+mn,dp="__reactListeners$"+mn,hp="__reactHandles$"+mn,Iu="__reactResources$"+mn,li="__reactMarker$"+mn;function no(t){delete t[It],delete t[ie],delete t[eo],delete t[dp],delete t[hp]}function ra(t){var e=t[It];if(e)return e;for(var n=t.parentNode;n;){if(e=n[oa]||n[It]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gh(t);t!==null;){if(n=t[It])return n;t=gh(t)}return e}t=n,n=t.parentNode}return null}function ua(t){if(t=t[It]||t[oa]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function ci(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function sa(t){var e=t[Iu];return e||(e=t[Iu]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Qt(t){t[li]=!0}var Pu=new Set,ts={};function Ln(t,e){fa(t,e),fa(t+"Capture",e)}function fa(t,e){for(ts[t]=e,t=0;t<e.length;t++)Pu.add(e[t])}var mp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),es={},ns={};function pp(t){return be.call(ns,t)?!0:be.call(es,t)?!1:mp.test(t)?ns[t]=!0:(es[t]=!0,!1)}function xl(t,e,n){if(pp(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function vl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Je(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}var ao,as;function da(t){if(ao===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ao=e&&e[1]||"",as=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ao+t+as}var io=!1;function lo(t,e){if(!t||io)return"";io=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(T){var R=T}Reflect.construct(t,[],C)}else{try{C.call()}catch(T){R=T}t.call(C.prototype)}}else{try{throw Error()}catch(T){R=T}(C=t())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(T){if(T&&R&&typeof T.stack=="string")return[T.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),s=c[0],h=c[1];if(s&&h){var g=s.split(`
`),z=h.split(`
`);for(i=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(a===g.length||i===z.length)for(a=g.length-1,i=z.length-1;1<=a&&0<=i&&g[a]!==z[i];)i--;for(;1<=a&&0<=i;a--,i--)if(g[a]!==z[i]){if(a!==1||i!==1)do if(a--,i--,0>i||g[a]!==z[i]){var D=`
`+g[a].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=a&&0<=i);break}}}finally{io=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?da(n):""}function gp(t){switch(t.tag){case 26:case 27:case 5:return da(t.type);case 16:return da("Lazy");case 13:return da("Suspense");case 19:return da("SuspenseList");case 0:case 15:return lo(t.type,!1);case 11:return lo(t.type.render,!1);case 1:return lo(t.type,!0);case 31:return da("Activity");default:return""}}function is(t){try{var e="";do e+=gp(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ls(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xp(t){var e=ls(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,c=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,c.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yl(t){t._valueTracker||(t._valueTracker=xp(t))}function cs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=ls(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var vp=/[\n"\\]/g;function we(t){return t.replace(vp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function co(t,e,n,a,i,c,s,h){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Se(e)):t.value!==""+Se(e)&&(t.value=""+Se(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?oo(t,s,Se(e)):n!=null?oo(t,s,Se(n)):a!=null&&t.removeAttribute("value"),i==null&&c!=null&&(t.defaultChecked=!!c),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.name=""+Se(h):t.removeAttribute("name")}function os(t,e,n,a,i,c,s,h){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;n=n!=null?""+Se(n):"",e=e!=null?""+Se(e):n,h||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=h?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function oo(t,e,n){e==="number"&&bl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ha(t,e,n,a){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&a&&(t[n].defaultSelected=!0)}else{for(n=""+Se(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function rs(t,e,n){if(e!=null&&(e=""+Se(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Se(n):""}function us(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(r(92));if(kt(a)){if(1<a.length)throw Error(r(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=Se(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a)}function ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ss(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||yp.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function fs(t,e,n){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&n[i]!==a&&ss(t,i,a)}else for(var c in e)e.hasOwnProperty(c)&&ss(t,c,e[c])}function ro(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sl(t){return Sp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var uo=null;function so(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pa=null,ga=null;function ds(t){var e=ua(t);if(e&&(t=e.stateNode)){var n=t[ie]||null;t:switch(t=e.stateNode,e.type){case"input":if(co(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+we(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var i=a[ie]||null;if(!i)throw Error(r(90));co(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&cs(a)}break t;case"textarea":rs(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&ha(t,!!n.multiple,e,!1)}}}var fo=!1;function hs(t,e,n){if(fo)return t(e,n);fo=!0;try{var a=t(e);return a}finally{if(fo=!1,(pa!==null||ga!==null)&&(cc(),pa&&(e=pa,t=ga,ga=pa=null,ds(e),t)))for(e=0;e<t.length;e++)ds(t[e])}}function oi(t,e){var n=t.stateNode;if(n===null)return null;var a=n[ie]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(r(231,e,typeof n));return n}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ho=!1;if($e)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){ho=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{ho=!1}var pn=null,mo=null,wl=null;function ms(){if(wl)return wl;var t,e=mo,n=e.length,a,i="value"in pn?pn.value:pn.textContent,c=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(a=1;a<=s&&e[n-a]===i[c-a];a++);return wl=i.slice(t,1<a?1-a:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zl(){return!0}function ps(){return!1}function le(t){function e(n,a,i,c,s){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=c,this.target=s,this.currentTarget=null;for(var h in t)t.hasOwnProperty(h)&&(n=t[h],this[h]=n?n(c):c[h]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?zl:ps,this.isPropagationStopped=ps,this}return E(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),e}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=le(kn),ui=E({},kn,{view:0,detail:0}),wp=le(ui),po,go,si,jl=E({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==si&&(si&&t.type==="mousemove"?(po=t.screenX-si.screenX,go=t.screenY-si.screenY):go=po=0,si=t),po)},movementY:function(t){return"movementY"in t?t.movementY:go}}),gs=le(jl),Ap=E({},jl,{dataTransfer:0}),zp=le(Ap),Ep=E({},ui,{relatedTarget:0}),xo=le(Ep),jp=E({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rp=le(jp),Tp=E({},kn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Np=le(Tp),Dp=E({},kn,{data:0}),xs=le(Dp),Mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Op={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _p(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Cp[t])?!!e[t]:!1}function vo(){return _p}var Up=E({},ui,{key:function(t){if(t.key){var e=Mp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Op[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vo,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bp=le(Up),Hp=E({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vs=le(Hp),qp=E({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vo}),Yp=le(qp),Lp=E({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kp=le(Lp),Gp=E({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qp=le(Gp),Xp=E({},kn,{newState:0,oldState:0}),Vp=le(Xp),Zp=[9,13,27,32],yo=$e&&"CompositionEvent"in window,fi=null;$e&&"documentMode"in document&&(fi=document.documentMode);var Kp=$e&&"TextEvent"in window&&!fi,ys=$e&&(!yo||fi&&8<fi&&11>=fi),bs=" ",Ss=!1;function ws(t,e){switch(t){case"keyup":return Zp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function As(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xa=!1;function Jp(t,e){switch(t){case"compositionend":return As(e);case"keypress":return e.which!==32?null:(Ss=!0,bs);case"textInput":return t=e.data,t===bs&&Ss?null:t;default:return null}}function $p(t,e){if(xa)return t==="compositionend"||!yo&&ws(t,e)?(t=ms(),wl=mo=pn=null,xa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ys&&e.locale!=="ko"?null:e.data;default:return null}}var Wp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Wp[t.type]:e==="textarea"}function Es(t,e,n,a){pa?ga?ga.push(a):ga=[a]:pa=a,e=dc(e,"onChange"),0<e.length&&(n=new El("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var di=null,hi=null;function Fp(t){ch(t,0)}function Rl(t){var e=ci(t);if(cs(e))return t}function js(t,e){if(t==="change")return e}var Rs=!1;if($e){var bo;if($e){var So="oninput"in document;if(!So){var Ts=document.createElement("div");Ts.setAttribute("oninput","return;"),So=typeof Ts.oninput=="function"}bo=So}else bo=!1;Rs=bo&&(!document.documentMode||9<document.documentMode)}function Ns(){di&&(di.detachEvent("onpropertychange",Ds),hi=di=null)}function Ds(t){if(t.propertyName==="value"&&Rl(hi)){var e=[];Es(e,hi,t,so(t)),hs(Fp,e)}}function Ip(t,e,n){t==="focusin"?(Ns(),di=e,hi=n,di.attachEvent("onpropertychange",Ds)):t==="focusout"&&Ns()}function Pp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rl(hi)}function t0(t,e){if(t==="click")return Rl(e)}function e0(t,e){if(t==="input"||t==="change")return Rl(e)}function n0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var de=typeof Object.is=="function"?Object.is:n0;function mi(t,e){if(de(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!be.call(e,i)||!de(t[i],e[i]))return!1}return!0}function Ms(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Os(t,e){var n=Ms(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Ms(n)}}function Cs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _s(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=bl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bl(t.document)}return e}function wo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var a0=$e&&"documentMode"in document&&11>=document.documentMode,va=null,Ao=null,pi=null,zo=!1;function Us(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zo||va==null||va!==bl(a)||(a=va,"selectionStart"in a&&wo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),pi&&mi(pi,a)||(pi=a,a=dc(Ao,"onSelect"),0<a.length&&(e=new El("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=va)))}function Gn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ya={animationend:Gn("Animation","AnimationEnd"),animationiteration:Gn("Animation","AnimationIteration"),animationstart:Gn("Animation","AnimationStart"),transitionrun:Gn("Transition","TransitionRun"),transitionstart:Gn("Transition","TransitionStart"),transitioncancel:Gn("Transition","TransitionCancel"),transitionend:Gn("Transition","TransitionEnd")},Eo={},Bs={};$e&&(Bs=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function Qn(t){if(Eo[t])return Eo[t];if(!ya[t])return t;var e=ya[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bs)return Eo[t]=e[n];return t}var Hs=Qn("animationend"),qs=Qn("animationiteration"),Ys=Qn("animationstart"),i0=Qn("transitionrun"),l0=Qn("transitionstart"),c0=Qn("transitioncancel"),Ls=Qn("transitionend"),ks=new Map,jo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jo.push("scrollEnd");function Me(t,e){ks.set(t,e),Ln(e,[t])}var Gs=new WeakMap;function Ae(t,e){if(typeof t=="object"&&t!==null){var n=Gs.get(t);return n!==void 0?n:(e={value:t,source:e,stack:is(e)},Gs.set(t,e),e)}return{value:t,source:e,stack:is(e)}}var ze=[],ba=0,Ro=0;function Tl(){for(var t=ba,e=Ro=ba=0;e<t;){var n=ze[e];ze[e++]=null;var a=ze[e];ze[e++]=null;var i=ze[e];ze[e++]=null;var c=ze[e];if(ze[e++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}c!==0&&Qs(n,i,c)}}function Nl(t,e,n,a){ze[ba++]=t,ze[ba++]=e,ze[ba++]=n,ze[ba++]=a,Ro|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function To(t,e,n,a){return Nl(t,e,n,a),Dl(t)}function Sa(t,e){return Nl(t,null,null,e),Dl(t)}function Qs(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var i=!1,c=t.return;c!==null;)c.childLanes|=n,a=c.alternate,a!==null&&(a.childLanes|=n),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(i=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,i&&e!==null&&(i=31-fe(n),t=c.hiddenUpdates,a=t[i],a===null?t[i]=[e]:a.push(e),e.lane=n|536870912),c):null}function Dl(t){if(50<Li)throw Li=0,_r=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var wa={};function o0(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function he(t,e,n,a){return new o0(t,e,n,a)}function No(t){return t=t.prototype,!(!t||!t.isReactComponent)}function We(t,e){var n=t.alternate;return n===null?(n=he(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Xs(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ml(t,e,n,a,i,c){var s=0;if(a=t,typeof t=="function")No(t)&&(s=1);else if(typeof t=="string")s=ug(t,n,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case At:return t=he(31,n,e,i),t.elementType=At,t.lanes=c,t;case Y:return Xn(n.children,i,c,e);case H:s=8,i|=24;break;case Q:return t=he(12,n,e,i|2),t.elementType=Q,t.lanes=c,t;case V:return t=he(13,n,e,i),t.elementType=V,t.lanes=c,t;case nt:return t=he(19,n,e,i),t.elementType=nt,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:case X:s=10;break t;case K:s=9;break t;case F:s=11;break t;case J:s=14;break t;case jt:s=16,a=null;break t}s=29,n=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=he(s,n,e,i),e.elementType=t,e.type=a,e.lanes=c,e}function Xn(t,e,n,a){return t=he(7,t,a,e),t.lanes=n,t}function Do(t,e,n){return t=he(6,t,null,e),t.lanes=n,t}function Mo(t,e,n){return e=he(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Aa=[],za=0,Ol=null,Cl=0,Ee=[],je=0,Vn=null,Fe=1,Ie="";function Zn(t,e){Aa[za++]=Cl,Aa[za++]=Ol,Ol=t,Cl=e}function Vs(t,e,n){Ee[je++]=Fe,Ee[je++]=Ie,Ee[je++]=Vn,Vn=t;var a=Fe;t=Ie;var i=32-fe(a)-1;a&=~(1<<i),n+=1;var c=32-fe(e)+i;if(30<c){var s=i-i%5;c=(a&(1<<s)-1).toString(32),a>>=s,i-=s,Fe=1<<32-fe(e)+i|n<<i|a,Ie=c+t}else Fe=1<<c|n<<i|a,Ie=t}function Oo(t){t.return!==null&&(Zn(t,1),Vs(t,1,0))}function Co(t){for(;t===Ol;)Ol=Aa[--za],Aa[za]=null,Cl=Aa[--za],Aa[za]=null;for(;t===Vn;)Vn=Ee[--je],Ee[je]=null,Ie=Ee[--je],Ee[je]=null,Fe=Ee[--je],Ee[je]=null}var ne=null,Mt=null,mt=!1,Kn=null,Be=!1,_o=Error(r(519));function Jn(t){var e=Error(r(418,""));throw vi(Ae(e,t)),_o}function Zs(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[It]=t,e[ie]=a,n){case"dialog":ft("cancel",e),ft("close",e);break;case"iframe":case"object":case"embed":ft("load",e);break;case"video":case"audio":for(n=0;n<Gi.length;n++)ft(Gi[n],e);break;case"source":ft("error",e);break;case"img":case"image":case"link":ft("error",e),ft("load",e);break;case"details":ft("toggle",e);break;case"input":ft("invalid",e),os(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),yl(e);break;case"select":ft("invalid",e);break;case"textarea":ft("invalid",e),us(e,a.value,a.defaultValue,a.children),yl(e)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||sh(e.textContent,n)?(a.popover!=null&&(ft("beforetoggle",e),ft("toggle",e)),a.onScroll!=null&&ft("scroll",e),a.onScrollEnd!=null&&ft("scrollend",e),a.onClick!=null&&(e.onclick=hc),e=!0):e=!1,e||Jn(t)}function Ks(t){for(ne=t.return;ne;)switch(ne.tag){case 5:case 13:Be=!1;return;case 27:case 3:Be=!0;return;default:ne=ne.return}}function gi(t){if(t!==ne)return!1;if(!mt)return Ks(t),mt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Wr(t.type,t.memoizedProps)),n=!n),n&&Mt&&Jn(t),Ks(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Mt=Ce(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Mt=null}}else e===27?(e=Mt,Mn(t.type)?(t=tu,tu=null,Mt=t):Mt=e):Mt=ne?Ce(t.stateNode.nextSibling):null;return!0}function xi(){Mt=ne=null,mt=!1}function Js(){var t=Kn;return t!==null&&(re===null?re=t:re.push.apply(re,t),Kn=null),t}function vi(t){Kn===null?Kn=[t]:Kn.push(t)}var Uo=U(null),$n=null,Pe=null;function gn(t,e,n){G(Uo,e._currentValue),e._currentValue=n}function tn(t){t._currentValue=Uo.current,L(Uo)}function Bo(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function Ho(t,e,n,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){var s=i.child;c=c.firstContext;t:for(;c!==null;){var h=c;c=i;for(var g=0;g<e.length;g++)if(h.context===e[g]){c.lanes|=n,h=c.alternate,h!==null&&(h.lanes|=n),Bo(c.return,n,t),a||(s=null);break t}c=h.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Bo(s,n,t),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function yi(t,e,n,a){t=null;for(var i=e,c=!1;i!==null;){if(!c){if((i.flags&524288)!==0)c=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(r(387));if(s=s.memoizedProps,s!==null){var h=i.type;de(i.pendingProps.value,s.value)||(t!==null?t.push(h):t=[h])}}else if(i===Gt.current){if(s=i.alternate,s===null)throw Error(r(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ji):t=[Ji])}i=i.return}t!==null&&Ho(e,t,n,a),e.flags|=262144}function _l(t){for(t=t.firstContext;t!==null;){if(!de(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Wn(t){$n=t,Pe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pt(t){return $s($n,t)}function Ul(t,e){return $n===null&&Wn(t),$s(t,e)}function $s(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Pe===null){if(t===null)throw Error(r(308));Pe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Pe=Pe.next=e;return n}var r0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},u0=l.unstable_scheduleCallback,s0=l.unstable_NormalPriority,qt={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qo(){return{controller:new r0,data:new Map,refCount:0}}function bi(t){t.refCount--,t.refCount===0&&u0(s0,function(){t.controller.abort()})}var Si=null,Yo=0,Ea=0,ja=null;function f0(t,e){if(Si===null){var n=Si=[];Yo=0,Ea=kr(),ja={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Yo++,e.then(Ws,Ws),e}function Ws(){if(--Yo===0&&Si!==null){ja!==null&&(ja.status="fulfilled");var t=Si;Si=null,Ea=0,ja=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function d0(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<n.length;i++)(0,n[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var Fs=N.S;N.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&f0(t,e),Fs!==null&&Fs(t,e)};var Fn=U(null);function Lo(){var t=Fn.current;return t!==null?t:Et.pooledCache}function Bl(t,e){e===null?G(Fn,Fn.current):G(Fn,e.pool)}function Is(){var t=Lo();return t===null?null:{parent:qt._currentValue,pool:t}}var wi=Error(r(460)),Ps=Error(r(474)),Hl=Error(r(542)),ko={then:function(){}};function tf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ql(){}function ef(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(ql,ql),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,af(t),t;default:if(typeof e.status=="string")e.then(ql,ql);else{if(t=Et,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,af(t),t}throw Ai=e,wi}}var Ai=null;function nf(){if(Ai===null)throw Error(r(459));var t=Ai;return Ai=null,t}function af(t){if(t===wi||t===Hl)throw Error(r(483))}var xn=!1;function Go(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qo(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function vn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function yn(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(vt&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=Dl(t),Qs(t,null,n),e}return Nl(t,a,e,n),Dl(t)}function zi(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Wu(t,n)}}function Xo(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?i=c=s:c=c.next=s,n=n.next}while(n!==null);c===null?i=c=e:c=c.next=e}else i=c=e;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Vo=!1;function Ei(){if(Vo){var t=ja;if(t!==null)throw t}}function ji(t,e,n,a){Vo=!1;var i=t.updateQueue;xn=!1;var c=i.firstBaseUpdate,s=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var g=h,z=g.next;g.next=null,s===null?c=z:s.next=z,s=g;var D=t.alternate;D!==null&&(D=D.updateQueue,h=D.lastBaseUpdate,h!==s&&(h===null?D.firstBaseUpdate=z:h.next=z,D.lastBaseUpdate=g))}if(c!==null){var C=i.baseState;s=0,D=z=g=null,h=c;do{var R=h.lane&-536870913,T=R!==h.lane;if(T?(dt&R)===R:(a&R)===R){R!==0&&R===Ea&&(Vo=!0),D!==null&&(D=D.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});t:{var at=t,P=h;R=e;var wt=n;switch(P.tag){case 1:if(at=P.payload,typeof at=="function"){C=at.call(wt,C,R);break t}C=at;break t;case 3:at.flags=at.flags&-65537|128;case 0:if(at=P.payload,R=typeof at=="function"?at.call(wt,C,R):at,R==null)break t;C=E({},C,R);break t;case 2:xn=!0}}R=h.callback,R!==null&&(t.flags|=64,T&&(t.flags|=8192),T=i.callbacks,T===null?i.callbacks=[R]:T.push(R))}else T={lane:R,tag:h.tag,payload:h.payload,callback:h.callback,next:null},D===null?(z=D=T,g=C):D=D.next=T,s|=R;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;T=h,h=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);D===null&&(g=C),i.baseState=g,i.firstBaseUpdate=z,i.lastBaseUpdate=D,c===null&&(i.shared.lanes=0),Rn|=s,t.lanes=s,t.memoizedState=C}}function lf(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function cf(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)lf(n[t],e)}var Ra=U(null),Yl=U(0);function of(t,e){t=rn,G(Yl,t),G(Ra,e),rn=t|e.baseLanes}function Zo(){G(Yl,rn),G(Ra,Ra.current)}function Ko(){rn=Yl.current,L(Ra),L(Yl)}var bn=0,ct=null,bt=null,Ut=null,Ll=!1,Ta=!1,In=!1,kl=0,Ri=0,Na=null,h0=0;function Ct(){throw Error(r(321))}function Jo(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!de(t[n],e[n]))return!1;return!0}function $o(t,e,n,a,i,c){return bn=c,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,N.H=t===null||t.memoizedState===null?Xf:Vf,In=!1,c=n(a,i),In=!1,Ta&&(c=uf(e,n,a,i)),rf(t),c}function rf(t){N.H=Kl;var e=bt!==null&&bt.next!==null;if(bn=0,Ut=bt=ct=null,Ll=!1,Ri=0,Na=null,e)throw Error(r(300));t===null||Xt||(t=t.dependencies,t!==null&&_l(t)&&(Xt=!0))}function uf(t,e,n,a){ct=t;var i=0;do{if(Ta&&(Na=null),Ri=0,Ta=!1,25<=i)throw Error(r(301));if(i+=1,Ut=bt=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}N.H=b0,c=e(n,a)}while(Ta);return c}function m0(){var t=N.H,e=t.useState()[0];return e=typeof e.then=="function"?Ti(e):e,t=t.useState()[0],(bt!==null?bt.memoizedState:null)!==t&&(ct.flags|=1024),e}function Wo(){var t=kl!==0;return kl=0,t}function Fo(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Io(t){if(Ll){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Ll=!1}bn=0,Ut=bt=ct=null,Ta=!1,Ri=kl=0,Na=null}function ce(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?ct.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Bt(){if(bt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ut===null?ct.memoizedState:Ut.next;if(e!==null)Ut=e,bt=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ut===null?ct.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ti(t){var e=Ri;return Ri+=1,Na===null&&(Na=[]),t=ef(Na,t,e),e=ct,(Ut===null?e.memoizedState:Ut.next)===null&&(e=e.alternate,N.H=e===null||e.memoizedState===null?Xf:Vf),t}function Gl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ti(t);if(t.$$typeof===X)return Pt(t)}throw Error(r(438,String(t)))}function tr(t){var e=null,n=ct.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=ct.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Po(),ct.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=ee;return e.index++,n}function en(t,e){return typeof e=="function"?e(t):e}function Ql(t){var e=Bt();return er(e,bt,t)}function er(t,e,n){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var i=t.baseQueue,c=a.pending;if(c!==null){if(i!==null){var s=i.next;i.next=c.next,c.next=s}e.baseQueue=i=c,a.pending=null}if(c=t.baseState,i===null)t.memoizedState=c;else{e=i.next;var h=s=null,g=null,z=e,D=!1;do{var C=z.lane&-536870913;if(C!==z.lane?(dt&C)===C:(bn&C)===C){var R=z.revertLane;if(R===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),C===Ea&&(D=!0);else if((bn&R)===R){z=z.next,R===Ea&&(D=!0);continue}else C={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},g===null?(h=g=C,s=c):g=g.next=C,ct.lanes|=R,Rn|=R;C=z.action,In&&n(c,C),c=z.hasEagerState?z.eagerState:n(c,C)}else R={lane:C,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},g===null?(h=g=R,s=c):g=g.next=R,ct.lanes|=C,Rn|=C;z=z.next}while(z!==null&&z!==e);if(g===null?s=c:g.next=h,!de(c,t.memoizedState)&&(Xt=!0,D&&(n=ja,n!==null)))throw n;t.memoizedState=c,t.baseState=s,t.baseQueue=g,a.lastRenderedState=c}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function nr(t){var e=Bt(),n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=t;var a=n.dispatch,i=n.pending,c=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do c=t(c,s.action),s=s.next;while(s!==i);de(c,e.memoizedState)||(Xt=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),n.lastRenderedState=c}return[c,a]}function sf(t,e,n){var a=ct,i=Bt(),c=mt;if(c){if(n===void 0)throw Error(r(407));n=n()}else n=e();var s=!de((bt||i).memoizedState,n);s&&(i.memoizedState=n,Xt=!0),i=i.queue;var h=hf.bind(null,a,i,t);if(Ni(2048,8,h,[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(a.flags|=2048,Da(9,Xl(),df.bind(null,a,i,n,e),null),Et===null)throw Error(r(349));c||(bn&124)!==0||ff(a,e,n)}return n}function ff(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e=Po(),ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function df(t,e,n,a){e.value=n,e.getSnapshot=a,mf(e)&&pf(t)}function hf(t,e,n){return n(function(){mf(e)&&pf(t)})}function mf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!de(t,n)}catch{return!0}}function pf(t){var e=Sa(t,2);e!==null&&ve(e,t,2)}function ar(t){var e=ce();if(typeof t=="function"){var n=t;if(t=n(),In){hn(!0);try{n()}finally{hn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:en,lastRenderedState:t},e}function gf(t,e,n,a){return t.baseState=n,er(t,bt,typeof a=="function"?a:en)}function p0(t,e,n,a,i){if(Zl(t))throw Error(r(485));if(t=e.action,t!==null){var c={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){c.listeners.push(s)}};N.T!==null?n(!0):c.isTransition=!1,a(c),n=e.pending,n===null?(c.next=e.pending=c,xf(e,c)):(c.next=n.next,e.pending=n.next=c)}}function xf(t,e){var n=e.action,a=e.payload,i=t.state;if(e.isTransition){var c=N.T,s={};N.T=s;try{var h=n(i,a),g=N.S;g!==null&&g(s,h),vf(t,e,h)}catch(z){ir(t,e,z)}finally{N.T=c}}else try{c=n(i,a),vf(t,e,c)}catch(z){ir(t,e,z)}}function vf(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){yf(t,e,a)},function(a){return ir(t,e,a)}):yf(t,e,n)}function yf(t,e,n){e.status="fulfilled",e.value=n,bf(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,xf(t,n)))}function ir(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,bf(e),e=e.next;while(e!==a)}t.action=null}function bf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Sf(t,e){return e}function wf(t,e){if(mt){var n=Et.formState;if(n!==null){t:{var a=ct;if(mt){if(Mt){e:{for(var i=Mt,c=Be;i.nodeType!==8;){if(!c){i=null;break e}if(i=Ce(i.nextSibling),i===null){i=null;break e}}c=i.data,i=c==="F!"||c==="F"?i:null}if(i){Mt=Ce(i.nextSibling),a=i.data==="F!";break t}}Jn(a)}a=!1}a&&(e=n[0])}}return n=ce(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sf,lastRenderedState:e},n.queue=a,n=kf.bind(null,ct,a),a.dispatch=n,a=ar(!1),c=ur.bind(null,ct,!1,a.queue),a=ce(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,n=p0.bind(null,ct,i,c,n),i.dispatch=n,a.memoizedState=t,[e,n,!1]}function Af(t){var e=Bt();return zf(e,bt,t)}function zf(t,e,n){if(e=er(t,e,Sf)[0],t=Ql(en)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Ti(e)}catch(s){throw s===wi?Hl:s}else a=e;e=Bt();var i=e.queue,c=i.dispatch;return n!==e.memoizedState&&(ct.flags|=2048,Da(9,Xl(),g0.bind(null,i,n),null)),[a,c,t]}function g0(t,e){t.action=e}function Ef(t){var e=Bt(),n=bt;if(n!==null)return zf(e,n,t);Bt(),e=e.memoizedState,n=Bt();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function Da(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=ct.updateQueue,e===null&&(e=Po(),ct.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function Xl(){return{destroy:void 0,resource:void 0}}function jf(){return Bt().memoizedState}function Vl(t,e,n,a){var i=ce();a=a===void 0?null:a,ct.flags|=t,i.memoizedState=Da(1|e,Xl(),n,a)}function Ni(t,e,n,a){var i=Bt();a=a===void 0?null:a;var c=i.memoizedState.inst;bt!==null&&a!==null&&Jo(a,bt.memoizedState.deps)?i.memoizedState=Da(e,c,n,a):(ct.flags|=t,i.memoizedState=Da(1|e,c,n,a))}function Rf(t,e){Vl(8390656,8,t,e)}function Tf(t,e){Ni(2048,8,t,e)}function Nf(t,e){return Ni(4,2,t,e)}function Df(t,e){return Ni(4,4,t,e)}function Mf(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Of(t,e,n){n=n!=null?n.concat([t]):null,Ni(4,4,Mf.bind(null,e,t),n)}function lr(){}function Cf(t,e){var n=Bt();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&Jo(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function _f(t,e){var n=Bt();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&Jo(e,a[1]))return a[0];if(a=t(),In){hn(!0);try{t()}finally{hn(!1)}}return n.memoizedState=[a,e],a}function cr(t,e,n){return n===void 0||(bn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=Hd(),ct.lanes|=t,Rn|=t,n)}function Uf(t,e,n,a){return de(n,e)?n:Ra.current!==null?(t=cr(t,n,a),de(t,e)||(Xt=!0),t):(bn&42)===0?(Xt=!0,t.memoizedState=n):(t=Hd(),ct.lanes|=t,Rn|=t,e)}function Bf(t,e,n,a,i){var c=k.p;k.p=c!==0&&8>c?c:8;var s=N.T,h={};N.T=h,ur(t,!1,e,n);try{var g=i(),z=N.S;if(z!==null&&z(h,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var D=d0(g,a);Di(t,e,D,xe(t))}else Di(t,e,a,xe(t))}catch(C){Di(t,e,{then:function(){},status:"rejected",reason:C},xe())}finally{k.p=c,N.T=s}}function x0(){}function or(t,e,n,a){if(t.tag!==5)throw Error(r(476));var i=Hf(t).queue;Bf(t,i,e,I,n===null?x0:function(){return qf(t),n(a)})}function Hf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:en,lastRenderedState:I},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:en,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function qf(t){var e=Hf(t).next.queue;Di(t,e,{},xe())}function rr(){return Pt(Ji)}function Yf(){return Bt().memoizedState}function Lf(){return Bt().memoizedState}function v0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=xe();t=vn(n);var a=yn(e,t,n);a!==null&&(ve(a,e,n),zi(a,e,n)),e={cache:qo()},t.payload=e;return}e=e.return}}function y0(t,e,n){var a=xe();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Zl(t)?Gf(e,n):(n=To(t,e,n,a),n!==null&&(ve(n,t,a),Qf(n,e,a)))}function kf(t,e,n){var a=xe();Di(t,e,n,a)}function Di(t,e,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zl(t))Gf(e,i);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var s=e.lastRenderedState,h=c(s,n);if(i.hasEagerState=!0,i.eagerState=h,de(h,s))return Nl(t,e,i,0),Et===null&&Tl(),!1}catch{}finally{}if(n=To(t,e,i,a),n!==null)return ve(n,t,a),Qf(n,e,a),!0}return!1}function ur(t,e,n,a){if(a={lane:2,revertLane:kr(),action:a,hasEagerState:!1,eagerState:null,next:null},Zl(t)){if(e)throw Error(r(479))}else e=To(t,n,a,2),e!==null&&ve(e,t,2)}function Zl(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Gf(t,e){Ta=Ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qf(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Wu(t,n)}}var Kl={readContext:Pt,use:Gl,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useLayoutEffect:Ct,useInsertionEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useSyncExternalStore:Ct,useId:Ct,useHostTransitionStatus:Ct,useFormState:Ct,useActionState:Ct,useOptimistic:Ct,useMemoCache:Ct,useCacheRefresh:Ct},Xf={readContext:Pt,use:Gl,useCallback:function(t,e){return ce().memoizedState=[t,e===void 0?null:e],t},useContext:Pt,useEffect:Rf,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Vl(4194308,4,Mf.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vl(4194308,4,t,e)},useInsertionEffect:function(t,e){Vl(4,2,t,e)},useMemo:function(t,e){var n=ce();e=e===void 0?null:e;var a=t();if(In){hn(!0);try{t()}finally{hn(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=ce();if(n!==void 0){var i=n(e);if(In){hn(!0);try{n(e)}finally{hn(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=y0.bind(null,ct,t),[a.memoizedState,t]},useRef:function(t){var e=ce();return t={current:t},e.memoizedState=t},useState:function(t){t=ar(t);var e=t.queue,n=kf.bind(null,ct,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:lr,useDeferredValue:function(t,e){var n=ce();return cr(n,t,e)},useTransition:function(){var t=ar(!1);return t=Bf.bind(null,ct,t.queue,!0,!1),ce().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=ct,i=ce();if(mt){if(n===void 0)throw Error(r(407));n=n()}else{if(n=e(),Et===null)throw Error(r(349));(dt&124)!==0||ff(a,e,n)}i.memoizedState=n;var c={value:n,getSnapshot:e};return i.queue=c,Rf(hf.bind(null,a,c,t),[t]),a.flags|=2048,Da(9,Xl(),df.bind(null,a,c,n,e),null),n},useId:function(){var t=ce(),e=Et.identifierPrefix;if(mt){var n=Ie,a=Fe;n=(a&~(1<<32-fe(a)-1)).toString(32)+n,e="«"+e+"R"+n,n=kl++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=h0++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:rr,useFormState:wf,useActionState:wf,useOptimistic:function(t){var e=ce();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=ur.bind(null,ct,!0,n),n.dispatch=e,[t,e]},useMemoCache:tr,useCacheRefresh:function(){return ce().memoizedState=v0.bind(null,ct)}},Vf={readContext:Pt,use:Gl,useCallback:Cf,useContext:Pt,useEffect:Tf,useImperativeHandle:Of,useInsertionEffect:Nf,useLayoutEffect:Df,useMemo:_f,useReducer:Ql,useRef:jf,useState:function(){return Ql(en)},useDebugValue:lr,useDeferredValue:function(t,e){var n=Bt();return Uf(n,bt.memoizedState,t,e)},useTransition:function(){var t=Ql(en)[0],e=Bt().memoizedState;return[typeof t=="boolean"?t:Ti(t),e]},useSyncExternalStore:sf,useId:Yf,useHostTransitionStatus:rr,useFormState:Af,useActionState:Af,useOptimistic:function(t,e){var n=Bt();return gf(n,bt,t,e)},useMemoCache:tr,useCacheRefresh:Lf},b0={readContext:Pt,use:Gl,useCallback:Cf,useContext:Pt,useEffect:Tf,useImperativeHandle:Of,useInsertionEffect:Nf,useLayoutEffect:Df,useMemo:_f,useReducer:nr,useRef:jf,useState:function(){return nr(en)},useDebugValue:lr,useDeferredValue:function(t,e){var n=Bt();return bt===null?cr(n,t,e):Uf(n,bt.memoizedState,t,e)},useTransition:function(){var t=nr(en)[0],e=Bt().memoizedState;return[typeof t=="boolean"?t:Ti(t),e]},useSyncExternalStore:sf,useId:Yf,useHostTransitionStatus:rr,useFormState:Ef,useActionState:Ef,useOptimistic:function(t,e){var n=Bt();return bt!==null?gf(n,bt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:tr,useCacheRefresh:Lf},Ma=null,Mi=0;function Jl(t){var e=Mi;return Mi+=1,Ma===null&&(Ma=[]),ef(Ma,t,e)}function Oi(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function $l(t,e){throw e.$$typeof===O?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Zf(t){var e=t._init;return e(t._payload)}function Kf(t){function e(w,b){if(t){var A=w.deletions;A===null?(w.deletions=[b],w.flags|=16):A.push(b)}}function n(w,b){if(!t)return null;for(;b!==null;)e(w,b),b=b.sibling;return null}function a(w){for(var b=new Map;w!==null;)w.key!==null?b.set(w.key,w):b.set(w.index,w),w=w.sibling;return b}function i(w,b){return w=We(w,b),w.index=0,w.sibling=null,w}function c(w,b,A){return w.index=A,t?(A=w.alternate,A!==null?(A=A.index,A<b?(w.flags|=67108866,b):A):(w.flags|=67108866,b)):(w.flags|=1048576,b)}function s(w){return t&&w.alternate===null&&(w.flags|=67108866),w}function h(w,b,A,M){return b===null||b.tag!==6?(b=Do(A,w.mode,M),b.return=w,b):(b=i(b,A),b.return=w,b)}function g(w,b,A,M){var Z=A.type;return Z===Y?D(w,b,A.props.children,M,A.key):b!==null&&(b.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===jt&&Zf(Z)===b.type)?(b=i(b,A.props),Oi(b,A),b.return=w,b):(b=Ml(A.type,A.key,A.props,null,w.mode,M),Oi(b,A),b.return=w,b)}function z(w,b,A,M){return b===null||b.tag!==4||b.stateNode.containerInfo!==A.containerInfo||b.stateNode.implementation!==A.implementation?(b=Mo(A,w.mode,M),b.return=w,b):(b=i(b,A.children||[]),b.return=w,b)}function D(w,b,A,M,Z){return b===null||b.tag!==7?(b=Xn(A,w.mode,M,Z),b.return=w,b):(b=i(b,A),b.return=w,b)}function C(w,b,A){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Do(""+b,w.mode,A),b.return=w,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case _:return A=Ml(b.type,b.key,b.props,null,w.mode,A),Oi(A,b),A.return=w,A;case q:return b=Mo(b,w.mode,A),b.return=w,b;case jt:var M=b._init;return b=M(b._payload),C(w,b,A)}if(kt(b)||Lt(b))return b=Xn(b,w.mode,A,null),b.return=w,b;if(typeof b.then=="function")return C(w,Jl(b),A);if(b.$$typeof===X)return C(w,Ul(w,b),A);$l(w,b)}return null}function R(w,b,A,M){var Z=b!==null?b.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return Z!==null?null:h(w,b,""+A,M);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case _:return A.key===Z?g(w,b,A,M):null;case q:return A.key===Z?z(w,b,A,M):null;case jt:return Z=A._init,A=Z(A._payload),R(w,b,A,M)}if(kt(A)||Lt(A))return Z!==null?null:D(w,b,A,M,null);if(typeof A.then=="function")return R(w,b,Jl(A),M);if(A.$$typeof===X)return R(w,b,Ul(w,A),M);$l(w,A)}return null}function T(w,b,A,M,Z){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return w=w.get(A)||null,h(b,w,""+M,Z);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case _:return w=w.get(M.key===null?A:M.key)||null,g(b,w,M,Z);case q:return w=w.get(M.key===null?A:M.key)||null,z(b,w,M,Z);case jt:var ot=M._init;return M=ot(M._payload),T(w,b,A,M,Z)}if(kt(M)||Lt(M))return w=w.get(A)||null,D(b,w,M,Z,null);if(typeof M.then=="function")return T(w,b,A,Jl(M),Z);if(M.$$typeof===X)return T(w,b,A,Ul(b,M),Z);$l(b,M)}return null}function at(w,b,A,M){for(var Z=null,ot=null,$=b,et=b=0,Zt=null;$!==null&&et<A.length;et++){$.index>et?(Zt=$,$=null):Zt=$.sibling;var ht=R(w,$,A[et],M);if(ht===null){$===null&&($=Zt);break}t&&$&&ht.alternate===null&&e(w,$),b=c(ht,b,et),ot===null?Z=ht:ot.sibling=ht,ot=ht,$=Zt}if(et===A.length)return n(w,$),mt&&Zn(w,et),Z;if($===null){for(;et<A.length;et++)$=C(w,A[et],M),$!==null&&(b=c($,b,et),ot===null?Z=$:ot.sibling=$,ot=$);return mt&&Zn(w,et),Z}for($=a($);et<A.length;et++)Zt=T($,w,et,A[et],M),Zt!==null&&(t&&Zt.alternate!==null&&$.delete(Zt.key===null?et:Zt.key),b=c(Zt,b,et),ot===null?Z=Zt:ot.sibling=Zt,ot=Zt);return t&&$.forEach(function(Bn){return e(w,Bn)}),mt&&Zn(w,et),Z}function P(w,b,A,M){if(A==null)throw Error(r(151));for(var Z=null,ot=null,$=b,et=b=0,Zt=null,ht=A.next();$!==null&&!ht.done;et++,ht=A.next()){$.index>et?(Zt=$,$=null):Zt=$.sibling;var Bn=R(w,$,ht.value,M);if(Bn===null){$===null&&($=Zt);break}t&&$&&Bn.alternate===null&&e(w,$),b=c(Bn,b,et),ot===null?Z=Bn:ot.sibling=Bn,ot=Bn,$=Zt}if(ht.done)return n(w,$),mt&&Zn(w,et),Z;if($===null){for(;!ht.done;et++,ht=A.next())ht=C(w,ht.value,M),ht!==null&&(b=c(ht,b,et),ot===null?Z=ht:ot.sibling=ht,ot=ht);return mt&&Zn(w,et),Z}for($=a($);!ht.done;et++,ht=A.next())ht=T($,w,et,ht.value,M),ht!==null&&(t&&ht.alternate!==null&&$.delete(ht.key===null?et:ht.key),b=c(ht,b,et),ot===null?Z=ht:ot.sibling=ht,ot=ht);return t&&$.forEach(function(Sg){return e(w,Sg)}),mt&&Zn(w,et),Z}function wt(w,b,A,M){if(typeof A=="object"&&A!==null&&A.type===Y&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case _:t:{for(var Z=A.key;b!==null;){if(b.key===Z){if(Z=A.type,Z===Y){if(b.tag===7){n(w,b.sibling),M=i(b,A.props.children),M.return=w,w=M;break t}}else if(b.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===jt&&Zf(Z)===b.type){n(w,b.sibling),M=i(b,A.props),Oi(M,A),M.return=w,w=M;break t}n(w,b);break}else e(w,b);b=b.sibling}A.type===Y?(M=Xn(A.props.children,w.mode,M,A.key),M.return=w,w=M):(M=Ml(A.type,A.key,A.props,null,w.mode,M),Oi(M,A),M.return=w,w=M)}return s(w);case q:t:{for(Z=A.key;b!==null;){if(b.key===Z)if(b.tag===4&&b.stateNode.containerInfo===A.containerInfo&&b.stateNode.implementation===A.implementation){n(w,b.sibling),M=i(b,A.children||[]),M.return=w,w=M;break t}else{n(w,b);break}else e(w,b);b=b.sibling}M=Mo(A,w.mode,M),M.return=w,w=M}return s(w);case jt:return Z=A._init,A=Z(A._payload),wt(w,b,A,M)}if(kt(A))return at(w,b,A,M);if(Lt(A)){if(Z=Lt(A),typeof Z!="function")throw Error(r(150));return A=Z.call(A),P(w,b,A,M)}if(typeof A.then=="function")return wt(w,b,Jl(A),M);if(A.$$typeof===X)return wt(w,b,Ul(w,A),M);$l(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,b!==null&&b.tag===6?(n(w,b.sibling),M=i(b,A),M.return=w,w=M):(n(w,b),M=Do(A,w.mode,M),M.return=w,w=M),s(w)):n(w,b)}return function(w,b,A,M){try{Mi=0;var Z=wt(w,b,A,M);return Ma=null,Z}catch($){if($===wi||$===Hl)throw $;var ot=he(29,$,null,w.mode);return ot.lanes=M,ot.return=w,ot}finally{}}}var Oa=Kf(!0),Jf=Kf(!1),Re=U(null),He=null;function Sn(t){var e=t.alternate;G(Yt,Yt.current&1),G(Re,t),He===null&&(e===null||Ra.current!==null||e.memoizedState!==null)&&(He=t)}function $f(t){if(t.tag===22){if(G(Yt,Yt.current),G(Re,t),He===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(He=t)}}else wn()}function wn(){G(Yt,Yt.current),G(Re,Re.current)}function nn(t){L(Re),He===t&&(He=null),L(Yt)}var Yt=U(0);function Wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Pr(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function sr(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:E({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fr={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=xe(),i=vn(a);i.payload=e,n!=null&&(i.callback=n),e=yn(t,i,a),e!==null&&(ve(e,t,a),zi(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=xe(),i=vn(a);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=yn(t,i,a),e!==null&&(ve(e,t,a),zi(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xe(),a=vn(n);a.tag=2,e!=null&&(a.callback=e),e=yn(t,a,n),e!==null&&(ve(e,t,n),zi(e,t,n))}};function Wf(t,e,n,a,i,c,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,c,s):e.prototype&&e.prototype.isPureReactComponent?!mi(n,a)||!mi(i,c):!0}function Ff(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&fr.enqueueReplaceState(e,e.state,null)}function Pn(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=E({},n));for(var i in t)n[i]===void 0&&(n[i]=t[i])}return n}var Fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function If(t){Fl(t)}function Pf(t){console.error(t)}function td(t){Fl(t)}function Il(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function ed(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function dr(t,e,n){return n=vn(n),n.tag=3,n.payload={element:null},n.callback=function(){Il(t,e)},n}function nd(t){return t=vn(t),t.tag=3,t}function ad(t,e,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var c=a.value;t.payload=function(){return i(c)},t.callback=function(){ed(e,n,a)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ed(e,n,a),typeof i!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function S0(t,e,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&yi(e,n,i,!0),n=Re.current,n!==null){switch(n.tag){case 13:return He===null?Br():n.alternate===null&&Ot===0&&(Ot=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===ko?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),qr(t,a,i)),!1;case 22:return n.flags|=65536,a===ko?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),qr(t,a,i)),!1}throw Error(r(435,n.tag))}return qr(t,a,i),Br(),!1}if(mt)return e=Re.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==_o&&(t=Error(r(422),{cause:a}),vi(Ae(t,n)))):(a!==_o&&(e=Error(r(423),{cause:a}),vi(Ae(e,n))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=Ae(a,n),i=dr(t.stateNode,a,i),Xo(t,i),Ot!==4&&(Ot=2)),!1;var c=Error(r(520),{cause:a});if(c=Ae(c,n),Yi===null?Yi=[c]:Yi.push(c),Ot!==4&&(Ot=2),e===null)return!0;a=Ae(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=i&-i,n.lanes|=t,t=dr(n.stateNode,a,t),Xo(n,t),!1;case 1:if(e=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Tn===null||!Tn.has(c))))return n.flags|=65536,i&=-i,n.lanes|=i,i=nd(i),ad(i,t,n,a),Xo(n,i),!1}n=n.return}while(n!==null);return!1}var id=Error(r(461)),Xt=!1;function Jt(t,e,n,a){e.child=t===null?Jf(e,null,n,a):Oa(e,t.child,n,a)}function ld(t,e,n,a,i){n=n.render;var c=e.ref;if("ref"in a){var s={};for(var h in a)h!=="ref"&&(s[h]=a[h])}else s=a;return Wn(e),a=$o(t,e,n,s,c,i),h=Wo(),t!==null&&!Xt?(Fo(t,e,i),an(t,e,i)):(mt&&h&&Oo(e),e.flags|=1,Jt(t,e,a,i),e.child)}function cd(t,e,n,a,i){if(t===null){var c=n.type;return typeof c=="function"&&!No(c)&&c.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=c,od(t,e,c,a,i)):(t=Ml(n.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!br(t,i)){var s=c.memoizedProps;if(n=n.compare,n=n!==null?n:mi,n(s,a)&&t.ref===e.ref)return an(t,e,i)}return e.flags|=1,t=We(c,a),t.ref=e.ref,t.return=e,e.child=t}function od(t,e,n,a,i){if(t!==null){var c=t.memoizedProps;if(mi(c,a)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=a=c,br(t,i))(t.flags&131072)!==0&&(Xt=!0);else return e.lanes=t.lanes,an(t,e,i)}return hr(t,e,n,a,i)}function rd(t,e,n){var a=e.pendingProps,i=a.children,c=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=c!==null?c.baseLanes|n:n,t!==null){for(i=e.child=t.child,c=0;i!==null;)c=c|i.lanes|i.childLanes,i=i.sibling;e.childLanes=c&~a}else e.childLanes=0,e.child=null;return ud(t,e,a,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bl(e,c!==null?c.cachePool:null),c!==null?of(e,c):Zo(),$f(e);else return e.lanes=e.childLanes=536870912,ud(t,e,c!==null?c.baseLanes|n:n,n)}else c!==null?(Bl(e,c.cachePool),of(e,c),wn(),e.memoizedState=null):(t!==null&&Bl(e,null),Zo(),wn());return Jt(t,e,i,n),e.child}function ud(t,e,n,a){var i=Lo();return i=i===null?null:{parent:qt._currentValue,pool:i},e.memoizedState={baseLanes:n,cachePool:i},t!==null&&Bl(e,null),Zo(),$f(e),t!==null&&yi(t,e,a,!0),null}function Pl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function hr(t,e,n,a,i){return Wn(e),n=$o(t,e,n,a,void 0,i),a=Wo(),t!==null&&!Xt?(Fo(t,e,i),an(t,e,i)):(mt&&a&&Oo(e),e.flags|=1,Jt(t,e,n,i),e.child)}function sd(t,e,n,a,i,c){return Wn(e),e.updateQueue=null,n=uf(e,a,n,i),rf(t),a=Wo(),t!==null&&!Xt?(Fo(t,e,c),an(t,e,c)):(mt&&a&&Oo(e),e.flags|=1,Jt(t,e,n,c),e.child)}function fd(t,e,n,a,i){if(Wn(e),e.stateNode===null){var c=wa,s=n.contextType;typeof s=="object"&&s!==null&&(c=Pt(s)),c=new n(a,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=fr,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=a,c.state=e.memoizedState,c.refs={},Go(e),s=n.contextType,c.context=typeof s=="object"&&s!==null?Pt(s):wa,c.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(sr(e,n,s,a),c.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(s=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),s!==c.state&&fr.enqueueReplaceState(c,c.state,null),ji(e,a,c,i),Ei(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){c=e.stateNode;var h=e.memoizedProps,g=Pn(n,h);c.props=g;var z=c.context,D=n.contextType;s=wa,typeof D=="object"&&D!==null&&(s=Pt(D));var C=n.getDerivedStateFromProps;D=typeof C=="function"||typeof c.getSnapshotBeforeUpdate=="function",h=e.pendingProps!==h,D||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h||z!==s)&&Ff(e,c,a,s),xn=!1;var R=e.memoizedState;c.state=R,ji(e,a,c,i),Ei(),z=e.memoizedState,h||R!==z||xn?(typeof C=="function"&&(sr(e,n,C,a),z=e.memoizedState),(g=xn||Wf(e,n,g,a,R,z,s))?(D||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=z),c.props=a,c.state=z,c.context=s,a=g):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{c=e.stateNode,Qo(t,e),s=e.memoizedProps,D=Pn(n,s),c.props=D,C=e.pendingProps,R=c.context,z=n.contextType,g=wa,typeof z=="object"&&z!==null&&(g=Pt(z)),h=n.getDerivedStateFromProps,(z=typeof h=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(s!==C||R!==g)&&Ff(e,c,a,g),xn=!1,R=e.memoizedState,c.state=R,ji(e,a,c,i),Ei();var T=e.memoizedState;s!==C||R!==T||xn||t!==null&&t.dependencies!==null&&_l(t.dependencies)?(typeof h=="function"&&(sr(e,n,h,a),T=e.memoizedState),(D=xn||Wf(e,n,D,a,R,T,g)||t!==null&&t.dependencies!==null&&_l(t.dependencies))?(z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,T,g),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,T,g)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||s===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=T),c.props=a,c.state=T,c.context=g,a=D):(typeof c.componentDidUpdate!="function"||s===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),a=!1)}return c=a,Pl(t,e),a=(e.flags&128)!==0,c||a?(c=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&a?(e.child=Oa(e,t.child,null,i),e.child=Oa(e,null,n,i)):Jt(t,e,n,i),e.memoizedState=c.state,t=e.child):t=an(t,e,i),t}function dd(t,e,n,a){return xi(),e.flags|=256,Jt(t,e,n,a),e.child}var mr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pr(t){return{baseLanes:t,cachePool:Is()}}function gr(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Te),t}function hd(t,e,n){var a=e.pendingProps,i=!1,c=(e.flags&128)!==0,s;if((s=c)||(s=t!==null&&t.memoizedState===null?!1:(Yt.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(mt){if(i?Sn(e):wn(),mt){var h=Mt,g;if(g=h){t:{for(g=h,h=Be;g.nodeType!==8;){if(!h){h=null;break t}if(g=Ce(g.nextSibling),g===null){h=null;break t}}h=g}h!==null?(e.memoizedState={dehydrated:h,treeContext:Vn!==null?{id:Fe,overflow:Ie}:null,retryLane:536870912,hydrationErrors:null},g=he(18,null,null,0),g.stateNode=h,g.return=e,e.child=g,ne=e,Mt=null,g=!0):g=!1}g||Jn(e)}if(h=e.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return Pr(h)?e.lanes=32:e.lanes=536870912,null;nn(e)}return h=a.children,a=a.fallback,i?(wn(),i=e.mode,h=tc({mode:"hidden",children:h},i),a=Xn(a,i,n,null),h.return=e,a.return=e,h.sibling=a,e.child=h,i=e.child,i.memoizedState=pr(n),i.childLanes=gr(t,s,n),e.memoizedState=mr,a):(Sn(e),xr(e,h))}if(g=t.memoizedState,g!==null&&(h=g.dehydrated,h!==null)){if(c)e.flags&256?(Sn(e),e.flags&=-257,e=vr(t,e,n)):e.memoizedState!==null?(wn(),e.child=t.child,e.flags|=128,e=null):(wn(),i=a.fallback,h=e.mode,a=tc({mode:"visible",children:a.children},h),i=Xn(i,h,n,null),i.flags|=2,a.return=e,i.return=e,a.sibling=i,e.child=a,Oa(e,t.child,null,n),a=e.child,a.memoizedState=pr(n),a.childLanes=gr(t,s,n),e.memoizedState=mr,e=i);else if(Sn(e),Pr(h)){if(s=h.nextSibling&&h.nextSibling.dataset,s)var z=s.dgst;s=z,a=Error(r(419)),a.stack="",a.digest=s,vi({value:a,source:null,stack:null}),e=vr(t,e,n)}else if(Xt||yi(t,e,n,!1),s=(n&t.childLanes)!==0,Xt||s){if(s=Et,s!==null&&(a=n&-n,a=(a&42)!==0?1:Pc(a),a=(a&(s.suspendedLanes|n))!==0?0:a,a!==0&&a!==g.retryLane))throw g.retryLane=a,Sa(t,a),ve(s,t,a),id;h.data==="$?"||Br(),e=vr(t,e,n)}else h.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=g.treeContext,Mt=Ce(h.nextSibling),ne=e,mt=!0,Kn=null,Be=!1,t!==null&&(Ee[je++]=Fe,Ee[je++]=Ie,Ee[je++]=Vn,Fe=t.id,Ie=t.overflow,Vn=e),e=xr(e,a.children),e.flags|=4096);return e}return i?(wn(),i=a.fallback,h=e.mode,g=t.child,z=g.sibling,a=We(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,z!==null?i=We(z,i):(i=Xn(i,h,n,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,a=i,i=e.child,h=t.child.memoizedState,h===null?h=pr(n):(g=h.cachePool,g!==null?(z=qt._currentValue,g=g.parent!==z?{parent:z,pool:z}:g):g=Is(),h={baseLanes:h.baseLanes|n,cachePool:g}),i.memoizedState=h,i.childLanes=gr(t,s,n),e.memoizedState=mr,a):(Sn(e),n=t.child,t=n.sibling,n=We(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function xr(t,e){return e=tc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function tc(t,e){return t=he(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function vr(t,e,n){return Oa(e,t.child,null,n),t=xr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function md(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Bo(t.return,e,n)}function yr(t,e,n,a,i){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=n,c.tailMode=i)}function pd(t,e,n){var a=e.pendingProps,i=a.revealOrder,c=a.tail;if(Jt(t,e,a.children,n),a=Yt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&md(t,n,e);else if(t.tag===19)md(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(G(Yt,a),i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Wl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yr(e,!1,i,n,c);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Wl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yr(e,!0,n,null,c);break;case"together":yr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function an(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(yi(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,n=We(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=We(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function br(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&_l(t)))}function w0(t,e,n){switch(e.tag){case 3:pt(e,e.stateNode.containerInfo),gn(e,qt,t.memoizedState.cache),xi();break;case 27:case 5:qn(e);break;case 4:pt(e,e.stateNode.containerInfo);break;case 10:gn(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Sn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?hd(t,e,n):(Sn(e),t=an(t,e,n),t!==null?t.sibling:null);Sn(e);break;case 19:var i=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(yi(t,e,n,!1),a=(n&e.childLanes)!==0),i){if(a)return pd(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Yt,Yt.current),a)break;return null;case 22:case 23:return e.lanes=0,rd(t,e,n);case 24:gn(e,qt,t.memoizedState.cache)}return an(t,e,n)}function gd(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Xt=!0;else{if(!br(t,n)&&(e.flags&128)===0)return Xt=!1,w0(t,e,n);Xt=(t.flags&131072)!==0}else Xt=!1,mt&&(e.flags&1048576)!==0&&Vs(e,Cl,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,i=a._init;if(a=i(a._payload),e.type=a,typeof a=="function")No(a)?(t=Pn(a,t),e.tag=1,e=fd(null,e,a,t,n)):(e.tag=0,e=hr(null,e,a,t,n));else{if(a!=null){if(i=a.$$typeof,i===F){e.tag=11,e=ld(null,e,a,t,n);break t}else if(i===J){e.tag=14,e=cd(null,e,a,t,n);break t}}throw e=Ze(a)||a,Error(r(306,e,""))}}return e;case 0:return hr(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,i=Pn(a,e.pendingProps),fd(t,e,a,i,n);case 3:t:{if(pt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));a=e.pendingProps;var c=e.memoizedState;i=c.element,Qo(t,e),ji(e,a,null,n);var s=e.memoizedState;if(a=s.cache,gn(e,qt,a),a!==c.cache&&Ho(e,[qt],n,!0),Ei(),a=s.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=dd(t,e,a,n);break t}else if(a!==i){i=Ae(Error(r(424)),e),vi(i),e=dd(t,e,a,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Mt=Ce(t.firstChild),ne=e,mt=!0,Kn=null,Be=!0,n=Jf(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(xi(),a===i){e=an(t,e,n);break t}Jt(t,e,a,n)}e=e.child}return e;case 26:return Pl(t,e),t===null?(n=bh(e.type,null,e.pendingProps,null))?e.memoizedState=n:mt||(n=e.type,t=e.pendingProps,a=mc(tt.current).createElement(n),a[It]=e,a[ie]=t,Wt(a,n,t),Qt(a),e.stateNode=a):e.memoizedState=bh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return qn(e),t===null&&mt&&(a=e.stateNode=xh(e.type,e.pendingProps,tt.current),ne=e,Be=!0,i=Mt,Mn(e.type)?(tu=i,Mt=Ce(a.firstChild)):Mt=i),Jt(t,e,e.pendingProps.children,n),Pl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&mt&&((i=a=Mt)&&(a=W0(a,e.type,e.pendingProps,Be),a!==null?(e.stateNode=a,ne=e,Mt=Ce(a.firstChild),Be=!1,i=!0):i=!1),i||Jn(e)),qn(e),i=e.type,c=e.pendingProps,s=t!==null?t.memoizedProps:null,a=c.children,Wr(i,c)?a=null:s!==null&&Wr(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=$o(t,e,m0,null,null,n),Ji._currentValue=i),Pl(t,e),Jt(t,e,a,n),e.child;case 6:return t===null&&mt&&((t=n=Mt)&&(n=F0(n,e.pendingProps,Be),n!==null?(e.stateNode=n,ne=e,Mt=null,t=!0):t=!1),t||Jn(e)),null;case 13:return hd(t,e,n);case 4:return pt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Oa(e,null,a,n):Jt(t,e,a,n),e.child;case 11:return ld(t,e,e.type,e.pendingProps,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,gn(e,e.type,a.value),Jt(t,e,a.children,n),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,Wn(e),i=Pt(i),a=a(i),e.flags|=1,Jt(t,e,a,n),e.child;case 14:return cd(t,e,e.type,e.pendingProps,n);case 15:return od(t,e,e.type,e.pendingProps,n);case 19:return pd(t,e,n);case 31:return a=e.pendingProps,n=e.mode,a={mode:a.mode,children:a.children},t===null?(n=tc(a,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=We(t.child,a),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return rd(t,e,n);case 24:return Wn(e),a=Pt(qt),t===null?(i=Lo(),i===null&&(i=Et,c=qo(),i.pooledCache=c,c.refCount++,c!==null&&(i.pooledCacheLanes|=n),i=c),e.memoizedState={parent:a,cache:i},Go(e),gn(e,qt,i)):((t.lanes&n)!==0&&(Qo(t,e),ji(e,null,null,n),Ei()),i=t.memoizedState,c=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),gn(e,qt,a)):(a=c.cache,gn(e,qt,a),a!==i.cache&&Ho(e,[qt],n,!0))),Jt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function ln(t){t.flags|=4}function xd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Eh(e)){if(e=Re.current,e!==null&&((dt&4194048)===dt?He!==null:(dt&62914560)!==dt&&(dt&536870912)===0||e!==He))throw Ai=ko,Ps;t.flags|=8192}}function ec(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ju():536870912,t.lanes|=e,Ba|=e)}function Ci(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function A0(t,e,n){var a=e.pendingProps;switch(Co(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Nt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),tn(qt),Ft(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(gi(e)?ln(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Js())),Nt(e),null;case 26:return n=e.memoizedState,t===null?(ln(e),n!==null?(Nt(e),xd(e,n)):(Nt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(ln(e),Nt(e),xd(e,n)):(Nt(e),e.flags&=-16777217):(t.memoizedProps!==a&&ln(e),Nt(e),e.flags&=-16777217),null;case 27:Ke(e),n=tt.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&ln(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Nt(e),null}t=W.current,gi(e)?Zs(e):(t=xh(i,a,n),e.stateNode=t,ln(e))}return Nt(e),null;case 5:if(Ke(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&ln(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Nt(e),null}if(t=W.current,gi(e))Zs(e);else{switch(i=mc(tt.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}t[It]=e,t[ie]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(Wt(t,n,a),n){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ln(e)}}return Nt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&ln(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=tt.current,gi(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,i=ne,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[It]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||sh(t.nodeValue,n)),t||Jn(e)}else t=mc(t).createTextNode(a),t[It]=e,e.stateNode=t}return Nt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=gi(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(r(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));i[It]=e}else xi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Nt(e),i=!1}else i=Js(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(nn(e),e):(nn(e),null)}if(nn(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=a!==null,t=t!==null&&t.memoizedState!==null,n){a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var c=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==i&&(a.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),ec(e,e.updateQueue),Nt(e),null;case 4:return Ft(),t===null&&Vr(e.stateNode.containerInfo),Nt(e),null;case 10:return tn(e.type),Nt(e),null;case 19:if(L(Yt),i=e.memoizedState,i===null)return Nt(e),null;if(a=(e.flags&128)!==0,c=i.rendering,c===null)if(a)Ci(i,!1);else{if(Ot!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=Wl(t),c!==null){for(e.flags|=128,Ci(i,!1),t=c.updateQueue,e.updateQueue=t,ec(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Xs(n,t),n=n.sibling;return G(Yt,Yt.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ue()>ic&&(e.flags|=128,a=!0,Ci(i,!1),e.lanes=4194304)}else{if(!a)if(t=Wl(c),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,ec(e,t),Ci(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!mt)return Nt(e),null}else 2*Ue()-i.renderingStartTime>ic&&n!==536870912&&(e.flags|=128,a=!0,Ci(i,!1),e.lanes=4194304);i.isBackwards?(c.sibling=e.child,e.child=c):(t=i.last,t!==null?t.sibling=c:e.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ue(),e.sibling=null,t=Yt.current,G(Yt,a?t&1|2:t&1),e):(Nt(e),null);case 22:case 23:return nn(e),Ko(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),n=e.updateQueue,n!==null&&ec(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&L(Fn),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),tn(qt),Nt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function z0(t,e){switch(Co(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return tn(qt),Ft(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ke(e),null;case 13:if(nn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return L(Yt),null;case 4:return Ft(),null;case 10:return tn(e.type),null;case 22:case 23:return nn(e),Ko(),t!==null&&L(Fn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return tn(qt),null;case 25:return null;default:return null}}function vd(t,e){switch(Co(e),e.tag){case 3:tn(qt),Ft();break;case 26:case 27:case 5:Ke(e);break;case 4:Ft();break;case 13:nn(e);break;case 19:L(Yt);break;case 10:tn(e.type);break;case 22:case 23:nn(e),Ko(),t!==null&&L(Fn);break;case 24:tn(qt)}}function _i(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&t)===t){a=void 0;var c=n.create,s=n.inst;a=c(),s.destroy=a}n=n.next}while(n!==i)}}catch(h){zt(e,e.return,h)}}function An(t,e,n){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var c=i.next;a=c;do{if((a.tag&t)===t){var s=a.inst,h=s.destroy;if(h!==void 0){s.destroy=void 0,i=e;var g=n,z=h;try{z()}catch(D){zt(i,g,D)}}}a=a.next}while(a!==c)}}catch(D){zt(e,e.return,D)}}function yd(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{cf(e,n)}catch(a){zt(t,t.return,a)}}}function bd(t,e,n){n.props=Pn(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){zt(t,e,a)}}function Ui(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(i){zt(t,e,i)}}function qe(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){zt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){zt(t,e,i)}else n.current=null}function Sd(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){zt(t,t.return,i)}}function Sr(t,e,n){try{var a=t.stateNode;V0(a,t.type,n,e),a[ie]=e}catch(i){zt(t,t.return,i)}}function wd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Mn(t.type)||t.tag===4}function wr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||wd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Mn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ar(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hc));else if(a!==4&&(a===27&&Mn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Ar(t,e,n),t=t.sibling;t!==null;)Ar(t,e,n),t=t.sibling}function nc(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&Mn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(nc(t,e,n),t=t.sibling;t!==null;)nc(t,e,n),t=t.sibling}function Ad(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Wt(e,a,n),e[It]=t,e[ie]=n}catch(c){zt(t,t.return,c)}}var cn=!1,_t=!1,zr=!1,zd=typeof WeakSet=="function"?WeakSet:Set,Vt=null;function E0(t,e){if(t=t.containerInfo,Jr=bc,t=_s(t),wo(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break t}var s=0,h=-1,g=-1,z=0,D=0,C=t,R=null;e:for(;;){for(var T;C!==n||i!==0&&C.nodeType!==3||(h=s+i),C!==c||a!==0&&C.nodeType!==3||(g=s+a),C.nodeType===3&&(s+=C.nodeValue.length),(T=C.firstChild)!==null;)R=C,C=T;for(;;){if(C===t)break e;if(R===n&&++z===i&&(h=s),R===c&&++D===a&&(g=s),(T=C.nextSibling)!==null)break;C=R,R=C.parentNode}C=T}n=h===-1||g===-1?null:{start:h,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for($r={focusedElem:t,selectionRange:n},bc=!1,Vt=e;Vt!==null;)if(e=Vt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Vt=t;else for(;Vt!==null;){switch(e=Vt,c=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,n=e,i=c.memoizedProps,c=c.memoizedState,a=n.stateNode;try{var at=Pn(n.type,i,n.elementType===n.type);t=a.getSnapshotBeforeUpdate(at,c),a.__reactInternalSnapshotBeforeUpdate=t}catch(P){zt(n,n.return,P)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Ir(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ir(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,Vt=t;break}Vt=e.return}}function Ed(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:zn(t,n),a&4&&_i(5,n);break;case 1:if(zn(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){zt(n,n.return,s)}else{var i=Pn(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){zt(n,n.return,s)}}a&64&&yd(n),a&512&&Ui(n,n.return);break;case 3:if(zn(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{cf(t,e)}catch(s){zt(n,n.return,s)}}break;case 27:e===null&&a&4&&Ad(n);case 26:case 5:zn(t,n),e===null&&a&4&&Sd(n),a&512&&Ui(n,n.return);break;case 12:zn(t,n);break;case 13:zn(t,n),a&4&&Td(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=_0.bind(null,n),I0(t,n))));break;case 22:if(a=n.memoizedState!==null||cn,!a){e=e!==null&&e.memoizedState!==null||_t,i=cn;var c=_t;cn=a,(_t=e)&&!c?En(t,n,(n.subtreeFlags&8772)!==0):zn(t,n),cn=i,_t=c}break;case 30:break;default:zn(t,n)}}function jd(t){var e=t.alternate;e!==null&&(t.alternate=null,jd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&no(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Tt=null,oe=!1;function on(t,e,n){for(n=n.child;n!==null;)Rd(t,e,n),n=n.sibling}function Rd(t,e,n){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(ni,n)}catch{}switch(n.tag){case 26:_t||qe(n,e),on(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:_t||qe(n,e);var a=Tt,i=oe;Mn(n.type)&&(Tt=n.stateNode,oe=!1),on(t,e,n),Xi(n.stateNode),Tt=a,oe=i;break;case 5:_t||qe(n,e);case 6:if(a=Tt,i=oe,Tt=null,on(t,e,n),Tt=a,oe=i,Tt!==null)if(oe)try{(Tt.nodeType===9?Tt.body:Tt.nodeName==="HTML"?Tt.ownerDocument.body:Tt).removeChild(n.stateNode)}catch(c){zt(n,e,c)}else try{Tt.removeChild(n.stateNode)}catch(c){zt(n,e,c)}break;case 18:Tt!==null&&(oe?(t=Tt,ph(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Ii(t)):ph(Tt,n.stateNode));break;case 4:a=Tt,i=oe,Tt=n.stateNode.containerInfo,oe=!0,on(t,e,n),Tt=a,oe=i;break;case 0:case 11:case 14:case 15:_t||An(2,n,e),_t||An(4,n,e),on(t,e,n);break;case 1:_t||(qe(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&bd(n,e,a)),on(t,e,n);break;case 21:on(t,e,n);break;case 22:_t=(a=_t)||n.memoizedState!==null,on(t,e,n),_t=a;break;default:on(t,e,n)}}function Td(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ii(t)}catch(n){zt(e,e.return,n)}}function j0(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new zd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new zd),e;default:throw Error(r(435,t.tag))}}function Er(t,e){var n=j0(t);e.forEach(function(a){var i=U0.bind(null,t,a);n.has(a)||(n.add(a),a.then(i,i))})}function me(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],c=t,s=e,h=s;t:for(;h!==null;){switch(h.tag){case 27:if(Mn(h.type)){Tt=h.stateNode,oe=!1;break t}break;case 5:Tt=h.stateNode,oe=!1;break t;case 3:case 4:Tt=h.stateNode.containerInfo,oe=!0;break t}h=h.return}if(Tt===null)throw Error(r(160));Rd(c,s,i),Tt=null,oe=!1,c=i.alternate,c!==null&&(c.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Nd(e,t),e=e.sibling}var Oe=null;function Nd(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:me(e,t),pe(t),a&4&&(An(3,t,t.return),_i(3,t),An(5,t,t.return));break;case 1:me(e,t),pe(t),a&512&&(_t||n===null||qe(n,n.return)),a&64&&cn&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Oe;if(me(e,t),pe(t),a&512&&(_t||n===null||qe(n,n.return)),a&4){var c=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":c=i.getElementsByTagName("title")[0],(!c||c[li]||c[It]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=i.createElement(a),i.head.insertBefore(c,i.querySelector("head > title"))),Wt(c,a,n),c[It]=t,Qt(c),a=c;break t;case"link":var s=Ah("link","href",i).get(a+(n.href||""));if(s){for(var h=0;h<s.length;h++)if(c=s[h],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(h,1);break e}}c=i.createElement(a),Wt(c,a,n),i.head.appendChild(c);break;case"meta":if(s=Ah("meta","content",i).get(a+(n.content||""))){for(h=0;h<s.length;h++)if(c=s[h],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(h,1);break e}}c=i.createElement(a),Wt(c,a,n),i.head.appendChild(c);break;default:throw Error(r(468,a))}c[It]=t,Qt(c),a=c}t.stateNode=a}else zh(i,t.type,t.stateNode);else t.stateNode=wh(i,a,t.memoizedProps);else c!==a?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,a===null?zh(i,t.type,t.stateNode):wh(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Sr(t,t.memoizedProps,n.memoizedProps)}break;case 27:me(e,t),pe(t),a&512&&(_t||n===null||qe(n,n.return)),n!==null&&a&4&&Sr(t,t.memoizedProps,n.memoizedProps);break;case 5:if(me(e,t),pe(t),a&512&&(_t||n===null||qe(n,n.return)),t.flags&32){i=t.stateNode;try{ma(i,"")}catch(T){zt(t,t.return,T)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,Sr(t,i,n!==null?n.memoizedProps:i)),a&1024&&(zr=!0);break;case 6:if(me(e,t),pe(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(T){zt(t,t.return,T)}}break;case 3:if(xc=null,i=Oe,Oe=pc(e.containerInfo),me(e,t),Oe=i,pe(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ii(e.containerInfo)}catch(T){zt(t,t.return,T)}zr&&(zr=!1,Dd(t));break;case 4:a=Oe,Oe=pc(t.stateNode.containerInfo),me(e,t),pe(t),Oe=a;break;case 12:me(e,t),pe(t);break;case 13:me(e,t),pe(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Mr=Ue()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Er(t,a)));break;case 22:i=t.memoizedState!==null;var g=n!==null&&n.memoizedState!==null,z=cn,D=_t;if(cn=z||i,_t=D||g,me(e,t),_t=D,cn=z,pe(t),a&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(n===null||g||cn||_t||ta(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){g=n=e;try{if(c=g.stateNode,i)s=c.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{h=g.stateNode;var C=g.memoizedProps.style,R=C!=null&&C.hasOwnProperty("display")?C.display:null;h.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(T){zt(g,g.return,T)}}}else if(e.tag===6){if(n===null){g=e;try{g.stateNode.nodeValue=i?"":g.memoizedProps}catch(T){zt(g,g.return,T)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Er(t,n))));break;case 19:me(e,t),pe(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Er(t,a)));break;case 30:break;case 21:break;default:me(e,t),pe(t)}}function pe(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(wd(a)){n=a;break}a=a.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var i=n.stateNode,c=wr(t);nc(t,c,i);break;case 5:var s=n.stateNode;n.flags&32&&(ma(s,""),n.flags&=-33);var h=wr(t);nc(t,h,s);break;case 3:case 4:var g=n.stateNode.containerInfo,z=wr(t);Ar(t,z,g);break;default:throw Error(r(161))}}catch(D){zt(t,t.return,D)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Dd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function zn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Ed(t,e.alternate,e),e=e.sibling}function ta(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:An(4,e,e.return),ta(e);break;case 1:qe(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&bd(e,e.return,n),ta(e);break;case 27:Xi(e.stateNode);case 26:case 5:qe(e,e.return),ta(e);break;case 22:e.memoizedState===null&&ta(e);break;case 30:ta(e);break;default:ta(e)}t=t.sibling}}function En(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,c=e,s=c.flags;switch(c.tag){case 0:case 11:case 15:En(i,c,n),_i(4,c);break;case 1:if(En(i,c,n),a=c,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){zt(a,a.return,z)}if(a=c,i=a.updateQueue,i!==null){var h=a.stateNode;try{var g=i.shared.hiddenCallbacks;if(g!==null)for(i.shared.hiddenCallbacks=null,i=0;i<g.length;i++)lf(g[i],h)}catch(z){zt(a,a.return,z)}}n&&s&64&&yd(c),Ui(c,c.return);break;case 27:Ad(c);case 26:case 5:En(i,c,n),n&&a===null&&s&4&&Sd(c),Ui(c,c.return);break;case 12:En(i,c,n);break;case 13:En(i,c,n),n&&s&4&&Td(i,c);break;case 22:c.memoizedState===null&&En(i,c,n),Ui(c,c.return);break;case 30:break;default:En(i,c,n)}e=e.sibling}}function jr(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&bi(n))}function Rr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&bi(t))}function Ye(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Md(t,e,n,a),e=e.sibling}function Md(t,e,n,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Ye(t,e,n,a),i&2048&&_i(9,e);break;case 1:Ye(t,e,n,a);break;case 3:Ye(t,e,n,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&bi(t)));break;case 12:if(i&2048){Ye(t,e,n,a),t=e.stateNode;try{var c=e.memoizedProps,s=c.id,h=c.onPostCommit;typeof h=="function"&&h(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(g){zt(e,e.return,g)}}else Ye(t,e,n,a);break;case 13:Ye(t,e,n,a);break;case 23:break;case 22:c=e.stateNode,s=e.alternate,e.memoizedState!==null?c._visibility&2?Ye(t,e,n,a):Bi(t,e):c._visibility&2?Ye(t,e,n,a):(c._visibility|=2,Ca(t,e,n,a,(e.subtreeFlags&10256)!==0)),i&2048&&jr(s,e);break;case 24:Ye(t,e,n,a),i&2048&&Rr(e.alternate,e);break;default:Ye(t,e,n,a)}}function Ca(t,e,n,a,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=t,s=e,h=n,g=a,z=s.flags;switch(s.tag){case 0:case 11:case 15:Ca(c,s,h,g,i),_i(8,s);break;case 23:break;case 22:var D=s.stateNode;s.memoizedState!==null?D._visibility&2?Ca(c,s,h,g,i):Bi(c,s):(D._visibility|=2,Ca(c,s,h,g,i)),i&&z&2048&&jr(s.alternate,s);break;case 24:Ca(c,s,h,g,i),i&&z&2048&&Rr(s.alternate,s);break;default:Ca(c,s,h,g,i)}e=e.sibling}}function Bi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,i=a.flags;switch(a.tag){case 22:Bi(n,a),i&2048&&jr(a.alternate,a);break;case 24:Bi(n,a),i&2048&&Rr(a.alternate,a);break;default:Bi(n,a)}e=e.sibling}}var Hi=8192;function _a(t){if(t.subtreeFlags&Hi)for(t=t.child;t!==null;)Od(t),t=t.sibling}function Od(t){switch(t.tag){case 26:_a(t),t.flags&Hi&&t.memoizedState!==null&&fg(Oe,t.memoizedState,t.memoizedProps);break;case 5:_a(t);break;case 3:case 4:var e=Oe;Oe=pc(t.stateNode.containerInfo),_a(t),Oe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Hi,Hi=16777216,_a(t),Hi=e):_a(t));break;default:_a(t)}}function Cd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function qi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Vt=a,Ud(a,t)}Cd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_d(t),t=t.sibling}function _d(t){switch(t.tag){case 0:case 11:case 15:qi(t),t.flags&2048&&An(9,t,t.return);break;case 3:qi(t);break;case 12:qi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ac(t)):qi(t);break;default:qi(t)}}function ac(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Vt=a,Ud(a,t)}Cd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:An(8,e,e.return),ac(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,ac(e));break;default:ac(e)}t=t.sibling}}function Ud(t,e){for(;Vt!==null;){var n=Vt;switch(n.tag){case 0:case 11:case 15:An(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:bi(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Vt=a;else t:for(n=t;Vt!==null;){a=Vt;var i=a.sibling,c=a.return;if(jd(a),a===n){Vt=null;break t}if(i!==null){i.return=c,Vt=i;break t}Vt=c}}}var R0={getCacheForType:function(t){var e=Pt(qt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},T0=typeof WeakMap=="function"?WeakMap:Map,vt=0,Et=null,st=null,dt=0,yt=0,ge=null,jn=!1,Ua=!1,Tr=!1,rn=0,Ot=0,Rn=0,ea=0,Nr=0,Te=0,Ba=0,Yi=null,re=null,Dr=!1,Mr=0,ic=1/0,lc=null,Tn=null,$t=0,Nn=null,Ha=null,qa=0,Or=0,Cr=null,Bd=null,Li=0,_r=null;function xe(){if((vt&2)!==0&&dt!==0)return dt&-dt;if(N.T!==null){var t=Ea;return t!==0?t:kr()}return Fu()}function Hd(){Te===0&&(Te=(dt&536870912)===0||mt?Ku():536870912);var t=Re.current;return t!==null&&(t.flags|=32),Te}function ve(t,e,n){(t===Et&&(yt===2||yt===9)||t.cancelPendingCommit!==null)&&(Ya(t,0),Dn(t,dt,Te,!1)),ii(t,n),((vt&2)===0||t!==Et)&&(t===Et&&((vt&2)===0&&(ea|=n),Ot===4&&Dn(t,dt,Te,!1)),Le(t))}function qd(t,e,n){if((vt&6)!==0)throw Error(r(327));var a=!n&&(e&124)===0&&(e&t.expiredLanes)===0||ai(t,e),i=a?M0(t,e):Hr(t,e,!0),c=a;do{if(i===0){Ua&&!a&&Dn(t,e,0,!1);break}else{if(n=t.current.alternate,c&&!N0(n)){i=Hr(t,e,!1),c=!1;continue}if(i===2){if(c=e,t.errorRecoveryDisabledLanes&c)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var h=t;i=Yi;var g=h.current.memoizedState.isDehydrated;if(g&&(Ya(h,s).flags|=256),s=Hr(h,s,!1),s!==2){if(Tr&&!g){h.errorRecoveryDisabledLanes|=c,ea|=c,i=4;break t}c=re,re=i,c!==null&&(re===null?re=c:re.push.apply(re,c))}i=s}if(c=!1,i!==2)continue}}if(i===1){Ya(t,0),Dn(t,e,0,!0);break}t:{switch(a=t,c=i,c){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Dn(a,e,Te,!jn);break t;case 2:re=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(i=Mr+300-Ue(),10<i)){if(Dn(a,e,Te,!jn),gl(a,0,!0)!==0)break t;a.timeoutHandle=hh(Yd.bind(null,a,n,re,lc,Dr,e,Te,ea,Ba,jn,c,2,-0,0),i);break t}Yd(a,n,re,lc,Dr,e,Te,ea,Ba,jn,c,0,-0,0)}}break}while(!0);Le(t)}function Yd(t,e,n,a,i,c,s,h,g,z,D,C,R,T){if(t.timeoutHandle=-1,C=e.subtreeFlags,(C&8192||(C&16785408)===16785408)&&(Ki={stylesheets:null,count:0,unsuspend:sg},Od(e),C=dg(),C!==null)){t.cancelPendingCommit=C(Zd.bind(null,t,e,c,n,a,i,s,h,g,D,1,R,T)),Dn(t,c,s,!z);return}Zd(t,e,c,n,a,i,s,h,g)}function N0(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],c=i.getSnapshot;i=i.value;try{if(!de(c(),i))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dn(t,e,n,a){e&=~Nr,e&=~ea,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var c=31-fe(i),s=1<<c;a[c]=-1,i&=~s}n!==0&&$u(t,n,e)}function cc(){return(vt&6)===0?(ki(0),!1):!0}function Ur(){if(st!==null){if(yt===0)var t=st.return;else t=st,Pe=$n=null,Io(t),Ma=null,Mi=0,t=st;for(;t!==null;)vd(t.alternate,t),t=t.return;st=null}}function Ya(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,K0(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Ur(),Et=t,st=n=We(t.current,null),dt=e,yt=0,ge=null,jn=!1,Ua=ai(t,e),Tr=!1,Ba=Te=Nr=ea=Rn=Ot=0,re=Yi=null,Dr=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-fe(a),c=1<<i;e|=t[i],a&=~c}return rn=e,Tl(),n}function Ld(t,e){ct=null,N.H=Kl,e===wi||e===Hl?(e=nf(),yt=3):e===Ps?(e=nf(),yt=4):yt=e===id?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ge=e,st===null&&(Ot=1,Il(t,Ae(e,t.current)))}function kd(){var t=N.H;return N.H=Kl,t===null?Kl:t}function Gd(){var t=N.A;return N.A=R0,t}function Br(){Ot=4,jn||(dt&4194048)!==dt&&Re.current!==null||(Ua=!0),(Rn&134217727)===0&&(ea&134217727)===0||Et===null||Dn(Et,dt,Te,!1)}function Hr(t,e,n){var a=vt;vt|=2;var i=kd(),c=Gd();(Et!==t||dt!==e)&&(lc=null,Ya(t,e)),e=!1;var s=Ot;t:do try{if(yt!==0&&st!==null){var h=st,g=ge;switch(yt){case 8:Ur(),s=6;break t;case 3:case 2:case 9:case 6:Re.current===null&&(e=!0);var z=yt;if(yt=0,ge=null,La(t,h,g,z),n&&Ua){s=0;break t}break;default:z=yt,yt=0,ge=null,La(t,h,g,z)}}D0(),s=Ot;break}catch(D){Ld(t,D)}while(!0);return e&&t.shellSuspendCounter++,Pe=$n=null,vt=a,N.H=i,N.A=c,st===null&&(Et=null,dt=0,Tl()),s}function D0(){for(;st!==null;)Qd(st)}function M0(t,e){var n=vt;vt|=2;var a=kd(),i=Gd();Et!==t||dt!==e?(lc=null,ic=Ue()+500,Ya(t,e)):Ua=ai(t,e);t:do try{if(yt!==0&&st!==null){e=st;var c=ge;e:switch(yt){case 1:yt=0,ge=null,La(t,e,c,1);break;case 2:case 9:if(tf(c)){yt=0,ge=null,Xd(e);break}e=function(){yt!==2&&yt!==9||Et!==t||(yt=7),Le(t)},c.then(e,e);break t;case 3:yt=7;break t;case 4:yt=5;break t;case 7:tf(c)?(yt=0,ge=null,Xd(e)):(yt=0,ge=null,La(t,e,c,7));break;case 5:var s=null;switch(st.tag){case 26:s=st.memoizedState;case 5:case 27:var h=st;if(!s||Eh(s)){yt=0,ge=null;var g=h.sibling;if(g!==null)st=g;else{var z=h.return;z!==null?(st=z,oc(z)):st=null}break e}}yt=0,ge=null,La(t,e,c,5);break;case 6:yt=0,ge=null,La(t,e,c,6);break;case 8:Ur(),Ot=6;break t;default:throw Error(r(462))}}O0();break}catch(D){Ld(t,D)}while(!0);return Pe=$n=null,N.H=a,N.A=i,vt=n,st!==null?0:(Et=null,dt=0,Tl(),Ot)}function O0(){for(;st!==null&&!tp();)Qd(st)}function Qd(t){var e=gd(t.alternate,t,rn);t.memoizedProps=t.pendingProps,e===null?oc(t):st=e}function Xd(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=sd(n,e,e.pendingProps,e.type,void 0,dt);break;case 11:e=sd(n,e,e.pendingProps,e.type.render,e.ref,dt);break;case 5:Io(e);default:vd(n,e),e=st=Xs(e,rn),e=gd(n,e,rn)}t.memoizedProps=t.pendingProps,e===null?oc(t):st=e}function La(t,e,n,a){Pe=$n=null,Io(e),Ma=null,Mi=0;var i=e.return;try{if(S0(t,i,e,n,dt)){Ot=1,Il(t,Ae(n,t.current)),st=null;return}}catch(c){if(i!==null)throw st=i,c;Ot=1,Il(t,Ae(n,t.current)),st=null;return}e.flags&32768?(mt||a===1?t=!0:Ua||(dt&536870912)!==0?t=!1:(jn=t=!0,(a===2||a===9||a===3||a===6)&&(a=Re.current,a!==null&&a.tag===13&&(a.flags|=16384))),Vd(e,t)):oc(e)}function oc(t){var e=t;do{if((e.flags&32768)!==0){Vd(e,jn);return}t=e.return;var n=A0(e.alternate,e,rn);if(n!==null){st=n;return}if(e=e.sibling,e!==null){st=e;return}st=e=t}while(e!==null);Ot===0&&(Ot=5)}function Vd(t,e){do{var n=z0(t.alternate,t);if(n!==null){n.flags&=32767,st=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){st=t;return}st=t=n}while(t!==null);Ot=6,st=null}function Zd(t,e,n,a,i,c,s,h,g){t.cancelPendingCommit=null;do rc();while($t!==0);if((vt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(c=e.lanes|e.childLanes,c|=Ro,sp(t,n,c,s,h,g),t===Et&&(st=Et=null,dt=0),Ha=e,Nn=t,qa=n,Or=c,Cr=i,Bd=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,B0(hl,function(){return Fd(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,i=k.p,k.p=2,s=vt,vt|=4;try{E0(t,e,n)}finally{vt=s,k.p=i,N.T=a}}$t=1,Kd(),Jd(),$d()}}function Kd(){if($t===1){$t=0;var t=Nn,e=Ha,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var a=k.p;k.p=2;var i=vt;vt|=4;try{Nd(e,t);var c=$r,s=_s(t.containerInfo),h=c.focusedElem,g=c.selectionRange;if(s!==h&&h&&h.ownerDocument&&Cs(h.ownerDocument.documentElement,h)){if(g!==null&&wo(h)){var z=g.start,D=g.end;if(D===void 0&&(D=z),"selectionStart"in h)h.selectionStart=z,h.selectionEnd=Math.min(D,h.value.length);else{var C=h.ownerDocument||document,R=C&&C.defaultView||window;if(R.getSelection){var T=R.getSelection(),at=h.textContent.length,P=Math.min(g.start,at),wt=g.end===void 0?P:Math.min(g.end,at);!T.extend&&P>wt&&(s=wt,wt=P,P=s);var w=Os(h,P),b=Os(h,wt);if(w&&b&&(T.rangeCount!==1||T.anchorNode!==w.node||T.anchorOffset!==w.offset||T.focusNode!==b.node||T.focusOffset!==b.offset)){var A=C.createRange();A.setStart(w.node,w.offset),T.removeAllRanges(),P>wt?(T.addRange(A),T.extend(b.node,b.offset)):(A.setEnd(b.node,b.offset),T.addRange(A))}}}}for(C=[],T=h;T=T.parentNode;)T.nodeType===1&&C.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<C.length;h++){var M=C[h];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}bc=!!Jr,$r=Jr=null}finally{vt=i,k.p=a,N.T=n}}t.current=e,$t=2}}function Jd(){if($t===2){$t=0;var t=Nn,e=Ha,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var a=k.p;k.p=2;var i=vt;vt|=4;try{Ed(t,e.alternate,e)}finally{vt=i,k.p=a,N.T=n}}$t=3}}function $d(){if($t===4||$t===3){$t=0,ep();var t=Nn,e=Ha,n=qa,a=Bd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?$t=5:($t=0,Ha=Nn=null,Wd(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Tn=null),to(n),e=e.stateNode,se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=N.T,i=k.p,k.p=2,N.T=null;try{for(var c=t.onRecoverableError,s=0;s<a.length;s++){var h=a[s];c(h.value,{componentStack:h.stack})}}finally{N.T=e,k.p=i}}(qa&3)!==0&&rc(),Le(t),i=t.pendingLanes,(n&4194090)!==0&&(i&42)!==0?t===_r?Li++:(Li=0,_r=t):Li=0,ki(0)}}function Wd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,bi(e)))}function rc(t){return Kd(),Jd(),$d(),Fd()}function Fd(){if($t!==5)return!1;var t=Nn,e=Or;Or=0;var n=to(qa),a=N.T,i=k.p;try{k.p=32>n?32:n,N.T=null,n=Cr,Cr=null;var c=Nn,s=qa;if($t=0,Ha=Nn=null,qa=0,(vt&6)!==0)throw Error(r(331));var h=vt;if(vt|=4,_d(c.current),Md(c,c.current,s,n),vt=h,ki(0,!1),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(ni,c)}catch{}return!0}finally{k.p=i,N.T=a,Wd(t,e)}}function Id(t,e,n){e=Ae(n,e),e=dr(t.stateNode,e,2),t=yn(t,e,2),t!==null&&(ii(t,2),Le(t))}function zt(t,e,n){if(t.tag===3)Id(t,t,n);else for(;e!==null;){if(e.tag===3){Id(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Tn===null||!Tn.has(a))){t=Ae(n,t),n=nd(2),a=yn(e,n,2),a!==null&&(ad(n,a,e,t),ii(a,2),Le(a));break}}e=e.return}}function qr(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new T0;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(n)||(Tr=!0,i.add(n),t=C0.bind(null,t,e,n),e.then(t,t))}function C0(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Et===t&&(dt&n)===n&&(Ot===4||Ot===3&&(dt&62914560)===dt&&300>Ue()-Mr?(vt&2)===0&&Ya(t,0):Nr|=n,Ba===dt&&(Ba=0)),Le(t)}function Pd(t,e){e===0&&(e=Ju()),t=Sa(t,e),t!==null&&(ii(t,e),Le(t))}function _0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Pd(t,n)}function U0(t,e){var n=0;switch(t.tag){case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),Pd(t,n)}function B0(t,e){return Wc(t,e)}var uc=null,ka=null,Yr=!1,sc=!1,Lr=!1,na=0;function Le(t){t!==ka&&t.next===null&&(ka===null?uc=ka=t:ka=ka.next=t),sc=!0,Yr||(Yr=!0,q0())}function ki(t,e){if(!Lr&&sc){Lr=!0;do for(var n=!1,a=uc;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var c=0;else{var s=a.suspendedLanes,h=a.pingedLanes;c=(1<<31-fe(42|t)+1)-1,c&=i&~(s&~h),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,ah(a,c))}else c=dt,c=gl(a,a===Et?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||ai(a,c)||(n=!0,ah(a,c));a=a.next}while(n);Lr=!1}}function H0(){th()}function th(){sc=Yr=!1;var t=0;na!==0&&(Z0()&&(t=na),na=0);for(var e=Ue(),n=null,a=uc;a!==null;){var i=a.next,c=eh(a,e);c===0?(a.next=null,n===null?uc=i:n.next=i,i===null&&(ka=n)):(n=a,(t!==0||(c&3)!==0)&&(sc=!0)),a=i}ki(t)}function eh(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var s=31-fe(c),h=1<<s,g=i[s];g===-1?((h&n)===0||(h&a)!==0)&&(i[s]=up(h,e)):g<=e&&(t.expiredLanes|=h),c&=~h}if(e=Et,n=dt,n=gl(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(yt===2||yt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Fc(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||ai(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&Fc(a),to(n)){case 2:case 8:n=Vu;break;case 32:n=hl;break;case 268435456:n=Zu;break;default:n=hl}return a=nh.bind(null,t),n=Wc(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&Fc(a),t.callbackPriority=2,t.callbackNode=null,2}function nh(t,e){if($t!==0&&$t!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(rc()&&t.callbackNode!==n)return null;var a=dt;return a=gl(t,t===Et?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(qd(t,a,e),eh(t,Ue()),t.callbackNode!=null&&t.callbackNode===n?nh.bind(null,t):null)}function ah(t,e){if(rc())return null;qd(t,e,!0)}function q0(){J0(function(){(vt&6)!==0?Wc(Xu,H0):th()})}function kr(){return na===0&&(na=Ku()),na}function ih(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Sl(""+t)}function lh(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Y0(t,e,n,a,i){if(e==="submit"&&n&&n.stateNode===i){var c=ih((i[ie]||null).action),s=a.submitter;s&&(e=(e=s[ie]||null)?ih(e.formAction):s.getAttribute("formAction"),e!==null&&(c=e,s=null));var h=new El("action","action",null,a,i);t.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(na!==0){var g=s?lh(i,s):new FormData(i);or(n,{pending:!0,data:g,method:i.method,action:c},null,g)}}else typeof c=="function"&&(h.preventDefault(),g=s?lh(i,s):new FormData(i),or(n,{pending:!0,data:g,method:i.method,action:c},c,g))},currentTarget:i}]})}}for(var Gr=0;Gr<jo.length;Gr++){var Qr=jo[Gr],L0=Qr.toLowerCase(),k0=Qr[0].toUpperCase()+Qr.slice(1);Me(L0,"on"+k0)}Me(Hs,"onAnimationEnd"),Me(qs,"onAnimationIteration"),Me(Ys,"onAnimationStart"),Me("dblclick","onDoubleClick"),Me("focusin","onFocus"),Me("focusout","onBlur"),Me(i0,"onTransitionRun"),Me(l0,"onTransitionStart"),Me(c0,"onTransitionCancel"),Me(Ls,"onTransitionEnd"),fa("onMouseEnter",["mouseout","mouseover"]),fa("onMouseLeave",["mouseout","mouseover"]),fa("onPointerEnter",["pointerout","pointerover"]),fa("onPointerLeave",["pointerout","pointerover"]),Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gi));function ch(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],i=a.event;a=a.listeners;t:{var c=void 0;if(e)for(var s=a.length-1;0<=s;s--){var h=a[s],g=h.instance,z=h.currentTarget;if(h=h.listener,g!==c&&i.isPropagationStopped())break t;c=h,i.currentTarget=z;try{c(i)}catch(D){Fl(D)}i.currentTarget=null,c=g}else for(s=0;s<a.length;s++){if(h=a[s],g=h.instance,z=h.currentTarget,h=h.listener,g!==c&&i.isPropagationStopped())break t;c=h,i.currentTarget=z;try{c(i)}catch(D){Fl(D)}i.currentTarget=null,c=g}}}}function ft(t,e){var n=e[eo];n===void 0&&(n=e[eo]=new Set);var a=t+"__bubble";n.has(a)||(oh(e,t,2,!1),n.add(a))}function Xr(t,e,n){var a=0;e&&(a|=4),oh(n,t,a,e)}var fc="_reactListening"+Math.random().toString(36).slice(2);function Vr(t){if(!t[fc]){t[fc]=!0,Pu.forEach(function(n){n!=="selectionchange"&&(G0.has(n)||Xr(n,!1,t),Xr(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fc]||(e[fc]=!0,Xr("selectionchange",!1,e))}}function oh(t,e,n,a){switch(Mh(e)){case 2:var i=pg;break;case 8:i=gg;break;default:i=lu}n=i.bind(null,e,n,t),i=void 0,!ho||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Zr(t,e,n,a,i){var c=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var h=a.stateNode.containerInfo;if(h===i)break;if(s===4)for(s=a.return;s!==null;){var g=s.tag;if((g===3||g===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;h!==null;){if(s=ra(h),s===null)return;if(g=s.tag,g===5||g===6||g===26||g===27){a=c=s;continue t}h=h.parentNode}}a=a.return}hs(function(){var z=c,D=so(n),C=[];t:{var R=ks.get(t);if(R!==void 0){var T=El,at=t;switch(t){case"keypress":if(Al(n)===0)break t;case"keydown":case"keyup":T=Bp;break;case"focusin":at="focus",T=xo;break;case"focusout":at="blur",T=xo;break;case"beforeblur":case"afterblur":T=xo;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Yp;break;case Hs:case qs:case Ys:T=Rp;break;case Ls:T=kp;break;case"scroll":case"scrollend":T=wp;break;case"wheel":T=Qp;break;case"copy":case"cut":case"paste":T=Np;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=vs;break;case"toggle":case"beforetoggle":T=Vp}var P=(e&4)!==0,wt=!P&&(t==="scroll"||t==="scrollend"),w=P?R!==null?R+"Capture":null:R;P=[];for(var b=z,A;b!==null;){var M=b;if(A=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||A===null||w===null||(M=oi(b,w),M!=null&&P.push(Qi(b,M,A))),wt)break;b=b.return}0<P.length&&(R=new T(R,at,null,n,D),C.push({event:R,listeners:P}))}}if((e&7)===0){t:{if(R=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",R&&n!==uo&&(at=n.relatedTarget||n.fromElement)&&(ra(at)||at[oa]))break t;if((T||R)&&(R=D.window===D?D:(R=D.ownerDocument)?R.defaultView||R.parentWindow:window,T?(at=n.relatedTarget||n.toElement,T=z,at=at?ra(at):null,at!==null&&(wt=m(at),P=at.tag,at!==wt||P!==5&&P!==27&&P!==6)&&(at=null)):(T=null,at=z),T!==at)){if(P=gs,M="onMouseLeave",w="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(P=vs,M="onPointerLeave",w="onPointerEnter",b="pointer"),wt=T==null?R:ci(T),A=at==null?R:ci(at),R=new P(M,b+"leave",T,n,D),R.target=wt,R.relatedTarget=A,M=null,ra(D)===z&&(P=new P(w,b+"enter",at,n,D),P.target=A,P.relatedTarget=wt,M=P),wt=M,T&&at)e:{for(P=T,w=at,b=0,A=P;A;A=Ga(A))b++;for(A=0,M=w;M;M=Ga(M))A++;for(;0<b-A;)P=Ga(P),b--;for(;0<A-b;)w=Ga(w),A--;for(;b--;){if(P===w||w!==null&&P===w.alternate)break e;P=Ga(P),w=Ga(w)}P=null}else P=null;T!==null&&rh(C,R,T,P,!1),at!==null&&wt!==null&&rh(C,wt,at,P,!0)}}t:{if(R=z?ci(z):window,T=R.nodeName&&R.nodeName.toLowerCase(),T==="select"||T==="input"&&R.type==="file")var Z=js;else if(zs(R))if(Rs)Z=e0;else{Z=Pp;var ot=Ip}else T=R.nodeName,!T||T.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?z&&ro(z.elementType)&&(Z=js):Z=t0;if(Z&&(Z=Z(t,z))){Es(C,Z,n,D);break t}ot&&ot(t,R,z),t==="focusout"&&z&&R.type==="number"&&z.memoizedProps.value!=null&&oo(R,"number",R.value)}switch(ot=z?ci(z):window,t){case"focusin":(zs(ot)||ot.contentEditable==="true")&&(va=ot,Ao=z,pi=null);break;case"focusout":pi=Ao=va=null;break;case"mousedown":zo=!0;break;case"contextmenu":case"mouseup":case"dragend":zo=!1,Us(C,n,D);break;case"selectionchange":if(a0)break;case"keydown":case"keyup":Us(C,n,D)}var $;if(yo)t:{switch(t){case"compositionstart":var et="onCompositionStart";break t;case"compositionend":et="onCompositionEnd";break t;case"compositionupdate":et="onCompositionUpdate";break t}et=void 0}else xa?ws(t,n)&&(et="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(et="onCompositionStart");et&&(ys&&n.locale!=="ko"&&(xa||et!=="onCompositionStart"?et==="onCompositionEnd"&&xa&&($=ms()):(pn=D,mo="value"in pn?pn.value:pn.textContent,xa=!0)),ot=dc(z,et),0<ot.length&&(et=new xs(et,t,null,n,D),C.push({event:et,listeners:ot}),$?et.data=$:($=As(n),$!==null&&(et.data=$)))),($=Kp?Jp(t,n):$p(t,n))&&(et=dc(z,"onBeforeInput"),0<et.length&&(ot=new xs("onBeforeInput","beforeinput",null,n,D),C.push({event:ot,listeners:et}),ot.data=$)),Y0(C,t,z,n,D)}ch(C,e)})}function Qi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dc(t,e){for(var n=e+"Capture",a=[];t!==null;){var i=t,c=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||c===null||(i=oi(t,n),i!=null&&a.unshift(Qi(t,i,c)),i=oi(t,e),i!=null&&a.push(Qi(t,i,c))),t.tag===3)return a;t=t.return}return[]}function Ga(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function rh(t,e,n,a,i){for(var c=e._reactName,s=[];n!==null&&n!==a;){var h=n,g=h.alternate,z=h.stateNode;if(h=h.tag,g!==null&&g===a)break;h!==5&&h!==26&&h!==27||z===null||(g=z,i?(z=oi(n,c),z!=null&&s.unshift(Qi(n,z,g))):i||(z=oi(n,c),z!=null&&s.push(Qi(n,z,g)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Q0=/\r\n?/g,X0=/\u0000|\uFFFD/g;function uh(t){return(typeof t=="string"?t:""+t).replace(Q0,`
`).replace(X0,"")}function sh(t,e){return e=uh(e),uh(t)===e}function hc(){}function St(t,e,n,a,i,c){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ma(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ma(t,""+a);break;case"className":vl(t,"class",a);break;case"tabIndex":vl(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":vl(t,n,a);break;case"style":fs(t,a,c);break;case"data":if(e!=="object"){vl(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=Sl(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(e!=="input"&&St(t,e,"name",i.name,i,null),St(t,e,"formEncType",i.formEncType,i,null),St(t,e,"formMethod",i.formMethod,i,null),St(t,e,"formTarget",i.formTarget,i,null)):(St(t,e,"encType",i.encType,i,null),St(t,e,"method",i.method,i,null),St(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=Sl(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=hc);break;case"onScroll":a!=null&&ft("scroll",t);break;case"onScrollEnd":a!=null&&ft("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=Sl(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":ft("beforetoggle",t),ft("toggle",t),xl(t,"popover",a);break;case"xlinkActuate":Je(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Je(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Je(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Je(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Je(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Je(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Je(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":xl(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=bp.get(n)||n,xl(t,n,a))}}function Kr(t,e,n,a,i,c){switch(n){case"style":fs(t,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"children":typeof a=="string"?ma(t,a):(typeof a=="number"||typeof a=="bigint")&&ma(t,""+a);break;case"onScroll":a!=null&&ft("scroll",t);break;case"onScrollEnd":a!=null&&ft("scrollend",t);break;case"onClick":a!=null&&(t.onclick=hc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ts.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),e=n.slice(2,i?n.length-7:void 0),c=t[ie]||null,c=c!=null?c[n]:null,typeof c=="function"&&t.removeEventListener(e,c,i),typeof a=="function")){typeof c!="function"&&c!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,i);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):xl(t,n,a)}}}function Wt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ft("error",t),ft("load",t);var a=!1,i=!1,c;for(c in n)if(n.hasOwnProperty(c)){var s=n[c];if(s!=null)switch(c){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:St(t,e,c,s,n,null)}}i&&St(t,e,"srcSet",n.srcSet,n,null),a&&St(t,e,"src",n.src,n,null);return;case"input":ft("invalid",t);var h=c=s=i=null,g=null,z=null;for(a in n)if(n.hasOwnProperty(a)){var D=n[a];if(D!=null)switch(a){case"name":i=D;break;case"type":s=D;break;case"checked":g=D;break;case"defaultChecked":z=D;break;case"value":c=D;break;case"defaultValue":h=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,e));break;default:St(t,e,a,D,n,null)}}os(t,c,h,g,z,s,i,!1),yl(t);return;case"select":ft("invalid",t),a=s=c=null;for(i in n)if(n.hasOwnProperty(i)&&(h=n[i],h!=null))switch(i){case"value":c=h;break;case"defaultValue":s=h;break;case"multiple":a=h;default:St(t,e,i,h,n,null)}e=c,n=s,t.multiple=!!a,e!=null?ha(t,!!a,e,!1):n!=null&&ha(t,!!a,n,!0);return;case"textarea":ft("invalid",t),c=i=a=null;for(s in n)if(n.hasOwnProperty(s)&&(h=n[s],h!=null))switch(s){case"value":a=h;break;case"defaultValue":i=h;break;case"children":c=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:St(t,e,s,h,n,null)}us(t,a,i,c),yl(t);return;case"option":for(g in n)if(n.hasOwnProperty(g)&&(a=n[g],a!=null))switch(g){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:St(t,e,g,a,n,null)}return;case"dialog":ft("beforetoggle",t),ft("toggle",t),ft("cancel",t),ft("close",t);break;case"iframe":case"object":ft("load",t);break;case"video":case"audio":for(a=0;a<Gi.length;a++)ft(Gi[a],t);break;case"image":ft("error",t),ft("load",t);break;case"details":ft("toggle",t);break;case"embed":case"source":case"link":ft("error",t),ft("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(a=n[z],a!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:St(t,e,z,a,n,null)}return;default:if(ro(e)){for(D in n)n.hasOwnProperty(D)&&(a=n[D],a!==void 0&&Kr(t,e,D,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&St(t,e,h,a,n,null))}function V0(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,c=null,s=null,h=null,g=null,z=null,D=null;for(T in n){var C=n[T];if(n.hasOwnProperty(T)&&C!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":g=C;default:a.hasOwnProperty(T)||St(t,e,T,null,a,C)}}for(var R in a){var T=a[R];if(C=n[R],a.hasOwnProperty(R)&&(T!=null||C!=null))switch(R){case"type":c=T;break;case"name":i=T;break;case"checked":z=T;break;case"defaultChecked":D=T;break;case"value":s=T;break;case"defaultValue":h=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,e));break;default:T!==C&&St(t,e,R,T,a,C)}}co(t,s,h,g,z,D,c,i);return;case"select":T=s=h=R=null;for(c in n)if(g=n[c],n.hasOwnProperty(c)&&g!=null)switch(c){case"value":break;case"multiple":T=g;default:a.hasOwnProperty(c)||St(t,e,c,null,a,g)}for(i in a)if(c=a[i],g=n[i],a.hasOwnProperty(i)&&(c!=null||g!=null))switch(i){case"value":R=c;break;case"defaultValue":h=c;break;case"multiple":s=c;default:c!==g&&St(t,e,i,c,a,g)}e=h,n=s,a=T,R!=null?ha(t,!!n,R,!1):!!a!=!!n&&(e!=null?ha(t,!!n,e,!0):ha(t,!!n,n?[]:"",!1));return;case"textarea":T=R=null;for(h in n)if(i=n[h],n.hasOwnProperty(h)&&i!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:St(t,e,h,null,a,i)}for(s in a)if(i=a[s],c=n[s],a.hasOwnProperty(s)&&(i!=null||c!=null))switch(s){case"value":R=i;break;case"defaultValue":T=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(r(91));break;default:i!==c&&St(t,e,s,i,a,c)}rs(t,R,T);return;case"option":for(var at in n)if(R=n[at],n.hasOwnProperty(at)&&R!=null&&!a.hasOwnProperty(at))switch(at){case"selected":t.selected=!1;break;default:St(t,e,at,null,a,R)}for(g in a)if(R=a[g],T=n[g],a.hasOwnProperty(g)&&R!==T&&(R!=null||T!=null))switch(g){case"selected":t.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:St(t,e,g,R,a,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in n)R=n[P],n.hasOwnProperty(P)&&R!=null&&!a.hasOwnProperty(P)&&St(t,e,P,null,a,R);for(z in a)if(R=a[z],T=n[z],a.hasOwnProperty(z)&&R!==T&&(R!=null||T!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,e));break;default:St(t,e,z,R,a,T)}return;default:if(ro(e)){for(var wt in n)R=n[wt],n.hasOwnProperty(wt)&&R!==void 0&&!a.hasOwnProperty(wt)&&Kr(t,e,wt,void 0,a,R);for(D in a)R=a[D],T=n[D],!a.hasOwnProperty(D)||R===T||R===void 0&&T===void 0||Kr(t,e,D,R,a,T);return}}for(var w in n)R=n[w],n.hasOwnProperty(w)&&R!=null&&!a.hasOwnProperty(w)&&St(t,e,w,null,a,R);for(C in a)R=a[C],T=n[C],!a.hasOwnProperty(C)||R===T||R==null&&T==null||St(t,e,C,R,a,T)}var Jr=null,$r=null;function mc(t){return t.nodeType===9?t:t.ownerDocument}function fh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Wr(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fr=null;function Z0(){var t=window.event;return t&&t.type==="popstate"?t===Fr?!1:(Fr=t,!0):(Fr=null,!1)}var hh=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,J0=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(t){return mh.resolve(null).then(t).catch($0)}:hh;function $0(t){setTimeout(function(){throw t})}function Mn(t){return t==="head"}function ph(t,e){var n=e,a=0,i=0;do{var c=n.nextSibling;if(t.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"){if(0<a&&8>a){n=a;var s=t.ownerDocument;if(n&1&&Xi(s.documentElement),n&2&&Xi(s.body),n&4)for(n=s.head,Xi(n),s=n.firstChild;s;){var h=s.nextSibling,g=s.nodeName;s[li]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=h}}if(i===0){t.removeChild(c),Ii(e);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=c}while(n);Ii(e)}function Ir(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ir(n),no(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function W0(t,e,n,a){for(;t.nodeType===1;){var i=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[li])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ce(t.nextSibling),t===null)break}return null}function F0(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ce(t.nextSibling),t===null))return null;return t}function Pr(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function I0(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ce(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var tu=null;function gh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function xh(t,e,n){switch(e=mc(n),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Xi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);no(t)}var Ne=new Map,vh=new Set;function pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var un=k.d;k.d={f:P0,r:tg,D:eg,C:ng,L:ag,m:ig,X:cg,S:lg,M:og};function P0(){var t=un.f(),e=cc();return t||e}function tg(t){var e=ua(t);e!==null&&e.tag===5&&e.type==="form"?qf(e):un.r(t)}var Qa=typeof document>"u"?null:document;function yh(t,e,n){var a=Qa;if(a&&typeof e=="string"&&e){var i=we(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),vh.has(i)||(vh.add(i),t={rel:t,crossOrigin:n,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),Wt(e,"link",t),Qt(e),a.head.appendChild(e)))}}function eg(t){un.D(t),yh("dns-prefetch",t,null)}function ng(t,e){un.C(t,e),yh("preconnect",t,e)}function ag(t,e,n){un.L(t,e,n);var a=Qa;if(a&&t&&e){var i='link[rel="preload"][as="'+we(e)+'"]';e==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+we(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+we(n.imageSizes)+'"]')):i+='[href="'+we(t)+'"]';var c=i;switch(e){case"style":c=Xa(t);break;case"script":c=Va(t)}Ne.has(c)||(t=E({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ne.set(c,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(Vi(c))||e==="script"&&a.querySelector(Zi(c))||(e=a.createElement("link"),Wt(e,"link",t),Qt(e),a.head.appendChild(e)))}}function ig(t,e){un.m(t,e);var n=Qa;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+we(a)+'"][href="'+we(t)+'"]',c=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Va(t)}if(!Ne.has(c)&&(t=E({rel:"modulepreload",href:t},e),Ne.set(c,t),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Zi(c)))return}a=n.createElement("link"),Wt(a,"link",t),Qt(a),n.head.appendChild(a)}}}function lg(t,e,n){un.S(t,e,n);var a=Qa;if(a&&t){var i=sa(a).hoistableStyles,c=Xa(t);e=e||"default";var s=i.get(c);if(!s){var h={loading:0,preload:null};if(s=a.querySelector(Vi(c)))h.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ne.get(c))&&eu(t,n);var g=s=a.createElement("link");Qt(g),Wt(g,"link",t),g._p=new Promise(function(z,D){g.onload=z,g.onerror=D}),g.addEventListener("load",function(){h.loading|=1}),g.addEventListener("error",function(){h.loading|=2}),h.loading|=4,gc(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:h},i.set(c,s)}}}function cg(t,e){un.X(t,e);var n=Qa;if(n&&t){var a=sa(n).hoistableScripts,i=Va(t),c=a.get(i);c||(c=n.querySelector(Zi(i)),c||(t=E({src:t,async:!0},e),(e=Ne.get(i))&&nu(t,e),c=n.createElement("script"),Qt(c),Wt(c,"link",t),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(i,c))}}function og(t,e){un.M(t,e);var n=Qa;if(n&&t){var a=sa(n).hoistableScripts,i=Va(t),c=a.get(i);c||(c=n.querySelector(Zi(i)),c||(t=E({src:t,async:!0,type:"module"},e),(e=Ne.get(i))&&nu(t,e),c=n.createElement("script"),Qt(c),Wt(c,"link",t),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(i,c))}}function bh(t,e,n,a){var i=(i=tt.current)?pc(i):null;if(!i)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Xa(n.href),n=sa(i).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Xa(n.href);var c=sa(i).hoistableStyles,s=c.get(t);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,s),(c=i.querySelector(Vi(t)))&&!c._p&&(s.instance=c,s.state.loading=5),Ne.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ne.set(t,n),c||rg(i,t,n,s.state))),e&&a===null)throw Error(r(528,""));return s}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Va(n),n=sa(i).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Xa(t){return'href="'+we(t)+'"'}function Vi(t){return'link[rel="stylesheet"]['+t+"]"}function Sh(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function rg(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Wt(e,"link",n),Qt(e),t.head.appendChild(e))}function Va(t){return'[src="'+we(t)+'"]'}function Zi(t){return"script[async]"+t}function wh(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+we(n.href)+'"]');if(a)return e.instance=a,Qt(a),a;var i=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Qt(a),Wt(a,"style",i),gc(a,n.precedence,t),e.instance=a;case"stylesheet":i=Xa(n.href);var c=t.querySelector(Vi(i));if(c)return e.state.loading|=4,e.instance=c,Qt(c),c;a=Sh(n),(i=Ne.get(i))&&eu(a,i),c=(t.ownerDocument||t).createElement("link"),Qt(c);var s=c;return s._p=new Promise(function(h,g){s.onload=h,s.onerror=g}),Wt(c,"link",a),e.state.loading|=4,gc(c,n.precedence,t),e.instance=c;case"script":return c=Va(n.src),(i=t.querySelector(Zi(c)))?(e.instance=i,Qt(i),i):(a=n,(i=Ne.get(c))&&(a=E({},n),nu(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),Qt(i),Wt(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,gc(a,n.precedence,t));return e.instance}function gc(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,c=i,s=0;s<a.length;s++){var h=a[s];if(h.dataset.precedence===e)c=h;else if(c!==i)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function eu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function nu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var xc=null;function Ah(t,e,n){if(xc===null){var a=new Map,i=xc=new Map;i.set(n,a)}else i=xc,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),i=0;i<n.length;i++){var c=n[i];if(!(c[li]||c[It]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var s=c.getAttribute(e)||"";s=t+s;var h=a.get(s);h?h.push(c):a.set(s,[c])}}return a}function zh(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function ug(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Eh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ki=null;function sg(){}function fg(t,e,n){if(Ki===null)throw Error(r(475));var a=Ki;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Xa(n.href),c=t.querySelector(Vi(i));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=vc.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=c,Qt(c);return}c=t.ownerDocument||t,n=Sh(n),(i=Ne.get(i))&&eu(n,i),c=c.createElement("link"),Qt(c);var s=c;s._p=new Promise(function(h,g){s.onload=h,s.onerror=g}),Wt(c,"link",n),e.instance=c}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=vc.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function dg(){if(Ki===null)throw Error(r(475));var t=Ki;return t.stylesheets&&t.count===0&&au(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&au(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function vc(){if(this.count--,this.count===0){if(this.stylesheets)au(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var yc=null;function au(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,yc=new Map,e.forEach(hg,t),yc=null,vc.call(t))}function hg(t,e){if(!(e.state.loading&4)){var n=yc.get(t);if(n)var a=n.get(null);else{n=new Map,yc.set(t,n);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<i.length;c++){var s=i[c];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),a=s)}a&&n.set(null,a)}i=e.instance,s=i.getAttribute("data-precedence"),c=n.get(s)||a,c===a&&n.set(null,i),n.set(s,i),this.count++,a=vc.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),c?c.parentNode.insertBefore(i,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Ji={$$typeof:X,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function mg(t,e,n,a,i,c,s,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ic(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ic(0),this.hiddenUpdates=Ic(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=c,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function jh(t,e,n,a,i,c,s,h,g,z,D,C){return t=new mg(t,e,n,s,h,g,z,C),e=1,c===!0&&(e|=24),c=he(3,null,null,e),t.current=c,c.stateNode=t,e=qo(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:a,isDehydrated:n,cache:e},Go(c),t}function Rh(t){return t?(t=wa,t):wa}function Th(t,e,n,a,i,c){i=Rh(i),a.context===null?a.context=i:a.pendingContext=i,a=vn(e),a.payload={element:n},c=c===void 0?null:c,c!==null&&(a.callback=c),n=yn(t,a,e),n!==null&&(ve(n,t,e),zi(n,t,e))}function Nh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function iu(t,e){Nh(t,e),(t=t.alternate)&&Nh(t,e)}function Dh(t){if(t.tag===13){var e=Sa(t,67108864);e!==null&&ve(e,t,67108864),iu(t,67108864)}}var bc=!0;function pg(t,e,n,a){var i=N.T;N.T=null;var c=k.p;try{k.p=2,lu(t,e,n,a)}finally{k.p=c,N.T=i}}function gg(t,e,n,a){var i=N.T;N.T=null;var c=k.p;try{k.p=8,lu(t,e,n,a)}finally{k.p=c,N.T=i}}function lu(t,e,n,a){if(bc){var i=cu(a);if(i===null)Zr(t,e,a,Sc,n),Oh(t,a);else if(vg(i,t,e,n,a))a.stopPropagation();else if(Oh(t,a),e&4&&-1<xg.indexOf(t)){for(;i!==null;){var c=ua(i);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var s=Yn(c.pendingLanes);if(s!==0){var h=c;for(h.pendingLanes|=2,h.entangledLanes|=2;s;){var g=1<<31-fe(s);h.entanglements[1]|=g,s&=~g}Le(c),(vt&6)===0&&(ic=Ue()+500,ki(0))}}break;case 13:h=Sa(c,2),h!==null&&ve(h,c,2),cc(),iu(c,2)}if(c=cu(a),c===null&&Zr(t,e,a,Sc,n),c===i)break;i=c}i!==null&&a.stopPropagation()}else Zr(t,e,a,null,n)}}function cu(t){return t=so(t),ou(t)}var Sc=null;function ou(t){if(Sc=null,t=ra(t),t!==null){var e=m(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=x(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Sc=t,null}function Mh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(np()){case Xu:return 2;case Vu:return 8;case hl:case ap:return 32;case Zu:return 268435456;default:return 32}default:return 32}}var ru=!1,On=null,Cn=null,_n=null,$i=new Map,Wi=new Map,Un=[],xg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Oh(t,e){switch(t){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":$i.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(e.pointerId)}}function Fi(t,e,n,a,i,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:c,targetContainers:[i]},e!==null&&(e=ua(e),e!==null&&Dh(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vg(t,e,n,a,i){switch(e){case"focusin":return On=Fi(On,t,e,n,a,i),!0;case"dragenter":return Cn=Fi(Cn,t,e,n,a,i),!0;case"mouseover":return _n=Fi(_n,t,e,n,a,i),!0;case"pointerover":var c=i.pointerId;return $i.set(c,Fi($i.get(c)||null,t,e,n,a,i)),!0;case"gotpointercapture":return c=i.pointerId,Wi.set(c,Fi(Wi.get(c)||null,t,e,n,a,i)),!0}return!1}function Ch(t){var e=ra(t.target);if(e!==null){var n=m(e);if(n!==null){if(e=n.tag,e===13){if(e=x(n),e!==null){t.blockedOn=e,fp(t.priority,function(){if(n.tag===13){var a=xe();a=Pc(a);var i=Sa(n,a);i!==null&&ve(i,n,a),iu(n,a)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cu(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);uo=a,n.target.dispatchEvent(a),uo=null}else return e=ua(n),e!==null&&Dh(e),t.blockedOn=n,!1;e.shift()}return!0}function _h(t,e,n){wc(t)&&n.delete(e)}function yg(){ru=!1,On!==null&&wc(On)&&(On=null),Cn!==null&&wc(Cn)&&(Cn=null),_n!==null&&wc(_n)&&(_n=null),$i.forEach(_h),Wi.forEach(_h)}function Ac(t,e){t.blockedOn===e&&(t.blockedOn=null,ru||(ru=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,yg)))}var zc=null;function Uh(t){zc!==t&&(zc=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){zc===t&&(zc=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(ou(a||n)===null)continue;break}var c=ua(n);c!==null&&(t.splice(e,3),e-=3,or(c,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function Ii(t){function e(g){return Ac(g,t)}On!==null&&Ac(On,t),Cn!==null&&Ac(Cn,t),_n!==null&&Ac(_n,t),$i.forEach(e),Wi.forEach(e);for(var n=0;n<Un.length;n++){var a=Un[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Ch(n),n.blockedOn===null&&Un.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],c=n[a+1],s=i[ie]||null;if(typeof c=="function")s||Uh(n);else if(s){var h=null;if(c&&c.hasAttribute("formAction")){if(i=c,s=c[ie]||null)h=s.formAction;else if(ou(i)!==null)continue}else h=s.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),Uh(n)}}}function uu(t){this._internalRoot=t}Ec.prototype.render=uu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var n=e.current,a=xe();Th(n,a,t,e,null,null)},Ec.prototype.unmount=uu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Th(t.current,2,null,t,null,null),cc(),e[oa]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fu();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Un.length&&e!==0&&e<Un[n].priority;n++);Un.splice(n,0,t),n===0&&Ch(t)}};var Bh=o.version;if(Bh!=="19.1.1")throw Error(r(527,Bh,"19.1.1"));k.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=v(e),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var bg={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jc.isDisabled&&jc.supportsFiber)try{ni=jc.inject(bg),se=jc}catch{}}return tl.createRoot=function(t,e){if(!f(t))throw Error(r(299));var n=!1,a="",i=If,c=Pf,s=td,h=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(h=e.unstable_transitionCallbacks)),e=jh(t,1,!1,null,null,n,a,i,c,s,h,null),t[oa]=e.current,Vr(t),new uu(e)},tl.hydrateRoot=function(t,e,n){if(!f(t))throw Error(r(299));var a=!1,i="",c=If,s=Pf,h=td,g=null,z=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(g=n.unstable_transitionCallbacks),n.formState!==void 0&&(z=n.formState)),e=jh(t,1,!0,e,n??null,a,i,c,s,h,g,z),e.context=Rh(null),n=e.current,a=xe(),a=Pc(a),i=vn(a),i.callback=null,yn(n,i,a),n=a,e.current.lanes=n,ii(e,n),Le(e),t[oa]=e.current,Vr(t),new Ec(e)},tl.version="19.1.1",tl}var Zh;function Mg(){if(Zh)return du.exports;Zh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),du.exports=Dg(),du.exports}var Og=Mg();/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Kh="popstate";function Cg(l={}){function o(r,f){let{pathname:m,search:x,hash:S}=r.location;return wu("",{pathname:m,search:x,hash:S},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(r,f){return typeof f=="string"?f:cl(f)}return Ug(o,u,null,l)}function Dt(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function Ge(l,o){if(!l){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function _g(){return Math.random().toString(36).substring(2,10)}function Jh(l,o){return{usr:l.state,key:l.key,idx:o}}function wu(l,o,u=null,r){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof o=="string"?Pa(o):o,state:u,key:o&&o.key||r||_g()}}function cl({pathname:l="/",search:o="",hash:u=""}){return o&&o!=="?"&&(l+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function Pa(l){let o={};if(l){let u=l.indexOf("#");u>=0&&(o.hash=l.substring(u),l=l.substring(0,u));let r=l.indexOf("?");r>=0&&(o.search=l.substring(r),l=l.substring(0,r)),l&&(o.pathname=l)}return o}function Ug(l,o,u,r={}){let{window:f=document.defaultView,v5Compat:m=!1}=r,x=f.history,S="POP",v=null,p=E();p==null&&(p=0,x.replaceState({...x.state,idx:p},""));function E(){return(x.state||{idx:null}).idx}function O(){S="POP";let Q=E(),B=Q==null?null:Q-p;p=Q,v&&v({action:S,location:H.location,delta:B})}function _(Q,B){S="PUSH";let K=wu(H.location,Q,B);p=E()+1;let X=Jh(K,p),F=H.createHref(K);try{x.pushState(X,"",F)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;f.location.assign(F)}m&&v&&v({action:S,location:H.location,delta:1})}function q(Q,B){S="REPLACE";let K=wu(H.location,Q,B);p=E();let X=Jh(K,p),F=H.createHref(K);x.replaceState(X,"",F),m&&v&&v({action:S,location:H.location,delta:0})}function Y(Q){return Bg(Q)}let H={get action(){return S},get location(){return l(f,x)},listen(Q){if(v)throw new Error("A history only accepts one active listener");return f.addEventListener(Kh,O),v=Q,()=>{f.removeEventListener(Kh,O),v=null}},createHref(Q){return o(f,Q)},createURL:Y,encodeLocation(Q){let B=Y(Q);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:_,replace:q,go(Q){return x.go(Q)}};return H}function Bg(l,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Dt(u,"No window.location.(origin|href) available to create URL");let r=typeof l=="string"?l:cl(l);return r=r.replace(/ $/,"%20"),!o&&r.startsWith("//")&&(r=u+r),new URL(r,u)}function mm(l,o,u="/"){return Hg(l,o,u,!1)}function Hg(l,o,u,r){let f=typeof o=="string"?Pa(o):o,m=dn(f.pathname||"/",u);if(m==null)return null;let x=pm(l);qg(x);let S=null;for(let v=0;S==null&&v<x.length;++v){let p=$g(m);S=Kg(x[v],p,r)}return S}function pm(l,o=[],u=[],r="",f=!1){let m=(x,S,v=f,p)=>{let E={relativePath:p===void 0?x.path||"":p,caseSensitive:x.caseSensitive===!0,childrenIndex:S,route:x};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(r)&&v)return;Dt(E.relativePath.startsWith(r),`Absolute route path "${E.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(r.length)}let O=fn([r,E.relativePath]),_=u.concat(E);x.children&&x.children.length>0&&(Dt(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${O}".`),pm(x.children,o,_,O,v)),!(x.path==null&&!x.index)&&o.push({path:O,score:Vg(O,x.index),routesMeta:_})};return l.forEach((x,S)=>{if(x.path===""||!x.path?.includes("?"))m(x,S);else for(let v of gm(x.path))m(x,S,!0,v)}),o}function gm(l){let o=l.split("/");if(o.length===0)return[];let[u,...r]=o,f=u.endsWith("?"),m=u.replace(/\?$/,"");if(r.length===0)return f?[m,""]:[m];let x=gm(r.join("/")),S=[];return S.push(...x.map(v=>v===""?m:[m,v].join("/"))),f&&S.push(...x),S.map(v=>l.startsWith("/")&&v===""?"/":v)}function qg(l){l.sort((o,u)=>o.score!==u.score?u.score-o.score:Zg(o.routesMeta.map(r=>r.childrenIndex),u.routesMeta.map(r=>r.childrenIndex)))}var Yg=/^:[\w-]+$/,Lg=3,kg=2,Gg=1,Qg=10,Xg=-2,$h=l=>l==="*";function Vg(l,o){let u=l.split("/"),r=u.length;return u.some($h)&&(r+=Xg),o&&(r+=kg),u.filter(f=>!$h(f)).reduce((f,m)=>f+(Yg.test(m)?Lg:m===""?Gg:Qg),r)}function Zg(l,o){return l.length===o.length&&l.slice(0,-1).every((r,f)=>r===o[f])?l[l.length-1]-o[o.length-1]:0}function Kg(l,o,u=!1){let{routesMeta:r}=l,f={},m="/",x=[];for(let S=0;S<r.length;++S){let v=r[S],p=S===r.length-1,E=m==="/"?o:o.slice(m.length)||"/",O=Hc({path:v.relativePath,caseSensitive:v.caseSensitive,end:p},E),_=v.route;if(!O&&p&&u&&!r[r.length-1].route.index&&(O=Hc({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},E)),!O)return null;Object.assign(f,O.params),x.push({params:f,pathname:fn([m,O.pathname]),pathnameBase:Pg(fn([m,O.pathnameBase])),route:_}),O.pathnameBase!=="/"&&(m=fn([m,O.pathnameBase]))}return x}function Hc(l,o){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,r]=Jg(l.path,l.caseSensitive,l.end),f=o.match(u);if(!f)return null;let m=f[0],x=m.replace(/(.)\/+$/,"$1"),S=f.slice(1);return{params:r.reduce((p,{paramName:E,isOptional:O},_)=>{if(E==="*"){let Y=S[_]||"";x=m.slice(0,m.length-Y.length).replace(/(.)\/+$/,"$1")}const q=S[_];return O&&!q?p[E]=void 0:p[E]=(q||"").replace(/%2F/g,"/"),p},{}),pathname:m,pathnameBase:x,pattern:l}}function Jg(l,o=!1,u=!0){Ge(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let r=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,S,v)=>(r.push({paramName:S,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(r.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),r]}function $g(l){try{return l.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Ge(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),l}}function dn(l,o){if(o==="/")return l;if(!l.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,r=l.charAt(u);return r&&r!=="/"?null:l.slice(u)||"/"}function Wg(l,o="/"){let{pathname:u,search:r="",hash:f=""}=typeof l=="string"?Pa(l):l;return{pathname:u?u.startsWith("/")?u:Fg(u,o):o,search:t1(r),hash:e1(f)}}function Fg(l,o){let u=o.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function gu(l,o,u,r){return`Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ig(l){return l.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function xm(l){let o=Ig(l);return o.map((u,r)=>r===o.length-1?u.pathname:u.pathnameBase)}function vm(l,o,u,r=!1){let f;typeof l=="string"?f=Pa(l):(f={...l},Dt(!f.pathname||!f.pathname.includes("?"),gu("?","pathname","search",f)),Dt(!f.pathname||!f.pathname.includes("#"),gu("#","pathname","hash",f)),Dt(!f.search||!f.search.includes("#"),gu("#","search","hash",f)));let m=l===""||f.pathname==="",x=m?"/":f.pathname,S;if(x==null)S=u;else{let O=o.length-1;if(!r&&x.startsWith("..")){let _=x.split("/");for(;_[0]==="..";)_.shift(),O-=1;f.pathname=_.join("/")}S=O>=0?o[O]:"/"}let v=Wg(f,S),p=x&&x!=="/"&&x.endsWith("/"),E=(m||x===".")&&u.endsWith("/");return!v.pathname.endsWith("/")&&(p||E)&&(v.pathname+="/"),v}var fn=l=>l.join("/").replace(/\/\/+/g,"/"),Pg=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),t1=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,e1=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function n1(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var ym=["POST","PUT","PATCH","DELETE"];new Set(ym);var a1=["GET",...ym];new Set(a1);var ti=j.createContext(null);ti.displayName="DataRouter";var Gc=j.createContext(null);Gc.displayName="DataRouterState";j.createContext(!1);var bm=j.createContext({isTransitioning:!1});bm.displayName="ViewTransition";var i1=j.createContext(new Map);i1.displayName="Fetchers";var l1=j.createContext(null);l1.displayName="Await";var Qe=j.createContext(null);Qe.displayName="Navigation";var rl=j.createContext(null);rl.displayName="Location";var Xe=j.createContext({outlet:null,matches:[],isDataRoute:!1});Xe.displayName="Route";var Ou=j.createContext(null);Ou.displayName="RouteError";function c1(l,{relative:o}={}){Dt(ul(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:r}=j.useContext(Qe),{hash:f,pathname:m,search:x}=fl(l,{relative:o}),S=m;return u!=="/"&&(S=m==="/"?u:fn([u,m])),r.createHref({pathname:S,search:x,hash:f})}function ul(){return j.useContext(rl)!=null}function ca(){return Dt(ul(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(rl).location}var Sm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wm(l){j.useContext(Qe).static||j.useLayoutEffect(l)}function sl(){let{isDataRoute:l}=j.useContext(Xe);return l?b1():o1()}function o1(){Dt(ul(),"useNavigate() may be used only in the context of a <Router> component.");let l=j.useContext(ti),{basename:o,navigator:u}=j.useContext(Qe),{matches:r}=j.useContext(Xe),{pathname:f}=ca(),m=JSON.stringify(xm(r)),x=j.useRef(!1);return wm(()=>{x.current=!0}),j.useCallback((v,p={})=>{if(Ge(x.current,Sm),!x.current)return;if(typeof v=="number"){u.go(v);return}let E=vm(v,JSON.parse(m),f,p.relative==="path");l==null&&o!=="/"&&(E.pathname=E.pathname==="/"?o:fn([o,E.pathname])),(p.replace?u.replace:u.push)(E,p.state,p)},[o,u,m,f,l])}j.createContext(null);function r1(){let{matches:l}=j.useContext(Xe),o=l[l.length-1];return o?o.params:{}}function fl(l,{relative:o}={}){let{matches:u}=j.useContext(Xe),{pathname:r}=ca(),f=JSON.stringify(xm(u));return j.useMemo(()=>vm(l,JSON.parse(f),r,o==="path"),[l,f,r,o])}function u1(l,o){return Am(l,o)}function Am(l,o,u,r){Dt(ul(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=j.useContext(Qe),{matches:m}=j.useContext(Xe),x=m[m.length-1],S=x?x.params:{},v=x?x.pathname:"/",p=x?x.pathnameBase:"/",E=x&&x.route;{let B=E&&E.path||"";zm(v,!E||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let O=ca(),_;if(o){let B=typeof o=="string"?Pa(o):o;Dt(p==="/"||B.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${B.pathname}" was given in the \`location\` prop.`),_=B}else _=O;let q=_.pathname||"/",Y=q;if(p!=="/"){let B=p.replace(/^\//,"").split("/");Y="/"+q.replace(/^\//,"").split("/").slice(B.length).join("/")}let H=mm(l,{pathname:Y});Ge(E||H!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Ge(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=m1(H&&H.map(B=>Object.assign({},B,{params:Object.assign({},S,B.params),pathname:fn([p,f.encodeLocation?f.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?p:fn([p,f.encodeLocation?f.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),m,u,r);return o&&Q?j.createElement(rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},Q):Q}function s1(){let l=y1(),o=n1(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,r="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:r},m={padding:"2px 4px",backgroundColor:r},x=null;return console.error("Error handled by React Router default ErrorBoundary:",l),x=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:m},"ErrorBoundary")," or"," ",j.createElement("code",{style:m},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},o),u?j.createElement("pre",{style:f},u):null,x)}var f1=j.createElement(s1,null),d1=class extends j.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,o){return o.location!==l.location||o.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:o.error,location:o.location,revalidation:l.revalidation||o.revalidation}}componentDidCatch(l,o){console.error("React Router caught the following error during render",l,o)}render(){return this.state.error!==void 0?j.createElement(Xe.Provider,{value:this.props.routeContext},j.createElement(Ou.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function h1({routeContext:l,match:o,children:u}){let r=j.useContext(ti);return r&&r.static&&r.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=o.route.id),j.createElement(Xe.Provider,{value:l},u)}function m1(l,o=[],u=null,r=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let f=l,m=u?.errors;if(m!=null){let v=f.findIndex(p=>p.route.id&&m?.[p.route.id]!==void 0);Dt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,v+1))}let x=!1,S=-1;if(u)for(let v=0;v<f.length;v++){let p=f[v];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(S=v),p.route.id){let{loaderData:E,errors:O}=u,_=p.route.loader&&!E.hasOwnProperty(p.route.id)&&(!O||O[p.route.id]===void 0);if(p.route.lazy||_){x=!0,S>=0?f=f.slice(0,S+1):f=[f[0]];break}}}return f.reduceRight((v,p,E)=>{let O,_=!1,q=null,Y=null;u&&(O=m&&p.route.id?m[p.route.id]:void 0,q=p.route.errorElement||f1,x&&(S<0&&E===0?(zm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,Y=null):S===E&&(_=!0,Y=p.route.hydrateFallbackElement||null)));let H=o.concat(f.slice(0,E+1)),Q=()=>{let B;return O?B=q:_?B=Y:p.route.Component?B=j.createElement(p.route.Component,null):p.route.element?B=p.route.element:B=v,j.createElement(h1,{match:p,routeContext:{outlet:v,matches:H,isDataRoute:u!=null},children:B})};return u&&(p.route.ErrorBoundary||p.route.errorElement||E===0)?j.createElement(d1,{location:u.location,revalidation:u.revalidation,component:q,error:O,children:Q(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):Q()},null)}function Cu(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function p1(l){let o=j.useContext(ti);return Dt(o,Cu(l)),o}function g1(l){let o=j.useContext(Gc);return Dt(o,Cu(l)),o}function x1(l){let o=j.useContext(Xe);return Dt(o,Cu(l)),o}function _u(l){let o=x1(l),u=o.matches[o.matches.length-1];return Dt(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function v1(){return _u("useRouteId")}function y1(){let l=j.useContext(Ou),o=g1("useRouteError"),u=_u("useRouteError");return l!==void 0?l:o.errors?.[u]}function b1(){let{router:l}=p1("useNavigate"),o=_u("useNavigate"),u=j.useRef(!1);return wm(()=>{u.current=!0}),j.useCallback(async(f,m={})=>{Ge(u.current,Sm),u.current&&(typeof f=="number"?l.navigate(f):await l.navigate(f,{fromRouteId:o,...m}))},[l,o])}var Wh={};function zm(l,o,u){!o&&!Wh[l]&&(Wh[l]=!0,Ge(!1,u))}j.memo(S1);function S1({routes:l,future:o,state:u}){return Am(l,void 0,u,o)}function nl(l){Dt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function w1({basename:l="/",children:o=null,location:u,navigationType:r="POP",navigator:f,static:m=!1}){Dt(!ul(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=l.replace(/^\/*/,"/"),S=j.useMemo(()=>({basename:x,navigator:f,static:m,future:{}}),[x,f,m]);typeof u=="string"&&(u=Pa(u));let{pathname:v="/",search:p="",hash:E="",state:O=null,key:_="default"}=u,q=j.useMemo(()=>{let Y=dn(v,x);return Y==null?null:{location:{pathname:Y,search:p,hash:E,state:O,key:_},navigationType:r}},[x,v,p,E,O,_,r]);return Ge(q!=null,`<Router basename="${x}"> is not able to match the URL "${v}${p}${E}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:j.createElement(Qe.Provider,{value:S},j.createElement(rl.Provider,{children:o,value:q}))}function A1({children:l,location:o}){return u1(Au(l),o)}function Au(l,o=[]){let u=[];return j.Children.forEach(l,(r,f)=>{if(!j.isValidElement(r))return;let m=[...o,f];if(r.type===j.Fragment){u.push.apply(u,Au(r.props.children,m));return}Dt(r.type===nl,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Dt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let x={id:r.props.id||m.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(x.children=Au(r.props.children,m)),u.push(x)}),u}var Dc="get",Mc="application/x-www-form-urlencoded";function Qc(l){return l!=null&&typeof l.tagName=="string"}function z1(l){return Qc(l)&&l.tagName.toLowerCase()==="button"}function E1(l){return Qc(l)&&l.tagName.toLowerCase()==="form"}function j1(l){return Qc(l)&&l.tagName.toLowerCase()==="input"}function R1(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function T1(l,o){return l.button===0&&(!o||o==="_self")&&!R1(l)}var Rc=null;function N1(){if(Rc===null)try{new FormData(document.createElement("form"),0),Rc=!1}catch{Rc=!0}return Rc}var D1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function xu(l){return l!=null&&!D1.has(l)?(Ge(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mc}"`),null):l}function M1(l,o){let u,r,f,m,x;if(E1(l)){let S=l.getAttribute("action");r=S?dn(S,o):null,u=l.getAttribute("method")||Dc,f=xu(l.getAttribute("enctype"))||Mc,m=new FormData(l)}else if(z1(l)||j1(l)&&(l.type==="submit"||l.type==="image")){let S=l.form;if(S==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=l.getAttribute("formaction")||S.getAttribute("action");if(r=v?dn(v,o):null,u=l.getAttribute("formmethod")||S.getAttribute("method")||Dc,f=xu(l.getAttribute("formenctype"))||xu(S.getAttribute("enctype"))||Mc,m=new FormData(S,l),!N1()){let{name:p,type:E,value:O}=l;if(E==="image"){let _=p?`${p}.`:"";m.append(`${_}x`,"0"),m.append(`${_}y`,"0")}else p&&m.append(p,O)}}else{if(Qc(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Dc,r=null,f=Mc,x=l}return m&&f==="text/plain"&&(x=m,m=void 0),{action:r,method:u.toLowerCase(),encType:f,formData:m,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Uu(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function O1(l,o,u){let r=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return r.pathname==="/"?r.pathname=`_root.${u}`:o&&dn(r.pathname,o)==="/"?r.pathname=`${o.replace(/\/$/,"")}/_root.${u}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${u}`,r}async function C1(l,o){if(l.id in o)return o[l.id];try{let u=await import(l.module);return o[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _1(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function U1(l,o,u){let r=await Promise.all(l.map(async f=>{let m=o.routes[f.route.id];if(m){let x=await C1(m,u);return x.links?x.links():[]}return[]}));return Y1(r.flat(1).filter(_1).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Fh(l,o,u,r,f,m){let x=(v,p)=>u[p]?v.route.id!==u[p].route.id:!0,S=(v,p)=>u[p].pathname!==v.pathname||u[p].route.path?.endsWith("*")&&u[p].params["*"]!==v.params["*"];return m==="assets"?o.filter((v,p)=>x(v,p)||S(v,p)):m==="data"?o.filter((v,p)=>{let E=r.routes[v.route.id];if(!E||!E.hasLoader)return!1;if(x(v,p)||S(v,p))return!0;if(v.route.shouldRevalidate){let O=v.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function B1(l,o,{includeHydrateFallback:u}={}){return H1(l.map(r=>{let f=o.routes[r.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function H1(l){return[...new Set(l)]}function q1(l){let o={},u=Object.keys(l).sort();for(let r of u)o[r]=l[r];return o}function Y1(l,o){let u=new Set;return new Set(o),l.reduce((r,f)=>{let m=JSON.stringify(q1(f));return u.has(m)||(u.add(m),r.push({key:m,link:f})),r},[])}function Em(){let l=j.useContext(ti);return Uu(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function L1(){let l=j.useContext(Gc);return Uu(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Bu=j.createContext(void 0);Bu.displayName="FrameworkContext";function jm(){let l=j.useContext(Bu);return Uu(l,"You must render this element inside a <HydratedRouter> element"),l}function k1(l,o){let u=j.useContext(Bu),[r,f]=j.useState(!1),[m,x]=j.useState(!1),{onFocus:S,onBlur:v,onMouseEnter:p,onMouseLeave:E,onTouchStart:O}=o,_=j.useRef(null);j.useEffect(()=>{if(l==="render"&&x(!0),l==="viewport"){let H=B=>{B.forEach(K=>{x(K.isIntersecting)})},Q=new IntersectionObserver(H,{threshold:.5});return _.current&&Q.observe(_.current),()=>{Q.disconnect()}}},[l]),j.useEffect(()=>{if(r){let H=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(H)}}},[r]);let q=()=>{f(!0)},Y=()=>{f(!1),x(!1)};return u?l!=="intent"?[m,_,{}]:[m,_,{onFocus:el(S,q),onBlur:el(v,Y),onMouseEnter:el(p,q),onMouseLeave:el(E,Y),onTouchStart:el(O,q)}]:[!1,_,{}]}function el(l,o){return u=>{l&&l(u),u.defaultPrevented||o(u)}}function G1({page:l,...o}){let{router:u}=Em(),r=j.useMemo(()=>mm(u.routes,l,u.basename),[u.routes,l,u.basename]);return r?j.createElement(X1,{page:l,matches:r,...o}):null}function Q1(l){let{manifest:o,routeModules:u}=jm(),[r,f]=j.useState([]);return j.useEffect(()=>{let m=!1;return U1(l,o,u).then(x=>{m||f(x)}),()=>{m=!0}},[l,o,u]),r}function X1({page:l,matches:o,...u}){let r=ca(),{manifest:f,routeModules:m}=jm(),{basename:x}=Em(),{loaderData:S,matches:v}=L1(),p=j.useMemo(()=>Fh(l,o,v,f,r,"data"),[l,o,v,f,r]),E=j.useMemo(()=>Fh(l,o,v,f,r,"assets"),[l,o,v,f,r]),O=j.useMemo(()=>{if(l===r.pathname+r.search+r.hash)return[];let Y=new Set,H=!1;if(o.forEach(B=>{let K=f.routes[B.route.id];!K||!K.hasLoader||(!p.some(X=>X.route.id===B.route.id)&&B.route.id in S&&m[B.route.id]?.shouldRevalidate||K.hasClientLoader?H=!0:Y.add(B.route.id))}),Y.size===0)return[];let Q=O1(l,x,"data");return H&&Y.size>0&&Q.searchParams.set("_routes",o.filter(B=>Y.has(B.route.id)).map(B=>B.route.id).join(",")),[Q.pathname+Q.search]},[x,S,r,f,p,o,l,m]),_=j.useMemo(()=>B1(E,f),[E,f]),q=Q1(E);return j.createElement(j.Fragment,null,O.map(Y=>j.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...u})),_.map(Y=>j.createElement("link",{key:Y,rel:"modulepreload",href:Y,...u})),q.map(({key:Y,link:H})=>j.createElement("link",{key:Y,nonce:u.nonce,...H})))}function V1(...l){return o=>{l.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var Rm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Rm&&(window.__reactRouterVersion="7.8.1")}catch{}function Z1({basename:l,children:o,window:u}){let r=j.useRef();r.current==null&&(r.current=Cg({window:u,v5Compat:!0}));let f=r.current,[m,x]=j.useState({action:f.action,location:f.location}),S=j.useCallback(v=>{j.startTransition(()=>x(v))},[x]);return j.useLayoutEffect(()=>f.listen(S),[f,S]),j.createElement(w1,{basename:l,children:o,location:m.location,navigationType:m.action,navigator:f})}var Tm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hu=j.forwardRef(function({onClick:o,discover:u="render",prefetch:r="none",relative:f,reloadDocument:m,replace:x,state:S,target:v,to:p,preventScrollReset:E,viewTransition:O,..._},q){let{basename:Y}=j.useContext(Qe),H=typeof p=="string"&&Tm.test(p),Q,B=!1;if(typeof p=="string"&&H&&(Q=p,Rm))try{let At=new URL(window.location.href),ee=p.startsWith("//")?new URL(At.protocol+p):new URL(p),ae=dn(ee.pathname,Y);ee.origin===At.origin&&ae!=null?p=ae+ee.search+ee.hash:B=!0}catch{Ge(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=c1(p,{relative:f}),[X,F,V]=k1(r,_),nt=W1(p,{replace:x,state:S,target:v,preventScrollReset:E,relative:f,viewTransition:O});function J(At){o&&o(At),At.defaultPrevented||nt(At)}let jt=j.createElement("a",{..._,...V,href:Q||K,onClick:B||m?o:J,ref:V1(q,F),target:v,"data-discover":!H&&u==="render"?"true":void 0});return X&&!H?j.createElement(j.Fragment,null,jt,j.createElement(G1,{page:K})):jt});Hu.displayName="Link";var K1=j.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:r="",end:f=!1,style:m,to:x,viewTransition:S,children:v,...p},E){let O=fl(x,{relative:p.relative}),_=ca(),q=j.useContext(Gc),{navigator:Y,basename:H}=j.useContext(Qe),Q=q!=null&&ex(O)&&S===!0,B=Y.encodeLocation?Y.encodeLocation(O).pathname:O.pathname,K=_.pathname,X=q&&q.navigation&&q.navigation.location?q.navigation.location.pathname:null;u||(K=K.toLowerCase(),X=X?X.toLowerCase():null,B=B.toLowerCase()),X&&H&&(X=dn(X,H)||X);const F=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let V=K===B||!f&&K.startsWith(B)&&K.charAt(F)==="/",nt=X!=null&&(X===B||!f&&X.startsWith(B)&&X.charAt(B.length)==="/"),J={isActive:V,isPending:nt,isTransitioning:Q},jt=V?o:void 0,At;typeof r=="function"?At=r(J):At=[r,V?"active":null,nt?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let ee=typeof m=="function"?m(J):m;return j.createElement(Hu,{...p,"aria-current":jt,className:At,ref:E,style:ee,to:x,viewTransition:S},typeof v=="function"?v(J):v)});K1.displayName="NavLink";var J1=j.forwardRef(({discover:l="render",fetcherKey:o,navigate:u,reloadDocument:r,replace:f,state:m,method:x=Dc,action:S,onSubmit:v,relative:p,preventScrollReset:E,viewTransition:O,..._},q)=>{let Y=P1(),H=tx(S,{relative:p}),Q=x.toLowerCase()==="get"?"get":"post",B=typeof S=="string"&&Tm.test(S),K=X=>{if(v&&v(X),X.defaultPrevented)return;X.preventDefault();let F=X.nativeEvent.submitter,V=F?.getAttribute("formmethod")||x;Y(F||X.currentTarget,{fetcherKey:o,method:V,navigate:u,replace:f,state:m,relative:p,preventScrollReset:E,viewTransition:O})};return j.createElement("form",{ref:q,method:Q,action:H,onSubmit:r?v:K,..._,"data-discover":!B&&l==="render"?"true":void 0})});J1.displayName="Form";function $1(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nm(l){let o=j.useContext(ti);return Dt(o,$1(l)),o}function W1(l,{target:o,replace:u,state:r,preventScrollReset:f,relative:m,viewTransition:x}={}){let S=sl(),v=ca(),p=fl(l,{relative:m});return j.useCallback(E=>{if(T1(E,o)){E.preventDefault();let O=u!==void 0?u:cl(v)===cl(p);S(l,{replace:O,state:r,preventScrollReset:f,relative:m,viewTransition:x})}},[v,S,p,u,r,o,l,f,m,x])}var F1=0,I1=()=>`__${String(++F1)}__`;function P1(){let{router:l}=Nm("useSubmit"),{basename:o}=j.useContext(Qe),u=v1();return j.useCallback(async(r,f={})=>{let{action:m,method:x,encType:S,formData:v,body:p}=M1(r,o);if(f.navigate===!1){let E=f.fetcherKey||I1();await l.fetch(E,u,f.action||m,{preventScrollReset:f.preventScrollReset,formData:v,body:p,formMethod:f.method||x,formEncType:f.encType||S,flushSync:f.flushSync})}else await l.navigate(f.action||m,{preventScrollReset:f.preventScrollReset,formData:v,body:p,formMethod:f.method||x,formEncType:f.encType||S,replace:f.replace,state:f.state,fromRouteId:u,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,o,u])}function tx(l,{relative:o}={}){let{basename:u}=j.useContext(Qe),r=j.useContext(Xe);Dt(r,"useFormAction must be used inside a RouteContext");let[f]=r.matches.slice(-1),m={...fl(l||".",{relative:o})},x=ca();if(l==null){m.search=x.search;let S=new URLSearchParams(m.search),v=S.getAll("index");if(v.some(E=>E==="")){S.delete("index"),v.filter(O=>O).forEach(O=>S.append("index",O));let E=S.toString();m.search=E?`?${E}`:""}}return(!l||l===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:fn([u,m.pathname])),cl(m)}function ex(l,{relative:o}={}){let u=j.useContext(bm);Dt(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Nm("useViewTransitionState"),f=fl(l,{relative:o});if(!u.isTransitioning)return!1;let m=dn(u.currentLocation.pathname,r)||u.currentLocation.pathname,x=dn(u.nextLocation.pathname,r)||u.nextLocation.pathname;return Hc(f.pathname,x)!=null||Hc(f.pathname,m)!=null}var ue=function(){return ue=Object.assign||function(o){for(var u,r=1,f=arguments.length;r<f;r++){u=arguments[r];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(o[m]=u[m])}return o},ue.apply(this,arguments)};function qc(l,o,u){if(u||arguments.length===2)for(var r=0,f=o.length,m;r<f;r++)(m||!(r in o))&&(m||(m=Array.prototype.slice.call(o,0,r)),m[r]=o[r]);return l.concat(m||Array.prototype.slice.call(o))}var Rt="-ms-",il="-moz-",gt="-webkit-",Dm="comm",Xc="rule",qu="decl",nx="@import",Mm="@keyframes",ax="@layer",Om=Math.abs,Yu=String.fromCharCode,zu=Object.assign;function ix(l,o){return Kt(l,0)^45?(((o<<2^Kt(l,0))<<2^Kt(l,1))<<2^Kt(l,2))<<2^Kt(l,3):0}function Cm(l){return l.trim()}function sn(l,o){return(l=o.exec(l))?l[0]:l}function lt(l,o,u){return l.replace(o,u)}function Oc(l,o,u){return l.indexOf(o,u)}function Kt(l,o){return l.charCodeAt(o)|0}function Ja(l,o,u){return l.slice(o,u)}function ke(l){return l.length}function _m(l){return l.length}function al(l,o){return o.push(l),l}function lx(l,o){return l.map(o).join("")}function Ih(l,o){return l.filter(function(u){return!sn(u,o)})}var Vc=1,$a=1,Um=0,De=0,Ht=0,ei="";function Zc(l,o,u,r,f,m,x,S){return{value:l,root:o,parent:u,type:r,props:f,children:m,line:Vc,column:$a,length:x,return:"",siblings:S}}function Hn(l,o){return zu(Zc("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},o)}function Za(l){for(;l.root;)l=Hn(l.root,{children:[l]});al(l,l.siblings)}function cx(){return Ht}function ox(){return Ht=De>0?Kt(ei,--De):0,$a--,Ht===10&&($a=1,Vc--),Ht}function _e(){return Ht=De<Um?Kt(ei,De++):0,$a++,Ht===10&&($a=1,Vc++),Ht}function ia(){return Kt(ei,De)}function Cc(){return De}function Kc(l,o){return Ja(ei,l,o)}function Eu(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rx(l){return Vc=$a=1,Um=ke(ei=l),De=0,[]}function ux(l){return ei="",l}function vu(l){return Cm(Kc(De-1,ju(l===91?l+2:l===40?l+1:l)))}function sx(l){for(;(Ht=ia())&&Ht<33;)_e();return Eu(l)>2||Eu(Ht)>3?"":" "}function fx(l,o){for(;--o&&_e()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return Kc(l,Cc()+(o<6&&ia()==32&&_e()==32))}function ju(l){for(;_e();)switch(Ht){case l:return De;case 34:case 39:l!==34&&l!==39&&ju(Ht);break;case 40:l===41&&ju(l);break;case 92:_e();break}return De}function dx(l,o){for(;_e()&&l+Ht!==57;)if(l+Ht===84&&ia()===47)break;return"/*"+Kc(o,De-1)+"*"+Yu(l===47?l:_e())}function hx(l){for(;!Eu(ia());)_e();return Kc(l,De)}function mx(l){return ux(_c("",null,null,null,[""],l=rx(l),0,[0],l))}function _c(l,o,u,r,f,m,x,S,v){for(var p=0,E=0,O=x,_=0,q=0,Y=0,H=1,Q=1,B=1,K=0,X="",F=f,V=m,nt=r,J=X;Q;)switch(Y=K,K=_e()){case 40:if(Y!=108&&Kt(J,O-1)==58){Oc(J+=lt(vu(K),"&","&\f"),"&\f",Om(p?S[p-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:J+=vu(K);break;case 9:case 10:case 13:case 32:J+=sx(Y);break;case 92:J+=fx(Cc()-1,7);continue;case 47:switch(ia()){case 42:case 47:al(px(dx(_e(),Cc()),o,u,v),v);break;default:J+="/"}break;case 123*H:S[p++]=ke(J)*B;case 125*H:case 59:case 0:switch(K){case 0:case 125:Q=0;case 59+E:B==-1&&(J=lt(J,/\f/g,"")),q>0&&ke(J)-O&&al(q>32?tm(J+";",r,u,O-1,v):tm(lt(J," ","")+";",r,u,O-2,v),v);break;case 59:J+=";";default:if(al(nt=Ph(J,o,u,p,E,f,S,X,F=[],V=[],O,m),m),K===123)if(E===0)_c(J,o,nt,nt,F,m,O,S,V);else switch(_===99&&Kt(J,3)===110?100:_){case 100:case 108:case 109:case 115:_c(l,nt,nt,r&&al(Ph(l,nt,nt,0,0,f,S,X,f,F=[],O,V),V),f,V,O,S,r?F:V);break;default:_c(J,nt,nt,nt,[""],V,0,S,V)}}p=E=q=0,H=B=1,X=J="",O=x;break;case 58:O=1+ke(J),q=Y;default:if(H<1){if(K==123)--H;else if(K==125&&H++==0&&ox()==125)continue}switch(J+=Yu(K),K*H){case 38:B=E>0?1:(J+="\f",-1);break;case 44:S[p++]=(ke(J)-1)*B,B=1;break;case 64:ia()===45&&(J+=vu(_e())),_=ia(),E=O=ke(X=J+=hx(Cc())),K++;break;case 45:Y===45&&ke(J)==2&&(H=0)}}return m}function Ph(l,o,u,r,f,m,x,S,v,p,E,O){for(var _=f-1,q=f===0?m:[""],Y=_m(q),H=0,Q=0,B=0;H<r;++H)for(var K=0,X=Ja(l,_+1,_=Om(Q=x[H])),F=l;K<Y;++K)(F=Cm(Q>0?q[K]+" "+X:lt(X,/&\f/g,q[K])))&&(v[B++]=F);return Zc(l,o,u,f===0?Xc:S,v,p,E,O)}function px(l,o,u,r){return Zc(l,o,u,Dm,Yu(cx()),Ja(l,2,-2),0,r)}function tm(l,o,u,r,f){return Zc(l,o,u,qu,Ja(l,0,r),Ja(l,r+1,-1),r,f)}function Bm(l,o,u){switch(ix(l,o)){case 5103:return gt+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return gt+l+l;case 4789:return il+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return gt+l+il+l+Rt+l+l;case 5936:switch(Kt(l,o+11)){case 114:return gt+l+Rt+lt(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return gt+l+Rt+lt(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return gt+l+Rt+lt(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return gt+l+Rt+l+l;case 6165:return gt+l+Rt+"flex-"+l+l;case 5187:return gt+l+lt(l,/(\w+).+(:[^]+)/,gt+"box-$1$2"+Rt+"flex-$1$2")+l;case 5443:return gt+l+Rt+"flex-item-"+lt(l,/flex-|-self/g,"")+(sn(l,/flex-|baseline/)?"":Rt+"grid-row-"+lt(l,/flex-|-self/g,""))+l;case 4675:return gt+l+Rt+"flex-line-pack"+lt(l,/align-content|flex-|-self/g,"")+l;case 5548:return gt+l+Rt+lt(l,"shrink","negative")+l;case 5292:return gt+l+Rt+lt(l,"basis","preferred-size")+l;case 6060:return gt+"box-"+lt(l,"-grow","")+gt+l+Rt+lt(l,"grow","positive")+l;case 4554:return gt+lt(l,/([^-])(transform)/g,"$1"+gt+"$2")+l;case 6187:return lt(lt(lt(l,/(zoom-|grab)/,gt+"$1"),/(image-set)/,gt+"$1"),l,"")+l;case 5495:case 3959:return lt(l,/(image-set\([^]*)/,gt+"$1$`$1");case 4968:return lt(lt(l,/(.+:)(flex-)?(.*)/,gt+"box-pack:$3"+Rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+gt+l+l;case 4200:if(!sn(l,/flex-|baseline/))return Rt+"grid-column-align"+Ja(l,o)+l;break;case 2592:case 3360:return Rt+lt(l,"template-","")+l;case 4384:case 3616:return u&&u.some(function(r,f){return o=f,sn(r.props,/grid-\w+-end/)})?~Oc(l+(u=u[o].value),"span",0)?l:Rt+lt(l,"-start","")+l+Rt+"grid-row-span:"+(~Oc(u,"span",0)?sn(u,/\d+/):+sn(u,/\d+/)-+sn(l,/\d+/))+";":Rt+lt(l,"-start","")+l;case 4896:case 4128:return u&&u.some(function(r){return sn(r.props,/grid-\w+-start/)})?l:Rt+lt(lt(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return lt(l,/(.+)-inline(.+)/,gt+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ke(l)-1-o>6)switch(Kt(l,o+1)){case 109:if(Kt(l,o+4)!==45)break;case 102:return lt(l,/(.+:)(.+)-([^]+)/,"$1"+gt+"$2-$3$1"+il+(Kt(l,o+3)==108?"$3":"$2-$3"))+l;case 115:return~Oc(l,"stretch",0)?Bm(lt(l,"stretch","fill-available"),o,u)+l:l}break;case 5152:case 5920:return lt(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,f,m,x,S,v,p){return Rt+f+":"+m+p+(x?Rt+f+"-span:"+(S?v:+v-+m)+p:"")+l});case 4949:if(Kt(l,o+6)===121)return lt(l,":",":"+gt)+l;break;case 6444:switch(Kt(l,Kt(l,14)===45?18:11)){case 120:return lt(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+gt+(Kt(l,14)===45?"inline-":"")+"box$3$1"+gt+"$2$3$1"+Rt+"$2box$3")+l;case 100:return lt(l,":",":"+Rt)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return lt(l,"scroll-","scroll-snap-")+l}return l}function Yc(l,o){for(var u="",r=0;r<l.length;r++)u+=o(l[r],r,l,o)||"";return u}function gx(l,o,u,r){switch(l.type){case ax:if(l.children.length)break;case nx:case qu:return l.return=l.return||l.value;case Dm:return"";case Mm:return l.return=l.value+"{"+Yc(l.children,r)+"}";case Xc:if(!ke(l.value=l.props.join(",")))return""}return ke(u=Yc(l.children,r))?l.return=l.value+"{"+u+"}":""}function xx(l){var o=_m(l);return function(u,r,f,m){for(var x="",S=0;S<o;S++)x+=l[S](u,r,f,m)||"";return x}}function vx(l){return function(o){o.root||(o=o.return)&&l(o)}}function yx(l,o,u,r){if(l.length>-1&&!l.return)switch(l.type){case qu:l.return=Bm(l.value,l.length,u);return;case Mm:return Yc([Hn(l,{value:lt(l.value,"@","@"+gt)})],r);case Xc:if(l.length)return lx(u=l.props,function(f){switch(sn(f,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Za(Hn(l,{props:[lt(f,/:(read-\w+)/,":"+il+"$1")]})),Za(Hn(l,{props:[f]})),zu(l,{props:Ih(u,r)});break;case"::placeholder":Za(Hn(l,{props:[lt(f,/:(plac\w+)/,":"+gt+"input-$1")]})),Za(Hn(l,{props:[lt(f,/:(plac\w+)/,":"+il+"$1")]})),Za(Hn(l,{props:[lt(f,/:(plac\w+)/,Rt+"input-$1")]})),Za(Hn(l,{props:[f]})),zu(l,{props:Ih(u,r)});break}return""})}}var bx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ye={},Wa=typeof process<"u"&&ye!==void 0&&(ye.REACT_APP_SC_ATTR||ye.SC_ATTR)||"data-styled",Hm="active",qm="data-styled-version",Jc="6.1.19",Lu=`/*!sc*/
`,Lc=typeof window<"u"&&typeof document<"u",Sx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ye!==void 0&&ye.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ye.REACT_APP_SC_DISABLE_SPEEDY!==""?ye.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ye.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ye!==void 0&&ye.SC_DISABLE_SPEEDY!==void 0&&ye.SC_DISABLE_SPEEDY!==""&&ye.SC_DISABLE_SPEEDY!=="false"&&ye.SC_DISABLE_SPEEDY),$c=Object.freeze([]),Fa=Object.freeze({});function wx(l,o,u){return u===void 0&&(u=Fa),l.theme!==u.theme&&l.theme||o||u.theme}var Ym=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ax=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zx=/(^-|-$)/g;function em(l){return l.replace(Ax,"-").replace(zx,"")}var Ex=/(a)(d)/gi,Tc=52,nm=function(l){return String.fromCharCode(l+(l>25?39:97))};function Ru(l){var o,u="";for(o=Math.abs(l);o>Tc;o=o/Tc|0)u=nm(o%Tc)+u;return(nm(o%Tc)+u).replace(Ex,"$1-$2")}var yu,Lm=5381,Ka=function(l,o){for(var u=o.length;u;)l=33*l^o.charCodeAt(--u);return l},km=function(l){return Ka(Lm,l)};function jx(l){return Ru(km(l)>>>0)}function Rx(l){return l.displayName||l.name||"Component"}function bu(l){return typeof l=="string"&&!0}var Gm=typeof Symbol=="function"&&Symbol.for,Qm=Gm?Symbol.for("react.memo"):60115,Tx=Gm?Symbol.for("react.forward_ref"):60112,Nx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Dx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mx=((yu={})[Tx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yu[Qm]=Xm,yu);function am(l){return("type"in(o=l)&&o.type.$$typeof)===Qm?Xm:"$$typeof"in l?Mx[l.$$typeof]:Nx;var o}var Ox=Object.defineProperty,Cx=Object.getOwnPropertyNames,im=Object.getOwnPropertySymbols,_x=Object.getOwnPropertyDescriptor,Ux=Object.getPrototypeOf,lm=Object.prototype;function Vm(l,o,u){if(typeof o!="string"){if(lm){var r=Ux(o);r&&r!==lm&&Vm(l,r,u)}var f=Cx(o);im&&(f=f.concat(im(o)));for(var m=am(l),x=am(o),S=0;S<f.length;++S){var v=f[S];if(!(v in Dx||u&&u[v]||x&&v in x||m&&v in m)){var p=_x(o,v);try{Ox(l,v,p)}catch{}}}}return l}function Ia(l){return typeof l=="function"}function ku(l){return typeof l=="object"&&"styledComponentId"in l}function aa(l,o){return l&&o?"".concat(l," ").concat(o):l||o||""}function cm(l,o){if(l.length===0)return"";for(var u=l[0],r=1;r<l.length;r++)u+=l[r];return u}function ol(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Tu(l,o,u){if(u===void 0&&(u=!1),!u&&!ol(l)&&!Array.isArray(l))return o;if(Array.isArray(o))for(var r=0;r<o.length;r++)l[r]=Tu(l[r],o[r]);else if(ol(o))for(var r in o)l[r]=Tu(l[r],o[r]);return l}function Gu(l,o){Object.defineProperty(l,"toString",{value:o})}function dl(l){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Bx=(function(){function l(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return l.prototype.indexOfGroup=function(o){for(var u=0,r=0;r<o;r++)u+=this.groupSizes[r];return u},l.prototype.insertRules=function(o,u){if(o>=this.groupSizes.length){for(var r=this.groupSizes,f=r.length,m=f;o>=m;)if((m<<=1)<0)throw dl(16,"".concat(o));this.groupSizes=new Uint32Array(m),this.groupSizes.set(r),this.length=m;for(var x=f;x<m;x++)this.groupSizes[x]=0}for(var S=this.indexOfGroup(o+1),v=(x=0,u.length);x<v;x++)this.tag.insertRule(S,u[x])&&(this.groupSizes[o]++,S++)},l.prototype.clearGroup=function(o){if(o<this.length){var u=this.groupSizes[o],r=this.indexOfGroup(o),f=r+u;this.groupSizes[o]=0;for(var m=r;m<f;m++)this.tag.deleteRule(r)}},l.prototype.getGroup=function(o){var u="";if(o>=this.length||this.groupSizes[o]===0)return u;for(var r=this.groupSizes[o],f=this.indexOfGroup(o),m=f+r,x=f;x<m;x++)u+="".concat(this.tag.getRule(x)).concat(Lu);return u},l})(),Uc=new Map,kc=new Map,Bc=1,Nc=function(l){if(Uc.has(l))return Uc.get(l);for(;kc.has(Bc);)Bc++;var o=Bc++;return Uc.set(l,o),kc.set(o,l),o},Hx=function(l,o){Bc=o+1,Uc.set(l,o),kc.set(o,l)},qx="style[".concat(Wa,"][").concat(qm,'="').concat(Jc,'"]'),Yx=new RegExp("^".concat(Wa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Lx=function(l,o,u){for(var r,f=u.split(","),m=0,x=f.length;m<x;m++)(r=f[m])&&l.registerName(o,r)},kx=function(l,o){for(var u,r=((u=o.textContent)!==null&&u!==void 0?u:"").split(Lu),f=[],m=0,x=r.length;m<x;m++){var S=r[m].trim();if(S){var v=S.match(Yx);if(v){var p=0|parseInt(v[1],10),E=v[2];p!==0&&(Hx(E,p),Lx(l,E,v[3]),l.getTag().insertRules(p,f)),f.length=0}else f.push(S)}}},om=function(l){for(var o=document.querySelectorAll(qx),u=0,r=o.length;u<r;u++){var f=o[u];f&&f.getAttribute(Wa)!==Hm&&(kx(l,f),f.parentNode&&f.parentNode.removeChild(f))}};function Gx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Zm=function(l){var o=document.head,u=l||o,r=document.createElement("style"),f=(function(S){var v=Array.from(S.querySelectorAll("style[".concat(Wa,"]")));return v[v.length-1]})(u),m=f!==void 0?f.nextSibling:null;r.setAttribute(Wa,Hm),r.setAttribute(qm,Jc);var x=Gx();return x&&r.setAttribute("nonce",x),u.insertBefore(r,m),r},Qx=(function(){function l(o){this.element=Zm(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var r=document.styleSheets,f=0,m=r.length;f<m;f++){var x=r[f];if(x.ownerNode===u)return x}throw dl(17)})(this.element),this.length=0}return l.prototype.insertRule=function(o,u){try{return this.sheet.insertRule(u,o),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},l.prototype.getRule=function(o){var u=this.sheet.cssRules[o];return u&&u.cssText?u.cssText:""},l})(),Xx=(function(){function l(o){this.element=Zm(o),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(o,u){if(o<=this.length&&o>=0){var r=document.createTextNode(u);return this.element.insertBefore(r,this.nodes[o]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},l.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},l})(),Vx=(function(){function l(o){this.rules=[],this.length=0}return l.prototype.insertRule=function(o,u){return o<=this.length&&(this.rules.splice(o,0,u),this.length++,!0)},l.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},l.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},l})(),rm=Lc,Zx={isServer:!Lc,useCSSOMInjection:!Sx},Km=(function(){function l(o,u,r){o===void 0&&(o=Fa),u===void 0&&(u={});var f=this;this.options=ue(ue({},Zx),o),this.gs=u,this.names=new Map(r),this.server=!!o.isServer,!this.server&&Lc&&rm&&(rm=!1,om(this)),Gu(this,function(){return(function(m){for(var x=m.getTag(),S=x.length,v="",p=function(O){var _=(function(B){return kc.get(B)})(O);if(_===void 0)return"continue";var q=m.names.get(_),Y=x.getGroup(O);if(q===void 0||!q.size||Y.length===0)return"continue";var H="".concat(Wa,".g").concat(O,'[id="').concat(_,'"]'),Q="";q!==void 0&&q.forEach(function(B){B.length>0&&(Q+="".concat(B,","))}),v+="".concat(Y).concat(H,'{content:"').concat(Q,'"}').concat(Lu)},E=0;E<S;E++)p(E);return v})(f)})}return l.registerId=function(o){return Nc(o)},l.prototype.rehydrate=function(){!this.server&&Lc&&om(this)},l.prototype.reconstructWithOptions=function(o,u){return u===void 0&&(u=!0),new l(ue(ue({},this.options),o),this.gs,u&&this.names||void 0)},l.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(u){var r=u.useCSSOMInjection,f=u.target;return u.isServer?new Vx(f):r?new Qx(f):new Xx(f)})(this.options),new Bx(o)));var o},l.prototype.hasNameForId=function(o,u){return this.names.has(o)&&this.names.get(o).has(u)},l.prototype.registerName=function(o,u){if(Nc(o),this.names.has(o))this.names.get(o).add(u);else{var r=new Set;r.add(u),this.names.set(o,r)}},l.prototype.insertRules=function(o,u,r){this.registerName(o,u),this.getTag().insertRules(Nc(o),r)},l.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},l.prototype.clearRules=function(o){this.getTag().clearGroup(Nc(o)),this.clearNames(o)},l.prototype.clearTag=function(){this.tag=void 0},l})(),Kx=/&/g,Jx=/^\s*\/\/.*$/gm;function Jm(l,o){return l.map(function(u){return u.type==="rule"&&(u.value="".concat(o," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(o," ")),u.props=u.props.map(function(r){return"".concat(o," ").concat(r)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=Jm(u.children,o)),u})}function $x(l){var o,u,r,f=Fa,m=f.options,x=m===void 0?Fa:m,S=f.plugins,v=S===void 0?$c:S,p=function(_,q,Y){return Y.startsWith(u)&&Y.endsWith(u)&&Y.replaceAll(u,"").length>0?".".concat(o):_},E=v.slice();E.push(function(_){_.type===Xc&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(Kx,u).replace(r,p))}),x.prefix&&E.push(yx),E.push(gx);var O=function(_,q,Y,H){q===void 0&&(q=""),Y===void 0&&(Y=""),H===void 0&&(H="&"),o=H,u=q,r=new RegExp("\\".concat(u,"\\b"),"g");var Q=_.replace(Jx,""),B=mx(Y||q?"".concat(Y," ").concat(q," { ").concat(Q," }"):Q);x.namespace&&(B=Jm(B,x.namespace));var K=[];return Yc(B,xx(E.concat(vx(function(X){return K.push(X)})))),K};return O.hash=v.length?v.reduce(function(_,q){return q.name||dl(15),Ka(_,q.name)},Lm).toString():"",O}var Wx=new Km,Nu=$x(),$m=ll.createContext({shouldForwardProp:void 0,styleSheet:Wx,stylis:Nu});$m.Consumer;ll.createContext(void 0);function um(){return j.useContext($m)}var Fx=(function(){function l(o,u){var r=this;this.inject=function(f,m){m===void 0&&(m=Nu);var x=r.name+m.hash;f.hasNameForId(r.id,x)||f.insertRules(r.id,x,m(r.rules,x,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=u,Gu(this,function(){throw dl(12,String(r.name))})}return l.prototype.getName=function(o){return o===void 0&&(o=Nu),this.name+o.hash},l})(),Ix=function(l){return l>="A"&&l<="Z"};function sm(l){for(var o="",u=0;u<l.length;u++){var r=l[u];if(u===1&&r==="-"&&l[0]==="-")return l;Ix(r)?o+="-"+r.toLowerCase():o+=r}return o.startsWith("ms-")?"-"+o:o}var Wm=function(l){return l==null||l===!1||l===""},Fm=function(l){var o,u,r=[];for(var f in l){var m=l[f];l.hasOwnProperty(f)&&!Wm(m)&&(Array.isArray(m)&&m.isCss||Ia(m)?r.push("".concat(sm(f),":"),m,";"):ol(m)?r.push.apply(r,qc(qc(["".concat(f," {")],Fm(m),!1),["}"],!1)):r.push("".concat(sm(f),": ").concat((o=f,(u=m)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||o in bx||o.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return r};function la(l,o,u,r){if(Wm(l))return[];if(ku(l))return[".".concat(l.styledComponentId)];if(Ia(l)){if(!Ia(m=l)||m.prototype&&m.prototype.isReactComponent||!o)return[l];var f=l(o);return la(f,o,u,r)}var m;return l instanceof Fx?u?(l.inject(u,r),[l.getName(r)]):[l]:ol(l)?Fm(l):Array.isArray(l)?Array.prototype.concat.apply($c,l.map(function(x){return la(x,o,u,r)})):[l.toString()]}function Px(l){for(var o=0;o<l.length;o+=1){var u=l[o];if(Ia(u)&&!ku(u))return!1}return!0}var tv=km(Jc),ev=(function(){function l(o,u,r){this.rules=o,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Px(o),this.componentId=u,this.baseHash=Ka(tv,u),this.baseStyle=r,Km.registerId(u)}return l.prototype.generateAndInjectStyles=function(o,u,r){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,u,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))f=aa(f,this.staticRulesId);else{var m=cm(la(this.rules,o,u,r)),x=Ru(Ka(this.baseHash,m)>>>0);if(!u.hasNameForId(this.componentId,x)){var S=r(m,".".concat(x),void 0,this.componentId);u.insertRules(this.componentId,x,S)}f=aa(f,x),this.staticRulesId=x}else{for(var v=Ka(this.baseHash,r.hash),p="",E=0;E<this.rules.length;E++){var O=this.rules[E];if(typeof O=="string")p+=O;else if(O){var _=cm(la(O,o,u,r));v=Ka(v,_+E),p+=_}}if(p){var q=Ru(v>>>0);u.hasNameForId(this.componentId,q)||u.insertRules(this.componentId,q,r(p,".".concat(q),void 0,this.componentId)),f=aa(f,q)}}return f},l})(),Im=ll.createContext(void 0);Im.Consumer;var Su={};function nv(l,o,u){var r=ku(l),f=l,m=!bu(l),x=o.attrs,S=x===void 0?$c:x,v=o.componentId,p=v===void 0?(function(F,V){var nt=typeof F!="string"?"sc":em(F);Su[nt]=(Su[nt]||0)+1;var J="".concat(nt,"-").concat(jx(Jc+nt+Su[nt]));return V?"".concat(V,"-").concat(J):J})(o.displayName,o.parentComponentId):v,E=o.displayName,O=E===void 0?(function(F){return bu(F)?"styled.".concat(F):"Styled(".concat(Rx(F),")")})(l):E,_=o.displayName&&o.componentId?"".concat(em(o.displayName),"-").concat(o.componentId):o.componentId||p,q=r&&f.attrs?f.attrs.concat(S).filter(Boolean):S,Y=o.shouldForwardProp;if(r&&f.shouldForwardProp){var H=f.shouldForwardProp;if(o.shouldForwardProp){var Q=o.shouldForwardProp;Y=function(F,V){return H(F,V)&&Q(F,V)}}else Y=H}var B=new ev(u,_,r?f.componentStyle:void 0);function K(F,V){return(function(nt,J,jt){var At=nt.attrs,ee=nt.componentStyle,ae=nt.defaultProps,Lt=nt.foldedComponentIds,Ve=nt.styledComponentId,Ze=nt.target,kt=ll.useContext(Im),N=um(),k=nt.shouldForwardProp||N.shouldForwardProp,I=wx(J,kt,ae)||Fa,rt=(function(ut,tt,Gt){for(var pt,Ft=ue(ue({},tt),{className:void 0,theme:Gt}),qn=0;qn<ut.length;qn+=1){var Ke=Ia(pt=ut[qn])?pt(Ft):pt;for(var be in Ke)Ft[be]=be==="className"?aa(Ft[be],Ke[be]):be==="style"?ue(ue({},Ft[be]),Ke[be]):Ke[be]}return tt.className&&(Ft.className=aa(Ft.className,tt.className)),Ft})(At,J,I),y=rt.as||Ze,U={};for(var L in rt)rt[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&rt.theme===I||(L==="forwardedAs"?U.as=rt.forwardedAs:k&&!k(L,y)||(U[L]=rt[L]));var G=(function(ut,tt){var Gt=um(),pt=ut.generateAndInjectStyles(tt,Gt.styleSheet,Gt.stylis);return pt})(ee,rt),W=aa(Lt,Ve);return G&&(W+=" "+G),rt.className&&(W+=" "+rt.className),U[bu(y)&&!Ym.has(y)?"class":"className"]=W,jt&&(U.ref=jt),j.createElement(y,U)})(X,F,V)}K.displayName=O;var X=ll.forwardRef(K);return X.attrs=q,X.componentStyle=B,X.displayName=O,X.shouldForwardProp=Y,X.foldedComponentIds=r?aa(f.foldedComponentIds,f.styledComponentId):"",X.styledComponentId=_,X.target=r?f.target:l,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=r?(function(V){for(var nt=[],J=1;J<arguments.length;J++)nt[J-1]=arguments[J];for(var jt=0,At=nt;jt<At.length;jt++)Tu(V,At[jt],!0);return V})({},f.defaultProps,F):F}}),Gu(X,function(){return".".concat(X.styledComponentId)}),m&&Vm(X,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function fm(l,o){for(var u=[l[0]],r=0,f=o.length;r<f;r+=1)u.push(o[r],l[r+1]);return u}var dm=function(l){return Object.assign(l,{isCss:!0})};function av(l){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];if(Ia(l)||ol(l))return dm(la(fm($c,qc([l],o,!0))));var r=l;return o.length===0&&r.length===1&&typeof r[0]=="string"?la(r):dm(la(fm(r,o)))}function Du(l,o,u){if(u===void 0&&(u=Fa),!o)throw dl(1,o);var r=function(f){for(var m=[],x=1;x<arguments.length;x++)m[x-1]=arguments[x];return l(o,u,av.apply(void 0,qc([f],m,!1)))};return r.attrs=function(f){return Du(l,o,ue(ue({},u),{attrs:Array.prototype.concat(u.attrs,f).filter(Boolean)}))},r.withConfig=function(f){return Du(l,o,ue(ue({},u),f))},r}var Pm=function(l){return Du(nv,l)},xt=Pm;Ym.forEach(function(l){xt[l]=Pm(l)});const iv=xt.div`
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
`;function lv(){return d.jsx(iv,{children:d.jsxs("section",{className:"content-section",children:[d.jsx("p",{className:"text1",children:"Quer assistir? Informe seu email para criar ou reiniciar sua assinatura."}),d.jsxs("div",{className:"content-controls",children:[d.jsx("input",{type:"text",placeholder:"Email"}),d.jsxs("button",{children:["Vamos Lá ",d.jsx("span",{children:">"})," "]})]}),d.jsx("div",{className:"doubt-container",children:d.jsxs("p",{className:"doubt",children:["Dúvidas? Ligue para ",d.jsx("span",{children:"0800 591 2876"})]})}),d.jsxs("div",{className:"p1",children:[d.jsx("p",{children:"Perguntas Frequentes"}),d.jsx("p",{children:"Central de Ajuda"}),d.jsx("p",{children:"Conta"}),d.jsx("p",{children:"Media Center"})]}),d.jsxs("div",{className:"p2",children:[d.jsx("p",{children:"Relações com Investidores"}),d.jsx("p",{children:"Carreiras"}),d.jsx("p",{children:"Resgatar cartão pré-pago"}),d.jsx("p",{children:"Comprar cartão pré-pago"})]}),d.jsxs("div",{className:"p3",children:[d.jsx("p",{children:"Formas de assistir"}),d.jsx("p",{children:"Termos de Uso"}),d.jsx("p",{children:"Privacidade"}),d.jsx("p",{children:"Preferências de cookies"})]}),d.jsxs("div",{className:"p4",children:[d.jsx("p",{children:"Informações corporativas"}),d.jsx("p",{children:"Entre em contato"}),d.jsx("p",{children:"Teste de velocidade"}),d.jsx("p",{children:"Avisos legais"})]}),d.jsx("div",{className:"p5",children:d.jsx("p",{children:"Só na Netflix"})}),d.jsxs("div",{className:"final",children:[d.jsxs("select",{children:[d.jsx("option",{value:"portugues",children:"Português"}),d.jsx("option",{value:"ingles",children:"Inglês"})]}),d.jsx("p",{children:"Netflix Brasil"})]})]})})}const cv=xt.div`
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
`,Qu="/Movies-ReactJS/assets/Logonetflix-cJzkA86F.png";function ov(){const l=sl(),o=()=>{l("/sign-in")};return d.jsxs(cv,{children:[d.jsx("img",{src:Qu,alt:"Logo da Netflix"}),d.jsxs("div",{className:"user-controls",children:[d.jsxs("select",{children:[d.jsx("option",{value:"portugues",children:"Português"}),d.jsx("option",{value:"ingles",children:"Inglês"})]}),d.jsx("button",{onClick:o,children:"Entrar"})]})]})}const rv="/Movies-ReactJS/assets/background-G0Np5zM9.jpg",uv=xt.div`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  width: 100%;
  height: 100vh;
  background-image: url(${rv});
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
  
  `;function sv(){return d.jsx(d.Fragment,{children:d.jsxs(uv,{children:[d.jsx(ov,{}),d.jsxs("section",{className:"content-section",children:[d.jsx("h1",{children:"Filmes, Séries e muito mais, sem limites"}),d.jsx("p",{children:"Assista onde quiser. Cancele quando quiser"}),d.jsx("p",{className:"p2",children:"Quer assistir? Informe seu email para criar ou reiniciar sua assinatura."}),d.jsxs("div",{className:"controls",children:[d.jsx("input",{type:"text",placeholder:"Email"}),d.jsxs("button",{children:["Vamos Lá ",d.jsx("span",{children:">"})]})]})]})]})})}const fv=xt.div`
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
`,dv="/Movies-ReactJS/assets/pipoca-C290b5xr.png";function hv(){return d.jsx(fv,{children:d.jsxs("section",{className:"content-section",children:[d.jsx("img",{src:dv,alt:"Imagem da pipoca"}),d.jsxs("div",{className:"content",children:[d.jsx("h2",{children:"A Netflix que você adora por apenas R$ 20,90."}),d.jsx("p",{children:"Assine o plano Padrão com anúncios."}),d.jsx(Hu,{to:"/",children:" Saiba Mais > "})]})]})})}const mv=xt.div`
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
    position: relative;
    bottom: 50px;
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
`,pv="/Movies-ReactJS/assets/tv-netflix-BWLwypTF.png";function gv(){return d.jsx(mv,{children:d.jsxs("div",{className:"content-section",children:[d.jsxs("div",{className:"text",children:[d.jsx("h2",{children:"Aproveite na tv"}),d.jsx("p",{children:"Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."})]}),d.jsx("img",{src:pv,alt:"Versão TV"})]})})}const xv=xt.div`
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
`,vv="/Movies-ReactJS/assets/dispositivos-Yv656wfi.png";function yv(){return d.jsx(xv,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("img",{src:vv,alt:"Mobile"}),d.jsxs("div",{className:"text",children:[d.jsx("h2",{children:"Assista onde quiser"}),d.jsx("p",{children:"Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV."})]})]})})}const bv=xt.div`
   width: 100%;
  height: 80vh;
  background-color: black;
  color: white;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .content-section {
    width: 100%;
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
    position: relative;
    bottom: 50px;
    
    
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
      width: 450px;
      
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
      width: 500px;
    }
  }
`,Sv="/Movies-ReactJS/assets/kids-DbAjh5sn.png";function wv(){return d.jsx(bv,{children:d.jsxs("div",{className:"content-section",children:[d.jsxs("div",{className:"text",children:[d.jsx("h2",{children:"Crie perfis para crianças"}),d.jsx("p",{children:"Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."})]}),d.jsx("img",{src:Sv,alt:"Mobile"})]})})}const Av=xt.div`
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
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    text-align: center;
    width: 90%;
  }
  .content-section img {
    width: 250px;
    position: relative;
    top: 50px;
  }

  .content-section h2 {
    font-size: 1.8rem;
    position: relative;
    margin-bottom: 70px;
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
      width: 500px;
      position: relative;
      margin-bottom: 70px;
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section {
      width: 95%;
    }
    .content-section h2 {
      font-size: 4rem;
    }
    .content-section p {
      font-size: 1.5rem;
      width: 620px;
    }

    .content-section img {
      width: 500px;
    }
  }
`,zv="/Movies-ReactJS/assets/movel-A3IsfRxB.png";function Ev(){return d.jsx(Av,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("img",{src:zv,alt:"Mobile"}),d.jsxs("div",{className:"text",children:[d.jsx("h2",{children:"Baixe séries para assistir offline"}),d.jsx("p",{children:"Assista em um avião, trem ou submarino..."})]})]})})}const jv=xt.div`
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
`;function Rv(){const[l,o]=j.useState(null),u=f=>{o(l===f?null:f)},r=[{question:"O que é Netflix?",answer:"A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes."},{question:"Quanto custa a Netflix?",answer:"Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 20,90 a R$ 59,90 por mês. Sem contrato nem taxas extras."},{question:"Onde posso assistir?",answer:"Assista onde quiser, quando quiser. Acesse sua conta Netflix em netflix.com para assistir no computador ou em qualquer aparelho conectado à internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. Leve a Netflix com você para qualquer lugar."},{question:"Como faço para cancelar?",answer:"A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento."},{question:"O que eu posso assistir na Netflix?",answer:"A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser."},{question:"A Netflix é adequada para crianças?",answer:"A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis. O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam."}];return d.jsx(jv,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("h3",{children:"Perguntas frequentes"}),d.jsx("div",{className:"cards",children:r.map((f,m)=>d.jsxs("div",{className:`faq-item ${l===m?"active":""}`,onClick:()=>u(m),children:[d.jsxs("div",{className:"faq-header",children:[d.jsx("p",{children:f.question}),d.jsx("span",{children:l===m?"−":"+"})]}),l===m&&d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:f.answer})})]},m))})]})})}function Tv(){return d.jsxs(d.Fragment,{children:[d.jsx(sv,{}),d.jsx(hv,{}),d.jsx(gv,{}),d.jsx(yv,{}),d.jsx(wv,{}),d.jsx(Ev,{}),d.jsx(Rv,{}),d.jsx(lv,{})]})}const Nv=xt.div`

    
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


`;function Dv(){return d.jsx(Nv,{children:d.jsx("img",{src:Qu,alt:"Netflix-Logo"})})}const hm="/Movies-ReactJS/assets/back01-BieqImTc.jpg",Mv=xt.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  /* background-image: url(${hm}); */
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
    background-image: url(${hm});
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
`;function Ov(){const[l,o]=j.useState(""),[u,r]=j.useState(""),f=sl(),m=()=>{f("/")},x=()=>{if(!l.trim()||!u.trim()){alert("Preencha todos os campos!");return}f("/main-app")};return d.jsx(d.Fragment,{children:d.jsxs(Mv,{children:[d.jsx(Dv,{}),d.jsx("div",{className:"container",children:d.jsxs("div",{className:"content-section",children:[d.jsx("h2",{children:"Entrar"}),d.jsx("input",{type:"text",placeholder:"E-mail ou número de celular",value:l,onChange:S=>o(S.target.value)}),d.jsx("input",{type:"text",placeholder:"Senha",value:u,onChange:S=>r(S.target.value)}),d.jsx("button",{onClick:x,children:"Entrar"}),d.jsx("p",{className:"separate",children:"OU"}),d.jsxs("div",{className:"forgot-password",children:[d.jsx("p",{children:"Use um código de login"}),d.jsx("a",{href:"#",children:"Esqueceu sua senha?"})]}),d.jsxs("div",{className:"remember",children:[d.jsx("input",{type:"checkbox"}),d.jsx("label",{children:"Lembra de Mim?"})]}),d.jsxs("div",{className:"sign-up-now",children:[d.jsx("p",{children:"Novo na Netflix"}),d.jsx("p",{onClick:m,children:d.jsx("strong",{children:"Assine Já"})})]})]})})]})})}const Cv=xt.div`
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
`;function _v(){return d.jsx(Cv,{children:d.jsxs("footer",{className:"content-section",children:[d.jsx("p",{className:"doubt",children:"Dúvidas? Ligue para 0800 591 2876 (ligação gratuita)"}),d.jsxs("div",{className:"questions",children:[d.jsxs("div",{className:"q1",children:[d.jsx("p",{children:"Perguntas frequentes"}),d.jsx("p",{children:"Termos de Uso"}),d.jsx("p",{children:"Preferências de cookies"})]}),d.jsxs("div",{className:"q2",children:[d.jsx("p",{children:"Central de ajuda"}),d.jsx("p",{children:"Privacidade"}),d.jsx("p",{children:"Informações corporativas"})]}),d.jsxs("select",{children:[d.jsx("option",{value:"portugues",children:"Português"}),d.jsx("option",{value:"ingles",children:"Inglês"})]})]})]})})}function Uv(){return d.jsxs(d.Fragment,{children:[d.jsx(Ov,{}),d.jsx(_v,{})]})}const Bv=xt.div`
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
`;function Hv(){const l=sl(),o=()=>l("/"),[u,r]=j.useState(!1),f=()=>r(!u);return d.jsxs(Bv,{children:[d.jsxs("div",{className:"content-section",children:[d.jsxs("div",{className:"p1",children:[d.jsx("img",{src:Qu,alt:"Logo Netflix"}),d.jsxs("div",{className:"desktop-menu",children:[d.jsx("p",{children:"Início"}),d.jsx("p",{children:"Séries"}),d.jsx("p",{children:"Filmes"}),d.jsx("p",{children:"Novos & Populares"}),d.jsx("p",{children:"Minha Lista"})]})]}),d.jsxs("div",{className:"p2",children:[d.jsx("button",{onClick:o,children:"Sair"}),d.jsx("div",{className:"btn-mobile",onClick:f,children:d.jsx("p",{children:"☰"})})]})]}),d.jsxs("div",{className:`side-menu ${u?"open":""}`,children:[d.jsx("div",{className:"close-btn",onClick:f,children:"×"}),d.jsx("p",{children:"Início"}),d.jsx("p",{children:"Séries"}),d.jsx("p",{children:"Filmes"}),d.jsx("p",{children:"Novos & Populares"}),d.jsx("p",{children:"Minha Lista"})]}),u&&d.jsx("div",{className:"overlay",onClick:f})]})}const qv=xt.div`
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
      font-size: 1.3rem;
      width: 45%;
    }

    .content-section .desc button{
      font-size: 1.3rem;
      width: 115px;
    }
  }
`;function Yv(){const[l,o]=j.useState(""),[u,r]=j.useState(""),[f,m]=j.useState(),[x,S]=j.useState(""),[v,p]=j.useState(""),[E,O]=j.useState("");return j.useEffect(()=>{(async()=>{const q="ee96350ded551df8af41839e03615c58";try{const H=await(await fetch(`https://api.themoviedb.org/3/tv/66732?api_key=${q}&language=pt-BR`)).json();o(H.name),m(H.number_of_seasons),r(H.overview);const B=await(await fetch(`https://api.themoviedb.org/3/tv/66732/images?api_key=${q}`)).json(),K=B.posters[30],X=B.backdrops[2],F=B.backdrops[30];S(`https://image.tmdb.org/t/p/w500${K.file_path}`),O(`https://image.tmdb.org/t/p/original${X.file_path}`),p(`https://image.tmdb.org/t/p/original${F.file_path}`)}catch(Y){console.error("Erro ao buscar banner:",Y)}})()},[]),d.jsx(qv,{bg:x,bg2:E,bg3:v,children:d.jsxs("div",{className:"content-section",children:[d.jsx("div",{className:"title",children:d.jsx("h1",{children:l.toUpperCase()})}),d.jsxs("div",{className:"desc",children:[d.jsxs("p",{className:"season",children:["Assista a temporada ",f]}),d.jsxs("p",{children:[u.slice(0,85),"..."]}),d.jsxs("div",{className:"btn",children:[d.jsx("button",{className:"play",children:" ▶ Play"}),d.jsx("button",{children:"More info"})]})]})]})})}const Lv=xt.div`
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
  }

  @media screen and (min-width:992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function kv(){const[l,o]=j.useState([]),u=sl(),r="ee96350ded551df8af41839e03615c58",f=async()=>{const S=await(await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${r}&language=pt-BR&page=1`)).json();o(S.results)};j.useEffect(()=>{f()},[]);const m=x=>{u(`/details/${x}`)};return d.jsx(Lv,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Populares na Netflix"})}),d.jsx("div",{className:"cards",children:l.map(x=>d.jsx("div",{className:"card",onClick:()=>m(x.id),style:{cursor:"pointer"},children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${x.poster_path}`,alt:x.title})},x.id))})]})})}const Gv=xt.div`
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
  }

  @media screen and (min-width:992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function Qv(){const[l,o]=j.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${u}&with_networks=213&language=pt-BR&page=1`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return j.useEffect(()=>{r()},[]),d.jsx(Gv,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Originais Netflix"})}),d.jsx("div",{className:"cards",children:l.map(f=>d.jsx("div",{className:"card",children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title})},f.id))})]})})}const Xv=xt.div`
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
  }

  @media screen and (min-width:992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function Vv(){const[l,o]=j.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${u}&language=pt-BR&page=1
`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return j.useEffect(()=>{r()},[]),d.jsx(Xv,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Em Alta"})}),d.jsx("div",{className:"cards",children:l.map(f=>d.jsx("div",{className:"card",children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title})},f.id))})]})})}const Zv=xt.div`
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
  }

  @media screen and (min-width:992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function Kv(){const[l,o]=j.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${u}&language=pt-BR&page=1`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return j.useEffect(()=>{r()},[]),d.jsx(Zv,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Comédia"})}),d.jsx("div",{className:"cards",children:l.map(f=>d.jsx("div",{className:"card",children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title})},f.id))})]})})}const Jv=xt.div`
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
  }

  @media screen and (min-width:992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function $v(){const[l,o]=j.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${u}&language=pt-BR&page=1`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return j.useEffect(()=>{r()},[]),d.jsx(Jv,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Terror"})}),d.jsx("div",{className:"cards",children:l.map(f=>d.jsx("div",{className:"card",children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title})},f.id))})]})})}const Wv=xt.div`
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
  }

  @media screen and (min-width:992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function Fv(){const[l,o]=j.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${u}&language=pt-BR&page=1`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return j.useEffect(()=>{r()},[]),d.jsx(Wv,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Séries de TV"})}),d.jsx("div",{className:"cards",children:l.map(f=>d.jsx("div",{className:"card",children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title})},f.id))})]})})}const Iv=xt.div`
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
`;function Pv(){const[l,o]=j.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/search/movie?query=star%20wars&api_key=${u}&language=pt-BR&page=1`)).json();o(m.results)};return j.useEffect(()=>{r()},[]),d.jsx(Iv,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("h2",{className:"main-title",children:"Sagas Populares"}),d.jsxs("div",{className:"saga-block",children:[d.jsx("p",{className:"saga-title",children:d.jsx("strong",{children:"Universo Star Wars"})}),d.jsx("div",{className:"cards",children:l.map(f=>d.jsx("div",{className:"card",children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title})},f.id))})]})]})})}const ty=xt.div`
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
  }

  @media screen and (min-width: 992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function ey(){const[l,o]=j.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${u}&language=pt-BR&query=Indiana%20Jones`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return j.useEffect(()=>{r()},[]),d.jsx(ty,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Universo Indiana Jones"})}),d.jsx("div",{className:"cards",children:l.filter(f=>f.poster_path).map(f=>d.jsx("div",{className:"card",children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title||f.name})},f.id))})]})})}const ny=xt.div`
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
  }

  @media screen and (min-width: 992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function ay(){const[l,o]=j.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${u}&language=pt-BR&query=Jurassic%20Park`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return j.useEffect(()=>{r()},[]),d.jsx(ny,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Universo Jurassic Park"})}),d.jsx("div",{className:"cards",children:l.filter(f=>f.poster_path).map(f=>d.jsx("div",{className:"card",children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title||f.name})},f.id))})]})})}const iy=xt.div`
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
  }

  @media screen and (min-width: 992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function ly(){const[l,o]=j.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${u}&language=pt-BR&query=Harry%20Potter`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return j.useEffect(()=>{r()},[]),d.jsx(iy,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Universo Harry Potter"})}),d.jsx("div",{className:"cards",children:l.filter(f=>f.poster_path).map(f=>d.jsx("div",{className:"card",children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title||f.name})},f.id))})]})})}const cy=xt.div`
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
  }

  @media screen and (min-width: 992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function oy(){const[l,o]=j.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${u}&language=pt-BR&query=The%20Lord%20Of%20Rings`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return j.useEffect(()=>{r()},[]),d.jsx(cy,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Universo Senhor dos Anéis"})}),d.jsx("div",{className:"cards",children:l.filter(f=>f.poster_path).map(f=>d.jsx("div",{className:"card",children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title||f.name})},f.id))})]})})}const ry=xt.div`
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
  }

  @media screen and (min-width: 992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function uy(){const[l,o]=j.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${u}&language=pt-BR&with_companies=420`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return j.useEffect(()=>{r()},[]),d.jsx(ry,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Universo Marvel"})}),d.jsx("div",{className:"cards",children:l.filter(f=>f.poster_path).map(f=>d.jsx("div",{className:"card",children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title||f.name})},f.id))})]})})}const sy=xt.div`
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
  }

  @media screen and (min-width: 992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;function fy(){const[l,o]=j.useState([]),u="ee96350ded551df8af41839e03615c58",r=[268,49026,297802,297761,272,"tt5950044",141052,297762,474395,155,209112,464052,1042305],f=async()=>{try{const m=r.map(S=>fetch(`https://api.themoviedb.org/3/movie/${S}?api_key=${u}&language=pt-BR`).then(v=>v.json())),x=await Promise.all(m);o(x.filter(S=>S.poster_path))}catch(m){console.error("Erro ao buscar filmes DC:",m)}};return j.useEffect(()=>{f()},[]),d.jsx(sy,{children:d.jsxs("div",{className:"content-section",children:[d.jsx("p",{children:d.jsx("strong",{children:"Universo DC"})}),d.jsx("div",{className:"cards",children:l.map(m=>d.jsx("div",{className:"card",children:d.jsx("img",{src:`https://image.tmdb.org/t/p/w500${m.poster_path}`,alt:m.title||m.name})},m.id))})]})})}const dy=xt.div`
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
`,hy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAANxUlEQVR4nO3dCaxdRR3H8SO7S2XRyL6IoBGCCkHZ1yKJQBcpuAC2toIGiomxItgWQVGjYQtBlkJFLTsChYgBpNCUxCUqiywFChWhLQFBKNgShLZfM3n/anm2772ZM+fOzDm/T/IS0pB7Z/5z5p4zc2b+U1UiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiJSB/A+YC9gAnAWcClwFTATuKsjfzOtzpdaDMZbTDZJ3T7SY8CHgBOAa4HnkME8B1wDHA9sn7r9pAHAtsBU4InUV1sLPG6x3DZ1u0oNwFrAkcBsYHnqq6qFlgP3WIzXSt3e4tcxjgYeTX0FdcgjwFhgndTtLwMADtVjVFKPAcNTXwfSD7A5MCP11SH/9Wtg69TXhfR1jmOAV//XNpKJxcAXUl8fnQVsAFyQ+iqQQbk7+7tSXy+dAmwHPDR420gmHgC2SX3ddAKwM7AgdYtL0AvHj6e+floN2AN4yb9tJBMvA/umvo5ayQUWWNqDRnwFmA/8BZiTwTqppv/mWF3nW92bthTYO/X11CrALvbrE9trNiU5Cdgf+EDVccCmwAEWk9ssRrH90z0qp65rmwbkiyI2zr+Bm4BRwHqp65c7YD1gNHCzxS4WN47UwD3CVO79kRpkiU0Lb5W6XoXfXc6M+N7pr8A7U9erWMBlERphBXCFHp+id5RfWmzrujh1fUp+Q17Xk5o1aQ6wH/BUhHb6XOq6FAXYIsJt/Drgvanr0nbAhsANEZalbJa6LsUArq8RbHfbPy11HboGmFLzkevq1HUoacl6qGXAV1LXoavo25br2iDUwanrkDW34abGfg7366XOkRh9+/1D7yRzgbVT1yFbwHGE02NVXo9bobREfnWAdwAPBwb1+tTll7ezTCgh3FZp7XHvDxhTYypXs1V5zm7ND2zT0anLnx3LPuLLPevqPUem6FvTFTIeuTt12XNcbxUSyCtSl73lGSfHAz+xbItHhewMBK4MTCmkdVorAacHrq3S8pEGACetYRXvIuCwgIQarwe07+TmalgYYF5AAM9LXe42Ar41SNyXAZ/x/MyQ3AFzm6tleblyfbll11umLnvbuNy7Q1zSvtBnFa5bQR24VH67quvsxZKvm1KXu42A73m0wRjPz74loJ0nVF1nWdZ9jaoK56amgd1tevvLwMnAqfZ3sv3bGPt/hvWoTLd6tMEPejCNr/VZAUcQvFraTkBgXdtT/13bBx6yQ9I91vzWJjT2cZ/ZQDl/41GeH3t+9vrAv3zrXHWZTSX6uq0qp1OMsu29bsYtNnex3QiMjNVZgHM8vn9swOffHlDPjauuctktAgI2qcqYm78HzgdepHf+4Wb16ubDBXYb4vuoxSGnTwGnBNRtz6qr7EWUr/2rDAE7Aj+LnNjAl/vuy93MYI16XDSE7/la4GcfGFCncVVXAT8KCNimVX6D7Qtq7oOI7S27owwLfDT86RruJG8A36gRK/fS0JfXZECrAJd4BmtxlRG3NDtySqLYFobu9wZ2Bc623Fi32uRA7fcSAVupL6q6yk5W9TGvyoD7Za6xnDsFN5jfsMoA/it8Z1Rd5Tnv7tyfQZl3KvR4tydySB4NPOhZ7plVVwGzPIN1b+Lyjg5ceJcLV/aRiWN4r2eZZ1VdFbAHZHbCso6zwW/p3GTCCQnjOLuUNk+ulGDZCtcYWQRzsSLV+yQKafMslBAsO964TZ0jaRYYCmjzbOQeLFsq0sT7DZeuczpwojs2GdjBLamwdxDr2n+7fzvENi9Nr7G/eyBv9XpMQuZtnpWcgwV8IvKA3M0iTQU+WHPvzOmRz4J/vZezW2Tc5tnJNVjAe4DHiOM+4GiX1ihyGd3d5feRytizzDBk2uZZyjVYAS8wV2dRyIrXgLKOAP4eobzXd7nNs5RjsGz5SF3TgHc3XdZ+dzy3SDH7YwjIsM2zlVuwbOGh7wau/gdUfrHJMg5S/mNrjpsWNr17kczaPGu5BSsw+8ZK7pDRfZosn8dR2XX2opzbpTbPWk7Bsv0cy2qc2rpL1Y5Tgd+qs5+kpDbPXk7Bss1OIV7PMf2p3UlCt/pO60KbZy+XYNk22TdpWbp+G5OE7kzcus1tXoRcgmV7yLP6pY2lxuzWuW1u8yLkECxb2uGSHvh61k2vVplzCacD35O80FBqoeRtXowcgmXrrUJ8tiqEe78RWMfD29jmxcghWJa3ytfvqsIAf8zh7ToZtHkxUgfLZWgMnOmJ/svatMA75WuxH7NSt3lRUgfL0oH6eiL2wsMengHpFiX62ityOdRBSgmW5cr1NaUqFHBG6vqiDlJOsCyRtK/tq0LZagFfd0YugzpIKcEKWJj4VFU44GnPOi+I/P3qICUEy1bu+u41n14Vzh186lnnFTHf96iDlNNBPom/E6vC2eE8vnaL+P3qIIV0kCPxN7wqHPDplC9FUQcppoO4I858BSdcKPzQ1LERv18dpJAO8nX8eR8akxvg/QH1nhjx+9VBCukgk/FX1NmIA5wV6Os7Eb9fHWSo1EF6Tx2kIHrE6j09YhUkcQdx2dp9aZBekzpIu6d5D6kKBxwaUO/REb9fHaSQDrI7/k6qChf4aLlrxO9XBymkgwzr6FKTn3vWeYWWmiSSOlgBJ9TOrwoXsD/92cjfrw7S8uXujSVVaxrwkYD63hG5DOogLd8wNbUqFHBmQH0nRy6DOkgpwXK5dPHXtS23e0YuhzpIKcEC1rHEBL5GVIWxI6x9veZiFLkc6iAlBQu4EX9/qAoD/Cmgnte1sc2LUXjiuDFVIWocCnRYG9u8GDkEyx6znsffgkJSjw6zg3F8vaDUo4nlEizgPMJcXrVvD/pK57S5zYuQS7Bcqn9L+R/i2CpTwJcC6/QGsFWb27wIOQWrxjEB7gCd/arMuOlZOzMxxKVdaPPs5RQsYAc7fqwNR7B9rMYRbG82uayfjNo8e7kFq8ZYBLsg983kzvFSjXqc3aU2z1puwaox47Pq49axicccdY6BbnxmjszaPGs5BqvGYTOrmt7LKWDr2KGzVas6qottnq1cgwXMoL5FMbeqDlDWEcAzEcp7bdNlzbnNs5RrsNyvPzDXs2xr8oDrKMBakRcejgg8NWp15rm7UKzyldjmWco5WDYTVOd5vr8n7XyOHWvu5zgzcFXumizt5QwcGbd5dnIPFjCyxtTvQJ62McNEy5Xrzu3YxI6EW8/++8OWYGGibZMNOal2MK5uR/Q4prM9y6gOknOwgOMC9q6XwNVpQoJ4zvYspzpI7sECJrWsk7i6fDNRLGd7llUdpIRg2UC7icetXlsGnJAwjrM9y9vpDjLLM1j3Ji7vyMgD915b2usxR3+uDT3LPKvqKuBWz2Ddn0GZdwIeoTyPu5m5DOL3oGe5Z1ZdBVzlGax5VQbsPcnVlOPKXDZ3AfM9yz6j6irgYs9gLa4yYstS6qzdatqCXiwf8RGQJOOiqquAHwY0+qZVRmwd1HmZDeDdkvVzcrlrrARsHlCXs6quAsYHBGz/Kt9jBS6rsTMxBrcTcFquxzQABwbUaVzVVcBeAQGbVGXMtu+ea0kPeuV5u2M0sk02FuDbqRPXFcWWVPi6rSqAZUs5wuWWCkxON5hX3Qpc4PDYyd2aAtwRUM+Nqy4Dngu4MIo6K9A6i7tbTgHudBnTAy6UZ+0Cm2y7BovoFCsBGwBLPOu8sOo64JqUJx4lnirezU66GmeLEk+1v4n25v5I+3+yGmyHcLNpAe18VdV1btlDQOBuSl1uafylsDO+6jpg+4DAuZmiLVOXXbwmLtzUs69th/gV7WbLIHydn7rcMjTAhQHt++gQP779bPDqa0luLw3l/wFbBC7wPG01H9dN7lYKLA8I4i9Sl10amYRx18LWg3x0twD3BG78yS7tp/QBDgrcaNbdJe5rYlOaIZ4CNkxdfnk7YCPgb4FtOqrfx4mlsnkoMKC/Sl1+eTs3FR/Ylo/ETJHUKsAxhJuSuvzSx9Ibhfq8fYz0B6wNPBYYWPese3zqOnQd8NUanUN3j8EAw0tNSNB19HUO1wahP3AHpq5Dm6cGVw301NR16OD48Qzq6e7W2sCdZ4trBtwd76zZrd7MVt1cs61e0UtfT26wRn0uQcABqevS8vccT0dop6z2zRcDuCRC8FdYVo/NU9enZctHriaOC1PXp1jA+i4XVuT92lrCUG9V7gU1Dgftz+XI2iB1vYoGbGPpa2JxS+VvsTf366euXyE7AY+y/RwhS9bX5Jnc99AXA9jZTpKNza0Ivh04xTJudP4xzCZIDrIEC3cEbJMdCnfI6EdT17VVgL0j3toH2/PuBvf3AXOAu1r+N8fqOt/q3rQlnc5U0iTgU8CLPWhEacbLwD6pr6NWc7fmwKwgktaiXh711mk2cI81uyXN+7MG5GmmgN2Uo+RtmmYL02dYd0sVJC+vAGNSXx/S10k2c4vdWnaOYMlu0NqqDAEHA3NTXx0d9rDWvmXObbgBRtjcvvSuY4x1G95St7/47VEYDdwdmFJIBrbcDmEd5WKdur2l/iI7lxVdj1/1PeqSumnatqWA7YAJdoCoe3klA1tosXKngSlXbte4A1qAPewIgu/bwaJuRmxmBuukevU30+p8scVgnMVko9TtIyIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiUpXtP6MrU4WpL2ZMAAAAAElFTkSuQmCC",my="/Movies-ReactJS/assets/facebook2-1kk7hThO.png",py="/Movies-ReactJS/assets/x2-X5CHVD4u.png",gy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAAJFBMVEVHcEzz8/P6+vr8/Pz9/f39/f3+/v7+/v7+/v7+/v7+/v7///8O3y3aAAAAC3RSTlMAEyc/WHKLo8DX7jCgBDoAAAjBSURBVHja7dxPTFVnGgbw5xwuOjqbc7G2qd1cLk0kcYPAYpzZ0KqTTLuhiaUdcMEsqFWnSSWpxZBxZpy0MrKApjM6LRtMHGK9G+og/76Nq+ksWTKLKltt4j37AqdcQd425PLHcjmH8zw/gro9j8/7+XHPGyEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIim+Bla/L5urqmJc3NJ0xz05LGxny+NpvFjvJQEVkv8IIsslj+fflP2LwoRBHFKPzxVzHZAXjZbJDNekG2BJVRLInCpe9iMUxGAF5tzdLz1toz7wRL40mx+PBJGEcANUsPvfRdEyB+0cMnxYfFpe+dCaAmn883ZpFExW8fPHjwsHIBePmSAMkWPSgJsb285pNnrrld5PbFU8cDbJdX3y+4XWj609exDQ68M+R2ramPjv7Mp2/rd7vcZNfzZ3DwmkuF22/heXjvutT4JMCWvdDvUmTyNWzRYZcy3aTPb7pJn990b+n5qROodinVik3xh1xKTeWwGR0ute5hE+pdil3BhjIu1VqwkfMu1caxgb0u5T7Eurx+l3KTAdbzsku9z7AOv+BSbzqH8o44AndRlldwBKYDlLPPURhEOf2OwiTK2ONIdG7upyC6n4mqHI0GGHPI0bgJY3odjQnSCTANnBNgbnJOgJkoMwHMM7DfURkudwvivQsVHJXptW+DyLSuPQK4D4E3HZmxtUcA9SGQcXRayn8YxvjB2BFH5+7aaxDzVWjI0ZkCjO8I5VDio6QKhBpgAWRAqAUWQB6E8jAdjtA9mF5HaAJmyBGawirPUQpWD0EflHIKQAEAvl0E6TSsBpAFpSznB4JmbLUBOVDyFcAzjhQAZCwJPrk5BUAeABTAU790pEYB+AACkPIUgN2EKY2pAct6HakJNWD5uxCAU/RbNQA+4INWzraEOTWoASV7HK1ONcBW5CgNqgElrzhaXwM+kAMt334a5jSmBsAHNTUAPhCAlqcAFIAPD8QCBUAfQEYNUAAKoPLmB9gbMDFKHkB0/T53AIj65rgDwMLZMKEBBNgZ8+eQPN4OBoDvTpMHgEd/Ig8A/xsgDwDjwwkMYEeN3Eey7HADEF2doRwBs3gppBwBM9/OOQLm+w7OETCPPyAPALMDrAHYdYDzEDQjo0gK30MMohszSIYgngCw2DOXlAAQj4VzrCNg1wHWEbDrAOcImNnLnCNgvhnkHAEzPko6AnYduE85Amaxb461Afa6hLIBZv48ZwPM4z9yNsD8/zJnA8w3A6wNsO0J1gbY9gRpA+LfnrAG0F4HfCTCfDt5APj+NOLhB0iGRx8gDp6PpJgd4GyAGR9mbYBtT7A2wLYn6BoQ//aEjySZb2cdAXtdwjoC9rqEcwTM7J85R8D8d5h1BGx7gnUEbHuCdQRse4J0BGx7grUBdh1gbYBdB1gPQdueYB0Be13COQJmYpS1AbY9wdoA255gPQTtdQnpCNj2BOcImMenOUfAPLrMGoBdB8gDwMQw5SFoopH7lIegifpmKEfALFwKuQPAfDtrALY9wRqAbU+QB4DZAYIA4tie0H+ru2sCeKOTO4D6C9wNeOlz7hGovgXqADIjoA6g6mqAyvFDJJzX04DKiXwk3bkW7s8D3mgFmBtw7AL3TfDwFVAH8OI/UGGRHyK5Mv/kfjNUdSOA4TsE/Z4cQDwC3tkW7s8Dft8KQ3gVPvYHGMIzoP4K90diL34OQzgC1f+GIRyBqusAcwP8vhyYG+CdbeB+L9DeCjCPwK87YQhHoP6vtK/G7ALAOQJ2ASAegcwI99th/2oAEI+Ad6kBYB6B9haAswG2A8HcgF9dAJgb8NLfAOYGHLzFvSSVuQ7qAPwbAWLiR4m4AOQQk9BPyg4EZwNsB4KzAbYDwdkA24HgbIDtQHA2wHYgOBtgOxCcDbAdCNIG2A4EcwPaWxG3MM4AjnXCcI2A7UBwjoC9AuEcAXsFwjkCtgPBOQK2A0E8ArYDEX8AnBcA4yOMbwcifpEFENsORPwBUF4ALICYLgCUZ4DtQDCOgO1A0AZgOxCcZ4DtQHCeAbYDwTgCtgPBGYDtQFAHUH0L1AFkRpDMACKCVyBlhTsWgNeTA3MA3rkWUAfwu1YkUghgjyPWaQ3gFCoA+gAyCkAjwB4AQtCKoAAUADAHWov6b3XVAJ0B7A3IqAFYBKuV8v/C0fqLGlBS7Wi1qgElvqOVUwOeKjhS0wB8y4GNdb/XkZpQA5a96UiNqQHLXnGkvl5pQAhS0UoACyA1sxLAIkjNKQAFoACe6neUJgHAtyToWPN/4yj9Rw14FkARlOyx9zpKH642YBGU5hSAAnhmyBGaQolvWbBZVAAWwAwILcDsc4QGYaodoVYY3xHKwc6AxTlQWfvMHY7OPQDmiKNzF4DZx/mPgMk4Oi0wjFsi0/ipDs4z0Ox3ZIbxU9Wk90BT4DwCTAfnEWD2Ex4BzDeBBhjGbcEJrHXIEbmJtapIJ8D0ck6AOcQ5AaaKdAJMB+ctyOxxJDphGI/BSZTzsqMwiHK8giMwHaCsI47AXZTnFwgKkINhPAU+w3q8fpdykwHWtZdgN259512qjWMjGZL3QeXVuxS7gk3o4PgpqDx/yKXUVA6bUk3yNqi8wy6VugHqBLoB6gS6AeoEurFFL/S7FJl8DVvmvetS45MAz+PgNZcKt9/C8zrQ1r/ry991FD9L3TtDbtea+ugotsGr7xfcLjT96evYLl7zyTNful3kq4unmgJsM6/u5Jm/u8T718VTjQEq58CJtkt3XCLdudF1/Ch2Rk3TibfP9HxZSMSsf3X14tsnmmoRBy/ffLLt474vYujEnS/6Pu46dTwfIBm8mrqlVrS9Z2lU5pnf61r6226sDbBNPFRE1gt+/JVFFl6AzYtCFEtfURiFz34vohI87KTlHDwEAAIPqyKEK78+fWIRERERERERERERERERERERERERERERERERERERERERERERERER2dAPzihcjVvoSgUAAAAASUVORK5CYII=";function xy(){return d.jsx(dy,{children:d.jsxs("div",{className:"content-section",children:[d.jsxs("div",{className:"social-media",children:[d.jsx("div",{children:d.jsx("a",{href:"https://www.instagram.com/netflixbrasil/",target:"_blank",children:d.jsx("img",{src:hy,alt:"Instagram Logo"})})}),d.jsx("div",{children:d.jsx("a",{href:"https://www.facebook.com/netflixbrasil/?locale=pt_BR",target:"_blank",children:d.jsx("img",{src:my,alt:"Facebook Logo"})})}),d.jsx("div",{children:d.jsx("a",{href:"https://x.com/netflixbrasil",target:"_blank",children:d.jsx("img",{src:py,alt:"X Logo"})})}),d.jsx("div",{children:d.jsx("a",{href:"https://www.youtube.com/@NetflixBrasil",target:"_blank",children:d.jsx("img",{src:gy,alt:"Youtube Logo"})})})]}),d.jsxs("div",{className:"informations",children:[d.jsxs("div",{className:"p1",children:[d.jsx("p",{children:"Central de Ajuda"}),d.jsx("p",{children:"Descrição de Áudio"}),d.jsx("p",{children:"Cartões Presente"}),d.jsx("p",{children:" Relações com Investidores"})]}),d.jsxs("div",{className:"p2",children:[d.jsx("p",{children:"Imprensa Oficial"}),d.jsx("p",{children:"Oportunidades de Carreira"}),d.jsx("p",{children:"Termos de Serviço"}),d.jsx("p",{children:"Política de Privacidade"})]}),d.jsxs("div",{className:"p3",children:[d.jsx("p",{children:"Avisos Legais"}),d.jsx("p",{children:"Preferências de Cookies"}),d.jsx("p",{children:"Informações Corporativas"}),d.jsx("p",{children:"Entre em Contato"})]})]}),d.jsx("div",{className:"foot-container",children:d.jsx("p",{className:"foot",children:"© 2025 - Todos os Direitos Reservados"})})]})})}function vy(){return d.jsxs(d.Fragment,{children:[d.jsx(Hv,{}),d.jsx(Yv,{}),d.jsx(kv,{}),d.jsx(Qv,{}),d.jsx(Vv,{}),d.jsx(Kv,{}),d.jsx($v,{}),d.jsx(Fv,{}),d.jsx(Pv,{}),d.jsx(ey,{}),d.jsx(ay,{}),d.jsx(ly,{}),d.jsx(oy,{}),d.jsx(uy,{}),d.jsx(fy,{}),d.jsx(xy,{})]})}const yy=xt.div`
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
    right: 20px;
    top: 10px;
  }
  .img img {
    width: 50px;
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
      url(${l=>l.bg});

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
`,by="/Movies-ReactJS/assets/logo-yAEqU2JB.png";function Sy(){const{id:l}=r1(),[o,u]=j.useState(null),[r,f]=j.useState("Livre"),[m,x]=j.useState([]),[S,v]=j.useState([]),p="ee96350ded551df8af41839e03615c58";if(j.useEffect(()=>{(async()=>{const B=await(await fetch(`https://api.themoviedb.org/3/movie/${l}?api_key=${p}&language=pt-BR`)).json();u(B);const F=(await(await fetch(`https://api.themoviedb.org/3/movie/${l}/release_dates?api_key=${p}`)).json()).results.find(J=>J.iso_3166_1==="BR");F&&F.release_dates.length>0&&f(F.release_dates[0].certification||"Livre");const nt=await(await fetch(`https://api.themoviedb.org/3/movie/${l}/credits?api_key=${p}&language=pt-BR`)).json();x(nt.cast.slice(0,5))})()},[l]),!o)return d.jsx("p",{children:"Carregando..."});const E=`https://image.tmdb.org/t/p/original${o.backdrop_path}`,O=`https://image.tmdb.org/t/p/original${o.poster_path}`,_=Math.floor(o.runtime/60),q=o.runtime%60,Y=`${_}h ${q}min`;return d.jsxs(yy,{bg:E,bg2:O,children:[d.jsx("div",{className:"img",children:d.jsx("img",{src:by,alt:"Logo da Netflix"})}),d.jsxs("div",{className:"info",children:[d.jsx("h1",{children:o.title.length>23?o.title.toUpperCase().slice(0,19)+"...":o.title.toUpperCase()}),d.jsxs("div",{className:"info-extras",children:[d.jsx("p",{children:o.release_date.slice(0,4)}),d.jsx("p",{children:r||"Livre"}),d.jsx("p",{children:Y})]})]}),d.jsx("div",{className:"description",children:d.jsxs("p",{children:[o.overview.slice(0,120),"..."]})}),d.jsxs("div",{className:"btns",children:[d.jsx("button",{className:"play",children:"▶ Assistir"}),d.jsx("button",{className:"more-info",children:"ℹ Mais Informações"})]}),d.jsxs("div",{className:"casting",children:[d.jsx("h3",{children:"Elenco:"}),d.jsx("p",{children:m.slice(0,3).map((H,Q)=>d.jsxs("span",{children:[H.name,Q<2?", ":"..."]},H.cast_id))})]}),d.jsxs("div",{className:"genres",children:[d.jsx("h3",{children:"Gênero:"}),d.jsxs("p",{children:[o.genres.map(H=>H.name).join(", ").slice(0,30),o.genres.map(H=>H.name).join(", ").length>30?"...":""]})]})]})}function wy(){return d.jsx(d.Fragment,{children:d.jsx(Z1,{basename:"/Movies-ReactJS",children:d.jsxs(A1,{children:[d.jsx(nl,{path:"/",element:d.jsx(Tv,{})}),d.jsx(nl,{path:"/sign-in",element:d.jsx(Uv,{})}),d.jsx(nl,{path:"main-app",element:d.jsx(vy,{})}),d.jsx(nl,{path:"details/:id",element:d.jsx(Sy,{})})]})})})}Og.createRoot(document.getElementById("root")).render(d.jsx(j.StrictMode,{children:d.jsx(wy,{})}));
