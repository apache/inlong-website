"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[12100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Deployment",sidebar_position:2},o=void 0,l={unversionedId:"modules/manager/quick_start",id:"version-1.7.0/modules/manager/quick_start",title:"Deployment",description:"Environment Requirements",source:"@site/versioned_docs/version-1.7.0/modules/manager/quick_start.md",sourceDirName:"modules/manager",slug:"/modules/manager/quick_start",permalink:"/docs/modules/manager/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.7.0/modules/manager/quick_start.md",tags:[],version:"1.7.0",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/manager/overview"},next:{title:"Configuration",permalink:"/docs/modules/manager/configure"}},s={},p=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Add Dependencies",id:"add-dependencies",level:2},{value:"Update Configuration",id:"update-configuration",level:2},{value:"Configure the Flink Plugin",id:"configure-the-flink-plugin",level:2},{value:"Start Application",id:"start-application",level:2},{value:"Cluster Initialize",id:"cluster-initialize",level:2},{value:"Create Cluster Tag",id:"create-cluster-tag",level:3},{value:"Register MQ Cluster",id:"register-mq-cluster",level:3},{value:"(Optional) Enable OpenAPI Authentication",id:"optional-enable-openapi-authentication",level:2},{value:"Enable Authentication",id:"enable-authentication",level:3},{value:"Authentication Configuration",id:"authentication-configuration",level:3},{value:"Authentication Key Generation",id:"authentication-key-generation",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install and start MySQL 5.7+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"initialize database\nthere is ",(0,r.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_manager.sql")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-manager")," directory, load this file through the\nfollowing command to complete the initialization of the table structure and basic data"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize database\uff1a\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_manager.sql\n")))),(0,r.kt)("h2",{id:"add-dependencies"},"Add Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download Sort ",(0,r.kt)("a",{parentName:"li",href:"https://inlong.apache.org/download/main"},"Connector Binary file"),", and unzip it into ",(0,r.kt)("inlineCode",{parentName:"li"},"inlong-sort/connectors")," directory."),(0,r.kt)("li",{parentName:"ul"},"If using MySQL database, please download ",(0,r.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar")," and put it in the ",(0,r.kt)("inlineCode",{parentName:"li"},"lib/")," directory."),(0,r.kt)("li",{parentName:"ul"},"If you use PostgreSQL database, you don't need to download additional dependencies.")),(0,r.kt)("h2",{id:"update-configuration"},"Update Configuration"),(0,r.kt)("p",null,"Go to the decompressed ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-manager")," directory and modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application.properties")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# manager service port number\nserver.port=8083\n\n# The configuration file used is dev\nspring.profiles.active=dev\n")),(0,r.kt)("p",null,"The dev configuration is specified above, then modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application-dev.properties")," file:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If test or prod is specified, modify the corresponding application-xxx.properties file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n")),(0,r.kt)("h2",{id:"configure-the-flink-plugin"},"Configure the Flink Plugin"),(0,r.kt)("p",null,"The InLong Manager can start the Sort task, you need to configure the Flink environment first. The configuration file is ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/flink-sort-plugin.properties"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# Flink host split by coma if more than one host, such as 'host1,host2'\nflink.rest.address=127.0.0.1\n# Flink port\nflink.rest.port=8081\n# Flink job manager port\nflink.jobmanager.port=6123\n# InLong Audit Proxy Address\nmetrics.audit.proxy.hosts=127.0.0.1:10081\n")),(0,r.kt)("h2",{id:"start-application"},"Start Application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bash +x bin/startup.sh\n")),(0,r.kt)("h2",{id:"cluster-initialize"},"Cluster Initialize"),(0,r.kt)("p",null,"When all containers are successfully started, you can access the Inlong dashboard address ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost"),", and use the following default account to log in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,r.kt)("h3",{id:"create-cluster-tag"},"Create Cluster Tag"),(0,r.kt)("p",null,"Click ","[Clusters]","->","[ClusterTags]","->","[Create]"," on the page to specify the cluster label name and person in charge:\n",(0,r.kt)("img",{src:n(24240).Z,width:"515",height:"328"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Since each component reports the ClusterTags as ",(0,r.kt)("inlineCode",{parentName:"p"},"default_cluster")," by default, do not use other names.")),(0,r.kt)("h3",{id:"register-mq-cluster"},"Register MQ Cluster"),(0,r.kt)("p",null,"You could only Register the MQ type you chose."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Option 1: Register Pulsar Cluster\nClick ","[Clusters]","->","[Clusters]","->","[Create]"," on the page to register Pulsar Cluster:\n",(0,r.kt)("img",{src:n(27641).Z,width:"517",height:"564"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Option 2: Register TubeMQ Cluster\nClick ","[Clusters]","->","[Clusters]","->","[Create]"," on the page to register TubeMQ Cluster:\n",(0,r.kt)("img",{src:n(87369).Z,width:"518",height:"464"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Option 3: Register Kafka Cluster\nClick ","[Clusters]","->","[Clusters]","->","[Create]"," on the page to register TubeMQ Cluster:\n",(0,r.kt)("img",{src:n(19191).Z,width:"646",height:"609"})))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ClusterTags selects the newly created ",(0,r.kt)("inlineCode",{parentName:"p"},"default_cluster"),", and then configuring the MQ cluster info.")),(0,r.kt)("h2",{id:"optional-enable-openapi-authentication"},"(Optional) Enable OpenAPI Authentication"),(0,r.kt)("h3",{id:"enable-authentication"},"Enable Authentication"),(0,r.kt)("p",null,"Manager supports the option to authenticate client component access to its open APIs. To enable authentication modify ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application.properties"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# Manager open api authentication enabled\nopenapi.auth.enabled=true\n")),(0,r.kt)("h3",{id:"authentication-configuration"},"Authentication Configuration"),(0,r.kt)("p",null,"Components that access manager must be authenticated by secret id and secret key if enabled, for example (please configure user's own instead of the example) :"),(0,r.kt)("p",null,"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"agent.properties")," in agent's conf directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"agent.manager.auth.secretId=admin\nagent.manager.auth.secretKey=87haw3VYTPqK5fK0\n")),(0,r.kt)("p",null,"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"common.properties")," in dataproxy's conf directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"manager.auth.secretId=admin\nmanager.auth.secretKey=87haw3VYTPqK5fK0\n")),(0,r.kt)("h3",{id:"authentication-key-generation"},"Authentication Key Generation"),(0,r.kt)("p",null,"Admin user can log in inlong dashboard to allocate secret ids and keys: ",(0,r.kt)("strong",{parentName:"p"},"System->User->Create"),"."))}d.isMDXComponent=!0},24240:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_cluster_tag-6a90b8b65f0e4d3259bbed710a5d50ef.png"},19191:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kafka_cluster_save-632ec9cd643d274f9621e2275a7bc13c.png"},27641:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pulsar_cluster_save-d4ad1df3102d20dde714cb9a703a498b.png"},87369:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tube_cluster_save-9aa455895f5cd7aa5d3473fe6dab82f1.png"}}]);