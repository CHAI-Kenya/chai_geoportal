(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[41103,47310],{921914:(e,t,r)=>{"use strict";r.d(t,{XL:()=>o,km:()=>i,Ih:()=>a,Xw:()=>l,Pn:()=>c,DZ:()=>u,e8:()=>s,E0:()=>f,F9:()=>p,X_:()=>d,pb:()=>m,Re:()=>y,ih:()=>v,xy:()=>b,jL:()=>g,oz:()=>E,ph:()=>h,lF:()=>O,gG:()=>P,cb:()=>j,GI:()=>w,B1:()=>S,fv:()=>C,gc:()=>I,zX:()=>N,ZF:()=>_,Zb:()=>T,DW:()=>R,Xp:()=>D,Fm:()=>k,sV:()=>A,LU:()=>Z,XP:()=>F,WU:()=>z,mK:()=>G,g:()=>x,ws:()=>U,HP:()=>L,aN:()=>M,Pg:()=>H,u0:()=>q,TM:()=>W,PM:()=>X,lK:()=>B,sv:()=>K,MO:()=>$,oO:()=>V,Mc:()=>J,Zw:()=>Q,RA:()=>ee,am:()=>te,ZM:()=>re,wm:()=>ne,Y$:()=>oe,Qu:()=>ie,kT:()=>ae});var n=r(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",l="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",u="PURGE_MAPINFO_RESULTS",s="CHANGE_MAPINFO_FORMAT",f="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",d="SHOW_REVERSE_GEOCODE",m="HIDE_REVERSE_GEOCODE",y="NO_QUERYABLE_LAYERS",v="CLEAR_WARNING",b="FEATURE_INFO_CLICK",g="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",E="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",h="TOGGLE_MAPINFO_STATE",O="UPDATE_CENTER_TO_MARKER",P="IDENTIFY:CHANGE_PAGE",j="IDENTIFY:CLOSE_IDENTIFY",w="IDENTIFY:CHANGE_FORMAT",S="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",C="IDENTIFY:EDIT_LAYER_FEATURES",I="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",N="IDENTIFY:SET_MAP_TRIGGER",_="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",T="IDENTIFY:SET_SHOW_IN_MAP_POPUP",R="IDENTIFY:IDENTIFY_IS_MOUNTED",D="IDENTIFY:INIT_PLUGIN";function k(e,t,r,n,i){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:i}}function A(e,t,r,n){return{type:i,error:t,reqId:e,requestParams:r,layerMetadata:n}}function Z(){return{type:y}}function F(){return{type:v}}function z(e,t){return{type:c,reqId:e,request:t}}function G(e){return{type:l,enabled:e}}function x(){return{type:u}}function U(e){return{type:s,infoFormat:e}}function L(){return{type:f}}function M(){return{type:p}}function Y(e){return{type:d,reverseGeocodeData:e.data}}function H(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(Y(e))})).catch((function(e){t(Y(e))}))}}function q(){return{type:m}}function W(){return{type:h}}function X(e){return{type:O,status:e}}function B(e,t){return{type:b,point:e,layer:t,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null}}function K(e){return{type:g,point:e}}function $(e){return{type:E,enabled:e}}function V(e){return{type:P,index:e}}var J=function(){return{type:j}},Q=function(e){return{type:w,format:e}},ee=function(e){return{type:S,showCoordinateEditor:e}},te=function(e){return{type:C,layer:e}},re=function(e){return{type:I,query:e}},ne=function(e){return{type:N,trigger:e}},oe=function(e){return{type:T,value:e}},ie=function(e){return{type:R,isMounted:e}},ae=function(e){return{type:D,cfg:e}}},647310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(375875),o=r.n(n),i=r(472500),a=r.n(i),l=r(727418),c=r.n(l),u={format:"json",bounded:0,polygon_geojson:1,priority:5};const s={geocode:function(e,t){var r=c()({q:e},u,t||{}),n=a().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=c()({lat:e.lat,lon:e.lng},t||{},u),n=a().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},807472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var n=r(727418),o=r.n(n),i=r(45697),a=r.n(i),l=r(124852),c=r.n(l),u=r(485294),s=r.n(u),f=r(472986),p=r.n(f),d=r(805346);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,j(n.key),n)}}function g(e,t,r){return t=h(t),function(e,t){if(t&&("object"==m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,E()?Reflect.construct(t,r||[],h(e).constructor):t.apply(e,r))}function E(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(E=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function P(e,t,r){return(t=j(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){var t=function(e){if("object"!=m(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}var w=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return P(e=g(this,t,[].concat(n)),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(d.Z,{msgId:"loading"}),c().createElement(p(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),P(e,"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),P(e,"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),P(e,"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:v({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),r=this.props.draggable?c().createElement(s(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&b(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(c().Component);P(w,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),P(w,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const S=w},532425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(45697),o=r.n(n),i=r(124852),a=r.n(i);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e){if("object"!=l(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return a().createElement("div",{className:o,style:u({width:t,height:t,overflow:"hidden"},n)},!i&&a().createElement("div",{className:"mapstore-".concat(f(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const d=p},975480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(124852),o=r.n(n);const i=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:t,className:"mapstore-inline-loader"})}},694745:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(294184),a=r.n(i),l=r(480681),c=r(807472),u=r(80717),s=r(867076),f=r(819081),p=r.n(f),d=r(975480),m={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},y={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const v=(0,s.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,r=void 0!==t&&t,n=e.loading,i=e.loadingText,s=e.onClose,f=void 0===s?function(){}:s,v=e.title,b=void 0===v?"":v,g=e.clickOutEnabled,E=void 0===g||g,h=e.showClose,O=void 0===h||h,P=e.disabledClose,j=void 0!==P&&P,w=e.showFullscreen,S=void 0!==w&&w,C=e.fullscreenType,I=void 0===C?"full":C,N=e.buttons,_=void 0===N?[]:N,T=e.size,R=void 0===T?"":T,D=e.bodyClassName,k=void 0===D?"":D,A=e.children,Z=e.draggable,F=void 0!==Z&&Z,z=e.fullscreenState,G=e.onFullscreen,x=e.fade,U=void 0!==x&&x,L=e.fitContent,M=e.modalClassName,Y=void 0===M?"":M,H=e.dialogClassName,q=void 0===H?"":H,W=e.enableFooter,X=void 0===W||W,B=m[R]||"",K=S&&"expanded"===z&&y.className[I]||"",$=r?o().createElement("div",{className:"modal-fixed ".concat(Y," ")+(F?"ms-draggable":"")},o().createElement(c.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:E?f:function(){},containerClassName:"ms-resizable-modal",draggable:F,modal:!0,className:a()("modal-dialog modal-content",B,K,q,{"ms-fit-content":L})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},b),S&&y.className[I]&&o().createElement(l.gG,{className:"ms-header-btn",onClick:function(){return G("expanded"===z?"collapsed":"expanded")},glyph:y.glyph[z][I]}),O&&f&&o().createElement(l.gG,{glyph:"1-close",className:"ms-header-btn",onClick:f,disabled:j}))),o().createElement("div",{role:"body",className:k},A),X&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},n?o().createElement(d.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},n?i:null),o().createElement(u.Z,{buttons:_})))):null;return U?o().createElement(p(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},$):$}))},212610:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(124852),o=r.n(n),i=r(867076),a=r(957557),l=r.n(a),c=r(815135);const u=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,r=e.noTooltipWhenDisabled;return!(void 0!==r&&r&&t)}),c.Z,(function(e){return function(t){return o().createElement(e,l()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},617252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(124852),o=r.n(n),i=r(867076),a=r(45697),l=r.n(a),c=r(957557),u=r.n(c),s=r(480681),f=r(950966);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,E(n.key),n)}}function m(e,t,r){return t=v(t),function(e,t){if(t&&("object"==p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,r||[],v(e).constructor):t.apply(e,r))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function g(e,t,r){return(t=E(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e){var t=function(e){if("object"!=p(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}const h=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),m(this,r,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(r,t),n=r,(a=[{key:"renderPopover",value:function(){return o().createElement(s.J2,u()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,u()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(f.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&d(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,a}(o().Component),g(t,"propTypes",{popover:l().object}),g(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(124852),o=r.n(n),i=r(819081),a=r.n(i),l=r(480681),c=r(90085),u=["visible","Element","renderButton"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(null,arguments)}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,r=void 0===t?[]:t,n=e.btnGroupProps,i=void 0===n?{}:n,f=e.btnDefaultProps,p=void 0===f?{}:f,d=e.transitionProps,m=void 0===d?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:d,y=function(){return r.map((function(e,t){var r=e.visible,n=void 0===r||r,i=e.Element,a=e.renderButton,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,u);return n?a||i&&o().createElement(i,s({key:l.key||t},l))||o().createElement(c.Z,s({key:l.key||t},p,l)):null}))};return o().createElement(l.hE,i,m?o().createElement(a(),m,y()):y())}},90085:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(867076),a=r(805346),l=r(957557),c=r.n(l),u=r(480681),s=r(532425),f=r(212610),p=r(617252),d=r(38560),m=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(null,arguments)}const v=(0,i.compose)(f.Z,p.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,r=e.loading,n=e.text,i=void 0===n?"":n,l=e.textId,f=e.glyphClassName,p=void 0===f?"":f,v=e.loaderProps,b=void 0===v?{}:v,g=e.children,E=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,m);return o().createElement(d.Z,c()(E,["pullRight","confirmNo","confirmYes"]),t&&!r?o().createElement(u.gG,{glyph:t,className:p}):null,l?o().createElement(a.Z,{msgId:l}):i,r?o().createElement(s.Z,y({className:"ms-loader".concat(E.bsStyle&&" ms-loader-"+E.bsStyle||"").concat(E.bsSize&&" ms-loader-"+E.bsSize||"")},b)):null,g)}))},925108:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(782904),o=r(727418),i=r.n(o),a=r(921914);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e){if("object"!=l(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.kM:var r=t.property||"enabled";return i()({},e,s({},t.control,i()({},e[t.control],s({},r,!(e[t.control]||{})[r]))));case n.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?i()({},e,s({},t.control,i()({},e[t.control],s({},t.property,void 0)))):i()({},e,s({},t.control,i()({},e[t.control],s({},t.property,t.value))));case n.dc:return i()({},e,s({},t.control,i()({},e[t.control],t.properties)));case n.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})).reduce((function(t,r){return i()(t,s({},r,i()({},e[r],!0===e[r].enabled?{enabled:!1}:{})))}),{});return i()({},e,o);case a.DW:return u(u({},e),{},{info:u(u({},e.info),{},{available:t.isMounted})});default:return e}}},793520:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(124852),o=r.n(n),i=r(480681);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(null,arguments)}i.Lt.Item=i.sN,i.Lt.Divider=function(e){return o().createElement(i.sN,a({},e,{divider:!0}))};const l=i.Lt},881114:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>K});var n=r(124852),o=r.n(n),i=r(171703),a=r(22222),l=r(322843),c=r(782904),u=r(805346),s=r(800827),f=r(274621),p=r(303744),d=r(73443),m=r(925108),y=r(572036),v=r(162170),b=r(18576),g=r(45697),E=r.n(g),h=r(694745),O=r(480681),P=r(993451),j=r(532425),w=r(399534);function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var I=(0,P.Z)("placeholder")(O.NI);function N(e){var t=e.update,r=e.error,i=e.success,a=e.labelId,l=e.resource,c=e.contentId,s=e.saving,f=e.loading,p=e.enabled,d=e.onClose,m=e.onSave,y=e.onClear,v=e.hideDescription,b=e.copy,g=S((0,n.useState)(),2),E=g[0],P=g[1],C=S((0,n.useState)(""),2),N=C[0],_=C[1],T=S((0,n.useState)(""),2),R=T[0],D=T[1],k=S((0,n.useState)(),2),A=k[0],Z=k[1],F=(0,n.useRef)();F.current={contentId:c,resource:l};var z=(0,n.useRef)(null);(0,n.useEffect)((function(){y()}),[p]),(0,n.useEffect)((function(){if(!f){var e=F.current.resource||{};P(e.thumbnail_url),_(e.title),D(e.abstract),Z(e.title?void 0:"error")}}),[p,f]);var G=f||s;return o().createElement(w.Z,null,o().createElement("div",{ref:z,onKeyUp:function(e){return e.stopPropagation(),(13===e.keyCode||"Enter"===e.code)&&(n=(r=b?{title:N,isUpdate:t,content:c,image:E,text:R,reload:!1}:{title:N,isUpdate:t,content:c,image:E,text:R,reload:!0}).title,o=r.isUpdate,i=r.content,a=r.image,l=r.text,u=r.reload,m(o?i:void 0,{thumbnail:a,name:n,description:l},u));var r,n,o,i,a,l,u}},o().createElement(h.Z,{title:o().createElement(u.Z,{msgId:a}),show:p,fitContent:!0,clickOutEnabled:!1,buttons:G?[]:[{text:o().createElement(u.Z,{msgId:"close"}),onClick:function(){return d()}},{text:o().createElement(u.Z,{msgId:a}),disabled:!!A,bsStyle:"primary",onClick:function(){return m(t?c:void 0,{thumbnail:E,name:N,description:R},!0)}}],onClose:G?null:function(){return d()}},r&&o().createElement(O.bZ,{bsStyle:"danger",style:{margin:0}},o().createElement("div",null,o().createElement(u.Z,{msgId:"map.mapError.errorDefault"}))),i&&o().createElement(O.bZ,{bsStyle:"success",style:{margin:0}},o().createElement("div",null,o().createElement(u.Z,{msgId:"saveDialog.saveSuccessMessage"}))),o().createElement(O.l0,{onSubmit:function(e){return e.preventDefault()}},o().createElement(O.cw,{validationState:A},o().createElement(O.J$,null,o().createElement(u.Z,{msgId:"gnviewer.title"})),o().createElement(I,{autoFocus:!0,placeholder:"gnviewer.titlePlaceholder",value:N,onChange:function(e){_(e.target.value),Z(e.target.value?void 0:"error")},onBlur:function(e){Z(e.target.value?void 0:"error")}})),!v&&o().createElement(O.cw,null,o().createElement(O.J$,null,o().createElement(u.Z,{msgId:"saveDialog.description"})),o().createElement(I,{placeholder:"saveDialog.descriptionPlaceholder",value:R,onChange:function(e){return D(e.target.value)}}))),G&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(j.Z,{size:70})))))}N.propTypes={update:E().bool,labelId:E().string,contentId:E().oneOfType([E().string,E().number]),resource:E().object,loading:E().bool,enabled:E().bool,onClose:E().func,onSave:E().func,onInit:E().func,onClear:E().func,error:E().oneOfType([E().string,E().object]),success:E().oneOfType([E().string,E().object]),thumbnailOptions:E().object},N.defaultProps={update:!1,resource:{},loading:!1,enabled:!1,onClose:function(){},onSave:function(){},onInit:function(){},onClear:function(){},thumbnailOptions:{width:300,height:250,type:"image/jpeg",quality:.9,contain:!1}};const _=N;var T=r(482100),R=r(12530),D=r(535721),k=r(643892),A=r(452992),Z=r(793520),F=r(507412),z=r(706428),G=["resources","onSave","onCopy","isNew","closeOnSave","labelId"];function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U.apply(null,arguments)}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){Y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Y(e,t,r){return(t=function(e){var t=function(e){if("object"!=x(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==x(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var H=(0,i.connect)((0,a.P1)([function(e){var t,r;return null==e||null===(t=e.controls)||void 0===t||null===(r=t[R.zj.COPY_RESOURCE])||void 0===r?void 0:r.value},s._H,function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.saving},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.error},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.success},T.fg,T.V$,A.SJ],(function(e,t,r,n,o,i,a,l,c){return{enabled:!!e,contentId:a||(null==t?void 0:t.id),resource:null==e?void 0:e[0],loading:c||r,saving:n,error:o,success:i,isNew:l}})),{onClose:c.Xg.bind(null,R.zj.COPY_RESOURCE,"value",void 0),onSave:d.Vj,onCopy:k.EU.bind(null,R.zj.COPY_RESOURCE),onClear:d.rG})((function(e){e.resources;var t,r=e.onSave,n=e.onCopy,i=e.isNew,a=e.closeOnSave,l=e.labelId,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,G);return o().createElement(_,U({},c,{hideDescription:!i,copy:!i,key:(null==c||null===(t=c.resource)||void 0===t?void 0:t.pk)||"new",labelId:l||"save",onSave:function(e,t,o){var l;i?r(e,t,o):n([M(M({},null==c?void 0:c.resource),{},{title:t.name||(null==c||null===(l=c.resource)||void 0===l?void 0:l.title)})]),a&&c.onClose()}}))})),q=function(e){return function(t){var r=(0,f.np)(e);if(!r)return!1;var n=(0,T.V$)(e),o=(0,T.ez)(e);return!(!n||!o)||(0,D.Os)(t,r)}},W=function(e){return"object"===x(e)&&!!e},X=(0,i.connect)((0,a.P1)(T.yK,T.YR,q,(function(e,t,r){return{enabled:!!r(e),resource:e,dirtyState:!W(t)&&!!t,disabled:W(t)}})),{onClick:c.Xg.bind(null,R.zj.COPY_RESOURCE,"value")})((0,z.Z)((function(e){var t=e.onClick,r=e.variant,n=e.size,i=e.resource,a=e.dirtyState,l=e.disabled;return o().createElement(p.Z,{variant:a?"warning":r||"primary",size:n,disabled:l,onClick:function(){return t([i])}},o().createElement(u.Z,{msgId:"saveAs"}))}))),B=(0,i.connect)((0,a.P1)([q],(function(e){return{canCopy:e}})),{onCopy:c.Xg.bind(null,R.zj.COPY_RESOURCE,"value")})((function(e){var t=e.resource,r=e.canCopy,n=e.onCopy;return r(t)?o().createElement(Z.Z.Item,{onClick:function(){return n([t])}},o().createElement(F.Z,{name:"copy"})," ",o().createElement(u.Z,{msgId:"gnviewer.clone"})):null}));const K=(0,l.rx)("SaveAs",{component:H,containers:{ActionNavbar:{name:"SaveAs",Component:X},ResourcesGrid:{name:R.zj.COPY_RESOURCE,target:"cardOptions",Component:B}},epics:M({},b.ZP),reducers:{gnresource:y.Z,gnsave:v.Z,controls:m.Z}})},706428:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(124852),o=r.n(n),i=r(45697),a=r.n(i),l=r(86638),c=r(457915);const u=function(e){var t=function(t,r){var i=r.messages,a=(0,n.useRef)();return a.current=t.dirtyState,(0,n.useEffect)((function(){function e(e){a.current&&((e||window.event).returnValue=null)}return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}}),[]),t.enabled?o().createElement(o().Fragment,null,o().createElement(e,t),o().createElement(c.NL,{when:!!t.dirtyState,message:function(){return!!window.confirm((0,l.S$)(i,"gnviewer.prompPendingChanges"))||(window.history.back(),!1)}})):null};return t.contextTypes={messages:a().object},t}},162170:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(73443),o=r(643892),i={};const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.$X:return i;case n.rs:case n.oz:return{saving:!0,error:void 0,success:void 0};case o.Js:return{savingThumbnailMap:!0};case n.AY:return{success:t.success,saving:!1};case n.SW:return{error:t.error,saving:!1};case n.yB:return{};default:return e}}}}]);