---
title: Example of Airflow Offline Synchronization
sidebar_position:  3
---
In the following content, a complete example will be used to introduce how to create Airflow scheduling tasks using Apache InLong and complete offline data synchronization from Pulsar to MySQL.

## Deployment
### Install InLong

Before we begin, we need to install InLong. Here we provide two ways:
- [Docker Deployment](deployment/docker.md) (Recommended)
- [Bare Metal Deployment](deployment/bare_metal.md)

### Add Connectors

Download the [connectors](https://inlong.apache.org/downloads/) corresponding to Flink version, and after decompression, place `sort-connector-jdbc-[version]-SNAPSHOT.jar` in `/inlong-sort/connectors/` directory.
> Currently, Apache InLong's offline data synchronization capability only supports Flink-1.18, so please download the 1.18 version of connectors.

## Create Clusters And Data Target

### Create Cluster Label
![airflow_create_cluster_labels](img/pulsar_mysql/airflow/airflow_create_cluster_labels.png)

### Register Pulsar Cluster

![airflow_create_pulsar_cluster](img/pulsar_mysql/airflow/airflow_create_pulsar_cluster.png)

### Create Data Target

![airflow_create_data_target](img/pulsar_mysql/airflow/airflow_create_data_target.png)

Execute the following SQL statement:

```mysql
CREATE TABLE sink_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Airflow Initialization

### Get Initial DAG

They can be obtained from [Inlong](https://github.com/apache/inlong).

![airflow_get_DAGs](img/pulsar_mysql/airflow/airflow_get_DAGs.jpg)

> Airflow does not provide an API for DAG creation, so two original DAGs are required. `dag_creator` is used to create offline tasks, and `dag_cleaner` is used to clean up offline tasks regularly.

### Create Initial DAG

Place the DAG file in the Airflow default DAG directory and wait for a while. The Airflow scheduler will scan the directory and load the DAG:
![airflow_original_DAG](img/pulsar_mysql/airflow/airflow_original_DAG.png)

### Airflow REST API

By default, Airflow will reject all REST API requests. Please refer to the [Airflow official documentation](https://airflow.apache.org/docs/apache-airflow-providers-fab/stable/auth-manager/api-authentication.html) for configuration.

### Inlong Manager Configuration

Modify the configuration file according to the configuration file requirements and restart Inlong Manager.
```properties
# Inlong Manager URL accessible by the scheduler
schedule.engine.inlong.manager.url=http://inlongManagerIp:inlongManagerPort
# Management URL for Airflow
schedule.engine.airflow.baseUrl=http://airflowIP:airflowPort
# Username and password for Airflow REST API authentication
schedule.engine.airflow.username=airflow
schedule.engine.airflow.password=airflow
# Connection used to save Inlong Manager authentication information
schedule.engine.airflow.connection.id=inlong_connection
# The ids of the two original DAGs
schedule.engine.airflow.cleaner.id=dag_cleaner
schedule.engine.airflow.creator.id=dag_creator
```

## Offline Synchronization Task Creation
### Create Synchronization Task

![airflow_create_synchronization_task](img/pulsar_mysql/airflow/airflow_create_synchronization_task.png)
### Create Data Stream Group
![airflow_data_stream_group](img/pulsar_mysql/airflow/airflow_data_stream_group.png)

Please refer to the following steps: [Use Quartz built-in scheduling engine](./quartz_example.md)
### Create Airflow Offline Task

After approval and configuration, Inlong Manager will trigger `dag_creator` through the Airflow API to create the offline task DAG:

![airflow_create_task_DAG.png](img/pulsar_mysql/airflow/airflow_create_task_DAG.png)

![airflow_create_task_DAG_result.png](img/pulsar_mysql/airflow/airflow_create_task_DAG_result.png)

> Offline task DAG may not be scheduled immediately, because Airflow will scan DAG files regularly and add them to the schedule, so it may take some time.

The offline task execution results are as follows:

![airflow_DAG_task_result.png](img/pulsar_mysql/airflow/airflow_DAG_task_result.png)

> Airflow will periodically call the interface provided by Inlong Manager to submit Flink tasks according to the configuration in the `Create Data Stream Group` section. This is why the authentication information of Inlong Manager needs to be saved in the `Inlong Manager Configuration` section.

## Test Data
### Send Data

The example of using Pulsar SDK to write production data to a Pulsar topic is as follows:
```java
// Create pulsar client and producer
PulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();
Producer<byte[]> producer = pulsarClient.newProducer().topic("public/default/test").create();

// Send a message
for (int i = 0; i < 10000; i++) {
    // The field separator is |
    String msgStr = i + "|msg-" + i;
    MessageId msgId = producer.send(msgStr.getBytes(StandardCharsets.UTF_8));
    System.out.println("Send msg : " + msgStr + " with msgId: " + msgId);
}
```

### Data Verification

Then enter Mysql and check the database table data. You can see that the data has been synchronized to MySQL.

![airflow_synchronization_result](img/pulsar_mysql/airflow/airflow_synchronization_result.png)
