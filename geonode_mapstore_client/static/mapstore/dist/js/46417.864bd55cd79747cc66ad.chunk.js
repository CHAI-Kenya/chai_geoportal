(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[46417],{94745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var o=n(24852),r=n.n(o),a=n(94184),l=n.n(a),i=n(80681),s=n(7472),c=n(80717),u=n(67076),p=n(19081),d=n.n(p),m=n(75480),f={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},b={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const g=(0,u.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,o=e.loading,a=e.loadingText,u=e.onClose,p=void 0===u?function(){}:u,g=e.title,y=void 0===g?"":g,v=e.clickOutEnabled,h=void 0===v||v,O=e.showClose,E=void 0===O||O,w=e.disabledClose,j=void 0!==w&&w,S=e.showFullscreen,P=void 0!==S&&S,C=e.fullscreenType,D=void 0===C?"full":C,N=e.buttons,x=void 0===N?[]:N,k=e.size,I=void 0===k?"":k,z=e.bodyClassName,F=void 0===z?"":z,Z=e.children,T=e.draggable,G=void 0!==T&&T,L=e.fullscreenState,_=e.onFullscreen,R=e.fade,M=void 0!==R&&R,V=e.fitContent,A=e.modalClassName,q=void 0===A?"":A,B=e.dialogClassName,K=void 0===B?"":B,H=e.enableFooter,U=void 0===H||H,W=f[I]||"",X=P&&"expanded"===L&&b.className[D]||"",J=n?r().createElement("div",{className:"modal-fixed ".concat(q," ")+(G?"ms-draggable":"")},r().createElement(s.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:h?p:function(){},containerClassName:"ms-resizable-modal",draggable:G,modal:!0,className:l()("modal-dialog modal-content",W,X,K,{"ms-fit-content":V})},r().createElement("span",{role:"header"},r().createElement("h4",{className:"modal-title"},r().createElement("div",{className:"ms-title"},y),P&&b.className[D]&&r().createElement(i.Glyphicon,{className:"ms-header-btn",onClick:function(){return _("expanded"===L?"collapsed":"expanded")},glyph:b.glyph[L][D]}),E&&p&&r().createElement(i.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:p,disabled:j}))),r().createElement("div",{role:"body",className:F},Z),U&&r().createElement("div",{style:{display:"flex"},role:"footer"},r().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},o?r().createElement(m.Z,null):null),r().createElement("div",{className:"ms-resizable-modal-loading-text"},o?a:null),r().createElement(c.Z,{buttons:x})))):null;return M?r().createElement(d(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},J):J}))},38261:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var o=n(24852),r=n.n(o),a=n(75263),l=n.n(a),i=n(80681),s=n(80717),c=n(25311),u=n(99509),p=n(5346),d=n(18446),m=n.n(d),f=n(81763),b=n.n(f),g=n(77900);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,C(o.key),o)}}function E(e,t,n){return t=j(t),function(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,w()?Reflect.construct(t,n||[],j(e).constructor):t.apply(e,n))}function w(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(w=function(){return!!e})()}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function P(e,t,n){return(t=C(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){var t=function(e,t){if("object"!=y(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=y(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:t+""}var D=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(n=E(this,t,[e]),"onChangeLatLon",(function(e,t){n.setState(h(h({},n.state),{},P({},e,parseFloat(t))),(function(){var e=parseFloat(n.state.lat)!==parseFloat(n.props.component.lat),t=parseFloat(n.state.lon)!==parseFloat(n.props.component.lon);n.setState(h(h({},n.state),{},{disabledApplyChange:!(e||t)}),(function(){n.props.onValidateFeature(),"annotations"===n.props.renderer&&n.props.onSubmit(n.props.idx,n.state)}))}))})),P(n,"onSubmit",(function(){n.props.onSubmit(n.props.idx,n.state)})),n.state={lat:b()(n.props.component.lat)?n.props.component.lat:"",lon:b()(n.props.component.lon)?n.props.component.lon:"",disabledApplyChange:!0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(t,e),n=t,(o=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){if(!m()(e.component,this.props.component)){var t=b()(e.component.lat)?e.component.lat:"",n=b()(e.component.lon)?e.component.lon:"";this.setState({lat:t,lon:n,disabledApplyChange:!0})}}},{key:"render",value:function(){var e=this,t=this.props.idx,n=[{visible:this.props.removeVisible,disabled:!this.props.removeEnabled||this.props.disabled,glyph:"trash",onClick:function(){e.props.onRemove(t)}},{buttonConfig:{title:r().createElement(i.Glyphicon,{glyph:"cog"}),className:"square-button-md no-border",pullRight:!0,tooltipId:"identifyChangeCoordinateFormat"},menuOptions:[{active:"decimal"===this.props.format,onClick:function(){e.props.onChangeFormat("decimal")},text:r().createElement(p.Z,{msgId:"search.decimal"})},{active:"aeronautical"===this.props.format,onClick:function(){e.props.onChangeFormat("aeronautical")},text:r().createElement(p.Z,{msgId:"search.aeronautical"})}],disabled:this.props.disabled,visible:this.props.formatVisible,Element:g.Z},{glyph:"ok",disabled:this.state.disabledApplyChange||this.props.disabled,tooltipId:"identifyCoordinateApplyChanges",onClick:this.onSubmit,visible:"annotations"!==this.props.renderer}],o=r().createElement("div",{role:"button",className:"square-button-md no-border btn btn-default",style:{display:"table",color:!this.props.isDraggableEnabled&&"#999999",pointerEvents:this.props.isDraggableEnabled?"auto":"none",cursor:this.props.isDraggableEnabled&&"grab"}},r().createElement(i.Glyphicon,{glyph:"menu-hamburger"}));return r().createElement("div",{className:"coordinateRow ".concat(this.props.format||""," ").concat(this.props.customClassName||""),onMouseEnter:function(){e.props.onMouseEnter&&e.props.component.lat&&e.props.component.lon&&e.props.onMouseEnter(e.props.component)},onMouseLeave:function(){e.props.onMouseLeave&&e.props.component.lat&&e.props.component.lon&&e.props.onMouseLeave()}},r().createElement("div",{style:{cursor:this.props.isDraggableEnabled?"grab":"not-allowed"}},this.props.showDraggable?this.props.isDraggable?this.props.connectDragSource(o):o:null),r().createElement("div",{className:"coordinate"},r().createElement("div",{className:"input-group-container"},r().createElement(i.InputGroup,null,r().createElement(i.InputGroup.Addon,null,r().createElement(p.Z,{msgId:"latitude"})),r().createElement(u.Z,{disabled:this.props.disabled,format:this.props.format,aeronauticalOptions:this.props.aeronauticalOptions,coordinate:"lat",idx:t,value:this.state.lat,onChange:function(t){return e.onChangeLatLon("lat",t)},constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:this.onSubmit}))),r().createElement("div",{className:"input-group-container"},r().createElement(i.InputGroup,null,r().createElement(i.InputGroup.Addon,null,r().createElement(p.Z,{msgId:"longitude"})),r().createElement(u.Z,{disabled:this.props.disabled,format:this.props.format,aeronauticalOptions:this.props.aeronauticalOptions,coordinate:"lon",idx:t,value:this.state.lon,onChange:function(t){return e.onChangeLatLon("lon",t)},constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:this.onSubmit})))),this.props.showToolButtons&&r().createElement("div",{key:"tools"},r().createElement(s.Z,{btnGroupProps:{className:"tools"},btnDefaultProps:{className:"square-button-md no-border"},buttons:n})))}}])&&O(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(r().Component);P(D,"propTypes",{idx:l().number,component:l().object,onRemove:l().func,onSubmit:l().func,onChangeFormat:l().func,onMouseEnter:l().func,format:l().string,type:l().string,onMouseLeave:l().func,connectDragSource:l().func,aeronauticalOptions:l().object,customClassName:l().string,isDraggable:l().bool,isDraggableEnabled:l().bool,showLabels:l().bool,showDraggable:l().bool,showToolButtons:l().bool,removeVisible:l().bool,formatVisible:l().bool,removeEnabled:l().bool,renderer:l().string,disabled:l().bool,onValidateFeature:l().func}),P(D,"defaultProps",{showLabels:!1,formatVisible:!1,onMouseEnter:function(){},onMouseLeave:function(){},onValidateFeature:function(){},showToolButtons:!0,disabled:!1});const N=(0,c.Z)(D)},25311:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var o=n(24852),r=n.n(o),a=n(90937),l=n(67076),i=["connectDragSource","connectDragPreview","connectDropTarget","isDragging","isOver"];function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var p={beginDrag:function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){var o,r,a,l;o=e,r=t,a=n[t],l=function(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==s(l)?l:l+"")in o?Object.defineProperty(o,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[r]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)}};const d=(0,l.branch)((function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).isDraggable}),(0,l.compose)((0,a.Ej)("row",p,(function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging(),draggingItem:t.getItem()||null}})),(0,a.GR)("row",{drop:function(e,t){var n=t.getItem();n.sortId!==e.sortId&&e.onSort(e.sortId,n.sortId,{id:e.id,containerId:e.containerId},{id:n.id,containerId:n.containerId})}},(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}})),(function(e){return function(t){var n=t.connectDragSource,o=t.connectDragPreview,a=t.connectDropTarget,l=t.isDragging,s=t.isOver,u=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(t,i),p=u.draggingItem&&u.draggingItem.sortId<u.sortId,d=u.draggingItem&&u.draggingItem.containerId===u.containerId,m=d&&l?" ms-dragging":"",f=d&&s?" ms-over":"",b=d&&p?" ms-above":" ms-below";return o(a(r().createElement("div",{className:"ms-dragg".concat(m).concat(f," ").concat(b)},r().createElement("div",null,r().createElement(e,c({},u,{connectDragSource:n,isDragging:l,isOver:s,onDrop:function(e){return e.stopPropagation()}}))))))}})))},16919:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var o=n(24852),r=n.n(o),a=n(32833),l=n(65539),i=n(67076),s=n(80681),c=n(38560),u={bottom:{true:"chevron-down",false:"chevron-up"},top:{true:"chevron-up",false:"chevron-down"},right:{true:"chevron-right",false:"chevron-left"},left:{true:"chevron-left",false:"chevron-right"}};const p=function(e){var t=e.position,n=void 0===t?"right":t,o=e.onClose,a=e.bsStyle,l=void 0===a?"default":a,i=e.title,p=void 0===i?"":i,d=e.fullscreen,m=void 0!==d&&d,f=e.showFullscreen,b=void 0!==f&&f,g=e.glyph,y=void 0===g?"info-sign":g,v=e.additionalRows,h=e.onFullscreen,O=void 0===h?function(){}:h,E=o?r().createElement(c.Z,{key:"ms-header-close",className:"square-button ms-close",onClick:o,bsStyle:l},r().createElement(s.Glyphicon,{glyph:"1-close"})):null,w=b?r().createElement(c.Z,{key:"ms-header-glyph",className:"square-button",bsStyle:l,onClick:function(){return O(!m)}},r().createElement(s.Glyphicon,{glyph:u[n]&&u[n][m]||"resize-full"})):r().createElement("div",{key:"ms-header-glyph",className:"square-button ".concat("bg-"+l),style:{display:"flex"}},r().createElement(s.Glyphicon,{glyph:y,className:"".concat("default"===l?"text-primary":"")})),j="left"===n?[E,w]:[w,E];return r().createElement(s.Grid,{fluid:!0,style:{width:"100%"},className:"ms-header ms-"+l},r().createElement(s.Row,null,r().createElement(s.Col,{xs:2},j[0]),r().createElement(s.Col,{xs:8},r().createElement("h4",null,p)),r().createElement(s.Col,{xs:2},j[1])),v)},d=(0,i.withState)("fullscreen","onFullscreen",!1)((function(e){var t=e.fluid,n=e.className,o=void 0===n?"":n,i=e.fullscreen,s=void 0!==i&&i,c=e.position,u=e.open,d=e.size,m=void 0===d?550:d,f=e.style,b=void 0===f?{}:f,g=e.zIndex,y=void 0===g?1030:g,v=e.onClose,h=e.bsStyle,O=e.title,E=e.showFullscreen,w=void 0!==E&&E,j=e.glyph,S=e.header,P=e.footer,C=e.children,D=e.onFullscreen,N=void 0===D?function(){}:D,x=e.fixed,k=void 0!==x&&x,I=e.resizable,z=void 0!==I&&I,F=e.hideHeader;return r().createElement("div",{className:"ms-side-panel "+(k?"":"ms-absolute-dock ")+(z?"":"react-dock-no-resize ")+o},r().createElement(a.default,{fluid:t||s,position:c,dimMode:"none",isVisible:u,size:s?1:m,dockStyle:b,zIndex:y},r().createElement(l.Z,{header:!F&&u&&r().createElement(p,{position:c,onClose:v,bsStyle:h,title:O,fullscreen:s,showFullscreen:w,glyph:j,additionalRows:S,onFullscreen:N}),footer:u&&P},u&&C)))}))},32107:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o=n(24852),r=n.n(o),a=n(67076),l=n(65539),i=n(16919),s=n(94745),c=["children","header"];var u=(0,a.renameProps)({open:"show"})((function(e){var t=e.children,n=e.header,o=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,c);return r().createElement(s.Z,o,r().createElement(l.Z,{header:r().createElement("div",{className:"ms-header"},n)},t))}));const p=(0,a.branch)((function(e){return!e.dock}),(function(){return function(e){return r().createElement(u,e)}}))(i.Z)},51736:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var o=n(24852),r=n.n(o),a=n(94184),l=n.n(a);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){var o;return o=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==i(o)?o:o+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p=function(e){var t,n,o,a=e.id,i=e.children,s=e.dockStyle,p=e.className,d=e.style,m=void 0===d?{}:d,f={width:"calc(100% - ".concat((null!==(t=null==s?void 0:s.right)&&void 0!==t?t:0)+(null!==(n=null==s?void 0:s.left)&&void 0!==n?n:0),"px)"),transform:"translateX(-".concat(null!==(o=null==s?void 0:s.right)&&void 0!==o?o:0,"px)"),pointerEvents:"none"};return r().createElement("div",{id:a,className:l()(c(c({},p?u({},p,!0):{}),{},{"dock-container":!0})),style:c(c({},f),m)},i)};var d=n(96259),m=n(32107),f=["children","containerClassName","containerId","containerStyle","dock","siblings","size"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},b.apply(this,arguments)}const g=function(e){var t=e.children,n=e.containerClassName,o=e.containerId,a=e.containerStyle,l=e.dock,i=void 0===l||l,s=e.siblings,c=e.size,u=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,f);return r().createElement(p,{dockStyle:a,id:o,className:n},r().createElement(d.Z,null,(function(e){var n=e.width;return r().createElement(r().Fragment,null,r().createElement(m.Z,b({dock:i,size:c/n>1?n:c},u),t),s)})))}}}]);