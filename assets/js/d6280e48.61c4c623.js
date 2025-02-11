"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[59390],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,m=u["".concat(d,".").concat(c)]||u[c]||s[c]||o;return t?a.createElement(m,l(l({ref:n},g),{},{components:t})):a.createElement(m,l({ref:n},g))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},60752:(e,n,t)=>{t.d(n,{l:()=>a});const a={inLongVersion:"2.2.0-SNAPSHOT"}},11570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>g});var a=t(58168),r=(t(96540),t(15680)),o=t(60752);const l={title:"TubeMQ",sidebar_position:20},i=void 0,d={unversionedId:"data_node/load_node/tube",id:"data_node/load_node/tube",title:"TubeMQ",description:"Overview",source:"@site/docs/data_node/load_node/tube.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/tube",permalink:"/docs/next/data_node/load_node/tube",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/load_node/tube.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"TubeMQ",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Redis",permalink:"/docs/next/data_node/load_node/redis"},next:{title:"C++ SDK",permalink:"/docs/next/sdk/dataproxy-sdk/cpp"}},p={},g=[{value:"Overview",id:"overview",level:2},{value:"Version",id:"version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"How to create a TubeMQ Load Node",id:"how-to-create-a-tubemq-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"TubeMQ Load Node Options",id:"tubemq-load-node-options",level:2}],u={toc:g},s="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://inlong.apache.org/docs/modules/tubemq/overview"},"Apache InLong TubeMQ")," is a distributed,\nopen source pub-sub messaging and steaming platform for real-time workloads, trillions of massive\ndata precipitation."),(0,r.yg)("h2",{id:"version"},"Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Load Node"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/next/data_node/load_node/tube"},"TubeMQ")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://inlong.apache.org/docs/next/modules/tubemq/overview"},"TubeMQ"),": >=0.1.0",(0,r.yg)("br",null))))),(0,r.yg)("h2",{id:"dependencies"},"Dependencies"),(0,r.yg)("p",null,"In order to set up the ",(0,r.yg)("inlineCode",{parentName:"p"},"TubeMQ Load Node"),", the following provides dependency information for both\nprojects using a\nbuild automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,r.yg)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-tubemq</artifactId>\n    <version>${o.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("h2",{id:"how-to-create-a-tubemq-load-node"},"How to create a TubeMQ Load Node"),(0,r.yg)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.yg)("p",null,"The example below shows how to create a TubeMQ Load Node with ",(0,r.yg)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Create a TubeMQ table 'tube_load_node' in Flink SQL Cli\nFlink SQL>\nCREATE TABLE tube_load_node\n(\n    id     INT,\n    name   STRING,\n    age    INT,\n    salary FLOAT\n) WITH (\n      'connector' = 'tubemq',\n      'topic' = 'topicName',\n      'master.rpc' = 'rpcUrl', -- 127.0.0.1:8715\n      'format' = 'json',\n      'group.name' = 'groupName');\n\n-- Read data from tube_load_node\nFlink SQL>\nSELECT *\nFROM tube_load_node;\n")),(0,r.yg)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h2",{id:"tubemq-load-node-options"},"TubeMQ Load Node Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"tubemq"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Set the connector type. Available options are ",(0,r.yg)("inlineCode",{parentName:"td"},"tubemq"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topic"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Set the input or output topic")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"masterRpc"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Set the TubeMQ master service address.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"TubeMQ message value serialization format, support JSON, Avro, etc. For more information, see the ",(0,r.yg)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/connectors/table/formats/overview/"},"Flink format"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"groupId"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Consumer group in TubeMQ")))))}c.isMDXComponent=!0}}]);