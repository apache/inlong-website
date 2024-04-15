"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[23239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),p=r,g=c["".concat(s,".").concat(p)]||c[p]||m[p]||i;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"Overview",sidebar_position:1},l=void 0,o={unversionedId:"modules/agent/overview",id:"version-1.1.0/modules/agent/overview",title:"Overview",description:"InLong-Agent is a collection tool that supports multiple types of data sources, and is committed to achieving stable and efficient data collection functions between multiple heterogeneous data sources including File, SQL, Binlog, Metrics, etc.",source:"@site/versioned_docs/version-1.1.0/modules/agent/overview.md",sourceDirName:"modules/agent",slug:"/modules/agent/overview",permalink:"/docs/1.1.0/modules/agent/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/modules/agent/overview.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Bare Metal",permalink:"/docs/1.1.0/deployment/bare_metal"},next:{title:"Deployment",permalink:"/docs/1.1.0/modules/agent/quick_start"}},s={},u=[{value:"Design Concept",id:"design-concept",level:2},{value:"InLong-Agent Architecture",id:"inlong-agent-architecture",level:2},{value:"Different kinds of agent",id:"different-kinds-of-agent",level:2},{value:"File",id:"file",level:3},{value:"Sql",id:"sql",level:3},{value:"Binlog",id:"binlog",level:3},{value:"Monitor Metrics configuration",id:"monitor-metrics-configuration",level:2},{value:"AgentTaskMetric",id:"agenttaskmetric",level:3},{value:"JobMetrics",id:"jobmetrics",level:3},{value:"PluginMetric",id:"pluginmetric",level:3},{value:"SourceMetric",id:"sourcemetric",level:3},{value:"SinkMetric",id:"sinkmetric",level:3},{value:"Configure Prometheus",id:"configure-prometheus",level:3}],d={toc:u},c="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"InLong-Agent is a collection tool that supports multiple types of data sources, and is committed to achieving stable and efficient data collection functions between multiple heterogeneous data sources including File, SQL, Binlog, Metrics, etc."),(0,r.kt)("h2",{id:"design-concept"},"Design Concept"),(0,r.kt)("p",null,"In order to solve the problem of data source diversity, InLong-agent abstracts multiple data sources into a unified source concept, and abstracts sinks to write data. When you need to access a new data source, you only need to configure the format and reading parameters of the data source to achieve efficient reading."),(0,r.kt)("h2",{id:"inlong-agent-architecture"},"InLong-Agent Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(20921).Z,width:"1652",height:"506"})),(0,r.kt)("p",null,"The InLong Agent task is used as a data acquisition framework, constructed with a channel + plug-in architecture. Read and write the data source into a reader/writer plug-in, and then into the entire framework."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reader: Reader is the data collection module, responsible for collecting data from the data source and sending the data to the channel."),(0,r.kt)("li",{parentName:"ul"},"Writer: Writer is a data writing module, which reuses data continuously to the channel and writes the data to the destination."),(0,r.kt)("li",{parentName:"ul"},"Channel: The channel used to connect the reader and writer, and as the data transmission channel of the connection, which realizes the function of data reading and monitoring")),(0,r.kt)("h2",{id:"different-kinds-of-agent"},"Different kinds of agent"),(0,r.kt)("h3",{id:"file"},"File"),(0,r.kt)("p",null,"File collection includes the following functions:"),(0,r.kt)("p",null,"User-configured path monitoring, able to monitor the created file information\nDirectory regular filtering, support YYYYMMDD+regular expression path configuration\nBreakpoint retransmission, when InLong-Agent restarts, it can automatically re-read from the last read position to ensure no reread or missed reading."),(0,r.kt)("h3",{id:"sql"},"Sql"),(0,r.kt)("p",null,"This type of data refers to the way it is executed through SQL\nSQL regular decomposition, converted into multiple SQL statements\nExecute SQL separately, pull the data set, the pull process needs to pay attention to the impact on mysql itself\nThe execution cycle, which is generally executed regularly"),(0,r.kt)("h3",{id:"binlog"},"Binlog"),(0,r.kt)("p",null,"This type of collection reads binlog and restores data by configuring mysql slave\nNeed to pay attention to multi-threaded parsing when binlog is read, and multi-threaded parsing data needs to be labeled in order\nThe code is based on the old version of dbsync, the main modification is to change the sending of tdbus-sender to push to agent-channel for integration"),(0,r.kt)("h2",{id:"monitor-metrics-configuration"},"Monitor Metrics configuration"),(0,r.kt)("p",null,"Agent provides the ability of monitoring indicators in JMX and Prometheus mode, and JMX mode is used by default. The monitoring indicators have been registered to MBeanServer\nUsers can add similar JMX (port and authentication are adjusted according to the situation) to the startup parameters of the Agent to realize the collection of monitoring indicators from the remote end."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"-Dcom.sun.management.jmxremote\n-Djava.rmi.server.hostname=127.0.0.1\n-Dcom.sun.management.jmxremote.port=9999\n-Dcom.sun.management.jmxremote.authenticate=false\n-Dcom.sun.management.jmxremote.ssl=false\n")),(0,r.kt)("p",null,"The agent indicators are divided into the following items, and the indicators are as follows:"),(0,r.kt)("h3",{id:"agenttaskmetric"},"AgentTaskMetric"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"runningTasks"),(0,r.kt)("td",{parentName:"tr",align:null},"tasks currently being executed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retryingTasks"),(0,r.kt)("td",{parentName:"tr",align:null},"Tasks that are currently being retried")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fatalTasks"),(0,r.kt)("td",{parentName:"tr",align:null},"The total number of currently failed tasks")))),(0,r.kt)("h3",{id:"jobmetrics"},"JobMetrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"runningJobs"),(0,r.kt)("td",{parentName:"tr",align:null},"the total number of currently running jobs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fatalJobs"),(0,r.kt)("td",{parentName:"tr",align:null},"the total number of currently failed jobs")))),(0,r.kt)("h3",{id:"pluginmetric"},"PluginMetric"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readNum"),(0,r.kt)("td",{parentName:"tr",align:null},"the number of reads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendNum"),(0,r.kt)("td",{parentName:"tr",align:null},"the number of sent items")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendFailedNum"),(0,r.kt)("td",{parentName:"tr",align:null},"the number of failed sending")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readFailedNum"),(0,r.kt)("td",{parentName:"tr",align:null},"the number of failed reads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readSuccessNum"),(0,r.kt)("td",{parentName:"tr",align:null},"the number of successful reads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendSuccessNum"),(0,r.kt)("td",{parentName:"tr",align:null},"the number of successfully sent")))),(0,r.kt)("h3",{id:"sourcemetric"},"SourceMetric"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent_source_count_success"),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"the success message count in agent source since agent started")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent_source_count_fail"),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"the sink success message count in agent source since agent started")))),(0,r.kt)("h3",{id:"sinkmetric"},"SinkMetric"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent_sink_count_success"),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"the sink success message count in agent source since agent started")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent_sink_count_fail"),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"the sink failed message count in agent source since agent started")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In addition, Agent also has built-in Prometheus ",(0,r.kt)("inlineCode",{parentName:"p"},"simpleclient-hotspot"),", which is used to collect JVM-related metrics.")),(0,r.kt)("h3",{id:"configure-prometheus"},"Configure Prometheus"),(0,r.kt)("p",null,"You can declare whether to enable Prometheus and HTTPServer port in ",(0,r.kt)("inlineCode",{parentName:"p"},"agent.properties"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# the default is false\nagent.prometheus.enable=true\n# the default is 8080\nagent.prometheus.exporter.port=8080\n")))}m.isMDXComponent=!0},20921:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/architecture-4c55eb883104dccdff77e8b8e57f2678.png"}}]);