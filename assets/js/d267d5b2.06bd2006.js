"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[85097],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>s});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),g=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=g(e.components);return a.createElement(d.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=g(t),m=r,s=y["".concat(d,".").concat(m)]||y[m]||u[m]||l;return t?a.createElement(s,o(o({ref:n},p),{},{components:t})):a.createElement(s,o({ref:n},p))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[y]="string"==typeof e?e:r,o[1]=i;for(var g=2;g<l;g++)o[g]=t[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7830:(e,n,t)=>{t.d(n,{l:()=>a});const a={inLongVersion:"2.1.0-SNAPSHOT"}},39032:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=t(58168),r=(t(96540),t(15680)),l=t(7830);const o={title:"Oracle",sidebar_position:12},i=void 0,d={unversionedId:"data_node/load_node/oracle",id:"version-2.0.0/data_node/load_node/oracle",title:"Oracle",description:"Overview",source:"@site/versioned_docs/version-2.0.0/data_node/load_node/oracle.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/oracle",permalink:"/docs/2.0.0/data_node/load_node/oracle",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/data_node/load_node/oracle.md",tags:[],version:"2.0.0",sidebarPosition:12,frontMatter:{title:"Oracle",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"MySQL",permalink:"/docs/2.0.0/data_node/load_node/mysql"},next:{title:"PostgreSQL",permalink:"/docs/2.0.0/data_node/load_node/postgresql"}},g={},p=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"How to create an Oracle Load Node",id:"how-to-create-an-oracle-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"Oracle Load Node Options",id:"oracle-load-node-options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],y={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Oracle Load Node")," supports to write data into Oracle database. This document describes how to set up the Oracle Load\nNode to run SQL queries against Oracle database."),(0,r.yg)("h2",{id:"supported-version"},"Supported Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Load Node"),(0,r.yg)("th",{parentName:"tr",align:null},"Driver"),(0,r.yg)("th",{parentName:"tr",align:null},"Group Id"),(0,r.yg)("th",{parentName:"tr",align:null},"Artifact Id"),(0,r.yg)("th",{parentName:"tr",align:null},"JAR"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/2.0.0/data_node/load_node/oracle"},"Oracle")),(0,r.yg)("td",{parentName:"tr",align:null},"Oracle"),(0,r.yg)("td",{parentName:"tr",align:null},"com.oracle.database.jdbc"),(0,r.yg)("td",{parentName:"tr",align:null},"ojdbc8"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"},"Download"))))),(0,r.yg)("h2",{id:"dependencies"},"Dependencies"),(0,r.yg)("p",null,"In order to set up the ",(0,r.yg)("inlineCode",{parentName:"p"},"Oracle Load Node"),", the following provides dependency information for both projects using a\nbuild automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,r.yg)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-jdbc</artifactId>\n    <version>${l.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("p",null,"Oracle license is conflict with Inlong license. So We remove Oracle driver in pom.xml. User can modify pom.xml before maven\npackaging if User need use it."),(0,r.yg)("h2",{id:"how-to-create-an-oracle-load-node"},"How to create an Oracle Load Node"),(0,r.yg)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\n-- MySQL extract node\nCREATE TABLE `mysql_extract_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'mysql-cdc-inlong',\n  'url' = 'jdbc:mysql://localhost:3306/read',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'user'\n)\n\n-- Oracle load node\nCREATE TABLE `oracle_load_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'jdbc-inlong',\n  'url' = 'jdbc:oracle:thin://host:port/database/',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'public.user'\n)\n\n-- write data into Oracle\nINSERT INTO oracle_load_table \nSELECT id, name , age FROM mysql_extract_table;  \n\n")),(0,r.yg)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.yg)("p",null,"TODO: It will be supported in the future."),(0,r.yg)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.yg)("p",null,"TODO: It will be supported in the future."),(0,r.yg)("h2",{id:"oracle-load-node-options"},"Oracle Load Node Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Specify what connector to use, here should be 'jdbc-inlong'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The JDBC database url.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table-name"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of JDBC table to connect.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"driver"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The class name of the JDBC driver to use to connect to this URL, if not set, it will automatically be derived from the URL.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The JDBC user name. 'username' and 'password' must both be specified if any of them is specified.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The JDBC password.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection.max-retry-timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"60s"),(0,r.yg)("td",{parentName:"tr",align:null},"Duration"),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum timeout between retries. The timeout should be in second granularity and shouldn't be smaller than 1 second.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-rows"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"The max size of buffered records before flush. Can be set to zero to disable it.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.interval"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"1s"),(0,r.yg)("td",{parentName:"tr",align:null},"Duration"),(0,r.yg)("td",{parentName:"tr",align:null},"The flush interval mills, over this time, asynchronous threads will flush data. Can be set to '0' to disable it. Note, 'sink.buffer-flush.max-rows' can be set to '0' with the flush interval set allowing for complete async processing of buffered actions.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"The max retry times if writing records to database failed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"Defines the parallelism of the JDBC sink operator. By default, the parallelism is determined by the framework using the same parallelism of the upstream chained operator.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.ignore.changelog"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"Ignore all ",(0,r.yg)("inlineCode",{parentName:"td"},"RowKind"),", ingest them as ",(0,r.yg)("inlineCode",{parentName:"td"},"INSERT"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId=",(0,r.yg)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,r.yg)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,r.yg)("inlineCode",{parentName:"td"},"{nodeId}"),".")))),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Oracle type"),(0,r.yg)("th",{parentName:"tr",align:null},"Flink SQL type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY_FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY_DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT ",(0,r.yg)("br",null)," FLOAT(s) ",(0,r.yg)("br",null)," DOUBLE PRECISION ",(0,r.yg)("br",null)," REAL ",(0,r.yg)("br",null)," NUMBER(p, s)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(20, 0)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"REAL ",(0,r.yg)("br",null)," FLOAT4"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT8 ",(0,r.yg)("br",null)," DOUBLE PRECISION"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC(p, s) ",(0,r.yg)("br",null)," DECIMAL(p, s)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP ","[(p)]","WITHOUT TIMEZONE"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP ","[(p)][WITHOUT TIMEZONE]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR(n) ",(0,r.yg)("br",null)," VARCHAR(n) ",(0,r.yg)("br",null)," CLOB(n)"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"RAW(s) ",(0,r.yg)("br",null)," BLOB"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY")))))}m.isMDXComponent=!0}}]);