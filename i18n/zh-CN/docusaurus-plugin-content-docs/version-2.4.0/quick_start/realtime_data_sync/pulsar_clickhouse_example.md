---
title: Pulsar 到 ClickHouse 示例
sidebar_position: 4
---

在下面的内容中，我们将通过一个完整的示例介绍如何使用 Apache InLong 创建 Pulsar -> ClickHouse 数据同步。

## 环境部署
### 安装 InLong

在开始之前，我们需要安装 InLong 的全部组件，这里提供两种方式：
- [Docker 部署](deployment/docker.md)（推荐）
- [Bare Metal 部署](deployment/bare_metal.md)

### 添加 Connectors

下载与 Flink 版本对应的 [connectors](https://inlong.apache.org/zh-CN/downloads)，解压后将 `sort-connector-jdbc-[version]-SNAPSHOT.jar` 放在 `/inlong-sort/connectors/` 目录下。

### 安装 ClickHouse
```shell
docker run -d --rm --net=host --name clickhouse -e CLICKHOUSE_USER=admin -e CLICKHOUSE_PASSWORD=inlong -e CLICKHOUSE_DEFAULT_ACCESS_MANAGEMENT=1 clickhouse/clickhouse-server:22.8
```

## 集群初始化
当所有容器都成功启动后，可以访问 InLong Dashboard 地址 http://localhost，并使用以下默认账号登录:
```properties
User: admin
Password: inlong
```

### 注册 ClickHouse 数据节点

页面点击 【数据节点】→【新建】，新增 ClickHouse 数据节点：

![Create Clickhouse Datanode](img/pulsar_clickhouse/clickhouse_datanode.png)

## 任务创建
### 新建数据流组

页面点击【数据同步】→【新建数据同步】，填写 数据流组 ID 和 SteamID：

![Create Group_Stream](img/pulsar_clickhouse/group_stream.png)

### 新建数据源

数据来源中 点击 【新建】→【Pulsar】，配置数据源名称、地址、用户密码以及库表（test.source_table）信息等。

![Create Source](img/pulsar_clickhouse/source.png)


- 注：请预先创建 Pulsar tenant，namespace 和 topic。


### 新建数据目标

数据目标中 点击 【新建】→【ClickHouse】，配置名称、库表、已创建的 ck 数据节点。数据同步不支持自动创建数据目标表，所以需要手动创建。

![Create Sink](img/pulsar_clickhouse/sink.png)

### 配置字段信息

分别在 【源字段】 和 【目标字段】中配置 Schema 映射信息，完成后点击 【提交审批】

![Create Fields](img/pulsar_clickhouse/sink_fields.png)

### 审批数据流

页面点击【审批管理】->【我的审批】->【详情】->【通过】

![Approve](img/pulsar_clickhouse/approve.png)

返回 【数据同步】页面，等待任务配置成功

## 测试数据
### 发送数据

进入 pulsar 容器
```shell
docker exec -it pulsar /bin/bash
```

插入 1000 条数据
```shell
#!/bin/bash

# Pulsar info
TENANT="public"
NAMESPACE="default"
TOPIC="test"

# Insert data in a loop
for ((i=1; i<=1000; i++))
do
# Generate data
id=$i
name="name_$i"

    # Build one message
    message="$id|$name"

    # Produce message to pulsar
    bin/pulsar-client produce persistent://$TENANT/$NAMESPACE/$TOPIC --messages $message
done
```

### 数据验证

然后进入 ClickHouse 容器，查看库表数据：

![Source_data](img/pulsar_clickhouse/sink_data.png)

## 常见问题
ClickHouse 写入数据失败，可以在 Flink 页面查看报错，并检查所使用的用户的权限以及表引擎