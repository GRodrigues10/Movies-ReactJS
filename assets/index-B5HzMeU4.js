(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function o(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(d){if(d.ep)return;d.ep=!0;const h=o(d);fetch(d.href,h)}})();function by(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var rf={exports:{}},Ia={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch;function Sy(){if(Ch)return Ia;Ch=1;var u=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function o(r,d,h){var g=null;if(h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),"key"in d){h={};for(var T in d)T!=="key"&&(h[T]=d[T])}else h=d;return d=h.ref,{$$typeof:u,type:r,key:g,ref:d!==void 0?d:null,props:h}}return Ia.Fragment=c,Ia.jsx=o,Ia.jsxs=o,Ia}var jh;function xy(){return jh||(jh=1,rf.exports=Sy()),rf.exports}var D=xy(),ff={exports:{}},at={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function Ey(){if(qh)return at;qh=1;var u=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),g=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),w=Symbol.iterator;function j(y){return y===null||typeof y!="object"?null:(y=w&&y[w]||y["@@iterator"],typeof y=="function"?y:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,G={};function Q(y,C,Y){this.props=y,this.context=C,this.refs=G,this.updater=Y||H}Q.prototype.isReactComponent={},Q.prototype.setState=function(y,C){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,C,"setState")},Q.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function q(){}q.prototype=Q.prototype;function k(y,C,Y){this.props=y,this.context=C,this.refs=G,this.updater=Y||H}var Z=k.prototype=new q;Z.constructor=k,B(Z,Q.prototype),Z.isPureReactComponent=!0;var nt=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},lt=Object.prototype.hasOwnProperty;function $(y,C,Y,X,W,ft){return Y=ft.ref,{$$typeof:u,type:y,key:C,ref:Y!==void 0?Y:null,props:ft}}function Tt(y,C){return $(y.type,C,void 0,void 0,void 0,y.props)}function Et(y){return typeof y=="object"&&y!==null&&y.$$typeof===u}function te(y){var C={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(Y){return C[Y]})}var ne=/\/+/g;function Yt(y,C){return typeof y=="object"&&y!==null&&y.key!=null?te(""+y.key):C.toString(36)}function Ze(){}function Ve(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Ze,Ze):(y.status="pending",y.then(function(C){y.status==="pending"&&(y.status="fulfilled",y.value=C)},function(C){y.status==="pending"&&(y.status="rejected",y.reason=C)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function Gt(y,C,Y,X,W){var ft=typeof y;(ft==="undefined"||ft==="boolean")&&(y=null);var I=!1;if(y===null)I=!0;else switch(ft){case"bigint":case"string":case"number":I=!0;break;case"object":switch(y.$$typeof){case u:case c:I=!0;break;case z:return I=y._init,Gt(I(y._payload),C,Y,X,W)}}if(I)return W=W(y),I=X===""?"."+Yt(y,0):X,nt(W)?(Y="",I!=null&&(Y=I.replace(ne,"$&/")+"/"),Gt(W,C,Y,"",function(Wt){return Wt})):W!=null&&(Et(W)&&(W=Tt(W,Y+(W.key==null||y&&y.key===W.key?"":(""+W.key).replace(ne,"$&/")+"/")+I)),C.push(W)),1;I=0;var Lt=X===""?".":X+":";if(nt(y))for(var pt=0;pt<y.length;pt++)X=y[pt],ft=Lt+Yt(X,pt),I+=Gt(X,C,Y,ft,W);else if(pt=j(y),typeof pt=="function")for(y=pt.call(y),pt=0;!(X=y.next()).done;)X=X.value,ft=Lt+Yt(X,pt++),I+=Gt(X,C,Y,ft,W);else if(ft==="object"){if(typeof y.then=="function")return Gt(Ve(y),C,Y,X,W);throw C=String(y),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return I}function O(y,C,Y){if(y==null)return y;var X=[],W=0;return Gt(y,X,"","",function(ft){return C.call(Y,ft,W++)}),X}function L(y){if(y._status===-1){var C=y._result;C=C(),C.then(function(Y){(y._status===0||y._status===-1)&&(y._status=1,y._result=Y)},function(Y){(y._status===0||y._status===-1)&&(y._status=2,y._result=Y)}),y._status===-1&&(y._status=0,y._result=C)}if(y._status===1)return y._result.default;throw y._result}var F=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function rt(){}return at.Children={map:O,forEach:function(y,C,Y){O(y,function(){C.apply(this,arguments)},Y)},count:function(y){var C=0;return O(y,function(){C++}),C},toArray:function(y){return O(y,function(C){return C})||[]},only:function(y){if(!Et(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},at.Component=Q,at.Fragment=o,at.Profiler=d,at.PureComponent=k,at.StrictMode=r,at.Suspense=v,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,at.__COMPILER_RUNTIME={__proto__:null,c:function(y){return V.H.useMemoCache(y)}},at.cache=function(y){return function(){return y.apply(null,arguments)}},at.cloneElement=function(y,C,Y){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var X=B({},y.props),W=y.key,ft=void 0;if(C!=null)for(I in C.ref!==void 0&&(ft=void 0),C.key!==void 0&&(W=""+C.key),C)!lt.call(C,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&C.ref===void 0||(X[I]=C[I]);var I=arguments.length-2;if(I===1)X.children=Y;else if(1<I){for(var Lt=Array(I),pt=0;pt<I;pt++)Lt[pt]=arguments[pt+2];X.children=Lt}return $(y.type,W,void 0,void 0,ft,X)},at.createContext=function(y){return y={$$typeof:g,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:h,_context:y},y},at.createElement=function(y,C,Y){var X,W={},ft=null;if(C!=null)for(X in C.key!==void 0&&(ft=""+C.key),C)lt.call(C,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(W[X]=C[X]);var I=arguments.length-2;if(I===1)W.children=Y;else if(1<I){for(var Lt=Array(I),pt=0;pt<I;pt++)Lt[pt]=arguments[pt+2];W.children=Lt}if(y&&y.defaultProps)for(X in I=y.defaultProps,I)W[X]===void 0&&(W[X]=I[X]);return $(y,ft,void 0,void 0,null,W)},at.createRef=function(){return{current:null}},at.forwardRef=function(y){return{$$typeof:T,render:y}},at.isValidElement=Et,at.lazy=function(y){return{$$typeof:z,_payload:{_status:-1,_result:y},_init:L}},at.memo=function(y,C){return{$$typeof:m,type:y,compare:C===void 0?null:C}},at.startTransition=function(y){var C=V.T,Y={};V.T=Y;try{var X=y(),W=V.S;W!==null&&W(Y,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(rt,F)}catch(ft){F(ft)}finally{V.T=C}},at.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},at.use=function(y){return V.H.use(y)},at.useActionState=function(y,C,Y){return V.H.useActionState(y,C,Y)},at.useCallback=function(y,C){return V.H.useCallback(y,C)},at.useContext=function(y){return V.H.useContext(y)},at.useDebugValue=function(){},at.useDeferredValue=function(y,C){return V.H.useDeferredValue(y,C)},at.useEffect=function(y,C,Y){var X=V.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(y,C)},at.useId=function(){return V.H.useId()},at.useImperativeHandle=function(y,C,Y){return V.H.useImperativeHandle(y,C,Y)},at.useInsertionEffect=function(y,C){return V.H.useInsertionEffect(y,C)},at.useLayoutEffect=function(y,C){return V.H.useLayoutEffect(y,C)},at.useMemo=function(y,C){return V.H.useMemo(y,C)},at.useOptimistic=function(y,C){return V.H.useOptimistic(y,C)},at.useReducer=function(y,C,Y){return V.H.useReducer(y,C,Y)},at.useRef=function(y){return V.H.useRef(y)},at.useState=function(y){return V.H.useState(y)},at.useSyncExternalStore=function(y,C,Y){return V.H.useSyncExternalStore(y,C,Y)},at.useTransition=function(){return V.H.useTransition()},at.version="19.1.1",at}var Hh;function Mf(){return Hh||(Hh=1,ff.exports=Ey()),ff.exports}var N=Mf();const au=by(N);var of={exports:{}},tu={},sf={exports:{}},df={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function zy(){return Bh||(Bh=1,(function(u){function c(O,L){var F=O.length;O.push(L);t:for(;0<F;){var rt=F-1>>>1,y=O[rt];if(0<d(y,L))O[rt]=L,O[F]=y,F=rt;else break t}}function o(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var L=O[0],F=O.pop();if(F!==L){O[0]=F;t:for(var rt=0,y=O.length,C=y>>>1;rt<C;){var Y=2*(rt+1)-1,X=O[Y],W=Y+1,ft=O[W];if(0>d(X,F))W<y&&0>d(ft,X)?(O[rt]=ft,O[W]=F,rt=W):(O[rt]=X,O[Y]=F,rt=Y);else if(W<y&&0>d(ft,F))O[rt]=ft,O[W]=F,rt=W;else break t}}return L}function d(O,L){var F=O.sortIndex-L.sortIndex;return F!==0?F:O.id-L.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var g=Date,T=g.now();u.unstable_now=function(){return g.now()-T}}var v=[],m=[],z=1,w=null,j=3,H=!1,B=!1,G=!1,Q=!1,q=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function nt(O){for(var L=o(m);L!==null;){if(L.callback===null)r(m);else if(L.startTime<=O)r(m),L.sortIndex=L.expirationTime,c(v,L);else break;L=o(m)}}function V(O){if(G=!1,nt(O),!B)if(o(v)!==null)B=!0,lt||(lt=!0,Yt());else{var L=o(m);L!==null&&Gt(V,L.startTime-O)}}var lt=!1,$=-1,Tt=5,Et=-1;function te(){return Q?!0:!(u.unstable_now()-Et<Tt)}function ne(){if(Q=!1,lt){var O=u.unstable_now();Et=O;var L=!0;try{t:{B=!1,G&&(G=!1,k($),$=-1),H=!0;var F=j;try{e:{for(nt(O),w=o(v);w!==null&&!(w.expirationTime>O&&te());){var rt=w.callback;if(typeof rt=="function"){w.callback=null,j=w.priorityLevel;var y=rt(w.expirationTime<=O);if(O=u.unstable_now(),typeof y=="function"){w.callback=y,nt(O),L=!0;break e}w===o(v)&&r(v),nt(O)}else r(v);w=o(v)}if(w!==null)L=!0;else{var C=o(m);C!==null&&Gt(V,C.startTime-O),L=!1}}break t}finally{w=null,j=F,H=!1}L=void 0}}finally{L?Yt():lt=!1}}}var Yt;if(typeof Z=="function")Yt=function(){Z(ne)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,Ve=Ze.port2;Ze.port1.onmessage=ne,Yt=function(){Ve.postMessage(null)}}else Yt=function(){q(ne,0)};function Gt(O,L){$=q(function(){O(u.unstable_now())},L)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(O){O.callback=null},u.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tt=0<O?Math.floor(1e3/O):5},u.unstable_getCurrentPriorityLevel=function(){return j},u.unstable_next=function(O){switch(j){case 1:case 2:case 3:var L=3;break;default:L=j}var F=j;j=L;try{return O()}finally{j=F}},u.unstable_requestPaint=function(){Q=!0},u.unstable_runWithPriority=function(O,L){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var F=j;j=O;try{return L()}finally{j=F}},u.unstable_scheduleCallback=function(O,L,F){var rt=u.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?rt+F:rt):F=rt,O){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=F+y,O={id:z++,callback:L,priorityLevel:O,startTime:F,expirationTime:y,sortIndex:-1},F>rt?(O.sortIndex=F,c(m,O),o(v)===null&&O===o(m)&&(G?(k($),$=-1):G=!0,Gt(V,F-rt))):(O.sortIndex=y,c(v,O),B||H||(B=!0,lt||(lt=!0,Yt()))),O},u.unstable_shouldYield=te,u.unstable_wrapCallback=function(O){var L=j;return function(){var F=j;j=L;try{return O.apply(this,arguments)}finally{j=F}}}})(df)),df}var Yh;function Ay(){return Yh||(Yh=1,sf.exports=zy()),sf.exports}var hf={exports:{}},It={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function Ty(){if(Gh)return It;Gh=1;var u=Mf();function c(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)m+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(c(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(v,m,z){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:w==null?null:""+w,children:v,containerInfo:m,implementation:z}}var g=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,It.createPortal=function(v,m){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(c(299));return h(v,m,null,z)},It.flushSync=function(v){var m=g.T,z=r.p;try{if(g.T=null,r.p=2,v)return v()}finally{g.T=m,r.p=z,r.d.f()}},It.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(v,m))},It.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},It.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var z=m.as,w=T(z,m.crossOrigin),j=typeof m.integrity=="string"?m.integrity:void 0,H=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;z==="style"?r.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:w,integrity:j,fetchPriority:H}):z==="script"&&r.d.X(v,{crossOrigin:w,integrity:j,fetchPriority:H,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},It.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var z=T(m.as,m.crossOrigin);r.d.M(v,{crossOrigin:z,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(v)},It.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var z=m.as,w=T(z,m.crossOrigin);r.d.L(v,z,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},It.preloadModule=function(v,m){if(typeof v=="string")if(m){var z=T(m.as,m.crossOrigin);r.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:z,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(v)},It.requestFormReset=function(v){r.d.r(v)},It.unstable_batchedUpdates=function(v,m){return v(m)},It.useFormState=function(v,m,z){return g.H.useFormState(v,m,z)},It.useFormStatus=function(){return g.H.useHostTransitionStatus()},It.version="19.1.1",It}var Lh;function Ry(){if(Lh)return hf.exports;Lh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(c){console.error(c)}}return u(),hf.exports=Ty(),hf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function Oy(){if(Xh)return tu;Xh=1;var u=Ay(),c=Mf(),o=Ry();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function T(t){if(h(t)!==t)throw Error(r(188))}function v(t){var e=t.alternate;if(!e){if(e=h(t),e===null)throw Error(r(188));return e!==t?null:t}for(var n=t,l=e;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return T(a),t;if(i===l)return T(a),e;i=i.sibling}throw Error(r(188))}if(n.return!==l.return)n=a,l=i;else{for(var f=!1,s=a.child;s;){if(s===n){f=!0,n=a,l=i;break}if(s===l){f=!0,l=a,n=i;break}s=s.sibling}if(!f){for(s=i.child;s;){if(s===n){f=!0,n=i,l=a;break}if(s===l){f=!0,l=i,n=a;break}s=s.sibling}if(!f)throw Error(r(189))}}if(n.alternate!==l)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?t:e}function m(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=m(t),e!==null)return e;t=t.sibling}return null}var z=Object.assign,w=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),k=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),nt=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function Yt(t){return t===null||typeof t!="object"?null:(t=ne&&t[ne]||t["@@iterator"],typeof t=="function"?t:null)}var Ze=Symbol.for("react.client.reference");function Ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ze?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case Q:return"Profiler";case G:return"StrictMode";case V:return"Suspense";case lt:return"SuspenseList";case Et:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case H:return"Portal";case Z:return(t.displayName||"Context")+".Provider";case k:return(t._context.displayName||"Context")+".Consumer";case nt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return e=t.displayName||null,e!==null?e:Ve(t.type)||"Memo";case Tt:e=t._payload,t=t._init;try{return Ve(t(e))}catch{}}return null}var Gt=Array.isArray,O=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},rt=[],y=-1;function C(t){return{current:t}}function Y(t){0>y||(t.current=rt[y],rt[y]=null,y--)}function X(t,e){y++,rt[y]=t.current,t.current=e}var W=C(null),ft=C(null),I=C(null),Lt=C(null);function pt(t,e){switch(X(I,e),X(ft,t),X(W,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?rh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=rh(e),t=fh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(W),X(W,t)}function Wt(){Y(W),Y(ft),Y(I)}function Bn(t){t.memoizedState!==null&&X(Lt,t);var e=W.current,n=fh(e,t.type);e!==n&&(X(ft,t),X(W,n))}function Ke(t){ft.current===t&&(Y(W),Y(ft)),Lt.current===t&&(Y(Lt),ka._currentValue=F)}var be=Object.prototype.hasOwnProperty,ki=u.unstable_scheduleCallback,$i=u.unstable_cancelCallback,Fm=u.unstable_shouldYield,Pm=u.unstable_requestPaint,Ce=u.unstable_now,Im=u.unstable_getCurrentPriorityLevel,Lf=u.unstable_ImmediatePriority,Xf=u.unstable_UserBlockingPriority,su=u.unstable_NormalPriority,t0=u.unstable_LowPriority,Qf=u.unstable_IdlePriority,e0=u.log,n0=u.unstable_setDisableYieldValue,na=null,fe=null;function hn(t){if(typeof e0=="function"&&n0(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(na,t)}catch{}}var oe=Math.clz32?Math.clz32:u0,l0=Math.log,a0=Math.LN2;function u0(t){return t>>>=0,t===0?32:31-(l0(t)/a0|0)|0}var du=256,hu=4194304;function Yn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mu(t,e,n){var l=t.pendingLanes;if(l===0)return 0;var a=0,i=t.suspendedLanes,f=t.pingedLanes;t=t.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?a=Yn(l):(f&=s,f!==0?a=Yn(f):n||(n=s&~t,n!==0&&(a=Yn(n))))):(s=l&~i,s!==0?a=Yn(s):f!==0?a=Yn(f):n||(n=l&~t,n!==0&&(a=Yn(n)))),a===0?0:e!==0&&e!==a&&(e&i)===0&&(i=a&-a,n=e&-e,i>=n||i===32&&(n&4194048)!==0)?e:a}function la(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function i0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zf(){var t=du;return du<<=1,(du&4194048)===0&&(du=256),t}function Vf(){var t=hu;return hu<<=1,(hu&62914560)===0&&(hu=4194304),t}function Wi(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function aa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function c0(t,e,n,l,a,i){var f=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var s=t.entanglements,p=t.expirationTimes,E=t.hiddenUpdates;for(n=f&~n;0<n;){var _=31-oe(n),U=1<<_;s[_]=0,p[_]=-1;var A=E[_];if(A!==null)for(E[_]=null,_=0;_<A.length;_++){var R=A[_];R!==null&&(R.lane&=-536870913)}n&=~U}l!==0&&Kf(t,l,0),i!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=i&~(f&~e))}function Kf(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-oe(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|n&4194090}function Jf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var l=31-oe(n),a=1<<l;a&e|t[l]&e&&(t[l]|=e),n&=~a}}function Fi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function kf(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:_h(t.type))}function r0(t,e){var n=L.p;try{return L.p=t,e()}finally{L.p=n}}var mn=Math.random().toString(36).slice(2),Ft="__reactFiber$"+mn,le="__reactProps$"+mn,cl="__reactContainer$"+mn,Ii="__reactEvents$"+mn,f0="__reactListeners$"+mn,o0="__reactHandles$"+mn,$f="__reactResources$"+mn,ua="__reactMarker$"+mn;function tc(t){delete t[Ft],delete t[le],delete t[Ii],delete t[f0],delete t[o0]}function rl(t){var e=t[Ft];if(e)return e;for(var n=t.parentNode;n;){if(e=n[cl]||n[Ft]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hh(t);t!==null;){if(n=t[Ft])return n;t=hh(t)}return e}t=n,n=t.parentNode}return null}function fl(t){if(t=t[Ft]||t[cl]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function ia(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function ol(t){var e=t[$f];return e||(e=t[$f]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Xt(t){t[ua]=!0}var Wf=new Set,Ff={};function Gn(t,e){sl(t,e),sl(t+"Capture",e)}function sl(t,e){for(Ff[t]=e,t=0;t<e.length;t++)Wf.add(e[t])}var s0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pf={},If={};function d0(t){return be.call(If,t)?!0:be.call(Pf,t)?!1:s0.test(t)?If[t]=!0:(Pf[t]=!0,!1)}function pu(t,e,n){if(d0(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function yu(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Je(t,e,n,l){if(l===null)t.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+l)}}var ec,to;function dl(t){if(ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ec=e&&e[1]||"",to=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ec+t+to}var nc=!1;function lc(t,e){if(!t||nc)return"";nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(R){var A=R}Reflect.construct(t,[],U)}else{try{U.call()}catch(R){A=R}t.call(U.prototype)}}else{try{throw Error()}catch(R){A=R}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(R){if(R&&A&&typeof R.stack=="string")return[R.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),f=i[0],s=i[1];if(f&&s){var p=f.split(`
`),E=s.split(`
`);for(a=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;a<E.length&&!E[a].includes("DetermineComponentFrameRoot");)a++;if(l===p.length||a===E.length)for(l=p.length-1,a=E.length-1;1<=l&&0<=a&&p[l]!==E[a];)a--;for(;1<=l&&0<=a;l--,a--)if(p[l]!==E[a]){if(l!==1||a!==1)do if(l--,a--,0>a||p[l]!==E[a]){var _=`
`+p[l].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=l&&0<=a);break}}}finally{nc=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?dl(n):""}function h0(t){switch(t.tag){case 26:case 27:case 5:return dl(t.type);case 16:return dl("Lazy");case 13:return dl("Suspense");case 19:return dl("SuspenseList");case 0:case 15:return lc(t.type,!1);case 11:return lc(t.type.render,!1);case 1:return lc(t.type,!0);case 31:return dl("Activity");default:return""}}function eo(t){try{var e="";do e+=h0(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function no(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function m0(t){var e=no(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),l=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(f){l=""+f,i.call(this,f)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(f){l=""+f},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gu(t){t._valueTracker||(t._valueTracker=m0(t))}function lo(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),l="";return t&&(l=no(t)?t.checked?"true":"false":t.value),t=l,t!==n?(e.setValue(t),!0):!1}function vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var p0=/[\n"\\]/g;function xe(t){return t.replace(p0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ac(t,e,n,l,a,i,f,s){t.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.type=f:t.removeAttribute("type"),e!=null?f==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Se(e)):t.value!==""+Se(e)&&(t.value=""+Se(e)):f!=="submit"&&f!=="reset"||t.removeAttribute("value"),e!=null?uc(t,f,Se(e)):n!=null?uc(t,f,Se(n)):l!=null&&t.removeAttribute("value"),a==null&&i!=null&&(t.defaultChecked=!!i),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Se(s):t.removeAttribute("name")}function ao(t,e,n,l,a,i,f,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;n=n!=null?""+Se(n):"",e=e!=null?""+Se(e):n,s||e===t.value||(t.value=e),t.defaultValue=e}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=s?t.checked:!!l,t.defaultChecked=!!l,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.name=f)}function uc(t,e,n){e==="number"&&vu(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function hl(t,e,n,l){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&l&&(t[n].defaultSelected=!0)}else{for(n=""+Se(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,l&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function uo(t,e,n){if(e!=null&&(e=""+Se(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Se(n):""}function io(t,e,n,l){if(e==null){if(l!=null){if(n!=null)throw Error(r(92));if(Gt(l)){if(1<l.length)throw Error(r(93));l=l[0]}n=l}n==null&&(n=""),e=n}n=Se(e),t.defaultValue=n,l=t.textContent,l===n&&l!==""&&l!==null&&(t.value=l)}function ml(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var y0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function co(t,e,n){var l=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,n):typeof n!="number"||n===0||y0.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function ro(t,e,n){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var a in e)l=e[a],e.hasOwnProperty(a)&&n[a]!==l&&co(t,a,l)}else for(var i in e)e.hasOwnProperty(i)&&co(t,i,e[i])}function ic(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var g0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),v0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bu(t){return v0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var cc=null;function rc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pl=null,yl=null;function fo(t){var e=fl(t);if(e&&(t=e.stateNode)){var n=t[le]||null;t:switch(t=e.stateNode,e.type){case"input":if(ac(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+xe(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var l=n[e];if(l!==t&&l.form===t.form){var a=l[le]||null;if(!a)throw Error(r(90));ac(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)l=n[e],l.form===t.form&&lo(l)}break t;case"textarea":uo(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&hl(t,!!n.multiple,e,!1)}}}var fc=!1;function oo(t,e,n){if(fc)return t(e,n);fc=!0;try{var l=t(e);return l}finally{if(fc=!1,(pl!==null||yl!==null)&&(ai(),pl&&(e=pl,t=yl,yl=pl=null,fo(e),t)))for(e=0;e<t.length;e++)fo(t[e])}}function ca(t,e){var n=t.stateNode;if(n===null)return null;var l=n[le]||null;if(l===null)return null;n=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(r(231,e,typeof n));return n}var ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oc=!1;if(ke)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){oc=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{oc=!1}var pn=null,sc=null,Su=null;function so(){if(Su)return Su;var t,e=sc,n=e.length,l,a="value"in pn?pn.value:pn.textContent,i=a.length;for(t=0;t<n&&e[t]===a[t];t++);var f=n-t;for(l=1;l<=f&&e[n-l]===a[i-l];l++);return Su=a.slice(t,1<l?1-l:void 0)}function xu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Eu(){return!0}function ho(){return!1}function ae(t){function e(n,l,a,i,f){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=f,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Eu:ho,this.isPropagationStopped=ho,this}return z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eu)},persist:function(){},isPersistent:Eu}),e}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=ae(Ln),fa=z({},Ln,{view:0,detail:0}),b0=ae(fa),dc,hc,oa,Au=z({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?(dc=t.screenX-oa.screenX,hc=t.screenY-oa.screenY):hc=dc=0,oa=t),dc)},movementY:function(t){return"movementY"in t?t.movementY:hc}}),mo=ae(Au),S0=z({},Au,{dataTransfer:0}),x0=ae(S0),E0=z({},fa,{relatedTarget:0}),mc=ae(E0),z0=z({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),A0=ae(z0),T0=z({},Ln,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),R0=ae(T0),O0=z({},Ln,{data:0}),po=ae(O0),_0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=D0[t])?!!e[t]:!1}function pc(){return N0}var w0=z({},fa,{key:function(t){if(t.key){var e=_0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?M0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(t){return t.type==="keypress"?xu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U0=ae(w0),C0=z({},Au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yo=ae(C0),j0=z({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),q0=ae(j0),H0=z({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),B0=ae(H0),Y0=z({},Au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G0=ae(Y0),L0=z({},Ln,{newState:0,oldState:0}),X0=ae(L0),Q0=[9,13,27,32],yc=ke&&"CompositionEvent"in window,sa=null;ke&&"documentMode"in document&&(sa=document.documentMode);var Z0=ke&&"TextEvent"in window&&!sa,go=ke&&(!yc||sa&&8<sa&&11>=sa),vo=" ",bo=!1;function So(t,e){switch(t){case"keyup":return Q0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xo(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gl=!1;function V0(t,e){switch(t){case"compositionend":return xo(e);case"keypress":return e.which!==32?null:(bo=!0,vo);case"textInput":return t=e.data,t===vo&&bo?null:t;default:return null}}function K0(t,e){if(gl)return t==="compositionend"||!yc&&So(t,e)?(t=so(),Su=sc=pn=null,gl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return go&&e.locale!=="ko"?null:e.data;default:return null}}var J0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!J0[t.type]:e==="textarea"}function zo(t,e,n,l){pl?yl?yl.push(l):yl=[l]:pl=l,e=oi(e,"onChange"),0<e.length&&(n=new zu("onChange","change",null,n,l),t.push({event:n,listeners:e}))}var da=null,ha=null;function k0(t){lh(t,0)}function Tu(t){var e=ia(t);if(lo(e))return t}function Ao(t,e){if(t==="change")return e}var To=!1;if(ke){var gc;if(ke){var vc="oninput"in document;if(!vc){var Ro=document.createElement("div");Ro.setAttribute("oninput","return;"),vc=typeof Ro.oninput=="function"}gc=vc}else gc=!1;To=gc&&(!document.documentMode||9<document.documentMode)}function Oo(){da&&(da.detachEvent("onpropertychange",_o),ha=da=null)}function _o(t){if(t.propertyName==="value"&&Tu(ha)){var e=[];zo(e,ha,t,rc(t)),oo(k0,e)}}function $0(t,e,n){t==="focusin"?(Oo(),da=e,ha=n,da.attachEvent("onpropertychange",_o)):t==="focusout"&&Oo()}function W0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tu(ha)}function F0(t,e){if(t==="click")return Tu(e)}function P0(t,e){if(t==="input"||t==="change")return Tu(e)}function I0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var se=typeof Object.is=="function"?Object.is:I0;function ma(t,e){if(se(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),l=Object.keys(e);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!be.call(e,a)||!se(t[a],e[a]))return!1}return!0}function Mo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Do(t,e){var n=Mo(t);t=0;for(var l;n;){if(n.nodeType===3){if(l=t+n.textContent.length,t<=e&&l>=e)return{node:n,offset:e-t};t=l}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Mo(n)}}function No(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?No(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wo(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=vu(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vu(t.document)}return e}function bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var tp=ke&&"documentMode"in document&&11>=document.documentMode,vl=null,Sc=null,pa=null,xc=!1;function Uo(t,e,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xc||vl==null||vl!==vu(l)||(l=vl,"selectionStart"in l&&bc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),pa&&ma(pa,l)||(pa=l,l=oi(Sc,"onSelect"),0<l.length&&(e=new zu("onSelect","select",null,e,n),t.push({event:e,listeners:l}),e.target=vl)))}function Xn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bl={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionrun:Xn("Transition","TransitionRun"),transitionstart:Xn("Transition","TransitionStart"),transitioncancel:Xn("Transition","TransitionCancel"),transitionend:Xn("Transition","TransitionEnd")},Ec={},Co={};ke&&(Co=document.createElement("div").style,"AnimationEvent"in window||(delete bl.animationend.animation,delete bl.animationiteration.animation,delete bl.animationstart.animation),"TransitionEvent"in window||delete bl.transitionend.transition);function Qn(t){if(Ec[t])return Ec[t];if(!bl[t])return t;var e=bl[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Co)return Ec[t]=e[n];return t}var jo=Qn("animationend"),qo=Qn("animationiteration"),Ho=Qn("animationstart"),ep=Qn("transitionrun"),np=Qn("transitionstart"),lp=Qn("transitioncancel"),Bo=Qn("transitionend"),Yo=new Map,zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zc.push("scrollEnd");function De(t,e){Yo.set(t,e),Gn(e,[t])}var Go=new WeakMap;function Ee(t,e){if(typeof t=="object"&&t!==null){var n=Go.get(t);return n!==void 0?n:(e={value:t,source:e,stack:eo(e)},Go.set(t,e),e)}return{value:t,source:e,stack:eo(e)}}var ze=[],Sl=0,Ac=0;function Ru(){for(var t=Sl,e=Ac=Sl=0;e<t;){var n=ze[e];ze[e++]=null;var l=ze[e];ze[e++]=null;var a=ze[e];ze[e++]=null;var i=ze[e];if(ze[e++]=null,l!==null&&a!==null){var f=l.pending;f===null?a.next=a:(a.next=f.next,f.next=a),l.pending=a}i!==0&&Lo(n,a,i)}}function Ou(t,e,n,l){ze[Sl++]=t,ze[Sl++]=e,ze[Sl++]=n,ze[Sl++]=l,Ac|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Tc(t,e,n,l){return Ou(t,e,n,l),_u(t)}function xl(t,e){return Ou(t,null,null,e),_u(t)}function Lo(t,e,n){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=t.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(a=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,a&&e!==null&&(a=31-oe(n),t=i.hiddenUpdates,l=t[a],l===null?t[a]=[e]:l.push(e),e.lane=n|536870912),i):null}function _u(t){if(50<Ga)throw Ga=0,Nr=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var El={};function ap(t,e,n,l){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function de(t,e,n,l){return new ap(t,e,n,l)}function Rc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $e(t,e){var n=t.alternate;return n===null?(n=de(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Xo(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Mu(t,e,n,l,a,i){var f=0;if(l=t,typeof t=="function")Rc(t)&&(f=1);else if(typeof t=="string")f=iy(t,n,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Et:return t=de(31,n,e,a),t.elementType=Et,t.lanes=i,t;case B:return Zn(n.children,a,i,e);case G:f=8,a|=24;break;case Q:return t=de(12,n,e,a|2),t.elementType=Q,t.lanes=i,t;case V:return t=de(13,n,e,a),t.elementType=V,t.lanes=i,t;case lt:return t=de(19,n,e,a),t.elementType=lt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case q:case Z:f=10;break t;case k:f=9;break t;case nt:f=11;break t;case $:f=14;break t;case Tt:f=16,l=null;break t}f=29,n=Error(r(130,t===null?"null":typeof t,"")),l=null}return e=de(f,n,e,a),e.elementType=t,e.type=l,e.lanes=i,e}function Zn(t,e,n,l){return t=de(7,t,l,e),t.lanes=n,t}function Oc(t,e,n){return t=de(6,t,null,e),t.lanes=n,t}function _c(t,e,n){return e=de(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var zl=[],Al=0,Du=null,Nu=0,Ae=[],Te=0,Vn=null,We=1,Fe="";function Kn(t,e){zl[Al++]=Nu,zl[Al++]=Du,Du=t,Nu=e}function Qo(t,e,n){Ae[Te++]=We,Ae[Te++]=Fe,Ae[Te++]=Vn,Vn=t;var l=We;t=Fe;var a=32-oe(l)-1;l&=~(1<<a),n+=1;var i=32-oe(e)+a;if(30<i){var f=a-a%5;i=(l&(1<<f)-1).toString(32),l>>=f,a-=f,We=1<<32-oe(e)+a|n<<a|l,Fe=i+t}else We=1<<i|n<<a|l,Fe=t}function Mc(t){t.return!==null&&(Kn(t,1),Qo(t,1,0))}function Dc(t){for(;t===Du;)Du=zl[--Al],zl[Al]=null,Nu=zl[--Al],zl[Al]=null;for(;t===Vn;)Vn=Ae[--Te],Ae[Te]=null,Fe=Ae[--Te],Ae[Te]=null,We=Ae[--Te],Ae[Te]=null}var ee=null,Dt=null,mt=!1,Jn=null,je=!1,Nc=Error(r(519));function kn(t){var e=Error(r(418,""));throw va(Ee(e,t)),Nc}function Zo(t){var e=t.stateNode,n=t.type,l=t.memoizedProps;switch(e[Ft]=t,e[le]=l,n){case"dialog":st("cancel",e),st("close",e);break;case"iframe":case"object":case"embed":st("load",e);break;case"video":case"audio":for(n=0;n<Xa.length;n++)st(Xa[n],e);break;case"source":st("error",e);break;case"img":case"image":case"link":st("error",e),st("load",e);break;case"details":st("toggle",e);break;case"input":st("invalid",e),ao(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),gu(e);break;case"select":st("invalid",e);break;case"textarea":st("invalid",e),io(e,l.value,l.defaultValue,l.children),gu(e)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||l.suppressHydrationWarning===!0||ch(e.textContent,n)?(l.popover!=null&&(st("beforetoggle",e),st("toggle",e)),l.onScroll!=null&&st("scroll",e),l.onScrollEnd!=null&&st("scrollend",e),l.onClick!=null&&(e.onclick=si),e=!0):e=!1,e||kn(t)}function Vo(t){for(ee=t.return;ee;)switch(ee.tag){case 5:case 13:je=!1;return;case 27:case 3:je=!0;return;default:ee=ee.return}}function ya(t){if(t!==ee)return!1;if(!mt)return Vo(t),mt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Jr(t.type,t.memoizedProps)),n=!n),n&&Dt&&kn(t),Vo(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Dt=we(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Dt=null}}else e===27?(e=Dt,Nn(t.type)?(t=Fr,Fr=null,Dt=t):Dt=e):Dt=ee?we(t.stateNode.nextSibling):null;return!0}function ga(){Dt=ee=null,mt=!1}function Ko(){var t=Jn;return t!==null&&(ce===null?ce=t:ce.push.apply(ce,t),Jn=null),t}function va(t){Jn===null?Jn=[t]:Jn.push(t)}var wc=C(null),$n=null,Pe=null;function yn(t,e,n){X(wc,e._currentValue),e._currentValue=n}function Ie(t){t._currentValue=wc.current,Y(wc)}function Uc(t,e,n){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===n)break;t=t.return}}function Cc(t,e,n,l){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){var f=a.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=a;for(var p=0;p<e.length;p++)if(s.context===e[p]){i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Uc(i.return,n,t),l||(f=null);break t}i=s.next}}else if(a.tag===18){if(f=a.return,f===null)throw Error(r(341));f.lanes|=n,i=f.alternate,i!==null&&(i.lanes|=n),Uc(f,n,t),f=null}else f=a.child;if(f!==null)f.return=a;else for(f=a;f!==null;){if(f===t){f=null;break}if(a=f.sibling,a!==null){a.return=f.return,f=a;break}f=f.return}a=f}}function ba(t,e,n,l){t=null;for(var a=e,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var f=a.alternate;if(f===null)throw Error(r(387));if(f=f.memoizedProps,f!==null){var s=a.type;se(a.pendingProps.value,f.value)||(t!==null?t.push(s):t=[s])}}else if(a===Lt.current){if(f=a.alternate,f===null)throw Error(r(387));f.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(ka):t=[ka])}a=a.return}t!==null&&Cc(e,t,n,l),e.flags|=262144}function wu(t){for(t=t.firstContext;t!==null;){if(!se(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Wn(t){$n=t,Pe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pt(t){return Jo($n,t)}function Uu(t,e){return $n===null&&Wn(t),Jo(t,e)}function Jo(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Pe===null){if(t===null)throw Error(r(308));Pe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Pe=Pe.next=e;return n}var up=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},ip=u.unstable_scheduleCallback,cp=u.unstable_NormalPriority,Ht={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jc(){return{controller:new up,data:new Map,refCount:0}}function Sa(t){t.refCount--,t.refCount===0&&ip(cp,function(){t.controller.abort()})}var xa=null,qc=0,Tl=0,Rl=null;function rp(t,e){if(xa===null){var n=xa=[];qc=0,Tl=Br(),Rl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return qc++,e.then(ko,ko),e}function ko(){if(--qc===0&&xa!==null){Rl!==null&&(Rl.status="fulfilled");var t=xa;xa=null,Tl=0,Rl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function fp(t,e){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var $o=O.S;O.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&rp(t,e),$o!==null&&$o(t,e)};var Fn=C(null);function Hc(){var t=Fn.current;return t!==null?t:At.pooledCache}function Cu(t,e){e===null?X(Fn,Fn.current):X(Fn,e.pool)}function Wo(){var t=Hc();return t===null?null:{parent:Ht._currentValue,pool:t}}var Ea=Error(r(460)),Fo=Error(r(474)),ju=Error(r(542)),Bc={then:function(){}};function Po(t){return t=t.status,t==="fulfilled"||t==="rejected"}function qu(){}function Io(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(qu,qu),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,es(t),t;default:if(typeof e.status=="string")e.then(qu,qu);else{if(t=At,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=l}},function(l){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,es(t),t}throw za=e,Ea}}var za=null;function ts(){if(za===null)throw Error(r(459));var t=za;return za=null,t}function es(t){if(t===Ea||t===ju)throw Error(r(483))}var gn=!1;function Yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function vn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function bn(t,e,n){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(gt&2)!==0){var a=l.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),l.pending=e,e=_u(t),Lo(t,null,n),e}return Ou(t,l,e,n),_u(t)}function Aa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,Jf(t,n)}}function Lc(t,e){var n=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=f:i=i.next=f,n=n.next}while(n!==null);i===null?a=i=e:i=i.next=e}else a=i=e;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Xc=!1;function Ta(){if(Xc){var t=Rl;if(t!==null)throw t}}function Ra(t,e,n,l){Xc=!1;var a=t.updateQueue;gn=!1;var i=a.firstBaseUpdate,f=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var p=s,E=p.next;p.next=null,f===null?i=E:f.next=E,f=p;var _=t.alternate;_!==null&&(_=_.updateQueue,s=_.lastBaseUpdate,s!==f&&(s===null?_.firstBaseUpdate=E:s.next=E,_.lastBaseUpdate=p))}if(i!==null){var U=a.baseState;f=0,_=E=p=null,s=i;do{var A=s.lane&-536870913,R=A!==s.lane;if(R?(dt&A)===A:(l&A)===A){A!==0&&A===Tl&&(Xc=!0),_!==null&&(_=_.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var et=t,P=s;A=e;var xt=n;switch(P.tag){case 1:if(et=P.payload,typeof et=="function"){U=et.call(xt,U,A);break t}U=et;break t;case 3:et.flags=et.flags&-65537|128;case 0:if(et=P.payload,A=typeof et=="function"?et.call(xt,U,A):et,A==null)break t;U=z({},U,A);break t;case 2:gn=!0}}A=s.callback,A!==null&&(t.flags|=64,R&&(t.flags|=8192),R=a.callbacks,R===null?a.callbacks=[A]:R.push(A))}else R={lane:A,tag:s.tag,payload:s.payload,callback:s.callback,next:null},_===null?(E=_=R,p=U):_=_.next=R,f|=A;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;R=s,s=R.next,R.next=null,a.lastBaseUpdate=R,a.shared.pending=null}}while(!0);_===null&&(p=U),a.baseState=p,a.firstBaseUpdate=E,a.lastBaseUpdate=_,i===null&&(a.shared.lanes=0),On|=f,t.lanes=f,t.memoizedState=U}}function ns(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function ls(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)ns(n[t],e)}var Ol=C(null),Hu=C(0);function as(t,e){t=cn,X(Hu,t),X(Ol,e),cn=t|e.baseLanes}function Qc(){X(Hu,cn),X(Ol,Ol.current)}function Zc(){cn=Hu.current,Y(Ol),Y(Hu)}var Sn=0,it=null,bt=null,Ct=null,Bu=!1,_l=!1,Pn=!1,Yu=0,Oa=0,Ml=null,op=0;function wt(){throw Error(r(321))}function Vc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!se(t[n],e[n]))return!1;return!0}function Kc(t,e,n,l,a,i){return Sn=i,it=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,O.H=t===null||t.memoizedState===null?Ls:Xs,Pn=!1,i=n(l,a),Pn=!1,_l&&(i=is(e,n,l,a)),us(t),i}function us(t){O.H=Vu;var e=bt!==null&&bt.next!==null;if(Sn=0,Ct=bt=it=null,Bu=!1,Oa=0,Ml=null,e)throw Error(r(300));t===null||Qt||(t=t.dependencies,t!==null&&wu(t)&&(Qt=!0))}function is(t,e,n,l){it=t;var a=0;do{if(_l&&(Ml=null),Oa=0,_l=!1,25<=a)throw Error(r(301));if(a+=1,Ct=bt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}O.H=gp,i=e(n,l)}while(_l);return i}function sp(){var t=O.H,e=t.useState()[0];return e=typeof e.then=="function"?_a(e):e,t=t.useState()[0],(bt!==null?bt.memoizedState:null)!==t&&(it.flags|=1024),e}function Jc(){var t=Yu!==0;return Yu=0,t}function kc(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function $c(t){if(Bu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Bu=!1}Sn=0,Ct=bt=it=null,_l=!1,Oa=Yu=0,Ml=null}function ue(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?it.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function jt(){if(bt===null){var t=it.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ct===null?it.memoizedState:Ct.next;if(e!==null)Ct=e,bt=t;else{if(t===null)throw it.alternate===null?Error(r(467)):Error(r(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ct===null?it.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function Wc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _a(t){var e=Oa;return Oa+=1,Ml===null&&(Ml=[]),t=Io(Ml,t,e),e=it,(Ct===null?e.memoizedState:Ct.next)===null&&(e=e.alternate,O.H=e===null||e.memoizedState===null?Ls:Xs),t}function Gu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _a(t);if(t.$$typeof===Z)return Pt(t)}throw Error(r(438,String(t)))}function Fc(t){var e=null,n=it.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var l=it.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Wc(),it.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),l=0;l<t;l++)n[l]=te;return e.index++,n}function tn(t,e){return typeof e=="function"?e(t):e}function Lu(t){var e=jt();return Pc(e,bt,t)}function Pc(t,e,n){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=n;var a=t.baseQueue,i=l.pending;if(i!==null){if(a!==null){var f=a.next;a.next=i.next,i.next=f}e.baseQueue=a=i,l.pending=null}if(i=t.baseState,a===null)t.memoizedState=i;else{e=a.next;var s=f=null,p=null,E=e,_=!1;do{var U=E.lane&-536870913;if(U!==E.lane?(dt&U)===U:(Sn&U)===U){var A=E.revertLane;if(A===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),U===Tl&&(_=!0);else if((Sn&A)===A){E=E.next,A===Tl&&(_=!0);continue}else U={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(s=p=U,f=i):p=p.next=U,it.lanes|=A,On|=A;U=E.action,Pn&&n(i,U),i=E.hasEagerState?E.eagerState:n(i,U)}else A={lane:U,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(s=p=A,f=i):p=p.next=A,it.lanes|=U,On|=U;E=E.next}while(E!==null&&E!==e);if(p===null?f=i:p.next=s,!se(i,t.memoizedState)&&(Qt=!0,_&&(n=Rl,n!==null)))throw n;t.memoizedState=i,t.baseState=f,t.baseQueue=p,l.lastRenderedState=i}return a===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Ic(t){var e=jt(),n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=t;var l=n.dispatch,a=n.pending,i=e.memoizedState;if(a!==null){n.pending=null;var f=a=a.next;do i=t(i,f.action),f=f.next;while(f!==a);se(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,l]}function cs(t,e,n){var l=it,a=jt(),i=mt;if(i){if(n===void 0)throw Error(r(407));n=n()}else n=e();var f=!se((bt||a).memoizedState,n);f&&(a.memoizedState=n,Qt=!0),a=a.queue;var s=os.bind(null,l,a,t);if(Ma(2048,8,s,[t]),a.getSnapshot!==e||f||Ct!==null&&Ct.memoizedState.tag&1){if(l.flags|=2048,Dl(9,Xu(),fs.bind(null,l,a,n,e),null),At===null)throw Error(r(349));i||(Sn&124)!==0||rs(l,e,n)}return n}function rs(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=it.updateQueue,e===null?(e=Wc(),it.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fs(t,e,n,l){e.value=n,e.getSnapshot=l,ss(e)&&ds(t)}function os(t,e,n){return n(function(){ss(e)&&ds(t)})}function ss(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!se(t,n)}catch{return!0}}function ds(t){var e=xl(t,2);e!==null&&ge(e,t,2)}function tr(t){var e=ue();if(typeof t=="function"){var n=t;if(t=n(),Pn){hn(!0);try{n()}finally{hn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:t},e}function hs(t,e,n,l){return t.baseState=n,Pc(t,bt,typeof l=="function"?l:tn)}function dp(t,e,n,l,a){if(Zu(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){i.listeners.push(f)}};O.T!==null?n(!0):i.isTransition=!1,l(i),n=e.pending,n===null?(i.next=e.pending=i,ms(e,i)):(i.next=n.next,e.pending=n.next=i)}}function ms(t,e){var n=e.action,l=e.payload,a=t.state;if(e.isTransition){var i=O.T,f={};O.T=f;try{var s=n(a,l),p=O.S;p!==null&&p(f,s),ps(t,e,s)}catch(E){er(t,e,E)}finally{O.T=i}}else try{i=n(a,l),ps(t,e,i)}catch(E){er(t,e,E)}}function ps(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){ys(t,e,l)},function(l){return er(t,e,l)}):ys(t,e,n)}function ys(t,e,n){e.status="fulfilled",e.value=n,gs(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,ms(t,n)))}function er(t,e,n){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=n,gs(e),e=e.next;while(e!==l)}t.action=null}function gs(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function vs(t,e){return e}function bs(t,e){if(mt){var n=At.formState;if(n!==null){t:{var l=it;if(mt){if(Dt){e:{for(var a=Dt,i=je;a.nodeType!==8;){if(!i){a=null;break e}if(a=we(a.nextSibling),a===null){a=null;break e}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Dt=we(a.nextSibling),l=a.data==="F!";break t}}kn(l)}l=!1}l&&(e=n[0])}}return n=ue(),n.memoizedState=n.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:e},n.queue=l,n=Bs.bind(null,it,l),l.dispatch=n,l=tr(!1),i=ir.bind(null,it,!1,l.queue),l=ue(),a={state:e,dispatch:null,action:t,pending:null},l.queue=a,n=dp.bind(null,it,a,i,n),a.dispatch=n,l.memoizedState=t,[e,n,!1]}function Ss(t){var e=jt();return xs(e,bt,t)}function xs(t,e,n){if(e=Pc(t,e,vs)[0],t=Lu(tn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=_a(e)}catch(f){throw f===Ea?ju:f}else l=e;e=jt();var a=e.queue,i=a.dispatch;return n!==e.memoizedState&&(it.flags|=2048,Dl(9,Xu(),hp.bind(null,a,n),null)),[l,i,t]}function hp(t,e){t.action=e}function Es(t){var e=jt(),n=bt;if(n!==null)return xs(e,n,t);jt(),e=e.memoizedState,n=jt();var l=n.queue.dispatch;return n.memoizedState=t,[e,l,!1]}function Dl(t,e,n,l){return t={tag:t,create:n,deps:l,inst:e,next:null},e=it.updateQueue,e===null&&(e=Wc(),it.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(l=n.next,n.next=t,t.next=l,e.lastEffect=t),t}function Xu(){return{destroy:void 0,resource:void 0}}function zs(){return jt().memoizedState}function Qu(t,e,n,l){var a=ue();l=l===void 0?null:l,it.flags|=t,a.memoizedState=Dl(1|e,Xu(),n,l)}function Ma(t,e,n,l){var a=jt();l=l===void 0?null:l;var i=a.memoizedState.inst;bt!==null&&l!==null&&Vc(l,bt.memoizedState.deps)?a.memoizedState=Dl(e,i,n,l):(it.flags|=t,a.memoizedState=Dl(1|e,i,n,l))}function As(t,e){Qu(8390656,8,t,e)}function Ts(t,e){Ma(2048,8,t,e)}function Rs(t,e){return Ma(4,2,t,e)}function Os(t,e){return Ma(4,4,t,e)}function _s(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ms(t,e,n){n=n!=null?n.concat([t]):null,Ma(4,4,_s.bind(null,e,t),n)}function nr(){}function Ds(t,e){var n=jt();e=e===void 0?null:e;var l=n.memoizedState;return e!==null&&Vc(e,l[1])?l[0]:(n.memoizedState=[t,e],t)}function Ns(t,e){var n=jt();e=e===void 0?null:e;var l=n.memoizedState;if(e!==null&&Vc(e,l[1]))return l[0];if(l=t(),Pn){hn(!0);try{t()}finally{hn(!1)}}return n.memoizedState=[l,e],l}function lr(t,e,n){return n===void 0||(Sn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=Cd(),it.lanes|=t,On|=t,n)}function ws(t,e,n,l){return se(n,e)?n:Ol.current!==null?(t=lr(t,n,l),se(t,e)||(Qt=!0),t):(Sn&42)===0?(Qt=!0,t.memoizedState=n):(t=Cd(),it.lanes|=t,On|=t,e)}function Us(t,e,n,l,a){var i=L.p;L.p=i!==0&&8>i?i:8;var f=O.T,s={};O.T=s,ir(t,!1,e,n);try{var p=a(),E=O.S;if(E!==null&&E(s,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var _=fp(p,l);Da(t,e,_,ye(t))}else Da(t,e,l,ye(t))}catch(U){Da(t,e,{then:function(){},status:"rejected",reason:U},ye())}finally{L.p=i,O.T=f}}function mp(){}function ar(t,e,n,l){if(t.tag!==5)throw Error(r(476));var a=Cs(t).queue;Us(t,a,e,F,n===null?mp:function(){return js(t),n(l)})}function Cs(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:F},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function js(t){var e=Cs(t).next.queue;Da(t,e,{},ye())}function ur(){return Pt(ka)}function qs(){return jt().memoizedState}function Hs(){return jt().memoizedState}function pp(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ye();t=vn(n);var l=bn(e,t,n);l!==null&&(ge(l,e,n),Aa(l,e,n)),e={cache:jc()},t.payload=e;return}e=e.return}}function yp(t,e,n){var l=ye();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Zu(t)?Ys(e,n):(n=Tc(t,e,n,l),n!==null&&(ge(n,t,l),Gs(n,e,l)))}function Bs(t,e,n){var l=ye();Da(t,e,n,l)}function Da(t,e,n,l){var a={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zu(t))Ys(e,a);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var f=e.lastRenderedState,s=i(f,n);if(a.hasEagerState=!0,a.eagerState=s,se(s,f))return Ou(t,e,a,0),At===null&&Ru(),!1}catch{}finally{}if(n=Tc(t,e,a,l),n!==null)return ge(n,t,l),Gs(n,e,l),!0}return!1}function ir(t,e,n,l){if(l={lane:2,revertLane:Br(),action:l,hasEagerState:!1,eagerState:null,next:null},Zu(t)){if(e)throw Error(r(479))}else e=Tc(t,n,l,2),e!==null&&ge(e,t,2)}function Zu(t){var e=t.alternate;return t===it||e!==null&&e===it}function Ys(t,e){_l=Bu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gs(t,e,n){if((n&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,Jf(t,n)}}var Vu={readContext:Pt,use:Gu,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt},Ls={readContext:Pt,use:Gu,useCallback:function(t,e){return ue().memoizedState=[t,e===void 0?null:e],t},useContext:Pt,useEffect:As,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Qu(4194308,4,_s.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qu(4194308,4,t,e)},useInsertionEffect:function(t,e){Qu(4,2,t,e)},useMemo:function(t,e){var n=ue();e=e===void 0?null:e;var l=t();if(Pn){hn(!0);try{t()}finally{hn(!1)}}return n.memoizedState=[l,e],l},useReducer:function(t,e,n){var l=ue();if(n!==void 0){var a=n(e);if(Pn){hn(!0);try{n(e)}finally{hn(!1)}}}else a=e;return l.memoizedState=l.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},l.queue=t,t=t.dispatch=yp.bind(null,it,t),[l.memoizedState,t]},useRef:function(t){var e=ue();return t={current:t},e.memoizedState=t},useState:function(t){t=tr(t);var e=t.queue,n=Bs.bind(null,it,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:nr,useDeferredValue:function(t,e){var n=ue();return lr(n,t,e)},useTransition:function(){var t=tr(!1);return t=Us.bind(null,it,t.queue,!0,!1),ue().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var l=it,a=ue();if(mt){if(n===void 0)throw Error(r(407));n=n()}else{if(n=e(),At===null)throw Error(r(349));(dt&124)!==0||rs(l,e,n)}a.memoizedState=n;var i={value:n,getSnapshot:e};return a.queue=i,As(os.bind(null,l,i,t),[t]),l.flags|=2048,Dl(9,Xu(),fs.bind(null,l,i,n,e),null),n},useId:function(){var t=ue(),e=At.identifierPrefix;if(mt){var n=Fe,l=We;n=(l&~(1<<32-oe(l)-1)).toString(32)+n,e="«"+e+"R"+n,n=Yu++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=op++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:ur,useFormState:bs,useActionState:bs,useOptimistic:function(t){var e=ue();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=ir.bind(null,it,!0,n),n.dispatch=e,[t,e]},useMemoCache:Fc,useCacheRefresh:function(){return ue().memoizedState=pp.bind(null,it)}},Xs={readContext:Pt,use:Gu,useCallback:Ds,useContext:Pt,useEffect:Ts,useImperativeHandle:Ms,useInsertionEffect:Rs,useLayoutEffect:Os,useMemo:Ns,useReducer:Lu,useRef:zs,useState:function(){return Lu(tn)},useDebugValue:nr,useDeferredValue:function(t,e){var n=jt();return ws(n,bt.memoizedState,t,e)},useTransition:function(){var t=Lu(tn)[0],e=jt().memoizedState;return[typeof t=="boolean"?t:_a(t),e]},useSyncExternalStore:cs,useId:qs,useHostTransitionStatus:ur,useFormState:Ss,useActionState:Ss,useOptimistic:function(t,e){var n=jt();return hs(n,bt,t,e)},useMemoCache:Fc,useCacheRefresh:Hs},gp={readContext:Pt,use:Gu,useCallback:Ds,useContext:Pt,useEffect:Ts,useImperativeHandle:Ms,useInsertionEffect:Rs,useLayoutEffect:Os,useMemo:Ns,useReducer:Ic,useRef:zs,useState:function(){return Ic(tn)},useDebugValue:nr,useDeferredValue:function(t,e){var n=jt();return bt===null?lr(n,t,e):ws(n,bt.memoizedState,t,e)},useTransition:function(){var t=Ic(tn)[0],e=jt().memoizedState;return[typeof t=="boolean"?t:_a(t),e]},useSyncExternalStore:cs,useId:qs,useHostTransitionStatus:ur,useFormState:Es,useActionState:Es,useOptimistic:function(t,e){var n=jt();return bt!==null?hs(n,bt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Fc,useCacheRefresh:Hs},Nl=null,Na=0;function Ku(t){var e=Na;return Na+=1,Nl===null&&(Nl=[]),Io(Nl,t,e)}function wa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ju(t,e){throw e.$$typeof===w?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Qs(t){var e=t._init;return e(t._payload)}function Zs(t){function e(S,b){if(t){var x=S.deletions;x===null?(S.deletions=[b],S.flags|=16):x.push(b)}}function n(S,b){if(!t)return null;for(;b!==null;)e(S,b),b=b.sibling;return null}function l(S){for(var b=new Map;S!==null;)S.key!==null?b.set(S.key,S):b.set(S.index,S),S=S.sibling;return b}function a(S,b){return S=$e(S,b),S.index=0,S.sibling=null,S}function i(S,b,x){return S.index=x,t?(x=S.alternate,x!==null?(x=x.index,x<b?(S.flags|=67108866,b):x):(S.flags|=67108866,b)):(S.flags|=1048576,b)}function f(S){return t&&S.alternate===null&&(S.flags|=67108866),S}function s(S,b,x,M){return b===null||b.tag!==6?(b=Oc(x,S.mode,M),b.return=S,b):(b=a(b,x),b.return=S,b)}function p(S,b,x,M){var K=x.type;return K===B?_(S,b,x.props.children,M,x.key):b!==null&&(b.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Tt&&Qs(K)===b.type)?(b=a(b,x.props),wa(b,x),b.return=S,b):(b=Mu(x.type,x.key,x.props,null,S.mode,M),wa(b,x),b.return=S,b)}function E(S,b,x,M){return b===null||b.tag!==4||b.stateNode.containerInfo!==x.containerInfo||b.stateNode.implementation!==x.implementation?(b=_c(x,S.mode,M),b.return=S,b):(b=a(b,x.children||[]),b.return=S,b)}function _(S,b,x,M,K){return b===null||b.tag!==7?(b=Zn(x,S.mode,M,K),b.return=S,b):(b=a(b,x),b.return=S,b)}function U(S,b,x){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Oc(""+b,S.mode,x),b.return=S,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case j:return x=Mu(b.type,b.key,b.props,null,S.mode,x),wa(x,b),x.return=S,x;case H:return b=_c(b,S.mode,x),b.return=S,b;case Tt:var M=b._init;return b=M(b._payload),U(S,b,x)}if(Gt(b)||Yt(b))return b=Zn(b,S.mode,x,null),b.return=S,b;if(typeof b.then=="function")return U(S,Ku(b),x);if(b.$$typeof===Z)return U(S,Uu(S,b),x);Ju(S,b)}return null}function A(S,b,x,M){var K=b!==null?b.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return K!==null?null:s(S,b,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case j:return x.key===K?p(S,b,x,M):null;case H:return x.key===K?E(S,b,x,M):null;case Tt:return K=x._init,x=K(x._payload),A(S,b,x,M)}if(Gt(x)||Yt(x))return K!==null?null:_(S,b,x,M,null);if(typeof x.then=="function")return A(S,b,Ku(x),M);if(x.$$typeof===Z)return A(S,b,Uu(S,x),M);Ju(S,x)}return null}function R(S,b,x,M,K){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return S=S.get(x)||null,s(b,S,""+M,K);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case j:return S=S.get(M.key===null?x:M.key)||null,p(b,S,M,K);case H:return S=S.get(M.key===null?x:M.key)||null,E(b,S,M,K);case Tt:var ct=M._init;return M=ct(M._payload),R(S,b,x,M,K)}if(Gt(M)||Yt(M))return S=S.get(x)||null,_(b,S,M,K,null);if(typeof M.then=="function")return R(S,b,x,Ku(M),K);if(M.$$typeof===Z)return R(S,b,x,Uu(b,M),K);Ju(b,M)}return null}function et(S,b,x,M){for(var K=null,ct=null,J=b,tt=b=0,Vt=null;J!==null&&tt<x.length;tt++){J.index>tt?(Vt=J,J=null):Vt=J.sibling;var ht=A(S,J,x[tt],M);if(ht===null){J===null&&(J=Vt);break}t&&J&&ht.alternate===null&&e(S,J),b=i(ht,b,tt),ct===null?K=ht:ct.sibling=ht,ct=ht,J=Vt}if(tt===x.length)return n(S,J),mt&&Kn(S,tt),K;if(J===null){for(;tt<x.length;tt++)J=U(S,x[tt],M),J!==null&&(b=i(J,b,tt),ct===null?K=J:ct.sibling=J,ct=J);return mt&&Kn(S,tt),K}for(J=l(J);tt<x.length;tt++)Vt=R(J,S,tt,x[tt],M),Vt!==null&&(t&&Vt.alternate!==null&&J.delete(Vt.key===null?tt:Vt.key),b=i(Vt,b,tt),ct===null?K=Vt:ct.sibling=Vt,ct=Vt);return t&&J.forEach(function(qn){return e(S,qn)}),mt&&Kn(S,tt),K}function P(S,b,x,M){if(x==null)throw Error(r(151));for(var K=null,ct=null,J=b,tt=b=0,Vt=null,ht=x.next();J!==null&&!ht.done;tt++,ht=x.next()){J.index>tt?(Vt=J,J=null):Vt=J.sibling;var qn=A(S,J,ht.value,M);if(qn===null){J===null&&(J=Vt);break}t&&J&&qn.alternate===null&&e(S,J),b=i(qn,b,tt),ct===null?K=qn:ct.sibling=qn,ct=qn,J=Vt}if(ht.done)return n(S,J),mt&&Kn(S,tt),K;if(J===null){for(;!ht.done;tt++,ht=x.next())ht=U(S,ht.value,M),ht!==null&&(b=i(ht,b,tt),ct===null?K=ht:ct.sibling=ht,ct=ht);return mt&&Kn(S,tt),K}for(J=l(J);!ht.done;tt++,ht=x.next())ht=R(J,S,tt,ht.value,M),ht!==null&&(t&&ht.alternate!==null&&J.delete(ht.key===null?tt:ht.key),b=i(ht,b,tt),ct===null?K=ht:ct.sibling=ht,ct=ht);return t&&J.forEach(function(vy){return e(S,vy)}),mt&&Kn(S,tt),K}function xt(S,b,x,M){if(typeof x=="object"&&x!==null&&x.type===B&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case j:t:{for(var K=x.key;b!==null;){if(b.key===K){if(K=x.type,K===B){if(b.tag===7){n(S,b.sibling),M=a(b,x.props.children),M.return=S,S=M;break t}}else if(b.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Tt&&Qs(K)===b.type){n(S,b.sibling),M=a(b,x.props),wa(M,x),M.return=S,S=M;break t}n(S,b);break}else e(S,b);b=b.sibling}x.type===B?(M=Zn(x.props.children,S.mode,M,x.key),M.return=S,S=M):(M=Mu(x.type,x.key,x.props,null,S.mode,M),wa(M,x),M.return=S,S=M)}return f(S);case H:t:{for(K=x.key;b!==null;){if(b.key===K)if(b.tag===4&&b.stateNode.containerInfo===x.containerInfo&&b.stateNode.implementation===x.implementation){n(S,b.sibling),M=a(b,x.children||[]),M.return=S,S=M;break t}else{n(S,b);break}else e(S,b);b=b.sibling}M=_c(x,S.mode,M),M.return=S,S=M}return f(S);case Tt:return K=x._init,x=K(x._payload),xt(S,b,x,M)}if(Gt(x))return et(S,b,x,M);if(Yt(x)){if(K=Yt(x),typeof K!="function")throw Error(r(150));return x=K.call(x),P(S,b,x,M)}if(typeof x.then=="function")return xt(S,b,Ku(x),M);if(x.$$typeof===Z)return xt(S,b,Uu(S,x),M);Ju(S,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,b!==null&&b.tag===6?(n(S,b.sibling),M=a(b,x),M.return=S,S=M):(n(S,b),M=Oc(x,S.mode,M),M.return=S,S=M),f(S)):n(S,b)}return function(S,b,x,M){try{Na=0;var K=xt(S,b,x,M);return Nl=null,K}catch(J){if(J===Ea||J===ju)throw J;var ct=de(29,J,null,S.mode);return ct.lanes=M,ct.return=S,ct}finally{}}}var wl=Zs(!0),Vs=Zs(!1),Re=C(null),qe=null;function xn(t){var e=t.alternate;X(Bt,Bt.current&1),X(Re,t),qe===null&&(e===null||Ol.current!==null||e.memoizedState!==null)&&(qe=t)}function Ks(t){if(t.tag===22){if(X(Bt,Bt.current),X(Re,t),qe===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(qe=t)}}else En()}function En(){X(Bt,Bt.current),X(Re,Re.current)}function en(t){Y(Re),qe===t&&(qe=null),Y(Bt)}var Bt=C(0);function ku(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Wr(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function cr(t,e,n,l){e=t.memoizedState,n=n(l,e),n=n==null?e:z({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rr={enqueueSetState:function(t,e,n){t=t._reactInternals;var l=ye(),a=vn(l);a.payload=e,n!=null&&(a.callback=n),e=bn(t,a,l),e!==null&&(ge(e,t,l),Aa(e,t,l))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var l=ye(),a=vn(l);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=bn(t,a,l),e!==null&&(ge(e,t,l),Aa(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ye(),l=vn(n);l.tag=2,e!=null&&(l.callback=e),e=bn(t,l,n),e!==null&&(ge(e,t,n),Aa(e,t,n))}};function Js(t,e,n,l,a,i,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,f):e.prototype&&e.prototype.isPureReactComponent?!ma(n,l)||!ma(a,i):!0}function ks(t,e,n,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,l),e.state!==t&&rr.enqueueReplaceState(e,e.state,null)}function In(t,e){var n=e;if("ref"in e){n={};for(var l in e)l!=="ref"&&(n[l]=e[l])}if(t=t.defaultProps){n===e&&(n=z({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}var $u=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function $s(t){$u(t)}function Ws(t){console.error(t)}function Fs(t){$u(t)}function Wu(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Ps(t,e,n){try{var l=t.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function fr(t,e,n){return n=vn(n),n.tag=3,n.payload={element:null},n.callback=function(){Wu(t,e)},n}function Is(t){return t=vn(t),t.tag=3,t}function td(t,e,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;t.payload=function(){return a(i)},t.callback=function(){Ps(e,n,l)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(t.callback=function(){Ps(e,n,l),typeof a!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function vp(t,e,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=n.alternate,e!==null&&ba(e,n,a,!0),n=Re.current,n!==null){switch(n.tag){case 13:return qe===null?Ur():n.alternate===null&&Nt===0&&(Nt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Bc?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([l]):e.add(l),jr(t,l,a)),!1;case 22:return n.flags|=65536,l===Bc?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([l]):n.add(l)),jr(t,l,a)),!1}throw Error(r(435,n.tag))}return jr(t,l,a),Ur(),!1}if(mt)return e=Re.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,l!==Nc&&(t=Error(r(422),{cause:l}),va(Ee(t,n)))):(l!==Nc&&(e=Error(r(423),{cause:l}),va(Ee(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,l=Ee(l,n),a=fr(t.stateNode,l,a),Lc(t,a),Nt!==4&&(Nt=2)),!1;var i=Error(r(520),{cause:l});if(i=Ee(i,n),Ya===null?Ya=[i]:Ya.push(i),Nt!==4&&(Nt=2),e===null)return!0;l=Ee(l,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=fr(n.stateNode,l,t),Lc(n,t),!1;case 1:if(e=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(_n===null||!_n.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Is(a),td(a,t,n,l),Lc(n,a),!1}n=n.return}while(n!==null);return!1}var ed=Error(r(461)),Qt=!1;function Jt(t,e,n,l){e.child=t===null?Vs(e,null,n,l):wl(e,t.child,n,l)}function nd(t,e,n,l,a){n=n.render;var i=e.ref;if("ref"in l){var f={};for(var s in l)s!=="ref"&&(f[s]=l[s])}else f=l;return Wn(e),l=Kc(t,e,n,f,i,a),s=Jc(),t!==null&&!Qt?(kc(t,e,a),nn(t,e,a)):(mt&&s&&Mc(e),e.flags|=1,Jt(t,e,l,a),e.child)}function ld(t,e,n,l,a){if(t===null){var i=n.type;return typeof i=="function"&&!Rc(i)&&i.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=i,ad(t,e,i,l,a)):(t=Mu(n.type,null,l,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!gr(t,a)){var f=i.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(f,l)&&t.ref===e.ref)return nn(t,e,a)}return e.flags|=1,t=$e(i,l),t.ref=e.ref,t.return=e,e.child=t}function ad(t,e,n,l,a){if(t!==null){var i=t.memoizedProps;if(ma(i,l)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=l=i,gr(t,a))(t.flags&131072)!==0&&(Qt=!0);else return e.lanes=t.lanes,nn(t,e,a)}return or(t,e,n,l,a)}function ud(t,e,n){var l=e.pendingProps,a=l.children,i=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((e.flags&128)!==0){if(l=i!==null?i.baseLanes|n:n,t!==null){for(a=e.child=t.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;e.childLanes=i&~l}else e.childLanes=0,e.child=null;return id(t,e,l,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cu(e,i!==null?i.cachePool:null),i!==null?as(e,i):Qc(),Ks(e);else return e.lanes=e.childLanes=536870912,id(t,e,i!==null?i.baseLanes|n:n,n)}else i!==null?(Cu(e,i.cachePool),as(e,i),En(),e.memoizedState=null):(t!==null&&Cu(e,null),Qc(),En());return Jt(t,e,a,n),e.child}function id(t,e,n,l){var a=Hc();return a=a===null?null:{parent:Ht._currentValue,pool:a},e.memoizedState={baseLanes:n,cachePool:a},t!==null&&Cu(e,null),Qc(),Ks(e),t!==null&&ba(t,e,l,!0),null}function Fu(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function or(t,e,n,l,a){return Wn(e),n=Kc(t,e,n,l,void 0,a),l=Jc(),t!==null&&!Qt?(kc(t,e,a),nn(t,e,a)):(mt&&l&&Mc(e),e.flags|=1,Jt(t,e,n,a),e.child)}function cd(t,e,n,l,a,i){return Wn(e),e.updateQueue=null,n=is(e,l,n,a),us(t),l=Jc(),t!==null&&!Qt?(kc(t,e,i),nn(t,e,i)):(mt&&l&&Mc(e),e.flags|=1,Jt(t,e,n,i),e.child)}function rd(t,e,n,l,a){if(Wn(e),e.stateNode===null){var i=El,f=n.contextType;typeof f=="object"&&f!==null&&(i=Pt(f)),i=new n(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=rr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},Yc(e),f=n.contextType,i.context=typeof f=="object"&&f!==null?Pt(f):El,i.state=e.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(cr(e,n,f,l),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(f=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),f!==i.state&&rr.enqueueReplaceState(i,i.state,null),Ra(e,l,i,a),Ta(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,p=In(n,s);i.props=p;var E=i.context,_=n.contextType;f=El,typeof _=="object"&&_!==null&&(f=Pt(_));var U=n.getDerivedStateFromProps;_=typeof U=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||E!==f)&&ks(e,i,l,f),gn=!1;var A=e.memoizedState;i.state=A,Ra(e,l,i,a),Ta(),E=e.memoizedState,s||A!==E||gn?(typeof U=="function"&&(cr(e,n,U,l),E=e.memoizedState),(p=gn||Js(e,n,p,l,A,E,f))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=E),i.props=l,i.state=E,i.context=f,l=p):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,Gc(t,e),f=e.memoizedProps,_=In(n,f),i.props=_,U=e.pendingProps,A=i.context,E=n.contextType,p=El,typeof E=="object"&&E!==null&&(p=Pt(E)),s=n.getDerivedStateFromProps,(E=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f!==U||A!==p)&&ks(e,i,l,p),gn=!1,A=e.memoizedState,i.state=A,Ra(e,l,i,a),Ta();var R=e.memoizedState;f!==U||A!==R||gn||t!==null&&t.dependencies!==null&&wu(t.dependencies)?(typeof s=="function"&&(cr(e,n,s,l),R=e.memoizedState),(_=gn||Js(e,n,_,l,A,R,p)||t!==null&&t.dependencies!==null&&wu(t.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,R,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,R,p)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||f===t.memoizedProps&&A===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&A===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=R),i.props=l,i.state=R,i.context=p,l=_):(typeof i.componentDidUpdate!="function"||f===t.memoizedProps&&A===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&A===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,Fu(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=wl(e,t.child,null,a),e.child=wl(e,null,n,a)):Jt(t,e,n,a),e.memoizedState=i.state,t=e.child):t=nn(t,e,a),t}function fd(t,e,n,l){return ga(),e.flags|=256,Jt(t,e,n,l),e.child}var sr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dr(t){return{baseLanes:t,cachePool:Wo()}}function hr(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Oe),t}function od(t,e,n){var l=e.pendingProps,a=!1,i=(e.flags&128)!==0,f;if((f=i)||(f=t!==null&&t.memoizedState===null?!1:(Bt.current&2)!==0),f&&(a=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,t===null){if(mt){if(a?xn(e):En(),mt){var s=Dt,p;if(p=s){t:{for(p=s,s=je;p.nodeType!==8;){if(!s){s=null;break t}if(p=we(p.nextSibling),p===null){s=null;break t}}s=p}s!==null?(e.memoizedState={dehydrated:s,treeContext:Vn!==null?{id:We,overflow:Fe}:null,retryLane:536870912,hydrationErrors:null},p=de(18,null,null,0),p.stateNode=s,p.return=e,e.child=p,ee=e,Dt=null,p=!0):p=!1}p||kn(e)}if(s=e.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return Wr(s)?e.lanes=32:e.lanes=536870912,null;en(e)}return s=l.children,l=l.fallback,a?(En(),a=e.mode,s=Pu({mode:"hidden",children:s},a),l=Zn(l,a,n,null),s.return=e,l.return=e,s.sibling=l,e.child=s,a=e.child,a.memoizedState=dr(n),a.childLanes=hr(t,f,n),e.memoizedState=sr,l):(xn(e),mr(e,s))}if(p=t.memoizedState,p!==null&&(s=p.dehydrated,s!==null)){if(i)e.flags&256?(xn(e),e.flags&=-257,e=pr(t,e,n)):e.memoizedState!==null?(En(),e.child=t.child,e.flags|=128,e=null):(En(),a=l.fallback,s=e.mode,l=Pu({mode:"visible",children:l.children},s),a=Zn(a,s,n,null),a.flags|=2,l.return=e,a.return=e,l.sibling=a,e.child=l,wl(e,t.child,null,n),l=e.child,l.memoizedState=dr(n),l.childLanes=hr(t,f,n),e.memoizedState=sr,e=a);else if(xn(e),Wr(s)){if(f=s.nextSibling&&s.nextSibling.dataset,f)var E=f.dgst;f=E,l=Error(r(419)),l.stack="",l.digest=f,va({value:l,source:null,stack:null}),e=pr(t,e,n)}else if(Qt||ba(t,e,n,!1),f=(n&t.childLanes)!==0,Qt||f){if(f=At,f!==null&&(l=n&-n,l=(l&42)!==0?1:Fi(l),l=(l&(f.suspendedLanes|n))!==0?0:l,l!==0&&l!==p.retryLane))throw p.retryLane=l,xl(t,l),ge(f,t,l),ed;s.data==="$?"||Ur(),e=pr(t,e,n)}else s.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=p.treeContext,Dt=we(s.nextSibling),ee=e,mt=!0,Jn=null,je=!1,t!==null&&(Ae[Te++]=We,Ae[Te++]=Fe,Ae[Te++]=Vn,We=t.id,Fe=t.overflow,Vn=e),e=mr(e,l.children),e.flags|=4096);return e}return a?(En(),a=l.fallback,s=e.mode,p=t.child,E=p.sibling,l=$e(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,E!==null?a=$e(E,a):(a=Zn(a,s,n,null),a.flags|=2),a.return=e,l.return=e,l.sibling=a,e.child=l,l=a,a=e.child,s=t.child.memoizedState,s===null?s=dr(n):(p=s.cachePool,p!==null?(E=Ht._currentValue,p=p.parent!==E?{parent:E,pool:E}:p):p=Wo(),s={baseLanes:s.baseLanes|n,cachePool:p}),a.memoizedState=s,a.childLanes=hr(t,f,n),e.memoizedState=sr,l):(xn(e),n=t.child,t=n.sibling,n=$e(n,{mode:"visible",children:l.children}),n.return=e,n.sibling=null,t!==null&&(f=e.deletions,f===null?(e.deletions=[t],e.flags|=16):f.push(t)),e.child=n,e.memoizedState=null,n)}function mr(t,e){return e=Pu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Pu(t,e){return t=de(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function pr(t,e,n){return wl(e,t.child,null,n),t=mr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sd(t,e,n){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Uc(t.return,e,n)}function yr(t,e,n,l,a){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=n,i.tailMode=a)}function dd(t,e,n){var l=e.pendingProps,a=l.revealOrder,i=l.tail;if(Jt(t,e,l.children,n),l=Bt.current,(l&2)!==0)l=l&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sd(t,n,e);else if(t.tag===19)sd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(X(Bt,l),a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&ku(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),yr(e,!1,a,n,i);break;case"backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&ku(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}yr(e,!0,n,null,i);break;case"together":yr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),On|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(ba(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,n=$e(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$e(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&wu(t)))}function bp(t,e,n){switch(e.tag){case 3:pt(e,e.stateNode.containerInfo),yn(e,Ht,t.memoizedState.cache),ga();break;case 27:case 5:Bn(e);break;case 4:pt(e,e.stateNode.containerInfo);break;case 10:yn(e,e.type,e.memoizedProps.value);break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(xn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?od(t,e,n):(xn(e),t=nn(t,e,n),t!==null?t.sibling:null);xn(e);break;case 19:var a=(t.flags&128)!==0;if(l=(n&e.childLanes)!==0,l||(ba(t,e,n,!1),l=(n&e.childLanes)!==0),a){if(l)return dd(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),X(Bt,Bt.current),l)break;return null;case 22:case 23:return e.lanes=0,ud(t,e,n);case 24:yn(e,Ht,t.memoizedState.cache)}return nn(t,e,n)}function hd(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Qt=!0;else{if(!gr(t,n)&&(e.flags&128)===0)return Qt=!1,bp(t,e,n);Qt=(t.flags&131072)!==0}else Qt=!1,mt&&(e.flags&1048576)!==0&&Qo(e,Nu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var l=e.elementType,a=l._init;if(l=a(l._payload),e.type=l,typeof l=="function")Rc(l)?(t=In(l,t),e.tag=1,e=rd(null,e,l,t,n)):(e.tag=0,e=or(null,e,l,t,n));else{if(l!=null){if(a=l.$$typeof,a===nt){e.tag=11,e=nd(null,e,l,t,n);break t}else if(a===$){e.tag=14,e=ld(null,e,l,t,n);break t}}throw e=Ve(l)||l,Error(r(306,e,""))}}return e;case 0:return or(t,e,e.type,e.pendingProps,n);case 1:return l=e.type,a=In(l,e.pendingProps),rd(t,e,l,a,n);case 3:t:{if(pt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));l=e.pendingProps;var i=e.memoizedState;a=i.element,Gc(t,e),Ra(e,l,null,n);var f=e.memoizedState;if(l=f.cache,yn(e,Ht,l),l!==i.cache&&Cc(e,[Ht],n,!0),Ta(),l=f.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=fd(t,e,l,n);break t}else if(l!==a){a=Ee(Error(r(424)),e),va(a),e=fd(t,e,l,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Dt=we(t.firstChild),ee=e,mt=!0,Jn=null,je=!0,n=Vs(e,null,l,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ga(),l===a){e=nn(t,e,n);break t}Jt(t,e,l,n)}e=e.child}return e;case 26:return Fu(t,e),t===null?(n=gh(e.type,null,e.pendingProps,null))?e.memoizedState=n:mt||(n=e.type,t=e.pendingProps,l=di(I.current).createElement(n),l[Ft]=e,l[le]=t,$t(l,n,t),Xt(l),e.stateNode=l):e.memoizedState=gh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Bn(e),t===null&&mt&&(l=e.stateNode=mh(e.type,e.pendingProps,I.current),ee=e,je=!0,a=Dt,Nn(e.type)?(Fr=a,Dt=we(l.firstChild)):Dt=a),Jt(t,e,e.pendingProps.children,n),Fu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&mt&&((a=l=Dt)&&(l=Jp(l,e.type,e.pendingProps,je),l!==null?(e.stateNode=l,ee=e,Dt=we(l.firstChild),je=!1,a=!0):a=!1),a||kn(e)),Bn(e),a=e.type,i=e.pendingProps,f=t!==null?t.memoizedProps:null,l=i.children,Jr(a,i)?l=null:f!==null&&Jr(a,f)&&(e.flags|=32),e.memoizedState!==null&&(a=Kc(t,e,sp,null,null,n),ka._currentValue=a),Fu(t,e),Jt(t,e,l,n),e.child;case 6:return t===null&&mt&&((t=n=Dt)&&(n=kp(n,e.pendingProps,je),n!==null?(e.stateNode=n,ee=e,Dt=null,t=!0):t=!1),t||kn(e)),null;case 13:return od(t,e,n);case 4:return pt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=wl(e,null,l,n):Jt(t,e,l,n),e.child;case 11:return nd(t,e,e.type,e.pendingProps,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:return l=e.pendingProps,yn(e,e.type,l.value),Jt(t,e,l.children,n),e.child;case 9:return a=e.type._context,l=e.pendingProps.children,Wn(e),a=Pt(a),l=l(a),e.flags|=1,Jt(t,e,l,n),e.child;case 14:return ld(t,e,e.type,e.pendingProps,n);case 15:return ad(t,e,e.type,e.pendingProps,n);case 19:return dd(t,e,n);case 31:return l=e.pendingProps,n=e.mode,l={mode:l.mode,children:l.children},t===null?(n=Pu(l,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=$e(t.child,l),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return ud(t,e,n);case 24:return Wn(e),l=Pt(Ht),t===null?(a=Hc(),a===null&&(a=At,i=jc(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),e.memoizedState={parent:l,cache:a},Yc(e),yn(e,Ht,a)):((t.lanes&n)!==0&&(Gc(t,e),Ra(e,null,null,n),Ta()),a=t.memoizedState,i=e.memoizedState,a.parent!==l?(a={parent:l,cache:l},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),yn(e,Ht,l)):(l=i.cache,yn(e,Ht,l),l!==a.cache&&Cc(e,[Ht],n,!0))),Jt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function ln(t){t.flags|=4}function md(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Eh(e)){if(e=Re.current,e!==null&&((dt&4194048)===dt?qe!==null:(dt&62914560)!==dt&&(dt&536870912)===0||e!==qe))throw za=Bc,Fo;t.flags|=8192}}function Iu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Vf():536870912,t.lanes|=e,ql|=e)}function Ua(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,l=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=l,t.childLanes=n,e}function Sp(t,e,n){var l=e.pendingProps;switch(Dc(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return _t(e),null;case 3:return n=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ie(Ht),Wt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ya(e)?ln(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ko())),_t(e),null;case 26:return n=e.memoizedState,t===null?(ln(e),n!==null?(_t(e),md(e,n)):(_t(e),e.flags&=-16777217)):n?n!==t.memoizedState?(ln(e),_t(e),md(e,n)):(_t(e),e.flags&=-16777217):(t.memoizedProps!==l&&ln(e),_t(e),e.flags&=-16777217),null;case 27:Ke(e),n=I.current;var a=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ln(e);else{if(!l){if(e.stateNode===null)throw Error(r(166));return _t(e),null}t=W.current,ya(e)?Zo(e):(t=mh(a,l,n),e.stateNode=t,ln(e))}return _t(e),null;case 5:if(Ke(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ln(e);else{if(!l){if(e.stateNode===null)throw Error(r(166));return _t(e),null}if(t=W.current,ya(e))Zo(e);else{switch(a=di(I.current),t){case 1:t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?a.createElement("select",{is:l.is}):a.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?a.createElement(n,{is:l.is}):a.createElement(n)}}t[Ft]=e,t[le]=l;t:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=t;t:switch($t(t,n,l),n){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ln(e)}}return _t(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&ln(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(r(166));if(t=I.current,ya(e)){if(t=e.stateNode,n=e.memoizedProps,l=null,a=ee,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}t[Ft]=e,t=!!(t.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||ch(t.nodeValue,n)),t||kn(e)}else t=di(t).createTextNode(l),t[Ft]=e,e.stateNode=t}return _t(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=ya(e),l!==null&&l.dehydrated!==null){if(t===null){if(!a)throw Error(r(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(r(317));a[Ft]=e}else ga(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;_t(e),a=!1}else a=Ko(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(en(e),e):(en(e),null)}if(en(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=l!==null,t=t!==null&&t.memoizedState!==null,n){l=e.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Iu(e,e.updateQueue),_t(e),null;case 4:return Wt(),t===null&&Xr(e.stateNode.containerInfo),_t(e),null;case 10:return Ie(e.type),_t(e),null;case 19:if(Y(Bt),a=e.memoizedState,a===null)return _t(e),null;if(l=(e.flags&128)!==0,i=a.rendering,i===null)if(l)Ua(a,!1);else{if(Nt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=ku(t),i!==null){for(e.flags|=128,Ua(a,!1),t=i.updateQueue,e.updateQueue=t,Iu(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Xo(n,t),n=n.sibling;return X(Bt,Bt.current&1|2),e.child}t=t.sibling}a.tail!==null&&Ce()>ni&&(e.flags|=128,l=!0,Ua(a,!1),e.lanes=4194304)}else{if(!l)if(t=ku(i),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,Iu(e,t),Ua(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!mt)return _t(e),null}else 2*Ce()-a.renderingStartTime>ni&&n!==536870912&&(e.flags|=128,l=!0,Ua(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Ce(),e.sibling=null,t=Bt.current,X(Bt,l?t&1|2:t&1),e):(_t(e),null);case 22:case 23:return en(e),Zc(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(n&536870912)!==0&&(e.flags&128)===0&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),n=e.updateQueue,n!==null&&Iu(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==n&&(e.flags|=2048),t!==null&&Y(Fn),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Ie(Ht),_t(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function xp(t,e){switch(Dc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ie(Ht),Wt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ke(e),null;case 13:if(en(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));ga()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(Bt),null;case 4:return Wt(),null;case 10:return Ie(e.type),null;case 22:case 23:return en(e),Zc(),t!==null&&Y(Fn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ie(Ht),null;case 25:return null;default:return null}}function pd(t,e){switch(Dc(e),e.tag){case 3:Ie(Ht),Wt();break;case 26:case 27:case 5:Ke(e);break;case 4:Wt();break;case 13:en(e);break;case 19:Y(Bt);break;case 10:Ie(e.type);break;case 22:case 23:en(e),Zc(),t!==null&&Y(Fn);break;case 24:Ie(Ht)}}function Ca(t,e){try{var n=e.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&t)===t){l=void 0;var i=n.create,f=n.inst;l=i(),f.destroy=l}n=n.next}while(n!==a)}}catch(s){zt(e,e.return,s)}}function zn(t,e,n){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&t)===t){var f=l.inst,s=f.destroy;if(s!==void 0){f.destroy=void 0,a=e;var p=n,E=s;try{E()}catch(_){zt(a,p,_)}}}l=l.next}while(l!==i)}}catch(_){zt(e,e.return,_)}}function yd(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{ls(e,n)}catch(l){zt(t,t.return,l)}}}function gd(t,e,n){n.props=In(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(l){zt(t,e,l)}}function ja(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof n=="function"?t.refCleanup=n(l):n.current=l}}catch(a){zt(t,e,a)}}function He(t,e){var n=t.ref,l=t.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){zt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){zt(t,e,a)}else n.current=null}function vd(t){var e=t.type,n=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break t;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){zt(t,t.return,a)}}function vr(t,e,n){try{var l=t.stateNode;Xp(l,t.type,n,e),l[le]=e}catch(a){zt(t,t.return,a)}}function bd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Nn(t.type)||t.tag===4}function br(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||bd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Nn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sr(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=si));else if(l!==4&&(l===27&&Nn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Sr(t,e,n),t=t.sibling;t!==null;)Sr(t,e,n),t=t.sibling}function ti(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(l!==4&&(l===27&&Nn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(ti(t,e,n),t=t.sibling;t!==null;)ti(t,e,n),t=t.sibling}function Sd(t){var e=t.stateNode,n=t.memoizedProps;try{for(var l=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);$t(e,l,n),e[Ft]=t,e[le]=n}catch(i){zt(t,t.return,i)}}var an=!1,Ut=!1,xr=!1,xd=typeof WeakSet=="function"?WeakSet:Set,Zt=null;function Ep(t,e){if(t=t.containerInfo,Vr=vi,t=wo(t),bc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break t}var f=0,s=-1,p=-1,E=0,_=0,U=t,A=null;e:for(;;){for(var R;U!==n||a!==0&&U.nodeType!==3||(s=f+a),U!==i||l!==0&&U.nodeType!==3||(p=f+l),U.nodeType===3&&(f+=U.nodeValue.length),(R=U.firstChild)!==null;)A=U,U=R;for(;;){if(U===t)break e;if(A===n&&++E===a&&(s=f),A===i&&++_===l&&(p=f),(R=U.nextSibling)!==null)break;U=A,A=U.parentNode}U=R}n=s===-1||p===-1?null:{start:s,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kr={focusedElem:t,selectionRange:n},vi=!1,Zt=e;Zt!==null;)if(e=Zt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Zt=t;else for(;Zt!==null;){switch(e=Zt,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,n=e,a=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var et=In(n.type,a,n.elementType===n.type);t=l.getSnapshotBeforeUpdate(et,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(P){zt(n,n.return,P)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)$r(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":$r(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,Zt=t;break}Zt=e.return}}function Ed(t,e,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:An(t,n),l&4&&Ca(5,n);break;case 1:if(An(t,n),l&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(f){zt(n,n.return,f)}else{var a=In(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(f){zt(n,n.return,f)}}l&64&&yd(n),l&512&&ja(n,n.return);break;case 3:if(An(t,n),l&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{ls(t,e)}catch(f){zt(n,n.return,f)}}break;case 27:e===null&&l&4&&Sd(n);case 26:case 5:An(t,n),e===null&&l&4&&vd(n),l&512&&ja(n,n.return);break;case 12:An(t,n);break;case 13:An(t,n),l&4&&Td(t,n),l&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Np.bind(null,n),$p(t,n))));break;case 22:if(l=n.memoizedState!==null||an,!l){e=e!==null&&e.memoizedState!==null||Ut,a=an;var i=Ut;an=l,(Ut=e)&&!i?Tn(t,n,(n.subtreeFlags&8772)!==0):An(t,n),an=a,Ut=i}break;case 30:break;default:An(t,n)}}function zd(t){var e=t.alternate;e!==null&&(t.alternate=null,zd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&tc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ot=null,ie=!1;function un(t,e,n){for(n=n.child;n!==null;)Ad(t,e,n),n=n.sibling}function Ad(t,e,n){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(na,n)}catch{}switch(n.tag){case 26:Ut||He(n,e),un(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ut||He(n,e);var l=Ot,a=ie;Nn(n.type)&&(Ot=n.stateNode,ie=!1),un(t,e,n),Za(n.stateNode),Ot=l,ie=a;break;case 5:Ut||He(n,e);case 6:if(l=Ot,a=ie,Ot=null,un(t,e,n),Ot=l,ie=a,Ot!==null)if(ie)try{(Ot.nodeType===9?Ot.body:Ot.nodeName==="HTML"?Ot.ownerDocument.body:Ot).removeChild(n.stateNode)}catch(i){zt(n,e,i)}else try{Ot.removeChild(n.stateNode)}catch(i){zt(n,e,i)}break;case 18:Ot!==null&&(ie?(t=Ot,dh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Pa(t)):dh(Ot,n.stateNode));break;case 4:l=Ot,a=ie,Ot=n.stateNode.containerInfo,ie=!0,un(t,e,n),Ot=l,ie=a;break;case 0:case 11:case 14:case 15:Ut||zn(2,n,e),Ut||zn(4,n,e),un(t,e,n);break;case 1:Ut||(He(n,e),l=n.stateNode,typeof l.componentWillUnmount=="function"&&gd(n,e,l)),un(t,e,n);break;case 21:un(t,e,n);break;case 22:Ut=(l=Ut)||n.memoizedState!==null,un(t,e,n),Ut=l;break;default:un(t,e,n)}}function Td(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Pa(t)}catch(n){zt(e,e.return,n)}}function zp(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new xd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new xd),e;default:throw Error(r(435,t.tag))}}function Er(t,e){var n=zp(t);e.forEach(function(l){var a=wp.bind(null,t,l);n.has(l)||(n.add(l),l.then(a,a))})}function he(t,e){var n=e.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],i=t,f=e,s=f;t:for(;s!==null;){switch(s.tag){case 27:if(Nn(s.type)){Ot=s.stateNode,ie=!1;break t}break;case 5:Ot=s.stateNode,ie=!1;break t;case 3:case 4:Ot=s.stateNode.containerInfo,ie=!0;break t}s=s.return}if(Ot===null)throw Error(r(160));Ad(i,f,a),Ot=null,ie=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Rd(e,t),e=e.sibling}var Ne=null;function Rd(t,e){var n=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:he(e,t),me(t),l&4&&(zn(3,t,t.return),Ca(3,t),zn(5,t,t.return));break;case 1:he(e,t),me(t),l&512&&(Ut||n===null||He(n,n.return)),l&64&&an&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=Ne;if(he(e,t),me(t),l&512&&(Ut||n===null||He(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=t.memoizedState,n===null)if(l===null)if(t.stateNode===null){t:{l=t.type,n=t.memoizedProps,a=a.ownerDocument||a;e:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[ua]||i[Ft]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),$t(i,l,n),i[Ft]=t,Xt(i),l=i;break t;case"link":var f=Sh("link","href",a).get(l+(n.href||""));if(f){for(var s=0;s<f.length;s++)if(i=f[s],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(s,1);break e}}i=a.createElement(l),$t(i,l,n),a.head.appendChild(i);break;case"meta":if(f=Sh("meta","content",a).get(l+(n.content||""))){for(s=0;s<f.length;s++)if(i=f[s],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(s,1);break e}}i=a.createElement(l),$t(i,l,n),a.head.appendChild(i);break;default:throw Error(r(468,l))}i[Ft]=t,Xt(i),l=i}t.stateNode=l}else xh(a,t.type,t.stateNode);else t.stateNode=bh(a,l,t.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?xh(a,t.type,t.stateNode):bh(a,l,t.memoizedProps)):l===null&&t.stateNode!==null&&vr(t,t.memoizedProps,n.memoizedProps)}break;case 27:he(e,t),me(t),l&512&&(Ut||n===null||He(n,n.return)),n!==null&&l&4&&vr(t,t.memoizedProps,n.memoizedProps);break;case 5:if(he(e,t),me(t),l&512&&(Ut||n===null||He(n,n.return)),t.flags&32){a=t.stateNode;try{ml(a,"")}catch(R){zt(t,t.return,R)}}l&4&&t.stateNode!=null&&(a=t.memoizedProps,vr(t,a,n!==null?n.memoizedProps:a)),l&1024&&(xr=!0);break;case 6:if(he(e,t),me(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,n=t.stateNode;try{n.nodeValue=l}catch(R){zt(t,t.return,R)}}break;case 3:if(pi=null,a=Ne,Ne=hi(e.containerInfo),he(e,t),Ne=a,me(t),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(e.containerInfo)}catch(R){zt(t,t.return,R)}xr&&(xr=!1,Od(t));break;case 4:l=Ne,Ne=hi(t.stateNode.containerInfo),he(e,t),me(t),Ne=l;break;case 12:he(e,t),me(t);break;case 13:he(e,t),me(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(_r=Ce()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Er(t,l)));break;case 22:a=t.memoizedState!==null;var p=n!==null&&n.memoizedState!==null,E=an,_=Ut;if(an=E||a,Ut=_||p,he(e,t),Ut=_,an=E,me(t),l&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||p||an||Ut||tl(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){p=n=e;try{if(i=p.stateNode,a)f=i.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{s=p.stateNode;var U=p.memoizedProps.style,A=U!=null&&U.hasOwnProperty("display")?U.display:null;s.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(R){zt(p,p.return,R)}}}else if(e.tag===6){if(n===null){p=e;try{p.stateNode.nodeValue=a?"":p.memoizedProps}catch(R){zt(p,p.return,R)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Er(t,n))));break;case 19:he(e,t),me(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Er(t,l)));break;case 30:break;case 21:break;default:he(e,t),me(t)}}function me(t){var e=t.flags;if(e&2){try{for(var n,l=t.return;l!==null;){if(bd(l)){n=l;break}l=l.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var a=n.stateNode,i=br(t);ti(t,i,a);break;case 5:var f=n.stateNode;n.flags&32&&(ml(f,""),n.flags&=-33);var s=br(t);ti(t,s,f);break;case 3:case 4:var p=n.stateNode.containerInfo,E=br(t);Sr(t,E,p);break;default:throw Error(r(161))}}catch(_){zt(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Od(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Od(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function An(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Ed(t,e.alternate,e),e=e.sibling}function tl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:zn(4,e,e.return),tl(e);break;case 1:He(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&gd(e,e.return,n),tl(e);break;case 27:Za(e.stateNode);case 26:case 5:He(e,e.return),tl(e);break;case 22:e.memoizedState===null&&tl(e);break;case 30:tl(e);break;default:tl(e)}t=t.sibling}}function Tn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,a=t,i=e,f=i.flags;switch(i.tag){case 0:case 11:case 15:Tn(a,i,n),Ca(4,i);break;case 1:if(Tn(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(E){zt(l,l.return,E)}if(l=i,a=l.updateQueue,a!==null){var s=l.stateNode;try{var p=a.shared.hiddenCallbacks;if(p!==null)for(a.shared.hiddenCallbacks=null,a=0;a<p.length;a++)ns(p[a],s)}catch(E){zt(l,l.return,E)}}n&&f&64&&yd(i),ja(i,i.return);break;case 27:Sd(i);case 26:case 5:Tn(a,i,n),n&&l===null&&f&4&&vd(i),ja(i,i.return);break;case 12:Tn(a,i,n);break;case 13:Tn(a,i,n),n&&f&4&&Td(a,i);break;case 22:i.memoizedState===null&&Tn(a,i,n),ja(i,i.return);break;case 30:break;default:Tn(a,i,n)}e=e.sibling}}function zr(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Sa(n))}function Ar(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Sa(t))}function Be(t,e,n,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_d(t,e,n,l),e=e.sibling}function _d(t,e,n,l){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Be(t,e,n,l),a&2048&&Ca(9,e);break;case 1:Be(t,e,n,l);break;case 3:Be(t,e,n,l),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Sa(t)));break;case 12:if(a&2048){Be(t,e,n,l),t=e.stateNode;try{var i=e.memoizedProps,f=i.id,s=i.onPostCommit;typeof s=="function"&&s(f,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(p){zt(e,e.return,p)}}else Be(t,e,n,l);break;case 13:Be(t,e,n,l);break;case 23:break;case 22:i=e.stateNode,f=e.alternate,e.memoizedState!==null?i._visibility&2?Be(t,e,n,l):qa(t,e):i._visibility&2?Be(t,e,n,l):(i._visibility|=2,Ul(t,e,n,l,(e.subtreeFlags&10256)!==0)),a&2048&&zr(f,e);break;case 24:Be(t,e,n,l),a&2048&&Ar(e.alternate,e);break;default:Be(t,e,n,l)}}function Ul(t,e,n,l,a){for(a=a&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,f=e,s=n,p=l,E=f.flags;switch(f.tag){case 0:case 11:case 15:Ul(i,f,s,p,a),Ca(8,f);break;case 23:break;case 22:var _=f.stateNode;f.memoizedState!==null?_._visibility&2?Ul(i,f,s,p,a):qa(i,f):(_._visibility|=2,Ul(i,f,s,p,a)),a&&E&2048&&zr(f.alternate,f);break;case 24:Ul(i,f,s,p,a),a&&E&2048&&Ar(f.alternate,f);break;default:Ul(i,f,s,p,a)}e=e.sibling}}function qa(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,l=e,a=l.flags;switch(l.tag){case 22:qa(n,l),a&2048&&zr(l.alternate,l);break;case 24:qa(n,l),a&2048&&Ar(l.alternate,l);break;default:qa(n,l)}e=e.sibling}}var Ha=8192;function Cl(t){if(t.subtreeFlags&Ha)for(t=t.child;t!==null;)Md(t),t=t.sibling}function Md(t){switch(t.tag){case 26:Cl(t),t.flags&Ha&&t.memoizedState!==null&&ry(Ne,t.memoizedState,t.memoizedProps);break;case 5:Cl(t);break;case 3:case 4:var e=Ne;Ne=hi(t.stateNode.containerInfo),Cl(t),Ne=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Ha,Ha=16777216,Cl(t),Ha=e):Cl(t));break;default:Cl(t)}}function Dd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ba(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];Zt=l,wd(l,t)}Dd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nd(t),t=t.sibling}function Nd(t){switch(t.tag){case 0:case 11:case 15:Ba(t),t.flags&2048&&zn(9,t,t.return);break;case 3:Ba(t);break;case 12:Ba(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ei(t)):Ba(t);break;default:Ba(t)}}function ei(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];Zt=l,wd(l,t)}Dd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:zn(8,e,e.return),ei(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,ei(e));break;default:ei(e)}t=t.sibling}}function wd(t,e){for(;Zt!==null;){var n=Zt;switch(n.tag){case 0:case 11:case 15:zn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Sa(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Zt=l;else t:for(n=t;Zt!==null;){l=Zt;var a=l.sibling,i=l.return;if(zd(l),l===n){Zt=null;break t}if(a!==null){a.return=i,Zt=a;break t}Zt=i}}}var Ap={getCacheForType:function(t){var e=Pt(Ht),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},Tp=typeof WeakMap=="function"?WeakMap:Map,gt=0,At=null,ot=null,dt=0,vt=0,pe=null,Rn=!1,jl=!1,Tr=!1,cn=0,Nt=0,On=0,el=0,Rr=0,Oe=0,ql=0,Ya=null,ce=null,Or=!1,_r=0,ni=1/0,li=null,_n=null,kt=0,Mn=null,Hl=null,Bl=0,Mr=0,Dr=null,Ud=null,Ga=0,Nr=null;function ye(){if((gt&2)!==0&&dt!==0)return dt&-dt;if(O.T!==null){var t=Tl;return t!==0?t:Br()}return kf()}function Cd(){Oe===0&&(Oe=(dt&536870912)===0||mt?Zf():536870912);var t=Re.current;return t!==null&&(t.flags|=32),Oe}function ge(t,e,n){(t===At&&(vt===2||vt===9)||t.cancelPendingCommit!==null)&&(Yl(t,0),Dn(t,dt,Oe,!1)),aa(t,n),((gt&2)===0||t!==At)&&(t===At&&((gt&2)===0&&(el|=n),Nt===4&&Dn(t,dt,Oe,!1)),Ye(t))}function jd(t,e,n){if((gt&6)!==0)throw Error(r(327));var l=!n&&(e&124)===0&&(e&t.expiredLanes)===0||la(t,e),a=l?_p(t,e):Cr(t,e,!0),i=l;do{if(a===0){jl&&!l&&Dn(t,e,0,!1);break}else{if(n=t.current.alternate,i&&!Rp(n)){a=Cr(t,e,!1),i=!1;continue}if(a===2){if(i=e,t.errorRecoveryDisabledLanes&i)var f=0;else f=t.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;t:{var s=t;a=Ya;var p=s.current.memoizedState.isDehydrated;if(p&&(Yl(s,f).flags|=256),f=Cr(s,f,!1),f!==2){if(Tr&&!p){s.errorRecoveryDisabledLanes|=i,el|=i,a=4;break t}i=ce,ce=a,i!==null&&(ce===null?ce=i:ce.push.apply(ce,i))}a=f}if(i=!1,a!==2)continue}}if(a===1){Yl(t,0),Dn(t,e,0,!0);break}t:{switch(l=t,i=a,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Dn(l,e,Oe,!Rn);break t;case 2:ce=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(a=_r+300-Ce(),10<a)){if(Dn(l,e,Oe,!Rn),mu(l,0,!0)!==0)break t;l.timeoutHandle=oh(qd.bind(null,l,n,ce,li,Or,e,Oe,el,ql,Rn,i,2,-0,0),a);break t}qd(l,n,ce,li,Or,e,Oe,el,ql,Rn,i,0,-0,0)}}break}while(!0);Ye(t)}function qd(t,e,n,l,a,i,f,s,p,E,_,U,A,R){if(t.timeoutHandle=-1,U=e.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(Ja={stylesheets:null,count:0,unsuspend:cy},Md(e),U=fy(),U!==null)){t.cancelPendingCommit=U(Qd.bind(null,t,e,i,n,l,a,f,s,p,_,1,A,R)),Dn(t,i,f,!E);return}Qd(t,e,i,n,l,a,f,s,p)}function Rp(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!se(i(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dn(t,e,n,l){e&=~Rr,e&=~el,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var a=e;0<a;){var i=31-oe(a),f=1<<i;l[i]=-1,a&=~f}n!==0&&Kf(t,n,e)}function ai(){return(gt&6)===0?(La(0),!1):!0}function wr(){if(ot!==null){if(vt===0)var t=ot.return;else t=ot,Pe=$n=null,$c(t),Nl=null,Na=0,t=ot;for(;t!==null;)pd(t.alternate,t),t=t.return;ot=null}}function Yl(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Zp(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),wr(),At=t,ot=n=$e(t.current,null),dt=e,vt=0,pe=null,Rn=!1,jl=la(t,e),Tr=!1,ql=Oe=Rr=el=On=Nt=0,ce=Ya=null,Or=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var a=31-oe(l),i=1<<a;e|=t[a],l&=~i}return cn=e,Ru(),n}function Hd(t,e){it=null,O.H=Vu,e===Ea||e===ju?(e=ts(),vt=3):e===Fo?(e=ts(),vt=4):vt=e===ed?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,pe=e,ot===null&&(Nt=1,Wu(t,Ee(e,t.current)))}function Bd(){var t=O.H;return O.H=Vu,t===null?Vu:t}function Yd(){var t=O.A;return O.A=Ap,t}function Ur(){Nt=4,Rn||(dt&4194048)!==dt&&Re.current!==null||(jl=!0),(On&134217727)===0&&(el&134217727)===0||At===null||Dn(At,dt,Oe,!1)}function Cr(t,e,n){var l=gt;gt|=2;var a=Bd(),i=Yd();(At!==t||dt!==e)&&(li=null,Yl(t,e)),e=!1;var f=Nt;t:do try{if(vt!==0&&ot!==null){var s=ot,p=pe;switch(vt){case 8:wr(),f=6;break t;case 3:case 2:case 9:case 6:Re.current===null&&(e=!0);var E=vt;if(vt=0,pe=null,Gl(t,s,p,E),n&&jl){f=0;break t}break;default:E=vt,vt=0,pe=null,Gl(t,s,p,E)}}Op(),f=Nt;break}catch(_){Hd(t,_)}while(!0);return e&&t.shellSuspendCounter++,Pe=$n=null,gt=l,O.H=a,O.A=i,ot===null&&(At=null,dt=0,Ru()),f}function Op(){for(;ot!==null;)Gd(ot)}function _p(t,e){var n=gt;gt|=2;var l=Bd(),a=Yd();At!==t||dt!==e?(li=null,ni=Ce()+500,Yl(t,e)):jl=la(t,e);t:do try{if(vt!==0&&ot!==null){e=ot;var i=pe;e:switch(vt){case 1:vt=0,pe=null,Gl(t,e,i,1);break;case 2:case 9:if(Po(i)){vt=0,pe=null,Ld(e);break}e=function(){vt!==2&&vt!==9||At!==t||(vt=7),Ye(t)},i.then(e,e);break t;case 3:vt=7;break t;case 4:vt=5;break t;case 7:Po(i)?(vt=0,pe=null,Ld(e)):(vt=0,pe=null,Gl(t,e,i,7));break;case 5:var f=null;switch(ot.tag){case 26:f=ot.memoizedState;case 5:case 27:var s=ot;if(!f||Eh(f)){vt=0,pe=null;var p=s.sibling;if(p!==null)ot=p;else{var E=s.return;E!==null?(ot=E,ui(E)):ot=null}break e}}vt=0,pe=null,Gl(t,e,i,5);break;case 6:vt=0,pe=null,Gl(t,e,i,6);break;case 8:wr(),Nt=6;break t;default:throw Error(r(462))}}Mp();break}catch(_){Hd(t,_)}while(!0);return Pe=$n=null,O.H=l,O.A=a,gt=n,ot!==null?0:(At=null,dt=0,Ru(),Nt)}function Mp(){for(;ot!==null&&!Fm();)Gd(ot)}function Gd(t){var e=hd(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?ui(t):ot=e}function Ld(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=cd(n,e,e.pendingProps,e.type,void 0,dt);break;case 11:e=cd(n,e,e.pendingProps,e.type.render,e.ref,dt);break;case 5:$c(e);default:pd(n,e),e=ot=Xo(e,cn),e=hd(n,e,cn)}t.memoizedProps=t.pendingProps,e===null?ui(t):ot=e}function Gl(t,e,n,l){Pe=$n=null,$c(e),Nl=null,Na=0;var a=e.return;try{if(vp(t,a,e,n,dt)){Nt=1,Wu(t,Ee(n,t.current)),ot=null;return}}catch(i){if(a!==null)throw ot=a,i;Nt=1,Wu(t,Ee(n,t.current)),ot=null;return}e.flags&32768?(mt||l===1?t=!0:jl||(dt&536870912)!==0?t=!1:(Rn=t=!0,(l===2||l===9||l===3||l===6)&&(l=Re.current,l!==null&&l.tag===13&&(l.flags|=16384))),Xd(e,t)):ui(e)}function ui(t){var e=t;do{if((e.flags&32768)!==0){Xd(e,Rn);return}t=e.return;var n=Sp(e.alternate,e,cn);if(n!==null){ot=n;return}if(e=e.sibling,e!==null){ot=e;return}ot=e=t}while(e!==null);Nt===0&&(Nt=5)}function Xd(t,e){do{var n=xp(t.alternate,t);if(n!==null){n.flags&=32767,ot=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ot=t;return}ot=t=n}while(t!==null);Nt=6,ot=null}function Qd(t,e,n,l,a,i,f,s,p){t.cancelPendingCommit=null;do ii();while(kt!==0);if((gt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=Ac,c0(t,n,i,f,s,p),t===At&&(ot=At=null,dt=0),Hl=e,Mn=t,Bl=n,Mr=i,Dr=a,Ud=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Up(su,function(){return kd(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,a=L.p,L.p=2,f=gt,gt|=4;try{Ep(t,e,n)}finally{gt=f,L.p=a,O.T=l}}kt=1,Zd(),Vd(),Kd()}}function Zd(){if(kt===1){kt=0;var t=Mn,e=Hl,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=O.T,O.T=null;var l=L.p;L.p=2;var a=gt;gt|=4;try{Rd(e,t);var i=Kr,f=wo(t.containerInfo),s=i.focusedElem,p=i.selectionRange;if(f!==s&&s&&s.ownerDocument&&No(s.ownerDocument.documentElement,s)){if(p!==null&&bc(s)){var E=p.start,_=p.end;if(_===void 0&&(_=E),"selectionStart"in s)s.selectionStart=E,s.selectionEnd=Math.min(_,s.value.length);else{var U=s.ownerDocument||document,A=U&&U.defaultView||window;if(A.getSelection){var R=A.getSelection(),et=s.textContent.length,P=Math.min(p.start,et),xt=p.end===void 0?P:Math.min(p.end,et);!R.extend&&P>xt&&(f=xt,xt=P,P=f);var S=Do(s,P),b=Do(s,xt);if(S&&b&&(R.rangeCount!==1||R.anchorNode!==S.node||R.anchorOffset!==S.offset||R.focusNode!==b.node||R.focusOffset!==b.offset)){var x=U.createRange();x.setStart(S.node,S.offset),R.removeAllRanges(),P>xt?(R.addRange(x),R.extend(b.node,b.offset)):(x.setEnd(b.node,b.offset),R.addRange(x))}}}}for(U=[],R=s;R=R.parentNode;)R.nodeType===1&&U.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<U.length;s++){var M=U[s];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}vi=!!Vr,Kr=Vr=null}finally{gt=a,L.p=l,O.T=n}}t.current=e,kt=2}}function Vd(){if(kt===2){kt=0;var t=Mn,e=Hl,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var l=L.p;L.p=2;var a=gt;gt|=4;try{Ed(t,e.alternate,e)}finally{gt=a,L.p=l,O.T=n}}kt=3}}function Kd(){if(kt===4||kt===3){kt=0,Pm();var t=Mn,e=Hl,n=Bl,l=Ud;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?kt=5:(kt=0,Hl=Mn=null,Jd(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(_n=null),Pi(n),e=e.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(na,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=O.T,a=L.p,L.p=2,O.T=null;try{for(var i=t.onRecoverableError,f=0;f<l.length;f++){var s=l[f];i(s.value,{componentStack:s.stack})}}finally{O.T=e,L.p=a}}(Bl&3)!==0&&ii(),Ye(t),a=t.pendingLanes,(n&4194090)!==0&&(a&42)!==0?t===Nr?Ga++:(Ga=0,Nr=t):Ga=0,La(0)}}function Jd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Sa(e)))}function ii(t){return Zd(),Vd(),Kd(),kd()}function kd(){if(kt!==5)return!1;var t=Mn,e=Mr;Mr=0;var n=Pi(Bl),l=O.T,a=L.p;try{L.p=32>n?32:n,O.T=null,n=Dr,Dr=null;var i=Mn,f=Bl;if(kt=0,Hl=Mn=null,Bl=0,(gt&6)!==0)throw Error(r(331));var s=gt;if(gt|=4,Nd(i.current),_d(i,i.current,f,n),gt=s,La(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(na,i)}catch{}return!0}finally{L.p=a,O.T=l,Jd(t,e)}}function $d(t,e,n){e=Ee(n,e),e=fr(t.stateNode,e,2),t=bn(t,e,2),t!==null&&(aa(t,2),Ye(t))}function zt(t,e,n){if(t.tag===3)$d(t,t,n);else for(;e!==null;){if(e.tag===3){$d(e,t,n);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(_n===null||!_n.has(l))){t=Ee(n,t),n=Is(2),l=bn(e,n,2),l!==null&&(td(n,l,e,t),aa(l,2),Ye(l));break}}e=e.return}}function jr(t,e,n){var l=t.pingCache;if(l===null){l=t.pingCache=new Tp;var a=new Set;l.set(e,a)}else a=l.get(e),a===void 0&&(a=new Set,l.set(e,a));a.has(n)||(Tr=!0,a.add(n),t=Dp.bind(null,t,e,n),e.then(t,t))}function Dp(t,e,n){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,At===t&&(dt&n)===n&&(Nt===4||Nt===3&&(dt&62914560)===dt&&300>Ce()-_r?(gt&2)===0&&Yl(t,0):Rr|=n,ql===dt&&(ql=0)),Ye(t)}function Wd(t,e){e===0&&(e=Vf()),t=xl(t,e),t!==null&&(aa(t,e),Ye(t))}function Np(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wd(t,n)}function wp(t,e){var n=0;switch(t.tag){case 13:var l=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(e),Wd(t,n)}function Up(t,e){return ki(t,e)}var ci=null,Ll=null,qr=!1,ri=!1,Hr=!1,nl=0;function Ye(t){t!==Ll&&t.next===null&&(Ll===null?ci=Ll=t:Ll=Ll.next=t),ri=!0,qr||(qr=!0,jp())}function La(t,e){if(!Hr&&ri){Hr=!0;do for(var n=!1,l=ci;l!==null;){if(t!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var f=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-oe(42|t)+1)-1,i&=a&~(f&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,th(l,i))}else i=dt,i=mu(l,l===At?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||la(l,i)||(n=!0,th(l,i));l=l.next}while(n);Hr=!1}}function Cp(){Fd()}function Fd(){ri=qr=!1;var t=0;nl!==0&&(Qp()&&(t=nl),nl=0);for(var e=Ce(),n=null,l=ci;l!==null;){var a=l.next,i=Pd(l,e);i===0?(l.next=null,n===null?ci=a:n.next=a,a===null&&(Ll=n)):(n=l,(t!==0||(i&3)!==0)&&(ri=!0)),l=a}La(t)}function Pd(t,e){for(var n=t.suspendedLanes,l=t.pingedLanes,a=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var f=31-oe(i),s=1<<f,p=a[f];p===-1?((s&n)===0||(s&l)!==0)&&(a[f]=i0(s,e)):p<=e&&(t.expiredLanes|=s),i&=~s}if(e=At,n=dt,n=mu(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,n===0||t===e&&(vt===2||vt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&$i(l),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||la(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(l!==null&&$i(l),Pi(n)){case 2:case 8:n=Xf;break;case 32:n=su;break;case 268435456:n=Qf;break;default:n=su}return l=Id.bind(null,t),n=ki(n,l),t.callbackPriority=e,t.callbackNode=n,e}return l!==null&&l!==null&&$i(l),t.callbackPriority=2,t.callbackNode=null,2}function Id(t,e){if(kt!==0&&kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(ii()&&t.callbackNode!==n)return null;var l=dt;return l=mu(t,t===At?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(jd(t,l,e),Pd(t,Ce()),t.callbackNode!=null&&t.callbackNode===n?Id.bind(null,t):null)}function th(t,e){if(ii())return null;jd(t,e,!0)}function jp(){Vp(function(){(gt&6)!==0?ki(Lf,Cp):Fd()})}function Br(){return nl===0&&(nl=Zf()),nl}function eh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bu(""+t)}function nh(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function qp(t,e,n,l,a){if(e==="submit"&&n&&n.stateNode===a){var i=eh((a[le]||null).action),f=l.submitter;f&&(e=(e=f[le]||null)?eh(e.formAction):f.getAttribute("formAction"),e!==null&&(i=e,f=null));var s=new zu("action","action",null,l,a);t.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(nl!==0){var p=f?nh(a,f):new FormData(a);ar(n,{pending:!0,data:p,method:a.method,action:i},null,p)}}else typeof i=="function"&&(s.preventDefault(),p=f?nh(a,f):new FormData(a),ar(n,{pending:!0,data:p,method:a.method,action:i},i,p))},currentTarget:a}]})}}for(var Yr=0;Yr<zc.length;Yr++){var Gr=zc[Yr],Hp=Gr.toLowerCase(),Bp=Gr[0].toUpperCase()+Gr.slice(1);De(Hp,"on"+Bp)}De(jo,"onAnimationEnd"),De(qo,"onAnimationIteration"),De(Ho,"onAnimationStart"),De("dblclick","onDoubleClick"),De("focusin","onFocus"),De("focusout","onBlur"),De(ep,"onTransitionRun"),De(np,"onTransitionStart"),De(lp,"onTransitionCancel"),De(Bo,"onTransitionEnd"),sl("onMouseEnter",["mouseout","mouseover"]),sl("onMouseLeave",["mouseout","mouseover"]),sl("onPointerEnter",["pointerout","pointerover"]),sl("onPointerLeave",["pointerout","pointerover"]),Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xa));function lh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var l=t[n],a=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var f=l.length-1;0<=f;f--){var s=l[f],p=s.instance,E=s.currentTarget;if(s=s.listener,p!==i&&a.isPropagationStopped())break t;i=s,a.currentTarget=E;try{i(a)}catch(_){$u(_)}a.currentTarget=null,i=p}else for(f=0;f<l.length;f++){if(s=l[f],p=s.instance,E=s.currentTarget,s=s.listener,p!==i&&a.isPropagationStopped())break t;i=s,a.currentTarget=E;try{i(a)}catch(_){$u(_)}a.currentTarget=null,i=p}}}}function st(t,e){var n=e[Ii];n===void 0&&(n=e[Ii]=new Set);var l=t+"__bubble";n.has(l)||(ah(e,t,2,!1),n.add(l))}function Lr(t,e,n){var l=0;e&&(l|=4),ah(n,t,l,e)}var fi="_reactListening"+Math.random().toString(36).slice(2);function Xr(t){if(!t[fi]){t[fi]=!0,Wf.forEach(function(n){n!=="selectionchange"&&(Yp.has(n)||Lr(n,!1,t),Lr(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fi]||(e[fi]=!0,Lr("selectionchange",!1,e))}}function ah(t,e,n,l){switch(_h(e)){case 2:var a=dy;break;case 8:a=hy;break;default:a=nf}n=a.bind(null,e,n,t),a=void 0,!oc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),l?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Qr(t,e,n,l,a){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var f=l.tag;if(f===3||f===4){var s=l.stateNode.containerInfo;if(s===a)break;if(f===4)for(f=l.return;f!==null;){var p=f.tag;if((p===3||p===4)&&f.stateNode.containerInfo===a)return;f=f.return}for(;s!==null;){if(f=rl(s),f===null)return;if(p=f.tag,p===5||p===6||p===26||p===27){l=i=f;continue t}s=s.parentNode}}l=l.return}oo(function(){var E=i,_=rc(n),U=[];t:{var A=Yo.get(t);if(A!==void 0){var R=zu,et=t;switch(t){case"keypress":if(xu(n)===0)break t;case"keydown":case"keyup":R=U0;break;case"focusin":et="focus",R=mc;break;case"focusout":et="blur",R=mc;break;case"beforeblur":case"afterblur":R=mc;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=mo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=x0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=q0;break;case jo:case qo:case Ho:R=A0;break;case Bo:R=B0;break;case"scroll":case"scrollend":R=b0;break;case"wheel":R=G0;break;case"copy":case"cut":case"paste":R=R0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=yo;break;case"toggle":case"beforetoggle":R=X0}var P=(e&4)!==0,xt=!P&&(t==="scroll"||t==="scrollend"),S=P?A!==null?A+"Capture":null:A;P=[];for(var b=E,x;b!==null;){var M=b;if(x=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||x===null||S===null||(M=ca(b,S),M!=null&&P.push(Qa(b,M,x))),xt)break;b=b.return}0<P.length&&(A=new R(A,et,null,n,_),U.push({event:A,listeners:P}))}}if((e&7)===0){t:{if(A=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",A&&n!==cc&&(et=n.relatedTarget||n.fromElement)&&(rl(et)||et[cl]))break t;if((R||A)&&(A=_.window===_?_:(A=_.ownerDocument)?A.defaultView||A.parentWindow:window,R?(et=n.relatedTarget||n.toElement,R=E,et=et?rl(et):null,et!==null&&(xt=h(et),P=et.tag,et!==xt||P!==5&&P!==27&&P!==6)&&(et=null)):(R=null,et=E),R!==et)){if(P=mo,M="onMouseLeave",S="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(P=yo,M="onPointerLeave",S="onPointerEnter",b="pointer"),xt=R==null?A:ia(R),x=et==null?A:ia(et),A=new P(M,b+"leave",R,n,_),A.target=xt,A.relatedTarget=x,M=null,rl(_)===E&&(P=new P(S,b+"enter",et,n,_),P.target=x,P.relatedTarget=xt,M=P),xt=M,R&&et)e:{for(P=R,S=et,b=0,x=P;x;x=Xl(x))b++;for(x=0,M=S;M;M=Xl(M))x++;for(;0<b-x;)P=Xl(P),b--;for(;0<x-b;)S=Xl(S),x--;for(;b--;){if(P===S||S!==null&&P===S.alternate)break e;P=Xl(P),S=Xl(S)}P=null}else P=null;R!==null&&uh(U,A,R,P,!1),et!==null&&xt!==null&&uh(U,xt,et,P,!0)}}t:{if(A=E?ia(E):window,R=A.nodeName&&A.nodeName.toLowerCase(),R==="select"||R==="input"&&A.type==="file")var K=Ao;else if(Eo(A))if(To)K=P0;else{K=W0;var ct=$0}else R=A.nodeName,!R||R.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?E&&ic(E.elementType)&&(K=Ao):K=F0;if(K&&(K=K(t,E))){zo(U,K,n,_);break t}ct&&ct(t,A,E),t==="focusout"&&E&&A.type==="number"&&E.memoizedProps.value!=null&&uc(A,"number",A.value)}switch(ct=E?ia(E):window,t){case"focusin":(Eo(ct)||ct.contentEditable==="true")&&(vl=ct,Sc=E,pa=null);break;case"focusout":pa=Sc=vl=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Uo(U,n,_);break;case"selectionchange":if(tp)break;case"keydown":case"keyup":Uo(U,n,_)}var J;if(yc)t:{switch(t){case"compositionstart":var tt="onCompositionStart";break t;case"compositionend":tt="onCompositionEnd";break t;case"compositionupdate":tt="onCompositionUpdate";break t}tt=void 0}else gl?So(t,n)&&(tt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(tt="onCompositionStart");tt&&(go&&n.locale!=="ko"&&(gl||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&gl&&(J=so()):(pn=_,sc="value"in pn?pn.value:pn.textContent,gl=!0)),ct=oi(E,tt),0<ct.length&&(tt=new po(tt,t,null,n,_),U.push({event:tt,listeners:ct}),J?tt.data=J:(J=xo(n),J!==null&&(tt.data=J)))),(J=Z0?V0(t,n):K0(t,n))&&(tt=oi(E,"onBeforeInput"),0<tt.length&&(ct=new po("onBeforeInput","beforeinput",null,n,_),U.push({event:ct,listeners:tt}),ct.data=J)),qp(U,t,E,n,_)}lh(U,e)})}function Qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oi(t,e){for(var n=e+"Capture",l=[];t!==null;){var a=t,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=ca(t,n),a!=null&&l.unshift(Qa(t,a,i)),a=ca(t,e),a!=null&&l.push(Qa(t,a,i))),t.tag===3)return l;t=t.return}return[]}function Xl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function uh(t,e,n,l,a){for(var i=e._reactName,f=[];n!==null&&n!==l;){var s=n,p=s.alternate,E=s.stateNode;if(s=s.tag,p!==null&&p===l)break;s!==5&&s!==26&&s!==27||E===null||(p=E,a?(E=ca(n,i),E!=null&&f.unshift(Qa(n,E,p))):a||(E=ca(n,i),E!=null&&f.push(Qa(n,E,p)))),n=n.return}f.length!==0&&t.push({event:e,listeners:f})}var Gp=/\r\n?/g,Lp=/\u0000|\uFFFD/g;function ih(t){return(typeof t=="string"?t:""+t).replace(Gp,`
`).replace(Lp,"")}function ch(t,e){return e=ih(e),ih(t)===e}function si(){}function St(t,e,n,l,a,i){switch(n){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||ml(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&ml(t,""+l);break;case"className":yu(t,"class",l);break;case"tabIndex":yu(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":yu(t,n,l);break;case"style":ro(t,l,i);break;case"data":if(e!=="object"){yu(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=bu(""+l),t.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(e!=="input"&&St(t,e,"name",a.name,a,null),St(t,e,"formEncType",a.formEncType,a,null),St(t,e,"formMethod",a.formMethod,a,null),St(t,e,"formTarget",a.formTarget,a,null)):(St(t,e,"encType",a.encType,a,null),St(t,e,"method",a.method,a,null),St(t,e,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=bu(""+l),t.setAttribute(n,l);break;case"onClick":l!=null&&(t.onclick=si);break;case"onScroll":l!=null&&st("scroll",t);break;case"onScrollEnd":l!=null&&st("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}n=bu(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""+l):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":l===!0?t.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,l):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(n,l):t.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(n):t.setAttribute(n,l);break;case"popover":st("beforetoggle",t),st("toggle",t),pu(t,"popover",l);break;case"xlinkActuate":Je(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Je(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Je(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Je(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Je(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Je(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Je(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":pu(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=g0.get(n)||n,pu(t,n,l))}}function Zr(t,e,n,l,a,i){switch(n){case"style":ro(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"children":typeof l=="string"?ml(t,l):(typeof l=="number"||typeof l=="bigint")&&ml(t,""+l);break;case"onScroll":l!=null&&st("scroll",t);break;case"onScrollEnd":l!=null&&st("scrollend",t);break;case"onClick":l!=null&&(t.onclick=si);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ff.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),i=t[le]||null,i=i!=null?i[n]:null,typeof i=="function"&&t.removeEventListener(e,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,l,a);break t}n in t?t[n]=l:l===!0?t.setAttribute(n,""):pu(t,n,l)}}}function $t(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":st("error",t),st("load",t);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:St(t,e,i,f,n,null)}}a&&St(t,e,"srcSet",n.srcSet,n,null),l&&St(t,e,"src",n.src,n,null);return;case"input":st("invalid",t);var s=i=f=a=null,p=null,E=null;for(l in n)if(n.hasOwnProperty(l)){var _=n[l];if(_!=null)switch(l){case"name":a=_;break;case"type":f=_;break;case"checked":p=_;break;case"defaultChecked":E=_;break;case"value":i=_;break;case"defaultValue":s=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(137,e));break;default:St(t,e,l,_,n,null)}}ao(t,i,s,p,E,f,a,!1),gu(t);return;case"select":st("invalid",t),l=f=i=null;for(a in n)if(n.hasOwnProperty(a)&&(s=n[a],s!=null))switch(a){case"value":i=s;break;case"defaultValue":f=s;break;case"multiple":l=s;default:St(t,e,a,s,n,null)}e=i,n=f,t.multiple=!!l,e!=null?hl(t,!!l,e,!1):n!=null&&hl(t,!!l,n,!0);return;case"textarea":st("invalid",t),i=a=l=null;for(f in n)if(n.hasOwnProperty(f)&&(s=n[f],s!=null))switch(f){case"value":l=s;break;case"defaultValue":a=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(r(91));break;default:St(t,e,f,s,n,null)}io(t,l,a,i),gu(t);return;case"option":for(p in n)if(n.hasOwnProperty(p)&&(l=n[p],l!=null))switch(p){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:St(t,e,p,l,n,null)}return;case"dialog":st("beforetoggle",t),st("toggle",t),st("cancel",t),st("close",t);break;case"iframe":case"object":st("load",t);break;case"video":case"audio":for(l=0;l<Xa.length;l++)st(Xa[l],t);break;case"image":st("error",t),st("load",t);break;case"details":st("toggle",t);break;case"embed":case"source":case"link":st("error",t),st("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(l=n[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:St(t,e,E,l,n,null)}return;default:if(ic(e)){for(_ in n)n.hasOwnProperty(_)&&(l=n[_],l!==void 0&&Zr(t,e,_,l,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(l=n[s],l!=null&&St(t,e,s,l,n,null))}function Xp(t,e,n,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,f=null,s=null,p=null,E=null,_=null;for(R in n){var U=n[R];if(n.hasOwnProperty(R)&&U!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":p=U;default:l.hasOwnProperty(R)||St(t,e,R,null,l,U)}}for(var A in l){var R=l[A];if(U=n[A],l.hasOwnProperty(A)&&(R!=null||U!=null))switch(A){case"type":i=R;break;case"name":a=R;break;case"checked":E=R;break;case"defaultChecked":_=R;break;case"value":f=R;break;case"defaultValue":s=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,e));break;default:R!==U&&St(t,e,A,R,l,U)}}ac(t,f,s,p,E,_,i,a);return;case"select":R=f=s=A=null;for(i in n)if(p=n[i],n.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":R=p;default:l.hasOwnProperty(i)||St(t,e,i,null,l,p)}for(a in l)if(i=l[a],p=n[a],l.hasOwnProperty(a)&&(i!=null||p!=null))switch(a){case"value":A=i;break;case"defaultValue":s=i;break;case"multiple":f=i;default:i!==p&&St(t,e,a,i,l,p)}e=s,n=f,l=R,A!=null?hl(t,!!n,A,!1):!!l!=!!n&&(e!=null?hl(t,!!n,e,!0):hl(t,!!n,n?[]:"",!1));return;case"textarea":R=A=null;for(s in n)if(a=n[s],n.hasOwnProperty(s)&&a!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:St(t,e,s,null,l,a)}for(f in l)if(a=l[f],i=n[f],l.hasOwnProperty(f)&&(a!=null||i!=null))switch(f){case"value":A=a;break;case"defaultValue":R=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(r(91));break;default:a!==i&&St(t,e,f,a,l,i)}uo(t,A,R);return;case"option":for(var et in n)if(A=n[et],n.hasOwnProperty(et)&&A!=null&&!l.hasOwnProperty(et))switch(et){case"selected":t.selected=!1;break;default:St(t,e,et,null,l,A)}for(p in l)if(A=l[p],R=n[p],l.hasOwnProperty(p)&&A!==R&&(A!=null||R!=null))switch(p){case"selected":t.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:St(t,e,p,A,l,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in n)A=n[P],n.hasOwnProperty(P)&&A!=null&&!l.hasOwnProperty(P)&&St(t,e,P,null,l,A);for(E in l)if(A=l[E],R=n[E],l.hasOwnProperty(E)&&A!==R&&(A!=null||R!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(137,e));break;default:St(t,e,E,A,l,R)}return;default:if(ic(e)){for(var xt in n)A=n[xt],n.hasOwnProperty(xt)&&A!==void 0&&!l.hasOwnProperty(xt)&&Zr(t,e,xt,void 0,l,A);for(_ in l)A=l[_],R=n[_],!l.hasOwnProperty(_)||A===R||A===void 0&&R===void 0||Zr(t,e,_,A,l,R);return}}for(var S in n)A=n[S],n.hasOwnProperty(S)&&A!=null&&!l.hasOwnProperty(S)&&St(t,e,S,null,l,A);for(U in l)A=l[U],R=n[U],!l.hasOwnProperty(U)||A===R||A==null&&R==null||St(t,e,U,A,l,R)}var Vr=null,Kr=null;function di(t){return t.nodeType===9?t:t.ownerDocument}function rh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Jr(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kr=null;function Qp(){var t=window.event;return t&&t.type==="popstate"?t===kr?!1:(kr=t,!0):(kr=null,!1)}var oh=typeof setTimeout=="function"?setTimeout:void 0,Zp=typeof clearTimeout=="function"?clearTimeout:void 0,sh=typeof Promise=="function"?Promise:void 0,Vp=typeof queueMicrotask=="function"?queueMicrotask:typeof sh<"u"?function(t){return sh.resolve(null).then(t).catch(Kp)}:oh;function Kp(t){setTimeout(function(){throw t})}function Nn(t){return t==="head"}function dh(t,e){var n=e,l=0,a=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(0<l&&8>l){n=l;var f=t.ownerDocument;if(n&1&&Za(f.documentElement),n&2&&Za(f.body),n&4)for(n=f.head,Za(n),f=n.firstChild;f;){var s=f.nextSibling,p=f.nodeName;f[ua]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=s}}if(a===0){t.removeChild(i),Pa(e);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:l=n.charCodeAt(0)-48;else l=0;n=i}while(n);Pa(e)}function $r(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":$r(n),tc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Jp(t,e,n,l){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ua])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=we(t.nextSibling),t===null)break}return null}function kp(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=we(t.nextSibling),t===null))return null;return t}function Wr(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function $p(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var l=function(){e(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function we(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Fr=null;function hh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function mh(t,e,n){switch(e=di(n),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Za(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);tc(t)}var _e=new Map,ph=new Set;function hi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var rn=L.d;L.d={f:Wp,r:Fp,D:Pp,C:Ip,L:ty,m:ey,X:ly,S:ny,M:ay};function Wp(){var t=rn.f(),e=ai();return t||e}function Fp(t){var e=fl(t);e!==null&&e.tag===5&&e.type==="form"?js(e):rn.r(t)}var Ql=typeof document>"u"?null:document;function yh(t,e,n){var l=Ql;if(l&&typeof e=="string"&&e){var a=xe(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),ph.has(a)||(ph.add(a),t={rel:t,crossOrigin:n,href:e},l.querySelector(a)===null&&(e=l.createElement("link"),$t(e,"link",t),Xt(e),l.head.appendChild(e)))}}function Pp(t){rn.D(t),yh("dns-prefetch",t,null)}function Ip(t,e){rn.C(t,e),yh("preconnect",t,e)}function ty(t,e,n){rn.L(t,e,n);var l=Ql;if(l&&t&&e){var a='link[rel="preload"][as="'+xe(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+xe(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+xe(n.imageSizes)+'"]')):a+='[href="'+xe(t)+'"]';var i=a;switch(e){case"style":i=Zl(t);break;case"script":i=Vl(t)}_e.has(i)||(t=z({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),_e.set(i,t),l.querySelector(a)!==null||e==="style"&&l.querySelector(Va(i))||e==="script"&&l.querySelector(Ka(i))||(e=l.createElement("link"),$t(e,"link",t),Xt(e),l.head.appendChild(e)))}}function ey(t,e){rn.m(t,e);var n=Ql;if(n&&t){var l=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+xe(l)+'"][href="'+xe(t)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Vl(t)}if(!_e.has(i)&&(t=z({rel:"modulepreload",href:t},e),_e.set(i,t),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ka(i)))return}l=n.createElement("link"),$t(l,"link",t),Xt(l),n.head.appendChild(l)}}}function ny(t,e,n){rn.S(t,e,n);var l=Ql;if(l&&t){var a=ol(l).hoistableStyles,i=Zl(t);e=e||"default";var f=a.get(i);if(!f){var s={loading:0,preload:null};if(f=l.querySelector(Va(i)))s.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":e},n),(n=_e.get(i))&&Pr(t,n);var p=f=l.createElement("link");Xt(p),$t(p,"link",t),p._p=new Promise(function(E,_){p.onload=E,p.onerror=_}),p.addEventListener("load",function(){s.loading|=1}),p.addEventListener("error",function(){s.loading|=2}),s.loading|=4,mi(f,e,l)}f={type:"stylesheet",instance:f,count:1,state:s},a.set(i,f)}}}function ly(t,e){rn.X(t,e);var n=Ql;if(n&&t){var l=ol(n).hoistableScripts,a=Vl(t),i=l.get(a);i||(i=n.querySelector(Ka(a)),i||(t=z({src:t,async:!0},e),(e=_e.get(a))&&Ir(t,e),i=n.createElement("script"),Xt(i),$t(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function ay(t,e){rn.M(t,e);var n=Ql;if(n&&t){var l=ol(n).hoistableScripts,a=Vl(t),i=l.get(a);i||(i=n.querySelector(Ka(a)),i||(t=z({src:t,async:!0,type:"module"},e),(e=_e.get(a))&&Ir(t,e),i=n.createElement("script"),Xt(i),$t(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function gh(t,e,n,l){var a=(a=I.current)?hi(a):null;if(!a)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Zl(n.href),n=ol(a).hoistableStyles,l=n.get(e),l||(l={type:"style",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Zl(n.href);var i=ol(a).hoistableStyles,f=i.get(t);if(f||(a=a.ownerDocument||a,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,f),(i=a.querySelector(Va(t)))&&!i._p&&(f.instance=i,f.state.loading=5),_e.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},_e.set(t,n),i||uy(a,t,n,f.state))),e&&l===null)throw Error(r(528,""));return f}if(e&&l!==null)throw Error(r(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Vl(n),n=ol(a).hoistableScripts,l=n.get(e),l||(l={type:"script",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Zl(t){return'href="'+xe(t)+'"'}function Va(t){return'link[rel="stylesheet"]['+t+"]"}function vh(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function uy(t,e,n,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),$t(e,"link",n),Xt(e),t.head.appendChild(e))}function Vl(t){return'[src="'+xe(t)+'"]'}function Ka(t){return"script[async]"+t}function bh(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+xe(n.href)+'"]');if(l)return e.instance=l,Xt(l),l;var a=z({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Xt(l),$t(l,"style",a),mi(l,n.precedence,t),e.instance=l;case"stylesheet":a=Zl(n.href);var i=t.querySelector(Va(a));if(i)return e.state.loading|=4,e.instance=i,Xt(i),i;l=vh(n),(a=_e.get(a))&&Pr(l,a),i=(t.ownerDocument||t).createElement("link"),Xt(i);var f=i;return f._p=new Promise(function(s,p){f.onload=s,f.onerror=p}),$t(i,"link",l),e.state.loading|=4,mi(i,n.precedence,t),e.instance=i;case"script":return i=Vl(n.src),(a=t.querySelector(Ka(i)))?(e.instance=a,Xt(a),a):(l=n,(a=_e.get(i))&&(l=z({},n),Ir(l,a)),t=t.ownerDocument||t,a=t.createElement("script"),Xt(a),$t(a,"link",l),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,mi(l,n.precedence,t));return e.instance}function mi(t,e,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,f=0;f<l.length;f++){var s=l[f];if(s.dataset.precedence===e)i=s;else if(i!==a)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Pr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ir(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var pi=null;function Sh(t,e,n){if(pi===null){var l=new Map,a=pi=new Map;a.set(n,l)}else a=pi,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(t))return l;for(l.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var i=n[a];if(!(i[ua]||i[Ft]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var f=i.getAttribute(e)||"";f=t+f;var s=l.get(f);s?s.push(i):l.set(f,[i])}}return l}function xh(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function iy(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Eh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ja=null;function cy(){}function ry(t,e,n){if(Ja===null)throw Error(r(475));var l=Ja;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var a=Zl(n.href),i=t.querySelector(Va(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=yi.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=i,Xt(i);return}i=t.ownerDocument||t,n=vh(n),(a=_e.get(a))&&Pr(n,a),i=i.createElement("link"),Xt(i);var f=i;f._p=new Promise(function(s,p){f.onload=s,f.onerror=p}),$t(i,"link",n),e.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=yi.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}function fy(){if(Ja===null)throw Error(r(475));var t=Ja;return t.stylesheets&&t.count===0&&tf(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&tf(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function yi(){if(this.count--,this.count===0){if(this.stylesheets)tf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var gi=null;function tf(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,gi=new Map,e.forEach(oy,t),gi=null,yi.call(t))}function oy(t,e){if(!(e.state.loading&4)){var n=gi.get(t);if(n)var l=n.get(null);else{n=new Map,gi.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var f=a[i];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),l=f)}l&&n.set(null,l)}a=e.instance,f=a.getAttribute("data-precedence"),i=n.get(f)||l,i===l&&n.set(null,a),n.set(f,a),this.count++,l=yi.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var ka={$$typeof:Z,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function sy(t,e,n,l,a,i,f,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function zh(t,e,n,l,a,i,f,s,p,E,_,U){return t=new sy(t,e,n,f,s,p,E,U),e=1,i===!0&&(e|=24),i=de(3,null,null,e),t.current=i,i.stateNode=t,e=jc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:e},Yc(i),t}function Ah(t){return t?(t=El,t):El}function Th(t,e,n,l,a,i){a=Ah(a),l.context===null?l.context=a:l.pendingContext=a,l=vn(e),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=bn(t,l,e),n!==null&&(ge(n,t,e),Aa(n,t,e))}function Rh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ef(t,e){Rh(t,e),(t=t.alternate)&&Rh(t,e)}function Oh(t){if(t.tag===13){var e=xl(t,67108864);e!==null&&ge(e,t,67108864),ef(t,67108864)}}var vi=!0;function dy(t,e,n,l){var a=O.T;O.T=null;var i=L.p;try{L.p=2,nf(t,e,n,l)}finally{L.p=i,O.T=a}}function hy(t,e,n,l){var a=O.T;O.T=null;var i=L.p;try{L.p=8,nf(t,e,n,l)}finally{L.p=i,O.T=a}}function nf(t,e,n,l){if(vi){var a=lf(l);if(a===null)Qr(t,e,l,bi,n),Mh(t,l);else if(py(a,t,e,n,l))l.stopPropagation();else if(Mh(t,l),e&4&&-1<my.indexOf(t)){for(;a!==null;){var i=fl(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var f=Yn(i.pendingLanes);if(f!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;f;){var p=1<<31-oe(f);s.entanglements[1]|=p,f&=~p}Ye(i),(gt&6)===0&&(ni=Ce()+500,La(0))}}break;case 13:s=xl(i,2),s!==null&&ge(s,i,2),ai(),ef(i,2)}if(i=lf(l),i===null&&Qr(t,e,l,bi,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else Qr(t,e,l,null,n)}}function lf(t){return t=rc(t),af(t)}var bi=null;function af(t){if(bi=null,t=rl(t),t!==null){var e=h(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=g(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return bi=t,null}function _h(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Im()){case Lf:return 2;case Xf:return 8;case su:case t0:return 32;case Qf:return 268435456;default:return 32}default:return 32}}var uf=!1,wn=null,Un=null,Cn=null,$a=new Map,Wa=new Map,jn=[],my="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mh(t,e){switch(t){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":$a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(e.pointerId)}}function Fa(t,e,n,l,a,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},e!==null&&(e=fl(e),e!==null&&Oh(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function py(t,e,n,l,a){switch(e){case"focusin":return wn=Fa(wn,t,e,n,l,a),!0;case"dragenter":return Un=Fa(Un,t,e,n,l,a),!0;case"mouseover":return Cn=Fa(Cn,t,e,n,l,a),!0;case"pointerover":var i=a.pointerId;return $a.set(i,Fa($a.get(i)||null,t,e,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,Wa.set(i,Fa(Wa.get(i)||null,t,e,n,l,a)),!0}return!1}function Dh(t){var e=rl(t.target);if(e!==null){var n=h(e);if(n!==null){if(e=n.tag,e===13){if(e=g(n),e!==null){t.blockedOn=e,r0(t.priority,function(){if(n.tag===13){var l=ye();l=Fi(l);var a=xl(n,l);a!==null&&ge(a,n,l),ef(n,l)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Si(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lf(t.nativeEvent);if(n===null){n=t.nativeEvent;var l=new n.constructor(n.type,n);cc=l,n.target.dispatchEvent(l),cc=null}else return e=fl(n),e!==null&&Oh(e),t.blockedOn=n,!1;e.shift()}return!0}function Nh(t,e,n){Si(t)&&n.delete(e)}function yy(){uf=!1,wn!==null&&Si(wn)&&(wn=null),Un!==null&&Si(Un)&&(Un=null),Cn!==null&&Si(Cn)&&(Cn=null),$a.forEach(Nh),Wa.forEach(Nh)}function xi(t,e){t.blockedOn===e&&(t.blockedOn=null,uf||(uf=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,yy)))}var Ei=null;function wh(t){Ei!==t&&(Ei=t,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Ei===t&&(Ei=null);for(var e=0;e<t.length;e+=3){var n=t[e],l=t[e+1],a=t[e+2];if(typeof l!="function"){if(af(l||n)===null)continue;break}var i=fl(n);i!==null&&(t.splice(e,3),e-=3,ar(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Pa(t){function e(p){return xi(p,t)}wn!==null&&xi(wn,t),Un!==null&&xi(Un,t),Cn!==null&&xi(Cn,t),$a.forEach(e),Wa.forEach(e);for(var n=0;n<jn.length;n++){var l=jn[n];l.blockedOn===t&&(l.blockedOn=null)}for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)Dh(n),n.blockedOn===null&&jn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],f=a[le]||null;if(typeof i=="function")f||wh(n);else if(f){var s=null;if(i&&i.hasAttribute("formAction")){if(a=i,f=i[le]||null)s=f.formAction;else if(af(a)!==null)continue}else s=f.action;typeof s=="function"?n[l+1]=s:(n.splice(l,3),l-=3),wh(n)}}}function cf(t){this._internalRoot=t}zi.prototype.render=cf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var n=e.current,l=ye();Th(n,l,t,e,null,null)},zi.prototype.unmount=cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Th(t.current,2,null,t,null,null),ai(),e[cl]=null}};function zi(t){this._internalRoot=t}zi.prototype.unstable_scheduleHydration=function(t){if(t){var e=kf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&Dh(t)}};var Uh=c.version;if(Uh!=="19.1.1")throw Error(r(527,Uh,"19.1.1"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=v(e),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var gy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{na=Ai.inject(gy),fe=Ai}catch{}}return tu.createRoot=function(t,e){if(!d(t))throw Error(r(299));var n=!1,l="",a=$s,i=Ws,f=Fs,s=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(s=e.unstable_transitionCallbacks)),e=zh(t,1,!1,null,null,n,l,a,i,f,s,null),t[cl]=e.current,Xr(t),new cf(e)},tu.hydrateRoot=function(t,e,n){if(!d(t))throw Error(r(299));var l=!1,a="",i=$s,f=Ws,s=Fs,p=null,E=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(p=n.unstable_transitionCallbacks),n.formState!==void 0&&(E=n.formState)),e=zh(t,1,!0,e,n??null,l,a,i,f,s,p,E),e.context=Ah(null),n=e.current,l=ye(),l=Fi(l),a=vn(l),a.callback=null,bn(n,a,l),n=l,e.current.lanes=n,aa(e,n),Ye(e),t[cl]=e.current,Xr(t),new zi(e)},tu.version="19.1.1",tu}var Qh;function _y(){if(Qh)return of.exports;Qh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(c){console.error(c)}}return u(),of.exports=Oy(),of.exports}var My=_y();/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Zh="popstate";function Dy(u={}){function c(r,d){let{pathname:h,search:g,hash:T}=r.location;return Sf("",{pathname:h,search:g,hash:T},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(r,d){return typeof d=="string"?d:uu(d)}return wy(c,o,null,u)}function Mt(u,c){if(u===!1||u===null||typeof u>"u")throw new Error(c)}function Le(u,c){if(!u){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Ny(){return Math.random().toString(36).substring(2,10)}function Vh(u,c){return{usr:u.state,key:u.key,idx:c}}function Sf(u,c,o=null,r){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof c=="string"?Il(c):c,state:o,key:c&&c.key||r||Ny()}}function uu({pathname:u="/",search:c="",hash:o=""}){return c&&c!=="?"&&(u+=c.charAt(0)==="?"?c:"?"+c),o&&o!=="#"&&(u+=o.charAt(0)==="#"?o:"#"+o),u}function Il(u){let c={};if(u){let o=u.indexOf("#");o>=0&&(c.hash=u.substring(o),u=u.substring(0,o));let r=u.indexOf("?");r>=0&&(c.search=u.substring(r),u=u.substring(0,r)),u&&(c.pathname=u)}return c}function wy(u,c,o,r={}){let{window:d=document.defaultView,v5Compat:h=!1}=r,g=d.history,T="POP",v=null,m=z();m==null&&(m=0,g.replaceState({...g.state,idx:m},""));function z(){return(g.state||{idx:null}).idx}function w(){T="POP";let Q=z(),q=Q==null?null:Q-m;m=Q,v&&v({action:T,location:G.location,delta:q})}function j(Q,q){T="PUSH";let k=Sf(G.location,Q,q);m=z()+1;let Z=Vh(k,m),nt=G.createHref(k);try{g.pushState(Z,"",nt)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;d.location.assign(nt)}h&&v&&v({action:T,location:G.location,delta:1})}function H(Q,q){T="REPLACE";let k=Sf(G.location,Q,q);m=z();let Z=Vh(k,m),nt=G.createHref(k);g.replaceState(Z,"",nt),h&&v&&v({action:T,location:G.location,delta:0})}function B(Q){return Uy(Q)}let G={get action(){return T},get location(){return u(d,g)},listen(Q){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(Zh,w),v=Q,()=>{d.removeEventListener(Zh,w),v=null}},createHref(Q){return c(d,Q)},createURL:B,encodeLocation(Q){let q=B(Q);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:j,replace:H,go(Q){return g.go(Q)}};return G}function Uy(u,c=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Mt(o,"No window.location.(origin|href) available to create URL");let r=typeof u=="string"?u:uu(u);return r=r.replace(/ $/,"%20"),!c&&r.startsWith("//")&&(r=o+r),new URL(r,o)}function om(u,c,o="/"){return Cy(u,c,o,!1)}function Cy(u,c,o,r){let d=typeof c=="string"?Il(c):c,h=sn(d.pathname||"/",o);if(h==null)return null;let g=sm(u);jy(g);let T=null;for(let v=0;T==null&&v<g.length;++v){let m=Ky(h);T=Zy(g[v],m,r)}return T}function sm(u,c=[],o=[],r="",d=!1){let h=(g,T,v=d,m)=>{let z={relativePath:m===void 0?g.path||"":m,caseSensitive:g.caseSensitive===!0,childrenIndex:T,route:g};if(z.relativePath.startsWith("/")){if(!z.relativePath.startsWith(r)&&v)return;Mt(z.relativePath.startsWith(r),`Absolute route path "${z.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),z.relativePath=z.relativePath.slice(r.length)}let w=on([r,z.relativePath]),j=o.concat(z);g.children&&g.children.length>0&&(Mt(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),sm(g.children,c,j,w,v)),!(g.path==null&&!g.index)&&c.push({path:w,score:Xy(w,g.index),routesMeta:j})};return u.forEach((g,T)=>{if(g.path===""||!g.path?.includes("?"))h(g,T);else for(let v of dm(g.path))h(g,T,!0,v)}),c}function dm(u){let c=u.split("/");if(c.length===0)return[];let[o,...r]=c,d=o.endsWith("?"),h=o.replace(/\?$/,"");if(r.length===0)return d?[h,""]:[h];let g=dm(r.join("/")),T=[];return T.push(...g.map(v=>v===""?h:[h,v].join("/"))),d&&T.push(...g),T.map(v=>u.startsWith("/")&&v===""?"/":v)}function jy(u){u.sort((c,o)=>c.score!==o.score?o.score-c.score:Qy(c.routesMeta.map(r=>r.childrenIndex),o.routesMeta.map(r=>r.childrenIndex)))}var qy=/^:[\w-]+$/,Hy=3,By=2,Yy=1,Gy=10,Ly=-2,Kh=u=>u==="*";function Xy(u,c){let o=u.split("/"),r=o.length;return o.some(Kh)&&(r+=Ly),c&&(r+=By),o.filter(d=>!Kh(d)).reduce((d,h)=>d+(qy.test(h)?Hy:h===""?Yy:Gy),r)}function Qy(u,c){return u.length===c.length&&u.slice(0,-1).every((r,d)=>r===c[d])?u[u.length-1]-c[c.length-1]:0}function Zy(u,c,o=!1){let{routesMeta:r}=u,d={},h="/",g=[];for(let T=0;T<r.length;++T){let v=r[T],m=T===r.length-1,z=h==="/"?c:c.slice(h.length)||"/",w=ji({path:v.relativePath,caseSensitive:v.caseSensitive,end:m},z),j=v.route;if(!w&&m&&o&&!r[r.length-1].route.index&&(w=ji({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},z)),!w)return null;Object.assign(d,w.params),g.push({params:d,pathname:on([h,w.pathname]),pathnameBase:Wy(on([h,w.pathnameBase])),route:j}),w.pathnameBase!=="/"&&(h=on([h,w.pathnameBase]))}return g}function ji(u,c){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[o,r]=Vy(u.path,u.caseSensitive,u.end),d=c.match(o);if(!d)return null;let h=d[0],g=h.replace(/(.)\/+$/,"$1"),T=d.slice(1);return{params:r.reduce((m,{paramName:z,isOptional:w},j)=>{if(z==="*"){let B=T[j]||"";g=h.slice(0,h.length-B.length).replace(/(.)\/+$/,"$1")}const H=T[j];return w&&!H?m[z]=void 0:m[z]=(H||"").replace(/%2F/g,"/"),m},{}),pathname:h,pathnameBase:g,pattern:u}}function Vy(u,c=!1,o=!0){Le(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let r=[],d="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,T,v)=>(r.push({paramName:T,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(r.push({paramName:"*"}),d+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":u!==""&&u!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,c?void 0:"i"),r]}function Ky(u){try{return u.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Le(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),u}}function sn(u,c){if(c==="/")return u;if(!u.toLowerCase().startsWith(c.toLowerCase()))return null;let o=c.endsWith("/")?c.length-1:c.length,r=u.charAt(o);return r&&r!=="/"?null:u.slice(o)||"/"}function Jy(u,c="/"){let{pathname:o,search:r="",hash:d=""}=typeof u=="string"?Il(u):u;return{pathname:o?o.startsWith("/")?o:ky(o,c):c,search:Fy(r),hash:Py(d)}}function ky(u,c){let o=c.replace(/\/+$/,"").split("/");return u.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function mf(u,c,o,r){return`Cannot include a '${u}' character in a manually specified \`to.${c}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $y(u){return u.filter((c,o)=>o===0||c.route.path&&c.route.path.length>0)}function hm(u){let c=$y(u);return c.map((o,r)=>r===c.length-1?o.pathname:o.pathnameBase)}function mm(u,c,o,r=!1){let d;typeof u=="string"?d=Il(u):(d={...u},Mt(!d.pathname||!d.pathname.includes("?"),mf("?","pathname","search",d)),Mt(!d.pathname||!d.pathname.includes("#"),mf("#","pathname","hash",d)),Mt(!d.search||!d.search.includes("#"),mf("#","search","hash",d)));let h=u===""||d.pathname==="",g=h?"/":d.pathname,T;if(g==null)T=o;else{let w=c.length-1;if(!r&&g.startsWith("..")){let j=g.split("/");for(;j[0]==="..";)j.shift(),w-=1;d.pathname=j.join("/")}T=w>=0?c[w]:"/"}let v=Jy(d,T),m=g&&g!=="/"&&g.endsWith("/"),z=(h||g===".")&&o.endsWith("/");return!v.pathname.endsWith("/")&&(m||z)&&(v.pathname+="/"),v}var on=u=>u.join("/").replace(/\/\/+/g,"/"),Wy=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),Fy=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,Py=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u;function Iy(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}var pm=["POST","PUT","PATCH","DELETE"];new Set(pm);var t1=["GET",...pm];new Set(t1);var ta=N.createContext(null);ta.displayName="DataRouter";var Gi=N.createContext(null);Gi.displayName="DataRouterState";N.createContext(!1);var ym=N.createContext({isTransitioning:!1});ym.displayName="ViewTransition";var e1=N.createContext(new Map);e1.displayName="Fetchers";var n1=N.createContext(null);n1.displayName="Await";var Xe=N.createContext(null);Xe.displayName="Navigation";var cu=N.createContext(null);cu.displayName="Location";var dn=N.createContext({outlet:null,matches:[],isDataRoute:!1});dn.displayName="Route";var Df=N.createContext(null);Df.displayName="RouteError";function l1(u,{relative:c}={}){Mt(ru(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:r}=N.useContext(Xe),{hash:d,pathname:h,search:g}=fu(u,{relative:c}),T=h;return o!=="/"&&(T=h==="/"?o:on([o,h])),r.createHref({pathname:T,search:g,hash:d})}function ru(){return N.useContext(cu)!=null}function il(){return Mt(ru(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(cu).location}var gm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vm(u){N.useContext(Xe).static||N.useLayoutEffect(u)}function a1(){let{isDataRoute:u}=N.useContext(dn);return u?g1():u1()}function u1(){Mt(ru(),"useNavigate() may be used only in the context of a <Router> component.");let u=N.useContext(ta),{basename:c,navigator:o}=N.useContext(Xe),{matches:r}=N.useContext(dn),{pathname:d}=il(),h=JSON.stringify(hm(r)),g=N.useRef(!1);return vm(()=>{g.current=!0}),N.useCallback((v,m={})=>{if(Le(g.current,gm),!g.current)return;if(typeof v=="number"){o.go(v);return}let z=mm(v,JSON.parse(h),d,m.relative==="path");u==null&&c!=="/"&&(z.pathname=z.pathname==="/"?c:on([c,z.pathname])),(m.replace?o.replace:o.push)(z,m.state,m)},[c,o,h,d,u])}N.createContext(null);function fu(u,{relative:c}={}){let{matches:o}=N.useContext(dn),{pathname:r}=il(),d=JSON.stringify(hm(o));return N.useMemo(()=>mm(u,JSON.parse(d),r,c==="path"),[u,d,r,c])}function i1(u,c){return bm(u,c)}function bm(u,c,o,r){Mt(ru(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=N.useContext(Xe),{matches:h}=N.useContext(dn),g=h[h.length-1],T=g?g.params:{},v=g?g.pathname:"/",m=g?g.pathnameBase:"/",z=g&&g.route;{let q=z&&z.path||"";Sm(v,!z||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let w=il(),j;if(c){let q=typeof c=="string"?Il(c):c;Mt(m==="/"||q.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${q.pathname}" was given in the \`location\` prop.`),j=q}else j=w;let H=j.pathname||"/",B=H;if(m!=="/"){let q=m.replace(/^\//,"").split("/");B="/"+H.replace(/^\//,"").split("/").slice(q.length).join("/")}let G=om(u,{pathname:B});Le(z||G!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),Le(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=s1(G&&G.map(q=>Object.assign({},q,{params:Object.assign({},T,q.params),pathname:on([m,d.encodeLocation?d.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?m:on([m,d.encodeLocation?d.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),h,o,r);return c&&Q?N.createElement(cu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...j},navigationType:"POP"}},Q):Q}function c1(){let u=y1(),c=Iy(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),o=u instanceof Error?u.stack:null,r="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:r},h={padding:"2px 4px",backgroundColor:r},g=null;return console.error("Error handled by React Router default ErrorBoundary:",u),g=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:h},"ErrorBoundary")," or"," ",N.createElement("code",{style:h},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},c),o?N.createElement("pre",{style:d},o):null,g)}var r1=N.createElement(c1,null),f1=class extends N.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,c){return c.location!==u.location||c.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:c.error,location:c.location,revalidation:u.revalidation||c.revalidation}}componentDidCatch(u,c){console.error("React Router caught the following error during render",u,c)}render(){return this.state.error!==void 0?N.createElement(dn.Provider,{value:this.props.routeContext},N.createElement(Df.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function o1({routeContext:u,match:c,children:o}){let r=N.useContext(ta);return r&&r.static&&r.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=c.route.id),N.createElement(dn.Provider,{value:u},o)}function s1(u,c=[],o=null,r=null){if(u==null){if(!o)return null;if(o.errors)u=o.matches;else if(c.length===0&&!o.initialized&&o.matches.length>0)u=o.matches;else return null}let d=u,h=o?.errors;if(h!=null){let v=d.findIndex(m=>m.route.id&&h?.[m.route.id]!==void 0);Mt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let g=!1,T=-1;if(o)for(let v=0;v<d.length;v++){let m=d[v];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(T=v),m.route.id){let{loaderData:z,errors:w}=o,j=m.route.loader&&!z.hasOwnProperty(m.route.id)&&(!w||w[m.route.id]===void 0);if(m.route.lazy||j){g=!0,T>=0?d=d.slice(0,T+1):d=[d[0]];break}}}return d.reduceRight((v,m,z)=>{let w,j=!1,H=null,B=null;o&&(w=h&&m.route.id?h[m.route.id]:void 0,H=m.route.errorElement||r1,g&&(T<0&&z===0?(Sm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,B=null):T===z&&(j=!0,B=m.route.hydrateFallbackElement||null)));let G=c.concat(d.slice(0,z+1)),Q=()=>{let q;return w?q=H:j?q=B:m.route.Component?q=N.createElement(m.route.Component,null):m.route.element?q=m.route.element:q=v,N.createElement(o1,{match:m,routeContext:{outlet:v,matches:G,isDataRoute:o!=null},children:q})};return o&&(m.route.ErrorBoundary||m.route.errorElement||z===0)?N.createElement(f1,{location:o.location,revalidation:o.revalidation,component:H,error:w,children:Q(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):Q()},null)}function Nf(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function d1(u){let c=N.useContext(ta);return Mt(c,Nf(u)),c}function h1(u){let c=N.useContext(Gi);return Mt(c,Nf(u)),c}function m1(u){let c=N.useContext(dn);return Mt(c,Nf(u)),c}function wf(u){let c=m1(u),o=c.matches[c.matches.length-1];return Mt(o.route.id,`${u} can only be used on routes that contain a unique "id"`),o.route.id}function p1(){return wf("useRouteId")}function y1(){let u=N.useContext(Df),c=h1("useRouteError"),o=wf("useRouteError");return u!==void 0?u:c.errors?.[o]}function g1(){let{router:u}=d1("useNavigate"),c=wf("useNavigate"),o=N.useRef(!1);return vm(()=>{o.current=!0}),N.useCallback(async(d,h={})=>{Le(o.current,gm),o.current&&(typeof d=="number"?u.navigate(d):await u.navigate(d,{fromRouteId:c,...h}))},[u,c])}var Jh={};function Sm(u,c,o){!c&&!Jh[u]&&(Jh[u]=!0,Le(!1,o))}N.memo(v1);function v1({routes:u,future:c,state:o}){return bm(u,void 0,o,c)}function xm(u){Mt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function b1({basename:u="/",children:c=null,location:o,navigationType:r="POP",navigator:d,static:h=!1}){Mt(!ru(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=u.replace(/^\/*/,"/"),T=N.useMemo(()=>({basename:g,navigator:d,static:h,future:{}}),[g,d,h]);typeof o=="string"&&(o=Il(o));let{pathname:v="/",search:m="",hash:z="",state:w=null,key:j="default"}=o,H=N.useMemo(()=>{let B=sn(v,g);return B==null?null:{location:{pathname:B,search:m,hash:z,state:w,key:j},navigationType:r}},[g,v,m,z,w,j,r]);return Le(H!=null,`<Router basename="${g}"> is not able to match the URL "${v}${m}${z}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:N.createElement(Xe.Provider,{value:T},N.createElement(cu.Provider,{children:c,value:H}))}function S1({children:u,location:c}){return i1(xf(u),c)}function xf(u,c=[]){let o=[];return N.Children.forEach(u,(r,d)=>{if(!N.isValidElement(r))return;let h=[...c,d];if(r.type===N.Fragment){o.push.apply(o,xf(r.props.children,h));return}Mt(r.type===xm,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Mt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let g={id:r.props.id||h.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(g.children=xf(r.props.children,h)),o.push(g)}),o}var _i="get",Mi="application/x-www-form-urlencoded";function Li(u){return u!=null&&typeof u.tagName=="string"}function x1(u){return Li(u)&&u.tagName.toLowerCase()==="button"}function E1(u){return Li(u)&&u.tagName.toLowerCase()==="form"}function z1(u){return Li(u)&&u.tagName.toLowerCase()==="input"}function A1(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function T1(u,c){return u.button===0&&(!c||c==="_self")&&!A1(u)}var Ti=null;function R1(){if(Ti===null)try{new FormData(document.createElement("form"),0),Ti=!1}catch{Ti=!0}return Ti}var O1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function pf(u){return u!=null&&!O1.has(u)?(Le(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mi}"`),null):u}function _1(u,c){let o,r,d,h,g;if(E1(u)){let T=u.getAttribute("action");r=T?sn(T,c):null,o=u.getAttribute("method")||_i,d=pf(u.getAttribute("enctype"))||Mi,h=new FormData(u)}else if(x1(u)||z1(u)&&(u.type==="submit"||u.type==="image")){let T=u.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=u.getAttribute("formaction")||T.getAttribute("action");if(r=v?sn(v,c):null,o=u.getAttribute("formmethod")||T.getAttribute("method")||_i,d=pf(u.getAttribute("formenctype"))||pf(T.getAttribute("enctype"))||Mi,h=new FormData(T,u),!R1()){let{name:m,type:z,value:w}=u;if(z==="image"){let j=m?`${m}.`:"";h.append(`${j}x`,"0"),h.append(`${j}y`,"0")}else m&&h.append(m,w)}}else{if(Li(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=_i,r=null,d=Mi,g=u}return h&&d==="text/plain"&&(g=h,h=void 0),{action:r,method:o.toLowerCase(),encType:d,formData:h,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Uf(u,c){if(u===!1||u===null||typeof u>"u")throw new Error(c)}function M1(u,c,o){let r=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return r.pathname==="/"?r.pathname=`_root.${o}`:c&&sn(r.pathname,c)==="/"?r.pathname=`${c.replace(/\/$/,"")}/_root.${o}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${o}`,r}async function D1(u,c){if(u.id in c)return c[u.id];try{let o=await import(u.module);return c[u.id]=o,o}catch(o){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function N1(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function w1(u,c,o){let r=await Promise.all(u.map(async d=>{let h=c.routes[d.route.id];if(h){let g=await D1(h,o);return g.links?g.links():[]}return[]}));return q1(r.flat(1).filter(N1).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function kh(u,c,o,r,d,h){let g=(v,m)=>o[m]?v.route.id!==o[m].route.id:!0,T=(v,m)=>o[m].pathname!==v.pathname||o[m].route.path?.endsWith("*")&&o[m].params["*"]!==v.params["*"];return h==="assets"?c.filter((v,m)=>g(v,m)||T(v,m)):h==="data"?c.filter((v,m)=>{let z=r.routes[v.route.id];if(!z||!z.hasLoader)return!1;if(g(v,m)||T(v,m))return!0;if(v.route.shouldRevalidate){let w=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function U1(u,c,{includeHydrateFallback:o}={}){return C1(u.map(r=>{let d=c.routes[r.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function C1(u){return[...new Set(u)]}function j1(u){let c={},o=Object.keys(u).sort();for(let r of o)c[r]=u[r];return c}function q1(u,c){let o=new Set;return new Set(c),u.reduce((r,d)=>{let h=JSON.stringify(j1(d));return o.has(h)||(o.add(h),r.push({key:h,link:d})),r},[])}function Em(){let u=N.useContext(ta);return Uf(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function H1(){let u=N.useContext(Gi);return Uf(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Cf=N.createContext(void 0);Cf.displayName="FrameworkContext";function zm(){let u=N.useContext(Cf);return Uf(u,"You must render this element inside a <HydratedRouter> element"),u}function B1(u,c){let o=N.useContext(Cf),[r,d]=N.useState(!1),[h,g]=N.useState(!1),{onFocus:T,onBlur:v,onMouseEnter:m,onMouseLeave:z,onTouchStart:w}=c,j=N.useRef(null);N.useEffect(()=>{if(u==="render"&&g(!0),u==="viewport"){let G=q=>{q.forEach(k=>{g(k.isIntersecting)})},Q=new IntersectionObserver(G,{threshold:.5});return j.current&&Q.observe(j.current),()=>{Q.disconnect()}}},[u]),N.useEffect(()=>{if(r){let G=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(G)}}},[r]);let H=()=>{d(!0)},B=()=>{d(!1),g(!1)};return o?u!=="intent"?[h,j,{}]:[h,j,{onFocus:eu(T,H),onBlur:eu(v,B),onMouseEnter:eu(m,H),onMouseLeave:eu(z,B),onTouchStart:eu(w,H)}]:[!1,j,{}]}function eu(u,c){return o=>{u&&u(o),o.defaultPrevented||c(o)}}function Y1({page:u,...c}){let{router:o}=Em(),r=N.useMemo(()=>om(o.routes,u,o.basename),[o.routes,u,o.basename]);return r?N.createElement(L1,{page:u,matches:r,...c}):null}function G1(u){let{manifest:c,routeModules:o}=zm(),[r,d]=N.useState([]);return N.useEffect(()=>{let h=!1;return w1(u,c,o).then(g=>{h||d(g)}),()=>{h=!0}},[u,c,o]),r}function L1({page:u,matches:c,...o}){let r=il(),{manifest:d,routeModules:h}=zm(),{basename:g}=Em(),{loaderData:T,matches:v}=H1(),m=N.useMemo(()=>kh(u,c,v,d,r,"data"),[u,c,v,d,r]),z=N.useMemo(()=>kh(u,c,v,d,r,"assets"),[u,c,v,d,r]),w=N.useMemo(()=>{if(u===r.pathname+r.search+r.hash)return[];let B=new Set,G=!1;if(c.forEach(q=>{let k=d.routes[q.route.id];!k||!k.hasLoader||(!m.some(Z=>Z.route.id===q.route.id)&&q.route.id in T&&h[q.route.id]?.shouldRevalidate||k.hasClientLoader?G=!0:B.add(q.route.id))}),B.size===0)return[];let Q=M1(u,g,"data");return G&&B.size>0&&Q.searchParams.set("_routes",c.filter(q=>B.has(q.route.id)).map(q=>q.route.id).join(",")),[Q.pathname+Q.search]},[g,T,r,d,m,c,u,h]),j=N.useMemo(()=>U1(z,d),[z,d]),H=G1(z);return N.createElement(N.Fragment,null,w.map(B=>N.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...o})),j.map(B=>N.createElement("link",{key:B,rel:"modulepreload",href:B,...o})),H.map(({key:B,link:G})=>N.createElement("link",{key:B,nonce:o.nonce,...G})))}function X1(...u){return c=>{u.forEach(o=>{typeof o=="function"?o(c):o!=null&&(o.current=c)})}}var Am=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Am&&(window.__reactRouterVersion="7.8.1")}catch{}function Q1({basename:u,children:c,window:o}){let r=N.useRef();r.current==null&&(r.current=Dy({window:o,v5Compat:!0}));let d=r.current,[h,g]=N.useState({action:d.action,location:d.location}),T=N.useCallback(v=>{N.startTransition(()=>g(v))},[g]);return N.useLayoutEffect(()=>d.listen(T),[d,T]),N.createElement(b1,{basename:u,children:c,location:h.location,navigationType:h.action,navigator:d})}var Tm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jf=N.forwardRef(function({onClick:c,discover:o="render",prefetch:r="none",relative:d,reloadDocument:h,replace:g,state:T,target:v,to:m,preventScrollReset:z,viewTransition:w,...j},H){let{basename:B}=N.useContext(Xe),G=typeof m=="string"&&Tm.test(m),Q,q=!1;if(typeof m=="string"&&G&&(Q=m,Am))try{let Et=new URL(window.location.href),te=m.startsWith("//")?new URL(Et.protocol+m):new URL(m),ne=sn(te.pathname,B);te.origin===Et.origin&&ne!=null?m=ne+te.search+te.hash:q=!0}catch{Le(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=l1(m,{relative:d}),[Z,nt,V]=B1(r,j),lt=J1(m,{replace:g,state:T,target:v,preventScrollReset:z,relative:d,viewTransition:w});function $(Et){c&&c(Et),Et.defaultPrevented||lt(Et)}let Tt=N.createElement("a",{...j,...V,href:Q||k,onClick:q||h?c:$,ref:X1(H,nt),target:v,"data-discover":!G&&o==="render"?"true":void 0});return Z&&!G?N.createElement(N.Fragment,null,Tt,N.createElement(Y1,{page:k})):Tt});jf.displayName="Link";var Z1=N.forwardRef(function({"aria-current":c="page",caseSensitive:o=!1,className:r="",end:d=!1,style:h,to:g,viewTransition:T,children:v,...m},z){let w=fu(g,{relative:m.relative}),j=il(),H=N.useContext(Gi),{navigator:B,basename:G}=N.useContext(Xe),Q=H!=null&&P1(w)&&T===!0,q=B.encodeLocation?B.encodeLocation(w).pathname:w.pathname,k=j.pathname,Z=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;o||(k=k.toLowerCase(),Z=Z?Z.toLowerCase():null,q=q.toLowerCase()),Z&&G&&(Z=sn(Z,G)||Z);const nt=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let V=k===q||!d&&k.startsWith(q)&&k.charAt(nt)==="/",lt=Z!=null&&(Z===q||!d&&Z.startsWith(q)&&Z.charAt(q.length)==="/"),$={isActive:V,isPending:lt,isTransitioning:Q},Tt=V?c:void 0,Et;typeof r=="function"?Et=r($):Et=[r,V?"active":null,lt?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let te=typeof h=="function"?h($):h;return N.createElement(jf,{...m,"aria-current":Tt,className:Et,ref:z,style:te,to:g,viewTransition:T},typeof v=="function"?v($):v)});Z1.displayName="NavLink";var V1=N.forwardRef(({discover:u="render",fetcherKey:c,navigate:o,reloadDocument:r,replace:d,state:h,method:g=_i,action:T,onSubmit:v,relative:m,preventScrollReset:z,viewTransition:w,...j},H)=>{let B=W1(),G=F1(T,{relative:m}),Q=g.toLowerCase()==="get"?"get":"post",q=typeof T=="string"&&Tm.test(T),k=Z=>{if(v&&v(Z),Z.defaultPrevented)return;Z.preventDefault();let nt=Z.nativeEvent.submitter,V=nt?.getAttribute("formmethod")||g;B(nt||Z.currentTarget,{fetcherKey:c,method:V,navigate:o,replace:d,state:h,relative:m,preventScrollReset:z,viewTransition:w})};return N.createElement("form",{ref:H,method:Q,action:G,onSubmit:r?v:k,...j,"data-discover":!q&&u==="render"?"true":void 0})});V1.displayName="Form";function K1(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rm(u){let c=N.useContext(ta);return Mt(c,K1(u)),c}function J1(u,{target:c,replace:o,state:r,preventScrollReset:d,relative:h,viewTransition:g}={}){let T=a1(),v=il(),m=fu(u,{relative:h});return N.useCallback(z=>{if(T1(z,c)){z.preventDefault();let w=o!==void 0?o:uu(v)===uu(m);T(u,{replace:w,state:r,preventScrollReset:d,relative:h,viewTransition:g})}},[v,T,m,o,r,c,u,d,h,g])}var k1=0,$1=()=>`__${String(++k1)}__`;function W1(){let{router:u}=Rm("useSubmit"),{basename:c}=N.useContext(Xe),o=p1();return N.useCallback(async(r,d={})=>{let{action:h,method:g,encType:T,formData:v,body:m}=_1(r,c);if(d.navigate===!1){let z=d.fetcherKey||$1();await u.fetch(z,o,d.action||h,{preventScrollReset:d.preventScrollReset,formData:v,body:m,formMethod:d.method||g,formEncType:d.encType||T,flushSync:d.flushSync})}else await u.navigate(d.action||h,{preventScrollReset:d.preventScrollReset,formData:v,body:m,formMethod:d.method||g,formEncType:d.encType||T,replace:d.replace,state:d.state,fromRouteId:o,flushSync:d.flushSync,viewTransition:d.viewTransition})},[u,c,o])}function F1(u,{relative:c}={}){let{basename:o}=N.useContext(Xe),r=N.useContext(dn);Mt(r,"useFormAction must be used inside a RouteContext");let[d]=r.matches.slice(-1),h={...fu(u||".",{relative:c})},g=il();if(u==null){h.search=g.search;let T=new URLSearchParams(h.search),v=T.getAll("index");if(v.some(z=>z==="")){T.delete("index"),v.filter(w=>w).forEach(w=>T.append("index",w));let z=T.toString();h.search=z?`?${z}`:""}}return(!u||u===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(h.pathname=h.pathname==="/"?o:on([o,h.pathname])),uu(h)}function P1(u,{relative:c}={}){let o=N.useContext(ym);Mt(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Rm("useViewTransitionState"),d=fu(u,{relative:c});if(!o.isTransitioning)return!1;let h=sn(o.currentLocation.pathname,r)||o.currentLocation.pathname,g=sn(o.nextLocation.pathname,r)||o.nextLocation.pathname;return ji(d.pathname,g)!=null||ji(d.pathname,h)!=null}var re=function(){return re=Object.assign||function(c){for(var o,r=1,d=arguments.length;r<d;r++){o=arguments[r];for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(c[h]=o[h])}return c},re.apply(this,arguments)};function qi(u,c,o){if(o||arguments.length===2)for(var r=0,d=c.length,h;r<d;r++)(h||!(r in c))&&(h||(h=Array.prototype.slice.call(c,0,r)),h[r]=c[r]);return u.concat(h||Array.prototype.slice.call(c))}var Rt="-ms-",lu="-moz-",yt="-webkit-",Om="comm",Xi="rule",qf="decl",I1="@import",_m="@keyframes",tg="@layer",Mm=Math.abs,Hf=String.fromCharCode,Ef=Object.assign;function eg(u,c){return Kt(u,0)^45?(((c<<2^Kt(u,0))<<2^Kt(u,1))<<2^Kt(u,2))<<2^Kt(u,3):0}function Dm(u){return u.trim()}function fn(u,c){return(u=c.exec(u))?u[0]:u}function ut(u,c,o){return u.replace(c,o)}function Di(u,c,o){return u.indexOf(c,o)}function Kt(u,c){return u.charCodeAt(c)|0}function kl(u,c,o){return u.slice(c,o)}function Ge(u){return u.length}function Nm(u){return u.length}function nu(u,c){return c.push(u),u}function ng(u,c){return u.map(c).join("")}function $h(u,c){return u.filter(function(o){return!fn(o,c)})}var Qi=1,$l=1,wm=0,Me=0,qt=0,ea="";function Zi(u,c,o,r,d,h,g,T){return{value:u,root:c,parent:o,type:r,props:d,children:h,line:Qi,column:$l,length:g,return:"",siblings:T}}function Hn(u,c){return Ef(Zi("",null,null,"",null,null,0,u.siblings),u,{length:-u.length},c)}function Kl(u){for(;u.root;)u=Hn(u.root,{children:[u]});nu(u,u.siblings)}function lg(){return qt}function ag(){return qt=Me>0?Kt(ea,--Me):0,$l--,qt===10&&($l=1,Qi--),qt}function Ue(){return qt=Me<wm?Kt(ea,Me++):0,$l++,qt===10&&($l=1,Qi++),qt}function al(){return Kt(ea,Me)}function Ni(){return Me}function Vi(u,c){return kl(ea,u,c)}function zf(u){switch(u){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ug(u){return Qi=$l=1,wm=Ge(ea=u),Me=0,[]}function ig(u){return ea="",u}function yf(u){return Dm(Vi(Me-1,Af(u===91?u+2:u===40?u+1:u)))}function cg(u){for(;(qt=al())&&qt<33;)Ue();return zf(u)>2||zf(qt)>3?"":" "}function rg(u,c){for(;--c&&Ue()&&!(qt<48||qt>102||qt>57&&qt<65||qt>70&&qt<97););return Vi(u,Ni()+(c<6&&al()==32&&Ue()==32))}function Af(u){for(;Ue();)switch(qt){case u:return Me;case 34:case 39:u!==34&&u!==39&&Af(qt);break;case 40:u===41&&Af(u);break;case 92:Ue();break}return Me}function fg(u,c){for(;Ue()&&u+qt!==57;)if(u+qt===84&&al()===47)break;return"/*"+Vi(c,Me-1)+"*"+Hf(u===47?u:Ue())}function og(u){for(;!zf(al());)Ue();return Vi(u,Me)}function sg(u){return ig(wi("",null,null,null,[""],u=ug(u),0,[0],u))}function wi(u,c,o,r,d,h,g,T,v){for(var m=0,z=0,w=g,j=0,H=0,B=0,G=1,Q=1,q=1,k=0,Z="",nt=d,V=h,lt=r,$=Z;Q;)switch(B=k,k=Ue()){case 40:if(B!=108&&Kt($,w-1)==58){Di($+=ut(yf(k),"&","&\f"),"&\f",Mm(m?T[m-1]:0))!=-1&&(q=-1);break}case 34:case 39:case 91:$+=yf(k);break;case 9:case 10:case 13:case 32:$+=cg(B);break;case 92:$+=rg(Ni()-1,7);continue;case 47:switch(al()){case 42:case 47:nu(dg(fg(Ue(),Ni()),c,o,v),v);break;default:$+="/"}break;case 123*G:T[m++]=Ge($)*q;case 125*G:case 59:case 0:switch(k){case 0:case 125:Q=0;case 59+z:q==-1&&($=ut($,/\f/g,"")),H>0&&Ge($)-w&&nu(H>32?Fh($+";",r,o,w-1,v):Fh(ut($," ","")+";",r,o,w-2,v),v);break;case 59:$+=";";default:if(nu(lt=Wh($,c,o,m,z,d,T,Z,nt=[],V=[],w,h),h),k===123)if(z===0)wi($,c,lt,lt,nt,h,w,T,V);else switch(j===99&&Kt($,3)===110?100:j){case 100:case 108:case 109:case 115:wi(u,lt,lt,r&&nu(Wh(u,lt,lt,0,0,d,T,Z,d,nt=[],w,V),V),d,V,w,T,r?nt:V);break;default:wi($,lt,lt,lt,[""],V,0,T,V)}}m=z=H=0,G=q=1,Z=$="",w=g;break;case 58:w=1+Ge($),H=B;default:if(G<1){if(k==123)--G;else if(k==125&&G++==0&&ag()==125)continue}switch($+=Hf(k),k*G){case 38:q=z>0?1:($+="\f",-1);break;case 44:T[m++]=(Ge($)-1)*q,q=1;break;case 64:al()===45&&($+=yf(Ue())),j=al(),z=w=Ge(Z=$+=og(Ni())),k++;break;case 45:B===45&&Ge($)==2&&(G=0)}}return h}function Wh(u,c,o,r,d,h,g,T,v,m,z,w){for(var j=d-1,H=d===0?h:[""],B=Nm(H),G=0,Q=0,q=0;G<r;++G)for(var k=0,Z=kl(u,j+1,j=Mm(Q=g[G])),nt=u;k<B;++k)(nt=Dm(Q>0?H[k]+" "+Z:ut(Z,/&\f/g,H[k])))&&(v[q++]=nt);return Zi(u,c,o,d===0?Xi:T,v,m,z,w)}function dg(u,c,o,r){return Zi(u,c,o,Om,Hf(lg()),kl(u,2,-2),0,r)}function Fh(u,c,o,r,d){return Zi(u,c,o,qf,kl(u,0,r),kl(u,r+1,-1),r,d)}function Um(u,c,o){switch(eg(u,c)){case 5103:return yt+"print-"+u+u;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return yt+u+u;case 4789:return lu+u+u;case 5349:case 4246:case 4810:case 6968:case 2756:return yt+u+lu+u+Rt+u+u;case 5936:switch(Kt(u,c+11)){case 114:return yt+u+Rt+ut(u,/[svh]\w+-[tblr]{2}/,"tb")+u;case 108:return yt+u+Rt+ut(u,/[svh]\w+-[tblr]{2}/,"tb-rl")+u;case 45:return yt+u+Rt+ut(u,/[svh]\w+-[tblr]{2}/,"lr")+u}case 6828:case 4268:case 2903:return yt+u+Rt+u+u;case 6165:return yt+u+Rt+"flex-"+u+u;case 5187:return yt+u+ut(u,/(\w+).+(:[^]+)/,yt+"box-$1$2"+Rt+"flex-$1$2")+u;case 5443:return yt+u+Rt+"flex-item-"+ut(u,/flex-|-self/g,"")+(fn(u,/flex-|baseline/)?"":Rt+"grid-row-"+ut(u,/flex-|-self/g,""))+u;case 4675:return yt+u+Rt+"flex-line-pack"+ut(u,/align-content|flex-|-self/g,"")+u;case 5548:return yt+u+Rt+ut(u,"shrink","negative")+u;case 5292:return yt+u+Rt+ut(u,"basis","preferred-size")+u;case 6060:return yt+"box-"+ut(u,"-grow","")+yt+u+Rt+ut(u,"grow","positive")+u;case 4554:return yt+ut(u,/([^-])(transform)/g,"$1"+yt+"$2")+u;case 6187:return ut(ut(ut(u,/(zoom-|grab)/,yt+"$1"),/(image-set)/,yt+"$1"),u,"")+u;case 5495:case 3959:return ut(u,/(image-set\([^]*)/,yt+"$1$`$1");case 4968:return ut(ut(u,/(.+:)(flex-)?(.*)/,yt+"box-pack:$3"+Rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+yt+u+u;case 4200:if(!fn(u,/flex-|baseline/))return Rt+"grid-column-align"+kl(u,c)+u;break;case 2592:case 3360:return Rt+ut(u,"template-","")+u;case 4384:case 3616:return o&&o.some(function(r,d){return c=d,fn(r.props,/grid-\w+-end/)})?~Di(u+(o=o[c].value),"span",0)?u:Rt+ut(u,"-start","")+u+Rt+"grid-row-span:"+(~Di(o,"span",0)?fn(o,/\d+/):+fn(o,/\d+/)-+fn(u,/\d+/))+";":Rt+ut(u,"-start","")+u;case 4896:case 4128:return o&&o.some(function(r){return fn(r.props,/grid-\w+-start/)})?u:Rt+ut(ut(u,"-end","-span"),"span ","")+u;case 4095:case 3583:case 4068:case 2532:return ut(u,/(.+)-inline(.+)/,yt+"$1$2")+u;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ge(u)-1-c>6)switch(Kt(u,c+1)){case 109:if(Kt(u,c+4)!==45)break;case 102:return ut(u,/(.+:)(.+)-([^]+)/,"$1"+yt+"$2-$3$1"+lu+(Kt(u,c+3)==108?"$3":"$2-$3"))+u;case 115:return~Di(u,"stretch",0)?Um(ut(u,"stretch","fill-available"),c,o)+u:u}break;case 5152:case 5920:return ut(u,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,d,h,g,T,v,m){return Rt+d+":"+h+m+(g?Rt+d+"-span:"+(T?v:+v-+h)+m:"")+u});case 4949:if(Kt(u,c+6)===121)return ut(u,":",":"+yt)+u;break;case 6444:switch(Kt(u,Kt(u,14)===45?18:11)){case 120:return ut(u,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+yt+(Kt(u,14)===45?"inline-":"")+"box$3$1"+yt+"$2$3$1"+Rt+"$2box$3")+u;case 100:return ut(u,":",":"+Rt)+u}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ut(u,"scroll-","scroll-snap-")+u}return u}function Hi(u,c){for(var o="",r=0;r<u.length;r++)o+=c(u[r],r,u,c)||"";return o}function hg(u,c,o,r){switch(u.type){case tg:if(u.children.length)break;case I1:case qf:return u.return=u.return||u.value;case Om:return"";case _m:return u.return=u.value+"{"+Hi(u.children,r)+"}";case Xi:if(!Ge(u.value=u.props.join(",")))return""}return Ge(o=Hi(u.children,r))?u.return=u.value+"{"+o+"}":""}function mg(u){var c=Nm(u);return function(o,r,d,h){for(var g="",T=0;T<c;T++)g+=u[T](o,r,d,h)||"";return g}}function pg(u){return function(c){c.root||(c=c.return)&&u(c)}}function yg(u,c,o,r){if(u.length>-1&&!u.return)switch(u.type){case qf:u.return=Um(u.value,u.length,o);return;case _m:return Hi([Hn(u,{value:ut(u.value,"@","@"+yt)})],r);case Xi:if(u.length)return ng(o=u.props,function(d){switch(fn(d,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Kl(Hn(u,{props:[ut(d,/:(read-\w+)/,":"+lu+"$1")]})),Kl(Hn(u,{props:[d]})),Ef(u,{props:$h(o,r)});break;case"::placeholder":Kl(Hn(u,{props:[ut(d,/:(plac\w+)/,":"+yt+"input-$1")]})),Kl(Hn(u,{props:[ut(d,/:(plac\w+)/,":"+lu+"$1")]})),Kl(Hn(u,{props:[ut(d,/:(plac\w+)/,Rt+"input-$1")]})),Kl(Hn(u,{props:[d]})),Ef(u,{props:$h(o,r)});break}return""})}}var gg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ve={},Wl=typeof process<"u"&&ve!==void 0&&(ve.REACT_APP_SC_ATTR||ve.SC_ATTR)||"data-styled",Cm="active",jm="data-styled-version",Ki="6.1.19",Bf=`/*!sc*/
`,Bi=typeof window<"u"&&typeof document<"u",vg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ve!==void 0&&ve.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ve.REACT_APP_SC_DISABLE_SPEEDY!==""?ve.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ve.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ve!==void 0&&ve.SC_DISABLE_SPEEDY!==void 0&&ve.SC_DISABLE_SPEEDY!==""&&ve.SC_DISABLE_SPEEDY!=="false"&&ve.SC_DISABLE_SPEEDY),Ji=Object.freeze([]),Fl=Object.freeze({});function bg(u,c,o){return o===void 0&&(o=Fl),u.theme!==o.theme&&u.theme||c||o.theme}var qm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Sg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xg=/(^-|-$)/g;function Ph(u){return u.replace(Sg,"-").replace(xg,"")}var Eg=/(a)(d)/gi,Ri=52,Ih=function(u){return String.fromCharCode(u+(u>25?39:97))};function Tf(u){var c,o="";for(c=Math.abs(u);c>Ri;c=c/Ri|0)o=Ih(c%Ri)+o;return(Ih(c%Ri)+o).replace(Eg,"$1-$2")}var gf,Hm=5381,Jl=function(u,c){for(var o=c.length;o;)u=33*u^c.charCodeAt(--o);return u},Bm=function(u){return Jl(Hm,u)};function zg(u){return Tf(Bm(u)>>>0)}function Ag(u){return u.displayName||u.name||"Component"}function vf(u){return typeof u=="string"&&!0}var Ym=typeof Symbol=="function"&&Symbol.for,Gm=Ym?Symbol.for("react.memo"):60115,Tg=Ym?Symbol.for("react.forward_ref"):60112,Rg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Og={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_g=((gf={})[Tg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gf[Gm]=Lm,gf);function tm(u){return("type"in(c=u)&&c.type.$$typeof)===Gm?Lm:"$$typeof"in u?_g[u.$$typeof]:Rg;var c}var Mg=Object.defineProperty,Dg=Object.getOwnPropertyNames,em=Object.getOwnPropertySymbols,Ng=Object.getOwnPropertyDescriptor,wg=Object.getPrototypeOf,nm=Object.prototype;function Xm(u,c,o){if(typeof c!="string"){if(nm){var r=wg(c);r&&r!==nm&&Xm(u,r,o)}var d=Dg(c);em&&(d=d.concat(em(c)));for(var h=tm(u),g=tm(c),T=0;T<d.length;++T){var v=d[T];if(!(v in Og||o&&o[v]||g&&v in g||h&&v in h)){var m=Ng(c,v);try{Mg(u,v,m)}catch{}}}}return u}function Pl(u){return typeof u=="function"}function Yf(u){return typeof u=="object"&&"styledComponentId"in u}function ll(u,c){return u&&c?"".concat(u," ").concat(c):u||c||""}function lm(u,c){if(u.length===0)return"";for(var o=u[0],r=1;r<u.length;r++)o+=u[r];return o}function iu(u){return u!==null&&typeof u=="object"&&u.constructor.name===Object.name&&!("props"in u&&u.$$typeof)}function Rf(u,c,o){if(o===void 0&&(o=!1),!o&&!iu(u)&&!Array.isArray(u))return c;if(Array.isArray(c))for(var r=0;r<c.length;r++)u[r]=Rf(u[r],c[r]);else if(iu(c))for(var r in c)u[r]=Rf(u[r],c[r]);return u}function Gf(u,c){Object.defineProperty(u,"toString",{value:c})}function ou(u){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(u," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Ug=(function(){function u(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return u.prototype.indexOfGroup=function(c){for(var o=0,r=0;r<c;r++)o+=this.groupSizes[r];return o},u.prototype.insertRules=function(c,o){if(c>=this.groupSizes.length){for(var r=this.groupSizes,d=r.length,h=d;c>=h;)if((h<<=1)<0)throw ou(16,"".concat(c));this.groupSizes=new Uint32Array(h),this.groupSizes.set(r),this.length=h;for(var g=d;g<h;g++)this.groupSizes[g]=0}for(var T=this.indexOfGroup(c+1),v=(g=0,o.length);g<v;g++)this.tag.insertRule(T,o[g])&&(this.groupSizes[c]++,T++)},u.prototype.clearGroup=function(c){if(c<this.length){var o=this.groupSizes[c],r=this.indexOfGroup(c),d=r+o;this.groupSizes[c]=0;for(var h=r;h<d;h++)this.tag.deleteRule(r)}},u.prototype.getGroup=function(c){var o="";if(c>=this.length||this.groupSizes[c]===0)return o;for(var r=this.groupSizes[c],d=this.indexOfGroup(c),h=d+r,g=d;g<h;g++)o+="".concat(this.tag.getRule(g)).concat(Bf);return o},u})(),Ui=new Map,Yi=new Map,Ci=1,Oi=function(u){if(Ui.has(u))return Ui.get(u);for(;Yi.has(Ci);)Ci++;var c=Ci++;return Ui.set(u,c),Yi.set(c,u),c},Cg=function(u,c){Ci=c+1,Ui.set(u,c),Yi.set(c,u)},jg="style[".concat(Wl,"][").concat(jm,'="').concat(Ki,'"]'),qg=new RegExp("^".concat(Wl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Hg=function(u,c,o){for(var r,d=o.split(","),h=0,g=d.length;h<g;h++)(r=d[h])&&u.registerName(c,r)},Bg=function(u,c){for(var o,r=((o=c.textContent)!==null&&o!==void 0?o:"").split(Bf),d=[],h=0,g=r.length;h<g;h++){var T=r[h].trim();if(T){var v=T.match(qg);if(v){var m=0|parseInt(v[1],10),z=v[2];m!==0&&(Cg(z,m),Hg(u,z,v[3]),u.getTag().insertRules(m,d)),d.length=0}else d.push(T)}}},am=function(u){for(var c=document.querySelectorAll(jg),o=0,r=c.length;o<r;o++){var d=c[o];d&&d.getAttribute(Wl)!==Cm&&(Bg(u,d),d.parentNode&&d.parentNode.removeChild(d))}};function Yg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Qm=function(u){var c=document.head,o=u||c,r=document.createElement("style"),d=(function(T){var v=Array.from(T.querySelectorAll("style[".concat(Wl,"]")));return v[v.length-1]})(o),h=d!==void 0?d.nextSibling:null;r.setAttribute(Wl,Cm),r.setAttribute(jm,Ki);var g=Yg();return g&&r.setAttribute("nonce",g),o.insertBefore(r,h),r},Gg=(function(){function u(c){this.element=Qm(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){if(o.sheet)return o.sheet;for(var r=document.styleSheets,d=0,h=r.length;d<h;d++){var g=r[d];if(g.ownerNode===o)return g}throw ou(17)})(this.element),this.length=0}return u.prototype.insertRule=function(c,o){try{return this.sheet.insertRule(o,c),this.length++,!0}catch{return!1}},u.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},u.prototype.getRule=function(c){var o=this.sheet.cssRules[c];return o&&o.cssText?o.cssText:""},u})(),Lg=(function(){function u(c){this.element=Qm(c),this.nodes=this.element.childNodes,this.length=0}return u.prototype.insertRule=function(c,o){if(c<=this.length&&c>=0){var r=document.createTextNode(o);return this.element.insertBefore(r,this.nodes[c]||null),this.length++,!0}return!1},u.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},u.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},u})(),Xg=(function(){function u(c){this.rules=[],this.length=0}return u.prototype.insertRule=function(c,o){return c<=this.length&&(this.rules.splice(c,0,o),this.length++,!0)},u.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},u.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},u})(),um=Bi,Qg={isServer:!Bi,useCSSOMInjection:!vg},Zm=(function(){function u(c,o,r){c===void 0&&(c=Fl),o===void 0&&(o={});var d=this;this.options=re(re({},Qg),c),this.gs=o,this.names=new Map(r),this.server=!!c.isServer,!this.server&&Bi&&um&&(um=!1,am(this)),Gf(this,function(){return(function(h){for(var g=h.getTag(),T=g.length,v="",m=function(w){var j=(function(q){return Yi.get(q)})(w);if(j===void 0)return"continue";var H=h.names.get(j),B=g.getGroup(w);if(H===void 0||!H.size||B.length===0)return"continue";var G="".concat(Wl,".g").concat(w,'[id="').concat(j,'"]'),Q="";H!==void 0&&H.forEach(function(q){q.length>0&&(Q+="".concat(q,","))}),v+="".concat(B).concat(G,'{content:"').concat(Q,'"}').concat(Bf)},z=0;z<T;z++)m(z);return v})(d)})}return u.registerId=function(c){return Oi(c)},u.prototype.rehydrate=function(){!this.server&&Bi&&am(this)},u.prototype.reconstructWithOptions=function(c,o){return o===void 0&&(o=!0),new u(re(re({},this.options),c),this.gs,o&&this.names||void 0)},u.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},u.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(o){var r=o.useCSSOMInjection,d=o.target;return o.isServer?new Xg(d):r?new Gg(d):new Lg(d)})(this.options),new Ug(c)));var c},u.prototype.hasNameForId=function(c,o){return this.names.has(c)&&this.names.get(c).has(o)},u.prototype.registerName=function(c,o){if(Oi(c),this.names.has(c))this.names.get(c).add(o);else{var r=new Set;r.add(o),this.names.set(c,r)}},u.prototype.insertRules=function(c,o,r){this.registerName(c,o),this.getTag().insertRules(Oi(c),r)},u.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},u.prototype.clearRules=function(c){this.getTag().clearGroup(Oi(c)),this.clearNames(c)},u.prototype.clearTag=function(){this.tag=void 0},u})(),Zg=/&/g,Vg=/^\s*\/\/.*$/gm;function Vm(u,c){return u.map(function(o){return o.type==="rule"&&(o.value="".concat(c," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(c," ")),o.props=o.props.map(function(r){return"".concat(c," ").concat(r)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Vm(o.children,c)),o})}function Kg(u){var c,o,r,d=Fl,h=d.options,g=h===void 0?Fl:h,T=d.plugins,v=T===void 0?Ji:T,m=function(j,H,B){return B.startsWith(o)&&B.endsWith(o)&&B.replaceAll(o,"").length>0?".".concat(c):j},z=v.slice();z.push(function(j){j.type===Xi&&j.value.includes("&")&&(j.props[0]=j.props[0].replace(Zg,o).replace(r,m))}),g.prefix&&z.push(yg),z.push(hg);var w=function(j,H,B,G){H===void 0&&(H=""),B===void 0&&(B=""),G===void 0&&(G="&"),c=G,o=H,r=new RegExp("\\".concat(o,"\\b"),"g");var Q=j.replace(Vg,""),q=sg(B||H?"".concat(B," ").concat(H," { ").concat(Q," }"):Q);g.namespace&&(q=Vm(q,g.namespace));var k=[];return Hi(q,mg(z.concat(pg(function(Z){return k.push(Z)})))),k};return w.hash=v.length?v.reduce(function(j,H){return H.name||ou(15),Jl(j,H.name)},Hm).toString():"",w}var Jg=new Zm,Of=Kg(),Km=au.createContext({shouldForwardProp:void 0,styleSheet:Jg,stylis:Of});Km.Consumer;au.createContext(void 0);function im(){return N.useContext(Km)}var kg=(function(){function u(c,o){var r=this;this.inject=function(d,h){h===void 0&&(h=Of);var g=r.name+h.hash;d.hasNameForId(r.id,g)||d.insertRules(r.id,g,h(r.rules,g,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=o,Gf(this,function(){throw ou(12,String(r.name))})}return u.prototype.getName=function(c){return c===void 0&&(c=Of),this.name+c.hash},u})(),$g=function(u){return u>="A"&&u<="Z"};function cm(u){for(var c="",o=0;o<u.length;o++){var r=u[o];if(o===1&&r==="-"&&u[0]==="-")return u;$g(r)?c+="-"+r.toLowerCase():c+=r}return c.startsWith("ms-")?"-"+c:c}var Jm=function(u){return u==null||u===!1||u===""},km=function(u){var c,o,r=[];for(var d in u){var h=u[d];u.hasOwnProperty(d)&&!Jm(h)&&(Array.isArray(h)&&h.isCss||Pl(h)?r.push("".concat(cm(d),":"),h,";"):iu(h)?r.push.apply(r,qi(qi(["".concat(d," {")],km(h),!1),["}"],!1)):r.push("".concat(cm(d),": ").concat((c=d,(o=h)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||c in gg||c.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function ul(u,c,o,r){if(Jm(u))return[];if(Yf(u))return[".".concat(u.styledComponentId)];if(Pl(u)){if(!Pl(h=u)||h.prototype&&h.prototype.isReactComponent||!c)return[u];var d=u(c);return ul(d,c,o,r)}var h;return u instanceof kg?o?(u.inject(o,r),[u.getName(r)]):[u]:iu(u)?km(u):Array.isArray(u)?Array.prototype.concat.apply(Ji,u.map(function(g){return ul(g,c,o,r)})):[u.toString()]}function Wg(u){for(var c=0;c<u.length;c+=1){var o=u[c];if(Pl(o)&&!Yf(o))return!1}return!0}var Fg=Bm(Ki),Pg=(function(){function u(c,o,r){this.rules=c,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Wg(c),this.componentId=o,this.baseHash=Jl(Fg,o),this.baseStyle=r,Zm.registerId(o)}return u.prototype.generateAndInjectStyles=function(c,o,r){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,o,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=ll(d,this.staticRulesId);else{var h=lm(ul(this.rules,c,o,r)),g=Tf(Jl(this.baseHash,h)>>>0);if(!o.hasNameForId(this.componentId,g)){var T=r(h,".".concat(g),void 0,this.componentId);o.insertRules(this.componentId,g,T)}d=ll(d,g),this.staticRulesId=g}else{for(var v=Jl(this.baseHash,r.hash),m="",z=0;z<this.rules.length;z++){var w=this.rules[z];if(typeof w=="string")m+=w;else if(w){var j=lm(ul(w,c,o,r));v=Jl(v,j+z),m+=j}}if(m){var H=Tf(v>>>0);o.hasNameForId(this.componentId,H)||o.insertRules(this.componentId,H,r(m,".".concat(H),void 0,this.componentId)),d=ll(d,H)}}return d},u})(),$m=au.createContext(void 0);$m.Consumer;var bf={};function Ig(u,c,o){var r=Yf(u),d=u,h=!vf(u),g=c.attrs,T=g===void 0?Ji:g,v=c.componentId,m=v===void 0?(function(nt,V){var lt=typeof nt!="string"?"sc":Ph(nt);bf[lt]=(bf[lt]||0)+1;var $="".concat(lt,"-").concat(zg(Ki+lt+bf[lt]));return V?"".concat(V,"-").concat($):$})(c.displayName,c.parentComponentId):v,z=c.displayName,w=z===void 0?(function(nt){return vf(nt)?"styled.".concat(nt):"Styled(".concat(Ag(nt),")")})(u):z,j=c.displayName&&c.componentId?"".concat(Ph(c.displayName),"-").concat(c.componentId):c.componentId||m,H=r&&d.attrs?d.attrs.concat(T).filter(Boolean):T,B=c.shouldForwardProp;if(r&&d.shouldForwardProp){var G=d.shouldForwardProp;if(c.shouldForwardProp){var Q=c.shouldForwardProp;B=function(nt,V){return G(nt,V)&&Q(nt,V)}}else B=G}var q=new Pg(o,j,r?d.componentStyle:void 0);function k(nt,V){return(function(lt,$,Tt){var Et=lt.attrs,te=lt.componentStyle,ne=lt.defaultProps,Yt=lt.foldedComponentIds,Ze=lt.styledComponentId,Ve=lt.target,Gt=au.useContext($m),O=im(),L=lt.shouldForwardProp||O.shouldForwardProp,F=bg($,Gt,ne)||Fl,rt=(function(ft,I,Lt){for(var pt,Wt=re(re({},I),{className:void 0,theme:Lt}),Bn=0;Bn<ft.length;Bn+=1){var Ke=Pl(pt=ft[Bn])?pt(Wt):pt;for(var be in Ke)Wt[be]=be==="className"?ll(Wt[be],Ke[be]):be==="style"?re(re({},Wt[be]),Ke[be]):Ke[be]}return I.className&&(Wt.className=ll(Wt.className,I.className)),Wt})(Et,$,F),y=rt.as||Ve,C={};for(var Y in rt)rt[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&rt.theme===F||(Y==="forwardedAs"?C.as=rt.forwardedAs:L&&!L(Y,y)||(C[Y]=rt[Y]));var X=(function(ft,I){var Lt=im(),pt=ft.generateAndInjectStyles(I,Lt.styleSheet,Lt.stylis);return pt})(te,rt),W=ll(Yt,Ze);return X&&(W+=" "+X),rt.className&&(W+=" "+rt.className),C[vf(y)&&!qm.has(y)?"class":"className"]=W,Tt&&(C.ref=Tt),N.createElement(y,C)})(Z,nt,V)}k.displayName=w;var Z=au.forwardRef(k);return Z.attrs=H,Z.componentStyle=q,Z.displayName=w,Z.shouldForwardProp=B,Z.foldedComponentIds=r?ll(d.foldedComponentIds,d.styledComponentId):"",Z.styledComponentId=j,Z.target=r?d.target:u,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(nt){this._foldedDefaultProps=r?(function(V){for(var lt=[],$=1;$<arguments.length;$++)lt[$-1]=arguments[$];for(var Tt=0,Et=lt;Tt<Et.length;Tt++)Rf(V,Et[Tt],!0);return V})({},d.defaultProps,nt):nt}}),Gf(Z,function(){return".".concat(Z.styledComponentId)}),h&&Xm(Z,u,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function rm(u,c){for(var o=[u[0]],r=0,d=c.length;r<d;r+=1)o.push(c[r],u[r+1]);return o}var fm=function(u){return Object.assign(u,{isCss:!0})};function tv(u){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];if(Pl(u)||iu(u))return fm(ul(rm(Ji,qi([u],c,!0))));var r=u;return c.length===0&&r.length===1&&typeof r[0]=="string"?ul(r):fm(ul(rm(r,c)))}function _f(u,c,o){if(o===void 0&&(o=Fl),!c)throw ou(1,c);var r=function(d){for(var h=[],g=1;g<arguments.length;g++)h[g-1]=arguments[g];return u(c,o,tv.apply(void 0,qi([d],h,!1)))};return r.attrs=function(d){return _f(u,c,re(re({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},r.withConfig=function(d){return _f(u,c,re(re({},o),d))},r}var Wm=function(u){return _f(Ig,u)},Qe=Wm;qm.forEach(function(u){Qe[u]=Wm(u)});const ev=Qe.div`
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
`;function nv(){return D.jsx(ev,{children:D.jsxs("section",{className:"content-section",children:[D.jsx("p",{className:"text1",children:"Quer assistir? Informe seu email para criar ou reiniciar sua assinatura."}),D.jsxs("div",{className:"content-controls",children:[D.jsx("input",{type:"text",placeholder:"Email"}),D.jsxs("button",{children:["Vamos Lá ",D.jsx("span",{children:">"})," "]})]}),D.jsx("div",{className:"doubt-container",children:D.jsxs("p",{className:"doubt",children:["Dúvidas? Ligue para ",D.jsx("span",{children:"0800 591 2876"})]})}),D.jsxs("div",{className:"p1",children:[D.jsx("p",{children:"Perguntas Frequentes"}),D.jsx("p",{children:"Central de Ajuda"}),D.jsx("p",{children:"Conta"}),D.jsx("p",{children:"Media Center"})]}),D.jsxs("div",{className:"p2",children:[D.jsx("p",{children:"Relações com Investidores"}),D.jsx("p",{children:"Carreiras"}),D.jsx("p",{children:"Resgatar cartão pré-pago"}),D.jsx("p",{children:"Comprar cartão pré-pago"})]}),D.jsxs("div",{className:"p3",children:[D.jsx("p",{children:"Formas de assistir"}),D.jsx("p",{children:"Termos de Uso"}),D.jsx("p",{children:"Privacidade"}),D.jsx("p",{children:"Preferências de cookies"})]}),D.jsxs("div",{className:"p4",children:[D.jsx("p",{children:"Informações corporativas"}),D.jsx("p",{children:"Entre em contato"}),D.jsx("p",{children:"Teste de velocidade"}),D.jsx("p",{children:"Avisos legais"})]}),D.jsx("div",{className:"p5",children:D.jsx("p",{children:"Só na Netflix"})}),D.jsxs("div",{className:"final",children:[D.jsxs("select",{children:[D.jsx("option",{value:"portugues",children:"Português"}),D.jsx("option",{value:"ingles",children:"Inglês"})]}),D.jsx("p",{children:"Netflix Brasil"})]})]})})}const lv=Qe.div`
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
`,av="/Movies-ReactJS/assets/Logonetflix-cJzkA86F.png";function uv(){return D.jsxs(lv,{children:[D.jsx("img",{src:av,alt:"Logo da Netflix"}),D.jsxs("div",{className:"user-controls",children:[D.jsxs("select",{children:[D.jsx("option",{value:"portugues",children:"Português"}),D.jsx("option",{value:"ingles",children:"Inglês"})]}),D.jsx("button",{children:"Entrar"})]})]})}const iv="/Movies-ReactJS/assets/background-G0Np5zM9.jpg",cv=Qe.div`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  width: 100%;
  height: 100vh;
  background-image: url(${iv});
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
  
  `;function rv(){return D.jsx(D.Fragment,{children:D.jsxs(cv,{children:[D.jsx(uv,{}),D.jsxs("section",{className:"content-section",children:[D.jsx("h1",{children:"Filmes, Séries e muito mais, sem limites"}),D.jsx("p",{children:"Assista onde quiser. Cancele quando quiser"}),D.jsx("p",{className:"p2",children:"Quer assistir? Informe seu email para criar ou reiniciar sua assinatura."}),D.jsxs("div",{className:"controls",children:[D.jsx("input",{type:"text",placeholder:"Email"}),D.jsxs("button",{children:["Vamos Lá ",D.jsx("span",{children:">"})]})]})]})]})})}const fv=Qe.div`
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
`,ov="/Movies-ReactJS/assets/pipoca-C290b5xr.png";function sv(){return D.jsx(fv,{children:D.jsxs("section",{className:"content-section",children:[D.jsx("img",{src:ov,alt:"Imagem da pipoca"}),D.jsxs("div",{className:"content",children:[D.jsx("h2",{children:"A Netflix que você adora por apenas R$ 20,90."}),D.jsx("p",{children:"Assine o plano Padrão com anúncios."}),D.jsx(jf,{to:"/",children:" Saiba Mais > "})]})]})})}const dv=Qe.div`
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
`,hv="/Movies-ReactJS/assets/tv-netflix-BWLwypTF.png";function mv(){return D.jsx(dv,{children:D.jsxs("div",{className:"content-section",children:[D.jsxs("div",{className:"text",children:[D.jsx("h2",{children:"Aproveite na tv"}),D.jsx("p",{children:"Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."})]}),D.jsx("img",{src:hv,alt:"Versão TV"})]})})}const pv=Qe.div`
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
`,yv="/Movies-ReactJS/assets/dispositivos-Yv656wfi.png";function gv(){return D.jsx(pv,{children:D.jsxs("div",{className:"content-section",children:[D.jsx("img",{src:yv,alt:"Mobile"}),D.jsxs("div",{className:"text",children:[D.jsx("h2",{children:"Assista onde quiser"}),D.jsx("p",{children:"Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV."})]})]})})}const vv=Qe.div`
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
`,bv="/Movies-ReactJS/assets/kids-DbAjh5sn.png";function Sv(){return D.jsx(vv,{children:D.jsxs("div",{className:"content-section",children:[D.jsxs("div",{className:"text",children:[D.jsx("h2",{children:"Crie perfis para crianças"}),D.jsx("p",{children:"Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."})]}),D.jsx("img",{src:bv,alt:"Mobile"})]})})}const xv=Qe.div`
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
`,Ev="/Movies-ReactJS/assets/movel-A3IsfRxB.png";function zv(){return D.jsx(xv,{children:D.jsxs("div",{className:"content-section",children:[D.jsx("img",{src:Ev,alt:"Mobile"}),D.jsxs("div",{className:"text",children:[D.jsx("h2",{children:"Baixe séries para assistir offline"}),D.jsx("p",{children:"Assista em um avião, trem ou submarino..."})]})]})})}const Av=Qe.div`
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
`;function Tv(){const[u,c]=N.useState(null),o=d=>{c(u===d?null:d)},r=[{question:"O que é Netflix?",answer:"A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes."},{question:"Quanto custa a Netflix?",answer:"Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 20,90 a R$ 59,90 por mês. Sem contrato nem taxas extras."},{question:"Onde posso assistir?",answer:"Assista onde quiser, quando quiser. Acesse sua conta Netflix em netflix.com para assistir no computador ou em qualquer aparelho conectado à internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. Leve a Netflix com você para qualquer lugar."},{question:"Como faço para cancelar?",answer:"A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento."},{question:"O que eu posso assistir na Netflix?",answer:"A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser."},{question:"A Netflix é adequada para crianças?",answer:"A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis. O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam."}];return D.jsx(Av,{children:D.jsxs("div",{className:"content-section",children:[D.jsx("h3",{children:"Perguntas frequentes"}),D.jsx("div",{className:"cards",children:r.map((d,h)=>D.jsxs("div",{className:`faq-item ${u===h?"active":""}`,onClick:()=>o(h),children:[D.jsxs("div",{className:"faq-header",children:[D.jsx("p",{children:d.question}),D.jsx("span",{children:u===h?"−":"+"})]}),u===h&&D.jsx("div",{className:"faq-answer",children:D.jsx("p",{children:d.answer})})]},h))})]})})}function Rv(){return D.jsxs(D.Fragment,{children:[D.jsx(rv,{}),D.jsx(sv,{}),D.jsx(mv,{}),D.jsx(gv,{}),D.jsx(Sv,{}),D.jsx(zv,{}),D.jsx(Tv,{}),D.jsx(nv,{})]})}function Ov(){return D.jsx(D.Fragment,{children:D.jsx(Q1,{basename:"/Movies-ReactJS",children:D.jsx(S1,{children:D.jsx(xm,{path:"/",element:D.jsx(Rv,{})})})})})}My.createRoot(document.getElementById("root")).render(D.jsx(N.StrictMode,{children:D.jsx(Ov,{})}));
