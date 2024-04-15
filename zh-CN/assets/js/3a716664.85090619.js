"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[48872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),k=o,m=d["".concat(i,".").concat(k)]||d[k]||u[k]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},64891:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Docker \u90e8\u7f72",sidebar_position:2},l=void 0,p={unversionedId:"deployment/docker",id:"version-1.2.0/deployment/docker",title:"Docker \u90e8\u7f72",description:"\u901a\u8fc7 Docker Compose \u90e8\u7f72 InLong\uff0c\u8fd9\u79cd\u90e8\u7f72\u65b9\u5f0f\u53ea\u9002\u7528\u4e8e\u5f00\u53d1\u4e0e\u8c03\u8bd5\uff0c\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/zh-CN/docs/1.2.0/deployment/docker",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/deployment/docker.md",tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{title:"Docker \u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5355\u673a\u90e8\u7f72",permalink:"/zh-CN/docs/1.2.0/deployment/standalone"},next:{title:"Kubernetes \u90e8\u7f72",permalink:"/zh-CN/docs/1.2.0/deployment/k8s"}},i={},c=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u6ce8\u518c\u96c6\u7fa4",id:"\u6ce8\u518c\u96c6\u7fa4",level:2},{value:"DataProxy \u96c6\u7fa4",id:"dataproxy-\u96c6\u7fa4",level:3},{value:"Pulsar \u96c6\u7fa4",id:"pulsar-\u96c6\u7fa4",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u9500\u6bc1",id:"\u9500\u6bc1",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u901a\u8fc7 Docker Compose \u90e8\u7f72 InLong\uff0c\u8fd9\u79cd\u90e8\u7f72\u65b9\u5f0f\u53ea\u9002\u7528\u4e8e\u5f00\u53d1\u4e0e\u8c03\u8bd5\uff0c\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1aDocker \u90e8\u7f72\u9ed8\u8ba4\u4f7f\u7528 Apache Pulsar \u4f5c\u4e3a\u6d88\u606f\u961f\u5217\u670d\u52a1\u3002")),(0,o.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,o.kt)("li",{parentName:"ul"},"Docker Compose 1.29.2+")),(0,o.kt)("h2",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,o.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2.0/quick_start/how_to_build"},"\u5982\u4f55\u7f16\u8bd1"),"."),(0,o.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,o.kt)("p",null,"\u542f\u52a8\u6240\u6709\u7ec4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd docker/docker-compose\ndocker-compose up -d\n")),(0,o.kt)("h2",{id:"\u6ce8\u518c\u96c6\u7fa4"},"\u6ce8\u518c\u96c6\u7fa4"),(0,o.kt)("h3",{id:"dataproxy-\u96c6\u7fa4"},"DataProxy \u96c6\u7fa4"),(0,o.kt)("p",null,"\u6253\u5f00 Inlong-Dashboard \u9875\u9762\uff08\u9ed8\u8ba4\u662f ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1"},"http://127.0.0.1"),"\uff09\uff0c\u5728 ","[\u96c6\u7fa4\u7ba1\u7406]"," \u9875\u7b7e\u4e2d\u9009\u62e9\u6dfb\u52a0 DataProxy \u96c6\u7fa4\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(11876).Z,width:"840",height:"409"})),(0,o.kt)("p",null,"\u70b9\u51fb ","[\u65b0\u5efa\u96c6\u7fa4]"," \u6309\u94ae\uff0c\u5728\u5f39\u51fa\u7684\u6846\u4e2d\u586b\u5199 \u96c6\u7fa4\u540d\u79f0\u3001\u96c6\u7fa4\u6807\u7b7e\u3001\u8d23\u4efb\u4eba \u5373\u53ef\u4fdd\u5b58\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8bf4\u660e\uff1a","[\u96c6\u7fa4\u6807\u7b7e]"," \u662f\u4e00\u4e2a\u903b\u8f91\u6982\u5ff5\uff0c\u540c\u540d\u7684\u6807\u7b7e\u5c06\u88ab\u89c6\u4e3a\u540c\u4e00\u5957\u96c6\u7fa4\uff0c\u6bd4\u5982\u76f8\u540c\u96c6\u7fa4\u6807\u7b7e\u7684 DataProxy \u96c6\u7fa4\u548c Pulsar \u96c6\u7fa4\uff0c\u5c5e\u4e8e\u540c\u4e00\u5957\u96c6\u7fa4\u3002")),(0,o.kt)("p",null,"\u7136\u540e\u4e3a\u6b64 DataProxy \u96c6\u7fa4\u6dfb\u52a0\u8282\u70b9 \u2014\u2014 \u4e00\u4e2a DataProxy \u96c6\u7fa4\u53ef\u4ee5\u652f\u6301\u6dfb\u52a0\u591a\u4e2a\u8282\u70b9\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(69900).Z,width:"841",height:"400"})),(0,o.kt)("p",null,"\u586b\u5199 DataProxy \u8282\u70b9\u7684 IP \u548c\u7aef\u53e3\u5373\u53ef\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(87886).Z,width:"1560",height:"418"})),(0,o.kt)("h3",{id:"pulsar-\u96c6\u7fa4"},"Pulsar \u96c6\u7fa4"),(0,o.kt)("p",null,"\u4e0e\u4e0a\u8ff0 DataProxy \u96c6\u7fa4\u7684\u6dfb\u52a0\u5165\u53e3\u76f8\u4f3c\uff0c\u586b\u5199\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(57175).Z,width:"527",height:"574"})),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,"\u5f53\u6240\u6709\u5bb9\u5668\u90fd\u6210\u529f\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost"),"\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u8d26\u53f7\u767b\u5f55:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,o.kt)("h2",{id:"\u9500\u6bc1"},"\u9500\u6bc1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose down\n")))}u.isMDXComponent=!0},11876:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dp_cluster_cn-520b6e359e1818d9e71f159a74902aa2.png"},69900:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dp_cluster_node_cn-8b911466b0e7d45be82d085e17c8cbeb.png"},87886:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dp_cluster_node_save_cn-be35993fc125892e108c5c8a564677e4.png"},57175:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pulsar_cluster_save_cn-d539dab2486e13fdf46fd0780371a098.png"}}]);