"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[72222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,g=d["".concat(u,".").concat(f)]||d[f]||p[f]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"Deployment"},o=void 0,l={unversionedId:"modules/audit/quick_start",id:"version-1.8.0/modules/audit/quick_start",title:"Deployment",description:"All deploying files at inlong-audit directory, if you use MySQL to store audit data, you need to first create the database through sql/apacheinlongaudit.sql.",source:"@site/versioned_docs/version-1.8.0/modules/audit/quick_start.md",sourceDirName:"modules/audit",slug:"/modules/audit/quick_start",permalink:"/docs/1.8.0/modules/audit/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.8.0/modules/audit/quick_start.md",tags:[],version:"1.8.0",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/1.8.0/modules/audit/configure"},next:{title:"Overview",permalink:"/docs/1.8.0/data_node/extract_node/overview"}},u={},s=[{value:"Audit Proxy",id:"audit-proxy",level:2},{value:"Configure MessageQueue",id:"configure-messagequeue",level:3},{value:"Start",id:"start",level:3},{value:"Audit Store",id:"audit-store",level:2},{value:"Configure",id:"configure",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Start",id:"start-1",level:3}],c={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All deploying files at ",(0,i.kt)("inlineCode",{parentName:"p"},"inlong-audit")," directory, if you use MySQL to store audit data, you need to first create the database through ",(0,i.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit.sql"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize database\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_audit.sql\n")),(0,i.kt)("p",null,"If you use ClickHouse to store audit data, you need to first create the database through ",(0,i.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit_clickhouse.sql"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize database\nclickhouse client -u DB_USER --password DB_PASSWD < sql/apache_inlong_audit_clickhouse.sql\n")),(0,i.kt)("h2",{id:"audit-proxy"},"Audit Proxy"),(0,i.kt)("h3",{id:"configure-messagequeue"},"Configure MessageQueue"),(0,i.kt)("p",null,"You can choose Apache Pulsar, Apache Kafka or InLong TubeMQ as your MessageQueue service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If using Pulsar, the configuration file is ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/audit-proxy-pulsar.conf"),". Change the Pulsar Topic info.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit\nagent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If using TubeMQ, the configuration file is ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/audit-proxy-tube.conf"),". Change the TubeMQ Topic info.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sinks.tube-sink-msg1.topic = inlong-audit\nagent1.sinks.tube-sink-msg2.topic = inlong-audit\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If using Kafka, the configuration file is ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/audit-proxy-kafka.conf"),". Change the Kafka Topic info.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sinks.kafka-sink-msg1.topic = inlong-audit\nagent1.sinks.kafka-sink-msg2.topic = inlong-audit\n")),(0,i.kt)("h3",{id:"start"},"Start"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"# By default, pulsar is used as the MessageQueue, and the audit-proxy-pulsar.conf configuration file is loaded.\nbash +x ./bin/proxy-start.sh [pulsar\uff5ctube\uff5ckafka]\n")),(0,i.kt)("h2",{id:"audit-store"},"Audit Store"),(0,i.kt)("h3",{id:"configure"},"Configure"),(0,i.kt)("p",null,"The configuration file  is ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/application.properties"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"# proxy.type: pulsar / tube / kafka\naudit.config.proxy.type=pulsar\n\n# store.server: mysql / elasticsearch / clickhouse \naudit.config.store.mode=mysql\n\n# manger config\nmanager.hosts=127.0.0.1:8083\nproxy.cluster.tag=default_cluster\n\n# audit pulsar config (optional)\naudit.pulsar.topic=persistent://public/default/inlong-audit\naudit.pulsar.consumer.sub.name=sub-audit\n\n# audit tube config (optional)\naudit.tube.topic=inlong-audit\naudit.tube.consumer.group.name=inlong-audit-consumer\n\n# kafka config (optional)\naudit.kafka.topic=inlong-audit\naudit.kafka.consumer.name=inlong-audit-consumer\naudit.kafka.group.id=audit-consumer-group\n\n# mysql config\nspring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n\n# es config (optional)\nelasticsearch.host=127.0.0.1\nelasticsearch.port=9200\n\n# clickhouse config (optional)\nclickhouse.driver=ru.yandex.clickhouse.ClickHouseDriver\nclickhouse.url=jdbc:clickhouse://127.0.0.1:8123/default\nclickhouse.username=default\nclickhouse.password=default\n")),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the backend database is MySQL, please download ",(0,i.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar")," and put it into ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/")," directory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the backend database is PostgreSQL, there's no need for additional dependencies."))),(0,i.kt)("h3",{id:"start-1"},"Start"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"bash +x ./bin/store-start.sh\n")),(0,i.kt)("p",null,"The default listen port is ",(0,i.kt)("inlineCode",{parentName:"p"},"10081"),"."))}p.isMDXComponent=!0}}]);