(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[16164,888],{807472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(727418),o=n.n(r),i=n(45697),l=n.n(i),a=n(124852),c=n.n(a),s=n(485294),u=n.n(s),d=n(472986),p=n.n(d),f=n(805346);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,S(r.key),r)}}function O(e,t,n){return t=g(t),function(e,t){if(t&&("object"==E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,b()?Reflect.construct(t,n||[],g(e).constructor):t.apply(e,n))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function R(e,t,n){return(t=S(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){var t=function(e,t){if("object"!=E(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==E(t)?t:t+""}var N=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return R(e=O(this,t,[].concat(r)),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(f.Z,{msgId:"loading"}),c().createElement(p(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),R(e,"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),R(e,"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),R(e,"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:v({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),n=this.props.draggable?c().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&y(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(c().Component);R(N,"propTypes",{id:l().string.isRequired,style:l().object,backgroundStyle:l().object,className:l().string,maskLoading:l().bool,containerClassName:l().string,headerClassName:l().string,bodyClassName:l().string,footerClassName:l().string,onClickOut:l().func,modal:l().bool,start:l().object,draggable:l().bool,bounds:l().oneOfType([l().string,l().object])}),R(N,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const _=N},532425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(45697),o=n.n(r),i=n(124852),l=n.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,n=e.style,r=void 0===n?{}:n,o=e.className,i=e.hidden;return l().createElement("div",{className:o,style:s({width:t,height:t,overflow:"hidden"},r)},!i&&l().createElement("div",{className:"mapstore-".concat(d(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const f=p},975480:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(124852),o=n.n(r);const i=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:t,className:"mapstore-inline-loader"})}},694745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(124852),o=n.n(r),i=n(294184),l=n.n(i),a=n(480681),c=n(807472),s=n(80717),u=n(867076),d=n(819081),p=n.n(d),f=n(975480),E={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},m={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const v=(0,u.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,i=e.loadingText,u=e.onClose,d=void 0===u?function(){}:u,v=e.title,y=void 0===v?"":v,O=e.clickOutEnabled,b=void 0===O||O,g=e.showClose,h=void 0===g||g,R=e.disabledClose,S=void 0!==R&&R,N=e.showFullscreen,_=void 0!==N&&N,C=e.fullscreenType,w=void 0===C?"full":C,P=e.buttons,T=void 0===P?[]:P,j=e.size,D=void 0===j?"":j,I=e.bodyClassName,k=void 0===I?"":I,U=e.children,G=e.draggable,L=void 0!==G&&G,A=e.fullscreenState,x=e.onFullscreen,Z=e.fade,z=void 0!==Z&&Z,M=e.fitContent,V=e.modalClassName,B=void 0===V?"":V,F=e.dialogClassName,K=void 0===F?"":F,W=e.enableFooter,H=void 0===W||W,Q=E[D]||"",Y=_&&"expanded"===A&&m.className[w]||"",X=n?o().createElement("div",{className:"modal-fixed ".concat(B," ")+(L?"ms-draggable":"")},o().createElement(c.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:b?d:function(){},containerClassName:"ms-resizable-modal",draggable:L,modal:!0,className:l()("modal-dialog modal-content",Q,Y,K,{"ms-fit-content":M})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},y),_&&m.className[w]&&o().createElement(a.gG,{className:"ms-header-btn",onClick:function(){return x("expanded"===A?"collapsed":"expanded")},glyph:m.glyph[A][w]}),h&&d&&o().createElement(a.gG,{glyph:"1-close",className:"ms-header-btn",onClick:d,disabled:S}))),o().createElement("div",{role:"body",className:k},U),H&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(f.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?i:null),o().createElement(s.Z,{buttons:T})))):null;return z?o().createElement(p(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},X):X}))},212610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(124852),o=n.n(r),i=n(867076),l=n(957557),a=n.n(l),c=n(815135);const s=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,n=e.noTooltipWhenDisabled;return!(void 0!==n&&n&&t)}),c.Z,(function(e){return function(t){return o().createElement(e,a()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},617252:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(124852),o=n.n(r),i=n(867076),l=n(45697),a=n.n(l),c=n(957557),s=n.n(c),u=n(480681),d=n(950966);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function E(e,t,n){return t=v(t),function(e,t){if(t&&("object"==p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,m()?Reflect.construct(t,n||[],v(e).constructor):t.apply(e,n))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function O(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}const g=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),E(this,n,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(n,t),r=n,(l=[{key:"renderPopover",value:function(){return o().createElement(u.J2,s()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,s()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(d.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&f(r.prototype,l),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,l}(o().Component),O(t,"propTypes",{popover:a().object}),O(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(124852),o=n.n(r),i=n(819081),l=n.n(i),a=n(480681),c=n(90085),s=["visible","Element","renderButton"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(null,arguments)}const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,n=void 0===t?[]:t,r=e.btnGroupProps,i=void 0===r?{}:r,d=e.btnDefaultProps,p=void 0===d?{}:d,f=e.transitionProps,E=void 0===f?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:f,m=function(){return n.map((function(e,t){var n=e.visible,r=void 0===n||n,i=e.Element,l=e.renderButton,a=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,s);return r?l||i&&o().createElement(i,u({key:a.key||t},a))||o().createElement(c.Z,u({key:a.key||t},p,a)):null}))};return o().createElement(a.hE,i,E?o().createElement(l(),E,m()):m())}},90085:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(124852),o=n.n(r),i=n(867076),l=n(805346),a=n(957557),c=n.n(a),s=n(480681),u=n(532425),d=n(212610),p=n(617252),f=n(38560),E=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(null,arguments)}const v=(0,i.compose)(d.Z,p.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,n=e.loading,r=e.text,i=void 0===r?"":r,a=e.textId,d=e.glyphClassName,p=void 0===d?"":d,v=e.loaderProps,y=void 0===v?{}:v,O=e.children,b=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,E);return o().createElement(f.Z,c()(b,["pullRight","confirmNo","confirmYes"]),t&&!n?o().createElement(s.gG,{glyph:t,className:p}):null,a?o().createElement(l.Z,{msgId:a}):i,n?o().createElement(u.Z,m({className:"ms-loader".concat(b.bsStyle&&" ms-loader-"+b.bsStyle||"").concat(b.bsSize&&" ms-loader-"+b.bsSize||"")},y)):null,O)}))},643892:(e,t,n)=>{"use strict";n.d(t,{W:()=>r,Zf:()=>o,Eu:()=>i,Vy:()=>l,YB:()=>a,xm:()=>c,_f:()=>s,ek:()=>u,cd:()=>d,pt:()=>p,ww:()=>f,tR:()=>E,Js:()=>m,p2:()=>v,ZH:()=>y,eQ:()=>O,ql:()=>b,$X:()=>g,nS:()=>h,ih:()=>R,J5:()=>S,uA:()=>N,Pv:()=>_,_Z:()=>C,dh:()=>w,IH:()=>P,e3:()=>T,Oq:()=>j,Y0:()=>D,sA:()=>I,ip:()=>k,li:()=>U,F_:()=>G,pG:()=>L,Q$:()=>A,DF:()=>x,id:()=>Z,Br:()=>z,bI:()=>M,U5:()=>V,e5:()=>B,b3:()=>F,mN:()=>K,QN:()=>W,HV:()=>H,xe:()=>Q,vA:()=>Y,gw:()=>X,qs:()=>q,CB:()=>J,vg:()=>$,Z0:()=>ee,lf:()=>te,jQ:()=>ne,nk:()=>re,X7:()=>oe,nO:()=>ie,F4:()=>le,EU:()=>ae,Rk:()=>ce,V1:()=>se,rg:()=>ue,v6:()=>de,d7:()=>pe,Rx:()=>fe,as:()=>Ee,iL:()=>me});var r="GEONODE:RESOURCE_LOADING",o="GEONODE:SET_RESOURCE",i="GEONODE:RESOURCE_ERROR",l="GEONODE:UPDATE_RESOURCE_PROPERTIES",a="GEONODE:SET_RESOURCE_TYPE",c="GEONODE:SET_NEW_RESOURCE",s="GEONODE:SET_RESOURCE_ID",u="GEONODE:SET_RESOURCE_PERMISSIONS",d="GEONODE:EDIT_TITLE_RESOURCE",p="GEONODE:EDIT_ABSTRACT_RESOURCE",f="GEONODE:EDIT_THUMBNAIL_RESOURCE",E="GEONODE:SET_FAVORITE_RESOURCE",m="GEONODE:SET_MAP_THUMBNAIL",v="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",y="GEONODE:REQUEST_RESOURCE_CONFIG",O="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",b="GEONODE:LOADING_RESOURCE_CONFIG",g="GEONODE:RESET_RESOURCE_STATE",h="GEONODE:RESOURCE_CONFIG_ERROR",R="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",S="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",N="GEONODE:RESET_GEO_LIMITS",_="GEONODE:PROCESS_RESOURCES",C="GEONODE_SET_RESOURCE_THUMBNAIL",w="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",P="GEONODE_DOWNLOAD_RESOURCE",T="GEONODE_DOWNLOAD_COMPLETE",j="GEONODE_UPDATE_SINGLE_RESOURCE",D="GEONODE_SET_RESOURCE_EXTENT",I="GEONODE:SET_RESOURCE_PATH_PARAMETERS",k="GEONODE:SET_MAP_VIEWER_LINKED_RESOURCE",U="GEONODE:MANAGE_LINKED_RESOURCE",G="GEONODE:SET_DEFAULT_VIEWER_PLUGINS",L="GEONODE:SET_SELECTED_LAYER_DATASET";function A(){return{type:r}}function x(e,t){return{type:o,data:e,pending:t}}function Z(e){return{type:j,data:e}}function z(e){return{type:d,title:e}}function M(e){return{type:p,abstract:e}}function V(e){return{type:f,thumbnailUrl:e,thumbnailChanged:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false"}}function B(){return{type:C}}function F(e){return{type:a,resourceType:e}}function K(e){return{type:i,error:e}}function W(e){return{type:l,properties:e}}function H(){return{type:c}}function Q(e){return{type:s,id:e}}function Y(e){return{type:v,permissions:e}}function X(e){return{type:E,favorite:e}}function q(e){return{type:w,enabled:e}}function J(e){return{type:m,bbox:e}}function $(e,t,n){return{type:y,resourceType:e,pk:t,options:n}}function ee(e,t){return{type:O,resourceType:e,options:t}}function te(e){return{type:b,loading:e}}function ne(e){return{type:h,message:e}}function re(){return{type:g}}function oe(e){return{type:R,compactPermissions:e}}function ie(e){return{type:S,compactPermissions:e}}function le(){return{type:N}}function ae(e,t,n){return{type:_,processType:e,resources:t,redirectTo:n}}function ce(e){return{type:P,resource:e}}function se(e){return{type:T,resource:e}}function ue(e){return{type:D,coords:e}}function de(e){return{type:I,params:e}}function pe(e){return{type:U,payload:e}}function fe(e){return{type:k,resource:e}}function Ee(e){return{type:G,plugins:e}}function me(e){return{type:L,layer:e}}},53645:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var r=n(124852),o=n.n(r),i=n(171703),l=n(441609),a=n.n(l),c=n(22222),s=n(303744),u=n(322843),d=n(643892),p=n(805346),f=n(532425),E=n(535721),m=n(694745),v=n(399534),y=n(621886),O=n(12530),b=n(782904),g=n(17594),h=n(482100),R=["hide","loading","labelId","showLoader"],S=["linkedResources"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(null,arguments)}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var C=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).resourceType;return e?o().createElement("div",{className:"gn-resource-delete-warning"},o().createElement(g.Z,{className:"warning",name:"warning"}),"  ",o().createElement(p.Z,{msgId:"gnviewer.linkedResource.deleteAndUnlinkWarning.".concat(e)})):null},w=(0,i.connect)((0,c.P1)([function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[O.zj.REMOVE_LINKED_RESOURCE])||void 0===n?void 0:n.value},function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[O.zj.REMOVE_LINKED_RESOURCE])||void 0===n?void 0:n.loading},h.yK],(function(e,t,n){var r;return{resources:null!==(r=null==e?void 0:e.resources)&&void 0!==r?r:[],resourceType:null==e?void 0:e.resourceType,enabled:!a()(null==e?void 0:e.resources),loading:t,source:null==n?void 0:n.pk}})),{onRemove:d.d7,onDelete:d.EU.bind(null,O.zj.REMOVE_LINKED_RESOURCE),onClose:b.Xg.bind(null,O.zj.REMOVE_LINKED_RESOURCE,"value",void 0)})((function(e){var t=e.enabled,n=e.resources,r=void 0===n?[]:n,i=e.onClose,l=void 0===i?function(){}:i,c=e.onDelete,s=void 0===c?function(){}:c,u=e.onRemove,d=void 0===u?function(){}:u,E=e.loading,b=e.resourceType,g=e.source,h=function(){var e=r.map((function(e){return null==e?void 0:e.pk}));a()(g)||a()(e)||!b||d({resourceType:b,source:g,target:e,processType:O.zj.REMOVE_LINKED_RESOURCE})};return o().createElement(v.Z,null,o().createElement(m.Z,{title:o().createElement(p.Z,{msgId:"gnviewer.linkedResource.deleteTitle",msgParams:{count:r.length}}),show:t,fitContent:!0,clickOutEnabled:!1,modalClassName:"gn-simple-dialog",buttons:E?[]:[{text:o().createElement(p.Z,{msgId:"gnviewer.deleteResourceNo",msgParams:{count:r.length}}),onClick:function(){h(),l()}},{text:o().createElement(p.Z,{msgId:"gnviewer.deleteResourceYes",msgParams:{count:r.length}}),bsStyle:"danger",onClick:function(){h(),s(r)}}],onClose:E?null:function(){return l()}},o().createElement("ul",{className:"gn-card-grid",style:{listStyleType:"none",padding:"0.5rem",margin:0}},r.map((function(e,t){return o().createElement("li",{style:{padding:"0.25rem 0"},key:e.pk+"-"+t},o().createElement(y.Z,{data:e,layoutCardsStyle:"list",readOnly:!0}))}))),o().createElement(C,{resourceType:b}),E&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(f.Z,{size:70}))))})),P=function(e){var t=e.hide,n=e.loading,r=e.labelId,i=e.showLoader,l=_(e,R);return t?null:o().createElement(s.Z,N({},l,{disabled:n,style:{display:"flex",alignItems:"center",gap:10}}),o().createElement(p.Z,{msgId:null!=r?r:"gnviewer.linkedResource.remove"}),n&&i&&o().createElement(f.Z,{size:12}))},T=(0,i.connect)((function(e){var t,n,r,o;return{loading:null==e||null===(t=e.controls)||void 0===t||null===(n=t[O.zj.REMOVE_LINKED_RESOURCE])||void 0===n?void 0:n.loading,viewerLinkedResource:null==e||null===(r=e.gnresource)||void 0===r?void 0:r.viewerLinkedResource,resource:null==e||null===(o=e.gnresource)||void 0===o?void 0:o.data}}),{onRemove:d.d7,onDelete:b.Xg.bind(null,O.zj.REMOVE_LINKED_RESOURCE,"value")})((function(e){var t,n,r=E.P6.VIEWER,i=null!==(t=e.viewerLinkedResource)&&void 0!==t?t:{},l=i.linkedResources,c=_(i,S),s=1===(null==l||null===(n=l.linkedBy)||void 0===n?void 0:n.length);return o().createElement(P,N({},e,{showLoader:!s,onClick:function(){if(s)e.onDelete({resources:[c],resourceType:r});else{var t,n=null===(t=e.resource)||void 0===t?void 0:t.pk,o=null==c?void 0:c.pk;a()(n)||a()(o)||!r||e.onRemove({resourceType:r,source:n,target:o,processType:O.zj.REMOVE_LINKED_RESOURCE})}},labelId:"gnviewer.removeViewerConfiguration"}))})),j=(0,i.connect)((function(e){var t,n,r,o;return{loading:null==e||null===(t=e.controls)||void 0===t||null===(n=t[O.zj.REMOVE_LINKED_RESOURCE])||void 0===n?void 0:n.loading,resourceParams:null==e||null===(r=e.gnresource)||void 0===r?void 0:r.params,resource:null==e||null===(o=e.gnresource)||void 0===o?void 0:o.data}}),{})((function(e){var t,n;return o().createElement(P,N({},e,{href:"#/viewer/"+(null===(t=e.resourceParams)||void 0===t?void 0:t.appPk)+"/map/"+(null===(n=e.resource)||void 0===n?void 0:n.pk),labelId:"gnviewer.editViewerConfiguration"}))}));const D=(0,u.rx)("MapViewerConfiguration",{component:w,containers:{ActionNavbar:[{name:"RemoveMapViewer",Component:T},{name:"EditMapViewer",Component:j}]},epics:{},reducers:{}})},580760:(e,t,n)=>{var r=n(989881);e.exports=function(e,t){var n=[];return r(e,(function(e,r,o){t(e,r,o)&&n.push(e)})),n}},763105:(e,t,n)=>{var r=n(234963),o=n(580760),i=n(267206),l=n(701469);e.exports=function(e,t){return(l(e)?r:o)(e,i(t,3))}},313880:(e,t,n)=>{var r=n(479833);e.exports=function(){var e=arguments,t=r(e[0]);return e.length<3?t:t.replace(e[1],e[2])}}}]);