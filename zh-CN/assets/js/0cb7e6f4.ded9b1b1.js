"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[95934],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),o=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):g(g({},n),e)),t},m=function(e){var n=o(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=o(t),s=r,u=p["".concat(i,".").concat(s)]||p[s]||y[s]||l;return t?a.createElement(u,g(g({ref:n},m),{},{components:t})):a.createElement(u,g({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,g=new Array(l);g[0]=s;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d[p]="string"==typeof e?e:r,g[1]=d;for(var o=2;o<l;o++)g[o]=t[o];return a.createElement.apply(null,g)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},12433:(e,n,t)=>{t.d(n,{l:()=>a});const a={inLongVersion:"2.2.0-SNAPSHOT"}},83950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>g,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=t(58168),r=(t(96540),t(15680));t(12433);const l={title:"SQLServer-CDC",sidebar_position:10},g=void 0,d={unversionedId:"data_node/extract_node/sqlserver-cdc",id:"data_node/extract_node/sqlserver-cdc",title:"SQLServer-CDC",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data_node/extract_node/sqlserver-cdc.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/sqlserver-cdc",permalink:"/zh-CN/docs/next/data_node/extract_node/sqlserver-cdc",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/extract_node/sqlserver-cdc.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"SQLServer-CDC",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Pulsar",permalink:"/zh-CN/docs/next/data_node/extract_node/pulsar"},next:{title:"Doris",permalink:"/zh-CN/docs/next/data_node/extract_node/doris"}},i={},o=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56\u914d\u7f6e",id:"\u4f9d\u8d56\u914d\u7f6e",level:2},{value:"Maven\u4f9d\u8d56\u914d\u7f6e",id:"maven\u4f9d\u8d56\u914d\u7f6e",level:3},{value:"\u914d\u7f6e SQLServer \u52a0\u8f7d\u8282\u70b9",id:"\u914d\u7f6e-sqlserver-\u52a0\u8f7d\u8282\u70b9",level:2},{value:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a SQLServer \u62bd\u53d6\u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a-sqlserver-\u62bd\u53d6\u8282\u70b9",level:2},{value:"SQL API \u7684\u4f7f\u7528",id:"sql-api-\u7684\u4f7f\u7528",level:3},{value:"InLong Dashboard \u65b9\u5f0f",id:"inlong-dashboard-\u65b9\u5f0f",level:3},{value:"InLong Manager Client \u65b9\u5f0f",id:"inlong-manager-client-\u65b9\u5f0f",level:3},{value:"SQLServer \u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f",id:"sqlserver-\u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f",level:2},{value:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5",id:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],m={toc:o},p="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.yg)("p",null,"SQLServer \u63d0\u53d6\u8282\u70b9\u4ece SQLServer \u6570\u636e\u5e93\u4e2d\u8bfb\u53d6\u6570\u636e\u548c\u589e\u91cf\u6570\u636e\u3002\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e SQLServer \u62bd\u53d6\u8282\u70b9\u3002"),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Extract Node"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/next/data_node/extract_node/sqlserver-cdc"},"SQLServer-cdc")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-ver16"},"SQLServer"),": 2014\u30012016\u30012017\u30012019\u30012022")))),(0,r.yg)("h2",{id:"\u4f9d\u8d56\u914d\u7f6e"},"\u4f9d\u8d56\u914d\u7f6e"),(0,r.yg)("p",null,"\u901a\u8fc7 Maven \u5f15\u5165 sort-connector-sqlserver-cdc \u6784\u5efa\u81ea\u5df1\u7684\u9879\u76ee\u3002\n\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 INLONG \u63d0\u4f9b\u7684 jar \u5305\u3002(",(0,r.yg)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"sort-connector-sqlserver-cdc"),")"),(0,r.yg)("h3",{id:"maven\u4f9d\u8d56\u914d\u7f6e"},"Maven\u4f9d\u8d56\u914d\u7f6e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-sqlserver-cdc</artifactId>\n    <version>${siteVariables.inLongVersion}</version>\n</dependency>\n")),(0,r.yg)("h2",{id:"\u914d\u7f6e-sqlserver-\u52a0\u8f7d\u8282\u70b9"},"\u914d\u7f6e SQLServer \u52a0\u8f7d\u8282\u70b9"),(0,r.yg)("p",null,"SQLServer \u52a0\u8f7d\u8282\u70b9\u9700\u8981\u5f00\u542f\u5e93\u548c\u8868\u7684 CDC \u529f\u80fd\uff0c\u914d\u7f6e\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5f00\u542f\u6570\u636e\u5e93 CDC \u80fd\u529b\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"if exists(select 1 from sys.databases where name='dbName' and is_cdc_enabled=0)\nbegin\n    exec sys.sp_cdc_enable_db\nend\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u68c0\u67e5\u6570\u636e\u5e93 CDC \u662f\u5426\u5f00\u542f\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select is_cdc_enabled from sys.databases where name='dbName'\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},'"1"\u8868\u793a\u6570\u636e\u5e93 CDC \u5f00\u542f')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u5f00\u542f\u8868\u7684 CDC \u80fd\u529b\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"IF EXISTS(SELECT 1 FROM sys.tables WHERE name='tableName' AND is_tracked_by_cdc = 0)\nBEGIN\n    EXEC sys.sp_cdc_enable_table\n        @source_schema = 'dbo', -- source_schema\n        @source_name = 'tableName', -- table_name\n        @capture_instance = NULL, -- capture_instance\n        @supports_net_changes = 1, -- supports_net_changes\n        @role_name = NULL, -- role_name\n        @index_name = NULL, -- index_name\n        @captured_column_list = NULL, -- captured_column_list\n        @filegroup_name = 'PRIMARY' -- filegroup_name\nEND\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u8868\u5fc5\u987b\u6709\u4e3b\u952e\u6216\u8005\u552f\u4e00\u7d22\u5f15\u3002")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u68c0\u67e5\u8868 CDC \u662f\u5426\u5f00\u542f\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT is_tracked_by_cdc FROM sys.tables WHERE name='tableName'\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},'"1"\u8868\u793a\u8868 CDC \u5f00\u542f')),(0,r.yg)("h2",{id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a-sqlserver-\u62bd\u53d6\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a SQLServer \u62bd\u53d6\u8282\u70b9"),(0,r.yg)("h3",{id:"sql-api-\u7684\u4f7f\u7528"},"SQL API \u7684\u4f7f\u7528"),(0,r.yg)("p",null,"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Set checkpoint every 3000 milliseconds                       \nFlink SQL> SET 'execution.checkpointing.interval' = '3s';   \n\n-- Create a SqlServer table 'sqlserver_extract_node' in Flink SQL Cli\nFlink SQL> CREATE TABLE sqlserver_extract_node (\n     order_id INT,\n     order_date TIMESTAMP(0),\n     customer_name STRING,\n     price DECIMAL(10, 5),\n     product_id INT,\n     order_status BOOLEAN,\n     PRIMARY KEY(order_id) NOT ENFORCED\n     ) WITH (\n     'connector' = 'sqlserver-cdc-inlong',\n     'hostname' = 'YourHostname',\n     'port' = 'port', --default:1433\n     'username' = 'YourUsername',\n     'password' = 'YourPassword',\n     'database-name' = 'YourDatabaseName',\n     'schema-name' = 'YourSchemaName' -- default:dbo\n     'table-name' = 'YourTableName');\n  \n-- Read snapshot and binlog from sqlserver_extract_node\nFlink SQL> SELECT * FROM sqlserver_extract_node;\n")),(0,r.yg)("h3",{id:"inlong-dashboard-\u65b9\u5f0f"},"InLong Dashboard \u65b9\u5f0f"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd")),(0,r.yg)("h3",{id:"inlong-manager-client-\u65b9\u5f0f"},"InLong Manager Client \u65b9\u5f0f"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd")),(0,r.yg)("h2",{id:"sqlserver-\u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f"},"SQLServer \u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4f7f\u7528\u4ec0\u4e48\u8fde\u63a5\u5668\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f ",(0,r.yg)("inlineCode",{parentName:"td"},"sqlserver-cdc-inlong"),"\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hostname"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"SQLServer \u6570\u636e\u5e93 IP \u5730\u5740\u6216\u8005 hostname\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"SQLServer \u6570\u636e\u5e93\u7528\u6237\u540d\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"SQLServer \u6570\u636e\u5e93\u7528\u6237\u5bc6\u7801\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database-name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"SQLServer \u6570\u636e\u5e93\u76d1\u63a7\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema-name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,r.yg)("td",{parentName:"tr",align:null},"dbo"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"SQLServer \u6570\u636e\u5e93\u76d1\u63a7\u7684 schema \u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table-name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"SQLServer \u6570\u636e\u5e93\u76d1\u63a7\u7684\u8868\u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"1433"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"SQLServer \u6570\u636e\u5e93\u7aef\u53e3\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"server-time-zone"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"UTC"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"SQLServer \u6570\u636e\u5e93\u8fde\u63a5\u914d\u7f6e\u65f6\u533a\u3002 \u4f8b\u5982\uff1a ",(0,r.yg)("inlineCode",{parentName:"td"},"Asia/Shanghai"),"\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3a groupId=","[groupId]","&streamId=","[streamId]","&nodeId=","[nodeId]","\u3002")))),(0,r.yg)("h2",{id:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5"},"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u683c\u5f0f\u5143\u6570\u636e\u53ef\u4ee5\u4f5c\u4e3a\u8868\u5b9a\u4e49\u4e2d\u7684\u53ea\u8bfb (VIRTUAL) \u5217\u516c\u5f00\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5305\u542b\u8be5\u884c\u7684\u8868\u7684\u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5305\u542b\u8be5\u884c schema \u7684\u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5305\u542b\u8be5\u884c\u6570\u636e\u5e93\u7684\u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"op_ts"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ(3) NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b83\u8868\u793a\u5728\u6570\u636e\u5e93\u4e2d\u8fdb\u884c\u66f4\u6539\u7684\u65f6\u95f4\u3002\u5982\u679c\u8bb0\u5f55\u662f\u4ece\u8868\u7684\u5feb\u7167\u800c\u4e0d\u662f binlog \u4e2d\u8bfb\u53d6\u7684\uff0c\u5219\u8be5\u503c\u59cb\u7ec8\u4e3a 0\u3002")))),(0,r.yg)("p",null,"\u4f7f\u7528\u5143\u6570\u636e\u5b57\u6bb5\u7684\u4f8b\u5b50\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sqlserver_extract_node (\n    table_name STRING METADATA  FROM 'table_name' VIRTUAL,\n    schema_name STRING METADATA  FROM 'schema_name' VIRTUAL,\n    db_name STRING METADATA FROM 'database_name' VIRTUAL,\n    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,\n    id INT NOT NULL\n) WITH (\n    'connector' = 'sqlserver-cdc',\n    'hostname' = 'localhost',\n    'port' = '1433',\n    'username' = 'sa',\n    'password' = 'password',\n    'database-name' = 'test',\n    'schema-name' = 'dbo',\n    'table-name' = 'worker'\n);\n")),(0,r.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"SQLServer type"),(0,r.yg)("th",{parentName:"tr",align:null},"Flink SQL type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"char(n)"),(0,r.yg)("td",{parentName:"tr",align:null},"CHAR(n)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"varchar(n)",(0,r.yg)("br",null),"nvarchar(n)",(0,r.yg)("br",null),"nchar(n)"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(n)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"text",(0,r.yg)("br",null),"ntext",(0,r.yg)("br",null),"xml"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal(p, s)",(0,r.yg)("br",null),"money",(0,r.yg)("br",null),"smallmoney"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"numeric"),(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"REAL",(0,r.yg)("br",null),"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bit"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"time (n)"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME (n)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetime2",(0,r.yg)("br",null),"datetime",(0,r.yg)("br",null),"smalldatetime"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP(n)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetimeoffset"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ(3)")))))}y.isMDXComponent=!0}}]);