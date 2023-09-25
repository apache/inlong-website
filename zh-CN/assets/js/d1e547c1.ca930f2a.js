"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[30362],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return t?r.createElement(d,s(s({ref:n},p),{},{components:t})):r.createElement(d,s({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={title:"Pulsar2Elasticsearch Example",sidebar_position:4},s=void 0,i={unversionedId:"modules/sort-standalone/pulsar2es",id:"version-1.8.0/modules/sort-standalone/pulsar2es",title:"Pulsar2Elasticsearch Example",description:"Prepare to get module archive",source:"@site/versioned_docs/version-1.8.0/modules/sort-standalone/pulsar2es.md",sourceDirName:"modules/sort-standalone",slug:"/modules/sort-standalone/pulsar2es",permalink:"/zh-CN/docs/1.8.0/modules/sort-standalone/pulsar2es",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.8.0/modules/sort-standalone/pulsar2es.md",tags:[],version:"1.8.0",sidebarPosition:4,frontMatter:{title:"Pulsar2Elasticsearch Example",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Pulsar2Hive Example",permalink:"/zh-CN/docs/1.8.0/modules/sort-standalone/pulsar2hive"},next:{title:"Pulsar2kafka Example",permalink:"/zh-CN/docs/1.8.0/modules/sort-standalone/pulsar2kafka"}},l={},c=[{value:"Prepare to get module archive",id:"prepare-to-get-module-archive",level:2},{value:"Prepare to modify configuration file",id:"prepare-to-modify-configuration-file",level:2},{value:"Example: conf/common.properties",id:"example-confcommonproperties",level:3},{value:"Example: conf/SortClusterConfig.conf",id:"example-confsortclusterconfigconf",level:3},{value:"Example: conf/sid_es_v3.conf",id:"example-confsid_es_v3conf",level:3}],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prepare-to-get-module-archive"},"Prepare to get module archive"),(0,o.kt)("p",null,"Module archive is in the directory:inlong-sort-standalone/sort-standalone-dist/target/, the archive file is apache-inlong-sort-standalone-${project.version}-bin.tar.gz."),(0,o.kt)("h2",{id:"prepare-to-modify-configuration-file"},"Prepare to modify configuration file"),(0,o.kt)("p",null,'At first, decompress the archive file, copy three files in the directory "conf/es/" to the directory "conf/".'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"conf/common.properties, common configuration of all components."),(0,o.kt)("li",{parentName:"ul"},"conf/SortClusterConfig.conf, sink configuration of all sort tasks."),(0,o.kt)("li",{parentName:"ul"},"conf/sid_es_v3.conf, data source configuration example of a sort task, the file name is same with sort task name in SortClusterConfig.conf.")),(0,o.kt)("h3",{id:"example-confcommonproperties"},"Example: conf/common.properties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clusterId=esv3-sz-sz1\nnodeId=nodeId\nmetricDomains=Sort\nmetricDomains.Sort.domainListeners=org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener\nmetricDomains.Sort.snapshotInterval=60000\nsortChannel.type=org.apache.inlong.sort.standalone.channel.BufferQueueChannel\nsortSink.type=org.apache.inlong.sort.standalone.sink.elasticsearch.EsSink\nsortSource.type=org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource\n\nsortClusterConfig.type=file\nsortClusterConfig.file=SortClusterConfig.conf\nsortSourceConfig.QueryConsumeConfigType=file\n\n# manager config example\n#sortClusterConfig.type=manager\n#sortSourceConfig.QueryConsumeConfigType=manager\n#managerUrlLoaderType=org.apache.inlong.sort.standalone.config.loader.CommonPropertiesManagerUrlLoader\n#sortClusterConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getClusterConfig\n#sortSourceConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getSortSource\n")),(0,o.kt)("h3",{id:"example-confsortclusterconfigconf"},"Example: conf/SortClusterConfig.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "clusterName": "esv3-gz-gz1",\n    "sortTasks": [{\n        "name": "sid_es_v3",\n        "type": "ES",\n        "idParams": [{\n            "indexNamePattern": "inlong0fc00000046_{yyyyMMdd}",\n            "contentOffset": "0",\n            "inlongGroupId": "testgroup",\n            "fieldOffset": "0",\n            "fieldNames": "ftime extinfo t1 t2 t3 t4",\n            "inlongStreamId": "0fc00000046",\n            "separator": "|"\n        }],\n        "sinkParams": {\n            "httpHosts": "ip:port",\n            "password": "password",\n            "bulkSizeMb": "10",\n            "flushInterval": "60",\n            "keywordMaxLength": "32767",\n            "bulkAction": "4000",\n            "concurrentRequests": "5",\n            "maxConnect": "10",\n            "isUseIndexId": "false",\n            "username": "elastic"\n        }\n    }]\n}\n')),(0,o.kt)("h3",{id:"example-confsid_es_v3conf"},"Example: conf/sid_es_v3.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "sortClusterName": "esv3-gz-gz1",\n    "sortTaskId": "sid_es_v3",\n    "cacheZones": {\n        "pc_inlong6th_sz1": {\n            "zoneName": "${PULSAR_CLUSTER_NAME}",\n            "serviceUrl": "http://${PULSAR_IP}:${PULSAR_PORT}",\n            "authentication": "${PULSAR_AUTH}",\n            "topics": [{\n                "topic": "${TENANT/NAMESPACE/TOPIC}",\n                "partitionCnt": 10,\n                "topicProperties": {}\n            }],\n            "cacheZoneProperties": {},\n            "zoneType": "pulsar"\n        }\n    }\n}\n')))}f.isMDXComponent=!0}}]);