(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[57094],{15402:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var o=n(75263),r=n.n(o),i=n(24852),l=n.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,f(o.key),o)}}function s(e,t,n){return t=d(t),function(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,u()?Reflect.construct(t,n||[],d(e).constructor):t.apply(e,n))}function u(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(u=function(){return!!e})()}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function p(e,t,n){return(t=f(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:t+""}var y=n(68195).FormattedHTMLMessage,g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return this.context.intl?l().createElement(y,{id:this.props.msgId,values:this.props.msgParams}):l().createElement("span",null,this.props.msgId||"")}}])&&a(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(l().Component);p(g,"propTypes",{msgId:r().string.isRequired,msgParams:r().object}),p(g,"contextTypes",{intl:r().object});const b=g},38064:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var o=n(75263),r=n.n(o),i=n(24852),l=n.n(i),c=n(80681),a=n(76424);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u.apply(this,arguments)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,b(o.key),o)}}function m(e,t,n){return t=f(t),function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,p()?Reflect.construct(t,n||[],f(e).constructor):t.apply(e,n))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function g(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(t,e),n=t,o=[{key:"render",value:function(){var e=this.props,t=e.cardComponent,n=e.items,o=e.colProps,r=e.onItemClick,i=e.size,s=t||a.Z;return l().createElement("div",{className:"msSideGrid"+(this.props.className?" "+this.props.className:"")},l().createElement(c.Row,{className:"items-list"},n.map((function(e,t){return l().createElement(c.Col,u({key:e.id||t},o),l().createElement(s,u({onClick:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return r.apply(void 0,[e].concat(n))},size:i},e)))}))))}}],o&&d(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(l().Component);g(v,"propTypes",{size:r().string,onItemClick:r().func,colProps:r().object,items:r().array,cardComponent:r().oneOfType([r().string,r().func]),className:r().string}),g(v,"defaultProps",{size:"",onItemClick:function(){},colProps:{xs:12},className:"",items:[]});const h=v},75105:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>xe});var o=n(24852),r=n.n(o),i=n(71703),l=n(22222),c=n(66113),a=n(66190),s=n(34990),u=n(75263),d=n.n(u),m=n(92579),p=n(5346),f=n(65539),y=n(80717),g=n(90085),b=n(12122),v=n(48403),h=n.n(v),E=n(13311),S=n.n(E),O=n(27361),P=n.n(O),w=n(80681),C=n(67076),j=n(55877),T=n.n(j),I=n(76424),k=n(38064),Z=n(25311),x=n(45567),N=n(42090),_=n.n(N);const U=(0,C.compose)((0,C.withState)("text","setText",(function(e){return e.title})))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.text,n=e.className,o=void 0===n?"ms-story-title-editable":n,i=e.onUpdate,l=void 0===i?function(){}:i,c=e.setText,a=void 0===c?function(){}:c;return r().createElement(_(),{className:o,html:t,onClick:function(e){e.stopPropagation()},onChange:function(e){a(e.target.value)},onBlur:function(e){l(e.target.innerText)}})}));function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},F.apply(this,arguments)}var D=(0,x.Z)(k.Z),R=(0,Z.Z)((function(e){return r().createElement(I.Z,F({},e,{dragSymbol:r().createElement(w.Glyphicon,{glyph:"menu-hamburger"})}))})),B=function(e,t){return function(n){n.stopPropagation(),t(e)}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,n=e.src,o=e.thumbnail||"image"===t&&n;return o?r().createElement("img",{src:o}):r().createElement(w.Glyphicon,{glyph:{text:"sheet",image:"picture",title:"story-title-section",banner:"story-banner-section",paragraph:"story-paragraph-section",immersive:"story-immersive-section",carousel:"story-carousel-section",media:"story-media-section",map:"1-map",columnleft:"align-left",columnright:"align-right",columncenter:"align-center",webPage:"story-webpage-section",video:"play"}[t]||"picture"})},A=(0,C.compose)((0,i.connect)((0,l.P1)(c.jq,(function(e){return{resources:e}}))),(0,C.withProps)((function(e){var t=e.resources,n=e.resourceId;return(S()(t,{id:n})||{}).data})))(z),G={title:function(){return null},paragraph:function(e){var t=e.id,n=e.contents,o=e.isCollapsed,i=e.scrollTo,l=e.onSort,c=e.sectionId,a=e.onUpdate;return r().createElement("div",{style:{position:"relative"}},r().createElement(D,{containerId:t,isDraggable:!0,onSort:function(e,o,r,i){if(r.containerId===i.containerId){var c='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n[0].id,'"}].contents[{"id":"').concat(i.id,'"}]'),a='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n[0].id,'"}].contents'),s=e,u=T()();l(c,a,s,u,'sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n[0].id,'"}].contents[{"id":"').concat(u,'"}]'))}},cardComponent:R,items:n[0].contents.map((function(e){var s="column"===e.type?"".concat(e.type).concat(e.align||"center"):e.type,u=G[e.type];return{id:e.id,preview:r().createElement(A,{type:s,resourceId:e.resourceId}),tools:r().createElement(y.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:"zoom-to",tooltipId:"geostory.zoomToContent",onClick:B(e.id,i)}]}),title:r().createElement(U,{title:e.title||h()(e.type),onUpdate:function(t){return a('sections[{"id": "'.concat(c,'"}].contents[{"id": "').concat(n[0].id,'"}].contents[{"id": "').concat(e.id,'"}]'),{title:t},"merge")}}),description:"type: ".concat(e.type),body:u&&r().createElement(u,{id:t,onSort:l,scrollTo:i,isCollapsed:o,contents:e.contents})}}))}))},column:function(e){var t=e.sectionId,n=e.id,o=e.contents,i=e.isCollapsed,l=e.scrollTo,c=e.onSort,a=e.onUpdate,s=e.sectionType;return r().createElement("div",{style:{position:"relative"}},r().createElement(D,{containerId:n,isDraggable:!0,onSort:function(e,o,r,i){if(r.containerId===i.containerId){var l='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n,'"}].contents[{"id":"').concat(i.id,'"}]'),a='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n,'"}].contents'),s=e,u=T()();c(l,a,s,u,'sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n,'"}].contents[{"id":"').concat(u,'"}]'))}},cardComponent:R,items:o.map((function(e){var o="column"===e.type?"".concat(e.type).concat(e.align||"center"):e.type,u=G[e.type];return{id:e.id,preview:r().createElement(A,{type:o,resourceId:e.resourceId}),tools:r().createElement(y.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:"zoom-to",visible:s!==m.ID.CAROUSEL,tooltipId:"geostory.zoomToContent",onClick:B(e.id,l)}]}),title:r().createElement(U,{title:e.title||h()(e.type),onUpdate:function(o){return a('sections[{"id": "'.concat(t,'"}].contents[{"id": "').concat(n,'"}].contents[{"id": "').concat(e.id,'"}]'),{title:o},"merge")}}),description:"type: ".concat(e.type),body:!i&&u&&r().createElement(u,{id:n,onSort:c})}}))}))},immersive:function(e){var t=e.id,n=e.contents,o=e.isCollapsed,i=e.scrollTo,l=e.onUpdate,c=e.onSort,a=e.currentPage;return r().createElement("div",{style:{position:"relative"}},r().createElement(D,{containerId:t,isDraggable:!0,onSort:function(e,n,o,r){if(o.containerId===r.containerId){var i='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(r.id,'"}]'),l='sections[{ "id": "'.concat(t,'" }].contents'),a=e,s=T()();c(i,l,a,s,'sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(s,'"}]'))}},cardComponent:R,items:n.map((function(e){var n="column"===e.type?"".concat(e.type).concat(e.align||"center"):e.type,s=G[e.type];return{className:a&&a.columns&&a.columns[t]&&a.columns[t]===e.id&&a.sectionId===t?"ms-highlight":"",id:e.id,preview:r().createElement(z,{type:n}),tools:r().createElement(y.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:"zoom-to",tooltipId:"geostory.zoomToContent",onClick:B(e.id,i)}]}),title:r().createElement(U,{title:e.title||h()(e.type),onUpdate:function(n){return l('sections[{"id": "'.concat(t,'"}].contents[{"id":"').concat(e.id,'"}]'),{title:n},"merge")}}),description:"type: ".concat(e.type),body:s&&r().createElement(s,{id:e.id,sectionId:t,onSort:c,onUpdate:l,scrollTo:i,isCollapsed:o,contents:e.contents})}}))}))},carousel:function(e){var t=e.id,n=e.contents,o=e.isCollapsed,i=e.scrollTo,l=e.onUpdate,c=e.onSort,a=e.currentPage;return r().createElement("div",{style:{position:"relative"}},r().createElement(D,{containerId:t,isDraggable:!0,onSort:function(e,n,o,r){if(o.containerId===r.containerId){var i='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(r.id,'"}]'),l='sections[{ "id": "'.concat(t,'" }].contents'),a=e,s=T()();c(i,l,a,s,'sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(s,'"}]'))}},cardComponent:R,items:n.map((function(e){var n,s="column"===e.type?"".concat(e.type).concat(e.align||"center"):e.type,u=G[e.type];return{className:a&&a.columns&&a.columns[t]&&a.columns[t]===e.id&&a.sectionId===t?"ms-highlight":"",id:e.id,preview:r().createElement(z,{type:s,thumbnail:null==e||null===(n=e.thumbnail)||void 0===n?void 0:n.image}),tools:null,title:r().createElement(U,{key:e.title,title:e.title||h()(e.type),onUpdate:function(n){return l('sections[{"id": "'.concat(t,'"}].contents[{"id":"').concat(e.id,'"}]'),{title:n},"merge")}}),description:"type: ".concat(e.type),body:u&&r().createElement(u,{id:e.id,sectionId:t,onSort:c,onUpdate:l,scrollTo:i,isCollapsed:o,sectionType:m.ID.CAROUSEL,contents:e.contents})}}))}))}},L=function(e){var t=e.scrollTo,n=e.isCollapsed,o=void 0!==n&&n,i=e.currentPage,l=e.onSort,c=e.onSelect,a=e.onUpdate,s=e.selected,u=void 0===s?"title_section_id1":s;return function(e){var n=e.contents,s=e.type,d=e.title,m=e.id,p=G[s];return{id:m,preview:r().createElement(A,{type:s,resourceId:P()(n[0],"background.resourceId")}),className:i&&i.sectionId===m?"ms-highlight":"",onClick:function(){return c(m)},selected:m===u,tools:r().createElement(y.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{onClick:B(m,t),glyph:"zoom-to",tooltipId:"geostory.zoomToContent"}]}),title:r().createElement(U,{title:d,onUpdate:function(e){return a('sections[{"id": "'.concat(m,'"}]'),{title:e},"merge")}}),description:"type: ".concat(s),body:o?null:p&&r().createElement(p,{id:m,sectionId:m,onSort:l,onUpdate:a,onSelect:c,currentPage:i,selected:u,scrollTo:t,isCollapsed:o,contents:n})}}};const q=function(e){var t=e.sections,n=void 0===t?[]:t,o=e.scrollTo,i=e.onSelect,l=void 0===i?function(){}:i,c=e.isCollapsed,a=e.currentPage,s=e.selected,u=e.onSort,d=e.onUpdate;return r().createElement(D,{isDraggable:!0,onSort:function(e,t,n,o){if("story-sections"===n.containerId&&"story-sections"===o.containerId){var r=T()(),i='sections[{ "id": "'.concat(o.id,'" }]');u(i,"sections",e,r,'sections[{ "id": "'.concat(r,'" }]'))}},containerId:"story-sections",cardComponent:R,size:"sm",items:n.map(L({currentPage:a,onSelect:l,isCollapsed:c,scrollTo:o,selected:s,onUpdate:d,onSort:u}))})};var M=n(45869),K=n(14068),V=n(28388),W=n.n(V),Y=(n(50288),n(93451)),H=n(11766),Q=n(43129);function X(e){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(e)}function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){var o,r,i,l;o=e,r=t,i=n[t],l=function(e,t){if("object"!=X(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=X(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==X(l)?l:l+"")in o?Object.defineProperty(o,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[r]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,l,c=[],a=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(o=i.call(n)).done)&&(c.push(o.value),c.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{if(!a&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var ne=(0,Y.Z)("placeholder")(w.FormControl),oe=[{value:"14px",label:"14px"},{value:"16px",label:"16px"},{value:"18px",label:"18px"},{value:"24px",label:"24px"},{value:"28px",label:"28px"}];const re=function(e){var t,n,i,l,c,a,s,u,d=e.items,f=void 0===d?[]:d,y=e.settings,g=e.storyFonts,b=e.onToggleSettings,v=void 0===b?function(){}:b,h=e.onUpdateSettings,E=void 0===h?function(){}:h,S=ee((0,o.useState)(y.storyTitle),2),O=S[0],P=S[1],C=ee((0,o.useState)(y.expanded||[]),2),j=C[0],T=C[1],I=g.length>0?g:m.Km;return r().createElement(w.Form,{className:"ms-geostory-settings"},r().createElement("div",null,r().createElement("h4",null,r().createElement(p.Z,{msgId:"geostory.builder.settings.storyTheme"})),r().createElement("hr",null)),r().createElement(w.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(w.ControlLabel,null,r().createElement(p.Z,{msgId:"geostory.builder.settings.theme"}))),r().createElement(H.Z,{themeStyle:null==y||null===(t=y.theme)||void 0===t?void 0:t.general,placement:"right",disableBackgroundAlpha:!0,disableShadow:!0,onChange:function(e){return E("theme",J(J({},null==y?void 0:y.theme),{},{general:e}))}})),r().createElement(w.FormGroup,null,r().createElement("div",{className:"ms-font-select"},r().createElement("div",null,r().createElement(p.Z,{msgId:"geostory.builder.settings.fontFamily"})),r().createElement("div",null,r().createElement(Q.ZP,{value:null==y||null===(n=y.theme)||void 0===n||null===(i=n.general)||void 0===i?void 0:i.fontFamily,onChange:function(e){var t;return E("theme",J(J({},null==y?void 0:y.theme),{},{general:J(J({},null==y||null===(t=y.theme)||void 0===t?void 0:t.general),{},{fontFamily:e.value})}))},options:(u=I,u.map((function(e){return{label:e,value:e}})))})))),r().createElement(w.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(w.ControlLabel,null,r().createElement(p.Z,{msgId:"geostory.builder.settings.overlay"}))),r().createElement(H.Z,{themeStyle:null==y||null===(l=y.theme)||void 0===l?void 0:l.overlay,placement:"right",onChange:function(e){return E("theme",J(J({},null==y?void 0:y.theme),{},{overlay:e}))}})),r().createElement(w.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(w.ControlLabel,null,r().createElement(p.Z,{msgId:"Links"}))),r().createElement(H.Z,{disableBackgroundPicker:!0,disableShadow:!0,themeStyle:null==y||null===(c=y.theme)||void 0===c?void 0:c.link,placement:"right",onChange:function(e){return E("theme",J(J({},null==y?void 0:y.theme),{},{link:e}))}})),r().createElement("div",null,r().createElement("h4",null,r().createElement(p.Z,{msgId:"geostory.builder.settings.storyHeader"})),r().createElement("hr",null)),r().createElement(w.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(w.ControlLabel,null,r().createElement(p.Z,{msgId:"geostory.builder.settings.title"})),r().createElement(M.Z,{onChange:function(){return v("isTitleEnabled")},className:"ms-geostory-settings-switch",checked:y.isTitleEnabled})),r().createElement(ne,{disabled:!y.isTitleEnabled,value:O,onChange:function(e){return P(e.target.value)},onBlur:function(e){return E("storyTitle",e.target.value)},placeholder:"geostory.builder.settings.titlePlaceholder",style:{marginTop:"10px"}})),r().createElement(w.FormGroup,null,r().createElement("div",{className:"ms-font-select"},r().createElement("div",null,r().createElement(p.Z,{msgId:"geostory.builder.settings.fontSize"})),r().createElement("div",null,r().createElement(Q.ZP,{disabled:!y.isTitleEnabled,value:y.storyTitleFontSize,onChange:function(e){return E("storyTitleFontSize",e.value)},options:oe,clearable:!1})))),r().createElement(w.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(w.ControlLabel,null,r().createElement(p.Z,{msgId:"geostory.builder.settings.logo"})),r().createElement(M.Z,{onChange:function(){return v("isLogoEnabled")},className:"ms-geostory-settings-switch",checked:y.isLogoEnabled})),y.isLogoEnabled&&r().createElement(r().Fragment,null,r().createElement(K.Z,{thumbnail:(null==y||null===(a=y.thumbnail)||void 0===a?void 0:a.data)||(null==y||null===(s=y.thumbnail)||void 0===s?void 0:s.url),onUpdate:function(e,t){var n;E("thumbnail",{data:e,url:null==t||null===(n=t[0])||void 0===n?void 0:n.preview}),E("thumbnailErrors",void 0)},onRemove:function(){E("thumbnail",void 0),E("thumbnailErrors",void 0)},onError:function(e){return E("thumbnailErrors",e)},message:r().createElement(p.Z,{msgId:"geostory.builder.settings.logoPlaceholder"}),thumbnailOptions:{width:300,height:150,type:"image/png",contain:!0}}),y.thumbnailErrors&&y.thumbnailErrors.length>0&&r().createElement(w.Alert,{bsStyle:"danger",className:"text-center"},r().createElement("div",null,r().createElement(p.Z,{msgId:"map.error"})),-1!==y.thumbnailErrors.indexOf("FORMAT")&&r().createElement("div",null,r().createElement(p.Z,{msgId:"map.errorFormat"})),-1!==y.thumbnailErrors.indexOf("SIZE")&&r().createElement("div",null,r().createElement(p.Z,{msgId:"map.errorSize"}))))),r().createElement(w.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(w.ControlLabel,null,r().createElement(p.Z,{msgId:"geostory.builder.settings.navbar"})),r().createElement(M.Z,{onChange:function(){return v("isNavbarEnabled")},className:"ms-geostory-settings-switch",checked:y.isNavbarEnabled})),y.isNavbarEnabled&&r().createElement(W(),{showNodeIcon:!1,nativeCheckboxes:!0,nodes:f,checked:y.checked||[],expanded:j,onCheck:function(e){return E("checked",e)},onExpand:function(e){return T(e)}})))};function ie(e){return ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(e)}function le(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,me(o.key),o)}}function ce(e,t,n){return t=se(t),function(e,t){if(t&&("object"===ie(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,ae()?Reflect.construct(t,n||[],se(e).constructor):t.apply(e,n))}function ae(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(ae=function(){return!!e})()}function se(e){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},se(e)}function ue(e,t){return ue=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ue(e,t)}function de(e,t,n){return(t=me(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function me(e){var t=function(e,t){if("object"!=ie(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=ie(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==ie(t)?t:t+""}var pe=(0,b.Z)(g.Z),fe=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ce(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ue(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.story,n=e.settings,o=e.scrollTo,i=e.setEditing,l=e.mode,c=e.isCollapsed,a=e.isToolbarEnabled,s=e.isSettingsEnabled,u=e.isSettingsChanged,d=e.settingsItems,b=e.onToggleCardPreview,v=e.onToggleSettingsPanel,h=e.onToggleSettings,E=e.onUpdateSettings,S=e.currentPage,O=e.selected,P=e.onRemove,w=e.onSort,C=e.onUpdate,j=e.onSelect,T=e.storyFonts,I=u?pe:g.Z;return r().createElement(f.Z,{className:"ms-geostory-builder",header:r().createElement("div",{className:"text-center ms-geostory-builder-header"},r().createElement(y.Z,{btnDefaultProps:{className:"square-button-md",bsStyle:"primary"},transitionProps:!1,buttons:[{visible:!s,Element:function(){return r().createElement(pe,{glyph:"trash",bsStyle:"primary",className:"square-button-md no-border",tooltipId:"geostory.builder.delete",confirmTitle:r().createElement(p.Z,{msgId:"geostory.contentToolbar.removeConfirmTitle"}),disabled:!a||!O,confirmContent:r().createElement(p.Z,{msgId:"geostory.contentToolbar.removeConfirmContent"}),onClick:function(){P(O&&'sections[{ "id": "'.concat(O,'" }]')||"")}})}},{tooltipId:"geostory.builder.preview",glyph:"preview",visible:!s,disabled:!a,onClick:function(){return i(l===m.nl.VIEW)}},{tooltipId:"geostory.builder.settings.tooltip",glyph:"cog",id:"geostory-builder-settings-button",visible:!s,onClick:function(){return v()}},{tooltipId:"geostory.builder.".concat(c?"expandAll":"collapseAll"),glyph:c?"chevron-left":"chevron-down",bsStyle:"primary",disabled:!a,visible:!s,onClick:function(){return b()}},{visible:s,Element:function(){return r().createElement(I,{bsStyle:"primary",glyph:"arrow-left",className:"square-button-md no-border",tooltipId:"geostory.builder.settings.back",confirmTitle:r().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmTitle"}),confirmContent:r().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmBody"}),confirmNo:r().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmNo"}),confirmYes:r().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmYes"}),onClick:function(){v()}})}},{tooltipId:"geostory.builder.settings.save",glyph:"floppy-disk",visible:s,onClick:function(){return v(!0)}}]}))},s&&r().createElement(re,{items:d,settings:n,onToggleSettings:h,onUpdateSettings:E,storyFonts:T}),a&&!s?r().createElement(q,{currentPage:S,scrollTo:o,onSelect:j,selected:O,onUpdate:C,isCollapsed:c,sections:t&&t.sections,onSort:w}):s?null:r().createElement("div",{className:"ms-story-empty-content-parent"},r().createElement("div",{className:"ms-story-empty-content-child"},r().createElement(p.Z,{msgId:"geostory.builder.noContents"}))))}}])&&le(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(r().Component);de(fe,"propTypes",{currentPage:d().object,settingsItems:d().array,story:d().object,settings:d().object,mode:d().oneOf(m.lg.Modes),onToggleCardPreview:d().func,onToggleSettingsPanel:d().func,onToggleSettings:d().func,onUpdateSettings:d().func,isCollapsed:d().bool,isToolbarEnabled:d().bool,isSettingsEnabled:d().bool,isSettingsChanged:d().bool,scrollTo:d().func,setEditing:d().func,onSort:d().func,onSelect:d().func,onRemove:d().func,onUpdate:d().func,selected:d().string,storyFonts:d().array}),de(fe,"defaultProps",{mode:m.nl.VIEW,setEditing:function(){},onToggleCardPreview:function(){},onToggleSettingsPanel:function(){},story:{},settings:{},isCollapsed:!0,isToolbarEnabled:!0,isSettingsEnabled:!1,onSort:function(){}});const ye=fe;var ge=n(31398),be=n(22843),ve=n(15135),he=n(25635),Ee=n(72500),Se=n.n(Ee),Oe=n(95659),Pe=n.n(Oe);function we(e){return we="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},we(e)}n(13880);var Ce=["hash"];function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){var o,r,i,l;o=e,r=t,i=n[t],l=function(e,t){if("object"!=we(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=we(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==we(l)?l:l+"")in o?Object.defineProperty(o,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[r]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ie=n(38560),ke=(0,ve.Z)(Ie.Z),Ze=(0,i.connect)((0,l.zB)({isEditAllowed:c.pu}),{setEditingMode:s.D_})((function(e){var t=e.isEditAllowed,n=e.setEditingMode,o=void 0===n?function(){}:n,i=e.location,l=e.history;return t?r().createElement(ke,{id:"edit-story",className:"square-button-md no-border",onClick:function(){o(!0);var e=i.pathname;if(e.includes("/geostory/shared")){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Se().parse(e),n=t.hash,o=void 0===n?"":n,r=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(t,Ce),i=Se().parse(o&&Pe()(o,"#")||""),l=Se().format(Te(Te({},i),{},{query:null,search:null}));return Se().format(Te(Te({},r),{},{query:null,search:null,hash:l?"#".concat(l):null}))}(e.replace("/geostory/shared","/geostory"));l.push(t)}},tooltipId:"geostory.navigation.edit",tooltipPosition:"bottom"},r().createElement(w.Glyphicon,{glyph:"pencil"})):null}));const xe=(0,be.rx)("GeoStoryEditor",{component:(0,i.connect)((0,l.zB)({isCollapsed:c.eg,mode:c.eK,story:c.Kg,currentPage:c.PR,settingsItems:c.yL,settings:c.TQ,isSettingsChanged:c.KR,isToolbarEnabled:c.Lu,selected:c.sY,isSettingsEnabled:c.W5,isFocused:c.z7,storyFonts:c.mm}),{setEditingMode:s.D_,onUpdateSettings:s.m7,onToggleCardPreview:s.kB,onToggleSettingsPanel:s.G5,onToggleSettings:s.Xn,onRemove:s.Od,onSelect:s._e,onSort:s.pB,onUpdate:s.Vx,onBasicError:ge.d})((function(e){var t=e.currentPage,n=e.isCollapsed,o=e.isSettingsChanged,i=void 0!==o&&o,l=e.isSettingsEnabled,c=e.isToolbarEnabled,a=e.isFocused,s=void 0!==a&&a,u=e.mode,d=void 0===u?m.nl.VIEW:u,p=e.story,f=void 0===p?{}:p,y=e.settings,g=void 0===y?{}:y,b=e.settingsItems,v=e.selected,h=e.storyFonts,E=void 0===h?[]:h,S=e.setEditingMode,O=void 0===S?function(){}:S,P=e.onToggleCardPreview,w=void 0===P?function(){}:P,C=e.onToggleSettingsPanel,j=void 0===C?function(){}:C,T=e.onToggleSettings,I=void 0===T?function(){}:T,k=e.onUpdateSettings,Z=void 0===k?function(){}:k,x=e.onSelect,N=void 0===x?function(){}:x,_=e.onRemove,U=void 0===_?function(){}:_,F=e.onUpdate,D=void 0===F?function(){}:F,R=e.onSort,B=void 0===R?function(){}:R;return d!==m.nl.EDIT||s?null:r().createElement("div",{key:"left-column",className:"ms-geostory-editor",style:{order:-1,width:400,position:"relative"}},r().createElement(ye,{currentPage:t,isCollapsed:n,isSettingsChanged:i,isSettingsEnabled:l,isToolbarEnabled:c,mode:d,scrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{behavior:"smooth"};(0,m.M1)(e,t)},selected:v,settings:g,settingsItems:b,story:f,storyFonts:(0,m._R)(E),setEditing:O,onRemove:U,onSelect:N,onSort:B,onToggleCardPreview:w,onToggleSettings:I,onToggleSettingsPanel:j,onUpdate:D,onUpdateSettings:Z}))})),containers:{GeoStoryNavigation:{tool:(0,he.EN)(Ze)}},reducers:{geostory:a.Z}})}}]);