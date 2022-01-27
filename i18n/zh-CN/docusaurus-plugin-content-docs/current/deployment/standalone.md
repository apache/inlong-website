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

在conf/standalone.conf文件中添加相关全局配置参数，然后一键初始化inlong各组件全局配置参数

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

启动脚本完成后，jps查看是否都有如下进程：

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

当所有组件都成功启动后，可以访问`http://localhost`，并使用以下默认账号登录:
```
User: admin
Password: inlong
```


