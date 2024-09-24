"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[15183],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=i,u=d["".concat(p,".").concat(c)]||d[c]||g[c]||r;return n?a.createElement(u,l(l({ref:t},m),{},{components:n})):a.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(58168),i=(n(96540),n(15680));const r={title:"HDFS",sidebar_position:7},l=void 0,o={unversionedId:"data_node/load_node/hdfs",id:"version-1.11.0/data_node/load_node/hdfs",title:"HDFS",description:"Overview",source:"@site/versioned_docs/version-1.11.0/data_node/load_node/hdfs.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/hdfs",permalink:"/docs/1.11.0/data_node/load_node/hdfs",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.11.0/data_node/load_node/hdfs.md",tags:[],version:"1.11.0",sidebarPosition:7,frontMatter:{title:"HDFS",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"HBase",permalink:"/docs/1.11.0/data_node/load_node/hbase"},next:{title:"Hive",permalink:"/docs/1.11.0/data_node/load_node/hive"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"How to create a HDFS Load Node",id:"how-to-create-a-hdfs-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"File Formats",id:"file-formats",level:4},{value:"Rolling Policy",id:"rolling-policy",level:4},{value:"File Compaction",id:"file-compaction",level:4},{value:"Partition Commit",id:"partition-commit",level:4},{value:"Partition Commit Policy",id:"partition-commit-policy",level:4}],m={toc:s},d="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"HDFS uses the general capabilities of flink's fileSystem to support single files and partitioned files.\nThe file system connector itself is included in Flink and does not require an additional dependency.\nThe corresponding jar can be found in the Flink distribution inside the /lib directory.\nA corresponding format needs to be specified for reading and writing rows from and to a file system."),(0,i.yg)("h2",{id:"how-to-create-a-hdfs-load-node"},"How to create a HDFS Load Node"),(0,i.yg)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,i.yg)("p",null,"The example below shows how to create a HDFS Load Node with ",(0,i.yg)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hdfs_load_node (\n  id STRING,\n  name STRING,\n  uv BIGINT,\n  pv BIGINT,\n  dt STRING,\n `hour` STRING\n  ) PARTITIONED BY (dt, `hour`) WITH (\n    'connector'='filesystem-inlong',\n    'path'='...',\n    'format'='orc',\n    'sink.partition-commit.delay'='1 h',\n    'sink.partition-commit.policy.kind'='success-file'\n  );\n")),(0,i.yg)("h4",{id:"file-formats"},"File Formats"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"CSV(Uncompressed)"),(0,i.yg)("li",{parentName:"ul"},"JSON(JSON format for file system connector is not a typical JSON file but uncompressed newline delimited JSON.)"),(0,i.yg)("li",{parentName:"ul"},"Avro(Support compression by configuring avro.codec.)"),(0,i.yg)("li",{parentName:"ul"},"Parquet(Compatible with Hive.)"),(0,i.yg)("li",{parentName:"ul"},"Orc(Compatible with Hive.)"),(0,i.yg)("li",{parentName:"ul"},"Debezium-JSON"),(0,i.yg)("li",{parentName:"ul"},"Canal-JSON"),(0,i.yg)("li",{parentName:"ul"},"Raw")),(0,i.yg)("h4",{id:"rolling-policy"},"Rolling Policy"),(0,i.yg)("p",null,"Data within the partition directories are split into part files.\nEach partition will contain at least one part file for each subtask of the sink that has received data for that partition.\nThe in-progress part file will be closed and additional part file will be created according to the configurable rolling policy.\nThe policy rolls part files based on size, a timeout that specifies the maximum duration for which a file can be open."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Option"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"sink.rolling-policy.file-size"),(0,i.yg)("td",{parentName:"tr",align:null},"128MB"),(0,i.yg)("td",{parentName:"tr",align:null},"MemorySize"),(0,i.yg)("td",{parentName:"tr",align:null},"The maximum part file size before rolling.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"sink.rolling-policy.rollover-interval"),(0,i.yg)("td",{parentName:"tr",align:null},"30 min"),(0,i.yg)("td",{parentName:"tr",align:null},"String"),(0,i.yg)("td",{parentName:"tr",align:null},"The maximum time duration a part file can stay open before rolling (by default 30 min to avoid to many small files). The frequency at which this is checked is controlled by the 'sink.rolling-policy.check-interval' option.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"sink.rolling-policy.check-interval"),(0,i.yg)("td",{parentName:"tr",align:null},"1 min"),(0,i.yg)("td",{parentName:"tr",align:null},"String"),(0,i.yg)("td",{parentName:"tr",align:null},"The interval for checking time based rolling policies. This controls the frequency to check whether a part file should rollover based on 'sink.rolling-policy.rollover-interval'.")))),(0,i.yg)("h4",{id:"file-compaction"},"File Compaction"),(0,i.yg)("p",null,"The file sink supports file compactions, which allows applications to have smaller checkpoint intervals without generating a large number of files."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Option"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"auto-compaction"),(0,i.yg)("td",{parentName:"tr",align:null},"false"),(0,i.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,i.yg)("td",{parentName:"tr",align:null},"Whether to enable automatic compaction in streaming sink or not. The data will be written to temporary files. After the checkpoint is completed, the temporary files generated by a checkpoint will be compacted. The temporary files are invisible before compaction.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"compaction.file-size"),(0,i.yg)("td",{parentName:"tr",align:null},"(none)"),(0,i.yg)("td",{parentName:"tr",align:null},"String"),(0,i.yg)("td",{parentName:"tr",align:null},"The compaction target file size, the default value is the rolling file size.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,i.yg)("td",{parentName:"tr",align:null},"(none)"),(0,i.yg)("td",{parentName:"tr",align:null},"String"),(0,i.yg)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId=","[groupId]","&streamId=","[streamId]","&nodeId=","[nodeId]",".")))),(0,i.yg)("h4",{id:"partition-commit"},"Partition Commit"),(0,i.yg)("p",null,"After writing a partition, it is often necessary to notify downstream applications.\nFor example, add the partition to a Hive metastore or writing a _SUCCESS file in the directory.\nThe file system sink contains a partition commit feature that allows configuring custom policies.\nCommit actions are based on a combination of triggers and policies."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Option"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"sink.partition-commit.trigger"),(0,i.yg)("td",{parentName:"tr",align:null},"process-time"),(0,i.yg)("td",{parentName:"tr",align:null},"String"),(0,i.yg)("td",{parentName:"tr",align:null},"Trigger type for partition commit: 'process-time': based on the time of the machine, it neither requires partition time extraction nor watermark generation. Commit partition once the 'current system time' passes 'partition creation system time' plus 'delay'. 'partition-time': based on the time that extracted from partition values, it requires watermark generation. Commit partition once the 'watermark' passes 'time extracted from partition values' plus 'delay'.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"sink.partition-commit.delay"),(0,i.yg)("td",{parentName:"tr",align:null},"0 s"),(0,i.yg)("td",{parentName:"tr",align:null},"Duration"),(0,i.yg)("td",{parentName:"tr",align:null},"The partition will not commit until the delay time. If it is a daily partition, should be '1 d', if it is a hourly partition, should be '1 h'.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"sink.partition-commit.watermark-time-zone"),(0,i.yg)("td",{parentName:"tr",align:null},"UTC"),(0,i.yg)("td",{parentName:"tr",align:null},"String"),(0,i.yg)("td",{parentName:"tr",align:null},"The time zone to parse the long watermark value to TIMESTAMP value, the parsed watermark timestamp is used to compare with partition time to decide the partition should commit or not. This option is only take effect when ","`","sink.partition-commit.trigger","`"," is set to 'partition-time'. If this option is not configured correctly, e.g. source rowtime is defined on TIMESTAMP","_","LTZ column, but this config is not configured, then users may see the partition committed after a few hours. The default value is 'UTC', which means the watermark is defined on TIMESTAMP column or not defined. If the watermark is defined on TIMESTAMP","_","LTZ column, the time zone of watermark is the session time zone. The option value is either a full name such as 'America/Los_Angeles', or a custom timezone id such as 'GMT-08:00'.")))),(0,i.yg)("h4",{id:"partition-commit-policy"},"Partition Commit Policy"),(0,i.yg)("p",null,"The partition strategy defines the specific operation of partition submission."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"metastore\uff1aThis strategy is only supported when hive."),(0,i.yg)("li",{parentName:"ul"},"success: The '_SUCCESS' file will be generated after the part file is generated.")),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Option"),(0,i.yg)("th",{parentName:"tr",align:null},"Required"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"sink.partition-commit.policy.kind"),(0,i.yg)("td",{parentName:"tr",align:null},"optional"),(0,i.yg)("td",{parentName:"tr",align:null},"(none)"),(0,i.yg)("td",{parentName:"tr",align:null},"String"),(0,i.yg)("td",{parentName:"tr",align:null},"Policy to commit a partition is to notify the downstream application that the partition has finished writing, the partition is ready to be read. metastore: add partition to metastore. Only hive table supports metastore policy, file system manages partitions through directory structure. success-file: add '_success' file to directory. Both can be configured at the same time: 'metastore,success-file'. custom: use policy class to create a commit policy. Support to configure multiple policies: 'metastore,success-file'.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"sink.partition-commit.policy.class"),(0,i.yg)("td",{parentName:"tr",align:null},"optional"),(0,i.yg)("td",{parentName:"tr",align:null},"(none)"),(0,i.yg)("td",{parentName:"tr",align:null},"String"),(0,i.yg)("td",{parentName:"tr",align:null},"The partition commit policy class for implement PartitionCommitPolicy interface. Only work in custom commit policy.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"sink.partition-commit.success-file.name"),(0,i.yg)("td",{parentName:"tr",align:null},"optional"),(0,i.yg)("td",{parentName:"tr",align:null},"_SUCCESS"),(0,i.yg)("td",{parentName:"tr",align:null},"String"),(0,i.yg)("td",{parentName:"tr",align:null},"The file name for success-file partition commit policy, default is '_SUCCESS'.")))))}g.isMDXComponent=!0}}]);