var _t=Object.defineProperty,er=Object.defineProperties;var tr=Object.getOwnPropertyDescriptors;var it=Object.getOwnPropertySymbols;var rr=Object.prototype.hasOwnProperty,or=Object.prototype.propertyIsEnumerable;var at=(t,e,o)=>e in t?_t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,Q=(t,e)=>{for(var o in e||(e={}))rr.call(e,o)&&at(t,o,e[o]);if(it)for(var o of it(e))or.call(e,o)&&at(t,o,e[o]);return t},ue=(t,e)=>er(t,tr(e));import{ad as xt,Y as nr,Z as ke,ae as fe,af as de,X as ir,a0 as Ve,j as L,a1 as ge,a2 as Ie,ac as oe,a4 as Tt,ag as ar,ah as sr,ab as $e,q as Rt,ai as Pe,aj as _,ak as Ct,R as lr,al as cr,am as ur,an as Pt,ao as Se,ap as j,aq as $,ar as W,as as M,at as St,au as Ye,av as We,aw as pe,ax as st,ay as Et,az as pr,aA as fr}from"./iframe.6a464f5d.js";var lt,ct;function dr(t,e){return mr(t)||gr(t,e)||hr(t,e)||vr()}function vr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hr(t,e){if(!!t){if(typeof t=="string")return ut(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return ut(t,e)}}function ut(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function gr(t,e){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var r=[],n=!0,i=!1,s,a;try{for(o=o.call(t);!(n=(s=o.next()).done)&&(r.push(s.value),!(e&&r.length===e));n=!0);}catch(l){i=!0,a=l}finally{try{!n&&o.return!=null&&o.return()}finally{if(i)throw a}}return r}}function mr(t){if(Array.isArray(t))return t}function At(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function Ee(t){return Ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ee(t)}function V(t){return t?(t.nodeName||"").toLowerCase():null}function F(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ne(t){var e=F(t).Element;return t instanceof e||t instanceof Element}function H(t){var e=F(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function kt(t){if(typeof ShadowRoot=="undefined")return!1;var e=F(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function yr(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var r=e.styles[o]||{},n=e.attributes[o]||{},i=e.elements[o];!H(i)||!V(i)||(Object.assign(i.style,r),Object.keys(n).forEach(function(s){var a=n[s];a===!1?i.removeAttribute(s):i.setAttribute(s,a===!0?"":a)}))})}function wr(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(r){var n=e.elements[r],i=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:o[r]),a=s.reduce(function(l,u){return l[u]="",l},{});!H(n)||!V(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(l){n.removeAttribute(l)}))})}}var br={name:"applyStyles",enabled:!0,phase:"write",fn:yr,effect:wr,requires:["computeStyles"]};function N(t){return t.split("-")[0]}var ee=Math.max,Ae=Math.min,ie=Math.round;function ae(t,e){e===void 0&&(e=!1);var o=t.getBoundingClientRect(),r=1,n=1;if(H(t)&&e){var i=t.offsetHeight,s=t.offsetWidth;s>0&&(r=ie(o.width)/s||1),i>0&&(n=ie(o.height)/i||1)}return{width:o.width/r,height:o.height/n,top:o.top/n,right:o.right/r,bottom:o.bottom/n,left:o.left/r,x:o.left/r,y:o.top/n}}function Xe(t){var e=ae(t),o=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:r}}function Bt(t,e){var o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(o&&kt(o)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function I(t){return F(t).getComputedStyle(t)}function Or(t){return["table","td","th"].indexOf(V(t))>=0}function G(t){return((ne(t)?t.ownerDocument:t.document)||window.document).documentElement}function Be(t){return V(t)==="html"?t:t.assignedSlot||t.parentNode||(kt(t)?t.host:null)||G(t)}function pt(t){return!H(t)||I(t).position==="fixed"?null:t.offsetParent}function xr(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&H(t)){var r=I(t);if(r.position==="fixed")return null}for(var n=Be(t);H(n)&&["html","body"].indexOf(V(n))<0;){var i=I(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function ye(t){for(var e=F(t),o=pt(t);o&&Or(o)&&I(o).position==="static";)o=pt(o);return o&&(V(o)==="html"||V(o)==="body"&&I(o).position==="static")?e:o||xr(t)||e}function ze(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ve(t,e,o){return ee(t,Ae(e,o))}function Tr(t,e,o){var r=ve(t,e,o);return r>o?o:r}function jt(){return{top:0,right:0,bottom:0,left:0}}function Mt(t){return Object.assign({},jt(),t)}function Dt(t,e){return e.reduce(function(o,r){return o[r]=t,o},{})}var Rr=function(e,o){return e=typeof e=="function"?e(Object.assign({},o.rects,{placement:o.placement})):e,Mt(typeof e!="number"?e:Dt(e,Ye))};function Cr(t){var e,o=t.state,r=t.name,n=t.options,i=o.elements.arrow,s=o.modifiersData.popperOffsets,a=N(o.placement),l=ze(a),u=[M,$].indexOf(a)>=0,c=u?"height":"width";if(!(!i||!s)){var d=Rr(n.padding,o),m=Xe(i),p=l==="y"?j:M,v=l==="y"?W:$,h=o.rects.reference[c]+o.rects.reference[l]-s[l]-o.rects.popper[c],g=s[l]-o.rects.reference[l],O=ye(i),T=O?l==="y"?O.clientHeight||0:O.clientWidth||0:0,y=h/2-g/2,f=d[p],w=T-m[c]-d[v],b=T/2-m[c]/2+y,x=ve(f,b,w),R=l;o.modifiersData[r]=(e={},e[R]=x,e.centerOffset=x-b,e)}}function Pr(t){var e=t.state,o=t.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||!Bt(e.elements.popper,n)||(e.elements.arrow=n))}var Sr={name:"arrow",enabled:!0,phase:"main",fn:Cr,effect:Pr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function se(t){return t.split("-")[1]}var Er={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ar(t){var e=t.x,o=t.y,r=window,n=r.devicePixelRatio||1;return{x:ie(e*n)/n||0,y:ie(o*n)/n||0}}function ft(t){var e,o=t.popper,r=t.popperRect,n=t.placement,i=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,u=t.adaptive,c=t.roundOffsets,d=t.isFixed,m=s.x,p=m===void 0?0:m,v=s.y,h=v===void 0?0:v,g=typeof c=="function"?c({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var O=s.hasOwnProperty("x"),T=s.hasOwnProperty("y"),y=M,f=j,w=window;if(u){var b=ye(o),x="clientHeight",R="clientWidth";if(b===F(o)&&(b=G(o),I(b).position!=="static"&&a==="absolute"&&(x="scrollHeight",R="scrollWidth")),b=b,n===j||(n===M||n===$)&&i===We){f=W;var S=d&&w.visualViewport?w.visualViewport.height:b[x];h-=S-r.height,h*=l?1:-1}if(n===M||(n===j||n===W)&&i===We){y=$;var P=d&&w.visualViewport?w.visualViewport.width:b[R];p-=P-r.width,p*=l?1:-1}}var C=Object.assign({position:a},u&&Er),k=c===!0?Ar({x:p,y:h}):{x:p,y:h};if(p=k.x,h=k.y,l){var E;return Object.assign({},C,(E={},E[f]=T?"0":"",E[y]=O?"0":"",E.transform=(w.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",E))}return Object.assign({},C,(e={},e[f]=T?h+"px":"",e[y]=O?p+"px":"",e.transform="",e))}function kr(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=r===void 0?!0:r,i=o.adaptive,s=i===void 0?!0:i,a=o.roundOffsets,l=a===void 0?!0:a,u={placement:N(e.placement),variation:se(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ft(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ft(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Br={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:kr,data:{}},Te={passive:!0};function jr(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=n===void 0?!0:n,s=r.resize,a=s===void 0?!0:s,l=F(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&u.forEach(function(c){c.addEventListener("scroll",o.update,Te)}),a&&l.addEventListener("resize",o.update,Te),function(){i&&u.forEach(function(c){c.removeEventListener("scroll",o.update,Te)}),a&&l.removeEventListener("resize",o.update,Te)}}var Mr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:jr,data:{}},Dr={left:"right",right:"left",bottom:"top",top:"bottom"};function Re(t){return t.replace(/left|right|bottom|top/g,function(e){return Dr[e]})}var Hr={start:"end",end:"start"};function dt(t){return t.replace(/start|end/g,function(e){return Hr[e]})}function qe(t){var e=F(t),o=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:o,scrollTop:r}}function Ge(t){return ae(G(t)).left+qe(t).scrollLeft}function Lr(t){var e=F(t),o=G(t),r=e.visualViewport,n=o.clientWidth,i=o.clientHeight,s=0,a=0;return r&&(n=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:n,height:i,x:s+Ge(t),y:a}}function $r(t){var e,o=G(t),r=qe(t),n=(e=t.ownerDocument)==null?void 0:e.body,i=ee(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=ee(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-r.scrollLeft+Ge(t),l=-r.scrollTop;return I(n||o).direction==="rtl"&&(a+=ee(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}function Ze(t){var e=I(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function Ht(t){return["html","body","#document"].indexOf(V(t))>=0?t.ownerDocument.body:H(t)&&Ze(t)?t:Ht(Be(t))}function he(t,e){var o;e===void 0&&(e=[]);var r=Ht(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),i=F(r),s=n?[i].concat(i.visualViewport||[],Ze(r)?r:[]):r,a=e.concat(s);return n?a:a.concat(he(Be(s)))}function Fe(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Wr(t){var e=ae(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function vt(t,e){return e===Et?Fe(Lr(t)):ne(e)?Wr(e):Fe($r(G(t)))}function Fr(t){var e=he(Be(t)),o=["absolute","fixed"].indexOf(I(t).position)>=0,r=o&&H(t)?ye(t):t;return ne(r)?e.filter(function(n){return ne(n)&&Bt(n,r)&&V(n)!=="body"}):[]}function Ur(t,e,o){var r=e==="clippingParents"?Fr(t):[].concat(e),n=[].concat(r,[o]),i=n[0],s=n.reduce(function(a,l){var u=vt(t,l);return a.top=ee(u.top,a.top),a.right=Ae(u.right,a.right),a.bottom=Ae(u.bottom,a.bottom),a.left=ee(u.left,a.left),a},vt(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Lt(t){var e=t.reference,o=t.element,r=t.placement,n=r?N(r):null,i=r?se(r):null,s=e.x+e.width/2-o.width/2,a=e.y+e.height/2-o.height/2,l;switch(n){case j:l={x:s,y:e.y-o.height};break;case W:l={x:s,y:e.y+e.height};break;case $:l={x:e.x+e.width,y:a};break;case M:l={x:e.x-o.width,y:a};break;default:l={x:e.x,y:e.y}}var u=n?ze(n):null;if(u!=null){var c=u==="y"?"height":"width";switch(i){case Se:l[u]=l[u]-(e[c]/2-o[c]/2);break;case We:l[u]=l[u]+(e[c]/2-o[c]/2);break}}return l}function me(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=r===void 0?t.placement:r,i=o.boundary,s=i===void 0?fr:i,a=o.rootBoundary,l=a===void 0?Et:a,u=o.elementContext,c=u===void 0?pe:u,d=o.altBoundary,m=d===void 0?!1:d,p=o.padding,v=p===void 0?0:p,h=Mt(typeof v!="number"?v:Dt(v,Ye)),g=c===pe?pr:pe,O=t.rects.popper,T=t.elements[m?g:c],y=Ur(ne(T)?T:T.contextElement||G(t.elements.popper),s,l),f=ae(t.elements.reference),w=Lt({reference:f,element:O,strategy:"absolute",placement:n}),b=Fe(Object.assign({},O,w)),x=c===pe?b:f,R={top:y.top-x.top+h.top,bottom:x.bottom-y.bottom+h.bottom,left:y.left-x.left+h.left,right:x.right-y.right+h.right},S=t.modifiersData.offset;if(c===pe&&S){var P=S[n];Object.keys(R).forEach(function(C){var k=[$,W].indexOf(C)>=0?1:-1,E=[j,W].indexOf(C)>=0?"y":"x";R[C]+=P[E]*k})}return R}function Nr(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=o.boundary,i=o.rootBoundary,s=o.padding,a=o.flipVariations,l=o.allowedAutoPlacements,u=l===void 0?St:l,c=se(r),d=c?a?st:st.filter(function(v){return se(v)===c}):Ye,m=d.filter(function(v){return u.indexOf(v)>=0});m.length===0&&(m=d);var p=m.reduce(function(v,h){return v[h]=me(t,{placement:h,boundary:n,rootBoundary:i,padding:s})[N(h)],v},{});return Object.keys(p).sort(function(v,h){return p[v]-p[h]})}function Vr(t){if(N(t)===Pt)return[];var e=Re(t);return[dt(t),e,dt(e)]}function Ir(t){var e=t.state,o=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!0:s,l=o.fallbackPlacements,u=o.padding,c=o.boundary,d=o.rootBoundary,m=o.altBoundary,p=o.flipVariations,v=p===void 0?!0:p,h=o.allowedAutoPlacements,g=e.options.placement,O=N(g),T=O===g,y=l||(T||!v?[Re(g)]:Vr(g)),f=[g].concat(y).reduce(function(re,z){return re.concat(N(z)===Pt?Nr(e,{placement:z,boundary:c,rootBoundary:d,padding:u,flipVariations:v,allowedAutoPlacements:h}):z)},[]),w=e.rects.reference,b=e.rects.popper,x=new Map,R=!0,S=f[0],P=0;P<f.length;P++){var C=f[P],k=N(C),E=se(C)===Se,Y=[j,W].indexOf(k)>=0,X=Y?"width":"height",A=me(e,{placement:C,boundary:c,rootBoundary:d,altBoundary:m,padding:u}),B=Y?E?$:M:E?W:j;w[X]>b[X]&&(B=Re(B));var te=Re(B),Z=[];if(i&&Z.push(A[k]<=0),a&&Z.push(A[B]<=0,A[te]<=0),Z.every(function(re){return re})){S=C,R=!1;break}x.set(C,Z)}if(R)for(var we=v?3:1,je=function(z){var ce=f.find(function(Oe){var J=x.get(Oe);if(J)return J.slice(0,z).every(function(Me){return Me})});if(ce)return S=ce,"break"},le=we;le>0;le--){var be=je(le);if(be==="break")break}e.placement!==S&&(e.modifiersData[r]._skip=!0,e.placement=S,e.reset=!0)}}var Yr={name:"flip",enabled:!0,phase:"main",fn:Ir,requiresIfExists:["offset"],data:{_skip:!1}};function ht(t,e,o){return o===void 0&&(o={x:0,y:0}),{top:t.top-e.height-o.y,right:t.right-e.width+o.x,bottom:t.bottom-e.height+o.y,left:t.left-e.width-o.x}}function gt(t){return[j,$,W,M].some(function(e){return t[e]>=0})}function Xr(t){var e=t.state,o=t.name,r=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,s=me(e,{elementContext:"reference"}),a=me(e,{altBoundary:!0}),l=ht(s,r),u=ht(a,n,i),c=gt(l),d=gt(u);e.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}var zr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Xr};function qr(t,e,o){var r=N(t),n=[M,j].indexOf(r)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,s=i[0],a=i[1];return s=s||0,a=(a||0)*n,[M,$].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function Gr(t){var e=t.state,o=t.options,r=t.name,n=o.offset,i=n===void 0?[0,0]:n,s=St.reduce(function(c,d){return c[d]=qr(d,e.rects,i),c},{}),a=s[e.placement],l=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=s}var Zr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Gr};function Jr(t){var e=t.state,o=t.name;e.modifiersData[o]=Lt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Kr={name:"popperOffsets",enabled:!0,phase:"read",fn:Jr,data:{}};function Qr(t){return t==="x"?"y":"x"}function _r(t){var e=t.state,o=t.options,r=t.name,n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!1:s,l=o.boundary,u=o.rootBoundary,c=o.altBoundary,d=o.padding,m=o.tether,p=m===void 0?!0:m,v=o.tetherOffset,h=v===void 0?0:v,g=me(e,{boundary:l,rootBoundary:u,padding:d,altBoundary:c}),O=N(e.placement),T=se(e.placement),y=!T,f=ze(O),w=Qr(f),b=e.modifiersData.popperOffsets,x=e.rects.reference,R=e.rects.popper,S=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,P=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),C=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(!!b){if(i){var E,Y=f==="y"?j:M,X=f==="y"?W:$,A=f==="y"?"height":"width",B=b[f],te=B+g[Y],Z=B-g[X],we=p?-R[A]/2:0,je=T===Se?x[A]:R[A],le=T===Se?-R[A]:-x[A],be=e.elements.arrow,re=p&&be?Xe(be):{width:0,height:0},z=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:jt(),ce=z[Y],Oe=z[X],J=ve(0,x[A],re[A]),Me=y?x[A]/2-we-J-ce-P.mainAxis:je-J-ce-P.mainAxis,qt=y?-x[A]/2+we+J+Oe+P.mainAxis:le+J+Oe+P.mainAxis,De=e.elements.arrow&&ye(e.elements.arrow),Gt=De?f==="y"?De.clientTop||0:De.clientLeft||0:0,Je=(E=C==null?void 0:C[f])!=null?E:0,Zt=B+Me-Je-Gt,Jt=B+qt-Je,Ke=ve(p?Ae(te,Zt):te,B,p?ee(Z,Jt):Z);b[f]=Ke,k[f]=Ke-B}if(a){var Qe,Kt=f==="x"?j:M,Qt=f==="x"?W:$,K=b[w],xe=w==="y"?"height":"width",_e=K+g[Kt],et=K-g[Qt],He=[j,M].indexOf(O)!==-1,tt=(Qe=C==null?void 0:C[w])!=null?Qe:0,rt=He?_e:K-x[xe]-R[xe]-tt+P.altAxis,ot=He?K+x[xe]+R[xe]-tt-P.altAxis:et,nt=p&&He?Tr(rt,K,ot):ve(p?rt:_e,K,p?ot:et);b[w]=nt,k[w]=nt-K}e.modifiersData[r]=k}}var eo={name:"preventOverflow",enabled:!0,phase:"main",fn:_r,requiresIfExists:["offset"]};function to(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function ro(t){return t===F(t)||!H(t)?qe(t):to(t)}function oo(t){var e=t.getBoundingClientRect(),o=ie(e.width)/t.offsetWidth||1,r=ie(e.height)/t.offsetHeight||1;return o!==1||r!==1}function no(t,e,o){o===void 0&&(o=!1);var r=H(e),n=H(e)&&oo(e),i=G(e),s=ae(t,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!o)&&((V(e)!=="body"||Ze(i))&&(a=ro(e)),H(e)?(l=ae(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):i&&(l.x=Ge(i))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function io(t){var e=new Map,o=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function n(i){o.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(a){if(!o.has(a)){var l=e.get(a);l&&n(l)}}),r.push(i)}return t.forEach(function(i){o.has(i.name)||n(i)}),r}function ao(t){var e=io(t);return ur.reduce(function(o,r){return o.concat(e.filter(function(n){return n.phase===r}))},[])}function so(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function lo(t){var e=t.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(e).map(function(o){return e[o]})}var mt={placement:"bottom",modifiers:[],strategy:"absolute"};function yt(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function co(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,r=o===void 0?[]:o,n=e.defaultOptions,i=n===void 0?mt:n;return function(a,l,u){u===void 0&&(u=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},mt,i),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],m=!1,p={state:c,setOptions:function(O){var T=typeof O=="function"?O(c.options):O;h(),c.options=Object.assign({},i,c.options,T),c.scrollParents={reference:ne(a)?he(a):a.contextElement?he(a.contextElement):[],popper:he(l)};var y=ao(lo([].concat(r,c.options.modifiers)));return c.orderedModifiers=y.filter(function(f){return f.enabled}),v(),p.update()},forceUpdate:function(){if(!m){var O=c.elements,T=O.reference,y=O.popper;if(!!yt(T,y)){c.rects={reference:no(T,ye(y),c.options.strategy==="fixed"),popper:Xe(y)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(P){return c.modifiersData[P.name]=Object.assign({},P.data)});for(var f=0;f<c.orderedModifiers.length;f++){if(c.reset===!0){c.reset=!1,f=-1;continue}var w=c.orderedModifiers[f],b=w.fn,x=w.options,R=x===void 0?{}:x,S=w.name;typeof b=="function"&&(c=b({state:c,options:R,name:S,instance:p})||c)}}}},update:so(function(){return new Promise(function(g){p.forceUpdate(),g(c)})}),destroy:function(){h(),m=!0}};if(!yt(a,l))return p;p.setOptions(u).then(function(g){!m&&u.onFirstUpdate&&u.onFirstUpdate(g)});function v(){c.orderedModifiers.forEach(function(g){var O=g.name,T=g.options,y=T===void 0?{}:T,f=g.effect;if(typeof f=="function"){var w=f({state:c,name:O,instance:p,options:y}),b=function(){};d.push(w||b)}})}function h(){d.forEach(function(g){return g()}),d=[]}return p}}var uo=[Mr,Kr,Br,br,Zr,Yr,eo,Sr,zr],po=co({defaultModifiers:uo});function Ue(t,e){return Ue=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r},Ue(t,e)}function $t(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Ue(t,e)}var Wt=xt(),Ft=xt();function fo(t){var e=t.children,o=ge(null),r=o[0],n=o[1],i=$e(!1);oe(function(){return function(){i.current=!0}},[]);var s=Ie(function(a){i.current||n(a)},[]);return L(Wt.Provider,{value:r,children:L(Ft.Provider,{value:s,children:e})})}var Ut=function(e){return Array.isArray(e)?e[0]:e},Nt=function(e){if(typeof e=="function"){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},Ne=function(e,o){if(typeof e=="function")return Nt(e,o);e!=null&&(e.current=o)},wt=function(e){return e.reduce(function(o,r){var n=r[0],i=r[1];return o[n]=i,o},{})},bt=typeof window!="undefined"&&window.document&&window.document.createElement?cr:oe,vo=typeof Element!="undefined",ho=typeof Map=="function",go=typeof Set=="function",mo=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ce(t,e){if(t===e)return!0;if(t&&e&&Ee(t)=="object"&&Ee(e)=="object"){if(t.constructor!==e.constructor)return!1;var o,r,n;if(Array.isArray(t)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(!Ce(t[r],e[r]))return!1;return!0}var i;if(ho&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!Ce(r.value[1],e.get(r.value[0])))return!1;return!0}if(go&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(mo&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(n=Object.keys(t),o=n.length,o!==Object.keys(e).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,n[r]))return!1;if(vo&&t instanceof Element)return!1;for(r=o;r--!==0;)if(!((n[r]==="_owner"||n[r]==="__v"||n[r]==="__o")&&t.$$typeof)&&!Ce(t[n[r]],e[n[r]]))return!1;return!0}return t!==t&&e!==e}var yo=function(e,o){try{return Ce(e,o)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},wo=[],bo=function(e,o,r){r===void 0&&(r={});var n=$e(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||wo},s=ge({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=s[0],l=s[1],u=Pe(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var v=p.state,h=Object.keys(v.elements);l({styles:wt(h.map(function(g){return[g,v.styles[g]||{}]})),attributes:wt(h.map(function(g){return[g,v.attributes[g]]}))})},requires:["computeStyles"]}},[]),c=Pe(function(){var m={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return yo(n.current,m)?n.current||m:(n.current=m,m)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),d=$e();return bt(function(){d.current&&d.current.setOptions(c)},[c]),bt(function(){if(!(e==null||o==null)){var m=r.createPopper||po,p=m(e,o,c);return d.current=p,function(){p.destroy(),d.current=null}}},[e,o,r.createPopper]),{state:d.current?d.current.state:null,styles:a.styles,attributes:a.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}},Oo=function(){},xo=function(){return Promise.resolve(null)},To=[];function Ro(t){var e=t.placement,o=e===void 0?"bottom":e,r=t.strategy,n=r===void 0?"absolute":r,i=t.modifiers,s=i===void 0?To:i,a=t.referenceElement,l=t.onFirstUpdate,u=t.innerRef,c=t.children,d=Rt(Wt),m=ge(null),p=m[0],v=m[1],h=ge(null),g=h[0],O=h[1];oe(function(){Ne(u,p)},[u,p]);var T=Pe(function(){return{placement:o,strategy:n,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:g!=null,options:{element:g}}])}},[o,n,l,s,g]),y=bo(a||d,p,T),f=y.state,w=y.styles,b=y.forceUpdate,x=y.update,R=Pe(function(){return{ref:v,style:w.popper,placement:f?f.placement:o,hasPopperEscaped:f&&f.modifiersData.hide?f.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:f&&f.modifiersData.hide?f.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:w.arrow,ref:O},forceUpdate:b||Oo,update:x||xo}},[v,O,o,f,w,x,b]);return Ut(c)(R)}function Co(t){var e=t.children,o=t.innerRef,r=Rt(Ft),n=Ie(function(i){Ne(o,i),Nt(r,i)},[o,r]);return oe(function(){return function(){return Ne(o,null)}}),oe(function(){},[r]),Ut(e)({ref:n})}var Vt=lr.createContext({}),U=function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return o.forEach(function(a){return a&&a.apply(void 0,i)})}},Po=function(){},Ot=function(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)},So=function(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)},It=function(t){$t(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.observer=void 0,r.tooltipRef=void 0,r.handleOutsideClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideClickHandler,u=r.props,c=u.hideTooltip,d=u.clearScheduled;d(),c(),l&&l(a)}},r.handleOutsideRightClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideRightClickHandler,u=r.props,c=u.hideTooltip,d=u.clearScheduled;d(),c(),l&&l(a)}},r.addOutsideClickHandler=function(){document.body.addEventListener("touchend",r.handleOutsideClick),document.body.addEventListener("click",r.handleOutsideClick)},r.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",r.handleOutsideClick),document.body.removeEventListener("click",r.handleOutsideClick)},r.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",r.handleOutsideRightClick)},r.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",r.handleOutsideRightClick)},r.getTooltipRef=function(a){r.tooltipRef=a,So(r.props.innerRef,a)},r.getArrowProps=function(a){return a===void 0&&(a={}),_({},a,{style:_({},a.style,r.props.arrowProps.style)})},r.getTooltipProps=function(a){return a===void 0&&(a={}),_({},a,r.isTriggeredBy("hover")&&{onMouseEnter:U(r.props.clearScheduled,a.onMouseEnter),onMouseLeave:U(r.props.hideTooltip,a.onMouseLeave)},{style:_({},a.style,r.props.style)})},r.contextValue={isParentNoneTriggered:r.props.trigger==="none",addParentOutsideClickHandler:r.addOutsideClickHandler,addParentOutsideRightClickHandler:r.addOutsideRightClickHandler,parentOutsideClickHandler:r.handleOutsideClick,parentOutsideRightClickHandler:r.handleOutsideRightClick,removeParentOutsideClickHandler:r.removeOutsideClickHandler,removeParentOutsideRightClickHandler:r.removeOutsideRightClickHandler},r}var o=e.prototype;return o.componentDidMount=function(){var n=this,i=this.observer=new MutationObserver(function(){n.props.update()});if(i.observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var s=this.context,a=s.removeParentOutsideClickHandler,l=s.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),a&&a(),l&&l()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var n=this.context,i=n.isParentNoneTriggered,s=n.addParentOutsideClickHandler,a=n.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!i&&s&&s(),!i&&a&&a()}},o.render=function(){var n=this.props,i=n.arrowProps,s=n.placement,a=n.tooltip;return L(Vt.Provider,{value:this.contextValue,children:a({arrowRef:i.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:s,tooltipRef:this.getTooltipRef})})},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(Ct);It.contextType=Vt;var Eo={childList:!0,subtree:!0},Yt=function(t){$t(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.state={tooltipShown:r.props.defaultTooltipShown},r.hideTimeout=void 0,r.showTimeout=void 0,r.popperOffset=void 0,r.setTooltipState=function(a){var l=function(){return r.props.onVisibilityChange(a.tooltipShown)};r.isControlled()?l():r.setState(a,l)},r.clearScheduled=function(){clearTimeout(r.hideTimeout),clearTimeout(r.showTimeout)},r.showTooltip=function(a){var l=a.pageX,u=a.pageY;r.clearScheduled();var c={tooltipShown:!0};r.props.followCursor&&(c=_({},c,{pageX:l,pageY:u})),r.showTimeout=window.setTimeout(function(){return r.setTooltipState(c)},r.props.delayShow)},r.hideTooltip=function(){r.clearScheduled(),r.hideTimeout=window.setTimeout(function(){return r.setTooltipState({tooltipShown:!1})},r.props.delayHide)},r.toggleTooltip=function(a){var l=a.pageX,u=a.pageY,c=r.getState()?"hideTooltip":"showTooltip";r[c]({pageX:l,pageY:u})},r.clickToggle=function(a){a.preventDefault();var l=a.pageX,u=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:u})},r.contextMenuToggle=function(a){a.preventDefault();var l=a.pageX,u=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:u})},r.getTriggerProps=function(a){return a===void 0&&(a={}),_({},a,r.isTriggeredBy("click")&&{onClick:U(r.clickToggle,a.onClick),onTouchEnd:U(r.clickToggle,a.onTouchEnd)},r.isTriggeredBy("right-click")&&{onContextMenu:U(r.contextMenuToggle,a.onContextMenu)},r.isTriggeredBy("hover")&&_({onMouseEnter:U(r.showTooltip,a.onMouseEnter),onMouseLeave:U(r.hideTooltip,a.onMouseLeave)},r.props.followCursor&&{onMouseMove:U(r.showTooltip,a.onMouseMove)}),r.isTriggeredBy("focus")&&{onFocus:U(r.showTooltip,a.onFocus),onBlur:U(r.hideTooltip,a.onBlur)})},r}var o=e.prototype;return o.componentWillUnmount=function(){this.clearScheduled()},o.render=function(){var n=this,i=this.props,s=i.children,a=i.tooltip,l=i.placement,u=i.trigger,c=i.getTriggerRef,d=i.modifiers,m=i.closeOnReferenceHidden,p=i.usePortal,v=i.portalContainer,h=i.followCursor,g=i.getTooltipRef,O=i.mutationObserverOptions,T=ar(i,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),y=L(Ro,ue(Q({innerRef:g,placement:l,modifiers:[{name:"followCursor",enabled:h,phase:"main",fn:function(w){n.popperOffset=w.state.rects.popper}}].concat(d)},T),{children:function(f){var w=f.ref,b=f.style,x=f.placement,R=f.arrowProps,S=f.isReferenceHidden,P=f.update;if(h&&n.popperOffset){var C=n.state,k=C.pageX,E=C.pageY,Y=n.popperOffset,X=Y.width,A=Y.height,B=k+X>window.pageXOffset+document.body.offsetWidth?k-X:k,te=E+A>window.pageYOffset+document.body.offsetHeight?E-A:E;b.transform="translate3d("+B+"px, "+te+"px, 0"}return L(It,{arrowProps:R,closeOnReferenceHidden:m,isReferenceHidden:S,placement:x,update:P,style:b,tooltip:a,trigger:u,mutationObserverOptions:O,clearScheduled:n.clearScheduled,hideTooltip:n.hideTooltip,innerRef:w})}}));return Tt(fo,{children:[L(Co,{innerRef:c,children:function(f){var w=f.ref;return s({getTriggerProps:n.getTriggerProps,triggerRef:w})}}),this.getState()&&(p?sr(y,v):y)]})},o.isControlled=function(){return this.props.tooltipShown!==void 0},o.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(Ct);Yt.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:Po,placement:"right",portalContainer:Ot()?document.body:null,trigger:"hover",usePortal:Ot(),mutationObserverOptions:Eo,modifiers:[]};var Ao=Yt,D=nr(1e3)(function(t,e,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.split("-")[0]===t?o:r}),q=8,ko=ke.div({position:"absolute",borderStyle:"solid"},function(t){var e=t.placement,o=0,r=0;switch(!0){case(e.startsWith("left")||e.startsWith("right")):{r=8;break}case(e.startsWith("top")||e.startsWith("bottom")):{o=8;break}}var n="translate3d(".concat(o,"px, ").concat(r,"px, 0px)");return{transform:n}},function(t){var e=t.theme,o=t.color,r=t.placement;return{bottom:"".concat(D("top",r,q*-1,"auto"),"px"),top:"".concat(D("bottom",r,q*-1,"auto"),"px"),right:"".concat(D("left",r,q*-1,"auto"),"px"),left:"".concat(D("right",r,q*-1,"auto"),"px"),borderBottomWidth:"".concat(D("top",r,"0",q),"px"),borderTopWidth:"".concat(D("bottom",r,"0",q),"px"),borderRightWidth:"".concat(D("left",r,"0",q),"px"),borderLeftWidth:"".concat(D("right",r,"0",q),"px"),borderTopColor:D("top",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent"),borderBottomColor:D("bottom",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent"),borderLeftColor:D("left",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent"),borderRightColor:D("right",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent")}}),Bo=ke.div(function(t){var e=t.hidden;return{display:e?"none":"inline-block",zIndex:2147483647}},function(t){var e=t.theme,o=t.color,r=t.hasChrome;return r?{background:e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:e.appBorderRadius*2,fontSize:e.typography.size.s1}:{}}),Xt=function(e){var o=e.placement,r=e.hasChrome,n=e.children,i=e.arrowProps,s=e.tooltipRef,a=e.arrowRef,l=e.color,u=Ve(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return Tt(Bo,ue(Q({},Object.assign({hasChrome:r,placement:o,ref:s},u,{color:l})),{children:[r&&L(ko,Q({},Object.assign({placement:o,ref:a},i,{color:l}))),n]}))};Xt.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var Le=ir.document,jo=ke.div(lt||(lt=At([`
  display: inline-block;
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),Mo=ke.g(ct||(ct=At([`
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),zt=function(e){var o=e.svg,r=e.trigger;e.closeOnClick;var n=e.placement,i=e.modifiers,s=e.hasChrome,a=e.tooltip,l=e.children,u=e.tooltipShown,c=e.onVisibilityChange,d=Ve(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),m=o?Mo:jo;return L(Ao,{placement:n,trigger:r,modifiers:i,tooltipShown:u,onVisibilityChange:c,tooltip:function(v){var h=v.getTooltipProps,g=v.getArrowProps,O=v.tooltipRef,T=v.arrowRef,y=v.placement;return L(Xt,ue(Q({},Object.assign({hasChrome:s,placement:y,tooltipRef:O,arrowRef:T,arrowProps:g()},h())),{children:typeof a=="function"?a({onHide:function(){return c(!1)}}):a}))},children:function(p){var v=p.getTriggerProps,h=p.triggerRef;return L(m,ue(Q({},Object.assign({ref:h},v(),d)),{children:l}))}})};zt.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var Lo=function(e){var o=e.startOpen,r=e.onVisibilityChange,n=Ve(e,["startOpen","onVisibilityChange"]),i=ge(o||!1),s=dr(i,2),a=s[0],l=s[1],u=Ie(function(c){r&&r(c)===!1||l(c)},[r]);return oe(function(){var c=function(){return u(!1)};Le.addEventListener("keydown",c,!1);var d=Array.from(Le.getElementsByTagName("iframe")),m=[];return d.forEach(function(p){var v=function(){try{p.contentWindow.document&&(p.contentWindow.document.addEventListener("click",c),m.push(function(){try{p.contentWindow.document.removeEventListener("click",c)}catch{}}))}catch{}};v(),p.addEventListener("load",v),m.push(function(){p.removeEventListener("load",v)})}),function(){Le.removeEventListener("keydown",c),m.forEach(function(p){p()})}}),L(zt,Q({},Object.assign({},n,{tooltipShown:a,onVisibilityChange:u})))};export{Lo as WithToolTipState,Lo as WithTooltip,zt as WithTooltipPure};
//# sourceMappingURL=WithTooltip-508b8277.04dea5a1.js.map