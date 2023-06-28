"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[50474],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58504:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"Example",sidebar_position:3},l=void 0,s={unversionedId:"modules/sort/example",id:"version-1.4.0/modules/sort/example",title:"Example",description:"To make it easier for you to create InLong Sort jobs, here we list some data stream configuration examples.",source:"@site/versioned_docs/version-1.4.0/modules/sort/example.md",sourceDirName:"modules/sort",slug:"/modules/sort/example",permalink:"/docs/1.4.0/modules/sort/example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.4.0/modules/sort/example.md",tags:[],version:"1.4.0",sidebarPosition:3,frontMatter:{title:"Example",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/1.4.0/modules/sort/quick_start"},next:{title:"Monitor Metrics",permalink:"/docs/1.4.0/modules/sort/metrics"}},i={},p=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Prepare InLong Sort And Connectors",id:"prepare-inlong-sort-and-connectors",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:2},{value:"MySQL to Kafka",id:"mysql-to-kafka",level:3},{value:"Kafka to Hive",id:"kafka-to-hive",level:3},{value:"Other Connectors",id:"other-connectors",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To make it easier for you to create InLong Sort jobs, here we list some data stream configuration examples.\nThe following will introduce SQL, Dashboard, Manager Client Tools methods to use Inlong Sort."),(0,a.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Apache Flink 1.13.5"),(0,a.kt)("li",{parentName:"ul"},"MySQL"),(0,a.kt)("li",{parentName:"ul"},"Apache Kafka"),(0,a.kt)("li",{parentName:"ul"},"Apache Hadoop"),(0,a.kt)("li",{parentName:"ul"},"Apache Hive 3.x")),(0,a.kt)("h2",{id:"prepare-inlong-sort-and-connectors"},"Prepare InLong Sort And Connectors"),(0,a.kt)("p",null,"You can prepare InLong Sort and Data Node Connectors by referring to ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4.0/modules/sort/quick_start"},"Deployment Guide"),"."),(0,a.kt)("h2",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,a.kt)("p",null,"This example defines the data flow for a single table(mysql--\x3ekafka--\x3ehive). "),(0,a.kt)("h3",{id:"mysql-to-kafka"},"MySQL to Kafka"),(0,a.kt)("p",null,"Single table sync example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/flink run -c org.apache.inlong.sort.Entrance apache-inlong-[version]-bin/inlong-sort/sort-dist-[version].jar \\\n--sql.script.file mysql-to-kafka.sql\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mysql-to-kafka.sql")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `table_1`(\n    PRIMARY KEY (`id`) NOT ENFORCED,\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(2),\n    `event_type` STRING)\n    WITH (\n    'append-mode' = 'true',\n    'connector' = 'mysql-cdc-inlong',\n    'hostname' = 'localhost',\n    'username' = 'root',\n    'password' = 'password',\n    'database-name' = 'dbName',\n    'table-name' = 'tableName'\n);\n\nCREATE TABLE `table_2`(\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(2))\n    WITH (\n    'topic' = 'topicName',-- Your kafka topic\n    'properties.bootstrap.servers' = 'localhost:9092',\n    'connector' = 'kafka',\n    'json.timestamp-format.standard' = 'SQL',\n    'json.encode.decimal-as-plain-number' = 'true',\n    'json.map-null-key.literal' = 'null',\n    'json.ignore-parse-errors' = 'true',\n    'json.map-null-key.mode' = 'DROP',\n    'format' = 'json',\n    'json.fail-on-missing-field' = 'false'\n);\n\nINSERT INTO `table_2` \n    SELECT \n    `id` AS `id`,\n    `name` AS `name`,\n    `age` AS `age`,\n    CAST(NULL as FLOAT) AS `salary`,\n    `ts` AS `ts`\n    FROM `table_1`;\n\n")),(0,a.kt)("h3",{id:"kafka-to-hive"},"Kafka to Hive"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"First you need to create ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," table in Hive.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/flink run -c org.apache.inlong.sort.Entrance apache-inlong-[version]-bin/inlong-sort/sort-dist-[version].jar \\\n--sql.script.file kafka-to-hive.sql\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kafka-to-hive.sql")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `table_1`(\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(2)\n    WITH (\n    'topic' = 'topicName',-- Your kafka topic\n    'properties.bootstrap.servers' = 'localhost:9092',\n    'connector' = 'kafka',\n    'scan.startup.mode' = 'earliest-offset',\n    'json.timestamp-format.standard' = 'SQL',\n    'json.encode.decimal-as-plain-number' = 'true',\n    'json.map-null-key.literal' = 'null',\n    'json.ignore-parse-errors' = 'true',\n    'json.map-null-key.mode' = 'DROP',\n    'format' = 'json',\n    'json.fail-on-missing-field' = 'false',\n    'properties.group.id' = 'groupId'-- Your group id\n);\n\nCREATE TABLE `user`(\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(9))\n    WITH (\n    'connector' = 'hive',\n    'default-database' = 'default',\n    'hive-version' = '3.1.2',\n    'hive-conf-dir' = 'hdfs://ip:9000/.../hive-site.xml' -- Put your hive-site.xml into HDFS\n);\n\nINSERT INTO `user` \n    SELECT \n    `id` AS `id`,\n    `name` AS `name`,\n    `age` AS `age`,\n    CAST(NULL as FLOAT) AS `salary`,\n    `ts` AS `ts`\n    FROM `table_1`;\n\n")),(0,a.kt)("h2",{id:"other-connectors"},"Other Connectors"),(0,a.kt)("p",null,"there are lots of supported ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4.0/data_node/extract_node/overview"},"Extract Node")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4.0/data_node/load_node/overview"},"Load Node")," , you can use them directly."))}u.isMDXComponent=!0}}]);