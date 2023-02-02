"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[27885],{3905:(t,e,a)=>{a.d(e,{Zo:()=>g,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},g=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,g=o(t,["components","mdxType","originalType","parentName"]),u=p(a),m=l,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(k,i(i({ref:e},g),{},{components:a})):n.createElement(k,i({ref:e},g))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},51009:(t,e,a)=>{a.d(e,{Y:()=>n});const n={inLongVersion:"1.3.0-SNAPSHOT"}},38848:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>g});var n=a(87462),l=(a(67294),a(3905)),r=a(51009);const i={title:"Iceberg",sidebar_position:9},o=void 0,d={unversionedId:"data_node/load_node/iceberg",id:"version-1.3.0/data_node/load_node/iceberg",title:"Iceberg",description:"Overview",source:"@site/versioned_docs/version-1.3.0/data_node/load_node/iceberg.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/iceberg",permalink:"/docs/1.3.0/data_node/load_node/iceberg",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/data_node/load_node/iceberg.md",tags:[],version:"1.3.0",sidebarPosition:9,frontMatter:{title:"Iceberg",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Hive",permalink:"/docs/1.3.0/data_node/load_node/hive"},next:{title:"Kafka",permalink:"/docs/1.3.0/data_node/load_node/kafka"}},p={},g=[{value:"Overview",id:"overview",level:2},{value:"Version",id:"version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Usage",id:"usage",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"Iceberg Load Node Options",id:"iceberg-load-node-options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],u={toc:g};function c(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/"},"Apache Iceberg")," is a high-performance format for huge analytic tables."),(0,l.kt)("h2",{id:"version"},"Version"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Extract Node"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/1.3.0/data_node/load_node/iceberg"},"Iceberg")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://dev.mysql.com/doc"},"Iceberg"),": 0.12.x, 0.13.x ",(0,l.kt)("br",null))))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-iceberg</artifactId>\n    <version>${r.Y.inLongVersion}</version>\n</dependency>\n`)),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,l.kt)("p",null,"To create iceberg table in flink, we recommend to use ",(0,l.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/dev/table/sqlClient.html"},"Flink SQL Client")," because it\u2019s easier for users to understand the concepts."),(0,l.kt)("p",null,"Step.1 Start a standalone flink cluster within hadoop environment."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n# Start the flink standalone cluster\n./bin/start-cluster.sh\n")),(0,l.kt)("p",null,"Step.2 Start the Flink SQL client."),(0,l.kt)("p",null,"We\u2019ve created a separate ",(0,l.kt)("inlineCode",{parentName:"p"},"flink-runtime")," module in iceberg project to generate a bundled jar, which could be loaded by flink SQL client directly."),(0,l.kt)("p",null,"If we want to build the ",(0,l.kt)("inlineCode",{parentName:"p"},"flink-runtime")," bundled jar manually, please just build the ",(0,l.kt)("inlineCode",{parentName:"p"},"inlong")," project and it will generate the jar under ",(0,l.kt)("inlineCode",{parentName:"p"},"<inlong-root-dir>/inlong-sort/sort-connectors/iceberg/target"),"."),(0,l.kt)("p",null,"By default, iceberg has included hadoop jars for hadoop catalog. If we want to use hive catalog, we will need to load the hive jars when opening the flink sql client. Fortunately, inlong auto package a bundled hive jar into iceberg. So we could open the sql client as the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n./bin/sql-client.sh embedded -j <flink-runtime-directory>/sort-connector-iceberg-{inlong-version}.jar\n")),(0,l.kt)("p",null,"Step.3 create a table in current Flink catalog"),(0,l.kt)("p",null,"By default\uff0cwe do not need to create a catalog ,just use memory catalog. In catalog if ",(0,l.kt)("inlineCode",{parentName:"p"},"catalog-database.catalog-table")," doesn't exist, it will be created automatic.Here we just load data into it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Table managed in Hive catalog")),(0,l.kt)("p",null,"The following SQL will create a Flink table in the current Flink catalog, which maps to the iceberg table ",(0,l.kt)("inlineCode",{parentName:"p"},"default_database.iceberg_table")," managed in iceberg catalog.Because catalog type default is hive,so here do not need to put ",(0,l.kt)("inlineCode",{parentName:"p"},"catalog-type"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE flink_table (\n    id   BIGINT,\n    data STRING\n) WITH (\n    'connector'='iceberg',\n    'catalog-name'='hive_prod',\n    'uri'='thrift://localhost:9083',\n    'warehouse'='hdfs://nn:8020/path/to/warehouse'\n);\n")),(0,l.kt)("p",null,"If you want to create a Flink table mapping to a different iceberg table managed in Hive catalog (such as ",(0,l.kt)("inlineCode",{parentName:"p"},"hive_db.hive_iceberg_table")," in Hive), then you can create Flink table as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE flink_table (\n    id   BIGINT,\n    data STRING\n) WITH (\n    'connector'='iceberg',\n    'catalog-name'='hive_prod',\n    'catalog-database'='hive_db',\n    'catalog-table'='hive_iceberg_table',\n    'uri'='thrift://localhost:9083',\n    'warehouse'='hdfs://nn:8020/path/to/warehouse'\n);\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The underlying catalog database (",(0,l.kt)("inlineCode",{parentName:"p"},"hive_db")," in the above example) will be created automatically if it does not exist when writing records into the Flink table.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Table managed in hadoop catalog")),(0,l.kt)("p",null,"The following SQL will create a Flink table in current Flink catalog, which maps to the iceberg table ",(0,l.kt)("inlineCode",{parentName:"p"},"default_database.flink_table")," managed in hadoop catalog."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE flink_table (\n    id   BIGINT,\n    data STRING\n) WITH (\n    'connector'='iceberg',\n    'catalog-name'='hadoop_prod',\n    'catalog-type'='hadoop',\n    'warehouse'='hdfs://nn:8020/path/to/warehouse'\n);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Table managed in custom catalog")),(0,l.kt)("p",null,"The following SQL will create a Flink table in current Flink catalog, which maps to the iceberg table ",(0,l.kt)("inlineCode",{parentName:"p"},"default_database.flink_table")," managed in custom catalog."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE flink_table (\n    id   BIGINT,\n    data STRING\n) WITH (\n    'connector'='iceberg',\n    'catalog-name'='custom_prod',\n    'catalog-type'='custom',\n    'catalog-impl'='com.my.custom.CatalogImpl',\n     -- More table properties for the customized catalog\n    'my-additional-catalog-config'='my-value',\n     ...\n);\n")),(0,l.kt)("p",null,"Please check sections under the Integrations tab for all custom catalogs."),(0,l.kt)("p",null,"Step.4 insert data into iceberg table "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO `flink_table` \n    SELECT \n    `id` AS `id`,\n    `d` AS `name`\n    FROM `source_table`\n")),(0,l.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("h2",{id:"iceberg-load-node-options"},"Iceberg Load Node Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connector"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify what connector to use, here should be ",(0,l.kt)("inlineCode",{parentName:"td"},"'iceberg'"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog-type"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"hive"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hive")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"hadoop")," for built-in catalogs, or left unset for custom catalog implementations using catalog-impl.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog-name"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Catalog name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog-database"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Database name managed in the iceberg catalog.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog-table"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Table name managed in the underlying iceberg catalog and database.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog-impl"),(0,l.kt)("td",{parentName:"tr",align:null},"optional for custom catalog"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The fully-qualified class name custom catalog implementation, must be set if ",(0,l.kt)("inlineCode",{parentName:"td"},"catalog-type")," is unset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache-enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable catalog cache, default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uri"),(0,l.kt)("td",{parentName:"tr",align:null},"required for hive catalog"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The Hive metastore\u2019s thrift URI.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clients"),(0,l.kt)("td",{parentName:"tr",align:null},"optional for hive catalog"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"The Hive metastore client pool size, default value is 2.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"warehouse"),(0,l.kt)("td",{parentName:"tr",align:null},"optional for hadoop catalog or hive catalog"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"For Hive catalog\uff0cis the Hive warehouse location, users should specify this path if neither set the ",(0,l.kt)("inlineCode",{parentName:"td"},"hive-conf-dir")," to specify a location containing a ",(0,l.kt)("inlineCode",{parentName:"td"},"hive-site.xml")," configuration file nor add a correct ",(0,l.kt)("inlineCode",{parentName:"td"},"hive-site.xml")," to classpath. For hadoop catalog\uff0cThe HDFS directory to store metadata files and data files.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hive-conf-dir"),(0,l.kt)("td",{parentName:"tr",align:null},"optional for hive catalog"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to a directory containing a ",(0,l.kt)("inlineCode",{parentName:"td"},"hive-site.xml")," configuration file which will be used to provide custom Hive configuration values. The value of ",(0,l.kt)("inlineCode",{parentName:"td"},"hive.metastore.warehouse.dir")," from ",(0,l.kt)("inlineCode",{parentName:"td"},"<hive-conf-dir>/hive-site.xml")," (or hive configure file from classpath) will be overwrote with the ",(0,l.kt)("inlineCode",{parentName:"td"},"warehouse")," value if setting both ",(0,l.kt)("inlineCode",{parentName:"td"},"hive-conf-dir")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"warehouse")," when creating iceberg catalog.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlong.metric"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId&streamId&nodeId.")))),(0,l.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/spec/#schemas-and-data-types"},"Iceberg data type")," detail. Here is iceberg type convert to flink type when load data."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flink SQL Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Iceberg Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,l.kt)("td",{parentName:"tr",align:null},"FIXED(L)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VARBINARY"),(0,l.kt)("td",{parentName:"tr",align:null},"BINARY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(P,S)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.kt)("td",{parentName:"tr",align:null},"INT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.kt)("td",{parentName:"tr",align:null},"INT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:null},"INT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},"LONG")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIME"),(0,l.kt)("td",{parentName:"tr",align:null},"TIME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ"),(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMPTZ")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INTERVAL"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,l.kt)("td",{parentName:"tr",align:null},"LIST")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MULTISET"),(0,l.kt)("td",{parentName:"tr",align:null},"MAP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MAP"),(0,l.kt)("td",{parentName:"tr",align:null},"MAP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ROW"),(0,l.kt)("td",{parentName:"tr",align:null},"STRUCT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAW"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))))}c.isMDXComponent=!0}}]);