(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2514],{81808:(t,e,r)=>{"use strict";r.d(e,{eD:()=>n,AM:()=>o,ok:()=>i,Gg:()=>u,nT:()=>c,TL:()=>a,KS:()=>l,EB:()=>s,DZ:()=>p,Aw:()=>f,V_:()=>y,H0:()=>d,jW:()=>b,JZ:()=>m,fQ:()=>v,HK:()=>g,YO:()=>O,I6:()=>h});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",i="MAP_CONFIG_LOADED",u="MAP_CONFIG_LOAD_ERROR",c="MAP_LOAD_INFO",a="MAP_INFO_LOAD_START",l="MAP_INFO_LOADED",s="MAP_INFO_LOAD_ERROR",p="MAP:MAP_SAVE_ERROR",f="MAP:MAP_SAVED",y="MAP:RESET_MAP_SAVE_ERROR";function d(t,e,r){return{type:i,config:t,legacy:!!e,mapId:e,zoomToExtent:r}}function b(t,e){return{type:u,error:t,mapId:e}}function m(t,e,r,n,i){return{type:o,configName:t,mapId:e,config:r,mapInfo:n,overrideConfig:i}}function v(t,e){return{type:l,mapId:e,info:t}}function g(t,e){return{type:s,mapId:t,error:e}}function O(t){return{type:a,mapId:t}}function h(t){return{type:c,mapId:t}}},80416:(t,e,r)=>{"use strict";r.d(e,{yS:()=>n,Zz:()=>o,ms:()=>i,ih:()=>u,OX:()=>a,sb:()=>l,K$:()=>s,k7:()=>p,cX:()=>f,x9:()=>y,vs:()=>d,oE:()=>b,Po:()=>m,qv:()=>v,cI:()=>g,g6:()=>O,I4:()=>h,l$:()=>P,Xv:()=>E,k3:()=>S,CQ:()=>w,R8:()=>j,HN:()=>A,sH:()=>_,c7:()=>R,_7:()=>D,eF:()=>T,O6:()=>L,ED:()=>I,RP:()=>k,sF:()=>N,VP:()=>C,He:()=>M,vO:()=>x,WO:()=>G,bh:()=>Y,pV:()=>F,MK:()=>W,ZF:()=>V,tV:()=>z,Dv:()=>H,Yz:()=>Z,kI:()=>B,XG:()=>U,A4:()=>J,Rp:()=>X,$o:()=>$,ct:()=>K,oh:()=>q,$h:()=>Q,ud:()=>tt,Qr:()=>et,LR:()=>rt,nN:()=>nt,UG:()=>ot,F5:()=>it,c9:()=>ut,Jh:()=>ct,Xy:()=>at});var n="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",u="TOGGLE_NODE",c="CONTEXT_NODE",a="SORT_NODE",l="REMOVE_NODE",s="UPDATE_NODE",p="MOVE_NODE",f="LAYER_LOADING",y="LAYER_LOAD",d="LAYER_ERROR",b="ADD_LAYER",m="ADD_GROUP",v="REMOVE_LAYER",g="SHOW_SETTINGS",O="HIDE_SETTINGS",h="UPDATE_SETTINGS",P="REFRESH_LAYERS",E="LAYERS:UPDATE_LAYERS_DIMENSION",S="LAYERS_REFRESHED",w="LAYERS_REFRESH_ERROR",j="LAYERS:BROWSE_DATA",A="LAYERS:DOWNLOAD",_="LAYERS:CLEAR_LAYERS",R="LAYERS:SELECT_NODE",D="LAYERS:FILTER_LAYERS",T="LAYERS:SHOW_LAYER_METADATA",L="LAYERS:HIDE_LAYER_METADATA",I="LAYERS:UPDATE_SETTINGS_PARAMS";function k(t,e,r){return{type:g,node:t,nodeType:e,options:r}}function N(){return{type:O}}function C(t){return{type:h,options:t}}function M(t,e){return{type:n,newProperties:e,layer:t}}function x(t,e){return{type:o,layer:t,params:e}}function G(t,e){return{type:i,newProperties:e,group:t}}function Y(t,e,r){return{type:u,node:t,nodeType:e,status:!r}}function F(t){return{type:c,node:t}}function W(t,e){return{type:a,node:t,order:e,sortLayers:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}function V(t,e){return{type:l,node:t,nodeType:e,removeEmpty:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}function z(t,e,r){return{type:s,node:t,nodeType:e,options:r}}function H(t,e,r){return{type:p,node:t,groupId:e,index:r}}function Z(t){return{type:f,layerId:t}}function B(t,e){return{type:y,layerId:t,error:e}}function U(t,e,r){return{type:d,layerId:t,tilesCount:e,tilesErrorCount:r}}function J(t){return{type:b,layer:t,foreground:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function X(t,e,r){return{type:m,group:t,parent:e,options:r}}function $(t){return{type:v,layerId:t}}function K(t,e){return{type:n,layer:t,newProperties:{_v_:e||(new Date).getTime()}}}function q(t){return{type:S,layers:t}}function Q(t,e){return{type:w,layers:t,error:e}}function tt(t,e,r,n){return{type:E,dimension:t,value:e,options:r,layers:n}}function et(t){return{type:j,layer:t}}function rt(t){return{type:A,layer:t}}function nt(){return{type:_}}function ot(t,e,r){return{type:R,id:t,nodeType:e,ctrlKey:r}}function it(t){return{type:D,text:t}}function ut(t,e){return{type:T,metadataRecord:t,maskLoading:e}}function ct(){return{type:L}}function at(t,e){return{type:I,newParams:t,update:e}}},65539:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(24852),o=r.n(n);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){var n,o,u,c;n=t,o=e,u=r[e],c=function(t,e){if("object"!=i(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==i(c)?c:c+"")in n?Object.defineProperty(n,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):n[o]=u})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const a=function(t){var e=t.id,r=t.children,n=t.header,i=t.footer,u=t.columns,a=t.height,l=t.style,s=void 0===l?{}:l,p=t.className,f=t.bodyClassName,y=void 0===f?"ms2-border-layout-body":f;return o().createElement("div",{id:e,className:p,style:c({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},s)},n,o().createElement("div",{className:y,style:{display:"flex",flex:1,overflowY:"auto"}},o().createElement("main",{className:"ms2-border-layout-content",style:{flex:1,overflowX:"hidden"}},a?o().createElement("div",{style:{height:a}},r):r),a?o().createElement("div",{style:{height:a}},u):u),i)}},72839:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>Ot});var n=r(24852),o=r.n(n),i=r(75263),u=r.n(i),c=r(71703),a=r(67076),l=r(22222),s=r(15135),p=r(80681),f=r(1757),y=r(57579),d=r(13311),b=r.n(d),m=r(30998),v=r.n(m),g=r(89734),O=r.n(g);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function E(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){var n,o,i,u;n=t,o=e,i=r[e],u=function(t,e){if("object"!=h(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==h(u)?u:u+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var S=function(t){return!t.dataGrid||!t.dataGrid.static},w=(0,l.P1)(f.zm,f.YR,f.yZ,f.lF,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return O()(t.filter(S).map((function(t){return v()(e,(function(e){return e===t.id}))>=0?E(E({},t),{},{collapsed:!0}):t})),(function(t){var e=n[t.id]&&n[t.id].layout,o=b()(r,{i:t.id})||e||{},i=o.x,u=void 0===i?0:i,c=o.y;return 100*(void 0===c?0:c)+u}))})),j=r(10473),A=(0,a.compose)((0,a.defaultProps)({toolsOptions:{seeHidden:"user.role===ADMIN"}}),(0,j.Z)("toolsOptions",{asObject:!0}),(0,a.withProps)((function(t){var e=t.widgets,r=t.toolsOptions;return{widgets:(void 0===r?{seeHidden:!1}:r).seeHidden?e:e.filter((function(t){return!t.hide}))}}))),_=r(65539),R=r(80717);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function L(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){var n,o,i,u;n=t,o=e,i=r[e],u=function(t,e){if("object"!=D(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==D(u)?u:u+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.widgetType,r=t.type;switch(e&&"chart"!==e?e:r){case"text":return"sheet";case"table":return"features-grid";case"pie":return"pie-chart";case"groupedBar":return"groupedBar-chart";case"groupedLineMarker":return"groupedLineMarker-chart";case"overlaidArea":return"overlaidArea-chart";case"scatterChart":return"scatterChart-chart";case"bubbleChart":return"bubbleChart-chart";case"singleGauge":return"singleGauge-chart";case"donutChart":return"donutChart-chart";case"stackedBar":return"stackedBar-chart";case"horizontalStackedBar":return"horizontalStackedBar-chart";case"horizontalGroupedBar":return"horizontalGroupedBar-chart";case"line":return"1-line";case"map":return"1-map";case"gauge":return"gauge";case"counter":return"counter";default:return"stats"}};const k=(0,a.compose)((0,a.withPropsOnChange)(["btnGroupProps"],(function(t){var e=t.btnGroupProps;return{btnGroupProps:L(L({},e),{},{className:"widgets-bar"+(e&&e.className?" ".concat(e.className):"")})}})),(0,a.withPropsOnChange)(["widgets","onClick"],(function(t){var e=t.widgets,r=void 0===e?[]:e,n=t.onClick,o=void 0===n?function(){}:n;return{buttons:r.map((function(t){return{glyph:I(t),tooltip:t.title,className:t.collapsed?"btn-tray":"btn-tray active",onClick:function(){return o(t)}}}))}})))(R.Z);function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function M(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){var n,o,i,u;n=t,o=e,i=r[e],u=function(t,e){if("object"!=N(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=N(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==N(u)?u:u+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const x=(0,a.compose)((0,c.connect)((0,l.P1)(w,(function(t){return{widgets:t}})),{onClick:y.f}),(0,a.defaultProps)({btnGroupProps:{className:"widgets-toolbar",style:{marginLeft:2,marginRight:2}}}),A,(0,a.withProps)((function(t){var e=t.btnGroupProps,r=void 0===e?{}:e,n=t.btnDefaultProps,o=void 0===n?{}:n;return{btnGroupProps:M({bsSize:"xsmall"},r),btnDefaultProps:M({bsSize:"xsmall"},o||{})}})))(k);var G=r(38560),Y=r(55105),F=r(96259);function W(){return W=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},W.apply(this,arguments)}function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function z(t){return function(t){if(Array.isArray(t))return H(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,K(n.key),n)}}function B(t,e,r){return e=J(e),function(t,e){if(e&&("object"===V(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,U()?Reflect.construct(e,r||[],J(t).constructor):e.apply(t,r))}function U(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(U=function(){return!!t})()}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}function X(t,e){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},X(t,e)}function $(t,e,r){return(e=K(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function K(t){var e=function(t,e){if("object"!=V(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=V(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==V(e)?e:e+""}var q=(0,s.Z)(G.Z),Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.expanded,r=t.onClick,n=void 0===r?function(){}:r;return o().createElement(q,{tooltipId:e?"widgets.tray.collapseTray":"widgets.tray.expandTray",bsSize:"xsmall",bsStyle:"default",style:{borderColor:"transparent"},onClick:n},o().createElement(p.Glyphicon,{glyph:e?"chevron-right":"chevron-left"}))},tt=(0,a.compose)((0,c.connect)((0,l.P1)(f.E5,(function(){return{widgets:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}})),{onClick:function(){return(0,y.Ff)()}}),A,(0,a.withProps)((function(t){var e=t.widgets;return{shouldExpand:0===(void 0===e?[]:e).length}})))((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.onClick,r=void 0===e?function(){}:e,n=t.shouldExpand,i=void 0!==n&&n;return o().createElement(q,{tooltipId:i?"widgets.tray.expandAll":"widgets.tray.collapseAll",bsStyle:i?"primary":"success active",bsSize:"xsmall",onClick:r},o().createElement(p.Glyphicon,{glyph:"list"}))})),et=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),B(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&X(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){var t,e,r=this;return this.props.enabled?o().createElement("div",{className:"widgets-tray",style:{marginBottom:32,marginRight:(null!==(t=null===(e=this.props.layout)||void 0===e?void 0:e.right)&&void 0!==t?t:0)+65,bottom:0,right:0,position:"absolute"}},o().createElement(_.Z,{columns:[].concat(z(this.props.isSingleWidgetLayout?[]:[o().createElement(Q,{key:"collapse-tray",toolsOptions:this.props.toolsOptions,expanded:this.props.expanded,onClick:function(){return r.props.setExpanded(!r.props.expanded)}})]),[o().createElement(tt,{key:"collapse-all",toolsOptions:this.props.toolsOptions})],z(this.props.items.map((function(t){return t.tool}))||[]))},this.props.expanded&&!this.props.isSingleWidgetLayout?o().createElement(x,{toolsOptions:this.props.toolsOptions}):null)):null}}])&&Z(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);$(et,"propTypes",{enabled:u().bool,toolsOptions:u().object,items:u().array,expanded:u().bool,setExpanded:u().func,layout:u().object,isSingleWidgetLayout:u().bool}),$(et,"defaultProps",{enabled:!0,items:[],expanded:!1,setExpanded:function(){},layout:{}});const rt=(0,a.compose)((function(t){return function(e){return o().createElement(F.Z,{handleWidth:!0},(function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.width,i=r.height;return o().createElement(t,W({},e,{width:n,height:i}))}))}}),(0,a.withState)("expanded","setExpanded",!1),(0,c.connect)((0,l.P1)(w,(function(t){return t.browser&&t.browser.mobile}),(function(t){return(0,Y.ic)(t,{right:!0})}),(function(t,e){return{widgets:t,layout:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],isMobileAgent:e}})),{toggleTray:y.ep}),A,(0,a.withProps)((function(t){var e=t.widgets,r=void 0===e?[]:e;return{hasCollapsedWidgets:r.filter((function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).collapsed})).length>0,hasTrayWidgets:r.length>0}})),(0,a.withProps)((function(t){var e=t.isMobileAgent,r=t.width,n=t.singleWidgetLayoutBreakpoint;return{isSingleWidgetLayout:e||r<=(void 0===n?1024:n)}})),(0,a.lifecycle)({componentDidMount:function(){this.props.toggleTray&&this.props.toggleTray(!0)},componentWillUnmount:function(){this.props.toggleTray&&this.props.toggleTray(!1)}}),(0,a.mapPropsStream)((function(t){return t.merge(t.distinctUntilKeyChanged("hasCollapsedWidgets").do((function(t){var e=t.setExpanded;return(void 0===e?function(){}:e)(t.hasCollapsedWidgets)})).ignoreElements())})),(0,a.withProps)((function(t){var e=t.enabled,r=t.hasTrayWidgets;return{enabled:e&&r}})))(et);var nt=r(54414),ot=r(49977),it=r.n(ot),ut=r(27361),ct=r.n(ut),at=r(57676),lt=r(81808),st=r(97395),pt=r(80416),ft=r(97291);function yt(t){return yt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yt(t)}function dt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function bt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?dt(Object(r),!0).forEach((function(e){var n,o,i,u;n=t,o=e,i=r[e],u=function(t,e){if("object"!=yt(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=yt(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==yt(u)?u:u+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):dt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var mt=function(t){return((0,f.E5)(t)||[]).filter((function(t){return!ct()(t,"dataGrid.static")})).length>0},vt=function(t){return function(e){return e.take(1).switchMap((function(){return it().Observable.of((0,st.um)(bt(bt({},t),{},{autoDismiss:8,position:"tr",uid:"timeline-collapsed"})))})).merge(e)}};const gt={collapseTimelineOnWidgetsEvents:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===e?function(){}:e;return it().Observable.merge(t.ofType(y.Ym,y.uU,lt.ok,y.$A,y.Jm).filter((function(){return mt(r())&&(0,ft.pn)(r())}))).switchMap((function(){return it().Observable.of((0,at.w2)(!0))})).let(vt({title:"widgets.tray.notifications.collapsed.timelineTitle",message:"widgets.tray.notifications.collapsed.message"}))},collapseWidgetsOnTimelineEvents:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===e?function(){}:e;return it().Observable.merge(t.ofType(at.M5).filter((function(t){return!t.collapsed})),t.ofType(pt.yS).filter((function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).newProperties;return(void 0===t?{}:t).dimensions}))).filter((function(){return mt(r())&&(0,ft.qJ)(r())&&(0,ft.pn)(r())})).switchMap((function(){return it().Observable.of((0,y.Ff)())})).let(vt({title:"widgets.tray.notifications.collapsed.widgetsTitle",message:"widgets.tray.notifications.collapsed.message"}))},expandTimelineIfCollapsedOnTrayUnmount:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===e?function(){}:e;return t.ofType(y.yY,y.$A,lt.ok).filter((function(){return!(0,ft.pn)(r())&&(0,ft.qJ)(r())})).filter((function(){return!mt(r())})).switchMap((function(){return it().Observable.of((0,at.w2)(!1))}))}},Ot={WidgetsTrayPlugin:(0,nt.Z)(rt),epics:gt}},54414:(t,e,r)=>{"use strict";r.d(e,{Z:()=>c});var n=r(22222),o=r(71703),i=r(55105),u=r(93152);const c=(0,o.connect)((0,n.P1)(i.Jz,i.VM,u.c0,(function(t,e,r){return{enabled:!t&&!e&&!r}})))},10473:(t,e,r)=>{"use strict";r.d(e,{Z:()=>P});var n=r(67076),o=r(71703),i=r(22222),u=r(827),c=r(74621),a=r(27361),l=r.n(a),s=r(84596),p=r.n(s),f=r(66604),y=r.n(f),d=r(47037),b=r.n(d),m=r(1469),v=r.n(m);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}var O=function t(e){var r=e.accessInfo,n=e.postProcessValue,o=e.reduceFun;return function(e){var i=p()(e),u=o;return i.length>1&&"__OR__"===i[0]&&(u=function(t,e){return t||e},i=i.slice(1)),i.map((function(e){var i=e;if(v()(i))return t({accessInfo:r,postProcessValue:n,reduceFun:o})(i);var u=!1;i&&b()(i)&&i.startsWith("!")&&(u=!0,i=i.substr(1));var c=function(t){return u?!t:t},a=b()(i)&&i.split(":");if(a&&a[0]){var s=a[0].split(/\!\=\=?/),p=a[0].split(/\=\=?\=?/);return s.length>1?c(n(l()(r,s[0]),i)!==s[1]):p.length>1?c(n(l()(r,p[0]),i)===p[1]):c(n(l()(r,a[0]),i))}return i})).reduce(u||function(t,e){return t&&e})}};const h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.asObject,o=void 0!==r&&r,i=e.postProcessValue,u=void 0===i?function(t){return t}:i,c=e.reduceFun,a=e.accessInfo,l=void 0===a?"accessInfo":a;return(0,n.withPropsOnChange)([t,l],(function(){var e,r,n,i,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e={},r=t,n=o?y()(a[t],O({accessInfo:a[l],postProcessValue:u,reduceFun:c})):O({accessInfo:a[l],postProcessValue:u,reduceFun:c})(a[t]),i=function(t,e){if("object"!=g(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r),(r="symbol"==g(i)?i:i+"")in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}))},P=function(){return(0,n.compose)((0,o.connect)((0,i.P1)(u.J9,u._H,c.np,(function(t,e,r){return{accessInfo:{mapId:t,mapInfo:e,user:r}}}))),h.apply(void 0,arguments))}},55105:(t,e,r)=>{"use strict";r.d(e,{Ss:()=>d,Nr:()=>b,ic:()=>v,Jz:()=>g,VM:()=>O,CF:()=>h,Ju:()=>P});var n=r(91175),o=r.n(n),i=r(88306),u=r.n(i),c=r(827),a=r(52259),l=r(37275);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){var n;return n=function(t,e){if("object"!=s(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==s(n)?n:n+"")in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(t){return t.maplayout&&t.maplayout.layout||{}},b=function(t){return t.maplayout&&t.maplayout.boundingMapRect||{}},m=function(t){return t.maplayout&&t.maplayout.boundingSidebarRect||{}},v=u()((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=d(t),o=m(t);return n&&Object.keys(n).filter((function(t){return e[t]})).reduce((function(t,e){var i;return f(f({},t),{},y({},e,r&&null!==(i=o[e])&&void 0!==i?i:n[e]))}),{})||{}}),(function(t,e,r){return JSON.stringify(d(t))+JSON.stringify(m(t))+JSON.stringify(e)+(r?"_isDock":"")})),g=function(t){var e;return!(null===(e=d(t))||void 0===e||!e.rightPanel)},O=function(t){var e,r=l.ZP.getConfigProp("mapLayout")||a.DEFAULT_MAP_LAYOUT;return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=d(t);return!!o()(e.filter((function(t){return r[t.key]})).map((function(t){return"not"===t.type?r[t.key]!==t.value&&r[t.key]:r[t.key]===t.value})))}(t,[{key:"bottom",value:null!==(e=null==r?void 0:r.bottom.sm)&&void 0!==e?e:0,type:"not"}])},h=function(t){var e=(0,c.Od)(t),r=b(t);return r&&e&&e.size&&{left:(0,a.parseLayoutValue)(r.left,e.size.width),bottom:(0,a.parseLayoutValue)(r.bottom,e.size.height),right:(0,a.parseLayoutValue)(r.right,e.size.width),top:(0,a.parseLayoutValue)(r.top,e.size.height)}},P=function(t){var e,r;return null!==(e=null==t||null===(r=t.maplayout)||void 0===r?void 0:r.dockPanels)&&void 0!==e?e:{left:[],right:[]}}},74621:(t,e,r)=>{"use strict";r.d(e,{np:()=>n,L3:()=>o,jl:()=>i,y8:()=>u,qg:()=>c}),r(27418),r(27361);var n=function(t){return t&&t.security&&t.security.user},o=function(t){return n(t)&&n(t).role},i=function(t){return t&&t.security&&t.security.user},u=function(t){return t.security&&t.security.token},c=function(t){return"ADMIN"===o(t)}},87157:(t,e,r)=>{var n=r(40554),o=r(88958);t.exports=function(t,e,r,i){var u=t.length;for((r=n(r))<0&&(r=-r>u?0:u+r),(i=void 0===i||i>u?u:n(i))<0&&(i+=u),i=r>i?0:o(i);r<i;)t[r++]=e;return t}},89179:(t,e,r)=>{var n=r(55639),o=r(40554),i=r(14841),u=r(79833),c=n.isFinite,a=Math.min;t.exports=function(t){var e=Math[t];return function(t,r){if(t=i(t),(r=null==r?0:a(o(r),292))&&c(t)){var n=(u(t)+"e").split("e"),l=e(n[0]+"e"+(+n[1]+r));return+((n=(u(l)+"e").split("e"))[0]+"e"+(+n[1]-r))}return e(t)}}},19873:(t,e,r)=>{var n=r(87157),o=r(16612);t.exports=function(t,e,r,i){var u=null==t?0:t.length;return u?(r&&"number"!=typeof r&&o(t,e,r)&&(r=0,i=u),n(t,e,r,i)):[]}},59854:(t,e,r)=>{var n=r(89179)("round");t.exports=n},88958:(t,e,r)=>{var n=r(29750),o=r(40554);t.exports=function(t){return t?n(o(t),0,4294967295):0}},19081:(t,e,r)=>{"use strict";t.exports=r(22822)}}]);