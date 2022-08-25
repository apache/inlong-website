"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5944],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),c=o,g=u["".concat(l,".").concat(c)]||u[c]||d[c]||r;return t?a.createElement(g,i(i({ref:n},m),{},{components:t})):a.createElement(g,i({ref:n},m))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},86028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const r={title:"\u547d\u4ee4\u884c\u5de5\u5177",sidebar_position:2},i=void 0,s={unversionedId:"user_guide/command_line_tools",id:"user_guide/command_line_tools",title:"\u547d\u4ee4\u884c\u5de5\u5177",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_guide/command_line_tools.md",sourceDirName:"user_guide",slug:"/user_guide/command_line_tools",permalink:"/zh-CN/docs/next/user_guide/command_line_tools",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/user_guide/command_line_tools.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u547d\u4ee4\u884c\u5de5\u5177",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Dashboard \u6307\u5f15",permalink:"/zh-CN/docs/next/user_guide/dashboard_usage"},next:{title:"\u89e3\u6790 InLongMsg",permalink:"/zh-CN/docs/next/development/inlong_msg"}},l={},p=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"List",id:"list",level:2},{value:"Describe",id:"describe",level:2},{value:"Create",id:"create",level:2},{value:"Json\u6587\u4ef6",id:"json\u6587\u4ef6",level:3},{value:"streamSource",id:"streamsource",level:4},{value:"streamSink",id:"streamsink",level:4},{value:"Delete",id:"delete",level:2},{value:"Update",id:"update",level:2},{value:"Log",id:"log",level:2}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,o.kt)("p",null,"\u9664\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/user_guide/dashboard_usage"},"InLong Dashboard"),"\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u6765\u67e5\u770b\u548c\u521b\u5efa\u6570\u636e Group \u548c Stream\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: managerctl [options] [command] [command options]\n  Options:\n    -h, --help\n      Get all command about managerctl.\n  Commands:\n    create      Create resource by json file\n      Usage: create [options]\n\n    describe      Display details of one or more resources\n      Usage: describe [options]\n\n    list      Displays main information for one or more resources\n      Usage: list [options]\n\n    delete       Deletes the inlong group corresponding to the given id\n      Usage: managerctl delete [command] \n      \n    update       Updates the inlong group corresponding to the given id\n      Usage: managerctl update [command] [command options]\n      \n    log          Filters out inlong groups according to its properties\n      Usage: managerctl log [command] [command options]\n")),(0,o.kt)("p",null,"\u76ee\u524d\u547d\u4ee4\u884c\u5de5\u5177\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"describe"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"create"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"log"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"update"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," \u516d\u4e2a\u547d\u4ee4\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u524d\u5f80 ",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-manager")," \u76ee\u5f55\uff0c\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/application.properties")," \u6587\u4ef6\u7684\u4ee5\u4e0b\u914d\u7f6e\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"server.host=127.0.0.1\nserver.port=8080\ndefault.admin.user=admin\ndefault.admin.password=inlong\n")),(0,o.kt)("h2",{id:"list"},"List"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: managerctl list [command] [command options]\n  Commands:\n    stream      Get stream main information\n      Usage: stream [options]\n        Options:\n        * -g, --group\n            inlong group id\n\n    group      Get group details\n      Usage: group [options]\n        Options:\n          -g, --group\n            inlong group id\n          -n, --num\n            the number displayed\n            Default: 10\n          -s, --status\n            ( CREATE | REJECTED | INITIALIZING | OPERATING | \n             STARTED | FAILED | STOPPED | FINISHED | DELETED )\n            \n    sink      Get sink details\n      Usage: sink [options]\n        Options:\n        * -g, --group\n            group id\n        * -s, --stream\n            stream id\n\n    source      Get source details\n      Usage: source [options]\n        Options:\n        * -g, --group\n            inlong group id\n        * -s, --stream\n            inlong stream id\n          -t, --type\n            sink type\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"*"," \u53f7\u4e3a\u5fc5\u9009\u9879")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"list")," \u7528\u4e8e\u5c55\u793ainlong group / stream / sink / source \u7684\u6838\u5fc3\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"describe"},"Describe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: managerctl describe [command] [command options]\n  Commands:\n    stream      Get stream details\n      Usage: stream [options]\n        Options:\n        * -g, --group\n            inlong group id\n\n    group      Get group details\n      Usage: group [options]\n        Options:\n          -g, --group\n            inlong group id\n          -n, --num\n            the number displayed\n            Default: 10\n          -s, --status\n            Default: 0\n\n    sink      Get sink details\n      Usage: sink [options]\n        Options:\n        * -g, --group\n            inlong group id\n        * -s, --stream\n            inlong stream id\n\n    source      Get source details\n      Usage: source [options]\n        Options:\n        * -g, --group\n            inlong group id\n        * -s, --stream\n            inlong stream id\n        * -t, --type\n            sink type\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"describe")," \u7528\u4e8e\u5c55\u793ainlong group / stream / sink / source \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5e76\u4ee5Json\u683c\u5f0f\u8f93\u51fa\u3002"),(0,o.kt)("h2",{id:"create"},"Create"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: managerctl create [command] [command options]\n  Commands:\n    group      Create group by json file\n      Usage: group [options]\n        Options:\n        * -f, --file\n            json file\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"create")," \u4e0d\u9700\u8981\u7533\u8bf7\u5ba1\u6838\u7b49\u6b65\u9aa4\uff0c\u53ea\u9700\u5c06\u6240\u914d\u7f6e\u4fe1\u606f\u51c6\u5907\u5728Json\u6587\u4ef6\u4e2d\u5373\u53ef\u3002"),(0,o.kt)("h3",{id:"json\u6587\u4ef6"},"Json\u6587\u4ef6"),(0,o.kt)("p",null,"Json \u6587\u4ef6\u4e3b\u8981\u6709\u4e94\u4e2a\u90e8\u5206\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"groupConf")," \u3001",(0,o.kt)("inlineCode",{parentName:"p"},"streamConf")," \u3001",(0,o.kt)("inlineCode",{parentName:"p"},"streamSource")," \u3001",(0,o.kt)("inlineCode",{parentName:"p"},"streamSink")," \u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"p"},"streamFieldList")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "groupConf": {\n    "groupName": "test_group",\n    "description": "",\n    "proxyClusterId": "1",\n    "mqBaseConf": {\n      "type": "PULSAR",\n      "pulsarServiceUrl": "pulsar://127.0.0.1:6650",\n      "pulsarAdminUrl": "http://127.0.0.1:8080",\n      "tenant": "tenant",\n      "namespace": "namespace",\n      "enableCreateResource": false\n    },\n    "sortBaseConf": {\n      "type": "FLINK",\n      "serviceUrl": "127.0.0.1:8081"\n    },\n    "zookeeperEnabled": false,\n    "dailyRecords": 10000000,\n    "peakRecords": 100000,\n    "maxLength": 10000\n  },\n  "streamConf": {\n    "name": "test_stream",\n    "description": "",\n    "dataSeparator": "|",\n    "strictlyOrdered": true,\n    "topic": "topic"\n  },\n  "streamSource": {\n    "sourceType": "KAFKA",\n    "bootstrapServers": "127.0.0.1:9092",\n    "topic": "kafka_topic",\n    "sourceName": "kafka_sourceName",\n    "dataFormat": "json",\n    "autoOffsetReset": "EARLIEST"\n  },\n  "streamSink": {\n    "sinkType": "HIVE",\n    "dbName": "test_db",\n    "jdbcUrl": "jdbc:hive2://127.0.0.1:10000",\n    "authentication": {\n      "userName": "hive",\n      "password": "hive"\n    },\n    "fileFormat": "TextFile",\n    "dataSeparator": "|",\n    "dataPath": "hdfs://127.0.0.1:9000/user/hive/warehouse/test_db",\n    "sinkFields": [\n      {\n        "id": 0,\n        "fieldType": "STRING",\n        "fieldName": "name",\n        "sourceFieldType": "STRING",\n        "sourceFieldName": "name"\n      }\n    ],\n    "tableName": "test_table",\n    "sinkName": "test",\n    "dataFormat": "json"\n  },\n  "streamFieldList": [\n    {\n      "id": 0,\n      "fieldType": "STRING",\n      "fieldName": "name",\n      "fieldComment": null,\n      "fieldValue": null\n    }\n  ]\n}\n')),(0,o.kt)("h4",{id:"streamsource"},"streamSource"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Kafka"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'"streamSource": {\n  "sourceType": "KAFKA",\n  "sourceName": "sourceName",\n  "bootstrapServers": "127.0.0.1:9092",\n  "topic": "kafka_topic",\n  "dataFormat": "json",\n  "autoOffsetReset": "EARLIEST"\n },\n')))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"MySQL Binlog"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'"mqBaseConf": {\n  "type": "BINLOG",\n  "sourceName": "sourceName",\n  "hostname": "127.0.0.1",\n  "port" : "3306",\n  "authentication": {\n    "userName": "root",\n    "password": "root"\n  },\n  "includeSchema": false,\n  "serverTimezone": "UTC",\n  "monitoredDdl": false,\n  "allMigration": false,\n  "dbNames": ["db1", "test_db*"],\n  "tableNames": ["tb1", "user"*],\n}\n')))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"File"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'"mqBaseConf": {\n  "type": "FILE",\n  "sourceName": "sourceName",\n  "ip": "127.0.0.1",\n  "pattern" : "/a/b/*.txt",\n  "timeOffset": "-1d"\n}\n'))))),(0,o.kt)("h4",{id:"streamsink"},"streamSink"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Hive"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'"streamSink": {\n  "sinkType": "HIVE",\n  "dbName": "test_db",\n  "jdbcUrl": "jdbc:hive2://127.0.0.1:10000",\n  "authentication": {\n    "userName": "hive",\n    "password": "hive"\n  },\n')))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Kafka"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'"mqBaseConf": {\n  "type": "KAFKA",\n  "bootstrapServers": "127.0.0.1:9092",\n  "topicName": "test_topic",\n  "dataFormat": "JSON",\n  "boolean": false,\n}\n')))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ClickHouse"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'"mqBaseConf": {\n  "type": "CLICKHOUSE",\n  "sinkName": "sinkName",\n  "dbName": "db_test",\n  "tableName": "table_test",\n  "jdbcUrl": "jdbc:clickhouse://127.0.0.1:8123/db",\n  "authentication": {\n    "userName": "default",\n    "password": "default"\n  },\n  "isDistributed": 1,\n  "flushInterval": 1,\n  "flushRecord": 10,\n  "keyFieldNames": "keyField",\n  "partitionFields": "partition",\n  "partitionStrategy": "BALANCE",\n  "retryTimes": 3,\n  "needCreated": false\n}\n'))))),(0,o.kt)("h2",{id:"delete"},"Delete"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: managerctl delete [command] \n  Commands:\n    group      The id of the inlong group that is to be deleted\n      Usage: group\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"delete")," \u5220\u9664\u5bf9\u5e94\u4efb\u52a1id\u7684\u4efb\u52a1\u5b9e\u4f8b"),(0,o.kt)("h2",{id:"update"},"Update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: managerctl update [command] [command options]\n  Commands:\n    group      The id of the inlong group that is to be updated\n  Usage: group [options]\n  Options:\n    *-c --config\n    the config file as json\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"update")," \u547d\u4ee4\u6307\u5b9a\u4e00\u4e2a\u4efb\u52a1\u5b9e\u4f8b\uff0c\u5e76\u4f7f\u7528--config\u4e2d\u6307\u5b9a\u7684sortconf json\u6587\u4ef6\u5bf9\u5176\u8fdb\u884c\u66f4\u65b0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sortconf json \u793a\u4f8b",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'"FlinkSortConf": {\n  "sortType": "flink",\n  "authentication": "NONE",\n  "serviceUrl": "127.0.0.1:8123",\n  "region": "beijing",\n  "properties": {}\n}\n'))))),(0,o.kt)("h2",{id:"log"},"Log"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: managerctl log [command] [command options]\n    Commands:\n    group      Get group details\n    Usage: group [options]\n    Options:\n    *-q --query [parameter:value]\n    select the list of groups accourding to one selected query.\n    Supported filters: \n        inlongGroupId\n        name (Inlong group name)   \n        mqType     \n        mqResource\n        inlongClusterTag   \n        inCharges\n        status\n        creator\n        modifier\n        createTime\n        modifyTime\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"log")," \u547d\u4ee4\u884c\u4f7f\u7528\u65f6\u9700\u9009\u62e9\u8fc7\u6ee4\u53c2\u6570\uff0c\u5f53\u5b58\u5728\u7684\u4efb\u52a1\u6570\u4e0d\u591a\u65f6\uff0c\u8be5\u547d\u4ee4\u5c06\u6253\u5370\u51fa\u6240\u6709\u6ee1\u8db3\u53c2\u6570\u7684\u4efb\u52a1\u5b9e\u4f8b"))}d.isMDXComponent=!0}}]);