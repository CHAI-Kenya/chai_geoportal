(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[67114,2095],{87157:(t,e,r)=>{var o=r(40554),i=r(88958);t.exports=function(t,e,r,n){var s=t.length;for((r=o(r))<0&&(r=-r>s?0:s+r),(n=void 0===n||n>s?s:o(n))<0&&(n+=s),n=r>n?0:i(n);r<n;)t[r++]=e;return t}},80760:(t,e,r)=>{var o=r(89881);t.exports=function(t,e){var r=[];return o(t,(function(t,o,i){e(t,o,i)&&r.push(t)})),r}},41761:(t,e,r)=>{var o=r(44239),i=r(37005);t.exports=function(t){return i(t)&&"[object Date]"==o(t)}},89179:(t,e,r)=>{var o=r(55639),i=r(40554),n=r(14841),s=r(79833),a=o.isFinite,p=Math.min;t.exports=function(t){var e=Math[t];return function(t,r){if(t=n(t),(r=null==r?0:p(i(r),292))&&a(t)){var o=(s(t)+"e").split("e"),u=e(o[0]+"e"+(+o[1]+r));return+((o=(s(u)+"e").split("e"))[0]+"e"+(+o[1]-r))}return e(t)}}},19873:(t,e,r)=>{var o=r(87157),i=r(16612);t.exports=function(t,e,r,n){var s=null==t?0:t.length;return s?(r&&"number"!=typeof r&&i(t,e,r)&&(r=0,n=s),o(t,e,r,n)):[]}},63105:(t,e,r)=>{var o=r(34963),i=r(80760),n=r(67206),s=r(1469);t.exports=function(t,e){return(s(t)?o:i)(t,n(e,3))}},47960:(t,e,r)=>{var o=r(41761),i=r(7518),n=r(31167),s=n&&n.isDate,a=s?i(s):o;t.exports=a},13880:(t,e,r)=>{var o=r(79833);t.exports=function(){var t=arguments,e=o(t[0]);return t.length<3?e:e.replace(t[1],t[2])}},59854:(t,e,r)=>{var o=r(89179)("round");t.exports=o},88958:(t,e,r)=>{var o=r(29750),i=r(40554);t.exports=function(t){return t?o(i(t),0,4294967295):0}},686:(t,e,r)=>{"use strict";r.d(e,{Z:()=>F});var o=r(23068),i=r(18334),n=r(49179),s=r(34007);function a(t){return"string"==typeof t?t:""}const p=function(t){function e(){t.call(this)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getType=function(){return s.Z.TEXT},e.prototype.readFeature=function(t,e){return this.readFeatureFromText(a(t),this.adaptOptions(e))},e.prototype.readFeatureFromText=function(t,e){return(0,n.O3)()},e.prototype.readFeatures=function(t,e){return this.readFeaturesFromText(a(t),this.adaptOptions(e))},e.prototype.readFeaturesFromText=function(t,e){return(0,n.O3)()},e.prototype.readGeometry=function(t,e){return this.readGeometryFromText(a(t),this.adaptOptions(e))},e.prototype.readGeometryFromText=function(t,e){return(0,n.O3)()},e.prototype.readProjection=function(t){return this.readProjectionFromText(a(t))},e.prototype.readProjectionFromText=function(t){return this.dataProjection},e.prototype.writeFeature=function(t,e){return this.writeFeatureText(t,this.adaptOptions(e))},e.prototype.writeFeatureText=function(t,e){return(0,n.O3)()},e.prototype.writeFeatures=function(t,e){return this.writeFeaturesText(t,this.adaptOptions(e))},e.prototype.writeFeaturesText=function(t,e){return(0,n.O3)()},e.prototype.writeGeometry=function(t,e){return this.writeGeometryText(t,this.adaptOptions(e))},e.prototype.writeGeometryText=function(t,e){return(0,n.O3)()},e}(i.Z);var u=r(98090),h=r(28795),c=r(3696),f=r(44538),y=r(25642),_=r(52329),l=r(13987),m=r(52043),T=r(40353),x={POINT:m.Z,LINESTRING:f.Z,POLYGON:T.ZP,MULTIPOINT:_.Z,MULTILINESTRING:y.Z,MULTIPOLYGON:l.Z},v="EMPTY",g={};for(var w in h.Z)g[w]=h.Z[w].toUpperCase();var d=function(t){this.wkt=t,this.index_=-1};d.prototype.isAlpha_=function(t){return t>="a"&&t<="z"||t>="A"&&t<="Z"},d.prototype.isNumeric_=function(t,e){return t>="0"&&t<="9"||"."==t&&!(void 0!==e&&e)},d.prototype.isWhiteSpace_=function(t){return" "==t||"\t"==t||"\r"==t||"\n"==t},d.prototype.nextChar_=function(){return this.wkt.charAt(++this.index_)},d.prototype.nextToken=function(){var t,e=this.nextChar_(),r=this.index_,o=e;if("("==e)t=2;else if(","==e)t=5;else if(")"==e)t=3;else if(this.isNumeric_(e)||"-"==e)t=4,o=this.readNumber_();else if(this.isAlpha_(e))t=1,o=this.readText_();else{if(this.isWhiteSpace_(e))return this.nextToken();if(""!==e)throw new Error("Unexpected character: "+e);t=6}return{position:r,value:o,type:t}},d.prototype.readNumber_=function(){var t,e=this.index_,r=!1,o=!1;do{"."==t?r=!0:"e"!=t&&"E"!=t||(o=!0),t=this.nextChar_()}while(this.isNumeric_(t,r)||!o&&("e"==t||"E"==t)||o&&("-"==t||"+"==t));return parseFloat(this.wkt.substring(e,this.index_--))},d.prototype.readText_=function(){var t,e=this.index_;do{t=this.nextChar_()}while(this.isAlpha_(t));return this.wkt.substring(e,this.index_--).toUpperCase()};var E=function(t){this.lexer_=t,this.token_,this.layout_=c.Z.XY};function G(t){var e=t.getCoordinates();return 0===e.length?"":e.join(" ")}function L(t){for(var e=t.getCoordinates(),r=[],o=0,i=e.length;o<i;++o)r.push(e[o].join(" "));return r.join(",")}function P(t){for(var e=[],r=t.getLinearRings(),o=0,i=r.length;o<i;++o)e.push("("+L(r[o])+")");return e.join(",")}E.prototype.consume_=function(){this.token_=this.lexer_.nextToken()},E.prototype.isTokenType=function(t){return this.token_.type==t},E.prototype.match=function(t){var e=this.isTokenType(t);return e&&this.consume_(),e},E.prototype.parse=function(){return this.consume_(),this.parseGeometry_()},E.prototype.parseGeometryLayout_=function(){var t=c.Z.XY,e=this.token_;if(this.isTokenType(1)){var r=e.value;"Z"===r?t=c.Z.XYZ:"M"===r?t=c.Z.XYM:"ZM"===r&&(t=c.Z.XYZM),t!==c.Z.XY&&this.consume_()}return t},E.prototype.parseGeometryCollectionText_=function(){if(this.match(2)){var t=[];do{t.push(this.parseGeometry_())}while(this.match(5));if(this.match(3))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())},E.prototype.parsePointText_=function(){if(this.match(2)){var t=this.parsePoint_();if(this.match(3))return t}else if(this.isEmptyGeometry_())return null;throw new Error(this.formatErrorMessage_())},E.prototype.parseLineStringText_=function(){if(this.match(2)){var t=this.parsePointList_();if(this.match(3))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())},E.prototype.parsePolygonText_=function(){if(this.match(2)){var t=this.parseLineStringTextList_();if(this.match(3))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())},E.prototype.parseMultiPointText_=function(){var t;if(this.match(2)){if(t=2==this.token_.type?this.parsePointTextList_():this.parsePointList_(),this.match(3))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())},E.prototype.parseMultiLineStringText_=function(){if(this.match(2)){var t=this.parseLineStringTextList_();if(this.match(3))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())},E.prototype.parseMultiPolygonText_=function(){if(this.match(2)){var t=this.parsePolygonTextList_();if(this.match(3))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())},E.prototype.parsePoint_=function(){for(var t=[],e=this.layout_.length,r=0;r<e;++r){var o=this.token_;if(!this.match(4))break;t.push(o.value)}if(t.length==e)return t;throw new Error(this.formatErrorMessage_())},E.prototype.parsePointList_=function(){for(var t=[this.parsePoint_()];this.match(5);)t.push(this.parsePoint_());return t},E.prototype.parsePointTextList_=function(){for(var t=[this.parsePointText_()];this.match(5);)t.push(this.parsePointText_());return t},E.prototype.parseLineStringTextList_=function(){for(var t=[this.parseLineStringText_()];this.match(5);)t.push(this.parseLineStringText_());return t},E.prototype.parsePolygonTextList_=function(){for(var t=[this.parsePolygonText_()];this.match(5);)t.push(this.parsePolygonText_());return t},E.prototype.isEmptyGeometry_=function(){var t=this.isTokenType(1)&&this.token_.value==v;return t&&this.consume_(),t},E.prototype.formatErrorMessage_=function(){return"Unexpected `"+this.token_.value+"` at position "+this.token_.position+" in `"+this.lexer_.wkt+"`"},E.prototype.parseGeometry_=function(){var t=this.token_;if(this.match(1)){var e=t.value;if(this.layout_=this.parseGeometryLayout_(),"GEOMETRYCOLLECTION"==e){var r=this.parseGeometryCollectionText_();return new u.default(r)}var o,i=x[e];if(!i)throw new Error("Invalid geometry type: "+e);switch(e){case"POINT":o=this.parsePointText_();break;case"LINESTRING":o=this.parseLineStringText_();break;case"POLYGON":o=this.parsePolygonText_();break;case"MULTIPOINT":o=this.parseMultiPointText_();break;case"MULTILINESTRING":o=this.parseMultiLineStringText_();break;case"MULTIPOLYGON":o=this.parseMultiPolygonText_();break;default:throw new Error("Invalid geometry type: "+e)}return o||(o=i===x.POINT?[NaN,NaN]:[]),new i(o,this.layout_)}throw new Error(this.formatErrorMessage_())};var M={Point:G,LineString:L,Polygon:P,MultiPoint:function(t){for(var e=[],r=t.getPoints(),o=0,i=r.length;o<i;++o)e.push("("+G(r[o])+")");return e.join(",")},MultiLineString:function(t){for(var e=[],r=t.getLineStrings(),o=0,i=r.length;o<i;++o)e.push("("+L(r[o])+")");return e.join(",")},MultiPolygon:function(t){for(var e=[],r=t.getPolygons(),o=0,i=r.length;o<i;++o)e.push("("+P(r[o])+")");return e.join(",")},GeometryCollection:function(t){for(var e=[],r=t.getGeometries(),o=0,i=r.length;o<i;++o)e.push(k(r[o]));return e.join(",")}};function k(t){var e=t.getType(),r=(0,M[e])(t);if(e=e.toUpperCase(),"function"==typeof t.getFlatCoordinates){var o=function(t){var e=t.getLayout(),r="";return e!==c.Z.XYZ&&e!==c.Z.XYZM||(r+="Z"),e!==c.Z.XYM&&e!==c.Z.XYZM||(r+="M"),r}(t);o.length>0&&(e+=" "+o)}return 0===r.length?e+" "+v:e+"("+r+")"}const F=function(t){function e(e){t.call(this);var r=e||{};this.splitCollection_=void 0!==r.splitCollection&&r.splitCollection}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.parse_=function(t){var e=new d(t);return new E(e).parse()},e.prototype.readFeatureFromText=function(t,e){var r=this.readGeometryFromText(t,e);if(r){var i=new o.Z;return i.setGeometry(r),i}return null},e.prototype.readFeaturesFromText=function(t,e){for(var r,i=this.readGeometryFromText(t,e),n=[],s=0,a=(r=this.splitCollection_&&i.getType()==h.Z.GEOMETRY_COLLECTION?i.getGeometriesArray():[i]).length;s<a;++s){var p=new o.Z;p.setGeometry(r[s]),n.push(p)}return n},e.prototype.readGeometryFromText=function(t,e){var r=this.parse_(t);return r?(0,i.j)(r,!1,e):null},e.prototype.writeFeatureText=function(t,e){var r=t.getGeometry();return r?this.writeGeometryText(r,e):""},e.prototype.writeFeaturesText=function(t,e){if(1==t.length)return this.writeFeatureText(t[0],e);for(var r=[],o=0,i=t.length;o<i;++o)r.push(t[o].getGeometry());var n=new u.default(r);return this.writeGeometryText(n,e)},e.prototype.writeGeometryText=function(t,e){return k((0,i.j)(t,!0,e))},e}(p)}}]);