"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[18632],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>d});var t=r(96540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(r),u=i,d=g["".concat(c,".").concat(u)]||g[u]||m[u]||o;return r?t.createElement(d,a(a({ref:n},p),{},{components:r})):t.createElement(d,a({ref:n},p))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[g]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62442:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=r(58168),i=(r(96540),r(15680));const o={title:"Sort \u81ea\u5b9a\u4e49 Flink Metrics \u6307\u6807",sidebar_position:4},a="Sort-Connector \u81ea\u5b9a\u4e49 Flink Metric \u6307\u6807",l={unversionedId:"development/extension_sort/custom_flink_metrics",id:"development/extension_sort/custom_flink_metrics",title:"Sort \u81ea\u5b9a\u4e49 Flink Metrics \u6307\u6807",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/extension_sort/custom_flink_metrics.md",sourceDirName:"development/extension_sort",slug:"/development/extension_sort/custom_flink_metrics",permalink:"/zh-CN/docs/next/development/extension_sort/custom_flink_metrics",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/development/extension_sort/custom_flink_metrics.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Sort \u81ea\u5b9a\u4e49 Flink Metrics \u6307\u6807",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u79bb\u7ebf\u540c\u6b65 Connector \u63d2\u4ef6\u6269\u5c55",permalink:"/zh-CN/docs/next/development/extension_sort/offline_data_sync"},next:{title:"Transform \u6269\u5c55 UDF",permalink:"/zh-CN/docs/next/development/extension_transform/transform_udf"}},c={},s=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u63d2\u5165\u81ea\u5b9a\u4e49 Flink Metric \u6307\u6807\u7684\u6b65\u9aa4",id:"\u63d2\u5165\u81ea\u5b9a\u4e49-flink-metric-\u6307\u6807\u7684\u6b65\u9aa4",level:2},{value:"1. \u521b\u5efa Metric \u5bf9\u8c61",id:"1-\u521b\u5efa-metric-\u5bf9\u8c61",level:3},{value:"2. \u7f16\u5199 <code>registerMetricsForXXX</code> \u65b9\u6cd5",id:"2-\u7f16\u5199-registermetricsforxxx-\u65b9\u6cd5",level:3},{value:"3. \u5728\u6784\u9020\u51fd\u6570\u4e2d\u8c03\u7528\u6ce8\u518c\u65b9\u6cd5",id:"3-\u5728\u6784\u9020\u51fd\u6570\u4e2d\u8c03\u7528\u6ce8\u518c\u65b9\u6cd5",level:3},{value:"4. \u7f16\u5199 Metric \u7684 getter\u3001setter \u548c\u64cd\u4f5c\u65b9\u6cd5",id:"4-\u7f16\u5199-metric-\u7684-gettersetter-\u548c\u64cd\u4f5c\u65b9\u6cd5",level:3},{value:"5. \u5728 <code>toString</code> \u65b9\u6cd5\u4e2d\u589e\u52a0\u65b0 Metric \u7684\u8f93\u51fa",id:"5-\u5728-tostring-\u65b9\u6cd5\u4e2d\u589e\u52a0\u65b0-metric-\u7684\u8f93\u51fa",level:3},{value:"6. \u5728\u5408\u9002\u4f4d\u7f6e\u63d2\u5165\u81ea\u5b9a\u4e49 Metric",id:"6-\u5728\u5408\u9002\u4f4d\u7f6e\u63d2\u5165\u81ea\u5b9a\u4e49-metric",level:3},{value:"\u6d4b\u8bd5\u548c\u9a8c\u8bc1",id:"\u6d4b\u8bd5\u548c\u9a8c\u8bc1",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],p={toc:s},g="wrapper";function m(e){let{components:n,...r}=e;return(0,i.yg)(g,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"sort-connector-\u81ea\u5b9a\u4e49-flink-metric-\u6307\u6807"},"Sort-Connector \u81ea\u5b9a\u4e49 Flink Metric \u6307\u6807"),(0,i.yg)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,i.yg)("p",null,"InLong Sort \u6846\u67b6\u5141\u8bb8\u7528\u6237\u5728\u4e0d\u540c\u7684 Connector \u4e2d\u5b9a\u4e49\u548c\u63d2\u5165\u81ea\u5b9a\u4e49 Flink Metric \u6307\u6807\uff0c\u4ee5\u4fbf\u5bf9\u6570\u636e\u5904\u7406\u8fc7\u7a0b\u8fdb\u884c\u6df1\u5165\u76d1\u63a7\u3002\u81ea\u5b9a\u4e49\u6307\u6807\u4e00\u822c\u7528\u4e8e\u8861\u91cf\uff08\u53cd\uff09\u5e8f\u5217\u5316\u6210\u529f/\u5931\u8d25\u6b21\u6570\u3001\u5ef6\u8fdf\u65f6\u95f4\u3001\u5feb\u7167\u72b6\u6001\u3001\u4e8b\u52a1\u5b8c\u6210\u72b6\u6001\u7b49\u5173\u952e\u6027\u80fd\u6307\u6807\u3002\u8fd9\u4e9b\u6307\u6807\u901a\u8fc7 ",(0,i.yg)("inlineCode",{parentName:"p"},"SourceExactlyMetric")," \u548c ",(0,i.yg)("inlineCode",{parentName:"p"},"SinkExactlyMetric")," \u5bf9\u8c61\u5728\u5408\u9002\u7684\u903b\u8f91\u8282\u70b9\u4e2d\u8fdb\u884c\u8bb0\u5f55\u548c\u4e0a\u62a5\u3002"),(0,i.yg)("h2",{id:"\u63d2\u5165\u81ea\u5b9a\u4e49-flink-metric-\u6307\u6807\u7684\u6b65\u9aa4"},"\u63d2\u5165\u81ea\u5b9a\u4e49 Flink Metric \u6307\u6807\u7684\u6b65\u9aa4"),(0,i.yg)("p",null,"\u4e3a\u4e86\u5728\u65b0\u7684 Connector \u4e2d\u521b\u5efa\u5e76\u63d2\u5165\u81ea\u5b9a\u4e49 Flink Metric \u6307\u6807\uff0c\u901a\u5e38\u9700\u8981\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u3002\u4ee5\u53cd\u5e8f\u5217\u5316\u8fc7\u7a0b\u4e2d\u7684\u9519\u8bef\u8ba1\u6570 ",(0,i.yg)("inlineCode",{parentName:"p"},"numDeserializeError")," \u4ee5\u53ca ",(0,i.yg)("inlineCode",{parentName:"p"},"inlong-sort/sort-flink/sort-flink-v1.15/sort-connectors/postgres-cdc")," \u4e3a\u4f8b\uff0c\u4ee5\u4e0b\u6b65\u9aa4\u5c06\u8be6\u7ec6\u8bf4\u660e\u5982\u4f55\u5728 InLong Sort \u6846\u67b6\u4e2d\u63d2\u5165\u81ea\u5b9a\u4e49 Metric\u3002"),(0,i.yg)("h3",{id:"1-\u521b\u5efa-metric-\u5bf9\u8c61"},"1. \u521b\u5efa Metric \u5bf9\u8c61"),(0,i.yg)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u5728 ",(0,i.yg)("inlineCode",{parentName:"p"},"SourceExactlyMetric")," \u6216 ",(0,i.yg)("inlineCode",{parentName:"p"},"SinkExactlyMetric")," \u7c7b\u4e2d\u6dfb\u52a0\u65b0\u7684 Flink Metric \u5bf9\u8c61\u3002Metric \u5bf9\u8c61\u901a\u5e38\u53ef\u4ee5\u662f ",(0,i.yg)("inlineCode",{parentName:"p"},"Counter"),"\u3001",(0,i.yg)("inlineCode",{parentName:"p"},"Gauge"),"\u3001",(0,i.yg)("inlineCode",{parentName:"p"},"Meter")," \u7b49\u7c7b\u578b\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u9009\u62e9\u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u8bb0\u5f55\u53cd\u5e8f\u5217\u5316\u9519\u8bef\u6b21\u6570\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"Counter"),"\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a\u7c7b\u7684\u6210\u5458\u53d8\u91cf\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"private Counter numDeserializeError;\n")),(0,i.yg)("h3",{id:"2-\u7f16\u5199-registermetricsforxxx-\u65b9\u6cd5"},"2. \u7f16\u5199 ",(0,i.yg)("inlineCode",{parentName:"h3"},"registerMetricsForXXX")," \u65b9\u6cd5"),(0,i.yg)("p",null,"\u4e3a\u4e86\u521d\u59cb\u5316\u5e76\u6ce8\u518c\u6b64 Metric \u5bf9\u8c61\uff0c\u9700\u8981\u7f16\u5199\u4e00\u4e2a ",(0,i.yg)("inlineCode",{parentName:"p"},"registerMetricsForNumDeserializeError")," \u65b9\u6cd5\u3002\u5728\u6b64\u65b9\u6cd5\u4e2d\uff0c\u901a\u8fc7 ",(0,i.yg)("inlineCode",{parentName:"p"},"registerCounter")," \u5c06\u8be5 ",(0,i.yg)("inlineCode",{parentName:"p"},"Counter")," \u5bf9\u8c61\u6ce8\u518c\u5230 Flink \u7684 Metric \u7cfb\u7edf\uff0c\u4ee5\u4fbf\u7cfb\u7edf\u80fd\u591f\u8ddf\u8e2a\u6b64 Metric\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'public void registerMetricsForNumDeserializeError(Counter counter) {\n    numDeserializeError = registerCounter("numDeserializeError", counter);\n}\n')),(0,i.yg)("p",null,"\u5728\u8be5\u65b9\u6cd5\u4e2d\uff0c\u901a\u8fc7\u8c03\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"registerCounter")," \u65b9\u6cd5\uff0c\u5c06\u81ea\u5b9a\u4e49\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"Counter")," \u5bf9\u8c61\u4e0e Flink \u7684 Metric \u7cfb\u7edf\u76f8\u5173\u8054\uff0c\u5e76\u786e\u4fdd\u6b64 Metric \u80fd\u591f\u5728\u540e\u7eed\u7684\u6570\u636e\u5904\u7406\u8fc7\u7a0b\u4e2d\u88ab\u6b63\u786e\u8bb0\u5f55\u3002"),(0,i.yg)("h3",{id:"3-\u5728\u6784\u9020\u51fd\u6570\u4e2d\u8c03\u7528\u6ce8\u518c\u65b9\u6cd5"},"3. \u5728\u6784\u9020\u51fd\u6570\u4e2d\u8c03\u7528\u6ce8\u518c\u65b9\u6cd5"),(0,i.yg)("p",null,"\u5728\u7c7b\u7684\u6784\u9020\u51fd\u6570\u4e2d\uff0c\u6839\u636e\u4f20\u5165\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"MetricOption")," \u548c ",(0,i.yg)("inlineCode",{parentName:"p"},"MetricGroup")," \u53c2\u6570\uff0c\u8c03\u7528\u4e0a\u8ff0\u7f16\u5199\u7684\u6ce8\u518c\u65b9\u6cd5\u3002\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u5728\u5b9e\u4f8b\u5316\u65f6\uff0cMetric\u5bf9\u8c61\u88ab\u6b63\u786e\u521d\u59cb\u5316\u548c\u6ce8\u518c\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public SourceExactlyMetric(MetricOption option, MetricGroup metricGroup) {\n    this.metricGroup = metricGroup;\n    this.labels = option.getLabels();\n    registerMetricsForNumDeserializeError(new ThreadSafeCounter());\n}\n")),(0,i.yg)("p",null,"\u901a\u8fc7\u5728\u6784\u9020\u51fd\u6570\u4e2d\u8c03\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"registerMetricsForNumDeserializeError")," \u65b9\u6cd5\uff0c\u786e\u4fdd ",(0,i.yg)("inlineCode",{parentName:"p"},"numDeserializeError")," \u8ba1\u6570\u5668\u5728\u6bcf\u6b21\u5b9e\u4f8b\u5316\u65f6\u90fd\u5df2\u521d\u59cb\u5316\uff0c\u5e76\u51c6\u5907\u597d\u5728\u6570\u636e\u5904\u7406\u8fc7\u7a0b\u4e2d\u8bb0\u5f55\u53cd\u5e8f\u5217\u5316\u9519\u8bef\u3002"),(0,i.yg)("h3",{id:"4-\u7f16\u5199-metric-\u7684-gettersetter-\u548c\u64cd\u4f5c\u65b9\u6cd5"},"4. \u7f16\u5199 Metric \u7684 getter\u3001setter \u548c\u64cd\u4f5c\u65b9\u6cd5"),(0,i.yg)("p",null,"\u4e3a\u4e86\u5728\u5916\u90e8\u80fd\u591f\u64cd\u4f5c ",(0,i.yg)("inlineCode",{parentName:"p"},"numDeserializeError")," \u8ba1\u6570\u5668\uff0c\u8fd8\u9700\u7f16\u5199\u76f8\u5e94\u7684getter\u548c\u64cd\u4f5c\u65b9\u6cd5\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"numDeserializeError")," \u8ba1\u6570\u5668\u63d0\u4f9b\u4e00\u4e2a\u589e\u52a0\u8ba1\u6570\u7684\u65b9\u6cd5 ",(0,i.yg)("inlineCode",{parentName:"p"},"incNumDeserializeError")," \uff0c\u4ee5\u4fbf\u5728\u53cd\u5e8f\u5217\u5316\u8fc7\u7a0b\u53d1\u751f\u5f02\u5e38\u65f6\u8c03\u7528\u6b64\u65b9\u6cd5\u9012\u589e\u8ba1\u6570\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public void incNumDeserializeError() {\n    if (numDeserializeError != null) {\n        numDeserializeError.inc();\n    }\n}\n")),(0,i.yg)("p",null,"\u901a\u8fc7\u7f16\u5199\u8be5\u64cd\u4f5c\u65b9\u6cd5\uff0c\u53ef\u4ee5\u786e\u4fdd\u5728\u53cd\u5e8f\u5217\u5316\u51fa\u73b0\u9519\u8bef\u65f6\u80fd\u591f\u8c03\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"incNumDeserializeError")," \u9012\u589e\u9519\u8bef\u8ba1\u6570\u3002"),(0,i.yg)("h3",{id:"5-\u5728-tostring-\u65b9\u6cd5\u4e2d\u589e\u52a0\u65b0-metric-\u7684\u8f93\u51fa"},"5. \u5728 ",(0,i.yg)("inlineCode",{parentName:"h3"},"toString")," \u65b9\u6cd5\u4e2d\u589e\u52a0\u65b0 Metric \u7684\u8f93\u51fa"),(0,i.yg)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u8c03\u8bd5\u548c\u76d1\u63a7\u4ee5\u53ca\u4fdd\u8bc1\u4ee3\u7801\u5b8c\u6574\u6027\uff0c\u9700\u8981\u5728 ",(0,i.yg)("inlineCode",{parentName:"p"},"toString")," \u65b9\u6cd5\u4e2d\u589e\u52a0\u8be5\u81ea\u5b9a\u4e49 Metric \u7684\u8f93\u51fa\u4fe1\u606f\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'@Override\npublic String toString() {\n    return "SourceMetricData{" \n        + ", numDeserializeError=" + numDeserializeError.getCount()\n        + "}";\n}\n')),(0,i.yg)("h3",{id:"6-\u5728\u5408\u9002\u4f4d\u7f6e\u63d2\u5165\u81ea\u5b9a\u4e49-metric"},"6. \u5728\u5408\u9002\u4f4d\u7f6e\u63d2\u5165\u81ea\u5b9a\u4e49 Metric"),(0,i.yg)("p",null,"\u5728 Metric \u7c7b\u4e2d\u5b8c\u6210\u6ce8\u518c\u548c\u521d\u59cb\u5316\u540e\uff0c\u9700\u8981\u5728\u5408\u9002\u7684\u903b\u8f91\u8282\u70b9\u4e2d\u8c03\u7528\u8be5 Metric\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u5728\u53cd\u5e8f\u5217\u5316\u65b9\u6cd5\u4e2d\u8c03\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"incNumDeserializeError")," \u65b9\u6cd5\uff0c\u4ee5\u8bb0\u5f55\u6bcf\u6b21\u53cd\u5e8f\u5217\u5316\u9519\u8bef\u7684\u53d1\u751f\u3002\u6b64\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4ee3\u7801\u5b9e\u73b0\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void deserialize(SourceRecord record, Collector<RowData> out) throws Exception {\n    try {\n        // Execute deserialization logic\n    } catch (Exception e) {\n        // Increment error count on deserialization failure\n        // Ensure sourceExactlyMetric is not null\n        if(sourceExactlyMetric != null) {\n            sourceExactlyMetric.incNumDeserializeError();\n        }\n        throw e;\n    }\n}\n")),(0,i.yg)("p",null,"\u5728\u53cd\u5e8f\u5217\u5316\u8fc7\u7a0b\u4e2d\uff0c\u901a\u8fc7\u8c03\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"incNumDeserializeError")," \u65b9\u6cd5\uff0c\u786e\u4fdd\u6bcf\u6b21\u53cd\u5e8f\u5217\u5316\u5931\u8d25\u65f6\u90fd\u80fd\u589e\u52a0\u9519\u8bef\u8ba1\u6570\uff0c\u4ece\u800c\u51c6\u786e\u53cd\u6620\u53cd\u5e8f\u5217\u5316\u9519\u8bef\u7684\u9891\u7387\u3002"),(0,i.yg)("h2",{id:"\u6d4b\u8bd5\u548c\u9a8c\u8bc1"},"\u6d4b\u8bd5\u548c\u9a8c\u8bc1"),(0,i.yg)("p",null,"\u4f7f\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"sort-end-to-end-tests")," \u6d4b\u8bd5\uff0c\u4f4d\u4e8e ",(0,i.yg)("inlineCode",{parentName:"p"},"inlong-sort/sort-end-to-end-tests/")," \u76ee\u5f55\u4e0b\u3002"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"\u8bbe\u7f6e SQL \u4e2d\u7684 Metric \u6807\u7b7e"),"\uff1a\u5728\u6d4b\u8bd5SQL\u6587\u4ef6\u4e2d\u589e\u52a0 ",(0,i.yg)("inlineCode",{parentName:"p"},"inlong.metric.labels")," \u6807\u7b7e\uff0c\u786e\u4fdd Flink \u80fd\u8bc6\u522b Metric \u6807\u7b7e\uff1a\n\u4ee5 ",(0,i.yg)("inlineCode",{parentName:"p"},"sort-end-to-end-tests/sort-end-to-end-tests-v1.15/src/test/java/org/apache/inlong/sort/tests/Postgres2StarRocksTest.java")," \u4e2d\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"sort-end-to-end-tests/sort-end-to-end-tests-v1.15/src/test/resources/flinkSql/postgres_test.sql")," \u4e3a\u4f8b\uff1a"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_input1 (\n    `id` INT primary key,\n    name STRING,\n    description STRING\n) WITH (\n    'connector' = 'postgres-cdc-inlong',\n    'hostname' = 'postgres',\n    'port' = '5432',\n    'username' = 'flinkuser',\n    'password' = 'flinkpw',\n    'database-name' = 'test',\n    'table-name' = 'test_input1',\n    'schema-name' = 'public',\n    'decoding.plugin.name' = 'pgoutput',\n    'slot.name' = 'inlong_slot',\n    'debezium.slot.name' = 'inlong_slot',\n    -- Added portion\n    'inlong.metric.labels' = 'groupId=pggroup&streamId=pgStream&nodeId=pgNode'\n);\n\n-- \u5269\u4f59 Flink SQL \u4fdd\u6301\u4e0d\u53d8\u5373\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"\u914d\u7f6e\u65e5\u5fd7\u8f93\u51fa\u67e5\u770b Metric "),"\uff1a\u5728\u6d4b\u8bd5\u73af\u5883\u914d\u7f6e\u4e2d\u542f\u7528 Metric \u65e5\u5fd7\u8f93\u51fa\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u4e2d\u770b\u5230\u7edf\u8ba1\u7ed3\u679c\uff1a"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"metrics.reporter.slf4j.class: org.apache.flink.metrics.slf4j.Slf4jReporter\nmetrics.reporter.slf4j.interval: 5 SECONDS\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"\u8fd0\u884c end-to-end \u6d4b\u8bd5\u5e76\u9a8c\u8bc1\u8f93\u51fa"),"\uff1a\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728",(0,i.yg)("inlineCode",{parentName:"p"},"inlong-sort/sort-end-to-end-tests/sort-end-to-end-tests-v1.15"),"\u8fd0\u884c\u6307\u5b9a\u7684 end-to-end \u6d4b\u8bd5\uff0c\u5e76\u5728\u63a7\u5236\u53f0\u4e2d\u67e5\u770b ",(0,i.yg)("inlineCode",{parentName:"p"},"numDeserializeError")," \u7684\u503c\u662f\u5426\u4e3a\u9884\u671f\u503c\u3002\uff1a"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"mvn test -Dtest=Postgres2StarRocksTest\n")),(0,i.yg)("p",{parentName:"li"},"\u63d0\u793a\uff1a\u53ef\u4ee5\u8003\u8651\u6dfb\u52a0\u4e00\u4e9b\u903b\u8f91\u6216\u6784\u9020\u4e00\u4e9b\u6570\u636e\uff0c\u89e6\u53d1",(0,i.yg)("inlineCode",{parentName:"p"},"incDeserializeError()"),"\uff0c\u4ee5\u786e\u8ba4 Metric \u8fd0\u4f5c\u6b63\u5e38"))),(0,i.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"\u521b\u5efaMetric\u65f6\u52a1\u5fc5\u4f20\u5165 ",(0,i.yg)("inlineCode",{parentName:"strong"},"MetricGroup")," "),"\uff1a\u786e\u4fdd\u5728\u521b\u5efa ",(0,i.yg)("inlineCode",{parentName:"li"},"SourceExactlyMetric")," \u6216 ",(0,i.yg)("inlineCode",{parentName:"li"},"SinkExactlyMetric")," \u5bf9\u8c61\u65f6\u901a\u8fc7 ",(0,i.yg)("inlineCode",{parentName:"li"},"runtimeContext")," \u83b7\u53d6 ",(0,i.yg)("inlineCode",{parentName:"li"},"MetricGroup")," \u4f20\u5165 ",(0,i.yg)("inlineCode",{parentName:"li"},"SourceExactlyMetric")," \u6216 ",(0,i.yg)("inlineCode",{parentName:"li"},"SinkExactlyMetric")," \u7684\u6784\u9020\u51fd\u6570\uff0c\u4ee5\u514d\u51fa\u73b0\u6307\u6807\u6ce8\u518c\u5931\u8d25\u7684\u60c5\u51b5\u3002"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"\u786e\u8ba4 MetricOption \u975e\u7a7a"),"\uff1a\u5728\u521b\u5efa Metric \u5bf9\u8c61\u524d\u5e94\u68c0\u67e5 ",(0,i.yg)("inlineCode",{parentName:"li"},"MetricOption")," \u662f\u5426\u975e\u7a7a\uff0c\u4ee5\u907f\u514d\u56e0\u7f3a\u5c11 ",(0,i.yg)("inlineCode",{parentName:"li"},"inlong.metric.labels")," \u800c\u5bfc\u81f4\u7a7a\u6307\u9488\u5f02\u5e38\u3002"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"\u5904\u7406\u7a7a\u6307\u9488\u5f02\u5e38"),"\uff1a\u5728\u64cd\u4f5c ",(0,i.yg)("inlineCode",{parentName:"li"},"SourceExactlyMetric")," \u6216 ",(0,i.yg)("inlineCode",{parentName:"li"},"SinkExactlyMetric")," \u5bf9\u8c61\u7684\u81ea\u5b9a\u4e49 ",(0,i.yg)("inlineCode",{parentName:"li"},"Flink Metric")," \u65f6\uff0c\u4f8b\u5982\u8c03\u7528 ",(0,i.yg)("inlineCode",{parentName:"li"},"sourceExactlyMetric.incNumDeserializeSuccess()"),"\uff0c\u5e94\u5224\u65ad\u8be5\u5bf9",(0,i.yg)("inlineCode",{parentName:"li"},"SourceExactlyMetric")," \u4ee5\u53ca\u5bf9\u5e94\u7684 ",(0,i.yg)("inlineCode",{parentName:"li"},"Counter")," ",(0,i.yg)("inlineCode",{parentName:"li"},"numDeserializeSuccess")," \u662f\u5426\u4e3a\u7a7a\uff0c\u4ee5\u907f\u514d\u5728Flink SQL\u4e2d\u672a\u6307\u5b9a ",(0,i.yg)("inlineCode",{parentName:"li"},"'inlong.metric.labels'")," \u65f6\u51fa\u73b0\u7a7a\u6307\u9488\u5f02\u5e38\u3002"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"}," End-to-end \u6d4b\u8bd5\u8986\u76d6"),"\uff1a\u5982\u679c\u65b0\u589e\u6307\u6807\u7684 Connector \u6ca1\u6709\u88ab end-to-end \u6d4b\u8bd5\u8986\u76d6\uff0c\u9700\u8981\u81ea\u884c\u7f16\u5199 end-to-end \u6d4b\u8bd5\u4ee5\u4fdd\u969cMetric\u80fd\u88ab\u6b63\u5e38\u4e0a\u62a5\u3002")),(0,i.yg)("p",null,"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5728 InLong Sort Connector \u4e2d\u63d2\u5165\u81ea\u5b9a\u4e49 Flink Metric \u6307\u6807\uff0c\u5e76\u901a\u8fc7\u6d4b\u8bd5\u9a8c\u8bc1\u5176\u5de5\u4f5c\u72b6\u6001\uff0c\u4ece\u800c\u589e\u5f3a\u53ef\u89c2\u6d4b\u6027\u3002"))}m.isMDXComponent=!0}}]);