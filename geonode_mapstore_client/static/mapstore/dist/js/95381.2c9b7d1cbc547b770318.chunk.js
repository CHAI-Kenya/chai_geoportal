(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[95381,82582,45992,65417],{313647:(t,i,r)=>{"use strict";r.d(i,{Z:()=>o});var n=r(892322),e=r(640271);const o=function(t){if(!t)throw new Error("geojson is required");var i=[];return(0,n.nG)(t,(function(t){i.push(t)})),(0,e.uf)(i)}},45992:(t,i,r)=>{"use strict";r.d(i,{h:()=>c,Z:()=>f});var n=r(535937),e=r.n(n),o=r(836882),a=r(737275);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function s(t,i){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?s(Object(r),!0).forEach((function(i){l(t,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))}))}return t}function l(t,i,r){return(i=function(t){var i=function(t){if("object"!=h(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,"string");if("object"!=h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==h(i)?i:i+""}(i))in t?Object.defineProperty(t,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[i]=r,t}var c=function(t,i){var r,n,h,s,l=o.Z;if("custom"===t)r=i;else if(h=(s=t.split("."))[0],n=s[1],!(r=l[h]))throw new Error("No such provider ("+h+")");var c={url:r.url,options:r.options||{}};if(n&&"variants"in r){if(!(n in r.variants))throw new Error("No such variant of "+(h||r.url)+" ("+n+")");var f,p=r.variants[n];f="string"==typeof p?{variant:p}:p.options,c={url:p.url||c.url,options:u(u({},c.options||{}),f)}}else"function"==typeof c.url&&(c.url=c.url(s.splice(1,s.length-1).join(".")));var m="file:"===window.location.protocol||c.options.forceHTTP;0===c.url.indexOf("//")&&m&&(c.url="http:"+c.url),c.options.retina&&(i.detectRetina&&a.ZP.getBrowserProperties().retina?i.detectRetina=!1:c.options.retina=""),c.options.attribution&&(c.options.attribution=function t(i){return-1===i.indexOf("{attribution.")?i:i.replace(/\{attribution.(\w*)\}/,(function(i,r){return t(l[r].options.attribution)}))}(c.options.attribution));var d=u(u({},c.options),e()(i,(function(t){return void 0!==t})));return[c.url,d]};const f={getLayerConfig:c}},382582:function(t){t.exports=function(){"use strict";function t(t,n,e,o,a){!function t(r,n,e,o,a){for(;o>e;){if(o-e>600){var h=o-e+1,s=n-e+1,u=Math.log(h),l=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*l*(h-l)/h)*(s-h/2<0?-1:1);t(r,n,Math.max(e,Math.floor(n-s*l/h+c)),Math.min(o,Math.floor(n+(h-s)*l/h+c)),a)}var f=r[n],p=e,m=o;for(i(r,e,n),a(r[o],f)>0&&i(r,e,o);p<m;){for(i(r,p,m),p++,m--;a(r[p],f)<0;)p++;for(;a(r[m],f)>0;)m--}0===a(r[e],f)?i(r,e,m):i(r,++m,o),m<=n&&(e=m+1),n<=m&&(o=m-1)}}(t,n,e||0,o||t.length-1,a||r)}function i(t,i,r){var n=t[i];t[i]=t[r],t[r]=n}function r(t,i){return t<i?-1:t>i?1:0}var n=function(t){void 0===t&&(t=9),this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function e(t,i,r){if(!r)return i.indexOf(t);for(var n=0;n<i.length;n++)if(r(t,i[n]))return n;return-1}function o(t,i){a(t,0,t.children.length,i,t)}function a(t,i,r,n,e){e||(e=m(null)),e.minX=1/0,e.minY=1/0,e.maxX=-1/0,e.maxY=-1/0;for(var o=i;o<r;o++){var a=t.children[o];h(e,t.leaf?n(a):a)}return e}function h(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function s(t,i){return t.minX-i.minX}function u(t,i){return t.minY-i.minY}function l(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function c(t){return t.maxX-t.minX+(t.maxY-t.minY)}function f(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function p(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function m(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function d(i,r,n,e,o){for(var a=[r,n];a.length;)if(!((n=a.pop())-(r=a.pop())<=e)){var h=r+Math.ceil((n-r)/e/2)*e;t(i,h,r,n,o),a.push(r,h,h,n)}}return n.prototype.all=function(){return this._all(this.data,[])},n.prototype.search=function(t){var i=this.data,r=[];if(!p(t,i))return r;for(var n=this.toBBox,e=[];i;){for(var o=0;o<i.children.length;o++){var a=i.children[o],h=i.leaf?n(a):a;p(t,h)&&(i.leaf?r.push(a):f(t,h)?this._all(a,r):e.push(a))}i=e.pop()}return r},n.prototype.collides=function(t){var i=this.data;if(!p(t,i))return!1;for(var r=[];i;){for(var n=0;n<i.children.length;n++){var e=i.children[n],o=i.leaf?this.toBBox(e):e;if(p(t,o)){if(i.leaf||f(t,o))return!0;r.push(e)}}i=r.pop()}return!1},n.prototype.load=function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0;i<t.length;i++)this.insert(t[i]);return this}var r=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var n=this.data;this.data=r,r=n}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this},n.prototype.insert=function(t){return t&&this._insert(t,this.data.height-1),this},n.prototype.clear=function(){return this.data=m([]),this},n.prototype.remove=function(t,i){if(!t)return this;for(var r,n,o,a=this.data,h=this.toBBox(t),s=[],u=[];a||s.length;){if(a||(a=s.pop(),n=s[s.length-1],r=u.pop(),o=!0),a.leaf){var l=e(t,a.children,i);if(-1!==l)return a.children.splice(l,1),s.push(a),this._condense(s),this}o||a.leaf||!f(a,h)?n?(r++,a=n.children[r],o=!1):a=null:(s.push(a),u.push(r),r=0,n=a,a=a.children[0])}return this},n.prototype.toBBox=function(t){return t},n.prototype.compareMinX=function(t,i){return t.minX-i.minX},n.prototype.compareMinY=function(t,i){return t.minY-i.minY},n.prototype.toJSON=function(){return this.data},n.prototype.fromJSON=function(t){return this.data=t,this},n.prototype._all=function(t,i){for(var r=[];t;)t.leaf?i.push.apply(i,t.children):r.push.apply(r,t.children),t=r.pop();return i},n.prototype._build=function(t,i,r,n){var e,a=r-i+1,h=this._maxEntries;if(a<=h)return o(e=m(t.slice(i,r+1)),this.toBBox),e;n||(n=Math.ceil(Math.log(a)/Math.log(h)),h=Math.ceil(a/Math.pow(h,n-1))),(e=m([])).leaf=!1,e.height=n;var s=Math.ceil(a/h),u=s*Math.ceil(Math.sqrt(h));d(t,i,r,u,this.compareMinX);for(var l=i;l<=r;l+=u){var c=Math.min(l+u-1,r);d(t,l,c,s,this.compareMinY);for(var f=l;f<=c;f+=s){var p=Math.min(f+s-1,c);e.children.push(this._build(t,f,p,n-1))}}return o(e,this.toBBox),e},n.prototype._chooseSubtree=function(t,i,r,n){for(;n.push(i),!i.leaf&&n.length-1!==r;){for(var e=1/0,o=1/0,a=void 0,h=0;h<i.children.length;h++){var s=i.children[h],u=l(s),c=(f=t,p=s,(Math.max(p.maxX,f.maxX)-Math.min(p.minX,f.minX))*(Math.max(p.maxY,f.maxY)-Math.min(p.minY,f.minY))-u);c<o?(o=c,e=u<e?u:e,a=s):c===o&&u<e&&(e=u,a=s)}i=a||i.children[0]}var f,p;return i},n.prototype._insert=function(t,i,r){var n=r?t:this.toBBox(t),e=[],o=this._chooseSubtree(n,this.data,i,e);for(o.children.push(t),h(o,n);i>=0&&e[i].children.length>this._maxEntries;)this._split(e,i),i--;this._adjustParentBBoxes(n,e,i)},n.prototype._split=function(t,i){var r=t[i],n=r.children.length,e=this._minEntries;this._chooseSplitAxis(r,e,n);var a=this._chooseSplitIndex(r,e,n),h=m(r.children.splice(a,r.children.length-a));h.height=r.height,h.leaf=r.leaf,o(r,this.toBBox),o(h,this.toBBox),i?t[i-1].children.push(h):this._splitRoot(r,h)},n.prototype._splitRoot=function(t,i){this.data=m([t,i]),this.data.height=t.height+1,this.data.leaf=!1,o(this.data,this.toBBox)},n.prototype._chooseSplitIndex=function(t,i,r){for(var n,e,o,h,s,u,c,f=1/0,p=1/0,m=i;m<=r-i;m++){var d=a(t,0,m,this.toBBox),v=a(t,m,r,this.toBBox),x=(e=d,o=v,void 0,void 0,void 0,void 0,h=Math.max(e.minX,o.minX),s=Math.max(e.minY,o.minY),u=Math.min(e.maxX,o.maxX),c=Math.min(e.maxY,o.maxY),Math.max(0,u-h)*Math.max(0,c-s)),g=l(d)+l(v);x<f?(f=x,n=m,p=g<p?g:p):x===f&&g<p&&(p=g,n=m)}return n||r-i},n.prototype._chooseSplitAxis=function(t,i,r){var n=t.leaf?this.compareMinX:s,e=t.leaf?this.compareMinY:u;this._allDistMargin(t,i,r,n)<this._allDistMargin(t,i,r,e)&&t.children.sort(n)},n.prototype._allDistMargin=function(t,i,r,n){t.children.sort(n);for(var e=this.toBBox,o=a(t,0,i,e),s=a(t,r-i,r,e),u=c(o)+c(s),l=i;l<r-i;l++){var f=t.children[l];h(o,t.leaf?e(f):f),u+=c(o)}for(var p=r-i-1;p>=i;p--){var m=t.children[p];h(s,t.leaf?e(m):m),u+=c(s)}return u},n.prototype._adjustParentBBoxes=function(t,i,r){for(var n=r;n>=0;n--)h(i[n],t)},n.prototype._condense=function(t){for(var i=t.length-1,r=void 0;i>=0;i--)0===t[i].children.length?i>0?(r=t[i-1].children).splice(r.indexOf(t[i]),1):this.clear():o(t[i],this.toBBox)},n}()}}]);