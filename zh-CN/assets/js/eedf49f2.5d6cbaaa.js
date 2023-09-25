"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[21196],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(n),N=r,g=u["".concat(o,".").concat(N)]||u[N]||k[N]||l;return n?a.createElement(g,d(d({ref:e},m),{},{components:n})):a.createElement(g,d({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,d=new Array(l);d[0]=N;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[u]="string"==typeof t?t:r,d[1]=i;for(var p=2;p<l;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},81877:(t,e,n)=>{n.d(e,{Y:()=>a});const a={inLongVersion:"1.10.0-SNAPSHOT"}},77136:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>N,frontMatter:()=>d,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(81877);const d={title:"SQLServer",sidebar_position:14},i=void 0,o={unversionedId:"data_node/load_node/sqlserver",id:"data_node/load_node/sqlserver",title:"SQLServer",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data_node/load_node/sqlserver.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/sqlserver",permalink:"/zh-CN/docs/next/data_node/load_node/sqlserver",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/load_node/sqlserver.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"SQLServer",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL",permalink:"/zh-CN/docs/next/data_node/load_node/postgresql"},next:{title:"TDSQL-PostgreSQL",permalink:"/zh-CN/docs/next/data_node/load_node/tdsql-postgresql"}},p={},m=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Maven \u4f9d\u8d56",id:"maven-\u4f9d\u8d56",level:3},{value:"\u5982\u4f55\u521b\u5efa SQLServer Load \u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa-sqlserver-load-\u8282\u70b9",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"InLong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"InLong Manager Client \u7528\u6cd5",id:"inlong-manager-client-\u7528\u6cd5",level:3},{value:"SQLServer Load \u8282\u70b9\u53c2\u6570",id:"sqlserver-load-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u6570\u636e\u6620\u5c04",id:"\u6570\u636e\u6620\u5c04",level:2}],u={toc:m},k="wrapper";function N(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SQLServer Load")," \u8282\u70b9\u652f\u6301\u5c06\u6570\u636e\u5199\u5165 MySQL \u6570\u636e\u5e93\u3002 \u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u8bbe\u7f6e SQLServer Load \u8282\u70b9\u4ee5\u5bf9 SQLServer \u6570\u636e\u5e93\u8fd0\u884c SQL \u67e5\u8be2\u3002"),(0,r.kt)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Load \u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:null},"Driver"),(0,r.kt)("th",{parentName:"tr",align:null},"Group Id"),(0,r.kt)("th",{parentName:"tr",align:null},"Artifact Id"),(0,r.kt)("th",{parentName:"tr",align:null},"JAR"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/next/data_node/load_node/sqlserver"},"SQLServer")),(0,r.kt)("td",{parentName:"tr",align:null},"SQL Server"),(0,r.kt)("td",{parentName:"tr",align:null},"com.microsoft.sqlserver"),(0,r.kt)("td",{parentName:"tr",align:null},"mssql-jdbc"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"\u4e0b\u8f7d"))))),(0,r.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.kt)("p",null,"\u4e3a\u4e86\u8bbe\u7f6e SQLServer Load \u8282\u70b9, \u4e0b\u9762\u63d0\u4f9b\u4e86\u4f7f\u7528\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\uff08\u4f8b\u5982 Maven \u6216 SBT\uff09\u548c\u5e26\u6709 Sort Connector JAR \u5305\u7684 SQL \u5ba2\u6237\u7aef\u7684\u4e24\u4e2a\u9879\u76ee\u7684\u4f9d\u8d56\u5173\u7cfb\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"maven-\u4f9d\u8d56"},"Maven \u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-jdbc</artifactId>\n    <version>${l.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa-sqlserver-load-\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa SQLServer Load \u8282\u70b9"),(0,r.kt)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\n-- MySQL Extract \u8282\u70b9\nCREATE TABLE `mysql_extract_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'mysql-cdc-inlong',\n  'url' = 'jdbc:mysql://localhost:3306/read',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'user'\n)\n\n-- SQLServer Load \u8282\u70b9\nCREATE TABLE `sqlserver_load_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'jdbc-inlong',\n  'url' = 'jdbc:sqlserver://localhost:1433;databaseName=column_type_test',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'dbo.work1'\n)\n\n-- \u5199\u6570\u636e\u5230 SQLServer\nINSERT INTO sqlserver_load_table \nSELECT id, name , age FROM mysql_extract_table;  \n\n")),(0,r.kt)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"InLong Dashboard \u7528\u6cd5"),(0,r.kt)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,r.kt)("h3",{id:"inlong-manager-client-\u7528\u6cd5"},"InLong Manager Client \u7528\u6cd5"),(0,r.kt)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"sqlserver-load-\u8282\u70b9\u53c2\u6570"},"SQLServer Load \u8282\u70b9\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9009"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4f7f\u7528\u4ec0\u4e48\u7c7b\u578b\u7684\u8fde\u63a5\u5668\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f 'jdbc-inlong'\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC \u6570\u636e\u5e93 url\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table-name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5230 JDBC \u8868\u7684\u540d\u79f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"driver"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8fde\u63a5\u5230\u6b64 URL \u7684 JDBC \u9a71\u52a8\u7c7b\u540d\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u5c06\u81ea\u52a8\u4ece URL \u4e2d\u63a8\u5bfc\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC \u7528\u6237\u540d\u3002\u5982\u679c\u6307\u5b9a\u4e86 'username' \u548c 'password' \u4e2d\u7684\u4efb\u4e00\u53c2\u6570\uff0c\u5219\u4e24\u8005\u5fc5\u987b\u90fd\u88ab\u6307\u5b9a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC \u5bc6\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection.max-retry-timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"60s"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u91cd\u8bd5\u8d85\u65f6\u65f6\u95f4\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u4e14\u4e0d\u5e94\u8be5\u5c0f\u4e8e 1 \u79d2\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-rows"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"flush \u524d\u7f13\u5b58\u8bb0\u5f55\u7684\u6700\u5927\u503c\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a '0' \u6765\u7981\u7528\u5b83\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.buffer-flush.interval"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"1s"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"flush \u95f4\u9694\u65f6\u95f4\uff0c\u8d85\u8fc7\u8be5\u65f6\u95f4\u540e\u5f02\u6b65\u7ebf\u7a0b\u5c06 flush \u6570\u636e\u3002\u53ef\u4ee5\u8bbe\u7f6e\u4e3a '0' \u6765\u7981\u7528\u5b83\u3002\u6ce8\u610f, \u4e3a\u4e86\u5b8c\u5168\u5f02\u6b65\u5730\u5904\u7406\u7f13\u5b58\u7684 flush \u4e8b\u4ef6\uff0c\u53ef\u4ee5\u5c06 'sink.buffer-flush.max-rows' \u8bbe\u7f6e\u4e3a '0' \u5e76\u914d\u7f6e\u9002\u5f53\u7684 flush \u65f6\u95f4\u95f4\u9694\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5199\u5165\u8bb0\u5f55\u5230\u6570\u636e\u5e93\u5931\u8d25\u540e\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5b9a\u4e49 JDBC sink \u7b97\u5b50\u7684\u5e76\u884c\u5ea6\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5e76\u884c\u5ea6\u662f\u7531\u6846\u67b6\u51b3\u5b9a\uff1a\u4f7f\u7528\u4e0e\u4e0a\u6e38\u94fe\u5f0f\u7b97\u5b50\u76f8\u540c\u7684\u5e76\u884c\u5ea6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.ignore.changelog"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ffd\u7565\u6240\u6709 RowKind \u7c7b\u578b\u7684\u53d8\u66f4\u65e5\u5fd7\uff0c\u5c06\u5b83\u4eec\u5f53\u4f5c INSERT \u7684\u6570\u636e\u6765\u91c7\u96c6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3a groupId=",(0,r.kt)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,r.kt)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,r.kt)("inlineCode",{parentName:"td"},"{nodeId}"),"\u3002")))),(0,r.kt)("h2",{id:"\u6570\u636e\u6620\u5c04"},"\u6570\u636e\u6620\u5c04"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SQLServer \u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"Flink SQL \u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"char(n)"),(0,r.kt)("td",{parentName:"tr",align:null},"CHAR(n)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"varchar(n) ",(0,r.kt)("br",null)," nvarchar(n) ",(0,r.kt)("br",null)," nchar(n)"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR(n)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text ",(0,r.kt)("br",null)," ntext ",(0,r.kt)("br",null)," xml"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT ",(0,r.kt)("br",null)," BIGSERIAL"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decimal(p, s) ",(0,r.kt)("br",null)," money ",(0,r.kt)("br",null)," smallmoney"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:null},"NUMERIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float ",(0,r.kt)("br",null)," real"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bit"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"smallint"),(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time(n)"),(0,r.kt)("td",{parentName:"tr",align:null},"TIME(n)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datetime2 ",(0,r.kt)("br",null)," datetime ",(0,r.kt)("br",null)," smalldatetime"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP(n)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datetimeoffset"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ(3)")))))}N.isMDXComponent=!0}}]);