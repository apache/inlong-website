"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[92645],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),s=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(g.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),c=a,d=p["".concat(g,".").concat(c)]||p[c]||m[c]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const i={title:"Monitor Metrics",sidebar_position:3},l=void 0,o={unversionedId:"modules/agent/metrics",id:"version-1.10.0/modules/agent/metrics",title:"Monitor Metrics",description:"JMX Configuration",source:"@site/versioned_docs/version-1.10.0/modules/agent/metrics.md",sourceDirName:"modules/agent",slug:"/modules/agent/metrics",permalink:"/docs/1.10.0/modules/agent/metrics",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.10.0/modules/agent/metrics.md",tags:[],version:"1.10.0",sidebarPosition:3,frontMatter:{title:"Monitor Metrics",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/1.10.0/modules/agent/configure"},next:{title:"Overview",permalink:"/docs/1.10.0/modules/dataproxy/overview"}},g={},s=[{value:"JMX Configuration",id:"jmx-configuration",level:2},{value:"Prometheus Configuration",id:"prometheus-configuration",level:2},{value:"Custom Configuration",id:"custom-configuration",level:2},{value:"Appendix: Metrics Items",id:"appendix-metrics-items",level:2},{value:"AgentTaskMetric",id:"agenttaskmetric",level:3},{value:"JobMetrics",id:"jobmetrics",level:3},{value:"PluginMetric",id:"pluginmetric",level:3},{value:"SourceMetric",id:"sourcemetric",level:3},{value:"SinkMetric",id:"sinkmetric",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"jmx-configuration"},"JMX Configuration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"# The listener of JMX is AgentJmxMetricListener\nagent.domainListeners=org.apache.inlong.agent.metrics.AgentJmxMetricListener\n")),(0,a.yg)("h2",{id:"prometheus-configuration"},"Prometheus Configuration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"# The listener of Prometheus is AgentPrometheusMetricListener\nagent.domainListeners=org.apache.inlong.agent.metrics.AgentPrometheusMetricListener\n# the default is 9080\nagent.prometheus.exporter.port=9080\n")),(0,a.yg)("h2",{id:"custom-configuration"},"Custom Configuration"),(0,a.yg)("p",null,"If the user wants to monitor the indicator capabilities in other ways, You can inherit the ",(0,a.yg)("inlineCode",{parentName:"p"},"org.apache.inlong.agent.metrics.AgentMetricBaseListener"),"  class and implement it,\nand finally configure the ",(0,a.yg)("inlineCode",{parentName:"p"},"agent.domainListeners")," property in the ",(0,a.yg)("inlineCode",{parentName:"p"},"agent.properties")," file. "),(0,a.yg)("h2",{id:"appendix-metrics-items"},"Appendix: Metrics Items"),(0,a.yg)("h3",{id:"agenttaskmetric"},"AgentTaskMetric"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"property"),(0,a.yg)("th",{parentName:"tr",align:null},"description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"runningTasks"),(0,a.yg)("td",{parentName:"tr",align:null},"tasks currently being executed")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"retryingTasks"),(0,a.yg)("td",{parentName:"tr",align:null},"Tasks that are currently being retried")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"fatalTasks"),(0,a.yg)("td",{parentName:"tr",align:null},"The total number of currently failed tasks")))),(0,a.yg)("h3",{id:"jobmetrics"},"JobMetrics"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"property"),(0,a.yg)("th",{parentName:"tr",align:null},"description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"runningJobs"),(0,a.yg)("td",{parentName:"tr",align:null},"the total number of currently running jobs")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"fatalJobs"),(0,a.yg)("td",{parentName:"tr",align:null},"the total number of currently failed jobs")))),(0,a.yg)("h3",{id:"pluginmetric"},"PluginMetric"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"property"),(0,a.yg)("th",{parentName:"tr",align:null},"description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"readNum"),(0,a.yg)("td",{parentName:"tr",align:null},"the number of reads")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sendNum"),(0,a.yg)("td",{parentName:"tr",align:null},"the number of sent items")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sendFailedNum"),(0,a.yg)("td",{parentName:"tr",align:null},"the number of failed sending")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"readFailedNum"),(0,a.yg)("td",{parentName:"tr",align:null},"the number of failed reads")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"readSuccessNum"),(0,a.yg)("td",{parentName:"tr",align:null},"the number of successful reads")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sendSuccessNum"),(0,a.yg)("td",{parentName:"tr",align:null},"the number of successfully sent")))),(0,a.yg)("h3",{id:"sourcemetric"},"SourceMetric"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"property"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"agent_source_count_success"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"the success message count in agent source since agent started")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"agent_source_count_fail"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"the sink success message count in agent source since agent started")))),(0,a.yg)("h3",{id:"sinkmetric"},"SinkMetric"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"property"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"agent_sink_count_success"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"the sink success message count in agent source since agent started")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"agent_sink_count_fail"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"the sink failed message count in agent source since agent started")))))}m.isMDXComponent=!0}}]);