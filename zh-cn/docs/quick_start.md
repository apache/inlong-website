---
title: 快速开始 - Apache inlong
---

## 编译和构建
### 准备工作
- Java JDK 1.7 或 1.8
- Maven 3.3+

### 从源码包构建
- 编译和打包：
```bash
mvn clean package -DskipTests
```
- （可选）使用Docker编译：
```bash
docker run -v REPLACE_WITH_SOURCE_PATH:/inlong  apacheinlong/inlong-build clean package -DskipTests
```
- 单元测试：
```bash
mvn test
```
- 单独对每个 module 进行构建：
```bash
mvn clean install
cd module-name (比如: inlong-client)
mvn test
```
构建完成之后，在 `inlong-server/target` 目录下会有 **inlong-server-[inlong-VERSION]-bin.tar.gz** 文件。
这是 inlong 的部署包，包含了脚本、配置文件、依赖以及 web GUI相关的内容。
### 配置IDE开发环境
在IDE中构建和调试源码，需要先运行以下命令：
```bash
mvn compile
```
执行之后，会生成 `protoc` 文件对应的 java source file，位于 `target/generated-sources` 目录。

（可选）如果你打算使用本地的 `protoc` 可执行文件，你可以修改 `inlong-core/pom.xml` 下的 `protobuf-maven-plugin` 的配置，如下所示。
```xml
<configuration>
    <outputDirectory>${project.build.directory}/generated-sources/java</outputDirectory>
    <protocExecutable>/usr/local/bin/protoc</protocExecutable>
</configuration>
```
## 部署运行
### 部署inlong Standalone
Standalone模式可以在一个容器中启动zookeeper/master/broker服务：
```
docker run -p 8080:8080 -p 8000:8000 -p 8123:8123 --name inlong -d apacheinlong/inlong-all:latest
```
容器拉起后，可在浏览器访问` http://127.0.0.1:8080`，然后参考下面`快速使用`部分开始使用。

**注意**：Standalone模式只可用于开发和体验，不可作为生产集群。

### 部署inlong集群
#### 准备工作
- ZooKeeper集群
- [inlong-server-[inlong-VERSION]-bin.tar.gz](download/download.md)安装包

选择安装路径后，安装包解压后的目录结构如下：
```
/INSTALL_PATH/inlong-server-[inlong-VERSION]-bin/
├── bin
├── conf
├── lib
├── logs
└── resources
```
#### 配置示例
inlong 集群包含有两个组件: **Master** 和 **Broker**. Master 和 Broker 可以部署在相同或者不同的节点上。下面是
一个集群的配置示例：

| Role | TCP Port | TLS Port | Web Port | Comment |
| ---- | -------- | -------- | -------- | ------- |
| Master | 8099 | 8199 | 8080 | 元数据存储在 /stage/metadata |
| Broker | 8123 | 8124 | 8081 | 消息存储在 /stage/msgdata |
| Zookeeper | 2181 | | | Offset 存储在 /inlong |

#### 配置Master
编辑`conf/master.ini`，根据集群信息变更以下配置项
- Master IP和端口
```ini
[master]
hostName=YOUR_SERVER_IP                  // 替换为当前主机IP
port=8000
webPort=8080
```
- 访问授权Token
```ini
confModAuthToken=abc                    // 该token用于页面配置、API调用等
```
- ZooKeeper集群地址
```ini
[zookeeper]
zkNodeRoot=/inlong
zkServerAddr=localhost:2181             // 指向zookeeper集群，多个地址逗号分开
```
- 配置Replication策略
```ini
[replication]
repNodeName=inlongMasterGroupNode1       // 每个master节点需使用不同名称
repHelperHost=FIRST_MASTER_NODE_IP:9001  // helperHost用于创建master集群，一般配置第一个master节点ip
```
- 前端安装路径

编辑resources/velocity.properties
```properties
file.resource.loader.path=/INSTALL_PATH/inlong-server-[inlong-VERSION]-bin/resources/templates
```
- （可选）生产环境，多master HA级别

| HA级别 | Master数量 | 描述 |
| -------- | ------------- | ----------- |
| 高 | 3 masters | 任何主节点崩溃后，集群元数据仍处于读/写状态，可以接受新的生产者/消费者。 |
| 中 | 2 masters | 一个主节点崩溃后，集群元数据处于只读状态。对现有的生产者和消费者没有任何影响。 |
| 低 | 1 master | 主节点崩溃后，对现有的生产者和消费者没有影响。 |

**注意**：需保证Master所有节点之间的时钟同步

#### 配置Broker
编辑`conf/broker.ini`，根据集群信息变更以下配置项
- Broker IP和端口
```ini
[broker]
brokerId=0
hostName=YOUR_SERVER_IP                 // 替换为当前主机IP，broker目前只支持IP
port=8123
webPort=8081
```
- Master地址
```ini
masterAddressList=MASTER_NODE_IP:8000   //多个master以逗号分隔
```
- 数据目录
```ini
primaryPath=/stage/msgdata
```
- ZooKeeper集群地址
```ini
[zookeeper]
zkNodeRoot=/inlong
zkServerAddr=localhost:2181             // 指向zookeeper集群，多个地址逗号分开
```

#### 启动Master
进入Master节点的 `bin` 目录下，启动服务:
```bash
./inlong master start
```
访问Master的管控台 `http://YOUR_MASTER_IP:8080` ，页面可查则表示master已成功启动:

![inlong Console GUI](img/inlong-console-gui.png)

#### 配置Broker元数据
Broker启动前，首先要在Master上配置Broker元数据，增加Broker相关的管理信息。在`Broker List` 页面,  `Add Single Broker`，然后填写相关信息:

![Add Broker 1](img/inlong-add-broker-1.png)

需要填写的内容包括：
1. broker IP: broker server ip
2. authToken:  `conf/master.ini` 文件中 `confModAuthToken` 字段配置的 token

然后上线Broker：

![Add Broker 2](img/inlong-add-broker-2.png)

#### 启动Broker
进入broker节点的 `bin` 目录下，执行以下命令启动Broker服务：

```bash
./inlong broker start
```

刷新页面可以看到 Broker 已经注册，当 `当前运行子状态` 为 `idle` 时， 可以增加topic。

![Add Broker 3](img/inlong-add-broker-3.png)

## 快速使用
### 新增 Topic
可以通过 web GUI 添加 Topic， 在 `Topic列表`页面添加，需要填写相关信息，比如增加`demo` topic：

![Add Topic 1](img/inlong-add-topic-1.png)

然后选择部署 Topic 的 Broker

![Add Topic 5](img/inlong-add-topic-5.png)

此时 Broker的 `可发布` 和 `可订阅` 依旧是灰色的


![Add Topic 6](img/inlong-add-topic-6.png)

需要在 `Broker列表`页面重载Broker 配置

![Add Topic 2](img/inlong-add-topic-2.png)

![Add Topic 3](img/inlong-add-topic-3.png)

之后就可以在页面查看Topic信息。

![Add Topic 4](img/inlong-add-topic-4.png)


### 运行Example
可以通过上面创建的`demo` topic来测试集群。

- 生产消息

将 `YOUR_MASTER_IP` 替换为实际的IP，然后运行producer:
```bash
install_path=/INSTALL_PATH/inlong-server-[inlong-VERSION]-bin
java -Dlog4j.configuration=file:${install_path}/conf/tools.log4j.properties  \
-Djava.net.preferIPv4Stack=true -cp  ${install_path}/lib/*:${install_path}/conf/* \
org.apache.inlong.example.MessageProducerExample \
YOUR_MASTER_IP:8000 demo 100000
```
如果能观察下如下日志，则表示数据发送成功：
```bash
[2020-06-04 11:19:04,405] INFO Send demo 1000 message, keyCount is 252 (org.apache.inlong.example.MessageProducerExample)
[2020-06-04 11:19:04,652] INFO Send demo 2000 message, keyCount is 502 (org.apache.inlong.example.MessageProducerExample)
[2020-06-04 11:19:05,096] INFO Send demo 3000 message, keyCount is 752 (org.apache.inlong.example.MessageProducerExample)
[2020-06-04 11:19:05,181] INFO Send demo 4000 message, keyCount is 1002 (org.apache.inlong.example.MessageProducerExample)
```
- 消费消息

将 `YOUR_MASTER_IP` 替换为实际的IP，然后运行Consumer:
```bash
install_path=/INSTALL_PATH/inlong-server-[inlong-VERSION]-bin
java -Xmx512m -Dlog4j.configuration=file:${install_path}/conf/tools.log4j.properties \
-Djava.net.preferIPv4Stack=true -cp ${install_path}/lib/*:${install_path}/conf/* \
org.apache.inlong.example.MessageConsumerExample \
YOUR_MASTER_IP:8000 demo demoGroup 3 1 1
```
如果能观察下如下日志，则表示数据被消费者消费到：

```bash
[2020-06-04 11:20:29,107] INFO Receive messages:270000 (org.apache.inlong.example.MsgRecvStats)
[2020-06-04 11:20:31,206] INFO Receive messages:272500 (org.apache.inlong.example.MsgRecvStats)
[2020-06-04 11:20:31,590] INFO Receive messages:275000 (org.apache.inlong.example.MsgRecvStats)
[2020-06-04 11:20:31,910] INFO Receive messages:277500 (org.apache.inlong.example.MsgRecvStats)
```

---


