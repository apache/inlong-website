---
title: Deployment
sidebar_position: 2
---

## Environment Requirements

- Install and start MySQL 5.7+
- initialize database
  there is `sql/apache_inlong_manager.sql` in `inlong-manager` directory, load this file through the
  following command to complete the initialization of the table structure and basic data

  ```shell
  # initialize database：
  mysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_manager.sql
  ```

## Add Dependencies
- Download Sort [Connector Binary file](https://inlong.apache.org/download/main), and unzip it into `inlong-sort/connectors` directory.
- If using MySQL database, please download [mysql-connector-java-8.0.27.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar) and put it in the `lib/` directory.
- If you use PostgreSQL database, you don't need to download additional dependencies.

## Update Configuration

Go to the decompressed `inlong-manager` directory and modify the `conf/application.properties` file:

```properties
# manager service port number
server.port=8083

# The configuration file used is dev
spring.profiles.active=dev
```

The dev configuration is specified above, then modify the `conf/application-dev.properties` file:
> If test or prod is specified, modify the corresponding application-xxx.properties file.

```properties
spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8
spring.datasource.druid.username=root
spring.datasource.druid.password=inlong
```

## Configure the Flink Plugin

The InLong Manager can start the Sort task, you need to configure the Flink environment first. The configuration file is `plugins/flink-sort-plugin.properties`.

```properties
# Flink host split by coma if more than one host, such as 'host1,host2'
flink.rest.address=127.0.0.1
# Flink port
flink.rest.port=8081
# Flink job manager port
flink.jobmanager.port=6123
# InLong Audit Proxy Address
metrics.audit.proxy.hosts=127.0.0.1:10081
```

## Start Application

```shell
bash +x bin/startup.sh
```

## Register MQ Cluster

### Pulsar Cluster

If you use Pulsar as the message queue for data cache, you need to add its configuration to InLong-Manager:

Open the Inlong-Dashboard page (the default is <http://127.0.0.1>), and select to add a Pulsar cluster on the [Clusters] tab:

![](img/pulsar_cluster.png)

Click the [Create] button, and fill in the required information such as cluster name, cluster tag, responsible person, AdminUrl, ServiceUrl and default tenant in the pop-up box to save.

> Note: [Cluster Tag] is a logical concept. Tags with the same name will be regarded as the same cluster.
>
> For example, the DataProxy cluster and the Pulsar cluster with the same cluster tag belong to the same cluster.

Fill in the example:

![](img/pulsar_cluster_save.png)

### TubeMQ Cluster

If you use InLong TubeMQ as the message queue for data cache, you need to add its configuration to InLong-Manager:

Similar to the above entry for adding a Pulsar cluster, the filling example is as follows:

![](img/tube_cluster_save.png)

## (Optional) Enable OpenAPI Authentication

### Enable Authentication
Manager supports the option to authenticate client component access to its open APIs. To enable authentication modify `conf/application.properties`：

```properties
# Manager open api authentication enabled
openapi.auth.enabled=true
```

### Authentication Configuration
Components that access manager must be authenticated by secret id and secret key if enabled, for example (please configure user's own instead of the example) :

Modify `agent.properties` in agent's conf directory:
```properties
agent.manager.auth.secretId=admin
agent.manager.auth.secretKey=87haw3VYTPqK5fK0
```

Modify `common.properties` in dataproxy's conf directory:
```properties
manager.auth.secretId=admin
manager.auth.secretKey=87haw3VYTPqK5fK0
```

### Authentication Key Generation
Admin user can log in inlong dashboard to allocate secret ids and keys: **System->User->Create**.

