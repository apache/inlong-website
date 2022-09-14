"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[30926],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"Overview"},l=void 0,s={unversionedId:"modules/tubemq/tubemq-manager/overview",id:"modules/tubemq/tubemq-manager/overview",title:"Overview",description:"Operation interface",source:"@site/docs/modules/tubemq/tubemq-manager/overview.md",sourceDirName:"modules/tubemq/tubemq-manager",slug:"/modules/tubemq/tubemq-manager/overview",permalink:"/docs/next/modules/tubemq/tubemq-manager/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/tubemq/tubemq-manager/overview.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Consumer Example",permalink:"/docs/next/modules/tubemq/consumer_example"},next:{title:"Deployment",permalink:"/docs/next/modules/tubemq/tubemq-manager/quick_start"}},o={},u=[{value:"cluster",id:"cluster",level:4},{value:"topic",id:"topic",level:4},{value:"add topicTask",id:"add-topictask",level:5},{value:"Query whether a topic is successfully created (business can be written)",id:"query-whether-a-topic-is-successfully-created-business-can-be-written",level:5}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Operation interface"),(0,a.kt)("h4",{id:"cluster"},"cluster"),(0,a.kt)("p",null,"Query full data of clusterId and clusterName (get)"),(0,a.kt)("p",null,"Example"),(0,a.kt)("p",null,"\u3010GET\u3011 /v1/cluster"),(0,a.kt)("p",null,"return value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"errMsg": "",\n"errCode": 0,\n"result": true,\n"data": "[{\\"clusterId\\":1,\\"clusterName\\":\\"1124\\", \\"masterIp\\":\\"127.0.0.1\\"}]"\n}\n')),(0,a.kt)("h4",{id:"topic"},"topic"),(0,a.kt)("h5",{id:"add-topictask"},"add topicTask"),(0,a.kt)("p",null,"parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"type     (required) request type, fill in the field: op_query\nclusterId   (required) Request cluster id\naddTopicTasks (required) topicTasks, create task task json\nuser    (required) After the access authorization verification needs to verify the user, it is reserved here\n")),(0,a.kt)("p",null,"addTopicTasks currently only includes one field as topicName\nAfter accessing the region design, a new region field will be added to represent brokers in different regions\nCurrently an addTopicTask will create topics in all brokers in the cluster"),(0,a.kt)("p",null,"AddTopicTasks is a list of the following objects, which can carry multiple create topic requests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"topicName (required) topic name\n")),(0,a.kt)("p",null,"Example"),(0,a.kt)("p",null,"\u3010POST\u3011 /v1/task?method=addTopicTask"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"addTopicTasks": [{"topicName": "1"}],\n"user": "test"\n}\n')),(0,a.kt)("p",null,"return json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"errMsg": "There are topic tasks [a12322] already in adding status",\n"errCode": 200,\n"result": false,\n"data": ""\n}\n')),(0,a.kt)("p",null,"If result is false, the writing task failed"),(0,a.kt)("h5",{id:"query-whether-a-topic-is-successfully-created-business-can-be-written"},"Query whether a topic is successfully created (business can be written)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"clusterId   (Required) Request cluster id\ntopicName   (Required) Query topic name\nuser    (Required) After the access authorization verification needs to verify the user, it is reserved here\n")),(0,a.kt)("p",null,"example"),(0,a.kt)("p",null,"\u3010POST\u3011 /v1/topic?method=queryCanWrite"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"topicName": "1",\n"user": "test"\n}\n')),(0,a.kt)("p",null,"return json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{ "result":true, "errCode":0, "errMsg":"OK", }\n{ "result":false, "errCode": 100, "errMsg":"topic test is not writable"}\n{ "result":false, "errCode": 101, "errMsg":"no such topic in master"}\n')),(0,a.kt)("p",null,"result is false as not writable"))}p.isMDXComponent=!0}}]);