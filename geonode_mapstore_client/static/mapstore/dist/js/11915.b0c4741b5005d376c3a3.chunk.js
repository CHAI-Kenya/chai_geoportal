(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[11915],{11915:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>_});var n=o(23560),i=o.n(n),r=o(24852),l=o.n(r),d=o(71167),a=o.n(d),s=o(93379),c=o.n(s),u=o(73494);c()(u.Z,{insert:"head",singleton:!1}),u.Z.locals;var p=o(66913),h=o.n(p),m=o(13218),f=o.n(m),y=o(47037),g=o.n(y);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function N(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?v(Object(o),!0).forEach((function(t){k(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,o){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(arguments.length<3?e:o):i.value}},w.apply(this,arguments)}function x(e,t,o){return t=S(t),function(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,O()?Reflect.construct(t,o||[],S(e).constructor):t.apply(e,o))}function O(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(O=function(){return!!e})()}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function A(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function j(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,z(n.key),n)}}function q(e,t,o){return t&&j(e.prototype,t),o&&j(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t,o){return(t=z(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function z(e){var t=function(e,t){if("object"!=b(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==b(t)?t:t+""}var M=200,B=["modules"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},D.apply(this,arguments)}var U=a().Quill,I=function(e){var t=e.import("blots/embed"),o=e.import("formats/link"),n=e.imports.parchment,i=new n.Attributor.Style("float","float"),r=new n.Attributor.Style("margin","margin"),l=new n.Attributor.Style("display","display"),d=new n.Attributor.Style("width","width"),a={iframeIcon:!0,modules:["DisplaySize","Toolbar","Resize"],overlayStyles:{position:"absolute",boxSizing:"border-box",border:"1px dashed #444"},handleStyles:{position:"absolute",height:"12px",width:"12px",backgroundColor:"white",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80"},displayStyles:{position:"absolute",font:"12px/1.0 Arial, Helvetica, sans-serif",padding:"4px 8px",textAlign:"center",backgroundColor:"white",color:"#333",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",cursor:"default"},toolbarStyles:{position:"absolute",top:"-12px",right:"0",left:"0",height:"0",minWidth:"100px",font:"12px/1.0 Arial, Helvetica, sans-serif",textAlign:"center",color:"#333",boxSizing:"border-box",cursor:"default"},toolbarButtonStyles:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"},toolbarButtonSvgStyles:{fill:"#444",stroke:"#444",strokeWidth:"2"}},s=q((function e(t){E(this,e),k(this,"onCreate",(function(){})),k(this,"onDestroy",(function(){})),k(this,"onUpdate",(function(){})),this.overlay=t.overlay,this.domNode=t.domNode,this.options=t.options,this.requestUpdate=t.onUpdate})),c=function(e){function t(){var e;E(this,t);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return k(e=x(this,t,[].concat(n)),"onCreate",(function(){e.display=document.createElement("div"),Object.assign(e.display.style,e.options.displayStyles),e.overlay.appendChild(e.display)})),k(e,"onDestroy",(function(){})),k(e,"onUpdate",(function(){if(e.display&&e.domNode){var t=e.getCurrentSize();if(e.display.innerHTML=t.join(" &times; "),t[0]>120&&t[1]>30)Object.assign(e.display.style,{right:"4px",bottom:"4px",left:"auto"});else if("right"===e.domNode.style.float){var o=e.display.getBoundingClientRect();Object.assign(e.display.style,{right:"auto",bottom:"-".concat(o.height+4,"px"),left:"-".concat(o.width+4,"px")})}else{var n=e.display.getBoundingClientRect();Object.assign(e.display.style,{right:"-".concat(n.width+4,"px"),bottom:"-".concat(n.height+4,"px"),left:"auto"})}}})),k(e,"getCurrentSize",(function(){return"IMG"===e.domNode.tagName.toUpperCase()?[e.domNode.width,Math.round(e.domNode.width/e.domNode.naturalWidth*e.domNode.naturalHeight)]:[e.domNode.clientWidth,e.domNode.clientHeight]})),e}return A(t,e),q(t)}(s),u=function(e){function t(){var e;E(this,t);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return k(e=x(this,t,[].concat(n)),"onCreate",(function(){e.boxes=[],e.addBox("nwse-resize"),e.addBox("nesw-resize"),e.addBox("nwse-resize"),e.addBox("nesw-resize"),e.positionBoxes()})),k(e,"onDestroy",(function(){e.setCursor("")})),k(e,"positionBoxes",(function(){var t="".concat(-parseFloat(e.options.handleStyles.width)/2,"px"),o="".concat(-parseFloat(e.options.handleStyles.height)/2,"px");[{left:t,top:o},{right:t,top:o},{right:t,bottom:o},{left:t,bottom:o}].forEach((function(t,o){Object.assign(e.boxes[o].style,t)}))})),k(e,"addBox",(function(t){var o=document.createElement("div");Object.assign(o.style,e.options.handleStyles),o.style.cursor=t,o.style.width="".concat(e.options.handleStyles.width,"px"),o.style.height="".concat(e.options.handleStyles.height,"px"),o.addEventListener("mousedown",e.handleMousedown,!1),e.overlay.appendChild(o),e.boxes.push(o)})),k(e,"handleMousedown",(function(t){e.dragBox=t.target,e.dragStartX=t.clientX,e.dragStartY=t.clientY,e.preDragWidth=e.domNode.width||e.domNode.naturalWidth||e.domNode.clientWidth,e.preDragHeight=e.domNode.height||e.domNode.naturalHeight||e.domNode.clientHeight,e.setCursor(e.dragBox.style.cursor),document.addEventListener("mousemove",e.handleDrag,!1),document.addEventListener("mouseup",e.handleMouseup,!1)})),k(e,"handleMouseup",(function(){e.setCursor(""),document.removeEventListener("mousemove",e.handleDrag),document.removeEventListener("mouseup",e.handleMouseup)})),k(e,"handleDrag",(function(t){if(e.domNode){var o=t.clientX-e.dragStartX,n=t.clientY-e.dragStartY;if(e.dragBox===e.boxes[0]||e.dragBox===e.boxes[3]){if("IMG"===e.domNode.tagName.toUpperCase())e.domNode.width=Math.round(e.preDragWidth-o);else if("ms-quill-iframe"===e.domNode.getAttribute("class")){var i=e.domNode.parentNode&&e.domNode.parentNode.children&&e.domNode.parentNode.children[0]||null;i&&(e.domNode.parentNode.parentNode.style.width=Math.round(e.preDragWidth-o)+"px",i.setAttribute("width",e.domNode.parentNode.parentNode.clientWidth),e.domNode.style.width=e.domNode.parentNode.parentNode.clientWidth+"px")}}else if("IMG"===e.domNode.tagName.toUpperCase())e.domNode.width=Math.round(e.preDragWidth+o);else if("ms-quill-iframe"===e.domNode.getAttribute("class")){var r=e.domNode.parentNode&&e.domNode.parentNode.children&&e.domNode.parentNode.children[0]||null;r&&(e.domNode.parentNode.parentNode.style.width=Math.round(e.preDragWidth+o)+"px",r.setAttribute("width",e.domNode.parentNode.parentNode.clientWidth),e.domNode.style.width=e.domNode.parentNode.parentNode.clientWidth+"px")}if("ms-quill-iframe"===e.domNode.getAttribute("class")){var l=e.domNode.parentNode&&e.domNode.parentNode.children&&e.domNode.parentNode.children[0]||null;l&&(e.domNode.parentNode.parentNode.style.height=Math.round(e.preDragHeight+n)+"px",l.setAttribute("height",e.domNode.parentNode.parentNode.clientHeight),e.domNode.style.height=e.domNode.parentNode.parentNode.clientHeight+"px")}e.requestUpdate()}})),k(e,"setCursor",(function(t){[document.body,"IMG"===e.domNode.tagName.toUpperCase()?e.domNode:e.domNode.parentNode.parentNode].forEach((function(e){e.style.cursor=t}))})),e}return A(t,e),q(t)}(s),p=function(e){function t(){var e;E(this,t);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return k(e=x(this,t,[].concat(n)),"onCreate",(function(){e.toolbar=document.createElement("div"),Object.assign(e.toolbar.style,e.options.toolbarStyles),e.overlay.appendChild(e.toolbar),e._defineAlignments(),e._addToolbarButtons()})),k(e,"onDestroy",(function(){})),k(e,"onUpdate",(function(){})),k(e,"_defineAlignments",(function(){var t="IMG"===e.domNode.tagName.toUpperCase()?e.domNode:e.domNode.parentNode.parentNode;e.alignments=[{icon:'<span class="glyphicon glyphicon-align-left" style="display: inline-block; margin-top: 4px;"></span>',apply:function(){l.add(t,"inline"),i.add(t,"left"),r.add(t,"0 1em 1em 0")},isApplied:function(){return"left"===i.value(t)}},{icon:'<span class="glyphicon glyphicon-align-center" style="display: inline-block; margin-top: 4px;"></span>',apply:function(){l.add(t,"block"),i.remove(t),r.add(t,"auto")},isApplied:function(){return"auto"===r.value(t)}},{icon:'<span class="glyphicon glyphicon-align-right" style="display: inline-block; margin-top: 4px;"></span>',apply:function(){l.add(t,"inline"),i.add(t,"right"),r.add(t,"0 0 1em 1em")},isApplied:function(){return"right"===i.value(t)}},{icon:'<span class="glyphicon glyphicon-remove" style="display: inline-block; margin-top: 4px;"></span>',apply:function(){if(l.add(t,"block"),i.add(t,"none"),r.add(t,"0"),d.add(t,"100%"),"ql-video"===t.getAttribute("class")){var e=t.querySelector("IFRAME")||null,o=t.querySelector(".ms-quill-iframe")||null;e&&o&&(t.style.width="100%",e.setAttribute("width","100%"),o.style.width="100%",t.style.height=M+"px",e.setAttribute("height",M),o.style.height=M+"px")}},isApplied:function(){return!1}}]})),k(e,"_addToolbarButtons",(function(){var t=[];e.alignments.forEach((function(o,n){var d=document.createElement("span");t.push(d),d.innerHTML=o.icon,d.addEventListener("click",(function(){t.forEach((function(e){e.style.filter=""})),o.isApplied()?(i.remove(e.domNode),r.remove(e.domNode),l.remove(e.domNode)):(e._selectButton(d),o.apply()),e.requestUpdate()})),Object.assign(d.style,e.options.toolbarButtonStyles),n>0&&(d.style.borderLeftWidth="0"),Object.assign(d.style,e.options.toolbarButtonSvgStyles),o.isApplied()&&e._selectButton(d),e.toolbar.appendChild(d)}))})),k(e,"_selectButton",(function(e){e.style.filter="invert(20%)"})),e}return A(t,e),q(t)}(s),m={DisplaySize:c,Toolbar:p,Resize:u},y=q((function t(o){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};E(this,t),k(this,"initializeModules",(function(){n.removeModules(),n.modules=n.moduleClasses.map((function(e){return new(m[e]||e)(n)})),n.modules.forEach((function(e){e.onCreate()})),n.onUpdate()})),k(this,"onUpdate",(function(){n.repositionElements(),n.modules.forEach((function(e){e.onUpdate()}))})),k(this,"removeModules",(function(){n.modules.forEach((function(e){e.onDestroy()})),n.modules=[]})),k(this,"handleClick",(function(e){if(e.target&&e.target.tagName&&"IMG"===e.target.tagName.toUpperCase()||e.target&&e.target.tagName&&"DIV"===e.target.tagName.toUpperCase()&&"ms-quill-iframe"===e.target.getAttribute("class")){if(n.domNode===e.target)return;n.domNode&&n.hide(),n.show(e.target)}else n.domNode&&n.hide()})),k(this,"show",(function(e){n.domNode=e,n.showOverlay(),n.initializeModules()})),k(this,"showOverlay",(function(){n.overlay&&n.hideOverlay(),n.quill.setSelection(null),n.setUserSelect("none"),document.addEventListener("keyup",n.checkImage,!0),n.quill.root.addEventListener("input",n.checkImage,!0);var e=n.quill.root.parentNode.querySelector(".ql-editor");if(e&&(e.style.overflow="hidden"),n.overlay=document.createElement("div"),Object.assign(n.overlay.style,n.options.overlayStyles),n.domNode&&"ms-quill-iframe"===n.domNode.getAttribute("class")){n.input=document.createElement("input"),n.input.style.position="absolute",n.input.style.left="8px",n.input.style.top="16px",n.input.style.width="calc(100% - 16px)";var t=n.domNode.parentNode&&n.domNode.parentNode.children&&n.domNode.parentNode.children[0]&&n.domNode.parentNode.children[0].getAttribute("src")||"";n.input.setAttribute("value",t),n.overlay.appendChild(n.input),n.overlay.style.backgroundColor="rgba(0, 0, 0, 0.2)"}n.quill.root.parentNode.appendChild(n.overlay),n.repositionElements()})),k(this,"hideOverlay",(function(){if(n.overlay){n.input&&(n.domNode.parentNode&&n.domNode.parentNode.children&&n.domNode.parentNode.children[0]&&n.domNode.parentNode.children[0]&&n.domNode.parentNode.children[0].setAttribute("src",n.input.value),n.overlay.removeChild(n.input),n.input=void 0);var e=n.quill.root.parentNode.querySelector(".ql-editor");e&&(e.style.overflow="auto"),n.quill.root.parentNode.removeChild(n.overlay),n.overlay=void 0,document.removeEventListener("keyup",n.checkImage),n.quill.root.removeEventListener("input",n.checkImage),n.setUserSelect("")}})),k(this,"repositionElements",(function(){if(n.overlay&&n.domNode){var e=n.quill.root.parentNode,t="IMG"===n.domNode.tagName.toUpperCase()?n.domNode.getBoundingClientRect():n.domNode.parentNode.parentNode.getBoundingClientRect(),o=e.getBoundingClientRect();Object.assign(n.overlay.style,{left:"".concat(t.left-o.left-1+e.scrollLeft,"px"),top:"".concat(t.top-o.top+e.scrollTop,"px"),width:"".concat(t.width,"px"),height:"".concat(t.height,"px")})}})),k(this,"hide",(function(){n.hideOverlay(),n.removeModules(),n.domNode=void 0})),k(this,"setUserSelect",(function(e){["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"].forEach((function(t){n.quill.root.style[t]=e,document.documentElement.style[t]=e}))})),k(this,"checkImage",(function(t){n.domNode&&n.input!==t.target&&(46!==t.keyCode&&8!==t.keyCode||"IMG"!==n.domNode.tagName.toUpperCase()||e.find(n.domNode).deleteAt(0),n.hide())})),this.quill=o;var r=!1;if(i.modules&&(r=i.modules.slice()),this.options=h()({},i,a),!1!==r&&(this.options.modules=r),this.quill.theme&&this.quill.theme.modules&&this.quill.theme.modules.toolbar&&this.quill.theme.modules.toolbar.container&&this.options.iframeIcon){var l=this.quill.theme.modules.toolbar.container.querySelector(".ql-video");l&&(l.innerHTML='<svg viewbox="0 1022 18 18"><g transform="translate(0,0) scale(3.5)"><path d="m 0.20913578,292.52935 -0.0448461,0.0228 c -0.0522035,0.0266 -0.10514577,0.0764 -0.12730166,0.11985 -0.03898753,0.0764 -0.03689917898,-0.0334 -0.036985428654,1.94049 -5.91591201e-5,1.35972 0.00218847865,1.849 0.00864824865,1.87539 0.02503373,0.10227 0.09520806,0.17792 0.19668092,0.21203 0.0202072,0.007 0.54764317,0.009 2.18732434,0.008 l 2.1606966,-0.001 0.044846,-0.0228 c 0.079823,-0.0406 0.1345603,-0.10935 0.1556385,-0.19546 0.00646,-0.0264 0.00872,-0.51567 0.00866,-1.87539 -7.44e-5,-1.97386 0.002,-1.86407 -0.036985,-1.94049 -0.022155,-0.0434 -0.075113,-0.0933 -0.1273161,-0.11985 l -0.044846,-0.0228 H 2.381244 Z m 0.0798849,0.757 H 2.381244 4.4734673 v 1.57107 1.57107 H 2.381244 0.28902068 v -1.57107 z m 2.34957572,0.33607 c -0.028878,0 -0.055626,0.007 -0.080256,0.0204 -0.024631,0.0136 -0.045009,0.0323 -0.061147,0.056 -0.016138,0.0238 -0.025064,0.0501 -0.026762,0.079 -0.032275,0.14948 -0.1758133,0.82556 -0.4306147,2.02822 -0.00679,0.017 -0.010194,0.0348 -0.010194,0.0535 0,0.0306 0.00764,0.0586 0.022928,0.0841 0.015288,0.0255 0.035682,0.0459 0.061162,0.0612 0.025481,0.0153 0.053499,0.0229 0.084076,0.0229 0.022083,0 0.043319,-0.004 0.063703,-0.0127 0.020385,-0.008 0.038221,-0.0204 0.053509,-0.0357 0.015288,-0.0153 0.027184,-0.0331 0.035678,-0.0535 0.00849,-0.0204 0.013592,-0.0416 0.01529,-0.0637 l 0.4255178,-2.00274 c 0.00849,-0.0221 0.013592,-0.045 0.015291,-0.0688 0,-0.0459 -0.016566,-0.0854 -0.04969,-0.11847 -0.033125,-0.0331 -0.072626,-0.0497 -0.1184901,-0.0497 z m -0.1025608,0.30066 c 0.00234,0.002 0.00489,0.003 0.00701,0.005 0.00425,0.003 0.00892,0.006 0.014013,0.008 -0.0051,-0.002 -0.010194,-0.004 -0.01529,-0.008 -0.0017,-0.002 -0.00361,-0.003 -0.00574,-0.005 z m -0.7892346,0.20894 c -0.022083,0 -0.048417,0.008 -0.078993,0.0255 l -0.050968,0.0382 c -0.3295431,0.2599 -0.5461142,0.43063 -0.64973332,0.51217 -0.0441656,0.0187 -0.0764407,0.0514 -0.0968248,0.0981 -0.0203841,0.0467 -0.0246402,0.0947 -0.0127495,0.14398 0.0118908,0.0493 0.038225,0.0858 0.0789933,0.10956 0.057755,0.0408 0.13887122,0.10235 0.24333972,0.18473 0.1044687,0.0824 0.1643489,0.13037 0.179637,0.14396 0.022083,0.017 0.053501,0.0412 0.094269,0.0726 0.040768,0.0314 0.077299,0.0603 0.1095742,0.0866 0.032275,0.0263 0.06285,0.0514 0.091728,0.0752 0.047563,0.034 0.1006454,0.0412 0.1592497,0.0217 0.058604,-0.0195 0.097249,-0.0565 0.1159341,-0.11084 0.016987,-0.0442 0.015701,-0.0896 -0.00383,-0.13632 -0.018887,-0.0452 -0.049313,-0.0772 -0.091223,-0.0962 l -0.03489,-0.0274 c -0.018685,-0.0136 -0.029739,-0.0221 -0.033137,-0.0255 -0.056056,-0.0408 -0.1375864,-0.10108 -0.2446029,-0.18091 -0.1070166,-0.0798 -0.1843053,-0.13759 -0.2318683,-0.17327 0.030576,-0.0221 0.1108352,-0.082 0.240784,-0.17963 0.1299487,-0.0977 0.2297443,-0.17284 0.29939,-0.2255 0.057755,-0.0238 0.093001,-0.0697 0.1057405,-0.1376 0.01274,-0.0679 -0.00467,-0.12314 -0.052231,-0.16561 -0.035672,-0.0357 -0.078129,-0.0527 -0.1273908,-0.051 -0.0034,-0.002 -0.0068,-0.003 -0.010194,-0.003 z m 1.2689006,0 c -0.0034,0 -0.0068,8.5e-4 -0.010194,0.003 -0.049262,-0.002 -0.091718,0.0153 -0.1273909,0.051 -0.047563,0.0425 -0.064971,0.0977 -0.052231,0.16561 0.01274,0.0679 0.047986,0.11382 0.1057406,0.1376 0.069646,0.0527 0.1694416,0.12782 0.29939,0.2255 0.1299488,0.0977 0.210208,0.15755 0.2407841,0.17963 -0.047563,0.0357 -0.1248516,0.0934 -0.2318683,0.17327 -0.1070167,0.0798 -0.1885466,0.14014 -0.2446028,0.18091 l -0.033137,0.0255 c -0.015288,0.0102 -0.024628,0.017 -0.028025,0.0204 -0.00522,0.004 -0.00795,0.007 -0.00826,0.008 -0.041191,0.019 -0.071164,0.0509 -0.089841,0.0955 -0.019535,0.0467 -0.020806,0.0922 -0.00382,0.13632 0.018685,0.0544 0.05733,0.0913 0.1159342,0.11084 0.058604,0.0195 0.1116868,0.0123 0.1592499,-0.0217 0.028877,-0.0238 0.059453,-0.0488 0.091728,-0.0752 0.032275,-0.0263 0.068806,-0.0552 0.1095742,-0.0866 0.040768,-0.0314 0.072186,-0.0556 0.094269,-0.0726 0.032275,-0.0272 0.076018,-0.0629 0.1312245,-0.10702 0.055207,-0.0442 0.10659,-0.0845 0.1541529,-0.12103 0.047563,-0.0365 0.093434,-0.0701 0.1375999,-0.10064 0.040768,-0.0238 0.067102,-0.0603 0.078993,-0.10956 0.011891,-0.0493 0.00763,-0.0973 -0.012749,-0.14398 -0.020384,-0.0467 -0.052659,-0.0794 -0.096824,-0.0981 -0.07814,-0.0612 -0.2947259,-0.23189 -0.6497489,-0.51217 -0.045864,-0.0408 -0.089179,-0.062 -0.1299468,-0.0637 z m -1.4396219,0.15034 c -0.0017,0.008 -0.00256,0.0178 -0.00256,0.028 v -0.0102 -0.0102 z m 1.6103431,0 0.00254,0.008 v 0.0102 0.0102 c 0,-0.0102 -8.416e-4,-0.0195 -0.00254,-0.028 z m -1.6128989,0.051 0.00256,0.0178 0.00254,0.0179 0.00765,0.0178 0.00764,0.0153 h -0.00254 c -0.0017,-0.003 -0.0034,-0.008 -0.0051,-0.0153 l -0.00256,-0.003 -0.0051,-0.0153 c -0.0017,-0.008 -0.00254,-0.0145 -0.00254,-0.0179 -0.0017,-0.007 -0.00256,-0.0127 -0.00256,-0.0178 z m 1.6154252,2.3e-4 c -2.25e-5,0.005 -8.494e-4,0.0109 -0.00252,0.0176 0,0.003 -8.416e-4,0.009 -0.00254,0.0179 l -0.0051,0.0153 -0.00256,0.003 c -0.0017,0.007 -0.0034,0.0119 -0.0051,0.0153 h -0.00254 l 0.00764,-0.0153 0.00765,-0.0178 0.00254,-0.0179 z m -1.50331,0.1552 c 0.00849,0.003 0.01869,0.007 0.030581,0.0102 -0.00679,-0.002 -0.011036,-0.003 -0.012735,-0.003 -0.0051,-0.002 -0.011052,-0.004 -0.017846,-0.008 z m 1.3912246,0 c -0.00679,0.003 -0.01275,0.006 -0.017846,0.008 -0.0017,0 -0.00594,8.6e-4 -0.012735,0.003 0.011891,-0.003 0.022087,-0.007 0.030581,-0.0102 z m -0.7975265,1.2256 c 0.0051,0.002 0.00934,0.004 0.012734,0.008 -0.0051,-0.003 -0.00934,-0.006 -0.012734,-0.008 z"/></g></svg>')}this.quill.theme&&this.quill.theme.tooltip&&this.quill.theme.tooltip.root&&this.quill.theme.tooltip.root.classList&&this.quill.theme.tooltip.root.classList.add&&this.options.iframeIcon&&this.quill.theme.tooltip.root.classList.add("ms-ql-iframe-tooltip"),document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.addEventListener("click",this.handleClick,!1),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.moduleClasses=this.options.modules,this.modules=[]})),b=["height","width"],v=function(e){function t(){return E(this,t),x(this,t,arguments)}return A(t,e),q(t,[{key:"format",value:function(e,o){b.indexOf(e)>-1?o?this.domNode.setAttribute(e,o):this.domNode.removeAttribute(e):w(S(t.prototype),"format",this).call(this,e,o)}}],[{key:"create",value:function(e){var o="",n="100%",i=M;f()(e)?(o=e.src||o,n=e.width||n,i=e.height||i):o=e||o;var r=w(S(t),"create",this).call(this,e);r.style.position="relative",e.domNodeStyle&&Object.assign(r.style,e.domNodeStyle),r.style.width=g()(n)&&-1!==n.indexOf("%")?n:n+"px",r.style.height=g()(i)&&-1!==i.indexOf("%")?i:i+"px";var l=document.createElement("IFRAME");l.setAttribute("frameborder","0"),l.setAttribute("allowfullscreen",!0),l.setAttribute("src",this.sanitize(o)),l.setAttribute("width",n),l.setAttribute("height",i);var d=document.createElement("DIV");return d.setAttribute("class","ms-quill-iframe"),d.style.overflow="hidden",d.style.position="absolute",d.style.left="0",d.style.top="0",d.style.width=g()(n)&&-1!==n.indexOf("%")?n:n+"px",d.style.height=g()(i)&&-1!==i.indexOf("%")?i:i+"px",d.style.border="1px solid #ddd",r.appendChild(l),r.appendChild(d),r}},{key:"formats",value:function(e){return b.reduce((function(t,o){return e.hasAttribute(o)&&(t[o]=e.getAttribute(o)),t}),{})}},{key:"sanitize",value:function(e){return o.sanitize(e)}},{key:"value",value:function(e){var t=e.children&&e.children[0]&&e.children[0].children&&e.children[0].children[0];return t?{src:t.getAttribute("src"),width:t.getAttribute("width"),height:t.getAttribute("height"),domNodeStyle:N({},e.style)}:""}}])}(t);return v.blotName="video",v.className="ql-video",v.tagName="DIV",{ResizeModule:y,IFrame:v,toolbarConfig:{container:[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"],["video"]]},BaseModule:s,Toolbar:p,DisplaySize:c,Resize:u}}(U),P=I.ResizeModule,R=I.IFrame,L=I.toolbarConfig;U.register({"formats/video":R,"modules/resizeModule":P});const _=(0,r.forwardRef)((function(e,t){var o=e.modules,n=function(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(e,B);return l().createElement(a(),D({ref:t},n,{modules:i()(o)?o(L):o}))}))},73494:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var n=o(23645),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,'\n\n.msgapi .ql-snow .ms-ql-iframe-tooltip[data-mode=video]::before {\n    content: "Enter iframe url:";\n}\n\n\n',""]);const r=i}}]);