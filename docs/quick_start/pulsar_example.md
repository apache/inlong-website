---
title: Pulsar Example
sidebar_position: 2
---

Apache InLong has increased the ability to access data through Apache Pulsar, taking full advantage of Pulsar's technical advantages that are different from other MQ, and providing complete solutions for data integration scenarios with higher data quality requirements such as finance and billing.
In the following content, we will use a complete example to introduce Apache Pulsar to access data through Apache InLong.

![Create Group](img/pulsar-arch.png)

## Install Pulsar
Please refer to [Official Installation Guidelines](https://pulsar.apache.org/docs/en/standalone/).

## Install Hive
Hive is the necessary component. If you don't have Hive in your machine, we recommand using Docker to install it. Details can be found [here](https://github.com/big-data-europe/docker-hive).

> Note that if you use Docker, you need to add a port mapping `8020:8020`, because it's the port of HDFS DefaultFS, and we need to use it later.

## Install InLong
Before we begin, we need to install InLong. Here we provide two ways:
1. Install InLong with Docker by according to the [instructions here](deployment/docker.md).(Recommanded)
2. Install InLong binary according to the [instructions here](deployment/bare_metal.md).

Unlike InLong TubeMQ, if you use Apache Pulsar, you need to configure Pulsar cluster information 
in the Manager component installation. The format is as follows：
```
# Pulsar admin URL
pulsar.adminUrl=http://127.0.0.1:8080,127.0.0.2:8080,127.0.0.3:8080
# Pulsar broker address
pulsar.serviceUrl=pulsar://127.0.0.1:6650,127.0.0.1:6650,127.0.0.1:6650
# Default tenant of Pulsar
pulsar.defaultTenant=public
```

## Create a data ingestion
### Configure data streams group information
![](img/pulsar-group.png)
When creating data ingestion, the message middleware that the data stream group can use is Pulsar, 
and other configuration items related to Pulsar include:
- Queue module: Parallel or Serial, when selecting parallel, you can set the number of topic partitions
- Write quorum: Number of copies to store for each message
- Ack quorum: Number of guaranteed copies (acks to wait before write is complete)
- retention time: retention time for the consumed message
- ttl: The default Time to Live for message
- retention size: retention size for the consumed message

### Configure data stream
![](img/pulsar-stream.png)
When configuring the message source, the file path in the file data source can be referred to [file-agent-configuration](https://inlong.apache.org/docs/next/modules/agent/file#file-agent-configuration).

### Configure data information
![](img/pulsar-data.png)

### Configure Hive cluster
Save Hive cluster information, click "Ok" to submit.
![](img/pulsar-hive.png)

## Data ingestion Approval
Enter **Approval** page, click **My Approval**, abd approve the data ingestion application. After the approval is over, 
the topics and subscriptions required for the data stream will be created in the Pulsar cluster synchronously.
We can use the command-line tool in the Pulsar cluster to check whether the topic is created successfully:
![](img/pulsar-topic.png)

## Configure File Agent
When configuring the file agent, you must create the file in the directory specified when creating the data ingestion:
```
touch /data/test_file.txt;
```

Write data to the file according to the data source format when creating the data stream:
```
echo -e "1|test\n2|test\n" >> /data/test_file.txt
```

## Data Check
Finally, we log in to the Hive cluster and use Hive SQL commands to check 
whether data is successfully inserted in the `test_stream` table.

## Troubleshooting
If data is not correctly written to the Hive cluster, you can check whether the `DataProxy` and `Sort` related information are synchronized:
- Check whether the topic information corresponding to the data stream is correctly written in the `conf/topics.properties` folder of `InLong DataProxy`:
```
b_test_group/test_stream=persistent://public/b_test_group/test_stream
```

- Check whether the configuration information of the data stream is successfully pushed in 
- the ZooKeeper monitored by `InLong Sort`：
```
get /inlong_hive/dataflows/{{sink_id}}
```
