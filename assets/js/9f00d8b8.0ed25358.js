"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[98230],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={title:"Standalone",sidebar_position:1},l=void 0,i={unversionedId:"deployment/standalone",id:"version-1.2.0/deployment/standalone",title:"Standalone",description:"Environment Requirements",source:"@site/versioned_docs/version-1.2.0/deployment/standalone.md",sourceDirName:"deployment",slug:"/deployment/standalone",permalink:"/docs/1.2.0/deployment/standalone",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/deployment/standalone.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{title:"Standalone",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pulsar Example",permalink:"/docs/1.2.0/quick_start/pulsar_example"},next:{title:"Docker",permalink:"/docs/1.2.0/deployment/docker"}},s={},c=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Prepare Message Queue",id:"prepare-message-queue",level:2},{value:"Download the Binary Package",id:"download-the-binary-package",level:2},{value:"DB Dependencies",id:"db-dependencies",level:2},{value:"Configure",id:"configure",level:2},{value:"Start",id:"start",level:2},{value:"Register Message Queue",id:"register-message-queue",level:2},{value:"Check",id:"check",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,r.kt)("li",{parentName:"ul"},"Flink 1.13.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+")),(0,r.kt)("h2",{id:"prepare-message-queue"},"Prepare Message Queue"),(0,r.kt)("p",null,"InLong Support the following Message Queue services now, you can choose one of them."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.2.0/modules/tubemq/quick_start"},"InLong TubeMQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/2.8.1/standalone/"},"Apache Pulsar 2.8.x"))),(0,r.kt)("h2",{id:"download-the-binary-package"},"Download the Binary Package"),(0,r.kt)("p",null,"You can get binary package from ",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"Download Page")," ,or you can build the InLong refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2.0/quick_start/how_to_build"},"How to Build"),"."),(0,r.kt)("p",null,"Extract ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-inlong-[version]-bin.tar.gz")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-inlong-[version]-sort-connectors.tar.gz"),", and make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-sort/connectors/")," directory contains Connectors."),(0,r.kt)("h2",{id:"db-dependencies"},"DB Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the backend database is MySQL, please download ",(0,r.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar")," and put it into the following directories:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"inlong-agent/lib/\ninlong-audit/lib/\ninlong-manager/lib/\ninlong-tubemq-manager/lib/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the backend database is PostgreSQL, there's no need for additional dependencies.")),(0,r.kt)("h2",{id:"configure"},"Configure"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/inlong.conf"),", configure the parameters according to the actual situation."),(0,r.kt)("h2",{id:"start"},"Start"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/inlong-daemon start standalone\n")),(0,r.kt)("h2",{id:"register-message-queue"},"Register Message Queue"),(0,r.kt)("p",null,"You can register message queue for Manger according to ",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/docs/next/modules/manager/quick_start/#register-mq-cluster"},"Register MQ Cluster"),"."),(0,r.kt)("h2",{id:"check"},"Check"),(0,r.kt)("p",null,"After all component run successfully, you can access ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost")," with default account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"user: admin\npassword: inlong\n")))}p.isMDXComponent=!0}}]);