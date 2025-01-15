"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[29021],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const o={title:"File",sidebar_position:3},i=void 0,l={unversionedId:"data_node/extract_node/file",id:"version-2.0.0/data_node/extract_node/file",title:"File",description:"Parameters",source:"@site/versioned_docs/version-2.0.0/data_node/extract_node/file.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/file",permalink:"/docs/2.0.0/data_node/extract_node/file",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/data_node/extract_node/file.md",tags:[],version:"2.0.0",sidebarPosition:3,frontMatter:{title:"File",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Auto Push",permalink:"/docs/2.0.0/data_node/extract_node/auto_push"},next:{title:"Kafka",permalink:"/docs/2.0.0/data_node/extract_node/kafka"}},d={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Path Configuration",id:"path-configuration",level:2},{value:"Data Time",id:"data-time",level:2}],c={toc:s},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.yg)(p,(0,a.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"parameters"},"Parameters"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"File Params",src:n(43095).A,width:"1316",height:"822"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"DataSource Name"),(0,r.yg)("li",{parentName:"ul"},"Data source IP: Collect Node Agent IP."),(0,r.yg)("li",{parentName:"ul"},"File path: Must be an absolute path and support regular expressions."),(0,r.yg)("li",{parentName:"ul"},"Time offset: The file will be collected from a certain time,' 1m' means 1 minute later,' -1m' means 1 minute before, and m(minute), h(hour), d(day) are supported. If it is empty, the file will be collected from the current time."),(0,r.yg)("li",{parentName:"ul"},"Source data fileDelimiter: Vertical line(|), Comma(,), Semicolon(;)..."),(0,r.yg)("li",{parentName:"ul"},"Source data field: Delimited fields")),(0,r.yg)("h2",{id:"path-configuration"},"Path Configuration"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'/data/inlong-agent/test.log //Represents reading the new file test.log in the inlong-agent folder\n/data/inlong-agent/test[0-9]{1} // means to read the new file test in the inlong-agent folder followed by a number at the end\n/data/inlong-agent/test //If test is a directory, it means to read all new files under test\n/data/inlong-agent/^\\\\d+(\\\\.\\\\d+)? // Start with one or more digits, followed by. or end with one. or more digits (? stands for optional, can match Examples: "5", "1.5" and "2.21"\n')),(0,r.yg)("h2",{id:"data-time"},"Data Time"),(0,r.yg)("p",null,"Agent supports obtaining the time from the file name as the production time of the data. The configuration instructions are as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"/data/inlong-agent/***YYYYMMDDHH***\n")),(0,r.yg)("p",null,"Where YYYYDDMMHH represents the data time, YYYY represents the year, MM represents the month, DD represents the day, and HH represents the hour\nWhere *** is any character"),(0,r.yg)("p",null,"At the same time, you need to add the current data cycle to the job conf, the current support day cycle and hour cycle,\nWhen adding a task, add the property job.cycleUnit. job.cycleUnit contains the following two types:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"D: Represents the data time and day dimension"),(0,r.yg)("li",{parentName:"ul"},"H: Represents the data time and hour dimension")),(0,r.yg)("p",null,"E.g:\nThe configuration data source is"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"/data/inlong-agent/2021020211.log\n")),(0,r.yg)("p",null,"Write data to 2021020211.log\nConfigure job.cycleUnit as D\nThen the agent will try the 202020211.log file at the time of 202020211. When reading the data in the file, it will write all the data to the backend proxy at the time of 20210202.\nIf job.cycleUnit is configured as H\nWhen collecting data in the 2021020211.log file, all data will be written to the backend proxy at the time of 2021020211\u3002"))}u.isMDXComponent=!0},43095:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/file_param-f4666b8501cc07054ea00d110eab5c04.png"}}]);