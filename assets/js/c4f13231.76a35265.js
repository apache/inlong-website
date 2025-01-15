"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[62810],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return t?n.createElement(y,s(s({ref:r},c),{},{components:t})):n.createElement(y,s({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8823:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(58168),a=(t(96540),t(15680));const i={title:"Overview",sidebar_position:1},s=void 0,o={unversionedId:"modules/tubemq/tubemq-manager/overview",id:"version-2.0.0/modules/tubemq/tubemq-manager/overview",title:"Overview",description:"Operation interface",source:"@site/versioned_docs/version-2.0.0/modules/tubemq/tubemq-manager/overview.md",sourceDirName:"modules/tubemq/tubemq-manager",slug:"/modules/tubemq/tubemq-manager/overview",permalink:"/docs/2.0.0/modules/tubemq/tubemq-manager/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/modules/tubemq/tubemq-manager/overview.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Consumer Example",permalink:"/docs/2.0.0/modules/tubemq/consumer_example"},next:{title:"Deployment",permalink:"/docs/2.0.0/modules/tubemq/tubemq-manager/deployment"}},l={},u=[{value:"cluster",id:"cluster",level:4},{value:"topic",id:"topic",level:4},{value:"add topicTask",id:"add-topictask",level:5},{value:"Query whether a topic is successfully created (business can be written)",id:"query-whether-a-topic-is-successfully-created-business-can-be-written",level:5}],c={toc:u},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Operation interface"),(0,a.yg)("h4",{id:"cluster"},"cluster"),(0,a.yg)("p",null,"Query full data of clusterId and clusterName (get)"),(0,a.yg)("p",null,"Example"),(0,a.yg)("p",null,"\u3010GET\u3011 /v1/cluster"),(0,a.yg)("p",null,"return value"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n"errMsg": "",\n"errCode": 0,\n"result": true,\n"data": "[{\\"clusterId\\":1,\\"clusterName\\":\\"1124\\", \\"masterIp\\":\\"127.0.0.1\\"}]"\n}\n')),(0,a.yg)("h4",{id:"topic"},"topic"),(0,a.yg)("h5",{id:"add-topictask"},"add topicTask"),(0,a.yg)("p",null,"parameter:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"type     (required) request type, fill in the field: op_query\nclusterId   (required) Request cluster id\naddTopicTasks (required) topicTasks, create task task json\nuser    (required) After the access authorization verification needs to verify the user, it is reserved here\n")),(0,a.yg)("p",null,"addTopicTasks currently only includes one field as topicName\nAfter accessing the region design, a new region field will be added to represent brokers in different regions\nCurrently an addTopicTask will create topics in all brokers in the cluster"),(0,a.yg)("p",null,"AddTopicTasks is a list of the following objects, which can carry multiple create topic requests"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"topicName (required) topic name\n")),(0,a.yg)("p",null,"Example"),(0,a.yg)("p",null,"\u3010POST\u3011 /v1/task?method=addTopicTask"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"addTopicTasks": [{"topicName": "1"}],\n"user": "test"\n}\n')),(0,a.yg)("p",null,"return json"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n"errMsg": "There are topic tasks [a12322] already in adding status",\n"errCode": 200,\n"result": false,\n"data": ""\n}\n')),(0,a.yg)("p",null,"If result is false, the writing task failed"),(0,a.yg)("h5",{id:"query-whether-a-topic-is-successfully-created-business-can-be-written"},"Query whether a topic is successfully created (business can be written)"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"clusterId   (Required) Request cluster id\ntopicName   (Required) Query topic name\nuser    (Required) After the access authorization verification needs to verify the user, it is reserved here\n")),(0,a.yg)("p",null,"example"),(0,a.yg)("p",null,"\u3010POST\u3011 /v1/topic?method=queryCanWrite"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"topicName": "1",\n"user": "test"\n}\n')),(0,a.yg)("p",null,"return json"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{ "result":true, "errCode":0, "errMsg":"OK", }\n{ "result":false, "errCode": 100, "errMsg":"topic test is not writable"}\n{ "result":false, "errCode": 101, "errMsg":"no such topic in master"}\n')),(0,a.yg)("p",null,"result is false as not writable"))}d.isMDXComponent=!0}}]);