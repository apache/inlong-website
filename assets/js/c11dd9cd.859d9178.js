"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[96370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={title:"Auto Consumption",sidebar_position:1},i=void 0,s={unversionedId:"data_node/load_node/auto_consumption",id:"version-1.1.0/data_node/load_node/auto_consumption",title:"Auto Consumption",description:"Overview",source:"@site/versioned_docs/version-1.1.0/data_node/load_node/auto_consumption.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/auto_consumption",permalink:"/docs/1.1.0/data_node/load_node/auto_consumption",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/data_node/load_node/auto_consumption.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{title:"Auto Consumption",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MySQL",permalink:"/docs/1.1.0/data_node/extract_node/mysql"},next:{title:"Hive",permalink:"/docs/1.1.0/data_node/load_node/hive"}},c={},d=[{value:"Overview",id:"overview",level:2}],l={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Auto Consumption")," meanings receive data from Message Queue Services (TubeMQ or Pulsar) directly, you can consume the message from MQ\nby ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/2.8.3/client-libraries/"},"Pulsar SDK Client")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.0/modules/tubemq/clients_java"},"TubeMQ SDK Client"),",\nafter that, you have to ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.0/development/inlong_msg"},"Parse the InLongMsg")," to get raw data for forward processing."))}u.isMDXComponent=!0}}]);