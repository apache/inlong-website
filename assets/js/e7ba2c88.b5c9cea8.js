"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[12264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,g=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Architecture"},o=void 0,s={unversionedId:"modules/manager/architecture",id:"version-0.11.0/modules/manager/architecture",title:"Architecture",description:"Introduction to Apache InLong Manager",source:"@site/versioned_docs/version-0.11.0/modules/manager/architecture.md",sourceDirName:"modules/manager",slug:"/modules/manager/architecture",permalink:"/docs/0.11.0/modules/manager/architecture",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.11.0/modules/manager/architecture.md",tags:[],version:"0.11.0",frontMatter:{title:"Architecture"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"Hive Example",permalink:"/docs/0.11.0/user_guide/example"},next:{title:"Build && Deployment",permalink:"/docs/0.11.0/modules/manager/quick_start"}},c={},l=[{value:"Introduction to Apache InLong Manager",id:"introduction-to-apache-inlong-manager",level:2},{value:"Architecture",id:"architecture",level:2},{value:"use process",id:"use-process",level:2},{value:"data model",id:"data-model",level:2}],d={toc:l};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction-to-apache-inlong-manager"},"Introduction to Apache InLong Manager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Target positioning: Apache inlong is positioned as a one-stop integration framework for massive data, providing complete coverage of big data access scenarios from data collection, transmission, sorting, and technical capabilities.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Platform value: Users can complete task configuration, management, and indicator monitoring through the platform's built-in management and configuration platform. At the same time, the platform provides SPI extension points in the main links of the process to implement custom logic as needed. Ensure stable and efficient functions while lowering the threshold for platform use.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Apache InLong Manager is the user-oriented unified UI of the entire data access platform. After the user logs in, it will provide different function permissions and data permissions according to the corresponding role. The page provides maintenance portals for the platform's basic clusters (such as mq, sorting), and you can view basic maintenance information and capacity planning adjustments at any time. At the same time, business users can complete the creation, modification and maintenance of data access tasks, and index viewing and reconciliation functions. The corresponding background service will interact with the underlying modules when users create and start tasks, and deliver the tasks that each module needs to perform in a reasonable way. Play the role of coordinating the execution process of the serial back-end business."))),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(57396).Z,width:"965",height:"507"})),(0,r.kt)("p",null,"##Module division of labor"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Module"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Responsibilities"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-common"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Module common code, entry exception definition, tool class, enumeration, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-dao"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Database Operation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-service"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Business Logic Layer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-web"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Front-end interactive response interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-workflow-engine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Workflow Engine")))),(0,r.kt)("h2",{id:"use-process"},"use process"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(67439).Z,width:"1285",height:"852"})),(0,r.kt)("h2",{id:"data-model"},"data model"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(95520).Z,width:"1441",height:"673"})))}p.isMDXComponent=!0},95520:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/datamodel-7c788db64ee2c4f646d063d43a8675a6.jpg"},57396:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/inlong-manager-a3645b4c9d18fd67a2bb591656eaf4d6.png"},67439:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/interactive-7dd8e370ae4885484e6a4576cb5de26f.jpg"}}]);