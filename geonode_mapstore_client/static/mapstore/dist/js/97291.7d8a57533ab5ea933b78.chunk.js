(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[97291],{285148:(t,n,r)=>{"use strict";r.d(n,{Qw:()=>v,jo:()=>h,m$:()=>O,AF:()=>j,WT:()=>S,ns:()=>w,RP:()=>P,aK:()=>A,oP:()=>D});var e=r(675110),o=r(55237),i=r(22222),u=r(227361),a=r.n(u),c=r(313311),l=r.n(c);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function s(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,n){if(t){if("string"==typeof t)return y(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,n):void 0}}function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function p(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function b(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){d(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function d(t,n,r){var e;return e=function(t,n){if("object"!=f(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,"string");if("object"!=f(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n),(n="symbol"==f(e)?e:String(e))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var v=function(t,n){return function(r){return a()(r,"dimension.data[".concat(n,"][").concat(t,"]"))}},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return l()(t.dimensions||[],{name:n})},h=function(t,n){return function(r){return v(t.id,n)(r)||g(t,n)}},O=function(t){return(0,e.l2)(t).reduce((function(n,r){var e=h(r,"time")(t);return e?b(b({},n),{},d({},r.id,e)):n}),{})},j=function(t){return(0,e.l2)(t).filter((function(t){return g(t,"time")}))},S=function(t){var n=a()(t,"dimension.currentTime");return n&&n.split("/")[0]},w=function(t){return a()(t,"dimension.offsetTime")},P=function(t){return!!w(t)},A=((0,i.P1)(O,(function(t){return Object.keys(t).reduce((function(n,r){return[].concat(s(n),s(t[r]&&t[r].values||[]))}),[]).sort()||[]})),function(t){return function(n){return s(a()(h(t,"time")(n),"values",[])).sort()}}),D=function(t,n){var r=v(n,"time")(t),e=r&&r.domain&&r.domain.split("--");if(e&&2===e.length)return e&&{start:e[0],end:e[1]};var i,u,a=r&&r.domain&&r.domain.split(",");if(a&&a.length>0){var c=(i=(0,o.tz)(a),u=2,function(t){if(Array.isArray(t))return t}(i)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===n){if(Object(r)!==r)return;c=!1}else for(;!(c=(e=i.call(r)).done)&&(a.push(e.value),a.length!==n);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(i,u)||m(i,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return{start:c[0],end:c[1]}}return null}},997291:(t,n,r)=>{"use strict";r.d(n,{YK:()=>S,oo:()=>w,zb:()=>P,en:()=>A,pW:()=>D,ei:()=>x,Hc:()=>E,cX:()=>T,__:()=>k,E2:()=>_,Li:()=>C,fP:()=>F,uy:()=>M,gB:()=>N,Ry:()=>R,m_:()=>$,dJ:()=>B,rV:()=>L,qJ:()=>Q,pn:()=>W,F3:()=>q});var e=r(227361),o=r.n(e),i=r(91175),u=r.n(i),a=r(22222),c=r(784715),l=r(986267),f=r(55237),s=r(285148),m=r(800827),y=r(675110);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function b(t){return function(t){if(Array.isArray(t))return j(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||O(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function v(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){g(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function g(t,n,r){var e;return e=function(t,n){if("object"!=p(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,"string");if("object"!=p(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n),(n="symbol"==p(e)?e:String(e))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function h(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===n){if(Object(r)!==r)return;c=!1}else for(;!(c=(e=i.call(r)).done)&&(a.push(e.value),a.length!==n);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||O(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,n){if(t){if("string"==typeof t)return j(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(t,n):void 0}}function j(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var S=function(t){return o()(t,"timeline.range")},w=function(t){return o()(t,"timeline.settings.expandLimit")},P=function(t){return o()(t,"timeline.settings.collapsed")},A=function(t){return o()(t,"timeline.settings.autoSelect")},D=function(t){return o()(t,"timeline.settings.snapType")||"start"},x=function(t){return o()(t,"timeline.settings.snapRadioButtonEnabled")||!1},E=function(t){return o()(t,"timeline.settings.endValuesSupport")},T=function(t){return o()(t,"timeline.settings.mapSync")},I=function(t,n){return(t||[]).reduce((function(t,r){return[].concat(b(t),b(function(t,n){var r=h(t.split("/"),3),e=r[0],o=r[1],i=r[2];if(i&&"0"!==i){var u=(0,f.Xu)({start:e,end:o,duration:i},n),a=u.count,c=u.start,l=u.end;return a>50?[{start:e,end:o,duration:i,type:"range",content:"".concat(a," items")}]:(0,f.tr)({start:c,end:l,duration:i}).map((function(t){return{start:new Date(t),end:new Date(t),type:"point"}}))}return isNaN(new Date(e).getTime())?null:[v({start:new Date(e),end:new Date(o||e),type:o?"range":"point"},o&&{className:"interval"})]}(r,n)))}),[]).filter((function(t){return t&&t.start}))},k=(0,c.y)(s.m$,S,(function(t){return o()(t,"timeline.rangeData")}),(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return b(Object.keys(t).map((function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return t&&t.values||t&&t.domain&&!(0,f._q)(t.domain)?I(t.values||t.domain.split(","),n):r&&r.histogram?function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(t.domain&&t.domain.values)return I(t.domain.values,n);if(t.histogram&&t.histogram.domain&&t.histogram.values){var r=h(t.histogram.domain.split("/"),3),e=r[0],o=r[1],i=r[2],u=Math.max.apply(Math,b(t.histogram.values)),a=(0,f.jb)({start:e,end:o,duration:i});return t.histogram.values.map((function(t,n){return v(v({},a[n]),{},{type:"range",itemType:"histogram",count:t,className:"histogram-item",content:'<div><div class="histogram-box" style="height: '.concat(100*t/u,'%"></div> <span class="histogram-count">').concat(t,"</span></div>")})}))}return[]}(r,n):[]}(t[e],n,r[e]).map((function(){return v(v({content:" "},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},{group:e})}))})).reduce((function(t,n){return[].concat(b(t),b(n))}),[]))})),_=function(t){return o()(t,"timeline.loading")},C=function(t){return o()(t,"timeline.selectedLayer")},F=function(t){return(0,y.CA)(t,C(t))},M=function(t){return F(t)&&F(t).name},N=function(t){return F(t)&&F(t).dimensions&&u()(F(t).dimensions.filter((function(t){return"time"===t.name})))},R=function(t){return o()(N(t),"source.url")},$=(0,a.P1)(s.WT,s.ns,(function(t,n){return{start:t,end:n}})),B=function(t){return(0,s.oP)(t,C(t))},L=s.AF,Q=(0,a.P1)(L,(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).length>0})),W=function(t){return!P(t)&&Q(t)},q=function(t){return function(n){var r=((0,m.Od)(n)||{}).bbox;if(!r)return{};var e=(0,s.Qw)(t,"time")(n),i=o()(e,"source.version"),u=Object.keys(r.bounds).reduce((function(t,n){return v(v({},t),{},g({},n,parseFloat(r.bounds[n])))}),{});if(!u||!T(n))return{};if("1.2"!==i){var a=(0,s.Qw)(t,"space")(n),c=o()(a,"domain.CRS");if(!c||!u||!T(n))return{};var f=h((0,l.reprojectBbox)(u,(0,m.uy)(n),c),4),y=f[0],p=f[1],b=f[2],d=f[3];return b<y&&"EPSG:4326"===c&&(b+=360),{bbox:"".concat(y,",").concat(p,",").concat(b,",").concat(d),crs:c}}var O=u.minx,j=u.miny,S=u.maxx,w=u.maxy,P=r.crs;return{bbox:"".concat(O,",").concat(j,",").concat(S,",").concat(w,",").concat(P)}}}}}]);