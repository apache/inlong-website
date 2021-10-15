---
title: Build && Deployment
---

# 1. Environmental preparation
- Install and start MySQL 5.7+, copy the `doc/sql/apache_inlong_manager.sql` file in the inlong-manager module to the
  server where the MySQL database is located (for example, copy to `/data/` directory), load this file through the
  following command to complete the initialization of the table structure and basic data:

  ```shell
  # Log in to the MySQL server by username and password:
  mysql -u xxx -p xxx
  ...
  # Create database
  CREATE DATABASE IF NOT EXISTS apache_inlong_manager;
  USE apache_inlong_manager;
  # Load the above SQL file through the source command:
  mysql> source /data/apache_inlong_manager.sql;
  ```

- Refer to [Compile and deploy TubeMQ](https://inlong.apache.org/zh-cn/docs/modules/tubemq/quick_start.html) to install
  and start the Tube cluster;

- Refer
  to [Compile and deploy TubeMQ Manager](https://inlong.apache.org/zh-cn/docs/modules/tubemq/tubemq-manager/quick_start.html)
  , install and start TubeManager.

# 2. Deploy and start manager-web

**manager-web is a background service that interacts with the front-end page.**

## 2.1 Prepare installation files

All installation files at `inlong-manager-web` directory.

## 2.2 Modify configuration

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
   spring.datasource.username=xxxxxx
   spring.datasource.password=xxxxxx
   ```

2) Modify the connection information of the Tube and ZooKeeper clusters, among which `cluster.zk.root` suggests using
   the default value:

   ```properties
   # Manager address of Tube cluster, used to create Topic
   cluster.tube.manager=http://127.0.0.1:8081
   # Broker used to manage Tube
   cluster.tube.master=127.0.0.1:8000,127.0.0.1:8010
   # Tube cluster ID
   cluster.tube.clusterId=1

   # ZK cluster, used to push the configuration of Sort
   cluster.zk.url=127.0.0.1:2181
   cluster.zk.root=inlong_hive
   
   # Sort application name, that is, set the cluster-id parameter of Sort, the default value is "inlong_app"
   sort.appName=inlong_app
   ```

## 2.3 Start the service

Enter the decompressed directory, execute `sh bin/startup.sh` to start the service, and check the
log `tailf log/manager-web.log`. If a log similar to the following appears, the service has started successfully:

```shell
Started InLongWebApplication in 6.795 seconds (JVM running for 7.565)
```

# 3. Service access verification

Verify the manager-web service:

Visit address: <http://[manager_web_ip]:[manager_web_port]/api/inlong/manager/doc.html#/home>
