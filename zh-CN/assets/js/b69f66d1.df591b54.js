"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[76414],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>_});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),u=r,_=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return t?a.createElement(_,i(i({ref:n},p),{},{components:t})):a.createElement(_,i({ref:n},p))}));function _(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},57283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const o={title:"Manager \u63d2\u4ef6",sidebar_position:5},i=void 0,l={unversionedId:"design_and_concept/how_to_extend_data_node_for_manager",id:"version-1.5.0/design_and_concept/how_to_extend_data_node_for_manager",title:"Manager \u63d2\u4ef6",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.5.0/design_and_concept/how_to_extend_data_node_for_manager.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_extend_data_node_for_manager",permalink:"/zh-CN/docs/1.5.0/design_and_concept/how_to_extend_data_node_for_manager",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/design_and_concept/how_to_extend_data_node_for_manager.md",tags:[],version:"1.5.0",sidebarPosition:5,frontMatter:{title:"Manager \u63d2\u4ef6",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Dashboard \u63d2\u4ef6",permalink:"/zh-CN/docs/1.5.0/design_and_concept/how_to_write_plugin_dashboard"},next:{title:"DataProxy \u63d2\u4ef6",permalink:"/zh-CN/docs/1.5.0/design_and_concept/how_to_write_plugin_dataproxy"}},c={},d=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u6269\u5c55 Extract Node",id:"\u6269\u5c55-extract-node",level:2},{value:"\u6269\u5c55 Load Node",id:"\u6269\u5c55-load-node",level:2}],p={toc:d},s="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,r.kt)("p",null,"Inlong \u8bbe\u8ba1\u521d\u8877\u5373\u662f\u4e3a\u4e86\u5728\u4e0d\u540c\u6570\u636e\u6e90\u4e4b\u95f4\u521b\u5efa\u6570\u636e\u6d41\uff0c\u622a\u6b62\u76ee\u524d\uff0cInlong \u5df2\u7ecf\u652f\u6301\u591a\u79cd\u5e38\u7528\u6570\u636e\u6e90\u7684\u8bfb\u53d6\u548c\u5199\u5165\uff0c\u5982 ",(0,r.kt)("strong",{parentName:"p"},"MySQL"),", ",(0,r.kt)("strong",{parentName:"p"},"Apache Kafka"),", ",(0,r.kt)("strong",{parentName:"p"},"ClickHouse")," \u7b49\uff0c\n\u8be6\u7ec6\u5185\u5bb9\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.5.0/data_node/extract_node/overview"},"\u6570\u636e\u8282\u70b9"),"\u3002 InLong \u7684\u6bcf\u79cd\u6570\u636e\u8282\u70b9\uff0c\u652f\u6301\u901a\u8fc7 Manager \u63d0\u4f9b\u7edf\u4e00\u7684\u7ba1\u7406\uff0c\u4ee5\u7b80\u5316\u7528\u6237\u7684\u4f7f\u7528\u3002\n\u672c\u6587\u4ecb\u7ecd\u901a\u8fc7 Manager \u5982\u4f55\u6269\u5c55\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u8282\u70b9\uff0c\u5b9e\u73b0\u63d0\u4f9b\u670d\u52a1\u3002"),(0,r.kt)("h2",{id:"\u6269\u5c55-extract-node"},"\u6269\u5c55 Extract Node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9996\u5148\u9700\u8981\u5728 Sort \u7ec4\u4ef6\u5185\u652f\u6301\u8be5\u6570\u636e\u6e90\uff0c\u8be6\u60c5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.5.0/design_and_concept/how_to_extend_data_node_for_sort"},"Sort \u63d2\u4ef6")),(0,r.kt)("li",{parentName:"ul"},"\u5728\u679a\u4e3e\u7c7b",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.common.enums.TaskTypeEnum"),"\u4e2d\u589e\u52a0\u5bf9\u5e94\u7684\u679a\u4e3e"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5e38\u91cf\u7c7b",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.consts.SourceType"),"\u4e2d\u540c\u6837\u589e\u52a0\u5bf9\u5e94\u5e38\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.pojo.source"),"\u8def\u5f84\u4e0b\u521b\u5efa\u6587\u4ef6\u5939\uff0c\u521b\u5efa\u5bf9\u5e94\u5b9e\u4f53\u7c7b"),(0,r.kt)("li",{parentName:"ul"},"\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.service.source"),"\u8def\u5f84\u4e0b\uff0c\u521b\u5efa\u5bf9\u5e94\u5de5\u5177\u7c7b"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u6e90\u5230",(0,r.kt)("strong",{parentName:"li"},"ExtractNode"),"\u7684\u8f6c\u6362\u51fd\u6570\uff0c\u53c2\u8003 ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.pojo.sort.util.ExtractNodeUtils"))),(0,r.kt)("h2",{id:"\u6269\u5c55-load-node"},"\u6269\u5c55 Load Node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9996\u5148\u9700\u8981\u5728 Sort \u7ec4\u4ef6\u5185\u652f\u6301\u8be5\u6570\u636e\u6e90\uff0c\u8be6\u60c5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.5.0/design_and_concept/how_to_extend_data_node_for_sort"},"Sort \u63d2\u4ef6")),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5e38\u91cf\u7c7b",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.consts.SinkType"),"\u4e2d\u589e\u52a0\u5bf9\u5e94\u5e38\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.pojo.sink"),"\u8def\u5f84\u4e0b\u521b\u5efa\u6587\u4ef6\u5939, \u521b\u5efa\u5bf9\u5e94\u5b9e\u4f53\u7c7b"),(0,r.kt)("li",{parentName:"ul"},"\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.service.sink"),"\u8def\u5f84\u4e0b\u521b\u5efa\u5bf9\u5e94\u5de5\u5177\u7c7b"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u6e90\u5230",(0,r.kt)("strong",{parentName:"li"},"LoadNode"),"\u7684\u8f6c\u6362\u51fd\u6570\uff0c\u53c2\u8003\u4ee3\u7801 ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.pojo.sort.util.LoadNodeUtils"))))}m.isMDXComponent=!0}}]);