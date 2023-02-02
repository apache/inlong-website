"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[31921],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(g,s(s({ref:t},c),{},{components:a})):n.createElement(g,s({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72053:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={title:"Deployment"},s=void 0,l={unversionedId:"modules/audit/quick_start",id:"version-1.5.0/modules/audit/quick_start",title:"Deployment",description:"All deploying files at inlong-audit directory, if you use MySQL to store audit data, you need to first create the database through sql/apacheinlongaudit.sql.",source:"@site/versioned_docs/version-1.5.0/modules/audit/quick_start.md",sourceDirName:"modules/audit",slug:"/modules/audit/quick_start",permalink:"/docs/modules/audit/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/modules/audit/quick_start.md",tags:[],version:"1.5.0",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/modules/audit/configure"},next:{title:"Overview",permalink:"/docs/data_node/extract_node/overview"}},o={},u=[{value:"Audit Proxy",id:"audit-proxy",level:2},{value:"Configure MessageQueue",id:"configure-messagequeue",level:3},{value:"Start",id:"start",level:3},{value:"Audit Store",id:"audit-store",level:2},{value:"Configure",id:"configure",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Start",id:"start-1",level:3}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All deploying files at ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-audit")," directory, if you use MySQL to store audit data, you need to first create the database through ",(0,r.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit.sql"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize database\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_audit.sql\n")),(0,r.kt)("p",null,"If you use ClickHouse to store audit data, you need to first create the database through ",(0,r.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit_clickhouse.sql"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize database\nclickhouse client -u DB_USER --password DB_PASSWD < sql/apache_inlong_audit_clickhouse.sql\n")),(0,r.kt)("h2",{id:"audit-proxy"},"Audit Proxy"),(0,r.kt)("h3",{id:"configure-messagequeue"},"Configure MessageQueue"),(0,r.kt)("p",null,"You can choose Apache Pulsar or InLong TubeMQ as your MessageQueue service:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If using Pulsar, the configuration file is ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/audit-proxy-pulsar.conf"),". Change the Pulsar service url for next configuration.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sources.tcp-source.port = 10081\nagent1.sinks.pulsar-sink-msg1.pulsar_server_url= pulsar://localhost:6650\nagent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit\nagent1.sinks.pulsar-sink-msg2.pulsar_server_url = pulsar://localhost:6650\nagent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If using TubeMQ, the configuration file is ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/audit-proxy-tube.conf"),". Change the TubeMQ master address for next configuration.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sources.tcp-source.port = 10081\nagent1.sinks.tube-sink-msg1.master-host-port-list = localhost:8715\nagent1.sinks.tube-sink-msg1.topic = inlong-audit\nagent1.sinks.tube-sink-msg2.master-host-port-list = localhost:8715\nagent1.sinks.tube-sink-msg2.topic = inlong-audit\n")),(0,r.kt)("h3",{id:"start"},"Start"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"# By default, pulsar is used as the MessageQueue, and the audit-proxy-pulsar.conf configuration file is loaded.\nbash +x ./bin/proxy-start.sh [pulsar\uff5ctube]\n")),(0,r.kt)("h2",{id:"audit-store"},"Audit Store"),(0,r.kt)("h3",{id:"configure"},"Configure"),(0,r.kt)("p",null,"The configuration file  is ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application.properties"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"# proxy.type: pulsar / tube\naudit.config.proxy.type=pulsar\n\n# store.server: mysql / elasticsearch / clickhouse \naudit.config.store.mode=mysql\n\n# audit pulsar config (optional), replace PULSAR_BROKER_LIST with your Pulsar service url\naudit.pulsar.server.url=pulsar://PULSAR_BROKER_LIST\naudit.pulsar.topic=persistent://public/default/inlong-audit\naudit.pulsar.consumer.sub.name=sub-audit\n\n# audit tube config (optional), replace TUBE_LIST with your TubeMQ master address\naudit.tube.masterlist=TUBE_LIST\naudit.tube.topic=inlong-audit\naudit.tube.consumer.group.name=inlong-audit-consumer\n\n# mysql config\nspring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n\n# es config\nelasticsearch.host=127.0.0.1\nelasticsearch.port=9200\nelasticsearch.authEnable=false\nelasticsearch.username=elastic\nelasticsearch.password=inlong\nelasticsearch.shardsNum=5\nelasticsearch.replicaNum=1\nelasticsearch.indexDeleteDay=5\nelasticsearch.enableDocId=true\nelasticsearch.bulkInterval=10\nelasticsearch.bulkThreshold=5000\nelasticsearch.auditIdSet=1,2\n\n# clickhouse config\nclickhouse.driver=ru.yandex.clickhouse.ClickHouseDriver\nclickhouse.url=jdbc:clickhouse://127.0.0.1:8123/default\nclickhouse.username=default\nclickhouse.password=default\nclickhouse.batchIntervalMs=1000\nclickhouse.batchThreshold=500\nclickhouse.processIntervalMs=100\n\n")),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the backend database is MySQL, please download ",(0,r.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar")," and put it into ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/")," directory.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the backend database is PostgreSQL, there's no need for additional dependencies."))),(0,r.kt)("h3",{id:"start-1"},"Start"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"bash +x ./bin/store-start.sh\n")),(0,r.kt)("p",null,"The default listen port is ",(0,r.kt)("inlineCode",{parentName:"p"},"10081"),"."))}d.isMDXComponent=!0}}]);