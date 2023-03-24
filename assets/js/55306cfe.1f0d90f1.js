"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2707],{3905:(e,t,s)=>{s.d(t,{Zo:()=>u,kt:()=>m});var n=s(67294);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(e,t){if(null==e)return{};var s,n,i=function(e,t){if(null==e)return{};var s,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var s=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=l(s),p=i,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||o;return s?n.createElement(m,a(a({ref:t},u),{},{components:s})):n.createElement(m,a({ref:t},u))}));function m(e,t){var s=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=s.length,a=new Array(o);a[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[d]="string"==typeof e?e:i,a[1]=r;for(var l=2;l<o;l++)a[l]=s[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,s)}p.displayName="MDXCreateElement"},94297:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=s(87462),i=(s(67294),s(3905));const o={title:"TubeMQ JAVA SDK API"},a=void 0,r={unversionedId:"modules/tubemq/clients_java",id:"version-1.5.0/modules/tubemq/clients_java",title:"TubeMQ JAVA SDK API",description:"1 Introduction to the client base API:",source:"@site/versioned_docs/version-1.5.0/modules/tubemq/clients_java.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/clients_java",permalink:"/docs/1.5.0/modules/tubemq/clients_java",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/modules/tubemq/clients_java.md",tags:[],version:"1.5.0",frontMatter:{title:"TubeMQ JAVA SDK API"},sidebar:"tutorialSidebar",previous:{title:"Client RPC",permalink:"/docs/1.5.0/modules/tubemq/client_rpc"},next:{title:"Configuration",permalink:"/docs/1.5.0/modules/tubemq/configure_introduction"}},c={},l=[{value:"1 Introduction to the client base API:",id:"1-introduction-to-the-client-base-api",level:2},{value:"1.1 MessageSessionFactory (message session factory):",id:"11-messagesessionfactory-message-session-factory",level:3},{value:"1.2 MasterInfo:",id:"12-masterinfo",level:3},{value:"1.3 TubeClientConfig:",id:"13-tubeclientconfig",level:3},{value:"1.4 ConsumerConfig:",id:"14-consumerconfig",level:3},{value:"1.5 Message:",id:"15-message",level:3},{value:"1.6 MessageProducer:",id:"16-messageproducer",level:3},{value:"1.7 MessageConsumer:",id:"17-messageconsumer",level:3},{value:"2 Example of API call:",id:"2-example-of-api-call",level:2},{value:"2.1 Environment preparation:",id:"21-environment-preparation",level:3},{value:"2.2 Create Consumer:",id:"22-create-consumer",level:3},{value:"2.2.1 Initialize the MessageConsumerExample class:",id:"221-initialize-the-messageconsumerexample-class",level:5},{value:"2.2.2 Subscribe Topic:",id:"222-subscribe-topic",level:4},{value:"2.2.3 Consume:",id:"223-consume",level:4},{value:"2.3 Create Producer:",id:"23-create-producer",level:3},{value:"2.3.1 Publish Topic\uff1a",id:"231-publish-topic",level:4},{value:"2.3.2 Produce data:",id:"232-produce-data",level:4},{value:"2.3.3 Different types of Producer MAMessageProducerExample Concerns:",id:"233-different-types-of-producer-mamessageproducerexample-concerns",level:4}],u={toc:l},d="wrapper";function h(e){let{components:t,...s}=e;return(0,i.kt)(d,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-introduction-to-the-client-base-api"},"1 Introduction to the client base API:"),(0,i.kt)("h3",{id:"11-messagesessionfactory-message-session-factory"},"1.1 MessageSessionFactory (message session factory):"),(0,i.kt)("p",null,"TubeMQ uses MessageSessionFactory (message session factory) to manage network connections, and is subdivided into TubeSingleSessionFactory (single-connection session factory) class and TubeMultiSessionFactory (multi-connection session factory) class according to whether different clients in different businesses reuse connections. As you can see from the code, the single-connection session defines the clientFactory static class to realize the feature that only one underlying physical connection is established when different clients in the process connect to the same target server. The clientFactory defined in the multi-connection session is a non-static class. In this way, through different session factories in the same process, different connection sessions to which the created clients belong can establish different physical connections. This structure solves the problem of creating too many connections. Businesses can choose different message session factory classes according to their own needs. In general, we use a single-connection session factory class."),(0,i.kt)("h3",{id:"12-masterinfo"},"1.2 MasterInfo:"),(0,i.kt)("p",null,'The Master address information object of TubeMQ. The feature of this object is to support the configuration of multiple Master addresses. Since TubeMQ Master uses the storage capacity of BDB for metadata management and the eagerness to serve HA, the Master address needs to be configured with multiple pieces of information accordingly. This configuration information supports two modes: IP and domain name. Since TubeMQ\'s HA is eager mode, the client must ensure that each Master address is connected. This information is used when initializing the TubeClientConfig class object and the ConsumerConfig class object. Considering the convenience of configuration, we construct and parse multiple Master addresses into the format of "ip1:port1, ip2:port2, ip3:port3".'),(0,i.kt)("h3",{id:"13-tubeclientconfig"},"1.3 TubeClientConfig:"),(0,i.kt)("p",null,"The MessageSessionFactory initialization class is used to carry the object class for creating network connection information and client control parameter information, including RPC duration settings, Socket property settings, connection quality detection parameter settings, TLS parameter settings, authentication and authorization information settings, etc. Information, this class, together with the ConsumerConfig class introduced next, is the class with the largest change from the class of the version before TubeMQ-3.8.0. The main reason is that the interface definition of TubeMQ has not changed for more than 6 years before this, and the interface usage exists. The interface semantic definition is ambiguous, the interface attribute setting unit is not clear, and the program cannot identify the content selection of various situations. Considering the convenience of open source code self-examination and the problem of novice learning cost, we redefine the interface this time. . For the difference before and after the redefinition, see the description of the configuration interface definition section."),(0,i.kt)("h3",{id:"14-consumerconfig"},"1.4 ConsumerConfig:"),(0,i.kt)("p",null,'The ConsumerConfig class is a subclass of the TubeClientConfig class. It adds the parameter carrying when the Consumer class object is initialized based on the TubeClientConfig class. Therefore, in a MessageSessionFactory (message session factory) class object that has both a Producer and a Consumer, the session factory class The relevant settings are subject to the content initialized by the MessageSessionFactory class, and the Consumer class object is subject to the initialization class object passed at the time of creation. In the consumer, it is divided into two types: Pull consumer and Push consumer according to different consumption behaviors. The two kinds of unique parameters are distinguished by carrying different characteristics of "pull" or "push" through the parameter interface.'),(0,i.kt)("h3",{id:"15-message"},"1.5 Message:"),(0,i.kt)("p",null,"The Message class is the message object class passed in TubeMQ. The data set by the business will be passed from the production end to the message receiving end as it is. The attribute content is a field shared with the TubeMQ system. The content filled in by the business will not be lost or rewritten, but this field has The content filled in by the TubeMQ system may be added, and in subsequent versions, the newly added content in the TubeMQ system may be removed without being notified. What should be noted in this part is the Message.putSystemHeader(final String msgType, final String msgTime) interface, which is used to set the message type and message sending time of the message, msgType is used for consumer filtering, and msgTime is used as TubeMQ for data sending and receiving statistics Time message time statistics dimension is used."),(0,i.kt)("h3",{id:"16-messageproducer"},"1.6 MessageProducer:"),(0,i.kt)("p",null,"Message producer class, this class completes the production of messages. Message sending is divided into two interfaces: synchronous sending and asynchronous sending. Currently, messages are sent to the back-end server in the Round Robin method. In the future, the back-end will be considered according to the algorithm specified by the business. Server selection method for production. When using this class, it should be noted that we support the publish specified by the full topic during initialization, and also support the temporary increase of the publish of the new topic during the production process, but the temporarily added topic will not take effect immediately, so when using the new topic Before a topic, call the isTopicCurAcceptPublish interface to check whether the topic has been published and accepted by the server, otherwise the message may fail to be sent."),(0,i.kt)("h3",{id:"17-messageconsumer"},"1.7 MessageConsumer:"),(0,i.kt)("p",null,"This class has two subclasses, PullMessageConsumer and PushMessageConsumer. By wrapping these two subclasses, the Pull and Push semantics on the business side are completed. In fact, TubeMQ uses the Pull mode to interact with the back-end service. In order to facilitate the use of the business interface, we encapsulate it. You can see that the difference is that Push initializes a thread group at startup to complete active data pull. operate. The things to pay attention to are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CompleteSubscribe interface, the interface with parameters supports the client to consume the specified offset for the specified partition, and the interface without parameters uses the ConsumerConfig.setConsumeModel(int consumeModel) interface to set the corresponding consumption mode to consume data;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For the subscribe interface, it is used to define the consumption target of the consumer, and the filterConds parameter indicates whether the topic to be consumed is filtered and consumed, and the msgType message type value to be filtered when filtering consumption. If filtering consumption is not required, this parameter is filled with null, or an empty collection value."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"2-example-of-api-call"},"2 Example of API call:"),(0,i.kt)("h3",{id:"21-environment-preparation"},"2.1 Environment preparation:"),(0,i.kt)("p",null,"The TubeMQ open source package org.apache.tubemq.example provides specific code examples for production and consumption. Here we use an actual example to introduce how to fill in parameters and call the corresponding interface. First, we build a TubeMQ cluster with 3 Master nodes. The 3 Master addresses and ports are test_1.domain.com, test_2.domain.com, test_3.domain.com, and the ports are 8080. In this cluster, we establish Several Brokers have been created, and we have created 3 topics for the Broker: topic_1, topic_2, topic_3 and other topic configurations; then we start the corresponding Broker and wait for the creation of the Consumer and Producer."),(0,i.kt)("h3",{id:"22-create-consumer"},"2.2 Create Consumer:"),(0,i.kt)("p",null,"See the package org.apache.tubemq.example.MessageConsumerExample class file. Consumer is a client object that includes network interaction coordination. It needs to be initialized and long-term resident memory is reused. It is not suitable for a single consumption scenario. As shown in the figure below, we define the MessageConsumerExample encapsulation class, in which we define the MessageSessionFactory class, the session factory for network interaction, and the PushMessageConsumer class for Push consumption:"),(0,i.kt)("h5",{id:"221-initialize-the-messageconsumerexample-class"},"2.2.1 Initialize the MessageConsumerExample class:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'First construct a ConsumerConfig class, fill in the initialization information, including the local IP V4 address, Master cluster address, consumer group name information, where the incoming value of the Master address information is: "test_1.domain.com:8080,test_2.domain .com:8080,test_3.domain.com:8080";')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then set the consumption mode: we set the consumption from the end of the queue for the first time, and then continue the consumption mode;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then set the number of callback functions for Push consumption")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Perform session factory initialization: In this scenario, we choose to establish a single-linked session factory;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a consumer in the session factory:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public final class MessageConsumerExample {\n    private static final Logger logger = \n        LoggerFactory.getLogger(MessageConsumerExample.class);\n    private static final MsgRecvStats msgRecvStats = new MsgRecvStats();\n    private final String masterHostAndPort;\n    private final String localHost;\n    private final String group;\n    private PushMessageConsumer messageConsumer;\n    private MessageSessionFactory messageSessionFactory;\n    \n    public MessageConsumerExample(String localHost,\n                                  String masterHostAndPort,\n                                  String group,\n                                  int fetchCount) throws Exception {\n        this.localHost = localHost;\n        this.masterHostAndPort = masterHostAndPort;\n        this.group = group;\n        ConsumerConfig consumerConfig = \n            new ConsumerConfig(this.localHost,this.masterHostAndPort, this.group);\n        consumerConfig.setConsumeModel(0);\n        if (fetchCount > 0) {\n            consumerConfig.setPushFetchThreadCnt(fetchCount);\n        }\n        this.messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);\n        this.messageConsumer = messageSessionFactory.createPushConsumer(consumerConfig);\n    }\n}\n")),(0,i.kt)("h4",{id:"222-subscribe-topic"},"2.2.2 Subscribe Topic:"),(0,i.kt)("p",null,"We did not use the specified offset consumption mode to subscribe, and there was no filtering requirement, so we only specified the topic in the following code, and we passed the null value for the corresponding filter item set. At the same time, for different topics, we can Pass different message callback processing functions; here we subscribe to 3 topics, topic_1, topic_2, topic_3, and each topic calls the subscribe function to set the corresponding parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public void subscribe(final Map<String, TreeSet<String>> topicStreamIdsMap)\n    throws TubeClientException {\n    for (Map.Entry<String, TreeSet<String>> entry : topicStreamIdsMap.entrySet()) {\n        this.messageConsumer.subscribe(entry.getKey(),\n                                       entry.getValue(), \n                                       new DefaultMessageListener(entry.getKey()));\n    }\n    messageConsumer.completeSubscribe();\n}\n")),(0,i.kt)("h4",{id:"223-consume"},"2.2.3 Consume:"),(0,i.kt)("p",null,"At this point, the subscription to the corresponding topic in the cluster has been completed. After the system starts running, the data in the callback function will be continuously pushed to the business layer for processing through the callback function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class DefaultMessageListener implements MessageListener {\n\n    private String topic;\n\n    public DefaultMessageListener(String topic) {\n        this.topic = topic;\n    }\n\n    public void receiveMessages(PeerInfo peerInfo, final List<Message> messages) throws InterruptedException \n    {\n        if (messages != null && !messages.isEmpty()) {\n            msgRecvStats.addMsgCount(this.topic, messages.size());\n        }\n    }\n\n    public Executor getExecutor() {\n        return null;\n    }\n\n    public void stop() {\n    }\n}\n")),(0,i.kt)("h3",{id:"23-create-producer"},"2.3 Create Producer:"),(0,i.kt)("p",null,"In the current network environment, the business data is received and aggregated through the agent layer, which packs a lot of exception handling. Most of the business does not have and will not touch the Producer class of TubeSDK. Considering that the business builds its own cluster and uses TubeMQ for processing For the usage scenario, the corresponding usage demo is provided here, see the package org.apache.tubemq.example.MessageProducerExample class file for reference, ",(0,i.kt)("strong",{parentName:"p"},"Note")," is that unless the business uses the TubeMQ cluster of the data platform as the MQ service, it will still be To use the proxy layer for data production according to the access process of the existing network:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Initialize the MessageProducerExample class: "))),(0,i.kt)("p",null,"Similar to the initialization of Consumer, it also constructs an encapsulation class, defines a session factory, and a Producer class. The session factory initialization on the production side is carried out through the TubeClientConfig class. As mentioned before, the ConsumerConfig class is a subclass of the TubeClientConfig class, although The incoming parameters are different, but the session factory is initialized through the TubeClientConfig class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public final class MessageProducerExample {\n\n    private static final Logger logger = \n        LoggerFactory.getLogger(MessageProducerExample.class);\n    private static final ConcurrentHashMap<String, AtomicLong> counterMap = \n        new ConcurrentHashMap<String, AtomicLong>();\n    String[] arrayKey = {"aaa", "bbb", "ac", "dd", "eee", "fff", "gggg", "hhhh"};\n    private MessageProducer messageProducer;\n    private TreeSet<String> filters = new TreeSet<String>();\n    private int keyCount = 0;\n    private int sentCount = 0;\n    private MessageSessionFactory messageSessionFactory;\n\n    public MessageProducerExample(final String localHost, final String masterHostAndPort) \n        throws Exception {\n        filters.add("aaa");\n        filters.add("bbb");\n        TubeClientConfig clientConfig = \n            new TubeClientConfig(localHost, masterHostAndPort);\n        this.messageSessionFactory = new TubeSingleSessionFactory(clientConfig);\n        this.messageProducer = this.messageSessionFactory.createProducer();\n    }\n}\n')),(0,i.kt)("h4",{id:"231-publish-topic"},"2.3.1 Publish Topic\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public void publishTopics(List<String> topicList) throws TubeClientException {\n    this.messageProducer.publish(new TreeSet<String>(topicList));\n}\n")),(0,i.kt)("h4",{id:"232-produce-data"},"2.3.2 Produce data:"),(0,i.kt)("p",null,"As shown below, it is the specific data construction and sending logic. After constructing a Message object, call the sendMessage() function to send it. There are synchronous interfaces and asynchronous interfaces to choose from, and different interfaces are selected according to business requirements; it should be noted that the business is based on Different messages call the message.putSystemHeader() function to set the filtering properties and sending time of the message, which is convenient for the system to filter and consume messages, as well as for indicator statistics. After completing these, a message is sent. If the return result is successful, the message is successfully accepted and processed. If the return fails, the business will judge and process according to the specific error code and error prompt. For details of the relevant errors, see ",(0,i.kt)("a",{parentName:"p",href:"https://inlong.apache.org/docs/next/modules/tubemq/error_code"},"Error Code"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public void sendMessageAsync(int id, long currtime,\n                             String topic, byte[] body,\n                             MessageSentCallback callback) {\n    Message message = new Message(topic, body);\n    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmm");\n    long currTimeMillis = System.currentTimeMillis();\n    message.setAttrKeyVal("index", String.valueOf(1));\n    String keyCode = arrayKey[sentCount++ % arrayKey.length];\n    message.putSystemHeader(keyCode, sdf.format(new Date(currTimeMillis))); \n    if (filters.contains(keyCode)) {\n        keyCount++;\n    }\n    try {\n        message.setAttrKeyVal("dataTime", String.valueOf(currTimeMillis));\n        messageProducer.sendMessage(message, callback);\n    } catch (TubeClientException e) {\n        logger.error("Send message failed!", e);\n    } catch (InterruptedException e) {\n        logger.error("Send message failed!", e);\n    }\n}\n')),(0,i.kt)("h4",{id:"233-different-types-of-producer-mamessageproducerexample-concerns"},"2.3.3 Different types of Producer MAMessageProducerExample Concerns:"),(0,i.kt)("p",null,"The initialization of this class is different from the MessageProducerExample class. It uses the connection initialization performed by the TubeMultiSessionFactory multi-session factory class. This demo provides the characteristics of how to use the multi-session factory class, which can be used to improve system throughput through multiple physical connections (TubeMQ Reduce the use of physical connection resources through connection multiplexing mode), proper use can improve the production performance of the system. The consumer side can also be initialized through a multi-session factory, but considering that consumption is a long-term process and occupies less connection resources, it is not recommended for consumption scenarios."),(0,i.kt)("p",null,"Since then, the entire production and consumption examples have been introduced, you can directly download the corresponding code, compile and run to see if it is that simple\ud83d\ude0a"),(0,i.kt)("hr",null),(0,i.kt)("a",{href:"#top"},"Back to top"))}h.isMDXComponent=!0}}]);