(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[80710],{81023:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(80681).Badge},18212:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(24852),o=r.n(n),a=r(75263),i=r.n(a),l=r(5346),c=r(93520),u=r(81023),s=r(38429),m=r(80307),f=r(7412),b=r(70058),p=function(e){var t=e.id,r=e.items,n=e.label,a=e.labelId,i=e.toogleStyle,p=e.toogleImage,d=e.toogleIcon,y=e.dropdownClass,g=e.tabIndex,v=e.badgeValue,h=e.containerNode,O=e.size,j=e.alignRight,E=e.variant,I=e.responsive,S=r.map((function(e,t){return"plugin"===e.type&&e.Component?o().createElement("li",null,o().createElement(e.Component,{variant:"default",className:e.className,showMessage:!0})):"divider"===e.type?o().createElement(c.Z.Divider,{key:t}):o().createElement(o().Fragment,null,o().createElement(c.Z.Item,{key:t,href:e.href,style:e.style,as:null!=e&&e.items?"span":"a",target:e.target,className:e.className},e.labelId&&o().createElement(l.Z,{msgId:e.labelId})||e.label,(0,b.mk)(e.badge)&&o().createElement(u.Z,null,e.badge)),(null==e?void 0:e.items)&&o().createElement("div",{className:"gn-sub-flat-menu-block"},function(e){return e&&e.map((function(e){var t=e.labelId,r=e.href,n=e.badge,a=e.target,i=e.type,c=e.Component,m=e.className;return"plugin"===i&&c?o().createElement("li",null,o().createElement(c,{variant:"default",className:m,showMessage:!0})):function(e){var t=e.labelId,r=e.href,n=e.badge,a=e.target;return o().createElement(o().Fragment,null,o().createElement(s.Z,{href:r,target:a},t&&o().createElement(l.Z,{msgId:t}),(0,b.mk)(n)&&o().createElement(u.Z,null,n)))}({labelId:t,href:r,badge:n,target:a})}))}(null==e?void 0:e.items)))})),w=o().createElement(c.Z.Toggle,{id:"gn-toggle-dropdown-".concat(t),bsStyle:E,tabIndex:g,style:i,bsSize:O,noCaret:!0},p?o().createElement("img",{src:p}):void 0,d?o().createElement(f.Z,{name:d}):void 0,a&&!I&&o().createElement(l.Z,{msgId:a})||n,a&&I&&o().createElement("div",{className:"gn-content-responsive"},o().createElement("span",null,o().createElement(l.Z,{msgId:a})),o().createElement("span",null,o().createElement(f.Z,{name:"plus"}))),(0,b.mk)(v)&&o().createElement(u.Z,null,v));return o().createElement(c.Z,{className:"".concat(y),pullRight:j},w,h?(0,m.createPortal)(o().createElement(c.Z.Menu,null,S),h.parentNode):o().createElement(c.Z.Menu,null,S))};p.propTypes={id:i().number,items:i().array.isRequired,label:i().string,labelId:i().string,toogleStyle:i().object,toogleImage:i().string,state:i().object,dropdownClass:i().string,tabIndex:i().number,badgeValue:i().number,containerNode:i().element};const d=p},38429:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(24852),o=r.n(n),a=["children","className"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const l=(0,n.forwardRef)((function(e,t){var r=e.children,n=e.className,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a);return o().createElement("a",i({},l,{ref:t,className:"nav-link".concat(n?" ".concat(n):"")}),r)}))},41984:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(24852),o=r.n(n),a=r(75263),i=r.n(a),l=r(84596),c=r.n(l),u=r(81023),s=r(38429),m=r(5346),f=r(18212),b=r(70058),p=function(e){var t=e.item,r=e.menuItemsProps,n=e.containerNode,a=e.tabIndex,i=e.classItem,l=void 0===i?"":i,p=e.size,d=e.alignRight,y=e.variant,g=e.resourceName,v=r.formatHref,h=r.query,O=t.id,j=t.type,E=t.label,I=t.labelId,S=void 0===I?"":I,w=t.items,P=void 0===w?[]:w,N=t.href,Z=t.style,C=t.badge,k=void 0===C?"":C,A=t.image,R=t.Component,q=t.target,x=t.className,D="btn".concat(y&&" btn-".concat(y)||"").concat(p&&" btn-".concat(p)||"").concat(x?" ".concat(x):""),z=k;if("dropdown"===j)return o().createElement(f.Z,{id:O,items:P,label:E,labelId:S,toogleStyle:Z,toogleImage:A,dropdownClass:"".concat(l).concat(x?" ".concat(x):""),tabIndex:a,badgeValue:z,containerNode:n,size:p,alignRight:d,variant:y,responsive:t.responsive});if(("custom"===j||"plugin"===j)&&R)return o().createElement(R,{variant:y,size:p,className:x});if("link"===j)return o().createElement(s.Z,{href:N,target:q,className:D},S&&o().createElement(m.Z,{msgId:S,msgParams:{resourceName:g}})||E);if("divider"===j)return o().createElement("div",{className:"gn-menu-divider",style:Z});if("filter"===j){var T=c()(h.f||[]).find((function(e){return e===t.id}));return o().createElement(s.Z,{target:q,style:Z,href:v({query:{f:t.id},replaceQuery:!T}),className:D},S&&o().createElement(m.Z,{msgId:S})||E,(0,b.mk)(z)&&o().createElement(u.Z,null,z))}return null};p.propTypes={item:i().object.isRequired,menuItemsProps:i().object.isRequired,containerNode:i().element,tabIndex:i().number,draggable:i().bool,classItem:i().string};const d=p;function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){var n,o,a,i;n=e,o=t,a=r[t],i=function(e,t){if("object"!=y(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==y(i)?i:i+"")in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=(0,n.forwardRef)((function(e,t){var r=e.items,n=e.containerClass,a=e.childrenClass,i=e.query,l=e.formatHref,c=e.size,u=e.alignRight,s=e.variant,m=e.resourceName;return o().createElement("ul",{ref:t,className:"".concat(n)},r.map((function(e,t){return o().createElement("li",{key:t},o().createElement(d,{variant:e.variant||s,item:v(v({},e),{},{id:e.id||t}),size:c,alignRight:u,menuItemsProps:{query:i,formatHref:l},classItem:a,resourceName:m}))})))}));h.propTypes={items:i().array.isRequired,containerClass:i().string,childrenClass:i().string,query:i().object,formatHref:i().func},h.defaultProps={items:[],query:{},user:void 0,formatHref:function(){return"#"},containerClass:""};const O=h},76329:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(24852),o=r.n(n),a=r(98611),i=r.n(a),l=r(22843);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){var n,o,a,i;n=e,o=t,a=r[t],i=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==c(i)?i:i+"")in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const b=function(e){var t=e.items,r=e.loadedPlugins,a=e.loaderComponent,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],u=(0,n.useRef)({});u.current={items:t,loadedPlugins:r,loaderComponent:a};var f=i()(Object.keys(r||{}),","),b=(0,n.useMemo)((function(){return function(e){return m(e.items).sort((function(e,t){return e.position>t.position?1:-1})).map((function(t){return s(s({},t),{},{Component:t.Component||(0,l.KB)(t,e.loadedPlugins,e.loaderComponent||o().createElement("div",null))})}))||[]}(u.current)}),[f].concat(m(c)));return b}},70058:(e,t,r)=>{"use strict";r.d(t,{gj:()=>f,QH:()=>b,mk:()=>p,BK:()=>d,bH:()=>y,_y:()=>g});var n=r(27361),o=r.n(n),a=r(14293),i=r.n(a),l=r(22843),c=r(68523);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function f(e,t,r){var n=t?t.filter((function(e){return e.type===r})):void 0;return void 0===n||n&&0===n.length||n&&n.some((function(t){return e&&e.includes(null==t?void 0:t.value)}))}function b(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",n=t.split(r).map((function(t){return function(e,t){return 0===(null==t?void 0:t.indexOf("${"))?o()(e,t.replace(/^\$\{(.*)\}$/,"$1")):t}(e,t)}));return n.join(r)}var p=function(e){return!(""===e||i()(e))},d=function(e){return function t(r){return r&&"object"===m(r)?Array.isArray(r)?r.map(t):Object.fromEntries(Object.entries(r).map((function(e){var r=u(e,2),n=r[0],o=r[1];return[n,t(o)]}))):e(r)}},y=function e(t,r){return t&&t.reduce((function(t,n){var o=n;return Object.entries(n).forEach((function(t){var a=u(t,2),i=a[0],l=a[1];Array.isArray(l)&&(o[i]=e(n[i],r))})),r(o)&&t.push(o),t}),[])},g=function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).filterFunc,n=void 0===r?function(e){return!e.disableIf}:r;return u(y([d((function(t){return(0,l.CU)((function(t){return o()(e,t)}),(0,c.z)(),t)}))(t)],n),1)[0]}}}]);