"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[67472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Release 1.7.0",author:"Charles Zhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},i=void 0,s={permalink:"/blog/2023/05/19/release-1.7.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2023-05-19-release-1.7.0.md",source:"@site/blog/2023-05-19-release-1.7.0.md",title:"Release 1.7.0",description:"Apache InLong recently released version 1.7.0, which closed about 150+ issues, including 3+ major features and 40+ optimizations. The main features include support for sending data directly to Kafka, MySQL all-database migration with schema change support, GH-OST awareness for MySQL all-database migration, the addition of 4 batch import modes (CSV, SQL, JSON, and Excel), simplification of command line tool for creating data stream configurations, and refactoring of the Dashboard layout.",date:"2023-05-19T00:00:00.000Z",formattedDate:"May 19, 2023",tags:[{label:"Apache InLong",permalink:"/blog/tags/apache-in-long"},{label:"Version",permalink:"/blog/tags/version"}],readingTime:7.84,hasTruncateMarker:!0,authors:[{name:"Charles Zhang",url:"https://github.com/dockerzhang",imageURL:"https://avatars.githubusercontent.com/u/18047329?v=4"}],frontMatter:{title:"Release 1.7.0",author:"Charles Zhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},nextItem:{title:"Release 1.6.0",permalink:"/blog/2023/03/23/release-1.6.0"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Apache InLong recently released version 1.7.0, which closed about 150+ issues, including 3+ major features and 40+ optimizations. The main features include support for sending data directly to Kafka, MySQL all-database migration with schema change support, GH-OST awareness for MySQL all-database migration, the addition of 4 batch import modes (CSV, SQL, JSON, and Excel), simplification of command line tool for creating data stream configurations, and refactoring of the Dashboard layout."))}m.isMDXComponent=!0}}]);