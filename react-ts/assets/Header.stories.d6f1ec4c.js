var m=Object.defineProperty;var d=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var i=(e,n,t)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))_.call(n,t)&&i(e,t,n[t]);if(d)for(var t of d(n))f.call(n,t)&&i(e,t,n[t]);return e};import{B as l}from"./Button.a811d429.js";import{j as r,a as o,F as h}from"./jsx-runtime.f1f00a27.js";const a=({user:e,onLogin:n,onLogout:t,onCreateAccount:g})=>r("header",{children:o("div",{className:"wrapper",children:[o("div",{children:[r("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:o("g",{fill:"none",fillRule:"evenodd",children:[r("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),r("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),r("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),r("h1",{children:"Acme"})]}),r("div",{children:e?r(l,{size:"small",onClick:t,label:"Log out"}):o(h,{children:[r(l,{size:"small",onClick:n,label:"Log in"}),r(l,{primary:!0,size:"small",onClick:g,label:"Sign up"})]})})]})});try{a.displayName="Header",a.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"Record<string, any>"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["stories/Header.tsx#Header"]={docgenInfo:a.__docgenInfo,name:"Header",path:"stories/Header.tsx#Header"})}catch{}const L={title:"Example/Header",component:a},u=e=>r(a,s({},e)),c=u.bind({});c.args={user:{}};const p=u.bind({});p.args={};const v=["LoggedIn","LoggedOut"];var O=Object.freeze(Object.defineProperty({__proto__:null,default:L,LoggedIn:c,LoggedOut:p,__namedExportsOrder:v},Symbol.toStringTag,{value:"Module"}));export{a as H,c as L,p as a,O as b};
//# sourceMappingURL=Header.stories.d6f1ec4c.js.map