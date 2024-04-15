"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[506],{3905:(n,e,t)=>{t.d(e,{Zo:()=>_,kt:()=>d});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=a.createContext({}),p=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},_=function(n){var e=p(n.components);return a.createElement(s.Provider,{value:e},n.children)},m="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,s=n.parentName,_=l(n,["components","mdxType","originalType","parentName"]),m=p(t),f=i,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||r;return t?a.createElement(d,o(o({ref:e},_),{},{components:t})):a.createElement(d,o({ref:e},_))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[m]="string"==typeof n?n:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9546:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={title:"Dataflow Example",sidebar_position:3},o="Examples",l={unversionedId:"modules/sort/dataflow_example",id:"version-1.1.0/modules/sort/dataflow_example",title:"Dataflow Example",description:"To make it easier for you to create inlong-sort jobs, here we list some dataflow configuration examples.",source:"@site/versioned_docs/version-1.1.0/modules/sort/dataflow_example.md",sourceDirName:"modules/sort",slug:"/modules/sort/dataflow_example",permalink:"/docs/1.1.0/modules/sort/dataflow_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/modules/sort/dataflow_example.md",tags:[],version:"1.1.0",sidebarPosition:3,frontMatter:{title:"Dataflow Example",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/1.1.0/modules/sort/quick_start"},next:{title:"Overview",permalink:"/docs/1.1.0/modules/manager/overview"}},s={},p=[{value:"Pulsar to Kafka",id:"pulsar-to-kafka",level:2},{value:"Pulsar to Hive",id:"pulsar-to-hive",level:2}],_={toc:p},m="wrapper";function u(n){let{components:e,...t}=n;return(0,i.kt)(m,(0,a.Z)({},_,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"examples"},"Examples"),(0,i.kt)("p",null,"To make it easier for you to create inlong-sort jobs, here we list some dataflow configuration examples."),(0,i.kt)("h2",{id:"pulsar-to-kafka"},"Pulsar to Kafka"),(0,i.kt)("p",null,"Normal example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "source_info": {\n        "type": "pulsar",\n        "admin_url": "YOUR_PULSAR_ADMIN_URL",\n        "service_url": "YOUR_PULSAR_SERVICE_URL",\n        "topic": "YOUR_PULSAR_TOPIC",\n        "subscription_name": "debezium2canal",\n        "deserialization_info": {\n            "type": "debezium_json",\n            "ignore_parse_errors": true,\n            "timestamp_format_standard": "ISO_8601"\n        },\n        "fields": [\n            {\n                "type": "base",\n                "name": "name",\n                "format_info": {\n                    "type": "string"\n                }\n            },\n            {\n                "type": "base",\n                "name": "age",\n                "format_info": {\n                    "type": "int"\n                }\n            }\n        ],\n        "authentication": null\n    },\n    "sink_info": {\n        "type": "kafka",\n        "fields": [\n            {\n                "type": "base",\n                "name": "name",\n                "format_info": {\n                    "type": "string"\n                }\n            },\n            {\n                "type": "base",\n                "name": "age",\n                "format_info": {\n                    "type": "int"\n                }\n            }\n        ],\n        "address": "YOUR_KAFKA_ADDRESS",\n        "topic": "sort_test_canal",\n        "serialization_info": {\n            "type": "canal"\n        }\n    },\n    "properties": {\n        "consumer.bootstrap-mode": "earliest",\n        "transaction.timeout.ms": 900000\n    }\n}\n')),(0,i.kt)("p",null,"Whole-database migration example\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 123,\n    "source_info": {\n        "type": "pulsar",\n        "admin_url": "YOUR_PULSAR_ADMIN_URL",\n        "service_url": "YOUR_PULSAR_SERVICE_URL",\n        "topic": "YOUR_PULSAR_TOPIC",\n        "subscription_name": "whole-db-migration",\n        "deserialization_info": {\n            "type": "debezium_json",\n            "ignore_parse_errors": false,\n            "timestamp_format_standard": "ISO_8601",\n            "include_update_before": true\n        },\n        "fields": [\n            {\n                "type": "builtin",\n                "name": "db",\n                "format_info": {\n                    "type": "string"\n                },\n                "builtin_field": "MYSQL_METADATA_DATABASE"\n            },\n            {\n                "type": "builtin",\n                "name": "table",\n                "format_info": {\n                    "type": "string"\n                },\n                "builtin_field": "MYSQL_METADATA_TABLE"\n            },\n            {\n                "type": "builtin",\n                "name": "mydata",\n                "format_info": {\n                    "type": "string"\n                },\n                "builtin_field": "MYSQL_METADATA_DATA"\n            },\n            {\n                "type": "builtin",\n                "name": "es",\n                "format_info": {\n                    "type": "long"\n                },\n                "builtin_field": "MYSQL_METADATA_EVENT_TIME"\n            },\n            {\n                "type": "builtin",\n                "name": "isDdl",\n                "format_info": {\n                    "type": "boolean"\n                },\n                "builtin_field": "MYSQL_METADATA_IS_DDL"\n            },\n            {\n                "type": "builtin",\n                "name": "type",\n                "format_info": {\n                    "type": "string"\n                },\n                "builtin_field": "MYSQL_METADATA_EVENT_TYPE"\n            }\n        ],\n        "authentication": null\n    },\n    "sink_info": {\n        "type": "kafka",\n        "fields": [\n            {\n                "type": "builtin",\n                "name": "db",\n                "format_info": {\n                    "type": "string"\n                },\n                "builtin_field": "MYSQL_METADATA_DATABASE"\n            },\n            {\n                "type": "builtin",\n                "name": "table",\n                "format_info": {\n                    "type": "string"\n                },\n                "builtin_field": "MYSQL_METADATA_TABLE"\n            },\n            {\n                "type": "builtin",\n                "name": "mydata",\n                "format_info": {\n                    "type": "string"\n                },\n                "builtin_field": "MYSQL_METADATA_DATA"\n            },\n            {\n                "type": "builtin",\n                "name": "es",\n                "format_info": {\n                    "type": "long"\n                },\n                "builtin_field": "MYSQL_METADATA_EVENT_TIME"\n            },\n            {\n                "type": "builtin",\n                "name": "isDdl",\n                "format_info": {\n                    "type": "boolean"\n                },\n                "builtin_field": "MYSQL_METADATA_IS_DDL"\n            },\n            {\n                "type": "builtin",\n                "name": "type",\n                "format_info": {\n                    "type": "string"\n                },\n                "builtin_field": "MYSQL_METADATA_EVENT_TYPE"\n            }\n        ],\n        "address": "YOUR_KAFKA_ADDRESS",\n        "topic": "whole-db-migration",\n        "serialization_info": {\n            "type": "canal"\n        }\n    },\n    "properties": {\n        "transaction.timeout.ms": 900000,\n        "consumer.bootstrap-mode": "earliest"\n    }\n}\n')),(0,i.kt)("h2",{id:"pulsar-to-hive"},"Pulsar to Hive"),(0,i.kt)("p",null,"Normal example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 123,\n    "source_info": {\n        "type": "pulsar",\n        "admin_url": "http://100.76.43.216:8080",\n        "service_url": "pulsar://100.76.43.216:6650",\n        "topic": "persistent://public/public/b_pzr",\n        "subscription_name": "whole-db-migration",\n        "deserialization_info": {\n            "type": "debezium_json",\n            "ignore_parse_errors": false,\n            "timestamp_format_standard": "ISO_8601",\n            "include_update_before": true\n        },\n        "fields": [\n            {\n                "type": "base",\n                "name": "f1",\n                "format_info": {\n                    "type": "string"\n                }\n            },\n            {\n                "type": "base",\n                "name": "f2",\n                "format_info": {\n                    "type": "int"\n                }\n            },\n            {\n                "type": "builtin",\n                "name": "data_time",\n                "format_info": {\n                    "type": "string"\n                },\n                "builtin_field": "DATA_TIME"\n            }\n        ],\n        "authentication": null\n    },\n    "sink_info": {\n        "type": "hive",\n        "fields": [\n            {\n                "type": "base",\n                "name": "f1",\n                "format_info": {\n                    "type": "string"\n                }\n            },\n            {\n                "type": "base",\n                "name": "f2",\n                "format_info": {\n                    "type": "int"\n                }\n            },\n            {\n                "type": "builtin",\n                "name": "data_time",\n                "format_info": {\n                    "type": "string"\n                },\n                "builtin_field": "DATA_TIME"\n            }\n        ],\n        "hive_server_jdbc_url": "YOUR_HIVE_JDBC_URL",\n        "database": "YOUR_HIVE_DB_NAME",\n        "table": "YOUR_HIVE_TABLE_NAME",\n        "username": "username",\n        "password": "password",\n        "data_path": "YOUR_HIVE_TABLE_DATA_PATH_ON_HDFS",\n        "partitions": [\n            {\n                "type": "time",\n                "field_name": "data_time",\n                "date_format": "yyyy-MM-dd"\n            },\n            {\n                "type": "field",\n                "field_name": "f2"\n            }\n        ],\n        "file_format": {\n            "type": "text",\n            "splitter": "|",\n            "compression_type": "GZIP"\n        },\n        "hadoop_proxy_user": "proxyUser"\n    },\n    "properties": {\n        "transaction.timeout.ms": 900000,\n        "consumer.bootstrap-mode": "latest"\n    }\n}\n')))}u.isMDXComponent=!0}}]);