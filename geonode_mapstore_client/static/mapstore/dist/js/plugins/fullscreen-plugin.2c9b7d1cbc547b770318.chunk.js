/*! For license information please see fullscreen-plugin.2c9b7d1cbc547b770318.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[41718],{21339:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(45697),o=n.n(r),i=n(124852),l=n.n(i),c=n(727418),u=n.n(c);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,m(r.key),r)}}function f(e,t,n){return t=b(t),function(e,t){if(t&&("object"==s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,p()?Reflect.construct(t,n||[],b(e).constructor):t.apply(e,n))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function d(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}var g=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return d(e=f(this,t,[].concat(r)),"getStyle",(function(){var t={cursor:e.props.disabled?"not-allowed":"pointer",margin:0,padding:0,display:"inline-block"};return e.props.image?u()(t,{overflow:"hidden"}):u()(t,{height:"48px",width:"48px",border:"1px solid grey",borderRadius:"4px",backgroundColor:"rgb(250, 250, 250)"}),u()(t,e.props.style),t})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return l().createElement("img",{className:this.props.className,id:this.props.id,title:this.props.tooltip,style:this.getStyle(),src:this.props.image,onClick:this.props.disabled?null:this.props.onClick})}}])&&a(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(l().Component);d(g,"propTypes",{id:o().string,image:o().string,onClick:o().func,style:o().object,disabled:o().bool,tooltip:o().string,className:o().string}),d(g,"defaultProps",{disabled:!1,tooltip:null,className:void 0});const h=g},782457:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(124852),o=n.n(r),i=n(45697),l=n.n(i),c=n(480681),u=n(950966),s=n(38560),a=n(21339);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(null,arguments)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function y(e,t,n){return t=m(t),function(e,t){if(t&&("object"==f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,d()?Reflect.construct(t,n||[],m(e).constructor):t.apply(e,n))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function h(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e){if("object"!=f(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}var w=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return h(e=y(this,t,[].concat(r)),"onClick",(function(){e.props.onClick(!e.props.pressed,e.props.options)})),h(e,"renderNormalButton",(function(){return o().createElement(s.Z,p({id:e.props.id},e.props.btnConfig,{onClick:e.onClick,bsStyle:e.props.pressed?e.props.pressedStyle:e.props.defaultStyle,style:e.props.style}),e.props.glyphicon?o().createElement(c.gG,{glyph:e.props.glyphicon}):null,e.props.glyphicon&&e.props.text&&!o().isValidElement(e.props.text)?" ":null,e.props.text,e.props.help)})),h(e,"renderImageButton",(function(){return o().createElement(a.Z,{id:e.props.id,image:e.props.image,onClick:e.onClick,style:e.props.style})})),h(e,"addTooltip",(function(t){return o().createElement(u.Z,{placement:e.props.tooltipPlace,key:"overlay-trigger."+e.props.id,overlay:e.props.tooltip},t)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e="normal"===this.props.btnType?this.renderNormalButton():this.renderImageButton();return this.props.tooltip?this.addTooltip(e):e}}])&&b(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(o().Component);h(w,"propTypes",{id:l().string,btnConfig:l().object,options:l().object,text:l().oneOfType([l().string,l().element]),help:l().oneOfType([l().string,l().element]),glyphicon:l().string,pressed:l().bool,onClick:l().func,tooltip:l().element,tooltipPlace:l().string,style:l().object,btnType:l().oneOf(["normal","image"]),image:l().string,pressedStyle:l().string,defaultStyle:l().string}),h(w,"defaultProps",{onClick:function(){},options:{},pressed:!1,tooltipPlace:"top",style:{},btnType:"normal",pressedStyle:"primary",defaultStyle:"default"});const O=w},524237:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var r=n(171703),o=n(436344),i=n(410577),l=n.n(i),c=n(91175),u=n.n(c),s=n(610928),a=n.n(s),f=n(782904),p=n(737275),b=n(49977),y=n.n(b),d=n(727418),m=n.n(d),g=n(45697),h=n.n(g),v=n(124852),w=n.n(v),O=n(782457),S=n(480681),P=n(805346);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(null,arguments)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,B(r.key),r)}}function C(e,t,n){return t=F(t),function(e,t){if(t&&("object"==j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,T()?Reflect.construct(t,n||[],F(e).constructor):t.apply(e,n))}function T(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(T=function(){return!!e})()}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function x(e,t,n){return(t=B(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){var t=function(e){if("object"!=j(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==j(t)?t:t+""}var R=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return x(e=C(this,t,[].concat(r)),"getButtonProperties",(function(){return["id","btnConfig","options","text","glyphicon","onClick","tooltipPlace","style","btnType","image","pressedStyle","defaultStyle"].reduce((function(t,n){return t[n]=e.props[n],t}),{})})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return w().createElement(O.Z,E({},this.getButtonProperties(),{pressed:this.props.active,tooltip:w().createElement(S.u,{id:"full-screen-button-tip"},w().createElement(P.Z,{msgId:this.props.active?this.props.activeTooltip:this.props.notActiveTooltip}))}))}}])&&k(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(w().Component);x(R,"propTypes",{id:h().string,btnConfig:h().object,options:h().object,text:h().oneOfType([h().string,h().element]),help:h().oneOfType([h().string,h().element]),glyphicon:h().string,active:h().bool,onClick:h().func,activeTooltip:h().string,notActiveTooltip:h().string,tooltipPlace:h().string,style:h().object,btnType:h().oneOf(["normal","image"]),image:h().string,pressedStyle:h().string,defaultStyle:h().string}),x(R,"defaultProps",{id:"fullscreen-btn",activeTooltip:"fullscreen.tooltipDeactivate",notActiveTooltip:"fullscreen.tooltipActivate",tooltipPlace:"left",defaultStyle:"primary",pressedStyle:"success active",glyphicon:"1-full-screen",btnConfig:{className:"square-button"}});const q=R;var A=(0,r.connect)((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).controls,t=void 0===e?{}:e;return{active:t.fullscreen&&t.fullscreen.enabled}}),{onClick:function(e,t){return(0,o.V)(e,t.querySelector)}})(q);const N={FullScreenPlugin:m()(A,{disablePluginIf:"{state('browser') && state('browser').safari}",Toolbar:{name:"fullscreen",position:5,alwaysVisible:!0,tool:!0,priority:1}}),reducers:{},epics:{toggleFullscreenEpic:function(e){return e.ofType(o.$).switchMap((function(e){var t=document.querySelector(e&&e.querySelector||"."+(p.ZP.getConfigProp("themePrefix")||"ms2")+" > div");return t&&e.enable&&l().enabled?l().request(t):t&&!e.enable&&l().exit(),y().Observable.merge(y().Observable.fromEvent(document,a()(u()([["exitFullscreen","fullscreenchange"],["webkitExitFullscreen","webkitfullscreenchange"],["webkitCancelFullScreen","webkitfullscreenchange"],["mozCancelFullScreen","mozfullscreenchange"],["msExitFullscreen","MSFullscreenChange"]].filter((function(e){return document[e[0]]}))))).filter((function(){return l().element!==t})).map((function(){return(0,f.Xg)("fullscreen","enabled",!1)})),y().Observable.of((0,f.Xg)("fullscreen","enabled",e.enable)),y().Observable.fromEvent(window,"hashchange").do((function(){return l().exit()})).map((function(){return(0,f.Xg)("fullscreen","enabled",!1)})))}))}}}},410577:e=>{!function(){"use strict";var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},n=e.exports,r="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,o=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,o=n.length,i={};r<o;r++)if((e=n[r])&&e[1]in t){for(r=0;r<e.length;r++)i[n[0][r]]=e[r];return i}return!1}(),i={change:o.fullscreenchange,error:o.fullscreenerror},l={request:function(e){return new Promise(function(n){var i=o.requestFullscreen,l=function(){this.off("change",l),n()}.bind(this);e=e||t.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[i]():e[i](r?Element.ALLOW_KEYBOARD_INPUT:{}),this.on("change",l)}.bind(this))},exit:function(){return new Promise(function(e){var n=function(){this.off("change",n),e()}.bind(this);t[o.exitFullscreen](),this.on("change",n)}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var r=i[e];r&&t.addEventListener(r,n,!1)},off:function(e,n){var r=i[e];r&&t.removeEventListener(r,n,!1)},raw:o};o?(Object.defineProperties(l,{isFullscreen:{get:function(){return Boolean(t[o.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[o.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(t[o.fullscreenEnabled])}}}),n?e.exports=l:window.screenfull=l):n?e.exports=!1:window.screenfull=!1}()}}]);