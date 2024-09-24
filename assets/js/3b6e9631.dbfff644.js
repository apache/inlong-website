"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[94174],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),g=r,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},55069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(58168),r=(t(96540),t(15680));const o={title:"DataProxy Plugin",sidebar_position:7},i=void 0,l={unversionedId:"design_and_concept/how_to_write_plugin_dataproxy",id:"version-1.12.0/design_and_concept/how_to_write_plugin_dataproxy",title:"DataProxy Plugin",description:"Overview",source:"@site/versioned_docs/version-1.12.0/design_and_concept/how_to_write_plugin_dataproxy.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_write_plugin_dataproxy",permalink:"/docs/1.12.0/design_and_concept/how_to_write_plugin_dataproxy",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.12.0/design_and_concept/how_to_write_plugin_dataproxy.md",tags:[],version:"1.12.0",sidebarPosition:7,frontMatter:{title:"DataProxy Plugin",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Manager Plugin",permalink:"/docs/1.12.0/design_and_concept/how_to_extend_data_node_for_manager"},next:{title:"How to Build",permalink:"/docs/1.12.0/quick_start/how_to_build"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Concepts and Models",id:"concepts-and-models",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Development Process",id:"development-process",level:2},{value:"Plugin Implementation",id:"plugin-implementation",level:2},{value:"MessageQueueHandler",id:"messagequeuehandler",level:3},{value:"EventHandler",id:"eventhandler",level:3},{value:"Plugin Configuration",id:"plugin-configuration",level:2},{value:"dataproxy.conf",id:"dataproxyconf",level:3}],p={toc:d},c="wrapper";function u(e){let{components:n,...o}=e;return(0,r.yg)(c,(0,a.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"DataProxy implements an abstract unified MQ (Message Queue) sink model, so that developers and easily extend mq sink types under standard MessageQueueZoneSink. By default, Apache Pulsar, Apache Kafka and InLong TubeMQ are already integrated. This article guides developers to extend new MQ types accordingly."),(0,r.yg)("h2",{id:"concepts-and-models"},"Concepts and Models"),(0,r.yg)("p",null,"DataProxy is a message flow architecture based on Apache Flume with its ",(0,r.yg)("inlineCode",{parentName:"p"},"Source")," + ",(0,r.yg)("inlineCode",{parentName:"p"},"Channel")," + ",(0,r.yg)("inlineCode",{parentName:"p"},"Sink")," components. Here we focus on the sink layer alone."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MessageQueueZoneSink"),": The standard MQ sink provided by DataProxy, supposedly to support all kinds of MQ types."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MessageQueueHandler"),": The abstract MQ handler interface that deals with connecting, sending data to, and disconnecting the MQ cluster."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"EventHandler"),": The interface to convert MQ message header and body when required. For example to convert the data protocol. ")),(0,r.yg)("p",null,"When a new MQ cluster type needs to be integrated, developers should at least implement the MessageQueueHandler interface as plugin. Optionally they can also implement the EventHandler interface to transform data as required. The plugin classes can be specified and pulled from manager as configuration information so that new MQ type can be easily extended on the fly."),(0,r.yg)("h2",{id:"demonstration"},"Demonstration"),(0,r.yg)("p",null,"The concepts introduced above can be represented by the following figure:\n",(0,r.yg)("img",{src:t(3963).A,width:"959",height:"511"})),(0,r.yg)("h2",{id:"development-process"},"Development Process"),(0,r.yg)("p",null,"In the rest of the article we use the Kafka MQ with ProtoBuffer message format as an example. Here's what to do:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Implement the subclass plugin of MessageQueueHandler, namely KafKaHandler and its init / start /stop / send methods."),(0,r.yg)("li",{parentName:"ul"},"Implenent the EventHandler interface as ProtoBufferEventHandler and its parseHeader / parseBody method ")),(0,r.yg)("h2",{id:"plugin-implementation"},"Plugin Implementation"),(0,r.yg)("h3",{id:"messagequeuehandler"},"MessageQueueHandler"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"private class KafkaHandler implements MessageQueueHandler {\n\n    private EventHandler handler;\n    \n    @Override\n    public void init(CacheClusterConfig config, MessageQueueZoneSinkContext sinkContext) {\n        // initialize configuration and event handler\n    }\n    \n    @Override\n    public void start() {\n        // create Kafka Producer\n    }\n\n    @Override\n    public void stop() {\n       // close Kafka Producer\n    }\n\n  @Override\n    public boolean send(BatchPackProfile event) {\n        // process and send data\n    }\n}\n")),(0,r.yg)("h3",{id:"eventhandler"},"EventHandler"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class ProtoBufferEventHandler implements EventHandler {\n\n    @Override\n    public Map<String, String> parseHeader(IdTopicConfig idConfig, BatchPackProfile profile, String nodeId,\n            INLONG_COMPRESSED_TYPE compressType) {\n        // retrieve, process and convert event header\n    }\n\n    @Override\n    public byte[] parseBody(IdTopicConfig idConfig, BatchPackProfile profile, INLONG_COMPRESSED_TYPE compressType)\n            throws IOException {\n        // retrieve and repack event to ProtoBuffer message\n    }\n}\n")),(0,r.yg)("p",null,"(See the full implementation org.apache.inlong.dataproxy.sink.mq.kafka.KafkaHandler from inlong-dataproxy module)"),(0,r.yg)("h2",{id:"plugin-configuration"},"Plugin Configuration"),(0,r.yg)("h3",{id:"dataproxyconf"},"dataproxy.conf"),(0,r.yg)("p",null,"The sink configuration please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.12.0/modules/dataproxy/configuration"},"Sink Configuration Exampnle")))}u.isMDXComponent=!0},3963:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/dataproxy_mq_sink-19727a38bb02c1b70852b63593013a8b.png"}}]);