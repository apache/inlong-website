"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[24956],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>m});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(t),g=o,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||i;return t?a.createElement(m,r(r({ref:n},l),{},{components:t})):a.createElement(m,r({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=g;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d[u]="string"==typeof e?e:o,r[1]=d;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},48437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=t(58168),o=(t(96540),t(15680));const i={title:"Node Management",sidebar_position:4},r=void 0,d={unversionedId:"administration/node_management",id:"version-2.0.0/administration/node_management",title:"Node Management",description:"Overview",source:"@site/versioned_docs/version-2.0.0/administration/node_management.md",sourceDirName:"administration",slug:"/administration/node_management",permalink:"/docs/2.0.0/administration/node_management",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/administration/node_management.md",tags:[],version:"2.0.0",sidebarPosition:4,frontMatter:{title:"Node Management",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Tenant Management",permalink:"/docs/2.0.0/administration/multiple_tenant"},next:{title:"Cluster Management",permalink:"/docs/2.0.0/administration/cluster_management"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Create data node",id:"create-data-node",level:3},{value:"Delete data node",id:"delete-data-node",level:3},{value:"Update data node",id:"update-data-node",level:3},{value:"Test connection",id:"test-connection",level:3},{value:"Use data node",id:"use-data-node",level:3}],l={toc:c},u="wrapper";function p(e){let{components:n,...i}=e;return(0,o.yg)(u,(0,a.A)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"overview"},"Overview"),(0,o.yg)("p",null,"In Long, a data node represents a set of server address configurations, which can serve as both the source end for data collection and the storage end for data subscription. For example, when using a MySQL node, the registered information includes the MySQL address, username, and password. During data collection or subscription, this node information can be used to indicate that data collection or storage operations are performed from this MySQL server."),(0,o.yg)("p",null,"Node management provides users with the ability to reuse data node information, allowing users to create, modify, and delete data nodes, and reuse configured data node information during data access:"),(0,o.yg)("h3",{id:"create-data-node"},"Create data node"),(0,o.yg)("p",null,"Users can create data node to generate a commonly used node information:"),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(46722).A,width:"3760",height:"1852"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"name\uff1a A user-defined name to identify this node information."),(0,o.yg)("li",{parentName:"ul"},"type\uff1aThe type of the node."),(0,o.yg)("li",{parentName:"ul"},"owners\uff1aThe person responsible for this node, only the person in charge can modify the configuration information of this node."),(0,o.yg)("li",{parentName:"ul"},"description\uff1aNode description information.")),(0,o.yg)("p",null,"The above are the common configurations of the node. In addition, according to different node types, there will be different configuration information. For example, ClickHouse nodes need to fill in the username, password, and ClickHouse address information."),(0,o.yg)("h3",{id:"delete-data-node"},"Delete data node"),(0,o.yg)("p",null,"Users can delete data node. After delete, this node will stop being used:"),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(1093).A,width:"3814",height:"1844"})),(0,o.yg)("h3",{id:"update-data-node"},"Update data node"),(0,o.yg)("p",null,"Users can update node information. Click ","[Edit]",", enter the new node information, and after confirmation, this node configuration will take effect:"),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(18275).A,width:"3776",height:"1834"})),(0,o.yg)("h3",{id:"test-connection"},"Test connection"),(0,o.yg)("p",null,"Users can use the test connection to verify whether the node status is normal:"),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(73294).A,width:"3804",height:"1812"})),(0,o.yg)("h3",{id:"use-data-node"},"Use data node"),(0,o.yg)("p",null,"After configuring the node, users can use the configured node information in data subscription:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"select \u3010Ingestion\u3011\uff0cand click \u3010Detail\u3011\n",(0,o.yg)("img",{alt:"img.png",src:t(42925).A,width:"3790",height:"1858"})),(0,o.yg)("li",{parentName:"ul"},"When selecting a data target, choose \u3010Create\u3011, select a configured data node, complete other configurations, and then click Save.\n",(0,o.yg)("img",{alt:"img.png",src:t(61302).A,width:"3770",height:"1838"}),"\nAt this point, the node usage process is complete.")))}p.isMDXComponent=!0},46722:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/create_node-2cef8f6dd86c27bebe030690406e188a.png"},1093:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/delete_node-be5759c3df7456e141ae5e1bc1fbb5b8.png"},73294:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/test_connection-330ce9f747faa096183bed7e5afd28f7.png"},18275:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/update_node-1db0220fa575700f32adbe337a1df466.png"},42925:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/use_node_1-5194eb984385d44ea9cf325e71404abd.png"},61302:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/use_node_2-2bfc344c0cca9f603aa5f7450ff076e8.png"}}]);