var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function E(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+E(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+E(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+E(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&E(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&E(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,T=function(){ie.postMessage(null)}}else T=function(){_(ne,0)};function E(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,E(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),E=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=E&&e[E]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function k(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function A(e,t){de++,ue[de]=e.current,e.current=t}var pe=fe(null),me=fe(null),he=fe(null),ge=fe(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}k(pe),A(pe,e)}function ve(){k(pe),k(me),k(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Hd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(k(pe),k(me)),ge.current===e&&(k(ge),Qf._currentValue=le)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[xt]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Oe.call(Pt,e)?!0:Oe.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&tn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&tn(e,o,t[o])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));qt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,`passive`,{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Ut(Tt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Wt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),At(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)_i(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=gi(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return xi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=gi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=gi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=gi(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=gi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-Ge(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(i(519));function Gi(e){throw Zi(Ei(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=fe(null),$i=null,ea=null;function ta(e,t,n){A(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,k(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ra(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ra(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function aa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(i(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=D.S;D.S=function(e,t){tu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=fe(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?A(wa,wa.current):A(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(i(460)),ka=Error(i(474)),Aa=Error(i(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(i(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(i(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Pa(i)===t.type)?(t=a(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=xi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case T:return t=Pa(t),f(e,t,n)}if(ce(t)||ae(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===C)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Pa(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===C)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Pa(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===C)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),M&&Ii(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),M&&Ii(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Pa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Va(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=xi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=bi(o.type,o.key,o.props,null,e.mode,c),Va(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=wi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Pa(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ba(o),c);if(o.$$typeof===C)return b(e,r,la(e,o),c);Ha(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=fe(null),ao=fe(0);function oo(e,t){e=Gl,A(ao,e),A(io,t),Gl=e|t.baseLanes}function so(){A(ao,Gl),A(io,io.current)}function co(){Gl=ao.current,k(io),k(ao)}var lo=fe(null),uo=null;function fo(e){var t=e.alternate;A(P,P.current&1),A(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){A(P,P.current),A(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(A(P,P.current),A(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){A(P,P.current),A(lo,lo.current)}function go(e){k(lo),uo===e&&(uo=null),k(P)}var P=fe(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){D.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(i(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var a=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=a)throw Error(i(301));if(a+=1,L=I=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Gs,o=t(n,r)}while(bo);return o}function Ao(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(i(467)):Error(i(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===C)return ca(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(B=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=F,a=z(),o=M;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((I||a).memoizedState,n);if(s&&(a.memoizedState=n,B=!0),a=a.queue,ms(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,a){if(zs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Rs(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ks(e).queue;Es(e,a,t,le,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(i(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,a=Po();if(M){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ps(Ko.bind(null,r,o,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,a,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(i(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ei(r,n),a=nc(e.stateNode,r,a),Qa(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Wi&&(e=Error(i(422),{cause:r}),Zi(Ei(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ei(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=rc(a),ic(a,e,n,r),Qa(n,a),!1}n=n.return}while(n!==null);return!1}var oc=Error(i(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(po(t),a)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(B||aa(e,t,n,!1),a=(n&e.childLanes)!==0,B||a){if(r=G,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,di(e,s),hu(r,e,s),oc;Du(),t=hc(e,t,n)}else e=o.treeContext,j=cf(s.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(P.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(a?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ho(t),a=t.mode,c=Dc({mode:`hidden`,children:c},a),r=xi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,a=t.mode,r=Dc({mode:`visible`,children:r.children},a),c=xi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),s=(n&e.childLanes)!==0,B||s){if(s=G,s!==null&&(r=ct(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(s,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return a?(ho(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,a,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(a=c.cachePool,a===null?a=Da():(l=N._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,A(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=cc(null,t,e,r,n);break a}else if(a===ne){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Xs(r,t.pendingProps),bc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ja(e,t),to(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ta(t,N,r),r!==o.cache&&ia(t,[N],n,!0),eo(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==a){a=Ei(Error(i(424)),t),Zi(a),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===a){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[mt]=t,r[ht]=e,Pd(r,n,e),Dt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Vi=t,Ui=!0,a=j,Zd(t.type)?(lf=a,j=cf(r.firstChild)):j=a),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((a=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?a=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,a=!0)),a||Gi(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Do(e,t,Ao,null,null,n),Qf._currentValue=a),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,sa(t),a=ca(a),r=r(a),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(a=Ta(),a===null&&(a=G,o=ma(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},qa(t),ta(t,N,a)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Fa=ja,ka}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(V(t),Lc(t,a,null,r,n)):(V(t),Rc(t,o))):o?o===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,a,e,r,n)),null;case 27:if(be(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}e=pe.current,Ji(t)?Ki(t,e):(e=ff(a,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}if(o=pe.current,Ji(t))Ki(t,o);else{var s=Bd(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[mt]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Vi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[mt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(i(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[mt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),a=!1}else a=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(k(P),r=t.memoizedState,r===null)return V(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_o(e),o!==null){for(t.flags|=128,Bc(r,!1),e=o.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return A(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>nu&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}else{if(!a)if(e=_o(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!M)return V(t),null}else 2*Ne()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=P.current,A(P,a?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&k(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return k(P),null;case 4:return ve(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&k(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:k(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&k(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Xs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[xt]||o[mt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[mt]=e,Dt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[mt]=e,Dt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){a=e.stateNode;try{$t(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||a,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;tl(e,$c(e),a);break;case 5:var o=n.stateNode;n.flags&32&&($t(o,``),n.flags&=-33),tl(e,$c(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;el(e,$c(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:D.T===null?dt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||M){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Yl=e}else Yl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),it(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||et(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Ne(),10<a)){if(yu(r,t,Yl,!Hl),$e(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Nl(t,a,d);var m=(a&62914560)===a?eu-Ne():(a&4194048)===a?tu-Ne():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=et(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,D.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=D.H;return D.H=Hs,e===null?Hs:e}function Eu(){var e=D.A;return D.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,D.H=i,D.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Ne()+500,Su(e,t)):Ul=et(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ma(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,D.H=r,D.A=a,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!je();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=si,at(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,O.p=a,D.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,O.p=r,D.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,O.p=r,D.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Me();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ut(su),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{O.p=a,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(it(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),it(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Ne()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=nt()),e=di(e,t),e!==null&&(it(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ke(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=$e(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ne(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=$e(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?ke(Fe,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case Jr:case Yr:case Xr:l=zn;break;case ei:l=Xn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ct(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Tt(l),h=u==null?c:Tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=vr;else if(fr(c))if(yr)v=Or;else{v=Er;var y=Tr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&rn(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Yt(c,`number`,c.value)}switch(y=r?Tt(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:nn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Dt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=he.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Dt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Dt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Dt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Dt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Dt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=lt(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Ne()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(i(527,Lp,`19.2.4`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Zs,s=Qs,c=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()}))(),_=c(u(),1),v=`/assets/Resume-NrZVKR3K.pdf`,y=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),b=o(((e,t)=>{t.exports=y()}))(),x=[{label:`HOME`,href:`home`},{label:`PROJECTS`,href:`projects`},{label:`WORK`,href:`work`},{label:`CONTACT`,href:`contact`}];function S({theme:e,toggleTheme:t}){let[n,r]=(0,_.useState)(`HOME`),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(80),c=e===`dark`,l=()=>{if(typeof window<`u`){let e=document.querySelector(`.nb-nav`);return e?e.offsetHeight:80}return 80},u=e=>{let t=document.getElementById(e);if(t){let e=l(),n=t.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:n,behavior:`smooth`})}};return(0,_.useEffect)(()=>{let e=()=>{s(l())};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[i]),(0,_.useEffect)(()=>{let e=()=>{a(window.scrollY>50);let e=l(),t=x.map(e=>({id:e.href,element:document.getElementById(e.href)})),n=`HOME`;for(let r of t)if(r.element){let t=r.element.getBoundingClientRect();if(t.top<=e+50&&t.bottom>=e){n=r.id.toUpperCase();break}}window.innerHeight+window.scrollY>=document.body.offsetHeight-100&&(n=`CONTACT`),r(n)};return window.addEventListener(`scroll`,e),e(),()=>window.removeEventListener(`scroll`,e)},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap');

        /* Dark Mode Variables */
        body.dark-mode {
          --bg-primary: #000000;
          --bg-secondary: rgba(26, 26, 26, 0.4);
          --text-primary: #8a8278;
          --text-hover: #E76F51;
          --text-scrolled: #d4cdc4;
          --line-color: #E76F51;
          --toggle-bg: #2c2c2c;
          --toggle-thumb: #E76F51;
        }

        /* Light Mode Variables */
        body.light-mode {
          --bg-primary: #ffffff;
          --bg-secondary: rgba(255, 255, 255, 0.4);
          --text-primary: #5a5248;
          --text-hover: #E76F51;
          --text-scrolled: #2c2c2c;
          --line-color: #E76F51;
          --toggle-bg: #e0e0e0;
          --toggle-thumb: #E76F51;
        }

        /* Base body styles */
        body {
          background-color: var(--bg-primary);
          transition: background-color 0.3s ease, color 0.3s ease;
          margin: 0;
          font-family: 'Jost', sans-serif;
        }

        .nb-nav {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 28px 40px;
          width: 100vw;
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          box-sizing: border-box;
          background: transparent;
          border-bottom: 1px solid transparent;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .nb-nav.nb-scrolled {
          background: var(--bg-secondary);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 20px 40px;
        }

        body.light-mode .nb-nav.nb-scrolled {
          background: var(--bg-secondary);
          box-shadow: 
            0 8px 32px 0 rgba(31, 38, 135, 0.10),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.5);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        /* Left side wrapper */
        .left-side {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        /* Left line with gap before nav links */
        .left-line {
          flex: 1;
          height: 1px;
          background: var(--line-color);
          transition: opacity 0.3s ease;
          margin-right: 40px;
        }

        /* Center section with nav links */
        .center-section {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .nb-links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nb-item {
          position: relative;
        }

        .nb-link {
          font-family: 'Jost', sans-serif;
          font-size: 11.5px;
          font-weight: 400;
          letter-spacing: 0.18em;
          color: var(--text-primary);
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.25s ease;
          padding-bottom: 3px;
          cursor: pointer;
          white-space: nowrap;
          display: block;
          background: none;
          border: none;
          user-select: none;
        }

        .nb-scrolled .nb-link {
          color: var(--text-scrolled);
        }

        .nb-link:hover,
        .nb-link.nb-active {
          color: var(--text-hover);
        }

        .nb-link.nb-active {
          font-weight: 500;
        }

        .nb-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--text-hover);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .nb-link.nb-active::after,
        .nb-link:hover::after {
          transform: scaleX(1);
        }

        /* Right side wrapper */
        .right-side {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        /* Right side - line and toggle */
        .right-line {
          flex: 1;
          height: 1px;
          background: var(--line-color);
          transition: opacity 0.3s ease;
          margin-left: 40px;
        }

        /* Theme Toggle Switch */
        .theme-toggle {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-left: 40px;
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 24px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--toggle-bg);
          transition: 0.4s;
          border-radius: 34px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: var(--toggle-thumb);
          transition: 0.4s;
          border-radius: 50%;
        }

        input:checked + .toggle-slider:before {
          transform: translateX(26px);
        }

        /* Sun and Moon Icons */
        .toggle-icons {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 6px;
          box-sizing: border-box;
          pointer-events: none;
        }

        .toggle-icons svg {
          width: 12px;
          height: 12px;
          opacity: 0.7;
        }

        .sun-icon {
          color: #ffd700;
        }

        .moon-icon {
          color: #8a8278;
        }

        .nb-scrolled .left-line,
        .nb-scrolled .right-line {
          opacity: 0.6;
        }


        /* Responsive adjustments */
        @media (max-width: 768px) {
          .nb-nav {
            padding: 20px 20px;
          }
          
          .nb-scrolled {
            padding: 15px 20px;
          }
          
          .left-line {
            margin-right: 16px;
          }
          
          .right-line {
            margin-left: 16px;
          }
          
          .theme-toggle {
            margin-left: 12px;
          }
          
          .nb-links {
            gap: 20px;
          }
          
          .nb-link {
            font-size: 10px;
            letter-spacing: 0.12em;
          }

          .toggle-switch {
            width: 45px;
            height: 22px;
          }

          .toggle-slider:before {
            height: 16px;
            width: 16px;
          }

          input:checked + .toggle-slider:before {
            transform: translateX(23px);
          }

          .toggle-icons svg {
            width: 10px;
            height: 10px;
          }

          .toggle-icons {
            padding: 0 5px;
          }
        }

        @media (max-width: 480px) {
          .nb-nav {
            padding: 16px 12px;
          }
          
          .nb-scrolled {
            padding: 12px 12px;
          }
          
          .left-line {
            margin-right: 12px;
          }
          
          .right-line {
            margin-left: 12px;
          }
          
          .theme-toggle {
            margin-left: 10px;
          }
          
          .nb-links {
            gap: 14px;
          }
          
          .nb-link {
            font-size: 9px;
            letter-spacing: 0.1em;
          }

          .toggle-switch {
            width: 40px;
            height: 20px;
          }

          .toggle-slider:before {
            height: 14px;
            width: 14px;
          }

          input:checked + .toggle-slider:before {
            transform: translateX(20px);
          }

          .toggle-icons svg {
            width: 9px;
            height: 9px;
          }

          .toggle-icons {
            padding: 0 4px;
          }
        }

        :root {
          --navbar-height: 80px;
        }
        
        #home, #work, #contact {
          scroll-margin-top: var(--navbar-height);
        }

        @media (max-width: 768px) {
          :root {
            --navbar-height: 70px;
          }
        }

        @media (max-width: 480px) {
          :root {
            --navbar-height: 60px;
          }
        }

        .navbar-spacer {
          height: var(--navbar-height);
          width: 100%;
        }
      `}),(0,b.jsxs)(`nav`,{className:`nb-nav${i?` nb-scrolled`:``}`,children:[(0,b.jsx)(`div`,{className:`left-side`,children:(0,b.jsx)(`div`,{className:`left-line`})}),(0,b.jsx)(`div`,{className:`center-section`,children:(0,b.jsx)(`ul`,{className:`nb-links`,children:x.map(({label:e,href:t})=>(0,b.jsx)(`li`,{className:`nb-item`,children:(0,b.jsx)(`button`,{onClick:()=>{u(t),r(e)},className:`nb-link${n===e?` nb-active`:``}`,children:e})},e))})}),(0,b.jsxs)(`div`,{className:`right-side`,children:[(0,b.jsx)(`div`,{className:`right-line`}),(0,b.jsx)(`div`,{className:`theme-toggle`,children:(0,b.jsxs)(`label`,{className:`toggle-switch`,children:[(0,b.jsx)(`input`,{type:`checkbox`,checked:c,onChange:t,"aria-label":`Toggle dark/light mode`}),(0,b.jsx)(`span`,{className:`toggle-slider`,children:(0,b.jsxs)(`div`,{className:`toggle-icons`,children:[(0,b.jsxs)(`svg`,{className:`sun-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,b.jsx)(`circle`,{cx:`12`,cy:`12`,r:`5`}),(0,b.jsx)(`line`,{x1:`12`,y1:`1`,x2:`12`,y2:`3`}),(0,b.jsx)(`line`,{x1:`12`,y1:`21`,x2:`12`,y2:`23`}),(0,b.jsx)(`line`,{x1:`4.22`,y1:`4.22`,x2:`5.64`,y2:`5.64`}),(0,b.jsx)(`line`,{x1:`18.36`,y1:`18.36`,x2:`19.78`,y2:`19.78`}),(0,b.jsx)(`line`,{x1:`1`,y1:`12`,x2:`3`,y2:`12`}),(0,b.jsx)(`line`,{x1:`21`,y1:`12`,x2:`23`,y2:`12`}),(0,b.jsx)(`line`,{x1:`4.22`,y1:`19.78`,x2:`5.64`,y2:`18.36`}),(0,b.jsx)(`line`,{x1:`18.36`,y1:`5.64`,x2:`19.78`,y2:`4.22`})]}),(0,b.jsx)(`svg`,{className:`moon-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,b.jsx)(`path`,{d:`M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z`})})]})})]})})]})]})]})}var C=`/assets/ppmain2-yd2nJKKN.png`,w=({className:e=``,children:t,dotSize:n=2,gap:r=24,baseColor:i=`#404040`,glowColor:a=`#22d3ee`,proximity:o=120,glowIntensity:s=1,waveSpeed:c=.5})=>{let l=(0,_.useRef)(null),u=(0,_.useRef)(null),d=(0,_.useRef)([]),f=(0,_.useRef)({x:-1e3,y:-1e3}),p=(0,_.useRef)(null),m=(0,_.useRef)(Date.now()),h=e=>{let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:{r:0,g:0,b:0}},g=(0,_.useMemo)(()=>h(i),[i]),v=(0,_.useMemo)(()=>h(a),[a]),y=(0,_.useCallback)(()=>{let e=l.current,t=u.current;if(!e||!t)return;let i=t.getBoundingClientRect(),a=window.devicePixelRatio||1;e.width=i.width*a,e.height=i.height*a,e.style.width=`${i.width}px`,e.style.height=`${i.height}px`;let o=e.getContext(`2d`);o&&o.scale(a,a);let s=n+r,c=Math.ceil(i.width/s)+1,f=Math.ceil(i.height/s)+1,p=(i.width-(c-1)*s)/2,m=(i.height-(f-1)*s)/2,h=[];for(let e=0;e<f;e++)for(let t=0;t<c;t++)h.push({x:p+t*s,y:m+e*s,baseOpacity:.3+Math.random()*.2});d.current=h},[n,r]),x=(0,_.useCallback)(()=>{let e=l.current;if(!e)return;let t=e.getContext(`2d`);if(!t)return;let r=window.devicePixelRatio||1,i=e.width/r,a=e.height/r;t.clearRect(0,0,i,a);let{x:u,y:h}=f.current,_=o*o,y=(Date.now()-m.current)*.001*c;for(let e of d.current){let r=e.x-u,i=e.y-h,a=r*r+i*i,c=Math.sin(e.x*.02+e.y*.02+y)*.5+.5,l=e.baseOpacity+c*.15,d=1+c*.2,f=l,p=d,m=g.r,b=g.g,x=g.b,S=0;if(a<_){let e=1-Math.sqrt(a)/o,t=e*e*(3-2*e);m=Math.round(g.r+(v.r-g.r)*t),b=Math.round(g.g+(v.g-g.g)*t),x=Math.round(g.b+(v.b-g.b)*t),f=Math.min(1,l+t*.7),p=d+t*.8,S=t*s}let C=n/2*p;if(S>0){let n=t.createRadialGradient(e.x,e.y,0,e.x,e.y,C*4);n.addColorStop(0,`rgba(${v.r}, ${v.g}, ${v.b}, ${S*.4})`),n.addColorStop(.5,`rgba(${v.r}, ${v.g}, ${v.b}, ${S*.1})`),n.addColorStop(1,`rgba(${v.r}, ${v.g}, ${v.b}, 0)`),t.beginPath(),t.arc(e.x,e.y,C*4,0,Math.PI*2),t.fillStyle=n,t.fill()}t.beginPath(),t.arc(e.x,e.y,C,0,Math.PI*2),t.fillStyle=`rgba(${m}, ${b}, ${x}, ${f})`,t.fill()}p.current=requestAnimationFrame(x)},[o,g,v,n,s,c]);return(0,_.useEffect)(()=>(p.current&&cancelAnimationFrame(p.current),p.current=requestAnimationFrame(x),()=>{p.current&&=(cancelAnimationFrame(p.current),null)}),[x]),(0,_.useEffect)(()=>{y(),m.current=Date.now()},[i,a,y]),(0,_.useEffect)(()=>{y();let e=u.current;if(!e)return;let t=new ResizeObserver(()=>{y()});return t.observe(e),window.addEventListener(`resize`,y),()=>{t.disconnect(),window.removeEventListener(`resize`,y)}},[y]),(0,_.useEffect)(()=>{let e=e=>{let t=l.current;if(!t)return;let n=t.getBoundingClientRect();f.current={x:e.clientX-n.left,y:e.clientY-n.top}},t=()=>{f.current={x:-1e3,y:-1e3}};return window.addEventListener(`mousemove`,e),window.addEventListener(`mouseleave`,t),()=>{window.removeEventListener(`mousemove`,e),window.removeEventListener(`mouseleave`,t)}},[]),(0,b.jsxs)(`div`,{ref:u,className:`overflow-hidden dot-pattern-wrapper ${e}`,style:{position:`absolute`,inset:0,zIndex:0,pointerEvents:`none`,backgroundColor:`transparent`},children:[(0,b.jsx)(`style`,{children:`
                @media (max-width: 768px) {
                    .dot-pattern-wrapper {
                        display: none !important;
                    }
                }
            `}),(0,b.jsx)(`canvas`,{ref:l,className:`absolute inset-0 h-full w-full pointer-events-none`}),(0,b.jsx)(`div`,{className:`pointer-events-none absolute inset-0`,style:{background:`radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(10,10,10,0.6) 100%)`}}),t&&(0,b.jsx)(`div`,{className:`relative z-10 h-full w-full pointer-events-auto`,children:t})]})},ee=[`AI Developer`,`Web Developer`,`Data Scientist`],te=({digit:e,prevDigit:t})=>{let n=(0,_.useRef)(null);return(0,_.useEffect)(()=>{let r=n.current;if(!r)return;let i=e=>9-e,a=t>e,o=a?10:i(e);if(r.style.transition=`transform 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1)`,r.style.transform=`translateY(-${o/11*100}%)`,a){let t=()=>{r.style.transition=`none`,r.style.transform=`translateY(-${i(e)/11*100}%)`,r.removeEventListener(`transitionend`,t)};return r.addEventListener(`transitionend`,t),()=>r.removeEventListener(`transitionend`,t)}},[e,t]),(0,b.jsx)(`div`,{className:`odometer-digit`,children:(0,b.jsx)(`div`,{className:`odometer-digit-inner`,children:(0,b.jsx)(`div`,{className:`odometer-ribbon`,ref:n,style:{transform:`translateY(-${(9-e)/11*100}%)`},children:[9,8,7,6,5,4,3,2,1,0,9].map((e,t)=>(0,b.jsx)(`div`,{className:`odometer-value`,children:e},t))})})})},ne=({target:e,suffix:t=`+`,duration:n=3e3})=>{let[r,i]=(0,_.useState)(0),a=(0,_.useRef)(0),o=(0,_.useRef)(null),s=(0,_.useRef)(null);(0,_.useEffect)(()=>{o.current&&cancelAnimationFrame(o.current),s.current=null;let t=r=>{s.current||=r;let c=r-s.current,l=Math.min(c/n,1),u=1-(1-l)**3,d=Math.floor(0+(e-0)*u);i(e=>(a.current=e,d)),l<1?o.current=requestAnimationFrame(t):(i(t=>(a.current=t,e)),o.current=null)};return o.current=requestAnimationFrame(t),()=>{o.current&&cancelAnimationFrame(o.current)}},[e,n]);let c=e=>e.toString().split(``).map(Number),l=c(r),u=c(a.current);for(;u.length<l.length;)u.unshift(0);for(;u.length>l.length;)u.shift();return(0,b.jsxs)(`span`,{className:`odometer-container`,children:[l.map((e,t)=>(0,b.jsx)(te,{digit:e,prevDigit:u[t]??0},t)),(0,b.jsx)(`span`,{className:`odometer-suffix`,children:t})]})},T=[`React`,`Node.js`,`Express.js`,`SQL`,`NoSQL`,`Machine Learning`,`Deep Learning`,`MERN`,`JavaScript`,`Python`,`AWS`,`Dockers`],re=[`C`,`C++`,`C#`,`Java`,`PHP`,`Unity`,`Figma`,`Linux`,`CUDA`,`Data Science`,`JWT`];function ie({theme:e}){let t=e===`dark`,[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(``),[o,s]=(0,_.useState)(0),[c,l]=(0,_.useState)(`typing`);return(0,_.useEffect)(()=>{let e=ee[o],t;return c===`typing`?t=i.length<e.length?setTimeout(()=>{a(e.slice(0,i.length+1))},80):setTimeout(()=>l(`pausing`),1600):c===`pausing`?t=setTimeout(()=>l(`erasing`),400):c===`erasing`&&(i.length>0?t=setTimeout(()=>{a(i.slice(0,-1))},45):(s(e=>(e+1)%ee.length),l(`typing`))),()=>clearTimeout(t)},[i,c,o]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        /* Odometer styles */
        .odometer-container {
          display: inline-flex;
          align-items: center;
          gap: 0;
          font-family: 'Jost', monospace;
          letter-spacing: 0;
        }

        .odometer-digit {
          position: relative;
          display: inline-block;
          min-width: 0.65em;
          height: 1.2em;
          overflow: hidden;
        }

        .odometer-digit-inner {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .odometer-ribbon {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: calc(11 * 1.2em);
          will-change: transform;
        }

        .odometer-value {
          height: 1.2em;
          line-height: 1.2em;
          text-align: center;
          font-weight: 700;
          font-size: 22px;
          font-family: 'Jost', monospace;
        }

        .odometer-suffix {
          font-weight: 600;
          font-size: 22px;
        }

        /* Section and layout */
        .hm-section {
          width: 100%;
          height: 100vh;
          box-sizing: border-box;
          padding-top: 80px;
          position: relative;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
          transition: background-color 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
           position: relative;
        }

        .hm-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 60px 64px;
          max-width: 1350px;
          margin: 0 auto;
          width: 100%;
          gap: 60px; /* increased gap for more space between left and right */
        }

        .hm-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          z-index: 2;
          max-width: 480px; /* reduced to give more room for the image */
          flex: 1;
        }

        .hm-left > * {
          opacity: 0;
          animation: fadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hm-left > *:nth-child(1) { animation-delay: 0.10s; }
        .hm-left > *:nth-child(2) { animation-delay: 0.22s; }
        .hm-left > *:nth-child(3) { animation-delay: 0.34s; }
        .hm-left > *:nth-child(4) { animation-delay: 0.46s; }
        .hm-left > *:nth-child(5) { animation-delay: 0.58s; }

        .hm-greeting {
          font-size: 14px;
          font-weight: 300;
          letter-spacing: 0.08em;
          line-height: 1.4;
          margin: 0;
          transition: color 0.3s ease;
        }

        .hm-greeting span {
          display: block;
          font-size: 17px;
          font-weight: 500;
          margin-top: 2px;
          transition: color 0.3s ease;
        }

        .hm-title {
          font-size: clamp(42px, 5vw, 64px);
          font-weight: 700;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
          min-height: 1.2em;
          display: flex;
          align-items: center;
          transition: color 0.3s ease;
        }

        .hm-cursor {
          display: inline-block;
          width: 3px;
          height: 0.85em;
          background: #E76F51;
          margin-left: 4px;
          border-radius: 1px;
          animation: blink 0.75s step-end infinite;
          vertical-align: middle;
          flex-shrink: 0;
        }

        .hm-socials {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .hm-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 14px;
          text-decoration: none;
        }

        .hm-social-btn svg {
          width: 15px;
          height: 15px;
          fill: currentColor;
        }

        .hm-scroll-indicator {
  position: absolute;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 3;
  opacity: 0;
  animation: fadeIn 0.8s ease 1.4s forwards;
}

.hm-scroll-mouse {
  width: 22px;
  height: 36px;
  border: 2px solid;
  border-radius: 12px;
  position: relative;
  transition: border-color 0.3s ease;
}

.hm-scroll-dot {
  width: 4px;
  height: 8px;
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollDot 1.6s ease infinite;
}

@keyframes scrollDot {
  0%   { opacity: 1; top: 6px; }
  70%  { opacity: 0; top: 18px; }
  100% { opacity: 0; top: 6px; }
}

.hm-scroll-text {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.15em;
}

/* dark mode */
body.dark-mode .hm-scroll-mouse { border-color: #404040; }
body.dark-mode .hm-scroll-dot { background: #E76F51; }
body.dark-mode .hm-scroll-text { color: #a0a0a0; }

/* light mode */
body.light-mode .hm-scroll-mouse { border-color: #d0d0d0; }
body.light-mode .hm-scroll-dot { background: #E76F51; }
body.light-mode .hm-scroll-text { color: #6c6c6c; }

@media (max-width: 768px) {
    .hm-scroll-indicator { display: none; }

  }

        /* Conveyor belt tech stack */
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .hm-skills-wrap {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid;
          border-radius: 6px;
          margin-top: 4px;
          position: relative;
          transition: border-color 0.3s ease;
          padding: 14px 0;
        }

        .hm-skills-wrap::before {
          content: "TECH STACK";
          position: absolute;
          top: 0;
          left: 14px;
          transform: translateY(-50%);
          padding: 0 6px;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          font-family: 'Jost', sans-serif;
          transition: background-color 0.3s ease, color 0.3s ease;
          z-index: 2;
        }

        .hm-marquee-track {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .hm-marquee-track::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .hm-marquee-row {
          display: flex;
          gap: 8px;
          width: max-content;
          padding: 0 4px;
          margin-bottom: 6px;
        }
        .hm-marquee-row:last-child { margin-bottom: 0; }

        .hm-marquee-row--left {
          animation: marquee-left 28s linear infinite;
        }
        .hm-marquee-row--right {
          animation: marquee-right 22s linear infinite;
        }
        .hm-marquee-row.paused {
          animation-play-state: paused;
        }

        .hm-skill-tag {
          flex-shrink: 0;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          padding: 5px 11px;
          border: 1px solid;
          border-radius: 3px;
          background: transparent;
          transition: all 0.2s ease;
          cursor: default;
          white-space: nowrap;
        }

        .hm-stats {
          display: flex;
          gap: 0;
          margin-top: 16px;
        }

        .hm-stat {
          padding: 16px 32px 16px 0;
          border-right: 1px solid;
          margin-right: 32px;
          transition: border-color 0.3s ease;
        }

        .hm-stat:last-child {
          border-right: none;
          margin-right: 0;
        }

        .hm-stat-num {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0;
          line-height: 1;
          font-family: 'Jost', monospace;
        }

        .hm-stat-label {
          font-size: 12px;
          font-weight: 400;
          margin-top: 5px;
          letter-spacing: 0.06em;
          transition: color 0.3s ease;
        }

        /* ================================================================
           AVATAR – no card, soft fade, shifted right with more space
           ================================================================ */
        .hm-right {
          flex: 1.6; /* increased from 1.4 to give more weight to the right side */
          position: relative;
          z-index: 2;
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
          display: flex;
          justify-content: flex-end;
          background: transparent !important;
        }

        .hm-avatar-wrap {
          width: 100%;
          max-width: 560px;
          aspect-ratio: 3 / 4;
          position: relative;
          background: transparent !important;
          box-shadow: none !important;
          transform: translateX(100px);
        }

        /* Soft grey glow behind the image */
        .hm-avatar-wrap::before {
          content: "";
          position: absolute;
          inset: -20%;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at 50% 40%,
            var(--glow-color, rgba(180, 180, 180, 0.15)) 0%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          transition: background 0.3s ease;
        }

        /* The image – enlarged, right‑shifted, soft fade on ALL edges */
        .hm-avatar-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right 5% center;
  display: block;
  position: relative;
  z-index: 1;
  mask-image:
    radial-gradient(ellipse at 50% 38%, black 28%, transparent 92%),
    linear-gradient(to bottom, black 45%, transparent 100%);
  -webkit-mask-image:
    radial-gradient(ellipse at 50% 38%, black 28%, transparent 92%),
    linear-gradient(to bottom, black 45%, transparent 100%);
  mask-composite: intersect;
  -webkit-mask-composite: source-in, source-over;
}

        .section-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #E76F51, transparent);
          margin: 0;
          padding: 0;
          line-height: 0;
          transition: background 0.3s ease;
          background-color: transparent;
          margin-bottom: 0;
        }

        /* ---- Dark mode ---- */
        body.dark-mode {
          background-color: #0a0a0a;
        }
        body.dark-mode .hm-section {
          background: transparent;
        }
        body.dark-mode .hm-greeting {
          color: #a0a0a0;
        }
        body.dark-mode .hm-greeting span {
          color: #e0e0e0;
        }
        body.dark-mode .hm-title {
          color: #E76F51;
        }
        body.dark-mode .hm-social-btn {
          border-color: #404040;
          color: #a0a0a0;
        }
        body.dark-mode .hm-social-btn:hover {
          border-color: #E76F51;
          color: #E76F51;
        }
        body.dark-mode .hm-skills-wrap {
          border-color: #404040;
        }
        body.dark-mode .hm-skills-wrap::before {
          background: #0a0a0a;
          color: #E76F51;
        }
        body.dark-mode .hm-marquee-track::after {
          background: linear-gradient(to right, #0a0a0a 0%, transparent 12%, transparent 88%, #0a0a0a 100%);
        }
        body.dark-mode .hm-skill-tag {
          border-color: #404040;
          color: #c0c0c0;
        }
        body.dark-mode .hm-skill-tag:hover {
          border-color: #E76F51;
          color: #E76F51;
          background: #1a1a1a;
        }
        body.dark-mode .hm-stat {
          border-right-color: #404040;
        }
        body.dark-mode .hm-stat-num .odometer-value {
          color: #e0e0e0;
        }
        body.dark-mode .odometer-suffix {
          color: #e0e0e0;
        }
        body.dark-mode .hm-stat-label {
          color: #a0a0a0;
        }
        body.dark-mode .hm-avatar-wrap {
          background: transparent !important;
          box-shadow: none !important;
          --glow-color: rgba(200, 200, 200, 0.20);
        }
        body.dark-mode .hm-right {
          background: transparent !important;
        }
        body.dark-mode .section-divider {
          background: linear-gradient(to right, transparent, #E76F51, transparent);
        }

        /* ---- Light mode ---- */
        body.light-mode {
          background-color: #ffffff;
        }
        body.light-mode .hm-section {
          background: transparent;
        }
        body.light-mode .hm-greeting {
          color: #6c6c6c;
        }
        body.light-mode .hm-greeting span {
          color: #2c2c2c;
        }
        body.light-mode .hm-title {
          color: #E76F51;
        }
        body.light-mode .hm-social-btn {
          border-color: #d0d0d0;
          color: #6c6c6c;
        }
        body.light-mode .hm-social-btn:hover {
          border-color: #E76F51;
          color: #E76F51;
        }
        body.light-mode .hm-skills-wrap {
          border-color: #d0d0d0;
        }
        body.light-mode .hm-skills-wrap::before {
          background: #ffffff;
          color: #E76F51;
        }
        body.light-mode .hm-marquee-track::after {
          background: linear-gradient(to right, #ffffff 0%, transparent 12%, transparent 88%, #ffffff 100%);
        }
        body.light-mode .hm-skill-tag {
          border-color: #d0d0d0;
          color: #5a5a5a;
        }
        body.light-mode .hm-skill-tag:hover {
          border-color: #E76F51;
          color: #E76F51;
          background: #f5f5f5;
        }
        body.light-mode .hm-stat {
          border-right-color: #d0d0d0;
        }
        body.light-mode .hm-stat-num .odometer-value {
          color: #2c2c2c;
        }
        body.light-mode .odometer-suffix {
          color: #2c2c2c;
        }
        body.light-mode .hm-stat-label {
          color: #6c6c6c;
        }
        body.light-mode .hm-avatar-wrap {
          background: transparent !important;
          box-shadow: none !important;
          --glow-color: rgba(80, 80, 80, 0.10);
        }
        body.light-mode .hm-right {
          background: transparent !important;
        }
        body.light-mode .section-divider {
          background: linear-gradient(to right, transparent, #E76F51, transparent);
        }

        /* ---- Responsive ---- */
        @media (max-width: 768px) {

        
            .hm-section {
    height: auto;
    min-height: 100vh;
    overflow: visible;
    padding-top: 0px; /* a bit more breathing room under the navbar on mobile */
    padding-bottom: 60px;
  }

  .hm-avatar-wrap {
          transform: translateX(0px);
        }

          .hm-content {
            flex-direction: column-reverse;
            padding: 60px 24px;
            gap: 30px;
          }
          .hm-left {
            align-items: center;
            text-align: center;
            max-width: 100%;
            flex: unset;
          }
          .hm-right {
            flex: unset;
            width: 100%;
            justify-content: center;
            background: transparent !important;
            transform: translateX(50px);
          }
          .hm-avatar-wrap {
            max-width: 340px;
          }
          .hm-stats {
            justify-content: center;
          }
          .hm-skills-wrap {
            width: 100%;
            max-width: 100%;
            padding: 12px 0;
          }
          .hm-skill-tag {
            font-size: 10px;
            padding: 4px 9px;
          }
          .hm-marquee-row--left {
            animation-duration: 20s;
          }
          .hm-marquee-row--right {
            animation-duration: 16s;
          }
        }

        @media (max-width: 480px) {
          .hm-skill-tag {
            font-size: 10px;
            padding: 3px 8px;
          }
          .hm-marquee-row--left {
            animation-duration: 18s;
          }
          .hm-marquee-row--right {
            animation-duration: 14s;
          }
          .hm-avatar-wrap {
            max-width: 250px;
          }
        }
      `}),(0,b.jsxs)(`section`,{className:`hm-section`,id:`home`,children:[(0,b.jsx)(w,{dotSize:2,gap:24,baseColor:t?`#161616`:`#e8e8e8`,glowColor:`#E76F51`,proximity:120,glowIntensity:1,waveSpeed:.5}),(0,b.jsx)(`div`,{style:{position:`relative`,zIndex:1,width:`100%`},children:(0,b.jsxs)(`div`,{className:`hm-content`,children:[(0,b.jsxs)(`div`,{className:`hm-left`,children:[(0,b.jsxs)(`p`,{className:`hm-greeting`,children:[`Hi I am`,(0,b.jsx)(`span`,{children:`Prajin Singh`})]}),(0,b.jsxs)(`h1`,{className:`hm-title`,children:[i,(0,b.jsx)(`span`,{className:`hm-cursor`})]}),(0,b.jsxs)(`div`,{className:`hm-socials`,children:[(0,b.jsx)(`a`,{href:`https://www.instagram.com/przns7/`,className:`hm-social-btn`,"aria-label":`Instagram`,target:`_blank`,rel:`noopener noreferrer`,children:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,children:(0,b.jsx)(`path`,{d:`M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z`})})}),(0,b.jsx)(`a`,{href:`https://np.linkedin.com/in/prajinsingh`,className:`hm-social-btn`,"aria-label":`LinkedIn`,target:`_blank`,rel:`noopener noreferrer`,children:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,children:(0,b.jsx)(`path`,{d:`M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z`})})}),(0,b.jsx)(`a`,{href:`https://github.com/Prazeen7`,className:`hm-social-btn`,"aria-label":`GitHub`,target:`_blank`,rel:`noopener noreferrer`,children:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,children:(0,b.jsx)(`path`,{d:`M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z`})})}),(0,b.jsx)(`a`,{href:`mailto:prajin.singh9@gmail.com`,className:`hm-social-btn`,"aria-label":`Email`,target:`_blank`,rel:`noopener noreferrer`,children:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,children:(0,b.jsx)(`path`,{d:`M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z`})})})]}),(0,b.jsx)(`div`,{className:`hm-skills-wrap`,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:(0,b.jsxs)(`div`,{className:`hm-marquee-track`,children:[(0,b.jsx)(`div`,{className:`hm-marquee-row hm-marquee-row--left${n?` paused`:``}`,children:[...T,...T].map((e,t)=>(0,b.jsx)(`span`,{className:`hm-skill-tag`,children:e},`r1-${t}`))}),(0,b.jsx)(`div`,{className:`hm-marquee-row hm-marquee-row--right${n?` paused`:``}`,children:[...re,...re].map((e,t)=>(0,b.jsx)(`span`,{className:`hm-skill-tag`,children:e},`r2-${t}`))})]})}),(0,b.jsxs)(`div`,{className:`hm-stats`,children:[(0,b.jsxs)(`div`,{className:`hm-stat`,children:[(0,b.jsx)(`div`,{className:`hm-stat-num`,children:(0,b.jsx)(ne,{target:1,suffix:`+`,duration:3e3})}),(0,b.jsx)(`div`,{className:`hm-stat-label`,children:`Experiences`})]}),(0,b.jsxs)(`div`,{className:`hm-stat`,children:[(0,b.jsx)(`div`,{className:`hm-stat-num`,children:(0,b.jsx)(ne,{target:20,suffix:`+`,duration:3e3})}),(0,b.jsx)(`div`,{className:`hm-stat-label`,children:`Project done`})]}),(0,b.jsxs)(`div`,{className:`hm-stat`,children:[(0,b.jsx)(`div`,{className:`hm-stat-num`,children:(0,b.jsx)(ne,{target:15,suffix:`+`,duration:3e3})}),(0,b.jsx)(`div`,{className:`hm-stat-label`,children:`Technologies`})]})]})]}),(0,b.jsx)(`div`,{className:`hm-right`,children:(0,b.jsx)(`div`,{className:`hm-avatar-wrap`,children:(0,b.jsx)(`img`,{src:C,alt:`Prajin Singh`})})})]})}),(0,b.jsxs)(`div`,{className:`hm-scroll-indicator`,"aria-hidden":`true`,style:{zIndex:2},children:[(0,b.jsx)(`div`,{className:`hm-scroll-mouse`,children:(0,b.jsx)(`div`,{className:`hm-scroll-dot`})}),(0,b.jsx)(`span`,{className:`hm-scroll-text`,children:`SCROLL`})]})]})]})}var E=[{id:1,title:`Junior AI Developer`,company:`Alternative Technology`,period:`June 2025 - Feb 2026`,description:[`Research on different AI tools`,`Implement AI tools as required`],technologies:[`Python`,`AI/ML`,`LLM`,`RAG`]},{id:2,title:`IT Assistant`,company:`Oli & Associates`,period:`May 2023 - Feb 2025`,description:[`Installing and configuring computer hardware, operating system and applications`,`Monitoring and maintaining computer system`],technologies:[`Hardware`,`OS`,`System Administration`]},{id:3,title:`Technical Support`,company:`Micro World International`,period:`Jan 2021 - Feb 2022`,description:[`Installing and configuring computer hardware, operating system and applications`],technologies:[`Technical Support`,`Hardware`,`Software Installation`]}];function ae(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(0),[o,s]=(0,_.useState)(0),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(!1),f=(0,_.useRef)(null),p=(0,_.useRef)(!1),m=(0,_.useRef)(null),h=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=new IntersectionObserver(([n])=>{n.isIntersecting&&!p.current&&(t(!0),p.current=!0,e.disconnect())},{threshold:.1,rootMargin:`0px 0px -50px 0px`});return f.current&&e.observe(f.current),()=>e.disconnect()},[]),(0,_.useEffect)(()=>{if(!(!e||c||u)&&window.innerWidth>768)return m.current=setInterval(()=>{s(e=>(e+1)%E.length)},3e3),()=>{m.current&&clearInterval(m.current)}},[e,c,u]);let g=e=>{h.current&&=(clearTimeout(h.current),null),d(!1),l(!0),r(e),m.current&&clearInterval(m.current)},v=()=>{l(!1),d(!0),h.current=setTimeout(()=>{r(null),d(!1),a(e=>e+1)},400)};return(0,_.useEffect)(()=>()=>{h.current&&clearTimeout(h.current)},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&display=swap');

        /* ─── Keyframes ──────────────────────────────────────── */
        @keyframes wk-fadeUp {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wk-slideLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ─── Header animation ───────────────────────────────── */
        .wk-header {
          text-align: center;
          margin-bottom: 64px;
          margin-top: 80px;
          padding: 0 16px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s cubic-bezier(0.25,0.46,0.45,0.94),
                      transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .wk-animate .wk-header {
          opacity: 1;
          transform: translateY(0);
        }

        /* ─── Desktop: Hover Container ──────────────────────── */
        .experience-hover-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94),
                      transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
        }

        .wk-animate .experience-hover-item {
          opacity: 1;
          transform: translateY(0);
        }

        .wk-animate .experience-hover-item:nth-child(1) { transition-delay: 0.10s; }
        .wk-animate .experience-hover-item:nth-child(2) { transition-delay: 0.22s; }
        .wk-animate .experience-hover-item:nth-child(3) { transition-delay: 0.34s; }

        .company-name {
          font-size: 24px;
          font-weight: 600;
          color: #e0e0e0;
          cursor: pointer;
          padding: 16px 24px;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 280px;
        }

        .company-name:hover {
          color: #E76F51;
          background: rgba(231, 111, 81, 0.05);
        }

        /* Active state for company name - state driven */
        @media (min-width: 769px) {
          .company-name.is-active {
            color: #E76F51;
            background: rgba(231, 111, 81, 0.15);
            transform: scale(1.05);
          }

          /* Dim non-active company names when one is active */
          .experience-grid:has(.company-name.is-active) .company-name:not(.is-active) {
            color: #6a6a6a;
            background: transparent;
            transform: scale(1);
          }
        }

        /* ─── Card base — glassmorphism effect ─────────────── */
        .experience-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          height: auto;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          min-width: 380px;
          max-width: 420px;
        }

        /* Desktop: Absolute positioned cards */
        @media (min-width: 769px) {
          .experience-card {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                        transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 100;
            bottom: 100%;
            margin-bottom: 24px;
            max-width: min(420px, calc(100vw - 48px));
            min-width: min(380px, calc(100vw - 48px));
          }

          /* Show card when parent has is-active class */
          .experience-hover-item.is-active .experience-card {
            opacity: 1;
            pointer-events: auto;
            transform: translateX(-50%) translateY(-8px);
          }

          .experience-card:hover {
            border-color: #E76F51;
            box-shadow: 0 12px 28px rgba(231,111,81,0.15);
            background: rgba(231, 111, 81, 0.08);
          }
          
          /* Ensure parent container can show absolute positioned children */
          .experience-hover-item {
            position: relative;
            isolation: isolate;
          }
        }

        /* Mobile: Grid cards */
        @media (max-width: 768px) {
          .experience-hover-item {
            position: static;
            opacity: 0;
            transform: translateX(-40px);
            transition: opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94),
                        transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
            display: flex;
            height: 100%;
          }

          .wk-animate .experience-hover-item {
            opacity: 1;
            transform: translateX(0);
          }

          .company-name {
            display: none;
          }

          .experience-card {
            position: static;
            opacity: 1;
            pointer-events: auto;
            transform: none;
            min-width: auto;
            max-width: none;
            width: 100%;
            display: flex;
            flex-direction: column;
          }

          .experience-card:hover {
            border-color: #E76F51;
            transform: translateY(-4px);
            box-shadow: 0 12px 28px rgba(231,111,81,0.15);
            background: rgba(231, 111, 81, 0.08);
          }

          .exp-description {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
        }

        /* ─── Card internals ─────────────────────────────────── */
        .exp-header { margin-bottom: 20px; }
        .exp-title {
          color: #e0e0e0; font-size: 20px; font-weight: 700;
          margin: 0 0 6px 0; line-height: 1.3;
        }
        .exp-company {
          color: #E76F51; font-size: 15px; font-weight: 500; margin: 0 0 4px 0;
        }
        .exp-period {
          color: #8a8a8a; font-size: 12px; letter-spacing: 0.3px;
          display: inline-block; padding: 2px 0;
        }
        .exp-description {
          list-style: none; padding: 0; margin: 0 0 20px 0; flex: 1;
        }
        .exp-description li {
          color: #b0b0b0; font-size: 14px; line-height: 1.6;
          margin-bottom: 8px; padding-left: 18px;
          position: relative; text-align: start;
        }
        .exp-description li::before {
          content: "▹"; position: absolute; left: 0;
          color: #E76F51; font-size: 12px;
        }
        .exp-tech { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
        .exp-tech-tag {
          background: #2a2a2a; color: #E76F51; border: 1px solid #3a3a3a;
          font-size: 11px; font-weight: 500; padding: 5px 12px;
          border-radius: 20px; transition: all 0.2s ease;
        }
        .exp-tech-tag:hover { background: #E76F51; color: #1a1a1a; transform: translateY(-1px); }

        /* ─── Theme tokens ───────────────────────────────────── */
        .work-title { color: #e0e0e0; }
        .work-sub   { color: #a0a0a0; }
        .work-badge {
          font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
          color: #E76F51; font-weight: 500; margin-bottom: 12px; display: inline-block;
        }
        .work-title {
          font-size: clamp(26px, 5vw, 48px); font-weight: 700;
          margin: 0 0 16px 0; letter-spacing: -0.02em; transition: color 0.3s ease;
        }
        .work-sub {
          font-size: clamp(14px, 2.2vw, 18px); max-width: 580px; margin: 0 auto;
          line-height: 1.5; font-weight: 400; transition: color 0.3s ease;
        }

        /* ─── Layout ─────────────────────────────────────────── */
        .experience-section {
          width: 100%;
          margin-bottom: 80px;
          padding: 0 24px;
          position: relative;
          overflow: visible;
          background: transparent;
        }
        .experience-section > * {
          position: relative;
          z-index: 1;
        }
        .experience-content {
          max-width: 1250px;
          margin: 0 auto;
        }
        
        /* Desktop & Tablet: Horizontal layout with hover */
        @media (min-width: 769px) {
          .experience-grid {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 80px;
            margin-top: 80px;
            padding: 300px 24px 80px 24px; /* Added horizontal padding */
            position: relative;
            min-height: 120px;
          }
          
          .experience-section {
            margin-bottom: 120px;
          }
          
          .wk-header {
            margin-top: 80px;
          }
        }

        /* Mobile: Grid layout */
        @media (max-width: 768px) {
          .experience-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 28px;
            grid-auto-rows: 1fr;
          }
        }
        .section-divider {
          height: 2px;
          background: linear-gradient(to right, transparent, #E76F51 20%, #E76F51 80%, transparent);
          box-shadow: 0 0 20px rgba(231, 111, 81, 0.5);
          margin: 60px 24px;
          position: relative;
          z-index: 2;
        }
        
        body.light-mode .section-divider {
          box-shadow: 0 0 15px rgba(231, 111, 81, 0.4);
        }

        /* ─── Light Mode ─────────────────────────────────────── */
        body.light-mode .work-title { color: #1a1a1a; }
        body.light-mode .work-sub   { color: #6c6c6c; }
        body.light-mode .company-name { color: #1a1a1a; }
        body.light-mode .company-name:hover { color: #E76F51; background: rgba(231,111,81,0.08); }
        
        /* Light mode company name active state */
        @media (min-width: 769px) {
          body.light-mode .company-name.is-active {
            color: #E76F51;
            background: rgba(231, 111, 81, 0.2);
            transform: scale(1.05);
          }

          body.light-mode .experience-grid:has(.company-name.is-active) .company-name:not(.is-active) {
            color: #b0b0b0;
          }
        }
        body.light-mode .experience-card {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-color: rgba(0, 0, 0, 0.15);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
        }
        @media (min-width: 769px) {
          body.light-mode .experience-hover-item:hover .experience-card {
            border-color: #E76F51; 
            box-shadow: 0 12px 28px rgba(231,111,81,0.2);
            background: rgba(231, 111, 81, 0.12);
          }
        }
        @media (max-width: 768px) {
          body.light-mode .experience-card:hover {
            border-color: #E76F51; 
            box-shadow: 0 8px 20px rgba(231,111,81,0.1);
            background: rgba(231, 111, 81, 0.12);
          }
        }
        body.light-mode .exp-title   { color: #1a1a1a; }
        body.light-mode .exp-company { color: #E76F51; }
        body.light-mode .exp-period  { color: #8a8a8a; }
        body.light-mode .exp-description li { color: #5a5a5a; }
        body.light-mode .exp-tech-tag { background: #f0f0f0; color: #E76F51; border-color: #e0e0e0; }
        body.light-mode .exp-tech-tag:hover { background: #E76F51; color: white; }

        /* ─── Responsive ─────────────────────────────────────── */
        @media (max-width: 768px) {
          .experience-section { padding: 0 16px; margin-bottom: 48px; }
          .section-divider { margin: 40px 16px; }
          .experience-card { padding: 20px; }
          .wk-header { margin-bottom: 36px; margin-top: 48px; }
          .exp-title { font-size: 17px; }
          .exp-company { font-size: 14px; }
          .exp-description li { font-size: 13px; }
          .exp-tech { gap: 6px; }
        }
        @media (max-width: 480px) {
          .experience-section { padding: 0 12px; margin-bottom: 36px; }
          .section-divider { margin: 32px 12px; }
          .experience-grid { gap: 12px; margin-top: 20px; }
          .experience-card { padding: 16px 14px; border-radius: 16px; }
          .wk-header { margin-bottom: 28px; padding: 0; margin-top: 40px; }
          .work-badge { font-size: 11px; }
          .exp-title { font-size: 15px; }
          .exp-company { font-size: 13px; }
          .exp-period { font-size: 11px; }
          .exp-description li { font-size: 12.5px; }
          .exp-tech-tag { font-size: 10px; padding: 4px 9px; }
        }
        
        /* Ensure proper spacing between sections on all screens */
        .section-divider {
          position: relative;
          z-index: 1;
        }
      `}),(0,b.jsxs)(`div`,{id:`work`,children:[(0,b.jsx)(`div`,{className:`experience-section${e?` wk-animate`:``}`,ref:f,children:(0,b.jsxs)(`div`,{className:`experience-content`,children:[(0,b.jsxs)(`div`,{className:`wk-header`,children:[(0,b.jsx)(`h2`,{className:`work-title`,children:`Work Experience`}),(0,b.jsx)(`p`,{className:`work-sub`,children:`Professional journey across AI development, IT support, and technical roles`})]}),(0,b.jsx)(`div`,{className:`experience-grid`,children:E.map((e,t)=>{let r=(c||u)&&n===e.id?!0:!c&&!u&&t===o;return(0,b.jsxs)(`div`,{className:`experience-hover-item${r?` is-active`:``}`,onMouseEnter:()=>g(e.id),onMouseLeave:v,children:[(0,b.jsx)(`div`,{className:`company-name${r?` is-active`:``}`,children:e.company}),(0,b.jsxs)(`div`,{className:`experience-card`,children:[(0,b.jsxs)(`div`,{className:`exp-header`,children:[(0,b.jsx)(`h3`,{className:`exp-title`,children:e.title}),(0,b.jsx)(`p`,{className:`exp-company`,children:e.company}),(0,b.jsx)(`span`,{className:`exp-period`,children:e.period})]}),(0,b.jsx)(`ul`,{className:`exp-description`,children:e.description.map((e,t)=>(0,b.jsx)(`li`,{children:e},t))}),(0,b.jsx)(`div`,{className:`exp-tech`,children:e.technologies.map(e=>(0,b.jsx)(`span`,{className:`exp-tech-tag`,children:e},e))})]})]},e.id)})},i)]})}),(0,b.jsx)(`div`,{className:`section-divider`})]})]})}function oe(){let[e,t]=(0,_.useState)({name:``,email:``,message:``}),[n,r]=(0,_.useState)({submitted:!1,loading:!1,error:null}),[i,a]=(0,_.useState)(new Set),o=(0,_.useRef)(null),s=(0,_.useRef)(null),c=(0,_.useRef)(null),l=(0,_.useRef)(null),u=(0,_.useRef)(null),d=(0,_.useRef)([]),f=(0,_.useRef)([]),p=n=>{t({...e,[n.target.name]:n.target.value})};return(0,_.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&c.current&&!i.has(`header`)&&(c.current.style.animation=`fadeUpContact 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,a(e=>new Set(e).add(`header`)),e.disconnect())})},{threshold:.3});return c.current&&e.observe(c.current),()=>e.disconnect()},[i]),(0,_.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&l.current&&!i.has(`socialSection`)&&(l.current.style.animation=`slideInLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards`,a(e=>new Set(e).add(`socialSection`)),e.disconnect())})},{threshold:.3});return l.current&&e.observe(l.current),()=>e.disconnect()},[i]),(0,_.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&u.current&&!i.has(`formSection`)&&(u.current.style.animation=`slideInRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards`,a(e=>new Set(e).add(`formSection`)),e.disconnect())})},{threshold:.3});return u.current&&e.observe(u.current),()=>e.disconnect()},[i]),(0,_.useEffect)(()=>{let e=[];return d.current.forEach((t,n)=>{if(t&&!i.has(`social-icon-${n}`)){let r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(t.style.animation=`scaleInIcon 0.5s ease forwards`,t.style.animationDelay=`${.1*n}s`,a(e=>new Set(e).add(`social-icon-${n}`)),r.disconnect())})},{threshold:.5,rootMargin:`0px 0px -50px 0px`});r.observe(t),e.push(r)}}),()=>{e.forEach(e=>e.disconnect())}},[i]),(0,_.useEffect)(()=>{let e=[];return f.current.forEach((t,n)=>{if(t&&!i.has(`contact-info-${n}`)){let r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(t.style.animation=`slideInLeftCard 0.5s ease forwards`,t.style.animationDelay=`${.15*n}s`,a(e=>new Set(e).add(`contact-info-${n}`)),r.disconnect())})},{threshold:.5,rootMargin:`0px 0px -50px 0px`});r.observe(t),e.push(r)}}),()=>{e.forEach(e=>e.disconnect())}},[i]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes fadeUpContact {
          from {
            opacity: 0;
            transform: translateY(36px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleInIcon {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeftCard {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInSuccess {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOutSuccess {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Dark Mode Styles */
        body.dark-mode .contact-section {
          background: transparent;
        }

        body.dark-mode .contact-title {
          color: #e0e0e0;
        }

        body.dark-mode .contact-sub {
          color: #a0a0a0;
        }

        body.dark-mode .social-title {
          color: #e0e0e0;
        }

        body.dark-mode .social-description {
          color: #a0a0a0;
        }

        body.dark-mode .social-icon-link {
          background: rgba(10, 10, 10, 0.4) !important;
          backdrop-filter: blur(16px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.05) !important;
          border-color: rgba(255, 255, 255, 0.18);
          color: #ffffff; /* icon color white in dark mode */
        }

        body.dark-mode .social-icon-link:hover {
          border-color: #E76F51;
          color: #E76F51;
          background: rgba(231, 111, 81, 0.1) !important;
          box-shadow: 
            0 12px 32px rgba(231, 111, 81, 0.15),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.1) !important;
        }

        body.dark-mode .contact-info-card,
        body.dark-mode .form-section {
          background: rgba(10, 10, 10, 0.4) !important;
          backdrop-filter: blur(16px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.05) !important;
          border-color: rgba(255, 255, 255, 0.18);
        }

        body.dark-mode .contact-info-card:hover {
          border-color: #E76F51;
          box-shadow: 
            0 12px 32px rgba(231, 111, 81, 0.15),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.1) !important;
        }

        body.dark-mode .contact-info-text p,
        body.dark-mode .contact-info-text a {
          color: #e0e0e0;
        }

        body.dark-mode .form-input,
        body.dark-mode .form-textarea {
          background: rgba(10, 10, 10, 0.2);
          border-color: rgba(255, 255, 255, 0.18);
          color: #e0e0e0;
          backdrop-filter: blur(10px) saturate(150%);
          -webkit-backdrop-filter: blur(10px) saturate(150%);
        }

        body.dark-mode .form-input:focus,
        body.dark-mode .form-textarea:focus {
          border-color: #E76F51;
          background: rgba(15, 15, 15, 0.3);
        }

        body.dark-mode .form-input::placeholder,
        body.dark-mode .form-textarea::placeholder {
          color: #5a5a5a;
        }

        body.dark-mode .success-message {
          background: linear-gradient(135deg, rgba(46, 125, 50, 0.15), rgba(46, 125, 50, 0.05));
          color: #81c784;
          border-color: rgba(129, 199, 132, 0.3);
        }

        body.dark-mode .error-message {
          background: linear-gradient(135deg, rgba(198, 40, 40, 0.15), rgba(198, 40, 40, 0.05));
          color: #ef5350;
          border-color: rgba(239, 83, 80, 0.3);
        }

        /* Light Mode Styles */
        body.light-mode .contact-section {
          background: transparent;
        }

        body.light-mode .contact-title {
          color: #1a1a1a;
        }

        body.light-mode .contact-sub {
          color: #6c6c6c;
        }

        body.light-mode .social-title {
          color: #1a1a1a;
        }

        body.light-mode .social-description {
          color: #6c6c6c;
        }

        body.light-mode .social-icon-link {
          background: rgba(255, 255, 255, 0.4) !important;
          backdrop-filter: blur(16px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
          box-shadow: 
            0 8px 32px 0 rgba(31, 38, 135, 0.10),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.5) !important;
          border-color: rgba(0, 0, 0, 0.12);
          color: #000000; /* icon color black in light mode */
        }

        body.light-mode .social-icon-link:hover {
          border-color: #E76F51;
          color: #E76F51;
          background: rgba(231, 111, 81, 0.1) !important;
          box-shadow: 
            0 12px 32px rgba(231, 111, 81, 0.15),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.8) !important;
        }

        body.light-mode .contact-info-card,
        body.light-mode .form-section {
          background: rgba(255, 255, 255, 0.4) !important;
          backdrop-filter: blur(16px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
          box-shadow: 
            0 8px 32px 0 rgba(31, 38, 135, 0.10),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.5) !important;
          border-color: rgba(0, 0, 0, 0.12);
        }

        body.light-mode .contact-info-card:hover {
          border-color: #E76F51;
          box-shadow: 
            0 12px 32px rgba(231, 111, 81, 0.15),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.8) !important;
        }

        body.light-mode .contact-info-text p,
        body.light-mode .contact-info-text a {
          color: #1a1a1a;
        }

        body.light-mode .form-input,
        body.light-mode .form-textarea {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(0, 0, 0, 0.12);
          color: #1a1a1a;
          backdrop-filter: blur(10px) saturate(150%);
          -webkit-backdrop-filter: blur(10px) saturate(150%);
        }

        body.light-mode .form-input:focus,
        body.light-mode .form-textarea:focus {
          border-color: #E76F51;
          background: rgba(255, 255, 255, 0.45);
        }

        body.light-mode .form-input::placeholder,
        body.light-mode .form-textarea::placeholder {
          color: #a0a0a0;
        }

        body.light-mode .success-message {
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05));
          color: #2e7d32;
          border-color: rgba(46, 125, 50, 0.2);
        }

        body.light-mode .error-message {
          background: linear-gradient(135deg, rgba(244, 67, 54, 0.1), rgba(244, 67, 54, 0.05));
          color: #c62828;
          border-color: rgba(198, 40, 40, 0.2);
        }

        .contact-section {
          width: 100%;
          font-family: 'Jost', sans-serif;
          position: relative;
          overflow: visible;
          transition: background-color 0.3s ease;
        }

        .contact-section > .contact-container {
          position: relative;
          z-index: 1;
        }

        .contact-container {
          max-width: 1250px;
          width: 100%;
          margin: 0 auto;
          padding: 0px 64px 100px;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 64px;
          opacity: 0;
        }

        .contact-badge {
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #E76F51;
          font-weight: 500;
          margin-bottom: 12px;
          display: inline-block;
        }

        .contact-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
        }

        .contact-sub {
          font-size: 18px;
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.5;
          font-weight: 400;
          transition: color 0.3s ease;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: stretch;
        }

        /* Social Section */
        .social-section {
          opacity: 0;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .social-title {
          font-size: 28px;
          font-weight: 600;
          margin: 0 0 16px 0;
          transition: color 0.3s ease;
        }

        .social-description {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 40px;
          transition: color 0.3s ease;
        }

        .social-icons {
          display: flex;
          gap: 18px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .social-icon-link {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          text-decoration: none;
          opacity: 0;
          border: 1px solid;
        }

        .social-icon-link:hover {
          transform: translateY(-4px);
        }

        .social-icon-link svg {
          width: 22px;
          height: 22px;
        }

        /* Contact Info Cards */
        .contact-info {
          margin-top: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-info-card {
          border: 1px solid;
          border-radius: 10px;
          padding: 10px 16px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          opacity: 0;
        }

        .contact-info-card:hover {
          transform: translateX(4px);
        }

        .contact-info-icon {
          width: 32px;
          height: 32px;
          background: rgba(231, 111, 81, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #E76F51;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover .contact-info-icon {
          background: #E76F51;
          color: #0a0a0a;
          transform: scale(1.05);
        }

        .contact-info-icon svg {
          width: 16px;
          height: 16px;
        }

        .contact-info-text {
          flex: 1;
          display: flex;
          align-items: baseline;
          gap: 8px;
          flex-wrap: wrap;
        }

        .contact-info-text h4 {
          font-size: 12px;
          font-weight: 600;
          color: #E76F51;
          margin: 0;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .contact-info-text p {
          font-size: 13px;
          font-weight: 500;
          margin: 0;
          word-break: break-word;
          line-height: 1.3;
          transition: color 0.3s ease;
        }

        .contact-info-text a {
          text-decoration: none;
          transition: color 0.2s;
          font-size: 13px;
        }

        .contact-info-text a:hover {
          color: #E76F51 !important;
        }

        /* Form Section */
        .form-section {
          padding: 32px;
          border-radius: 20px;
          border: 1px solid;
          opacity: 0;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.3s ease;
        }

        form {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
        }

        .form-fields {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          width: 100%;
        }

        .form-label {
          display: block;
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 6px;
          letter-spacing: 0.02em;
          transition: color 0.3s ease;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 12px 16px;
          font-size: 14px;
          font-family: 'Jost', sans-serif;
          border: 1.5px solid;
          border-radius: 10px;
          transition: all 0.2s ease;
          outline: none;
          box-sizing: border-box;
        }

        .form-input:focus,
        .form-textarea:focus {
          box-shadow: 0 0 0 3px rgba(231, 111, 81, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .submit-btn {
          width: 100%;
          padding: 12px 24px;
          background: #E76F51;
          color: #0a0a0a;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Jost', sans-serif;
          cursor: pointer;
          transition: all 0.25s ease;
          margin-top: 20px;
          box-sizing: border-box;
        }

        .submit-btn:hover:not(:disabled) {
          background: #e05f3e;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(231, 111, 81, 0.3);
        }

        .submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Success Message */
        .success-message {
          padding: 14px 18px;
          border-radius: 12px;
          margin-bottom: 24px;
          font-size: 14px;
          text-align: center;
          font-weight: 500;
          backdrop-filter: blur(8px);
          animation: slideInSuccess 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          position: relative;
          overflow: hidden;
        }

        .success-message::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(129, 199, 132, 0.2), transparent);
          animation: shimmer 2s infinite;
        }

        .success-message.fade-out {
          animation: fadeOutSuccess 0.3s ease forwards;
        }

        .success-icon {
          display: inline-block;
          margin-right: 10px;
          font-size: 18px;
          vertical-align: middle;
          animation: bounce 0.5s ease;
        }

        /* Error Message */
        .error-message {
          padding: 14px 18px;
          border-radius: 12px;
          margin-bottom: 24px;
          font-size: 14px;
          text-align: center;
          font-weight: 500;
          backdrop-filter: blur(8px);
          animation: slideInSuccess 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .error-icon {
          display: inline-block;
          margin-right: 10px;
          font-size: 18px;
          vertical-align: middle;
        }

        .loading-spinner {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(10, 10, 10, 0.3);
          border-top-color: #0a0a0a;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
          margin-right: 8px;
          vertical-align: middle;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .contact-container {
            padding: 60px 40px 80px;
          }
          .contact-content {
            gap: 48px;
          }
          .form-section {
            padding: 28px;
          }
          .form-fields {
            gap: 18px;
          }
        }

        @media (max-width: 768px) {
          .contact-container {
            padding: 48px 24px 60px;
          }
          .contact-content {
            grid-template-columns: 1fr;
            gap: 48px;
            align-items: start;
          }
          .social-section {
            text-align: center;
          }
          .social-icons {
            justify-content: center;
          }
          .form-section {
            padding: 24px;
          }
          .form-fields {
            gap: 16px;
          }
          .form-input,
          .form-textarea {
            padding: 10px 14px;
            font-size: 13px;
          }
          .contact-info-text {
            flex-wrap: wrap;
          }
          .success-message,
          .error-message {
            padding: 12px 16px;
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .contact-container {
            padding: 40px 20px 50px;
          }
          .contact-header {
            margin-bottom: 40px;
          }
          .form-section {
            padding: 20px;
          }
          .form-fields {
            gap: 14px;
          }
          .social-icon-link {
            width: 48px;
            height: 48px;
          }
          .social-icon-link svg {
            width: 20px;
            height: 20px;
          }
          .contact-info-card {
            padding: 8px 12px;
          }
          .contact-info-icon {
            width: 28px;
            height: 28px;
          }
          .contact-info-icon svg {
            width: 14px;
            height: 14px;
          }
          .contact-info-text h4 {
            font-size: 10px;
          }
          .contact-info-text p,
          .contact-info-text a {
            font-size: 11px;
          }
          .contact-title {
            font-size: 28px;
          }
          .contact-sub {
            font-size: 16px;
          }
          .success-message,
          .error-message {
            padding: 10px 14px;
            font-size: 12px;
          }
        }
      `}),(0,b.jsx)(`section`,{className:`contact-section`,id:`contact`,ref:s,children:(0,b.jsxs)(`div`,{className:`contact-container`,children:[(0,b.jsxs)(`div`,{className:`contact-header`,ref:c,children:[(0,b.jsx)(`h2`,{className:`contact-title`,children:`Let's Connect`}),(0,b.jsx)(`p`,{className:`contact-sub`,children:`Have a project in mind or just want to say hello? I'd love to hear from you.`})]}),(0,b.jsxs)(`div`,{className:`contact-content`,children:[(0,b.jsxs)(`div`,{className:`social-section`,ref:l,children:[(0,b.jsx)(`h3`,{className:`social-title`,children:`Connect with me`}),(0,b.jsx)(`p`,{className:`social-description`,children:`Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.`}),(0,b.jsx)(`div`,{className:`social-icons`,children:[{name:`LinkedIn`,url:`https://www.linkedin.com/in/prajinsingh/`,icon:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,b.jsx)(`path`,{d:`M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z`})})},{name:`GitHub`,url:`https://github.com/Prazeen7`,icon:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,b.jsx)(`path`,{d:`M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z`})})}].map((e,t)=>(0,b.jsx)(`a`,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,className:`social-icon-link`,"aria-label":e.name,ref:e=>d.current[t]=e,children:e.icon},e.name))}),(0,b.jsx)(`div`,{className:`contact-info`,children:[{icon:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:(0,b.jsx)(`path`,{d:`M22 6L12 13L2 6M22 6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6l10 7l10-7z`,stroke:`currentColor`,fill:`none`})}),label:`EMAIL`,value:`prajin.singh9@gmail.com`,href:`mailto:prajin.singh9@gmail.com`},{icon:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:(0,b.jsx)(`path`,{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z`,stroke:`currentColor`,fill:`none`})}),label:`PHONE`,value:`+977-9803222093`,href:`tel:+9779803222093`},{icon:(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,b.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`,stroke:`currentColor`,fill:`none`}),(0,b.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`,stroke:`currentColor`,fill:`none`})]}),label:`LOCATION`,value:`Kathmandu, Nepal`,href:null}].map((e,t)=>(0,b.jsxs)(`div`,{className:`contact-info-card`,ref:e=>f.current[t]=e,children:[(0,b.jsx)(`div`,{className:`contact-info-icon`,children:e.icon}),(0,b.jsxs)(`div`,{className:`contact-info-text`,children:[(0,b.jsxs)(`h4`,{children:[e.label,`:`]}),(0,b.jsx)(`p`,{children:e.href?(0,b.jsx)(`a`,{href:e.href,children:e.value}):e.value})]})]},t))})]}),(0,b.jsx)(`div`,{className:`form-section`,ref:u,children:(0,b.jsxs)(`form`,{ref:o,onSubmit:async n=>{if(n.preventDefault(),r({submitted:!1,loading:!0,error:null}),e.message.length<10){r({submitted:!1,loading:!1,error:`Please provide a more detailed message (at least 10 characters)`});return}try{let n=await fetch(`https://formspree.io/f/mykbzbyv`,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify({name:e.name,email:e.email,message:e.message,_subject:`Portfolio Contact: ${e.name}`,_replyto:e.email})});if(n.ok)r({submitted:!0,loading:!1,error:null}),t({name:``,email:``,message:``}),setTimeout(()=>{r(e=>({...e,submitted:!1}))},5e3);else{let e=await n.json();throw Error(e.error||`Something went wrong`)}}catch(e){r({submitted:!1,loading:!1,error:e.message||`Something went wrong. Please try again.`})}},children:[(0,b.jsx)(`input`,{type:`text`,name:`_gotcha`,style:{display:`none`},tabIndex:`-1`,autoComplete:`off`}),n.submitted&&(0,b.jsxs)(`div`,{className:`success-message`,children:[(0,b.jsx)(`span`,{className:`success-icon`,children:`✓`}),`Message sent successfully! I'll get back to you soon.`]}),n.error&&(0,b.jsxs)(`div`,{className:`error-message`,children:[(0,b.jsx)(`span`,{className:`error-icon`,children:`⚠️`}),n.error]}),(0,b.jsxs)(`div`,{className:`form-fields`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`name`,className:`form-label`,children:`Full Name`}),(0,b.jsx)(`input`,{type:`text`,id:`name`,name:`name`,value:e.name,onChange:p,required:!0,className:`form-input`,placeholder:`John Doe`,disabled:n.loading})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`email`,className:`form-label`,children:`Email Address`}),(0,b.jsx)(`input`,{type:`email`,id:`email`,name:`email`,value:e.email,onChange:p,required:!0,className:`form-input`,placeholder:`john@example.com`,disabled:n.loading})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`message`,className:`form-label`,children:`Message`}),(0,b.jsx)(`textarea`,{id:`message`,name:`message`,value:e.message,onChange:p,required:!0,className:`form-textarea`,placeholder:`Your message here...`,disabled:n.loading})]})]}),(0,b.jsx)(`button`,{type:`submit`,className:`submit-btn`,disabled:n.loading,children:n.loading?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`span`,{className:`loading-spinner`}),`Sending...`]}):`Send Message`})]})})]})]})})]})}var se=`/assets/Logo-qvSuH0Vp.png`;function ce({onLoadingComplete:e,theme:t,isThemeLoaded:n}){let[r,i]=(0,_.useState)(!1),[a,o]=(0,_.useState)(0);return(0,_.useEffect)(()=>{if(!n)return;let t=setInterval(()=>{o(e=>e>=100?(clearInterval(t),100):e+2)},50),r=setTimeout(()=>{i(!0),setTimeout(()=>{e&&e()},500)},2500);return()=>{clearTimeout(r),clearInterval(t)}},[e,n]),n?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`style`,{children:`
        @keyframes pulseOpacity {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes pulseScale {
          0%, 100% {
            transform: scale(0.95);
          }
          50% {
            transform: scale(1.08);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(231, 111, 81, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(231, 111, 81, 0.6));
          }
        }

        @keyframes textGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes fadeOutLoader {
          from {
            opacity: 1;
            visibility: visible;
          }
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Dark Theme Styles */
        .loader-container.dark {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        }

        .loader-container.dark .loading-bar-bg {
          background: rgba(231, 111, 81, 0.2);
        }

        .loader-container.dark .loading-bar-fill {
          background: linear-gradient(90deg, #E76F51, #F4A261, #E9C46A);
        }

        .loader-container.dark .tagline {
          color: rgba(231, 111, 81, 0.6);
        }

        .loader-container.dark .loader-text {
          background: linear-gradient(135deg, #E76F51, #F4A261, #E9C46A, #E76F51);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .loader-container.dark .dot {
          background: #E76F51;
        }

        .loader-container.dark .loading-percentage {
          color: #E76F51;
        }

        /* Light Theme Styles */
        .loader-container.light {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }

        .loader-container.light .loading-bar-bg {
          background: rgba(231, 111, 81, 0.1);
        }

        .loader-container.light .tagline {
          color: rgba(231, 111, 81, 0.5);
        }

        .loader-container.light .loader-text {
          background: linear-gradient(135deg, #E76F51, #F4A261, #E9C46A, #E76F51);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .loader-container.light .dot {
          background: #E76F51;
        }

        .loader-container.light .loading-bar-fill {
          background: linear-gradient(90deg, #E76F51, #F4A261, #E9C46A);
        }

        .loader-container.light .loading-percentage {
          color: #E76F51;
        }

        /* Common Styles */
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
        }

        .loader-container.fade-out {
          animation: fadeOutLoader 0.5s ease-in-out forwards;
        }

        .loader-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .logo-wrapper {
          animation: bounce 2s ease-in-out infinite;
        }

        .logo-image {
          width: 120px;
          height: 120px;
          object-fit: contain;
          animation: pulseScale 2s ease-in-out infinite, glowPulse 2s ease-in-out infinite;
          border-radius: 50%;
        }

        .text-wrapper {
          position: relative;
          overflow: hidden;
        }

        .loader-text {
          font-family: 'Jost', sans-serif;
          font-size: 36px;
          font-weight: 800;
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: pulseOpacity 2s ease-in-out infinite, textGradient 3s ease infinite;
          letter-spacing: 3px;
          text-transform: uppercase;
          position: relative;
        }

        .dot-container {
          display: inline-block;
          margin-left: 5px;
        }

        .dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin: 0 2px;
          animation: pulseOpacity 1.5s ease-in-out infinite;
        }

        .dot:nth-child(1) {
          animation-delay: 0s;
        }

        .dot:nth-child(2) {
          animation-delay: 0.3s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.6s;
        }

        .loading-container {
          width: 250px;
          margin-top: 20px;
        }

        .loading-bar-bg {
          width: 100%;
          height: 4px;
          border-radius: 4px;
          overflow: hidden;
        }

        .loading-bar-fill {
          height: 100%;
          width: 0%;
          border-radius: 4px;
          transition: width 0.1s linear;
          position: relative;
          overflow: hidden;
        }

        .loading-bar-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.3), 
            transparent
          );
          animation: shimmer 1.5s infinite;
        }

        .loading-percentage {
          text-align: center;
          margin-top: 12px;
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          font-weight: 500;
          animation: pulseOpacity 1.5s ease-in-out infinite;
        }

        .tagline {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-top: 10px;
          animation: pulseOpacity 2s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .logo-image {
            width: 90px;
            height: 90px;
          }
          .loader-text {
            font-size: 24px;
            letter-spacing: 2px;
          }
          .loading-container {
            width: 200px;
          }
          .tagline {
            font-size: 10px;
          }
        }
      `}),(0,b.jsx)(`div`,{className:`loader-container ${t} ${r?`fade-out`:``}`,children:(0,b.jsxs)(`div`,{className:`loader-content`,children:[(0,b.jsx)(`div`,{className:`logo-wrapper`,children:(0,b.jsx)(`img`,{src:se,alt:`Prajin Singh Logo`,className:`logo-image`})}),(0,b.jsx)(`div`,{className:`text-wrapper`,children:(0,b.jsx)(`span`,{className:`loader-text`,children:`PRAJIN SINGH`})}),(0,b.jsxs)(`div`,{className:`loading-container`,children:[(0,b.jsx)(`div`,{className:`loading-bar-bg`,children:(0,b.jsx)(`div`,{className:`loading-bar-fill`,style:{width:`${a}%`}})}),(0,b.jsxs)(`div`,{className:`loading-percentage`,children:[a,`%`]})]}),(0,b.jsx)(`div`,{className:`tagline`,children:`Building digital experiences`})]})})]}):null}var D=`/assets/CNN-1-Ci03abxL.png`,O=`/assets/CNN-2-Xv-evknc.png`,le=`/assets/CNN-Train-y9AHmIlG.png`,ue=`/assets/CNN-Train-2-4KQD4H3m.png`,de=`/assets/wordcloud-D5XYlByu.png`,fe=`/assets/freq-Dg-wbIES.png`,k=`/assets/CM-BGSOkmOM.png`,A=`/assets/CM-1-CMus8uUl.png`,pe=`/assets/LSTMW-ZPe4EHLs.png`,me=`/assets/LSTMW2-CS5UGzEu.png`,he=`/assets/Overall-B5aYYn3Q.png`,ge=`/assets/Overall2-CTSQXJh_.png`,_e=`/assets/one-DVrHRgcL.png`,ve=`/assets/two-UXo4daD0.png`,ye=`/assets/three-BUPaq5X5.png`,be=`/assets/four-CtMR0H3I.png`,xe=`/assets/five-DYjjaTrs.png`,Se=`/assets/six-BP97twlT.png`,Ce=`/assets/seven-BIgceFm8.png`,we=`/assets/eight-Qb1yPrL0.png`,Te=`/assets/CF-ZG1EeQ7k.png`,Ee=`/assets/chatbot-DN-wTSSW.png`,De=`/assets/FM-CkIG2J0Q.png`,Oe=`/assets/GEA-DHnrifZF.png`,ke=`/assets/log-BPC79Z4K.png`,Ae=`/assets/TTS-BfGwX4_y.png`,je=`/assets/VTB-CVm9P5jQ.png`,Me=()=>{let[e,t]=(0,_.useState)(window.innerWidth<=768);return(0,_.useEffect)(()=>{let e=()=>t(window.innerWidth<=768);return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),e},Ne=[{id:1,title:`Global Edu Assist`,description:`A comprehensive MERN stack application designed to solve student-related problems during the process of abroad studies. Features include university recommendations, cost estimation, a progress-tracking system, a chat system, and document guidance.`,tech:[`MongoDB`,`Express.js`,`React`,`Node.js`],github:`https://github.com/Prazeen7/Global-Edu-Assist`,live:null,category:`fullstack`,images:[Oe]},{id:2,title:`Image Classification with CNN and Transfer Learning`,description:`Implemented image classification using Convolutional Neural Networks (CNN) and transfer learning techniques. Utilized pre-trained models like VGG for feature extraction and fine-tuned them for specific classification tasks.`,tech:[`Python`,`TensorFlow`,`CNN`,`VGG`,`Transfer Learning`],github:`https://www.kaggle.com/code/prajinsingh/logo-classification-using-cnn-from-scratch`,live:null,category:`ml`,images:[D,O,le,ue]},{id:3,title:`Text Classification using RNN, LSTM and LSTM with Word2Vec`,description:`Built text classification models using Recurrent Neural Networks (RNN), Long Short-Term Memory (LSTM) networks, and Word2Vec pre-trained models for hotel review sentiment analysis.`,tech:[`Python`,`RNN`,`LSTM`,`Word2Vec`,`NLP`],github:`https://www.kaggle.com/code/prajinsingh/hotel-review-text-classification-using-rnn`,live:null,category:`ml`,images:[de,fe,pe,me,he,ge,k,A]},{id:4,title:`Farm Mart`,description:`Developed a farmers market website following Agile methodology and Scrum practices. The platform connects farmers directly with consumers, featuring product listings, order management, payment integration, and delivery tracking.`,tech:[`HTML`,`CSS`,`JavaScript`,`MySQL`],github:`https://github.com/Prazeen7/Farm-Mart`,live:null,category:`web`,images:[De]},{id:5,title:`Learning Management System`,description:`Built a full-featured Learning Management System using Java with features including course management, student enrollment, assignment submission, grading system, and progress tracking.`,tech:[`Java`,`OOP`,`Database`,`Authentication`],github:`https://www.figma.com/proto/2mvOBc5gRZG7D27KxcHg4z/CMS?node-id=3639-1085&t=ZnlPrKhhcQTOSyC4-6&starting-point-node-id=3639%3A1085`,live:null,category:`web`,images:[_e,ve,ye,be,xe,Se,Ce,we]},{id:6,title:`AI Chatbot with RAG and LLaMA 3 Integration`,description:`Developed an AI chatbot using Retrieval-Augmented Generation (RAG) with a vector database to fetch relevant context, which was then fed into the LLaMA 3 model to generate accurate, context-aware responses.`,tech:[`Python`,`RAG`,`LLaMA 3`,`Vector DB`,`LangChain`],github:`https://github.com/Prazeen7/Chatbot`,live:null,category:`ai`,images:[Ee]},{id:7,title:`Text-to-Speech Translation Web Application`,description:`A Flask-based web application that translates text from English to a target language and generates text-to-speech (TTS) audio using a provided speaker voice. Uses Coqui TTS model (xtts_v2) for voice synthesis.`,tech:[`Flask`,`Python`,`Coqui TTS`,`xtts_v2`],github:`https://github.com/Prazeen7/Multilingual-Text-to-Speech`,live:null,category:`ai`,images:[Ae]},{id:8,title:`Company Finder`,description:`A Python web app that extracts key details from company websites, including emails, phone numbers, social links, business nature, and location. Uses Selenium, BeautifulSoup, Google Custom Search, and a Qwen model for analysis.`,tech:[`Python`,`Selenium`,`BeautifulSoup`,`Flask`,`Qwen`],github:`https://github.com/Prazeen7/Company-Finder`,live:null,category:`ai`,images:[Te]},{id:9,title:`Videos to Blog`,description:`Converts uploaded videos into blog posts by first transcribing the audio using OpenAI's Whisper model, then generating a natural, human-like blog article using the Qwen/Qwen2.5-7B-Instruct language model.`,tech:[`Python`,`Whisper`,`Qwen`,`Flask`,`AI`],github:`https://github.com/Prazeen7/Video-to-Blogs`,live:null,category:`ai`,images:[je]},{id:10,title:`Website Log Analysis & Insights Dashboard`,description:`Analysis website logs to extract meaningful insights and display them on an interactive dashboard. Processes log files to identify patterns, detect anomalies, and visualize key metrics for better decision-making.`,tech:[`Python`,`Log Analysis`,`Data Visualization`,`React`],github:`https://github.com/Prazeen7/Log-Feature`,live:null,category:`ds`,images:[ke]},{id:11,title:`Google Analytics Data Pipeline with Gzip Optimization`,description:`Engineered a high-performance data pipeline that collects website data via Google BigQuery, exports to Google Cloud Storage using scheduled CRON jobs, and optimizes delivery with gzip compression. Implemented worker-based parallel fetching for fast dashboard rendering in React.`,tech:[`Node.js`,`BigQuery`,`GCS`,`CRON`,`React`,`Gzip`],github:null,live:null,category:`ds`},{id:12,title:`Textile Design Classification Using Deep Learning`,description:`Collected and generated textile design datasets, performed extensive data cleaning and preprocessing, and trained a deep learning model to classify textile designs including Abstract, Border, Animals, Mirror, Tribal, Traditional, Geometry, and more.`,tech:[`Python`,`TensorFlow`,`CNN`,`Data Augmentation`,`Image Classification`],github:null,live:null,category:`ml`}],Pe=[`all`,`fullstack`,`web`,`ml`,`ai`,`ds`],Fe=5e3;function Ie(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(`all`),[i,a]=(0,_.useState)({}),[o,s]=(0,_.useState)(0),[c,l]=(0,_.useState)(3),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(!0),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(0),[y,x]=(0,_.useState)(!1),[S,C]=(0,_.useState)(!1),w=(0,_.useRef)(null),ee=(0,_.useRef)(!1),te=(0,_.useRef)(null),ne=(0,_.useRef)(!1),T=(0,_.useRef)(null),re=(0,_.useRef)(null),ie=Me(),E=(0,_.useMemo)(()=>n===`all`?Ne:Ne.filter(e=>e.category===n),[n]),ae=E.length,oe=Math.max(0,ae-c)+1,se=-(100/c*o);(0,_.useEffect)(()=>{s(0),v(0),x(!1),h(null)},[n]),(0,_.useEffect)(()=>{s(e=>Math.min(e,Math.max(0,ae-c)))},[c,ae]),(0,_.useEffect)(()=>{let e=()=>{window.innerWidth<640?l(1):window.innerWidth<1024?l(2):l(3)};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,_.useEffect)(()=>{let e=new IntersectionObserver(([n])=>{n.isIntersecting&&!ee.current&&(t(!0),ee.current=!0,e.disconnect())},{threshold:.08,rootMargin:`0px 0px -40px 0px`});return w.current&&e.observe(w.current),()=>e.disconnect()},[]),(0,_.useEffect)(()=>{if(!(!e||ae<=c||!f))return te.current=setInterval(()=>{ne.current||s(e=>e>=Math.max(0,ae-c)?0:e+1)},Fe),()=>clearInterval(te.current)},[e,c,ae,f]);let ce=(0,_.useCallback)(()=>{ne.current=!0},[]),D=(0,_.useCallback)(()=>{ne.current=!1},[]),O=(0,_.useCallback)(e=>{p(!1),clearInterval(te.current),s(t=>{let n=Math.max(0,ae-c);return e===`next`?t>=n?0:t+1:t<=0?n:t-1})},[ae,c]),le=(0,_.useCallback)(e=>{p(!1),clearInterval(te.current),s(e)},[]);(0,_.useEffect)(()=>{let e=e=>{e.key===`ArrowLeft`&&O(`prev`),e.key===`ArrowRight`&&O(`next`)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[O]);let ue=e=>{p(!1),clearInterval(te.current),d(e.touches[0].clientX)},de=e=>{if(u===null)return;let t=u-e.changedTouches[0].clientX;Math.abs(t)>50&&O(t>0?`next`:`prev`),d(null)},fe=e=>a(t=>({...t,[e]:!0})),k=Math.ceil(E.length/2),A=E.slice(0,k),pe=E.slice(k);(0,_.useEffect)(()=>{if(!ie&&e&&E.length>0&&!y&&!S)return T.current=setInterval(()=>{v(e=>(e+1)%E.length)},Fe),()=>clearInterval(T.current);T.current&&clearInterval(T.current)},[ie,e,E.length,y,S]);let me=(y||S)&&m?m:!y&&!S&&E[g]?E[g]:null,he=e=>{re.current&&=(clearTimeout(re.current),null),C(!1),x(!0),h(e)},ge=()=>{x(!1),C(!0),re.current=setTimeout(()=>{h(null),C(!1)},400)};return(0,_.useEffect)(()=>()=>{re.current&&clearTimeout(re.current)},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&display=swap');

        @keyframes dotPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }
        @keyframes techTagFadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .prj-header {
          text-align: center;
          margin-bottom: 64px;
          margin-top: 80px;
          padding: 0 16px;
          opacity: 0;
          transform: translateY(36px);
          transition:
            opacity 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .prj-animate .prj-header {
          opacity: 1;
          transform: translateY(0);
        }

        .prj-filters-wrap {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s,
            transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s;
        }
        .prj-animate .prj-filters-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        .prj-carousel-wrap {
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.28s,
            transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.28s;
        }
        .prj-animate .prj-carousel-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        /* ─── Card – fully transparent ───────────────────────── */
        .work-card {
          background: rgba(10, 10, 10, 0.4);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-sizing: border-box;
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
          opacity: 0;
          transform: translateY(28px) scale(0.97);
          transition:
            opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }
        .prj-animate .work-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .prj-animate .carousel-slide:nth-child(3n + 1) .work-card {
          transition-delay: 0.30s;
        }
        .prj-animate .carousel-slide:nth-child(3n + 2) .work-card {
          transition-delay: 0.44s;
        }
        .prj-animate .carousel-slide:nth-child(3n + 3) .work-card {
          transition-delay: 0.58s;
        }

        .prj-animate .work-card:hover {
          border-color: #E76F51;
          transform: translateY(-4px) scale(1);
          box-shadow: 
            0 12px 32px rgba(231, 111, 81, 0.15),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
        }

        .work-card-title {
          color: #e0e0e0;
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }

        /* ─── Image Slideshow Styles ───────────────────────── */
        .project-image-slideshow {
          width: 100%;
          margin-bottom: 20px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          aspect-ratio: 16 / 9;
        }

        .slideshow-images {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .slideshow-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0;
          transition: opacity 0.6s ease-in-out;
          border-radius: 12px;
        }

        .slideshow-image.active {
          opacity: 1;
          z-index: 1;
        }

        .slideshow-indicators {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 2;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 6px 12px;
          border-radius: 20px;
        }

        .slideshow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .slideshow-dot.active {
          background: #E76F51;
          width: 24px;
          border-radius: 4px;
        }

        .slideshow-dot:hover:not(.active) {
          background: rgba(255, 255, 255, 0.7);
          transform: scale(1.2);
        }

        body.light-mode .project-image-slideshow {
          background: rgba(0, 0, 0, 0.03);
        }

        body.light-mode .slideshow-indicators {
          background: rgba(255, 255, 255, 0.5);
        }

        body.light-mode .slideshow-dot {
          background: rgba(0, 0, 0, 0.3);
        }

        body.light-mode .slideshow-dot.active {
          background: #E76F51;
        }
        .work-card-desc {
          color: #b0b0b0;
          font-size: 14px;
          line-height: 1.65;
          margin: 0 0 20px 0;
          flex: 1;
        }
        .work-card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .work-tech-tag {
          background: #2a2a2a;
          color: #E76F51;
          border: 1px solid #3a3a3a;
          font-size: 11px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 20px;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .work-tech-tag:hover {
          background: #E76F51;
          color: #1a1a1a;
          transform: translateY(-1px);
        }
        .work-tech-tag.expandable {
          background: #E76F51;
          color: white;
          border-color: #E76F51;
        }
        .work-tech-tag.expandable:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(231, 111, 81, 0.3);
        }
        .tech-tag-new {
          animation: techTagFadeIn 0.3s ease forwards;
        }

        .work-card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #E76F51;
          text-decoration: none;
          border-bottom: 1.5px solid #3a3a3a;
          padding-bottom: 4px;
          transition: all 0.2s ease;
          width: fit-content;
        }
        .work-card-link:hover {
          gap: 12px;
          border-bottom-color: #E76F51;
        }
        .work-card-link svg {
          width: 13px;
          height: 13px;
          transition: transform 0.2s;
        }
        .work-card-link:hover svg {
          transform: translateX(3px);
        }

        .work-title {
          color: #e0e0e0;
        }
        .work-sub {
          color: #a0a0a0;
        }
        .work-badge {
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #E76F51;
          font-weight: 500;
          margin-bottom: 12px;
          display: inline-block;
        }
        .work-title {
          font-size: clamp(26px, 5vw, 48px);
          font-weight: 700;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
        }
        .work-sub {
          font-size: clamp(14px, 2.2vw, 18px);
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.5;
          font-weight: 400;
          transition: color 0.3s ease;
        }

        .work-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 48px;
        }
        .work-filter-btn {
          border: 1px solid #3a3a3a;
          color: #a0a0a0;
          background: transparent;
          padding: 8px 22px;
          font-size: clamp(12px, 1.5vw, 14px);
          font-weight: 400;
          font-family: "Jost", sans-serif;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }
        .work-filter-btn:hover {
          border-color: #E76F51;
          color: #E76F51;
          background: rgba(231, 111, 81, 0.08);
        }
        .work-filter-btn.active {
          border-color: #E76F51;
          background: rgba(231, 111, 81, 0.15);
          color: #E76F51;
          font-weight: 500;
        }

        .carousel-outer {
          position: relative;
          padding: 0 28px;
        }
        .carousel-viewport {
          overflow: hidden;
          border-radius: 20px;
          padding: 8px 0 12px;
        }
        .carousel-track {
          display: flex;
          transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        .carousel-slide {
          flex: 0 0 calc(100% / var(--cpv));
          padding: 0 12px;
          box-sizing: border-box;
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #3a3a3a;
          background: #1a1a1a;
          color: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }
        .carousel-arrow:hover {
          border-color: #E76F51;
          background: #E76F51;
          color: white;
          box-shadow: 0 6px 20px rgba(231, 111, 81, 0.35);
        }
        .carousel-arrow-prev {
          left: -20px;
        }
        .carousel-arrow-next {
          right: -20px;
        }
        .carousel-arrow svg {
          width: 18px;
          height: 18px;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
        }
        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #3a3a3a;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .carousel-dot.active {
          background: #E76F51;
          width: 24px;
          border-radius: 4px;
          animation: dotPulse 0.4s ease;
        }
        .carousel-dot:hover:not(.active) {
          background: #6a6a6a;
          transform: scale(1.2);
        }

        .carousel-counter {
          text-align: left;
          margin-top: 10px;
          font-size: 13px;
          color: #5a5a5a;
          letter-spacing: 0.05em;
          font-weight: 400;
        }
        .carousel-counter span {
          color: #E76F51;
          font-weight: 600;
        }

        .section-divider {
          height: 2px;
          background: linear-gradient(
            to right,
            transparent,
            #E76F51 20%,
            #E76F51 80%,
            transparent
          );
          box-shadow: 0 0 20px rgba(231, 111, 81, 0.5);
          margin: 60px 0;
          position: relative;
          z-index: 2;
        }

        body.light-mode .section-divider {
          box-shadow: 0 0 15px rgba(231, 111, 81, 0.4);
        }

        #projects {
          width: 100%;
          padding: 0 24px;
          position: relative;
          overflow: visible;
          background: transparent;
        }

        #projects > div {
          position: relative;
          z-index: 1;
        }

        .projects-content {
          max-width: 1250px;
          margin: 0 auto;
        }

        /* ─── Light Mode ─────────────────────────────────────── */
        body.light-mode .work-title {
          color: #1a1a1a;
        }
        body.light-mode .work-sub {
          color: #6c6c6c;
        }
        body.light-mode .work-card {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border-color: rgba(0, 0, 0, 0.15);
          box-shadow: 
            0 8px 32px 0 rgba(31, 38, 135, 0.10),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.5);
        }
        body.light-mode .prj-animate .work-card:hover {
          border-color: #E76F51;
          box-shadow: 
            0 8px 20px rgba(231, 111, 81, 0.1),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.8);
        }
        body.light-mode .work-card-title {
          color: #1a1a1a;
        }
        body.light-mode .work-card-desc {
          color: #5a5a5a;
        }
        body.light-mode .work-tech-tag {
          background: #f0f0f0;
          color: #E76F51;
          border-color: #e0e0e0;
        }
        body.light-mode .work-tech-tag:hover {
          background: #E76F51;
          color: white;
        }
        body.light-mode .work-tech-tag.expandable {
          background: #E76F51;
          color: white;
          border-color: #E76F51;
        }
        body.light-mode .work-card-link {
          color: #E76F51;
          border-bottom: 1.5px solid #e0e0e0;
        }
        body.light-mode .work-card-link:hover {
          border-bottom-color: #E76F51;
        }
        body.light-mode .work-filter-btn {
          border-color: #d0d0d0;
          color: #6c6c6c;
        }
        body.light-mode .work-filter-btn:hover {
          border-color: #E76F51;
          color: #E76F51;
          background: rgba(231, 111, 81, 0.08);
        }
        body.light-mode .work-filter-btn.active {
          border-color: #E76F51;
          background: rgba(231, 111, 81, 0.15);
          color: #E76F51;
        }
        body.light-mode .carousel-arrow {
          background: #ffffff;
          border-color: #d0d0d0;
          color: #1a1a1a;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }
        body.light-mode .carousel-arrow:hover {
          background: #E76F51;
          border-color: #E76F51;
          color: white;
        }
        body.light-mode .carousel-dot {
          background: #d0d0d0;
        }
        body.light-mode .carousel-dot.active {
          background: #E76F51;
        }
        body.light-mode .carousel-counter {
          color: #9a9a9a;
        }

        /* ─── Desktop Split Layout (> 768px) ───────────────────── */
        @media (min-width: 769px) {
          .desktop-layout {
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
            gap: 40px;
            align-items: start;
            min-height: 600px;
          }

          .project-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            position: sticky;
            top: 120px;
          }

          .project-list.left {
            align-items: flex-end;
            text-align: right;
          }

          .project-list.right {
            align-items: flex-start;
            text-align: left;
          }

          .project-name-item {
            padding: 12px 20px;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid transparent;
            background: transparent;
            max-width: 280px;
            width: 100%;
          }

          .project-name-item h4 {
            font-size: 16px;
            font-weight: 500;
            color: #b0b0b0;
            margin: 0;
            transition: all 0.3s ease;
            line-height: 1.4;
          }

          .project-name-item:hover h4 {
            color: #E76F51;
          }

          .project-name-item.active {
            background: rgba(231, 111, 81, 0.1);
            border-color: #E76F51;
          }

          .project-name-item.active h4 {
            color: #E76F51;
            font-weight: 600;
          }

          .center-card-display {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 500px;
            position: relative;
          }

          .center-placeholder {
            text-align: center;
            color: #5a5a5a;
            font-size: 15px;
            font-weight: 400;
            padding: 40px;
            border: 2px dashed #3a3a3a;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            animation: placeholderFadeIn 0.4s ease;
          }

          @keyframes placeholderFadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .center-card-wrapper {
            width: 100%;
            max-width: 500px;
            animation: cardPopIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .center-card-wrapper.fade-out {
            animation: cardFadeOut 0.4s cubic-bezier(0.4, 0, 0.6, 1) forwards;
          }

          @keyframes cardPopIn {
            0% {
              opacity: 0;
              transform: scale(0.7) translateY(30px) rotateX(20deg);
            }
            60% {
              transform: scale(1.05) translateY(-5px) rotateX(0deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0) rotateX(0deg);
            }
          }

          @keyframes cardFadeOut {
            0% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
            100% {
              opacity: 0;
              transform: scale(0.95) translateY(10px);
            }
          }

          .center-card-wrapper.pop-out {
            animation: cardPopOut 0.35s cubic-bezier(0.36, 0, 0.66, -0.56) forwards;
          }

          @keyframes cardPopOut {
            0% {
              opacity: 1;
              transform: scale(1) translateY(0) rotateX(0deg);
            }
            100% {
              opacity: 0;
              transform: scale(0.7) translateY(30px) rotateX(-20deg);
            }
          }

          .center-card-wrapper .work-card {
            margin: 0;
            height: auto;
            min-height: 400px;
            background: rgba(10, 10, 10, 0.5);
            backdrop-filter: blur(20px) saturate(200%);
            -webkit-backdrop-filter: blur(20px) saturate(200%);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 
              0 16px 48px rgba(0, 0, 0, 0.5),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.1),
              0 0 0 1px rgba(255, 255, 255, 0.05);
            transform: translateY(0) scale(1);
            opacity: 1;
          }

          body.light-mode .project-name-item h4 {
            color: #6c6c6c;
          }

          body.light-mode .project-name-item:hover h4 {
            color: #E76F51;
          }

          body.light-mode .project-name-item.active {
            background: rgba(231, 111, 81, 0.12);
            border-color: #E76F51;
          }

          body.light-mode .project-name-item.active h4 {
            color: #E76F51;
          }

          body.light-mode .center-placeholder {
            color: #9a9a9a;
            border-color: #d0d0d0;
            background: rgba(0, 0, 0, 0.02);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }

          body.light-mode .center-card-wrapper .work-card {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(20px) saturate(200%);
            -webkit-backdrop-filter: blur(20px) saturate(200%);
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 
              0 16px 48px rgba(31, 38, 135, 0.15),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.8),
              0 0 0 1px rgba(0, 0, 0, 0.05);
          }
        }

        @media (max-width: 768px) {
          .desktop-layout {
            display: none;
          }
        }

        @media (min-width: 769px) {
          .mobile-carousel {
            display: none;
          }
        }

        @media (max-width: 1024px) {
          #projects {
            padding: 0 20px;
          }
          .prj-header {
            margin-bottom: 48px;
          }
          .work-filters {
            margin-bottom: 36px;
          }
          .carousel-outer {
            padding: 0 22px;
          }
          .carousel-arrow-prev {
            left: -11px;
          }
          .carousel-arrow-next {
            right: -11px;
          }
          .prj-animate .carousel-slide:nth-child(2n + 1) .work-card {
            transition-delay: 0.30s;
          }
          .prj-animate .carousel-slide:nth-child(2n + 2) .work-card {
            transition-delay: 0.44s;
          }
        }

        @media (max-width: 768px) {
          #projects {
            padding: 0 16px;
          }
          .section-divider {
            margin: 40px 0;
          }
          .prj-header {
            margin-bottom: 40px;
          }
          .work-filters {
            gap: 8px;
            margin-bottom: 28px;
            flex-wrap: wrap;
          }
          .work-filter-btn {
            padding: 6px 14px;
            font-size: 12px;
          }
          .carousel-outer {
            padding: 0 20px;
          }
          .carousel-arrow {
            width: 36px;
            height: 36px;
          }
          .carousel-arrow-prev {
            left: -18px;
          }
          .carousel-arrow-next {
            right: -18px;
          }
          .carousel-slide {
            padding: 0 8px;
          }
          .work-card {
            padding: 20px;
          }
          .work-card-title {
            font-size: 16px;
          }
          .work-card-desc {
            font-size: 13px;
          }
          .prj-animate .carousel-slide .work-card {
            transition-delay: 0.30s;
          }
        }

        @media (max-width: 640px) {
          .carousel-arrow {
            display: none;
          }
          .carousel-outer {
            padding: 0;
          }
        }

        @media (max-width: 480px) {
          #projects {
            padding: 0 12px;
          }
          .section-divider {
            margin: 32px 0;
          }
          .prj-header {
            margin-bottom: 24px;
            padding: 0;
          }
          .work-filters {
            gap: 6px;
            margin-bottom: 20px;
          }
          .work-filter-btn {
            padding: 5px 10px;
            font-size: 11px;
            border-radius: 30px;
            letter-spacing: 0;
          }
          .carousel-slide {
            padding: 0 6px;
          }
          .work-card {
            padding: 16px 14px;
            border-radius: 16px;
          }
          .work-card-title {
            font-size: 15px;
          }
          .work-card-desc {
            font-size: 12.5px;
          }
          .work-tech-tag {
            font-size: 10px;
            padding: 4px 9px;
          }
          .carousel-dots {
            margin-top: 12px;
            gap: 6px;
          }
          .carousel-counter {
            font-size: 12px;
            margin-top: 8px;
          }
        }
      `}),(0,b.jsxs)(`div`,{id:`projects`,children:[(0,b.jsx)(`div`,{ref:w,className:e?`prj-animate`:``,children:(0,b.jsxs)(`div`,{className:`projects-content`,children:[(0,b.jsx)(`div`,{className:`prj-header`,children:(0,b.jsx)(`h2`,{className:`work-title`,children:`Featured Projects`})}),(0,b.jsx)(`div`,{className:`prj-filters-wrap`,children:(0,b.jsx)(`div`,{className:`work-filters`,children:Pe.map(e=>(0,b.jsx)(`button`,{className:`work-filter-btn ${n===e?`active`:``}`,onClick:()=>r(e),children:e===`all`?`All Work`:e===`fullstack`?`Full Stack`:e===`web`?`Web Apps`:e===`ml`?`ML / DL`:e===`ai`?`AI / LLM`:`Data Science`},e))})}),!ie&&(0,b.jsxs)(`div`,{className:`prj-carousel-wrap desktop-layout`,children:[(0,b.jsx)(`div`,{className:`project-list left`,children:A.map(e=>(0,b.jsx)(`div`,{className:`project-name-item ${me?.id===e.id?`active`:``}`,onMouseEnter:()=>he(e),onMouseLeave:ge,children:(0,b.jsx)(`h4`,{children:e.title})},e.id))}),(0,b.jsx)(`div`,{className:`center-card-display`,children:me?(0,b.jsx)(`div`,{className:`center-card-wrapper`,onMouseEnter:()=>{re.current&&=(clearTimeout(re.current),null),me&&h(me),C(!1),x(!0)},onMouseLeave:()=>{x(!1),C(!0),re.current=setTimeout(()=>{h(null),C(!1)},400)},children:(0,b.jsx)(Re,{project:me,expandedTech:i,toggleTechExpand:fe})},me.id):(0,b.jsx)(`div`,{className:`center-placeholder`,children:`Hover over a project name to preview`})}),(0,b.jsx)(`div`,{className:`project-list right`,children:pe.map(e=>(0,b.jsx)(`div`,{className:`project-name-item ${me?.id===e.id?`active`:``}`,onMouseEnter:()=>he(e),onMouseLeave:ge,children:(0,b.jsx)(`h4`,{children:e.title})},e.id))})]}),ie&&(0,b.jsxs)(`div`,{className:`prj-carousel-wrap mobile-carousel`,children:[(0,b.jsxs)(`div`,{className:`carousel-outer`,children:[(0,b.jsx)(`button`,{className:`carousel-arrow carousel-arrow-prev`,onClick:()=>O(`prev`),"aria-label":`Previous projects`,children:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,children:(0,b.jsx)(`path`,{d:`M15 18l-6-6 6-6`})})}),(0,b.jsx)(`div`,{className:`carousel-viewport`,onMouseEnter:ce,onMouseLeave:D,onTouchStart:ue,onTouchEnd:de,children:(0,b.jsx)(`div`,{className:`carousel-track`,style:{transform:`translateX(${se}%)`,"--cpv":c},children:E.map(e=>(0,b.jsx)(`div`,{className:`carousel-slide`,style:{"--cpv":c},children:(0,b.jsx)(Re,{project:e,expandedTech:i,toggleTechExpand:fe})},`${e.id}-${n}`))})}),(0,b.jsx)(`button`,{className:`carousel-arrow carousel-arrow-next`,onClick:()=>O(`next`),"aria-label":`Next projects`,children:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,children:(0,b.jsx)(`path`,{d:`M9 18l6-6-6-6`})})})]}),oe>1&&(0,b.jsx)(`div`,{className:`carousel-dots`,children:Array.from({length:oe}).map((e,t)=>(0,b.jsx)(`button`,{className:`carousel-dot${t===o?` active`:``}`,onClick:()=>le(t),"aria-label":`Go to slide ${t+1}`},t))}),(0,b.jsxs)(`p`,{className:`carousel-counter`,children:[(0,b.jsx)(`span`,{children:Math.min(o+c,ae)}),` `,`/ `,ae,` projects`]})]})]})}),(0,b.jsx)(`div`,{className:`section-divider`})]})]})}function Le({images:e}){let[t,n]=(0,_.useState)(0),r=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(e&&e.length>1)return r.current=setInterval(()=>{n(t=>(t+1)%e.length)},2500),()=>clearInterval(r.current)},[e]),!e||e.length===0?null:(0,b.jsxs)(`div`,{className:`project-image-slideshow`,children:[(0,b.jsx)(`div`,{className:`slideshow-images`,children:e.map((e,n)=>(0,b.jsx)(`img`,{src:e,alt:`Project screenshot ${n+1}`,className:`slideshow-image ${n===t?`active`:``}`},n))}),e.length>1&&(0,b.jsx)(`div`,{className:`slideshow-indicators`,children:e.map((e,r)=>(0,b.jsx)(`button`,{className:`slideshow-dot ${r===t?`active`:``}`,onClick:()=>n(r),"aria-label":`Go to image ${r+1}`},r))})]})}function Re({project:e,expandedTech:t,toggleTechExpand:n}){let r=t[e.id],i=r?e.tech:e.tech.slice(0,4),a=e.tech.length>4&&!r;return(0,b.jsxs)(`div`,{className:`work-card`,children:[e.images&&e.images.length>0&&(0,b.jsx)(Le,{images:e.images}),(0,b.jsx)(`h3`,{className:`work-card-title`,children:e.title}),(0,b.jsx)(`p`,{className:`work-card-desc`,children:e.description}),(0,b.jsxs)(`div`,{className:`work-card-tech`,children:[i.map((e,t)=>(0,b.jsx)(`span`,{className:`work-tech-tag${r&&t>=4?` tech-tag-new`:``}`,children:e},e)),a&&(0,b.jsxs)(`span`,{className:`work-tech-tag expandable`,onClick:()=>n(e.id),children:[`+`,e.tech.length-4]})]}),e.github?(0,b.jsxs)(`a`,{href:e.github,target:`_blank`,rel:`noopener noreferrer`,className:`work-card-link`,children:[`View Project`,(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,b.jsx)(`path`,{d:`M7 17L17 7M17 7H7M17 7V17`,stroke:`currentColor`,strokeLinecap:`round`})})]}):(0,b.jsxs)(`span`,{className:`work-card-link`,style:{opacity:.6,cursor:`default`},children:[`Private Repository`,(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,b.jsx)(`path`,{d:`M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z`,stroke:`currentColor`,strokeLinecap:`round`})})]})]})}var ze=[{label:`Home`,href:`#home`},{label:`Projects`,href:`#projects`},{label:`Experience`,href:`#work`},{label:`Contact`,href:`#contact`}],Be=[{label:`GitHub`,href:`https://github.com/Prazeen7`,icon:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,b.jsx)(`path`,{d:`M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z`})})},{label:`LinkedIn`,href:`https://np.linkedin.com/in/prajinsingh`,icon:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,b.jsx)(`path`,{d:`M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z`})})},{label:`Instagram`,href:`https://www.instagram.com/przns7/`,icon:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,b.jsx)(`path`,{d:`M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z`})})},{label:`Email`,href:`mailto:prajin.singh9@gmail.com`,icon:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,b.jsx)(`path`,{d:`M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z`})})}];function Ve(){let[e,t]=(0,_.useState)(!1),n=(0,_.useRef)(null),r=(0,_.useRef)(!1);(0,_.useEffect)(()=>{let e=new IntersectionObserver(([n])=>{n.isIntersecting&&!r.current&&(t(!0),r.current=!0,e.disconnect())},{threshold:.1});return n.current&&e.observe(n.current),()=>e.disconnect()},[]);let i=new Date().getFullYear();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&display=swap');

        /* ─── Footer shell ─────────────────────────────────── */
        .ft-root {
          width: 100%;
          font-family: 'Jost', sans-serif;
          border-top: 1px solid #2a2a2a;
          padding: 64px 64px 32px;
          transition: border-color 0.3s ease, background-color 0.3s ease;
        }
        
        .ft-content {
          max-width: 1250px;
          margin: 0 auto;
        }
        
        body.light-mode .ft-root { border-top-color: #e0e0e0; }

        /* ─── Scroll-in — each row slides up from below ─────── */
        /*  Default: invisible, shifted down.                     */
        /*  .ft-animate adds class-driven transitions in waves.   */
        .ft-top,
        .ft-divider,
        .ft-bottom {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity   0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .ft-animate .ft-top      { opacity:1; transform:translateY(0); transition-delay: 0.05s; }
        .ft-animate .ft-divider  { opacity:1; transform:translateY(0); transition-delay: 0.20s; }
        .ft-animate .ft-bottom   { opacity:1; transform:translateY(0); transition-delay: 0.35s; }

        /* ─── Top row ──────────────────────────────────────── */
        .ft-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 48px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        /* Brand column */
        .ft-brand {}
        .ft-logo {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #e0e0e0;
          margin: 0 0 12px 0;
          transition: color 0.3s ease;
        }
        .ft-logo span { color: #E76F51; }
        .ft-tagline {
          font-size: 14px;
          color: #6a6a6a;
          line-height: 1.6;
          max-width: 260px;
          margin: 0 0 20px 0;
          transition: color 0.3s ease;
        }

        /* Social icons */
        .ft-socials {
          display: flex;
          gap: 10px;
        }
        .ft-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #3a3a3a;
          background: transparent;
          color: #8a8a8a;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.22s ease;
        }
        .ft-social-btn svg { width: 14px; height: 14px; }
        .ft-social-btn:hover {
          border-color: #E76F51;
          color: #E76F51;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(231,111,81,0.2);
        }

        /* Nav column */
        .ft-nav-col {}
        .ft-col-heading {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #E76F51;
          margin: 0 0 18px 0;
        }
        .ft-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ft-nav-link {
          font-size: 14px;
          font-weight: 400;
          color: #8a8a8a;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease, gap 0.2s ease;
        }
        .ft-nav-link::before {
          content: "→";
          font-size: 11px;
          color: #E76F51;
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          transform: translateX(-6px);
        }
        .ft-nav-link:hover {
          color: #e0e0e0;
          gap: 10px;
        }
        .ft-nav-link:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        /* CV Download column */
        .ft-cv-col {}
        .ft-cv-col .ft-col-heading { margin-bottom: 20px; }

        @keyframes ft-cv-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(231,111,81,0.45); }
          50%       { box-shadow: 0 0 0 7px rgba(231,111,81,0); }
        }

        .ft-cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          color: #E76F51;
          border: 1.5px solid #E76F51;
          border-radius: 5px;
          padding: 10px 20px;
          background: transparent;
          cursor: pointer;
          transition: background 0.22s ease, color 0.22s ease, transform 0.18s ease, box-shadow 0.22s ease;
          animation: ft-cv-pulse 2.4s ease-in-out infinite;
          white-space: nowrap;
        }
        .ft-cv-btn svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          transition: transform 0.22s ease;
        }
        .ft-cv-btn:hover {
          background: #E76F51;
          color: #fff;
          transform: translateY(-2px);
          animation: none;
          box-shadow: 0 6px 18px rgba(231,111,81,0.35);
        }
        .ft-cv-btn:hover svg { transform: translateY(2px); }
        .ft-cv-btn:active   { transform: translateY(0); }

        /* ─── Divider ─────────────────────────────────────── */
        .ft-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #2a2a2a, transparent);
          margin-bottom: 24px;
        }

        /* ─── Bottom row ──────────────────────────────────── */
        .ft-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .ft-copy {
          font-size: 13px;
          color: #5a5a5a;
          transition: color 0.3s ease;
        }
        .ft-copy span { color: #E76F51; }
        .ft-made-with {
          font-size: 12px;
          color: #4a4a4a;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.3s ease;
        }
        .ft-heart {
          color: #E76F51;
          display: inline-block;
          animation: ft-heartbeat 1.4s ease infinite;
        }
        @keyframes ft-heartbeat {
          0%,100% { transform: scale(1); }
          14%     { transform: scale(1.2); }
          28%     { transform: scale(1); }
          42%     { transform: scale(1.15); }
          56%     { transform: scale(1); }
        }

        /* ─── Light mode overrides ────────────────────────── */
        body.light-mode .ft-logo     { color: #1a1a1a; }
        body.light-mode .ft-tagline  { color: #7a7a7a; }
        body.light-mode .ft-social-btn { border-color: #d0d0d0; color: #8a8a8a; }
        body.light-mode .ft-social-btn:hover { border-color: #E76F51; color: #E76F51; }
        body.light-mode .ft-nav-link  { color: #7a7a7a; }
        body.light-mode .ft-nav-link:hover { color: #1a1a1a; }
        body.light-mode .ft-divider   { background: linear-gradient(to right, transparent, #d0d0d0, transparent); }
        body.light-mode .ft-copy      { color: #8a8a8a; }
        body.light-mode .ft-made-with { color: #9a9a9a; }
        body.light-mode .ft-cv-btn { border-color: #E76F51; }

        /* ─── Responsive ──────────────────────────────────── */
        @media (max-width: 768px) {
          .ft-root { padding: 48px 24px 24px; }
          .ft-top  { flex-direction: column; gap: 36px; }
          .ft-bottom { flex-direction: column; align-items: flex-start; gap: 8px; }
        }
      `}),(0,b.jsx)(`footer`,{ref:n,className:`ft-root${e?` ft-animate`:``}`,id:`footer`,children:(0,b.jsxs)(`div`,{className:`ft-content`,children:[(0,b.jsxs)(`div`,{className:`ft-top`,children:[(0,b.jsxs)(`div`,{className:`ft-brand`,children:[(0,b.jsxs)(`h2`,{className:`ft-logo`,children:[`Prajin`,(0,b.jsx)(`span`,{children:`.`})]}),(0,b.jsx)(`p`,{className:`ft-tagline`,children:`I specialize in building web applications, deploying and training machine learning models, and turning complex data into clear, actionable insights. With expertise in modern frameworks and both ML and DL technologies, I bring ideas to life through clean, impactful code.`}),(0,b.jsx)(`div`,{className:`ft-socials`,children:Be.map(e=>(0,b.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noopener noreferrer`,className:`ft-social-btn`,"aria-label":e.label,children:e.icon},e.label))})]}),(0,b.jsxs)(`div`,{className:`ft-nav-col`,children:[(0,b.jsx)(`p`,{className:`ft-col-heading`,children:`Navigation`}),(0,b.jsx)(`ul`,{className:`ft-nav-list`,children:ze.map(e=>(0,b.jsx)(`li`,{children:(0,b.jsx)(`a`,{href:e.href,className:`ft-nav-link`,children:e.label})},e.label))})]}),(0,b.jsxs)(`div`,{className:`ft-cv-col`,children:[(0,b.jsx)(`p`,{className:`ft-col-heading`,children:`Resume`}),(0,b.jsxs)(`a`,{href:v,download:`Prajin_Singh_Resume.pdf`,className:`ft-cv-btn`,"aria-label":`Download CV`,children:[(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,b.jsx)(`path`,{d:`M12 3v13M7 11l5 5 5-5`}),(0,b.jsx)(`path`,{d:`M5 20h14`})]}),`Download CV`]})]})]}),(0,b.jsx)(`div`,{className:`ft-divider`}),(0,b.jsx)(`div`,{className:`ft-bottom`,children:(0,b.jsxs)(`p`,{className:`ft-copy`,children:[`© `,i,` `,(0,b.jsx)(`span`,{children:`Prajin Singh`}),`. All rights reserved.`]})})]})})]})}function He({opacity:e=.35}){let t=(0,_.useRef)(null),n=(0,_.useRef)(null);return(0,_.useEffect)(()=>{let r=t.current,i=r.getContext(`2d`),a,o,s=[],c=[],l=()=>({x:Math.random()*a,y:Math.random()*o,size:.8+Math.random()*1.8,twinkleSpeed:.008+Math.random()*.02,phase:Math.random()*Math.PI*2,baseAlpha:.6+Math.random()*.4}),u=(e,t)=>({x:e/3*a,y:t/2*o,angle:Math.random()*Math.PI*2,speed:2+Math.random()*3.5,trail:[],trailLength:60+Math.floor(Math.random()*40),maxOpacity:.8+Math.random()*.2}),d=()=>{let e=r.parentElement;a=e.clientWidth,o=e.clientHeight,r.width=a,r.height=o},f=()=>{c.length=0;for(let e=0;e<20;e++)c.push(l());s.length=0;for(let e=0;e<3;e++)for(let t=0;t<4;t++)s.push(u(t,e))},p=()=>{i.clearRect(0,0,a,o),i.globalAlpha=e,c.forEach(t=>{t.phase+=t.twinkleSpeed,i.globalAlpha=e*(t.baseAlpha*(.7+.3*Math.sin(t.phase))),i.fillStyle=`#e86f51`,i.beginPath(),i.arc(t.x,t.y,t.size,0,Math.PI*2),i.fill()}),s.forEach(t=>{if(t.x+=Math.cos(t.angle)*t.speed,t.y+=Math.sin(t.angle)*t.speed,t.trail.push({x:t.x,y:t.y}),t.trail.length>t.trailLength&&t.trail.shift(),t.x>a+100||t.x<-100||t.y>o+100||t.y<-100){let e=u(Math.floor(Math.random()*4),Math.floor(Math.random()*3));Object.assign(t,e),t.trail=[];return}let n=t.trail.length;if(n>2)for(let r=0;r<n-1;r++){let a=r/n,o=a*t.maxOpacity,s=(1-a)*3+1;i.globalAlpha=e*o,i.strokeStyle=`hsla(14, 100%, ${70+20*(1-a)}%, ${o})`,i.lineWidth=s,i.beginPath(),i.moveTo(t.trail[r].x,t.trail[r].y),i.lineTo(t.trail[r+1].x,t.trail[r+1].y),i.stroke()}if(n>0){let r=t.trail[n-1];i.globalAlpha=e*t.maxOpacity,i.fillStyle=`hsla(14, 100%, 95%, 1)`,i.beginPath(),i.arc(r.x,r.y,3,0,Math.PI*2),i.fill();let a=i.createRadialGradient(r.x,r.y,0,r.x,r.y,30);a.addColorStop(0,`rgba(232, 111, 81, ${.5*t.maxOpacity})`),a.addColorStop(.5,`rgba(232, 111, 81, ${.2*t.maxOpacity})`),a.addColorStop(1,`rgba(232, 111, 81, 0)`),i.fillStyle=a,i.beginPath(),i.arc(r.x,r.y,30,0,Math.PI*2),i.fill()}}),i.globalAlpha=1,n.current=requestAnimationFrame(p)};return d(),f(),p(),window.addEventListener(`resize`,()=>{d(),f()}),()=>{n.current&&cancelAnimationFrame(n.current),window.removeEventListener(`resize`,d)}},[e]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`style`,{children:`
        .animated-bg-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .bg-canvas-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .bg-canvas {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          mix-blend-mode: screen;
          transition: opacity 0.3s ease;
        }

        body.light-mode .bg-canvas {
          mix-blend-mode: multiply;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .bg-canvas {
            opacity: 0.9;
          }
        }

        @media (max-width: 480px) {
          .bg-canvas {
            opacity: 0.85;
          }
        }
      `}),(0,b.jsx)(`div`,{className:`animated-bg-container`,children:(0,b.jsx)(`div`,{className:`bg-canvas-wrapper`,children:(0,b.jsx)(`canvas`,{ref:t,className:`bg-canvas`})})})]})}function Ue(){let[e,t]=(0,_.useState)(!0),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(`dark`),[o,s]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=localStorage.getItem(`theme`);e||=`dark`,a(e),s(!0),e===`dark`?(document.body.classList.add(`dark-mode`),document.body.classList.remove(`light-mode`)):(document.body.classList.add(`light-mode`),document.body.classList.remove(`dark-mode`))},[]),(0,_.useEffect)(()=>{let e=e=>{if(e.key===`theme`){let t=e.newValue||`dark`;a(t),t===`dark`?(document.body.classList.add(`dark-mode`),document.body.classList.remove(`light-mode`)):(document.body.classList.add(`light-mode`),document.body.classList.remove(`dark-mode`))}};return window.addEventListener(`storage`,e),()=>window.removeEventListener(`storage`,e)},[]),(0,_.useEffect)(()=>{if(!o)return;let e=Date.now();(async()=>{let n=Date.now()-e,i=Math.max(0,2500-n);setTimeout(()=>{t(!1),setTimeout(()=>{r(!0)},50)},i)})()},[o]),(0,_.useEffect)(()=>(e?document.body.style.overflow=`hidden`:document.body.style.overflow=`auto`,()=>{document.body.style.overflow=`auto`}),[e]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`style`,{children:`
        .unified-bg-wrapper {
          position: relative;
          width: 100%;
          background: var(--bg);
          transition: background-color 0.3s ease;
        }
        
        body.dark-mode .unified-bg-wrapper {
          background: #1a1a1a;
        }
        
        body.light-mode .unified-bg-wrapper {
          background: #ffffff;
        }
        
        /* Enhanced divider at top of unified wrapper */
        .section-divider-top {
          height: 2px;
          background: linear-gradient(to right, transparent, #E76F51 20%, #E76F51 80%, transparent);
          box-shadow: 0 0 20px rgba(231, 111, 81, 0.5);
          margin: 0;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        
        body.light-mode .section-divider-top {
          box-shadow: 0 0 15px rgba(231, 111, 81, 0.4);
        }
        
        /* Ensure Home takes full viewport */
        .home-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
      `}),e&&(0,b.jsx)(ce,{onLoadingComplete:()=>t(!1),theme:i,isThemeLoaded:o}),n&&(0,b.jsxs)(`div`,{className:`App`,children:[(0,b.jsx)(S,{theme:i,toggleTheme:()=>{let e=i===`dark`?`light`:`dark`;a(e),localStorage.setItem(`theme`,e),e===`dark`?(document.body.classList.add(`dark-mode`),document.body.classList.remove(`light-mode`)):(document.body.classList.add(`light-mode`),document.body.classList.remove(`dark-mode`))}}),(0,b.jsx)(`div`,{className:`home-wrapper`,children:(0,b.jsx)(ie,{theme:i})}),(0,b.jsxs)(`div`,{className:`unified-bg-wrapper`,children:[(0,b.jsx)(`div`,{className:`section-divider-top`}),(0,b.jsx)(He,{opacity:.6}),(0,b.jsx)(Ie,{theme:i}),(0,b.jsx)(ae,{theme:i}),(0,b.jsx)(oe,{theme:i})]}),(0,b.jsx)(Ve,{theme:i})]})]})}(0,g.createRoot)(document.getElementById(`root`)).render((0,b.jsx)(_.StrictMode,{children:(0,b.jsx)(Ue,{})}));