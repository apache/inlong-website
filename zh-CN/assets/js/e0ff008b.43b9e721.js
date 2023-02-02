"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[26838],{3905:(t,l,e)=>{e.d(l,{Zo:()=>i,kt:()=>h});var n=e(67294);function r(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function a(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?a(Object(e),!0).forEach((function(l){r(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function o(t,l){if(null==t)return{};var e,n,r=function(t,l){if(null==t)return{};var e,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)e=a[n],l.indexOf(e)>=0||(r[e]=t[e]);return r}(t,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)e=a[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=n.createContext({}),k=function(t){var l=n.useContext(u),e=l;return t&&(e="function"==typeof t?t(l):d(d({},l),t)),e},i=function(t){var l=k(t.components);return n.createElement(u.Provider,{value:l},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var l=t.children;return n.createElement(n.Fragment,{},l)}},p=n.forwardRef((function(t,l){var e=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),s=k(e),p=r,h=s["".concat(u,".").concat(p)]||s[p]||c[p]||a;return e?n.createElement(h,d(d({ref:l},i),{},{components:e})):n.createElement(h,d({ref:l},i))}));function h(t,l){var e=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var a=e.length,d=new Array(a);d[0]=p;var o={};for(var u in l)hasOwnProperty.call(l,u)&&(o[u]=l[u]);o.originalType=t,o[s]="string"==typeof t?t:r,d[1]=o;for(var k=2;k<a;k++)d[k]=e[k];return n.createElement.apply(null,d)}return n.createElement.apply(null,e)}p.displayName="MDXCreateElement"},13344:(t,l,e)=>{e.d(l,{Y:()=>n});const n={inLongVersion:"1.4.0-SNAPSHOT"}},12399:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>k,contentTitle:()=>o,default:()=>c,frontMatter:()=>d,metadata:()=>u,toc:()=>i});var n=e(87462),r=(e(67294),e(3905)),a=e(13344);const d={title:"Elasticsearch",sidebar_position:4},o=void 0,u={unversionedId:"data_node/load_node/elasticsearch",id:"version-1.4.0/data_node/load_node/elasticsearch",title:"Elasticsearch",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/data_node/load_node/elasticsearch.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/elasticsearch",permalink:"/zh-CN/docs/1.4.0/data_node/load_node/elasticsearch",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.4.0/data_node/load_node/elasticsearch.md",tags:[],version:"1.4.0",sidebarPosition:4,frontMatter:{title:"Elasticsearch",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"ClickHouse",permalink:"/zh-CN/docs/1.4.0/data_node/load_node/clickhouse"},next:{title:"Greenplum",permalink:"/zh-CN/docs/1.4.0/data_node/load_node/greenplum"}},k={},i=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:3},{value:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a Elasticsearch Load \u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a-elasticsearch-load-\u8282\u70b9",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"InLong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"InLong Manager Client \u7528\u6cd5",id:"inlong-manager-client-\u7528\u6cd5",level:3},{value:"Elasticsearch Load \u8282\u70b9\u53c2\u6570",id:"elasticsearch-load-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"Key \u5904\u7406",id:"key-\u5904\u7406",level:3},{value:"\u52a8\u6001\u7d22\u5f15",id:"\u52a8\u6001\u7d22\u5f15",level:3},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],s={toc:i};function c(t){let{components:l,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,e,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.kt)("p",null,"Elasticsearch Load \u8282\u70b9\u5141\u8bb8\u5c06\u6570\u636e\u5199\u5165\u5230 Elasticsearch \u5f15\u64ce\u7684\u7d22\u5f15\u4e2d\u3002\u672c\u6587\u6863\u63cf\u8ff0\u8fd0\u884c SQL \u67e5\u8be2\u65f6\u5982\u4f55\u8bbe\u7f6e Elasticsearch Load \u8282\u70b9\u3002"),(0,r.kt)("p",null,"\u8fde\u63a5\u5668\u53ef\u4ee5\u5de5\u4f5c\u5728 Upsert \u6a21\u5f0f\uff0c\u4f7f\u7528 DDL \u4e2d\u5b9a\u4e49\u7684\u4e3b\u952e\u4e0e\u5916\u90e8\u7cfb\u7edf\u4ea4\u6362 UPDATE/DELETE \u6d88\u606f\u3002"),(0,r.kt)("p",null,"\u5982\u679c DDL \u4e2d\u6ca1\u6709\u5b9a\u4e49\u4e3b\u952e\uff0c\u90a3\u4e48\u8fde\u63a5\u5668\u53ea\u80fd\u5de5\u4f5c\u5728 Append \u6a21\u5f0f\uff0c\u53ea\u80fd\u4e0e\u5916\u90e8\u7cfb\u7edf\u4ea4\u6362 INSERT \u6d88\u606f\u3002"),(0,r.kt)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Load \u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.4.0/data_node/load_node/elasticsearch"},"elasticsearch")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.elastic.co/"},"Elasticsearch"),": 6.x, 7.x")))),(0,r.kt)("h3",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.kt)("p",null,"\u4e3a\u4e86\u8bbe\u7f6e Elasticsearch Load \u8282\u70b9\uff0c\u4e0b\u8868\u63d0\u4f9b\u4e86\u4f7f\u7528\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\uff08\u4f8b\u5982 Maven \u6216 SBT\uff09\u548c\u5e26\u6709 Sort Connectors JAR \u5305\u7684 SQL \u5ba2\u6237\u7aef\u7684\u4e24\u4e2a\u9879\u76ee\u7684\u4f9d\u8d56\u5173\u7cfb\u4fe1\u606f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Elasticsearch 6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-elasticsearch6</artifactId>\n    <version>${a.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Elasticsearch 7")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-elasticsearch7</artifactId>\n    <version>${a.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a-elasticsearch-load-\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a Elasticsearch Load \u8282\u70b9"),(0,r.kt)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,r.kt)("p",null,"\u4e0b\u9762\u5217\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u5229\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL"),"\u521b\u5efa\u4e00\u4e2a Elasticsearch Load \u8282\u70b9: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE myUserTable (\n  user_id STRING,\n  user_name STRING,\n  uv BIGINT,\n  pv BIGINT,\n  PRIMARY KEY (user_id) NOT ENFORCED\n) WITH (\n  'connector' = 'elasticsearch-7',\n  'hosts' = 'http://localhost:9200',\n  'index' = 'users'\n);\n")),(0,r.kt)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"InLong Dashboard \u7528\u6cd5"),(0,r.kt)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u8fd9\u4e2a\u7279\u6027\u3002"),(0,r.kt)("h3",{id:"inlong-manager-client-\u7528\u6cd5"},"InLong Manager Client \u7528\u6cd5"),(0,r.kt)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u8fd9\u4e2a\u7279\u6027\u3002"),(0,r.kt)("h2",{id:"elasticsearch-load-\u8282\u70b9\u53c2\u6570"},"Elasticsearch Load \u8282\u70b9\u53c2\u6570"),(0,r.kt)("table",{class:"table table-bordered"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left",style:{width:"25%"}},"\u53c2\u6570"),(0,r.kt)("th",{class:"text-center",style:{width:"8%"}},"\u662f\u5426\u5fc5\u9009"),(0,r.kt)("th",{class:"text-center",style:{width:"7%"}},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{class:"text-center",style:{width:"10%"}},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{class:"text-center",style:{width:"50%"}},"\u63cf\u8ff0"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"connector")),(0,r.kt)("td",null,"\u5fc5\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u8fde\u63a5\u5668\uff0c\u6709\u6548\u503c\u4e3a\uff1a",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"elasticsearch-6"),"\uff1a\u8fde\u63a5\u5230 Elasticsearch 6.x \u7684\u96c6\u7fa4\u3002"),(0,r.kt)("li",null,(0,r.kt)("code",null,"elasticsearch-7"),"\uff1a\u8fde\u63a5\u5230 Elasticsearch 7.x \u53ca\u66f4\u9ad8\u7248\u672c\u7684\u96c6\u7fa4\u3002")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"hosts")),(0,r.kt)("td",null,"\u5fc5\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u8981\u8fde\u63a5\u5230\u7684\u4e00\u53f0\u6216\u591a\u53f0 Elasticsearch \u4e3b\u673a\uff0c\u4f8b\u5982 ",(0,r.kt)("code",null,"'http://host_name:9092;http://host_name:9093'"),"\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"index")),(0,r.kt)("td",null,"\u5fc5\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Elasticsearch \u4e2d\u6bcf\u6761\u8bb0\u5f55\u7684\u7d22\u5f15\u3002\u53ef\u4ee5\u662f\u4e00\u4e2a\u9759\u6001\u7d22\u5f15\uff08\u4f8b\u5982 ",(0,r.kt)("code",null,"'myIndex'"),"\uff09\u6216\u4e00\u4e2a\u52a8\u6001\u7d22\u5f15\uff08\u4f8b\u5982 ",(0,r.kt)("code",null,"'index-","{log_ts|yyyy-MM-dd}","'"),"\uff09\u3002 \u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u4e0b\u9762\u7684",(0,r.kt)("a",{href:"#dymic-index"},"\u52a8\u6001\u7d22\u5f15"),"\u90e8\u5206\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"document-type")),(0,r.kt)("td",null,"6.x \u7248\u672c\u4e2d\u5fc5\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Elasticsearch \u6587\u6863\u7c7b\u578b\u3002\u5728 ",(0,r.kt)("code",null,"elasticsearch-7")," \u4e2d\u4e0d\u518d\u9700\u8981\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"document-id.key-delimiter")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"_"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,'\u590d\u5408\u952e\u7684\u5206\u9694\u7b26\uff08\u9ed8\u8ba4\u4e3a"_"\uff09\uff0c\u4f8b\u5982\uff0c\u6307\u5b9a\u4e3a"$"\u5c06\u5bfc\u81f4\u6587\u6863 ID \u4e3a"KEY1$KEY2$KEY3"\u3002')),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"username")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u7528\u4e8e\u8fde\u63a5 Elasticsearch \u5b9e\u4f8b\u7684\u7528\u6237\u540d\u3002\u8bf7\u6ce8\u610f\uff0cElasticsearch \u6ca1\u6709\u9884\u7ed1\u5b9a\u5b89\u5168\u7279\u6027\uff0c\u4f46\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b",(0,r.kt)("a",{href:"https://www.elastic.co/guide/en/elasticsearch/reference/master/configuring-security.html"},"\u6307\u5357"),"\u542f\u7528\u5b83\u6765\u4fdd\u62a4 Elasticsearch \u96c6\u7fa4\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"password")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u7528\u4e8e\u8fde\u63a5 Elasticsearch \u5b9e\u4f8b\u7684\u5bc6\u7801\u3002\u5982\u679c\u914d\u7f6e\u4e86",(0,r.kt)("code",null,"username"),"\uff0c\u5219\u6b64\u9009\u9879\u4e5f\u5fc5\u987b\u914d\u7f6e\u4e3a\u975e\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"failure-handler")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"fail"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u5bf9 Elasticsearch \u8bf7\u6c42\u5931\u8d25\u60c5\u51b5\u4e0b\u7684\u5931\u8d25\u5904\u7406\u7b56\u7565\u3002\u6709\u6548\u7b56\u7565\u4e3a\uff1a",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"fail"),"\uff1a\u5982\u679c\u8bf7\u6c42\u5931\u8d25\u5e76\u56e0\u6b64\u5bfc\u81f4\u4f5c\u4e1a\u5931\u8d25\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002"),(0,r.kt)("li",null,(0,r.kt)("code",null,"ignore"),"\uff1a\u5ffd\u7565\u5931\u8d25\u5e76\u653e\u5f03\u8bf7\u6c42\u3002"),(0,r.kt)("li",null,(0,r.kt)("code",null,"retry-rejected"),"\uff1a\u91cd\u65b0\u6dfb\u52a0\u7531\u4e8e\u961f\u5217\u5bb9\u91cf\u9971\u548c\u800c\u5931\u8d25\u7684\u8bf7\u6c42\u3002"),(0,r.kt)("li",null,"\u81ea\u5b9a\u4e49\u7c7b\u540d\u79f0\uff1a\u4f7f\u7528 ActionRequestFailureHandler \u7684\u5b50\u7c7b\u8fdb\u884c\u5931\u8d25\u5904\u7406\u3002")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.flush-on-checkpoint")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"true"),(0,r.kt)("td",null,"Boolean"),(0,r.kt)("td",null,"\u662f\u5426\u5728 checkpoint \u65f6\u6267\u884c flush\u3002\u7981\u7528\u540e\uff0c\u5728 checkpoint \u65f6 sink \u5c06\u4e0d\u4f1a\u7b49\u5f85\u6240\u6709\u7684 pending \u8bf7\u6c42\u88ab Elasticsearch \u786e\u8ba4\u3002\u56e0\u6b64\uff0csink \u4e0d\u4f1a\u4e3a\u8bf7\u6c42\u7684 at-least-once \u4ea4\u4ed8\u63d0\u4f9b\u4efb\u4f55\u6709\u529b\u4fdd\u8bc1\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.bulk-flush.max-actions")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"1000"),(0,r.kt)("td",null,"Integer"),(0,r.kt)("td",null,"\u6bcf\u4e2a\u6279\u91cf\u8bf7\u6c42\u7684\u6700\u5927\u7f13\u51b2\u64cd\u4f5c\u6570\u3002 \u53ef\u4ee5\u8bbe\u7f6e\u4e3a",(0,r.kt)("code",null,"'0'"),"\u6765\u7981\u7528\u5b83\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.bulk-flush.max-size")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"2mb"),(0,r.kt)("td",null,"MemorySize"),(0,r.kt)("td",null,"\u6bcf\u4e2a\u6279\u91cf\u8bf7\u6c42\u7684\u7f13\u51b2\u64cd\u4f5c\u5728\u5185\u5b58\u4e2d\u7684\u6700\u5927\u503c\u3002\u5355\u4f4d\u5fc5\u987b\u4e3a MB\u3002 \u53ef\u4ee5\u8bbe\u7f6e\u4e3a",(0,r.kt)("code",null,"'0'"),"\u6765\u7981\u7528\u5b83\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.bulk-flush.interval")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"1s"),(0,r.kt)("td",null,"Duration"),(0,r.kt)("td",null,"flush \u7f13\u51b2\u64cd\u4f5c\u7684\u95f4\u9694\u3002 \u53ef\u4ee5\u8bbe\u7f6e\u4e3a",(0,r.kt)("code",null,"'0'"),"\u6765\u7981\u7528\u5b83\u3002\u6ce8\u610f\uff0c",(0,r.kt)("code",null,"'sink.bulk-flush.max-size'"),"\u548c",(0,r.kt)("code",null,"'sink.bulk-flush.max-actions'"),"\u90fd\u8bbe\u7f6e\u4e3a",(0,r.kt)("code",null,"'0'"),"\u7684\u8fd9\u79cd flush \u95f4\u9694\u8bbe\u7f6e\u5141\u8bb8\u5bf9\u7f13\u51b2\u64cd\u4f5c\u8fdb\u884c\u5b8c\u5168\u5f02\u6b65\u5904\u7406\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.bulk-flush.backoff.strategy")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"DISABLED"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u6307\u5b9a\u5728\u7531\u4e8e\u4e34\u65f6\u8bf7\u6c42\u9519\u8bef\u5bfc\u81f4\u4efb\u4f55 flush \u64cd\u4f5c\u5931\u8d25\u65f6\u5982\u4f55\u6267\u884c\u91cd\u8bd5\u3002\u6709\u6548\u7b56\u7565\u4e3a\uff1a",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"DISABLED"),"\uff1a\u4e0d\u6267\u884c\u91cd\u8bd5\uff0c\u5373\u7b2c\u4e00\u6b21\u8bf7\u6c42\u9519\u8bef\u540e\u5931\u8d25\u3002"),(0,r.kt)("li",null,(0,r.kt)("code",null,"CONSTANT"),"\uff1a\u7b49\u5f85\u91cd\u8bd5\u4e4b\u95f4\u7684\u56de\u9000\u5ef6\u8fdf\u3002"),(0,r.kt)("li",null,(0,r.kt)("code",null,"EXPONENTIAL"),"\uff1a\u5148\u7b49\u5f85\u56de\u9000\u5ef6\u8fdf\uff0c\u7136\u540e\u5728\u91cd\u8bd5\u4e4b\u95f4\u6307\u6570\u9012\u589e\u3002")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.bulk-flush.backoff.max-retries")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"8"),(0,r.kt)("td",null,"Integer"),(0,r.kt)("td",null,"\u6700\u5927\u56de\u9000\u91cd\u8bd5\u6b21\u6570\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.bulk-flush.backoff.delay")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"50ms"),(0,r.kt)("td",null,"Duration"),(0,r.kt)("td",null,"\u6bcf\u6b21\u56de\u9000\u5c1d\u8bd5\u4e4b\u95f4\u7684\u5ef6\u8fdf\u3002\u5bf9\u4e8e ",(0,r.kt)("code",null,"CONSTANT")," \u56de\u9000\u7b56\u7565\uff0c\u8be5\u503c\u662f\u6bcf\u6b21\u91cd\u8bd5\u4e4b\u95f4\u7684\u5ef6\u8fdf\u3002\u5bf9\u4e8e ",(0,r.kt)("code",null,"EXPONENTIAL")," \u56de\u9000\u7b56\u7565\uff0c\u8be5\u503c\u662f\u521d\u59cb\u7684\u5ef6\u8fdf\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"connection.max-retry-timeout")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"Duration"),(0,r.kt)("td",null,"\u6700\u5927\u91cd\u8bd5\u8d85\u65f6\u65f6\u95f4\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"connection.path-prefix")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u6dfb\u52a0\u5230\u6bcf\u4e2a REST \u901a\u4fe1\u4e2d\u7684\u524d\u7f00\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982\uff0c",(0,r.kt)("code",null,"'/v1'"),"\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"routing.filed-name")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u4f7f\u7528 field \u503c\u6765\u751f\u6210\u8be5 field \u7684\u52a8\u6001\u8def\u7531")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"format")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"json"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Elasticsearch \u8fde\u63a5\u5668\u652f\u6301\u6307\u5b9a\u683c\u5f0f\u3002\u8be5\u683c\u5f0f\u5fc5\u987b\u751f\u6210\u4e00\u4e2a\u6709\u6548\u7684 json \u6587\u6863\u3002 \u9ed8\u8ba4\u4f7f\u7528\u5185\u7f6e\u7684 ",(0,r.kt)("code",null,"'json'")," \u683c\u5f0f\u3002\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/connectors/table/formats/overview/"},"JSON Format")," \u9875\u9762\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"inlong.metric.labels"),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3agroupId=[groupId]&streamId=[streamId]&nodeId=[nodeId]\u3002")))),(0,r.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,r.kt)("h3",{id:"key-\u5904\u7406"},"Key \u5904\u7406"),(0,r.kt)("p",null,"Elasticsearch Load \u8282\u70b9\u53ef\u4ee5\u6839\u636e\u662f\u5426\u5b9a\u4e49\u4e86\u4e3b\u952e\u6765\u786e\u5b9a\u662f\u5728 Upsert \u6a21\u5f0f\u8fd8\u662f Append \u6a21\u5f0f\u4e0b\u5de5\u4f5c\u3002\n\u5982\u679c\u5b9a\u4e49\u4e86\u4e3b\u952e\uff0cElasticsearch Load \u8282\u70b9\u5c06\u4ee5 Upsert \u6a21\u5f0f\u5de5\u4f5c\uff0c\u8be5\u6a21\u5f0f\u53ef\u4ee5\u6d88\u8d39\u5305\u542b UPDATE/DELETE \u6d88\u606f\u7684\u67e5\u8be2\u3002\n\u5982\u679c\u672a\u5b9a\u4e49\u4e3b\u952e\uff0cElasticsearch Load \u8282\u70b9\u5c06\u4ee5 Append \u6a21\u5f0f\u5de5\u4f5c\uff0c\u8be5\u6a21\u5f0f\u53ea\u80fd\u6d88\u8d39\u5305\u542b INSERT \u6d88\u606f\u7684\u67e5\u8be2\u3002"),(0,r.kt)("p",null,"\u5728 Elasticsearch Load \u8282\u70b9\u4e2d\uff0c\u4e3b\u952e\u7528\u4e8e\u8ba1\u7b97 Elasticsearch \u7684\u6587\u6863 Id\uff0c\u6587\u6863 Id \u4e3a\u6700\u591a 512 \u5b57\u8282\u4e14\u4e0d\u5305\u542b\u7a7a\u683c\u7684\u5b57\u7b26\u4e32\u3002\nElasticsearch Load \u8282\u70b9\u901a\u8fc7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"document-id.key-delimiter")," \u6307\u5b9a\u7684\u952e\u5206\u9694\u7b26\u6309\u7167 DDL \u4e2d\u5b9a\u4e49\u7684\u987a\u5e8f\u8fde\u63a5\u6240\u6709\u4e3b\u952e\u5b57\u6bb5\uff0c\u4e3a\u6bcf\u4e00\u884c\u8bb0\u5f55\u751f\u6210\u4e00\u4e2a\u6587\u6863 Id \u5b57\u7b26\u4e32\u3002\n\u67d0\u4e9b\u7c7b\u578b\u4e0d\u5141\u8bb8\u4f5c\u4e3a\u4e3b\u952e\u5b57\u6bb5\uff0c\u56e0\u4e3a\u5b83\u4eec\u6ca1\u6709\u5bf9\u5e94\u7684\u5b57\u7b26\u4e32\u8868\u793a\u5f62\u5f0f\uff0c\u4f8b\u5982\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"BYTES"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ROW"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ARRAY"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"MAP")," \u7b49\u3002\n\u5982\u679c\u672a\u6307\u5b9a\u4e3b\u952e\uff0cElasticsearch \u5c06\u81ea\u52a8\u751f\u6210\u6587\u6863 Id\u3002"),(0,r.kt)("p",null,"\u6709\u5173 PRIMARY KEY \u8bed\u6cd5\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/dev/table/sql/create/#create-table"},"CREATE TABLE DDL"),"\u3002"),(0,r.kt)("h3",{id:"\u52a8\u6001\u7d22\u5f15"},"\u52a8\u6001\u7d22\u5f15"),(0,r.kt)("a",{name:"dymic-index"}),(0,r.kt)("p",null,"Elasticsearch Load \u8282\u70b9\u540c\u65f6\u652f\u6301\u9759\u6001\u7d22\u5f15\u548c\u52a8\u6001\u7d22\u5f15\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u9759\u6001\u7d22\u5f15\uff0c\u5219 ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," \u9009\u9879\u503c\u5e94\u4e3a\u7eaf\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"'myusers'"),'\uff0c\u6240\u6709\u8bb0\u5f55\u90fd\u5c06\u88ab\u5199\u5165\u5230 "myusers" \u7d22\u5f15\u4e2d\u3002'),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u52a8\u6001\u7d22\u5f15\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"{field_name}")," \u6765\u5f15\u7528\u8bb0\u5f55\u4e2d\u7684\u5b57\u6bb5\u503c\u6765\u52a8\u6001\u751f\u6210\u76ee\u6807\u7d22\u5f15\u3002\n\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"'{field_name|date_format_string}'")," \u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"TIMESTAMP/DATE/TIME")," \u7c7b\u578b\u7684\u5b57\u6bb5\u503c\u8f6c\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"date_format_string")," \u6307\u5b9a\u7684\u683c\u5f0f\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"date_format_string")," \u4e0e Java \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/index.html"},"DateTimeFormatter")," \u517c\u5bb9\u3002\n\u4f8b\u5982\uff0c\u5982\u679c\u9009\u9879\u503c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"'myusers-{'{log_ts|yyyy-MM-dd}'}'"),"\uff0c\u5219 ",(0,r.kt)("inlineCode",{parentName:"p"},"log_ts")," \u5b57\u6bb5\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"2020-03-27 12:25:55"),' \u7684\u8bb0\u5f55\u5c06\u88ab\u5199\u5165\u5230 "myusers-2020-03-27" \u7d22\u5f15\u4e2d\u3002'),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.kt)("table",{class:"table table-bordered"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left"},"JSON type"),(0,r.kt)("th",{class:"text-left"},"Flink SQL type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,(0,r.kt)("code",null,"CHAR / VARCHAR / STRING"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,(0,r.kt)("code",null,"BOOLEAN"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"string with encoding: base64")),(0,r.kt)("td",null,(0,r.kt)("code",null,"BINARY / VARBINARY"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"DECIMAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"TINYINT"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"SMALLINT"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"INT"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"BIGINT"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"FLOAT"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"DOUBLE"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"string with format: date")),(0,r.kt)("td",null,(0,r.kt)("code",null,"DATE"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"string with format: time")),(0,r.kt)("td",null,(0,r.kt)("code",null,"TIME"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"string with format: date-time")),(0,r.kt)("td",null,(0,r.kt)("code",null,"TIMESTAMP"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"string with format: date-time (with UTC time zone)")),(0,r.kt)("td",null,(0,r.kt)("code",null,"TIMESTAMP_WITH_LOCAL_TIME_ZONE"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"INTERVAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"array")),(0,r.kt)("td",null,(0,r.kt)("code",null,"ARRAY"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"object")),(0,r.kt)("td",null,(0,r.kt)("code",null,"MAP / MULTISET"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"object")),(0,r.kt)("td",null,(0,r.kt)("code",null,"ROW"))))))}c.isMDXComponent=!0}}]);