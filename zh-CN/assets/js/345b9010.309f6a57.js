"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1085],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=o(n),N=r,s=m["".concat(d,".").concat(N)]||m[N]||k[N]||l;return n?a.createElement(s,i(i({ref:e},u),{},{components:n})):a.createElement(s,i({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[m]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},81877:(t,e,n)=>{n.d(e,{Y:()=>a});const a={inLongVersion:"1.5.0-SNAPSHOT"}},44232:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(81877);const i={title:"Pulsar",sidebar_position:9},p=void 0,d={unversionedId:"data_node/extract_node/pulsar",id:"data_node/extract_node/pulsar",title:"Pulsar",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data_node/extract_node/pulsar.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/pulsar",permalink:"/zh-CN/docs/next/data_node/extract_node/pulsar",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/extract_node/pulsar.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Pulsar",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL-CDC",permalink:"/zh-CN/docs/next/data_node/extract_node/postgresql-cdc"},next:{title:"SQLServer-CDC",permalink:"/zh-CN/docs/next/data_node/extract_node/sqlserver-cdc"}},o={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u7248\u672c",id:"\u7248\u672c",level:2},{value:"\u4f9d\u8d56\u9879",id:"\u4f9d\u8d56\u9879",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"Inlong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"InLong Manager Client \u65b9\u5f0f",id:"inlong-manager-client-\u65b9\u5f0f",level:3},{value:"Pulsar Extract \u8282\u70b9\u53c2\u6570",id:"pulsar-extract-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u53ef\u7528\u5143\u6570\u636e",id:"\u53ef\u7528\u5143\u6570\u636e",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],m={toc:u};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/"},"Apache Pulsar"),"\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u3001\u5f00\u6e90\u7684 pub-sub \u6d88\u606f\u4f20\u9012\u548c\u6d41\u5e73\u53f0\uff0c\u7528\u4e8e\u5b9e\u65f6\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u6bcf\u5929\u7ba1\u7406\u6570\u5343\u4ebf\u4e2a\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u7248\u672c"},"\u7248\u672c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u62bd\u53d6\u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/next/data_node/extract_node/pulsar"},"Pulsar")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/docs/next/"},"Pulsar"),"\uff1a> = 2.8.x")))),(0,r.kt)("h2",{id:"\u4f9d\u8d56\u9879"},"\u4f9d\u8d56\u9879"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-pulsar</artifactId>\n    <version>${l.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,r.kt)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,r.kt)("p",null,"Step.1 \u51c6\u5907\u597d sql \u5ba2\u6237\u7aef"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/table/sqlClient.html"},"SQL Client"),"\u7528\u4e8e\u7f16\u5199\u7528\u4e8e\u5728 Pulsar \u4e2d\u64cd\u4f5c\u6570\u636e\u7684 SQL \u67e5\u8be2\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"-addclasspath"),"\u5305\u7684\u9009\u9879",(0,r.kt)("inlineCode",{parentName:"p"},"sort-connector-pulsar-{{INLONG_VERSION}}.jar"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f8b\u5b50")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./bin/sql-client.sh embedded --jar sort-connector-pulsar_{{INLONG_VERSION}}.jar\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u5982\u679c\u4f60\u628a\u6211\u4eec\u8fde\u63a5\u5668\u7684JAR\u5305\u653e\u5728\u4e0b\u9762",(0,r.kt)("inlineCode",{parentName:"p"},"$FLINK_HOME/lib"),"\uff0c\u4e0d\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"--jar"),"\u518d\u7528\u6307\u5b9a\u8fde\u63a5\u5668\u7684\u5305\u4e86\u3002")),(0,r.kt)("p",null,"Step.2 \u4ecePulsar\u8bfb\u53d6\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE pulsar (\n  `physical_1` STRING,\n  `physical_2` INT,\n  `eventTime` TIMESTAMP(3) METADATA,\n  `properties` MAP<STRING, STRING> METADATA ,\n  `topic` STRING METADATA VIRTUAL,\n  `sequenceId` BIGINT METADATA VIRTUAL,\n  `key` STRING ,\n  `physical_3` BOOLEAN\n) WITH (\n  'connector' = 'pulsar-inlong',\n  'topic' = 'persistent://public/default/topic82547611',\n  'key.format' = 'raw',\n  'key.fields' = 'key',\n  'value.format' = 'avro',\n  'service-url' = 'pulsar://localhost:6650',\n  'admin-url' = 'http://localhost:8080',\n  'scan.startup.mode' = 'earliest' \n)\n\nINSERT INTO `sink_table` \n    SELECT \n    `physical_1` AS `physical_1`,\n    `physical_2` AS `physical_2`\n    FROM `pulsar`\nINSERT INTO pulsar \nVALUES\n ('data 1', 1, TIMESTAMP '2020-03-08 13:12:11.123', MAP['k11', 'v11', 'k12', 'v12'], 'key1', TRUE),\n ('data 2', 2, TIMESTAMP '2020-03-09 13:12:11.123', MAP['k21', 'v21', 'k22', 'v22'], 'key2', FALSE),\n ('data 3', 3, TIMESTAMP '2020-03-10 13:12:11.123', MAP['k31', 'v31', 'k32', 'v32'], 'key3', TRUE)\n")),(0,r.kt)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"Inlong Dashboard \u7528\u6cd5"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h3",{id:"inlong-manager-client-\u65b9\u5f0f"},"InLong Manager Client \u65b9\u5f0f"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h2",{id:"pulsar-extract-\u8282\u70b9\u53c2\u6570"},"Pulsar Extract \u8282\u70b9\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8fde\u63a5\u5668\u7c7b\u578b\u3002\u53ef\u7528\u7684\u9009\u9879\u662f",(0,r.kt)("inlineCode",{parentName:"td"},"pulsar-inlong"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8f93\u5165\u6216\u8f93\u51fa\u4e3b\u9898\uff0c\u591a\u4e2a\u548c\u8fde\u63a5\u4e3b\u9898\u4f7f\u7528\u534a\u9017\u53f7\u3002\u9009\u62e9\u4e00\u4e2a\u4e3b\u9898\u6a21\u5f0f\u3002Set the input or output topic, use half comma for multiple and concatenate topics. Choose one with the topic-pattern.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic-pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6b63\u5219\u83b7\u53d6\u5339\u914d\u7684\u4e3b\u9898\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service-url"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e Pulsar \u4ee3\u7406\u670d\u52a1\u5730\u5740\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin-url"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e Pulsar \u7ba1\u7406\u670d\u52a1\u5730\u5740\u3002",(0,r.kt)("strong",{parentName:"td"},"\u4e0d\u4f20\u5165\u8be5\u53c2\u6570\u65f6\uff0c\u542f\u52a8\u6a21\u5f0f\u53ea\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"strong"},"earliest"),"\u548c",(0,r.kt)("inlineCode",{parentName:"strong"},"latest"),"\uff0c\u5e76\u4e14\u65e0\u6cd5\u66f4\u65b0 Pulsar Topic \u7684 offset\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scan.startup.mode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"latest"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e Source \u7684\u542f\u52a8\u6a21\u5f0f\u3002\u53ef\u7528\u9009\u9879\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"earliest"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"latest"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"external-subscription"),"\u548c",(0,r.kt)("inlineCode",{parentName:"td"},"specific-offsets"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scan.startup.specific-offsets"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u53c2\u6570\u65f6\u9700\u8981\u8be5",(0,r.kt)("inlineCode",{parentName:"td"},"specific-offsets"),"\u53c2\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scan.startup.sub-name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u53c2\u6570\u65f6\u9700\u8981\u8be5",(0,r.kt)("inlineCode",{parentName:"td"},"external-subscription"),"\u53c2\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discovery topic interval"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5206\u533a\u53d1\u73b0\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.message-router"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"key-hash"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5c06\u6d88\u606f\u5199\u5165 Pulsar \u5206\u533a\u7684\u8def\u7531\u65b9\u5f0f\u3002\u53ef\u7528\u9009\u9879\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"key-hash"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"round-robin"),"\u548c",(0,r.kt)("inlineCode",{parentName:"td"},"custom MessageRouter"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.semantic"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"at-least-once"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Sink \u5199\u5165\u6d88\u606f\u7684\u4fdd\u8bc1\u7ea7\u522b\u3002\u53ef\u7528\u9009\u9879\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"at-least-once"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"exactly-once"),"\u548c",(0,r.kt)("inlineCode",{parentName:"td"},"none"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"properties"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"empty"),(0,r.kt)("td",{parentName:"tr",align:null},"Map"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e Pulsar \u7684\u53ef\u9009\u914d\u7f6e\uff0c\u683c\u5f0f\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"properties.key='value'"),". \u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"td",href:"https://github.com/streamnative/pulsar-flink#configuration-parameters"},"\u914d\u7f6e\u53c2\u6570"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key.format"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3a Pulsar \u6d88\u606f\u8bbe\u7f6e\u57fa\u4e8e\u952e\u7684\u5e8f\u5217\u5316\u683c\u5f0f\u3002\u53ef\u7528\u9009\u9879\u6709",(0,r.kt)("inlineCode",{parentName:"td"},"No format"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"optional raw"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"Avro"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"JSON"),"\u7b49\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key.fields"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e8f\u5217\u5316Key\u65f6\u8981\u4f7f\u7528\u7684SQL\u5b9a\u4e49\u5b57\u6bb5\uff0c\u591a\u4e2a\u534a\u9017\u53f7",(0,r.kt)("inlineCode",{parentName:"td"},","),"\u8fde\u63a5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key.fields-prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3a key \u683c\u5f0f\u7684\u6240\u6709\u5b57\u6bb5\u5b9a\u4e49\u81ea\u5b9a\u4e49\u524d\u7f00\uff0c\u4ee5\u907f\u514d\u4e0e value \u683c\u5f0f\u7684\u5b57\u6bb5\u540d\u79f0\u51b2\u7a81\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u524d\u7f00\u4e3a\u7a7a\u3002\u5982\u679c\u5b9a\u4e49\u4e86\u81ea\u5b9a\u4e49\u524d\u7f00\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"key.fields"),"\u5219\u4f7f\u7528\u8868\u67b6\u6784\u548c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format or value.format"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u524d\u7f00\u8bbe\u7f6e\u540d\u79f0\u3002\u5f53\u4ee5\u952e\u683c\u5f0f\u6784\u9020\u6570\u636e\u7c7b\u578b\u65f6\uff0c\u524d\u7f00\u88ab\u79fb\u9664\uff0c\u5e76\u4e14\u5728\u952e\u683c\u5f0f\u4e2d\u4f7f\u7528\u975e\u524d\u7f00\u540d\u79f0\u3002Pulsar \u6d88\u606f\u503c\u5e8f\u5217\u5316\u683c\u5f0f\uff0c\u652f\u6301 JSON\u3001Avro \u7b49\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u89c1 Flink \u683c\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.fields-include"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"ALL"),(0,r.kt)("td",{parentName:"tr",align:null},"Enum"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar \u6d88\u606f\u503c\u5305\u542b\u5b57\u6bb5\u7b56\u7565\u3001\u53ef\u9009\u7684 ALL \u548c EXCEPT_KEY\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3agroupId=",(0,r.kt)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,r.kt)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,r.kt)("inlineCode",{parentName:"td"},"{nodeId}"),"\u3002")))),(0,r.kt)("h2",{id:"\u53ef\u7528\u5143\u6570\u636e"},"\u53ef\u7528\u5143\u6570\u636e"),(0,r.kt)("p",null,"METADATA \u6807\u5fd7\u7528\u4e8e\u8bfb\u53d6\u548c\u5199\u5165 Pulsar \u6d88\u606f\u4e2d\u7684\u5143\u6570\u636e\u3002\u652f\u6301\u5217\u8868\u5982\u4e0b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f R/W \u5217\u5b9a\u4e49\u5143\u6570\u636e\u5b57\u6bb5\u662f\u5426\u53ef\u8bfb (R) \u548c/\u6216\u53ef\u5199 (W)\u3002\u53ea\u8bfb\u5217\u5fc5\u987b\u58f0\u660e\u4e3a VIRTUAL \u4ee5\u5728 INSERT INTO \u64cd\u4f5c\u671f\u95f4\u6392\u9664\u5b83\u4eec\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5173\u952e\u5b57"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bfb/\u5199"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar \u6d88\u606f\u7684\u4e3b\u9898\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"R")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"messageId"),(0,r.kt)("td",{parentName:"tr",align:null},"BYTES NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar \u6d88\u606f\u7684\u6d88\u606f ID"),(0,r.kt)("td",{parentName:"tr",align:null},"R")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sequenceId"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar \u6d88\u606f\u7684\u5e8f\u5217 ID"),(0,r.kt)("td",{parentName:"tr",align:null},"R")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"publishTime"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP(3) WITH LOCAL TIME ZONE NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar \u6d88\u606f\u7684\u53d1\u5e03\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"R")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventTime"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP(3) WITH LOCAL TIME ZONE NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar \u6d88\u606f\u7684\u751f\u6210\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"R/W")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"properties"),(0,r.kt)("td",{parentName:"tr",align:null},"MAP<STRING, STRING> NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar \u6d88\u606f\u7684\u6269\u5c55\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"R/W")))),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.kt)("p",null,"Pulsar \u5c06\u6d88\u606f\u952e\u548c\u503c\u5b58\u50a8\u4e3a\u5b57\u8282\uff0c\u56e0\u6b64 Pulsar \u6ca1\u6709 schema \u6216\u6570\u636e\u7c7b\u578b\u3002Pulsar \u6d88\u606f\u6309\u683c\u5f0f\u8fdb\u884c\u53cd\u5e8f\u5217\u5316\u548c\u5e8f\u5217\u5316\uff0c\u4f8b\u5982 csv\u3001json\u3001avro\u3002\u56e0\u6b64\uff0c\u6570\u636e\u7c7b\u578b\u6620\u5c04\u7531\u7279\u5b9a\u683c\u5f0f\u786e\u5b9a\u3002\u6709\u5173\u683c\u5f0f\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/"},"\u683c\u5f0f\u9875\u9762\u3002")))}k.isMDXComponent=!0}}]);