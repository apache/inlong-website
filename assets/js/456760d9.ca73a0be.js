"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[92156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const i={title:"Kubernetes",sidebar_position:3},a=void 0,o={unversionedId:"deployment/k8s",id:"version-1.0.0/deployment/k8s",title:"Kubernetes",description:"Prerequisites",source:"@site/versioned_docs/version-1.0.0/deployment/k8s.md",sourceDirName:"deployment",slug:"/deployment/k8s",permalink:"/docs/1.0.0/deployment/k8s",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.0.0/deployment/k8s.md",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{title:"Kubernetes",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/1.0.0/deployment/docker"},next:{title:"Bare Metal",permalink:"/docs/1.0.0/deployment/bare_metal"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install",id:"install",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Uninstall",id:"uninstall",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes 1.10+"),(0,l.kt)("li",{parentName:"ul"},"Helm 3.0+"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/tree/master/docker/kubernetes"},"InLong Helm Chart")),(0,l.kt)("li",{parentName:"ul"},"A dynamic provisioner for the PersistentVolumes(",(0,l.kt)("inlineCode",{parentName:"li"},"production environment"),")")),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace inlong\nhelm upgrade inlong --install -n inlong ./\n")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall inlong -n inlong\n")),(0,l.kt)("p",null,"You can delete all ",(0,l.kt)("inlineCode",{parentName:"p"},"PVC ")," if any persistent volume claims used, it will lose all data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete pvc -n inlong --all\n")))}u.isMDXComponent=!0}}]);