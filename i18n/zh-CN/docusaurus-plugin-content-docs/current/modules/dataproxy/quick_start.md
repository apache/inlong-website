---
title: 安装部署
sidebar_position: 2
---

所有的安装文件都在 `inlong-dataproxy` 目录下。

## 配置
### 配置 InLong-Manager 地址
配置文件：`conf/common.properties`：
```
# local IP
proxy.local.ip=127.0.0.1
# manager 地址
manager.hosts=127.0.0.1:8083
# audit proxy 地址
audit.proxys=127.0.0.1:10081
```

## 启动
```
# 默认使用 Pulsar 来缓存数据，加载 dataproxy-pulsar.conf 配置文件
bash +x bin/dataproxy-start.sh
# 或者
bash +x bin/dataproxy-start.sh pulsar

# 如果使用 Inlong TubeMQ 来缓存数据
# bash +x bin/dataproxy-start.sh tubemq

# 如果使用 Kafka 来缓存数据
# bash +x bin/dataproxy-start.sh kafka
```

## 检查
```
telnet 127.0.0.1 46801
```