(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&r(y)}).observe(document,{childList:!0,subtree:!0});function f(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(d){if(d.ep)return;d.ep=!0;const h=f(d);fetch(d.href,h)}})();function Eg(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var co={exports:{}},Ia={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function zg(){if(qh)return Ia;qh=1;var u=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(r,d,h){var y=null;if(h!==void 0&&(y=""+h),d.key!==void 0&&(y=""+d.key),"key"in d){h={};for(var R in d)R!=="key"&&(h[R]=d[R])}else h=d;return d=h.ref,{$$typeof:u,type:r,key:y,ref:d!==void 0?d:null,props:h}}return Ia.Fragment=c,Ia.jsx=f,Ia.jsxs=f,Ia}var Hh;function Ag(){return Hh||(Hh=1,co.exports=zg()),co.exports}var z=Ag(),ro={exports:{}},at={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function Tg(){if(Bh)return at;Bh=1;var u=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),y=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),N=Symbol.iterator;function C(g){return g===null||typeof g!="object"?null:(g=N&&g[N]||g["@@iterator"],typeof g=="function"?g:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,L={};function Q(g,U,Y){this.props=g,this.context=U,this.refs=L,this.updater=Y||H}Q.prototype.isReactComponent={},Q.prototype.setState=function(g,U){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,U,"setState")},Q.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function q(){}q.prototype=Q.prototype;function k(g,U,Y){this.props=g,this.context=U,this.refs=L,this.updater=Y||H}var Z=k.prototype=new q;Z.constructor=k,B(Z,Q.prototype),Z.isPureReactComponent=!0;var nt=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},lt=Object.prototype.hasOwnProperty;function $(g,U,Y,X,W,ot){return Y=ot.ref,{$$typeof:u,type:g,key:U,ref:Y!==void 0?Y:null,props:ot}}function Tt(g,U){return $(g.type,U,void 0,void 0,void 0,g.props)}function Et(g){return typeof g=="object"&&g!==null&&g.$$typeof===u}function te(g){var U={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(Y){return U[Y]})}var ne=/\/+/g;function Yt(g,U){return typeof g=="object"&&g!==null&&g.key!=null?te(""+g.key):U.toString(36)}function Ze(){}function Ve(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(Ze,Ze):(g.status="pending",g.then(function(U){g.status==="pending"&&(g.status="fulfilled",g.value=U)},function(U){g.status==="pending"&&(g.status="rejected",g.reason=U)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function Lt(g,U,Y,X,W){var ot=typeof g;(ot==="undefined"||ot==="boolean")&&(g=null);var I=!1;if(g===null)I=!0;else switch(ot){case"bigint":case"string":case"number":I=!0;break;case"object":switch(g.$$typeof){case u:case c:I=!0;break;case A:return I=g._init,Lt(I(g._payload),U,Y,X,W)}}if(I)return W=W(g),I=X===""?"."+Yt(g,0):X,nt(W)?(Y="",I!=null&&(Y=I.replace(ne,"$&/")+"/"),Lt(W,U,Y,"",function(Wt){return Wt})):W!=null&&(Et(W)&&(W=Tt(W,Y+(W.key==null||g&&g.key===W.key?"":(""+W.key).replace(ne,"$&/")+"/")+I)),U.push(W)),1;I=0;var Gt=X===""?".":X+":";if(nt(g))for(var pt=0;pt<g.length;pt++)X=g[pt],ot=Gt+Yt(X,pt),I+=Lt(X,U,Y,ot,W);else if(pt=C(g),typeof pt=="function")for(g=pt.call(g),pt=0;!(X=g.next()).done;)X=X.value,ot=Gt+Yt(X,pt++),I+=Lt(X,U,Y,ot,W);else if(ot==="object"){if(typeof g.then=="function")return Lt(Ve(g),U,Y,X,W);throw U=String(g),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return I}function w(g,U,Y){if(g==null)return g;var X=[],W=0;return Lt(g,X,"","",function(ot){return U.call(Y,ot,W++)}),X}function G(g){if(g._status===-1){var U=g._result;U=U(),U.then(function(Y){(g._status===0||g._status===-1)&&(g._status=1,g._result=Y)},function(Y){(g._status===0||g._status===-1)&&(g._status=2,g._result=Y)}),g._status===-1&&(g._status=0,g._result=U)}if(g._status===1)return g._result.default;throw g._result}var F=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function rt(){}return at.Children={map:w,forEach:function(g,U,Y){w(g,function(){U.apply(this,arguments)},Y)},count:function(g){var U=0;return w(g,function(){U++}),U},toArray:function(g){return w(g,function(U){return U})||[]},only:function(g){if(!Et(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},at.Component=Q,at.Fragment=f,at.Profiler=d,at.PureComponent=k,at.StrictMode=r,at.Suspense=v,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,at.__COMPILER_RUNTIME={__proto__:null,c:function(g){return V.H.useMemoCache(g)}},at.cache=function(g){return function(){return g.apply(null,arguments)}},at.cloneElement=function(g,U,Y){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var X=B({},g.props),W=g.key,ot=void 0;if(U!=null)for(I in U.ref!==void 0&&(ot=void 0),U.key!==void 0&&(W=""+U.key),U)!lt.call(U,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&U.ref===void 0||(X[I]=U[I]);var I=arguments.length-2;if(I===1)X.children=Y;else if(1<I){for(var Gt=Array(I),pt=0;pt<I;pt++)Gt[pt]=arguments[pt+2];X.children=Gt}return $(g.type,W,void 0,void 0,ot,X)},at.createContext=function(g){return g={$$typeof:y,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:h,_context:g},g},at.createElement=function(g,U,Y){var X,W={},ot=null;if(U!=null)for(X in U.key!==void 0&&(ot=""+U.key),U)lt.call(U,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(W[X]=U[X]);var I=arguments.length-2;if(I===1)W.children=Y;else if(1<I){for(var Gt=Array(I),pt=0;pt<I;pt++)Gt[pt]=arguments[pt+2];W.children=Gt}if(g&&g.defaultProps)for(X in I=g.defaultProps,I)W[X]===void 0&&(W[X]=I[X]);return $(g,ot,void 0,void 0,null,W)},at.createRef=function(){return{current:null}},at.forwardRef=function(g){return{$$typeof:R,render:g}},at.isValidElement=Et,at.lazy=function(g){return{$$typeof:A,_payload:{_status:-1,_result:g},_init:G}},at.memo=function(g,U){return{$$typeof:m,type:g,compare:U===void 0?null:U}},at.startTransition=function(g){var U=V.T,Y={};V.T=Y;try{var X=g(),W=V.S;W!==null&&W(Y,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(rt,F)}catch(ot){F(ot)}finally{V.T=U}},at.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},at.use=function(g){return V.H.use(g)},at.useActionState=function(g,U,Y){return V.H.useActionState(g,U,Y)},at.useCallback=function(g,U){return V.H.useCallback(g,U)},at.useContext=function(g){return V.H.useContext(g)},at.useDebugValue=function(){},at.useDeferredValue=function(g,U){return V.H.useDeferredValue(g,U)},at.useEffect=function(g,U,Y){var X=V.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(g,U)},at.useId=function(){return V.H.useId()},at.useImperativeHandle=function(g,U,Y){return V.H.useImperativeHandle(g,U,Y)},at.useInsertionEffect=function(g,U){return V.H.useInsertionEffect(g,U)},at.useLayoutEffect=function(g,U){return V.H.useLayoutEffect(g,U)},at.useMemo=function(g,U){return V.H.useMemo(g,U)},at.useOptimistic=function(g,U){return V.H.useOptimistic(g,U)},at.useReducer=function(g,U,Y){return V.H.useReducer(g,U,Y)},at.useRef=function(g){return V.H.useRef(g)},at.useState=function(g){return V.H.useState(g)},at.useSyncExternalStore=function(g,U,Y){return V.H.useSyncExternalStore(g,U,Y)},at.useTransition=function(){return V.H.useTransition()},at.version="19.1.1",at}var Yh;function Mo(){return Yh||(Yh=1,ro.exports=Tg()),ro.exports}var D=Mo();const au=Eg(D);var oo={exports:{}},tu={},fo={exports:{}},so={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh;function Rg(){return Lh||(Lh=1,(function(u){function c(w,G){var F=w.length;w.push(G);t:for(;0<F;){var rt=F-1>>>1,g=w[rt];if(0<d(g,G))w[rt]=G,w[F]=g,F=rt;else break t}}function f(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var G=w[0],F=w.pop();if(F!==G){w[0]=F;t:for(var rt=0,g=w.length,U=g>>>1;rt<U;){var Y=2*(rt+1)-1,X=w[Y],W=Y+1,ot=w[W];if(0>d(X,F))W<g&&0>d(ot,X)?(w[rt]=ot,w[W]=F,rt=W):(w[rt]=X,w[Y]=F,rt=Y);else if(W<g&&0>d(ot,F))w[rt]=ot,w[W]=F,rt=W;else break t}}return G}function d(w,G){var F=w.sortIndex-G.sortIndex;return F!==0?F:w.id-G.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var y=Date,R=y.now();u.unstable_now=function(){return y.now()-R}}var v=[],m=[],A=1,N=null,C=3,H=!1,B=!1,L=!1,Q=!1,q=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function nt(w){for(var G=f(m);G!==null;){if(G.callback===null)r(m);else if(G.startTime<=w)r(m),G.sortIndex=G.expirationTime,c(v,G);else break;G=f(m)}}function V(w){if(L=!1,nt(w),!B)if(f(v)!==null)B=!0,lt||(lt=!0,Yt());else{var G=f(m);G!==null&&Lt(V,G.startTime-w)}}var lt=!1,$=-1,Tt=5,Et=-1;function te(){return Q?!0:!(u.unstable_now()-Et<Tt)}function ne(){if(Q=!1,lt){var w=u.unstable_now();Et=w;var G=!0;try{t:{B=!1,L&&(L=!1,k($),$=-1),H=!0;var F=C;try{e:{for(nt(w),N=f(v);N!==null&&!(N.expirationTime>w&&te());){var rt=N.callback;if(typeof rt=="function"){N.callback=null,C=N.priorityLevel;var g=rt(N.expirationTime<=w);if(w=u.unstable_now(),typeof g=="function"){N.callback=g,nt(w),G=!0;break e}N===f(v)&&r(v),nt(w)}else r(v);N=f(v)}if(N!==null)G=!0;else{var U=f(m);U!==null&&Lt(V,U.startTime-w),G=!1}}break t}finally{N=null,C=F,H=!1}G=void 0}}finally{G?Yt():lt=!1}}}var Yt;if(typeof Z=="function")Yt=function(){Z(ne)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,Ve=Ze.port2;Ze.port1.onmessage=ne,Yt=function(){Ve.postMessage(null)}}else Yt=function(){q(ne,0)};function Lt(w,G){$=q(function(){w(u.unstable_now())},G)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(w){w.callback=null},u.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tt=0<w?Math.floor(1e3/w):5},u.unstable_getCurrentPriorityLevel=function(){return C},u.unstable_next=function(w){switch(C){case 1:case 2:case 3:var G=3;break;default:G=C}var F=C;C=G;try{return w()}finally{C=F}},u.unstable_requestPaint=function(){Q=!0},u.unstable_runWithPriority=function(w,G){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var F=C;C=w;try{return G()}finally{C=F}},u.unstable_scheduleCallback=function(w,G,F){var rt=u.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?rt+F:rt):F=rt,w){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=F+g,w={id:A++,callback:G,priorityLevel:w,startTime:F,expirationTime:g,sortIndex:-1},F>rt?(w.sortIndex=F,c(m,w),f(v)===null&&w===f(m)&&(L?(k($),$=-1):L=!0,Lt(V,F-rt))):(w.sortIndex=g,c(v,w),B||H||(B=!0,lt||(lt=!0,Yt()))),w},u.unstable_shouldYield=te,u.unstable_wrapCallback=function(w){var G=C;return function(){var F=C;C=G;try{return w.apply(this,arguments)}finally{C=F}}}})(so)),so}var Gh;function Og(){return Gh||(Gh=1,fo.exports=Rg()),fo.exports}var ho={exports:{}},It={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function wg(){if(Xh)return It;Xh=1;var u=Mo();function c(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)m+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var r={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(v,m,A){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:N==null?null:""+N,children:v,containerInfo:m,implementation:A}}var y=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function R(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,It.createPortal=function(v,m){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(c(299));return h(v,m,null,A)},It.flushSync=function(v){var m=y.T,A=r.p;try{if(y.T=null,r.p=2,v)return v()}finally{y.T=m,r.p=A,r.d.f()}},It.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(v,m))},It.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},It.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var A=m.as,N=R(A,m.crossOrigin),C=typeof m.integrity=="string"?m.integrity:void 0,H=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;A==="style"?r.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:N,integrity:C,fetchPriority:H}):A==="script"&&r.d.X(v,{crossOrigin:N,integrity:C,fetchPriority:H,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},It.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var A=R(m.as,m.crossOrigin);r.d.M(v,{crossOrigin:A,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(v)},It.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var A=m.as,N=R(A,m.crossOrigin);r.d.L(v,A,{crossOrigin:N,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},It.preloadModule=function(v,m){if(typeof v=="string")if(m){var A=R(m.as,m.crossOrigin);r.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:A,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(v)},It.requestFormReset=function(v){r.d.r(v)},It.unstable_batchedUpdates=function(v,m){return v(m)},It.useFormState=function(v,m,A){return y.H.useFormState(v,m,A)},It.useFormStatus=function(){return y.H.useHostTransitionStatus()},It.version="19.1.1",It}var Qh;function _g(){if(Qh)return ho.exports;Qh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(c){console.error(c)}}return u(),ho.exports=wg(),ho.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh;function Mg(){if(Zh)return tu;Zh=1;var u=Og(),c=Mo(),f=_g();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function y(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function R(t){if(h(t)!==t)throw Error(r(188))}function v(t){var e=t.alternate;if(!e){if(e=h(t),e===null)throw Error(r(188));return e!==t?null:t}for(var n=t,l=e;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return R(a),t;if(i===l)return R(a),e;i=i.sibling}throw Error(r(188))}if(n.return!==l.return)n=a,l=i;else{for(var o=!1,s=a.child;s;){if(s===n){o=!0,n=a,l=i;break}if(s===l){o=!0,l=a,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,l=a;break}if(s===l){o=!0,l=i,n=a;break}s=s.sibling}if(!o)throw Error(r(189))}}if(n.alternate!==l)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?t:e}function m(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=m(t),e!==null)return e;t=t.sibling}return null}var A=Object.assign,N=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),k=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),nt=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function Yt(t){return t===null||typeof t!="object"?null:(t=ne&&t[ne]||t["@@iterator"],typeof t=="function"?t:null)}var Ze=Symbol.for("react.client.reference");function Ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ze?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case Q:return"Profiler";case L:return"StrictMode";case V:return"Suspense";case lt:return"SuspenseList";case Et:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case H:return"Portal";case Z:return(t.displayName||"Context")+".Provider";case k:return(t._context.displayName||"Context")+".Consumer";case nt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return e=t.displayName||null,e!==null?e:Ve(t.type)||"Memo";case Tt:e=t._payload,t=t._init;try{return Ve(t(e))}catch{}}return null}var Lt=Array.isArray,w=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},rt=[],g=-1;function U(t){return{current:t}}function Y(t){0>g||(t.current=rt[g],rt[g]=null,g--)}function X(t,e){g++,rt[g]=t.current,t.current=e}var W=U(null),ot=U(null),I=U(null),Gt=U(null);function pt(t,e){switch(X(I,e),X(ot,t),X(W,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?fh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=fh(e),t=sh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(W),X(W,t)}function Wt(){Y(W),Y(ot),Y(I)}function Bn(t){t.memoizedState!==null&&X(Gt,t);var e=W.current,n=sh(e,t.type);e!==n&&(X(ot,t),X(W,n))}function Ke(t){ot.current===t&&(Y(W),Y(ot)),Gt.current===t&&(Y(Gt),ka._currentValue=F)}var xe=Object.prototype.hasOwnProperty,ki=u.unstable_scheduleCallback,$i=u.unstable_cancelCallback,t0=u.unstable_shouldYield,e0=u.unstable_requestPaint,Ce=u.unstable_now,n0=u.unstable_getCurrentPriorityLevel,Qo=u.unstable_ImmediatePriority,Zo=u.unstable_UserBlockingPriority,su=u.unstable_NormalPriority,l0=u.unstable_LowPriority,Vo=u.unstable_IdlePriority,a0=u.log,u0=u.unstable_setDisableYieldValue,na=null,oe=null;function hn(t){if(typeof a0=="function"&&u0(t),oe&&typeof oe.setStrictMode=="function")try{oe.setStrictMode(na,t)}catch{}}var fe=Math.clz32?Math.clz32:r0,i0=Math.log,c0=Math.LN2;function r0(t){return t>>>=0,t===0?32:31-(i0(t)/c0|0)|0}var du=256,hu=4194304;function Yn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mu(t,e,n){var l=t.pendingLanes;if(l===0)return 0;var a=0,i=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?a=Yn(l):(o&=s,o!==0?a=Yn(o):n||(n=s&~t,n!==0&&(a=Yn(n))))):(s=l&~i,s!==0?a=Yn(s):o!==0?a=Yn(o):n||(n=l&~t,n!==0&&(a=Yn(n)))),a===0?0:e!==0&&e!==a&&(e&i)===0&&(i=a&-a,n=e&-e,i>=n||i===32&&(n&4194048)!==0)?e:a}function la(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function o0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ko(){var t=du;return du<<=1,(du&4194048)===0&&(du=256),t}function Jo(){var t=hu;return hu<<=1,(hu&62914560)===0&&(hu=4194304),t}function Wi(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function aa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function f0(t,e,n,l,a,i){var o=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var s=t.entanglements,p=t.expirationTimes,E=t.hiddenUpdates;for(n=o&~n;0<n;){var _=31-fe(n),j=1<<_;s[_]=0,p[_]=-1;var T=E[_];if(T!==null)for(E[_]=null,_=0;_<T.length;_++){var O=T[_];O!==null&&(O.lane&=-536870913)}n&=~j}l!==0&&ko(t,l,0),i!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=i&~(o&~e))}function ko(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-fe(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|n&4194090}function $o(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var l=31-fe(n),a=1<<l;a&e|t[l]&e&&(t[l]|=e),n&=~a}}function Fi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Wo(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Mh(t.type))}function s0(t,e){var n=G.p;try{return G.p=t,e()}finally{G.p=n}}var mn=Math.random().toString(36).slice(2),Ft="__reactFiber$"+mn,le="__reactProps$"+mn,cl="__reactContainer$"+mn,Ii="__reactEvents$"+mn,d0="__reactListeners$"+mn,h0="__reactHandles$"+mn,Fo="__reactResources$"+mn,ua="__reactMarker$"+mn;function tc(t){delete t[Ft],delete t[le],delete t[Ii],delete t[d0],delete t[h0]}function rl(t){var e=t[Ft];if(e)return e;for(var n=t.parentNode;n;){if(e=n[cl]||n[Ft]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ph(t);t!==null;){if(n=t[Ft])return n;t=ph(t)}return e}t=n,n=t.parentNode}return null}function ol(t){if(t=t[Ft]||t[cl]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function ia(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function fl(t){var e=t[Fo];return e||(e=t[Fo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Xt(t){t[ua]=!0}var Po=new Set,Io={};function Ln(t,e){sl(t,e),sl(t+"Capture",e)}function sl(t,e){for(Io[t]=e,t=0;t<e.length;t++)Po.add(e[t])}var m0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tf={},ef={};function p0(t){return xe.call(ef,t)?!0:xe.call(tf,t)?!1:m0.test(t)?ef[t]=!0:(tf[t]=!0,!1)}function pu(t,e,n){if(p0(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function gu(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Je(t,e,n,l){if(l===null)t.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+l)}}var ec,nf;function dl(t){if(ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ec=e&&e[1]||"",nf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ec+t+nf}var nc=!1;function lc(t,e){if(!t||nc)return"";nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(O){var T=O}Reflect.construct(t,[],j)}else{try{j.call()}catch(O){T=O}t.call(j.prototype)}}else{try{throw Error()}catch(O){T=O}(j=t())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(O){if(O&&T&&typeof O.stack=="string")return[O.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],s=i[1];if(o&&s){var p=o.split(`
`),E=s.split(`
`);for(a=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;a<E.length&&!E[a].includes("DetermineComponentFrameRoot");)a++;if(l===p.length||a===E.length)for(l=p.length-1,a=E.length-1;1<=l&&0<=a&&p[l]!==E[a];)a--;for(;1<=l&&0<=a;l--,a--)if(p[l]!==E[a]){if(l!==1||a!==1)do if(l--,a--,0>a||p[l]!==E[a]){var _=`
`+p[l].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=l&&0<=a);break}}}finally{nc=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?dl(n):""}function g0(t){switch(t.tag){case 26:case 27:case 5:return dl(t.type);case 16:return dl("Lazy");case 13:return dl("Suspense");case 19:return dl("SuspenseList");case 0:case 15:return lc(t.type,!1);case 11:return lc(t.type.render,!1);case 1:return lc(t.type,!0);case 31:return dl("Activity");default:return""}}function lf(t){try{var e="";do e+=g0(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function af(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y0(t){var e=af(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),l=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(o){l=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yu(t){t._valueTracker||(t._valueTracker=y0(t))}function uf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),l="";return t&&(l=af(t)?t.checked?"true":"false":t.value),t=l,t!==n?(e.setValue(t),!0):!1}function vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var v0=/[\n"\\]/g;function Ee(t){return t.replace(v0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ac(t,e,n,l,a,i,o,s){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Se(e)):t.value!==""+Se(e)&&(t.value=""+Se(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?uc(t,o,Se(e)):n!=null?uc(t,o,Se(n)):l!=null&&t.removeAttribute("value"),a==null&&i!=null&&(t.defaultChecked=!!i),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Se(s):t.removeAttribute("name")}function cf(t,e,n,l,a,i,o,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;n=n!=null?""+Se(n):"",e=e!=null?""+Se(e):n,s||e===t.value||(t.value=e),t.defaultValue=e}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=s?t.checked:!!l,t.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o)}function uc(t,e,n){e==="number"&&vu(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function hl(t,e,n,l){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&l&&(t[n].defaultSelected=!0)}else{for(n=""+Se(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,l&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function rf(t,e,n){if(e!=null&&(e=""+Se(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Se(n):""}function of(t,e,n,l){if(e==null){if(l!=null){if(n!=null)throw Error(r(92));if(Lt(l)){if(1<l.length)throw Error(r(93));l=l[0]}n=l}n==null&&(n=""),e=n}n=Se(e),t.defaultValue=n,l=t.textContent,l===n&&l!==""&&l!==null&&(t.value=l)}function ml(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var b0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ff(t,e,n){var l=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,n):typeof n!="number"||n===0||b0.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function sf(t,e,n){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var a in e)l=e[a],e.hasOwnProperty(a)&&n[a]!==l&&ff(t,a,l)}else for(var i in e)e.hasOwnProperty(i)&&ff(t,i,e[i])}function ic(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var x0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),S0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bu(t){return S0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var cc=null;function rc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pl=null,gl=null;function df(t){var e=ol(t);if(e&&(t=e.stateNode)){var n=t[le]||null;t:switch(t=e.stateNode,e.type){case"input":if(ac(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ee(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var l=n[e];if(l!==t&&l.form===t.form){var a=l[le]||null;if(!a)throw Error(r(90));ac(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)l=n[e],l.form===t.form&&uf(l)}break t;case"textarea":rf(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&hl(t,!!n.multiple,e,!1)}}}var oc=!1;function hf(t,e,n){if(oc)return t(e,n);oc=!0;try{var l=t(e);return l}finally{if(oc=!1,(pl!==null||gl!==null)&&(ai(),pl&&(e=pl,t=gl,gl=pl=null,df(e),t)))for(e=0;e<t.length;e++)df(t[e])}}function ca(t,e){var n=t.stateNode;if(n===null)return null;var l=n[le]||null;if(l===null)return null;n=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(r(231,e,typeof n));return n}var ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fc=!1;if(ke)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){fc=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{fc=!1}var pn=null,sc=null,xu=null;function mf(){if(xu)return xu;var t,e=sc,n=e.length,l,a="value"in pn?pn.value:pn.textContent,i=a.length;for(t=0;t<n&&e[t]===a[t];t++);var o=n-t;for(l=1;l<=o&&e[n-l]===a[i-l];l++);return xu=a.slice(t,1<l?1-l:void 0)}function Su(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Eu(){return!0}function pf(){return!1}function ae(t){function e(n,l,a,i,o){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Eu:pf,this.isPropagationStopped=pf,this}return A(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eu)},persist:function(){},isPersistent:Eu}),e}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=ae(Gn),oa=A({},Gn,{view:0,detail:0}),E0=ae(oa),dc,hc,fa,Au=A({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fa&&(fa&&t.type==="mousemove"?(dc=t.screenX-fa.screenX,hc=t.screenY-fa.screenY):hc=dc=0,fa=t),dc)},movementY:function(t){return"movementY"in t?t.movementY:hc}}),gf=ae(Au),z0=A({},Au,{dataTransfer:0}),A0=ae(z0),T0=A({},oa,{relatedTarget:0}),mc=ae(T0),R0=A({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),O0=ae(R0),w0=A({},Gn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_0=ae(w0),M0=A({},Gn,{data:0}),yf=ae(M0),D0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=j0[t])?!!e[t]:!1}function pc(){return U0}var C0=A({},oa,{key:function(t){if(t.key){var e=D0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Su(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?N0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(t){return t.type==="keypress"?Su(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Su(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),q0=ae(C0),H0=A({},Au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vf=ae(H0),B0=A({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),Y0=ae(B0),L0=A({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),G0=ae(L0),X0=A({},Au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Q0=ae(X0),Z0=A({},Gn,{newState:0,oldState:0}),V0=ae(Z0),K0=[9,13,27,32],gc=ke&&"CompositionEvent"in window,sa=null;ke&&"documentMode"in document&&(sa=document.documentMode);var J0=ke&&"TextEvent"in window&&!sa,bf=ke&&(!gc||sa&&8<sa&&11>=sa),xf=" ",Sf=!1;function Ef(t,e){switch(t){case"keyup":return K0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yl=!1;function k0(t,e){switch(t){case"compositionend":return zf(e);case"keypress":return e.which!==32?null:(Sf=!0,xf);case"textInput":return t=e.data,t===xf&&Sf?null:t;default:return null}}function $0(t,e){if(yl)return t==="compositionend"||!gc&&Ef(t,e)?(t=mf(),xu=sc=pn=null,yl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bf&&e.locale!=="ko"?null:e.data;default:return null}}var W0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!W0[t.type]:e==="textarea"}function Tf(t,e,n,l){pl?gl?gl.push(l):gl=[l]:pl=l,e=fi(e,"onChange"),0<e.length&&(n=new zu("onChange","change",null,n,l),t.push({event:n,listeners:e}))}var da=null,ha=null;function F0(t){uh(t,0)}function Tu(t){var e=ia(t);if(uf(e))return t}function Rf(t,e){if(t==="change")return e}var Of=!1;if(ke){var yc;if(ke){var vc="oninput"in document;if(!vc){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),vc=typeof wf.oninput=="function"}yc=vc}else yc=!1;Of=yc&&(!document.documentMode||9<document.documentMode)}function _f(){da&&(da.detachEvent("onpropertychange",Mf),ha=da=null)}function Mf(t){if(t.propertyName==="value"&&Tu(ha)){var e=[];Tf(e,ha,t,rc(t)),hf(F0,e)}}function P0(t,e,n){t==="focusin"?(_f(),da=e,ha=n,da.attachEvent("onpropertychange",Mf)):t==="focusout"&&_f()}function I0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tu(ha)}function tp(t,e){if(t==="click")return Tu(e)}function ep(t,e){if(t==="input"||t==="change")return Tu(e)}function np(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var se=typeof Object.is=="function"?Object.is:np;function ma(t,e){if(se(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),l=Object.keys(e);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!xe.call(e,a)||!se(t[a],e[a]))return!1}return!0}function Df(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nf(t,e){var n=Df(t);t=0;for(var l;n;){if(n.nodeType===3){if(l=t+n.textContent.length,t<=e&&l>=e)return{node:n,offset:e-t};t=l}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Df(n)}}function jf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=vu(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vu(t.document)}return e}function bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var lp=ke&&"documentMode"in document&&11>=document.documentMode,vl=null,xc=null,pa=null,Sc=!1;function Cf(t,e,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sc||vl==null||vl!==vu(l)||(l=vl,"selectionStart"in l&&bc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),pa&&ma(pa,l)||(pa=l,l=fi(xc,"onSelect"),0<l.length&&(e=new zu("onSelect","select",null,e,n),t.push({event:e,listeners:l}),e.target=vl)))}function Xn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bl={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionrun:Xn("Transition","TransitionRun"),transitionstart:Xn("Transition","TransitionStart"),transitioncancel:Xn("Transition","TransitionCancel"),transitionend:Xn("Transition","TransitionEnd")},Ec={},qf={};ke&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete bl.animationend.animation,delete bl.animationiteration.animation,delete bl.animationstart.animation),"TransitionEvent"in window||delete bl.transitionend.transition);function Qn(t){if(Ec[t])return Ec[t];if(!bl[t])return t;var e=bl[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qf)return Ec[t]=e[n];return t}var Hf=Qn("animationend"),Bf=Qn("animationiteration"),Yf=Qn("animationstart"),ap=Qn("transitionrun"),up=Qn("transitionstart"),ip=Qn("transitioncancel"),Lf=Qn("transitionend"),Gf=new Map,zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zc.push("scrollEnd");function De(t,e){Gf.set(t,e),Ln(e,[t])}var Xf=new WeakMap;function ze(t,e){if(typeof t=="object"&&t!==null){var n=Xf.get(t);return n!==void 0?n:(e={value:t,source:e,stack:lf(e)},Xf.set(t,e),e)}return{value:t,source:e,stack:lf(e)}}var Ae=[],xl=0,Ac=0;function Ru(){for(var t=xl,e=Ac=xl=0;e<t;){var n=Ae[e];Ae[e++]=null;var l=Ae[e];Ae[e++]=null;var a=Ae[e];Ae[e++]=null;var i=Ae[e];if(Ae[e++]=null,l!==null&&a!==null){var o=l.pending;o===null?a.next=a:(a.next=o.next,o.next=a),l.pending=a}i!==0&&Qf(n,a,i)}}function Ou(t,e,n,l){Ae[xl++]=t,Ae[xl++]=e,Ae[xl++]=n,Ae[xl++]=l,Ac|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Tc(t,e,n,l){return Ou(t,e,n,l),wu(t)}function Sl(t,e){return Ou(t,null,null,e),wu(t)}function Qf(t,e,n){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=t.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(a=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,a&&e!==null&&(a=31-fe(n),t=i.hiddenUpdates,l=t[a],l===null?t[a]=[e]:l.push(e),e.lane=n|536870912),i):null}function wu(t){if(50<La)throw La=0,Dr=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var El={};function cp(t,e,n,l){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function de(t,e,n,l){return new cp(t,e,n,l)}function Rc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $e(t,e){var n=t.alternate;return n===null?(n=de(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Zf(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function _u(t,e,n,l,a,i){var o=0;if(l=t,typeof t=="function")Rc(t)&&(o=1);else if(typeof t=="string")o=og(t,n,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Et:return t=de(31,n,e,a),t.elementType=Et,t.lanes=i,t;case B:return Zn(n.children,a,i,e);case L:o=8,a|=24;break;case Q:return t=de(12,n,e,a|2),t.elementType=Q,t.lanes=i,t;case V:return t=de(13,n,e,a),t.elementType=V,t.lanes=i,t;case lt:return t=de(19,n,e,a),t.elementType=lt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case q:case Z:o=10;break t;case k:o=9;break t;case nt:o=11;break t;case $:o=14;break t;case Tt:o=16,l=null;break t}o=29,n=Error(r(130,t===null?"null":typeof t,"")),l=null}return e=de(o,n,e,a),e.elementType=t,e.type=l,e.lanes=i,e}function Zn(t,e,n,l){return t=de(7,t,l,e),t.lanes=n,t}function Oc(t,e,n){return t=de(6,t,null,e),t.lanes=n,t}function wc(t,e,n){return e=de(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var zl=[],Al=0,Mu=null,Du=0,Te=[],Re=0,Vn=null,We=1,Fe="";function Kn(t,e){zl[Al++]=Du,zl[Al++]=Mu,Mu=t,Du=e}function Vf(t,e,n){Te[Re++]=We,Te[Re++]=Fe,Te[Re++]=Vn,Vn=t;var l=We;t=Fe;var a=32-fe(l)-1;l&=~(1<<a),n+=1;var i=32-fe(e)+a;if(30<i){var o=a-a%5;i=(l&(1<<o)-1).toString(32),l>>=o,a-=o,We=1<<32-fe(e)+a|n<<a|l,Fe=i+t}else We=1<<i|n<<a|l,Fe=t}function _c(t){t.return!==null&&(Kn(t,1),Vf(t,1,0))}function Mc(t){for(;t===Mu;)Mu=zl[--Al],zl[Al]=null,Du=zl[--Al],zl[Al]=null;for(;t===Vn;)Vn=Te[--Re],Te[Re]=null,Fe=Te[--Re],Te[Re]=null,We=Te[--Re],Te[Re]=null}var ee=null,Mt=null,mt=!1,Jn=null,qe=!1,Dc=Error(r(519));function kn(t){var e=Error(r(418,""));throw va(ze(e,t)),Dc}function Kf(t){var e=t.stateNode,n=t.type,l=t.memoizedProps;switch(e[Ft]=t,e[le]=l,n){case"dialog":st("cancel",e),st("close",e);break;case"iframe":case"object":case"embed":st("load",e);break;case"video":case"audio":for(n=0;n<Xa.length;n++)st(Xa[n],e);break;case"source":st("error",e);break;case"img":case"image":case"link":st("error",e),st("load",e);break;case"details":st("toggle",e);break;case"input":st("invalid",e),cf(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),yu(e);break;case"select":st("invalid",e);break;case"textarea":st("invalid",e),of(e,l.value,l.defaultValue,l.children),yu(e)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||l.suppressHydrationWarning===!0||oh(e.textContent,n)?(l.popover!=null&&(st("beforetoggle",e),st("toggle",e)),l.onScroll!=null&&st("scroll",e),l.onScrollEnd!=null&&st("scrollend",e),l.onClick!=null&&(e.onclick=si),e=!0):e=!1,e||kn(t)}function Jf(t){for(ee=t.return;ee;)switch(ee.tag){case 5:case 13:qe=!1;return;case 27:case 3:qe=!0;return;default:ee=ee.return}}function ga(t){if(t!==ee)return!1;if(!mt)return Jf(t),mt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Jr(t.type,t.memoizedProps)),n=!n),n&&Mt&&kn(t),Jf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Mt=je(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Mt=null}}else e===27?(e=Mt,Dn(t.type)?(t=Fr,Fr=null,Mt=t):Mt=e):Mt=ee?je(t.stateNode.nextSibling):null;return!0}function ya(){Mt=ee=null,mt=!1}function kf(){var t=Jn;return t!==null&&(ce===null?ce=t:ce.push.apply(ce,t),Jn=null),t}function va(t){Jn===null?Jn=[t]:Jn.push(t)}var Nc=U(null),$n=null,Pe=null;function gn(t,e,n){X(Nc,e._currentValue),e._currentValue=n}function Ie(t){t._currentValue=Nc.current,Y(Nc)}function jc(t,e,n){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===n)break;t=t.return}}function Uc(t,e,n,l){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){var o=a.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=a;for(var p=0;p<e.length;p++)if(s.context===e[p]){i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),jc(i.return,n,t),l||(o=null);break t}i=s.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(r(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),jc(o,n,t),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function ba(t,e,n,l){t=null;for(var a=e,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(r(387));if(o=o.memoizedProps,o!==null){var s=a.type;se(a.pendingProps.value,o.value)||(t!==null?t.push(s):t=[s])}}else if(a===Gt.current){if(o=a.alternate,o===null)throw Error(r(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(ka):t=[ka])}a=a.return}t!==null&&Uc(e,t,n,l),e.flags|=262144}function Nu(t){for(t=t.firstContext;t!==null;){if(!se(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Wn(t){$n=t,Pe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pt(t){return $f($n,t)}function ju(t,e){return $n===null&&Wn(t),$f(t,e)}function $f(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Pe===null){if(t===null)throw Error(r(308));Pe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Pe=Pe.next=e;return n}var rp=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},op=u.unstable_scheduleCallback,fp=u.unstable_NormalPriority,Ht={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cc(){return{controller:new rp,data:new Map,refCount:0}}function xa(t){t.refCount--,t.refCount===0&&op(fp,function(){t.controller.abort()})}var Sa=null,qc=0,Tl=0,Rl=null;function sp(t,e){if(Sa===null){var n=Sa=[];qc=0,Tl=Br(),Rl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return qc++,e.then(Wf,Wf),e}function Wf(){if(--qc===0&&Sa!==null){Rl!==null&&(Rl.status="fulfilled");var t=Sa;Sa=null,Tl=0,Rl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function dp(t,e){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var Ff=w.S;w.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&sp(t,e),Ff!==null&&Ff(t,e)};var Fn=U(null);function Hc(){var t=Fn.current;return t!==null?t:At.pooledCache}function Uu(t,e){e===null?X(Fn,Fn.current):X(Fn,e.pool)}function Pf(){var t=Hc();return t===null?null:{parent:Ht._currentValue,pool:t}}var Ea=Error(r(460)),If=Error(r(474)),Cu=Error(r(542)),Bc={then:function(){}};function ts(t){return t=t.status,t==="fulfilled"||t==="rejected"}function qu(){}function es(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(qu,qu),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ls(t),t;default:if(typeof e.status=="string")e.then(qu,qu);else{if(t=At,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=l}},function(l){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ls(t),t}throw za=e,Ea}}var za=null;function ns(){if(za===null)throw Error(r(459));var t=za;return za=null,t}function ls(t){if(t===Ea||t===Cu)throw Error(r(483))}var yn=!1;function Yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function vn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function bn(t,e,n){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var a=l.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),l.pending=e,e=wu(t),Qf(t,null,n),e}return Ou(t,l,e,n),wu(t)}function Aa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,$o(t,n)}}function Gc(t,e){var n=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=e:i=i.next=e}else a=i=e;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Xc=!1;function Ta(){if(Xc){var t=Rl;if(t!==null)throw t}}function Ra(t,e,n,l){Xc=!1;var a=t.updateQueue;yn=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var p=s,E=p.next;p.next=null,o===null?i=E:o.next=E,o=p;var _=t.alternate;_!==null&&(_=_.updateQueue,s=_.lastBaseUpdate,s!==o&&(s===null?_.firstBaseUpdate=E:s.next=E,_.lastBaseUpdate=p))}if(i!==null){var j=a.baseState;o=0,_=E=p=null,s=i;do{var T=s.lane&-536870913,O=T!==s.lane;if(O?(dt&T)===T:(l&T)===T){T!==0&&T===Tl&&(Xc=!0),_!==null&&(_=_.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var et=t,P=s;T=e;var St=n;switch(P.tag){case 1:if(et=P.payload,typeof et=="function"){j=et.call(St,j,T);break t}j=et;break t;case 3:et.flags=et.flags&-65537|128;case 0:if(et=P.payload,T=typeof et=="function"?et.call(St,j,T):et,T==null)break t;j=A({},j,T);break t;case 2:yn=!0}}T=s.callback,T!==null&&(t.flags|=64,O&&(t.flags|=8192),O=a.callbacks,O===null?a.callbacks=[T]:O.push(T))}else O={lane:T,tag:s.tag,payload:s.payload,callback:s.callback,next:null},_===null?(E=_=O,p=j):_=_.next=O,o|=T;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;O=s,s=O.next,O.next=null,a.lastBaseUpdate=O,a.shared.pending=null}}while(!0);_===null&&(p=j),a.baseState=p,a.firstBaseUpdate=E,a.lastBaseUpdate=_,i===null&&(a.shared.lanes=0),On|=o,t.lanes=o,t.memoizedState=j}}function as(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function us(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)as(n[t],e)}var Ol=U(null),Hu=U(0);function is(t,e){t=cn,X(Hu,t),X(Ol,e),cn=t|e.baseLanes}function Qc(){X(Hu,cn),X(Ol,Ol.current)}function Zc(){cn=Hu.current,Y(Ol),Y(Hu)}var xn=0,it=null,bt=null,Ut=null,Bu=!1,wl=!1,Pn=!1,Yu=0,Oa=0,_l=null,hp=0;function Nt(){throw Error(r(321))}function Vc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!se(t[n],e[n]))return!1;return!0}function Kc(t,e,n,l,a,i){return xn=i,it=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,w.H=t===null||t.memoizedState===null?Qs:Zs,Pn=!1,i=n(l,a),Pn=!1,wl&&(i=rs(e,n,l,a)),cs(t),i}function cs(t){w.H=Vu;var e=bt!==null&&bt.next!==null;if(xn=0,Ut=bt=it=null,Bu=!1,Oa=0,_l=null,e)throw Error(r(300));t===null||Qt||(t=t.dependencies,t!==null&&Nu(t)&&(Qt=!0))}function rs(t,e,n,l){it=t;var a=0;do{if(wl&&(_l=null),Oa=0,wl=!1,25<=a)throw Error(r(301));if(a+=1,Ut=bt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}w.H=xp,i=e(n,l)}while(wl);return i}function mp(){var t=w.H,e=t.useState()[0];return e=typeof e.then=="function"?wa(e):e,t=t.useState()[0],(bt!==null?bt.memoizedState:null)!==t&&(it.flags|=1024),e}function Jc(){var t=Yu!==0;return Yu=0,t}function kc(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function $c(t){if(Bu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Bu=!1}xn=0,Ut=bt=it=null,wl=!1,Oa=Yu=0,_l=null}function ue(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?it.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Ct(){if(bt===null){var t=it.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ut===null?it.memoizedState:Ut.next;if(e!==null)Ut=e,bt=t;else{if(t===null)throw it.alternate===null?Error(r(467)):Error(r(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ut===null?it.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Wc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wa(t){var e=Oa;return Oa+=1,_l===null&&(_l=[]),t=es(_l,t,e),e=it,(Ut===null?e.memoizedState:Ut.next)===null&&(e=e.alternate,w.H=e===null||e.memoizedState===null?Qs:Zs),t}function Lu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return wa(t);if(t.$$typeof===Z)return Pt(t)}throw Error(r(438,String(t)))}function Fc(t){var e=null,n=it.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var l=it.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Wc(),it.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),l=0;l<t;l++)n[l]=te;return e.index++,n}function tn(t,e){return typeof e=="function"?e(t):e}function Gu(t){var e=Ct();return Pc(e,bt,t)}function Pc(t,e,n){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=n;var a=t.baseQueue,i=l.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}e.baseQueue=a=i,l.pending=null}if(i=t.baseState,a===null)t.memoizedState=i;else{e=a.next;var s=o=null,p=null,E=e,_=!1;do{var j=E.lane&-536870913;if(j!==E.lane?(dt&j)===j:(xn&j)===j){var T=E.revertLane;if(T===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),j===Tl&&(_=!0);else if((xn&T)===T){E=E.next,T===Tl&&(_=!0);continue}else j={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(s=p=j,o=i):p=p.next=j,it.lanes|=T,On|=T;j=E.action,Pn&&n(i,j),i=E.hasEagerState?E.eagerState:n(i,j)}else T={lane:j,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(s=p=T,o=i):p=p.next=T,it.lanes|=j,On|=j;E=E.next}while(E!==null&&E!==e);if(p===null?o=i:p.next=s,!se(i,t.memoizedState)&&(Qt=!0,_&&(n=Rl,n!==null)))throw n;t.memoizedState=i,t.baseState=o,t.baseQueue=p,l.lastRenderedState=i}return a===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Ic(t){var e=Ct(),n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=t;var l=n.dispatch,a=n.pending,i=e.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=t(i,o.action),o=o.next;while(o!==a);se(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,l]}function os(t,e,n){var l=it,a=Ct(),i=mt;if(i){if(n===void 0)throw Error(r(407));n=n()}else n=e();var o=!se((bt||a).memoizedState,n);o&&(a.memoizedState=n,Qt=!0),a=a.queue;var s=ds.bind(null,l,a,t);if(_a(2048,8,s,[t]),a.getSnapshot!==e||o||Ut!==null&&Ut.memoizedState.tag&1){if(l.flags|=2048,Ml(9,Xu(),ss.bind(null,l,a,n,e),null),At===null)throw Error(r(349));i||(xn&124)!==0||fs(l,e,n)}return n}function fs(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=it.updateQueue,e===null?(e=Wc(),it.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ss(t,e,n,l){e.value=n,e.getSnapshot=l,hs(e)&&ms(t)}function ds(t,e,n){return n(function(){hs(e)&&ms(t)})}function hs(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!se(t,n)}catch{return!0}}function ms(t){var e=Sl(t,2);e!==null&&ye(e,t,2)}function tr(t){var e=ue();if(typeof t=="function"){var n=t;if(t=n(),Pn){hn(!0);try{n()}finally{hn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:t},e}function ps(t,e,n,l){return t.baseState=n,Pc(t,bt,typeof l=="function"?l:tn)}function pp(t,e,n,l,a){if(Zu(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};w.T!==null?n(!0):i.isTransition=!1,l(i),n=e.pending,n===null?(i.next=e.pending=i,gs(e,i)):(i.next=n.next,e.pending=n.next=i)}}function gs(t,e){var n=e.action,l=e.payload,a=t.state;if(e.isTransition){var i=w.T,o={};w.T=o;try{var s=n(a,l),p=w.S;p!==null&&p(o,s),ys(t,e,s)}catch(E){er(t,e,E)}finally{w.T=i}}else try{i=n(a,l),ys(t,e,i)}catch(E){er(t,e,E)}}function ys(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){vs(t,e,l)},function(l){return er(t,e,l)}):vs(t,e,n)}function vs(t,e,n){e.status="fulfilled",e.value=n,bs(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,gs(t,n)))}function er(t,e,n){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=n,bs(e),e=e.next;while(e!==l)}t.action=null}function bs(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function xs(t,e){return e}function Ss(t,e){if(mt){var n=At.formState;if(n!==null){t:{var l=it;if(mt){if(Mt){e:{for(var a=Mt,i=qe;a.nodeType!==8;){if(!i){a=null;break e}if(a=je(a.nextSibling),a===null){a=null;break e}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Mt=je(a.nextSibling),l=a.data==="F!";break t}}kn(l)}l=!1}l&&(e=n[0])}}return n=ue(),n.memoizedState=n.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:e},n.queue=l,n=Ls.bind(null,it,l),l.dispatch=n,l=tr(!1),i=ir.bind(null,it,!1,l.queue),l=ue(),a={state:e,dispatch:null,action:t,pending:null},l.queue=a,n=pp.bind(null,it,a,i,n),a.dispatch=n,l.memoizedState=t,[e,n,!1]}function Es(t){var e=Ct();return zs(e,bt,t)}function zs(t,e,n){if(e=Pc(t,e,xs)[0],t=Gu(tn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=wa(e)}catch(o){throw o===Ea?Cu:o}else l=e;e=Ct();var a=e.queue,i=a.dispatch;return n!==e.memoizedState&&(it.flags|=2048,Ml(9,Xu(),gp.bind(null,a,n),null)),[l,i,t]}function gp(t,e){t.action=e}function As(t){var e=Ct(),n=bt;if(n!==null)return zs(e,n,t);Ct(),e=e.memoizedState,n=Ct();var l=n.queue.dispatch;return n.memoizedState=t,[e,l,!1]}function Ml(t,e,n,l){return t={tag:t,create:n,deps:l,inst:e,next:null},e=it.updateQueue,e===null&&(e=Wc(),it.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(l=n.next,n.next=t,t.next=l,e.lastEffect=t),t}function Xu(){return{destroy:void 0,resource:void 0}}function Ts(){return Ct().memoizedState}function Qu(t,e,n,l){var a=ue();l=l===void 0?null:l,it.flags|=t,a.memoizedState=Ml(1|e,Xu(),n,l)}function _a(t,e,n,l){var a=Ct();l=l===void 0?null:l;var i=a.memoizedState.inst;bt!==null&&l!==null&&Vc(l,bt.memoizedState.deps)?a.memoizedState=Ml(e,i,n,l):(it.flags|=t,a.memoizedState=Ml(1|e,i,n,l))}function Rs(t,e){Qu(8390656,8,t,e)}function Os(t,e){_a(2048,8,t,e)}function ws(t,e){return _a(4,2,t,e)}function _s(t,e){return _a(4,4,t,e)}function Ms(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ds(t,e,n){n=n!=null?n.concat([t]):null,_a(4,4,Ms.bind(null,e,t),n)}function nr(){}function Ns(t,e){var n=Ct();e=e===void 0?null:e;var l=n.memoizedState;return e!==null&&Vc(e,l[1])?l[0]:(n.memoizedState=[t,e],t)}function js(t,e){var n=Ct();e=e===void 0?null:e;var l=n.memoizedState;if(e!==null&&Vc(e,l[1]))return l[0];if(l=t(),Pn){hn(!0);try{t()}finally{hn(!1)}}return n.memoizedState=[l,e],l}function lr(t,e,n){return n===void 0||(xn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=qd(),it.lanes|=t,On|=t,n)}function Us(t,e,n,l){return se(n,e)?n:Ol.current!==null?(t=lr(t,n,l),se(t,e)||(Qt=!0),t):(xn&42)===0?(Qt=!0,t.memoizedState=n):(t=qd(),it.lanes|=t,On|=t,e)}function Cs(t,e,n,l,a){var i=G.p;G.p=i!==0&&8>i?i:8;var o=w.T,s={};w.T=s,ir(t,!1,e,n);try{var p=a(),E=w.S;if(E!==null&&E(s,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var _=dp(p,l);Ma(t,e,_,ge(t))}else Ma(t,e,l,ge(t))}catch(j){Ma(t,e,{then:function(){},status:"rejected",reason:j},ge())}finally{G.p=i,w.T=o}}function yp(){}function ar(t,e,n,l){if(t.tag!==5)throw Error(r(476));var a=qs(t).queue;Cs(t,a,e,F,n===null?yp:function(){return Hs(t),n(l)})}function qs(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:F},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Hs(t){var e=qs(t).next.queue;Ma(t,e,{},ge())}function ur(){return Pt(ka)}function Bs(){return Ct().memoizedState}function Ys(){return Ct().memoizedState}function vp(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ge();t=vn(n);var l=bn(e,t,n);l!==null&&(ye(l,e,n),Aa(l,e,n)),e={cache:Cc()},t.payload=e;return}e=e.return}}function bp(t,e,n){var l=ge();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Zu(t)?Gs(e,n):(n=Tc(t,e,n,l),n!==null&&(ye(n,t,l),Xs(n,e,l)))}function Ls(t,e,n){var l=ge();Ma(t,e,n,l)}function Ma(t,e,n,l){var a={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zu(t))Gs(e,a);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,s=i(o,n);if(a.hasEagerState=!0,a.eagerState=s,se(s,o))return Ou(t,e,a,0),At===null&&Ru(),!1}catch{}finally{}if(n=Tc(t,e,a,l),n!==null)return ye(n,t,l),Xs(n,e,l),!0}return!1}function ir(t,e,n,l){if(l={lane:2,revertLane:Br(),action:l,hasEagerState:!1,eagerState:null,next:null},Zu(t)){if(e)throw Error(r(479))}else e=Tc(t,n,l,2),e!==null&&ye(e,t,2)}function Zu(t){var e=t.alternate;return t===it||e!==null&&e===it}function Gs(t,e){wl=Bu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xs(t,e,n){if((n&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,$o(t,n)}}var Vu={readContext:Pt,use:Lu,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useLayoutEffect:Nt,useInsertionEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useSyncExternalStore:Nt,useId:Nt,useHostTransitionStatus:Nt,useFormState:Nt,useActionState:Nt,useOptimistic:Nt,useMemoCache:Nt,useCacheRefresh:Nt},Qs={readContext:Pt,use:Lu,useCallback:function(t,e){return ue().memoizedState=[t,e===void 0?null:e],t},useContext:Pt,useEffect:Rs,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Qu(4194308,4,Ms.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qu(4194308,4,t,e)},useInsertionEffect:function(t,e){Qu(4,2,t,e)},useMemo:function(t,e){var n=ue();e=e===void 0?null:e;var l=t();if(Pn){hn(!0);try{t()}finally{hn(!1)}}return n.memoizedState=[l,e],l},useReducer:function(t,e,n){var l=ue();if(n!==void 0){var a=n(e);if(Pn){hn(!0);try{n(e)}finally{hn(!1)}}}else a=e;return l.memoizedState=l.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},l.queue=t,t=t.dispatch=bp.bind(null,it,t),[l.memoizedState,t]},useRef:function(t){var e=ue();return t={current:t},e.memoizedState=t},useState:function(t){t=tr(t);var e=t.queue,n=Ls.bind(null,it,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:nr,useDeferredValue:function(t,e){var n=ue();return lr(n,t,e)},useTransition:function(){var t=tr(!1);return t=Cs.bind(null,it,t.queue,!0,!1),ue().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var l=it,a=ue();if(mt){if(n===void 0)throw Error(r(407));n=n()}else{if(n=e(),At===null)throw Error(r(349));(dt&124)!==0||fs(l,e,n)}a.memoizedState=n;var i={value:n,getSnapshot:e};return a.queue=i,Rs(ds.bind(null,l,i,t),[t]),l.flags|=2048,Ml(9,Xu(),ss.bind(null,l,i,n,e),null),n},useId:function(){var t=ue(),e=At.identifierPrefix;if(mt){var n=Fe,l=We;n=(l&~(1<<32-fe(l)-1)).toString(32)+n,e="«"+e+"R"+n,n=Yu++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=hp++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:ur,useFormState:Ss,useActionState:Ss,useOptimistic:function(t){var e=ue();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=ir.bind(null,it,!0,n),n.dispatch=e,[t,e]},useMemoCache:Fc,useCacheRefresh:function(){return ue().memoizedState=vp.bind(null,it)}},Zs={readContext:Pt,use:Lu,useCallback:Ns,useContext:Pt,useEffect:Os,useImperativeHandle:Ds,useInsertionEffect:ws,useLayoutEffect:_s,useMemo:js,useReducer:Gu,useRef:Ts,useState:function(){return Gu(tn)},useDebugValue:nr,useDeferredValue:function(t,e){var n=Ct();return Us(n,bt.memoizedState,t,e)},useTransition:function(){var t=Gu(tn)[0],e=Ct().memoizedState;return[typeof t=="boolean"?t:wa(t),e]},useSyncExternalStore:os,useId:Bs,useHostTransitionStatus:ur,useFormState:Es,useActionState:Es,useOptimistic:function(t,e){var n=Ct();return ps(n,bt,t,e)},useMemoCache:Fc,useCacheRefresh:Ys},xp={readContext:Pt,use:Lu,useCallback:Ns,useContext:Pt,useEffect:Os,useImperativeHandle:Ds,useInsertionEffect:ws,useLayoutEffect:_s,useMemo:js,useReducer:Ic,useRef:Ts,useState:function(){return Ic(tn)},useDebugValue:nr,useDeferredValue:function(t,e){var n=Ct();return bt===null?lr(n,t,e):Us(n,bt.memoizedState,t,e)},useTransition:function(){var t=Ic(tn)[0],e=Ct().memoizedState;return[typeof t=="boolean"?t:wa(t),e]},useSyncExternalStore:os,useId:Bs,useHostTransitionStatus:ur,useFormState:As,useActionState:As,useOptimistic:function(t,e){var n=Ct();return bt!==null?ps(n,bt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Fc,useCacheRefresh:Ys},Dl=null,Da=0;function Ku(t){var e=Da;return Da+=1,Dl===null&&(Dl=[]),es(Dl,t,e)}function Na(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ju(t,e){throw e.$$typeof===N?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Vs(t){var e=t._init;return e(t._payload)}function Ks(t){function e(x,b){if(t){var S=x.deletions;S===null?(x.deletions=[b],x.flags|=16):S.push(b)}}function n(x,b){if(!t)return null;for(;b!==null;)e(x,b),b=b.sibling;return null}function l(x){for(var b=new Map;x!==null;)x.key!==null?b.set(x.key,x):b.set(x.index,x),x=x.sibling;return b}function a(x,b){return x=$e(x,b),x.index=0,x.sibling=null,x}function i(x,b,S){return x.index=S,t?(S=x.alternate,S!==null?(S=S.index,S<b?(x.flags|=67108866,b):S):(x.flags|=67108866,b)):(x.flags|=1048576,b)}function o(x){return t&&x.alternate===null&&(x.flags|=67108866),x}function s(x,b,S,M){return b===null||b.tag!==6?(b=Oc(S,x.mode,M),b.return=x,b):(b=a(b,S),b.return=x,b)}function p(x,b,S,M){var K=S.type;return K===B?_(x,b,S.props.children,M,S.key):b!==null&&(b.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Tt&&Vs(K)===b.type)?(b=a(b,S.props),Na(b,S),b.return=x,b):(b=_u(S.type,S.key,S.props,null,x.mode,M),Na(b,S),b.return=x,b)}function E(x,b,S,M){return b===null||b.tag!==4||b.stateNode.containerInfo!==S.containerInfo||b.stateNode.implementation!==S.implementation?(b=wc(S,x.mode,M),b.return=x,b):(b=a(b,S.children||[]),b.return=x,b)}function _(x,b,S,M,K){return b===null||b.tag!==7?(b=Zn(S,x.mode,M,K),b.return=x,b):(b=a(b,S),b.return=x,b)}function j(x,b,S){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Oc(""+b,x.mode,S),b.return=x,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case C:return S=_u(b.type,b.key,b.props,null,x.mode,S),Na(S,b),S.return=x,S;case H:return b=wc(b,x.mode,S),b.return=x,b;case Tt:var M=b._init;return b=M(b._payload),j(x,b,S)}if(Lt(b)||Yt(b))return b=Zn(b,x.mode,S,null),b.return=x,b;if(typeof b.then=="function")return j(x,Ku(b),S);if(b.$$typeof===Z)return j(x,ju(x,b),S);Ju(x,b)}return null}function T(x,b,S,M){var K=b!==null?b.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return K!==null?null:s(x,b,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case C:return S.key===K?p(x,b,S,M):null;case H:return S.key===K?E(x,b,S,M):null;case Tt:return K=S._init,S=K(S._payload),T(x,b,S,M)}if(Lt(S)||Yt(S))return K!==null?null:_(x,b,S,M,null);if(typeof S.then=="function")return T(x,b,Ku(S),M);if(S.$$typeof===Z)return T(x,b,ju(x,S),M);Ju(x,S)}return null}function O(x,b,S,M,K){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return x=x.get(S)||null,s(b,x,""+M,K);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case C:return x=x.get(M.key===null?S:M.key)||null,p(b,x,M,K);case H:return x=x.get(M.key===null?S:M.key)||null,E(b,x,M,K);case Tt:var ct=M._init;return M=ct(M._payload),O(x,b,S,M,K)}if(Lt(M)||Yt(M))return x=x.get(S)||null,_(b,x,M,K,null);if(typeof M.then=="function")return O(x,b,S,Ku(M),K);if(M.$$typeof===Z)return O(x,b,S,ju(b,M),K);Ju(b,M)}return null}function et(x,b,S,M){for(var K=null,ct=null,J=b,tt=b=0,Vt=null;J!==null&&tt<S.length;tt++){J.index>tt?(Vt=J,J=null):Vt=J.sibling;var ht=T(x,J,S[tt],M);if(ht===null){J===null&&(J=Vt);break}t&&J&&ht.alternate===null&&e(x,J),b=i(ht,b,tt),ct===null?K=ht:ct.sibling=ht,ct=ht,J=Vt}if(tt===S.length)return n(x,J),mt&&Kn(x,tt),K;if(J===null){for(;tt<S.length;tt++)J=j(x,S[tt],M),J!==null&&(b=i(J,b,tt),ct===null?K=J:ct.sibling=J,ct=J);return mt&&Kn(x,tt),K}for(J=l(J);tt<S.length;tt++)Vt=O(J,x,tt,S[tt],M),Vt!==null&&(t&&Vt.alternate!==null&&J.delete(Vt.key===null?tt:Vt.key),b=i(Vt,b,tt),ct===null?K=Vt:ct.sibling=Vt,ct=Vt);return t&&J.forEach(function(qn){return e(x,qn)}),mt&&Kn(x,tt),K}function P(x,b,S,M){if(S==null)throw Error(r(151));for(var K=null,ct=null,J=b,tt=b=0,Vt=null,ht=S.next();J!==null&&!ht.done;tt++,ht=S.next()){J.index>tt?(Vt=J,J=null):Vt=J.sibling;var qn=T(x,J,ht.value,M);if(qn===null){J===null&&(J=Vt);break}t&&J&&qn.alternate===null&&e(x,J),b=i(qn,b,tt),ct===null?K=qn:ct.sibling=qn,ct=qn,J=Vt}if(ht.done)return n(x,J),mt&&Kn(x,tt),K;if(J===null){for(;!ht.done;tt++,ht=S.next())ht=j(x,ht.value,M),ht!==null&&(b=i(ht,b,tt),ct===null?K=ht:ct.sibling=ht,ct=ht);return mt&&Kn(x,tt),K}for(J=l(J);!ht.done;tt++,ht=S.next())ht=O(J,x,tt,ht.value,M),ht!==null&&(t&&ht.alternate!==null&&J.delete(ht.key===null?tt:ht.key),b=i(ht,b,tt),ct===null?K=ht:ct.sibling=ht,ct=ht);return t&&J.forEach(function(Sg){return e(x,Sg)}),mt&&Kn(x,tt),K}function St(x,b,S,M){if(typeof S=="object"&&S!==null&&S.type===B&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case C:t:{for(var K=S.key;b!==null;){if(b.key===K){if(K=S.type,K===B){if(b.tag===7){n(x,b.sibling),M=a(b,S.props.children),M.return=x,x=M;break t}}else if(b.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Tt&&Vs(K)===b.type){n(x,b.sibling),M=a(b,S.props),Na(M,S),M.return=x,x=M;break t}n(x,b);break}else e(x,b);b=b.sibling}S.type===B?(M=Zn(S.props.children,x.mode,M,S.key),M.return=x,x=M):(M=_u(S.type,S.key,S.props,null,x.mode,M),Na(M,S),M.return=x,x=M)}return o(x);case H:t:{for(K=S.key;b!==null;){if(b.key===K)if(b.tag===4&&b.stateNode.containerInfo===S.containerInfo&&b.stateNode.implementation===S.implementation){n(x,b.sibling),M=a(b,S.children||[]),M.return=x,x=M;break t}else{n(x,b);break}else e(x,b);b=b.sibling}M=wc(S,x.mode,M),M.return=x,x=M}return o(x);case Tt:return K=S._init,S=K(S._payload),St(x,b,S,M)}if(Lt(S))return et(x,b,S,M);if(Yt(S)){if(K=Yt(S),typeof K!="function")throw Error(r(150));return S=K.call(S),P(x,b,S,M)}if(typeof S.then=="function")return St(x,b,Ku(S),M);if(S.$$typeof===Z)return St(x,b,ju(x,S),M);Ju(x,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,b!==null&&b.tag===6?(n(x,b.sibling),M=a(b,S),M.return=x,x=M):(n(x,b),M=Oc(S,x.mode,M),M.return=x,x=M),o(x)):n(x,b)}return function(x,b,S,M){try{Da=0;var K=St(x,b,S,M);return Dl=null,K}catch(J){if(J===Ea||J===Cu)throw J;var ct=de(29,J,null,x.mode);return ct.lanes=M,ct.return=x,ct}finally{}}}var Nl=Ks(!0),Js=Ks(!1),Oe=U(null),He=null;function Sn(t){var e=t.alternate;X(Bt,Bt.current&1),X(Oe,t),He===null&&(e===null||Ol.current!==null||e.memoizedState!==null)&&(He=t)}function ks(t){if(t.tag===22){if(X(Bt,Bt.current),X(Oe,t),He===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(He=t)}}else En()}function En(){X(Bt,Bt.current),X(Oe,Oe.current)}function en(t){Y(Oe),He===t&&(He=null),Y(Bt)}var Bt=U(0);function ku(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Wr(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function cr(t,e,n,l){e=t.memoizedState,n=n(l,e),n=n==null?e:A({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rr={enqueueSetState:function(t,e,n){t=t._reactInternals;var l=ge(),a=vn(l);a.payload=e,n!=null&&(a.callback=n),e=bn(t,a,l),e!==null&&(ye(e,t,l),Aa(e,t,l))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var l=ge(),a=vn(l);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=bn(t,a,l),e!==null&&(ye(e,t,l),Aa(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ge(),l=vn(n);l.tag=2,e!=null&&(l.callback=e),e=bn(t,l,n),e!==null&&(ye(e,t,n),Aa(e,t,n))}};function $s(t,e,n,l,a,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,o):e.prototype&&e.prototype.isPureReactComponent?!ma(n,l)||!ma(a,i):!0}function Ws(t,e,n,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,l),e.state!==t&&rr.enqueueReplaceState(e,e.state,null)}function In(t,e){var n=e;if("ref"in e){n={};for(var l in e)l!=="ref"&&(n[l]=e[l])}if(t=t.defaultProps){n===e&&(n=A({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}var $u=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Fs(t){$u(t)}function Ps(t){console.error(t)}function Is(t){$u(t)}function Wu(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function td(t,e,n){try{var l=t.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function or(t,e,n){return n=vn(n),n.tag=3,n.payload={element:null},n.callback=function(){Wu(t,e)},n}function ed(t){return t=vn(t),t.tag=3,t}function nd(t,e,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;t.payload=function(){return a(i)},t.callback=function(){td(e,n,l)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){td(e,n,l),typeof a!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Sp(t,e,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=n.alternate,e!==null&&ba(e,n,a,!0),n=Oe.current,n!==null){switch(n.tag){case 13:return He===null?jr():n.alternate===null&&Dt===0&&(Dt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Bc?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([l]):e.add(l),Cr(t,l,a)),!1;case 22:return n.flags|=65536,l===Bc?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([l]):n.add(l)),Cr(t,l,a)),!1}throw Error(r(435,n.tag))}return Cr(t,l,a),jr(),!1}if(mt)return e=Oe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,l!==Dc&&(t=Error(r(422),{cause:l}),va(ze(t,n)))):(l!==Dc&&(e=Error(r(423),{cause:l}),va(ze(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,l=ze(l,n),a=or(t.stateNode,l,a),Gc(t,a),Dt!==4&&(Dt=2)),!1;var i=Error(r(520),{cause:l});if(i=ze(i,n),Ya===null?Ya=[i]:Ya.push(i),Dt!==4&&(Dt=2),e===null)return!0;l=ze(l,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=or(n.stateNode,l,t),Gc(n,t),!1;case 1:if(e=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(wn===null||!wn.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ed(a),nd(a,t,n,l),Gc(n,a),!1}n=n.return}while(n!==null);return!1}var ld=Error(r(461)),Qt=!1;function Jt(t,e,n,l){e.child=t===null?Js(e,null,n,l):Nl(e,t.child,n,l)}function ad(t,e,n,l,a){n=n.render;var i=e.ref;if("ref"in l){var o={};for(var s in l)s!=="ref"&&(o[s]=l[s])}else o=l;return Wn(e),l=Kc(t,e,n,o,i,a),s=Jc(),t!==null&&!Qt?(kc(t,e,a),nn(t,e,a)):(mt&&s&&_c(e),e.flags|=1,Jt(t,e,l,a),e.child)}function ud(t,e,n,l,a){if(t===null){var i=n.type;return typeof i=="function"&&!Rc(i)&&i.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=i,id(t,e,i,l,a)):(t=_u(n.type,null,l,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!yr(t,a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(o,l)&&t.ref===e.ref)return nn(t,e,a)}return e.flags|=1,t=$e(i,l),t.ref=e.ref,t.return=e,e.child=t}function id(t,e,n,l,a){if(t!==null){var i=t.memoizedProps;if(ma(i,l)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=l=i,yr(t,a))(t.flags&131072)!==0&&(Qt=!0);else return e.lanes=t.lanes,nn(t,e,a)}return fr(t,e,n,l,a)}function cd(t,e,n){var l=e.pendingProps,a=l.children,i=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((e.flags&128)!==0){if(l=i!==null?i.baseLanes|n:n,t!==null){for(a=e.child=t.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;e.childLanes=i&~l}else e.childLanes=0,e.child=null;return rd(t,e,l,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Uu(e,i!==null?i.cachePool:null),i!==null?is(e,i):Qc(),ks(e);else return e.lanes=e.childLanes=536870912,rd(t,e,i!==null?i.baseLanes|n:n,n)}else i!==null?(Uu(e,i.cachePool),is(e,i),En(),e.memoizedState=null):(t!==null&&Uu(e,null),Qc(),En());return Jt(t,e,a,n),e.child}function rd(t,e,n,l){var a=Hc();return a=a===null?null:{parent:Ht._currentValue,pool:a},e.memoizedState={baseLanes:n,cachePool:a},t!==null&&Uu(e,null),Qc(),ks(e),t!==null&&ba(t,e,l,!0),null}function Fu(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function fr(t,e,n,l,a){return Wn(e),n=Kc(t,e,n,l,void 0,a),l=Jc(),t!==null&&!Qt?(kc(t,e,a),nn(t,e,a)):(mt&&l&&_c(e),e.flags|=1,Jt(t,e,n,a),e.child)}function od(t,e,n,l,a,i){return Wn(e),e.updateQueue=null,n=rs(e,l,n,a),cs(t),l=Jc(),t!==null&&!Qt?(kc(t,e,i),nn(t,e,i)):(mt&&l&&_c(e),e.flags|=1,Jt(t,e,n,i),e.child)}function fd(t,e,n,l,a){if(Wn(e),e.stateNode===null){var i=El,o=n.contextType;typeof o=="object"&&o!==null&&(i=Pt(o)),i=new n(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=rr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},Yc(e),o=n.contextType,i.context=typeof o=="object"&&o!==null?Pt(o):El,i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(cr(e,n,o,l),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&rr.enqueueReplaceState(i,i.state,null),Ra(e,l,i,a),Ta(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,p=In(n,s);i.props=p;var E=i.context,_=n.contextType;o=El,typeof _=="object"&&_!==null&&(o=Pt(_));var j=n.getDerivedStateFromProps;_=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||E!==o)&&Ws(e,i,l,o),yn=!1;var T=e.memoizedState;i.state=T,Ra(e,l,i,a),Ta(),E=e.memoizedState,s||T!==E||yn?(typeof j=="function"&&(cr(e,n,j,l),E=e.memoizedState),(p=yn||$s(e,n,p,l,T,E,o))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=E),i.props=l,i.state=E,i.context=o,l=p):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,Lc(t,e),o=e.memoizedProps,_=In(n,o),i.props=_,j=e.pendingProps,T=i.context,E=n.contextType,p=El,typeof E=="object"&&E!==null&&(p=Pt(E)),s=n.getDerivedStateFromProps,(E=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==j||T!==p)&&Ws(e,i,l,p),yn=!1,T=e.memoizedState,i.state=T,Ra(e,l,i,a),Ta();var O=e.memoizedState;o!==j||T!==O||yn||t!==null&&t.dependencies!==null&&Nu(t.dependencies)?(typeof s=="function"&&(cr(e,n,s,l),O=e.memoizedState),(_=yn||$s(e,n,_,l,T,O,p)||t!==null&&t.dependencies!==null&&Nu(t.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,O,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,O,p)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=O),i.props=l,i.state=O,i.context=p,l=_):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,Fu(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=Nl(e,t.child,null,a),e.child=Nl(e,null,n,a)):Jt(t,e,n,a),e.memoizedState=i.state,t=e.child):t=nn(t,e,a),t}function sd(t,e,n,l){return ya(),e.flags|=256,Jt(t,e,n,l),e.child}var sr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dr(t){return{baseLanes:t,cachePool:Pf()}}function hr(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=we),t}function dd(t,e,n){var l=e.pendingProps,a=!1,i=(e.flags&128)!==0,o;if((o=i)||(o=t!==null&&t.memoizedState===null?!1:(Bt.current&2)!==0),o&&(a=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(mt){if(a?Sn(e):En(),mt){var s=Mt,p;if(p=s){t:{for(p=s,s=qe;p.nodeType!==8;){if(!s){s=null;break t}if(p=je(p.nextSibling),p===null){s=null;break t}}s=p}s!==null?(e.memoizedState={dehydrated:s,treeContext:Vn!==null?{id:We,overflow:Fe}:null,retryLane:536870912,hydrationErrors:null},p=de(18,null,null,0),p.stateNode=s,p.return=e,e.child=p,ee=e,Mt=null,p=!0):p=!1}p||kn(e)}if(s=e.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return Wr(s)?e.lanes=32:e.lanes=536870912,null;en(e)}return s=l.children,l=l.fallback,a?(En(),a=e.mode,s=Pu({mode:"hidden",children:s},a),l=Zn(l,a,n,null),s.return=e,l.return=e,s.sibling=l,e.child=s,a=e.child,a.memoizedState=dr(n),a.childLanes=hr(t,o,n),e.memoizedState=sr,l):(Sn(e),mr(e,s))}if(p=t.memoizedState,p!==null&&(s=p.dehydrated,s!==null)){if(i)e.flags&256?(Sn(e),e.flags&=-257,e=pr(t,e,n)):e.memoizedState!==null?(En(),e.child=t.child,e.flags|=128,e=null):(En(),a=l.fallback,s=e.mode,l=Pu({mode:"visible",children:l.children},s),a=Zn(a,s,n,null),a.flags|=2,l.return=e,a.return=e,l.sibling=a,e.child=l,Nl(e,t.child,null,n),l=e.child,l.memoizedState=dr(n),l.childLanes=hr(t,o,n),e.memoizedState=sr,e=a);else if(Sn(e),Wr(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var E=o.dgst;o=E,l=Error(r(419)),l.stack="",l.digest=o,va({value:l,source:null,stack:null}),e=pr(t,e,n)}else if(Qt||ba(t,e,n,!1),o=(n&t.childLanes)!==0,Qt||o){if(o=At,o!==null&&(l=n&-n,l=(l&42)!==0?1:Fi(l),l=(l&(o.suspendedLanes|n))!==0?0:l,l!==0&&l!==p.retryLane))throw p.retryLane=l,Sl(t,l),ye(o,t,l),ld;s.data==="$?"||jr(),e=pr(t,e,n)}else s.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=p.treeContext,Mt=je(s.nextSibling),ee=e,mt=!0,Jn=null,qe=!1,t!==null&&(Te[Re++]=We,Te[Re++]=Fe,Te[Re++]=Vn,We=t.id,Fe=t.overflow,Vn=e),e=mr(e,l.children),e.flags|=4096);return e}return a?(En(),a=l.fallback,s=e.mode,p=t.child,E=p.sibling,l=$e(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,E!==null?a=$e(E,a):(a=Zn(a,s,n,null),a.flags|=2),a.return=e,l.return=e,l.sibling=a,e.child=l,l=a,a=e.child,s=t.child.memoizedState,s===null?s=dr(n):(p=s.cachePool,p!==null?(E=Ht._currentValue,p=p.parent!==E?{parent:E,pool:E}:p):p=Pf(),s={baseLanes:s.baseLanes|n,cachePool:p}),a.memoizedState=s,a.childLanes=hr(t,o,n),e.memoizedState=sr,l):(Sn(e),n=t.child,t=n.sibling,n=$e(n,{mode:"visible",children:l.children}),n.return=e,n.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=n,e.memoizedState=null,n)}function mr(t,e){return e=Pu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Pu(t,e){return t=de(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function pr(t,e,n){return Nl(e,t.child,null,n),t=mr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hd(t,e,n){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),jc(t.return,e,n)}function gr(t,e,n,l,a){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=n,i.tailMode=a)}function md(t,e,n){var l=e.pendingProps,a=l.revealOrder,i=l.tail;if(Jt(t,e,l.children,n),l=Bt.current,(l&2)!==0)l=l&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hd(t,n,e);else if(t.tag===19)hd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(X(Bt,l),a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&ku(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),gr(e,!1,a,n,i);break;case"backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&ku(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}gr(e,!0,n,null,i);break;case"together":gr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),On|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(ba(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,n=$e(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$e(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Nu(t)))}function Ep(t,e,n){switch(e.tag){case 3:pt(e,e.stateNode.containerInfo),gn(e,Ht,t.memoizedState.cache),ya();break;case 27:case 5:Bn(e);break;case 4:pt(e,e.stateNode.containerInfo);break;case 10:gn(e,e.type,e.memoizedProps.value);break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(Sn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?dd(t,e,n):(Sn(e),t=nn(t,e,n),t!==null?t.sibling:null);Sn(e);break;case 19:var a=(t.flags&128)!==0;if(l=(n&e.childLanes)!==0,l||(ba(t,e,n,!1),l=(n&e.childLanes)!==0),a){if(l)return md(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),X(Bt,Bt.current),l)break;return null;case 22:case 23:return e.lanes=0,cd(t,e,n);case 24:gn(e,Ht,t.memoizedState.cache)}return nn(t,e,n)}function pd(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Qt=!0;else{if(!yr(t,n)&&(e.flags&128)===0)return Qt=!1,Ep(t,e,n);Qt=(t.flags&131072)!==0}else Qt=!1,mt&&(e.flags&1048576)!==0&&Vf(e,Du,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var l=e.elementType,a=l._init;if(l=a(l._payload),e.type=l,typeof l=="function")Rc(l)?(t=In(l,t),e.tag=1,e=fd(null,e,l,t,n)):(e.tag=0,e=fr(null,e,l,t,n));else{if(l!=null){if(a=l.$$typeof,a===nt){e.tag=11,e=ad(null,e,l,t,n);break t}else if(a===$){e.tag=14,e=ud(null,e,l,t,n);break t}}throw e=Ve(l)||l,Error(r(306,e,""))}}return e;case 0:return fr(t,e,e.type,e.pendingProps,n);case 1:return l=e.type,a=In(l,e.pendingProps),fd(t,e,l,a,n);case 3:t:{if(pt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));l=e.pendingProps;var i=e.memoizedState;a=i.element,Lc(t,e),Ra(e,l,null,n);var o=e.memoizedState;if(l=o.cache,gn(e,Ht,l),l!==i.cache&&Uc(e,[Ht],n,!0),Ta(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=sd(t,e,l,n);break t}else if(l!==a){a=ze(Error(r(424)),e),va(a),e=sd(t,e,l,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Mt=je(t.firstChild),ee=e,mt=!0,Jn=null,qe=!0,n=Js(e,null,l,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ya(),l===a){e=nn(t,e,n);break t}Jt(t,e,l,n)}e=e.child}return e;case 26:return Fu(t,e),t===null?(n=bh(e.type,null,e.pendingProps,null))?e.memoizedState=n:mt||(n=e.type,t=e.pendingProps,l=di(I.current).createElement(n),l[Ft]=e,l[le]=t,$t(l,n,t),Xt(l),e.stateNode=l):e.memoizedState=bh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Bn(e),t===null&&mt&&(l=e.stateNode=gh(e.type,e.pendingProps,I.current),ee=e,qe=!0,a=Mt,Dn(e.type)?(Fr=a,Mt=je(l.firstChild)):Mt=a),Jt(t,e,e.pendingProps.children,n),Fu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&mt&&((a=l=Mt)&&(l=Wp(l,e.type,e.pendingProps,qe),l!==null?(e.stateNode=l,ee=e,Mt=je(l.firstChild),qe=!1,a=!0):a=!1),a||kn(e)),Bn(e),a=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,l=i.children,Jr(a,i)?l=null:o!==null&&Jr(a,o)&&(e.flags|=32),e.memoizedState!==null&&(a=Kc(t,e,mp,null,null,n),ka._currentValue=a),Fu(t,e),Jt(t,e,l,n),e.child;case 6:return t===null&&mt&&((t=n=Mt)&&(n=Fp(n,e.pendingProps,qe),n!==null?(e.stateNode=n,ee=e,Mt=null,t=!0):t=!1),t||kn(e)),null;case 13:return dd(t,e,n);case 4:return pt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Nl(e,null,l,n):Jt(t,e,l,n),e.child;case 11:return ad(t,e,e.type,e.pendingProps,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:return l=e.pendingProps,gn(e,e.type,l.value),Jt(t,e,l.children,n),e.child;case 9:return a=e.type._context,l=e.pendingProps.children,Wn(e),a=Pt(a),l=l(a),e.flags|=1,Jt(t,e,l,n),e.child;case 14:return ud(t,e,e.type,e.pendingProps,n);case 15:return id(t,e,e.type,e.pendingProps,n);case 19:return md(t,e,n);case 31:return l=e.pendingProps,n=e.mode,l={mode:l.mode,children:l.children},t===null?(n=Pu(l,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=$e(t.child,l),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return cd(t,e,n);case 24:return Wn(e),l=Pt(Ht),t===null?(a=Hc(),a===null&&(a=At,i=Cc(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),e.memoizedState={parent:l,cache:a},Yc(e),gn(e,Ht,a)):((t.lanes&n)!==0&&(Lc(t,e),Ra(e,null,null,n),Ta()),a=t.memoizedState,i=e.memoizedState,a.parent!==l?(a={parent:l,cache:l},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),gn(e,Ht,l)):(l=i.cache,gn(e,Ht,l),l!==a.cache&&Uc(e,[Ht],n,!0))),Jt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function ln(t){t.flags|=4}function gd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ah(e)){if(e=Oe.current,e!==null&&((dt&4194048)===dt?He!==null:(dt&62914560)!==dt&&(dt&536870912)===0||e!==He))throw za=Bc,If;t.flags|=8192}}function Iu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Jo():536870912,t.lanes|=e,ql|=e)}function ja(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,l=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=l,t.childLanes=n,e}function zp(t,e,n){var l=e.pendingProps;switch(Mc(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return wt(e),null;case 3:return n=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ie(Ht),Wt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ga(e)?ln(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,kf())),wt(e),null;case 26:return n=e.memoizedState,t===null?(ln(e),n!==null?(wt(e),gd(e,n)):(wt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(ln(e),wt(e),gd(e,n)):(wt(e),e.flags&=-16777217):(t.memoizedProps!==l&&ln(e),wt(e),e.flags&=-16777217),null;case 27:Ke(e),n=I.current;var a=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ln(e);else{if(!l){if(e.stateNode===null)throw Error(r(166));return wt(e),null}t=W.current,ga(e)?Kf(e):(t=gh(a,l,n),e.stateNode=t,ln(e))}return wt(e),null;case 5:if(Ke(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ln(e);else{if(!l){if(e.stateNode===null)throw Error(r(166));return wt(e),null}if(t=W.current,ga(e))Kf(e);else{switch(a=di(I.current),t){case 1:t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?a.createElement("select",{is:l.is}):a.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?a.createElement(n,{is:l.is}):a.createElement(n)}}t[Ft]=e,t[le]=l;t:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=t;t:switch($t(t,n,l),n){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ln(e)}}return wt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&ln(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(r(166));if(t=I.current,ga(e)){if(t=e.stateNode,n=e.memoizedProps,l=null,a=ee,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}t[Ft]=e,t=!!(t.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||oh(t.nodeValue,n)),t||kn(e)}else t=di(t).createTextNode(l),t[Ft]=e,e.stateNode=t}return wt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=ga(e),l!==null&&l.dehydrated!==null){if(t===null){if(!a)throw Error(r(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(r(317));a[Ft]=e}else ya(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;wt(e),a=!1}else a=kf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(en(e),e):(en(e),null)}if(en(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=l!==null,t=t!==null&&t.memoizedState!==null,n){l=e.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Iu(e,e.updateQueue),wt(e),null;case 4:return Wt(),t===null&&Xr(e.stateNode.containerInfo),wt(e),null;case 10:return Ie(e.type),wt(e),null;case 19:if(Y(Bt),a=e.memoizedState,a===null)return wt(e),null;if(l=(e.flags&128)!==0,i=a.rendering,i===null)if(l)ja(a,!1);else{if(Dt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=ku(t),i!==null){for(e.flags|=128,ja(a,!1),t=i.updateQueue,e.updateQueue=t,Iu(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Zf(n,t),n=n.sibling;return X(Bt,Bt.current&1|2),e.child}t=t.sibling}a.tail!==null&&Ce()>ni&&(e.flags|=128,l=!0,ja(a,!1),e.lanes=4194304)}else{if(!l)if(t=ku(i),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,Iu(e,t),ja(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!mt)return wt(e),null}else 2*Ce()-a.renderingStartTime>ni&&n!==536870912&&(e.flags|=128,l=!0,ja(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Ce(),e.sibling=null,t=Bt.current,X(Bt,l?t&1|2:t&1),e):(wt(e),null);case 22:case 23:return en(e),Zc(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(n&536870912)!==0&&(e.flags&128)===0&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),n=e.updateQueue,n!==null&&Iu(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==n&&(e.flags|=2048),t!==null&&Y(Fn),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Ie(Ht),wt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function Ap(t,e){switch(Mc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ie(Ht),Wt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ke(e),null;case 13:if(en(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));ya()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(Bt),null;case 4:return Wt(),null;case 10:return Ie(e.type),null;case 22:case 23:return en(e),Zc(),t!==null&&Y(Fn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ie(Ht),null;case 25:return null;default:return null}}function yd(t,e){switch(Mc(e),e.tag){case 3:Ie(Ht),Wt();break;case 26:case 27:case 5:Ke(e);break;case 4:Wt();break;case 13:en(e);break;case 19:Y(Bt);break;case 10:Ie(e.type);break;case 22:case 23:en(e),Zc(),t!==null&&Y(Fn);break;case 24:Ie(Ht)}}function Ua(t,e){try{var n=e.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&t)===t){l=void 0;var i=n.create,o=n.inst;l=i(),o.destroy=l}n=n.next}while(n!==a)}}catch(s){zt(e,e.return,s)}}function zn(t,e,n){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&t)===t){var o=l.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,a=e;var p=n,E=s;try{E()}catch(_){zt(a,p,_)}}}l=l.next}while(l!==i)}}catch(_){zt(e,e.return,_)}}function vd(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{us(e,n)}catch(l){zt(t,t.return,l)}}}function bd(t,e,n){n.props=In(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(l){zt(t,e,l)}}function Ca(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof n=="function"?t.refCleanup=n(l):n.current=l}}catch(a){zt(t,e,a)}}function Be(t,e){var n=t.ref,l=t.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){zt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){zt(t,e,a)}else n.current=null}function xd(t){var e=t.type,n=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break t;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){zt(t,t.return,a)}}function vr(t,e,n){try{var l=t.stateNode;Vp(l,t.type,n,e),l[le]=e}catch(a){zt(t,t.return,a)}}function Sd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Dn(t.type)||t.tag===4}function br(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Sd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Dn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xr(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=si));else if(l!==4&&(l===27&&Dn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(xr(t,e,n),t=t.sibling;t!==null;)xr(t,e,n),t=t.sibling}function ti(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(l!==4&&(l===27&&Dn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(ti(t,e,n),t=t.sibling;t!==null;)ti(t,e,n),t=t.sibling}function Ed(t){var e=t.stateNode,n=t.memoizedProps;try{for(var l=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);$t(e,l,n),e[Ft]=t,e[le]=n}catch(i){zt(t,t.return,i)}}var an=!1,jt=!1,Sr=!1,zd=typeof WeakSet=="function"?WeakSet:Set,Zt=null;function Tp(t,e){if(t=t.containerInfo,Vr=vi,t=Uf(t),bc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break t}var o=0,s=-1,p=-1,E=0,_=0,j=t,T=null;e:for(;;){for(var O;j!==n||a!==0&&j.nodeType!==3||(s=o+a),j!==i||l!==0&&j.nodeType!==3||(p=o+l),j.nodeType===3&&(o+=j.nodeValue.length),(O=j.firstChild)!==null;)T=j,j=O;for(;;){if(j===t)break e;if(T===n&&++E===a&&(s=o),T===i&&++_===l&&(p=o),(O=j.nextSibling)!==null)break;j=T,T=j.parentNode}j=O}n=s===-1||p===-1?null:{start:s,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kr={focusedElem:t,selectionRange:n},vi=!1,Zt=e;Zt!==null;)if(e=Zt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Zt=t;else for(;Zt!==null;){switch(e=Zt,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,n=e,a=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var et=In(n.type,a,n.elementType===n.type);t=l.getSnapshotBeforeUpdate(et,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(P){zt(n,n.return,P)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)$r(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":$r(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,Zt=t;break}Zt=e.return}}function Ad(t,e,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:An(t,n),l&4&&Ua(5,n);break;case 1:if(An(t,n),l&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(o){zt(n,n.return,o)}else{var a=In(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){zt(n,n.return,o)}}l&64&&vd(n),l&512&&Ca(n,n.return);break;case 3:if(An(t,n),l&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{us(t,e)}catch(o){zt(n,n.return,o)}}break;case 27:e===null&&l&4&&Ed(n);case 26:case 5:An(t,n),e===null&&l&4&&xd(n),l&512&&Ca(n,n.return);break;case 12:An(t,n);break;case 13:An(t,n),l&4&&Od(t,n),l&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Up.bind(null,n),Pp(t,n))));break;case 22:if(l=n.memoizedState!==null||an,!l){e=e!==null&&e.memoizedState!==null||jt,a=an;var i=jt;an=l,(jt=e)&&!i?Tn(t,n,(n.subtreeFlags&8772)!==0):An(t,n),an=a,jt=i}break;case 30:break;default:An(t,n)}}function Td(t){var e=t.alternate;e!==null&&(t.alternate=null,Td(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&tc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ot=null,ie=!1;function un(t,e,n){for(n=n.child;n!==null;)Rd(t,e,n),n=n.sibling}function Rd(t,e,n){if(oe&&typeof oe.onCommitFiberUnmount=="function")try{oe.onCommitFiberUnmount(na,n)}catch{}switch(n.tag){case 26:jt||Be(n,e),un(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:jt||Be(n,e);var l=Ot,a=ie;Dn(n.type)&&(Ot=n.stateNode,ie=!1),un(t,e,n),Za(n.stateNode),Ot=l,ie=a;break;case 5:jt||Be(n,e);case 6:if(l=Ot,a=ie,Ot=null,un(t,e,n),Ot=l,ie=a,Ot!==null)if(ie)try{(Ot.nodeType===9?Ot.body:Ot.nodeName==="HTML"?Ot.ownerDocument.body:Ot).removeChild(n.stateNode)}catch(i){zt(n,e,i)}else try{Ot.removeChild(n.stateNode)}catch(i){zt(n,e,i)}break;case 18:Ot!==null&&(ie?(t=Ot,mh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Pa(t)):mh(Ot,n.stateNode));break;case 4:l=Ot,a=ie,Ot=n.stateNode.containerInfo,ie=!0,un(t,e,n),Ot=l,ie=a;break;case 0:case 11:case 14:case 15:jt||zn(2,n,e),jt||zn(4,n,e),un(t,e,n);break;case 1:jt||(Be(n,e),l=n.stateNode,typeof l.componentWillUnmount=="function"&&bd(n,e,l)),un(t,e,n);break;case 21:un(t,e,n);break;case 22:jt=(l=jt)||n.memoizedState!==null,un(t,e,n),jt=l;break;default:un(t,e,n)}}function Od(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Pa(t)}catch(n){zt(e,e.return,n)}}function Rp(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new zd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new zd),e;default:throw Error(r(435,t.tag))}}function Er(t,e){var n=Rp(t);e.forEach(function(l){var a=Cp.bind(null,t,l);n.has(l)||(n.add(l),l.then(a,a))})}function he(t,e){var n=e.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],i=t,o=e,s=o;t:for(;s!==null;){switch(s.tag){case 27:if(Dn(s.type)){Ot=s.stateNode,ie=!1;break t}break;case 5:Ot=s.stateNode,ie=!1;break t;case 3:case 4:Ot=s.stateNode.containerInfo,ie=!0;break t}s=s.return}if(Ot===null)throw Error(r(160));Rd(i,o,a),Ot=null,ie=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)wd(e,t),e=e.sibling}var Ne=null;function wd(t,e){var n=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:he(e,t),me(t),l&4&&(zn(3,t,t.return),Ua(3,t),zn(5,t,t.return));break;case 1:he(e,t),me(t),l&512&&(jt||n===null||Be(n,n.return)),l&64&&an&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=Ne;if(he(e,t),me(t),l&512&&(jt||n===null||Be(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=t.memoizedState,n===null)if(l===null)if(t.stateNode===null){t:{l=t.type,n=t.memoizedProps,a=a.ownerDocument||a;e:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[ua]||i[Ft]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),$t(i,l,n),i[Ft]=t,Xt(i),l=i;break t;case"link":var o=Eh("link","href",a).get(l+(n.href||""));if(o){for(var s=0;s<o.length;s++)if(i=o[s],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break e}}i=a.createElement(l),$t(i,l,n),a.head.appendChild(i);break;case"meta":if(o=Eh("meta","content",a).get(l+(n.content||""))){for(s=0;s<o.length;s++)if(i=o[s],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(s,1);break e}}i=a.createElement(l),$t(i,l,n),a.head.appendChild(i);break;default:throw Error(r(468,l))}i[Ft]=t,Xt(i),l=i}t.stateNode=l}else zh(a,t.type,t.stateNode);else t.stateNode=Sh(a,l,t.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?zh(a,t.type,t.stateNode):Sh(a,l,t.memoizedProps)):l===null&&t.stateNode!==null&&vr(t,t.memoizedProps,n.memoizedProps)}break;case 27:he(e,t),me(t),l&512&&(jt||n===null||Be(n,n.return)),n!==null&&l&4&&vr(t,t.memoizedProps,n.memoizedProps);break;case 5:if(he(e,t),me(t),l&512&&(jt||n===null||Be(n,n.return)),t.flags&32){a=t.stateNode;try{ml(a,"")}catch(O){zt(t,t.return,O)}}l&4&&t.stateNode!=null&&(a=t.memoizedProps,vr(t,a,n!==null?n.memoizedProps:a)),l&1024&&(Sr=!0);break;case 6:if(he(e,t),me(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,n=t.stateNode;try{n.nodeValue=l}catch(O){zt(t,t.return,O)}}break;case 3:if(pi=null,a=Ne,Ne=hi(e.containerInfo),he(e,t),Ne=a,me(t),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(e.containerInfo)}catch(O){zt(t,t.return,O)}Sr&&(Sr=!1,_d(t));break;case 4:l=Ne,Ne=hi(t.stateNode.containerInfo),he(e,t),me(t),Ne=l;break;case 12:he(e,t),me(t);break;case 13:he(e,t),me(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(wr=Ce()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Er(t,l)));break;case 22:a=t.memoizedState!==null;var p=n!==null&&n.memoizedState!==null,E=an,_=jt;if(an=E||a,jt=_||p,he(e,t),jt=_,an=E,me(t),l&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||p||an||jt||tl(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){p=n=e;try{if(i=p.stateNode,a)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=p.stateNode;var j=p.memoizedProps.style,T=j!=null&&j.hasOwnProperty("display")?j.display:null;s.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(O){zt(p,p.return,O)}}}else if(e.tag===6){if(n===null){p=e;try{p.stateNode.nodeValue=a?"":p.memoizedProps}catch(O){zt(p,p.return,O)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Er(t,n))));break;case 19:he(e,t),me(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Er(t,l)));break;case 30:break;case 21:break;default:he(e,t),me(t)}}function me(t){var e=t.flags;if(e&2){try{for(var n,l=t.return;l!==null;){if(Sd(l)){n=l;break}l=l.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var a=n.stateNode,i=br(t);ti(t,i,a);break;case 5:var o=n.stateNode;n.flags&32&&(ml(o,""),n.flags&=-33);var s=br(t);ti(t,s,o);break;case 3:case 4:var p=n.stateNode.containerInfo,E=br(t);xr(t,E,p);break;default:throw Error(r(161))}}catch(_){zt(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _d(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;_d(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function An(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Ad(t,e.alternate,e),e=e.sibling}function tl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:zn(4,e,e.return),tl(e);break;case 1:Be(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&bd(e,e.return,n),tl(e);break;case 27:Za(e.stateNode);case 26:case 5:Be(e,e.return),tl(e);break;case 22:e.memoizedState===null&&tl(e);break;case 30:tl(e);break;default:tl(e)}t=t.sibling}}function Tn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,a=t,i=e,o=i.flags;switch(i.tag){case 0:case 11:case 15:Tn(a,i,n),Ua(4,i);break;case 1:if(Tn(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(E){zt(l,l.return,E)}if(l=i,a=l.updateQueue,a!==null){var s=l.stateNode;try{var p=a.shared.hiddenCallbacks;if(p!==null)for(a.shared.hiddenCallbacks=null,a=0;a<p.length;a++)as(p[a],s)}catch(E){zt(l,l.return,E)}}n&&o&64&&vd(i),Ca(i,i.return);break;case 27:Ed(i);case 26:case 5:Tn(a,i,n),n&&l===null&&o&4&&xd(i),Ca(i,i.return);break;case 12:Tn(a,i,n);break;case 13:Tn(a,i,n),n&&o&4&&Od(a,i);break;case 22:i.memoizedState===null&&Tn(a,i,n),Ca(i,i.return);break;case 30:break;default:Tn(a,i,n)}e=e.sibling}}function zr(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&xa(n))}function Ar(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&xa(t))}function Ye(t,e,n,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Md(t,e,n,l),e=e.sibling}function Md(t,e,n,l){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Ye(t,e,n,l),a&2048&&Ua(9,e);break;case 1:Ye(t,e,n,l);break;case 3:Ye(t,e,n,l),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&xa(t)));break;case 12:if(a&2048){Ye(t,e,n,l),t=e.stateNode;try{var i=e.memoizedProps,o=i.id,s=i.onPostCommit;typeof s=="function"&&s(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(p){zt(e,e.return,p)}}else Ye(t,e,n,l);break;case 13:Ye(t,e,n,l);break;case 23:break;case 22:i=e.stateNode,o=e.alternate,e.memoizedState!==null?i._visibility&2?Ye(t,e,n,l):qa(t,e):i._visibility&2?Ye(t,e,n,l):(i._visibility|=2,jl(t,e,n,l,(e.subtreeFlags&10256)!==0)),a&2048&&zr(o,e);break;case 24:Ye(t,e,n,l),a&2048&&Ar(e.alternate,e);break;default:Ye(t,e,n,l)}}function jl(t,e,n,l,a){for(a=a&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,o=e,s=n,p=l,E=o.flags;switch(o.tag){case 0:case 11:case 15:jl(i,o,s,p,a),Ua(8,o);break;case 23:break;case 22:var _=o.stateNode;o.memoizedState!==null?_._visibility&2?jl(i,o,s,p,a):qa(i,o):(_._visibility|=2,jl(i,o,s,p,a)),a&&E&2048&&zr(o.alternate,o);break;case 24:jl(i,o,s,p,a),a&&E&2048&&Ar(o.alternate,o);break;default:jl(i,o,s,p,a)}e=e.sibling}}function qa(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,l=e,a=l.flags;switch(l.tag){case 22:qa(n,l),a&2048&&zr(l.alternate,l);break;case 24:qa(n,l),a&2048&&Ar(l.alternate,l);break;default:qa(n,l)}e=e.sibling}}var Ha=8192;function Ul(t){if(t.subtreeFlags&Ha)for(t=t.child;t!==null;)Dd(t),t=t.sibling}function Dd(t){switch(t.tag){case 26:Ul(t),t.flags&Ha&&t.memoizedState!==null&&sg(Ne,t.memoizedState,t.memoizedProps);break;case 5:Ul(t);break;case 3:case 4:var e=Ne;Ne=hi(t.stateNode.containerInfo),Ul(t),Ne=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Ha,Ha=16777216,Ul(t),Ha=e):Ul(t));break;default:Ul(t)}}function Nd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ba(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];Zt=l,Ud(l,t)}Nd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jd(t),t=t.sibling}function jd(t){switch(t.tag){case 0:case 11:case 15:Ba(t),t.flags&2048&&zn(9,t,t.return);break;case 3:Ba(t);break;case 12:Ba(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ei(t)):Ba(t);break;default:Ba(t)}}function ei(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];Zt=l,Ud(l,t)}Nd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:zn(8,e,e.return),ei(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,ei(e));break;default:ei(e)}t=t.sibling}}function Ud(t,e){for(;Zt!==null;){var n=Zt;switch(n.tag){case 0:case 11:case 15:zn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:xa(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Zt=l;else t:for(n=t;Zt!==null;){l=Zt;var a=l.sibling,i=l.return;if(Td(l),l===n){Zt=null;break t}if(a!==null){a.return=i,Zt=a;break t}Zt=i}}}var Op={getCacheForType:function(t){var e=Pt(Ht),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},wp=typeof WeakMap=="function"?WeakMap:Map,yt=0,At=null,ft=null,dt=0,vt=0,pe=null,Rn=!1,Cl=!1,Tr=!1,cn=0,Dt=0,On=0,el=0,Rr=0,we=0,ql=0,Ya=null,ce=null,Or=!1,wr=0,ni=1/0,li=null,wn=null,kt=0,_n=null,Hl=null,Bl=0,_r=0,Mr=null,Cd=null,La=0,Dr=null;function ge(){if((yt&2)!==0&&dt!==0)return dt&-dt;if(w.T!==null){var t=Tl;return t!==0?t:Br()}return Wo()}function qd(){we===0&&(we=(dt&536870912)===0||mt?Ko():536870912);var t=Oe.current;return t!==null&&(t.flags|=32),we}function ye(t,e,n){(t===At&&(vt===2||vt===9)||t.cancelPendingCommit!==null)&&(Yl(t,0),Mn(t,dt,we,!1)),aa(t,n),((yt&2)===0||t!==At)&&(t===At&&((yt&2)===0&&(el|=n),Dt===4&&Mn(t,dt,we,!1)),Le(t))}function Hd(t,e,n){if((yt&6)!==0)throw Error(r(327));var l=!n&&(e&124)===0&&(e&t.expiredLanes)===0||la(t,e),a=l?Dp(t,e):Ur(t,e,!0),i=l;do{if(a===0){Cl&&!l&&Mn(t,e,0,!1);break}else{if(n=t.current.alternate,i&&!_p(n)){a=Ur(t,e,!1),i=!1;continue}if(a===2){if(i=e,t.errorRecoveryDisabledLanes&i)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var s=t;a=Ya;var p=s.current.memoizedState.isDehydrated;if(p&&(Yl(s,o).flags|=256),o=Ur(s,o,!1),o!==2){if(Tr&&!p){s.errorRecoveryDisabledLanes|=i,el|=i,a=4;break t}i=ce,ce=a,i!==null&&(ce===null?ce=i:ce.push.apply(ce,i))}a=o}if(i=!1,a!==2)continue}}if(a===1){Yl(t,0),Mn(t,e,0,!0);break}t:{switch(l=t,i=a,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Mn(l,e,we,!Rn);break t;case 2:ce=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(a=wr+300-Ce(),10<a)){if(Mn(l,e,we,!Rn),mu(l,0,!0)!==0)break t;l.timeoutHandle=dh(Bd.bind(null,l,n,ce,li,Or,e,we,el,ql,Rn,i,2,-0,0),a);break t}Bd(l,n,ce,li,Or,e,we,el,ql,Rn,i,0,-0,0)}}break}while(!0);Le(t)}function Bd(t,e,n,l,a,i,o,s,p,E,_,j,T,O){if(t.timeoutHandle=-1,j=e.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(Ja={stylesheets:null,count:0,unsuspend:fg},Dd(e),j=dg(),j!==null)){t.cancelPendingCommit=j(Vd.bind(null,t,e,i,n,l,a,o,s,p,_,1,T,O)),Mn(t,i,o,!E);return}Vd(t,e,i,n,l,a,o,s,p)}function _p(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!se(i(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mn(t,e,n,l){e&=~Rr,e&=~el,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var a=e;0<a;){var i=31-fe(a),o=1<<i;l[i]=-1,a&=~o}n!==0&&ko(t,n,e)}function ai(){return(yt&6)===0?(Ga(0),!1):!0}function Nr(){if(ft!==null){if(vt===0)var t=ft.return;else t=ft,Pe=$n=null,$c(t),Dl=null,Da=0,t=ft;for(;t!==null;)yd(t.alternate,t),t=t.return;ft=null}}function Yl(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Jp(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Nr(),At=t,ft=n=$e(t.current,null),dt=e,vt=0,pe=null,Rn=!1,Cl=la(t,e),Tr=!1,ql=we=Rr=el=On=Dt=0,ce=Ya=null,Or=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var a=31-fe(l),i=1<<a;e|=t[a],l&=~i}return cn=e,Ru(),n}function Yd(t,e){it=null,w.H=Vu,e===Ea||e===Cu?(e=ns(),vt=3):e===If?(e=ns(),vt=4):vt=e===ld?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,pe=e,ft===null&&(Dt=1,Wu(t,ze(e,t.current)))}function Ld(){var t=w.H;return w.H=Vu,t===null?Vu:t}function Gd(){var t=w.A;return w.A=Op,t}function jr(){Dt=4,Rn||(dt&4194048)!==dt&&Oe.current!==null||(Cl=!0),(On&134217727)===0&&(el&134217727)===0||At===null||Mn(At,dt,we,!1)}function Ur(t,e,n){var l=yt;yt|=2;var a=Ld(),i=Gd();(At!==t||dt!==e)&&(li=null,Yl(t,e)),e=!1;var o=Dt;t:do try{if(vt!==0&&ft!==null){var s=ft,p=pe;switch(vt){case 8:Nr(),o=6;break t;case 3:case 2:case 9:case 6:Oe.current===null&&(e=!0);var E=vt;if(vt=0,pe=null,Ll(t,s,p,E),n&&Cl){o=0;break t}break;default:E=vt,vt=0,pe=null,Ll(t,s,p,E)}}Mp(),o=Dt;break}catch(_){Yd(t,_)}while(!0);return e&&t.shellSuspendCounter++,Pe=$n=null,yt=l,w.H=a,w.A=i,ft===null&&(At=null,dt=0,Ru()),o}function Mp(){for(;ft!==null;)Xd(ft)}function Dp(t,e){var n=yt;yt|=2;var l=Ld(),a=Gd();At!==t||dt!==e?(li=null,ni=Ce()+500,Yl(t,e)):Cl=la(t,e);t:do try{if(vt!==0&&ft!==null){e=ft;var i=pe;e:switch(vt){case 1:vt=0,pe=null,Ll(t,e,i,1);break;case 2:case 9:if(ts(i)){vt=0,pe=null,Qd(e);break}e=function(){vt!==2&&vt!==9||At!==t||(vt=7),Le(t)},i.then(e,e);break t;case 3:vt=7;break t;case 4:vt=5;break t;case 7:ts(i)?(vt=0,pe=null,Qd(e)):(vt=0,pe=null,Ll(t,e,i,7));break;case 5:var o=null;switch(ft.tag){case 26:o=ft.memoizedState;case 5:case 27:var s=ft;if(!o||Ah(o)){vt=0,pe=null;var p=s.sibling;if(p!==null)ft=p;else{var E=s.return;E!==null?(ft=E,ui(E)):ft=null}break e}}vt=0,pe=null,Ll(t,e,i,5);break;case 6:vt=0,pe=null,Ll(t,e,i,6);break;case 8:Nr(),Dt=6;break t;default:throw Error(r(462))}}Np();break}catch(_){Yd(t,_)}while(!0);return Pe=$n=null,w.H=l,w.A=a,yt=n,ft!==null?0:(At=null,dt=0,Ru(),Dt)}function Np(){for(;ft!==null&&!t0();)Xd(ft)}function Xd(t){var e=pd(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?ui(t):ft=e}function Qd(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=od(n,e,e.pendingProps,e.type,void 0,dt);break;case 11:e=od(n,e,e.pendingProps,e.type.render,e.ref,dt);break;case 5:$c(e);default:yd(n,e),e=ft=Zf(e,cn),e=pd(n,e,cn)}t.memoizedProps=t.pendingProps,e===null?ui(t):ft=e}function Ll(t,e,n,l){Pe=$n=null,$c(e),Dl=null,Da=0;var a=e.return;try{if(Sp(t,a,e,n,dt)){Dt=1,Wu(t,ze(n,t.current)),ft=null;return}}catch(i){if(a!==null)throw ft=a,i;Dt=1,Wu(t,ze(n,t.current)),ft=null;return}e.flags&32768?(mt||l===1?t=!0:Cl||(dt&536870912)!==0?t=!1:(Rn=t=!0,(l===2||l===9||l===3||l===6)&&(l=Oe.current,l!==null&&l.tag===13&&(l.flags|=16384))),Zd(e,t)):ui(e)}function ui(t){var e=t;do{if((e.flags&32768)!==0){Zd(e,Rn);return}t=e.return;var n=zp(e.alternate,e,cn);if(n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);Dt===0&&(Dt=5)}function Zd(t,e){do{var n=Ap(t.alternate,t);if(n!==null){n.flags&=32767,ft=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ft=t;return}ft=t=n}while(t!==null);Dt=6,ft=null}function Vd(t,e,n,l,a,i,o,s,p){t.cancelPendingCommit=null;do ii();while(kt!==0);if((yt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=Ac,f0(t,n,i,o,s,p),t===At&&(ft=At=null,dt=0),Hl=e,_n=t,Bl=n,_r=i,Mr=a,Cd=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,qp(su,function(){return Wd(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=w.T,w.T=null,a=G.p,G.p=2,o=yt,yt|=4;try{Tp(t,e,n)}finally{yt=o,G.p=a,w.T=l}}kt=1,Kd(),Jd(),kd()}}function Kd(){if(kt===1){kt=0;var t=_n,e=Hl,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=w.T,w.T=null;var l=G.p;G.p=2;var a=yt;yt|=4;try{wd(e,t);var i=Kr,o=Uf(t.containerInfo),s=i.focusedElem,p=i.selectionRange;if(o!==s&&s&&s.ownerDocument&&jf(s.ownerDocument.documentElement,s)){if(p!==null&&bc(s)){var E=p.start,_=p.end;if(_===void 0&&(_=E),"selectionStart"in s)s.selectionStart=E,s.selectionEnd=Math.min(_,s.value.length);else{var j=s.ownerDocument||document,T=j&&j.defaultView||window;if(T.getSelection){var O=T.getSelection(),et=s.textContent.length,P=Math.min(p.start,et),St=p.end===void 0?P:Math.min(p.end,et);!O.extend&&P>St&&(o=St,St=P,P=o);var x=Nf(s,P),b=Nf(s,St);if(x&&b&&(O.rangeCount!==1||O.anchorNode!==x.node||O.anchorOffset!==x.offset||O.focusNode!==b.node||O.focusOffset!==b.offset)){var S=j.createRange();S.setStart(x.node,x.offset),O.removeAllRanges(),P>St?(O.addRange(S),O.extend(b.node,b.offset)):(S.setEnd(b.node,b.offset),O.addRange(S))}}}}for(j=[],O=s;O=O.parentNode;)O.nodeType===1&&j.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<j.length;s++){var M=j[s];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}vi=!!Vr,Kr=Vr=null}finally{yt=a,G.p=l,w.T=n}}t.current=e,kt=2}}function Jd(){if(kt===2){kt=0;var t=_n,e=Hl,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=w.T,w.T=null;var l=G.p;G.p=2;var a=yt;yt|=4;try{Ad(t,e.alternate,e)}finally{yt=a,G.p=l,w.T=n}}kt=3}}function kd(){if(kt===4||kt===3){kt=0,e0();var t=_n,e=Hl,n=Bl,l=Cd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?kt=5:(kt=0,Hl=_n=null,$d(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(wn=null),Pi(n),e=e.stateNode,oe&&typeof oe.onCommitFiberRoot=="function")try{oe.onCommitFiberRoot(na,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=w.T,a=G.p,G.p=2,w.T=null;try{for(var i=t.onRecoverableError,o=0;o<l.length;o++){var s=l[o];i(s.value,{componentStack:s.stack})}}finally{w.T=e,G.p=a}}(Bl&3)!==0&&ii(),Le(t),a=t.pendingLanes,(n&4194090)!==0&&(a&42)!==0?t===Dr?La++:(La=0,Dr=t):La=0,Ga(0)}}function $d(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,xa(e)))}function ii(t){return Kd(),Jd(),kd(),Wd()}function Wd(){if(kt!==5)return!1;var t=_n,e=_r;_r=0;var n=Pi(Bl),l=w.T,a=G.p;try{G.p=32>n?32:n,w.T=null,n=Mr,Mr=null;var i=_n,o=Bl;if(kt=0,Hl=_n=null,Bl=0,(yt&6)!==0)throw Error(r(331));var s=yt;if(yt|=4,jd(i.current),Md(i,i.current,o,n),yt=s,Ga(0,!1),oe&&typeof oe.onPostCommitFiberRoot=="function")try{oe.onPostCommitFiberRoot(na,i)}catch{}return!0}finally{G.p=a,w.T=l,$d(t,e)}}function Fd(t,e,n){e=ze(n,e),e=or(t.stateNode,e,2),t=bn(t,e,2),t!==null&&(aa(t,2),Le(t))}function zt(t,e,n){if(t.tag===3)Fd(t,t,n);else for(;e!==null;){if(e.tag===3){Fd(e,t,n);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wn===null||!wn.has(l))){t=ze(n,t),n=ed(2),l=bn(e,n,2),l!==null&&(nd(n,l,e,t),aa(l,2),Le(l));break}}e=e.return}}function Cr(t,e,n){var l=t.pingCache;if(l===null){l=t.pingCache=new wp;var a=new Set;l.set(e,a)}else a=l.get(e),a===void 0&&(a=new Set,l.set(e,a));a.has(n)||(Tr=!0,a.add(n),t=jp.bind(null,t,e,n),e.then(t,t))}function jp(t,e,n){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,At===t&&(dt&n)===n&&(Dt===4||Dt===3&&(dt&62914560)===dt&&300>Ce()-wr?(yt&2)===0&&Yl(t,0):Rr|=n,ql===dt&&(ql=0)),Le(t)}function Pd(t,e){e===0&&(e=Jo()),t=Sl(t,e),t!==null&&(aa(t,e),Le(t))}function Up(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Pd(t,n)}function Cp(t,e){var n=0;switch(t.tag){case 13:var l=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(e),Pd(t,n)}function qp(t,e){return ki(t,e)}var ci=null,Gl=null,qr=!1,ri=!1,Hr=!1,nl=0;function Le(t){t!==Gl&&t.next===null&&(Gl===null?ci=Gl=t:Gl=Gl.next=t),ri=!0,qr||(qr=!0,Bp())}function Ga(t,e){if(!Hr&&ri){Hr=!0;do for(var n=!1,l=ci;l!==null;){if(t!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var o=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-fe(42|t)+1)-1,i&=a&~(o&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,nh(l,i))}else i=dt,i=mu(l,l===At?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||la(l,i)||(n=!0,nh(l,i));l=l.next}while(n);Hr=!1}}function Hp(){Id()}function Id(){ri=qr=!1;var t=0;nl!==0&&(Kp()&&(t=nl),nl=0);for(var e=Ce(),n=null,l=ci;l!==null;){var a=l.next,i=th(l,e);i===0?(l.next=null,n===null?ci=a:n.next=a,a===null&&(Gl=n)):(n=l,(t!==0||(i&3)!==0)&&(ri=!0)),l=a}Ga(t)}function th(t,e){for(var n=t.suspendedLanes,l=t.pingedLanes,a=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var o=31-fe(i),s=1<<o,p=a[o];p===-1?((s&n)===0||(s&l)!==0)&&(a[o]=o0(s,e)):p<=e&&(t.expiredLanes|=s),i&=~s}if(e=At,n=dt,n=mu(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,n===0||t===e&&(vt===2||vt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&$i(l),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||la(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(l!==null&&$i(l),Pi(n)){case 2:case 8:n=Zo;break;case 32:n=su;break;case 268435456:n=Vo;break;default:n=su}return l=eh.bind(null,t),n=ki(n,l),t.callbackPriority=e,t.callbackNode=n,e}return l!==null&&l!==null&&$i(l),t.callbackPriority=2,t.callbackNode=null,2}function eh(t,e){if(kt!==0&&kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(ii()&&t.callbackNode!==n)return null;var l=dt;return l=mu(t,t===At?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Hd(t,l,e),th(t,Ce()),t.callbackNode!=null&&t.callbackNode===n?eh.bind(null,t):null)}function nh(t,e){if(ii())return null;Hd(t,e,!0)}function Bp(){kp(function(){(yt&6)!==0?ki(Qo,Hp):Id()})}function Br(){return nl===0&&(nl=Ko()),nl}function lh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bu(""+t)}function ah(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Yp(t,e,n,l,a){if(e==="submit"&&n&&n.stateNode===a){var i=lh((a[le]||null).action),o=l.submitter;o&&(e=(e=o[le]||null)?lh(e.formAction):o.getAttribute("formAction"),e!==null&&(i=e,o=null));var s=new zu("action","action",null,l,a);t.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(nl!==0){var p=o?ah(a,o):new FormData(a);ar(n,{pending:!0,data:p,method:a.method,action:i},null,p)}}else typeof i=="function"&&(s.preventDefault(),p=o?ah(a,o):new FormData(a),ar(n,{pending:!0,data:p,method:a.method,action:i},i,p))},currentTarget:a}]})}}for(var Yr=0;Yr<zc.length;Yr++){var Lr=zc[Yr],Lp=Lr.toLowerCase(),Gp=Lr[0].toUpperCase()+Lr.slice(1);De(Lp,"on"+Gp)}De(Hf,"onAnimationEnd"),De(Bf,"onAnimationIteration"),De(Yf,"onAnimationStart"),De("dblclick","onDoubleClick"),De("focusin","onFocus"),De("focusout","onBlur"),De(ap,"onTransitionRun"),De(up,"onTransitionStart"),De(ip,"onTransitionCancel"),De(Lf,"onTransitionEnd"),sl("onMouseEnter",["mouseout","mouseover"]),sl("onMouseLeave",["mouseout","mouseover"]),sl("onPointerEnter",["pointerout","pointerover"]),sl("onPointerLeave",["pointerout","pointerover"]),Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xa));function uh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var l=t[n],a=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var o=l.length-1;0<=o;o--){var s=l[o],p=s.instance,E=s.currentTarget;if(s=s.listener,p!==i&&a.isPropagationStopped())break t;i=s,a.currentTarget=E;try{i(a)}catch(_){$u(_)}a.currentTarget=null,i=p}else for(o=0;o<l.length;o++){if(s=l[o],p=s.instance,E=s.currentTarget,s=s.listener,p!==i&&a.isPropagationStopped())break t;i=s,a.currentTarget=E;try{i(a)}catch(_){$u(_)}a.currentTarget=null,i=p}}}}function st(t,e){var n=e[Ii];n===void 0&&(n=e[Ii]=new Set);var l=t+"__bubble";n.has(l)||(ih(e,t,2,!1),n.add(l))}function Gr(t,e,n){var l=0;e&&(l|=4),ih(n,t,l,e)}var oi="_reactListening"+Math.random().toString(36).slice(2);function Xr(t){if(!t[oi]){t[oi]=!0,Po.forEach(function(n){n!=="selectionchange"&&(Xp.has(n)||Gr(n,!1,t),Gr(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oi]||(e[oi]=!0,Gr("selectionchange",!1,e))}}function ih(t,e,n,l){switch(Mh(e)){case 2:var a=pg;break;case 8:a=gg;break;default:a=no}n=a.bind(null,e,n,t),a=void 0,!fc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),l?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Qr(t,e,n,l,a){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var s=l.stateNode.containerInfo;if(s===a)break;if(o===4)for(o=l.return;o!==null;){var p=o.tag;if((p===3||p===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;s!==null;){if(o=rl(s),o===null)return;if(p=o.tag,p===5||p===6||p===26||p===27){l=i=o;continue t}s=s.parentNode}}l=l.return}hf(function(){var E=i,_=rc(n),j=[];t:{var T=Gf.get(t);if(T!==void 0){var O=zu,et=t;switch(t){case"keypress":if(Su(n)===0)break t;case"keydown":case"keyup":O=q0;break;case"focusin":et="focus",O=mc;break;case"focusout":et="blur",O=mc;break;case"beforeblur":case"afterblur":O=mc;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=A0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Y0;break;case Hf:case Bf:case Yf:O=O0;break;case Lf:O=G0;break;case"scroll":case"scrollend":O=E0;break;case"wheel":O=Q0;break;case"copy":case"cut":case"paste":O=_0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=vf;break;case"toggle":case"beforetoggle":O=V0}var P=(e&4)!==0,St=!P&&(t==="scroll"||t==="scrollend"),x=P?T!==null?T+"Capture":null:T;P=[];for(var b=E,S;b!==null;){var M=b;if(S=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||S===null||x===null||(M=ca(b,x),M!=null&&P.push(Qa(b,M,S))),St)break;b=b.return}0<P.length&&(T=new O(T,et,null,n,_),j.push({event:T,listeners:P}))}}if((e&7)===0){t:{if(T=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",T&&n!==cc&&(et=n.relatedTarget||n.fromElement)&&(rl(et)||et[cl]))break t;if((O||T)&&(T=_.window===_?_:(T=_.ownerDocument)?T.defaultView||T.parentWindow:window,O?(et=n.relatedTarget||n.toElement,O=E,et=et?rl(et):null,et!==null&&(St=h(et),P=et.tag,et!==St||P!==5&&P!==27&&P!==6)&&(et=null)):(O=null,et=E),O!==et)){if(P=gf,M="onMouseLeave",x="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(P=vf,M="onPointerLeave",x="onPointerEnter",b="pointer"),St=O==null?T:ia(O),S=et==null?T:ia(et),T=new P(M,b+"leave",O,n,_),T.target=St,T.relatedTarget=S,M=null,rl(_)===E&&(P=new P(x,b+"enter",et,n,_),P.target=S,P.relatedTarget=St,M=P),St=M,O&&et)e:{for(P=O,x=et,b=0,S=P;S;S=Xl(S))b++;for(S=0,M=x;M;M=Xl(M))S++;for(;0<b-S;)P=Xl(P),b--;for(;0<S-b;)x=Xl(x),S--;for(;b--;){if(P===x||x!==null&&P===x.alternate)break e;P=Xl(P),x=Xl(x)}P=null}else P=null;O!==null&&ch(j,T,O,P,!1),et!==null&&St!==null&&ch(j,St,et,P,!0)}}t:{if(T=E?ia(E):window,O=T.nodeName&&T.nodeName.toLowerCase(),O==="select"||O==="input"&&T.type==="file")var K=Rf;else if(Af(T))if(Of)K=ep;else{K=I0;var ct=P0}else O=T.nodeName,!O||O.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?E&&ic(E.elementType)&&(K=Rf):K=tp;if(K&&(K=K(t,E))){Tf(j,K,n,_);break t}ct&&ct(t,T,E),t==="focusout"&&E&&T.type==="number"&&E.memoizedProps.value!=null&&uc(T,"number",T.value)}switch(ct=E?ia(E):window,t){case"focusin":(Af(ct)||ct.contentEditable==="true")&&(vl=ct,xc=E,pa=null);break;case"focusout":pa=xc=vl=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,Cf(j,n,_);break;case"selectionchange":if(lp)break;case"keydown":case"keyup":Cf(j,n,_)}var J;if(gc)t:{switch(t){case"compositionstart":var tt="onCompositionStart";break t;case"compositionend":tt="onCompositionEnd";break t;case"compositionupdate":tt="onCompositionUpdate";break t}tt=void 0}else yl?Ef(t,n)&&(tt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(tt="onCompositionStart");tt&&(bf&&n.locale!=="ko"&&(yl||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&yl&&(J=mf()):(pn=_,sc="value"in pn?pn.value:pn.textContent,yl=!0)),ct=fi(E,tt),0<ct.length&&(tt=new yf(tt,t,null,n,_),j.push({event:tt,listeners:ct}),J?tt.data=J:(J=zf(n),J!==null&&(tt.data=J)))),(J=J0?k0(t,n):$0(t,n))&&(tt=fi(E,"onBeforeInput"),0<tt.length&&(ct=new yf("onBeforeInput","beforeinput",null,n,_),j.push({event:ct,listeners:tt}),ct.data=J)),Yp(j,t,E,n,_)}uh(j,e)})}function Qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fi(t,e){for(var n=e+"Capture",l=[];t!==null;){var a=t,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=ca(t,n),a!=null&&l.unshift(Qa(t,a,i)),a=ca(t,e),a!=null&&l.push(Qa(t,a,i))),t.tag===3)return l;t=t.return}return[]}function Xl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ch(t,e,n,l,a){for(var i=e._reactName,o=[];n!==null&&n!==l;){var s=n,p=s.alternate,E=s.stateNode;if(s=s.tag,p!==null&&p===l)break;s!==5&&s!==26&&s!==27||E===null||(p=E,a?(E=ca(n,i),E!=null&&o.unshift(Qa(n,E,p))):a||(E=ca(n,i),E!=null&&o.push(Qa(n,E,p)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Qp=/\r\n?/g,Zp=/\u0000|\uFFFD/g;function rh(t){return(typeof t=="string"?t:""+t).replace(Qp,`
`).replace(Zp,"")}function oh(t,e){return e=rh(e),rh(t)===e}function si(){}function xt(t,e,n,l,a,i){switch(n){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||ml(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&ml(t,""+l);break;case"className":gu(t,"class",l);break;case"tabIndex":gu(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":gu(t,n,l);break;case"style":sf(t,l,i);break;case"data":if(e!=="object"){gu(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=bu(""+l),t.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(e!=="input"&&xt(t,e,"name",a.name,a,null),xt(t,e,"formEncType",a.formEncType,a,null),xt(t,e,"formMethod",a.formMethod,a,null),xt(t,e,"formTarget",a.formTarget,a,null)):(xt(t,e,"encType",a.encType,a,null),xt(t,e,"method",a.method,a,null),xt(t,e,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=bu(""+l),t.setAttribute(n,l);break;case"onClick":l!=null&&(t.onclick=si);break;case"onScroll":l!=null&&st("scroll",t);break;case"onScrollEnd":l!=null&&st("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}n=bu(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""+l):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":l===!0?t.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,l):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(n,l):t.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(n):t.setAttribute(n,l);break;case"popover":st("beforetoggle",t),st("toggle",t),pu(t,"popover",l);break;case"xlinkActuate":Je(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Je(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Je(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Je(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Je(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Je(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Je(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":pu(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=x0.get(n)||n,pu(t,n,l))}}function Zr(t,e,n,l,a,i){switch(n){case"style":sf(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"children":typeof l=="string"?ml(t,l):(typeof l=="number"||typeof l=="bigint")&&ml(t,""+l);break;case"onScroll":l!=null&&st("scroll",t);break;case"onScrollEnd":l!=null&&st("scrollend",t);break;case"onClick":l!=null&&(t.onclick=si);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Io.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),i=t[le]||null,i=i!=null?i[n]:null,typeof i=="function"&&t.removeEventListener(e,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,l,a);break t}n in t?t[n]=l:l===!0?t.setAttribute(n,""):pu(t,n,l)}}}function $t(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":st("error",t),st("load",t);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:xt(t,e,i,o,n,null)}}a&&xt(t,e,"srcSet",n.srcSet,n,null),l&&xt(t,e,"src",n.src,n,null);return;case"input":st("invalid",t);var s=i=o=a=null,p=null,E=null;for(l in n)if(n.hasOwnProperty(l)){var _=n[l];if(_!=null)switch(l){case"name":a=_;break;case"type":o=_;break;case"checked":p=_;break;case"defaultChecked":E=_;break;case"value":i=_;break;case"defaultValue":s=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(137,e));break;default:xt(t,e,l,_,n,null)}}cf(t,i,s,p,E,o,a,!1),yu(t);return;case"select":st("invalid",t),l=o=i=null;for(a in n)if(n.hasOwnProperty(a)&&(s=n[a],s!=null))switch(a){case"value":i=s;break;case"defaultValue":o=s;break;case"multiple":l=s;default:xt(t,e,a,s,n,null)}e=i,n=o,t.multiple=!!l,e!=null?hl(t,!!l,e,!1):n!=null&&hl(t,!!l,n,!0);return;case"textarea":st("invalid",t),i=a=l=null;for(o in n)if(n.hasOwnProperty(o)&&(s=n[o],s!=null))switch(o){case"value":l=s;break;case"defaultValue":a=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(r(91));break;default:xt(t,e,o,s,n,null)}of(t,l,a,i),yu(t);return;case"option":for(p in n)if(n.hasOwnProperty(p)&&(l=n[p],l!=null))switch(p){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:xt(t,e,p,l,n,null)}return;case"dialog":st("beforetoggle",t),st("toggle",t),st("cancel",t),st("close",t);break;case"iframe":case"object":st("load",t);break;case"video":case"audio":for(l=0;l<Xa.length;l++)st(Xa[l],t);break;case"image":st("error",t),st("load",t);break;case"details":st("toggle",t);break;case"embed":case"source":case"link":st("error",t),st("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(l=n[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:xt(t,e,E,l,n,null)}return;default:if(ic(e)){for(_ in n)n.hasOwnProperty(_)&&(l=n[_],l!==void 0&&Zr(t,e,_,l,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(l=n[s],l!=null&&xt(t,e,s,l,n,null))}function Vp(t,e,n,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,o=null,s=null,p=null,E=null,_=null;for(O in n){var j=n[O];if(n.hasOwnProperty(O)&&j!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":p=j;default:l.hasOwnProperty(O)||xt(t,e,O,null,l,j)}}for(var T in l){var O=l[T];if(j=n[T],l.hasOwnProperty(T)&&(O!=null||j!=null))switch(T){case"type":i=O;break;case"name":a=O;break;case"checked":E=O;break;case"defaultChecked":_=O;break;case"value":o=O;break;case"defaultValue":s=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,e));break;default:O!==j&&xt(t,e,T,O,l,j)}}ac(t,o,s,p,E,_,i,a);return;case"select":O=o=s=T=null;for(i in n)if(p=n[i],n.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":O=p;default:l.hasOwnProperty(i)||xt(t,e,i,null,l,p)}for(a in l)if(i=l[a],p=n[a],l.hasOwnProperty(a)&&(i!=null||p!=null))switch(a){case"value":T=i;break;case"defaultValue":s=i;break;case"multiple":o=i;default:i!==p&&xt(t,e,a,i,l,p)}e=s,n=o,l=O,T!=null?hl(t,!!n,T,!1):!!l!=!!n&&(e!=null?hl(t,!!n,e,!0):hl(t,!!n,n?[]:"",!1));return;case"textarea":O=T=null;for(s in n)if(a=n[s],n.hasOwnProperty(s)&&a!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:xt(t,e,s,null,l,a)}for(o in l)if(a=l[o],i=n[o],l.hasOwnProperty(o)&&(a!=null||i!=null))switch(o){case"value":T=a;break;case"defaultValue":O=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(r(91));break;default:a!==i&&xt(t,e,o,a,l,i)}rf(t,T,O);return;case"option":for(var et in n)if(T=n[et],n.hasOwnProperty(et)&&T!=null&&!l.hasOwnProperty(et))switch(et){case"selected":t.selected=!1;break;default:xt(t,e,et,null,l,T)}for(p in l)if(T=l[p],O=n[p],l.hasOwnProperty(p)&&T!==O&&(T!=null||O!=null))switch(p){case"selected":t.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:xt(t,e,p,T,l,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in n)T=n[P],n.hasOwnProperty(P)&&T!=null&&!l.hasOwnProperty(P)&&xt(t,e,P,null,l,T);for(E in l)if(T=l[E],O=n[E],l.hasOwnProperty(E)&&T!==O&&(T!=null||O!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,e));break;default:xt(t,e,E,T,l,O)}return;default:if(ic(e)){for(var St in n)T=n[St],n.hasOwnProperty(St)&&T!==void 0&&!l.hasOwnProperty(St)&&Zr(t,e,St,void 0,l,T);for(_ in l)T=l[_],O=n[_],!l.hasOwnProperty(_)||T===O||T===void 0&&O===void 0||Zr(t,e,_,T,l,O);return}}for(var x in n)T=n[x],n.hasOwnProperty(x)&&T!=null&&!l.hasOwnProperty(x)&&xt(t,e,x,null,l,T);for(j in l)T=l[j],O=n[j],!l.hasOwnProperty(j)||T===O||T==null&&O==null||xt(t,e,j,T,l,O)}var Vr=null,Kr=null;function di(t){return t.nodeType===9?t:t.ownerDocument}function fh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Jr(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kr=null;function Kp(){var t=window.event;return t&&t.type==="popstate"?t===kr?!1:(kr=t,!0):(kr=null,!1)}var dh=typeof setTimeout=="function"?setTimeout:void 0,Jp=typeof clearTimeout=="function"?clearTimeout:void 0,hh=typeof Promise=="function"?Promise:void 0,kp=typeof queueMicrotask=="function"?queueMicrotask:typeof hh<"u"?function(t){return hh.resolve(null).then(t).catch($p)}:dh;function $p(t){setTimeout(function(){throw t})}function Dn(t){return t==="head"}function mh(t,e){var n=e,l=0,a=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(0<l&&8>l){n=l;var o=t.ownerDocument;if(n&1&&Za(o.documentElement),n&2&&Za(o.body),n&4)for(n=o.head,Za(n),o=n.firstChild;o;){var s=o.nextSibling,p=o.nodeName;o[ua]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=s}}if(a===0){t.removeChild(i),Pa(e);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:l=n.charCodeAt(0)-48;else l=0;n=i}while(n);Pa(e)}function $r(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":$r(n),tc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Wp(t,e,n,l){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ua])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=je(t.nextSibling),t===null)break}return null}function Fp(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=je(t.nextSibling),t===null))return null;return t}function Wr(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Pp(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var l=function(){e(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function je(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Fr=null;function ph(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function gh(t,e,n){switch(e=di(n),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Za(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);tc(t)}var _e=new Map,yh=new Set;function hi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var rn=G.d;G.d={f:Ip,r:tg,D:eg,C:ng,L:lg,m:ag,X:ig,S:ug,M:cg};function Ip(){var t=rn.f(),e=ai();return t||e}function tg(t){var e=ol(t);e!==null&&e.tag===5&&e.type==="form"?Hs(e):rn.r(t)}var Ql=typeof document>"u"?null:document;function vh(t,e,n){var l=Ql;if(l&&typeof e=="string"&&e){var a=Ee(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),yh.has(a)||(yh.add(a),t={rel:t,crossOrigin:n,href:e},l.querySelector(a)===null&&(e=l.createElement("link"),$t(e,"link",t),Xt(e),l.head.appendChild(e)))}}function eg(t){rn.D(t),vh("dns-prefetch",t,null)}function ng(t,e){rn.C(t,e),vh("preconnect",t,e)}function lg(t,e,n){rn.L(t,e,n);var l=Ql;if(l&&t&&e){var a='link[rel="preload"][as="'+Ee(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ee(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ee(n.imageSizes)+'"]')):a+='[href="'+Ee(t)+'"]';var i=a;switch(e){case"style":i=Zl(t);break;case"script":i=Vl(t)}_e.has(i)||(t=A({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),_e.set(i,t),l.querySelector(a)!==null||e==="style"&&l.querySelector(Va(i))||e==="script"&&l.querySelector(Ka(i))||(e=l.createElement("link"),$t(e,"link",t),Xt(e),l.head.appendChild(e)))}}function ag(t,e){rn.m(t,e);var n=Ql;if(n&&t){var l=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Ee(l)+'"][href="'+Ee(t)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Vl(t)}if(!_e.has(i)&&(t=A({rel:"modulepreload",href:t},e),_e.set(i,t),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ka(i)))return}l=n.createElement("link"),$t(l,"link",t),Xt(l),n.head.appendChild(l)}}}function ug(t,e,n){rn.S(t,e,n);var l=Ql;if(l&&t){var a=fl(l).hoistableStyles,i=Zl(t);e=e||"default";var o=a.get(i);if(!o){var s={loading:0,preload:null};if(o=l.querySelector(Va(i)))s.loading=5;else{t=A({rel:"stylesheet",href:t,"data-precedence":e},n),(n=_e.get(i))&&Pr(t,n);var p=o=l.createElement("link");Xt(p),$t(p,"link",t),p._p=new Promise(function(E,_){p.onload=E,p.onerror=_}),p.addEventListener("load",function(){s.loading|=1}),p.addEventListener("error",function(){s.loading|=2}),s.loading|=4,mi(o,e,l)}o={type:"stylesheet",instance:o,count:1,state:s},a.set(i,o)}}}function ig(t,e){rn.X(t,e);var n=Ql;if(n&&t){var l=fl(n).hoistableScripts,a=Vl(t),i=l.get(a);i||(i=n.querySelector(Ka(a)),i||(t=A({src:t,async:!0},e),(e=_e.get(a))&&Ir(t,e),i=n.createElement("script"),Xt(i),$t(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function cg(t,e){rn.M(t,e);var n=Ql;if(n&&t){var l=fl(n).hoistableScripts,a=Vl(t),i=l.get(a);i||(i=n.querySelector(Ka(a)),i||(t=A({src:t,async:!0,type:"module"},e),(e=_e.get(a))&&Ir(t,e),i=n.createElement("script"),Xt(i),$t(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function bh(t,e,n,l){var a=(a=I.current)?hi(a):null;if(!a)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Zl(n.href),n=fl(a).hoistableStyles,l=n.get(e),l||(l={type:"style",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Zl(n.href);var i=fl(a).hoistableStyles,o=i.get(t);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,o),(i=a.querySelector(Va(t)))&&!i._p&&(o.instance=i,o.state.loading=5),_e.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},_e.set(t,n),i||rg(a,t,n,o.state))),e&&l===null)throw Error(r(528,""));return o}if(e&&l!==null)throw Error(r(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Vl(n),n=fl(a).hoistableScripts,l=n.get(e),l||(l={type:"script",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Zl(t){return'href="'+Ee(t)+'"'}function Va(t){return'link[rel="stylesheet"]['+t+"]"}function xh(t){return A({},t,{"data-precedence":t.precedence,precedence:null})}function rg(t,e,n,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),$t(e,"link",n),Xt(e),t.head.appendChild(e))}function Vl(t){return'[src="'+Ee(t)+'"]'}function Ka(t){return"script[async]"+t}function Sh(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Ee(n.href)+'"]');if(l)return e.instance=l,Xt(l),l;var a=A({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Xt(l),$t(l,"style",a),mi(l,n.precedence,t),e.instance=l;case"stylesheet":a=Zl(n.href);var i=t.querySelector(Va(a));if(i)return e.state.loading|=4,e.instance=i,Xt(i),i;l=xh(n),(a=_e.get(a))&&Pr(l,a),i=(t.ownerDocument||t).createElement("link"),Xt(i);var o=i;return o._p=new Promise(function(s,p){o.onload=s,o.onerror=p}),$t(i,"link",l),e.state.loading|=4,mi(i,n.precedence,t),e.instance=i;case"script":return i=Vl(n.src),(a=t.querySelector(Ka(i)))?(e.instance=a,Xt(a),a):(l=n,(a=_e.get(i))&&(l=A({},n),Ir(l,a)),t=t.ownerDocument||t,a=t.createElement("script"),Xt(a),$t(a,"link",l),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,mi(l,n.precedence,t));return e.instance}function mi(t,e,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,o=0;o<l.length;o++){var s=l[o];if(s.dataset.precedence===e)i=s;else if(i!==a)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Pr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ir(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var pi=null;function Eh(t,e,n){if(pi===null){var l=new Map,a=pi=new Map;a.set(n,l)}else a=pi,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(t))return l;for(l.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var i=n[a];if(!(i[ua]||i[Ft]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(e)||"";o=t+o;var s=l.get(o);s?s.push(i):l.set(o,[i])}}return l}function zh(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function og(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Ah(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ja=null;function fg(){}function sg(t,e,n){if(Ja===null)throw Error(r(475));var l=Ja;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var a=Zl(n.href),i=t.querySelector(Va(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=gi.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=i,Xt(i);return}i=t.ownerDocument||t,n=xh(n),(a=_e.get(a))&&Pr(n,a),i=i.createElement("link"),Xt(i);var o=i;o._p=new Promise(function(s,p){o.onload=s,o.onerror=p}),$t(i,"link",n),e.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=gi.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}function dg(){if(Ja===null)throw Error(r(475));var t=Ja;return t.stylesheets&&t.count===0&&to(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&to(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function gi(){if(this.count--,this.count===0){if(this.stylesheets)to(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var yi=null;function to(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,yi=new Map,e.forEach(hg,t),yi=null,gi.call(t))}function hg(t,e){if(!(e.state.loading&4)){var n=yi.get(t);if(n)var l=n.get(null);else{n=new Map,yi.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var o=a[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),l=o)}l&&n.set(null,l)}a=e.instance,o=a.getAttribute("data-precedence"),i=n.get(o)||l,i===l&&n.set(null,a),n.set(o,a),this.count++,l=gi.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var ka={$$typeof:Z,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function mg(t,e,n,l,a,i,o,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Th(t,e,n,l,a,i,o,s,p,E,_,j){return t=new mg(t,e,n,o,s,p,E,j),e=1,i===!0&&(e|=24),i=de(3,null,null,e),t.current=i,i.stateNode=t,e=Cc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:e},Yc(i),t}function Rh(t){return t?(t=El,t):El}function Oh(t,e,n,l,a,i){a=Rh(a),l.context===null?l.context=a:l.pendingContext=a,l=vn(e),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=bn(t,l,e),n!==null&&(ye(n,t,e),Aa(n,t,e))}function wh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function eo(t,e){wh(t,e),(t=t.alternate)&&wh(t,e)}function _h(t){if(t.tag===13){var e=Sl(t,67108864);e!==null&&ye(e,t,67108864),eo(t,67108864)}}var vi=!0;function pg(t,e,n,l){var a=w.T;w.T=null;var i=G.p;try{G.p=2,no(t,e,n,l)}finally{G.p=i,w.T=a}}function gg(t,e,n,l){var a=w.T;w.T=null;var i=G.p;try{G.p=8,no(t,e,n,l)}finally{G.p=i,w.T=a}}function no(t,e,n,l){if(vi){var a=lo(l);if(a===null)Qr(t,e,l,bi,n),Dh(t,l);else if(vg(a,t,e,n,l))l.stopPropagation();else if(Dh(t,l),e&4&&-1<yg.indexOf(t)){for(;a!==null;){var i=ol(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Yn(i.pendingLanes);if(o!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var p=1<<31-fe(o);s.entanglements[1]|=p,o&=~p}Le(i),(yt&6)===0&&(ni=Ce()+500,Ga(0))}}break;case 13:s=Sl(i,2),s!==null&&ye(s,i,2),ai(),eo(i,2)}if(i=lo(l),i===null&&Qr(t,e,l,bi,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else Qr(t,e,l,null,n)}}function lo(t){return t=rc(t),ao(t)}var bi=null;function ao(t){if(bi=null,t=rl(t),t!==null){var e=h(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=y(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return bi=t,null}function Mh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(n0()){case Qo:return 2;case Zo:return 8;case su:case l0:return 32;case Vo:return 268435456;default:return 32}default:return 32}}var uo=!1,Nn=null,jn=null,Un=null,$a=new Map,Wa=new Map,Cn=[],yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dh(t,e){switch(t){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":$a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(e.pointerId)}}function Fa(t,e,n,l,a,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},e!==null&&(e=ol(e),e!==null&&_h(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function vg(t,e,n,l,a){switch(e){case"focusin":return Nn=Fa(Nn,t,e,n,l,a),!0;case"dragenter":return jn=Fa(jn,t,e,n,l,a),!0;case"mouseover":return Un=Fa(Un,t,e,n,l,a),!0;case"pointerover":var i=a.pointerId;return $a.set(i,Fa($a.get(i)||null,t,e,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,Wa.set(i,Fa(Wa.get(i)||null,t,e,n,l,a)),!0}return!1}function Nh(t){var e=rl(t.target);if(e!==null){var n=h(e);if(n!==null){if(e=n.tag,e===13){if(e=y(n),e!==null){t.blockedOn=e,s0(t.priority,function(){if(n.tag===13){var l=ge();l=Fi(l);var a=Sl(n,l);a!==null&&ye(a,n,l),eo(n,l)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lo(t.nativeEvent);if(n===null){n=t.nativeEvent;var l=new n.constructor(n.type,n);cc=l,n.target.dispatchEvent(l),cc=null}else return e=ol(n),e!==null&&_h(e),t.blockedOn=n,!1;e.shift()}return!0}function jh(t,e,n){xi(t)&&n.delete(e)}function bg(){uo=!1,Nn!==null&&xi(Nn)&&(Nn=null),jn!==null&&xi(jn)&&(jn=null),Un!==null&&xi(Un)&&(Un=null),$a.forEach(jh),Wa.forEach(jh)}function Si(t,e){t.blockedOn===e&&(t.blockedOn=null,uo||(uo=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,bg)))}var Ei=null;function Uh(t){Ei!==t&&(Ei=t,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Ei===t&&(Ei=null);for(var e=0;e<t.length;e+=3){var n=t[e],l=t[e+1],a=t[e+2];if(typeof l!="function"){if(ao(l||n)===null)continue;break}var i=ol(n);i!==null&&(t.splice(e,3),e-=3,ar(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Pa(t){function e(p){return Si(p,t)}Nn!==null&&Si(Nn,t),jn!==null&&Si(jn,t),Un!==null&&Si(Un,t),$a.forEach(e),Wa.forEach(e);for(var n=0;n<Cn.length;n++){var l=Cn[n];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)Nh(n),n.blockedOn===null&&Cn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],o=a[le]||null;if(typeof i=="function")o||Uh(n);else if(o){var s=null;if(i&&i.hasAttribute("formAction")){if(a=i,o=i[le]||null)s=o.formAction;else if(ao(a)!==null)continue}else s=o.action;typeof s=="function"?n[l+1]=s:(n.splice(l,3),l-=3),Uh(n)}}}function io(t){this._internalRoot=t}zi.prototype.render=io.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var n=e.current,l=ge();Oh(n,l,t,e,null,null)},zi.prototype.unmount=io.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Oh(t.current,2,null,t,null,null),ai(),e[cl]=null}};function zi(t){this._internalRoot=t}zi.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wo();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cn.length&&e!==0&&e<Cn[n].priority;n++);Cn.splice(n,0,t),n===0&&Nh(t)}};var Ch=c.version;if(Ch!=="19.1.1")throw Error(r(527,Ch,"19.1.1"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=v(e),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var xg={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{na=Ai.inject(xg),oe=Ai}catch{}}return tu.createRoot=function(t,e){if(!d(t))throw Error(r(299));var n=!1,l="",a=Fs,i=Ps,o=Is,s=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(s=e.unstable_transitionCallbacks)),e=Th(t,1,!1,null,null,n,l,a,i,o,s,null),t[cl]=e.current,Xr(t),new io(e)},tu.hydrateRoot=function(t,e,n){if(!d(t))throw Error(r(299));var l=!1,a="",i=Fs,o=Ps,s=Is,p=null,E=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(p=n.unstable_transitionCallbacks),n.formState!==void 0&&(E=n.formState)),e=Th(t,1,!0,e,n??null,l,a,i,o,s,p,E),e.context=Rh(null),n=e.current,l=ge(),l=Fi(l),a=vn(l),a.callback=null,bn(n,a,l),n=l,e.current.lanes=n,aa(e,n),Le(e),t[cl]=e.current,Xr(t),new zi(e)},tu.version="19.1.1",tu}var Vh;function Dg(){if(Vh)return oo.exports;Vh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(c){console.error(c)}}return u(),oo.exports=Mg(),oo.exports}var Ng=Dg();/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Kh="popstate";function jg(u={}){function c(r,d){let{pathname:h,search:y,hash:R}=r.location;return xo("",{pathname:h,search:y,hash:R},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function f(r,d){return typeof d=="string"?d:uu(d)}return Cg(c,f,null,u)}function _t(u,c){if(u===!1||u===null||typeof u>"u")throw new Error(c)}function Xe(u,c){if(!u){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Ug(){return Math.random().toString(36).substring(2,10)}function Jh(u,c){return{usr:u.state,key:u.key,idx:c}}function xo(u,c,f=null,r){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof c=="string"?Il(c):c,state:f,key:c&&c.key||r||Ug()}}function uu({pathname:u="/",search:c="",hash:f=""}){return c&&c!=="?"&&(u+=c.charAt(0)==="?"?c:"?"+c),f&&f!=="#"&&(u+=f.charAt(0)==="#"?f:"#"+f),u}function Il(u){let c={};if(u){let f=u.indexOf("#");f>=0&&(c.hash=u.substring(f),u=u.substring(0,f));let r=u.indexOf("?");r>=0&&(c.search=u.substring(r),u=u.substring(0,r)),u&&(c.pathname=u)}return c}function Cg(u,c,f,r={}){let{window:d=document.defaultView,v5Compat:h=!1}=r,y=d.history,R="POP",v=null,m=A();m==null&&(m=0,y.replaceState({...y.state,idx:m},""));function A(){return(y.state||{idx:null}).idx}function N(){R="POP";let Q=A(),q=Q==null?null:Q-m;m=Q,v&&v({action:R,location:L.location,delta:q})}function C(Q,q){R="PUSH";let k=xo(L.location,Q,q);m=A()+1;let Z=Jh(k,m),nt=L.createHref(k);try{y.pushState(Z,"",nt)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;d.location.assign(nt)}h&&v&&v({action:R,location:L.location,delta:1})}function H(Q,q){R="REPLACE";let k=xo(L.location,Q,q);m=A();let Z=Jh(k,m),nt=L.createHref(k);y.replaceState(Z,"",nt),h&&v&&v({action:R,location:L.location,delta:0})}function B(Q){return qg(Q)}let L={get action(){return R},get location(){return u(d,y)},listen(Q){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(Kh,N),v=Q,()=>{d.removeEventListener(Kh,N),v=null}},createHref(Q){return c(d,Q)},createURL:B,encodeLocation(Q){let q=B(Q);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:C,replace:H,go(Q){return y.go(Q)}};return L}function qg(u,c=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),_t(f,"No window.location.(origin|href) available to create URL");let r=typeof u=="string"?u:uu(u);return r=r.replace(/ $/,"%20"),!c&&r.startsWith("//")&&(r=f+r),new URL(r,f)}function hm(u,c,f="/"){return Hg(u,c,f,!1)}function Hg(u,c,f,r){let d=typeof c=="string"?Il(c):c,h=sn(d.pathname||"/",f);if(h==null)return null;let y=mm(u);Bg(y);let R=null;for(let v=0;R==null&&v<y.length;++v){let m=$g(h);R=Jg(y[v],m,r)}return R}function mm(u,c=[],f=[],r="",d=!1){let h=(y,R,v=d,m)=>{let A={relativePath:m===void 0?y.path||"":m,caseSensitive:y.caseSensitive===!0,childrenIndex:R,route:y};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(r)&&v)return;_t(A.relativePath.startsWith(r),`Absolute route path "${A.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(r.length)}let N=fn([r,A.relativePath]),C=f.concat(A);y.children&&y.children.length>0&&(_t(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),mm(y.children,c,C,N,v)),!(y.path==null&&!y.index)&&c.push({path:N,score:Vg(N,y.index),routesMeta:C})};return u.forEach((y,R)=>{if(y.path===""||!y.path?.includes("?"))h(y,R);else for(let v of pm(y.path))h(y,R,!0,v)}),c}function pm(u){let c=u.split("/");if(c.length===0)return[];let[f,...r]=c,d=f.endsWith("?"),h=f.replace(/\?$/,"");if(r.length===0)return d?[h,""]:[h];let y=pm(r.join("/")),R=[];return R.push(...y.map(v=>v===""?h:[h,v].join("/"))),d&&R.push(...y),R.map(v=>u.startsWith("/")&&v===""?"/":v)}function Bg(u){u.sort((c,f)=>c.score!==f.score?f.score-c.score:Kg(c.routesMeta.map(r=>r.childrenIndex),f.routesMeta.map(r=>r.childrenIndex)))}var Yg=/^:[\w-]+$/,Lg=3,Gg=2,Xg=1,Qg=10,Zg=-2,kh=u=>u==="*";function Vg(u,c){let f=u.split("/"),r=f.length;return f.some(kh)&&(r+=Zg),c&&(r+=Gg),f.filter(d=>!kh(d)).reduce((d,h)=>d+(Yg.test(h)?Lg:h===""?Xg:Qg),r)}function Kg(u,c){return u.length===c.length&&u.slice(0,-1).every((r,d)=>r===c[d])?u[u.length-1]-c[c.length-1]:0}function Jg(u,c,f=!1){let{routesMeta:r}=u,d={},h="/",y=[];for(let R=0;R<r.length;++R){let v=r[R],m=R===r.length-1,A=h==="/"?c:c.slice(h.length)||"/",N=Ci({path:v.relativePath,caseSensitive:v.caseSensitive,end:m},A),C=v.route;if(!N&&m&&f&&!r[r.length-1].route.index&&(N=Ci({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},A)),!N)return null;Object.assign(d,N.params),y.push({params:d,pathname:fn([h,N.pathname]),pathnameBase:Ig(fn([h,N.pathnameBase])),route:C}),N.pathnameBase!=="/"&&(h=fn([h,N.pathnameBase]))}return y}function Ci(u,c){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[f,r]=kg(u.path,u.caseSensitive,u.end),d=c.match(f);if(!d)return null;let h=d[0],y=h.replace(/(.)\/+$/,"$1"),R=d.slice(1);return{params:r.reduce((m,{paramName:A,isOptional:N},C)=>{if(A==="*"){let B=R[C]||"";y=h.slice(0,h.length-B.length).replace(/(.)\/+$/,"$1")}const H=R[C];return N&&!H?m[A]=void 0:m[A]=(H||"").replace(/%2F/g,"/"),m},{}),pathname:h,pathnameBase:y,pattern:u}}function kg(u,c=!1,f=!0){Xe(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let r=[],d="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,R,v)=>(r.push({paramName:R,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(r.push({paramName:"*"}),d+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?d+="\\/*$":u!==""&&u!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,c?void 0:"i"),r]}function $g(u){try{return u.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Xe(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),u}}function sn(u,c){if(c==="/")return u;if(!u.toLowerCase().startsWith(c.toLowerCase()))return null;let f=c.endsWith("/")?c.length-1:c.length,r=u.charAt(f);return r&&r!=="/"?null:u.slice(f)||"/"}function Wg(u,c="/"){let{pathname:f,search:r="",hash:d=""}=typeof u=="string"?Il(u):u;return{pathname:f?f.startsWith("/")?f:Fg(f,c):c,search:t1(r),hash:e1(d)}}function Fg(u,c){let f=c.replace(/\/+$/,"").split("/");return u.split("/").forEach(d=>{d===".."?f.length>1&&f.pop():d!=="."&&f.push(d)}),f.length>1?f.join("/"):"/"}function mo(u,c,f,r){return`Cannot include a '${u}' character in a manually specified \`to.${c}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Pg(u){return u.filter((c,f)=>f===0||c.route.path&&c.route.path.length>0)}function gm(u){let c=Pg(u);return c.map((f,r)=>r===c.length-1?f.pathname:f.pathnameBase)}function ym(u,c,f,r=!1){let d;typeof u=="string"?d=Il(u):(d={...u},_t(!d.pathname||!d.pathname.includes("?"),mo("?","pathname","search",d)),_t(!d.pathname||!d.pathname.includes("#"),mo("#","pathname","hash",d)),_t(!d.search||!d.search.includes("#"),mo("#","search","hash",d)));let h=u===""||d.pathname==="",y=h?"/":d.pathname,R;if(y==null)R=f;else{let N=c.length-1;if(!r&&y.startsWith("..")){let C=y.split("/");for(;C[0]==="..";)C.shift(),N-=1;d.pathname=C.join("/")}R=N>=0?c[N]:"/"}let v=Wg(d,R),m=y&&y!=="/"&&y.endsWith("/"),A=(h||y===".")&&f.endsWith("/");return!v.pathname.endsWith("/")&&(m||A)&&(v.pathname+="/"),v}var fn=u=>u.join("/").replace(/\/\/+/g,"/"),Ig=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),t1=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,e1=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u;function n1(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}var vm=["POST","PUT","PATCH","DELETE"];new Set(vm);var l1=["GET",...vm];new Set(l1);var ta=D.createContext(null);ta.displayName="DataRouter";var Li=D.createContext(null);Li.displayName="DataRouterState";D.createContext(!1);var bm=D.createContext({isTransitioning:!1});bm.displayName="ViewTransition";var a1=D.createContext(new Map);a1.displayName="Fetchers";var u1=D.createContext(null);u1.displayName="Await";var Qe=D.createContext(null);Qe.displayName="Navigation";var cu=D.createContext(null);cu.displayName="Location";var dn=D.createContext({outlet:null,matches:[],isDataRoute:!1});dn.displayName="Route";var Do=D.createContext(null);Do.displayName="RouteError";function i1(u,{relative:c}={}){_t(ru(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:r}=D.useContext(Qe),{hash:d,pathname:h,search:y}=ou(u,{relative:c}),R=h;return f!=="/"&&(R=h==="/"?f:fn([f,h])),r.createHref({pathname:R,search:y,hash:d})}function ru(){return D.useContext(cu)!=null}function il(){return _t(ru(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(cu).location}var xm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sm(u){D.useContext(Qe).static||D.useLayoutEffect(u)}function No(){let{isDataRoute:u}=D.useContext(dn);return u?b1():c1()}function c1(){_t(ru(),"useNavigate() may be used only in the context of a <Router> component.");let u=D.useContext(ta),{basename:c,navigator:f}=D.useContext(Qe),{matches:r}=D.useContext(dn),{pathname:d}=il(),h=JSON.stringify(gm(r)),y=D.useRef(!1);return Sm(()=>{y.current=!0}),D.useCallback((v,m={})=>{if(Xe(y.current,xm),!y.current)return;if(typeof v=="number"){f.go(v);return}let A=ym(v,JSON.parse(h),d,m.relative==="path");u==null&&c!=="/"&&(A.pathname=A.pathname==="/"?c:fn([c,A.pathname])),(m.replace?f.replace:f.push)(A,m.state,m)},[c,f,h,d,u])}D.createContext(null);function ou(u,{relative:c}={}){let{matches:f}=D.useContext(dn),{pathname:r}=il(),d=JSON.stringify(gm(f));return D.useMemo(()=>ym(u,JSON.parse(d),r,c==="path"),[u,d,r,c])}function r1(u,c){return Em(u,c)}function Em(u,c,f,r){_t(ru(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=D.useContext(Qe),{matches:h}=D.useContext(dn),y=h[h.length-1],R=y?y.params:{},v=y?y.pathname:"/",m=y?y.pathnameBase:"/",A=y&&y.route;{let q=A&&A.path||"";zm(v,!A||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let N=il(),C;if(c){let q=typeof c=="string"?Il(c):c;_t(m==="/"||q.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${q.pathname}" was given in the \`location\` prop.`),C=q}else C=N;let H=C.pathname||"/",B=H;if(m!=="/"){let q=m.replace(/^\//,"").split("/");B="/"+H.replace(/^\//,"").split("/").slice(q.length).join("/")}let L=hm(u,{pathname:B});Xe(A||L!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Xe(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=h1(L&&L.map(q=>Object.assign({},q,{params:Object.assign({},R,q.params),pathname:fn([m,d.encodeLocation?d.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?m:fn([m,d.encodeLocation?d.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),h,f,r);return c&&Q?D.createElement(cu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},Q):Q}function o1(){let u=v1(),c=n1(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),f=u instanceof Error?u.stack:null,r="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:r},h={padding:"2px 4px",backgroundColor:r},y=null;return console.error("Error handled by React Router default ErrorBoundary:",u),y=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:h},"ErrorBoundary")," or"," ",D.createElement("code",{style:h},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},c),f?D.createElement("pre",{style:d},f):null,y)}var f1=D.createElement(o1,null),s1=class extends D.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,c){return c.location!==u.location||c.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:c.error,location:c.location,revalidation:u.revalidation||c.revalidation}}componentDidCatch(u,c){console.error("React Router caught the following error during render",u,c)}render(){return this.state.error!==void 0?D.createElement(dn.Provider,{value:this.props.routeContext},D.createElement(Do.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function d1({routeContext:u,match:c,children:f}){let r=D.useContext(ta);return r&&r.static&&r.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=c.route.id),D.createElement(dn.Provider,{value:u},f)}function h1(u,c=[],f=null,r=null){if(u==null){if(!f)return null;if(f.errors)u=f.matches;else if(c.length===0&&!f.initialized&&f.matches.length>0)u=f.matches;else return null}let d=u,h=f?.errors;if(h!=null){let v=d.findIndex(m=>m.route.id&&h?.[m.route.id]!==void 0);_t(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let y=!1,R=-1;if(f)for(let v=0;v<d.length;v++){let m=d[v];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(R=v),m.route.id){let{loaderData:A,errors:N}=f,C=m.route.loader&&!A.hasOwnProperty(m.route.id)&&(!N||N[m.route.id]===void 0);if(m.route.lazy||C){y=!0,R>=0?d=d.slice(0,R+1):d=[d[0]];break}}}return d.reduceRight((v,m,A)=>{let N,C=!1,H=null,B=null;f&&(N=h&&m.route.id?h[m.route.id]:void 0,H=m.route.errorElement||f1,y&&(R<0&&A===0?(zm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,B=null):R===A&&(C=!0,B=m.route.hydrateFallbackElement||null)));let L=c.concat(d.slice(0,A+1)),Q=()=>{let q;return N?q=H:C?q=B:m.route.Component?q=D.createElement(m.route.Component,null):m.route.element?q=m.route.element:q=v,D.createElement(d1,{match:m,routeContext:{outlet:v,matches:L,isDataRoute:f!=null},children:q})};return f&&(m.route.ErrorBoundary||m.route.errorElement||A===0)?D.createElement(s1,{location:f.location,revalidation:f.revalidation,component:H,error:N,children:Q(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):Q()},null)}function jo(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function m1(u){let c=D.useContext(ta);return _t(c,jo(u)),c}function p1(u){let c=D.useContext(Li);return _t(c,jo(u)),c}function g1(u){let c=D.useContext(dn);return _t(c,jo(u)),c}function Uo(u){let c=g1(u),f=c.matches[c.matches.length-1];return _t(f.route.id,`${u} can only be used on routes that contain a unique "id"`),f.route.id}function y1(){return Uo("useRouteId")}function v1(){let u=D.useContext(Do),c=p1("useRouteError"),f=Uo("useRouteError");return u!==void 0?u:c.errors?.[f]}function b1(){let{router:u}=m1("useNavigate"),c=Uo("useNavigate"),f=D.useRef(!1);return Sm(()=>{f.current=!0}),D.useCallback(async(d,h={})=>{Xe(f.current,xm),f.current&&(typeof d=="number"?u.navigate(d):await u.navigate(d,{fromRouteId:c,...h}))},[u,c])}var $h={};function zm(u,c,f){!c&&!$h[u]&&($h[u]=!0,Xe(!1,f))}D.memo(x1);function x1({routes:u,future:c,state:f}){return Em(u,void 0,f,c)}function So(u){_t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function S1({basename:u="/",children:c=null,location:f,navigationType:r="POP",navigator:d,static:h=!1}){_t(!ru(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=u.replace(/^\/*/,"/"),R=D.useMemo(()=>({basename:y,navigator:d,static:h,future:{}}),[y,d,h]);typeof f=="string"&&(f=Il(f));let{pathname:v="/",search:m="",hash:A="",state:N=null,key:C="default"}=f,H=D.useMemo(()=>{let B=sn(v,y);return B==null?null:{location:{pathname:B,search:m,hash:A,state:N,key:C},navigationType:r}},[y,v,m,A,N,C,r]);return Xe(H!=null,`<Router basename="${y}"> is not able to match the URL "${v}${m}${A}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:D.createElement(Qe.Provider,{value:R},D.createElement(cu.Provider,{children:c,value:H}))}function E1({children:u,location:c}){return r1(Eo(u),c)}function Eo(u,c=[]){let f=[];return D.Children.forEach(u,(r,d)=>{if(!D.isValidElement(r))return;let h=[...c,d];if(r.type===D.Fragment){f.push.apply(f,Eo(r.props.children,h));return}_t(r.type===So,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_t(!r.props.index||!r.props.children,"An index route cannot have child routes.");let y={id:r.props.id||h.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(y.children=Eo(r.props.children,h)),f.push(y)}),f}var wi="get",_i="application/x-www-form-urlencoded";function Gi(u){return u!=null&&typeof u.tagName=="string"}function z1(u){return Gi(u)&&u.tagName.toLowerCase()==="button"}function A1(u){return Gi(u)&&u.tagName.toLowerCase()==="form"}function T1(u){return Gi(u)&&u.tagName.toLowerCase()==="input"}function R1(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function O1(u,c){return u.button===0&&(!c||c==="_self")&&!R1(u)}var Ti=null;function w1(){if(Ti===null)try{new FormData(document.createElement("form"),0),Ti=!1}catch{Ti=!0}return Ti}var _1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function po(u){return u!=null&&!_1.has(u)?(Xe(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_i}"`),null):u}function M1(u,c){let f,r,d,h,y;if(A1(u)){let R=u.getAttribute("action");r=R?sn(R,c):null,f=u.getAttribute("method")||wi,d=po(u.getAttribute("enctype"))||_i,h=new FormData(u)}else if(z1(u)||T1(u)&&(u.type==="submit"||u.type==="image")){let R=u.form;if(R==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=u.getAttribute("formaction")||R.getAttribute("action");if(r=v?sn(v,c):null,f=u.getAttribute("formmethod")||R.getAttribute("method")||wi,d=po(u.getAttribute("formenctype"))||po(R.getAttribute("enctype"))||_i,h=new FormData(R,u),!w1()){let{name:m,type:A,value:N}=u;if(A==="image"){let C=m?`${m}.`:"";h.append(`${C}x`,"0"),h.append(`${C}y`,"0")}else m&&h.append(m,N)}}else{if(Gi(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=wi,r=null,d=_i,y=u}return h&&d==="text/plain"&&(y=h,h=void 0),{action:r,method:f.toLowerCase(),encType:d,formData:h,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Co(u,c){if(u===!1||u===null||typeof u>"u")throw new Error(c)}function D1(u,c,f){let r=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return r.pathname==="/"?r.pathname=`_root.${f}`:c&&sn(r.pathname,c)==="/"?r.pathname=`${c.replace(/\/$/,"")}/_root.${f}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${f}`,r}async function N1(u,c){if(u.id in c)return c[u.id];try{let f=await import(u.module);return c[u.id]=f,f}catch(f){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function j1(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function U1(u,c,f){let r=await Promise.all(u.map(async d=>{let h=c.routes[d.route.id];if(h){let y=await N1(h,f);return y.links?y.links():[]}return[]}));return B1(r.flat(1).filter(j1).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Wh(u,c,f,r,d,h){let y=(v,m)=>f[m]?v.route.id!==f[m].route.id:!0,R=(v,m)=>f[m].pathname!==v.pathname||f[m].route.path?.endsWith("*")&&f[m].params["*"]!==v.params["*"];return h==="assets"?c.filter((v,m)=>y(v,m)||R(v,m)):h==="data"?c.filter((v,m)=>{let A=r.routes[v.route.id];if(!A||!A.hasLoader)return!1;if(y(v,m)||R(v,m))return!0;if(v.route.shouldRevalidate){let N=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function C1(u,c,{includeHydrateFallback:f}={}){return q1(u.map(r=>{let d=c.routes[r.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),f&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function q1(u){return[...new Set(u)]}function H1(u){let c={},f=Object.keys(u).sort();for(let r of f)c[r]=u[r];return c}function B1(u,c){let f=new Set;return new Set(c),u.reduce((r,d)=>{let h=JSON.stringify(H1(d));return f.has(h)||(f.add(h),r.push({key:h,link:d})),r},[])}function Am(){let u=D.useContext(ta);return Co(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Y1(){let u=D.useContext(Li);return Co(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var qo=D.createContext(void 0);qo.displayName="FrameworkContext";function Tm(){let u=D.useContext(qo);return Co(u,"You must render this element inside a <HydratedRouter> element"),u}function L1(u,c){let f=D.useContext(qo),[r,d]=D.useState(!1),[h,y]=D.useState(!1),{onFocus:R,onBlur:v,onMouseEnter:m,onMouseLeave:A,onTouchStart:N}=c,C=D.useRef(null);D.useEffect(()=>{if(u==="render"&&y(!0),u==="viewport"){let L=q=>{q.forEach(k=>{y(k.isIntersecting)})},Q=new IntersectionObserver(L,{threshold:.5});return C.current&&Q.observe(C.current),()=>{Q.disconnect()}}},[u]),D.useEffect(()=>{if(r){let L=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(L)}}},[r]);let H=()=>{d(!0)},B=()=>{d(!1),y(!1)};return f?u!=="intent"?[h,C,{}]:[h,C,{onFocus:eu(R,H),onBlur:eu(v,B),onMouseEnter:eu(m,H),onMouseLeave:eu(A,B),onTouchStart:eu(N,H)}]:[!1,C,{}]}function eu(u,c){return f=>{u&&u(f),f.defaultPrevented||c(f)}}function G1({page:u,...c}){let{router:f}=Am(),r=D.useMemo(()=>hm(f.routes,u,f.basename),[f.routes,u,f.basename]);return r?D.createElement(Q1,{page:u,matches:r,...c}):null}function X1(u){let{manifest:c,routeModules:f}=Tm(),[r,d]=D.useState([]);return D.useEffect(()=>{let h=!1;return U1(u,c,f).then(y=>{h||d(y)}),()=>{h=!0}},[u,c,f]),r}function Q1({page:u,matches:c,...f}){let r=il(),{manifest:d,routeModules:h}=Tm(),{basename:y}=Am(),{loaderData:R,matches:v}=Y1(),m=D.useMemo(()=>Wh(u,c,v,d,r,"data"),[u,c,v,d,r]),A=D.useMemo(()=>Wh(u,c,v,d,r,"assets"),[u,c,v,d,r]),N=D.useMemo(()=>{if(u===r.pathname+r.search+r.hash)return[];let B=new Set,L=!1;if(c.forEach(q=>{let k=d.routes[q.route.id];!k||!k.hasLoader||(!m.some(Z=>Z.route.id===q.route.id)&&q.route.id in R&&h[q.route.id]?.shouldRevalidate||k.hasClientLoader?L=!0:B.add(q.route.id))}),B.size===0)return[];let Q=D1(u,y,"data");return L&&B.size>0&&Q.searchParams.set("_routes",c.filter(q=>B.has(q.route.id)).map(q=>q.route.id).join(",")),[Q.pathname+Q.search]},[y,R,r,d,m,c,u,h]),C=D.useMemo(()=>C1(A,d),[A,d]),H=X1(A);return D.createElement(D.Fragment,null,N.map(B=>D.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...f})),C.map(B=>D.createElement("link",{key:B,rel:"modulepreload",href:B,...f})),H.map(({key:B,link:L})=>D.createElement("link",{key:B,nonce:f.nonce,...L})))}function Z1(...u){return c=>{u.forEach(f=>{typeof f=="function"?f(c):f!=null&&(f.current=c)})}}var Rm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Rm&&(window.__reactRouterVersion="7.8.1")}catch{}function V1({basename:u,children:c,window:f}){let r=D.useRef();r.current==null&&(r.current=jg({window:f,v5Compat:!0}));let d=r.current,[h,y]=D.useState({action:d.action,location:d.location}),R=D.useCallback(v=>{D.startTransition(()=>y(v))},[y]);return D.useLayoutEffect(()=>d.listen(R),[d,R]),D.createElement(S1,{basename:u,children:c,location:h.location,navigationType:h.action,navigator:d})}var Om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ho=D.forwardRef(function({onClick:c,discover:f="render",prefetch:r="none",relative:d,reloadDocument:h,replace:y,state:R,target:v,to:m,preventScrollReset:A,viewTransition:N,...C},H){let{basename:B}=D.useContext(Qe),L=typeof m=="string"&&Om.test(m),Q,q=!1;if(typeof m=="string"&&L&&(Q=m,Rm))try{let Et=new URL(window.location.href),te=m.startsWith("//")?new URL(Et.protocol+m):new URL(m),ne=sn(te.pathname,B);te.origin===Et.origin&&ne!=null?m=ne+te.search+te.hash:q=!0}catch{Xe(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=i1(m,{relative:d}),[Z,nt,V]=L1(r,C),lt=$1(m,{replace:y,state:R,target:v,preventScrollReset:A,relative:d,viewTransition:N});function $(Et){c&&c(Et),Et.defaultPrevented||lt(Et)}let Tt=D.createElement("a",{...C,...V,href:Q||k,onClick:q||h?c:$,ref:Z1(H,nt),target:v,"data-discover":!L&&f==="render"?"true":void 0});return Z&&!L?D.createElement(D.Fragment,null,Tt,D.createElement(G1,{page:k})):Tt});Ho.displayName="Link";var K1=D.forwardRef(function({"aria-current":c="page",caseSensitive:f=!1,className:r="",end:d=!1,style:h,to:y,viewTransition:R,children:v,...m},A){let N=ou(y,{relative:m.relative}),C=il(),H=D.useContext(Li),{navigator:B,basename:L}=D.useContext(Qe),Q=H!=null&&ty(N)&&R===!0,q=B.encodeLocation?B.encodeLocation(N).pathname:N.pathname,k=C.pathname,Z=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;f||(k=k.toLowerCase(),Z=Z?Z.toLowerCase():null,q=q.toLowerCase()),Z&&L&&(Z=sn(Z,L)||Z);const nt=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let V=k===q||!d&&k.startsWith(q)&&k.charAt(nt)==="/",lt=Z!=null&&(Z===q||!d&&Z.startsWith(q)&&Z.charAt(q.length)==="/"),$={isActive:V,isPending:lt,isTransitioning:Q},Tt=V?c:void 0,Et;typeof r=="function"?Et=r($):Et=[r,V?"active":null,lt?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let te=typeof h=="function"?h($):h;return D.createElement(Ho,{...m,"aria-current":Tt,className:Et,ref:A,style:te,to:y,viewTransition:R},typeof v=="function"?v($):v)});K1.displayName="NavLink";var J1=D.forwardRef(({discover:u="render",fetcherKey:c,navigate:f,reloadDocument:r,replace:d,state:h,method:y=wi,action:R,onSubmit:v,relative:m,preventScrollReset:A,viewTransition:N,...C},H)=>{let B=P1(),L=I1(R,{relative:m}),Q=y.toLowerCase()==="get"?"get":"post",q=typeof R=="string"&&Om.test(R),k=Z=>{if(v&&v(Z),Z.defaultPrevented)return;Z.preventDefault();let nt=Z.nativeEvent.submitter,V=nt?.getAttribute("formmethod")||y;B(nt||Z.currentTarget,{fetcherKey:c,method:V,navigate:f,replace:d,state:h,relative:m,preventScrollReset:A,viewTransition:N})};return D.createElement("form",{ref:H,method:Q,action:L,onSubmit:r?v:k,...C,"data-discover":!q&&u==="render"?"true":void 0})});J1.displayName="Form";function k1(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wm(u){let c=D.useContext(ta);return _t(c,k1(u)),c}function $1(u,{target:c,replace:f,state:r,preventScrollReset:d,relative:h,viewTransition:y}={}){let R=No(),v=il(),m=ou(u,{relative:h});return D.useCallback(A=>{if(O1(A,c)){A.preventDefault();let N=f!==void 0?f:uu(v)===uu(m);R(u,{replace:N,state:r,preventScrollReset:d,relative:h,viewTransition:y})}},[v,R,m,f,r,c,u,d,h,y])}var W1=0,F1=()=>`__${String(++W1)}__`;function P1(){let{router:u}=wm("useSubmit"),{basename:c}=D.useContext(Qe),f=y1();return D.useCallback(async(r,d={})=>{let{action:h,method:y,encType:R,formData:v,body:m}=M1(r,c);if(d.navigate===!1){let A=d.fetcherKey||F1();await u.fetch(A,f,d.action||h,{preventScrollReset:d.preventScrollReset,formData:v,body:m,formMethod:d.method||y,formEncType:d.encType||R,flushSync:d.flushSync})}else await u.navigate(d.action||h,{preventScrollReset:d.preventScrollReset,formData:v,body:m,formMethod:d.method||y,formEncType:d.encType||R,replace:d.replace,state:d.state,fromRouteId:f,flushSync:d.flushSync,viewTransition:d.viewTransition})},[u,c,f])}function I1(u,{relative:c}={}){let{basename:f}=D.useContext(Qe),r=D.useContext(dn);_t(r,"useFormAction must be used inside a RouteContext");let[d]=r.matches.slice(-1),h={...ou(u||".",{relative:c})},y=il();if(u==null){h.search=y.search;let R=new URLSearchParams(h.search),v=R.getAll("index");if(v.some(A=>A==="")){R.delete("index"),v.filter(N=>N).forEach(N=>R.append("index",N));let A=R.toString();h.search=A?`?${A}`:""}}return(!u||u===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(h.pathname=h.pathname==="/"?f:fn([f,h.pathname])),uu(h)}function ty(u,{relative:c}={}){let f=D.useContext(bm);_t(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=wm("useViewTransitionState"),d=ou(u,{relative:c});if(!f.isTransitioning)return!1;let h=sn(f.currentLocation.pathname,r)||f.currentLocation.pathname,y=sn(f.nextLocation.pathname,r)||f.nextLocation.pathname;return Ci(d.pathname,y)!=null||Ci(d.pathname,h)!=null}var re=function(){return re=Object.assign||function(c){for(var f,r=1,d=arguments.length;r<d;r++){f=arguments[r];for(var h in f)Object.prototype.hasOwnProperty.call(f,h)&&(c[h]=f[h])}return c},re.apply(this,arguments)};function qi(u,c,f){if(f||arguments.length===2)for(var r=0,d=c.length,h;r<d;r++)(h||!(r in c))&&(h||(h=Array.prototype.slice.call(c,0,r)),h[r]=c[r]);return u.concat(h||Array.prototype.slice.call(c))}var Rt="-ms-",lu="-moz-",gt="-webkit-",_m="comm",Xi="rule",Bo="decl",ey="@import",Mm="@keyframes",ny="@layer",Dm=Math.abs,Yo=String.fromCharCode,zo=Object.assign;function ly(u,c){return Kt(u,0)^45?(((c<<2^Kt(u,0))<<2^Kt(u,1))<<2^Kt(u,2))<<2^Kt(u,3):0}function Nm(u){return u.trim()}function on(u,c){return(u=c.exec(u))?u[0]:u}function ut(u,c,f){return u.replace(c,f)}function Mi(u,c,f){return u.indexOf(c,f)}function Kt(u,c){return u.charCodeAt(c)|0}function kl(u,c,f){return u.slice(c,f)}function Ge(u){return u.length}function jm(u){return u.length}function nu(u,c){return c.push(u),u}function ay(u,c){return u.map(c).join("")}function Fh(u,c){return u.filter(function(f){return!on(f,c)})}var Qi=1,$l=1,Um=0,Me=0,qt=0,ea="";function Zi(u,c,f,r,d,h,y,R){return{value:u,root:c,parent:f,type:r,props:d,children:h,line:Qi,column:$l,length:y,return:"",siblings:R}}function Hn(u,c){return zo(Zi("",null,null,"",null,null,0,u.siblings),u,{length:-u.length},c)}function Kl(u){for(;u.root;)u=Hn(u.root,{children:[u]});nu(u,u.siblings)}function uy(){return qt}function iy(){return qt=Me>0?Kt(ea,--Me):0,$l--,qt===10&&($l=1,Qi--),qt}function Ue(){return qt=Me<Um?Kt(ea,Me++):0,$l++,qt===10&&($l=1,Qi++),qt}function al(){return Kt(ea,Me)}function Di(){return Me}function Vi(u,c){return kl(ea,u,c)}function Ao(u){switch(u){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cy(u){return Qi=$l=1,Um=Ge(ea=u),Me=0,[]}function ry(u){return ea="",u}function go(u){return Nm(Vi(Me-1,To(u===91?u+2:u===40?u+1:u)))}function oy(u){for(;(qt=al())&&qt<33;)Ue();return Ao(u)>2||Ao(qt)>3?"":" "}function fy(u,c){for(;--c&&Ue()&&!(qt<48||qt>102||qt>57&&qt<65||qt>70&&qt<97););return Vi(u,Di()+(c<6&&al()==32&&Ue()==32))}function To(u){for(;Ue();)switch(qt){case u:return Me;case 34:case 39:u!==34&&u!==39&&To(qt);break;case 40:u===41&&To(u);break;case 92:Ue();break}return Me}function sy(u,c){for(;Ue()&&u+qt!==57;)if(u+qt===84&&al()===47)break;return"/*"+Vi(c,Me-1)+"*"+Yo(u===47?u:Ue())}function dy(u){for(;!Ao(al());)Ue();return Vi(u,Me)}function hy(u){return ry(Ni("",null,null,null,[""],u=cy(u),0,[0],u))}function Ni(u,c,f,r,d,h,y,R,v){for(var m=0,A=0,N=y,C=0,H=0,B=0,L=1,Q=1,q=1,k=0,Z="",nt=d,V=h,lt=r,$=Z;Q;)switch(B=k,k=Ue()){case 40:if(B!=108&&Kt($,N-1)==58){Mi($+=ut(go(k),"&","&\f"),"&\f",Dm(m?R[m-1]:0))!=-1&&(q=-1);break}case 34:case 39:case 91:$+=go(k);break;case 9:case 10:case 13:case 32:$+=oy(B);break;case 92:$+=fy(Di()-1,7);continue;case 47:switch(al()){case 42:case 47:nu(my(sy(Ue(),Di()),c,f,v),v);break;default:$+="/"}break;case 123*L:R[m++]=Ge($)*q;case 125*L:case 59:case 0:switch(k){case 0:case 125:Q=0;case 59+A:q==-1&&($=ut($,/\f/g,"")),H>0&&Ge($)-N&&nu(H>32?Ih($+";",r,f,N-1,v):Ih(ut($," ","")+";",r,f,N-2,v),v);break;case 59:$+=";";default:if(nu(lt=Ph($,c,f,m,A,d,R,Z,nt=[],V=[],N,h),h),k===123)if(A===0)Ni($,c,lt,lt,nt,h,N,R,V);else switch(C===99&&Kt($,3)===110?100:C){case 100:case 108:case 109:case 115:Ni(u,lt,lt,r&&nu(Ph(u,lt,lt,0,0,d,R,Z,d,nt=[],N,V),V),d,V,N,R,r?nt:V);break;default:Ni($,lt,lt,lt,[""],V,0,R,V)}}m=A=H=0,L=q=1,Z=$="",N=y;break;case 58:N=1+Ge($),H=B;default:if(L<1){if(k==123)--L;else if(k==125&&L++==0&&iy()==125)continue}switch($+=Yo(k),k*L){case 38:q=A>0?1:($+="\f",-1);break;case 44:R[m++]=(Ge($)-1)*q,q=1;break;case 64:al()===45&&($+=go(Ue())),C=al(),A=N=Ge(Z=$+=dy(Di())),k++;break;case 45:B===45&&Ge($)==2&&(L=0)}}return h}function Ph(u,c,f,r,d,h,y,R,v,m,A,N){for(var C=d-1,H=d===0?h:[""],B=jm(H),L=0,Q=0,q=0;L<r;++L)for(var k=0,Z=kl(u,C+1,C=Dm(Q=y[L])),nt=u;k<B;++k)(nt=Nm(Q>0?H[k]+" "+Z:ut(Z,/&\f/g,H[k])))&&(v[q++]=nt);return Zi(u,c,f,d===0?Xi:R,v,m,A,N)}function my(u,c,f,r){return Zi(u,c,f,_m,Yo(uy()),kl(u,2,-2),0,r)}function Ih(u,c,f,r,d){return Zi(u,c,f,Bo,kl(u,0,r),kl(u,r+1,-1),r,d)}function Cm(u,c,f){switch(ly(u,c)){case 5103:return gt+"print-"+u+u;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return gt+u+u;case 4789:return lu+u+u;case 5349:case 4246:case 4810:case 6968:case 2756:return gt+u+lu+u+Rt+u+u;case 5936:switch(Kt(u,c+11)){case 114:return gt+u+Rt+ut(u,/[svh]\w+-[tblr]{2}/,"tb")+u;case 108:return gt+u+Rt+ut(u,/[svh]\w+-[tblr]{2}/,"tb-rl")+u;case 45:return gt+u+Rt+ut(u,/[svh]\w+-[tblr]{2}/,"lr")+u}case 6828:case 4268:case 2903:return gt+u+Rt+u+u;case 6165:return gt+u+Rt+"flex-"+u+u;case 5187:return gt+u+ut(u,/(\w+).+(:[^]+)/,gt+"box-$1$2"+Rt+"flex-$1$2")+u;case 5443:return gt+u+Rt+"flex-item-"+ut(u,/flex-|-self/g,"")+(on(u,/flex-|baseline/)?"":Rt+"grid-row-"+ut(u,/flex-|-self/g,""))+u;case 4675:return gt+u+Rt+"flex-line-pack"+ut(u,/align-content|flex-|-self/g,"")+u;case 5548:return gt+u+Rt+ut(u,"shrink","negative")+u;case 5292:return gt+u+Rt+ut(u,"basis","preferred-size")+u;case 6060:return gt+"box-"+ut(u,"-grow","")+gt+u+Rt+ut(u,"grow","positive")+u;case 4554:return gt+ut(u,/([^-])(transform)/g,"$1"+gt+"$2")+u;case 6187:return ut(ut(ut(u,/(zoom-|grab)/,gt+"$1"),/(image-set)/,gt+"$1"),u,"")+u;case 5495:case 3959:return ut(u,/(image-set\([^]*)/,gt+"$1$`$1");case 4968:return ut(ut(u,/(.+:)(flex-)?(.*)/,gt+"box-pack:$3"+Rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+gt+u+u;case 4200:if(!on(u,/flex-|baseline/))return Rt+"grid-column-align"+kl(u,c)+u;break;case 2592:case 3360:return Rt+ut(u,"template-","")+u;case 4384:case 3616:return f&&f.some(function(r,d){return c=d,on(r.props,/grid-\w+-end/)})?~Mi(u+(f=f[c].value),"span",0)?u:Rt+ut(u,"-start","")+u+Rt+"grid-row-span:"+(~Mi(f,"span",0)?on(f,/\d+/):+on(f,/\d+/)-+on(u,/\d+/))+";":Rt+ut(u,"-start","")+u;case 4896:case 4128:return f&&f.some(function(r){return on(r.props,/grid-\w+-start/)})?u:Rt+ut(ut(u,"-end","-span"),"span ","")+u;case 4095:case 3583:case 4068:case 2532:return ut(u,/(.+)-inline(.+)/,gt+"$1$2")+u;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ge(u)-1-c>6)switch(Kt(u,c+1)){case 109:if(Kt(u,c+4)!==45)break;case 102:return ut(u,/(.+:)(.+)-([^]+)/,"$1"+gt+"$2-$3$1"+lu+(Kt(u,c+3)==108?"$3":"$2-$3"))+u;case 115:return~Mi(u,"stretch",0)?Cm(ut(u,"stretch","fill-available"),c,f)+u:u}break;case 5152:case 5920:return ut(u,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,d,h,y,R,v,m){return Rt+d+":"+h+m+(y?Rt+d+"-span:"+(R?v:+v-+h)+m:"")+u});case 4949:if(Kt(u,c+6)===121)return ut(u,":",":"+gt)+u;break;case 6444:switch(Kt(u,Kt(u,14)===45?18:11)){case 120:return ut(u,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+gt+(Kt(u,14)===45?"inline-":"")+"box$3$1"+gt+"$2$3$1"+Rt+"$2box$3")+u;case 100:return ut(u,":",":"+Rt)+u}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ut(u,"scroll-","scroll-snap-")+u}return u}function Hi(u,c){for(var f="",r=0;r<u.length;r++)f+=c(u[r],r,u,c)||"";return f}function py(u,c,f,r){switch(u.type){case ny:if(u.children.length)break;case ey:case Bo:return u.return=u.return||u.value;case _m:return"";case Mm:return u.return=u.value+"{"+Hi(u.children,r)+"}";case Xi:if(!Ge(u.value=u.props.join(",")))return""}return Ge(f=Hi(u.children,r))?u.return=u.value+"{"+f+"}":""}function gy(u){var c=jm(u);return function(f,r,d,h){for(var y="",R=0;R<c;R++)y+=u[R](f,r,d,h)||"";return y}}function yy(u){return function(c){c.root||(c=c.return)&&u(c)}}function vy(u,c,f,r){if(u.length>-1&&!u.return)switch(u.type){case Bo:u.return=Cm(u.value,u.length,f);return;case Mm:return Hi([Hn(u,{value:ut(u.value,"@","@"+gt)})],r);case Xi:if(u.length)return ay(f=u.props,function(d){switch(on(d,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Kl(Hn(u,{props:[ut(d,/:(read-\w+)/,":"+lu+"$1")]})),Kl(Hn(u,{props:[d]})),zo(u,{props:Fh(f,r)});break;case"::placeholder":Kl(Hn(u,{props:[ut(d,/:(plac\w+)/,":"+gt+"input-$1")]})),Kl(Hn(u,{props:[ut(d,/:(plac\w+)/,":"+lu+"$1")]})),Kl(Hn(u,{props:[ut(d,/:(plac\w+)/,Rt+"input-$1")]})),Kl(Hn(u,{props:[d]})),zo(u,{props:Fh(f,r)});break}return""})}}var by={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ve={},Wl=typeof process<"u"&&ve!==void 0&&(ve.REACT_APP_SC_ATTR||ve.SC_ATTR)||"data-styled",qm="active",Hm="data-styled-version",Ki="6.1.19",Lo=`/*!sc*/
`,Bi=typeof window<"u"&&typeof document<"u",xy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ve!==void 0&&ve.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ve.REACT_APP_SC_DISABLE_SPEEDY!==""?ve.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ve.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ve!==void 0&&ve.SC_DISABLE_SPEEDY!==void 0&&ve.SC_DISABLE_SPEEDY!==""&&ve.SC_DISABLE_SPEEDY!=="false"&&ve.SC_DISABLE_SPEEDY),Ji=Object.freeze([]),Fl=Object.freeze({});function Sy(u,c,f){return f===void 0&&(f=Fl),u.theme!==f.theme&&u.theme||c||f.theme}var Bm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ey=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zy=/(^-|-$)/g;function tm(u){return u.replace(Ey,"-").replace(zy,"")}var Ay=/(a)(d)/gi,Ri=52,em=function(u){return String.fromCharCode(u+(u>25?39:97))};function Ro(u){var c,f="";for(c=Math.abs(u);c>Ri;c=c/Ri|0)f=em(c%Ri)+f;return(em(c%Ri)+f).replace(Ay,"$1-$2")}var yo,Ym=5381,Jl=function(u,c){for(var f=c.length;f;)u=33*u^c.charCodeAt(--f);return u},Lm=function(u){return Jl(Ym,u)};function Ty(u){return Ro(Lm(u)>>>0)}function Ry(u){return u.displayName||u.name||"Component"}function vo(u){return typeof u=="string"&&!0}var Gm=typeof Symbol=="function"&&Symbol.for,Xm=Gm?Symbol.for("react.memo"):60115,Oy=Gm?Symbol.for("react.forward_ref"):60112,wy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_y={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},My=((yo={})[Oy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yo[Xm]=Qm,yo);function nm(u){return("type"in(c=u)&&c.type.$$typeof)===Xm?Qm:"$$typeof"in u?My[u.$$typeof]:wy;var c}var Dy=Object.defineProperty,Ny=Object.getOwnPropertyNames,lm=Object.getOwnPropertySymbols,jy=Object.getOwnPropertyDescriptor,Uy=Object.getPrototypeOf,am=Object.prototype;function Zm(u,c,f){if(typeof c!="string"){if(am){var r=Uy(c);r&&r!==am&&Zm(u,r,f)}var d=Ny(c);lm&&(d=d.concat(lm(c)));for(var h=nm(u),y=nm(c),R=0;R<d.length;++R){var v=d[R];if(!(v in _y||f&&f[v]||y&&v in y||h&&v in h)){var m=jy(c,v);try{Dy(u,v,m)}catch{}}}}return u}function Pl(u){return typeof u=="function"}function Go(u){return typeof u=="object"&&"styledComponentId"in u}function ll(u,c){return u&&c?"".concat(u," ").concat(c):u||c||""}function um(u,c){if(u.length===0)return"";for(var f=u[0],r=1;r<u.length;r++)f+=u[r];return f}function iu(u){return u!==null&&typeof u=="object"&&u.constructor.name===Object.name&&!("props"in u&&u.$$typeof)}function Oo(u,c,f){if(f===void 0&&(f=!1),!f&&!iu(u)&&!Array.isArray(u))return c;if(Array.isArray(c))for(var r=0;r<c.length;r++)u[r]=Oo(u[r],c[r]);else if(iu(c))for(var r in c)u[r]=Oo(u[r],c[r]);return u}function Xo(u,c){Object.defineProperty(u,"toString",{value:c})}function fu(u){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(u," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Cy=(function(){function u(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return u.prototype.indexOfGroup=function(c){for(var f=0,r=0;r<c;r++)f+=this.groupSizes[r];return f},u.prototype.insertRules=function(c,f){if(c>=this.groupSizes.length){for(var r=this.groupSizes,d=r.length,h=d;c>=h;)if((h<<=1)<0)throw fu(16,"".concat(c));this.groupSizes=new Uint32Array(h),this.groupSizes.set(r),this.length=h;for(var y=d;y<h;y++)this.groupSizes[y]=0}for(var R=this.indexOfGroup(c+1),v=(y=0,f.length);y<v;y++)this.tag.insertRule(R,f[y])&&(this.groupSizes[c]++,R++)},u.prototype.clearGroup=function(c){if(c<this.length){var f=this.groupSizes[c],r=this.indexOfGroup(c),d=r+f;this.groupSizes[c]=0;for(var h=r;h<d;h++)this.tag.deleteRule(r)}},u.prototype.getGroup=function(c){var f="";if(c>=this.length||this.groupSizes[c]===0)return f;for(var r=this.groupSizes[c],d=this.indexOfGroup(c),h=d+r,y=d;y<h;y++)f+="".concat(this.tag.getRule(y)).concat(Lo);return f},u})(),ji=new Map,Yi=new Map,Ui=1,Oi=function(u){if(ji.has(u))return ji.get(u);for(;Yi.has(Ui);)Ui++;var c=Ui++;return ji.set(u,c),Yi.set(c,u),c},qy=function(u,c){Ui=c+1,ji.set(u,c),Yi.set(c,u)},Hy="style[".concat(Wl,"][").concat(Hm,'="').concat(Ki,'"]'),By=new RegExp("^".concat(Wl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Yy=function(u,c,f){for(var r,d=f.split(","),h=0,y=d.length;h<y;h++)(r=d[h])&&u.registerName(c,r)},Ly=function(u,c){for(var f,r=((f=c.textContent)!==null&&f!==void 0?f:"").split(Lo),d=[],h=0,y=r.length;h<y;h++){var R=r[h].trim();if(R){var v=R.match(By);if(v){var m=0|parseInt(v[1],10),A=v[2];m!==0&&(qy(A,m),Yy(u,A,v[3]),u.getTag().insertRules(m,d)),d.length=0}else d.push(R)}}},im=function(u){for(var c=document.querySelectorAll(Hy),f=0,r=c.length;f<r;f++){var d=c[f];d&&d.getAttribute(Wl)!==qm&&(Ly(u,d),d.parentNode&&d.parentNode.removeChild(d))}};function Gy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Vm=function(u){var c=document.head,f=u||c,r=document.createElement("style"),d=(function(R){var v=Array.from(R.querySelectorAll("style[".concat(Wl,"]")));return v[v.length-1]})(f),h=d!==void 0?d.nextSibling:null;r.setAttribute(Wl,qm),r.setAttribute(Hm,Ki);var y=Gy();return y&&r.setAttribute("nonce",y),f.insertBefore(r,h),r},Xy=(function(){function u(c){this.element=Vm(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(f){if(f.sheet)return f.sheet;for(var r=document.styleSheets,d=0,h=r.length;d<h;d++){var y=r[d];if(y.ownerNode===f)return y}throw fu(17)})(this.element),this.length=0}return u.prototype.insertRule=function(c,f){try{return this.sheet.insertRule(f,c),this.length++,!0}catch{return!1}},u.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},u.prototype.getRule=function(c){var f=this.sheet.cssRules[c];return f&&f.cssText?f.cssText:""},u})(),Qy=(function(){function u(c){this.element=Vm(c),this.nodes=this.element.childNodes,this.length=0}return u.prototype.insertRule=function(c,f){if(c<=this.length&&c>=0){var r=document.createTextNode(f);return this.element.insertBefore(r,this.nodes[c]||null),this.length++,!0}return!1},u.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},u.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},u})(),Zy=(function(){function u(c){this.rules=[],this.length=0}return u.prototype.insertRule=function(c,f){return c<=this.length&&(this.rules.splice(c,0,f),this.length++,!0)},u.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},u.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},u})(),cm=Bi,Vy={isServer:!Bi,useCSSOMInjection:!xy},Km=(function(){function u(c,f,r){c===void 0&&(c=Fl),f===void 0&&(f={});var d=this;this.options=re(re({},Vy),c),this.gs=f,this.names=new Map(r),this.server=!!c.isServer,!this.server&&Bi&&cm&&(cm=!1,im(this)),Xo(this,function(){return(function(h){for(var y=h.getTag(),R=y.length,v="",m=function(N){var C=(function(q){return Yi.get(q)})(N);if(C===void 0)return"continue";var H=h.names.get(C),B=y.getGroup(N);if(H===void 0||!H.size||B.length===0)return"continue";var L="".concat(Wl,".g").concat(N,'[id="').concat(C,'"]'),Q="";H!==void 0&&H.forEach(function(q){q.length>0&&(Q+="".concat(q,","))}),v+="".concat(B).concat(L,'{content:"').concat(Q,'"}').concat(Lo)},A=0;A<R;A++)m(A);return v})(d)})}return u.registerId=function(c){return Oi(c)},u.prototype.rehydrate=function(){!this.server&&Bi&&im(this)},u.prototype.reconstructWithOptions=function(c,f){return f===void 0&&(f=!0),new u(re(re({},this.options),c),this.gs,f&&this.names||void 0)},u.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},u.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(f){var r=f.useCSSOMInjection,d=f.target;return f.isServer?new Zy(d):r?new Xy(d):new Qy(d)})(this.options),new Cy(c)));var c},u.prototype.hasNameForId=function(c,f){return this.names.has(c)&&this.names.get(c).has(f)},u.prototype.registerName=function(c,f){if(Oi(c),this.names.has(c))this.names.get(c).add(f);else{var r=new Set;r.add(f),this.names.set(c,r)}},u.prototype.insertRules=function(c,f,r){this.registerName(c,f),this.getTag().insertRules(Oi(c),r)},u.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},u.prototype.clearRules=function(c){this.getTag().clearGroup(Oi(c)),this.clearNames(c)},u.prototype.clearTag=function(){this.tag=void 0},u})(),Ky=/&/g,Jy=/^\s*\/\/.*$/gm;function Jm(u,c){return u.map(function(f){return f.type==="rule"&&(f.value="".concat(c," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(c," ")),f.props=f.props.map(function(r){return"".concat(c," ").concat(r)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=Jm(f.children,c)),f})}function ky(u){var c,f,r,d=Fl,h=d.options,y=h===void 0?Fl:h,R=d.plugins,v=R===void 0?Ji:R,m=function(C,H,B){return B.startsWith(f)&&B.endsWith(f)&&B.replaceAll(f,"").length>0?".".concat(c):C},A=v.slice();A.push(function(C){C.type===Xi&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(Ky,f).replace(r,m))}),y.prefix&&A.push(vy),A.push(py);var N=function(C,H,B,L){H===void 0&&(H=""),B===void 0&&(B=""),L===void 0&&(L="&"),c=L,f=H,r=new RegExp("\\".concat(f,"\\b"),"g");var Q=C.replace(Jy,""),q=hy(B||H?"".concat(B," ").concat(H," { ").concat(Q," }"):Q);y.namespace&&(q=Jm(q,y.namespace));var k=[];return Hi(q,gy(A.concat(yy(function(Z){return k.push(Z)})))),k};return N.hash=v.length?v.reduce(function(C,H){return H.name||fu(15),Jl(C,H.name)},Ym).toString():"",N}var $y=new Km,wo=ky(),km=au.createContext({shouldForwardProp:void 0,styleSheet:$y,stylis:wo});km.Consumer;au.createContext(void 0);function rm(){return D.useContext(km)}var Wy=(function(){function u(c,f){var r=this;this.inject=function(d,h){h===void 0&&(h=wo);var y=r.name+h.hash;d.hasNameForId(r.id,y)||d.insertRules(r.id,y,h(r.rules,y,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=f,Xo(this,function(){throw fu(12,String(r.name))})}return u.prototype.getName=function(c){return c===void 0&&(c=wo),this.name+c.hash},u})(),Fy=function(u){return u>="A"&&u<="Z"};function om(u){for(var c="",f=0;f<u.length;f++){var r=u[f];if(f===1&&r==="-"&&u[0]==="-")return u;Fy(r)?c+="-"+r.toLowerCase():c+=r}return c.startsWith("ms-")?"-"+c:c}var $m=function(u){return u==null||u===!1||u===""},Wm=function(u){var c,f,r=[];for(var d in u){var h=u[d];u.hasOwnProperty(d)&&!$m(h)&&(Array.isArray(h)&&h.isCss||Pl(h)?r.push("".concat(om(d),":"),h,";"):iu(h)?r.push.apply(r,qi(qi(["".concat(d," {")],Wm(h),!1),["}"],!1)):r.push("".concat(om(d),": ").concat((c=d,(f=h)==null||typeof f=="boolean"||f===""?"":typeof f!="number"||f===0||c in by||c.startsWith("--")?String(f).trim():"".concat(f,"px")),";")))}return r};function ul(u,c,f,r){if($m(u))return[];if(Go(u))return[".".concat(u.styledComponentId)];if(Pl(u)){if(!Pl(h=u)||h.prototype&&h.prototype.isReactComponent||!c)return[u];var d=u(c);return ul(d,c,f,r)}var h;return u instanceof Wy?f?(u.inject(f,r),[u.getName(r)]):[u]:iu(u)?Wm(u):Array.isArray(u)?Array.prototype.concat.apply(Ji,u.map(function(y){return ul(y,c,f,r)})):[u.toString()]}function Py(u){for(var c=0;c<u.length;c+=1){var f=u[c];if(Pl(f)&&!Go(f))return!1}return!0}var Iy=Lm(Ki),tv=(function(){function u(c,f,r){this.rules=c,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Py(c),this.componentId=f,this.baseHash=Jl(Iy,f),this.baseStyle=r,Km.registerId(f)}return u.prototype.generateAndInjectStyles=function(c,f,r){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,f,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))d=ll(d,this.staticRulesId);else{var h=um(ul(this.rules,c,f,r)),y=Ro(Jl(this.baseHash,h)>>>0);if(!f.hasNameForId(this.componentId,y)){var R=r(h,".".concat(y),void 0,this.componentId);f.insertRules(this.componentId,y,R)}d=ll(d,y),this.staticRulesId=y}else{for(var v=Jl(this.baseHash,r.hash),m="",A=0;A<this.rules.length;A++){var N=this.rules[A];if(typeof N=="string")m+=N;else if(N){var C=um(ul(N,c,f,r));v=Jl(v,C+A),m+=C}}if(m){var H=Ro(v>>>0);f.hasNameForId(this.componentId,H)||f.insertRules(this.componentId,H,r(m,".".concat(H),void 0,this.componentId)),d=ll(d,H)}}return d},u})(),Fm=au.createContext(void 0);Fm.Consumer;var bo={};function ev(u,c,f){var r=Go(u),d=u,h=!vo(u),y=c.attrs,R=y===void 0?Ji:y,v=c.componentId,m=v===void 0?(function(nt,V){var lt=typeof nt!="string"?"sc":tm(nt);bo[lt]=(bo[lt]||0)+1;var $="".concat(lt,"-").concat(Ty(Ki+lt+bo[lt]));return V?"".concat(V,"-").concat($):$})(c.displayName,c.parentComponentId):v,A=c.displayName,N=A===void 0?(function(nt){return vo(nt)?"styled.".concat(nt):"Styled(".concat(Ry(nt),")")})(u):A,C=c.displayName&&c.componentId?"".concat(tm(c.displayName),"-").concat(c.componentId):c.componentId||m,H=r&&d.attrs?d.attrs.concat(R).filter(Boolean):R,B=c.shouldForwardProp;if(r&&d.shouldForwardProp){var L=d.shouldForwardProp;if(c.shouldForwardProp){var Q=c.shouldForwardProp;B=function(nt,V){return L(nt,V)&&Q(nt,V)}}else B=L}var q=new tv(f,C,r?d.componentStyle:void 0);function k(nt,V){return(function(lt,$,Tt){var Et=lt.attrs,te=lt.componentStyle,ne=lt.defaultProps,Yt=lt.foldedComponentIds,Ze=lt.styledComponentId,Ve=lt.target,Lt=au.useContext(Fm),w=rm(),G=lt.shouldForwardProp||w.shouldForwardProp,F=Sy($,Lt,ne)||Fl,rt=(function(ot,I,Gt){for(var pt,Wt=re(re({},I),{className:void 0,theme:Gt}),Bn=0;Bn<ot.length;Bn+=1){var Ke=Pl(pt=ot[Bn])?pt(Wt):pt;for(var xe in Ke)Wt[xe]=xe==="className"?ll(Wt[xe],Ke[xe]):xe==="style"?re(re({},Wt[xe]),Ke[xe]):Ke[xe]}return I.className&&(Wt.className=ll(Wt.className,I.className)),Wt})(Et,$,F),g=rt.as||Ve,U={};for(var Y in rt)rt[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&rt.theme===F||(Y==="forwardedAs"?U.as=rt.forwardedAs:G&&!G(Y,g)||(U[Y]=rt[Y]));var X=(function(ot,I){var Gt=rm(),pt=ot.generateAndInjectStyles(I,Gt.styleSheet,Gt.stylis);return pt})(te,rt),W=ll(Yt,Ze);return X&&(W+=" "+X),rt.className&&(W+=" "+rt.className),U[vo(g)&&!Bm.has(g)?"class":"className"]=W,Tt&&(U.ref=Tt),D.createElement(g,U)})(Z,nt,V)}k.displayName=N;var Z=au.forwardRef(k);return Z.attrs=H,Z.componentStyle=q,Z.displayName=N,Z.shouldForwardProp=B,Z.foldedComponentIds=r?ll(d.foldedComponentIds,d.styledComponentId):"",Z.styledComponentId=C,Z.target=r?d.target:u,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(nt){this._foldedDefaultProps=r?(function(V){for(var lt=[],$=1;$<arguments.length;$++)lt[$-1]=arguments[$];for(var Tt=0,Et=lt;Tt<Et.length;Tt++)Oo(V,Et[Tt],!0);return V})({},d.defaultProps,nt):nt}}),Xo(Z,function(){return".".concat(Z.styledComponentId)}),h&&Zm(Z,u,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function fm(u,c){for(var f=[u[0]],r=0,d=c.length;r<d;r+=1)f.push(c[r],u[r+1]);return f}var sm=function(u){return Object.assign(u,{isCss:!0})};function nv(u){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];if(Pl(u)||iu(u))return sm(ul(fm(Ji,qi([u],c,!0))));var r=u;return c.length===0&&r.length===1&&typeof r[0]=="string"?ul(r):sm(ul(fm(r,c)))}function _o(u,c,f){if(f===void 0&&(f=Fl),!c)throw fu(1,c);var r=function(d){for(var h=[],y=1;y<arguments.length;y++)h[y-1]=arguments[y];return u(c,f,nv.apply(void 0,qi([d],h,!1)))};return r.attrs=function(d){return _o(u,c,re(re({},f),{attrs:Array.prototype.concat(f.attrs,d).filter(Boolean)}))},r.withConfig=function(d){return _o(u,c,re(re({},f),d))},r}var Pm=function(u){return _o(ev,u)},be=Pm;Bm.forEach(function(u){be[u]=Pm(u)});const lv=be.div`
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
`;function av(){return z.jsx(lv,{children:z.jsxs("section",{className:"content-section",children:[z.jsx("p",{className:"text1",children:"Quer assistir? Informe seu email para criar ou reiniciar sua assinatura."}),z.jsxs("div",{className:"content-controls",children:[z.jsx("input",{type:"text",placeholder:"Email"}),z.jsxs("button",{children:["Vamos Lá ",z.jsx("span",{children:">"})," "]})]}),z.jsx("div",{className:"doubt-container",children:z.jsxs("p",{className:"doubt",children:["Dúvidas? Ligue para ",z.jsx("span",{children:"0800 591 2876"})]})}),z.jsxs("div",{className:"p1",children:[z.jsx("p",{children:"Perguntas Frequentes"}),z.jsx("p",{children:"Central de Ajuda"}),z.jsx("p",{children:"Conta"}),z.jsx("p",{children:"Media Center"})]}),z.jsxs("div",{className:"p2",children:[z.jsx("p",{children:"Relações com Investidores"}),z.jsx("p",{children:"Carreiras"}),z.jsx("p",{children:"Resgatar cartão pré-pago"}),z.jsx("p",{children:"Comprar cartão pré-pago"})]}),z.jsxs("div",{className:"p3",children:[z.jsx("p",{children:"Formas de assistir"}),z.jsx("p",{children:"Termos de Uso"}),z.jsx("p",{children:"Privacidade"}),z.jsx("p",{children:"Preferências de cookies"})]}),z.jsxs("div",{className:"p4",children:[z.jsx("p",{children:"Informações corporativas"}),z.jsx("p",{children:"Entre em contato"}),z.jsx("p",{children:"Teste de velocidade"}),z.jsx("p",{children:"Avisos legais"})]}),z.jsx("div",{className:"p5",children:z.jsx("p",{children:"Só na Netflix"})}),z.jsxs("div",{className:"final",children:[z.jsxs("select",{children:[z.jsx("option",{value:"portugues",children:"Português"}),z.jsx("option",{value:"ingles",children:"Inglês"})]}),z.jsx("p",{children:"Netflix Brasil"})]})]})})}const uv=be.div`
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
`,Im="/Movies-ReactJS/assets/Logonetflix-cJzkA86F.png";function iv(){const u=No(),c=()=>{u("/sign-in")};return z.jsxs(uv,{children:[z.jsx("img",{src:Im,alt:"Logo da Netflix"}),z.jsxs("div",{className:"user-controls",children:[z.jsxs("select",{children:[z.jsx("option",{value:"portugues",children:"Português"}),z.jsx("option",{value:"ingles",children:"Inglês"})]}),z.jsx("button",{onClick:c,children:"Entrar"})]})]})}const cv="/Movies-ReactJS/assets/background-G0Np5zM9.jpg",rv=be.div`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  width: 100%;
  height: 100vh;
  background-image: url(${cv});
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
  
  `;function ov(){return z.jsx(z.Fragment,{children:z.jsxs(rv,{children:[z.jsx(iv,{}),z.jsxs("section",{className:"content-section",children:[z.jsx("h1",{children:"Filmes, Séries e muito mais, sem limites"}),z.jsx("p",{children:"Assista onde quiser. Cancele quando quiser"}),z.jsx("p",{className:"p2",children:"Quer assistir? Informe seu email para criar ou reiniciar sua assinatura."}),z.jsxs("div",{className:"controls",children:[z.jsx("input",{type:"text",placeholder:"Email"}),z.jsxs("button",{children:["Vamos Lá ",z.jsx("span",{children:">"})]})]})]})]})})}const fv=be.div`
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
`,sv="/Movies-ReactJS/assets/pipoca-C290b5xr.png";function dv(){return z.jsx(fv,{children:z.jsxs("section",{className:"content-section",children:[z.jsx("img",{src:sv,alt:"Imagem da pipoca"}),z.jsxs("div",{className:"content",children:[z.jsx("h2",{children:"A Netflix que você adora por apenas R$ 20,90."}),z.jsx("p",{children:"Assine o plano Padrão com anúncios."}),z.jsx(Ho,{to:"/",children:" Saiba Mais > "})]})]})})}const hv=be.div`
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
`,mv="/Movies-ReactJS/assets/tv-netflix-BWLwypTF.png";function pv(){return z.jsx(hv,{children:z.jsxs("div",{className:"content-section",children:[z.jsxs("div",{className:"text",children:[z.jsx("h2",{children:"Aproveite na tv"}),z.jsx("p",{children:"Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."})]}),z.jsx("img",{src:mv,alt:"Versão TV"})]})})}const gv=be.div`
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
`,yv="/Movies-ReactJS/assets/dispositivos-Yv656wfi.png";function vv(){return z.jsx(gv,{children:z.jsxs("div",{className:"content-section",children:[z.jsx("img",{src:yv,alt:"Mobile"}),z.jsxs("div",{className:"text",children:[z.jsx("h2",{children:"Assista onde quiser"}),z.jsx("p",{children:"Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV."})]})]})})}const bv=be.div`
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
`,xv="/Movies-ReactJS/assets/kids-DbAjh5sn.png";function Sv(){return z.jsx(bv,{children:z.jsxs("div",{className:"content-section",children:[z.jsxs("div",{className:"text",children:[z.jsx("h2",{children:"Crie perfis para crianças"}),z.jsx("p",{children:"Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."})]}),z.jsx("img",{src:xv,alt:"Mobile"})]})})}const Ev=be.div`
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
`,zv="/Movies-ReactJS/assets/movel-A3IsfRxB.png";function Av(){return z.jsx(Ev,{children:z.jsxs("div",{className:"content-section",children:[z.jsx("img",{src:zv,alt:"Mobile"}),z.jsxs("div",{className:"text",children:[z.jsx("h2",{children:"Baixe séries para assistir offline"}),z.jsx("p",{children:"Assista em um avião, trem ou submarino..."})]})]})})}const Tv=be.div`
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
`;function Rv(){const[u,c]=D.useState(null),f=d=>{c(u===d?null:d)},r=[{question:"O que é Netflix?",answer:"A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes."},{question:"Quanto custa a Netflix?",answer:"Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 20,90 a R$ 59,90 por mês. Sem contrato nem taxas extras."},{question:"Onde posso assistir?",answer:"Assista onde quiser, quando quiser. Acesse sua conta Netflix em netflix.com para assistir no computador ou em qualquer aparelho conectado à internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. Leve a Netflix com você para qualquer lugar."},{question:"Como faço para cancelar?",answer:"A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento."},{question:"O que eu posso assistir na Netflix?",answer:"A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser."},{question:"A Netflix é adequada para crianças?",answer:"A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis. O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam."}];return z.jsx(Tv,{children:z.jsxs("div",{className:"content-section",children:[z.jsx("h3",{children:"Perguntas frequentes"}),z.jsx("div",{className:"cards",children:r.map((d,h)=>z.jsxs("div",{className:`faq-item ${u===h?"active":""}`,onClick:()=>f(h),children:[z.jsxs("div",{className:"faq-header",children:[z.jsx("p",{children:d.question}),z.jsx("span",{children:u===h?"−":"+"})]}),u===h&&z.jsx("div",{className:"faq-answer",children:z.jsx("p",{children:d.answer})})]},h))})]})})}function Ov(){return z.jsxs(z.Fragment,{children:[z.jsx(ov,{}),z.jsx(dv,{}),z.jsx(pv,{}),z.jsx(vv,{}),z.jsx(Sv,{}),z.jsx(Av,{}),z.jsx(Rv,{}),z.jsx(av,{})]})}const wv=be.div`

    
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


`;function _v(){return z.jsx(wv,{children:z.jsx("img",{src:Im,alt:"Netflix-Logo"})})}const dm="/Movies-ReactJS/assets/back01-BieqImTc.jpg",Mv=be.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  /* background-image: url(${dm}); */
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
    background-image: url(${dm});
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
`;function Dv(){const u=No(),c=()=>{u("/")};return z.jsx(z.Fragment,{children:z.jsxs(Mv,{children:[z.jsx(_v,{}),z.jsx("div",{className:"container",children:z.jsxs("div",{className:"content-section",children:[z.jsx("h2",{children:"Entrar"}),z.jsx("input",{type:"text",placeholder:"E-mail ou número de celular"}),z.jsx("input",{type:"text",placeholder:"Senha"}),z.jsx("button",{children:"Entrar"}),z.jsx("p",{className:"separate",children:"OU"}),z.jsxs("div",{className:"forgot-password",children:[z.jsx("p",{children:"Use um código de login"}),z.jsx("a",{href:"#",children:"Esqueceu sua senha?"})]}),z.jsxs("div",{className:"remember",children:[z.jsx("input",{type:"checkbox"}),z.jsx("label",{children:"Lembra de Mim?"})]}),z.jsxs("div",{className:"sign-up-now",children:[z.jsx("p",{children:"Novo na Netflix"}),z.jsx("p",{onClick:c,children:z.jsx("strong",{children:"Assine Já"})})]})]})})]})})}const Nv=be.div`
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
`;function jv(){return z.jsx(Nv,{children:z.jsxs("footer",{className:"content-section",children:[z.jsx("p",{className:"doubt",children:"Dúvidas? Ligue para 0800 591 2876 (ligação gratuita)"}),z.jsxs("div",{className:"questions",children:[z.jsxs("div",{className:"q1",children:[z.jsx("p",{children:"Perguntas frequentes"}),z.jsx("p",{children:"Termos de Uso"}),z.jsx("p",{children:"Preferências de cookies"})]}),z.jsxs("div",{className:"q2",children:[z.jsx("p",{children:"Central de ajuda"}),z.jsx("p",{children:"Privacidade"}),z.jsx("p",{children:"Informações corporativas"})]}),z.jsxs("select",{children:[z.jsx("option",{value:"portugues",children:"Português"}),z.jsx("option",{value:"ingles",children:"Inglês"})]})]})]})})}function Uv(){return z.jsxs(z.Fragment,{children:[z.jsx(Dv,{}),z.jsx(jv,{})]})}function Cv(){return z.jsx(z.Fragment,{children:z.jsx(V1,{basename:"/Movies-ReactJS",children:z.jsxs(E1,{children:[z.jsx(So,{path:"/",element:z.jsx(Ov,{})}),z.jsx(So,{path:"/sign-in",element:z.jsx(Uv,{})})]})})})}Ng.createRoot(document.getElementById("root")).render(z.jsx(D.StrictMode,{children:z.jsx(Cv,{})}));
