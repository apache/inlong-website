---
Quick start-Apache inlong-manager
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

# 2. Deploy and start manager-api

**manager-api is a background service that interacts with the front-end page.**

## 2.1 Prepare installation files
All installation files at `inlong-manager-api` directory.

## 2.2 Modify configuration

Go to the decompressed `manager-api` directory and modify the `conf/application.yml` file:

```yaml
# manager-api service port number
server:
  port: 8083

# The configuration file used is dev
spring:
  profiles:
    active: dev
```

The dev configuration is specified above, then modify the `conf/application-dev.yml` file:

1) Modify the database URL, user name and password:

   ```yaml
   spring:
     datasource:
       jdbc-url: jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true
       username: xxxxxx
       password: xxxxxx
   ```

2) Modify the connection information of the Tube and ZooKeeper clusters, among which `cluster.zk.root` suggests to use
   the default value:

   ```yaml
   cluster:
     tube:
       manager: http://127.0.0.1:8081 # Manager address of Tube cluster, used to create Topic
       master: 127.0.0.1:8000,127.0.0.1:8010 # Broker used to manage Tube
       clusterId: 1 # Tube cluster ID
     zk:
       url: 127.0.0.1:2181
       root: inlong_hive
   sort.appName: inlong_app # The app name for Sort, default is 'inlong_app'
   ```

## 2.3 Start the service

Enter the decompressed directory, execute `sh bin/startup.sh` to start the service, and check the
log `tailf log/manager-api.log`. If a log similar to the following appears, the service has started successfully:

```shell
Started InLongApiApplication in 6.795 seconds (JVM running for 7.565)
```

# 3. Deploy and start manager-openapi

**manager-openapi is a service that provides interactive interfaces for other components (such as Agent and DataProxy)
.**

## 3.1 Prepare installation files
All installation files at `inlong-manager-openapi` directory.

## 3.2 Modify configuration

Go to the decompressed `manager-openapi` directory and modify the `conf/application.yml` file:

```yaml
# manager-openapi service port number
server:
  port: 8082

# The configuration file used is dev
spring:
  profiles:
    active: dev
```

The dev configuration is specified above, then modify the `conf/application-dev.yml` file:

1) Modify the database URL, user name and password:

   ```yaml
   spring:
     datasource:
       jdbc-url: jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true
       username: xxxxxx
       password: xxxxxx
   ```

2) Modify the connection information of the Tube and ZooKeeper clusters, among which `cluster.zk.root` suggests to use
   the default value:

   ```yaml
   cluster:
     tube:
       manager: http://127.0.0.1:8081 # Manager address of Tube cluster, used to create Topic
       master: 127.0.0.1:8000,127.0.0.1:8010 # Broker used to manage Tube
       clusterId: 1 # Tube cluster ID
     zk:
       url: 127.0.0.1:2181
       root: inlong_hive
   sort.appName: inlong_app # The app name for Sort, default is 'inlong_app'
   ```

## 3.3 Start the service

Enter the decompressed directory, execute `sh bin/startup.sh` to start the service, and check the
log `tailf log/manager-openapi.log`. If a log similar to the following appears, the service has started successfully:

```shell
Started InLongOpenApiApplication in 5.341 seconds (JVM running for 6.002)
```

# 4. Service access verification

1) Verify the manager-api service:

   Visit address: <http://[manager_api_ip]:[manager_api_port]/api/inlong/manager/doc.html#/home>

2) Verify the manager-openapi service:

   Visit address: <http://[manager_openapi_ip]:[manager_openapi_port]/openapi/inlong/manager/doc.html#/home>