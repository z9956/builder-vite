var l=Object.defineProperty;var s=(n,a)=>l(n,"name",{value:a,configurable:!0});import{p as r}from"./index.da9f964c.js";import{H as p,L as g,a as u}from"./Header.stories.daa8be0d.js";import{a as o,j as e}from"./jsx-runtime.ce048799.js";import"./Button.42372bc7.js";import"./iframe.5e074374.js";const t=s(({user:n,onLogin:a,onLogout:d,onCreateAccount:c})=>o("article",{children:[e(p,{user:n,onLogin:a,onLogout:d,onCreateAccount:c}),o("section",{children:[e("h2",{children:"Pages in Storybook"}),o("p",{children:["We recommend building UIs with a"," ",e("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:e("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),e("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),o("ul",{children:[e("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),e("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),o("p",{children:["Get a guided tutorial on component-driven development at"," ",e("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the"," ",e("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),o("div",{className:"tip-wrapper",children:[e("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",e("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:e("g",{fill:"none",fillRule:"evenodd",children:e("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]}),"Page");t.propTypes={user:r.exports.shape({}),onLogin:r.exports.func.isRequired,onLogout:r.exports.func.isRequired,onCreateAccount:r.exports.func.isRequired};t.defaultProps={user:null};t.__docgenInfo={description:"",methods:[],displayName:"Page",props:{user:{defaultValue:{value:"null",computed:!1},type:{name:"shape",value:{}},required:!1,description:""},onLogin:{type:{name:"func"},required:!0,description:""},onLogout:{type:{name:"func"},required:!0,description:""},onCreateAccount:{type:{name:"func"},required:!0,description:""}}};const k={parameters:{storySource:{source:`import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  // This component uses auto-title
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:9},endLoc:{col:45,line:9},startBody:{col:17,line:9},endBody:{col:45,line:9}},"logged-out":{startLoc:{col:17,line:9},endLoc:{col:45,line:9},startBody:{col:17,line:9},endBody:{col:45,line:9}}}}},component:t},i=s(n=>e(t,{...n}),"Template"),h=i.bind({});h.args={...g.args};const m=i.bind({});m.args={...u.args};const x=["LoggedIn","LoggedOut"];export{h as LoggedIn,m as LoggedOut,x as __namedExportsOrder,k as default};
//# sourceMappingURL=Page.stories.0c5d2e32.js.map
