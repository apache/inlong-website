"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[38973],{3905:(t,n,e)=>{e.d(n,{Zo:()=>m,kt:()=>g});var a=e(67294);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function d(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,a,l=function(t,n){if(null==t)return{};var e,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var o=a.createContext({}),p=function(t){var n=a.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):d(d({},n),t)),e},m=function(t){var n=p(t.components);return a.createElement(o.Provider,{value:n},t.children)},u="mdxType",N={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(e),k=l,g=u["".concat(o,".").concat(k)]||u[k]||N[k]||r;return e?a.createElement(g,d(d({ref:n},m),{},{components:e})):a.createElement(g,d({ref:n},m))}));function g(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=e.length,d=new Array(r);d[0]=k;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=t,i[u]="string"==typeof t?t:l,d[1]=i;for(var p=2;p<r;p++)d[p]=e[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},9516:(t,n,e)=>{e.d(n,{Y:()=>a});const a={inLongVersion:"1.8.0"}},66681:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>d,metadata:()=>o,toc:()=>m});var a=e(87462),l=(e(67294),e(3905)),r=e(9516);const d={title:"MySQL",sidebar_position:11},i=void 0,o={unversionedId:"data_node/load_node/mysql",id:"version-1.8.0/data_node/load_node/mysql",title:"MySQL",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.8.0/data_node/load_node/mysql.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/mysql",permalink:"/zh-CN/docs/data_node/load_node/mysql",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.8.0/data_node/load_node/mysql.md",tags:[],version:"1.8.0",sidebarPosition:11,frontMatter:{title:"MySQL",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Kafka",permalink:"/zh-CN/docs/data_node/load_node/kafka"},next:{title:"Oracle",permalink:"/zh-CN/docs/data_node/load_node/oracle"}},p={},m=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Maven \u4f9d\u8d56",id:"maven-\u4f9d\u8d56",level:3},{value:"\u5982\u4f55\u521b\u5efa MySQL Load \u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa-mysql-load-\u8282\u70b9",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"InLong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"InLong Manager Client \u7528\u6cd5",id:"inlong-manager-client-\u7528\u6cd5",level:3},{value:"MySQL Load \u8282\u70b9\u53c2\u6570",id:"mysql-load-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],u={toc:m},N="wrapper";function k(t){let{components:n,...e}=t;return(0,l.kt)(N,(0,a.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MySQL Load")," \u8282\u70b9\u652f\u6301\u5c06\u6570\u636e\u5199\u5165 MySQL \u6570\u636e\u5e93\u3002 \u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u8bbe\u7f6e MySQL Load \u8282\u70b9\u4ee5\u5bf9 MySQL \u6570\u636e\u5e93\u8fd0\u884c SQL \u67e5\u8be2\u3002"),(0,l.kt)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Load \u8282\u70b9"),(0,l.kt)("th",{parentName:"tr",align:null},"Driver"),(0,l.kt)("th",{parentName:"tr",align:null},"Group Id"),(0,l.kt)("th",{parentName:"tr",align:null},"Artifact Id"),(0,l.kt)("th",{parentName:"tr",align:null},"JAR"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/data_node/load_node/mysql"},"MySQL")),(0,l.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql-connector-java"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://repo.maven.apache.org/maven2/mysql/mysql-connector-java/"},"\u4e0b\u8f7d"))))),(0,l.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,l.kt)("p",null,"\u4e3a\u4e86\u8bbe\u7f6e MySQL Load \u8282\u70b9, \u4e0b\u9762\u63d0\u4f9b\u4e86\u4f7f\u7528\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\uff08\u4f8b\u5982 Maven \u6216 SBT\uff09\u548c\u5e26\u6709 Sort Connector JAR \u5305\u7684 SQL \u5ba2\u6237\u7aef\u7684\u4e24\u4e2a\u9879\u76ee\u7684\u4f9d\u8d56\u5173\u7cfb\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"maven-\u4f9d\u8d56"},"Maven \u4f9d\u8d56"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-jdbc</artifactId>\n    <version>${r.Y.inLongVersion}</version>\n</dependency>\n`)),(0,l.kt)("p",null,"MySQL license \u548c Inlong license \u662f\u51b2\u7a81\u7684\u3002 \u6240\u4ee5\u6211\u4eec\u79fb\u9664\u4e86pom\u4e2d\u7684 MySQL \u9a71\u52a8\u4f9d\u8d56\u3002 \u5982\u679c\u6211\u4eec\u60f3\u4f7f\u7528\u8fd9\u4e2a\u8fde\u63a5\u5668\uff0c\u6211\u4eec\u53ef\u4ee5\u4fee\u6539pom\u6587\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa-mysql-load-\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa MySQL Load \u8282\u70b9"),(0,l.kt)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"\n-- MySQL Extract \u8282\u70b9\nCREATE TABLE `mysql_extract_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'mysql-cdc-inlong',\n  'url' = 'jdbc:mysql://localhost:3306/read',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'user'\n)\n\n-- MySQL Load \u8282\u70b9\nCREATE TABLE `mysql_load_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'jdbc-inlong',\n  'url' = 'jdbc:mysql://localhost:3306/write',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'user'\n)\n\n-- \u5199\u6570\u636e\u5230 MySQL\nINSERT INTO mysql_load_table \nSELECT id, name , age FROM mysql_extract_table;  \n\n")),(0,l.kt)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"InLong Dashboard \u7528\u6cd5"),(0,l.kt)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,l.kt)("h3",{id:"inlong-manager-client-\u7528\u6cd5"},"InLong Manager Client \u7528\u6cd5"),(0,l.kt)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,l.kt)("h2",{id:"mysql-load-\u8282\u70b9\u53c2\u6570"},"MySQL Load \u8282\u70b9\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9009"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connector"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4f7f\u7528\u4ec0\u4e48\u7c7b\u578b\u7684\u8fde\u63a5\u5668\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f 'jdbc-inlong'\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"JDBC \u6570\u636e\u5e93 url\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table-name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5230 JDBC \u8868\u7684\u540d\u79f0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"driver"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8fde\u63a5\u5230\u6b64 URL \u7684 JDBC \u9a71\u52a8\u7c7b\u540d\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u5c06\u81ea\u52a8\u4ece URL \u4e2d\u63a8\u5bfc\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"JDBC \u7528\u6237\u540d\u3002\u5982\u679c\u6307\u5b9a\u4e86 'username' \u548c 'password' \u4e2d\u7684\u4efb\u4e00\u53c2\u6570\uff0c\u5219\u4e24\u8005\u5fc5\u987b\u90fd\u88ab\u6307\u5b9a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"JDBC \u5bc6\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection.max-retry-timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"60s"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u91cd\u8bd5\u8d85\u65f6\u65f6\u95f4\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u4e14\u4e0d\u5e94\u8be5\u5c0f\u4e8e 1 \u79d2\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-rows"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"flush \u524d\u7f13\u5b58\u8bb0\u5f55\u7684\u6700\u5927\u503c\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a '0' \u6765\u7981\u7528\u5b83\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.buffer-flush.interval"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"1s"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"flush \u95f4\u9694\u65f6\u95f4\uff0c\u8d85\u8fc7\u8be5\u65f6\u95f4\u540e\u5f02\u6b65\u7ebf\u7a0b\u5c06 flush \u6570\u636e\u3002\u53ef\u4ee5\u8bbe\u7f6e\u4e3a '0' \u6765\u7981\u7528\u5b83\u3002\u6ce8\u610f, \u4e3a\u4e86\u5b8c\u5168\u5f02\u6b65\u5730\u5904\u7406\u7f13\u5b58\u7684 flush \u4e8b\u4ef6\uff0c\u53ef\u4ee5\u5c06 'sink.buffer-flush.max-rows' \u8bbe\u7f6e\u4e3a '0' \u5e76\u914d\u7f6e\u9002\u5f53\u7684 flush \u65f6\u95f4\u95f4\u9694\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5199\u5165\u8bb0\u5f55\u5230\u6570\u636e\u5e93\u5931\u8d25\u540e\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5b9a\u4e49 JDBC sink \u7b97\u5b50\u7684\u5e76\u884c\u5ea6\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5e76\u884c\u5ea6\u662f\u7531\u6846\u67b6\u51b3\u5b9a\uff1a\u4f7f\u7528\u4e0e\u4e0a\u6e38\u94fe\u5f0f\u7b97\u5b50\u76f8\u540c\u7684\u5e76\u884c\u5ea6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3agroupId=",(0,l.kt)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,l.kt)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,l.kt)("inlineCode",{parentName:"td"},"{nodeId}"),"\u3002")))),(0,l.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"MySQL \u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"Flink SQL \u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT ",(0,l.kt)("br",null)," TINYINT UNSIGNED"),(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT ",(0,l.kt)("br",null)," MEDIUMINT ",(0,l.kt)("br",null)," SMALLINT UNSIGNED"),(0,l.kt)("td",{parentName:"tr",align:null},"INT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT ",(0,l.kt)("br",null)," INT UNSIGNED"),(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT UNSIGNED"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(20, 0)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE ",(0,l.kt)("br",null)," DOUBLE PRECISION"),(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUMERIC(p, s) ",(0,l.kt)("br",null)," DECIMAL(p, s)"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN ",(0,l.kt)("br",null)," TINYINT(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIME ","[(p)]"),(0,l.kt)("td",{parentName:"tr",align:null},"TIME ","[(p)][WITHOUT TIMEZONE]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATETIME ","[(p)]"),(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP ","[(p)][WITHOUT TIMEZONE]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHAR(n) ",(0,l.kt)("br",null)," VARCHAR(n) ",(0,l.kt)("br",null)," TEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BINARY ",(0,l.kt)("br",null)," VARBINARY ",(0,l.kt)("br",null)," BLOB"),(0,l.kt)("td",{parentName:"tr",align:null},"BYTES")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY")))))}k.isMDXComponent=!0}}]);