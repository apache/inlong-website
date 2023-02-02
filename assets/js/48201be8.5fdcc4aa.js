"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[97234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(d,".").concat(m)]||c[m]||s[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51009:(e,t,n)=>{n.d(t,{Y:()=>r});const r={inLongVersion:"1.3.0-SNAPSHOT"}},83251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(51009);const l={title:"TubeMQ",sidebar_position:11},i=void 0,d={unversionedId:"data_node/extract_node/tube",id:"version-1.3.0/data_node/extract_node/tube",title:"TubeMQ",description:"Overview",source:"@site/versioned_docs/version-1.3.0/data_node/extract_node/tube.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/tube",permalink:"/docs/1.3.0/data_node/extract_node/tube",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/data_node/extract_node/tube.md",tags:[],version:"1.3.0",sidebarPosition:11,frontMatter:{title:"TubeMQ",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Doris",permalink:"/docs/1.3.0/data_node/extract_node/doris"},next:{title:"Overview",permalink:"/docs/1.3.0/data_node/load_node/overview"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Version",id:"version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"How to create a TubeMQ Extract Node",id:"how-to-create-a-tubemq-extract-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"TubeMQ Extract Node Options",id:"tubemq-extract-node-options",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://inlong.apache.org/docs/modules/tubemq/overview"},"Apache InLong TubeMQ")," is a distributed, open source pub-sub messaging and steaming platform for real-time workloads, trillions of massive data precipitation."),(0,a.kt)("h2",{id:"version"},"Version"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Extract Node"),(0,a.kt)("th",{parentName:"tr",align:null},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/1.3.0/data_node/extract_node/tube"},"TubeMQ")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://inlong.apache.org/docs/next/modules/tubemq/overview"},"TubeMQ"),": >=0.1.0",(0,a.kt)("br",null))))),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"In order to set up the ",(0,a.kt)("inlineCode",{parentName:"p"},"TubeMQ Extract Node"),", the following provides dependency information for both projects using a\nbuild automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,a.kt)("h3",{id:"maven-dependency"},"Maven dependency"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-tubemq</artifactId>\n    <version>${o.Y.inLongVersion}</version>\n</dependency>\n`)),(0,a.kt)("h2",{id:"how-to-create-a-tubemq-extract-node"},"How to create a TubeMQ Extract Node"),(0,a.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,a.kt)("p",null,"The example below shows how to create a TubeMQ Extract Node with ",(0,a.kt)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Create a TubeMQ table 'tube_extract_node' in Flink SQL Cli\nFlink SQL> CREATE TABLE tube_extract_node (\n     id INT,\n     name STRING,\n     age INT,\n     salary FLOAT \n     ) WITH (\n     'connector' = 'tubemq',\n     'topic' = 'topicName',\n     'masterRpc' = 'rpcUrl', -- 127.0.0.1:8715\n     'format' = 'json',\n     'groupId' = 'groupName');\n  \n-- Read data from tube_extract_node\nFlink SQL> SELECT * FROM tube_extract_node;\n")),(0,a.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h2",{id:"tubemq-extract-node-options"},"TubeMQ Extract Node Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default value"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connector"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"tubemq"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Set the connector type. Available options are ",(0,a.kt)("inlineCode",{parentName:"td"},"tubemq"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topic"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"(none)"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Set the input or output topic")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"masterRpc"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"(none)"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Set the TubeMQ master service address.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"format"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"(none)"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"TubeMQ message value serialization format, support JSON, Avro, etc. For more information, see the ",(0,a.kt)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/connectors/table/formats/overview/"},"Flink format"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"(none)"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Consumer group in TubeMQ")))))}s.isMDXComponent=!0}}]);