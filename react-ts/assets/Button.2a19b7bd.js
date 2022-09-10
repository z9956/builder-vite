var i=Object.defineProperty;var n=(e,t)=>i(e,"name",{value:t,configurable:!0});import{j as s}from"./jsx-runtime.e98fab4e.js";const o=n(({primary:e,backgroundColor:t,size:a="medium",label:r,...l})=>{const u=e?"storybook-button--primary":"storybook-button--secondary";return s("button",{type:"button",className:["storybook-button",`storybook-button--${a}`,u].join(" "),style:t&&{backgroundColor:t},...l,children:r})},"Button");try{o.displayName="Button",o.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:null,description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["stories/Button.tsx#Button"]={docgenInfo:o.__docgenInfo,name:"Button",path:"stories/Button.tsx#Button"})}catch{}export{o as B};
//# sourceMappingURL=Button.2a19b7bd.js.map
