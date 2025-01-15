"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[81244],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={title:"Cluster Management",sidebar_position:5},o=void 0,s={unversionedId:"administration/cluster_management",id:"version-2.0.0/administration/cluster_management",title:"Cluster Management",description:"Only system administrators or tenant administrators have permission to use this feature, and they can create, modify, and delete clusters.",source:"@site/versioned_docs/version-2.0.0/administration/cluster_management.md",sourceDirName:"administration",slug:"/administration/cluster_management",permalink:"/docs/2.0.0/administration/cluster_management",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/administration/cluster_management.md",tags:[],version:"2.0.0",sidebarPosition:5,frontMatter:{title:"Cluster Management",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Node Management",permalink:"/docs/2.0.0/administration/node_management"},next:{title:"Tag Management",permalink:"/docs/2.0.0/administration/tag_management"}},l={},c=[{value:"Create cluster",id:"create-cluster",level:3},{value:"Delete cluster",id:"delete-cluster",level:3},{value:"Update cluster",id:"update-cluster",level:3}],u={toc:c},d="wrapper";function m(e){let{components:t,...i}=e;return(0,a.yg)(d,(0,r.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Only system administrators or tenant administrators have permission to use this feature, and they can create, modify, and delete clusters."),(0,a.yg)("h3",{id:"create-cluster"},"Create cluster"),(0,a.yg)("p",null,"Users with system administrator or tenant administrator permissions can create new clusters. When creating, you need to fill in the following information:"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(36402).A,width:"3806",height:"1846"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Cluster Name\uff1aA user-defined name used to identify the cluster."),(0,a.yg)("li",{parentName:"ul"},"Type\uff1aCluster type."),(0,a.yg)("li",{parentName:"ul"},"Cluster Tag\uff1aThe cluster belongs to the cluster tag"),(0,a.yg)("li",{parentName:"ul"},"Owners\uff1aSpecify the person responsible for the cluster, who is the only one able to modify the cluster's configuration information."),(0,a.yg)("li",{parentName:"ul"},"Description\uff1aProvide a brief description of the cluster.")),(0,a.yg)("p",null,"The above are the basic configuration information for the cluster. Depending on the type of cluster, additional configuration information may be required. For example, for a Pulsar cluster, you may need to fill in the Service URL, AdminURL, default tenant, and token."),(0,a.yg)("h3",{id:"delete-cluster"},"Delete cluster"),(0,a.yg)("p",null,"System administrators or tenant administrators have the right to delete created clusters. Once deleted, the cluster will no longer be available:"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(7891).A,width:"3788",height:"1824"})),(0,a.yg)("h3",{id:"update-cluster"},"Update cluster"),(0,a.yg)("p",null,"System administrators or tenant administrators can modify created clusters. When modifying, you can change the basic configuration information of the cluster as well as any additional configuration information required based on the cluster type:"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(96449).A,width:"3826",height:"1828"})))}m.isMDXComponent=!0},36402:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/create_cluster-d50c76cf82c0dfddc70782ff52cdfd2d.png"},7891:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/delete_cluster-a7cdb2259fcdb14fe45ba6ae65b72f5b.png"},96449:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/update_cluster-22ae85eb07de77f6d2c51b89c4a11e8c.png"}}]);