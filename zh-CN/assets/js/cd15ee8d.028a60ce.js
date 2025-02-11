"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[41242],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),g=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=g(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=g(t),s=r,y=c["".concat(p,".").concat(s)]||c[s]||d[s]||o;return t?a.createElement(y,l(l({ref:n},m),{},{components:t})):a.createElement(y,l({ref:n},m))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var g=2;g<o;g++)l[g]=t[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},76561:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var a=t(58168),r=(t(96540),t(15680));const o={title:"OpenTelemetry \u65e5\u5fd7\u4e0a\u62a5",sidebar_position:6},l=void 0,i={unversionedId:"modules/sort/log_report",id:"modules/sort/log_report",title:"OpenTelemetry \u65e5\u5fd7\u4e0a\u62a5",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/sort/log_report.md",sourceDirName:"modules/sort",slug:"/modules/sort/log_report",permalink:"/zh-CN/docs/next/modules/sort/log_report",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/sort/log_report.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"OpenTelemetry \u65e5\u5fd7\u4e0a\u62a5",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u810f\u6570\u636e\u5f52\u6863",permalink:"/zh-CN/docs/next/modules/sort/dirty_data_archive"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/manager/overview"}},p={},g=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"Connector\u96c6\u6210\u65e5\u5fd7\u4e0a\u62a5\u529f\u80fd",id:"connector\u96c6\u6210\u65e5\u5fd7\u4e0a\u62a5\u529f\u80fd",level:2},{value:"\u5bb9\u5668\u914d\u7f6e",id:"\u5bb9\u5668\u914d\u7f6e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2}],m={toc:g},c="wrapper";function d(e){let{components:n,...o}=e;return(0,r.yg)(c,(0,a.A)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.yg)("p",null,"\u7531\u4e8e ",(0,r.yg)("inlineCode",{parentName:"p"},"InLong Sort")," \u4f1a\u8fd0\u884c\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache Flink")," \u7684\u4e0d\u540c ",(0,r.yg)("inlineCode",{parentName:"p"},"Task Manager")," \u8282\u70b9\u4e0a\uff0c\u6bcf\u4e2a\u8282\u70b9\u72ec\u7acb\u5b58\u50a8\u4ea7\u751f\u7684\u65e5\u5fd7\uff0c\u6211\u4eec\u9700\u8981\u5230\u6bcf\u4e2a\u8282\u70b9\u4e0a\u67e5\u770b\u65e5\u5fd7\uff0c\u7ef4\u62a4\u6548\u7387\u4f4e\u4e0b\u3002\u4e3a\u6b64 ",(0,r.yg)("inlineCode",{parentName:"p"},"InLong Sort")," \u63d0\u4f9b\u4e86\u57fa\u4e8e OpenTelemetry \u7684\u65e5\u5fd7\u96c6\u4e2d\u7ba1\u7406\u65b9\u6848\uff0c\u7528\u6237\u53ef\u4ee5\u9ad8\u6548\u5730\u96c6\u4e2d\u5904\u7406",(0,r.yg)("inlineCode",{parentName:"p"},"Flink"),"\u65e5\u5fd7\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"InLong Sort"),"\u53ef\u4ee5\u5c06\u65e5\u5fd7\u4e0a\u62a5\u529f\u80fd\u96c6\u6210\u5230\u5404\u4e2a",(0,r.yg)("inlineCode",{parentName:"p"},"Connector"),"\u4e2d\uff0c\u5176\u65e5\u5fd7\u5904\u7406\u6d41\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\u3002\u65e5\u5fd7\u901a\u8fc7 ",(0,r.yg)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," \u8fdb\u884c\u4e0a\u62a5\uff0c\u7ecf\u7531 ",(0,r.yg)("a",{parentName:"p",href:"https://opentelemetry.io/docs/collector/"},"OpenTelemetry Collector")," \u6536\u96c6\u5904\u7406\u540e\u53d1\u5f80 ",(0,r.yg)("a",{parentName:"p",href:"https://grafana.com/oss/loki/"},"Grafana Loki")," \u8fdb\u884c\u96c6\u4e2d\u7ba1\u7406\u3002 "),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"\u65e5\u5fd7\u5904\u7406\u6d41\u7a0b",src:t(53846).A,width:"2434",height:"286"})),(0,r.yg)("h2",{id:"connector\u96c6\u6210\u65e5\u5fd7\u4e0a\u62a5\u529f\u80fd"},"Connector\u96c6\u6210\u65e5\u5fd7\u4e0a\u62a5\u529f\u80fd"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"InLong Sort")," \u5c01\u88c5\u4e86 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/6e78dd2de8e917b9fc17a18d5e990b43089bb804/inlong-sort/sort-flink/base/src/main/java/org/apache/inlong/sort/base/util/OpenTelemetryLogger.java"},"OpenTelemetryLogger")," \u7c7b\uff0c\u5176\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,r.yg)("inlineCode",{parentName:"p"},"Builder")," \u6765\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u914d\u7f6e\u4e00\u4e2a ",(0,r.yg)("inlineCode",{parentName:"p"},"OpenTelemetryLogger")," \uff0c\u5e76\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"OpenTelemetryLogger")," \u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"install")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"uninstall")," \u65b9\u6cd5\u6765\u5f00\u542f\u548c\u5173\u95ed\u65e5\u5fd7\u4e0a\u62a5\u529f\u80fd\u3002\u501f\u52a9 ",(0,r.yg)("inlineCode",{parentName:"p"},"OpenTelemetryLogger")," \u6211\u4eec\u53ef\u4ee5\u5f88\u4fbf\u6377\u5730\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"Connector")," \u8d4b\u4e88\u65e5\u5fd7\u4e0a\u62a5\u529f\u80fd\uff0c\u4ee5\u4e0b\u4ecb\u7ecd\u5982\u4f55\u501f\u52a9 ",(0,r.yg)("inlineCode",{parentName:"p"},"OpenTelemetryLogger")," \u7c7b\u4e3a\u7b26\u5408 ",(0,r.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/FLINK/FLIP-27%3A+Refactor+Source+Interface#FLIP27:RefactorSourceInterface-Motivation"},"FLIP-27")," \u6807\u51c6\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"Connector")," \u96c6\u6210\u65e5\u5fd7\u4e0a\u62a5\u529f\u80fd\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5728connector ",(0,r.yg)("inlineCode",{parentName:"li"},"SourceReader")," \u7c7b\u6784\u9020\u65b9\u6cd5\u4e2d\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"li"},"OpenTelemetryLogger.Builder()")," \u6784\u9020\u4e00\u4e2a ",(0,r.yg)("inlineCode",{parentName:"li"},"openTelemetryLogger")," \u5bf9\u8c61"),(0,r.yg)("li",{parentName:"ol"},"\u5728 ",(0,r.yg)("inlineCode",{parentName:"li"},"SourceReader")," \u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"Start")," \u63a5\u53e3\u4e2d\u8c03\u7528 ",(0,r.yg)("inlineCode",{parentName:"li"},"openTelemetryLogger")," \u5bf9\u8c61\u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"install()")," \u65b9\u6cd5"),(0,r.yg)("li",{parentName:"ol"},"\u5728 ",(0,r.yg)("inlineCode",{parentName:"li"},"SourceReader")," \u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"close")," \u63a5\u53e3\u4e2d\u8c03\u7528 ",(0,r.yg)("inlineCode",{parentName:"li"},"openTelemetryLogger")," \u5bf9\u8c61\u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"uninstall()")," \u65b9\u6cd5")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5982\u679c\u4f7f\u7528\u4e86 ",(0,r.yg)("inlineCode",{parentName:"p"},"maven-shade-plugin")," \u63d2\u4ef6\uff0c\u9700\u8981\u5c06 ",(0,r.yg)("inlineCode",{parentName:"p"},"opentelemetry")," \u53ca ",(0,r.yg)("inlineCode",{parentName:"p"},"okhttp")," \u76f8\u5173\u5305\u5305\u542b\u5728\u5185\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-shade-plugin</artifactId>\n            <version>${plugin.shade.version}</version>\n            <executions>\n                <execution>\n                    <id>shade-flink</id>\n                    <goals>\n                        <goal>shade</goal>\n                    </goals>\n                    <phase>package</phase>\n                    <configuration>\n                        <createDependencyReducedPom>false</createDependencyReducedPom>\n                        <artifactSet>\n                            <includes>\n                                <include>io.opentelemetry*</include>\n                                <include>com.squareup.*</include>\n                            </includes>\n                        </artifactSet>\n                    </configuration>\n                </execution>\n            </executions>\n        </plugin>\n    </plugins>\n</build>\n")),(0,r.yg)("p",null,"\u4f7f\u7528\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"import org.apache.inlong.sort.base.util.OpenTelemetryLogger;\n\npublic class XXXSourceReader<T>\n{\n\n    private static final Logger LOG = LoggerFactory.getLogger(XXXSourceReader.class);\n\n    private final OpenTelemetryLogger openTelemetryLogger;\n\n    public XXXSourceReader() {\n        ...\n        // \u521d\u59cb\u5316 OpenTelemetryLogger\n        this.openTelemetryLogger = new OpenTelemetryLogger.Builder()\n                .setServiceName(this.getClass().getSimpleName())\n                .setLocalHostIp(this.context.getLocalHostName()).build();\n    }\n\n    @Override\n    public void start() {\n        openTelemetryLogger.install(); //  \u5f00\u542f\u65e5\u5fd7\u4e0a\u62a5\u529f\u80fd\n        ...\n    }\n\n    @Override\n    public void close() throws Exception {\n        super.close();\n        openTelemetryLogger.uninstall(); // \u5173\u95ed\u65e5\u5fd7\u4e0a\u62a5\u529f\u80fd\n    }\n    \n    ...\n}\n")),(0,r.yg)("p",null,"\u76ee\u524d ",(0,r.yg)("inlineCode",{parentName:"p"},"OpenTelemetryLogger")," \u63d0\u4f9b\u5982\u4e0b\u914d\u7f6e\u9879\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"endpoint")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"OpenTelemetry Collector"),"\u5730\u5740\uff0c\u5982\u672a\u6307\u5b9a\u5219\u5c1d\u8bd5\u4ece",(0,r.yg)("inlineCode",{parentName:"td"},"OTEL_EXPORTER_ENDPOINT"),"\u73af\u5883\u53d8\u91cf\u83b7\u53d6\uff1b\u5982\u73af\u5883\u53d8\u91cf\u4e5f\u672a\u914d\u7f6e\u5219\u91c7\u7528\u9ed8\u8ba4\u503c"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"localhost:4317"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"serviceName")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"OpenTelemetry "),"\u670d\u52a1\u540d\uff0c\u53ef\u4ee5\u7528\u6765\u533a\u5206\u4e0d\u540c\u7684",(0,r.yg)("inlineCode",{parentName:"td"},"connector")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"unnamed_service  "))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"layout")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Log4j2")," \u7684\u65e5\u5fd7\u683c\u5f0f\uff0c\u5e94\u8bbe\u7f6e\u4e3a\u4e00\u4e2a",(0,r.yg)("inlineCode",{parentName:"td"},"PatternLayout"),"\u5bf9\u8c61"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"logLevel")),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0a\u62a5\u7684\u65e5\u5fd7\u7ea7\u522b"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Level.INFO"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"localHostIp")),(0,r.yg)("td",{parentName:"tr",align:null},"\u6240\u5728",(0,r.yg)("inlineCode",{parentName:"td"},"Flink"),"\u8282\u70b9IP\uff0c\u53ef\u5728",(0,r.yg)("inlineCode",{parentName:"td"},"SourceReader"),"\u4e2d\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"td"},"this.context.getLocalHostName()"),"\u83b7\u53d6"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"null"))))),(0,r.yg)("h2",{id:"\u5bb9\u5668\u914d\u7f6e"},"\u5bb9\u5668\u914d\u7f6e"),(0,r.yg)("p",null,"\u9664\u4e86\u8981\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"Connector")," \u96c6\u6210\u65e5\u5fd7\u4e0a\u62a5\u529f\u80fd\u5916\uff0c\u8fd8\u9700\u8981\u589e\u52a0 ",(0,r.yg)("inlineCode",{parentName:"p"},"opentelemetry-collector"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"grafana loki"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"grafana")," \u4e09\u4e2adocker\u5bb9\u5668\uff0c\u5e76\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"Flink")," \u5bb9\u5668\u914d\u7f6e ",(0,r.yg)("inlineCode",{parentName:"p"},"OTEL_EXPORTER_ENDPOINT")," \u73af\u5883\u53d8\u91cf\u3002"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6b64\u90e8\u5206\u914d\u7f6e\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"/inlong/docker/docker-compose/docker-compose.yml")," \u4e2d\u5df2\u63d0\u4f9b\uff0c\u4ec5\u9700\u5728\u542f\u52a8 ",(0,r.yg)("inlineCode",{parentName:"p"},"docker compose")," \u65f6\u589e\u52a0 ",(0,r.yg)("inlineCode",{parentName:"p"},"--profile sort-report")," \u9009\u9879\u5373\u53ef\uff0c\u5b8c\u6574\u542f\u52a8\u547d\u4ee4\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"docker compose --profile sort-report up -d"))),(0,r.yg)("p",null,"\u4e5f\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u7684\u5185\u5bb9\u914d\u7f6e\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose.yml")," \u6587\u4ef6\u53c2\u8003\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-docker"},'# flink jobmanager\njobmanager:\n  image: apache/flink:1.15-scala_2.12\n  container_name: jobmanager\n  environment:\n    - |\n      FLINK_PROPERTIES=\n      jobmanager.rpc.address: jobmanager\n    - OTEL_EXPORTER_ENDPOINT=logcollector:4317\n  ports:\n    - "8081:8081"\n  command: jobmanager\n\n# flink taskmanager\ntaskmanager:\n  image: apache/flink:1.15-scala_2.12\n  container_name: taskmanager\n  environment:\n    - |\n      FLINK_PROPERTIES=\n      jobmanager.rpc.address: jobmanager\n      taskmanager.numberOfTaskSlots: 2\n    - OTEL_EXPORTER_ENDPOINT=logcollector:4317\n  command: taskmanager\n\n# opentelemetry collector\nlogcollector:\n  image: otel/opentelemetry-collector-contrib:0.110.0\n  container_name: logcollector\n  volumes:\n    - ./log-system/otel-config.yaml:/otel-config.yaml\n  command: [ "--config=/otel-config.yaml"]\n  ports:\n    - "4317:4317"\n\n# grafana loki\nloki:\n  image: grafana/loki:3.0.0\n  ports:\n    - "3100:3100"\n  volumes:\n    - ./log-system/loki.yaml:/etc/loki/local-config.yaml\n  command: -config.file=/etc/loki/local-config.yaml\n\n# grafana\ngrafana:\n  environment:\n    - GF_PATHS_PROVISIONING=/etc/grafana/provisioning\n    - GF_AUTH_ANONYMOUS_ENABLED=true\n    - GF_AUTH_ANONYMOUS_ORG_ROLE=Admin\n  entrypoint:\n    - sh\n    - -euc\n    - |\n      mkdir -p /etc/grafana/provisioning/datasources\n      cat <<EOF > /etc/grafana/provisioning/datasources/ds.yaml\n      apiVersion: 1\n      datasources:\n      - name: Loki\n        type: loki\n        access: proxy \n        orgId: 1\n        url: http://loki:3100\n        basicAuth: false\n        isDefault: true\n        version: 1\n        editable: false\n      EOF\n      /run.sh\n  image: grafana/grafana:latest\n  ports:\n    - "3000:3000"\n')),(0,r.yg)("p",null,"\u8fd8\u9700\u8981\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"logcollector")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"Loki")," \u5206\u522b\u63d0\u4f9b\u4e00\u4e2a\u540d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"otel-config.yaml")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"loki.yaml")," \u7684\u914d\u7f6e\u6587\u4ef6\uff0c ",(0,r.yg)("inlineCode",{parentName:"p"},"otel-config.yaml")," \u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"receivers:\n  otlp:\n    protocols:\n      grpc:\n        endpoint: logcollector:4317\nprocessors:\n  batch:\n\nexporters:\n  logging:\n    verbosity: detailed\n  otlphttp:\n    endpoint: http://loki:3100/otlp\n    tls:\n      insecure: true\n\nservice:\n  pipelines:\n    logs:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [otlphttp, logging]\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"loki.yaml")," \u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"auth_enabled: false\n\nlimits_config:\n  allow_structured_metadata: true\n  volume_enabled: true\n  otlp_config:\n    resource_attributes:\n      attributes_config:\n        - action: index_label\n          attributes:\n            - level\nserver:\n  http_listen_port: 3100\n\ncommon:\n  ring:\n    instance_addr: 0.0.0.0\n    kvstore:\n      store: inmemory\n  replication_factor: 1\n  path_prefix: /tmp/loki\n\nschema_config:\n  configs:\n    - from: 2020-05-15\n      store: tsdb\n      object_store: filesystem\n      schema: v13\n      index:\n        prefix: index_\n        period: 24h\n\nstorage_config:\n  tsdb_shipper:\n    active_index_directory: /tmp/loki/index\n    cache_location: /tmp/loki/index_cache\n  filesystem:\n    directory: /tmp/loki/chunks\n\npattern_ingester:\n  enabled: true\n")),(0,r.yg)("h2",{id:"\u4f7f\u7528\u8bf4\u660e"},"\u4f7f\u7528\u8bf4\u660e"),(0,r.yg)("p",null,"\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"inlong/docker/")," \u8def\u5f84\u4e0b\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"docker compose --profile sort-report up -d")," \u6765\u542f\u52a8\u76f8\u5173\u5bb9\u5668\uff0c\u5e76\u6309\u7167 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/next/quick_start/data_ingestion/file_pulsar_clickhouse_example"},"\u6570\u636e\u63a5\u5165")," \u6d41\u7a0b\u521b\u5efa\u5e76\u542f\u52a8\u4e00\u4e2a\u4efb\u52a1\u6d41\u7a0b(\u4f7f\u7528\u5230\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"connector")," \u9700\u8981\u96c6\u6210\u597d ",(0,r.yg)("inlineCode",{parentName:"p"},"OpenTelemetryAppender")," )\uff0c\u901a\u8fc7\u8bbf\u95ee ",(0,r.yg)("inlineCode",{parentName:"p"},"http://127.0.0.1:3000/explore")," \u5730\u5740\u8fdb\u5165 ",(0,r.yg)("inlineCode",{parentName:"p"},"Grafana Loki")," \u754c\u9762\uff0c\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"service_name")," \u5b57\u6bb5\u8fdb\u884c\u65e5\u5fd7\u67e5\u8be2\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"\u65e5\u5fd7\u67e5\u8be2",src:t(54326).A,width:"3787",height:"1952"})),(0,r.yg)("p",null,"\u70b9\u51fb\u76f8\u5e94\u7684\u65e5\u5fd7\u9879\uff0c\u53ef\u4ee5\u67e5\u770b\u5230\u65e5\u5fd7\u7684\u8be6\u7ec6\u4fe1\u606f\uff08",(0,r.yg)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u9ed8\u8ba4\u8bbe\u7f6e\u7684\u65e5\u5fd7\u4e0a\u62a5\u7ea7\u522b\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"ERROR"),"\uff09\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"\u65e5\u5fd7\u4fe1\u606f",src:t(45005).A,width:"3074",height:"1139"})))}d.isMDXComponent=!0},53846:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/LogProcess-869bdc4f5f6417e24e2f1163faa6b9f4.png"},54326:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/loki1-3ffb784523411bc5013186da7187d119.png"},45005:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/loki2-8f29b20948ce5a194ad920eb8444fc15.png"}}]);