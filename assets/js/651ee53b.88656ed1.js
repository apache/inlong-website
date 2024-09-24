"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[93239],{15680:(t,e,a)=>{a.d(e,{xA:()=>p,yg:()=>s});var n=a(96540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=m(a),d=r,s=u["".concat(o,".").concat(d)]||u[d]||y[d]||l;return a?n.createElement(s,g(g({ref:e},p),{},{components:a})):n.createElement(s,g({ref:e},p))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[u]="string"==typeof t?t:r,g[1]=i;for(var m=2;m<l;m++)g[m]=a[m];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13478:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>g,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(58168),r=(a(96540),a(15680));const l={title:"Configuration",sidebar_position:3},g=void 0,i={unversionedId:"modules/agent/configure",id:"version-1.9.0/modules/agent/configure",title:"Configuration",description:"Overview",source:"@site/versioned_docs/version-1.9.0/modules/agent/configure.md",sourceDirName:"modules/agent",slug:"/modules/agent/configure",permalink:"/docs/1.9.0/modules/agent/configure",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.9.0/modules/agent/configure.md",tags:[],version:"1.9.0",sidebarPosition:3,frontMatter:{title:"Configuration",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/1.9.0/modules/agent/quick_start"},next:{title:"Monitor Metrics",permalink:"/docs/1.9.0/modules/agent/metrics"}},o={},m=[{value:"Overview",id:"overview",level:2},{value:"Common Configuration",id:"common-configuration",level:2},{value:"Local Database Cache Configuration",id:"local-database-cache-configuration",level:2},{value:"Job and JobManager Configuration",id:"job-and-jobmanager-configuration",level:2},{value:"Task and TaskManager Configuration",id:"task-and-taskmanager-configuration",level:2},{value:"InLong-Manager Configuration",id:"inlong-manager-configuration",level:2},{value:"Metric Service Configuration",id:"metric-service-configuration",level:2},{value:"Audit Service Configuration",id:"audit-service-configuration",level:2}],p={toc:m},u="wrapper";function y(t){let{components:e,...a}=t;return(0,r.yg)(u,(0,n.A)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"Uses can set customized configuration in ",(0,r.yg)("inlineCode",{parentName:"p"},"agent.properties"),"."),(0,r.yg)("h2",{id:"common-configuration"},"Common Configuration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"thread.pool.await.time"),(0,r.yg)("td",{parentName:"tr",align:null},"max wait time(s) for thread pool to terminate running"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.local.ip"),(0,r.yg)("td",{parentName:"tr",align:null},"local ip of Agent"),(0,r.yg)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.enable.oom.exit"),(0,r.yg)("td",{parentName:"tr",align:null},"whether allow Agent to automatically exit when OutOfMemory happens"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.custom.fixed.ip"),(0,r.yg)("td",{parentName:"tr",align:null},"custom fixed ip for Agent"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"blank")),(0,r.yg)("td",{parentName:"tr",align:null},"If ",(0,r.yg)("inlineCode",{parentName:"td"},"agent.local.ip")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"agent.custom.fixed.ip")," are both set, the latter is used first.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.fetchCenter.interval"),(0,r.yg)("td",{parentName:"tr",align:null},"interval time(s) of fetching Agent tasks from InLong-Manager"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.fetcher.classname"),(0,r.yg)("td",{parentName:"tr",align:null},"customized class for fetching Agent tasks from InLong-Manager"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.inlong.agent.plugin.fetcher.ManagerFetcher"),(0,r.yg)("td",{parentName:"tr",align:null},"This parameter is used for supporting the development of fetcher plug-in.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"channel.memory.capacity"),(0,r.yg)("td",{parentName:"tr",align:null},"max capacity of memory channel"),(0,r.yg)("td",{parentName:"tr",align:null},"5000"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"local-database-cache-configuration"},"Local Database Cache Configuration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.localStore.readonly"),(0,r.yg)("td",{parentName:"tr",align:null},"whether local-store-data is readonly"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.http.enable"),(0,r.yg)("td",{parentName:"tr",align:null},"whether enable HTTP service"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Start a HTTP server and getting job/agent config via http.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.http.port"),(0,r.yg)("td",{parentName:"tr",align:null},"http port of HTTP service"),(0,r.yg)("td",{parentName:"tr",align:null},"8008"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"job-and-jobmanager-configuration"},"Job and JobManager Configuration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"job.monitor.interval"),(0,r.yg)("td",{parentName:"tr",align:null},"job metric monitor interval(s)"),(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"job.finish.checkInterval"),(0,r.yg)("td",{parentName:"tr",align:null},"check interval(s) whether job is finished"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"job.number.limit"),(0,r.yg)("td",{parentName:"tr",align:null},"the amount of jobs that Agent can support"),(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"task-and-taskmanager-configuration"},"Task and TaskManager Configuration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"task.retry.maxCapacity"),(0,r.yg)("td",{parentName:"tr",align:null},"max number of retrying tasks"),(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"task.monitor.interval"),(0,r.yg)("td",{parentName:"tr",align:null},"task metric monitor interval(s)"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"task.maxRetry.time"),(0,r.yg)("td",{parentName:"tr",align:null},"max retry time for single task"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"task.push.maxSecond"),(0,r.yg)("td",{parentName:"tr",align:null},"max time(s) of pushing data to channel"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"task.pull.maxSecond"),(0,r.yg)("td",{parentName:"tr",align:null},"max time(s) of pulling data from channel"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"inlong-manager-configuration"},"InLong-Manager Configuration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.manager.vip.http.host"),(0,r.yg)("td",{parentName:"tr",align:null},"InLong-Manager virtual http host"),(0,r.yg)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.manager.vip.http.port"),(0,r.yg)("td",{parentName:"tr",align:null},"InLong-Manager virtual http port"),(0,r.yg)("td",{parentName:"tr",align:null},"8083"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.manager.auth.secretId"),(0,r.yg)("td",{parentName:"tr",align:null},"InLong-Manager authentic secretId"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"blank")),(0,r.yg)("td",{parentName:"tr",align:null},"If InLong-Manager doesn't open authentic service, this parameter can be empty.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.manager.auth.secretKey"),(0,r.yg)("td",{parentName:"tr",align:null},"InLong-Manager authentic secretKey"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"blank")),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"metric-service-configuration"},"Metric Service Configuration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"metricDomains.Agent.domainListeners"),(0,r.yg)("td",{parentName:"tr",align:null},"class name of metriclistener"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.inlong.agent.metrics.AgentPrometheusMetricListener"),(0,r.yg)("td",{parentName:"tr",align:null},"Support multiple methods of reporting metrics, and different class name is separated by spaces.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"metricDomains.Agent.snapshotInterval"),(0,r.yg)("td",{parentName:"tr",align:null},"interval(ms) of reporting metrics"),(0,r.yg)("td",{parentName:"tr",align:null},"60000"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"agent.prometheus.exporter.port"),(0,r.yg)("td",{parentName:"tr",align:null},"exporter server default port if using prometheus"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"audit-service-configuration"},"Audit Service Configuration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"audit.enable"),(0,r.yg)("td",{parentName:"tr",align:null},"whether enable InLong-Audit service"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"audit.proxys"),(0,r.yg)("td",{parentName:"tr",align:null},"audit proxy address"),(0,r.yg)("td",{parentName:"tr",align:null},"127.0.0.1:10081"),(0,r.yg)("td",{parentName:"tr",align:null})))))}y.isMDXComponent=!0}}]);