(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[73497],{57604:(t,e,r)=>{"use strict";r.d(e,{XV:()=>n,mE:()=>o,at:()=>i,mD:()=>a,jw:()=>u,yR:()=>c,pF:()=>l,PZ:()=>s});var n="DIMENSION:UPDATE_LAYER_DIMENSION_DATA",o="TIME_MANAGER:SET_CURRENT_TIME",i="TIME_MANAGER:SET_OFFSET_TIME",a="TIME_MANAGER:MOVE_TIME",u=function(t,e,r){return{type:n,dimension:e,layerId:t,data:r}},c=function(t){return{type:o,time:t}},l=function(t){return{type:i,offsetTime:t}},s=function(t){return{type:a,time:t}}},62187:(t,e,r)=>{"use strict";r.d(e,{NH:()=>n,E7:()=>o,N7:()=>i,L9:()=>a,hQ:()=>u,NC:()=>c,c9:()=>l,up:()=>s,AN:()=>f,FZ:()=>p,Fi:()=>y,KB:()=>m,E0:()=>b,Q_:()=>d,hY:()=>v,wO:()=>h,sT:()=>O,wR:()=>g,h1:()=>E,hS:()=>S,zK:()=>w,VS:()=>A,oz:()=>P,FH:()=>T,XN:()=>j,Ym:()=>C,RQ:()=>_});var n="PLAYBACK:START",o="PLAYBACK:PAUSE",i="PLAYBACK:STOP",a="PLAYBACK:SET_FRAMES",u="PLAYBACK:APPEND_FRAMES",c="PLAYBACK:FRAMES_LOADING",l="PLAYBACK:SET_CURRENT_FRAME",s="PLAYBACK:SELECT_PLAYBACK_RANGE",f="PLAYBACK:SET_INTERVAL_DATA",p="PLAYBACK:SETTINGS_CHANGE",y="PLAYBACK:TOGGLE_ANIMATION_MODE",m="PLAYBACK:ANIMATION_STEP_MOVE",b="PLAYBACK:UPDATE_METADATA",d={PLAY:"PLAY",STOP:"STOP",PAUSE:"PAUSE"},v=function(){return{type:n}},h=function(){return{type:o}},O=function(){return{type:i}},g=function(t){return{type:a,frames:t}},E=function(t){return{type:l,frame:t}},S=function(t){return{type:u,frames:t}},w=function(t){return{type:c,loading:t}},A=function(t){return{type:s,range:t}},P=function(t,e){return{type:p,name:t,value:e}},T=function(){return{type:y}},j=function(t){return{type:m,direction:t}},C=function(t){var e=t.next,r=t.previous,n=t.forTime;return{type:b,forTime:n,next:e,previous:r}},_=function(t){return{type:f,timeIntervalData:t}}},96361:(t,e,r)=>{"use strict";r.d(e,{i8:()=>d,ot:()=>v,Ci:()=>h,CX:()=>O});var n=r(66654),o=r.n(n),i=r(13880),a=r.n(i),u=r(49977),c=r(75875),l=r.n(c),s=r(10284);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){var n;return n=function(t,e){if("object"!=f(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==f(n)?n:n+"")in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=function(t){return Object.keys(t).reduce((function(e,r){return void 0!==t[r]&&null!==t[r]?y(y({},e),{},m({},r,t[r])):e}),{})},d=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.service,i=void 0===o?"WMTS":o,a=n.version,c=void 0===a?"1.0.0":a,f=n.tileMatrixSet,p=void 0===f?"EPSG:4326":f,m=n.bbox,d=n.domains,v=n.expandLimit;return u.Observable.defer((function(){return l().get(t,{params:b(y({service:i,REQUEST:"DescribeDomains",version:c,layer:e,tileMatrixSet:p,bbox:m,domains:d,expandLimit:v},r))})})).let(s.oB).switchMap((function(t){return(0,s.sw)(t.data)}))},v=function(t,e,r,n,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=i.service,c=void 0===a?"WMTS":a,f=i.version,p=void 0===f?"1.1.0":f,m=i.tileMatrixSet,d=void 0===m?"EPSG:4326":m,v=i.bbox;return u.Observable.defer((function(){return l().get(t,{params:b(y({service:c,REQUEST:"GetHistogram",resolution:o,histogram:r,version:p,layer:e,tileMatrixSet:d,bbox:v},n))})})).let(s.oB).switchMap((function(t){return(0,s.sw)(t.data)}))},h=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.time,i=n.fromValue,a=n.sort,c=void 0===a?"asc":a,f=n.limit,p=void 0===f?20:f,y=n.fromEnd,m=void 0!==y&&y,d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},v=d.bbox,h=d.tileMatrixSet,O=void 0===h?"EPSG:4326":h,g=d.service,E=void 0===g?"WMTS":g,S=d.version,w=void 0===S?"1.0.0":S;return u.Observable.defer((function(){return l().get(t,{params:b({service:E,version:w,request:"GetDomainValues",tileMatrixSet:O,bbox:v,layer:e,domain:r,fromValue:i,sort:c,limit:p,fromEnd:m,time:o})})})).let(s.oB).switchMap((function(t){return(0,s.sw)(t.data)}))},O=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).url;return o()(t,"/wms")?a()(t,/\/wms$/,"/gwc/service/wmts"):o()(t,"/ows")?a()(t,/\/ows$/,"/gwc/service/wmts"):t}},52595:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n=(0,r(61365).Z)(r(80681).Overlay)},65295:(t,e,r)=>{"use strict";r.d(e,{Z:()=>T});var n=r(24852),o=r.n(n),i=r(1391),a=r.n(i),u=r(14293),c=r.n(u),l=r(75263),s=r.n(l),f=r(30381),p=r.n(f),y=r(80681),m=r(15135),b=r(38560);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,w(n.key),n)}}function h(t,e,r){return e=g(e),function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,O()?Reflect.construct(e,r||[],g(t).constructor):e.apply(t,r))}function O(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(O=function(){return!!t})()}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function S(t,e,r){return(e=w(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t){var e=function(t,e){if("object"!=d(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==d(e)?e:e+""}var A=(0,m.Z)(y.Glyphicon),P=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return S(t=h(this,e,[].concat(n)),"onUpdate",(function(e,r){var n=p()(t.props.date).utc(),o=r?p()(n).add(1,e):p()(n).subtract(1,e);o.isValid()&&!isNaN(o.toDate().getTime())&&t.props.onUpdate(o.toISOString())})),S(t,"onChange",(function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(""!==r){var o=p()(t.props.date).utc(),i=o["day"===e?"date":e]&&p()(o)["day"===e?"date":e](n(r));i.isValid()&&!isNaN(i.toDate().getTime())&&t.props.onUpdate(i.toISOString())}})),S(t,"getForm",(function(){var e=t.props.date&&p()(t.props.date).utc();return[{name:"icon",value:"calendar",type:"icon"},{name:"day",placeholder:"DD",value:e&&e.date()},{name:"month",placeholder:"MM",readOnly:!0,value:e&&e.month(),format:function(t){return!c()(t)&&""!==t&&p().monthsShort(t)},parseValue:function(t){return t-1}},{name:"year",placeholder:"YYYY",value:e&&e.year()},{name:"icon",value:"time",type:"icon"},{name:"hours",placeholder:"hh",value:e&&e.hours()},{name:"separator",value:":",type:"separator"},{name:"minutes",placeholder:"mm",value:e&&e.minutes()},{name:"separator",value:":",type:"separator"},{name:"seconds",placeholder:"ss",value:e&&e.seconds()},{name:"separator",value:e&&e.utcOffset(),type:"separator",format:function(t){return"UTC "+(t>=0?"+":"-")+a()(t/60,2,0)}}]})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){var t=this,e=this.getForm();return o().createElement(y.Form,{className:"ms-inline-datetime ".concat(this.props.className),style:this.props.style},o().createElement(y.FormGroup,{controlId:"inlineDateTime"},this.props.glyph&&o().createElement("div",{style:this.props.clickable?{cursor:"pointer"}:{},onClick:function(){return t.props.clickable&&t.props.onIconClick(t.props.date,t.props.glyph)}},o().createElement(A,{tooltip:this.props.clickable?this.props.tooltip:void 0,tooltipId:this.props.clickable?this.props.tooltipId:void 0,className:"ms-inline-datetime-icon",glyph:this.props.glyph})),e.map((function(e){return"icon"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},o().createElement(A,{glyph:e.value}))||"separator"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},e.format&&e.format(e.value)||e.value)||o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},t.props.showButtons&&o().createElement(b.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name,!0)}},o().createElement(A,{glyph:"chevron-up"})),o().createElement(y.FormControl,{type:"text",readOnly:e.readOnly,placeholder:e.placeholder||e.name,disabled:!t.props.date,value:e.format&&e.format(e.value)||e.value,onChange:function(r){return t.onChange(e.name,r.target.value,e.parseValue)}}),t.props.showButtons&&o().createElement(b.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name)}},o().createElement(A,{glyph:"chevron-down"})))}))))}}])&&v(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);S(P,"propTypes",{date:s().string,clickable:s().bool,onUpdate:s().func,onIconClick:s().func,glyph:s().string,style:s().object,className:s().string,tooltip:s().string,tooltipId:s().string,showButtons:s().bool}),S(P,"defaultProps",{date:"",onIconClick:function(){},clickable:!1,onUpdate:function(){},glyph:"time",style:{},className:"",tooltip:""});const T=P},89919:(t,e,r)=>{"use strict";r.d(e,{hP:()=>l});var n=r(84596),o=r.n(n),i=r(49977),a=r.n(i);function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.startWith.apply(t,function(t){if(Array.isArray(t))return u(t)}(e=r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())},l=function(t,e,r){return function(n){return(r?c(n,o()(t)).catch(r):c(n,o()(t))).concat(a().Observable.from(o()(e)))}}},50886:(t,e,r)=>{"use strict";r.d(e,{w:()=>m});var n=r(49977),o=r.n(n),i=r(96361),a=r(55237);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||p(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=u(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==u(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(t){if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var m=function(t,e,r,n,u){return o().Observable.forkJoin(i.Ci.apply(void 0,f(t(r,s({sort:"asc",fromValue:e?(0,a.p)(u,1e-4,"remove"):u},"end"===n?{fromEnd:!0}:{})))).map((function(t){return t.DomainValues.Domain.split(",")})).map((function(t){return c(t,1)[0]})).catch((function(t){return t&&o().Observable.of(null)})),i.Ci.apply(void 0,f(t(r,s({sort:"desc",fromValue:e?(0,a.p)(u,1e-4,"add"):u},"end"===n?{fromEnd:!0}:{})))).map((function(t){return t.DomainValues.Domain.split(",")})).map((function(t){return c(t,1)[0]})).catch((function(t){return t&&o().Observable.of(null)})))}},37307:(t,e,r)=>{"use strict";r.d(e,{Z:()=>y});var n=r(57604),o=r(80416),i=r(82904),a=r(61868),u=r(30381),c=r.n(u),l=r(66604),s=r.n(l),f=r(35937),p=r.n(f);const y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.XV:return(0,a.t8)("data[".concat(e.dimension,"][").concat(e.layerId,"]"),e.data,t);case n.mE:return(0,a.t8)("currentTime",e.time,t);case n.at:return(0,a.t8)("offsetTime",e.offsetTime,t);case n.mD:if(t.offsetTime&&t.currentTime){var r=c()(t.offsetTime).diff(t.currentTime),u=c()(e.time).add(r);return(0,a.t8)("currentTime",e.time,(0,a.t8)("offsetTime",u.toISOString(),t))}return(0,a.t8)("currentTime",e.time,t);case o.sb:var l=s()(t.data,(function(t){return p()(t,(function(t,r){return r!==e.node}))}));return(0,a.t8)("data",l,t);case i.l:return(0,a.t8)("data",void 0,(0,a.t8)("currentTime",void 0,(0,a.t8)("offsetTime",void 0,t)));default:return t}}},76843:(t,e,r)=>{"use strict";r.d(e,{z2:()=>o,V3:()=>i,dS:()=>a,yt:()=>c,E2:()=>l,Np:()=>s,KC:()=>f,Wq:()=>p,rp:()=>y,PF:()=>m});var n=r(22222),o=function(t){return t&&t.playback&&t.playback.settings},i=function(t){return(o(t)||{}).frameDuration||5},a=function(t){return t&&t.playback&&t.playback.status},u=function(t){return t&&t.playback&&t.playback.frames},c=function(t){var e=u(t)||[];return e[e.length-1]},l=function(t){return t&&t.playback&&t.playback.framesLoading},s=function(t){return t&&t.playback&&t.playback.currentFrame},f=function(t){return function(t){return t&&t.playback&&t.playback.playbackRange}(t)},p=function(t){return(u(t)||[])[s(t)]},y=function(t){return t&&t.playback&&t.playback.metadata},m=(0,n.P1)(u,s,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return{hasNext:t[e+1],hasPrevious:t[e-1]}}))},10284:(t,e,r)=>{"use strict";r.d(e,{sw:()=>b,oB:()=>d});var n=r(49977),o=r.n(n),i=r(27361),a=r.n(i),u=r(5055),c=r(7526);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t){var e="function"==typeof Map?new Map:void 0;return s=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return function(t,e,r){if(f())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,e);var o=new(t.bind.apply(t,n));return r&&p(o,r.prototype),o}(t,arguments,y(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),p(r,t)},s(t)}function f(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(f=function(){return!!t})()}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}r(49843);var m=function(t){function e(t,r){var n,o,i,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(o=this,i=e,a=[t],i=y(i),n=function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(o,f()?Reflect.construct(i,a||[],y(o).constructor):i.apply(o,a))).name="OGCError",n.code=r,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(e,t),r=e,Object.defineProperty(r,"prototype",{writable:!1}),r;var r}(s(Error)),b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0};return o().Observable.bindNodeCallback((function(t,r){return(0,u.parseString)(t,e,r)}))(t)},d=function(t){return t.switchMap((function(t){return"string"==typeof t.data&&t.data.indexOf("ExceptionReport")>0?o().Observable.bindNodeCallback((function(t,e){return(0,u.parseString)(t,{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0},e)}))(t.data).map((function(t){var e=a()(t,"ExceptionReport.Exception.ExceptionText");throw new m(e||"Undefined OGC Service Error",a()(t,"ExceptionReport.Exception.exceptionCode"))})):o().Observable.of(t)}))}},18190:t=>{var e=Math.floor;t.exports=function(t,r){var n="";if(!t||r<1||r>9007199254740991)return n;do{r%2&&(n+=t),(r=e(r/2))&&(t+=t)}while(r);return n}},78302:(t,e,r)=>{var n=r(18190),o=r(80531),i=r(40180),a=r(62689),u=r(88016),c=r(83140),l=Math.ceil;t.exports=function(t,e){var r=(e=void 0===e?" ":o(e)).length;if(r<2)return r?n(e,t):e;var s=n(e,l(t/u(e)));return a(e)?i(c(s),0,t).join(""):s.slice(0,t)}},1391:(t,e,r)=>{var n=r(78302),o=r(88016),i=r(40554),a=r(79833);t.exports=function(t,e,r){t=a(t);var u=(e=i(e))?o(t):0;return e&&u<e?n(e-u,r)+t:t}},13880:(t,e,r)=>{var n=r(79833);t.exports=function(){var t=arguments,e=n(t[0]);return t.length<3?e:e.replace(t[1],t[2])}},19081:(t,e,r)=>{"use strict";t.exports=r(22822)}}]);