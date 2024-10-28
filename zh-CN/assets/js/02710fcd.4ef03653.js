"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[53358],{15680:(t,e,n)=>{n.d(e,{xA:()=>o,yg:()=>c});var r=n(96540);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),m=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):g(g({},e),t)),n},o=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},y="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),y=m(n),d=a,c=y["".concat(i,".").concat(d)]||y[d]||p[d]||l;return n?r.createElement(c,g(g({ref:e},o),{},{components:n})):r.createElement(c,g({ref:e},o))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,g=new Array(l);g[0]=d;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[y]="string"==typeof t?t:a,g[1]=u;for(var m=2;m<l;m++)g[m]=n[m];return r.createElement.apply(null,g)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93002:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>g,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=n(58168),a=(n(96540),n(15680));const l={title:"TubeMQ\u6307\u6807",sidebar_position:13},g=void 0,u={unversionedId:"modules/tubemq/tubemq_metrics",id:"modules/tubemq/tubemq_metrics",title:"TubeMQ\u6307\u6807",description:"1 TubeMQ\u6307\u6807\u96c6\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/tubemq/tubemq_metrics.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/tubemq_metrics",permalink:"/zh-CN/docs/next/modules/tubemq/tubemq_metrics",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/tubemq/tubemq_metrics.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"TubeMQ\u6307\u6807",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"HTTP API \u4ecb\u7ecd",permalink:"/zh-CN/docs/next/modules/tubemq/http_access_api"},next:{title:"TubeMQ VS Kafka",permalink:"/zh-CN/docs/next/modules/tubemq/tubemq_perf_test_vs_Kafka"}},i={},m=[{value:"1 TubeMQ\u6307\u6807\u96c6\u4ecb\u7ecd",id:"1-tubemq\u6307\u6807\u96c6\u4ecb\u7ecd",level:2},{value:"2 Master\u6307\u6807\u9879",id:"2-master\u6307\u6807\u9879",level:2},{value:"3 Broker\u6307\u6807\u9879",id:"3-broker\u6307\u6807\u9879",level:2}],o={toc:m},y="wrapper";function p(t){let{components:e,...n}=t;return(0,a.yg)(y,(0,r.A)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"1-tubemq\u6307\u6807\u96c6\u4ecb\u7ecd"},"1 TubeMQ\u6307\u6807\u96c6\u4ecb\u7ecd"),(0,a.yg)("p",null,"TubeMQ\u4ece0.12.0\u7248\u672c\u5f00\u59cb\u652f\u6301Jmx\u7684\u6307\u6807\u9879\u8f93\u51fa\uff0c\u76ee\u524d\u4e3b\u8981\u5728Master\u3001Broker\u6a21\u5757\u4e0a\u589e\u52a0\u6574\u4f53\u7684\u8fd0\u884c\u6307\u6807\uff1b\u540e\u7eed\u8003\u8651\u5728Producer\u3001Consumer\u6a21\u5757\u4e0a\u589e\u52a0\u5bf9\u5e94\u6307\u6807\uff0c\u540c\u65f6Master\u3001Broker\u6a21\u5757\u7684\u6307\u6807\u6839\u636e\u9700\u8981\u8fdb\u884c\u7ee7\u7eed\u6269\u5145\u3002"),(0,a.yg)("p",null,"\u6307\u6807\u8f93\u51fa\u7684\u5f62\u5f0f\u76ee\u524d\u53ea\u652f\u6301\u6807\u51c6\u7684Jmx\u8bbf\u95ee\u65b9\u5f0f\uff0c\u63a5\u4e0b\u6765\u5c06\u589e\u52a0Prometheus\uff0c\u4ee5\u53caHTTP\u63a5\u53e3\u8bbf\u95ee\u6a21\u5f0f\u7684\u6307\u6807\u8f93\u51fa\u3002\u6307\u6807\u901a\u8fc7getMetrics()\u53cagetAndReSetMetrics()\u65b9\u6cd5\u8fdb\u884c\u83b7\u53d6\uff0cgetMetrics()\u4ec5\u8fdb\u884c\u6307\u6807\u6570\u636e\u7684\u62c9\u53d6\uff0c\u5e76\u4e0d\u6539\u53d8\u5f53\u524d\u7684\u6570\u636e\u6307\u6807\u503c\uff1bgetAndReSetMetrics()\u65b9\u6cd5\u5728\u5b8c\u6210\u5f53\u524d\u6307\u6807\u6570\u636e\u7684\u62c9\u53d6\u540e\uff0c\u5bf9\u4e8eCounter\u4ee5\u53ca\u6781\u5927\u503c\u3001\u6781\u5c0f\u503c\u7684\u6307\u6807\u8fdb\u884c\u91cd\u7f6e\uff0c\u4fbf\u4e8e\u4e1a\u52a1\u91cd\u65b0\u7edf\u8ba1\u7cfb\u7edf\u8fd0\u884c\u60c5\u51b5\u3002"),(0,a.yg)("h2",{id:"2-master\u6307\u6807\u9879"},"2 Master\u6307\u6807\u9879"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u9879"),(0,a.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u7c7b\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"consume_group_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5728\u7ebf\u7684\u6d88\u8d39\u7ec4\u4e2a\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"consume_group_timeout_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"\u81ea\u4e0a\u6b21\u7edf\u8ba1\u4ee5\u6765\u6d88\u8d39\u7ec4\u8d85\u65f6\u7684\u603b\u6b21\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"client_balance_group_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6ce8\u518c\u7684\u5ba2\u6237\u7aef\u5206\u533a\u5206\u914d\u7684\u6d88\u8d39\u7ec4\u4e2a\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"clt_balance_timeout_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"\u81ea\u4e0a\u6b21\u7edf\u8ba1\u4ee5\u6765\u5ba2\u6237\u7aef\u5206\u533a\u5206\u914d\u6d88\u8d39\u7ec4\u8d85\u65f6\u7684\u603b\u6b21\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"consumer_online_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5728\u7ebf\u7684\u6d88\u8d39\u8005\u4e2a\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"consumer_timeout_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"\u81ea\u4e0a\u6b21\u7edf\u8ba1\u4ee5\u6765\u6d88\u8d39\u8005\u8d85\u65f6\u9000\u51fa\u7684\u603b\u6b21\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"producer_online_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5728\u7ebf\u7684\u751f\u4ea7\u8005\u4e2a\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"producer_timeout_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"\u81ea\u4e0a\u6b21\u7edf\u8ba1\u4ee5\u6765\u751f\u4ea7\u8005\u8d85\u65f6\u9000\u51fa\u7684\u603b\u6b21\u6570\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"broker_configure_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u914d\u7f6e\u7684Broker\u8bb0\u5f55\u4e2a\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"broker_online_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5728\u7ebf\u7684Broker\u8282\u70b9\u4e2a\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"broker_timeout_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"\u81ea\u4e0a\u6b21\u7edf\u8ba1\u4ee5\u6765Broker\u8282\u70b9\u8d85\u65f6\u7684\u603b\u6b21\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"broker_abn_current_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u4e0a\u62a5\u5f02\u5e38\u7684Broker\u8282\u70b9\u4e2a\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"broker_abn_total_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"\u81ea\u4e0a\u6b21\u7edf\u8ba1\u4ee5\u6765\u4e0a\u62a5\u5f02\u5e38\u7684Broker\u8282\u70b9\u4e2a\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"broker_fbd_current_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u4e0a\u62a5\u5f02\u5e38\u5e76\u88ab\u7981\u6b62\u670d\u52a1\u7684Broker\u8282\u70b9\u4e2a\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"broker_fbd_total_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"\u81ea\u4e0a\u6b21\u7edf\u8ba1\u4ee5\u6765\u4e0a\u62a5\u5f02\u5e38\u5e76\u88ab\u7981\u6b62\u670d\u52a1\u7684Broker\u8282\u70b9\u4e2a\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"svrbalance_duration"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u670d\u52a1\u5668\u8d1f\u8f7d\u5747\u8861\u6301\u7eed\u7684\u65f6\u8017")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"svrbalance_duration_min"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u670d\u52a1\u5668\u8d1f\u8f7d\u5747\u8861\u6700\u5c0f\u65f6\u8017")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"svrbalance_duration_max"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u670d\u52a1\u5668\u8d1f\u8f7d\u5747\u8861\u6700\u5927\u65f6\u8017")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"svrbal_reset_duration_min"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u91cd\u7f6e\u5747\u8861\u7684\u6700\u5c0f\u5747\u8861\u65f6\u8017")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"svrbal_reset_duration_max"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u91cd\u7f6e\u5747\u8861\u7684\u6700\u5927\u5747\u8861\u65f6\u8017")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"svrbal_con_consumer_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5728\u5904\u7406\u8fde\u63a5\u4efb\u52a1\u7684\u5ba2\u6237\u7aef\u4e2a\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"svrbal_discon_consumer_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5728\u5904\u7406\u65ad\u8fde\u4efb\u52a1\u7684\u5ba2\u6237\u7aef\u4e2a\u6570")))),(0,a.yg)("h2",{id:"3-broker\u6307\u6807\u9879"},"3 Broker\u6307\u6807\u9879"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u9879"),(0,a.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u7c7b\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"fSync_duration_min"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6570\u636e\u540c\u6b65\u5230\u6587\u4ef6\u6700\u5c0f\u65f6\u8017")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"fSync_duration_max"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6570\u636e\u540c\u6b65\u5230\u6587\u4ef6\u6700\u5927\u65f6\u8017")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"zkSync_duration_min"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6570\u636e\u540c\u6b65\u5230ZooKeeper\u6700\u5c0f\u65f6\u8017")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"zkSync_duration_max"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6570\u636e\u540c\u6b65\u5230ZooKeeper\u6700\u5927\u65f6\u8017")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"zk_exception_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8fdb\u884cZooKeeper\u64cd\u4f5c\u629b\u5f02\u5e38\u7684\u6b21\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"online_timeout_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"Master\u62a5\u672c\u8282\u70b9\u5fc3\u8df3\u8d85\u65f6\u7684\u603b\u6b21\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"io_exception_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8bfb\u5199\u6570\u636e\u78c1\u76d8\u62a5IOException\u5f02\u5e38\u7684\u603b\u6b21\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"consumer_online_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6ce8\u518c\u5230\u672c\u8282\u70b9\u7684\u6d88\u8d39\u8005\u603b\u4e2a\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"consumer_timeout_cnt"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"\u672c\u8282\u70b9\u6ce8\u518c\u7684\u6d88\u8d39\u8005\u51fa\u73b0\u5fc3\u8df3\u8d85\u65f6\u7684\u603b\u6b21\u6570")))),(0,a.yg)("hr",null),(0,a.yg)("a",{href:"#top"},"Back to top"))}p.isMDXComponent=!0}}]);