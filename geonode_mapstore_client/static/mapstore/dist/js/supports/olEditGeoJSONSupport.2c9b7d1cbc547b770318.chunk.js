(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[47238],{487959:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>H});var o=r(124852),n=r(973410),i=r(473392),a=r(701577),l=r(372445),u=r(169141),c=r(831219),s=r(409371),f=r(898185),y=r(120767),d=r(552329),p=r(869669),g=r(15265),m=r(752043),v=r(944538),h=r(870295),w=r(218672),b=r(916651),_=r(798090),P=r(186977),O=r(717621),j=r.n(O),S=r(436403),G=r(854788);function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function C(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||L(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,T(o.key),o)}}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return(t=T(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e){var t=function(e){if("object"!=Z(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=Z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Z(t)?t:t+""}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,i,a,l=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(o=i.call(r)).done)&&(l.push(o.value),l.length!==t);u=!0);}catch(e){c=!0,n=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw n}}return l}}(e,t)||L(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){if(e){if("string"==typeof e)return I(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}var x=new u.Z,N=function(e,t){var r=e.getView().getProjection().getCode();return(0,b.transformLineToArcs)(t.map((function(e){var t=(0,b.reproject)(e,r,"EPSG:4326");return[t.x,t.y]}))).map((function(e){var t=(0,b.reproject)(e,"EPSG:4326",r);return[t.x,t.y]}))};function R(e){return e.find((function(e){return void 0!==e[2]}))?e.map((function(e){var t=A(e,3),r=t[0],o=t[1],n=t[2];return[r,o,void 0===n?0:n]})):e}function M(e){var t=null==e?void 0:e.type;return"Point"===t?{type:"Point",coordinates:R([e.coordinates])[0]}:"LineString"===t?{type:"LineString",coordinates:R(e.coordinates)}:"Polygon"===t?{type:"Polygon",coordinates:e.coordinates.map(R)}:e}function J(e){var t=e.map,r=e.olFeature,o=e.feature,n=e.modifyPropertiesToFeatureProperties,i=void 0===n?function(){return{}}:n,a=t.getView().getProjection().getCode(),l=r.clone(),u=l.get("@properties")||{},c=u.geometryType;if("Circle"===c&&l.getGeometry()instanceof p.Z&&(u=D(D({},u),{},{radius:l.getGeometry().getRadius()}),l.setGeometry(new m.Z(l.getGeometry().getCenter()))),"Circle"===c&&l.getGeometry()instanceof _.Z){u=D(D({},u),l.get("@properties"));var s=l.getGeometry().getGeometries();l.setGeometry(s[s.length-1].clone())}var f=x.writeFeatureObject(l,{featureProjection:a,dataProjection:"EPSG:4326"}).geometry;return D(D({},o),{},{geometry:M(f),properties:i(u,o)})}function z(e,t){if(void 0===t)return e;var r=j()(e).toRgb(),o=r.r,n=r.g,i=r.b;return"rgba(".concat([o,n,i,t].join(", "),")")}const V=function(){return e=function e(){var t,r,o=this,f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"_onSingleClick",(function(){o._draw&&!o._draw.active&&(o._draw.setActive(!0),o._modify.setActive(!1))})),this._map=f.map;var d=f.geojson;this._featureToModifyProperties=(0,G.cC)({getGeometryType:null==f?void 0:f.getGeometryType});var p=G.r2,m=f.onEditEnd?f.onEditEnd:function(){},b=(0,G.E4)(f.style),_=!!f.enablePolygonHoles,O=!1,j=new n.Z({wrapX:!1,format:new u.Z,features:[]});this._layer=new i.Z({source:j,style:this._createStyleFunction({map:this._map,style:b}),zIndex:1/0}),this.setGeoJSON(d),this._modify=new a.Z({source:j,style:function(e){var t,r,n,i;return e.get("features").forEach((function(t){var r=t.get("@modifyGeometry"),n=t.get("@properties")||{},i=n.geometryType,a=n.radius;if(r&&"Circle"===i){var l,u,c=e.getGeometry().getCoordinates(),s=t.getGeometry().getGeometries(),f=s[1].getCoordinates(),y=o._map.getView().getProjection(),d=a;c[0]===f[0]&&c[1]===f[1]||(l=(0,w.vs)(f,y,"EPSG:4326"),u=(0,w.vs)(c,y,"EPSG:4326"),d=(0,h.Sp)(l,u));var p=(0,g.iu)((0,w.vs)(f,y,"EPSG:4326"),d,128);p.transform("EPSG:4326",y),s[0].setCoordinates(p.getCoordinates()),r.setGeometries(s),t.set("@properties",D(D({},t.get("@properties")),{},{radius:d}))}})),new c.ZP({image:new s.Z({stroke:new y.Z({color:z(null==b||null===(t=b.cursor)||void 0===t?void 0:t.color,null==b||null===(r=b.cursor)||void 0===r?void 0:r.opacity),width:null==b||null===(n=b.cursor)||void 0===n?void 0:n.width}),radius:null==b||null===(i=b.cursor)||void 0===i?void 0:i.radius})})}}),this._modify.on("modifystart",(function(e){e.features.forEach((function(e){var t=e.getGeometry();"GeometryCollection"===t.getType()&&e.set("@modifyGeometry",t.clone(),!0)}))})),this._modify.on("modifyend",(function(e){e.features.forEach((function(e){var t=e.get("@modifyGeometry");t&&(e.setGeometry(t),e.unset("@modifyGeometry",!0))})),m(o._normalizeGeoJSONResult((function(t){var r=e.features.getArray().find((function(e){return e.getId()===t.id}));return r?J({map:o._map,olFeature:r,feature:t,modifyPropertiesToFeatureProperties:p}):t})))})),this._map.addInteraction(this._modify),this._map.addLayer(this._layer),this._map.on("singleclick",this._onSingleClick),"LineString"===(null==d||null===(t=d.geometry)||void 0===t?void 0:t.type)&&(this._draw=new l.ZP({type:"LineString",stopClick:!0,freehandCondition:S.Fi,style:function(e){var t,r,n,i,a,l,u,f,d,p,g,m,h=A(j.getFeatures(),1)[0],w=(h.get("@properties")||{}).geodesic,_=h.getGeometry().getCoordinates(),P=e.getGeometry().get("@coordinates"),S=!O&&[_[_.length-1],e.getGeometry().getCoordinates()],G=P||S;return[].concat(C(G?[new c.ZP({geometry:new v.Z(G),stroke:new y.Z(D({color:z(null==b||null===(t=b.lineDrawing)||void 0===t?void 0:t.color,null==b||null===(r=b.lineDrawing)||void 0===r?void 0:r.opacity),width:null==b||null===(n=b.lineDrawing)||void 0===n?void 0:n.width},(null==b||null===(i=b.lineDrawing)||void 0===i?void 0:i.dashLength)&&{lineDash:[b.lineDrawing.dashLength]}))})].concat(C(w?[new c.ZP({geometry:new v.Z(N(o._map,G)),stroke:new y.Z(D({color:z(null==b||null===(a=b.line)||void 0===a?void 0:a.color,null==b||null===(l=b.line)||void 0===l?void 0:l.opacity),width:null==b||null===(u=b.line)||void 0===u?void 0:u.width},(null==b||null===(f=b.line)||void 0===f?void 0:f.dashLength)&&{lineDash:[b.line.dashLength]}))})]:[])):[]),[new c.ZP({image:new s.Z({stroke:new y.Z({color:z(null==b||null===(d=b.cursor)||void 0===d?void 0:d.color,null==b||null===(p=b.cursor)||void 0===p?void 0:p.opacity),width:null==b||null===(g=b.cursor)||void 0===g?void 0:g.width}),radius:null==b||null===(m=b.cursor)||void 0===m?void 0:m.radius})})])},geometryFunction:function(e,t){var r=t,o=A(j.getFeatures(),1)[0];r||(r=new v.Z([]));var n=o.getGeometry().getCoordinates();return r.setCoordinates([].concat(C(n),C(e))),r.set("@coordinates",[n[n.length-1]].concat(C(e))),r}}),this._map.addInteraction(this._draw),this._draw.setActive(!1),this._draw.on("drawstart",(function(){(O=!O)||(o._draw.setActive(!1),o._modify.setActive(!0))})),this._draw.on("drawend",(function(e){o._draw.setActive(!1),o._modify.setActive(!0),O=!1,m(o._normalizeGeoJSONResult((function(t){return J({map:o._map,olFeature:e.feature,feature:t,modifyPropertiesToFeatureProperties:p})})))}))),"Polygon"===(null==d||null===(r=d.geometry)||void 0===r?void 0:r.type)&&_&&(this._draw=new P.Z({type:"Polygon",stopClick:!0,style:function(e){var t,r,n,i;return"Point"===e.getGeometry().getType()?new c.ZP({image:new s.Z({stroke:new y.Z({color:z(null==b||null===(t=b.cursor)||void 0===t?void 0:t.color,null==b||null===(r=b.cursor)||void 0===r?void 0:r.opacity),width:null==b||null===(n=b.cursor)||void 0===n?void 0:n.width}),radius:null==b||null===(i=b.cursor)||void 0===i?void 0:i.radius})}):o._createStyleFunction({map:o._map,style:b})(e)}}),this._map.addInteraction(this._draw),this._draw.setActive(!1),this._draw.on("drawstart",(function(){O=!0})),this._draw.on("drawend",(function(e){o._draw.setActive(!1),o._modify.setActive(!0),O=!1,m(o._normalizeGeoJSONResult((function(t){return e.feature.getId()===t.id?J({map:o._map,olFeature:e.feature,feature:t,modifyPropertiesToFeatureProperties:p}):t})))})))},(t=[{key:"setGeoJSON",value:function(e){var t=this;this._layer&&(this._geojson=D({},e),this._features="Feature"===(null==e?void 0:e.type)?[e]:null==e?void 0:e.features,this._layer.getSource().clear(),this._layer.getSource().addFeatures(this._features.map((function(e){return function(e){var t=e.feature,r=e.featureToModifyProperties,o=void 0===r?function(){return{}}:r,n=e.map.getView().getProjection().getCode(),i=x.readFeature(t,{featureProjection:n,dataProjection:"EPSG:4326"}),a=o(t),l=a.geodesic,u=a.geometryType,c=a.radius;if(i.set("@properties",a),l&&"Circle"===u&&c){var s=(0,g.iu)(t.geometry.coordinates,c,128).transform("EPSG:4326",n).getCoordinates();return i.setGeometry(new _.Z([new g.ZP(s),i.getGeometry()])),i}if("Circle"===u&&c){var f=i.getGeometry().clone();i.set("@geometry",f),i.setGeometry(new p.Z(f.getCoordinates(),c))}return i}({map:t._map,feature:e,featureToModifyProperties:t._featureToModifyProperties})}))))}},{key:"remove",value:function(){this._modify&&(this._map.removeInteraction(this._modify),this._modify=null),this._draw&&(this._map.removeInteraction(this._draw),this._draw=null),this._layer&&(this._map.removeLayer(this._layer),this._layer=null),this._onSingleClick&&this._map.un("singleclick",this._onSingleClick)}},{key:"_normalizeGeoJSONResult",value:function(e){var t,r=this._features.map(e);return"Feature"===(null===(t=this._geojson)||void 0===t?void 0:t.type)?r[0]:{type:"FeatureCollection",features:r}}},{key:"_createStyleFunction",value:function(e){var t=e.map,r=e.style;return function(e){var o,n,i,a,l,u,p,m,h,w,b,_,P,O,j,S,G=e.getGeometry().getType(),Z=e.get("@properties")||{},F=Z.geodesic,E=Z.geometryType,k=new s.Z({stroke:new y.Z({color:z(null==r||null===(o=r.coordinatesNode)||void 0===o?void 0:o.color,null==r||null===(n=r.coordinatesNode)||void 0===n?void 0:n.opacity),width:null==r||null===(i=r.coordinatesNode)||void 0===i?void 0:i.width}),radius:null==r||null===(a=r.coordinatesNode)||void 0===a?void 0:a.radius}),T=new y.Z(D({color:z(null==r||null===(l=r.line)||void 0===l?void 0:l.color,null==r||null===(u=r.line)||void 0===u?void 0:u.opacity),width:null==r||null===(p=r.line)||void 0===p?void 0:p.width},(null==r||null===(m=r.line)||void 0===m?void 0:m.dashLength)&&{lineDash:[r.line.dashLength]})),A=new y.Z(D({color:z(null==r||null===(h=r.lineDrawing)||void 0===h?void 0:h.color,null==r||null===(w=r.lineDrawing)||void 0===w?void 0:w.opacity),width:null==r||null===(b=r.lineDrawing)||void 0===b?void 0:b.width},(null==r||null===(_=r.lineDrawing)||void 0===_?void 0:_.dashLength)&&{lineDash:[r.lineDrawing.dashLength]})),L=new f.Z({color:z(null==r||null===(P=r.areaDrawing)||void 0===P?void 0:P.color,null==r||null===(O=r.areaDrawing)||void 0===O?void 0:O.opacity)}),I=new f.Z({color:z(null==r||null===(j=r.area)||void 0===j?void 0:j.color,null==r||null===(S=r.area)||void 0===S?void 0:S.opacity)});return F&&"Circle"===E&&"GeometryCollection"===G?[new c.ZP({geometry:e.get("@modifyGeometry")||e.getGeometry(),stroke:A,fill:L}),new c.ZP({geometry:e.get("@geometry"),image:k})]:"Circle"===G?[new c.ZP({stroke:A,fill:L}),new c.ZP({geometry:e.get("@geometry"),image:k})]:"LineString"===G?[new c.ZP(D(D({},F&&{geometry:new v.Z(N(t,e.getGeometry().getCoordinates()))}),{},{stroke:F?T:A}))].concat(C(F?[new c.ZP({stroke:A})]:[]),[new c.ZP({geometry:new d.Z(e.getGeometry().getCoordinates()),image:k})]):"Polygon"===G?[new c.ZP(D(D({},F&&{geometry:new g.ZP(e.getGeometry().getCoordinates().map((function(e){return N(t,e)})))}),{},{stroke:F?T:A,fill:F?I:L}))].concat(C(F?[new c.ZP({stroke:A})]:[]),[new c.ZP({geometry:new d.Z(e.getGeometry().getCoordinates().reduce((function(e,t){return[].concat(C(e),C(t))}),[])),image:k})]):new c.ZP({image:k})}}}])&&F(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),H=function(e){var t=e.map,r=e.active,n=e.geojson,i=e.onEditEnd,a=e.style,l=e.enablePolygonHoles,u=void 0!==l&&l,c=e.getGeometryType,s=(0,o.useRef)();return(0,o.useEffect)((function(){return t&&r&&(s.current=new V({map:t,geojson:n,getGeometryType:c,onEditEnd:i,style:a,enablePolygonHoles:u})),function(){s.current&&(s.current.remove(),s.current=null)}}),[t,r,u]),(0,o.useEffect)((function(){s.current&&s.current.setGeoJSON(n)}),[n]),null}},854788:(e,t,r)=>{"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return(t=function(e){var t=function(e){if("object"!=o(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){return i({wireframe:{color:"#000000",opacity:1,depthFailColor:"#000000",depthFailOpacity:.4,width:.5},lineDrawing:{color:"#000000",opacity:1,depthFailColor:"#000000",depthFailOpacity:.4,width:3,dashLength:8},line:{color:"#ffcc33",opacity:1,depthFailColor:"#ffcc33",depthFailOpacity:.4,width:2},areaDrawing:{color:"#ffffff",opacity:.5,depthFailColor:"#ffffff",depthFailOpacity:.25},area:{color:"#ffffff",opacity:.5,depthFailColor:"#ffffff",depthFailOpacity:.25},cursor:{color:"#ff0000",width:2,radius:4},coordinatesNode:{color:"#333333",width:2,radius:5}},e)}r.d(t,{E4:()=>l,cC:()=>c,r2:()=>s});var u=function(e){var t;return null==e||null===(t=e.geometry)||void 0===t?void 0:t.type},c=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).getGeometryType,t=void 0===e?u:e;return function(e){return i(i({},null==e?void 0:e.properties),{},{geometryType:t(e)})}},s=function(e,t){return i(i({},null==t?void 0:t.properties),void 0!==(null==e?void 0:e.radius)&&{radius:e.radius})}},186977:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var o=r(15265),n=r(513987),i=r(562948),a=r(372445),l=r(51273);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t=d(t),function(e,t){if(t&&("object"==u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,r||[],d(e).constructor):t.apply(e,r))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function g(e,t,r){return(t=m(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){var t=function(e){if("object"!=u(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}const v=function(e){function t(e){var r;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(r=f(this,t,[s(s({},e),{},{type:"Polygon",geometryFunction:e.geometryFunction?function(t,o){return e.geometryFunction(t,r._geometryFn(t,o))}:function(e,t){return r._geometryFn(e,t)}})]),"setMap",(function(e){this.getMap()&&this.getMap().removeInteraction(this._select),e&&e.addInteraction(this._select),a.ZP.prototype.setMap.call(this,e)})),g(r,"setActive",(function(e){this._select.getFeatures().clear(),a.ZP.prototype.setActive.call(this,e)})),g(r,"removeLastPoint",(function(){this._feature&&this._feature.getGeometry().getCoordinates()[0].length>2&&a.ZP.prototype.removeLastPoint.call(this)})),g(r,"getPolygon",(function(){return this._polygon})),g(r,"_startDrawing",(function(e){var t=this.getMap();this._feature=e.feature;var r=e.feature.getGeometry().getCoordinates()[0][0];this._current=null,t.forEachFeatureAtPixel(t.getPixelFromCoordinate(r),function(e,t){if(!this._current&&this._features(e,t)){var o=e.getGeometry();if("Polygon"===o.getType()&&o.intersectsCoordinate(r))this._polygonIndex=!1,this._polygon=o,this._current=e;else if("MultiPolygon"===o.getType()&&o.intersectsCoordinate(r))for(var n,i=0;o.getPolygon(i);i++)if((n=o.getPolygon(i)).intersectsCoordinate(r)){this._polygonIndex=i,this._polygon=n,this._current=e;break}}}.bind(this),{layerFilter:this.layers_}),this._select.getFeatures().clear(),this._current?this._select.getFeatures().push(this._current):(this.setActive(!1),this.setActive(!0))})),g(r,"_finishDrawing",(function(e){e.hole=e.feature,e.feature=this._select.getFeatures().item(0),this.dispatchEvent({type:"modifystart",features:[this._current]});var t=e.hole.getGeometry().getCoordinates()[0];if(t.length>=3)if(!1!==this._polygonIndex){for(var r,o=e.feature.getGeometry(),a=new n.Z([]),l=0;o.getPolygon(l);l++)r=o.getPolygon(l),l===this._polygonIndex?(r.appendLinearRing(new i.Z(t)),a.appendPolygon(r)):a.appendPolygon(r);e.feature.setGeometry(a)}else this.getPolygon().appendLinearRing(new i.Z(t));this.dispatchEvent({type:"modifyend",features:[this._current]}),this._feature=null,this._select.getFeatures().clear()})),g(r,"_geometryFn",(function(e,t){var r=e[0].pop();return this.getPolygon()&&!this.getPolygon().intersectsCoordinate(r)||(this.lastOKCoord=[r[0],r[1]]),e[0].push([this.lastOKCoord[0],this.lastOKCoord[1]]),t&&t.setCoordinates([e[0].concat([e[0][0]])]),new o.ZP(e)})),r._select=new l.Z({style:e.style}),r._select.setActive(!1),e.layers&&("function"==typeof e.layers?r.layers_=e.layers:e.layers.indexOf&&(r.layers_=function(t){return e.layers.indexOf(t)>=0})),"function"==typeof e.featureFilter)r._features=e.featureFilter;else if(e.featureFilter){var u=e.featureFilter;r._features=function(e){return u.indexOf?!!u[u.indexOf(e)]:!!u.item(u.getArray().indexOf(e))}}else r._features=function(){return!0};return r.on("drawstart",r._startDrawing.bind(r)),r.on("drawend",r._finishDrawing.bind(r)),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(t,e),r=t,Object.defineProperty(r,"prototype",{writable:!1}),r;var r}(a.ZP)}}]);