(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[23476],{509192:(t,e,o)=>{"use strict";o.d(e,{Z:()=>g});var r=o(45697),n=o.n(r),i=o(124852),p=o.n(i),u=o(38560),c=o(480681),s=o(950966);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function a(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function f(t,e,o){return e=y(e),function(t,e){if(e&&("object"==l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,m()?Reflect.construct(e,o||[],y(t).constructor):e.apply(t,o))}function m(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(m=function(){return!!t})()}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function h(t,e,o){return(e=d(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function d(t){var e=function(t,e){if("object"!=l(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==l(e)?e:e+""}var v=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return h(t=f(this,e,[].concat(r)),"addTooltip",(function(e){if(!t.props.tooltip)return e;var o=p().createElement(c.u,{id:"locate-tooltip"},t.props.tooltip);return p().createElement(s.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:o},e)})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(e,t),o=e,(r=[{key:"render",value:function(){var t=this;return this.addTooltip(p().createElement(u.Z,{id:this.props.id,style:this.props.style,onClick:function(){return t.props.onZoom(t.props.currentZoom+t.props.step)},className:this.props.className,disabled:this.props.currentZoom+this.props.step>this.props.maxZoom||this.props.currentZoom+this.props.step<this.props.minZoom,bsStyle:this.props.bsStyle},this.props.glyphicon?p().createElement(c.gG,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&a(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,r}(p().Component);h(v,"propTypes",{id:n().string,style:n().object,glyphicon:n().string,text:n().string,btnSize:n().oneOf(["large","small","xsmall"]),className:n().string,help:n().oneOfType([n().string,n().element]),step:n().number,currentZoom:n().number,minZoom:n().number,maxZoom:n().number,onZoom:n().func,tooltip:n().element,tooltipPlace:n().string,bsStyle:n().string}),h(v,"defaultProps",{id:"mapstore-zoom",className:"square-button",glyphicon:"plus",btnSize:"xsmall",tooltipPlace:"left",step:1,currentZoom:3,minZoom:0,maxZoom:28,onZoom:function(){},bsStyle:"default",style:{}});const g=v},13573:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>g}),o(775898);var r=o(727418),n=o.n(r),i=o(124852),p=o.n(i),u=o(171703),c=o(22222),s=o(801550),l=o(509192),a=o(805346),f=o(800827);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function y(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function b(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?y(Object(o),!0).forEach((function(e){h(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):y(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function h(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=m(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==m(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var d=(0,c.P1)([f.Od,f._e],(function(t,e){return{currentZoom:t&&t.zoom,id:"zoomout-btn",step:-1,glyphicon:"minus",minZoom:e}})),v=(0,u.connect)(d,{onZoom:s.sO},(function(t,e,o){return b(b(b({},t),e),o)}))(l.Z);const g={ZoomOutPlugin:n()(v,{disablePluginIf:"{state('mapType') === 'cesium'}",Toolbar:{name:"ZoomOut",position:4,tooltip:"zoombuttons.zoomOutTooltip",help:p().createElement(a.Z,{msgId:"helptexts.zoomOut"}),tool:!0,priority:1}}),reducers:{}}},370757:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var r=o(923645),n=o.n(r)()((function(t){return t[1]}));n.push([t.id,".msgapi #zoomin-btn, .msgapi #zoomout-btn {\n    z-index: 1;\n    position: relative;\n}\n",""]);const i=n},775898:(t,e,o)=>{"use strict";var r=o(893379),n=o.n(r),i=o(370757);n()(i.Z,{insert:"head",singleton:!1}),i.Z.locals}}]);