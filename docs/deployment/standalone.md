# Inlong单机部署

# 1.环境要求

部署单机inlong，要求使用者提前安装好以下组件：

- ZooKeeper 3.5+
- MySQL 5.7+
- Flink 1.13.5
- Apache Pulsar 2.6+ (可选)
- Docker or Nginx (用于web部署)

# 2.编译inlong源文件

编译inlong源文件 [如何编译 | Apache Inlong](https://inlong.apache.org/zh-CN/docs/next/quick_start/how_to_build) ，得到编译后的文件apache-inlong-*-incubating-bin.tar.gz，

解压编译好的二进制文件

```shell
tar -zxvf  apache-inlong-*-incubating-bin.tar.gz ./
```

可以得到以下模块：

```txt
inlong-agent
inlong-dataproxy
inlong-manager-web
inlong-sort
inlong-tubemq-manager
inlong-tubemq-server 
```

# 3.单机部署

## **3.1.引入6个重要文件**

1.全局公共参数配置文件，相关参数用户可自定义inlongConfig.properties；
2.初始化各组件全局配置脚本 initInlongConfig.sh；
3.Inlong tubemq master启动脚本 startTumqMaster.sh；
4.Inlong tubemq  broker和manager 初始化、启动脚本 startTumqBrokerAndManager.sh；
5.inlong各组件一键启动脚本 startInlongCluster.sh；
6.inlong各组件一键停止脚本 stopInlongCluster.sh。

注意：6个文件放置在项目根目录。

## 3.2  部署启动

### 3.2.1.保证系统正常启动了如下组件：

```
mysql
zookeeper
flink
pulsar(可选)
docker or nginx
```

### 3.2.2.初始化inlong各组件全局配置（部分参数需要用户自己配置inlongConfig.properties ）

```shell
cd apache-inlong-*-incubating
./initInlongConfig.sh
```

### 3.2.3.若选择tubemq作为消息中间件，单独启动tubemq集群

#### 3.2.3.1.启动tubemq master 

```shell
./startTumqMaster.sh
```

#### 3.2.3.2. 在管控台新增、上线broker

访问Master的管控台 `http://YOUR_MASTER_IP:port` ，页面可查则表示master已成功启动: ![TubeMQ Console GUI](https://inlong.apache.org/zh-CN/assets/images/tubemq-console-gui-123e6fb030a5e6ebadf15962dcd5d284.png)

Broker启动前，首先要在Master上配置Broker元数据，增加Broker相关的管理信息。在`Broker List` 页面, `Add Single Broker`，然后填写相关信息:

![Add Broker 1](https://inlong.apache.org/zh-CN/assets/images/tubemq-add-broker-1-50044a59203725d7f55554cb551bed58.png)

需要填写的内容包括：

1. broker IP: broker server ip
2. authToken: initInlongConfig.properties文件中 `confModAuthToken` 字段配置的 token

然后上线Broker： ![Add Broker 2](https://inlong.apache.org/zh-CN/assets/images/tubemq-add-broker-2-ab5859b782891dbcb816f00c8ad87a58.png)

#### 3.2.3.3 启动tubemq 中的broker 和manager

```
./startTumqBrokerAndManager.sh
```

 刷新页面可以看到 Broker 已经注册，当 `当前运行子状态` 为 `idle` 时， 可以增加topic: ![Add Broker 3](https://inlong.apache.org/zh-CN/assets/images/tubemq-add-broker-3-e1425119a14c1590281eea32e4f58f5f.png) 

### 3.2.4.inlong一键启动

```shell
./startInlongCluster.sh
```

## **3.3 检查**

```
jps 查看各组件进程
1393 QuorumPeerMain
25121 TaskManagerRunner
24529 Application
23058 MasterStartup
23812 InLongWebApplication
2148 Jps
24629 StandaloneSessionClusterEntrypoint
24631 CliFrontend
24908 AgentMain
23548 TubeMQManager
23149 BrokerStartup
```
