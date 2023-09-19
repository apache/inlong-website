"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[19797],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),i=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=i(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),s=i(a),c=r,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(k,o(o({ref:e},m),{},{components:a})):n.createElement(k,o({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[s]="string"==typeof t?t:r,o[1]=d;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},30011:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u603b\u89c8",sidebar_position:1},o=void 0,d={unversionedId:"data_node/load_node/overview",id:"version-1.5.0/data_node/load_node/overview",title:"\u603b\u89c8",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.5.0/data_node/load_node/overview.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/overview",permalink:"/zh-CN/docs/1.5.0/data_node/load_node/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/data_node/load_node/overview.md",tags:[],version:"1.5.0",sidebarPosition:1,frontMatter:{title:"\u603b\u89c8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hudi",permalink:"/zh-CN/docs/1.5.0/data_node/extract_node/hudi"},next:{title:"\u81ea\u4e3b\u6d88\u8d39",permalink:"/zh-CN/docs/1.5.0/data_node/load_node/auto_consumption"}},p={},i=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u652f\u6301\u7684 Load \u8282\u70b9\u5217\u8868",id:"\u652f\u6301\u7684-load-\u8282\u70b9\u5217\u8868",level:2},{value:"\u652f\u6301\u7684 Flink \u7248\u672c\u5217\u8868",id:"\u652f\u6301\u7684-flink-\u7248\u672c\u5217\u8868",level:2},{value:"SQL API \u7684\u7528\u6cd5",id:"sql-api-\u7684\u7528\u6cd5",level:2}],m={toc:i},s="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"Load \u8282\u70b9\u5217\u8868\u662f\u4e00\u7ec4\u57fa\u4e8e ",(0,r.kt)("a",{href:"https://flink.apache.org/"},"Apache Flink",(0,r.kt)("sup",null,"\xae"))," \u7684 Sink Connectors \u7528\u4e8e\u5c06\u6570\u636e\u52a0\u8f7d\u5230\u4e0d\u540c\u7684\u5b58\u50a8\u7cfb\u7edf\u3002"),(0,r.kt)("h2",{id:"\u652f\u6301\u7684-load-\u8282\u70b9\u5217\u8868"},"\u652f\u6301\u7684 Load \u8282\u70b9\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Load \u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9a71\u52a8\u5305"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/load_node/kafka"},"Kafka")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kafka.apache.org/"},"Kafka"),": 0.10+"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/load_node/hbase"},"HBase")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://hbase.apache.org/"},"Hbase"),": 2.2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/load_node/postgresql"},"PostgreSQL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.postgresql.org/"},"PostgreSQL"),": 9.6, 10, 11, 12"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/load_node/oracle"},"Oracle")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.oracle.com/index.html"},"Oracle"),": 11, 12, 19"),(0,r.kt)("td",{parentName:"tr",align:null},"Oracle Driver: 19.3.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/load_node/mysql"},"MySQL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://dev.mysql.com/doc"},"MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://www.aliyun.com/product/rds/mysql"},"RDS MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://www.aliyun.com/product/polardb"},"PolarDB MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/cn/rds/aurora"},"Aurora MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://mariadb.org"},"MariaDB"),": 10.x ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/polardb/polardbx-sql"},"PolarDB X"),": 2.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 8.0.21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/load_node/tdsql-postgresql"},"TDSQL-PostgreSQL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://cloud.tencent.com/document/product/1129"},"TDSQL-PostgreSQL"),": 10.17"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/load_node/greenplum"},"Greenplum")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://greenplum.org/"},"Greenplum"),": 4.x, 5.x, 6.x"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/load_node/elasticsearch"},"Elasticsearch")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.elastic.co/"},"Elasticsearch"),": 6.x, 7.x"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/load_node/clickhouse"},"ClickHouse")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://clickhouse.com/"},"ClickHouse"),": 20.7+"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 0.3.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/load_node/hive"},"Hive")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://hive.apache.org/"},"Hive"),": 1.x, 2.x, 3.x"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/load_node/sqlserver"},"SQLServer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.microsoft.com/sql-server"},"SQLServer"),": 2012, 2014, 2016, 2017, 2019"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 7.2.2.jre8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/load_node/hdfs"},"HDFS")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://hadoop.apache.org/"},"HDFS"),": 2.x, 3.x"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/load_node/iceberg"},"Iceberg")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://iceberg.apache.org/"},"Iceberg"),": 0.13.1+"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/load_node/hudi"},"Hudi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://hudi.apache.org/"},"Hudi"),": 0.12.x"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("h2",{id:"\u652f\u6301\u7684-flink-\u7248\u672c\u5217\u8868"},"\u652f\u6301\u7684 Flink \u7248\u672c\u5217\u8868"),(0,r.kt)("p",null,"\u4e0b\u8868\u5c55\u793a\u4e86 InLong",(0,r.kt)("sup",null,"\xae")," Load \u8282\u70b9 \u548c Flink",(0,r.kt)("sup",null,"\xae")," \u7248\u672c\u4e4b\u95f4\u7684\u5bf9\u5e94\u5173\u7cfb\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"InLong",(0,r.kt)("sup",null,"\xae")," Load \u8282\u70b9\u7248\u672c"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Flink",(0,r.kt)("sup",null,"\xae")," \u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("font",{color:"DarkCyan"},"1.2.0")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("font",{color:"MediumVioletRed"},"1.13.5"))))),(0,r.kt)("h2",{id:"sql-api-\u7684\u7528\u6cd5"},"SQL API \u7684\u7528\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.5.0/modules/sort/quick_start"},"\u90e8\u7f72 InLong Sort")),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6570\u636e\u8282\u70b9")),(0,r.kt)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.13/dev/table/sqlClient.html"},"Flink SQL Client")," \u521b\u5efa\u4e00\u4e2a MySQL Load \u8282\u70b9\u5e76\u52a0\u8f7d\u6570\u636e\u8fdb\u53bb\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u521b\u5efa\u4e00\u4e2a MySQL Extract \u8282\u70b9\nCREATE TABLE mysql_extract_node (\n    id INT NOT NULL,\n    name STRING,\n    age INT,\n    weight DECIMAL(10,3),\n    PRIMARY KEY(id) NOT ENFORCED\n) WITH (\n      'connector' = 'mysql-cdc-inlong',\n      'hostname' = 'YourHostname',\n      'port' = '3306',\n      'username' = 'YourUsername',\n      'password' = 'YourPassword',\n      'database-name' = 'YourDatabaseName',\n      'table-name' = 'YourTableName'\n      );\n-- \u521b\u5efa\u4e00\u4e2a MySQL Load \u8282\u70b9\nCREATE TABLE mysql_load_node (\n id INT NOT NULL,\n name STRING,\n age INT,\n weight DECIMAL(10,3),\n PRIMARY KEY(id) NOT ENFORCED\n) WITH (\n 'connector' = 'jdbc-inlong',\n 'url' = 'jdbc:mysql://YourHostname:3306/YourDatabaseName',\n 'username' = 'YourUsername',\n 'password' = 'YourPassword',\n 'table-name' = 'YourTableName'\n);\n\nINSERT INTO mysql_load_node SELECT id, name, age, weight FROM mysql_extract_node;\n")))}u.isMDXComponent=!0}}]);