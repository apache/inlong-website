"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[32317],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||i;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15743:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const i={title:"Deployment",sidebar_position:2},o=void 0,l={unversionedId:"modules/manager/deployment",id:"version-2.0.0/modules/manager/deployment",title:"Deployment",description:"Environment Requirements",source:"@site/versioned_docs/version-2.0.0/modules/manager/deployment.md",sourceDirName:"modules/manager",slug:"/modules/manager/deployment",permalink:"/docs/modules/manager/deployment",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/modules/manager/deployment.md",tags:[],version:"2.0.0",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/manager/overview"},next:{title:"Configuration",permalink:"/docs/modules/manager/configure"}},s={},p=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Add Dependencies",id:"add-dependencies",level:2},{value:"Update Configuration",id:"update-configuration",level:2},{value:"Configure the Flink Plugin",id:"configure-the-flink-plugin",level:2},{value:"Start Service",id:"start-service",level:2},{value:"Cluster Initialize",id:"cluster-initialize",level:2},{value:"Create Cluster Tag",id:"create-cluster-tag",level:3},{value:"Register MQ Cluster",id:"register-mq-cluster",level:3},{value:"(Optional) Enable OpenAPI Authentication",id:"optional-enable-openapi-authentication",level:2},{value:"Enable Authentication",id:"enable-authentication",level:3},{value:"Authentication Configuration",id:"authentication-configuration",level:3},{value:"Authentication Key Generation",id:"authentication-key-generation",level:3}],u={toc:p},c="wrapper";function g(e){let{components:n,...i}=e;return(0,r.yg)(c,(0,a.A)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Install and start MySQL 5.7+")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"initialize database\nthere is ",(0,r.yg)("inlineCode",{parentName:"p"},"sql/apache_inlong_manager.sql")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"inlong-manager")," directory, load this file through the\nfollowing command to complete the initialization of the table structure and basic data"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# initialize database\uff1a\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_manager.sql\n")))),(0,r.yg)("h2",{id:"add-dependencies"},"Add Dependencies"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Download Sort ",(0,r.yg)("a",{parentName:"li",href:"https://inlong.apache.org/download"},"Connector Binary file"),", and unzip it into ",(0,r.yg)("inlineCode",{parentName:"li"},"inlong-sort/connectors")," directory."),(0,r.yg)("li",{parentName:"ul"},"If using MySQL database, please download ",(0,r.yg)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar"},"mysql-connector-java-8.0.28.jar")," and put it in the ",(0,r.yg)("inlineCode",{parentName:"li"},"lib/")," directory."),(0,r.yg)("li",{parentName:"ul"},"If you use PostgreSQL database, you don't need to download additional dependencies.")),(0,r.yg)("h2",{id:"update-configuration"},"Update Configuration"),(0,r.yg)("p",null,"Go to the decompressed ",(0,r.yg)("inlineCode",{parentName:"p"},"inlong-manager")," directory and modify the ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/application.properties")," file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"# manager service port number\nserver.port=8083\n\n# The configuration file used is dev\nspring.profiles.active=dev\n")),(0,r.yg)("p",null,"The dev configuration is specified above, then modify the configurations in ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/application-dev.properties")," file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"# database configuration\nspring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n# Audit Proxy Address\nmetrics.audit.proxy.hosts=127.0.0.1:10081\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If test or prod is specified, modify the corresponding application-test.properties or application-prod.properties file.")),(0,r.yg)("h2",{id:"configure-the-flink-plugin"},"Configure the Flink Plugin"),(0,r.yg)("p",null,"The InLong Manager can start the Sort task, you need to configure the Flink environment first. The configuration file is ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins/flink-sort-plugin.properties"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"# Flink version, support [1.13|1.15]\nflink.version=1.13\n# Flink host split by coma if more than one host, such as 'host1,host2'\nflink.rest.address=127.0.0.1\n# Flink port\nflink.rest.port=8081\n# Flink job manager port\nflink.jobmanager.port=6123\n")),(0,r.yg)("h2",{id:"start-service"},"Start Service"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bash +x bin/startup.sh\n")),(0,r.yg)("h2",{id:"cluster-initialize"},"Cluster Initialize"),(0,r.yg)("p",null,"When all containers are successfully started, you can access the Inlong dashboard address ",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost"),", and use the following default account to log in:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,r.yg)("h3",{id:"create-cluster-tag"},"Create Cluster Tag"),(0,r.yg)("p",null,"Click ","[Clusters]","->","[ClusterTags]","->","[Create]"," on the page to specify the cluster label name and person in charge:\n",(0,r.yg)("img",{src:t(10374).A,width:"515",height:"328"})),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Since each component reports the ClusterTags as ",(0,r.yg)("inlineCode",{parentName:"p"},"default_cluster")," by default, do not use other names.")),(0,r.yg)("h3",{id:"register-mq-cluster"},"Register MQ Cluster"),(0,r.yg)("p",null,"You could only Register the MQ type you chose."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Option 1: Register Pulsar Cluster\nClick ","[Clusters]","->","[Clusters]","->","[Create]"," on the page to register Pulsar Cluster:\n",(0,r.yg)("img",{src:t(31809).A,width:"517",height:"564"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Option 2: Register TubeMQ Cluster\nClick ","[Clusters]","->","[Clusters]","->","[Create]"," on the page to register TubeMQ Cluster:\n",(0,r.yg)("img",{src:t(41729).A,width:"518",height:"464"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Option 3: Register Kafka Cluster\nClick ","[Clusters]","->","[Clusters]","->","[Create]"," on the page to register TubeMQ Cluster:\n",(0,r.yg)("img",{src:t(3331).A,width:"646",height:"609"})))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The ClusterTags selects the newly created ",(0,r.yg)("inlineCode",{parentName:"p"},"default_cluster"),", and then configuring the MQ cluster info.")),(0,r.yg)("h2",{id:"optional-enable-openapi-authentication"},"(Optional) Enable OpenAPI Authentication"),(0,r.yg)("h3",{id:"enable-authentication"},"Enable Authentication"),(0,r.yg)("p",null,"Manager supports the option to authenticate client component access to its open APIs. To enable authentication modify ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/application.properties"),"\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"# Manager open api authentication enabled\nopenapi.auth.enabled=true\n")),(0,r.yg)("h3",{id:"authentication-configuration"},"Authentication Configuration"),(0,r.yg)("p",null,"Components that access manager must be authenticated by secret id and secret key if enabled, for example (please configure user's own instead of the example) :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Modify ",(0,r.yg)("inlineCode",{parentName:"li"},"agent.properties")," in agent's conf directory:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"agent.manager.auth.secretId=admin\nagent.manager.auth.secretKey=87haw3VYTPqK5fK0\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Modify ",(0,r.yg)("inlineCode",{parentName:"li"},"common.properties")," in dataproxy's conf directory:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"manager.auth.secretId=admin\nmanager.auth.secretKey=87haw3VYTPqK5fK0\n")),(0,r.yg)("h3",{id:"authentication-key-generation"},"Authentication Key Generation"),(0,r.yg)("p",null,"Admin user can log in InLong Dashboard to allocate secret ids and keys: ",(0,r.yg)("strong",{parentName:"p"},"System->User->Create"),"."))}g.isMDXComponent=!0},10374:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/create_cluster_tag-6a90b8b65f0e4d3259bbed710a5d50ef.png"},3331:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/kafka_cluster_save-632ec9cd643d274f9621e2275a7bc13c.png"},31809:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/pulsar_cluster_save-d4ad1df3102d20dde714cb9a703a498b.png"},41729:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/tube_cluster_save-9aa455895f5cd7aa5d3473fe6dab82f1.png"}}]);