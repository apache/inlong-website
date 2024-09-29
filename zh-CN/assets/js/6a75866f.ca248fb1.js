"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5370],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=s(t),u=r,y=g["".concat(p,".").concat(u)]||g[u]||d[u]||l;return t?a.createElement(y,o(o({ref:n},c),{},{components:t})):a.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},83648:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const l={title:"\u5355\u673a\u90e8\u7f72",sidebar_position:1},o=void 0,i={unversionedId:"deployment/standalone",id:"deployment/standalone",title:"\u5355\u673a\u90e8\u7f72",description:"\u73af\u5883\u8981\u6c42",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/standalone.md",sourceDirName:"deployment",slug:"/deployment/standalone",permalink:"/zh-CN/docs/next/deployment/standalone",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/deployment/standalone.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5355\u673a\u90e8\u7f72",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SDK \u4f7f\u7528\u793a\u4f8b",permalink:"/zh-CN/docs/next/quick_start/transform/sdk_example"},next:{title:"Docker \u90e8\u7f72",permalink:"/zh-CN/docs/next/deployment/docker"}},p={},s=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u51c6\u5907\u6d88\u606f\u961f\u5217",id:"\u51c6\u5907\u6d88\u606f\u961f\u5217",level:2},{value:"\u4e0b\u8f7d\u5b89\u88c5\u5305",id:"\u4e0b\u8f7d\u5b89\u88c5\u5305",level:2},{value:"DB \u4f9d\u8d56",id:"db-\u4f9d\u8d56",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u96c6\u7fa4\u521d\u59cb\u5316",id:"\u96c6\u7fa4\u521d\u59cb\u5316",level:2},{value:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e",id:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e",level:3},{value:"\u6ce8\u518c MQ \u96c6\u7fa4",id:"\u6ce8\u518c-mq-\u96c6\u7fa4",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],c={toc:s},g="wrapper";function d(e){let{components:n,...l}=e;return(0,r.yg)(g,(0,a.A)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"MySQL 5.7+"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/try-flink/local_installation/"},"Apache Flink 1.13.x")," \u6216 ",(0,r.yg)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/try-flink/local_installation/"},"1.15.x")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,r.yg)("li",{parentName:"ul"},"Linux \u6216 Mac \u73af\u5883")),(0,r.yg)("h2",{id:"\u51c6\u5907\u6d88\u606f\u961f\u5217"},"\u51c6\u5907\u6d88\u606f\u961f\u5217"),(0,r.yg)("p",null,"InLong \u5f53\u524d\u652f\u6301\u4ee5\u4e0b\u6d88\u606f\u961f\u5217\uff0c\u6839\u636e\u4f7f\u7528\u60c5\u51b5",(0,r.yg)("strong",{parentName:"p"},"\u9009\u62e9\u5176\u4e00"),"\u5373\u53ef\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/next/modules/tubemq/quick_start"},"InLong TubeMQ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/2.8.x/getting-started-home/"},"Apache Pulsar 2.8.x")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://kafka.apache.org/quickstart"},"Apache Kafka 2.x"))),(0,r.yg)("h2",{id:"\u4e0b\u8f7d\u5b89\u88c5\u5305"},"\u4e0b\u8f7d\u5b89\u88c5\u5305"),(0,r.yg)("p",null,"\u53ef\u4ee5\u4ece ",(0,r.yg)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"\u4e0b\u8f7d\u9875\u9762")," \u83b7\u53d6\u4e8c\u8fdb\u5236\u5305\uff0c\u6216\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/next/quick_start/how_to_build"},"\u5982\u4f55\u7f16\u8bd1")," \u7f16\u8bd1\u9700\u8981\u7684\u7248\u672c\u3002"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\u89e3\u538b ",(0,r.yg)("inlineCode",{parentName:"p"},"apache-inlong-[version]-bin.tar.gz")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"apache-inlong-[version]-sort-connectors.tar.gz"),"\uff0c\u5e76\u786e\u4fdd ",(0,r.yg)("inlineCode",{parentName:"p"},"inlong-sort/connectors/")," \u76ee\u5f55\u5305\u542b ",(0,r.yg)("inlineCode",{parentName:"p"},"sort-connector-[type]-[version].jar"),"\u3002")),(0,r.yg)("h2",{id:"db-\u4f9d\u8d56"},"DB \u4f9d\u8d56"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,r.yg)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar"},"mysql-connector-java-8.0.28.jar"),", \u5e76\u5c06\u5176\u653e\u5165\u4ee5\u4e0b\u76ee\u5f55\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"inlong-agent/lib/\ninlong-audit/lib/\ninlong-manager/lib/\ninlong-tubemq-manager/lib/\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,r.yg)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.yg)("p",null,"\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"conf/inlong.conf"),"\u6587\u4ef6\u4e2d\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u914d\u7f6e\u53c2\u6570\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u672c\u5730\u673a\u5668 IP\nlocal_ip=\n# \u6d88\u606f\u961f\u5217\u670d\u52a1\uff1a pulsar \u6216\u8005 kafka\nmq_type=pulsar\n# \u6570\u636e\u5e93\u914d\u7f6e\uff0c\u9700\u8981\u4f7f\u7528 MySQL\nspring_datasource_hostname=\nspring_datasource_port=3306\nspring_datasource_username=root\nspring_datasource_password=inlong\n# Flink REST server \u5730\u5740\nflink_rest_address=\n# Flink REST server \u7aef\u53e3\nflink_rest_port=8081\n")),(0,r.yg)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bin/inlong-daemon start standalone\n")),(0,r.yg)("h2",{id:"\u96c6\u7fa4\u521d\u59cb\u5316"},"\u96c6\u7fa4\u521d\u59cb\u5316"),(0,r.yg)("p",null,"\u5f53\u6240\u6709\u5bb9\u5668\u90fd\u6210\u529f\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u8bbf\u95ee InLong Dashboard \u5730\u5740",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost"),"\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u8d26\u53f7\u767b\u5f55:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,r.yg)("h3",{id:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e"},"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e"),(0,r.yg)("p",null,"\u9875\u9762\u70b9\u51fb ","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u6807\u7b7e\u7ba1\u7406]","->","[\u65b0\u5efa]","\uff0c\u6307\u5b9a\u96c6\u7fa4\u6807\u7b7e\u540d\u79f0\u548c\u8d1f\u8d23\u4eba\uff1a\n",(0,r.yg)("img",{src:t(4215).A,width:"517",height:"331"})),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"\u7531\u4e8e\u5404\u4e2a\u7ec4\u4ef6\u9ed8\u8ba4\u4e0a\u62a5\u96c6\u7fa4\u6807\u7b7e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"default_cluster"),"\uff0c\u8bf7\u52ff\u4f7f\u7528\u5176\u5b83\u540d\u79f0\u3002")),(0,r.yg)("h3",{id:"\u6ce8\u518c-mq-\u96c6\u7fa4"},"\u6ce8\u518c MQ \u96c6\u7fa4"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u9009\u62e9 1 : Apache Pulsar\n\u9875\u9762\u70b9\u51fb ","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u65b0\u5efa\u96c6\u7fa4]","\uff0c\u6ce8\u518c Pulsar \u96c6\u7fa4\uff1a\n",(0,r.yg)("img",{src:t(96658).A,width:"644",height:"797"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u9009\u62e9 2 : Apache Kafka\n\u9875\u9762\u70b9\u51fb ","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u65b0\u5efa\u96c6\u7fa4]","\uff0c\u6ce8\u518c Kafka \u96c6\u7fa4\uff1a\n",(0,r.yg)("img",{src:t(30469).A,width:"644",height:"607"})))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\u96c6\u7fa4\u6807\u7b7e\u9009\u62e9\u521a\u521b\u5efa\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"default_cluster"),"\uff0c\u7136\u540e\u914d\u7f6e MQ \u96c6\u7fa4\u4fe1\u606f\u3002")),(0,r.yg)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.yg)("p",null,"\u521b\u5efa\u6570\u636e\u6d41\u53ef\u4ee5\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/next/quick_start/data_ingestion/file_pulsar_clickhouse_example"},"Example"),"."))}d.isMDXComponent=!0},4215:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/create_cluster_tag-c25267ed8accf193c4f1ddcd95afc6fd.png"},30469:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/create_kafka_cluster-234dbaa088b6bc1fce6a99989daa5c93.png"},96658:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/create_pulsar_cluster-9dd71f99b861038a89495ebe7841c7de.png"}}]);