"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"\u5ba2\u6237\u7aef\u5206\u533a\u5206\u914d"},o=void 0,l={unversionedId:"modules/tubemq/client_partition_assign_introduction",id:"version-1.3.0/modules/tubemq/client_partition_assign_introduction",title:"\u5ba2\u6237\u7aef\u5206\u533a\u5206\u914d",description:"1 \u524d\u8a00",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/modules/tubemq/client_partition_assign_introduction.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/client_partition_assign_introduction",permalink:"/zh-CN/docs/1.3.0/modules/tubemq/client_partition_assign_introduction",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/modules/tubemq/client_partition_assign_introduction.md",tags:[],version:"1.3.0",frontMatter:{title:"\u5ba2\u6237\u7aef\u5206\u533a\u5206\u914d"},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/1.3.0/modules/tubemq/tubemq-manager/quick_start"},next:{title:"\u5ba2\u6237\u7aefRPC",permalink:"/zh-CN/docs/1.3.0/modules/tubemq/client_rpc"}},u={},s=[{value:"1 \u524d\u8a00",id:"1-\u524d\u8a00",level:2},{value:"2 \u4f7f\u7528\u793a\u4f8b",id:"2-\u4f7f\u7528\u793a\u4f8b",level:2},{value:"3 \u5b9e\u73b0\u65b9\u6848",id:"3-\u5b9e\u73b0\u65b9\u6848",level:2},{value:"3.1 \u603b\u7684\u601d\u8def",id:"31-\u603b\u7684\u601d\u8def",level:3},{value:"3.2 \u5b57\u6bb5\u5b9a\u4e49",id:"32-\u5b57\u6bb5\u5b9a\u4e49",level:3},{value:"4.3 \u4ea4\u4e92\u4ecb\u7ecd",id:"43-\u4ea4\u4e92\u4ecb\u7ecd",level:3},{value:"4.3.1 \u6838\u5fc3\u601d\u8def",id:"431-\u6838\u5fc3\u601d\u8def",level:4},{value:"4.3.2 \u4ea4\u4e92\u6d41\u7a0b",id:"432-\u4ea4\u4e92\u6d41\u7a0b",level:4},{value:"5 \u603b\u7ed3",id:"5-\u603b\u7ed3",level:2}],c={toc:s},p="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u524d\u8a00"},"1 \u524d\u8a00"),(0,i.kt)("p",null,"\u57280.12.0\u7248\u672c\u4ee5\u524d\uff0cTubeMQ\u7684\u5206\u533a\u5206\u914d\u90fd\u662f\u7531\u670d\u52a1\u4fa7\u8fdb\u884c\u7ba1\u63a7\uff0c\u8fd9\u79cd\u65b9\u6848\u7684\u4f18\u52bf\u5728\u4e8e\u5ba2\u6237\u7aef\u5b9e\u73b0\u7b80\u5355\uff0c\u5ba2\u6237\u7aef\u6ce8\u518c\u540e\u53ea\u9700\u8981\u7b49\u5f85\u670d\u52a1\u4fa7\u6d3e\u53d1\u5206\u533a\uff0c\u5e76\u5bf9\u6d3e\u53d1\u7684\u5206\u533a\u8fdb\u884c\u6ce8\u518c\u6d88\u8d39\u5373\u53ef\uff0c\u5176\u7f3a\u70b9\u4e5f\u6bd4\u8f83\u660e\u663e\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6570\u636e\u6d88\u8d39\u7b49\u5f85\u65f6\u95f4\u8fc7\u957f\uff1a \u5ba2\u6237\u7aef\u4ece\u542f\u52a8\u5230\u6d88\u8d39\u5230\u7b2c\u4e00\u6761\u6570\u636e\u7684\u65f6\u95f4\u6bd4\u8f83\u957f\uff0c\u4e3b\u8981\u539f\u56e0\u5728\u4e8e\u670d\u52a1\u4fa7\u662f\u6309\u7167\u56fa\u5b9a\u5468\u671f\u8fdb\u884c\u6d88\u8d39\u5206\u533a\u7684\u4efb\u52a1\u5206\u914d\uff0c\u4e14\u8fc7\u7a0b\u4e2d\u6d89\u53ca\u5230\u5ba2\u6237\u7aef\u5bf9\u5df2\u5206\u914d\u5206\u533a\u7684\u8d44\u6e90\u91ca\u653e\uff0c\u5ba2\u6237\u7aef\u5728\u6700\u597d\u7684\u60c5\u51b5\u4e0b\u90fd\u9700\u8981\u7b49\u5f85\u4e00\u4e2a\u5206\u914d\u5468\u671f\uff08\u53ef\u914d\u7f6e\uff0c\u9ed8\u8ba430\u79d2\uff09\u624d\u80fd\u83b7\u53d6\u5230\u5f85\u6d88\u8d39\u5206\u533a\uff0c\u5728\u6781\u7aef\u60c5\u51b5\u4e0b\u6709\u53ef\u80fd\u8d85\u8fc7\u51e0\u5206\u949f\uff0c\u5bf9\u4e1a\u52a1\u53ca\u65f6\u6d88\u8d39\u5230\u6570\u636e\u4e0d\u6ee1\u8db3\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u5206\u533a\u5206\u914d\u65b9\u6848\u4e0d\u591f\u4e30\u5bcc\uff1a \u5f53\u524d\u670d\u52a1\u4fa7\u5206\u533a\u5206\u914d\u65b9\u6848\u662f\u6309\u7167\u5ba2\u6237\u7aef\u8ba2\u9605\u7684Topic\u5206\u533a\u603b\u96c6\u5408\uff0c\u4e0e\u8fd9\u4e2a\u6d88\u8d39\u7ec4\u5206\u533a\u5206\u914d\u65f6\u7684\u603b\u5ba2\u6237\u7aef\u4e2a\u6570\u8fdb\u884cHash\u53d6\u6a21\u7684\u65b9\u5f0f\u8fdb\u884c\u5206\u914d\uff0c\u800c\u4e1a\u52a1\u9700\u8981\u91c7\u7528\u7279\u522b\u7684\u5206\u914d\u65b9\u6848\u65f6\uff0c\u670d\u52a1\u4fa7\u76ee\u524d\u5206\u914d\u65b9\u6848\u5219\u663e\u5f97\u4e0d\u591f\u53cb\u597d\uff0c\u4e0d\u80fd\u968f\u4e1a\u52a1\u9700\u8981\u968f\u65f6\u53d8\u66f4\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u6307\u5b9a\u5206\u533a\u6d88\u8d39\uff1a \u5728\u7248\u672c\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u4e1a\u52a1\u53cd\u9988\u5f53\u524d\u670d\u52a1\u4fa7\u7ba1\u63a7\u4e0d\u591f\u7075\u6d3b\uff0c\u6bd4\u5982\u5ba2\u6237\u7aef\u9700\u8981\u7ed1\u5b9a\u6d88\u8d39\u8005\u4e0e\u5206\u533a\u7684\u6d88\u8d39\u5173\u7cfb\uff0c\u6216\u8005\u67d0\u6b21\u542f\u52a8\u53ea\u60f3\u6d88\u8d39\u5176\u4e2d\u67d0\u51e0\u4e2a\u5206\u533a\u65f6\uff0c\u5f53\u524d\u670d\u52a1\u4fa7\u6d88\u8d39\u7ba1\u63a7\u4e0d\u652f\u6301\u3002\n\u9488\u5bf9\u8fd9\u4e9b\u95ee\u9898\uff0c0.12.0\u7248\u672c\u4e0a\u7ebf\u4e86\u65b0\u7684\u5ba2\u6237\u7aef\u5206\u533a\u5206\u914d\u7ba1\u63a7\u6d88\u8d39\u6a21\u5f0f\uff0c\u7ed3\u5408\u5206\u533a\u5f53\u524d\u6d88\u8d39\u6ede\u540e\u60c5\u51b5\u611f\u77e5\u529f\u80fd\uff0c\u8ba9\u4e1a\u52a1\u81ea\u4e3b\u63a7\u5236\u5206\u533a\u7684\u5206\u914d\u548c\u6d88\u8d39\u3002")),(0,i.kt)("h2",{id:"2-\u4f7f\u7528\u793a\u4f8b"},"2 \u4f7f\u7528\u793a\u4f8b"),(0,i.kt)("p",null,"\u5ba2\u6237\u7aef\u5206\u533a\u5206\u914d\u57fa\u4e8eClientBalanceConsumer\u63a5\u53e3\u7c7b\u8fdb\u884c\u5b9a\u4e49\uff0c\u4e00\u517117\u4e2aAPI\uff0c\u76f8\u5173\u7684\u4f7f\u7528\u793a\u4f8b\u4ee3\u7801\u53c2\u8003\u793a\u4f8b\u4ee3\u7801",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-tubemq/tubemq-example/src/main/java/org/apache/inlong/tubemq/example/ClientBalanceConsumerExample.java"},"ClientBalanceConsumerExample.java")," \u3002\u603b\u7684\u4ee3\u7801\u5b9e\u73b0\u903b\u8f91\u5982\u4e0b\u56fe\u793a\uff1a\n",(0,i.kt)("img",{src:n(98685).Z,width:"947",height:"1088"})),(0,i.kt)("h2",{id:"3-\u5b9e\u73b0\u65b9\u6848"},"3 \u5b9e\u73b0\u65b9\u6848"),(0,i.kt)("h3",{id:"31-\u603b\u7684\u601d\u8def"},"3.1 \u603b\u7684\u601d\u8def"),(0,i.kt)("p",null,"\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u4ee5\u53ca\u540c\u7c7bMQ\u7684\u5b9e\u73b0\u5206\u6790\uff0c\u6211\u4eec\u5728TubeMQ\u6d88\u8d39\u7aef\u589e\u52a0ClientBalanceConsumer\u7c7b\uff0c\u901a\u8fc7\u8be5SDK\u63d0\u4f9b\u7684API\uff0c\u4e1a\u52a1\u53ef\u4ee5\u5b9a\u671f\u67e5\u8be2\u5f85\u6d88\u8d39\u7684Topic\u5bf9\u5e94\u7684\u5206\u533a\u96c6\u5408\u4fe1\u606f\uff1b\u5e76\u4e14\u4e1a\u52a1\u53ef\u4ee5\u901a\u8fc7API\u5bf9\u6307\u5b9a\u5206\u533a\u4ee5\u53ca\u521d\u59cboffset\u8fdb\u884c\u6ce8\u518c\uff0c\u4ee5\u53ca\u6ce8\u9500\u4e4b\u524d\u5df2\u7ecf\u6ce8\u518c\u7684\u5206\u533a\uff1b\u540c\u65f6\u670d\u52a1\u7aef\u4e0d\u7ba1\u7406\u8be5\u7c7b\u6d88\u8d39\u7ec4\u7684\u5206\u533a\u5206\u914d\uff0c\u5b8c\u5168\u7531\u5ba2\u6237\u7aef\u63a7\u5236\u5ba2\u6237\u7aef\u4e0e\u5206\u533a\u7684\u5206\u914d\u3001\u91ca\u653e\u5173\u7cfb\u3002"),(0,i.kt)("h3",{id:"32-\u5b57\u6bb5\u5b9a\u4e49"},"3.2 \u5b57\u6bb5\u5b9a\u4e49"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528\u8be5\u7c7b\u6d88\u8d39\u8005\u524d\uff0c\u4e1a\u52a1\u9700\u8981\u6ce8\u610f\u5982\u4e0b2\u4e2a\u5b57\u6bb5\u4fe1\u606f\u5b9a\u4e49\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PartitionKey\uff1a \u5206\u533aKey\uff0cString\u7c7b\u578b\uff0cTubeMQ\u91cc\u7528\u6765\u552f\u4e00\u6807\u8bc6\u4e00\u4e2a\u5206\u533a\u7684ID\uff0c\u96c6\u7fa4\u5185\u5168\u5c40\u552f\u4e00\uff0c\u683c\u5f0f\u4e3a\u201cbrokerId:Topic\u540d:partitionId\u201d\u6837\u5f0f\uff0c\u4e1a\u52a1\u67e5\u8be2\u5206\u533a\u5143\u6570\u636e\u4fe1\u606f\u65f6\u5c06\u8fd4\u56de\u7ed3\u679c\u4e3aPartitionKey\u7684\u96c6\u5408\uff1b"),(0,i.kt)("li",{parentName:"ul"},"bootstrapOffset\uff1a \u91cd\u7f6eOffset\uff0clong\u7c7b\u578b\uff0c\u4e1a\u52a1\u5bf9\u6307\u5b9a\u5206\u533a\u8fdb\u884c\u6ce8\u518c\u6d88\u8d39\u65f6\u63d0\u4f9b\u7684\u521d\u59cb\u6d88\u8d39\u503c\uff0c\u6709\u6548\u503c\u4e3a[0, +value\uff09\uff1b\u8c03\u7528\u8be5\u63a5\u53e3\u65f6\u8be5\u5b57\u6bb5\u8bbe\u7f6e\u4e3a-1\u8868\u793a\u4e1a\u52a1\u6309\u7167\u670d\u52a1\u4fa7\u5b58\u50a8\u7684Offset\u4f4d\u7f6e\u63a5\u7eed\u6d88\u8d39\u6570\u636e")),(0,i.kt)("h3",{id:"43-\u4ea4\u4e92\u4ecb\u7ecd"},"4.3 \u4ea4\u4e92\u4ecb\u7ecd"),(0,i.kt)("h4",{id:"431-\u6838\u5fc3\u601d\u8def"},"4.3.1 \u6838\u5fc3\u601d\u8def"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(91028).Z,width:"1539",height:"808"}),"\n\u5982\u4e0a\u56fe\u793a\uff0c\u5ba2\u6237\u7aef\u8d1f\u8f7d\u5747\u8861\u64cd\u4f5c\u80cc\u540e\u7684\u903b\u8f91\u4e3b\u8981\u662f\u5904\u7406\u5206\u533a\u96c6\u5408\uff0c\u5ba2\u6237\u7aef\u8981\u5b9a\u671f\u83b7\u53d6\u53ef\u8ba2\u9605\u5206\u533a\u96c6\u5408\uff0c\u6839\u636e\u5206\u914d\u7b97\u6cd5\u6765\u83b7\u53d6\u6bcf\u4e2a\u5ba2\u6237\u7aef\u5f53\u524d\u53ef\u6d88\u8d39\u7684\u5206\u533a\u96c6\u5408\uff1b\u5f53\u524d\u53ef\u6d88\u8d39\u7684\u96c6\u5408\u4e0e\u5ba2\u6237\u7aef\u5f53\u524d\u5728\u6d88\u8d39\u7684\u5206\u533a\u96c6\u5408\u53d6\u4ea4\u96c6\uff0c\u83b7\u5f97\u9700\u8981\u91ca\u653e\u548c\u9700\u8981\u65b0\u6ce8\u518c\u7684\u5206\u533a\uff1b\u5bf9\u4e8e\u9700\u8981\u65b0\u6ce8\u518c\u7684\u5206\u533a\uff0c\u652f\u6301\u5ba2\u6237\u7aef\u6307\u5b9a\u521d\u59cb\u6d88\u8d39\u7684offset\u503c\u3002"),(0,i.kt)("p",null,"\u5ba2\u6237\u7aef\u5206\u533a\u5206\u914d\u4f7f\u7528\u4e2d\u4e1a\u52a1\u9700\u8981\u5173\u6ce8\u5982\u4e0b2\u4e2a\u95ee\u9898\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u4f55\u51cf\u5c0f\u5206\u533a\u6269\u7f29\u5bb9\u5e26\u6765\u7684\u5f71\u54cd\uff1a TubeMQ\u4f1a\u968f\u65f6\u8fdb\u884c\u6269\u7f29\u5bb9\uff0c\u6bd4\u5982Broker\u5f02\u5e38\u4e0b\u7ebf\u3001\u8fd0\u7ef4\u8fdb\u884c\u9ed1\u540d\u5355\u64cd\u4f5c\u3001\u8fd0\u7ef4\u6269\u5bb9Topic\u7684\u5206\u533a\u7b49\uff0c\u4e3a\u4e86\u5e94\u5bf9\u8fd9\u4e2a\u95ee\u9898\uff0c\u4e1a\u52a1\u62c9\u53d6\u5230\u7684\u5206\u533a\u5143\u6570\u636e\u4fe1\u606f\u4e3a\u914d\u7f6e\u4fe1\u606f\uff0c\u4ee5\u53ca\u5206\u533a\u7684\u53ef\u8ba2\u9605\u72b6\u6001\uff1b\u5efa\u8bae\u4e1a\u52a1\u6309\u7167\u914d\u7f6e\u5168\u96c6\u8fdb\u884c\u5206\u914d\uff0c\u7136\u540e\u9488\u5bf9\u5143\u6570\u636e\u72b6\u6001\u8fdb\u884c\u6ce8\u9500\u3001\u6ce8\u518c\u5904\u7406\uff08\u793a\u4f8b\u4ee3\u7801\u91cc\u6709\u793a\u4f8b\uff09\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u56e0\u4e3aBroker\u5f02\u5e38\u4e0a\u4e0b\u7ebf\u3001\u9ed1\u540d\u5355\u3001\u4e34\u65f6\u4e0d\u53ef\u8ba2\u9605\u7b49\u64cd\u4f5c\u5e26\u6765\u7684\u9891\u7e41\u91ca\u653e\u548c\u52a0\u5165\u5904\u7406\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5e94\u5bf9\u5ba2\u6237\u7aef\u4fa7\u7684\u6269\u7f29\u5bb9\uff1a \u6211\u4eec\u7f3a\u7701\u8ba4\u4e3a\u4e1a\u52a1\u4f1a\u91c7\u7528\u6309\u7167\u5206\u533a\u6570\u4e0e\u6d88\u8d39\u7ec4\u7684\u5ba2\u6237\u7aef\u6570\u8fdb\u884c\u53d6\u6a21\u5206\u914d\u5206\u533a\uff0c\u56e0\u6b64\uff0c\u6211\u4eec\u5728TubeMQ\u7684start()\u51fd\u6570\u91cc\u589e\u52a0\u4e86sourceCount\uff08\u6d88\u8d39\u7ec4\u7684\u603b\u8282\u70b9\u6570\uff09\uff0cnodeId\uff08\u5f53\u524d\u8282\u70b9\u7684ID\u53f7\uff09\u4e24\u4e2a\u5b57\u6bb5\uff0c\u6765\u544a\u8bc9\u670d\u52a1\u4fa7\u8be5\u6d88\u8d39\u7ec4\u4f1a\u542f\u52a8\u591a\u5c11\u5ba2\u6237\u7aef\uff0c\u6bcf\u4e2a\u5ba2\u6237\u7aef\u7684ID\u53f7\u662f\u591a\u5c11\uff0c\u6765\u4fdd\u8bc1\u53d6\u6a21\u5206\u914d\u7684\u4e00\u81f4\u6027\uff1b\u4e1a\u52a1\u4f7f\u7528\u6d88\u8d39\u7ec4\u65f6\u9700\u8981\u6307\u5b9a\u4e0a\u8ff02\u4e2a\u53c2\u6570\uff0csourceCount\u8981\u786e\u4fdd\u540c\u4e00\u4e2a\u7ec4\u91cc\u6240\u6709\u7684\u6d88\u8d39\u8005\u63d0\u4f9b\u7684\u503c\u76f8\u540c\uff0cnodeId\u8981\u786e\u4fdd\u540c\u4e00\u4e2a\u7ec4\u91cc\u6240\u6709\u6d88\u8d39\u8005\u4f7f\u7528\u7684ID\u662f\u552f\u4e00\u7684\u3002\u901a\u8fc7\u8fd9\u4e2a\u65b9\u5f0f\u786e\u4fdd\u6d88\u8d39\u7ec4\u5982\u679c\u4f7f\u7528\u53d6\u6a21\u65b9\u6848\uff0c\u5bf9\u5e94\u7684\u57fa\u7840\u53c2\u6570\u662f\u6ca1\u6709\u51b2\u7a81\u7684\u3002\u4e1a\u52a1\u6709\u53ef\u80fd\u4e0d\u9009\u53d6\u6a21\u65b9\u6848\uff0c\u8fd9\u4e2a\u65f6\u5019\u53ea\u9700\u8981\u8bbe\u7f6esourceCount\u4e3a\u65e0\u6548\u503c\uff08\u5c0f\u4e8e0\uff09\uff0c\u5219\u53ef\u5173\u95ed\u8be5\u7f3a\u7701\u7684\u53c2\u6570\u8981\u6c42\u3002")),(0,i.kt)("h4",{id:"432-\u4ea4\u4e92\u6d41\u7a0b"},"4.3.2 \u4ea4\u4e92\u6d41\u7a0b"),(0,i.kt)("p",null,"\u5404\u4e2a\u8282\u70b9\u95f4\u7684\u4ea4\u4e92\u5982\u4e0b\uff1a\n",(0,i.kt)("img",{src:n(61085).Z,width:"1260",height:"1033"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Master\u4e0d\u5bf9\u5ba2\u6237\u7aef\u7ba1\u63a7\u7684Consumer\u505a\u8d1f\u8f7d\u5747\u8861\u5904\u7406\uff1aMaster\u6536\u5230\u8fd9\u7c7b\u5ba2\u6237\u7aef\u6ce8\u518c\u7684\u6d88\u8d39\u7ec4\u540e\uff0c\u4e0d\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u64cd\u4f5c\uff0c\u5b8c\u5168\u7531\u5ba2\u6237\u7aef\u81ea\u5df1\u63a7\u5236\uff1b"),(0,i.kt)("li",{parentName:"ul"},"Consumer\u63d0\u4f9b\u5206\u533a\u67e5\u8be2\u63a5\u53e3\uff0c\u4f9b\u4e1a\u52a1\u5b9a\u671f\u67e5\u8be2\u5f85\u6d88\u8d39\u7684Topic\u96c6\u5408\u5bf9\u5e94\u7684\u5206\u533a\u96c6\u5408\u4fe1\u606f\uff1b"),(0,i.kt)("li",{parentName:"ul"},"Consumer\u63d0\u4f9b\u5206\u533a\u6ce8\u518c\u3001\u6ce8\u9500\u63a5\u53e3\uff0c\u4f9b\u4e1a\u52a1\u5bf9\u8be5\u5ba2\u6237\u7aef\u5df2\u6ce8\u518c\u9700\u6ce8\u9500\u7684\u5206\u533a\u8fdb\u884c\u6ce8\u9500\u64cd\u4f5c\uff0c\u901a\u8fc7\u6ce8\u518c\u63a5\u53e3\u5bf9\u6307\u5b9a\u672a\u6ce8\u518c\u7684\u5206\u533a\u8fdb\u884c\u6ce8\u518c\uff0c\u6ce8\u518c\u7684\u65f6\u5019\u652f\u6301\u4e1a\u52a1\u6307\u5b9a\u6ce8\u518c\u7684\u521d\u59cboffset\uff1b"),(0,i.kt)("li",{parentName:"ul"},"Consumer\u5b9a\u671f\u4e0a\u62a5\u72b6\u6001\u53ca\u5206\u533a\u6ce8\u518c\u4fe1\u606f\uff0c\u8ba9Master\u4fa7\u611f\u77e5\u5404\u4e2aSDK\u5f53\u524d\u5206\u533a\u5206\u914d\u53ca\u6ce8\u518c\u60c5\u51b5\uff0c\u4fbf\u4e8e\u670d\u52a1\u7aef\u83b7\u53d6\u6574\u4e2a\u7ec4\u7684\u5206\u533a\u5206\u914d\u4fe1\u606f\uff1b"),(0,i.kt)("li",{parentName:"ul"},"Master\u63d0\u4f9b\u67e5\u8be2API\uff0c\u652f\u6301\u8fd0\u7ef4\u901a\u8fc7API\u67e5\u8be2\u63a5\u53e3\u67e5\u8be2\u6307\u5b9a\u5206\u533a\u5206\u914d\u6d88\u8d39\u7ec4\u5404\u8282\u70b9\u7684\u5206\u533a\u5206\u914d\u60c5\u51b5\u3002")),(0,i.kt)("h2",{id:"5-\u603b\u7ed3"},"5 \u603b\u7ed3"),(0,i.kt)("p",null,"\u5230\u8fd9\u91cc\uff0c\u6211\u4eec\u5c31\u5b8c\u6210\u4e86\u5ba2\u6237\u7aef\u5206\u533a\u5206\u914d\u7684\u4ecb\u7ecd\uff0c\u5e76\u4e14\u901a\u8fc7\u5ba2\u6237\u7aef\u6309\u7167\u5206\u533a\u603b\u6570\u4ee5\u53ca\u6d88\u8d39\u7ec4\u91cc\u5ba2\u6237\u7aef\u603b\u4e2a\u6570\u8fdb\u884chash\u53d6\u6a21\u65b9\u5f0f\u4e3a\u4f8b\u505a\u4e86\u5206\u533a\u5206\u914d\u7684\u8be6\u7ec6\u793a\u4f8b\u3002\u8fd9\u91cc\u5e76\u6ca1\u6709\u9650\u5236\u5206\u533a\u7684\u5206\u914d\u65b9\u6848\uff0c\u5927\u5bb6\u5728\u4f7f\u7528\u7684\u65f6\u5019\u4e5f\u53ef\u4ee5\u91c7\u7528\u5176\u4ed6\u7684\u65b9\u6848\uff0c\u53ea\u9700\u8981\u5c06sourceCount\u503c\u8bbe\u7f6e\u4e3a-1\uff0c\u5373\u53ef\u5173\u95ed\u7cfb\u7edf\u9ed8\u8ba4\u7684\u5206\u914d\u7b56\u7565\u3002"),(0,i.kt)("p",null,"\u5728\u5b9e\u73b0\u7684\u65f6\u5019\u6700\u521d\u8ba1\u5212\u662f\u5c06\u5206\u914d\u65b9\u6848\u4ee5\u56de\u8c03\u65b9\u5f0f\u5bf9\u5916\u5e76\u5c06\u5206\u533a\u5206\u914d\u7684\u7ebf\u7a0b\u5305\u542b\u5230SDK\u5185\u90e8\uff0c\u4f46\u540e\u6765\u8003\u8651\u5230\u5ba2\u6237\u7aef\u53ef\u80fd\u4f1a\u505a\u975e\u5e38\u591a\u7684\u7cbe\u7ec6\u5904\u7406\uff0c\u5c01\u88c5\u8d77\u6765\u53ef\u80fd\u53cd\u800c\u4f1a\u9650\u5236\u4e1a\u52a1\u7684\u4f7f\u7528\uff0c\u4e14\u76f8\u6bd4\u800c\u8a00\u53ea\u662f\u4e1a\u52a1\u591a\u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u56e0\u800c\u76ee\u524d\u7248\u672c\u6ca1\u6709\u8fdb\u884c\u8fd9\u5757\u5c01\u88c5\u3002\u540e\u7eed\u770b\u5b9e\u65bd\u7684\u6548\u679c\uff0c\u5982\u679c\u8fd9\u5757\u9700\u8981\uff0c\u6211\u4eec\u518d\u6539\u8fdb\u3002"),(0,i.kt)("hr",null),(0,i.kt)("a",{href:"#top"},"Back to top"))}m.isMDXComponent=!0},98685:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/example-0730e11e6e7425551ebaf53f70138849.png"},61085:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/flow_diagram-cf9ef446dc429560f35403af94f84e48.png"},91028:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/topic_assign-1ee45798caae26cd238632a1b52c2968.png"}}]);