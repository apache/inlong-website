"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[46691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=l(n),g=r,m=s["".concat(p,".").concat(g)]||s[g]||u[g]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[s]="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},52346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Manager Plugin",sidebar_position:6},i=void 0,d={unversionedId:"design_and_concept/how_to_extend_data_node_for_manager",id:"design_and_concept/how_to_extend_data_node_for_manager",title:"Manager Plugin",description:"Overview",source:"@site/docs/design_and_concept/how_to_extend_data_node_for_manager.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_extend_data_node_for_manager",permalink:"/docs/next/design_and_concept/how_to_extend_data_node_for_manager",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/design_and_concept/how_to_extend_data_node_for_manager.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Manager Plugin",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Dashboard Plugin",permalink:"/docs/next/design_and_concept/how_to_write_plugin_dashboard"},next:{title:"DataProxy Plugin",permalink:"/docs/next/design_and_concept/how_to_write_plugin_dataproxy"}},p={},l=[{value:"Overview",id:"overview",level:2},{value:"Extend Extract Node",id:"extend-extract-node",level:2},{value:"Extend Load Node",id:"extend-load-node",level:2}],c={toc:l},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Inlong is aimed at create dataflow between different data sources, now Inlong has support several universal data sources such as ",(0,r.kt)("strong",{parentName:"p"},"MySQL"),", ",(0,r.kt)("strong",{parentName:"p"},"Apache Kafka"),", ",(0,r.kt)("strong",{parentName:"p"},"ClickHouse")," on Input/Output respectively,\nYou can refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/data_node/extract_node/overview"},"Data Node")," for specific information. Each Data Node of InLong supports unified management through Manager to simplify the use of users.\nThis article describes how to extend a new data node through the Manager to provide services."),(0,r.kt)("h2",{id:"extend-extract-node"},"Extend Extract Node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Develop extract node plugin in sort, refer to ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/design_and_concept/how_to_extend_data_node_for_sort"},"Sort Plugin")),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("strong",{parentName:"li"},"TaskType")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.common.enums.TaskTypeEnum")),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("strong",{parentName:"li"},"SourceType")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.consts.SourceType")),(0,r.kt)("li",{parentName:"ul"},"Create new package under package path: ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.pojo.source"),", develop every entity class needed."),(0,r.kt)("li",{parentName:"ul"},"Create Operation class for new data source under package path: ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.service.source"),"."),(0,r.kt)("li",{parentName:"ul"},"Transfer data source to ",(0,r.kt)("strong",{parentName:"li"},"ExtractNode")," supported in ",(0,r.kt)("strong",{parentName:"li"},"Sort"),", create the implementation class Provider for the ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.pojo.sort.node.provider.ExtractNodeProvider")," interface under the ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.pojo.sort.node.provider")," path, and register it with the ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.pojo.sort.node.ExtractNodeProviderFactory"))),(0,r.kt)("h2",{id:"extend-load-node"},"Extend Load Node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Develop load node plugin in sort, refer to ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/design_and_concept/how_to_extend_data_node_for_sort"},"Sort Plugin")),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("strong",{parentName:"li"},"SinkType")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.consts.SinkType")),(0,r.kt)("li",{parentName:"ul"},"Create new package under package path: ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.pojo.sink"),", develop every entity class needed."),(0,r.kt)("li",{parentName:"ul"},"Create Operation class for new data source under package path: ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.service.sink"),"."),(0,r.kt)("li",{parentName:"ul"},"Transfer data sink to ",(0,r.kt)("strong",{parentName:"li"},"LoadNode")," supported in ",(0,r.kt)("strong",{parentName:"li"},"Sort"),", create the implementation class Provider for the ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.pojo.sort.node.provider.LoadNodeProvider")," interface under the ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.pojo.sort.node.provider")," path, and register it with the ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.pojo.sort.node.LoadNodeProviderFactory"))))}u.isMDXComponent=!0}}]);