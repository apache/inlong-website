## Prerequisites

- Java 1.7 or 1.8(Java 9 and above haven't been verified yet)
- Maven
- [protoc 2.5.0](https://github.com/protocolbuffers/protobuf/releases/tag/v2.5.0)

## Build

### Build distribution tarball
在TubeMQ根目录下执行命令：
```bash
mvn clean package -DskipTests
```
在根目录执行 `mvn clean install` 之后，可以单独对每个 module 进行构建。
### Build source code
在IDE中构建和调试源码，需要先运行以下命令：
```bash
mvn compile
```
执行之后，会生成 `protoc` 文件对应的 java source file，位于 `target/generated-sources` 目录。

然后就可以在 IDE 中打开 TubeMQ 工程。

## Deploy
构建完成之后，在 `tubemq-server/target` 目录下会有 **tubemq-server-x.x.x-bin.tar.gz** 文件. 
这是 Server 的部署包，包含了脚本、配置文件、依赖以及 web GUI相关的内容。

首次部署，只需要解压部署包，解压之后的目录结构如下：

```
/opt/tubemq-server
├── bin
├── conf
├── lib
├── logs
└── resources
```
### Configure
TubeMQ 集群有两个角色: **Master** 和 **Broker**. Master 和 Broker 可以部署在相同或者不同的节点上。下面是
一个集群的配置示例：

| Role | TCP Port | TLS Port | Web Port | Comment |
| ---- | -------- | -------- | -------- | ------- |
| Master | 8099 | 8199 | 8080 | 元数据存储在 /stage/metadata |
| Broker | 8123 | 8124 | 8081 | 消息存储在 /stage/msgdata |
| Zookeeper | 2181 | | | Offset 存储在 /tubemq |

详细的配置信息如下所示，注意将 `YOUR_SERVER_IP` 替换为真实的IP。

#### master.ini
```ini
[master]
hostName=YOUR_SERVER_IP
port=8000
webPort=8080
consumerBalancePeriodMs=30000
firstBalanceDelayAfterStartMs=60000
consumerHeartbeatTimeoutMs=30000
producerHeartbeatTimeoutMs=45000
brokerHeartbeatTimeoutMs=25000
confModAuthToken=abc
webResourcePath=/opt/tubemq-server/resources

[zookeeper]
zkNodeRoot=/tubemq
zkServerAddr=localhost:2181
zkSessionTimeoutMs=30000
zkConnectionTimeoutMs=30000
zkSyncTimeMs=5000
zkCommitPeriodMs=5000

[replication]
; name of current node; MUST BE DIFFERENT for every node in the cluster
repNodeName=tubemqMasterGroupNode1
; helperHost(and port) for nodes to join master cluster
repHelperHost=YOUR_SERVER_IP:9001
```

##### resources/velocity.properties
```properties
resource.loader=file
file.resource.loader.description=Velocity File Resource Loader
file.resource.loader.class=org.apache.velocity.runtime.resource.loader.FileResourceLoader
file.resource.loader.path=/opt/tubemq-server/resources/templates
file.resource.loader.cache=false
file.resource.loader.modificationCheckInterval=2
string.resource.loader.description=Velocity String Resource Loader
string.resource.loader.class=org.apache.velocity.runtime.resource.loader.StringResourceLoader
input.encoding=UTF-8
output.encoding=UTF-8
```

##### conf/broker.ini
```ini
[broker]
brokerId=0
hostName=YOUR_SERVER_IP
port=8123
webPort=8081
masterAddressList=YOUR_SERVER_IP:8000
primaryPath=/stage/msgdata
maxSegmentSize=1073741824
maxIndexSegmentSize=22020096
transferSize= 524288
loadMessageStoresInParallel=true
consumerRegTimeoutMs=35000

[zookeeper]
zkNodeRoot=/tubemq
zkServerAddr=localhost:2181
zkSessionTimeoutMs=30000
zkConnectionTimeoutMs=30000
zkSyncTimeMs=5000
zkCommitPeriodMs=5000
zkCommitFailRetries=10

```

特别的，对于 Master 节点，需要在 `/etc/hosts` 中配置其他 Master 节点的信息，如果有三个 Master 节点：
```
192.168.1.2 hostname-2
192.168.1.3 hostname-3
192.168.1.4 hostname-4
```
## Start Cluster

配置完成之后，就可以按照以下步骤启动集群。

### Start Master

完成如上配置设置后，首先进入主备Master所在的TubeMQ环境的 `bin` 目录，进行服务启动操作。
```bash
./master.sh start
```

访问Master的管控台 `http://your-master-ip:8080/config/topic_list.htm` ，页面可查则表示 master 已成功启动。

![TubeMQ Console GUI](img/tubemq-console-gui.png)

## Start Broker
Broker启动前，首先要在Master上配置Broker元数据，增加Broker相关的管理信息。

在`Broker List` 页面,  `Add Single Broker`，然后填写相关信息。

![Add Broker 1](img/tubemq-add-broker-1.png)

需要填写的内容包括：
1. broker IP: broker server ip
2. authToken:  `conf/master.ini` 文件中 `confModAuthToken` 字段配置的 token

然后上线Broker：

![Add Broker 2](img/tubemq-add-broker-2.png)

到 Broker 节点的 `bin` 目录下，执行以下命令启动 Broker服务：

```bash
./broker.sh start
```

刷新页面可以看到 Broker 已经注册，当 `当前运行子状态` 为 `idle` 时， 可以增加topic。

![Add Broker 3](img/tubemq-add-broker-3.png)

## Add Topic
可以通过 web GUI 添加 Topic， 在 `Topic列表`页面添加，需要填写相关信息

![Add Topic 1](img/tubemq-add-topic-1.png)

然后选择部署 Topic 的 Broker

![Add Topic 5](img/tubemq-add-topic-5.png)

此时 Broker的 `可发布` 和 `可订阅` 依旧是灰色的


![Add Topic 6](img/tubemq-add-topic-6.png)

需要在 `Broker列表`页面重载Broker 配置

![Add Topic 2](img/tubemq-add-topic-2.png)

![Add Topic 3](img/tubemq-add-topic-3.png)

之后就可以在页面查看Topic信息。

![Add Topic 4](img/tubemq-add-topic-4.png)


## Demo
可以使用 Example 来测试集群。首先，我们运行 producer的demo，注意将 `YOUR_SERVER_IP` 替换为实际的IP.
```bash
java -Dlog4j.configuration=file:/opt/tubemq-server/conf/tools.log4j.properties  -Djava.net.preferIPv4Stack=true -cp  /opt/tubemq-server/lib/*:/opt/tubemq-server/conf/*: com.tencent.tubemq.example.MessageProducerExample YOUR_SERVER_IP YOUR_SERVER_IP:8000 demo 10000000
```
从日志我们可以看到，数据发送成功
```bash
[2019-09-11 16:09:08,287] INFO Send demo 1000 message, keyCount is 268 (com.tencent.tubemq.example.MessageProducerExample)
[2019-09-11 16:09:08,505] INFO Send demo 2000 message, keyCount is 501 (com.tencent.tubemq.example.MessageProducerExample)
[2019-09-11 16:09:08,958] INFO Send demo 3000 message, keyCount is 755 (com.tencent.tubemq.example.MessageProducerExample)
[2019-09-11 16:09:09,085] INFO Send demo 4000 message, keyCount is 1001 (com.tencent.tubemq.example.MessageProducerExample)
```

然后运行 consume 的 demo，`YOUR_SERVER_IP` 也需要替换
```bash
java -Xmx512m -Dlog4j.configuration=file:/opt/tubemq-server/conf/tools.log4j.properties -Djava.net.preferIPv4Stack=true -cp /opt/tubemq-server/lib/*:/opt/tubemq-server/conf/*: com.tencent.tubemq.example.MessageConsumerExample YOUR_SERVER_IP YOUR_SERVER_IP:8000 demo demoGroup 3 1 1
```
从日志我们可以看到，数据被消费者消费到

```bash
[2019-09-11 16:09:29,720] INFO Receive messages:2500 (com.tencent.tubemq.example.MsgRecvStats)
[2019-09-11 16:09:30,059] INFO Receive messages:5000 (com.tencent.tubemq.example.MsgRecvStats)
[2019-09-11 16:09:34,493] INFO Receive messages:10000 (com.tencent.tubemq.example.MsgRecvStats)
[2019-09-11 16:09:34,783] INFO Receive messages:12500 (com.tencent.tubemq.example.MsgRecvStats)
```

---


