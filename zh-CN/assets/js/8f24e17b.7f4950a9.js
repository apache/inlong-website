"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[53502],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>d});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),g=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=g(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=g(r),m=a,d=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return r?t.createElement(d,i(i({ref:n},u),{},{components:r})):t.createElement(d,i({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var g=2;g<o;g++)i[g]=r[g];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12433:(e,n,r)=>{},30592:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var t=r(58168),a=(r(96540),r(15680));r(12433);const o={title:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1",sidebar_position:1},i=void 0,l={unversionedId:"development/extension_manager/inlong_manager_shiro_plugin",id:"development/extension_manager/inlong_manager_shiro_plugin",title:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/extension_manager/inlong_manager_shiro_plugin.md",sourceDirName:"development/extension_manager",slug:"/development/extension_manager/inlong_manager_shiro_plugin",permalink:"/zh-CN/docs/next/development/extension_manager/inlong_manager_shiro_plugin",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/development/extension_manager/inlong_manager_shiro_plugin.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DataProxy \u63d2\u4ef6\u6269\u5c55",permalink:"/zh-CN/docs/next/development/extension_dataproxy/how_to_write_plugin_dataproxy"},next:{title:"Manager \u81ea\u5b9a\u4e49\u63d2\u4ef6",permalink:"/zh-CN/docs/next/development/extension_manager/inlong_manager_plugin"}},p={},g=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u7f16\u7801",id:"\u7f16\u7801",level:2}],u={toc:g},c="wrapper";function s(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,a.yg)("p",null,"Inlong Manager\u4e2d\u4f7f\u7528\u4e86Apache Shiro\u6846\u67b6\u5b9e\u73b0\u4e86\u8ba4\u8bc1\u548c\u6388\u6743\u7b49\u529f\u80fd\uff0cManager\u5df2\u7ecf\u96c6\u6210\u597d\u4e86\u9ed8\u8ba4\u7684\u5b9e\u73b0\u903b\u8f91\uff0c\u5982\u679c\u60a8\u60f3\u5728Inlong Manager\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u57fa\u4e8eShiro\u7684\u8ba4\u8bc1\u548c\u6388\u6743\u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u7684\u8bf4\u660e\uff0c\u8fdb\u884c\u76f8\u5173\u529f\u80fd\u7684\u63d2\u4ef6\u5316\u5f00\u53d1\u3002"),(0,a.yg)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6dfb\u52a0maven \u4f9d\u8d56")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>manager-common</artifactId>\n    <version>${siteVariables.inLongVersion}</version>\n</dependency>\n")),(0,a.yg)("h2",{id:"\u7f16\u7801"},"\u7f16\u7801"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5b9e\u73b0\u5176\u4e2d\u5173\u4e8eShiro\u76f8\u5173\u6a21\u5757\u7684\u63a5\u53e3")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"package org.apache.inlong.manager.common.auth.InlongShiro\n\npublic interface InlongShiro {\n\n    WebSecurityManager getWebSecurityManager();\n\n    AuthorizingRealm getShiroRealm();\n\n    WebSessionManager getWebSessionManager();\n\n    CredentialsMatcher getCredentialsMatcher();\n\n    ShiroFilterFactoryBean getShiroFilter(SecurityManager securityManager);\n\n    AuthorizationAttributeSourceAdvisor getAuthorizationAttributeSourceAdvisor(SecurityManager securityManager);\n\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5b9e\u73b0",(0,a.yg)("em",{parentName:"li"},"InlongShiro"),'\u63a5\u53e3\uff0c\u5e76\u5728"@ConditionalOnProperty"\u6307\u5b9a\u914d\u7f6e')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'@ConditionalOnProperty(name = "type", prefix = "inlong.auth", havingValue = "Custom")\n@Component\npublic class InlongShiroImpl implements InlongShiro {\n   //todo\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4fee\u6539manager-web module\u4e0bapplication.properties\u6587\u4ef6\u4e2d\u914d\u7f6e")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"inlong.auth.type=Custom\n")))}s.isMDXComponent=!0}}]);