"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8578],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>N});var a=e(67294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,a,o=function(t,n){if(null==t)return{};var e,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var s=a.createContext({}),d=function(t){var n=a.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},p=function(t){var n=d(t.components);return a.createElement(s.Provider,{value:n},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=d(e),m=o,N=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return e?a.createElement(N,l(l({ref:n},p),{},{components:e})):a.createElement(N,l({ref:n},p))}));function N(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var r=e.length,l=new Array(r);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=t,i[c]="string"==typeof t?t:o,l[1]=i;for(var d=2;d<r;d++)l[d]=e[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},79093:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=e(87462),o=(e(67294),e(3905));const r={title:"Sort \u63d2\u4ef6",sidebar_position:3},l=void 0,i={unversionedId:"design_and_concept/how_to_extend_data_node_for_sort",id:"version-1.5.0/design_and_concept/how_to_extend_data_node_for_sort",title:"Sort \u63d2\u4ef6",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.5.0/design_and_concept/how_to_extend_data_node_for_sort.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_extend_data_node_for_sort",permalink:"/zh-CN/docs/design_and_concept/how_to_extend_data_node_for_sort",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/design_and_concept/how_to_extend_data_node_for_sort.md",tags:[],version:"1.5.0",sidebarPosition:3,frontMatter:{title:"Sort \u63d2\u4ef6",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Agent \u63d2\u4ef6",permalink:"/zh-CN/docs/design_and_concept/how_to_write_plugin_agent"},next:{title:"Dashboard \u63d2\u4ef6",permalink:"/zh-CN/docs/design_and_concept/how_to_write_plugin_dashboard"}},s={},d=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u6269\u5c55 Extract Node",id:"\u6269\u5c55-extract-node",level:2},{value:"\u6269\u5c55 Load Node",id:"\u6269\u5c55-load-node",level:2},{value:"\u96c6\u6210\u5230 Entrance",id:"\u96c6\u6210\u5230-entrance",level:2}],p={toc:d};function c(t){let{components:n,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,o.kt)("p",null,"InLong Sort \u662f\u4e00\u4e2a\u57fa\u4e8e Apache Flink SQL \u7684 ETL \u670d\u52a1\u3002Flink SQL \u5f3a\u5927\u7684\u8868\u8fbe\u80fd\u529b\u5e26\u6765\u7684\u9ad8\u53ef\u6269\u5c55\u6027\u3001\u7075\u6d3b\u6027\uff0c\u57fa\u672c\u4e0a Flink SQL \u652f\u6301\u7684\u8bed\u610f\uff0cInLong Sort \u90fd\u652f\u6301\u3002\n\u5f53 Flink SQL \u5185\u7f6e\u7684\u51fd\u6570\u4e0d\u6ee1\u8db3\u9700\u6c42\u65f6\uff0c\u8fd8\u53ef\u901a\u8fc7 UDF \u6765\u6269\u5c55\u3002\u8fd9\u5bf9\u4e8e\u66fe\u7ecf\u4f7f\u7528\u8fc7 SQL \u5c24\u5176\u662f Flink SQL \u7684\u5f00\u53d1\u8005\u975e\u5e38\u53cb\u597d\u3002"),(0,o.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 InLong Sort \u4e2d\u6269\u5c55\u4e00\u4e2a\u65b0\u7684 source\uff08\u5728 InLong \u4e2d\u62bd\u8c61\u4e3a Extract Node\uff09\u6216\u4e00\u4e2a\u65b0\u7684 sink\uff08\u5728InLong\u4e2d\u62bd\u8c61\u4e3a Load Node \uff09\u3002\nInLong Sort \u67b6\u6784\u7684 UML \u5bf9\u8c61\u5173\u7cfb\u56fe\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sort_uml",src:e(4586).Z,width:"2576",height:"869"})),(0,o.kt)("p",null,"\u5176\u4e2d\u5404\u4e2a\u7ec4\u4ef6\u7684\u6982\u5ff5\u4e3a\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u540d\u79f0")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6d41\u7ec4\uff0c\u5305\u542b\u591a\u4e2a\u6570\u636e\u6d41\uff0c\u4e00\u4e2a Group \u4ee3\u8868\u4e00\u4e2a\u6570\u636e\u63a5\u5165")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Stream"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6d41\uff0c\u4e00\u4e2a\u6570\u636e\u6d41\u6709\u5177\u4f53\u7684\u6d41\u5411")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GroupInfo"),(0,o.kt)("td",{parentName:"tr",align:null},"Sort \u4e2d\u5bf9\u6570\u636e\u6d41\u5411\u7684\u5c01\u88c5\uff0c\u4e00\u4e2a GroupInfo \u53ef\u5305\u542b\u591a\u4e2a DataFlowInfo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"StreamInfo"),(0,o.kt)("td",{parentName:"tr",align:null},"Sort \u4e2d\u6570\u636e\u6d41\u5411\u7684\u62bd\u8c61\uff0c\u5305\u542b\u8be5\u6570\u636e\u6d41\u7684\u5404\u79cd\u6765\u6e90\u3001\u8f6c\u6362\u3001\u53bb\u5411\u7b49")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u540c\u6b65\u4e2d\u6570\u636e\u6e90\u3001\u6570\u636e\u8f6c\u6362\u3001\u6570\u636e\u53bb\u5411\u7684\u62bd\u8c61")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ExtractNode"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u540c\u6b65\u7684\u6765\u6e90\u7aef\u62bd\u8c61")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TransformNode"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u540c\u6b65\u7684\u8f6c\u6362\u8fc7\u7a0b\u62bd\u8c61")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LoadNode"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u540c\u6b65\u7684\u53bb\u5411\u7aef\u62bd\u8c61")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NodeRelationShip"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u540c\u6b65\u4e2d\u5404\u4e2a\u8282\u70b9\u5173\u7cfb\u62bd\u8c61")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FieldRelationShip"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u540c\u6b65\u4e2d\u4e0a\u4e0b\u6e38\u8282\u70b9\u5b57\u6bb5\u95f4\u5173\u7cfb\u7684\u62bd\u8c61")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FieldInfo"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9\u5b57\u6bb5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MetaFieldInfo"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9 Meta \u5b57\u6bb5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8f6c\u6362\u51fd\u6570\u7684\u62bd\u8c61")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FunctionParam"),(0,o.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570\u7684\u5165\u53c2\u62bd\u8c61")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ConstantParam"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5e38\u91cf\u53c2\u6570")))),(0,o.kt)("p",null,"\u6269\u5c55 Extract Node \u6216 Load Node \u9700\u8981\u505a\u7684\u5de5\u4f5c\u662f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7ee7\u627f Node \u7c7b\uff08\u4f8b\u5982 MyExtractNode\uff09\uff0c\u6784\u5efa\u5177\u4f53\u7684 extract \u6216 load \u4f7f\u7528\u903b\u8f91\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u5177\u4f53\u7684 Node \u7c7b\uff08\u4f8b\u5982 MyExtractNode\uff09\u4e2d\uff0c\u6307\u5b9a\u5bf9\u5e94 Flink connector\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u5177\u4f53\u7684 ETL \u5b9e\u73b0\u903b\u8f91\u4e2d\u4f7f\u7528\u5177\u4f53\u7684 Node \u7c7b\uff08\u4f8b\u5982 MyExtractNode\uff09\u3002")),(0,o.kt)("p",null,"\u5176\u4e2d\u7b2c\u4e8c\u6b65\u4e2d\u53ef\u4ee5\u4f7f\u7528\u5df2\u6709\u7684 Flink Connector\uff0c\u6216\u8005\u7528\u6237\u81ea\u5df1\u6269\u5c55\uff0c\u5982\u4f55\u6269\u5c55 Flink Connector \u8bf7\u53c2\u8003 Flink \u5b98\u65b9\u6587\u6863",(0,o.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/datastream/overview/#datastream-connectors"},"DataStream Connectors "),"."),(0,o.kt)("h2",{id:"\u6269\u5c55-extract-node"},"\u6269\u5c55 Extract Node"),(0,o.kt)("p",null,"\u6269\u5c55\u4e00\u4e2a ExtractNode \u5206\u4e3a\u4e09\u4e2a\u6b65\u9aa4\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b65"),"\uff1a\u7ee7\u627f ExtractNode \u7c7b\uff0c\u7c7b\u7684\u4f4d\u7f6e\u5728:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"inlong-sort/sort-common/src/main/java/org/apache/inlong/sort/protocol/node/ExtractNode.java\n")),(0,o.kt)("p",null,"\u5728\u5b9e\u73b0\u7684 ExtractNode \u4e2d\u6307\u5b9a connector\uff1b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Java"},'// \u7ee7\u627f ExtractNode \u7c7b\uff0c\u5b9e\u73b0\u5177\u4f53\u7684\u7c7b\uff0c\u4f8b\u5982 MongoExtractNode\n@EqualsAndHashCode(callSuper = true)\n@JsonTypeName("MongoExtract")\n@Data\npublic class MongoExtractNode extends ExtractNode implements Serializable {\n    @JsonInclude(Include.NON_NULL)\n    @JsonProperty("primaryKey")\n    private String primaryKey;\n    ...\n\n    @JsonCreator\n    public MongoExtractNode(@JsonProperty("id") String id, ...) { ... }\n\n    @Override\n    public Map<String\uff0c String> tableOptions() {\n        Map<String\uff0c String> options = super.tableOptions();\n        // \u914d\u7f6e\u6307\u5b9a\u7684 connector\uff0c\u8fd9\u91cc\u6307\u5b9a\u7684\u662f mongodb-cdc\n        options.put("connector", "mongodb-cdc");\n        ...\n        return options;\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u6b65"),"\uff1a\u5728 ExtractNode \u548c Node \u4e2d\u7684 JsonSubTypes \u6dfb\u52a0\u8be5 Extract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// \u5728 ExtractNode \u548c Node \u7684 JsonSubTypes \u4e2d\u6dfb\u52a0\u5b57\u6bb5\n...\n@JsonSubTypes({\n        @JsonSubTypes.Type(value = MongoExtractNode.class\uff0c name = "mongoExtract")\n})\n...\npublic abstract class ExtractNode implements Node{...}\n\n...\n@JsonSubTypes({\n        @JsonSubTypes.Type(value = MongoExtractNode.class\uff0c name = "mongoExtract")\n})\npublic interface Node {...}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c\u4e09\u6b65"),"\uff1a\u6269\u5c55 Sort Connector\uff0c\u67e5\u770b\u6b64\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-sort/sort-connectors/mongodb-cdc"),"\uff09\u76ee\u5f55\u4e0b\u662f\u5426\u5df2\u7ecf\u5b58\u5728\u5bf9\u5e94\u7684 connector\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5219\u9700\u8981\u53c2\u8003 Flink \u5b98\u65b9\u6587\u6863 ",(0,o.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/datastream/overview/#datastream-connectors"},"DataStream Connectors ")," \u6765\u6269\u5c55\uff0c\n\u8c03\u7528\u5df2\u6709\u7684 Flink-connector\uff08\u4f8b\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-sort/sort-connectors/mongodb-cdc"),"\uff09\u6216\u81ea\u884c\u5b9e\u73b0\u76f8\u5173\u7684 connector \u5747\u53ef\u3002"),(0,o.kt)("h2",{id:"\u6269\u5c55-load-node"},"\u6269\u5c55 Load Node"),(0,o.kt)("p",null,"\u6269\u5c55\u4e00\u4e2a LoadNode \u5206\u4e3a\u4e09\u4e2a\u6b65\u9aa4\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b65"),"\uff1a\u7ee7\u627f LoadNode \u7c7b\uff0c\u7c7b\u7684\u4f4d\u7f6e\u5728:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"inlong-sort/sort-common/src/main/java/org/apache/inlong/sort/protocol/node/LoadNode.java\n")),(0,o.kt)("p",null,"\u5728\u5b9e\u73b0\u7684LoadNode \u4e2d\u6307\u5b9a connector\uff1b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// \u7ee7\u627f LoadNode \u7c7b\uff0c\u5b9e\u73b0\u5177\u4f53\u7684\u7c7b\uff0c\u4f8b\u5982 KafkaLoadNode\n@EqualsAndHashCode(callSuper = true)\n@JsonTypeName("kafkaLoad")\n@Data\n@NoArgsConstructor\npublic class KafkaLoadNode extends LoadNode implements Serializable {\n    @Nonnull\n    @JsonProperty("topic")\n    private String topic;\n    ...\n\n    @JsonCreator\n    public KafkaLoadNode(@Nonnull @JsonProperty("topic") String topic, ...) {...}\n\n    // \u6839\u636e\u4e0d\u540c\u7684\u6761\u4ef6\u914d\u7f6e\u4f7f\u7528\u4e0d\u540c\u7684 connector\n    @Override\n    public Map<String\uff0c String> tableOptions() {\n        ...\n        if (format instanceof JsonFormat || format instanceof AvroFormat || format instanceof CsvFormat) {\n            if (StringUtils.isEmpty(this.primaryKey)) {\n                // kafka connector\n                options.put("connector", "kafka");\n                options.putAll(format.generateOptions(false));\n            } else {\n                // upsert-kafka connector\n                options.put("connector", "upsert-kafka");\n                options.putAll(format.generateOptions(true));\n            }\n        } else if (format instanceof CanalJsonFormat || format instanceof DebeziumJsonFormat) {\n            // kafka-inlong connector\n            options.put("connector", "kafka-inlong");\n            options.putAll(format.generateOptions(false));\n        } else {\n            throw new IllegalArgumentException("kafka load Node format is IllegalArgument");\n        }\n        return options;\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u6b65"),"\uff1a\u5728 LoadNode \u548c Node \u4e2d\u7684 JsonSubTypes \u6dfb\u52a0\u8be5 Load"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// \u5728 LoadNode \u548c Node \u7684 JsonSubTypes \u4e2d\u6dfb\u52a0\u5b57\u6bb5\n...\n@JsonSubTypes({\n        @JsonSubTypes.Type(value = KafkaLoadNode.class, name = "kafkaLoad")\n})\n...\npublic abstract class LoadNode implements Node{...}\n\n...\n@JsonSubTypes({\n        @JsonSubTypes.Type(value = KafkaLoadNode.class, name = "kafkaLoad")\n})\npublic interface Node {...}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c\u4e09\u6b65"),"\uff1a\u6269\u5c55 Sort Connector\uff0cKafka \u7684 sort connector \u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-sort/sort-connectors/kafka")," \u76ee\u5f55\u4e0b\u3002"),(0,o.kt)("h2",{id:"\u96c6\u6210\u5230-entrance"},"\u96c6\u6210\u5230 Entrance"),(0,o.kt)("p",null,"\u5c06 Extract \u548c Load \u96c6\u6210\u5230 InLong Sort \u4e3b\u6d41\u7a0b\u4e2d\uff0c\u9700\u8981\u6784\u5efa\u603b\u89c8\u5c0f\u8282\u4e2d\u63d0\u5230\u7684\u8bed\u610f\uff1aGroup\u3001Stream\u3001Node \u7b49\u3002\nInLong Sort \u7684\u5165\u53e3\u7c7b\u5728:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"inlong-sort/sort-core/src/main/java/org/apache/inlong/sort/Entrance.java\n")),(0,o.kt)("p",null,"Extract \u548c Load \u5982\u4f55\u96c6\u6210\u81f3 InLong Sort\uff0c\u53ef\u53c2\u8003\u4e0b\u9762\u7684 UT\uff0c\u9996\u5148\u6784\u5efa\u5bf9\u5e94\u7684 ExtractNode\u3001LoadNode\uff0c\u518d\u6784\u5efa NodeRelation\u3001StreamInfo\u3001GroupInfo\uff0c\u6700\u540e\u901a\u8fc7 FlinkSqlParser \u6267\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class MongoExtractToKafkaLoad extends AbstractTestBase {\n\n    // \u6784\u5efa MongoExtractNode\n    private MongoExtractNode buildMongoNode() {\n        List<FieldInfo> fields = Arrays.asList(new FieldInfo("name", new StringFormatInfo()), ...);\n        return new MongoExtractNode(..., fields, ...);\n    }\n\n    // \u6784\u5efa KafkaLoadNode\n    private KafkaLoadNode buildAllMigrateKafkaNode() {\n        List<FieldInfo> fields = Arrays.asList(new FieldInfo("name", new StringFormatInfo()), ...);\n        List<FieldRelation> relations = Arrays.asList(new FieldRelation(new FieldInfo("name", new StringFormatInfo()), ...), ...);\n        CsvFormat csvFormat = new CsvFormat();\n        return new KafkaLoadNode(..., fields, relations, csvFormat\uff0c ...);\n    }\n\n    // \u6784\u5efa NodeRelation\n    private NodeRelation buildNodeRelation(List<Node> inputs\uff0c List<Node> outputs) {\n        List<String> inputIds = inputs.stream().map(Node::getId).collect(Collectors.toList());\n        List<String> outputIds = outputs.stream().map(Node::getId).collect(Collectors.toList());\n        return new NodeRelation(inputIds, outputIds);\n    }\n\n    // \u6d4b\u8bd5\u4e3b\u6d41\u7a0b MongoDB to Kafka\n    @Test\n    public void testMongoDbToKafka() throws Exception {\n        EnvironmentSettings settings = EnvironmentSettings. ... .build();\n        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n        ...\n        StreamTableEnvironment tableEnv = StreamTableEnvironment.create(env, settings);\n        Node inputNode = buildMongoNode();\n        Node outputNode = buildAllMigrateKafkaNode();\n        StreamInfo streamInfo = new StreamInfo("1", Arrays.asList(inputNode, outputNode), ...);\n        GroupInfo groupInfo = new GroupInfo("1", Collections.singletonList(streamInfo));\n        FlinkSqlParser parser = FlinkSqlParser.getInstance(tableEnv, groupInfo);\n        ParseResult result = parser.parse();\n        Assert.assertTrue(result.tryExecute());\n    }\n}\n')))}c.isMDXComponent=!0},4586:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/sort_uml-d90bb6f0835781e064b7417f266b7b30.png"}}]);