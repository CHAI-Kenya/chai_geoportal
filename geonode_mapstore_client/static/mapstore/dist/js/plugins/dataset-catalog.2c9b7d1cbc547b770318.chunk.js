(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[41604],{50950:(n,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>A});var t=o(124852),r=o.n(t),a=o(45697),l=o.n(a),i=o(322843),u=o(171703),s=o(22222),c=o(805346),d=o(303744),f=o(337326),v=o(535721),b=o(580416),g=o(801550),p=o(782904),m=o(229698),C=o(55105),y=o(424216),h=["onAdd","onZoomTo"],w=["enabled"];function x(){return x=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)({}).hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},x.apply(null,arguments)}function E(n,e){if(null==n)return{};var o,t,r=function(n,e){if(null==n)return{};var o={};for(var t in n)if({}.hasOwnProperty.call(n,t)){if(e.includes(t))continue;o[t]=n[t]}return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)o=a[t],e.includes(o)||{}.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}function P(n){var e=n.onAdd,o=n.onZoomTo,t=E(n,h);return r().createElement(y.Z,x({},t,{onSelect:function(n){var t,r,a=(0,v.tA)(n);e(a);var l,i=(null==a||null===(t=a.bbox)||void 0===t?void 0:t.bounds)||{},u=i.minx,s=i.miny,c=i.maxx,d=i.maxy,f=(null==a||null===(r=a.bbox)||void 0===r?void 0:r.bounds)&&[u,s,c,d];f&&o(f,null==a||null===(l=a.bbox)||void 0===l?void 0:l.crs)}}))}P.propTypes={request:l().func,responseToEntries:l().func,pageSize:l().number,onAdd:l().func,placeholderId:l().string,onClose:l().func,onZoomTo:l().func},P.defaultProps={request:f.EX,responseToEntries:function(n){return n.resources},pageSize:10,onAdd:function(){},placeholderId:"gnviewer.datasetsCatalogFilterPlaceholder",titleId:"gnviewer.datasetsCatalogTitle",noResultId:"gnviewer.datasetsCatalogEntriesNoResults",onZoomTo:function(){},onClose:function(){}};var T=(0,u.connect)((0,s.P1)([function(n){return(0,C.ic)(n,{height:!0})},function(n){var e,o;return null==n||null===(e=n.controls)||void 0===e||null===(o=e.datasetsCatalog)||void 0===o?void 0:o.enabled}],(function(n,e){return{style:n,enabled:e}})),{onAdd:b.A4,onClose:p.Xg.bind(null,"datasetsCatalog","enabled",!1),onZoomTo:g.Px})((function(n){var e=n.enabled,o=E(n,w);return e?r().createElement(P,o):null})),Z=(0,u.connect)((0,s.P1)([],(function(){return{}})),{onClick:p.Xg.bind(null,"datasetsCatalog","enabled",!0)})((function(n){var e=n.onClick,o=n.size,t=n.variant;return r().createElement(d.Z,{size:o,onClick:function(){e()},variant:t},r().createElement(c.Z,{msgId:"gnviewer.addLayer"}))}));const A=(0,i.rx)("DatasetsCatalog",{component:T,containers:{ActionNavbar:{name:"DatasetsCatalog",Component:Z}},epics:m.Z,reducers:{}})}}]);