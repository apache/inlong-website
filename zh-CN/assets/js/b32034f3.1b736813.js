"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[31818],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return t?n.createElement(b,i(i({ref:r},c),{},{components:t})):n.createElement(b,i({ref:r},c))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19846:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));const a={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},i=void 0,l={unversionedId:"modules/dashboard/quick_start",id:"version-1.6.0/modules/dashboard/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u9009\u62e9 1\uff1aDocker \u90e8\u7f72",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.6.0/modules/dashboard/quick_start.md",sourceDirName:"modules/dashboard",slug:"/modules/dashboard/quick_start",permalink:"/zh-CN/docs/modules/dashboard/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.6.0/modules/dashboard/quick_start.md",tags:[],version:"1.6.0",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6982\u89c8",permalink:"/zh-CN/docs/modules/dashboard/overview"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/modules/sort-standalone/overview"}},s={},d=[{value:"\u9009\u62e9 1\uff1aDocker \u90e8\u7f72",id:"\u9009\u62e9-1docker-\u90e8\u7f72",level:2},{value:"\u51c6\u5907\u955c\u50cf",id:"\u51c6\u5907\u955c\u50cf",level:3},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:3},{value:"\u9009\u62e9 2\uff1aNginx \u90e8\u7f72",id:"\u9009\u62e9-2nginx-\u90e8\u7f72",level:2}],c={toc:d},p="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9009\u62e9-1docker-\u90e8\u7f72"},"\u9009\u62e9 1\uff1aDocker \u90e8\u7f72"),(0,o.kt)("h3",{id:"\u51c6\u5907\u955c\u50cf"},"\u51c6\u5907\u955c\u50cf"),(0,o.kt)("p",null,"\u4ece\u4ed3\u5e93\u62c9\u8d77\u6700\u65b0\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull inlong/dashboard:latest\n")),(0,o.kt)("h3",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# MANAGER_API_ADDRESS \u73af\u5883\u53d8\u91cf \u4f7f\u7528inlong-manager \u90e8\u7f72\u5730\u5740\u66ff\u6362\ndocker run -d --name dashboard -e MANAGER_API_ADDRESS=127.0.0.1:8083 -p 80:80 inlong/dashboard\n")),(0,o.kt)("h2",{id:"\u9009\u62e9-2nginx-\u90e8\u7f72"},"\u9009\u62e9 2\uff1aNginx \u90e8\u7f72"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-dashboard")," \u5b89\u88c5\u8def\u5f84\u548c Manager \u670d\u52a1\u5730\u5740\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"server {\nlisten       80;\nlisten       [::]:80;\nserver_name  _;\nroot         ${dashboard_installed_path};\n# API prefix of InlongManager\nlocation /inlong/manager {\nproxy_pass      http://{manager_api_address};\n}\n}\n")))}u.isMDXComponent=!0}}]);