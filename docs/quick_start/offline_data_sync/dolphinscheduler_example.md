---
title: Use DolphinScheduler third-party scheduling engine
sidebar_position: 2
---

In the following content, we will introduce how to use DolphinScheduler, a third-party schedule engine in Apache InLong to create offline data synchronization.

## Deployment

### Install InLong

Before we begin, we need to install InLong and a usable DolphinScheduler. Here we provide two ways:

- [Docker Deployment](deployment/docker.md) (Recommended)
- [Bare Metal Deployment](deployment/bare_metal.md)

### Add Connectors

Download the [connectors](https://inlong.apache.org/downloads/) corresponding to Flink version, and after decompression, place `sort-connector-jdbc-[version]-SNAPSHOT.jar` in `/inlong-sort/connectors/` directory.

> Currently, Apache InLong's offline data synchronization capability only supports Flink-1.18, so please download the 1.18 version of connectors.

### Operations on DolphinScheduler

Before using DolphinScheduler as your scheduling engine, please make sure you have a working DolphinScheduler on hand. If you need to deploy a DolphinScheduler for yourself, please refer to the [DolphinScheduler Official Document](https://dolphinscheduler.apache.org/zh-cn)

![DolphinScheduler Security](img/pulsar_mysql/dolphinscheduler/ds_security.png)

![DolphinScheduler Token Manager](img/pulsar_mysql/dolphinscheduler/ds_token_manager.png)

Go into Token Manager page to create a token for InLong to access

![DolphinScheduler Token Generate](img/pulsar_mysql/dolphinscheduler/ds_token_generate.png)

Set parameters for the token according to the steps in the figure, include [Expiration Time], [User], then generate a token.

![DolphinScheduler Token Copy](img/pulsar_mysql/dolphinscheduler/ds_token_copy.png)

### Modify configuration in InLong Manager

For third-party scheduling engine, we need to modify configurations in manager

For DolphinScheduler engine there are following configurations need to be modified:

* `schedule.engine.inlong.manager.url` : Third-party scheduling engine needs to access the inlong manager through this url
* `schedule.engine.dolphinscheduler.url` : DolphinScheduler deployment url, general format is http://{ip}:{port}/dolphinscheduler
* `schedule.engine.dolphinscheduler.token` : Token you just generated in Token Manager of DolphinScheduler

![InLong Manager Configuration](img/pulsar_mysql/dolphinscheduler/inlong_manager_conf.png)

After doing this, restart the InLong Manager to ensure the configuration is enabled.

### Use DolphinScheduler in offline synchronization

During configure the offline synchronization task, choose DolphinScheduler when selecting the scheduling engine, then configure other parameters

![DolphinScheduler Task Configuration](img/pulsar_mysql/dolphinscheduler/ds_task_conf.png)

For details about how to manage clusters and configure data nodes, see [Use Quartz built-in scheduling engine](quartz_example.md)

After approval data flow, return to the [Synchronization] page and wait for the task configuration to succeed. Once configured successfully, the DolphinScheduler will periodically calls back InLong to synchronize offline data and the Manager will periodically submit Flink Batch Jobs to the Flink cluster.

![DolphinScheduler Schedule Process](img/pulsar_mysql/dolphinscheduler/ds_schedule_process.png)

![DolphinScheduler Process Success](img/pulsar_mysql/dolphinscheduler/ds_process_success.png)

![DolphinScheduler Process Instance](img/pulsar_mysql/dolphinscheduler/ds_process_instance.png)

View the DolphinScheduler task instance logs. The following logs indicate that the configuration is successful

![DolphinScheduler Schedule Success](img/pulsar_mysql/dolphinscheduler/ds_schedule_success.png)

## Test Data

### Sending Data

Use the Pulsar SDK to produce data into the Pulsar topic. An example is as follows:

```java
        // Create Pulsar client and producer
        PulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();
        Producer<byte[]> producer = pulsarClient.newProducer().topic("public/default/test").create();

        // Send messages
        for (int i = 0; i < 10000; i++) {
            // Field separator is |
            String msgStr = i + "|msg-" + i;
            MessageId msgId = producer.send(msgStr.getBytes(StandardCharsets.UTF_8));
            System.out.println("Send msg : " + msgStr + " with msgId: " + msgId);
        }
```

### Data Validation

Then enter MySQL to check the data in the table:

![MySQL Result](img/pulsar_mysql/dolphinscheduler/mysql_result.png)
