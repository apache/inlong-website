"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[61762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||a;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={title:"client partition assign"},r=void 0,s={unversionedId:"modules/tubemq/client_partition_assign_introduction",id:"version-1.6.0/modules/tubemq/client_partition_assign_introduction",title:"client partition assign",description:"1 Preface",source:"@site/versioned_docs/version-1.6.0/modules/tubemq/client_partition_assign_introduction.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/client_partition_assign_introduction",permalink:"/docs/modules/tubemq/client_partition_assign_introduction",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.6.0/modules/tubemq/client_partition_assign_introduction.md",tags:[],version:"1.6.0",frontMatter:{title:"client partition assign"},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/modules/tubemq/tubemq-manager/quick_start"},next:{title:"Client RPC",permalink:"/docs/modules/tubemq/client_rpc"}},l={},c=[{value:"1 Preface",id:"1-preface",level:2},{value:"2 Usage Demo",id:"2-usage-demo",level:2},{value:"3 Implementation details",id:"3-implementation-details",level:2},{value:"3.1 The general idea",id:"31-the-general-idea",level:3},{value:"3.2 Field Definition",id:"32-field-definition",level:3},{value:"4.3 Interactive Introduction",id:"43-interactive-introduction",level:3},{value:"4.3.1 Core Ideas",id:"431-core-ideas",level:4},{value:"4.3.2 Interactive Process",id:"432-interactive-process",level:4},{value:"5 Summary",id:"5-summary",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-preface"},"1 Preface"),(0,o.kt)("p",null,"Before version 0.12.0, the partition allocation of TubeMQ was controlled by the server-side. The advantage of this solution is that the client is simple to implement, after the client registers, it only needs to wait for the server-side to distribute the partition and register and consume the distributed partition. But its shortcomings are also more obvious:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Data consumption waiting time is too long: the client has a relatively long time from startup to consumption to the first piece of data. In the best case, the client needs to wait for an allocation period (configurable, 30 seconds by default) to obtain the partition to be consumed and in extreme cases, it may exceed a few minutes. So the user is not satisfied with the waiting time;"),(0,o.kt)("li",{parentName:"ol"},"The partition allocation plan is not rich enough: the current service-side partition allocation plan is based on the total set of Topic partitions subscribed by the client, and the total number of clients in the distribution of this consumer group is distributed in a Hash modulo mode, and when the business needs a special distribution plan is adopted, the current distribution plan on the server-side is not friendly enough and cannot be changed at any time according to business needs;"),(0,o.kt)("li",{parentName:"ol"},"Does not support specified partition consumption: during the use of the version, the business feedback that the current server-side management and control is not flexible enough, for example, when the client needs to bind the consumption relationship between the consumer and the partition, or when you only want to consume certain partitions at a certain startup, The current service-side consumption control is not supported.\nIn response to these problems, the 0.12.0 version launched a new client partition allocation management and control consumption model, combined with the current consumption lag situation awareness function of the partition, allowing the business to autonomously control the distribution and consumption of the partition.")),(0,o.kt)("h2",{id:"2-usage-demo"},"2 Usage Demo"),(0,o.kt)("p",null,"The client of partition assign is defined based on the ClientBalanceConsumer interface class, including 17 APIs in total. For related demo codes, please refer to the ","[ClientBalanceConsumerExample.java]","(",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-"},"https://github.com/apache/inlong/blob/master/inlong-")," tubemq/tubemq-example/src/main/java/org/apache/inlong/tubemq/example/ClientBalanceConsumerExample.java). "),(0,o.kt)("p",null,"The overall code implementation logic is as follows:\n",(0,o.kt)("img",{src:n(27801).Z,width:"935",height:"1070"})),(0,o.kt)("h2",{id:"3-implementation-details"},"3 Implementation details"),(0,o.kt)("h3",{id:"31-the-general-idea"},"3.1 The general idea"),(0,o.kt)("p",null,"According to business needs and analysis of the implementation of similar MQs, we added the ClientBalanceConsumer class on the TubeMQ consumer end. Through the API provided by the SDK, the business can periodically query the partition set information corresponding to the topic to be consumed; and the business can specify the partition and initial The offset is used to register and to cancel the registered partition; at the same time, the server does not control the partition allocation of this type of consumer group, and the client completely controls the allocation and release the relationship between the client and the partition."),(0,o.kt)("h3",{id:"32-field-definition"},"3.2 Field Definition"),(0,o.kt)("p",null,"Before using this type of consumer, the business needs to pay attention to the following two field definition information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'PartitionKey: Partition Key, String type, ID used to uniquely identify a partition in TubeMQ, globally unique within the cluster, in the format of "BrokerId:TopicName:PartitionId", the business query partition metadata information will return the result as PartitionKey gather;'),(0,o.kt)("li",{parentName:"ul"},"bootstrapOffset: reset Offset, long type, the initial consumption value provided by the business when registering consumption on the specified partition, the effective value is [0, +value); when this interface is called, the field is set to -1, indicating that the business is stored on the service side Offset position continues consumption data")),(0,o.kt)("h3",{id:"43-interactive-introduction"},"4.3 Interactive Introduction"),(0,o.kt)("h4",{id:"431-core-ideas"},"4.3.1 Core Ideas"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(54283).Z,width:"1550",height:"808"}),"\nAs shown above, the logic behind the client load balancing operation is mainly to deal with the partition set. The client must periodically obtain the subscribable partition set, and obtain the current consuming partition set of each client according to the allocation algorithm; the current consuming set is the same as The client is currently consuming the set of partitions to take the intersection to obtain the partitions that need to be released and newly registered; for the partitions that need to be newly registered, the client is supported to specify the offset value of the initial consumption."),(0,o.kt)("p",null,"The following two issues need to be paid attention to during the client partition allocation and use business:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to reduce the impact of partition expansion and contraction: TubeMQ will expand and contract at any time, such as abnormal Broker offline, operation and maintenance blacklist operation, operation and maintenance expansion topic partition, etc. In order to deal with this problem, business pull The partition metadata information obtained is the configuration information and the subscribed status of the partition; it is recommended that the business be distributed according to the complete set of configuration, and then the metadata status is unregistered and registered (there are examples in the sample code), so as to avoid the exception of Broker. Frequent release and join processing caused by operations such as online, blacklist, and temporary unsubscription."),(0,o.kt)("li",{parentName:"ul"},"How to deal with the expansion and contraction on the client-side: By default, we believe that the business will use the number of partitions and the number of clients in the consumer group to allocate partitions based on the modulus. Therefore, we added sourceCount (consumer group) to the start() function of TubeMQ. The total number of nodes) and nodeId (the ID number of the current node) are two fields to tell the service side how many clients the consumer group will start, and what is the ID number of each client to ensure the consistency of the modulus distribution; When using a consumer group, you need to specify the above two parameters. The sourceCount must ensure that all consumers in the same group provide the same value, and the nodeId must ensure that the ID used by all consumers in the same group is unique. In this way, it is ensured that if the consumer group uses the modulo scheme, the corresponding basic parameters are not in conflict. It is possible that the business does not choose a modular solution. At this time, you only need to set the sourceCount to an invalid value (less than 0), and you can turn off the default parameter requirements.")),(0,o.kt)("h4",{id:"432-interactive-process"},"4.3.2 Interactive Process"),(0,o.kt)("p",null,"The interaction between each node is as follows:\n",(0,o.kt)("img",{src:n(79772).Z,width:"1269",height:"1008"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Master does not execute the balancing process on the Consumer controlled by the client. After the Master receives the consumer group registered by this type of client, it does not control partition assign, which is completely controlled by the client;"),(0,o.kt)("li",{parentName:"ul"},"Consumer provides a partition query API for businesses to periodically query the partition set information corresponding to the Topic set to be consumed;"),(0,o.kt)("li",{parentName:"ul"},"Consumer provides partition registration and deregistration APIs for the business to deregister the partitions that the client has registered and needs to be deregistered, register the designated unregistered partitions through the registration interface, and support the initial offset of the designated registration of the business during registration;"),(0,o.kt)("li",{parentName:"ul"},"Consumers regularly report status and partition registration information, so that the Master side can perceive the current partition assign and registration status of each SDK so that the server can obtain the partition allocation information of the entire group;"),(0,o.kt)("li",{parentName:"ul"},"Master provides a query API and supports operation and maintenance to query the partition allocation status of each node in the specified partition allocation consumer group through the API query interface.")),(0,o.kt)("h2",{id:"5-summary"},"5 Summary"),(0,o.kt)("p",null,"At this point, we have completed the introduction of client partition assign and made a detailed example of partition allocation through the client's hash modulus based on the total number of partitions and the total number of clients in the consumer group. There is no restriction on the partition allocation scheme, and you can also use other schemes when you use them,  only need to set the sourceCount value to -1 to turn off the system's default allocation strategy."),(0,o.kt)("p",null,"In the implementation, the initial plan was to externalize the allocation plan in a callback mode and include the partition allocation thread into the SDK. However, later considering that the client may do a lot of fine processing, encapsulation may limit the use of the business. In contrast, the business only creates one more thread, so the current version does not carry out this encapsulation. The follow-up to see the effect of the implementation, if this is necessary, we will improve it."),(0,o.kt)("hr",null),(0,o.kt)("a",{href:"#top"},"Back to top"))}h.isMDXComponent=!0},27801:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/example-815d7c8e4b2840cbd9898620f834e28a.png"},79772:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/flow_diagram-382e3e9975675691ff1e129d5d8fd1cb.png"},54283:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/topic_assign-647ef71e2ba99b0a1c60b005ece8ace2.png"}}]);