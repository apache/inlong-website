"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[63060],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const o={title:"Dashboard Guide",sidebar_position:1},r=void 0,s={unversionedId:"user_guide/dashboard_usage",id:"version-1.2.0/user_guide/dashboard_usage",title:"Dashboard Guide",description:"User Login",source:"@site/versioned_docs/version-1.2.0/user_guide/dashboard_usage.md",sourceDirName:"user_guide",slug:"/user_guide/dashboard_usage",permalink:"/docs/1.2.0/user_guide/dashboard_usage",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/user_guide/dashboard_usage.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{title:"Dashboard Guide",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Example",permalink:"/docs/1.2.0/sdk/manager-sdk/example"},next:{title:"Command-line Tools",permalink:"/docs/1.2.0/user_guide/command_line_tools"}},l={},c=[{value:"User Login",id:"user-login",level:2},{value:"Data Access",id:"data-access",level:2},{value:"Data Stream Group Information",id:"data-stream-group-information",level:3},{value:"Access Requirements",id:"access-requirements",level:4},{value:"Group Information",id:"group-information",level:4},{value:"Access Scale",id:"access-scale",level:4},{value:"Data Stream",id:"data-stream",level:3},{value:"Basic Information",id:"basic-information",level:4},{value:"Data Sources",id:"data-sources",level:4},{value:"Data Information",id:"data-information",level:4},{value:"Data Storage",id:"data-storage",level:4},{value:"My Application",id:"my-application",level:2},{value:"Application Data Access Details",id:"application-data-access-details",level:4},{value:"Data Consumption",id:"data-consumption",level:2},{value:"Consumer Information",id:"consumer-information",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"user-login"},"User Login"),(0,i.kt)("p",null,"Requires the user to enter the account name and password of the system, default account is ",(0,i.kt)("inlineCode",{parentName:"p"},"admin inlong"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"User login",src:a(21187).Z,width:"632",height:"369"})),(0,i.kt)("h2",{id:"data-access"},"Data Access"),(0,i.kt)("p",null,"The data access module displays a list of all tasks connected to the system within the current user authority, and can\nview, edit, update and delete the details of these tasks."),(0,i.kt)("p",null,"Click ","[Create]",", there are two steps to fill in data access information: Group information, data stream."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Group",src:a(70454).Z,width:"1570",height:"402"})),(0,i.kt)("h3",{id:"data-stream-group-information"},"Data Stream Group Information"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Group",src:a(865).Z,width:"819",height:"749"})),(0,i.kt)("h4",{id:"access-requirements"},"Access Requirements"),(0,i.kt)("p",null,"Access requirements require users to choose message middleware: high throughput (TUBE) or High reliability (PULSAR):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"high throughput (Inlong TubeMQ): high-throughput message transmission component, suitable for log message transmission."),(0,i.kt)("li",{parentName:"ul"},"high reliability (Apache PULSAR): high-reliability message transmission component, suitable for billing transmission.")),(0,i.kt)("h4",{id:"group-information"},"Group Information"),(0,i.kt)("p",null,"You are required to fill in basic data stream group information for access tasks."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Group Name: Unified lowercase English name, please try to include the product name and concise\nspecifications, such as pay_base"),(0,i.kt)("li",{parentName:"ul"},"Group Label: the label of the group, easy to use and retrieve, up to 128 characters"),(0,i.kt)("li",{parentName:"ul"},"Group responsible person: at least 1 people, the group responsible person can view and modify group\ninformation, add and modify all access configuration items"),(0,i.kt)("li",{parentName:"ul"},"Group introduction: Cut SMS to introduce the group background and application of this access task:")),(0,i.kt)("h4",{id:"access-scale"},"Access Scale"),(0,i.kt)("p",null,"The scale of access requires users to judge the scale of access data in advance, to allocate computing and storage\nresources later."),(0,i.kt)("h3",{id:"data-stream"},"Data Stream"),(0,i.kt)("p",null,"Click ","[Next]"," to enter the data stream information filling step. There are four modules for data stream information filling:\nbasic information, data source, data information, and data stream."),(0,i.kt)("p",null,"In the data stream process, you can click ","[Create]"," to create a new data stream:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create stream",src:a(77010).Z,width:"881",height:"587"})),(0,i.kt)("h4",{id:"basic-information"},"Basic Information"),(0,i.kt)("p",null,"You are required to fill in the basic information of the data stream in the access task:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data stream id: The prefix is automatically generated according to the product/project, which is unique in a\nspecific group and is consistent with the stream id in the data source and the storage table"),(0,i.kt)("li",{parentName:"ul"},"Data stream name: interface information description, the length is limited to 64 characters (32 Chinese characters)"),(0,i.kt)("li",{parentName:"ul"},"Data stream owner: The data stream owner can view and modify data stream information, add and modify all access\nconfiguration items"),(0,i.kt)("li",{parentName:"ul"},"Introduction to data stream: simple text introduction to data stream")),(0,i.kt)("h4",{id:"data-sources"},"Data Sources"),(0,i.kt)("p",null,"You are required to select the source of the data stream."),(0,i.kt)("p",null,"Currently, two methods of file and independent push are supported, and the detailed information of the data source can\nbe supplemented in the advanced options."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"File: The business data is in the file, and the business machine deploys InLong Agent, which is read according to\ncustomized policy rules"),(0,i.kt)("li",{parentName:"ul"},"Autonomous push: Push data to the messaging middleware through the SDK")),(0,i.kt)("h4",{id:"data-information"},"Data Information"),(0,i.kt)("p",null,"You are required to fill in the data-related information in the data stream."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Data info",src:a(91057).Z,width:"1499",height:"466"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data Format"),(0,i.kt)("li",{parentName:"ul"},"Data encoding"),(0,i.kt)("li",{parentName:"ul"},"Source field separator"),(0,i.kt)("li",{parentName:"ul"},"Source data field")),(0,i.kt)("h4",{id:"data-storage"},"Data Storage"),(0,i.kt)("p",null,"You are required to select the final flow direction of this data stream, this part is not currently supports both hive storage\nand autonomous push."),(0,i.kt)("p",null,"Add HIVE storage:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Hive info",src:a(11833).Z,width:"1192",height:"774"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Target database: hive database name (prepared to create in advance)"),(0,i.kt)("li",{parentName:"ul"},"Target table: hive table name"),(0,i.kt)("li",{parentName:"ul"},"First-level partition: the field name of the first-level subdirectory of hdfs data divided by hive data"),(0,i.kt)("li",{parentName:"ul"},"Secondary partition: the field name of the first-level subdirectory of hdfs data divided by hive data"),(0,i.kt)("li",{parentName:"ul"},"Username: hive server connection account name"),(0,i.kt)("li",{parentName:"ul"},"User password: hive server connection account password"),(0,i.kt)("li",{parentName:"ul"},"HDFS url: Hive bottom HDFS connection"),(0,i.kt)("li",{parentName:"ul"},"JDBC url: jdbc url of hive server"),(0,i.kt)("li",{parentName:"ul"},"Field related information: source field name, source field type, HIVE field name, HIVE field type, field description,\nand support deletion and addition")),(0,i.kt)("h2",{id:"my-application"},"My Application"),(0,i.kt)("p",null,"The approval management function module currently includes my application and my approval, and all tasks of data access\nand consumption application approval in the management system."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"My application",src:a(91281).Z,width:"1577",height:"510"})),(0,i.kt)("p",null,"Display the current task list submitted by the applicant for data access and consumption in the system, click ","[Details]","\nto view the current basic information and approval process of the task."),(0,i.kt)("h4",{id:"application-data-access-details"},"Application Data Access Details"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Application detail",src:a(45054).Z,width:"1554",height:"704"})),(0,i.kt)("p",null,"Data access task detailed display The current basic information of the application task includes: applicant-related\ninformation, basic information about application access, and current approval process nodes."),(0,i.kt)("h2",{id:"data-consumption"},"Data Consumption"),(0,i.kt)("p",null,"Data consumption currently does not support direct consumption access to data, and data can be consumed normally after\nthe approval process."),(0,i.kt)("p",null,"Click ","[Create]"," to enter the data consumption process, and you need to fill in information related to\nconsumption."),(0,i.kt)("h3",{id:"consumer-information"},"Consumer Information"),(0,i.kt)("p",null,"Applicants need to gradually fill in the basic consumer data stream group information related to data consumption applications in\nthe information filling module"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Consumer info",src:a(7053).Z,width:"888",height:"476"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consumer group name: The brief name of the\nconsumer must be composed of lowercase letters, numbers, and underscores. The final approval will assign the consumer\nname based on the abbreviation splicing"),(0,i.kt)("li",{parentName:"ul"},"Consumer Responsible Person: At least 2 persons are required to choose the responsible person; the responsible person\ncan view and modify the consumption information"),(0,i.kt)("li",{parentName:"ul"},"Consumer target data stream group id: you need to select the group id of the consumer data, you can click ","[Query]"," and\nselect the appropriate group id in the pop-up window"),(0,i.kt)("li",{parentName:"ul"},"Data usage: select data usage usage"),(0,i.kt)("li",{parentName:"ul"},"Data usage description: The applicant needs to briefly explain the items used and the purpose of the data according to\ntheir own consumption scenarios After completing the information, click ","[Submit]",", and the data consumption process\nwill be formally submitted to the approver before it will take effect.")))}p.isMDXComponent=!0},45054:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/application-detail-10b25da1ba95ab563c9aa59270fc90f5.png"},7053:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/consumer-info-9cd38b8e4e8af2be0d43076d2680fada.png"},70454:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-group-c2c00b83d7afb5072085ff94e6bf1634.png"},77010:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-stream-0c815737e37527832790ab4816942fc0.png"},91057:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-info-249333ddc4dea4af0b679c3c733ad6a5.png"},865:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/group-information-0a820b89a26b83451dbcc142828d34c1.png"},11833:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hive-info-e59f897e276874091039c471adabf9cb.png"},91281:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my-application-9be4dcdcadf24dfd7f1106cbda6158fd.png"},21187:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/user-login-0141b1029aff9647a3166ba2c39ef0fa.png"}}]);