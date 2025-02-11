---
title: 单机部署
sidebar_position: 1
---
## 环境要求
- MySQL 5.7+
- [Apache Flink 1.13.x](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/try-flink/local_installation/) 或 [1.15.x](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/try-flink/local_installation/)
- [Docker](https://docs.docker.com/engine/install/) 19.03.1+
- Linux 或 Mac 环境

## 准备消息队列
InLong 当前支持以下消息队列，根据使用情况**选择其一**即可。
- [InLong TubeMQ](modules/tubemq/quick_start.md)
- [Apache Pulsar 2.8.x](https://pulsar.apache.org/docs/2.8.x/getting-started-home/)
- [Apache Kafka 2.x](https://kafka.apache.org/quickstart)

## 下载安装包
可以从 [下载页面](https://inlong.apache.org/download) 获取二进制包，或参考 [如何编译](../development/how_to_build.md) 编译需要的版本。

:::note
解压 `apache-inlong-[version]-bin.tar.gz` 和 `apache-inlong-[version]-sort-connectors.tar.gz`，并确保 `inlong-sort/connectors/` 目录包含 `sort-connector-[type]-[version].jar`。
:::

## DB 依赖
- 如果后端连接 MySQL 数据库，请下载 [mysql-connector-java-8.0.28.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar), 并将其放入以下目录：
```bash
inlong-agent/lib/
inlong-audit/lib/
inlong-manager/lib/
inlong-tubemq-manager/lib/
```

- 如果后端连接 PostgreSQL 数据库，不需要引入额外依赖。

## 配置
在`conf/inlong.conf`文件中根据实际情况配置参数，主要包括：
```properties
# 本地机器 IP
local_ip=
# 消息队列服务： pulsar 或者 kafka
mq_type=pulsar
# 数据库配置，需要使用 MySQL
spring_datasource_hostname=
spring_datasource_port=3306
spring_datasource_username=root
spring_datasource_password=inlong
# Flink REST server 地址
flink_rest_address=
# Flink REST server 端口
flink_rest_port=8081
```

## 启动
```shell
bin/inlong-daemon start standalone
```

## 集群初始化
当所有容器都成功启动后，可以访问 InLong Dashboard 地址`http://localhost`，并使用以下默认账号登录:
```properties
User: admin
Password: inlong
```

### 创建集群标签
页面点击 [集群管理]->[标签管理]->[新建]，指定集群标签名称和负责人：
![](img/create_cluster_tag.png)

:::caution
由于各个组件默认上报集群标签为 `default_cluster`，请勿使用其它名称。
:::

### 注册 MQ 集群

- 选择 1 : Apache Pulsar
页面点击 [集群管理]->[集群管理]->[新建集群]，注册 Pulsar 集群：
![](img/create_pulsar_cluster.png)

- 选择 2 : Apache Kafka
页面点击 [集群管理]->[集群管理]->[新建集群]，注册 Kafka 集群：
![](img/create_kafka_cluster.png)

:::note
集群标签选择刚创建的 `default_cluster`，然后配置 MQ 集群信息。
:::

## 使用
创建数据流可以参考 [Example](quick_start/data_ingestion/file_pulsar_clickhouse_example.md).

