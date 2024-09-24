"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[36281],{15680:(e,n,l)=>{l.d(n,{xA:()=>y,yg:()=>p});var t=l(96540);function r(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function a(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function d(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?a(Object(l),!0).forEach((function(n){r(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function s(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=t.createContext({}),g=function(e){var n=t.useContext(o),l=n;return e&&(l="function"==typeof e?e(n):d(d({},n),e)),l},y=function(e){var n=g(e.components);return t.createElement(o.Provider,{value:n},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var l=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),u=g(l),c=r,p=u["".concat(o,".").concat(c)]||u[c]||i[c]||a;return l?t.createElement(p,d(d({ref:n},y),{},{components:l})):t.createElement(p,d({ref:n},y))}));function p(e,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=l.length,d=new Array(a);d[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[u]="string"==typeof e?e:r,d[1]=s;for(var g=2;g<a;g++)d[g]=l[g];return t.createElement.apply(null,d)}return t.createElement.apply(null,l)}c.displayName="MDXCreateElement"},25117:(e,n,l)=>{l.d(n,{l:()=>t});const t={inLongVersion:"1.5.0"}},61834:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>g,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>o,toc:()=>y});var t=l(58168),r=(l(96540),l(15680)),a=l(25117);const d={title:"SQLServer-CDC",sidebar_position:10},s=void 0,o={unversionedId:"data_node/extract_node/sqlserver-cdc",id:"version-1.5.0/data_node/extract_node/sqlserver-cdc",title:"SQLServer-CDC",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.5.0/data_node/extract_node/sqlserver-cdc.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/sqlserver-cdc",permalink:"/zh-CN/docs/1.5.0/data_node/extract_node/sqlserver-cdc",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/data_node/extract_node/sqlserver-cdc.md",tags:[],version:"1.5.0",sidebarPosition:10,frontMatter:{title:"SQLServer-CDC",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Pulsar",permalink:"/zh-CN/docs/1.5.0/data_node/extract_node/pulsar"},next:{title:"Doris",permalink:"/zh-CN/docs/1.5.0/data_node/extract_node/doris"}},g={},y=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56\u914d\u7f6e",id:"\u4f9d\u8d56\u914d\u7f6e",level:2},{value:"Maven\u4f9d\u8d56\u914d\u7f6e",id:"maven\u4f9d\u8d56\u914d\u7f6e",level:3},{value:"\u914d\u7f6e SQLServer \u52a0\u8f7d\u8282\u70b9",id:"\u914d\u7f6e-sqlserver-\u52a0\u8f7d\u8282\u70b9",level:2},{value:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a SQLServer \u62bd\u53d6\u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a-sqlserver-\u62bd\u53d6\u8282\u70b9",level:2},{value:"SQL API \u7684\u4f7f\u7528",id:"sql-api-\u7684\u4f7f\u7528",level:3},{value:"InLong Dashboard \u65b9\u5f0f",id:"inlong-dashboard-\u65b9\u5f0f",level:3},{value:"InLong Manager Client \u65b9\u5f0f",id:"inlong-manager-client-\u65b9\u5f0f",level:3},{value:"SQLServer \u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f",id:"sqlserver-\u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f",level:2},{value:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5",id:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],u={toc:y},i="wrapper";function c(e){let{components:n,...l}=e;return(0,r.yg)(i,(0,t.A)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.yg)("p",null,"SQLServer \u63d0\u53d6\u8282\u70b9\u4ece SQLServer \u6570\u636e\u5e93\u4e2d\u8bfb\u53d6\u6570\u636e\u548c\u589e\u91cf\u6570\u636e\u3002\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e SQLServer \u62bd\u53d6\u8282\u70b9\u3002"),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Extract Node"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/extract_node/sqlserver-cdc"},"SQLServer-cdc")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-ver16"},"SQLServer"),": 2014\u30012016\u30012017\u30012019\u30012022")))),(0,r.yg)("h2",{id:"\u4f9d\u8d56\u914d\u7f6e"},"\u4f9d\u8d56\u914d\u7f6e"),(0,r.yg)("p",null,"\u901a\u8fc7 Maven \u5f15\u5165 sort-connector-sqlserver-cdc \u6784\u5efa\u81ea\u5df1\u7684\u9879\u76ee\u3002\n\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 INLONG \u63d0\u4f9b\u7684 jar \u5305\u3002(",(0,r.yg)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"sort-connector-sqlserver-cdc"),")"),(0,r.yg)("h3",{id:"maven\u4f9d\u8d56\u914d\u7f6e"},"Maven\u4f9d\u8d56\u914d\u7f6e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-sqlserver-cdc</artifactId>\n    <version>${a.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("h2",{id:"\u914d\u7f6e-sqlserver-\u52a0\u8f7d\u8282\u70b9"},"\u914d\u7f6e SQLServer \u52a0\u8f7d\u8282\u70b9"),(0,r.yg)("p",null,"SQLServer \u52a0\u8f7d\u8282\u70b9\u9700\u8981\u5f00\u542f\u5e93\u548c\u8868\u7684 CDC \u529f\u80fd\uff0c\u914d\u7f6e\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5f00\u542f\u6570\u636e\u5e93 CDC \u80fd\u529b\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"if exists(select 1 from sys.databases where name='dbName' and is_cdc_enabled=0)\nbegin\n    exec sys.sp_cdc_enable_db\nend\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u68c0\u67e5\u6570\u636e\u5e93 CDC \u662f\u5426\u5f00\u542f\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select is_cdc_enabled from sys.databases where name='dbName'\n")),(0,r.yg)("p",null,'\u5907\u6ce8: "1"\u8868\u793a\u6570\u636e\u5e93 CDC \u5f00\u542f'),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u5f00\u542f\u8868\u7684 CDC \u80fd\u529b\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"IF EXISTS(SELECT 1 FROM sys.tables WHERE name='tableName' AND is_tracked_by_cdc = 0)\nBEGIN\n    EXEC sys.sp_cdc_enable_table\n        @source_schema = 'dbo', -- source_schema\n        @source_name = 'tableName', -- table_name\n        @capture_instance = NULL, -- capture_instance\n        @supports_net_changes = 1, -- supports_net_changes\n        @role_name = NULL, -- role_name\n        @index_name = NULL, -- index_name\n        @captured_column_list = NULL, -- captured_column_list\n        @filegroup_name = 'PRIMARY' -- filegroup_name\nEND\n")),(0,r.yg)("p",null,"\u5907\u6ce8: \u8868\u5fc5\u987b\u6709\u4e3b\u952e\u6216\u8005\u552f\u4e00\u7d22\u5f15\u3002"),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u68c0\u67e5\u8868 CDC \u662f\u5426\u5f00\u542f\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT is_tracked_by_cdc FROM sys.tables WHERE name='tableName'\n")),(0,r.yg)("p",null,'\u5907\u6ce8: "1"\u8868\u793a\u8868 CDC \u5f00\u542f'),(0,r.yg)("h2",{id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a-sqlserver-\u62bd\u53d6\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a SQLServer \u62bd\u53d6\u8282\u70b9"),(0,r.yg)("h3",{id:"sql-api-\u7684\u4f7f\u7528"},"SQL API \u7684\u4f7f\u7528"),(0,r.yg)("p",null,"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Set checkpoint every 3000 milliseconds                       \nFlink SQL> SET 'execution.checkpointing.interval' = '3s';   \n\n-- Create a SqlServer table 'sqlserver_extract_node' in Flink SQL Cli\nFlink SQL> CREATE TABLE sqlserver_extract_node (\n     order_id INT,\n     order_date TIMESTAMP(0),\n     customer_name STRING,\n     price DECIMAL(10, 5),\n     product_id INT,\n     order_status BOOLEAN,\n     PRIMARY KEY(order_id) NOT ENFORCED\n     ) WITH (\n     'connector' = 'sqlserver-cdc-inlong',\n     'hostname' = 'YourHostname',\n     'port' = 'port', --default:1433\n     'username' = 'YourUsername',\n     'password' = 'YourPassword',\n     'database-name' = 'YourDatabaseName',\n     'schema-name' = 'YourSchemaName' -- default:dbo\n     'table-name' = 'YourTableName');\n  \n-- Read snapshot and binlog from sqlserver_extract_node\nFlink SQL> SELECT * FROM sqlserver_extract_node;\n")),(0,r.yg)("h3",{id:"inlong-dashboard-\u65b9\u5f0f"},"InLong Dashboard \u65b9\u5f0f"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h3",{id:"inlong-manager-client-\u65b9\u5f0f"},"InLong Manager Client \u65b9\u5f0f"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h2",{id:"sqlserver-\u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f"},"SQLServer \u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f"),(0,r.yg)("div",{class:"highlight"},(0,r.yg)("table",{class:"colwidths-auto docutils"},(0,r.yg)("thead",null,(0,r.yg)("tr",null,(0,r.yg)("th",{class:"text-left",style:{width:"10%"}},"\u53c2\u6570"),(0,r.yg)("th",{class:"text-left",style:{width:"8%"}},"\u662f\u5426\u5fc5\u987b"),(0,r.yg)("th",{class:"text-left",style:{width:"7%"}},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{class:"text-left",style:{width:"10%"}},"\u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{class:"text-left",style:{width:"65%"}},"\u63cf\u8ff0"))),(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"connector"),(0,r.yg)("td",null,"\u5fc5\u987b"),(0,r.yg)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.yg)("td",null,"String"),(0,r.yg)("td",null,"\u6307\u5b9a\u4f7f\u7528\u4ec0\u4e48\u8fde\u63a5\u5668\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f 'sqlserver-cdc-inlong'\u3002")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"hostname"),(0,r.yg)("td",null,"\u5fc5\u987b"),(0,r.yg)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.yg)("td",null,"String"),(0,r.yg)("td",null,"SQLServer \u6570\u636e\u5e93 IP \u5730\u5740\u6216\u8005 hostname\u3002")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"username"),(0,r.yg)("td",null,"\u5fc5\u987b"),(0,r.yg)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.yg)("td",null,"String"),(0,r.yg)("td",null,"SQLServer \u6570\u636e\u5e93\u7528\u6237\u540d\u3002")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"password"),(0,r.yg)("td",null,"\u5fc5\u987b"),(0,r.yg)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.yg)("td",null,"String"),(0,r.yg)("td",null,"SQLServer \u6570\u636e\u5e93\u7528\u6237\u5bc6\u7801\u3002")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"database-name"),(0,r.yg)("td",null,"\u5fc5\u987b"),(0,r.yg)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.yg)("td",null,"String"),(0,r.yg)("td",null,"SQLServer \u6570\u636e\u5e93\u76d1\u63a7\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"schema-name"),(0,r.yg)("td",null,"\u5fc5\u987b"),(0,r.yg)("td",{style:{wordWrap:"break-word"}},"dbo"),(0,r.yg)("td",null,"String"),(0,r.yg)("td",null,"SQLServer \u6570\u636e\u5e93\u76d1\u63a7\u7684 schema \u540d\u79f0\u3002")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"table-name"),(0,r.yg)("td",null,"\u5fc5\u987b"),(0,r.yg)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.yg)("td",null,"String"),(0,r.yg)("td",null,"SQLServer \u6570\u636e\u5e93\u76d1\u63a7\u7684\u8868\u540d\u79f0\u3002")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"port"),(0,r.yg)("td",null,"\u53ef\u9009"),(0,r.yg)("td",{style:{wordWrap:"break-word"}},"1433"),(0,r.yg)("td",null,"Integer"),(0,r.yg)("td",null,"SQLServer \u6570\u636e\u5e93\u7aef\u53e3\u3002")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"server-time-zone"),(0,r.yg)("td",null,"\u53ef\u9009"),(0,r.yg)("td",{style:{wordWrap:"break-word"}},"UTC"),(0,r.yg)("td",null,"String"),(0,r.yg)("td",null,'SQLServer \u6570\u636e\u5e93\u8fde\u63a5\u914d\u7f6e\u65f6\u533a\u3002 \u4f8b\u5982\uff1a "Asia/Shanghai"\u3002')),(0,r.yg)("tr",null,(0,r.yg)("td",null,"inlong.metric.labels"),(0,r.yg)("td",null,"\u53ef\u9009"),(0,r.yg)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.yg)("td",null,"String"),(0,r.yg)("td",null,"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3agroupId=[groupId]&streamId=[streamId]&nodeId=[nodeId]\u3002"))))),(0,r.yg)("h2",{id:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5"},"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u683c\u5f0f\u5143\u6570\u636e\u53ef\u4ee5\u4f5c\u4e3a\u8868\u5b9a\u4e49\u4e2d\u7684\u53ea\u8bfb (VIRTUAL) \u5217\u516c\u5f00\u3002"),(0,r.yg)("table",{class:"colwidths-auto docutils"},(0,r.yg)("thead",null,(0,r.yg)("tr",null,(0,r.yg)("th",{class:"text-left",style:{width:"15%"}},"\u5b57\u6bb5\u540d\u79f0"),(0,r.yg)("th",{class:"text-left",style:{width:"30%"}},"\u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{class:"text-left",style:{width:"55%"}},"\u63cf\u8ff0"))),(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"meta.table_name"),(0,r.yg)("td",null,"STRING NOT NULL"),(0,r.yg)("td",null,"\u5305\u542b\u8be5\u884c\u7684\u8868\u7684\u540d\u79f0\u3002")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"meta.schema_name"),(0,r.yg)("td",null,"STRING NOT NULL"),(0,r.yg)("td",null,"\u5305\u542b\u8be5\u884c schema \u7684\u540d\u79f0\u3002")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"meta.database_name"),(0,r.yg)("td",null,"STRING NOT NULL"),(0,r.yg)("td",null,"\u5305\u542b\u8be5\u884c\u6570\u636e\u5e93\u7684\u540d\u79f0\u3002")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"meta.op_ts"),(0,r.yg)("td",null,"TIMESTAMP_LTZ(3) NOT NULL"),(0,r.yg)("td",null,"\u5b83\u8868\u793a\u5728\u6570\u636e\u5e93\u4e2d\u8fdb\u884c\u66f4\u6539\u7684\u65f6\u95f4\u3002\u5982\u679c\u8bb0\u5f55\u662f\u4ece\u8868\u7684\u5feb\u7167\u800c\u4e0d\u662f binlog \u4e2d\u8bfb\u53d6\u7684\uff0c\u5219\u8be5\u503c\u59cb\u7ec8\u4e3a 0\u3002")))),(0,r.yg)("p",null,"\u4f7f\u7528\u5143\u6570\u636e\u5b57\u6bb5\u7684\u4f8b\u5b50\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sqlserver_extract_node (\n    table_name STRING METADATA  FROM 'table_name' VIRTUAL,\n    schema_name STRING METADATA  FROM 'schema_name' VIRTUAL,\n    db_name STRING METADATA FROM 'database_name' VIRTUAL,\n    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,\n    id INT NOT NULL\n) WITH (\n    'connector' = 'sqlserver-cdc',\n    'hostname' = 'localhost',\n    'port' = '1433',\n    'username' = 'sa',\n    'password' = 'password',\n    'database-name' = 'test',\n    'schema-name' = 'dbo',\n    'table-name' = 'worker'\n);\n")),(0,r.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("div",{class:"wy-table-responsive"},(0,r.yg)("table",{class:"colwidths-auto docutils"},(0,r.yg)("thead",null,(0,r.yg)("tr",null,(0,r.yg)("th",{class:"text-left"},"SQLServer type"),(0,r.yg)("th",{class:"text-left"},"Flink SQL type"))),(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"char(n)"),(0,r.yg)("td",null,"CHAR(n)")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"varchar(n)",(0,r.yg)("br",null),"nvarchar(n)",(0,r.yg)("br",null),"nchar(n)"),(0,r.yg)("td",null,"VARCHAR(n)")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"text",(0,r.yg)("br",null),"ntext",(0,r.yg)("br",null),"xml"),(0,r.yg)("td",null,"STRING")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"decimal(p, s)",(0,r.yg)("br",null),"money",(0,r.yg)("br",null),"smallmoney"),(0,r.yg)("td",null,"DECIMAL(p, s)")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"numeric"),(0,r.yg)("td",null,"NUMERIC")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"REAL",(0,r.yg)("br",null),"FLOAT",(0,r.yg)("br",null)),(0,r.yg)("td",null,"FLOAT")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"bit"),(0,r.yg)("td",null,"BOOLEAN")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"int"),(0,r.yg)("td",null,"INT")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"tinyint"),(0,r.yg)("td",null,"TINYINT")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"smallint"),(0,r.yg)("td",null,"SMALLINT")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"time (n)"),(0,r.yg)("td",null,"TIME (n)")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"bigint"),(0,r.yg)("td",null,"BIGINT")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"date"),(0,r.yg)("td",null,"DATE")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"datetime2",(0,r.yg)("br",null),"datetime",(0,r.yg)("br",null),"smalldatetime"),(0,r.yg)("td",null,"TIMESTAMP(n)")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"datetimeoffset"),(0,r.yg)("td",null,"TIMESTAMP_LTZ(3)"))))))}c.isMDXComponent=!0}}]);