(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[72803,47310],{53001:(e,t,r)=>{"use strict";r.d(t,{xT:()=>n,H_:()=>o,Wv:()=>a,gC:()=>u,dG:()=>i,oQ:()=>c,Q2:()=>l,R3:()=>s,Zr:()=>f,Op:()=>E,l$:()=>p,uL:()=>d,zg:()=>m,K2:()=>A,M3:()=>O,st:()=>R,US:()=>T,$c:()=>v,pW:()=>y,$D:()=>g,ke:()=>C,rE:()=>_,vw:()=>S,r5:()=>G,X1:()=>h,V3:()=>I,p2:()=>L});var n="BACKGROUND_SELECTOR:ADD_BACKGROUND",o="BACKGROUND_SELECTOR:REMOVE_BACKGROUND",a="BACKGROUND_SELECTOR:SET_CURRENT_BACKGROUND_LAYER",u="BACKGROUND_SELECTOR:BACKGROUND_ADDED",i="BACKGROUND_SELECTOR:BACKGROUND_EDITED",c="BACKGROUND_SELECTOR:ADD_BACKGROUND_PROPERTIES",l="BACKGROUND_SELECTOR:SET_BACKGROUND_MODAL_PARAMS",s="BACKGROUND_SELECTOR:UPDATE_BACKGROUND_THUMBNAIL",f="BACKGROUND_SELECTOR:BACKGROUNDS_CLEAR",E="BACKGROUND_SELECTOR:CREATE_BACKGROUNDS_LIST",p="BACKGROUND_SELECTOR:CLEAR_MODAL_PARAMETERS",d="BACKGROUND_SELECTOR:CONFIRM_DELETE_BACKGROUND_MODAL",m="BACKGROUND_SELECTOR:ALLOW_BACKGROUNDS_DELETION",A="BACKGROUND_SELECTOR:SYNC_CURRENT_BACKGROUND_LAYER";function O(e){return{type:E,backgrounds:e}}function R(e){return{type:n,source:e}}function T(e){return{type:c,modalParams:e}}function v(e){return{type:l,modalParams:e}}function y(e){return{type:u,layerId:e}}function g(e){return{type:i,layerId:e}}function C(e){return{type:a,layerId:e}}function _(e){return{type:A,id:e}}function S(e){return{type:m,allow:e}}function G(e,t){return{type:s,thumbnailData:e,id:t}}function h(e){return{type:o,backgroundId:e}}function I(){return{type:p}}function L(e){return{type:d,show:e,layerTitle:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,layerId:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}},931273:(e,t,r)=>{"use strict";r.d(t,{WX:()=>c,r7:()=>l,V3:()=>s,HR:()=>f,xi:()=>E,ur:()=>p,vK:()=>d,nm:()=>m,QF:()=>A,zZ:()=>R,uN:()=>T,Bz:()=>v,im:()=>y,CO:()=>g,$X:()=>C,Mt:()=>_,Oq:()=>S,YO:()=>G,PR:()=>h,wI:()=>I,bv:()=>L,mh:()=>D,$Y:()=>N,eA:()=>P,UT:()=>b,cS:()=>w,l3:()=>M,Kz:()=>U,vg:()=>x,xM:()=>F,do:()=>B,lb:()=>k,yu:()=>K,c$:()=>Y,tt:()=>q,nX:()=>H,BG:()=>W,Rc:()=>V,K4:()=>j,Dw:()=>X,dL:()=>Z,In:()=>$,r1:()=>z,XW:()=>Q,L8:()=>J,i3:()=>ee,XM:()=>te,X7:()=>re,M3:()=>ne,N3:()=>oe,SU:()=>ae,wo:()=>ue,ye:()=>ie,m:()=>ce,wl:()=>le,bu:()=>se,A4:()=>fe,vG:()=>Ee,ky:()=>pe,Wf:()=>de,Ts:()=>me,IT:()=>Ae,XS:()=>Oe,tx:()=>Re,We:()=>Te,nx:()=>ve,E9:()=>ye,zX:()=>ge});var n=r(659551),o=r(501157),a=r(603475),u=r(932354),i=r(197395),c=(n.ZP,o.ZP,a.Z,u.Z,"CATALOG:ADD_LAYERS_FROM_CATALOGS"),l="CATALOG:ADD_LAYER_AND_DESCRIBE",s="CATALOG:TEXT_SEARCH",f="CATALOG:RECORD_LIST_LOADED",E="CATALOG:RESET_CATALOG",p="CATALOG:CATALOG_CLOSE",d="CATALOG:RECORD_LIST_LOAD_ERROR",m="CATALOG:CHANGE_CATALOG_FORMAT",A="CATALOG:ADD_LAYER_ERROR",O="CATALOG:DESCRIBE_ERROR",R="CATALOG:CHANGE_SELECTED_SERVICE",T="CATALOG:CHANGE_CATALOG_MODE",v="CATALOG:CHANGE_METADATA_TEMPLATE",y="CATALOG:CHANGE_TITLE",g="CATALOG:CHANGE_TEXT",C="CATALOG:CHANGE_TYPE",_="CATALOG:CHANGE_SERVICE_PROPERTY",S="CATALOG:CHANGE_SERVICE_FORMAT",G="CATALOG:FOCUS_SERVICES_LIST",h="CATALOG:CHANGE_URL",I="CATALOG:ADD_CATALOG_SERVICE",L="CATALOG:DELETE_CATALOG_SERVICE",D="CATALOG:ADD_SERVICE",N="CATALOG:DELETE_SERVICE",P="CATALOG:SAVING_SERVICE",b="CATALOG:GET_METADATA_RECORD_BY_ID",w="CATALOG:SET_LOADING",M="CATALOG:TOGGLE_TEMPLATE",U="CATALOG:TOGGLE_THUMBNAIL",x="CATALOG:TOGGLE_ADVANCED_SETTINGS",F="CATALOG:FORMAT_OPTIONS_FETCH",B="CATALOG:FORMAT_OPTIONS_LOADING",k="CATALOG:SET_FORMAT_OPTIONS",K="CATALOG:NEW_SERVICE_STATUS";function Y(){return{type:c,layers:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],sources:arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],options:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]}}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.format,r=e.url,n=e.startPosition,o=e.maxRecords,a=e.text,u=e.options;return{type:s,format:t,url:r,startPosition:n,maxRecords:o,text:a,options:void 0===u?{}:u}}function H(e,t){return{type:f,searchOptions:e,result:t}}function W(e){return{type:m,format:e}}function V(e){return{type:P,status:e}}function j(){return{type:w,loading:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}}function X(e){return{type:R,service:e}}function Z(e){return{type:G,status:e}}function $(e,t){return{type:T,mode:e,isNew:t}}function z(e){return{type:y,title:e}}function Q(e){return{type:g,text:e}}function J(e,t){return{type:_,property:e,value:t}}function ee(e){return{type:S,format:e}}function te(e){return{type:C,newType:e}}function re(e){return{type:h,url:e}}function ne(){return{type:D}}function oe(e){return{type:I,service:e}}function ae(e){return{type:L,service:e}}function ue(){return{type:N}}function ie(){return{type:E}}function ce(e){return{type:d,error:e}}function le(){return{type:p}}function se(e,t){return{type:O,layer:e,error:t}}var fe=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).zoomToLayer;return{type:l,layer:e,zoomToLayer:void 0!==t&&t}};function Ee(e){return{type:A,error:e}}function pe(e){return{type:b,metadataOptions:e}}var de=function(e){return{type:v,metadataTemplate:e}},me=function(){return{type:x}},Ae=function(){return{type:M}},Oe=function(){return{type:U}},Re=function(e){return{type:F,url:e}},Te=function(e){return{type:B,loading:e}},ve=function(e,t){return{type:k,formats:e,url:t}};function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,i.vU)({title:"catalog.notification.errorTitle",message:"catalog.notification.errorSearchingRecords",values:{records:e}})}var ge=function(e){return{type:K,status:e}}},921914:(e,t,r)=>{"use strict";r.d(t,{XL:()=>o,km:()=>a,Ih:()=>u,Xw:()=>i,Pn:()=>c,DZ:()=>l,e8:()=>s,E0:()=>f,F9:()=>E,X_:()=>p,pb:()=>d,qb:()=>m,Re:()=>A,ih:()=>O,xy:()=>R,jL:()=>T,oz:()=>v,ph:()=>y,lF:()=>g,gG:()=>C,cb:()=>_,GI:()=>S,B1:()=>G,fv:()=>h,gc:()=>I,zX:()=>L,ZF:()=>D,Zb:()=>N,DW:()=>P,Xp:()=>b,Fm:()=>w,sV:()=>M,Mn:()=>U,LU:()=>x,XP:()=>F,WU:()=>B,JB:()=>k,g:()=>K,ws:()=>Y,HP:()=>q,aN:()=>H,Pg:()=>V,u0:()=>j,TM:()=>X,PM:()=>Z,lK:()=>$,sv:()=>z,MO:()=>Q,oO:()=>J,Mc:()=>ee,Zw:()=>te,RA:()=>re,am:()=>ne,ZM:()=>oe,wm:()=>ae,Y$:()=>ue,Qu:()=>ie,kT:()=>ce});var n=r(647310),o="LOAD_FEATURE_INFO",a="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",i="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",l="PURGE_MAPINFO_RESULTS",s="CHANGE_MAPINFO_FORMAT",f="SHOW_MAPINFO_MARKER",E="HIDE_MAPINFO_MARKER",p="SHOW_REVERSE_GEOCODE",d="HIDE_REVERSE_GEOCODE",m="GET_VECTOR_INFO",A="NO_QUERYABLE_LAYERS",O="CLEAR_WARNING",R="FEATURE_INFO_CLICK",T="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",v="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",y="TOGGLE_MAPINFO_STATE",g="UPDATE_CENTER_TO_MARKER",C="IDENTIFY:CHANGE_PAGE",_="IDENTIFY:CLOSE_IDENTIFY",S="IDENTIFY:CHANGE_FORMAT",G="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",h="IDENTIFY:EDIT_LAYER_FEATURES",I="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",L="IDENTIFY:SET_MAP_TRIGGER",D="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",N="IDENTIFY:SET_SHOW_IN_MAP_POPUP",P="IDENTIFY:IDENTIFY_IS_MOUNTED",b="IDENTIFY:INIT_PLUGIN";function w(e,t,r,n,a){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:a}}function M(e,t,r,n){return{type:a,error:t,reqId:e,requestParams:r,layerMetadata:n}}function U(e,t,r,n){return{type:u,reqId:e,exceptions:t,requestParams:r,layerMetadata:n}}function x(){return{type:A}}function F(){return{type:O}}function B(e,t){return{type:c,reqId:e,request:t}}function k(e,t,r,n){return{type:m,layer:e,request:t,metadata:r,queryableLayers:n}}function K(){return{type:l}}function Y(e){return{type:s,infoFormat:e}}function q(){return{type:f}}function H(){return{type:E}}function W(e){return{type:p,reverseGeocodeData:e.data}}function V(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(W(e))})).catch((function(e){t(W(e))}))}}function j(){return{type:d}}function X(){return{type:y}}function Z(e){return{type:g,status:e}}function $(e,t){return{type:R,point:e,layer:t,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null}}function z(e){return{type:T,point:e}}function Q(e){return{type:v,enabled:e}}function J(e){return{type:C,index:e}}var ee=function(){return{type:_}},te=function(e){return{type:S,format:e}},re=function(e){return{type:G,showCoordinateEditor:e}},ne=function(e){return{type:h,layer:e}},oe=function(e){return{type:I,query:e}},ae=function(e){return{type:L,trigger:e}},ue=function(e){return{type:N,value:e}},ie=function(e){return{type:P,isMounted:e}},ce=function(e){return{type:b,cfg:e}}},659551:(e,t,r)=>{"use strict";r.d(t,{_b:()=>P,kv:()=>x,ZP:()=>k});var n=r(472500),o=r.n(n),a=r(227361),u=r.n(a),i=r(91175),c=r.n(i),l=r(610928),s=r.n(l),f=r(941106),E=r.n(f),p=r(414293),d=r.n(p),m=r(984596),A=r.n(m),O=r(441609),R=r.n(O),T=r(727418),v=r.n(T),y=r(375875),g=r.n(y),C=r(737275),_=r(986267),S=r(501157);function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){var n,o,a,u;n=e,o=t,a=r[t],u=function(e,t){if("object"!=G(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==G(u)?u:String(u))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,u,i=[],c=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var N=function(e){var t=o().parse(e,!0);return o().format(v()({},t,{search:null},{query:v()({service:"CSW",version:"2.0.2"},t.query,{request:void 0})}))},P='<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gmi="http://www.isotc211.org/2005/gmi" xmlns:ows="http://www.opengis.net/ows" service="CSW" version="2.0.2" resultType="results" startPosition="${startPosition}" maxRecords="${maxRecords}"> <csw:Query typeNames="csw:Record"> <csw:ElementSetName>full</csw:ElementSetName> <csw:Constraint version="1.1.0"> <ogc:Filter> ${filterXml} </ogc:Filter> </csw:Constraint> </csw:Query> </csw:GetRecords>',b=function(e,t,r){if(!t.name)return null;switch(e){case"wms":var n=0!==t.value.indexOf("http")?(r&&r.catalogURL||"")+"/"+t.value:t.value;return{type:t.protocol||t.scheme,url:n,SRS:[],params:{name:t.name}};case"arcgis":return{type:"arcgis",url:t.value,SRS:[],params:{name:t.name}};default:return null}},w=[/^OGC:WMS-(.*)-http-get-map/g,/^OGC:WMS/g],M=/serviceType\/ogc\/wms/g,U=w.concat(M),x=function(e,t){var r,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=(null==e?void 0:e.URI)&&A()(e.URI);if(a){var u=c()(a.map((function(e){if(e.protocol){if(w.some((function(t){return e.protocol.match(t)})))return e;if(e.protocol.match(M))return function(e){var t=new Map(Array.from(new URLSearchParams(e.value)).map((function(e){var t=L(e,2),r=t[0],n=t[1];return[r.toLowerCase(),n]}))),r=t.get("layers"),n=t.get("version");return!!r&&I(I({},e),{},{protocol:"OGC:WMS",name:r,value:"".concat(e.value.match(/[^\?]+[\?]+/g),"SERVICE=WMS").concat(n&&"&VERSION=".concat(n))})}(e)}return!1})).filter((function(e){return e})));if(u)return b("wms",u,t)}if(null!=e&&null!==(r=e.references)&&void 0!==r&&r.length){var i=A()(e.references),l=c()(i.filter((function(e){return e.scheme&&w.some((function(t){return e.scheme.match(t)}))})));if(l){var s=o().parse(l.value,!0),f=s.query&&s.query.layers||e.alternative;return b("wms",I(I({},l),{},{name:f}),t)}if(n){var E=c()(i.filter((function(e){return e.scheme&&"WWW:DOWNLOAD-REST_MAP"===e.scheme})));if(E)return b("arcgis",I(I({},E),{},{name:e.alternative}),t)}}return null},F={},B={parseUrl:N,getRecordById:function(e){return new Promise((function(t){Promise.all([r.e(99942),r.e(66372)]).then(function(){t(g().get(e).then((function(e){if(e){var t=r(566372).unmarshaller.unmarshalString(e.data);if(t&&t.name&&"GetRecordByIdResponse"===t.name.localPart&&t.value&&t.value.abstractRecord){var n=t.value.abstractRecord[0].value.dcElement;if(n){for(var o={references:[]},a=0;a<n.length;a++){var u=n[a],i=u.name.localPart,c={};c="references"===i&&u.value?{value:u.value.content&&(0,C.$F)(u.value.content[0])||u.value.content||u.value,scheme:u.value.scheme}:u.value.content&&u.value.content[0]||u.value.content||u.value,o[i]&&Array.isArray(o[i])?o[i].push(c):o[i]?o[i]=[o[i],c]:o[i]=c}return{dc:o}}}else if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"};return null}return null})))}.bind(null,r)).catch(r.oe)}))},getRecords:function(e,t,n,o,a){return new Promise((function(i){Promise.all([r.e(99942),r.e(1269)]).then(function(){var l=r(566372),f=l.CSW,p=l.marshaller,m=l.unmarshaller,O=p.marshalString({name:"csw:GetRecords",value:f.getRecords(t,n,"string"!=typeof o&&o)});o&&"string"!=typeof o||(O=function(e,t,r){var n=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).filter,o=(null==n?void 0:n.staticFilter)||"<ogc:Or>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>http://purl.org/dc/dcmitype/Dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n       </ogc:Or>",a="<ogc:And>\n        ".concat(E()((null==n?void 0:n.dynamicFilter)||"<ogc:PropertyIsLike wildCard='%' singleChar='_' escapeChar='\\'><ogc:PropertyName>csw:AnyText</ogc:PropertyName> <ogc:Literal>%${searchText}%</ogc:Literal> </ogc:PropertyIsLike> ")({searchText:r}),"\n        ").concat(o,"\n    </ogc:And>");return E()(P)({filterXml:r?a:o,startPosition:e,maxRecords:t})}(t,n,o,a)),i(g().post(N(e),O,{headers:{"Content-Type":"application/xml"}}).then((function(e){if(e){var t=m.unmarshalString(e.data);if(t&&t.name&&"GetRecordsResponse"===t.name.localPart&&t.value&&t.value.searchResults){var r,n=t.value,o=n.searchResults.abstractRecord||n.searchResults.any,i={numberOfRecordsMatched:n.searchResults.numberOfRecordsMatched,numberOfRecordsReturned:n.searchResults.numberOfRecordsReturned,nextRecord:n.searchResults.nextRecord},l=[];if(o)for(var f=0;f<o.length;f++){var E=o[f].value,p={dateStamp:E.dateStamp&&E.dateStamp.date,fileIdentifier:E.fileIdentifier&&E.fileIdentifier.characterString&&E.fileIdentifier.characterString.value,identificationInfo:E.abstractMDIdentification&&E.abstractMDIdentification.value};if(E.boundingBox){var O,T=void 0;if((O=Array.isArray(E.boundingBox)?c()(E.boundingBox):E.boundingBox)&&O.value){var v,y,g,G,h=null!==(v=null===(y=O.value)||void 0===y?void 0:y.crs)&&void 0!==v?v:"",D=null===(g=h.match(/[\w-]*:[\w-]*:[\w-]*:[\w-]*:[\w-]*:[^:]*:(([\w-]+\s[\w-]+)|[\w-]*)/))||void 0===g?void 0:g[0],N=(0,_.makeNumericEPSG)(null===(G=h.match(/EPSG:[0-9]+/))||void 0===G?void 0:G[0]),P=O.value.lowerCorner,b=O.value.upperCorner,w=N||(0,_.extractCrsFromURN)(D)||s()(h.split(":"));"EPSG:4326"===(w?"EPSG:"===w.slice(0,5)?(0,_.makeNumericEPSG)(w):(0,_.makeNumericEPSG)("EPSG:".concat(w)):"EPSG:4326")&&"CRS84"!==w&&"OGC:CRS84"!==w&&(P=[P[1],P[0]],b=[b[1],b[0]]),T=(0,_.makeBboxFromOWS)(P,b)}p.boundingBox={extent:T,crs:"EPSG:4326"}}var M=E.dcElement;if(M){for(var B={references:[]},k=0;k<M.length;k++){var K=M[k],Y=K.name.localPart,q={};q="references"===Y&&K.value?{value:K.value.content&&(0,C.$F)(K.value.content[0])||K.value.content||K.value,scheme:K.value.scheme}:K.value.content&&K.value.content[0]||K.value.content||K.value,B[Y]&&Array.isArray(B[Y])?B[Y].push(q):B[Y]?B[Y]=[B[Y],q]:B[Y]=q}var H=A()(B.references.length>0?B.references:B.URI);r=r?r.concat(H):H,p.dc=B}l.push(p)}return i.records=l,function(e,t,r){if(!u()(r,"options.service.autoSetVisibilityLimits",!1))return t;var n=((null==e?void 0:e.find((function(e){return U.some((function(t){var r,n;return(null==e||null===(r=e.scheme)||void 0===r?void 0:r.match(t))||(null==e||null===(n=e.protocol)||void 0===n?void 0:n.match(t))}))})))||{}).value,o=L(n&&n.split("?")||[],1)[0];if(!o)return I({},t);var a=F[o],i=!R()(a);return Promise.resolve(i?a:S.ZP.getCapabilities(o+"?version=").then((function(e){return u()(e,"capability.layer.layer",[])})).catch((function(){return[]}))).then((function(e){var r;return i||(F[o]=e),I(I({},t),{},{records:null==t||null===(r=t.records)||void 0===r?void 0:r.map((function(t){var r=u()(x(null==t?void 0:t.dc,null,!1),"params.name",""),n=e.find((function(e){return e.name===r}))||{},o=n.minScaleDenominator,a=n.maxScaleDenominator;return I(I({},t),(!d()(o)||!d()(a))&&{capabilities:{MaxScaleDenominator:a,MinScaleDenominator:o}})}))})}))}(r,i,a)}if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"}}return null})))}.bind(null,r)).catch(r.oe)}))},textSearch:function(e,t,r,n,o){return new Promise((function(a){a(B.getRecords(e,t,r,n,o))}))},workspaceSearch:function(e,t,n,o,a){return new Promise((function(u){Promise.all([r.e(99942),r.e(1269)]).then(function(){var i=r(484454).Filter,c=a||"%",l=o&&"%"+o+"%"||"%",s=i.propertyIsLike("dc:identifier",c+":"+l),f=i.filter(s);u(B.getRecords(e,t,n,f))}.bind(null,r)).catch(r.oe)}))},reset:function(){}};const k=B},647310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(375875),o=r.n(n),a=r(472500),u=r.n(a),i=r(727418),c=r.n(i),l={format:"json",bounded:0,polygon_geojson:1,priority:5};const s={geocode:function(e,t){var r=c()({q:e},l,t||{}),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=c()({lat:e.lat,lon:e.lng},t||{},l),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},603475:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(375875),o=r.n(n),a=r(737275),u=r(472500),i=r.n(u),c=r(727418),l=r.n(c),s=r(505055),f=r.n(s),E=r(984596),p=r.n(E),d=r(986267),m=r(707294),A={},O=function(e){var t=i().parse(e,!0);return i().format(l()({},t,{search:null},{query:l()({SERVICE:"WMTS",VERSION:"1.0.0",REQUEST:"GetCapabilities"},t.query)}))},R=function(e,t,r,n,o){for(var a=e.Capabilities.Contents,u=(0,m.G6)(e),i=(0,m.s5)(e),c=a.TileMatrixSet&&p()(a.TileMatrixSet)||[],s=[],f=c.length,E=0;E<f;E++)s.push((0,d.getEPSGCode)(c[E]["ows:SupportedCRS"]));var A=a.Layer,O=p()(A).filter((function(e){return!n||-1!==e["ows:Identifier"].toLowerCase().indexOf(n.toLowerCase())||e["ows:Title"]&&-1!==e["ows:Title"].toLowerCase().indexOf(n.toLowerCase())}));return{numberOfRecordsMatched:O.length,numberOfRecordsReturned:Math.min(r,O.length),nextRecord:t+Math.min(r,O.length)+1,records:O.filter((function(e,n){return n>=t-1&&n<t-1+r})).map((function(e){return l()({},e,{SRS:s,TileMatrixSet:c,queryable:!!(0,m.b4)(u,"GetFeatureInfo","KVP"),requestEncoding:i,style:(0,m.EN)(e),format:(0,m.JY)(e),GetTileURL:(0,m.b4)(u,"GetTile",i),capabilitiesURL:o})}))}},T={parseUrl:O,getRecords:function(e,t,r,n){var u=A[e];return u&&(new Date).getTime()<u.timestamp+1e3*((0,a.u8)("cacheExpire")||60)?new Promise((function(o){o(R(u.data,t,r,n,e))})):o().get(O(e)).then((function(o){var a;return f().parseString(o.data,{explicitArray:!1},(function(e,t){a=t})),A[e]={timestamp:(new Date).getTime(),data:a},R(a,t,r,n,e)}))},getCapabilities:function(e){var t=A[e];return t&&(new Date).getTime()<t.timestamp+1e3*((0,a.u8)("cacheExpire")||60)?new Promise((function(e){e(t.data)})):o().get(O(e)).then((function(t){var r;return f().parseString(t.data,{explicitArray:!1},(function(e,t){r=t})),A[e]={timestamp:(new Date).getTime(),data:r},r}))},textSearch:function(e,t,r,n){return T.getRecords(e,t,r,n)},reset:function(){Object.keys(A).forEach((function(e){delete A[e]}))}};const v=T},932354:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(227361),o=r.n(n),a=r(737275),u=function(e,t,r,n){var u=o()(a.ZP.getDefaults(),"initialState.defaultState.catalog.default.staticServices.default_map_backgrounds.backgrounds").filter((function(e){return!n||e.title.indexOf(n)>-1})),i=u.filter((function(e,n){return n>=t-1&&n<r+t-1}));return new Promise((function(e){return e({numberOfRecordsMatched:u.length,numberOfRecordsReturned:i.length,records:i,service:{Name:"Background Provider"}})}))};const i={getRecords:u,reset:function(){},textSearch:function(e,t,r,n){return u(0,t,r,n)}}},31935:(e,t,r)=>{"use strict";r.d(t,{YL:()=>i,B0:()=>c,Mz:()=>l,TC:()=>s,qS:()=>f,Pe:()=>E,TP:()=>p});var n=r(22222),o=r(675110),a=r(93152),u=r(624262),i=function(e){return e.backgroundSelector&&e.backgroundSelector.source},c=function(e){return e.backgroundSelector&&e.backgroundSelector.modalParams},l=function(e){return e.backgroundSelector&&e.backgroundSelector.backgrounds||[]},s=function(e){return e.backgroundSelector&&e.backgroundSelector.lastRemovedId},f=function(e){return e.backgroundSelector&&e.backgroundSelector.confirmDeleteBackgroundModal},E=function(e){return e.backgroundSelector&&e.backgroundSelector.allowDeletion},p=(0,n.P1)(o.l2,a.$v,a.lh,(function(e,t,r){var n=e.filter((function(e){return e&&"background"===e.group}));return r&&r[t]?n.map((function(e){return(0,u.kf)(e,t)}))||[]:n}))}}]);