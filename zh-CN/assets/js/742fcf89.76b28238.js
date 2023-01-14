"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[11754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u5b89\u88c5\u90e8\u7f72"},s=void 0,i={unversionedId:"modules/audit/quick_start",id:"version-1.5.0/modules/audit/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 inlong-audit \u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u4f7f\u7528 MySQL \u5b58\u50a8\u5ba1\u8ba1\u6570\u636e\uff0c\u9700\u8981\u5148\u901a\u8fc7sql/apacheinlongaudit.sql\u521d\u59cb\u5316\u6570\u636e\u5e93\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.5.0/modules/audit/quick_start.md",sourceDirName:"modules/audit",slug:"/modules/audit/quick_start",permalink:"/zh-CN/docs/modules/audit/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/modules/audit/quick_start.md",tags:[],version:"1.5.0",frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-CN/docs/modules/audit/configure"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/data_node/extract_node/overview"}},o={},u=[{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Audit Proxy",id:"audit-proxy",level:2},{value:"\u914d\u7f6e\u6d88\u606f\u961f\u5217",id:"\u914d\u7f6e\u6d88\u606f\u961f\u5217",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"Audit Store",id:"audit-store",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56-1",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8-1",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-audit")," \u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u4f7f\u7528 MySQL \u5b58\u50a8\u5ba1\u8ba1\u6570\u636e\uff0c\u9700\u8981\u5148\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit.sql"),"\u521d\u59cb\u5316\u6570\u636e\u5e93\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521d\u59cb\u5316 database\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_audit.sql\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528 ClickHouse \u5b58\u50a8\u5ba1\u8ba1\u6570\u636e\uff0c\u9700\u8981\u5148\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit_clickhouse.sql"),"\u521d\u59cb\u5316\u6570\u636e\u5e93\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521d\u59cb\u5316 database\nclickhouse client -u DB_USER --password DB_PASSWD < sql/apache_inlong_audit_clickhouse.sql\n")),(0,r.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,r.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar"),", \u5e76\u5c06\u5176\u653e\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"lib/")," \u76ee\u5f55\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,r.kt)("h2",{id:"audit-proxy"},"Audit Proxy"),(0,r.kt)("h3",{id:"\u914d\u7f6e\u6d88\u606f\u961f\u5217"},"\u914d\u7f6e\u6d88\u606f\u961f\u5217"),(0,r.kt)("p",null,"\u6d88\u606f\u961f\u5217\u670d\u52a1\u76ee\u524d\u53ef\u4ee5\u4f7f\u7528Apache Pulsar\u6216\u8005InLong TubeMQ\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528Pulsar\uff0c\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/audit-proxy-pulsar.conf"),"\uff0c\u4fee\u6539\u4e0b\u5217\u914d\u7f6e\u4e2d\u7684 Pulsar service \u5730\u5740\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sources.tcp-source.port = 10081\nagent1.sinks.pulsar-sink-msg1.pulsar_server_url= pulsar://localhost:6650\nagent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit\nagent1.sinks.pulsar-sink-msg2.pulsar_server_url = pulsar://localhost:6650\nagent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528TubeMQ\uff0c\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/audit-proxy-tube.conf"),"\uff0c\u4fee\u6539\u4e0b\u5217\u914d\u7f6e\u4e2d\u7684 TubeMQ master \u5730\u5740\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sources.tcp-source.port = 10081\nagent1.sinks.tube-sink-msg1.master-host-port-list = localhost:8715\nagent1.sinks.tube-sink-msg1.topic = inlong-audit\nagent1.sinks.tube-sink-msg2.master-host-port-list = localhost:8715\nagent1.sinks.tube-sink-msg2.topic = inlong-audit\n")),(0,r.kt)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"# \u9ed8\u8ba4\u4f7f\u7528 pulsar \u4f5c\u4e3a\u6d88\u606f\u961f\u5217\uff0c\u52a0\u8f7d audit-proxy-pulsar.conf \u914d\u7f6e\u6587\u4ef6\nbash +x ./bin/proxy-start.sh [pulsar\uff5ctube]\n")),(0,r.kt)("h2",{id:"audit-store"},"Audit Store"),(0,r.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application.properties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"# proxy.type: pulsar / tube\naudit.config.proxy.type=pulsar\n\n# store.server: mysql / elasticsearch \naudit.config.store.mode=mysql\n\n# audit pulsar config (optional)\uff0c\u5c06PULSAR_BROKER_LIST\u66ff\u6362\u4e3aPulsar\u96c6\u7fa4\u7684\u670d\u52a1\u5730\u5740\naudit.pulsar.server.url=pulsar://PULSAR_BROKER_LIST\naudit.pulsar.topic=persistent://public/default/inlong-audit\naudit.pulsar.consumer.sub.name=sub-audit\n\n# audit tube config (optional)\uff0c\u5c06TUBE_LIST\u66ff\u6362\u4e3aTubeMQ\u96c6\u7fa4\u7684master\u5730\u5740\naudit.tube.masterlist=TUBE_LIST\naudit.tube.topic=inlong-audit\naudit.tube.consumer.group.name=inlong-audit-consumer\n\n# mysql config\nspring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n\n# es config\nelasticsearch.host=127.0.0.1\nelasticsearch.port=9200\nelasticsearch.authEnable=false\nelasticsearch.username=elastic\nelasticsearch.password=inlong\nelasticsearch.shardsNum=5\nelasticsearch.replicaNum=1\nelasticsearch.indexDeleteDay=5\nelasticsearch.enableDocId=true\nelasticsearch.bulkInterval=10\nelasticsearch.bulkThreshold=5000\nelasticsearch.auditIdSet=1,2\n\n# clickhouse config\nclickhouse.driver=ru.yandex.clickhouse.ClickHouseDriver\nclickhouse.url=jdbc:clickhouse://127.0.0.1:8123/default\nclickhouse.username=default\nclickhouse.password=default\nclickhouse.batchIntervalMs=1000\nclickhouse.batchThreshold=500\nclickhouse.processIntervalMs=100\n\n")),(0,r.kt)("h3",{id:"\u4f9d\u8d56-1"},"\u4f9d\u8d56"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,r.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.26/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar"),", \u5e76\u5c06\u5176\u653e\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"lib/")," \u76ee\u5f55\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,r.kt)("h3",{id:"\u542f\u52a8-1"},"\u542f\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"bash +x ./bin/store-start.sh\n")),(0,r.kt)("p",null,"Audit Proxy \u9ed8\u8ba4\u76d1\u542c\u7aef\u53e3\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"10081"),"\u3002"))}p.isMDXComponent=!0}}]);