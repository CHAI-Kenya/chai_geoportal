(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[77272,39040],{96829:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(75263),o=r.n(n),i=r(24852),c=r.n(i),l=r(80681);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m(n.key),n)}}function p(e,t,r){return t=f(t),function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,s()?Reflect.construct(t,r||[],f(e).constructor):t.apply(e,r))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function y(e,t,r){return(t=m(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:t+""}var d=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return y(e=p(this,t,[].concat(n)),"onChange",(function(){e.props.onChange(!e.refs.input.props.checked)})),y(e,"isEnabled",(function(){return e.props.isEnabled?e.props.isEnabled(e.props.layouts):0===e.props.layouts.length||e.props.layouts.some((function(t){return t.name.match(e.props.enableRegex)}))})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return c().createElement(l.Checkbox,{disabled:!this.isEnabled(),ref:"input",checked:this.props.checked,onChange:this.onChange},this.props.label)}}])&&u(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(c().Component);y(d,"propTypes",{layouts:o().array,enableRegex:o().oneOfType([o().object,o().string]),label:o().string,onChange:o().func,checked:o().bool,isEnabled:o().func}),y(d,"defaultProps",{layouts:[],enableRegex:/^.*$/,label:"Option",onChange:function(){},checked:!1});const v=d},32395:(e,t,r)=>{"use strict";r.d(t,{W:()=>y});var n=r(24852),o=r.n(n),i=r(75263),c=r.n(i),l=r(22843),a=r(86638),u=r(96829),p=r(27361),s=r.n(p);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var y=function(e,t){var r=e.spec,i=e.property,c=e.label,p=e.onChangeParameter,y=e.enabled,m=void 0===y||y,d=e.actions,v=e.path,g=void 0===v?"params.":v,O=e.additionalProperty,h=void 0===O||O,j=g+i;return(0,n.useEffect)((function(){var e;h&&(null==d||d.addParameter(i,null!==(e=s()(r,j))&&void 0!==e&&e))}),[]),(0,l.CU)({},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){var n,o,i,c;n=e,o=t,i=r[t],c=function(e,t){if("object"!=f(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==f(c)?c:c+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),"{"+m+"}")?o().createElement(u.Z,{checked:!!s()(r,j),label:(0,a.S$)(t.messages,c),onChange:function(e){return p(j,e)}}):null};y.contextTypes={messages:c().object}},1842:(e,t,r)=>{"use strict";r.r(t),r.d(t,{defaultFormat:()=>g,Scale:()=>h,default:()=>j});var n=r(24852),o=r.n(n),i=r(32395),c=r(22843),l=r(71703),a=r(86069),u=r(5346),p=r(34049),s=r(20289),f=r(45959),b=["map","scale","locale","label","optionLabel","actions","onAddParameter"];function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){var n,o,i,c;n=e,o=t,i=r[t],c=function(e,t){if("object"!=y(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==y(c)?c:c+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US",r=new Intl.NumberFormat(t,{maximumFractionDigits:0}).format(e);return"1:".concat(r)}var O=function(e){var t,r,n,o,i,c;return{spec:null!==(t=null==e||null===(r=e.print)||void 0===r?void 0:r.spec)&&void 0!==t?t:{},scale:null==e||null===(n=e.print)||void 0===n||null===(o=n.map)||void 0===o?void 0:o.scale,locale:null!==(i=null==e||null===(c=e.locale)||void 0===c?void 0:c.current)&&void 0!==i?i:"en-US"}},h=function(e){var t,r=e.map,c=e.scale,l=e.locale,a=e.label,s=void 0===a?"print.scale":a,f=e.optionLabel,y=void 0===f?"print.includeScale":f,d=(e.actions,e.onAddParameter),h=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,b),j=e.format||g;return(0,n.useEffect)((function(){var e;(0,p.addTransformer)("scale",(e=j,function(t,r){var n,o,i=null==r||null===(n=r.pages)||void 0===n||null===(o=n[0])||void 0===o?void 0:o.scale,c=O(t).locale;return Promise.resolve(v(v({},r),{},{mapScale:null!=r&&r.includeScale?"".concat(e(i,c,!0)):""}))}),4)}),[]),o().createElement("div",{id:"print-scale"},o().createElement("div",{style:{float:"left",marginRight:5}},o().createElement(u.Z,{msgId:s})," ",j(null!==(t=null==r?void 0:r.scale)&&void 0!==t?t:c,l)),o().createElement(i.W,m({},h,{actions:{addParameter:d},property:"includeScale",label:y})))};const j=(0,c.rx)("PrintScale",{component:(0,l.connect)(O,{onChangeParameter:a.d$,onAddParameter:a.eT})(h),reducers:{locale:s.Z,print:f.Z},containers:{Print:{priority:1,target:"left-panel",position:3}}})},45959:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(86069),o=r(82904),i=r(13218),c=r.n(i),l=r(27361),a=r.n(l),u=r(27418),p=r.n(u),s=r(36968),f=r.n(s);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){var n,o,i,c;n=e,o=t,i=r[t],c=function(e,t){if("object"!=b(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==b(c)?c:c+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={antiAliasing:!0,iconSize:24,legendDpi:96,fontFamily:"Verdana",fontSize:8,bold:!1,italic:!1,resolution:96,name:"",description:"",outputFormat:"pdf"},v=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("_")[0]};const g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{spec:d,capabilities:null,map:null,isLoading:!1,pdfUrl:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.kM:return"print"===t.control?p()({},e,{pdfUrl:null,isLoading:!1,error:null}):e;case n.qp:var r=a()(t,"capabilities.layouts",[{name:"A4"}]),i=r.filter((function(t){return v(t.name)===e.spec.sheet})).length?e.spec.sheet:v(r[0].name);return p()({},e,{capabilities:t.capabilities,spec:p()({},e.spec||{},{sheet:i,resolution:t.capabilities&&t.capabilities.dpis&&t.capabilities.dpis.length&&t.capabilities.dpis[0].value})});case n.U6:return m(m({},e),{},{spec:f()(m({},e.spec),t.name,t.value)});case n.rd:return a()(e.spec,t.name)?e:m(m({},e),{},{spec:f()(m({},e.spec),t.name,t.value)});case n.PB:var l,u,s=t.layers.map((function(e){return e.title?p()({},e,{title:c()(e.title)&&t.currentLocale&&e.title[t.currentLocale]||c()(e.title)&&e.title.default||e.title}):e}));return p()({},e,{map:{center:t.center,zoom:t.zoom,scaleZoom:t.scaleZoom,scale:t.scale,layers:s,size:null!==(l=t.size)&&void 0!==l?l:null===(u=e.map)||void 0===u?void 0:u.size,projection:t.projection},error:null});case n.HA:var b=t.zoom-e.map.scaleZoom;return p()({},e,{map:p()({},e.map,{scaleZoom:t.zoom,zoom:e.map.zoom+b,scale:t.scale})});case n.Yk:return p()({},e,{map:p()({},e.map,{size:t.size})});case n.Fp:return p()({},e,{isLoading:!0,pdfUrl:null,error:null});case n.EZ:return p()({},e,{isLoading:!1,pdfUrl:t.url,error:null});case n.WB:case n.aN:return p()({},e,{isLoading:!1,pdfUrl:null,error:t.error});case n.qH:return p()({},e,{isLoading:!1,pdfUrl:null,error:null});default:return e}}},50148:(e,t,r)=>{"use strict";r.d(t,{DX:()=>i,p6:()=>c,LI:()=>l});var n=r(27418),o=r.n(n),i=function(e){return e.print&&e.print.spec&&o()({},e.print.spec,e.print.map||{})},c=function(e){return e.print&&e.print.capabilities&&e.print.capabilities.layouts.filter((function(t){return 0===t.name.indexOf(e.print.spec.sheet)}))||[]},l=function(e){return e.print&&e.print.spec&&e.print.spec.includeLegend}},80760:(e,t,r)=>{var n=r(89881);e.exports=function(e,t){var r=[];return n(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}},63105:(e,t,r)=>{var n=r(34963),o=r(80760),i=r(67206),c=r(1469);e.exports=function(e,t){return(c(e)?n:o)(e,i(t,3))}},31351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}}}]);