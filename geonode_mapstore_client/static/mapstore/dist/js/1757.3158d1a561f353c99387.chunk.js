(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1757],{557579:(e,t,n)=>{"use strict";n.d(t,{Jm:()=>c,AE:()=>a,dm:()=>f,n8:()=>l,BV:()=>d,Cz:()=>s,wb:()=>p,$A:()=>y,eb:()=>v,v8:()=>b,yY:()=>g,J5:()=>m,ff:()=>E,S0:()=>h,Q6:()=>w,kb:()=>O,GV:()=>S,LH:()=>D,lG:()=>T,Km:()=>I,pV:()=>j,V5:()=>P,IT:()=>G,VR:()=>A,jv:()=>W,oU:()=>_,h9:()=>N,jB:()=>R,Ym:()=>C,uU:()=>M,ke:()=>L,nw:()=>k,A4:()=>U,C2:()=>x,Qe:()=>V,sZ:()=>Y,Ij:()=>z,Ko:()=>F,E9:()=>H,K4:()=>$,c_:()=>B,uT:()=>J,bS:()=>X,Rz:()=>Z,t4:()=>K,_k:()=>q,w2:()=>Q,YA:()=>ee,sD:()=>te,Gn:()=>ne,Rb:()=>re,fy:()=>ie,kr:()=>oe,f:()=>ue,Ff:()=>ce,Pt:()=>ae,ep:()=>fe});var r=n(423570),i=n.n(r);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c="WIDGETS:INSERT",a="WIDGETS:NEW",f="WIDGETS:EDIT",l="WIDGETS:EDIT_NEW",d="WIDGETS:EDITOR_CHANGE",s="WIDGETS:EDITOR_SETTING_CHANGE",p="WIDGETS:UPDATE",y="WIDGETS:UPDATE_PROPERTY",v="WIDGETS:UPDATE_LAYER",b="WIDGETS:CHANGE_LAYOUT",g="WIDGETS:DELETE",m="WIDGETS:REPLACE",E="WIDGETS:CLEAR_WIDGETS",h="WIDGETS:ADD_DEPENDENCY",w="WIDGETS:REMOVE_DEPENDENCY",O="WIDGETS:LOAD_DEPENDENCIES",S="WIDGETS:RESET_DEPENDENCIES",D="WIDGETS:TOGGLE_CONNECTION",T="WIDGETS:OPEN_FILTER_EDITOR",I="WIDGETS:EXPORT_CSV",j="WIDGETS:EXPORT_IMAGE",P="WIDGETS:WIDGET_SELECTED",G="WIDGETS:NEW_CHART",A="floating",W="dependencySelector",_=/^widgets\["?([^"\]]*)"?\]\.?(.*)$/,N=/^maps\["?([^"\]]*)"?\]\.?(.*)$/,R=/^widgets\["?([^"\]]*)"?\]\.maps\["?([^"\]]*)"?\]\.?(.*)$/,C="WIDGET:TOGGLE_COLLAPSE",M="WIDGET:TOGGLE_COLLAPSE_ALL",L="WIDGET:TOGGLE_MAXIMIZE",k="WIDGET:TOGGLE_TRAY",U=function(e){return{type:a,widget:e}},x=function(){return{type:G}},V=function(e){return{type:c,target:arguments.length>1&&void 0!==arguments[1]?arguments[1]:A,id:i()(),widget:e}},Y=function(e){return{type:m,target:arguments.length>1&&void 0!==arguments[1]?arguments[1]:A,widgets:e}},z=function(e,t,n){return{type:y,id:e,target:arguments.length>4&&void 0!==arguments[4]?arguments[4]:A,key:t,value:n,mode:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"replace"}},F=function(e){return{type:v,layer:e}},H=function(e){return{type:g,target:arguments.length>1&&void 0!==arguments[1]?arguments[1]:A,widget:e}},$=function(){return{type:E}},B=function(e,t){return{type:b,allLayouts:t,layout:e,target:arguments.length>2&&void 0!==arguments[2]?arguments[2]:A}},J=function(e){return{type:f,widget:e}},X=function(e,t){return{type:l,widget:e,settings:t}},Z=function(e,t){return{type:d,key:e,value:t}},K=function(e,t){return{type:s,key:e,value:t}},q=function(e){return{type:O,dependencies:e}},Q=function(e,t,n,r){return{type:D,active:e,availableDependencies:t,options:n,target:r}},ee=function(e){return K("step",e)},te=function(e){var t=e.data,n=void 0===t?[]:t,r=e.title;return{type:I,data:n,title:void 0===r?"export":r}},ne=function(e,t){return{type:P,widget:e,opts:t}},re=function(e){var t=e.widgetDivId;return{type:j,widgetDivId:t}},ie=function(){return{type:T}},oe=function(e,t){return n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){var r,i,u;r=e,i=t,u=n[t],(i=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(t)?t:String(t)}(i))in r?Object.defineProperty(r,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[i]=u})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({active:e},t),K("".concat(W),n);var n},ue=function(e){return{type:C,widget:e,target:arguments.length>1&&void 0!==arguments[1]?arguments[1]:A}},ce=function(){return{type:M,target:arguments.length>0&&void 0!==arguments[0]?arguments[0]:A}},ae=function(e){return{type:L,widget:e,target:arguments.length>1&&void 0!==arguments[1]?arguments[1]:A}},fe=function(e){return{type:k,value:e}}},367306:(e,t,n)=>{"use strict";n.d(t,{Wy:()=>o,i$:()=>u,P0:()=>c,NB:()=>a,MZ:()=>f,J:()=>l,DZ:()=>d,hS:()=>s,CN:()=>p,fd:()=>y,Yl:()=>v,Ip:()=>b});var r=n(22222),i=n(324684),o=function(e){return e&&e.dashboard&&e.dashboard.editor&&e.dashboard.editor.available},u=function(e){return e&&e.dashboard&&e.dashboard.editing},c=function(e){return e&&e.dashboard&&e.dashboard.showConnections},a=function(e){return e&&e.dashboard&&e.dashboard.resource},f=function(e){return e&&e.dashboard&&e.dashboard.loading},l=function(e){return e&&e.browser&&e.browser.mobile},d=(0,r.P1)(i.F,a,l,(function(e,t,n){return n?!n:t&&t.canEdit||isNaN(e.substr(-4))})),s=function(e){var t;return null==e||null===(t=e.dashboard)||void 0===t?void 0:t.originalData},p=function(e){return e&&e.dashboard&&e.dashboard.services},y=function(e){return e&&e.dashboard&&e.dashboard.selectedService},v=function(e){return e&&e.dashboard&&e.dashboard.mode||"view"},b=function(e){var t;return(null===(t=e.dashboard)||void 0===t?void 0:t.isNew)||!1}},401757:(e,t,n)=>{"use strict";n.d(t,{E2:()=>S,YI:()=>I,GW:()=>j,zm:()=>P,lF:()=>G,Jb:()=>A,E5:()=>W,YR:()=>_,jx:()=>C,zA:()=>M,r0:()=>L,xI:()=>k,ie:()=>U,p:()=>x,yZ:()=>V,hF:()=>Y,Xu:()=>z,HU:()=>F,nA:()=>H,JT:()=>$,Wo:()=>B,um:()=>J,h9:()=>X,md:()=>Z}),n(313311);var r=n(227361),i=n.n(r),o=n(984596),u=n.n(o),c=n(701469),a=n.n(c),f=n(385564),l=n.n(f),d=n(800827),s=n(675110),p=n(324684),y=n(557579),v=n(246781),b=n(367306),g=n(22222),m=n(784715);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===E(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(196958);var S=function(e){return i()(e,"widgets.builder.settings")},D=function(e){return i()(e,"widgets.dependencies")||{}},T=function(e){return Object.keys(D(e)).map((function(t){return D(e)[t]}))},I=function(e){return i()(e,"widgets.builder.editor")},j=(0,g.P1)(I,s.Iz,(function(e){return(0,b.Wy)(e)&&(0,b.i$)(e)}),(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).layer||!(arguments.length>2?arguments[2]:void 0)&&(arguments.length>1?arguments[1]:void 0)})),P=function(e){return i()(e,"widgets.containers[".concat(y.VR,"].widgets"))},G=function(e){return i()(e,"widgets.containers[".concat(y.VR,"].collapsed"))},A=function(e){return i()(e,"widgets.containers[".concat(y.VR,"].maximized"))},W=(0,g.P1)(P,G,A,(function(e,t,n){if(e){if(null!=n&&n.widget)return e.filter((function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id===n.widget.id}));if(t)return e.filter((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id;return!t[e]}))}return e})),_=(0,g.P1)(G,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e)})),N=function(e){return(P(e)||[]).filter((function(){return"map"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).widgetType}))},R=function(e){return(P(e)||[]).filter((function(){return"table"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).widgetType}))},C=(0,g.P1)(N,R,d.Od,p.F,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3?arguments[3]:void 0;return{availableDependencies:l()(e.map((function(e){var t=e.id,n=e.maps;return(void 0===n?[]:n).map((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).mapId;return"widgets[".concat(t,"].maps[").concat(e,"].map")}))}))).concat(u()(n).map((function(){return"map"}))).concat(u()(t).filter((function(){return-1===r.indexOf("viewer")})).map((function(e){var t=e.id;return"widgets[".concat(t,"]")})))}})),M=(0,g.P1)(N,R,d.Od,p.F,I,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,o=i&&"map"!==i.widgetType?i&&i.layer||{}:i&&i.map&&i.map.layers||[];return{availableDependencies:l()(e.map((function(e){var t=e.id,n=e.maps;return(void 0===n?[]:n).map((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).mapId;return"widgets[".concat(t,"].maps[").concat(e,"].map")}))}))).concat(u()(n).map((function(){return n?"map":null}))).filter((function(e){return e})).concat(u()(t).filter((function(){return-1===r.indexOf("viewer")})).filter((function(e){return a()(o)||o.name===e.layer.name})).filter((function(e){return i&&i.id!==e.id})).map((function(e){var t=e.id;return"widgets[".concat(t,"]")})))}})),L=function(e){return i()(S(e),"".concat(y.jv))},k=function(e){return i()(L(e),"active")},U=(0,g.P1)(P,(function(e){return(0,v.Ug)(e)})),x=function(e){return i()(e,"widgets.containers[".concat(y.VR,"].layouts"))},V=function(e){return i()(e,"widgets.containers[".concat(y.VR,"].layout"))},Y=function(e){return i()(e,"widgets.containers[".concat(y.VR,"].widgets"))},z=function(e){return i()(e,"widgets.tray")},F=function(e){return(Y(e)||[]).length>0},H=function(e){return i()(e,"widgets.containers[".concat(y.VR,"].layouts"))},$=function(e){return i()(I(e),"layer")},B=function(e){return i()(e,"widgets.builder.editor.returnToFeatureGrid",!1)},J=function(e){return i()(I(e),"filter")},X=(0,m.y)(D,T,(function(e){return T(e).map((function(t){return 0===t.indexOf("map.")?i()((0,d.Od)(e),t.slice(4)):t.match(y.oU)?(0,v.D6)(t,P(e),N(e)):i()(e,t)}))}),(function(e,t,n){return t.reduce((function(t,r,i){return w(w({},t),{},O({},Object.keys(e)[i],n[i]))}),{})})),Z=(0,g.zB)({widgets:P,layouts:x,catalogs:b.CN})},246781:(e,t,n)=>{"use strict";n.d(t,{sq:()=>M,Mt:()=>C,D6:()=>N,Ug:()=>R,IO:()=>L});var r=n(227361),i=n.n(r),o=n(313311),u=n.n(o),c=(n(281763),n(59854),n(630998)),a=n.n(c),f=n(264721),l=n.n(f),d=n(441609),s=n.n(d),p=n(150361),y=n.n(p),v=n(957557),b=n.n(v),g=n(984596),m=n.n(g),E=n(557579),h=function(e,t,n){var r,i,o=[],u=[],c=e;for(o.push(c);o.length>0;)if(!n[c=o.shift()])for(n[c]=!0,u.push(c),r=0;r<t.length;r+=1)(i=t[r])[0]!==c||n[i[1]]?i[1]!==c||n[i[0]]||o.push(i[0]):o.push(i[1]);return u},w=n(443143),O=n(423570),S=n.n(O);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==D(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===D(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||A(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,u,c=[],a=!0,f=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){f=!0,i=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(f)throw i}}return c}}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=function(e,t){var n=G(E.oU.exec(e),2),r=n[0],i=n[1];return r?u()(t,{id:i}):null},N=function(e,t,n){var r=E.oU.exec(e),o=r&&r[2];o=function(e,t,n){var r=G(E.h9.exec(e)||[],2),i=r[0],o=r[1],c=(u()(n,{id:t})||{}).maps;if(i&&!s()(c)){var f=a()(c,{mapId:o});return i.replace(o,f)}return e}(o,r[1],n);var c=_(e,t);return o?i()(c,o):c},R=function(){var e=function(e){for(var t={},n=[],r=0,i=e.length;r<i;r+=1){var o=e[r],u=o[0],c=o[1],a=null;t[u]?t[c]||(a=c):a=u,a&&n.push(h(a,e,t))}return n}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(t,n){var r=i()(n,"mapSync")&&i()(n,"dependenciesMap")||{},o=Object.keys(r).map((function(t){return _(r[t],e)}))||[];return[].concat(P(t),P(o.filter((function(e){return void 0!==e})).map((function(e){return[n.id,e.id]}))))}),[])}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[])),t=(0,w.qH)(190,340,e.length+1,{base:10,range:360,s:.67,v:.67});return e.map((function(e,n){return{color:t[n],widgets:e}}))},C=function(){return[{value:"Count",label:"widgets.operations.COUNT"},{value:"Sum",label:"widgets.operations.SUM"},{value:"Average",label:"widgets.operations.AVG"},{value:"StdDev",label:"widgets.operations.STDDEV"},{value:"Min",label:"widgets.operations.MIN"},{value:"Max",label:"widgets.operations.MAX"}]},M=function(e){var t=["layers","viewport","zoom","center"],n=y()(e),r=n.widgets||{},i=[];return I(I({},n),{},{widgets:r.map((function(e){var n=I({},e);if("map"===e.widgetType&&e.map){var r=S()();n=b()(I(I({},e),{},{selectedMapId:r,maps:m()(I(I({},e.map),{},{mapId:r}))}),"map"),i.push({widgetId:n.id,mapId:r})}if(!s()(n.dependenciesMap)){var o=Object.values(n.dependenciesMap)[0],c=G(E.oU.exec(o)||[],2)[1],a=u()(i,{widgetId:c})||{},f=a.widgetId,d=a.mapId;if(f)return I(I({},n),{},{dependenciesMap:Object.keys(n.dependenciesMap).filter((function(e){return void 0!==n.dependenciesMap[e]})).reduce((function(e,r){return l()(t,r)?I(I({},e),{},j({},r,n.dependenciesMap[r].replace(".map.",".maps[".concat(d,"].")))):I(I({},e),{},j({},r,n.dependenciesMap[r]))}),{})})}return n}))})},L=function(){var e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,n=P(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]);return n.filter((function(e){return e.dependenciesMap})).some((function(t){return Object.values(t.dependenciesMap).some((function(t){return(E.oU.exec(t)||[])[1]===e}))}))&&(n=n.map((function(n){var r=n.dependenciesMap,i=!s()(r)&&(E.oU.exec(Object.values(r)[0])||[])[1];return I(I({},n),!s()(r)&&i===e&&{dependenciesMap:Object.keys(r).reduce((function(e,n){var i=G(E.jB.exec(r[n])||[],3)[2];return I(I({},e),{},j({},n,i?r[n].replace(i,t):r[n]))}),{})})}))),n}}}]);