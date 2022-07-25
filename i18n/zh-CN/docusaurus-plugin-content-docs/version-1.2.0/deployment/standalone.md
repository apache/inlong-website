---
title: 单机部署
sidebar_position: 1
---

## 环境要求
- MySQL 5.7+
- Flink 1.13.5
- [Docker](https://docs.docker.com/engine/install/) 19.03.1+

## 准备消息队列
InLong 当前支持以下消息队列，根据使用情况**选择其一**即可。
- [InLong TubeMQ](modules/tubemq/quick_start.md)
- [Apache Pulsar 2.8.x](https://pulsar.apache.org/docs/en/2.8.1/standalone/)

## 下载安装包
可以从 [下载页面](https://inlong.apache.org/download) 获取二进制包，或参考 [如何编译](quick_start/how_to_build.md) 编译需要的版本。

解压 `apache-inlong-[version]-bin.tar.gz` 和 `apache-inlong-[version]-sort-connectors.tar.gz`，并确保 `inlong-sort/connectors/` 目录包含 Connectors。

## DB 依赖
- 如果后端连接 MySQL 数据库，请下载 [mysql-connector-java-8.0.27.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar), 并将其放入以下目录：
```bash
inlong-agent/lib/
inlong-audit/lib/
inlong-manager/lib/
inlong-tubemq-manager/lib/
```

- 如果后端连接 PostgreSQL 数据库，不需要引入额外依赖。

## 配置
在`conf/inlong.conf`文件中根据实际情况配置参数。

## 启动
```shell
bin/inlong-daemon start standalone
```

## 注册消息队列
可参考 [注册 MQ 集群](https://inlong.apache.org/zh-CN/docs/next/modules/manager/quick_start/#%E6%B3%A8%E5%86%8C-mq-%E9%9B%86%E7%BE%A4) 向 Manger 注册消息队列服务。

## 检查
当所有组件都成功启动后，可以访问`http://localhost`，并使用以下默认账号登录:
```shell
user: admin
password: inlong
```


