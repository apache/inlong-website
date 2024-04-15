"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[64472],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"ClickHouse",sidebar_position:5},i=void 0,c={unversionedId:"data_node/load_node/clickhouse",id:"version-1.1.0/data_node/load_node/clickhouse",title:"ClickHouse",description:"Overview",source:"@site/versioned_docs/version-1.1.0/data_node/load_node/clickhouse.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/clickhouse",permalink:"/docs/1.1.0/data_node/load_node/clickhouse",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/data_node/load_node/clickhouse.md",tags:[],version:"1.1.0",sidebarPosition:5,frontMatter:{title:"ClickHouse",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Kafka",permalink:"/docs/1.1.0/data_node/load_node/kafka"},next:{title:"Example",permalink:"/docs/1.1.0/sdk/dataproxy-sdk/example"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Configuration",id:"configuration",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/intro/"},"ClickHouse"),"  is a column-oriented database management system (DBMS) for online analytical processing of queries (OLAP)."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"When creating a data flow, select ",(0,o.kt)("inlineCode",{parentName:"p"},"ClickHouse"),' for the data stream direction, and click "Add" to configure it.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ClickHouse Configuration",src:n(5653).Z,width:"1484",height:"1153"})))}p.isMDXComponent=!0},5653:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/clickhouse-2681892cd085b810b8c1cc23a9534c49.png"}}]);