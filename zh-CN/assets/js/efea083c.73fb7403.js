"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[39622],{15680:(t,e,a)=>{a.d(e,{xA:()=>m,yg:()=>N});var n=a(96540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var y=n.createContext({}),p=function(t){var e=n.useContext(y),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(y.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,y=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=p(a),o=r,N=d["".concat(y,".").concat(o)]||d[o]||u[o]||l;return a?n.createElement(N,g(g({ref:e},m),{},{components:a})):n.createElement(N,g({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=o;var i={};for(var y in e)hasOwnProperty.call(e,y)&&(i[y]=e[y]);i.originalType=t,i[d]="string"==typeof t?t:r,g[1]=i;for(var p=2;p<l;p++)g[p]=a[p];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},43073:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>y,contentTitle:()=>g,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={title:"\u53c2\u6570\u914d\u7f6e",sidebar_position:3},g=void 0,i={unversionedId:"modules/agent/configure",id:"version-2.0.0/modules/agent/configure",title:"\u53c2\u6570\u914d\u7f6e",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0.0/modules/agent/configure.md",sourceDirName:"modules/agent",slug:"/modules/agent/configure",permalink:"/zh-CN/docs/2.0.0/modules/agent/configure",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/modules/agent/configure.md",tags:[],version:"2.0.0",sidebarPosition:3,frontMatter:{title:"\u53c2\u6570\u914d\u7f6e",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/2.0.0/modules/agent/deployment"},next:{title:"\u76d1\u63a7\u6307\u6807",permalink:"/zh-CN/docs/2.0.0/modules/agent/metrics"}},y={},p=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u901a\u7528\u8bbe\u7f6e",id:"\u901a\u7528\u8bbe\u7f6e",level:2},{value:"\u672c\u5730\u7f13\u5b58\u6570\u636e\uff08\u7528\u4e8e agent \u91cd\u542f\u540e\u7684\u4efb\u52a1\u6062\u590d\uff09\u8bbe\u7f6e",id:"\u672c\u5730\u7f13\u5b58\u6570\u636e\u7528\u4e8e-agent-\u91cd\u542f\u540e\u7684\u4efb\u52a1\u6062\u590d\u8bbe\u7f6e",level:2},{value:"Job \u548c JobManager \u76f8\u5173\u8bbe\u7f6e",id:"job-\u548c-jobmanager-\u76f8\u5173\u8bbe\u7f6e",level:2},{value:"Task \u548c TaskManager \u76f8\u5173\u914d\u7f6e",id:"task-\u548c-taskmanager-\u76f8\u5173\u914d\u7f6e",level:2},{value:"InLong-Manager \u914d\u7f6e",id:"inlong-manager-\u914d\u7f6e",level:2},{value:"\u6307\u6807\u670d\u52a1\u914d\u7f6e",id:"\u6307\u6807\u670d\u52a1\u914d\u7f6e",level:2},{value:"\u5ba1\u8ba1\u670d\u52a1\u914d\u7f6e",id:"\u5ba1\u8ba1\u670d\u52a1\u914d\u7f6e",level:2}],m={toc:p},d="wrapper";function u(t){let{components:e,...a}=t;return(0,r.yg)(d,(0,n.A)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.yg)("p",null,"Agent \u76f8\u5173\u53c2\u6570\u5747\u5728\u914d\u7f6e\u6587\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"p"},"agent.properties")," \u4e2d\u8bbe\u7f6e\u3002"),(0,r.yg)("h2",{id:"\u901a\u7528\u8bbe\u7f6e"},"\u901a\u7528\u8bbe\u7f6e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"thread.pool.await.time"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f02\u5e38\u53d1\u751f\u6216\u5173\u95ed Agent \u65f6\uff0c\u7ebf\u7a0b\u7b49\u5f85\u7684\u6700\u5927\u65f6\u95f4\uff08\u79d2\uff09"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.local.ip"),(0,r.yg)("td",{parentName:"tr",align:null},"Agent \u8fdb\u7a0b\u7684\u672c\u673a IP"),(0,r.yg)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.enable.oom.exit"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53d1\u751f OutOfMemory \u5f02\u5e38\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u9000\u51fa Agent \u8fdb\u7a0b"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.custom.fixed.ip"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b9a\u5236\u5316 Agent IP"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"blank")),(0,r.yg)("td",{parentName:"tr",align:null},"\u5982\u679c ",(0,r.yg)("inlineCode",{parentName:"td"},"agent.local.ip")," \u548c",(0,r.yg)("inlineCode",{parentName:"td"},"agent.custom.fixed.ip")," \u90fd\u8bbe\u7f6e\uff0c\u4f18\u5148\u4f7f\u7528\u540e\u8005")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.fetchCenter.interval"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4ece InLong-Manager \u62c9\u53d6\u91c7\u96c6\u4efb\u52a1\u7684\u5355\u4f4d\u5468\u671f\uff08\u79d2\uff09"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.fetcher.classname"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4ece InLong-Manager \u62c9\u53d6\u91c7\u96c6\u4efb\u52a1\u7684\u5b9e\u73b0\u7c7b"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.inlong.agent.plugin.fetcher.ManagerFetcher"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u652f\u6301 Fetcher \u7684\u53ef\u63d2\u62d4\u5316\u529f\u80fd")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"channel.memory.capacity"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5185\u5b58 Channel \u4e2d\u7684\u6700\u5927\u6d88\u606f\u6761\u6570"),(0,r.yg)("td",{parentName:"tr",align:null},"5000"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"\u672c\u5730\u7f13\u5b58\u6570\u636e\u7528\u4e8e-agent-\u91cd\u542f\u540e\u7684\u4efb\u52a1\u6062\u590d\u8bbe\u7f6e"},"\u672c\u5730\u7f13\u5b58\u6570\u636e\uff08\u7528\u4e8e agent \u91cd\u542f\u540e\u7684\u4efb\u52a1\u6062\u590d\uff09\u8bbe\u7f6e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.localStore.readonly"),(0,r.yg)("td",{parentName:"tr",align:null},"\u672c\u5730\u7f13\u5b58\u6587\u4ef6\u662f\u5426\u53ea\u8bfb"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"job-\u548c-jobmanager-\u76f8\u5173\u8bbe\u7f6e"},"Job \u548c JobManager \u76f8\u5173\u8bbe\u7f6e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"job.monitor.interval"),(0,r.yg)("td",{parentName:"tr",align:null},"Job \u6307\u6807\u76d1\u63a7\u7684\u5355\u4f4d\u5468\u671f\uff08\u79d2\uff09"),(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"job.finish.checkInterval"),(0,r.yg)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u4efb\u52a1\u662f\u5426\u5b8c\u6210\u7684\u5355\u4f4d\u5468\u671f\uff08\u79d2"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"job.number.limit"),(0,r.yg)("td",{parentName:"tr",align:null},"Agent \u80fd\u540c\u65f6\u91c7\u96c6\u7684\u6700\u5927\u4efb\u52a1\u4e2a\u6570"),(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"task-\u548c-taskmanager-\u76f8\u5173\u914d\u7f6e"},"Task \u548c TaskManager \u76f8\u5173\u914d\u7f6e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"task.retry.maxCapacity"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u5927\u53ef\u91cd\u8bd5 Task \u4e2a\u6570"),(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"task.monitor.interval"),(0,r.yg)("td",{parentName:"tr",align:null},"Task \u6307\u6807\u76d1\u63a7\u7684\u5355\u4f4d\u5468\u671f\uff08\u79d2\uff09"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"task.maxRetry.time"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5355\u4e2a Task \u6700\u5927\u53ef\u91cd\u8bd5\u6b21\u6570"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"task.push.maxSecond"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5411 Channel \u5199\u6570\u636e\u7684\u6700\u5927\u7b49\u5f85\u65f6\u95f4\uff08\u79d2\uff09"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"task.pull.maxSecond"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4ece Channel \u8bfb\u6570\u636e\u7684\u6700\u5927\u7b49\u5f85\u65f6\u95f4\uff08\u79d2\uff09"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"inlong-manager-\u914d\u7f6e"},"InLong-Manager \u914d\u7f6e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.manager.vip.http.host"),(0,r.yg)("td",{parentName:"tr",align:null},"InLong-Manager \u670d\u52a1\u7684\u5730\u5740"),(0,r.yg)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.manager.vip.http.port"),(0,r.yg)("td",{parentName:"tr",align:null},"InLong-Manager \u670d\u52a1\u7684\u7aef\u53e3\u53f7"),(0,r.yg)("td",{parentName:"tr",align:null},"8083"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.manager.auth.secretId"),(0,r.yg)("td",{parentName:"tr",align:null},"InLong-Manager \u7684\u8ba4\u8bc1ID"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"blank")),(0,r.yg)("td",{parentName:"tr",align:null},"\u5982\u679c InLong-Manager \u6ca1\u6709\u5f00\u542f\u8ba4\u8bc1\u670d\u52a1\uff0c\u8fd9\u4e2a\u53c2\u6570\u65e0\u9700\u8bbe\u7f6e")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.manager.auth.secretKey"),(0,r.yg)("td",{parentName:"tr",align:null},"InLong-Manager \u7684\u8ba4\u8bc1\u5bc6\u94a5"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"blank")),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"\u6307\u6807\u670d\u52a1\u914d\u7f6e"},"\u6307\u6807\u670d\u52a1\u914d\u7f6e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"metricDomains.Agent.domainListeners"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u6807\u76d1\u542c\u7684\u7c7b\uff0c\u901a\u8fc7\u8be5\u7c7b\u540d\u53cd\u5c04\u5f00\u542f\u670d\u52a1"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.inlong.agent.metrics.AgentPrometheusMetricListener"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301\u591a\u79cd\u65b9\u5f0f\uff0c\u4e0d\u540c\u5b9e\u73b0\u7c7b\u7528\u7a7a\u683c\u5206\u5272")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"metricDomains.Agent.snapshotInterval"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5468\u671f\u6027\u4e0a\u62a5\u6307\u6807\u7684\u65f6\u9699\uff08\u6beb\u79d2\uff09"),(0,r.yg)("td",{parentName:"tr",align:null},"60000"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.prometheus.exporter.port"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5982\u679c\u4f7f\u7528 Prometheus \u4e0a\u62a5\uff0c\u8bbe\u7f6e\u7aef\u53e3\u53f7"),(0,r.yg)("td",{parentName:"tr",align:null},"9080"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"\u5ba1\u8ba1\u670d\u52a1\u914d\u7f6e"},"\u5ba1\u8ba1\u670d\u52a1\u914d\u7f6e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"audit.enable"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f InLong-Audit \u670d\u52a1"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"audit.proxys"),(0,r.yg)("td",{parentName:"tr",align:null},"InLong-Audit \u670d\u52a1\u7684\u5730\u5740"),(0,r.yg)("td",{parentName:"tr",align:null},"127.0.0.1:10081"),(0,r.yg)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);