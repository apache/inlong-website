"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[23284],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(y,i(i({ref:n},d),{},{components:t})):r.createElement(y,i({ref:n},d))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33158:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(58168),o=(t(96540),t(15680));const a={title:"Overview",sidebar_position:1},i=void 0,l={unversionedId:"modules/dashboard/overview",id:"version-2.0.0/modules/dashboard/overview",title:"Overview",description:"This is a dashboard console for us to use the Apache InLong.",source:"@site/versioned_docs/version-2.0.0/modules/dashboard/overview.md",sourceDirName:"modules/dashboard",slug:"/modules/dashboard/overview",permalink:"/docs/modules/dashboard/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/modules/dashboard/overview.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/modules/manager/configure"},next:{title:"Deployment",permalink:"/docs/modules/dashboard/deployment"}},s={},p=[{value:"Guide For Developer",id:"guide-for-developer",level:2},{value:"Test",id:"test",level:3},{value:"Build",id:"build",level:3}],d={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This is a dashboard console for us to use the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong"},"Apache InLong"),"."),(0,o.yg)("h2",{id:"guide-for-developer"},"Guide For Developer"),(0,o.yg)("p",null,"You should check that ",(0,o.yg)("inlineCode",{parentName:"p"},"nodejs >= 12.0")," is installed."),(0,o.yg)("p",null,"In the project, you can run some built-in commands:"),(0,o.yg)("p",null,"If ",(0,o.yg)("inlineCode",{parentName:"p"},"node_modules")," is not installed, you should first run ",(0,o.yg)("inlineCode",{parentName:"p"},"npm install")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"yarn install"),"."),(0,o.yg)("p",null,"Use ",(0,o.yg)("inlineCode",{parentName:"p"},"npm run dev")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"yarn dev")," to run the application in development mode."),(0,o.yg)("p",null,"If the server runs successfully, the browser will open ",(0,o.yg)("a",{parentName:"p",href:"http://localhost:5173"},"http://localhost:5173")," to view in the browser."),(0,o.yg)("p",null,"If you edit, the page will reload.\nYou will also see any lint errors in the console."),(0,o.yg)("p",null,"The start of the web server depends on the back-end server ",(0,o.yg)("inlineCode",{parentName:"p"},"manger api")," interface."),(0,o.yg)("p",null,"You should start the backend server first, and then set the variable ",(0,o.yg)("inlineCode",{parentName:"p"},"target")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"/inlong-dashboard/vite.config.ts")," to the address of the api service."),(0,o.yg)("h3",{id:"test"},"Test"),(0,o.yg)("p",null,"Run ",(0,o.yg)("inlineCode",{parentName:"p"},"npm test")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"yarn test")),(0,o.yg)("p",null,"Start the test runner in interactive observation mode.\nFor more information, see the section on ",(0,o.yg)("a",{parentName:"p",href:"https://create-react-app.dev/docs/running-tests/"},"Running Tests"),"."),(0,o.yg)("h3",{id:"build"},"Build"),(0,o.yg)("p",null,"First, make sure that the project has run ",(0,o.yg)("inlineCode",{parentName:"p"},"npm install")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"yarn install")," to install ",(0,o.yg)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,o.yg)("p",null,"Run ",(0,o.yg)("inlineCode",{parentName:"p"},"npm run build")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"yarn build"),"."),(0,o.yg)("p",null,"Build the application for production into the build folder.\nBetter page performance can be obtained in the constructed production mode."),(0,o.yg)("p",null,"After the build, the code is compressed, and the file name includes the hash value.\nYour application is ready to be deployed!"),(0,o.yg)("p",null,"For details, see the section on ",(0,o.yg)("a",{parentName:"p",href:"https://create-react-app.dev/docs/deployment/"},"deployment"),"."))}c.isMDXComponent=!0}}]);