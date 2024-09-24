"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6583],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>d});var a=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=a.createContext({}),s=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=t,d=u["".concat(c,".").concat(m)]||u[m]||g[m]||o;return r?a.createElement(d,i(i({ref:n},p),{},{components:r})):a.createElement(d,i({ref:n},p))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:t,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15535:(e,n,r)=>{r.d(n,{l:()=>a});const a={inLongVersion:"1.8.0"}},12741:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(58168),t=(r(96540),r(15680)),o=r(15535);const i={title:"Example",sidebar_position:1},l=void 0,c={unversionedId:"sdk/manager-sdk/example",id:"version-1.8.0/sdk/manager-sdk/example",title:"Example",description:"Overview",source:"@site/versioned_docs/version-1.8.0/sdk/manager-sdk/example.md",sourceDirName:"sdk/manager-sdk",slug:"/sdk/manager-sdk/example",permalink:"/docs/1.8.0/sdk/manager-sdk/example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.8.0/sdk/manager-sdk/example.md",tags:[],version:"1.8.0",sidebarPosition:1,frontMatter:{title:"Example",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Golang SDK",permalink:"/docs/1.8.0/sdk/dataproxy-sdk/go"},next:{title:"C++ SDK",permalink:"/docs/1.8.0/sdk/tubemq-sdk/cpp"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Dependency",id:"dependency",level:2},{value:"Code",id:"code",level:2},{value:"Programming must know interface",id:"programming-must-know-interface",level:3},{value:"Kafka2Hive",id:"kafka2hive",level:3},{value:"Binlog2Kafka",id:"binlog2kafka",level:3},{value:"Last but not Least",id:"last-but-not-least",level:2}],u={toc:p},g="wrapper";function m(e){let{components:n,...r}=e;return(0,t.yg)(g,(0,a.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"overview"},"Overview"),(0,t.yg)("p",null,"Apache InLong Manager is the user-oriented unified UI of the entire data access platform. Now we provide client SDK for users,\nwhich means you can use client to manipulate your group task instead of UI."),(0,t.yg)("h2",{id:"dependency"},"Dependency"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Add Maven Dependency",(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>manager-client</artifactId>\n    <version>${o.l.inLongVersion}</version>\n</dependency>\n`)))),(0,t.yg)("h2",{id:"code"},"Code"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"We provide two unit cases for you to build your own group task, you can replace the predefined params and try it in your own cluster."),(0,t.yg)("li",{parentName:"ul"},"In following cases, ",(0,t.yg)("strong",{parentName:"li"},"Apache Pulsar")," and ",(0,t.yg)("strong",{parentName:"li"},"Apache Flink")," are needed when your group is inited. You can run Inlong group in your own cluster, or with the help of third-party services.")),(0,t.yg)("h3",{id:"programming-must-know-interface"},"Programming must know interface"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"// Create client configuration\nClientConfiguration configuration = createClientConfig();\n// Init Inlong client\nInlongClient inlongClient = InlongClient.create(SERVICE_URL, configuration);\ntry {\n    // Create group conf\n    InlongGroupConf groupConf = createGroupConf();\n    // Init group resource by conf\n    InlongGroup group = inlongClient.forGroup(groupConf);\n    // Create stream conf\n    InlongStreamConf streamConf = createStreamConf();\n    // Create Stream builder \n    InlongStreamBuilder streamBuilder = group.createStream(streamConf);\n    // Create stream source\n    streamBuilder.source(createSource());\n    // Create stream sink\n    streamBuilder.sink(createSink());\n    // Init stream \n    streamBuilder.initOrUpdate();\n    // Start group in server\n    InlongGroupContext inlongGroupContext = group.init();\n} catch (Exception e) {\n    e.printStackTrace();\n}\n")),(0,t.yg)("h3",{id:"kafka2hive"},"Kafka2Hive"),(0,t.yg)("p",null,"Refer to ",(0,t.yg)("strong",{parentName:"p"},"manager-client-examples"),"\n",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-manager/manager-client-examples/src/test/java/org/apache/inlong/manager/client/Kafka2HiveExample.java"},"org.apache.inlong.manager.client.Kafka2HiveExample.java")),(0,t.yg)("h3",{id:"binlog2kafka"},"Binlog2Kafka"),(0,t.yg)("p",null,"Refer to ",(0,t.yg)("strong",{parentName:"p"},"manager-client-examples"),"\n",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-manager/manager-client-examples/src/test/java/org/apache/inlong/manager/client/Binlog2KafkaExample.java"},"org.apache.inlong.manager.client.Binlog2KafkaExample.java")),(0,t.yg)("h2",{id:"last-but-not-least"},"Last but not Least"),(0,t.yg)("p",null,"If you have any question about manager client, communicate with us please."))}m.isMDXComponent=!0}}]);