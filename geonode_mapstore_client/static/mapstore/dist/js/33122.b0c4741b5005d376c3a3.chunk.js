(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[33122],{33122:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>I});var r=t(76180),i=t(65792),n=t.n(i),l=t(84596),a=t.n(l),c=t(81763),u=t.n(c),s=t(96026),f=t.n(s);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}function y(e){var o=function(e,o){if("object"!=p(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(o)?o:o+""}function h(e,o){(null==o||o>e.length)&&(o=e.length);for(var t=0,r=new Array(o);t<o;t++)r[t]=e[t];return r}function m(e){var o,t,i=e.color,l=e.opacity,a=(o=n()(i).gl(),t=4,function(e){if(Array.isArray(e))return e}(o)||function(e,o){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,n,l,a=[],c=!0,u=!1;try{if(n=(t=t.call(e)).next,0===o){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=n.call(t)).done)&&(a.push(r.value),a.length!==o);c=!0);}catch(e){u=!0,i=e}finally{try{if(!c&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(u)throw i}}return a}}(o,t)||function(e,o){if(e){if("string"==typeof e)return h(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,o):void 0}}(o,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[0],u=a[1],s=a[2],f=a[3];return void 0!==l?new r.Color(c,u,s,l):new r.Color(c,u,s,f)}function v(e){var o=e.color,t=e.opacity,i=e.dasharray;if((null==i?void 0:i.length)<=0)return m({color:o,opacity:t});var n=i.reduce((function(e,o){return e+o}),0);return new r.PolylineDashMaterialProperty({color:m({color:o,opacity:t}),dashLength:n,dashPattern:parseInt(i.map((function(e){return Math.floor(e/n*16)})).map((function(e,o){return f()(e).map((function(){return o%2==0?"1":"0"})).join("")})).join(""),2)})}function g(e,o,t,i){var n,l;o._msPosition||(o._msPosition=o.position.getValue(r.JulianDate.now()));var a=function(e,o){var t=parseFloat(e);if(!isNaN(t)&&u()(t))return t;var r="attribute"===(null==e?void 0:e.type)&&parseFloat(o[e.name]);return!isNaN(r)&&u()(r)?r:null}(t.msHeight,i);if(null!==a){var c=null==e||null===(n=e.scene)||void 0===n||null===(l=n.globe)||void 0===l?void 0:l.ellipsoid;if(c){var s=c.cartesianToCartographic(o._msPosition);s.height=a,o.position.setValue(c.cartographicToCartesian(s))}}else o.position.setValue(o._msPosition)}function b(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.properties?Object.keys(e.properties).reduce((function(o,t){var r,i=new RegExp("\\{\\{".concat(t,"\\}\\}"),"g");return o.replace(i,null!==(r=e.properties[t])&&void 0!==r?r:"")}),o):o}var S=["billboard","box","corridor","cylinder","ellipse","ellipsoid","label","model","tileset","path","plane","point","polygon","polyline","polylineVolume","rectangle","wall"],w={none:"NONE",relative:"RELATIVE_TO_GROUND",clamp:"CLAMP_TO_GROUND"};const I=function(){return e=function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o.drawIcons,r=o.getImageIdFromSymbolizer,i=o.geoStylerStyleFilter;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this._drawIcons=t||function(){return Promise.resolve(null)},this._getImageIdFromSymbolizer=r||function(e){return e.symbolizerId},this._geoStylerStyleFilter=i||function(){return!0}},o=[{key:"readStyle",value:function(){return new Promise((function(e,o){try{e(null)}catch(e){o(e)}}))}},{key:"writeStyle",value:function(e){var o=this;return new Promise((function(t,i){try{o._drawIcons(e).then((function(){var i=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).rules,o=void 0===e?[]:e,t=arguments.length>1?arguments[1]:void 0,i=t.images,n=void 0===i?[]:i,l=t.getImageIdFromSymbolizer,c=t.geoStylerStyleFilter,u=void 0===c?function(){return!0}:c;return function(e){var t=e.entities,i=e.map,c=e.opacity,s=void 0===c?1:c;t.forEach((function(e){var o={};S.forEach((function(t){e._msStoredCoordinates||(o[t]=function(e,o){var t,r;switch(e){case"polyline":return null===(t=o[e])||void 0===t?void 0:t.positions;case"polygon":return null===(r=o[e])||void 0===r?void 0:r.hierarchy;default:return null}}(t,e)||void 0),e[t]=void 0})),e._msStoredCoordinates||(e._msStoredCoordinates=o)})),o.forEach((function(e){e.symbolizers.forEach((function(o){t.forEach((function(t){var c,f=(null==t||null===(c=t.properties)||void 0===c?void 0:c.getValue(r.JulianDate.now()))||{};if(!e.filter||u({properties:f||{}},e.filter)){if("Mark"===o.kind&&t.position){var p=n.find((function(e){return e.id===l(o)}))||{},d=p.image,y=p.width,h=p.height;if(d){var S=y>h?y:h,I=2*o.radius/S;t.billboard=new r.BillboardGraphics({image:d,scale:I,rotation:r.Math.toRadians(-1*o.rotate||0),disableDepthTestDistance:o.msBringToFront?Number.POSITIVE_INFINITY:0,heightReference:r.HeightReference[w[o.msHeightReference]||"NONE"],color:m({color:"#ffffff",opacity:1*s})}),g(i,t,o,f)}}if("Icon"===o.kind&&t.position){var C=n.find((function(e){return e.id===l(o)}))||{},T=C.image,_=C.width,N=C.height;if(T){var O=_>N?_:N,E=o.size/O;t.billboard=new r.BillboardGraphics({image:T,scale:E,rotation:r.Math.toRadians(-1*o.rotate||0),disableDepthTestDistance:o.msBringToFront?Number.POSITIVE_INFINITY:0,heightReference:r.HeightReference[w[o.msHeightReference]||"NONE"],color:m({color:"#ffffff",opacity:o.opacity*s})}),g(i,t,o,f)}}var P,F,R,j;"Line"===o.kind&&t._msStoredCoordinates.polyline&&(t.polyline=new r.PolylineGraphics({material:null!=o&&o.dasharray?v({color:o.color,opacity:o.opacity*s,dasharray:o.dasharray}):m({color:o.color,opacity:o.opacity*s}),width:o.width,positions:t._msStoredCoordinates.polyline,clampToGround:o.msClampToGround})),"Fill"===o.kind&&t._msStoredCoordinates.polygon&&(t.polygon=new r.PolygonGraphics({material:m({color:o.color,opacity:o.fillOpacity*s}),hierarchy:t._msStoredCoordinates.polygon,classificationType:"terrain"===o.msClassificationType?r.ClassificationType.TERRAIN:"3d"===o.msClassificationType?r.ClassificationType.CESIUM_3D_TILE:r.ClassificationType.BOTH}),o.outlineColor&&0!==o.outlineWidth&&(t.polyline=new r.PolylineGraphics({material:m({color:o.outlineColor,opacity:o.outlineOpacity*s}),width:o.outlineWidth,positions:t._msStoredCoordinates.polygon.getValue().positions,clampToGround:o.msClampToGround}))),"Text"===o.kind&&t.position&&(t.label=new r.LabelGraphics({text:b({properties:f},o.label),font:[o.fontStyle,o.fontWeight,"".concat(o.size,"px"),a()(o.font||["serif"]).join(", ")].filter((function(e){return e})).join(" "),fillColor:m({color:o.color,opacity:1*s}),heightReference:r.HeightReference[w[o.msHeightReference]||"NONE"],pixelOffset:new r.Cartesian2(null!==(P=null==o||null===(F=o.offset)||void 0===F?void 0:F[0])&&void 0!==P?P:0,null!==(R=null==o||null===(j=o.offset)||void 0===j?void 0:j[1])&&void 0!==R?R:0),outlineColor:m({color:o.haloColor,opacity:1*s}),outlineWidth:o.haloWidth}),g(i,t,o,f))}}))}))}))}}(e,{images:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],getImageIdFromSymbolizer:o._getImageIdFromSymbolizer,geoStylerStyleFilter:o._geoStylerStyleFilter});t(i)}))}catch(e){i(e)}}))}}],o&&d(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,o}()},40098:e=>{var o=Math.ceil,t=Math.max;e.exports=function(e,r,i,n){for(var l=-1,a=t(o((r-e)/(i||1)),0),c=Array(a);a--;)c[n?a:++l]=e,e+=i;return c}},47445:(e,o,t)=>{var r=t(40098),i=t(16612),n=t(18601);e.exports=function(e){return function(o,t,l){return l&&"number"!=typeof l&&i(o,t,l)&&(t=l=void 0),o=n(o),void 0===t?(t=o,o=0):t=n(t),l=void 0===l?o<t?1:-1:n(l),r(o,t,l,e)}}},96026:(e,o,t)=>{var r=t(47445)();e.exports=r}}]);