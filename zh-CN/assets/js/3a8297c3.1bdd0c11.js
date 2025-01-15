"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[86387],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),g=a,y=d["".concat(s,".").concat(g)]||d[g]||c[g]||l;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},25609:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const l={title:"\u603b\u89c8",sidebar_position:1},o=void 0,i={unversionedId:"modules/sort-standalone/overview",id:"version-2.0.0/modules/sort-standalone/overview",title:"\u603b\u89c8",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0.0/modules/sort-standalone/overview.md",sourceDirName:"modules/sort-standalone",slug:"/modules/sort-standalone/overview",permalink:"/zh-CN/docs/2.0.0/modules/sort-standalone/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/modules/sort-standalone/overview.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{title:"\u603b\u89c8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/2.0.0/modules/dashboard/deployment"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/2.0.0/modules/sort-standalone/deployment"}},s={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u591a\u79df\u6237\u7cfb\u7edf",id:"\u591a\u79df\u6237\u7cfb\u7edf",level:3},{value:"\u5206\u53d1\u4efb\u52a1\u652f\u6301\u52a8\u6001\u66f4\u65b0",id:"\u5206\u53d1\u4efb\u52a1\u652f\u6301\u52a8\u6001\u66f4\u65b0",level:3},{value:"\u7f13\u5b58\u5c42\u652f\u6301\u7684\u6d88\u606f\u961f\u5217",id:"\u7f13\u5b58\u5c42\u652f\u6301\u7684\u6d88\u606f\u961f\u5217",level:3},{value:"\u652f\u6301\u7684\u6570\u636e\u5b58\u50a8",id:"\u652f\u6301\u7684\u6570\u636e\u5b58\u50a8",level:3},{value:"\u672a\u6765\u89c4\u5212",id:"\u672a\u6765\u89c4\u5212",level:3},{value:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u7f13\u5b58\u5c42\u6d88\u606f\u961f\u5217",id:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u7f13\u5b58\u5c42\u6d88\u606f\u961f\u5217",level:4},{value:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u5b58\u50a8",id:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u5b58\u50a8",level:4},{value:"\u652f\u6301\u66f4\u591a\u79cd\u5199\u5165Apache Hive\u7684\u6587\u4ef6\u683c\u5f0f",id:"\u652f\u6301\u66f4\u591a\u79cd\u5199\u5165apache-hive\u7684\u6587\u4ef6\u683c\u5f0f",level:4}],p={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.yg)("p",null,"Inlong-sort-standalone\u662f\u4e00\u4e2a\u8d1f\u8d23\u5c06\u7528\u6237\u4e0a\u62a5\u7684\u6570\u636e\u6d41\u4ece\u7f13\u5b58\u5c42\u6d88\u8d39\u51fa\u6765\uff0c\u5206\u53d1\u5230\u4e0d\u540c\u6570\u636e\u5b58\u50a8\u7684\u6a21\u5757\uff0c\u652f\u6301Hive\u3001ElasticSearch\u3001CLS\u7b49\u591a\u79cd\u6570\u636e\u5b58\u50a8\u3002",(0,a.yg)("br",{parentName:"p"}),"\n","Inlong-sort-standalone\u4f9d\u8d56inlong-manager\u8fdb\u884c\u7cfb\u7edf\u5143\u6570\u636e\u7684\u7ba1\u7406\uff0cInlong-sort-standalone\u6309\u96c6\u7fa4\u90e8\u7f72\uff0c\u6309\u76ee\u6807\u5b58\u50a8\u805a\u5408\u5206\u53d1\u4efb\u52a1\u3002"),(0,a.yg)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,a.yg)("h3",{id:"\u591a\u79df\u6237\u7cfb\u7edf"},"\u591a\u79df\u6237\u7cfb\u7edf"),(0,a.yg)("p",null,"inlong-sort-standalone\u652f\u6301\u591a\u79df\u6237\uff0c\u4e00\u4e2ainlong-sort-standalone\u96c6\u7fa4\u53ef\u4ee5\u627f\u8f7d\u4e0d\u540c\u79df\u6237\u7684\u5206\u53d1\u4efb\u52a1\uff0c\u5206\u53d1\u4efb\u52a1\u4eceInlong-manager\u83b7\u53d6\u3002",(0,a.yg)("br",{parentName:"p"}),"\n","\u6bcf\u4e2a\u5206\u53d1\u4efb\u52a1\u8d1f\u8d23\u5c06\u591a\u4e2a\u6570\u636e\u6d41\u5206\u53d1\u5230\u4e00\u4e2a\u6570\u636e\u5b58\u50a8\uff0c\u7528\u6237\u53ea\u9700\u8981\u5728Inlong-manager\u7684\u524d\u7aef\u9875\u9762\u8fdb\u884c\u914d\u7f6e\uff0c\u6307\u5b9a\u6570\u636e\u6d41\u5206\u53d1\u5230\u5177\u4f53\u6570\u636e\u5b58\u50a8\u3002",(0,a.yg)("br",{parentName:"p"}),"\n","\u4e3e\u4f8b\uff1aInlong\u6570\u636e\u6d41d1\u548cd2\uff0c\u90fd\u5206\u53d1Hive\u96c6\u7fa4H1\uff0cd1\u8fd8\u5206\u53d1\u5230ElasticSearch\u96c6\u7fa4E1\uff0cd2\u8fd8\u5206\u53d1\u5230CLS\u96c6\u7fa4C1\uff0c\u90a3\u4e48inlong-sort-standalone\u96c6\u7fa4\u4f1a\u6536\u5230\u4e09\u4e2a\u5206\u53d1\u4efb\u52a1\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"H1\u5206\u53d1\u4efb\u52a1\u6d88\u8d39d1\u548cd2\uff0c\u5206\u53d1\u5230Hive\u96c6\u7fa4H1\uff1b"),(0,a.yg)("li",{parentName:"ul"},"E1\u5206\u53d1\u4efb\u52a1\u6d88\u8d39d1\uff0c\u5206\u53d1\u5230ElasticSearch\u96c6\u7fa4E1\uff1b"),(0,a.yg)("li",{parentName:"ul"},"C1\u5206\u53d1\u4efb\u52a1\u6d88\u8d39d2\uff0c\u5206\u53d1\u5230CLS\u96c6\u7fa4C1\u3002")),(0,a.yg)("h3",{id:"\u5206\u53d1\u4efb\u52a1\u652f\u6301\u52a8\u6001\u66f4\u65b0"},"\u5206\u53d1\u4efb\u52a1\u652f\u6301\u52a8\u6001\u66f4\u65b0"),(0,a.yg)("p",null,"inlong-sort-standalone\u652f\u6301\u52a8\u6001\u66f4\u65b0\u5206\u53d1\u4efb\u52a1\uff0c\u6bd4\u5982Inlong\u6570\u636e\u6d41\u6240\u5728\u6570\u636e\u6e90\u7684\u4fe1\u606f\uff0c\u6570\u636e\u6d41schema\u4fe1\u606f\uff0c\u76ee\u6807\u6570\u636e\u5b58\u50a8\u7684\u4fe1\u606f\u3002",(0,a.yg)("br",{parentName:"p"}),"\n","\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cInlong\u6570\u636e\u6d41\u65b0\u589e\u5206\u53d1\uff0c\u4f1a\u4ece\u7f13\u5b58\u5c42\u7684\u6700\u65b0\u4f4d\u7f6e\u5f00\u59cb\u6d88\u8d39\uff1b",(0,a.yg)("br",{parentName:"p"}),"\n","Inlong\u6570\u636e\u6d41\u5206\u53d1\u4e0b\u7ebf\u540e\u91cd\u65b0\u4e0a\u7ebf\uff0c\u5982\u679c\u4e0b\u7ebf\u65f6\u7684\u6d88\u8d39\u4f4d\u7f6e\u8fd8\u5728\u7f13\u5b58\u5c42\u7684\u751f\u547d\u5468\u671f\u5185\uff0c\u5219\u4ece\u4e0b\u7ebf\u65f6\u7684\u6d88\u8d39\u4f4d\u7f6e\u7ee7\u7eed\u6d88\u8d39\uff1b",(0,a.yg)("br",{parentName:"p"}),"\n","\u5982\u679c\u4e0b\u7ebf\u65f6\u7684\u6d88\u8d39\u4f4d\u7f6e\u5df2\u4e0d\u5728\u7f13\u5b58\u5c42\u7684\u751f\u547d\u5468\u671f\u5185\uff0c\u5219\u4ece\u7f13\u5b58\u5c42\u7684\u6700\u65b0\u4f4d\u7f6e\u5f00\u59cb\u6d88\u8d39\u3002  "),(0,a.yg)("h3",{id:"\u7f13\u5b58\u5c42\u652f\u6301\u7684\u6d88\u606f\u961f\u5217"},"\u7f13\u5b58\u5c42\u652f\u6301\u7684\u6d88\u606f\u961f\u5217"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Inlong-tubemq"),(0,a.yg)("li",{parentName:"ul"},"Apache Pulsar")),(0,a.yg)("h3",{id:"\u652f\u6301\u7684\u6570\u636e\u5b58\u50a8"},"\u652f\u6301\u7684\u6570\u636e\u5b58\u50a8"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Apache Hive\uff08\u5f53\u524d\u53ea\u652f\u6301sequence\u6587\u4ef6\u683c\u5f0f\uff09"),(0,a.yg)("li",{parentName:"ul"},"Apache Pulsar"),(0,a.yg)("li",{parentName:"ul"},"Apache Kafka")),(0,a.yg)("h3",{id:"\u672a\u6765\u89c4\u5212"},"\u672a\u6765\u89c4\u5212"),(0,a.yg)("h4",{id:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u7f13\u5b58\u5c42\u6d88\u606f\u961f\u5217"},"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u7f13\u5b58\u5c42\u6d88\u606f\u961f\u5217"),(0,a.yg)("p",null,"Apache Kafka\u7b49\u3002"),(0,a.yg)("h4",{id:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u5b58\u50a8"},"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u5b58\u50a8"),(0,a.yg)("p",null,"Hbase\uff0cElasticSearch\u7b49\u3002"),(0,a.yg)("h4",{id:"\u652f\u6301\u66f4\u591a\u79cd\u5199\u5165apache-hive\u7684\u6587\u4ef6\u683c\u5f0f"},"\u652f\u6301\u66f4\u591a\u79cd\u5199\u5165Apache Hive\u7684\u6587\u4ef6\u683c\u5f0f"),(0,a.yg)("p",null,"ORC file\u7b49\u3002"))}c.isMDXComponent=!0}}]);