"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[29623],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,g=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90371:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Overview"},i=void 0,l={unversionedId:"modules/manager/overview",id:"version-1.2.0/modules/manager/overview",title:"Overview",description:"1 Introduction to Apache InLong Manager",source:"@site/versioned_docs/version-1.2.0/modules/manager/overview.md",sourceDirName:"modules/manager",slug:"/modules/manager/overview",permalink:"/docs/1.2.0/modules/manager/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/modules/manager/overview.md",tags:[],version:"1.2.0",frontMatter:{title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Example",permalink:"/docs/1.2.0/modules/sort/example"},next:{title:"Deployment",permalink:"/docs/1.2.0/modules/manager/quick_start"}},s={},c=[{value:"1 Introduction to Apache InLong Manager",id:"1-introduction-to-apache-inlong-manager",level:2},{value:"2 Architecture",id:"2-architecture",level:2},{value:"3 Module division of labor",id:"3-module-division-of-labor",level:2},{value:"4 use process",id:"4-use-process",level:2},{value:"5 data model",id:"5-data-model",level:2}],d={toc:c},m="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-introduction-to-apache-inlong-manager"},"1 Introduction to Apache InLong Manager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Target positioning: Apache InLong is positioned as a one-stop mass data integration framework, providing technical capabilities for big data from collection -> transmission -> sorting -> landing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Platform value: Users can complete task configuration, management and indicator monitoring through the management and configuration platform in the platform, and at the same time, through the plug-in expansion capability provided by the platform, they can realize customized expansion on demand.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"InLong Manager is a unified management platform for the Apache InLong project. The platform provides maintenance portals for various basic configurations (such as data flow configuration, consumption configuration, cluster management, etc.). Users can create data collection tasks and view indicator data."))),(0,r.kt)("h2",{id:"2-architecture"},"2 Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(58949).Z,width:"2306",height:"1400"})),(0,r.kt)("h2",{id:"3-module-division-of-labor"},"3 Module division of labor"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Modules"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Responsibilities"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-common"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Module common code, such as exception definition, tool class, enumeration, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-dao"),(0,r.kt)("td",{parentName:"tr",align:"left"},"database operations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-service"),(0,r.kt)("td",{parentName:"tr",align:"left"},"business logic layer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-workflow"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Workflow Services")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-plugins"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sort plugin service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-web"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Front-end interactive interface layer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-client"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Client Services")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-client-examples"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Client usage examples")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-client-tools"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Client command line tools")))),(0,r.kt)("h2",{id:"4-use-process"},"4 use process"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(49359).Z,width:"1285",height:"852"})),(0,r.kt)("h2",{id:"5-data-model"},"5 data model"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(19765).Z,width:"1441",height:"673"})))}p.isMDXComponent=!0},19765:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/datamodel-7c788db64ee2c4f646d063d43a8675a6.jpg"},58949:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/inlong-manager-bedc276cd25b6838777882a3043f2c1d.png"},49359:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/interactive-7dd8e370ae4885484e6a4576cb5de26f.jpg"}}]);