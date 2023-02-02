"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[41650],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Docker",sidebar_position:2},l=void 0,s={unversionedId:"deployment/docker",id:"version-1.4.0/deployment/docker",title:"Docker",description:"Deploy all InLong module by Docker Compose, it's only available for development.",source:"@site/versioned_docs/version-1.4.0/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/docs/1.4.0/deployment/docker",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.4.0/deployment/docker.md",tags:[],version:"1.4.0",sidebarPosition:2,frontMatter:{title:"Docker",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Standalone",permalink:"/docs/1.4.0/deployment/standalone"},next:{title:"Kubernetes",permalink:"/docs/1.4.0/deployment/k8s"}},i={},p=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Download",id:"download",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Create Cluster Tag",id:"create-cluster-tag",level:3},{value:"Register Pulsar Cluster",id:"register-pulsar-cluster",level:3},{value:"Create Data Stream",id:"create-data-stream",level:3},{value:"Destroy",id:"destroy",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Deploy all InLong module by Docker Compose, it's only available for development. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Docker Compose deploys all components for Standard Architecture, and choose ",(0,a.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/concepts-overview"},"Apache Pulsar")," as the default message queue.")),(0,a.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,a.kt)("li",{parentName:"ul"},"Docker Compose 1.29.2+")),(0,a.kt)("h2",{id:"download"},"Download"),(0,a.kt)("p",null,"You can get ",(0,a.kt)("inlineCode",{parentName:"p"},"apache-inlong-[version]-bin.tar.gz")," from ",(0,a.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"Download Page")," ,or you can build the InLong refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4.0/quick_start/how_to_build"},"How to Build"),"."),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"Start all components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd docker/docker-compose\ndocker-compose up -d\n")),(0,a.kt)("h3",{id:"create-cluster-tag"},"Create Cluster Tag"),(0,a.kt)("p",null,"Click ","[Clusters]","->","[ClusterTags]","->","[Create]"," on the page to specify the cluster label name and person in charge:\n",(0,a.kt)("img",{src:r(47703).Z,width:"515",height:"328"})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Since each component reports the ClusterTags as ",(0,a.kt)("inlineCode",{parentName:"p"},"default_cluster")," by default, do not use other names.")),(0,a.kt)("h3",{id:"register-pulsar-cluster"},"Register Pulsar Cluster"),(0,a.kt)("p",null,"Click ","[Clusters]","->","[ClusterTags]","->","[Create]"," on the page to register Pulsar Cluster:\n",(0,a.kt)("img",{src:r(1447).Z,width:"513",height:"644"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ClusterTags selects the newly created ",(0,a.kt)("inlineCode",{parentName:"p"},"default_cluster"),", the Pulsar cluster deployed by docker:"),(0,a.kt)("p",{parentName:"admonition"},"Service URL is ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar://pulsar:6650"),", Admin URL is ",(0,a.kt)("inlineCode",{parentName:"p"},"http://pulsar:8080"),".")),(0,a.kt)("h3",{id:"create-data-stream"},"Create Data Stream"),(0,a.kt)("p",null,"You can refer ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4.0/quick_start/pulsar_example"},"Pulsar Example")," to create Data Stream."),(0,a.kt)("h2",{id:"destroy"},"Destroy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose down\n")))}d.isMDXComponent=!0},47703:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create_cluster_tag-6a90b8b65f0e4d3259bbed710a5d50ef.png"},1447:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create_pulsar_cluster-b308ae9db56f73ade575c648fb62b797.png"}}]);