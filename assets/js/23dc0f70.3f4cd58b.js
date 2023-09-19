"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[20766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Build && Deployment"},i="1. Environmental preparation",l={unversionedId:"modules/manager/quick_start",id:"version-0.11.0/modules/manager/quick_start",title:"Build && Deployment",description:"- Install and start MySQL 5.7+, copy the doc/sql/apacheinlongmanager.sql file in the inlong-manager module to the",source:"@site/versioned_docs/version-0.11.0/modules/manager/quick_start.md",sourceDirName:"modules/manager",slug:"/modules/manager/quick_start",permalink:"/docs/0.11.0/modules/manager/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.11.0/modules/manager/quick_start.md",tags:[],version:"0.11.0",frontMatter:{title:"Build && Deployment"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/0.11.0/modules/manager/architecture"},next:{title:"Build && Deployment",permalink:"/docs/0.11.0/modules/website/quick_start"}},s={},p=[{value:"2.1 Prepare installation files",id:"21-prepare-installation-files",level:2},{value:"2.2 Modify configuration",id:"22-modify-configuration",level:2},{value:"2.3 Start the service",id:"23-start-the-service",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-environmental-preparation"},"1. Environmental preparation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install and start MySQL 5.7+, copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/sql/apache_inlong_manager.sql")," file in the inlong-manager module to the\nserver where the MySQL database is located (for example, copy to ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/")," directory), load this file through the\nfollowing command to complete the initialization of the table structure and basic data:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Log in to the MySQL server by username and password:\nmysql -u xxx -p xxx\n...\n# Create database\nCREATE DATABASE IF NOT EXISTS apache_inlong_manager;\nUSE apache_inlong_manager;\n# Load the above SQL file through the source command:\nmysql> source /data/apache_inlong_manager.sql;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/zh-cn/docs/modules/tubemq/quick_start.html"},"Compile and deploy TubeMQ")," to install\nand start the Tube cluster;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Refer\nto ",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/zh-cn/docs/modules/tubemq/tubemq-manager/quick_start.html"},"Compile and deploy TubeMQ Manager"),"\n, install and start TubeManager."))),(0,r.kt)("h1",{id:"2-deploy-and-start-manager-web"},"2. Deploy and start manager-web"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"manager-web is a background service that interacts with the front-end page.")),(0,r.kt)("h2",{id:"21-prepare-installation-files"},"2.1 Prepare installation files"),(0,r.kt)("p",null,"All installation files at ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-manager-web")," directory."),(0,r.kt)("h2",{id:"22-modify-configuration"},"2.2 Modify configuration"),(0,r.kt)("p",null,"Go to the decompressed ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-manager-web")," directory and modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application.properties")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# manager-web service port number\nserver.port=8083\n\n# The configuration file used is dev\nspring.profiles.active=dev\n")),(0,r.kt)("p",null,"The dev configuration is specified above, then modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application-dev.properties")," file:"),(0,r.kt)("p",null,"1) Modify the database URL, username and password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"spring.datasource.jdbc-url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8\nspring.datasource.username=xxxxxx\nspring.datasource.password=xxxxxx\n")),(0,r.kt)("p",null,"2) Modify the connection information of the Tube and ZooKeeper clusters, among which ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.zk.root")," suggests using\nthe default value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'# Manager address of Tube cluster, used to create Topic\ncluster.tube.manager=http://127.0.0.1:8081\n# Broker used to manage Tube\ncluster.tube.master=127.0.0.1:8000,127.0.0.1:8010\n# Tube cluster ID\ncluster.tube.clusterId=1\n\n# ZK cluster, used to push the configuration of Sort\ncluster.zk.url=127.0.0.1:2181\ncluster.zk.root=inlong_hive\n\n# Sort application name, that is, set the cluster-id parameter of Sort, the default value is "inlong_app"\nsort.appName=inlong_app\n')),(0,r.kt)("h2",{id:"23-start-the-service"},"2.3 Start the service"),(0,r.kt)("p",null,"Enter the decompressed directory, execute ",(0,r.kt)("inlineCode",{parentName:"p"},"sh bin/startup.sh")," to start the service, and check the\nlog ",(0,r.kt)("inlineCode",{parentName:"p"},"tailf log/manager-web.log"),". If a log similar to the following appears, the service has started successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Started InLongWebApplication in 6.795 seconds (JVM running for 7.565)\n")),(0,r.kt)("h1",{id:"3-service-access-verification"},"3. Service access verification"),(0,r.kt)("p",null,"Verify the manager-web service:"),(0,r.kt)("p",null,"Visit address: ",(0,r.kt)("a",{parentName:"p",href:"http://%5Bmanager_web_ip%5D:%5Bmanager_web_port%5D/api/inlong/manager/doc.html#/home"},"http://[manager_web_ip]:[manager_web_port]/api/inlong/manager/doc.html#/home")))}d.isMDXComponent=!0}}]);