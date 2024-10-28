"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[90109],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84948:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(58168),o=(r(96540),r(15680));const a={title:"HTTP API\u4ecb\u7ecd",sidebar_position:12},i=void 0,c={unversionedId:"modules/tubemq/http_access_api",id:"version-2.0.0/modules/tubemq/http_access_api",title:"HTTP API\u4ecb\u7ecd",description:"HTTP API\u662fMaster\u6216\u8005Broker\u5bf9\u5916\u529f\u80fd\u66b4\u9732\u7684\u63a5\u53e3\uff0c\u7ba1\u63a7\u53f0\u7684\u5404\u9879\u64cd\u4f5c\u90fd\u662f\u57fa\u4e8e\u8fd9\u4e9bAPI\u8fdb\u884c\uff1b\u5982\u679c\u6709\u6700\u65b0\u7684\u529f\u80fd\uff0c\u6216\u8005\u7ba1\u63a7\u53f0\u6ca1\u6709\u6db5\u76d6\u7684\u529f\u80fd\uff0c\u4e1a\u52a1\u90fd\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u8c03\u7528HTTP API\u63a5\u53e3\u5b8c\u6210\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0.0/modules/tubemq/http_access_api.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/http_access_api",permalink:"/zh-CN/docs/modules/tubemq/http_access_api",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/modules/tubemq/http_access_api.md",tags:[],version:"2.0.0",sidebarPosition:12,frontMatter:{title:"HTTP API\u4ecb\u7ecd",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"\u9519\u8bef\u7801\u5b9a\u4e49",permalink:"/zh-CN/docs/modules/tubemq/error_code"},next:{title:"TubeMQ\u6307\u6807",permalink:"/zh-CN/docs/modules/tubemq/tubemq_metrics"}},s={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"HTTP API\u662fMaster\u6216\u8005Broker\u5bf9\u5916\u529f\u80fd\u66b4\u9732\u7684\u63a5\u53e3\uff0c\u7ba1\u63a7\u53f0\u7684\u5404\u9879\u64cd\u4f5c\u90fd\u662f\u57fa\u4e8e\u8fd9\u4e9bAPI\u8fdb\u884c\uff1b\u5982\u679c\u6709\u6700\u65b0\u7684\u529f\u80fd\uff0c\u6216\u8005\u7ba1\u63a7\u53f0\u6ca1\u6709\u6db5\u76d6\u7684\u529f\u80fd\uff0c\u4e1a\u52a1\u90fd\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u8c03\u7528HTTP API\u63a5\u53e3\u5b8c\u6210\u3002"),(0,o.yg)("p",null,"\u8be5\u90e8\u5206\u63a5\u53e3\u4e00\u5171\u67094\u4e2a\u90e8\u5206\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Master\u5143\u6570\u636e\u914d\u7f6e\u76f8\u5173\u7684\u64cd\u4f5c\u63a5\u53e3\uff0c\u63a5\u53e3\u6570\u91cf 24\u4e2a"),(0,o.yg)("li",{parentName:"ul"},"Master\u6d88\u8d39\u6743\u9650\u64cd\u4f5c\u63a5\u53e3\uff0c\u63a5\u53e3\u6570\u91cf 33\u4e2a "),(0,o.yg)("li",{parentName:"ul"},"Master\u8ba2\u9605\u5173\u7cfb\u63a5\u53e3\uff0c\u63a5\u53e3\u6570\u91cf 2\u4e2a"),(0,o.yg)("li",{parentName:"ul"},"Broker\u76f8\u5173\u64cd\u4f5c\u63a5\u53e3\u5b9a\u4e49\uff0c\u63a5\u53e3\u6570\u91cf 6\u4e2a\n",(0,o.yg)("img",{src:r(24518).A,width:"1920",height:"550"}))),(0,o.yg)("p",null,"\u7531\u4e8e\u63a5\u53e3\u4f17\u591a\u4e14\u53c2\u6570\u7e41\u6742\uff0cmd\u683c\u5f0f\u4e0d\u80fd\u6bd4\u8f83\u597d\u7684\u8868\u8fbe\uff0c\u56e0\u800c\u4ee5excel\u9644\u4ef6\u5f62\u5f0f\u63d0\u4f9b\u7ed9\u5230\u5927\u5bb6\uff1a"),(0,o.yg)("a",{target:"_blank",href:"/appendixfiles/http_access_api_definition_cn.xls"},"TubeMQ HTTP API"),(0,o.yg)("hr",null),(0,o.yg)("a",{href:"#top"},"Back to top"))}m.isMDXComponent=!0},24518:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/http-api-4e87591b4f9c3ccfc757e8c5ebc7de74.png"}}]);