(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7509],{7878:(t,e,r)=>{"use strict";r.d(e,{E6:()=>u,vo:()=>c,l1:()=>a,J9:()=>l,U:()=>f,z8:()=>p,ql:()=>s,O_:()=>y,M$:()=>E,Ug:()=>d,p5:()=>b,Fz:()=>_,WZ:()=>O,bP:()=>m,On:()=>g,d_:()=>h,xM:()=>R,bl:()=>T,Wi:()=>v,PN:()=>S,_M:()=>L,Wm:()=>P,Eg:()=>A,V1:()=>I,cY:()=>w,RD:()=>D,Hl:()=>F,co:()=>j,uY:()=>U,H8:()=>C,je:()=>N,go:()=>Y,_8:()=>M,xd:()=>W,o7:()=>x,Nr:()=>G,Gf:()=>H,nh:()=>Q,Rf:()=>k,Xp:()=>V,D6:()=>Z,Sm:()=>z,Ef:()=>B,jW:()=>J,kQ:()=>X,JG:()=>q,js:()=>$,q$:()=>K,OZ:()=>tt,Nc:()=>et,NV:()=>rt,I5:()=>nt,QL:()=>ot,I:()=>it,ku:()=>ut,EU:()=>ct,IV:()=>at,HT:()=>lt,lg:()=>ft,ds:()=>pt,VF:()=>st,DD:()=>yt,uo:()=>Et,Ry:()=>dt,ZH:()=>bt,AQ:()=>_t,yC:()=>Ot,F:()=>mt,mc:()=>gt,uM:()=>Rt,eJ:()=>Tt,uP:()=>vt,N5:()=>St,bn:()=>Lt,Bm:()=>Pt,F2:()=>At,jR:()=>It,$J:()=>wt,ln:()=>Dt});var n=r(75875),o=r.n(n);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var u="ADD_FILTER_FIELD",c="REMOVE_FILTER_FIELD",a="UPDATE_FILTER_FIELD",l="UPDATE_EXCEPTION_FIELD",f="ADD_GROUP_FIELD",p="UPDATE_LOGIC_COMBO",s="REMOVE_GROUP_FIELD",y="CHANGE_CASCADING_VALUE",E="EXPAND_ATTRIBUTE_PANEL",d="EXPAND_SPATIAL_PANEL",b="QUERYFORM:EXPAND_CROSS_LAYER",_="QUERYFORM:SET_CROSS_LAYER_PARAMETER",O="QUERYFORM:RESET_CROSS_LAYER_FILTER",m="SELECT_SPATIAL_METHOD",g="SELECT_VIEWPORT_SPATIAL_METHOD",h="UPDATE_GEOMETRY",R="SELECT_SPATIAL_OPERATION",T="CHANGE_SPATIAL_ATTRIBUTE",v="CHANGE_SPATIAL_FILTER_VALUE",S="REMOVE_SPATIAL_SELECT",L="SHOW_SPATIAL_DETAILS",P="QUERY_FORM_SEARCH",A="QUERY_FORM_RESET",I="SHOW_GENERATED_FILTER",w="CHANGE_DWITHIN_VALUE",D="ZONE_SEARCH",F="ZONE_SEARCH_ERROR",j="ZONE_FILTER",U="ZONE_CHANGE",C="ZONES_RESET",N="SIMPLE_FILTER_FIELD_UPDATE",Y="ADD_SIMPLE_FILTER_FIELD",M="REMOVE_SIMPLE_FILTER_FIELD",W="REMOVE_ALL_SIMPLE_FILTER_FIELDS",x="UPDATE_FILTER_FIELD_OPTIONS",G="LOADING_FILTER_FIELD_OPTIONS",H="QUERYFORM:ADD_CROSS_LAYER_FILTER_FIELD",Q="QUERYFORM:UPDATE_CROSS_LAYER_FILTER_FIELD",k="QUERYFORM:REMOVE_CROSS_LAYER_FILTER_FIELD",V="QUERYFORM:UPDATE_CROSS_LAYER_FILTER_FIELD_OPTIONS",Z="SET_AUTOCOMPLETE_MODE",z="TOGGLE_AUTOCOMPLETE_MENU",B="QUERYFORM:LOAD_FILTER";function J(t){return{type:u,groupId:t}}function X(t,e){return{type:f,groupId:t,index:e}}function q(t){return{type:c,rowId:t}}function $(t,e){return{type:z,rowId:t,status:e,layerFilterType:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"filterField"}}function K(t,e,r,n){return{type:a,rowId:t,fieldName:e,fieldValue:r,fieldType:n,fieldOptions:arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}}}function tt(t,e){return{type:l,rowId:t,exceptionMessage:e}}function et(t,e){return{type:p,groupId:t,logic:e}}function rt(t){return{type:Z,status:t}}function nt(t){return{type:s,groupId:t}}function ot(t){return{type:y,attributes:t}}function it(t){return{type:E,expand:t}}function ut(t){return{type:d,expand:t}}function ct(t){return{type:b,expand:t}}function at(t,e){return{type:_,key:t,value:e}}function lt(t,e){return{type:m,fieldName:e,method:t}}function ft(){return{type:g}}function pt(t){return{type:h,geometry:t}}function st(t,e){return{type:R,fieldName:e,operation:t}}function yt(t){return{type:T,attribute:t}}function Et(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.feature,r=t.srsName,n=t.collectGeometries,o=t.style,i=t.options,u=t.value;return{type:v,value:u,collectGeometries:n,options:i,geometry:e&&e.geometry,feature:e,srsName:r,style:o}}function dt(){return{type:S}}function bt(t){return{type:L,show:t}}function _t(t){return{type:w,distance:t}}function Ot(t,e){return{type:P,searchUrl:t,filterObj:e}}function mt(t){return{type:B,filter:t}}function gt(t){return{type:A,skip:t}}function ht(t,e){return{type:F,error:t,id:e}}function Rt(t,e){return{type:D,active:t,id:e}}function Tt(t,e,r){return function(n){return o().post(t,e,{timeout:1e4,headers:{Accept:"application/json","Content-Type":"text/plain"}}).then((function(o){var u=o.data;if("object"!==i(u))try{u=JSON.parse(u)}catch(o){n(ht("Search result broken ("+t+":   "+e+"): "+o.message,r))}n(function(t,e){return{type:j,data:t,id:e}}(u,r)),n(Rt(!1,r))})).catch((function(t){n(ht(t,r))}))}}function vt(t,e){return{type:U,id:t,value:e}}function St(t){return{type:H,rowId:(new Date).getTime(),groupId:t}}function Lt(t,e,r,n){return{type:Q,rowId:t,fieldName:e,fieldValue:r,fieldType:n,fieldOptions:arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}}}function Pt(t){return{type:k,rowId:t}}function At(){return{type:O}}function It(t,e){return{type:G,status:t,filterField:e,layerFilterType:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"filterField"}}function wt(t,e,r){return{type:x,filterField:t,options:e,valuesCount:r}}function Dt(t,e,r){return{type:V,filterField:t,options:e,valuesCount:r}}},95797:(t,e,r)=>{"use strict";r.d(e,{DR:()=>n,S0:()=>o,u7:()=>i,lj:()=>u,yz:()=>c,lN:()=>a,zW:()=>l,Yx:()=>f,VN:()=>p,Hu:()=>s,VT:()=>y,RD:()=>E,Qq:()=>d,R1:()=>b,_T:()=>_,vO:()=>O,XO:()=>m,jG:()=>g,Xc:()=>h,gT:()=>R,rG:()=>T,t3:()=>v,Fs:()=>S,w_:()=>L,Lm:()=>P,rh:()=>A,rP:()=>I,IO:()=>w}),r(75875);var n="LAYER_SELECTED_FOR_SEARCH",o="FEATURE_TYPE_SELECTED",i="FEATURE_TYPE_LOADED",u="FEATURE_LOADED",c="FEATURE_LOADING",a="FEATURE_TYPE_ERROR",l="FEATURE_ERROR",f="QUERY_CREATE",p="QUERY:UPDATE_QUERY",s="QUERY_RESULT",y="QUERY_ERROR",E="RESET_QUERY",d="QUERY",b="INIT_QUERY_PANEL",_="QUERY:TOGGLE_SYNC_WMS",O="QUERY:TOGGLE_LAYER_FILTER";function m(){return{type:_}}function g(){return{type:O}}function h(){return{type:b}}function R(t,e){return{type:o,url:t,typeName:e}}function T(t,e){return{type:i,typeName:t,featureType:e}}function v(t,e){return{type:a,typeName:t,error:e}}function S(t){return{type:c,isLoading:t}}function L(t,e,r,n,o){return{type:s,searchUrl:e,filterObj:r,result:t,queryOptions:n,reason:o}}function P(t){return{type:y,error:t}}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.updates,r=t.reason,n=t.useLayerFilter;return{type:p,updates:e,reason:r,useLayerFilter:n}}function I(t,e){return{type:f,searchUrl:t,filterObj:e}}function w(t,e,r,n){return{type:d,searchUrl:t,filterObj:e,queryOptions:r,reason:n}}},89919:(t,e,r)=>{"use strict";r.d(e,{hP:()=>l});var n=r(84596),o=r.n(n),i=r(49977),u=r.n(i);function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var a=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.startWith.apply(t,function(t){if(Array.isArray(t))return c(t)}(e=r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())},l=function(t,e,r){return function(n){return(r?a(n,o()(t)).catch(r):a(n,o()(t))).concat(u().Observable.from(o()(e)))}}},10960:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>Q});var n=r(75263),o=r.n(n),i=r(24852),u=r.n(i),c=r(80628),a=r(71703),l=r(67076),f=r(22222),p=r(41609),s=r.n(p),y=r(57579),E=r(5346),d=r(91380),b=r(82030);const _=(0,l.branch)((function(t){return t.selectionActive}),(0,l.compose)((0,l.withProps)((function(t){var e=t.className;return{className:"".concat(e," selection-active")}})),(0,l.withHandlers)({getWidgetClass:function(t){var e=t.getWidgetClass,r=void 0===e?function(){}:e,n=t.isWidgetSelectable,o=void 0===n?function(){return!0}:n;return function(t){return r(t)?r(t)+(o(t)?void 0:" disabled"):o(t)?void 0:" disabled"}},onWidgetClick:function(t){var e=t.onWidgetSelected,r=void 0===e?function(){}:e,n=t.isWidgetSelectable,o=void 0===n?function(){return!0}:n;return function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return o(t)?r.apply(void 0,[t].concat(n)):null}}})));var O=r(64945);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){var n,o,i,u;n=t,o=e,i=r[e],u=function(t,e){if("object"!=m(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==m(u)?u:u+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const R=(0,l.compose)(l.pure,(0,l.defaultProps)({breakpoints:{md:480,xxs:0},cols:{md:6,xxs:1},minLayoutWidth:480}),(0,d.ZY)({overrideWidthProvider:!0}),(0,l.withProps)((function(t){var e=t.width;return{width:e<=t.minLayoutWidth?e-18:e,toolsOptions:{showMaximize:!0}}})),(0,l.withProps)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,r=t.height,n=t.maximized,o=t.minLayoutWidth,i=t.cols,u=null!=n&&n.widget?{width:"100%",height:"100%",marginTop:0,bottom:"auto",top:0,left:0,zIndex:99}:{},c=null!=n&&n.widget?{width:e,useDefaultWidthProvider:!1,rowHeight:r-50,breakpoints:{xxs:0},cols:{xxs:1}}:{};return h({className:"on-map",breakpoints:{md:o,xxs:0},cols:i||{md:6,xxs:1},style:h({position:"absolute",zIndex:50},u)},c)})),(0,b.Z)((function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).widgets;return 0===(void 0===t?[]:t).length}),(function(t){return{glyph:"dashboard",title:t.loading?u().createElement(E.Z,{msgId:"loading"}):u().createElement(E.Z,{msgId:"dashboard.emptyTitle"})}})),(0,l.defaultProps)({isWidgetSelectable:function(){return!0}}),_)(O.Z);var T=r(75859),v=r(67306),S=r(8316),L=r(38842),P=r(1757),A=r(24412),I=r(7691),w=r(88395);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){W(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function U(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,x(n.key),n)}}function C(t,e,r){return e=Y(e),function(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,N()?Reflect.construct(e,r||[],Y(t).constructor):e.apply(t,r))}function N(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(N=function(){return!!t})()}function Y(t){return Y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Y(t)}function M(t,e){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},M(t,e)}function W(t,e,r){return(e=x(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function x(t){var e=function(t,e){if("object"!=D(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==D(e)?e:e+""}var G=(0,l.compose)((0,a.connect)((0,f.P1)(v.NB,P.hF,P.nA,P.h9,P.xI,(function(t){return(0,P.YI)(t)}),P.ie,v.P0,v.MZ,v.J,S.KV,L.wk,L.fY,P.Jb,(function(t,e,r,n,o,i,u,c,a,l,f,p,y,E){return{resource:t,loading:a,canEdit:l?!l:t&&!!t.canEdit,layouts:r,dependencies:n,selectionActive:o,editingWidget:i,widgets:s()(E)?e:e.filter((function(t){return t.id===E.widget.id})),groups:u,showGroupColor:c,language:p?f:null,env:y,maximized:E}})),{editWidget:y.uT,updateWidgetProperty:y.Ij,exportCSV:y.sD,exportImage:y.Rb,deleteWidget:y.E9,onWidgetSelected:y.Gn,onLayoutChange:y.c_,toggleMaximize:y.Pt}),(0,l.withProps)((function(){return{style:{height:"100%",overflow:"auto"}}})),(0,l.withHandlers)({isWidgetSelectable:function(t){var e=t.editingWidget;return function(t){return("map"===t.widgetType||"table"===t.widgetType&&("map"!==e.widgetType&&t.layer&&e.layer&&t.layer.name===e.layer.name||"map"===e.widgetType)&&!t.mapSync)&&t.id!==e.id}}}))(R),H=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),C(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&M(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){return this.props.enabled?u().createElement(G,{width:this.props.width,height:this.props.height,rowHeight:this.props.rowHeight,cols:this.props.cols,minLayoutWidth:this.props.minLayoutWidth,widgetOpts:this.props.widgetOpts}):null}}])&&U(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(u().Component);W(H,"propTypes",{enabled:o().bool,rowHeight:o().number,cols:o().object,minLayoutWidth:o().number,widgetOpts:o().object}),W(H,"defaultProps",{enabled:!0,minLayoutWidth:480});const Q={DashboardPlugin:(0,c.Z)(H),reducers:{dashboard:A.Z,widgets:T.Z},epics:j(j({},I.ZP),w.ZP)}},38842:(t,e,r)=>{"use strict";r.d(e,{wk:()=>p,Yf:()=>s,c3:()=>y,fY:()=>E});var n=r(18721),o=r.n(n),i=r(27361),u=r.n(i),c=r(13311),a=r.n(c),l=r(22222),f=r(8316),p=function(t){return o()(t,"localConfig.localizedLayerStyles")},s=function(t){var e=u()(t,"localConfig.plugins.dashboard",[]),r=a()(e,(function(t){return"DashboardEditor"===t.name}))||{};return u()(r,"cfg.catalog.localizedLayerStyles",!1)},y=function(t){return u()(t,"localConfig.localizedLayerStyles.name","mapstore_language")},E=(0,l.P1)(p,y,f.KV,(function(t,e,r){var n=[];return t&&n.push({name:e,value:r}),n}))},80628:(t,e,r)=>{"use strict";r.d(e,{Z:()=>f});var n=r(24852),o=r.n(n),i=r(74754);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}const f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{handleWidth:!0,handleHeight:!0};return function(r){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),function(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}(this,a(n).apply(this,arguments))}var f,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(n,r),f=n,(p=[{key:"render",value:function(){return o().createElement(i.Z,e,o().createElement(t,this.props))}}])&&c(f.prototype,p),n}(n.Component)}}}]);