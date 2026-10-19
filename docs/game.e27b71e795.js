"use strict";(()=>{var KT=Object.create;var Lp=Object.defineProperty;var QT=Object.getOwnPropertyDescriptor;var jT=Object.getOwnPropertyNames;var $T=Object.getPrototypeOf,tE=Object.prototype.hasOwnProperty;var eE=(e,t,n)=>t in e?Lp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ga=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var nE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of jT(t))!tE.call(e,a)&&a!==n&&Lp(e,a,{get:()=>t[a],enumerable:!(i=QT(t,a))||i.enumerable});return e};var gr=(e,t,n)=>(n=e!=null?KT($T(e)):{},nE(t||!e||!e.__esModule?Lp(n,"default",{value:e,enumerable:!0}):n,e));var ql=(e,t,n)=>eE(e,typeof t!="symbol"?t+"":t,n);var Tv=ga(Wt=>{"use strict";var Pp=Symbol.for("react.transitional.element"),iE=Symbol.for("react.portal"),aE=Symbol.for("react.fragment"),sE=Symbol.for("react.strict_mode"),rE=Symbol.for("react.profiler"),oE=Symbol.for("react.consumer"),lE=Symbol.for("react.context"),cE=Symbol.for("react.forward_ref"),uE=Symbol.for("react.suspense"),hE=Symbol.for("react.memo"),gv=Symbol.for("react.lazy"),fE=Symbol.for("react.activity"),dE=Symbol.for("react.view_transition"),fv=Symbol.iterator;function pE(e){return e===null||typeof e!="object"?null:(e=fv&&e[fv]||e["@@iterator"],typeof e=="function"?e:null)}var xv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vv=Object.assign,yv={};function ro(e,t,n){this.props=e,this.context=t,this.refs=yv,this.updater=n||xv}ro.prototype.isReactComponent={};ro.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ro.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _v(){}_v.prototype=ro.prototype;function zp(e,t,n){this.props=e,this.context=t,this.refs=yv,this.updater=n||xv}var Bp=zp.prototype=new _v;Bp.constructor=zp;vv(Bp,ro.prototype);Bp.isPureReactComponent=!0;var dv=Array.isArray;function Op(){}var Ge={H:null,A:null,T:null,S:null},Sv=Object.prototype.hasOwnProperty;function Fp(e,t,n){var i=n.ref;return{$$typeof:Pp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function mE(e,t){return Fp(e.type,t,e.props)}function Hp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pp}function gE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pv=/\/+/g;function Ip(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gE(""+e.key):t.toString(36)}function xE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Op,Op):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function so(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Pp:case iE:r=!0;break;case gv:return r=e._init,so(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Ip(e,0):i,dv(a)?(n="",r!=null&&(n=r.replace(pv,"$&/")+"/"),so(a,t,n,"",function(c){return c})):a!=null&&(Hp(a)&&(a=mE(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(pv,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(dv(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Ip(i,l),r+=so(i,t,n,s,a);else if(l=pE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Ip(i,l++),r+=so(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return so(xE(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Vu(e,t,n){if(e==null)return e;var i=[],a=0;return so(e,i,"","",function(s){return t.call(n,s,a++)}),i}function vE(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var mv=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function bv(e){var t=Ge.T,n={};n.types=t!==null?t.types:null,Ge.T=n;try{var i=e(),a=Ge.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Op,mv)}catch(s){mv(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ge.T=t}}function Mv(e){var t=Ge.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else bv(Mv.bind(null,e))}var yE={map:Vu,forEach:function(e,t,n){Vu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vu(e,function(){t++}),t},toArray:function(e){return Vu(e,function(t){return t})||[]},only:function(e){if(!Hp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Wt.Activity=fE;Wt.Children=yE;Wt.Component=ro;Wt.Fragment=aE;Wt.Profiler=rE;Wt.PureComponent=zp;Wt.StrictMode=sE;Wt.Suspense=uE;Wt.ViewTransition=dE;Wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ge;Wt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ge.H.useMemoCache(e)}};Wt.addTransitionType=Mv;Wt.cache=function(e){return function(){return e.apply(null,arguments)}};Wt.cacheSignal=function(){return null};Wt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=vv({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!Sv.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Fp(e.type,a,i)};Wt.createContext=function(e){return e={$$typeof:lE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:oE,_context:e},e};Wt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)Sv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Fp(e,s,a)};Wt.createRef=function(){return{current:null}};Wt.forwardRef=function(e){return{$$typeof:cE,render:e}};Wt.isValidElement=Hp;Wt.lazy=function(e){return{$$typeof:gv,_payload:{_status:-1,_result:e},_init:vE}};Wt.memo=function(e,t){return{$$typeof:hE,type:e,compare:t===void 0?null:t}};Wt.startTransition=bv;Wt.unstable_useCacheRefresh=function(){return Ge.H.useCacheRefresh()};Wt.use=function(e){return Ge.H.use(e)};Wt.useActionState=function(e,t,n){return Ge.H.useActionState(e,t,n)};Wt.useCallback=function(e,t){return Ge.H.useCallback(e,t)};Wt.useContext=function(e){return Ge.H.useContext(e)};Wt.useDebugValue=function(){};Wt.useDeferredValue=function(e,t){return Ge.H.useDeferredValue(e,t)};Wt.useEffect=function(e,t){return Ge.H.useEffect(e,t)};Wt.useEffectEvent=function(e){return Ge.H.useEffectEvent(e)};Wt.useId=function(){return Ge.H.useId()};Wt.useImperativeHandle=function(e,t,n){return Ge.H.useImperativeHandle(e,t,n)};Wt.useInsertionEffect=function(e,t){return Ge.H.useInsertionEffect(e,t)};Wt.useLayoutEffect=function(e,t){return Ge.H.useLayoutEffect(e,t)};Wt.useMemo=function(e,t){return Ge.H.useMemo(e,t)};Wt.useOptimistic=function(e,t){return Ge.H.useOptimistic(e,t)};Wt.useReducer=function(e,t,n){return Ge.H.useReducer(e,t,n)};Wt.useRef=function(e){return Ge.H.useRef(e)};Wt.useState=function(e){return Ge.H.useState(e)};Wt.useSyncExternalStore=function(e,t,n){return Ge.H.useSyncExternalStore(e,t,n)};Wt.useTransition=function(){return Ge.H.useTransition()};Wt.version="19.3.1"});var Yl=ga((wU,Ev)=>{"use strict";Ev.exports=Tv()});var Ov=ga(Ke=>{"use strict";function Xp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,a=e[i];if(0<ku(a,t))e[i]=t,e[n]=a,n=i;else break t}}function xa(e){return e.length===0?null:e[0]}function Wu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,a=e.length,s=a>>>1;i<s;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>ku(o,n))l<a&&0>ku(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<a&&0>ku(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function ku(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ke.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Av=performance,Ke.unstable_now=function(){return Av.now()}):(Gp=Date,wv=Gp.now(),Ke.unstable_now=function(){return Gp.now()-wv});var Av,Gp,wv,Xa=[],Ss=[],_E=1,Ii=null,Vn=3,Wp=!1,Zl=!1,Jl=!1,qp=!1,Nv=typeof setTimeout=="function"?setTimeout:null,Dv=typeof clearTimeout=="function"?clearTimeout:null,Rv=typeof setImmediate<"u"?setImmediate:null;function Xu(e){for(var t=xa(Ss);t!==null;){if(t.callback===null)Wu(Ss);else if(t.startTime<=e)Wu(Ss),t.sortIndex=t.expirationTime,Xp(Xa,t);else break;t=xa(Ss)}}function Yp(e){if(Jl=!1,Xu(e),!Zl)if(xa(Xa)!==null)Zl=!0,lo||(lo=!0,oo());else{var t=xa(Ss);t!==null&&Zp(Yp,t.startTime-e)}}var lo=!1,Kl=-1,Uv=5,Lv=-1;function Iv(){return qp?!0:!(Ke.unstable_now()-Lv<Uv)}function Vp(){if(qp=!1,lo){var e=Ke.unstable_now();Lv=e;var t=!0;try{t:{Zl=!1,Jl&&(Jl=!1,Dv(Kl),Kl=-1),Wp=!0;var n=Vn;try{e:{for(Xu(e),Ii=xa(Xa);Ii!==null&&!(Ii.expirationTime>e&&Iv());){var i=Ii.callback;if(typeof i=="function"){Ii.callback=null,Vn=Ii.priorityLevel;var a=i(Ii.expirationTime<=e);if(e=Ke.unstable_now(),typeof a=="function"){Ii.callback=a,Xu(e),t=!0;break e}Ii===xa(Xa)&&Wu(Xa),Xu(e)}else Wu(Xa);Ii=xa(Xa)}if(Ii!==null)t=!0;else{var s=xa(Ss);s!==null&&Zp(Yp,s.startTime-e),t=!1}}break t}finally{Ii=null,Vn=n,Wp=!1}t=void 0}}finally{t?oo():lo=!1}}}var oo;typeof Rv=="function"?oo=function(){Rv(Vp)}:typeof MessageChannel<"u"?(kp=new MessageChannel,Cv=kp.port2,kp.port1.onmessage=Vp,oo=function(){Cv.postMessage(null)}):oo=function(){Nv(Vp,0)};var kp,Cv;function Zp(e,t){Kl=Nv(function(){e(Ke.unstable_now())},t)}Ke.unstable_IdlePriority=5;Ke.unstable_ImmediatePriority=1;Ke.unstable_LowPriority=4;Ke.unstable_NormalPriority=3;Ke.unstable_Profiling=null;Ke.unstable_UserBlockingPriority=2;Ke.unstable_cancelCallback=function(e){e.callback=null};Ke.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Uv=0<e?Math.floor(1e3/e):5};Ke.unstable_getCurrentPriorityLevel=function(){return Vn};Ke.unstable_next=function(e){switch(Vn){case 1:case 2:case 3:var t=3;break;default:t=Vn}var n=Vn;Vn=t;try{return e()}finally{Vn=n}};Ke.unstable_requestPaint=function(){qp=!0};Ke.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Vn;Vn=e;try{return t()}finally{Vn=n}};Ke.unstable_scheduleCallback=function(e,t,n){var i=Ke.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:_E++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>i?(e.sortIndex=n,Xp(Ss,e),xa(Xa)===null&&e===xa(Ss)&&(Jl?(Dv(Kl),Kl=-1):Jl=!0,Zp(Yp,n-i))):(e.sortIndex=a,Xp(Xa,e),Zl||Wp||(Zl=!0,lo||(lo=!0,oo()))),e};Ke.unstable_shouldYield=Iv;Ke.unstable_wrapCallback=function(e){var t=Vn;return function(){var n=Vn;Vn=t;try{return e.apply(this,arguments)}finally{Vn=n}}}});var zv=ga((CU,Pv)=>{"use strict";Pv.exports=Ov()});var Hv=ga(kn=>{"use strict";var SE=Yl();function Fv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function bs(){}var Kn={d:{f:bs,r:function(){throw Error(Fv(522))},D:bs,C:bs,L:bs,m:bs,X:bs,S:bs,M:bs},p:0,findDOMNode:null},bE=Symbol.for("react.portal"),ME=Symbol.for("react.recoverable"),Bv=Symbol.for("react.optimistic_key");function TE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bE,key:i==null?null:i===Bv?Bv:""+i,children:e,containerInfo:t,implementation:n}}var Ql=SE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function qu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Kn;kn.browser=function(e){return{$$typeof:ME,_reason:e}};kn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Fv(299));return TE(e,t,null,n)};kn.flushSync=function(e){var t=Ql.T,n=Kn.p;try{if(Ql.T=null,Kn.p=2,e)return e()}finally{Ql.T=t,Kn.p=n,Kn.d.f()}};kn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Kn.d.C(e,t))};kn.prefetchDNS=function(e){typeof e=="string"&&Kn.d.D(e)};kn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=qu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Kn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&Kn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};kn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=qu(t.as,t.crossOrigin);Kn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Kn.d.M(e)};kn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=qu(n,t.crossOrigin);Kn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};kn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=qu(t.as,t.crossOrigin);Kn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Kn.d.m(e)};kn.requestFormReset=function(e){Kn.d.r(e)};kn.unstable_batchedUpdates=function(e,t){return e(t)};kn.useFormState=function(e,t,n){return Ql.H.useFormState(e,t,n)};kn.useFormStatus=function(){return Ql.H.useHostTransitionStatus()};kn.version="19.3.1"});var kv=ga((DU,Vv)=>{"use strict";function Gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gv)}catch(e){console.error(e)}}Gv(),Vv.exports=Hv()});var Cb=ga(Rf=>{"use strict";var vn=zv(),R_=Yl(),EE=kv();function et(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function N_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xv(e){if(Bc(e)!==e)throw Error(et(188))}function AE(e){var t=e.alternate;if(!t){if(t=Bc(e),t===null)throw Error(et(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Xv(a),e;if(s===i)return Xv(a),t;s=s.sibling}throw Error(et(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(et(189))}}if(n.alternate!==i)throw Error(et(190))}if(n.tag!==3)throw Error(et(188));return n.stateNode.current===n?e:t}function U_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=U_(e),t!==null)return t;e=e.sibling}return null}function ci(e,t,n,i,a,s){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,a,s)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&ci(e.child,t,n,i,a,s))return!0;e=e.sibling}return!1}function zr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function Wv(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function L_(e){var t=[null,null],n=zr(e);return n===null||I_(t,e,n.child,{foundSelf:!1}),t}function I_(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&I_(e,t,n.child,i))return!0;n=n.sibling}return!1}function xn(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(et(559))}}var go=null,Am=null;function wE(e,t,n){return e===n?!0:e===t?(go=e,!0):!1}function RE(e,t,n){return e===n?(Am=e,!1):e===t?(Am!==null&&(go=e),!0):!1}function qv(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function wm(e,t,n){for(var i=0,a=e;a;a=n(a))i++;a=0;for(var s=t;s;s=n(s))a++;for(;0<i-a;)e=n(e),i--;for(;0<a-i;)t=n(t),a--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Fe=Object.assign,CE=Symbol.for("react.element"),Yu=Symbol.for("react.transitional.element"),ac=Symbol.for("react.portal"),xo=Symbol.for("react.fragment"),O_=Symbol.for("react.strict_mode"),Rm=Symbol.for("react.profiler"),P_=Symbol.for("react.consumer"),Ma=Symbol.for("react.context"),z0=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),Nm=Symbol.for("react.suspense_list"),B0=Symbol.for("react.memo"),As=Symbol.for("react.lazy");Symbol.for("react.scope");var Dm=Symbol.for("react.activity"),NE=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var DE=Symbol.for("react.memo_cache_sentinel"),Um=Symbol.for("react.view_transition"),UE=Symbol.for("react.recoverable"),Yv=Symbol.iterator;function jl(e){return e===null||typeof e!="object"?null:(e=Yv&&e[Yv]||e["@@iterator"],typeof e=="function"?e:null)}var LE=Symbol.for("react.client.reference");function Lm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===LE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xo:return"Fragment";case Rm:return"Profiler";case O_:return"StrictMode";case Cm:return"Suspense";case Nm:return"SuspenseList";case Dm:return"Activity";case Um:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case ac:return"Portal";case Ma:return e.displayName||"Context";case P_:return(e._context.displayName||"Context")+".Consumer";case z0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B0:return t=e.displayName||null,t!==null?t:Lm(e.type)||"Memo";case As:t=e._payload,e=e._init;try{return Lm(e(t))}catch{}}return null}var sc=Array.isArray,Gt=R_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Te=EE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Tr={pending:!1,data:null,method:null,action:null},Im=[],vo=-1;function Na(e){return{current:e}}function Ln(e){0>vo||(e.current=Im[vo],Im[vo]=null,vo--)}function Xe(e,t){vo++,Im[vo]=e.current,e.current=t}var wa=Na(null),bc=Na(null),Os=Na(null),Lh=Na(null);function Ih(e,t){switch(Xe(Os,t),Xe(bc,e),Xe(wa,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?o_(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=o_(t),e=ab(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ln(wa),Xe(wa,e)}function Bo(){Ln(wa),Ln(bc),Ln(Os)}function Om(e){var t=e.memoizedState;t!==null&&(Zo._currentValue=t.memoizedState,Xe(Lh,e)),t=wa.current;var n=ab(t,e.type);t!==n&&(Xe(bc,e),Xe(wa,n))}function Oh(e){bc.current===e&&(Ln(wa),Ln(bc)),Lh.current===e&&(Ln(Lh),Zo._currentValue=Tr)}var Jp,Zv;function Ts(e){if(Jp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jp=t&&t[1]||"",Zv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jp+e+Zv}var Kp=!1;function Qp(e,t){if(!e||Kp)return"";Kp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(x){var u=x}Reflect.construct(e,[],p)}else{try{p.call()}catch(x){u=x}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(x){u=x}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(x){if(x&&u&&typeof x.stack=="string")return[x.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{Kp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ts(n):""}function IE(e,t){switch(e.tag){case 26:case 27:case 5:return Ts(e.type);case 16:return Ts("Lazy");case 13:return e.child!==t&&t!==null?Ts("Suspense Fallback"):Ts("Suspense");case 19:return Ts("SuspenseList");case 0:case 15:return Qp(e.type,!1);case 11:return Qp(e.type.render,!1);case 1:return Qp(e.type,!0);case 31:return Ts("Activity");case 30:return Ts("ViewTransition");default:return""}}function Jv(e){try{var t="",n=null;do t+=IE(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Pm=Object.prototype.hasOwnProperty,F0=vn.unstable_scheduleCallback,jp=vn.unstable_cancelCallback,OE=vn.unstable_shouldYield,PE=vn.unstable_requestPaint,_i=vn.unstable_now,zE=vn.unstable_getCurrentPriorityLevel,z_=vn.unstable_ImmediatePriority,B_=vn.unstable_UserBlockingPriority,Ph=vn.unstable_NormalPriority,BE=vn.unstable_LowPriority,F_=vn.unstable_IdlePriority,FE=vn.log,HE=vn.unstable_setDisableYieldValue,Fc=null,Si=null;function Cs(e){if(typeof FE=="function"&&HE(e),Si&&typeof Si.setStrictMode=="function")try{Si.setStrictMode(Fc,e)}catch{}}var bi=Math.clz32?Math.clz32:kE,GE=Math.log,VE=Math.LN2;function kE(e){return e>>>=0,e===0?32:31-(GE(e)/VE|0)|0}var Zu=256,Ju=262144,Ku=4194304;function yr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function cf(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=yr(i):(r&=o,r!==0?a=yr(r):n||(n=o&~e,n!==0&&(a=yr(n))))):(o=i&~s,o!==0?a=yr(o):r!==0?a=yr(r):n||(n=i&~e,n!==0&&(a=yr(n)))),a===0?0:t!==0&&t!==a&&(t&s)===0&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function Hc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function H_(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-bi(n),a=1<<i;t|=e[i],n&=~a}return t}function XE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G_(){var e=Ku;return Ku<<=1,(Ku&62914560)===0&&(Ku=4194304),e}function $p(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function WE(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-bi(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var d=u[h];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&V_(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function V_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-bi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function k_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-bi(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function X_(e,t){var n=t&-t;return n=(n&42)!==0?1:H0(n),(n&(e.suspendedLanes|t))!==0?0:n}function H0(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function G0(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function W_(){var e=Te.p;return e!==0?e:(e=window.event,e===void 0?32:Ab(e.type))}function Kv(e,t){var n=Te.p;try{return Te.p=e,t()}finally{Te.p=n}}var is=Math.random().toString(36).slice(2),Dn="__reactFiber$"+is,ui="__reactProps$"+is,Qo="__reactContainer$"+is,Qv="__reactEvents$"+is,qE="__reactListeners$"+is,YE="__reactHandles$"+is,jv="__reactResources$"+is,Vc="__reactMarker$"+is,zh="__reactLoad$"+is;function uf(e){delete e[Dn],delete e[ui],delete e[qE],delete e[YE]}function br(e){var t;if(t=e[Dn])return t;for(var n=e.parentNode;n;){if(t=n[Qo]||n[Dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=m_(e);e!==null;){if(n=e[Dn])return n;e=m_(e)}return t}e=n,n=e.parentNode}return null}function jo(e){if(e=e[Dn]||e[Qo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function rc(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(et(33))}function Ro(e){var t=e[jv];return t||(t=e[jv]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function En(e){e[Vc]=!0}function q_(e){e[zh]=void 0}var Y_=new Set,Z_={};function Br(e,t){Fo(e,t),Fo(e+"Capture",t)}function Fo(e,t){for(Z_[e]=t,e=0;e<t.length;e++)Y_.add(t[e])}var ZE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$v={},ty={};function JE(e){return Pm.call(ty,e)?!0:Pm.call($v,e)?!1:ZE.test(e)?ty[e]=!0:($v[e]=!0,!1)}var _e=!1;function ey(){var e=_e;return _e=!1,e}function ph(e,t,n){if(JE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Qu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Wa(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function gi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function J_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function KE(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zm(e){if(!e._valueTracker){var t=J_(e)?"checked":"value";e._valueTracker=KE(e,t,""+e[t])}}function K_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=J_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var QE=/[\n"\\]/g;function Fi(e){return e.replace(QE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Bm(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gi(t)):e.value!==""+gi(t)&&(e.value=""+gi(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?tm(e,gi(e.value)):tm(e,gi(t)):n!=null?tm(e,gi(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+gi(o):e.removeAttribute("name")}function Q_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){zm(e);return}n=n!=null?""+gi(n):"",t=t!=null?""+gi(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),zm(e)}function tm(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Co(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+gi(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function j_(e,t,n){if(t!=null&&(t=""+gi(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+gi(n):""}function $_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(et(92));if(sc(i)){if(1<i.length)throw Error(et(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=gi(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),zm(e)}function Ho(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ny(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||jE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function t1(e,t,n){if(t!=null&&typeof t!="object")throw Error(et(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",_e=!0);for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&(ny(e,a,i),_e=!0)}else for(var s in t)t.hasOwnProperty(s)&&ny(e,s,t[s])}function V0(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $E=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mh(e){return tA.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ta(){}var Fm=null;function k0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yo=null,No=null;function iy(e){var t=jo(e);if(t&&(e=t.stateNode)){var n=e[ui]||null;t:switch(e=t.stateNode,t.type){case"input":if(Bm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Fi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[ui]||null;if(!a)throw Error(et(90));Bm(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&K_(i)}break t;case"textarea":j_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Co(e,!!n.multiple,t,!1)}}}var em=!1;function e1(e,t,n){if(em)return e(t,n);em=!0;try{var i=e(t);return i}finally{if(em=!1,(yo!==null||No!==null)&&(Tf(),yo&&(t=yo,e=No,No=yo=null,iy(t),e)))for(t=0;t<e.length;t++)iy(e[t])}}function Mc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ui]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(et(231,t,typeof n));return n}var Qa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hm=!1;if(Qa)try{co={},Object.defineProperty(co,"passive",{get:function(){Hm=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Hm=!1}var co,Ns=null,X0=null,gh=null;function n1(){if(gh)return gh;var e,t=X0,n=t.length,i,a="value"in Ns?Ns.value:Ns.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return gh=a.slice(e,1<i?1-i:void 0)}function xh(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ju(){return!0}function ay(){return!1}function ti(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ju:ay,this.isPropagationStopped=ay,this}return Fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ju)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ju)},persist:function(){},isPersistent:ju}),t}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hf=ti(Ks),kc=Fe({},Ks,{view:0,detail:0}),eA=ti(kc),nm,im,$l,ff=Fe({},kc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:W0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$l&&($l&&e.type==="mousemove"?(nm=e.screenX-$l.screenX,im=e.screenY-$l.screenY):im=nm=0,$l=e),nm)},movementY:function(e){return"movementY"in e?e.movementY:im}}),sy=ti(ff),nA=Fe({},ff,{dataTransfer:0}),iA=ti(nA),aA=Fe({},kc,{relatedTarget:0}),am=ti(aA),sA=Fe({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),rA=ti(sA),oA=Fe({},Ks,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lA=ti(oA),cA=Fe({},Ks,{data:0}),ry=ti(cA),uA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dA(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fA[e])?!!t[e]:!1}function W0(){return dA}var pA=Fe({},kc,{key:function(e){if(e.key){var t=uA[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xh(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hA[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:W0,charCode:function(e){return e.type==="keypress"?xh(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xh(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mA=ti(pA),gA=Fe({},ff,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oy=ti(gA),xA=Fe({},Ks,{submitter:0}),vA=ti(xA),yA=Fe({},kc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:W0}),_A=ti(yA),SA=Fe({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),bA=ti(SA),MA=Fe({},ff,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),TA=ti(MA),EA=Fe({},Ks,{newState:0,oldState:0,source:0}),AA=ti(EA),wA=[9,13,27,32],q0=Qa&&"CompositionEvent"in window,cc=null;Qa&&"documentMode"in document&&(cc=document.documentMode);var RA=Qa&&"TextEvent"in window&&!cc,i1=Qa&&(!q0||cc&&8<cc&&11>=cc),ly=" ",cy=!1;function a1(e,t){switch(e){case"keyup":return wA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _o=!1;function CA(e,t){switch(e){case"compositionend":return s1(t);case"keypress":return t.which!==32?null:(cy=!0,ly);case"textInput":return e=t.data,e===ly&&cy?null:e;default:return null}}function NA(e,t){if(_o)return e==="compositionend"||!q0&&a1(e,t)?(e=n1(),gh=X0=Ns=null,_o=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return i1&&t.locale!=="ko"?null:t.data;default:return null}}var DA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!DA[e.type]:t==="textarea"}function r1(e,t,n,i){yo?No?No.push(i):No=[i]:yo=i,t=rf(t,"onChange"),0<t.length&&(n=new hf("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var uc=null,Tc=null;function UA(e){eb(e,0)}function df(e){var t=rc(e);if(K_(t))return e}function hy(e,t){if(e==="change")return t}var o1=!1;Qa&&(Qa?(th="oninput"in document,th||(sm=document.createElement("div"),sm.setAttribute("oninput","return;"),th=typeof sm.oninput=="function"),$u=th):$u=!1,o1=$u&&(!document.documentMode||9<document.documentMode));var $u,th,sm;function fy(){uc&&(uc.detachEvent("onpropertychange",l1),Tc=uc=null)}function l1(e){if(e.propertyName==="value"&&df(Tc)){var t=[];r1(t,Tc,e,k0(e)),e1(UA,t)}}function LA(e,t,n){e==="focusin"?(fy(),uc=t,Tc=n,uc.attachEvent("onpropertychange",l1)):e==="focusout"&&fy()}function IA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return df(Tc)}function OA(e,t){if(e==="click")return df(t)}function PA(e,t){if(e==="input"||e==="change")return df(t)}function zA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ti=typeof Object.is=="function"?Object.is:zA;function Ec(e,t){if(Ti(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Pm.call(t,a)||!Ti(e[a],t[a]))return!1}return!0}function Gm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function py(e,t){var n=dy(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=dy(n)}}function c1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?c1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function u1(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gm(e.document)}return t}function Y0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var BA=Qa&&"documentMode"in document&&11>=document.documentMode,So=null,Vm=null,hc=null,km=!1;function my(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;km||So==null||So!==Gm(i)||(i=So,"selectionStart"in i&&Y0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),hc&&Ec(hc,i)||(hc=i,i=rf(Vm,"onSelect"),0<i.length&&(t=new hf("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=So)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bo={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionrun:xr("Transition","TransitionRun"),transitionstart:xr("Transition","TransitionStart"),transitioncancel:xr("Transition","TransitionCancel"),transitionend:xr("Transition","TransitionEnd")},rm={},h1={};Qa&&(h1=document.createElement("div").style,"AnimationEvent"in window||(delete bo.animationend.animation,delete bo.animationiteration.animation,delete bo.animationstart.animation),"TransitionEvent"in window||delete bo.transitionend.transition);function Fr(e){if(rm[e])return rm[e];if(!bo[e])return e;var t=bo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in h1)return rm[e]=t[n];return e}var f1=Fr("animationend"),d1=Fr("animationiteration"),p1=Fr("animationstart"),FA=Fr("transitionrun"),HA=Fr("transitionstart"),GA=Fr("transitioncancel"),m1=Fr("transitionend"),g1=new Map,Xm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xm.push("scrollEnd");function na(e,t){g1.set(e,t),Br(t,[e])}var VA=0;function ja(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=ea.identifierPrefix;var n=VA++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function gy(e){if(e==null||typeof e=="string")return e;var t=null,n=zo;if(n!==null)for(var i=0;i<n.length;i++){var a=e[n[i]];if(a!=null){if(a==="none")return"none";t=t==null?a:t+(" "+a)}}return t??e.default}function as(e,t){return e=gy(e),t=gy(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Bh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Pi=[],Mo=0,Z0=0;function pf(){for(var e=Mo,t=Z0=Mo=0;t<e;){var n=Pi[t];Pi[t++]=null;var i=Pi[t];Pi[t++]=null;var a=Pi[t];Pi[t++]=null;var s=Pi[t];if(Pi[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&x1(n,a,s)}}function mf(e,t,n,i){Pi[Mo++]=e,Pi[Mo++]=t,Pi[Mo++]=n,Pi[Mo++]=i,Z0|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function J0(e,t,n,i){return mf(e,t,n,i),Fh(e)}function Hr(e,t){return mf(e,null,null,t),Fh(e)}function x1(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-bi(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Fh(e){if(50<Sc)throw Sc=0,wh=null,Error(et(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var To={};function kA(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,t,n,i){return new kA(e,t,n,i)}function K0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ja(e,t){var n=e.alternate;return n===null?(n=oi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function v1(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vh(e,t,n,i,a,s){var r=0;if(i=e,typeof i=="function")K0(i)&&(r=1);else if(typeof i=="string")r=m2(e,n,wa.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Dm:return e=oi(31,n,t,a),e.elementType=Dm,e.lanes=s,e;case xo:return Er(n.children,a,s,t);case O_:r=8,a|=24;break;case Rm:return e=oi(12,n,t,a|2),e.elementType=Rm,e.lanes=s,e;case Cm:return e=oi(13,n,t,a),e.elementType=Cm,e.lanes=s,e;case Nm:return e=oi(19,n,t,a),e.elementType=Nm,e.lanes=s,e;case NE:case Um:return e=a|32,e=oi(30,n,t,e),e.elementType=Um,e.lanes=s,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Ma:r=10;break t;case P_:r=9;break t;case z0:r=11;break t;case B0:r=14;break t;case As:r=16,i=null;break t}r=29,n=Error(et(130,e===null?"null":typeof e,"")),i=null}return t=oi(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function Er(e,t,n,i){return e=oi(7,e,i,t),e.lanes=n,e}function om(e,t,n){return e=oi(6,e,null,t),e.lanes=n,e}function y1(e){var t=oi(18,null,null,0);return t.stateNode=e,t}function lm(e,t,n){return t=oi(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xy=new WeakMap;function Hi(e,t){if(typeof e=="object"&&e!==null){var n=xy.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Jv(t)},xy.set(e,t),t)}return{value:e,source:t,stack:Jv(t)}}var Eo=[],Ao=0,Hh=null,Ac=0,zi=[],Bi=0,Ws=null,Ea=1,Aa="";function Ya(e,t){Eo[Ao++]=Ac,Eo[Ao++]=Hh,Hh=e,Ac=t}function _1(e,t,n){zi[Bi++]=Ea,zi[Bi++]=Aa,zi[Bi++]=Ws,Ws=e;var i=Ea;e=Aa;var a=32-bi(i)-1;i&=~(1<<a),n+=1;var s=32-bi(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,Ea=1<<32-bi(t)+a|n<<a|i,Aa=s+e}else Ea=1<<s|n<<a|i,Aa=e}function gf(e){e.return!==null&&(Ya(e,1),_1(e,1,0))}function Q0(e){for(;e===Hh;)Hh=Eo[--Ao],Eo[Ao]=null,Ac=Eo[--Ao],Eo[Ao]=null;for(;e===Ws;)Ws=zi[--Bi],zi[Bi]=null,Aa=zi[--Bi],zi[Bi]=null,Ea=zi[--Bi],zi[Bi]=null}function S1(e,t){zi[Bi++]=Ea,zi[Bi++]=Aa,zi[Bi++]=Ws,Ea=t.id,Aa=t.overflow,Ws=e}var An=null,ke=null,ae=!1,Ps=null,Gi=!1,Wm=Error(et(519));function qs(e){var t=Error(et(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wc(Hi(t,e)),Wm}function vy(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Dn]=e,t[ui]=i,n){case"dialog":ce("cancel",t),ce("close",t);break;case"iframe":case"object":case"embed":ce("load",t);break;case"video":case"audio":for(n=0;n<Dc.length;n++)ce(Dc[n],t);break;case"source":ce("error",t);break;case"img":case"image":case"link":ce("error",t),ce("load",t);break;case"details":ce("toggle",t);break;case"input":ce("invalid",t),Q_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ce("invalid",t);break;case"textarea":ce("invalid",t),$_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||ib(t.textContent,n)?(i.popover!=null&&(ce("beforetoggle",t),ce("toggle",t)),i.onScroll!=null&&ce("scroll",t),i.onScrollEnd!=null&&ce("scrollend",t),i.onClick!=null&&(t.onclick=Ta),t=!0):t=!1,t||qs(e,!0)}function Gh(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:Gi=!1;return;case 27:case 3:Gi=!0;return;default:An=An.return}}function uo(e){if(e!==An)return!1;if(!ae)return Gh(e),ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||C0(e.type,e.memoizedProps)),n=!n),n&&ke&&qs(e),Gh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));ke=p_(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));ke=p_(e)}else t===27?(t=ke,Qs(e.type)?(e=L0,L0=null,ke=e):ke=t):ke=An?Vi(e.stateNode.nextSibling):null;return!0}function Cr(){ke=An=null,ae=!1}function cm(){var e=Ps;return e!==null&&(si===null?si=e:si.push.apply(si,e),Ps=null),e}function wc(e){Ps===null?Ps=[e]:Ps.push(e)}var qm=Na(null),Gr=null,Za=null;function Ds(e,t,n){Xe(qm,t._currentValue),t._currentValue=n}function Ka(e){e._currentValue=qm.current,Ln(qm)}function yh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Ym(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),yh(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(et(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),yh(r,n,e),r=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),yh(a.return,n,e),r=a.child,r=r!==null?r.sibling:null):r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Nr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if((a.flags&524288)!==0)s=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(et(387));if(r=r.memoizedProps,r!==null){var o=a.type;Ti(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Lh.current){if(r=a.alternate,r===null)throw Error(et(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Zo):e=[Zo])}a=a.return}return e!==null&&Ym(t,e,n,i),t.flags|=262144,e!==null}function Vh(e){for(e=e.firstContext;e!==null;){if(!Ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Dr(e){Gr=e,Za=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return b1(Gr,e)}function eh(e,t){return Gr===null&&Dr(e),b1(e,t)}function b1(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Za===null){if(e===null)throw Error(et(308));Za=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Za=Za.next=t;return n}var XA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},WA=vn.unstable_scheduleCallback,qA=vn.unstable_NormalPriority,fn={$$typeof:Ma,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function j0(){return{controller:new XA,data:new Map,refCount:0}}function Xc(e){e.refCount--,e.refCount===0&&WA(qA,function(){e.controller.abort()})}function yy(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var oc=null;function YA(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var fc=null,Zm=0,Ur=0,Do=null;function ZA(e,t){if(fc===null){var n=fc=[];Zm=0,Ur=Ag(),Do={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Zm++,t.then(_y,_y),t}function _y(){if(--Zm===0&&(oc=null,fc!==null)){Do!==null&&(Do.status="fulfilled");var e=fc;fc=null,Ur=0,Do=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function JA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Sy=Gt.S;Gt.S=function(e,t){if(HS=_i(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ZA(e,t),oc!==null)for(var n=Wo;n!==null;)yy(n,oc),n=n.next;if(n=e.types,n!==null){for(var i=Wo;i!==null;)yy(i,n),i=i.next;if(Ur!==0){i=oc,i===null&&(i=oc=[]);for(var a=0;a<n.length;a++){var s=n[a];i.indexOf(s)===-1&&i.push(s)}}}Sy!==null&&Sy(e,t)};var Ar=Na(null);function $0(){var e=Ar.current;return e!==null?e:Be.pooledCache}function _h(e,t){t===null?Xe(Ar,Ar.current):Xe(Ar,t.pool)}function M1(){var e=$0();return e===null?null:{parent:fn._currentValue,pool:e}}var $o=Error(et(460)),tg=Error(et(474)),xf=Error(et(542)),kh={then:function(){}};function by(e){return e=e.status,e==="fulfilled"||e==="rejected"}function T1(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ta,Ta),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ty(e),e===void 0&&!("reason"in t)?Error(et(600)):e;default:if(typeof t.status=="string")t.then(Ta,Ta);else{if(e=Be,e!==null&&100<e.shellSuspendCounter)throw Error(et(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ty(e),e}throw wr=t,$o}}function _r(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(wr=n,$o):n}}var wr=null;function My(){if(wr===null)throw Error(et(459));var e=wr;return wr=null,e}function Ty(e){if(e===$o||e===xf)throw Error(et(483))}var Uo=null,Rc=0;function nh(e){var t=Rc;return Rc+=1,Uo===null&&(Uo=[]),T1(Uo,e,t)}function Ms(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ih(e,t){throw t.$$typeof===CE?Error(et(525)):(e=Object.prototype.toString.call(t),Error(et(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function E1(e){function t(f,m){if(e){var b=f.deletions;b===null?(f.deletions=[m],f.flags|=16):b.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key===null?m.set(f.index,f):m.set(f.key,f),f=f.sibling;return m}function a(f,m){return f=Ja(f,m),f.index=0,f.sibling=null,f}function s(f,m,b){return f.index=b,e?(b=f.alternate,b!==null?(b=b.index,b<m?(f.flags|=2,m):b):(f.flags|=134217730,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=134217730),f}function o(f,m,b,v){return m===null||m.tag!==6?(m=om(b,f.mode,v),m.return=f,m):(m=a(m,b),m.return=f,m)}function l(f,m,b,v){var T=b.type;return T===xo?(f=h(f,m,b.props.children,v,b.key),Ms(f,b),f):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===As&&_r(T)===m.type)?(m=a(m,b.props),Ms(m,b),m.return=f,m):(m=vh(b.type,b.key,b.props,null,f.mode,v),Ms(m,b),m.return=f,m)}function c(f,m,b,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=lm(b,f.mode,v),m.return=f,m):(m=a(m,b.children||[]),m.return=f,m)}function h(f,m,b,v,T){return m===null||m.tag!==7?(m=Er(b,f.mode,v,T),m.return=f,m):(m=a(m,b),m.return=f,m)}function p(f,m,b){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=om(""+m,f.mode,b),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Yu:return b=vh(m.type,m.key,m.props,null,f.mode,b),Ms(b,m),b.return=f,b;case ac:return m=lm(m,f.mode,b),m.return=f,m;case As:return m=_r(m),p(f,m,b)}if(sc(m)||jl(m))return m=Er(m,f.mode,b,null),m.return=f,m;if(typeof m.then=="function")return p(f,nh(m),b);if(m.$$typeof===Ma)return p(f,eh(f,m),b);ih(f,m)}return null}function u(f,m,b,v){var T=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return T!==null?null:o(f,m,""+b,v);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Yu:return b.key===T?l(f,m,b,v):null;case ac:return b.key===T?c(f,m,b,v):null;case As:return b=_r(b),u(f,m,b,v)}if(sc(b)||jl(b))return T!==null?null:h(f,m,b,v,null);if(typeof b.then=="function")return u(f,m,nh(b),v);if(b.$$typeof===Ma)return u(f,m,eh(f,b),v);ih(f,b)}return null}function d(f,m,b,v,T){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return f=f.get(b)||null,o(m,f,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yu:return f=f.get(v.key===null?b:v.key)||null,l(m,f,v,T);case ac:return f=f.get(v.key===null?b:v.key)||null,c(m,f,v,T);case As:return v=_r(v),d(f,m,b,v,T)}if(sc(v)||jl(v))return f=f.get(b)||null,h(m,f,v,T,null);if(typeof v.then=="function")return d(f,m,b,nh(v),T);if(v.$$typeof===Ma)return d(f,m,b,eh(m,v),T);ih(m,v)}return null}function x(f,m,b,v){for(var T=null,E=null,w=m,y=m=0,A=null;w!==null&&y<b.length;y++){w.index>y?(A=w,w=null):A=w.sibling;var R=u(f,w,b[y],v);if(R===null){w===null&&(w=A);break}e&&w&&R.alternate===null&&t(f,w),m=s(R,m,y),E===null?T=R:E.sibling=R,E=R,w=A}if(y===b.length)return n(f,w),ae&&Ya(f,y),T;if(w===null){for(;y<b.length;y++)w=p(f,b[y],v),w!==null&&(m=s(w,m,y),E===null?T=w:E.sibling=w,E=w);return ae&&Ya(f,y),T}for(w=i(w);y<b.length;y++)A=d(w,f,y,b[y],v),A!==null&&(e&&(R=A.alternate,R!==null&&w.delete(R.key===null?y:R.key)),m=s(A,m,y),E===null?T=A:E.sibling=A,E=A);return e&&w.forEach(function(I){return t(f,I)}),ae&&Ya(f,y),T}function S(f,m,b,v){if(b==null)throw Error(et(151));for(var T=null,E=null,w=m,y=m=0,A=null,R=b.next();w!==null&&!R.done;y++,R=b.next()){w.index>y?(A=w,w=null):A=w.sibling;var I=u(f,w,R.value,v);if(I===null){w===null&&(w=A);break}e&&w&&I.alternate===null&&t(f,w),m=s(I,m,y),E===null?T=I:E.sibling=I,E=I,w=A}if(R.done)return n(f,w),ae&&Ya(f,y),T;if(w===null){for(;!R.done;y++,R=b.next())R=p(f,R.value,v),R!==null&&(m=s(R,m,y),E===null?T=R:E.sibling=R,E=R);return ae&&Ya(f,y),T}for(w=i(w);!R.done;y++,R=b.next())R=d(w,f,y,R.value,v),R!==null&&(e&&(A=R.alternate,A!==null&&w.delete(A.key===null?y:A.key)),m=s(R,m,y),E===null?T=R:E.sibling=R,E=R);return e&&w.forEach(function(C){return t(f,C)}),ae&&Ya(f,y),T}function g(f,m,b,v){if(typeof b=="object"&&b!==null&&b.type===xo&&b.key===null&&b.props.ref===void 0&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Yu:t:{for(var T=b.key;m!==null;){if(m.key===T){if(T=b.type,T===xo){if(m.tag===7){n(f,m.sibling),v=a(m,b.props.children),Ms(v,b),v.return=f,f=v;break t}}else if(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===As&&_r(T)===m.type){n(f,m.sibling),v=a(m,b.props),Ms(v,b),v.return=f,f=v;break t}n(f,m);break}else t(f,m);m=m.sibling}b.type===xo?(v=Er(b.props.children,f.mode,v,b.key),Ms(v,b),v.return=f,f=v):(v=vh(b.type,b.key,b.props,null,f.mode,v),Ms(v,b),v.return=f,f=v)}return r(f);case ac:t:{for(T=b.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){n(f,m.sibling),v=a(m,b.children||[]),v.return=f,f=v;break t}else{n(f,m);break}else t(f,m);m=m.sibling}v=lm(b,f.mode,v),v.return=f,f=v}return r(f);case As:return b=_r(b),g(f,m,b,v)}if(sc(b))return x(f,m,b,v);if(jl(b)){if(T=jl(b),typeof T!="function")throw Error(et(150));return b=T.call(b),S(f,m,b,v)}if(typeof b.then=="function")return g(f,m,nh(b),v);if(b.$$typeof===Ma)return g(f,m,eh(f,b),v);ih(f,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,m!==null&&m.tag===6?(n(f,m.sibling),v=a(m,b),v.return=f,f=v):(n(f,m),v=om(b,f.mode,v),v.return=f,f=v),r(f)):n(f,m)}return function(f,m,b,v){try{Rc=0;var T=g(f,m,b,v);return Uo=null,T}catch(w){if(w===$o||w===xf)throw w;var E=oi(29,w,null,f.mode);return E.lanes=v,E.return=f,E}finally{}}}var Lr=E1(!0),A1=E1(!1),ws=!1;function eg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function zs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Bs(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Me&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Fh(e),x1(e,null,n),t}return mf(e,i,t,n),Fh(e)}function dc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,k_(e,n)}}function um(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Km=!1;function pc(){if(Km){var e=Do;if(e!==null)throw e}}function mc(e,t,n,i){Km=!1;var a=e.updateQueue;ws=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=a.baseState;r=0,h=c=l=null,o=s;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(he&u)===u:(i&u)===u){u!==0&&u===Ur&&(Km=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var x=e,S=o;u=t;var g=n;switch(S.tag){case 1:if(x=S.payload,typeof x=="function"){p=x.call(g,p,u);break t}p=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,u=typeof x=="function"?x.call(g,p,u):x,u==null)break t;p=Fe({},p,u);break t;case 2:ws=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=a.callbacks,d===null?a.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=p):h=h.next=d,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;d=o,o=d.next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}while(!0);h===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),Js|=r,e.lanes=r,e.memoizedState=p}}function w1(e,t){if(typeof e!="function")throw Error(et(191,e));e.call(t)}function R1(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)w1(n[e],t)}var Ys=Na(null),Xh=Na(0);function Ey(e,t){e=ns,Xe(Xh,e),Xe(Ys,t),ns=e|t.baseLanes}function Qm(){Xe(Xh,ns),Xe(Ys,Ys.current)}function ng(){ns=Xh.current,Ln(Ys),Ln(Xh)}var Pn=Na(null),Xn=null;function Fs(e){var t=e.alternate;Xe(In,In.current&1),Xe(Pn,e),Xn===null&&(t===null||Ys.current!==null||t.memoizedState!==null)&&(Xn=e)}function jm(e){Xe(In,In.current),Xe(Pn,e),Xn===null&&(Xn=e)}function C1(e){e.tag===22?(Xe(In,In.current),Xe(Pn,e),Xn===null&&(Xn=e)):Hs()}function Hs(){Xe(In,In.current),Xe(Pn,Pn.current)}function xi(e){Ln(Pn),Xn===e&&(Xn=null),Ln(In)}var In=Na(0);function Cc(e,t){Xe(Pn,Pn.current),Xe(In,t)}function ig(e){Ln(In),Ln(Pn),Xn===e&&(Xn=null)}function Wh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||U0(n)||Ng(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $a=0,Qt=null,Oe=null,hn=null,qh=!1,Lo=!1,Ir=!1,Yh=0,Nc=0,Io=null,KA=0;function an(){throw Error(et(321))}function ag(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ti(e[n],t[n]))return!1;return!0}function sg(e,t,n,i,a,s){return $a=s,Qt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gt.H=e===null||e.memoizedState===null?rS:oS,Ir=!1,s=n(i,a),Ir=!1,Lo&&(s=D1(t,n,i,a)),N1(e),s}function N1(e){Gt.H=Zh;var t=Oe!==null&&Oe.next!==null;if($a=0,hn=Oe=Qt=null,qh=!1,Nc=0,Io=null,t)throw Error(et(300));e===null||dn||(e=e.dependencies,e!==null&&Vh(e)&&(dn=!0))}function D1(e,t,n,i){Qt=e;var a=0;do{if(Lo&&(Io=null),Nc=0,Lo=!1,25<=a)throw Error(et(301));if(a+=1,hn=Oe=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Gt.H=aw,s=t(n,i)}while(Lo);return s}function QA(){var e=Gt.H,t=e.useState()[0];return t=typeof t.then=="function"?Wc(t):t,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(Qt.flags|=1024),t}function rg(){var e=Yh!==0;return Yh=0,e}function og(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function lg(e){if(qh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}qh=!1}$a=0,hn=Oe=Qt=null,Lo=!1,Nc=Yh=0,Io=null}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Qt.memoizedState=hn=e:hn=hn.next=e,hn}function ln(){if(Oe===null){var e=Qt.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=hn===null?Qt.memoizedState:hn.next;if(t!==null)hn=t,Oe=e;else{if(e===null)throw Qt.alternate===null?Error(et(467)):Error(et(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},hn===null?Qt.memoizedState=hn=e:hn=hn.next=e}return hn}function vf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wc(e){var t=Nc;return Nc+=1,Io===null&&(Io=[]),e=T1(Io,e,t),t=Qt,(hn===null?t.memoizedState:hn.next)===null&&(t=t.alternate,Gt.H=t===null||t.memoizedState===null?rS:oS),e}function yf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wc(e);if(e.$$typeof===UE)return;if(e.$$typeof===Ma)return Un(e)}throw Error(et(438,String(e)))}function cg(e){var t=null,n=Qt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Qt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=vf(),Qt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=DE;return t.index++,n}function ts(e,t){return typeof t=="function"?t(e):t}function Sh(e){var t=ln();return ug(t,Oe,e)}function ug(e,t,n){var i=e.queue;if(i===null)throw Error(et(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(he&p)===p:($a&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Ur&&(h=!0);else if(($a&u)===u){c=c.next,u===Ur&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Qt.lanes|=u,Js|=u;p=c.action,Ir&&n(s,p),s=c.hasEagerState?c.eagerState:n(s,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Qt.lanes|=p,Js|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!Ti(s,e.memoizedState)&&(dn=!0,h&&(n=Do,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function hm(e){var t=ln(),n=t.queue;if(n===null)throw Error(et(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);Ti(s,t.memoizedState)||(dn=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function U1(e,t,n){var i=Qt,a=ln(),s=ae;if(s){if(n===void 0)throw Error(et(407));n=n()}else n=t();var r=!Ti((Oe||a).memoizedState,n);if(r&&(a.memoizedState=n,dn=!0),a=a.queue,hg(O1.bind(null,i,a,e),[e]),e=a.getSnapshot!==t||r||hn!==null&&(hn.memoizedState.tag&1)!==0,Go(e?9:8,{destroy:void 0},I1.bind(null,i,a,n,t),null),e){if(i.flags|=2048,Be===null)throw Error(et(349));s||($a&127)!==0||L1(i,t,n)}return n}function L1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Qt.updateQueue,t===null?(t=vf(),Qt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function I1(e,t,n,i){t.value=n,t.getSnapshot=i,P1(t)&&z1(e)}function O1(e,t,n){return n(function(){P1(t)&&z1(e)})}function P1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ti(e,n)}catch{return!0}}function z1(e){var t=Hr(e,2);t!==null&&li(t,e,2)}function $m(e){var t=$n();if(typeof e=="function"){var n=e;if(e=n(),Ir){Cs(!0);try{n()}finally{Cs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:e},t}function B1(e,t,n,i){return e.baseState=n,ug(e,Oe,typeof i=="function"?i:ts)}function jA(e,t,n,i,a){if(Sf(e))throw Error(et(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Gt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,F1(t,s)):(s.next=n.next,t.pending=n.next=s)}}function F1(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Gt.T,r={};r.types=s!==null?s.types:null,Gt.T=r;try{var o=n(a,i),l=Gt.S;l!==null&&l(r,o),Ay(e,t,o)}catch(c){t0(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Gt.T=s}}else try{s=n(a,i),Ay(e,t,s)}catch(c){t0(e,t,c)}}function Ay(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){wy(e,t,i)},function(i){return t0(e,t,i)}):wy(e,t,n)}function wy(e,t,n){t.status="fulfilled",t.value=n,H1(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,F1(e,n)))}function t0(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,H1(t),t=t.next;while(t!==i)}e.action=null}function H1(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function G1(e,t){return t}function Ry(e,t){if(ae){var n=Be.formState;if(n!==null){t:{var i=Qt;if(ae){if(ke){e:{for(var a=ke,s=Gi;a.nodeType!==8;){if(!s){a=null;break e}if(a=Vi(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){ke=Vi(a.nextSibling),i=a.data==="F!";break t}}qs(i)}i=!1}i&&(t=n[0])}}return n=$n(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:G1,lastRenderedState:t},n.queue=i,n=iS.bind(null,Qt,i),i.dispatch=n,i=$m(!1),s=mg.bind(null,Qt,!1,i.queue),i=$n(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=jA.bind(null,Qt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Cy(e){var t=ln();return V1(t,Oe,e)}function V1(e,t,n){if(t=ug(e,t,G1)[0],e=Sh(ts)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Wc(t)}catch(r){throw r===$o?xf:r}else i=t;t=ln();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Qt.flags|=2048,Go(9,{destroy:void 0},$A.bind(null,a,n),null)),[i,s,e]}function $A(e,t){e.action=t}function Ny(e){var t=ln(),n=Oe;if(n!==null)return V1(t,n,e);ln(),t=t.memoizedState,n=ln();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Go(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Qt.updateQueue,t===null&&(t=vf(),Qt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function k1(){return ln().memoizedState}function bh(e,t,n,i){var a=$n();Qt.flags|=e,a.memoizedState=Go(1|t,{destroy:void 0},n,i===void 0?null:i)}function _f(e,t,n,i){var a=ln();i=i===void 0?null:i;var s=a.memoizedState.inst;Oe!==null&&i!==null&&ag(i,Oe.memoizedState.deps)?a.memoizedState=Go(t,s,n,i):(Qt.flags|=e,a.memoizedState=Go(1|t,s,n,i))}function Dy(e,t){bh(8390656,8,e,t)}function hg(e,t){_f(2048,8,e,t)}function tw(e){Qt.flags|=4;var t=Qt.updateQueue;if(t===null)t=vf(),Qt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function X1(e){var t=ln().memoizedState;return tw({ref:t,nextImpl:e}),function(){if((Me&2)!==0)throw Error(et(440));return t.impl.apply(void 0,arguments)}}function W1(e,t){return _f(4,2,e,t)}function q1(e,t){return _f(4,4,e,t)}function Y1(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Z1(e,t,n){n=n!=null?n.concat([e]):null,_f(4,4,Y1.bind(null,t,e),n)}function fg(){}function J1(e,t){var n=ln();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ag(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function K1(e,t){var n=ln();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ag(t,i[1]))return i[0];if(i=e(),Ir){Cs(!0);try{e()}finally{Cs(!1)}}return n.memoizedState=[i,t],i}function dg(e,t,n){return n===void 0||($a&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=VS(),Qt.lanes|=e,Js|=e,n)}function Q1(e,t,n,i){return Ti(n,t)?n:Ys.current!==null?(e=dg(e,n,i),Ti(e,t)||(dn=!0),e):($a&106)===0||($a&1073741824)!==0&&(he&261930)===0?(dn=!0,e.memoizedState=n):(e=VS(),Qt.lanes|=e,Js|=e,t)}function j1(e,t,n,i,a){var s=Te.p;Te.p=s!==0&&8>s?s:8;var r=Gt.T,o={};o.types=r!==null?r.types:null,Gt.T=o,mg(e,!1,t,n);try{var l=a(),c=Gt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=JA(l,i);gc(e,t,h,Mi(e))}else gc(e,t,i,Mi(e))}catch(p){gc(e,t,{then:function(){},status:"rejected",reason:p},Mi())}finally{Te.p=s,r!==null&&o.types!==null&&(r.types=o.types),Gt.T=r}}function ew(){}function e0(e,t,n,i){if(e.tag!==5)throw Error(et(476));var a=$1(e).queue;j1(e,a,t,Tr,n===null?ew:function(){return tS(e),n(i)})}function $1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Tr,baseState:Tr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:Tr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function tS(e){var t=$1(e);t.next===null&&(t=e.alternate.memoizedState),gc(e,t.next.queue,{},Mi())}function pg(){return Un(Zo)}function eS(){return ln().memoizedState}function nS(){return ln().memoizedState}function nw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Mi();e=zs(n);var i=Bs(t,e,n);i!==null&&(li(i,t,n),dc(i,t,n)),t={cache:j0()},e.payload=t;return}t=t.return}}function iw(e,t,n){var i=Mi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Sf(e)?aS(t,n):(n=J0(e,t,n,i),n!==null&&(li(n,e,i),sS(n,t,i)))}function iS(e,t,n){var i=Mi();gc(e,t,n,i)}function gc(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sf(e))aS(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Ti(o,r))return mf(e,t,a,0),Be===null&&pf(),!1}catch{}finally{}if(n=J0(e,t,a,i),n!==null)return li(n,e,i),sS(n,t,i),!0}return!1}function mg(e,t,n,i){if(i={lane:2,revertLane:Ag(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Sf(e)){if(t)throw Error(et(479))}else t=J0(e,n,i,2),t!==null&&li(t,e,2)}function Sf(e){var t=e.alternate;return e===Qt||t!==null&&t===Qt}function aS(e,t){Lo=qh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,k_(e,n)}}var Zh={readContext:Un,use:yf,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},rS={readContext:Un,use:yf,useCallback:function(e,t){return $n().memoizedState=[e,t===void 0?null:t],e},useContext:Un,useEffect:Dy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,bh(4194308,4,Y1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bh(4194308,4,e,t)},useInsertionEffect:function(e,t){bh(4,2,e,t)},useMemo:function(e,t){var n=$n();t=t===void 0?null:t;var i=e();if(Ir){Cs(!0);try{e()}finally{Cs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=$n();if(n!==void 0){var a=n(t);if(Ir){Cs(!0);try{n(t)}finally{Cs(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=iw.bind(null,Qt,e),[i.memoizedState,e]},useRef:function(e){var t=$n();return e={current:e},t.memoizedState=e},useState:function(e){e=$m(e);var t=e.queue,n=iS.bind(null,Qt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:fg,useDeferredValue:function(e,t){var n=$n();return dg(n,e,t)},useTransition:function(){var e=$m(!1);return e=j1.bind(null,Qt,e.queue,!0,!1),$n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Qt,a=$n();if(ae){if(n===void 0)throw Error(et(407));n=n()}else{if(n=t(),Be===null)throw Error(et(349));(he&127)!==0||L1(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Dy(O1.bind(null,i,s,e),[e]),i.flags|=2048,Go(9,{destroy:void 0},I1.bind(null,i,s,n,t),null),n},useId:function(){var e=$n(),t=Be.identifierPrefix;if(ae){var n=Aa,i=Ea;n=(i&~(1<<32-bi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Yh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=KA++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:pg,useFormState:Ry,useActionState:Ry,useOptimistic:function(e){var t=$n();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=mg.bind(null,Qt,!0,n),n.dispatch=t,[e,t]},useMemoCache:cg,useCacheRefresh:function(){return $n().memoizedState=nw.bind(null,Qt)},useEffectEvent:function(e){var t=$n(),n={impl:e};return t.memoizedState=n,function(){if((Me&2)!==0)throw Error(et(440));return n.impl.apply(void 0,arguments)}}},oS={readContext:Un,use:yf,useCallback:J1,useContext:Un,useEffect:hg,useImperativeHandle:Z1,useInsertionEffect:W1,useLayoutEffect:q1,useMemo:K1,useReducer:Sh,useRef:k1,useState:function(){return Sh(ts)},useDebugValue:fg,useDeferredValue:function(e,t){var n=ln();return Q1(n,Oe.memoizedState,e,t)},useTransition:function(){var e=Sh(ts)[0],t=ln().memoizedState;return[typeof e=="boolean"?e:Wc(e),t]},useSyncExternalStore:U1,useId:eS,useHostTransitionStatus:pg,useFormState:Cy,useActionState:Cy,useOptimistic:function(e,t){var n=ln();return B1(n,Oe,e,t)},useMemoCache:cg,useCacheRefresh:nS,useEffectEvent:X1},aw={readContext:Un,use:yf,useCallback:J1,useContext:Un,useEffect:hg,useImperativeHandle:Z1,useInsertionEffect:W1,useLayoutEffect:q1,useMemo:K1,useReducer:hm,useRef:k1,useState:function(){return hm(ts)},useDebugValue:fg,useDeferredValue:function(e,t){var n=ln();return Oe===null?dg(n,e,t):Q1(n,Oe.memoizedState,e,t)},useTransition:function(){var e=hm(ts)[0],t=ln().memoizedState;return[typeof e=="boolean"?e:Wc(e),t]},useSyncExternalStore:U1,useId:eS,useHostTransitionStatus:pg,useFormState:Ny,useActionState:Ny,useOptimistic:function(e,t){var n=ln();return Oe!==null?B1(n,Oe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:cg,useCacheRefresh:nS,useEffectEvent:X1};function fm(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var n0={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Mi(),a=zs(i);a.payload=t,n!=null&&(a.callback=n),t=Bs(e,a,i),t!==null&&(li(t,e,i),dc(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Mi(),a=zs(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Bs(e,a,i),t!==null&&(li(t,e,i),dc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Mi(),i=zs(n);i.tag=2,t!=null&&(i.callback=t),t=Bs(e,i,n),t!==null&&(li(t,e,n),dc(t,e,n))}};function Uy(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Ec(n,i)||!Ec(a,s):!0}function Ly(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&n0.enqueueReplaceState(t,t.state,null)}function Or(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Fe({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function lS(e){Bh(e)}function cS(e){console.error(e)}function uS(e){Bh(e)}function Jh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Iy(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function i0(e,t,n){return n=zs(n),n.tag=3,n.payload={element:null},n.callback=function(){Jh(e,t)},n}function hS(e){return e=zs(e),e.tag=3,e}function fS(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){Iy(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Iy(t,n,i),typeof a!="function"&&(Gs===null?Gs=new Set([this]):Gs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function sw(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Nr(t,n,a,!0),n=Pn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Xn===null?af():n.alternate===null&&sn===0&&(sn=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===kh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),ym(e,i,a)),!1;case 22:return n.flags|=65536,i===kh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),ym(e,i,a)),!1}throw Error(et(435,n.tag))}return ym(e,i,a),af(),!1}if(ae)return t=Pn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Wm&&(e=Error(et(422),{cause:i}),wc(Hi(e,n)))):(i!==Wm&&(t=Error(et(423),{cause:i}),wc(Hi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Hi(i,n),a=i0(e.stateNode,i,a),um(e,a),sn!==4&&(sn=2)),!1;var s=Error(et(520),{cause:i});if(s=Hi(s,n),_c===null?_c=[s]:_c.push(s),sn!==4&&(sn=2),t===null)return!0;i=Hi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=i0(n.stateNode,i,e),um(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Gs===null||!Gs.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=hS(a),fS(a,e,n,i),um(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var gg=Error(et(461)),dn=!1;function gn(e,t,n,i){t.child=e===null?A1(t,null,n,i):Lr(t,e.child,n,i)}function Oy(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Dr(t),i=sg(e,t,n,r,s,a),o=rg(),e!==null&&!dn?(og(e,t,a),es(e,t,a)):(ae&&o&&gf(t),t.flags|=1,gn(e,t,i,a),t.child)}function Py(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!K0(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,dS(e,t,s,i,a)):(e=vh(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!vg(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ec,n(r,i)&&e.ref===t.ref)return es(e,t,a)}return t.flags|=1,e=Ja(s,i),e.ref=t.ref,e.return=t,t.child=e}function dS(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(Ec(s,i)&&e.ref===t.ref)if(dn=!1,t.pendingProps=i=s,vg(e,a))(e.flags&131072)!==0&&(dn=!0);else return t.lanes=e.lanes,es(e,t,a)}return a0(e,t,n,i,a)}function pS(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return zy(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_h(t,s!==null?s.cachePool:null),s!==null?Ey(t,s):Qm(),C1(t);else return i=t.lanes=536870912,zy(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(_h(t,s.cachePool),Ey(t,s),Hs(),t.memoizedState=null):(e!==null&&_h(t,null),Qm(),Hs());return gn(e,t,a,n),t.child}function xc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function zy(e,t,n,i,a){var s=$0();return s=s===null?null:{parent:fn._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&_h(t,null),Qm(),C1(t),e!==null&&Nr(e,t,i,!0),t.childLanes=a,null}function Mh(e,t){return t=bf({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function By(e,t,n){return Lr(t,e.child,null,n),e=Mh(t,t.pendingProps),e.flags|=2,xi(t),t.memoizedState=null,e}function rw(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ae){if(i.mode==="hidden")return e=Mh(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},xc(null,e);if(jm(t),(e=ke)?(e=pb(e,Gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ws!==null?{id:Ea,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},n=y1(e),n.return=t,t.child=n,An=t,ke=null)):e=null,e===null)throw qs(t);return t.lanes=536870912,null}return Mh(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(jm(t),a)if(t.flags&256)t.flags&=-257,t=By(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(et(558));else if(dn||Nr(e,t,n,!1),a=(n&e.childLanes)!==0,dn||a){if(Ys.current===null){if(i=Be,i!==null&&(r=X_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Hr(e,r),li(i,e,r),gg;af()}t=By(e,t,n)}else e=s.treeContext,ke=Vi(r.nextSibling),An=t,ae=!0,Ps=null,Gi=!1,e!==null&&S1(t,e),t=Mh(t,i),t.flags|=134221824;return t}return e=Ja(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(et(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function a0(e,t,n,i,a){return Dr(t),n=sg(e,t,n,i,void 0,a),i=rg(),e!==null&&!dn?(og(e,t,a),es(e,t,a)):(ae&&i&&gf(t),t.flags|=1,gn(e,t,n,a),t.child)}function Fy(e,t,n,i,a,s){return Dr(t),t.updateQueue=null,n=D1(t,i,n,a),N1(e),i=rg(),e!==null&&!dn?(og(e,t,s),es(e,t,s)):(ae&&i&&gf(t),t.flags|=1,gn(e,t,n,s),t.child)}function Hy(e,t,n,i,a){if(Dr(t),t.stateNode===null){var s=To,r=n.contextType;typeof r=="object"&&r!==null&&(s=Un(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=n0,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},eg(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?Un(r):To,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(fm(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&n0.enqueueReplaceState(s,s.state,null),mc(t,i,s,a),pc(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=Or(n,o);s.props=l;var c=s.context,h=n.contextType;r=To,typeof h=="object"&&h!==null&&(r=Un(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&Ly(t,s,i,r),ws=!1;var u=t.memoizedState;s.state=u,mc(t,i,s,a),pc(),c=t.memoizedState,o||u!==c||ws?(typeof p=="function"&&(fm(t,n,p,i),c=t.memoizedState),(l=ws||Uy(t,n,l,i,u,c,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Jm(e,t),r=t.memoizedProps,h=Or(n,r),s.props=h,p=t.pendingProps,u=s.context,c=n.contextType,l=To,typeof c=="object"&&c!==null&&(l=Un(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Ly(t,s,i,l),ws=!1,u=t.memoizedState,s.state=u,mc(t,i,s,a),pc();var d=t.memoizedState;r!==p||u!==d||ws||e!==null&&e.dependencies!==null&&Vh(e.dependencies)?(typeof o=="function"&&(fm(t,n,o,i),d=t.memoizedState),(h=ws||Uy(t,n,h,i,u,d,l)||e!==null&&e.dependencies!==null&&Vh(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,d,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,d,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),s.props=i,s.state=d,s.context=l,i=h):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,fo(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Lr(t,e.child,null,a),t.child=Lr(t,null,n,a)):gn(e,t,n,a),t.memoizedState=s.state,e=t.child):e=es(e,t,a),e}function Gy(e,t,n,i){return Cr(),t.flags|=256,gn(e,t,n,i),t.child}var s0={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function r0(e){return{baseLanes:e,cachePool:M1()}}function o0(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=yi),e}function mS(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(In.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ae){if(a?Fs(t):Hs(),(e=ke)?(e=pb(e,Gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ws!==null?{id:Ea,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},n=y1(e),n.return=t,t.child=n,An=t,ke=null)):e=null,e===null)throw qs(t);return Ng(e)?t.lanes=32:t.lanes=536870912,null}return s=i.children,i=i.fallback,a?(Hs(),a=t.mode,s=bf({mode:"hidden",children:s},a),i=Er(i,a,n,null),s.return=t,i.return=t,s.sibling=i,t.child=s,i=t.child,i.memoizedState=r0(n),i.childLanes=o0(e,r,n),t.memoizedState=s0,xc(null,i)):(Fs(t),xg(t,s))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return ow(e,t,s,r,i,l,o,n)}return a?(Hs(),a=i.fallback,s=t.mode,o=e.child,l=o.sibling,i=Ja(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?a=Ja(l,a):(a=Er(a,s,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,xc(null,i),i=t.child,a=e.child.memoizedState,a===null?a=r0(n):(s=a.cachePool,s!==null?(o=fn._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=M1(),a={baseLanes:a.baseLanes|n,cachePool:s}),i.memoizedState=a,i.childLanes=o0(e,r,n),t.memoizedState=s0,xc(e.child,i)):(Fs(t),n=e.child,e=n.sibling,n=Ja(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function xg(e,t){return t=bf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function bf(e,t){return e=oi(22,e,null,t),e.lanes=0,e}function ah(e,t,n){return Lr(t,e.child,null,n),e=xg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ow(e,t,n,i,a,s,r,o){if(n)return t.flags&256?(Fs(t),t.flags&=-257,ah(e,t,o)):t.memoizedState!==null?(Hs(),t.child=e.child,t.flags|=128,null):(Hs(),s=a.fallback,r=t.mode,a=bf({mode:"visible",children:a.children},r),s=Er(s,r,o,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,Lr(t,e.child,null,o),a=t.child,a.memoizedState=r0(o),a.childLanes=o0(e,i,o),t.memoizedState=s0,xc(null,a));if(Fs(t),Ng(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(a=Error(et(419)),a.stack="",a.digest=i,wc({value:a,source:null,stack:null})),ah(e,t,o)}if(dn||Nr(e,t,o,!1),i=(o&e.childLanes)!==0,dn||i){if(Ys.current!==null)return ah(e,t,o);if(i=Be,i!==null&&(a=X_(i,o),a!==0&&a!==r.retryLane))throw r.retryLane=a,Hr(e,a),li(i,e,a),gg;return U0(s)||af(),ah(e,t,o)}return U0(s)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,ke=Vi(s.nextSibling),An=t,ae=!0,Ps=null,Gi=!1,e!==null&&S1(t,e),t=xg(t,a.children),t.flags|=134221824,t)}function Vy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),yh(e.return,t,n)}function ky(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Wh(n)===null&&(t=e),e=e.sibling}return t}function sh(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function dm(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function l0(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=In.current;if(t.flags&128)return Cc(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Cc(t,r),a==="backwards"&&e!==null?(dm(e),gn(e,t,i,n),dm(e)):gn(e,t,i,n),i=ae?Ac:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vy(e,n,t);else if(e.tag===19)Vy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":n=ky(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,dm(t)),sh(t,!0,a,null,s,i);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Wh(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}sh(t,!0,n,null,s,i);break;case"together":sh(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=ky(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),sh(t,!1,a,n,s,i)}return t.child}function Xy(e,t,n){var i=t.pendingProps;return Ds(t,t.type,i.value),gn(e,t,i.children,n),t.child}function es(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Js|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Nr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(et(153));if(t.child!==null){for(e=t.child,n=Ja(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ja(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Vh(e)))}function lw(e,t,n){switch(t.tag){case 3:Ih(t,t.stateNode.containerInfo),Ds(t,fn,e.memoizedState.cache),Cr();break;case 27:case 5:Om(t);break;case 4:Ih(t,t.stateNode.containerInfo);break;case 10:Ds(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,jm(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Fs(t),t.flags|=128,null;i=Nr(e,t,n,!1);var a=t.child.childLanes;return i||(n&a)!==0?mS(e,t,n):(Fs(t),e=es(e,t,n),e!==null?e.sibling:null)}Fs(t);break;case 19:if(t.flags&128)return l0(e,t,n);if(a=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Nr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return l0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Cc(t,In.current),i)break;return null;case 22:return t.lanes=0,pS(e,t,n,t.pendingProps);case 24:Ds(t,fn,e.memoizedState.cache)}return es(e,t,n)}function gS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)dn=!0;else{if(!vg(e,n)&&(t.flags&128)===0)return dn=!1,lw(e,t,n);dn=(e.flags&131072)!==0}else dn=!1,ae&&(t.flags&1048576)!==0&&_1(t,Ac,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=_r(t.elementType),t.type=e,typeof e=="function")K0(e)?(i=Or(e,i),t.tag=1,t=Hy(null,t,e,i,n)):(t.tag=0,t=a0(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===z0){t.tag=11,t=Oy(null,t,e,i,n);break t}else if(a===B0){t.tag=14,t=Py(null,t,e,i,n);break t}else if(a===Ma){t.tag=10,t.type=e,t=Xy(null,t,n);break t}}throw t=Lm(e)||e,Error(et(306,t,""))}}return t;case 0:return a0(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Or(i,t.pendingProps),Hy(e,t,i,a,n);case 3:t:{if(Ih(t,t.stateNode.containerInfo),e===null)throw Error(et(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Jm(e,t),mc(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ds(t,fn,i),i!==s.cache&&Ym(t,[fn],n,!0),pc(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Gy(e,t,i,n);break t}else if(i!==a){a=Hi(Error(et(424)),t),wc(a),t=Gy(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ke=Vi(e.firstChild),An=t,ae=!0,Ps=null,Gi=!0,n=A1(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Cr(),i===a){t=es(e,t,n);break t}gn(e,t,i,n)}t=t.child}return t;case 26:return fo(e,t),e===null?(n=x_(t.type,null,t.pendingProps,null))?t.memoizedState=n:ae||(t.stateNode=sb(t.type,t.pendingProps,Os.current,t)):t.memoizedState=x_(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Om(t),e===null&&ae&&(i=t.stateNode=mb(t.type,t.pendingProps,Os.current),An=t,Gi=!0,a=ke,Qs(t.type)?(L0=a,ke=Vi(i.firstChild)):ke=a),gn(e,t,t.pendingProps.children,n),fo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ae&&((a=i=ke)&&(i=t2(i,t.type,t.pendingProps,Gi),i!==null?(t.stateNode=i,An=t,ke=Vi(i.firstChild),Gi=!1,a=!0):a=!1),a||qs(t)),Om(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,C0(a,s)?i=null:r!==null&&C0(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=sg(e,t,QA,null,null,n),Zo._currentValue=a),fo(e,t),gn(e,t,i,n),t.child;case 6:return e===null&&ae&&((e=n=ke)&&(n=e2(n,t.pendingProps,Gi),n!==null?(t.stateNode=n,An=t,ke=null,e=!0):e=!1),e||qs(t)),null;case 13:return mS(e,t,n);case 4:return Ih(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Lr(t,null,i,n):gn(e,t,i,n),t.child;case 11:return Oy(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,fo(e,t),gn(e,t,i,n),t.child;case 8:return gn(e,t,t.pendingProps.children,n),t.child;case 12:return gn(e,t,t.pendingProps.children,n),t.child;case 10:return Xy(e,t,n);case 9:return a=t.type._context,i=t.pendingProps.children,Dr(t),a=Un(a),i=i(a),t.flags|=1,gn(e,t,i,n),t.child;case 14:return Py(e,t,t.type,t.pendingProps,n);case 15:return dS(e,t,t.type,t.pendingProps,n);case 19:return l0(e,t,n);case 31:return rw(e,t,n);case 22:return pS(e,t,n,t.pendingProps);case 24:return Dr(t),i=Un(fn),e===null?(a=$0(),a===null&&(a=Be,s=j0(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},eg(t),Ds(t,fn,a)):((e.lanes&n)!==0&&(Jm(e,t),mc(t,null,null,n),pc()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ds(t,fn,i)):(i=s.cache,Ds(t,fn,i),i!==a.cache&&Ym(t,[fn],n,!0))),gn(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:ae&&gf(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:fo(e,t),gn(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(et(156,t.tag))}function qa(e){e.flags|=4}function pm(e,t,n,i,a){var s;if((s=(e.mode&32)!==0)&&(s=n===null?__(t,i):__(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),s){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(WS())e.flags|=8192;else throw wr=kh,tg}else e.flags&=-16777217}function Wy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yb(t))if(WS())e.flags|=8192;else throw wr=kh,tg}function rh(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?G_():536870912,e.lanes|=t,Vo|=t)}function tc(e,t){if(!ae)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function cw(e,t,n){var i=t.pendingProps;switch(Q0(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ka(fn),Bo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(uo(t)?qa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,cm())),Ve(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(qa(t),s!==null?(Ve(t),Wy(t,s)):(Ve(t),pm(t,a,null,i,n))):s?s!==e.memoizedState?(qa(t),Ve(t),Wy(t,s)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&qa(t),Ve(t),pm(t,a,e,i,n)),null;case 27:if(Oh(t),n=Os.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&qa(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Ve(t),t.subtreeFlags&=-33554433,null}e=wa.current,uo(t)?vy(t,e):(e=mb(a,i,n),t.stateNode=e,qa(t))}return Ve(t),t.subtreeFlags&=-33554433,null;case 5:if(Oh(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&qa(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Ve(t),t.subtreeFlags&=-33554433,null}if(s=wa.current,uo(t))vy(t,s);else{var r=Lc(Os.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[Dn]=t,s[ui]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(On(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&qa(t)}}return Ve(t),t.subtreeFlags&=-33554433,pm(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&qa(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(et(166));if(e=Os.current,uo(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=An,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Dn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||ib(e.nodeValue,n)),e||qs(t,!0)}else e=Lc(e).createTextNode(i),e[Dn]=t,t.stateNode=e}return Ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=uo(t),n!==null){if(e===null){if(!i)throw Error(et(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(557));e[Dn]=t}else Cr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else n=cm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(xi(t),t):(xi(t),null);if((t.flags&128)!==0)throw Error(et(558))}return Ve(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=uo(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(et(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(et(317));a[Dn]=t}else Cr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),a=!1}else a=cm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(xi(t),t):(xi(t),null)}return xi(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),rh(t,t.updateQueue),Ve(t),null);case 4:return Bo(),e===null&&wg(t.stateNode.containerInfo),t.flags|=67108864,Ve(t),null;case 10:return Ka(t.type),Ve(t),null;case 19:if(ig(t),i=t.memoizedState,i===null)return Ve(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)tc(i,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Wh(e),s!==null){for(t.flags|=128,tc(i,!1),e=s.updateQueue,t.updateQueue=e,rh(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)v1(n,e),n=n.sibling;return Cc(t,In.current&1|2),ae&&Ya(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&_i()>ef&&(t.flags|=128,a=!0,tc(i,!1),t.lanes=4194304)}else{if(!a)if(e=Wh(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,rh(t,e),tc(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!s.alternate&&!ae)return Ve(t),null}else 2*_i()-i.renderingStartTime>ef&&n!==536870912&&(t.flags|=128,a=!0,tc(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=_i(),e.sibling=null,s=In.current,s=a?s&1|2:s&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||ae?Cc(t,s):(n=s,Xe(Pn,t),Xe(In,n),Xn===null&&(Xn=t)),ae&&Ya(t,i.treeForkCount),e}return Ve(t),null;case 22:case 23:return xi(t),ng(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),n=t.updateQueue,n!==null&&rh(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Ln(Ar),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ka(fn),Ve(t),null;case 25:return null;case 30:return t.flags|=33554432,Ve(t),null}throw Error(et(156,t.tag))}function uw(e,t){switch(Q0(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ka(fn),Bo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Oh(t),null;case 31:if(t.memoizedState!==null){if(xi(t),t.alternate===null)throw Error(et(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(xi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(et(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ig(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Bo(),null;case 10:return Ka(t.type),null;case 22:case 23:return xi(t),ng(),e!==null&&Ln(Ar),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ka(fn),null;case 25:return null;default:return null}}function xS(e,t){switch(Q0(t),t.tag){case 3:Ka(fn),Bo();break;case 26:case 27:case 5:Oh(t);break;case 4:Bo();break;case 31:t.memoizedState!==null&&xi(t);break;case 13:xi(t);break;case 19:ig(t);break;case 10:Ka(t.type);break;case 22:case 23:xi(t),ng(),e!==null&&Ln(Ar);break;case 24:Ka(fn)}}function qc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){Ue(t,t.return,o)}}function Zs(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){Ue(a,l,h)}}}i=i.next}while(i!==s)}}catch(h){Ue(t,t.return,h)}}function vS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{R1(t,n)}catch(i){Ue(e,e.return,i)}}}function yS(e,t,n){n.props=Or(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ue(e,t,i)}}function Sa(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var a=e.stateNode,s=ja(e.memoizedProps,a);(a.ref===null||a.ref.name!==s)&&(a.ref=cb(s)),i=a.ref;break;case 7:if(e.stateNode===null){var r=new Ei(e);ci(e.child,!1,jw,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){Ue(e,t,o)}}function Nn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){Ue(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Ue(e,t,a)}else n.current=null}function Kh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)db(e.stateNode,t[n])}function qy(e){for(var t=e.return;t!==null&&(_g(t)&&db(e.stateNode,t.stateNode),!yg(t));)t=t.return}function vc(e){for(var t=e.return;t!==null&&(_g(t)&&$w(e.stateNode,t.stateNode),!yg(t));)t=t.return}function yg(e){return e.tag===5||e.tag===3||e.tag===27}function _g(e){return e&&e.tag===7&&e.stateNode!==null}function c0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){Ue(e,e.return,a)}}function mm(e,t,n){try{var i=e.stateNode;Iw(i,e.type,n,t),i[ui]=t}catch(a){Ue(e,e.return,a)}}function _S(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qs(e.type)||e.tag===4}function gm(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_S(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function u0(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(a),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ta)),Kh(e,i),_e=!0;else if(a!==4&&(a===27&&(Kh(e,i),i=null,Qs(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(u0(e,t,n,i),e=e.sibling;e!==null;)u0(e,t,n,i),e=e.sibling}function Qh(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),Kh(e,i),_e=!0;else if(a!==4&&(a===27&&(Kh(e,i),i=null,Qs(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Qh(e,t,n,i),e=e.sibling;e!==null;)Qh(e,t,n,i),e=e.sibling}function SS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);On(t,i,n),t[Dn]=e,t[ui]=n}catch(s){Ue(e,e.return,s)}}var jh=!1,vi=null;function Yy(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(jh=!0)}var ba=null;function Zy(){var e=ba;return ba=null,e}var ri=0;function tl(e,t,n,i,a){return ri=0,bS(e.child,t,n,i,a)}function bS(e,t,n,i,a){for(var s=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=N0(r);i.push(o),o.view&&(s=!0)}else s||N0(r).view&&(s=!0);jh=!0,rb(r,ri===0?t:t+"_"+ri,n),ri++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||bS(e.child,t,n,i,a)&&(s=!0));e=e.sibling}return s}function Ca(e,t){for(;e!==null;)e.tag===5?ob(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Ca(e.child,t)),e=e.sibling}function Th(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Th(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(et(544));var n=t.name;t=as(t.default,t.share),t!=="none"&&(tl(e,n,t,null,!1)||Ca(e.child,!1))}e=e.sibling}}function h0(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,a=ja(i,n),s=as(i.default,n.paired?i.share:i.enter);s!=="none"?tl(e,a,s,null,!1)?(Th(e),n.paired||t||ko(e,i.onEnter)):Ca(e.child,!1):Th(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)h0(e,t),e=e.sibling;else Th(e)}function f0(e){if(vi!==null&&vi.size!==0){var t=vi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=t.get(i);if(a!==void 0){var s=as(n.default,n.share);if(s!=="none"&&(tl(e,i,s,null,!1)?(s=e.stateNode,a.paired=s,s.paired=a,ko(e,n.onShare)):Ca(e.child,!1)),t.delete(i),t.size===0)break}}}f0(e)}e=e.sibling}}}function d0(e){if(e.tag===30){var t=e.memoizedProps,n=ja(t,e.stateNode),i=vi!==null?vi.get(n):void 0,a=as(t.default,i!==void 0?t.share:t.exit);a!=="none"&&(tl(e,n,a,null,!1)?i!==void 0?(a=e.stateNode,i.paired=a,a.paired=i,vi.delete(n),ko(e,t.onShare)):ko(e,t.onExit):Ca(e.child,!1)),vi!==null&&f0(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)d0(e),e=e.sibling;else vi!==null&&f0(e)}function MS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=ja(t,e.stateNode);t=as(t.default,t.update),e.flags&=-5,t!=="none"&&tl(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&MS(e);e=e.sibling}}function p0(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ca(e.child,!1))}p0(e)}e=e.sibling}}function Eh(e){if(e.tag===30)e.stateNode.paired=null,Ca(e.child,!1),p0(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Eh(e),e=e.sibling;else p0(e)}function TS(e){for(e=e.child;e!==null;)e.tag===30?Ca(e.child,!1):(e.subtreeFlags&33554432)!==0&&TS(e),e=e.sibling}function Sg(e,t,n,i,a,s,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(s!==null&&ri<s.length){var c=s[ri],h=N0(l);(c.view||h.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(h.clip)p=!0;else{p=c.rect;var u=h.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&rb(l,ri===0?n:n+"_"+ri,a),o&&(e.flags&4)!==0||(ba===null&&(ba=[]),ba.push(l,ri===0?i:i+"_"+ri,t.memoizedProps)),ri++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Sg(e,t.child,n,i,a,s,r)&&(o=!0));t=t.sibling}return o}function ES(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,a=ja(n,i),s=as(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(Hw)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;ri=0,a=Sg(i,o,a,a,s,r,!1),(e.flags&4)!==0&&a&&(t||ko(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&ES(e,t);e=e.sibling}}var Mn=!1,we=!1,va=!1,xm=!1,Jy=typeof WeakSet=="function"?WeakSet:Set,Tn=null,ya=!1,lc=!1,$h=!1,m0=!1;function hw(e,t,n){if(e=e.containerInfo,w0=Jo,e=u1(e),Y0(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var s=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,p=0,u=e,d=null;e:for(;;){for(var x;u!==i||s!==0&&u.nodeType!==3||(l=o+s),u!==r||a!==0&&u.nodeType!==3||(c=o+a),u.nodeType===3&&(o+=u.nodeValue.length),(x=u.firstChild)!==null;)d=u,u=x;for(;;){if(u===e)break e;if(d===i&&++h===s&&(l=o),d===r&&++p===a&&(c=o),(x=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=x}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(R0={focusedElem:e,selectionRange:i},Jo=!1,n=(n&335544064)===n,Tn=t,t=n?9270:1024;Tn!==null;){if(e=Tn,n&&(i=e.deletions,i!==null))for(s=0;s<i.length;s++)n&&d0(i[s]);if(e.alternate===null&&(e.flags&2)!==0)n&&Yy(e),oh(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&d0(i),oh(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Yy(e),oh(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,Tn=i):(n&&MS(e),oh(n))}}vi=null}function oh(e){for(;Tn!==null;){var t=Tn,n=e,i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((a&1024)!==0&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var s=t.stateNode;try{var r=Or(t.type,a);n=s.getSnapshotBeforeUpdate(r,i),s.__reactInternalSnapshotBeforeUpdate=n}catch(o){Ue(t,t.return,o)}}break;case 3:if((a&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)D0(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":D0(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=ja(i.memoizedProps,i.stateNode),a=t.memoizedProps,a=as(a.default,a.update),a!=="none"&&tl(i,n,a,i.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error(et(163))}if(i=t.sibling,i!==null){i.return=t.return,Tn=i;break}Tn=t.return}}function AS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:_a(e,n),i&4&&qc(5,n);break;case 1:if(_a(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Ue(n,n.return,r)}else{var a=Or(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ue(n,n.return,r)}}i&64&&vS(n),i&512&&Sa(n,n.return);break;case 3:if(_a(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{R1(e,t)}catch(r){Ue(n,n.return,r)}}break;case 27:t===null&&i&4&&SS(n);case 26:case 5:_a(e,n),t===null&&i&4&&c0(n),i&512&&Sa(n,n.return);break;case 12:_a(e,n);break;case 31:_a(e,n),i&4&&NS(e,n);break;case 13:_a(e,n),i&4&&DS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Mw.bind(null,n),n2(e,n))));break;case 22:if(i=n.memoizedState!==null||Mn,!i){var s=t!==null&&t.memoizedState!==null||we;t=Mn,a=we,Mn=i,(we=s)&&!a?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),ji(e,n,i)):_a(e,n),Mn=t,we=a}break;case 30:_a(e,n),i&512&&Sa(n,n.return);break;case 7:i&512&&Sa(n,n.return);default:_a(e,n)}}function g0(e,t){for(e=e.child;e!==null;)wS(e,t),e=e.sibling}function wS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=e.stateNode,s=e.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null;a.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){Ue(e,e.return,l)}x0(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,_e=!0}catch(l){Ue(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?h_(o,!0):h_(e.stateNode,!1)}catch(l){Ue(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&g0(e,t);break;default:g0(e,t)}}function x0(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:wS(n,i);break t;case 22:n.memoizedState===null&&x0(n,i);break t;default:x0(n,i)}}e=e.sibling}}function RS(e){var t=e.alternate;t!==null&&(e.alternate=null,RS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&uf(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,ai=!1;function Qi(e,t,n){for(n=n.child;n!==null;)CS(e,t,n),n=n.sibling}function CS(e,t,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(Fc,n)}catch{}switch(n.tag){case 26:we||Nn(n,t),Qi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!we&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:we||Nn(n,t),vc(n);var i=Qe,a=ai;Qs(n.type)&&(Qe=n.stateNode,ai=!1),Qi(e,t,n),gb(n.stateNode,n.type,n.memoizedProps),Qe=i,ai=a;break;case 5:we||Nn(n,t),vc(n);case 6:if(n.tag===6&&vc(n),i=Qe,a=ai,Qe=null,Qi(e,t,n),Qe=i,ai=a,Qe!==null)if(ai)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(n.stateNode),_e=!0}catch(s){Ue(n,t,s)}else try{Qe.removeChild(n.stateNode),_e=!0}catch(s){Ue(n,t,s)}break;case 18:Qe!==null&&(ai?(e=Qe,u_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ko(e)):u_(Qe,n.stateNode));break;case 4:i=Qe,a=ai,Qe=n.stateNode.containerInfo,ai=!0,Qi(e,t,n),Qe=i,ai=a;break;case 0:case 11:case 14:case 15:Zs(2,n,t),we||Zs(4,n,t),Qi(e,t,n);break;case 1:we||(Nn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&yS(n,t,i)),Qi(e,t,n);break;case 21:Qi(e,t,n);break;case 22:we=(i=we)||n.memoizedState!==null,Qi(e,t,n),we=i;break;case 30:Nn(n,t),Qi(e,t,n);break;case 7:we||Nn(n,t),Qi(e,t,n);break;default:Qi(e,t,n)}}function NS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ko(e)}catch(n){Ue(t,t.return,n)}}}function DS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ko(e)}catch(n){Ue(t,t.return,n)}}function fw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Jy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Jy),t;default:throw Error(et(435,e.tag))}}function lh(e,t){var n=fw(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=Tw.bind(null,e,i);i.then(a,a)}})}function Qn(e,t,n){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var s=i[a],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Qs(l.type)){Qe=l.stateNode,ai=!1;break t}break;case 5:Qe=l.stateNode,ai=!1;break t;case 3:case 4:Qe=l.stateNode.containerInfo,ai=!0;break t}l=l.return}if(Qe===null)throw Error(et(160));CS(r,o,s),Qe=null,ai=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)US(t,e,n),t=t.sibling}var $i=null;function US(e,t,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var s=0;s<i.length;s++){var r=i[s];r.ref.impl=r.nextImpl}Qn(t,e,n),jn(e),a&4&&(Zs(3,e,e.return),qc(3,e),Zs(5,e,e.return));break;case 1:Qn(t,e,n),jn(e),a&512&&(we||i===null||Nn(i,i.return)),a&64&&Mn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(s=$i,Qn(t,e,n),jn(e),a&512&&(we||i===null||Nn(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(Mn)e.stateNode=sb(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,a=s.ownerDocument||s;e:switch(t){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Vc]||i[Dn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(t),a.head.insertBefore(i,a.querySelector("head > title"))),On(i,t,n),i[Dn]=e,En(i),t=i;break t;case"link":if(s=y_("link","href",a).get(t+(n.href||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(r,1);break e}}i=a.createElement(t),On(i,t,n),a.head.appendChild(i);break;case"meta":if(s=y_("meta","content",a).get(t+(n.content||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(r,1);break e}}i=a.createElement(t),On(i,t,n),a.head.appendChild(i);break;default:throw Error(et(468,t))}i[Dn]=e,En(i),t=i}e.stateNode=t}else Mn||I0(s,e.type,e.stateNode);else e.stateNode=v_(s,n,e.memoizedProps);else a!==n?(a===null?(t=i.stateNode,t===null||we||t.parentNode.removeChild(t)):a.count--,n===null?Mn||I0(s,e.type,e.stateNode):v_(s,n,e.memoizedProps)):n===null&&e.stateNode!==null&&mm(e,e.memoizedProps,i.memoizedProps);break;case 27:Qn(t,e,n),jn(e),a&512&&(we||i===null||Nn(i,i.return)),i!==null&&a&4&&mm(e,e.memoizedProps,i.memoizedProps);break;case 5:if(s=va,va=!1,Qn(t,e,n),va=s,jn(e),a&512&&(we||i===null||Nn(i,i.return)),e.flags&32){t=e.stateNode;try{Ho(t,""),_e=!0}catch(h){Ue(e,e.return,h)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,mm(e,t,i!==null?i.memoizedProps:t)),a&1024&&(xm=!0);break;case 6:if(Qn(t,e,n),jn(e),a&4){if(e.stateNode===null)throw Error(et(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,_e=!0}catch(h){Ue(e,e.return,h)}}break;case 3:if(_e=!1,Ch=null,s=$i,$i=Ic(t.containerInfo),Qn(t,e,n),$i=s,jn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Ko(t.containerInfo)}catch(h){Ue(e,e.return,h)}xm&&(xm=!1,LS(e)),_e=!1;break;case 4:a=va,va=Mn,i=ey(),s=$i,$i=Ic(e.stateNode.containerInfo),Qn(t,e,n),jn(e),$i=s,_e&&lc&&($h=!0),_e=i,va=a;break;case 12:Qn(t,e,n),jn(e);break;case 31:Qn(t,e,n),jn(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,lh(e,t)));break;case 13:Qn(t,e,n),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Mf=_i()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,lh(e,t)));break;case 22:s=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=Mn,l=we,c=va;Mn=o||s,va=c||s,we=l||r,Qn(t,e,n),we=l,va=c,Mn=o,jn(e),a&8192&&(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,!s||i===null||r||Mn||we||(t=r||we,n=Mn,i=we,Mn=s||Mn,we=t,Es(e,2),Mn=n,we=i),!s&&va||g0(e,s)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,lh(e,n))));break;case 19:Qn(t,e,n),jn(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,lh(e,t)));break;case 30:a&512&&(we||i===null||Nn(i,i.return)),a=ey(),s=lc,r=(n&335544064)===n,o=e.memoizedProps,lc=r&&as(o.default,o.update)!=="none",Qn(t,e,n),jn(e),r&&i!==null&&_e&&(e.flags|=4),lc=s,_e=a;break;case 21:break;case 7:a&512&&(we||i===null||Nn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Qn(t,e,n),jn(e)}}function jn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(_S(i)){n=i;break}i=i.return}i=null;for(var a=e.return;a!==null;){if(_g(a)){var s=a.stateNode;i===null?i=[s]:i.push(s)}if(yg(a))break;a=a.return}var r=i;if(n==null)throw Error(et(160));switch(n.tag){case 27:var o=n.stateNode,l=gm(e);Qh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(Ho(c,""),n.flags&=-33);var h=gm(e);Qh(e,h,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=gm(e);u0(e,u,p,r);break;default:throw Error(et(161))}}catch(d){Ue(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function LS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;LS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Jo=!0,t.reset(),Jo=!1),e=e.sibling}}function ho(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)IS(t,e),t=t.sibling;else ES(t,!1)}function IS(e,t){var n=e.alternate;if(n===null)h0(e,!1);else switch(e.tag){case 3:if(m0=ya=!1,Zy(),ho(t,e),!ya&&!$h){if(e=ba,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var a=e[i+1];ob(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),m0=!0}ba=null;break;case 5:ho(t,e);break;case 4:i=ya,ya=!1,ho(t,e),ya&&($h=!0),ya=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?h0(e,!1):ho(t,e));break;case 30:i=ya,a=Zy(),ya=!1,ho(t,e),ya&&(e.flags|=4);var s=e.memoizedProps,r=e.stateNode;t=ja(s,r),r=ja(n.memoizedProps,r);var o=as(s.default,s.update);o==="none"?t=!1:(s=n.memoizedState,n.memoizedState=null,n=e.child,ri=0,t=Sg(e,n,t,r,o,s,!0),ri!==(s===null?0:s.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(ko(e,e.memoizedProps.onUpdate),ba=a):a!==null&&(a.push.apply(a,ba),ba=a),ya=(e.flags&32)!==0?!0:i;break;default:ho(t,e)}}function _a(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)AS(e,t.alternate,t),t=t.sibling}function Es(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Zs(4,n,n.return),Es(n,i);break;case 1:Nn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&yS(n,n.return,a),Es(n,i);break;case 27:(i&2)!==0&&gb(n.stateNode,n.type,n.memoizedProps);case 5:Nn(n,n.return),n.tag!==5&&n.tag!==27||vc(n),Es(n,i);break;case 6:vc(n);break;case 26:Nn(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||we||a.parentNode.removeChild(a),Es(n,i);break;case 22:n.memoizedState===null&&Es(n,i);break;case 30:Nn(n,n.return),Es(n,i);break;case 7:Nn(n,n.return);default:Es(n,i)}e=e.sibling}}function ji(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags,o=(n&1)!==0;switch(s.tag){case 0:case 11:case 15:ji(a,s,n),qc(4,s);break;case 1:if(ji(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(h){Ue(i,i.return,h)}if(i=s,a=i.updateQueue,a!==null){var l=i.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)w1(c[a],l)}catch(h){Ue(i,i.return,h)}}o&&r&64&&vS(s),Sa(s,s.return);break;case 27:(n&2)!==0&&SS(s);case 5:s.tag!==5&&s.tag!==27||qy(s),ji(a,s,n),o&&i===null&&r&4&&c0(s),Sa(s,s.return);break;case 6:qy(s);break;case 26:l=s.stateNode,s.memoizedState!==null||l===null||Mn||I0(Ic(l.ownerDocument),s.type,l),ji(a,s,n),o&&i===null&&r&4&&c0(s),Sa(s,s.return);break;case 12:ji(a,s,n);break;case 31:ji(a,s,n),o&&r&4&&NS(a,s);break;case 13:ji(a,s,n),o&&r&4&&DS(a,s);break;case 22:s.memoizedState===null&&ji(a,s,n),Sa(s,s.return);break;case 30:ji(a,s,n),Sa(s,s.return);break;case 7:Sa(s,s.return);default:ji(a,s,n)}t=t.sibling}}function bg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Xc(n))}function Mg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xc(e))}function Oi(e,t,n,i){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;t!==null;)OS(e,t,n,i),t=t.sibling;else a&&TS(t)}function OS(e,t,n,i){var a=(n&335544064)===n;a&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Eh(t);var s=t.flags;switch(t.tag){case 0:case 11:case 15:Oi(e,t,n,i),s&2048&&qc(9,t);break;case 1:Oi(e,t,n,i);break;case 3:Oi(e,t,n,i),a&&m0&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),s&2048&&(s=null,t.alternate!==null&&(s=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==s&&(t.refCount++,s!=null&&Xc(s)));break;case 12:if(s&2048){Oi(e,t,n,i),s=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(c){Ue(t,t.return,c)}}else Oi(e,t,n,i);break;case 31:Oi(e,t,n,i);break;case 13:Oi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(a&&o!==null&&o.memoizedState===null&&Eh(o),r._visibility&2?Oi(e,t,n,i):yc(e,t)):(a&&o!==null&&o.memoizedState!==null&&Eh(t),r._visibility&2?Oi(e,t,n,i):(r._visibility|=2,po(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),s&2048&&bg(o,t);break;case 24:Oi(e,t,n,i),s&2048&&Mg(t.alternate,t);break;case 30:a&&(s=t.alternate,s!==null&&(Ca(s.child,!0),Ca(t.child,!0))),Oi(e,t,n,i);break;default:Oi(e,t,n,i)}}function po(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:po(s,r,o,l,a),qc(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?po(s,r,o,l,a):yc(s,r):(h._visibility|=2,po(s,r,o,l,a)),a&&c&2048&&bg(r.alternate,r);break;case 24:po(s,r,o,l,a),a&&c&2048&&Mg(r.alternate,r);break;default:po(s,r,o,l,a)}t=t.sibling}}function yc(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:yc(n,i),a&2048&&bg(i.alternate,i);break;case 24:yc(n,i),a&2048&&Mg(i.alternate,i);break;default:yc(n,i)}t=t.sibling}}var Sr=8192;function vr(e,t,n){if(e.subtreeFlags&Sr)for(e=e.child;e!==null;)PS(e,t,n),e=e.sibling}function PS(e,t,n){switch(e.tag){case 26:vr(e,t,n),e.flags&Sr&&(e.memoizedState!==null?g2(n,$i,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&S_(n,e)));break;case 5:vr(e,t,n),e.flags&Sr&&(e=e.stateNode,(t&335544128)===t&&S_(n,e));break;case 3:case 4:var i=$i;$i=Ic(e.stateNode.containerInfo),vr(e,t,n),$i=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Sr,Sr=16777216,vr(e,t,n),Sr=i):vr(e,t,n));break;case 30:if((e.flags&Sr)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var a=e.stateNode;a.paired=null,vi===null&&(vi=new Map),vi.set(i,a)}vr(e,t,n);break;default:vr(e,t,n)}}function zS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ec(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Tn=i,FS(i,e)}zS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)BS(e),e=e.sibling}function BS(e){switch(e.tag){case 0:case 11:case 15:ec(e),e.flags&2048&&Zs(9,e,e.return);break;case 3:ec(e);break;case 12:ec(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ah(e)):ec(e);break;default:ec(e)}}function Ah(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Tn=i,FS(i,e)}zS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zs(8,t,t.return),Ah(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ah(t));break;default:Ah(t)}e=e.sibling}}function FS(e,t){for(;Tn!==null;){var n=Tn;switch(n.tag){case 0:case 11:case 15:Zs(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Xc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Tn=i;else t:for(n=e;Tn!==null;){i=Tn;var a=i.sibling,s=i.return;if(RS(i),i===n){Tn=null;break t}if(a!==null){a.return=s,Tn=a;break t}Tn=s}}}var dw={getCacheForType:function(e){var t=Un(fn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Un(fn).controller.signal}},pw=typeof WeakMap=="function"?WeakMap:Map,Me=0,Be=null,ue=null,he=0,Ne=0,mi=null,Us=!1,el=!1,Tg=!1,ns=0,sn=0,Js=0,Rr=0,tf=0,yi=0,Vo=0,_c=null,si=null,v0=!1,Mf=0,HS=0,ef=1/0,nf=null,Gs=null,en=0,ea=null,Pr=null,Ra=0,y0=0,_0=null,GS=null,Oo=null,Po=null,zo=null,Sc=0,wh=null;function Mi(){return(Me&2)!==0&&he!==0?he&-he:Gt.T!==null?Ag():W_()}function VS(){if(yi===0)if((he&536870912)===0||ae){var e=Ju;Ju<<=1,(Ju&3932160)===0&&(Ju=262144),yi=e}else yi=536870912;return e=Pn.current,e!==null&&(e.flags|=32),yi}function ko(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=cb(ja(e.memoizedProps,n))),Po===null&&(Po=[]),Po.push(t.bind(null,i))}}function li(e,t,n){(e===Be&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(Xo(e,0),Ls(e,he,yi,!1)),Gc(e,n),((Me&2)===0||e!==Be)&&(e===Be&&((Me&2)===0&&(Rr|=n),sn===4&&Ls(e,he,yi,!1)),Da(e))}function kS(e,t,n){if((Me&6)!==0)throw Error(et(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Hc(e,t),a=i?xw(e,t):vm(e,t,!0),s=i;do{if(a===0){el&&!i&&Ls(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!mw(n)){a=vm(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=_c;var l=o.current.memoizedState.isDehydrated;if(l&&(Xo(o,r).flags|=256),r=vm(o,r,!1),r!==2&&r!==6){if(Tg&&!l){o.errorRecoveryDisabledLanes|=s,Rr|=s,a=4;break t}s=si,si=a,s!==null&&(si===null?si=s:si.push.apply(si,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Xo(e,0),Ls(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(et(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ls(i,t,yi,!Us);break t;case 2:si=null;break;case 3:case 5:break;default:throw Error(et(329))}if((t&62914560)===t&&(a=Mf+300-_i(),10<a)){if(Ls(i,t,yi,!Us),cf(i,0,!0)!==0)break t;Ra=t,i.timeoutHandle=Rg(Ky.bind(null,i,n,si,nf,v0,t,yi,Rr,Vo,Us,s,"Throttled",-0,0),a);break t}Ky(i,n,si,nf,v0,t,yi,Rr,Vo,Us,s,null,-0,0)}}break}while(!0);Da(e)}function Ky(e,t,n,i,a,s,r,o,l,c,h,p,u,d){e.timeoutHandle=-1;var x=t.subtreeFlags,S=(s&335544064)===s;if(p=null,(S||x&8192||(x&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ta},vi=null,PS(t,s,p),S&&(x=p,S=e.containerInfo,S=(S.nodeType===9?S:S.ownerDocument).__reactViewTransition,S!=null&&(x.count++,x.waitingForViewTransition=!0,x=Oc.bind(x),S.finished.then(x,x))),x=(s&62914560)===s?Mf-_i():(s&4194048)===s?HS-_i():0,x=x2(p,x),x!==null)){Ra=s,e.cancelPendingCommit=x(jy.bind(null,e,t,s,n,i,a,r,o,l,c,h,p,null,u,d)),Ls(e,s,r,!c);return}jy(e,t,s,n,i,a,r,o,l,c,h,p)}function mw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Ti(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ls(e,t,n,i){t=H_(e,t),t&=~tf,t&=~Rr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-bi(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&V_(e,n,t)}function Tf(){return(Me&6)===0?(Yc(0,!1),!1):!0}function Eg(){if(ue!==null){if(Ne===0)var e=ue.return;else e=ue,Za=Gr=null,lg(e),Uo=null,Rc=0,e=ue;for(;e!==null;)xS(e.alternate,e),e=e.return;ue=null}}function Xo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,zw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ra=0,Eg(),Be=e,ue=n=Ja(e.current,null),he=t,Ne=0,mi=null,Us=!1,el=Hc(e,t),Tg=!1,Vo=yi=tf=Rr=Js=sn=0,si=_c=null,v0=!1,ns=H_(e,t),pf(),n}function XS(e,t){Qt=null,Gt.H=Zh,t===$o||t===xf?(t=My(),Ne=3):t===tg?(t=My(),Ne=4):Ne=t===gg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mi=t,ue===null&&(sn=1,Jh(e,Hi(t,e.current)))}function WS(){var e=Pn.current;return e===null?!0:(he&4194048)===he?Xn===null:(he&62914560)===he||(he&536870912)!==0?e===Xn:!1}function qS(){var e=Gt.H;return Gt.H=Zh,e===null?Zh:e}function YS(){var e=Gt.A;return Gt.A=dw,e}function af(){sn=4,Us||(he&4194048)!==he&&Pn.current!==null||(el=!0),(Js&134217727)===0&&(Rr&134217727)===0||Be===null||Ls(Be,he,yi,!1)}function vm(e,t,n){var i=Me;Me|=2;var a=qS(),s=YS();(Be!==e||he!==t)&&(nf=null,Xo(e,t)),t=!1;var r=sn;t:do try{if(Ne!==0&&ue!==null){var o=ue,l=mi;switch(Ne){case 8:Eg(),r=6;break t;case 3:case 2:case 9:case 6:Pn.current===null&&(t=!0);var c=Ne;if(Ne=0,mi=null,wo(e,o,l,c),n&&el){r=0;break t}break;default:c=Ne,Ne=0,mi=null,wo(e,o,l,c)}}gw(),r=sn;break}catch(h){XS(e,h)}while(!0);return t&&e.shellSuspendCounter++,Za=Gr=null,Me=i,Gt.H=a,Gt.A=s,ue===null&&(Be=null,he=0,pf()),r}function gw(){for(;ue!==null;)ZS(ue)}function xw(e,t){var n=Me;Me|=2;var i=qS(),a=YS();Be!==e||he!==t?(nf=null,ef=_i()+500,Xo(e,t)):el=Hc(e,t);t:do try{if(Ne!==0&&ue!==null){t=ue;var s=mi;e:switch(Ne){case 1:Ne=0,mi=null,wo(e,t,s,1);break;case 2:case 9:if(by(s)){Ne=0,mi=null,Qy(t);break}t=function(){Ne!==2&&Ne!==9||Be!==e||(Ne=7),Da(e)},s.then(t,t);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:by(s)?(Ne=0,mi=null,Qy(t)):(Ne=0,mi=null,wo(e,t,s,7));break;case 5:var r=null;switch(ue.tag){case 26:r=ue.memoizedState;case 5:case 27:var o=ue;if(r?yb(r):o.stateNode.complete){Ne=0,mi=null;var l=o.sibling;if(l!==null)ue=l;else{var c=o.return;c!==null?(ue=c,Ef(c)):ue=null}break e}}Ne=0,mi=null,wo(e,t,s,5);break;case 6:Ne=0,mi=null,wo(e,t,s,6);break;case 8:Eg(),sn=6;break t;default:throw Error(et(462))}}vw();break}catch(h){XS(e,h)}while(!0);return Za=Gr=null,Gt.H=i,Gt.A=a,Me=n,ue!==null?0:(Be=null,he=0,pf(),sn)}function vw(){for(;ue!==null&&!OE();)ZS(ue)}function ZS(e){var t=gS(e.alternate,e,ns);e.memoizedProps=e.pendingProps,t===null?Ef(e):ue=t}function Qy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Fy(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Fy(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:lg(t);var i=t;i===An&&(ae?(Gh(i),i.tag===5&&i.stateNode!=null&&(ke=i.stateNode)):(Gh(i),ae=!0));default:xS(n,t),t=ue=v1(t,ns),t=gS(n,t,ns)}e.memoizedProps=e.pendingProps,t===null?Ef(e):ue=t}function wo(e,t,n,i){Za=Gr=null,lg(t),Uo=null,Rc=0;var a=t.return;try{if(sw(e,a,t,n,he)){sn=1,Jh(e,Hi(n,e.current)),ue=null;return}}catch(s){if(a!==null)throw ue=a,s;sn=1,Jh(e,Hi(n,e.current)),ue=null;return}t.flags&32768?(ae||i===1?e=!0:el||(he&536870912)!==0?e=!1:(Us=e=!0,(i===2||i===9||i===3||i===6)&&(i=Pn.current,i!==null&&i.tag===13&&(i.flags|=16384))),JS(t,e)):Ef(t)}function Ef(e){var t=e;do{if((t.flags&32768)!==0){JS(t,Us);return}e=t.return;var n=cw(t.alternate,t,ns);if(n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);sn===0&&(sn=5)}function JS(e,t){do{var n=uw(e.alternate,e);if(n!==null){n.flags&=32767,ue=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=n}while(e!==null);sn=6,ue=null}function jy(e,t,n,i,a,s,r,o,l,c,h,p){e.cancelPendingCommit=null;do Af();while(en!==0);if((Me&6)!==0)throw Error(et(327));if(t!==null){if(t===e.current)throw Error(et(177));e===Be&&(ue=Be=null,he=0),Pr=t,ea=e,Ra=n,_0=a,GS=i,yw(e,t,n,r,o,l,p)}}function yw(e,t,n,i,a,s,r){var o=t.lanes|t.childLanes;if(y0=o,o|=Z0,WE(e,n,o,i,a,s),Po=null,(n&335544064)===n?(zo=YA(e),i=10262):(zo=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,Ew(Ph,function(){return T0(),null})):(e.callbackNode=null,e.callbackPriority=0),jh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Gt.T,Gt.T=null,a=Te.p,Te.p=2,s=Me,Me|=4;try{hw(e,t,n)}finally{Me=s,Te.p=a,Gt.T=i}}en=1,jh?Oo=kw(r,e.containerInfo,zo,S0,b0,Sw,M0,T0,_w,null,null):(S0(),b0(),M0())}function _w(e){if(en!==0){var t=ea.onRecoverableError;t(e,{componentStack:null})}}function Sw(){en===3&&(en=0,IS(Pr,ea),en=4)}function S0(){if(en===1){en=0;var e=ea,t=Pr,n=Ra,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Gt.T,Gt.T=null;var a=Te.p;Te.p=2;var s=Me;Me|=4;try{lc=$h=!1,US(t,e,n),n=R0;var r=u1(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&c1(o.ownerDocument.documentElement,o)){if(l!==null&&Y0(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),x=o.textContent.length,S=Math.min(l.start,x),g=l.end===void 0?S:Math.min(l.end,x);!d.extend&&S>g&&(r=g,g=S,S=r);var f=py(o,S),m=py(o,g);if(f&&m&&(d.rangeCount!==1||d.anchorNode!==f.node||d.anchorOffset!==f.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var b=p.createRange();b.setStart(f.node,f.offset),d.removeAllRanges(),S>g?(d.addRange(b),d.extend(m.node,m.offset)):(b.setEnd(m.node,m.offset),d.addRange(b))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var v=p[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Jo=!!w0,R0=w0=null}finally{Me=s,Te.p=a,Gt.T=i}}e.current=t,en=2}}function b0(){if(en===2){en=0;var e=ea,t=Pr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Gt.T,Gt.T=null;var i=Te.p;Te.p=2;var a=Me;Me|=4;try{AS(e,t.alternate,t)}finally{Me=a,Te.p=i,Gt.T=n}}en=3}}function M0(){if(en===4||en===3){en=0;var e=Oo;Oo=null,PE();var t=ea,n=Pr,i=Ra,a=GS,s=(i&335544064)===i?10262:10256;if((n.subtreeFlags&s)!==0||(n.flags&s)!==0?en=5:(en=0,Pr=ea=null,KS(t,t.pendingLanes)),s=t.pendingLanes,s===0&&(Gs=null),G0(i),n=n.stateNode,Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(Fc,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=Gt.T,s=Te.p,Te.p=2,Gt.T=null;try{for(var r=t.onRecoverableError,o=0;o<a.length;o++){var l=a[o];r(l.value,{componentStack:l.stack})}}finally{Gt.T=n,Te.p=s}}if(a=Po,r=zo,zo=null,a!==null&&(Po=null,r===null&&(r=[]),e!==null))for(l=0;l<a.length;l++)n=(0,a[l])(r),n!==void 0&&e.finished.finally(n);(Ra&3)!==0&&Af(),Da(t),s=t.pendingLanes,(i&261930)!==0&&(s&42)!==0?t===wh?Sc++:(Sc=0,wh=t):(Sc=0,wh=null),Yc(0,!1)}}function KS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Xc(t)))}function Af(){return Oo!==null&&(Oo.skipTransition(),Oo=null),S0(),b0(),M0(),T0()}function T0(){if(en!==5)return!1;var e=ea,t=y0;y0=0;var n=G0(Ra),i=Gt.T,a=Te.p;try{Te.p=32>n?32:n,Gt.T=null,n=_0,_0=null;var s=ea,r=Ra;if(en=0,Pr=ea=null,Ra=0,(Me&6)!==0)throw Error(et(331));var o=Me;if(Me|=4,BS(s.current),OS(s,s.current,r,n),Me=o,Yc(0,!1),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(Fc,s)}catch{}return!0}finally{Te.p=a,Gt.T=i,KS(e,t)}}function $y(e,t,n){t=Hi(n,t),t=i0(e.stateNode,t,2),e=Bs(e,t,2),e!==null&&(Gc(e,2),Da(e))}function Ue(e,t,n){if(e.tag===3)$y(e,e,n);else for(;t!==null;){if(t.tag===3){$y(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gs===null||!Gs.has(i))){e=Hi(n,e),n=hS(2),i=Bs(t,n,2),i!==null&&(fS(n,i,t,e),Gc(i,2),Da(i));break}}t=t.return}}function ym(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new pw;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Tg=!0,a.add(n),e=bw.bind(null,e,t,n),t.then(e,e))}function bw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Be===e&&(he&n)===n&&((sn===4||sn===3&&(he&62914560)===he&&300>_i()-Mf)&&(Me&2)===0?Xo(e,0):tf|=n,Vo===he&&(Vo=0)),Da(e)}function QS(e,t){t===0&&(t=G_()),e=Hr(e,t),e!==null&&(Gc(e,t),Da(e))}function Mw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),QS(e,n)}function Tw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(et(314))}i!==null&&i.delete(t),QS(e,n)}function Ew(e,t){return F0(e,t)}var Wo=null,mo=null,E0=!1,sf=!1,_m=!1,Is=0;function Da(e){e!==mo&&e.next===null&&(mo===null?Wo=mo=e:mo=mo.next=e),sf=!0,E0||(E0=!0,ww())}function Yc(e,t){if(!_m&&sf){_m=!0;do for(var n=!1,i=Wo;i!==null;){if(!t)if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-bi(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,t_(i,s))}else s=he,s=cf(i,i===Be?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Hc(i,s)||(n=!0,t_(i,s));i=i.next}while(n);_m=!1}}function Aw(){jS()}function jS(){sf=E0=!1;var e=0;Is!==0&&Pw()&&(e=Is);for(var t=_i(),n=null,i=Wo;i!==null;){var a=i.next,s=$S(i,t);s===0?(i.next=null,n===null?Wo=a:n.next=a,a===null&&(mo=n)):(n=i,(e!==0||(s&3)!==0)&&(sf=!0)),i=a}en!==0&&en!==5||Yc(e,!1),Is!==0&&(Is=0)}function $S(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-bi(s),o=1<<r,l=a[r];l===-1?((o&n)===0||(o&i)!==0)&&(a[r]=XE(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=Be,n=he,n=cf(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&jp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Hc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&jp(i),G0(n)){case 2:case 8:n=B_;break;case 32:n=Ph;break;case 268435456:n=F_;break;default:n=Ph}return i=tb.bind(null,e),n=F0(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&jp(i),e.callbackPriority=2,e.callbackNode=null,2}function tb(e,t){if(en!==0&&en!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Af()&&e.callbackNode!==n)return null;var i=he;return i=cf(e,e===Be?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(kS(e,i,t),$S(e,_i()),e.callbackNode!=null&&e.callbackNode===n?tb.bind(null,e):null)}function t_(e,t){if(Af())return null;kS(e,t,!0)}function ww(){Bw(function(){(Me&6)!==0?F0(z_,Aw):jS()})}function Ag(){if(Is===0){var e=Ur;e===0&&(e=Zu,Zu<<=1,(Zu&261888)===0&&(Zu=256)),Is=e}return Is}function e_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:mh(e)}function Rw(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=e_((a[ui]||null).action),r=i.submitter;r&&(t=(t=r[ui]||null)?e_(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new hf("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Is!==0){var l=new FormData(a,r);e0(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=new FormData(a,r),e0(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(ch=0;ch<Xm.length;ch++)uh=Xm[ch],n_=uh.toLowerCase(),i_=uh[0].toUpperCase()+uh.slice(1),na(n_,"on"+i_);var uh,n_,i_,ch;na(f1,"onAnimationEnd");na(d1,"onAnimationIteration");na(p1,"onAnimationStart");na("dblclick","onDoubleClick");na("focusin","onFocus");na("focusout","onBlur");na(FA,"onTransitionRun");na(HA,"onTransitionStart");na(GA,"onTransitionCancel");na(m1,"onTransitionEnd");Fo("onMouseEnter",["mouseout","mouseover"]);Fo("onMouseLeave",["mouseout","mouseover"]);Fo("onPointerEnter",["pointerout","pointerover"]);Fo("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dc));function eb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){Bh(h)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){Bh(h)}a.currentTarget=null,s=l}}}}function ce(e,t){var n=t[Qv];n===void 0&&(n=t[Qv]=new Set);var i=e+"__bubble";n.has(i)||(nb(t,e,2,!1),n.add(i))}function Sm(e,t,n){var i=0;t&&(i|=4),nb(n,e,i,t)}var hh="_reactListening"+Math.random().toString(36).slice(2);function wg(e){if(!e[hh]){e[hh]=!0,Y_.forEach(function(n){n!=="selectionchange"&&(Cw.has(n)||Sm(n,!1,e),Sm(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hh]||(t[hh]=!0,Sm("selectionchange",!1,t))}}function nb(e,t,n,i){switch(Ab(t)){case 2:var a=S2;break;case 8:a=b2;break;default:a=Ig}n=a.bind(null,t,n,e),a=void 0,!Hm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function bm(e,t,n,i,a){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=br(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}e1(function(){var c=s,h=k0(n),p=[];t:{var u=g1.get(e);if(u!==void 0){var d=hf,x=e;switch(e){case"keypress":if(xh(n)===0)break t;case"keydown":case"keyup":d=mA;break;case"focusin":x="focus",d=am;break;case"focusout":x="blur",d=am;break;case"beforeblur":case"afterblur":d=am;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=sy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=iA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=_A;break;case f1:case d1:case p1:d=rA;break;case m1:d=bA;break;case"scroll":case"scrollend":d=eA;break;case"wheel":d=TA;break;case"copy":case"cut":case"paste":d=lA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=oy;break;case"submit":d=vA;break;case"toggle":case"beforetoggle":d=AA}var S=(t&4)!==0,g=!S&&(e==="scroll"||e==="scrollend"),f=S?u!==null?u+"Capture":null:u;S=[];for(var m=c,b;m!==null;){var v=m;if(b=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||b===null||f===null||(v=Mc(m,f),v!=null&&S.push(Uc(m,v,b))),g)break;m=m.return}0<S.length&&(u=new d(u,x,null,n,h),p.push({event:u,listeners:S}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==Fm&&(x=n.relatedTarget||n.fromElement)&&(br(x)||x[Qo]))break t;(u||d)&&(x=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?br(d):null,d!==null&&(g=Bc(d),S=d.tag,d!==g||S!==5&&S!==27&&S!==6)&&(d=null)):(u=null,d=c),u!==d&&(S=sy,v="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(S=oy,v="onPointerLeave",f="onPointerEnter",m="pointer"),g=u==null?x:rc(u),b=d==null?x:rc(d),x=new S(v,m+"leave",u,n,h),x.target=g,x.relatedTarget=b,v=null,br(h)===c&&(S=new S(f,m+"enter",d,n,h),S.target=b,S.relatedTarget=g,v=S),g=v,S=u&&d?wm(u,d,Nw):null,u!==null&&a_(p,x,u,S,!1),d!==null&&g!==null&&a_(p,g,d,S,!0)))}t:{if(u=c?rc(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var T=hy;else if(uy(u))if(o1)T=PA;else{T=IA;var E=LA}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&V0(c.elementType)&&(T=hy):T=OA;if(T&&(T=T(e,c))){r1(p,T,n,h);break t}E&&E(e,u,c)}switch(E=c?rc(c):window,e){case"focusin":(uy(E)||E.contentEditable==="true")&&(So=E,Vm=c,hc=null);break;case"focusout":hc=Vm=So=null;break;case"mousedown":km=!0;break;case"contextmenu":case"mouseup":case"dragend":km=!1,my(p,n,h);break;case"selectionchange":if(BA)break;case"keydown":case"keyup":my(p,n,h)}var w;if(q0)t:{switch(e){case"compositionstart":var y="onCompositionStart";break t;case"compositionend":y="onCompositionEnd";break t;case"compositionupdate":y="onCompositionUpdate";break t}y=void 0}else _o?a1(e,n)&&(y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(i1&&n.locale!=="ko"&&(_o||y!=="onCompositionStart"?y==="onCompositionEnd"&&_o&&(w=n1()):(Ns=h,X0="value"in Ns?Ns.value:Ns.textContent,_o=!0)),E=rf(c,y),0<E.length&&(y=new ry(y,e,null,n,h),p.push({event:y,listeners:E}),w?y.data=w:(w=s1(n),w!==null&&(y.data=w)))),(w=RA?CA(e,n):NA(e,n))&&(y=rf(c,"onBeforeInput"),0<y.length&&(E=new ry("onBeforeInput","beforeinput",null,n,h),p.push({event:E,listeners:y}),E.data=w)),Rw(p,e,c,n,h)}eb(p,t)})}function Uc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rf(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Mc(e,n),a!=null&&i.unshift(Uc(e,a,s)),a=Mc(e,t),a!=null&&i.push(Uc(e,a,s))),e.tag===3)return i;e=e.return}return[]}function Nw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function a_(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Mc(n,s),c!=null&&r.unshift(Uc(n,c,l))):a||(c=Mc(n,s),c!=null&&r.push(Uc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Dw=/\r\n?/g,Uw=/\u0000|\uFFFD/g;function s_(e){return(typeof e=="string"?e:""+e).replace(Dw,`
`).replace(Uw,"")}function ib(e,t){return t=s_(t),s_(e)===t}function De(e,t,n,i,a,s){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Ho(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Ho(e,""+i);else return;break;case"className":Qu(e,"class",i);break;case"tabIndex":Qu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Qu(e,n,i);break;case"style":t1(e,i,s);return;case"data":if(t!=="object"){Qu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=mh(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&De(e,t,"name",a.name,a,null),De(e,t,"formEncType",a.formEncType,a,null),De(e,t,"formMethod",a.formMethod,a,null),De(e,t,"formTarget",a.formTarget,a,null)):(De(e,t,"encType",a.encType,a,null),De(e,t,"method",a.method,a,null),De(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=mh(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ta);return;case"onScroll":i!=null&&ce("scroll",e);return;case"onScrollEnd":i!=null&&ce("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(et(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=mh(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ce("beforetoggle",e),ce("toggle",e),ph(e,"popover",i);break;case"xlinkActuate":Wa(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Wa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Wa(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Wa(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Wa(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Wa(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Wa(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Wa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Wa(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ph(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=$E.get(n)||n,ph(e,n,i);else return}_e=!0}function A0(e,t,n,i,a,s){switch(n){case"style":t1(e,i,s);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(et(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Ho(e,i);else if(typeof i=="number"||typeof i=="bigint")Ho(e,""+i);else return;break;case"onScroll":i!=null&&ce("scroll",e);return;case"onScrollEnd":i!=null&&ce("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Ta);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Z_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),s=n.slice(2,a?n.length-7:void 0),t=e[ui]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(s,t,a),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(s,i,a);break t}_e=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):ph(e,n,i)}return}_e=!0}function On(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:De(e,t,s,r,n,null)}}a&&De(e,t,"srcSet",n.srcSet,n,null),i&&De(e,t,"src",n.src,n,null);return;case"input":ce("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(et(137,t));break;default:De(e,t,i,h,n,null)}}Q_(e,s,o,l,c,r,a,!1);return;case"select":ce("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:De(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?Co(e,!!i,t,!1):n!=null&&Co(e,!!i,n,!0);return;case"textarea":ce("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(et(91));break;default:De(e,t,r,o,n,null)}$_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:De(e,t,l,i,n,null)}return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(i=0;i<Dc.length;i++)ce(Dc[i],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:De(e,t,c,i,n,null)}return;default:if(V0(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&A0(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&De(e,t,o,i,n,null))}var Lw={};function Iw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,h=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||De(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(_e=!0),s=d;break;case"name":d!==p&&(_e=!0),a=d;break;case"checked":d!==p&&(_e=!0),c=d;break;case"defaultChecked":d!==p&&(_e=!0),h=d;break;case"value":d!==p&&(_e=!0),r=d;break;case"defaultValue":d!==p&&(_e=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(et(137,t));break;default:d!==p&&De(e,t,u,d,i,p)}}Bm(e,r,o,l,c,h,s,a);return;case"select":d=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(s)||De(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":s!==l&&(_e=!0),u=s;break;case"defaultValue":s!==l&&(_e=!0),o=s;break;case"multiple":s!==l&&(_e=!0),r=s;default:s!==l&&De(e,t,a,s,i,l)}t=o,n=r,i=d,u!=null?Co(e,!!n,u,!1):!!i!=!!n&&(t!=null?Co(e,!!n,t,!0):Co(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:De(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":a!==s&&(_e=!0),u=a;break;case"defaultValue":a!==s&&(_e=!0),d=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(et(91));break;default:a!==s&&De(e,t,r,a,i,s)}j_(e,u,d);return;case"option":for(var x in n)if(u=n[x],n.hasOwnProperty(x)&&u!=null&&!i.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:De(e,t,x,null,i,u)}for(l in i)if(u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null))switch(l){case"selected":u!==d&&(_e=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:De(e,t,l,u,i,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)u=n[S],n.hasOwnProperty(S)&&u!=null&&!i.hasOwnProperty(S)&&De(e,t,S,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(et(137,t));break;default:De(e,t,c,u,i,d)}return;default:if(V0(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&A0(e,t,g,void 0,i,u);for(h in i)u=i[h],d=n[h],!i.hasOwnProperty(h)||u===d||u===void 0&&d===void 0||A0(e,t,h,u,i,d);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&De(e,t,f,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||De(e,t,p,u,i,d)}function r_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ow(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&r_(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&r_(p)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var w0=null,R0=null;function Lc(e){return e.nodeType===9?e:e.ownerDocument}function o_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ab(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function sb(e,t,n,i){return n=Lc(n).createElement(e),n[Dn]=i,n[ui]=t,On(n,e,t),En(n),n}function C0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mm=null;function Pw(){var e=window.event;return e&&e.type==="popstate"?e===Mm?!1:(Mm=e,!0):(Mm=null,!1)}var Rg=typeof setTimeout=="function"?setTimeout:void 0,zw=typeof clearTimeout=="function"?clearTimeout:void 0,l_=typeof Promise=="function"?Promise:void 0,c_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Rg,Bw=typeof queueMicrotask=="function"?queueMicrotask:typeof l_<"u"?function(e){return l_.resolve(null).then(e).catch(Fw)}:Rg;function Fw(e){setTimeout(function(){throw e})}function Qs(e){return e==="head"}function u_(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Ko(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Em(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Em(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Vc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Em(e.ownerDocument.body);n=a}while(n);Ko(t)}function h_(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function rb(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var a=i=0;a<t.length;a++){var s=t[a];0<s.width&&0<s.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function ob(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function lb(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function N0(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return lb(t,n,e)}function Hw(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return lb(t,n,e)}function Gw(e){return e.documentElement.clientHeight}function Vw(e){this.addEventListener("load",e),this.addEventListener("error",e)}function kw(e,t,n,i,a,s,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,x=c.fonts.status;i();var S=[];if(x==="loaded"&&(Gw(c),c.fonts.status==="loading"&&S.push(c.fonts.ready)),x=S.length,e!==null)for(var g=e.suspenseyImages,f=0,m=0;m<g.length;m++){var b=g[m];if(!b.complete){var v=b.getBoundingClientRect();if(0<v.bottom&&0<v.right&&v.top<u.innerHeight&&v.left<u.innerWidth){if(f+=_b(b),f>Nh){S.length=x;break}b=new Promise(Vw.bind(b)),S.push(b)}}}if(0<S.length)return u=Promise.race([Promise.all(S),new Promise(function(T){return setTimeout(T,500)})]).then(a,a),(d?Promise.allSettled([d.finished,u]):u).then(s,s);if(a(),d)return d.finished.then(s,s);s()},types:n});c.__reactViewTransition=h;var p=[];return h.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var x=u[d],S=x.effect,g=S.pseudoElement;if(g!=null&&g.startsWith("::view-transition")){p.push(x),x=S.getKeyframes();for(var f=g=void 0,m=!0,b=0;b<x.length;b++){var v=x[b],T=v.width;if(g===void 0)g=T;else if(g!==T){m=!1;break}if(T=v.height,f===void 0)f=T;else if(f!==T){m=!1;break}delete v.width,delete v.height,v.transform==="none"&&delete v.transform}m&&g!==void 0&&f!==void 0&&(S.setKeyframes(x),m=getComputedStyle(S.target,S.pseudoElement),m.width!==g||m.height!==f)&&(m=x[0],m.width=g,m.height=f,m=x[x.length-1],m.width=g,m.height=f,S.setKeyframes(x))}}r()},function(u){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{if(typeof u=="object"&&u!==null)switch(u.name){case"InvalidStateError":(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null)}u!==null&&l(u)}finally{i(),a(),r()}}),h.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),a(),r(),null}}function Mr(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Mr.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Fe({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Mr.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var s=n[a].effect;s!==null&&s.target===e&&s.pseudoElement===t&&i.push(n[a])}return i};Mr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function cb(e){return{name:e,group:new Mr("group",e),imagePair:new Mr("image-pair",e),old:new Mr("old",e),new:new Mr("new",e)}}function Ei(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Ei.prototype.addEventListener=function(e,t,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if(ub(s,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(a=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=qo(n),s.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),ci(this._fragmentFiber.child,!1,Xw,e,o,i)}this._eventListeners=s}};function Xw(e,t,n,i){return xn(e).addEventListener(t,n,i),!1}Ei.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=ub(i,e,t,n),t!==-1)){var a=i[t];n=a.attachedListener;var s=a.cleanup;a=qo(a.optionsOrUseCapture),ci(this._fragmentFiber.child,!1,Ww,e,n,a),i.splice(t,1),s!==null&&s()}};function Ww(e,t,n,i){return xn(e).removeEventListener(t,n,i),!1}function qo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function f_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function ub(e,t,n,i){if(e.length===0)return-1;i=f_(i);for(var a=0;a<e.length;a++){var s=e[a];if(s.type===t&&s.listener===n&&f_(s.optionsOrUseCapture)===i)return a}return-1}Ei.prototype.dispatchEvent=function(e){var t=zr(this._fragmentFiber);if(t===null)return!0;t=xn(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var s=n[a];i.addEventListener(s.type,s.attachedListener,qo(s.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(a=0;a<n.length;a++)s=n[a],i.removeEventListener(s.type,s.attachedListener,qo(s.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};Ei.prototype.focus=function(e){ci(this._fragmentFiber.child,!0,hb,e,void 0,void 0)};function hb(e,t){return e.tag===6?!1:(e=xn(e),i2(e,t))}Ei.prototype.focusLast=function(e){var t=[];ci(this._fragmentFiber.child,!0,Cg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!hb(t[n],e);n--);};function Cg(e,t){return t.push(e),!1}Ei.prototype.blur=function(){var e=zr(this._fragmentFiber);e!==null&&(e=xn(e),e=Lc(e).activeElement,e!==null&&ci(this._fragmentFiber.child,!1,qw,e,void 0,void 0))};function qw(e,t){return e.tag===6?!1:(e=xn(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Ei.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),ci(this._fragmentFiber.child,!1,Yw,e,void 0,void 0)};function Yw(e,t){return e.tag===6||(e=xn(e),t.observe(e)),!1}Ei.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),ci(this._fragmentFiber.child,!1,Zw,e,void 0,void 0);for(var n=t=0;n<ta.length;n++){var i=ta[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):ta[t++]=i}ta.length=t}};function Zw(e,t){return e.tag===6||(e=xn(e),t.unobserve(e)),!1}var ta=[],Tm=!1;function Jw(e,t,n){ta.push({fragmentInstance:e,observer:t,instance:n}),Tm||(Tm=!0,a2(function(){Tm=!1;var i=ta;ta=[];for(var a=0;a<i.length;a++){var s=i[a];s.observer.unobserve(s.instance)}}))}Ei.prototype.getClientRects=function(){var e=[];return ci(this._fragmentFiber.child,!1,Kw,e,void 0,void 0),e};function Kw(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=xn(e),t.push.apply(t,e.getClientRects());return!1}Ei.prototype.getRootNode=function(e){var t=zr(this._fragmentFiber);return t===null?this:xn(t).getRootNode(e)};Ei.prototype.compareDocumentPosition=function(e){var t=zr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];ci(this._fragmentFiber.child,!1,Cg,n,void 0,void 0);var i=xn(t);if(n.length===0){if(n=i,Wv(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var a=i=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=L_(t)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(e=xn(n).compareDocumentPosition(e),a=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=xn(n[0]),a=xn(n[n.length-1]);var s=Wv(this._fragmentFiber)?t.parentElement:i;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=s.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=a.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&s&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||s&&a===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!s&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Qw(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Qw(e,t,n,i,a){var s=br(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!s)t:{for(;s!==null;){if(s.tag===7&&(s===t||s.alternate===t)){n=!0;break t}s=s.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=a.ownerDocument,a===s||a===s.documentElement||a===s.body;t:{for(s=t,t=zr(t);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==t&&s.alternate!==t)){s=!0;break t}s=s.return}s=!1}return s}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!s)&&!(t=s===n)&&(t=wm(n,s,qv),t===null?t=!1:(ci(t,!0,wE,s,n),s=go,go=null,t=s!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!s)&&!(t=s===i)&&(t=wm(i,s,qv),t===null?t=!1:(ci(t,!0,RE,s,i),s=go,Am=go=null,t=s!==null)),t):!1}function d_(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Ei.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(et(566));var t=[];ci(this._fragmentFiber.child,!1,Cg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=L_(this._fragmentFiber);if(i=n?i[1]||i[0]||zr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=xn(i),d_(e,n);return}if(i=xn(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var a=t[i];a.tag===6?(a=xn(a),d_(a,n)):xn(a).scrollIntoView(e),i+=n?-1:1}};function jw(e,t){return e=xn(e),fb(e,t),!1}function fb(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function db(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.addEventListener(a.type,a.attachedListener,qo(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){for(var r=0,o=0;o<ta.length;o++){var l=ta[o];(l.fragmentInstance!==t||l.observer!==s||l.instance!==e)&&(ta[r++]=l)}ta.length=r,s.observe(e)}),fb(e,t))}function $w(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.removeEventListener(a.type,a.attachedListener,qo(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){typeof s.rootMargin=="string"?Jw(t,s,e):s.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function D0(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":D0(n),uf(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function t2(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Vc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Vi(e.nextSibling),e===null)break}return null}function e2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vi(e.nextSibling),e===null))return null;return e}function pb(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vi(e.nextSibling),e===null))return null;return e}function U0(e){return e.data==="$?"||e.data==="$~"}function Ng(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function n2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Vi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var L0=null;function p_(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Vi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function m_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function i2(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function a2(e){c_(function(){c_(function(t){return e(t)})})}function mb(e,t,n){switch(t=Lc(n),e){case"html":if(e=t.documentElement,!e)throw Error(et(452));return e;case"head":if(e=t.head,!e)throw Error(et(453));return e;case"body":if(e=t.body,!e)throw Error(et(454));return e;default:throw Error(et(451))}}function gb(e,t,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&De(e,t,i,null,Lw,a)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Ta&&(e.onclick=null),uf(e)}function Em(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);uf(e)}var ki=new Map,g_=new Set;function Ic(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var ss=Te.d;Te.d={f:s2,r:r2,D:o2,C:l2,L:c2,m:u2,X:f2,S:h2,M:d2};function s2(){var e=ss.f(),t=Tf();return e||t}function r2(e){var t=jo(e);t!==null&&t.tag===5&&t.type==="form"?tS(t):ss.r(e)}var nl=typeof document>"u"?null:document;function xb(e,t,n){var i=nl;if(i&&typeof t=="string"&&t){var a=Fi(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),g_.has(a)||(g_.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),On(t,"link",e),En(t),i.head.appendChild(t)))}}function o2(e){ss.D(e),xb("dns-prefetch",e,null)}function l2(e,t){ss.C(e,t),xb("preconnect",e,t)}function c2(e,t,n){ss.L(e,t,n);var i=nl;if(i&&e&&t){var a='link[rel="preload"][as="'+Fi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Fi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Fi(n.imageSizes)+'"]')):a+='[href="'+Fi(e)+'"]';var s=a;switch(t){case"style":s=Yo(e);break;case"script":s=il(e)}if(!(ki.has(s)||(e=Fe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ki.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Zc(s))||t==="script"&&i.querySelector(Jc(s))))){var r=i.createElement("link");On(r,"link",e),t==="style"&&(r[zh]=!0,r.onload=r.onerror=function(){q_(r)}),En(r),i.head.appendChild(r)}}}function u2(e,t){ss.m(e,t);var n=nl;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Fi(i)+'"][href="'+Fi(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=il(e)}if(!ki.has(s)&&(e=Fe({rel:"modulepreload",href:e},t),ki.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Jc(s)))return}i=n.createElement("link"),On(i,"link",e),En(i),n.head.appendChild(i)}}}function h2(e,t,n){ss.S(e,t,n);var i=nl;if(i&&e){var a=Ro(i).hoistableStyles,s=Yo(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Zc(s)))o.loading=5;else{e=Fe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ki.get(s))&&Dg(e,n);var l=r=i.createElement("link");En(l),On(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Rh(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function f2(e,t){ss.X(e,t);var n=nl;if(n&&e){var i=Ro(n).hoistableScripts,a=il(e),s=i.get(a);s||(s=n.querySelector(Jc(a)),s||(e=Fe({src:e,async:!0},t),(t=ki.get(a))&&Ug(e,t),s=n.createElement("script"),En(s),On(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function d2(e,t){ss.M(e,t);var n=nl;if(n&&e){var i=Ro(n).hoistableScripts,a=il(e),s=i.get(a);s||(s=n.querySelector(Jc(a)),s||(e=Fe({src:e,async:!0,type:"module"},t),(t=ki.get(a))&&Ug(e,t),s=n.createElement("script"),En(s),On(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function x_(e,t,n,i){var a=(a=Os.current)?Ic(a):null;if(!a)throw Error(et(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Yo(n.href),t=Ro(a).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Yo(n.href);var s=Ro(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(Zc(e)))?s._p||(r.instance=s,r.state.loading=5):(s=ki.get(e),s||(s={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ki.set(e,s)),p2(a,e,s,r.state))),t&&i===null)throw Error(et(528,""));return r}if(t&&i!==null)throw Error(et(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=il(n),t=Ro(a).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(et(444,e))}}function Yo(e){return'href="'+Fi(e)+'"'}function Zc(e){return'link[rel="stylesheet"]['+e+"]"}function vb(e){return Fe({},e,{"data-precedence":e.precedence,precedence:null})}function p2(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[zh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[zh]=!0,t.onload=t.onerror=q_.bind(null,t),On(t,"link",n),En(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function il(e){return'[src="'+Fi(e)+'"]'}function Jc(e){return"script[async]"+e}function v_(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Fi(n.href)+'"]');if(i)return t.instance=i,En(i),i;var a=Fe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),En(i),On(i,"style",a),Rh(i,n.precedence,e),t.instance=i;case"stylesheet":a=Yo(n.href);var s=e.querySelector(Zc(a));if(s)return t.state.loading|=4,t.instance=s,En(s),s;i=vb(n),(a=ki.get(a))&&Dg(i,a),s=(e.ownerDocument||e).createElement("link"),En(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),On(s,"link",i),t.state.loading|=4,Rh(s,n.precedence,e),t.instance=s;case"script":return s=il(n.src),(a=e.querySelector(Jc(s)))?(t.instance=a,En(a),a):(i=n,(a=ki.get(s))&&(i=Fe({},n),Ug(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),En(a),On(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(et(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Rh(i,n.precedence,e));return t.instance}function Rh(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Dg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ug(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ch=null;function y_(e,t,n){if(Ch===null){var i=new Map,a=Ch=new Map;a.set(n,i)}else a=Ch,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[Vc]||s[Dn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function I0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function m2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function __(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function yb(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _b(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function S_(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=_b(t),e.suspenseyImages.push(t)),e=v2.bind(e),t.decode().then(e,e))}function g2(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Yo(i.href),s=t.querySelector(Zc(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Oc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,En(s);return}s=t.ownerDocument||t,i=vb(i),(a=ki.get(a))&&Dg(i,a),s=s.createElement("link"),En(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),On(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Oc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Nh=0;function x2(e,t){return e.stylesheets&&e.count===0&&Dh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Dh(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Nh===0&&(Nh=62500*Ow());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Dh(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Nh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Sb(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Dh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Oc(){this.count--,Sb(this)}function v2(){this.imgCount--,Sb(this)}var of=null;function Dh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,of=new Map,t.forEach(y2,e),of=null,Oc.call(e))}function y2(e,t){if(!(t.state.loading&4)){var n=of.get(e);if(n)var i=n.get(null);else{n=new Map,of.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Oc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Zo={$$typeof:Ma,Provider:null,Consumer:null,_currentValue:Tr,_currentValue2:Tr,_threadCount:0};function _2(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$p(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$p(0),this.hiddenUpdates=$p(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function bb(e,t,n,i,a,s,r,o,l,c,h,p){return e=new _2(e,t,n,r,l,c,h,p,o),t=1,s===!0&&(t|=24),s=oi(3,null,null,t),e.current=s,s.stateNode=e,t=j0(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},eg(s),e}function Mb(e){return e?(e=To,e):To}function Tb(e,t,n,i,a,s){a=Mb(a),i.context===null?i.context=a:i.pendingContext=a,i=zs(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Bs(e,i,t),n!==null&&(li(n,e,t),dc(n,e,t))}function b_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lg(e,t){b_(e,t),(e=e.alternate)&&b_(e,t)}function Eb(e){if(e.tag===13||e.tag===31){var t=Hr(e,67108864);t!==null&&li(t,e,67108864),Lg(e,67108864)}}function M_(e){if(e.tag===13||e.tag===31){var t=Mi();t=H0(t);var n=Hr(e,t);n!==null&&li(n,e,t),Lg(e,t)}}var Jo=!0;function S2(e,t,n,i){var a=Gt.T;Gt.T=null;var s=Te.p;try{Te.p=2,Ig(e,t,n,i)}finally{Te.p=s,Gt.T=a}}function b2(e,t,n,i){var a=Gt.T;Gt.T=null;var s=Te.p;try{Te.p=8,Ig(e,t,n,i)}finally{Te.p=s,Gt.T=a}}function Ig(e,t,n,i){if(Jo){var a=O0(i);if(a===null)bm(e,t,i,lf,n),T_(e,i);else if(T2(a,e,t,n,i))i.stopPropagation();else if(T_(e,i),t&4&&-1<M2.indexOf(e)){for(;a!==null;){var s=jo(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=yr(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-bi(r);o.entanglements[1]|=l,r&=~l}Da(s),(Me&6)===0&&(ef=_i()+500,Yc(0,!1))}}break;case 31:case 13:o=Hr(s,2),o!==null&&li(o,s,2),Tf(),Lg(s,2)}if(s=O0(i),s===null&&bm(e,t,i,lf,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else bm(e,t,i,null,n)}}function O0(e){return e=k0(e),Og(e)}var lf=null;function Og(e){if(lf=null,e=br(e),e!==null){var t=Bc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=N_(t),e!==null)return e;e=null}else if(n===31){if(e=D_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return lf=e,null}function Ab(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zE()){case z_:return 2;case B_:return 8;case Ph:case BE:return 32;case F_:return 268435456;default:return 32}default:return 32}}var P0=!1,Vs=null,ks=null,Xs=null,Pc=new Map,zc=new Map,Rs=[],M2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function T_(e,t){switch(e){case"focusin":case"focusout":Vs=null;break;case"dragenter":case"dragleave":ks=null;break;case"mouseover":case"mouseout":Xs=null;break;case"pointerover":case"pointerout":Pc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zc.delete(t.pointerId)}}function nc(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=jo(t),t!==null&&Eb(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function T2(e,t,n,i,a){switch(t){case"focusin":return Vs=nc(Vs,e,t,n,i,a),!0;case"dragenter":return ks=nc(ks,e,t,n,i,a),!0;case"mouseover":return Xs=nc(Xs,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return Pc.set(s,nc(Pc.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,zc.set(s,nc(zc.get(s)||null,e,t,n,i,a)),!0}return!1}function wb(e){var t=br(e.target);if(t!==null){var n=Bc(t);if(n!==null){if(t=n.tag,t===13){if(t=N_(n),t!==null){e.blockedOn=t,Kv(e.priority,function(){M_(n)});return}}else if(t===31){if(t=D_(n),t!==null){e.blockedOn=t,Kv(e.priority,function(){M_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=O0(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Fm=i,n.target.dispatchEvent(i),Fm=null}else return t=jo(n),t!==null&&Eb(t),e.blockedOn=n,!1;t.shift()}return!0}function E_(e,t,n){Uh(e)&&n.delete(t)}function E2(){P0=!1,Vs!==null&&Uh(Vs)&&(Vs=null),ks!==null&&Uh(ks)&&(ks=null),Xs!==null&&Uh(Xs)&&(Xs=null),Pc.forEach(E_),zc.forEach(E_)}function fh(e,t){e.blockedOn===t&&(e.blockedOn=null,P0||(P0=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,E2)))}var dh=null;function A_(e){dh!==e&&(dh=e,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,function(){dh===e&&(dh=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Og(i||n)===null)continue;break}var s=jo(n);s!==null&&(e.splice(t,3),t-=3,e0(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Ko(e){function t(l){return fh(l,e)}Vs!==null&&fh(Vs,e),ks!==null&&fh(ks,e),Xs!==null&&fh(Xs,e),Pc.forEach(t),zc.forEach(t);for(var n=0;n<Rs.length;n++){var i=Rs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Rs.length&&(n=Rs[0],n.blockedOn===null);)wb(n),n.blockedOn===null&&Rs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[ui]||null;if(typeof s=="function")r||A_(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[ui]||null)o=r.formAction;else if(Og(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),A_(n)}}}function Rb(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Pg(e){this._internalRoot=e}wf.prototype.render=Pg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(et(409));var n=t.current,i=Mi();Tb(n,i,e,t,null,null)};wf.prototype.unmount=Pg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tb(e.current,2,null,e,null,null),Tf(),t[Qo]=null}};function wf(e){this._internalRoot=e}wf.prototype.unstable_scheduleHydration=function(e){if(e){var t=W_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rs.length&&t!==0&&t<Rs[n].priority;n++);Rs.splice(n,0,e),n===0&&wb(e)}};var w_=R_.version;if(w_!=="19.3.1")throw Error(et(527,w_,"19.3.1"));Te.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(et(188)):(e=Object.keys(e).join(","),Error(et(268,e)));return e=AE(t),e=e!==null?U_(e):null,e=e===null?null:e.stateNode,e};var A2={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Gt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ic=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ic.isDisabled&&ic.supportsFiber))try{Fc=ic.inject(A2),Si=ic}catch{}var ic;Rf.createRoot=function(e,t){if(!C_(e))throw Error(et(299));var n=!1,i="",a=lS,s=cS,r=uS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=bb(e,1,!1,null,null,n,i,null,a,s,r,Rb),e[Qo]=t.current,wg(e),new Pg(t)};Rf.hydrateRoot=function(e,t,n){if(!C_(e))throw Error(et(299));var i=!1,a="",s=lS,r=cS,o=uS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=bb(e,1,!0,t,n??null,i,a,l,s,r,o,Rb),t.context=Mb(null),n=t.current,i=Mi(),i=H0(i),a=zs(i),a.callback=null,Bs(n,a,i),n=i,t.current.lanes=n,Gc(t,n),Da(t),e[Qo]=t.current,wg(e),new wf(t)};Rf.version="19.3.1"});var Ub=ga((LU,Db)=>{"use strict";function Nb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nb)}catch(e){console.error(e)}}Nb(),Db.exports=Cb()});var kT=ga(Rp=>{"use strict";var bU=Symbol.for("react.transitional.element"),MU=Symbol.for("react.fragment");function VT(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:bU,type:e,key:i,ref:t!==void 0?t:null,props:n}}Rp.Fragment=MU;Rp.jsx=VT;Rp.jsxs=VT});var Gu=ga((vP,XT)=>{"use strict";XT.exports=kT()});var ZT=gr(Yl(),1),JT=gr(Ub(),1);var tn=gr(Yl(),1);var iM=0,fx=1,aM=2;var Qr=1,sM=2,Dl=3,cr=0,Fn=1,Fa=2,Ha=0,Ul=1,dx=2,px=3,mx=4,rM=5;var jr=100,oM=101,lM=102,cM=103,uM=104,hM=200,fM=201,dM=202,pM=203,gx=204,xx=205,mM=206,gM=207,xM=208,vM=209,yM=210,_M=211,SM=212,bM=213,MM=214,Qf=0,jf=1,$f=2,_l=3,td=4,ed=5,nd=6,id=7,Rd=0,TM=1,EM=2,ha=0,vx=1,yx=2,_x=3,Tu=4,Sx=5,bx=6,Mx=7;var Tx=300,ur=301,$r=302,Cd=303,Nd=304,Eu=306,fs=1e3,La=1001,ad=1002,Rn=1003,AM=1004;var Au=1005;var Bn=1006,Dd=1007;var hr=1008;var fi=1009,Ex=1010,Ax=1011,Ll=1012,Ud=1013,fa=1014,Yi=1015,da=1016,Ld=1017,Id=1018,Il=1020,wx=35902,Rx=35899,Cx=1021,Nx=1022,Zi=1023,Ia=1026,fr=1027,Od=1028,Pd=1029,dr=1030,zd=1031;var Bd=1033,wu=33776,Ru=33777,Cu=33778,Nu=33779,Fd=35840,Hd=35841,Gd=35842,Vd=35843,kd=36196,Xd=37492,Wd=37496,qd=37488,Yd=37489,Du=37490,Zd=37491,Jd=37808,Kd=37809,Qd=37810,jd=37811,$d=37812,tp=37813,ep=37814,np=37815,ip=37816,ap=37817,sp=37818,rp=37819,op=37820,lp=37821,cp=36492,up=36494,hp=36495,fp=36283,dp=36284,Uu=36285,pp=36286;var au=2300,sd=2301,Jf=2302,ax=2303,sx=2400,rx=2401,ox=2402;var wM=3200;var Lu=0,RM=1,gs="",yn="srgb",su="srgb-linear",ru="linear",Re="srgb";var Kf=7680;var CM=519,NM=512,DM=513,UM=514,mp=515,LM=516,IM=517,gp=518,OM=519,PM=35044;var Dx="300 es",oa=2e3,Sl=2001;function w2(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function R2(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ou(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function zM(){let e=ou("canvas");return e.style.display="block",e}var Lb={},bl=null;function Ux(...e){let t="THREE."+e.shift();bl?bl("log",t,...e):console.log(t,...e)}function BM(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ft(...e){e=BM(e);let t="THREE."+e.shift();if(bl)bl("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Vt(...e){e=BM(e);let t="THREE."+e.shift();if(bl)bl("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function qr(...e){let t=e.join(" ");t in Lb||(Lb[t]=!0,Ft(...e))}function FM(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var HM={[Qf]:jf,[$f]:nd,[td]:id,[_l]:ed,[jf]:Qf,[nd]:$f,[id]:td,[ed]:_l},Oa=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let a=i[t];if(a!==void 0){let s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}},Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ib=1234567,nu=Math.PI/180,Ml=180/Math.PI;function Ol(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wn[e&255]+Wn[e>>8&255]+Wn[e>>16&255]+Wn[e>>24&255]+"-"+Wn[t&255]+Wn[t>>8&255]+"-"+Wn[t>>16&15|64]+Wn[t>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[i&255]+Wn[i>>8&255]+Wn[i>>16&255]+Wn[i>>24&255]).toLowerCase()}function de(e,t,n){return Math.max(t,Math.min(n,e))}function Lx(e,t){return(e%t+t)%t}function C2(e,t,n,i,a){return i+(e-t)*(a-i)/(n-t)}function N2(e,t,n){return e!==t?(n-e)/(t-e):0}function iu(e,t,n){return(1-n)*e+n*t}function D2(e,t,n,i){return iu(e,t,1-Math.exp(-n*i))}function U2(e,t=1){return t-Math.abs(Lx(e,t*2)-t)}function L2(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function I2(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function O2(e,t){return e+Math.floor(Math.random()*(t-e+1))}function P2(e,t){return e+Math.random()*(t-e)}function z2(e){return e*(.5-Math.random())}function B2(e){e!==void 0&&(Ib=e);let t=Ib+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function F2(e){return e*nu}function H2(e){return e*Ml}function G2(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function V2(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function k2(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function X2(e,t,n,i,a){let s=Math.cos,r=Math.sin,o=s(n/2),l=r(n/2),c=s((t+i)/2),h=r((t+i)/2),p=s((t-i)/2),u=r((t-i)/2),d=s((i-t)/2),x=r((i-t)/2);switch(a){case"XYX":e.set(o*h,l*p,l*u,o*c);break;case"YZY":e.set(l*u,o*h,l*p,o*c);break;case"ZXZ":e.set(l*p,l*u,o*h,o*c);break;case"XZX":e.set(o*h,l*x,l*d,o*c);break;case"YXY":e.set(l*d,o*h,l*x,o*c);break;case"ZYZ":e.set(l*x,l*d,o*h,o*c);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function vl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ei(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var pr={DEG2RAD:nu,RAD2DEG:Ml,generateUUID:Ol,clamp:de,euclideanModulo:Lx,mapLinear:C2,inverseLerp:N2,lerp:iu,damp:D2,pingpong:U2,smoothstep:L2,smootherstep:I2,randInt:O2,randFloat:P2,randFloatSpread:z2,seededRandom:B2,degToRad:F2,radToDeg:H2,isPowerOfTwo:G2,ceilPowerOfTwo:V2,floorPowerOfTwo:k2,setQuaternionFromProperEuler:X2,normalize:ei,denormalize:vl},Bx=class Bx{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=de(this.x,t.x,n.x),this.y=de(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=de(this.x,t,n),this.y=de(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bx.prototype.isVector2=!0;var jt=Bx,Pa=class{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],h=i[a+2],p=i[a+3],u=s[r+0],d=s[r+1],x=s[r+2],S=s[r+3];if(p!==S||l!==u||c!==d||h!==x){let g=l*u+c*d+h*x+p*S;g<0&&(u=-u,d=-d,x=-x,S=-S,g=-g);let f=1-o;if(g<.9995){let m=Math.acos(g),b=Math.sin(m);f=Math.sin(f*m)/b,o=Math.sin(o*m)/b,l=l*f+u*o,c=c*f+d*o,h=h*f+x*o,p=p*f+S*o}else{l=l*f+u*o,c=c*f+d*o,h=h*f+x*o,p=p*f+S*o;let m=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=m,c*=m,h*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,a,s,r){let o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],p=s[r],u=s[r+1],d=s[r+2],x=s[r+3];return t[n]=o*x+h*p+l*d-c*u,t[n+1]=l*x+h*u+c*p-o*d,t[n+2]=c*x+h*d+o*u-l*p,t[n+3]=h*x-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),p=o(s/2),u=l(i/2),d=l(a/2),x=l(s/2);switch(r){case"XYZ":this._x=u*h*p+c*d*x,this._y=c*d*p-u*h*x,this._z=c*h*x+u*d*p,this._w=c*h*p-u*d*x;break;case"YXZ":this._x=u*h*p+c*d*x,this._y=c*d*p-u*h*x,this._z=c*h*x-u*d*p,this._w=c*h*p+u*d*x;break;case"ZXY":this._x=u*h*p-c*d*x,this._y=c*d*p+u*h*x,this._z=c*h*x+u*d*p,this._w=c*h*p-u*d*x;break;case"ZYX":this._x=u*h*p-c*d*x,this._y=c*d*p+u*h*x,this._z=c*h*x-u*d*p,this._w=c*h*p+u*d*x;break;case"YZX":this._x=u*h*p+c*d*x,this._y=c*d*p+u*h*x,this._z=c*h*x-u*d*p,this._w=c*h*p-u*d*x;break;case"XZY":this._x=u*h*p-c*d*x,this._y=c*d*p-u*h*x,this._z=c*h*x+u*d*p,this._w=c*h*p+u*d*x;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(r-a)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(a+r)/d,this._z=(s+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(s-c)/d,this._x=(a+r)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-a)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+a*c-s*l,this._y=a*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-a*o,this._w=r*h-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Fx=class Fx{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ob.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ob.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),h=2*(o*n-s*a),p=2*(s*i-r*n);return this.x=n+l*c+r*p-o*h,this.y=i+l*h+o*c-s*p,this.z=a+l*p+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=de(this.x,t.x,n.x),this.y=de(this.y,t.y,n.y),this.z=de(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=de(this.x,t,n),this.y=de(this.y,t,n),this.z=de(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zg.copy(this).projectOnVector(t),this.sub(zg)}reflect(t){return this.sub(zg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fx.prototype.isVector3=!0;var B=Fx,zg=new B,Ob=new Pa,Hx=class Hx{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],d=i[5],x=i[8],S=a[0],g=a[3],f=a[6],m=a[1],b=a[4],v=a[7],T=a[2],E=a[5],w=a[8];return s[0]=r*S+o*m+l*T,s[3]=r*g+o*b+l*E,s[6]=r*f+o*v+l*w,s[1]=c*S+h*m+p*T,s[4]=c*g+h*b+p*E,s[7]=c*f+h*v+p*w,s[2]=u*S+d*m+x*T,s[5]=u*g+d*b+x*E,s[8]=u*f+d*v+x*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*s*h+i*o*l+a*s*c-a*r*l}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*r-o*c,u=o*l-h*s,d=c*s-r*l,x=n*p+i*u+a*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return t[0]=p*S,t[1]=(a*c-h*i)*S,t[2]=(o*i-a*r)*S,t[3]=u*S,t[4]=(h*n-a*l)*S,t[5]=(a*s-o*n)*S,t[6]=d*S,t[7]=(i*l-c*n)*S,t[8]=(r*n-i*s)*S,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bg.makeScale(t,n)),this}rotate(t){return qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bg.makeRotation(-t)),this}translate(t,n){return qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Hx.prototype.isMatrix3=!0;var qt=Hx,Bg=new qt,Pb=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zb=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W2(){let e={enabled:!0,workingColorSpace:su,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Re&&(a.r=hs(a.r),a.g=hs(a.g),a.b=hs(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Re&&(a.r=yl(a.r),a.g=yl(a.g),a.b=yl(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===gs?ru:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return qr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return qr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[su]:{primaries:t,whitePoint:i,transfer:ru,toXYZ:Pb,fromXYZ:zb,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:t,whitePoint:i,transfer:Re,toXYZ:Pb,fromXYZ:zb,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),e}var fe=W2();function hs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function yl(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var al,rd=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{al===void 0&&(al=ou("canvas")),al.width=t.width,al.height=t.height;let a=al.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=al}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=ou("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=hs(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hs(n[i]/255)*255):n[i]=hs(n[i]);return{data:n,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},q2=0,Tl=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:q2++}),this.uuid=Ol(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Fg(a[r].image)):s.push(Fg(a[r]))}else s=Fg(a);i.url=s}return n||(t.images[this.uuid]=i),i}};function Fg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?rd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}var Y2=0,Hg=new B,ii=class e extends Oa{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=La,a=La,s=Bn,r=hr,o=Zi,l=fi,c=e.DEFAULT_ANISOTROPY,h=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y2++}),this.uuid=Ol(),this.name="",this.source=new Tl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hg).x}get height(){return this.source.getSize(Hg).y}get depth(){return this.source.getSize(Hg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Ft(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Ft(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fs:t.x=t.x-Math.floor(t.x);break;case La:t.x=t.x<0?0:1;break;case ad:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fs:t.y=t.y-Math.floor(t.y);break;case La:t.y=t.y<0?0:1;break;case ad:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Tx;ii.DEFAULT_ANISOTROPY=1;var Gx=class Gx{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],x=l[9],S=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-S)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+S)<.1&&Math.abs(x+g)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let b=(c+1)/2,v=(d+1)/2,T=(f+1)/2,E=(h+u)/4,w=(p+S)/4,y=(x+g)/4;return b>v&&b>T?b<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(b),a=E/i,s=w/i):v>T?v<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(v),i=E/a,s=y/a):T<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(T),i=w/s,a=y/s),this.set(i,a,s,n),this}let m=Math.sqrt((g-x)*(g-x)+(p-S)*(p-S)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(g-x)/m,this.y=(p-S)/m,this.z=(u-h)/m,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=de(this.x,t.x,n.x),this.y=de(this.y,t.y,n.y),this.z=de(this.z,t.z,n.z),this.w=de(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=de(this.x,t,n),this.y=de(this.y,t,n),this.z=de(this.z,t,n),this.w=de(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gx.prototype.isVector4=!0;var je=Gx,od=class extends Oa{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new je(0,0,t,n),this.scissorTest=!1,this.viewport=new je(0,0,t,n),this.textures=[];let a={width:t,height:n,depth:i.depth},s=new ii(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let a=Object.assign({},t.textures[n].image);this.textures[n].source=new Tl(a)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends od{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},lu=class extends ii{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ld=class extends ii{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var wd=class wd{constructor(t,n,i,a,s,r,o,l,c,h,p,u,d,x,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,h,p,u,d,x,S,g)}set(t,n,i,a,s,r,o,l,c,h,p,u,d,x,S,g){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=x,f[11]=S,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wd().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,a=1/sl.setFromMatrixColumn(t,0).length(),s=1/sl.setFromMatrixColumn(t,1).length(),r=1/sl.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){let u=r*h,d=r*p,x=o*h,S=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=d+x*c,n[5]=u-S*c,n[9]=-o*l,n[2]=S-u*c,n[6]=x+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*h,d=l*p,x=c*h,S=c*p;n[0]=u+S*o,n[4]=x*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=d*o-x,n[6]=S+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*h,d=l*p,x=c*h,S=c*p;n[0]=u-S*o,n[4]=-r*p,n[8]=x+d*o,n[1]=d+x*o,n[5]=r*h,n[9]=S-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*h,d=r*p,x=o*h,S=o*p;n[0]=l*h,n[4]=x*c-d,n[8]=u*c+S,n[1]=l*p,n[5]=S*c+u,n[9]=d*c-x,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,x=o*l,S=o*c;n[0]=l*h,n[4]=S-u*p,n[8]=x*p+d,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*p+x,n[10]=u-S*p}else if(t.order==="XZY"){let u=r*l,d=r*c,x=o*l,S=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+S,n[5]=r*h,n[9]=d*p-x,n[2]=x*p-d,n[6]=o*h,n[10]=S*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Z2,t,J2)}lookAt(t,n,i){let a=this.elements;return Ai.subVectors(t,n),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),js.crossVectors(i,Ai),js.lengthSq()===0&&(Math.abs(i.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),js.crossVectors(i,Ai)),js.normalize(),Cf.crossVectors(Ai,js),a[0]=js.x,a[4]=Cf.x,a[8]=Ai.x,a[1]=js.y,a[5]=Cf.y,a[9]=Ai.y,a[2]=js.z,a[6]=Cf.z,a[10]=Ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],d=i[13],x=i[2],S=i[6],g=i[10],f=i[14],m=i[3],b=i[7],v=i[11],T=i[15],E=a[0],w=a[4],y=a[8],A=a[12],R=a[1],I=a[5],C=a[9],P=a[13],D=a[2],G=a[6],X=a[10],W=a[14],it=a[3],Q=a[7],j=a[11],at=a[15];return s[0]=r*E+o*R+l*D+c*it,s[4]=r*w+o*I+l*G+c*Q,s[8]=r*y+o*C+l*X+c*j,s[12]=r*A+o*P+l*W+c*at,s[1]=h*E+p*R+u*D+d*it,s[5]=h*w+p*I+u*G+d*Q,s[9]=h*y+p*C+u*X+d*j,s[13]=h*A+p*P+u*W+d*at,s[2]=x*E+S*R+g*D+f*it,s[6]=x*w+S*I+g*G+f*Q,s[10]=x*y+S*C+g*X+f*j,s[14]=x*A+S*P+g*W+f*at,s[3]=m*E+b*R+v*D+T*it,s[7]=m*w+b*I+v*G+T*Q,s[11]=m*y+b*C+v*X+T*j,s[15]=m*A+b*P+v*W+T*at,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],d=t[14],x=t[3],S=t[7],g=t[11],f=t[15],m=l*d-c*u,b=o*d-c*p,v=o*u-l*p,T=r*d-c*h,E=r*u-l*h,w=r*p-o*h;return n*(S*m-g*b+f*v)-i*(x*m-g*T+f*E)+a*(x*b-S*T+f*w)-s*(x*v-S*E+g*w)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],a=t[8],s=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return n*(r*h-o*c)-i*(s*h-o*l)+a*(s*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],d=t[11],x=t[12],S=t[13],g=t[14],f=t[15],m=n*o-i*r,b=n*l-a*r,v=n*c-s*r,T=i*l-a*o,E=i*c-s*o,w=a*c-s*l,y=h*S-p*x,A=h*g-u*x,R=h*f-d*x,I=p*g-u*S,C=p*f-d*S,P=u*f-d*g,D=m*P-b*C+v*I+T*R-E*A+w*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/D;return t[0]=(o*P-l*C+c*I)*G,t[1]=(a*C-i*P-s*I)*G,t[2]=(S*w-g*E+f*T)*G,t[3]=(u*E-p*w-d*T)*G,t[4]=(l*R-r*P-c*A)*G,t[5]=(n*P-a*R+s*A)*G,t[6]=(g*v-x*w-f*b)*G,t[7]=(h*w-u*v+d*b)*G,t[8]=(r*C-o*R+c*y)*G,t[9]=(i*R-n*C-s*y)*G,t[10]=(x*E-S*v+f*m)*G,t[11]=(p*v-h*E-d*m)*G,t[12]=(o*A-r*I-l*y)*G,t[13]=(n*I-i*A+a*y)*G,t[14]=(S*b-x*T-g*m)*G,t[15]=(h*T-p*b+u*m)*G,this}scale(t){let n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*r,0,c*l-a*o,h*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){let a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,h=r+r,p=o+o,u=s*c,d=s*h,x=s*p,S=r*h,g=r*p,f=o*p,m=l*c,b=l*h,v=l*p,T=i.x,E=i.y,w=i.z;return a[0]=(1-(S+f))*T,a[1]=(d+v)*T,a[2]=(x-b)*T,a[3]=0,a[4]=(d-v)*E,a[5]=(1-(u+f))*E,a[6]=(g+m)*E,a[7]=0,a[8]=(x+b)*w,a[9]=(g-m)*w,a[10]=(1-(u+S))*w,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=sl.set(a[0],a[1],a[2]).length(),o=sl.set(a[4],a[5],a[6]).length(),l=sl.set(a[8],a[9],a[10]).length();s<0&&(r=-r),ia.copy(this);let c=1/r,h=1/o,p=1/l;return ia.elements[0]*=c,ia.elements[1]*=c,ia.elements[2]*=c,ia.elements[4]*=h,ia.elements[5]*=h,ia.elements[6]*=h,ia.elements[8]*=p,ia.elements[9]*=p,ia.elements[10]*=p,n.setFromRotationMatrix(ia),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=oa,l=!1){let c=this.elements,h=2*s/(n-t),p=2*s/(i-a),u=(n+t)/(n-t),d=(i+a)/(i-a),x,S;if(l)x=s/(r-s),S=r*s/(r-s);else if(o===oa)x=-(r+s)/(r-s),S=-2*r*s/(r-s);else if(o===Sl)x=-r/(r-s),S=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=oa,l=!1){let c=this.elements,h=2/(n-t),p=2/(i-a),u=-(n+t)/(n-t),d=-(i+a)/(i-a),x,S;if(l)x=1/(r-s),S=r/(r-s);else if(o===oa)x=-2/(r-s),S=-(r+s)/(r-s);else if(o===Sl)x=-1/(r-s),S=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};wd.prototype.isMatrix4=!0;var Le=wd,sl=new B,ia=new Le,Z2=new B(0,0,0),J2=new B(1,1,1),js=new B,Cf=new B,Ai=new B,Bb=new Le,Fb=new Pa,za=class e{constructor(t=0,n=0,i=0,a=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],h=a[9],p=a[2],u=a[6],d=a[10];switch(n){case"XYZ":this._y=Math.asin(de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-de(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-de(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Bb.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bb,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Fb.setFromEuler(this),this.setFromQuaternion(Fb,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};za.DEFAULT_ORDER="XYZ";var cu=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},K2=0,Hb=new B,rl=new Pa,rs=new Le,Nf=new B,Kc=new B,Q2=new B,j2=new Pa,Gb=new B(1,0,0),Vb=new B(0,1,0),kb=new B(0,0,1),Xb={type:"added"},$2={type:"removed"},ol={type:"childadded",child:null},Gg={type:"childremoved",child:null},Cn=class e extends Oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K2++}),this.uuid=Ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new za,i=new Pa,a=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Le},normalMatrix:{value:new qt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return rl.setFromAxisAngle(t,n),this.quaternion.multiply(rl),this}rotateOnWorldAxis(t,n){return rl.setFromAxisAngle(t,n),this.quaternion.premultiply(rl),this}rotateX(t){return this.rotateOnAxis(Gb,t)}rotateY(t){return this.rotateOnAxis(Vb,t)}rotateZ(t){return this.rotateOnAxis(kb,t)}translateOnAxis(t,n){return Hb.copy(t).applyQuaternion(this.quaternion),this.position.add(Hb.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Gb,t)}translateY(t){return this.translateOnAxis(Vb,t)}translateZ(t){return this.translateOnAxis(kb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Nf.copy(t):Nf.set(t,n,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Kc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(Kc,Nf,this.up):rs.lookAt(Nf,Kc,this.up),this.quaternion.setFromRotationMatrix(rs),a&&(rs.extractRotation(a.matrixWorld),rl.setFromRotationMatrix(rs),this.quaternion.premultiply(rl.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xb),ol.child=t,this.dispatchEvent(ol),ol.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent($2),Gg.child=t,this.dispatchEvent(Gg),Gg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rs.multiply(t.parent.matrixWorld)),t.applyMatrix4(rs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xb),ol.child=t,this.dispatchEvent(ol),ol.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kc,t,Q2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kc,j2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),x=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),x.length>0&&(i.nodes=x)}return i.object=a,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Cn.DEFAULT_UP=new B(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var te=class extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},tR={type:"move"},El=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let S of t.hand.values()){let g=n.getJointPose(S,i),f=this._getHandJoint(c,S);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,x=.005;c.inputState.pinching&&u>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tR)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new te;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},GM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$s={h:0,s:0,l:0},Df={h:0,s:0,l:0};function Vg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Zt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=fe.workingColorSpace){return this.r=t,this.g=n,this.b=i,fe.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=fe.workingColorSpace){if(t=Lx(t,1),n=de(n,0,1),i=de(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Vg(r,s,t+1/3),this.g=Vg(r,s,t),this.b=Vg(r,s,t-1/3)}return fe.colorSpaceToWorking(this,a),this}setStyle(t,n=yn){function i(s){s!==void 0&&parseFloat(s)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ft("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=yn){let i=GM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}copyLinearToSRGB(t){return this.r=yl(t.r),this.g=yl(t.g),this.b=yl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yn){return fe.workingToColorSpace(qn.copy(this),t),Math.round(de(qn.r*255,0,255))*65536+Math.round(de(qn.g*255,0,255))*256+Math.round(de(qn.b*255,0,255))}getHexString(t=yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=fe.workingColorSpace){fe.workingToColorSpace(qn.copy(this),n);let i=qn.r,a=qn.g,s=qn.b,r=Math.max(i,a,s),o=Math.min(i,a,s),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=fe.workingColorSpace){return fe.workingToColorSpace(qn.copy(this),n),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=yn){fe.workingToColorSpace(qn.copy(this),t);let n=qn.r,i=qn.g,a=qn.b;return t!==yn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL($s),this.setHSL($s.h+t,$s.s+n,$s.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL($s),t.getHSL(Df);let i=iu($s.h,Df.h,n),a=iu($s.s,Df.s,n),s=iu($s.l,Df.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qn=new Zt;Zt.NAMES=GM;var uu=class e{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=n}clone(){return new e(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Yr=class extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new za,this.environmentIntensity=1,this.environmentRotation=new za,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},aa=new B,os=new B,kg=new B,ls=new B,ll=new B,cl=new B,Wb=new B,Xg=new B,Wg=new B,qg=new B,Yg=new je,Zg=new je,Jg=new je,ir=class e{constructor(t=new B,n=new B,i=new B){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),aa.subVectors(t,n),a.cross(aa);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){aa.subVectors(a,n),os.subVectors(i,n),kg.subVectors(t,n);let r=aa.dot(aa),o=aa.dot(os),l=aa.dot(kg),c=os.dot(os),h=os.dot(kg),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;let u=1/p,d=(c*l-o*h)*u,x=(r*h-o*l)*u;return s.set(1-d-x,x,d)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,ls)===null?!1:ls.x>=0&&ls.y>=0&&ls.x+ls.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,ls)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ls.x),l.addScaledVector(r,ls.y),l.addScaledVector(o,ls.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Yg.setScalar(0),Zg.setScalar(0),Jg.setScalar(0),Yg.fromBufferAttribute(t,n),Zg.fromBufferAttribute(t,i),Jg.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Yg,s.x),r.addScaledVector(Zg,s.y),r.addScaledVector(Jg,s.z),r}static isFrontFacing(t,n,i,a){return aa.subVectors(i,n),os.subVectors(t,n),aa.cross(os).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return aa.subVectors(this.c,this.b),os.subVectors(this.a,this.b),aa.cross(os).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return e.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,a=this.b,s=this.c,r,o;ll.subVectors(a,i),cl.subVectors(s,i),Xg.subVectors(t,i);let l=ll.dot(Xg),c=cl.dot(Xg);if(l<=0&&c<=0)return n.copy(i);Wg.subVectors(t,a);let h=ll.dot(Wg),p=cl.dot(Wg);if(h>=0&&p<=h)return n.copy(a);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(ll,r);qg.subVectors(t,s);let d=ll.dot(qg),x=cl.dot(qg);if(x>=0&&d<=x)return n.copy(s);let S=d*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(cl,o);let g=h*x-d*p;if(g<=0&&p-h>=0&&d-x>=0)return Wb.subVectors(s,a),o=(p-h)/(p-h+(d-x)),n.copy(a).addScaledVector(Wb,o);let f=1/(g+S+u);return r=S*f,o=u*f,n.copy(i).addScaledVector(ll,r).addScaledVector(cl,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ba=class{constructor(t=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(sa.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(sa.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=sa.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,sa):sa.fromBufferAttribute(s,r),sa.applyMatrix4(t.matrixWorld),this.expandByPoint(sa);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Uf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Uf.copy(i.boundingBox)),Uf.applyMatrix4(t.matrixWorld),this.union(Uf)}let a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sa),sa.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qc),Lf.subVectors(this.max,Qc),ul.subVectors(t.a,Qc),hl.subVectors(t.b,Qc),fl.subVectors(t.c,Qc),tr.subVectors(hl,ul),er.subVectors(fl,hl),Vr.subVectors(ul,fl);let n=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Vr.z,Vr.y,tr.z,0,-tr.x,er.z,0,-er.x,Vr.z,0,-Vr.x,-tr.y,tr.x,0,-er.y,er.x,0,-Vr.y,Vr.x,0];return!Kg(n,ul,hl,fl,Lf)||(n=[1,0,0,0,1,0,0,0,1],!Kg(n,ul,hl,fl,Lf))?!1:(If.crossVectors(tr,er),n=[If.x,If.y,If.z],Kg(n,ul,hl,fl,Lf))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sa).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sa).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},cs=[new B,new B,new B,new B,new B,new B,new B,new B],sa=new B,Uf=new Ba,ul=new B,hl=new B,fl=new B,tr=new B,er=new B,Vr=new B,Qc=new B,Lf=new B,If=new B,kr=new B;function Kg(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){kr.fromArray(e,s);let o=a.x*Math.abs(kr.x)+a.y*Math.abs(kr.y)+a.z*Math.abs(kr.z),l=t.dot(kr),c=n.dot(kr),h=i.dot(kr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var pn=new B,Of=new jt,eR=0,ni=class extends Oa{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=PM,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Of.fromBufferAttribute(this,n),Of.applyMatrix3(t),this.setXY(n,Of.x,Of.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix3(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix4(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)pn.fromBufferAttribute(this,n),pn.applyNormalMatrix(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)pn.fromBufferAttribute(this,n),pn.transformDirection(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=vl(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ei(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=vl(n,this.array)),n}setX(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=vl(n,this.array)),n}setY(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=vl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=vl(n,this.array)),n}setW(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ei(n,this.array),i=ei(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=ei(n,this.array),i=ei(i,this.array),a=ei(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=ei(n,this.array),i=ei(i,this.array),a=ei(a,this.array),s=ei(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var hu=class extends ni{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var fu=class extends ni{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var me=class extends ni{constructor(t,n,i){super(new Float32Array(t),n,i)}},nR=new Ba,jc=new B,Qg=new B,ar=class{constructor(t=new B,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):nR.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jc.subVectors(t,this.center);let n=jc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(jc,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jc.copy(t.center).add(Qg)),this.expandByPoint(jc.copy(t.center).sub(Qg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},iR=0,Xi=new Le,jg=new Cn,dl=new B,wi=new Ba,$c=new Ba,wn=new B,_n=class e extends Oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iR++}),this.uuid=Ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(w2(t)?fu:hu)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new qt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xi.makeRotationFromQuaternion(t),this.applyMatrix4(Xi),this}rotateX(t){return Xi.makeRotationX(t),this.applyMatrix4(Xi),this}rotateY(t){return Xi.makeRotationY(t),this.applyMatrix4(Xi),this}rotateZ(t){return Xi.makeRotationZ(t),this.applyMatrix4(Xi),this}translate(t,n,i){return Xi.makeTranslation(t,n,i),this.applyMatrix4(Xi),this}scale(t,n,i){return Xi.makeScale(t,n,i),this.applyMatrix4(Xi),this}lookAt(t){return jg.lookAt(t),jg.updateMatrix(),this.applyMatrix4(jg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dl).negate(),this.translate(dl.x,dl.y,dl.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let a=0,s=t.length;a<s;a++){let r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new me(i,3))}else{let i=Math.min(t.length,n.count);for(let a=0;a<i;a++){let s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ba);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){let s=n[i];wi.setFromBufferAttribute(s),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let i=this.boundingSphere.center;if(wi.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){let o=n[s];$c.setFromBufferAttribute(o),this.morphTargetsRelative?(wn.addVectors(wi.min,$c.min),wi.expandByPoint(wn),wn.addVectors(wi.max,$c.max),wi.expandByPoint(wn)):(wi.expandByPoint($c.min),wi.expandByPoint($c.max))}wi.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)wn.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(wn));if(n)for(let s=0,r=n.length;s<r;s++){let o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wn.fromBufferAttribute(o,c),l&&(dl.fromBufferAttribute(t,c),wn.add(dl)),a=Math.max(a,i.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,a=n.normal,s=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new ni(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new B,l[y]=new B;let c=new B,h=new B,p=new B,u=new jt,d=new jt,x=new jt,S=new B,g=new B;function f(y,A,R){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,A),p.fromBufferAttribute(i,R),u.fromBufferAttribute(s,y),d.fromBufferAttribute(s,A),x.fromBufferAttribute(s,R),h.sub(c),p.sub(c),d.sub(u),x.sub(u);let I=1/(d.x*x.y-x.x*d.y);isFinite(I)&&(S.copy(h).multiplyScalar(x.y).addScaledVector(p,-d.y).multiplyScalar(I),g.copy(p).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(I),o[y].add(S),o[A].add(S),o[R].add(S),l[y].add(g),l[A].add(g),l[R].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let y=0,A=m.length;y<A;++y){let R=m[y],I=R.start,C=R.count;for(let P=I,D=I+C;P<D;P+=3)f(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let b=new B,v=new B,T=new B,E=new B;function w(y){T.fromBufferAttribute(a,y),E.copy(T);let A=o[y];b.copy(A),b.sub(T.multiplyScalar(T.dot(A))).normalize(),v.crossVectors(E,A);let I=v.dot(l[y])<0?-1:1;r.setXYZW(y,b.x,b.y,b.z,I)}for(let y=0,A=m.length;y<A;++y){let R=m[y],I=R.start,C=R.count;for(let P=I,D=I+C;P<D;P+=3)w(t.getX(P+0)),w(t.getX(P+1)),w(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let a=new B,s=new B,r=new B,o=new B,l=new B,c=new B,h=new B,p=new B;if(t)for(let u=0,d=t.count;u<d;u+=3){let x=t.getX(u+0),S=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,x),s.fromBufferAttribute(n,S),r.fromBufferAttribute(n,g),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)wn.fromBufferAttribute(t,n),wn.normalize(),t.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),d=0,x=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*h;for(let f=0;f<h;f++)u[x++]=c[d++]}return new ni(u,h,p)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,i);n.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(a[l]=h,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(n))}let s=t.morphAttributes;for(let c in s){let h=[],p=s[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $g=new B,aR=new B,sR=new qt,ra=class{constructor(t=new B(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let a=$g.subVectors(i,n).cross(aR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let a=t.delta($g),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||sR.getNormalMatrix(t),a=this.coplanarPoint($g).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},rR=0,ds=class extends Oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rR++}),this.uuid=Ol(),this.name="",this.type="Material",this.blending=Ul,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gx,this.blendDst=xx,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=_l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=CM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kf,this.stencilZFail=Kf,this.stencilZPass=Kf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Ft(`Material: parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Ft(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(n){let s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ra().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new jt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var us=new B,tx=new B,Pf=new B,zf=new B,cd=class{constructor(t=new B,n=new B(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,us)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=us.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(us.copy(this.origin).addScaledVector(this.direction,n),us.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){tx.copy(t).add(n).multiplyScalar(.5),Pf.copy(n).sub(t).normalize(),zf.copy(this.origin).sub(tx);let s=t.distanceTo(n)*.5,r=-this.direction.dot(Pf),o=zf.dot(this.direction),l=-zf.dot(Pf),c=zf.lengthSq(),h=Math.abs(1-r*r),p,u,d,x;if(h>0)if(p=r*l-o,u=r*o-l,x=s*h,p>=0)if(u>=-x)if(u<=x){let S=1/h;p*=S,u*=S,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-x?(p=Math.max(0,-(-r*s+o)),u=p>0?-s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c):u<=x?(p=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(p=Math.max(0,-(r*s+o)),u=p>0?s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c);else u=r>0?-s:s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(tx).addScaledVector(Pf,u),d}intersectSphere(t,n){if(t.radius<0)return null;us.subVectors(t.center,this.origin);let i=us.dot(this.direction),a=us.dot(us)-i*i,s=t.radius*t.radius;if(a>s)return null;let r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,us)!==null}intersectTriangle(t,n,i,a,s){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,x=n.x-r.x,S=n.y-r.y,g=n.z-r.z,f=i.x-r.x,m=i.y-r.y,b=i.z-r.z,v=Math.abs(l),T=Math.abs(c),E=Math.abs(h),w,y,A,R,I,C,P,D,G,X,W,it;if(v>=T&&v>=E?(A=l,C=p,G=x,it=f,l>=0?(w=c,y=h,R=u,I=d,P=S,D=g,X=m,W=b):(w=h,y=c,R=d,I=u,P=g,D=S,X=b,W=m)):T>=E?(A=c,C=u,G=S,it=m,c>=0?(w=h,y=l,R=d,I=p,P=g,D=x,X=b,W=f):(w=l,y=h,R=p,I=d,P=x,D=g,X=f,W=b)):(A=h,C=d,G=g,it=b,h>=0?(w=l,y=c,R=p,I=u,P=x,D=S,X=f,W=m):(w=c,y=l,R=u,I=p,P=S,D=x,X=m,W=f)),A===0)return null;let Q=w/A,j=y/A,at=1/A,It=R-Q*C,Dt=I-j*C,Ee=P-Q*G,re=D-j*G,ne=X-Q*it,Z=W-j*it,nt=ne*re-Z*Ee,xt=It*Z-Dt*ne,Ht=Ee*Dt-re*It;if(a){if(nt<0||xt<0||Ht<0)return null}else if((nt<0||xt<0||Ht<0)&&(nt>0||xt>0||Ht>0))return null;let pt=nt+xt+Ht;if(pt===0)return null;let Xt=at*(nt*C+xt*G+Ht*it);return(pt>0?Xt<0:Xt>0)?null:this.at(Xt/pt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},la=class extends ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new za,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},qb=new Le,Xr=new cd,Bf=new ar,Yb=new B,Ff=new B,Hf=new B,Gf=new B,ex=new B,Vf=new B,Zb=new B,kf=new B,Mt=class extends Cn{constructor(t=new _n,n=new la){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){let i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);let o=this.morphTargetInfluences;if(s&&o){Vf.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],p=s[l];h!==0&&(ex.fromBufferAttribute(p,t),r?Vf.addScaledVector(ex,h):Vf.addScaledVector(ex.sub(n),h))}n.add(Vf)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bf.copy(i.boundingSphere),Bf.applyMatrix4(s),Xr.copy(t.ray).recast(t.near),!(Bf.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Bf,Yb)===null||Xr.origin.distanceToSquared(Yb)>(t.far-t.near)**2))&&(qb.copy(s).invert(),Xr.copy(t.ray).applyMatrix4(qb),!(i.boundingBox!==null&&Xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Xr)))}_computeIntersections(t,n,i){let a,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(r))for(let x=0,S=u.length;x<S;x++){let g=u[x],f=r[g.materialIndex],m=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=m,T=b;v<T;v+=3){let E=o.getX(v),w=o.getX(v+1),y=o.getX(v+2);a=Xf(this,f,t,i,c,h,p,E,w,y),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{let x=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let g=x,f=S;g<f;g+=3){let m=o.getX(g),b=o.getX(g+1),v=o.getX(g+2);a=Xf(this,r,t,i,c,h,p,m,b,v),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let x=0,S=u.length;x<S;x++){let g=u[x],f=r[g.materialIndex],m=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=m,T=b;v<T;v+=3){let E=v,w=v+1,y=v+2;a=Xf(this,f,t,i,c,h,p,E,w,y),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{let x=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let g=x,f=S;g<f;g+=3){let m=g,b=g+1,v=g+2;a=Xf(this,r,t,i,c,h,p,m,b,v),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}};function oR(e,t,n,i,a,s,r,o){let l;if(t.side===Fn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===cr,o),l===null)return null;kf.copy(o),kf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(kf);return c<n.near||c>n.far?null:{distance:c,point:kf.clone(),object:e}}function Xf(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Ff),e.getVertexPosition(l,Hf),e.getVertexPosition(c,Gf);let h=oR(e,t,n,i,Ff,Hf,Gf,Zb);if(h){let p=new B;ir.getBarycoord(Zb,Ff,Hf,Gf,p),a&&(h.uv=ir.getInterpolatedAttribute(a,o,l,c,p,new jt)),s&&(h.uv1=ir.getInterpolatedAttribute(s,o,l,c,p,new jt)),r&&(h.normal=ir.getInterpolatedAttribute(r,o,l,c,p,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new B,materialIndex:0};ir.getNormal(Ff,Hf,Gf,u.normal),h.face=u,h.barycoord=p}return h}var du=class extends ii{constructor(t=null,n=1,i=1,a,s,r,o,l,c=Rn,h=Rn,p,u){super(null,r,o,l,c,h,a,s,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Al=class extends ni{constructor(t,n,i,a=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},pl=new Le,Jb=new Le,Wf=[],Kb=new Ba,lR=new Le,tu=new Mt,eu=new ar,Zr=class extends Mt{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Al(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,lR)}computeBoundingBox(){let t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ba),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,pl),Kb.copy(t.boundingBox).applyMatrix4(pl),this.boundingBox.union(Kb)}computeBoundingSphere(){let t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ar),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,pl),eu.copy(t.boundingSphere).applyMatrix4(pl),this.boundingSphere.union(eu)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){let i=n.morphTargetInfluences,a=this.morphTexture.source.data.data,s=i.length+1,r=t*s+1;for(let o=0;o<i.length;o++)i[o]=a[r+o]}raycast(t,n){let i=this.matrixWorld,a=this.count;if(tu.geometry=this.geometry,tu.material=this.material,tu.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eu.copy(this.boundingSphere),eu.applyMatrix4(i),t.ray.intersectsSphere(eu)!==!1))for(let s=0;s<a;s++){this.getMatrixAt(s,pl),Jb.multiplyMatrices(i,pl),tu.matrixWorld=Jb,tu.raycast(t,Wf);for(let r=0,o=Wf.length;r<o;r++){let l=Wf[r];l.instanceId=s,l.object=this,n.push(l)}Wf.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new Al(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){let i=n.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new du(new Float32Array(a*this.count),a,this.count,Od,Yi));let s=this.morphTexture.source.data.data,r=0;for(let c=0;c<i.length;c++)r+=i[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=a*t;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wr=new ar,cR=new jt(.5,.5),qf=new B,wl=class{constructor(t=new ra,n=new ra,i=new ra,a=new ra,s=new ra,r=new ra){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=oa,i=!1){let a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],p=s[5],u=s[6],d=s[7],x=s[8],S=s[9],g=s[10],f=s[11],m=s[12],b=s[13],v=s[14],T=s[15];if(a[0].setComponents(c-r,d-h,f-x,T-m).normalize(),a[1].setComponents(c+r,d+h,f+x,T+m).normalize(),a[2].setComponents(c+o,d+p,f+S,T+b).normalize(),a[3].setComponents(c-o,d-p,f-S,T-b).normalize(),i)a[4].setComponents(l,u,g,v).normalize(),a[5].setComponents(c-l,d-u,f-g,T-v).normalize();else if(a[4].setComponents(c-l,d-u,f-g,T-v).normalize(),n===oa)a[5].setComponents(c+l,d+u,f+g,T+v).normalize();else if(n===Sl)a[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(t){Wr.center.set(0,0,0);let n=cR.distanceTo(t.center);return Wr.radius=.7071067811865476+n,Wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(t){let n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let a=n[i];if(qf.x=a.normal.x>0?t.max.x:t.min.x,qf.y=a.normal.y>0?t.max.y:t.min.y,qf.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(qf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pu=class extends ii{constructor(t=[],n=ur,i,a,s,r,o,l,c,h){super(t,n,i,a,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Jr=class extends ii{constructor(t,n,i,a,s,r,o,l,c){super(t,n,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var sr=class extends ii{constructor(t,n,i=fa,a,s,r,o=Rn,l=Rn,c,h=Ia,p=1){if(h!==Ia&&h!==fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,a,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},ud=class extends sr{constructor(t,n=fa,i=ur,a,s,r=Rn,o=Rn,l,c=Ia){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,a,s,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},mu=class extends ii{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Wi=class e extends _n{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};let o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],h=[],p=[],u=0,d=0;x("z","y","x",-1,-1,i,n,t,r,s,0),x("z","y","x",1,-1,i,n,-t,r,s,1),x("x","z","y",1,1,t,i,n,a,r,2),x("x","z","y",1,-1,t,i,-n,a,r,3),x("x","y","z",1,-1,t,n,i,a,s,4),x("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(p,2));function x(S,g,f,m,b,v,T,E,w,y,A){let R=v/w,I=T/y,C=v/2,P=T/2,D=E/2,G=w+1,X=y+1,W=0,it=0,Q=new B;for(let j=0;j<X;j++){let at=j*I-P;for(let It=0;It<G;It++){let Dt=It*R-C;Q[S]=Dt*m,Q[g]=at*b,Q[f]=D,c.push(Q.x,Q.y,Q.z),Q[S]=0,Q[g]=0,Q[f]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),p.push(It/w),p.push(1-j/y),W+=1}}for(let j=0;j<y;j++)for(let at=0;at<w;at++){let It=u+at+G*j,Dt=u+at+G*(j+1),Ee=u+(at+1)+G*(j+1),re=u+(at+1)+G*j;l.push(It,Dt,re),l.push(Dt,Ee,re),it+=6}o.addGroup(d,it,A),d+=it,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ps=class e extends _n{constructor(t=1,n=1,i=4,a=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:n,capSegments:i,radialSegments:a,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),a=Math.max(3,Math.floor(a)),s=Math.max(1,Math.floor(s));let r=[],o=[],l=[],c=[],h=n/2,p=Math.PI/2*t,u=n,d=2*p+u,x=i*2+s,S=a+1,g=new B,f=new B;for(let m=0;m<=x;m++){let b=0,v=0,T=0,E=0;if(m<=i){let A=m/i,R=A*Math.PI/2;v=-h-t*Math.cos(R),T=t*Math.sin(R),E=-t*Math.cos(R),b=A*p}else if(m<=i+s){let A=(m-i)/s;v=-h+A*n,T=t,E=0,b=p+A*u}else{let A=(m-i-s)/i,R=A*Math.PI/2;v=h+t*Math.sin(R),T=t*Math.cos(R),E=t*Math.sin(R),b=p+u+A*p}let w=Math.max(0,Math.min(1,b/d)),y=0;m===0?y=.5/a:m===x&&(y=-.5/a);for(let A=0;A<=a;A++){let R=A/a,I=R*Math.PI*2,C=Math.sin(I),P=Math.cos(I);f.x=-T*P,f.y=v,f.z=T*C,o.push(f.x,f.y,f.z),g.set(-T*P,E,T*C),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+y,w)}if(m>0){let A=(m-1)*S;for(let R=0;R<a;R++){let I=A+R,C=A+R+1,P=m*S+R,D=m*S+R+1;r.push(I,C,P),r.push(C,D,P)}}}this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Rl=class e extends _n{constructor(t=1,n=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:a},n=Math.max(3,n);let s=[],r=[],o=[],l=[],c=new B,h=new jt;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=n;p++,u+=3){let d=i+p/n*a;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ye=class e extends _n{constructor(t=1,n=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};let c=this;a=Math.floor(a),s=Math.floor(s);let h=[],p=[],u=[],d=[],x=0,S=[],g=i/2,f=0;m(),r===!1&&(t>0&&b(!0),n>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new me(p,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(d,2));function m(){let v=new B,T=new B,E=0,w=(n-t)/i;for(let y=0;y<=s;y++){let A=[],R=y/s,I=R*(n-t)+t;for(let C=0;C<=a;C++){let P=C/a,D=P*l+o,G=Math.sin(D),X=Math.cos(D);T.x=I*G,T.y=-R*i+g,T.z=I*X,p.push(T.x,T.y,T.z),v.set(G,w,X).normalize(),u.push(v.x,v.y,v.z),d.push(P,1-R),A.push(x++)}S.push(A)}for(let y=0;y<a;y++)for(let A=0;A<s;A++){let R=S[A][y],I=S[A+1][y],C=S[A+1][y+1],P=S[A][y+1];(t>0||A!==0)&&(h.push(R,I,P),E+=3),(n>0||A!==s-1)&&(h.push(I,C,P),E+=3)}c.addGroup(f,E,0),f+=E}function b(v){let T=x,E=new jt,w=new B,y=0,A=v===!0?t:n,R=v===!0?1:-1;for(let C=1;C<=a;C++)p.push(0,g*R,0),u.push(0,R,0),d.push(.5,.5),x++;let I=x;for(let C=0;C<=a;C++){let D=C/a*l+o,G=Math.cos(D),X=Math.sin(D);w.x=A*X,w.y=g*R,w.z=A*G,p.push(w.x,w.y,w.z),u.push(0,R,0),E.x=G*.5+.5,E.y=X*.5*R+.5,d.push(E.x,E.y),x++}for(let C=0;C<a;C++){let P=T+C,D=I+C;v===!0?h.push(D,D+1,P):h.push(D+1,D,P),y+=3}c.addGroup(f,y,v===!0?1:2),f+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ca=class e extends Ye{constructor(t=1,n=1,i=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,t,n,i,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hd=class e extends _n{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};let s=[],r=[];o(a),c(i),h(),this.setAttribute("position",new me(s,3)),this.setAttribute("normal",new me(s.slice(),3)),this.setAttribute("uv",new me(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(m){let b=new B,v=new B,T=new B;for(let E=0;E<n.length;E+=3)d(n[E+0],b),d(n[E+1],v),d(n[E+2],T),l(b,v,T,m)}function l(m,b,v,T){let E=T+1,w=[];for(let y=0;y<=E;y++){w[y]=[];let A=m.clone().lerp(v,y/E),R=b.clone().lerp(v,y/E),I=E-y;for(let C=0;C<=I;C++)C===0&&y===E?w[y][C]=A:w[y][C]=A.clone().lerp(R,C/I)}for(let y=0;y<E;y++)for(let A=0;A<2*(E-y)-1;A++){let R=Math.floor(A/2);A%2===0?(u(w[y][R+1]),u(w[y+1][R]),u(w[y][R])):(u(w[y][R+1]),u(w[y+1][R+1]),u(w[y+1][R]))}}function c(m){let b=new B;for(let v=0;v<s.length;v+=3)b.x=s[v+0],b.y=s[v+1],b.z=s[v+2],b.normalize().multiplyScalar(m),s[v+0]=b.x,s[v+1]=b.y,s[v+2]=b.z}function h(){let m=new B;for(let b=0;b<s.length;b+=3){m.x=s[b+0],m.y=s[b+1],m.z=s[b+2];let v=g(m)/2/Math.PI+.5,T=f(m)/Math.PI+.5;r.push(v,1-T)}x(),p()}function p(){for(let m=0;m<r.length;m+=6){let b=r[m+0],v=r[m+2],T=r[m+4],E=Math.max(b,v,T),w=Math.min(b,v,T);E>.9&&w<.1&&(b<.2&&(r[m+0]+=1),v<.2&&(r[m+2]+=1),T<.2&&(r[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function d(m,b){let v=m*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function x(){let m=new B,b=new B,v=new B,T=new B,E=new jt,w=new jt,y=new jt;for(let A=0,R=0;A<s.length;A+=9,R+=6){m.set(s[A+0],s[A+1],s[A+2]),b.set(s[A+3],s[A+4],s[A+5]),v.set(s[A+6],s[A+7],s[A+8]),E.set(r[R+0],r[R+1]),w.set(r[R+2],r[R+3]),y.set(r[R+4],r[R+5]),T.copy(m).add(b).add(v).divideScalar(3);let I=g(T);S(E,R+0,m,I),S(w,R+2,b,I),S(y,R+4,v,I)}}function S(m,b,v,T){T<0&&m.x===1&&(r[b]=m.x-1),v.x===0&&v.z===0&&(r[b]=T/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ms=class e extends hd{constructor(t=1,n=0){let i=(1+Math.sqrt(5))/2,a=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}};var ua=class e extends _n{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};let s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,p=t/o,u=n/l,d=[],x=[],S=[],g=[];for(let f=0;f<h;f++){let m=f*u-r;for(let b=0;b<c;b++){let v=b*p-s;x.push(v,-m,0),S.push(0,0,1),g.push(b/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){let b=m+c*f,v=m+c*(f+1),T=m+1+c*(f+1),E=m+1+c*f;d.push(b,v,E),d.push(v,T,E)}this.setIndex(d),this.setAttribute("position",new me(x,3)),this.setAttribute("normal",new me(S,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},gu=class e extends _n{constructor(t=.5,n=1,i=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:r},i=Math.max(3,i),a=Math.max(1,a);let o=[],l=[],c=[],h=[],p=t,u=(n-t)/a,d=new B,x=new jt;for(let S=0;S<=a;S++){for(let g=0;g<=i;g++){let f=s+g/i*r;d.x=p*Math.cos(f),d.y=p*Math.sin(f),l.push(d.x,d.y,d.z),c.push(0,0,1),x.x=(d.x/n+1)/2,x.y=(d.y/n+1)/2,h.push(x.x,x.y)}p+=u}for(let S=0;S<a;S++){let g=S*(i+1);for(let f=0;f<i;f++){let m=f+g,b=m,v=m+i+1,T=m+i+2,E=m+1;o.push(b,v,E),o.push(v,T,E)}}this.setIndex(o),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Kr=class e extends _n{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,h=[],p=new B,u=new B,d=[],x=[],S=[],g=[];for(let f=0;f<=i;f++){let m=[],b=f/i,v=r+b*o,T=t*Math.cos(v),E=Math.sqrt(t*t-T*T),w=0;f===0&&r===0?w=.5/n:f===i&&l===Math.PI&&(w=-.5/n);for(let y=0;y<=n;y++){let A=y/n,R=a+A*s;p.x=-E*Math.cos(R),p.y=T,p.z=E*Math.sin(R),x.push(p.x,p.y,p.z),u.copy(p).normalize(),S.push(u.x,u.y,u.z),g.push(A+w,1-b),m.push(c++)}h.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){let b=h[f][m+1],v=h[f][m],T=h[f+1][m],E=h[f+1][m+1];(f!==0||r>0)&&d.push(b,v,E),(f!==i-1||l<Math.PI)&&d.push(v,T,E)}this.setIndex(d),this.setAttribute("position",new me(x,3)),this.setAttribute("normal",new me(S,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qi=class e extends _n{constructor(t=1,n=.4,i=12,a=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:a,arc:s,thetaStart:r,thetaLength:o},i=Math.floor(i),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=new B,d=new B,x=new B;for(let S=0;S<=i;S++){let g=r+S/i*o;for(let f=0;f<=a;f++){let m=f/a*s;d.x=(t+n*Math.cos(g))*Math.cos(m),d.y=(t+n*Math.cos(g))*Math.sin(m),d.z=n*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(m),u.y=t*Math.sin(m),x.subVectors(d,u).normalize(),h.push(x.x,x.y,x.z),p.push(f/a),p.push(S/i)}}for(let S=1;S<=i;S++)for(let g=1;g<=a;g++){let f=(a+1)*S+g-1,m=(a+1)*(S-1)+g-1,b=(a+1)*(S-1)+g,v=(a+1)*S+g;l.push(f,m,v),l.push(m,b,v)}this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function to(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let a=e[n][i];if(Qb(a))a.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(Qb(a[0])){let s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function Yn(e){let t={};for(let n=0;n<e.length;n++){let i=to(e[n]);for(let a in i)t[a]=i[a]}return t}function Qb(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function uR(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ix(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var VM={clone:to,merge:Yn},hR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ri=class extends ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hR,this.fragmentShader=fR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=uR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let a in this.uniforms){let r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let a=t.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new Zt().setHex(a.value);break;case"v2":this.uniforms[i].value=new jt().fromArray(a.value);break;case"v3":this.uniforms[i].value=new B().fromArray(a.value);break;case"v4":this.uniforms[i].value=new je().fromArray(a.value);break;case"m3":this.uniforms[i].value=new qt().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Le().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fd=class extends Ri{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},se=class extends ds{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new za,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var xu=class extends ds{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new za,this.combine=Rd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},dd=class extends ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pd=class extends ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ml(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function nx(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var rr=class{constructor(t,n,i,a){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,a=n[i],s=n[i-1];t:{e:{let r;n:{i:if(!(t<a)){for(let o=i+2;;){if(a===void 0){if(t<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=a,a=n[++i],t<a)break e}r=n.length;break n}if(!(t>=s)){let o=n[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=s,s=n[--i-1],t>=s)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(a=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,a)}return this.interpolate_(i,s,t,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,a=this.valueSize,s=t*a;for(let r=0;r!==a;++r)n[r]=i[s+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},md=class extends rr{constructor(t,n,i,a){super(t,n,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sx,endingEnd:sx}}intervalChanged_(t,n,i){let a=this.parameterPositions,s=t-2,r=t+1,o=a[s],l=a[r];if(o===void 0)switch(this.getSettings_().endingStart){case rx:s=t,o=2*n-i;break;case ox:s=a.length-2,o=n+a[s]-a[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rx:r=t,l=2*i-n;break;case ox:r=1,l=i+a[1]-a[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(i-n)/(a-n),S=x*x,g=S*x,f=-u*g+2*u*S-u*x,m=(1+u)*g+(-1.5-2*u)*S+(-.5+u)*x+1,b=(-1-d)*g+(1.5+d)*S+.5*x,v=d*g-d*S;for(let T=0;T!==o;++T)s[T]=f*r[h+T]+m*r[c+T]+b*r[l+T]+v*r[p+T];return s}},gd=class extends rr{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(a-n),p=1-h;for(let u=0;u!==o;++u)s[u]=r[c+u]*p+r[l+u]*h;return s}},xd=class extends rr{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t){return this.copySampleValue_(t-1)}},vd=class extends rr{interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let x=(i-n)/(a-n),S=1-x;for(let g=0;g!==o;++g)s[g]=r[c+g]*S+r[l+g]*x;return s}let u=o*2,d=t-1;for(let x=0;x!==o;++x){let S=r[c+x],g=r[l+x],f=d*u+x*2,m=p[f],b=p[f+1],v=t*u+x*2,T=h[v],E=h[v+1],w=pR(i,n,m,T,a);s[x]=kM(w,S,b,E,g)}return s}};function kM(e,t,n,i,a){let s=1-e;return s*s*s*t+3*s*s*e*n+3*s*e*e*i+e*e*e*a}function dR(e,t,n,i,a){let s=1-e;return 3*s*s*(n-t)+6*s*e*(i-n)+3*e*e*(a-i)}function pR(e,t,n,i,a){let s=(e-t)/(a-t);for(let r=0;r<8;r++){let o=kM(s,t,n,i,a)-e;if(Math.abs(o)<1e-10)break;let l=dR(s,t,n,i,a);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var Ci=class{constructor(t,n,i,a){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ml(n,this.TimeBufferType),this.values=ml(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:ml(t.times,Array),values:ml(t.values,Array)};let a=t.getInterpolation();a!==t.DefaultInterpolation&&(i.interpolation=a),nx(t.settings)&&(i.settings={inTangents:ml(t.settings.inTangents,Array),outTangents:ml(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new xd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new md(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new vd(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case au:n=this.InterpolantFactoryMethodDiscrete;break;case sd:n=this.InterpolantFactoryMethodLinear;break;case Jf:n=this.InterpolantFactoryMethodSmooth;break;case ax:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ft("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return au;case this.InterpolantFactoryMethodLinear:return sd;case this.InterpolantFactoryMethodSmooth:return Jf;case this.InterpolantFactoryMethodBezier:return ax}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]*=t;nx(this.settings)&&(jb(this.settings.inTangents,t),jb(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,a=i.length,s=0,r=a-1;for(;s!==a&&i[s]<t;)++s;for(;r!==-1&&i[r]>n;)--r;if(++r,s!==0||r!==a){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,a=this.values,s=i.length;s===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Vt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(a!==void 0&&R2(a))for(let o=0,l=a.length;o!==l;++o){let c=a[o];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===Jf,s=t.length-1,r=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(a)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let x=0;x!==i;++x){let S=n[p+x];if(S!==n[u+x]||S!==n[d+x]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(s>0){t[r]=t[s];for(let o=s*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,a=new i(this.name,t,n);return a.createInterpolant=this.createInterpolant,nx(this.settings)&&(a.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),a}};function jb(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}Ci.prototype.ValueTypeName="";Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=sd;var or=class extends Ci{constructor(t,n,i){super(t,n,i)}};or.prototype.ValueTypeName="bool";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=au;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var yd=class extends Ci{constructor(t,n,i,a){super(t,n,i,a)}};yd.prototype.ValueTypeName="color";var _d=class extends Ci{constructor(t,n,i,a){super(t,n,i,a)}};_d.prototype.ValueTypeName="number";var Sd=class extends rr{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(a-n),c=t*o;for(let h=c+o;c!==h;c+=4)Pa.slerpFlat(s,0,r,c-o,r,c,l);return s}},vu=class extends Ci{constructor(t,n,i,a){super(t,n,i,a)}InterpolantFactoryMethodLinear(t){return new Sd(this.times,this.values,this.getValueSize(),t)}};vu.prototype.ValueTypeName="quaternion";vu.prototype.InterpolantFactoryMethodSmooth=void 0;var lr=class extends Ci{constructor(t,n,i){super(t,n,i)}};lr.prototype.ValueTypeName="string";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=au;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var bd=class extends Ci{constructor(t,n,i,a){super(t,n,i,a)}};bd.prototype.ValueTypeName="vector";var Md=class{constructor(t,n,i){let a=this,s=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&a.onStart!==void 0&&a.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,a.onProgress!==void 0&&a.onProgress(h,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],x=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},XM=new Md,Td=class{constructor(t){this.manager=t!==void 0?t:XM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(a,s){i.load(t,a,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Td.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cl=class extends Cn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},yu=class extends Cl{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}},ix=new Le,$b=new B,tM=new B,_u=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;$b.setFromMatrixPosition(t.matrixWorld),n.position.copy($b),tM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(tM),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,a){ix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ix,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=a?a.z/s.x:1,o=a?a.w/s.y:1,l=a?a.x/s.x:0,c=a?a.y/s.y:0;t.coordinateSystem===Sl||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(ix)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Yf=new B,Zf=new Pa,Ua=new B,Su=class extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yf,Zf,Ua),Ua.x===1&&Ua.y===1&&Ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yf,Zf,Ua.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Yf,Zf,Ua),Ua.x===1&&Ua.y===1&&Ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yf,Zf,Ua.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},nr=new B,eM=new jt,nM=new jt,zn=class extends Su{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Ml*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ml*2*Math.atan(Math.tan(nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-t/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-t/nr.z)}getViewSize(t,n){return this.getViewBounds(t,eM,nM),n.subVectors(nM,eM)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(nu*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var lx=class extends _u{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0}},bu=class extends Cl{constructor(t,n,i=0,a=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new lx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},Nl=class extends Su{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},cx=class extends _u{constructor(){super(new Nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mu=class extends Cl{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new cx}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var gl=-90,xl=1,Ed=class extends Cn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new zn(gl,xl,t,n);a.layers=this.layers,this.add(a);let s=new zn(gl,xl,t,n);s.layers=this.layers,this.add(s);let r=new zn(gl,xl,t,n);r.layers=this.layers,this.add(r);let o=new zn(gl,xl,t,n);o.layers=this.layers,this.add(o);let l=new zn(gl,xl,t,n);l.layers=this.layers,this.add(l);let c=new zn(gl,xl,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(let c of n)this.remove(c);if(t===oa)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,u,d),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Ad=class extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ox="\\[\\]\\.:\\/",mR=new RegExp("["+Ox+"]","g"),Px="[^"+Ox+"]",gR="[^"+Ox.replace("\\.","")+"]",xR=/((?:WC+[\/:])*)/.source.replace("WC",Px),vR=/(WCOD+)?/.source.replace("WCOD",gR),yR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Px),_R=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Px),SR=new RegExp("^"+xR+vR+yR+_R+"$"),bR=["material","materials","bones","map"],ux=class{constructor(t,n,i){let a=i||qe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,a)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=i.length;a!==s;++a)i[a].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},qe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mR,"")}static parseTrackName(t){let n=SR.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=i.nodeName.substring(a+1);bR.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)t[n++]=i[a]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,a=n.propertyName,s=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[a];if(r===void 0){let c=n.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=ux;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IU=new Float32Array(1);var Vx=class Vx{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){let s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};Vx.prototype.isMatrix2=!0;var hx=Vx;function zx(e,t,n,i){let a=MR(i);switch(n){case Cx:return e*t;case Od:return e*t/a.components*a.byteLength;case Pd:return e*t/a.components*a.byteLength;case dr:return e*t*2/a.components*a.byteLength;case zd:return e*t*2/a.components*a.byteLength;case Nx:return e*t*3/a.components*a.byteLength;case Zi:return e*t*4/a.components*a.byteLength;case Bd:return e*t*4/a.components*a.byteLength;case wu:case Ru:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Cu:case Nu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hd:case Vd:return Math.max(e,16)*Math.max(t,8)/4;case Fd:case Gd:return Math.max(e,8)*Math.max(t,8)/2;case kd:case Xd:case qd:case Yd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Wd:case Du:case Zd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Kd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Qd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case jd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case $d:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case tp:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ep:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case np:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ip:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ap:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case sp:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case rp:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case op:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case lp:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case cp:case up:case hp:return Math.ceil(e/4)*Math.ceil(t/4)*16;case fp:case dp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Uu:case pp:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function MR(e){switch(e){case fi:case Ex:return{byteLength:1,components:1};case Ll:case Ax:case da:return{byteLength:2,components:1};case Ld:case Id:return{byteLength:2,components:4};case fa:case Ud:case Yi:return{byteLength:4,components:1};case wx:case Rx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function fT(){let e=null,t=!1,n=null,i=null;function a(s,r){i=e.requestAnimationFrame(a),n(s,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function DR(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((d,x)=>d.start-x.start);let u=0;for(let d=1;d<p.length;d++){let x=p[u],S=p[d];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++u,p[u]=S)}p.length=u+1;for(let d=0,x=p.length;d<x;d++){let S=p[d];e.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var UR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,IR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,GR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,WR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,YR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ZR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$R=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,t3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,e3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,n3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,i3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,a3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l3="gl_FragColor = linearToOutputTexel( gl_FragColor );",c3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,h3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,f3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,d3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,m3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,T3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,E3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,N3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,D3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,U3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,O3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,V3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,J3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Q3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,j3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,eC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_C=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,UC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,VC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$C=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:UR,alphahash_pars_fragment:LR,alphamap_fragment:IR,alphamap_pars_fragment:OR,alphatest_fragment:PR,alphatest_pars_fragment:zR,aomap_fragment:BR,aomap_pars_fragment:FR,batching_pars_vertex:HR,batching_vertex:GR,begin_vertex:VR,beginnormal_vertex:kR,bsdfs:XR,iridescence_fragment:WR,bumpmap_pars_fragment:qR,clipping_planes_fragment:YR,clipping_planes_pars_fragment:ZR,clipping_planes_pars_vertex:JR,clipping_planes_vertex:KR,color_fragment:QR,color_pars_fragment:jR,color_pars_vertex:$R,color_vertex:t3,common:e3,cube_uv_reflection_fragment:n3,defaultnormal_vertex:i3,displacementmap_pars_vertex:a3,displacementmap_vertex:s3,emissivemap_fragment:r3,emissivemap_pars_fragment:o3,colorspace_fragment:l3,colorspace_pars_fragment:c3,envmap_fragment:u3,envmap_common_pars_fragment:h3,envmap_pars_fragment:f3,envmap_pars_vertex:d3,envmap_physical_pars_fragment:T3,envmap_vertex:p3,fog_vertex:m3,fog_pars_vertex:g3,fog_fragment:x3,fog_pars_fragment:v3,gradientmap_pars_fragment:y3,lightmap_pars_fragment:_3,lights_lambert_fragment:S3,lights_lambert_pars_fragment:b3,lights_pars_begin:M3,lights_toon_fragment:E3,lights_toon_pars_fragment:A3,lights_phong_fragment:w3,lights_phong_pars_fragment:R3,lights_physical_fragment:C3,lights_physical_pars_fragment:N3,lights_fragment_begin:D3,lights_fragment_maps:U3,lights_fragment_end:L3,lightprobes_pars_fragment:I3,logdepthbuf_fragment:O3,logdepthbuf_pars_fragment:P3,logdepthbuf_pars_vertex:z3,logdepthbuf_vertex:B3,map_fragment:F3,map_pars_fragment:H3,map_particle_fragment:G3,map_particle_pars_fragment:V3,metalnessmap_fragment:k3,metalnessmap_pars_fragment:X3,morphinstance_vertex:W3,morphcolor_vertex:q3,morphnormal_vertex:Y3,morphtarget_pars_vertex:Z3,morphtarget_vertex:J3,normal_fragment_begin:K3,normal_fragment_maps:Q3,normal_pars_fragment:j3,normal_pars_vertex:$3,normal_vertex:tC,normalmap_pars_fragment:eC,clearcoat_normal_fragment_begin:nC,clearcoat_normal_fragment_maps:iC,clearcoat_pars_fragment:aC,iridescence_pars_fragment:sC,opaque_fragment:rC,packing:oC,premultiplied_alpha_fragment:lC,project_vertex:cC,dithering_fragment:uC,dithering_pars_fragment:hC,roughnessmap_fragment:fC,roughnessmap_pars_fragment:dC,shadowmap_pars_fragment:pC,shadowmap_pars_vertex:mC,shadowmap_vertex:gC,shadowmask_pars_fragment:xC,skinbase_vertex:vC,skinning_pars_vertex:yC,skinning_vertex:_C,skinnormal_vertex:SC,specularmap_fragment:bC,specularmap_pars_fragment:MC,tonemapping_fragment:TC,tonemapping_pars_fragment:EC,transmission_fragment:AC,transmission_pars_fragment:wC,uv_pars_fragment:RC,uv_pars_vertex:CC,uv_vertex:NC,worldpos_vertex:DC,background_vert:UC,background_frag:LC,backgroundCube_vert:IC,backgroundCube_frag:OC,cube_vert:PC,cube_frag:zC,depth_vert:BC,depth_frag:FC,distance_vert:HC,distance_frag:GC,equirect_vert:VC,equirect_frag:kC,linedashed_vert:XC,linedashed_frag:WC,meshbasic_vert:qC,meshbasic_frag:YC,meshlambert_vert:ZC,meshlambert_frag:JC,meshmatcap_vert:KC,meshmatcap_frag:QC,meshnormal_vert:jC,meshnormal_frag:$C,meshphong_vert:tN,meshphong_frag:eN,meshphysical_vert:nN,meshphysical_frag:iN,meshtoon_vert:aN,meshtoon_frag:sN,points_vert:rN,points_frag:oN,shadow_vert:lN,shadow_frag:cN,sprite_vert:uN,sprite_frag:hN},gt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Va={basic:{uniforms:Yn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Yn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Yn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Yn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Yn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Yn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Yn([gt.points,gt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Yn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Yn([gt.common,gt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Yn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Yn([gt.sprite,gt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:Yn([gt.common,gt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:Yn([gt.lights,gt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Va.physical={uniforms:Yn([Va.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var xp={r:0,b:0,g:0},fN=new Le,dT=new qt;dT.set(-1,0,0,0,1,0,0,0,1);function dN(e,t,n,i,a,s){let r=new Zt(0),o=a===!0?0:1,l,c,h=null,p=0,u=null;function d(m){let b=m.isScene===!0?m.background:null;if(b&&b.isTexture){let v=m.backgroundBlurriness>0;b=t.get(b,v)}return b}function x(m){let b=!1,v=d(m);v===null?g(r,o):v&&v.isColor&&(g(v,1),b=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function S(m,b){let v=d(b);v&&(v.isCubeTexture||v.mapping===Eu)?(c===void 0&&(c=new Mt(new Wi(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:to(Va.backgroundCube.uniforms),vertexShader:Va.backgroundCube.vertexShader,fragmentShader:Va.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fN.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dT),c.material.toneMapped=fe.getTransfer(v.colorSpace)!==Re,(h!==v||p!==v.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Mt(new ua(2,2),new Ri({name:"BackgroundMaterial",uniforms:to(Va.background.uniforms),vertexShader:Va.background.vertexShader,fragmentShader:Va.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=fe.getTransfer(v.colorSpace)!==Re,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=v,p=v.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,b){m.getRGB(xp,Ix(e)),n.buffers.color.setClear(xp.r,xp.g,xp.b,b,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,b=1){r.set(m),o=b,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:x,addToRenderList:S,dispose:f}}function pN(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null),s=a,r=!1;function o(I,C,P,D,G){let X=!1,W=p(I,D,P,C);s!==W&&(s=W,c(s.object)),X=d(I,D,P,G),X&&x(I,D,P,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,v(I,C,P,D),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function h(I){return e.deleteVertexArray(I)}function p(I,C,P,D){let G=D.wireframe===!0,X=i[C.id];X===void 0&&(X={},i[C.id]=X);let W=I.isInstancedMesh===!0?I.id:0,it=X[W];it===void 0&&(it={},X[W]=it);let Q=it[P.id];Q===void 0&&(Q={},it[P.id]=Q);let j=Q[G];return j===void 0&&(j=u(l()),Q[G]=j),j}function u(I){let C=[],P=[],D=[];for(let G=0;G<n;G++)C[G]=0,P[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:D,object:I,attributes:{},index:null}}function d(I,C,P,D){let G=s.attributes,X=C.attributes,W=0,it=P.getAttributes();for(let Q in it)if(it[Q].location>=0){let at=G[Q],It=X[Q];if(It===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(It=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(It=I.instanceColor)),at===void 0||at.attribute!==It||It&&at.data!==It.data)return!0;W++}return s.attributesNum!==W||s.index!==D}function x(I,C,P,D){let G={},X=C.attributes,W=0,it=P.getAttributes();for(let Q in it)if(it[Q].location>=0){let at=X[Q];at===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(at=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(at=I.instanceColor));let It={};It.attribute=at,at&&at.data&&(It.data=at.data),G[Q]=It,W++}s.attributes=G,s.attributesNum=W,s.index=D}function S(){let I=s.newAttributes;for(let C=0,P=I.length;C<P;C++)I[C]=0}function g(I){f(I,0)}function f(I,C){let P=s.newAttributes,D=s.enabledAttributes,G=s.attributeDivisors;P[I]=1,D[I]===0&&(e.enableVertexAttribArray(I),D[I]=1),G[I]!==C&&(e.vertexAttribDivisor(I,C),G[I]=C)}function m(){let I=s.newAttributes,C=s.enabledAttributes;for(let P=0,D=C.length;P<D;P++)C[P]!==I[P]&&(e.disableVertexAttribArray(P),C[P]=0)}function b(I,C,P,D,G,X,W){W===!0?e.vertexAttribIPointer(I,C,P,G,X):e.vertexAttribPointer(I,C,P,D,G,X)}function v(I,C,P,D){S();let G=D.attributes,X=P.getAttributes(),W=C.defaultAttributeValues;for(let it in X){let Q=X[it];if(Q.location>=0){let j=G[it];if(j===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let at=j.normalized,It=j.itemSize,Dt=t.get(j);if(Dt===void 0)continue;let Ee=Dt.buffer,re=Dt.type,ne=Dt.bytesPerElement,Z=re===e.INT||re===e.UNSIGNED_INT||j.gpuType===Ud;if(j.isInterleavedBufferAttribute){let nt=j.data,xt=nt.stride,Ht=j.offset;if(nt.isInstancedInterleavedBuffer){for(let pt=0;pt<Q.locationSize;pt++)f(Q.location+pt,nt.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let pt=0;pt<Q.locationSize;pt++)g(Q.location+pt);e.bindBuffer(e.ARRAY_BUFFER,Ee);for(let pt=0;pt<Q.locationSize;pt++)b(Q.location+pt,It/Q.locationSize,re,at,xt*ne,(Ht+It/Q.locationSize*pt)*ne,Z)}else{if(j.isInstancedBufferAttribute){for(let nt=0;nt<Q.locationSize;nt++)f(Q.location+nt,j.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let nt=0;nt<Q.locationSize;nt++)g(Q.location+nt);e.bindBuffer(e.ARRAY_BUFFER,Ee);for(let nt=0;nt<Q.locationSize;nt++)b(Q.location+nt,It/Q.locationSize,re,at,It*ne,It/Q.locationSize*nt*ne,Z)}}else if(W!==void 0){let at=W[it];if(at!==void 0)switch(at.length){case 2:e.vertexAttrib2fv(Q.location,at);break;case 3:e.vertexAttrib3fv(Q.location,at);break;case 4:e.vertexAttrib4fv(Q.location,at);break;default:e.vertexAttrib1fv(Q.location,at)}}}}m()}function T(){A();for(let I in i){let C=i[I];for(let P in C){let D=C[P];for(let G in D){let X=D[G];for(let W in X)h(X[W].object),delete X[W];delete D[G]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;let C=i[I.id];for(let P in C){let D=C[P];for(let G in D){let X=D[G];for(let W in X)h(X[W].object),delete X[W];delete D[G]}}delete i[I.id]}function w(I){for(let C in i){let P=i[C];for(let D in P){let G=P[D];if(G[I.id]===void 0)continue;let X=G[I.id];for(let W in X)h(X[W].object),delete X[W];delete G[I.id]}}}function y(I){for(let C in i){let P=i[C],D=I.isInstancedMesh===!0?I.id:0,G=P[D];if(G!==void 0){for(let X in G){let W=G[X];for(let it in W)h(W[it].object),delete W[it];delete G[X]}delete P[D],Object.keys(P).length===0&&delete i[C]}}}function A(){R(),r=!0,s!==a&&(s=a,c(s.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:g,disableUnusedAttributes:m}}function mN(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function gN(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(w){return!(w!==Zi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let y=w===da&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==fi&&w!==Yi&&!y&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:b,maxFragmentUniforms:v,maxSamples:T,samples:E}}function xN(e){let t=this,n=null,i=0,a=!1,s=!1,r=new ra,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||a;return a=u,i=p.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,d){let x=p.clippingPlanes,S=p.clipIntersection,g=p.clipShadows,f=e.get(p);if(!a||x===null||x.length===0||s&&!g)s?h(null):c();else{let m=s?0:i,b=m*4,v=f.clippingState||null;l.value=v,v=h(x,u,b,d);for(let T=0;T!==b;++T)v[T]=n[T];f.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,d,x){let S=p!==null?p.length:0,g=null;if(S!==0){if(g=l.value,x!==!0||g===null){let f=d+S*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let b=0,v=d;b!==S;++b,v+=4)r.copy(p[b]).applyMatrix4(m,o),r.normal.toArray(g,v),g[v+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}var zl=4,vN=6,yN=20,_N=256,Iu=new Nl,WM=new Zt,kx=null,Xx=0,Wx=0,qx=!1,SN=new B,eo=new B,Fl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){let{size:r=256,position:o=SN}=s;kx=this._renderer.getRenderTarget(),Xx=this._renderer.getActiveCubeFace(),Wx=this._renderer.getActiveMipmapLevel(),qx=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ZM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=YM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kx,Xx,Wx),this._renderer.xr.enabled=qx,t.scissorTest=!1,Pl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ur||t.mapping===$r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kx=this._renderer.getRenderTarget(),Xx=this._renderer.getActiveCubeFace(),Wx=this._renderer.getActiveMipmapLevel(),qx=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:da,format:Zi,colorSpace:su,depthBuffer:!1},a=qM(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qM(t,n,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=bN(s)),this._blurMaterial=TN(s,t,n),this._ggxMaterial=MN(s,t,n)}return a}_compileMaterial(t){let n=new Mt(new _n,t);this._renderer.compile(n,Iu)}_sceneToCubeUV(t,n,i,a,s){let l=new zn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(WM),p.toneMapping=ha,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mt(new Wi,new la({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,g=S.material,f=!1,m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,f=!0):(g.color.copy(WM),f=!0);for(let b=0;b<6;b++){let v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));let T=this._cubeSize;Pl(a,v*T,b>2?T:0,T,T),p.setRenderTarget(a),f&&p.render(S,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=m}_textureToCubeUV(t,n){let i=this._renderer,a=t.mapping===ur||t.mapping===$r;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ZM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=YM());let s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;Pl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Iu)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){let a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,d=p*u,{_lodMax:x}=this,S=this._sizeLods[i],g=3*S*(i>x-zl?i-x+zl:0),f=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=x-n,Pl(s,g,f,3*S,2*S),a.setRenderTarget(s),a.render(o,Iu),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Pl(t,g,f,3*S,2*S),a.setRenderTarget(t),a.render(o,Iu)}_blur(t,n,i,a){let s=this._pingPongRenderTarget,r=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(t,s,n,i,r),this._blurPass(s,t,i,i,r)}_blurPass(t,n,i,a,s){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[a],p=3*h*(a>this._lodMax-zl?a-this._lodMax+zl:0),u=4*(this._cubeSize-h);Pl(n,p,u,3*h,2*h),r.setRenderTarget(n),r.render(l,Iu)}};function bN(e){let t=[],n=[],i=e,a=e-zl+1+vN;for(let s=0;s<a;s++){let r=Math.pow(2,i);t.push(r);let o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,d=3,x=new Float32Array(d*u*p),S=new Float32Array(d*u*p);for(let f=0;f<p;f++){let m=f%3*2/3-1,b=f>2?0:-1,v=[m,b,0,m+2/3,b,0,m+2/3,b+1,0,m,b,0,m+2/3,b+1,0,m,b+1,0];x.set(v,d*u*f);for(let T=0;T<u;T++){let E=h[T*2]*2-1,w=h[T*2+1]*2-1;f===0?eo.set(1,w,E):f===1?eo.set(-E,1,-w):f===2?eo.set(-E,w,1):f===3?eo.set(-1,w,-E):f===4?eo.set(-E,-1,w):eo.set(E,w,-1),eo.toArray(S,(f*u+T)*d)}}let g=new _n;g.setAttribute("position",new ni(x,d)),g.setAttribute("outputDirection",new ni(S,d)),n.push(new Mt(g,null)),i>zl&&i--}return{lodMeshes:n,sizeLods:t}}function qM(e,t,n){let i=new hi(e,t,n);return i.texture.mapping=Eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pl(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function MN(e,t,n){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_N,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function TN(e,t,n){return new Ri({name:"SphericalGaussianBlur",defines:{SAMPLES:yN,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Sp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function YM(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function ZM(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Sp(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yp=class extends hi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new pu(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Wi(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fn,blending:Ha});s.uniforms.tEquirect.value=n;let r=new Mt(a,s),o=n.minFilter;return n.minFilter===hr&&(n.minFilter=Bn),new Ed(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}};function EN(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,d=!1){return u==null?null:d?r(u):s(u)}function s(u){if(u&&u.isTexture){let d=u.mapping;if(d===Cd||d===Nd)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let S=new yp(x.height);return S.fromEquirectangularTexture(e,u),t.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,x=d===Cd||d===Nd,S=d===ur||d===$r;if(x||S){let g=n.get(u),f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Fl(e)),g=x?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let m=u.image;return x&&m&&m.height>0||S&&m&&l(m)?(i===null&&(i=new Fl(e)),g=x?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Cd?u.mapping=ur:d===Nd&&(u.mapping=$r),u}function l(u){let d=0,x=6;for(let S=0;S<x;S++)u[S]!==void 0&&d++;return d===x}function c(u){let d=u.target;d.removeEventListener("dispose",c);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let x=n.get(d);x!==void 0&&(n.delete(d),x.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function AN(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let a=n(i);return a===null&&qr("WebGLRenderer: "+i+" extension not supported."),a}}}function wN(e,t,n,i){let a={},s=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",r),delete a[u.id];let d=s.get(u);d&&(t.remove(d),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,x=p.attributes.position,S=0;if(x===void 0)return;if(d!==null){let m=d.array;S=d.version;for(let b=0,v=m.length;b<v;b+=3){let T=m[b+0],E=m[b+1],w=m[b+2];u.push(T,E,E,w,w,T)}}else{let m=x.array;S=x.version;for(let b=0,v=m.length/3-1;b<v;b+=3){let T=b+0,E=b+1,w=b+2;u.push(T,E,E,w,w,T)}}let g=new(x.count>=65535?fu:hu)(u,1);g.version=S;let f=s.get(p);f&&t.remove(f),s.set(p,g)}function h(p){let u=s.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function RN(e,t,n){let i;function a(p){i=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,s,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,s,p*r,d),n.update(u,i,d))}function h(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,d);let S=0;for(let g=0;g<d;g++)S+=u[g];n.update(S,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function CN(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:Vt("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function NN(e,t,n){let i=new WeakMap,a=new je;function s(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==p){let A=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],b=0;d===!0&&(b=1),x===!0&&(b=2),S===!0&&(b=3);let v=o.attributes.position.count*b,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*T*4*p),w=new lu(E,v,T,p);w.type=Yi,w.needsUpdate=!0;let y=b*4;for(let R=0;R<p;R++){let I=g[R],C=f[R],P=m[R],D=v*T*4*R;for(let G=0;G<I.count;G++){let X=G*y;d===!0&&(a.fromBufferAttribute(I,G),E[D+X+0]=a.x,E[D+X+1]=a.y,E[D+X+2]=a.z,E[D+X+3]=0),x===!0&&(a.fromBufferAttribute(C,G),E[D+X+4]=a.x,E[D+X+5]=a.y,E[D+X+6]=a.z,E[D+X+7]=0),S===!0&&(a.fromBufferAttribute(P,G),E[D+X+8]=a.x,E[D+X+9]=a.y,E[D+X+10]=a.z,E[D+X+11]=P.itemSize===4?a.w:1)}}u={count:p,texture:w,size:new jt(v,T)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];let x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function DN(e,t,n,i,a){let s=new WeakMap;function r(c){let h=a.render.frame,p=c.geometry,u=t.get(c,p);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}var UN={[vx]:"LINEAR_TONE_MAPPING",[yx]:"REINHARD_TONE_MAPPING",[_x]:"CINEON_TONE_MAPPING",[Tu]:"ACES_FILMIC_TONE_MAPPING",[bx]:"AGX_TONE_MAPPING",[Mx]:"NEUTRAL_TONE_MAPPING",[Sx]:"CUSTOM_TONE_MAPPING"};function LN(e,t,n,i,a,s){let r=new hi(t,n,{type:e,depthBuffer:a,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new _n;c.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new me([0,2,0,0,2,0],2));let h=new fd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Mt(c,h),u=new Nl(-1,1,1,-1,0,1),d=null,x=null,S=!1,g,f=null,m=[],b=!1;this.setSize=function(v,T){r.setSize(v,T),o!==null&&o.setSize(v,T),l!==null&&l.setSize(v,T);for(let E=0;E<m.length;E++){let w=m[E];w.setSize&&w.setSize(v,T)}},this.setEffects=function(v){m=v,b=m.length>0&&m[0].isRenderPass===!0;let T=r.width,E=r.height;m.length>0&&o===null&&(o=new hi(T,E,{type:da,depthBuffer:!1,stencilBuffer:!1}),l=new hi(T,E,{type:da,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<m.length;w++){let y=m[w];y.setSize&&y.setSize(T,E)}},this.begin=function(v,T){if(S||v.toneMapping===ha&&m.length===0)return!1;if(f=T,T!==null){let E=T.width,w=T.height;(r.width!==E||r.height!==w)&&this.setSize(E,w)}return b===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=ha,!0},this.hasRenderPass=function(){return b},this.end=function(v,T){v.toneMapping=g,S=!0;let E=r,w=o;for(let y=0;y<m.length;y++){let A=m[y];A.enabled!==!1&&(A.render(v,w,E,T),A.needsSwap!==!1&&(E=w,w=w===o?l:o))}if(d!==v.outputColorSpace||x!==v.toneMapping){d=v.outputColorSpace,x=v.toneMapping,h.defines={},fe.getTransfer(d)===Re&&(h.defines.SRGB_TRANSFER="");let y=UN[x];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(f),v.render(p,u),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var pT=new ii,Jx=new sr(1,1),mT=new lu,gT=new ld,xT=new pu,JM=[],KM=[],QM=new Float32Array(16),jM=new Float32Array(9),$M=new Float32Array(4);function Hl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let a=t*n,s=JM[a];if(s===void 0&&(s=new Float32Array(a),JM[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function Sn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function bn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function bp(e,t){let n=KM[t];n===void 0&&(n=new Int32Array(t),KM[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function IN(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ON(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;e.uniform2fv(this.addr,t),bn(n,t)}}function PN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Sn(n,t))return;e.uniform3fv(this.addr,t),bn(n,t)}}function zN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;e.uniform4fv(this.addr,t),bn(n,t)}}function BN(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Sn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),bn(n,t)}else{if(Sn(n,i))return;$M.set(i),e.uniformMatrix2fv(this.addr,!1,$M),bn(n,i)}}function FN(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Sn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),bn(n,t)}else{if(Sn(n,i))return;jM.set(i),e.uniformMatrix3fv(this.addr,!1,jM),bn(n,i)}}function HN(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Sn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),bn(n,t)}else{if(Sn(n,i))return;QM.set(i),e.uniformMatrix4fv(this.addr,!1,QM),bn(n,i)}}function GN(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function VN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;e.uniform2iv(this.addr,t),bn(n,t)}}function kN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sn(n,t))return;e.uniform3iv(this.addr,t),bn(n,t)}}function XN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;e.uniform4iv(this.addr,t),bn(n,t)}}function WN(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function qN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;e.uniform2uiv(this.addr,t),bn(n,t)}}function YN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sn(n,t))return;e.uniform3uiv(this.addr,t),bn(n,t)}}function ZN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;e.uniform4uiv(this.addr,t),bn(n,t)}}function JN(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Jx.compareFunction=n.isReversedDepthBuffer()?gp:mp,s=Jx):s=pT,n.setTexture2D(t||s,a)}function KN(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||gT,a)}function QN(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||xT,a)}function jN(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||mT,a)}function $N(e){switch(e){case 5126:return IN;case 35664:return ON;case 35665:return PN;case 35666:return zN;case 35674:return BN;case 35675:return FN;case 35676:return HN;case 5124:case 35670:return GN;case 35667:case 35671:return VN;case 35668:case 35672:return kN;case 35669:case 35673:return XN;case 5125:return WN;case 36294:return qN;case 36295:return YN;case 36296:return ZN;case 35678:case 36198:case 36298:case 36306:case 35682:return JN;case 35679:case 36299:case 36307:return KN;case 35680:case 36300:case 36308:case 36293:return QN;case 36289:case 36303:case 36311:case 36292:return jN}}function tD(e,t){e.uniform1fv(this.addr,t)}function eD(e,t){let n=Hl(t,this.size,2);e.uniform2fv(this.addr,n)}function nD(e,t){let n=Hl(t,this.size,3);e.uniform3fv(this.addr,n)}function iD(e,t){let n=Hl(t,this.size,4);e.uniform4fv(this.addr,n)}function aD(e,t){let n=Hl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function sD(e,t){let n=Hl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function rD(e,t){let n=Hl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function oD(e,t){e.uniform1iv(this.addr,t)}function lD(e,t){e.uniform2iv(this.addr,t)}function cD(e,t){e.uniform3iv(this.addr,t)}function uD(e,t){e.uniform4iv(this.addr,t)}function hD(e,t){e.uniform1uiv(this.addr,t)}function fD(e,t){e.uniform2uiv(this.addr,t)}function dD(e,t){e.uniform3uiv(this.addr,t)}function pD(e,t){e.uniform4uiv(this.addr,t)}function mD(e,t,n){let i=this.cache,a=t.length,s=bp(n,a);Sn(i,s)||(e.uniform1iv(this.addr,s),bn(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Jx:r=pT;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function gD(e,t,n){let i=this.cache,a=t.length,s=bp(n,a);Sn(i,s)||(e.uniform1iv(this.addr,s),bn(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||gT,s[r])}function xD(e,t,n){let i=this.cache,a=t.length,s=bp(n,a);Sn(i,s)||(e.uniform1iv(this.addr,s),bn(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||xT,s[r])}function vD(e,t,n){let i=this.cache,a=t.length,s=bp(n,a);Sn(i,s)||(e.uniform1iv(this.addr,s),bn(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||mT,s[r])}function yD(e){switch(e){case 5126:return tD;case 35664:return eD;case 35665:return nD;case 35666:return iD;case 35674:return aD;case 35675:return sD;case 35676:return rD;case 5124:case 35670:return oD;case 35667:case 35671:return lD;case 35668:case 35672:return cD;case 35669:case 35673:return uD;case 5125:return hD;case 36294:return fD;case 36295:return dD;case 36296:return pD;case 35678:case 36198:case 36298:case 36306:case 35682:return mD;case 35679:case 36299:case 36307:return gD;case 35680:case 36300:case 36308:case 36293:return xD;case 36289:case 36303:case 36311:case 36292:return vD}}var Kx=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$N(n.type)}},Qx=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yD(n.type)}},jx=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let a=this.seq;for(let s=0,r=a.length;s!==r;++s){let o=a[s];o.setValue(t,n[o.id],i)}}},Yx=/(\w+)(\])?(\[|\.)?/g;function tT(e,t){e.seq.push(t),e.map[t.id]=t}function _D(e,t,n){let i=e.name,a=i.length;for(Yx.lastIndex=0;;){let s=Yx.exec(i),r=Yx.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){tT(n,c===void 0?new Kx(o,e,t):new Qx(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new jx(o),tT(n,p)),n=p}}}var Bl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);_D(o,l,this)}let a=[],s=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){let s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){let a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){let o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){let i=[];for(let a=0,s=t.length;a!==s;++a){let r=t[a];r.id in n&&i.push(r)}return i}};function eT(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var SD=37297,bD=0;function MD(e,t){let n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var nT=new qt;function TD(e){fe._getMatrix(nT,fe.workingColorSpace,e);let t=`mat3( ${nT.elements.map(n=>n.toFixed(4))} )`;switch(fe.getTransfer(e)){case ru:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function iT(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+MD(e.getShaderSource(t),o)}else return s}function ED(e,t){let n=TD(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var AD={[vx]:"Linear",[yx]:"Reinhard",[_x]:"Cineon",[Tu]:"ACESFilmic",[bx]:"AgX",[Mx]:"Neutral",[Sx]:"Custom"};function wD(e,t){let n=AD[t];return n===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var vp=new B;function RD(){fe.getLuminanceCoefficients(vp);let e=vp.x.toFixed(4),t=vp.y.toFixed(4),n=vp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CD(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pu).join(`
`)}function ND(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function DD(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let s=e.getActiveAttrib(t,a),r=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Pu(e){return e!==""}function aT(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sT(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var UD=/^[ \t]*#include +<([\w\d./]+)>/gm;function $x(e){return e.replace(UD,ID)}var LD=new Map;function ID(e,t){let n=ee[t];if(n===void 0){let i=LD.get(t);if(i!==void 0)n=ee[i],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return $x(n)}var OD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rT(e){return e.replace(OD,PD)}function PD(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function oT(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var zD={[Qr]:"SHADOWMAP_TYPE_PCF",[Dl]:"SHADOWMAP_TYPE_VSM"};function BD(e){return zD[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var FD={[ur]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE",[Eu]:"ENVMAP_TYPE_CUBE_UV"};function HD(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":FD[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var GD={[$r]:"ENVMAP_MODE_REFRACTION"};function VD(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":GD[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var kD={[Rd]:"ENVMAP_BLENDING_MULTIPLY",[TM]:"ENVMAP_BLENDING_MIX",[EM]:"ENVMAP_BLENDING_ADD"};function XD(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":kD[e.combine]||"ENVMAP_BLENDING_NONE"}function WD(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function qD(e,t,n,i){let a=e.getContext(),s=n.defines,r=n.vertexShader,o=n.fragmentShader,l=BD(n),c=HD(n),h=VD(n),p=XD(n),u=WD(n),d=CD(n),x=ND(s),S=a.createProgram(),g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Pu).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Pu).join(`
`),f.length>0&&(f+=`
`)):(g=[oT(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pu).join(`
`),f=[oT(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ha?"#define TONE_MAPPING":"",n.toneMapping!==ha?ee.tonemapping_pars_fragment:"",n.toneMapping!==ha?wD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,ED("linearToOutputTexel",n.outputColorSpace),RD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Pu).join(`
`)),r=$x(r),r=aT(r,n),r=sT(r,n),o=$x(o),o=aT(o,n),o=sT(o,n),r=rT(r),o=rT(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=m+g+r,v=m+f+o,T=eT(a,a.VERTEX_SHADER,b),E=eT(a,a.FRAGMENT_SHADER,v);a.attachShader(S,T),a.attachShader(S,E),n.index0AttributeName!==void 0?a.bindAttribLocation(S,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function w(I){if(e.debug.checkShaderErrors){let C=a.getProgramInfoLog(S)||"",P=a.getShaderInfoLog(T)||"",D=a.getShaderInfoLog(E)||"",G=C.trim(),X=P.trim(),W=D.trim(),it=!0,Q=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(it=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,S,T,E);else{let j=iT(a,T,"vertex"),at=iT(a,E,"fragment");Vt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+j+`
`+at)}else G!==""?Ft("WebGLProgram: Program Info Log:",G):(X===""||W==="")&&(Q=!1);Q&&(I.diagnostics={runnable:it,programLog:G,vertexShader:{log:X,prefix:g},fragmentShader:{log:W,prefix:f}})}a.deleteShader(T),a.deleteShader(E),y=new Bl(a,S),A=DD(a,S)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(S,SD)),R},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bD++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=E,this}var YD=0,tv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new ev(t),n.set(t,i)),i}},ev=class{constructor(t){this.id=YD++,this.code=t,this.usedTimes=0}};function ZD(e){return e===dr||e===Du||e===Uu}function JD(e,t,n,i,a,s){let r=new cu,o=new tv,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function S(y,A,R,I,C,P){let D=I.fog,G=C.geometry,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,it=t.get(y.envMap||X,W),Q=it&&it.mapping===Eu?it.image.height:null,j=d[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Ft("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let at=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,It=at!==void 0?at.length:0,Dt=0;G.morphAttributes.position!==void 0&&(Dt=1),G.morphAttributes.normal!==void 0&&(Dt=2),G.morphAttributes.color!==void 0&&(Dt=3);let Ee,re,ne,Z;if(j){let Ce=Va[j];Ee=Ce.vertexShader,re=Ce.fragmentShader}else{Ee=y.vertexShader,re=y.fragmentShader;let Ce=o.getVertexShaderStage(y),ge=o.getFragmentShaderStage(y);o.update(y,Ce,ge),ne=Ce.id,Z=ge.id}let nt=e.getRenderTarget(),xt=e.state.buffers.depth.getReversed(),Ht=C.isInstancedMesh===!0,pt=C.isBatchedMesh===!0,Xt=!!y.map,Ze=!!y.matcap,Jt=!!it,ie=!!y.aoMap,Se=!!y.lightMap,Kt=!!y.bumpMap&&y.wireframe===!1,be=!!y.normalMap,cn=!!y.displacementMap,mn=!!y.emissiveMap,Pe=!!y.metalnessMap,Je=!!y.roughnessMap,L=y.anisotropy>0,Bt=y.clearcoat>0,oe=y.dispersion>0,N=y.retroreflectivity>0,_=y.iridescence>0,F=y.sheen>0,q=y.transmission>0,J=L&&!!y.anisotropyMap,ot=Bt&&!!y.clearcoatMap,ht=Bt&&!!y.clearcoatNormalMap,K=Bt&&!!y.clearcoatRoughnessMap,tt=_&&!!y.iridescenceMap,lt=_&&!!y.iridescenceThicknessMap,Et=F&&!!y.sheenColorMap,ct=F&&!!y.sheenRoughnessMap,ft=!!y.specularMap,At=!!y.specularColorMap,Ot=!!y.specularIntensityMap,Yt=q&&!!y.transmissionMap,z=q&&!!y.thicknessMap,dt=!!y.gradientMap,$=!!y.alphaMap,ut=y.alphaTest>0,mt=!!y.alphaHash,st=!!y.extensions,Ut=ha;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ut=e.toneMapping);let wt={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:Ee,fragmentShader:re,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:pt,batchingColor:pt&&C._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&C.instanceColor!==null,instancingMorph:Ht&&C.morphTexture!==null,outputColorSpace:nt===null?e.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xt,matcap:Ze,envMap:Jt,envMapMode:Jt&&it.mapping,envMapCubeUVHeight:Q,aoMap:ie,lightMap:Se,bumpMap:Kt,normalMap:be,displacementMap:cn,emissiveMap:mn,normalMapObjectSpace:be&&y.normalMapType===RM,normalMapTangentSpace:be&&y.normalMapType===Lu,packedNormalMap:be&&y.normalMapType===Lu&&ZD(y.normalMap.format),metalnessMap:Pe,roughnessMap:Je,anisotropy:L,anisotropyMap:J,clearcoat:Bt,clearcoatMap:ot,clearcoatNormalMap:ht,clearcoatRoughnessMap:K,dispersion:oe,retroreflection:N,iridescence:_,iridescenceMap:tt,iridescenceThicknessMap:lt,sheen:F,sheenColorMap:Et,sheenRoughnessMap:ct,specularMap:ft,specularColorMap:At,specularIntensityMap:Ot,transmission:q,transmissionMap:Yt,thicknessMap:z,gradientMap:dt,opaque:y.transparent===!1&&y.blending===Ul&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ut,alphaHash:mt,combine:y.combine,mapUv:Xt&&x(y.map.channel),aoMapUv:ie&&x(y.aoMap.channel),lightMapUv:Se&&x(y.lightMap.channel),bumpMapUv:Kt&&x(y.bumpMap.channel),normalMapUv:be&&x(y.normalMap.channel),displacementMapUv:cn&&x(y.displacementMap.channel),emissiveMapUv:mn&&x(y.emissiveMap.channel),metalnessMapUv:Pe&&x(y.metalnessMap.channel),roughnessMapUv:Je&&x(y.roughnessMap.channel),anisotropyMapUv:J&&x(y.anisotropyMap.channel),clearcoatMapUv:ot&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:ct&&x(y.sheenRoughnessMap.channel),specularMapUv:ft&&x(y.specularMap.channel),specularColorMapUv:At&&x(y.specularColorMap.channel),specularIntensityMapUv:Ot&&x(y.specularIntensityMap.channel),transmissionMapUv:Yt&&x(y.transmissionMap.channel),thicknessMapUv:z&&x(y.thicknessMap.channel),alphaMapUv:$&&x(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(be||L),vertexNormals:!!G.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!G.attributes.uv&&(Xt||$),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||G.attributes.normal===void 0&&be===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xt,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Dt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Xt&&y.map.isVideoTexture===!0&&fe.getTransfer(y.map.colorSpace)===Re,decodeVideoTextureEmissive:mn&&y.emissiveMap.isVideoTexture===!0&&fe.getTransfer(y.emissiveMap.colorSpace)===Re,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fa,flipSided:y.side===Fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:st&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&y.extensions.multiDraw===!0||pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function g(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)A.push(R),A.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(f(A,y),m(A,y),A.push(e.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function f(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function m(y,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.retroreflection&&r.enable(24),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function b(y){let A=d[y.type],R;if(A){let I=Va[A];R=VM.clone(I.uniforms)}else R=y.uniforms;return R}function v(y,A){let R=h.get(A);return R!==void 0?++R.usedTimes:(R=new qD(e,A,y,a),c.push(R),h.set(A,R)),R}function T(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function w(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:b,acquireProgram:v,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:w}}function KD(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function QD(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function lT(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function cT(){let e=[],t=0,n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,x,S,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:x,materialVariant:r(u),groupOrder:S,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=x,m.materialVariant=r(u),m.groupOrder=S,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,d,x,S,g,f,m){m.reversedDepth===!0&&(g=-g);let b=o(u,d,x,S,g,f);x.transmission>0?i.push(b):x.transparent===!0?a.push(b):n.push(b)}function c(u,d,x,S,g,f){let m=o(u,d,x,S,g,f);x.transmission>0?i.unshift(m):x.transparent===!0?a.unshift(m):n.unshift(m)}function h(u,d){n.length>1&&n.sort(u||QD),i.length>1&&i.sort(d||lT),a.length>1&&a.sort(d||lT)}function p(){for(let u=t,d=e.length;u<d;u++){let x=e[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:p,sort:h}}function jD(){let e=new WeakMap;function t(i,a){let s=e.get(i),r;return s===void 0?(r=new cT,e.set(i,[r])):a>=s.length?(r=new cT,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function $D(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new B,color:new Zt};break;case"SpotLight":n={position:new B,direction:new B,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":n={color:new Zt,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function tU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var eU=0;function nU(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function iU(e){let t=new $D,n=tU(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let a=new B,s=new Le,r=new Le;function o(c){let h=0,p=0,u=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let d=0,x=0,S=0,g=0,f=0,m=0,b=0,v=0,T=0,E=0,w=0,y=0,A=0,R=0;c.sort(nU);for(let C=0,P=c.length;C<P;C++){let D=c[C],G=D.color,X=D.intensity,W=D.distance,it=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===dr?it=D.shadow.map.texture:it=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=G.r*X,p+=G.g*X,u+=G.b*X;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(D.sh.coefficients[Q],X);R++}else if(D.isSunLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,at=n.get(D);at.shadowIntensity=j.intensity,at.shadowBias=j.bias,at.shadowNormalBias=j.normalBias,at.shadowRadius=j.radius,at.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[x]=at,i.sunShadowMap[x]=it;let It=j.getViewportCount();for(let Dt=0;Dt<It;Dt++)i.sunShadowMatrix[S+Dt]=j.getMatrix(Dt),i.sunShadowCascade[S+Dt]=j._cascadeData[Dt];S+=It,x++}i.sun[d]=Q,d++}else if(D.isDirectionalLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,at=n.get(D);at.shadowIntensity=j.intensity,at.shadowBias=j.bias,at.shadowNormalBias=j.normalBias,at.shadowRadius=j.radius,at.shadowMapSize=j.mapSize,i.directionalShadow[g]=at,i.directionalShadowMap[g]=it,i.directionalShadowMatrix[g]=D.shadow.matrix,T++}i.directional[g]=Q,g++}else if(D.isSpotLight){let Q=t.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(G).multiplyScalar(X),Q.distance=W,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,i.spot[m]=Q;let j=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,j.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[m]=j.matrix,D.castShadow){let at=n.get(D);at.shadowIntensity=j.intensity,at.shadowBias=j.bias,at.shadowNormalBias=j.normalBias,at.shadowRadius=j.radius,at.shadowMapSize=j.mapSize,i.spotShadow[m]=at,i.spotShadowMap[m]=it,w++}m++}else if(D.isRectAreaLight){let Q=t.get(D);Q.color.copy(G).multiplyScalar(X),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),i.rectArea[b]=Q,b++}else if(D.isPointLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){let j=D.shadow,at=n.get(D);at.shadowIntensity=j.intensity,at.shadowBias=j.bias,at.shadowNormalBias=j.normalBias,at.shadowRadius=j.radius,at.shadowMapSize=j.mapSize,at.shadowCameraNear=j.camera.near,at.shadowCameraFar=j.camera.far,i.pointShadow[f]=at,i.pointShadowMap[f]=it,i.pointShadowMatrix[f]=D.shadow.matrix,E++}i.point[f]=Q,f++}else if(D.isHemisphereLight){let Q=t.get(D);Q.skyColor.copy(D.color).multiplyScalar(X),Q.groundColor.copy(D.groundColor).multiplyScalar(X),i.hemi[v]=Q,v++}}b>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let I=i.hash;(I.sunLength!==d||I.directionalLength!==g||I.pointLength!==f||I.spotLength!==m||I.rectAreaLength!==b||I.hemiLength!==v||I.numSunShadows!==x||I.numDirectionalShadows!==T||I.numPointShadows!==E||I.numSpotShadows!==w||I.numSpotMaps!==y||I.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=g,i.spot.length=m,i.rectArea.length=b,i.point.length=f,i.hemi.length=v,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+y-A,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,I.sunLength=d,I.directionalLength=g,I.pointLength=f,I.spotLength=m,I.rectAreaLength=b,I.hemiLength=v,I.numSunShadows=x,I.numDirectionalShadows=T,I.numPointShadows=E,I.numSpotShadows=w,I.numSpotMaps=y,I.numLightProbes=R,i.version=eU++)}function l(c,h){let p=0,u=0,d=0,x=0,S=0,g=0,f=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let v=c[m];if(v.isSunLight){let T=i.sun[p];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),p++}else if(v.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),u++}else if(v.isSpotLight){let T=i.spot[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),x++}else if(v.isRectAreaLight){let T=i.rectArea[S];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),r.identity(),s.copy(v.matrixWorld),s.premultiply(f),r.extractRotation(s),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),S++}else if(v.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),d++}else if(v.isHemisphereLight){let T=i.hemi[g];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:i}}function uT(e){let t=new iU(e),n=[],i=[],a=[];function s(u){p.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function aU(e){let t=new WeakMap;function n(a,s=0){let r=t.get(a),o;return r===void 0?(o=new uT(e),t.set(a,[o])):s>=r.length?(o=new uT(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var sU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,oU=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],lU=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],hT=new Le,Ou=new B,Zx=new B;function cU(e,t,n){let i=new wl,a=new jt,s=new jt,r=new je,o=new dd,l=new pd,c={},h=n.maxTextureSize,p={[cr]:Fn,[Fn]:cr,[Fa]:Fa},u=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:sU,fragmentShader:rU}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new _n;x.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Mt(x,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qr;let f=this.type;this.render=function(E,w,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===sM&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qr);let A=e.getRenderTarget(),R=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),C=e.state;C.setBlending(Ha),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let P=f!==this.type;P&&w.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(G=>G.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,G=E.length;D<G;D++){let X=E[D],W=X.shadow;if(W===void 0){Ft("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);let it=W.getFrameExtents();a.multiply(it),s.copy(W.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/it.x),a.x=s.x*it.x,W.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/it.y),a.y=s.y*it.y,W.mapSize.y=s.y));let Q=e.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Q,W.map===null||P===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Dl){if(X.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new hi(a.x,a.y,{format:dr,type:da,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new sr(a.x,a.y,Yi),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=Ia,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Rn,W.map.depthTexture.magFilter=Rn}else X.isPointLight?(W.map=new yp(a.x),W.map.depthTexture=new ud(a.x,fa)):(W.map=new hi(a.x,a.y),W.map.depthTexture=new sr(a.x,a.y,fa)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=Ia,this.type===Qr?(W.map.depthTexture.compareFunction=Q?gp:mp,W.map.depthTexture.minFilter=Bn,W.map.depthTexture.magFilter=Bn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Rn,W.map.depthTexture.magFilter=Rn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==a.x||W.map.height!==a.y)&&W.map.setSize(a.x,a.y);let j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,y);for(let at=0;at<j;at++){let It=W.getCamera(at);if(X.isPointLight){let Dt=W.camera,Ee=W.matrix,re=X.distance||Dt.far;re!==Dt.far&&(Dt.far=re,Dt.updateProjectionMatrix()),Ou.setFromMatrixPosition(X.matrixWorld),Dt.position.copy(Ou),Zx.copy(Dt.position),Zx.add(oU[at]),Dt.up.copy(lU[at]),Dt.lookAt(Zx),Dt.updateMatrixWorld(),Ee.makeTranslation(-Ou.x,-Ou.y,-Ou.z),hT.multiplyMatrices(Dt.projectionMatrix,Dt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(hT,Dt.coordinateSystem,Dt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)e.setRenderTarget(W.map,at),e.clear();else{at===0&&(e.setRenderTarget(W.map),e.clear());let Dt=W.getViewport(at);r.set(s.x*Dt.x,s.y*Dt.y,s.x*Dt.z,s.y*Dt.w),C.viewport(r)}i=W.getFrustum(at),v(w,y,It,X,this.type)}W.isPointLightShadow!==!0&&this.type===Dl&&m(W,y),W.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(A,R,I)};function m(E,w){let y=t.update(S);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new hi(a.x,a.y,{format:dr,type:da}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(w,null,y,u,S,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(w,null,y,d,S,null)}function b(E,w,y,A){let R=null,I=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)R=I;else if(R=y.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let C=R.uuid,P=w.uuid,D=c[C];D===void 0&&(D={},c[C]=D);let G=D[P];G===void 0&&(G=R.clone(),D[P]=G,w.addEventListener("dispose",T)),R=G}if(R.visible=w.visible,R.wireframe=w.wireframe,A===Dl?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:p[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let C=e.properties.get(R);C.light=y}return R}function v(E,w,y,A,R){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Dl)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let P=t.update(E),D=E.material;if(Array.isArray(D)){let G=P.groups;for(let X=0,W=G.length;X<W;X++){let it=G[X],Q=D[it.materialIndex];if(Q&&Q.visible){let j=b(E,Q,A,R);E.onBeforeShadow(e,E,w,y,P,j,it),e.renderBufferDirect(y,null,P,j,E,it),E.onAfterShadow(e,E,w,y,P,j,it)}}}else if(D.visible){let G=b(E,D,A,R);E.onBeforeShadow(e,E,w,y,P,G,null),e.renderBufferDirect(y,null,P,G,E,null),E.onAfterShadow(e,E,w,y,P,G,null)}}let C=E.children;for(let P=0,D=C.length;P<D;P++)v(C[P],w,y,A,R)}function T(E){E.target.removeEventListener("dispose",T);for(let y in c){let A=c[y],R=E.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function uU(e,t){function n(){let z=!1,dt=new je,$=null,ut=new je(0,0,0,0);return{setMask:function(mt){$!==mt&&!z&&(e.colorMask(mt,mt,mt,mt),$=mt)},setLocked:function(mt){z=mt},setClear:function(mt,st,Ut,wt,Ce){Ce===!0&&(mt*=wt,st*=wt,Ut*=wt),dt.set(mt,st,Ut,wt),ut.equals(dt)===!1&&(e.clearColor(mt,st,Ut,wt),ut.copy(dt))},reset:function(){z=!1,$=null,ut.set(-1,0,0,0)}}}function i(){let z=!1,dt=!1,$=null,ut=null,mt=null;return{setReversed:function(st){if(dt!==st){let Ut=t.get("EXT_clip_control");st?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),dt=st;let wt=mt;mt=null,this.setClear(wt)}},getReversed:function(){return dt},setTest:function(st){st?nt(e.DEPTH_TEST):xt(e.DEPTH_TEST)},setMask:function(st){$!==st&&!z&&(e.depthMask(st),$=st)},setFunc:function(st){if(dt&&(st=HM[st]),ut!==st){switch(st){case Qf:e.depthFunc(e.NEVER);break;case jf:e.depthFunc(e.ALWAYS);break;case $f:e.depthFunc(e.LESS);break;case _l:e.depthFunc(e.LEQUAL);break;case td:e.depthFunc(e.EQUAL);break;case ed:e.depthFunc(e.GEQUAL);break;case nd:e.depthFunc(e.GREATER);break;case id:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ut=st}},setLocked:function(st){z=st},setClear:function(st){mt!==st&&(mt=st,dt&&(st=1-st),e.clearDepth(st))},reset:function(){z=!1,$=null,ut=null,mt=null,dt=!1}}}function a(){let z=!1,dt=null,$=null,ut=null,mt=null,st=null,Ut=null,wt=null,Ce=null;return{setTest:function(ge){z||(ge?nt(e.STENCIL_TEST):xt(e.STENCIL_TEST))},setMask:function(ge){dt!==ge&&!z&&(e.stencilMask(ge),dt=ge)},setFunc:function(ge,_t,Pt){($!==ge||ut!==_t||mt!==Pt)&&(e.stencilFunc(ge,_t,Pt),$=ge,ut=_t,mt=Pt)},setOp:function(ge,_t,Pt){(st!==ge||Ut!==_t||wt!==Pt)&&(e.stencilOp(ge,_t,Pt),st=ge,Ut=_t,wt=Pt)},setLocked:function(ge){z=ge},setClear:function(ge){Ce!==ge&&(e.clearStencil(ge),Ce=ge)},reset:function(){z=!1,dt=null,$=null,ut=null,mt=null,st=null,Ut=null,wt=null,Ce=null}}}let s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap,h={},p={},u={},d=new WeakMap,x=[],S=null,g=!1,f=null,m=null,b=null,v=null,T=null,E=null,w=null,y=new Zt(0,0,0),A=0,R=!1,I=null,C=null,P=null,D=null,G=null,X=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,Q=e.getParameter(e.VERSION);Q.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Q)[1]),W=it>=1):Q.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),W=it>=2);let j=null,at={},It=e.getParameter(e.SCISSOR_BOX),Dt=e.getParameter(e.VIEWPORT),Ee=new je().fromArray(It),re=new je().fromArray(Dt);function ne(z,dt,$,ut){let mt=new Uint8Array(4),st=e.createTexture();e.bindTexture(z,st),e.texParameteri(z,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(z,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ut=0;Ut<$;Ut++)z===e.TEXTURE_3D||z===e.TEXTURE_2D_ARRAY?e.texImage3D(dt,0,e.RGBA,1,1,ut,0,e.RGBA,e.UNSIGNED_BYTE,mt):e.texImage2D(dt+Ut,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,mt);return st}let Z={};Z[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),Z[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Z[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),nt(e.DEPTH_TEST),r.setFunc(_l),Kt(!1),be(fx),nt(e.CULL_FACE),ie(Ha);function nt(z){h[z]!==!0&&(e.enable(z),h[z]=!0)}function xt(z){h[z]!==!1&&(e.disable(z),h[z]=!1)}function Ht(z,dt){return u[z]!==dt?(e.bindFramebuffer(z,dt),u[z]=dt,z===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=dt),z===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=dt),!0):!1}function pt(z,dt){let $=x,ut=!1;if(z){$=d.get(dt),$===void 0&&($=[],d.set(dt,$));let mt=z.textures;if($.length!==mt.length||$[0]!==e.COLOR_ATTACHMENT0){for(let st=0,Ut=mt.length;st<Ut;st++)$[st]=e.COLOR_ATTACHMENT0+st;$.length=mt.length,ut=!0}}else $[0]!==e.BACK&&($[0]=e.BACK,ut=!0);ut&&e.drawBuffers($)}function Xt(z){return S!==z?(e.useProgram(z),S=z,!0):!1}let Ze={[jr]:e.FUNC_ADD,[oM]:e.FUNC_SUBTRACT,[lM]:e.FUNC_REVERSE_SUBTRACT};Ze[cM]=e.MIN,Ze[uM]=e.MAX;let Jt={[hM]:e.ZERO,[fM]:e.ONE,[dM]:e.SRC_COLOR,[gx]:e.SRC_ALPHA,[yM]:e.SRC_ALPHA_SATURATE,[xM]:e.DST_COLOR,[mM]:e.DST_ALPHA,[pM]:e.ONE_MINUS_SRC_COLOR,[xx]:e.ONE_MINUS_SRC_ALPHA,[vM]:e.ONE_MINUS_DST_COLOR,[gM]:e.ONE_MINUS_DST_ALPHA,[_M]:e.CONSTANT_COLOR,[SM]:e.ONE_MINUS_CONSTANT_COLOR,[bM]:e.CONSTANT_ALPHA,[MM]:e.ONE_MINUS_CONSTANT_ALPHA};function ie(z,dt,$,ut,mt,st,Ut,wt,Ce,ge){if(z===Ha){g===!0&&(xt(e.BLEND),g=!1);return}if(g===!1&&(nt(e.BLEND),g=!0),z!==rM){if(z!==f||ge!==R){if((m!==jr||T!==jr)&&(e.blendEquation(e.FUNC_ADD),m=jr,T=jr),ge)switch(z){case Ul:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case dx:e.blendFunc(e.ONE,e.ONE);break;case px:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case mx:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Vt("WebGLState: Invalid blending: ",z);break}else switch(z){case Ul:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case dx:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case px:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mx:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",z);break}b=null,v=null,E=null,w=null,y.set(0,0,0),A=0,f=z,R=ge}return}mt=mt||dt,st=st||$,Ut=Ut||ut,(dt!==m||mt!==T)&&(e.blendEquationSeparate(Ze[dt],Ze[mt]),m=dt,T=mt),($!==b||ut!==v||st!==E||Ut!==w)&&(e.blendFuncSeparate(Jt[$],Jt[ut],Jt[st],Jt[Ut]),b=$,v=ut,E=st,w=Ut),(wt.equals(y)===!1||Ce!==A)&&(e.blendColor(wt.r,wt.g,wt.b,Ce),y.copy(wt),A=Ce),f=z,R=!1}function Se(z,dt){z.side===Fa?xt(e.CULL_FACE):nt(e.CULL_FACE);let $=z.side===Fn;dt&&($=!$),Kt($),z.blending===Ul&&z.transparent===!1?ie(Ha):ie(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);let ut=z.stencilWrite;o.setTest(ut),ut&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),mn(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?nt(e.SAMPLE_ALPHA_TO_COVERAGE):xt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(z){I!==z&&(z?e.frontFace(e.CW):e.frontFace(e.CCW),I=z)}function be(z){z!==iM?(nt(e.CULL_FACE),z!==C&&(z===fx?e.cullFace(e.BACK):z===aM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):xt(e.CULL_FACE),C=z}function cn(z){z!==P&&(W&&e.lineWidth(z),P=z)}function mn(z,dt,$){z?(nt(e.POLYGON_OFFSET_FILL),(D!==dt||G!==$)&&(D=dt,G=$,r.getReversed()&&(dt=-dt),e.polygonOffset(dt,$))):xt(e.POLYGON_OFFSET_FILL)}function Pe(z){z?nt(e.SCISSOR_TEST):xt(e.SCISSOR_TEST)}function Je(z){z===void 0&&(z=e.TEXTURE0+X-1),j!==z&&(e.activeTexture(z),j=z)}function L(z,dt,$){$===void 0&&(j===null?$=e.TEXTURE0+X-1:$=j);let ut=at[$];ut===void 0&&(ut={type:void 0,texture:void 0},at[$]=ut),(ut.type!==z||ut.texture!==dt)&&(j!==$&&(e.activeTexture($),j=$),e.bindTexture(z,dt||Z[z]),ut.type=z,ut.texture=dt)}function Bt(){let z=at[j];z!==void 0&&z.type!==void 0&&(e.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function oe(){try{e.compressedTexImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function N(){try{e.compressedTexImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function _(){try{e.texSubImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function F(){try{e.texSubImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function q(){try{e.compressedTexSubImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function J(){try{e.compressedTexSubImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function ot(){try{e.texStorage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function ht(){try{e.texStorage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function K(){try{e.texImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function tt(){try{e.texImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function lt(z){return p[z]!==void 0?p[z]:e.getParameter(z)}function Et(z,dt){p[z]!==dt&&(e.pixelStorei(z,dt),p[z]=dt)}function ct(z){Ee.equals(z)===!1&&(e.scissor(z.x,z.y,z.z,z.w),Ee.copy(z))}function ft(z){re.equals(z)===!1&&(e.viewport(z.x,z.y,z.z,z.w),re.copy(z))}function At(z,dt){let $=c.get(dt);$===void 0&&($=new WeakMap,c.set(dt,$));let ut=$.get(z);ut===void 0&&(ut=e.getUniformBlockIndex(dt,z.name),$.set(z,ut))}function Ot(z,dt){let ut=c.get(dt).get(z);l.get(dt)!==ut&&(e.uniformBlockBinding(dt,ut,z.__bindingPointIndex),l.set(dt,ut))}function Yt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},j=null,at={},u={},d=new WeakMap,x=[],S=null,g=!1,f=null,m=null,b=null,v=null,T=null,E=null,w=null,y=new Zt(0,0,0),A=0,R=!1,I=null,C=null,P=null,D=null,G=null,Ee.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:nt,disable:xt,bindFramebuffer:Ht,drawBuffers:pt,useProgram:Xt,setBlending:ie,setMaterial:Se,setFlipSided:Kt,setCullFace:be,setLineWidth:cn,setPolygonOffset:mn,setScissorTest:Pe,activeTexture:Je,bindTexture:L,unbindTexture:Bt,compressedTexImage2D:oe,compressedTexImage3D:N,texImage2D:K,texImage3D:tt,pixelStorei:Et,getParameter:lt,updateUBOMapping:At,uniformBlockBinding:Ot,texStorage2D:ot,texStorage3D:ht,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:ct,viewport:ft,reset:Yt}}function hU(e,t,n,i,a,s,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,h=new WeakMap,p=new Set,u,d=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(N,_){return x?new OffscreenCanvas(N,_):ou("canvas")}function g(N,_,F){let q=1,J=oe(N);if((J.width>F||J.height>F)&&(q=F/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ot=Math.floor(q*J.width),ht=Math.floor(q*J.height);u===void 0&&(u=S(ot,ht));let K=_?S(ot,ht):u;return K.width=ot,K.height=ht,K.getContext("2d").drawImage(N,0,0,ot,ht),Ft("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ot+"x"+ht+")."),K}else return"data"in N&&Ft("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),N;return N}function f(N){return N.generateMipmaps}function m(N){e.generateMipmap(N)}function b(N){return N.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?e.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(N,_,F,q,J,ot=!1){if(N!==null){if(e[N]!==void 0)return e[N];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ht;q&&(ht=t.get("EXT_texture_norm16"),ht||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===e.RED&&(F===e.FLOAT&&(K=e.R32F),F===e.HALF_FLOAT&&(K=e.R16F),F===e.UNSIGNED_BYTE&&(K=e.R8),F===e.UNSIGNED_SHORT&&ht&&(K=ht.R16_EXT),F===e.SHORT&&ht&&(K=ht.R16_SNORM_EXT)),_===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.R8UI),F===e.UNSIGNED_SHORT&&(K=e.R16UI),F===e.UNSIGNED_INT&&(K=e.R32UI),F===e.BYTE&&(K=e.R8I),F===e.SHORT&&(K=e.R16I),F===e.INT&&(K=e.R32I)),_===e.RG&&(F===e.FLOAT&&(K=e.RG32F),F===e.HALF_FLOAT&&(K=e.RG16F),F===e.UNSIGNED_BYTE&&(K=e.RG8),F===e.UNSIGNED_SHORT&&ht&&(K=ht.RG16_EXT),F===e.SHORT&&ht&&(K=ht.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.RG8UI),F===e.UNSIGNED_SHORT&&(K=e.RG16UI),F===e.UNSIGNED_INT&&(K=e.RG32UI),F===e.BYTE&&(K=e.RG8I),F===e.SHORT&&(K=e.RG16I),F===e.INT&&(K=e.RG32I)),_===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.RGB8UI),F===e.UNSIGNED_SHORT&&(K=e.RGB16UI),F===e.UNSIGNED_INT&&(K=e.RGB32UI),F===e.BYTE&&(K=e.RGB8I),F===e.SHORT&&(K=e.RGB16I),F===e.INT&&(K=e.RGB32I)),_===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(K=e.RGBA16UI),F===e.UNSIGNED_INT&&(K=e.RGBA32UI),F===e.BYTE&&(K=e.RGBA8I),F===e.SHORT&&(K=e.RGBA16I),F===e.INT&&(K=e.RGBA32I)),_===e.RGB&&(F===e.UNSIGNED_SHORT&&ht&&(K=ht.RGB16_EXT),F===e.SHORT&&ht&&(K=ht.RGB16_SNORM_EXT),F===e.UNSIGNED_INT_5_9_9_9_REV&&(K=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(K=e.R11F_G11F_B10F)),_===e.RGBA){let tt=ot?ru:fe.getTransfer(J);F===e.FLOAT&&(K=e.RGBA32F),F===e.HALF_FLOAT&&(K=e.RGBA16F),F===e.UNSIGNED_BYTE&&(K=tt===Re?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT&&ht&&(K=ht.RGBA16_EXT),F===e.SHORT&&ht&&(K=ht.RGBA16_SNORM_EXT),F===e.UNSIGNED_SHORT_4_4_4_4&&(K=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(K=e.RGB5_A1)}return(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function T(N,_){let F;return N?_===null||_===fa||_===Il?F=e.DEPTH24_STENCIL8:_===Yi?F=e.DEPTH32F_STENCIL8:_===Ll&&(F=e.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fa||_===Il?F=e.DEPTH_COMPONENT24:_===Yi?F=e.DEPTH_COMPONENT32F:_===Ll&&(F=e.DEPTH_COMPONENT16),F}function E(N,_){return f(N)===!0||N.isFramebufferTexture&&N.minFilter!==Rn&&N.minFilter!==Bn?Math.log2(Math.max(_.width,_.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?_.mipmaps.length:1}function w(N){let _=N.target;_.removeEventListener("dispose",w),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&p.delete(_)}function y(N){let _=N.target;_.removeEventListener("dispose",y),I(_)}function A(N){let _=i.get(N);if(_.__webglInit===void 0)return;let F=N.source,q=d.get(F);if(q){let J=q[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(N),Object.keys(q).length===0&&d.delete(F)}i.remove(N)}function R(N){let _=i.get(N);e.deleteTexture(_.__webglTexture);let F=N.source,q=d.get(F);delete q[_.__cacheKey],r.memory.textures--}function I(N){let _=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let J=0;J<_.__webglFramebuffer[q].length;J++)e.deleteFramebuffer(_.__webglFramebuffer[q][J]);else e.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)e.deleteFramebuffer(_.__webglFramebuffer[q]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=N.textures;for(let q=0,J=F.length;q<J;q++){let ot=i.get(F[q]);ot.__webglTexture&&(e.deleteTexture(ot.__webglTexture),r.memory.textures--),i.remove(F[q])}i.remove(N)}let C=0;function P(){C=0}function D(){return C}function G(N){C=N}function X(){let N=C;return N>=a.maxTextures&&Ft("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+a.maxTextures),C+=1,N}function W(N){let _=[];return _.push(N.wrapS),_.push(N.wrapT),_.push(N.wrapR||0),_.push(N.magFilter),_.push(N.minFilter),_.push(N.anisotropy),_.push(N.internalFormat),_.push(N.format),_.push(N.type),_.push(N.generateMipmaps),_.push(N.premultiplyAlpha),_.push(N.flipY),_.push(N.unpackAlignment),_.push(N.colorSpace),_.join()}function it(N,_){let F=i.get(N);if(N.isVideoTexture&&L(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&F.__version!==N.version){let q=N.image;if(q===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(F,N,_);return}}else N.isExternalTexture&&(F.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+_)}function Q(N,_){let F=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&F.__version!==N.version){xt(F,N,_);return}else N.isExternalTexture&&(F.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+_)}function j(N,_){let F=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&F.__version!==N.version){xt(F,N,_);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+_)}function at(N,_){let F=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&F.__version!==N.version){Ht(F,N,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+_)}let It={[fs]:e.REPEAT,[La]:e.CLAMP_TO_EDGE,[ad]:e.MIRRORED_REPEAT},Dt={[Rn]:e.NEAREST,[AM]:e.NEAREST_MIPMAP_NEAREST,[Au]:e.NEAREST_MIPMAP_LINEAR,[Bn]:e.LINEAR,[Dd]:e.LINEAR_MIPMAP_NEAREST,[hr]:e.LINEAR_MIPMAP_LINEAR},Ee={[NM]:e.NEVER,[OM]:e.ALWAYS,[DM]:e.LESS,[mp]:e.LEQUAL,[UM]:e.EQUAL,[gp]:e.GEQUAL,[LM]:e.GREATER,[IM]:e.NOTEQUAL};function re(N,_){if(_.type===Yi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Bn||_.magFilter===Dd||_.magFilter===Au||_.magFilter===hr||_.minFilter===Bn||_.minFilter===Dd||_.minFilter===Au||_.minFilter===hr)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(N,e.TEXTURE_WRAP_S,It[_.wrapS]),e.texParameteri(N,e.TEXTURE_WRAP_T,It[_.wrapT]),(N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY)&&e.texParameteri(N,e.TEXTURE_WRAP_R,It[_.wrapR]),e.texParameteri(N,e.TEXTURE_MAG_FILTER,Dt[_.magFilter]),e.texParameteri(N,e.TEXTURE_MIN_FILTER,Dt[_.minFilter]),_.compareFunction&&(e.texParameteri(N,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(N,e.TEXTURE_COMPARE_FUNC,Ee[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Rn||_.minFilter!==Au&&_.minFilter!==hr||_.type===Yi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(N,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ne(N,_){let F=!1;N.__webglInit===void 0&&(N.__webglInit=!0,_.addEventListener("dispose",w));let q=_.source,J=d.get(q);J===void 0&&(J={},d.set(q,J));let ot=W(_);if(ot!==N.__cacheKey){J[ot]===void 0&&(J[ot]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,F=!0),J[ot].usedTimes++;let ht=J[N.__cacheKey];ht!==void 0&&(J[N.__cacheKey].usedTimes--,ht.usedTimes===0&&R(_)),N.__cacheKey=ot,N.__webglTexture=J[ot].texture}return F}function Z(N,_,F){return Math.floor(Math.floor(N/F)/_)}function nt(N,_,F,q){let ot=N.updateRanges;if(ot.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,F,q,_.data);else{ot.sort((Et,ct)=>Et.start-ct.start);let ht=0;for(let Et=1;Et<ot.length;Et++){let ct=ot[ht],ft=ot[Et],At=ct.start+ct.count,Ot=Z(ft.start,_.width,4),Yt=Z(ct.start,_.width,4);ft.start<=At+1&&Ot===Yt&&Z(ft.start+ft.count-1,_.width,4)===Ot?ct.count=Math.max(ct.count,ft.start+ft.count-ct.start):(++ht,ot[ht]=ft)}ot.length=ht+1;let K=n.getParameter(e.UNPACK_ROW_LENGTH),tt=n.getParameter(e.UNPACK_SKIP_PIXELS),lt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let Et=0,ct=ot.length;Et<ct;Et++){let ft=ot[Et],At=Math.floor(ft.start/4),Ot=Math.ceil(ft.count/4),Yt=At%_.width,z=Math.floor(At/_.width),dt=Ot,$=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Yt),n.pixelStorei(e.UNPACK_SKIP_ROWS,z),n.texSubImage2D(e.TEXTURE_2D,0,Yt,z,dt,$,F,q,_.data)}N.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,K),n.pixelStorei(e.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(e.UNPACK_SKIP_ROWS,lt)}}function xt(N,_,F){let q=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=e.TEXTURE_3D);let J=ne(N,_),ot=_.source;n.bindTexture(q,N.__webglTexture,e.TEXTURE0+F);let ht=i.get(ot);if(ot.version!==ht.__version||J===!0){if(n.activeTexture(e.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let $=fe.getPrimaries(fe.workingColorSpace),ut=_.colorSpace===gs?null:fe.getPrimaries(_.colorSpace),mt=_.colorSpace===gs||$===ut?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let tt=g(_.image,!1,a.maxTextureSize);tt=Bt(_,tt);let lt=s.convert(_.format,_.colorSpace),Et=s.convert(_.type),ct=v(_.internalFormat,lt,Et,_.normalized,_.colorSpace,_.isVideoTexture);re(q,_);let ft,At=_.mipmaps,Ot=_.isVideoTexture!==!0,Yt=ht.__version===void 0||J===!0,z=ot.dataReady,dt=E(_,tt);if(_.isDepthTexture)ct=T(_.format===fr,_.type),Yt&&(Ot?n.texStorage2D(e.TEXTURE_2D,1,ct,tt.width,tt.height):n.texImage2D(e.TEXTURE_2D,0,ct,tt.width,tt.height,0,lt,Et,null));else if(_.isDataTexture)if(At.length>0){Ot&&Yt&&n.texStorage2D(e.TEXTURE_2D,dt,ct,At[0].width,At[0].height);for(let $=0,ut=At.length;$<ut;$++)ft=At[$],Ot?z&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ft.width,ft.height,lt,Et,ft.data):n.texImage2D(e.TEXTURE_2D,$,ct,ft.width,ft.height,0,lt,Et,ft.data);_.generateMipmaps=!1}else Ot?(Yt&&n.texStorage2D(e.TEXTURE_2D,dt,ct,tt.width,tt.height),z&&nt(_,tt,lt,Et)):n.texImage2D(e.TEXTURE_2D,0,ct,tt.width,tt.height,0,lt,Et,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ot&&Yt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,ct,At[0].width,At[0].height,tt.depth);for(let $=0,ut=At.length;$<ut;$++)if(ft=At[$],_.format!==Zi)if(lt!==null)if(Ot){if(z)if(_.layerUpdates.size>0){let mt=zx(ft.width,ft.height,_.format,_.type);for(let st of _.layerUpdates){let Ut=ft.data.subarray(st*mt/ft.data.BYTES_PER_ELEMENT,(st+1)*mt/ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,st,ft.width,ft.height,1,lt,Ut)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,ft.width,ft.height,tt.depth,lt,ft.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,ct,ft.width,ft.height,tt.depth,0,ft.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?z&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,ft.width,ft.height,tt.depth,lt,Et,ft.data):n.texImage3D(e.TEXTURE_2D_ARRAY,$,ct,ft.width,ft.height,tt.depth,0,lt,Et,ft.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ot&&Yt&&n.texStorage2D(e.TEXTURE_2D,dt,ct,At[0].width,At[0].height);for(let $=0,ut=At.length;$<ut;$++)ft=At[$],_.format!==Zi?lt!==null?Ot?z&&n.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,ft.width,ft.height,lt,ft.data):n.compressedTexImage2D(e.TEXTURE_2D,$,ct,ft.width,ft.height,0,ft.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?z&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ft.width,ft.height,lt,Et,ft.data):n.texImage2D(e.TEXTURE_2D,$,ct,ft.width,ft.height,0,lt,Et,ft.data)}else if(_.isDataArrayTexture)if(Ot){if(Yt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,ct,tt.width,tt.height,tt.depth),z)if(_.layerUpdates.size>0){let $=zx(tt.width,tt.height,_.format,_.type);for(let ut of _.layerUpdates){let mt=tt.data.subarray(ut*$/tt.data.BYTES_PER_ELEMENT,(ut+1)*$/tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ut,tt.width,tt.height,1,lt,Et,mt)}_.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,Et,tt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ct,tt.width,tt.height,tt.depth,0,lt,Et,tt.data);else if(_.isData3DTexture)Ot?(Yt&&n.texStorage3D(e.TEXTURE_3D,dt,ct,tt.width,tt.height,tt.depth),z&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,Et,tt.data)):n.texImage3D(e.TEXTURE_3D,0,ct,tt.width,tt.height,tt.depth,0,lt,Et,tt.data);else if(_.isFramebufferTexture){if(Yt)if(Ot)n.texStorage2D(e.TEXTURE_2D,dt,ct,tt.width,tt.height);else{let $=tt.width,ut=tt.height;for(let mt=0;mt<dt;mt++)n.texImage2D(e.TEXTURE_2D,mt,ct,$,ut,0,lt,Et,null),$>>=1,ut>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let $=e.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),tt.parentNode!==$){$.appendChild(tt),p.add(_),$.onpaint=ut=>{let mt=ut.changedElements;for(let st of p)mt.includes(st.image)&&(st.needsUpdate=!0)},$.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,tt);else{let mt=e.RGBA,st=e.RGBA,Ut=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,mt,st,Ut,tt)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(At.length>0){if(Ot&&Yt){let $=oe(At[0]);n.texStorage2D(e.TEXTURE_2D,dt,ct,$.width,$.height)}for(let $=0,ut=At.length;$<ut;$++)ft=At[$],Ot?z&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,lt,Et,ft):n.texImage2D(e.TEXTURE_2D,$,ct,lt,Et,ft);_.generateMipmaps=!1}else if(Ot){if(Yt){let $=oe(tt);n.texStorage2D(e.TEXTURE_2D,dt,ct,$.width,$.height)}z&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,lt,Et,tt)}else n.texImage2D(e.TEXTURE_2D,0,ct,lt,Et,tt);f(_)&&m(q),ht.__version=ot.version,_.onUpdate&&_.onUpdate(_)}N.__version=_.version}function Ht(N,_,F){if(_.image.length!==6)return;let q=ne(N,_),J=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+F);let ot=i.get(J);if(J.version!==ot.__version||q===!0){n.activeTexture(e.TEXTURE0+F);let ht=fe.getPrimaries(fe.workingColorSpace),K=_.colorSpace===gs?null:fe.getPrimaries(_.colorSpace),tt=_.colorSpace===gs||ht===K?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let lt=_.isCompressedTexture||_.image[0].isCompressedTexture,Et=_.image[0]&&_.image[0].isDataTexture,ct=[];for(let st=0;st<6;st++)!lt&&!Et?ct[st]=g(_.image[st],!0,a.maxCubemapSize):ct[st]=Et?_.image[st].image:_.image[st],ct[st]=Bt(_,ct[st]);let ft=ct[0],At=s.convert(_.format,_.colorSpace),Ot=s.convert(_.type),Yt=v(_.internalFormat,At,Ot,_.normalized,_.colorSpace),z=_.isVideoTexture!==!0,dt=ot.__version===void 0||q===!0,$=J.dataReady,ut=E(_,ft);re(e.TEXTURE_CUBE_MAP,_);let mt;if(lt){z&&dt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ut,Yt,ft.width,ft.height);for(let st=0;st<6;st++){mt=ct[st].mipmaps;for(let Ut=0;Ut<mt.length;Ut++){let wt=mt[Ut];_.format!==Zi?At!==null?z?$&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,0,0,wt.width,wt.height,At,wt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,Yt,wt.width,wt.height,0,wt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,0,0,wt.width,wt.height,At,Ot,wt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,Yt,wt.width,wt.height,0,At,Ot,wt.data)}}}else{if(mt=_.mipmaps,z&&dt){mt.length>0&&ut++;let st=oe(ct[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ut,Yt,st.width,st.height)}for(let st=0;st<6;st++)if(Et){z?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ct[st].width,ct[st].height,At,Ot,ct[st].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Yt,ct[st].width,ct[st].height,0,At,Ot,ct[st].data);for(let Ut=0;Ut<mt.length;Ut++){let Ce=mt[Ut].image[st].image;z?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,0,0,Ce.width,Ce.height,At,Ot,Ce.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,Yt,Ce.width,Ce.height,0,At,Ot,Ce.data)}}else{z?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,At,Ot,ct[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Yt,At,Ot,ct[st]);for(let Ut=0;Ut<mt.length;Ut++){let wt=mt[Ut];z?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,0,0,At,Ot,wt.image[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,Yt,At,Ot,wt.image[st])}}}f(_)&&m(e.TEXTURE_CUBE_MAP),ot.__version=J.version,_.onUpdate&&_.onUpdate(_)}N.__version=_.version}function pt(N,_,F,q,J,ot){let ht=s.convert(F.format,F.colorSpace),K=s.convert(F.type),tt=v(F.internalFormat,ht,K,F.normalized,F.colorSpace),lt=i.get(_),Et=i.get(F);if(Et.__renderTarget=_,!lt.__hasExternalTextures){let ct=Math.max(1,_.width>>ot),ft=Math.max(1,_.height>>ot);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?n.texImage3D(J,ot,tt,ct,ft,_.depth,0,ht,K,null):n.texImage2D(J,ot,tt,ct,ft,0,ht,K,null)}n.bindFramebuffer(e.FRAMEBUFFER,N),Je(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,J,Et.__webglTexture,0,Pe(_)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,J,Et.__webglTexture,ot),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Xt(N,_,F){if(e.bindRenderbuffer(e.RENDERBUFFER,N),_.depthBuffer){let q=_.depthTexture,J=q&&q.isDepthTexture?q.type:null,ot=T(_.stencilBuffer,J),ht=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Je(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(_),ot,_.width,_.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(_),ot,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,ot,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ht,e.RENDERBUFFER,N)}else{let q=_.textures;for(let J=0;J<q.length;J++){let ot=q[J],ht=s.convert(ot.format,ot.colorSpace),K=s.convert(ot.type),tt=v(ot.internalFormat,ht,K,ot.normalized,ot.colorSpace);Je(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(_),tt,_.width,_.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(_),tt,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,tt,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ze(N,_,F){let q=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,N),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),re(e.TEXTURE_CUBE_MAP,_.depthTexture);let lt=s.convert(_.depthTexture.format),Et=s.convert(_.depthTexture.type),ct;_.depthTexture.format===Ia?ct=e.DEPTH_COMPONENT24:_.depthTexture.format===fr&&(ct=e.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ct,_.width,_.height,0,lt,Et,null)}}else it(_.depthTexture,0);let ot=J.__webglTexture,ht=Pe(_),K=q?e.TEXTURE_CUBE_MAP_POSITIVE_X+F:e.TEXTURE_2D,tt=_.depthTexture.format===fr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ia)Je(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,tt,K,ot,0,ht):e.framebufferTexture2D(e.FRAMEBUFFER,tt,K,ot,0);else if(_.depthTexture.format===fr)Je(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,tt,K,ot,0,ht):e.framebufferTexture2D(e.FRAMEBUFFER,tt,K,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Jt(N){let _=i.get(N),F=N.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==N.depthTexture){let q=N.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=q}if(N.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let q=0;q<6;q++)Ze(_.__webglFramebuffer[q],N,q);else{let q=N.texture.mipmaps;q&&q.length>0?Ze(_.__webglFramebuffer[0],N,0):Ze(_.__webglFramebuffer,N,0)}else if(F){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=e.createRenderbuffer(),Xt(_.__webglDepthbuffer[q],N,!1);else{let J=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,ot),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,ot)}}else{let q=N.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Xt(_.__webglDepthbuffer,N,!1);else{let J=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ot),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,ot)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ie(N,_,F){let q=i.get(N);_!==void 0&&pt(q.__webglFramebuffer,N,N.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&Jt(N)}function Se(N){let _=N.texture,F=i.get(N),q=i.get(_);N.addEventListener("dispose",y);let J=N.textures,ot=N.isWebGLCubeRenderTarget===!0,ht=J.length>1;if(ht||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=_.version,r.memory.textures++),ot){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let tt=0;tt<_.mipmaps.length;tt++)F.__webglFramebuffer[K][tt]=e.createFramebuffer()}else F.__webglFramebuffer[K]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)F.__webglFramebuffer[K]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(ht)for(let K=0,tt=J.length;K<tt;K++){let lt=i.get(J[K]);lt.__webglTexture===void 0&&(lt.__webglTexture=e.createTexture(),r.memory.textures++)}if(N.samples>0&&Je(N)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<J.length;K++){let tt=J[K];F.__webglColorRenderbuffer[K]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[K]);let lt=s.convert(tt.format,tt.colorSpace),Et=s.convert(tt.type),ct=v(tt.internalFormat,lt,Et,tt.normalized,tt.colorSpace,N.isXRRenderTarget===!0),ft=Pe(N);e.renderbufferStorageMultisample(e.RENDERBUFFER,ft,ct,N.width,N.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.RENDERBUFFER,F.__webglColorRenderbuffer[K])}e.bindRenderbuffer(e.RENDERBUFFER,null),N.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),Xt(F.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ot){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),re(e.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)pt(F.__webglFramebuffer[K][tt],N,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,tt);else pt(F.__webglFramebuffer[K],N,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(_)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ht){for(let K=0,tt=J.length;K<tt;K++){let lt=J[K],Et=i.get(lt),ct=e.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ct=N.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ct,Et.__webglTexture),re(ct,lt),pt(F.__webglFramebuffer,N,lt,e.COLOR_ATTACHMENT0+K,ct,0),f(lt)&&m(ct)}n.unbindTexture()}else{let K=e.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(K=N.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(K,q.__webglTexture),re(K,_),_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)pt(F.__webglFramebuffer[tt],N,_,e.COLOR_ATTACHMENT0,K,tt);else pt(F.__webglFramebuffer,N,_,e.COLOR_ATTACHMENT0,K,0);f(_)&&m(K),n.unbindTexture()}N.depthBuffer&&Jt(N)}function Kt(N){let _=N.textures;for(let F=0,q=_.length;F<q;F++){let J=_[F];if(f(J)){let ot=b(N),ht=i.get(J).__webglTexture;n.bindTexture(ot,ht),m(ot),n.unbindTexture()}}}let be=[],cn=[];function mn(N){if(N.samples>0){if(Je(N)===!1){let _=N.textures,F=N.width,q=N.height,J=e.COLOR_BUFFER_BIT,ot=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=i.get(N),K=_.length>1;if(K)for(let lt=0;lt<_.length;lt++)n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let tt=N.texture.mipmaps;tt&&tt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let lt=0;lt<_.length;lt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),K){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ht.__webglColorRenderbuffer[lt]);let Et=i.get(_[lt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Et,0)}e.blitFramebuffer(0,0,F,q,0,0,F,q,J,e.NEAREST),l===!0&&(be.length=0,cn.length=0,be.push(e.COLOR_ATTACHMENT0+lt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(be.push(ot),cn.push(ot),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,cn)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,be))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),K)for(let lt=0;lt<_.length;lt++){n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,ht.__webglColorRenderbuffer[lt]);let Et=i.get(_[lt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,Et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let _=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function Pe(N){return Math.min(a.maxSamples,N.samples)}function Je(N){let _=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(N){let _=r.render.frame;h.get(N)!==_&&(h.set(N,_),N.update())}function Bt(N,_){let F=N.colorSpace,q=N.format,J=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||F!==su&&F!==gs&&(fe.getTransfer(F)===Re?(q!==Zi||J!==fi)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",F)),_}function oe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=P,this.getTextureUnits=D,this.setTextureUnits=G,this.setTexture2D=it,this.setTexture2DArray=Q,this.setTexture3D=j,this.setTextureCube=at,this.rebindTextures=ie,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function fU(e,t){function n(i,a=gs){let s,r=fe.getTransfer(a);if(i===fi)return e.UNSIGNED_BYTE;if(i===Ld)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Id)return e.UNSIGNED_SHORT_5_5_5_1;if(i===wx)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Rx)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ex)return e.BYTE;if(i===Ax)return e.SHORT;if(i===Ll)return e.UNSIGNED_SHORT;if(i===Ud)return e.INT;if(i===fa)return e.UNSIGNED_INT;if(i===Yi)return e.FLOAT;if(i===da)return e.HALF_FLOAT;if(i===Cx)return e.ALPHA;if(i===Nx)return e.RGB;if(i===Zi)return e.RGBA;if(i===Ia)return e.DEPTH_COMPONENT;if(i===fr)return e.DEPTH_STENCIL;if(i===Od)return e.RED;if(i===Pd)return e.RED_INTEGER;if(i===dr)return e.RG;if(i===zd)return e.RG_INTEGER;if(i===Bd)return e.RGBA_INTEGER;if(i===wu||i===Ru||i===Cu||i===Nu)if(r===Re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ru)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fd||i===Hd||i===Gd||i===Vd)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kd||i===Xd||i===Wd||i===qd||i===Yd||i===Du||i===Zd)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===kd||i===Xd)return r===Re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wd)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===qd)return s.COMPRESSED_R11_EAC;if(i===Yd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Du)return s.COMPRESSED_RG11_EAC;if(i===Zd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jd||i===Kd||i===Qd||i===jd||i===$d||i===tp||i===ep||i===np||i===ip||i===ap||i===sp||i===rp||i===op||i===lp)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jd)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kd)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qd)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jd)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$d)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tp)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ep)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===np)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ip)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ap)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sp)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rp)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===op)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lp)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cp||i===up||i===hp)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===cp)return r===Re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===up)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fp||i===dp||i===Uu||i===pp)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===fp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Il?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var dU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new mu(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Ri({vertexShader:dU,fragmentShader:pU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mt(new ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},iv=class extends Oa{constructor(t,n){super();let i=this,a=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,x=null,S=typeof XRWebGLBinding<"u",g=new nv,f={},m=n.getContextAttributes(),b=null,v=null,T=[],E=[],w=new jt,y=null,A=null,R=new zn;R.viewport=new je;let I=new zn;I.viewport=new je;let C=[R,I],P=new Ad,D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=T[Z];return nt===void 0&&(nt=new El,T[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=T[Z];return nt===void 0&&(nt=new El,T[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=T[Z];return nt===void 0&&(nt=new El,T[Z]=nt),nt.getHandSpace()};function X(Z){let nt=E.indexOf(Z.inputSource);if(nt===-1)return;let xt=T[nt];xt!==void 0&&(xt.update(Z.inputSource,Z.frame,c||r),xt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){a.removeEventListener("select",X),a.removeEventListener("selectstart",X),a.removeEventListener("selectend",X),a.removeEventListener("squeeze",X),a.removeEventListener("squeezestart",X),a.removeEventListener("squeezeend",X),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",it);for(let Z=0;Z<T.length;Z++){let nt=E[Z];nt!==null&&(E[Z]=null,T[Z].disconnect(nt))}D=null,G=null,g.reset();for(let Z in f)delete f[Z];if(t.setRenderTarget(b),d=null,u=null,p=null,a=null,v=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(w.width,w.height,!1),A!==null){let Z=A.camera;Z.fov=A.fov,Z.zoom=A.zoom,Z.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(b=t.getRenderTarget(),a.addEventListener("select",X),a.addEventListener("selectstart",X),a.addEventListener("selectend",X),a.addEventListener("squeeze",X),a.addEventListener("squeezestart",X),a.addEventListener("squeezeend",X),a.addEventListener("end",W),a.addEventListener("inputsourceschange",it),m.xrCompatible!==!0&&await n.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ht=null,pt=null;m.depth&&(pt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xt=m.stencil?fr:Ia,Ht=m.stencil?Il:fa);let Xt={colorFormat:n.RGBA8,depthFormat:pt,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Xt),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new hi(u.textureWidth,u.textureHeight,{format:Zi,type:fi,depthTexture:new sr(u.textureWidth,u.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(a,n,xt),a.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new hi(d.framebufferWidth,d.framebufferHeight,{format:Zi,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),ne.setContext(a),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(Z){for(let nt=0;nt<Z.removed.length;nt++){let xt=Z.removed[nt],Ht=E.indexOf(xt);Ht>=0&&(E[Ht]=null,T[Ht].disconnect(xt))}for(let nt=0;nt<Z.added.length;nt++){let xt=Z.added[nt],Ht=E.indexOf(xt);if(Ht===-1){for(let Xt=0;Xt<T.length;Xt++)if(Xt>=E.length){E.push(xt),Ht=Xt;break}else if(E[Xt]===null){E[Xt]=xt,Ht=Xt;break}if(Ht===-1)break}let pt=T[Ht];pt&&pt.connect(xt)}}let Q=new B,j=new B;function at(Z,nt,xt){Q.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(xt.matrixWorld);let Ht=Q.distanceTo(j),pt=nt.projectionMatrix.elements,Xt=xt.projectionMatrix.elements,Ze=pt[14]/(pt[10]-1),Jt=pt[14]/(pt[10]+1),ie=(pt[9]+1)/pt[5],Se=(pt[9]-1)/pt[5],Kt=(pt[8]-1)/pt[0],be=(Xt[8]+1)/Xt[0],cn=Ze*Kt,mn=Ze*be,Pe=Ht/(-Kt+be),Je=Pe*-Kt;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Je),Z.translateZ(Pe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),pt[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let L=Ze+Pe,Bt=Jt+Pe,oe=cn-Je,N=mn+(Ht-Je),_=ie*Jt/Bt*L,F=Se*Jt/Bt*L;Z.projectionMatrix.makePerspective(oe,N,_,F,L,Bt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function It(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let nt=Z.near,xt=Z.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),P.near=I.near=R.near=nt,P.far=I.far=R.far=xt,(D!==P.near||G!==P.far)&&(a.updateRenderState({depthNear:P.near,depthFar:P.far}),D=P.near,G=P.far),P.layers.mask=Z.layers.mask|6,R.layers.mask=P.layers.mask&-5,I.layers.mask=P.layers.mask&-3;let Ht=Z.parent,pt=P.cameras;It(P,Ht);for(let Xt=0;Xt<pt.length;Xt++)It(pt[Xt],Ht);pt.length===2?at(P,R,I):P.projectionMatrix.copy(R.projectionMatrix),A===null&&Z.isPerspectiveCamera&&(A={camera:Z,fov:Z.fov,zoom:Z.zoom}),Dt(Z,P,Ht)};function Dt(Z,nt,xt){xt===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(xt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ml*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(Z){return f[Z]};let Ee=null;function re(Z,nt){if(h=nt.getViewerPose(c||r),x=nt,h!==null){let xt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ht=!1;xt.length!==P.cameras.length&&(P.cameras.length=0,Ht=!0);for(let Jt=0;Jt<xt.length;Jt++){let ie=xt[Jt],Se=null;if(d!==null)Se=d.getViewport(ie);else{let be=p.getViewSubImage(u,ie);Se=be.viewport,Jt===0&&(t.setRenderTargetTextures(v,be.colorTexture,be.depthStencilTexture),t.setRenderTarget(v))}let Kt=C[Jt];Kt===void 0&&(Kt=new zn,Kt.layers.enable(Jt),Kt.viewport=new je,C[Jt]=Kt),Kt.matrix.fromArray(ie.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(ie.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(Se.x,Se.y,Se.width,Se.height),Jt===0&&(P.matrix.copy(Kt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ht===!0&&P.cameras.push(Kt)}let pt=a.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&S){p=i.getBinding();let Jt=p.getDepthInformation(xt[0]);Jt&&Jt.isValid&&Jt.texture&&g.init(Jt,a.renderState)}if(pt&&pt.includes("camera-access")&&S){t.state.unbindTexture(),p=i.getBinding();for(let Jt=0;Jt<xt.length;Jt++){let ie=xt[Jt].camera;if(ie){let Se=f[ie];Se||(Se=new mu,f[ie]=Se);let Kt=p.getCameraImage(ie);Se.sourceTexture=Kt}}}}for(let xt=0;xt<T.length;xt++){let Ht=E[xt],pt=T[xt];Ht!==null&&pt!==void 0&&pt.update(Ht,nt,c||r)}Ee&&Ee(Z,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),x=null}let ne=new fT;ne.setAnimationLoop(re),this.setAnimationLoop=function(Z){Ee=Z},this.dispose=function(){}}},mU=new Le,vT=new qt;vT.set(-1,0,0,0,1,0,0,0,1);function gU(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Ix(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,m,b,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),p(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&d(g,f,v)):f.isMeshMatcapMaterial?(s(g,f),x(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),S(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,b):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Fn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Fn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let m=t.get(f),b=m.envMap,v=m.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(mU.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(vT),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,b){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=b*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Fn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function S(g,f){let m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function xU(e,t,n,i){let a={},s={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let E=T.program;i.uniformBlockBinding(v,E)}function c(v,T){let E=a[v.id];E===void 0&&(g(v),E=h(v),a[v.id]=E,v.addEventListener("dispose",m));let w=T.program;i.updateUBOMapping(v,w);let y=t.render.frame;s[v.id]!==y&&(u(v),s[v.id]=y)}function h(v){let T=p();v.__bindingPointIndex=T;let E=e.createBuffer(),w=v.__size,y=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,w,y),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,E),E}function p(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let T=a[v.id],E=v.uniforms,w=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let y=0,A=E.length;y<A;y++){let R=E[y];if(Array.isArray(R))for(let I=0,C=R.length;I<C;I++)d(R[I],y,I,w);else d(R,y,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(v,T,E,w){if(S(v,T,E,w)===!0){let y=v.__offset,A=v.value;if(Array.isArray(A)){let R=0;for(let I=0;I<A.length;I++){let C=A[I],P=f(C);x(C,v.__data,R),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(R+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(A,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,y,v.__data)}}function x(v,T,E){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,E)}function S(v,T,E,w){let y=v.value,A=T+"_"+E;if(w[A]===void 0)return typeof y=="number"||typeof y=="boolean"?w[A]=y:ArrayBuffer.isView(y)?w[A]=y.slice():w[A]=y.clone(),!0;{let R=w[A];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return w[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function g(v){let T=v.uniforms,E=0,w=16;for(let A=0,R=T.length;A<R;A++){let I=Array.isArray(T[A])?T[A]:[T[A]];for(let C=0,P=I.length;C<P;C++){let D=I[C],G=Array.isArray(D.value)?D.value:[D.value];for(let X=0,W=G.length;X<W;X++){let it=G[X],Q=f(it),j=E%w,at=j%Q.boundary,It=j+at;E+=at,It!==0&&w-It<Q.storage&&(E+=w-It),D.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=Q.storage}}}let y=E%w;return y>0&&(E+=w-y),v.__size=E,v.__cache={},this}function f(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",v),T}function m(v){let T=v.target;T.removeEventListener("dispose",m);let E=r.indexOf(T.__bindingPointIndex);r.splice(E,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete s[T.id]}function b(){for(let v in a)e.deleteBuffer(a[v]);r=[],a={},s={}}return{bind:l,update:c,dispose:b}}var vU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ga=null;function yU(){return Ga===null&&(Ga=new du(vU,16,16,dr,da),Ga.name="DFG_LUT",Ga.minFilter=Bn,Ga.magFilter=Bn,Ga.wrapS=La,Ga.wrapT=La,Ga.generateMipmaps=!1,Ga.needsUpdate=!0),Ga}var _p=class{constructor(t={}){let{canvas:n=zM(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=fi}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=r;let S=d,g=new Set([Bd,zd,Pd]),f=new Set([fi,fa,Ll,Il,Ld,Id]),m=new Uint32Array(4),b=new Int32Array(4),v=new B,T=null,E=null,w=[],y=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,C=null,P=null,D=null,G=null;this._outputColorSpace=yn;let X=0,W=0,it=null,Q=-1,j=null,at=new je,It=new je,Dt=null,Ee=new Zt(0),re=0,ne=n.width,Z=n.height,nt=1,xt=null,Ht=null,pt=new je(0,0,ne,Z),Xt=new je(0,0,ne,Z),Ze=!1,Jt=new wl,ie=!1,Se=!1,Kt=new Le,be=new B,cn=new je,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Je(){return it===null?nt:1}let L=i;function Bt(M,U){return n.getContext(M,U)}let oe,N,_,F,q,J,ot,ht,K,tt,lt,Et,ct,ft,At,Ot,Yt,z,dt,$,ut,mt,st;try{let M={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",Ce,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",_t,!1),L===null){let U="webgl2";if(L=Bt(U,M),L===null)throw Bt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(M){throw n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",_t,!1),Vt("WebGLRenderer: "+M.message),M}function Ut(){oe=new AN(L),oe.init(),ut=new fU(L,oe),N=new gN(L,oe,t,ut),_=new uU(L,oe),N.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),P=L.createFramebuffer(),D=L.createFramebuffer(),G=L.createFramebuffer(),F=new CN(L),q=new KD,J=new hU(L,oe,_,q,N,ut,F),ot=new EN(R),ht=new DR(L),mt=new pN(L,ht),K=new wN(L,ht,F,mt),tt=new DN(L,K,ht,mt,F),z=new NN(L,N,J),At=new xN(q),lt=new JD(R,ot,oe,N,mt,At),Et=new gU(R,q),ct=new jD,ft=new aU(oe),Yt=new dN(R,ot,_,tt,x,l),Ot=new cU(R,tt,N),st=new xU(L,F,N,_),dt=new mN(L,oe,F),$=new RN(L,oe,F),F.programs=lt.programs,R.capabilities=N,R.extensions=oe,R.properties=q,R.renderLists=ct,R.shadowMap=Ot,R.state=_,R.info=F}S!==fi&&(A=new LN(S,n.width,n.height,o,a,s));let wt=new iv(R,L);this.xr=wt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(M){M!==void 0&&(nt=M,this.setSize(ne,Z,!1))},this.getSize=function(M){return M.set(ne,Z)},this.setSize=function(M,U,Y=!0){if(wt.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=M,Z=U,n.width=Math.floor(M*nt),n.height=Math.floor(U*nt),Y===!0&&(n.style.width=M+"px",n.style.height=U+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(ne*nt,Z*nt).floor()},this.setDrawingBufferSize=function(M,U,Y){ne=M,Z=U,nt=Y,n.width=Math.floor(M*Y),n.height=Math.floor(U*Y),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(S===fi){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(at)},this.getViewport=function(M){return M.copy(pt)},this.setViewport=function(M,U,Y,V){M.isVector4?pt.set(M.x,M.y,M.z,M.w):pt.set(M,U,Y,V),_.viewport(at.copy(pt).multiplyScalar(nt).round())},this.getScissor=function(M){return M.copy(Xt)},this.setScissor=function(M,U,Y,V){M.isVector4?Xt.set(M.x,M.y,M.z,M.w):Xt.set(M,U,Y,V),_.scissor(It.copy(Xt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(M){_.setScissorTest(Ze=M)},this.setOpaqueSort=function(M){xt=M},this.setTransparentSort=function(M){Ht=M},this.getClearColor=function(M){return M.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,Y=!0){let V=0;if(M){let k=!1;if(it!==null){let yt=it.texture.format;k=g.has(yt)}if(k){let yt=it.texture.type,Tt=f.has(yt),vt=Yt.getClearColor(),Ct=Yt.getClearAlpha(),Lt=vt.r,$t=vt.g,le=vt.b;Tt?(m[0]=Lt,m[1]=$t,m[2]=le,m[3]=Ct,L.clearBufferuiv(L.COLOR,0,m)):(b[0]=Lt,b[1]=$t,b[2]=le,b[3]=Ct,L.clearBufferiv(L.COLOR,0,b))}else V|=L.COLOR_BUFFER_BIT}U&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),C=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",_t,!1),Yt.dispose(),ct.dispose(),ft.dispose(),q.dispose(),ot.dispose(),tt.dispose(),mt.dispose(),st.dispose(),lt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",rn),wt.removeEventListener("sessionend",pi),Hn.stop()};function Ce(M){M.preventDefault(),Ux("WebGLRenderer: Context Lost."),I=!0}function ge(){Ux("WebGLRenderer: Context Restored."),I=!1;let M=F.autoReset,U=Ot.enabled,Y=Ot.autoUpdate,V=Ot.needsUpdate,k=Ot.type;Ut(),F.autoReset=M,Ot.enabled=U,Ot.autoUpdate=Y,Ot.needsUpdate=V,Ot.type=k}function _t(M){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Pt(M){let U=M.target;U.removeEventListener("dispose",Pt),ye(U)}function ye(M){pe(M),q.remove(M)}function pe(M){let U=q.get(M).programs;U!==void 0&&(U.forEach(function(Y){lt.releaseProgram(Y)}),M.isShaderMaterial&&lt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,Y,V,k,yt){U===null&&(U=mn);let Tt=k.isMesh&&k.matrixWorld.determinantAffine()<0,vt=Dp(M,U,Y,V,k);_.setMaterial(V,Tt);let Ct=Y.index,Lt=1;if(V.wireframe===!0){if(Ct=K.getWireframeAttribute(Y),Ct===void 0)return;Lt=2}let $t=Y.drawRange,le=Y.attributes.position,Nt=$t.start*Lt,Ae=($t.start+$t.count)*Lt;yt!==null&&(Nt=Math.max(Nt,yt.start*Lt),Ae=Math.min(Ae,(yt.start+yt.count)*Lt)),Ct!==null?(Nt=Math.max(Nt,0),Ae=Math.min(Ae,Ct.count)):le!=null&&(Nt=Math.max(Nt,0),Ae=Math.min(Ae,le.count));let un=Ae-Nt;if(un<0||un===1/0)return;mt.setup(k,V,vt,Y,Ct);let We,ze=dt;if(Ct!==null&&(We=ht.get(Ct),ze=$,ze.setIndex(We)),k.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*Je()),ze.setMode(L.LINES)):ze.setMode(L.TRIANGLES);else if(k.isLine){let Gn=V.linewidth;Gn===void 0&&(Gn=1),_.setLineWidth(Gn*Je()),k.isLineSegments?ze.setMode(L.LINES):k.isLineLoop?ze.setMode(L.LINE_LOOP):ze.setMode(L.LINE_STRIP)}else k.isPoints?ze.setMode(L.POINTS):k.isSprite&&ze.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))ze.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Gn=k._multiDrawStarts,bt=k._multiDrawCounts,Jn=k._multiDrawCount,ve=Ct?ht.get(Ct).bytesPerElement:1,Li=q.get(V).currentProgram.getUniforms();for(let ma=0;ma<Jn;ma++)Li.setValue(L,"_gl_DrawID",ma),ze.render(Gn[ma]/ve,bt[ma])}else if(k.isInstancedMesh)ze.renderInstances(Nt,un,k.count);else if(Y.isInstancedBufferGeometry){let Gn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,bt=Math.min(Y.instanceCount,Gn);ze.renderInstances(Nt,un,bt)}else ze.render(Nt,un)};function O(M,U,Y,V){C!==null&&M.isNodeMaterial&&C.setObject(V,M),ie===!0&&At.setState(M,Y,!1),M.transparent===!0&&M.side===Fa&&M.forceSinglePass===!1?(M.side=Fn,M.needsUpdate=!0,ka(M,U,V),M.side=cr,M.needsUpdate=!0,ka(M,U,V),M.side=Fa):ka(M,U,V)}this.compile=function(M,U,Y=null){Y===null&&(Y=M),C!==null&&C.renderStart(M,U,Y),E=ft.get(Y),E.init(U),y.push(E),Y.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),M!==Y&&M.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights(),C!==null&&C.updateLights(E.state.lightsArray),Se=this.localClippingEnabled,ie=At.init(this.clippingPlanes,Se),ie===!0&&At.setGlobalState(this.clippingPlanes,U),C!==null&&Ot.render(E.state.shadowsArray,Y,U);let V=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let yt=k.material;if(yt)if(Array.isArray(yt))for(let Tt=0;Tt<yt.length;Tt++){let vt=yt[Tt];O(vt,Y,U,k),V.add(vt)}else O(yt,Y,U,k),V.add(yt)}),E=y.pop(),C!==null&&C.renderEnd(),V},this.compileAsync=function(M,U,Y=null){let V=this.compile(M,U,Y);return new Promise(k=>{function yt(){if(V.forEach(function(Tt){let Ct=q.get(Tt).currentProgram;(Ct===void 0||Ct.isReady())&&V.delete(Tt)}),V.size===0){k(M);return}setTimeout(yt,10)}oe.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let xe=null;function di(M){xe&&xe(M)}function rn(){Hn.stop()}function pi(){Hn.start()}let Hn=new fT;Hn.setAnimationLoop(di),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(M){xe=M,wt.setAnimationLoop(M),M===null?Hn.stop():Hn.start()},wt.addEventListener("sessionstart",rn),wt.addEventListener("sessionend",pi),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;C!==null&&C.renderStart(M,U);let Y=wt.enabled===!0&&wt.isPresenting===!0,V=A!==null&&(it===null||Y)&&A.begin(R,it);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(U),U=wt.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,U,it),E=ft.get(M,y.length),E.init(U),E.state.textureUnits=J.getTextureUnits(),y.push(E),Kt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Jt.setFromProjectionMatrix(Kt,oa,U.reversedDepth),Se=this.localClippingEnabled,ie=At.init(this.clippingPlanes,Se),T=ct.get(M,w.length),T.init(),w.push(T),wt.enabled===!0&&wt.isPresenting===!0){let Tt=R.xr.getDepthSensingMesh();Tt!==null&&Di(Tt,U,-1/0,R.sortObjects)}Di(M,U,0,R.sortObjects),T.finish(),C!==null&&C.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(xt,Ht),Pe=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,Pe&&Yt.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&At.beginShadows();let k=E.state.shadowsArray;if(Ot.render(k,M,U),ie===!0&&At.endShadows(),(V&&A.hasRenderPass())===!1){let Tt=T.opaque,vt=T.transmissive;if(E.setupLights(),U.isArrayCamera){let Ct=U.cameras;if(vt.length>0)for(let Lt=0,$t=Ct.length;Lt<$t;Lt++){let le=Ct[Lt];pa(Tt,vt,M,le)}Pe&&Yt.render(M);for(let Lt=0,$t=Ct.length;Lt<$t;Lt++){let le=Ct[Lt];Ui(T,M,le,le.viewport)}}else vt.length>0&&pa(Tt,vt,M,U),Pe&&Yt.render(M),Ui(T,M,U)}it!==null&&W===0&&(J.updateMultisampleRenderTarget(it),J.updateRenderTargetMipmap(it)),V&&A.end(R),M.isScene===!0&&M.onAfterRender(R,M,U),mt.resetDefaultState(),Q=-1,j=null,y.pop(),y.length>0?(E=y[y.length-1],J.setTextureUnits(E.state.textureUnits),ie===!0&&At.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,C!==null&&C.renderEnd()};function Di(M,U,Y,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Jt)){V&&cn.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Kt);let Tt=tt.update(M),vt=M.material;vt.visible&&T.push(M,Tt,vt,Y,cn.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Jt))){let Tt=tt.update(M),vt=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),cn.copy(M.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),cn.copy(Tt.boundingSphere.center)),cn.applyMatrix4(M.matrixWorld).applyMatrix4(Kt)),Array.isArray(vt)){let Ct=Tt.groups;for(let Lt=0,$t=Ct.length;Lt<$t;Lt++){let le=Ct[Lt],Nt=vt[le.materialIndex];Nt&&Nt.visible&&T.push(M,Tt,Nt,Y,cn.z,le,U)}}else vt.visible&&T.push(M,Tt,vt,Y,cn.z,null,U)}}let yt=M.children;for(let Tt=0,vt=yt.length;Tt<vt;Tt++)Di(yt[Tt],U,Y,V)}function Ui(M,U,Y,V){let{opaque:k,transmissive:yt,transparent:Tt}=M;E.setupLightsView(Y),ie===!0&&At.setGlobalState(R.clippingPlanes,Y),V&&_.viewport(at.copy(V)),k.length>0&&Zn(k,U,Y),yt.length>0&&Zn(yt,U,Y),Tt.length>0&&Zn(Tt,U,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function pa(M,U,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Nt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new hi(1,1,{generateMipmaps:!0,type:Nt?da:fi,minFilter:hr,samples:Math.max(4,N.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fe.workingColorSpace})}let yt=E.state.transmissionRenderTarget[V.id],Tt=V.viewport||at;yt.setSize(Tt.z*R.transmissionResolutionScale,Tt.w*R.transmissionResolutionScale);let vt=R.getRenderTarget(),Ct=R.getActiveCubeFace(),Lt=R.getActiveMipmapLevel();R.setRenderTarget(yt),R.getClearColor(Ee),re=R.getClearAlpha(),re<1&&R.setClearColor(16777215,.5),R.clear(),Pe&&Yt.render(Y);let $t=R.toneMapping;R.toneMapping=ha;let le=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),ie===!0&&At.setGlobalState(R.clippingPlanes,V),Zn(M,Y,V),J.updateMultisampleRenderTarget(yt),J.updateRenderTargetMipmap(yt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Ae=0,un=U.length;Ae<un;Ae++){let We=U[Ae],{object:ze,geometry:Gn,material:bt,group:Jn}=We;if(bt.side===Fa&&ze.layers.test(V.layers)){let ve=bt.side;bt.side=Fn,bt.needsUpdate=!0,xs(ze,Y,V,Gn,bt,Jn),bt.side=ve,bt.needsUpdate=!0,Nt=!0}}Nt===!0&&(J.updateMultisampleRenderTarget(yt),J.updateRenderTargetMipmap(yt))}R.setRenderTarget(vt,Ct,Lt),R.setClearColor(Ee,re),le!==void 0&&(V.viewport=le),R.toneMapping=$t}function Zn(M,U,Y){let V=U.isScene===!0?U.overrideMaterial:null;for(let k=0,yt=M.length;k<yt;k++){let Tt=M[k],{object:vt,geometry:Ct,group:Lt}=Tt,$t=Tt.material;$t.allowOverride===!0&&V!==null&&($t=V),vt.layers.test(Y.layers)&&xs(vt,U,Y,Ct,$t,Lt)}}function xs(M,U,Y,V,k,yt){C!==null&&k.isNodeMaterial&&C.setObject(M,k),M.onBeforeRender(R,U,Y,V,k,yt),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(R,U,Y,V,M,yt),k.transparent===!0&&k.side===Fa&&k.forceSinglePass===!1?(k.side=Fn,k.needsUpdate=!0,R.renderBufferDirect(Y,U,V,k,M,yt),k.side=cr,k.needsUpdate=!0,R.renderBufferDirect(Y,U,V,k,M,yt),k.side=Fa):R.renderBufferDirect(Y,U,V,k,M,yt),M.onAfterRender(R,U,Y,V,k,yt)}function ka(M,U,Y){U.isScene!==!0&&(U=mn);let V=q.get(M),k=E.state.lights,yt=E.state.shadowsArray,Tt=k.state.version,vt=lt.getParameters(M,k.state,yt,U,Y,E.state.lightProbeGridArray),Ct=lt.getProgramCacheKey(vt),Lt=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let $t=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=ot.get(M.envMap||V.environment,$t),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Lt===void 0&&(M.addEventListener("dispose",Pt),Lt=new Map,V.programs=Lt);let le=Lt.get(Ct);if(le!==void 0){if(V.currentProgram===le&&V.lightsStateVersion===Tt)return Wl(M,vt),le}else vt.uniforms=lt.getUniforms(M),C!==null&&M.isNodeMaterial&&C.build(M,Y,vt),M.onBeforeCompile(vt,R),le=lt.acquireProgram(vt,Ct),Lt.set(Ct,le),V.uniforms=vt.uniforms;let Nt=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Nt.clippingPlanes=At.uniform),Wl(M,vt),V.needsLights=Rt(M),V.lightsStateVersion=Tt,V.needsLights&&(Nt.ambientLightColor.value=k.state.ambient,Nt.lightProbe.value=k.state.probe,Nt.sunLights.value=k.state.sun,Nt.sunLightShadows.value=k.state.sunShadow,Nt.directionalLights.value=k.state.directional,Nt.directionalLightShadows.value=k.state.directionalShadow,Nt.spotLights.value=k.state.spot,Nt.spotLightShadows.value=k.state.spotShadow,Nt.rectAreaLights.value=k.state.rectArea,Nt.ltc_1.value=k.state.rectAreaLTC1,Nt.ltc_2.value=k.state.rectAreaLTC2,Nt.pointLights.value=k.state.point,Nt.pointLightShadows.value=k.state.pointShadow,Nt.hemisphereLights.value=k.state.hemi,Nt.sunShadowMatrix.value=k.state.sunShadowMatrix,Nt.sunShadowCascade.value=k.state.sunShadowCascade,Nt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Nt.spotLightMatrix.value=k.state.spotLightMatrix,Nt.spotLightMap.value=k.state.spotLightMap,Nt.pointShadowMatrix.value=k.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=le,V.uniformsList=null,le}function Xl(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Bl.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Wl(M,U){let Y=q.get(M);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Np(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let Y=0,V=M.length;Y<V;Y++){let k=M[Y];if(k.texture!==null&&k.boundingBox.containsPoint(v))return k}return null}function Dp(M,U,Y,V,k){U.isScene!==!0&&(U=mn),J.resetTextureUnits();let yt=U.fog,Tt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,vt=it===null?R.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:fe.workingColorSpace,Ct=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Lt=ot.get(V.envMap||Tt,Ct),$t=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,le=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Nt=!!Y.morphAttributes.position,Ae=!!Y.morphAttributes.normal,un=!!Y.morphAttributes.color,We=ha;V.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(We=R.toneMapping);let ze=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Gn=ze!==void 0?ze.length:0,bt=q.get(V),Jn=E.state.lights;if(ie===!0&&(Se===!0||M!==j)){let He=M===j&&V.id===Q;At.setState(V,M,He)}let ve=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Jn.state.version||bt.outputColorSpace!==vt||k.isBatchedMesh&&bt.batching===!1||!k.isBatchedMesh&&bt.batching===!0||k.isBatchedMesh&&bt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&bt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&bt.instancing===!1||!k.isInstancedMesh&&bt.instancing===!0||k.isSkinnedMesh&&bt.skinning===!1||!k.isSkinnedMesh&&bt.skinning===!0||k.isInstancedMesh&&bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&bt.instancingMorph===!1&&k.morphTexture!==null||bt.envMap!==Lt||V.fog===!0&&bt.fog!==yt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==At.numPlanes||bt.numIntersection!==At.numIntersection)||bt.vertexAlphas!==$t||bt.vertexTangents!==le||bt.morphTargets!==Nt||bt.morphNormals!==Ae||bt.morphColors!==un||bt.toneMapping!==We||bt.morphTargetsCount!==Gn||!!bt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,bt.__version=V.version);let Li=bt.currentProgram;ve===!0&&(Li=ka(V,U,k),C&&V.isNodeMaterial&&C.onUpdateProgram(V,Li,bt));let ma=!1,vs=!1,io=!1,Ie=Li.getUniforms(),on=bt.uniforms;if(_.useProgram(Li.program)&&(ma=!0,vs=!0,io=!0),V.id!==Q&&(Q=V.id,vs=!0),bt.needsLights){let He=Np(E.state.lightProbeGridArray,k);bt.lightProbeGrid!==He&&(bt.lightProbeGrid=He,vs=!0)}if(ma||j!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ie.setValue(L,"projectionMatrix",M.projectionMatrix),Ie.setValue(L,"viewMatrix",M.matrixWorldInverse);let _s=Ie.map.cameraPosition;_s!==void 0&&_s.setValue(L,be.setFromMatrixPosition(M.matrixWorld)),N.logarithmicDepthBuffer&&Ie.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ie.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,vs=!0,io=!0)}if(bt.needsLights&&(Jn.state.sunShadowMap.length>0&&Ie.setValue(L,"sunShadowMap",Jn.state.sunShadowMap,J),Jn.state.directionalShadowMap.length>0&&Ie.setValue(L,"directionalShadowMap",Jn.state.directionalShadowMap,J),Jn.state.spotShadowMap.length>0&&Ie.setValue(L,"spotShadowMap",Jn.state.spotShadowMap,J),Jn.state.pointShadowMap.length>0&&Ie.setValue(L,"pointShadowMap",Jn.state.pointShadowMap,J)),k.isSkinnedMesh){Ie.setOptional(L,k,"bindMatrix"),Ie.setOptional(L,k,"bindMatrixInverse");let He=k.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Ie.setValue(L,"boneTexture",He.boneTexture,J))}k.isBatchedMesh&&(Ie.setOptional(L,k,"batchingTexture"),Ie.setValue(L,"batchingTexture",k._matricesTexture,J),Ie.setOptional(L,k,"batchingIdTexture"),Ie.setValue(L,"batchingIdTexture",k._indirectTexture,J),Ie.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&Ie.setValue(L,"batchingColorTexture",k._colorsTexture,J));let ys=Y.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0)&&z.update(k,Y,Li),(vs||bt.receiveShadow!==k.receiveShadow)&&(bt.receiveShadow=k.receiveShadow,Ie.setValue(L,"receiveShadow",k.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(on.envMapIntensity.value=U.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=yU()),vs){if(Ie.setValue(L,"toneMappingExposure",R.toneMappingExposure),bt.needsLights&&Up(on,io),yt&&V.fog===!0&&Et.refreshFogUniforms(on,yt),Et.refreshMaterialUniforms(on,V,nt,Z,E.state.transmissionRenderTarget[M.id]),bt.needsLights&&bt.lightProbeGrid){let He=bt.lightProbeGrid;on.probesSH.value=He.texture,on.probesMin.value.copy(He.boundingBox.min),on.probesMax.value.copy(He.boundingBox.max),on.probesResolution.value.copy(He.resolution)}Bl.upload(L,Xl(bt),on,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Bl.upload(L,Xl(bt),on,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ie.setValue(L,"center",k.center),Ie.setValue(L,"modelViewMatrix",k.modelViewMatrix),Ie.setValue(L,"normalMatrix",k.normalMatrix),Ie.setValue(L,"modelMatrix",k.matrixWorld),V.uniformsGroups!==void 0){let He=V.uniformsGroups;for(let _s=0,ao=He.length;_s<ao;_s++){let hv=He[_s];st.update(hv,Li),st.bind(hv,Li)}}return Li}function Up(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Rt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(M,U,Y){let V=q.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(M.texture).__webglTexture=U,q.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let Y=q.get(M);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,Y=0){it=M,X=U,W=Y;let V=null,k=!1,yt=!1;if(M){let vt=q.get(M);if(vt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,vt.__webglFramebuffer),at.copy(M.viewport),It.copy(M.scissor),Dt=M.scissorTest,_.viewport(at),_.scissor(It),_.setScissorTest(Dt),Q=-1;return}else if(vt.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(vt.__hasExternalTextures)J.rebindTextures(M,q.get(M.texture).__webglTexture,q.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let $t=M.depthTexture;if(vt.__boundDepthTexture!==$t){if($t!==null&&q.has($t)&&(M.width!==$t.image.width||M.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}let Ct=M.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(yt=!0);let Lt=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?V=Lt[U][Y]:V=Lt[U],k=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?V=q.get(M).__webglMultisampledFramebuffer:Array.isArray(Lt)?V=Lt[Y]:V=Lt,at.copy(M.viewport),It.copy(M.scissor),Dt=M.scissorTest}else at.copy(pt).multiplyScalar(nt).floor(),It.copy(Xt).multiplyScalar(nt).floor(),Dt=Ze;if(Y!==0&&(V=P),_.bindFramebuffer(L.FRAMEBUFFER,V)&&_.drawBuffers(M,V),_.viewport(at),_.scissor(It),_.setScissorTest(Dt),k){let vt=q.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,Y)}else if(yt){let vt=U;for(let Ct=0;Ct<M.textures.length;Ct++){let Lt=q.get(M.textures[Ct]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,Y,vt)}}else if(M!==null&&Y!==0){let vt=q.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vt.__webglTexture,Y)}Q=-1};function St(M){let U=q.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=N.textureFormatReadable(M.format),U.__typeReadable=N.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,Y,V,k,yt,Tt,vt=0){if(!(M&&M.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){_.bindFramebuffer(L.FRAMEBUFFER,Ct);try{let Lt=M.textures[vt],$t=Lt.format,le=Lt.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+vt);let Nt=St(Lt);if(Nt.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&Y>=0&&Y<=M.height-k&&L.readPixels(U,Y,V,k,ut.convert($t),ut.convert(le),yt)}finally{let Lt=it!==null?q.get(it).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(M,U,Y,V,k,yt,Tt,vt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct)if(U>=0&&U<=M.width-V&&Y>=0&&Y<=M.height-k){_.bindFramebuffer(L.FRAMEBUFFER,Ct);let Lt=M.textures[vt],$t=Lt.format,le=Lt.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+vt);let Nt=St(Lt);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,yt.byteLength,L.STREAM_READ),L.readPixels(U,Y,V,k,ut.convert($t),ut.convert(le),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let un=it!==null?q.get(it).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,un);let We=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await FM(L,We,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,yt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Ae),L.deleteSync(We),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,Y=0){let V=Math.pow(2,-Y),k=Math.floor(M.image.width*V),yt=Math.floor(M.image.height*V),Tt=U!==null?U.x:0,vt=U!==null?U.y:0;J.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Tt,vt,k,yt),_.unbindTexture()},this.copyTextureToTexture=function(M,U,Y=null,V=null,k=0,yt=0){let Tt,vt,Ct,Lt,$t,le,Nt,Ae,un,We=M.isCompressedTexture?M.mipmaps[yt]:M.image;if(Y!==null)Tt=Y.max.x-Y.min.x,vt=Y.max.y-Y.min.y,Ct=Y.isBox3?Y.max.z-Y.min.z:1,Lt=Y.min.x,$t=Y.min.y,le=Y.isBox3?Y.min.z:0;else{let on=Math.pow(2,-k);Tt=Math.floor(We.width*on),vt=Math.floor(We.height*on),M.isDataArrayTexture?Ct=We.depth:M.isData3DTexture?Ct=Math.floor(We.depth*on):Ct=1,Lt=0,$t=0,le=0}V!==null?(Nt=V.x,Ae=V.y,un=V.z):(Nt=0,Ae=0,un=0);let ze=ut.convert(U.format),Gn=ut.convert(U.type),bt;U.isData3DTexture?(J.setTexture3D(U,0),bt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),bt=L.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),bt=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let Jn=_.getParameter(L.UNPACK_ROW_LENGTH),ve=_.getParameter(L.UNPACK_IMAGE_HEIGHT),Li=_.getParameter(L.UNPACK_SKIP_PIXELS),ma=_.getParameter(L.UNPACK_SKIP_ROWS),vs=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,We.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,We.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),_.pixelStorei(L.UNPACK_SKIP_ROWS,$t),_.pixelStorei(L.UNPACK_SKIP_IMAGES,le);let io=M.isDataArrayTexture||M.isData3DTexture,Ie=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let on=q.get(M),ys=q.get(U),He=q.get(on.__renderTarget),_s=q.get(ys.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,He.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,_s.__webglFramebuffer);for(let ao=0;ao<Ct;ao++)io&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(M).__webglTexture,k,le+ao),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(U).__webglTexture,yt,un+ao)),L.blitFramebuffer(Lt,$t,Tt,vt,Nt,Ae,Tt,vt,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||q.has(M)){let on=q.get(M),ys=q.get(U);_.bindFramebuffer(L.READ_FRAMEBUFFER,D),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,G);for(let He=0;He<Ct;He++)io?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,on.__webglTexture,k,le+He):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,on.__webglTexture,k),Ie?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ys.__webglTexture,yt,un+He):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ys.__webglTexture,yt),k!==0?L.blitFramebuffer(Lt,$t,Tt,vt,Nt,Ae,Tt,vt,L.COLOR_BUFFER_BIT,L.NEAREST):Ie?L.copyTexSubImage3D(bt,yt,Nt,Ae,un+He,Lt,$t,Tt,vt):L.copyTexSubImage2D(bt,yt,Nt,Ae,Lt,$t,Tt,vt);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ie?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(bt,yt,Nt,Ae,un,Tt,vt,Ct,ze,Gn,We.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(bt,yt,Nt,Ae,un,Tt,vt,Ct,ze,We.data):L.texSubImage3D(bt,yt,Nt,Ae,un,Tt,vt,Ct,ze,Gn,We):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,yt,Nt,Ae,Tt,vt,ze,Gn,We.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,yt,Nt,Ae,We.width,We.height,ze,We.data):L.texSubImage2D(L.TEXTURE_2D,yt,Nt,Ae,Tt,vt,ze,Gn,We);_.pixelStorei(L.UNPACK_ROW_LENGTH,Jn),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ve),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Li),_.pixelStorei(L.UNPACK_SKIP_ROWS,ma),_.pixelStorei(L.UNPACK_SKIP_IMAGES,vs),yt===0&&U.generateMipmaps&&L.generateMipmap(bt),_.unbindTexture()},this.initRenderTarget=function(M){q.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){X=0,W=0,it=null,_.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),n.unpackColorSpace=fe._getUnpackColorSpace()}};var Mp=class extends Yr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Wi;t.deleteAttribute("uv");let n=new se({side:Fn}),i=new se,a=new bu(16777215,900,28,2);a.position.set(.418,16.199,.3),this.add(a);let s=new Mt(t,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let r=new Zr(t,i,6),o=new Cn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let l=new Mt(t,Gl(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Mt(t,Gl(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Mt(t,Gl(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let p=new Mt(t,Gl(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let u=new Mt(t,Gl(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new Mt(t,Gl(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(let n of t)n.dispose()}};function Gl(e){return new xu({color:0,emissive:16777215,emissiveIntensity:e})}var av=[{customerName:"Dona Neide",orderItem:"2x Marmitex de Feijoada Completa",houseLabel:"Casa 42 \xB7 Port\xE3o Verde",rewardCoins:15,bonusTime:22},{customerName:"Seu Jorge da Oficina",orderItem:"Combo Pastel de Feira + Caldo de Cana",houseLabel:"Borracharia & Oficina 2 Irm\xE3os",rewardCoins:20,bonusTime:20},{customerName:"Cleide Cabeleireira",orderItem:"A\xE7a\xED Turbinado 700ml c/ Leite Ninho",houseLabel:"Sal\xE3o Beleza Pura \xB7 N\xBA 108",rewardCoins:25,bonusTime:20},{customerName:"Ti\xE3o do Sinuca",orderItem:"Por\xE7\xE3o de Torresmo Crocante",houseLabel:"Bar & Mercearia do Ti\xE3o",rewardCoins:30,bonusTime:19},{customerName:"Juninho Gamer",orderItem:"Pizza Gigante Metade Calabresa Metade Frango",houseLabel:"Vila das Palmeiras \xB7 Sobrado Azul",rewardCoins:35,bonusTime:18},{customerName:"V\xF3 Lurdes",orderItem:"Bolo de Milho Quentinho + Caf\xE9 Coado",houseLabel:"Travessa do Sol \xB7 Casa Rosa",rewardCoins:40,bonusTime:18}];function Bu(e){return Math.max(-3.85,Math.min(3.85,e))}function yT(e,t,n){let a=23+Math.min(e*2.2,16);return t&&(a*=.58),n>0&&(a*=.52),a}function no(e){return 250+Math.min(e*55,330)}function Fu(e){let t=av[e%av.length],n=Math.floor(e/av.length)*10;return{...t,rewardCoins:t.rewardCoins+n}}function _T(e,t){let n=e-t;return n<=36*.7&&n>=-36*.45}function ST(e,t,n){if(n.hit)return!1;let i=.48,a=1.05,s=Math.abs(e-n.x),r=Math.abs(t-n.z),o=i+n.width*.5,l=a+n.length*.5;return s<o&&r<l}function bT(e,t,n){if(n.collected)return!1;let i=Math.abs(e-n.x),a=Math.abs(t-n.z);return i<1.3&&a<1.55}function MT(e){return e<=0}function TT(e,t){if(t.state!=="warning"&&t.state!=="chasing")return!1;let n=Math.abs(e-t.x),i=t.distanceAhead;return i>=-1.5&&i<=22&&n<=3.2}function ET(e,t,n,i){let a={...e},s=!1,r=!1,o=!1;a.stateTimer-=n,a.barkCooldown=Math.max(0,a.barkCooldown-n);let l=1+Math.min(i*.12,.75);switch(a.state){case"hidden":{a.stateTimer<=0&&(a.state="warning",a.stateTimer=1.65,a.lateralSide=Math.random()<.5?-1:1,a.x=a.lateralSide*4.1,a.distanceAhead=15.5,a.barkCooldown=.05,r=!0,o=!0);break}case"warning":{let c=Bu(t+a.lateralSide*1.15);a.x+=(c-a.x)*Math.min(1,n*3.8),a.distanceAhead+=(11-a.distanceAhead)*Math.min(1,n*3.2),a.barkCooldown<=0&&(o=!0,a.barkCooldown=.65),a.stateTimer<=0&&(a.state="chasing",a.stateTimer=5.5);break}case"chasing":{let c=2.6*l,h=3.1*l;a.distanceAhead=Math.max(.5,a.distanceAhead-c*n);let p=t-a.x;a.x+=Math.sign(p)*Math.min(Math.abs(p),h*n),a.x=Bu(a.x),a.barkCooldown<=0&&(o=!0,a.barkCooldown=.8),a.distanceAhead<=1.15&&Math.abs(a.x-t)<1.05?(s=!0,a.state="retreating",a.stateTimer=2.2):a.stateTimer<=0&&(a.state="retreating",a.stateTimer=2);break}case"spooked":{a.x+=(a.lateralSide*4.5-a.x)*Math.min(1,n*3.5),a.distanceAhead-=10.5*n,a.stateTimer<=0&&(a.state="hidden",a.stateTimer=Math.max(5,10.5-i*.85));break}case"retreating":{a.x+=(a.lateralSide*4.9-a.x)*Math.min(1,n*4),a.distanceAhead-=9.5*n,a.stateTimer<=0&&(a.state="hidden",a.stateTimer=Math.max(5,9.5-i*.8));break}}return{nextCaramelo:a,bitPlayer:s,justStartedWarning:r,justBarked:o}}function AT(e){return{...e,state:"spooked",stateTimer:1.25,totalSpookedCount:e.totalSpookedCount+1}}function wT(e){return Math.round(e.deliveries*250+e.coins*15+e.caramelosSpooked*80+e.distanceMeters*.5)}var Hu=new B;function Ji(e,t,n,i,a,s){let r=2*Math.PI*a/4,o=Math.max(s-2*a,0),l=Math.PI/4;Hu.copy(t),Hu[i]=0,Hu.normalize();let c=.5*r/(r+o),h=1-Hu.angleTo(e)/l;return Math.sign(Hu[n])===1?h*c:o/(r+o)+c+c*(1-h)}var Vl=class e extends Wi{constructor(t=1,n=1,i=1,a=2,s=.1){let r=a*2+1;if(s=Math.min(t/2,n/2,i/2,s),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:t,height:n,depth:i,segments:a,radius:s},r===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new B,c=new B,h=new B(t,n,i).divideScalar(2).subScalar(s),p=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,x=p.length/6,S=new B,g=.5/r;for(let f=0,m=0;f<p.length;f+=3,m+=2)switch(l.fromArray(p,f),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),p[f+0]=h.x*Math.sign(l.x)+c.x*s,p[f+1]=h.y*Math.sign(l.y)+c.y*s,p[f+2]=h.z*Math.sign(l.z)+c.z*s,u[f+0]=c.x,u[f+1]=c.y,u[f+2]=c.z,Math.floor(f/x)){case 0:S.set(1,0,0),d[m+0]=Ji(S,c,"z","y",s,i),d[m+1]=1-Ji(S,c,"y","z",s,n);break;case 1:S.set(-1,0,0),d[m+0]=1-Ji(S,c,"z","y",s,i),d[m+1]=1-Ji(S,c,"y","z",s,n);break;case 2:S.set(0,1,0),d[m+0]=1-Ji(S,c,"x","z",s,t),d[m+1]=Ji(S,c,"z","x",s,i);break;case 3:S.set(0,-1,0),d[m+0]=1-Ji(S,c,"x","z",s,t),d[m+1]=1-Ji(S,c,"z","x",s,i);break;case 4:S.set(0,0,1),d[m+0]=1-Ji(S,c,"x","y",s,t),d[m+1]=1-Ji(S,c,"y","x",s,n);break;case 5:S.set(0,0,-1),d[m+0]=Ji(S,c,"x","y",s,t),d[m+1]=1-Ji(S,c,"y","x",s,n);break}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function Ni(e,t,n){return new Vl(e,t,n,1,Math.min(.075,e/4,t/4,n/4))}function RT(e=4){let t=document.createElement("canvas");t.width=512,t.height=512;let n=t.getContext("2d");n.fillStyle="#262930",n.fillRect(0,0,512,512);for(let s=0;s<750;s++){let r=Math.random()*512,o=Math.random()*512,l=30+Math.floor(Math.random()*24);n.fillStyle=`rgb(${l},${l+2},${l+5})`,n.fillRect(r,o,2,2)}n.fillStyle="#b99c68",n.fillRect(14,0,8,512),n.fillRect(490,0,8,512),n.fillStyle="#f8fafc";let i=[176,336];for(let s of i)for(let r=24;r<512;r+=128)n.fillRect(s-4,r,8,68);let a=new Jr(t);return a.colorSpace=yn,a.wrapS=fs,a.wrapT=fs,a.anisotropy=e,a}function CT(e=4){let t=document.createElement("canvas");t.width=256,t.height=128;let n=t.getContext("2d");n.fillStyle="#1e293b",n.fillRect(0,0,256,128),n.fillStyle="#facc15";for(let a=-128;a<384;a+=48)n.beginPath(),n.moveTo(a,0),n.lineTo(a+24,0),n.lineTo(a+88,128),n.lineTo(a+64,128),n.closePath(),n.fill();let i=new Jr(t);return i.colorSpace=yn,i.wrapS=fs,i.wrapT=fs,i.anisotropy=e,i}function NT(e=4){let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d");n.fillStyle="#73866a",n.fillRect(0,0,256,256),n.fillStyle="#50654f";let i=32;for(let s=0;s<8;s++)for(let r=0;r<8;r++)(s+r)%2===0&&n.fillRect(r*i,s*i,i,i);n.strokeStyle="#f3e6cf",n.lineWidth=12,n.strokeRect(6,6,244,244);let a=new Jr(t);return a.colorSpace=yn,a.anisotropy=e,a}function kl(e,t){let n=new Rl(1,20);n.rotateX(-Math.PI/2);let i=new la({color:593174,transparent:!0,opacity:.42,depthWrite:!1}),a=new Mt(n,i);return a.scale.set(e,1,t),a.position.y=.015,a}function DT(e,t){let n=new te;if(e==="lombada"){let i=new Ye(.32,.32,3.1,14,1,!1,0,Math.PI);i.rotateZ(Math.PI/2);let a=new se({map:t,color:16777215,roughness:.75,metalness:.1}),s=new Mt(i,a);s.scale.set(1,.48,1.2),n.add(s)}else if(e==="buraco"){let i=new gu(.55,.92,14);i.rotateX(-Math.PI/2);let a=new se({color:4528643,roughness:.95}),s=new Mt(i,a);s.position.y=.025,n.add(s);let r=new Rl(.58,14);r.rotateX(-Math.PI/2);let o=new se({color:988970,roughness:.12,metalness:.65}),l=new Mt(r,o);l.position.y=.02,n.add(l);let c=new se({color:3359061,roughness:.9});for(let h=0;h<5;h++){let p=h/5*Math.PI*2,u=new Mt(new ms(.14,0),c);u.position.set(Math.cos(p)*.76,.09,Math.sin(p)*.72),n.add(u)}}else if(e==="cone"){let i=new se({color:12148805,roughness:.45}),a=new se({color:16317180,emissive:16777215,emissiveIntensity:.25,roughness:.3});[-.52,.52].forEach(r=>{let o=new te;o.position.set(r,0,0);let l=new Mt(Ni(.46,.06,.46),i);l.position.y=.03;let c=new Mt(new ca(.18,.72,12),i);c.position.y=.38;let h=new Mt(new Ye(.11,.14,.16,12),a);h.position.y=.42,o.add(l,c,h),n.add(o)});let s=new Mt(Ni(1.18,.14,.08),new se({color:14004593,roughness:.6}));s.position.y=.52,n.add(s)}else if(e==="carro"){n.add(kl(1.15,2.1));let i=[7443354,14004593,7571050,16317180,12148805],a=i[Math.floor(Math.random()*i.length)],s=new se({color:a,roughness:.25,metalness:.35}),r=new se({color:988970,roughness:.1,metalness:.85}),o=new se({color:1120295,roughness:.85}),l=new se({color:16096779,emissive:16096779,emissiveIntensity:1.5}),c=new Mt(Ni(1.75,.62,3.4),s);c.position.y=.52,n.add(c);let h=new Mt(Ni(1.52,.56,1.85),s);h.position.set(0,1.08,.15),n.add(h);let p=new Mt(Ni(1.54,.46,1.65),r);p.position.set(0,1.09,.15),n.add(p);let u=new Ye(.32,.32,.24,12);u.rotateZ(Math.PI/2),[[-.86,.32,-1.05],[.86,.32,-1.05],[-.86,.32,1.05],[.86,.32,1.05]].forEach(([d,x,S])=>{let g=new Mt(u,o);g.position.set(d,x,S),n.add(g)}),[-.68,.68].forEach(d=>{let x=new Mt(Ni(.26,.16,.08),l);x.position.set(d,.58,1.71);let S=x.clone();S.position.z=-1.71,n.add(x,S)})}return n}function UT(e,t){let n=new te,i=60,a=new ua(9.2,i);a.rotateX(-Math.PI/2);let s=new se({map:t,color:16777215,roughness:.85,metalness:.05}),r=new Mt(a,s);r.receiveShadow=!0,n.add(r);let o=new se({color:13221804,roughness:.9}),l=new se({color:7571050,roughness:.95});[-1,1].forEach(g=>{let f=new Mt(Ni(4.2,.22,i),o);f.position.set(g*6.7,.11,0),f.receiveShadow=!0,n.add(f);let m=new Mt(new ua(36,i),l);m.rotateX(-Math.PI/2),m.position.set(g*26,.02,0),n.add(m)});let c=[14137735,7443354,12291448,9543810,12148805,9545120],h=new se({color:10710347,roughness:.75}),p=new se({color:3359061,roughness:.5,metalness:.4}),u=new se({color:4352115,roughness:.35}),d=new se({color:6583435,roughness:.8}),x=new se({color:7877903,roughness:.9}),S=new se({color:7571050,roughness:.75});for(let g=-22;g<=22;g+=15)[-1,1].forEach((f,m)=>{let b=Math.abs(e*17+g*3+m*7),v=c[b%c.length],T=new se({color:v,roughness:.82}),E=3.6+b%3*1.3,w=6.5,y=10.5,A=new te;A.position.set(f*12.2,0,g);let R=new Mt(Ni(w,E,y),T);R.position.y=E/2,A.add(R);let I=new Mt(new ca(w*.82,1.6,4),h);if(I.rotation.y=Math.PI/4,I.position.y=E+.8,A.add(I),b%2===0){let P=new Mt(new Ye(.75,.68,.95,10),u);P.position.set(0,E+1.2,1.8),A.add(P)}let C=new Mt(Ni(.18,2.2,3.8),p);if(C.position.set(-f*(w/2+.08),1.1,0),A.add(C),n.add(A),g%30===-22){let P=new Mt(new Ye(.11,.14,6.2,8),d);P.position.set(f*5.1,3.1,g+4),n.add(P);let D=new Mt(Ni(1.4,.1,.1),d);D.position.set(f*4.5,5.9,g+4),n.add(D)}else{let P=new te;P.position.set(f*5.6,0,g+5);let D=new Mt(new Ye(.16,.24,2.4,8),x);D.position.y=1.2;let G=new Mt(new ms(1.25,1),S);G.position.y=2.8;let X=new Mt(new ms(.95,1),S);X.position.set(.4,3.4,.3),P.add(D,G,X),n.add(P)}});return n}function LT(e){let t=new te,n=new ua(8.4,24);n.rotateX(-Math.PI/2);let i=new la({map:e,transparent:!0,opacity:.85,depthWrite:!1}),a=new Mt(n,i);a.position.y=.03,t.add(a);let s=new se({color:7571050,emissive:5268815,emissiveIntensity:.7,roughness:.25});[-4.4,4.4].forEach(d=>{let x=new Mt(new Ye(.22,.22,5.2,12),s);x.position.set(d,2.6,0),t.add(x)});let r=new Mt(Ni(9.2,.85,.35),new se({color:14004593,emissive:16096779,emissiveIntensity:.4,roughness:.3}));r.position.set(0,5.1,0),t.add(r);let o=new ca(.9,1.8,4);o.rotateX(Math.PI);let l=new Mt(o,new se({color:16707722,emissive:14004593,emissiveIntensity:1.2}));l.position.set(0,7.2,0),t.add(l);let c=new te;c.position.set(5.3,.22,0);let h=new Mt(Ni(.45,.9,.32),new se({color:15485081,roughness:.7}));h.position.y=.65;let p=new Mt(new Kr(.24,12,12),new se({color:14251782,roughness:.6}));p.position.y=1.35;let u=new Mt(Ni(.14,.55,.14),new se({color:14251782,roughness:.6}));return u.position.set(-.34,1.25,0),u.rotation.z=.65,c.add(h,p,u),t.add(c),{root:t,beaconArrow:l,customerGroup:c}}var sv=class{constructor(){ql(this,"ctx",null);ql(this,"muted",!1)}getContext(){if(this.muted||typeof window>"u")return null;if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}unlock(){this.getContext()}playHorn(){let t=this.getContext();if(!t)return;let n=t.currentTime;[520,659.25].forEach((a,s)=>{let r=t.createOscillator(),o=t.createGain();r.type="triangle",r.frequency.setValueAtTime(a,n),r.frequency.exponentialRampToValueAtTime(a*1.06,n+.12),r.frequency.setValueAtTime(a*1.18,n+.14),r.frequency.exponentialRampToValueAtTime(a*.96,n+.42),o.gain.setValueAtTime(.001,n),o.gain.linearRampToValueAtTime(.055,n+.02),o.gain.setValueAtTime(.02,n+.12),o.gain.linearRampToValueAtTime(.065,n+.15),o.gain.exponentialRampToValueAtTime(.001,n+.45),r.connect(o),o.connect(t.destination),r.start(n),r.stop(n+.46)})}playCarameloBark(){let t=this.getContext();if(!t)return;let n=t.currentTime;[0,.18].forEach(i=>{let a=n+i,s=t.createOscillator(),r=t.createGain();s.type="sawtooth",s.frequency.setValueAtTime(240,a),s.frequency.exponentialRampToValueAtTime(420,a+.045),s.frequency.exponentialRampToValueAtTime(140,a+.13),r.gain.setValueAtTime(.001,a),r.gain.linearRampToValueAtTime(.06,a+.02),r.gain.exponentialRampToValueAtTime(.001,a+.14),s.connect(r),r.connect(t.destination),s.start(a),s.stop(a+.15)})}playCarameloSpooked(){let t=this.getContext();if(!t)return;let n=t.currentTime,i=t.createOscillator(),a=t.createGain();i.type="triangle",i.frequency.setValueAtTime(320,n),i.frequency.exponentialRampToValueAtTime(920,n+.14),i.frequency.exponentialRampToValueAtTime(480,n+.26),i.frequency.exponentialRampToValueAtTime(1050,n+.38),a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(.065,n+.03),a.gain.exponentialRampToValueAtTime(.001,n+.4),i.connect(a),a.connect(t.destination),i.start(n),i.stop(n+.42)}playCoin(){let t=this.getContext();if(!t)return;let n=t.currentTime,i=t.createOscillator(),a=t.createGain();i.type="sine";let s=.96+Math.random()*.08;i.frequency.setValueAtTime(987.77*s,n),i.frequency.setValueAtTime(1318.51*s,n+.06),a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(.045,n+.015),a.gain.exponentialRampToValueAtTime(.001,n+.22),i.connect(a),a.connect(t.destination),i.start(n),i.stop(n+.24)}playCrash(){let t=this.getContext();if(!t)return;let n=t.currentTime,i=t.createOscillator(),a=t.createGain();i.type="sawtooth",i.frequency.setValueAtTime(150,n),i.frequency.exponentialRampToValueAtTime(42,n+.28),a.gain.setValueAtTime(.22,n),a.gain.exponentialRampToValueAtTime(.001,n+.3),i.connect(a),a.connect(t.destination),i.start(n),i.stop(n+.32)}playDeliverySuccess(){let t=this.getContext();if(!t)return;let n=t.currentTime;[523.25,659.25,783.99,1046.5].forEach((a,s)=>{let r=n+s*.075,o=t.createOscillator(),l=t.createGain();o.type="triangle",o.frequency.setValueAtTime(a,r),l.gain.setValueAtTime(.001,r),l.gain.linearRampToValueAtTime(.06,r+.02),l.gain.exponentialRampToValueAtTime(.001,r+.28),o.connect(l),l.connect(t.destination),o.start(r),o.stop(r+.3)})}playGameOver(){let t=this.getContext();if(!t)return;let n=t.currentTime;[392,349.23,329.63,261.63].forEach((a,s)=>{let r=n+s*.14,o=t.createOscillator(),l=t.createGain();o.type="sawtooth",o.frequency.setValueAtTime(a,r),l.gain.setValueAtTime(.001,r),l.gain.linearRampToValueAtTime(.12,r+.02),l.gain.exponentialRampToValueAtTime(.001,r+.24),o.connect(l),l.connect(t.destination),o.start(r),o.stop(r+.26)})}},Ki=new sv;var rt={petrol:2182747,cream:15984335,terra:12148805,caramel:12945989,asphalt:3423043,leaf:7571050,skin:10249022,dark:2371641,white:16775143},Tp=new Map;function _U(e){return Tp.has(e)||Tp.set(e,new se({color:e,roughness:.83})),Tp.get(e).userData.shared=!0,Tp.get(e)}function $e(e,t,n,i=0,a=0,s=0){let r=new Mt(t,_U(n));return r.position.set(i,a,s),r.castShadow=!0,r.receiveShadow=!0,e.add(r),r}function zt(e,t,n,i,a,s,r,o){let l=$e(e,new Kr(1,12,10),t,n,i,a);return l.scale.set(s,r,o),l}function kt(e,t,n,i,a,s,r,o,l=.07){return $e(e,new Vl(s,r,o,2,Math.min(l,s/3,r/3,o/3)),t,n,i,a)}function SU(e,t,n,i,a){let s=i.clone().sub(n),r=$e(e,new Ye(a,a,s.length(),8),t);return r.position.copy(n).add(i).multiplyScalar(.5),r.quaternion.setFromUnitVectors(new B(0,1,0),s.normalize()),r}function nn(e,t,n,i,a){return SU(e,t,new B(...n),new B(...i),a)}function IT(){let e=new te,t=new te;e.add(kl(.65,1.35),t);let i=[-.8,.78].map(l=>{let c=new te;c.position.set(0,.34,l),t.add(c);let h=$e(c,new qi(.29,.1,8,16),2239022);h.rotation.y=Math.PI/2;let p=$e(c,new Ye(.21,.21,.13,12),10267307);p.rotation.z=Math.PI/2;for(let u=0;u<5;u++){let d=u*Math.PI/5;nn(c,6912638,[0,Math.sin(d)*.21,Math.cos(d)*.21],[0,-Math.sin(d)*.21,-Math.cos(d)*.21],.014)}return c});kt(t,rt.dark,0,.57,.1,.32,.36,.62),nn(t,9083290,[-.14,.4,.65],[-.14,.79,-.35],.035),nn(t,9083290,[.14,.4,.65],[.14,.79,-.35],.035),zt(t,rt.petrol,0,.9,-.23,.25,.22,.43),kt(t,rt.dark,0,.87,.37,.42,.16,.64),kt(t,rt.petrol,0,.7,.88,.32,.1,.3),nn(t,10267307,[.28,.37,.4],[.28,.37,.98],.055);for(let l of[-.14,.14])nn(t,11384497,[l,.35,-.8],[l,1.12,-.62],.035);nn(t,rt.dark,[-.4,1.12,-.62],[.4,1.12,-.62],.04);let a=zt(t,rt.cream,0,.97,-.86,.15,.14,.055);kt(t,rt.terra,0,.75,.99,.23,.1,.06),zt(t,rt.petrol,0,.92,-.8,.22,.08,.3);for(let l of[-1,1])nn(t,rt.dark,[l*.2,.98,.24],[l*.25,.69,.03],.1),nn(t,rt.dark,[l*.25,.69,.03],[l*.26,.44,.29],.078),kt(t,2700087,l*.26,.38,.2,.2,.15,.34),nn(t,rt.petrol,[l*.24,1.62,.2],[l*.32,1.28,-.2],.1),nn(t,rt.petrol,[l*.32,1.28,-.2],[l*.37,1.13,-.62],.08),zt(t,rt.skin,l*.37,1.13,-.62,.075,.07,.1),nn(t,rt.dark,[l*.38,1.14,-.63],[l*.47,1.44,-.65],.012),zt(t,5532528,l*.47,1.45,-.65,.085,.06,.025);let s=zt(t,rt.petrol,0,1.4,.24,.29,.4,.23);s.rotation.x=-.12,kt(t,rt.cream,0,1.53,.025,.47,.09,.035),zt(t,rt.skin,0,1.89,.15,.18,.22,.18),zt(t,rt.cream,0,2.02,.16,.25,.27,.25);let r=zt(t,rt.petrol,0,2.05,.15,.07,.274,.253);r.scale.x=.065,zt(t,2440775,0,1.97,-.055,.207,.14,.05),kt(t,rt.cream,0,1.8,-.025,.37,.065,.1);let o=new te;o.position.set(0,1.38,.6),t.add(o),kt(o,rt.terra,0,0,0,.62,.67,.46,.1),kt(o,10637625,0,.27,.015,.65,.13,.49),kt(o,rt.cream,0,-.07,.238,.53,.085,.013),kt(o,rt.dark,0,.03,.251,.07,.19,.025);for(let l of[-1,1])kt(o,10242610,l*.23,.11,.25,.035,.49,.02);return{root:e,tiltGroup:t,frontWheel:i[0],rearWheel:i[1],headlightMesh:a,backpackMesh:o}}function OT(){let e=new te,t=new te;e.add(kl(.5,.75),t),zt(t,rt.caramel,0,.62,.03,.28,.3,.5),zt(t,15054708,0,.65,-.3,.22,.27,.18);let n=new te;n.position.set(0,1.02,-.36),t.add(n),zt(n,rt.caramel,0,0,0,.32,.3,.28),zt(n,14394207,-.09,-.1,-.23,.17,.12,.17),zt(n,14394207,.09,-.1,-.23,.17,.12,.17),zt(n,rt.dark,0,-.04,-.37,.095,.065,.065);let i=new te;i.position.set(0,-.17,-.15),n.add(i),zt(i,5847598,0,0,-.1,.17,.065,.13),zt(i,13270134,.04,-.02,-.22,.065,.025,.11);let a=[];for(let c of[-1,1]){zt(n,rt.white,c*.15,.085,-.22,.095,.115,.06),a.push(zt(n,3747368,c*.15,.08,-.271,.045,.065,.025)),zt(n,rt.white,c*.14,.105,-.294,.014,.018,.009);let h=zt(n,8937520,c*.15,.23,-.18,.105,.028,.04);h.rotation.z=c*-.14}let s=[new te,new te];s.forEach((c,h)=>{let p=h===0?-1:1;c.position.set(p*.28,.16,0),n.add(c);let u=zt(c,11037748,0,.055,0,.12,.24,.07);u.rotation.z=p*.3,h===1&&(c.rotation.z=-.75,c.position.y=.06)});let r=$e(t,new ps(.045,.35,3,8),rt.caramel,0,.85,.49);r.rotation.x=.8;let o=[[-.18,-.28],[.18,-.28],[-.18,.33],[.18,.33]].map(([c,h])=>{let p=new te;return p.position.set(c,.52,h),t.add(p),$e(p,new ps(.065,.32,3,8),rt.caramel,0,-.19,0),zt(p,14923125,0,-.4,-.035,.09,.065,.14),p}),l=new te;return e.add(l),l.visible=!1,e.userData.ears=s,e.userData.eyes=a,{root:e,bodyGroup:t,headGroup:n,jawGroup:i,tailMesh:r,legs:o,dizzyHalo:l}}function Ap(e,t=0){let n=new te,i=new te,a=[8802866,11368014,12289630][t%3],s=e==="lady"?rt.petrol:e==="vendor"?rt.cream:[rt.cream,rt.terra,rt.leaf][t%3],r=e==="kid"?.75:1;n.scale.setScalar(r);let o=[],l=[];for(let p of[-1,1]){let u=new te;u.position.set(p*.15,.76,0),n.add(u),o.push(u),$e(u,new ps(.095,.5,3,8),rt.dark,0,-.28,0),kt(u,e==="lady"?rt.terra:rt.cream,0,-.66,-.05,.22,.13,.35);let d=new te;d.position.set(p*.3,1.4,0),n.add(d),l.push(d),$e(d,new ps(.1,.42,3,8),s,0,-.22,0),zt(d,a,0,-.49,0,.09,.1,.095),d.rotation.z=p*.13}if(e==="lady"){let p=$e(n,new Ye(.29,.45,.96,12),rt.petrol,0,.88,0);p.scale.z=.75;for(let d=0;d<12;d++){let x=d*2.4;zt(n,rt.cream,Math.sin(x)*(.28+d%3*.04),.45+d%5*.16,Math.cos(x)*.26,.025,.025,.012)}for(let d of[-1,1])kt(n,rt.cream,d*.25,1.26,0,.16,.55,.4);let u=kt(n,13082473,-.53,.67,-.04,.36,.45,.26);nn(n,10714961,[-.65,.89,-.04],[-.65,1.1,-.04],.025),nn(n,10714961,[-.4,.89,-.04],[-.4,1.1,-.04],.025);for(let d of[-.61,-.48])zt(n,rt.leaf,d,.97,-.04,.07,.16,.07);u.rotation.z=-.1}else if(zt(n,s,0,1.15,0,.31,.4,.22),e==="kid"&&t===0)for(let p of[-.28,.28])zt(n,rt.petrol,p,1.33,0,.12,.17,.17);i.position.set(0,1.77,-.02),n.add(i),zt(i,a,0,0,0,.25,.29,.23),zt(i,a,0,-.045,-.24,.07,.07,.075);for(let p of[-1,1]){zt(i,rt.cream,p*.1,.055,-.2,.065,.075,.04),zt(i,rt.dark,p*.1,.055,-.236,.03,.045,.015),zt(i,a,p*.24,0,0,.06,.09,.06);let u=zt(i,rt.dark,p*.1,.16,-.18,.07,.017,.023);u.rotation.z=-p*.08}let c=$e(i,new qi(.075,.013,4,12,Math.PI),6372401,0,-.095,-.225);c.rotation.z=Math.PI;let h;if(e==="lady"){zt(i,13157816,0,.19,.04,.26,.17,.24),zt(i,13157816,0,.13,.24,.13,.14,.11);for(let p of[-.105,.105]){let u=$e(i,new qi(.095,.012,4,14),7426624,p,.055,-.249);u.scale.y=1.08}nn(i,7426624,[-.025,.055,-.25],[.025,.055,-.25],.01)}else if(e==="vendor")zt(i,7234645,0,-.16,-.07,.22,.13,.2),h=new te,i.add(h),$e(h,new Ye(.32,.34,.045,16),12884833,0,.23,0),$e(h,new Ye(.2,.24,.18,12),12884833,0,.33,0),$e(h,new Ye(.235,.235,.045,12),rt.petrol,0,.27,0);else{for(let p=0;p<8;p++){let u=p/8*Math.PI*2;zt(i,4009254,Math.cos(u)*.18,.22+p%2*.025,Math.sin(u)*.16,.1,.09,.1)}if(t===1)for(let p=0;p<4;p++)zt(i,4009254,.23+p*.04,.1-p*.06,.12,.1,.11,.1)}return{root:n,head:i,legs:o,arms:l,hat:h,reaction:0,kind:e}}function Ep(e,t,n,i=.34){for(let a of n)for(let s of[-1,1]){let r=$e(e,new Ye(i,i,.22,12),rt.dark,s*t,i,a);r.rotation.z=Math.PI/2;let o=$e(e,new Ye(i*.55,i*.55,.235,10),8688791,s*t,i,a);o.rotation.z=Math.PI/2}}function rv(e,t){if(["buraco","lombada","cone","carro"].includes(e))return DT(e,t);let n=new te;if(e==="lixeira"){kt(n,rt.leaf,0,.58,0,.82,1.05,.72),kt(n,rt.petrol,0,1.13,0,.9,.12,.81),kt(n,rt.leaf,0,1.12,.43,.7,.07,.08),Ep(n,.34,[.29],.15);for(let i of[-.23,.23])kt(n,6387545,i,.55,-.37,.055,.72,.025)}else if(e==="carrinho"){kt(n,rt.cream,0,.53,0,.65,.74,.38),kt(n,rt.terra,0,.85,-.03,.68,.21,.43),kt(n,rt.petrol,0,.25,-.21,.62,.2,.02);for(let i of[-.32,.32])nn(n,rt.dark,[i,.15,.18],[i,1.26,.18],.035);nn(n,rt.dark,[-.32,1.26,.18],[.32,1.26,.18],.04),Ep(n,.33,[.16],.19);for(let i of[-.16,.1])zt(n,rt.leaf,i,.99,0,.11,.2,.1)}else if(e==="bola"){$e(n,new ms(.35,1),rt.cream,0,.36,0);for(let i=0;i<8;i++){let a=i/8*Math.PI*2;zt(n,rt.dark,Math.cos(a)*.29,.36+Math.sin(a)*.28,-.12,.1,.1,.1)}}else if(e==="obra"){for(let i of[-.65,.65])nn(n,10450767,[i,0,-.3],[i,.9,0],.045),nn(n,10450767,[i,0,.3],[i,.9,0],.045);for(let i of[.48,.79]){kt(n,rt.cream,0,i,0,1.6,.2,.09);for(let a of[-.5,0,.5]){let s=kt(n,rt.terra,a,i,-.055,.18,.22,.014);s.rotation.z=-.4}}$e(n,new ca(.18,.55,10),rt.terra,1,.29,.2),kt(n,rt.terra,1,.035,.2,.4,.07,.4)}else if(e==="caminhao"||e==="perua"){let i=e==="caminhao",a=i?1.95:1.8,s=i?4.9:3.6;if(n.add(kl(a*.6,s*.6)),Ep(n,a*.5,[-s*.31,s*.31],i?.43:.34),kt(n,rt.dark,0,.51,.05,a*.9,.28,s*.88),i){kt(n,rt.leaf,0,1.54,.65,a,1.8,s*.65,.15),kt(n,rt.cream,0,1.25,-1.7,a,1.7,1.25,.15),kt(n,4086112,0,1.7,-2.34,1.62,.7,.018),kt(n,rt.dark,0,.9,-2.35,1.7,.28,.035),kt(n,rt.dark,0,1.2,2.3,1.5,.8,.12),kt(n,rt.leaf,0,.65,2.45,1.85,.25,.5);for(let r of[-.94,.94])nn(n,rt.terra,[r,.7,2.3],[r,2.2,2.2],.05),kt(n,rt.terra,r,2.23,2.2,.12,.13,.08);for(let r of[-.7,.7])$e(n,new Ye(.08,.08,.12,10),rt.caramel,r,2.2,-1.7)}else{kt(n,rt.terra,0,.85,0,a,.86,s,.2),kt(n,rt.cream,0,1.47,.06,a,1.07,s*.93,.21),kt(n,4086112,0,1.64,-1.69,1.57,.63,.035),kt(n,rt.cream,0,1.64,-1.72,.045,.66,.03),kt(n,rt.petrol,0,1.13,-1.81,a,.08,.03);for(let r of[-1,1])kt(n,rt.petrol,r*.9,1.13,0,.03,.08,3.3);for(let r of[-.64,.64])zt(n,rt.cream,r,.85,-1.81,.16,.16,.04)}for(let r of[-a*.39,a*.39])kt(n,rt.caramel,r,.73,-s*.5-.03,.21,.13,.06),kt(n,rt.terra,r,.75,s*.5,.18,.19,.05);kt(n,rt.dark,0,.49,-s*.5-.04,a,.16,.18);for(let r of[-1,1])nn(n,rt.dark,[r*a*.48,1.4,-s*.29],[r*a*.65,1.6,-s*.29],.025),kt(n,rt.dark,r*a*.64,1.6,-s*.29,.15,.25,.09)}return n}function PT(){let e=Ap("vendor"),t=new te;e.root.add(t),t.position.set(0,0,-.9),kt(t,rt.cream,0,.65,0,1.25,.75,.75),kt(t,rt.petrol,0,1.04,0,1.3,.12,.81),Ep(t,.65,[0],.3),nn(t,rt.petrol,[-.65,.85,.4],[.65,.85,.4],.035),nn(t,10851704,[.4,.8,0],[.4,2.85,0],.025);for(let n=0;n<8;n++){let i=$e(t,new ca(1.05,.45,1,1,!0,n*Math.PI/4,Math.PI/4),n%2?rt.cream:rt.terra,.4,2.85,0)}return zt(t,rt.terra,0,.65,-.39,.1,.17,.025),e}function zT(){let e=new te,t=[0,1,2].map(n=>{let i=Ap("kid",n);return i.root.position.set((n-1)*1.05,0,n%2*1.25),i.root.rotation.y=Math.PI/2,e.add(i.root),i});for(let n of[-.9,1.9])kt(e,rt.terra,-1.2,.14,n,.3,.27,.25);return{root:e,people:t}}function BT(){let e=new te;kt(e,rt.terra,0,.7,0,.4,1.4,2.2),zt(e,9145476,0,1.72,0,.2,.29,.32),zt(e,9671306,0,2.07,-.2,.25,.22,.2),zt(e,rt.cream,0,1.99,-.35,.16,.1,.1);for(let n of[-.15,.15]){let i=$e(e,new ca(.1,.24,3),7830904,n,2.29,-.19);i.rotation.z=n*-.7,zt(e,rt.leaf,n*.65,2.12,-.37,.065,.075,.025),zt(e,rt.dark,n*.65,2.12,-.395,.016,.05,.013),zt(e,rt.cream,n,1.45,-.23,.07,.06,.12)}let t=$e(e,new qi(.28,.04,5,12,Math.PI*1.6),7108725,0,1.78,.38);return t.rotation.y=Math.PI/2,e.userData.tail=t,e}function wp(e,t,n,i=!1){e.reaction=Math.max(0,e.reaction-n);let a=e.reaction>0,s=i?Math.sin(t*7)*.32:0;e.legs.forEach((r,o)=>r.rotation.x=s*(o===0?1:-1)),e.arms.forEach((r,o)=>{r.rotation.x=-s*.6,r.rotation.z=(o===0?1:-1)*(a?.7:.12)}),e.head.rotation.y=a?Math.sin(t*15)*.15:Math.sin(t*.8)*.1,e.hat&&(e.hat.position.y=a?Math.abs(Math.sin(e.reaction*10))*.1:0)}function HT(e,t=!1){let n=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),s={},r={},o=e[0].morphTargetsRelative,l=new _n,c=0;for(let h=0;h<e.length;++h){let p=e[h],u=0;if(n!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in p.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(p.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in p.morphAttributes){if(!a.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(p.morphAttributes[d])}if(t){let d;if(n)d=p.index.count;else if(p.attributes.position!==void 0)d=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(n){let h=0,p=[];for(let u=0;u<e.length;++u){let d=e[u].index;for(let x=0;x<d.count;++x)p.push(d.getX(x)+h);h+=e[u].attributes.position.count}l.setIndex(p)}for(let h in s){let p=FT(s[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,p)}for(let h in r){let p=r[h][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<p;++u){let d=[];for(let S=0;S<r[h].length;++S)d.push(r[h][S][u]);let x=FT(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}}return l}function FT(e){let t,n,i,a=-1,s=0;for(let c=0;c<e.length;++c){let h=e[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=h.itemSize),n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=h.gpuType),a!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*n}let r=new t(s),o=new ni(r,n,i),l=0;for(let c=0;c<e.length;++c){let h=e[c];if(h.isInterleavedBufferAttribute){let p=l/n;for(let u=0,d=h.count;u<d;u++)for(let x=0;x<n;x++){let S=h.getComponent(u,x);o.setComponent(u+p,x,S)}}else r.set(h.array,l);l+=h.count*n}return a!==void 0&&(o.gpuType=a),o}function GT(e){e.updateMatrixWorld(!0);let t=new Map,n=new Set;e.traverse(i=>{if(i instanceof Mt&&!Array.isArray(i.material)){let a=i.material,s=[a.type,a.color?.getHexString(),a.roughness,a.metalness,a.map?.uuid,a.opacity].join(":");t.has(s)||t.set(s,{mat:a,geometries:[]});let r=i.geometry.clone().applyMatrix4(i.matrixWorld),o=r.index?r.toNonIndexed():r;o!==r&&r.dispose(),t.get(s).geometries.push(o),n.add(i.geometry)}}),e.clear();for(let{mat:i,geometries:a}of t.values()){let s=HT(a,!1);if(s){let r=new Mt(s,i);r.receiveShadow=!0,e.add(r)}for(let r of a)r.dispose()}for(let i of n)i.dispose();return e}var H=gr(Gu(),1),qT="motoboy_caramelo_highscore_v1",YT="motoboy_caramelo_tutorial_v1";function cv(){let e=(0,tn.useRef)(null),[t,n]=(0,tn.useState)("title"),[i,a]=(0,tn.useState)(!1),[s,r]=(0,tn.useState)(!1),[o,l]=(0,tn.useState)(!1),[c,h]=(0,tn.useState)(!1),[p,u]=(0,tn.useState)(()=>({hearts:3,coins:0,deliveries:0,timeRemaining:65,speedKmh:0,distanceToDelivery:no(0),totalStageDistance:no(0),inDeliveryZone:!1,hornCooldown:0,carameloState:"hidden",carameloSide:1,currentDestination:Fu(0),toastMessage:null})),[d,x]=(0,tn.useState)({reason:"coracoes",score:0,highScore:0,deliveries:0,coins:0,caramelosSpooked:0,distanceMeters:0}),S=(0,tn.useRef)({screen:"title",brake:!1,spookVariant:0,spookAge:0,playerX:0,playerZ:0,targetSteerVelX:0,currentLeanZ:0,speed:0,hearts:3,coins:0,deliveries:0,timeRemaining:65,hornCooldown:0,invulnerableTimer:0,carameloSlowTimer:0,hitstopTimer:0,cameraTrauma:0,deliveryStartZ:0,deliveryTargetZ:-no(0),inDeliveryZone:!1,caramelo:{state:"hidden",x:3.8,distanceAhead:15,lateralSide:1,stateTimer:3.8,barkCooldown:0,totalSpookedCount:0},toastMessage:null,toastTimer:0,highScore:0,keysPressed:new Set,touchDragActive:!1,touchLastClientX:0,touchSteerDir:0,triggerHornRequested:!1,triggerDeliveryRequested:!1,resetRequested:!1});(0,tn.useEffect)(()=>{document.body.dataset.state=t,S.current.screen=t},[t]),(0,tn.useEffect)(()=>{try{let P=window.localStorage.getItem(qT);if(P){let D=parseInt(P,10);Number.isNaN(D)||(S.current.highScore=D,x(G=>({...G,highScore:D})))}}catch{}new URLSearchParams(window.location.search).get("autostart")==="1"&&f()},[]);let g=(0,tn.useCallback)((C,P=2.6)=>{S.current.toastMessage=C,S.current.toastTimer=P},[]),f=(0,tn.useCallback)(()=>{let C=S.current;C.screen="playing",C.brake=!1,C.spookAge=0,C.triggerHornRequested=!1,C.triggerDeliveryRequested=!1,Ki.unlock(),C.playerX=0,C.playerZ=0,C.targetSteerVelX=0,C.currentLeanZ=0,C.speed=14,C.hearts=3,C.coins=0,C.deliveries=0,C.timeRemaining=65,C.hornCooldown=0,C.invulnerableTimer=0,C.carameloSlowTimer=0,C.hitstopTimer=0,C.cameraTrauma=0,C.deliveryStartZ=0,C.deliveryTargetZ=-no(0),C.inDeliveryZone=!1,C.caramelo={state:"hidden",x:3.8,distanceAhead:15,lateralSide:1,stateTimer:3.8,barkCooldown:0,totalSpookedCount:0},C.keysPressed.clear(),C.touchSteerDir=0,C.resetRequested=!0,g("\u{1F6F5} Acelera, Motoca! Entrega da Dona Neide na sacola!",3);try{window.localStorage.getItem(YT)?r(!0):(r(!0),window.localStorage.setItem(YT,"1"))}catch{r(!0)}document.body.dataset.state="playing",n("playing"),a(!1),document.activeElement instanceof HTMLElement&&document.activeElement.blur()},[g]),m=(0,tn.useCallback)(()=>{let C=S.current;C.screen==="playing"&&(C.triggerHornRequested=!0)},[]),b=(0,tn.useCallback)(()=>{let C=S.current;C.screen==="playing"&&(C.triggerDeliveryRequested=!0)},[]),v=(0,tn.useCallback)(()=>{n(C=>C==="playing"?(S.current.keysPressed.clear(),"paused"):C==="paused"?"playing":C)},[]),T=(0,tn.useCallback)(()=>{l(C=>{let P=!C;return Ki.muted=P,P})},[]);(0,tn.useEffect)(()=>{if(t!=="playing"||!s)return;let C=window.setTimeout(()=>{r(!1)},6500);return()=>window.clearTimeout(C)},[t,s]),(0,tn.useEffect)(()=>{let C=X=>{let W=X.code,it=S.current;if(it.screen==="title"){(W==="Enter"||W==="Space")&&(X.preventDefault(),f());return}if(it.screen==="gameover"){(W==="Enter"||W==="Space")&&(X.preventDefault(),f());return}if(W==="KeyP"||W==="Escape"){X.preventDefault(),v();return}if(W==="KeyM"){X.preventDefault(),T();return}it.screen==="playing"&&(W==="Space"&&(X.preventDefault(),it.keysPressed.has("Space")||(it.triggerHornRequested=!0)),(W==="KeyE"||W==="Enter")&&(X.preventDefault(),it.inDeliveryZone&&(it.triggerDeliveryRequested=!0)),it.keysPressed.add(W))},P=X=>{S.current.keysPressed.delete(X.code)},D=()=>{S.current.keysPressed.clear(),S.current.touchDragActive=!1,S.current.brake=!1,S.current.touchSteerDir=0},G=()=>{document.hidden&&S.current.screen==="playing"&&(S.current.screen="paused",n("paused"),D())};return document.addEventListener("visibilitychange",G),window.addEventListener("keydown",C),window.addEventListener("keyup",P),window.addEventListener("blur",D),()=>{window.removeEventListener("keydown",C),window.removeEventListener("keyup",P),window.removeEventListener("blur",D),document.removeEventListener("visibilitychange",G)}},[f,v,T]),(0,tn.useEffect)(()=>{let C=e.current;if(!C)return;let P=navigator.webdriver||/HeadlessChrome/i.test(navigator.userAgent),D=new Yr,G=new Zt(13029319);D.background=G,D.fog=new uu(13029319,.007);let X=new zn(58,C.clientWidth/Math.max(1,C.clientHeight),.1,190);X.position.set(0,4.2,6.8),X.lookAt(0,1.2,-10);let W=new _p({antialias:!P,powerPreference:"high-performance"});W.outputColorSpace=yn,W.toneMapping=Tu,W.toneMappingExposure=1,W.setPixelRatio(P?1:Math.min(window.devicePixelRatio||1,1.5)),W.setSize(C.clientWidth,C.clientHeight),W.shadowMap.enabled=!P,W.shadowMap.type=Qr,C.innerHTML="",C.appendChild(W.domElement);let it=new Fl(W);D.environment=it.fromScene(new Mp,.04).texture,it.dispose();let Q=new yu(15131859,6913138,1.5);D.add(Q);let j=new Mu(16768939,2.2);if(j.position.set(16,28,18),!P){j.castShadow=!0,j.shadow.mapSize.width=1024,j.shadow.mapSize.height=1024,j.shadow.camera.near=2,j.shadow.camera.far=85;let _t=24;j.shadow.camera.left=-_t,j.shadow.camera.right=_t,j.shadow.camera.top=_t,j.shadow.camera.bottom=-_t,j.shadow.bias=-5e-4}D.add(j);let at=Math.min(4,W.capabilities.getMaxAnisotropy()),It=_t=>{_t.traverse(Pt=>{if(Pt instanceof Mt){Pt.geometry.dispose();let ye=Array.isArray(Pt.material)?Pt.material:[Pt.material];for(let pe of ye)pe.userData.shared||pe.dispose()}})},Dt=RT(at);Dt.repeat.set(1,5);let Ee=CT(at),re=NT(at),ne=Ap("lady"),Z=PT(),nt=zT(),xt=BT();ne.root.rotation.y=-Math.PI/2,Z.root.rotation.y=-Math.PI/2,xt.rotation.y=-Math.PI/2;let Ht=new te;for(let _t=-4;_t<=4;_t+=1){let Pt=new Mt(new ua(.55,3.8),new se({color:15984335,roughness:1}));Pt.rotation.x=-Math.PI/2,Pt.position.set(_t,.035,0),Ht.add(Pt)}D.add(ne.root,Z.root,nt.root,xt,Ht);let pt=-130,Xt=0,Ze=!1,Jt=!1,ie=-85,Se=!1,Kt=-205,be=-285,cn=()=>{pt=-130,Xt=0,Ze=!1,Jt=!1,ie=-85,Se=!1,Kt=-205,be=-285,ne.reaction=0,Z.reaction=0,xt.userData.reaction=0},mn=60,Pe=5,Je=[];for(let _t=0;_t<Pe;_t++){let Pt=GT(UT(_t,Dt));Pt.position.z=-_t*mn+20,D.add(Pt),Je.push(Pt)}let L=IT();D.add(L.root);let Bt=OT();Bt.root.rotation.y=0,D.add(Bt.root);let oe=LT(re);oe.root.position.set(0,0,-no(0)),D.add(oe.root);let N=[],_=new qi(.75,.14,12,28);for(let _t=0;_t<8;_t++){let Pt=new la({color:_t%2===0?16436245:2282478,transparent:!0,opacity:0}),ye=new Mt(_,Pt);ye.visible=!1,D.add(ye),N.push({mesh:ye,active:!1,age:0,maxAge:.9})}let F=32,q=new Wi(.18,.18,.18),J=new la({color:16436245}),ot=new Zr(q,J,F);ot.frustumCulled=!1,D.add(ot);let ht=Array.from({length:F},()=>({active:!1,pos:new B,vel:new B,age:0,maxAge:.6,color:new Zt(16436245)})),K=new Le,tt=new Le().makeScale(0,0,0),lt=(_t,Pt,ye,pe,O=18)=>{let xe=0;for(let di=0;di<F&&xe<O;di++){let rn=ht[di];if(!rn.active){rn.active=!0,rn.age=0,rn.maxAge=.45+Math.random()*.35,rn.pos.set(_t,Pt,ye);let pi=Math.random()*Math.PI*2,Hn=2.5+Math.random()*5.5;rn.vel.set(Math.cos(pi)*Hn,3+Math.random()*4.5,Math.sin(pi)*Hn),rn.color.setHex(pe),ot.setColorAt(di,rn.color),xe++}}ot.instanceColor&&(ot.instanceColor.needsUpdate=!0)},Et=[],ct=[],ft=1,At=-18,Ot=new Ye(.45,.45,.14,16);Ot.rotateX(Math.PI/2);let Yt=new se({color:16436245,emissive:14251782,emissiveIntensity:.45,roughness:.2,metalness:.85}),z=()=>{for(let _t of Et)D.remove(_t.mesh),It(_t.mesh);Et.length=0;for(let _t of ct)D.remove(_t.mesh);ct.length=0,At=S.current.playerZ-24},dt=(_t,Pt)=>{let ye=[-2.7,0,2.7],pe=["buraco","cone","lombada","caminhao","lixeira","perua","obra","carrinho","bola"],O=pe[Math.floor(Math.random()*pe.length)];_t>-265&&O==="bola"&&(O="lixeira");let xe=_t>-265?Math.random()<.5?0:2:Math.floor(Math.random()*3),di=ye[xe],rn={lombada:{w:2.8,l:.9},buraco:{w:1.5,l:1.5},cone:{w:1.4,l:.8},carro:{w:1.75,l:3.3},caminhao:{w:2.05,l:5.1},lixeira:{w:.9,l:.9},perua:{w:1.85,l:3.7},obra:{w:2,l:.9},carrinho:{w:.75,l:.6},bola:{w:.7,l:.7}};if(Math.abs(_t-S.current.deliveryTargetZ)>25&&Math.abs(_t-pt)>18){let Ui=rv(O,Ee);if(Ui.position.set(di,0,_t),D.add(Ui),Et.push({data:{id:ft++,type:O,x:di,z:_t,width:rn[O].w,length:rn[O].l,hit:!1},mesh:Ui}),Pt>=2&&Math.random()<.4){let pa=(xe+1+Math.floor(Math.random()*2))%3,Zn=Math.random()<.5?"cone":"buraco",xs=rv(Zn,Ee);xs.position.set(ye[pa],0,_t),D.add(xs),Et.push({data:{id:ft++,type:Zn,x:ye[pa],z:_t,width:rn[Zn].w,length:rn[Zn].l,hit:!1},mesh:xs})}}let Hn=(xe+1)%3,Di=ye[Hn];for(let Ui=0;Ui<3;Ui++){let pa=_t-Ui*3.2,Zn=new Mt(Ot,Yt);Zn.position.set(Di,.72,pa),D.add(Zn),ct.push({data:{id:ft++,x:Di,z:pa,collected:!1},mesh:Zn})}};for(let _t=-28;_t>=-160;_t-=22)dt(_t,0),At=_t;W.compile(D,X);let $=window.ResizeObserver,ut=$?new $(()=>{if(!C)return;let _t=C.clientWidth,Pt=Math.max(1,C.clientHeight);X.aspect=_t/Pt,X.updateProjectionMatrix(),W.setSize(_t,Pt)}):null;ut&&ut.observe(C);let mt=0,st=performance.now(),Ut=0,wt=0,Ce=_t=>{let Pt=S.current;Pt.screen="gameover",document.body.dataset.state="gameover",Ki.playGameOver();let ye=Math.round(Math.abs(Pt.playerZ)),pe=wT({coins:Pt.coins,deliveries:Pt.deliveries,caramelosSpooked:Pt.caramelo.totalSpookedCount,distanceMeters:ye}),O=Math.max(Pt.highScore,pe);u(xe=>({...xe,hearts:Pt.hearts,timeRemaining:Pt.timeRemaining,coins:Pt.coins,deliveries:Pt.deliveries,speedKmh:0})),Pt.highScore=O;try{window.localStorage.setItem(qT,String(O))}catch{}x({reason:_t,score:pe,highScore:O,deliveries:Pt.deliveries,coins:Pt.coins,caramelosSpooked:Pt.caramelo.totalSpookedCount,distanceMeters:ye}),n("gameover")},ge=_t=>{if(mt=requestAnimationFrame(ge),P&&_t-wt<55)return;wt=_t;let Pt=(_t-st)/1e3;st=_t;let ye=Math.min(Pt,.05),pe=_t*.001,O=S.current;if(O.resetRequested){O.resetRequested=!1,z(),cn();for(let Rt=0;Rt<Pe;Rt++)Je[Rt].position.z=-Rt*mn+20;for(let Rt=-28;Rt>=-160;Rt-=22)dt(Rt,0),At=Rt}if(O.screen==="title"){oe.root.position.set(0,0,-250),L.root.position.set(0,0,0),L.tiltGroup.rotation.z=Math.sin(pe*2.2)*.05,L.tiltGroup.position.y=Math.abs(Math.sin(pe*12))*.02,L.frontWheel.rotation.x-=ye*4,L.rearWheel.rotation.x-=ye*4,Bt.root.visible=!0,Bt.dizzyHalo.visible=!1,Bt.root.position.set(2.1,Math.abs(Math.sin(pe*6))*.22,-2.4),Bt.root.rotation.y=Math.PI-.5+Math.sin(pe*2)*.2,Bt.tailMesh.rotation.z=Math.sin(pe*18)*.45,Bt.jawGroup.rotation.x=Math.max(0,Math.sin(pe*8))*.35,X.position.set(Math.sin(pe*.45)*1.4,3.3+Math.sin(pe*.8)*.18,5.2),X.lookAt(.35,1.15,-3.5),W.render(D,X);return}if(O.screen==="paused"||O.screen==="gameover"){W.render(D,X);return}O.toastTimer>0&&(O.toastTimer-=ye,O.toastTimer<=0&&(O.toastMessage=null)),O.hitstopTimer>0&&(O.hitstopTimer-=ye);let xe=O.hitstopTimer>0?ye*.15:ye;if(O.timeRemaining=Math.max(0,O.timeRemaining-xe),O.timeRemaining<=0){Ce("tempo");return}if(O.hornCooldown=Math.max(0,O.hornCooldown-xe),O.invulnerableTimer=Math.max(0,O.invulnerableTimer-xe),O.carameloSlowTimer=Math.max(0,O.carameloSlowTimer-xe),O.cameraTrauma=Math.max(0,O.cameraTrauma-ye*2.2),O.triggerHornRequested&&(O.triggerHornRequested=!1,MT(O.hornCooldown))){O.hornCooldown=2.5,Ki.playHorn();let Rt=0;for(let St of N)!St.active&&Rt<4&&(St.active=!0,St.age=-Rt*.07,St.maxAge=.9,Rt++);for(let St of[ne,Z,...nt.people]){let M=St===ne?pt:St===Z?ie:Kt,U=O.playerZ-M;U>0&&U<24&&(St.reaction=1)}O.playerZ-be>0&&O.playerZ-be<24&&(xt.userData.reaction=1),TT(O.playerX,O.caramelo)?(O.caramelo=AT(O.caramelo),O.spookVariant=(O.caramelo.totalSpookedCount-1)%5,O.spookAge=0,Ki.playCarameloSpooked(),lt(O.caramelo.x,.9,O.playerZ-O.caramelo.distanceAhead,15984335,10),g(["\u{1F415} Pulo de pipoca! O caramelo se assustou!","\u{1F415} Orelhas de antena! BIBI, caramelo!","\u{1F415} Virou est\xE1tua com a patinha no ar!","\u{1F415} Cad\xEA o barulho? Olhou pro lado errado!","\u{1F415} Que susto! Sacudiu e disfar\xE7ou!"][O.spookVariant]+" +80 pts",2.6)):g("\u{1F50A} BIBI! \xC9 s\xF3 um susto de brincadeira!",1.4)}if(O.inDeliveryZone=_T(O.playerZ,O.deliveryTargetZ),O.playerZ-O.deliveryTargetZ<-18&&(O.deliveryTargetZ=O.playerZ-110,g("\u{1F4E2} Passou direto do port\xE3o! Cliente chamou 100m \xE0 frente!",2.8)),O.triggerDeliveryRequested&&(O.triggerDeliveryRequested=!1,O.inDeliveryZone)){let Rt=Fu(O.deliveries);O.coins+=Rt.rewardCoins,O.deliveries+=1,O.timeRemaining=Math.min(90,O.timeRemaining+Rt.bonusTime),O.deliveryStartZ=O.playerZ;let St=no(O.deliveries);O.deliveryTargetZ=O.playerZ-St,O.inDeliveryZone=!1,Ki.playDeliverySuccess(),lt(O.playerX,1.4,O.playerZ-1.5,1096065,28);let M=Fu(O.deliveries);g(`\u2705 Entregue p/ ${Rt.customerName}! +${Rt.rewardCoins} moedas \xB7 Pr\xF3ximo: ${M.customerName}`,3.5)}let di=yT(O.deliveries,O.inDeliveryZone,O.carameloSlowTimer),rn=O.brake||O.keysPressed.has("ArrowDown")||O.keysPressed.has("KeyS");rn&&(di=0);let pi=O.playerZ-pt;pi<75&&pi>-8&&Xt<9&&(Jt||(g("\u{1F6B6} Dona Lurdes vai atravessar. Segure o FREIO!",3),Jt=!0),Xt+=xe,pi<16&&pi>0&&(di=0,pi<7&&(O.speed=0)),rn&&!Ze&&pi<26&&O.speed<3&&(Ze=!0,O.coins+=5,g("\u{1F475} \u201CObrigada, meu filho!\u201D +5 moedas por dar passagem",3))),O.speed=pr.damp(O.speed,di,rn?9:3.2,xe),ne.root.position.set(-6+Math.min(9,Xt)*1.35,.15,pt),Ht.position.z=pt,wp(ne,pe,xe,Xt>0&&Xt<9),Z.root.position.set(-6.2,.14,ie),wp(Z,pe,xe),!Se&&Math.abs(O.playerZ-ie)<14&&rn&&O.speed<4&&(Se=!0,O.hearts=Math.min(3,O.hearts+1),O.timeRemaining=Math.min(90,O.timeRemaining+6),Ki.playDeliverySuccess(),g("\u{1F366} Pausa com Seu Nilo: moto recuperada e +6s!",3)),nt.root.position.set(6.3,.14,Kt),nt.people.forEach((Rt,St)=>{wp(Rt,pe+St,xe,!0),Rt.arms[0].rotation.x=Math.sin(pe*3+St)*.3}),xt.position.set(-5.3,.14,be);let Hn=Math.max(0,(xt.userData.reaction||0)-xe);xt.userData.reaction=Hn,xt.scale.y=Hn>0?1.05:1,xt.userData.tail.rotation.x=Math.sin(pe*2)*.1+(Hn>0?.5:0),pt-O.playerZ>30&&(pt=O.playerZ-480,Xt=0,Ze=!1,Jt=!1),ie-O.playerZ>30&&(ie=O.playerZ-480,Se=!1),Kt-O.playerZ>30&&(Kt=O.playerZ-480),be-O.playerZ>30&&(be=O.playerZ-480);let Di=O.touchSteerDir;(O.keysPressed.has("ArrowLeft")||O.keysPressed.has("KeyA"))&&(Di-=1),(O.keysPressed.has("ArrowRight")||O.keysPressed.has("KeyD"))&&(Di+=1);let Ui=10.5;Di!==0&&(O.playerX=Bu(O.playerX+Di*Ui*xe));let pa=-Di*.34-O.targetSteerVelX*.04;O.currentLeanZ=pr.damp(O.currentLeanZ,pr.clamp(pa,-.42,.42),10,xe),O.targetSteerVelX=pr.damp(O.targetSteerVelX,0,12,xe),O.playerZ-=O.speed*xe,L.root.position.set(O.playerX,0,O.playerZ),L.tiltGroup.rotation.z=O.currentLeanZ,L.tiltGroup.rotation.y=O.currentLeanZ*.35,L.tiltGroup.position.y=Math.abs(Math.sin(O.playerZ*1.8))*.025,L.frontWheel.rotation.x-=O.speed*xe*1.8,L.rearWheel.rotation.x-=O.speed*xe*1.8,O.invulnerableTimer>0?(L.root.visible=!0,L.tiltGroup.rotation.z+=Math.sin(O.invulnerableTimer*35)*.08):L.root.visible=!0,oe.root.position.set(0,0,O.deliveryTargetZ),oe.beaconArrow.position.y=6.8+Math.sin(pe*5)*.55,oe.beaconArrow.rotation.y=pe*2.2,oe.customerGroup.rotation.z=Math.sin(pe*8)*.08;for(let Rt of Je)Rt.position.z-O.playerZ>mn*.85&&(Rt.position.z-=Pe*mn);let Zn=O.playerZ-155,xs=Math.max(15,22-O.deliveries*1.1);for(;At>Zn;)At-=xs,dt(At,O.deliveries);for(let Rt=Et.length-1;Rt>=0;Rt--){let St=Et[Rt];if(St.data.type==="bola"&&(St.data.x=2.7*Math.sin(pe*1.1+St.data.id),St.mesh.position.x=St.data.x,St.mesh.rotation.z+=xe*3),St.data.type==="caminhao"&&(St.data.z-=xe*2.5,St.mesh.position.z=St.data.z),St.data.z-O.playerZ>18){D.remove(St.mesh),It(St.mesh),Et.splice(Rt,1);continue}if(O.invulnerableTimer<=0&&ST(O.playerX,O.playerZ,St.data)&&(St.data.hit=!0,O.hearts=Math.max(0,O.hearts-1),O.speed*=.38,O.invulnerableTimer=1.6,O.hitstopTimer=.06,O.cameraTrauma=.65,Ki.playCrash(),lt(O.playerX,.8,O.playerZ-.8,15680580,22),g({buraco:"\u{1F4A5} Caiu na cratera da prefeitura! -1 Cora\xE7\xE3o",lombada:"\u{1F4A5} Passou voando na lombada! -1 Cora\xE7\xE3o",cone:"\u{1F4A5} Atropelou os cones da obra! -1 Cora\xE7\xE3o",carro:"\u{1F6F5} Raspou no carro! A moto perdeu integridade.",caminhao:"\u{1F69B} Encostou no caminh\xE3o. Cuide da moto!",lixeira:"\u{1F5D1}\uFE0F Ops, a lixeira! D\xEA mais espa\xE7o.",perua:"\u{1F690} Raspou na perua. Olha o retrovisor!",obra:"\u{1F6A7} Devagar na obra! Cuide da moto.",carrinho:"\u{1F6D2} Olha o carrinho de feira!",bola:"\u26BD A bola escapou! Aten\xE7\xE3o \xE0 pelada."}[St.data.type],2.5),O.hearts<=0)){Ce("coracoes");return}}for(let Rt=ct.length-1;Rt>=0;Rt--){let St=ct[Rt];if(St.mesh.rotation.y+=ye*3.2,St.data.z-O.playerZ>15){D.remove(St.mesh),ct.splice(Rt,1);continue}bT(O.playerX,O.playerZ,St.data)&&(St.data.collected=!0,St.mesh.visible=!1,O.coins+=1,Ki.playCoin(),lt(St.data.x,.8,St.data.z,16436245,6),D.remove(St.mesh),ct.splice(Rt,1))}let ka=ET(O.caramelo,O.playerX,xe,O.deliveries);if(O.caramelo=ka.nextCaramelo,ka.justStartedWarning&&g("\u{1F415} AU AU! O Caramelo apareceu! Aperte a BUZINA!",2.4),ka.justBarked&&Ki.playCarameloBark(),ka.bitPlayer&&(O.carameloSlowTimer=2.2,O.speed*=.48,O.cameraTrauma=.45,Ki.playCarameloSpooked(),lt(O.playerX,.5,O.playerZ-.8,14254635,14),g("\u{1F415} O caramelo fez gra\xE7a na frente! A moto desacelerou.",2.6)),O.caramelo.state==="hidden")Bt.root.visible=!1;else{Bt.root.visible=!0;let Rt=O.playerZ-O.caramelo.distanceAhead;if(Bt.root.position.set(O.caramelo.x,0,Rt),O.caramelo.state==="spooked"){O.spookAge+=xe;let St=Math.min(1,O.spookAge/1.25),M=Math.sin(St*Math.PI);Bt.dizzyHalo.visible=!1,Bt.root.rotation.y=Math.PI,Bt.bodyGroup.rotation.set(0,0,0),Bt.bodyGroup.position.y=O.spookVariant===0?M*.45:O.spookVariant===4?Math.abs(Math.sin(St*20))*.04:0,Bt.headGroup.rotation.y=O.spookVariant===3?Math.sin(St*6)*.6:0,Bt.headGroup.rotation.z=O.spookVariant===4?Math.sin(St*22)*.13:0,Bt.legs.forEach((Y,V)=>{Y.rotation.x=O.spookVariant===2&&V===0?-.8:0});let U=Bt.root.userData.ears;U[0].rotation.z=O.spookVariant===1?-.4:0,U[1].rotation.z=O.spookVariant===1?.4:-.75,Bt.jawGroup.rotation.x=M*.15,Bt.tailMesh.rotation.z=Math.sin(pe*18)*.25}else{Bt.dizzyHalo.visible=!1,Bt.headGroup.rotation.set(0,0,0);let St=Bt.root.userData.ears;St[0].rotation.z=0,St[1].rotation.z=-.75;let M=O.caramelo.state==="retreating"?O.caramelo.lateralSide*.8:Math.PI+Math.PI*.12*-O.caramelo.lateralSide;Bt.root.rotation.y=M;let U=pe*24;Bt.bodyGroup.position.y=Math.abs(Math.sin(U))*.14,Bt.bodyGroup.rotation.x=Math.cos(U)*.12,Bt.legs[0].rotation.x=Math.sin(U)*.75,Bt.legs[1].rotation.x=Math.sin(U+Math.PI)*.75,Bt.legs[2].rotation.x=Math.sin(U+Math.PI)*.75,Bt.legs[3].rotation.x=Math.sin(U)*.75,Bt.tailMesh.rotation.z=Math.sin(pe*22)*.5,Bt.jawGroup.rotation.x=Math.max(0,Math.sin(pe*14))*.42}}for(let Rt of N){if(!Rt.active)continue;if(Rt.age+=ye,Rt.age<0){Rt.mesh.visible=!1;continue}if(Rt.age>=Rt.maxAge){Rt.active=!1,Rt.mesh.visible=!1;continue}Rt.mesh.visible=!0;let St=Rt.age/Rt.maxAge,M=St*19;Rt.mesh.position.set(O.playerX,1.05,O.playerZ-1.3-M);let U=.85+St*4.2;Rt.mesh.scale.set(U,U,1);let Y=Rt.mesh.material;Y.opacity=(1-St*.85)*.92}let Xl=!1;for(let Rt=0;Rt<F;Rt++){let St=ht[Rt];if(!St.active){ot.setMatrixAt(Rt,tt);continue}if(Xl=!0,St.age+=ye,St.age>=St.maxAge){St.active=!1,ot.setMatrixAt(Rt,tt);continue}St.vel.y-=12*ye,St.pos.addScaledVector(St.vel,ye);let M=Math.max(.01,1-St.age/St.maxAge);K.makeTranslation(St.pos.x,St.pos.y,St.pos.z),K.scale(new B(M,M,M)),ot.setMatrixAt(Rt,K)}Xl&&(ot.instanceMatrix.needsUpdate=!0);let Wl=O.cameraTrauma>0?(Math.random()-.5)*O.cameraTrauma*O.cameraTrauma*.9:0,Np=O.playerX*.58+Wl,Dp=4.35+Math.abs(Wl)*.5,Up=O.playerZ+6.9;if(X.position.x=pr.damp(X.position.x,Np,8,ye),X.position.y=pr.damp(X.position.y,Dp,8,ye),X.position.z=Up,X.lookAt(O.playerX*.35,1,O.playerZ-14),W.render(D,X),_t-Ut>95){Ut=_t;let Rt=Math.max(0,Math.round(O.playerZ-O.deliveryTargetZ)),St=Math.max(1,Math.round(O.deliveryStartZ-O.deliveryTargetZ));u({hearts:O.hearts,coins:O.coins,deliveries:O.deliveries,timeRemaining:O.timeRemaining,speedKmh:Math.round(O.speed*3.6),distanceToDelivery:Rt,totalStageDistance:St,inDeliveryZone:O.inDeliveryZone,hornCooldown:O.hornCooldown,carameloState:O.caramelo.state,carameloSide:O.caramelo.lateralSide,currentDestination:Fu(O.deliveries),toastMessage:O.toastMessage})}};return mt=requestAnimationFrame(ge),()=>{cancelAnimationFrame(mt),ut&&ut.disconnect(),D.traverse(_t=>{if(_t instanceof Mt){_t.geometry.dispose();for(let Pt of Array.isArray(_t.material)?_t.material:[_t.material])Pt.dispose()}}),Dt.dispose(),Ee.dispose(),re.dispose(),D.environment?.dispose(),W.dispose(),W.domElement.remove()}},[g]);let E=C=>{S.current.screen==="playing"&&(C.currentTarget.setPointerCapture(C.pointerId),S.current.touchDragActive=!0,S.current.touchLastClientX=C.clientX)},w=C=>{let P=S.current;if(P.screen!=="playing"||!P.touchDragActive)return;let D=C.clientX-P.touchLastClientX;P.touchLastClientX=C.clientX;let G=Math.max(320,window.innerWidth),X=D/G*11.5;P.playerX=Bu(P.playerX+X),P.targetSteerVelX=X*15},y=()=>{S.current.touchDragActive=!1},A=Math.min(100,Math.max(0,Math.round((p.totalStageDistance-p.distanceToDelivery)/Math.max(1,p.totalStageDistance)*100))),R=p.hornCooldown<=0,I=Math.min(100,Math.max(0,p.hornCooldown/2.5*100));return(0,H.jsxs)("main",{className:"game-shell","data-screen":t,children:[(0,H.jsx)("div",{className:"world",ref:e,onPointerDown:E,onPointerMove:w,onPointerUp:y,onPointerCancel:y,"aria-label":"Rua em 3D: deslize para pilotar"}),t==="title"&&(0,H.jsxs)("section",{className:"welcome",children:[(0,H.jsxs)("div",{className:"welcome-copy",children:[(0,H.jsxs)("div",{className:"eyebrow",children:[(0,H.jsx)("span",{className:"little-dot"})," UM BAIRRO. MIL HIST\xD3RIAS."]}),(0,H.jsx)("p",{className:"brand-overline",children:"ENTREGAS & RESENHA"}),(0,H.jsxs)("h1",{children:["CORRE DO",(0,H.jsx)("br",{}),(0,H.jsx)("em",{children:"CARAMELO!"}),(0,H.jsx)("span",{className:"paw",children:"\u2726"})]}),(0,H.jsxs)("p",{className:"tagline",children:["A entrega \xE9 s\xE9ria.",(0,H.jsx)("br",{}),"O caminho \xE9 pura resenha."]}),(0,H.jsxs)("p",{className:"intro",children:["Pilote pelo bairro, entregue os pedidos e d\xEA aquele ",(0,H.jsx)("strong",{children:"BIBI!"})," no caramelo. Aqui o susto \xE9 s\xF3 de brincadeira."]}),(0,H.jsxs)("button",{className:"button primary play-button",onClick:f,children:[(0,H.jsx)("span",{children:"\u25B6"})," Bora entregar! ",(0,H.jsx)("span",{children:"\u2192"})]}),(0,H.jsxs)("div",{className:"menu-secondary",children:[(0,H.jsx)("button",{className:"button subtle",onClick:()=>a(!0),children:"Como jogar"}),(0,H.jsx)("button",{className:"button subtle",onClick:()=>h(!0),children:"Conhe\xE7a o bairro \u2197"})]}),(0,H.jsxs)("div",{className:"welcome-facts",children:[(0,H.jsxs)("span",{children:["3D ",(0,H.jsx)("small",{children:"de verdade"})]}),(0,H.jsxs)("span",{children:["100% ",(0,H.jsx)("small",{children:"no navegador"})]}),(0,H.jsxs)("span",{children:["0 ",(0,H.jsx)("small",{children:"machucados pela buzina"})]})]})]}),(0,H.jsxs)("div",{className:"hero-visual",role:"img","aria-label":"Motoboy e cachorro caramelo no bairro brasileiro",children:[(0,H.jsxs)("div",{className:"sticker",children:["ENTREGAS,",(0,H.jsx)("br",{}),"DESVIOS E",(0,H.jsx)("br",{}),(0,H.jsx)("b",{children:"MUITA RESENHA!"})]}),(0,H.jsxs)("div",{className:"hero-caption",children:[(0,H.jsx)("span",{className:"live-dot"})," O CARAMELO J\xC1 EST\xC1 NA RUA."]})]}),(0,H.jsxs)("footer",{className:"welcome-footer",children:[(0,H.jsxs)("span",{children:["CORRE DO CARAMELO! ",(0,H.jsx)("b",{children:"VOL. 01"})]}),(0,H.jsx)("span",{children:"Celular ou computador \xB7 Jogue do seu jeito"})]})]}),t!=="title"&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)("header",{className:"hud",children:[(0,H.jsxs)("div",{className:"hud-top",children:[(0,H.jsx)("div",{className:"health","aria-label":"Integridade da moto: "+p.hearts+" de 3",children:[0,1,2].map(C=>(0,H.jsx)("span",{className:C<p.hearts?"heart":"heart empty",children:"\u2665"},C))}),(0,H.jsxs)("div",{className:"wallet",children:[(0,H.jsx)("span",{children:"\u25CF"})," ",(0,H.jsx)("b",{children:p.coins}),(0,H.jsx)("small",{children:"moedas"})]}),(0,H.jsxs)("div",{className:"clock "+(p.timeRemaining<12?"urgent":""),children:[(0,H.jsx)("small",{children:"TEMPO"}),(0,H.jsxs)("b",{children:[Math.ceil(p.timeRemaining),(0,H.jsx)("span",{children:"s"})]})]}),(0,H.jsx)("button",{className:"icon-button",onClick:T,"aria-label":o?"Ativar som":"Silenciar som",children:(0,H.jsx)(Cp,{name:o?"mute":"sound"})}),(0,H.jsx)("button",{className:"icon-button",onClick:v,"aria-label":"Pausar jogo",children:(0,H.jsx)(Cp,{name:"pause"})})]}),(0,H.jsxs)("div",{className:"order-card",children:[(0,H.jsx)("div",{className:"order-pin",children:(0,H.jsx)(Cp,{name:"pin"})}),(0,H.jsxs)("div",{className:"order-info",children:[(0,H.jsx)("small",{children:"PR\xD3XIMA ENTREGA"}),(0,H.jsx)("strong",{children:p.currentDestination.customerName}),(0,H.jsx)("span",{children:p.currentDestination.houseLabel})]}),(0,H.jsxs)("div",{className:"delivery-distance",children:[(0,H.jsx)("b",{children:p.distanceToDelivery}),(0,H.jsx)("small",{children:"metros"})]}),(0,H.jsx)("div",{className:"route-track",children:(0,H.jsx)("i",{style:{width:A+"%"}})})]}),(0,H.jsxs)("div",{className:"run-meta",children:[(0,H.jsxs)("span",{children:["\u25A3 ",p.deliveries," ",p.deliveries===1?"entrega":"entregas"]}),(0,H.jsxs)("span",{children:[p.speedKmh," km/h"]})]})]}),p.toastMessage&&(0,H.jsx)("div",{className:"game-toast",role:"status",children:p.toastMessage}),s&&t==="playing"&&(0,H.jsx)("div",{className:"tutorial-chip",children:"Deslize para pilotar \xB7 BIBI para o susto \xB7 Freie para dar passagem"}),t==="playing"&&(0,H.jsxs)("div",{className:"controls",onPointerDown:C=>C.stopPropagation(),children:[(0,H.jsxs)("div",{className:"steering-controls",children:[(0,H.jsx)("div",{className:"steering-pair",children:[-1,1].map(C=>(0,H.jsx)("button",{className:"drive-button","aria-label":C<0?"Virar \xE0 esquerda":"Virar \xE0 direita",onPointerDown:P=>{P.currentTarget.setPointerCapture(P.pointerId),S.current.touchSteerDir=C},onPointerUp:()=>S.current.touchSteerDir=0,onPointerCancel:()=>S.current.touchSteerDir=0,children:C<0?"\u2039":"\u203A"},C))}),(0,H.jsx)("button",{className:"brake-button",onPointerDown:C=>{C.currentTarget.setPointerCapture(C.pointerId),S.current.brake=!0},onPointerUp:()=>S.current.brake=!1,onPointerCancel:()=>S.current.brake=!1,children:"FREIO"})]}),(0,H.jsx)("div",{className:"delivery-controls",children:p.inDeliveryZone?(0,H.jsx)("button",{className:"button deliver-button",onClick:b,children:"\u25A3 ENTREGAR"}):(0,H.jsxs)("span",{className:"next-delivery",children:["\u25A3 Entrega a ",p.distanceToDelivery," m"]})}),(0,H.jsxs)("button",{className:"horn-button "+(R?"ready":"cooling"),onClick:m,disabled:!R,"aria-label":"Buzinar: dar susto engra\xE7ado",style:{"--cooldown":I+"%"},children:[(0,H.jsx)(Cp,{name:"horn"}),(0,H.jsx)("strong",{children:R?"BIBI!":p.hornCooldown.toFixed(1)+"s"}),(0,H.jsx)("small",{children:R?"S\xD3 UM SUSTO":"RECARREGANDO"})]})]})]}),t==="paused"&&(0,H.jsx)("div",{className:"modal-backdrop",children:(0,H.jsxs)("section",{className:"modal compact",children:[(0,H.jsx)("span",{className:"eyebrow",children:"UMA PAUSA NA RESENHA"}),(0,H.jsx)("h2",{children:"Respira, motoca."}),(0,H.jsx)("p",{children:"Seu pedido pode esperar um instante."}),(0,H.jsx)("button",{className:"button primary",onClick:v,children:"\u25B6 Continuar entrega"}),(0,H.jsx)("button",{className:"button subtle",onClick:f,children:"Come\xE7ar de novo"}),(0,H.jsx)("button",{className:"text-button",onClick:()=>{S.current.screen="title",n("title")},children:"Voltar ao in\xEDcio"})]})}),t==="gameover"&&(0,H.jsx)("div",{className:"modal-backdrop",children:(0,H.jsxs)("section",{className:"modal results",children:[(0,H.jsx)("div",{className:"eyebrow",children:"FIM DO EXPEDIENTE"}),(0,H.jsx)("h2",{children:d.reason==="tempo"?"O tempo voou!":"Hora de uma revis\xE3o!"}),(0,H.jsx)("p",{children:d.reason==="tempo"?"Amanh\xE3 tem mais entrega. E mais caramelo.":"A moto precisa de um cuidado. Bora tentar outra rota?"}),(0,H.jsxs)("div",{className:"score",children:[(0,H.jsx)("strong",{children:d.score.toLocaleString("pt-BR")}),(0,H.jsx)("small",{children:"PONTOS DE RESENHA"})]}),(0,H.jsxs)("div",{className:"result-grid",children:[(0,H.jsxs)("div",{children:[(0,H.jsx)("b",{children:d.deliveries}),(0,H.jsx)("span",{children:"entregas"})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)("b",{children:d.coins}),(0,H.jsx)("span",{children:"moedas"})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)("b",{children:d.caramelosSpooked}),(0,H.jsx)("span",{children:"sustos"})]}),(0,H.jsxs)("div",{children:[(0,H.jsxs)("b",{children:[d.distanceMeters,"m"]}),(0,H.jsx)("span",{children:"percorridos"})]})]}),(0,H.jsxs)("p",{className:"record",children:["Seu recorde: ",(0,H.jsxs)("strong",{children:[d.highScore.toLocaleString("pt-BR")," pontos"]})]}),(0,H.jsx)("button",{className:"button primary",onClick:f,children:"\u21BB Mais uma corrida!"}),(0,H.jsx)("button",{className:"text-button",onClick:()=>{S.current.screen="title",n("title")},children:"Voltar ao bairro"})]})}),i&&(0,H.jsx)("div",{className:"modal-backdrop",children:(0,H.jsxs)("section",{className:"modal instructions",children:[(0,H.jsx)("button",{className:"modal-close icon-button","aria-label":"Fechar instru\xE7\xF5es",onClick:()=>a(!1),children:"\xD7"}),(0,H.jsx)("div",{className:"eyebrow",children:"MANUAL DO MOTOCA"}),(0,H.jsxs)("h2",{children:["Pegou o pedido?",(0,H.jsx)("br",{}),"Bora pra rua."]}),(0,H.jsxs)("ol",{children:[(0,H.jsxs)("li",{children:[(0,H.jsx)("b",{children:"Pilote."})," Deslize o dedo ou use \u2190 \u2192 / A e D. A moto acelera sozinha."]}),(0,H.jsxs)("li",{children:[(0,H.jsx)("b",{children:"D\xEA passagem."})," Segure FREIO ou \u2193 / S para a Dona Lurdes atravessar."]}),(0,H.jsxs)("li",{children:[(0,H.jsx)("b",{children:"Mande um BIBI!"})," Toque na buzina ou aperte espa\xE7o. O caramelo s\xF3 leva um susto engra\xE7ado."]}),(0,H.jsxs)("li",{children:[(0,H.jsx)("b",{children:"Entregue."})," Ao entrar na \xE1rea marcada, toque em ENTREGAR ou aperte E. Cada pedido d\xE1 moedas e mais tempo."]})]}),(0,H.jsx)("p",{className:"note",children:"P ou Esc pausa \xB7 M controla o som \xB7 Evite os obst\xE1culos para cuidar da moto."}),(0,H.jsx)("button",{className:"button primary",onClick:()=>a(!1),children:"Entendi. Partiu!"})]})}),c&&(0,H.jsxs)("div",{className:"album",children:[(0,H.jsxs)("header",{children:[(0,H.jsxs)("div",{children:[(0,H.jsx)("span",{className:"eyebrow",children:"A TURMA EST\xC1 TODA AQUI"}),(0,H.jsx)("h2",{children:"Gente boa. Rua viva."}),(0,H.jsx)("p",{children:"Conhe\xE7a os personagens e elementos do bairro."})]}),(0,H.jsx)("button",{className:"icon-button","aria-label":"Fechar \xE1lbum",onClick:()=>h(!1),children:"\xD7"})]}),(0,H.jsx)("div",{className:"album-grid",children:TU.map(C=>(0,H.jsxs)("figure",{children:[(0,H.jsx)("img",{src:"./artes/"+C.file+".png",alt:C.name,loading:"lazy"}),(0,H.jsxs)("figcaption",{children:[(0,H.jsx)("strong",{children:C.name}),(0,H.jsx)("span",{children:C.desc})]})]},C.file))}),(0,H.jsx)("button",{className:"button primary",onClick:()=>{h(!1),f()},children:"Conheci a turma. Bora jogar!"})]})]})}var TU=[{file:"01-caminhao-de-lixo",name:"Caminh\xE3o da coleta",desc:"Grand\xE3o na rua. Espere uma boa hora para passar."},{file:"02-lixeira",name:"Lixeira de rua",desc:"Perto do meio-fio, tamb\xE9m pede aten\xE7\xE3o."},{file:"03-dona-lurdes",name:"Dona Lurdes",desc:"D\xEA passagem na faixa e ganhe um agradecimento."},{file:"04-turma-da-pelada",name:"Turma da pelada",desc:"A bola pode escapar. Fique de olho!"},{file:"05-seu-nilo-picole",name:"Seu Nilo",desc:"Freie perto do carrinho para fazer uma pausa e recuperar a moto."},{file:"06-carrinho-de-feira",name:"Carrinho de feira",desc:"Pequeno, mas pode aparecer no caminho."},{file:"07-perua-de-entregas",name:"Perua de entregas",desc:"Uma descarga de mercadorias pode ocupar a faixa."},{file:"08-gato-do-muro",name:"Mingau",desc:"Um susto, o rabo arrepiado e muita pose."},{file:"09-obra-da-esquina",name:"Obra da esquina",desc:"Siga a passagem livre entre cones e cavaletes."}];function Cp({name:e}){return(0,H.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:{pause:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)("path",{d:"M8 5v14M16 5v14"})}),sound:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)("path",{d:"M4 9h4l5-4v14l-5-4H4zM17 8q5 4 0 8M19 5q8 7 0 14"})}),mute:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)("path",{d:"M4 9h4l5-4v14l-5-4H4zM17 9l5 6M22 9l-5 6"})}),horn:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)("path",{d:"M4 10h5l9-5v14l-9-5H4zM8 14l2 6h3l-2-5M21 8q3 4 0 8"})}),pin:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("path",{d:"M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0z"}),(0,H.jsx)("circle",{cx:"12",cy:"10",r:"2"})]})}[e]})}var mr=gr(Gu(),1),uv=class extends ZT.default.Component{constructor(){super(...arguments);ql(this,"state",{error:!1})}static getDerivedStateFromError(){return{error:!0}}render(){return this.state.error?(0,mr.jsxs)("main",{className:"fatal",children:[(0,mr.jsx)("h1",{children:"O bairro n\xE3o carregou."}),(0,mr.jsx)("p",{children:"Atualize a p\xE1gina em um navegador com suporte a gr\xE1ficos 3D."}),(0,mr.jsx)("button",{onClick:()=>location.reload(),children:"Tentar novamente"})]}):this.props.children}};(0,JT.createRoot)(document.getElementById("root")).render((0,mr.jsx)(uv,{children:(0,mr.jsx)(cv,{})}));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
