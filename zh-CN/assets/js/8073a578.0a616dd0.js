"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[23681],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(n),g=r,s=u["".concat(p,".").concat(g)]||u[g]||c[g]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},86380:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u57fa\u672c\u6982\u5ff5",sidebar_position:1},i=void 0,o={unversionedId:"design_and_concept/basic_concept",id:"version-1.8.0/design_and_concept/basic_concept",title:"\u57fa\u672c\u6982\u5ff5",description:"| Name        | Description                                                  | Other                                         |",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.8.0/design_and_concept/basic_concept.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/basic_concept",permalink:"/zh-CN/docs/1.8.0/design_and_concept/basic_concept",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.8.0/design_and_concept/basic_concept.md",tags:[],version:"1.8.0",sidebarPosition:1,frontMatter:{title:"\u57fa\u672c\u6982\u5ff5",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/zh-CN/docs/1.8.0/introduction"},next:{title:"Format",permalink:"/zh-CN/docs/1.8.0/design_and_concept/the_format_in_inlong"}},p={},d=[],m={toc:d},u="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Other"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Standard"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6807\u51c6\u67b6\u6784\uff0c\u5305\u542b InLong Agent\u3001Manager\u3001MQ\u3001Sort\u3001Dashboard \u7b49\u6240\u6709 InLong \u7ec4\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u65f6\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"td"},"\u6570\u636e\u63a5\u5165"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"\u6570\u636e\u540c\u6b65"),"\u548c",(0,r.kt)("inlineCode",{parentName:"td"},"\u6570\u636e\u8ba2\u9605"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f7b\u91cf\u5316\u67b6\u6784\uff0c\u53ea\u5305\u542b InLong Sort \u4e00\u4e2a\u7ec4\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u642d\u914d Manager\uff0cDashboard \u4e00\u8d77\u4f7f\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f7b\u91cf\u5316\u67b6\u6784\u7b80\u5355\u3001\u7075\u6d3b\uff0c\u53ea\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"td"},"\u6570\u636e\u540c\u6b65"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u63a5\u5165"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u63a5\u5165\u662f\u5c06\u6570\u636e\u4ece\u6570\u636e\u6e90\u6c47\u805a\u5230\u540c\u4e00\u4e2a\u5b58\u50a8\u670d\u52a1\u7684\u8fc7\u7a0b\uff0c\u53ef\u7528\u4e8e\u8fdb\u4e00\u6b65\u6570\u636e\u67e5\u8be2\u548c\u5206\u6790"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u540c\u6b65"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u540c\u6b65\u662f\u5efa\u7acb\u6570\u636e\u6e90\u548c\u76ee\u6807\u6570\u636e\u5b58\u50a8\u4e4b\u95f4\u4e00\u81f4\u6027\u7684\u8fc7\u7a0b\uff0c\u53ef\u968f\u7740\u65f6\u95f4\u6301\u7eed\u534f\u8c03\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u8ba2\u9605"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u8ba2\u9605\u4e3a\u8ba2\u9605\u8005\u63d0\u4f9b\u4ed6\u4eec\u6709\u6743\u8bbf\u95ee\u7684\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Group"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6d41\u7ec4\uff0c\u5305\u542b\u591a\u4e2a\u6570\u636e\u6d41\uff0c\u4e00\u4e2a Group \u4ee3\u8868\u4e00\u4e2a\u6570\u636e\u4e1a\u52a1\u5355\u5143"),(0,r.kt)("td",{parentName:"tr",align:null},"Group \u6709 ID\u3001Name \u7b49\u5c5e\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6d41\uff0c\u4e00\u4e2a\u6570\u636e\u6d41\u6709\u5177\u4f53\u7684\u6570\u636e\u6e90\u3001\u6570\u636e\u683c\u5f0f\u548c\u6570\u636e\u6d41\u5411"),(0,r.kt)("td",{parentName:"tr",align:null},"Stream \u6709 ID\u3001Name\u3001\u6570\u636e\u5b57\u6bb5\u7b49\u5c5e\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u8282\u70b9\uff0c\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"td"},"Extract Node")," \u548c ",(0,r.kt)("inlineCode",{parentName:"td"},"Load Node"),"\uff0c\u5206\u522b\u4ee3\u8868\u6570\u636e\u6e90\u7c7b\u578b\u548c\u6570\u636e\u6d41\u5411\u76ee\u6807\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InLongMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"InLong \u6570\u636e\u683c\u5f0f\uff0c\u5982\u679c\u4ece\u6d88\u606f\u961f\u5217\u4e2d\u76f4\u63a5\u6d88\u8d39\uff0c\u9700\u8981\u5148\u8fdb\u884c ",(0,r.kt)("inlineCode",{parentName:"td"},"InLongMsg")," \u89e3\u6790"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\uff0c\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u53ef\u4ee5\u6784\u6210\u5355\u4e00\u96c6\u7fa4\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u96c6\u7fa4\u540d\u3001\u6807\u7b7e\uff0c\u6bcf\u4e2a\u7ec4\u4ef6\u5fc5\u8981\u4fe1\u606f\u7b49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6807\u7b7e\uff0c\u4e0d\u540c\u7ec4\u4ef6\u7684\u96c6\u7fa4\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u6807\u7b7e\uff0c\u4ee3\u8868\u4e00\u7ec4\u6570\u636e\u6d41\u6267\u884c\u5355\u5143"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u524d\u6807\u7b7e\u53ea\u9002\u7528\u4e8e\u96c6\u7fa4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Agent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6807\u51c6\u67b6\u6784\u4f7f\u7528 Agent \u8fdb\u884c\u6570\u636e\u91c7\u96c6\uff0cAgent \u4ee3\u8868\u4e0d\u540c\u7c7b\u578b\u7684\u91c7\u96c6\u80fd\u529b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u6587\u4ef6 Agent\u3001SQL Agent\u3001Binlog Agent \u7b49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DataProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u63a5\u6536\u5230\u7684\u6570\u636e\u8f6c\u53d1\u5230\u4e0d\u540c\u7684\u6d88\u606f\u961f\u5217"),(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u6570\u636e\u53d1\u9001\u963b\u585e\u548c\u843d\u76d8\u91cd\u53d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sort"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6d41\u5206\u62e3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3b\u8981\u6709\u57fa\u4e8e Flink \u7684 sort-flink\uff0csort-standalone \u672c\u5730\u5206\u62e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TubeMQ"),(0,r.kt)("td",{parentName:"tr",align:null},"InLong \u81ea\u5e26\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e5f\u53ef\u4ee5\u53eb Tube\uff0c\u62e5\u6709\u4f4e\u6210\u672c\u3001\u9ad8\u6027\u80fd\u7279\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5373 ",(0,r.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/"},"Apache Pulsar"),"\uff0c\u9ad8\u6027\u80fd\u3001\u9ad8\u4e00\u81f4\u6027\u6d88\u606f\u961f\u5217\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);