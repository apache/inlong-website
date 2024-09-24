"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[22963],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>m});var r=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),s=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},g=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=t,m=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return a?r.createElement(m,i(i({ref:n},g),{},{components:a})):r.createElement(m,i({ref:n},g))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85050:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(58168),t=(a(96540),a(15680));const l={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},i=void 0,o={unversionedId:"modules/manager/quick_start",id:"version-1.13.0/modules/manager/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u73af\u5883\u51c6\u5907",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.13.0/modules/manager/quick_start.md",sourceDirName:"modules/manager",slug:"/modules/manager/quick_start",permalink:"/zh-CN/docs/modules/manager/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.13.0/modules/manager/quick_start.md",tags:[],version:"1.13.0",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/modules/manager/overview"},next:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-CN/docs/modules/manager/configure"}},p={},s=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56",level:2},{value:"\u4fee\u6539\u914d\u7f6e",id:"\u4fee\u6539\u914d\u7f6e",level:2},{value:"\u914d\u7f6e Flink \u63d2\u4ef6",id:"\u914d\u7f6e-flink-\u63d2\u4ef6",level:2},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",level:2},{value:"\u96c6\u7fa4\u521d\u59cb\u5316",id:"\u96c6\u7fa4\u521d\u59cb\u5316",level:2},{value:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e",id:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e",level:3},{value:"\u6ce8\u518c MQ \u96c6\u7fa4",id:"\u6ce8\u518c-mq-\u96c6\u7fa4",level:3},{value:"(\u53ef\u9009) \u5f00\u542fOpenAPI\u8ba4\u8bc1",id:"\u53ef\u9009-\u5f00\u542fopenapi\u8ba4\u8bc1",level:2},{value:"\u5f00\u542f\u8ba4\u8bc1",id:"\u5f00\u542f\u8ba4\u8bc1",level:3},{value:"\u914d\u7f6e\u8ba4\u8bc1",id:"\u914d\u7f6e\u8ba4\u8bc1",level:3},{value:"\u521b\u5efa\u8ba4\u8bc1 Key",id:"\u521b\u5efa\u8ba4\u8bc1-key",level:3}],g={toc:s},c="wrapper";function u(e){let{components:n,...l}=e;return(0,t.yg)(c,(0,r.A)({},g,l,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5b89\u88c5\u5e76\u542f\u52a8 MySQL 5.7+")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u521d\u59cb\u5316\u6570\u636e\u5e93\n",(0,t.yg)("inlineCode",{parentName:"p"},"inlong-manager")," \u76ee\u5f55\u4e0b\u6709 ",(0,t.yg)("inlineCode",{parentName:"p"},"sql/apache_inlong_manager.sql"),"\u6587\u4ef6\uff0c\u901a\u8fc7\u4e0b\u8ff0\u547d\u4ee4\u52a0\u8f7d\u6b64\u6587\u4ef6\uff0c\u5b8c\u6210\u8868\u7ed3\u6784\u53ca\u57fa\u7840\u6570\u636e\u7684\u521d\u59cb\u5316\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# \u901a\u8fc7\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u521b\u5efaDB\u548c\u8868\uff1a\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_manager.sql\n")))),(0,t.yg)("h2",{id:"\u6dfb\u52a0\u4f9d\u8d56"},"\u6dfb\u52a0\u4f9d\u8d56"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u4e0b\u8f7d Sort ",(0,t.yg)("a",{parentName:"li",href:"https://inlong.apache.org/zh-CN/download/"},"Connector Binary file"),", \u5e76\u89e3\u538b\u653e\u5165",(0,t.yg)("inlineCode",{parentName:"li"},"inlong-sort/connectors"),"\u76ee\u5f55\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,t.yg)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar"},"mysql-connector-java-8.0.28.jar"),"\uff0c\u5c06\u5176\u653e\u5165 ",(0,t.yg)("inlineCode",{parentName:"li"},"lib/")," \u76ee\u5f55\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528 PostgreSQL \u6570\u636e\u5e93\uff0c\u5219\u65e0\u9700\u989d\u5916\u4e0b\u8f7d\u4f9d\u8d56\u5305\u3002")),(0,t.yg)("h2",{id:"\u4fee\u6539\u914d\u7f6e"},"\u4fee\u6539\u914d\u7f6e"),(0,t.yg)("p",null,"\u524d\u5f80 ",(0,t.yg)("inlineCode",{parentName:"p"},"inlong-manager")," \u76ee\u5f55\uff0c\u4fee\u6539 ",(0,t.yg)("inlineCode",{parentName:"p"},"conf/application.properties")," \u6587\u4ef6\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-properties"},"# manager \u670d\u52a1\u7684\u7aef\u53e3\u53f7\nserver.port=8083\n\n# \u9ed8\u8ba4\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u4e3a dev\nspring.profiles.active=dev\n")),(0,t.yg)("p",null,"\u4e0a\u9762\u6307\u5b9a\u4e86 dev \u914d\u7f6e\uff0c\u63a5\u4e0b\u6765\u4fee\u6539 ",(0,t.yg)("inlineCode",{parentName:"p"},"conf/application-dev.properties")," \u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u9879\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-properties"},"# database configuration\nspring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n# Audit Proxy Address\nmetrics.audit.proxy.hosts=127.0.0.1:10081\n")),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"\u5982\u679c\u6307\u5b9a\u4e86 test \u6216 prod\uff0c\u5219\u4fee\u6539\u5bf9\u5e94\u7684 application-test.properties \u6216\u8005 application-prod.properties \u6587\u4ef6\u3002")),(0,t.yg)("h2",{id:"\u914d\u7f6e-flink-\u63d2\u4ef6"},"\u914d\u7f6e Flink \u63d2\u4ef6"),(0,t.yg)("p",null,"InLong Manager \u53ef\u542f\u52a8 Sort \u4efb\u52a1\u8fdb\u884c\u6570\u636e\u7684\u6d88\u8d39\u548c\u843d\u5730\uff0c\u9700\u8981\u5148\u914d\u7f6e Flink \u73af\u5883\u4fe1\u606f\u3002\u914d\u7f6e\u6587\u4ef6\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"plugins/flink-sort-plugin.properties"),"\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-properties"},"# Flink version, support [1.13|1.15]\nflink.version=1.13\n# Flink host split by coma if more than one host, such as 'host1,host2'\nflink.rest.address=127.0.0.1\n# Flink port\nflink.rest.port=8081\n# Flink job manager port\nflink.jobmanager.port=6123\n")),(0,t.yg)("h2",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"bash +x bin/startup.sh\n")),(0,t.yg)("h2",{id:"\u96c6\u7fa4\u521d\u59cb\u5316"},"\u96c6\u7fa4\u521d\u59cb\u5316"),(0,t.yg)("p",null,"\u5f53\u6240\u6709\u5bb9\u5668\u90fd\u6210\u529f\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u8bbf\u95ee InLong Dashboard \u5730\u5740",(0,t.yg)("inlineCode",{parentName:"p"},"http://localhost"),"\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u8d26\u53f7\u767b\u5f55:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,t.yg)("h3",{id:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e"},"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e"),(0,t.yg)("p",null,"\u9875\u9762\u70b9\u51fb ","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u6807\u7b7e\u7ba1\u7406]","->","[\u65b0\u5efa]","\uff0c\u6307\u5b9a\u96c6\u7fa4\u6807\u7b7e\u540d\u79f0\u548c\u8d1f\u8d23\u4eba\uff1a\n",(0,t.yg)("img",{src:a(68274).A,width:"517",height:"331"})),(0,t.yg)("admonition",{type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"\u7531\u4e8e\u5404\u4e2a\u7ec4\u4ef6\u9ed8\u8ba4\u4e0a\u62a5\u96c6\u7fa4\u6807\u7b7e\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"default_cluster"),"\uff0c\u8bf7\u52ff\u4f7f\u7528\u5176\u5b83\u540d\u79f0\u3002")),(0,t.yg)("h3",{id:"\u6ce8\u518c-mq-\u96c6\u7fa4"},"\u6ce8\u518c MQ \u96c6\u7fa4"),(0,t.yg)("p",null,"\u53ea\u7528\u6ce8\u518c\u4f60\u9009\u62e9\u7684 MQ \u7c7b\u578b\u96c6\u7fa4\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u9009\u62e9 1\uff1a\u6ce8\u518c Pulsar \u96c6\u7fa4\n\u9875\u9762\u70b9\u51fb ","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u65b0\u5efa\u96c6\u7fa4]","\uff0c\u6ce8\u518c Pulsar \u96c6\u7fa4\uff1a\n",(0,t.yg)("img",{src:a(12522).A,width:"518",height:"568"}))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u9009\u62e9 2\uff1a\u6ce8\u518c TubeMQ \u96c6\u7fa4\n\u9875\u9762\u70b9\u51fb ","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u65b0\u5efa\u96c6\u7fa4]","\uff0c\u6ce8\u518c TubeMQ \u96c6\u7fa4\uff1a\n",(0,t.yg)("img",{src:a(19605).A,width:"516",height:"464"}))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u9009\u62e9 3\uff1a\u6ce8\u518c Kafka \u96c6\u7fa4\n\u9875\u9762\u70b9\u51fb ","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u65b0\u5efa\u96c6\u7fa4]","\uff0c\u6ce8\u518c Kafka \u96c6\u7fa4\uff1a\n",(0,t.yg)("img",{src:a(78623).A,width:"644",height:"607"})))),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"\u96c6\u7fa4\u6807\u7b7e\u9009\u62e9\u521a\u521b\u5efa\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"default_cluster"),"\uff0c\u7136\u540e\u914d\u7f6e MQ \u96c6\u7fa4\u4fe1\u606f\u3002")),(0,t.yg)("h2",{id:"\u53ef\u9009-\u5f00\u542fopenapi\u8ba4\u8bc1"},"(\u53ef\u9009) \u5f00\u542fOpenAPI\u8ba4\u8bc1"),(0,t.yg)("h3",{id:"\u5f00\u542f\u8ba4\u8bc1"},"\u5f00\u542f\u8ba4\u8bc1"),(0,t.yg)("p",null,"Manager \u63d0\u4f9b OpenAPI \u5b89\u5168\u8bbf\u95ee\u8ba4\u8bc1\uff0c\u9ed8\u8ba4\u5173\u95ed\u3002\u5982\u9700\u5f00\u542f\uff0c\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"conf/application.properties")," \u6253\u5f00\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-properties"},"# Manager OpenAPI \u5b89\u5168\u8ba4\u8bc1\u5f00\u5173\nopenapi.auth.enabled=true\n")),(0,t.yg)("h3",{id:"\u914d\u7f6e\u8ba4\u8bc1"},"\u914d\u7f6e\u8ba4\u8bc1"),(0,t.yg)("p",null,"\u76f8\u5173\u7ec4\u4ef6\u9700\u914d\u7f6e\u7531 Manager \u5206\u914d\u7684\u8ba4\u8bc1 secret id \u548c secret key\uff0c\u4f8b\u5982 (\u5efa\u8bae\u4f7f\u7528\u65b0\u5206\u914d\u7684\u66ff\u4ee3\u9ed8\u8ba4\u503c)\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"Agent")," conf \u76ee\u5f55\u4e0b ",(0,t.yg)("inlineCode",{parentName:"li"},"agent.properties"),"\uff1a")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-properties"},"agent.manager.auth.secretId=admin\nagent.manager.auth.secretKey=87haw3VYTPqK5fK0\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"Dataproxy")," conf \u76ee\u5f55\u4e0b ",(0,t.yg)("inlineCode",{parentName:"li"},"common.properties"),"\uff1a")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-properties"},"manager.auth.secretId=admin\nmanager.auth.secretKey=87haw3VYTPqK5fK0\n")),(0,t.yg)("h3",{id:"\u521b\u5efa\u8ba4\u8bc1-key"},"\u521b\u5efa\u8ba4\u8bc1 Key"),(0,t.yg)("p",null,"\u7ba1\u7406\u5458\u53ef\u4ee5\u767b\u5f55 InLong Dashboard \u7ba1\u7406\u7aef\u6765\u521b\u5efa secret id \u548c secret key\uff1a ",(0,t.yg)("strong",{parentName:"p"},"\u7cfb\u7edf\u7ba1\u7406->\u7528\u6237\u7ba1\u7406->\u65b0\u5efa\u8d26\u53f7"),"."))}u.isMDXComponent=!0},68274:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/create_cluster_tag-c25267ed8accf193c4f1ddcd95afc6fd.png"},78623:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/kafka_cluster_save-234dbaa088b6bc1fce6a99989daa5c93.png"},12522:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/pulsar_cluster_save-188f29b79c2fb91937cc759705a4f810.png"},19605:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/tube_cluster_save-3ce5233f7d3f23e9250ed59d818981e6.png"}}]);