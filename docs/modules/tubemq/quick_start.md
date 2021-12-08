---
title: Quick Start
sidebar_position: 2
---
## 1 Deploy and Start

### 1.1 Configuration Example
There're two components in the cluster: **Master** and **Broker**. Master and Broker
can be deployed on the same server or different servers. In this example, we setup our cluster
like this, and all services run on the same node. Zookeeper should be setup in your environment also.

| Role | TCP Port | TLS Port | Web Port | Comment |
| ---- | -------- | -------- | -------- | ------- |
| Master | 8099 | 8199 | 8080 | Meta data is stored at /stage/meta_data |
| Broker | 8123 | 8124 | 8081 | Message is stored at /stage/msg_data |
| Zookeeper | 2181 |  |  | Offset is stored at /tubemq |

### 1.2 Prerequisites
- ZooKeeper Cluster

After you extract the package file, here's the folder structure.
```
/INSTALL_PATH/inlong-tubemq-server/
├── bin
├── conf
├── lib
├── logs
└── resources
```

### 1.3 Configure Master
You can change configurations in `conf/master.ini` according to cluster information.
- Master IP and Port
```ini
[master]
hostName=YOUR_SERVER_IP                  // replaced with your server IP
port=8099
webPort=8080
metaDataPath=/stage/meta_data
```

- Access Authorization Token
```ini
confModAuthToken=abc                    // for configuring Web Resources\API etc
```

- ZooKeeper Cluster
```ini
[zookeeper]                             // Master and Broker in the same cluster must use the same zookeeper environment and have the same configuration
zkNodeRoot=/tubemq
zkServerAddr=localhost:2181             // multi zookeeper addresses can separate with ","
```

- Replication Strategy 
```ini
[replication]
repGroupName=tubemqGroup1                // The Master of the same cluster must use the same group name, and the group names of different clusters must be different
repNodeName=tubemqGroupNode1             // The master node names of the same cluster must be different names
repHelperHost=FIRST_MASTER_NODE_IP:9001  // helperHost is used for building HA master.
```

- (Optional) Master High Availability
In the example above, we run the services on a single node. However, in real production environment, you
need to run multiple master services on different servers for high availability purpose. Here's
the introduction of availability level.

| HA Level | Master Number | Description |
| -------- | ------------- | ----------- |
| High | 3 masters | After any master crashed, the cluster meta data is still in read/write state and can accept new producers/consumers. |
| Medium | 2 masters | After one master crashed, the cluster meta data is in read only state. There's no affect on existing producers and consumers. |
| Minimum | 1 master | After the master crashed, there's no affect on existing producer and consumer. |

**Notice**:
- Based on the need of Docker containerization, the [replication] above 3 parameters in the master.ini file are all the default settings used, and the actual information of the Master node needs to be configured when used in actual networking.
- The IP information of all master nodes should be mapped to the hostName in the hosts configuration file, such as "192.168.0.1 192-168-0-1"
- It is necessary to ensure the clock synchronization between all master nodes


### 1.4 Configure Broker
You can change configurations in `conf/broker.ini` according to cluster information.
- Broker IP and Port
```ini
[broker]
brokerId=0
hostName=YOUR_SERVER_IP                 // replaced with your server IP
port=8123
webPort=8081
```
- Master Address
```ini
masterAddressList=MASTER_NODE_IP1:8099,MASTER_NODE_IP2:8099   // multi addresses can separate with ","
```

- Metadata Path
```ini
primaryPath=/stage/msg_data
```

- ZooKeeper Cluster
```ini
[zookeeper]                             // Master and Broker in the same cluster must use the same zookeeper environment and have the same configuration
zkNodeRoot=/tubemq
zkServerAddr=localhost:2181             // multi zookeeper addresses can separate with ","
```

### 1.5 Start Master
Please go to the `bin` folder and run this command to start
the master service.
```bash
./tubemq.sh master start
```

You should be able to access `http://your-master-ip:8080` to see the
web GUI now.

![TubeMQ Console GUI](img/tubemq-console-gui.png)

#### 1.5.1 Configure Broker Metadata
Before we start a broker service, we need to configure it on master web GUI first. Go to the `Broker List` page, click `Add Single Broker`, and input the new broker information.

![Add Broker 1](img/tubemq-add-broker-1.png)

In this example, we only need to input broker IP and authToken:
1. broker IP: broker server ip
2. authToken: A token pre-configured in the `conf/master.ini` file. Please check the
`confModAuthToken` field in your `master.ini` file.

Click the online link to activate the new added broker.

![Add Broker 2](img/tubemq-add-broker-2.png)

### 1.6 Start Broker
Please go to the `bin` folder and run this command to start the broker service
```bash
./tubemq.sh broker start
```

Refresh the GUI broker list page, you can see that the broker now is registered.

After the sub-state of the broker changed to `idle`, we can add topics to that broker.

![Add Broker 3](img/tubemq-add-broker-3.png)

## 2 Quick Start
### 3.1 Add Topic
We can add or manage the cluster topics on the web GUI. To add a new topic, go to the
topic list page and click the add new topic button

![Add Topic 1](img/tubemq-add-topic-1.png)

Then select the brokers which you want to deploy the topics to.

![Add Topic 5](img/tubemq-add-topic-5.png)

We can see the publish and subscribe state of the new added topic is still grey. We need
to go to the broker list page to reload the broker configuration.

![Add Topic 6](img/tubemq-add-topic-6.png)

![Add Topic 2](img/tubemq-add-topic-2.png)

When the broker sub-state changed to idle, go to the topic list page. We can see
that the topic publish/subscribe state is active now.

![Add Topic 3](img/tubemq-add-topic-3.png)

![Add Topic 4](img/tubemq-add-topic-4.png)

Now we can use the topic to send messages.

### 2.2 Run Example
Now we can use `demo` topic which created before to test our cluster.

#### 2.2.1 Produce Messages

Please don't forget replace `YOUR_MASTER_IP:port` with your server ip and port, and start producer.

```bash
cd /INSTALL_PATH/apache-inlong-tubemq-server-[TUBEMQ-VERSION]-bin
./bin/tubemq-producer-test.sh --master-servers YOUR_MASTER_IP1:port,YOUR_MASTER_IP2:port --topicName demo
```

From the log, we can see the message is sent out.
![Demo 1](img/tubemq-send-message.png)

#### 2.2.2 Consume Messages

Please don't forget replace YOUR_MASTER_IP:port with your server ip and port, and start consumer.
```bash
cd /INSTALL_PATH/apache-inlong-tubemq-server-[TUBEMQ-VERSION]-bin
./bin/tubemq-consumer-test.sh --master-servers YOUR_MASTER_IP1:port,YOUR_MASTER_IP2:port --topicName demo --groupName test_consume
```

From the log, we can see the message received by the consumer.
![Demo 2](img/tubemq-consume-message.png)

## 3 The End
Here, the compilation, deployment, system configuration, startup, production and consumption of TubeMQ have been completed. If you need to understand more in-depth content, please check the relevant content in "TubeMQ HTTP API" and make the corresponding configuration settings.

---


