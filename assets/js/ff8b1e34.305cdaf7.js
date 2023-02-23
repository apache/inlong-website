"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[39985],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Docker",sidebar_position:2},l=void 0,s={unversionedId:"deployment/docker",id:"deployment/docker",title:"Docker",description:"Deploy all InLong module by Docker Compose, it's only available for development.",source:"@site/docs/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/docs/next/deployment/docker",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/deployment/docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Docker",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Standalone",permalink:"/docs/next/deployment/standalone"},next:{title:"Kubernetes",permalink:"/docs/next/deployment/k8s"}},i={},c=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Download",id:"download",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Cluster Initialize",id:"cluster-initialize",level:2},{value:"Create Cluster Tag",id:"create-cluster-tag",level:3},{value:"Register Pulsar Cluster",id:"register-pulsar-cluster",level:3},{value:"Use",id:"use",level:2},{value:"Destroy",id:"destroy",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Deploy all InLong module by Docker Compose, it's only available for development. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Docker Compose deploys all components for Standard Architecture, and choose ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/concepts-overview"},"Apache Pulsar")," as the default message queue.")),(0,o.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/other/#on-linux"},"Docker Compose 2.4+"))),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"You can get ",(0,o.kt)("inlineCode",{parentName:"p"},"apache-inlong-[version]-bin.tar.gz")," from ",(0,o.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"Download Page")," ,or you can build the InLong refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/quick_start/how_to_build"},"How to Build"),"."),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"Start all components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd docker/docker-compose\ndocker-compose up -d\n")),(0,o.kt)("h2",{id:"cluster-initialize"},"Cluster Initialize"),(0,o.kt)("p",null,"When all containers are successfully started, you can access the Inlong dashboard address ",(0,o.kt)("inlineCode",{parentName:"p"},"http: // localhost"),", and use the following default account to log in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,o.kt)("h3",{id:"create-cluster-tag"},"Create Cluster Tag"),(0,o.kt)("p",null,"Click ","[Clusters]","->","[ClusterTags]","->","[Create]"," on the page to specify the cluster label name and person in charge:\n",(0,o.kt)("img",{src:r(81471).Z,width:"515",height:"328"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Since each component reports the ClusterTags as ",(0,o.kt)("inlineCode",{parentName:"p"},"default_cluster")," by default, do not use other names.")),(0,o.kt)("h3",{id:"register-pulsar-cluster"},"Register Pulsar Cluster"),(0,o.kt)("p",null,"Click ","[Clusters]","->","[ClusterTags]","->","[Create]"," on the page to register Pulsar Cluster:\n",(0,o.kt)("img",{src:r(99126).Z,width:"513",height:"644"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ClusterTags selects the newly created ",(0,o.kt)("inlineCode",{parentName:"p"},"default_cluster"),", the Pulsar cluster deployed by docker:"),(0,o.kt)("p",{parentName:"admonition"},"Service URL is ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar://pulsar:6650"),", Admin URL is ",(0,o.kt)("inlineCode",{parentName:"p"},"http://pulsar:8080"),".")),(0,o.kt)("h2",{id:"use"},"Use"),(0,o.kt)("p",null,"You can refer ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/quick_start/pulsar_example"},"Pulsar Example")," to create Data Stream."),(0,o.kt)("h2",{id:"destroy"},"Destroy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose down\n")))}u.isMDXComponent=!0},81471:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create_cluster_tag-6a90b8b65f0e4d3259bbed710a5d50ef.png"},99126:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create_pulsar_cluster-b308ae9db56f73ade575c648fb62b797.png"}}]);