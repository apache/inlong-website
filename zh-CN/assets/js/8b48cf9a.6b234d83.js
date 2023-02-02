"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[38799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u5b89\u88c5\u90e8\u7f72"},l=void 0,i={unversionedId:"modules/dataproxy/quick_start",id:"version-0.12.0/modules/dataproxy/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 inlong-dataproxy \u76ee\u5f55\u4e0b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.12.0/modules/dataproxy/quick_start.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/quick_start",permalink:"/zh-CN/docs/0.12.0/modules/dataproxy/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.12.0/modules/dataproxy/quick_start.md",tags:[],version:"0.12.0",frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72"},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/0.12.0/modules/dataproxy/overview"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/0.12.0/modules/tubemq/overview"}},p={},u=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u6d88\u606f\u961f\u5217",id:"\u914d\u7f6e\u6d88\u606f\u961f\u5217",level:3},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:3},{value:"\u914d\u7f6eInLong-Manager \u5730\u5740",id:"\u914d\u7f6einlong-manager-\u5730\u5740",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u68c0\u67e5",id:"\u68c0\u67e5",level:2},{value:"\u5c06 DataProxy \u914d\u7f6e\u6dfb\u52a0\u5230 InLong-Manager",id:"\u5c06-dataproxy-\u914d\u7f6e\u6dfb\u52a0\u5230-inlong-manager",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-dataproxy")," \u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("h3",{id:"\u914d\u7f6e\u6d88\u606f\u961f\u5217"},"\u914d\u7f6e\u6d88\u606f\u961f\u5217"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528InLong TubeMQ, \u6309\u4ee5\u4e0b\u914d\u7f6e\u5373\u53ef\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"tubemq_master_list"),"\u662fTubeMQ master rpc\u5730\u5740\uff0c\u591a\u4e2a\u9017\u53f7\u5206\u9694\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sed -i 's/TUBE_LIST/tubemq_master_list/g' conf/flume.conf\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528Apache Pulsar, \u66ff\u6362",(0,a.kt)("inlineCode",{parentName:"li"},"conf/flume-mulit-pulsar-demo.conf"),"\u4e2d",(0,a.kt)("inlineCode",{parentName:"li"},"pulsar_server_url_list"),"\u5e76\u8986\u76d6",(0,a.kt)("inlineCode",{parentName:"li"},"conf/flume.conf"),"\u3002")),(0,a.kt)("p",null,"\u6ce8\u610fconf/flume.conf\u4e2dFLUME_HOME\u4e3aproxy\u7684\u4e2d\u95f4\u6570\u636e\u6587\u4ef6\u5b58\u653e\u5730\u5740"),(0,a.kt)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sh prepare_env.sh\n")),(0,a.kt)("h3",{id:"\u914d\u7f6einlong-manager-\u5730\u5740"},"\u914d\u7f6eInLong-Manager \u5730\u5740"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"conf/common.properties"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# manager web url \nmanager_hosts=ip:port \n")),(0,a.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sh bin/dataproxy-start.sh\n")),(0,a.kt)("h2",{id:"\u68c0\u67e5"},"\u68c0\u67e5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"telnet 127.0.0.1 46801\n")),(0,a.kt)("h2",{id:"\u5c06-dataproxy-\u914d\u7f6e\u6dfb\u52a0\u5230-inlong-manager"},"\u5c06 DataProxy \u914d\u7f6e\u6dfb\u52a0\u5230 InLong-Manager"),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c DataProxy \u540e\uff0c\u9700\u8981\u5c06 DataProxy \u6240\u5728\u4e3b\u673a\u7684 IP \u63d2\u5165\u5230 InLong-Manager \u7684\u540e\u53f0\u6570\u636e\u5e93\u4e2d\u3002"),(0,a.kt)("p",null,"InLong-Manager \u7684\u540e\u53f0\u6570\u636e\u5e93\u5730\u5740\uff0c\u8bf7\u53c2\u8003 InLong-Manager \u6a21\u5757\u7684\u90e8\u7f72\u6587\u6863\u3002"),(0,a.kt)("p",null,"\u63d2\u5165 SQL \u8bed\u53e5\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'-- name \u4e3a DataProxy \u7684\u540d\u79f0\uff0c\u53ef\u81ea\u5b9a\u4e49\n-- address \u4e3a DataProxy \u670d\u52a1\u6240\u5728\u4e3b\u673a\u7684 IP\n-- port \u4e3a DataProxy \u670d\u52a1\u6240\u5728\u7684\u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4\u662f 46801\ninsert into data_proxy_cluster (name, address, port, status, is_deleted, creator, create_time, modify_time)\nvalues ("data_proxy_name", "data_proxy_ip", 46801, 0, 0, "admin", now(), now());\n')))}c.isMDXComponent=!0}}]);