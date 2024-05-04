---
title: TubeMQ JAVA SDK API
---


## 1 Introduction to the client base API:

### 1.1 MessageSessionFactory (message session factory):

TubeMQ uses MessageSessionFactory (message session factory) to manage network connections, and is subdivided into TubeSingleSessionFactory (single-connection session factory) class and TubeMultiSessionFactory (multi-connection session factory) class according to whether different clients in different businesses reuse connections. As you can see from the code, the single-connection session defines the clientFactory static class to realize the feature that only one underlying physical connection is established when different clients in the process connect to the same target server. The clientFactory defined in the multi-connection session is a non-static class. In this way, through different session factories in the same process, different connection sessions to which the created clients belong can establish different physical connections. This structure solves the problem of creating too many connections. Businesses can choose different message session factory classes according to their own needs. In general, we use a single-connection session factory class.


### 1.2 MasterInfo:

The Master address information object of TubeMQ. The feature of this object is to support the configuration of multiple Master addresses. Since TubeMQ Master uses the storage capacity of BDB for metadata management and the eagerness to serve HA, the Master address needs to be configured with multiple pieces of information accordingly. This configuration information supports two modes: IP and domain name. Since TubeMQ's HA is eager mode, the client must ensure that each Master address is connected. This information is used when initializing the TubeClientConfig class object and the ConsumerConfig class object. Considering the convenience of configuration, we construct and parse multiple Master addresses into the format of "ip1:port1, ip2:port2, ip3:port3".


### 1.3 TubeClientConfig:

The MessageSessionFactory initialization class is used to carry the object class for creating network connection information and client control parameter information, including RPC duration settings, Socket property settings, connection quality detection parameter settings, TLS parameter settings, authentication and authorization information settings, etc. Information, this class, together with the ConsumerConfig class introduced next, is the class with the largest change from the class of the version before TubeMQ-3.8.0. The main reason is that the interface definition of TubeMQ has not changed for more than 6 years before this, and the interface usage exists. The interface semantic definition is ambiguous, the interface attribute setting unit is not clear, and the program cannot identify the content selection of various situations. Considering the convenience of open source code self-examination and the problem of novice learning cost, we redefine the interface this time. . For the difference before and after the redefinition, see the description of the configuration interface definition section.


### 1.4 ConsumerConfig:

The ConsumerConfig class is a subclass of the TubeClientConfig class. It adds the parameter carrying when the Consumer class object is initialized based on the TubeClientConfig class. Therefore, in a MessageSessionFactory (message session factory) class object that has both a Producer and a Consumer, the session factory class The relevant settings are subject to the content initialized by the MessageSessionFactory class, and the Consumer class object is subject to the initialization class object passed at the time of creation. In the consumer, it is divided into two types: Pull consumer and Push consumer according to different consumption behaviors. The two kinds of unique parameters are distinguished by carrying different characteristics of "pull" or "push" through the parameter interface.


### 1.5 Message:

The Message class is the message object class passed in TubeMQ. The data set by the business will be passed from the production end to the message receiving end as it is. The attribute content is a field shared with the TubeMQ system. The content filled in by the business will not be lost or rewritten, but this field has The content filled in by the TubeMQ system may be added, and in subsequent versions, the newly added content in the TubeMQ system may be removed without being notified. What should be noted in this part is the Message.putSystemHeader(final String msgType, final String msgTime) interface, which is used to set the message type and message sending time of the message, msgType is used for consumer filtering, and msgTime is used as TubeMQ for data sending and receiving statistics Time message time statistics dimension is used.


### 1.6 MessageProducer:

Message producer class, this class completes the production of messages. Message sending is divided into two interfaces: synchronous sending and asynchronous sending. Currently, messages are sent to the back-end server in the Round Robin method. In the future, the back-end will be considered according to the algorithm specified by the business. Server selection method for production. When using this class, it should be noted that we support the publish specified by the full topic during initialization, and also support the temporary increase of the publish of the new topic during the production process, but the temporarily added topic will not take effect immediately, so when using the new topic Before a topic, call the isTopicCurAcceptPublish interface to check whether the topic has been published and accepted by the server, otherwise the message may fail to be sent.


### 1.7 MessageConsumer:

This class has two subclasses, PullMessageConsumer and PushMessageConsumer. By wrapping these two subclasses, the Pull and Push semantics on the business side are completed. In fact, TubeMQ uses the Pull mode to interact with the back-end service. In order to facilitate the use of the business interface, we encapsulate it. You can see that the difference is that Push initializes a thread group at startup to complete active data pull. operate. The things to pay attention to are:

- CompleteSubscribe interface, the interface with parameters supports the client to consume the specified offset for the specified partition, and the interface without parameters uses the ConsumerConfig.setConsumeModel(int consumeModel) interface to set the corresponding consumption mode to consume data;

- For the subscribe interface, it is used to define the consumption target of the consumer, and the filterConds parameter indicates whether the topic to be consumed is filtered and consumed, and the msgType message type value to be filtered when filtering consumption. If filtering consumption is not required, this parameter is filled with null, or an empty collection value.
 

------


## 2 Example of API call:

### 2.1 Environment preparation:

The TubeMQ open source package org.apache.tubemq.example provides specific code examples for production and consumption. Here we use an actual example to introduce how to fill in parameters and call the corresponding interface. First, we build a TubeMQ cluster with 3 Master nodes. The 3 Master addresses and ports are test_1.domain.com, test_2.domain.com, test_3.domain.com, and the ports are 8080. In this cluster, we establish Several Brokers have been created, and we have created 3 topics for the Broker: topic_1, topic_2, topic_3 and other topic configurations; then we start the corresponding Broker and wait for the creation of the Consumer and Producer.


### 2.2 Create Consumer:

See the package org.apache.tubemq.example.MessageConsumerExample class file. Consumer is a client object that includes network interaction coordination. It needs to be initialized and long-term resident memory is reused. It is not suitable for a single consumption scenario. As shown in the figure below, we define the MessageConsumerExample encapsulation class, in which we define the MessageSessionFactory class, the session factory for network interaction, and the PushMessageConsumer class for Push consumption:


##### 2.2.1 Initialize the MessageConsumerExample class:

1. First construct a ConsumerConfig class, fill in the initialization information, including the local IP V4 address, Master cluster address, consumer group name information, where the incoming value of the Master address information is: "test_1.domain.com:8080,test_2.domain .com:8080,test_3.domain.com:8080";

2. Then set the consumption mode: we set the consumption from the end of the queue for the first time, and then continue the consumption mode;

3. Then set the number of callback functions for Push consumption

4. Perform session factory initialization: In this scenario, we choose to establish a single-linked session factory;

5. Create a consumer in the session factory:

```java
public final class MessageConsumerExample {
	private static final Logger logger = 
        LoggerFactory.getLogger(MessageConsumerExample.class);
    private static final MsgRecvStats msgRecvStats = new MsgRecvStats();
    private final String masterHostAndPort;
    private final String localHost;
    private final String group;
    private PushMessageConsumer messageConsumer;
    private MessageSessionFactory messageSessionFactory;
    
    public MessageConsumerExample(String localHost,
                                  String masterHostAndPort,
                                  String group,
                                  int fetchCount) throws Exception {
        this.localHost = localHost;
        this.masterHostAndPort = masterHostAndPort;
        this.group = group;
        ConsumerConfig consumerConfig = 
            new ConsumerConfig(this.localHost,this.masterHostAndPort, this.group);
        consumerConfig.setConsumeModel(0);
        if (fetchCount > 0) {
            consumerConfig.setPushFetchThreadCnt(fetchCount);
        }
        this.messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);
        this.messageConsumer = messageSessionFactory.createPushConsumer(consumerConfig);
    }
}
```


#### 2.2.2 Subscribe Topic:

We did not use the specified offset consumption mode to subscribe, and there was no filtering requirement, so we only specified the topic in the following code, and we passed the null value for the corresponding filter item set. At the same time, for different topics, we can Pass different message callback processing functions; here we subscribe to 3 topics, topic_1, topic_2, topic_3, and each topic calls the subscribe function to set the corresponding parameters:

```java
public void subscribe(final Map<String, TreeSet<String>> topicStreamIdsMap)
    throws TubeClientException {
    for (Map.Entry<String, TreeSet<String>> entry : topicStreamIdsMap.entrySet()) {
        this.messageConsumer.subscribe(entry.getKey(),
                                       entry.getValue(), 
                                       new DefaultMessageListener(entry.getKey()));
    }
    messageConsumer.completeSubscribe();
}
```


#### 2.2.3 Consume:

At this point, the subscription to the corresponding topic in the cluster has been completed. After the system starts running, the data in the callback function will be continuously pushed to the business layer for processing through the callback function:

```java
public class DefaultMessageListener implements MessageListener {

    private String topic;

    public DefaultMessageListener(String topic) {
        this.topic = topic;
    }

    public void receiveMessages(PeerInfo peerInfo, final List<Message> messages) throws InterruptedException 
    {
        if (messages != null && !messages.isEmpty()) {
            msgRecvStats.addMsgCount(this.topic, messages.size());
        }
    }

    public Executor getExecutor() {
        return null;
    }

    public void stop() {
    }
}
```


### 2.3 Create Producer:

In the current network environment, the business data is received and aggregated through the agent layer, which packs a lot of exception handling. Most of the business does not have and will not touch the Producer class of TubeSDK. Considering that the business builds its own cluster and uses TubeMQ for processing For the usage scenario, the corresponding usage demo is provided here, see the package org.apache.tubemq.example.MessageProducerExample class file for reference, **Note** is that unless the business uses the TubeMQ cluster of the data platform as the MQ service, it will still be To use the proxy layer for data production according to the access process of the existing network:

- **Initialize the MessageProducerExample class: **

Similar to the initialization of Consumer, it also constructs an encapsulation class, defines a session factory, and a Producer class. The session factory initialization on the production side is carried out through the TubeClientConfig class. As mentioned before, the ConsumerConfig class is a subclass of the TubeClientConfig class, although The incoming parameters are different, but the session factory is initialized through the TubeClientConfig class:

```java
public final class MessageProducerExample {

    private static final Logger logger = 
        LoggerFactory.getLogger(MessageProducerExample.class);
    private static final ConcurrentHashMap<String, AtomicLong> counterMap = 
        new ConcurrentHashMap<String, AtomicLong>();
    String[] arrayKey = {"aaa", "bbb", "ac", "dd", "eee", "fff", "gggg", "hhhh"};
    private MessageProducer messageProducer;
    private TreeSet<String> filters = new TreeSet<String>();
    private int keyCount = 0;
    private int sentCount = 0;
    private MessageSessionFactory messageSessionFactory;

    public MessageProducerExample(final String localHost, final String masterHostAndPort) 
        throws Exception {
        filters.add("aaa");
        filters.add("bbb");
        TubeClientConfig clientConfig = 
            new TubeClientConfig(localHost, masterHostAndPort);
        this.messageSessionFactory = new TubeSingleSessionFactory(clientConfig);
        this.messageProducer = this.messageSessionFactory.createProducer();
    }
}
```


#### 2.3.1 Publish Topic：

```java
public void publishTopics(List<String> topicList) throws TubeClientException {
    this.messageProducer.publish(new TreeSet<String>(topicList));
}
```


#### 2.3.2 Produce data:

As shown below, it is the specific data construction and sending logic. After constructing a Message object, call the sendMessage() function to send it. There are synchronous interfaces and asynchronous interfaces to choose from, and different interfaces are selected according to business requirements; it should be noted that the business is based on Different messages call the message.putSystemHeader() function to set the filtering properties and sending time of the message, which is convenient for the system to filter and consume messages, as well as for indicator statistics. After completing these, a message is sent. If the return result is successful, the message is successfully accepted and processed. If the return fails, the business will judge and process according to the specific error code and error prompt. For details of the relevant errors, see [Error Code](https://inlong.apache.org/docs/next/modules/tubemq/error_code):

```java
public void sendMessageAsync(int id, long currtime,
                             String topic, byte[] body,
                             MessageSentCallback callback) {
    Message message = new Message(topic, body);
    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmm");
    long currTimeMillis = System.currentTimeMillis();
    message.setAttrKeyVal("index", String.valueOf(1));
    String keyCode = arrayKey[sentCount++ % arrayKey.length];
    message.putSystemHeader(keyCode, sdf.format(new Date(currTimeMillis))); 
    if (filters.contains(keyCode)) {
        keyCount++;
    }
    try {
        message.setAttrKeyVal("dataTime", String.valueOf(currTimeMillis));
        messageProducer.sendMessage(message, callback);
    } catch (TubeClientException e) {
        logger.error("Send message failed!", e);
    } catch (InterruptedException e) {
        logger.error("Send message failed!", e);
    }
}
```



#### 2.3.3 Different types of Producer MAMessageProducerExample Concerns:

The initialization of this class is different from the MessageProducerExample class. It uses the connection initialization performed by the TubeMultiSessionFactory multi-session factory class. This demo provides the characteristics of how to use the multi-session factory class, which can be used to improve system throughput through multiple physical connections (TubeMQ Reduce the use of physical connection resources through connection multiplexing mode), proper use can improve the production performance of the system. The consumer side can also be initialized through a multi-session factory, but considering that consumption is a long-term process and occupies less connection resources, it is not recommended for consumption scenarios.


Since then, the entire production and consumption examples have been introduced, you can directly download the corresponding code, compile and run to see if it is that simple😊

---
<a href="#top">Back to top</a>
 

 

 

 