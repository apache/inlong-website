"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[68909],{15680:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>y});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=t.createContext({}),p=function(e){var n=t.useContext(g),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s=function(e){var n=p(e.components);return t.createElement(g.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,g=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,y=u["".concat(g,".").concat(c)]||u[c]||d[c]||i;return a?t.createElement(y,l(l({ref:n},s),{},{components:a})):t.createElement(y,l({ref:n},s))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8697:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=a(58168),r=(a(96540),a(15680));const i={title:"Agent \u63d2\u4ef6",sidebar_position:2},l=void 0,o={unversionedId:"design_and_concept/how_to_write_plugin_agent",id:"version-1.5.0/design_and_concept/how_to_write_plugin_agent",title:"Agent \u63d2\u4ef6",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.5.0/design_and_concept/how_to_write_plugin_agent.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_write_plugin_agent",permalink:"/zh-CN/docs/1.5.0/design_and_concept/how_to_write_plugin_agent",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/design_and_concept/how_to_write_plugin_agent.md",tags:[],version:"1.5.0",sidebarPosition:2,frontMatter:{title:"Agent \u63d2\u4ef6",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/zh-CN/docs/1.5.0/design_and_concept/basic_concept"},next:{title:"Sort \u63d2\u4ef6",permalink:"/zh-CN/docs/1.5.0/design_and_concept/how_to_extend_data_node_for_sort"}},g={},p=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u6982\u5ff5\u548c\u6a21\u578b",id:"\u6982\u5ff5\u548c\u6a21\u578b",level:2},{value:"\u6d41\u7a0b\u56fe\u793a",id:"\u6d41\u7a0b\u56fe\u793a",level:2},{value:"\u5f00\u53d1\u6d41\u7a0b",id:"\u5f00\u53d1\u6d41\u7a0b",level:2},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",level:2},{value:"Reader",id:"reader",level:3},{value:"Sink",id:"sink",level:3},{value:"Source",id:"source",level:3},{value:"\u4efb\u52a1\u914d\u7f6e",id:"\u4efb\u52a1\u914d\u7f6e",level:2},{value:"Message",id:"message",level:2}],s={toc:p},u="wrapper";function d(e){let{components:n,...i}=e;return(0,r.yg)(u,(0,t.A)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,r.yg)("p",null,"\u5728 Standard Architecture \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 InLong Agent \u6765\u91c7\u96c6\u5404\u79cd\u7c7b\u578b\u7684\u6570\u636e\u6e90\u3002InLong Agent \u652f\u6301\u4ee5\u63d2\u4ef6\u7684\u65b9\u5f0f\u6269\u5c55\u65b0\u7684\u91c7\u96c6\u7c7b\u578b\uff0c\u672c\u6587\u5c06\u6307\u5bfc\u5f00\u53d1\u8005\u5982\u4f55\u81ea\u5b9a\u4e49\u65b0\u7684 Agent \u91c7\u96c6\u63d2\u4ef6\u3002"),(0,r.yg)("h2",{id:"\u6982\u5ff5\u548c\u6a21\u578b"},"\u6982\u5ff5\u548c\u6a21\u578b"),(0,r.yg)("p",null,"InLong Agent \u662f\u4e00\u4e2a\u6570\u636e\u91c7\u96c6\u6846\u67b6\uff0c\u91c7\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Job")," + ",(0,r.yg)("inlineCode",{parentName:"p"},"Task")," \u67b6\u6784\u6a21\u578b\uff0c\u5c06\u6570\u636e\u6e90\u8bfb\u53d6\u548c\u5199\u5165\u62bd\u8c61\u6210\u4e3a Reader/Sink \u63d2\u4ef6\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Job"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"Job"),"\u662f Agent \u7528\u4ee5\u63cf\u8ff0\u4ece\u4e00\u4e2a\u6e90\u5934\u5230\u4e00\u4e2a\u76ee\u7684\u7aef\u7684\u540c\u6b65\u4f5c\u4e1a\uff0c\u662f Agent \u6570\u636e\u540c\u6b65\u7684\u6700\u5c0f\u4e1a\u52a1\u5355\u5143\u3002\u6bd4\u5982\uff1a\u8bfb\u53d6\u4e00\u4e2a\u6587\u4ef6\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Task"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"Task"),"\u662f\u628a",(0,r.yg)("inlineCode",{parentName:"li"},"Job"),"\u62c6\u5206\u5f97\u5230\u7684\u6700\u5c0f\u6267\u884c\u5355\u5143\u3002\u6bd4\u5982\uff1a\u6587\u4ef6\u5939\u4e0b\u6709\u591a\u4e2a\u6587\u4ef6\u9700\u8981\u88ab\u8bfb\u53d6\uff0c\u90a3\u4e48\u4e00\u4e2a job \u4f1a\u88ab\u62c6\u5206\u6210\u4e3a\u591a\u4e2a task \uff0c\u6bcf\u4e2a task \u8bfb\u53d6\u5bf9\u5e94\u7684\u6587\u4ef6")),(0,r.yg)("p",null,"\u4e00\u4e2a Task \u5305\u542b\u4ee5\u4e0b\u7ec4\u4ef6\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Reader\uff1a\u6570\u636e\u91c7\u96c6\u6a21\u5757\uff0c\u8d1f\u8d23\u91c7\u96c6\u6570\u636e\u6e90\u7684\u6570\u636e\uff0c\u5c06\u6570\u636e\u53d1\u9001\u7ed9 Channel\u3002"),(0,r.yg)("li",{parentName:"ul"},"Sink\uff1a \u6570\u636e\u5199\u5165\u6a21\u5757\uff0c\u8d1f\u8d23\u4e0d\u65ad\u5411 Channel \u53d6\u6570\u636e\uff0c\u5e76\u5c06\u6570\u636e\u5199\u5165\u5230\u76ee\u7684\u7aef\u3002"),(0,r.yg)("li",{parentName:"ul"},"Channel\uff1a\u8fde\u63a5 Reader \u548c Sink\uff0c\u4f5c\u4e3a\u4e24\u8005\u7684\u6570\u636e\u4f20\u8f93\u901a\u9053\uff0c\u5e76\u8d77\u5230\u4e86\u6570\u636e\u7684\u5199\u5165\u8bfb\u53d6\u76d1\u63a7\u4f5c\u7528\u3002")),(0,r.yg)("p",null,"\u5f53\u6269\u5c55\u4e00\u4e2a Agent \u63d2\u4ef6\u65f6\uff0c\u9700\u8981\u5f00\u53d1\u7279\u5b9a\u7684 Source\u3001Reader \u4ee5\u53ca Sink\uff0c\u6570\u636e\u5982\u679c\u9700\u8981\u6301\u4e45\u5316\u5230\u672c\u5730\u78c1\u76d8\uff0c\u4f7f\u7528\u6301\u4e45\u5316 Channel \uff0c\u5982\u679c\u5426\u5219\u4f7f\u7528\u5185\u5b58 Channel"),(0,r.yg)("h2",{id:"\u6d41\u7a0b\u56fe\u793a"},"\u6d41\u7a0b\u56fe\u793a"),(0,r.yg)("p",null,"\u4e0a\u8ff0\u4ecb\u7ecd\u7684 Job/Task/Reader/Sink/Channel \u6982\u5ff5\u53ef\u4ee5\u7528\u4e0b\u56fe\u8868\u793a\uff1a\n",(0,r.yg)("img",{src:a(8167).A,width:"691",height:"607"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u7528\u6237\u63d0\u4ea4 Job\uff08\u901a\u8fc7 manager\uff09\uff0cJob \u4e2d\u5b9a\u4e49\u4e86\u9700\u8981\u4f7f\u7528\u7684 Source, Channel, Sink\uff08\u901a\u8fc7\u7c7b\u7684\u5168\u9650\u5b9a\u540d\u5b9a\u4e49\uff09"),(0,r.yg)("li",{parentName:"ul"},"\u6846\u67b6\u542f\u52a8 Job\uff0c\u901a\u8fc7\u53cd\u5c04\u673a\u5236\u521b\u5efa\u51fa Source"),(0,r.yg)("li",{parentName:"ul"},"\u6846\u67b6\u542f\u52a8 Source\uff0c\u5e76\u8c03\u7528 Source \u7684 Split \u63a5\u53e3\uff0c\u751f\u6210\u4e00\u4e2a\u6216\u8005\u591a\u4e2a Task"),(0,r.yg)("li",{parentName:"ul"},"\u751f\u6210\u4e00\u4e2a Task \u65f6\uff0c\u540c\u65f6\u751f\u6210 Reader\uff08\u4e00\u79cd\u7c7b\u578b\u7684 Source \u4f1a\u751f\u6210\u5bf9\u5e94\u7684 reader)\uff0c\u7528\u6237\u914d\u7f6e\u7684 Channel \u4ee5\u53ca\u7528\u6237\u914d\u7f6e\u7684 Sink"),(0,r.yg)("li",{parentName:"ul"},"Task \u5f00\u59cb\u6267\u884c\uff0cReader \u5f00\u59cb\u8bfb\u53d6\u6570\u636e\u5230 Channel\uff0cSink \u4ece Channel \u4e2d\u53d6\u6570\u8fdb\u884c\u53d1\u9001"),(0,r.yg)("li",{parentName:"ul"},"Job \u548c Task \u6267\u884c\u65f6\u6240\u9700\u8981\u7684\u6240\u6709\u4fe1\u606f\u90fd\u5c01\u88c5\u5728 JobProfile \u4e2d")),(0,r.yg)("h2",{id:"\u5f00\u53d1\u6d41\u7a0b"},"\u5f00\u53d1\u6d41\u7a0b"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u9996\u5148\u5f00\u53d1 Source , \u5b9e\u73b0 Split \u903b\u8f91\uff0c\u8fd4\u56de Reader \u5217\u8868"),(0,r.yg)("li",{parentName:"ul"},"\u5f00\u53d1\u5bf9\u5e94\u7684 Reader \uff0c\u5b9e\u73b0\u8bfb\u53d6\u6570\u636e\u5e76\u5199\u5165\u5230 Channel \u7684\u903b\u8f91"),(0,r.yg)("li",{parentName:"ul"},"\u5f00\u53d1\u5bf9\u5e94\u7684 Sink , \u5b9e\u73b0\u4ece Channel \u4e2d\u53d6\u6570\u5e76\u5199\u5165\u5230\u6307\u5b9a Sink \u4e2d\u7684\u903b\u8f91")),(0,r.yg)("h2",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),(0,r.yg)("p",null,"\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5f00\u53d1\u4e00\u4e2a Agent \u63d2\u4ef6\u9700\u8981\u77e5\u9053\u7684\u7c7b\u4e0e\u63a5\u53e3\u3002"),(0,r.yg)("h3",{id:"reader"},"Reader"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'private class ReaderImpl implements Reader {\n\n    private int count = 0;\n\n    @Override\n    public Message read() {\n        count += 1;\n        return new DefaultMessage("".getBytes(StandardCharsets.UTF_8));\n    }\n\n    @Override\n    public boolean isFinished() {\n        return count > 99999;\n    }\n\n    @Override\n    public String getReadSource() {\n        return null;\n    }\n\n    @Override\n    public void setReadTimeout(long mill) {\n\n    }\n}\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Reader")," \u63a5\u53e3\u529f\u80fd\u5982\u4e0b\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"read"),": \u88ab\u5355\u4e2a Task \u8c03\u7528\uff0c\u8c03\u7528\u540e\u8fd4\u56de\u8bfb\u53d6\u7684\u4e00\u6761\u6d88\u606f\uff0cAgent \u5185\u90e8\u7684\u6d88\u606f\u4f7f\u7528 Message \u5c01\u88c5"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"isFinished"),": \u5224\u65ad\u662f\u5426\u8bfb\u53d6\u5b8c\u6210\uff0c\u4e3e\u4f8b\uff1a\u5982\u679c\u662f SQL \u4efb\u52a1\uff0c\u5219\u5224\u65ad\u662f\u5426\u8bfb\u53d6\u5b8c\u4e86 ResultSet \u4e2d\u7684\u6240\u6709\u5185\u5bb9,\u5982\u679c\u662f\u6587\u4ef6\u4efb\u52a1\uff0c\u5219\u5224\u65ad\u8d85\u8fc7\u7528\u6237\u8bbe\u7f6e\u7684\u7b49\u5f85\u65f6\u95f4\u540e\u662f\u5426\u8fd8\u6709\u6570\u636e\u5199\u5165"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"getReadSource"),": \u83b7\u53d6\u91c7\u96c6\u6e90\uff0c\u4e3e\u4f8b\uff1a\u5982\u679c\u662f\u6587\u4ef6\u4efb\u52a1\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u8bfb\u53d6\u7684\u6587\u4ef6\u540d"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"setReadTimeout"),": \u8bbe\u7f6e\u8bfb\u53d6\u8d85\u65f6\u65f6\u95f4")),(0,r.yg)("h3",{id:"sink"},"Sink"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public interface Sink extends Stage {\n\n    /**\n     * Write data into data center\n     *\n     * @param message - message\n     */\n    void write(Message message);\n\n    /**\n     * set source file name where the message is generated\n     * @param sourceName\n     */\n    void setSourceName(String sourceName);\n\n    /**\n     * every sink should include a message filter to filter out stream id\n     */\n    MessageFilter initMessageFilter(JobProfile jobConf);\n}\n\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Sink")," \u63a5\u53e3\u529f\u80fd\u5982\u4e0b\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"write"),": \u88ab\u5355\u4e2a Task \u8c03\u7528\uff0c\u4ece Task \u4e2d\u7684 Channel \u8bfb\u53d6\u4e00\u6761\u6d88\u606f\uff0c\u5e76\u5199\u5165\u5230\u7279\u5b9a\u7684\u5b58\u50a8\u4ecb\u8d28\u4e2d\uff0c\u4ee5 PulsarSink \u4e3a\u4f8b\uff0c\u5219\u9700\u8981\u901a\u8fc7 PulsarSender \u53d1\u9001\u5230 Pulsar"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"setSourceName"),": \u8bbe\u7f6e\u6570\u636e\u6e90\u540d\u79f0\uff0c\u5982\u679c\u662f\u6587\u4ef6\uff0c\u5219\u662f\u6587\u4ef6\u540d"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"initMessageFilter"),": \u521d\u59cb\u5316 MessageFilter , \u7528\u6237\u53ef\u4ee5\u5728Job\u914d\u7f6e\u6587\u4ef6\u4e2d\u901a\u8fc7\u8bbe\u7f6e agent.message.filter.classname \u6765\u521b\u5efa\u4e00\u4e2a\u6d88\u606f\u8fc7\u6ee4\u5668\u6765\u8fc7\u6ee4\u6bcf\u4e00\u6761\u6d88\u606f\uff0c\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003 MessageFilter \u63a5\u53e3")),(0,r.yg)("h3",{id:"source"},"Source"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Source can be split into multiple reader.\n */\npublic interface Source {\n\n    /**\n     * Split source into a list of readers.\n     *\n     * @param conf job conf\n     * @return - list of reader\n     */\n    List<Reader> split(JobProfile conf);\n}\n\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Source"),"\u63a5\u53e3\u529f\u80fd\u5982\u4e0b\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"split"),": \u88ab\u5355\u4e2a Job \u8c03\u7528\uff0c\u4ea7\u751f\u591a\u4e2a Reader\uff0c\u4e3e\u4f8b\uff1a\u4e00\u4e2a\u8bfb\u53d6\u6587\u4ef6\u4efb\u52a1\uff0c\u5339\u914d\u6587\u4ef6\u5939\u5185\u7684\u591a\u4e2a\u6587\u4ef6\uff0c\u5728 job \u542f\u52a8\u65f6\uff0c\u4f1a\u6307\u5b9a TextFileSource \u4f5c\u4e3a Source \u5165\u53e3\uff0c\n\u8c03\u7528 split \u51fd\u6570\u540e\uff0cTextFileSource \u4f1a\u68c0\u6d4b\u7528\u6237\u8bbe\u7f6e\u7684\u6587\u4ef6\u5939\u5185\u6709\u591a\u5c11\u7b26\u5408\u8def\u5f84\u5339\u914d\u8868\u8fbe\u5f0f\u7684\u8def\u5f84\uff0c\u5e76\u751f\u6210 TextFileReader \u8bfb\u53d6")),(0,r.yg)("h2",{id:"\u4efb\u52a1\u914d\u7f6e"},"\u4efb\u52a1\u914d\u7f6e"),(0,r.yg)("p",null,"\u4ee3\u7801\u5199\u597d\u4e86\uff0c\u6709\u6ca1\u6709\u60f3\u8fc7\u6846\u67b6\u662f\u600e\u4e48\u627e\u5230\u63d2\u4ef6\u7684\u5165\u53e3\u7c7b\u7684\uff1f\u6846\u67b6\u662f\u5982\u4f55\u52a0\u8f7d\u63d2\u4ef6\u7684\u5462\uff1f"),(0,r.yg)("p",null,"\u5728\u63d0\u4ea4\u4efb\u52a1\u65f6\uff0c\u4f1a\u53d1\u73b0\u4efb\u52a1\u4e2d\u5b9a\u4e49\u4e86\u63d2\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u5305\u62ec\u5165\u53e3\u7c7b\u3002\u4f8b\u5982\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n"job": {\n"name": "fileAgentTest",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n}\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"source"),": Source \u7c7b\u7684\u5168\u9650\u5b9a\u540d\u79f0\uff0c\u6846\u67b6\u901a\u8fc7\u53cd\u5c04\u63d2\u4ef6\u5165\u53e3\u7c7b\u7684\u5b9e\u4f8b\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"sink"),": Sink \u7c7b\u7684\u5168\u9650\u5b9a\u540d\u79f0\uff0c\u6846\u67b6\u901a\u8fc7\u53cd\u5c04\u63d2\u4ef6\u5165\u53e3\u7c7b\u7684\u5b9e\u4f8b\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"channel"),": \u4f7f\u7528\u7684 Channel \u7c7b\u540d\uff0c\u6846\u67b6\u901a\u8fc7\u53cd\u5c04\u63d2\u4ef6\u5165\u53e3\u7c7b\u7684\u5b9e\u4f8b\u3002")),(0,r.yg)("h2",{id:"message"},"Message"),(0,r.yg)("p",null,"\u8ddf\u4e00\u822c\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"\u751f\u4ea7\u8005-\u6d88\u8d39\u8005"),"\u6a21\u5f0f\u4e00\u6837\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"Reader"),"\u63d2\u4ef6\u548c",(0,r.yg)("inlineCode",{parentName:"p"},"Sink"),"\u63d2\u4ef6\u4e4b\u95f4\u4e5f\u662f\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"channel"),"\u6765\u5b9e\u73b0\u6570\u636e\u7684\u4f20\u8f93\u7684\u3002\n",(0,r.yg)("inlineCode",{parentName:"p"},"channel"),"\u53ef\u4ee5\u662f\u5185\u5b58\u7684\uff0c\u4e5f\u53ef\u80fd\u662f\u6301\u4e45\u5316\u7684\uff0c\u63d2\u4ef6\u4e0d\u5fc5\u5173\u5fc3\u3002\u63d2\u4ef6\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"RecordSender"),"\u5f80",(0,r.yg)("inlineCode",{parentName:"p"},"channel"),"\u5199\u5165\u6570\u636e\uff0c\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"RecordReceiver"),"\u4ece",(0,r.yg)("inlineCode",{parentName:"p"},"channel"),"\u8bfb\u53d6\u6570\u636e\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"channel"),"\u4e2d\u7684\u4e00\u6761\u6570\u636e\u4e3a\u4e00\u4e2a",(0,r.yg)("inlineCode",{parentName:"p"},"Message"),"\u7684\u5bf9\u8c61\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"Message"),"\u4e2d\u5305\u542b\u4e00\u4e2a\u5b57\u8282\u6570\u7ec4\u4ee5\u53ca\u4e00\u4e2aMap\u8868\u793a\u7684\u5c5e\u6027\u6570\u636e"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Message"),"\u6709\u5982\u4e0b\u65b9\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public interface Message {\n\n    /**\n     * Data content of message.\n     *\n     * @return bytes body\n     */\n    byte[] getBody();\n\n    /**\n     * Data attribute of message\n     *\n     * @return map header\n     */\n    Map<String, String> getHeader();\n}\n")),(0,r.yg)("p",null,"\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u6839\u636e\u8be5\u63a5\u53e3\u62d3\u5c55\u5b9a\u5236\u5316\u7684 Message \uff0c\u6bd4\u5982 ProxyMessage \u4e2d\uff0c\u5c31\u5305\u542b\u4e86 InLongGroupId, InLongStreamId \u7b49\u5c5e\u6027"))}d.isMDXComponent=!0},8167:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/Agent_Flow-797076957b60986733aae8479cff6c69.png"}}]);