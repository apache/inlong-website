"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[44711],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(n),s=r,k=u["".concat(m,".").concat(s)]||u[s]||g[s]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},97073:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Hive Example",sidebar_position:3},i=void 0,o={unversionedId:"modules/sort-standalone/hive_example",id:"modules/sort-standalone/hive_example",title:"Hive Example",description:"Prepare to get module archive",source:"@site/docs/modules/sort-standalone/hive_example.md",sourceDirName:"modules/sort-standalone",slug:"/modules/sort-standalone/hive_example",permalink:"/docs/next/modules/sort-standalone/hive_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/sort-standalone/hive_example.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Hive Example",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/next/modules/sort-standalone/quick_start"},next:{title:"Elasticsearch Example",permalink:"/docs/next/modules/sort-standalone/elasticsearch_example"}},m={},p=[{value:"Prepare to get module archive",id:"prepare-to-get-module-archive",level:2},{value:"Prepare to modify configuration file",id:"prepare-to-modify-configuration-file",level:2},{value:"Example: conf/common.properties",id:"example-confcommonproperties",level:3},{value:"Example: conf/SortClusterConfig.conf",id:"example-confsortclusterconfigconf",level:3},{value:"Example: conf/sid_hive_inlong6th_v3.conf",id:"example-confsid_hive_inlong6th_v3conf",level:3},{value:"Modify configuration file:conf/common.properties",id:"modify-configuration-fileconfcommonproperties",level:2},{value:"Modify configuration file: SortClusterConfig.conf",id:"modify-configuration-file-sortclusterconfigconf",level:2},{value:"Modify configuration: SortTaskConfig",id:"modify-configuration-sorttaskconfig",level:3},{value:"Modify configuration: idParams of Hive sort task",id:"modify-configuration-idparams-of-hive-sort-task",level:3},{value:"Modify configuration: sinkParams of Hive sort task",id:"modify-configuration-sinkparams-of-hive-sort-task",level:3},{value:"Modify configuration file: sid_hive_inlong6th_v3.conf",id:"modify-configuration-file-sid_hive_inlong6th_v3conf",level:2},{value:"Modify configuration: sid_hive_inlong6th_v3.conf",id:"modify-configuration-sid_hive_inlong6th_v3conf",level:3},{value:"Modify configuration: CacheCluster",id:"modify-configuration-cachecluster",level:3},{value:"Modify configuration: Topic",id:"modify-configuration-topic",level:3}],d={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prepare-to-get-module-archive"},"Prepare to get module archive"),(0,r.kt)("p",null,"Module archive is in the directory:inlong-sort-standalone/sort-standalone-dist/target/, the archive file is apache-inlong-sort-standalone-${project.version}-bin.tar.gz."),(0,r.kt)("h2",{id:"prepare-to-modify-configuration-file"},"Prepare to modify configuration file"),(0,r.kt)("p",null,'At first, decompress the archive file, copy three files in the directory "conf/hive/" to the directory "conf/".'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"conf/common.properties, common configuration of all components."),(0,r.kt)("li",{parentName:"ul"},"conf/SortClusterConfig.conf, sink configuration of all sort tasks."),(0,r.kt)("li",{parentName:"ul"},"conf/sid_hive_inlong6th_v3.conf, data source configuration example of a sort task, the file name is same with sort task name in SortClusterConfig.conf.")),(0,r.kt)("h3",{id:"example-confcommonproperties"},"Example: conf/common.properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"clusterId=hivev3-sz-sz1\nnodeId=nodeId\nmetricDomains=Sort\nmetricDomains.Sort.domainListeners=org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener\nmetricDomains.Sort.snapshotInterval=60000\nsortChannel.type=org.apache.inlong.sort.standalone.channel.BufferQueueChannel\nsortSink.type=org.apache.inlong.sort.standalone.sink.hive.HiveSink\nsortSource.type=org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource\n\nsortClusterConfig.type=file\nsortClusterConfig.file=SortClusterConfig.conf\nsortSourceConfig.QueryConsumeConfigType=file\n\n# manager config example\n#sortClusterConfig.type=manager\n#sortSourceConfig.QueryConsumeConfigType=manager\n#managerUrlLoaderType=org.apache.inlong.sort.standalone.config.loader.CommonPropertiesManagerUrlLoader\n#sortClusterConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getClusterConfig\n#sortSourceConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getSortSource\n\n")),(0,r.kt)("h3",{id:"example-confsortclusterconfigconf"},"Example: conf/SortClusterConfig.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "data":{\n        "clusterName":"hivev3-sz-sz1",\n        "sortTasks":[\n            {\n                "idParams":[\n                    {\n                        "inlongGroupId":"0fc00000046",\n                        "inlongStreamId":"",\n                        "separator":"|",\n                        "partitionIntervalMs":3600000,\n                        "idRootPath":"/user/hive/warehouse/t_inlong_v1_0fc00000046",\n                        "partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",\n                        "hiveTableName":"t_inlong_v1_0fc00000046",\n                        "partitionFieldName":"dt",\n                        "partitionFieldPattern":"yyyyMMddHH",\n                        "msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",\n                        "maxPartitionOpenDelayHour":8\n                    },\n                    {\n                        "inlongGroupId":"03600000045",\n                        "inlongStreamId":"",\n                        "separator":"|",\n                        "partitionIntervalMs":3600000,\n                        "idRootPath":"/user/hive/warehouse/t_inlong_v1_03600000045",\n                        "partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",\n                        "hiveTableName":"t_inlong_v1_03600000045",\n                        "partitionFieldName":"dt",\n                        "partitionFieldPattern":"yyyyMMddHH",\n                        "msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",\n                        "maxPartitionOpenDelayHour":8\n                    },\n                    {\n                        "inlongGroupId":"05100054990",\n                        "inlongStreamId":"",\n                        "separator":"|",\n                        "partitionIntervalMs":3600000,\n                        "idRootPath":"/user/hive/warehouse/t_inlong_v1_05100054990",\n                        "partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",\n                        "hiveTableName":"t_inlong_v1_05100054990",\n                        "partitionFieldName":"dt",\n                        "partitionFieldPattern":"yyyyMMddHH",\n                        "msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",\n                        "maxPartitionOpenDelayHour":8\n                    },\n                    {\n                        "inlongGroupId":"09c00014434",\n                        "inlongStreamId":"",\n                        "separator":"|",\n                        "partitionIntervalMs":3600000,\n                        "idRootPath":"/user/hive/warehouse/t_inlong_v1_09c00014434",\n                        "partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",\n                        "hiveTableName":"t_inlong_v1_09c00014434",\n                        "partitionFieldName":"dt",\n                        "partitionFieldPattern":"yyyyMMddHH",\n                        "msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",\n                        "maxPartitionOpenDelayHour":8\n                    },\n                    {\n                        "inlongGroupId":"0c900035509",\n                        "inlongStreamId":"",\n                        "separator":"|",\n                        "partitionIntervalMs":3600000,\n                        "idRootPath":"/user/hive/warehouse/t_inlong_v1_0c900035509",\n                        "partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",\n                        "hiveTableName":"t_inlong_v1_0c900035509",\n                        "partitionFieldName":"dt",\n                        "partitionFieldPattern":"yyyyMMddHH",\n                        "msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",\n                        "maxPartitionOpenDelayHour":8\n                    }\n                ],\n                "name":"sid_hive_inlong6th_v3",\n                "sinkParams":{\n                    "hdfsPath":"hdfs://127.0.0.1:9000",\n                    "maxFileOpenDelayMinute":"5",\n                    "tokenOvertimeMinute":"60",\n                    "maxOutputFileSizeGb":"2",\n                    "hiveJdbcUrl":"jdbc:hive2://127.0.0.2:10000",\n                    "hiveDatabase":"default",\n                    "hiveUsername":"hive",\n                    "hivePassword":"hive"\n                },\n                "type":"HIVE"\n            }\n        ]\n    },\n    "errCode":0,\n    "md5":"md5",\n    "result":true\n}\n')),(0,r.kt)("h3",{id:"example-confsid_hive_inlong6th_v3conf"},"Example: conf/sid_hive_inlong6th_v3.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "sortClusterName": "hivev3-sz-sz1",\n    "sortTaskId": "sid_hive_inlong6th_v3",\n    "cacheZones": {\n        "pc_atta6th_sz1": {\n            "zoneName": "pc_atta6th_sz1",\n            "serviceUrl": "http://9.139.53.86:8080",\n            "authentication": "eyJrZXlJZCI6InB1bHNhci04MnhhN24zZWs1ZHciLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWxzYXItODJ4YTduM2VrNWR3X2FkbWluIn0.D5H_j8UQk8KYWHw_mzq2HmR393SnbL5Gz7JYCANBPnI",\n            "topics": [{\n                "topic": "pulsar-82xa7n3ek5dw/atta/atta_topic_1",\n                "partitionCnt": 10,\n                "topicProperties": {}\n            }],\n            "cacheZoneProperties": {},\n            "zoneType": "pulsar"\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"modify-configuration-fileconfcommonproperties"},"Modify configuration file:conf/common.properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clusterId"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-sort-standalone cluster id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodeId"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Local IP"),(0,r.kt)("td",{parentName:"tr",align:null},"Current node id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metricDomains"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Sort"),(0,r.kt)("td",{parentName:"tr",align:null},"domain name of metric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metricDomains.Sort.domainListeners"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener"),(0,r.kt)("td",{parentName:"tr",align:null},"class name list of metric listener, separated by space")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metricDomains.Sort.snapshotInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"60000"),(0,r.kt)("td",{parentName:"tr",align:null},"interval snapshoting metric data(millisecond)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prometheusHttpPort"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"8080"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP server port of prometheus simple client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortChannel.type"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.channel.BufferQueueChannel"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel class name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortSink.type"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Sink class name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortSource.type"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource"),(0,r.kt)("td",{parentName:"tr",align:null},"Source class name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortClusterConfig.type"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"manager"),(0,r.kt)("td",{parentName:"tr",align:null},"Loader source of cluster configuration data: ","[file,manager,UserDefinedClassName]",".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortClusterConfig.file"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"SortClusterConfig.conf"),(0,r.kt)("td",{parentName:"tr",align:null},"File name in class resource when sortClusterConfig.type=file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortClusterConfig.managerUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"The parameter is the cluster configuration URL of InlongManager when sortClusterConfig.type=manager. ",(0,r.kt)("br",null),"For example:http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getClusterConfig")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortSourceConfig.QueryConsumeConfigType"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"manager"),(0,r.kt)("td",{parentName:"tr",align:null},"Loader source of sort task configuration data: ","[file,manager,UserDefinedClassName]",". ",(0,r.kt)("br",null),"Sort task configuration file is ${sortTaskId}.conf in the class resource when sortSourceConfig.QueryConsumeConfigType=file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortSourceConfig.managerUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"The parameter is the sort task configuration URL of InlongManager when sortClusterConfig.type=manager. ",(0,r.kt)("br",null),"For example:http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getSortSource")))),(0,r.kt)("h2",{id:"modify-configuration-file-sortclusterconfigconf"},"Modify configuration file: SortClusterConfig.conf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get cluster configuration data from the file:SortClusterConfig.conf in classpath, it can not support online updating."),(0,r.kt)("li",{parentName:"ul"},"Get cluster configuration data from InlongManager URL, it can support online updating.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clusterName"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-sort-standalone cluster id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortTasks"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"JsonArray","<","SortTaskConfig",">"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Sort task list")))),(0,r.kt)("h3",{id:"modify-configuration-sorttaskconfig"},"Modify configuration: SortTaskConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"sort task name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},'sort task type, for example:HIVE("hive"), TUBE("tube"), KAFKA("kafka"), PULSAR("pulsar"), ElasticSearch("ElasticSearch"), UNKNOWN("n")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idParams"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Inlong DataStream configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sinkParams"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Sort task parameters")))),(0,r.kt)("h3",{id:"modify-configuration-idparams-of-hive-sort-task"},"Modify configuration: idParams of Hive sort task"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"inlongGroupId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"inlongStreamId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"separator"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"separator of Inlong datastream in data source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partitionIntervalMs"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"3600000"),(0,r.kt)("td",{parentName:"tr",align:null},"partition interval(millisecond)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idRootPath"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"HDFS root path of Inlong DataStream")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partitionSubPath"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"partition sub path of Inlong DataStream")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hiveTableName"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Hive table name of Inlong DataStream")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partitionFieldName"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"dt"),(0,r.kt)("td",{parentName:"tr",align:null},"partition field name of Inlong DataStream")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partitionFieldPattern"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Date format of partition field value, the type have {yyyyMMdd},{yyyyMMddHH},{yyyyMMddHHmm}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgTimeFieldPattern"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Date format of message generation time, it support Java date format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxPartitionOpenDelayHour"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Max delay hour of partition(hour)")))),(0,r.kt)("h3",{id:"modify-configuration-sinkparams-of-hive-sort-task"},"Modify configuration: sinkParams of Hive sort task"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hdfsPath"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"NameNode URL of HDFS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxFileOpenDelayMinute"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Max writing delay minutes of simple HDFS file(minute)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenOvertimeMinute"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"token overtime of Inlong Data Stream(minute)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxOutputFileSizeGb"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Max file size of simple HDFS file(GB)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hiveJdbcUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC URL of Hive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hiveDatabase"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Hive database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hiveUsername"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Hive username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hivePassword"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Hive password")))),(0,r.kt)("h2",{id:"modify-configuration-file-sid_hive_inlong6th_v3conf"},"Modify configuration file: sid_hive_inlong6th_v3.conf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The file name include sort task name plus the postfix ".conf".')),(0,r.kt)("h3",{id:"modify-configuration-sid_hive_inlong6th_v3conf"},"Modify configuration: sid_hive_inlong6th_v3.conf"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortClusterName"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-sort-standalone cluster id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortTaskId"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Sort task name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheZones"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"JsonObject","<","String, JsonObject",">"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Cache cluster list, Map","<","cacheClusterName, CacheCluster",">")))),(0,r.kt)("h3",{id:"modify-configuration-cachecluster"},"Modify configuration: CacheCluster"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zoneName"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"cache cluster name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zoneType"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"[pulsar,tube,kafka]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"serviceUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar serviceUrl or Kafka broker list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheZoneProperties"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Map","<","String,String",">"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Cache consumer configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topics"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"List","<","Topic",">"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic list of Cache consumer")))),(0,r.kt)("h3",{id:"modify-configuration-topic"},"Modify configuration: Topic"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"cache topic name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partitionCnt"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"cache topic partition count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topicProperties"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Map","<","String,String",">"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Cache topic configuration")))))}u.isMDXComponent=!0}}]);