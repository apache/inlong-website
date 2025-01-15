"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[71413],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>h});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=l,h=d["".concat(o,".").concat(p)]||d[p]||g[p]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:l,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(58168),l=(n(96540),n(15680));const i={title:"Quartz Scheduling Engine Example",sidebar_position:1},r=void 0,s={unversionedId:"quick_start/offline_data_sync/quartz_example",id:"version-2.1.0/quick_start/offline_data_sync/quartz_example",title:"Quartz Scheduling Engine Example",description:"In the following sections, we will walk through a complete example to demonstrate how to use Apache InLong's built-in scheduling engine (Quartz) to create an offline data synchronization from Pulsar to MySQL.",source:"@site/versioned_docs/version-2.1.0/quick_start/offline_data_sync/quartz_example.md",sourceDirName:"quick_start/offline_data_sync",slug:"/quick_start/offline_data_sync/quartz_example",permalink:"/docs/quick_start/offline_data_sync/quartz_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.1.0/quick_start/offline_data_sync/quartz_example.md",tags:[],version:"2.1.0",sidebarPosition:1,frontMatter:{title:"Quartz Scheduling Engine Example",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pulsar to ClickHouse Example",permalink:"/docs/quick_start/realtime_data_sync/pulsar_clickhouse_example"},next:{title:"DolphinScheduler Scheduling Engine Example",permalink:"/docs/quick_start/offline_data_sync/dolphinscheduler_example"}},o={},c=[{value:"Deployment",id:"deployment",level:2},{value:"Install InLong",id:"install-inlong",level:3},{value:"Add Connectors",id:"add-connectors",level:3},{value:"Cluster Initialize",id:"cluster-initialize",level:2},{value:"Create Cluster Tag",id:"create-cluster-tag",level:3},{value:"Register Pulsar Cluster",id:"register-pulsar-cluster",level:3},{value:"Task Creation",id:"task-creation",level:2},{value:"Create Data Stream Group",id:"create-data-stream-group",level:3},{value:"Configuration Scheduling Rules",id:"configuration-scheduling-rules",level:3},{value:"Scheduling Engine",id:"scheduling-engine",level:4},{value:"Schedule Type",id:"schedule-type",level:4},{value:"Create Data Source",id:"create-data-source",level:3},{value:"Create Data Sink",id:"create-data-sink",level:3},{value:"Configure source and sink fields",id:"configure-source-and-sink-fields",level:3},{value:"Approval data flow",id:"approval-data-flow",level:3},{value:"Test Data",id:"test-data",level:2},{value:"Sending Data",id:"sending-data",level:3},{value:"Data Validation",id:"data-validation",level:3}],u={toc:c},d="wrapper";function g(e){let{components:t,...i}=e;return(0,l.yg)(d,(0,a.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"In the following sections, we will walk through a complete example to demonstrate how to use Apache InLong's built-in scheduling engine (Quartz) to create an offline data synchronization from Pulsar to MySQL."),(0,l.yg)("h2",{id:"deployment"},"Deployment"),(0,l.yg)("h3",{id:"install-inlong"},"Install InLong"),(0,l.yg)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/deployment/docker"},"Docker Deployment")," (Recommended)"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/deployment/bare_metal"},"Bare Metal Deployment"))),(0,l.yg)("h3",{id:"add-connectors"},"Add Connectors"),(0,l.yg)("p",null,"Download the ",(0,l.yg)("a",{parentName:"p",href:"https://inlong.apache.org/downloads/"},"connectors")," corresponding to Flink version, and after decompression, place ",(0,l.yg)("inlineCode",{parentName:"p"},"sort-connector-jdbc-[version]-SNAPSHOT.jar")," in ",(0,l.yg)("inlineCode",{parentName:"p"},"/inlong-sort/connectors/")," directory."),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Currently, Apache InLong's offline data synchronization capability only supports Flink-1.18, so please download the 1.18 version of connectors.")),(0,l.yg)("h2",{id:"cluster-initialize"},"Cluster Initialize"),(0,l.yg)("p",null,"When all containers are successfully started, you can access the InLong dashboard address ",(0,l.yg)("inlineCode",{parentName:"p"},"http://localhost"),", and use the following default account to log in."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,l.yg)("h3",{id:"create-cluster-tag"},"Create Cluster Tag"),(0,l.yg)("p",null,"Click ","[Clusters]"," -> ","[ClusterTags]"," -> ","[Create]"," on the page to specify the cluster label name and person in charge."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Cluster Tag",src:n(24267).A,width:"510",height:"358"})),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"caution: ",(0,l.yg)("inlineCode",{parentName:"strong"},"default_cluster")," is the default ClusterTags for each component. If you decide to use a different name, make sure to update the corresponding tag configuration accordingly.")),(0,l.yg)("h3",{id:"register-pulsar-cluster"},"Register Pulsar Cluster"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Pulsar",src:n(95043).A,width:"646",height:"800"})),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"You can refer to the screenshot information to fill in details such as cluster name, associated tag, and Pulsar cluster address.")),(0,l.yg)("h2",{id:"task-creation"},"Task Creation"),(0,l.yg)("h3",{id:"create-data-stream-group"},"Create Data Stream Group"),(0,l.yg)("p",null,"Click on ","[Synchronization]","\u2192","[Create]",", fill in the Group ID, and ensure the ","[Sync Type]",' is checked as "Offline".'),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Offline Group",src:n(64002).A,width:"792",height:"479"})),(0,l.yg)("h3",{id:"configuration-scheduling-rules"},"Configuration Scheduling Rules"),(0,l.yg)("p",null,'After selecting "offline" for ',"[Sync Type]",", you can configure the ","[Scheduling Rules]"," for offline tasks. Scheduling Rules include two parts: ","[Scheduling Engine]"," and ","[Scheduling Type]","."),(0,l.yg)("h4",{id:"scheduling-engine"},"Scheduling Engine"),(0,l.yg)("p",null,"Apache InLong provide several scheduling engines for users to choose from, Quartz is a build-in schedule engine in Apache InLong. Here we use quartz to handle tasks."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Schedule Engine Type",src:n(10121).A,width:"1394",height:"358"})),(0,l.yg)("h4",{id:"schedule-type"},"Schedule Type"),(0,l.yg)("p",null,"Apache InLong supports two scheduling types currently: Conventional and Crontab."),(0,l.yg)("p",null,"Conventional Scheduling Configuration requires the following parameters:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Scheduling Unit: Supports minutes, hours, days, months, years, and single execution (single execution means it will run only once)."),(0,l.yg)("li",{parentName:"ul"},"Scheduling Interval: Indicates the time interval between two task schedules."),(0,l.yg)("li",{parentName:"ul"},"Delay Time: Indicates the delay time for task startup."),(0,l.yg)("li",{parentName:"ul"},"Valid Time: Includes start time and end time; the scheduled task will only execute within this time range.")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Conventional Schedule Rule",src:n(35562).A,width:"817",height:"756"})),(0,l.yg)("p",null,"Crontab Scheduling requires the following parameters:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Valid Time: Includes start time and end time; the scheduled task will only execute within this time range."),(0,l.yg)("li",{parentName:"ul"},"Crontab Expression: Indicates the task cycle, e.g. ",(0,l.yg)("inlineCode",{parentName:"li"},"0 */5 * * * ?"))),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Cron Schedule Rule",src:n(95328).A,width:"943",height:"230"})),(0,l.yg)("h3",{id:"create-data-source"},"Create Data Source"),(0,l.yg)("p",null,"In the data source section, click ","[Create]"," \u2192 ","[Pulsar]",", and configure the data source name, Pulsar tenant, namespace, topic, admin URL, service URL, data format, and other parameters."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Source",src:n(8645).A,width:"661",height:"790"})),(0,l.yg)("p",null,"Note: The Pulsar topic needs to be created in the Pulsar cluster in advance (or enable the automatic topic creation feature in the Pulsar cluster)."),(0,l.yg)("h3",{id:"create-data-sink"},"Create Data Sink"),(0,l.yg)("p",null,"Create the target MySQL table; the example SQL is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sink_table (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n")),(0,l.yg)("p",null,"In the data sink section, click ","[Create]"," \u2192 ","[MySQL]",", and configure the data sink name, database name, and table name (test.sink_table), among other information."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Sink",src:n(6915).A,width:"1253",height:"440"})),(0,l.yg)("h3",{id:"configure-source-and-sink-fields"},"Configure source and sink fields"),(0,l.yg)("p",null,"Configure schema mapping information in the ","[Source fields]"," and ","[Sink fields]"," sections, and click ","[Submit]"," for approval."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Source Fields",src:n(19505).A,width:"989",height:"431"})),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Sink Fields",src:n(61879).A,width:"994",height:"454"})),(0,l.yg)("h3",{id:"approval-data-flow"},"Approval data flow"),(0,l.yg)("p",null,"On the page, click ","[Approval]"," -> ","[My Approvals]"," -> ","[Approve]"," \u2192 ","[OK]","."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Approve",src:n(66543).A,width:"1433",height:"262"})),(0,l.yg)("p",null,"Return to the ","[Synchronization]"," page and wait for the task configuration to succeed. Once configured successfully, the Manager will periodically submit Flink Batch Jobs to the Flink cluster."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Flink Batch Job",src:n(24439).A,width:"2004",height:"899"})),(0,l.yg)("h2",{id:"test-data"},"Test Data"),(0,l.yg)("h3",{id:"sending-data"},"Sending Data"),(0,l.yg)("p",null,"Use the Pulsar SDK to produce data into the Pulsar topic. An example is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'        // Create Pulsar client and producer\n        PulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\n        Producer<byte[]> producer = pulsarClient.newProducer().topic("public/default/test").create();\n\n        // Send messages\n        for (int i = 0; i < 10000; i++) {\n            // Field separator is |\n            String msgStr = i + "|msg-" + i;\n            MessageId msgId = producer.send(msgStr.getBytes(StandardCharsets.UTF_8));\n            System.out.println("Send msg : " + msgStr + " with msgId: " + msgId);\n        }\n')),(0,l.yg)("h3",{id:"data-validation"},"Data Validation"),(0,l.yg)("p",null,"Then enter MySQL to check the data in the table:"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Mysql Sink",src:n(37466).A,width:"1888",height:"843"})))}g.isMDXComponent=!0},66543:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/approve-df5652bcf8b8a6be0f0a06d5505642ce.png"},24267:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cluster_tag-c1b567f4e70a4ae122cefc45d4eb6b8c.png"},35562:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/conventional_schedule-96ca9b1ba617a975d03348df090cef4e.png"},64002:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/create_offline_group-32c58735831cf3769aff851823eca86c.png"},95043:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/create_pulsar_cluster-57792270c123117d0c57f3bc008bcd40.png"},95328:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cron_schedule-a5298f164520bd3f89085b62b9a86782.png"},24439:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/flink_batch_job-3c43268ddc1a0b01d1043ae9e35988f8.png"},37466:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/mysql_sink-d56aab2c9a552340d833d317b906fafe.png"},10121:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/schedule_engine_type-28f081077b3ab2c3019474713734e17d.png"},6915:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sink-66d5c786774e403520a0a7a144304996.png"},61879:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sink_fields-eeb60094320b80086b351fac02b3bf97.png"},8645:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/source-399506626544282d2d3e329546f09cc7.png"},19505:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/source_fields-0bc32dc5375052e18e18ffbaefdd5c12.png"}}]);