(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[68750],{93993:(e,r,t)=>{"use strict";t.d(r,{rv:()=>n,TN:()=>o,R_:()=>a,Ry:()=>i,un:()=>u,Yc:()=>l,Sp:()=>c,VT:()=>s,YT:()=>p,xz:()=>f,J6:()=>v,P1:()=>d,SF:()=>y,Rf:()=>b,Oi:()=>m,XR:()=>g,nu:()=>O,wc:()=>h,Jl:()=>S,cf:()=>E,fU:()=>P,tn:()=>w,nk:()=>j,Hg:()=>T});var n="GEONODE_SEARCH:SEARCH_RESOURCES",o="GEONODE_SEARCH:UPDATE_RESOURCES",a="GEONODE_SEARCH:LOADING_RESOURCES",i="GEONODE_SEARCH:REQUEST_RESOURCE",u="GEONODE_SEARCH:UPDATE_RESOURCES_METADATA",l="GEONODE:SET_FEATURED_RESOURCES",c="GEONODE_SEARCH:UPDATE_FEATURED_RESOURCES",s="GEONODE_REDUCE_TOTAL_COUNT",p="GEONODE_INCREASE_TOTAL_COUNT",f="GEONODE_SET_SEARCH_CONFIG",v="GEONODE:GET_FACET_ITEMS",d="GEONODE:SET_FACET_ITEMS";function y(e,r,t){return{type:n,params:e,pathname:r,reset:t}}function b(e,r){return{type:o,resources:e,reset:r}}function m(e){return{type:u,metadata:e}}function g(e){return{type:a,loading:e}}function O(e,r){return{type:i,pk:e,ctype:r}}function h(e){return{type:l,data:e}}function S(e){return{type:c,action:e,pageSize:arguments.length>1&&void 0!==arguments[1]?arguments[1]:4}}function E(){return{type:s}}function P(){return{type:p}}function w(e){return{type:f,config:e}}function j(){return{type:v}}function T(e){return{type:d,facetItems:e}}},864818:(e,r,t)=>{"use strict";t.d(r,{ZP:()=>W});var n=t(49977),o=t(618446),a=t.n(o),i=t(701469),u=t.n(i),l=t(414293),c=t.n(l),s=t(337326),p=t(93993),f=t(643892),v=t(275982),d=t(472500),y=t.n(d),b=t(227361),m=t.n(b),g=t(737275),O=t(322843),h=t(770058);function S(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var E=t(138334),P=t(12530),w=t(274621),j=t(76907),T=t(455877),A=t.n(T),R=t(776342),_=t(72466),D=["page"],C=["page"];function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function U(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,i,u=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(u.push(n.value),u.length!==r);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw o}}return u}}(e,r)||I(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||I(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,r){if(e){if("string"==typeof e)return M(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?M(e,r):void 0}}function M(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function F(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function G(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){H(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function H(e,r,t){var n;return n=function(e,r){if("object"!=k(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==k(n)?n:String(n))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var z="GEONODE_SEARCH:UPDATE_RESOURCES_REQUEST",q=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["d"];return Object.keys(e).filter((function(e){return!r.includes(e)})).reduce((function(r,t){return e[t]&&0!==e[t].length?G(G({},r),{},H({},t,u()(e[t])?e[t].map((function(e){return e+""})):e[t]+"")):r}),{})},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,n=t.defaultPage,o=void 0===n?1:n,a=t.pagination,i=t.exclude,u=y().parse(e||"",!0).query,l=(u.page,F(u,D)),c=q(G(G({},r),a?u:l),i),s=c.page;return[F(c,C),s?parseFloat(s):o]},X=function(e,r){var t,o,a=e.params,i=e.pageSize,u=e.reset,l=e.location,c=r.getState(),f=function(e){var r=(0,O.bh)(e,(0,g.u8)("monitorState")),t=(0,g.u8)("geoNodeCustomFilters"),n=function(e){return m()(r,e)},o=(0,h.BK)((function(e){return(0,O.CU)(n,{},e)}))(t||{});return Object.keys(o).reduce((function(e,r){return[].concat(function(e){if(Array.isArray(e))return S(e)}(t=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,r){if(e){if("string"==typeof e)return S(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?S(e,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[{id:r,query:o[r]}]);var t}),[])}(c),v=q(G(G({},a),null==c||null===(t=c.gnsearch)||void 0===t||null===(o=t.config)||void 0===o?void 0:o.defaultQuery));return n.Observable.defer((function(){return(0,s.jh)(G(G({},v),{},{pageSize:i,customFilters:f}))})).switchMap((function(e){var r,t=e.resources,o=e.total,i=e.isNextPageAvailable,s=(0,w.np)(c),f=null==s||null===(r=s.info)||void 0===r?void 0:r.preferred_username,v=(0,P.VC)(t,f);return n.Observable.of.apply(n.Observable,N(v.map((function(e){return(0,E.tv)(e)}))).concat([(0,p.Rf)(t,u),(0,p.Oi)({isNextPageAvailable:i,params:a,locationSearch:l.search,locationPathname:l.pathname,total:o}),(0,p.XR)(!1)]))})).catch((function(){return n.Observable.of((0,p.Rf)([],!0),(0,p.Oi)({isNextPageAvailable:!1,params:a,locationSearch:l.search,locationPathname:l.pathname,total:0,error:!0}),(0,p.XR)(!1))})).startWith((0,p.XR)(!0))},V=function(e){return"/"!==e&&_.Jd.filter((function(e){return e.shouldNotRequestResources})).some((function(r){return r.path.some((function(r){var t;return null===(t=(0,R.LX)(e,r))||void 0===t?void 0:t.isExact}))}))};const W={gnsSearchResourcesEpic:function(e,r){return e.ofType(p.rv).switchMap((function(e){var t,o,i,u,l,c,s,p,f=e.pathname,d=void 0===f?"/":f,b=e.params,m=e.reset,g=r.getState(),O=!(null==g||null===(t=g.gnsearch)||void 0===t||null===(o=t.config)||void 0===o||!o.pagination),h=q(null==g||null===(i=g.gnsearch)||void 0===i?void 0:i.params,[]),S=q(b,[]),E=O?[]:["page"],P=Object.keys(S).reduce((function(e,r){return E.includes(r)?e:G(G({},e),{},H({},r,S[r]))}),{}),w=((null===(u=g.router)||void 0===u||null===(l=u.location)||void 0===l?void 0:l.pathname)||"/")===d,j=!a()(h,S),T=(null==g||null===(c=g.gnsearch)||void 0===c?void 0:c.locationSearch)||"",A=y().format({query:P});return T===A&&w?m||j?n.Observable.of((p={action:"PUSH",params:S,location:null==g||null===(s=g.router)||void 0===s?void 0:s.location},{type:z,payload:p,reset:void 0})):n.Observable.empty():n.Observable.of((0,v.VF)(G(G({},d&&!w&&{pathname:d}),{},{search:A})))}))},gnsSearchResourcesOnLocationChangeEpic:function(e,r){return e.ofType(v.nk,z).filter((function(e){var r=e.payload;return"PUSH"===r.action||"POP"===r.action})).switchMap((function(e){var t,o,i,u,l=r.getState(),c=!(null==l||null===(t=l.gnsearch)||void 0===t||null===(o=t.config)||void 0===o||!o.pagination),s=null==l||null===(i=l.gnsearch)||void 0===i||null===(u=i.config)||void 0===u?void 0:u.pageSize;if(!s)return n.Observable.empty();var p,f=e.payload||{},v=f.isFirstRendering,d=f.location,y=l.gnsearch.nextParams,b=U(L(l.gnsearch.locationSearch,l.gnsearch.params,{pagination:c}),2),m=b[0],g=b[1],O=U(L(d.search,y||{},{pagination:c}),2),h=O[0],S=O[1],E=e.payload.location.pathname;if(!y||e.reset||V(E)){var P,w=c?S:1,j=G(G({},h),{},{page:w}),T=c?a()(G(G({},m),{},{page:g}),G(G({},h),{},{page:S})):a()(m,h);return!V(E)&&(null!=l&&null!==(P=l.gnsearch)&&void 0!==P&&P.isFirstRequest||v||!T||e.reset)?X({params:j,pageSize:s,reset:!0,location:d},r):n.Observable.empty()}var A=!1;if(c){var R;p=null!=l&&null!==(R=l.gnsearch)&&void 0!==R&&R.isFirstRequest||a()(m,h)?S:1,A=!0}else{var _,D=(null===(_=l.gnsearch)||void 0===_?void 0:_.resources.length)||0,C=Math.floor(D/s),k=S===g+1&&S===C+1;p=(A=v||!a()(m,h)||!k)?1:S}var N=G(G({},h),{},{page:p});return X({params:N,pageSize:s,reset:A,location:d},r)}))},gnsSelectResourceEpic:function(e,r){return e.ofType(p.Ry).switchMap((function(e){var t,o;if(c()(e.pk))return n.Observable.of((0,f.DF)(null));var a=((null===(t=r.getState().gnsearch)||void 0===t?void 0:t.resources)||[]).find((function(r){var t=r.pk,n=r.resource_type;return t===e.pk&&e.ctype===n}));return(o=n.Observable.defer((function(){return(0,s.yi)(e.ctype,e.pk)})).switchMap((function(e){return n.Observable.of((0,f.DF)(G(G({},e),{},{"@ms-detail":!0})))})).catch((function(e){return n.Observable.of((0,f.mN)(e.data||e.message))}))).startWith.apply(o,N(a?[(0,f.DF)(G(G({},a),{},{"@ms-detail":!0}),!0)]:[(0,f.Q$)()]))}))},getFeaturedResourcesEpic:function(e,r){var t=r.getState,o=void 0===t?function(){}:t;return e.ofType(p.Sp).switchMap((function(e){var r=e.action,t=e.pageSize,a=function(e,r){var t,n,o,a,i,u;if(!e)return 1;var l=(null===(t=r.gnsearch)||void 0===t||null===(n=t.featuredResources)||void 0===n?void 0:n.page)||1,c=null===(o=r.gnsearch)||void 0===o||null===(a=o.featuredResources)||void 0===a?void 0:a.isNextPageAvailable;return"next"===e&&c?l+1:(null===(i=r.gnsearch)||void 0===i||null===(u=i.featuredResources)||void 0===u?void 0:u.isPreviousPageAvailable)?l-1:1}(r,o());return n.Observable.defer((function(){return(0,s.B5)(a,t)})).switchMap((function(e){var r;return n.Observable.of((0,p.wc)(G(G({},e),{},{isNextPageAvailable:!(null==e||null===(r=e.links)||void 0===r||!r.next),isPreviousPageAvailable:!(null==e||!e.links.previous),loading:!1})))})).catch((function(e){return n.Observable.of((0,f.mN)(e.data||e.message),(0,p.wc)({loading:!1}))})).startWith((0,p.wc)({loading:!0}))}))},gnWatchStopCopyProcessOnSearch:function(e,r){return e.ofType(E.v).filter((function(e){var r;return(null==e||null===(r=e.payload)||void 0===r?void 0:r.processType)===P.zj.COPY_RESOURCE})).flatMap((function(e){var t,o,a,i,u,l,c,f,v,d;if((null==e||null===(t=e.payload)||void 0===t?void 0:t.error)||(null==e||null===(o=e.payload)||void 0===o||null===(a=o.output)||void 0===a?void 0:a.status)===P.N5.FAILED)return n.Observable.empty();var y=null==e||null===(i=e.payload)||void 0===i||null===(u=i.output)||void 0===u||null===(l=u.output_params)||void 0===l||null===(c=l.output)||void 0===c?void 0:c.uuid;if(void 0===y)return n.Observable.empty();var b=null==e||null===(f=e.payload)||void 0===f||null===(v=f.output)||void 0===v||null===(d=v.input_params)||void 0===d?void 0:d.instance;return n.Observable.defer((function(){return(0,s.LS)(y)})).switchMap((function(e){var t,o=((null===(t=r.getState().gnsearch)||void 0===t?void 0:t.resources)||[]).reduce((function(r,t){return t.pk==="".concat(b)?[].concat(N(r),[G(G({},e),{},{"@temporary":!0,pk2:A()()}),t]):[].concat(N(r),[t])}),[]);return n.Observable.of((0,p.Rf)(o,!0))}))}))},gnsRequestResourceOnLocationChange:function(e,r){return e.ofType(v.nk).filter((function(e){var r=e.payload;return"PUSH"===r.action||"POP"===r.action})).switchMap((function(e){var t=r.getState(),o=(e.payload||{}).location,a=y().parse((null==o?void 0:o.search)||"",!0).query,i=(0,j.yK)(t)||{pk:"",resource_type:""},u=U(((null==a?void 0:a.d)||"").split(";"),2),l=u[0],c=u[1];return"".concat(null==i?void 0:i.pk)===l&&"".concat(null==i?void 0:i.resource_type)===c?n.Observable.empty():n.Observable.of((0,p.nu)(l||void 0,c))}))},gnGetFacetItems:function(e){return e.ofType(p.J6).switchMap((function(){return n.Observable.defer((function(){return(0,s.nk)()})).switchMap((function(e){return n.Observable.of((0,p.Hg)(e))}))}))}}},331869:(e,r,t)=>{"use strict";t.d(r,{ZP:()=>P});var n=t(49977),o=t(375875),a=t.n(o),i=t(178598),u=t(138334),l=t(12530),c=t(452992),s=t(337326),p=t(643892),f=t(93993),v=t(782904),d=t(275982),y=t(197395);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function m(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return g(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){S(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function S(e,r,t){var n;return n=function(e,r){if("object"!=b(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==b(n)?n:String(n))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var E=S(S({},l.zj.DELETE_RESOURCE,s.fg),l.zj.COPY_RESOURCE,s.T5);const P={gnMonitorAsyncProcesses:function(e,r){return e.ofType(u.oc).flatMap((function(e){var t,o,i,s,p=((null==e||null===(t=e.payload)||void 0===t?void 0:t.output)||{}).status_url;return!p||null!=e&&null!==(o=e.payload)&&void 0!==o&&o.error?null!=e&&null!==(s=e.payload)&&void 0!==s&&s.error?n.Observable.of((0,u.iC)(h(h({},e.payload),{},{completed:!0})),(0,y.vU)({title:"gnviewer.invalidUploadMessageError",message:"gnviewer.cannotPerfomAction"})):n.Observable.of((0,u.iC)(h(h({},e.payload),{},{completed:!0}))):n.Observable.interval(l.nN[null==e||null===(i=e.payload)||void 0===i?void 0:i.processType]||1e3).takeWhile((function(){return!(0,c.jp)(r.getState(),e.payload)})).exhaustMap((function(){return(0,c.jp)(r.getState(),e.payload)?n.Observable.empty():n.Observable.defer((function(){return a().get(p).then((function(e){return e.data})).catch((function(e){var r;return{error:(null==e||null===(r=e.data)||void 0===r?void 0:r.detail)||(null==e?void 0:e.statusText)||(null==e?void 0:e.message)||!0}}))})).switchMap((function(r){var t,o;return r.error||r.status===l.N5.FINISHED||r.status===l.N5.FAILED?n.Observable.of.apply(n.Observable,[(0,u.iC)(h(h({},e.payload),{},{output:r,completed:!0}))].concat(m((null==e||null===(t=e.payload)||void 0===t?void 0:t.processType)!==l.zj.DELETE_RESOURCE||null!=e&&null!==(o=e.payload)&&void 0!==o&&o.resource["@temporary"]?[]:[(0,f.cf)()]))):n.Observable.of((0,u.iF)(h(h({},e.payload),{},{output:r})))}))}))}))},gnProcessResources:function(e){return e.ofType(p.Pv).flatMap((function(e){return n.Observable.defer((function(){return a().all(e.resources.map((function(r){return E[e.processType](r).then((function(t){return{resource:r,output:t,processType:e.processType}})).catch((function(t){var n;return{resource:r,error:(null==t||null===(n=t.data)||void 0===n?void 0:n.detail)||(null==t?void 0:t.statusText)||(null==t?void 0:t.message)||!0,processType:e.processType}}))})))})).switchMap((function(r){return n.Observable.of.apply(n.Observable,[(0,v.Xg)(e.processType,"loading",!1),(0,v.Xg)(e.processType,"value",void 0)].concat(m(r.map((function(e){return(0,u.tv)(e)}))),m(e.redirectTo?[(0,d.VF)(e.redirectTo)]:[])))})).startWith((0,v.Xg)(e.processType,"loading",!0))}))},gnDownloadResource:function(e){return e.ofType(p.IH).switchMap((function(e){var r=null==e?void 0:e.resource;return n.Observable.defer((function(){return(0,s.Rk)(r).then((function(e){var t=e.output,n=e.headers;return(0,i.saveAs)(new Blob([t],{type:null==n?void 0:n["content-type"]}),r.title),{resource:r}})).catch((function(e){var t;return{resource:r,error:(null==e||null===(t=e.data)||void 0===t?void 0:t.detail)||(null==e?void 0:e.statusText)||(null==e?void 0:e.message)||!0}}))})).switchMap((function(e){return(e||{}).error?n.Observable.of((0,p.V1)(h({},e.resource)),(0,y.vU)({title:"gnviewer.invalidUploadMessageError",message:"gnviewer.cannotPerfomAction"})):n.Observable.of((0,p.V1)(h({},e.resource)))}))}))}}},805207:(e,r,t)=>{"use strict";t.d(r,{Z:()=>v});var n=t(414293),o=t.n(n),a=t(93993),i=t(643892);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){var n,o,a,i;n=e,o=r,a=t[r],i=function(e,r){if("object"!=u(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==u(i)?i:String(i))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var f={resources:[],params:{},previousParams:{},isFirstRequest:!0,featuredResources:{resources:[]}};const v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case a.rv:return p(p({},e),{},{nextParams:r.params});case a.TN:return p(p({},e),{},{isFirstRequest:!1,resources:r.reset?l(r.resources):[].concat(l(e.resources),l(r.resources))});case i.Oq:var t=e.resources.map((function(e){var t;return e.pk===(null==r||null===(t=r.data)||void 0===t?void 0:t.pk)?null==r?void 0:r.data:e}));return p(p({},e),{},{isFirstRequest:!1,resources:l(t)});case a.un:return p(p(p(p({},e),{},{total:r.metadata.total,isNextPageAvailable:r.metadata.isNextPageAvailable,error:r.metadata.error},r.metadata.params&&{params:r.metadata.params,previousParams:e.params,nextParams:null}),!o()(r.metadata.locationSearch)&&{locationSearch:r.metadata.locationSearch}),!o()(r.metadata.locationPathname)&&{locationPathname:r.metadata.locationPathname});case a.R_:return p(p({},e),{},{loading:r.loading},r.loading&&{error:!1});case a.Yc:return p(p({},e),{},{featuredResources:p(p({},e.featuredResources),r.data)});case a.VT:return p(p({},e),{},{total:e.total-1});case a.YT:return p(p({},e),{},{total:e.total+1});case a.xz:return p(p({},e),{},{config:r.config});case a.P1:return p(p({},e),{},{facetItems:r.facetItems});default:return e}}},555168:(e,r,t)=>{"use strict";t.d(r,{Z:()=>p});var n=t(138334),o=t(643892);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){var n,o,i,u;n=e,o=r,i=t[r],u=function(e,r){if("object"!=a(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==a(u)?u:String(u))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var s={processes:[],downloads:[]};const p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case o.Pv:return c(c({},e),{},{processes:[].concat(i(e.processes.filter((function(e){return!r.resources.find((function(t){var n;return(null==e||null===(n=e.resource)||void 0===n?void 0:n.pk)===(null==t?void 0:t.pk)&&(null==e?void 0:e.processType)===r.processType}))}))),i(r.resources.map((function(e){return{resource:e,processType:r.processType}}))))});case n.oc:return c(c({},e),{},{processes:[].concat(i(e.processes.filter((function(e){var t,n,o,a;return!((null==e||null===(t=e.resource)||void 0===t?void 0:t.pk)===(null==r||null===(n=r.payload)||void 0===n||null===(o=n.resource)||void 0===o?void 0:o.pk)&&(null==e?void 0:e.processType)===(null==r||null===(a=r.payload)||void 0===a?void 0:a.processType))}))),[r.payload])});case n.v:case n.jo:return c(c({},e),{},{processes:e.processes.map((function(e){var t,n,o,a;return(null==e||null===(t=e.resource)||void 0===t?void 0:t.pk)===(null==r||null===(n=r.payload)||void 0===n||null===(o=n.resource)||void 0===o?void 0:o.pk)&&(null==e?void 0:e.processType)===(null==r||null===(a=r.payload)||void 0===a?void 0:a.processType)?r.payload:e}))});case o.IH:return c(c({},e),{},{downloads:[].concat(i(e.downloads),[r.resource])});case o.e3:return c(c({},e),{},{downloads:i(e.downloads.filter((function(e){var t,n;return(null==e||null===(t=e.resource)||void 0===t?void 0:t.pk)===(null==r||null===(n=r.resource)||void 0===n?void 0:n.pk)})))});default:return e}}}}]);