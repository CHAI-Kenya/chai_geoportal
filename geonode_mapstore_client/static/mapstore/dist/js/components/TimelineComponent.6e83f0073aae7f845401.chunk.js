(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[14328],{790346:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>L});var o=n(124852),r=n.n(o),i=n(675263),s=n.n(i),a=n(730381),u=n.n(a),c=n(816307),m=n.n(c),l=(n(414880),n(291966)),p=n.n(l),f=n(170735),d=n.n(f),h=n(3674),y=n.n(h),v=n(225325),b=n.n(v),g=n(371843),O=n.n(g),w=n(966073),T=n.n(w),I=n(957557),$=n.n(I),j=n(328583),S=n.n(j),D=n(624262);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function k(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,R(o.key),o)}}function P(e,t,n){return t=x(t),function(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,A()?Reflect.construct(t,n||[],x(e).constructor):t.apply(e,n))}function A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(A=function(){return!!e})()}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},M(e,t)}function U(e,t,n){return(t=R(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){var t=function(e,t){if("object"!=_(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=_(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==_(t)?t:t+""}m().timeline.components.items.BackgroundItem.prototype._createDomElement=function(){this.dom||(this.dom={},this.dom.box=document.createElement("div"),this.dom.frame=document.createElement("div"),this.dom.frame.className="vis-item-overflow",this.dom.box.appendChild(this.dom.frame),this.dom.content=document.createElement("div"),this.dom.content.className="vis-item-content",this.dom.frame.appendChild(this.dom.content),this.dom.box["timeline-item"]=this,this.dirty=!0)};var B=function(){},H=["currentTimeTick","click","contextmenu","doubleClick","groupDragged","changed","rangechange","rangechanged","select","drop","timechange","timechanged","mouseOver","mouseMove","mouseleave","itemover","itemout","mouseDown","mouseUp"],N={},W={};T()(H,(function(e){return N[e]=s().func,W["".concat(e,"Handler")]=B,[N,W]}));var F={items:s().array,rangeItems:s().array,groups:s().array,options:s().object,selectionOptions:s().object,selection:s().array,customTimes:s().shape({datetime:s().instanceOf(Date),id:s().string}),animate:s().oneOfType([s().bool,s().object]),currentTime:s().oneOfType([s().string,s().instanceOf(Date),s().number])},G=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),U(n=P(this,t,[e]),"setAllItems",(function(e){n.$el.setItems([].concat(k(e||[]),k(n.props.rangeItems||[])))})),U(n,"setItems",(function(e){(e.length||0)+(n.props.rangeItems&&n.props.rangeItems.length||0)>0?n.$el.initialFitDone?n.setAllItems(e):(n.setAllItems(e),n.$el.emit("changed")):n.$el.initialRangeChangeDone&&n.setAllItems(e)})),n.state={customTimes:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(t,e),n=t,o=[{key:"componentDidMount",value:function(){var e=this,t=this.refs.container;this.$el=new(m().Timeline)(t,void 0,this.props.options),H.forEach((function(t){return e.$el.on(t,e.props["".concat(t,"Handler")])})),this.init()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.items,o=t.groups,r=t.options,i=t.selection,s=t.customTimes,a=t.readOnly,u=t.rangeItems,c=n!==e.items,m=o!==e.groups,l=r!==e.options,p=s!==e.customTimes,f=i!==e.selection,d=a!==e.readOnly,h=u!==e.rangeItems;return c||m||l||p||f||d||h}},{key:"componentDidUpdate",value:function(e){this.init(e)}},{key:"componentWillUnmount",value:function(){this.$el.destroy()}},{key:"render",value:function(){return r().createElement("div",{ref:"container",className:this.props.readOnly?"read-only-timeline":"",onMouseOut:this.props.onMouseOutHandler})}},{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.props,o=n.items,r=n.rangeItems,i=n.groups,s=n.options,a=n.selection,c=n.selectionOptions,l=void 0===c?{}:c,f=n.customTimes,h=n.animate,v=void 0===h||h,g=n.currentTime,w=n.timelineLayers,I=s;v&&(I=$()(s,"start","end"),s.start&&s.end?this.$el.setWindow(s.start,s.end,{animation:v}):this.$el.setWindow(u()().subtract(1,"month"),u()().add(1,"month"),{animation:v})),this.$el.setOptions(I);var j=(0,D.$Z)(i,w);if(j.length>0){var S=new(m().DataSet);S.add(j),this.$el.setGroups(S)}if(o&&o!==t.items)this.setItems(o);else if(r!==t.rangeItems){var _=this.$el&&this.$el.itemsData&&this.$el.itemsData.getDataSet();if(_){var k=O()(r||[],t.rangeItems||[],"id"),C=d()(r||[],t.rangeItems||[],"id"),E=d()(t.rangeItems||[],r||[],"id");k.map((function(e){return _.update(e)})),C.map((function(e){return _.add(e)})),E.map((function(e){var t=e.id;return _.remove(t)}))}else this.setItems(o)}this.$el.setSelection(a,l),g&&this.$el.setCurrentTime(g);var P=y()(this.state.customTimes),A=y()(f),x=p()(A,P),M=p()(P,A),U=b()(P,A);T()(M,(function(t){return e.$el.removeCustomTime(t)})),T()(x,(function(t){var n=f[t];e.$el.addCustomTime(n,t)})),T()(U,(function(t){var n=f[t];e.$el.setCustomTime(n,t)})),this.setState({customTimes:f}),(this.props.readOnly!==t.readOnly||this.props.readOnly&&x.length>0)&&T()(this.$el.customTimes,(function(n){e.props.readOnly?n.hammer.off("panstart panmove panend"):!0===t.readOnly&&(n.hammer.on("panstart",n._onDragStart.bind(n)),n.hammer.on("panmove",n._onDrag.bind(n)),n.hammer.on("panend",n._onDragEnd.bind(n)))}))}}],o&&E(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(r().Component);U(G,"propTypes",S()(F,N)),U(G,"defaultProps",S()({items:[],groups:[],options:{},selection:[],customTimes:{}},W));const L=G}}]);