"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[54164],{15680:(t,e,a)=>{a.d(e,{xA:()=>y,yg:()=>s});var n=a(96540);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),p=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},y=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,y=i(t,["components","mdxType","originalType","parentName"]),d=p(a),o=l,s=d["".concat(u,".").concat(o)]||d[o]||m[o]||r;return a?n.createElement(s,g(g({ref:e},y),{},{components:a})):n.createElement(s,g({ref:e},y))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,g=new Array(r);g[0]=o;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:l,g[1]=i;for(var p=2;p<r;p++)g[p]=a[p];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},72457:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>g,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(58168),l=(a(96540),a(15680));const r={title:"\u53c2\u6570\u914d\u7f6e",sidebar_position:3},g=void 0,i={unversionedId:"modules/audit/configure",id:"modules/audit/configure",title:"\u53c2\u6570\u914d\u7f6e",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/audit/configure.md",sourceDirName:"modules/audit",slug:"/modules/audit/configure",permalink:"/zh-CN/docs/next/modules/audit/configure",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/audit/configure.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u53c2\u6570\u914d\u7f6e",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/audit/overview"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/next/modules/audit/quick_start"}},u={},p=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u5ba1\u8ba1\u4ee3\u7406\u5c42 Audit Proxy",id:"\u5ba1\u8ba1\u4ee3\u7406\u5c42-audit-proxy",level:2},{value:"\u901a\u7528\u8bbe\u7f6e",id:"\u901a\u7528\u8bbe\u7f6e",level:3},{value:"Sources \u76f8\u5173\u8bbe\u7f6e",id:"sources-\u76f8\u5173\u8bbe\u7f6e",level:3},{value:"Channel \u76f8\u5173\u914d\u7f6e",id:"channel-\u76f8\u5173\u914d\u7f6e",level:3},{value:"Sink \u76f8\u5173\u914d\u7f6e",id:"sink-\u76f8\u5173\u914d\u7f6e",level:3},{value:"\u5ba1\u8ba1\u5b58\u50a8\u670d\u52a1 Audit Store",id:"\u5ba1\u8ba1\u5b58\u50a8\u670d\u52a1-audit-store",level:2},{value:"MQ\u914d\u7f6e",id:"mq\u914d\u7f6e",level:3},{value:"MySQL / StarRocks \u76f8\u5173\u914d\u7f6e",id:"mysql--starrocks-\u76f8\u5173\u914d\u7f6e",level:3},{value:"OpenAPI\u670d\u52a1 Audit Service",id:"openapi\u670d\u52a1-audit-service",level:2}],y={toc:p},d="wrapper";function m(t){let{components:e,...a}=t;return(0,l.yg)(d,(0,n.A)({},y,a,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5ba1\u8ba1\u4ee3\u7406\u670d\u52a1 audit-proxy \u5728 ",(0,l.yg)("inlineCode",{parentName:"li"},"audit-proxy-{tube|pulsar|kafka}.conf")," \u4e2d\u8bbe\u7f6e\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5ba1\u8ba1\u5b58\u50a8\u670d\u52a1 audit-store \u5728 ",(0,l.yg)("inlineCode",{parentName:"li"},"application.properties")," \u4e2d\u8bbe\u7f6e\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5ba1\u8ba1 OpenAPI \u670d\u52a1 audit-service ",(0,l.yg)("inlineCode",{parentName:"li"},"\u5728audit-service.properties")," \u4e2d\u914d\u7f6e\u3002")),(0,l.yg)("h2",{id:"\u5ba1\u8ba1\u4ee3\u7406\u5c42-audit-proxy"},"\u5ba1\u8ba1\u4ee3\u7406\u5c42 Audit Proxy"),(0,l.yg)("p",null,"\u914d\u7f6e\uff08audit-proxy-{tube|pulsar|kafka}.conf\uff09"),(0,l.yg)("h3",{id:"\u901a\u7528\u8bbe\u7f6e"},"\u901a\u7528\u8bbe\u7f6e"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"agent1.sources"),(0,l.yg)("td",{parentName:"tr",align:null},"source \u7c7b\u578b"),(0,l.yg)("td",{parentName:"tr",align:null},"tcp-source"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"agent1.channels"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u7684 channel"),(0,l.yg)("td",{parentName:"tr",align:null},"ch-msg1"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"agent1.sinks"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u7684 sink"),(0,l.yg)("td",{parentName:"tr",align:null},"pulsar-sink-msg1"),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h3",{id:"sources-\u76f8\u5173\u8bbe\u7f6e"},"Sources \u76f8\u5173\u8bbe\u7f6e"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"agent1.sources.tcp-source.channels"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5b9a\u4e49 source \u4e2d\u4f7f\u7528\u5230\u7684 channel"),(0,l.yg)("td",{parentName:"tr",align:null},"ch-msg1"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"agent1.sources.tcp-source.host"),(0,l.yg)("td",{parentName:"tr",align:null},"\u670d\u52a1 ip"),(0,l.yg)("td",{parentName:"tr",align:null},"0.0.0.0"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"agent1.sources.tcp-source.port"),(0,l.yg)("td",{parentName:"tr",align:null},"\u76d1\u542c\u7aef\u53e3"),(0,l.yg)("td",{parentName:"tr",align:null},"10081"),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h3",{id:"channel-\u76f8\u5173\u914d\u7f6e"},"Channel \u76f8\u5173\u914d\u7f6e"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"agent1.channels.ch-msg1.type"),(0,l.yg)("td",{parentName:"tr",align:null},"memory channel \u7c7b\u578b"),(0,l.yg)("td",{parentName:"tr",align:null},"memory"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"agent1.channels.ch-msg2.type"),(0,l.yg)("td",{parentName:"tr",align:null},"file channel \u7c7b\u578b"),(0,l.yg)("td",{parentName:"tr",align:null},"file"),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h3",{id:"sink-\u76f8\u5173\u914d\u7f6e"},"Sink \u76f8\u5173\u914d\u7f6e"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.channel"),(0,l.yg)("td",{parentName:"tr",align:null},"sink \u7684\u4e0a\u6e38 channel \u540d\u79f0"),(0,l.yg)("td",{parentName:"tr",align:null},"ch-msg1"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.type"),(0,l.yg)("td",{parentName:"tr",align:null},"sink \u7c7b\u5b9e\u73b0"),(0,l.yg)("td",{parentName:"tr",align:null},"org.apache.inlong.audit.sink.PulsarSink"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.pulsar_server_url"),(0,l.yg)("td",{parentName:"tr",align:null},"pulsar \u96c6\u7fa4 broker \u8282\u70b9"),(0,l.yg)("td",{parentName:"tr",align:null},"pulsar://localhost:6650"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.topic"),(0,l.yg)("td",{parentName:"tr",align:null},"pulsar \u96c6\u7fa4 topic"),(0,l.yg)("td",{parentName:"tr",align:null},"persistent://public/default/inlong-audit"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.enable_token_auth"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981\u5b89\u5168\u8ba4\u8bc1"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.auth_token"),(0,l.yg)("td",{parentName:"tr",align:null},"pulsar \u8ba4\u8bc1 token"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7a7a"),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h2",{id:"\u5ba1\u8ba1\u5b58\u50a8\u670d\u52a1-audit-store"},"\u5ba1\u8ba1\u5b58\u50a8\u670d\u52a1 Audit Store"),(0,l.yg)("p",null,"\u914d\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},"application.properties")),(0,l.yg)("h3",{id:"mq\u914d\u7f6e"},"MQ\u914d\u7f6e"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"audit.config.proxy.type"),(0,l.yg)("td",{parentName:"tr",align:null},"MQ \u7c7b\u578b"),(0,l.yg)("td",{parentName:"tr",align:null},"pulsar"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"audit.pulsar.server.url"),(0,l.yg)("td",{parentName:"tr",align:null},"pulsar \u7684\u96c6\u7fa4\u5730\u5740"),(0,l.yg)("td",{parentName:"tr",align:null},"pulsar://127.0.0.1:6650"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"audit.pulsar.topic"),(0,l.yg)("td",{parentName:"tr",align:null},"pulsar topic"),(0,l.yg)("td",{parentName:"tr",align:null},"persistent://public/default/inlong-audit"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"audit.pulsar.consumer.sub.name"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u7ec4"),(0,l.yg)("td",{parentName:"tr",align:null},"inlong-audit-subscription"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"audit.pulsar.enable.auth"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981\u5b89\u5168\u8ba4\u8bc1"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"audit.pulsar.token"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1 token"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h3",{id:"mysql--starrocks-\u76f8\u5173\u914d\u7f6e"},"MySQL / StarRocks \u76f8\u5173\u914d\u7f6e"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"jdbc.url"),(0,l.yg)("td",{parentName:"tr",align:null},"StarRocks \u7684 URL"),(0,l.yg)("td",{parentName:"tr",align:null},"jdbc:mysql://127.0.0.1:8123/default"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"jdbc.username"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8d26\u53f7\u540d"),(0,l.yg)("td",{parentName:"tr",align:null},"default"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"jdbc.password"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,l.yg)("td",{parentName:"tr",align:null},"default"),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h2",{id:"openapi\u670d\u52a1-audit-service"},"OpenAPI\u670d\u52a1 Audit Service"),(0,l.yg)("p",null,"\u914d\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},"audit-service.properties")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"mysql.jdbc.url"),(0,l.yg)("td",{parentName:"tr",align:null},"mysql \u7684 URL"),(0,l.yg)("td",{parentName:"tr",align:null},"jdbc:mysql://127.0.0.1:8123/default"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"mysql.username"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8d26\u53f7\u540d"),(0,l.yg)("td",{parentName:"tr",align:null},"default"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"mysql.password"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,l.yg)("td",{parentName:"tr",align:null},"default"),(0,l.yg)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);