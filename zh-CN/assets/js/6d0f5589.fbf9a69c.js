"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[29384],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,h=s["".concat(c,".").concat(m)]||s[m]||g[m]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(58168),o=(n(96540),n(15680));const a={title:"InLong Sort ETL \u65b9\u6848\u89e3\u6790",author:"Oneal65",author_url:"https://github.com/Oneal65",author_image_url:"https://avatars.githubusercontent.com/u/13121552?v=4",tags:["Apache InLong","Sort"]},l="\u57fa\u4e8e Apache Flink SQL \u7684 InLong Sort ETL \u65b9\u6848\u89e3\u6790",i={permalink:"/zh-CN/blog/2022/06/16/inlong-sort-etl",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2022-06-16-inlong-sort-etl.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-06-16-inlong-sort-etl.md",title:"InLong Sort ETL \u65b9\u6848\u89e3\u6790",description:"1. \u80cc\u666f",date:"2022-06-16T00:00:00.000Z",formattedDate:"2022\u5e746\u670816\u65e5",tags:[{label:"Apache InLong",permalink:"/zh-CN/blog/tags/apache-in-long"},{label:"Sort",permalink:"/zh-CN/blog/tags/sort"}],readingTime:12.85,hasTruncateMarker:!0,authors:[{name:"Oneal65",url:"https://github.com/Oneal65",imageURL:"https://avatars.githubusercontent.com/u/13121552?v=4"}],frontMatter:{title:"InLong Sort ETL \u65b9\u6848\u89e3\u6790",author:"Oneal65",author_url:"https://github.com/Oneal65",author_image_url:"https://avatars.githubusercontent.com/u/13121552?v=4",tags:["Apache InLong","Sort"]},prevItem:{title:"1.2.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2022/06/22/release-1.2.0"},nextItem:{title:"1.1.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2022/04/25/release-1.1.0"}},c={authorsImageUrls:[void 0]},u=[{value:"1. \u80cc\u666f",id:"1-\u80cc\u666f",level:2}],p={toc:u},s="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(s,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"1-\u80cc\u666f"},"1. \u80cc\u666f"),(0,o.yg)("p",null,"\u968f\u7740 Apache InLong(incubating) \u7684\u7528\u6237\u548c\u5f00\u53d1\u8005\u9010\u6e10\u589e\u591a\uff0c\u66f4\u4e30\u5bcc\u7684\u4f7f\u7528\u573a\u666f\u548c\u4f4e\u6210\u672c\u8fd0\u8425\u8bc9\u6c42\u8d8a\u6765\u8d8a\u5f3a\u70c8\uff0c\u5176\u4e2d\uff0cInLong \u5168\u94fe\u8def\u589e\u52a0 Transform\uff08T\uff09\u7684\u9700\u6c42\u53cd\u9988\u6700\u591a\u3002\u7ecf\u8fc7@yunqingmoswu\u3001@EMsnap\u3001@gong\u3001@thexiay \u793e\u533a\u5f00\u53d1\u8005\u7684\u8c03\u7814\u548c\u8bbe\u8ba1\uff0c\u5b8c\u6210\u4e86\u57fa\u4e8e Flink SQL \u7684 InLong Sort ETL \u65b9\u6848\uff0c\u672c\u6587\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u8be5\u65b9\u6848\u7684\u5b9e\u73b0\u7ec6\u8282\u3002"))}g.isMDXComponent=!0}}]);