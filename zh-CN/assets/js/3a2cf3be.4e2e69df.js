"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[97479],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=d(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},92391:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"Bare Metal \u90e8\u7f72",sidebar_position:4},o=void 0,i={unversionedId:"deployment/bare_metal",id:"version-1.4.0/deployment/bare_metal",title:"Bare Metal \u90e8\u7f72",description:"\u73af\u5883\u8981\u6c42",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/deployment/bare_metal.md",sourceDirName:"deployment",slug:"/deployment/bare_metal",permalink:"/zh-CN/docs/1.4.0/deployment/bare_metal",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.4.0/deployment/bare_metal.md",tags:[],version:"1.4.0",sidebarPosition:4,frontMatter:{title:"Bare Metal \u90e8\u7f72",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Kubernetes \u90e8\u7f72",permalink:"/zh-CN/docs/1.4.0/deployment/k8s"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.4.0/modules/agent/overview"}},p={},d=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u51c6\u5907\u6d88\u606f\u961f\u5217",id:"\u51c6\u5907\u6d88\u606f\u961f\u5217",level:2},{value:"\u4e0b\u8f7d\u5b89\u88c5\u5305",id:"\u4e0b\u8f7d\u5b89\u88c5\u5305",level:2},{value:"\u6807\u51c6\u67b6\u6784",id:"\u6807\u51c6\u67b6\u6784",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u521b\u5efa\u6570\u636e\u6d41",id:"\u521b\u5efa\u6570\u636e\u6d41",level:3},{value:"\u8f7b\u91cf\u5316\u67b6\u6784",id:"\u8f7b\u91cf\u5316\u67b6\u6784",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5-1",level:3}],u={toc:d};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MySQL 5.7+ or PostgreSQL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/"},"Apache Flink 1.13.5"))),(0,r.kt)("h2",{id:"\u51c6\u5907\u6d88\u606f\u961f\u5217"},"\u51c6\u5907\u6d88\u606f\u961f\u5217"),(0,r.kt)("p",null,"InLong \u5f53\u524d\u652f\u6301\u4ee5\u4e0b\u6d88\u606f\u961f\u5217\uff0c\u6839\u636e\u4f7f\u7528\u60c5\u51b5",(0,r.kt)("strong",{parentName:"p"},"\u9009\u62e9\u5176\u4e00"),"\u5373\u53ef\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.4.0/modules/tubemq/quick_start"},"InLong TubeMQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/2.8.1/standalone/"},"Apache Pulsar 2.8.x"))),(0,r.kt)("h2",{id:"\u4e0b\u8f7d\u5b89\u88c5\u5305"},"\u4e0b\u8f7d\u5b89\u88c5\u5305"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"\u4e0b\u8f7d\u9875\u9762")," \u83b7\u53d6\u4e8c\u8fdb\u5236\u5305\uff0c\u6216\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.4.0/quick_start/how_to_build"},"\u5982\u4f55\u7f16\u8bd1")," \u7f16\u8bd1\u9700\u8981\u7684\u7248\u672c\u3002"),(0,r.kt)("h2",{id:"\u6807\u51c6\u67b6\u6784"},"\u6807\u51c6\u67b6\u6784"),(0,r.kt)("p",null,"\u6807\u51c6\u67b6\u6784\u4e0b\uff0c\u4f60\u9700\u8981\u90e8\u7f72\u6240\u6709 InLong \u7ec4\u4ef6\u3002"),(0,r.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u987a\u5e8f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7b2c\u4e09\u65b9\u4f9d\u8d56"),(0,r.kt)("th",{parentName:"tr",align:null},"\u90e8\u7f72\u6307\u5f15"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-audit"),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL \u6216\u8005 Elasticsearch"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.4.0/modules/audit/quick_start"},"InLong Audit")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.4.0/modules/manager/quick_start"},"InLong Manager")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-dataproxy"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.4.0/modules/dataproxy/quick_start"},"InLong DataProxy")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-agent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.4.0/modules/agent/quick_start"},"InLong Agent")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"Nginx \u6216\u8005 Docker"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.4.0/modules/dashboard/quick_start"},"InLong Dashboard")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-sort-connectors"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache Flink"),(0,r.kt)("td",{parentName:"tr",align:null},"\u89e3\u538b ",(0,r.kt)("a",{parentName:"td",href:"https://inlong.apache.org/zh-CN/download/"},"apache-inlong-[version]-sort-connectors.tar.gz")," \u7136\u540e\u5c06 connectors jar \u653e\u5230 ",(0,r.kt)("inlineCode",{parentName:"td"},"inlong-sort/connectors")," \u76ee\u5f55\u3002"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"\u521b\u5efa\u6570\u636e\u6d41"},"\u521b\u5efa\u6570\u636e\u6d41"),(0,r.kt)("p",null,"InLong \u96c6\u7fa4\u90e8\u7f72\u6210\u529f\u540e\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.4.0/user_guide/dashboard_usage"},"Dashboard \u4f7f\u7528\u6307\u5f15"),"\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u6d41\u5f00\u59cb\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"\u8f7b\u91cf\u5316\u67b6\u6784"},"\u8f7b\u91cf\u5316\u67b6\u6784"),(0,r.kt)("h3",{id:"\u5b89\u88c5-1"},"\u5b89\u88c5"),(0,r.kt)("p",null,"\u8f7b\u91cf\u5316\u67b6\u6784\u53ea\u9700\u8981 InLong Sort \u7ec4\u4ef6, \u62e5\u6709\u7b80\u5355\u3001\u7075\u6d3b\uff0c\u9002\u5408\u5c0f\u89c4\u6a21\u6570\u636e\u7684\u7279\u70b9\u3002\u4f60\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.4.0/modules/sort/quick_start"},"\u90e8\u7f72\u6307\u5f15"),"\u8fdb\u884c\u5b89\u88c5\u548c\u4f7f\u7528"))}s.isMDXComponent=!0}}]);