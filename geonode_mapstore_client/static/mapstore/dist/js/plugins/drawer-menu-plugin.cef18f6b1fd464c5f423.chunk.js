(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[87177],{787011:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>ft});var o=n(893379),r=n.n(o),i=n(840802);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=n(365544),s=n.n(a),l=n(727418),u=n.n(l),c=n(45697),p=n.n(c),d=n(124852),f=n.n(d),h=n(480681),b=n(171703),y=n(22222),m=n(782904),g=n(801550),v=n(815135),w=n(55105),S=n(506806),O=n(950966),j=n(101706),C=n(805346),k=n(38560),T=["glyph","icon","buttonConfig"];function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){R(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function W(){return W=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},W.apply(null,arguments)}function X(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,I(o.key),o)}}function _(t,e,n){return e=M(e),function(t,e){if(e&&("object"==P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,N()?Reflect.construct(e,n||[],M(t).constructor):e.apply(t,n))}function N(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(N=function(){return!!t})()}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}function z(t,e){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},z(t,e)}function R(t,e,n){return(e=I(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I(t){var e=function(t,e){if("object"!=P(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=P(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==P(e)?e:e+""}var H=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return R(t=_(this,e,[].concat(o)),"getWidth",(function(){return t.props.dynamicWidth||t.props.width})),R(t,"renderChildren",(function(e,n){var o={key:e.key?e.key:n,ref:e.ref,open:t.props.activeKey&&t.props.activeKey===e.props.eventKey},r=e.props,i=(r.glyph,r.icon,r.buttonConfig,function(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(e.indexOf(o)>=0)continue;n[o]=t[o]}return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(r,T));return f().createElement(e.type,W({},o,i))})),R(t,"renderButtons",(function(){return t.props.children.map((function(e){var n=f().createElement(k.Z,{key:e.props.eventKey,bsSize:"large",className:e.props.buttonConfig&&e.props.buttonConfig.buttonClassName?e.props.buttonConfig.buttonClassName:"square-button",onClick:t.props.onChoose.bind(null,e.props.eventKey,t.props.activeKey===e.props.eventKey),bsStyle:t.props.activeKey===e.props.eventKey?"default":"primary"},e.props.glyph?f().createElement(h.gG,{glyph:e.props.glyph}):e.props.icon);if(e.props.buttonConfig&&e.props.buttonConfig.tooltip){var o=f().createElement(h.u,{key:"tooltip."+e.props.eventKey,id:"tooltip."+e.props.eventKey},f().createElement(C.Z,{msgId:e.props.buttonConfig.tooltip}));return f().createElement(O.Z,{placement:"bottom",key:"overlay-trigger."+e.props.eventKey,overlay:o},n)}return n}))})),R(t,"renderContent",(function(){var e=t.props.single?f().createElement("div",{className:"navHeader",style:{width:"100%",minHeight:"35px"}},f().createElement(h.gG,{glyph:"1-close",className:"no-border btn-default",onClick:t.props.onToggle,style:{cursor:"pointer"}}),f().createElement("div",{className:"navButtons"},t.renderButtons())):f().createElement("div",{className:"navHeader",style:{width:"100%",minHeight:"35px"}},f().createElement("span",{className:"title"},t.props.title),f().createElement(h.gG,{glyph:"1-close",className:"no-border btn-default",onClick:t.props.onToggle,style:{cursor:"pointer"}})),n=f().createElement("div",{className:"nav-content"},e,f().createElement("div",{className:"nav-body"},t.props.children.filter((function(e){return!t.props.single||t.props.activeKey===e.props.eventKey})).map(t.renderChildren)));return t.props.resizable?f().createElement(j.Resizable,{axis:"x",resizeHandles:["e"],width:t.getWidth(),onResize:t.resize},n):n})),R(t,"resize",(function(e,n){var o=n.size;t.props.onResize(o.width)})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&z(t,e)}(e,t),n=e,(o=[{key:"componentDidMount",value:function(){if(!this.props.overlapMap&&this.props.show){var t={left:this.props.width,width:"calc(100% - ".concat(this.props.width,"px)")};this.props.changeMapStyle(t,"drawerMenu")}}},{key:"componentDidUpdate",value:function(t){if(!this.props.overlapMap&&t.show!==this.props.show){var e=this.props.show?{left:this.props.width,width:"calc(100% - ".concat(this.props.width,"px)")}:{};this.props.changeMapStyle(e,"drawerMenu")}}},{key:"render",value:function(){var t=this;return f().createElement(S.Z,{styles:{sidebar:x(x({},this.props.layout),{},{zIndex:1022,width:this.getWidth()}),overlay:{zIndex:1021},root:{right:this.props.show?0:"auto",width:"0",overflow:"visible"},content:{overflowY:"auto"}},sidebarClassName:"nav-menu",onSetOpen:function(){t.props.onToggle()},open:this.props.show,docked:this.props.docked,sidebar:this.renderContent()},f().createElement("div",null))}}])&&X(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(f().Component);R(H,"propTypes",{title:p().node,alignment:p().string,activeKey:p().string,docked:p().bool,show:p().bool,onToggle:p().func,onChoose:p().func,single:p().bool,width:p().number,dynamicWidth:p().number,overlapMap:p().bool,changeMapStyle:p().func,layout:p().object,resizable:p().bool,onResize:p().func}),R(H,"defaultProps",{docked:!1,single:!1,width:300,overlapMap:!0,layout:{},resizable:!1,onResize:function(){}});const D=H;var K=n(843614);function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function B(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,F(o.key),o)}}function Y(t,e,n){return e=A(e),function(t,e){if(e&&("object"==Z(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,q()?Reflect.construct(e,n||[],A(t).constructor):e.apply(t,n))}function q(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(q=function(){return!!t})()}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}function J(t,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},J(t,e)}function G(t,e,n){return(e=F(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function F(t){var e=function(t,e){if("object"!=Z(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=Z(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==Z(e)?e:e+""}var L=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return G(t=Y(this,e,[].concat(o)),"onHeaderClick",(function(){t.props.onHeaderClick(t.props.eventKey)})),G(t,"getHeight",(function(){return t.props.open&&t.refs.sectionContent?t.refs.sectionContent.scrollHeight+10:"0"})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&J(t,e)}(e,t),n=e,(o=[{key:"render",value:function(){var t={maxHeight:this.getHeight(),overflow:this.props.open?"auto":"hidden",padding:this.props.open?null:"0"};return f().createElement("div",{className:"section"},f().createElement("div",{className:"sectionHeader",style:{width:"100%"},onClick:this.onHeaderClick},this.props.renderInModal?null:f().createElement(h.gG,{glyph:"triangle-right",style:this.props.open?{transform:"rotate(90deg)"}:{}}),f().createElement("span",{className:this.headerClassName+" sectionTitle",ref:"sectionTitle"},this.props.header)),this.props.renderInModal?f().createElement(K.Z,{ref:"modal",show:this.props.open,onHide:this.onHeaderClick},f().createElement(K.Z.Header,{closeButton:!0},f().createElement(K.Z.Title,null,this.props.header)),f().createElement(K.Z.Body,null,this.props.children)):f().createElement("div",{ref:"sectionContent",className:"sectionContent",style:t},this.props.children))}}])&&B(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(f().Component);G(L,"displayName","Section"),G(L,"propTypes",{key:p().string,eventKey:p().string,headerClassName:p().string,open:p().bool,onHeaderClick:p().func,renderInModal:p().bool,header:p().node}),G(L,"defaultProps",{headerClassName:"panel-heading"});const U=L;var Q=n(481756);function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function $(){return $=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},$.apply(null,arguments)}function tt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,at(o.key),o)}}function et(t,e,n){return e=ot(e),function(t,e){if(e&&("object"==V(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,nt()?Reflect.construct(e,n||[],ot(t).constructor):e.apply(t,n))}function nt(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(nt=function(){return!!t})()}function ot(t){return ot=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ot(t)}function rt(t,e){return rt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},rt(t,e)}function it(t,e,n){return(e=at(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function at(t){var e=function(t,e){if("object"!=V(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=V(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==V(e)?e:e+""}var st=(0,v.Z)(k.Z),lt=(0,y.P1)([function(t){return t.controls.drawer&&t.controls.drawer.enabled},function(t){return t.controls.drawer&&t.controls.drawer.menu||"1"},function(t){return t.controls.queryPanel&&t.controls.queryPanel.enabled&&t.controls.drawer&&t.controls.drawer.width||t.controls.drawer&&t.controls.drawer.resizedWidth||void 0},function(t){return(0,w.ic)(t,{height:!0})}],(function(t,e,n,o){return{show:t,activeKey:e,dynamicWidth:n,layout:o}})),ut=(0,b.connect)(lt,{onToggle:m.Xi.bind(null,"drawer",null),onResize:m.Xg.bind(null,"drawer","resizedWidth"),onChoose:s()(m.Xg.bind(null,"drawer","menu"),!0),changeMapStyle:g.hd})(D),ct=(0,b.connect)((function(t){return{disabled:t.controls&&t.controls.drawer&&t.controls.drawer.disabled}}),{toggleMenu:m.Xi.bind(null,"drawer",null)})((function(t){var e=t.id,n=void 0===e?"":e,o=t.menuButtonStyle,r=void 0===o?{}:o,i=t.buttonStyle,a=void 0===i?"primary":i,s=t.buttonClassName,l=void 0===s?"square-button ms-drawer-menu-button":s,u=t.toggleMenu,c=void 0===u?function(){}:u,p=t.disabled,d=void 0!==p&&p,b=t.glyph,y=void 0===b?"1-layer":b,m=t.tooltipId,g=void 0===m?"toc.drawerButton":m,v=t.tooltipPosition,w=void 0===v?"bottom":v;return f().createElement(st,{id:n,style:r,bsStyle:a,key:"menu-button",className:l,onClick:c,disabled:d,tooltipId:g,tooltipPosition:w},f().createElement(h.gG,{glyph:y}))})),pt=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return it(t=et(this,e,[].concat(o)),"getTools",(function(){return t.props.items.map((function(t,e){return u()({},t,{position:t.position||e})})).sort((function(t,e){return t.position-e.position}))})),it(t,"renderItems",(function(){return t.getTools().map((function(e,n){var o=e.panel||e.plugin,r=f().createElement(o,$({isPanel:!0},e.cfg,{items:e.items||[],groupStyle:{style:{marginBottom:"0px",cursor:"pointer"}}})),i=e.title?f().createElement("div",{className:"drawer-menu-head drawer-menu-head-"+e.name},f().createElement(Q.Z,{msgId:e.title})):null;return t.props.singleSection?f().createElement(h.s_,{icon:e.icon,glyph:e.glyph,buttonConfig:e.buttonConfig,key:e.name,eventKey:n+1+"",header:i},r):f().createElement(U,{key:e.name,renderInModal:e.renderInModal||!1,eventKey:n+1+"",header:i},r)}))})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&rt(t,e)}(e,t),n=e,(o=[{key:"render",value:function(){return this.getTools().length>0?f().createElement("div",{id:this.props.id},f().createElement(ct,$({},this.props,{id:"drawer-menu-button"})),f().createElement(ut,$({single:this.props.singleSection},this.props.menuOptions,{title:f().createElement(Q.Z,{msgId:"menu"}),alignment:"left"}),this.renderItems())):null}}])&&tt(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(f().Component);it(pt,"propTypes",{items:p().array,active:p().string,toggleMenu:p().func,id:p().string,glyph:p().string,buttonStyle:p().string,menuOptions:p().object,singleSection:p().bool,buttonClassName:p().string,menuButtonStyle:p().object,disabled:p().bool}),it(pt,"contextTypes",{messages:p().object,router:p().object}),it(pt,"defaultProps",{id:"mapstore-drawermenu",items:[],toggleMenu:function(){},glyph:"1-layer",buttonStyle:"primary",menuOptions:{},singleSection:!0,buttonClassName:"square-button ms-drawer-menu-button",disabled:!1});var dt=(0,b.connect)((function(t){return{active:t.controls&&t.controls.drawer&&t.controls.drawer.active,disabled:t.controls&&t.controls.drawer&&t.controls.drawer.disabled}}),{toggleMenu:m.Xi.bind(null,"drawer",null)})(pt);const ft={DrawerMenuPlugin:u()(dt,{disablePluginIf:"{state('featuregridmode') === 'EDIT'}",FloatingLegend:{priority:1,name:"drawer-menu",button:ct}}),reducers:{}}},481756:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(171703),r=n(805346);const i=(0,o.connect)((function(t){return{locale:t.locale&&t.locale.currentLocale,messages:t.locale&&t.locale.messages||[]}}))(r.Z)},55105:(t,e,n)=>{"use strict";n.d(e,{Ss:()=>h,Nr:()=>b,QJ:()=>y,ic:()=>m,Jz:()=>g,VM:()=>v,CF:()=>w,Ju:()=>S,Fc:()=>O,gQ:()=>j});var o=n(91175),r=n.n(o),i=n(288306),a=n.n(i),s=n(800827),l=n(552259),u=n(737275);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(t){return t.maplayout&&t.maplayout.layout||{}},b=function(t){return t.maplayout&&t.maplayout.boundingMapRect||{}},y=function(t){return t.maplayout&&t.maplayout.boundingSidebarRect||{}},m=a()((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=h(t),r=y(t);return o&&Object.keys(o).filter((function(t){return e[t]})).reduce((function(t,e){var i;return d(d({},t),{},f({},e,n&&null!==(i=r[e])&&void 0!==i?i:o[e]))}),{})||{}}),(function(t,e,n){return JSON.stringify(h(t))+JSON.stringify(y(t))+JSON.stringify(e)+(n?"_isDock":"")})),g=function(t){var e;return!(null===(e=h(t))||void 0===e||!e.rightPanel)},v=function(t){var e,n=u.ZP.getConfigProp("mapLayout")||l.Ur;return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=h(t);return!!r()(e.filter((function(t){return n[t.key]})).map((function(t){return"not"===t.type?n[t.key]!==t.value&&n[t.key]:n[t.key]===t.value})))}(t,[{key:"bottom",value:null!==(e=null==n?void 0:n.bottom.sm)&&void 0!==e?e:0,type:"not"}])},w=function(t){var e=(0,s.Od)(t),n=b(t);return n&&e&&e.size&&{left:(0,l.pb)(n.left,e.size.width),bottom:(0,l.pb)(n.bottom,e.size.height),right:(0,l.pb)(n.right,e.size.width),top:(0,l.pb)(n.top,e.size.height)}},S=function(t){var e,n;return null!==(e=null==t||null===(n=t.maplayout)||void 0===n?void 0:n.dockPanels)&&void 0!==e?e:{left:[],right:[]}},O=function(t){return m(t,{height:!0,right:!0},!0)},j=function(t){return m(t,{right:!0},!0)}},840802:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(923645),r=n.n(o)()((function(t){return t[1]}));r.push([t.id,"/* Menu Button */\n.msgapi .drawer-menu-button {\n    position: absolute;\n    z-index:1000;\n    left: 30px;\n    top: 8px;\n    width:30px;\n    background: transparent;\n    outline: none;\n    border: transparent;\n    font-size: 14px;\n}\n\n.msgapi .drawer-menu-button:hover {\n    background: transparent;\n}\n\n.msgapi #drawer-menu-button:active{\n    box-shadow: none;\n}\n\n.msgapi #mapstore-drawermenu > div > div:nth-child(2) {\n    display: none;\n}\n\n.msgapi .nav-content #background-switcher .thumbnail {\n    border-radius: 0 !important;\n    margin-bottom: 40px;\n    width: 220px !important;\n}\n.msgapi .nav-content #background-switcher .thumbnail img {\n    border-radius: 0 !important;\n    height: 90px;\n    width: 220px !important;\n}\n\n.msgapi .nav-content #background-switcher .thumbnail .caption {\n    font-size: 14px !important;\n    text-align: left !important;\n    top: -20px !important;\n    position: absolute !important;\n}\n\n.msgapi .nav-content #background-switcher {\n    margin-top: 10px;\n}\n\n.msgapi #mapstore-drawermenu .panel {\n    border: none;\n    box-shadow: none;\n}\n\n.msgapi div.nav-menu {\n    -webkit-transform:   translate3d(300px, 0, 0);\n    -moz-transform: \t translate3d(300px, 0, 0);\n    -ms-transform: \t\t translate3d(300px, 0, 0);\n    -o-transform: \t\t translate3d(300px, 0, 0);\n    box-shadow: 2px 0px 15px #A7A7A7;\n}\n\n.msgapi .nav-menu  .navHeader {\n    height: 50px;\n}\n.msgapi .nav-menu > .nav-content .navHeader .title{\n    font-size: 16px;\n    position: absolute;\n    margin: 13px;\n    font-weight: bold;\n}\n.msgapi .nav-content  .section {\n    margin-bottom: 2px;\n}\n.msgapi .nav-content  .section .sectionHeader{\n    padding: 5px;\n    cursor: pointer;\n}\n.msgapi .nav-content .section .sectionHeader>.glyphicon{\n    /* Firefox */\n    -moz-transition: all .3s ease;\n    /* WebKit */\n    -webkit-transition: all .3s ease;\n    /* Opera */\n    -o-transition: all .3s ease;\n    /* Standard */\n    transition: all .3s ease;\n}\n.msgapi .nav-content  .section .sectionTitle{\n    padding-left: 10px;\n\n}\n.msgapi .nav-content  .section .sectionContent{\n    -moz-transition: max-height .3s ease;\n    -webkit-transition: max-height .3s ease;\n    -o-transition: max-height .3s ease;\n    transition: max-height .3s ease;\n\n    box-shadow: inset 0px 0px 10px rgba(0,0,0,.5);\n    padding: 5px;\n}\n\n.msgapi .navButtons {\n    float: right;\n}\n\n.msgapi #drawer-menu-button {\n     position: absolute;\n}\n",""]);const i=r},365544:(t,e,n)=>{var o=n(105976),r=n(497727),i=n(720893),a=n(846460),s=o((function(t,e){var n=a(e,i(s));return r(t,64,void 0,e,n)}));s.placeholder={},t.exports=s},506806:(t,e,n)=>{"use strict";var o,r=(o=n(715132))&&o.__esModule?o:{default:o};e.Z=r.default},715132:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(124852),s=u(a),l=u(n(45697));function u(t){return t&&t.__esModule?t:{default:t}}var c={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},p={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},d={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"scroll",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},f={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},h={zIndex:1,position:"fixed",top:0,bottom:0},b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={sidebarWidth:t.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null,dragSupported:!1},n.overlayClicked=n.overlayClicked.bind(n),n.onTouchStart=n.onTouchStart.bind(n),n.onTouchMove=n.onTouchMove.bind(n),n.onTouchEnd=n.onTouchEnd.bind(n),n.onScroll=n.onScroll.bind(n),n.saveSidebarRef=n.saveSidebarRef.bind(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"componentDidMount",value:function(){this.setState({dragSupported:"object"===("undefined"==typeof window?"undefined":r(window))&&"ontouchstart"in window}),this.saveSidebarWidth()}},{key:"componentDidUpdate",value:function(){this.isTouching()||this.saveSidebarWidth()}},{key:"onTouchStart",value:function(t){if(!this.isTouching()){var e=t.targetTouches[0];this.setState({touchIdentifier:e.identifier,touchStartX:e.clientX,touchStartY:e.clientY,touchCurrentX:e.clientX,touchCurrentY:e.clientY})}}},{key:"onTouchMove",value:function(t){if(this.isTouching())for(var e=0;e<t.targetTouches.length;e++)if(t.targetTouches[e].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:t.targetTouches[e].clientX,touchCurrentY:t.targetTouches[e].clientY});break}}},{key:"onTouchEnd",value:function(){if(this.isTouching()){var t=this.touchSidebarWidth();(this.props.open&&t<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&t>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}}},{key:"onScroll",value:function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}},{key:"inCancelDistanceOnScroll",value:function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20}},{key:"isTouching",value:function(){return null!==this.state.touchIdentifier}},{key:"overlayClicked",value:function(){this.props.open&&this.props.onSetOpen(!1)}},{key:"saveSidebarWidth",value:function(){var t=this.sidebar.offsetWidth;t!==this.state.sidebarWidth&&this.setState({sidebarWidth:t})}},{key:"saveSidebarRef",value:function(t){this.sidebar=t}},{key:"touchSidebarWidth",value:function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)}},{key:"render",value:function(){var t=o({},p,this.props.styles.sidebar),e=o({},d,this.props.styles.content),n=o({},f,this.props.styles.overlay),r=this.state.dragSupported&&this.props.touch,i=this.isTouching(),a={className:this.props.rootClassName,style:o({},c,this.props.styles.root),role:"navigation"},l=void 0;if(this.props.pullRight?(t.right=0,t.transform="translateX(100%)",t.WebkitTransform="translateX(100%)",this.props.shadow&&(t.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(t.left=0,t.transform="translateX(-100%)",t.WebkitTransform="translateX(-100%)",this.props.shadow&&(t.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),i){var u=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(t.transform="translateX("+100*(1-u)+"%)",t.WebkitTransform="translateX("+100*(1-u)+"%)"):(t.transform="translateX(-"+100*(1-u)+"%)",t.WebkitTransform="translateX(-"+100*(1-u)+"%)"),n.opacity=u,n.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)"),this.props.pullRight?e.right=this.state.sidebarWidth+"px":e.left=this.state.sidebarWidth+"px"):this.props.open&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)",n.opacity=1,n.visibility="visible");if(!i&&this.props.transitions||(t.transition="none",t.WebkitTransition="none",e.transition="none",n.transition="none"),r)if(this.props.open)a.onTouchStart=this.onTouchStart,a.onTouchMove=this.onTouchMove,a.onTouchEnd=this.onTouchEnd,a.onTouchCancel=this.onTouchEnd,a.onScroll=this.onScroll;else{var b=o({},h,this.props.styles.dragHandle);b.width=this.props.touchHandleWidth,this.props.pullRight?b.right=0:b.left=0,l=s.default.createElement("div",{style:b,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return s.default.createElement("div",a,s.default.createElement("div",{className:this.props.sidebarClassName,style:t,ref:this.saveSidebarRef},this.props.sidebar),s.default.createElement("div",{className:this.props.overlayClassName,style:n,role:"presentation",tabIndex:"0",onClick:this.overlayClicked}),s.default.createElement("div",{className:this.props.contentClassName,style:e},l,this.props.children))}}]),e}(a.Component);b.propTypes={children:l.default.node.isRequired,styles:l.default.shape({root:l.default.object,sidebar:l.default.object,content:l.default.object,overlay:l.default.object,dragHandle:l.default.object}),rootClassName:l.default.string,sidebarClassName:l.default.string,contentClassName:l.default.string,overlayClassName:l.default.string,sidebar:l.default.node.isRequired,docked:l.default.bool,open:l.default.bool,transitions:l.default.bool,touch:l.default.bool,touchHandleWidth:l.default.number,pullRight:l.default.bool,shadow:l.default.bool,dragToggleDistance:l.default.number,onSetOpen:l.default.func,defaultSidebarWidth:l.default.number},b.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},e.default=b}}]);