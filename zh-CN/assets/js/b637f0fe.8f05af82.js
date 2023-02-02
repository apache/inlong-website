"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[49098],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=i(r),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(k,u(u({ref:t},p),{},{components:r})):n.createElement(k,u({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,u[1]=o;for(var i=2;i<l;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const l={},u=void 0,o={unversionedId:"modules/tubemq/tubemq-manager/quick_start",id:"version-0.11.0/modules/tubemq/tubemq-manager/quick_start",title:"quick_start",description:"\u90e8\u7f72TubeMQ Manager",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/modules/tubemq/tubemq-manager/quick_start.md",sourceDirName:"modules/tubemq/tubemq-manager",slug:"/modules/tubemq/tubemq-manager/quick_start",permalink:"/zh-CN/docs/0.11.0/modules/tubemq/tubemq-manager/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.11.0/modules/tubemq/tubemq-manager/quick_start.md",tags:[],version:"0.11.0",frontMatter:{},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/0.11.0/modules/tubemq/quick_start"},next:{title:"TubeMQ VS Kafka\u6027\u80fd\u5bf9\u6bd4\u6d4b\u8bd5\u603b\u7ed3",permalink:"/zh-CN/docs/0.11.0/modules/tubemq/tubemq_perf_test_vs_Kafka_cn"}},s={},i=[{value:"\u90e8\u7f72TubeMQ Manager",id:"\u90e8\u7f72tubemq-manager",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",level:3},{value:"\u521d\u59cb\u5316TubeMQ\u96c6\u7fa4",id:"\u521d\u59cb\u5316tubemq\u96c6\u7fa4",level:3},{value:"\u9644\u5f55\uff1a\u5176\u5b83\u64cd\u4f5c\u63a5\u53e3",id:"\u9644\u5f55\u5176\u5b83\u64cd\u4f5c\u63a5\u53e3",level:3},{value:"cluster",id:"cluster",level:4},{value:"topic",id:"topic",level:4},{value:"\u6dfb\u52a0topicTask",id:"\u6dfb\u52a0topictask",level:4},{value:"\u67e5\u8be2\u67d0\u4e00\u4e2atopic\u662f\u5426\u521b\u5efa\u6210\u529f\uff08\u4e1a\u52a1\u53ef\u4ee5\u5199\u5165\uff09",id:"\u67e5\u8be2\u67d0\u4e00\u4e2atopic\u662f\u5426\u521b\u5efa\u6210\u529f\u4e1a\u52a1\u53ef\u4ee5\u5199\u5165",level:4}],p={toc:i};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u90e8\u7f72tubemq-manager"},"\u90e8\u7f72TubeMQ Manager"),(0,a.kt)("p",null,"\u5b89\u88c5\u6587\u4ef6\u5728inlong-tubemq-manager\u76ee\u5f55."),(0,a.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728mysql\u4e2d\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"li"},"tubemanager"),"\u6570\u636e\u548c\u76f8\u5e94\u7528\u6237."),(0,a.kt)("li",{parentName:"ul"},"\u5728conf/application.properties\u4e2d\u6dfb\u52a0mysql\u4fe1\u606f\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# mysql configuration for manager\nspring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/tubemanager\nspring.datasource.username=mysql_username\nspring.datasource.password=mysql_password\n")),(0,a.kt)("h3",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/start-manager.sh \n")),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316tubemq\u96c6\u7fa4"},"\u521d\u59cb\u5316TubeMQ\u96c6\u7fa4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vim bin/init-tube-cluster.sh\n")),(0,a.kt)("p",null,"\u66ff\u6362\u5982\u4e0b\u516d\u4e2a\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TUBE_MANAGER_IP=   //tube manager\u670d\u52a1\u542f\u52a8ip\nTUBE_MANAGER_PORT=   //tube manager\u670d\u52a1\u542f\u52a8port\nTUBE_MASTER_IP=   //tube \u96c6\u7fa4master ip\nTUBE_MASTER_PORT=\nTUBE_MASTER_WEB_PORT=\nTUBE_MASTER_TOKEN=\n")),(0,a.kt)("p",null,"\u7136\u540e\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sh bin/init-tube-cluster.sh\n")),(0,a.kt)("p",null,"\u5982\u4e0a\u64cd\u4f5c\u4f1a\u521b\u5efa\u4e00\u4e2aclusterId\u4e3a1\u7684tube\u96c6\u7fa4\uff0c\u6ce8\u610f\u8be5\u64cd\u4f5c\u53ea\u8fdb\u884c\u4e00\u6b21\uff0c\u4e4b\u540e\u91cd\u542f\u670d\u52a1\u65e0\u9700\u65b0\u5efa\u96c6\u7fa4"),(0,a.kt)("h3",{id:"\u9644\u5f55\u5176\u5b83\u64cd\u4f5c\u63a5\u53e3"},"\u9644\u5f55\uff1a\u5176\u5b83\u64cd\u4f5c\u63a5\u53e3"),(0,a.kt)("h4",{id:"cluster"},"cluster"),(0,a.kt)("p",null,"\u67e5\u8be2clusterId\u4ee5\u53caclusterName\u5168\u91cf\u6570\u636e \uff08get)"),(0,a.kt)("p",null,"\u793a\u4f8b"),(0,a.kt)("p",null,"\u3010GET\u3011 /v1/cluster"),(0,a.kt)("p",null,"\u8fd4\u56de\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"errMsg": "",\n"errCode": 0,\n"result": true,\n"data": "[{\\"clusterId\\":1,\\"clusterName\\":\\"1124\\", \\"masterIp\\":\\"127.0.0.1\\"}]"\n}\n')),(0,a.kt)("h4",{id:"topic"},"topic"),(0,a.kt)("h4",{id:"\u6dfb\u52a0topictask"},"\u6dfb\u52a0topicTask"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"type    (\u5fc5\u586b) \u8bf7\u6c42\u7c7b\u578b\uff0c\u5b57\u6bb5\u586b\u5199\uff1aop_query\nclusterId   (\u5fc5\u586b) \u8bf7\u6c42\u96c6\u7fa4id\naddTopicTasks (\u5fc5\u586b) topicTasks\uff0c\u521b\u5efatask\u4efb\u52a1json\uff0c\nuser    (\u5fc5\u586b) \u4e4b\u540e\u63a5\u5165\u6743\u9650\u9a8c\u8bc1\u9700\u8981\u9a8c\u8bc1\u7528\u6237\uff0c\u8fd9\u91cc\u9884\u7559\u51fa\u6765\n")),(0,a.kt)("p",null,"addTopicTasks\u76ee\u524d\u53ea\u5305\u62ec\u4e00\u4e2a\u5b57\u6bb5\u4e3atopicName\n\u4e4b\u540e\u63a5\u5165region\u8bbe\u8ba1\u4f1a\u65b0\u52a0\u5165region\u5b57\u6bb5\u8868\u793a\u4e0d\u540c\u533a\u57df\u7684broker\n\u76ee\u524d\u4e00\u4e2aaddTopicTask\u4f1a\u5728cluster\u4e2d\u7684\u6240\u6709broker\u521b\u5efatopic"),(0,a.kt)("p",null,"AddTopicTasks \u4e3a\u4ee5\u4e0b\u5bf9\u8c61\u7684List\uff0c\u53ef\u643a\u5e26\u591a\u4e2a\u521b\u5efatopic\u8bf7\u6c42"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"topicName   (\u5fc5\u586b) topic\u540d\u79f0\n")),(0,a.kt)("p",null,"\u793a\u4f8b"),(0,a.kt)("p",null,"\u3010POST\u3011 /v1/task?method=addTopicTask"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"addTopicTasks": [{"topicName": "1"}],\n"user": "test"\n}\n')),(0,a.kt)("p",null,"\u8fd4\u56dejson\u683c\u5f0f\u6837\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"errMsg": "There are topic tasks [a12322] already in adding status",\n"errCode": 200,\n"result": false,\n"data": ""\n}\n')),(0,a.kt)("p",null,"result\u4e3afalse\u4e3a\u5199\u5165task\u5931\u8d25"),(0,a.kt)("h4",{id:"\u67e5\u8be2\u67d0\u4e00\u4e2atopic\u662f\u5426\u521b\u5efa\u6210\u529f\u4e1a\u52a1\u53ef\u4ee5\u5199\u5165"},"\u67e5\u8be2\u67d0\u4e00\u4e2atopic\u662f\u5426\u521b\u5efa\u6210\u529f\uff08\u4e1a\u52a1\u53ef\u4ee5\u5199\u5165\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"clusterId   (\u5fc5\u586b) \u8bf7\u6c42\u96c6\u7fa4id\ntopicName   (\u5fc5\u586b) \u67e5\u8be2topic\u540d\u79f0\nuser    (\u5fc5\u586b) \u4e4b\u540e\u63a5\u5165\u6743\u9650\u9a8c\u8bc1\u9700\u8981\u9a8c\u8bc1\u7528\u6237\uff0c\u8fd9\u91cc\u9884\u7559\u51fa\u6765\n")),(0,a.kt)("p",null,"\u793a\u4f8b"),(0,a.kt)("p",null,"\u3010POST\u3011 /v1/topic?method=queryCanWrite"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"topicName": "1",\n"user": "test"\n}\n')),(0,a.kt)("p",null,"\u8fd4\u56dejson\u683c\u5f0f\u6837\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{ "result":true, "errCode":0, "errMsg":"OK", }\n{ "result":false, "errCode": 100, "errMsg":"topic test is not writable"}\n{ "result":false, "errCode": 101, "errMsg":"no such topic in master"}\n')),(0,a.kt)("p",null,"result\u4e3afalse\u4e3a\u4e0d\u53ef\u5199"))}c.isMDXComponent=!0}}]);