(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[85781],{881808:(t,e,r)=>{"use strict";r.d(e,{eD:()=>n,AM:()=>o,ok:()=>i,Gg:()=>u,nT:()=>c,TL:()=>a,KS:()=>f,EB:()=>p,DZ:()=>l,Aw:()=>y,V_:()=>s,H0:()=>b,jW:()=>d,JZ:()=>v,fQ:()=>O,HK:()=>m,YO:()=>E,I6:()=>g});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",i="MAP_CONFIG_LOADED",u="MAP_CONFIG_LOAD_ERROR",c="MAP_LOAD_INFO",a="MAP_INFO_LOAD_START",f="MAP_INFO_LOADED",p="MAP_INFO_LOAD_ERROR",l="MAP:MAP_SAVE_ERROR",y="MAP:MAP_SAVED",s="MAP:RESET_MAP_SAVE_ERROR";function b(t,e,r){return{type:i,config:t,legacy:!!e,mapId:e,zoomToExtent:r}}function d(t,e){return{type:u,error:t,mapId:e}}function v(t,e,r,n,i){return{type:o,configName:t,mapId:e,config:r,mapInfo:n,overrideConfig:i}}function O(t,e){return{type:f,mapId:e,info:t}}function m(t,e){return{type:p,mapId:t,error:e}}function E(t){return{type:a,mapId:t}}function g(t){return{type:c,mapId:t}}},580416:(t,e,r)=>{"use strict";r.d(e,{yS:()=>n,Zz:()=>o,ms:()=>i,ih:()=>u,OX:()=>a,sb:()=>f,K$:()=>p,k7:()=>l,cX:()=>y,x9:()=>s,vs:()=>b,oE:()=>d,Po:()=>v,qv:()=>O,cI:()=>m,g6:()=>E,I4:()=>g,l$:()=>A,Xv:()=>S,k3:()=>P,CQ:()=>h,R8:()=>R,HN:()=>_,sH:()=>w,c7:()=>L,_7:()=>D,eF:()=>j,O6:()=>T,ED:()=>I,RP:()=>M,sF:()=>k,VP:()=>N,He:()=>C,vO:()=>Y,WO:()=>x,bh:()=>F,pV:()=>G,MK:()=>H,ZF:()=>U,tV:()=>V,Dv:()=>B,Yz:()=>W,kI:()=>z,XG:()=>X,A4:()=>Z,Rp:()=>$,$o:()=>J,ct:()=>K,oh:()=>q,$h:()=>Q,ud:()=>tt,Qr:()=>et,LR:()=>rt,nN:()=>nt,UG:()=>ot,F5:()=>it,c9:()=>ut,Jh:()=>ct,Xy:()=>at});var n="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",u="TOGGLE_NODE",c="CONTEXT_NODE",a="SORT_NODE",f="REMOVE_NODE",p="UPDATE_NODE",l="MOVE_NODE",y="LAYER_LOADING",s="LAYER_LOAD",b="LAYER_ERROR",d="ADD_LAYER",v="ADD_GROUP",O="REMOVE_LAYER",m="SHOW_SETTINGS",E="HIDE_SETTINGS",g="UPDATE_SETTINGS",A="REFRESH_LAYERS",S="LAYERS:UPDATE_LAYERS_DIMENSION",P="LAYERS_REFRESHED",h="LAYERS_REFRESH_ERROR",R="LAYERS:BROWSE_DATA",_="LAYERS:DOWNLOAD",w="LAYERS:CLEAR_LAYERS",L="LAYERS:SELECT_NODE",D="LAYERS:FILTER_LAYERS",j="LAYERS:SHOW_LAYER_METADATA",T="LAYERS:HIDE_LAYER_METADATA",I="LAYERS:UPDATE_SETTINGS_PARAMS";function M(t,e,r){return{type:m,node:t,nodeType:e,options:r}}function k(){return{type:E}}function N(t){return{type:g,options:t}}function C(t,e){return{type:n,newProperties:e,layer:t}}function Y(t,e){return{type:o,layer:t,params:e}}function x(t,e){return{type:i,newProperties:e,group:t}}function F(t,e,r){return{type:u,node:t,nodeType:e,status:!r}}function G(t){return{type:c,node:t}}function H(t,e){return{type:a,node:t,order:e,sortLayers:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}function U(t,e){return{type:f,node:t,nodeType:e,removeEmpty:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}function V(t,e,r){return{type:p,node:t,nodeType:e,options:r}}function B(t,e,r){return{type:l,node:t,groupId:e,index:r}}function W(t){return{type:y,layerId:t}}function z(t,e){return{type:s,layerId:t,error:e}}function X(t,e,r){return{type:b,layerId:t,tilesCount:e,tilesErrorCount:r}}function Z(t){return{type:d,layer:t,foreground:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function $(t,e,r){return{type:v,group:t,parent:e,options:r}}function J(t){return{type:O,layerId:t}}function K(t,e){return{type:n,layer:t,newProperties:{_v_:e||(new Date).getTime()}}}function q(t){return{type:P,layers:t}}function Q(t,e){return{type:h,layers:t,error:e}}function tt(t,e,r,n){return{type:S,dimension:t,value:e,options:r,layers:n}}function et(t){return{type:R,layer:t}}function rt(t){return{type:_,layer:t}}function nt(){return{type:w}}function ot(t,e,r){return{type:L,id:t,nodeType:e,ctrlKey:r}}function it(t){return{type:D,text:t}}function ut(t,e){return{type:j,metadataRecord:t,maskLoading:e}}function ct(){return{type:T}}function at(t,e){return{type:I,newParams:t,update:e}}},879504:(t,e,r)=>{"use strict";r.d(e,{Z:()=>A});var n=r(49977),o=r.n(n),i=r(91175),u=r.n(i),c=r(53001),a=r(782904),f=r(881808),p=r(931273),l=r(580416),y=r(675110),s=r(31935),b=r(680833),d=r(624262);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function O(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){var n,o,i;n=t,o=e,i=r[e],(o=function(t){var e=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===v(e)?e:String(e)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const A={accessMetadataExplorer:function(t){return t.ofType(c.xT).switchMap((function(){return o().Observable.of((0,a.Xg)("metadataexplorer","enabled",!0),(0,c.vw)(!1),(0,p.Dw)("default_map_backgrounds"))}))},addBackgroundPropertiesEpic:function(t){return t.ofType(c.oQ).switchMap((function(t){var e=t.modalParams,r=o().Observable.of((0,c.$c)(g(g({},e),{},{loading:!1})));return e.layer&&"wms"===e.layer.type?o().Observable.of((0,c.$c)(g(g({},e),{},{loading:!0}))).concat((0,b.kB)(e.layer).switchMap((function(t){return o().Observable.of((0,c.$c)(g(g({},e),{},{loading:!1,capabilities:(0,d.IA)(t)})))})).catch((function(){return r}))):r}))},backgroundsListInit:function(t){return t.ofType(f.ok).switchMap((function(t){var e,r=t.config,n=r.map&&r.map.backgrounds||[],i=(r.map&&r.map.layers||[]).filter((function(t){return"background"===t.group})),a=n.filter((function(t){return!!t.thumbnail})).map((function(t){return(0,l.He)(t.id,{thumbURL:function(t){for(var e=atob(t.split(",")[1]),r=t.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(e.length),o=new Uint8Array(n),i=0;i<e.length;++i)o[i]=e.charCodeAt(i);return URL.createObjectURL(new Blob([n],{type:r}))}(t.thumbnail)})})),f=u()(i.filter((function(t){return t.visibility})));return(e=o().Observable).of.apply(e,O(a.concat((0,c.M3)(n))).concat(O(f?[(0,c.ke)(f.id)]:[])))}))},setCurrentBackgroundLayerEpic:function(t,e){return t.ofType(c.Wv).switchMap((function(t){var r,n=t.layerId,i=e.getState(),u=(0,y.CA)(i,n);return(r=o().Observable).of.apply(r,O(u&&"background"===u.group?[(0,a.Xg)("backgroundSelector","tempLayer",u),(0,a.Xg)("backgroundSelector","currentLayer",u)]:[]))}))},backgroundAddedEpic:function(t,e){return t.ofType(c.gC).mergeMap((function(t){var r=t.layerId,n=e.getState(),i=(0,y.CA)(n,r);return i?o().Observable.of((0,l.He)(i.id,{visibility:!0}),(0,c.ke)(i.id),(0,c.V3)()):o().Observable.empty()}))},backgroundEditedEpic:function(t,e){return t.ofType(c.dG).mergeMap((function(t){var r=t.layerId,n=e.getState();return(0,y.CA)(n,r)?o().Observable.of((0,c.V3)()):o().Observable.empty()}))},backgroundRemovedEpic:function(t,e){return t.ofType(c.H_).mergeMap((function(t){var r=t.backgroundId,n=e.getState(),i=(0,y.CA)(n,r),a=(0,s.TP)(n)||[],f=(0,y.DP)(n)||{},p=r===f.id?u()(a.filter((function(t){return t.id!==r&&!t.invalid}))):f;return i?o().Observable.of((0,l.ZF)(r,"layers"),(0,l.He)(p.id,{visibility:!0}),(0,c.ke)(p.id)):o().Observable.empty()}))},syncSelectedBackgroundEpic:function(t){return t.ofType(c.K2).take(1).switchMap((function(e){var r=e.id;return t.ofType(l.oE).filter((function(t){return t.layer.id===r})).switchMap((function(){return o().Observable.of((0,c.pW)(r))})).takeUntil(t.ofType(c.gC))}))}}},680833:(t,e,r)=>{"use strict";r.d(e,{kB:()=>v,HI:()=>O});var n=r(472500),o=r.n(n),i=(r(91175),r(490173)),u=r(49977),c=r(501157),a=r(375875),f=r.n(a),p=(r(986267),r(624262)),l=r(510284),y=r(233044);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){var n,o,i;n=t,o=e,i=r[e],(o=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}i.default;var v=function(t){return u.Observable.defer((function(){return c.ZP.getCapabilities((0,p.Fh)(t))})).let(l.oB).map((function(e){return c.ZP.parseLayerCapabilities(e,t)}))},O=function(t){return function(t){return u.Observable.defer((function(){return f().get(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.name,r=t.search,n=void 0===r?{}:r,i=t.url,u=o().parse(n.url||i,!0);return o().format(d(d({},u),{},{search:void 0,query:d(d({},u.query),{},{service:"WMS",version:"1.1.1",layers:e,outputFormat:"application/json",request:"DescribeLayer"})}))}(t))})).let(l.oB)}(t).map((function(t){var e=t.data,r=void 0===e?{}:e;return r&&r.layerDescriptions[0]})).map((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).owsURL;return d(d({},t),{},{params:{},search:e?{type:"wfs",url:(0,y.cleanAuthParamsFromURL)(e)}:void 0})}))}},55105:(t,e,r)=>{"use strict";r.d(e,{Ss:()=>b,Nr:()=>d,ic:()=>O,Jz:()=>m,VM:()=>E,CF:()=>g,Ju:()=>A});var n=r(91175),o=r.n(n),i=r(288306),u=r.n(i),c=r(800827),a=r(552259),f=r(737275);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=function(t){return t.maplayout&&t.maplayout.layout||{}},d=function(t){return t.maplayout&&t.maplayout.boundingMapRect||{}},v=function(t){return t.maplayout&&t.maplayout.boundingSidebarRect||{}},O=u()((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=b(t),o=v(t);return n&&Object.keys(n).filter((function(t){return e[t]})).reduce((function(t,e){var i;return y(y({},t),{},s({},e,r&&null!==(i=o[e])&&void 0!==i?i:n[e]))}),{})||{}}),(function(t,e,r){return JSON.stringify(b(t))+JSON.stringify(v(t))+JSON.stringify(e)+(r?"_isDock":"")})),m=function(t){var e;return!(null===(e=b(t))||void 0===e||!e.rightPanel)},E=function(t){var e,r=f.ZP.getConfigProp("mapLayout")||a.DEFAULT_MAP_LAYOUT;return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=b(t);return!!o()(e.filter((function(t){return r[t.key]})).map((function(t){return"not"===t.type?r[t.key]!==t.value&&r[t.key]:r[t.key]===t.value})))}(t,[{key:"bottom",value:null!==(e=null==r?void 0:r.bottom.sm)&&void 0!==e?e:0,type:"not"}])},g=function(t){var e=(0,c.Od)(t),r=d(t);return r&&e&&e.size&&{left:(0,a.parseLayoutValue)(r.left,e.size.width),bottom:(0,a.parseLayoutValue)(r.bottom,e.size.height),right:(0,a.parseLayoutValue)(r.right,e.size.width),top:(0,a.parseLayoutValue)(r.top,e.size.height)}},A=function(t){var e,r;return null!==(e=null==t||null===(r=t.maplayout)||void 0===r?void 0:r.dockPanels)&&void 0!==e?e:{left:[],right:[]}}},510284:(t,e,r)=>{"use strict";r.d(e,{sw:()=>v,oB:()=>O});var n=r(49977),o=r.n(n),i=r(227361),u=r.n(i),c=r(505055),a=r(507526);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t){var e="function"==typeof Map?new Map:void 0;return p=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return l(t,arguments,b(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,t)},p(t)}function l(t,e,r){return l=y()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&s(o,r.prototype),o},l.apply(null,arguments)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}r(849843);var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}(i,t);var e,r,n,o=(r=i,n=y(),function(){var t,e=b(r);if(n){var o=b(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function i(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,t)).name="OGCError",r.code=e,r}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(p(Error)),v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[a.stripPrefix],explicitArray:!1,mergeAttrs:!0};return o().Observable.bindNodeCallback((function(t,r){return(0,c.parseString)(t,e,r)}))(t)},O=function(t){return t.switchMap((function(t){return"string"==typeof t.data&&t.data.indexOf("ExceptionReport")>0?o().Observable.bindNodeCallback((function(t,e){return(0,c.parseString)(t,{tagNameProcessors:[a.stripPrefix],explicitArray:!1,mergeAttrs:!0},e)}))(t.data).map((function(t){var e=u()(t,"ExceptionReport.Exception.ExceptionText");throw new d(e||"Undefined OGC Service Error",u()(t,"ExceptionReport.Exception.exceptionCode"))})):o().Observable.of(t)}))}}}]);