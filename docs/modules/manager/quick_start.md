---
title: Deployment
---

## Environment Requirements
- Install and start MySQL 5.7+
- initialize database
  there is `sql/apache_inlong_manager.sql` in `inlong-manager-web` directory, load this file through the
  following command to complete the initialization of the table structure and basic data

  ```shell
  # initialize database：
  mysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_manager.sql
  ```

## Deploy manager

manager-web is a background service that interacts with the front-end page.

### Modify configuration

Go to the decompressed `inlong-manager-web` directory and modify the `conf/application.properties` file:

```properties
# manager-web service port number
server.port=8083

# The configuration file used is dev
spring.profiles.active=dev
```

The dev configuration is specified above, then modify the `conf/application-dev.properties` file:

1) Modify the database URL, username and password:

   ```properties
   spring.datasource.jdbc-url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8
   spring.datasource.username=DB_USER
   spring.datasource.password=DB_PASSWD
   ```

2) Configure the Message Queue Service, you could choose InLong TubeMQ or Apache Pulsar:

- Configuration TubeMQ cluster information if using TubeMQ
   ```properties
   # Manager address of TubeMQ cluster, used to create Topic
   cluster.tube.manager=http://127.0.0.1:8081
   # Broker used to manage TubeMQ
   cluster.tube.master=127.0.0.1:8000,127.0.0.1:8010
   # TubeMQ cluster ID
   cluster.tube.clusterId=1
   ```

- Configuration Pulsar cluster information if using Pulsar
   ```properties
   # Pulsar admin URL
   pulsar.adminUrl=http://127.0.0.1:8080,127.0.0.2:8080,127.0.0.3:8080
   # Pulsar broker address
   pulsar.serviceUrl=pulsar://127.0.0.1:6650,127.0.0.1:6650,127.0.0.1:6650
   # Default tenant of Pulsar
   pulsar.defaultTenant=public
   ```
  
3) Configure ZooKeeper clusters information:

   ```properties
   # ZK cluster, used to push the configuration of Sort
   cluster.zk.url=127.0.0.1:2181
   cluster.zk.root=inlong_hive
   # application name, that is the cluster-id parameter of InLong Sort
   sort.appName=inlong_app
   ```
### Start the service

Enter the decompressed directory, execute `sh bin/startup.sh` to start the service, and check the
log `tailf log/manager-web.log`. If a log similar to the following appears, the service has started successfully:

```shell
Started InLongWebApplication in 6.795 seconds (JVM running for 7.565)
```