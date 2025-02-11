"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[88334],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>N});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),i=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):g(g({},n),e)),t},p=function(e){var n=i(e.components);return a.createElement(d.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=i(t),u=r,N=m["".concat(d,".").concat(u)]||m[u]||y[u]||l;return t?a.createElement(N,g(g({ref:n},p),{},{components:t})):a.createElement(N,g({ref:n},p))}));function N(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,g=new Array(l);g[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[m]="string"==typeof e?e:r,g[1]=o;for(var i=2;i<l;i++)g[i]=t[i];return a.createElement.apply(null,g)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},12433:(e,n,t)=>{t.d(n,{l:()=>a});const a={inLongVersion:"2.2.0-SNAPSHOT"}},50423:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>g,metadata:()=>d,toc:()=>p});var a=t(58168),r=(t(96540),t(15680)),l=t(12433);const g={title:"MongoDB-CDC",sidebar_position:5},o=void 0,d={unversionedId:"data_node/extract_node/mongodb-cdc",id:"data_node/extract_node/mongodb-cdc",title:"MongoDB-CDC",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data_node/extract_node/mongodb-cdc.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/mongodb-cdc",permalink:"/zh-CN/docs/next/data_node/extract_node/mongodb-cdc",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/extract_node/mongodb-cdc.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"MongoDB-CDC",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Kafka",permalink:"/zh-CN/docs/next/data_node/extract_node/kafka"},next:{title:"MySQL-CDC",permalink:"/zh-CN/docs/next/data_node/extract_node/mysql-cdc"}},i={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56\u9879",id:"\u4f9d\u8d56\u9879",level:2},{value:"Maven\u4f9d\u8d56",id:"maven\u4f9d\u8d56",level:3},{value:"\u8bbe\u7f6e MongoDB",id:"\u8bbe\u7f6e-mongodb",level:2},{value:"\u53ef\u7528\u6027",id:"\u53ef\u7528\u6027",level:3},{value:"\u5982\u4f55\u521b\u5efa MongoDB Extract \u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa-mongodb-extract-\u8282\u70b9",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"InLong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"InLong Manager \u7528\u6cd5",id:"inlong-manager-\u7528\u6cd5",level:3},{value:"MongoDB Extract \u8282\u70b9\u53c2\u6570",id:"mongodb-extract-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u53ef\u7528\u5143\u6570\u636e",id:"\u53ef\u7528\u5143\u6570\u636e",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],m={toc:p},y="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.yg)("p",null,"MongoDB CDC \u8fde\u63a5\u5668\u5141\u8bb8\u4ece MongoDB \u8bfb\u53d6\u5feb\u7167\u6570\u636e\u548c\u589e\u91cf\u6570\u636e\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u8bbe\u7f6e MongoDB CDC \u8fde\u63a5\u5668\u4ee5\u5bf9 MongoDB \u8fd0\u884c SQL \u67e5\u8be2\u3002"),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Extract \u8282\u70b9"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/next/data_node/extract_node/mongodb-cdc"},"MongoDB-CDC")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.mongodb.com/"},"MongoDB"),": ",">","= 3.6")))),(0,r.yg)("h2",{id:"\u4f9d\u8d56\u9879"},"\u4f9d\u8d56\u9879"),(0,r.yg)("p",null,"I.\u4e3a\u4e86\u8bbe\u7f6e MongoDB CDC \u8fde\u63a5\u5668\uff0c\u4e0b\u8868\u63d0\u4f9b\u4e86\u4f7f\u7528\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\uff08\u4f8b\u5982 Maven \u6216 SBT\uff09\u7684\u4f9d\u8d56\u5173\u7cfb\u4fe1\u606f"),(0,r.yg)("h3",{id:"maven\u4f9d\u8d56"},"Maven\u4f9d\u8d56"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-mongodb-cdc</artifactId>\n    <version>${l.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("h2",{id:"\u8bbe\u7f6e-mongodb"},"\u8bbe\u7f6e MongoDB"),(0,r.yg)("h3",{id:"\u53ef\u7528\u6027"},"\u53ef\u7528\u6027"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"MongoDB \u7248\u672c"),(0,r.yg)("p",{parentName:"li"},"MongoDB \u7248\u672c ",">","= 3.6\n\u6211\u4eec\u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/changeStreams/"},"\u66f4\u6539\u6d41"),"\u529f\u80fd\uff083.6 \u7248\u4e2d\u7684\u65b0\u529f\u80fd\uff09\u6765\u6355\u83b7\u66f4\u6539\u6570\u636e\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u96c6\u7fa4\u90e8\u7f72"),(0,r.yg)("p",{parentName:"li"},"\u9700\u8981 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/replication/"},"\u526f\u672c\u96c6"),"\u6216 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/sharding/"},"\u5206\u7247\u96c6\u7fa4"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5b58\u50a8\u5f15\u64ce"),(0,r.yg)("p",{parentName:"li"},"\u9700\u8981 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/core/wiredtiger/#std-label-storage-wiredtiger"},"WiredTiger"),"\u5b58\u50a8\u5f15\u64ce\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/replica-configuration/#mongodb-rsconf-rsconf.protocolVersion"},"\u526f\u672c\u96c6\u534f\u8bae\u7248\u672c")),(0,r.yg)("p",{parentName:"li"},"\u9700\u8981\u526f\u672c\u96c6\u534f\u8bae\u7248\u672c 1 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/replica-configuration/#mongodb-rsconf-rsconf.protocolVersion"},"(pv1)"),"\u3002\n\u4ece\u7248\u672c 4.0 \u5f00\u59cb\uff0cMongoDB \u4ec5\u652f\u6301 pv1\u3002pv1 \u662f\u4f7f\u7528 MongoDB 3.2 \u6216\u66f4\u9ad8\u7248\u672c\u521b\u5efa\u7684\u6240\u6709\u65b0\u526f\u672c\u96c6\u7684\u9ed8\u8ba4\u503c\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7279\u6743"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"changeStream")," MongoDB Kafka \u8fde\u63a5\u5668 ",(0,r.yg)("inlineCode",{parentName:"p"},"read")," \u9700\u8981\u6743\u9650\u3002"),(0,r.yg)("p",{parentName:"li"},"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u793a\u4f8b\u8fdb\u884c\u7b80\u5355\u6388\u6743\u3002\n\u66f4\u8be6\u7ec6\u7684\u6388\u6743\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/built-in-roles/#database-user-roles"},"MongoDB \u6570\u636e\u5e93\u7528\u6237\u89d2\u8272"),"\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'use admin;\ndb.createUser({\n  user: "flinkuser",\n  pwd: "flinkpw",\n  roles: [\n    { role: "read", db: "admin" }, // read role includes changeStream privilege \n    { role: "readAnyDatabase", db: "admin" } // for snapshot reading\n  ]\n});\n')))),(0,r.yg)("h2",{id:"\u5982\u4f55\u521b\u5efa-mongodb-extract-\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa MongoDB Extract \u8282\u70b9"),(0,r.yg)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,r.yg)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Flink SQL")," \u521b\u5efa\u4e00\u4e2a MongoDB Extract \u8282\u70b9:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Set checkpoint every 3000 milliseconds                       \nFlink SQL> SET 'execution.checkpointing.interval' = '3s';   \n\n-- Create a MySQL table 'mongodb_extract_node' in Flink SQL\nFlink SQL> CREATE TABLE mongodb_extract_node (\n  _id STRING, // must be declared\n  name STRING,\n  weight DECIMAL(10,3),\n  tags ARRAY<STRING>, -- array\n  price ROW<amount DECIMAL(10,2), currency STRING>, -- embedded document\n  suppliers ARRAY<ROW<name STRING, address STRING>>, -- embedded documents\n  PRIMARY KEY(_id) NOT ENFORCED\n) WITH (\n  'connector' = 'mongodb-cdc-inlong',\n  'hosts' = 'localhost:27017,localhost:27018,localhost:27019',\n  'username' = 'flinkuser',\n  'password' = 'flinkpw',\n  'database' = 'inventory',\n  'collection' = 'mongodb_extract_node'\n);\n\n-- Read snapshot and binlogs from mongodb_extract_node\nFlink SQL> SELECT * FROM mongodb_extract_node;\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,r.yg)("p",null,"MongoDB \u7684\u66f4\u6539\u4e8b\u4ef6\u8bb0\u5f55\u5728\u6d88\u606f\u4e4b\u524d\u6ca1\u6709\u66f4\u65b0\u3002\u6240\u4ee5\uff0c\u6211\u4eec\u53ea\u80fd\u5c06\u5176\u8f6c\u6362\u4e3a Flink \u7684 UPSERT \u53d8\u66f4\u65e5\u5fd7\u6d41\u3002UPSERT \u6d41\u9700\u8981\u552f\u4e00\u952e\uff0c\u56e0\u6b64\u6211\u4eec\u5fc5\u987b\u58f0\u660e ",(0,r.yg)("inlineCode",{parentName:"p"},"_id")," \u4e3a\u4e3b\u952e\u3002\u6211\u4eec\u4e0d\u80fd\u5c06\u5176\u4ed6\u5217\u58f0\u660e\u4e3a\u4e3b\u952e\uff0c\u56e0\u4e3a\u5220\u9664\u64cd\u4f5c\u4e0d\u5305\u542b\u9664 ",(0,r.yg)("inlineCode",{parentName:"p"},"_id")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"sharding key")," \u4e4b\u5916\u7684\u952e\u548c\u503c\u3002"),(0,r.yg)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"InLong Dashboard \u7528\u6cd5"),(0,r.yg)("p",null,"TODO: \u672a\u6765\u4f1a\u652f\u6301"),(0,r.yg)("h3",{id:"inlong-manager-\u7528\u6cd5"},"InLong Manager \u7528\u6cd5"),(0,r.yg)("p",null,"TODO: \u672a\u6765\u4f1a\u652f\u6301"),(0,r.yg)("h2",{id:"mongodb-extract-\u8282\u70b9\u53c2\u6570"},"MongoDB Extract \u8282\u70b9\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"\u9009\u9879")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"\u662f\u5426\u5fc5\u987b")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"\u9ed8\u8ba4")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"\u7c7b\u578b")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u8fde\u63a5\u5668\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f",(0,r.yg)("inlineCode",{parentName:"td"},"mongodb-cdc-inlong"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hosts"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"MongoDB \u670d\u52a1\u5668\u7684\u4e3b\u673a\u540d\u548c\u7aef\u53e3\u5bf9\u7684\u9017\u53f7\u5206\u9694\u5217\u8868\u3002\u4f8b\u5982\u3002",(0,r.yg)("inlineCode",{parentName:"td"},"localhost:27017,localhost:27018"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5230 MongoDB \u65f6\u8981\u4f7f\u7528\u7684\u6570\u636e\u5e93\u7528\u6237\u7684\u540d\u79f0\u3002\u4ec5\u5f53 MongoDB \u914d\u7f6e\u4e3a\u4f7f\u7528\u8eab\u4efd\u9a8c\u8bc1\u65f6\u624d\u9700\u8981\u8fd9\u6837\u505a\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5 MongoDB \u65f6\u4f7f\u7528\u7684\u5bc6\u7801\u3002\u4ec5\u5f53 MongoDB \u914d\u7f6e\u4e3a\u4f7f\u7528\u8eab\u4efd\u9a8c\u8bc1\u65f6\u624d\u9700\u8981\u8fd9\u6837\u505a\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8981\u76d1\u89c6\u66f4\u6539\u7684\u6570\u636e\u5e93\u7684\u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"collection"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u4e2d\u8981\u76d1\u89c6\u66f4\u6539\u7684\u96c6\u5408\u7684\u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection.options"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"MongoDB\u7684 & \u5206\u9694",(0,r.yg)("a",{parentName:"td",href:"https://docs.mongodb.com/manual/reference/connection-string/#std-label-connections-connection-options"},"\u8fde\u63a5\u9009\u9879"),"\u3002\u4f8b\u5982\u3002",(0,r.yg)("inlineCode",{parentName:"td"},"replicaSet=test&connectTimeoutMS=300000"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"copy.existing"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u4ece\u6e90\u96c6\u5408\u4e2d\u590d\u5236\u73b0\u6709\u6570\u636e\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"copy.existing.queue.size"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"10240"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6267\u884c\u6570\u636e\u590d\u5236\u65f6\u4f7f\u7528\u7684\u7ebf\u7a0b\u6570\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"1024"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"Cursor \u6279\u6b21\u5927\u5c0f\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"poll.max.batch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"1024"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8f6e\u8be2\u65b0\u6570\u636e\u65f6\uff0c\u5355\u4e2a\u6279\u6b21\u4e2d\u5305\u542b\u7684\u6700\u5927\u66f4\u6539\u6d41\u6587\u6863\u6570\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"poll.await.time.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5728\u66f4\u6539\u6d41\u4e0a\u68c0\u67e5\u65b0\u7ed3\u679c\u4e4b\u524d\u7b49\u5f85\u7684\u65f6\u95f4\u91cf\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"heartbeat.interval.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5fc3\u8df3\u6d88\u606f\u4e4b\u95f4\u7684\u65f6\u95f4\u957f\u5ea6\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002\u4f7f\u7528 0 \u7981\u7528\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3agroupId=",(0,r.yg)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,r.yg)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,r.yg)("inlineCode",{parentName:"td"},"{nodeId}"),"\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan.incremental.snapshot.enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u589e\u91cf\u5feb\u7167\u3002\u589e\u91cf\u5feb\u7167\u529f\u80fd\u4ec5\u652f\u6301 MongoDB 4.0\u4e4b\u540e\u7684\u7248\u672c\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan.incremental.snapshot.chunk.size.mb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"64"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"\u589e\u91cf\u5feb\u7167\u7684\u5757\u5927\u5c0f\uff0c\u5355\u4f4d\uff1a mb\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"chunk-meta.group.size"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"chunk meta \u7684\u7ec4\u5927\u5c0f\uff0c\u5982\u679c meta \u5927\u5c0f\u8d85\u8fc7\u7ec4\u5927\u5c0f\uff0c\u5219 meta \u5c06\u88ab\u5206\u6210\u591a\u4e2a\u7ec4\u3002")))),(0,r.yg)("h2",{id:"\u53ef\u7528\u5143\u6570\u636e"},"\u53ef\u7528\u5143\u6570\u636e"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u683c\u5f0f\u5143\u6570\u636e\u53ef\u4ee5\u4f5c\u4e3a\u8868\u5b9a\u4e49\u4e2d\u7684\u53ea\u8bfb (VIRTUAL) \u5217\u516c\u5f00\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5305\u542b\u8be5\u884c\u7684\u6570\u636e\u5e93\u7684\u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"collection_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5305\u542b\u8be5\u884c\u7684\u96c6\u5408\u7684\u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"op_ts"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ(3) NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b83\u6307\u793a\u5728\u6570\u636e\u5e93\u4e2d\u8fdb\u884c\u66f4\u6539\u7684\u65f6\u95f4\u3002\u5982\u679c\u8bb0\u5f55\u662f\u4ece\u8868\u7684\u5feb\u7167\u800c\u4e0d\u662f\u66f4\u6539\u6d41\u4e2d\u8bfb\u53d6\u7684\uff0c\u5219\u8be5\u503c\u59cb\u7ec8\u4e3a 0\u3002")))),(0,r.yg)("p",null,"\u6269\u5c55\u7684 CREATE TABLE \u793a\u4f8b\u6f14\u793a\u4e86\u516c\u5f00\u8fd9\u4e9b\u5143\u6570\u636e\u5b57\u6bb5\u7684\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `mysql_extract_node` (\n    db_name STRING METADATA FROM 'database_name' VIRTUAL,\n    collection_name STRING METADATA  FROM 'collection_name' VIRTUAL,\n    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,\n    _id STRING, // must be declared\n    name STRING,\n    weight DECIMAL(10,3),\n    tags ARRAY<STRING>, -- array\n    price ROW<amount DECIMAL(10,2), currency STRING>, -- embedded document\n    suppliers ARRAY<ROW<name STRING, address STRING>>, -- embedded documents\n    PRIMARY KEY(_id) NOT ENFORCED\n) WITH (\n      'connector' = 'mongodb-cdc-inlong', \n      'hostname' = 'YourHostname',\n      'username' = 'YourUsername',\n      'password' = 'YourPassword',\n      'database' = 'YourDatabase',\n      'collection' = 'YourTable' \n);\n")),(0,r.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"BSON \u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"Flink SQL \u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Decimal128"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Date Timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Date Timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Date"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP(3) TIMESTAMP_LTZ(3)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP(0) TIMESTAMP_LTZ(0)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"String ObjectId UUID Symbol MD5 JavaScript Regex"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BinData"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Object"),(0,r.yg)("td",{parentName:"tr",align:null},"ROW")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DBPointer"),(0,r.yg)("td",{parentName:"tr",align:null},"ROW\\<\\$ref STRING, \\$id STRING",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.mongodb.com/manual/reference/geojson/"},"GeoJSON")),(0,r.yg)("td",{parentName:"tr",align:null},"Point : ROW\\<type STRING, coordinates ARRAY\\<DOUBLE",">",">"," Line : ROW\\<type STRING, coordinates ARRAY\\<ARRAY\\< DOUBLE",">",">",">"," ...")))))}u.isMDXComponent=!0}}]);