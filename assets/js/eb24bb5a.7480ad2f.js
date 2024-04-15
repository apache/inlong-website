"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[41500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=o(r),m=a,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const i={},l=void 0,s={unversionedId:"modules/tubemq/tubemq-manager/quick_start",id:"version-0.11.0/modules/tubemq/tubemq-manager/quick_start",title:"quick_start",description:"Deploy TubeMQ Manager",source:"@site/versioned_docs/version-0.11.0/modules/tubemq/tubemq-manager/quick_start.md",sourceDirName:"modules/tubemq/tubemq-manager",slug:"/modules/tubemq/tubemq-manager/quick_start",permalink:"/docs/0.11.0/modules/tubemq/tubemq-manager/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.11.0/modules/tubemq/tubemq-manager/quick_start.md",tags:[],version:"0.11.0",frontMatter:{},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/0.11.0/modules/tubemq/quick_start"},next:{title:"Performance testing of TubeMQ vs Kafka",permalink:"/docs/0.11.0/modules/tubemq/tubemq_perf_test_vs_Kafka_cn"}},u={},o=[{value:"Deploy TubeMQ Manager",id:"deploy-tubemq-manager",level:2},{value:"configuration",id:"configuration",level:3},{value:"start service",id:"start-service",level:3},{value:"register TubeMQ cluster",id:"register-tubemq-cluster",level:3},{value:"Appendix: Other Operation interface",id:"appendix-other-operation-interface",level:3},{value:"cluster",id:"cluster",level:4},{value:"topic",id:"topic",level:4},{value:"add topicTask",id:"add-topictask",level:5},{value:"Query whether a topic is successfully created (business can be written)",id:"query-whether-a-topic-is-successfully-created-business-can-be-written",level:5}],c={toc:o},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"deploy-tubemq-manager"},"Deploy TubeMQ Manager"),(0,a.kt)("p",null,"All deploying files at ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-tubemq-manager")," directory."),(0,a.kt)("h3",{id:"configuration"},"configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"create ",(0,a.kt)("inlineCode",{parentName:"li"},"tubemanager")," and account in MySQL."),(0,a.kt)("li",{parentName:"ul"},"Add mysql information in conf/application.properties:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# mysql configuration for manager\nspring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/tubemanager\nspring.datasource.username=mysql_username\nspring.datasource.password=mysql_password\n")),(0,a.kt)("h3",{id:"start-service"},"start service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/start-manager.sh \n")),(0,a.kt)("h3",{id:"register-tubemq-cluster"},"register TubeMQ cluster"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vim bin/init-tube-cluster.sh\n")),(0,a.kt)("p",null,"replace the parameters below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TUBE_MANAGER_IP=  \nTUBE_MANAGER_PORT=   \nTUBE_MASTER_IP=   \nTUBE_MASTER_PORT=\nTUBE_MASTER_WEB_PORT=\nTUBE_MASTER_TOKEN=\n")),(0,a.kt)("p",null,"then run\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sh bin/init-tube-cluster.sh\n")),(0,a.kt)("p",null,"this will create a cluster with id = 1, note that this operation should not be executed repeatedly."),(0,a.kt)("h3",{id:"appendix-other-operation-interface"},"Appendix: Other Operation interface"),(0,a.kt)("h4",{id:"cluster"},"cluster"),(0,a.kt)("p",null,"Query full data of clusterId and clusterName (get)"),(0,a.kt)("p",null,"Example"),(0,a.kt)("p",null,"\u3010GET\u3011 /v1/cluster"),(0,a.kt)("p",null,"return value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"errMsg": "",\n"errCode": 0,\n"result": true,\n"data": "[{\\"clusterId\\":1,\\"clusterName\\":\\"1124\\", \\"masterIp\\":\\"127.0.0.1\\"}]"\n}\n')),(0,a.kt)("h4",{id:"topic"},"topic"),(0,a.kt)("h5",{id:"add-topictask"},"add topicTask"),(0,a.kt)("p",null,"parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"type     (required) request type, fill in the field: op_query\nclusterId   (required) Request cluster id\naddTopicTasks (required) topicTasks, create task task json\nuser    (required) After the access authorization verification needs to verify the user, it is reserved here\n")),(0,a.kt)("p",null,"addTopicTasks currently only includes one field as topicName\nAfter accessing the region design, a new region field will be added to represent brokers in different regions\nCurrently an addTopicTask will create topics in all brokers in the cluster"),(0,a.kt)("p",null,"AddTopicTasks is a list of the following objects, which can carry multiple create topic requests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"topicName (required) topic name\n")),(0,a.kt)("p",null,"Example"),(0,a.kt)("p",null,"\u3010POST\u3011 /v1/task?method=addTopicTask"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"addTopicTasks": [{"topicName": "1"}],\n"user": "test"\n}\n')),(0,a.kt)("p",null,"return json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"errMsg": "There are topic tasks [a12322] already in adding status",\n"errCode": 200,\n"result": false,\n"data": ""\n}\n')),(0,a.kt)("p",null,"If result is false, the writing task failed"),(0,a.kt)("h5",{id:"query-whether-a-topic-is-successfully-created-business-can-be-written"},"Query whether a topic is successfully created (business can be written)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"clusterId   (Required) Request cluster id\ntopicName   (Required) Query topic name\nuser    (Required) After the access authorization verification needs to verify the user, it is reserved here\n")),(0,a.kt)("p",null,"example"),(0,a.kt)("p",null,"\u3010POST\u3011 /v1/topic?method=queryCanWrite"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"topicName": "1",\n"user": "test"\n}\n')),(0,a.kt)("p",null,"return json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{ "result":true, "errCode":0, "errMsg":"OK", }\n{ "result":false, "errCode": 100, "errMsg":"topic test is not writable"}\n{ "result":false, "errCode": 101, "errMsg":"no such topic in master"}\n')),(0,a.kt)("p",null,"result is false as not writable"))}d.isMDXComponent=!0}}]);