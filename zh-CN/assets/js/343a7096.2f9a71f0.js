"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[50822],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>y});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},g=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,y=c["".concat(s,".").concat(d)]||c[d]||p[d]||l;return a?t.createElement(y,i(i({ref:n},g),{},{components:a})):t.createElement(y,i({ref:n},g))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9528:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=a(58168),r=(a(96540),a(15680));const l={title:"Agent \u63d2\u4ef6\u6269\u5c55",sidebar_position:3},i=void 0,o={unversionedId:"development/extension_agent/agent",id:"development/extension_agent/agent",title:"Agent \u63d2\u4ef6\u6269\u5c55",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/extension_agent/agent.md",sourceDirName:"development/extension_agent",slug:"/development/extension_agent/agent",permalink:"/zh-CN/docs/next/development/extension_agent/agent",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/development/extension_agent/agent.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Agent \u63d2\u4ef6\u6269\u5c55",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"TubeMQ \u4e8c\u8fdb\u5236\u4ea4\u4e92\u534f\u8bae",permalink:"/zh-CN/docs/next/development/binary_protocol/tubemq_binary"},next:{title:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1",permalink:"/zh-CN/docs/next/development/extension_manager/inlong_manager_shiro_plugin"}},s={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6838\u5fc3\u6982\u5ff5",id:"\u6838\u5fc3\u6982\u5ff5",level:2},{value:"Task \u548c Instance",id:"task-\u548c-instance",level:3},{value:"Source \u548c Sink",id:"source-\u548c-sink",level:3},{value:"\u5f00\u53d1\u6d41\u7a0b\uff08\u4ee5 Pulsar \u4e3a\u4f8b\uff09",id:"\u5f00\u53d1\u6d41\u7a0b\u4ee5-pulsar-\u4e3a\u4f8b",level:2},{value:"\u4e3b\u6d41\u7a0b",id:"\u4e3b\u6d41\u7a0b",level:3},{value:"\u65b0\u589e Task",id:"\u65b0\u589e-task",level:3},{value:"\u65b0\u589e Instance",id:"\u65b0\u589e-instance",level:3},{value:"\u65b0\u589e Source",id:"\u65b0\u589e-source",level:3},{value:"\u65b0\u589e TaskPojo",id:"\u65b0\u589e-taskpojo",level:3},{value:"\u4efb\u52a1\u914d\u7f6e",id:"\u4efb\u52a1\u914d\u7f6e",level:2},{value:"\u4f4d\u70b9\u63a7\u5236",id:"\u4f4d\u70b9\u63a7\u5236",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2}],g={toc:u},c="wrapper";function p(e){let{components:n,...l}=e;return(0,r.yg)(c,(0,t.A)({},g,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.yg)("p",null,"\u5728 Standard Architecture \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 InLong Agent \u6765\u91c7\u96c6\u5404\u79cd\u7c7b\u578b\u7684\u6570\u636e\u6e90\u3002InLong Agent \u652f\u6301\u4ee5\u63d2\u4ef6\u7684\u65b9\u5f0f\u6269\u5c55\u65b0\u7684\u91c7\u96c6\u7c7b\u578b\uff0c\u672c\u6587\u5c06\u6307\u5bfc\u5f00\u53d1\u8005\u5982\u4f55\u81ea\u5b9a\u4e49\u65b0\u7684 Agent \u91c7\u96c6\u6570\u636e\u6e90\u63d2\u4ef6\u3002"),(0,r.yg)("h2",{id:"\u6838\u5fc3\u6982\u5ff5"},"\u6838\u5fc3\u6982\u5ff5"),(0,r.yg)("h3",{id:"task-\u548c-instance"},"Task \u548c Instance"),(0,r.yg)("p",null,"Task \u548c Instance \u662f Agent \u6700\u6838\u5fc3\u7684\u4e24\u4e2a\u6982\u5ff5\uff0c\u7b80\u5355\u7406\u89e3\uff1aTask \u5bf9\u5e94\u7ba1\u7406\u5e73\u53f0\u4e0a\u914d\u7f6e\u7684\u4e00\u4e2a\u91c7\u96c6\u4efb\u52a1\uff0c\u800c Instance \u5219\u662f\u7531 Task \u751f\u6210\u7684\u4e00\u4e2a\u5177\u4f53\u7684\u91c7\u96c6\u5b9e\u4f8b\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u7ba1\u7406\u5e73\u53f0\u4e0a\u6709\u4e2a\u91c7\u96c6\u4efb\u52a1\u7684\u914d\u7f6e\uff1a ",(0,r.yg)("inlineCode",{parentName:"p"},"127.0.0.1 -> /data/log/YYMMDDhh.log._[0-9]+"),"\uff0c\u8868\u793a\u7528\u6237\u9700\u8981\u5728  ",(0,r.yg)("inlineCode",{parentName:"p"},"127.0.0.1")," \u8fd9\u53f0\u673a\u5668\u4e0a\u91c7\u96c6\u7b26\u5408 ",(0,r.yg)("inlineCode",{parentName:"p"},"/data/log/YYMMDDhh.log._[0-9]+"),"\uff0c\u8fd9\u4e2a\u8def\u5f84\u89c4\u5219\u7684\u6570\u636e\uff0c",(0,r.yg)("strong",{parentName:"p"},"\u8fd9\u5c31\u662f\u4e00\u4e2a Task"),"\u3002\u8fd9\u4e2a Task \u4f1a\u6839\u636e\u8fd9\u4e2a\u8def\u5f84\u89c4\u5219\u53bb\u5bfb\u627e\u6ee1\u8db3\u6761\u4ef6\u7684\u6587\u4ef6\uff0c",(0,r.yg)("strong",{parentName:"p"},"\u4e3a\u6bcf\u4e2a\u7b26\u5408\u6761\u4ef6\u7684\u6587\u4ef6\u751f\u6210\u4e00\u4e2a\u5bf9\u5e94\u7684 Instance"),"\uff0c\u6bd4\u5982\u8bf4\u6709",(0,r.yg)("inlineCode",{parentName:"p"},"/data/log/2024040221.log.0\uff0c/data/log/2024040221.log.1\uff0c/data/log/2024040221.log.3")," 3\u4e2a\u6587\u4ef6\uff0c\u90a3\u4e48 Task \u5c31\u4f1a\u751f\u6210 3 \u4e2a Instance \u5206\u522b\u91c7\u96c6\u8fd9\u4e09\u4e2a\u6587\u4ef6\u7684\u6570\u636e\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(83318).A,width:"522",height:"255"})),(0,r.yg)("h3",{id:"source-\u548c-sink"},"Source \u548c Sink"),(0,r.yg)("p",null,"Source \u548c Sink \u5c5e\u4e8e Instance \u4e0b\u4e00\u7ea7\u7684\u6982\u5ff5\uff0c\u53ef\u4ee5\u7b80\u5355\u7406\u89e3\u4e3a\u6bcf\u4e2a Instance \u90fd\u6709\u4e00\u4e2a Source \u548c \u4e00\u4e2a Sink\u3002\u987e\u540d\u601d\u4e49\uff0cSource \u7528\u4e8e\u4ece\u6570\u636e\u6e90\u8bfb\u53d6\u6570\u636e\uff1bSink \u7528\u4e8e\u5411\u76ee\u6807\u5b58\u50a8\u5199\u5165\u6570\u636e\u3002"),(0,r.yg)("h2",{id:"\u5f00\u53d1\u6d41\u7a0b\u4ee5-pulsar-\u4e3a\u4f8b"},"\u5f00\u53d1\u6d41\u7a0b\uff08\u4ee5 Pulsar \u4e3a\u4f8b\uff09"),(0,r.yg)("h3",{id:"\u4e3b\u6d41\u7a0b"},"\u4e3b\u6d41\u7a0b"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u65b0\u589e Task\uff1a\u5b9e\u73b0\u521d\u59cb\u5316\u3001\u9500\u6bc1\u3001\u914d\u7f6e\u6821\u9a8c\u7b49\u903b\u8f91\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u65b0\u589e Instance\uff1a\u5b9e\u73b0\u8282\u70b9\u4fe1\u606f\u8bbe\u7f6e\u7b49\u903b\u8f91\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u65b0\u589e Source\uff1a\u5b9e\u73b0\u521d\u59cb\u5316\u3001\u9500\u6bc1\u3001\u91c7\u96c6\u6570\u636e\u3001\u63d0\u4f9b\u6570\u636e\u7b49\u903b\u8f91\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u65b0\u589e Sink\uff1a\u5b9e\u73b0\u521d\u59cb\u5316\u3001\u9500\u6bc1\u3001\u6570\u636e\u8f93\u5165\u3001\u6570\u636e\u8f93\u51fa\u7b49\u903b\u8f91\uff08\u672c\u6587\u53ea\u9488\u5bf9\u65b0\u589e\u6570\u636e\u6e90\uff0cSink \u4e0d\u505a\u4ecb\u7ecd\uff0c\u9ed8\u8ba4 Sink \u662f ProxySink\uff09"),(0,r.yg)("li",{parentName:"ul"},"\u65b0\u589e TaskPojo: \u5904\u7406 Agent \u548c Manager \u5b57\u6bb5\u4e4b\u95f4\u7684\u5dee\u5f02\uff0c\u5e76\u7ed1\u5b9a Task\u3001Source \u7b49\u3002")),(0,r.yg)("h3",{id:"\u65b0\u589e-task"},"\u65b0\u589e Task"),(0,r.yg)("p",null,"\u8fd9\u91cc\u5c31\u662f\u8981\u5728 org.apache.inlong.agent.plugin.task \u65b0\u589e\u4e00\u4e2a PulsarTask \u7c7b\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class PulsarTask extends AbstractTask {\n\n    @Override\n    public boolean isProfileValid(TaskProfile profile) {\n        return false;\n    }\n\n    @Override\n    protected void initTask() {\n\n    }\n\n    @Override\n    protected List<InstanceProfile> getNewInstanceList() {\n        return null;\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"initTask\uff1a\u521d\u59cb\u5316\uff0c\u6bd4\u5982\u6587\u4ef6\u91c7\u96c6\u53ef\u4ee5\u5728\u521d\u59cb\u5316\u65f6\u8fdb\u884c\u6587\u4ef6\u5939\u76d1\u542c\u3002"),(0,r.yg)("li",{parentName:"ul"},"isProfilevalid\uff1a\u5224\u65ad\u4efb\u52a1\u914d\u7f6e\u662f\u5426\u5408\u6cd5\uff0c\u6bcf\u79cd\u7c7b\u578b\u4efb\u52a1\u7684\u914d\u7f6e\u4f1a\u6709\u4e0d\u540c\u7684\u9650\u5236\uff0c\u53ef\u4ee5\u5728\u8fd9\u91cc\u5b9e\u73b0\u3002"),(0,r.yg)("li",{parentName:"ul"},"releaseTask\uff1a\u91ca\u653e\u4efb\u52a1\u8d44\u6e90\uff0c\u6bd4\u5982\u6587\u4ef6\u91c7\u96c6\u53ef\u4ee5\u5728\u8fd9\u91cc\u53d6\u6d88\u6587\u4ef6\u5939\u76d1\u542c\u3002"),(0,r.yg)("li",{parentName:"ul"},"getNewInstanceList\uff1a\u83b7\u53d6\u65b0\u7684\u5b9e\u4f8b\uff0c\u6bd4\u5982\u6587\u4ef6\u91c7\u96c6\u65f6\u53d1\u73b0\u6709\u65b0\u7684\u6587\u4ef6\u53ef\u4ee5\u91c7\u96c6\u3002")),(0,r.yg)("h3",{id:"\u65b0\u589e-instance"},"\u65b0\u589e Instance"),(0,r.yg)("p",null,"\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.inlong.agent.plugin.instance")," \u589e\u52a0 PulsarInstance \u7c7b\uff0c\u8fd9\u4e2a\u7c7b\u4f1a\u6bd4\u8f83\u7a7a\u95f2\uff0c\u4e3b\u8981\u903b\u8f91\u90fd\u662f\u5728 CommonInstance \u57fa\u7c7b\u91cc\u3002\u4f5c\u7528\u662f\u521b\u5efa Source\u3001Sink\uff0c\u4ece Source \u8bfb\u6570\u636e\uff0c\u7136\u540e\u5199\u5165 Sink\u3002\u6211\u4eec\u8fd9\u91cc\u53ea\u8981\u5b9e\u73b0\u4e00\u4e0b setInodeInfo \u63a5\u53e3\u5373\u53ef\u3002\u9664\u4e86 FileInstance \u6bd4\u8f83\u7279\u6b8a\u9700\u8981\u8bbe\u7f6e\u6587\u4ef6\u7684 Inode Info\uff0c\u5176\u4f59\u7684 Instance \u7c7b\u90fd\u53ea\u8981\u8bbe\u7f6e\u6210\u7a7a\u5b57\u7b26\u4e32\u5373\u53ef\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public class PulsarInstance extends CommonInstance {\n\n    @Override\n    public void setInodeInfo(InstanceProfile profile) {\n        profile.set(TaskConstants.INODE_INFO, "");\n    }\n}\n')),(0,r.yg)("h3",{id:"\u65b0\u589e-source"},"\u65b0\u589e Source"),(0,r.yg)("p",null,"\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.inlong.agent.plugin.sources \u589e\u52a0 PulsarSource")," \u7c7b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class PulsarSource extends AbstractSource {\n\n    @Override\n    public boolean sourceExist() {\n        return false;\n    }\n\n    @Override\n    protected void initSource(InstanceProfile profile) {\n\n    }\n\n    @Override\n    protected void printCurrentState() {\n\n    }\n\n    @Override\n    protected boolean doPrepareToRead() {\n        return false;\n    }\n\n    @Override\n    protected List<SourceData> readFromSource() {\n        return null;\n    }\n\n    @Override\n    protected String getThreadName() {\n        return null;\n    }\n\n    @Override\n    protected boolean isRunnable() {\n        return false;\n    }\n\n    @Override\n    protected void releaseSource() {\n\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"initSource\uff1a\u521d\u59cb\u5316\u8be5\u6570\u636e\u6e90\u7684\u57fa\u672c\u8d44\u6e90\u3002"),(0,r.yg)("li",{parentName:"ul"},"sourceExist\uff1a\u8fd4\u56de\u5f53\u524d\u6570\u636e\u6e90\u662f\u5426\u5b58\u5728\uff0c\u4f8b\u5982\u6587\u4ef6\u91c7\u96c6\u65f6\u6587\u4ef6\u662f\u5426\u88ab\u5220\u9664\u3002"),(0,r.yg)("li",{parentName:"ul"},"printCurrentState\uff1a\u6253\u5370\u5f53\u524d\u91c7\u96c6\u72b6\u6001\uff0c\u5b9a\u65f6\u8c03\u7528\u3002"),(0,r.yg)("li",{parentName:"ul"},"doPrepareToRead\uff1a\u5728\u8bfb\u6570\u636e\u4e4b\u524d\u53ef\u4ee5\u505a\u4e00\u4e9b\u68c0\u67e5\uff0c\u4f8b\u5982\u6587\u4ef6\u91c7\u96c6\u65f6\u6587\u4ef6\u662f\u5426\u88ab\u8986\u76d6\u3002"),(0,r.yg)("li",{parentName:"ul"},"readFromSource\uff1a\u771f\u6b63\u4ece\u6570\u636e\u6e90\u8bfb\u53d6\u6570\u636e\uff0c\u4f8b\u5982\u4ece Kafka SDK\u3001Pulsar SDK \u6d88\u8d39\u6570\u636e\u3002"),(0,r.yg)("li",{parentName:"ul"},"getThreadName\uff1a\u83b7\u53d6\u8be5\u6570\u636e\u6e90\u7684\u5de5\u4f5c\u7ebf\u7a0b\u540d\u3002"),(0,r.yg)("li",{parentName:"ul"},"isRunnable\uff1a\u8fd4\u56de\u8be5\u6570\u636e\u6e90\u662f\u5426\u5e94\u8be5\u7ee7\u7eed\u3002"),(0,r.yg)("li",{parentName:"ul"},"releaseSource\uff1a\u91ca\u653e\u8be5\u6570\u636e\u6e90\u7684\u8d44\u6e90")),(0,r.yg)("h3",{id:"\u65b0\u589e-taskpojo"},"\u65b0\u589e TaskPojo"),(0,r.yg)("p",null,"\u65b0\u589e PulsarTask \u7c7b\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.inlong.agent.pojo"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class PulsarTask {\n\n    private String topic;\n    private String subscription;\n\n    public static class PulsarTaskConfig {\n\n        private String topic;\n        private String subscription;\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"PulsarTaskConfig \u4e2d\u7684\u5b57\u6bb5\u540d\u79f0\u662f Manager \u4f20\u9012\u7684\u540d\u79f0\uff0c\u5fc5\u987b\u4e0e Manager \u5b9a\u4e49\u7684\u5b57\u6bb5\u540d\u79f0\u4e00\u81f4\u3002"),(0,r.yg)("li",{parentName:"ul"},"PulsarTask \u4e2d\u7684\u5b57\u6bb5\u540d\u79f0\u548c\u7c7b\u578b\u662f Agent \u6240\u8981\u6c42\u7684\u3002")),(0,r.yg)("h2",{id:"\u4efb\u52a1\u914d\u7f6e"},"\u4efb\u52a1\u914d\u7f6e"),(0,r.yg)("p",null,"\u4ece\u4e0a\u9762\u770b\u6211\u4eec\u65b0\u5efa\u4e86 Task\u3001Instance\u3001Source \u7b49\u7c7b\uff0c\u800c\u4efb\u52a1\u914d\u7f6e\u5c31\u662f\u5c06\u8fd9\u4e9b\u4e86\u7c7b\u4e32\u8054\u8d77\u6765"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "task.id": "74",\n    "task.groupId": "test_group_pulsar",\n    "task.streamId": "test_stream_pulsar",\n    "task.source": "org.apache.inlong.agent.plugin.sources.PulsarSource",\n    "task.sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n    "task.taskClass": "org.apache.inlong.agent.plugin.task.PulsarTask"\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"task.source\uff1a\u6307\u5b9a\u4e86 Source \u7c7b"),(0,r.yg)("li",{parentName:"ul"},"task.sink\uff1a\u6307\u5b9a\u4e86 Sink \u7c7b"),(0,r.yg)("li",{parentName:"ul"},"task.taskClass\uff1a\u6307\u5b9a\u4e86 Task \u7c7b")),(0,r.yg)("h2",{id:"\u4f4d\u70b9\u63a7\u5236"},"\u4f4d\u70b9\u63a7\u5236"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"    protected class SourceData {\n\n        private byte[] data;\n        private Long offset;\n    }\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"    protected List<SourceData> readFromSource() {\n        return null;\n    }\n")),(0,r.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0cSource \u8bfb\u53d6\u6570\u636e\u65f6\u6bcf\u4e00\u6761\u6570\u636e\u90fd\u4f1a\u8bb0\u5f55\u5176\u5bf9\u5e94\u7684 Offset\uff0c\u8fd9\u4e2a Offset \u6700\u7ec8\u5728 Sink \u7aef\u5199\u5165\u6210\u529f\u540e\u624d\u4f1a\u7531 Agent \u81ea\u52a8\u8bb0\u5f55\u3002\n\u800c\u5728 Source \u521d\u59cb\u5316\u65f6\u4f1a\u81ea\u52a8\u8bfb\u53d6\u5176\u5bf9\u5e94\u7684 Offset\uff0c\u4fdd\u5b58\u5728 AbstractSource \u7684\u6210\u5458\u53d8\u91cf offsetProfile\uff0c\u901a\u8fc7 offsetProfile.getOffset() \u53ef\u4ee5\n\u83b7\u5f97\u5176 Offset \u7528\u4e8e\u521d\u59cb\u5316\u6570\u636e\u6e90\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"    protected void initOffset() {\n        offsetProfile = OffsetManager.getInstance().getOffset(taskId, instanceId);\n    }\n")),(0,r.yg)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u5ba1\u8ba1\u6307\u6807\u5bf9\u9f50"))),(0,r.yg)("p",null,"\u8981\u6c42 Agent \u91c7\u96c6\u3001Agent \u53d1\u9001\u3001DataProxy \u63a5\u6536 \u4e09\u4e2a\u6307\u6807\u5b8c\u5168\u5bf9\u9f50"),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(55484).A,width:"1500",height:"528"})))}p.isMDXComponent=!0},55484:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/agent_audit-113eea90698e7999ca6c5a646176f8a0.png"},83318:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/agent_model-bc072f3b16122f07016eb74fec2defcb.png"}}]);