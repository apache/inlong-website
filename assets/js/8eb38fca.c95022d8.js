"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[44749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"Standalone",sidebar_position:1},l=void 0,i={unversionedId:"deployment/standalone",id:"version-1.1.0/deployment/standalone",title:"Standalone",description:"Environment Requirements",source:"@site/versioned_docs/version-1.1.0/deployment/standalone.md",sourceDirName:"deployment",slug:"/deployment/standalone",permalink:"/docs/1.1.0/deployment/standalone",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/deployment/standalone.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{title:"Standalone",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pulsar Example",permalink:"/docs/1.1.0/quick_start/pulsar_example"},next:{title:"Docker",permalink:"/docs/1.1.0/deployment/docker"}},s={},u=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Prepare Message Queue",id:"prepare-message-queue",level:2},{value:"Download the Binary Package",id:"download-the-binary-package",level:2},{value:"DB Dependencies",id:"db-dependencies",level:2},{value:"Configure",id:"configure",level:2},{value:"Start",id:"start",level:2},{value:"Register Message Queue",id:"register-message-queue",level:2},{value:"Check",id:"check",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,r.kt)("li",{parentName:"ul"},"Flink 1.13.5")),(0,r.kt)("h2",{id:"prepare-message-queue"},"Prepare Message Queue"),(0,r.kt)("p",null,"InLong Support the following Message Queue services now, you can choose one of them."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/modules/tubemq/quick_start"},"InLong TubeMQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/2.8.1/standalone/"},"Apache Pulsar 2.8.x"))),(0,r.kt)("h2",{id:"download-the-binary-package"},"Download the Binary Package"),(0,r.kt)("p",null,"You can get binary package from ",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download/"},"Download Page")," ,or you can build the InLong refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.0/quick_start/how_to_build"},"How to Build"),".\u3002"),(0,r.kt)("h2",{id:"db-dependencies"},"DB Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the backend database is MySQL, please download ",(0,r.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar")," and put it into the following directories:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"inlong-agent/lib/\ninlong-audit/lib/\ninlong-manager/lib/\ninlong-tubemq-manager/lib/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the backend database is PostgreSQL, there's no need for additional dependencies.")),(0,r.kt)("h2",{id:"configure"},"Configure"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/inlong.conf"),", replace the parameters according to the actual situation:"),(0,r.kt)("h2",{id:"start"},"Start"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/inlong-daemon start standalone\n")),(0,r.kt)("h2",{id:"register-message-queue"},"Register Message Queue"),(0,r.kt)("p",null,"You can register message queue for Manger according to ",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/docs/next/modules/manager/quick_start#register-message-queue"},"Register Step"),"."),(0,r.kt)("h2",{id:"check"},"Check"),(0,r.kt)("p",null,"After all component run successfully, you can access ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost")," with default account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"user: admin\npassword: inlong\n")))}p.isMDXComponent=!0}}]);