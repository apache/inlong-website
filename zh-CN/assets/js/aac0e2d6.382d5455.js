"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8107],{15680:(t,e,n)=>{n.d(e,{xA:()=>y,yg:()=>s});var a=n(96540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},y=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,y=g(t,["components","mdxType","originalType","parentName"]),p=o(n),m=r,s=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return n?a.createElement(s,i(i({ref:e},y),{},{components:n})):a.createElement(s,i({ref:e},y))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var g={};for(var d in e)hasOwnProperty.call(e,d)&&(g[d]=e[d]);g.originalType=t,g[p]="string"==typeof t?t:r,i[1]=g;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74739:(t,e,n)=>{n.d(e,{l:()=>a});const a={inLongVersion:"2.1.0-SNAPSHOT"}},51423:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>g,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>y});var a=n(58168),r=(n(96540),n(15680)),l=n(74739);const i={title:"Doris",sidebar_position:11},g=void 0,d={unversionedId:"data_node/extract_node/doris",id:"version-2.0.0/data_node/extract_node/doris",title:"Doris",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0.0/data_node/extract_node/doris.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/doris",permalink:"/zh-CN/docs/2.0.0/data_node/extract_node/doris",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/data_node/extract_node/doris.md",tags:[],version:"2.0.0",sidebarPosition:11,frontMatter:{title:"Doris",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"SQLServer-CDC",permalink:"/zh-CN/docs/2.0.0/data_node/extract_node/sqlserver-cdc"},next:{title:"TubeMQ",permalink:"/zh-CN/docs/2.0.0/data_node/extract_node/tube"}},o={},y=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Maven \u4f9d\u8d56",id:"maven-\u4f9d\u8d56",level:3},{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"\u521b\u5efa Doris Extract \u8868",id:"\u521b\u5efa-doris-extract-\u8868",level:3},{value:"\u5982\u4f55\u521b\u5efa Doris Extract \u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa-doris-extract-\u8282\u70b9",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"InLong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"InLong Manager Client \u7528\u6cd5",id:"inlong-manager-client-\u7528\u6cd5",level:3},{value:"Doris Extract \u8282\u70b9\u53c2\u6570",id:"doris-extract-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],p={toc:y},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.yg)(u,(0,a.A)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Doris Extract")," \u8282\u70b9 \u652f\u6301\u4ece Doris \u4e2d\u8bfb\u53d6\u6570\u636e\u3002\u672c\u7ae0\u8282\u4ecb\u7ecd\u5982\u4f55\u8bbe\u7f6e Doris Extract \u8282\u70b9\u4ee5\u5bf9 Doris \u6570\u636e\u5e93\u8fd0\u884c SQL \u67e5\u8be2\u3002"),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Extract \u8282\u70b9"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris \u7248\u672c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.0.0/data_node/extract_node/doris"},"Doris")),(0,r.yg)("td",{parentName:"tr",align:null},"0.13+")))),(0,r.yg)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.yg)("p",null,"\u4e3a\u4e86\u8bbe\u7f6e Doris Extract \u8282\u70b9, \u4e0b\u9762\u63d0\u4f9b\u4e86\u4f7f\u7528\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\uff08\u4f8b\u5982 Maven \u6216 SBT\uff09\u6240\u9700\u8981\u7684\u4f9d\u8d56\u4fe1\u606f\u3002"),(0,r.yg)("h3",{id:"maven-\u4f9d\u8d56"},"Maven \u4f9d\u8d56"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-doris</artifactId>\n    <version>${l.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,r.yg)("h3",{id:"\u521b\u5efa-doris-extract-\u8868"},"\u521b\u5efa Doris Extract \u8868"),(0,r.yg)("p",null,"\u5148\u5728 Doris \u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8868 ",(0,r.yg)("inlineCode",{parentName:"p"},"doris_extract_node"),", \u547d\u4ee4\u5982\u4e0b:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'[root@fe001 ~]# mysql -u root -h localhost -P 9030 -p000000\nmysql> use test;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n\nDatabase changed\nmysql> CREATE TABLE `doris_extract_node` (\n       `id` int(11) NOT NULL COMMENT "\u7528\u6237id",\n       `name` varchar(50) NOT NULL COMMENT "\u6635\u79f0",\n       `dr` tinyint(4) NULL COMMENT "\u903b\u8f91\u5220\u9664"\n       ) ENGINE=OLAP\n       UNIQUE KEY(`id`)\n       COMMENT "OLAP"\n       DISTRIBUTED BY HASH(`id`) BUCKETS 1\n       PROPERTIES (\n       "replication_allocation" = "tag.location.default: 1",\n       "in_memory" = "false",\n       "storage_format" = "V2"\n       );\nQuery OK, 0 rows affected (0.03 sec)\n\nmysql> insert into doris_extract_node values(1, \'zhangsan\', 0),(2, \'lisi\', 0),(3, \'wangwu\', 0);\nQuery OK, 3 rows affected (0.07 sec)\n{\'label\':\'insert_29d973e9509a48d4-a20e9f0e2d510605\', \'status\':\'VISIBLE\', \'txnId\':\'1032\'}\n\nmysql> select * from doris_extract_node;\n+------+---------+------+\n| id   | name    | dr   |\n+------+---------+------+\n|    1 | zhansan |    0 |\n|    2 | lisi    |    0 |\n|    3 | wangwu  |    0 |\n+------+---------+------+\n3 rows in set (0.02 sec)       \n')),(0,r.yg)("h2",{id:"\u5982\u4f55\u521b\u5efa-doris-extract-\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa Doris Extract \u8282\u70b9"),(0,r.yg)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,r.yg)("p",null,"\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Flink SQL")," \u521b\u5efa\u4e00\u4e2a Doris Extract \u8282\u70b9:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u8fde\u63a5\u5668\u662f ",(0,r.yg)("inlineCode",{parentName:"li"},"doris"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"# \u542f\u52a8flink sql-client, \u52a0\u8f7d doris connector jar\u5305\n[root@tasknode001 flink-1.13.5]# ./bin/sql-client.sh -l ./opt/connectors/doris/\n\n-- \u4f7f\u7528 Flink SQL \u521b\u5efa Doris \u8868 'doris_extract_node'\nFlink SQL> CREATE TABLE doris_extract_node (\n           `id` INT,\n           `name` STRINTG,\n           `dr` TINYINT\n           ) WITH (\n           'connector' = 'doris',\n           'fenodes' = 'localhost:8030',\n           'table.identifier' = 'test.doris_extract_node',\n           'username' = 'root',\n           'password' = '000000'\n           );\n  \n-- \u8bfb\u53d6\u6570\u636e\nFlink SQL> SELECT * FROM doris_extract_node;\n")),(0,r.yg)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"InLong Dashboard \u7528\u6cd5"),(0,r.yg)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,r.yg)("h3",{id:"inlong-manager-client-\u7528\u6cd5"},"InLong Manager Client \u7528\u6cd5"),(0,r.yg)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,r.yg)("h2",{id:"doris-extract-\u8282\u70b9\u53c2\u6570"},"Doris Extract \u8282\u70b9\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9009"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u8fde\u63a5\u5668 ",(0,r.yg)("inlineCode",{parentName:"td"},"doris"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fenodes"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris FE http \u5730\u5740")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table.identifier"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris \u8868\u540d\uff0c\u5982\uff1adb1.tbl1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbf\u95ee Doris \u7684\u7528\u6237\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbf\u95ee Doris \u7684\u5bc6\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.retries"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5411 Doris \u53d1\u9001\u8bf7\u6c42\u7684\u91cd\u8bd5\u6b21\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.connect.timeout.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5411 Doris \u53d1\u9001\u8bf7\u6c42\u7684\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.read.timeout.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5411 Doris \u53d1\u9001\u8bf7\u6c42\u7684\u8bfb\u53d6\u8d85\u65f6\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.query.timeout.s"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"3600"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u67e5\u8be2 Doris \u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u503c\u4e3a1\u5c0f\u65f6\uff0c-1\u8868\u793a\u65e0\u8d85\u65f6\u9650\u5236")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.tablet.size"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer.MAX_VALUE"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e00\u4e2a Partition \u5bf9\u5e94\u7684 Doris Tablet \u4e2a\u6570\u3002",(0,r.yg)("br",null),"\u6b64\u6570\u503c\u8bbe\u7f6e\u8d8a\u5c0f\uff0c\u5219\u4f1a\u751f\u6210\u8d8a\u591a\u7684 Partition\u3002\u4ece\u800c\u63d0\u5347 Flink \u4fa7\u7684\u5e76\u884c\u5ea6\uff0c\u4f46\u540c\u65f6\u4f1a\u5bf9 Doris \u9020\u6210\u66f4\u5927\u7684\u538b\u529b\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.batch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"1024"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e00\u6b21\u4ece BE \u8bfb\u53d6\u6570\u636e\u7684\u6700\u5927\u884c\u6570\u3002\u589e\u5927\u6b64\u6570\u503c\u53ef\u51cf\u5c11 Flink \u4e0e Doris \u4e4b\u95f4\u5efa\u7acb\u8fde\u63a5\u7684\u6b21\u6570\u3002",(0,r.yg)("br",null),"\u4ece\u800c\u51cf\u8f7b\u7f51\u7edc\u5ef6\u8fdf\u6240\u5e26\u6765\u7684\u7684\u989d\u5916\u65f6\u95f4\u5f00\u9500\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.exec.mem.limit"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"2147483648"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5355\u4e2a\u67e5\u8be2\u7684\u5185\u5b58\u9650\u5236\u3002\u9ed8\u8ba4\u4e3a 2GB\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.deserialize.arrow.async"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301\u5f02\u6b65\u8f6c\u6362 Arrow \u683c\u5f0f\u5230 flink-doris-connector \u8fed\u4ee3\u6240\u9700\u7684 RowBatch")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.deserialize.queue.size"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"64"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f02\u6b65\u8f6c\u6362 Arrow \u683c\u5f0f\u7684\u5185\u90e8\u5904\u7406\u961f\u5217\uff0c\u5f53 doris.deserialize.arrow.async \u4e3a true \u65f6\u751f\u6548")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.read.field"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bfb\u53d6 Doris \u8868\u7684\u5217\u540d\u5217\u8868\uff0c\u591a\u5217\u4e4b\u95f4\u4f7f\u7528\u9017\u53f7\u5206\u9694")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.filter.query"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fc7\u6ee4\u8bfb\u53d6\u6570\u636e\u7684\u8868\u8fbe\u5f0f\uff0c\u6b64\u8868\u8fbe\u5f0f\u900f\u4f20\u7ed9 Doris\u3002Doris \u4f7f\u7528\u6b64\u8868\u8fbe\u5f0f\u5b8c\u6210\u6e90\u7aef\u6570\u636e\u8fc7\u6ee4\u3002")))),(0,r.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Flink Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NULL_TYPE"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMALV2"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"HLL"),(0,r.yg)("td",{parentName:"tr",align:null},"Unsupported datatype")))),(0,r.yg)("p",null,"\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/blob/1.0.0-rc03/docs/zh-CN/extending-doris/flink-doris-connector.md"},"flink-doris-connector")," \u9875\u9762\u4ee5\u83b7\u53d6\u66f4\u591a\u7ec6\u8282\u3002"))}m.isMDXComponent=!0}}]);