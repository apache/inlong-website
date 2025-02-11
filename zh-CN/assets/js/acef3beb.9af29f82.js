"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[11048],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>s});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},d=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=o(t),m=r,s=y["".concat(p,".").concat(m)]||y[m]||u[m]||l;return t?n.createElement(s,g(g({ref:a},d),{},{components:t})):n.createElement(s,g({ref:a},d))}));function s(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,g=new Array(l);g[0]=m;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[y]="string"==typeof e?e:r,g[1]=i;for(var o=2;o<l;o++)g[o]=t[o];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12433:(e,a,t)=>{t.d(a,{l:()=>n});const n={inLongVersion:"2.2.0-SNAPSHOT"}},32954:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>g,metadata:()=>p,toc:()=>d});var n=t(58168),r=(t(96540),t(15680)),l=t(12433);const g={title:"Kafka",sidebar_position:4},i=void 0,p={unversionedId:"data_node/extract_node/kafka",id:"data_node/extract_node/kafka",title:"Kafka",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data_node/extract_node/kafka.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/kafka",permalink:"/zh-CN/docs/next/data_node/extract_node/kafka",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/extract_node/kafka.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Kafka",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u6587\u4ef6",permalink:"/zh-CN/docs/next/data_node/extract_node/file"},next:{title:"MongoDB-CDC",permalink:"/zh-CN/docs/next/data_node/extract_node/mongodb-cdc"}},o={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Maven \u4f9d\u8d56",id:"maven-\u4f9d\u8d56",level:3},{value:"\u5982\u4f55\u521b\u5efa Kafka Extract \u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa-kafka-extract-\u8282\u70b9",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"InLong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"InLong Manager Client \u7528\u6cd5",id:"inlong-manager-client-\u7528\u6cd5",level:3},{value:"Kafka Extract \u8282\u70b9\u53c2\u6570",id:"kafka-extract-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5",id:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],y={toc:d},u="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(u,(0,n.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Kafka Extract")," \u8282\u70b9 \u652f\u6301\u4ece Kafka topics \u4e2d\u8bfb\u53d6\u6570\u636e\u3002\u5b83\u652f\u6301\u4ee5\u666e\u901a\u7684\u65b9\u5f0f\u8bfb\u53d6\u6570\u636e\u548c Upsert \u7684\u65b9\u5f0f\u8bfb\u53d6\u6570\u636e\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"upsert-kafka")," \u8fde\u63a5\u5668\u751f\u4ea7 ",(0,r.yg)("inlineCode",{parentName:"p"},"changelog")," \u6d41,\n\u5176\u4e2d\u6bcf\u6761\u6570\u636e\u8bb0\u5f55\u4ee3\u8868\u4e00\u4e2a\u66f4\u65b0\u6216\u5220\u9664\u4e8b\u4ef6\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"kafka-inlong")," \u8fde\u63a5\u5668\u53ef\u4ee5\u4ee5\u666e\u901a\u65b9\u5f0f\u8bfb\u53d6\u6570\u636e\u548c\u5143\u6570\u636e\u4fe1\u606f\u3002"),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Extract \u8282\u70b9"),(0,r.yg)("th",{parentName:"tr",align:null},"Kafka \u7248\u672c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/next/data_node/extract_node/kafka"},"Kafka")),(0,r.yg)("td",{parentName:"tr",align:null},"0.10+")))),(0,r.yg)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.yg)("p",null,"\u4e3a\u4e86\u8bbe\u7f6e Kafka Extract \u8282\u70b9, \u4e0b\u9762\u63d0\u4f9b\u4e86\u4f7f\u7528\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\uff08\u4f8b\u5982 Maven \u6216 SBT\uff09\u548c\u5e26\u6709 Sort Connector JAR \u5305\u7684 SQL \u5ba2\u6237\u7aef\u7684\u4e24\u4e2a\u9879\u76ee\u7684\u4f9d\u8d56\u5173\u7cfb\u4fe1\u606f\u3002"),(0,r.yg)("h3",{id:"maven-\u4f9d\u8d56"},"Maven \u4f9d\u8d56"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-kafka</artifactId>\n    <version>${l.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("h2",{id:"\u5982\u4f55\u521b\u5efa-kafka-extract-\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa Kafka Extract \u8282\u70b9"),(0,r.yg)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,r.yg)("p",null,"\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Flink SQL")," \u521b\u5efa\u4e00\u4e2a Kafka Extract \u8282\u70b9:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u8fde\u63a5\u5668\u662f ",(0,r.yg)("inlineCode",{parentName:"li"},"kafka-inlong"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u8bbe\u7f6e Checkpoint \u4e3a 3000 \u6beb\u79d2                      \nFlink SQL> SET 'execution.checkpointing.interval' = '3s';   \n\n-- \u4f7f\u7528 Flink SQL \u521b\u5efa Kafka \u8868 'kafka_extract_node'\nFlink SQL> CREATE TABLE kafka_extract_node (\n           `id` INT,\n           `name` STRINTG\n           ) WITH (\n           'connector' = 'kafka-inlong',\n           'topic' = 'user',\n           'properties.bootstrap.servers' = 'localhost:9092',\n           'properties.group.id' = 'testGroup',\n           'scan.startup.mode' = 'earliest-offset',\n           'format' = 'csv'\n           )\n  \n-- \u8bfb\u53d6\u6570\u636e\nFlink SQL> SELECT * FROM kafka_extract_node;\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u8fde\u63a5\u5668\u662f ",(0,r.yg)("inlineCode",{parentName:"li"},"upsert-kafka-inlong"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u8bbe\u7f6e Checkpoint \u4e3a 3000 \u6beb\u79d2                       \nFlink SQL> SET 'execution.checkpointing.interval' = '3s';\n\n-- \u4f7f\u7528 Flink SQL \u521b\u5efa Kafka \u8868 'kafka_extract_node'\nFlink SQL> CREATE TABLE kafka_extract_node (\n          `id` INT,\n          `name` STRINTG,\n           PRIMARY KEY (`id`) NOT ENFORCED\n          ) WITH (\n          'connector' = 'upsert-kafka-inlong',\n          'topic' = 'user',\n          'properties.bootstrap.servers' = 'localhost:9092',\n          'properties.group.id' = 'testGroup',\n          'scan.startup.mode' = 'earliest-offset',\n          'key.format' = 'csv',\n          'value.format' = 'csv'\n          )\n    \n-- \u8bfb\u53d6\u6570\u636e\nFlink SQL> SELECT * FROM kafka_extract_node;       \n")),(0,r.yg)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"InLong Dashboard \u7528\u6cd5"),(0,r.yg)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,r.yg)("h3",{id:"inlong-manager-client-\u7528\u6cd5"},"InLong Manager Client \u7528\u6cd5"),(0,r.yg)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,r.yg)("h2",{id:"kafka-extract-\u8282\u70b9\u53c2\u6570"},"Kafka Extract \u8282\u70b9\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9009"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u8fde\u63a5\u5668  1. Upsert Kafka \u8fde\u63a5\u5668\u4f7f\u7528\uff1a ",(0,r.yg)("inlineCode",{parentName:"td"},"upsert-kafka-inlong"),"  2. Kafka\u8fde\u63a5\u5668\u4f7f\u7528\uff1a ",(0,r.yg)("inlineCode",{parentName:"td"},"kafka-inlong"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topic"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f53\u8868\u7528\u4f5c source \u65f6\u8bfb\u53d6\u6570\u636e\u7684 topic \u540d\u3002\u4ea6\u652f\u6301\u7528\u5206\u53f7\u95f4\u9694\u7684 topic \u5217\u8868\uff0c\u5982 ",(0,r.yg)("inlineCode",{parentName:"td"},"topic-1;topic-2"),"\u3002\u6ce8\u610f\uff0c\u5bf9 source \u8868\u800c\u8a00\uff0c",(0,r.yg)("inlineCode",{parentName:"td"},"topic")," \u548c ",(0,r.yg)("inlineCode",{parentName:"td"},"topic-pattern")," \u4e24\u4e2a\u9009\u9879\u53ea\u80fd\u4f7f\u7528\u5176\u4e2d\u4e00\u4e2a\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topic-pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5339\u914d\u8bfb\u53d6 topic \u540d\u79f0\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u5728\u4f5c\u4e1a\u5f00\u59cb\u8fd0\u884c\u65f6\uff0c\u6240\u6709\u5339\u914d\u8be5\u6b63\u5219\u8868\u8fbe\u5f0f\u7684 topic \u90fd\u5c06\u88ab Kafka consumer \u8ba2\u9605\u3002\u6ce8\u610f\uff0c\u5bf9 source \u8868\u800c\u8a00\uff0c",(0,r.yg)("inlineCode",{parentName:"td"},"topic")," \u548c ",(0,r.yg)("inlineCode",{parentName:"td"},"topic-pattern")," \u4e24\u4e2a\u9009\u9879\u53ea\u80fd\u4f7f\u7528\u5176\u4e2d\u4e00\u4e2a\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"properties.bootstrap.servers"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9017\u53f7\u5206\u9694\u7684 Kafka broker \u5217\u8868\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"properties.group.id"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Kafka source \u7684\u6d88\u8d39\u7ec4 id\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"properties.*"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u8bbe\u7f6e\u548c\u4f20\u9012\u4efb\u610f Kafka \u7684\u914d\u7f6e\u9879\u3002\u540e\u7f00\u540d\u5fc5\u987b\u5339\u914d\u5728 ",(0,r.yg)("a",{parentName:"td",href:"https://kafka.apache.org/documentation/#configuration"},"Kafka \u914d\u7f6e\u6587\u6863")," \u4e2d\u5b9a\u4e49\u7684\u914d\u7f6e\u952e\u3002Flink \u5c06\u79fb\u9664 \"properties.\" \u914d\u7f6e\u952e\u524d\u7f00\u5e76\u5c06\u53d8\u6362\u540e\u7684\u914d\u7f6e\u952e\u548c\u503c\u4f20\u5165\u5e95\u5c42\u7684 Kafka \u5ba2\u6237\u7aef\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 'properties.allow.auto.create.topics' = 'false' \u6765\u7981\u7528 topic \u7684\u81ea\u52a8\u521b\u5efa\u3002\u4f46\u662f\u67d0\u4e9b\u914d\u7f6e\u9879\u4e0d\u652f\u6301\u8fdb\u884c\u914d\u7f6e\uff0c\u56e0\u4e3a Flink \u4f1a\u8986\u76d6\u8fd9\u4e9b\u914d\u7f6e\uff0c\u4f8b\u5982 'key.deserializer' \u548c 'value.deserializer'\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5bf9\u4e8e Kafka \u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6765\u5e8f\u5217\u5316\u6216\u53cd\u5e8f\u5217\u5316 Kafka \u6d88\u606f\u7684\u683c\u5f0f\u3002 \u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/"},"\u683c\u5f0f")," \u9875\u9762\u4ee5\u83b7\u53d6\u66f4\u591a\u5173\u4e8e\u683c\u5f0f\u7684\u7ec6\u8282\u548c\u76f8\u5173\u914d\u7f6e\u9879\u3002 \u6ce8\u610f\uff1a\u8be5\u914d\u7f6e\u9879\u548c 'value.format' \u4e8c\u8005\u5fc5\u9700\u5176\u4e00\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key.format"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6765\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316 Kafka \u6d88\u606f\u952e\uff08Key\uff09\u7684\u683c\u5f0f\u3002 \u8bf7\u53c2\u9605 \u683c\u5f0f \u9875\u9762\u4ee5\u83b7\u53d6\u66f4\u591a\u5173\u4e8e\u683c\u5f0f\u7684\u7ec6\u8282\u548c\u76f8\u5173\u914d\u7f6e\u9879\u3002 \u6ce8\u610f\uff1a\u5982\u679c\u5b9a\u4e49\u4e86\u952e\u683c\u5f0f\uff0c\u5219\u914d\u7f6e\u9879 'key.fields' \u4e5f\u662f\u5fc5\u9700\u7684\u3002 \u5426\u5219 Kafka \u8bb0\u5f55\u5c06\u4f7f\u7528\u7a7a\u503c\u4f5c\u4e3a\u952e\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key.fields"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"[]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"List<String>")),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u7ed3\u6784\u4e2d\u7528\u6765\u914d\u7f6e\u6d88\u606f\u952e\uff08Key\uff09\u683c\u5f0f\u6570\u636e\u7c7b\u578b\u7684\u5b57\u6bb5\u5217\u8868\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8be5\u5217\u8868\u4e3a\u7a7a\uff0c\u56e0\u6b64\u6d88\u606f\u952e\u6ca1\u6709\u5b9a\u4e49\u3002 \u5217\u8868\u683c\u5f0f\u4e3a 'field1;field2'\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key.fields-prefix"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e3a\u6240\u6709\u6d88\u606f\u952e\uff08Key\uff09\u683c\u5f0f\u5b57\u6bb5\u6307\u5b9a\u81ea\u5b9a\u4e49\u524d\u7f00\uff0c\u4ee5\u907f\u514d\u4e0e\u6d88\u606f\u4f53\uff08Value\uff09\u683c\u5f0f\u5b57\u6bb5\u91cd\u540d\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u524d\u7f00\u4e3a\u7a7a\u3002 \u5982\u679c\u5b9a\u4e49\u4e86\u524d\u7f00\uff0c\u8868\u7ed3\u6784\u548c\u914d\u7f6e\u9879 'key.fields' \u90fd\u9700\u8981\u4f7f\u7528\u5e26\u524d\u7f00\u7684\u540d\u79f0\u3002 \u5f53\u6784\u5efa\u6d88\u606f\u952e\u683c\u5f0f\u5b57\u6bb5\u65f6\uff0c\u524d\u7f00\u4f1a\u88ab\u79fb\u9664\uff0c\u6d88\u606f\u952e\u683c\u5f0f\u5c06\u4f1a\u4f7f\u7528\u65e0\u524d\u7f00\u7684\u540d\u79f0\u3002 \u8bf7\u6ce8\u610f\u8be5\u914d\u7f6e\u9879\u8981\u6c42\u5fc5\u987b\u5c06 'value.fields-include' \u914d\u7f6e\u4e3a 'EXCEPT_KEY'\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value.format"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5bf9\u4e8e Upsert Kafka \u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5bf9 Kafka \u6d88\u606f\u4e2d value \u90e8\u5206\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u7684\u683c\u5f0f\u3002\u652f\u6301\u7684\u683c\u5f0f\u5305\u62ec 'csv'\u3001'json'\u3001'avro'\u3002\u8bf7\u53c2\u8003",(0,r.yg)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/connectors/table/formats/overview/"},"\u683c\u5f0f"),"\u9875\u9762\u4ee5\u83b7\u53d6\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u548c\u683c\u5f0f\u53c2\u6570\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value.fields-include"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"ALL"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u63a7\u5236\u54ea\u4e9b\u5b57\u6bb5\u5e94\u8be5\u51fa\u73b0\u5728 value \u4e2d\u3002\u53ef\u53d6\u503c\uff1a",(0,r.yg)("br",null)," ALL\uff1a\u6d88\u606f\u7684 value \u90e8\u5206\u5c06\u5305\u542b schema \u4e2d\u6240\u6709\u7684\u5b57\u6bb5\uff0c\u5305\u62ec\u5b9a\u4e49\u4e3a\u4e3b\u952e\u7684\u5b57\u6bb5\u3002",(0,r.yg)("br",null)," EXCEPT_KEY\uff1a\u8bb0\u5f55\u7684 value \u90e8\u5206\u5305\u542b schema \u7684\u6240\u6709\u5b57\u6bb5\uff0c\u5b9a\u4e49\u4e3a\u4e3b\u952e\u7684\u5b57\u6bb5\u9664\u5916\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan.startup.mode"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"group-offsets"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Kafka consumer \u7684\u542f\u52a8\u6a21\u5f0f\u3002\u6709\u6548\u503c\u4e3a\uff1a'earliest-offset'\uff0c'latest-offset'\uff0c'group-offsets'\uff0c'timestamp' \u548c 'specific-offsets'\u3002 \u8bf7\u53c2\u9605\u4e0b\u65b9 \u8d77\u59cb\u6d88\u8d39\u4f4d\u70b9 \u4ee5\u83b7\u53d6\u66f4\u591a\u7ec6\u8282\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan.startup.specific-offsets"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5728\u4f7f\u7528 'specific-offsets' \u542f\u52a8\u6a21\u5f0f\u65f6\u4e3a\u6bcf\u4e2a partition \u6307\u5b9a offset\uff0c\u4f8b\u5982 'partition:0,offset:42;partition:1,offset:300'\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan.startup.timestamp-millis"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5728\u4f7f\u7528 'timestamp' \u542f\u52a8\u6a21\u5f0f\u65f6\u6307\u5b9a\u542f\u52a8\u7684\u65f6\u95f4\u6233\uff08\u5355\u4f4d\u6beb\u79d2\uff09\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan.topic-partition-discovery.interval"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"Duration"),(0,r.yg)("td",{parentName:"tr",align:null},"Consumer \u5b9a\u671f\u63a2\u6d4b\u52a8\u6001\u521b\u5efa\u7684 Kafka topic \u548c partition \u7684\u65f6\u95f4\u95f4\u9694\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3agroupId=",(0,r.yg)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,r.yg)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,r.yg)("inlineCode",{parentName:"td"},"{nodeId}"),"\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.ignore.changelog"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5e03\u5c14\u578b"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301\u6240\u6709\u7c7b\u578b\u7684 changelog \u6d41 ingest \u5230 Kafka\u3002")))),(0,r.yg)("h2",{id:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5"},"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u683c\u5f0f\u5143\u6570\u636e\u53ef\u4ee5\u4f5c\u4e3a\u8868\u5b9a\u4e49\u4e2d\u7684\u53ea\u8bfb (VIRTUAL) \u5217\u516c\u5f00\u3002 \u5b83\u652f\u6301\u8bfb\u53d6\u683c\u5f0f ",(0,r.yg)("inlineCode",{parentName:"p"},"canal-json-inlong")," \u7684\u5143\u6570\u636e\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value.table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5305\u542b\u8be5\u884c\u7684\u8868\u7684\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value.database_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5305\u542b\u8be5\u884c\u7684\u6570\u636e\u5e93\u7684\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value.op_ts"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP(3)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b83\u6307\u793a\u5728\u6570\u636e\u5e93\u4e2d\u8fdb\u884c\u66f4\u6539\u7684\u65f6\u95f4\u3002 \u5982\u679c\u8bb0\u5f55\u662f\u4ece\u8868\u7684\u5feb\u7167\u800c\u4e0d\u662fbinlog\u4e2d\u8bfb\u53d6\u7684\uff0c\u5219\u8be5\u503c\u59cb\u7ec8\u4e3a0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value.op_type"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u7c7b\u578b, INSERT/UPDATE/DELETE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value.batch_id"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u91cd\u8981\u7684, \u4e00\u4e2a\u7b80\u5355\u7684\u81ea\u589e\u5668")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value.is_ddl"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u4e0b\u53d1 DDL, \u503c\u662f false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value.update_before"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ARRAY<MAP<STRING, STRING>>")),(0,r.yg)("td",{parentName:"tr",align:null},"UPDATE \u8bb0\u5f55\u7684 update-before \u6570\u636e")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value.mysql_type"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP<STRING, STRING>"),(0,r.yg)("td",{parentName:"tr",align:null},"MySQL \u5b57\u6bb5\u7c7b\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value.pk_names"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ARRAY<STRING>")),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e3b\u952e")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value.sql_type"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP<STRING, INT>"),(0,r.yg)("td",{parentName:"tr",align:null},"SQL \u5b57\u6bb5\u7c7b\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value.ts"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ(3)"),(0,r.yg)("td",{parentName:"tr",align:null},"ts_ms \u5b57\u6bb5\u7528\u4e8e\u5b58\u50a8\u6709\u5173\u8fde\u63a5\u5668\u5904\u7406/\u751f\u6210\u4e8b\u4ef6\u7684\u672c\u5730\u65f6\u95f4\u7684\u4fe1\u606f")))),(0,r.yg)("p",null,"\u6269\u5c55\u7684 CREATE TABLE \u793a\u4f8b\u6f14\u793a\u4e86\u4f7f\u7528\u8fd9\u4e9b\u5143\u6570\u636e\u5b57\u6bb5\u7684\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `kafka_extract_node` (\n      `id` INT,\n      `name` STRING,\n      `database_name` string METADATA FROM 'value.database_name',\n      `table_name`    string METADATA FROM 'value.table_name',\n      `op_ts`         timestamp(3) METADATA FROM 'value.op_ts',\n      `op_type` string METADATA FROM 'value.op_type',\n      `batch_id` bigint METADATA FROM 'value.batch_id',\n      `is_ddl` boolean METADATA FROM 'value.is_ddl',\n      `update_before` ARRAY<MAP<STRING, STRING>> METADATA FROM 'value.update_before',\n      `mysql_type` MAP<STRING, STRING> METADATA FROM 'value.mysql_type',\n      `pk_names` ARRAY<STRING> METADATA FROM 'value.pk_names',\n      `data` STRING METADATA FROM 'value.data',\n      `sql_type` MAP<STRING, INT> METADATA FROM 'value.sql_type',\n      `ingestion_ts` TIMESTAMP(3) METADATA FROM 'value.ts',\n) WITH (\n      'connector' = 'kafka-inlong',\n      'topic' = 'user',\n      'properties.bootstrap.servers' = 'localhost:9092',\n      'properties.group.id' = 'testGroup',\n      'scan.startup.mode' = 'earliest-offset',\n      'format' = 'canal-json-inlong'\n)\n")),(0,r.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("p",null,"Kafka \u5c06\u6d88\u606f\u952e\u503c\u4ee5\u4e8c\u8fdb\u5236\u8fdb\u884c\u5b58\u50a8\uff0c\u56e0\u6b64 Kafka \u5e76\u4e0d\u5b58\u5728 schema \u6216\u6570\u636e\u7c7b\u578b\u3002Kafka \u6d88\u606f\u4f7f\u7528\u683c\u5f0f\u914d\u7f6e\u8fdb\u884c\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\uff0c\u4f8b\u5982 csv\uff0cjson\uff0cavro\u3002 \u56e0\u6b64\uff0c\u6570\u636e\u7c7b\u578b\u6620\u5c04\u53d6\u51b3\u4e8e\u4f7f\u7528\u7684\u683c\u5f0f\u3002\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/connectors/table/formats/overview/"},"\u683c\u5f0f")," \u9875\u9762\u4ee5\u83b7\u53d6\u66f4\u591a\u7ec6\u8282\u3002"))}m.isMDXComponent=!0}}]);