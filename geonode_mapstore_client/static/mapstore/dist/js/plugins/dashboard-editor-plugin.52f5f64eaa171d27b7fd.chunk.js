(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[78225,47310,35239],{921914:(t,e,n)=>{"use strict";n.d(e,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>c,Pn:()=>a,DZ:()=>l,e8:()=>f,E0:()=>s,F9:()=>p,X_:()=>y,pb:()=>d,Re:()=>b,ih:()=>m,xy:()=>v,jL:()=>E,oz:()=>g,ph:()=>O,lF:()=>h,gG:()=>P,cb:()=>_,GI:()=>I,B1:()=>S,fv:()=>T,gc:()=>N,zX:()=>w,ZF:()=>j,Zb:()=>D,DW:()=>F,Xp:()=>R,Fm:()=>A,sV:()=>M,LU:()=>k,XP:()=>C,WU:()=>G,mK:()=>U,g:()=>L,ws:()=>Y,HP:()=>z,aN:()=>H,Pg:()=>x,u0:()=>W,TM:()=>q,PM:()=>X,lK:()=>K,sv:()=>Q,MO:()=>J,oO:()=>B,Mc:()=>V,Zw:()=>$,RA:()=>tt,am:()=>et,ZM:()=>nt,wm:()=>rt,Y$:()=>ot,Qu:()=>it,kT:()=>ut});var r=n(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",c="CHANGE_MAPINFO_STATE",a="NEW_MAPINFO_REQUEST",l="PURGE_MAPINFO_RESULTS",f="CHANGE_MAPINFO_FORMAT",s="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",y="SHOW_REVERSE_GEOCODE",d="HIDE_REVERSE_GEOCODE",b="NO_QUERYABLE_LAYERS",m="CLEAR_WARNING",v="FEATURE_INFO_CLICK",E="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",g="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",O="TOGGLE_MAPINFO_STATE",h="UPDATE_CENTER_TO_MARKER",P="IDENTIFY:CHANGE_PAGE",_="IDENTIFY:CLOSE_IDENTIFY",I="IDENTIFY:CHANGE_FORMAT",S="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",T="IDENTIFY:EDIT_LAYER_FEATURES",N="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",w="IDENTIFY:SET_MAP_TRIGGER",j="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",D="IDENTIFY:SET_SHOW_IN_MAP_POPUP",F="IDENTIFY:IDENTIFY_IS_MOUNTED",R="IDENTIFY:INIT_PLUGIN";function A(t,e,n,r,i){return{type:o,data:e,reqId:t,requestParams:n,layerMetadata:r,layer:i}}function M(t,e,n,r){return{type:i,error:e,reqId:t,requestParams:n,layerMetadata:r}}function k(){return{type:b}}function C(){return{type:m}}function G(t,e){return{type:a,reqId:t,request:e}}function U(t){return{type:c,enabled:t}}function L(){return{type:l}}function Y(t){return{type:f,infoFormat:t}}function z(){return{type:s}}function H(){return{type:p}}function Z(t){return{type:y,reverseGeocodeData:t.data}}function x(t){return function(e){r.Z.reverseGeocode(t).then((function(t){e(Z(t))})).catch((function(t){e(Z(t))}))}}function W(){return{type:d}}function q(){return{type:O}}function X(t){return{type:h,status:t}}function K(t,e){return{type:v,point:t,layer:e,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null}}function Q(t){return{type:E,point:t}}function J(t){return{type:g,enabled:t}}function B(t){return{type:P,index:t}}var V=function(){return{type:_}},$=function(t){return{type:I,format:t}},tt=function(t){return{type:S,showCoordinateEditor:t}},et=function(t){return{type:T,layer:t}},nt=function(t){return{type:N,query:t}},rt=function(t){return{type:w,trigger:t}},ot=function(t){return{type:D,value:t}},it=function(t){return{type:F,isMounted:t}},ut=function(t){return{type:R,cfg:t}}},647310:(t,e,n)=>{"use strict";n.d(e,{Z:()=>f});var r=n(375875),o=n.n(r),i=n(472500),u=n.n(i),c=n(727418),a=n.n(c),l={format:"json",bounded:0,polygon_geojson:1,priority:5};const f={geocode:function(t,e){var n=a()({q:t},l,e||{}),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(t,e){var n=a()({lat:t.lat,lon:t.lng},e||{},l),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},51736:(t,e,n)=>{"use strict";n.d(e,{Z:()=>m});var r=n(124852),o=n.n(r),i=n(294184),u=n.n(i);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const s=function(t){var e,n,r,i=t.id,c=t.children,a=t.dockStyle,s=t.className,p=t.style,y=void 0===p?{}:p,d={width:"calc(100% - ".concat((null!==(e=null==a?void 0:a.right)&&void 0!==e?e:0)+(null!==(n=null==a?void 0:a.left)&&void 0!==n?n:0),"px)"),transform:"translateX(-".concat(null!==(r=null==a?void 0:a.right)&&void 0!==r?r:0,"px)"),pointerEvents:"none"};return o().createElement("div",{id:i,className:u()(l(l({},s?f({},s,!0):{}),{},{"dock-container":!0})),style:l(l({},d),y)},c)};var p=n(496259),y=n(632107),d=["children","containerClassName","containerId","containerStyle","dock","siblings","size"];function b(){return b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},b.apply(null,arguments)}const m=function(t){var e=t.children,n=t.containerClassName,r=t.containerId,i=t.containerStyle,u=t.dock,c=void 0===u||u,a=t.siblings,l=t.size,f=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||{}.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,d);return o().createElement(s,{dockStyle:i,id:r,className:n},o().createElement(p.Z,null,(function(t){var n=t.width;return o().createElement(o().Fragment,null,o().createElement(y.Z,b({dock:c,size:l/n>1?n:l},f),e),a)})))}},868143:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>D});var r=n(124852),o=n.n(r),i=n(867076),u=n(22222),c=n(171703),a=n(45697),l=n.n(a),f=n(322843),s=n(367306),p=n(296311),y=n(557579),d=n(555927);const b=(0,i.compose)((0,c.connect)((function(){return{}}),{backFromWizard:function(){return(0,y.Rz)("layer",void 0)}}),(0,i.withProps)((function(t){var e=t.backFromWizard;return{exitButton:{id:"dashboard-exit-button",onClick:void 0===e?function(){}:e,glyph:"arrow-left",tooltipId:"widgets.builder.wizard.backToLayerSelection"}}})));var m=n(454679),v=n(807691),E=n(24412);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,T(r.key),r)}}function h(t,e,n){return e=_(e),function(t,e){if(e&&("object"==g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,P()?Reflect.construct(e,n||[],_(t).constructor):e.apply(t,n))}function P(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(P=function(){return!!t})()}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function S(t,e,n){return(e=T(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T(t){var e=function(t,e){if("object"!=g(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==g(e)?e:e+""}var N=(0,i.compose)((0,c.connect)(p.Nb,{toggleConnection:y.w2,triggerShowConnections:d.G9}),(0,c.connect)(p.Tw),(0,i.withProps)((function(t){var e=t.availableDependencies;return{availableDependencies:(void 0===e?[]:e).filter((function(t){return"map"!==t}))}})),b)(m.Z),w=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){this.props.onInit({servicesPermission:this.props.servicesPermission}),this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){var t=this,e=this.props.pluginCfg.selectedService||"",n=this.props.pluginCfg.services||{};return!!this.props.editing&&o().createElement("div",{className:"dashboard-editor de-builder"},o().createElement(N,{disableEmptyMap:this.props.disableEmptyMap,defaultSelectedService:e,defaultServices:n,canEditService:this.props.canEditService,enabled:this.props.editing,onClose:function(){return t.props.setEditing(!1)},catalog:this.props.catalog}))}}])&&O(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(o().Component);S(w,"propTypes",{id:l().string,editing:l().bool,limitDockHeight:l().bool,fluid:l().bool,zIndex:l().number,dockSize:l().number,position:l().string,onMount:l().func,onUnmount:l().func,setEditing:l().func,dimMode:l().string,src:l().string,style:l().object,pluginCfg:l().object,catalog:l().object,disableEmptyMap:l().bool,servicesPermission:l().object}),S(w,"defaultProps",{id:"dashboard-editor",editing:!1,dockSize:500,limitDockHeight:!0,zIndex:1e4,fluid:!1,dimMode:"none",position:"left",onMount:function(){},onUnmount:function(){},setEditing:function(){},servicesPermission:{editingAllowedRoles:["ALL"]}});var j=(0,c.connect)((0,u.P1)(s.i$,s.MZ,s.$c,(function(t,e,n){return{editing:t,isDashboardOpened:e,canEditService:n}})),{setEditing:d.D_,onInit:d.QT,onMount:function(){return(0,d.Nl)(!0)},onUnmount:function(){return(0,d.Nl)(!1)}})(w);const D=(0,f.rx)("DashboardEditor",{component:j,reducers:{dashboard:E.Z},epics:v.ZP})},55105:(t,e,n)=>{"use strict";n.d(e,{Ss:()=>d,Nr:()=>b,QJ:()=>m,ic:()=>v,Jz:()=>E,VM:()=>g,CF:()=>O,Ju:()=>h,Fc:()=>P,gQ:()=>_});var r=n(91175),o=n.n(r),i=n(288306),u=n.n(i),c=n(800827),a=n(552259),l=n(737275);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=f(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==f(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(t){return t.maplayout&&t.maplayout.layout||{}},b=function(t){return t.maplayout&&t.maplayout.boundingMapRect||{}},m=function(t){return t.maplayout&&t.maplayout.boundingSidebarRect||{}},v=u()((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=d(t),o=m(t);return r&&Object.keys(r).filter((function(t){return e[t]})).reduce((function(t,e){var i;return p(p({},t),{},y({},e,n&&null!==(i=o[e])&&void 0!==i?i:r[e]))}),{})||{}}),(function(t,e,n){return JSON.stringify(d(t))+JSON.stringify(m(t))+JSON.stringify(e)+(n?"_isDock":"")})),E=function(t){var e;return!(null===(e=d(t))||void 0===e||!e.rightPanel)},g=function(t){var e,n=l.ZP.getConfigProp("mapLayout")||a.Ur;return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=d(t);return!!o()(e.filter((function(t){return n[t.key]})).map((function(t){return"not"===t.type?n[t.key]!==t.value&&n[t.key]:n[t.key]===t.value})))}(t,[{key:"bottom",value:null!==(e=null==n?void 0:n.bottom.sm)&&void 0!==e?e:0,type:"not"}])},O=function(t){var e=(0,c.Od)(t),n=b(t);return n&&e&&e.size&&{left:(0,a.pb)(n.left,e.size.width),bottom:(0,a.pb)(n.bottom,e.size.height),right:(0,a.pb)(n.right,e.size.width),top:(0,a.pb)(n.top,e.size.height)}},h=function(t){var e,n;return null!==(e=null==t||null===(n=t.maplayout)||void 0===n?void 0:n.dockPanels)&&void 0!==e?e:{left:[],right:[]}},P=function(t){return v(t,{height:!0,right:!0},!0)},_=function(t){return v(t,{right:!0},!0)}}}]);