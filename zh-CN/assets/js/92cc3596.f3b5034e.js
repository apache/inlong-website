"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6078],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91256:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={title:"\u4f7f\u7528\u793a\u4f8b",sidebar_position:3},l=void 0,s={unversionedId:"modules/sort/example",id:"version-1.9.0/modules/sort/example",title:"\u4f7f\u7528\u793a\u4f8b",description:"\u4e3a\u4e86\u66f4\u5bb9\u6613\u521b\u5efa InLong Sort \u4f5c\u4e1a\uff0c\u8fd9\u91cc\u6211\u4eec\u5217\u51fa\u4e86\u4e00\u4e9b\u6570\u636e\u6d41\u914d\u7f6e\u793a\u4f8b\u3002\u4e0b\u9762\u5c06\u4ecb\u7ecd InLong Sort \u7684 SQL\u3001Dashboard\u3001Manager \u5ba2\u6237\u7aef\u5de5\u5177\u7684\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.9.0/modules/sort/example.md",sourceDirName:"modules/sort",slug:"/modules/sort/example",permalink:"/zh-CN/docs/modules/sort/example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.9.0/modules/sort/example.md",tags:[],version:"1.9.0",sidebarPosition:3,frontMatter:{title:"\u4f7f\u7528\u793a\u4f8b",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/modules/sort/quick_start"},next:{title:"\u76d1\u63a7\u6307\u6807",permalink:"/zh-CN/docs/modules/sort/metrics"}},i={},p=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u51c6\u5907 InLong Sort \u548c Connectors",id:"\u51c6\u5907-inlong-sort-\u548c-connectors",level:2},{value:"\u4f7f\u7528 SQL API \u65b9\u5f0f",id:"\u4f7f\u7528-sql-api-\u65b9\u5f0f",level:2},{value:"\u8bfb MySQL \u5199 Kafka",id:"\u8bfb-mysql-\u5199-kafka",level:3},{value:"\u8bfb Kafka \u5199 Hive",id:"\u8bfb-kafka-\u5199-hive",level:3},{value:"\u5176\u5b83 Connectors",id:"\u5176\u5b83-connectors",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e3a\u4e86\u66f4\u5bb9\u6613\u521b\u5efa InLong Sort \u4f5c\u4e1a\uff0c\u8fd9\u91cc\u6211\u4eec\u5217\u51fa\u4e86\u4e00\u4e9b\u6570\u636e\u6d41\u914d\u7f6e\u793a\u4f8b\u3002\u4e0b\u9762\u5c06\u4ecb\u7ecd InLong Sort \u7684 SQL\u3001Dashboard\u3001Manager \u5ba2\u6237\u7aef\u5de5\u5177\u7684\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apache Flink 1.13.5"),(0,r.kt)("li",{parentName:"ul"},"MySQL"),(0,r.kt)("li",{parentName:"ul"},"Apache Kafka"),(0,r.kt)("li",{parentName:"ul"},"Apache Hadoop"),(0,r.kt)("li",{parentName:"ul"},"Apache Hive 3.x")),(0,r.kt)("h2",{id:"\u51c6\u5907-inlong-sort-\u548c-connectors"},"\u51c6\u5907 InLong Sort \u548c Connectors"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/modules/sort/quick_start"},"\u90e8\u7f72\u6307\u5f15"),"\u51c6\u5907 InLong Sort \u548c\u6570\u636e\u8282\u70b9 Connectors\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-sql-api-\u65b9\u5f0f"},"\u4f7f\u7528 SQL API \u65b9\u5f0f"),(0,r.kt)("p",null,"\u793a\u4f8b\u6784\u5efa\u4e86 MySQL --\x3e Kafka --\x3e Hive \u7684\u6570\u636e\u6d41\uff0c\u4e3a\u4e86\u4fbf\u4e8e\u7406\u89e3\u6d41\u7a0b\u6267\u884c\u8fc7\u7a0b\u8fdb\u884c\u4e86\u62c6\u89e3\u3002"),(0,r.kt)("h3",{id:"\u8bfb-mysql-\u5199-kafka"},"\u8bfb MySQL \u5199 Kafka"),(0,r.kt)("p",null,"\u5355\u8868\u540c\u6b65\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/flink run -c org.apache.inlong.sort.Entrance apache-inlong-[version]-bin/inlong-sort/sort-dist-[version].jar \\\n--sql.script.file mysql-to-kafka.sql\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mysql-to-kafka.sql")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `table_1`(\n    PRIMARY KEY (`id`) NOT ENFORCED,\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(2),\n    `event_type` STRING)\n    WITH (\n    'append-mode' = 'true',\n    'connector' = 'mysql-cdc-inlong',\n    'hostname' = 'localhost',\n    'username' = 'root',\n    'password' = 'password',\n    'database-name' = 'dbName',\n    'table-name' = 'tableName'\n);\n\nCREATE TABLE `table_2`(\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(2))\n    WITH (\n    'topic' = 'topicName',-- Your kafka topic\n    'properties.bootstrap.servers' = 'localhost:9092',\n    'connector' = 'kafka',\n    'json.timestamp-format.standard' = 'SQL',\n    'json.encode.decimal-as-plain-number' = 'true',\n    'json.map-null-key.literal' = 'null',\n    'json.ignore-parse-errors' = 'true',\n    'json.map-null-key.mode' = 'DROP',\n    'format' = 'json',\n    'json.fail-on-missing-field' = 'false'\n);\n\nINSERT INTO `table_2` \n    SELECT \n    `id` AS `id`,\n    `name` AS `name`,\n    `age` AS `age`,\n    CAST(NULL as FLOAT) AS `salary`,\n    `ts` AS `ts`\n    FROM `table_1`;\n\n")),(0,r.kt)("h3",{id:"\u8bfb-kafka-\u5199-hive"},"\u8bfb Kafka \u5199 Hive"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u9700\u8981\u5728 hive \u4e2d\u5148\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," \u8868\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/flink run -c org.apache.inlong.sort.Entrance apache-inlong-[version]-bin/inlong-sort/sort-dist-[version].jar \\\n--sql.script.file kafka-to-hive.sql\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kafka-to-hive.sql")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `table_1`(\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(2)\n    WITH (\n    'topic' = 'topicName',-- Your kafka topic\n    'properties.bootstrap.servers' = 'localhost:9092',\n    'connector' = 'kafka',\n    'scan.startup.mode' = 'earliest-offset',\n    'json.timestamp-format.standard' = 'SQL',\n    'json.encode.decimal-as-plain-number' = 'true',\n    'json.map-null-key.literal' = 'null',\n    'json.ignore-parse-errors' = 'true',\n    'json.map-null-key.mode' = 'DROP',\n    'format' = 'json',\n    'json.fail-on-missing-field' = 'false',\n    'properties.group.id' = 'groupId'-- Your group id\n);\n\nCREATE TABLE `user`(\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(9))\n    WITH (\n    'connector' = 'hive',\n    'default-database' = 'default',\n    'hive-version' = '3.1.2',\n    'hive-conf-dir' = 'hdfs://ip:9000/.../hive-site.xml' -- Put your hive-site.xml into HDFS\n);\n\nINSERT INTO `user` \n    SELECT \n    `id` AS `id`,\n    `name` AS `name`,\n    `age` AS `age`,\n    CAST(NULL as FLOAT) AS `salary`,\n    `ts` AS `ts`\n    FROM `table_1`;\n\n")),(0,r.kt)("h2",{id:"\u5176\u5b83-connectors"},"\u5176\u5b83 Connectors"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/data_node/extract_node/overview"},"Extract Node")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/data_node/load_node/overview"},"Load Node")," \u90e8\u5206\uff0c\u6709\u66f4\u4e30\u5bcc\u7684 connector \u53ef\u4ee5\u4f7f\u7528\uff0c\u53ef\u6839\u636e\u4f7f\u7528\u573a\u666f\u53c2\u8003\u914d\u7f6e\u3002"))}d.isMDXComponent=!0}}]);