---
title: 快速开始
sidebar_position: 2
---
## 部署运行

### 配置示例
TubeMQ 集群包含有两个组件: **Master** 和 **Broker**. Master 和 Broker 可以部署在相同或者不同的节点上，依照业务对机器的规划进行处理。我们通过如下 3 台机器搭建有 2 台 Master 的生产、消费的集群进行配置示例：

| 所属角色 | TCP 端口 | TLS 端口 | WEB 端口 | 备注                                                |
| --- |--------|--------|--------|---------------------------------------------------|
| Master | 8099   | 8199   | 8080   | 元数据存储在 ZooKeeper 的 `/tubemq` 目录                   |
| Broker | 8123   | 8124   | 8081   | 消息储存在 `/stage/msg_data`                           |
| ZooKeeper | 2181   |        |        | 存储 Master 元数据，如果配置 meta_bdb 则该组件不需要，根目录 `/tubemq` |

### 准备工作
- ZooKeeper集群

ZooKeeper 在 TubeMQ 环境里不是必选，如果 Master 元数据采用 BDB 存储，则该部分资源可以省略

- TubeMQ 安装包部署

选择安装路径后，安装包解压后的目录结构如下：
```
/INSTALL_PATH/inlong-tubemq-server/
├── bin
├── conf
├── lib
├── logs
└── resources
```

### 配置 Master
编辑 `conf/master.ini`，根据集群信息变更以下配置项

- Master IP 和端口
```ini
[master]
hostName=YOUR_SERVER_IP                   // 替换为当前主机 IP
port=8099
webPort=8080
```

- 访问授权 Token
```ini
confModAuthToken=abc                     // 该 token 用于页面配置、API 调用等
```

- 配置 meta_zookeeper 策略
```ini
[meta_zookeeper]                              // 同一个集群里 Master 必须使用同一套 zookeeper 环境，且配置一致
zkNodeRoot=/tubemq
zkServerAddr=localhost:2181              // 指向 zookeeper 集群，多个地址逗号分开
```

- 配置 meta_bdb 策略（可选）
  **注意**：由于 Apache 依赖包的 LICENSE 问题，从 1.1.0 版本开始 TubeMQ 发布的包不再包含 BDB 包，如果需要 BDB 存储元数据，业务需要自行下载 com.sleepycat.je-7.3.7.jar 包，要不系统运行时会报 “ java.lang.ClassNotFoundException: com.sleepycat.je.ReplicaConsistencyPolicy” 错误。
```ini
[meta_bdb]
repGroupName=tubemqGroup1                // 同一个集群的 Master 必须要用同一个组名，且不同集群的组名必须不同 
repNodeName=tubemqGroupNode1             // 同一个集群的 master 节点名必须是不同的名称
metaDataPath=/stage/meta_data
repHelperHost=FIRST_MASTER_NODE_IP:9001  // helperHost 用于创建 master 集群，一般配置第一个 master 节点 ip
```

- （可选）生产环境，多 master HA 级别

| HA 级别 | Master 数量 | 描述 |
|-------|-----------| ----------- |
| 高     | 3 masters | 任何主节点崩溃后，集群元数据仍处于读/写状态，可以接受新的生产者/消费者。 |
| 中     | 2 masters | 一个主节点崩溃后，集群元数据处于只读状态。对现有的生产者和消费者没有任何影响。 |
| 低     | 1 master  | 主节点崩溃后，对现有的生产者和消费者没有影响。 |

**注意**：
- 基于 Docker 容器化的需要，master.ini 文件里对 [meta_zookeeper] 或 [meta_bdb] 如上 3 个参数部分都是使用的缺省设置，在实际组网使用时需要以 Master 节点真实信息配置
- Master 所有节点的 IP 信息要在 hosts 配置文件里构造 IP 与 hostName 映射关系，如类似 “192.168.0.1 192-168-0-1”
- 需保证 Master 所有节点之间的时钟同步


### 配置Broker
编辑 `conf/broker.ini`，根据集群信息变更以下配置项
- Broker IP 和端口
```ini
[broker]
brokerId=0
hostName=YOUR_SERVER_IP                 // 替换为当前主机 IP，broker 目前只支持 IP
port=8123
webPort=8081
defEthName=eth1                         // 获取真实 IP 的网卡
```

- Master 地址
```ini
masterAddressList=YOUR_MASTER_IP1:8099,YOUR_MASTER_IP2:8099   //多个 master 以逗号分隔
```

- 数据目录
```ini
primaryPath=/stage/msg_data
```

### 启动 Master
进入 Master 节点的 `bin` 目录下，启动服务:
```bash
./tubemq.sh master start
```
访问Master的管控台 `http://YOUR_MASTER_IP:8080` ，页面可查则表示 master 已成功启动:
![TubeMQ Console GUI](img/tubemq-console-gui.png)


#### 配置 Broker 元数据
Broker 启动前，首先要在 Master 上配置 Broker 元数据，增加 Broker 相关的管理信息。在 `Broker List` 页面,  `Add Single Broker`，然后填写相关信息:

![Add Broker 1](img/tubemq-add-broker-1.png)

需要填写的内容包括：
1. broker IP: broker server ip
1. authToken:  `conf/master.ini` 文件中 `confModAuthToken` 字段配置的 token

然后上线Broker：
![Add Broker 2](img/tubemq-add-broker-2.png)

### 启动 Broker
进入 broker 节点的 `bin` 目录下，执行以下命令启动 Broker 服务：

```bash
./tubemq.sh broker start
```

刷新页面可以看到 Broker 已经注册，当 `当前运行子状态` 为 `idle` 时， 可以增加 topic:
![Add Broker 3](img/tubemq-add-broker-3.png)

## 快速使用
### 新增 Topic

可以通过 web GUI 添加 Topic， 在 `Topic列表` 页面添加，需要填写相关信息，比如增加 `demo` topic：
![Add Topic 1](img/tubemq-add-topic-1.png)

然后选择部署 Topic 的 Broker
![Add Topic 5](img/tubemq-add-topic-5.png)

此时 Broker 的 `可发布` 和 `可订阅` 依旧是灰色的
![Add Topic 6](img/tubemq-add-topic-6.png)

需要在 `Broker列表` 页面重载 Broker 配置
![Add Topic 2](img/tubemq-add-topic-2.png)

![Add Topic 3](img/tubemq-add-topic-3.png)

之后就可以在页面查看 Topic 信息。

![Add Topic 4](img/tubemq-add-topic-4.png)


### 运行 Example
可以通过上面创建的 `demo` topic 来测试集群。

#### 生产消息
将 `YOUR_MASTER_IP:port` 替换为实际的 IP 和端口，然后运行 producer:
```bash
cd /INSTALL_PATH/apache-inlong-tubemq-server-[TUBEMQ-VERSION]-bin
./bin/tubemq-producer-test.sh --master-servers YOUR_MASTER_IP1:port,YOUR_MASTER_IP2:port --topicName demo
```

如果能观察下如下日志，则表示数据发送成功：
![Demo 1](img/tubemq-send-message.png)

#### 消费消息
将 `YOUR_MASTER_IP:port` 替换为实际的 IP 和端口，然后运行 Consumer:
```bash
cd /INSTALL_PATH/apache-inlong-tubemq-server-[TUBEMQ-VERSION]-bin
./bin/tubemq-consumer-test.sh --master-servers YOUR_MASTER_IP1:port,YOUR_MASTER_IP2:port --topicName demo --groupName test_consume
```

如果能观察下如下日志，则表示数据被消费者消费到：

![Demo 2](img/tubemq-consume-message.png)

## 部署 Manager
参考 [InLong TubeMQ Manager](modules/tubemq/tubemq-manager/quick_start.md)

---
<a href="#top">Back to top</a>



