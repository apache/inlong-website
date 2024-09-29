"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[20718],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function g(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),o=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=o(e.components);return t.createElement(i.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=g(e,["components","mdxType","originalType","parentName"]),p=o(n),y=r,d=p["".concat(i,".").concat(y)]||p[y]||u[y]||s;return n?t.createElement(d,l(l({ref:a},c),{},{components:n})):t.createElement(d,l({ref:a},c))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=y;var g={};for(var i in a)hasOwnProperty.call(a,i)&&(g[i]=a[i]);g.originalType=e,g[p]="string"==typeof e?e:r,l[1]=g;for(var o=2;o<s;o++)l[o]=n[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1425:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>g,toc:()=>o});var t=n(58168),r=(n(96540),n(15680));const s={title:"Agent \u6570\u636e\u7ec4\u7ec7",sidebar_position:2},l=void 0,g={unversionedId:"development/binary_protocol/agent",id:"development/binary_protocol/agent",title:"Agent \u6570\u636e\u7ec4\u7ec7",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/binary_protocol/agent.md",sourceDirName:"development/binary_protocol",slug:"/development/binary_protocol/agent",permalink:"/zh-CN/docs/next/development/binary_protocol/agent",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/development/binary_protocol/agent.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Agent \u6570\u636e\u7ec4\u7ec7",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"InLongMsg \u683c\u5f0f\u5b9a\u4e49\u53ca\u4f7f\u7528",permalink:"/zh-CN/docs/next/development/binary_protocol/inlong_msg"},next:{title:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1",permalink:"/zh-CN/docs/next/development/inlong_manager_shiro_plugin"}},i={},o=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6570\u636e\u6d41\u8f6c",id:"\u6570\u636e\u6d41\u8f6c",level:2},{value:"\u6570\u636e\u683c\u5f0f",id:"\u6570\u636e\u683c\u5f0f",level:2},{value:"Source",id:"source",level:3},{value:"SourceData",id:"sourcedata",level:4},{value:"\u7f13\u5b58\u961f\u5217",id:"\u7f13\u5b58\u961f\u5217",level:4},{value:"Message",id:"message",level:4},{value:"Instance",id:"instance",level:3},{value:"Sink",id:"sink",level:3},{value:"ProxyMessage",id:"proxymessage",level:4},{value:"ProxyMessageCache",id:"proxymessagecache",level:4},{value:"SenderMessage",id:"sendermessage",level:4},{value:"SenderManager",id:"sendermanager",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:o},p="wrapper";function u(e){let{components:a,...s}=e;return(0,r.yg)(p,(0,t.A)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.yg)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd Agent \u6570\u636e\u5728\u5b50\u6a21\u5757\u95f4\u6d41\u8f6c\u4ee5\u53ca\u5bf9\u5e94\u7684\u6570\u636e\u7ed3\u6784\u3002"),(0,r.yg)("h2",{id:"\u6570\u636e\u6d41\u8f6c"},"\u6570\u636e\u6d41\u8f6c"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(94140).A,width:"1011",height:"353"})),(0,r.yg)("p",null,"\u5728 Agent \u6a21\u5757\u4ecb\u7ecd\u65f6\u6211\u4eec\u77e5\u9053 Agent \u4e2d\u6709 Source \u548c Sink \u6a21\u5757\uff0c\u5176\u4e2d Source \u8d1f\u8d23\u4ece\u6570\u636e\u6e90\u91c7\u96c6\u6570\u636e\uff1bSink \u8d1f\u8d23\u5c06\u6570\u636e\u53d1\u9001\u5230\u4e0b\u6e38\uff0c\u5f53\n\u524d\u6211\u4eec\u8ba4\u4e3a\u4e0b\u6e38\u53ea\u6709 DataProxy\uff1bInstance \u5219\u662f\u8d1f\u8d23\u5c06\u6570\u636e\u4ece Source \u642c\u8fd0\u5230 Sink\u3002"),(0,r.yg)("h2",{id:"\u6570\u636e\u683c\u5f0f"},"\u6570\u636e\u683c\u5f0f"),(0,r.yg)("h3",{id:"source"},"Source"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(37137).A,width:"717",height:"188"})),(0,r.yg)("p",null,"Source \u4e3b\u8981\u6709 3 \u4e2a\u529f\u80fd\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4ece\u6570\u636e\u6e90\u91c7\u96c6\u6570\u636e\uff0c\u6bcf\u6761\u6570\u636e\u586b\u5145\u5230\u4e00\u4e2a\u65b0\u7684 SourceData \u5bf9\u8c61\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u586b\u5145\u5b8c\u6210\u7684 SourceData \u5bf9\u8c61\u653e\u5165 Source \u6a21\u5757\u7684\u7f13\u5b58\u961f\u5217\u4e2d\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5916\u90e8\u8c03\u7528 Source \u6a21\u5757 Read \u65b9\u6cd5\u65f6\u4ece\u7f13\u5b58\u961f\u5217\u4e2d\u53d6\u51fa\u4e00\u4e2a SourceData \u7ec4\u88c5\u6210 Message \u5e76\u8fd4\u56de\u3002"))),(0,r.yg)("h4",{id:"sourcedata"},"SourceData"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class SourceData {\n    private byte[] data;\n    private String offset;\n}\n")),(0,r.yg)("p",null,"\u4ece\u6570\u636e\u6e90\u91c7\u96c6\u7684\u6570\u636e\u53ef\u80fd\u4f1a\u6709\u5404\u79cd\u5404\u6837\u7684\u683c\u5f0f\uff0c\u56e0\u6b64\u6211\u4eec\u7528 byte[] \u6765\u5b58\u653e\uff08\u539f\u59cb\u6570\u636e\u5728\u540e\u7eed\u5404\u4e2a\u73af\u8282\u6d41\u8f6c\u65f6\u5747\u4fdd\u6301 byte[]\uff09\u3002\u540c\u65f6\u6bcf\u4e00\u6761\u6570\u636e\u90fd\u4f1a\u6709\u5bf9\u5e94\u7684\u4f4d\u70b9\u4fe1\u606f\uff0c\n\u5e76\u4e14\u7531\u4e8e\u4f4d\u70b9\u4fe1\u606f\u591a\u79cd\u591a\u6837\uff0c\u6211\u4eec\u7528 String \u6765\u5b58\u653e\u4f4d\u70b9\u4fe1\u606f\u3002"),(0,r.yg)("h4",{id:"\u7f13\u5b58\u961f\u5217"},"\u7f13\u5b58\u961f\u5217"),(0,r.yg)("p",null,"\u987e\u540d\u601d\u4e49\uff0c\u6211\u4eec\u5c06 SourceData \u653e\u5230 Queue \u4e2d\u4ee5\u8fbe\u5230\u7f13\u5b58\u7684\u76ee\u7684\uff0c\u8fd9\u6837\u53ef\u4ee5\u89e3\u51b3\u6570\u636e\u6e90\u548c Agent \u5185\u90e8\u5904\u7406\u901f\u5ea6\u4e0d\u5339\u914d\u7684\u95ee\u9898\u3002Queue \u7c7b\n\u578b\u662f LinkedBlockingQueue\uff0c\u9632\u6b62\u591a\u7ebf\u7a0b\u8bbf\u95ee\u51fa\u73b0\u95ee\u9898\uff0c\u7531\u4e8e\u662f\u7eaf\u5185\u5b58\u64cd\u4f5c\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u6027\u80fd\u3002"),(0,r.yg)("h4",{id:"message"},"Message"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public interface Message {\n\n    byte[] getBody();\n    Map<String, String> getHeader();\n}\n")),(0,r.yg)("p",null,"Source \u63d0\u4f9b\u7684 Read \u65b9\u6cd5\u8fd4\u56de\u7c7b\u578b\u662f Message\uff0c\u5177\u4f53\u5b9e\u73b0\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class DefaultMessage implements Message {\n\n    private final byte[] body;\n    protected final Map<String, String> header;\n    \n    ...\n}\n")),(0,r.yg)("p",null,"\u4e0a\u6587\u8bf4\u8fc7\uff0cMessage \u662f\u7531 SourceData \u6765\u586b\u5145\uff0c\u5177\u4f53\u60c5\u51b5\u662f DefaultMessage::body \u7531 SourceData::data \u6765\u586b\u5145\uff1bDefaultMessage\n::header \u7531 SourceData::offset \u4ee5\u53ca\u5176\u4ed6\u5c5e\u6027\u4e00\u8d77\u586b\u5145\uff0c\u6bcf\u79cd\u5c5e\u6027\u90fd\u662f DefaultMessage::header \u7684\u4e00\u4e2a k/v \u5bf9\u3002\u4e00\u822c\u6211\u4eec\u8fd8\u4f1a\u5728\u8fd9\n\u91cc\u586b\u5145\u8fd9\u6761\u6d88\u606f\u7684 inlongStreamId\u3002"),(0,r.yg)("h3",{id:"instance"},"Instance"),(0,r.yg)("p",null,"Instance \u4e3b\u8981\u529f\u80fd\u662f\u4ece Source \u53d6\u51fa Message \u7136\u540e\u5199\u5165\u5230 Sink\uff0c\u8fc7\u7a0b\u4e2d\u5e76\u6ca1\u6709\u4ea7\u751f\u65b0\u7684\u6570\u636e\u683c\u5f0f\u3002"),(0,r.yg)("h3",{id:"sink"},"Sink"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(39747).A,width:"880",height:"150"})),(0,r.yg)("p",null,"\u5f53\u524d\u6211\u4eec\u7684\u5b9e\u73b0\u91cc Sink \u53ef\u4ee5\u8ba4\u4e3a\u53ea\u6709\u4e00\u79cd\u7c7b\u578b\uff0c\u90a3\u5c31\u662f DataProxy Sink\u3002DataProxy Sink \u4e3b\u8981\u6709 4 \u4e2a\u529f\u80fd\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5916\u90e8\u8c03\u7528 Write \u65b9\u6cd5\u5c06 Message \u7c7b\u578b\u6570\u636e\u5199\u5165\u5230 DataProxy Sink\uff0c\u65b9\u6cd5\u5185\u90e8\u7528 Message \u586b\u5145 ProxyMessage\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5c06 ProxyMessage \u653e\u5165 ProxyMessageCache \u4e2d\uff0cProxyMessageCache \u4f1a\u5c06\u4e0d\u540c inlongStreamId \u7684 ProxyMessage \u5206\u5f00\u5b58\u653e\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4ece cache \u4e2d\u83b7\u53d6 SenderMessage\uff08\u7531\u591a\u4e2a ProxyMessage \u6784\u6210\uff09\uff0c\u5e76\u8c03\u7528 SenderManager::sendBatch \u8fdb\u884c\u53d1\u9001\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"SenderManager \u63a5\u6536\u5230 SenderMessage \u540e\u6784\u9020 DataProxy SDK \u65b9\u6cd5\u6240\u9700\u56de\u8c03\u5bf9\u8c61 AgentSenderCallback \u8fdb\u884c\u5f02\u6b65\u53d1\u9001\u3002"))),(0,r.yg)("h4",{id:"proxymessage"},"ProxyMessage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class ProxyMessage implements Message {\n\n    private final byte[] body;\n    private final Map<String, String> header;\n    OffsetAckInfo ackInfo;\n")),(0,r.yg)("p",null,"ProxyMessage \u7684 body \u4e0e header \u90fd\u662f\u4ece Message \u590d\u5236\u800c\u6765\u3002\u53e6\u5916\uff0c\u65b0\u589e ackInfo \u7528\u4e8e\u8bb0\u5f55\u53d1\u9001\u60c5\u51b5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class OffsetAckInfo {\n\n    private String offset;\n    private int len;\n    private Boolean hasAck;\n}\n")),(0,r.yg)("p",null,"\u5176\u4e2d offset \u6765\u81ea\u4e8e Message::header\uff1blen \u6765\u81ea\u4e8e Message::body \u7684 len\uff1bhasAck \u5219\u662f\u6807\u8bc6\u8be5\u4fe1\u606f\u662f\u5426\u53d1\u9001\u6210\u529f\uff0c\u521d\u59cb\u5316\u4e3a false\u3002"),(0,r.yg)("h4",{id:"proxymessagecache"},"ProxyMessageCache"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(89410).A,width:"413",height:"242"})),(0,r.yg)("p",null,"\u586b\u5145\u5b8c\u6210\u7684 ProxyMessage \u9996\u5148\u4f1a\u653e\u5230 ProxyMessageCache\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class ProxyMessageCache {\n\n    private final String taskId;\n    private final String instanceId;\n    private final int maxPackSize;\n    private final int maxQueueNumber;\n    private final String groupId;\n    // streamId -> list of proxyMessage\n    private final ConcurrentHashMap<String, LinkedBlockingQueue<ProxyMessage>> messageQueueMap;\n    private long dataTime;\n}\n")),(0,r.yg)("p",null,"ProxyMessageCache \u7684\u6838\u5fc3\u5c5e\u6027\u662f messageQueueMap\uff0c\u5176 key \u662f inlongStreamId\uff0cvalue \u662f\u4e00\u4e2a\u961f\u5217\u3002\u9664\u6b64\u4e4b\u5916 ProxyMessageCache\n\u4f1a\u901a\u8fc7 fetchSenderMessage \u65b9\u6cd5\u8fd4\u56de SenderMessage\uff0cSenderMessage \u7531\u591a\u4e2a ProxyMessage \u6784\u6210\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u6279\u91cf\u53d1\u9001\u6570\u636e\u3002"),(0,r.yg)("h4",{id:"sendermessage"},"SenderMessage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class SenderMessage {\n\n    private List<byte[]> dataList;\n    private Map<String, String> extraMap;\n    private List<OffsetAckInfo> offsetAckList;\n}\n")),(0,r.yg)("p",null,"SenderMessage \u5728 ProxyMessageCache \u5185\u90e8\u6784\u5efa\uff0c\u7531\u591a\u4e2a\u76f8\u540c inlongStreamId \u7684 ProxyMessage \u7ec4\u6210\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"dataList \u5219\u7531\u591a\u4e2a ProxyMessage::body \u586b\u5145\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"extraMap \u5305\u542b\u4e86\u5ba1\u8ba1\u7248\u672c\u3001\u9884\u5b9a\u4e49\u5b57\u6bb5\uff08\u4ece\u4efb\u52a1\u914d\u7f6e\u91cc\u83b7\u53d6\uff09\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"offsetAckList \u7531\u591a\u4e2a ProxyMessage::ackInfo \u586b\u5145\uff1b"))),(0,r.yg)("h4",{id:"sendermanager"},"SenderManager"),(0,r.yg)("p",null,"SenderManager \u5185\u90e8\u76f4\u63a5\u8c03\u7528 DataProxy SDK \u8fdb\u884c\u6570\u636e\u53d1\u9001\uff0c\u9700\u8981 3 \u4e2a\u6838\u5fc3\u53c2\u6570\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u539f\u59cb\u6570\u636e\u5185\u5bb9"),(0,r.yg)("li",{parentName:"ul"},"\u6269\u5c55\u5c5e\u6027"),(0,r.yg)("li",{parentName:"ul"},"\u56de\u8c03\u5bf9\u8c61\n\u5176\u4e2d\u539f\u59cb\u6570\u636e\u5185\u5bb9\u7531 dataList \u63d0\u4f9b\uff1b\u6269\u5c55\u5c5e\u6027\u7531 extraMap \u63d0\u4f9b\uff1b\u56de\u8c03\u5185\u5bb9\u5219\u9700\u8981\u6784\u9020 AgentSenderCallback \u6765\u63d0\u4f9b\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"private class AgentSenderCallback implements SendMessageCallback {\n\n        private final SenderMessage message;\n  \n        AgentSenderCallback(SenderMessage message, int retry) {\n            this.message = message;\n        }\n\n        @Override\n        public void onMessageAck(SendResult result) {\n        ...\n        }\n}\n")),(0,r.yg)("p",null,"\u56de\u8c03\u5bf9\u8c61 onMessageAck \u65b9\u6cd5\u4f1a\u643a\u5e26\u53d1\u9001\u7ed3\u679c\uff0c\u8fd4\u56de\u6210\u529f\u540e\u904d\u5386 SenderMessage::offsetAckList\uff0c\u5c06 OffsetAckInfo::hasAck \u8bbe\n\u7f6e\u6210 true\u3002"),(0,r.yg)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.yg)("p",null,"\u6570\u636e\u5728 Agent \u5185\u90e8\u4ece\u6570\u636e\u6e90\u5230 DataProxy SDK \u7ecf\u8fc7\u5982\u4e0b\u6570\u636e\u7ed3\u6784\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(50986).A,width:"1338",height:"208"})),(0,r.yg)("p",null,"\u4e0a\u9762\u4ecb\u7ecd\u7684\u5404\u4e2a\u6570\u636e\u7c7b\u578b\u4e2d\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u5404\u4e2a\u7ed3\u6784\u7684\u539f\u59cb\u6570\u636e\u5185\u5bb9\u90fd\u662f\u7528 byte[] \u6765\u5b58\u653e\u3002\u4e00\u65b9\u9762\u53ef\u4ee5\u4fdd\u7559\u539f\u59cb\u6570\u636e\u4fe1\u606f\u4e0d\u53d7\u7f16\u7801\u683c\u5f0f\u5f71\u54cd\uff0c\u53e6\u4e00\u65b9\u9762\u4e5f\u662f\u53ef\n\u4ee5\u51cf\u5c11\u5b57\u7b26\u4e32\u8f6c\u6362\u7684\u5f00\u9500\u4f7f\u5f97\u6574\u4f53\u6548\u7387\u66f4\u9ad8\u3002"))}u.isMDXComponent=!0},94140:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/agent_1-656aa96bcb027c1c7bfdd633f77a6053.png"},89410:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/cache_1-a72cb3466285cc6237439281c1f385f3.png"},39747:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sink_1-71f1e8ae78474e90b1d9265890f84751.png"},37137:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/source_1-46be05ebc6b0536e08c9c46eee2dcd1c.png"},50986:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/total-f5ffd13812385a153ae8b72072aa4f44.png"}}]);