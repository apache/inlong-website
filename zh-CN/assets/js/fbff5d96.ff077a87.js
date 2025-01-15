"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[62725],{15680:(e,t,n)=>{n.d(t,{xA:()=>A,yg:()=>g});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},A=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,A=o(e,["components","mdxType","originalType","parentName"]),u=c(n),p=l,g=u["".concat(s,".").concat(p)]||u[p]||d[p]||r;return n?a.createElement(g,i(i({ref:t},A),{},{components:n})):a.createElement(g,i({ref:t},A))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(58168),l=(n(96540),n(15680));const r={title:"MySQL \u5230 ClickHouse \u793a\u4f8b",sidebar_position:1},i=void 0,o={unversionedId:"quick_start/realtime_data_sync/mysql_clickhouse_example",id:"version-2.1.0/quick_start/realtime_data_sync/mysql_clickhouse_example",title:"MySQL \u5230 ClickHouse \u793a\u4f8b",description:"\u5728\u4e0b\u9762\u7684\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u4e00\u4e2a\u5b8c\u6574\u7684\u793a\u4f8b\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Apache InLong \u521b\u5efa MySQL -> ClickHouse \u6570\u636e\u540c\u6b65\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1.0/quick_start/realtime_data_sync/mysql_clickhouse_example.md",sourceDirName:"quick_start/realtime_data_sync",slug:"/quick_start/realtime_data_sync/mysql_clickhouse_example",permalink:"/zh-CN/docs/quick_start/realtime_data_sync/mysql_clickhouse_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.1.0/quick_start/realtime_data_sync/mysql_clickhouse_example.md",tags:[],version:"2.1.0",sidebarPosition:1,frontMatter:{title:"MySQL \u5230 ClickHouse \u793a\u4f8b",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Kafka \u793a\u4f8b",permalink:"/zh-CN/docs/quick_start/data_ingestion/mysql_kafka_clickhouse_example"},next:{title:"MySQL \u5230 StarRocks \u793a\u4f8b",permalink:"/zh-CN/docs/quick_start/realtime_data_sync/mysql_starrocks_example"}},s={},c=[{value:"\u73af\u5883\u90e8\u7f72",id:"\u73af\u5883\u90e8\u7f72",level:2},{value:"\u5b89\u88c5 InLong",id:"\u5b89\u88c5-inlong",level:3},{value:"\u6dfb\u52a0 Connectors",id:"\u6dfb\u52a0-connectors",level:3},{value:"\u5b89\u88c5 ClickHouse",id:"\u5b89\u88c5-clickhouse",level:3},{value:"\u96c6\u7fa4\u521d\u59cb\u5316",id:"\u96c6\u7fa4\u521d\u59cb\u5316",level:2},{value:"\u6ce8\u518c ClickHouse \u6570\u636e\u8282\u70b9",id:"\u6ce8\u518c-clickhouse-\u6570\u636e\u8282\u70b9",level:3},{value:"\u4efb\u52a1\u521b\u5efa",id:"\u4efb\u52a1\u521b\u5efa",level:2},{value:"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4",id:"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4",level:3},{value:"\u65b0\u5efa\u6570\u636e\u6e90",id:"\u65b0\u5efa\u6570\u636e\u6e90",level:3},{value:"\u65b0\u5efa\u6570\u636e\u76ee\u6807",id:"\u65b0\u5efa\u6570\u636e\u76ee\u6807",level:3},{value:"\u914d\u7f6e\u5b57\u6bb5\u4fe1\u606f",id:"\u914d\u7f6e\u5b57\u6bb5\u4fe1\u606f",level:3},{value:"\u5ba1\u6279\u6570\u636e\u6d41",id:"\u5ba1\u6279\u6570\u636e\u6d41",level:3},{value:"\u6d4b\u8bd5\u6570\u636e",id:"\u6d4b\u8bd5\u6570\u636e",level:2},{value:"\u53d1\u9001\u6570\u636e",id:"\u53d1\u9001\u6570\u636e",level:3},{value:"\u6570\u636e\u9a8c\u8bc1",id:"\u6570\u636e\u9a8c\u8bc1",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],A={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,l.yg)(u,(0,a.A)({},A,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u5728\u4e0b\u9762\u7684\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u4e00\u4e2a\u5b8c\u6574\u7684\u793a\u4f8b\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Apache InLong \u521b\u5efa MySQL -> ClickHouse \u6570\u636e\u540c\u6b65\u3002"),(0,l.yg)("h2",{id:"\u73af\u5883\u90e8\u7f72"},"\u73af\u5883\u90e8\u7f72"),(0,l.yg)("h3",{id:"\u5b89\u88c5-inlong"},"\u5b89\u88c5 InLong"),(0,l.yg)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5b89\u88c5 InLong \u7684\u5168\u90e8\u7ec4\u4ef6\uff0c\u8fd9\u91cc\u63d0\u4f9b\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/deployment/docker"},"Docker \u90e8\u7f72"),"\uff08\u63a8\u8350\uff09"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/deployment/bare_metal"},"Bare Metal \u90e8\u7f72"))),(0,l.yg)("h3",{id:"\u6dfb\u52a0-connectors"},"\u6dfb\u52a0 Connectors"),(0,l.yg)("p",null,"\u4e0b\u8f7d\u4e0e Flink \u7248\u672c\u5bf9\u5e94\u7684 ",(0,l.yg)("a",{parentName:"p",href:"https://inlong.apache.org/zh-CN/downloads"},"connectors"),"\uff0c\u89e3\u538b\u540e\u5c06 ",(0,l.yg)("inlineCode",{parentName:"p"},"sort-connector-jdbc-[version]-SNAPSHOT.jar")," \u653e\u5728 ",(0,l.yg)("inlineCode",{parentName:"p"},"/inlong-sort/connectors/")," \u76ee\u5f55\u4e0b\u3002"),(0,l.yg)("h3",{id:"\u5b89\u88c5-clickhouse"},"\u5b89\u88c5 ClickHouse"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"docker run -d --rm --net=host --name clickhouse -e CLICKHOUSE_USER=admin -e CLICKHOUSE_PASSWORD=inlong -e CLICKHOUSE_DEFAULT_ACCESS_MANAGEMENT=1 clickhouse/clickhouse-server:22.8\n")),(0,l.yg)("h2",{id:"\u96c6\u7fa4\u521d\u59cb\u5316"},"\u96c6\u7fa4\u521d\u59cb\u5316"),(0,l.yg)("p",null,"\u5f53\u6240\u6709\u5bb9\u5668\u90fd\u6210\u529f\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u8bbf\u95ee InLong Dashboard \u5730\u5740 http://localhost\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u8d26\u53f7\u767b\u5f55:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,l.yg)("h3",{id:"\u6ce8\u518c-clickhouse-\u6570\u636e\u8282\u70b9"},"\u6ce8\u518c ClickHouse \u6570\u636e\u8282\u70b9"),(0,l.yg)("p",null,"\u9875\u9762\u70b9\u51fb \u3010\u6570\u636e\u8282\u70b9\u3011\u2192\u3010\u65b0\u5efa\u3011\uff0c\u65b0\u589e ClickHouse \u6570\u636e\u8282\u70b9\uff1a"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Clickhouse Datanode",src:n(62759).A,width:"733",height:"537"})),(0,l.yg)("h2",{id:"\u4efb\u52a1\u521b\u5efa"},"\u4efb\u52a1\u521b\u5efa"),(0,l.yg)("h3",{id:"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4"},"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4"),(0,l.yg)("p",null,"\u9875\u9762\u70b9\u51fb\u3010\u6570\u636e\u540c\u6b65\u3011\u2192\u3010\u65b0\u5efa\u6570\u636e\u540c\u6b65\u3011\uff0c\u586b\u5199 \u6570\u636e\u6d41\u7ec4 ID \u548c SteamID\uff1a"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Group_Stream",src:n(27482).A,width:"1494",height:"418"})),(0,l.yg)("h3",{id:"\u65b0\u5efa\u6570\u636e\u6e90"},"\u65b0\u5efa\u6570\u636e\u6e90"),(0,l.yg)("p",null,"\u6570\u636e\u6765\u6e90\u4e2d \u70b9\u51fb \u3010\u65b0\u5efa\u3011\u2192\u3010MySQL\u3011\uff0c\u914d\u7f6e\u6570\u636e\u6e90\u540d\u79f0\u3001\u5730\u5740\u3001\u7528\u6237\u5bc6\u7801\u4ee5\u53ca\u5e93\u8868\uff08test.source_table\uff09\u4fe1\u606f\u7b49\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Source",src:n(67525).A,width:"674",height:"633"})),(0,l.yg)("p",null,"\u6ce8\uff1a\u8bf7\u9884\u5148\u521b\u5efa test.source_table \u5e93\u8868\uff0cschema \u4e3a\uff1a CREATE TABLE test.source_table ( id INT PRIMARY KEY, name VARCHAR(50) );"),(0,l.yg)("h3",{id:"\u65b0\u5efa\u6570\u636e\u76ee\u6807"},"\u65b0\u5efa\u6570\u636e\u76ee\u6807"),(0,l.yg)("p",null,"\u6570\u636e\u76ee\u6807\u4e2d \u70b9\u51fb \u3010\u65b0\u5efa\u3011\u2192\u3010ClickHouse\u3011\uff0c\u914d\u7f6e\u540d\u79f0\u3001\u5e93\u8868\u3001\u5df2\u521b\u5efa\u7684 ck \u6570\u636e\u8282\u70b9\u3002\u6570\u636e\u540c\u6b65\u4e0d\u652f\u6301\u81ea\u52a8\u521b\u5efa\u6570\u636e\u76ee\u6807\u8868\uff0c\u6240\u4ee5\u9700\u8981\u624b\u52a8\u521b\u5efa\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Sink",src:n(99811).A,width:"1207",height:"400"})),(0,l.yg)("h3",{id:"\u914d\u7f6e\u5b57\u6bb5\u4fe1\u606f"},"\u914d\u7f6e\u5b57\u6bb5\u4fe1\u606f"),(0,l.yg)("p",null,"\u5206\u522b\u5728 \u3010\u6e90\u5b57\u6bb5\u3011 \u548c \u3010\u76ee\u6807\u5b57\u6bb5\u3011\u4e2d\u914d\u7f6e Schema \u6620\u5c04\u4fe1\u606f\uff0c\u5b8c\u6210\u540e\u70b9\u51fb \u3010\u63d0\u4ea4\u5ba1\u6279\u3011"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Fields",src:n(26551).A,width:"1009",height:"448"})),(0,l.yg)("h3",{id:"\u5ba1\u6279\u6570\u636e\u6d41"},"\u5ba1\u6279\u6570\u636e\u6d41"),(0,l.yg)("p",null,"\u9875\u9762\u70b9\u51fb\u3010\u5ba1\u6279\u7ba1\u7406\u3011->\u3010\u6211\u7684\u5ba1\u6279\u3011->\u3010\u8be6\u60c5\u3011->\u3010\u901a\u8fc7\u3011"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Approve",src:n(99631).A,width:"2279",height:"255"})),(0,l.yg)("p",null,"\u8fd4\u56de \u3010\u6570\u636e\u540c\u6b65\u3011\u9875\u9762\uff0c\u7b49\u5f85\u4efb\u52a1\u914d\u7f6e\u6210\u529f"),(0,l.yg)("h2",{id:"\u6d4b\u8bd5\u6570\u636e"},"\u6d4b\u8bd5\u6570\u636e"),(0,l.yg)("h3",{id:"\u53d1\u9001\u6570\u636e"},"\u53d1\u9001\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\n# MySQL\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\nDB_HOST="mysql"\nDB_USER="root"\nDB_PASS="inlong"\nDB_NAME="test"\nDB_TABLE="source_table"\n\n# \u5faa\u73af\u63d2\u5165\u6570\u636e\nfor ((i=1; i<=1000; i++))\ndo\n# \u751f\u6210\u8981\u63d2\u5165\u7684\u6570\u636e\nid=$i\nname="name_$i"\n\n    # \u6784\u5efa\u63d2\u5165\u8bed\u53e5\n    query="INSERT INTO $DB_TABLE (id, name) VALUES ($id, \'$name\');"\n\n    # \u6267\u884c\u63d2\u5165\u8bed\u53e5\n    mysql -h $DB_HOST -u $DB_USER -p$DB_PASS $DB_NAME -e "$query"\ndone\n')),(0,l.yg)("p",null,"\u7d2f\u8ba1\u63d2\u5165 1000 \u6761\u6570\u636e\uff1a"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Source_data",src:n(23902).A,width:"395",height:"214"})),(0,l.yg)("h3",{id:"\u6570\u636e\u9a8c\u8bc1"},"\u6570\u636e\u9a8c\u8bc1"),(0,l.yg)("p",null,"\u7136\u540e\u8fdb\u5165 ClickHouse \u5bb9\u5668\uff0c\u67e5\u770b\u5e93\u8868\u6570\u636e\uff1a"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Source_data",src:n(97388).A,width:"508",height:"312"})),(0,l.yg)("p",null,"\u4e5f\u53ef\u4ee5\u5728\u9875\u9762\u67e5\u770b\u5ba1\u8ba1\u6570\u636e\uff1a"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Source_data",src:n(79881).A,width:"2295",height:"752"})),(0,l.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.yg)("p",null,"ClickHouse \u5199\u5165\u6570\u636e\u5931\u8d25\uff0c\u53ef\u4ee5\u5728 Flink \u9875\u9762\u67e5\u770b\u62a5\u9519\uff0c\u5e76\u68c0\u67e5\u6240\u4f7f\u7528\u7684\u7528\u6237\u7684\u6743\u9650\u4ee5\u53ca\u8868\u5f15\u64ce"))}d.isMDXComponent=!0},99631:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/approve-da77c44b31a8a5bba47b7d3a82270958.png"},79881:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/audit-1d513f9b5421b196f84f69a9528ffb3f.png"},62759:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/clickhouse_datanode-dd32727538ef0be4148e666eaa2d43cd.png"},27482:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/group_stream-0614135fb1d6042215e8d24e1c228aa9.png"},99811:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sink-5c7f106b38d98f05bd7a22164e59835d.png"},97388:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sink_data-598241795b95bff65f7aeb0b60dc9d66.png"},26551:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sink_fields-98c4092a5cc96549deb561b58199e023.png"},67525:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/source-b16dde8f284c5f8ed0cca99a0c3db847.png"},23902:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/png;base64,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"}}]);