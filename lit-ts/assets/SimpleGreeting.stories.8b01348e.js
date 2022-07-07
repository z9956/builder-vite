var B=Object.defineProperty,H=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var T=(i,e,t)=>e in i?B(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,y=(i,e)=>{for(var t in e||(e={}))x.call(e,t)&&T(i,t,e[t]);if(p)for(var t of p(e))A.call(e,t)&&T(i,t,e[t]);return i},v=(i,e)=>H(i,W(e));var R=(i,e)=>{var t={};for(var s in i)x.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&p)for(var s of p(i))e.indexOf(s)<0&&A.call(i,s)&&(t[s]=i[s]);return t};import"./index.06140e01.js";import{c as h,A as X,M as q,C as J,S as I}from"./Props.40998070.js";import{x as F,b as Q,$ as w}from"./lit-html.74953d8c.js";import"./iframe.14fdfe24.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,P=Symbol(),M=new Map;class N{constructor(e,t){if(this._$cssResult$=!0,t!==P)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=M.get(this.cssText);return C&&e===void 0&&(M.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const Y=i=>new N(typeof i=="string"?i:i+"",P),Z=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,r,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new N(t,P)},ee=(i,e)=>{C?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const s=document.createElement("style"),r=window.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)})},D=C?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Y(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var g;const z=window.trustedTypes,te=z?z.emptyScript:"",k=window.reactiveElementPolyfillSupport,S={toAttribute(i,e){switch(e){case Boolean:i=i?te:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},j=(i,e)=>e!==i&&(e==e||i==i),f={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:j};class a extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const r=this._$Eh(s,t);r!==void 0&&(this._$Eu.set(r,s),e.push(r))}),e}static createProperty(e,t=f){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of s)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(D(r))}else e!==void 0&&t.push(D(e));return t}static _$Eh(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ee(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ES(e,t,s=f){var r,n;const o=this.constructor._$Eh(e,s);if(o!==void 0&&s.reflect===!0){const l=((n=(r=s.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&n!==void 0?n:S.toAttribute)(t,s.type);this._$Ei=e,l==null?this.removeAttribute(o):this.setAttribute(o,l),this._$Ei=null}}_$AK(e,t){var s,r,n;const o=this.constructor,l=o._$Eu.get(e);if(l!==void 0&&this._$Ei!==l){const O=o.getPropertyOptions(l),m=O.converter,V=(n=(r=(s=m)===null||s===void 0?void 0:s.fromAttribute)!==null&&r!==void 0?r:typeof m=="function"?m:null)!==null&&n!==void 0?n:S.fromAttribute;this._$Ei=l,this[l]=V(t,O.type),this._$Ei=null}}requestUpdate(e,t,s){let r=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||j)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,n)=>this[n]=r),this._$Et=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(s)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdated)===null||r===void 0?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$ES(s,this[s],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}a.finalized=!0,a.elementProperties=new Map,a.elementStyles=[],a.shadowRootOptions={mode:"open"},k==null||k({ReactiveElement:a}),((g=globalThis.reactiveElementVersions)!==null&&g!==void 0?g:globalThis.reactiveElementVersions=[]).push("1.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var E,$;class c extends a{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=F(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Q}}c.finalized=!0,c._$litElement$=!0,(E=globalThis.litElementHydrateSupport)===null||E===void 0||E.call(globalThis,{LitElement:c});const L=globalThis.litElementPolyfillSupport;L==null||L({LitElement:c});(($=globalThis.litElementVersions)!==null&&$!==void 0?$:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=i=>e=>typeof e=="function"?((t,s)=>(window.customElements.define(t,s),s))(i,e):((t,s)=>{const{kind:r,elements:n}=s;return{kind:r,elements:n,finisher(o){window.customElements.define(t,o)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?v(y({},e),{finisher(t){t.createProperty(e.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function re(i){return(e,t)=>t!==void 0?((s,r,n)=>{r.constructor.createProperty(n,s)})(i,e,t):ie(i,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _;((_=window.HTMLSlotElement)===null||_===void 0?void 0:_.prototype.assignedElements)!=null;var ne=Z`p {
  color: blue;
}`,oe=Object.defineProperty,le=Object.getOwnPropertyDescriptor,G=(i,e,t,s)=>{for(var r=s>1?void 0:s?le(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&oe(e,t,r),r};let u=class extends c{constructor(){super(...arguments),this.name="Somebody"}render(){return w`<p>Hello, ${this.name}!</p>`}};u.styles=[ne];G([re()],u.prototype,"name",2);u=G([se("simple-greeting")],u);function b(){return b=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},b.apply(this,arguments)}const ae={},he="wrapper";function K(t){var s=t,{components:i}=s,e=R(s,["components"]);return h(he,b({},ae,e,{components:i,mdxType:"MDXLayout"}),h(q,{title:"Example/Simple Greeting",component:"simple-greeting",argTypes:{name:"World"},mdxType:"Meta"}),h(J,{withSource:"open",mdxType:"Canvas"},h(I,{name:"Simple Greeting",component:"simple-greeting",args:{name:"World"},mdxType:"Story"},r=>w` <simple-greeting name="${r.name}"></simple-greeting> `)))}K.isMDXComponent=!0;const U=i=>w` <simple-greeting name="${i.name}"></simple-greeting> `;U.storyName="Simple Greeting";U.args={name:"World"};U.parameters={storySource:{source:'args => html` <simple-greeting name="${args.name}"></simple-greeting> `'}};const d={title:"Example/Simple Greeting",argTypes:{name:"World"},includeStories:["simpleGreeting"]},ce={"Simple Greeting":"simpleGreeting"};d.parameters=d.parameters||{};d.parameters.docs=v(y({},d.parameters.docs||{}),{page:()=>h(X,{mdxStoryNameToKey:ce,mdxComponentAnnotations:d},h(K,null))});const ve=["simpleGreeting"];export{ve as __namedExportsOrder,d as default,U as simpleGreeting};
//# sourceMappingURL=SimpleGreeting.stories.8b01348e.js.map