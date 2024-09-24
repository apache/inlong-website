"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2682],{15680:(e,a,n)=>{n.d(a,{xA:()=>o,yg:()=>s});var t=n(96540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=t.createContext({}),p=function(e){var a=t.useContext(g),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},o=function(e){var a=p(e.components);return t.createElement(g.Provider,{value:a},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),y=p(n),u=l,s=y["".concat(g,".").concat(u)]||y[u]||c[u]||r;return n?t.createElement(s,i(i({ref:a},o),{},{components:n})):t.createElement(s,i({ref:a},o))}));function s(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var d={};for(var g in a)hasOwnProperty.call(a,g)&&(d[g]=a[g]);d.originalType=e,d[y]="string"==typeof e?e:l,i[1]=d;for(var p=2;p<r;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12433:(e,a,n)=>{n.d(a,{l:()=>t});const t={inLongVersion:"1.14.0-SNAPSHOT"}},91552:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>g,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var t=n(58168),l=(n(96540),n(15680));n(12433);const r={title:"Redis",sidebar_position:19},i=void 0,d={unversionedId:"data_node/load_node/redis",id:"data_node/load_node/redis",title:"Redis",description:"\u6982\u51b5",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data_node/load_node/redis.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/redis",permalink:"/zh-CN/docs/next/data_node/load_node/redis",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/load_node/redis.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"Redis",sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Hudi",permalink:"/zh-CN/docs/next/data_node/load_node/hudi"},next:{title:"C++ SDK",permalink:"/zh-CN/docs/next/sdk/dataproxy-sdk/cpp"}},g={},p=[{value:"\u6982\u51b5",id:"\u6982\u51b5",level:2},{value:"Data Type",id:"data-type",level:3},{value:"Plain",id:"plain",level:4},{value:"Hash",id:"hash",level:4},{value:"Set",id:"set",level:4},{value:"BitMap",id:"bitmap",level:4},{value:"SchemaMappingMode",id:"schemamappingmode",level:3},{value:"Dynamic",id:"dynamic",level:4},{value:"Static Prefix Match",id:"static-prefix-match",level:4},{value:"Static KV Pair",id:"static-kv-pair",level:4},{value:"SQL demo",id:"sql-demo",level:3},{value:"Plain",id:"plain-1",level:4},{value:"Hash with Prefix Match",id:"hash-with-prefix-match",level:4},{value:"Hash with Static KV Pair",id:"hash-with-static-kv-pair",level:4},{value:"Hash with Dynamic",id:"hash-with-dynamic",level:4},{value:"BitMap with Static KV Pair",id:"bitmap-with-static-kv-pair",level:4}],o={toc:p},y="wrapper";function c(e){let{components:a,...n}=e;return(0,l.yg)(y,(0,t.A)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\u6982\u51b5"},"\u6982\u51b5"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"Redis Load")," \u8282\u70b9\u652f\u6301\u5c06\u6570\u636e\u5199\u5165 Redis \u3002"),(0,l.yg)("h3",{id:"data-type"},"Data Type"),(0,l.yg)("p",null,"\u8be6\u7ec6\u89c1\uff1a",(0,l.yg)("a",{parentName:"p",href:"https://redis.io/topics/data-types-intro"},"Redis\u6570\u636e\u7c7b\u578b")),(0,l.yg)("h4",{id:"plain"},"Plain"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"c1"),(0,l.yg)("th",{parentName:"tr",align:null},"c2"),(0,l.yg)("th",{parentName:"tr",align:null},"c3"),(0,l.yg)("th",{parentName:"tr",align:null},"c4"),(0,l.yg)("th",{parentName:"tr",align:null},"c5"),(0,l.yg)("th",{parentName:"tr",align:null},"c6"),(0,l.yg)("th",{parentName:"tr",align:null},"c7"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rowKey"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("p",null,"Redis \u5b57\u7b26\u4e32\u547d\u4ee4\u7528\u4e8e\u7ba1\u7406 Redis \u4e2d\u7684\u5b57\u7b26\u4e32\u503c\u3002"),(0,l.yg)("p",null,"\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f Redis \u884c\u952e\uff0c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u5176\u4f59\u5b57\u6bb5 ('c2' ~ 'c6') \u5c06\u88ab\u5e8f\u5217\u5316\u4e3a\u4e00\u4e2a\u503c\u5e76\u653e\u5165 Redis \u4e2d\u3002"),(0,l.yg)("h4",{id:"hash"},"Hash"),(0,l.yg)("p",null,"Redis Hash \u662f\u4e00\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u8868\u793a\u5b57\u7b26\u4e32\u5b57\u6bb5\u548c\u5b57\u7b26\u4e32\u4e4b\u95f4\u7684\u6620\u5c04\u3002\u5176\u6709\u4e24\u4e2a\u6210\u5458\uff1a  "),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Redis \u54c8\u5e0c\u5b57\u6bb5  "),(0,l.yg)("li",{parentName:"ul"},"Redis \u54c8\u5e0c\u503c  ")),(0,l.yg)("h4",{id:"set"},"Set"),(0,l.yg)("p",null,"Redis SET \u662f\u7b80\u5355\u7684\u5b57\u7b26\u4e32\u5217\u8868\uff0c\u6309\u63d2\u5165\u987a\u5e8f\u6392\u5e8f\u3002\u4f60\u53ef\u4ee5\u5728 Redis Set \u7684\u5934\u90e8\u6216\u5c3e\u90e8\u6dfb\u52a0\u5143\u7d20\u3002"),(0,l.yg)("h4",{id:"bitmap"},"BitMap"),(0,l.yg)("p",null,"BITMAP \u4e0d\u662f\u4e00\u79cd\u5b9e\u9645\u7684\u6570\u636e\u7c7b\u578b\uff0c\u800c\u662f\u5728 String \u5bf9\u8c61\u4e0a\u5b9a\u4e49\u7684\u4e00\u7ec4\u9762\u5411 Bit \u7684\u7c7b\u578b\u3002\u7531\u4e8e\u5b57\u7b26\u4e32\u662f binary safe blobs\uff0c\u5176\u6700\u5927\u957f\u5ea6\u4e3a512 MB, \u5b83\u4eec\u9002\u5408\u8bbe\u7f6e\u591a\u8fbe 2^32 \u4e2a\u4e0d\u540c\u7684 Bit\u3002"),(0,l.yg)("h3",{id:"schemamappingmode"},"SchemaMappingMode"),(0,l.yg)("h4",{id:"dynamic"},"Dynamic"),(0,l.yg)("p",null,"Dynamic \u6a21\u5f0f\u6620\u5c04 java.util.map \u5230 RedisDataType\uff0c\u8be5\u6a21\u5f0f\u4e0b\u6709\u4e24\u4e2a\u6210\u5458\uff1a  "),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Redis key"),(0,l.yg)("li",{parentName:"ul"},"java.util.Map, \u5b83\u5c06\u88ab\u8fed\u4ee3\uff0c\u5176\u4e2d\u952e\u4e3a Redis key\uff0c\u503c\u4e3a Redis value  ")),(0,l.yg)("h4",{id:"static-prefix-match"},"Static Prefix Match"),(0,l.yg)("p",null,"\u5176\u4e2d\u81f3\u5c11\u6709\u4e24\u4e2a\u5b57\u6bb5\uff0c\u7b2c\u4e00\u4e2a\u6210\u5458\u662f Redis key\uff0c\u7b2c\u4e8c\u4e2a\u5b57\u6bb5\u4e2d\u7684\u6bcf\u4e2a\u5b57\u6bb5\u4ee3\u8868\u4e00\u4e2a Redis value"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"key, field, value1, value2, value3, [value]...\n")),(0,l.yg)("h4",{id:"static-kv-pair"},"Static KV Pair"),(0,l.yg)("p",null,"\u5176\u6709\u4e24\u4e2a\u5b57\u6bb5\uff0c\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u662f key \uff0c\u548c\u5176\u4ed6\u5b57\u6bb5\u662f\u952e\u503c\u5bf9"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"}," key, field1, value1,field2,value2,field3,value3,[field,value]...\n")),(0,l.yg)("h3",{id:"sql-demo"},"SQL demo"),(0,l.yg)("h4",{id:"plain-1"},"Plain"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Plain \u53ea\u652f\u6301 Static Prefix Match \u6a21\u5f0f")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sink (\n    key STRING,\n    aaa STRING,\n    bbb DOUBLE,    \n    ccc BIGINT,    \n    PRIMARY KEY (`key`) NOT ENFORCED\n) WITH (  \n    'connector' = 'redis-inlong',  \n    'sink.batch-size' = '1',  \n    'format' = 'csv',  \n    'data-type' = 'PLAIN',  \n    'redis-mode' = 'standalone',  \n    'host' = 'localhost',  \n    'port' = '56615',  \n    'maxIdle' = '8',  \n    'minIdle' = '1',  \n    'maxTotal' = '2',  \n    'timeout' = '2000'\n);\n")),(0,l.yg)("h4",{id:"hash-with-prefix-match"},"Hash with Prefix Match"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"c1"),(0,l.yg)("th",{parentName:"tr",align:null},"c2"),(0,l.yg)("th",{parentName:"tr",align:null},"c3"),(0,l.yg)("th",{parentName:"tr",align:null},"c4"),(0,l.yg)("th",{parentName:"tr",align:null},"c5"),(0,l.yg)("th",{parentName:"tr",align:null},"c6"),(0,l.yg)("th",{parentName:"tr",align:null},"c7"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rowKey"),(0,l.yg)("td",{parentName:"tr",align:null},"field: String"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("p",null,"\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f Redis Key\uff0c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u7c7b\u578b",(0,l.yg)("br",{parentName:"p"}),"\n","\u7b2c\u4e8c\u4e2a\u5143\u7d20\u662f\u54c8\u5e0c\u6570\u636e\u7c7b\u578b\u4e2d\u7684 Redis \u5b57\u6bb5\u540d",(0,l.yg)("br",{parentName:"p"}),"\n","\u5176\u4f59\u5b57\u6bb5 (' c2 ' ~ ' c7 ') \u5c06\u88ab\u5e8f\u5217\u5316\u4e3a\u4e00\u4e2a\u503c\u5e76\u653e\u5165 Redis \u4e2d"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sink (\n    key STRING, \n    field_name STRING, \n    value_1 DOUBLE,\n    value_2 BIGINT, \n    PRIMARY KEY (`key`) NOT ENFORCED\n) WITH (\n   'connector' = 'redis-inlong',\n   'sink.batch-size' = '1',\n   'format' = 'csv',\n   'data-type' = 'HASH',\n   'redis-mode' = 'standalone',\n   'host' = 'localhost',\n   'port' = '56869',\n   'maxIdle' = '8',\n   'minIdle' = '1',\n   'maxTotal' = '2',\n   'timeout' = '2000'\n);\n")),(0,l.yg)("h4",{id:"hash-with-static-kv-pair"},"Hash with Static KV Pair"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"c1"),(0,l.yg)("th",{parentName:"tr",align:null},"c2"),(0,l.yg)("th",{parentName:"tr",align:null},"c3"),(0,l.yg)("th",{parentName:"tr",align:null},"c4"),(0,l.yg)("th",{parentName:"tr",align:null},"c5"),(0,l.yg)("th",{parentName:"tr",align:null},"c6"),(0,l.yg)("th",{parentName:"tr",align:null},"c7"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rowKey"),(0,l.yg)("td",{parentName:"tr",align:null},"field1: String"),(0,l.yg)("td",{parentName:"tr",align:null},"value 1:String"),(0,l.yg)("td",{parentName:"tr",align:null},"field 2: String"),(0,l.yg)("td",{parentName:"tr",align:null},"value 2:String"),(0,l.yg)("td",{parentName:"tr",align:null},"field 3: String"),(0,l.yg)("td",{parentName:"tr",align:null},"value 3:String")))),(0,l.yg)("p",null,"\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f Redis \u884c\u952e\uff0c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\u3002\n\u5947\u6570\u5143\u7d20 (' c2 ' / ' c4 ' / ' c6 ') \u662f\u54c8\u5e0c\u6570\u636e\u7c7b\u578b\u4e2d\u7684 Redis \u5b57\u6bb5\u540d\uff0c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\u3002\n\u5076\u6570\u5143\u7d20 (' c3 ' / ' c5 ' / ' c7 ') \u662f\u54c8\u5e0c\u6570\u636e\u7c7b\u578b\u4e2d\u7684 Redis \u5b57\u6bb5\u503c\uff0c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sink (\n    key STRING,\n    field1 STRING,\n    value1 STRING,\n    field2 STRING,\n    value2 STRING,\n    PRIMARY KEY (`key`) NOT ENFORCED\n) WITH (\n  'connector' = 'redis-inlong',\n  'sink.batch-size' = '1',\n  'format' = 'csv',\n  'data-type' = 'HASH',\n  'schema-mapping-mode' = 'STATIC_KV_PAIR',\n  'redis-mode' = 'standalone',\n  'host' = 'localhost',\n  'port' = '6379',\n  'maxIdle' = '8',\n  'minIdle' = '1',\n  'maxTotal' = '2',\n  'timeout' = '2000'\n);\n")),(0,l.yg)("h4",{id:"hash-with-dynamic"},"Hash with Dynamic"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"c1"),(0,l.yg)("th",{parentName:"tr",align:null},"c2"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rowKey"),(0,l.yg)("td",{parentName:"tr",align:null},"fieldValueMap")))),(0,l.yg)("p",null,"\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f Redis \u884c\u952e\uff0c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\u3002\n\u7b2c\u4e8c\u4e2a\u5143\u7d20\u5fc5\u987b\u662f Map<String,String>, \u5176\u4e2d\u952e\u662f fieldName \uff0c\u503c\u662f fieldValue\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sink (\n    key STRING,\n    fieldValueMap MAP<STRING,STRING>,\n    PRIMARY KEY (`key`) NOT ENFORCED\n) WITH (\n  'connector' = 'redis-inlong',\n  'sink.batch-size' = '1',\n  'format' = 'csv',\n  'data-type' = 'HASH',\n  'schema-mapping-mode' = 'DYNAMIC',\n  'redis-mode' = 'standalone',\n  'host' = 'localhost',\n  'port' = '6379',\n  'maxIdle' = '8',\n  'minIdle' = '1',\n  'maxTotal' = '2',\n  'timeout' = '2000'\n)\"\n")),(0,l.yg)("h4",{id:"bitmap-with-static-kv-pair"},"BitMap with Static KV Pair"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"c1"),(0,l.yg)("th",{parentName:"tr",align:null},"c2"),(0,l.yg)("th",{parentName:"tr",align:null},"c3"),(0,l.yg)("th",{parentName:"tr",align:null},"c4"),(0,l.yg)("th",{parentName:"tr",align:null},"c5"),(0,l.yg)("th",{parentName:"tr",align:null},"c6"),(0,l.yg)("th",{parentName:"tr",align:null},"c7"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rowKey"),(0,l.yg)("td",{parentName:"tr",align:null},"field1: Long"),(0,l.yg)("td",{parentName:"tr",align:null},"value 1:Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"field 2: Long"),(0,l.yg)("td",{parentName:"tr",align:null},"value 2:Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"field 3: Long"),(0,l.yg)("td",{parentName:"tr",align:null},"value 3:Boolean")))),(0,l.yg)("p",null,"\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f Redis \u884c\u952e\uff0c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\u3002\n\u5947\u6570\u5143\u7d20 (' c2 ' / ' c4 ' / ' c6 ') \u662f\u4f4d\u56fe\u6570\u636e\u7c7b\u578b\u4e2d\u7684 Redis \u504f\u79fb\u91cf\uff0c\u5fc5\u987b\u662f Long \u7c7b\u578b\u3002\n\u5076\u6570\u5143\u7d20 (' c3 ' / ' c5 ' / ' c7 ') \u662f\u4f4d\u56fe\u6570\u636e\u7c7b\u578b\u4e2d\u7684 Redis \u503c\uff0c\u5fc5\u987b\u662f\u5e03\u5c14\u7c7b\u578b\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sink (\n    key STRING,\n    offset_1 BIGINT,\n    value_1 BOOLEAN,\n    offset_2 BIGINT,\n    value_2 BOOLEAN,\n    PRIMARY KEY (`key`) NOT ENFORCED\n) WITH (\n  'connector' = 'redis-inlong',\n  'sink.batch-size' = '1',\n  'format' = 'csv',\n  'data-type' = 'BITMAP',\n  'schema-mapping-mode' = 'STATIC_KV_PAIR',\n  'redis-mode' = 'standalone',\n  'host' = 'localhost',\n  'port' = '6379',\n  'maxIdle' = '8',\n  'minIdle' = '1',\n  'maxTotal' = '2',\n  'timeout' = '2000'\n)\n")))}c.isMDXComponent=!0}}]);