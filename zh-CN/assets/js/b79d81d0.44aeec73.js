"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[16262],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=u(n),s=l,m=d["".concat(p,".").concat(s)]||d[s]||k[s]||a;return n?r.createElement(m,i(i({ref:e},c),{},{components:n})):r.createElement(m,i({ref:e},c))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5834:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={title:"TubeMQ\u7ba1\u63a7\u53f0\u64cd\u4f5c\u6307\u5f15"},i=void 0,o={unversionedId:"modules/tubemq/console_introduction",id:"version-1.1.0/modules/tubemq/console_introduction",title:"TubeMQ\u7ba1\u63a7\u53f0\u64cd\u4f5c\u6307\u5f15",description:"1 \u7ba1\u63a7\u53f0\u5173\u7cfb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/modules/tubemq/console_introduction.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/console_introduction",permalink:"/zh-CN/docs/1.1.0/modules/tubemq/console_introduction",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/modules/tubemq/console_introduction.md",tags:[],version:"1.1.0",frontMatter:{title:"TubeMQ\u7ba1\u63a7\u53f0\u64cd\u4f5c\u6307\u5f15"},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u53c2\u6570",permalink:"/zh-CN/docs/1.1.0/modules/tubemq/configure_introduction"},next:{title:"\u9519\u8bef\u7801\u5b9a\u4e49",permalink:"/zh-CN/docs/1.1.0/modules/tubemq/error_code"}},p={},u=[{value:"1 \u7ba1\u63a7\u53f0\u5173\u7cfb",id:"1-\u7ba1\u63a7\u53f0\u5173\u7cfb",level:2},{value:"2 TubeMQ\u7ba1\u63a7\u53f0\u5404\u7248\u9762\u4ecb\u7ecd",id:"2-tubemq\u7ba1\u63a7\u53f0\u5404\u7248\u9762\u4ecb\u7ecd",level:2},{value:"2.1 \u5206\u53d1\u67e5\u8be2",id:"21-\u5206\u53d1\u67e5\u8be2",level:3},{value:"2.2 \u96c6\u7fa4\u7ba1\u7406",id:"22-\u96c6\u7fa4\u7ba1\u7406",level:3},{value:"2.3 \u914d\u7f6e\u7ba1\u7406",id:"23-\u914d\u7f6e\u7ba1\u7406",level:3},{value:"2.4 TubeMQ\u7ba1\u63a7\u53f0\u4e0a\u6d89\u53ca\u7684\u64cd\u4f5c\u53ca\u6ce8\u610f\u4e8b\u9879",id:"24-tubemq\u7ba1\u63a7\u53f0\u4e0a\u6d89\u53ca\u7684\u64cd\u4f5c\u53ca\u6ce8\u610f\u4e8b\u9879",level:3},{value:"3 \u5bf9\u4e8eTopic\u7684\u5143\u6570\u636e\u8fdb\u884c\u53d8\u66f4\u540e\u7684\u64cd\u4f5c\u6ce8\u610f\u4e8b\u9879\uff1a",id:"3-\u5bf9\u4e8etopic\u7684\u5143\u6570\u636e\u8fdb\u884c\u53d8\u66f4\u540e\u7684\u64cd\u4f5c\u6ce8\u610f\u4e8b\u9879",level:2},{value:"3.1 \u5982\u4f55\u81ea\u884c\u914d\u7f6eTopic\u53c2\u6570\uff1a",id:"31-\u5982\u4f55\u81ea\u884c\u914d\u7f6etopic\u53c2\u6570",level:3},{value:"3.2 Topic\u53d8\u66f4\u6ce8\u610f\u4e8b\u9879\uff1a",id:"32-topic\u53d8\u66f4\u6ce8\u610f\u4e8b\u9879",level:3},{value:"3.3 \u5bf9\u4e8eTopic\u7684\u5220\u9664\u5904\u7406\uff1a",id:"33-\u5bf9\u4e8etopic\u7684\u5220\u9664\u5904\u7406",level:3}],c={toc:u};function d(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u7ba1\u63a7\u53f0\u5173\u7cfb"},"1 \u7ba1\u63a7\u53f0\u5173\u7cfb"),(0,l.kt)("p",null,"TubeMQ\u7ba1\u63a7\u53f0\u662f\u7ba1\u7406TubeMQ\u96c6\u7fa4\u7684\u7b80\u5355\u8fd0\u8425\u5de5\u5177\uff0c\u5305\u62ec\u96c6\u7fa4\u91cc\u7684Master\u3001Broker\uff0c\u4ee5\u53caBroker\u4e0a\u90e8\u7f72\u7684Topic\u5143\u6570\u636e\u7b49\u4e0eTubeMQ\u7cfb\u7edf\u76f8\u5173\u7684\u8fd0\u8425\u6570\u636e\u53ca\u64cd\u4f5c\u3002\u9700\u8981\u8bf4\u660e\u7684\u662f\uff0c\u5f53\u524d\u63d0\u4f9b\u7684TubeMQ\u524d\u53f0\u6240\u63d0\u4f9b\u7684\u529f\u80fd\u6ca1\u6709\u6db5\u76d6TubeMQ\u6240\u63d0\u4f9b\u7684\u529f\u80fd\u8303\u56f4\uff0c\u5927\u5bb6\u53ef\u4ee5\u53c2\u7167\u300aTubeMQ HTTP\u8bbf\u95ee\u63a5\u53e3\u5b9a\u4e49.xls\u300b\u5b9a\u4e49\u81ea\u884c\u5b9e\u73b0\u7b26\u5408\u4e1a\u52a1\u9700\u8981\u7684\u7ba1\u63a7\u524d\u53f0\u3002TubeMQ\u7ba1\u63a7\u53f0\u7684\u8bbf\u95ee\u5730\u5740\u4e3ahttp://portal:webport/config/topic_list.htm\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(14233).Z,width:"554",height:"120"})),(0,l.kt)("p",null,"\u5176\u4e2dportal\u4e3a\u8be5\u96c6\u7fa4\u4e2d\u4efb\u610f\u7684\u4e3b\u3001\u5907Master\u7684IP\u5730\u5740\uff0cwebport\u4e3a\u914d\u7f6e\u7684Master\u7684Web\u7aef\u53e3\u3002"),(0,l.kt)("h2",{id:"2-tubemq\u7ba1\u63a7\u53f0\u5404\u7248\u9762\u4ecb\u7ecd"},"2 TubeMQ\u7ba1\u63a7\u53f0\u5404\u7248\u9762\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u7ba1\u63a7\u53f0\u4e00\u51713\u9879\u5185\u5bb9\uff1a\u5206\u53d1\u67e5\u8be2\uff0c\u914d\u7f6e\u7ba1\u7406\uff0c\u96c6\u7fa4\u7ba1\u7406\uff1b\u914d\u7f6e\u7ba1\u7406\u53c8\u5206\u4e3aBroker\u5217\u8868\uff0cTopic\u5217\u88682\u4e2a\u90e8\u5206\uff0c\u6211\u4eec\u5148\u4ecb\u7ecd\u7b80\u5355\u7684\u5206\u53d1\u67e5\u8be2\u548c\u96c6\u7fa4\u7ba1\u7406\uff0c\u7136\u540e\u518d\u4ecb\u7ecd\u590d\u6742\u7684\u914d\u7f6e\u7ba1\u7406\u3002"),(0,l.kt)("h3",{id:"21-\u5206\u53d1\u67e5\u8be2"},"2.1 \u5206\u53d1\u67e5\u8be2"),(0,l.kt)("p",null,"\u70b9\u5206\u53d1\u67e5\u8be2\uff0c\u6211\u4eec\u4f1a\u770b\u5230\u5982\u4e0b\u7684\u5217\u8868\u4fe1\u606f\uff0c\u8fd9\u662f\u5f53\u524dTubeMQ\u96c6\u7fa4\u91cc\u5df2\u6ce8\u518c\u7684\u6d88\u8d39\u7ec4\u4fe1\u606f\uff0c\u5305\u62ec\u5177\u4f53\u7684\u6d88\u8d39\u7ec4\u7ec4\u540d\uff0c\u6d88\u8d39\u7684Topic\uff0c\u4ee5\u53ca\u8be5\u7ec4\u603b\u7684\u6d88\u8d39\u5206\u533a\u6570\u7b80\u4ecb\u4fe1\u606f\uff0c\u5982\u4e0b\u56fe\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(45129).Z,width:"476",height:"132"})),(0,l.kt)("p",null,"\u70b9\u51fb\u8bb0\u5f55\uff0c\u53ef\u4ee5\u770b\u5230\u9009\u4e2d\u7684\u6d88\u8d39\u7ec4\u91cc\u7684\u6d88\u8d39\u8005\u6210\u5458\uff0c\u53ca\u5bf9\u5e94\u6d88\u8d39\u7684Broker\u53caPartition\u5206\u533a\u4fe1\u606f\uff0c\u5982\u4e0b\u56fe\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(64892).Z,width:"445",height:"100"})),(0,l.kt)("p",null,"\u8fd9\u4e2a\u9875\u9762\u53ef\u4ee5\u4f9b\u6211\u4eec\u67e5\u8be2\uff0c\u8f93\u5165Topic\u6216\u8005\u6d88\u8d39\u7ec4\u540d\uff0c\u5c31\u53ef\u4ee5\u5f88\u5feb\u786e\u8ba4\u7cfb\u7edf\u91cc\u6709\u54ea\u4e9b\u6d88\u8d39\u7ec4\u5728\u6d88\u8d39Topic\uff0c\u4ee5\u53ca\u6bcf\u4e2a\u6d88\u8d39\u7ec4\u7684\u6d88\u8d39\u76ee\u6807\u662f\u600e\u6837\u8fd9\u4e9b\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"22-\u96c6\u7fa4\u7ba1\u7406"},"2.2 \u96c6\u7fa4\u7ba1\u7406"),(0,l.kt)("p",null,"\u96c6\u7fa4\u7ba1\u7406\u4e3b\u8981\u7ba1\u7406Master\u7684HA\uff0c\u5728\u8fd9\u4e2a\u9875\u9762\u4e0a\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5f53\u524dMaster\u7684\u5404\u4e2a\u8282\u70b9\u53ca\u8282\u70b9\u72b6\u6001\uff0c\u540c\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u201c\u5207\u6362\u201d\u64cd\u4f5c\u6765\u6539\u53d8\u8282\u70b9\u7684\u4e3b\u5907\u72b6\u6001\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(5609).Z,width:"454",height:"118"})),(0,l.kt)("h3",{id:"23-\u914d\u7f6e\u7ba1\u7406"},"2.3 \u914d\u7f6e\u7ba1\u7406"),(0,l.kt)("p",null,"\u914d\u7f6e\u7ba1\u7406\u7248\u9762\u65e2\u5305\u542b\u4e86Broker\u3001Topic\u5143\u6570\u636e\u7684\u7ba1\u7406\uff0c\u8fd8\u5305\u542b\u4e86Broker\u548cTopic\u7684\u4e0a\u7ebf\u53d1\u5e03\u4ee5\u53ca\u4e0b\u7ebf\u64cd\u4f5c\uff0c\u67092\u5c42\u542b\u4e49\uff0c\u6bd4\u5982Broker\u5217\u8868\u91cc\uff0c\u5c55\u793a\u7684\u662f\u5f53\u524d\u96c6\u7fa4\u91cc\u5df2\u914d\u7f6e\u7684Broker\u5143\u6570\u636e\uff0c\u5305\u62ec\u672a\u4e0a\u7ebf\u5904\u4e8e\u8349\u7a3f\u72b6\u6001\u3001\u5df2\u4e0a\u7ebf\u3001\u5df2\u4e0b\u7ebf\u7684Broker\u8bb0\u5f55\u4fe1\u606f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(33837).Z,width:"477",height:"131"})),(0,l.kt)("p",null,"\u4ece\u9875\u9762\u4fe1\u606f\u6211\u4eec\u4e5f\u53ef\u4ee5\u770b\u5230\uff0c\u9664\u4e86Broker\u7684\u8bb0\u5f55\u4fe1\u606f\u5916\uff0c\u8fd8\u6709Broker\u5728\u8be5\u96c6\u7fa4\u91cc\u7684\u7ba1\u7406\u4fe1\u606f\uff0c\u5305\u62ec\u662f\u5426\u5df2\u4e0a\u7ebf\uff0c\u662f\u5426\u5904\u4e8e\u547d\u4ee4\u5904\u7406\u4e2d\uff0c\u662f\u5426\u53ef\u8bfb\uff0c\u662f\u5426\u53ef\u5199\uff0c\u914d\u7f6e\u662f\u5426\u505a\u4e86\u66f4\u6539\uff0c\u662f\u5426\u5df2\u52a0\u8f7d\u53d8\u66f4\u7684\u914d\u7f6e\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u70b9\u51fb\u65b0\u589e\u6309\u94ae\uff0c\u4f1a\u5f39\u6846\u5982\u4e0b\uff0c\u8fd9\u4e2a\u8868\u793a\u5f85\u65b0\u589eBroker\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u5305\u62ecBrokerID\uff0cBrokerIP\uff0cBrokerPort\uff0c\u4ee5\u53ca\u8be5Broker\u91cc\u90e8\u7f72\u7684Topic\u7684\u7f3a\u7701\u914d\u7f6e\u4fe1\u606f\uff0c\u76f8\u5173\u7684\u5b57\u6bb5\u8be6\u60c5\u89c1\u300aTubeMQ HTTP\u8bbf\u95ee\u63a5\u53e3\u5b9a\u4e49.xls\u300b"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(36525).Z,width:"476",height:"264"})),(0,l.kt)("p",null,"\u6240\u6709TubeMQ\u7ba1\u63a7\u53f0\u7684\u53d8\u66f4\u64cd\u4f5c\uff0c\u6216\u8005\u6539\u53d8\u64cd\u4f5c\uff0c\u90fd\u4f1a\u8981\u6c42\u8f93\u5165\u64cd\u4f5c\u6388\u6743\u7801\uff0c\u8be5\u4fe1\u606f\u7531\u8fd0\u7ef4\u901a\u8fc7Master\u7684\u914d\u7f6e\u6587\u4ef6master.ini\u7684confModAuthToken\u5b57\u6bb5\u8fdb\u884c\u5b9a\u4e49\uff1a\u5982\u679c\u4f60\u77e5\u9053\u8fd9\u4e2a\u96c6\u7fa4\u7684\u5bc6\u7801\uff0c\u4f60\u5c31\u53ef\u4ee5\u8fdb\u884c\u8be5\u9879\u64cd\u4f5c\uff0c\u6bd4\u5982\u4f60\u662f\u7ba1\u7406\u5458\uff0c\u4f60\u662f\u6388\u6743\u4eba\u5458\uff0c\u6216\u8005\u4f60\u80fd\u767b\u9646\u8fd9\u4e2amaster\u7684\u673a\u5668\u62ff\u5230\u8fd9\u4e2a\u5bc6\u7801\uff0c\u90fd\u8ba4\u4e3a\u4f60\u662f\u6709\u6743\u64cd\u4f5c\u8be5\u9879\u529f\u80fd\u3002"),(0,l.kt)("h3",{id:"24-tubemq\u7ba1\u63a7\u53f0\u4e0a\u6d89\u53ca\u7684\u64cd\u4f5c\u53ca\u6ce8\u610f\u4e8b\u9879"},"2.4 TubeMQ\u7ba1\u63a7\u53f0\u4e0a\u6d89\u53ca\u7684\u64cd\u4f5c\u53ca\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("p",null,"\u5982\u4e0a\u6240\u8bf4\uff0cTubeMQ\u7ba1\u63a7\u53f0\u662f\u8fd0\u8425Tube MQ\u96c6\u7fa4\u7684\uff0c\u5957\u4ef6\u8d1f\u8d23\u5305\u62ecMaster\u3001Broker\u8fd9\u7c7bTubeMQ\u96c6\u7fa4\u8282\u70b9\u7ba1\u7406\uff0c\u5305\u62ec\u81ea\u52a8\u90e8\u7f72\u548c\u5b89\u88c5\u7b49\uff0c\u56e0\u6b64\uff0c\u5982\u4e0b\u51e0\u70b9\u9700\u8981\u6ce8\u610f\uff1a"),(0,l.kt)("p",null,"1\uff0e ",(0,l.kt)("strong",{parentName:"p"},"TubeMQ\u96c6\u7fa4\u505a\u6269\u7f29\u5bb9\u589e\u3001\u51cfBroker\u8282\u70b9\u65f6\uff0c\u8981\u5148\u5728TubeMQ\u7ba1\u63a7\u53f0\u4e0a\u505a\u76f8\u5e94\u7684\u8282\u70b9\u65b0\u589e\u3001\u4e0a\u7ebf\uff0c\u4ee5\u53ca\u4e0b\u7ebf\u3001\u5220\u9664\u7b49\u64cd\u4f5c\u540e\u624d\u80fd\u5728\u7269\u7406\u73af\u5883\u4e0a\u505a\u5bf9\u5e94Broker\u8282\u70b9\u7684\u589e\u5220\u5904\u7406"),"\uff1a"),(0,l.kt)("p",null,"TubeMQ\u96c6\u7fa4\u5bf9Broker\u6309\u7167\u72b6\u6001\u673a\u7ba1\u7406\uff0c\u5982\u4e0a\u56fe\u793a\u6d89\u53ca\u5230","[draft\uff0conline\uff0cread-only\uff0cwrite-only\uff0coffline]"," \u7b49\u72b6\u6001\uff0c\u8bb0\u5f55\u589e\u52a0\u8fd8\u6ca1\u751f\u6548\u65f6\u662fdraft\u72b6\u6001\uff0c\u786e\u5b9a\u4e0a\u7ebf\u540e\u662fonline\u6001\uff1b\u8282\u70b9\u5220\u9664\u9996\u5148\u8981\u7531online\u72b6\u6001\u8f6c\u4e3aoffline\u72b6\u6001\uff0c\u7136\u540e\u518d\u901a\u8fc7\u5220\u9664\u64cd\u4f5c\u6e05\u7406\u7cfb\u7edf\u5185\u4fdd\u5b58\u7684\u8be5\u8282\u70b9\u8bb0\u5f55\uff1bdraft\u3001online\u548coffline\u662f\u4e3a\u4e86\u533a\u5206\u5404\u4e2a\u8282\u70b9\u6240\u5904\u7684\u73af\u8282\uff0cMaster\u53ea\u5c06online\u72b6\u6001\u7684Broker\u5206\u53d1\u7ed9\u5bf9\u5e94\u7684producer\u548cconsumer\u8fdb\u884c\u751f\u4ea7\u548c\u6d88\u8d39\uff1bread-only\uff0cwrite-only\u662fBroker\u5904\u4e8eonline\u72b6\u6001\u7684\u5b50\u72b6\u6001\uff0c\u8868\u793a\u53ea\u80fd\u8bfb\u6216\u8005\u53ea\u80fd\u5199Broker\u4e0a\u7684\u6570\u636e\uff1b\u76f8\u5173\u7684\u72b6\u6001\u53ca\u64cd\u4f5c\u89c1\u9875\u9762\u8be6\u60c5\uff0c\u589e\u52a0\u4e00\u6761\u8bb0\u5f55\u5373\u53ef\u660e\u767d\u5176\u4e2d\u7684\u5173\u7cfb\u3002TubeMQ\u7ba1\u63a7\u53f0\u4e0a\u589e\u52a0\u8fd9\u4e9b\u8bb0\u5f55\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u8fdb\u884cBroker\u8282\u70b9\u7684\u90e8\u7f72\u53ca\u542f\u52a8\uff0c\u8fd9\u4e2a\u65f6\u5019Tube\u96c6\u7fa4\u73af\u5883\u7684\u9875\u9762\u4f1a\u663e\u793a\u8282\u70b9\u8fd0\u884c\u72b6\u6001\uff0c\u5982\u679c\u4e3aunregister\u72b6\u6001\uff0c\u5982\u4e0b\u56fe\u793a\uff0c\u5219\u8868\u793a\u8282\u70b9\u6ce8\u518c\u5931\u8d25\uff0c\u9700\u8981\u5230\u5bf9\u5e94broker\u8282\u70b9\u4e0a\u68c0\u67e5\u65e5\u5fd7\uff0c\u786e\u8ba4\u539f\u56e0\u3002\u76ee\u524d\u8be5\u90e8\u5206\u5df2\u7ecf\u5f88\u6210\u719f\uff0c\u51fa\u9519\u4fe1\u606f\u4f1a\u63d0\u793a\u5b8c\u6574\u4fe1\u606f\uff0c\u5927\u5bb6\u53ef\u4ee5\u76f4\u63a5\u6839\u636e\u63d0\u793a\u4f5c\u95ee\u9898\u5904\u7406\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(19301).Z,width:"490",height:"149"})),(0,l.kt)("p",null,"2\uff0e ",(0,l.kt)("strong",{parentName:"p"},"Topic\u5143\u6570\u636e\u4fe1\u606f\u9700\u8981\u901a\u8fc7\u4f7f\u7528\u754c\u9762\u8fdb\u884c\u65b0\u589e\u548c\u5220\u9664\u64cd\u4f5c\uff1a")),(0,l.kt)("p",null,"\u5982\u4e0b\u56fe\uff0c\u4e1a\u52a1\u53d1\u73b0\u81ea\u5df1\u6d88\u8d39\u7684Topic\u5728TubeMQ\u7ba1\u63a7\u53f0\u4e0a\u6ca1\u6709\uff0c\u5219\u9700\u8981\u5728TubeMQ\u7684\u7ba1\u63a7\u53f0\u4e0a\u76f4\u63a5\u64cd\u4f5c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(99200).Z,width:"510",height:"221"})),(0,l.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u5982\u4e0a\u56fe\u4e2d\u7684Topic\u5217\u8868\u9879\u5b8c\u6210Topic\u7684\u65b0\u589e\uff0c\u4f1a\u5f39\u51fa\u5982\u4e0b\u6846\uff0c"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(70093).Z,width:"496",height:"247"})),(0,l.kt)("p",null,"\u70b9\u51fb\u786e\u8ba4\u540e\u4f1a\u6709\u4e00\u4e2a\u9009\u62e9\u90e8\u7f72\u8be5\u65b0\u589eTopic\u7684Broker\u5217\u8868\uff0c\u9009\u62e9\u90e8\u7f72\u8303\u56f4\u540e\u8fdb\u884c\u786e\u8ba4\u64cd\u4f5c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(93617).Z,width:"498",height:"318"})),(0,l.kt)("p",null,"\u5728\u5b8c\u6210\u65b0\u589eTopic\u7684\u64cd\u4f5c\u540e\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5bf9\u505a\u4e86\u914d\u7f6e\u53d8\u66f4\u7684Broker\u8fdb\u884c\u91cd\u8f7d\u64cd\u4f5c\uff0c\u5982\u4e0b\u56fe\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(52003).Z,width:"511",height:"105"})),(0,l.kt)("p",null,"\u91cd\u8f7d\u5b8c\u6210\u540eTopic\u624d\u80fd\u5bf9\u5916\u4f7f\u7528\uff0c\u6211\u4eec\u4f1a\u53d1\u73b0\u5982\u4e0b\u914d\u7f6e\u53d8\u66f4\u90e8\u5206\u5728\u91cd\u542f\u5b8c\u6210\u540e\u5df2\u6539\u53d8\u72b6\u6001\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8848).Z,width:"508",height:"118"})),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u5c31\u53ef\u4ee5\u9488\u5bf9\u8be5Topic\u8fdb\u884c\u751f\u4ea7\u548c\u6d88\u8d39\u5904\u7406\u3002"),(0,l.kt)("h2",{id:"3-\u5bf9\u4e8etopic\u7684\u5143\u6570\u636e\u8fdb\u884c\u53d8\u66f4\u540e\u7684\u64cd\u4f5c\u6ce8\u610f\u4e8b\u9879"},"3 \u5bf9\u4e8eTopic\u7684\u5143\u6570\u636e\u8fdb\u884c\u53d8\u66f4\u540e\u7684\u64cd\u4f5c\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,l.kt)("h3",{id:"31-\u5982\u4f55\u81ea\u884c\u914d\u7f6etopic\u53c2\u6570"},"3.1 \u5982\u4f55\u81ea\u884c\u914d\u7f6eTopic\u53c2\u6570\uff1a"),(0,l.kt)("p",null,"\u5927\u5bb6\u70b9\u51fbTopic\u5217\u8868\u91cc\u4efb\u610fTopic\u540e\uff0c\u4f1a\u5f39\u51fa\u5982\u4e0b\u6846\uff0c\u91cc\u9762\u662f\u8be5Topic\u7684\u76f8\u5173\u5143\u6570\u636e\u4fe1\u606f\uff0c\u5176\u51b3\u5b9a\u4e86\u8fd9\u4e2aTopic\u5728\u8be5Broker\u4e0a\uff0c\u8bbe\u7f6e\u4e86\u591a\u5c11\u4e2a\u5206\u533a\uff0c\u5f53\u524d\u8bfb\u5199\u72b6\u6001\uff0c\u6570\u636e\u5237\u76d8\u9891\u7387\uff0c\u6570\u636e\u8001\u5316\u5468\u671f\u548c\u65f6\u95f4\u7b49\u4fe1\u606f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(97098).Z,width:"506",height:"219"})),(0,l.kt)("p",null,"\u8fd9\u4e9b\u4fe1\u606f\u7531\u7cfb\u7edf\u7ba1\u7406\u5458\u8bbe\u7f6e\u597d\u9ed8\u8ba4\u503c\u540e\u76f4\u63a5\u5b9a\u4e49\u7684\uff0c\u4e00\u822c\u4e0d\u4f1a\u6539\u53d8\uff0c\u82e5\u4e1a\u52a1\u6709\u7279\u6b8a\u9700\u6c42\uff0c\u6bd4\u5982\u60f3\u589e\u52a0\u6d88\u8d39\u7684\u5e76\u884c\u5ea6\u589e\u591a\u5206\u533a\uff0c\u6216\u8005\u60f3\u51cf\u5c11\u5237\u76d8\u9891\u7387\uff0c\u600e\u4e48\u64cd\u4f5c\uff1f\u5982\u4e0b\u56fe\u793a\uff0c\u5404\u4e2a\u9875\u9762\u7684\u5b57\u6bb5\u542b\u4e49\u53ca\u4f5c\u7528\u5982\u4e0b\u8868\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topicName"),(0,l.kt)("td",{parentName:"tr",align:null},"topic\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'\u5b57\u4e32\u957f\u5ea6(0,64],\u4ee5\u5b57\u6bcd\u5f00\u5934\u7684\u5b57\u6bcd\uff0c\u6570\u5b57\uff0c\u4e0b\u5212\u7ebf\u7684\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u6279\u91cf\u65b0\u589etopic\uff0ctopic\u503c\u4ee5","\u9694\u5f00\uff0c\u6700\u5927\u6279\u91cf\u503c\u4e3a50\u6761')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"brokerId"),(0,l.kt)("td",{parentName:"tr",align:null},"broker\u7684ID"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},'\u5f85\u65b0\u589e\u7684BrokerId\uff0c\u6279\u91cf\u64cd\u4f5c\u7684brokerId\u6570\u5b57\u4ee5","\u9694\u5f00\uff0c\u6700\u5927\u6279\u91cf\u64cd\u4f5c\u91cf\u4e0d\u8d85\u8fc750')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deleteWhen"),(0,l.kt)("td",{parentName:"tr",align:null},"topic\u6570\u636e\u5220\u9664\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6309\u7167crontab\u7684\u914d\u7f6e\u683c\u5f0f\u5b9a\u4e49\uff0c\u5982\u201c0 0 6,18 * *   ?\u201d\uff0c\u7f3a\u7701\u4e3abroker\u7684\u5bf9\u5e94\u5b57\u6bb5\u7f3a\u7701\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deletePolicy"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u7b56\u7565"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'topic\u6570\u636e\u5220\u9664\u7b56\u7565\uff0c\u7c7b\u4f3c"delete,168"\u5b9a\u4e49\uff0c\u7f3a\u7701\u4e3abroker\u7684\u5bf9\u5e94\u5b57\u6bb5\u7f3a\u7701\u914d\u7f6e')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numPartitions"),(0,l.kt)("td",{parentName:"tr",align:null},"topic\u5728\u8be5broker\u4e0a\u7684\u5206\u533a\u91cf"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f3a\u7701\u4e3abroker\u7684\u5bf9\u5e94\u5b57\u6bb5\u7f3a\u7701\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unflushThreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u5141\u8bb8\u7684\u5f85\u5237\u65b0\u7684\u8bb0\u5f55\u6761\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u5141\u8bb8\u7684\u672aflush\u6d88\u606f\u6570\uff0c\u8d85\u8fc7\u6b64\u503c\u5c06\u5f3a\u5236force\u5230\u78c1\u76d8\uff0c\u9ed8\u8ba41000\uff0c\u7f3a\u7701\u4e3abroker\u7684\u5bf9\u5e94\u5b57\u6bb5\u7f3a\u7701\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unflushInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u5141\u8bb8\u7684\u5f85\u5237\u65b0\u7684\u95f4\u9694"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u5141\u8bb8\u7684\u672aflush\u95f4\u9694\u65f6\u95f4\uff0c\u6beb\u79d2\uff0c\u9ed8\u8ba410000\uff0c\u7f3a\u7701\u4e3abroker\u7684\u5bf9\u5e94\u5b57\u6bb5\u7f3a\u7701\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numTopicStores"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u5efa\u7acbTopic\u6570\u636e\u5757\u548c\u5206\u533a\u7ba1\u7406\u7ec4\u7684\u4e2a\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f3a\u7701\u4e3a1\u4e2a,\u5982\u679c\u5927\u4e8e1\u5219\u5206\u533a\u548ctopic\u5bf9\u5217\u6309\u7167\u8be5\u503c\u500d\u4e58\u5173\u7cfb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"memCacheMsgCntInK"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f3a\u7701\u6700\u5927\u5185\u5b58\u7f13\u5b58\u5305\u91cf"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u6700\u5927\u5141\u8bb8\u7f13\u5b58\u7684\u6d88\u606f\u5305\u603b\u6761\u6570\uff0c\u5355\u4f4d\u4e3a\u5343\u6761\uff0c\u7f3a\u7701\u4e3a10K\uff0c\u6700\u5c11\u5141\u8bb81K")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"memCacheMsgSizeInMB"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f3a\u7701\u5185\u5b58\u7f13\u5b58\u5305\u603b\u7684Size\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u6700\u5927\u5141\u8bb8\u7f13\u5b58\u7684\u6d88\u606f\u5305size\u603b\u5927\u5c0f\uff0c\u5355\u4f4d\u4e3aMB\uff0c\u7f3a\u7701\u4e3a3M\uff0c\u6700\u5c0f\u9700\u8981\u4e3a2M")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"memCacheFlushIntvl"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u7f13\u5b58\u6700\u5927\u5141\u8bb8\u7684\u5f85\u5237\u65b0\u95f4\u9694"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u6700\u5927\u5141\u8bb8\u672aflush\u65f6\u95f4\u95f4\u9694\uff0c\u6beb\u79d2\uff0c\u9ed8\u8ba420000ms,\u6700\u5c0f4000ms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"acceptPublish"),(0,l.kt)("td",{parentName:"tr",align:null},"topic\u662f\u5426\u63a5\u6536\u53d1\u5e03\u8bf7\u6c42"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f3a\u7701\u4e3atrue\uff0c\u53d6\u503c\u8303\u56f4","[true\uff0cfalse]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"acceptSubscribe"),(0,l.kt)("td",{parentName:"tr",align:null},"topic\u662f\u5426\u63a5\u6536\u8ba2\u9605\u8bf7\u6c42"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f3a\u7701\u4e3atrue\uff0c\u53d6\u503c\u8303\u56f4","[true\uff0cfalse]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createUser"),(0,l.kt)("td",{parentName:"tr",align:null},"topic\u521b\u5efa\u4eba"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u4e32\u957f\u5ea6(0,32],\u4ee5\u5b57\u6bcd\u5f00\u5934\u7684\u5b57\u6bcd\uff0c\u6570\u5b57\uff0c\u4e0b\u5212\u7ebf\u7684\u5b57\u7b26\u4e32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createDate"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'\u5b57\u4e32\u683c\u5f0f:"yyyyMMddHHmmss",\u5fc5\u987b\u4e3a14\u4f4d\u6309\u5982\u4e0a\u683c\u5f0f\u7684\u6570\u5b57\u5b57\u7b26\u4e32')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confModAuthToken"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u4fee\u6539\u6388\u6743key"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee5\u5b57\u6bcd\u5f00\u5934\u7684\u5b57\u6bcd\uff0c\u6570\u5b57\uff0c\u4e0b\u5212\u7ebf\u7684\u5b57\u7b26\u4e32,\u957f\u5ea6\u4e3a\uff080\uff0c128]\u4f4d")))),(0,l.kt)("p",null,"\u8be5\u90e8\u5206\u5b57\u6bb5\u76f8\u5173\u5b57\u6bb5\u8be6\u60c5\u89c1\u300aTube MQ HTTP\u8bbf\u95ee\u63a5\u53e3\u5b9a\u4e49.xls\u300b\uff0c\u6709\u5f88\u660e\u786e\u7684\u5b9a\u4e49\u3002\u5927\u5bb6\u901a\u8fc7\u9875\u9762\u53f3\u4e0a\u89d2\u7684",(0,l.kt)("strong",{parentName:"p"},"\u4fee\u6539"),"\u6309\u94ae\u8fdb\u884c\u4fee\u6539\uff0c\u5e76\u786e\u8ba4\u540e\uff0c\u4f1a\u5f39\u51fa\u5982\u4e0b\u6846\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(38384).Z,width:"449",height:"269"})),(0,l.kt)("p",null,"\u5176\u4f5c\u7528\u662f\uff1aa. \u9009\u62e9\u6d89\u53ca\u8be5Topic\u5143\u6570\u636e\u4fee\u6539\u7684Broker\u8282\u70b9\u96c6\u5408\uff1bb. \u63d0\u4f9b\u53d8\u66f4\u64cd\u4f5c\u7684\u6388\u6743\u4fe1\u606f\u7801\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7279\u522b\u63d0\u9192\uff1a\u5927\u5bb6\u8fd8\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8f93\u5165\u6388\u6743\u7801\u4fee\u6539\u540e\uff0c\u6570\u636e\u53d8\u66f4\u8981\u5237\u65b0\u540e\u624d\u4f1a\u751f\u6548\uff0c\u540c\u65f6\u751f\u6548\u7684Broker\u8981\u6309\u6bd4\u4f8b\u8fdb\u884c\u64cd\u4f5c\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(47535).Z,width:"468",height:"211"})),(0,l.kt)("h3",{id:"32-topic\u53d8\u66f4\u6ce8\u610f\u4e8b\u9879"},"3.2 Topic\u53d8\u66f4\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,l.kt)("p",null,"\u5982\u4e0a\u56fe\u793a\uff0c\u9009\u62e9\u53d8\u66f4Topic\u5143\u6570\u636e\u540e\uff0c\u4e4b\u524d\u9009\u4e2d\u7684Broker\u96c6\u5408\u4f1a\u5728",(0,l.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u662f\u5426\u5df2\u53d8\u66f4"),"\u4e0a\u51fa\u73b0\u662f\u7684\u63d0\u793a\u3002\u6211\u4eec\u8fd8\u9700\u8981\u5bf9\u53d8\u66f4\u8fdb\u884c\u91cd\u8f7d\u5237\u65b0\u64cd\u4f5c\uff0c\u9009\u62e9Broker\u96c6\u5408\uff0c\u7136\u540e\u9009\u62e9\u5237\u65b0\u64cd\u4f5c\uff0c\u53ef\u4ee5\u6279\u91cf\u4e5f\u53ef\u4ee5\u5355\u6761\uff0c\u4f46\u662f\u4e00\u5b9a\u8981\u6ce8\u610f\u7684\u662f\uff1a\u64cd\u4f5c\u8981\u5206\u6279\u8fdb\u884c\uff0c\u4e0a\u4e00\u6279\u64cd\u4f5c\u7684Broker\u5f53\u524d\u8fd0\u884c\u72b6\u6001\u4e3arunning\u540e\u624d\u80fd\u8fdb\u5165\u4e0b\u4e00\u6279\u7684\u914d\u7f6e\u5237\u65b0\u64cd\u4f5c\uff1b\u5982\u679c\u6709\u8282\u70b9\u5904\u4e8eonline\u72b6\u6001\uff0c\u4f46\u957f\u671f\u4e0d\u8fdb\u5165running\u72b6\u6001\uff08\u7f3a\u7701\u6700\u59272\u5206\u949f\uff09\uff0c\u5219\u9700\u8981\u505c\u6b62\u5237\u65b0\uff0c\u6392\u67e5\u95ee\u9898\u539f\u56e0\u540e\u518d\u7ee7\u7eed\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u8fdb\u884c\u5206\u6279\u64cd\u4f5c\u539f\u56e0\u662f\uff0c\u6211\u4eec\u7cfb\u7edf\u5728\u53d8\u66f4\u65f6\uff0c\u4f1a\u5bf9\u6307\u5b9a\u7684Broker\u505a\u505c\u8bfb\u505c\u5199\u64cd\u4f5c\uff0c\u5982\u679c\u5c06\u5168\u91cf\u7684Broker\u7edf\u4e00\u505a\u91cd\u8f7d\uff0c\u5f88\u660e\u663e\uff0c\u96c6\u7fa4\u6574\u4f53\u4f1a\u51fa\u73b0\u670d\u52a1\u4e0d\u53ef\u8bfb\u6216\u8005\u4e0d\u53ef\u5199\u7684\u60c5\u51b5\uff0c\u4ece\u800c\u63a5\u5165\u51fa\u73b0\u4e0d\u8be5\u6709\u7684\u5f02\u5e38\u3002"),(0,l.kt)("h3",{id:"33-\u5bf9\u4e8etopic\u7684\u5220\u9664\u5904\u7406"},"3.3 \u5bf9\u4e8eTopic\u7684\u5220\u9664\u5904\u7406\uff1a"),(0,l.kt)("p",null,"\u9875\u9762\u4e0a\u8fdb\u884c\u7684\u5220\u9664\u662f\u8f6f\u5220\u9664\u5904\u7406\uff0c\u5982\u679c\u8981\u5f7b\u5e95\u5220\u9664\u8be5topic\u9700\u8981\u901a\u8fc7API\u63a5\u53e3\u8fdb\u884c\u786c\u5220\u9664\u64cd\u4f5c\u5904\u7406\u624d\u80fd\u5b9e\u73b0\uff08\u907f\u514d\u4e1a\u52a1\u8bef\u64cd\u4f5c\uff09\u3002"),(0,l.kt)("p",null,"\u5b8c\u6210\u5982\u4e0a\u5185\u5bb9\u540e\uff0cTopic\u5143\u6570\u636e\u5c31\u53d8\u66f4\u5b8c\u6210\u3002"),(0,l.kt)("hr",null),(0,l.kt)("a",{href:"#top"},"Back to top"))}d.isMDXComponent=!0},14233:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1568169770714-c0328b62f45fa086761c52c104cbba04.png"},45129:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1568169796122-57881414283ad76316254e805f11a840.png"},64892:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1568169806810-cb98c00a0701401ef74ae42c5ca47edc.png"},5609:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1568169823675-8852b480363f81a7c84ed3ae446580f3.png"},33837:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1568169839931-cd2bd2e45b9f25b70282201fb4a5aa8b.png"},36525:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1568169851085-fe7e76e2556cf265c33a02706e43e2c2.png"},19301:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1568169863402-1bce9fa995efc504740b2bdc67f679e0.png"},99200:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1568169879529-86ca1d1d11f15bd27cc9e3b877341f1e.png"},70093:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1568169889594-b1d8a04b6c015fb80405211e4d000717.png"},93617:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1568169900634-1366b487f294c1e95ce4e124de0f0b55.png"},52003:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1568169908522-36453a049165ea2ce80f872a7f6e1097.png"},8848:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1568169916091-eef87de4f1387429953f5b49199a8179.png"},97098:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1568169925657-b418daea25bfa78b9967a7774e2da48a.png"},38384:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1568169946683-6514871728e8ecf3d61eca0a90dda320.png"},47535:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1568169954746-edc526c4b75627888f885f4180b67fac.png"}}]);