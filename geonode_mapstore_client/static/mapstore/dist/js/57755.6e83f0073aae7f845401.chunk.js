(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[57755],{807691:(e,r,t)=>{"use strict";t.d(r,{ZP:()=>M});var n=t(49977),o=t.n(n),i=t(557579),a=t(555927),s=t(782904),c=t(95797),u=t(197395),l=t(807878),f=t(263516),v=t(367306),d=t(274621),b=t(401757),p=t(324684),y=t(989077),g=t(291312),h=t(589919),m=t(275982),O=t(246781),w=["data"],S=["status","statusText","data","message"];function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function D(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return E(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?E(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function T(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?T(Object(t),!0).forEach((function(r){var n,o,i,a;n=e,o=r,i=t[r],a=function(e,r){if("object"!=j(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==j(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const M={openDashboardWidgetEditor:function(e){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,t=void 0===r?function(){}:r;return e.ofType(i.AE,i.dm).filter((function(){return(0,v.Wy)(t())})).switchMap((function(){return o().Observable.of((0,a.D_)(!0))}))},closeDashboardWidgetEditorOnFinish:function(e){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,t=void 0===r?function(){}:r;return e.ofType(i.Jm).filter((function(){return(0,v.Wy)(t())})).switchMap((function(){return o().Observable.of((0,a.D_)(!1))}))},initDashboardEditorOnNew:function(e){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,t=void 0===r?function(){}:r;return e.ofType(i.AE).filter((function(){return(0,v.Wy)(t())})).switchMap((function(e){return o().Observable.of((0,i.bS)(k(k({legend:!1,mapSync:!1,cartesian:!0,yAxis:!0},e),{},{type:void 0}),{step:0}))}))},closeDashboardEditorOnExit:function(e){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,t=void 0===r?function(){}:r;return e.ofType(m.nk).filter((function(){return(0,v.Wy)(t())})).filter((function(){return(0,v.i$)(t())})).switchMap((function(){return o().Observable.of((0,a.D_)(!1))}))},handleDashboardWidgetsFilterPanel:function(e){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,t=void 0===r?function(){}:r;return e.ofType(i.lG).filter((function(){return(0,v.Wy)(t())})).switchMap((function(){return o().Observable.of(c.gT.apply(void 0,D((r=t(),n=(0,b.JT)(r),[n.search&&n.search.url,n.name]))),(0,l.F)((0,b.um)(t())),(0,s.Xg)("queryPanel","enabled",!0)).concat(o().Observable.race(e.ofType(l.Wm).take(1),e.ofType(s.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.control,t=e.property;return"queryPanel"===r&&(!t||"enabled"===t)})).take(1)).switchMap((function(e){return(e.filterObj?o().Observable.of((0,i.Rz)("filter",e.filterObj)):o().Observable.empty()).merge(o().Observable.of((0,s.Xg)("widgetBuilder","enabled",!0)))}))).takeUntil(e.ofType(m.nk,i.dm).merge(e.ofType(s.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.control,t=e.property;return"widgetBuilder"===r&&0==!t})))).concat(o().Observable.of((0,s.Xg)("queryPanel","enabled",!1)));var r,n}))},filterAnonymousUsersForDashboard:function(e,r){return e.ofType(f.c8,f.Nv).filter((function(){return"/dashboard"===(0,p.F)(r.getState())})).switchMap((function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),(0,d.jl)(r.getState())?o().Observable.empty():o().Observable.of((0,a.AN)({status:403}))}))},loadDashboardStream:function(e,r){var t=r.getState,n=void 0===t?function(){}:t;return e.ofType(a.zX).switchMap((function(e){var r=e.id;return(0,g.RX)(r).map((function(e){var r=e.data,t=P(e,w);return(0,a.rR)(t,(0,O.sq)(r))})).let((0,h.hP)((0,a.vM)(!0,"loading"),(0,a.vM)(!1,"loading"),(function(e){var r=window.location.href.match("dashboard-embedded")?"dashboardEmbedded":"dashboard",t=r+".errors.loading.unknownError";return 403===e.status&&(t=r+".errors.loading.pleaseLogin",(0,d.jl)(n())&&(t=r+".errors.loading.dashboardNotAccessible")),404===e.status&&(t=r+".errors.loading.dashboardDoesNotExist"),o().Observable.of((0,u.vU)({title:r+".errors.loading.title",message:t}),(0,a.AN)(k(k({},e),{},{messageId:t})))})))}))},reloadDashboardOnLoginLogout:function(e){return e.ofType(a.zX).switchMap((function(r){var t=r.id;return e.ofType(f.XP,f.Nv).switchMap((function(){return o().Observable.of((0,a.o2)(t)).delay(1e3)})).takeUntil(e.ofType(m.nk))}))},saveDashboard:function(e){return e.ofType(a.aR).exhaustMap((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).resource;return(e.id?(0,g.id)(e):(0,g.SN)(e)).switchMap((function(r){return o().Observable.of((0,a.sA)(r),e.id?(0,a.gE)(!1):(0,a.pB)(!1),e.id?(0,a.o2)(r):(0,m.VF)("/dashboard/".concat(r))).merge(o().Observable.of((0,u.$Z)({id:"DASHBOARD_SAVE_SUCCESS",title:"saveDialog.saveSuccessTitle",message:"saveDialog.saveSuccessMessage"})).delay(e.id?0:1e3))})).let((0,h.hP)((0,a.vM)(!0,"saving"),(0,a.vM)(!1,"saving"))).catch((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.status,t=e.statusText,n=e.data,i=e.message,s=P(e,S);return o().Observable.of((0,a.GD)(r?{status:r,statusText:t,data:n}:i||s),(0,a.vM)(!1,"saving"))}))}))},exportDashboard:function(e){return e.ofType(a.Kv).switchMap((function(e){var r=e.data,t=e.fileName;return o().Observable.of([JSON.stringify(k({},r)),t,"application/json"]).do((function(e){return y.LR.apply(void 0,D(e))})).map((function(){return(0,s.Xi)("export")}))}))},importDashboard:function(e){return e.ofType(a.zV).switchMap((function(e){var r=e.file,t=e.resource;return o().Observable.defer((function(){return(0,y.zr)(r[0]).then((function(e){return e}))})).switchMap((function(e){return o().Observable.of((0,a.rR)(t,e),(0,s.Xi)("import"))})).catch((function(e){return o().Observable.of((0,u.vU)({title:"dashboard.errors.loading.title"}),(0,a.AN)(k({},e)))}))}))}}},24412:(e,r,t)=>{"use strict";t.d(r,{Z:()=>f});var n=t(555927),o=t(557579),i=t(761868),a=t(984596),s=t.n(a);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){var n,o,i,a;n=e,o=r,i=t[r],a=function(e,r){if("object"!=c(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==c(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showConnections:!0,services:null,saveServiceLoading:!1},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case n.BJ:return(0,i.t8)("editor.available",r.available,e);case n._y:case o.wb:case o.Jm:case o.yY:return(0,i.t8)("editing",r.editing,e);case n.vk:return(0,i.t8)("showConnections",r.show,e);case n.uI:return(0,i.t8)("showSaveModal",r.show,(0,i.t8)("saveErrors",void 0,e));case n.mg:return(0,i.t8)("showSaveAsModal",r.show,(0,i.t8)("saveErrors",void 0,e));case n.E9:var t;return l(l({},e),{},{originalData:r.data,resource:r.resource,services:null===(t=r.data)||void 0===t?void 0:t.catalogs});case n.R4:return l(l({},e),{},{originalData:void 0,resource:void 0,mode:"view",services:void 0});case n.SW:return(0,i.t8)("saveErrors",s()(r.error),e);case n.$l:return(0,i.t8)("saveErrors",void 0,e);case n.E5:var a;return l(l({},e),{},{services:e.services||r.services,selectedService:(null===(a=r.service)||void 0===a?void 0:a.key)||""});case n.s6:return(0,i.t8)("services",r.services,e);case n.B_:return l(l({},e),{},{mode:r.mode,isNew:r.isNew,saveServiceLoading:!1});case n.TA:return l(l({},e),{},{saveServiceLoading:r.loading});case n.CF:var c=r.services,u=r.service;u.isNew=!1,u.showAdvancedSettings=!1,delete u.old,c[u.key]=u;var f=u.key;return l(l({},e),{},{services:c,selectedService:f,mode:"view"});case n.js:var v,d,b=r.services,p=r.service;(b[p.key]||b[null===(v=p.old)||void 0===v?void 0:v.key])&&(delete b[p.key]||b[null===(d=p.old)||void 0===d?void 0:d.key]);var y=Object.keys(b)[0]||"";return l(l({},e),{},{services:b,mode:"view",selectedService:y});case n.CP:return(0,i.t8)("loading"===r.name?"loading":"loadFlags.".concat(r.name),r.value,(0,i.t8)("loading",r.value,e));default:return e}}}}]);