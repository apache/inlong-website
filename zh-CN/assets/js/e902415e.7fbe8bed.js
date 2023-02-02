"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1375],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(b,i(i({ref:t},d),{},{components:r})):n.createElement(b,i({ref:t},d))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},i=void 0,s={unversionedId:"modules/dashboard/quick_start",id:"version-1.5.0/modules/dashboard/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u51c6\u5907\u955c\u50cf",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.5.0/modules/dashboard/quick_start.md",sourceDirName:"modules/dashboard",slug:"/modules/dashboard/quick_start",permalink:"/zh-CN/docs/modules/dashboard/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/modules/dashboard/quick_start.md",tags:[],version:"1.5.0",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6982\u89c8",permalink:"/zh-CN/docs/modules/dashboard/overview"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/modules/sort-standalone/overview"}},l={},c=[{value:"\u51c6\u5907\u955c\u50cf",id:"\u51c6\u5907\u955c\u50cf",level:2},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u51c6\u5907\u955c\u50cf"},"\u51c6\u5907\u955c\u50cf"),(0,o.kt)("p",null,"\u4ece\u4ed3\u5e93\u62c9\u8d77\u6700\u65b0\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull inlong/dashboard:latest\n")),(0,o.kt)("p",null,"\u6216\u8005\u4ece\u6e90\u7801\u7f16\u8bd1\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mvn package -DskipTests -Pdocker -pl inlong-dashboard\n")),(0,o.kt)("h2",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# MANAGER_API_ADDRESS \u73af\u5883\u53d8\u91cf \u4f7f\u7528inlong-manager \u90e8\u7f72\u5730\u5740\u66ff\u6362\ndocker run -d --name dashboard -e MANAGER_API_ADDRESS=127.0.0.1:8083 -p 80:80 inlong/dashboard\n")))}u.isMDXComponent=!0}}]);