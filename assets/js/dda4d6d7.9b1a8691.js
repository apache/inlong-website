"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[79079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82500:(e,t,n)=>{n.d(t,{Y:()=>a});const a={inLongVersion:"1.5.0-SNAPSHOT"}},43410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(82500);const i={title:"Java SDK",sidebar_position:2},l=void 0,s={unversionedId:"sdk/dataproxy-sdk/java",id:"version-1.5.0/sdk/dataproxy-sdk/java",title:"Java SDK",description:"",source:"@site/versioned_docs/version-1.5.0/sdk/dataproxy-sdk/java.md",sourceDirName:"sdk/dataproxy-sdk",slug:"/sdk/dataproxy-sdk/java",permalink:"/docs/sdk/dataproxy-sdk/java",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/sdk/dataproxy-sdk/java.md",tags:[],version:"1.5.0",sidebarPosition:2,frontMatter:{title:"Java SDK",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"C++ SDK",permalink:"/docs/sdk/dataproxy-sdk/cpp"},next:{title:"HTTP Report",permalink:"/docs/sdk/dataproxy-sdk/http"}},d={},p=[{value:"Create real-time synchronization task",id:"create-real-time-synchronization-task",level:2},{value:"Import Java SDK",id:"import-java-sdk",level:2},{value:"Data report process",id:"data-report-process",level:2},{value:"Initialize SDK",id:"initialize-sdk",level:3},{value:"Call the send interface to report data",id:"call-the-send-interface-to-report-data",level:3},{value:"Close SDK",id:"close-sdk",level:3},{value:"Error Code Introduction",id:"error-code-introduction",level:2},{value:"ProxyClientConfig Configuration Introduction",id:"proxyclientconfig-configuration-introduction",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-real-time-synchronization-task"},"Create real-time synchronization task"),(0,r.kt)("p",null,"Create a task on the Dashboard or through the command line, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"Auto Push")," (autonomous push) as the data source type."),(0,r.kt)("h2",{id:"import-java-sdk"},"Import Java SDK"),(0,r.kt)("p",null,"The library of the SDK need to be imported into the project before using the SDK. The library can be obtained in the following two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get the source code and compile it yourself and deploy the SDK package to the local warehouse, see ",(0,r.kt)("a",{parentName:"li",href:"https://inlong.apache.org/docs/next/quick_start/how_to_build/"},"How to Build"),"."),(0,r.kt)("li",{parentName:"ul"},"Imported through maven dependency like this:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>dataproxy-sdk</artifactId>\n    <version>${o.Y.inLongVersion}</version>\n</dependency>\n`)))),(0,r.kt)("h2",{id:"data-report-process"},"Data report process"),(0,r.kt)("p",null,"After import the SDK, you can instantiate a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/MessageSender.java"},"MessageSender")," object, call sync(",(0,r.kt)("inlineCode",{parentName:"p"},"sendMessage()"),") or async(",(0,r.kt)("inlineCode",{parentName:"p"},"asyncSendMessage()"),") interface to report single or multiple(batch) data. see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/example/TcpClientExample.java"},"Send Demo"),".\nThe overall process includes the following three steps\uff1a"),(0,r.kt)("h3",{id:"initialize-sdk"},"Initialize SDK"),(0,r.kt)("p",null,"From the demo code, we can see that the client initialization is mainly done in the ",(0,r.kt)("inlineCode",{parentName:"p"},"getMessageSender()")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public DefaultMessageSender getMessageSender(String localIP, String inLongManagerAddr, String inLongManagerPort, String netTag, String dataProxyGroup, boolean isLocalVisit, boolean isReadProxyIPFromLocal, String configBasePath, int msgType) {\n    ProxyClientConfig dataProxyConfig = null;\n    DefaultMessageSender messageSender = null;\n    try {\n        // Initialize client configuration.  \'test\', \'123456\' is username and password, which need to be replaced according to the environment configuration in actual use.\n        dataProxyConfig = new ProxyClientConfig(localIP, isLocalVisit, inLongManagerAddr, Integer.valueOf(inLongManagerPort), dataProxyGroup, netTag, "test", "123456");\n        // Set the local save path of the configuration. This setting is optional. By default, the SDK will create a "/.inlong/" directory under the current user\'s working directory to store the configuration.\n        if (StringUtils.isNotEmpty(configBasePath)) {\n            dataProxyConfig.setConfStoreBasePath(configBasePath);\n        }\n        // Set whether to use the local saved configuration or not. This setting is optional. By default, do not use. \n        dataProxyConfig.setReadProxyIPFromLocal(isReadProxyIPFromLocal);\n        // Initialize MessageSender object, if there is an exception, an exception will be thrown.\n        messageSender = DefaultMessageSender.generateSenderByClusterId(dataProxyConfig);\n        // Set message type to send. This setting is optional. By default, send data in binary format.\n        messageSender.setMsgtype(msgType);\n    } catch (Exception e) {\n        logger.error("getMessageSender has exception e = {}", e);\n    }\n    // Return initialization result.\n    return messageSender;\n}\n')),(0,r.kt)("h3",{id:"call-the-send-interface-to-report-data"},"Call the send interface to report data"),(0,r.kt)("p",null,"The SDK data send interface is thread safe, support send single or multiple messages by sync and async two ways. The following demo uses a single sync way to send, and the message does not contain property information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public void sendTcpMessage(DefaultMessageSender sender, String inlongGroupId, String inlongStreamId, String messageBody, long dt) {\n    SendResult result = null;\n    try {\n        // Sends a single message in sync mode, and does not contain property information    \n        result = sender.sendMessage(messageBody.getBytes("utf8"), inlongGroupId, inlongStreamId,\n                0, String.valueOf(dt), 20, TimeUnit.SECONDS);\n    } catch (UnsupportedEncodingException e) {\n        e.printStackTrace();\n    }\n    logger.info("messageSender {}", result);\n}\n')),(0,r.kt)("p",null,"You can also choose different send interfaces to report data according to your business needs. For the details of the interface, please refer to the definition in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/MessageSender.java"},"MessageSender")," interface file, which has a detailed introduction, no additional explanation here. "),(0,r.kt)("h3",{id:"close-sdk"},"Close SDK"),(0,r.kt)("p",null,"In Demo, there is no close operation. When in use, we can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"close()")," function of the MessageSender interface object to stop data reporting."),(0,r.kt)("h1",{id:"warning"},"Warning"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"MessageSender")," interface object is initialized based on the GroupID, so each ",(0,r.kt)("inlineCode",{parentName:"li"},"MessageSender")," object can be used differently based on the GroupID, and multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"MessageSender")," objects can be created in the same process."),(0,r.kt)("li",{parentName:"ul"},"The SDK provides three different network interaction ways: TCP, HTTP, and UDP. Examples of these three ways are given in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/example"},"example")," (refer to ",(0,r.kt)("inlineCode",{parentName:"li"},"TcpClientExample.java"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpClientExample.java"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"UdpClientExample.java"),"), and the business can be customized according to its own needs to initialize different ",(0,r.kt)("inlineCode",{parentName:"li"},"MessageSender")," object."),(0,r.kt)("li",{parentName:"ul"},"The SDK contains complex network interactions, ",(0,r.kt)("inlineCode",{parentName:"li"},"MessageSender")," should be used as a resident object. Avoid frequent initialization and shutdown of ",(0,r.kt)("inlineCode",{parentName:"li"},"MessageSender")," (frequent initialization and shutdown will have a large resource overhead and will affect the timeliness of data reporting)."),(0,r.kt)("li",{parentName:"ul"},"The SDK does not resend the failed message. When using the SDK to report data, if send fails, you need to decide whether to resend according to your own needs.")),(0,r.kt)("h2",{id:"error-code-introduction"},"Error Code Introduction"),(0,r.kt)("p",null,"Common error codes are as follows."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Explain"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SendResult.OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Successfully sent"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SendResult.TIMEOUT"),(0,r.kt)("td",{parentName:"tr",align:null},"Request response timeout"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SendResult.CONNECTION_BREAK"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection is breaked"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SendResult.THREAD_INTERRUPT"),(0,r.kt)("td",{parentName:"tr",align:null},"Interrupt"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SendResult.ASYNC_CALLBACK_BUFFER_FULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Async callback buffer full"),(0,r.kt)("td",{parentName:"tr",align:null},"In this case, generally, it is caused by the speed of production data exceeding the response speed of the server. It is recommended to properly sleep when send to avoid blocking.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SendResult.NO_CONNECTION"),(0,r.kt)("td",{parentName:"tr",align:null},"No available connection"),(0,r.kt)("td",{parentName:"tr",align:null},"In this case, it is recommended to increase the number of available connections.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SendResult.INVALID_DATA"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid data, failed to report data to DataProxy via HTTP"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SendResult.INVALID_ATTRIBUTES"),(0,r.kt)("td",{parentName:"tr",align:null},"The packets sent are incorrect, such as empty packets or packets containing predefined attributes of the system"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SendResult.UNKOWN_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"Unknown error"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"proxyclientconfig-configuration-introduction"},"ProxyClientConfig Configuration Introduction"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Explain"),(0,r.kt)("th",{parentName:"tr",align:null},"Adjustment Suggestion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setAliveConnections(int aliveConnections)"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the number of DataProxy connections. Default: 3."),(0,r.kt)("td",{parentName:"tr",align:null},"1) If the amount of data is large or sensitive to delay, increase this parameter appropriately; 2) According to the size of the DataProxy cluster, adjust this parameter appropriately. For example, if the cluster size is 30, this value can be set to 5 ~ 10; 3) Experience value 15 ~ 20.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setTotalAsyncCallbackSize(int asyncCallbackSize)"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the size of SDK internal buffer queue during async send. The buffer is used to store packets that have been sent but have not received an Ack from the dataProxy. When the buffer reaches this threshold, continue to send data, and will receive an ASYNC_CALLBACK_BUFFER_FULL exception. Default: 50000."),(0,r.kt)("td",{parentName:"tr",align:null},"1) Normally, there is no need to adjust this parameter; 2) When the amount of data is very large or the load of DataProxy is high, it can be increased appropriately. Be careful not to be too large, which may cause OOM.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setConnectTimeoutMillis(long connectTimeoutMillis)"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the connection timeout interval. Unit: ms, Default: 40000."),(0,r.kt)("td",{parentName:"tr",align:null},"Set according to the actual environment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setRequestTimeoutMillis(long requestTimeoutMillis)"),(0,r.kt)("td",{parentName:"tr",align:null},"Set request timeout interval. Unit: ms, Default: 40000."),(0,r.kt)("td",{parentName:"tr",align:null},"Adjust settings as needed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setMaxTimeoutCnt(int maxTimeoutCnt)"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the number of timeout disconnections of a single DataProxy connection. The SDK will internally count the DataProxy connections that have timed out and have not received an Ack. If the timeout times of a connection reach the value within a short period of time, the SDK automatically disconnects the connection and selects another DataProxy to create a new connection for data reporting. Default value: 3."),(0,r.kt)("td",{parentName:"tr",align:null},"If the size of the DataProxy cluster is small, you can appropriately increase this parameter to avoid frequent disconnection in a short time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setManagerConnectionTimeout(int managerConnectionTimeout)"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the timeout interval for SDK connection to InLong Manager. Unit: ms, Default: 10000."),(0,r.kt)("td",{parentName:"tr",align:null},"1) When the network environment is not good, the value can be increased appropriately; 2) When the client takes a long time to resolve the domain name, the value can be increased appropriately.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setManagerSocketTimeout(int managerSocketTimeout)"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the timeout for the SDK to get the DataProxy list from the InLong Manager connection, Unit: ms, Default: 30000."),(0,r.kt)("td",{parentName:"tr",align:null},"When the network environment is not good, the value can be increased appropriately.")))))}u.isMDXComponent=!0}}]);