---
title: Deployment
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

## Configuration

Go to the decompressed `inlong-manager` directory and modify the `conf/application.properties` file:

```properties
# manager service port number
server.port=8083

# The configuration file used is dev
spring.profiles.active=dev
```

The dev configuration is specified above, then modify the `conf/application-dev.properties` file:

1) Modify the database URL, username and password:

   ```properties
   spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8
   spring.datasource.druid.username=root
   spring.datasource.druid.password=inlong
   ```
 
2) Configure ZooKeeper clusters information:

   ```properties
   # ZK cluster, used to push the configuration of Sort
   cluster.zk.url=127.0.0.1:2181
   cluster.zk.root=inlong_hive
   # application name, that is the cluster-id parameter of InLong Sort
   sort.appName=inlong_app
   ```

## Dependencies
- If the backend database is MySQL, please download [mysql-connector-java-8.0.26.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.26/mysql-connector-java-8.0.26.jar) and put it into `lib/` directory.

- If the backend database is PostgreSQL, there's no need for additional dependencies.

## Add Message Queue
You can choose InLong TubeMQ or Apache Pulsar as Message Queue Service:
- If using TubeMQ, the SQL statement is:

```sql
INSERT INTO apache_inlong_manager.third_party_cluster 
(name, type, url, ext_params, mq_set_name, in_charges, creator)
VALUES 
('tube_cluster', 'TUBE', 'tubemq_master_list', 'tube_config', 'default_set_name', 'admin', 'admin');
```

- `tubemq_master_list`: the master address of your TubeMQ cluster. If there are multiple master nodes, addresses is separated by comma, such as `127.0.0.1:8000,127.0.0.1:8010`.
- `tube_config`: the other info of your cluster. It is described in JSON format, for example:

```json
{
  "cluster_tube_manager": "http://127.0.0.1:8081",
  "cluster_tube_clusterId": "1"
}
```

- If using Pulsar, the SQL statement is:

```sql
INSERT INTO apache_inlong_manager.third_party_cluster 
(name, type, url, token, ext_params, mq_set_name, in_charges, creator)
VALUES 
('pulsar_cluster', 'PULSAR', 'puslar_service_url', 'pulsar_token', 'pulsar_config', 'default_set_name', 'admin', 'admin');
```

- `puslar_service_url`: the address of your Pulsar cluster, such as `pulsar://127.0.0.1:6650,127.0.0.1:6650,127.0.0.1:6650`.
- `pulsar_config`: the other info of your cluster. It is described in JSON format, for example:

```json
{
  "pulsar_adminUrl": "http://127.0.0.1:8080,127.0.0.2:8080,127.0.0.3:8080"
}
```

## Start

Enter the decompressed directory, execute `sh bin/startup.sh` to start the service, and check the
log `tailf log/manager-web.log`. If a log similar to the following appears, the service has started successfully:

```shell
Started InLongWebApplication in 6.795 seconds (JVM running for 7.565)
```