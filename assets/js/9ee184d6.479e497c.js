"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[94788],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"Overview",sidebar_position:1},s=void 0,i={unversionedId:"modules/sort-standalone/overview",id:"version-1.2.0/modules/sort-standalone/overview",title:"Overview",description:"Overview",source:"@site/versioned_docs/version-1.2.0/modules/sort-standalone/overview.md",sourceDirName:"modules/sort-standalone",slug:"/modules/sort-standalone/overview",permalink:"/docs/1.2.0/modules/sort-standalone/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/modules/sort-standalone/overview.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/1.2.0/modules/dashboard/quick_start"},next:{title:"Deployment",permalink:"/docs/1.2.0/modules/sort-standalone/quick_start"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Feature",id:"feature",level:2},{value:"Multi tenant system",id:"multi-tenant-system",level:3},{value:"Distribution tasks support dynamic updates",id:"distribution-tasks-support-dynamic-updates",level:3},{value:"message queues supported by the cache layer",id:"message-queues-supported-by-the-cache-layer",level:3},{value:"supported data storage",id:"supported-data-storage",level:3},{value:"Future planning",id:"future-planning",level:3},{value:"support more types of cache layer message queues",id:"support-more-types-of-cache-layer-message-queues",level:4},{value:"support more kinds of data storage",id:"support-more-kinds-of-data-storage",level:4},{value:"support more file formats written to Apache hive",id:"support-more-file-formats-written-to-apache-hive",level:4}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Inlong sort standalone is a module responsible for consuming the data stream reported by users from the cache layer and distributing it to different data stores. It supports hive, elasticsearch, CLS and other data stores.",(0,n.kt)("br",{parentName:"p"}),"\n","Inlong sort standalone relies on inlong manager to manage system metadata. Inlong sort standalone is deployed by cluster and aggregates and distributes tasks by target storage."),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("h3",{id:"multi-tenant-system"},"Multi tenant system"),(0,n.kt)("p",null,"Inlong sort standalone supports multi tenancy. An inlong sort standalone cluster can host the distribution tasks of different tenants. The distribution tasks are obtained from the inlong manager.",(0,n.kt)("br",{parentName:"p"}),"\n","Each distribution task is responsible for distributing multiple data streams to a data store. Users only need to configure on the front page of inlong manager to specify the data streams to be distributed to a specific data store.",(0,n.kt)("br",{parentName:"p"}),"\n","For example, the inlong data streams D1 and D2 are distributed to hive cluster H1, D1 is also distributed to elasticsearch cluster E1, and D2 is also distributed to CLS cluster C1. Then the inlong sort standalone cluster will receive three distribution tasks."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"H1 distributes task consumption D1 and D2 to hive cluster H1;"),(0,n.kt)("li",{parentName:"ul"},"E1 distribution task consumption D1, distributed to elasticsearch cluster E1;"),(0,n.kt)("li",{parentName:"ul"},"C1 distributes the task consumption D2 and distributes it to CLS cluster C1.")),(0,n.kt)("h3",{id:"distribution-tasks-support-dynamic-updates"},"Distribution tasks support dynamic updates"),(0,n.kt)("p",null,"Inlong sort standalone supports dynamic updating of distribution tasks, such as the information of the data source where the inlong data stream is located, the data stream schema information, and the information of the target data store.",(0,n.kt)("br",{parentName:"p"}),"\n","It should be noted that the new distribution of inlong data stream will be consumed from the latest location of the cache layer;",(0,n.kt)("br",{parentName:"p"}),"\n","After the inlong data stream is distributed offline, it goes online again. If the consumption location when it goes offline is still within the life cycle of the cache layer, it continues to consume from the consumption location when it goes offline;",(0,n.kt)("br",{parentName:"p"}),"\n","If the consumption location at the time of offline is no longer within the life cycle of the cache layer, consumption starts from the latest location of the cache layer."),(0,n.kt)("h3",{id:"message-queues-supported-by-the-cache-layer"},"message queues supported by the cache layer"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Inlong-tubemq"),(0,n.kt)("li",{parentName:"ul"},"Apache Pulsar")),(0,n.kt)("h3",{id:"supported-data-storage"},"supported data storage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Apache hive (currently only supports sequence file format)"),(0,n.kt)("li",{parentName:"ul"},"Apache Pulsar"),(0,n.kt)("li",{parentName:"ul"},"Apache Kafka")),(0,n.kt)("h3",{id:"future-planning"},"Future planning"),(0,n.kt)("h4",{id:"support-more-types-of-cache-layer-message-queues"},"support more types of cache layer message queues"),(0,n.kt)("p",null,"Apache Kafka, etc."),(0,n.kt)("h4",{id:"support-more-kinds-of-data-storage"},"support more kinds of data storage"),(0,n.kt)("p",null,"HBase, elasticsearch, etc."),(0,n.kt)("h4",{id:"support-more-file-formats-written-to-apache-hive"},"support more file formats written to Apache hive"),(0,n.kt)("p",null,"Orc file, etc."))}d.isMDXComponent=!0}}]);