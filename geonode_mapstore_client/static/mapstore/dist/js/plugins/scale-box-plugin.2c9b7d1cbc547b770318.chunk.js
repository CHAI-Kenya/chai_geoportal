(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[24593],{898939:(e,t,n)=>{"use strict";n.d(t,{d2:()=>o,yX:()=>r,Uo:()=>i,n2:()=>c,SA:()=>u});var o="CHANGE_HELP_STATE",r="CHANGE_HELP_TEXT",i="CHANGE_HELPWIN_VIZ";function c(e){return{type:r,helpText:e}}function u(e){return{type:i,helpwinViz:e}}},383606:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var o=n(747037),r=n.n(o),i=n(45697),c=n.n(i),u=n(124852),l=n.n(u),a=n(480681),p=n(86638);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,v(o.key),o)}}function b(e,t,n){return t=m(t),function(e,t){if(t&&("object"==s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,n||[],m(e).constructor):t.apply(e,n))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}var g=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return d(e=b(this,t,[].concat(o)),"onMouseOver",(function(){var t=r()(e.props.helpText)?e.props.helpText:(0,p.S$)(e.context.messages,e.props.helpText.props.msgId);e.props.changeHelpText(t),e.props.changeHelpwinVisibility(!0)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return l().createElement(a.Ct,{id:this.props.id,onMouseOver:this.onMouseOver,className:(this.props.isVisible?"":"hidden ")+(this.props.className?this.props.className:"")},"?")}}])&&f(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(l().Component);d(g,"propTypes",{id:c().string,helpText:c().oneOfType([c().string,c().element]),isVisible:c().bool,changeHelpText:c().func,changeHelpwinVisibility:c().func,className:c().string}),d(g,"contextTypes",{messages:c().object}),d(g,"defaultProps",{helpText:"",isVisible:!1});const O=g},875964:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var o=n(618446),r=n.n(o),i=n(45697),c=n.n(i),u=n(124852),l=n.n(u),a=n(480681),p=n(552259);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,v(o.key),o)}}function b(e,t,n){return t=m(t),function(e,t){if(t&&("object"==s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,n||[],m(e).constructor):t.apply(e,n))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}var g=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return d(e=b(this,t,[].concat(o)),"onComboChange",(function(t){var n=parseInt(t.nativeEvent.target.value,10);e.props.onChange(n,e.props.scales[n])})),d(e,"getOptions",(function(){return e.props.scales.map((function(t,n){return l().createElement("option",{value:n,key:n},e.props.template(t,n))})).filter((function(t,n){return n>=e.props.minZoom}))})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),n=t,(o=[{key:"shouldComponentUpdate",value:function(e){return!r()(e,this.props)}},{key:"render",value:function(){var e,t=Math.round(this.props.currentZoomLvl);return e=this.props.readOnly?l().createElement("label",null,this.props.template(this.props.scales[t],t)):this.props.useRawInput?l().createElement("select",{label:this.props.label,onChange:this.onComboChange,bsSize:"small",value:t||""},this.getOptions()):l().createElement(a.l0,{inline:!0},l().createElement(a.cw,{bsSize:"small"},l().createElement(a.J$,null,this.props.label),l().createElement(a.NI,{componentClass:"select",onChange:this.onComboChange,value:t||""},this.getOptions()))),l().createElement("div",{id:this.props.id,style:this.props.style},e)}}])&&f(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(l().Component);d(g,"propTypes",{id:c().string,style:c().object,scales:c().array,currentZoomLvl:c().number,minZoom:c().number,onChange:c().func,readOnly:c().bool,label:c().oneOfType([c().func,c().string,c().object]),template:c().func,useRawInput:c().bool}),d(g,"defaultProps",{id:"mapstore-scalebox",scales:(0,p.Z5)(0,28),currentZoomLvl:0,minZoom:0,onChange:function(){},readOnly:!1,template:function(e){return e<1?Math.round(1/e)+" : 1":"1 : "+Math.round(e)},useRawInput:!1});const O=g},423519:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>F});var o=n(124852),r=n.n(o),i=n(322843),c=n(22222),u=n(800827),l=n(801550),a=n(171703),p=n(898939),s=n(45697),f=n.n(s),b=n(383606),y=n(893379),m=n.n(y),h=n(992058);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,j(o.key),o)}}function g(e,t,n){return t=w(t),function(e,t){if(t&&("object"==d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,O()?Reflect.construct(t,n||[],w(e).constructor):t.apply(e,n))}function O(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(O=function(){return!!e})()}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function j(e){var t=function(e){if("object"!=d(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==d(t)?t:t+""}m()(h.Z,{insert:"head",singleton:!1}),h.Z.locals;var P,E,T,_=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r().createElement("div",{id:this.props.id},r().createElement(b.Z,{id:"helpbadge-"+(this.props.children.key||this.props.id),isVisible:this.props.helpEnabled,helpText:this.props.helpText,changeHelpText:this.props.changeHelpText,changeHelpwinVisibility:this.props.changeHelpwinVisibility}),this.props.children)}}])&&v(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(r().Component);P=_,E="propTypes",T={id:f().string,helpText:f().oneOfType([f().string,f().element]),helpEnabled:f().bool,changeHelpText:f().func,changeHelpwinVisibility:f().func},(E=j(E))in P?Object.defineProperty(P,E,{value:T,enumerable:!0,configurable:!0,writable:!0}):P[E]=T;const S=_,C=(0,a.connect)((function(e){return{helpEnabled:e.controls&&e.controls.help&&e.controls.help.enabled}}),{changeHelpText:p.n2,changeHelpwinVisibility:p.SA})(S);var Z=n(481756),k=n(875964),H=n(552259),R=n(727418),B=n.n(R),z=n(638068);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},V.apply(null,arguments)}function N(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,A(o.key),o)}}function A(e){var t=function(e){if("object"!=I(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==I(t)?t:t+""}function L(e,t,n){return t=D(t),function(e,t){if(t&&("object"==I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,M()?Reflect.construct(t,n||[],D(e).constructor):t.apply(e,n))}function M(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(M=function(){return!!e})()}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function G(e,t){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},G(e,t)}m()(z.Z,{insert:"head",singleton:!1}),z.Z.locals;var $=(0,c.P1)([u.Od,u._e],(function(e,t){return{minZoom:t,currentZoomLvl:e&&e.zoom,scales:(0,H.yu)(e&&e.projection||"EPSG:3857",e&&e.mapOptions&&e.mapOptions.view&&e.mapOptions.view.DPI||null)}})),U=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),L(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(t,e),function(e,t){return t&&N(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,[{key:"render",value:function(){return r().createElement(C,{id:"mapstore-scalebox-container",key:"scalebox-help",helpText:r().createElement(Z.Z,{msgId:"helptexts.scaleBox"})},r().createElement(k.Z,V({key:"scaleBox",label:r().createElement(Z.Z,{msgId:"mapScale"})},this.props)))}}])}(r().Component),X=(0,i.$j)($,{onChange:l.sO})(U);const F={ScaleBoxPlugin:B()(X,{disablePluginIf:"{state('mapType') === 'cesium'}"},{MapFooter:{name:"scale",position:2,tool:!0,priority:1}}),reducers:{}}},481756:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(171703),r=n(805346);const i=(0,o.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(r.Z)},992058:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(923645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".msgapi .mapToolbar .mapstore-tb-helpbadge {\n    display: block;\n    background-color: #777;\n    position: absolute;\n    z-index: 1000;\n    top : -10px;\n    left: -10px;\n}\n\n\n.msgapi #helpbadge-zoomToMaxExtent {\n    display: inline;\n    position: absolute;\n    left: 34px;\n    top: 72px;\n    z-index: 100000\n}\n\n.msgapi #helpbadge-scaleBox {\n    display: inline;\n    position: absolute;\n    left: 116px;\n    bottom: 48px;\n    z-index: 100000\n}\n\n.msgapi #helpbadge-seachBar {\n    display: inline;\n    position: absolute;\n    left: 46px;\n    top: 10px;\n    z-index: 100000\n}\n\n\n.msgapi .btn .badge {\n    position: absolute;\n    top: -10px;\n    left: -10px;\n}\n\n.msgapi .themed .btn .badge {\n    top: -35px;\n    left: -50px;\n}\n\n.msgapi .badge {\n    cursor: pointer;\n}\n\n.msgapi #helpbadge-scaleBox {\n    left: 0 !important;\n}\n\n.msgapi #mapstore-navbar #helpbadge-search-help {\n    position: absolute;\n    left: -10px;\n    bottom: -8px;\n    z-index: 1;\n}\n",""]);const i=r},638068:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(923645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".msgapi #mapstore-scalebox {\n    /*z-index: 10;\n    bottom: 6px;\n    left: -2px;\n    position: absolute;\n    margin: 8px;\n    width: 148px;*/\n}\n\n.msgapi #mapstore-scalebox-container {\n    /*z-index: 10;\n    bottom: -16px;\n    right: 55px;\n    left: auto;\n    position: absolute;\n    margin: 8px;\n    width: 148px;*/\n}\n",""]);const i=r}}]);