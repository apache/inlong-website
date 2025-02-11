"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[74785],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),y=o,m=u["".concat(p,".").concat(y)]||u[y]||s[y]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},15372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const a={title:"Deployment",sidebar_position:2},i=void 0,l={unversionedId:"modules/dataproxy/deployment",id:"modules/dataproxy/deployment",title:"Deployment",description:"All deploying files at inlong-dataproxy directory.",source:"@site/docs/modules/dataproxy/deployment.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/deployment",permalink:"/docs/next/modules/dataproxy/deployment",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/dataproxy/deployment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/modules/dataproxy/overview"},next:{title:"Configuration",permalink:"/docs/next/modules/dataproxy/configuration"}},p={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Configure Manager and Audit URL",id:"configure-manager-and-audit-url",level:3},{value:"Start",id:"start",level:2},{value:"Check",id:"check",level:2}],d={toc:c},u="wrapper";function s(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"All deploying files at ",(0,o.yg)("inlineCode",{parentName:"p"},"inlong-dataproxy")," directory."),(0,o.yg)("h2",{id:"configuration"},"Configuration"),(0,o.yg)("h3",{id:"configure-manager-and-audit-url"},"Configure Manager and Audit URL"),(0,o.yg)("p",null,"configuration file: ",(0,o.yg)("inlineCode",{parentName:"p"},"conf/common.properties"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"# local IP\nproxy.local.ip=127.0.0.1\n# manager address\nmanager.hosts=127.0.0.1:8083\n# audit proxy address\naudit.proxys=127.0.0.1:10081\n")),(0,o.yg)("h2",{id:"start"},"Start"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"# If using Pulsar or Kafka to cache data\nbash +x bin/dataproxy-start.sh\n# If using Inlong TubeMQ to cache data\n# bash +x bin/dataproxy-start.sh tubemq\n")),(0,o.yg)("h2",{id:"check"},"Check"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"telnet 127.0.0.1 46801\n")))}s.isMDXComponent=!0}}]);