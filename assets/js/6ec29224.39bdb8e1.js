"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[17838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Release 1.3.0",author:"EMsnap",author_url:"https://github.com/EMsnap",author_image_url:"https://avatars.githubusercontent.com/u/26538404?v=4",tags:["Apache InLong","Version"]},i=void 0,l={permalink:"/blog/2022/09/05/release-1.3.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2022-09-05-release-1.3.0.md",source:"@site/blog/2022-09-05-release-1.3.0.md",title:"Release 1.3.0",description:"Apache InLong is a one-stop integration framework for massive data that provides automatic, secure and reliable data transmission capabilities.",date:"2022-09-05T00:00:00.000Z",formattedDate:"September 5, 2022",tags:[{label:"Apache InLong",permalink:"/blog/tags/apache-in-long"},{label:"Version",permalink:"/blog/tags/version"}],readingTime:3.815,hasTruncateMarker:!0,authors:[{name:"EMsnap",url:"https://github.com/EMsnap",imageURL:"https://avatars.githubusercontent.com/u/26538404?v=4"}],frontMatter:{title:"Release 1.3.0",author:"EMsnap",author_url:"https://github.com/EMsnap",author_image_url:"https://avatars.githubusercontent.com/u/26538404?v=4",tags:["Apache InLong","Version"]},prevItem:{title:"Release 1.4.0",permalink:"/blog/2022/11/16/release-1.4.0"},nextItem:{title:"Release 1.2.0",permalink:"/blog/2022/06/22/release-1.2.0"}},s={authorsImageUrls:[void 0]},p=[{value:"1.3.0 Features Overview",id:"130-features-overview",level:2},{value:"Enhance management and control capabilities",id:"enhance-management-and-control-capabilities",level:3},{value:"Extended collection node",id:"extended-collection-node",level:3},{value:"Optimize write node",id:"optimize-write-node",level:3},{value:"Support data conversion",id:"support-data-conversion",level:3},{value:"Strengthen Agent function",id:"strengthen-agent-function",level:3},{value:"Other optimizations",id:"other-optimizations",level:3},{value:"1.3.0 Features Details",id:"130-features-details",level:2},{value:"Abstracting Load node operations",id:"abstracting-load-node-operations",level:3},{value:"Add permission authentication for Manager Open Api",id:"add-permission-authentication-for-manager-open-api",level:3},{value:"Enhanced collection of file data and k8s logs",id:"enhanced-collection-of-file-data-and-k8s-logs",level:3},{value:"DataProxy adds c++ sdk capability",id:"dataproxy-adds-c-sdk-capability",level:3},{value:"Supports multiple udf and join operators",id:"supports-multiple-udf-and-join-operators",level:3},{value:"Sort connector supports indicator reporting function",id:"sort-connector-supports-indicator-reporting-function",level:3},{value:"Manager supports the creation of resources in multiple flow directions",id:"manager-supports-the-creation-of-resources-in-multiple-flow-directions",level:3},{value:"Other features and bug fixes",id:"other-features-and-bug-fixes",level:3},{value:"Apache InLong follow-up planning",id:"apache-inlong-follow-up-planning",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache InLong is a one-stop integration framework for massive data that provides automatic, secure and reliable data transmission capabilities.\nInLong supports both batch and stream data processing at the same time, which offers great power to build data analysis, modeling and other real-time applications based on streaming data."),(0,o.kt)("h2",{id:"130-features-overview"},"1.3.0 Features Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The just-released 1.3.0 version closes about 410+ issues, contains 110+ features and 170+ optimizations."),"\nMainly include the following:"),(0,o.kt)("h3",{id:"enhance-management-and-control-capabilities"},"Enhance management and control capabilities"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added permission authentication for Open Api"),(0,o.kt)("li",{parentName:"ul"},"Added cluster heartbeat mechanism for Agent and DataProxy"),(0,o.kt)("li",{parentName:"ul"},"Manager adapts to two roles such as user and approver"),(0,o.kt)("li",{parentName:"ul"},"Abstract operations on Load nodes to support easy scaling of Load node resources"),(0,o.kt)("li",{parentName:"ul"},"Supports creation of databases and tables for SQLServer, Oracle and MySQL"),(0,o.kt)("li",{parentName:"ul"},"Enhanced functionality of the Manager client, including but not limited to user and data node management")),(0,o.kt)("h3",{id:"extended-collection-node"},"Extended collection node"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for collecting data in TubeMq"),(0,o.kt)("li",{parentName:"ul"},"Support for collecting data in Redis"),(0,o.kt)("li",{parentName:"ul"},"Support for collecting data in Doris"),(0,o.kt)("li",{parentName:"ul"},"Support to collect data in Pulsar without AdminUrl")),(0,o.kt)("h3",{id:"optimize-write-node"},"Optimize write node"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kafka Sink supports All Changelog Mode"),(0,o.kt)("li",{parentName:"ul"},"JDBC Sink supports All Changelog Mode")),(0,o.kt)("h3",{id:"support-data-conversion"},"Support data conversion"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support Union operator"),(0,o.kt)("li",{parentName:"ul"},"Support encrypted Udf"),(0,o.kt)("li",{parentName:"ul"},"Support Json Udf"),(0,o.kt)("li",{parentName:"ul"},"Support Temporal Join"),(0,o.kt)("li",{parentName:"ul"},"Support Lookup Join"),(0,o.kt)("li",{parentName:"ul"},"Support Interval Join")),(0,o.kt)("h3",{id:"strengthen-agent-function"},"Strengthen Agent function"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Support regular expression custom line break: default "\\n" line ending mark, custom regular matching line ending mark can realize multi-line merging and folding'),(0,o.kt)("li",{parentName:"ul"},"Support K8s log collection and carry cluster information"),(0,o.kt)("li",{parentName:"ul"},"Supports standard output, node log collection, and will carry container and cluster information for standard output"),(0,o.kt)("li",{parentName:"ul"},"Support full and incremental collection of file content"),(0,o.kt)("li",{parentName:"ul"},"Supports automatic heartbeat reporting and registration to Manager"),(0,o.kt)("li",{parentName:"ul"},"Support custom IP and get IP automatically")),(0,o.kt)("h3",{id:"other-optimizations"},"Other optimizations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub Action check, pipeline optimization"),(0,o.kt)("li",{parentName:"ul"},"DataProxy improves monitoring capabilities such as auditing and indicator reporting"),(0,o.kt)("li",{parentName:"ul"},"DataProxy adds c++ sdk data reporting capability"),(0,o.kt)("li",{parentName:"ul"},"Sort Support metrics report and audit report ")),(0,o.kt)("h2",{id:"130-features-details"},"1.3.0 Features Details"),(0,o.kt)("h3",{id:"abstracting-load-node-operations"},"Abstracting Load node operations"),(0,o.kt)("p",null,"Manager abstracts Load nodes to support easy expansion of Load node resources and greatly reduce the development time of a Load node\nThis part of the feature was contributed by @ciscozhou"),(0,o.kt)("h3",{id:"add-permission-authentication-for-manager-open-api"},"Add permission authentication for Manager Open Api"),(0,o.kt)("p",null,"In the old version, the Manager Open Api can be accessed anonymously, and in the new version, it is implemented using the Apache Shiro framework.\nLogin authentication method based on Basic Access Authentication, this part of the function was contributed by @woofyzhao"),(0,o.kt)("h3",{id:"enhanced-collection-of-file-data-and-k8s-logs"},"Enhanced collection of file data and k8s logs"),(0,o.kt)("p",null,"Version 1.3.0 enhances the collection of file data and k8s data, in which file collection supports regular expression custom line breaks, so that multiple lines can be merged and folded\nIn addition, the new version of Agent supports full and incremental collection of file content. This part of the function was contributed by @ganfengtan"),(0,o.kt)("h3",{id:"dataproxy-adds-c-sdk-capability"},"DataProxy adds c++ sdk capability"),(0,o.kt)("p",null,"In addition to the current java client, DataProxy has added c++ client capabilities, which are provided by @pocozh"),(0,o.kt)("h3",{id:"supports-multiple-udf-and-join-operators"},"Supports multiple udf and join operators"),(0,o.kt)("p",null,"The new version of Sort supports three kinds of Temporal Join\\ Lookup Join \\ Interval Join, this part of the function was contributed by @yunqingmoswu\nMost community users mentioned the need for encryption and decryption and Json Udf, this part of the function was contributed by @Emsnap and @Emhui"),(0,o.kt)("h3",{id:"sort-connector-supports-indicator-reporting-function"},"Sort connector supports indicator reporting function"),(0,o.kt)("p",null,"The new version of Sort Connector supports Flink built-in indicator reporting of various Connectors. External indicator systems such as Prometheus can directly obtain the number and rate of task data read and write.\nIn addition, the new version also supports InLong Audit Audit data reporting, which is contributed by @pacigong, @Emsnap, @thesumery @Oneal65 @yunqingmoswu"),(0,o.kt)("h3",{id:"manager-supports-the-creation-of-resources-in-multiple-flow-directions"},"Manager supports the creation of resources in multiple flow directions"),(0,o.kt)("p",null,"In version 1.3.0, Manager added the creation of some storage resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create Topic for SQLServer"),(0,o.kt)("li",{parentName:"ul"},"Create Oracle libraries and tables"),(0,o.kt)("li",{parentName:"ul"},"Create MySQL namespaces and tables")),(0,o.kt)("p",null,"The above are all contributed by community member @haibo-duan, thanks"),(0,o.kt)("h3",{id:"other-features-and-bug-fixes"},"Other features and bug fixes"),(0,o.kt)("p",null,"For related content, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/CHANGES.md"},"Release Notes"),", which details the features, enhancements and bug fixes of this release."),(0,o.kt)("h2",{id:"apache-inlong-follow-up-planning"},"Apache InLong follow-up planning"),(0,o.kt)("p",null,"In subsequent versions, we will expand more data sources and storages to cover more usage scenarios, and gradually improve the usability and robustness of the system, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Agent adds Redis, CloudEvents, MongoDB collection types"),(0,o.kt)("li",{parentName:"ul"},"Unified DataProxy MQ framework"),(0,o.kt)("li",{parentName:"ul"},"Full support for Apache Kafka")))}c.isMDXComponent=!0}}]);