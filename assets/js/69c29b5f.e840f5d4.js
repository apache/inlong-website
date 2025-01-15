"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[65023],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>c});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=a.createContext({}),s=function(e){var t=a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},p="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,c=p["".concat(g,".").concat(u)]||p[u]||i[u]||l;return r?a.createElement(c,d(d({ref:t},m),{},{components:r})):a.createElement(c,d({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,d=new Array(l);d[0]=u;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[p]="string"==typeof e?e:n,d[1]=o;for(var s=2;s<l;s++)d[s]=r[s];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},51079:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>i,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(58168),n=(r(96540),r(15680));const l={title:"Monitor Metrics",sidebar_position:4},d=void 0,o={unversionedId:"modules/sort/metrics",id:"version-2.1.0/modules/sort/metrics",title:"Monitor Metrics",description:"Overview",source:"@site/versioned_docs/version-2.1.0/modules/sort/metrics.md",sourceDirName:"modules/sort",slug:"/modules/sort/metrics",permalink:"/docs/modules/sort/metrics",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.1.0/modules/sort/metrics.md",tags:[],version:"2.1.0",sidebarPosition:4,frontMatter:{title:"Monitor Metrics",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Example",permalink:"/docs/modules/sort/example"},next:{title:"Dirty Data Archive",permalink:"/docs/modules/sort/dirty_data_archive"}},g={},s=[{value:"Overview",id:"overview",level:2},{value:"Metric",id:"metric",level:2},{value:"Supporting extract node",id:"supporting-extract-node",level:3},{value:"Node level metric",id:"node-level-metric",level:4},{value:"Table level metric",id:"table-level-metric",level:4},{value:"Supporting load node",id:"supporting-load-node",level:3},{value:"Node level metric",id:"node-level-metric-1",level:4},{value:"Table level metric",id:"table-level-metric-1",level:4},{value:"Usage",id:"usage",level:2}],m={toc:s},p="wrapper";function i(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"overview"},"Overview"),(0,n.yg)("p",null,"We add metric computing for node. Sort will compute metric when user just need add with option ",(0,n.yg)("inlineCode",{parentName:"p"},"inlong.metric.labels")," that includes groupId=",(0,n.yg)("inlineCode",{parentName:"p"},"{groupId}"),"&streamId=",(0,n.yg)("inlineCode",{parentName:"p"},"{streamId}"),"&nodeId=",(0,n.yg)("inlineCode",{parentName:"p"},"{nodeId}"),".\nSort will export metric by flink metric group, So user can use ",(0,n.yg)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/deployment/metric_reporters/"},"metric reporter")," to get metric data."),(0,n.yg)("h2",{id:"metric"},"Metric"),(0,n.yg)("h3",{id:"supporting-extract-node"},"Supporting extract node"),(0,n.yg)("h4",{id:"node-level-metric"},"Node level metric"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"metric name"),(0,n.yg)("th",{parentName:"tr",align:null},"extract node"),(0,n.yg)("th",{parentName:"tr",align:null},"description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsIn"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input records number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesIn"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input bytes number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input records per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input bytes number per second")))),(0,n.yg)("h4",{id:"table-level-metric"},"Table level metric"),(0,n.yg)("p",null," It is used for all database sync."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,n.yg)("th",{parentName:"tr",align:null},"Extract node"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numRecordsIn"),(0,n.yg)("td",{parentName:"tr",align:null},"mysql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input records number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numRecordsIn"),(0,n.yg)("td",{parentName:"tr",align:null},"oracle-cdc,postgresql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input records number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_collection_numRecordsIn"),(0,n.yg)("td",{parentName:"tr",align:null},"mongodb-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input records number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numBytesIn"),(0,n.yg)("td",{parentName:"tr",align:null},"mysql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input records number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numBytesIn"),(0,n.yg)("td",{parentName:"tr",align:null},"oracle-cdc,postgresql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input records number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_collection_numBytesIn"),(0,n.yg)("td",{parentName:"tr",align:null},"mongodb-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input bytes number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numRecordsInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"mysql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input records number per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numRecordsInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"oracle-cdc,postgresql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input records number per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_collection_numRecordsInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"mongodb-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input records number per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numBytesInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"mysql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input bytes number per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numBytesInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"oracle-cdc,postgresql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input bytes number per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_collection_numBytesInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"mongodb-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"input bytes number per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_collection_numSnapshotCreate"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"checkpoint creation attempt number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_collection_numSnapshotError"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"checkpoint creation exception number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_collection_numSnapshotComplete"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"successful checkpoint creation number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_collection_snapshotToCheckpointTimeLag"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"time lag from start to completion of checkpoint creation (ms)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_collection_numDeserializeSuccess"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"successful deserialization number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_collection_numDeserializeError"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"deserialization error number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_collection_deserializeTimeLag"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"deserialization time lag (ms)")))),(0,n.yg)("h3",{id:"supporting-load-node"},"Supporting load node"),(0,n.yg)("h4",{id:"node-level-metric-1"},"Node level metric"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,n.yg)("th",{parentName:"tr",align:null},"Load node"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,n.yg)("br",null),"hdfs,hive,iceberg,kafka,mysql,",(0,n.yg)("br",null),"oracle,postgresql,sqlserver,tdsql-postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"out records number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,n.yg)("br",null),"hdfs,hive,iceberg,kafka,mysql,",(0,n.yg)("br",null),"oracle,postgresql,sqlserver,tdsql-postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"output byte number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,n.yg)("br",null),"hdfs,hive,iceberg,kafka,mysql,",(0,n.yg)("br",null),"oracle,postgresql,sqlserver,tdsql-postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"output records per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,n.yg)("br",null),"hdfs,hive,iceberg,kafka,mysql,",(0,n.yg)("br",null),"oracle,postgresql,sqlserver,tdsql-postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"output bytes  per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_dirtyRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,n.yg)("br",null),"hdfs,hive,iceberg,kafka,mysql,",(0,n.yg)("br",null),"oracle,postgresql,sqlserver,tdsql-postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"output records")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_dirtyBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,n.yg)("br",null),"hdfs,hive,iceberg,kafka,mysql,",(0,n.yg)("br",null),"oracle,postgresql,sqlserver,tdsql-postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"output bytes")))),(0,n.yg)("h4",{id:"table-level-metric-1"},"Table level metric"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,n.yg)("th",{parentName:"tr",align:null},"Load node"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"doris,iceberg,starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"out records number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"out records number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_topic_numRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka"),(0,n.yg)("td",{parentName:"tr",align:null},"out records number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"doris,iceberg,starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"out byte number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"out byte number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_topic_numBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka"),(0,n.yg)("td",{parentName:"tr",align:null},"out byte number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numRecordsOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"doris,iceberg,starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"out records number per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numRecordsOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"out records number per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_topic_numRecordsOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka"),(0,n.yg)("td",{parentName:"tr",align:null},"out records number per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numBytesOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"doris,iceberg,starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"out bytes number per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numBytesOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"out bytes number per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_topic_numBytesOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka"),(0,n.yg)("td",{parentName:"tr",align:null},"out bytes number per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_dirtyRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"doris,iceberg,starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"out records number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_dirtyRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"out records number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_topic_dirtyRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka"),(0,n.yg)("td",{parentName:"tr",align:null},"out records number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_dirtyBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"doris,iceberg,starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"out byte number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_dirtyBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"out byte number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_topic_dirtyBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka"),(0,n.yg)("td",{parentName:"tr",align:null},"out byte number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numSerializeSuccess"),(0,n.yg)("td",{parentName:"tr",align:null},"starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"successful deserialization number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numSerializeError"),(0,n.yg)("td",{parentName:"tr",align:null},"starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"deserialization exception number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_serializeTimeLag"),(0,n.yg)("td",{parentName:"tr",align:null},"starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"serialization time lag (ms)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numSnapshotCreate"),(0,n.yg)("td",{parentName:"tr",align:null},"starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"checkpoint creation attempt number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numSnapshotError"),(0,n.yg)("td",{parentName:"tr",align:null},"starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"checkpoint creation exception number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numSnapshotComplete"),(0,n.yg)("td",{parentName:"tr",align:null},"starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"successful checkpoint creation number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_snapshotToCheckpointTimeLag"),(0,n.yg)("td",{parentName:"tr",align:null},"starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"time lag from start to completion of checkpoint creation (ms)")))),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)("p",null,"One example about sync mysql data to postgresql data. And We will introduce usage of metric."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"use flink sql")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"\n create table `table_groupId_streamId_nodeId1`(\n     `id` INT,\n    `name` INT,\n    `age` STRING,\n    PRIMARY KEY(`id`) NOT ENFORCED)\n    WITH (\n        'connector' = 'mysql-cdc-inlong',\n        'hostname' = 'xxxx',\n        'username' = 'xxx',\n        'password' = 'xxx',\n        'database-name' = 'test',\n        'scan.incremental.snapshot.enabled' = 'true',\n        'server-time-zone' = 'GMT+8',\n        'table-name' = 'user',\n        'inlong.metric.labels' = 'groupId=xxgroup&streamId=xxstream&nodeId=xxnode'\n);\n\n CREATE TABLE `table_groupId_streamId_nodeId2`(\n     PRIMARY KEY (`id`) NOT ENFORCED,\n     `id` INT,\n     `name` STRING,\n     `age` INT)\n     WITH (\n         'connector' = 'jdbc-inlong',\n         'url' = 'jdbc:postgresql://ip:5432/postgres',\n         'username' = 'postgres',\n         'password' = 'inlong',\n         'table-name' = 'public.user',\n         'inlong.metric.labels' = 'groupId=pggroup&streamId=pgStream&nodeId=pgNode'\n         );\n\n INSERT INTO `table_groupId_streamId_nodeId2`\n SELECT\n     `id`,\n     `name`,\n     `age`\n FROM `table_groupId_streamId_nodeId1`;\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"To report the metrics to an external system, we can add metric report in flink-conf.yaml. Take the ",(0,n.yg)("inlineCode",{parentName:"li"},"Prometheus")," reporter as an example.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"metric.reporters: promgateway\nmetrics.reporter.promgateway.class: org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter\nmetrics.reporter.promgateway.host: ip\nmetrics.reporter.promgateway.port: 9091\nmetrics.reporter.promgateway.interval: 60 SECONDS\n")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"ip")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"port")," is your ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/prometheus/pushgateway/releases"},"pushgateway")," setting. "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"We can visit http://ip:port of pushgateway after execute flink sql.\nMetric name will add prefix ",(0,n.yg)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator")," when metric report is ",(0,n.yg)("inlineCode",{parentName:"li"},"org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter"),".",(0,n.yg)("br",{parentName:"li"}),"We can see full metric name:",(0,n.yg)("br",{parentName:"li"}),"",(0,n.yg)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsIn"),",",(0,n.yg)("br",{parentName:"li"}),"",(0,n.yg)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesIn"),",",(0,n.yg)("br",{parentName:"li"}),"",(0,n.yg)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsInPerSecond"),",",(0,n.yg)("br",{parentName:"li"}),"",(0,n.yg)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesInPerSecond"),",",(0,n.yg)("br",{parentName:"li"}),"",(0,n.yg)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsOut"),",",(0,n.yg)("br",{parentName:"li"}),"",(0,n.yg)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesOut"),",",(0,n.yg)("br",{parentName:"li"}),"",(0,n.yg)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsOutPerSecond"),",",(0,n.yg)("br",{parentName:"li"}),"",(0,n.yg)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesOutPerSecond"),".")))}i.isMDXComponent=!0}}]);