"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[87468],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||l;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},56309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const l={title:"Standalone",sidebar_position:1},o=void 0,i={unversionedId:"deployment/standalone",id:"version-1.9.0/deployment/standalone",title:"Standalone",description:"Environment Requirements",source:"@site/versioned_docs/version-1.9.0/deployment/standalone.md",sourceDirName:"deployment",slug:"/deployment/standalone",permalink:"/docs/1.9.0/deployment/standalone",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.9.0/deployment/standalone.md",tags:[],version:"1.9.0",sidebarPosition:1,frontMatter:{title:"Standalone",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Kafka Example",permalink:"/docs/1.9.0/quick_start/data_ingestion/mysql_kafka_clickhouse_example"},next:{title:"Docker",permalink:"/docs/1.9.0/deployment/docker"}},s={},c=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Prepare Message Queue",id:"prepare-message-queue",level:2},{value:"Download the Binary Package",id:"download-the-binary-package",level:2},{value:"DB Dependencies",id:"db-dependencies",level:2},{value:"Configure",id:"configure",level:2},{value:"Start",id:"start",level:2},{value:"Cluster Initialize",id:"cluster-initialize",level:2},{value:"Create Cluster Tag",id:"create-cluster-tag",level:3},{value:"Register Message Queue Cluster",id:"register-message-queue-cluster",level:3},{value:"Use",id:"use",level:2}],p={toc:c},u="wrapper";function g(e){let{components:n,...l}=e;return(0,r.yg)(u,(0,a.A)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"MySQL 5.7+"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/try-flink/local_installation/"},"Flink 1.13.5")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,r.yg)("li",{parentName:"ul"},"On Linux or Mac")),(0,r.yg)("h2",{id:"prepare-message-queue"},"Prepare Message Queue"),(0,r.yg)("p",null,"InLong Support the following Message Queue services now, ",(0,r.yg)("strong",{parentName:"p"},"you can choose one of them"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.9.0/modules/tubemq/quick_start"},"Apache InLong TubeMQ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/2.8.x/getting-started-home/"},"Apache Pulsar 2.8.x")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://kafka.apache.org/quickstart"},"Apache Kafka 2.x"))),(0,r.yg)("h2",{id:"download-the-binary-package"},"Download the Binary Package"),(0,r.yg)("p",null,"You can get binary package from ",(0,r.yg)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"Download Page")," ,or you can build the InLong refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.9.0/quick_start/how_to_build"},"How to Build"),"."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Extract ",(0,r.yg)("inlineCode",{parentName:"p"},"apache-inlong-[version]-bin.tar.gz")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"apache-inlong-[version]-sort-connectors.tar.gz"),", and make sure the ",(0,r.yg)("inlineCode",{parentName:"p"},"inlong-sort/connectors/")," directory contains ",(0,r.yg)("inlineCode",{parentName:"p"},"sort-connector-[type]-[version].jar"),".")),(0,r.yg)("h2",{id:"db-dependencies"},"DB Dependencies"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If the backend database is MySQL, please download ",(0,r.yg)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar"},"mysql-connector-java-8.0.28.jar")," and put it into the following directories:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"inlong-agent/lib/\ninlong-audit/lib/\ninlong-manager/lib/\ninlong-tubemq-manager/lib/\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If the backend database is PostgreSQL, there's no need for additional dependencies.")),(0,r.yg)("h2",{id:"configure"},"Configure"),(0,r.yg)("p",null,"In ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/inlong.conf"),", configure the parameters according to the actual situation, mainly include:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# local IP\nlocal_ip=\n# message queue: pulsar or kafka\nmq_type=pulsar\n# Configure Database, requires MySQL\nspring_datasource_hostname=\nspring_datasource_port=3306\nspring_datasource_username=root\nspring_datasource_password=inlong\n# the REST server address for Flink\nflink_rest_address=\n# the REST server Port for Flink\nflink_rest_port=8081\n")),(0,r.yg)("h2",{id:"start"},"Start"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bin/inlong-daemon start standalone\n")),(0,r.yg)("h2",{id:"cluster-initialize"},"Cluster Initialize"),(0,r.yg)("p",null,"When all containers are successfully started, you can access the Inlong dashboard address ",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost"),", and use the following default account to log in:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,r.yg)("h3",{id:"create-cluster-tag"},"Create Cluster Tag"),(0,r.yg)("p",null,"Click ","[Clusters]","->","[ClusterTags]","->","[Create]"," on the page to specify the cluster label name and person in charge:\n",(0,r.yg)("img",{src:t(18512).A,width:"515",height:"328"})),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Since each component reports the ClusterTags as ",(0,r.yg)("inlineCode",{parentName:"p"},"default_cluster")," by default, do not use other names.")),(0,r.yg)("h3",{id:"register-message-queue-cluster"},"Register Message Queue Cluster"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Option 1 : Apache Pulsar\nClick ","[Clusters]","->","[Clusters]","->","[Create]"," on the page to register Pulsar Cluster:\n",(0,r.yg)("img",{src:t(78455).A,width:"646",height:"800"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Option 2 : Apache Kafka\nClick ","[Clusters]","->","[Clusters]","->","[Create]"," on the page to register Kafka Cluster:\n",(0,r.yg)("img",{src:t(82934).A,width:"646",height:"609"})))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The ClusterTags selects the newly created ",(0,r.yg)("inlineCode",{parentName:"p"},"default_cluster"),", and then configuring the Message Queue cluster info.")),(0,r.yg)("h2",{id:"use"},"Use"),(0,r.yg)("p",null,"You can refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.9.0/quick_start/data_ingestion/file_pulsar_clickhouse_example"},"Example")," to create a Data Stream."))}g.isMDXComponent=!0},18512:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/create_cluster_tag-6a90b8b65f0e4d3259bbed710a5d50ef.png"},82934:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/create_kafka_cluster-632ec9cd643d274f9621e2275a7bc13c.png"},78455:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/create_pulsar_cluster-57792270c123117d0c57f3bc008bcd40.png"}}]);