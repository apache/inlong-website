"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[135],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>d});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,d=p["".concat(l,".").concat(m)]||p[m]||g[m]||o;return r?t.createElement(d,i(i({ref:n},c),{},{components:r})):t.createElement(d,i({ref:n},c))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76082:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=r(58168),a=(r(96540),r(15680));const o={title:"SDK Usage Example",sidebar_position:1},i="Prerequisites",s={unversionedId:"quick_start/transform/sdk_example",id:"version-2.1.0/quick_start/transform/sdk_example",title:"SDK Usage Example",description:"- JDK 1.8 or above",source:"@site/versioned_docs/version-2.1.0/quick_start/transform/sdk_example.md",sourceDirName:"quick_start/transform",slug:"/quick_start/transform/sdk_example",permalink:"/docs/quick_start/transform/sdk_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.1.0/quick_start/transform/sdk_example.md",tags:[],version:"2.1.0",sidebarPosition:1,frontMatter:{title:"SDK Usage Example",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"HTTP Report Example",permalink:"/docs/quick_start/data_http_report/http_report"},next:{title:"Clickhouse",permalink:"/docs/quick_start/data_subscription/clickhouse_example"}},l={},u=[{value:"Transform Requirements",id:"transform-requirements",level:2},{value:"Transform SDK Implementation",id:"transform-sdk-implementation",level:2},{value:"Configure Source Data Configuration",id:"configure-source-data-configuration",level:3},{value:"Configure Result Data Configuration",id:"configure-result-data-configuration",level:3},{value:"Execute Transformation Logic",id:"execute-transformation-logic",level:3},{value:"Build SDK Object and Execute Transformation",id:"build-sdk-object-and-execute-transformation",level:3}],c={toc:u},p="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(p,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"JDK 1.8 or above"),(0,a.yg)("li",{parentName:"ul"},"Maven 2.5 or above")),(0,a.yg)("h1",{id:"installing-sdk-dependencies"},"Installing SDK Dependencies"),(0,a.yg)("p",null,"You need to include the SDK library in your project to use the SDK. The library can be obtained in the following two ways:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Obtain the source code, compile it yourself, and deploy the SDK package to the local repository. See ",(0,a.yg)("a",{parentName:"li",href:"https://inlong.apache.org/docs/next/quick_start/how_to_build/"},"How to Compile")," for details."),(0,a.yg)("li",{parentName:"ul"},"Directly reference the existing library in the Apache repository.\nxml")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>transform-sdk</artifactId>\n    <version>1.13.0</version>\n</dependency>\n")),(0,a.yg)("h1",{id:"specific-examples"},"Specific Examples"),(0,a.yg)("h2",{id:"transform-requirements"},"Transform Requirements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Filter out the video playback start data in the Shenzhen region, the original fields include:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"event_time"),(0,a.yg)("li",{parentName:"ul"},"zone, optional values: ","[ shenzhen, shanghai, beijing ]"),(0,a.yg)("li",{parentName:"ul"},"video_id"),(0,a.yg)("li",{parentName:"ul"},"username"),(0,a.yg)("li",{parentName:"ul"},"operation_type, optional values ","[ start, end ]"))),(0,a.yg)("li",{parentName:"ul"},"Original test data, CSV format, vertical bar delimited.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"2024-05-09 20:00:01|shenzhen|1111|zhangsan|start\n2024-05-09 20:00:02|shanghai|1111|lisi|start\n2024-05-09 20:00:03|shanghai|1111|lisi|end\n2024-05-09 20:00:04|shenzhen|1111|zhangsan|end\n2024-05-09 20:00:05|beijing|1111|zhangsan|start\n2024-05-09 20:00:06|beijing|1111|zhangsan|end\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Expected result data, KV format")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"event_time=2024-05-09 20:00:02&zone=shanghai&video_id=1111&username=lisi&operation_type=start\n")),(0,a.yg)("h2",{id:"transform-sdk-implementation"},"Transform SDK Implementation"),(0,a.yg)("h3",{id:"configure-source-data-configuration"},"Configure Source Data Configuration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'// source\nSourceInfo csvSource = new CsvSourceInfo("UTF-8", "|", "\\\\", null);\n')),(0,a.yg)("h3",{id:"configure-result-data-configuration"},"Configure Result Data Configuration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'// sink\nSinkInfo kvSink = new KvSinkInfo("UTF-8", null);\n')),(0,a.yg)("h3",{id:"execute-transformation-logic"},"Execute Transformation Logic"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"String transformSql = \"select $1 event_time,$2 zone,$3 video_id,$4 username,$5 operation_type from source where $2='shenzhen' and $5='start' \";\nTransformConfig config = new TransformConfig(csvSource, kvSink, transformSql);\n")),(0,a.yg)("h3",{id:"build-sdk-object-and-execute-transformation"},"Build SDK Object and Execute Transformation"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'TransformProcessor processor = new TransformProcessor(config);\n\nString srcString = "2024-05-09 20:00:01|shenzhen|1111|zhangsan|start\\n"\n  + "2024-05-09 20:00:02|shanghai|1111|lisi|start\\n"\n  + "2024-05-09 20:00:03|shanghai|1111|lisi|end\\n"\n  + "2024-05-09 20:00:04|shenzhen|1111|zhangsan|end\\n"\n  + "2024-05-09 20:00:05|beijing|1111|zhangsan|start\\n"\n  + "2024-05-09 20:00:06|beijing|1111|zhangsan|end";\n\nList<String> outputs = processor.transform("2024-04-28 00:00:00|ok", new HashMap<>());\n\n// Expected outcome\uff1a[event_time=2024-05-09 20:00:02&zone=shanghai&video_id=1111&username=lisi&operation_type=start]\nSystem.out.println(outputs);\n')),(0,a.yg)("h1",{id:"more-transform-examples"},"More Transform Examples"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"For more examples, please see ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/transform-sdk/src/test/java/org/apache/inlong/sdk/transform/process"},"More Examples"),".")))}g.isMDXComponent=!0}}]);