"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7989],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),c=d(n),p=i,u=c["".concat(s,".").concat(p)]||c[p]||m[p]||l;return n?a.createElement(u,o(o({ref:t},g),{},{components:n})):a.createElement(u,o({ref:t},g))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(58168),i=(n(96540),n(15680));const l={title:"Agent management",sidebar_position:1},o=void 0,r={unversionedId:"administration/cluster_management/agent_management",id:"administration/cluster_management/agent_management",title:"Agent management",description:"Overview",source:"@site/docs/administration/cluster_management/agent_management.md",sourceDirName:"administration/cluster_management",slug:"/administration/cluster_management/agent_management",permalink:"/docs/next/administration/cluster_management/agent_management",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/administration/cluster_management/agent_management.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Agent management",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Agent Plugin",permalink:"/docs/next/development/inlong_plugins_extension/agent"},next:{title:"User Management",permalink:"/docs/next/administration/user_management"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Installation package management",id:"installation-package-management",level:2},{value:"Add",id:"add",level:3},{value:"Modify and Delete",id:"modify-and-delete",level:3},{value:"Installer",id:"installer",level:3},{value:"Version Management",id:"version-management",level:2},{value:"Add",id:"add-1",level:3},{value:"Modify and Delete",id:"modify-and-delete-1",level:3},{value:"Agent Installation",id:"agent-installation",level:2},{value:"Modify and Delete",id:"modify-and-delete-2",level:2},{value:"Batch Update",id:"batch-update",level:2}],g={toc:d},c="wrapper";function m(e){let{components:t,...l}=e;return(0,i.yg)(c,(0,a.A)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"The platform has implemented interface based management capabilities for agents, supporting installation package management, version management, installation operations, uninstallation operations, upgrade operations, restart operations, and batch operations."),(0,i.yg)("h2",{id:"installation-package-management"},"Installation package management"),(0,i.yg)("p",null,"Installation package management mainly involves managing the name, address, and MD5 of installation packages."),(0,i.yg)("h3",{id:"add"},"Add"),(0,i.yg)("p",null,'As shown in the figure, click "Create Package" in "Operation-Package" to create a new installation package:\n',(0,i.yg)("img",{src:n(16435).A,width:"2489",height:"563"}),"\nFile Name: Agent Installation Package Name"),(0,i.yg)("p",null,"Download Url: The download url for the installation package. We download the installation package through wget."),(0,i.yg)("p",null,"MD5: The MD5 value of the installation package file, used to verify whether the installation package is damaged after downloading."),(0,i.yg)("p",null,"Storage Path: The storage path after the installation package is downloaded."),(0,i.yg)("h3",{id:"modify-and-delete"},"Modify and Delete"),(0,i.yg)("p",null,"Click on \"Details\" to modify the Agent; Click 'Delete' to delete the installation package.\n",(0,i.yg)("img",{src:n(50009).A,width:"2225",height:"432"})),(0,i.yg)("h3",{id:"installer"},"Installer"),(0,i.yg)("p",null,"The Installer is the daemon process of the Agent, and in fact, we install both the Installer and Agent processes on the business machine. The installation package, version management, and agent of the Installer are the same."),(0,i.yg)("h2",{id:"version-management"},"Version Management"),(0,i.yg)("p",null,"Version management is based on installation package management, mainly managing the installation, inspection, start, and stop commands required for this installation package."),(0,i.yg)("h3",{id:"add-1"},"Add"),(0,i.yg)("p",null,'As shown in the figure, click "Create Module" in "Operations-Version Management" to create a new version:\n',(0,i.yg)("img",{src:n(4703).A,width:"2474",height:"766"}),"\nName: Version name."),(0,i.yg)("p",null,"Version: Version number, which must follow the X.X.X three part specification and can only be a number."),(0,i.yg)("p",null,"Installation package: Select the installation package corresponding to this version."),(0,i.yg)("p",null,"Check Command: A command used to detect the existence of a process."),(0,i.yg)("p",null,"Start command: Used to start the process."),(0,i.yg)("p",null,"Stop command: Used to stop the process."),(0,i.yg)("p",null,"Uninstall command: Used to uninstall the agent."),(0,i.yg)("h3",{id:"modify-and-delete-1"},"Modify and Delete"),(0,i.yg)("p",null,"Click on 'Details' to modify the version; Click 'Delete' to delete the version.\n",(0,i.yg)("img",{src:n(86773).A,width:"2469",height:"743"})),(0,i.yg)("h2",{id:"agent-installation"},"Agent Installation"),(0,i.yg)("p",null,'After finding the Agent cluster in the cluster management as shown in the figure, select "Create":\n',(0,i.yg)("img",{src:n(1497).A,width:"2477",height:"661"}),"\nIP: The IP of the machine where the agent is to be installed."),(0,i.yg)("p",null,"Protocol Type: Identify the protocol type used by the Agent and Manager for interaction. If they are on the same local area network, we choose HTTP; If cross public network transmission is required, choose HTTPS."),(0,i.yg)("p",null,"Version: Select the version of the Agent."),(0,i.yg)("p",null,"Installation: If you want the platform to install automatically, please choose SSH installation, and usually install through SSH password."),(0,i.yg)("p",null,"SSH Username: SSH login username"),(0,i.yg)("p",null,"SSH Password: SSH login password"),(0,i.yg)("p",null,"SSH Port: SSH port number"),(0,i.yg)("p",null,"After completing the form, you can click the \"Test Connection\" button to test whether the SSH login was successful.\nAfter clicking the 'Save' button, automatic installation will begin."),(0,i.yg)("h2",{id:"modify-and-delete-2"},"Modify and Delete"),(0,i.yg)("p",null,"Click 'Edit' to modify the Agent node; Click 'Delete' to delete the Agent node.\n",(0,i.yg)("img",{src:n(35176).A,width:"2191",height:"529"})),(0,i.yg)("h2",{id:"batch-update"},"Batch Update"),(0,i.yg)("p",null,'As shown in the figure, we can select multiple Agent nodes and click the "Batch Update" button to perform batch operations.\n',(0,i.yg)("img",{src:n(40480).A,width:"2472",height:"640"}),"\nBatch Num: We can perform batch operations, which are divided into batches."),(0,i.yg)("p",null,"Interval: The time interval between each batch."),(0,i.yg)("p",null,"Operation type: The operation to be performed on this batch of nodes,"),(0,i.yg)("p",null,"Version: Agent version."),(0,i.yg)("p",null,"Installer: Installer version."))}m.isMDXComponent=!0},40480:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_batch-92982073a45f8462e091a1198bf6323e.png"},1497:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_install-5726d6b74fa3681836fbfea613759042.png"},35176:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_modify_delete-00bba8b4a6a5c286f6d8f3e6293da971.png"},50009:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_package_modify_delete-32ae3e3e9d7df4818dd3947f1cae112a.png"},16435:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_package_new-d9809cf970b216aa8c9f6ce9211098db.png"},86773:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_version_modify_delete-6d2d01f5d46a93f7f450d7f5da555cc8.png"},4703:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_version_new-7507b8bbc0a3383e2cd2a97b441860fe.png"}}]);