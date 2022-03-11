"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4969],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12221:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),l=["components"],a={title:"\u603b\u89c8",sidebar_position:1},u="\u7b80\u4ecb",c={unversionedId:"modules/sort/overview",id:"modules/sort/overview",title:"\u603b\u89c8",description:"inlong-sort\u662f\u4e00\u4e2a\u57fa\u4e8eflink\u7684ETL\u7cfb\u7edf\uff0c\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\uff0c\u652f\u6301\u7b80\u5355\u7684\u5b57\u6bb5\u62bd\u53d6\uff0c\u652f\u6301\u591a\u79cd\u5b58\u50a8\u7cfb\u7edf\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/sort/overview.md",sourceDirName:"modules/sort",slug:"/modules/sort/overview",permalink:"/zh-CN/docs/next/modules/sort/overview",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/sort/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u603b\u89c8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"TubeMQ VS Kafka",permalink:"/zh-CN/docs/next/modules/tubemq/tubemq_perf_test_vs_Kafka_cn"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/next/modules/sort/quick_start"}},s={},p=[{value:"\u652f\u6301\u7684\u6570\u636e\u6e90",id:"\u652f\u6301\u7684\u6570\u636e\u6e90",level:2},{value:"\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf",id:"\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf",level:2},{value:"\u4e00\u4e9b\u5c40\u9650",id:"\u4e00\u4e9b\u5c40\u9650",level:2},{value:"\u672a\u6765\u89c4\u5212",id:"\u672a\u6765\u89c4\u5212",level:2},{value:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u6e90",id:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u6e90",level:3},{value:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u5b58\u50a8",id:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u5b58\u50a8",level:3},{value:"\u652f\u6301\u66f4\u591a\u79cd\u5199\u5165hive\u7684\u6587\u4ef6\u683c\u5f0f",id:"\u652f\u6301\u66f4\u591a\u79cd\u5199\u5165hive\u7684\u6587\u4ef6\u683c\u5f0f",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("p",null,"inlong-sort\u662f\u4e00\u4e2a\u57fa\u4e8eflink\u7684ETL\u7cfb\u7edf\uff0c\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\uff0c\u652f\u6301\u7b80\u5355\u7684\u5b57\u6bb5\u62bd\u53d6\uff0c\u652f\u6301\u591a\u79cd\u5b58\u50a8\u7cfb\u7edf\u3002\ninlong-sort\u4f9d\u8d56inlong-manager\u8fdb\u884c\u7cfb\u7edf\u5143\u6570\u636e\u7684\u7ba1\u7406\u3002"),(0,i.kt)("h1",{id:"\u7279\u6027"},"\u7279\u6027"),(0,i.kt)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90"},"\u652f\u6301\u7684\u6570\u636e\u6e90"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pulsar")),(0,i.kt)("h2",{id:"\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf"},"\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"hive\uff08\u5f53\u524d\u652f\u6301parquet\u3001orc\u548ctext\u683c\u5f0f\uff09"),(0,i.kt)("li",{parentName:"ul"},"kafka"),(0,i.kt)("li",{parentName:"ul"},"clickhouse"),(0,i.kt)("li",{parentName:"ul"},"iceberg")),(0,i.kt)("h2",{id:"\u4e00\u4e9b\u5c40\u9650"},"\u4e00\u4e9b\u5c40\u9650"),(0,i.kt)("p",null,"\u5f53\u524dinlong-sort\u5728ETL\u7684transform\u9636\u6bb5\uff0c\u53ea\u652f\u6301\u7b80\u5355\u7684\u5b57\u6bb5\u62bd\u53d6\u529f\u80fd\uff0c\u4e00\u4e9b\u590d\u6742\u529f\u80fd\u6682\u4e0d\u652f\u6301\u3002"),(0,i.kt)("h2",{id:"\u672a\u6765\u89c4\u5212"},"\u672a\u6765\u89c4\u5212"),(0,i.kt)("h3",{id:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u6e90"},"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u6e90"),(0,i.kt)("p",null,"kafka\u7b49"),(0,i.kt)("h3",{id:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u5b58\u50a8"},"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u5b58\u50a8"),(0,i.kt)("p",null,"Hbase\uff0cElastic Search\u7b49"),(0,i.kt)("h3",{id:"\u652f\u6301\u66f4\u591a\u79cd\u5199\u5165hive\u7684\u6587\u4ef6\u683c\u5f0f"},"\u652f\u6301\u66f4\u591a\u79cd\u5199\u5165hive\u7684\u6587\u4ef6\u683c\u5f0f"),(0,i.kt)("p",null,"sequece file\u7b49"))}f.isMDXComponent=!0}}]);