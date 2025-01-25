---
title: DolphinScheduler 调度引擎示例
sidebar_position: 2
---

在下面的内容中，我们将通过一个完整的示例介绍如何在 Apache InLong 中集成第三方调度引擎 DolphinScheduler 来创建 Pulsar 到 MySQL 的离线数据同步。

## 环境部署

### 安装 InLong

在开始之前，我们需要安装 InLong 的全部组件，这里提供两种方式：

- [Docker 部署](deployment/docker.md)（推荐）
- [Bare Metal 部署](deployment/bare_metal.md)

### 添加 Connectors

下载与 Flink 版本对应的 [connectors](https://inlong.apache.org/zh-CN/downloads)，解压后将 `sort-connector-jdbc-[version]-SNAPSHOT.jar` 放在 `/inlong-sort/connectors/` 目录下。
> 当前 Apache InLong 的离线数据同步能力只支持 Flink-1.18 版本，所以请下载 1.18 版本的 connectors。

## 创建集群和数据目标
InLong 服务启动后，可以访问 InLong Dashboard 地址 `http://localhost`，并使用以下默认账号登录：
```properties
User: admin
Password: inlong
```
### 创建集群标签
![DolphinScheduler Create Cluster Tag](img/pulsar_mysql/dolphinscheduler/ds_create_cluster_tag.png)

### 注册 Pulsar 集群

![DolphinScheduler Create Pulsar Cluster](img/pulsar_mysql/dolphinscheduler/ds_create_pulsar_cluster.png)

### 创建数据目标

![DolphinScheduler Create Data Target](img/pulsar_mysql/dolphinscheduler/ds_create_data_target.png)

执行如下 Sql 语句：

```sql
CREATE TABLE sink_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## DolphinScheduler 初始化
### 部署 DolphinScheduler 

在使用 DolphinScheduler 作为调度引擎之前，请确保有可以提供服务的 DolphinScheduler 。如果您需要为自己部署一个 DolphinScheduler，请参考 [DolphinScheduler 官方文档](https://dolphinscheduler.apache.org/zh-cn)。

### 获取 DolphinScheduler 令牌
![DolphinScheduler Security](img/pulsar_mysql/dolphinscheduler/ds_security.png)

![DolphinScheduler Token Manager](img/pulsar_mysql/dolphinscheduler/ds_token_manager.png)

进入令牌管理器页面创建一个令牌供 InLong 进行访问。

![DolphinScheduler Token Generate](img/pulsar_mysql/dolphinscheduler/ds_token_generate.png)

按照图中步骤设置 token 参数，包括 [过期时间]、[用户]，并生成令牌。

![DolphinScheduler Token Copy](img/pulsar_mysql/dolphinscheduler/ds_token_copy.png)

### 配置 InLong Manager

对于第三方调度引擎，我们需要在 InLong Manager 中修改配置。

对于 DolphinScheduler 引擎，需要修改以下配置：

* `schedule.engine.inlong.manager.url` : 第三方调度引擎需要通过该 url 访问 InLong Manager。
* `schedule.engine.dolphinscheduler.url` : DolphinScheduler 部署的 url，一般格式为 http://{ip}:{port}/dolphinScheduler
* `schedule.engine.dolphinscheduler.token` : 上文中在 DolphinScheduler 令牌管理器页面中生成的 Token。

![InLong Manager Configuration](img/pulsar_mysql/dolphinscheduler/inlong_manager_conf.png)

完成这些操作后，重新启动 InLong Manager 以确保配置成功启用。

## 任务创建
### 创建同步任务
![DolphinScheduler Create Synchronization Task](img/pulsar_mysql/dolphinscheduler/ds_create_synchronization_task.png)

### 创建数据流组

在配置离线同步任务时，在选择调度引擎时选择 DolphinScheduler，然后配置其他参数。

![DolphinScheduler Task Configuration](img/pulsar_mysql/dolphinscheduler/ds_task_conf.png)

集群管理和相关数据节点的配置请参见 [Quartz 调度引擎示例](quartz_example.md)。

### 创建 DolphinScheduler 离线任务

审批数据流后，返回【数据同步】页面，等待任务配置成功，配置成功后，DolphinScheduler 将定期回调 InLong Manager，并由 InLong Manager 周期提交 Flink Batch Job 到 Flink 集群。

![DolphinScheduler Schedule Process](img/pulsar_mysql/dolphinscheduler/ds_schedule_process.png)

![DolphinScheduler Process Success](img/pulsar_mysql/dolphinscheduler/ds_process_success.png)

![DolphinScheduler Process Instance](img/pulsar_mysql/dolphinscheduler/ds_process_instance.png)

查看 DolphinScheduler 任务实例日志，输出如下日志表示配置成功。

![DolphinScheduler Schedule Success](img/pulsar_mysql/dolphinscheduler/ds_schedule_success.png)

## 测试数据

### 发送数据

通过 Pulsar SDK 生产数据写入的 Pulsar topic 中，示例如下：

```java
// 创建 pulsar client 和 producer
PulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();
Producer<byte[]> producer = pulsarClient.newProducer().topic("public/default/test").create();

// 发送消息
for (int i = 0; i < 10000; i++) {
    // 字段分隔符为 |
    String msgStr = i + "|msg-" + i;
    MessageId msgId = producer.send(msgStr.getBytes(StandardCharsets.UTF_8));
    System.out.println("Send msg : " + msgStr + " with msgId: " + msgId);
}
```

### 数据验证

然后进入 Mysql，查看库表数据，可以看到数据已经同步到 MySQL 中。

![MySQL Result](img/pulsar_mysql/dolphinscheduler/mysql_result.png)
