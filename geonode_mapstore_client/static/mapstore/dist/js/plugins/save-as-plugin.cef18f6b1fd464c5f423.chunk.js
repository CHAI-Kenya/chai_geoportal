(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[41103],{807472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(727418),o=n.n(r),l=n(45697),i=n.n(l),a=n(124852),c=n.n(a),s=n(485294),u=n.n(s),d=n(472986),f=n.n(d),p=n(805346);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,C(r.key),r)}}function g(e,t,n){return t=O(t),function(e,t){if(t&&("object"==m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,h()?Reflect.construct(t,n||[],O(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function j(e,t,n){return(t=C(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}var w=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return j(e=g(this,t,[].concat(r)),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(p.Z,{msgId:"loading"}),c().createElement(f(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),j(e,"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),j(e,"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),j(e,"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:b({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),n=this.props.draggable?c().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&y(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(c().Component);j(w,"propTypes",{id:i().string.isRequired,style:i().object,backgroundStyle:i().object,className:i().string,maskLoading:i().bool,containerClassName:i().string,headerClassName:i().string,bodyClassName:i().string,footerClassName:i().string,onClickOut:i().func,modal:i().bool,start:i().object,draggable:i().bool,bounds:i().oneOfType([i().string,i().object])}),j(w,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const S=w},975480:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(124852),o=n.n(r);const l=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:t,className:"mapstore-inline-loader"})}},694745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(124852),o=n.n(r),l=n(294184),i=n.n(l),a=n(480681),c=n(807472),s=n(80717),u=n(867076),d=n(819081),f=n.n(d),p=n(975480),m={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},v={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const b=(0,u.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,l=e.loadingText,u=e.onClose,d=void 0===u?function(){}:u,b=e.title,y=void 0===b?"":b,g=e.clickOutEnabled,h=void 0===g||g,O=e.showClose,E=void 0===O||O,j=e.disabledClose,C=void 0!==j&&j,w=e.showFullscreen,S=void 0!==w&&w,P=e.fullscreenType,N=void 0===P?"full":P,k=e.buttons,Z=void 0===k?[]:k,I=e.size,x=void 0===I?"":I,z=e.bodyClassName,R=void 0===z?"":z,_=e.children,T=e.draggable,D=void 0!==T&&T,A=e.fullscreenState,U=e.onFullscreen,L=e.fade,Y=void 0!==L&&L,B=e.fitContent,F=e.modalClassName,G=void 0===F?"":F,$=e.dialogClassName,J=void 0===$?"":$,V=e.enableFooter,X=void 0===V||V,q=m[x]||"",K=S&&"expanded"===A&&v.className[N]||"",M=n?o().createElement("div",{className:"modal-fixed ".concat(G," ")+(D?"ms-draggable":"")},o().createElement(c.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:h?d:function(){},containerClassName:"ms-resizable-modal",draggable:D,modal:!0,className:i()("modal-dialog modal-content",q,K,J,{"ms-fit-content":B})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},y),S&&v.className[N]&&o().createElement(a.gG,{className:"ms-header-btn",onClick:function(){return U("expanded"===A?"collapsed":"expanded")},glyph:v.glyph[A][N]}),E&&d&&o().createElement(a.gG,{glyph:"1-close",className:"ms-header-btn",onClick:d,disabled:C}))),o().createElement("div",{role:"body",className:R},_),X&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(p.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?l:null),o().createElement(s.Z,{buttons:Z})))):null;return Y?o().createElement(f(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},M):M}))},212610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(124852),o=n.n(r),l=n(867076),i=n(957557),a=n.n(i),c=n(815135);const s=(0,l.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,n=e.noTooltipWhenDisabled;return!(void 0!==n&&n&&t)}),c.Z,(function(e){return function(t){return o().createElement(e,a()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},617252:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(124852),o=n.n(r),l=n(867076),i=n(45697),a=n.n(i),c=n(957557),s=n.n(c),u=n(480681),d=n(950966);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function m(e,t,n){return t=b(t),function(e,t){if(t&&("object"==f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,v()?Reflect.construct(t,n||[],b(e).constructor):t.apply(e,n))}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function g(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}const O=(0,l.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),m(this,n,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(n,t),r=n,(i=[{key:"renderPopover",value:function(){return o().createElement(u.J2,s()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,l.toClass)(e);return o().createElement(t,s()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(d.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&p(r.prototype,i),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,i}(o().Component),g(t,"propTypes",{popover:a().object}),g(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(124852),o=n.n(r),l=n(819081),i=n.n(l),a=n(480681),c=n(90085),s=["visible","Element","renderButton"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(null,arguments)}const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,n=void 0===t?[]:t,r=e.btnGroupProps,l=void 0===r?{}:r,d=e.btnDefaultProps,f=void 0===d?{}:d,p=e.transitionProps,m=void 0===p?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:p,v=function(){return n.map((function(e,t){var n=e.visible,r=void 0===n||n,l=e.Element,i=e.renderButton,a=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,s);return r?i||l&&o().createElement(l,u({key:a.key||t},a))||o().createElement(c.Z,u({key:a.key||t},f,a)):null}))};return o().createElement(a.hE,l,m?o().createElement(i(),m,v()):v())}},90085:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(124852),o=n.n(r),l=n(867076),i=n(805346),a=n(957557),c=n.n(a),s=n(480681),u=n(532425),d=n(212610),f=n(617252),p=n(38560),m=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(null,arguments)}const b=(0,l.compose)(d.Z,f.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,n=e.loading,r=e.text,l=void 0===r?"":r,a=e.textId,d=e.glyphClassName,f=void 0===d?"":d,b=e.loaderProps,y=void 0===b?{}:b,g=e.children,h=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,m);return o().createElement(p.Z,c()(h,["pullRight","confirmNo","confirmYes"]),t&&!n?o().createElement(s.gG,{glyph:t,className:f}):null,a?o().createElement(i.Z,{msgId:a}):l,n?o().createElement(u.Z,v({className:"ms-loader".concat(h.bsStyle&&" ms-loader-"+h.bsStyle||"").concat(h.bsSize&&" ms-loader-"+h.bsSize||"")},y)):null,g)}))},793520:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(124852),o=n.n(r),l=n(480681);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(null,arguments)}l.Lt.Item=l.sN,l.Lt.Divider=function(e){return o().createElement(l.sN,i({},e,{divider:!0}))};const a=l.Lt},881114:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>K});var r=n(124852),o=n.n(r),l=n(171703),i=n(22222),a=n(322843),c=n(782904),s=n(805346),u=n(800827),d=n(274621),f=n(303744),p=n(73443),m=n(925108),v=n(572036),b=n(162170),y=n(18576),g=n(45697),h=n.n(g),O=n(694745),E=n(480681),j=n(993451),C=n(532425),w=n(399534);function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l,i,a=[],c=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var N=(0,j.Z)("placeholder")(E.NI);function k(e){var t=e.update,n=e.error,l=e.success,i=e.labelId,a=e.resource,c=e.contentId,u=e.saving,d=e.loading,f=e.enabled,p=e.onClose,m=e.onSave,v=e.onClear,b=e.hideDescription,y=e.copy,g=S((0,r.useState)(),2),h=g[0],j=g[1],P=S((0,r.useState)(""),2),k=P[0],Z=P[1],I=S((0,r.useState)(""),2),x=I[0],z=I[1],R=S((0,r.useState)(),2),_=R[0],T=R[1],D=(0,r.useRef)();D.current={contentId:c,resource:a};var A=(0,r.useRef)(null);(0,r.useEffect)((function(){v()}),[f]),(0,r.useEffect)((function(){if(!d){var e=D.current.resource||{};j(e.thumbnail_url),Z(e.title),z(e.abstract),T(e.title?void 0:"error")}}),[f,d]);var U=d||u;return o().createElement(w.Z,null,o().createElement("div",{ref:A,onKeyUp:function(e){return e.stopPropagation(),(13===e.keyCode||"Enter"===e.code)&&(r=(n=y?{title:k,isUpdate:t,content:c,image:h,text:x,reload:!1}:{title:k,isUpdate:t,content:c,image:h,text:x,reload:!0}).title,o=n.isUpdate,l=n.content,i=n.image,a=n.text,s=n.reload,m(o?l:void 0,{thumbnail:i,name:r,description:a},s));var n,r,o,l,i,a,s}},o().createElement(O.Z,{title:o().createElement(s.Z,{msgId:i}),show:f,fitContent:!0,clickOutEnabled:!1,buttons:U?[]:[{text:o().createElement(s.Z,{msgId:"close"}),onClick:function(){return p()}},{text:o().createElement(s.Z,{msgId:i}),disabled:!!_,bsStyle:"primary",onClick:function(){return m(t?c:void 0,{thumbnail:h,name:k,description:x},!0)}}],onClose:U?null:function(){return p()}},n&&o().createElement(E.bZ,{bsStyle:"danger",style:{margin:0}},o().createElement("div",null,o().createElement(s.Z,{msgId:"map.mapError.errorDefault"}))),l&&o().createElement(E.bZ,{bsStyle:"success",style:{margin:0}},o().createElement("div",null,o().createElement(s.Z,{msgId:"saveDialog.saveSuccessMessage"}))),o().createElement(E.l0,{onSubmit:function(e){return e.preventDefault()}},o().createElement(E.cw,{validationState:_},o().createElement(E.J$,null,o().createElement(s.Z,{msgId:"gnviewer.title"})),o().createElement(N,{autoFocus:!0,placeholder:"gnviewer.titlePlaceholder",value:k,onChange:function(e){Z(e.target.value),T(e.target.value?void 0:"error")},onBlur:function(e){T(e.target.value?void 0:"error")}})),!b&&o().createElement(E.cw,null,o().createElement(E.J$,null,o().createElement(s.Z,{msgId:"saveDialog.description"})),o().createElement(N,{placeholder:"saveDialog.descriptionPlaceholder",value:x,onChange:function(e){return z(e.target.value)}}))),U&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(C.Z,{size:70})))))}k.propTypes={update:h().bool,labelId:h().string,contentId:h().oneOfType([h().string,h().number]),resource:h().object,loading:h().bool,enabled:h().bool,onClose:h().func,onSave:h().func,onInit:h().func,onClear:h().func,error:h().oneOfType([h().string,h().object]),success:h().oneOfType([h().string,h().object]),thumbnailOptions:h().object},k.defaultProps={update:!1,resource:{},loading:!1,enabled:!1,onClose:function(){},onSave:function(){},onInit:function(){},onClear:function(){},thumbnailOptions:{width:300,height:250,type:"image/jpeg",quality:.9,contain:!1}};const Z=k;var I=n(482100),x=n(12530),z=n(535721),R=n(643892),_=n(452992),T=n(793520),D=n(507412),A=n(706428),U=["resources","onSave","onCopy","isNew","closeOnSave","labelId"];function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(null,arguments)}function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=L(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==L(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $=(0,l.connect)((0,i.P1)([function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[x.zj.COPY_RESOURCE])||void 0===n?void 0:n.value},u._H,function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.saving},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.error},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.success},I.fg,I.V$,_.SJ],(function(e,t,n,r,o,l,i,a,c){return{enabled:!!e,contentId:i||(null==t?void 0:t.id),resource:null==e?void 0:e[0],loading:c||n,saving:r,error:o,success:l,isNew:a}})),{onClose:c.Xg.bind(null,x.zj.COPY_RESOURCE,"value",void 0),onSave:p.Vj,onCopy:R.EU.bind(null,x.zj.COPY_RESOURCE),onClear:p.rG})((function(e){e.resources;var t,n=e.onSave,r=e.onCopy,l=e.isNew,i=e.closeOnSave,a=e.labelId,c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,U);return o().createElement(Z,Y({},c,{hideDescription:!l,copy:!l,key:(null==c||null===(t=c.resource)||void 0===t?void 0:t.pk)||"new",labelId:a||"save",onSave:function(e,t,o){var a;l?n(e,t,o):r([F(F({},null==c?void 0:c.resource),{},{title:t.name||(null==c||null===(a=c.resource)||void 0===a?void 0:a.title)})]),i&&c.onClose()}}))})),J=function(e){return function(t){var n=(0,d.np)(e);if(!n)return!1;var r=(0,I.V$)(e),o=(0,I.ez)(e);return!(!r||!o)||(0,z.Os)(t,n)}},V=function(e){return"object"===L(e)&&!!e},X=(0,l.connect)((0,i.P1)(I.yK,I.YR,J,(function(e,t,n){return{enabled:!!n(e),resource:e,dirtyState:!V(t)&&!!t,disabled:V(t)}})),{onClick:c.Xg.bind(null,x.zj.COPY_RESOURCE,"value")})((0,A.Z)((function(e){var t=e.onClick,n=e.variant,r=e.size,l=e.resource,i=e.dirtyState,a=e.disabled;return o().createElement(f.Z,{variant:i?"warning":n||"primary",size:r,disabled:a,onClick:function(){return t([l])}},o().createElement(s.Z,{msgId:"saveAs"}))}))),q=(0,l.connect)((0,i.P1)([J],(function(e){return{canCopy:e}})),{onCopy:c.Xg.bind(null,x.zj.COPY_RESOURCE,"value")})((function(e){var t=e.resource,n=e.canCopy,r=e.onCopy;return n(t)?o().createElement(T.Z.Item,{onClick:function(){return r([t])}},o().createElement(D.Z,{name:"copy"})," ",o().createElement(s.Z,{msgId:"gnviewer.clone"})):null}));const K=(0,a.rx)("SaveAs",{component:$,containers:{ActionNavbar:{name:"SaveAs",Component:X},ResourcesGrid:{name:x.zj.COPY_RESOURCE,target:"cardOptions",Component:q}},epics:F({},y.ZP),reducers:{gnresource:v.Z,gnsave:b.Z,controls:m.Z}})}}]);