(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[91063],{80416:(e,t,r)=>{"use strict";r.d(t,{yS:()=>n,Zz:()=>o,ms:()=>i,ih:()=>c,OX:()=>a,sb:()=>l,K$:()=>p,k7:()=>s,cX:()=>f,x9:()=>y,vs:()=>b,oE:()=>d,Po:()=>m,qv:()=>h,cI:()=>g,g6:()=>v,I4:()=>E,l$:()=>O,Xv:()=>w,k3:()=>S,CQ:()=>P,R8:()=>j,HN:()=>_,sH:()=>R,c7:()=>T,_7:()=>A,eF:()=>L,O6:()=>k,ED:()=>D,RP:()=>C,sF:()=>N,VP:()=>I,He:()=>Y,vO:()=>Z,WO:()=>x,bh:()=>G,pV:()=>H,MK:()=>M,ZF:()=>U,tV:()=>V,Dv:()=>B,Yz:()=>F,kI:()=>W,XG:()=>X,A4:()=>$,Rp:()=>q,$o:()=>z,ct:()=>K,oh:()=>Q,$h:()=>J,ud:()=>ee,Qr:()=>te,LR:()=>re,nN:()=>ne,UG:()=>oe,F5:()=>ie,c9:()=>ce,Jh:()=>ue,Xy:()=>ae});var n="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",c="TOGGLE_NODE",u="CONTEXT_NODE",a="SORT_NODE",l="REMOVE_NODE",p="UPDATE_NODE",s="MOVE_NODE",f="LAYER_LOADING",y="LAYER_LOAD",b="LAYER_ERROR",d="ADD_LAYER",m="ADD_GROUP",h="REMOVE_LAYER",g="SHOW_SETTINGS",v="HIDE_SETTINGS",E="UPDATE_SETTINGS",O="REFRESH_LAYERS",w="LAYERS:UPDATE_LAYERS_DIMENSION",S="LAYERS_REFRESHED",P="LAYERS_REFRESH_ERROR",j="LAYERS:BROWSE_DATA",_="LAYERS:DOWNLOAD",R="LAYERS:CLEAR_LAYERS",T="LAYERS:SELECT_NODE",A="LAYERS:FILTER_LAYERS",L="LAYERS:SHOW_LAYER_METADATA",k="LAYERS:HIDE_LAYER_METADATA",D="LAYERS:UPDATE_SETTINGS_PARAMS";function C(e,t,r){return{type:g,node:e,nodeType:t,options:r}}function N(){return{type:v}}function I(e){return{type:E,options:e}}function Y(e,t){return{type:n,newProperties:t,layer:e}}function Z(e,t){return{type:o,layer:e,params:t}}function x(e,t){return{type:i,newProperties:t,group:e}}function G(e,t,r){return{type:c,node:e,nodeType:t,status:!r}}function H(e){return{type:u,node:e}}function M(e,t){return{type:a,node:e,order:t,sortLayers:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}function U(e,t){return{type:l,node:e,nodeType:t,removeEmpty:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}function V(e,t,r){return{type:p,node:e,nodeType:t,options:r}}function B(e,t,r){return{type:s,node:e,groupId:t,index:r}}function F(e){return{type:f,layerId:e}}function W(e,t){return{type:y,layerId:e,error:t}}function X(e,t,r){return{type:b,layerId:e,tilesCount:t,tilesErrorCount:r}}function $(e){return{type:d,layer:e,foreground:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function q(e,t,r){return{type:m,group:e,parent:t,options:r}}function z(e){return{type:h,layerId:e}}function K(e,t){return{type:n,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function Q(e){return{type:S,layers:e}}function J(e,t){return{type:P,layers:e,error:t}}function ee(e,t,r,n){return{type:w,dimension:e,value:t,options:r,layers:n}}function te(e){return{type:j,layer:e}}function re(e){return{type:_,layer:e}}function ne(){return{type:R}}function oe(e,t,r){return{type:T,id:e,nodeType:t,ctrlKey:r}}function ie(e){return{type:A,text:e}}function ce(e,t){return{type:L,metadataRecord:e,maskLoading:t}}function ue(){return{type:k}}function ae(e,t){return{type:D,newParams:e,update:t}}},15402:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(75263),o=r.n(n),i=r(24852),c=r.n(i);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function l(e,t,r){return t=s(t),function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,p()?Reflect.construct(t,r||[],s(e).constructor):t.apply(e,r))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function y(e,t,r){return(t=b(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}var d=r(68195).FormattedHTMLMessage,m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return this.context.intl?c().createElement(d,{id:this.props.msgId,values:this.props.msgParams}):c().createElement("span",null,this.props.msgId||"")}}])&&a(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(c().Component);y(m,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(m,"contextTypes",{intl:o().object});const h=m},35913:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(75263),o=r.n(n),i=r(24852),c=r.n(i),u=r(80681),a=r(50966),l=r(5346);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function f(e,t,r){return t=b(t),function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,r||[],b(e).constructor):t.apply(e,r))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function m(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=this.props.className?" "+this.props.className:"",r=c().createElement(u.Glyphicon,{className:"toc-layer-tool"+t,style:this.props.style,glyph:this.props.glyph,onClick:function(){return e.props.onClick(e.props.node)}});return this.props.tooltip?c().createElement(a.Z,{placement:"bottom",overlay:c().createElement(u.Tooltip,{id:"Tooltip-"+this.props.tooltip},c().createElement("strong",null,c().createElement(l.Z,{msgId:this.props.tooltip})))},r):r}}])&&s(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(c().Component);m(g,"propTypes",{node:o().object,onClick:o().func,style:o().object,glyph:o().string,tooltip:o().string,className:o().string}),m(g,"defaultProps",{onClick:function(){}});const v=g},97844:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(24852),o=r.n(n),i=r(75263),c=r.n(i),u=r(1036),a=r(14293),l=r.n(a),p=r(1469),s=r.n(p);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function b(e,t,r){return t=m(t),function(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,d()?Reflect.construct(t,r||[],m(e).constructor):t.apply(e,r))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function g(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this;return o().createElement("div",{className:"mapstore-slider ".concat(this.props.hideTooltip?"":"with-tooltip"),onClick:function(e){e.stopPropagation()}},this.props.hideTooltip&&o().createElement(u.Z,{disabled:this.props.disabled,start:[l()(this.props.opacity)?100:Math.round(100*this.props.opacity)],range:{min:0,max:100},onChange:function(t){s()(t)&&t[0]&&e.props.onChange(parseFloat(t[0].replace(" %","")/100))}})||o().createElement(u.Z,{disabled:this.props.disabled,start:[l()(this.props.opacity)?100:Math.round(100*this.props.opacity)],tooltips:[!0],format:{from:function(e){return Math.round(e)},to:function(e){return Math.round(e)+" %"}},range:{min:0,max:100},onChange:function(t){return e.props.onChange(parseFloat(t[0].replace(" %",""))/100)}}))}}])&&y(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);g(E,"propTypes",{opacity:c().number,disabled:c().bool,hideTooltip:c().bool,onChange:c().func}),g(E,"defaultProps",{opacity:1,onChange:function(){},visibility:!0});const O=E},14181:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(24852),o=r.n(n),i=r(75263),c=r.n(i),u=r(23560),a=r.n(u),l=r(35913);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function f(e,t,r){return t=b(t),function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,r||[],b(e).constructor):t.apply(e,r))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function m(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}var g=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return m(e=f(this,t,[].concat(n)),"changeVisibility",(function(){e.props.propertiesChangeHandler(e.props.node.id,{visibility:!e.props.node.visibility})})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return"glyph"===this.props.checkType?o().createElement(l.Z,{tooltip:this.props.tooltip,style:this.props.style,className:"visibility-check"+(this.props.node.visibility?" checked":""),"data-position":this.props.node.storeIndex,glyph:this.props.node.visibility?this.props.glyphChecked:this.props.glyphUnchecked,onClick:this.changeVisibility}):o().createElement("input",{className:"visibility-check",style:this.props.style,"data-position":this.props.node.storeIndex,type:a()(this.props.checkType)?this.props.checkType(this.props.node):this.props.checkType,checked:this.props.node.visibility?"checked":"",onChange:this.changeVisibility})}}])&&s(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);m(g,"propTypes",{node:c().object,tooltip:c().string,propertiesChangeHandler:c().func,style:c().object,checkType:c().oneOfType([c().string,c().func]),glyphChecked:c().string,glyphUnchecked:c().string}),m(g,"defaultProps",{style:{},checkType:"glyph",glyphChecked:"eye-open",tooltip:"toc.toggleLayerVisibility",glyphUnchecked:"eye-close"});const v=g},90079:(e,t,r)=>{"use strict";r.d(t,{Z:()=>R});var n=r(72500),o=r.n(n),i=r(1469),c=r.n(i),u=r(14293),a=r.n(u),l=r(27418),p=r.n(l),s=r(75263),f=r.n(s),y=r(24852),b=r.n(y),d=r(33044),m=r(5346);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,P(n.key),n)}}function v(e,t,r){return t=O(t),function(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,E()?Reflect.construct(t,r||[],O(e).constructor):t.apply(e,r))}function E(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(E=function(){return!!e})()}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t,r){return(t=P(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){var t=function(e,t){if("object"!=h(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==h(t)?t:t+""}var j=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return S(e=v(this,t,[].concat(n)),"state",{error:!1}),S(e,"onImgError",(function(){e.setState((function(){return{error:!0}}))})),S(e,"getUrl",(function(e,t){if(e.layer&&"wms"===e.layer.type&&e.layer.url){var r=e.layer,n=a()(t)?c()(r.url)&&Math.floor(Math.random()*r.url.length):t,i=c()(r.url)?r.url[n]:r.url.replace(/[?].*$/g,""),u=o().parse(i),l=(0,d.clearNilValuesForParams)(r.params),s=p()({},{service:"WMS",request:"GetLegendGraphic",format:"image/png",height:e.legendHeight,width:e.legendWidth,layer:r.name,style:r.style||null,version:r.version||"1.3.0",SLD_VERSION:"1.1.0",LEGEND_OPTIONS:e.legendOptions},r.legendParams||{},e.language&&r.localizedLayerStyles?{LANGUAGE:e.language}:{},(0,d.addAuthenticationToSLD)(l||{},e.layer),l&&l.SLD_BODY?{SLD_BODY:l.SLD_BODY}:{},e.scales&&e.currentZoomLvl&&e.scaleDependent?{SCALE:Math.round(e.scales[e.currentZoomLvl])}:{});return(0,d.addAuthenticationParameter)(i,s),o().format({host:u.host,protocol:u.protocol,pathname:u.pathname,query:s})}return""})),S(e,"validateImg",(function(t){t.height<=1&&t.width<=2&&e.onImgError()})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(t,e),r=t,(n=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.state.error&&this.getUrl(e,0)!==this.getUrl(this.props,0)&&this.setState((function(){return{error:!1}}))}},{key:"render",value:function(){var e=this,t=this.props,r=t.layer,n=t.style;return!this.state.error&&r&&"wms"===r.type&&r.url?b().createElement("img",{onError:this.onImgError,onLoad:function(t){return e.validateImg(t.target)},src:this.getUrl(this.props),style:Object.assign({},_.image,n)}):b().createElement(m.Z,{msgId:"layerProperties.legenderror"})}}])&&g(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(b().Component);S(j,"propTypes",{layer:f().object,legendHeight:f().number,legendWidth:f().number,legendOptions:f().string,style:f().object,currentZoomLvl:f().number,scales:f().array,scaleDependent:f().bool,language:f().string}),S(j,"defaultProps",{legendHeight:12,legendWidth:12,legendOptions:"forceLabels:on",style:{maxWidth:"100%"},scaleDependent:!0});var _={image:{maxWidth:"100%",height:"auto",display:"block"}};const R=j},1036:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(18446),o=r.n(n);const i=(0,r(67076).shouldUpdate)((function(e,t){return!o()(e.start,t.start)||e.disabled!==t.disabled}))(r(85552))},26379:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>E});var n=r(24852),o=r.n(n),i=r(22843),c=r(71703),u=r(22222),a=r(90079),l=r(75110),p=r(97844),s=r(80416),f=r(14181),y=r(15402);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){var n,o,i,c;n=e,o=t,i=r[t],c=function(e,t){if("object"!=b(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==b(c)?c:c+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e){return h(h({},e),{},{legendParams:h(h({},null==e?void 0:e.legendParams),{},{_v_:null==e?void 0:e._v_})})}var v=(0,c.connect)((0,u.P1)([l.l2],(function(e){return{layers:e.filter((function(e){return"background"!==e.group&&"wms"===e.type}))}})),{onUpdateNode:s.tV})((function(e){var t,r,i=e.layers,c=e.onUpdateNode,u=(t=(0,n.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,u=[],a=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return u}}(t,r)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=u[0],s=u[1];return i.length>0&&o().createElement("div",{className:"shadow gn-legend-wrapper",style:{width:l?"auto":"80px"}},o().createElement("div",{onClick:function(){s((function(e){return!e}))},className:"gn-legend-head"},o().createElement("span",{role:"button",className:"identify-icon glyphicon glyphicon-chevron-".concat(l?"down":"right"),title:"Expand layer legend"}),o().createElement("span",{className:"gn-legend-list-item"},o().createElement(y.Z,{msgId:"gnviewer.legend"}))),o().createElement("ul",{className:"gn-legend-list",style:{display:l?"inline-block":"none"}},i.map((function(e,t){return o().createElement(n.Fragment,{key:t},o().createElement("li",{className:"gn-legend-list-item"},o().createElement(f.Z,{key:"visibilitycheck",tooltip:"Warning"===e.loadingError?"toc.toggleLayerVisibilityWarning":"toc.toggleLayerVisibility",node:e,propertiesChangeHandler:function(e,t){return c(e,"layers",t)}}),o().createElement("p",null,e.title)),o().createElement("li",{className:"gn-legend-bottom"},o().createElement(p.Z,{opacity:e.opacity,disabled:!e.visibility,onChange:function(t){return c(e.id,"layers",{opacity:t})}}),o().createElement(a.Z,{layer:g(e)})))}))))}));const E=(0,i.rx)("Legend",{component:v,containers:{},epics:{},reducers:{}})}}]);