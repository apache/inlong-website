---
title: 安装部署
sidebar_position: 2
---

所有的安装文件都在 `inlong-dataproxy` 目录下。

## 配置
### 配置 Manager 和 Audit 地址
配置文件：`conf/common.properties`：
```properties
# local IP
proxy.local.ip=127.0.0.1
# manager 地址
manager.hosts=127.0.0.1:8083
# audit proxy 地址
audit.proxys=127.0.0.1:10081
```

## 启动
```shell
# 如果使用 Pulsar 或 Kafka 来缓存数据
bash +x bin/dataproxy-start.sh
# 如果使用 InLong TubeMQ 来缓存数据
# bash +x bin/dataproxy-start.sh tubemq
```

## 检查
```shell
telnet 127.0.0.1 46801
```