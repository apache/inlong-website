---
title: 单机部署
sidebar_position: 1
---

## 环境要求

- ZooKeeper 3.5+
- MySQL 5.7+
- Flink 1.13.5
- Apache Pulsar 2.6+ (可选)
- Docker or Nginx

##  配置

在conf/standalone.conf文件中添加相关全局配置参数：

```ini
# Selection of message queue source: tubemq or pulsar
source_type=tubemq
# Selection of sort sink: hive or clickhouse
sink_type=hive
# MySQL service, IP, port, user and password
spring_datasource_hostname=MYSQL_HOSTNAME
spring_datasource_port=MYSQL_PORT
spring_datasource_username=MYSQL_USERNAME
spring_datasource_password=MYSQL_PASSWORD
###############################################################################
# zookeeper address
zkServerAddr=127.0.0.1:2181
###############################################################################
# tubemq (Optional)
tubemqMaster_hostName=YOU_LOCAL_IP
tubemqBroker_hostName=YOU_LOCAL_IP
TUBE_MANAGER_IP=YOU_LOCAL_IP
metaDataPath=/stage/meta_data
primaryPath=/stage/msg_data
###############################################################################
# pulsar (Optional)
###############################################################################
# Service address of pulsar (Required)
pulsar_adminUrl=http://pulsar_ip:web_port
# Pulsar broker address（Required）
pulsar_serviceUrl=pulsar://pulsar_ip:api_port
# Default tenant of Pulsar
pulsar_defaultTenant=public
###############################################################################
# local_ip(Required)
###############################################################################
local_ip=YOU_LOCAL_IP
###############################################################################
```

一键初始化inlong各组件全局配置参数

```shell
bin/init-config.sh 
```

## 启动

```shell
bin/inlong-daemon.sh start standalone
```

## 停止

```shell
bin/inlong-daemon.sh stop standalone
```

## 检查

1.启动脚本完成后，jps查看是否都有如下进程：

```
1393 QuorumPeerMain
24529 Application
23058 MasterStartup
23812 InLongWebApplication
2148 Jps
24631 CliFrontend
24908 AgentMain
23548 TubeMQManager
23149 BrokerStartup
```

2.如果用tubemq作为消息中间件，访问其提供的web页面，可以得到如图所示信息 ：

![1643034789289](https://user-images.githubusercontent.com/97139576/150918086-d7c35eab-bc9f-4e39-aa8a-7e018b88bf56.png)
3.是否能正常访问inlong web页面：

![1643034702665](https://user-images.githubusercontent.com/97139576/150918194-587f5e50-3c1c-47aa-893b-edf2df683a2f.png)

都没问题的话，至此inlong单机部署成功。



