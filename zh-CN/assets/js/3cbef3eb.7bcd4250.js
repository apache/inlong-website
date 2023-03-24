"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[45118],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),k=d(n),N=l,g=k["".concat(o,".").concat(N)]||k[N]||u[N]||r;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=N;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m[k]="string"==typeof t?t:l,i[1]=m;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},55996:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>m,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const r={title:"Format",sidebar_position:2},i=void 0,m={unversionedId:"design_and_concept/the_format_in_inlong",id:"version-1.6.0/design_and_concept/the_format_in_inlong",title:"Format",description:"\u4ec0\u4e48\u662f Format?",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.6.0/design_and_concept/the_format_in_inlong.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/the_format_in_inlong",permalink:"/zh-CN/docs/design_and_concept/the_format_in_inlong",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.6.0/design_and_concept/the_format_in_inlong.md",tags:[],version:"1.6.0",sidebarPosition:2,frontMatter:{title:"Format",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/zh-CN/docs/design_and_concept/basic_concept"},next:{title:"Agent \u63d2\u4ef6",permalink:"/zh-CN/docs/design_and_concept/how_to_write_plugin_agent"}},o={},d=[{value:"\u4ec0\u4e48\u662f Format?",id:"\u4ec0\u4e48\u662f-format",level:2},{value:"InLong \u4e2d\u7684 Format",id:"inlong-\u4e2d\u7684-format",level:2},{value:"\u6709\u54ea\u4e9b Format?",id:"\u6709\u54ea\u4e9b-format",level:2},{value:"CSV",id:"csv",level:3},{value:"Key-Value",id:"key-value",level:3},{value:"JSON",id:"json",level:3}],p={toc:d},k="wrapper";function u(t){let{components:e,...r}=t;return(0,l.kt)(k,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f-format"},"\u4ec0\u4e48\u662f Format?"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(48186).Z,width:"890",height:"383"})),(0,l.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c Flink SQL \u5728\u8bfb\u5199\u6570\u636e\u65f6\uff0c\u5747\u91c7\u7528 Row \u7684\u5f62\u5f0f\uff0c\u5176\u5185\u90e8\u4e3a Object \u6570\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"p"},"Object[]"),"\uff0c\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u4ee3\u8868\u4e86\u4e00\u4e2a Flink \u8868\u7684\u5b57\u6bb5\u3002\n\u5b57\u6bb5\u7684\u7c7b\u578b\u3001\u540d\u79f0\u3001\u7cbe\u5ea6\u7b49\u4fe1\u606f\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Schema")," \u6765\u6807\u793a\u3002"),(0,l.kt)("p",null,"Flink \u7684 Format \u63d0\u4f9b\u4e86\u4e24\u79cd\u63a5\u53e3\uff1aSerializationSchema \u548c DeserializationSchema\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53 Flink \u5f80 MQ \u5199\u6570\u636e\u65f6\uff0c\u9700\u8981\u628a ",(0,l.kt)("inlineCode",{parentName:"li"},"Flink Row")," \u5e8f\u5217\u5316\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"key-value")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"csv")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"Json")," \u7b49 Format,\n\u8fd9\u65f6\u8c03\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"SerializationSchema#serialize")," \u65b9\u6cd5\uff0c\u6570\u636e\u4f1a\u5e8f\u5217\u5316\u6210 ",(0,l.kt)("inlineCode",{parentName:"li"},"Byte[]"),"\uff0c\u5199\u5165\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"MQ"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53 Flink \u8bfb\u53d6 MQ \u7684\u6570\u636e\u65f6\uff0c\u8be5\u8fc7\u7a0b\u5219\u76f8\u53cd\uff1a\u4ece MQ \u8bfb\u53d6\u6570\u636e\uff0c\u6570\u636e\u683c\u5f0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"byte[]"),"\uff0c\u53cd\u5e8f\u5217\u5316\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"Format"),"\uff0c\u518d\u8f6c\u6362\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"Flink row"),"\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8be6\u60c5\u8bf7\u67e5\u770b\u4ee3\u7801 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/release-1.5.0/inlong-sort/sort-formats"},(0,l.kt)("inlineCode",{parentName:"a"},"inlong-sort/sort-formats")))),(0,l.kt)("h2",{id:"inlong-\u4e2d\u7684-format"},"InLong \u4e2d\u7684 Format"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(81423).Z,width:"803",height:"271"})),(0,l.kt)("p",null,"InLong \u4f5c\u4e3a\u4e00\u7ad9\u5f0f\u7684\u6570\u636e\u96c6\u6210\u5e73\u53f0\uff0c\u5c06 MQ\uff08\u56fe\u4e2d Cache \u90e8\u5206\uff09\u4f5c\u4e3a\u4f20\u8f93\u901a\u9053\uff0c\u540c\u65f6\u5b9e\u73b0 DataProxy \u4e0e Sort \u7684\u89e3\u8026\uff0c\u6269\u5c55\u6027\u4f1a\u66f4\u5f3a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DataProxy \u4e0a\u62a5\u6570\u636e\u65f6\uff0c\u9700\u8981\u5c06\u6570\u636e\u5e8f\u5217\u5316\u6210\u5bf9\u5e94\u7684\u683c\u5f0f\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"SerializationSchema#serialize"),"\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"Sort \u63a5\u6536\u5230\u6570\u636e\uff0c\u5c06 MQ \u7684\u6570\u636e\u53cd\u5e8f\u5217\u5316\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"DeserializationSchema#deserialize"),"\uff09\u6210 ",(0,l.kt)("inlineCode",{parentName:"li"},"Flink Row")," \uff0c\u901a\u8fc7 Flink SQL \u5199\u5165\u5230\u5bf9\u5e94\u7684\u5b58\u50a8\u3002")),(0,l.kt)("h2",{id:"\u6709\u54ea\u4e9b-format"},"\u6709\u54ea\u4e9b Format?"),(0,l.kt)("p",null,"\u76ee\u524d\uff0cInLong-Sort \u63d0\u4f9b\u4e86 CSV/KeyValue/JSON\uff0c\u4ee5\u53ca\u901a\u8fc7 InLongMsg \u5c01\u88c5\u7684\u683c\u5f0f\u3002"),(0,l.kt)("h3",{id:"csv"},"CSV"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>org.apache.inlong</groupId>\n<artifactId>sort-format-csv</artifactId>\n<version>${inlong.version}</version>\n</dependency>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.inlong.sort.formats.kv.KvFormatFactory")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ad8\u7ea7\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format.delimiter")),(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},",")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format.escape-character")),(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format.quote-character")),(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format.null-literal")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format.charset")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},'"UTF-8"'),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format.ignore-errors")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format.derive_schema")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u672a\u5b9a\u4e49 Format Schema\uff0c\u5219\u4e3a\u5fc5\u9700\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u8868\u7684 Schema \u4e2d\u6d3e\u751f Format Schema \u3002 \u8fd9\u5141\u8bb8\u53ea\u5b9a\u4e49\u4e00\u6b21schema \u4fe1\u606f\u3002 ",(0,l.kt)("br",null)," format \u7684\u540d\u79f0\u3001\u7c7b\u578b\u548c\u5b57\u6bb5\u987a\u5e8f\u7531\u8868\u7684 schema \u51b3\u5b9a\u3002 ",(0,l.kt)("br",null),"\u5982\u679c\u65f6\u95f4\u5c5e\u6027\u4e0d\u662f\u5b57\u6bb5\uff0c\u5219\u5ffd\u7565\u5b83\u4eec\u3002 ",(0,l.kt)("br",null)," \u201cfrom\u201d \u5b9a\u4e49\u88ab\u89e3\u91ca\u4e3a format \u4e2d\u7684\u5b57\u6bb5\u91cd\u547d\u540d\u3002")))),(0,l.kt)("h3",{id:"key-value"},"Key-Value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>org.apache.inlong</groupId>\n<artifactId>sort-format-kv</artifactId>\n<version>${inlong.version}</version>\n</dependency>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.inlong.sort.formats.csv.CsvFormatFactory")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ad8\u7ea7\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format.entry-delimiter")),(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"'&'"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format.kv-delimiter")),(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"'='"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format.escape-character")),(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format.quote-character")),(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format.null-literal")),(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format.charset")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},'"UTF-8"'),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format.ignore-errors")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format.derive_schema")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Required if no format schema is defined."),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u8868\u7684 Schema \u4e2d\u6d3e\u751f Format Schema \u3002 \u8fd9\u5141\u8bb8\u53ea\u5b9a\u4e49\u4e00\u6b21schema\u4fe1\u606f\u3002 ",(0,l.kt)("br",null)," format \u7684\u540d\u79f0\u3001\u7c7b\u578b\u548c\u5b57\u6bb5\u987a\u5e8f\u7531\u8868\u7684 schema \u51b3\u5b9a\u3002 ",(0,l.kt)("br",null),"\u5982\u679c\u65f6\u95f4\u5c5e\u6027\u4e0d\u662f\u5b57\u6bb5\uff0c\u5219\u5ffd\u7565\u5b83\u4eec\u3002 ",(0,l.kt)("br",null)," \u201cfrom\u201d \u5b9a\u4e49\u88ab\u89e3\u91ca\u4e3a format \u4e2d\u7684\u5b57\u6bb5\u91cd\u547d\u540d\u3002")))),(0,l.kt)("h3",{id:"json"},"JSON"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>org.apache.flink</groupId>\n<artifactId>flink-json</artifactId>\n<version>${flink.version}</version>\n</dependency>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.flink.formats.json.JsonFormatFactory")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.flink.formats.json.JsonOptions")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ad8\u7ea7\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ignore-parse-errors")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u6807\u5fd7\u4ee5\u8df3\u8fc7\u5177\u6709\u89e3\u6790\u9519\u8bef\u800c\u4e0d\u662f\u5931\u8d25\u7684\u5b57\u6bb5\u548c\u884c\uff1b ",(0,l.kt)("br",null),"\u5982\u679c\u51fa\u73b0\u9519\u8bef\uff0c\u5b57\u6bb5\u8bbe\u7f6e\u4e3a null\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e3a false\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"map-null-key.mode")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},'"FAIL"'),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u6807\u5fd7\uff0c\u7528\u4e8e\u5728\u5e8f\u5217\u5316map\u6570\u636e\u7684\u7a7a\u952e\u65f6\u63a7\u5236\u5904\u7406\u6a21\u5f0f\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u9009\u9879 DROP \u5c06\u5220\u9664map\u6570\u636e\u7684\u7a7a\u952e\u6761\u76ee\u3002",(0,l.kt)("br",null),"\u9009\u9879 LITERAL \u5c06\u4f7f\u7528 'map-null-key.literal' \u4f5c\u4e3a key \u5173\u952e\u5b57\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"map-null-key.literal")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},'"null"'),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u201cmap-null-key.mode\u201d\u4e3a LITERAL \u65f6\uff0c\u7528\u4e8e\u4e3a\u7a7a\u952e\u6307\u5b9a\u5b57\u7b26\u4e32\u6587\u5b57\u7684\u53ef\u9009\u6807\u5fd7\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"encode.decimal-as-plain-number")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u6807\u5fd7\uff0c\u7528\u4e8e\u6307\u5b9a\u662f\u5426\u5c06\u6240\u6709\u5c0f\u6570\u7f16\u7801\u4e3a\u666e\u901a\u6570\u5b57\u800c\u4e0d\u662f\u79d1\u5b66\u8bb0\u6570\u6cd5\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e3a false\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp-format.standard")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},'"SQL"'),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6307\u5b9a\u65f6\u95f4\u6233\u683c\u5f0f\u7684\u53ef\u9009\u6807\u5fd7\uff0c\u9ed8\u8ba4\u4e3a SQL\u3002",(0,l.kt)("br",null),"\u9009\u9879 ISO-8601 \u5c06\u4ee5\u201cyyyy-MM-ddTHH:mm:ss.s{precision}\u201d \u683c\u5f0f\u89e3\u6790\u8f93\u5165\u65f6\u95f4\u6233\uff0c\u5e76\u4ee5\u76f8\u540c\u683c\u5f0f\u8f93\u51fa\u65f6\u95f4\u6233\u3002 ",(0,l.kt)("br",null),"\u9009\u9879 SQL \u5c06\u4ee5\u201cyyyy-MM-dd HH:mm:ss.s{precision}\u201d\u683c\u5f0f\u89e3\u6790\u8f93\u5165\u65f6\u95f4\u6233\uff0c\u5e76\u4ee5\u76f8\u540c\u683c\u5f0f\u8f93\u51fa\u65f6\u95f4\u6233\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"encode.decimal-as-plain-number")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u6807\u5fd7\uff0c\u7528\u4e8e\u6307\u5b9a\u662f\u5426\u5c06\u6240\u6709\u5c0f\u6570\u7f16\u7801\u4e3a\u666e\u901a\u6570\u5b57\u800c\u4e0d\u662f\u53ef\u80fd\u7684\u79d1\u5b66\u8bb0\u6570\u6cd5\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),"\u3002")))))}u.isMDXComponent=!0},48186:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/format_and_flink-65dad61dae55e9aa7b697fd3fc41b910.png"},81423:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/the_format_in_inlong-f53068957d177750d03b42bd0c2cface.png"}}]);