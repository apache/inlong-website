"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[47516],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>d});var o=n(96540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=o.createContext({}),g=function(e){var r=o.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=g(e.components);return o.createElement(i.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=g(n),m=t,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(d,s(s({ref:r},c),{},{components:n})):o.createElement(d,s({ref:r},c))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:t,s[1]=l;for(var g=2;g<a;g++)s[g]=n[g];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16612:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>g});var o=n(58168),t=(n(96540),n(15680));const a={title:"\u914d\u7f6e\u8bf4\u660e",sidebar_position:2},s="\u53c2\u6570\u914d\u7f6e\u8bf4\u660e",l={unversionedId:"modules/transform/configuration",id:"modules/transform/configuration",title:"\u914d\u7f6e\u8bf4\u660e",description:"TransformConfig \u914d\u7f6e\u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/transform/configuration.md",sourceDirName:"modules/transform",slug:"/modules/transform/configuration",permalink:"/zh-CN/docs/next/modules/transform/configuration",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/transform/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u914d\u7f6e\u8bf4\u660e",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/transform/overview"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/data_node/extract_node/overview"}},i={},g=[{value:"TransformConfig \u914d\u7f6e\u8bf4\u660e",id:"transformconfig-\u914d\u7f6e\u8bf4\u660e",level:2},{value:"SourceInfo \u914d\u7f6e\u8bf4\u660e",id:"sourceinfo-\u914d\u7f6e\u8bf4\u660e",level:2},{value:"CSV",id:"csv",level:3},{value:"KV",id:"kv",level:3},{value:"ProtoBuffer",id:"protobuffer",level:3},{value:"\u751f\u6210ProtoBuf \u534f\u8bae\u63cf\u8ff0",id:"\u751f\u6210protobuf-\u534f\u8bae\u63cf\u8ff0",level:4},{value:"Json",id:"json",level:3},{value:"SinkInfo \u914d\u7f6e\u8bf4\u660e",id:"sinkinfo-\u914d\u7f6e\u8bf4\u660e",level:2},{value:"CSV",id:"csv-1",level:3},{value:"KV",id:"kv-1",level:3},{value:"CSV / KV \u5b57\u6bb5\u5f15\u7528",id:"csv--kv-\u5b57\u6bb5\u5f15\u7528",level:2},{value:"ProtoBuf / Json \u6811\u5f62\u5b57\u6bb5\u5f15\u7528",id:"protobuf--json-\u6811\u5f62\u5b57\u6bb5\u5f15\u7528",level:2},{value:"\u8fd0\u7b97\u7b26\u652f\u6301",id:"\u8fd0\u7b97\u7b26\u652f\u6301",level:2},{value:"\u51fd\u6570\u8bf4\u660e",id:"\u51fd\u6570\u8bf4\u660e",level:2},{value:"SQL \u6837\u4f8b",id:"sql-\u6837\u4f8b",level:2}],c={toc:g},p="wrapper";function u(e){let{components:r,...a}=e;return(0,t.yg)(p,(0,o.A)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u53c2\u6570\u914d\u7f6e\u8bf4\u660e"},"\u53c2\u6570\u914d\u7f6e\u8bf4\u660e"),(0,t.yg)("h2",{id:"transformconfig-\u914d\u7f6e\u8bf4\u660e"},"TransformConfig \u914d\u7f6e\u8bf4\u660e"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'public class TransformConfig {\n    @JsonProperty("sourceInfo")\n    private SourceInfo sourceInfo;    // \u6570\u636e\u6e90\u7684\u89e3\u7801\u5b9a\u4e49\n    @JsonProperty("sinkInfo")\n    private SinkInfo sinkInfo;        // \u6570\u636e\u7ed3\u679c\u7684\u7f16\u7801\u5b9a\u4e49\n    @JsonProperty("transformSql")\n    private String transformSql;    // \u6570\u636e\u8f6c\u6362\u7684 SQL\n}\n')),(0,t.yg)("h2",{id:"sourceinfo-\u914d\u7f6e\u8bf4\u660e"},"SourceInfo \u914d\u7f6e\u8bf4\u660e"),(0,t.yg)("h3",{id:"csv"},"CSV"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'public CsvSourceInfo(\n    @JsonProperty("charset") String charset,        // \u5b57\u7b26\u96c6\n    @JsonProperty("delimiter") String delimiter,    // \u5206\u9694\u7b26\n    @JsonProperty("escapeChar") String escapeChar,  // \u8f6c\u4e49\u7b26\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u5219\u89e3\u7801\u65f6\u4e0d\u8fdb\u884c\u53cd\u8f6c\u4e49\u64cd\u4f5c\n    @JsonProperty("fields") List<FieldInfo> fields) // \u5b57\u6bb5\u5217\u8868\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u5219\u89e3\u7801\u65f6\u9ed8\u8ba4\u6309\u5206\u9694\u7b26\u89e3\u6790\uff0c\u5b57\u6bb5\u540d\u6309 $1\u3001$2\u3001$3...\u6765\u5206\u914d\uff0c\u6ce8\u610f\u4ece1\u5f00\u59cb\uff1b\n);\n')),(0,t.yg)("h3",{id:"kv"},"KV"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'public KvSourceInfo(\n    @JsonProperty("charset") String charset,        // \u5b57\u7b26\u96c6\n    @JsonProperty("fields") List<FieldInfo> fields) // \u5b57\u6bb5\u5217\u8868\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u5219\u89e3\u7801\u65f6\u9ed8\u8ba4\u6309 KV \u91cc\u7684 Key \u4f5c\u4e3a\u5b57\u6bb5\u540d\n);\n')),(0,t.yg)("h3",{id:"protobuffer"},"ProtoBuffer"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'public PbSourceInfo(\n    @JsonProperty("charset") String charset,                    // \u5b57\u7b26\u96c6\n    @JsonProperty("protoDescription") String protoDescription,  // ProtoBuf \u534f\u8bae\u63cf\u8ff0\u7684 Base64 \u7f16\u7801\n    @JsonProperty("rootMessageType") String rootMessageType,    // \u89e3\u7801\u6e90\u6570\u636e\u7684 MessageType \uff0cMessageType \u9700\u8981\u5728 ProtoBuf \u534f\u8bae\u4e2d\u5df2\u5b9a\u4e49\n    @JsonProperty("rowsNodePath") String rowsNodePath)          // ProtoBuf \u534f\u8bae\u5305\u542b\u591a\u6761\u5f85\u8f6c\u6362\u6570\u636e\u7684\u6570\u7ec4\u8282\u70b9\u8def\u5f84\n);\n')),(0,t.yg)("h4",{id:"\u751f\u6210protobuf-\u534f\u8bae\u63cf\u8ff0"},"\u751f\u6210ProtoBuf \u534f\u8bae\u63cf\u8ff0"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5b89\u88c5 Protocol Buffers compiler")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'PB_REL="https://github.com/protocolbuffers/protobuf/releases"\ncurl -LO $PB_REL/download/v3.15.8/protoc-3.15.8-linux-x86_64.zip\nunzip protoc-3.15.8-linux-x86_64.zip -d $HOME/.local\nexport PATH="$HOME/.local/bin:$PATH"\nprotoc --version\n#\u663e\u793alibprotoc 3.15.8\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u89e3\u6790\u534f\u8bae\u751f\u6210\u63cf\u8ff0\u7684 Base64 \u7f16\u7801")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# transform.proto \u662f proto \u534f\u8bae\u6587\u4ef6\uff0ctransform.description \u662f\u534f\u8bae\u89e3\u6790\u540e\u7684\u4e8c\u8fdb\u5236\u63cf\u8ff0\u6587\u4ef6\nprotoc --descriptor_set_out=transform.description ./transform.proto --proto_path=.\n# \u5c06\u534f\u8bae\u89e3\u6790\u540e\u7684\u4e8c\u8fdb\u5236\u63cf\u8ff0\u6587\u4ef6 transform.description \u8fdb\u884c Base64 \u7f16\u7801\uff0c\u5199\u5165\u6587\u4ef6 transform.base64\uff0c\u8fd9\u4e2a\u6587\u4ef6\u5185\u5bb9\u5c31\u662f\u914d\u7f6e\u63a5\u53e3\u4e2d\u7684\u53c2\u6570\uff1aprotoDescription\nbase64 transform.description |tr -d '\\n' > transform.base64\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"transform.proto \u6837\u4f8b")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\npackage test;\nmessage SdkMessage {\n  bytes msg = 1;\n  int64 msgTime = 2;\n  map<string, string> extinfo = 3;\n}\nmessage SdkDataRequest {\n  string sid = 1;\n  repeated SdkMessage msgs = 2;\n  uint64 packageID = 3;\n}\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"transform.base64 \u6837\u4f8b")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"CrcCCg90cmFuc2Zvcm0ucHJvdG8SBHRlc3QirQEKClNka01lc3NhZ2USEAoDbXNnGAEgASgMUgNtc2cSGAoHbXNnVGltZRgCIAEoA1IHbXNnVGltZRI3CgdleHRpbmZvGAMgAygLMh0udGVzdC5TZGtNZXNzYWdlLkV4dGluZm9FbnRyeVIHZXh0aW5mbxo6CgxFeHRpbmZvRW50cnkSEAoDa2V5GAEgASgJUgNrZXkSFAoFdmFsdWUYAiABKAlSBXZhbHVlOgI4ASJmCg5TZGtEYXRhUmVxdWVzdBIQCgNzaWQYASABKAlSA3NpZBIkCgRtc2dzGAIgAygLMhAudGVzdC5TZGtNZXNzYWdlUgRtc2dzEhwKCXBhY2thZ2VJRBgDIAEoBFIJcGFja2FnZUlEYgZwcm90bzM=\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"transform.description \u6837\u4f8b\n",(0,t.yg)("img",{src:n(66233).A,width:"1500",height:"1062"}))),(0,t.yg)("h3",{id:"json"},"Json"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'public JsonSourceInfo(\n    @JsonProperty("charset") String charset,            // \u5b57\u7b26\u96c6\n    @JsonProperty("rowsNodePath") String rowsNodePath)  // Json \u534f\u8bae\u5305\u542b\u591a\u6761\u5f85\u8f6c\u6362\u6570\u636e\u7684\u6570\u7ec4\u8282\u70b9\u8def\u5f84\n);\n')),(0,t.yg)("h2",{id:"sinkinfo-\u914d\u7f6e\u8bf4\u660e"},"SinkInfo \u914d\u7f6e\u8bf4\u660e"),(0,t.yg)("h3",{id:"csv-1"},"CSV"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'public CsvSinkInfo(\n    @JsonProperty("charset") String charset,        // \u5b57\u7b26\u96c6\n    @JsonProperty("delimiter") String delimiter,    // \u5206\u9694\u7b26\n    @JsonProperty("escapeChar") String escapeChar,  // \u8f6c\u4e49\u7b26\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u5219\u7f16\u7801\u65f6\u4e0d\u8fdb\u884c\u8f6c\u4e49\u64cd\u4f5c\n    @JsonProperty("fields") List<FieldInfo> fields) // \u5b57\u6bb5\u5217\u8868\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u5219\u7f16\u7801\u65f6\u9ed8\u8ba4\u6309 TransformSQL \u7684 Select \u5b57\u6bb5\u987a\u5e8f\u62fc\u63a5\n);\n')),(0,t.yg)("h3",{id:"kv-1"},"KV"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'public KvSinkInfo(\n    @JsonProperty("charset") String charset,        // \u5b57\u7b26\u96c6\n    @JsonProperty("fields") List<FieldInfo> fields) // \u5b57\u6bb5\u5217\u8868\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u5219\u7f16\u7801\u65f6\u9ed8\u8ba4\u6309 TransformSQL \u7684 Select \u5b57\u6bb5 Alias \u4f5c\u4e3a Key \u62fc\u63a5\n);\n')),(0,t.yg)("h1",{id:"transformsql-\u914d\u7f6e\u8bf4\u660e"},"TransformSQL \u914d\u7f6e\u8bf4\u660e"),(0,t.yg)("h2",{id:"csv--kv-\u5b57\u6bb5\u5f15\u7528"},"CSV / KV \u5b57\u6bb5\u5f15\u7528"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"SourceInfo \u6ca1\u6709\u914d\u7f6e\u5b57\u6bb5\u5217\u8868\u3002",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"CSV \u683c\u5f0f\uff0c\u5b57\u6bb5\u540d\u7528 $1\u3001$2\u3001$3... \u6765\u5f15\u7528\u3002"),(0,t.yg)("li",{parentName:"ul"},"KV \u683c\u5f0f\uff0c\u5b57\u6bb5\u540d\u76f4\u63a5\u5f15\u7528\u6e90\u6570\u636e\u4e2d\u7684 Key\u3002"))),(0,t.yg)("li",{parentName:"ul"},"SourceInfo \u7684\u5b57\u6bb5\u540d\u548c SinkInfo \u5b57\u6bb5\u540d\u4e0d\u4e00\u81f4\uff0c\u53ef\u4ee5\u901a\u8fc7 Select \u5b57\u6bb5\u7684\u522b\u540d\u6620\u5c04\u8f6c\u6362\u3002")),(0,t.yg)("h2",{id:"protobuf--json-\u6811\u5f62\u5b57\u6bb5\u5f15\u7528"},"ProtoBuf / Json \u6811\u5f62\u5b57\u6bb5\u5f15\u7528"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u6240\u6709\u5b57\u6bb5\u53ea\u80fd\u4ee5 $root.\u3001$child. \u4f5c\u4e3a\u524d\u7f00\uff0c$root \u8868\u793a\u6839\u8282\u70b9\uff0c$child \u8868\u793a\u591a\u884c\u7684\u6570\u7ec4\u8282\u70b9\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u591a\u7ea7\u8282\u70b9\uff0c\u7528\u5c0f\u6570\u70b9\u5206\u9694\uff0c\u5982 $root.extParams.name\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6570\u7ec4\u8282\u70b9\uff0c\u7528\u5c0f\u62ec\u53f7\u6807\u8bc6\u6570\u7ec4\u4e0b\u6807\uff0c\u5982 $root.msgs(1).msgTime\u3002")),(0,t.yg)("h2",{id:"\u8fd0\u7b97\u7b26\u652f\u6301"},"\u8fd0\u7b97\u7b26\u652f\u6301"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u76ee\u524d\u5df2\u652f\u6301\u8fd0\u7b97\u7b26",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u7b97\u672f\u8fd0\u7b97\u7b26\uff0c+\u3001-\u3001*\u3001/\u3001(\u3001)"),(0,t.yg)("li",{parentName:"ul"},"\u6bd4\u8f83\u8fd0\u7b97\u7b26\uff0c=\u3001!=\u3001>\u3001>=\u3001<\u3001<="),(0,t.yg)("li",{parentName:"ul"},"\u903b\u8f91\u8fd0\u7b97\u7b26\uff0cand\u3001or\u3001!\u3001not\u3001(\u3001)")))),(0,t.yg)("h2",{id:"\u51fd\u6570\u8bf4\u660e"},"\u51fd\u6570\u8bf4\u660e"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"CONCAT(string1, string2, ...)\uff0c\u8fd4\u56de\u8fde\u63a5 string1\uff0cstring2\uff0c \u2026 \u7684\u5b57\u7b26\u4e32\u3002\u5982\u679c\u6709\u4efb\u4e00\u53c2\u6570\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002 \u4f8b\u5982 CONCAT('AA', 'BB', 'CC') \u8fd4\u56de \"AABBCC\"\u3002"),(0,t.yg)("li",{parentName:"ul"},"NOW()\uff0c\u8fd4\u56de\u672c\u5730\u65f6\u533a\u7684\u5f53\u524d SQL \u65f6\u95f4\u6233\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u8be6\u89c1\u51fd\u6570\u8bf4\u660e\u7ae0\u8282\u3002")),(0,t.yg)("h2",{id:"sql-\u6837\u4f8b"},"SQL \u6837\u4f8b"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT ftime,extinfo FROM source WHERE extinfo='ok'\n\nSELECT $1 ftime,$2 extinfo FROM source WHERE $2!='ok'\n\nSELECT $root.sid,$root.packageID,$child.msgTime,$child.msg FROM source\n\nSELECT $root.sid,$root.packageID,$root.msgs(1).msgTime,$root.msgs(0).msg FROM source\n\nSELECT $root.sid,\n  ($root.msgs(1).msgTime-$root.msgs(0).msgTime)/$root.packageID field2,\n  $root.packageID*($root.msgs(0).msgTime*$root.packageID+$root.msgs(1).msgTime/$root.packageID)*$root.packageID field3,\n  $root.msgs(0).msg field4\nFROM source \nWHERE $root.packageID<($root.msgs(0).msgTime+$root.msgs(1).msgTime+$root.msgs(0).msgTime+$root.msgs(1).msgTime)\n\nSELECT $root.sid,\n  $root.packageID,\n  $child.msgTime,\n  concat($root.sid,$root.packageID,$child.msgTime,$child.msg) msg,$root.msgs.msgTime.msg\nFROM source\n\nSELECT now() FROM source\n")),(0,t.yg)("h1",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"SDK \u8c03\u7528\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u914d\u7f6e\u53d8\u66f4\uff0c\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\u7684\u53c2\u6570\u662f\u4e0d\u8d77\u6548\u679c\u7684\uff0c\u9700\u8981\u91cd\u5efa SDK \u5bf9\u8c61\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c CSV\u3001KV \u683c\u5f0f\u7684\u8f6c\u6362\u6e90\u6570\u636e\u91cc\u5305\u542b\u6362\u884c\u7b26\u3001\u5206\u9694\u7b26\uff08\u7ad6\u7ebf\u3001\u9017\u53f7\u7b49\uff09\u3001\u53cd\u659c\u6760(\u8f6c\u4e49\u7b26)\uff0c\u9700\u8981\u914d\u7f6e\u6b63\u786e\u7684\u8f6c\u4e49\u7b26\u548c\u884c\u5206\u9694\u7b26\u3002",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u90a3\u4e48\u8f6c\u6362\u540e\u6570\u636e\u7684\u5b57\u6bb5\u987a\u5e8f\u4f1a\u53d1\u751f\u9519\u4e71\uff0c\u6362\u884c\u7b26\u4f1a\u5bfc\u81f4\u4e00\u6761\u6570\u636e\u53d8\u4e24\u6761\uff0c\u7ad6\u7ebf\u5206\u9694\u7b26\u4f1a\u5bfc\u81f4\u5b57\u6bb5\u9519\u4f4d\u3002"))),(0,t.yg)("li",{parentName:"ul"},"\u907f\u514d\u5728\u5904\u7406\u6bcf\u6761\u6570\u636e\u65f6\u90fd\u521b\u5efa\u4e00\u4e2a SDK \u5bf9\u8c61\uff0cSDK \u5bf9\u8c61\u521d\u59cb\u5316\u9700\u8981\u7f16\u8bd1\u8f6c\u6362 SQL \u5e76\u5efa\u7acb AST \u8bed\u4e49\u89e3\u6790\u6811\uff0c\u9891\u7e41\u8c03\u7528\u4f1a\u5f15\u53d1\u6027\u80fd\u95ee\u9898\uff0c\u63a8\u8350\u7684\u4f7f\u7528\u65b9\u5f0f\u4e3a\u5728\u7a0b\u5e8f\u4e2d\u590d\u7528\u4e00\u4e2a\u521d\u59cb\u5316\u597d\u7684 SDK \u5bf9\u8c61\u5904\u7406\u6570\u636e\u3002")))}u.isMDXComponent=!0},66233:(e,r,n)=>{n.d(r,{A:()=>o});const o=n.p+"assets/images/transform_description-8efbbfca61b3ffa623d6d5686de7f316.png"}}]);