(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[14147],{74754:(e,n,t)=>{"use strict";t.d(n,{Z:()=>N});var r=t(24852),o=t.n(r),i=t(80307),u=t(61845);var a=t(75263);const c=function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)};var l=t(53249);const f=function(){return l.Z.Date.now()};var s=/\s/;var p=/^\s+/;const d=function(e){return e?e.slice(0,function(e){for(var n=e.length;n--&&s.test(e.charAt(n)););return n}(e)+1).replace(p,""):e};var h=t(59197),y=t(23195);var v=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,m=/^0o[0-7]+$/i,g=parseInt;const O=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||(0,y.Z)(e)&&"[object Symbol]"==(0,h.Z)(e)}(e))return NaN;if(c(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=c(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=d(e);var t=b.test(e);return t||m.test(e)?g(e.slice(2),t?2:8):v.test(e)?NaN:+e};var w=Math.max,E=Math.min;const T=function(e,n,t){var r,o,i,u,a,l,s=0,p=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(n){var t=r,i=o;return r=o=void 0,s=n,u=e.apply(i,t)}function v(e){var t=e-l;return void 0===l||t>=n||t<0||d&&e-s>=i}function b(){var e=f();if(v(e))return m(e);a=setTimeout(b,function(e){var t=n-(e-l);return d?E(t,i-(e-s)):t}(e))}function m(e){return a=void 0,h&&r?y(e):(r=o=void 0,u)}function g(){var e=f(),t=v(e);if(r=arguments,o=this,l=e,t){if(void 0===a)return function(e){return s=e,a=setTimeout(b,n),p?y(e):u}(l);if(d)return clearTimeout(a),a=setTimeout(b,n),y(l)}return void 0===a&&(a=setTimeout(b,n)),u}return n=O(n)||0,c(t)&&(p=!!t.leading,i=(d="maxWait"in t)?w(O(t.maxWait)||0,n):i,h="trailing"in t?!!t.trailing:h),g.cancel=function(){void 0!==a&&clearTimeout(a),s=0,r=l=o=a=void 0},g.flush=function(){return void 0===a?u:m(f())},g};var _={debounce:T,throttle:function(e,n,t){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return c(t)&&(r="leading"in t?!!t.leading:r,o="trailing"in t?!!t.trailing:o),T(e,n,{leading:r,maxWait:n,trailing:o})}},S=function(e){return"function"==typeof e},j=function(){return"undefined"==typeof window};function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function z(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function R(e,n){return R=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},R(e,n)}const H=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){return!n||"object"!==k(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}(this,P(n).apply(this,arguments))}var t,r;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&R(e,n)}(n,e),t=n,(r=[{key:"render",value:function(){return this.props.children}}])&&z(t.prototype,r),n}(r.PureComponent);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function C(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,n){return D=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},D(e,n)}function W(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var q=function(e){function n(e){var t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),t=function(e,n){return!n||"object"!==M(n)&&"function"!=typeof n?A(e):n}(this,x(n).call(this,e)),W(A(t),"cancelHandler",(function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)})),W(A(t),"rafClean",(function(){t.raf&&t.raf.cancel&&(t.raf.cancel(),t.raf=null)})),W(A(t),"toggleObserver",(function(e){var n=t.getElement();n&&t.resizeObserver[e]&&t.resizeObserver[e](n)})),W(A(t),"getElement",(function(){var e=t.props,n=e.querySelector,r=e.targetDomEl;if(!j()){if(n)return document.querySelector(n);if(r&&((o=r)instanceof Element||o instanceof HTMLDocument))return r;var o,u=t.element&&(0,i.findDOMNode)(t.element);if(u)return u.parentElement}})),W(A(t),"createUpdater",(function(){return t.rafClean(),t.raf=(e=function(e){var n=e.width,r=e.height,o=t.props.onResize;S(o)&&o(n,r),t.setState({width:n,height:r})},n=[],r=null,o=function(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];n=o,r||(r=requestAnimationFrame((function(){r=null,e.apply(void 0,n)})))},o.cancel=function(){r&&(cancelAnimationFrame(r),r=null)},o),t.raf;var e,n,r,o})),W(A(t),"createResizeHandler",(function(e){var n=t.state,r=n.width,o=n.height,i=t.props,u=i.handleWidth,a=i.handleHeight;if(u||a){var c=t.createUpdater();e.forEach((function(e){var n=e&&e.contentRect||{},i=n.width,l=n.height,f=u&&r!==i||a&&o!==l;!t.skipOnMount&&f&&!j()&&c({width:i,height:l}),t.skipOnMount=!1}))}})),W(A(t),"onRef",(function(e){t.element=e})),W(A(t),"getRenderType",(function(){var e=t.props,n=e.render,o=e.children;return S(n)?"renderProp":S(o)?"childFunction":(0,r.isValidElement)(o)?"child":Array.isArray(o)?"childArray":"parent"})),W(A(t),"getTargetComponent",(function(){var e=t.props,n=e.render,o=e.children,i=e.nodeType,u=t.state,a={width:u.width,height:u.height};switch(t.getRenderType()){case"renderProp":return(0,r.cloneElement)(n(a),{key:"resize-detector"});case"childFunction":return(0,r.cloneElement)(o(a));case"child":return(0,r.cloneElement)(o,a);case"childArray":return o.map((function(e){return!!e&&(0,r.cloneElement)(e,a)}));default:return(0,r.createElement)(i)}}));var o=e.skipOnMount,a=e.refreshMode,c=e.refreshRate,l=e.refreshOptions;t.state={width:void 0,height:void 0},t.skipOnMount=o,t.raf=null,t.element=null,t.unmounted=!1;var f=_[a];return t.resizeHandler=f?f(t.createResizeHandler,c,l):t.createResizeHandler,t.resizeObserver=new u.Z(t.resizeHandler),t}var t,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&D(e,n)}(n,e),t=n,(a=[{key:"componentDidMount",value:function(){this.toggleObserver("observe")}},{key:"componentWillUnmount",value:function(){this.toggleObserver("unobserve"),this.rafClean(),this.cancelHandler(),this.unmounted=!0}},{key:"render",value:function(){return o().createElement(H,{ref:this.onRef},this.getTargetComponent())}}])&&C(t.prototype,a),n}(r.PureComponent);q.propTypes={handleWidth:a.bool,handleHeight:a.bool,skipOnMount:a.bool,refreshRate:a.number,refreshMode:a.string,refreshOptions:(0,a.shape)({leading:a.bool,trailing:a.bool}),querySelector:a.string,targetDomEl:a.any,onResize:a.func,render:a.func,children:a.any,nodeType:a.node},q.defaultProps={handleWidth:!1,handleHeight:!1,skipOnMount:!1,refreshRate:1e3,refreshMode:void 0,refreshOptions:void 0,querySelector:null,targetDomEl:null,onResize:null,render:void 0,children:null,nodeType:"div"};const N=q}}]);