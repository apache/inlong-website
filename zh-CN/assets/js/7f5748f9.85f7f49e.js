"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[74737],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),k=o(n),m=l,g=k["".concat(p,".").concat(m)]||k[m]||u[m]||r;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=m;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[k]="string"==typeof t?t:l,i[1]=d;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90505:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const r={title:"\u603b\u89c8",sidebar_position:1},i=void 0,d={unversionedId:"modules/audit/overview",id:"version-1.6.0/modules/audit/overview",title:"\u603b\u89c8",description:"InLong\u5ba1\u8ba1\u662f\u72ec\u7acb\u4e8eInLong\u7684\u4e00\u4e2a\u5b50\u7cfb\u7edf\uff0c\u5bf9InLong\u7cfb\u7edf\u7684Agent\u3001DataProxy\u3001Sort\u6a21\u5757\u7684\u5165\u6d41\u91cf\u3001\u51fa\u6d41\u91cf\u8fdb\u884c\u5b9e\u65f6\u5ba1\u8ba1\u5bf9\u8d26\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.6.0/modules/audit/overview.md",sourceDirName:"modules/audit",slug:"/modules/audit/overview",permalink:"/zh-CN/docs/modules/audit/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.6.0/modules/audit/overview.md",tags:[],version:"1.6.0",sidebarPosition:1,frontMatter:{title:"\u603b\u89c8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pulsar2kafka Example",permalink:"/zh-CN/docs/modules/sort-standalone/pulsar2kafka"},next:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-CN/docs/modules/audit/configure"}},p={},o=[{value:"\u67b6\u6784",id:"\u67b6\u6784",level:2},{value:"\u5ba1\u8ba1\u7ef4\u5ea6",id:"\u5ba1\u8ba1\u7ef4\u5ea6",level:2},{value:"\u5ba1\u8ba1\u9879ID",id:"\u5ba1\u8ba1\u9879id",level:2},{value:"\u6570\u636e\u4f20\u8f93\u534f\u8bae",id:"\u6570\u636e\u4f20\u8f93\u534f\u8bae",level:2},{value:"\u5ba1\u8ba1SDK\u5b9e\u73b0\u7ec6\u8282",id:"\u5ba1\u8ba1sdk\u5b9e\u73b0\u7ec6\u8282",level:2},{value:"\u76ee\u6807",id:"\u76ee\u6807",level:3},{value:"\u4e3b\u8981\u903b\u8f91\u56fe",id:"\u4e3b\u8981\u903b\u8f91\u56fe",level:3},{value:"\u670d\u52a1\u53d1\u73b0",id:"\u670d\u52a1\u53d1\u73b0",level:3},{value:"\u5bb9\u707e\u903b\u8f91",id:"\u5bb9\u707e\u903b\u8f91",level:3},{value:"\u63a5\u5165\u5c42\u5b9e\u73b0\u7ec6\u8282",id:"\u63a5\u5165\u5c42\u5b9e\u73b0\u7ec6\u8282",level:2},{value:"\u76ee\u6807",id:"\u76ee\u6807-1",level:3},{value:"\u4e3b\u8981\u903b\u8f91",id:"\u4e3b\u8981\u903b\u8f91",level:3},{value:"Elasticsearch\u5206\u53d1\u5b9e\u73b0",id:"elasticsearch\u5206\u53d1\u5b9e\u73b0",level:2},{value:"\u76ee\u6807",id:"\u76ee\u6807-2",level:3},{value:"\u4e3b\u8981\u903b\u8f91\u56fe",id:"\u4e3b\u8981\u903b\u8f91\u56fe-1",level:3},{value:"\u7d22\u5f15\u8bbe\u8ba1",id:"\u7d22\u5f15\u8bbe\u8ba1",level:3},{value:"\u7d22\u5f15\u540d",id:"\u7d22\u5f15\u540d",level:4},{value:"\u7d22\u5f15\u5b57\u6bb5\u683c\u5f0f",id:"\u7d22\u5f15\u5b57\u6bb5\u683c\u5f0f",level:4},{value:"\u7d22\u5f15\u7684\u5b58\u50a8\u5468\u671f",id:"\u7d22\u5f15\u7684\u5b58\u50a8\u5468\u671f",level:4},{value:"Elasticsearch\u5199\u5165\u8bbe\u8ba1",id:"elasticsearch\u5199\u5165\u8bbe\u8ba1",level:2},{value:"inlong_group_id\u3001inlong_stream_id\u3001\u5ba1\u8ba1ID\u4e0eElasticsearch\u7d22\u5f15\u7684\u5173\u7cfb",id:"inlong_group_idinlong_stream_id\u5ba1\u8ba1id\u4e0eelasticsearch\u7d22\u5f15\u7684\u5173\u7cfb",level:3},{value:"\u5199\u5165\u8def\u7531\u7b56\u7565",id:"\u5199\u5165\u8def\u7531\u7b56\u7565",level:3},{value:"\u53ef\u9009\u6309doc_id\u53bb\u91cd",id:"\u53ef\u9009\u6309doc_id\u53bb\u91cd",level:3},{value:"\u4f7f\u7528bulk\u6279\u91cf\u65b9\u5f0f",id:"\u4f7f\u7528bulk\u6279\u91cf\u65b9\u5f0f",level:3},{value:"MySQL\u5206\u53d1\u5b9e\u73b0",id:"mysql\u5206\u53d1\u5b9e\u73b0",level:2},{value:"\u76ee\u6807",id:"\u76ee\u6807-3",level:3},{value:"\u4e3b\u8981\u903b\u8f91\u56fe",id:"\u4e3b\u8981\u903b\u8f91\u56fe-2",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:3},{value:"ClickHouse\u5206\u53d1\u5b9e\u73b0",id:"clickhouse\u5206\u53d1\u5b9e\u73b0",level:2},{value:"\u76ee\u6807",id:"\u76ee\u6807-4",level:3},{value:"\u4e3b\u8981\u903b\u8f91\u56fe",id:"\u4e3b\u8981\u903b\u8f91\u56fe-3",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd-1",level:3},{value:"\u5ba1\u8ba1\u4f7f\u7528\u63a5\u53e3\u8bbe\u8ba1",id:"\u5ba1\u8ba1\u4f7f\u7528\u63a5\u53e3\u8bbe\u8ba1",level:2},{value:"\u4e3b\u8981\u903b\u8f91\u56fe",id:"\u4e3b\u8981\u903b\u8f91\u56fe-4",level:3},{value:"UI \u754c\u9762\u5c55\u793a",id:"ui-\u754c\u9762\u5c55\u793a",level:3},{value:"\u4e3b\u8981\u903b\u8f91\u56fe",id:"\u4e3b\u8981\u903b\u8f91\u56fe-5",level:3}],s={toc:o},k="wrapper";function u(t){let{components:e,...r}=t;return(0,l.kt)(k,(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"InLong\u5ba1\u8ba1\u662f\u72ec\u7acb\u4e8eInLong\u7684\u4e00\u4e2a\u5b50\u7cfb\u7edf\uff0c\u5bf9InLong\u7cfb\u7edf\u7684Agent\u3001DataProxy\u3001Sort\u6a21\u5757\u7684\u5165\u6d41\u91cf\u3001\u51fa\u6d41\u91cf\u8fdb\u884c\u5b9e\u65f6\u5ba1\u8ba1\u5bf9\u8d26\u3002\n\u5bf9\u8d26\u7684\u7c92\u5ea6\u6709\u5206\u949f\u3001\u5c0f\u65f6\u3001\u5929\u4e09\u79cd\u7c92\u5ea6\u3002"),(0,l.kt)("p",null,"\u5ba1\u8ba1\u5bf9\u8d26\u4ee5\u65e5\u5fd7\u4e0a\u62a5\u65f6\u95f4\u4e3a\u7edf\u4e00\u7684\u53e3\u5f84\uff0c\u53c2\u4e0e\u5ba1\u8ba1\u7684\u5404\u4e2a\u670d\u52a1\u5c06\u6309\u7167\u76f8\u540c\u7684\u65e5\u5fd7\u65f6\u95f4\u8fdb\u884c\u5b9e\u65f6\u5bf9\u8d26\u3002\u901a\u8fc7\u5ba1\u8ba1\u5bf9\u8d26\uff0c\u6211\u4eec\u53ef\u4ee5\u6e05\u6670\u7684\u4e86\u89e3InLong\n\u5404\u4e2a\u6a21\u5757\u7684\u4f20\u8f93\u60c5\u51b5\uff0c\u4ee5\u53ca\u6570\u636e\u6d41\u662f\u5426\u6709\u4e22\u5931\u6216\u8005\u91cd\u590d"),(0,l.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(57785).Z,width:"1236",height:"214"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5ba1\u8ba1SDK\u5d4c\u5957\u5728\u9700\u8981\u5ba1\u8ba1\u7684\u670d\u52a1\uff0c\u5bf9\u670d\u52a1\u8fdb\u884c\u5ba1\u8ba1\uff0c\u5c06\u5ba1\u8ba1\u7ed3\u679c\u53d1\u9001\u5230\u5ba1\u8ba1\u63a5\u5165\u5c42\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5ba1\u8ba1\u63a5\u5165\u5c42\u5c06\u5ba1\u8ba1\u6570\u636e\u5199\u5230 MQ(Pulsar\u3001Kafka \u6216\u8005 TubeMQ)\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5206\u53d1\u670d\u52a1\u6d88\u8d39 MQ \u7684\u5ba1\u8ba1\u6570\u636e\uff0c\u5c06\u5ba1\u8ba1\u6570\u636e\u5199\u5230 MySQL\u3001Elasticsearch\u3001ClickHouse\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u63a5\u53e3\u5c42\u5c06 MySQL\u3001Elasticsearch\u3001ClickHouse \u7684\u6570\u636e\u8fdb\u884c\u5c01\u88c5\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5e94\u7528\u573a\u666f\u4e3b\u8981\u5305\u62ec\u62a5\u8868\u5c55\u793a\u3001\u5ba1\u8ba1\u5bf9\u8d26\u7b49\u7b49\u3002")),(0,l.kt)("h2",{id:"\u5ba1\u8ba1\u7ef4\u5ea6"},"\u5ba1\u8ba1\u7ef4\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u673a\u5668ip"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668ID"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ebf\u7a0bID"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u65f6\u95f4(\u5206\u949f)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba1\u8ba1ID"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong_group_id"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong_stream_id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6761\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f20\u8f93\u65f6\u5ef6(ms)")))),(0,l.kt)("h2",{id:"\u5ba1\u8ba1\u9879id"},"\u5ba1\u8ba1\u9879ID"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u6a21\u5757\u7684\u63a5\u6536\u4e0e\u53d1\u9001\u5206\u522b\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684\u5ba1\u8ba1\u9879ID"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Inlong\u670d\u52a1\u6a21\u5757"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5ba1\u8ba1ID"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inlong api\u63a5\u6536\u6210\u529f"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inlong api\u53d1\u9001\u6210\u529f"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inlong agent\u63a5\u6536\u6210\u529f"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inlong agent\u53d1\u9001\u6210\u529f"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inlong DataProxy\u63a5\u6536\u6210\u529f"),(0,l.kt)("td",{parentName:"tr",align:null},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inlong DataProxy\u53d1\u9001\u6210\u529f"),(0,l.kt)("td",{parentName:"tr",align:null},"6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inlong\u5206\u53d1\u670d\u52a11\u63a5\u6536\u6210\u529f"),(0,l.kt)("td",{parentName:"tr",align:null},"7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inlong\u5206\u53d1\u670d\u52a11\u53d1\u9001\u6210\u529f"),(0,l.kt)("td",{parentName:"tr",align:null},"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inlong\u5206\u53d1\u670d\u52a12\u63a5\u6536\u6210\u529f"),(0,l.kt)("td",{parentName:"tr",align:null},"9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inlong\u5206\u53d1\u670d\u52a12\u53d1\u9001\u6210\u529f"),(0,l.kt)("td",{parentName:"tr",align:null},"10")))),(0,l.kt)("h2",{id:"\u6570\u636e\u4f20\u8f93\u534f\u8bae"},"\u6570\u636e\u4f20\u8f93\u534f\u8bae"),(0,l.kt)("p",null,"sdk\u3001\u63a5\u5165\u5c42\u3001\u5206\u53d1\u5c42\u4e4b\u95f4\u7684\u4f20\u8f93\u534f\u8bae\u4e3aProtocol Buffers"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},'syntax = "proto3";\n\npackage org.apache.inlong.audit.protocol;\n\nmessage BaseCommand {\n    enum Type {\n        PING          = 0;\n        PONG          = 1;\n        AUDITREQUEST  = 2;\n        AUDITREPLY    = 3;\n    }\n    Type type                            = 1;\n    optional AuditRequest audit_request  = 2;\n    optional AuditReply audit_reply      = 3;\n    optional Ping ping                   = 4;\n    optional Pong pong                   = 5;\n}\n\nmessage Ping {\n}\n\nmessage Pong {\n}\n\nmessage AuditRequest {\n  AuditMessageHeader msg_header = 1;   //\u5305\u5934\n  repeated AuditMessageBody msg_body = 2;   //\u5305\u4f53\n}\n\nmessage AuditMessageHeader {\n  string ip = 1;            //sdk\u5ba2\u6237\u7aefip\n  string docker_id = 2;     //sdk\u6240\u5728\u5bb9\u5668ID\n  string thread_id = 3;     //sdk\u6240\u5728\u7684\u7ebf\u7a0bID\n  uint64 sdk_ts = 4;        //sdk\u4e0a\u62a5\u65f6\u95f4\n  uint64 packet_id = 5;     //sdk\u4e0a\u62a5\u7684\u5305ID\n}\n\nmessage AuditMessageBody {\n  uint64 log_ts = 1;    //\u65e5\u5fd7\u65f6\u95f4\n  string inlong_group_id= 2;   //inlong_group_id\n  string inlong_stream_id= 3; //inlong_stream_id\n  string audit_id = 4;   //\u5ba1\u8ba1ID\n  uint64 count = 5;     //\u6761\u6570\n  uint64 size = 6;      //\u5927\u5c0f\n  int64  delay = 7;      //\u603b\u4f20\u8f93\u5ef6\u65f6\n}\n\nmessage AuditReply {\n  enum RSP_CODE {\n    SUCCESS  = 0;  //\u6210\u529f\n    FAILED   = 1;   //\u5931\u8d25\n    DISASTER = 2; //\u5bb9\u707e\n  }\n  RSP_CODE rsp_code = 1;   //\u670d\u52a1\u7aef\u8fd4\u56de\u7801\n  optional string message = 2;\n}\n')),(0,l.kt)("h2",{id:"\u5ba1\u8ba1sdk\u5b9e\u73b0\u7ec6\u8282"},"\u5ba1\u8ba1SDK\u5b9e\u73b0\u7ec6\u8282"),(0,l.kt)("h3",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"1.\u652f\u6301\u672c\u5730\u5bb9\u707e")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"2.\u6570\u636e\u552f\u4e00\u6027")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"3.\u51cf\u5c11\u5f02\u5e38\u91cd\u542f\u5bfc\u81f4\u7684\u6570\u636e\u4e22\u5931")),"  "),(0,l.kt)("h3",{id:"\u4e3b\u8981\u903b\u8f91\u56fe"},"\u4e3b\u8981\u903b\u8f91\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(5800).Z,width:"849",height:"1447"}),(0,l.kt)("br",{parentName:"p"}),"\n","1.sdk\u5bf9\u5916\u63d0\u4f9badd\u63a5\u53e3\uff0c\u53c2\u6570\u4e3a:audit_id, inlong_group_id\uff0cinlong_stream_id\uff0c\u6761\u6570\uff0c\u5927\u5c0f\n2.sdk\u4ee5\u65e5\u5fd7\u65f6\u95f4+audit_id+inlong_group_id+inlong_stream_id\u4e3akey\uff0c\u8fdb\u884c\u5b9e\u65f6\u7edf\u8ba1",(0,l.kt)("br",{parentName:"p"}),"\n","3.\u6ee1\u8db3\u53d1\u9001\u5468\u671f\u6216\u8005\u4e1a\u52a1\u7a0b\u5e8f\u4e3b\u52a8\u89e6\u53d1\uff0cSDK\u5c06\u7edf\u8ba1\u7ed3\u679c\u8fdb\u884cPB\u534f\u8bae\u7ec4\u5305\uff0c\u53d1\u9001\u5ba1\u8ba1\u63a5\u5165\u5c42",(0,l.kt)("br",{parentName:"p"}),"\n","4.\u5982\u679c(4)\u53d1\u9001\u5931\u8d25\uff0c\u5219\u653e\u5165\u5931\u8d25\u961f\u5217\uff0c\u4e0b\u4e2a\u5468\u671f\u7ee7\u7eed\u53d1\u9001",(0,l.kt)("br",{parentName:"p"}),"\n","5.\u5f53\u5931\u8d25\u961f\u5217\u5927\u4e8e\u9608\u503c\u65f6\uff0c\u901a\u8fc7\u672c\u5730\u6587\u4ef6\u8fdb\u884c\u5bb9\u707e  "),(0,l.kt)("h3",{id:"\u670d\u52a1\u53d1\u73b0"},"\u670d\u52a1\u53d1\u73b0"),(0,l.kt)("p",null,"\u5ba1\u8ba1sdk\u4e0e\u63a5\u5165\u5c42\u4e4b\u95f4\u7684\u540d\u5b57\u53d1\u73b0\uff0c\u652f\u6301\u63d2\u4ef6\u5316\uff0c\u5305\u62ec\u57df\u540d\u3001vip\u7b49"),(0,l.kt)("h3",{id:"\u5bb9\u707e\u903b\u8f91"},"\u5bb9\u707e\u903b\u8f91"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(55673).Z,width:"276",height:"811"}),(0,l.kt)("br",{parentName:"p"}),"\n","1.sdk\u53d1\u9001\u63a5\u5165\u5c42\u5931\u8d25\u65f6\uff0c\u4f1a\u653e\u5165\u5931\u8d25\u961f\u5217",(0,l.kt)("br",{parentName:"p"}),"\n","2.\u5931\u8d25\u961f\u5217\u8fbe\u5230\u9608\u503c\u65f6\uff0c\u5c06\u5199\u5230\u672c\u5730\u5bb9\u707e\u6587\u4ef6",(0,l.kt)("br",{parentName:"p"}),"\n","3.\u672c\u5730\u5bb9\u707e\u6587\u4ef6\u8fbe\u5230\u9608\u503c\u65f6\uff0c\u5c06\u6dd8\u6c70\u65e7\u6570\u636e(\u6309\u65f6\u95f4\u6dd8\u6c70)  "),(0,l.kt)("h2",{id:"\u63a5\u5165\u5c42\u5b9e\u73b0\u7ec6\u8282"},"\u63a5\u5165\u5c42\u5b9e\u73b0\u7ec6\u8282"),(0,l.kt)("h3",{id:"\u76ee\u6807-1"},"\u76ee\u6807"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"1.\u9ad8\u53ef\u9760")),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"2.at least once"))),(0,l.kt)("h3",{id:"\u4e3b\u8981\u903b\u8f91"},"\u4e3b\u8981\u903b\u8f91"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(85080).Z,width:"1193",height:"424"}),"\n1.\u63a5\u5165\u5c42\u6536\u5230sdk\u53d1\u9001\u7684\u5305\u4e4b\u540e\uff0c\u5199\u6d88\u606f\u961f\u5217",(0,l.kt)("br",{parentName:"p"}),"\n","2.\u5199\u6d88\u606f\u961f\u5217\u6210\u529f\u4e4b\u540e\uff0c\u5219\u5bf9sdk\u8fd4\u56de\u6210\u529f",(0,l.kt)("br",{parentName:"p"}),"\n","3.\u6d88\u606f\u961f\u5217\u7684\u6570\u636e\u534f\u8bae\u4e3aPB\u534f\u8bae",(0,l.kt)("br",{parentName:"p"}),"\n","4.\u5199\u6d88\u606f\u961f\u5217\u7684ack\u8bbe\u7f6e\u6210-1\u6216\u8005all  "),(0,l.kt)("h2",{id:"elasticsearch\u5206\u53d1\u5b9e\u73b0"},"Elasticsearch\u5206\u53d1\u5b9e\u73b0"),(0,l.kt)("h3",{id:"\u76ee\u6807-2"},"\u76ee\u6807"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"1.\u9ad8\u5b9e\u65f6\u6027(\u5206\u949f\u7ea7)")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"2.\u53ef\u8fd0\u8425\u6bcf\u5929\u767e\u4ebf\u7ea7\u522b\u7684\u5ba1\u8ba1\u6570\u636e")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"3.\u53ef\u53bb\u91cd")),"  "),(0,l.kt)("h3",{id:"\u4e3b\u8981\u903b\u8f91\u56fe-1"},"\u4e3b\u8981\u903b\u8f91\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(79221).Z,width:"1291",height:"509"}),"\n1.\u5206\u53d1\u670d\u52a1AuditDds\u5b9e\u65f6\u6d88\u8d39\u6d88\u606f",(0,l.kt)("br",{parentName:"p"}),"\n","2.\u6839\u636e\u5ba1\u8ba1\u6570\u636e\u4e2d\u7684\u5ba1\u8ba1ID\uff0c\u5c06\u6570\u636e\u8def\u7531\u5230\u5bf9\u5e94\u7684Elasticsearch\u96c6\u7fa4",(0,l.kt)("br",{parentName:"p"}),"\n","3.\u6bcf\u4e2a\u5ba1\u8ba1ID\u5bf9\u5e94\u4e00\u4e2aElasticsearch\u7d22\u5f15  "),(0,l.kt)("h3",{id:"\u7d22\u5f15\u8bbe\u8ba1"},"\u7d22\u5f15\u8bbe\u8ba1"),(0,l.kt)("h4",{id:"\u7d22\u5f15\u540d"},"\u7d22\u5f15\u540d"),(0,l.kt)("p",null,"\u7d22\u5f15\u540d\u7531\u65e5\u671f+\u5ba1\u8ba1\u9879ID\u7ec4\u6210\uff0c\u598220211019_1,20211019_2  "),(0,l.kt)("h4",{id:"\u7d22\u5f15\u5b57\u6bb5\u683c\u5f0f"},"\u7d22\u5f15\u5b57\u6bb5\u683c\u5f0f"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"audit_id"),(0,l.kt)("td",{parentName:"tr",align:null},"keyword"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba1\u8ba1ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlong_group_id"),(0,l.kt)("td",{parentName:"tr",align:null},"keyword"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong_group_id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlong_stream_id"),(0,l.kt)("td",{parentName:"tr",align:null},"keyword"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong_stream_id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"docker_id"),(0,l.kt)("td",{parentName:"tr",align:null},"keyword"),(0,l.kt)("td",{parentName:"tr",align:null},"sdk\u6240\u5728\u5bb9\u5668ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"thread_id"),(0,l.kt)("td",{parentName:"tr",align:null},"keyword"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ebf\u7a0bID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"packet_id"),(0,l.kt)("td",{parentName:"tr",align:null},"keyword"),(0,l.kt)("td",{parentName:"tr",align:null},"sdk\u4e0a\u62a5\u7684\u5305ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ip"),(0,l.kt)("td",{parentName:"tr",align:null},"keyword"),(0,l.kt)("td",{parentName:"tr",align:null},"\u673a\u5668IP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_ts"),(0,l.kt)("td",{parentName:"tr",align:null},"keyword"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sdk_ts"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba1\u8ba1SDK\u4e0a\u62a5\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u6761\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u5927\u5c0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delay"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u4f20\u8f93\u65f6\u95f4\uff0c\u7b49\u4e8e\u5f53\u524d\u673a\u5668\u65f6\u95f4\u51cf\u53bb\u65e5\u5fd7\u65f6\u95f4")))),(0,l.kt)("h4",{id:"\u7d22\u5f15\u7684\u5b58\u50a8\u5468\u671f"},"\u7d22\u5f15\u7684\u5b58\u50a8\u5468\u671f"),(0,l.kt)("p",null,"\u6309\u5929\u5b58\u50a8\uff0c\u5b58\u50a8\u5468\u671f\u52a8\u6001\u53ef\u914d\u7f6e"),(0,l.kt)("h2",{id:"elasticsearch\u5199\u5165\u8bbe\u8ba1"},"Elasticsearch\u5199\u5165\u8bbe\u8ba1"),(0,l.kt)("h3",{id:"inlong_group_idinlong_stream_id\u5ba1\u8ba1id\u4e0eelasticsearch\u7d22\u5f15\u7684\u5173\u7cfb"},"inlong_group_id\u3001inlong_stream_id\u3001\u5ba1\u8ba1ID\u4e0eElasticsearch\u7d22\u5f15\u7684\u5173\u7cfb"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(69840).Z,width:"1043",height:"250"}),"\n\u7cfb\u7edf\u8bbe\u8ba1\u4e0e\u670d\u52a1\u5b9e\u73b0\u4e0ainlong_group_id\u3001inlong_stream_id\u3001\u5ba1\u8ba1ID\u4e0eElasticsearch\u7d22\u5f15\u4e3a1:N\u7684\u5173\u7cfb  "),(0,l.kt)("h3",{id:"\u5199\u5165\u8def\u7531\u7b56\u7565"},"\u5199\u5165\u8def\u7531\u7b56\u7565"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(84360).Z,width:"1917",height:"243"}),"\n\u4f7f\u7528inlong_group_id\u3001inlong_stream_id\u8def\u7531\u5230Elasticsearch\u5206\u7247\uff0c\u4fdd\u8bc1\u76f8\u540c\u7684inlong_group_id\u3001inlong_stream_id\u5b58\u50a8\u5728\u76f8\u540c\u7684\u5206\u7247\n\u5c06\u76f8\u540c\u7684inlong_group_id\u3001inlong_stream_id\u5199\u5230\u540c\u4e00\u4e2a\u5206\u7247\uff0c\u67e5\u8be2\u4ee5\u53ca\u805a\u5408\u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u5904\u7406\u4e00\u4e2a\u5206\u7247\uff0c\u80fd\u591f\u5927\u5927\u63d0\u9ad8\u6027\u80fd  "),(0,l.kt)("h3",{id:"\u53ef\u9009\u6309doc_id\u53bb\u91cd"},"\u53ef\u9009\u6309doc_id\u53bb\u91cd"),(0,l.kt)("p",null,"Elasticsearch\u5b9e\u65f6\u53bb\u91cd\u6bd4\u8f83\u8017\u8d44\u6e90\uff0c\u6b64\u529f\u80fd\u901a\u8fc7\u914d\u7f6e\u53ef\u9009\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528bulk\u6279\u91cf\u65b9\u5f0f"},"\u4f7f\u7528bulk\u6279\u91cf\u65b9\u5f0f"),(0,l.kt)("p",null,"\u4f7f\u7528bulk\u5199\u5165\uff0c\u6bcf\u62795000\u6761\uff0c\u63d0\u9ad8Elasticsearch\u96c6\u7fa4\u7684\u5199\u5165\u6027\u80fd"),(0,l.kt)("h2",{id:"mysql\u5206\u53d1\u5b9e\u73b0"},"MySQL\u5206\u53d1\u5b9e\u73b0"),(0,l.kt)("h3",{id:"\u76ee\u6807-3"},"\u76ee\u6807"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"1.\u9ad8\u5b9e\u65f6\u6027(\u5206\u949f\u7ea7)")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"2.\u90e8\u7f72\u7b80\u5355")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"3.\u53ef\u53bb\u91cd"))),(0,l.kt)("h3",{id:"\u4e3b\u8981\u903b\u8f91\u56fe-2"},"\u4e3b\u8981\u903b\u8f91\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(43825).Z,width:"1041",height:"259"}),"\nMySQL\u5206\u53d1\u652f\u6301\u6839\u636e\u5ba1\u8ba1ID\u5206\u53d1\u5230\u4e0d\u540c\u7684MySQL\u5b9e\u4f8b\uff0c\u652f\u6301\u6c34\u5e73\u6269\u5c55\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u4ecb\u7ecd"},"\u4f7f\u7528\u4ecb\u7ecd"),(0,l.kt)("p",null,"  1.\u5f53\u4e1a\u52a1\u7684\u5ba1\u8ba1\u89c4\u6a21\u6bd4\u8f83\u5c0f\uff0c\u5c0f\u4e8e\u5343\u4e07\u7ea7/\u5929\u65f6\uff0c\u5c31\u53ef\u4ee5\u8003\u8651\u91c7\u7528MySQL\u4f5c\u4e3a\u5ba1\u8ba1\u7684\u5b58\u50a8\u3002\u56e0\u4e3aMySQL\u7684\u90e8\u7f72\u76f8\u5bf9Elasticsearch\u8981\u7b80\u5355\u7684\u591a\uff0c \u8d44\u6e90\u6210\u672c\u4e5f\u4f1a\u5c11\u5f88\u591a\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","2.\u5982\u679c\u5ba1\u8ba1\u6570\u636e\u89c4\u6a21\u5f88\u5927\uff0cMySQL\u652f\u6491\u4e0d\u4e86\u65f6\uff0c\u5c31\u53ef\u4ee5\u8003\u8651\u91c7\u7528Elasticsearch\u4f5c\u4e3a\u5b58\u50a8\uff0c\u6bd5\u7adf\u5355\u4e2aElasticsearch\u96c6\u7fa4\u80fd\u591f\u652f\u6301\u767e\u4ebf\u7ea7\u522b\u7684\u5ba1\u8ba1\u6570\u636e\uff0c\u4e5f\u652f\u6301\u6c34\u5e73\u6269\u5bb9\u3002"),(0,l.kt)("h2",{id:"clickhouse\u5206\u53d1\u5b9e\u73b0"},"ClickHouse\u5206\u53d1\u5b9e\u73b0"),(0,l.kt)("h3",{id:"\u76ee\u6807-4"},"\u76ee\u6807"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"1.\u9ad8\u5b9e\u65f6\u6027(\u5206\u949f\u7ea7)")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"2.\u90e8\u7f72\u7b80\u5355")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"3.\u53ef\u53bb\u91cd"))),(0,l.kt)("h3",{id:"\u4e3b\u8981\u903b\u8f91\u56fe-3"},"\u4e3b\u8981\u903b\u8f91\u56fe"),(0,l.kt)("p",null,"ClickHouse\u5206\u53d1\u652f\u6301\u6839\u636e\u5ba1\u8ba1ID\u5206\u53d1\u5230\u4e0d\u540c\u7684ClickHouse\u5b9e\u4f8b\uff0c\u652f\u6301\u6c34\u5e73\u6269\u5c55\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u4ecb\u7ecd-1"},"\u4f7f\u7528\u4ecb\u7ecd"),(0,l.kt)("p",null,"  1.ClickHouse\u96c6\u7fa4\u652f\u6301\u767e\u4ebf\u7ea7\u5ba1\u8ba1\u6570\u636e\uff0c\u4e5f\u652f\u6301\u6c34\u5e73\u6269\u5bb9\uff0c\u540c\u65f6\u652f\u6301SQL\u65b9\u5f0f\u8bbf\u95ee\u5ba1\u8ba1\u6570\u636e\uff0c\u8d44\u6e90\u6210\u672c\u548cElasticSearch\u5dee\u4e0d\u591a\u3002"),(0,l.kt)("h2",{id:"\u5ba1\u8ba1\u4f7f\u7528\u63a5\u53e3\u8bbe\u8ba1"},"\u5ba1\u8ba1\u4f7f\u7528\u63a5\u53e3\u8bbe\u8ba1"),(0,l.kt)("h3",{id:"\u4e3b\u8981\u903b\u8f91\u56fe-4"},"\u4e3b\u8981\u903b\u8f91\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8139).Z,width:"1712",height:"226"}),"\n\u5ba1\u8ba1\u63a5\u53e3\u5c42\u901a\u8fc7SQL\u67e5MySQL/ClickHouse\u6216\u8005restful\u67e5Elasticsearch\u3002\u63a5\u53e3\u5177\u4f53\u600e\u4e48\u67e5\u54ea\u4e00\u79cd\u5b58\u50a8\uff0c\u53d6\u51b3\u4f7f\u7528\u4e86\u54ea\u4e00\u79cd\u5b58\u50a8"),(0,l.kt)("h3",{id:"ui-\u754c\u9762\u5c55\u793a"},"UI \u754c\u9762\u5c55\u793a"),(0,l.kt)("h3",{id:"\u4e3b\u8981\u903b\u8f91\u56fe-5"},"\u4e3b\u8981\u903b\u8f91\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(40028).Z,width:"1740",height:"914"}),"\n\u524d\u7aef\u9875\u9762\u901a\u8fc7\u63a5\u53e3\u5c42\uff0c\u62c9\u53d6\u5404\u4e2a\u6a21\u5757\u7684\u5ba1\u8ba1\u6570\u636e\uff0c\u8fdb\u884c\u5c55\u793a"))}u.isMDXComponent=!0},8139:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/audit_api-cd53d5a2c6d8d18874e0a3b6d6fccd70.png"},57785:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/audit_architecture-bcbf3c4916911241e0927b5c5796cc75.png"},43825:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/audit_mysql-bd2add2498d21e967ce468c52e747dbf.png"},85080:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/audit_proxy-31edf236c534e35e74ba303c376019e0.png"},5800:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/audit_sdk-c26ca1fa89499a77942b4d2a1c1b3977.png"},55673:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/audit_sdk_disaster_recovery-95322e5d38da68a90f0219ee5bb53762.png"},40028:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/audit_ui-10a878113bda5441ff8648993628f69e.png"},69840:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/elasticsearch_index-81d3338f6441d4092d0577e716634beb.png"},79221:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/elasticsearch_overview-9ce6966bdbb18330d02948d4739b9a5c.png"},84360:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/elasticsearch_write-5be26f7f91679f9f3a4baf8827c636c3.png"}}]);