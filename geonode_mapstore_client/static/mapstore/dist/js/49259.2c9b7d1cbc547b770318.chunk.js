(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[49259],{73814:(e,r,t)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r,t){return(r=function(e){var r=function(e){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!=n(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,{xO:()=>c,HH:()=>a,yp:()=>s,i8:()=>l,hC:()=>f,UK:()=>p});var c="MAP:ADD_POPUP",a="MAP:REMOVE_POPUP",s="MAP:CLEAN_POPUPS",l=function(e,r){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return{type:c,id:e,popup:i({id:e},r),single:t}},f=function(e){return{type:a,id:e}},p=function(){return{type:s}}},213652:(e,r,t)=>{"use strict";t.d(r,{Wz:()=>n,UA:()=>o,LI:()=>i});var n="MAP_TYPE_CHANGED",o="MAP_TYPE:VISUALIZATION_MODE_CHANGED";function i(e){return{type:o,visualizationMode:e}}},597222:(e,r,t)=>{"use strict";t.d(r,{Vc:()=>o,qj:()=>i,bj:()=>u,p7:()=>c,Av:()=>a,M8:()=>s,wn:()=>l,gs:()=>f,NN:()=>p,C2:()=>y,O7:()=>d,oQ:()=>v,dX:()=>b,al:()=>m,Gh:()=>g,x2:()=>E,Y7:()=>h,b4:()=>O,GI:()=>_,KP:()=>S,dS:()=>P,Zw:()=>T,l4:()=>w,fZ:()=>A,Z:()=>R,a:()=>j,WN:()=>C,k9:()=>I,yo:()=>H,kE:()=>D,kV:()=>M,v2:()=>q,_q:()=>L,tt:()=>x,Jc:()=>k,w4:()=>G,QJ:()=>N,KG:()=>U,o$:()=>X,TS:()=>F,Tw:()=>Z,I3:()=>V});var n=t(197395),o="SEARCH:SEARCH_WITH_FILTER",i="SEARCH:SCHEDULE_SEARCH_WITH_FILTER",u="TEXT_SEARCH_STARTED",c="TEXT_SEARCH_RESULTS_LOADED",a="TEXT_SEARCH_RESULTS_PURGE",s="TEXT_SEARCH_RESET",l="TEXT_SEARCH_ADD_MARKER",f="TEXT_SEARCH_TEXT_CHANGE",p="TEXT_SEARCH_LOADING",y="TEXT_SEARCH_NESTED_SERVICE_SELECTED",d="TEXT_SEARCH_ERROR",v="TEXT_SEARCH_CANCEL_ITEM",b="TEXT_SEARCH_ITEM_SELECTED",m="TEXT_SEARCH_SHOW_GFI",g="TEXT_SEARCH_SET_HIGHLIGHTED_FEATURE",E="UPDATE_RESULTS_STYLE",h="CHANGE_SEARCH_TOOL",O="SEARCH:ZOOM_ADD_POINT",_="SEARCH:CHANGE_FORMAT",S="SEARCH:CHANGE_COORD",P="SEARCH:HIDE_MARKER";function T(e){return{type:_,format:e}}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.layer,t=e.cql_filter;return{type:o,layer:r,cql_filter:t}}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.layer,t=e.cql_filter;return{type:i,layer:r,cql_filter:t}}function R(e,r,t){return{type:O,pos:e,zoom:r,crs:t}}function j(e){return{type:h,activeSearchTool:e}}function C(e){return{type:c,results:e,append:arguments.length>1&&void 0!==arguments[1]&&arguments[1],services:arguments.length>2?arguments[2]:void 0}}function I(e){return{type:f,searchText:e}}function H(e){return{type:p,loading:e}}function D(e){return{type:d,error:e}}function M(){return{type:a}}function q(){return{type:s}}function L(e,r){return{type:l,markerPosition:e,markerLabel:r}}function x(e){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).services;return{type:u,searchText:e,services:void 0===r?null:r,maxResults:arguments.length>2&&void 0!==arguments[2]?arguments[2]:15}}function k(e,r,t,n){return{type:b,item:e,mapConfig:r,service:t,resultsStyle:n}}var G=function(e){return{type:m,item:e}};function N(e,r,t){return{type:y,searchText:t,services:e,items:r}}function U(e){return{type:v,item:e}}function X(e){return{type:E,style:e}}function F(e,r){return{type:S,coord:e,val:r}}function Z(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.nonQueriableLayers",autoDismiss:10})}function V(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.serverError",autoDismiss:10})}},615402:(e,r,t)=>{"use strict";t.d(r,{Z:()=>m});var n=t(45697),o=t.n(n),i=t(124852),u=t.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function s(e,r,t){return r=f(r),function(e,r){if(r&&("object"==c(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,l()?Reflect.construct(r,t||[],f(e).constructor):r.apply(e,t))}function l(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(l=function(){return!!e})()}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,r){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},p(e,r)}function y(e,r,t){return(r=d(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){var r=function(e){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!=c(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(r)?r:r+""}var v=t(868195).FormattedHTMLMessage,b=function(e){function r(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),s(this,r,arguments)}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&p(e,r)}(r,e),t=r,(n=[{key:"render",value:function(){return this.context.intl?u().createElement(v,{id:this.props.msgId,values:this.props.msgParams}):u().createElement("span",null,this.props.msgId||"")}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n}(u().Component);y(b,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(b,"contextTypes",{intl:o().object});const m=b},821751:(e,r,t)=>{"use strict";t.r(r),t.d(r,{IDENTIFY_POPUP:()=>_,default:()=>S});var n=t(124852),o=t.n(n),i=t(173014),u=t(11196),c=t(867076),a=t(171703),s=t(22222),l=t(307877),f=t(921914),p=t(542872),y=t(701469),d=t.n(y),v=t(352353),b=t.n(v),m=t(979870),g=t(800827),E=(0,c.compose)((0,a.connect)((0,s.P1)(l.Qf,(function(e){return{index:e}})),{setIndex:f.oO}),(0,c.defaultProps)({index:0,responses:[]})),h=(0,s.P1)([l.q7,l.o9,l.OK,l.us,l.x0,g.hp,l.vR],(function(e,r,t,n,o,i,u){return{responses:e,validResponses:r,requests:t,format:n,showEmptyMessageGFI:o,missingResponses:(t||[]).length-(e||[]).length,renderValidOnly:i,loaded:u}}));const O=(0,c.compose)((0,a.connect)(h),(0,c.defaultProps)({responses:[],container:function(e){var r=e.index,t=e.children;return o().createElement(o().Fragment,null,d()(t)&&t[r]||t)},header:m.Z}),E,u.Yy,u.mI,(0,i.Z)((function(e){var r=e.loaded;return b()(r)})))(p.Z);var _="identify";const S={identify:O}},426125:(e,r,t)=>{"use strict";t.d(r,{Z:()=>w});var n=t(727418),o=t.n(n),i=t(630998),u=t.n(i),c=t(352353),a=t.n(c),s=t(441609),l=t.n(s),f=t(881808),p=t(782904),y=t(921914),d=t(213652),v=t(945402),b=t(898631),m=["index","loaded"];function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function E(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return h(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){S(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function S(e,r,t){return(r=function(e){var r=function(e){if("object"!=g(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!=g(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==g(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function P(e,r,t){var n="vector"===t,i=n?r.reqId:u()(e.requests||[],(function(e){return e.reqId===r.reqId}));if(-1!==i){var c;if(["exceptions","error"].includes(t)){var s=e.requests.filter((function(e,r){return r!==i})),f=e.responses.filter((function(e,r){return r!==i}));return _(_({},e),{},{responses:f,requests:s})}var p,y=e.configuration,d=e.requests,b=e.responses||[],m="hover"===(null==y?void 0:y.trigger)||(null==e?void 0:e.showInMapPopup);if(!n){var g={response:r[t],queryParams:r.requestParams,layerMetadata:r.layerMetadata,layer:r.layer};m?b=[].concat(E(b),[g]):b[i]=g}return m||e.showAllResponses?p={loaded:!0,index:0}:!m&&function(e,r,t,n){var o,i,u=e.configuration,c=e.requests,s=e.queryableLayers,f=void 0===s?[]:s,p=e.index,y=(u||{}).infoFormat,d=(r[t]||{}).layer,b=!(!n&&"3dtiles"!==(void 0===d?{}:d).type),m=null===(o=(0,v.Te)(y))||void 0===o?void 0:o.getValidResponses([r[t]]),g=null===(i=(0,v.Te)(y))||void 0===i?void 0:i.getNoValidResponses(r),E=a()(p)&&!!m.length,h=!b&&c.length===g.filter((function(e){return e})).length,O=a()(p)&&n&&c.filter((function(e){return l()(e)})).length===f.length;return E||h||O}(e,b,i,n)?p={loaded:!0,index:i}:b.length!==d.length||null!==(c=p)&&void 0!==c&&c.loaded||(p={loaded:!0}),o()({},e,_(_(_({},n&&{requests:d}),!a()(p)&&p),{},{responses:E(b)}))}return e}var T={enabled:!0,configuration:{}};const w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case y.Re:return o()({},e,{warning:"NO_QUERYABLE_LAYERS"});case y.ih:return o()({},e,{warning:null});case y.Xw:return o()({},e,{enabled:r.enabled});case y.ph:return o()({},e,{enabled:!e.enabled});case y.gG:return o()({},e,{index:r.index});case y.oz:return o()({},e,{highlight:r.enabled});case y.Pn:var t=r.reqId,n=r.request,i=e.requests||[];return o()({},e,{requests:[].concat(E(i),[{request:n,reqId:t}])});case y.DZ:return e.index,e.loaded,_(_({},function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.includes(n))continue;t[n]=e[n]}return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,m)),{},{queryableLayers:[],responses:[],requests:[]});case y.XL:return P(e,r,"data");case y.Ih:return P(e,r,"exceptions");case y.km:return P(e,r,"error");case y.xy:return o()({},e,{clickPoint:r.point,clickLayer:r.layer||null,itemId:r.itemId||null,overrideParams:r.overrideParams||null,filterNameList:r.filterNameList||null});case y.e8:return _(_({},e),{},{configuration:_(_({},e.configuration),{},{infoFormat:r.infoFormat})});case y.E0:return o()({},e,{showMarker:!0});case y.F9:return o()({},e,{showMarker:!1});case y.X_:return o()({},e,{showModalReverse:!0,reverseGeocodeData:r.reverseGeocodeData});case y.pb:return o()({},e,{showModalReverse:!1,reverseGeocodeData:void 0});case p.l:return o()({},e,{showMarker:!1,responses:[],requests:[],configuration:_(_({},e.configuration),{},{trigger:"click"})});case y.lF:return o()({},e,{centerToMarker:r.status});case y.ZF:return _(_({},e),{},{configuration:_(_({},e.configuration),{},{showEmptyMessageGFI:!e.configuration.showEmptyMessageGFI})});case f.ok:return _(_({},e),{},{configuration:r.config.mapInfoConfiguration||e.configuration||{}});case y.GI:return _(_({},e),{},{formatCoord:r.format});case y.B1:return _(_({},e),{},{showCoordinateEditor:!r.showCoordinateEditor});case y.gc:return _(_({},e),{},{currentEditFeatureQuery:r.query});case y.zX:return _(_({},e),{},{configuration:_(_({},e.configuration),{},{trigger:r.trigger})});case y.Zb:return _(_({},e),{},{showInMapPopup:r.value});case d.UA:return r.visualizationMode===b.nU._3D?_(_({},e),{},{configuration:_(_({},e.configuration),{},{trigger:"click"})}):e;case y.Xp:var u;return _(_(_({},e),r.cfg),{},{configuration:_(_({},e.configuration),null===(u=r.cfg)||void 0===u?void 0:u.configuration)});default:return e}}}}]);