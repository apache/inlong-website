"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[87713],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(k,l(l({ref:t},s),{},{components:r})):a.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[c]="string"==typeof e?e:n,l[1]=d;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55964:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Overview",sidebar_position:1},l=void 0,d={unversionedId:"data_node/extract_node/overview",id:"version-1.4.0/data_node/extract_node/overview",title:"Overview",description:"Overview",source:"@site/versioned_docs/version-1.4.0/data_node/extract_node/overview.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/overview",permalink:"/docs/1.4.0/data_node/extract_node/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.4.0/data_node/extract_node/overview.md",tags:[],version:"1.4.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/1.4.0/modules/audit/quick_start"},next:{title:"Auto Push",permalink:"/docs/1.4.0/data_node/extract_node/auto_push"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Supported Extract Nodes",id:"supported-extract-nodes",level:2},{value:"Supported Flink Versions",id:"supported-flink-versions",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Extract Nodes is a set of Source Connectors based on ",(0,n.kt)("a",{href:"https://flink.apache.org/"},"Apache Flink",(0,n.kt)("sup",null,"\xae"))," for extracting data from different source systems. "),(0,n.kt)("h2",{id:"supported-extract-nodes"},"Supported Extract Nodes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Extract Node"),(0,n.kt)("th",{parentName:"tr",align:null},"Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Driver"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.4.0/data_node/extract_node/kafka"},"Kafka")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://kafka.apache.org/"},"Kafka"),": 0.10+"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.4.0/data_node/extract_node/pulsar"},"Pulsar")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/"},"Pulsar"),": 2.8.x+"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.4.0/data_node/extract_node/mongodb-cdc"},"MongoDB-CDC")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.mongodb.com"},"MongoDB"),": 3.6, 4.x, 5.0"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.4.0/data_node/extract_node/mysql-cdc"},"MySQL-CDC")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://dev.mysql.com/doc"},"MySQL"),": 5.6, 5.7, 8.0.x ",(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"td",href:"https://www.aliyun.com/product/rds/mysql"},"RDS MySQL"),": 5.6, 5.7, 8.0.x ",(0,n.kt)("br",null)," ",(0,n.kt)("a",{parentName:"td",href:"https://www.aliyun.com/product/polardb"},"PolarDB MySQL"),": 5.6, 5.7, 8.0.x ",(0,n.kt)("br",null)," ",(0,n.kt)("a",{parentName:"td",href:"https://aws.amazon.com/cn/rds/aurora"},"Aurora MySQL"),": 5.6, 5.7, 8.0.x ",(0,n.kt)("br",null)," ",(0,n.kt)("a",{parentName:"td",href:"https://mariadb.org"},"MariaDB"),": 10.x ",(0,n.kt)("br",null)," ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/polardb/polardbx-sql"},"PolarDB X"),": 2.0.1"),(0,n.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 8.0.21")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.4.0/data_node/extract_node/oracle-cdc"},"Oracle-CDC")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.oracle.com/index.html"},"Oracle"),": 11, 12, 19"),(0,n.kt)("td",{parentName:"tr",align:null},"Oracle Driver: 19.3.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.4.0/data_node/extract_node/postgresql-cdc"},"PostgreSQL-CDC")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.postgresql.org"},"PostgreSQL"),": 9.6, 10, 11, 12"),(0,n.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.4.0/data_node/extract_node/sqlserver-cdc"},"SqlServer-CDC")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.microsoft.com/sql-server"},"SQLServer"),": 2012, 2014, 2016, 2017, 2019"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("h2",{id:"supported-flink-versions"},"Supported Flink Versions"),(0,n.kt)("p",null,"The following table shows the version mapping between InLong",(0,n.kt)("sup",null,"\xae")," Extract Nodes and Flink",(0,n.kt)("sup",null,"\xae"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"InLong",(0,n.kt)("sup",null,"\xae")," Extract Nodes Version"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Flink",(0,n.kt)("sup",null,"\xae")," Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("font",{color:"DarkCyan"},"1.2.0")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("font",{color:"MediumVioletRed"},"1.13.5"))))),(0,n.kt)("h2",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.4.0/modules/sort/quick_start"},"Deploy InLong Sort")),(0,n.kt)("li",{parentName:"ul"},"Create Data Node")),(0,n.kt)("p",null,"The example shows how to create a MySQL Extract Node in ",(0,n.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.13/dev/table/sqlClient.html"},"Flink SQL Client")," and execute queries on it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- Creates a MySQL Extract Node\nCREATE TABLE mysql_extract_node (\n id INT NOT NULL,\n name STRING,\n age INT,\n weight DECIMAL(10,3),\n PRIMARY KEY(id) NOT ENFORCED\n) WITH (\n 'connector' = 'mysql-cdc-inlong',\n 'hostname' = 'YourHostname',\n 'port' = '3306',\n 'username' = 'YourUsername',\n 'password' = 'YourPassword',\n 'database-name' = 'YourDatabaseName',\n 'table-name' = 'YourTableName'\n);\n\nSELECT id, name, age, weight FROM mysql_extract_node;\n")))}u.isMDXComponent=!0}}]);