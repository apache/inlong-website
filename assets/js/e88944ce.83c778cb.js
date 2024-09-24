"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[96709],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),g=r,y=c["".concat(s,".").concat(g)]||c[g]||p[g]||i;return t?n.createElement(y,l(l({ref:a},d),{},{components:t})):n.createElement(y,l({ref:a},d))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},91644:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(58168),r=(t(96540),t(15680));const i={title:"Deployment"},l=void 0,o={unversionedId:"modules/audit/quick_start",id:"modules/audit/quick_start",title:"Deployment",description:"All installation files are in the inlong-audit directory, if you use MySQL to store audit data, you need to first create the database through sql/apacheinlongaudit_mysql.sql.",source:"@site/docs/modules/audit/quick_start.md",sourceDirName:"modules/audit",slug:"/modules/audit/quick_start",permalink:"/docs/next/modules/audit/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/audit/quick_start.md",tags:[],version:"current",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/next/modules/audit/configure"},next:{title:"Overview",permalink:"/docs/next/data_node/extract_node/overview"}},s={},u=[{value:"Audit Proxy",id:"audit-proxy",level:2},{value:"Configure MessageQueue",id:"configure-messagequeue",level:3},{value:"Start",id:"start",level:3},{value:"Audit Store",id:"audit-store",level:2},{value:"Configure",id:"configure",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Start",id:"start-1",level:3},{value:"Audit Service",id:"audit-service",level:2},{value:"Configure",id:"configure-1",level:3},{value:"Dependencies",id:"dependencies-1",level:3},{value:"Start",id:"start-2",level:3}],d={toc:u},c="wrapper";function p(e){let{components:a,...t}=e;return(0,r.yg)(c,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"All installation files are in the ",(0,r.yg)("inlineCode",{parentName:"p"},"inlong-audit")," directory, if you use MySQL to store audit data, you need to first create the database through ",(0,r.yg)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit_mysql.sql"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# initialize database\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_audit_mysql.sql\n")),(0,r.yg)("p",null,"If you use StarRocks to store audit data, you need to first create the database through ",(0,r.yg)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit_starrocks.sql"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# initialize database\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_audit_starrocks.sql\n")),(0,r.yg)("h2",{id:"audit-proxy"},"Audit Proxy"),(0,r.yg)("h3",{id:"configure-messagequeue"},"Configure MessageQueue"),(0,r.yg)("p",null,"You can choose Apache Pulsar, Apache Kafka or InLong TubeMQ as your MessageQueue service:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If using Pulsar, the configuration file is ",(0,r.yg)("inlineCode",{parentName:"li"},"conf/audit-proxy-pulsar.conf"),". Change the Pulsar Topic info.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"agent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit\nagent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If using Kafka, the configuration file is ",(0,r.yg)("inlineCode",{parentName:"li"},"conf/audit-proxy-kafka.conf"),". Change the Kafka Topic info.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"agent1.sinks.kafka-sink-msg1.topic = inlong-audit\nagent1.sinks.kafka-sink-msg2.topic = inlong-audit\n")),(0,r.yg)("h3",{id:"start"},"Start"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"# By default, pulsar is used as the MessageQueue, and the audit-proxy-pulsar.conf configuration file is loaded.\nbash +x ./bin/proxy-start.sh [pulsar\uff5ckafka]\n")),(0,r.yg)("p",null,"The default listen port is ",(0,r.yg)("inlineCode",{parentName:"p"},"10081"),"."),(0,r.yg)("h2",{id:"audit-store"},"Audit Store"),(0,r.yg)("h3",{id:"configure"},"Configure"),(0,r.yg)("p",null,"The configuration file is ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/application.properties"),". "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"# the MQ type for audit proxy: pulsar / kafka\naudit.config.proxy.type=pulsar\n\n# manger config\nmanager.hosts=127.0.0.1:8083\n\n# Get Kafka or Pulsar address from the cluster tag\ndefault.mq.cluster.tag=default_cluster\n\n# pulsar config\naudit.pulsar.topic=persistent://public/default/inlong-audit\naudit.pulsar.consumer.sub.name=inlong-audit-subscription\naudit.pulsar.token=\naudit.pulsar.enable.auth=false\n\n# kafka config\naudit.kafka.topic=inlong-audit\naudit.kafka.topic.numPartitions=3\naudit.kafka.topic.replicationFactor=2\naudit.kafka.consumer.name=inlong-audit-consumer\naudit.kafka.group.id=audit-consumer-group\n\n# Generic jdbc storage\njdbc.driver=com.mysql.cj.jdbc.Driver\njdbc.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL\njdbc.username=root\njdbc.password=inlong\n")),(0,r.yg)("h3",{id:"dependencies"},"Dependencies"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If the backend database is MySQL, please download ",(0,r.yg)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar"},"mysql-connector-java-8.0.28.jar")," and put it into ",(0,r.yg)("inlineCode",{parentName:"p"},"lib/")," directory.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If the backend database is PostgreSQL, there's no need for additional dependencies."))),(0,r.yg)("h3",{id:"start-1"},"Start"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"bash +x ./bin/store-start.sh\n")),(0,r.yg)("h2",{id:"audit-service"},"Audit Service"),(0,r.yg)("h3",{id:"configure-1"},"Configure"),(0,r.yg)("p",null,"The configuration file is ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/audit-service.properties")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"mysql.jdbc.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useUnicode=true&rewriteBatchedStatements=true\nmysql.username=root\nmysql.password=inlong\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"(optional) Configure Audit Data Sources\nIn the audit_source_config table used by the Audit Service, configure the data source for audit storage. By default, the same MySQL configuration is used as the Audit Service")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"(optional) Configure Audit Items\nIn the audit_id_config table used by the Audit Service, configure the audit items that need to be cached. By default, Agent is used to receive successfully, Agent is sent successfully, DataProxy is received successfully, and DataProxy is sent successfully."))),(0,r.yg)("h3",{id:"dependencies-1"},"Dependencies"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If the backend database is MySQL, please download ",(0,r.yg)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar"},"mysql-connector-java-8.0.28.jar")," and put it into ",(0,r.yg)("inlineCode",{parentName:"li"},"lib/")," directory."),(0,r.yg)("li",{parentName:"ul"},"If the backend database is PostgreSQL, there's no need for additional dependencies.")),(0,r.yg)("h3",{id:"start-2"},"Start"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"bash +x ./bin/service-start.sh\n")),(0,r.yg)("p",null,"The default listen port is ",(0,r.yg)("inlineCode",{parentName:"p"},"10080"),"."))}p.isMDXComponent=!0}}]);