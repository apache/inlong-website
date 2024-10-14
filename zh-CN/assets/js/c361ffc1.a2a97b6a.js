"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6382],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),g=l,y=p["".concat(o,".").concat(g)]||p[g]||d[g]||r;return t?a.createElement(y,i(i({ref:n},u),{},{components:t})):a.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:l,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},49654:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(58168),l=(t(96540),t(15680));const r={title:"Pulsar \u5230 ClickHouse \u793a\u4f8b",sidebar_position:4},i=void 0,s={unversionedId:"quick_start/data_sync/pulsar_clickhouse_example",id:"quick_start/data_sync/pulsar_clickhouse_example",title:"Pulsar \u5230 ClickHouse \u793a\u4f8b",description:"\u5728\u4e0b\u9762\u7684\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u4e00\u4e2a\u5b8c\u6574\u7684\u793a\u4f8b\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Apache InLong \u521b\u5efa Pulsar -> ClickHouse \u6570\u636e\u540c\u6b65\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/quick_start/data_sync/pulsar_clickhouse_example.md",sourceDirName:"quick_start/data_sync",slug:"/quick_start/data_sync/pulsar_clickhouse_example",permalink:"/zh-CN/docs/next/quick_start/data_sync/pulsar_clickhouse_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/quick_start/data_sync/pulsar_clickhouse_example.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Pulsar \u5230 ClickHouse \u793a\u4f8b",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"MySQL \u5230 Iceberg \u793a\u4f8b",permalink:"/zh-CN/docs/next/quick_start/data_sync/mysql_iceberg_example"},next:{title:"Pulsar \u5230 MySQL \u793a\u4f8b",permalink:"/zh-CN/docs/next/quick_start/offline_data_sync/pulsar_mysql_example"}},o={},c=[{value:"\u73af\u5883\u90e8\u7f72",id:"\u73af\u5883\u90e8\u7f72",level:2},{value:"\u5b89\u88c5 InLong",id:"\u5b89\u88c5-inlong",level:3},{value:"\u6dfb\u52a0 Connectors",id:"\u6dfb\u52a0-connectors",level:3},{value:"\u5b89\u88c5 ClickHouse",id:"\u5b89\u88c5-clickhouse",level:3},{value:"\u96c6\u7fa4\u521d\u59cb\u5316",id:"\u96c6\u7fa4\u521d\u59cb\u5316",level:2},{value:"\u6ce8\u518c ClickHouse \u6570\u636e\u8282\u70b9",id:"\u6ce8\u518c-clickhouse-\u6570\u636e\u8282\u70b9",level:3},{value:"\u4efb\u52a1\u521b\u5efa",id:"\u4efb\u52a1\u521b\u5efa",level:2},{value:"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4",id:"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4",level:3},{value:"\u65b0\u5efa\u6570\u636e\u6e90",id:"\u65b0\u5efa\u6570\u636e\u6e90",level:3},{value:"\u65b0\u5efa\u6570\u636e\u76ee\u6807",id:"\u65b0\u5efa\u6570\u636e\u76ee\u6807",level:3},{value:"\u914d\u7f6e\u5b57\u6bb5\u4fe1\u606f",id:"\u914d\u7f6e\u5b57\u6bb5\u4fe1\u606f",level:3},{value:"\u5ba1\u6279\u6570\u636e\u6d41",id:"\u5ba1\u6279\u6570\u636e\u6d41",level:3},{value:"\u6d4b\u8bd5\u6570\u636e",id:"\u6d4b\u8bd5\u6570\u636e",level:2},{value:"\u53d1\u9001\u6570\u636e",id:"\u53d1\u9001\u6570\u636e",level:3},{value:"\u6570\u636e\u9a8c\u8bc1",id:"\u6570\u636e\u9a8c\u8bc1",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...r}=e;return(0,l.yg)(p,(0,a.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u5728\u4e0b\u9762\u7684\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u4e00\u4e2a\u5b8c\u6574\u7684\u793a\u4f8b\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Apache InLong \u521b\u5efa Pulsar -> ClickHouse \u6570\u636e\u540c\u6b65\u3002"),(0,l.yg)("h2",{id:"\u73af\u5883\u90e8\u7f72"},"\u73af\u5883\u90e8\u7f72"),(0,l.yg)("h3",{id:"\u5b89\u88c5-inlong"},"\u5b89\u88c5 InLong"),(0,l.yg)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5b89\u88c5 InLong \u7684\u5168\u90e8\u7ec4\u4ef6\uff0c\u8fd9\u91cc\u63d0\u4f9b\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/next/deployment/docker"},"Docker \u90e8\u7f72"),"\uff08\u63a8\u8350\uff09"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/next/deployment/bare_metal"},"Bare Metal \u90e8\u7f72"))),(0,l.yg)("h3",{id:"\u6dfb\u52a0-connectors"},"\u6dfb\u52a0 Connectors"),(0,l.yg)("p",null,"\u4e0b\u8f7d\u4e0e Flink \u7248\u672c\u5bf9\u5e94\u7684 ",(0,l.yg)("a",{parentName:"p",href:"https://inlong.apache.org/zh-CN/downloads"},"connectors"),"\uff0c\u89e3\u538b\u540e\u5c06 ",(0,l.yg)("inlineCode",{parentName:"p"},"sort-connector-jdbc-[version]-SNAPSHOT.jar")," \u653e\u5728 ",(0,l.yg)("inlineCode",{parentName:"p"},"/inlong-sort/connectors/")," \u76ee\u5f55\u4e0b\u3002"),(0,l.yg)("h3",{id:"\u5b89\u88c5-clickhouse"},"\u5b89\u88c5 ClickHouse"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"docker run -d --rm --net=host --name clickhouse -e CLICKHOUSE_USER=admin -e CLICKHOUSE_PASSWORD=inlong -e CLICKHOUSE_DEFAULT_ACCESS_MANAGEMENT=1 clickhouse/clickhouse-server:22.8\n")),(0,l.yg)("h2",{id:"\u96c6\u7fa4\u521d\u59cb\u5316"},"\u96c6\u7fa4\u521d\u59cb\u5316"),(0,l.yg)("p",null,"\u5f53\u6240\u6709\u5bb9\u5668\u90fd\u6210\u529f\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u8bbf\u95ee InLong Dashboard \u5730\u5740 http://localhost\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u8d26\u53f7\u767b\u5f55:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,l.yg)("h3",{id:"\u6ce8\u518c-clickhouse-\u6570\u636e\u8282\u70b9"},"\u6ce8\u518c ClickHouse \u6570\u636e\u8282\u70b9"),(0,l.yg)("p",null,"\u9875\u9762\u70b9\u51fb \u3010\u6570\u636e\u8282\u70b9\u3011\u2192\u3010\u65b0\u5efa\u3011\uff0c\u65b0\u589e ClickHouse \u6570\u636e\u8282\u70b9\uff1a"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Clickhouse Datanode",src:t(70379).A,width:"733",height:"537"})),(0,l.yg)("h2",{id:"\u4efb\u52a1\u521b\u5efa"},"\u4efb\u52a1\u521b\u5efa"),(0,l.yg)("h3",{id:"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4"},"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4"),(0,l.yg)("p",null,"\u9875\u9762\u70b9\u51fb\u3010\u6570\u636e\u540c\u6b65\u3011\u2192\u3010\u65b0\u5efa\u6570\u636e\u540c\u6b65\u3011\uff0c\u586b\u5199 \u6570\u636e\u6d41\u7ec4 ID \u548c SteamID\uff1a"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Group_Stream",src:t(97846).A,width:"1494",height:"418"})),(0,l.yg)("h3",{id:"\u65b0\u5efa\u6570\u636e\u6e90"},"\u65b0\u5efa\u6570\u636e\u6e90"),(0,l.yg)("p",null,"\u6570\u636e\u6765\u6e90\u4e2d \u70b9\u51fb \u3010\u65b0\u5efa\u3011\u2192\u3010Pulsar\u3011\uff0c\u914d\u7f6e\u6570\u636e\u6e90\u540d\u79f0\u3001\u5730\u5740\u3001\u7528\u6237\u5bc6\u7801\u4ee5\u53ca\u5e93\u8868\uff08test.source_table\uff09\u4fe1\u606f\u7b49\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Source",src:t(17761).A,width:"664",height:"791"})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6ce8\uff1a\u8bf7\u9884\u5148\u521b\u5efa Pulsar tenant\uff0cnamespace \u548c topic\u3002")),(0,l.yg)("h3",{id:"\u65b0\u5efa\u6570\u636e\u76ee\u6807"},"\u65b0\u5efa\u6570\u636e\u76ee\u6807"),(0,l.yg)("p",null,"\u6570\u636e\u76ee\u6807\u4e2d \u70b9\u51fb \u3010\u65b0\u5efa\u3011\u2192\u3010ClickHouse\u3011\uff0c\u914d\u7f6e\u540d\u79f0\u3001\u5e93\u8868\u3001\u5df2\u521b\u5efa\u7684 ck \u6570\u636e\u8282\u70b9\u3002\u6570\u636e\u540c\u6b65\u4e0d\u652f\u6301\u81ea\u52a8\u521b\u5efa\u6570\u636e\u76ee\u6807\u8868\uff0c\u6240\u4ee5\u9700\u8981\u624b\u52a8\u521b\u5efa\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Sink",src:t(5743).A,width:"1207",height:"400"})),(0,l.yg)("h3",{id:"\u914d\u7f6e\u5b57\u6bb5\u4fe1\u606f"},"\u914d\u7f6e\u5b57\u6bb5\u4fe1\u606f"),(0,l.yg)("p",null,"\u5206\u522b\u5728 \u3010\u6e90\u5b57\u6bb5\u3011 \u548c \u3010\u76ee\u6807\u5b57\u6bb5\u3011\u4e2d\u914d\u7f6e Schema \u6620\u5c04\u4fe1\u606f\uff0c\u5b8c\u6210\u540e\u70b9\u51fb \u3010\u63d0\u4ea4\u5ba1\u6279\u3011"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Fields",src:t(43187).A,width:"1009",height:"448"})),(0,l.yg)("h3",{id:"\u5ba1\u6279\u6570\u636e\u6d41"},"\u5ba1\u6279\u6570\u636e\u6d41"),(0,l.yg)("p",null,"\u9875\u9762\u70b9\u51fb\u3010\u5ba1\u6279\u7ba1\u7406\u3011->\u3010\u6211\u7684\u5ba1\u6279\u3011->\u3010\u8be6\u60c5\u3011->\u3010\u901a\u8fc7\u3011"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Approve",src:t(71299).A,width:"2279",height:"255"})),(0,l.yg)("p",null,"\u8fd4\u56de \u3010\u6570\u636e\u540c\u6b65\u3011\u9875\u9762\uff0c\u7b49\u5f85\u4efb\u52a1\u914d\u7f6e\u6210\u529f"),(0,l.yg)("h2",{id:"\u6d4b\u8bd5\u6570\u636e"},"\u6d4b\u8bd5\u6570\u636e"),(0,l.yg)("h3",{id:"\u53d1\u9001\u6570\u636e"},"\u53d1\u9001\u6570\u636e"),(0,l.yg)("p",null,"\u8fdb\u5165 pulsar \u5bb9\u5668"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"docker exec -it pulsar /bin/bash\n")),(0,l.yg)("p",null,"\u63d2\u5165 1000 \u6761\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\n# Pulsar info\nTENANT="public"\nNAMESPACE="default"\nTOPIC="test"\n\n# Insert data in a loop\nfor ((i=1; i<=1000; i++))\ndo\n# Generate data\nid=$i\nname="name_$i"\n\n    # Build one message\n    message="$id|$name"\n\n    # Produce message to pulsar\n    bin/pulsar-client produce persistent://$TENANT/$NAMESPACE/$TOPIC --messages $message\ndone\n')),(0,l.yg)("h3",{id:"\u6570\u636e\u9a8c\u8bc1"},"\u6570\u636e\u9a8c\u8bc1"),(0,l.yg)("p",null,"\u7136\u540e\u8fdb\u5165 ClickHouse \u5bb9\u5668\uff0c\u67e5\u770b\u5e93\u8868\u6570\u636e\uff1a"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Source_data",src:t(35016).A,width:"508",height:"312"})),(0,l.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.yg)("p",null,"ClickHouse \u5199\u5165\u6570\u636e\u5931\u8d25\uff0c\u53ef\u4ee5\u5728 Flink \u9875\u9762\u67e5\u770b\u62a5\u9519\uff0c\u5e76\u68c0\u67e5\u6240\u4f7f\u7528\u7684\u7528\u6237\u7684\u6743\u9650\u4ee5\u53ca\u8868\u5f15\u64ce"))}d.isMDXComponent=!0},71299:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/approve-da77c44b31a8a5bba47b7d3a82270958.png"},70379:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/clickhouse_datanode-dd32727538ef0be4148e666eaa2d43cd.png"},97846:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/group_stream-0614135fb1d6042215e8d24e1c228aa9.png"},5743:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/sink-5c7f106b38d98f05bd7a22164e59835d.png"},35016:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/sink_data-598241795b95bff65f7aeb0b60dc9d66.png"},43187:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/sink_fields-98c4092a5cc96549deb561b58199e023.png"},17761:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/source-6cd5345add63e4dbb4703c5a469ef270.png"}}]);