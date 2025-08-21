(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&r(v)}).observe(document,{childList:!0,subtree:!0});function u(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(f){if(f.ep)return;f.ep=!0;const m=u(f);fetch(f.href,m)}})();function wg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var su={exports:{}},Pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function Ag(){if(Hh)return Pl;Hh=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(r,f,m){var v=null;if(m!==void 0&&(v=""+m),f.key!==void 0&&(v=""+f.key),"key"in f){m={};for(var S in f)S!=="key"&&(m[S]=f[S])}else m=f;return f=m.ref,{$$typeof:i,type:r,key:v,ref:f!==void 0?f:null,props:m}}return Pl.Fragment=o,Pl.jsx=u,Pl.jsxs=u,Pl}var qh;function Eg(){return qh||(qh=1,su.exports=Ag()),su.exports}var h=Eg(),fu={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh;function zg(){if(Yh)return lt;Yh=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),v=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),O=Symbol.iterator;function U(y){return y===null||typeof y!="object"?null:(y=O&&y[O]||y["@@iterator"],typeof y=="function"?y:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,Y={};function Q(y,_,L){this.props=y,this.context=_,this.refs=Y,this.updater=L||H}Q.prototype.isReactComponent={},Q.prototype.setState=function(y,_){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,_,"setState")},Q.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function B(){}B.prototype=Q.prototype;function K(y,_,L){this.props=y,this.context=_,this.refs=Y,this.updater=L||H}var X=K.prototype=new B;X.constructor=K,q(X,Q.prototype),X.isPureReactComponent=!0;var et=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},at=Object.prototype.hasOwnProperty;function $(y,_,L,k,W,ut){return L=ut.ref,{$$typeof:i,type:y,key:_,ref:L!==void 0?L:null,props:ut}}function jt(y,_){return $(y.type,_,void 0,void 0,void 0,y.props)}function At(y){return typeof y=="object"&&y!==null&&y.$$typeof===i}function ee(y){var _={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(L){return _[L]})}var ae=/\/+/g;function Lt(y,_){return typeof y=="object"&&y!==null&&y.key!=null?ee(""+y.key):_.toString(36)}function Xe(){}function Ve(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Xe,Xe):(y.status="pending",y.then(function(_){y.status==="pending"&&(y.status="fulfilled",y.value=_)},function(_){y.status==="pending"&&(y.status="rejected",y.reason=_)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function Gt(y,_,L,k,W){var ut=typeof y;(ut==="undefined"||ut==="boolean")&&(y=null);var P=!1;if(y===null)P=!0;else switch(ut){case"bigint":case"string":case"number":P=!0;break;case"object":switch(y.$$typeof){case i:case o:P=!0;break;case z:return P=y._init,Gt(P(y._payload),_,L,k,W)}}if(P)return W=W(y),P=k===""?"."+Lt(y,0):k,et(W)?(L="",P!=null&&(L=P.replace(ae,"$&/")+"/"),Gt(W,_,L,"",function(Ft){return Ft})):W!=null&&(At(W)&&(W=jt(W,L+(W.key==null||y&&y.key===W.key?"":(""+W.key).replace(ae,"$&/")+"/")+P)),_.push(W)),1;P=0;var kt=k===""?".":k+":";if(et(y))for(var pt=0;pt<y.length;pt++)k=y[pt],ut=kt+Lt(k,pt),P+=Gt(k,_,L,ut,W);else if(pt=U(y),typeof pt=="function")for(y=pt.call(y),pt=0;!(k=y.next()).done;)k=k.value,ut=kt+Lt(k,pt++),P+=Gt(k,_,L,ut,W);else if(ut==="object"){if(typeof y.then=="function")return Gt(Ve(y),_,L,k,W);throw _=String(y),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return P}function N(y,_,L){if(y==null)return y;var k=[],W=0;return Gt(y,k,"","",function(ut){return _.call(L,ut,W++)}),k}function G(y){if(y._status===-1){var _=y._result;_=_(),_.then(function(L){(y._status===0||y._status===-1)&&(y._status=1,y._result=L)},function(L){(y._status===0||y._status===-1)&&(y._status=2,y._result=L)}),y._status===-1&&(y._status=0,y._result=_)}if(y._status===1)return y._result.default;throw y._result}var F=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function rt(){}return lt.Children={map:N,forEach:function(y,_,L){N(y,function(){_.apply(this,arguments)},L)},count:function(y){var _=0;return N(y,function(){_++}),_},toArray:function(y){return N(y,function(_){return _})||[]},only:function(y){if(!At(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},lt.Component=Q,lt.Fragment=u,lt.Profiler=f,lt.PureComponent=K,lt.StrictMode=r,lt.Suspense=x,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,lt.__COMPILER_RUNTIME={__proto__:null,c:function(y){return V.H.useMemoCache(y)}},lt.cache=function(y){return function(){return y.apply(null,arguments)}},lt.cloneElement=function(y,_,L){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var k=q({},y.props),W=y.key,ut=void 0;if(_!=null)for(P in _.ref!==void 0&&(ut=void 0),_.key!==void 0&&(W=""+_.key),_)!at.call(_,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&_.ref===void 0||(k[P]=_[P]);var P=arguments.length-2;if(P===1)k.children=L;else if(1<P){for(var kt=Array(P),pt=0;pt<P;pt++)kt[pt]=arguments[pt+2];k.children=kt}return $(y.type,W,void 0,void 0,ut,k)},lt.createContext=function(y){return y={$$typeof:v,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:m,_context:y},y},lt.createElement=function(y,_,L){var k,W={},ut=null;if(_!=null)for(k in _.key!==void 0&&(ut=""+_.key),_)at.call(_,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(W[k]=_[k]);var P=arguments.length-2;if(P===1)W.children=L;else if(1<P){for(var kt=Array(P),pt=0;pt<P;pt++)kt[pt]=arguments[pt+2];W.children=kt}if(y&&y.defaultProps)for(k in P=y.defaultProps,P)W[k]===void 0&&(W[k]=P[k]);return $(y,ut,void 0,void 0,null,W)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(y){return{$$typeof:S,render:y}},lt.isValidElement=At,lt.lazy=function(y){return{$$typeof:z,_payload:{_status:-1,_result:y},_init:G}},lt.memo=function(y,_){return{$$typeof:p,type:y,compare:_===void 0?null:_}},lt.startTransition=function(y){var _=V.T,L={};V.T=L;try{var k=y(),W=V.S;W!==null&&W(L,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(rt,F)}catch(ut){F(ut)}finally{V.T=_}},lt.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},lt.use=function(y){return V.H.use(y)},lt.useActionState=function(y,_,L){return V.H.useActionState(y,_,L)},lt.useCallback=function(y,_){return V.H.useCallback(y,_)},lt.useContext=function(y){return V.H.useContext(y)},lt.useDebugValue=function(){},lt.useDeferredValue=function(y,_){return V.H.useDeferredValue(y,_)},lt.useEffect=function(y,_,L){var k=V.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return k.useEffect(y,_)},lt.useId=function(){return V.H.useId()},lt.useImperativeHandle=function(y,_,L){return V.H.useImperativeHandle(y,_,L)},lt.useInsertionEffect=function(y,_){return V.H.useInsertionEffect(y,_)},lt.useLayoutEffect=function(y,_){return V.H.useLayoutEffect(y,_)},lt.useMemo=function(y,_){return V.H.useMemo(y,_)},lt.useOptimistic=function(y,_){return V.H.useOptimistic(y,_)},lt.useReducer=function(y,_,L){return V.H.useReducer(y,_,L)},lt.useRef=function(y){return V.H.useRef(y)},lt.useState=function(y){return V.H.useState(y)},lt.useSyncExternalStore=function(y,_,L){return V.H.useSyncExternalStore(y,_,L)},lt.useTransition=function(){return V.H.useTransition()},lt.version="19.1.1",lt}var Lh;function Mu(){return Lh||(Lh=1,fu.exports=zg()),fu.exports}var R=Mu();const li=wg(R);var du={exports:{}},ti={},hu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function jg(){return Gh||(Gh=1,(function(i){function o(N,G){var F=N.length;N.push(G);t:for(;0<F;){var rt=F-1>>>1,y=N[rt];if(0<f(y,G))N[rt]=G,N[F]=y,F=rt;else break t}}function u(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var G=N[0],F=N.pop();if(F!==G){N[0]=F;t:for(var rt=0,y=N.length,_=y>>>1;rt<_;){var L=2*(rt+1)-1,k=N[L],W=L+1,ut=N[W];if(0>f(k,F))W<y&&0>f(ut,k)?(N[rt]=ut,N[W]=F,rt=W):(N[rt]=k,N[L]=F,rt=L);else if(W<y&&0>f(ut,F))N[rt]=ut,N[W]=F,rt=W;else break t}}return G}function f(N,G){var F=N.sortIndex-G.sortIndex;return F!==0?F:N.id-G.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var v=Date,S=v.now();i.unstable_now=function(){return v.now()-S}}var x=[],p=[],z=1,O=null,U=3,H=!1,q=!1,Y=!1,Q=!1,B=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function et(N){for(var G=u(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=N)r(p),G.sortIndex=G.expirationTime,o(x,G);else break;G=u(p)}}function V(N){if(Y=!1,et(N),!q)if(u(x)!==null)q=!0,at||(at=!0,Lt());else{var G=u(p);G!==null&&Gt(V,G.startTime-N)}}var at=!1,$=-1,jt=5,At=-1;function ee(){return Q?!0:!(i.unstable_now()-At<jt)}function ae(){if(Q=!1,at){var N=i.unstable_now();At=N;var G=!0;try{t:{q=!1,Y&&(Y=!1,K($),$=-1),H=!0;var F=U;try{e:{for(et(N),O=u(x);O!==null&&!(O.expirationTime>N&&ee());){var rt=O.callback;if(typeof rt=="function"){O.callback=null,U=O.priorityLevel;var y=rt(O.expirationTime<=N);if(N=i.unstable_now(),typeof y=="function"){O.callback=y,et(N),G=!0;break e}O===u(x)&&r(x),et(N)}else r(x);O=u(x)}if(O!==null)G=!0;else{var _=u(p);_!==null&&Gt(V,_.startTime-N),G=!1}}break t}finally{O=null,U=F,H=!1}G=void 0}}finally{G?Lt():at=!1}}}var Lt;if(typeof X=="function")Lt=function(){X(ae)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,Ve=Xe.port2;Xe.port1.onmessage=ae,Lt=function(){Ve.postMessage(null)}}else Lt=function(){B(ae,0)};function Gt(N,G){$=B(function(){N(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(N){N.callback=null},i.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):jt=0<N?Math.floor(1e3/N):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_next=function(N){switch(U){case 1:case 2:case 3:var G=3;break;default:G=U}var F=U;U=G;try{return N()}finally{U=F}},i.unstable_requestPaint=function(){Q=!0},i.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=U;U=N;try{return G()}finally{U=F}},i.unstable_scheduleCallback=function(N,G,F){var rt=i.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?rt+F:rt):F=rt,N){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=F+y,N={id:z++,callback:G,priorityLevel:N,startTime:F,expirationTime:y,sortIndex:-1},F>rt?(N.sortIndex=F,o(p,N),u(x)===null&&N===u(p)&&(Y?(K($),$=-1):Y=!0,Gt(V,F-rt))):(N.sortIndex=y,o(x,N),q||H||(q=!0,at||(at=!0,Lt()))),N},i.unstable_shouldYield=ee,i.unstable_wrapCallback=function(N){var G=U;return function(){var F=U;U=G;try{return N.apply(this,arguments)}finally{U=F}}}})(mu)),mu}var kh;function Rg(){return kh||(kh=1,hu.exports=jg()),hu.exports}var pu={exports:{}},te={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function Tg(){if(Qh)return te;Qh=1;var i=Mu();function o(x){var p="https://react.dev/errors/"+x;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)p+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+x+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var r={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(x,p,z){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:O==null?null:""+O,children:x,containerInfo:p,implementation:z}}var v=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(x,p){if(x==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,te.createPortal=function(x,p){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(o(299));return m(x,p,null,z)},te.flushSync=function(x){var p=v.T,z=r.p;try{if(v.T=null,r.p=2,x)return x()}finally{v.T=p,r.p=z,r.d.f()}},te.preconnect=function(x,p){typeof x=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(x,p))},te.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},te.preinit=function(x,p){if(typeof x=="string"&&p&&typeof p.as=="string"){var z=p.as,O=S(z,p.crossOrigin),U=typeof p.integrity=="string"?p.integrity:void 0,H=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;z==="style"?r.d.S(x,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:O,integrity:U,fetchPriority:H}):z==="script"&&r.d.X(x,{crossOrigin:O,integrity:U,fetchPriority:H,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},te.preinitModule=function(x,p){if(typeof x=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var z=S(p.as,p.crossOrigin);r.d.M(x,{crossOrigin:z,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(x)},te.preload=function(x,p){if(typeof x=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var z=p.as,O=S(z,p.crossOrigin);r.d.L(x,z,{crossOrigin:O,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},te.preloadModule=function(x,p){if(typeof x=="string")if(p){var z=S(p.as,p.crossOrigin);r.d.m(x,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:z,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(x)},te.requestFormReset=function(x){r.d.r(x)},te.unstable_batchedUpdates=function(x,p){return x(p)},te.useFormState=function(x,p,z){return v.H.useFormState(x,p,z)},te.useFormStatus=function(){return v.H.useHostTransitionStatus()},te.version="19.1.1",te}var Xh;function Ng(){if(Xh)return pu.exports;Xh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),pu.exports=Tg(),pu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function Dg(){if(Vh)return ti;Vh=1;var i=Rg(),o=Mu(),u=Ng();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function S(t){if(m(t)!==t)throw Error(r(188))}function x(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(r(188));return e!==t?null:t}for(var n=t,a=e;;){var l=n.return;if(l===null)break;var c=l.alternate;if(c===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===n)return S(l),t;if(c===a)return S(l),e;c=c.sibling}throw Error(r(188))}if(n.return!==a.return)n=l,a=c;else{for(var s=!1,d=l.child;d;){if(d===n){s=!0,n=l,a=c;break}if(d===a){s=!0,a=l,n=c;break}d=d.sibling}if(!s){for(d=c.child;d;){if(d===n){s=!0,n=c,a=l;break}if(d===a){s=!0,a=c,n=l;break}d=d.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==a)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?t:e}function p(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=p(t),e!==null)return e;t=t.sibling}return null}var z=Object.assign,O=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),K=Symbol.for("react.consumer"),X=Symbol.for("react.context"),et=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),At=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function Lt(t){return t===null||typeof t!="object"?null:(t=ae&&t[ae]||t["@@iterator"],typeof t=="function"?t:null)}var Xe=Symbol.for("react.client.reference");function Ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Xe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case q:return"Fragment";case Q:return"Profiler";case Y:return"StrictMode";case V:return"Suspense";case at:return"SuspenseList";case At:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case H:return"Portal";case X:return(t.displayName||"Context")+".Provider";case K:return(t._context.displayName||"Context")+".Consumer";case et:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return e=t.displayName||null,e!==null?e:Ve(t.type)||"Memo";case jt:e=t._payload,t=t._init;try{return Ve(t(e))}catch{}}return null}var Gt=Array.isArray,N=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},rt=[],y=-1;function _(t){return{current:t}}function L(t){0>y||(t.current=rt[y],rt[y]=null,y--)}function k(t,e){y++,rt[y]=t.current,t.current=e}var W=_(null),ut=_(null),P=_(null),kt=_(null);function pt(t,e){switch(k(P,e),k(ut,t),k(W,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?fh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=fh(e),t=dh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}L(W),k(W,t)}function Ft(){L(W),L(ut),L(P)}function qn(t){t.memoizedState!==null&&k(kt,t);var e=W.current,n=dh(e,t.type);e!==n&&(k(ut,t),k(W,n))}function Ze(t){ut.current===t&&(L(W),L(ut)),kt.current===t&&(L(kt),Jl._currentValue=F)}var be=Object.prototype.hasOwnProperty,Wc=i.unstable_scheduleCallback,Fc=i.unstable_cancelCallback,tp=i.unstable_shouldYield,ep=i.unstable_requestPaint,Ue=i.unstable_now,np=i.unstable_getCurrentPriorityLevel,Xu=i.unstable_ImmediatePriority,Vu=i.unstable_UserBlockingPriority,fi=i.unstable_NormalPriority,ap=i.unstable_LowPriority,Zu=i.unstable_IdlePriority,lp=i.log,ip=i.unstable_setDisableYieldValue,nl=null,se=null;function hn(t){if(typeof lp=="function"&&ip(t),se&&typeof se.setStrictMode=="function")try{se.setStrictMode(nl,t)}catch{}}var fe=Math.clz32?Math.clz32:rp,cp=Math.log,op=Math.LN2;function rp(t){return t>>>=0,t===0?32:31-(cp(t)/op|0)|0}var di=256,hi=4194304;function Yn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mi(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var l=0,c=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var d=a&134217727;return d!==0?(a=d&~c,a!==0?l=Yn(a):(s&=d,s!==0?l=Yn(s):n||(n=d&~t,n!==0&&(l=Yn(n))))):(d=a&~c,d!==0?l=Yn(d):s!==0?l=Yn(s):n||(n=a&~t,n!==0&&(l=Yn(n)))),l===0?0:e!==0&&e!==l&&(e&c)===0&&(c=l&-l,n=e&-e,c>=n||c===32&&(n&4194048)!==0)?e:l}function al(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function up(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ku(){var t=di;return di<<=1,(di&4194048)===0&&(di=256),t}function Ju(){var t=hi;return hi<<=1,(hi&62914560)===0&&(hi=4194304),t}function Ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ll(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function sp(t,e,n,a,l,c){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var d=t.entanglements,g=t.expirationTimes,E=t.hiddenUpdates;for(n=s&~n;0<n;){var D=31-fe(n),C=1<<D;d[D]=0,g[D]=-1;var j=E[D];if(j!==null)for(E[D]=null,D=0;D<j.length;D++){var T=j[D];T!==null&&(T.lane&=-536870913)}n&=~C}a!==0&&$u(t,a,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(s&~e))}function $u(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-fe(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&4194090}function Wu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-fe(n),l=1<<a;l&e|t[a]&e&&(t[a]|=e),n&=~l}}function Pc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function to(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Fu(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Mh(t.type))}function fp(t,e){var n=G.p;try{return G.p=t,e()}finally{G.p=n}}var mn=Math.random().toString(36).slice(2),It="__reactFiber$"+mn,le="__reactProps$"+mn,oa="__reactContainer$"+mn,eo="__reactEvents$"+mn,dp="__reactListeners$"+mn,hp="__reactHandles$"+mn,Iu="__reactResources$"+mn,il="__reactMarker$"+mn;function no(t){delete t[It],delete t[le],delete t[eo],delete t[dp],delete t[hp]}function ra(t){var e=t[It];if(e)return e;for(var n=t.parentNode;n;){if(e=n[oa]||n[It]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gh(t);t!==null;){if(n=t[It])return n;t=gh(t)}return e}t=n,n=t.parentNode}return null}function ua(t){if(t=t[It]||t[oa]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function cl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function sa(t){var e=t[Iu];return e||(e=t[Iu]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Qt(t){t[il]=!0}var Pu=new Set,ts={};function Ln(t,e){fa(t,e),fa(t+"Capture",e)}function fa(t,e){for(ts[t]=e,t=0;t<e.length;t++)Pu.add(e[t])}var mp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),es={},ns={};function pp(t){return be.call(ns,t)?!0:be.call(es,t)?!1:mp.test(t)?ns[t]=!0:(es[t]=!0,!1)}function pi(t,e,n){if(pp(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function gi(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Ke(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}var ao,as;function da(t){if(ao===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ao=e&&e[1]||"",as=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ao+t+as}var lo=!1;function io(t,e){if(!t||lo)return"";lo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(T){var j=T}Reflect.construct(t,[],C)}else{try{C.call()}catch(T){j=T}t.call(C.prototype)}}else{try{throw Error()}catch(T){j=T}(C=t())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(T){if(T&&j&&typeof T.stack=="string")return[T.stack,j.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),s=c[0],d=c[1];if(s&&d){var g=s.split(`
`),E=d.split(`
`);for(l=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;if(a===g.length||l===E.length)for(a=g.length-1,l=E.length-1;1<=a&&0<=l&&g[a]!==E[l];)l--;for(;1<=a&&0<=l;a--,l--)if(g[a]!==E[l]){if(a!==1||l!==1)do if(a--,l--,0>l||g[a]!==E[l]){var D=`
`+g[a].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=a&&0<=l);break}}}finally{lo=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?da(n):""}function gp(t){switch(t.tag){case 26:case 27:case 5:return da(t.type);case 16:return da("Lazy");case 13:return da("Suspense");case 19:return da("SuspenseList");case 0:case 15:return io(t.type,!1);case 11:return io(t.type.render,!1);case 1:return io(t.type,!0);case 31:return da("Activity");default:return""}}function ls(t){try{var e="";do e+=gp(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function is(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vp(t){var e=is(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,c=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,c.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vi(t){t._valueTracker||(t._valueTracker=vp(t))}function cs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=is(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function xi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var xp=/[\n"\\]/g;function we(t){return t.replace(xp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function co(t,e,n,a,l,c,s,d){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Se(e)):t.value!==""+Se(e)&&(t.value=""+Se(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?oo(t,s,Se(e)):n!=null?oo(t,s,Se(n)):a!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+Se(d):t.removeAttribute("name")}function os(t,e,n,a,l,c,s,d){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;n=n!=null?""+Se(n):"",e=e!=null?""+Se(e):n,d||e===t.value||(t.value=e),t.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=d?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function oo(t,e,n){e==="number"&&xi(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ha(t,e,n,a){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&a&&(t[n].defaultSelected=!0)}else{for(n=""+Se(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,a&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function rs(t,e,n){if(e!=null&&(e=""+Se(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Se(n):""}function us(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(r(92));if(Gt(a)){if(1<a.length)throw Error(r(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=Se(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a)}function ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ss(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||yp.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function fs(t,e,n){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var l in e)a=e[l],e.hasOwnProperty(l)&&n[l]!==a&&ss(t,l,a)}else for(var c in e)e.hasOwnProperty(c)&&ss(t,c,e[c])}function ro(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yi(t){return Sp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var uo=null;function so(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pa=null,ga=null;function ds(t){var e=ua(t);if(e&&(t=e.stateNode)){var n=t[le]||null;t:switch(t=e.stateNode,e.type){case"input":if(co(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+we(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var l=a[le]||null;if(!l)throw Error(r(90));co(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&cs(a)}break t;case"textarea":rs(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&ha(t,!!n.multiple,e,!1)}}}var fo=!1;function hs(t,e,n){if(fo)return t(e,n);fo=!0;try{var a=t(e);return a}finally{if(fo=!1,(pa!==null||ga!==null)&&(lc(),pa&&(e=pa,t=ga,ga=pa=null,ds(e),t)))for(e=0;e<t.length;e++)ds(t[e])}}function ol(t,e){var n=t.stateNode;if(n===null)return null;var a=n[le]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(r(231,e,typeof n));return n}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ho=!1;if(Je)try{var rl={};Object.defineProperty(rl,"passive",{get:function(){ho=!0}}),window.addEventListener("test",rl,rl),window.removeEventListener("test",rl,rl)}catch{ho=!1}var pn=null,mo=null,bi=null;function ms(){if(bi)return bi;var t,e=mo,n=e.length,a,l="value"in pn?pn.value:pn.textContent,c=l.length;for(t=0;t<n&&e[t]===l[t];t++);var s=n-t;for(a=1;a<=s&&e[n-a]===l[c-a];a++);return bi=l.slice(t,1<a?1-a:void 0)}function Si(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wi(){return!0}function ps(){return!1}function ie(t){function e(n,a,l,c,s){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=c,this.target=s,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(n=t[d],this[d]=n?n(c):c[d]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?wi:ps,this.isPropagationStopped=ps,this}return z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),e}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ai=ie(Gn),ul=z({},Gn,{view:0,detail:0}),wp=ie(ul),po,go,sl,Ei=z({},ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sl&&(sl&&t.type==="mousemove"?(po=t.screenX-sl.screenX,go=t.screenY-sl.screenY):go=po=0,sl=t),po)},movementY:function(t){return"movementY"in t?t.movementY:go}}),gs=ie(Ei),Ap=z({},Ei,{dataTransfer:0}),Ep=ie(Ap),zp=z({},ul,{relatedTarget:0}),vo=ie(zp),jp=z({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rp=ie(jp),Tp=z({},Gn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Np=ie(Tp),Dp=z({},Gn,{data:0}),vs=ie(Dp),Mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Op={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _p(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Cp[t])?!!e[t]:!1}function xo(){return _p}var Up=z({},ul,{key:function(t){if(t.key){var e=Mp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Si(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Op[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xo,charCode:function(t){return t.type==="keypress"?Si(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Si(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bp=ie(Up),Hp=z({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xs=ie(Hp),qp=z({},ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xo}),Yp=ie(qp),Lp=z({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gp=ie(Lp),kp=z({},Ei,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qp=ie(kp),Xp=z({},Gn,{newState:0,oldState:0}),Vp=ie(Xp),Zp=[9,13,27,32],yo=Je&&"CompositionEvent"in window,fl=null;Je&&"documentMode"in document&&(fl=document.documentMode);var Kp=Je&&"TextEvent"in window&&!fl,ys=Je&&(!yo||fl&&8<fl&&11>=fl),bs=" ",Ss=!1;function ws(t,e){switch(t){case"keyup":return Zp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function As(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var va=!1;function Jp(t,e){switch(t){case"compositionend":return As(e);case"keypress":return e.which!==32?null:(Ss=!0,bs);case"textInput":return t=e.data,t===bs&&Ss?null:t;default:return null}}function $p(t,e){if(va)return t==="compositionend"||!yo&&ws(t,e)?(t=ms(),bi=mo=pn=null,va=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ys&&e.locale!=="ko"?null:e.data;default:return null}}var Wp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Es(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Wp[t.type]:e==="textarea"}function zs(t,e,n,a){pa?ga?ga.push(a):ga=[a]:pa=a,e=sc(e,"onChange"),0<e.length&&(n=new Ai("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var dl=null,hl=null;function Fp(t){ch(t,0)}function zi(t){var e=cl(t);if(cs(e))return t}function js(t,e){if(t==="change")return e}var Rs=!1;if(Je){var bo;if(Je){var So="oninput"in document;if(!So){var Ts=document.createElement("div");Ts.setAttribute("oninput","return;"),So=typeof Ts.oninput=="function"}bo=So}else bo=!1;Rs=bo&&(!document.documentMode||9<document.documentMode)}function Ns(){dl&&(dl.detachEvent("onpropertychange",Ds),hl=dl=null)}function Ds(t){if(t.propertyName==="value"&&zi(hl)){var e=[];zs(e,hl,t,so(t)),hs(Fp,e)}}function Ip(t,e,n){t==="focusin"?(Ns(),dl=e,hl=n,dl.attachEvent("onpropertychange",Ds)):t==="focusout"&&Ns()}function Pp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zi(hl)}function t0(t,e){if(t==="click")return zi(e)}function e0(t,e){if(t==="input"||t==="change")return zi(e)}function n0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var de=typeof Object.is=="function"?Object.is:n0;function ml(t,e){if(de(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!be.call(e,l)||!de(t[l],e[l]))return!1}return!0}function Ms(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Os(t,e){var n=Ms(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Ms(n)}}function Cs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _s(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=xi(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xi(t.document)}return e}function wo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var a0=Je&&"documentMode"in document&&11>=document.documentMode,xa=null,Ao=null,pl=null,Eo=!1;function Us(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eo||xa==null||xa!==xi(a)||(a=xa,"selectionStart"in a&&wo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),pl&&ml(pl,a)||(pl=a,a=sc(Ao,"onSelect"),0<a.length&&(e=new Ai("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=xa)))}function kn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ya={animationend:kn("Animation","AnimationEnd"),animationiteration:kn("Animation","AnimationIteration"),animationstart:kn("Animation","AnimationStart"),transitionrun:kn("Transition","TransitionRun"),transitionstart:kn("Transition","TransitionStart"),transitioncancel:kn("Transition","TransitionCancel"),transitionend:kn("Transition","TransitionEnd")},zo={},Bs={};Je&&(Bs=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function Qn(t){if(zo[t])return zo[t];if(!ya[t])return t;var e=ya[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bs)return zo[t]=e[n];return t}var Hs=Qn("animationend"),qs=Qn("animationiteration"),Ys=Qn("animationstart"),l0=Qn("transitionrun"),i0=Qn("transitionstart"),c0=Qn("transitioncancel"),Ls=Qn("transitionend"),Gs=new Map,jo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jo.push("scrollEnd");function Me(t,e){Gs.set(t,e),Ln(e,[t])}var ks=new WeakMap;function Ae(t,e){if(typeof t=="object"&&t!==null){var n=ks.get(t);return n!==void 0?n:(e={value:t,source:e,stack:ls(e)},ks.set(t,e),e)}return{value:t,source:e,stack:ls(e)}}var Ee=[],ba=0,Ro=0;function ji(){for(var t=ba,e=Ro=ba=0;e<t;){var n=Ee[e];Ee[e++]=null;var a=Ee[e];Ee[e++]=null;var l=Ee[e];Ee[e++]=null;var c=Ee[e];if(Ee[e++]=null,a!==null&&l!==null){var s=a.pending;s===null?l.next=l:(l.next=s.next,s.next=l),a.pending=l}c!==0&&Qs(n,l,c)}}function Ri(t,e,n,a){Ee[ba++]=t,Ee[ba++]=e,Ee[ba++]=n,Ee[ba++]=a,Ro|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function To(t,e,n,a){return Ri(t,e,n,a),Ti(t)}function Sa(t,e){return Ri(t,null,null,e),Ti(t)}function Qs(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var l=!1,c=t.return;c!==null;)c.childLanes|=n,a=c.alternate,a!==null&&(a.childLanes|=n),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&e!==null&&(l=31-fe(n),t=c.hiddenUpdates,a=t[l],a===null?t[l]=[e]:a.push(e),e.lane=n|536870912),c):null}function Ti(t){if(50<Ll)throw Ll=0,_r=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var wa={};function o0(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function he(t,e,n,a){return new o0(t,e,n,a)}function No(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $e(t,e){var n=t.alternate;return n===null?(n=he(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Xs(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ni(t,e,n,a,l,c){var s=0;if(a=t,typeof t=="function")No(t)&&(s=1);else if(typeof t=="string")s=ug(t,n,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case At:return t=he(31,n,e,l),t.elementType=At,t.lanes=c,t;case q:return Xn(n.children,l,c,e);case Y:s=8,l|=24;break;case Q:return t=he(12,n,e,l|2),t.elementType=Q,t.lanes=c,t;case V:return t=he(13,n,e,l),t.elementType=V,t.lanes=c,t;case at:return t=he(19,n,e,l),t.elementType=at,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:case X:s=10;break t;case K:s=9;break t;case et:s=11;break t;case $:s=14;break t;case jt:s=16,a=null;break t}s=29,n=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=he(s,n,e,l),e.elementType=t,e.type=a,e.lanes=c,e}function Xn(t,e,n,a){return t=he(7,t,a,e),t.lanes=n,t}function Do(t,e,n){return t=he(6,t,null,e),t.lanes=n,t}function Mo(t,e,n){return e=he(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Aa=[],Ea=0,Di=null,Mi=0,ze=[],je=0,Vn=null,We=1,Fe="";function Zn(t,e){Aa[Ea++]=Mi,Aa[Ea++]=Di,Di=t,Mi=e}function Vs(t,e,n){ze[je++]=We,ze[je++]=Fe,ze[je++]=Vn,Vn=t;var a=We;t=Fe;var l=32-fe(a)-1;a&=~(1<<l),n+=1;var c=32-fe(e)+l;if(30<c){var s=l-l%5;c=(a&(1<<s)-1).toString(32),a>>=s,l-=s,We=1<<32-fe(e)+l|n<<l|a,Fe=c+t}else We=1<<c|n<<l|a,Fe=t}function Oo(t){t.return!==null&&(Zn(t,1),Vs(t,1,0))}function Co(t){for(;t===Di;)Di=Aa[--Ea],Aa[Ea]=null,Mi=Aa[--Ea],Aa[Ea]=null;for(;t===Vn;)Vn=ze[--je],ze[je]=null,Fe=ze[--je],ze[je]=null,We=ze[--je],ze[je]=null}var ne=null,Mt=null,mt=!1,Kn=null,Be=!1,_o=Error(r(519));function Jn(t){var e=Error(r(418,""));throw xl(Ae(e,t)),_o}function Zs(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[It]=t,e[le]=a,n){case"dialog":ft("cancel",e),ft("close",e);break;case"iframe":case"object":case"embed":ft("load",e);break;case"video":case"audio":for(n=0;n<kl.length;n++)ft(kl[n],e);break;case"source":ft("error",e);break;case"img":case"image":case"link":ft("error",e),ft("load",e);break;case"details":ft("toggle",e);break;case"input":ft("invalid",e),os(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),vi(e);break;case"select":ft("invalid",e);break;case"textarea":ft("invalid",e),us(e,a.value,a.defaultValue,a.children),vi(e)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||sh(e.textContent,n)?(a.popover!=null&&(ft("beforetoggle",e),ft("toggle",e)),a.onScroll!=null&&ft("scroll",e),a.onScrollEnd!=null&&ft("scrollend",e),a.onClick!=null&&(e.onclick=fc),e=!0):e=!1,e||Jn(t)}function Ks(t){for(ne=t.return;ne;)switch(ne.tag){case 5:case 13:Be=!1;return;case 27:case 3:Be=!0;return;default:ne=ne.return}}function gl(t){if(t!==ne)return!1;if(!mt)return Ks(t),mt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Wr(t.type,t.memoizedProps)),n=!n),n&&Mt&&Jn(t),Ks(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Mt=Ce(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Mt=null}}else e===27?(e=Mt,Mn(t.type)?(t=tu,tu=null,Mt=t):Mt=e):Mt=ne?Ce(t.stateNode.nextSibling):null;return!0}function vl(){Mt=ne=null,mt=!1}function Js(){var t=Kn;return t!==null&&(re===null?re=t:re.push.apply(re,t),Kn=null),t}function xl(t){Kn===null?Kn=[t]:Kn.push(t)}var Uo=_(null),$n=null,Ie=null;function gn(t,e,n){k(Uo,e._currentValue),e._currentValue=n}function Pe(t){t._currentValue=Uo.current,L(Uo)}function Bo(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function Ho(t,e,n,a){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var s=l.child;c=c.firstContext;t:for(;c!==null;){var d=c;c=l;for(var g=0;g<e.length;g++)if(d.context===e[g]){c.lanes|=n,d=c.alternate,d!==null&&(d.lanes|=n),Bo(c.return,n,t),a||(s=null);break t}c=d.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Bo(s,n,t),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function yl(t,e,n,a){t=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(r(387));if(s=s.memoizedProps,s!==null){var d=l.type;de(l.pendingProps.value,s.value)||(t!==null?t.push(d):t=[d])}}else if(l===kt.current){if(s=l.alternate,s===null)throw Error(r(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Jl):t=[Jl])}l=l.return}t!==null&&Ho(e,t,n,a),e.flags|=262144}function Oi(t){for(t=t.firstContext;t!==null;){if(!de(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Wn(t){$n=t,Ie=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pt(t){return $s($n,t)}function Ci(t,e){return $n===null&&Wn(t),$s(t,e)}function $s(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Ie===null){if(t===null)throw Error(r(308));Ie=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ie=Ie.next=e;return n}var r0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},u0=i.unstable_scheduleCallback,s0=i.unstable_NormalPriority,qt={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qo(){return{controller:new r0,data:new Map,refCount:0}}function bl(t){t.refCount--,t.refCount===0&&u0(s0,function(){t.controller.abort()})}var Sl=null,Yo=0,za=0,ja=null;function f0(t,e){if(Sl===null){var n=Sl=[];Yo=0,za=Gr(),ja={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Yo++,e.then(Ws,Ws),e}function Ws(){if(--Yo===0&&Sl!==null){ja!==null&&(ja.status="fulfilled");var t=Sl;Sl=null,za=0,ja=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function d0(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<n.length;l++)(0,n[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Fs=N.S;N.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&f0(t,e),Fs!==null&&Fs(t,e)};var Fn=_(null);function Lo(){var t=Fn.current;return t!==null?t:zt.pooledCache}function _i(t,e){e===null?k(Fn,Fn.current):k(Fn,e.pool)}function Is(){var t=Lo();return t===null?null:{parent:qt._currentValue,pool:t}}var wl=Error(r(460)),Ps=Error(r(474)),Ui=Error(r(542)),Go={then:function(){}};function tf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bi(){}function ef(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Bi,Bi),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,af(t),t;default:if(typeof e.status=="string")e.then(Bi,Bi);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,af(t),t}throw Al=e,wl}}var Al=null;function nf(){if(Al===null)throw Error(r(459));var t=Al;return Al=null,t}function af(t){if(t===wl||t===Ui)throw Error(r(483))}var vn=!1;function ko(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qo(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function xn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function yn(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(vt&2)!==0){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=Ti(t),Qs(t,null,n),e}return Ri(t,a,e,n),Ti(t)}function El(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Wu(t,n)}}function Xo(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?l=c=s:c=c.next=s,n=n.next}while(n!==null);c===null?l=c=e:c=c.next=e}else l=c=e;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Vo=!1;function zl(){if(Vo){var t=ja;if(t!==null)throw t}}function jl(t,e,n,a){Vo=!1;var l=t.updateQueue;vn=!1;var c=l.firstBaseUpdate,s=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var g=d,E=g.next;g.next=null,s===null?c=E:s.next=E,s=g;var D=t.alternate;D!==null&&(D=D.updateQueue,d=D.lastBaseUpdate,d!==s&&(d===null?D.firstBaseUpdate=E:d.next=E,D.lastBaseUpdate=g))}if(c!==null){var C=l.baseState;s=0,D=E=g=null,d=c;do{var j=d.lane&-536870913,T=j!==d.lane;if(T?(dt&j)===j:(a&j)===j){j!==0&&j===za&&(Vo=!0),D!==null&&(D=D.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var nt=t,I=d;j=e;var wt=n;switch(I.tag){case 1:if(nt=I.payload,typeof nt=="function"){C=nt.call(wt,C,j);break t}C=nt;break t;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=I.payload,j=typeof nt=="function"?nt.call(wt,C,j):nt,j==null)break t;C=z({},C,j);break t;case 2:vn=!0}}j=d.callback,j!==null&&(t.flags|=64,T&&(t.flags|=8192),T=l.callbacks,T===null?l.callbacks=[j]:T.push(j))}else T={lane:j,tag:d.tag,payload:d.payload,callback:d.callback,next:null},D===null?(E=D=T,g=C):D=D.next=T,s|=j;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;T=d,d=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);D===null&&(g=C),l.baseState=g,l.firstBaseUpdate=E,l.lastBaseUpdate=D,c===null&&(l.shared.lanes=0),Rn|=s,t.lanes=s,t.memoizedState=C}}function lf(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function cf(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)lf(n[t],e)}var Ra=_(null),Hi=_(0);function of(t,e){t=on,k(Hi,t),k(Ra,e),on=t|e.baseLanes}function Zo(){k(Hi,on),k(Ra,Ra.current)}function Ko(){on=Hi.current,L(Ra),L(Hi)}var bn=0,ct=null,bt=null,Ut=null,qi=!1,Ta=!1,In=!1,Yi=0,Rl=0,Na=null,h0=0;function Ct(){throw Error(r(321))}function Jo(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!de(t[n],e[n]))return!1;return!0}function $o(t,e,n,a,l,c){return bn=c,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,N.H=t===null||t.memoizedState===null?Xf:Vf,In=!1,c=n(a,l),In=!1,Ta&&(c=uf(e,n,a,l)),rf(t),c}function rf(t){N.H=Vi;var e=bt!==null&&bt.next!==null;if(bn=0,Ut=bt=ct=null,qi=!1,Rl=0,Na=null,e)throw Error(r(300));t===null||Xt||(t=t.dependencies,t!==null&&Oi(t)&&(Xt=!0))}function uf(t,e,n,a){ct=t;var l=0;do{if(Ta&&(Na=null),Rl=0,Ta=!1,25<=l)throw Error(r(301));if(l+=1,Ut=bt=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}N.H=b0,c=e(n,a)}while(Ta);return c}function m0(){var t=N.H,e=t.useState()[0];return e=typeof e.then=="function"?Tl(e):e,t=t.useState()[0],(bt!==null?bt.memoizedState:null)!==t&&(ct.flags|=1024),e}function Wo(){var t=Yi!==0;return Yi=0,t}function Fo(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Io(t){if(qi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}qi=!1}bn=0,Ut=bt=ct=null,Ta=!1,Rl=Yi=0,Na=null}function ce(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?ct.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Bt(){if(bt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ut===null?ct.memoizedState:Ut.next;if(e!==null)Ut=e,bt=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ut===null?ct.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tl(t){var e=Rl;return Rl+=1,Na===null&&(Na=[]),t=ef(Na,t,e),e=ct,(Ut===null?e.memoizedState:Ut.next)===null&&(e=e.alternate,N.H=e===null||e.memoizedState===null?Xf:Vf),t}function Li(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Tl(t);if(t.$$typeof===X)return Pt(t)}throw Error(r(438,String(t)))}function tr(t){var e=null,n=ct.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=ct.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Po(),ct.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=ee;return e.index++,n}function tn(t,e){return typeof e=="function"?e(t):e}function Gi(t){var e=Bt();return er(e,bt,t)}function er(t,e,n){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var l=t.baseQueue,c=a.pending;if(c!==null){if(l!==null){var s=l.next;l.next=c.next,c.next=s}e.baseQueue=l=c,a.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{e=l.next;var d=s=null,g=null,E=e,D=!1;do{var C=E.lane&-536870913;if(C!==E.lane?(dt&C)===C:(bn&C)===C){var j=E.revertLane;if(j===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),C===za&&(D=!0);else if((bn&j)===j){E=E.next,j===za&&(D=!0);continue}else C={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},g===null?(d=g=C,s=c):g=g.next=C,ct.lanes|=j,Rn|=j;C=E.action,In&&n(c,C),c=E.hasEagerState?E.eagerState:n(c,C)}else j={lane:C,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},g===null?(d=g=j,s=c):g=g.next=j,ct.lanes|=C,Rn|=C;E=E.next}while(E!==null&&E!==e);if(g===null?s=c:g.next=d,!de(c,t.memoizedState)&&(Xt=!0,D&&(n=ja,n!==null)))throw n;t.memoizedState=c,t.baseState=s,t.baseQueue=g,a.lastRenderedState=c}return l===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function nr(t){var e=Bt(),n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=t;var a=n.dispatch,l=n.pending,c=e.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do c=t(c,s.action),s=s.next;while(s!==l);de(c,e.memoizedState)||(Xt=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),n.lastRenderedState=c}return[c,a]}function sf(t,e,n){var a=ct,l=Bt(),c=mt;if(c){if(n===void 0)throw Error(r(407));n=n()}else n=e();var s=!de((bt||l).memoizedState,n);s&&(l.memoizedState=n,Xt=!0),l=l.queue;var d=hf.bind(null,a,l,t);if(Nl(2048,8,d,[t]),l.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(a.flags|=2048,Da(9,ki(),df.bind(null,a,l,n,e),null),zt===null)throw Error(r(349));c||(bn&124)!==0||ff(a,e,n)}return n}function ff(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e=Po(),ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function df(t,e,n,a){e.value=n,e.getSnapshot=a,mf(e)&&pf(t)}function hf(t,e,n){return n(function(){mf(e)&&pf(t)})}function mf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!de(t,n)}catch{return!0}}function pf(t){var e=Sa(t,2);e!==null&&xe(e,t,2)}function ar(t){var e=ce();if(typeof t=="function"){var n=t;if(t=n(),In){hn(!0);try{n()}finally{hn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:t},e}function gf(t,e,n,a){return t.baseState=n,er(t,bt,typeof a=="function"?a:tn)}function p0(t,e,n,a,l){if(Xi(t))throw Error(r(485));if(t=e.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){c.listeners.push(s)}};N.T!==null?n(!0):c.isTransition=!1,a(c),n=e.pending,n===null?(c.next=e.pending=c,vf(e,c)):(c.next=n.next,e.pending=n.next=c)}}function vf(t,e){var n=e.action,a=e.payload,l=t.state;if(e.isTransition){var c=N.T,s={};N.T=s;try{var d=n(l,a),g=N.S;g!==null&&g(s,d),xf(t,e,d)}catch(E){lr(t,e,E)}finally{N.T=c}}else try{c=n(l,a),xf(t,e,c)}catch(E){lr(t,e,E)}}function xf(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){yf(t,e,a)},function(a){return lr(t,e,a)}):yf(t,e,n)}function yf(t,e,n){e.status="fulfilled",e.value=n,bf(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,vf(t,n)))}function lr(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,bf(e),e=e.next;while(e!==a)}t.action=null}function bf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Sf(t,e){return e}function wf(t,e){if(mt){var n=zt.formState;if(n!==null){t:{var a=ct;if(mt){if(Mt){e:{for(var l=Mt,c=Be;l.nodeType!==8;){if(!c){l=null;break e}if(l=Ce(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Mt=Ce(l.nextSibling),a=l.data==="F!";break t}}Jn(a)}a=!1}a&&(e=n[0])}}return n=ce(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sf,lastRenderedState:e},n.queue=a,n=Gf.bind(null,ct,a),a.dispatch=n,a=ar(!1),c=ur.bind(null,ct,!1,a.queue),a=ce(),l={state:e,dispatch:null,action:t,pending:null},a.queue=l,n=p0.bind(null,ct,l,c,n),l.dispatch=n,a.memoizedState=t,[e,n,!1]}function Af(t){var e=Bt();return Ef(e,bt,t)}function Ef(t,e,n){if(e=er(t,e,Sf)[0],t=Gi(tn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Tl(e)}catch(s){throw s===wl?Ui:s}else a=e;e=Bt();var l=e.queue,c=l.dispatch;return n!==e.memoizedState&&(ct.flags|=2048,Da(9,ki(),g0.bind(null,l,n),null)),[a,c,t]}function g0(t,e){t.action=e}function zf(t){var e=Bt(),n=bt;if(n!==null)return Ef(e,n,t);Bt(),e=e.memoizedState,n=Bt();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function Da(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=ct.updateQueue,e===null&&(e=Po(),ct.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function ki(){return{destroy:void 0,resource:void 0}}function jf(){return Bt().memoizedState}function Qi(t,e,n,a){var l=ce();a=a===void 0?null:a,ct.flags|=t,l.memoizedState=Da(1|e,ki(),n,a)}function Nl(t,e,n,a){var l=Bt();a=a===void 0?null:a;var c=l.memoizedState.inst;bt!==null&&a!==null&&Jo(a,bt.memoizedState.deps)?l.memoizedState=Da(e,c,n,a):(ct.flags|=t,l.memoizedState=Da(1|e,c,n,a))}function Rf(t,e){Qi(8390656,8,t,e)}function Tf(t,e){Nl(2048,8,t,e)}function Nf(t,e){return Nl(4,2,t,e)}function Df(t,e){return Nl(4,4,t,e)}function Mf(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Of(t,e,n){n=n!=null?n.concat([t]):null,Nl(4,4,Mf.bind(null,e,t),n)}function ir(){}function Cf(t,e){var n=Bt();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&Jo(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function _f(t,e){var n=Bt();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&Jo(e,a[1]))return a[0];if(a=t(),In){hn(!0);try{t()}finally{hn(!1)}}return n.memoizedState=[a,e],a}function cr(t,e,n){return n===void 0||(bn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=Hd(),ct.lanes|=t,Rn|=t,n)}function Uf(t,e,n,a){return de(n,e)?n:Ra.current!==null?(t=cr(t,n,a),de(t,e)||(Xt=!0),t):(bn&42)===0?(Xt=!0,t.memoizedState=n):(t=Hd(),ct.lanes|=t,Rn|=t,e)}function Bf(t,e,n,a,l){var c=G.p;G.p=c!==0&&8>c?c:8;var s=N.T,d={};N.T=d,ur(t,!1,e,n);try{var g=l(),E=N.S;if(E!==null&&E(d,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var D=d0(g,a);Dl(t,e,D,ve(t))}else Dl(t,e,a,ve(t))}catch(C){Dl(t,e,{then:function(){},status:"rejected",reason:C},ve())}finally{G.p=c,N.T=s}}function v0(){}function or(t,e,n,a){if(t.tag!==5)throw Error(r(476));var l=Hf(t).queue;Bf(t,l,e,F,n===null?v0:function(){return qf(t),n(a)})}function Hf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:F},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function qf(t){var e=Hf(t).next.queue;Dl(t,e,{},ve())}function rr(){return Pt(Jl)}function Yf(){return Bt().memoizedState}function Lf(){return Bt().memoizedState}function x0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ve();t=xn(n);var a=yn(e,t,n);a!==null&&(xe(a,e,n),El(a,e,n)),e={cache:qo()},t.payload=e;return}e=e.return}}function y0(t,e,n){var a=ve();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Xi(t)?kf(e,n):(n=To(t,e,n,a),n!==null&&(xe(n,t,a),Qf(n,e,a)))}function Gf(t,e,n){var a=ve();Dl(t,e,n,a)}function Dl(t,e,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xi(t))kf(e,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var s=e.lastRenderedState,d=c(s,n);if(l.hasEagerState=!0,l.eagerState=d,de(d,s))return Ri(t,e,l,0),zt===null&&ji(),!1}catch{}finally{}if(n=To(t,e,l,a),n!==null)return xe(n,t,a),Qf(n,e,a),!0}return!1}function ur(t,e,n,a){if(a={lane:2,revertLane:Gr(),action:a,hasEagerState:!1,eagerState:null,next:null},Xi(t)){if(e)throw Error(r(479))}else e=To(t,n,a,2),e!==null&&xe(e,t,2)}function Xi(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function kf(t,e){Ta=qi=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qf(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Wu(t,n)}}var Vi={readContext:Pt,use:Li,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useLayoutEffect:Ct,useInsertionEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useSyncExternalStore:Ct,useId:Ct,useHostTransitionStatus:Ct,useFormState:Ct,useActionState:Ct,useOptimistic:Ct,useMemoCache:Ct,useCacheRefresh:Ct},Xf={readContext:Pt,use:Li,useCallback:function(t,e){return ce().memoizedState=[t,e===void 0?null:e],t},useContext:Pt,useEffect:Rf,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Qi(4194308,4,Mf.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qi(4194308,4,t,e)},useInsertionEffect:function(t,e){Qi(4,2,t,e)},useMemo:function(t,e){var n=ce();e=e===void 0?null:e;var a=t();if(In){hn(!0);try{t()}finally{hn(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=ce();if(n!==void 0){var l=n(e);if(In){hn(!0);try{n(e)}finally{hn(!1)}}}else l=e;return a.memoizedState=a.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},a.queue=t,t=t.dispatch=y0.bind(null,ct,t),[a.memoizedState,t]},useRef:function(t){var e=ce();return t={current:t},e.memoizedState=t},useState:function(t){t=ar(t);var e=t.queue,n=Gf.bind(null,ct,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:ir,useDeferredValue:function(t,e){var n=ce();return cr(n,t,e)},useTransition:function(){var t=ar(!1);return t=Bf.bind(null,ct,t.queue,!0,!1),ce().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=ct,l=ce();if(mt){if(n===void 0)throw Error(r(407));n=n()}else{if(n=e(),zt===null)throw Error(r(349));(dt&124)!==0||ff(a,e,n)}l.memoizedState=n;var c={value:n,getSnapshot:e};return l.queue=c,Rf(hf.bind(null,a,c,t),[t]),a.flags|=2048,Da(9,ki(),df.bind(null,a,c,n,e),null),n},useId:function(){var t=ce(),e=zt.identifierPrefix;if(mt){var n=Fe,a=We;n=(a&~(1<<32-fe(a)-1)).toString(32)+n,e="«"+e+"R"+n,n=Yi++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=h0++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:rr,useFormState:wf,useActionState:wf,useOptimistic:function(t){var e=ce();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=ur.bind(null,ct,!0,n),n.dispatch=e,[t,e]},useMemoCache:tr,useCacheRefresh:function(){return ce().memoizedState=x0.bind(null,ct)}},Vf={readContext:Pt,use:Li,useCallback:Cf,useContext:Pt,useEffect:Tf,useImperativeHandle:Of,useInsertionEffect:Nf,useLayoutEffect:Df,useMemo:_f,useReducer:Gi,useRef:jf,useState:function(){return Gi(tn)},useDebugValue:ir,useDeferredValue:function(t,e){var n=Bt();return Uf(n,bt.memoizedState,t,e)},useTransition:function(){var t=Gi(tn)[0],e=Bt().memoizedState;return[typeof t=="boolean"?t:Tl(t),e]},useSyncExternalStore:sf,useId:Yf,useHostTransitionStatus:rr,useFormState:Af,useActionState:Af,useOptimistic:function(t,e){var n=Bt();return gf(n,bt,t,e)},useMemoCache:tr,useCacheRefresh:Lf},b0={readContext:Pt,use:Li,useCallback:Cf,useContext:Pt,useEffect:Tf,useImperativeHandle:Of,useInsertionEffect:Nf,useLayoutEffect:Df,useMemo:_f,useReducer:nr,useRef:jf,useState:function(){return nr(tn)},useDebugValue:ir,useDeferredValue:function(t,e){var n=Bt();return bt===null?cr(n,t,e):Uf(n,bt.memoizedState,t,e)},useTransition:function(){var t=nr(tn)[0],e=Bt().memoizedState;return[typeof t=="boolean"?t:Tl(t),e]},useSyncExternalStore:sf,useId:Yf,useHostTransitionStatus:rr,useFormState:zf,useActionState:zf,useOptimistic:function(t,e){var n=Bt();return bt!==null?gf(n,bt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:tr,useCacheRefresh:Lf},Ma=null,Ml=0;function Zi(t){var e=Ml;return Ml+=1,Ma===null&&(Ma=[]),ef(Ma,t,e)}function Ol(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ki(t,e){throw e.$$typeof===O?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Zf(t){var e=t._init;return e(t._payload)}function Kf(t){function e(w,b){if(t){var A=w.deletions;A===null?(w.deletions=[b],w.flags|=16):A.push(b)}}function n(w,b){if(!t)return null;for(;b!==null;)e(w,b),b=b.sibling;return null}function a(w){for(var b=new Map;w!==null;)w.key!==null?b.set(w.key,w):b.set(w.index,w),w=w.sibling;return b}function l(w,b){return w=$e(w,b),w.index=0,w.sibling=null,w}function c(w,b,A){return w.index=A,t?(A=w.alternate,A!==null?(A=A.index,A<b?(w.flags|=67108866,b):A):(w.flags|=67108866,b)):(w.flags|=1048576,b)}function s(w){return t&&w.alternate===null&&(w.flags|=67108866),w}function d(w,b,A,M){return b===null||b.tag!==6?(b=Do(A,w.mode,M),b.return=w,b):(b=l(b,A),b.return=w,b)}function g(w,b,A,M){var Z=A.type;return Z===q?D(w,b,A.props.children,M,A.key):b!==null&&(b.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===jt&&Zf(Z)===b.type)?(b=l(b,A.props),Ol(b,A),b.return=w,b):(b=Ni(A.type,A.key,A.props,null,w.mode,M),Ol(b,A),b.return=w,b)}function E(w,b,A,M){return b===null||b.tag!==4||b.stateNode.containerInfo!==A.containerInfo||b.stateNode.implementation!==A.implementation?(b=Mo(A,w.mode,M),b.return=w,b):(b=l(b,A.children||[]),b.return=w,b)}function D(w,b,A,M,Z){return b===null||b.tag!==7?(b=Xn(A,w.mode,M,Z),b.return=w,b):(b=l(b,A),b.return=w,b)}function C(w,b,A){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Do(""+b,w.mode,A),b.return=w,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case U:return A=Ni(b.type,b.key,b.props,null,w.mode,A),Ol(A,b),A.return=w,A;case H:return b=Mo(b,w.mode,A),b.return=w,b;case jt:var M=b._init;return b=M(b._payload),C(w,b,A)}if(Gt(b)||Lt(b))return b=Xn(b,w.mode,A,null),b.return=w,b;if(typeof b.then=="function")return C(w,Zi(b),A);if(b.$$typeof===X)return C(w,Ci(w,b),A);Ki(w,b)}return null}function j(w,b,A,M){var Z=b!==null?b.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return Z!==null?null:d(w,b,""+A,M);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case U:return A.key===Z?g(w,b,A,M):null;case H:return A.key===Z?E(w,b,A,M):null;case jt:return Z=A._init,A=Z(A._payload),j(w,b,A,M)}if(Gt(A)||Lt(A))return Z!==null?null:D(w,b,A,M,null);if(typeof A.then=="function")return j(w,b,Zi(A),M);if(A.$$typeof===X)return j(w,b,Ci(w,A),M);Ki(w,A)}return null}function T(w,b,A,M,Z){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return w=w.get(A)||null,d(b,w,""+M,Z);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case U:return w=w.get(M.key===null?A:M.key)||null,g(b,w,M,Z);case H:return w=w.get(M.key===null?A:M.key)||null,E(b,w,M,Z);case jt:var ot=M._init;return M=ot(M._payload),T(w,b,A,M,Z)}if(Gt(M)||Lt(M))return w=w.get(A)||null,D(b,w,M,Z,null);if(typeof M.then=="function")return T(w,b,A,Zi(M),Z);if(M.$$typeof===X)return T(w,b,A,Ci(b,M),Z);Ki(b,M)}return null}function nt(w,b,A,M){for(var Z=null,ot=null,J=b,tt=b=0,Zt=null;J!==null&&tt<A.length;tt++){J.index>tt?(Zt=J,J=null):Zt=J.sibling;var ht=j(w,J,A[tt],M);if(ht===null){J===null&&(J=Zt);break}t&&J&&ht.alternate===null&&e(w,J),b=c(ht,b,tt),ot===null?Z=ht:ot.sibling=ht,ot=ht,J=Zt}if(tt===A.length)return n(w,J),mt&&Zn(w,tt),Z;if(J===null){for(;tt<A.length;tt++)J=C(w,A[tt],M),J!==null&&(b=c(J,b,tt),ot===null?Z=J:ot.sibling=J,ot=J);return mt&&Zn(w,tt),Z}for(J=a(J);tt<A.length;tt++)Zt=T(J,w,tt,A[tt],M),Zt!==null&&(t&&Zt.alternate!==null&&J.delete(Zt.key===null?tt:Zt.key),b=c(Zt,b,tt),ot===null?Z=Zt:ot.sibling=Zt,ot=Zt);return t&&J.forEach(function(Bn){return e(w,Bn)}),mt&&Zn(w,tt),Z}function I(w,b,A,M){if(A==null)throw Error(r(151));for(var Z=null,ot=null,J=b,tt=b=0,Zt=null,ht=A.next();J!==null&&!ht.done;tt++,ht=A.next()){J.index>tt?(Zt=J,J=null):Zt=J.sibling;var Bn=j(w,J,ht.value,M);if(Bn===null){J===null&&(J=Zt);break}t&&J&&Bn.alternate===null&&e(w,J),b=c(Bn,b,tt),ot===null?Z=Bn:ot.sibling=Bn,ot=Bn,J=Zt}if(ht.done)return n(w,J),mt&&Zn(w,tt),Z;if(J===null){for(;!ht.done;tt++,ht=A.next())ht=C(w,ht.value,M),ht!==null&&(b=c(ht,b,tt),ot===null?Z=ht:ot.sibling=ht,ot=ht);return mt&&Zn(w,tt),Z}for(J=a(J);!ht.done;tt++,ht=A.next())ht=T(J,w,tt,ht.value,M),ht!==null&&(t&&ht.alternate!==null&&J.delete(ht.key===null?tt:ht.key),b=c(ht,b,tt),ot===null?Z=ht:ot.sibling=ht,ot=ht);return t&&J.forEach(function(Sg){return e(w,Sg)}),mt&&Zn(w,tt),Z}function wt(w,b,A,M){if(typeof A=="object"&&A!==null&&A.type===q&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case U:t:{for(var Z=A.key;b!==null;){if(b.key===Z){if(Z=A.type,Z===q){if(b.tag===7){n(w,b.sibling),M=l(b,A.props.children),M.return=w,w=M;break t}}else if(b.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===jt&&Zf(Z)===b.type){n(w,b.sibling),M=l(b,A.props),Ol(M,A),M.return=w,w=M;break t}n(w,b);break}else e(w,b);b=b.sibling}A.type===q?(M=Xn(A.props.children,w.mode,M,A.key),M.return=w,w=M):(M=Ni(A.type,A.key,A.props,null,w.mode,M),Ol(M,A),M.return=w,w=M)}return s(w);case H:t:{for(Z=A.key;b!==null;){if(b.key===Z)if(b.tag===4&&b.stateNode.containerInfo===A.containerInfo&&b.stateNode.implementation===A.implementation){n(w,b.sibling),M=l(b,A.children||[]),M.return=w,w=M;break t}else{n(w,b);break}else e(w,b);b=b.sibling}M=Mo(A,w.mode,M),M.return=w,w=M}return s(w);case jt:return Z=A._init,A=Z(A._payload),wt(w,b,A,M)}if(Gt(A))return nt(w,b,A,M);if(Lt(A)){if(Z=Lt(A),typeof Z!="function")throw Error(r(150));return A=Z.call(A),I(w,b,A,M)}if(typeof A.then=="function")return wt(w,b,Zi(A),M);if(A.$$typeof===X)return wt(w,b,Ci(w,A),M);Ki(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,b!==null&&b.tag===6?(n(w,b.sibling),M=l(b,A),M.return=w,w=M):(n(w,b),M=Do(A,w.mode,M),M.return=w,w=M),s(w)):n(w,b)}return function(w,b,A,M){try{Ml=0;var Z=wt(w,b,A,M);return Ma=null,Z}catch(J){if(J===wl||J===Ui)throw J;var ot=he(29,J,null,w.mode);return ot.lanes=M,ot.return=w,ot}finally{}}}var Oa=Kf(!0),Jf=Kf(!1),Re=_(null),He=null;function Sn(t){var e=t.alternate;k(Yt,Yt.current&1),k(Re,t),He===null&&(e===null||Ra.current!==null||e.memoizedState!==null)&&(He=t)}function $f(t){if(t.tag===22){if(k(Yt,Yt.current),k(Re,t),He===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(He=t)}}else wn()}function wn(){k(Yt,Yt.current),k(Re,Re.current)}function en(t){L(Re),He===t&&(He=null),L(Yt)}var Yt=_(0);function Ji(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Pr(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function sr(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:z({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fr={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=ve(),l=xn(a);l.payload=e,n!=null&&(l.callback=n),e=yn(t,l,a),e!==null&&(xe(e,t,a),El(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=ve(),l=xn(a);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=yn(t,l,a),e!==null&&(xe(e,t,a),El(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ve(),a=xn(n);a.tag=2,e!=null&&(a.callback=e),e=yn(t,a,n),e!==null&&(xe(e,t,n),El(e,t,n))}};function Wf(t,e,n,a,l,c,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,c,s):e.prototype&&e.prototype.isPureReactComponent?!ml(n,a)||!ml(l,c):!0}function Ff(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&fr.enqueueReplaceState(e,e.state,null)}function Pn(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=z({},n));for(var l in t)n[l]===void 0&&(n[l]=t[l])}return n}var $i=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function If(t){$i(t)}function Pf(t){console.error(t)}function td(t){$i(t)}function Wi(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function ed(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function dr(t,e,n){return n=xn(n),n.tag=3,n.payload={element:null},n.callback=function(){Wi(t,e)},n}function nd(t){return t=xn(t),t.tag=3,t}function ad(t,e,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var c=a.value;t.payload=function(){return l(c)},t.callback=function(){ed(e,n,a)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ed(e,n,a),typeof l!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})})}function S0(t,e,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&yl(e,n,l,!0),n=Re.current,n!==null){switch(n.tag){case 13:return He===null?Br():n.alternate===null&&Ot===0&&(Ot=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Go?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),qr(t,a,l)),!1;case 22:return n.flags|=65536,a===Go?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),qr(t,a,l)),!1}throw Error(r(435,n.tag))}return qr(t,a,l),Br(),!1}if(mt)return e=Re.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==_o&&(t=Error(r(422),{cause:a}),xl(Ae(t,n)))):(a!==_o&&(e=Error(r(423),{cause:a}),xl(Ae(e,n))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,a=Ae(a,n),l=dr(t.stateNode,a,l),Xo(t,l),Ot!==4&&(Ot=2)),!1;var c=Error(r(520),{cause:a});if(c=Ae(c,n),Yl===null?Yl=[c]:Yl.push(c),Ot!==4&&(Ot=2),e===null)return!0;a=Ae(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=l&-l,n.lanes|=t,t=dr(n.stateNode,a,t),Xo(n,t),!1;case 1:if(e=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Tn===null||!Tn.has(c))))return n.flags|=65536,l&=-l,n.lanes|=l,l=nd(l),ad(l,t,n,a),Xo(n,l),!1}n=n.return}while(n!==null);return!1}var ld=Error(r(461)),Xt=!1;function Jt(t,e,n,a){e.child=t===null?Jf(e,null,n,a):Oa(e,t.child,n,a)}function id(t,e,n,a,l){n=n.render;var c=e.ref;if("ref"in a){var s={};for(var d in a)d!=="ref"&&(s[d]=a[d])}else s=a;return Wn(e),a=$o(t,e,n,s,c,l),d=Wo(),t!==null&&!Xt?(Fo(t,e,l),nn(t,e,l)):(mt&&d&&Oo(e),e.flags|=1,Jt(t,e,a,l),e.child)}function cd(t,e,n,a,l){if(t===null){var c=n.type;return typeof c=="function"&&!No(c)&&c.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=c,od(t,e,c,a,l)):(t=Ni(n.type,null,a,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!br(t,l)){var s=c.memoizedProps;if(n=n.compare,n=n!==null?n:ml,n(s,a)&&t.ref===e.ref)return nn(t,e,l)}return e.flags|=1,t=$e(c,a),t.ref=e.ref,t.return=e,e.child=t}function od(t,e,n,a,l){if(t!==null){var c=t.memoizedProps;if(ml(c,a)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=a=c,br(t,l))(t.flags&131072)!==0&&(Xt=!0);else return e.lanes=t.lanes,nn(t,e,l)}return hr(t,e,n,a,l)}function rd(t,e,n){var a=e.pendingProps,l=a.children,c=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=c!==null?c.baseLanes|n:n,t!==null){for(l=e.child=t.child,c=0;l!==null;)c=c|l.lanes|l.childLanes,l=l.sibling;e.childLanes=c&~a}else e.childLanes=0,e.child=null;return ud(t,e,a,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&_i(e,c!==null?c.cachePool:null),c!==null?of(e,c):Zo(),$f(e);else return e.lanes=e.childLanes=536870912,ud(t,e,c!==null?c.baseLanes|n:n,n)}else c!==null?(_i(e,c.cachePool),of(e,c),wn(),e.memoizedState=null):(t!==null&&_i(e,null),Zo(),wn());return Jt(t,e,l,n),e.child}function ud(t,e,n,a){var l=Lo();return l=l===null?null:{parent:qt._currentValue,pool:l},e.memoizedState={baseLanes:n,cachePool:l},t!==null&&_i(e,null),Zo(),$f(e),t!==null&&yl(t,e,a,!0),null}function Fi(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function hr(t,e,n,a,l){return Wn(e),n=$o(t,e,n,a,void 0,l),a=Wo(),t!==null&&!Xt?(Fo(t,e,l),nn(t,e,l)):(mt&&a&&Oo(e),e.flags|=1,Jt(t,e,n,l),e.child)}function sd(t,e,n,a,l,c){return Wn(e),e.updateQueue=null,n=uf(e,a,n,l),rf(t),a=Wo(),t!==null&&!Xt?(Fo(t,e,c),nn(t,e,c)):(mt&&a&&Oo(e),e.flags|=1,Jt(t,e,n,c),e.child)}function fd(t,e,n,a,l){if(Wn(e),e.stateNode===null){var c=wa,s=n.contextType;typeof s=="object"&&s!==null&&(c=Pt(s)),c=new n(a,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=fr,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=a,c.state=e.memoizedState,c.refs={},ko(e),s=n.contextType,c.context=typeof s=="object"&&s!==null?Pt(s):wa,c.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(sr(e,n,s,a),c.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(s=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),s!==c.state&&fr.enqueueReplaceState(c,c.state,null),jl(e,a,c,l),zl(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){c=e.stateNode;var d=e.memoizedProps,g=Pn(n,d);c.props=g;var E=c.context,D=n.contextType;s=wa,typeof D=="object"&&D!==null&&(s=Pt(D));var C=n.getDerivedStateFromProps;D=typeof C=="function"||typeof c.getSnapshotBeforeUpdate=="function",d=e.pendingProps!==d,D||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d||E!==s)&&Ff(e,c,a,s),vn=!1;var j=e.memoizedState;c.state=j,jl(e,a,c,l),zl(),E=e.memoizedState,d||j!==E||vn?(typeof C=="function"&&(sr(e,n,C,a),E=e.memoizedState),(g=vn||Wf(e,n,g,a,j,E,s))?(D||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=E),c.props=a,c.state=E,c.context=s,a=g):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{c=e.stateNode,Qo(t,e),s=e.memoizedProps,D=Pn(n,s),c.props=D,C=e.pendingProps,j=c.context,E=n.contextType,g=wa,typeof E=="object"&&E!==null&&(g=Pt(E)),d=n.getDerivedStateFromProps,(E=typeof d=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(s!==C||j!==g)&&Ff(e,c,a,g),vn=!1,j=e.memoizedState,c.state=j,jl(e,a,c,l),zl();var T=e.memoizedState;s!==C||j!==T||vn||t!==null&&t.dependencies!==null&&Oi(t.dependencies)?(typeof d=="function"&&(sr(e,n,d,a),T=e.memoizedState),(D=vn||Wf(e,n,D,a,j,T,g)||t!==null&&t.dependencies!==null&&Oi(t.dependencies))?(E||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,T,g),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,T,g)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||s===t.memoizedProps&&j===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&j===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=T),c.props=a,c.state=T,c.context=g,a=D):(typeof c.componentDidUpdate!="function"||s===t.memoizedProps&&j===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&j===t.memoizedState||(e.flags|=1024),a=!1)}return c=a,Fi(t,e),a=(e.flags&128)!==0,c||a?(c=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&a?(e.child=Oa(e,t.child,null,l),e.child=Oa(e,null,n,l)):Jt(t,e,n,l),e.memoizedState=c.state,t=e.child):t=nn(t,e,l),t}function dd(t,e,n,a){return vl(),e.flags|=256,Jt(t,e,n,a),e.child}var mr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pr(t){return{baseLanes:t,cachePool:Is()}}function gr(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Te),t}function hd(t,e,n){var a=e.pendingProps,l=!1,c=(e.flags&128)!==0,s;if((s=c)||(s=t!==null&&t.memoizedState===null?!1:(Yt.current&2)!==0),s&&(l=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(mt){if(l?Sn(e):wn(),mt){var d=Mt,g;if(g=d){t:{for(g=d,d=Be;g.nodeType!==8;){if(!d){d=null;break t}if(g=Ce(g.nextSibling),g===null){d=null;break t}}d=g}d!==null?(e.memoizedState={dehydrated:d,treeContext:Vn!==null?{id:We,overflow:Fe}:null,retryLane:536870912,hydrationErrors:null},g=he(18,null,null,0),g.stateNode=d,g.return=e,e.child=g,ne=e,Mt=null,g=!0):g=!1}g||Jn(e)}if(d=e.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return Pr(d)?e.lanes=32:e.lanes=536870912,null;en(e)}return d=a.children,a=a.fallback,l?(wn(),l=e.mode,d=Ii({mode:"hidden",children:d},l),a=Xn(a,l,n,null),d.return=e,a.return=e,d.sibling=a,e.child=d,l=e.child,l.memoizedState=pr(n),l.childLanes=gr(t,s,n),e.memoizedState=mr,a):(Sn(e),vr(e,d))}if(g=t.memoizedState,g!==null&&(d=g.dehydrated,d!==null)){if(c)e.flags&256?(Sn(e),e.flags&=-257,e=xr(t,e,n)):e.memoizedState!==null?(wn(),e.child=t.child,e.flags|=128,e=null):(wn(),l=a.fallback,d=e.mode,a=Ii({mode:"visible",children:a.children},d),l=Xn(l,d,n,null),l.flags|=2,a.return=e,l.return=e,a.sibling=l,e.child=a,Oa(e,t.child,null,n),a=e.child,a.memoizedState=pr(n),a.childLanes=gr(t,s,n),e.memoizedState=mr,e=l);else if(Sn(e),Pr(d)){if(s=d.nextSibling&&d.nextSibling.dataset,s)var E=s.dgst;s=E,a=Error(r(419)),a.stack="",a.digest=s,xl({value:a,source:null,stack:null}),e=xr(t,e,n)}else if(Xt||yl(t,e,n,!1),s=(n&t.childLanes)!==0,Xt||s){if(s=zt,s!==null&&(a=n&-n,a=(a&42)!==0?1:Pc(a),a=(a&(s.suspendedLanes|n))!==0?0:a,a!==0&&a!==g.retryLane))throw g.retryLane=a,Sa(t,a),xe(s,t,a),ld;d.data==="$?"||Br(),e=xr(t,e,n)}else d.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=g.treeContext,Mt=Ce(d.nextSibling),ne=e,mt=!0,Kn=null,Be=!1,t!==null&&(ze[je++]=We,ze[je++]=Fe,ze[je++]=Vn,We=t.id,Fe=t.overflow,Vn=e),e=vr(e,a.children),e.flags|=4096);return e}return l?(wn(),l=a.fallback,d=e.mode,g=t.child,E=g.sibling,a=$e(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,E!==null?l=$e(E,l):(l=Xn(l,d,n,null),l.flags|=2),l.return=e,a.return=e,a.sibling=l,e.child=a,a=l,l=e.child,d=t.child.memoizedState,d===null?d=pr(n):(g=d.cachePool,g!==null?(E=qt._currentValue,g=g.parent!==E?{parent:E,pool:E}:g):g=Is(),d={baseLanes:d.baseLanes|n,cachePool:g}),l.memoizedState=d,l.childLanes=gr(t,s,n),e.memoizedState=mr,a):(Sn(e),n=t.child,t=n.sibling,n=$e(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function vr(t,e){return e=Ii({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ii(t,e){return t=he(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function xr(t,e,n){return Oa(e,t.child,null,n),t=vr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function md(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Bo(t.return,e,n)}function yr(t,e,n,a,l){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=n,c.tailMode=l)}function pd(t,e,n){var a=e.pendingProps,l=a.revealOrder,c=a.tail;if(Jt(t,e,a.children,n),a=Yt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&md(t,n,e);else if(t.tag===19)md(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(k(Yt,a),l){case"forwards":for(n=e.child,l=null;n!==null;)t=n.alternate,t!==null&&Ji(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),yr(e,!1,l,n,c);break;case"backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Ji(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}yr(e,!0,n,null,c);break;case"together":yr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(yl(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,n=$e(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$e(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function br(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Oi(t)))}function w0(t,e,n){switch(e.tag){case 3:pt(e,e.stateNode.containerInfo),gn(e,qt,t.memoizedState.cache),vl();break;case 27:case 5:qn(e);break;case 4:pt(e,e.stateNode.containerInfo);break;case 10:gn(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Sn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?hd(t,e,n):(Sn(e),t=nn(t,e,n),t!==null?t.sibling:null);Sn(e);break;case 19:var l=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(yl(t,e,n,!1),a=(n&e.childLanes)!==0),l){if(a)return pd(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),k(Yt,Yt.current),a)break;return null;case 22:case 23:return e.lanes=0,rd(t,e,n);case 24:gn(e,qt,t.memoizedState.cache)}return nn(t,e,n)}function gd(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Xt=!0;else{if(!br(t,n)&&(e.flags&128)===0)return Xt=!1,w0(t,e,n);Xt=(t.flags&131072)!==0}else Xt=!1,mt&&(e.flags&1048576)!==0&&Vs(e,Mi,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,l=a._init;if(a=l(a._payload),e.type=a,typeof a=="function")No(a)?(t=Pn(a,t),e.tag=1,e=fd(null,e,a,t,n)):(e.tag=0,e=hr(null,e,a,t,n));else{if(a!=null){if(l=a.$$typeof,l===et){e.tag=11,e=id(null,e,a,t,n);break t}else if(l===$){e.tag=14,e=cd(null,e,a,t,n);break t}}throw e=Ve(a)||a,Error(r(306,e,""))}}return e;case 0:return hr(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,l=Pn(a,e.pendingProps),fd(t,e,a,l,n);case 3:t:{if(pt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));a=e.pendingProps;var c=e.memoizedState;l=c.element,Qo(t,e),jl(e,a,null,n);var s=e.memoizedState;if(a=s.cache,gn(e,qt,a),a!==c.cache&&Ho(e,[qt],n,!0),zl(),a=s.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=dd(t,e,a,n);break t}else if(a!==l){l=Ae(Error(r(424)),e),xl(l),e=dd(t,e,a,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Mt=Ce(t.firstChild),ne=e,mt=!0,Kn=null,Be=!0,n=Jf(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(vl(),a===l){e=nn(t,e,n);break t}Jt(t,e,a,n)}e=e.child}return e;case 26:return Fi(t,e),t===null?(n=bh(e.type,null,e.pendingProps,null))?e.memoizedState=n:mt||(n=e.type,t=e.pendingProps,a=dc(P.current).createElement(n),a[It]=e,a[le]=t,Wt(a,n,t),Qt(a),e.stateNode=a):e.memoizedState=bh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return qn(e),t===null&&mt&&(a=e.stateNode=vh(e.type,e.pendingProps,P.current),ne=e,Be=!0,l=Mt,Mn(e.type)?(tu=l,Mt=Ce(a.firstChild)):Mt=l),Jt(t,e,e.pendingProps.children,n),Fi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&mt&&((l=a=Mt)&&(a=W0(a,e.type,e.pendingProps,Be),a!==null?(e.stateNode=a,ne=e,Mt=Ce(a.firstChild),Be=!1,l=!0):l=!1),l||Jn(e)),qn(e),l=e.type,c=e.pendingProps,s=t!==null?t.memoizedProps:null,a=c.children,Wr(l,c)?a=null:s!==null&&Wr(l,s)&&(e.flags|=32),e.memoizedState!==null&&(l=$o(t,e,m0,null,null,n),Jl._currentValue=l),Fi(t,e),Jt(t,e,a,n),e.child;case 6:return t===null&&mt&&((t=n=Mt)&&(n=F0(n,e.pendingProps,Be),n!==null?(e.stateNode=n,ne=e,Mt=null,t=!0):t=!1),t||Jn(e)),null;case 13:return hd(t,e,n);case 4:return pt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Oa(e,null,a,n):Jt(t,e,a,n),e.child;case 11:return id(t,e,e.type,e.pendingProps,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,gn(e,e.type,a.value),Jt(t,e,a.children,n),e.child;case 9:return l=e.type._context,a=e.pendingProps.children,Wn(e),l=Pt(l),a=a(l),e.flags|=1,Jt(t,e,a,n),e.child;case 14:return cd(t,e,e.type,e.pendingProps,n);case 15:return od(t,e,e.type,e.pendingProps,n);case 19:return pd(t,e,n);case 31:return a=e.pendingProps,n=e.mode,a={mode:a.mode,children:a.children},t===null?(n=Ii(a,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=$e(t.child,a),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return rd(t,e,n);case 24:return Wn(e),a=Pt(qt),t===null?(l=Lo(),l===null&&(l=zt,c=qo(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=n),l=c),e.memoizedState={parent:a,cache:l},ko(e),gn(e,qt,l)):((t.lanes&n)!==0&&(Qo(t,e),jl(e,null,null,n),zl()),l=t.memoizedState,c=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),gn(e,qt,a)):(a=c.cache,gn(e,qt,a),a!==l.cache&&Ho(e,[qt],n,!0))),Jt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function an(t){t.flags|=4}function vd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!zh(e)){if(e=Re.current,e!==null&&((dt&4194048)===dt?He!==null:(dt&62914560)!==dt&&(dt&536870912)===0||e!==He))throw Al=Go,Ps;t.flags|=8192}}function Pi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ju():536870912,t.lanes|=e,Ba|=e)}function Cl(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function A0(t,e,n){var a=e.pendingProps;switch(Co(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Nt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Pe(qt),Ft(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(gl(e)?an(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Js())),Nt(e),null;case 26:return n=e.memoizedState,t===null?(an(e),n!==null?(Nt(e),vd(e,n)):(Nt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(an(e),Nt(e),vd(e,n)):(Nt(e),e.flags&=-16777217):(t.memoizedProps!==a&&an(e),Nt(e),e.flags&=-16777217),null;case 27:Ze(e),n=P.current;var l=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&an(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Nt(e),null}t=W.current,gl(e)?Zs(e):(t=vh(l,a,n),e.stateNode=t,an(e))}return Nt(e),null;case 5:if(Ze(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&an(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Nt(e),null}if(t=W.current,gl(e))Zs(e);else{switch(l=dc(P.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}t[It]=e,t[le]=a;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=t;t:switch(Wt(t,n,a),n){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&an(e)}}return Nt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&an(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=P.current,gl(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,l=ne,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}t[It]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||sh(t.nodeValue,n)),t||Jn(e)}else t=dc(t).createTextNode(a),t[It]=e,e.stateNode=t}return Nt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=gl(e),a!==null&&a.dehydrated!==null){if(t===null){if(!l)throw Error(r(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[It]=e}else vl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Nt(e),l=!1}else l=Js(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(en(e),e):(en(e),null)}if(en(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=a!==null,t=t!==null&&t.memoizedState!==null,n){a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var c=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==l&&(a.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Pi(e,e.updateQueue),Nt(e),null;case 4:return Ft(),t===null&&Vr(e.stateNode.containerInfo),Nt(e),null;case 10:return Pe(e.type),Nt(e),null;case 19:if(L(Yt),l=e.memoizedState,l===null)return Nt(e),null;if(a=(e.flags&128)!==0,c=l.rendering,c===null)if(a)Cl(l,!1);else{if(Ot!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=Ji(t),c!==null){for(e.flags|=128,Cl(l,!1),t=c.updateQueue,e.updateQueue=t,Pi(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Xs(n,t),n=n.sibling;return k(Yt,Yt.current&1|2),e.child}t=t.sibling}l.tail!==null&&Ue()>nc&&(e.flags|=128,a=!0,Cl(l,!1),e.lanes=4194304)}else{if(!a)if(t=Ji(c),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Pi(e,t),Cl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!mt)return Nt(e),null}else 2*Ue()-l.renderingStartTime>nc&&n!==536870912&&(e.flags|=128,a=!0,Cl(l,!1),e.lanes=4194304);l.isBackwards?(c.sibling=e.child,e.child=c):(t=l.last,t!==null?t.sibling=c:e.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ue(),e.sibling=null,t=Yt.current,k(Yt,a?t&1|2:t&1),e):(Nt(e),null);case 22:case 23:return en(e),Ko(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),n=e.updateQueue,n!==null&&Pi(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&L(Fn),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Pe(qt),Nt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function E0(t,e){switch(Co(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pe(qt),Ft(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ze(e),null;case 13:if(en(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));vl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return L(Yt),null;case 4:return Ft(),null;case 10:return Pe(e.type),null;case 22:case 23:return en(e),Ko(),t!==null&&L(Fn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Pe(qt),null;case 25:return null;default:return null}}function xd(t,e){switch(Co(e),e.tag){case 3:Pe(qt),Ft();break;case 26:case 27:case 5:Ze(e);break;case 4:Ft();break;case 13:en(e);break;case 19:L(Yt);break;case 10:Pe(e.type);break;case 22:case 23:en(e),Ko(),t!==null&&L(Fn);break;case 24:Pe(qt)}}function _l(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&t)===t){a=void 0;var c=n.create,s=n.inst;a=c(),s.destroy=a}n=n.next}while(n!==l)}}catch(d){Et(e,e.return,d)}}function An(t,e,n){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var c=l.next;a=c;do{if((a.tag&t)===t){var s=a.inst,d=s.destroy;if(d!==void 0){s.destroy=void 0,l=e;var g=n,E=d;try{E()}catch(D){Et(l,g,D)}}}a=a.next}while(a!==c)}}catch(D){Et(e,e.return,D)}}function yd(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{cf(e,n)}catch(a){Et(t,t.return,a)}}}function bd(t,e,n){n.props=Pn(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){Et(t,e,a)}}function Ul(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(l){Et(t,e,l)}}function qe(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Et(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Et(t,e,l)}else n.current=null}function Sd(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Et(t,t.return,l)}}function Sr(t,e,n){try{var a=t.stateNode;V0(a,t.type,n,e),a[le]=e}catch(l){Et(t,t.return,l)}}function wd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Mn(t.type)||t.tag===4}function wr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||wd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Mn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ar(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fc));else if(a!==4&&(a===27&&Mn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Ar(t,e,n),t=t.sibling;t!==null;)Ar(t,e,n),t=t.sibling}function tc(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&Mn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(tc(t,e,n),t=t.sibling;t!==null;)tc(t,e,n),t=t.sibling}function Ad(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Wt(e,a,n),e[It]=t,e[le]=n}catch(c){Et(t,t.return,c)}}var ln=!1,_t=!1,Er=!1,Ed=typeof WeakSet=="function"?WeakSet:Set,Vt=null;function z0(t,e){if(t=t.containerInfo,Jr=xc,t=_s(t),wo(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break t}var s=0,d=-1,g=-1,E=0,D=0,C=t,j=null;e:for(;;){for(var T;C!==n||l!==0&&C.nodeType!==3||(d=s+l),C!==c||a!==0&&C.nodeType!==3||(g=s+a),C.nodeType===3&&(s+=C.nodeValue.length),(T=C.firstChild)!==null;)j=C,C=T;for(;;){if(C===t)break e;if(j===n&&++E===l&&(d=s),j===c&&++D===a&&(g=s),(T=C.nextSibling)!==null)break;C=j,j=C.parentNode}C=T}n=d===-1||g===-1?null:{start:d,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for($r={focusedElem:t,selectionRange:n},xc=!1,Vt=e;Vt!==null;)if(e=Vt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Vt=t;else for(;Vt!==null;){switch(e=Vt,c=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,n=e,l=c.memoizedProps,c=c.memoizedState,a=n.stateNode;try{var nt=Pn(n.type,l,n.elementType===n.type);t=a.getSnapshotBeforeUpdate(nt,c),a.__reactInternalSnapshotBeforeUpdate=t}catch(I){Et(n,n.return,I)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Ir(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ir(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,Vt=t;break}Vt=e.return}}function zd(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:En(t,n),a&4&&_l(5,n);break;case 1:if(En(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){Et(n,n.return,s)}else{var l=Pn(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Et(n,n.return,s)}}a&64&&yd(n),a&512&&Ul(n,n.return);break;case 3:if(En(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{cf(t,e)}catch(s){Et(n,n.return,s)}}break;case 27:e===null&&a&4&&Ad(n);case 26:case 5:En(t,n),e===null&&a&4&&Sd(n),a&512&&Ul(n,n.return);break;case 12:En(t,n);break;case 13:En(t,n),a&4&&Td(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=_0.bind(null,n),I0(t,n))));break;case 22:if(a=n.memoizedState!==null||ln,!a){e=e!==null&&e.memoizedState!==null||_t,l=ln;var c=_t;ln=a,(_t=e)&&!c?zn(t,n,(n.subtreeFlags&8772)!==0):En(t,n),ln=l,_t=c}break;case 30:break;default:En(t,n)}}function jd(t){var e=t.alternate;e!==null&&(t.alternate=null,jd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&no(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Tt=null,oe=!1;function cn(t,e,n){for(n=n.child;n!==null;)Rd(t,e,n),n=n.sibling}function Rd(t,e,n){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 26:_t||qe(n,e),cn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:_t||qe(n,e);var a=Tt,l=oe;Mn(n.type)&&(Tt=n.stateNode,oe=!1),cn(t,e,n),Xl(n.stateNode),Tt=a,oe=l;break;case 5:_t||qe(n,e);case 6:if(a=Tt,l=oe,Tt=null,cn(t,e,n),Tt=a,oe=l,Tt!==null)if(oe)try{(Tt.nodeType===9?Tt.body:Tt.nodeName==="HTML"?Tt.ownerDocument.body:Tt).removeChild(n.stateNode)}catch(c){Et(n,e,c)}else try{Tt.removeChild(n.stateNode)}catch(c){Et(n,e,c)}break;case 18:Tt!==null&&(oe?(t=Tt,ph(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Il(t)):ph(Tt,n.stateNode));break;case 4:a=Tt,l=oe,Tt=n.stateNode.containerInfo,oe=!0,cn(t,e,n),Tt=a,oe=l;break;case 0:case 11:case 14:case 15:_t||An(2,n,e),_t||An(4,n,e),cn(t,e,n);break;case 1:_t||(qe(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&bd(n,e,a)),cn(t,e,n);break;case 21:cn(t,e,n);break;case 22:_t=(a=_t)||n.memoizedState!==null,cn(t,e,n),_t=a;break;default:cn(t,e,n)}}function Td(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Il(t)}catch(n){Et(e,e.return,n)}}function j0(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Ed),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Ed),e;default:throw Error(r(435,t.tag))}}function zr(t,e){var n=j0(t);e.forEach(function(a){var l=U0.bind(null,t,a);n.has(a)||(n.add(a),a.then(l,l))})}function me(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],c=t,s=e,d=s;t:for(;d!==null;){switch(d.tag){case 27:if(Mn(d.type)){Tt=d.stateNode,oe=!1;break t}break;case 5:Tt=d.stateNode,oe=!1;break t;case 3:case 4:Tt=d.stateNode.containerInfo,oe=!0;break t}d=d.return}if(Tt===null)throw Error(r(160));Rd(c,s,l),Tt=null,oe=!1,c=l.alternate,c!==null&&(c.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Nd(e,t),e=e.sibling}var Oe=null;function Nd(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:me(e,t),pe(t),a&4&&(An(3,t,t.return),_l(3,t),An(5,t,t.return));break;case 1:me(e,t),pe(t),a&512&&(_t||n===null||qe(n,n.return)),a&64&&ln&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Oe;if(me(e,t),pe(t),a&512&&(_t||n===null||qe(n,n.return)),a&4){var c=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,l=l.ownerDocument||l;e:switch(a){case"title":c=l.getElementsByTagName("title")[0],(!c||c[il]||c[It]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=l.createElement(a),l.head.insertBefore(c,l.querySelector("head > title"))),Wt(c,a,n),c[It]=t,Qt(c),a=c;break t;case"link":var s=Ah("link","href",l).get(a+(n.href||""));if(s){for(var d=0;d<s.length;d++)if(c=s[d],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(d,1);break e}}c=l.createElement(a),Wt(c,a,n),l.head.appendChild(c);break;case"meta":if(s=Ah("meta","content",l).get(a+(n.content||""))){for(d=0;d<s.length;d++)if(c=s[d],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(d,1);break e}}c=l.createElement(a),Wt(c,a,n),l.head.appendChild(c);break;default:throw Error(r(468,a))}c[It]=t,Qt(c),a=c}t.stateNode=a}else Eh(l,t.type,t.stateNode);else t.stateNode=wh(l,a,t.memoizedProps);else c!==a?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,a===null?Eh(l,t.type,t.stateNode):wh(l,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Sr(t,t.memoizedProps,n.memoizedProps)}break;case 27:me(e,t),pe(t),a&512&&(_t||n===null||qe(n,n.return)),n!==null&&a&4&&Sr(t,t.memoizedProps,n.memoizedProps);break;case 5:if(me(e,t),pe(t),a&512&&(_t||n===null||qe(n,n.return)),t.flags&32){l=t.stateNode;try{ma(l,"")}catch(T){Et(t,t.return,T)}}a&4&&t.stateNode!=null&&(l=t.memoizedProps,Sr(t,l,n!==null?n.memoizedProps:l)),a&1024&&(Er=!0);break;case 6:if(me(e,t),pe(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(T){Et(t,t.return,T)}}break;case 3:if(pc=null,l=Oe,Oe=hc(e.containerInfo),me(e,t),Oe=l,pe(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Il(e.containerInfo)}catch(T){Et(t,t.return,T)}Er&&(Er=!1,Dd(t));break;case 4:a=Oe,Oe=hc(t.stateNode.containerInfo),me(e,t),pe(t),Oe=a;break;case 12:me(e,t),pe(t);break;case 13:me(e,t),pe(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Mr=Ue()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,zr(t,a)));break;case 22:l=t.memoizedState!==null;var g=n!==null&&n.memoizedState!==null,E=ln,D=_t;if(ln=E||l,_t=D||g,me(e,t),_t=D,ln=E,pe(t),a&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(n===null||g||ln||_t||ta(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){g=n=e;try{if(c=g.stateNode,l)s=c.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=g.stateNode;var C=g.memoizedProps.style,j=C!=null&&C.hasOwnProperty("display")?C.display:null;d.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(T){Et(g,g.return,T)}}}else if(e.tag===6){if(n===null){g=e;try{g.stateNode.nodeValue=l?"":g.memoizedProps}catch(T){Et(g,g.return,T)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,zr(t,n))));break;case 19:me(e,t),pe(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,zr(t,a)));break;case 30:break;case 21:break;default:me(e,t),pe(t)}}function pe(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(wd(a)){n=a;break}a=a.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var l=n.stateNode,c=wr(t);tc(t,c,l);break;case 5:var s=n.stateNode;n.flags&32&&(ma(s,""),n.flags&=-33);var d=wr(t);tc(t,d,s);break;case 3:case 4:var g=n.stateNode.containerInfo,E=wr(t);Ar(t,E,g);break;default:throw Error(r(161))}}catch(D){Et(t,t.return,D)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Dd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function En(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)zd(t,e.alternate,e),e=e.sibling}function ta(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:An(4,e,e.return),ta(e);break;case 1:qe(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&bd(e,e.return,n),ta(e);break;case 27:Xl(e.stateNode);case 26:case 5:qe(e,e.return),ta(e);break;case 22:e.memoizedState===null&&ta(e);break;case 30:ta(e);break;default:ta(e)}t=t.sibling}}function zn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,l=t,c=e,s=c.flags;switch(c.tag){case 0:case 11:case 15:zn(l,c,n),_l(4,c);break;case 1:if(zn(l,c,n),a=c,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(E){Et(a,a.return,E)}if(a=c,l=a.updateQueue,l!==null){var d=a.stateNode;try{var g=l.shared.hiddenCallbacks;if(g!==null)for(l.shared.hiddenCallbacks=null,l=0;l<g.length;l++)lf(g[l],d)}catch(E){Et(a,a.return,E)}}n&&s&64&&yd(c),Ul(c,c.return);break;case 27:Ad(c);case 26:case 5:zn(l,c,n),n&&a===null&&s&4&&Sd(c),Ul(c,c.return);break;case 12:zn(l,c,n);break;case 13:zn(l,c,n),n&&s&4&&Td(l,c);break;case 22:c.memoizedState===null&&zn(l,c,n),Ul(c,c.return);break;case 30:break;default:zn(l,c,n)}e=e.sibling}}function jr(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&bl(n))}function Rr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&bl(t))}function Ye(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Md(t,e,n,a),e=e.sibling}function Md(t,e,n,a){var l=e.flags;switch(e.tag){case 0:case 11:case 15:Ye(t,e,n,a),l&2048&&_l(9,e);break;case 1:Ye(t,e,n,a);break;case 3:Ye(t,e,n,a),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&bl(t)));break;case 12:if(l&2048){Ye(t,e,n,a),t=e.stateNode;try{var c=e.memoizedProps,s=c.id,d=c.onPostCommit;typeof d=="function"&&d(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(g){Et(e,e.return,g)}}else Ye(t,e,n,a);break;case 13:Ye(t,e,n,a);break;case 23:break;case 22:c=e.stateNode,s=e.alternate,e.memoizedState!==null?c._visibility&2?Ye(t,e,n,a):Bl(t,e):c._visibility&2?Ye(t,e,n,a):(c._visibility|=2,Ca(t,e,n,a,(e.subtreeFlags&10256)!==0)),l&2048&&jr(s,e);break;case 24:Ye(t,e,n,a),l&2048&&Rr(e.alternate,e);break;default:Ye(t,e,n,a)}}function Ca(t,e,n,a,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=t,s=e,d=n,g=a,E=s.flags;switch(s.tag){case 0:case 11:case 15:Ca(c,s,d,g,l),_l(8,s);break;case 23:break;case 22:var D=s.stateNode;s.memoizedState!==null?D._visibility&2?Ca(c,s,d,g,l):Bl(c,s):(D._visibility|=2,Ca(c,s,d,g,l)),l&&E&2048&&jr(s.alternate,s);break;case 24:Ca(c,s,d,g,l),l&&E&2048&&Rr(s.alternate,s);break;default:Ca(c,s,d,g,l)}e=e.sibling}}function Bl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,l=a.flags;switch(a.tag){case 22:Bl(n,a),l&2048&&jr(a.alternate,a);break;case 24:Bl(n,a),l&2048&&Rr(a.alternate,a);break;default:Bl(n,a)}e=e.sibling}}var Hl=8192;function _a(t){if(t.subtreeFlags&Hl)for(t=t.child;t!==null;)Od(t),t=t.sibling}function Od(t){switch(t.tag){case 26:_a(t),t.flags&Hl&&t.memoizedState!==null&&fg(Oe,t.memoizedState,t.memoizedProps);break;case 5:_a(t);break;case 3:case 4:var e=Oe;Oe=hc(t.stateNode.containerInfo),_a(t),Oe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Hl,Hl=16777216,_a(t),Hl=e):_a(t));break;default:_a(t)}}function Cd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ql(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Vt=a,Ud(a,t)}Cd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_d(t),t=t.sibling}function _d(t){switch(t.tag){case 0:case 11:case 15:ql(t),t.flags&2048&&An(9,t,t.return);break;case 3:ql(t);break;case 12:ql(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ec(t)):ql(t);break;default:ql(t)}}function ec(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Vt=a,Ud(a,t)}Cd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:An(8,e,e.return),ec(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,ec(e));break;default:ec(e)}t=t.sibling}}function Ud(t,e){for(;Vt!==null;){var n=Vt;switch(n.tag){case 0:case 11:case 15:An(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:bl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Vt=a;else t:for(n=t;Vt!==null;){a=Vt;var l=a.sibling,c=a.return;if(jd(a),a===n){Vt=null;break t}if(l!==null){l.return=c,Vt=l;break t}Vt=c}}}var R0={getCacheForType:function(t){var e=Pt(qt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},T0=typeof WeakMap=="function"?WeakMap:Map,vt=0,zt=null,st=null,dt=0,xt=0,ge=null,jn=!1,Ua=!1,Tr=!1,on=0,Ot=0,Rn=0,ea=0,Nr=0,Te=0,Ba=0,Yl=null,re=null,Dr=!1,Mr=0,nc=1/0,ac=null,Tn=null,$t=0,Nn=null,Ha=null,qa=0,Or=0,Cr=null,Bd=null,Ll=0,_r=null;function ve(){if((vt&2)!==0&&dt!==0)return dt&-dt;if(N.T!==null){var t=za;return t!==0?t:Gr()}return Fu()}function Hd(){Te===0&&(Te=(dt&536870912)===0||mt?Ku():536870912);var t=Re.current;return t!==null&&(t.flags|=32),Te}function xe(t,e,n){(t===zt&&(xt===2||xt===9)||t.cancelPendingCommit!==null)&&(Ya(t,0),Dn(t,dt,Te,!1)),ll(t,n),((vt&2)===0||t!==zt)&&(t===zt&&((vt&2)===0&&(ea|=n),Ot===4&&Dn(t,dt,Te,!1)),Le(t))}function qd(t,e,n){if((vt&6)!==0)throw Error(r(327));var a=!n&&(e&124)===0&&(e&t.expiredLanes)===0||al(t,e),l=a?M0(t,e):Hr(t,e,!0),c=a;do{if(l===0){Ua&&!a&&Dn(t,e,0,!1);break}else{if(n=t.current.alternate,c&&!N0(n)){l=Hr(t,e,!1),c=!1;continue}if(l===2){if(c=e,t.errorRecoveryDisabledLanes&c)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var d=t;l=Yl;var g=d.current.memoizedState.isDehydrated;if(g&&(Ya(d,s).flags|=256),s=Hr(d,s,!1),s!==2){if(Tr&&!g){d.errorRecoveryDisabledLanes|=c,ea|=c,l=4;break t}c=re,re=l,c!==null&&(re===null?re=c:re.push.apply(re,c))}l=s}if(c=!1,l!==2)continue}}if(l===1){Ya(t,0),Dn(t,e,0,!0);break}t:{switch(a=t,c=l,c){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Dn(a,e,Te,!jn);break t;case 2:re=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(l=Mr+300-Ue(),10<l)){if(Dn(a,e,Te,!jn),mi(a,0,!0)!==0)break t;a.timeoutHandle=hh(Yd.bind(null,a,n,re,ac,Dr,e,Te,ea,Ba,jn,c,2,-0,0),l);break t}Yd(a,n,re,ac,Dr,e,Te,ea,Ba,jn,c,0,-0,0)}}break}while(!0);Le(t)}function Yd(t,e,n,a,l,c,s,d,g,E,D,C,j,T){if(t.timeoutHandle=-1,C=e.subtreeFlags,(C&8192||(C&16785408)===16785408)&&(Kl={stylesheets:null,count:0,unsuspend:sg},Od(e),C=dg(),C!==null)){t.cancelPendingCommit=C(Zd.bind(null,t,e,c,n,a,l,s,d,g,D,1,j,T)),Dn(t,c,s,!E);return}Zd(t,e,c,n,a,l,s,d,g)}function N0(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],c=l.getSnapshot;l=l.value;try{if(!de(c(),l))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dn(t,e,n,a){e&=~Nr,e&=~ea,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var l=e;0<l;){var c=31-fe(l),s=1<<c;a[c]=-1,l&=~s}n!==0&&$u(t,n,e)}function lc(){return(vt&6)===0?(Gl(0),!1):!0}function Ur(){if(st!==null){if(xt===0)var t=st.return;else t=st,Ie=$n=null,Io(t),Ma=null,Ml=0,t=st;for(;t!==null;)xd(t.alternate,t),t=t.return;st=null}}function Ya(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,K0(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Ur(),zt=t,st=n=$e(t.current,null),dt=e,xt=0,ge=null,jn=!1,Ua=al(t,e),Tr=!1,Ba=Te=Nr=ea=Rn=Ot=0,re=Yl=null,Dr=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var l=31-fe(a),c=1<<l;e|=t[l],a&=~c}return on=e,ji(),n}function Ld(t,e){ct=null,N.H=Vi,e===wl||e===Ui?(e=nf(),xt=3):e===Ps?(e=nf(),xt=4):xt=e===ld?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ge=e,st===null&&(Ot=1,Wi(t,Ae(e,t.current)))}function Gd(){var t=N.H;return N.H=Vi,t===null?Vi:t}function kd(){var t=N.A;return N.A=R0,t}function Br(){Ot=4,jn||(dt&4194048)!==dt&&Re.current!==null||(Ua=!0),(Rn&134217727)===0&&(ea&134217727)===0||zt===null||Dn(zt,dt,Te,!1)}function Hr(t,e,n){var a=vt;vt|=2;var l=Gd(),c=kd();(zt!==t||dt!==e)&&(ac=null,Ya(t,e)),e=!1;var s=Ot;t:do try{if(xt!==0&&st!==null){var d=st,g=ge;switch(xt){case 8:Ur(),s=6;break t;case 3:case 2:case 9:case 6:Re.current===null&&(e=!0);var E=xt;if(xt=0,ge=null,La(t,d,g,E),n&&Ua){s=0;break t}break;default:E=xt,xt=0,ge=null,La(t,d,g,E)}}D0(),s=Ot;break}catch(D){Ld(t,D)}while(!0);return e&&t.shellSuspendCounter++,Ie=$n=null,vt=a,N.H=l,N.A=c,st===null&&(zt=null,dt=0,ji()),s}function D0(){for(;st!==null;)Qd(st)}function M0(t,e){var n=vt;vt|=2;var a=Gd(),l=kd();zt!==t||dt!==e?(ac=null,nc=Ue()+500,Ya(t,e)):Ua=al(t,e);t:do try{if(xt!==0&&st!==null){e=st;var c=ge;e:switch(xt){case 1:xt=0,ge=null,La(t,e,c,1);break;case 2:case 9:if(tf(c)){xt=0,ge=null,Xd(e);break}e=function(){xt!==2&&xt!==9||zt!==t||(xt=7),Le(t)},c.then(e,e);break t;case 3:xt=7;break t;case 4:xt=5;break t;case 7:tf(c)?(xt=0,ge=null,Xd(e)):(xt=0,ge=null,La(t,e,c,7));break;case 5:var s=null;switch(st.tag){case 26:s=st.memoizedState;case 5:case 27:var d=st;if(!s||zh(s)){xt=0,ge=null;var g=d.sibling;if(g!==null)st=g;else{var E=d.return;E!==null?(st=E,ic(E)):st=null}break e}}xt=0,ge=null,La(t,e,c,5);break;case 6:xt=0,ge=null,La(t,e,c,6);break;case 8:Ur(),Ot=6;break t;default:throw Error(r(462))}}O0();break}catch(D){Ld(t,D)}while(!0);return Ie=$n=null,N.H=a,N.A=l,vt=n,st!==null?0:(zt=null,dt=0,ji(),Ot)}function O0(){for(;st!==null&&!tp();)Qd(st)}function Qd(t){var e=gd(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?ic(t):st=e}function Xd(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=sd(n,e,e.pendingProps,e.type,void 0,dt);break;case 11:e=sd(n,e,e.pendingProps,e.type.render,e.ref,dt);break;case 5:Io(e);default:xd(n,e),e=st=Xs(e,on),e=gd(n,e,on)}t.memoizedProps=t.pendingProps,e===null?ic(t):st=e}function La(t,e,n,a){Ie=$n=null,Io(e),Ma=null,Ml=0;var l=e.return;try{if(S0(t,l,e,n,dt)){Ot=1,Wi(t,Ae(n,t.current)),st=null;return}}catch(c){if(l!==null)throw st=l,c;Ot=1,Wi(t,Ae(n,t.current)),st=null;return}e.flags&32768?(mt||a===1?t=!0:Ua||(dt&536870912)!==0?t=!1:(jn=t=!0,(a===2||a===9||a===3||a===6)&&(a=Re.current,a!==null&&a.tag===13&&(a.flags|=16384))),Vd(e,t)):ic(e)}function ic(t){var e=t;do{if((e.flags&32768)!==0){Vd(e,jn);return}t=e.return;var n=A0(e.alternate,e,on);if(n!==null){st=n;return}if(e=e.sibling,e!==null){st=e;return}st=e=t}while(e!==null);Ot===0&&(Ot=5)}function Vd(t,e){do{var n=E0(t.alternate,t);if(n!==null){n.flags&=32767,st=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){st=t;return}st=t=n}while(t!==null);Ot=6,st=null}function Zd(t,e,n,a,l,c,s,d,g){t.cancelPendingCommit=null;do cc();while($t!==0);if((vt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(c=e.lanes|e.childLanes,c|=Ro,sp(t,n,c,s,d,g),t===zt&&(st=zt=null,dt=0),Ha=e,Nn=t,qa=n,Or=c,Cr=l,Bd=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,B0(fi,function(){return Fd(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,l=G.p,G.p=2,s=vt,vt|=4;try{z0(t,e,n)}finally{vt=s,G.p=l,N.T=a}}$t=1,Kd(),Jd(),$d()}}function Kd(){if($t===1){$t=0;var t=Nn,e=Ha,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var a=G.p;G.p=2;var l=vt;vt|=4;try{Nd(e,t);var c=$r,s=_s(t.containerInfo),d=c.focusedElem,g=c.selectionRange;if(s!==d&&d&&d.ownerDocument&&Cs(d.ownerDocument.documentElement,d)){if(g!==null&&wo(d)){var E=g.start,D=g.end;if(D===void 0&&(D=E),"selectionStart"in d)d.selectionStart=E,d.selectionEnd=Math.min(D,d.value.length);else{var C=d.ownerDocument||document,j=C&&C.defaultView||window;if(j.getSelection){var T=j.getSelection(),nt=d.textContent.length,I=Math.min(g.start,nt),wt=g.end===void 0?I:Math.min(g.end,nt);!T.extend&&I>wt&&(s=wt,wt=I,I=s);var w=Os(d,I),b=Os(d,wt);if(w&&b&&(T.rangeCount!==1||T.anchorNode!==w.node||T.anchorOffset!==w.offset||T.focusNode!==b.node||T.focusOffset!==b.offset)){var A=C.createRange();A.setStart(w.node,w.offset),T.removeAllRanges(),I>wt?(T.addRange(A),T.extend(b.node,b.offset)):(A.setEnd(b.node,b.offset),T.addRange(A))}}}}for(C=[],T=d;T=T.parentNode;)T.nodeType===1&&C.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<C.length;d++){var M=C[d];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}xc=!!Jr,$r=Jr=null}finally{vt=l,G.p=a,N.T=n}}t.current=e,$t=2}}function Jd(){if($t===2){$t=0;var t=Nn,e=Ha,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var a=G.p;G.p=2;var l=vt;vt|=4;try{zd(t,e.alternate,e)}finally{vt=l,G.p=a,N.T=n}}$t=3}}function $d(){if($t===4||$t===3){$t=0,ep();var t=Nn,e=Ha,n=qa,a=Bd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?$t=5:($t=0,Ha=Nn=null,Wd(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(Tn=null),to(n),e=e.stateNode,se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=N.T,l=G.p,G.p=2,N.T=null;try{for(var c=t.onRecoverableError,s=0;s<a.length;s++){var d=a[s];c(d.value,{componentStack:d.stack})}}finally{N.T=e,G.p=l}}(qa&3)!==0&&cc(),Le(t),l=t.pendingLanes,(n&4194090)!==0&&(l&42)!==0?t===_r?Ll++:(Ll=0,_r=t):Ll=0,Gl(0)}}function Wd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,bl(e)))}function cc(t){return Kd(),Jd(),$d(),Fd()}function Fd(){if($t!==5)return!1;var t=Nn,e=Or;Or=0;var n=to(qa),a=N.T,l=G.p;try{G.p=32>n?32:n,N.T=null,n=Cr,Cr=null;var c=Nn,s=qa;if($t=0,Ha=Nn=null,qa=0,(vt&6)!==0)throw Error(r(331));var d=vt;if(vt|=4,_d(c.current),Md(c,c.current,s,n),vt=d,Gl(0,!1),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(nl,c)}catch{}return!0}finally{G.p=l,N.T=a,Wd(t,e)}}function Id(t,e,n){e=Ae(n,e),e=dr(t.stateNode,e,2),t=yn(t,e,2),t!==null&&(ll(t,2),Le(t))}function Et(t,e,n){if(t.tag===3)Id(t,t,n);else for(;e!==null;){if(e.tag===3){Id(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Tn===null||!Tn.has(a))){t=Ae(n,t),n=nd(2),a=yn(e,n,2),a!==null&&(ad(n,a,e,t),ll(a,2),Le(a));break}}e=e.return}}function qr(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new T0;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(n)||(Tr=!0,l.add(n),t=C0.bind(null,t,e,n),e.then(t,t))}function C0(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,zt===t&&(dt&n)===n&&(Ot===4||Ot===3&&(dt&62914560)===dt&&300>Ue()-Mr?(vt&2)===0&&Ya(t,0):Nr|=n,Ba===dt&&(Ba=0)),Le(t)}function Pd(t,e){e===0&&(e=Ju()),t=Sa(t,e),t!==null&&(ll(t,e),Le(t))}function _0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Pd(t,n)}function U0(t,e){var n=0;switch(t.tag){case 13:var a=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),Pd(t,n)}function B0(t,e){return Wc(t,e)}var oc=null,Ga=null,Yr=!1,rc=!1,Lr=!1,na=0;function Le(t){t!==Ga&&t.next===null&&(Ga===null?oc=Ga=t:Ga=Ga.next=t),rc=!0,Yr||(Yr=!0,q0())}function Gl(t,e){if(!Lr&&rc){Lr=!0;do for(var n=!1,a=oc;a!==null;){if(t!==0){var l=a.pendingLanes;if(l===0)var c=0;else{var s=a.suspendedLanes,d=a.pingedLanes;c=(1<<31-fe(42|t)+1)-1,c&=l&~(s&~d),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,ah(a,c))}else c=dt,c=mi(a,a===zt?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||al(a,c)||(n=!0,ah(a,c));a=a.next}while(n);Lr=!1}}function H0(){th()}function th(){rc=Yr=!1;var t=0;na!==0&&(Z0()&&(t=na),na=0);for(var e=Ue(),n=null,a=oc;a!==null;){var l=a.next,c=eh(a,e);c===0?(a.next=null,n===null?oc=l:n.next=l,l===null&&(Ga=n)):(n=a,(t!==0||(c&3)!==0)&&(rc=!0)),a=l}Gl(t)}function eh(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var s=31-fe(c),d=1<<s,g=l[s];g===-1?((d&n)===0||(d&a)!==0)&&(l[s]=up(d,e)):g<=e&&(t.expiredLanes|=d),c&=~d}if(e=zt,n=dt,n=mi(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(xt===2||xt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Fc(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||al(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&Fc(a),to(n)){case 2:case 8:n=Vu;break;case 32:n=fi;break;case 268435456:n=Zu;break;default:n=fi}return a=nh.bind(null,t),n=Wc(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&Fc(a),t.callbackPriority=2,t.callbackNode=null,2}function nh(t,e){if($t!==0&&$t!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(cc()&&t.callbackNode!==n)return null;var a=dt;return a=mi(t,t===zt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(qd(t,a,e),eh(t,Ue()),t.callbackNode!=null&&t.callbackNode===n?nh.bind(null,t):null)}function ah(t,e){if(cc())return null;qd(t,e,!0)}function q0(){J0(function(){(vt&6)!==0?Wc(Xu,H0):th()})}function Gr(){return na===0&&(na=Ku()),na}function lh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:yi(""+t)}function ih(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Y0(t,e,n,a,l){if(e==="submit"&&n&&n.stateNode===l){var c=lh((l[le]||null).action),s=a.submitter;s&&(e=(e=s[le]||null)?lh(e.formAction):s.getAttribute("formAction"),e!==null&&(c=e,s=null));var d=new Ai("action","action",null,a,l);t.push({event:d,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(na!==0){var g=s?ih(l,s):new FormData(l);or(n,{pending:!0,data:g,method:l.method,action:c},null,g)}}else typeof c=="function"&&(d.preventDefault(),g=s?ih(l,s):new FormData(l),or(n,{pending:!0,data:g,method:l.method,action:c},c,g))},currentTarget:l}]})}}for(var kr=0;kr<jo.length;kr++){var Qr=jo[kr],L0=Qr.toLowerCase(),G0=Qr[0].toUpperCase()+Qr.slice(1);Me(L0,"on"+G0)}Me(Hs,"onAnimationEnd"),Me(qs,"onAnimationIteration"),Me(Ys,"onAnimationStart"),Me("dblclick","onDoubleClick"),Me("focusin","onFocus"),Me("focusout","onBlur"),Me(l0,"onTransitionRun"),Me(i0,"onTransitionStart"),Me(c0,"onTransitionCancel"),Me(Ls,"onTransitionEnd"),fa("onMouseEnter",["mouseout","mouseover"]),fa("onMouseLeave",["mouseout","mouseover"]),fa("onPointerEnter",["pointerout","pointerover"]),fa("onPointerLeave",["pointerout","pointerover"]),Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kl));function ch(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],l=a.event;a=a.listeners;t:{var c=void 0;if(e)for(var s=a.length-1;0<=s;s--){var d=a[s],g=d.instance,E=d.currentTarget;if(d=d.listener,g!==c&&l.isPropagationStopped())break t;c=d,l.currentTarget=E;try{c(l)}catch(D){$i(D)}l.currentTarget=null,c=g}else for(s=0;s<a.length;s++){if(d=a[s],g=d.instance,E=d.currentTarget,d=d.listener,g!==c&&l.isPropagationStopped())break t;c=d,l.currentTarget=E;try{c(l)}catch(D){$i(D)}l.currentTarget=null,c=g}}}}function ft(t,e){var n=e[eo];n===void 0&&(n=e[eo]=new Set);var a=t+"__bubble";n.has(a)||(oh(e,t,2,!1),n.add(a))}function Xr(t,e,n){var a=0;e&&(a|=4),oh(n,t,a,e)}var uc="_reactListening"+Math.random().toString(36).slice(2);function Vr(t){if(!t[uc]){t[uc]=!0,Pu.forEach(function(n){n!=="selectionchange"&&(k0.has(n)||Xr(n,!1,t),Xr(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[uc]||(e[uc]=!0,Xr("selectionchange",!1,e))}}function oh(t,e,n,a){switch(Mh(e)){case 2:var l=pg;break;case 8:l=gg;break;default:l=iu}n=l.bind(null,e,n,t),l=void 0,!ho||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function Zr(t,e,n,a,l){var c=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var d=a.stateNode.containerInfo;if(d===l)break;if(s===4)for(s=a.return;s!==null;){var g=s.tag;if((g===3||g===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;d!==null;){if(s=ra(d),s===null)return;if(g=s.tag,g===5||g===6||g===26||g===27){a=c=s;continue t}d=d.parentNode}}a=a.return}hs(function(){var E=c,D=so(n),C=[];t:{var j=Gs.get(t);if(j!==void 0){var T=Ai,nt=t;switch(t){case"keypress":if(Si(n)===0)break t;case"keydown":case"keyup":T=Bp;break;case"focusin":nt="focus",T=vo;break;case"focusout":nt="blur",T=vo;break;case"beforeblur":case"afterblur":T=vo;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Ep;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Yp;break;case Hs:case qs:case Ys:T=Rp;break;case Ls:T=Gp;break;case"scroll":case"scrollend":T=wp;break;case"wheel":T=Qp;break;case"copy":case"cut":case"paste":T=Np;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=xs;break;case"toggle":case"beforetoggle":T=Vp}var I=(e&4)!==0,wt=!I&&(t==="scroll"||t==="scrollend"),w=I?j!==null?j+"Capture":null:j;I=[];for(var b=E,A;b!==null;){var M=b;if(A=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||A===null||w===null||(M=ol(b,w),M!=null&&I.push(Ql(b,M,A))),wt)break;b=b.return}0<I.length&&(j=new T(j,nt,null,n,D),C.push({event:j,listeners:I}))}}if((e&7)===0){t:{if(j=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",j&&n!==uo&&(nt=n.relatedTarget||n.fromElement)&&(ra(nt)||nt[oa]))break t;if((T||j)&&(j=D.window===D?D:(j=D.ownerDocument)?j.defaultView||j.parentWindow:window,T?(nt=n.relatedTarget||n.toElement,T=E,nt=nt?ra(nt):null,nt!==null&&(wt=m(nt),I=nt.tag,nt!==wt||I!==5&&I!==27&&I!==6)&&(nt=null)):(T=null,nt=E),T!==nt)){if(I=gs,M="onMouseLeave",w="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(I=xs,M="onPointerLeave",w="onPointerEnter",b="pointer"),wt=T==null?j:cl(T),A=nt==null?j:cl(nt),j=new I(M,b+"leave",T,n,D),j.target=wt,j.relatedTarget=A,M=null,ra(D)===E&&(I=new I(w,b+"enter",nt,n,D),I.target=A,I.relatedTarget=wt,M=I),wt=M,T&&nt)e:{for(I=T,w=nt,b=0,A=I;A;A=ka(A))b++;for(A=0,M=w;M;M=ka(M))A++;for(;0<b-A;)I=ka(I),b--;for(;0<A-b;)w=ka(w),A--;for(;b--;){if(I===w||w!==null&&I===w.alternate)break e;I=ka(I),w=ka(w)}I=null}else I=null;T!==null&&rh(C,j,T,I,!1),nt!==null&&wt!==null&&rh(C,wt,nt,I,!0)}}t:{if(j=E?cl(E):window,T=j.nodeName&&j.nodeName.toLowerCase(),T==="select"||T==="input"&&j.type==="file")var Z=js;else if(Es(j))if(Rs)Z=e0;else{Z=Pp;var ot=Ip}else T=j.nodeName,!T||T.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?E&&ro(E.elementType)&&(Z=js):Z=t0;if(Z&&(Z=Z(t,E))){zs(C,Z,n,D);break t}ot&&ot(t,j,E),t==="focusout"&&E&&j.type==="number"&&E.memoizedProps.value!=null&&oo(j,"number",j.value)}switch(ot=E?cl(E):window,t){case"focusin":(Es(ot)||ot.contentEditable==="true")&&(xa=ot,Ao=E,pl=null);break;case"focusout":pl=Ao=xa=null;break;case"mousedown":Eo=!0;break;case"contextmenu":case"mouseup":case"dragend":Eo=!1,Us(C,n,D);break;case"selectionchange":if(a0)break;case"keydown":case"keyup":Us(C,n,D)}var J;if(yo)t:{switch(t){case"compositionstart":var tt="onCompositionStart";break t;case"compositionend":tt="onCompositionEnd";break t;case"compositionupdate":tt="onCompositionUpdate";break t}tt=void 0}else va?ws(t,n)&&(tt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(tt="onCompositionStart");tt&&(ys&&n.locale!=="ko"&&(va||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&va&&(J=ms()):(pn=D,mo="value"in pn?pn.value:pn.textContent,va=!0)),ot=sc(E,tt),0<ot.length&&(tt=new vs(tt,t,null,n,D),C.push({event:tt,listeners:ot}),J?tt.data=J:(J=As(n),J!==null&&(tt.data=J)))),(J=Kp?Jp(t,n):$p(t,n))&&(tt=sc(E,"onBeforeInput"),0<tt.length&&(ot=new vs("onBeforeInput","beforeinput",null,n,D),C.push({event:ot,listeners:tt}),ot.data=J)),Y0(C,t,E,n,D)}ch(C,e)})}function Ql(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sc(t,e){for(var n=e+"Capture",a=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=ol(t,n),l!=null&&a.unshift(Ql(t,l,c)),l=ol(t,e),l!=null&&a.push(Ql(t,l,c))),t.tag===3)return a;t=t.return}return[]}function ka(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function rh(t,e,n,a,l){for(var c=e._reactName,s=[];n!==null&&n!==a;){var d=n,g=d.alternate,E=d.stateNode;if(d=d.tag,g!==null&&g===a)break;d!==5&&d!==26&&d!==27||E===null||(g=E,l?(E=ol(n,c),E!=null&&s.unshift(Ql(n,E,g))):l||(E=ol(n,c),E!=null&&s.push(Ql(n,E,g)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Q0=/\r\n?/g,X0=/\u0000|\uFFFD/g;function uh(t){return(typeof t=="string"?t:""+t).replace(Q0,`
`).replace(X0,"")}function sh(t,e){return e=uh(e),uh(t)===e}function fc(){}function St(t,e,n,a,l,c){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ma(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ma(t,""+a);break;case"className":gi(t,"class",a);break;case"tabIndex":gi(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":gi(t,n,a);break;case"style":fs(t,a,c);break;case"data":if(e!=="object"){gi(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=yi(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(e!=="input"&&St(t,e,"name",l.name,l,null),St(t,e,"formEncType",l.formEncType,l,null),St(t,e,"formMethod",l.formMethod,l,null),St(t,e,"formTarget",l.formTarget,l,null)):(St(t,e,"encType",l.encType,l,null),St(t,e,"method",l.method,l,null),St(t,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=yi(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=fc);break;case"onScroll":a!=null&&ft("scroll",t);break;case"onScrollEnd":a!=null&&ft("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=yi(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":ft("beforetoggle",t),ft("toggle",t),pi(t,"popover",a);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":pi(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=bp.get(n)||n,pi(t,n,a))}}function Kr(t,e,n,a,l,c){switch(n){case"style":fs(t,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"children":typeof a=="string"?ma(t,a):(typeof a=="number"||typeof a=="bigint")&&ma(t,""+a);break;case"onScroll":a!=null&&ft("scroll",t);break;case"onScrollEnd":a!=null&&ft("scrollend",t);break;case"onClick":a!=null&&(t.onclick=fc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ts.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),e=n.slice(2,l?n.length-7:void 0),c=t[le]||null,c=c!=null?c[n]:null,typeof c=="function"&&t.removeEventListener(e,c,l),typeof a=="function")){typeof c!="function"&&c!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,l);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):pi(t,n,a)}}}function Wt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ft("error",t),ft("load",t);var a=!1,l=!1,c;for(c in n)if(n.hasOwnProperty(c)){var s=n[c];if(s!=null)switch(c){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:St(t,e,c,s,n,null)}}l&&St(t,e,"srcSet",n.srcSet,n,null),a&&St(t,e,"src",n.src,n,null);return;case"input":ft("invalid",t);var d=c=s=l=null,g=null,E=null;for(a in n)if(n.hasOwnProperty(a)){var D=n[a];if(D!=null)switch(a){case"name":l=D;break;case"type":s=D;break;case"checked":g=D;break;case"defaultChecked":E=D;break;case"value":c=D;break;case"defaultValue":d=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,e));break;default:St(t,e,a,D,n,null)}}os(t,c,d,g,E,s,l,!1),vi(t);return;case"select":ft("invalid",t),a=s=c=null;for(l in n)if(n.hasOwnProperty(l)&&(d=n[l],d!=null))switch(l){case"value":c=d;break;case"defaultValue":s=d;break;case"multiple":a=d;default:St(t,e,l,d,n,null)}e=c,n=s,t.multiple=!!a,e!=null?ha(t,!!a,e,!1):n!=null&&ha(t,!!a,n,!0);return;case"textarea":ft("invalid",t),c=l=a=null;for(s in n)if(n.hasOwnProperty(s)&&(d=n[s],d!=null))switch(s){case"value":a=d;break;case"defaultValue":l=d;break;case"children":c=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:St(t,e,s,d,n,null)}us(t,a,l,c),vi(t);return;case"option":for(g in n)if(n.hasOwnProperty(g)&&(a=n[g],a!=null))switch(g){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:St(t,e,g,a,n,null)}return;case"dialog":ft("beforetoggle",t),ft("toggle",t),ft("cancel",t),ft("close",t);break;case"iframe":case"object":ft("load",t);break;case"video":case"audio":for(a=0;a<kl.length;a++)ft(kl[a],t);break;case"image":ft("error",t),ft("load",t);break;case"details":ft("toggle",t);break;case"embed":case"source":case"link":ft("error",t),ft("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(a=n[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:St(t,e,E,a,n,null)}return;default:if(ro(e)){for(D in n)n.hasOwnProperty(D)&&(a=n[D],a!==void 0&&Kr(t,e,D,a,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(a=n[d],a!=null&&St(t,e,d,a,n,null))}function V0(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,s=null,d=null,g=null,E=null,D=null;for(T in n){var C=n[T];if(n.hasOwnProperty(T)&&C!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":g=C;default:a.hasOwnProperty(T)||St(t,e,T,null,a,C)}}for(var j in a){var T=a[j];if(C=n[j],a.hasOwnProperty(j)&&(T!=null||C!=null))switch(j){case"type":c=T;break;case"name":l=T;break;case"checked":E=T;break;case"defaultChecked":D=T;break;case"value":s=T;break;case"defaultValue":d=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,e));break;default:T!==C&&St(t,e,j,T,a,C)}}co(t,s,d,g,E,D,c,l);return;case"select":T=s=d=j=null;for(c in n)if(g=n[c],n.hasOwnProperty(c)&&g!=null)switch(c){case"value":break;case"multiple":T=g;default:a.hasOwnProperty(c)||St(t,e,c,null,a,g)}for(l in a)if(c=a[l],g=n[l],a.hasOwnProperty(l)&&(c!=null||g!=null))switch(l){case"value":j=c;break;case"defaultValue":d=c;break;case"multiple":s=c;default:c!==g&&St(t,e,l,c,a,g)}e=d,n=s,a=T,j!=null?ha(t,!!n,j,!1):!!a!=!!n&&(e!=null?ha(t,!!n,e,!0):ha(t,!!n,n?[]:"",!1));return;case"textarea":T=j=null;for(d in n)if(l=n[d],n.hasOwnProperty(d)&&l!=null&&!a.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:St(t,e,d,null,a,l)}for(s in a)if(l=a[s],c=n[s],a.hasOwnProperty(s)&&(l!=null||c!=null))switch(s){case"value":j=l;break;case"defaultValue":T=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==c&&St(t,e,s,l,a,c)}rs(t,j,T);return;case"option":for(var nt in n)if(j=n[nt],n.hasOwnProperty(nt)&&j!=null&&!a.hasOwnProperty(nt))switch(nt){case"selected":t.selected=!1;break;default:St(t,e,nt,null,a,j)}for(g in a)if(j=a[g],T=n[g],a.hasOwnProperty(g)&&j!==T&&(j!=null||T!=null))switch(g){case"selected":t.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:St(t,e,g,j,a,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in n)j=n[I],n.hasOwnProperty(I)&&j!=null&&!a.hasOwnProperty(I)&&St(t,e,I,null,a,j);for(E in a)if(j=a[E],T=n[E],a.hasOwnProperty(E)&&j!==T&&(j!=null||T!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,e));break;default:St(t,e,E,j,a,T)}return;default:if(ro(e)){for(var wt in n)j=n[wt],n.hasOwnProperty(wt)&&j!==void 0&&!a.hasOwnProperty(wt)&&Kr(t,e,wt,void 0,a,j);for(D in a)j=a[D],T=n[D],!a.hasOwnProperty(D)||j===T||j===void 0&&T===void 0||Kr(t,e,D,j,a,T);return}}for(var w in n)j=n[w],n.hasOwnProperty(w)&&j!=null&&!a.hasOwnProperty(w)&&St(t,e,w,null,a,j);for(C in a)j=a[C],T=n[C],!a.hasOwnProperty(C)||j===T||j==null&&T==null||St(t,e,C,j,a,T)}var Jr=null,$r=null;function dc(t){return t.nodeType===9?t:t.ownerDocument}function fh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Wr(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fr=null;function Z0(){var t=window.event;return t&&t.type==="popstate"?t===Fr?!1:(Fr=t,!0):(Fr=null,!1)}var hh=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,J0=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(t){return mh.resolve(null).then(t).catch($0)}:hh;function $0(t){setTimeout(function(){throw t})}function Mn(t){return t==="head"}function ph(t,e){var n=e,a=0,l=0;do{var c=n.nextSibling;if(t.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"){if(0<a&&8>a){n=a;var s=t.ownerDocument;if(n&1&&Xl(s.documentElement),n&2&&Xl(s.body),n&4)for(n=s.head,Xl(n),s=n.firstChild;s;){var d=s.nextSibling,g=s.nodeName;s[il]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=d}}if(l===0){t.removeChild(c),Il(e);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=c}while(n);Il(e)}function Ir(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ir(n),no(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function W0(t,e,n,a){for(;t.nodeType===1;){var l=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[il])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ce(t.nextSibling),t===null)break}return null}function F0(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ce(t.nextSibling),t===null))return null;return t}function Pr(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function I0(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ce(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var tu=null;function gh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function vh(t,e,n){switch(e=dc(n),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Xl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);no(t)}var Ne=new Map,xh=new Set;function hc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var rn=G.d;G.d={f:P0,r:tg,D:eg,C:ng,L:ag,m:lg,X:cg,S:ig,M:og};function P0(){var t=rn.f(),e=lc();return t||e}function tg(t){var e=ua(t);e!==null&&e.tag===5&&e.type==="form"?qf(e):rn.r(t)}var Qa=typeof document>"u"?null:document;function yh(t,e,n){var a=Qa;if(a&&typeof e=="string"&&e){var l=we(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),xh.has(l)||(xh.add(l),t={rel:t,crossOrigin:n,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),Wt(e,"link",t),Qt(e),a.head.appendChild(e)))}}function eg(t){rn.D(t),yh("dns-prefetch",t,null)}function ng(t,e){rn.C(t,e),yh("preconnect",t,e)}function ag(t,e,n){rn.L(t,e,n);var a=Qa;if(a&&t&&e){var l='link[rel="preload"][as="'+we(e)+'"]';e==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+we(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+we(n.imageSizes)+'"]')):l+='[href="'+we(t)+'"]';var c=l;switch(e){case"style":c=Xa(t);break;case"script":c=Va(t)}Ne.has(c)||(t=z({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ne.set(c,t),a.querySelector(l)!==null||e==="style"&&a.querySelector(Vl(c))||e==="script"&&a.querySelector(Zl(c))||(e=a.createElement("link"),Wt(e,"link",t),Qt(e),a.head.appendChild(e)))}}function lg(t,e){rn.m(t,e);var n=Qa;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+we(a)+'"][href="'+we(t)+'"]',c=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Va(t)}if(!Ne.has(c)&&(t=z({rel:"modulepreload",href:t},e),Ne.set(c,t),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Zl(c)))return}a=n.createElement("link"),Wt(a,"link",t),Qt(a),n.head.appendChild(a)}}}function ig(t,e,n){rn.S(t,e,n);var a=Qa;if(a&&t){var l=sa(a).hoistableStyles,c=Xa(t);e=e||"default";var s=l.get(c);if(!s){var d={loading:0,preload:null};if(s=a.querySelector(Vl(c)))d.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ne.get(c))&&eu(t,n);var g=s=a.createElement("link");Qt(g),Wt(g,"link",t),g._p=new Promise(function(E,D){g.onload=E,g.onerror=D}),g.addEventListener("load",function(){d.loading|=1}),g.addEventListener("error",function(){d.loading|=2}),d.loading|=4,mc(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:d},l.set(c,s)}}}function cg(t,e){rn.X(t,e);var n=Qa;if(n&&t){var a=sa(n).hoistableScripts,l=Va(t),c=a.get(l);c||(c=n.querySelector(Zl(l)),c||(t=z({src:t,async:!0},e),(e=Ne.get(l))&&nu(t,e),c=n.createElement("script"),Qt(c),Wt(c,"link",t),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(l,c))}}function og(t,e){rn.M(t,e);var n=Qa;if(n&&t){var a=sa(n).hoistableScripts,l=Va(t),c=a.get(l);c||(c=n.querySelector(Zl(l)),c||(t=z({src:t,async:!0,type:"module"},e),(e=Ne.get(l))&&nu(t,e),c=n.createElement("script"),Qt(c),Wt(c,"link",t),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(l,c))}}function bh(t,e,n,a){var l=(l=P.current)?hc(l):null;if(!l)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Xa(n.href),n=sa(l).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Xa(n.href);var c=sa(l).hoistableStyles,s=c.get(t);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,s),(c=l.querySelector(Vl(t)))&&!c._p&&(s.instance=c,s.state.loading=5),Ne.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ne.set(t,n),c||rg(l,t,n,s.state))),e&&a===null)throw Error(r(528,""));return s}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Va(n),n=sa(l).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Xa(t){return'href="'+we(t)+'"'}function Vl(t){return'link[rel="stylesheet"]['+t+"]"}function Sh(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function rg(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Wt(e,"link",n),Qt(e),t.head.appendChild(e))}function Va(t){return'[src="'+we(t)+'"]'}function Zl(t){return"script[async]"+t}function wh(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+we(n.href)+'"]');if(a)return e.instance=a,Qt(a),a;var l=z({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Qt(a),Wt(a,"style",l),mc(a,n.precedence,t),e.instance=a;case"stylesheet":l=Xa(n.href);var c=t.querySelector(Vl(l));if(c)return e.state.loading|=4,e.instance=c,Qt(c),c;a=Sh(n),(l=Ne.get(l))&&eu(a,l),c=(t.ownerDocument||t).createElement("link"),Qt(c);var s=c;return s._p=new Promise(function(d,g){s.onload=d,s.onerror=g}),Wt(c,"link",a),e.state.loading|=4,mc(c,n.precedence,t),e.instance=c;case"script":return c=Va(n.src),(l=t.querySelector(Zl(c)))?(e.instance=l,Qt(l),l):(a=n,(l=Ne.get(c))&&(a=z({},n),nu(a,l)),t=t.ownerDocument||t,l=t.createElement("script"),Qt(l),Wt(l,"link",a),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,mc(a,n.precedence,t));return e.instance}function mc(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,c=l,s=0;s<a.length;s++){var d=a[s];if(d.dataset.precedence===e)c=d;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function eu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function nu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var pc=null;function Ah(t,e,n){if(pc===null){var a=new Map,l=pc=new Map;l.set(n,a)}else l=pc,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),l=0;l<n.length;l++){var c=n[l];if(!(c[il]||c[It]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var s=c.getAttribute(e)||"";s=t+s;var d=a.get(s);d?d.push(c):a.set(s,[c])}}return a}function Eh(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function ug(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function zh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Kl=null;function sg(){}function fg(t,e,n){if(Kl===null)throw Error(r(475));var a=Kl;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=Xa(n.href),c=t.querySelector(Vl(l));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=gc.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=c,Qt(c);return}c=t.ownerDocument||t,n=Sh(n),(l=Ne.get(l))&&eu(n,l),c=c.createElement("link"),Qt(c);var s=c;s._p=new Promise(function(d,g){s.onload=d,s.onerror=g}),Wt(c,"link",n),e.instance=c}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=gc.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function dg(){if(Kl===null)throw Error(r(475));var t=Kl;return t.stylesheets&&t.count===0&&au(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&au(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function gc(){if(this.count--,this.count===0){if(this.stylesheets)au(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vc=null;function au(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vc=new Map,e.forEach(hg,t),vc=null,gc.call(t))}function hg(t,e){if(!(e.state.loading&4)){var n=vc.get(t);if(n)var a=n.get(null);else{n=new Map,vc.set(t,n);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var s=l[c];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),a=s)}a&&n.set(null,a)}l=e.instance,s=l.getAttribute("data-precedence"),c=n.get(s)||a,c===a&&n.set(null,l),n.set(s,l),this.count++,a=gc.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Jl={$$typeof:X,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function mg(t,e,n,a,l,c,s,d){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ic(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ic(0),this.hiddenUpdates=Ic(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function jh(t,e,n,a,l,c,s,d,g,E,D,C){return t=new mg(t,e,n,s,d,g,E,C),e=1,c===!0&&(e|=24),c=he(3,null,null,e),t.current=c,c.stateNode=t,e=qo(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:a,isDehydrated:n,cache:e},ko(c),t}function Rh(t){return t?(t=wa,t):wa}function Th(t,e,n,a,l,c){l=Rh(l),a.context===null?a.context=l:a.pendingContext=l,a=xn(e),a.payload={element:n},c=c===void 0?null:c,c!==null&&(a.callback=c),n=yn(t,a,e),n!==null&&(xe(n,t,e),El(n,t,e))}function Nh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lu(t,e){Nh(t,e),(t=t.alternate)&&Nh(t,e)}function Dh(t){if(t.tag===13){var e=Sa(t,67108864);e!==null&&xe(e,t,67108864),lu(t,67108864)}}var xc=!0;function pg(t,e,n,a){var l=N.T;N.T=null;var c=G.p;try{G.p=2,iu(t,e,n,a)}finally{G.p=c,N.T=l}}function gg(t,e,n,a){var l=N.T;N.T=null;var c=G.p;try{G.p=8,iu(t,e,n,a)}finally{G.p=c,N.T=l}}function iu(t,e,n,a){if(xc){var l=cu(a);if(l===null)Zr(t,e,a,yc,n),Oh(t,a);else if(xg(l,t,e,n,a))a.stopPropagation();else if(Oh(t,a),e&4&&-1<vg.indexOf(t)){for(;l!==null;){var c=ua(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var s=Yn(c.pendingLanes);if(s!==0){var d=c;for(d.pendingLanes|=2,d.entangledLanes|=2;s;){var g=1<<31-fe(s);d.entanglements[1]|=g,s&=~g}Le(c),(vt&6)===0&&(nc=Ue()+500,Gl(0))}}break;case 13:d=Sa(c,2),d!==null&&xe(d,c,2),lc(),lu(c,2)}if(c=cu(a),c===null&&Zr(t,e,a,yc,n),c===l)break;l=c}l!==null&&a.stopPropagation()}else Zr(t,e,a,null,n)}}function cu(t){return t=so(t),ou(t)}var yc=null;function ou(t){if(yc=null,t=ra(t),t!==null){var e=m(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=v(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return yc=t,null}function Mh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(np()){case Xu:return 2;case Vu:return 8;case fi:case ap:return 32;case Zu:return 268435456;default:return 32}default:return 32}}var ru=!1,On=null,Cn=null,_n=null,$l=new Map,Wl=new Map,Un=[],vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Oh(t,e){switch(t){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":$l.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wl.delete(e.pointerId)}}function Fl(t,e,n,a,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:c,targetContainers:[l]},e!==null&&(e=ua(e),e!==null&&Dh(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function xg(t,e,n,a,l){switch(e){case"focusin":return On=Fl(On,t,e,n,a,l),!0;case"dragenter":return Cn=Fl(Cn,t,e,n,a,l),!0;case"mouseover":return _n=Fl(_n,t,e,n,a,l),!0;case"pointerover":var c=l.pointerId;return $l.set(c,Fl($l.get(c)||null,t,e,n,a,l)),!0;case"gotpointercapture":return c=l.pointerId,Wl.set(c,Fl(Wl.get(c)||null,t,e,n,a,l)),!0}return!1}function Ch(t){var e=ra(t.target);if(e!==null){var n=m(e);if(n!==null){if(e=n.tag,e===13){if(e=v(n),e!==null){t.blockedOn=e,fp(t.priority,function(){if(n.tag===13){var a=ve();a=Pc(a);var l=Sa(n,a);l!==null&&xe(l,n,a),lu(n,a)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cu(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);uo=a,n.target.dispatchEvent(a),uo=null}else return e=ua(n),e!==null&&Dh(e),t.blockedOn=n,!1;e.shift()}return!0}function _h(t,e,n){bc(t)&&n.delete(e)}function yg(){ru=!1,On!==null&&bc(On)&&(On=null),Cn!==null&&bc(Cn)&&(Cn=null),_n!==null&&bc(_n)&&(_n=null),$l.forEach(_h),Wl.forEach(_h)}function Sc(t,e){t.blockedOn===e&&(t.blockedOn=null,ru||(ru=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,yg)))}var wc=null;function Uh(t){wc!==t&&(wc=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){wc===t&&(wc=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],l=t[e+2];if(typeof a!="function"){if(ou(a||n)===null)continue;break}var c=ua(n);c!==null&&(t.splice(e,3),e-=3,or(c,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Il(t){function e(g){return Sc(g,t)}On!==null&&Sc(On,t),Cn!==null&&Sc(Cn,t),_n!==null&&Sc(_n,t),$l.forEach(e),Wl.forEach(e);for(var n=0;n<Un.length;n++){var a=Un[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Ch(n),n.blockedOn===null&&Un.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],c=n[a+1],s=l[le]||null;if(typeof c=="function")s||Uh(n);else if(s){var d=null;if(c&&c.hasAttribute("formAction")){if(l=c,s=c[le]||null)d=s.formAction;else if(ou(l)!==null)continue}else d=s.action;typeof d=="function"?n[a+1]=d:(n.splice(a,3),a-=3),Uh(n)}}}function uu(t){this._internalRoot=t}Ac.prototype.render=uu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var n=e.current,a=ve();Th(n,a,t,e,null,null)},Ac.prototype.unmount=uu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Th(t.current,2,null,t,null,null),lc(),e[oa]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fu();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Un.length&&e!==0&&e<Un[n].priority;n++);Un.splice(n,0,t),n===0&&Ch(t)}};var Bh=o.version;if(Bh!=="19.1.1")throw Error(r(527,Bh,"19.1.1"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=x(e),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var bg={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{nl=Ec.inject(bg),se=Ec}catch{}}return ti.createRoot=function(t,e){if(!f(t))throw Error(r(299));var n=!1,a="",l=If,c=Pf,s=td,d=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(d=e.unstable_transitionCallbacks)),e=jh(t,1,!1,null,null,n,a,l,c,s,d,null),t[oa]=e.current,Vr(t),new uu(e)},ti.hydrateRoot=function(t,e,n){if(!f(t))throw Error(r(299));var a=!1,l="",c=If,s=Pf,d=td,g=null,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(g=n.unstable_transitionCallbacks),n.formState!==void 0&&(E=n.formState)),e=jh(t,1,!0,e,n??null,a,l,c,s,d,g,E),e.context=Rh(null),n=e.current,a=ve(),a=Pc(a),l=xn(a),l.callback=null,yn(n,l,a),n=a,e.current.lanes=n,ll(e,n),Le(e),t[oa]=e.current,Vr(t),new Ac(e)},ti.version="19.1.1",ti}var Zh;function Mg(){if(Zh)return du.exports;Zh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),du.exports=Dg(),du.exports}var Og=Mg();/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Kh="popstate";function Cg(i={}){function o(r,f){let{pathname:m,search:v,hash:S}=r.location;return wu("",{pathname:m,search:v,hash:S},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(r,f){return typeof f=="string"?f:ii(f)}return Ug(o,u,null,i)}function Dt(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function ke(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function _g(){return Math.random().toString(36).substring(2,10)}function Jh(i,o){return{usr:i.state,key:i.key,idx:o}}function wu(i,o,u=null,r){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof o=="string"?Pa(o):o,state:u,key:o&&o.key||r||_g()}}function ii({pathname:i="/",search:o="",hash:u=""}){return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function Pa(i){let o={};if(i){let u=i.indexOf("#");u>=0&&(o.hash=i.substring(u),i=i.substring(0,u));let r=i.indexOf("?");r>=0&&(o.search=i.substring(r),i=i.substring(0,r)),i&&(o.pathname=i)}return o}function Ug(i,o,u,r={}){let{window:f=document.defaultView,v5Compat:m=!1}=r,v=f.history,S="POP",x=null,p=z();p==null&&(p=0,v.replaceState({...v.state,idx:p},""));function z(){return(v.state||{idx:null}).idx}function O(){S="POP";let Q=z(),B=Q==null?null:Q-p;p=Q,x&&x({action:S,location:Y.location,delta:B})}function U(Q,B){S="PUSH";let K=wu(Y.location,Q,B);p=z()+1;let X=Jh(K,p),et=Y.createHref(K);try{v.pushState(X,"",et)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;f.location.assign(et)}m&&x&&x({action:S,location:Y.location,delta:1})}function H(Q,B){S="REPLACE";let K=wu(Y.location,Q,B);p=z();let X=Jh(K,p),et=Y.createHref(K);v.replaceState(X,"",et),m&&x&&x({action:S,location:Y.location,delta:0})}function q(Q){return Bg(Q)}let Y={get action(){return S},get location(){return i(f,v)},listen(Q){if(x)throw new Error("A history only accepts one active listener");return f.addEventListener(Kh,O),x=Q,()=>{f.removeEventListener(Kh,O),x=null}},createHref(Q){return o(f,Q)},createURL:q,encodeLocation(Q){let B=q(Q);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:U,replace:H,go(Q){return v.go(Q)}};return Y}function Bg(i,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Dt(u,"No window.location.(origin|href) available to create URL");let r=typeof i=="string"?i:ii(i);return r=r.replace(/ $/,"%20"),!o&&r.startsWith("//")&&(r=u+r),new URL(r,u)}function mm(i,o,u="/"){return Hg(i,o,u,!1)}function Hg(i,o,u,r){let f=typeof o=="string"?Pa(o):o,m=fn(f.pathname||"/",u);if(m==null)return null;let v=pm(i);qg(v);let S=null;for(let x=0;S==null&&x<v.length;++x){let p=$g(m);S=Kg(v[x],p,r)}return S}function pm(i,o=[],u=[],r="",f=!1){let m=(v,S,x=f,p)=>{let z={relativePath:p===void 0?v.path||"":p,caseSensitive:v.caseSensitive===!0,childrenIndex:S,route:v};if(z.relativePath.startsWith("/")){if(!z.relativePath.startsWith(r)&&x)return;Dt(z.relativePath.startsWith(r),`Absolute route path "${z.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),z.relativePath=z.relativePath.slice(r.length)}let O=sn([r,z.relativePath]),U=u.concat(z);v.children&&v.children.length>0&&(Dt(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${O}".`),pm(v.children,o,U,O,x)),!(v.path==null&&!v.index)&&o.push({path:O,score:Vg(O,v.index),routesMeta:U})};return i.forEach((v,S)=>{if(v.path===""||!v.path?.includes("?"))m(v,S);else for(let x of gm(v.path))m(v,S,!0,x)}),o}function gm(i){let o=i.split("/");if(o.length===0)return[];let[u,...r]=o,f=u.endsWith("?"),m=u.replace(/\?$/,"");if(r.length===0)return f?[m,""]:[m];let v=gm(r.join("/")),S=[];return S.push(...v.map(x=>x===""?m:[m,x].join("/"))),f&&S.push(...v),S.map(x=>i.startsWith("/")&&x===""?"/":x)}function qg(i){i.sort((o,u)=>o.score!==u.score?u.score-o.score:Zg(o.routesMeta.map(r=>r.childrenIndex),u.routesMeta.map(r=>r.childrenIndex)))}var Yg=/^:[\w-]+$/,Lg=3,Gg=2,kg=1,Qg=10,Xg=-2,$h=i=>i==="*";function Vg(i,o){let u=i.split("/"),r=u.length;return u.some($h)&&(r+=Xg),o&&(r+=Gg),u.filter(f=>!$h(f)).reduce((f,m)=>f+(Yg.test(m)?Lg:m===""?kg:Qg),r)}function Zg(i,o){return i.length===o.length&&i.slice(0,-1).every((r,f)=>r===o[f])?i[i.length-1]-o[o.length-1]:0}function Kg(i,o,u=!1){let{routesMeta:r}=i,f={},m="/",v=[];for(let S=0;S<r.length;++S){let x=r[S],p=S===r.length-1,z=m==="/"?o:o.slice(m.length)||"/",O=Bc({path:x.relativePath,caseSensitive:x.caseSensitive,end:p},z),U=x.route;if(!O&&p&&u&&!r[r.length-1].route.index&&(O=Bc({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},z)),!O)return null;Object.assign(f,O.params),v.push({params:f,pathname:sn([m,O.pathname]),pathnameBase:Pg(sn([m,O.pathnameBase])),route:U}),O.pathnameBase!=="/"&&(m=sn([m,O.pathnameBase]))}return v}function Bc(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,r]=Jg(i.path,i.caseSensitive,i.end),f=o.match(u);if(!f)return null;let m=f[0],v=m.replace(/(.)\/+$/,"$1"),S=f.slice(1);return{params:r.reduce((p,{paramName:z,isOptional:O},U)=>{if(z==="*"){let q=S[U]||"";v=m.slice(0,m.length-q.length).replace(/(.)\/+$/,"$1")}const H=S[U];return O&&!H?p[z]=void 0:p[z]=(H||"").replace(/%2F/g,"/"),p},{}),pathname:m,pathnameBase:v,pattern:i}}function Jg(i,o=!1,u=!0){ke(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let r=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,S,x)=>(r.push({paramName:S,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(r.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),r]}function $g(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return ke(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),i}}function fn(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,r=i.charAt(u);return r&&r!=="/"?null:i.slice(u)||"/"}function Wg(i,o="/"){let{pathname:u,search:r="",hash:f=""}=typeof i=="string"?Pa(i):i;return{pathname:u?u.startsWith("/")?u:Fg(u,o):o,search:t1(r),hash:e1(f)}}function Fg(i,o){let u=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function gu(i,o,u,r){return`Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ig(i){return i.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function vm(i){let o=Ig(i);return o.map((u,r)=>r===o.length-1?u.pathname:u.pathnameBase)}function xm(i,o,u,r=!1){let f;typeof i=="string"?f=Pa(i):(f={...i},Dt(!f.pathname||!f.pathname.includes("?"),gu("?","pathname","search",f)),Dt(!f.pathname||!f.pathname.includes("#"),gu("#","pathname","hash",f)),Dt(!f.search||!f.search.includes("#"),gu("#","search","hash",f)));let m=i===""||f.pathname==="",v=m?"/":f.pathname,S;if(v==null)S=u;else{let O=o.length-1;if(!r&&v.startsWith("..")){let U=v.split("/");for(;U[0]==="..";)U.shift(),O-=1;f.pathname=U.join("/")}S=O>=0?o[O]:"/"}let x=Wg(f,S),p=v&&v!=="/"&&v.endsWith("/"),z=(m||v===".")&&u.endsWith("/");return!x.pathname.endsWith("/")&&(p||z)&&(x.pathname+="/"),x}var sn=i=>i.join("/").replace(/\/\/+/g,"/"),Pg=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),t1=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,e1=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function n1(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var ym=["POST","PUT","PATCH","DELETE"];new Set(ym);var a1=["GET",...ym];new Set(a1);var tl=R.createContext(null);tl.displayName="DataRouter";var Gc=R.createContext(null);Gc.displayName="DataRouterState";R.createContext(!1);var bm=R.createContext({isTransitioning:!1});bm.displayName="ViewTransition";var l1=R.createContext(new Map);l1.displayName="Fetchers";var i1=R.createContext(null);i1.displayName="Await";var Qe=R.createContext(null);Qe.displayName="Navigation";var oi=R.createContext(null);oi.displayName="Location";var dn=R.createContext({outlet:null,matches:[],isDataRoute:!1});dn.displayName="Route";var Ou=R.createContext(null);Ou.displayName="RouteError";function c1(i,{relative:o}={}){Dt(ri(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:r}=R.useContext(Qe),{hash:f,pathname:m,search:v}=ui(i,{relative:o}),S=m;return u!=="/"&&(S=m==="/"?u:sn([u,m])),r.createHref({pathname:S,search:v,hash:f})}function ri(){return R.useContext(oi)!=null}function ca(){return Dt(ri(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(oi).location}var Sm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wm(i){R.useContext(Qe).static||R.useLayoutEffect(i)}function kc(){let{isDataRoute:i}=R.useContext(dn);return i?y1():o1()}function o1(){Dt(ri(),"useNavigate() may be used only in the context of a <Router> component.");let i=R.useContext(tl),{basename:o,navigator:u}=R.useContext(Qe),{matches:r}=R.useContext(dn),{pathname:f}=ca(),m=JSON.stringify(vm(r)),v=R.useRef(!1);return wm(()=>{v.current=!0}),R.useCallback((x,p={})=>{if(ke(v.current,Sm),!v.current)return;if(typeof x=="number"){u.go(x);return}let z=xm(x,JSON.parse(m),f,p.relative==="path");i==null&&o!=="/"&&(z.pathname=z.pathname==="/"?o:sn([o,z.pathname])),(p.replace?u.replace:u.push)(z,p.state,p)},[o,u,m,f,i])}R.createContext(null);function ui(i,{relative:o}={}){let{matches:u}=R.useContext(dn),{pathname:r}=ca(),f=JSON.stringify(vm(u));return R.useMemo(()=>xm(i,JSON.parse(f),r,o==="path"),[i,f,r,o])}function r1(i,o){return Am(i,o)}function Am(i,o,u,r){Dt(ri(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=R.useContext(Qe),{matches:m}=R.useContext(dn),v=m[m.length-1],S=v?v.params:{},x=v?v.pathname:"/",p=v?v.pathnameBase:"/",z=v&&v.route;{let B=z&&z.path||"";Em(x,!z||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let O=ca(),U;if(o){let B=typeof o=="string"?Pa(o):o;Dt(p==="/"||B.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${B.pathname}" was given in the \`location\` prop.`),U=B}else U=O;let H=U.pathname||"/",q=H;if(p!=="/"){let B=p.replace(/^\//,"").split("/");q="/"+H.replace(/^\//,"").split("/").slice(B.length).join("/")}let Y=mm(i,{pathname:q});ke(z||Y!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),ke(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=h1(Y&&Y.map(B=>Object.assign({},B,{params:Object.assign({},S,B.params),pathname:sn([p,f.encodeLocation?f.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?p:sn([p,f.encodeLocation?f.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),m,u,r);return o&&Q?R.createElement(oi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...U},navigationType:"POP"}},Q):Q}function u1(){let i=x1(),o=n1(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,r="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:r},m={padding:"2px 4px",backgroundColor:r},v=null;return console.error("Error handled by React Router default ErrorBoundary:",i),v=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:m},"ErrorBoundary")," or"," ",R.createElement("code",{style:m},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},o),u?R.createElement("pre",{style:f},u):null,v)}var s1=R.createElement(u1,null),f1=class extends R.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?R.createElement(dn.Provider,{value:this.props.routeContext},R.createElement(Ou.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function d1({routeContext:i,match:o,children:u}){let r=R.useContext(tl);return r&&r.static&&r.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=o.route.id),R.createElement(dn.Provider,{value:i},u)}function h1(i,o=[],u=null,r=null){if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let f=i,m=u?.errors;if(m!=null){let x=f.findIndex(p=>p.route.id&&m?.[p.route.id]!==void 0);Dt(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,x+1))}let v=!1,S=-1;if(u)for(let x=0;x<f.length;x++){let p=f[x];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(S=x),p.route.id){let{loaderData:z,errors:O}=u,U=p.route.loader&&!z.hasOwnProperty(p.route.id)&&(!O||O[p.route.id]===void 0);if(p.route.lazy||U){v=!0,S>=0?f=f.slice(0,S+1):f=[f[0]];break}}}return f.reduceRight((x,p,z)=>{let O,U=!1,H=null,q=null;u&&(O=m&&p.route.id?m[p.route.id]:void 0,H=p.route.errorElement||s1,v&&(S<0&&z===0?(Em("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,q=null):S===z&&(U=!0,q=p.route.hydrateFallbackElement||null)));let Y=o.concat(f.slice(0,z+1)),Q=()=>{let B;return O?B=H:U?B=q:p.route.Component?B=R.createElement(p.route.Component,null):p.route.element?B=p.route.element:B=x,R.createElement(d1,{match:p,routeContext:{outlet:x,matches:Y,isDataRoute:u!=null},children:B})};return u&&(p.route.ErrorBoundary||p.route.errorElement||z===0)?R.createElement(f1,{location:u.location,revalidation:u.revalidation,component:H,error:O,children:Q(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):Q()},null)}function Cu(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function m1(i){let o=R.useContext(tl);return Dt(o,Cu(i)),o}function p1(i){let o=R.useContext(Gc);return Dt(o,Cu(i)),o}function g1(i){let o=R.useContext(dn);return Dt(o,Cu(i)),o}function _u(i){let o=g1(i),u=o.matches[o.matches.length-1];return Dt(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function v1(){return _u("useRouteId")}function x1(){let i=R.useContext(Ou),o=p1("useRouteError"),u=_u("useRouteError");return i!==void 0?i:o.errors?.[u]}function y1(){let{router:i}=m1("useNavigate"),o=_u("useNavigate"),u=R.useRef(!1);return wm(()=>{u.current=!0}),R.useCallback(async(f,m={})=>{ke(u.current,Sm),u.current&&(typeof f=="number"?i.navigate(f):await i.navigate(f,{fromRouteId:o,...m}))},[i,o])}var Wh={};function Em(i,o,u){!o&&!Wh[i]&&(Wh[i]=!0,ke(!1,u))}R.memo(b1);function b1({routes:i,future:o,state:u}){return Am(i,void 0,u,o)}function Tc(i){Dt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function S1({basename:i="/",children:o=null,location:u,navigationType:r="POP",navigator:f,static:m=!1}){Dt(!ri(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=i.replace(/^\/*/,"/"),S=R.useMemo(()=>({basename:v,navigator:f,static:m,future:{}}),[v,f,m]);typeof u=="string"&&(u=Pa(u));let{pathname:x="/",search:p="",hash:z="",state:O=null,key:U="default"}=u,H=R.useMemo(()=>{let q=fn(x,v);return q==null?null:{location:{pathname:q,search:p,hash:z,state:O,key:U},navigationType:r}},[v,x,p,z,O,U,r]);return ke(H!=null,`<Router basename="${v}"> is not able to match the URL "${x}${p}${z}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:R.createElement(Qe.Provider,{value:S},R.createElement(oi.Provider,{children:o,value:H}))}function w1({children:i,location:o}){return r1(Au(i),o)}function Au(i,o=[]){let u=[];return R.Children.forEach(i,(r,f)=>{if(!R.isValidElement(r))return;let m=[...o,f];if(r.type===R.Fragment){u.push.apply(u,Au(r.props.children,m));return}Dt(r.type===Tc,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Dt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let v={id:r.props.id||m.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(v.children=Au(r.props.children,m)),u.push(v)}),u}var Nc="get",Dc="application/x-www-form-urlencoded";function Qc(i){return i!=null&&typeof i.tagName=="string"}function A1(i){return Qc(i)&&i.tagName.toLowerCase()==="button"}function E1(i){return Qc(i)&&i.tagName.toLowerCase()==="form"}function z1(i){return Qc(i)&&i.tagName.toLowerCase()==="input"}function j1(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function R1(i,o){return i.button===0&&(!o||o==="_self")&&!j1(i)}var zc=null;function T1(){if(zc===null)try{new FormData(document.createElement("form"),0),zc=!1}catch{zc=!0}return zc}var N1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vu(i){return i!=null&&!N1.has(i)?(ke(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Dc}"`),null):i}function D1(i,o){let u,r,f,m,v;if(E1(i)){let S=i.getAttribute("action");r=S?fn(S,o):null,u=i.getAttribute("method")||Nc,f=vu(i.getAttribute("enctype"))||Dc,m=new FormData(i)}else if(A1(i)||z1(i)&&(i.type==="submit"||i.type==="image")){let S=i.form;if(S==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=i.getAttribute("formaction")||S.getAttribute("action");if(r=x?fn(x,o):null,u=i.getAttribute("formmethod")||S.getAttribute("method")||Nc,f=vu(i.getAttribute("formenctype"))||vu(S.getAttribute("enctype"))||Dc,m=new FormData(S,i),!T1()){let{name:p,type:z,value:O}=i;if(z==="image"){let U=p?`${p}.`:"";m.append(`${U}x`,"0"),m.append(`${U}y`,"0")}else p&&m.append(p,O)}}else{if(Qc(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Nc,r=null,f=Dc,v=i}return m&&f==="text/plain"&&(v=m,m=void 0),{action:r,method:u.toLowerCase(),encType:f,formData:m,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Uu(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function M1(i,o,u){let r=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return r.pathname==="/"?r.pathname=`_root.${u}`:o&&fn(r.pathname,o)==="/"?r.pathname=`${o.replace(/\/$/,"")}/_root.${u}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${u}`,r}async function O1(i,o){if(i.id in o)return o[i.id];try{let u=await import(i.module);return o[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function C1(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function _1(i,o,u){let r=await Promise.all(i.map(async f=>{let m=o.routes[f.route.id];if(m){let v=await O1(m,u);return v.links?v.links():[]}return[]}));return q1(r.flat(1).filter(C1).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Fh(i,o,u,r,f,m){let v=(x,p)=>u[p]?x.route.id!==u[p].route.id:!0,S=(x,p)=>u[p].pathname!==x.pathname||u[p].route.path?.endsWith("*")&&u[p].params["*"]!==x.params["*"];return m==="assets"?o.filter((x,p)=>v(x,p)||S(x,p)):m==="data"?o.filter((x,p)=>{let z=r.routes[x.route.id];if(!z||!z.hasLoader)return!1;if(v(x,p)||S(x,p))return!0;if(x.route.shouldRevalidate){let O=x.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function U1(i,o,{includeHydrateFallback:u}={}){return B1(i.map(r=>{let f=o.routes[r.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function B1(i){return[...new Set(i)]}function H1(i){let o={},u=Object.keys(i).sort();for(let r of u)o[r]=i[r];return o}function q1(i,o){let u=new Set;return new Set(o),i.reduce((r,f)=>{let m=JSON.stringify(H1(f));return u.has(m)||(u.add(m),r.push({key:m,link:f})),r},[])}function zm(){let i=R.useContext(tl);return Uu(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Y1(){let i=R.useContext(Gc);return Uu(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Bu=R.createContext(void 0);Bu.displayName="FrameworkContext";function jm(){let i=R.useContext(Bu);return Uu(i,"You must render this element inside a <HydratedRouter> element"),i}function L1(i,o){let u=R.useContext(Bu),[r,f]=R.useState(!1),[m,v]=R.useState(!1),{onFocus:S,onBlur:x,onMouseEnter:p,onMouseLeave:z,onTouchStart:O}=o,U=R.useRef(null);R.useEffect(()=>{if(i==="render"&&v(!0),i==="viewport"){let Y=B=>{B.forEach(K=>{v(K.isIntersecting)})},Q=new IntersectionObserver(Y,{threshold:.5});return U.current&&Q.observe(U.current),()=>{Q.disconnect()}}},[i]),R.useEffect(()=>{if(r){let Y=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(Y)}}},[r]);let H=()=>{f(!0)},q=()=>{f(!1),v(!1)};return u?i!=="intent"?[m,U,{}]:[m,U,{onFocus:ei(S,H),onBlur:ei(x,q),onMouseEnter:ei(p,H),onMouseLeave:ei(z,q),onTouchStart:ei(O,H)}]:[!1,U,{}]}function ei(i,o){return u=>{i&&i(u),u.defaultPrevented||o(u)}}function G1({page:i,...o}){let{router:u}=zm(),r=R.useMemo(()=>mm(u.routes,i,u.basename),[u.routes,i,u.basename]);return r?R.createElement(Q1,{page:i,matches:r,...o}):null}function k1(i){let{manifest:o,routeModules:u}=jm(),[r,f]=R.useState([]);return R.useEffect(()=>{let m=!1;return _1(i,o,u).then(v=>{m||f(v)}),()=>{m=!0}},[i,o,u]),r}function Q1({page:i,matches:o,...u}){let r=ca(),{manifest:f,routeModules:m}=jm(),{basename:v}=zm(),{loaderData:S,matches:x}=Y1(),p=R.useMemo(()=>Fh(i,o,x,f,r,"data"),[i,o,x,f,r]),z=R.useMemo(()=>Fh(i,o,x,f,r,"assets"),[i,o,x,f,r]),O=R.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let q=new Set,Y=!1;if(o.forEach(B=>{let K=f.routes[B.route.id];!K||!K.hasLoader||(!p.some(X=>X.route.id===B.route.id)&&B.route.id in S&&m[B.route.id]?.shouldRevalidate||K.hasClientLoader?Y=!0:q.add(B.route.id))}),q.size===0)return[];let Q=M1(i,v,"data");return Y&&q.size>0&&Q.searchParams.set("_routes",o.filter(B=>q.has(B.route.id)).map(B=>B.route.id).join(",")),[Q.pathname+Q.search]},[v,S,r,f,p,o,i,m]),U=R.useMemo(()=>U1(z,f),[z,f]),H=k1(z);return R.createElement(R.Fragment,null,O.map(q=>R.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...u})),U.map(q=>R.createElement("link",{key:q,rel:"modulepreload",href:q,...u})),H.map(({key:q,link:Y})=>R.createElement("link",{key:q,nonce:u.nonce,...Y})))}function X1(...i){return o=>{i.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var Rm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Rm&&(window.__reactRouterVersion="7.8.1")}catch{}function V1({basename:i,children:o,window:u}){let r=R.useRef();r.current==null&&(r.current=Cg({window:u,v5Compat:!0}));let f=r.current,[m,v]=R.useState({action:f.action,location:f.location}),S=R.useCallback(x=>{R.startTransition(()=>v(x))},[v]);return R.useLayoutEffect(()=>f.listen(S),[f,S]),R.createElement(S1,{basename:i,children:o,location:m.location,navigationType:m.action,navigator:f})}var Tm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hu=R.forwardRef(function({onClick:o,discover:u="render",prefetch:r="none",relative:f,reloadDocument:m,replace:v,state:S,target:x,to:p,preventScrollReset:z,viewTransition:O,...U},H){let{basename:q}=R.useContext(Qe),Y=typeof p=="string"&&Tm.test(p),Q,B=!1;if(typeof p=="string"&&Y&&(Q=p,Rm))try{let At=new URL(window.location.href),ee=p.startsWith("//")?new URL(At.protocol+p):new URL(p),ae=fn(ee.pathname,q);ee.origin===At.origin&&ae!=null?p=ae+ee.search+ee.hash:B=!0}catch{ke(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=c1(p,{relative:f}),[X,et,V]=L1(r,U),at=$1(p,{replace:v,state:S,target:x,preventScrollReset:z,relative:f,viewTransition:O});function $(At){o&&o(At),At.defaultPrevented||at(At)}let jt=R.createElement("a",{...U,...V,href:Q||K,onClick:B||m?o:$,ref:X1(H,et),target:x,"data-discover":!Y&&u==="render"?"true":void 0});return X&&!Y?R.createElement(R.Fragment,null,jt,R.createElement(G1,{page:K})):jt});Hu.displayName="Link";var Z1=R.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:r="",end:f=!1,style:m,to:v,viewTransition:S,children:x,...p},z){let O=ui(v,{relative:p.relative}),U=ca(),H=R.useContext(Gc),{navigator:q,basename:Y}=R.useContext(Qe),Q=H!=null&&tv(O)&&S===!0,B=q.encodeLocation?q.encodeLocation(O).pathname:O.pathname,K=U.pathname,X=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;u||(K=K.toLowerCase(),X=X?X.toLowerCase():null,B=B.toLowerCase()),X&&Y&&(X=fn(X,Y)||X);const et=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let V=K===B||!f&&K.startsWith(B)&&K.charAt(et)==="/",at=X!=null&&(X===B||!f&&X.startsWith(B)&&X.charAt(B.length)==="/"),$={isActive:V,isPending:at,isTransitioning:Q},jt=V?o:void 0,At;typeof r=="function"?At=r($):At=[r,V?"active":null,at?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let ee=typeof m=="function"?m($):m;return R.createElement(Hu,{...p,"aria-current":jt,className:At,ref:z,style:ee,to:v,viewTransition:S},typeof x=="function"?x($):x)});Z1.displayName="NavLink";var K1=R.forwardRef(({discover:i="render",fetcherKey:o,navigate:u,reloadDocument:r,replace:f,state:m,method:v=Nc,action:S,onSubmit:x,relative:p,preventScrollReset:z,viewTransition:O,...U},H)=>{let q=I1(),Y=P1(S,{relative:p}),Q=v.toLowerCase()==="get"?"get":"post",B=typeof S=="string"&&Tm.test(S),K=X=>{if(x&&x(X),X.defaultPrevented)return;X.preventDefault();let et=X.nativeEvent.submitter,V=et?.getAttribute("formmethod")||v;q(et||X.currentTarget,{fetcherKey:o,method:V,navigate:u,replace:f,state:m,relative:p,preventScrollReset:z,viewTransition:O})};return R.createElement("form",{ref:H,method:Q,action:Y,onSubmit:r?x:K,...U,"data-discover":!B&&i==="render"?"true":void 0})});K1.displayName="Form";function J1(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nm(i){let o=R.useContext(tl);return Dt(o,J1(i)),o}function $1(i,{target:o,replace:u,state:r,preventScrollReset:f,relative:m,viewTransition:v}={}){let S=kc(),x=ca(),p=ui(i,{relative:m});return R.useCallback(z=>{if(R1(z,o)){z.preventDefault();let O=u!==void 0?u:ii(x)===ii(p);S(i,{replace:O,state:r,preventScrollReset:f,relative:m,viewTransition:v})}},[x,S,p,u,r,o,i,f,m,v])}var W1=0,F1=()=>`__${String(++W1)}__`;function I1(){let{router:i}=Nm("useSubmit"),{basename:o}=R.useContext(Qe),u=v1();return R.useCallback(async(r,f={})=>{let{action:m,method:v,encType:S,formData:x,body:p}=D1(r,o);if(f.navigate===!1){let z=f.fetcherKey||F1();await i.fetch(z,u,f.action||m,{preventScrollReset:f.preventScrollReset,formData:x,body:p,formMethod:f.method||v,formEncType:f.encType||S,flushSync:f.flushSync})}else await i.navigate(f.action||m,{preventScrollReset:f.preventScrollReset,formData:x,body:p,formMethod:f.method||v,formEncType:f.encType||S,replace:f.replace,state:f.state,fromRouteId:u,flushSync:f.flushSync,viewTransition:f.viewTransition})},[i,o,u])}function P1(i,{relative:o}={}){let{basename:u}=R.useContext(Qe),r=R.useContext(dn);Dt(r,"useFormAction must be used inside a RouteContext");let[f]=r.matches.slice(-1),m={...ui(i||".",{relative:o})},v=ca();if(i==null){m.search=v.search;let S=new URLSearchParams(m.search),x=S.getAll("index");if(x.some(z=>z==="")){S.delete("index"),x.filter(O=>O).forEach(O=>S.append("index",O));let z=S.toString();m.search=z?`?${z}`:""}}return(!i||i===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:sn([u,m.pathname])),ii(m)}function tv(i,{relative:o}={}){let u=R.useContext(bm);Dt(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Nm("useViewTransitionState"),f=ui(i,{relative:o});if(!u.isTransitioning)return!1;let m=fn(u.currentLocation.pathname,r)||u.currentLocation.pathname,v=fn(u.nextLocation.pathname,r)||u.nextLocation.pathname;return Bc(f.pathname,v)!=null||Bc(f.pathname,m)!=null}var ue=function(){return ue=Object.assign||function(o){for(var u,r=1,f=arguments.length;r<f;r++){u=arguments[r];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(o[m]=u[m])}return o},ue.apply(this,arguments)};function Hc(i,o,u){if(u||arguments.length===2)for(var r=0,f=o.length,m;r<f;r++)(m||!(r in o))&&(m||(m=Array.prototype.slice.call(o,0,r)),m[r]=o[r]);return i.concat(m||Array.prototype.slice.call(o))}var Rt="-ms-",ai="-moz-",gt="-webkit-",Dm="comm",Xc="rule",qu="decl",ev="@import",Mm="@keyframes",nv="@layer",Om=Math.abs,Yu=String.fromCharCode,Eu=Object.assign;function av(i,o){return Kt(i,0)^45?(((o<<2^Kt(i,0))<<2^Kt(i,1))<<2^Kt(i,2))<<2^Kt(i,3):0}function Cm(i){return i.trim()}function un(i,o){return(i=o.exec(i))?i[0]:i}function it(i,o,u){return i.replace(o,u)}function Mc(i,o,u){return i.indexOf(o,u)}function Kt(i,o){return i.charCodeAt(o)|0}function Ja(i,o,u){return i.slice(o,u)}function Ge(i){return i.length}function _m(i){return i.length}function ni(i,o){return o.push(i),i}function lv(i,o){return i.map(o).join("")}function Ih(i,o){return i.filter(function(u){return!un(u,o)})}var Vc=1,$a=1,Um=0,De=0,Ht=0,el="";function Zc(i,o,u,r,f,m,v,S){return{value:i,root:o,parent:u,type:r,props:f,children:m,line:Vc,column:$a,length:v,return:"",siblings:S}}function Hn(i,o){return Eu(Zc("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},o)}function Za(i){for(;i.root;)i=Hn(i.root,{children:[i]});ni(i,i.siblings)}function iv(){return Ht}function cv(){return Ht=De>0?Kt(el,--De):0,$a--,Ht===10&&($a=1,Vc--),Ht}function _e(){return Ht=De<Um?Kt(el,De++):0,$a++,Ht===10&&($a=1,Vc++),Ht}function la(){return Kt(el,De)}function Oc(){return De}function Kc(i,o){return Ja(el,i,o)}function zu(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ov(i){return Vc=$a=1,Um=Ge(el=i),De=0,[]}function rv(i){return el="",i}function xu(i){return Cm(Kc(De-1,ju(i===91?i+2:i===40?i+1:i)))}function uv(i){for(;(Ht=la())&&Ht<33;)_e();return zu(i)>2||zu(Ht)>3?"":" "}function sv(i,o){for(;--o&&_e()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return Kc(i,Oc()+(o<6&&la()==32&&_e()==32))}function ju(i){for(;_e();)switch(Ht){case i:return De;case 34:case 39:i!==34&&i!==39&&ju(Ht);break;case 40:i===41&&ju(i);break;case 92:_e();break}return De}function fv(i,o){for(;_e()&&i+Ht!==57;)if(i+Ht===84&&la()===47)break;return"/*"+Kc(o,De-1)+"*"+Yu(i===47?i:_e())}function dv(i){for(;!zu(la());)_e();return Kc(i,De)}function hv(i){return rv(Cc("",null,null,null,[""],i=ov(i),0,[0],i))}function Cc(i,o,u,r,f,m,v,S,x){for(var p=0,z=0,O=v,U=0,H=0,q=0,Y=1,Q=1,B=1,K=0,X="",et=f,V=m,at=r,$=X;Q;)switch(q=K,K=_e()){case 40:if(q!=108&&Kt($,O-1)==58){Mc($+=it(xu(K),"&","&\f"),"&\f",Om(p?S[p-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:$+=xu(K);break;case 9:case 10:case 13:case 32:$+=uv(q);break;case 92:$+=sv(Oc()-1,7);continue;case 47:switch(la()){case 42:case 47:ni(mv(fv(_e(),Oc()),o,u,x),x);break;default:$+="/"}break;case 123*Y:S[p++]=Ge($)*B;case 125*Y:case 59:case 0:switch(K){case 0:case 125:Q=0;case 59+z:B==-1&&($=it($,/\f/g,"")),H>0&&Ge($)-O&&ni(H>32?tm($+";",r,u,O-1,x):tm(it($," ","")+";",r,u,O-2,x),x);break;case 59:$+=";";default:if(ni(at=Ph($,o,u,p,z,f,S,X,et=[],V=[],O,m),m),K===123)if(z===0)Cc($,o,at,at,et,m,O,S,V);else switch(U===99&&Kt($,3)===110?100:U){case 100:case 108:case 109:case 115:Cc(i,at,at,r&&ni(Ph(i,at,at,0,0,f,S,X,f,et=[],O,V),V),f,V,O,S,r?et:V);break;default:Cc($,at,at,at,[""],V,0,S,V)}}p=z=H=0,Y=B=1,X=$="",O=v;break;case 58:O=1+Ge($),H=q;default:if(Y<1){if(K==123)--Y;else if(K==125&&Y++==0&&cv()==125)continue}switch($+=Yu(K),K*Y){case 38:B=z>0?1:($+="\f",-1);break;case 44:S[p++]=(Ge($)-1)*B,B=1;break;case 64:la()===45&&($+=xu(_e())),U=la(),z=O=Ge(X=$+=dv(Oc())),K++;break;case 45:q===45&&Ge($)==2&&(Y=0)}}return m}function Ph(i,o,u,r,f,m,v,S,x,p,z,O){for(var U=f-1,H=f===0?m:[""],q=_m(H),Y=0,Q=0,B=0;Y<r;++Y)for(var K=0,X=Ja(i,U+1,U=Om(Q=v[Y])),et=i;K<q;++K)(et=Cm(Q>0?H[K]+" "+X:it(X,/&\f/g,H[K])))&&(x[B++]=et);return Zc(i,o,u,f===0?Xc:S,x,p,z,O)}function mv(i,o,u,r){return Zc(i,o,u,Dm,Yu(iv()),Ja(i,2,-2),0,r)}function tm(i,o,u,r,f){return Zc(i,o,u,qu,Ja(i,0,r),Ja(i,r+1,-1),r,f)}function Bm(i,o,u){switch(av(i,o)){case 5103:return gt+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return gt+i+i;case 4789:return ai+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return gt+i+ai+i+Rt+i+i;case 5936:switch(Kt(i,o+11)){case 114:return gt+i+Rt+it(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return gt+i+Rt+it(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return gt+i+Rt+it(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return gt+i+Rt+i+i;case 6165:return gt+i+Rt+"flex-"+i+i;case 5187:return gt+i+it(i,/(\w+).+(:[^]+)/,gt+"box-$1$2"+Rt+"flex-$1$2")+i;case 5443:return gt+i+Rt+"flex-item-"+it(i,/flex-|-self/g,"")+(un(i,/flex-|baseline/)?"":Rt+"grid-row-"+it(i,/flex-|-self/g,""))+i;case 4675:return gt+i+Rt+"flex-line-pack"+it(i,/align-content|flex-|-self/g,"")+i;case 5548:return gt+i+Rt+it(i,"shrink","negative")+i;case 5292:return gt+i+Rt+it(i,"basis","preferred-size")+i;case 6060:return gt+"box-"+it(i,"-grow","")+gt+i+Rt+it(i,"grow","positive")+i;case 4554:return gt+it(i,/([^-])(transform)/g,"$1"+gt+"$2")+i;case 6187:return it(it(it(i,/(zoom-|grab)/,gt+"$1"),/(image-set)/,gt+"$1"),i,"")+i;case 5495:case 3959:return it(i,/(image-set\([^]*)/,gt+"$1$`$1");case 4968:return it(it(i,/(.+:)(flex-)?(.*)/,gt+"box-pack:$3"+Rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+gt+i+i;case 4200:if(!un(i,/flex-|baseline/))return Rt+"grid-column-align"+Ja(i,o)+i;break;case 2592:case 3360:return Rt+it(i,"template-","")+i;case 4384:case 3616:return u&&u.some(function(r,f){return o=f,un(r.props,/grid-\w+-end/)})?~Mc(i+(u=u[o].value),"span",0)?i:Rt+it(i,"-start","")+i+Rt+"grid-row-span:"+(~Mc(u,"span",0)?un(u,/\d+/):+un(u,/\d+/)-+un(i,/\d+/))+";":Rt+it(i,"-start","")+i;case 4896:case 4128:return u&&u.some(function(r){return un(r.props,/grid-\w+-start/)})?i:Rt+it(it(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return it(i,/(.+)-inline(.+)/,gt+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ge(i)-1-o>6)switch(Kt(i,o+1)){case 109:if(Kt(i,o+4)!==45)break;case 102:return it(i,/(.+:)(.+)-([^]+)/,"$1"+gt+"$2-$3$1"+ai+(Kt(i,o+3)==108?"$3":"$2-$3"))+i;case 115:return~Mc(i,"stretch",0)?Bm(it(i,"stretch","fill-available"),o,u)+i:i}break;case 5152:case 5920:return it(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,f,m,v,S,x,p){return Rt+f+":"+m+p+(v?Rt+f+"-span:"+(S?x:+x-+m)+p:"")+i});case 4949:if(Kt(i,o+6)===121)return it(i,":",":"+gt)+i;break;case 6444:switch(Kt(i,Kt(i,14)===45?18:11)){case 120:return it(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+gt+(Kt(i,14)===45?"inline-":"")+"box$3$1"+gt+"$2$3$1"+Rt+"$2box$3")+i;case 100:return it(i,":",":"+Rt)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return it(i,"scroll-","scroll-snap-")+i}return i}function qc(i,o){for(var u="",r=0;r<i.length;r++)u+=o(i[r],r,i,o)||"";return u}function pv(i,o,u,r){switch(i.type){case nv:if(i.children.length)break;case ev:case qu:return i.return=i.return||i.value;case Dm:return"";case Mm:return i.return=i.value+"{"+qc(i.children,r)+"}";case Xc:if(!Ge(i.value=i.props.join(",")))return""}return Ge(u=qc(i.children,r))?i.return=i.value+"{"+u+"}":""}function gv(i){var o=_m(i);return function(u,r,f,m){for(var v="",S=0;S<o;S++)v+=i[S](u,r,f,m)||"";return v}}function vv(i){return function(o){o.root||(o=o.return)&&i(o)}}function xv(i,o,u,r){if(i.length>-1&&!i.return)switch(i.type){case qu:i.return=Bm(i.value,i.length,u);return;case Mm:return qc([Hn(i,{value:it(i.value,"@","@"+gt)})],r);case Xc:if(i.length)return lv(u=i.props,function(f){switch(un(f,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Za(Hn(i,{props:[it(f,/:(read-\w+)/,":"+ai+"$1")]})),Za(Hn(i,{props:[f]})),Eu(i,{props:Ih(u,r)});break;case"::placeholder":Za(Hn(i,{props:[it(f,/:(plac\w+)/,":"+gt+"input-$1")]})),Za(Hn(i,{props:[it(f,/:(plac\w+)/,":"+ai+"$1")]})),Za(Hn(i,{props:[it(f,/:(plac\w+)/,Rt+"input-$1")]})),Za(Hn(i,{props:[f]})),Eu(i,{props:Ih(u,r)});break}return""})}}var yv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ye={},Wa=typeof process<"u"&&ye!==void 0&&(ye.REACT_APP_SC_ATTR||ye.SC_ATTR)||"data-styled",Hm="active",qm="data-styled-version",Jc="6.1.19",Lu=`/*!sc*/
`,Yc=typeof window<"u"&&typeof document<"u",bv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ye!==void 0&&ye.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ye.REACT_APP_SC_DISABLE_SPEEDY!==""?ye.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ye.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ye!==void 0&&ye.SC_DISABLE_SPEEDY!==void 0&&ye.SC_DISABLE_SPEEDY!==""&&ye.SC_DISABLE_SPEEDY!=="false"&&ye.SC_DISABLE_SPEEDY),$c=Object.freeze([]),Fa=Object.freeze({});function Sv(i,o,u){return u===void 0&&(u=Fa),i.theme!==u.theme&&i.theme||o||u.theme}var Ym=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Av=/(^-|-$)/g;function em(i){return i.replace(wv,"-").replace(Av,"")}var Ev=/(a)(d)/gi,jc=52,nm=function(i){return String.fromCharCode(i+(i>25?39:97))};function Ru(i){var o,u="";for(o=Math.abs(i);o>jc;o=o/jc|0)u=nm(o%jc)+u;return(nm(o%jc)+u).replace(Ev,"$1-$2")}var yu,Lm=5381,Ka=function(i,o){for(var u=o.length;u;)i=33*i^o.charCodeAt(--u);return i},Gm=function(i){return Ka(Lm,i)};function zv(i){return Ru(Gm(i)>>>0)}function jv(i){return i.displayName||i.name||"Component"}function bu(i){return typeof i=="string"&&!0}var km=typeof Symbol=="function"&&Symbol.for,Qm=km?Symbol.for("react.memo"):60115,Rv=km?Symbol.for("react.forward_ref"):60112,Tv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Nv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dv=((yu={})[Rv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yu[Qm]=Xm,yu);function am(i){return("type"in(o=i)&&o.type.$$typeof)===Qm?Xm:"$$typeof"in i?Dv[i.$$typeof]:Tv;var o}var Mv=Object.defineProperty,Ov=Object.getOwnPropertyNames,lm=Object.getOwnPropertySymbols,Cv=Object.getOwnPropertyDescriptor,_v=Object.getPrototypeOf,im=Object.prototype;function Vm(i,o,u){if(typeof o!="string"){if(im){var r=_v(o);r&&r!==im&&Vm(i,r,u)}var f=Ov(o);lm&&(f=f.concat(lm(o)));for(var m=am(i),v=am(o),S=0;S<f.length;++S){var x=f[S];if(!(x in Nv||u&&u[x]||v&&x in v||m&&x in m)){var p=Cv(o,x);try{Mv(i,x,p)}catch{}}}}return i}function Ia(i){return typeof i=="function"}function Gu(i){return typeof i=="object"&&"styledComponentId"in i}function aa(i,o){return i&&o?"".concat(i," ").concat(o):i||o||""}function cm(i,o){if(i.length===0)return"";for(var u=i[0],r=1;r<i.length;r++)u+=i[r];return u}function ci(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Tu(i,o,u){if(u===void 0&&(u=!1),!u&&!ci(i)&&!Array.isArray(i))return o;if(Array.isArray(o))for(var r=0;r<o.length;r++)i[r]=Tu(i[r],o[r]);else if(ci(o))for(var r in o)i[r]=Tu(i[r],o[r]);return i}function ku(i,o){Object.defineProperty(i,"toString",{value:o})}function si(i){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Uv=(function(){function i(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return i.prototype.indexOfGroup=function(o){for(var u=0,r=0;r<o;r++)u+=this.groupSizes[r];return u},i.prototype.insertRules=function(o,u){if(o>=this.groupSizes.length){for(var r=this.groupSizes,f=r.length,m=f;o>=m;)if((m<<=1)<0)throw si(16,"".concat(o));this.groupSizes=new Uint32Array(m),this.groupSizes.set(r),this.length=m;for(var v=f;v<m;v++)this.groupSizes[v]=0}for(var S=this.indexOfGroup(o+1),x=(v=0,u.length);v<x;v++)this.tag.insertRule(S,u[v])&&(this.groupSizes[o]++,S++)},i.prototype.clearGroup=function(o){if(o<this.length){var u=this.groupSizes[o],r=this.indexOfGroup(o),f=r+u;this.groupSizes[o]=0;for(var m=r;m<f;m++)this.tag.deleteRule(r)}},i.prototype.getGroup=function(o){var u="";if(o>=this.length||this.groupSizes[o]===0)return u;for(var r=this.groupSizes[o],f=this.indexOfGroup(o),m=f+r,v=f;v<m;v++)u+="".concat(this.tag.getRule(v)).concat(Lu);return u},i})(),_c=new Map,Lc=new Map,Uc=1,Rc=function(i){if(_c.has(i))return _c.get(i);for(;Lc.has(Uc);)Uc++;var o=Uc++;return _c.set(i,o),Lc.set(o,i),o},Bv=function(i,o){Uc=o+1,_c.set(i,o),Lc.set(o,i)},Hv="style[".concat(Wa,"][").concat(qm,'="').concat(Jc,'"]'),qv=new RegExp("^".concat(Wa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Yv=function(i,o,u){for(var r,f=u.split(","),m=0,v=f.length;m<v;m++)(r=f[m])&&i.registerName(o,r)},Lv=function(i,o){for(var u,r=((u=o.textContent)!==null&&u!==void 0?u:"").split(Lu),f=[],m=0,v=r.length;m<v;m++){var S=r[m].trim();if(S){var x=S.match(qv);if(x){var p=0|parseInt(x[1],10),z=x[2];p!==0&&(Bv(z,p),Yv(i,z,x[3]),i.getTag().insertRules(p,f)),f.length=0}else f.push(S)}}},om=function(i){for(var o=document.querySelectorAll(Hv),u=0,r=o.length;u<r;u++){var f=o[u];f&&f.getAttribute(Wa)!==Hm&&(Lv(i,f),f.parentNode&&f.parentNode.removeChild(f))}};function Gv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Zm=function(i){var o=document.head,u=i||o,r=document.createElement("style"),f=(function(S){var x=Array.from(S.querySelectorAll("style[".concat(Wa,"]")));return x[x.length-1]})(u),m=f!==void 0?f.nextSibling:null;r.setAttribute(Wa,Hm),r.setAttribute(qm,Jc);var v=Gv();return v&&r.setAttribute("nonce",v),u.insertBefore(r,m),r},kv=(function(){function i(o){this.element=Zm(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var r=document.styleSheets,f=0,m=r.length;f<m;f++){var v=r[f];if(v.ownerNode===u)return v}throw si(17)})(this.element),this.length=0}return i.prototype.insertRule=function(o,u){try{return this.sheet.insertRule(u,o),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},i.prototype.getRule=function(o){var u=this.sheet.cssRules[o];return u&&u.cssText?u.cssText:""},i})(),Qv=(function(){function i(o){this.element=Zm(o),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(o,u){if(o<=this.length&&o>=0){var r=document.createTextNode(u);return this.element.insertBefore(r,this.nodes[o]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},i.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},i})(),Xv=(function(){function i(o){this.rules=[],this.length=0}return i.prototype.insertRule=function(o,u){return o<=this.length&&(this.rules.splice(o,0,u),this.length++,!0)},i.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},i.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},i})(),rm=Yc,Vv={isServer:!Yc,useCSSOMInjection:!bv},Km=(function(){function i(o,u,r){o===void 0&&(o=Fa),u===void 0&&(u={});var f=this;this.options=ue(ue({},Vv),o),this.gs=u,this.names=new Map(r),this.server=!!o.isServer,!this.server&&Yc&&rm&&(rm=!1,om(this)),ku(this,function(){return(function(m){for(var v=m.getTag(),S=v.length,x="",p=function(O){var U=(function(B){return Lc.get(B)})(O);if(U===void 0)return"continue";var H=m.names.get(U),q=v.getGroup(O);if(H===void 0||!H.size||q.length===0)return"continue";var Y="".concat(Wa,".g").concat(O,'[id="').concat(U,'"]'),Q="";H!==void 0&&H.forEach(function(B){B.length>0&&(Q+="".concat(B,","))}),x+="".concat(q).concat(Y,'{content:"').concat(Q,'"}').concat(Lu)},z=0;z<S;z++)p(z);return x})(f)})}return i.registerId=function(o){return Rc(o)},i.prototype.rehydrate=function(){!this.server&&Yc&&om(this)},i.prototype.reconstructWithOptions=function(o,u){return u===void 0&&(u=!0),new i(ue(ue({},this.options),o),this.gs,u&&this.names||void 0)},i.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(u){var r=u.useCSSOMInjection,f=u.target;return u.isServer?new Xv(f):r?new kv(f):new Qv(f)})(this.options),new Uv(o)));var o},i.prototype.hasNameForId=function(o,u){return this.names.has(o)&&this.names.get(o).has(u)},i.prototype.registerName=function(o,u){if(Rc(o),this.names.has(o))this.names.get(o).add(u);else{var r=new Set;r.add(u),this.names.set(o,r)}},i.prototype.insertRules=function(o,u,r){this.registerName(o,u),this.getTag().insertRules(Rc(o),r)},i.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},i.prototype.clearRules=function(o){this.getTag().clearGroup(Rc(o)),this.clearNames(o)},i.prototype.clearTag=function(){this.tag=void 0},i})(),Zv=/&/g,Kv=/^\s*\/\/.*$/gm;function Jm(i,o){return i.map(function(u){return u.type==="rule"&&(u.value="".concat(o," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(o," ")),u.props=u.props.map(function(r){return"".concat(o," ").concat(r)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=Jm(u.children,o)),u})}function Jv(i){var o,u,r,f=Fa,m=f.options,v=m===void 0?Fa:m,S=f.plugins,x=S===void 0?$c:S,p=function(U,H,q){return q.startsWith(u)&&q.endsWith(u)&&q.replaceAll(u,"").length>0?".".concat(o):U},z=x.slice();z.push(function(U){U.type===Xc&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(Zv,u).replace(r,p))}),v.prefix&&z.push(xv),z.push(pv);var O=function(U,H,q,Y){H===void 0&&(H=""),q===void 0&&(q=""),Y===void 0&&(Y="&"),o=Y,u=H,r=new RegExp("\\".concat(u,"\\b"),"g");var Q=U.replace(Kv,""),B=hv(q||H?"".concat(q," ").concat(H," { ").concat(Q," }"):Q);v.namespace&&(B=Jm(B,v.namespace));var K=[];return qc(B,gv(z.concat(vv(function(X){return K.push(X)})))),K};return O.hash=x.length?x.reduce(function(U,H){return H.name||si(15),Ka(U,H.name)},Lm).toString():"",O}var $v=new Km,Nu=Jv(),$m=li.createContext({shouldForwardProp:void 0,styleSheet:$v,stylis:Nu});$m.Consumer;li.createContext(void 0);function um(){return R.useContext($m)}var Wv=(function(){function i(o,u){var r=this;this.inject=function(f,m){m===void 0&&(m=Nu);var v=r.name+m.hash;f.hasNameForId(r.id,v)||f.insertRules(r.id,v,m(r.rules,v,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=u,ku(this,function(){throw si(12,String(r.name))})}return i.prototype.getName=function(o){return o===void 0&&(o=Nu),this.name+o.hash},i})(),Fv=function(i){return i>="A"&&i<="Z"};function sm(i){for(var o="",u=0;u<i.length;u++){var r=i[u];if(u===1&&r==="-"&&i[0]==="-")return i;Fv(r)?o+="-"+r.toLowerCase():o+=r}return o.startsWith("ms-")?"-"+o:o}var Wm=function(i){return i==null||i===!1||i===""},Fm=function(i){var o,u,r=[];for(var f in i){var m=i[f];i.hasOwnProperty(f)&&!Wm(m)&&(Array.isArray(m)&&m.isCss||Ia(m)?r.push("".concat(sm(f),":"),m,";"):ci(m)?r.push.apply(r,Hc(Hc(["".concat(f," {")],Fm(m),!1),["}"],!1)):r.push("".concat(sm(f),": ").concat((o=f,(u=m)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||o in yv||o.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return r};function ia(i,o,u,r){if(Wm(i))return[];if(Gu(i))return[".".concat(i.styledComponentId)];if(Ia(i)){if(!Ia(m=i)||m.prototype&&m.prototype.isReactComponent||!o)return[i];var f=i(o);return ia(f,o,u,r)}var m;return i instanceof Wv?u?(i.inject(u,r),[i.getName(r)]):[i]:ci(i)?Fm(i):Array.isArray(i)?Array.prototype.concat.apply($c,i.map(function(v){return ia(v,o,u,r)})):[i.toString()]}function Iv(i){for(var o=0;o<i.length;o+=1){var u=i[o];if(Ia(u)&&!Gu(u))return!1}return!0}var Pv=Gm(Jc),tx=(function(){function i(o,u,r){this.rules=o,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Iv(o),this.componentId=u,this.baseHash=Ka(Pv,u),this.baseStyle=r,Km.registerId(u)}return i.prototype.generateAndInjectStyles=function(o,u,r){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,u,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))f=aa(f,this.staticRulesId);else{var m=cm(ia(this.rules,o,u,r)),v=Ru(Ka(this.baseHash,m)>>>0);if(!u.hasNameForId(this.componentId,v)){var S=r(m,".".concat(v),void 0,this.componentId);u.insertRules(this.componentId,v,S)}f=aa(f,v),this.staticRulesId=v}else{for(var x=Ka(this.baseHash,r.hash),p="",z=0;z<this.rules.length;z++){var O=this.rules[z];if(typeof O=="string")p+=O;else if(O){var U=cm(ia(O,o,u,r));x=Ka(x,U+z),p+=U}}if(p){var H=Ru(x>>>0);u.hasNameForId(this.componentId,H)||u.insertRules(this.componentId,H,r(p,".".concat(H),void 0,this.componentId)),f=aa(f,H)}}return f},i})(),Im=li.createContext(void 0);Im.Consumer;var Su={};function ex(i,o,u){var r=Gu(i),f=i,m=!bu(i),v=o.attrs,S=v===void 0?$c:v,x=o.componentId,p=x===void 0?(function(et,V){var at=typeof et!="string"?"sc":em(et);Su[at]=(Su[at]||0)+1;var $="".concat(at,"-").concat(zv(Jc+at+Su[at]));return V?"".concat(V,"-").concat($):$})(o.displayName,o.parentComponentId):x,z=o.displayName,O=z===void 0?(function(et){return bu(et)?"styled.".concat(et):"Styled(".concat(jv(et),")")})(i):z,U=o.displayName&&o.componentId?"".concat(em(o.displayName),"-").concat(o.componentId):o.componentId||p,H=r&&f.attrs?f.attrs.concat(S).filter(Boolean):S,q=o.shouldForwardProp;if(r&&f.shouldForwardProp){var Y=f.shouldForwardProp;if(o.shouldForwardProp){var Q=o.shouldForwardProp;q=function(et,V){return Y(et,V)&&Q(et,V)}}else q=Y}var B=new tx(u,U,r?f.componentStyle:void 0);function K(et,V){return(function(at,$,jt){var At=at.attrs,ee=at.componentStyle,ae=at.defaultProps,Lt=at.foldedComponentIds,Xe=at.styledComponentId,Ve=at.target,Gt=li.useContext(Im),N=um(),G=at.shouldForwardProp||N.shouldForwardProp,F=Sv($,Gt,ae)||Fa,rt=(function(ut,P,kt){for(var pt,Ft=ue(ue({},P),{className:void 0,theme:kt}),qn=0;qn<ut.length;qn+=1){var Ze=Ia(pt=ut[qn])?pt(Ft):pt;for(var be in Ze)Ft[be]=be==="className"?aa(Ft[be],Ze[be]):be==="style"?ue(ue({},Ft[be]),Ze[be]):Ze[be]}return P.className&&(Ft.className=aa(Ft.className,P.className)),Ft})(At,$,F),y=rt.as||Ve,_={};for(var L in rt)rt[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&rt.theme===F||(L==="forwardedAs"?_.as=rt.forwardedAs:G&&!G(L,y)||(_[L]=rt[L]));var k=(function(ut,P){var kt=um(),pt=ut.generateAndInjectStyles(P,kt.styleSheet,kt.stylis);return pt})(ee,rt),W=aa(Lt,Xe);return k&&(W+=" "+k),rt.className&&(W+=" "+rt.className),_[bu(y)&&!Ym.has(y)?"class":"className"]=W,jt&&(_.ref=jt),R.createElement(y,_)})(X,et,V)}K.displayName=O;var X=li.forwardRef(K);return X.attrs=H,X.componentStyle=B,X.displayName=O,X.shouldForwardProp=q,X.foldedComponentIds=r?aa(f.foldedComponentIds,f.styledComponentId):"",X.styledComponentId=U,X.target=r?f.target:i,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(et){this._foldedDefaultProps=r?(function(V){for(var at=[],$=1;$<arguments.length;$++)at[$-1]=arguments[$];for(var jt=0,At=at;jt<At.length;jt++)Tu(V,At[jt],!0);return V})({},f.defaultProps,et):et}}),ku(X,function(){return".".concat(X.styledComponentId)}),m&&Vm(X,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function fm(i,o){for(var u=[i[0]],r=0,f=o.length;r<f;r+=1)u.push(o[r],i[r+1]);return u}var dm=function(i){return Object.assign(i,{isCss:!0})};function nx(i){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];if(Ia(i)||ci(i))return dm(ia(fm($c,Hc([i],o,!0))));var r=i;return o.length===0&&r.length===1&&typeof r[0]=="string"?ia(r):dm(ia(fm(r,o)))}function Du(i,o,u){if(u===void 0&&(u=Fa),!o)throw si(1,o);var r=function(f){for(var m=[],v=1;v<arguments.length;v++)m[v-1]=arguments[v];return i(o,u,nx.apply(void 0,Hc([f],m,!1)))};return r.attrs=function(f){return Du(i,o,ue(ue({},u),{attrs:Array.prototype.concat(u.attrs,f).filter(Boolean)}))},r.withConfig=function(f){return Du(i,o,ue(ue({},u),f))},r}var Pm=function(i){return Du(ex,i)},yt=Pm;Ym.forEach(function(i){yt[i]=Pm(i)});const ax=yt.div`
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
`;function lx(){return h.jsx(ax,{children:h.jsxs("section",{className:"content-section",children:[h.jsx("p",{className:"text1",children:"Quer assistir? Informe seu email para criar ou reiniciar sua assinatura."}),h.jsxs("div",{className:"content-controls",children:[h.jsx("input",{type:"text",placeholder:"Email"}),h.jsxs("button",{children:["Vamos Lá ",h.jsx("span",{children:">"})," "]})]}),h.jsx("div",{className:"doubt-container",children:h.jsxs("p",{className:"doubt",children:["Dúvidas? Ligue para ",h.jsx("span",{children:"0800 591 2876"})]})}),h.jsxs("div",{className:"p1",children:[h.jsx("p",{children:"Perguntas Frequentes"}),h.jsx("p",{children:"Central de Ajuda"}),h.jsx("p",{children:"Conta"}),h.jsx("p",{children:"Media Center"})]}),h.jsxs("div",{className:"p2",children:[h.jsx("p",{children:"Relações com Investidores"}),h.jsx("p",{children:"Carreiras"}),h.jsx("p",{children:"Resgatar cartão pré-pago"}),h.jsx("p",{children:"Comprar cartão pré-pago"})]}),h.jsxs("div",{className:"p3",children:[h.jsx("p",{children:"Formas de assistir"}),h.jsx("p",{children:"Termos de Uso"}),h.jsx("p",{children:"Privacidade"}),h.jsx("p",{children:"Preferências de cookies"})]}),h.jsxs("div",{className:"p4",children:[h.jsx("p",{children:"Informações corporativas"}),h.jsx("p",{children:"Entre em contato"}),h.jsx("p",{children:"Teste de velocidade"}),h.jsx("p",{children:"Avisos legais"})]}),h.jsx("div",{className:"p5",children:h.jsx("p",{children:"Só na Netflix"})}),h.jsxs("div",{className:"final",children:[h.jsxs("select",{children:[h.jsx("option",{value:"portugues",children:"Português"}),h.jsx("option",{value:"ingles",children:"Inglês"})]}),h.jsx("p",{children:"Netflix Brasil"})]})]})})}const ix=yt.div`
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
`,Qu="/Movies-ReactJS/assets/Logonetflix-cJzkA86F.png";function cx(){const i=kc(),o=()=>{i("/sign-in")};return h.jsxs(ix,{children:[h.jsx("img",{src:Qu,alt:"Logo da Netflix"}),h.jsxs("div",{className:"user-controls",children:[h.jsxs("select",{children:[h.jsx("option",{value:"portugues",children:"Português"}),h.jsx("option",{value:"ingles",children:"Inglês"})]}),h.jsx("button",{onClick:o,children:"Entrar"})]})]})}const ox="/Movies-ReactJS/assets/background-G0Np5zM9.jpg",rx=yt.div`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  width: 100%;
  height: 100vh;
  background-image: url(${ox});
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
  
  `;function ux(){return h.jsx(h.Fragment,{children:h.jsxs(rx,{children:[h.jsx(cx,{}),h.jsxs("section",{className:"content-section",children:[h.jsx("h1",{children:"Filmes, Séries e muito mais, sem limites"}),h.jsx("p",{children:"Assista onde quiser. Cancele quando quiser"}),h.jsx("p",{className:"p2",children:"Quer assistir? Informe seu email para criar ou reiniciar sua assinatura."}),h.jsxs("div",{className:"controls",children:[h.jsx("input",{type:"text",placeholder:"Email"}),h.jsxs("button",{children:["Vamos Lá ",h.jsx("span",{children:">"})]})]})]})]})})}const sx=yt.div`
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
`,fx="/Movies-ReactJS/assets/pipoca-C290b5xr.png";function dx(){return h.jsx(sx,{children:h.jsxs("section",{className:"content-section",children:[h.jsx("img",{src:fx,alt:"Imagem da pipoca"}),h.jsxs("div",{className:"content",children:[h.jsx("h2",{children:"A Netflix que você adora por apenas R$ 20,90."}),h.jsx("p",{children:"Assine o plano Padrão com anúncios."}),h.jsx(Hu,{to:"/",children:" Saiba Mais > "})]})]})})}const hx=yt.div`
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
`,mx="/Movies-ReactJS/assets/tv-netflix-BWLwypTF.png";function px(){return h.jsx(hx,{children:h.jsxs("div",{className:"content-section",children:[h.jsxs("div",{className:"text",children:[h.jsx("h2",{children:"Aproveite na tv"}),h.jsx("p",{children:"Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."})]}),h.jsx("img",{src:mx,alt:"Versão TV"})]})})}const gx=yt.div`
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
`,vx="/Movies-ReactJS/assets/dispositivos-Yv656wfi.png";function xx(){return h.jsx(gx,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("img",{src:vx,alt:"Mobile"}),h.jsxs("div",{className:"text",children:[h.jsx("h2",{children:"Assista onde quiser"}),h.jsx("p",{children:"Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV."})]})]})})}const yx=yt.div`
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
`,bx="/Movies-ReactJS/assets/kids-DbAjh5sn.png";function Sx(){return h.jsx(yx,{children:h.jsxs("div",{className:"content-section",children:[h.jsxs("div",{className:"text",children:[h.jsx("h2",{children:"Crie perfis para crianças"}),h.jsx("p",{children:"Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."})]}),h.jsx("img",{src:bx,alt:"Mobile"})]})})}const wx=yt.div`
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
`,Ax="/Movies-ReactJS/assets/movel-A3IsfRxB.png";function Ex(){return h.jsx(wx,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("img",{src:Ax,alt:"Mobile"}),h.jsxs("div",{className:"text",children:[h.jsx("h2",{children:"Baixe séries para assistir offline"}),h.jsx("p",{children:"Assista em um avião, trem ou submarino..."})]})]})})}const zx=yt.div`
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
`;function jx(){const[i,o]=R.useState(null),u=f=>{o(i===f?null:f)},r=[{question:"O que é Netflix?",answer:"A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes."},{question:"Quanto custa a Netflix?",answer:"Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 20,90 a R$ 59,90 por mês. Sem contrato nem taxas extras."},{question:"Onde posso assistir?",answer:"Assista onde quiser, quando quiser. Acesse sua conta Netflix em netflix.com para assistir no computador ou em qualquer aparelho conectado à internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. Leve a Netflix com você para qualquer lugar."},{question:"Como faço para cancelar?",answer:"A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento."},{question:"O que eu posso assistir na Netflix?",answer:"A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser."},{question:"A Netflix é adequada para crianças?",answer:"A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis. O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam."}];return h.jsx(zx,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("h3",{children:"Perguntas frequentes"}),h.jsx("div",{className:"cards",children:r.map((f,m)=>h.jsxs("div",{className:`faq-item ${i===m?"active":""}`,onClick:()=>u(m),children:[h.jsxs("div",{className:"faq-header",children:[h.jsx("p",{children:f.question}),h.jsx("span",{children:i===m?"−":"+"})]}),i===m&&h.jsx("div",{className:"faq-answer",children:h.jsx("p",{children:f.answer})})]},m))})]})})}function Rx(){return h.jsxs(h.Fragment,{children:[h.jsx(ux,{}),h.jsx(dx,{}),h.jsx(px,{}),h.jsx(xx,{}),h.jsx(Sx,{}),h.jsx(Ex,{}),h.jsx(jx,{}),h.jsx(lx,{})]})}const Tx=yt.div`

    
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


`;function Nx(){return h.jsx(Tx,{children:h.jsx("img",{src:Qu,alt:"Netflix-Logo"})})}const hm="/Movies-ReactJS/assets/back01-BieqImTc.jpg",Dx=yt.div`
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
`;function Mx(){const[i,o]=R.useState(""),[u,r]=R.useState(""),f=kc(),m=()=>{f("/")},v=()=>{if(!i.trim()||!u.trim()){alert("Preencha todos os campos!");return}f("/main-app")};return h.jsx(h.Fragment,{children:h.jsxs(Dx,{children:[h.jsx(Nx,{}),h.jsx("div",{className:"container",children:h.jsxs("div",{className:"content-section",children:[h.jsx("h2",{children:"Entrar"}),h.jsx("input",{type:"text",placeholder:"E-mail ou número de celular",value:i,onChange:S=>o(S.target.value)}),h.jsx("input",{type:"text",placeholder:"Senha",value:u,onChange:S=>r(S.target.value)}),h.jsx("button",{onClick:v,children:"Entrar"}),h.jsx("p",{className:"separate",children:"OU"}),h.jsxs("div",{className:"forgot-password",children:[h.jsx("p",{children:"Use um código de login"}),h.jsx("a",{href:"#",children:"Esqueceu sua senha?"})]}),h.jsxs("div",{className:"remember",children:[h.jsx("input",{type:"checkbox"}),h.jsx("label",{children:"Lembra de Mim?"})]}),h.jsxs("div",{className:"sign-up-now",children:[h.jsx("p",{children:"Novo na Netflix"}),h.jsx("p",{onClick:m,children:h.jsx("strong",{children:"Assine Já"})})]})]})})]})})}const Ox=yt.div`
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
`;function Cx(){return h.jsx(Ox,{children:h.jsxs("footer",{className:"content-section",children:[h.jsx("p",{className:"doubt",children:"Dúvidas? Ligue para 0800 591 2876 (ligação gratuita)"}),h.jsxs("div",{className:"questions",children:[h.jsxs("div",{className:"q1",children:[h.jsx("p",{children:"Perguntas frequentes"}),h.jsx("p",{children:"Termos de Uso"}),h.jsx("p",{children:"Preferências de cookies"})]}),h.jsxs("div",{className:"q2",children:[h.jsx("p",{children:"Central de ajuda"}),h.jsx("p",{children:"Privacidade"}),h.jsx("p",{children:"Informações corporativas"})]}),h.jsxs("select",{children:[h.jsx("option",{value:"portugues",children:"Português"}),h.jsx("option",{value:"ingles",children:"Inglês"})]})]})]})})}function _x(){return h.jsxs(h.Fragment,{children:[h.jsx(Mx,{}),h.jsx(Cx,{})]})}const Ux=yt.div`
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
`;function Bx(){const i=kc(),o=()=>i("/"),[u,r]=R.useState(!1),f=()=>r(!u);return h.jsxs(Ux,{children:[h.jsxs("div",{className:"content-section",children:[h.jsxs("div",{className:"p1",children:[h.jsx("img",{src:Qu,alt:"Logo Netflix"}),h.jsxs("div",{className:"desktop-menu",children:[h.jsx("p",{children:"Início"}),h.jsx("p",{children:"Séries"}),h.jsx("p",{children:"Filmes"}),h.jsx("p",{children:"Novos & Populares"}),h.jsx("p",{children:"Minha Lista"})]})]}),h.jsxs("div",{className:"p2",children:[h.jsx("button",{onClick:o,children:"Sair"}),h.jsx("div",{className:"btn-mobile",onClick:f,children:h.jsx("p",{children:"☰"})})]})]}),h.jsxs("div",{className:`side-menu ${u?"open":""}`,children:[h.jsx("div",{className:"close-btn",onClick:f,children:"×"}),h.jsx("p",{children:"Início"}),h.jsx("p",{children:"Séries"}),h.jsx("p",{children:"Filmes"}),h.jsx("p",{children:"Novos & Populares"}),h.jsx("p",{children:"Minha Lista"})]}),u&&h.jsx("div",{className:"overlay",onClick:f})]})}const Hx=yt.div`
  position: relative;
  width: 100%;
  height: 48vh;
  background-image: url(${i=>i.bg});
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
    background-image: url(${i=>i.bg3});
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
    background-image: url(${i=>i.bg2});
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
    background-image: url(${i=>i.bg2});
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
    background-image: url(${i=>i.bg2});
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
`;function qx(){const[i,o]=R.useState(""),[u,r]=R.useState(""),[f,m]=R.useState(),[v,S]=R.useState(""),[x,p]=R.useState(""),[z,O]=R.useState("");return R.useEffect(()=>{(async()=>{const H="ee96350ded551df8af41839e03615c58";try{const Y=await(await fetch(`https://api.themoviedb.org/3/tv/66732?api_key=${H}&language=pt-BR`)).json();o(Y.name),m(Y.number_of_seasons),r(Y.overview);const B=await(await fetch(`https://api.themoviedb.org/3/tv/66732/images?api_key=${H}`)).json(),K=B.posters[30],X=B.backdrops[2],et=B.backdrops[30];S(`https://image.tmdb.org/t/p/w500${K.file_path}`),O(`https://image.tmdb.org/t/p/original${X.file_path}`),p(`https://image.tmdb.org/t/p/original${et.file_path}`)}catch(q){console.error("Erro ao buscar banner:",q)}})()},[]),h.jsx(Hx,{bg:v,bg2:z,bg3:x,children:h.jsxs("div",{className:"content-section",children:[h.jsx("div",{className:"title",children:h.jsx("h1",{children:i.toUpperCase()})}),h.jsxs("div",{className:"desc",children:[h.jsxs("p",{className:"season",children:["Assista a temporada ",f]}),h.jsxs("p",{children:[u.slice(0,85),"..."]}),h.jsxs("div",{className:"btn",children:[h.jsx("button",{className:"play",children:" ▶ Play"}),h.jsx("button",{children:"More info"})]})]})]})})}const Yx=yt.div`
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
`;function Lx(){const[i,o]=R.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${u}&language=pt-BR&page=1

`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return R.useEffect(()=>{r()},[]),h.jsx(Yx,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("p",{children:h.jsx("strong",{children:"Populares na Netflix"})}),h.jsx("div",{className:"cards",children:i.map(f=>h.jsx("div",{className:"card",children:h.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title})},f.id))})]})})}const Gx=yt.div`
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
`;function kx(){const[i,o]=R.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${u}&with_networks=213&language=pt-BR&page=1`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return R.useEffect(()=>{r()},[]),h.jsx(Gx,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("p",{children:h.jsx("strong",{children:"Originais Netflix"})}),h.jsx("div",{className:"cards",children:i.map(f=>h.jsx("div",{className:"card",children:h.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title})},f.id))})]})})}const Qx=yt.div`
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
`;function Xx(){const[i,o]=R.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${u}&language=pt-BR&page=1
`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return R.useEffect(()=>{r()},[]),h.jsx(Qx,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("p",{children:h.jsx("strong",{children:"Em Alta"})}),h.jsx("div",{className:"cards",children:i.map(f=>h.jsx("div",{className:"card",children:h.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title})},f.id))})]})})}const Vx=yt.div`
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
`;function Zx(){const[i,o]=R.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${u}&language=pt-BR&page=1`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return R.useEffect(()=>{r()},[]),h.jsx(Vx,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("p",{children:h.jsx("strong",{children:"Comédia"})}),h.jsx("div",{className:"cards",children:i.map(f=>h.jsx("div",{className:"card",children:h.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title})},f.id))})]})})}const Kx=yt.div`
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
`;function Jx(){const[i,o]=R.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${u}&language=pt-BR&page=1`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return R.useEffect(()=>{r()},[]),h.jsx(Kx,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("p",{children:h.jsx("strong",{children:"Terror"})}),h.jsx("div",{className:"cards",children:i.map(f=>h.jsx("div",{className:"card",children:h.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title})},f.id))})]})})}const $x=yt.div`
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
`;function Wx(){const[i,o]=R.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${u}&language=pt-BR&page=1`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return R.useEffect(()=>{r()},[]),h.jsx($x,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("p",{children:h.jsx("strong",{children:"Séries de TV"})}),h.jsx("div",{className:"cards",children:i.map(f=>h.jsx("div",{className:"card",children:h.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title})},f.id))})]})})}const Fx=yt.div`
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
`;function Ix(){const[i,o]=R.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/search/movie?query=star%20wars&api_key=${u}&language=pt-BR&page=1`)).json();o(m.results)};return R.useEffect(()=>{r()},[]),h.jsx(Fx,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("h2",{className:"main-title",children:"Sagas Populares"}),h.jsxs("div",{className:"saga-block",children:[h.jsx("p",{className:"saga-title",children:h.jsx("strong",{children:"Universo Star Wars"})}),h.jsx("div",{className:"cards",children:i.map(f=>h.jsx("div",{className:"card",children:h.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title})},f.id))})]})]})})}const Px=yt.div`
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
`;function ty(){const[i,o]=R.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${u}&language=pt-BR&query=Indiana%20Jones`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return R.useEffect(()=>{r()},[]),h.jsx(Px,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("p",{children:h.jsx("strong",{children:"Universo Indiana Jones"})}),h.jsx("div",{className:"cards",children:i.filter(f=>f.poster_path).map(f=>h.jsx("div",{className:"card",children:h.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title||f.name})},f.id))})]})})}const ey=yt.div`
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
`;function ny(){const[i,o]=R.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${u}&language=pt-BR&query=Jurassic%20Park`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return R.useEffect(()=>{r()},[]),h.jsx(ey,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("p",{children:h.jsx("strong",{children:"Universo Jurassic Park"})}),h.jsx("div",{className:"cards",children:i.filter(f=>f.poster_path).map(f=>h.jsx("div",{className:"card",children:h.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title||f.name})},f.id))})]})})}const ay=yt.div`
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
`;function ly(){const[i,o]=R.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${u}&language=pt-BR&query=Harry%20Potter`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return R.useEffect(()=>{r()},[]),h.jsx(ay,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("p",{children:h.jsx("strong",{children:"Universo Harry Potter"})}),h.jsx("div",{className:"cards",children:i.filter(f=>f.poster_path).map(f=>h.jsx("div",{className:"card",children:h.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title||f.name})},f.id))})]})})}const iy=yt.div`
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
`;function cy(){const[i,o]=R.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${u}&language=pt-BR&query=The%20Lord%20Of%20Rings`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return R.useEffect(()=>{r()},[]),h.jsx(iy,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("p",{children:h.jsx("strong",{children:"Universo Senhor dos Anéis"})}),h.jsx("div",{className:"cards",children:i.filter(f=>f.poster_path).map(f=>h.jsx("div",{className:"card",children:h.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title||f.name})},f.id))})]})})}const oy=yt.div`
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
`;function ry(){const[i,o]=R.useState([]),u="ee96350ded551df8af41839e03615c58",r=async()=>{const m=await(await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${u}&language=pt-BR&with_companies=420`)).json();m.results.map(S=>{console.log(S)}),o(m.results)};return R.useEffect(()=>{r()},[]),h.jsx(oy,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("p",{children:h.jsx("strong",{children:"Universo Marvel"})}),h.jsx("div",{className:"cards",children:i.filter(f=>f.poster_path).map(f=>h.jsx("div",{className:"card",children:h.jsx("img",{src:`https://image.tmdb.org/t/p/w500${f.poster_path}`,alt:f.title||f.name})},f.id))})]})})}const uy=yt.div`
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
`;function sy(){const[i,o]=R.useState([]),u="ee96350ded551df8af41839e03615c58",r=[268,49026,297802,297761,272,"tt5950044",141052,297762,474395,155,209112,464052,1042305],f=async()=>{try{const m=r.map(S=>fetch(`https://api.themoviedb.org/3/movie/${S}?api_key=${u}&language=pt-BR`).then(x=>x.json())),v=await Promise.all(m);o(v.filter(S=>S.poster_path))}catch(m){console.error("Erro ao buscar filmes DC:",m)}};return R.useEffect(()=>{f()},[]),h.jsx(uy,{children:h.jsxs("div",{className:"content-section",children:[h.jsx("p",{children:h.jsx("strong",{children:"Universo DC"})}),h.jsx("div",{className:"cards",children:i.map(m=>h.jsx("div",{className:"card",children:h.jsx("img",{src:`https://image.tmdb.org/t/p/w500${m.poster_path}`,alt:m.title||m.name})},m.id))})]})})}const fy=yt.div`
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
`,dy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAANxUlEQVR4nO3dCaxdRR3H8SO7S2XRyL6IoBGCCkHZ1yKJQBcpuAC2toIGiomxItgWQVGjYQtBlkJFLTsChYgBpNCUxCUqiywFChWhLQFBKNgShLZfM3n/anm2772ZM+fOzDm/T/IS0pB7Z/5z5p4zc2b+U1UiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiJSB/A+YC9gAnAWcClwFTATuKsjfzOtzpdaDMZbTDZJ3T7SY8CHgBOAa4HnkME8B1wDHA9sn7r9pAHAtsBU4InUV1sLPG6x3DZ1u0oNwFrAkcBsYHnqq6qFlgP3WIzXSt3e4tcxjgYeTX0FdcgjwFhgndTtLwMADtVjVFKPAcNTXwfSD7A5MCP11SH/9Wtg69TXhfR1jmOAV//XNpKJxcAXUl8fnQVsAFyQ+iqQQbk7+7tSXy+dAmwHPDR420gmHgC2SX3ddAKwM7AgdYtL0AvHj6e+floN2AN4yb9tJBMvA/umvo5ayQUWWNqDRnwFmA/8BZiTwTqppv/mWF3nW92bthTYO/X11CrALvbrE9trNiU5Cdgf+EDVccCmwAEWk9ssRrH90z0qp65rmwbkiyI2zr+Bm4BRwHqp65c7YD1gNHCzxS4WN47UwD3CVO79kRpkiU0Lb5W6XoXfXc6M+N7pr8A7U9erWMBlERphBXCFHp+id5RfWmzrujh1fUp+Q17Xk5o1aQ6wH/BUhHb6XOq6FAXYIsJt/Drgvanr0nbAhsANEZalbJa6LsUArq8RbHfbPy11HboGmFLzkevq1HUoacl6qGXAV1LXoavo25br2iDUwanrkDW34abGfg7366XOkRh9+/1D7yRzgbVT1yFbwHGE02NVXo9bobREfnWAdwAPBwb1+tTll7ezTCgh3FZp7XHvDxhTYypXs1V5zm7ND2zT0anLnx3LPuLLPevqPUem6FvTFTIeuTt12XNcbxUSyCtSl73lGSfHAz+xbItHhewMBK4MTCmkdVorAacHrq3S8pEGACetYRXvIuCwgIQarwe07+TmalgYYF5AAM9LXe42Ar41SNyXAZ/x/MyQ3AFzm6tleblyfbll11umLnvbuNy7Q1zSvtBnFa5bQR24VH67quvsxZKvm1KXu42A73m0wRjPz74loJ0nVF1nWdZ9jaoK56amgd1tevvLwMnAqfZ3sv3bGPt/hvWoTLd6tMEPejCNr/VZAUcQvFraTkBgXdtT/13bBx6yQ9I91vzWJjT2cZ/ZQDl/41GeH3t+9vrAv3zrXHWZTSX6uq0qp1OMsu29bsYtNnex3QiMjNVZgHM8vn9swOffHlDPjauuctktAgI2qcqYm78HzgdepHf+4Wb16ubDBXYb4vuoxSGnTwGnBNRtz6qr7EWUr/2rDAE7Aj+LnNjAl/vuy93MYI16XDSE7/la4GcfGFCncVVXAT8KCNimVX6D7Qtq7oOI7S27owwLfDT86RruJG8A36gRK/fS0JfXZECrAJd4BmtxlRG3NDtySqLYFobu9wZ2Bc623Fi32uRA7fcSAVupL6q6yk5W9TGvyoD7Za6xnDsFN5jfsMoA/it8Z1Rd5Tnv7tyfQZl3KvR4tydySB4NPOhZ7plVVwGzPIN1b+Lyjg5ceJcLV/aRiWN4r2eZZ1VdFbAHZHbCso6zwW/p3GTCCQnjOLuUNk+ulGDZCtcYWQRzsSLV+yQKafMslBAsO964TZ0jaRYYCmjzbOQeLFsq0sT7DZeuczpwojs2GdjBLamwdxDr2n+7fzvENi9Nr7G/eyBv9XpMQuZtnpWcgwV8IvKA3M0iTQU+WHPvzOmRz4J/vZezW2Tc5tnJNVjAe4DHiOM+4GiX1ihyGd3d5feRytizzDBk2uZZyjVYAS8wV2dRyIrXgLKOAP4eobzXd7nNs5RjsGz5SF3TgHc3XdZ+dzy3SDH7YwjIsM2zlVuwbOGh7wau/gdUfrHJMg5S/mNrjpsWNr17kczaPGu5BSsw+8ZK7pDRfZosn8dR2XX2opzbpTbPWk7Bsv0cy2qc2rpL1Y5Tgd+qs5+kpDbPXk7Bss1OIV7PMf2p3UlCt/pO60KbZy+XYNk22TdpWbp+G5OE7kzcus1tXoRcgmV7yLP6pY2lxuzWuW1u8yLkECxb2uGSHvh61k2vVplzCacD35O80FBqoeRtXowcgmXrrUJ8tiqEe78RWMfD29jmxcghWJa3ytfvqsIAf8zh7ToZtHkxUgfLZWgMnOmJ/svatMA75WuxH7NSt3lRUgfL0oH6eiL2wsMengHpFiX62ityOdRBSgmW5cr1NaUqFHBG6vqiDlJOsCyRtK/tq0LZagFfd0YugzpIKcEKWJj4VFU44GnPOi+I/P3qICUEy1bu+u41n14Vzh186lnnFTHf96iDlNNBPom/E6vC2eE8vnaL+P3qIIV0kCPxN7wqHPDplC9FUQcppoO4I858BSdcKPzQ1LERv18dpJAO8nX8eR8akxvg/QH1nhjx+9VBCukgk/FX1NmIA5wV6Os7Eb9fHWSo1EF6Tx2kIHrE6j09YhUkcQdx2dp9aZBekzpIu6d5D6kKBxwaUO/REb9fHaSQDrI7/k6qChf4aLlrxO9XBymkgwzr6FKTn3vWeYWWmiSSOlgBJ9TOrwoXsD/92cjfrw7S8uXujSVVaxrwkYD63hG5DOogLd8wNbUqFHBmQH0nRy6DOkgpwXK5dPHXtS23e0YuhzpIKcEC1rHEBL5GVIWxI6x9veZiFLkc6iAlBQu4EX9/qAoD/Cmgnte1sc2LUXjiuDFVIWocCnRYG9u8GDkEyx6znsffgkJSjw6zg3F8vaDUo4nlEizgPMJcXrVvD/pK57S5zYuQS7Bcqn9L+R/i2CpTwJcC6/QGsFWb27wIOQWrxjEB7gCd/arMuOlZOzMxxKVdaPPs5RQsYAc7fqwNR7B9rMYRbG82uayfjNo8e7kFq8ZYBLsg983kzvFSjXqc3aU2z1puwaox47Pq49axicccdY6BbnxmjszaPGs5BqvGYTOrmt7LKWDr2KGzVas6qottnq1cgwXMoL5FMbeqDlDWEcAzEcp7bdNlzbnNs5RrsNyvPzDXs2xr8oDrKMBakRcejgg8NWp15rm7UKzyldjmWco5WDYTVOd5vr8n7XyOHWvu5zgzcFXumizt5QwcGbd5dnIPFjCyxtTvQJ62McNEy5Xrzu3YxI6EW8/++8OWYGGibZMNOal2MK5uR/Q4prM9y6gOknOwgOMC9q6XwNVpQoJ4zvYspzpI7sECJrWsk7i6fDNRLGd7llUdpIRg2UC7icetXlsGnJAwjrM9y9vpDjLLM1j3Ji7vyMgD915b2usxR3+uDT3LPKvqKuBWz2Ddn0GZdwIeoTyPu5m5DOL3oGe5Z1ZdBVzlGax5VQbsPcnVlOPKXDZ3AfM9yz6j6irgYs9gLa4yYstS6qzdatqCXiwf8RGQJOOiqquAHwY0+qZVRmwd1HmZDeDdkvVzcrlrrARsHlCXs6quAsYHBGz/Kt9jBS6rsTMxBrcTcFquxzQABwbUaVzVVcBeAQGbVGXMtu+ea0kPeuV5u2M0sk02FuDbqRPXFcWWVPi6rSqAZUs5wuWWCkxON5hX3Qpc4PDYyd2aAtwRUM+Nqy4Dngu4MIo6K9A6i7tbTgHudBnTAy6UZ+0Cm2y7BovoFCsBGwBLPOu8sOo64JqUJx4lnirezU66GmeLEk+1v4n25v5I+3+yGmyHcLNpAe18VdV1btlDQOBuSl1uafylsDO+6jpg+4DAuZmiLVOXXbwmLtzUs69th/gV7WbLIHydn7rcMjTAhQHt++gQP779bPDqa0luLw3l/wFbBC7wPG01H9dN7lYKLA8I4i9Sl10amYRx18LWg3x0twD3BG78yS7tp/QBDgrcaNbdJe5rYlOaIZ4CNkxdfnk7YCPgb4FtOqrfx4mlsnkoMKC/Sl1+eTs3FR/Ylo/ETJHUKsAxhJuSuvzSx9Ibhfq8fYz0B6wNPBYYWPese3zqOnQd8NUanUN3j8EAw0tNSNB19HUO1wahP3AHpq5Dm6cGVw301NR16OD48Qzq6e7W2sCdZ4trBtwd76zZrd7MVt1cs61e0UtfT26wRn0uQcABqevS8vccT0dop6z2zRcDuCRC8FdYVo/NU9enZctHriaOC1PXp1jA+i4XVuT92lrCUG9V7gU1Dgftz+XI2iB1vYoGbGPpa2JxS+VvsTf366euXyE7AY+y/RwhS9bX5Jnc99AXA9jZTpKNza0Ivh04xTJudP4xzCZIDrIEC3cEbJMdCnfI6EdT17VVgL0j3toH2/PuBvf3AXOAu1r+N8fqOt/q3rQlnc5U0iTgU8CLPWhEacbLwD6pr6NWc7fmwKwgktaiXh711mk2cI81uyXN+7MG5GmmgN2Uo+RtmmYL02dYd0sVJC+vAGNSXx/S10k2c4vdWnaOYMlu0NqqDAEHA3NTXx0d9rDWvmXObbgBRtjcvvSuY4x1G95St7/47VEYDdwdmFJIBrbcDmEd5WKdur2l/iI7lxVdj1/1PeqSumnatqWA7YAJdoCoe3klA1tosXKngSlXbte4A1qAPewIgu/bwaJuRmxmBuukevU30+p8scVgnMVko9TtIyIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiUpXtP6MrU4WpL2ZMAAAAAElFTkSuQmCC",hy="/Movies-ReactJS/assets/facebook2-1kk7hThO.png",my="/Movies-ReactJS/assets/x2-X5CHVD4u.png",py="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAAJFBMVEVHcEzz8/P6+vr8/Pz9/f39/f3+/v7+/v7+/v7+/v7+/v7///8O3y3aAAAAC3RSTlMAEyc/WHKLo8DX7jCgBDoAAAjBSURBVHja7dxPTFVnGgbw5xwuOjqbc7G2qd1cLk0kcYPAYpzZ0KqTTLuhiaUdcMEsqFWnSSWpxZBxZpy0MrKApjM6LRtMHGK9G+og/76Nq+ksWTKLKltt4j37AqdcQd425PLHcjmH8zw/gro9j8/7+XHPGyEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIim+Bla/L5urqmJc3NJ0xz05LGxny+NpvFjvJQEVkv8IIsslj+fflP2LwoRBHFKPzxVzHZAXjZbJDNekG2BJVRLInCpe9iMUxGAF5tzdLz1toz7wRL40mx+PBJGEcANUsPvfRdEyB+0cMnxYfFpe+dCaAmn883ZpFExW8fPHjwsHIBePmSAMkWPSgJsb285pNnrrld5PbFU8cDbJdX3y+4XWj609exDQ68M+R2ramPjv7Mp2/rd7vcZNfzZ3DwmkuF22/heXjvutT4JMCWvdDvUmTyNWzRYZcy3aTPb7pJn990b+n5qROodinVik3xh1xKTeWwGR0ute5hE+pdil3BhjIu1VqwkfMu1caxgb0u5T7Eurx+l3KTAdbzsku9z7AOv+BSbzqH8o44AndRlldwBKYDlLPPURhEOf2OwiTK2ONIdG7upyC6n4mqHI0GGHPI0bgJY3odjQnSCTANnBNgbnJOgJkoMwHMM7DfURkudwvivQsVHJXptW+DyLSuPQK4D4E3HZmxtUcA9SGQcXRayn8YxvjB2BFH5+7aaxDzVWjI0ZkCjO8I5VDio6QKhBpgAWRAqAUWQB6E8jAdjtA9mF5HaAJmyBGawirPUQpWD0EflHIKQAEAvl0E6TSsBpAFpSznB4JmbLUBOVDyFcAzjhQAZCwJPrk5BUAeABTAU790pEYB+AACkPIUgN2EKY2pAct6HakJNWD5uxCAU/RbNQA+4INWzraEOTWoASV7HK1ONcBW5CgNqgElrzhaXwM+kAMt334a5jSmBsAHNTUAPhCAlqcAFIAPD8QCBUAfQEYNUAAKoPLmB9gbMDFKHkB0/T53AIj65rgDwMLZMKEBBNgZ8+eQPN4OBoDvTpMHgEd/Ig8A/xsgDwDjwwkMYEeN3Eey7HADEF2doRwBs3gppBwBM9/OOQLm+w7OETCPPyAPALMDrAHYdYDzEDQjo0gK30MMohszSIYgngCw2DOXlAAQj4VzrCNg1wHWEbDrAOcImNnLnCNgvhnkHAEzPko6AnYduE85Amaxb461Afa6hLIBZv48ZwPM4z9yNsD8/zJnA8w3A6wNsO0J1gbY9gRpA+LfnrAG0F4HfCTCfDt5APj+NOLhB0iGRx8gDp6PpJgd4GyAGR9mbYBtT7A2wLYn6BoQ//aEjySZb2cdAXtdwjoC9rqEcwTM7J85R8D8d5h1BGx7gnUEbHuCdQRse4J0BGx7grUBdh1gbYBdB1gPQdueYB0Be13COQJmYpS1AbY9wdoA255gPQTtdQnpCNj2BOcImMenOUfAPLrMGoBdB8gDwMQw5SFoopH7lIegifpmKEfALFwKuQPAfDtrALY9wRqAbU+QB4DZAYIA4tie0H+ru2sCeKOTO4D6C9wNeOlz7hGovgXqADIjoA6g6mqAyvFDJJzX04DKiXwk3bkW7s8D3mgFmBtw7AL3TfDwFVAH8OI/UGGRHyK5Mv/kfjNUdSOA4TsE/Z4cQDwC3tkW7s8Dft8KQ3gVPvYHGMIzoP4K90diL34OQzgC1f+GIRyBqusAcwP8vhyYG+CdbeB+L9DeCjCPwK87YQhHoP6vtK/G7ALAOQJ2ASAegcwI99th/2oAEI+Ad6kBYB6B9haAswG2A8HcgF9dAJgb8NLfAOYGHLzFvSSVuQ7qAPwbAWLiR4m4AOQQk9BPyg4EZwNsB4KzAbYDwdkA24HgbIDtQHA2wHYgOBtgOxCcDbAdCNIG2A4EcwPaWxG3MM4AjnXCcI2A7UBwjoC9AuEcAXsFwjkCtgPBOQK2A0E8ArYDEX8AnBcA4yOMbwcifpEFENsORPwBUF4ALICYLgCUZ4DtQDCOgO1A0AZgOxCcZ4DtQHCeAbYDwTgCtgPBGYDtQFAHUH0L1AFkRpDMACKCVyBlhTsWgNeTA3MA3rkWUAfwu1YkUghgjyPWaQ3gFCoA+gAyCkAjwB4AQtCKoAAUADAHWov6b3XVAJ0B7A3IqAFYBKuV8v/C0fqLGlBS7Wi1qgElvqOVUwOeKjhS0wB8y4GNdb/XkZpQA5a96UiNqQHLXnGkvl5pQAhS0UoACyA1sxLAIkjNKQAFoACe6neUJgHAtyToWPN/4yj9Rw14FkARlOyx9zpKH642YBGU5hSAAnhmyBGaQolvWbBZVAAWwAwILcDsc4QGYaodoVYY3xHKwc6AxTlQWfvMHY7OPQDmiKNzF4DZx/mPgMk4Oi0wjFsi0/ipDs4z0Ox3ZIbxU9Wk90BT4DwCTAfnEWD2Ex4BzDeBBhjGbcEJrHXIEbmJtapIJ8D0ck6AOcQ5AaaKdAJMB+ctyOxxJDphGI/BSZTzsqMwiHK8giMwHaCsI47AXZTnFwgKkINhPAU+w3q8fpdykwHWtZdgN259512qjWMjGZL3QeXVuxS7gk3o4PgpqDx/yKXUVA6bUk3yNqi8wy6VugHqBLoB6gS6AeoEurFFL/S7FJl8DVvmvetS45MAz+PgNZcKt9/C8zrQ1r/ry991FD9L3TtDbtea+ugotsGr7xfcLjT96evYLl7zyTNful3kq4unmgJsM6/u5Jm/u8T718VTjQEq58CJtkt3XCLdudF1/Ch2Rk3TibfP9HxZSMSsf3X14tsnmmoRBy/ffLLt474vYujEnS/6Pu46dTwfIBm8mrqlVrS9Z2lU5pnf61r6226sDbBNPFRE1gt+/JVFFl6AzYtCFEtfURiFz34vohI87KTlHDwEAAIPqyKEK78+fWIRERERERERERERERERERERERERERERERERERERERERERERERER2dAPzihcjVvoSgUAAAAASUVORK5CYII=";function gy(){return h.jsx(fy,{children:h.jsxs("div",{className:"content-section",children:[h.jsxs("div",{className:"social-media",children:[h.jsx("div",{children:h.jsx("a",{href:"https://www.instagram.com/netflixbrasil/",target:"_blank",children:h.jsx("img",{src:dy,alt:"Instagram Logo"})})}),h.jsx("div",{children:h.jsx("a",{href:"https://www.facebook.com/netflixbrasil/?locale=pt_BR",target:"_blank",children:h.jsx("img",{src:hy,alt:"Facebook Logo"})})}),h.jsx("div",{children:h.jsx("a",{href:"https://x.com/netflixbrasil",target:"_blank",children:h.jsx("img",{src:my,alt:"X Logo"})})}),h.jsx("div",{children:h.jsx("a",{href:"https://www.youtube.com/@NetflixBrasil",target:"_blank",children:h.jsx("img",{src:py,alt:"Youtube Logo"})})})]}),h.jsxs("div",{className:"informations",children:[h.jsxs("div",{className:"p1",children:[h.jsx("p",{children:"Central de Ajuda"}),h.jsx("p",{children:"Descrição de Áudio"}),h.jsx("p",{children:"Cartões Presente"}),h.jsx("p",{children:" Relações com Investidores"})]}),h.jsxs("div",{className:"p2",children:[h.jsx("p",{children:"Imprensa Oficial"}),h.jsx("p",{children:"Oportunidades de Carreira"}),h.jsx("p",{children:"Termos de Serviço"}),h.jsx("p",{children:"Política de Privacidade"})]}),h.jsxs("div",{className:"p3",children:[h.jsx("p",{children:"Avisos Legais"}),h.jsx("p",{children:"Preferências de Cookies"}),h.jsx("p",{children:"Informações Corporativas"}),h.jsx("p",{children:"Entre em Contato"})]})]}),h.jsx("div",{className:"foot-container",children:h.jsx("p",{className:"foot",children:"© 2025 - Todos os Direitos Reservados"})})]})})}function vy(){return h.jsxs(h.Fragment,{children:[h.jsx(Bx,{}),h.jsx(qx,{}),h.jsx(Lx,{}),h.jsx(kx,{}),h.jsx(Xx,{}),h.jsx(Zx,{}),h.jsx(Jx,{}),h.jsx(Wx,{}),h.jsx(Ix,{}),h.jsx(ty,{}),h.jsx(ny,{}),h.jsx(ly,{}),h.jsx(cy,{}),h.jsx(ry,{}),h.jsx(sy,{}),h.jsx(gy,{})]})}function xy(){return h.jsx(h.Fragment,{children:h.jsx(V1,{basename:"/Movies-ReactJS",children:h.jsxs(w1,{children:[h.jsx(Tc,{path:"/",element:h.jsx(Rx,{})}),h.jsx(Tc,{path:"/sign-in",element:h.jsx(_x,{})}),h.jsx(Tc,{path:"main-app",element:h.jsx(vy,{})})]})})})}Og.createRoot(document.getElementById("root")).render(h.jsx(R.StrictMode,{children:h.jsx(xy,{})}));
