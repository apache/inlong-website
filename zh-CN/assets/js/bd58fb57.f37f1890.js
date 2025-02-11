"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[25926],{15680:(n,t,e)=>{e.d(t,{xA:()=>s,yg:()=>u});var a=e(96540);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function g(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)e=l[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)e=l[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var d=a.createContext({}),o=function(n){var t=a.useContext(d),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},s=function(n){var t=o(n.components);return a.createElement(d.Provider,{value:t},n.children)},y="mdxType",p={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(n,t){var e=n.components,r=n.mdxType,l=n.originalType,d=n.parentName,s=g(n,["components","mdxType","originalType","parentName"]),y=o(e),m=r,u=y["".concat(d,".").concat(m)]||y[m]||p[m]||l;return e?a.createElement(u,i(i({ref:t},s),{},{components:e})):a.createElement(u,i({ref:t},s))}));function u(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var l=e.length,i=new Array(l);i[0]=m;var g={};for(var d in t)hasOwnProperty.call(t,d)&&(g[d]=t[d]);g.originalType=n,g[y]="string"==typeof n?n:r,i[1]=g;for(var o=2;o<l;o++)i[o]=e[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},12433:(n,t,e)=>{e.d(t,{l:()=>a});const a={inLongVersion:"2.2.0-SNAPSHOT"}},97581:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>g,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=e(58168),r=(e(96540),e(15680)),l=e(12433);const i={title:"StarRocks",sidebar_position:17},g=void 0,d={unversionedId:"data_node/load_node/starrocks",id:"data_node/load_node/starrocks",title:"StarRocks",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data_node/load_node/starrocks.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/starrocks",permalink:"/zh-CN/docs/next/data_node/load_node/starrocks",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/load_node/starrocks.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"StarRocks",sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Doris",permalink:"/zh-CN/docs/next/data_node/load_node/doris"},next:{title:"Hudi",permalink:"/zh-CN/docs/next/data_node/load_node/hudi"}},o={},s=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Maven \u4f9d\u8d56",id:"maven-\u4f9d\u8d56",level:3},{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"\u521b\u5efa MySQL Extract \u8868",id:"\u521b\u5efa-mysql-extract-\u8868",level:3},{value:"\u521b\u5efa StarRocks Load \u8868",id:"\u521b\u5efa-starrocks-load-\u8868",level:3},{value:"\u5982\u4f55\u521b\u5efa StarRocks Load \u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa-starrocks-load-\u8282\u70b9",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"InLong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"InLong Manager Client \u7528\u6cd5",id:"inlong-manager-client-\u7528\u6cd5",level:3},{value:"StarRocks Load \u8282\u70b9\u53c2\u6570",id:"starrocks-load-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],y={toc:s},p="wrapper";function m(n){let{components:t,...e}=n;return(0,r.yg)(p,(0,a.A)({},y,e,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks Load")," \u8282\u70b9\u652f\u6301\u5c06\u6570\u636e\u5199\u5165 StarRocks \u6570\u636e\u5e93\u3002\n\u652f\u6301\u5355\u8868\u5199\u5165\u548c\u591a\u8868\u5199\u5165\u4e24\u79cd\u6a21\u5f0f\uff1a\u5355\u8868\u5199\u5165\u4e3a\u6307\u5b9a\u56fa\u5b9a\u5e93\u540d\u8868\u540d\u5199\u5165\uff1b\u591a\u8868\u5199\u5165\u652f\u6301\u6839\u636e\u6e90\u7aef\u6570\u636e\u683c\u5f0f\u81ea\u5b9a\u4e49\u5e93\u540d\u8868\u540d\u5199\u5165\uff0c\u9002\u7528\u4e8e\u6e90\u7aef\u591a\u8868\u5199\u5165\u6216\u8005\u6574\u5e93\u540c\u6b65\u7b49\u573a\u666f\u3002\n\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u8bbe\u7f6e StarRocks Load \u8282\u70b9\u5b9e\u73b0\u5199\u5165 StarRocks \u6570\u636e\u5e93\u8868\u3002"),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Load \u8282\u70b9"),(0,r.yg)("th",{parentName:"tr",align:null},"StarRocks \u7248\u672c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/next/data_node/load_node/starrocks"},"StarRocks")),(0,r.yg)("td",{parentName:"tr",align:null},"2.0+")))),(0,r.yg)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.yg)("p",null,"\u4e3a\u4e86\u8bbe\u7f6e StarRocks Load \u8282\u70b9, \u4e0b\u9762\u63d0\u4f9b\u4e86\u4f7f\u7528\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\uff08\u4f8b\u5982 Maven \u6216 SBT\uff09\u6240\u9700\u8981\u7684\u4f9d\u8d56\u4fe1\u606f\u3002"),(0,r.yg)("h3",{id:"maven-\u4f9d\u8d56"},"Maven \u4f9d\u8d56"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-starrocks</artifactId>\n    <version>${l.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,r.yg)("h3",{id:"\u521b\u5efa-mysql-extract-\u8868"},"\u521b\u5efa MySQL Extract \u8868"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5355\u8868\u5199\u5165\uff1a\u5728 MySQL ",(0,r.yg)("inlineCode",{parentName:"li"},"cdc")," \u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8868 ",(0,r.yg)("inlineCode",{parentName:"li"},"cdc_mysql_source"),"\u3002 \u547d\u4ee4\u5982\u4e0b:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"[root@fe001 ~]# mysql -u root -h localhost -P 3306 -p123456\nmysql> use cdc;\nDatabase changed\nmysql> CREATE TABLE `cdc_mysql_source` (\n       `id` int(11) NOT NULL AUTO_INCREMENT,\n       `name` varchar(64) DEFAULT NULL,\n       `dr` tinyint(3) DEFAULT 0,\n       PRIMARY KEY (`id`)\n       );\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> insert into cdc_mysql_source values(1, 'zhangsan', 0),(2, 'lisi', 0),(3, 'wangwu', 0);\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n\nmysql> select * from cdc_mysql_source;\n+----+----------+----+\n| id | name     | dr |\n+----+----------+----+\n|  1 | zhangsan |  0 |\n|  2 | lisi     |  0 |\n|  3 | wangwu   |  0 |\n+----+----------+----+\n3 rows in set (0.07 sec)\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u591a\u8868\u5199\u5165\uff1a\u5728 MySQL ",(0,r.yg)("inlineCode",{parentName:"li"},"user_db")," \u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8868 ",(0,r.yg)("inlineCode",{parentName:"li"},"user_id_name"),"\u3001",(0,r.yg)("inlineCode",{parentName:"li"},"user_id_score"),"\u3002 \u547d\u4ee4\u5982\u4e0b:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"[root@fe001 ~]# mysql -u root -h localhost -P 3306 -p123456\nmysql> use user_db;\nDatabase changed\nmysql> CREATE TABLE `user_id_name` (\n       `id` int(11) NOT NULL AUTO_INCREMENT,\n       `name` varchar(64) DEFAULT NULL\n       PRIMARY KEY (`id`)\n       );\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> CREATE TABLE `user_id_score` (\n       `id` int(11) NOT NULL AUTO_INCREMENT,\n       `score` double default 0,\n       PRIMARY KEY (`id`)\n       );\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> insert into user_id_name values(1001, 'lily'),(1002, 'tom'),(1003, 'alan');\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0 \n\nmysql> insert into user_id_score values(1001, 99),(1002, 96),(1003, 98);\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0 \n\nmysql> select * from user_id_name;\n+------+--------+\n|  id  | name   |\n+------+--------+\n| 1001 | lily   |\n| 1002 | tom    |\n| 1003 | alan   |\n+----+----------+\n3 rows in set (0.07 sec)    \n\nmysql> select * from user_id_score;\n+------+------+\n|  id  | name |\n+------+------+\n| 1001 | 99   |\n| 1002 | 96   |\n| 1003 | 98   |\n+----+--------+\n3 rows in set (0.07 sec)  \n")),(0,r.yg)("h3",{id:"\u521b\u5efa-starrocks-load-\u8868"},"\u521b\u5efa StarRocks Load \u8868"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5355\u8868\u5199\u5165\uff1a\u5728 StarRocks ",(0,r.yg)("inlineCode",{parentName:"li"},"cdc"),"\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8868",(0,r.yg)("inlineCode",{parentName:"li"},"cdc_starrocks_sink"),"\u3002\u547d\u4ee4\u5982\u4e0b:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'[root@fe001 ~]# mysql -u username -h localhost -P 9030 -p password\nmysql> use cdc;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\nDatabase changed\n\nmysql> CREATE TABLE `cdc_starrocks_sink` (\n       `id` int(11) NOT NULL COMMENT "\u7528\u6237id",\n       `name` varchar(50) NOT NULL COMMENT "\u6635\u79f0",\n       `dr` tinyint(4) NULL COMMENT "\u903b\u8f91\u5220\u9664"\n       ) ENGINE=OLAP\n       PRIMARY KEY(`id`)\n       COMMENT "OLAP"\n       DISTRIBUTED BY HASH(`id`) BUCKETS 1\n       PROPERTIES (\n       "replication_allocation" = "tag.location.default: 1"\n       );\nQuery OK, 0 rows affected (0.06 sec)\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u591a\u8868\u5199\u5165\uff1a\u5728 StarRocks ",(0,r.yg)("inlineCode",{parentName:"li"},"user_db"),"\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8868",(0,r.yg)("inlineCode",{parentName:"li"},"starrocks_user_id_name"),"\u3001",(0,r.yg)("inlineCode",{parentName:"li"},"starrocks_user_id_score"),"\u3002\u547d\u4ee4\u5982\u4e0b:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'[root@fe001 ~]# mysql -u username -h localhost -P 9030 -p password\nmysql> use user_db;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\nDatabase changed\n\nmysql> CREATE TABLE `starrocks_user_id_name` (\n       `id` int(11) NOT NULL COMMENT "\u7528\u6237id",\n       `name` varchar(50) NOT NULL COMMENT "\u6635\u79f0"\n       ) ENGINE=OLAP\n       PRIMARY KEY(`id`)\n       COMMENT "OLAP"\n       DISTRIBUTED BY HASH(`id`) BUCKETS 1\n       PROPERTIES (\n       "replication_allocation" = "tag.location.default: 1"\n       );\nQuery OK, 0 rows affected (0.06 sec)\n\nmysql> CREATE TABLE `starrocks_user_id_score` (\n       `id` int(11) NOT NULL COMMENT "\u7528\u6237id",\n       `score` double default 0\n       ) ENGINE=OLAP\n       PRIMARY KEY(`id`)\n       COMMENT "OLAP"\n       DISTRIBUTED BY HASH(`id`) BUCKETS 1\n       PROPERTIES (\n       "replication_allocation" = "tag.location.default: 1"\n       );\nQuery OK, 0 rows affected (0.06 sec)\n')),(0,r.yg)("h2",{id:"\u5982\u4f55\u521b\u5efa-starrocks-load-\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa StarRocks Load \u8282\u70b9"),(0,r.yg)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5355\u8868\u5199\u5165\uff1a StarRocks \u5355\u8868\u5199\u5165")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"[root@tasknode001 flink-1.13.5]# ./bin/sql-client.sh -l ./opt/connectors/mysql-cdc-inlong/ -l ./opt/connectors/starrocks/\nFlink SQL> SET 'execution.checkpointing.interval' = '3s';\n[INFO] Session property has been set.\n\nFlink SQL> SET 'table.dynamic-table-options.enabled' = 'true';\n[INFO] Session property has been set.\n\nFlink SQL> CREATE TABLE cdc_mysql_source (\n    >   id int\n    >   ,name VARCHAR\n    >   ,dr TINYINT\n    >   ,PRIMARY KEY (id) NOT ENFORCED\n    > ) WITH (\n    >  'connector' = 'mysql-cdc-inlong',\n    >  'hostname' = 'localhost',\n    >  'port' = '3306',\n    >  'username' = 'root',\n    >  'password' = '123456',\n    >  'database-name' = 'cdc',\n    >  'table-name' = 'cdc_mysql_source'\n    > );\n[INFO] Execute statement succeed.\n\nFlink SQL> CREATE TABLE cdc_starrocks_sink (\n    > id INT,\n    > name STRING,\n    > dr TINYINT\n    > ) WITH (\n    >  'connector' = 'starrocks-inlong',\n    >  'fenodes' = 'localhost:8030',\n    >  'table.identifier' = 'cdc.cdc_starrocks_sink',\n    >  'username' = 'username',\n    >  'password' = 'password',\n    >  'sink.properties.format' = 'json',\n    >  'sink.properties.strip_outer_array' = 'true'\n    > );\n[INFO] Execute statement succeed.\n\nFlink SQL> insert into cdc_starrocks_sink select * from cdc_mysql_source /*+ OPTIONS('server-id'='5402') */;\n[INFO] Submitting SQL update statement to the cluster...\n[INFO] SQL update statement has been successfully submitted to the cluster:\nJob ID: 5f89691571d7b3f3ca446589e3d0c3d3\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u591a\u8868\u5199\u5165\uff1a StarRocks \u591a\u8868\u5199\u5165")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"./bin/sql-client.sh -l ./opt/connectors/mysql-cdc-inlong/ -l ./opt/connectors/starrocks/\nFlink SQL> SET 'execution.checkpointing.interval' = '3s';\n[INFO] Session property has been set.\n\nFlink SQL> SET 'table.dynamic-table-options.enabled' = 'true';\n[INFO] Session property has been set.\n\nFlink SQL> CREATE TABLE cdc_mysql_source (\n    >   id int\n    >   ,name VARCHAR\n    >   ,dr TINYINT\n    >   ,PRIMARY KEY (id) NOT ENFORCED\n    > ) WITH (\n    >  'connector' = 'mysql-cdc-inlong',\n    >  'hostname' = 'localhost',\n    >  'port' = '3306',\n    >  'username' = 'root',\n    >  'password' = '123456',\n    >  'database-name' = 'test',\n    >  'table-name' = 'cdc_mysql_source'\n    > );\n[INFO] Execute statement succeed.\n\nFlink SQL> CREATE TABLE cdc_starrocks_sink (\n    > id INT,\n    > name STRING,\n    > dr TINYINT\n    > ) WITH (\n    >  'connector' = 'starrocks-inlong',\n    >  'fenodes' = 'localhost:8030',\n    >  'username' = 'username',\n    >  'password' = 'password',\n    >  'sink.multiple.enable' = 'true',\n    >  'sink.multiple.format' = 'canal-json',\n    >  'sink.multiple.database-pattern' = '${database}',\n    >  'sink.multiple.table-pattern' = 'StarRocks_${table}'\n    > );\n[INFO] Execute statement succeed.\n\nFlink SQL> insert into cdc_starrocks_sink select * from cdc_mysql_source /*+ OPTIONS('server-id'='5402') */;\n[INFO] Submitting SQL update statement to the cluster...\n[INFO] SQL update statement has been successfully submitted to the cluster:\nJob ID: 30feaa0ede92h6b6e25ea0cfda26df5e\n")),(0,r.yg)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"InLong Dashboard \u7528\u6cd5"),(0,r.yg)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,r.yg)("h3",{id:"inlong-manager-client-\u7528\u6cd5"},"InLong Manager Client \u7528\u6cd5"),(0,r.yg)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,r.yg)("h2",{id:"starrocks-load-\u8282\u70b9\u53c2\u6570"},"StarRocks Load \u8282\u70b9\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9009"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4f7f\u7528\u54ea\u4e2a connector \uff0c\u5408\u6cd5\u503c\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"starrocks-inlong"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jdbc-url"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5728 StarRocks \u4e2d\u6267\u884c\u67e5\u8be2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"load-url"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u683c\u5f0f\u4e3a fe_ip:http_port;fe_ip:http_port \u7528\u5206\u53f7(;)\u9694\u5f00\u3002\u7528\u4e8e\u5411 StarRocks \u6279\u91cf\u5199\u5165\u6570\u636e\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database-name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"StarRocks \u7684\u6570\u636e\u5e93\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table-name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"StarRocks \u7684\u8868\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"StarRocks \u8fde\u63a5\u7684\u7528\u6237\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"StarRocks \u8fde\u63a5\u7684\u53e3\u4ee4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.semantic"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"at-least-once"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009\u503c\u4e3a at-least-once \u6216 exactly-once (\u4ec5\u5728 checkpoint \u65f6\u5237\u65b0\u6570\u636e\uff0c",(0,r.yg)("inlineCode",{parentName:"td"},"sink.buffer-flush.*")," \u7b49\u53c2\u6570\u5c06\u4e0d\u518d\u5de5\u4f5c)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.version"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"AUTO"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"exectly-once\u8bed\u4e49\u7684\u5b9e\u73b0\u7248\u672c\uff0c\u53ea\u6709 connector \u57281.2.4\u53ca\u4ee5\u4e0a\u7684\u7248\u672c\u65f6\u624d\u53ef\u7528\u3002\u5982\u679c\u586b V2\uff0c\u5219\u4f7f\u7528 StarRocks \u7684 stream load \u4e8b\u52a1\u63a5\u53e3\u9700\u8981 2.4 \u53ca\u4ee5\u4e0a\u7684 StarRocks \u7248\u672c\u3002\u5982\u679c\u586b V1\uff0c\u5219\u4f7f\u7528 stream load \u975e\u4e8b\u52a1\u63a5\u53e3\u3002\u5982\u679c\u586b AUTO\uff0c\u5219 connector \u6839\u636e StarRocks \u662f\u5426\u652f\u6301\u4e8b\u52a1\u7684\u7279\u6027\u6765\u81ea\u52a8\u9009\u62e9 stream load \u7684\u4e8b\u52a1\u63a5\u53e3\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"94371840(90M)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6279\u91cf\u5237\u65b0\u7f13\u5b58\u6570\u636e\u7684\u5927\u5c0f\u9608\u503c\uff0c\u8303\u56f4\uff1a","[64MB, 10GB]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-rows"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"500000"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6279\u91cf\u5237\u65b0\u7f13\u5b58\u6570\u636e\u7684\u884c\u6570\u9608\u503c\uff0c\u8303\u56f4\uff1a","[64,000, 5000,000]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.interval-ms"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"300000"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6279\u91cf\u5237\u65b0\u7f13\u5b58\u6570\u636e\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u8303\u56f4\uff1a","[1000ms, 3600000ms]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Stream load \u8bf7\u6c42\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\uff0c\u8303\u56f4\uff1a","[0, 10]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.connect.timeout-ms"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5230\u6307\u5b9a\u7684 load-url \u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\uff0c\u8303\u56f4\uff1a","[100, 60000]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.properties.format"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"CSV"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165\u5230 StarRocks \u7684\u6570\u636e\u6587\u4ef6\u683c\u5f0f\uff0c\u53ef\u9009\u7684\u503c\u4e3a\uff1aCSV \u548c JSON \u3002\u9ed8\u8ba4\u4e3a: CSV")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.properties.*"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Stream load \u7684\u5c5e\u6027\uff0c\u4f8b\u5982\uff1a'sink.properties.columns' = 'k1, k2, k3'\u3002\u4ece StarRocks 2.4 \u5f00\u59cb\uff0cflink-connector-starrocks \u652f\u6301 Primary Key \u6a21\u5f0f\u4e0b\u7684\u6570\u636e\u90e8\u5206\u66f4\u65b0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.properties.ignore_json_size"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5ffd\u7565 json \u6570\u636e\u7684\u6279\u91cf\u5927\u5c0f\u9650\u5236(100MB)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.multiple.enable"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u51b3\u5b9a\u662f\u5426\u5f00\u59cb\u591a\u8868(\u6574\u5e93)\u5199\u5165\u7279\u6027\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"false")," \u3002\u5f53 ",(0,r.yg)("inlineCode",{parentName:"td"},"sink.multiple.enable")," \u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u4e5f\u9700\u8981\u8bbe\u7f6e ",(0,r.yg)("inlineCode",{parentName:"td"},"sink.multiple.format"),"\u3001 ",(0,r.yg)("inlineCode",{parentName:"td"},"sink.multiple.database-pattern")," \u548c ",(0,r.yg)("inlineCode",{parentName:"td"},"sink.multiple.table-pattern"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.multiple.format"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u591a\u8868(\u6574\u5e93)\u5199\u5165\u7684\u6570\u636e\u683c\u5f0f\uff0c\u5b83\u8868\u793a connector \u4e4b\u95f4\u6d41\u8f6c\u7684\u539f\u59cb\u4e8c\u8fdb\u5236\u6570\u636e\u7684\u5b9e\u9645\u683c\u5f0f\uff0c\u76ee\u524d\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"td"},"canal-json")," \u548c ",(0,r.yg)("inlineCode",{parentName:"td"},"debezium-json")," \u3002\u53ef\u4ee5\u67e5\u770b ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/inlong-website/blob/master/docs/data_node/load_node/kafka.md"},"kafka -- Dynamic Topic Extraction"),"\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.multiple.database-pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4ece\u539f\u59cb\u4e8c\u8fdb\u5236\u6570\u636e\u4e2d\u63d0\u53d6\u6570\u636e\u5e93\u540d\uff0c\u4ec5\u5728\u591a\u8868(\u6574\u5e93)\u540c\u6b65\u573a\u666f\u4e2d\u4f7f\u7528\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.multiple.table-pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4ece\u539f\u59cb\u4e8c\u8fdb\u5236\u6570\u636e\u4e2d\u63d0\u53d6\u8868\u540d\uff0c\u4ec5\u5728\u591a\u8868(\u6574\u5e93)\u540c\u6b65\u573a\u666f\u4e2d\u4f7f\u7528\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3a groupId=",(0,r.yg)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,r.yg)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,r.yg)("inlineCode",{parentName:"td"},"{nodeId}"),"\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.multiple.schema-update.policy"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f80 StarRocks \u8868\u540c\u6b65\u6570\u636e\u65f6\uff0c\u5982\u679c StarRocks \u8868\u4e0d\u5b58\u5728\u6216\u5b57\u6bb5\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0cStarRocks \u670d\u52a1\u5668\u4f1a\u629b\u51fa\u5f02\u5e38\u3002",(0,r.yg)("br",null),(0,r.yg)("br",null)," \u5f53\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"THROW_WITH_STOP"),"\uff0c\u5f02\u5e38\u4f1a\u5411\u4e0a\u629b\u7ed9 Flink \u6846\u67b6\u3002Flink \u6846\u67b6\u4f1a\u81ea\u52a8\u91cd\u542f\u4efb\u52a1\uff0c\u5c1d\u8bd5\u6062\u590d\u3002",(0,r.yg)("br",null),(0,r.yg)("br",null)," \u5f53\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"STOP_PARTIAL")," \u65f6\uff0cStarRocks connector \u4f1a\u5ffd\u7565\u8be5\u8868\u7684\u5199\u5165\uff0c\u65b0\u6570\u636e\u4e0d\u518d\u5f80\u8be5\u8868\u5199\u5165\uff0c\u5176\u5b83\u8868\u5219\u6b63\u5e38\u540c\u6b65\u3002",(0,r.yg)("br",null),(0,r.yg)("br",null)," \u5f53\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"LOG_WITH_IGNORE")," \u65f6\uff0c\u5f02\u5e38\u4f1a\u6253\u5370\u5230\u65e5\u5fd7\u4e2d\uff0c\u4e0d\u4f1a\u5411\u4e0a\u629b\u51fa\u3002\u540e\u7eed\u65b0\u6570\u636e\u5230\u6765\u65f6\uff0c\u7ee7\u7eed\u5c1d\u8bd5\u5f80\u8be5\u8868\u5199\u5165\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.ignore"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f80 StarRocks \u8868\u540c\u6b65\u6570\u636e\u65f6\uff0c\u5982\u679c\u9047\u5230\u9519\u8bef\u548c\u5f02\u5e38\uff0c\u901a\u8fc7\u8be5\u53d8\u91cf\u53ef\u4ee5\u63a7\u5236\u662f\u5426\u5ffd\u7565\u810f\u6570\u636e\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"false")," \uff0c\u5219\u5ffd\u7565\u810f\u6570\u636e\uff0c\u4e0d\u5f52\u6863\u3002\u5982\u679c\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"true")," \uff0c\u5219\u6839\u636e\u5176\u5b83\u7684 ",(0,r.yg)("inlineCode",{parentName:"td"},"dirty.side-output.*")," \u7684\u914d\u7f6e\u51b3\u5b9a\u5982\u4f55\u5f52\u6863\u6570\u636e\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.connector"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"td"},"s3")," \u548c ",(0,r.yg)("inlineCode",{parentName:"td"},"log")," \u4e24\u79cd\u914d\u7f6e\u3002\u5f53\u914d\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"log")," \u65f6\uff0c\u4ec5\u6253\u5370\u65e5\u5fd7\uff0c\u4e0d\u5f52\u6863\u6570\u636e\u3002\u5f53\u914d\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"s3")," \u65f6\uff0c\u53ef\u4ee5\u5c06\u6570\u636e\u5f52\u6863\u5230\u4e9a\u9a6c\u900a S3 \u6216\u817e\u8baf\u4e91 COS \u5b58\u50a8\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.bucket"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"S3 \u6216 COS \u7684\u6876\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.endpoint"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"S3 \u6216 COS \u7684 endpoint \u5730\u5740")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.key"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"S3 \u6216 COS \u7684 key")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.region"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"S3 \u6216 COS \u7684\u533a\u57df")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.line-delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u810f\u6570\u636e\u7684\u884c\u5206\u9694\u7b26")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.field-delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u810f\u6570\u636e\u7684\u5b57\u6bb5\u5206\u9694\u7b26")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.secret-key-id"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"S3 \u6216 COS \u7684 secret key")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.access-key-id"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"S3 \u6216 COS \u7684 access key")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.format"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u810f\u6570\u636e\u5f52\u6863\u7684\u683c\u5f0f\uff0c\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"td"},"json")," \u548c ",(0,r.yg)("inlineCode",{parentName:"td"},"csv"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.log-tag"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u810f\u6570\u636e\u7684 tag \u3002\u901a\u8fc7\u8be5\u53d8\u91cf\u533a\u5206\u6bcf\u6761\u810f\u6570\u636e\u5f52\u5c5e\u4e8e StarRocks \u7684\u54ea\u4e2a\u5e93\u8868\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.identifier"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f52\u6863\u540e\u7684\u6587\u4ef6\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f52\u6863\u540e\u7684\u6bcf\u6761\u6570\u636e\u5305\u62ec\u6807\u7b7e\u548c\u4e1a\u52a1\u6570\u636e\u4e24\u90e8\u5206\u3002\u6807\u7b7e\u5728\u524d\u9762\uff0c\u4e1a\u52a1\u6570\u636e\u5728\u540e\u9762\u3002")))),(0,r.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Flink\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"StarRocks\u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER"),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"JSON / STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"JSON / STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"JSON / STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_WITHOUT_TIME_ZONE(N)"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_WITH_LOCAL_TIME_ZONE(N)"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","T",">"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","T",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MAP","<","KT,VT",">"),(0,r.yg)("td",{parentName:"tr",align:null},"JSON / JSON STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ROW","<","arg T...",">"),(0,r.yg)("td",{parentName:"tr",align:null},"JSON / JSON STRING")))),(0,r.yg)("p",null,"\u67e5\u770b ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/blob/main/README.md"},"flink-connector-starrocks")," \u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"))}m.isMDXComponent=!0}}]);