"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9249],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return t?r.createElement(g,i(i({ref:n},m),{},{components:t})):r.createElement(g,i({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const o={title:"Deployment",sidebar_position:2},i=void 0,l={unversionedId:"modules/tubemq/tubemq-manager/deployment",id:"version-2.0.0/modules/tubemq/tubemq-manager/deployment",title:"Deployment",description:"All deploying files at inlong-tubemq-manager directory.",source:"@site/versioned_docs/version-2.0.0/modules/tubemq/tubemq-manager/deployment.md",sourceDirName:"modules/tubemq/tubemq-manager",slug:"/modules/tubemq/tubemq-manager/deployment",permalink:"/docs/modules/tubemq/tubemq-manager/deployment",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/modules/tubemq/tubemq-manager/deployment.md",tags:[],version:"2.0.0",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/tubemq/tubemq-manager/overview"},next:{title:"Command-line Tools",permalink:"/docs/modules/tubemq/commandline_tools"}},s={},p=[{value:"Environment Preparation",id:"environment-preparation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Start",id:"start",level:2},{value:"Restart",id:"restart",level:2},{value:"Register TubeMQ cluster",id:"register-tubemq-cluster",level:2}],m={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"All deploying files at ",(0,a.yg)("inlineCode",{parentName:"p"},"inlong-tubemq-manager")," directory."),(0,a.yg)("h2",{id:"environment-preparation"},"Environment Preparation"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Install and start MySQL 5.7+"),(0,a.yg)("li",{parentName:"ul"},"Load ",(0,a.yg)("inlineCode",{parentName:"li"},"sql/apache_tube_manager.sql")," through the command to complete the initialization of the table structure and basic data:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# Create database and table with username and password:\nmysql -uDB_USER -pDB_PASSWD < sql/apache_tube_manager.sql\n")),(0,a.yg)("h2",{id:"configuration"},"Configuration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ini"},"# MySQL configuration for Manager\nspring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/apache_tube_manager\nspring.datasource.username=mysql_username\nspring.datasource.password=mysql_password\n\n# If you are on JDK version 11+, add the following extra\nspring.jaxb-compatibility-mode=true\nspring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect\n")),(0,a.yg)("h2",{id:"dependencies"},"Dependencies"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Please download ",(0,a.yg)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/org/hibernate/common/hibernate-commons-annotations/5.1.2.Final/hibernate-commons-annotations-5.1.2.Final.jar"},"hibernate-commons-annotations-5.1.2.Final.jar"),",\n",(0,a.yg)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/org/hibernate/hibernate-core/5.6.7.Final/hibernate-core-5.6.7.Final.jar"},"hibernate-core-5.6.7.Final.jar"),",\n",(0,a.yg)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/antlr/antlr/2.7.7/antlr-2.7.7.jar"},"antlr-2.7.7.jar"),",\n",(0,a.yg)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/org/jboss/logging/jboss-logging/3.4.3.Final/jboss-logging-3.4.3.Final.jar"},"jboss-logging-3.4.3.Final.jar")," and put it into ",(0,a.yg)("inlineCode",{parentName:"p"},"lib/")," directory.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the backend database is MySQL, please download ",(0,a.yg)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar"},"mysql-connector-java-8.0.28.jar")," and put it into ",(0,a.yg)("inlineCode",{parentName:"p"},"lib/")," directory.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the backend database is PostgreSQL, there's no need for additional dependencies."))),(0,a.yg)("h2",{id:"start"},"Start"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"$ bin/start-manager.sh \n")),(0,a.yg)("h2",{id:"restart"},"Restart"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"$ bin/restart-manager.sh \n")),(0,a.yg)("h2",{id:"register-tubemq-cluster"},"Register TubeMQ cluster"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"vim bin/init-tube-cluster.sh\n")),(0,a.yg)("p",null,"replace the parameters below"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"TUBE_MANAGER_IP=  \nTUBE_MANAGER_PORT=   \nTUBE_MASTER_IP=   \nTUBE_MASTER_PORT=\nTUBE_MASTER_WEB_PORT=\nTUBE_MASTER_TOKEN=\n")),(0,a.yg)("p",null,"then run\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"sh bin/init-tube-cluster.sh\n")),(0,a.yg)("p",null,"this will create a cluster with id = 1, note that this operation should not be executed repeatedly."))}c.isMDXComponent=!0}}]);