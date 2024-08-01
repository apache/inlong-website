---
title: Client RPC
---


## 1 General Introduction

Implements of this part can be found in `org.apache.tubemq.corerpc`. Each node in Apache TubeMQ Cluster Communicates by TCP Keep-Alive. Mseeages are definded using binary and protobuf combined.
![](img/client_rpc/rpc_bytes_def.png)

All we can see in TCP are binary streams. We defined:
- msgToken: 4-bytes, `RPC_PROTOCOL_BEGIN_TOKEN` in header, which are used to distinguish each message and identify the legitimacy of the counterpart. When message client received is not started with this header field, client needs to close the connection and prompt the error and quit or reconnect because the protocal is not supported by TubeMQ or something wrong may happended. 
- serialNo: 4-bytes, this field is sent by client to server and returned by server exactly the same when after handling the request. It is mainly used to associate the context of the client request and response. 
- listSize: 4-bytes, the length of the following PB blocks, this field would not be 0 in current definition.
- `[<len><data>]`: field is a combination of 2 fields
  - len: the length of data
  - data: the content of data

> Why the format of `listSize [<len><data>]` ?
> 
> This is because the serialized PB data is saved as a ByteBuffer object in TubeMQ, and in Java, there a maximum(8196) length of ByteBuffer block, an over length PB message needs to be saved in several ByteBuffer. No total length was counted now, and the ByteBuffer is directly written when Serializing in to TCP message.
> 
> **Please pay attention when implementing multiple languages and SDKs.** Need to serialize PB data content into arrays of blocks(supported in PB codecs).



## 2 PB format code:

There mainly has three kinds of PB messages in TubeMQ:
- RPC related messages : `RPC.proto`
- Master related messages : `MasterService.proto`
- Broker related messages : `BrokerService.proto`

`RPC.proto` defines 6 struct, which divided into 2 class: Request message and Response message. Response message is divided into Successful Response and Exception Response.

The request message encoding and response message decoding can be implemented in the `NettyClient.java` class. There is some room for improvement in this part of the definition and can be found in [TUBEMQ-109](https://issues.apache.org/jira/browse/TUBEMQ-109). However, due to compatibility concerns, it will be gradually replaced. We have implemented the current protobuf version, which is not a problem until at least 1.0.0. With the new protocol, the protocol implementation module requires each SDK to allow room for improvement. Take request message as an example, `RpcConnHeader` and other related structures are as follows：
```protobuf
message RpcConnHeader {
    required int32 flag = 1;
    optional int64 traceId = 2;
    optional int64 spanId = 3;
    optional int64 parentId = 4;
}

message RequestHeader {
    optional int32 serviceType = 1;
    optional int32 protocolVer = 2;
}

message RequestBody {
    required int32 method = 1;
    optional int64 timeout = 2;
    optional bytes request = 3;
}
```

Flag marks whether the message is requested or not, and the next three marks represent the content of the message trace, which is not currently used; the related is a fixed mapping of the service type, protocol version, service type, etc., the more critical parameter RequestBody.timeout is the maximum allowable time from when a request is received by the server to when it is actually processed. Long wait time, discarded if exceeded, current default is 10 seconds, request filled as follows.
```java
RequestWrapper requestWrapper =
                new RequestWrapper(PbEnDecoder.getServiceIdByServiceName(targetInterface),
                        RpcProtocol.RPC_PROTOCOL_VERSION,
                        RpcConstants.RPC_FLAG_MSG_TYPE_REQUEST,
                        requestTimeout); // request timeout
```


## 3 Interactive diagram of the client's PB request & response：

**Producer Interaction**：

The Producer has four pairs of instructions in the system, registration to master, heartbeat to master, exit from master and sending message to brokers.
![](img/client_rpc/rpc_producer_diagram.png)

Here we can see, Producer's implementation logic is to get metadata such as the list of partitions of specified topic from master, then select a partition and send message via TCP connection according to the rules of the client. It may be unsafe to send message without registration to master, the initial consideration was to use internal intake messages as much as possible and after that, considering security issues, we added authorization information carrying on top of this to perform authentication and authorization checks on the server side, solving the situation where the client bypasses the direct connection to the master and sends messages without authorization. But this will only enable in production environment.

**Note in producer side of multiple languages implementation:**

1. Our Master is running as a hot-swap master, and the switchover is based on the information carried by the `RspExceptionBody`. In this case, you need to search for the keywords `&quot;StandbyException&quot;`, If this type of exception occurs, switch to another Master node for re-registration. This part has some relevant issues to adjust to the problem.

2. Producer should re-register in the event of a Master connection failure during production, e.g. timeout, passive connection break, etc.

3. Producer side should pay attention to the Broker pre-connection operation in advance: the back-end cluster can have hundreds of Broker nodes, and each Broker has about  ten partitions, so there will be thousands of possible records about the partition, after the SDK receives the metadata information from the Master, it should perform the connection establishment operation on the Broker that has not yet built the chain in advance.

4. The Producer to Broker connection should be aware of anomaly detection and should be able to detect Broker bad spots and long periods of no messages, and to recycle the connection to Broker to avoid unstable operation in long-term running scene.

**Consumer Interaction Diagram**:

Consumer has 7 pairs of command in all, Register, Heartbeat, Exit to Master; Register, Logout, Heartbeat, Pulling mseeage to Broker. Registration and Logout to Broker is the same command, indicated by a different status code.

![](img/client_rpc/rpc_consumer_diagram.png)

As we can see from the above picture, the Consumer first has to register to the Master, but registering to the Master can not get Metadata information immediately because TubeMQ is using a server-side load-balancing model, and the client needs to wait for the server to dispatch the consumption partition information; Consumer to Broker needs to register the logout operation. Partition is exclusive at the time of consumption, i.e., the same partition can only be consumed by one consumer in the same group at the same time. To solve this problem, the client needs to register and get consumption access to the partition; message pull and consumption confirmation need to appear in pairs. Although the protocol supports multiple pulls and then the last acknowledgement process, it is possible that the consumer permissions of a partition may be lost timeout from the client, thus This causes the data rollback to be triggered by repetitive consumption, and the more data is saved the more repetitive consumption will occur, so follow the 1:1 submission comparison fit.

## 4 Client feature:

| **FEATURE** | **Java** | **C/C++** | **Go** | **Python** | **Rust** | **NOTE** |
| --- | --- | --- | --- | --- | --- | --- |
| TLS | ✅ | | | | | |
| Authorization | ✅ | | | | | |
| Anti-bypass-master production/consumption | ✅ | | | | | |
| Distributed system with clients accessing Broker without Master's authentication authorization | ✅ | | | | | |
| Effectively-Once | ✅ | | | | | |
| Partition offset consumption | ✅ | | | | | |
| Multiple Topic Consumption for a single Consumer group | ✅ | | | | | |
| Server Consumption filter | ✅ | | | | | |
| Auto shielding inactive Nodes| ✅ | | | | | | 
| Auto shielding bad Brokers | ✅ | | | | | | 
| Auto reconnect | ✅ | | | | | |
| Auto recycling of Idle Connection | ✅ | | | | | |
| Inactive for more than a specified period(e.g. 3min, mainly the producer side)| ✅ | | | | | | 
| Connection reuse | ✅ | | | | | |
| Connection sharing according to the sessionFactory | ✅ | | | | | | 
| Unconnection reuse | ✅ | | | | | | 
| Asynchrounous Production | ✅ | | | | | |
| Synchrounous Production | ✅ | | | | | |
| Pull Consumption | ✅ | | | | | |
| Push Consumption | ✅ | | | | | |
| Consumption limit (QOS) | ✅ | | | | | |
| Limit the amount of data per unit of time consumed by consumers | ✅ | | | | | |
| Pull Consumption frequency limit | ✅ | | | | | |
| Consumer Pull Consumption frequency limit | ✅ | | | | | |


## 5 Client function Induction CaseByCase：

**Client side and server side RPC interaction process**：

----------

![](img/client_rpc/rpc_inner_structure.png)

As shown above, the client has to maintain local preservation of the sent request message until the RPC times out, or a response message is received and the response The message is associated by the SerialNo generated when the request is sent; the Broker information received from the server side, and the Topic information, which the SDK stores locally and updates with the latest returned information, as well as periodic reports to the Server side; the SDK is maintained to the heartbeat of the Master or Broker, and if Master feedback is found When the registration timeout error, re-registration operation should be carried out; SDK should be based on Broker connection establishment, the same process different Between objects, to allow the business to choose whether to support per-object or per-process connections.

### 5.1 Message: Producer register to Master:

----------

```protobuf
message RegisterRequestP2M {
    required string clientId = 1;
    repeated string topicList = 2;
    required int64 brokerCheckSum = 3;
    required string hostName = 4;
    optional MasterCertificateInfo authInfo = 5;
    optional string jdkVersion = 6;
    optional ApprovedClientConfig appdConfig = 7;
}

message RegisterResponseM2P {
    required bool success = 1;
    required int32 errCode = 2;
    required string errMsg = 3;
    required int64 brokerCheckSum = 4;
    repeated string brokerInfos = 5;
    optional MasterAuthorizedInfo authorizedInfo = 6;
    optional ApprovedClientConfig appdConfig = 7;
}
```

**ClientId**：Producer needs to construct a ClientId at startup, and the current construction rule is: 

```java
ClientId = consumerGroup + "_"
        + AddressUtils.getLocalAddress() + "_" // local ip (IPV4)
        + pid + "_" // processId
        + timestamp + "_" // timestamp
        + counter + "_" // increament counter
        + consumerType + "_" // type of consumer，including Pull and Push 
        + clientVersion; // version for client
```
it is recommended that other languages add the above markup for easier access to the issue Exclusion. The ID value is valid for the lifetime of the Producer.

**TopicList**: The list of topics published by the user, Producer provides the initial list of topics for the data to be published at initialization, and also allows the business to defer adding new topics via the publish function in runtime, but does not support reducing topics in runtime.

**brokerCheckSum**: The check value of the Broker metadata information stored locally by the client, which is not available locally in Producer at initial startup, takes the value as -1; the SDK needs to carry the last BrokerCheckSum value on each request, and the Master determines whether the client's metadata needs to be updated by comparing the value.

**hostname**: The IPV4 address value of the machine where the Producer is located.

**success**: Whether the operation is successful, success is true, failure is false.

**errCode**: The code of error, currently one error code represents a large class of error, the specific cause of the error needs to be specifically identified by `errMsg`.

**errMsg**: The specific error message that the SDK needs to print out if something goes wrong.

**authInfo**：Authentication authorization information, if the user configuration is filled in to start authentication processing, then fill in; if authentication is required, then report according to the signature of the user name and password; if it is running, such as heartbeat, if the Master forces authentication processing, then report according to the signature of the user name and password; if not, then authenticate according to the authorization Token provided by the Master during the previous interaction; this authorization Token is also used to carry the message to Broker during production.

**brokerInfos**: Broker metadata information, which is primarily a list of Broker information for the entire cluster that the Master feeds back to the Producer in this field; the format is as follows.

```java
public BrokerInfo(String strBrokerInfo, int brokerPort) {
        String[] strBrokers =
                strBrokerInfo.split(TokenConstants.ATTR_SEP);
        this.brokerId = Integer.parseInt(strBrokers[0]);
        this.host = strBrokers[1];
        this.port = brokerPort;
        if (!TStringUtils.isBlank(strBrokers[2])) {
            this.port = Integer.parseInt(strBrokers[2]);
        }
        this.buildStrInfo();
    }
```

**authorizedInfo**: Master provides authorization information in the following format.

```protobuf
message MasterAuthorizedInfo {
    required int64 visitAuthorizedToken = 1;
    optional string authAuthorizedToken = 2;
}
```

**visitAuthorizedToken**: To prevent clients from bypassing the Master's access authorization token, if that data is available, the SDK should save it locally and carry that information on subsequent visits to the Broker; if the field is changed on subsequent heartbeats, the locally cached data for that field needs to be updated.

**authAuthorizedToken**：Authenticated authorization tokens, if they have data for that field, they need to save and carry that field information for subsequent accesses to the Master and Broker; if the field is changed on subsequent heartbeats, the local cache of that field data needs to be updated.


### 5.2 Mseeage: Heartbeat from Producer to Master:

----------

```protobuf
message HeartRequestP2M {
    required string clientId = 1;
    required int64 brokerCheckSum = 2;
    required string hostName = 3;
    repeated string topicList = 4;
    optional MasterCertificateInfo authInfo = 5;
    optional ApprovedClientConfig appdConfig = 6;
}

message HeartResponseM2P {
    required bool success = 1;
    required int32 errCode = 2;
    required string errMsg = 3;
    required int64 brokerCheckSum = 4;
    /* brokerId:host:port-topic:partitionNum */
    repeated string topicInfos = 5;
    repeated string brokerInfos = 6;
    optional bool requireAuth = 7;
    optional MasterAuthorizedInfo authorizedInfo = 8;
    optional ApprovedClientConfig appdConfig = 9;
}
```

**topicInfos**: The metadata information corresponding to the Topic published by the SDK, including partition information and the Broker where it is located, is decoded. Since there is a lot of metadata, the outflow generated by passing the object data through as is would be very large, so we made Improvements.

```java
public static Tuple2<Map<String, Integer>, List<TopicInfo>> convertTopicInfo(
            Map<Integer, BrokerInfo> brokerInfoMap, List<String> strTopicInfos) {
        List<TopicInfo> topicList = new ArrayList<>();
        Map<String, Integer> topicMaxSizeInBMap = new ConcurrentHashMap<>();
        if (strTopicInfos == null || strTopicInfos.isEmpty()) {
            return new Tuple2<>(topicMaxSizeInBMap, topicList);
        }
        String[] strInfo;
        String[] strTopicInfoSet;
        String[] strTopicInfo;
        BrokerInfo brokerInfo;
        for (String info : strTopicInfos) {
            if (info == null || info.isEmpty()) {
                continue;
            }
            info = info.trim();
            strInfo = info.split(TokenConstants.SEGMENT_SEP, -1);
            strTopicInfoSet = strInfo[1].split(TokenConstants.ARRAY_SEP);
            for (String s : strTopicInfoSet) {
                strTopicInfo = s.split(TokenConstants.ATTR_SEP);
                brokerInfo = brokerInfoMap.get(Integer.parseInt(strTopicInfo[0]));
                if (brokerInfo != null) {
                    topicList.add(new TopicInfo(brokerInfo,
                            strInfo[0], Integer.parseInt(strTopicInfo[1]),
                            Integer.parseInt(strTopicInfo[2]), true, true));
                }
            }
            if (strInfo.length == 2 || TStringUtils.isEmpty(strInfo[2])) {
                continue;
            }
            try {
                topicMaxSizeInBMap.put(strInfo[0], Integer.parseInt(strInfo[2]));
            } catch (Throwable e) {
                //
            }
        }
        return new Tuple2<>(topicMaxSizeInBMap, topicList);
    }
```

**requireAuth**: Code to indicates the expiration of the previous authAuthorizedToken of the Master, requiring the SDK to report the username and password signatures on the next request.

### 5.3 Message: Producer exits from Master:

----------

```pro
message CloseRequestP2M{
	required string clientId = 1;
	optional MasterCertificateInfo authInfo = 2;
}

message CloseResponseM2P{
    required bool success = 1;
    required int32 errCode = 2;
    required string errMsg = 3;
}
```

Note that if authentication is enable, closing operation will do the authentication to avoid external interference with the operation.

### 5.4 Message: Producer to Broker:

----------

This part is related to the definition of RPC Message.

```protobuf
message SendMessageRequestP2B {
    required string clientId = 1;
    required string topicName = 2;
    required int32 partitionId = 3;
    required bytes data = 4;
    required int32 flag = 5;
    required int32 checkSum = 6;
    required int32 sentAddr = 7;
    optional string msgType = 8;
    optional string msgTime = 9;
    optional AuthorizedInfo authInfo = 10;
}

message SendMessageResponseB2P {
    required bool success = 1;
    required int32 errCode = 2;
    required string errMsg = 3;
    optional bool requireAuth = 4;
    optional int64 messageId = 5;
    optional int64 appendTime = 6;
    optional int64 appendOffset = 7;
}
```
**Data** is the binary byte stream of Message.

```protobuf
private byte[] encodePayload(final Message message) {
        final byte[] payload = message.getData();
        final String attribute = message.getAttribute();
        if (TStringUtils.isBlank(attribute)) {
            return payload;
        }
        byte[] attrData = StringUtils.getBytesUtf8(attribute);
        final ByteBuffer buffer =
                ByteBuffer.allocate(4 + attrData.length + payload.length);
        buffer.putInt(attrData.length);
        buffer.put(attrData);
        buffer.put(payload);
        return buffer.array();
    }
```

**sentAddr** is the local IPv4 address of the machine where the SDK is located converted to a 32-bit numeric ID.

**msgType** is the type of filter message. `msgTime` is the message time when the SDK sends a message, its value comes from the value filled in by `putSystemHeader` when constructing Message, and there is a corresponding API in Message to get it.

**requireAuth**: Required authentication operations to Broker for data production, not currently in effect due to performance issues. The authAuthorizedToken value in the sent message is based on the value provided by the Master and will change with the change of the Master.

### 5.5 Partition Loadbalance:

----------

Apache TubeMQ currently uses a server-side load balancing mode, where the balancing process is managed and maintained by the server; subsequent versions will add a client-side load balancing mode, so that two modes can co-exist.

**Server side load balancing**:

- When the Master process starts, it starts the load-balancing thread balancerChore. balancerChore periodically checks the current registered consumer group for load balancing. The process is simply to evenly distribute the consumer group subscription partitions to registered clients, and periodically detect the current partition of the client If so, the extra partitions will be split to other clients with less number of subscriptions. First, the master checks if the current consumer group needs load balancing. The topic collection is sorted by all partitions of the topic, and all consumer IDs of this consumer group, and then by the consumer group's all Divide and model the number of partitions and the number of clients to get the number of partitions each client subscribes to at most; then give each client the Assign partitions and carry the partition information in the heartbeat response when the consumer subscribes; if the client has more than one partition currently in place Give the client a partition release command to partition the partition away from the consumer, and to the assigned consumer A partition assignment instruction that informs that the partition is assigned to the corresponding client is as follows.

Translated with www.DeepL.com/Translator (free version)

```protobuf
message EventProto{
    optional int64 rebalanceId = 1;
    optional int32 opType = 2;
    optional int32 status = 3;
    /* consumerId@group-brokerId:host:port-topic:partitionId */
    repeated string subscribeInfo = 4;
}
```

**rebalanceId**：A long-type auto-increment number that indicates the round of load balance.

**opType**：Operation code, and its value defined in EventType. There are only four parts of the opcode that have been implemented, as follows: `DISCONNECT`, `CONNECT`, `REPORT` and `ONLY_`. Opcode started with `ONLY` is not detailed developed.

```java
switch (event.getType()) {
       case DISCONNECT:
       case ONLY_DISCONNECT:
           disconnectFromBroker(event);
           rebalanceResults.put(event);
           break;
       case CONNECT:
       case ONLY_CONNECT:
           connect2Broker(event);
           rebalanceResults.put(event);
           break;
       case REPORT:
           reportSubscribeInfo();
           break;
       case STOPREBALANCE:
           break;
       default:
           throw new TubeClientException(strBuffer
                   .append("Invalid rebalance opCode:")
                   .append(event.getType()).toString());
}
```

**status**：Defined in `EventStatus`, indicates the status of the event. When Master constructs a load balancing task, it sets the status to `TODO`. When receiving the client heartbeat request, master writes the task to the response message and sets the status to `PROCESSING`. The client receives a load balancing command from the heartbeat response, and then it can perform the actual connection or disconnection operation, after the operation is finished, set the command status to `DONE` until sending next heartbeat to master.

```java
public enum EventStatus {
    /**
     * To be processed state.
     * */
    TODO(0, "To be processed"),
    /**
     * On processing state.
     * */
    PROCESSING(1, "Being processed"),
    /**
     * Processed state.
     * */
    DONE(2, "Process Done"),

    /**
     * Unknown state.
     * */
    UNKNOWN(-1, "Unknown event status"),
    /**
     * Failed state.
     * */
    FAILED(-2, "Process failed");
}
```

**subscribeInfo** indicates assigned partition information, in the format suggested by the comment.


- Consumer Operation: When consumer receives metadata returned from master, it should establish the connection and release the operation(Refer to the opType note above). When connection established, return the operation result to master so that consumer can receive some relative job and perform. What we need to know is the LoadBalance of registration is a best-effort operation, if a new consumer send a request for connection before the consumer who occupanies the partition quits, it will receive `PARTITION\_OCCUPIED` exception response. And at this time partition tries to remove it from its queue. And partition consumer will also remove it when receiving corresponding response so that the consumer could successfully register to this partition in next load balance.