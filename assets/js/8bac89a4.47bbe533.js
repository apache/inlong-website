"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[14607],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>y});var n=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=l,y=d["".concat(o,".").concat(g)]||d[g]||p[g]||r;return t?n.createElement(y,i(i({ref:a},u),{},{components:t})):n.createElement(y,i({ref:a},u))}));function y(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=g;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[d]="string"==typeof e?e:l,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1983:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(58168),l=(t(96540),t(15680));const r={title:"Pulsar to MySQL Example",sidebar_position:1},i=void 0,s={unversionedId:"quick_start/offline_data_sync/pulsar_mysql_example",id:"quick_start/offline_data_sync/pulsar_mysql_example",title:"Pulsar to MySQL Example",description:"In the following content, we will introduce how to use Apache InLong to create offline data synchronization from Pulsar to MySQL through a complete example.",source:"@site/docs/quick_start/offline_data_sync/pulsar_mysql_example.md",sourceDirName:"quick_start/offline_data_sync",slug:"/quick_start/offline_data_sync/pulsar_mysql_example",permalink:"/docs/next/quick_start/offline_data_sync/pulsar_mysql_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/quick_start/offline_data_sync/pulsar_mysql_example.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Pulsar to MySQL Example",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pulsar to ClickHouse Example",permalink:"/docs/next/quick_start/data_sync/pulsar_clickhouse_example"},next:{title:"HTTP Report Example",permalink:"/docs/next/quick_start/data_http_report/http_report"}},o={},c=[{value:"Deployment",id:"deployment",level:2},{value:"Install InLong",id:"install-inlong",level:3},{value:"Add Connectors",id:"add-connectors",level:3},{value:"Install Pulsar",id:"install-pulsar",level:3},{value:"Cluster Initialize",id:"cluster-initialize",level:2},{value:"Create Cluster Tag",id:"create-cluster-tag",level:3},{value:"Register Pulsar Cluster",id:"register-pulsar-cluster",level:3},{value:"Task Creation",id:"task-creation",level:2},{value:"Create Data Stream Group",id:"create-data-stream-group",level:3},{value:"Configuration Scheduling Rules",id:"configuration-scheduling-rules",level:3},{value:"Create Data Source",id:"create-data-source",level:3},{value:"Create Data Sink",id:"create-data-sink",level:3},{value:"Configure source and sink fields",id:"configure-source-and-sink-fields",level:3},{value:"Approval data flow",id:"approval-data-flow",level:3},{value:"Test Data",id:"test-data",level:2},{value:"Sending Data",id:"sending-data",level:3},{value:"Data Validation",id:"data-validation",level:3}],u={toc:c},d="wrapper";function p(e){let{components:a,...r}=e;return(0,l.yg)(d,(0,n.A)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"In the following content, we will introduce how to use Apache InLong to create offline data synchronization from Pulsar to MySQL through a complete example."),(0,l.yg)("h2",{id:"deployment"},"Deployment"),(0,l.yg)("h3",{id:"install-inlong"},"Install InLong"),(0,l.yg)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/next/deployment/docker"},"Docker Deployment")," (Recommended)"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/next/deployment/bare_metal"},"Bare Metal Deployment"))),(0,l.yg)("h3",{id:"add-connectors"},"Add Connectors"),(0,l.yg)("p",null,"Download the ",(0,l.yg)("a",{parentName:"p",href:"https://inlong.apache.org/downloads/"},"connectors")," corresponding to Flink version, and after decompression, place ",(0,l.yg)("inlineCode",{parentName:"p"},"sort-connector-jdbc-[version]-SNAPSHOT.jar")," in ",(0,l.yg)("inlineCode",{parentName:"p"},"/inlong-sort/connectors/")," directory."),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Currently, Apache InLong's offline data synchronization capability only supports Flink-1.18, so please download the 1.18 version of connectors.")),(0,l.yg)("h3",{id:"install-pulsar"},"Install Pulsar"),(0,l.yg)("p",null,"First, download the binary release package of Pulsar (the version can be modified as needed):"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"}," wget https://archive.apache.org/dist/pulsar/pulsar-3.3.1/apache-pulsar-3.3.1-bin.tar.gz\n")),(0,l.yg)("p",null,"Then, unzip it:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"}," tar xvfz apache-pulsar-3.3.1-bin.tar.gz\n")),(0,l.yg)("p",null,"Navigate to the Pulsar directory:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"}," cd apache-pulsar-3.3.1\n")),(0,l.yg)("p",null,"Quickly start a Pulsar cluster in Standalone mode:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"}," sh bin/pulsar-daemon start standalone\n")),(0,l.yg)("p",null,"After starting, the Pulsar cluster will have\uff1a "),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"adminUrl")," as http://localhost:8080 "),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"serviceUrl")," as pulsar://localhost:6650")),(0,l.yg)("p",null,"You can manage the cluster through ",(0,l.yg)("inlineCode",{parentName:"p"},"adminUrl")," and produce and consume data via ",(0,l.yg)("inlineCode",{parentName:"p"},"serviceUrl"),"."),(0,l.yg)("h2",{id:"cluster-initialize"},"Cluster Initialize"),(0,l.yg)("p",null,"When all containers are successfully started, you can access the InLong dashboard address http://localhost, and use the following default account to log in."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,l.yg)("h3",{id:"create-cluster-tag"},"Create Cluster Tag"),(0,l.yg)("p",null,"Click ","[Clusters]"," -> ","[ClusterTags]"," -> ","[Create]"," on the page to specify the cluster label name and person in charge."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Cluster Tag",src:t(32824).A,width:"532",height:"373"})),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"caution: ",(0,l.yg)("inlineCode",{parentName:"strong"},"default_cluster")," is the default ClusterTags for each component. If you decide to use a different name, make sure to update the corresponding tag configuration accordingly.")),(0,l.yg)("h3",{id:"register-pulsar-cluster"},"Register Pulsar Cluster"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Pulsar",src:t(79468).A,width:"646",height:"800"})),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"You can refer to the screenshot information to fill in details such as cluster name, associated tag, and Pulsar cluster address.")),(0,l.yg)("h2",{id:"task-creation"},"Task Creation"),(0,l.yg)("h3",{id:"create-data-stream-group"},"Create Data Stream Group"),(0,l.yg)("p",null,"Click on ","[Synchronization]","\u2192","[Create]",", fill in the Group ID, and ensure the ","[Sync Type]",' is checked as "Offline".'),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Offline Group",src:t(127).A,width:"2178",height:"523"})),(0,l.yg)("h3",{id:"configuration-scheduling-rules"},"Configuration Scheduling Rules"),(0,l.yg)("p",null,'After selecting "offline" for ',"[Sync Type]",", you can configure the ","[Scheduling Rules]"," for offline tasks. Currently, two types are supported: Conventional and Crontab."),(0,l.yg)("p",null,"Conventional Scheduling Configuration requires the following parameters:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Scheduling Unit: Supports minutes, hours, days, months, years, and single execution (single execution means it will run only once)."),(0,l.yg)("li",{parentName:"ul"},"Scheduling Interval: Indicates the time interval between two task schedules."),(0,l.yg)("li",{parentName:"ul"},"Delay Time: Indicates the delay time for task startup."),(0,l.yg)("li",{parentName:"ul"},"Valid Time: Includes start time and end time; the scheduled task will only execute within this time range.")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Conventional Schedule Rule",src:t(48229).A,width:"1333",height:"765"})),(0,l.yg)("p",null,"Crontab Scheduling requires the following parameters:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Valid Time: Includes start time and end time; the scheduled task will only execute within this time range."),(0,l.yg)("li",{parentName:"ul"},"Crontab Expression: Indicates the task cycle, e.g., ",(0,l.yg)("inlineCode",{parentName:"li"},"0 */5 * * * ?"))),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Cron Schedule Rule",src:t(59863).A,width:"943",height:"230"})),(0,l.yg)("h3",{id:"create-data-source"},"Create Data Source"),(0,l.yg)("p",null,"In the data source section, click ","[Create]"," \u2192 ","[Pulsar]",", and configure the data source name, Pulsar tenant, namespace, topic, admin URL, service URL, data format, and other parameters."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Source",src:t(60960).A,width:"661",height:"790"})),(0,l.yg)("p",null,"Note: The Pulsar topic needs to be created in the Pulsar cluster in advance (or enable the automatic topic creation feature in the Pulsar cluster)."),(0,l.yg)("h3",{id:"create-data-sink"},"Create Data Sink"),(0,l.yg)("p",null,"Create the target MySQL table; the example SQL is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sink_table (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n")),(0,l.yg)("p",null,"In the data sink section, click ","[Create]"," \u2192 ","[MySQL]",", and configure the data sink name, database name, and table name (test.source_table), among other information."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Sink",src:t(27190).A,width:"1253",height:"440"})),(0,l.yg)("h3",{id:"configure-source-and-sink-fields"},"Configure source and sink fields"),(0,l.yg)("p",null,"Configure schema mapping information in the ","[Source fields]"," and ","[Sink fields]"," sections, and click ","[Submit]"," for approval."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Source Fields",src:t(75614).A,width:"989",height:"431"})),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create Sink Fields",src:t(88588).A,width:"994",height:"454"})),(0,l.yg)("h3",{id:"approval-data-flow"},"Approval data flow"),(0,l.yg)("p",null,"On the page, click ","[Approval]"," -> ","[My Approvals]"," -> ","[Approve]"," \u2192 ","[OK]","."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Approve",src:t(93820).A,width:"1433",height:"262"})),(0,l.yg)("p",null,"Return to the ","[Synchronization]"," page and wait for the task configuration to succeed. Once configured successfully, the Manager will periodically submit Flink Batch Jobs to the Flink cluster."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Flink Batch Job",src:t(38440).A,width:"2004",height:"899"})),(0,l.yg)("h2",{id:"test-data"},"Test Data"),(0,l.yg)("h3",{id:"sending-data"},"Sending Data"),(0,l.yg)("p",null,"Use the Pulsar SDK to produce data into the Pulsar topic. An example is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'        // Create Pulsar client and producer\n        PulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\n        Producer<byte[]> producer = pulsarClient.newProducer().topic("public/default/test").create();\n\n        // Send messages\n        for (int i = 0; i < 10000; i++) {\n            // Field separator is |\n            String msgStr = i + "|msg-" + i;\n            MessageId msgId = producer.send(msgStr.getBytes(StandardCharsets.UTF_8));\n            System.out.println("Send msg : " + msgStr + " with msgId: " + msgId);\n        }\n')),(0,l.yg)("h3",{id:"data-validation"},"Data Validation"),(0,l.yg)("p",null,"Then enter MySQL to check the data in the table:"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Mysql Sink",src:t(25667).A,width:"1888",height:"843"})))}p.isMDXComponent=!0},93820:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/approve-df5652bcf8b8a6be0f0a06d5505642ce.png"},32824:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/cluster_tag-83079ba435eef25964075381c405c176.png"},48229:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/conventional_schedule-174ae248750a34c8217243a0cd7b0720.png"},127:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create_offline_group-0b6e4f126250ec725176e220fb3ca14f.png"},79468:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create_pulsar_cluster-57792270c123117d0c57f3bc008bcd40.png"},59863:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/cron_schedule-a5298f164520bd3f89085b62b9a86782.png"},38440:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/flink_batch_job-3c43268ddc1a0b01d1043ae9e35988f8.png"},25667:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/mysql_sink-d56aab2c9a552340d833d317b906fafe.png"},27190:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/sink-66d5c786774e403520a0a7a144304996.png"},88588:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/sink_fields-eeb60094320b80086b351fac02b3bf97.png"},60960:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/source-399506626544282d2d3e329546f09cc7.png"},75614:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/source_fields-0bc32dc5375052e18e18ffbaefdd5c12.png"}}]);