"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9663],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>u});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function g(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),y=d(t),c=r,u=y["".concat(o,".").concat(c)]||y[c]||m[c]||l;return t?n.createElement(u,i(i({ref:a},p),{},{components:t})):n.createElement(u,i({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var g={};for(var o in a)hasOwnProperty.call(a,o)&&(g[o]=a[o]);g.originalType=e,g[y]="string"==typeof e?e:r,i[1]=g;for(var d=2;d<l;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},60752:(e,a,t)=>{},77270:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>g,toc:()=>d});var n=t(58168),r=(t(96540),t(15680));t(60752);const l={title:"Iceberg",sidebar_position:14},i=void 0,g={unversionedId:"data_node/extract_node/iceberg",id:"data_node/extract_node/iceberg",title:"Iceberg",description:"Overview",source:"@site/docs/data_node/extract_node/iceberg.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/iceberg",permalink:"/docs/next/data_node/extract_node/iceberg",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/extract_node/iceberg.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Iceberg",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"TubeMQ",permalink:"/docs/next/data_node/extract_node/tube"},next:{title:"Overview",permalink:"/docs/next/data_node/load_node/overview"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Version",id:"version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Usage",id:"usage",level:2},{value:"Flink SQL API",id:"flink-sql-api",level:3},{value:"Dashboard",id:"dashboard",level:3},{value:"Manager Client",id:"manager-client",level:3},{value:"Options",id:"options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],p={toc:d},y="wrapper";function m(e){let{components:a,...l}=e;return(0,r.yg)(y,(0,n.A)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://iceberg.apache.org/"},"Apache Iceberg")," is a high-performance format for huge analytic tables."),(0,r.yg)("h2",{id:"version"},"Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Extract Node"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/next/data_node/extract_node/iceberg"},"Iceberg")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://iceberg.apache.org/"},"Iceberg"),": 1.13+ ",(0,r.yg)("br",null))))),(0,r.yg)("h2",{id:"dependencies"},"Dependencies"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-iceberg</artifactId>\n    <version>${siteVariables.inLongVersion}</version>\n</dependency>\n")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"Before creating the Iceberg task, we need a Flink environment integrated with Hadoop."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Download ",(0,r.yg)("a",{parentName:"li",href:"https://hadoop.apache.org/releases.html"},(0,r.yg)("inlineCode",{parentName:"a"},"Apache Hadoop")),"."),(0,r.yg)("li",{parentName:"ul"},"Modify ",(0,r.yg)("inlineCode",{parentName:"li"},"jobmanager.sh")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"taskmanager.sh")," and add ",(0,r.yg)("inlineCode",{parentName:"li"},"Hadoop")," environment variables.\nFor commands, please refer to ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/flink/tree/master/flink-dist/src/main/flink-bin/bin"},"Apache Flink"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"export HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Modify ",(0,r.yg)("inlineCode",{parentName:"li"},"docker-compose.yml")," in the ",(0,r.yg)("inlineCode",{parentName:"li"},"docker/docker-compose")," and mount ",(0,r.yg)("inlineCode",{parentName:"li"},"Hadoop")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"Flink startup commands")," into the container:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-docker"},'  jobmanager:\n    image: apache/flink:1.15-scala_2.12\n    container_name: jobmanager\n    user: root\n    environment:\n      - |\n        FLINK_PROPERTIES=\n        jobmanager.rpc.address: jobmanager\n    volumes:\n      # Mount Hadoop\n      - HADOOP_HOME:HADOOP_HOME\n      # Mount the modified jobmanager.sh which adds the HADOOP_HOME env correctly\n      - /jobmanager.sh:/opt/flink/bin/jobmanager.sh\n    ports:\n      - "8081:8081"\n    command: jobmanager\n\n  taskmanager:\n    image: apache/flink:1.15-scala_2.12\n    container_name: taskmanager\n    environment:\n      - |\n        FLINK_PROPERTIES=\n        jobmanager.rpc.address: jobmanager\n        taskmanager.numberOfTaskSlots: 2\n    volumes:\n      # Mount Hadoop\n      - HADOOP_HOME:HADOOP_HOME\n      # Mount the modified taskmanager.sh which adds the HADOOP_HOME env correctly\n      - /taskmanager.sh:/opt/flink/bin/taskmanager.sh\n    command: taskmanager\n')),(0,r.yg)("h3",{id:"flink-sql-api"},"Flink SQL API"),(0,r.yg)("p",null,"Before using ",(0,r.yg)("inlineCode",{parentName:"p"},"Flink sql client"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"sql-client.sh")," also needs to add Hadoop environment variables and mounted to the container.\nFor commands, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/flink/blob/master/flink-table/flink-sql-client/bin/sql-client.sh"},"Apache Flink"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"export HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n")),(0,r.yg)("p",null,"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Flink sql cli"),"\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `iceberg_table_source`(\n    PRIMARY KEY (`_id`) NOT ENFORCED,\n    `_id` STRING,\n    `id` INT,\n    `name` STRING,\n    `age` INT)\n    WITH (\n    'connector' = 'iceberg-inlong',\n    'catalog-database' = 'DATABASES',\n    'catalog-table' = 'TABLE',\n    'catalog-type' = 'HIVE',\n    'catalog-name' = 'HIVE',\n    'streaming' = 'true',\n    'uri' = 'thrift://127.0.0.1:9083'\n);\n")),(0,r.yg)("h3",{id:"dashboard"},"Dashboard"),(0,r.yg)("p",null,"Source \u2192 Create \u2192 Iceberg"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"img.png",src:t(58062).A,width:"670",height:"518"})),(0,r.yg)("h3",{id:"manager-client"},"Manager Client"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Options"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Specify what connector to use, here should be ",(0,r.yg)("inlineCode",{parentName:"td"},"iceberg-inlong"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog-database"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Database name managed in the Iceberg directory")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog-table"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Table name managed in Iceberg catalogs and databases")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog-type"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hive")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"hadoop")," for built-in directories")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog-name"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"directory name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uri"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The thrift URI of Hive metastore, such as: ",(0,r.yg)("inlineCode",{parentName:"td"},"thrift://127.0.0.1:9083"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"warehouse"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"For a Hive directory, the Hive repository location. For the hadoop directory, it is the HDFS directory that stores metadata files and data files.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"In long metric label, the format of value is groupId=xxgroup&streamId=xxstream&nodeId=xxnode")))),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Flink SQL Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Iceberg Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY"),(0,r.yg)("td",{parentName:"tr",align:null},"FIXED(L)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARBINARY"),(0,r.yg)("td",{parentName:"tr",align:null},"BINARY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(P,S)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"LONG")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMPTZ")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INTERVAL"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"LIST")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MULTISET"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MAP"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ROW"),(0,r.yg)("td",{parentName:"tr",align:null},"STRUCT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"RAW"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))))}m.isMDXComponent=!0},58062:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/iceberg-source-a055e4c8c7151c200c54e94d6c8d089d.png"}}]);