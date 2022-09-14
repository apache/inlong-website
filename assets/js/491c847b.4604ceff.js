"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[23089],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(a),m=r,c=u["".concat(d,".").concat(m)]||u[m]||g[m]||i;return a?n.createElement(c,l(l({ref:e},p),{},{components:a})):n.createElement(c,l({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37873:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"InLong Introduction",sidebar_position:1},l=void 0,o={unversionedId:"introduction",id:"version-1.2.0/introduction",title:"InLong Introduction",description:"InLong (\u5e94\u9f99) is a divine beast in Chinese mythology who guides the river into the sea,",source:"@site/versioned_docs/version-1.2.0/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/1.2.0/introduction",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/introduction.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{title:"InLong Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Basic Concept",permalink:"/docs/1.2.0/design_and_concept/basic_concept"}},d={},s=[{value:"About InLong",id:"about-inlong",level:2},{value:"Features",id:"features",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Modules",id:"modules",level:2},{value:"Supported Data Nodes (Updating)",id:"supported-data-nodes-updating",level:2}],p={toc:s};function g(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"InLong (\u5e94\u9f99) is a divine beast in Chinese mythology who guides the river into the sea,\nand it is regarded as a metaphor of the InLong system for reporting data streams.")),(0,r.kt)("h2",{id:"about-inlong"},"About InLong"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org"},"Apache InLong")," is a one-stop integration framework for massive data ,it provides automatic, safe, reliable, and high-performance data transmission capabilities to\nfacilitate the construction of streaming-based data analysis, modeling, and applications. The Apache InLong project was originally called TubeMQ, focusing on high-performance,\nlow-cost message queuing services. To further release the surrounding ecological capabilities of TubeMQ, the community upgraded the project to InLong, focusing on creating a one-stop integration framework for massive data.\nApache InLong relies on 10 trillion-level data ingestion and processing capabilities to integrate the entire process of data collection, aggregation, storage, and sorting data processing. It is simple, flexible, stable, and reliable.\nThe project was initially donated to the Apache incubator by the Tencent Big Data team in November 2019 and officially graduated as an Apache top-level project in June 2022. Currently, InLong is widely used in various industries such as advertising,\npayment, social networking, games, artificial intelligence, etc., to provide efficient and convenient customer services in multiple fields."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ease of Use"),(0,r.kt)("p",{parentName:"li"},"InLong is a SaaS-based service platform. Users can easily and quickly report, transfer, and distribute data by publishing and subscribing to data based on topics.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stability & Reliability"),(0,r.kt)("p",{parentName:"li"},"InLong is derived from the actual online production environment. It delivers high-performance processing capabilities for 100 trillion-level data streams and highly reliable services for 100 billion-level data streams.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comprehensive Features"),(0,r.kt)("p",{parentName:"li"},"InLong supports various types of data access methods and can be integrated with different types of Message Queue (MQ). It also provides real-time data extract, transform, and load (ETL) and sorting capabilities based on rules. InLong also allows users to plug features to extend system capabilities.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Service Integration"),(0,r.kt)("p",{parentName:"li"},"InLong provides unified system monitoring and alert services. It provides fine-grained metrics to facilitate data visualization. Users can view the running status of queues and topic-based data statistics in a unified data metric platform. Users can also configure the alert service based on their business requirements so that users can be alerted when errors occur.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Scalability"),(0,r.kt)("p",{parentName:"li"},"InLong adopts a pluggable architecture that allows you to plug modules into the system based on specific protocols. Users can replace components and add features based on their business requirements."))),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("img",{src:"/img/inlong-structure-en.png",align:"center",alt:"Apache InLong"}),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,"Apache InLong serves the entire life cycle from data collection to landing,  and provides different processing modules according to different stages of data,  including the next modules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-agent"),",  data collection agent, supports reading regular logs from specified directories or files and reporting data one by one.  In the future,  DB collection capabilities will also be expanded."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-dataproxy"),",  a Proxy component based on Flume-ng,  supports data transmission blocking,  placing retransmission, and has the ability to forward received data to different MQ (message queues)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-tubemq"),",  Tencent's self-developed message queuing service,  focuses on high-performance storage and transmission of massive data in big data scenarios and has a relatively good core advantage in mass practice and low cost."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-sort"),",  after consuming data from different MQ services,  perform ETL processing,  and then aggregate and write the data into Apache Hive, ClickHouse,  Hbase,  IceBerg,  etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-manager"),", provides complete data service management and control capabilities,  including metadata,  OpenAPI,  task flow,  authority,  etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-dashboard"),", a front-end page for managing data access,  simplifying the use of the entire InLong control platform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-audit"),", performs real-time audit and reconciliation on the incoming and outgoing traffic of the Agent, DataProxy, and Sort modules of the InLong system.")),(0,r.kt)("h2",{id:"supported-data-nodes-updating"},"Supported Data Nodes (Updating)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Architecture"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Extract Node"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto Push"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,r.kt)("td",{parentName:"tr",align:null},"2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("td",{parentName:"tr",align:null},"5.6, 5.7, 8.0.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"MongoDB"),(0,r.kt)("td",{parentName:"tr",align:null},">= 3.6"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"11,12,19"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.kt)("td",{parentName:"tr",align:null},"9.6, 10, 11, 12"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar"),(0,r.kt)("td",{parentName:"tr",align:null},"2.8.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"SQLServer"),(0,r.kt)("td",{parentName:"tr",align:null},"2012, 2014, 2016, 2017, 2019"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Load Node"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto Consumption"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Hive"),(0,r.kt)("td",{parentName:"tr",align:null},"1.x, 2.x, 3.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Iceberg"),(0,r.kt)("td",{parentName:"tr",align:null},"0.12.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse"),(0,r.kt)("td",{parentName:"tr",align:null},"20.7+"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,r.kt)("td",{parentName:"tr",align:null},"2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"HBase"),(0,r.kt)("td",{parentName:"tr",align:null},"2.2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.kt)("td",{parentName:"tr",align:null},"9.6, 10, 11, 12"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"11, 12, 19"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("td",{parentName:"tr",align:null},"5.6, 5.7, 8.0.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"TDSQL-PostgreSQL"),(0,r.kt)("td",{parentName:"tr",align:null},"10.17"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Greenplum"),(0,r.kt)("td",{parentName:"tr",align:null},"4.x, 5.x, 6.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch"),(0,r.kt)("td",{parentName:"tr",align:null},"6.x, 7.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"SQLServer"),(0,r.kt)("td",{parentName:"tr",align:null},"2012, 2014, 2016, 2017, 2019"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"HDFS"),(0,r.kt)("td",{parentName:"tr",align:null},"2.x, 3.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")))))}g.isMDXComponent=!0}}]);