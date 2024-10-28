"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[51729],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(t),m=o,d=g["".concat(c,".").concat(m)]||g[m]||s[m]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60752:(e,n,t)=>{t.d(n,{l:()=>r});const r={inLongVersion:"2.1.0-SNAPSHOT"}},76334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(58168),o=(t(96540),t(15680)),a=t(60752);const i={title:"Custom Authentication",sidebar_position:1},l=void 0,c={unversionedId:"development/extension_manager/inlong_manager_shiro_plugin",id:"development/extension_manager/inlong_manager_shiro_plugin",title:"Custom Authentication",description:"Overview",source:"@site/docs/development/extension_manager/inlong_manager_shiro_plugin.md",sourceDirName:"development/extension_manager",slug:"/development/extension_manager/inlong_manager_shiro_plugin",permalink:"/docs/next/development/extension_manager/inlong_manager_shiro_plugin",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/development/extension_manager/inlong_manager_shiro_plugin.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Custom Authentication",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DataProxy Plugin Extension",permalink:"/docs/next/development/extention_dataproxy/how_to_write_plugin_dataproxy"},next:{title:"Manager Custom Plugin",permalink:"/docs/next/development/extension_manager/inlong_manager_plugin"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Dependency",id:"dependency",level:2},{value:"Code",id:"code",level:2}],g={toc:p},s="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(s,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"overview"},"Overview"),(0,o.yg)("p",null,"The Apache Shiro framework is used in the inlong manager to realize the functions of authentication and authorization. The manager has integrated the default implementation logic. If you want to realize the custom Shiro based authentication and authorization function in the inlong manager, you can carry out the plug-in development of relevant functions according to the following instructions."),(0,o.yg)("h2",{id:"dependency"},"Dependency"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Add Maven Dependency",(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>manager-common</artifactId>\n    <version>${a.l.inLongVersion}</version>\n</dependency>\n`)))),(0,o.yg)("h2",{id:"code"},"Code"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Implement the following interfaces")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"org.apache.inlong.manager.common.auth.InlongShiro\n\npublic interface InlongShiro {\n\n    WebSecurityManager getWebSecurityManager();\n\n    AuthorizingRealm getShiroRealm();\n\n    WebSessionManager getWebSessionManager();\n\n    CredentialsMatcher getCredentialsMatcher();\n\n    ShiroFilterFactoryBean getShiroFilter(SecurityManager securityManager);\n\n    AuthorizationAttributeSourceAdvisor getAuthorizationAttributeSourceAdvisor(SecurityManager securityManager);\n\n}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Implement ",(0,o.yg)("em",{parentName:"li"}," InlongShiro "),' interface and specify the configuration in "@ conditionalonproperty"')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'@ConditionalOnProperty(name = "type", prefix = "inlong.auth", havingValue = "Custom")\n@Component\npublic class InlongShiroImpl implements InlongShiro {\n   //todo\n}\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Modify the application.properties under the manager web module")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"inlong.auth.type=Custom\n")))}m.isMDXComponent=!0}}]);