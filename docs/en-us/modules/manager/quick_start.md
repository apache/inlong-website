---
Quick start-Apache inlong-manager
---

# 1. Environmental preparation

Before starting the installation, please download and install the following software yourself:

- Install and configure JDK (1.8+), Maven (3.3+);

- Install and start ZooKeeper 3.5+;

- Install and start Hadoop 2.10.x and Hive 2.3.x;

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

# 2. Compile and package

Enter the project root directory through the macOS terminal (or Windows command prompt window) and execute the following
compilation commands:

```
mvn clean install -DskipTests
```

After the compilation is successful, go to the `inlong-manager/manager-api` and `inlong-manager/manager-openapi` modules
of the project, and set them in the respective `target`
The installation package is generated under the directory, and the names are `apache-inlong-manager-api*.tar.gz`
and `apache-inlong-manager-openapi*.tar.gz`.

# 3. Deploy and start manager-api

**manager-api is a background service that interacts with the front-end page.**

## 3.1 Upload and decompress the installation package

1) Copy `inlong-manager/manager-api/target/apache-inlong-manager-api-*.tar.gz` from step 2 to the server to be deployed;

2) Go to the deployment server and unzip the installation package: `tar -zxvf apache-inlong-manager-api-*.tar.gz` to get
   the `manager-api` folder.

## 3.2 Modify configuration

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
   ```

## 3.3 Start the service

Enter the decompressed directory, execute `sh bin/startup.sh` to start the service, and check the
log `tailf log/manager-api.log`. If a log similar to the following appears, the service has started successfully:

```shell
Started InLongApiApplication in 6.795 seconds (JVM running for 7.565)
```

# 4. Deploy and start manager-openapi

**manager-openapi is a service that provides interactive interfaces for other components (such as Agent and DataProxy)
.**

## 4.1 Upload and decompress the installation package

1) Copy `inlong-manager/manager-openapi/target/apache-inlong-manager-openapi-*.tar.gz` from step 2 to the server to be
   deployed;

2) Go to the deployment server and unzip the installation package: `tar -zxvf apache-inlong-manager-openapi-*.tar.gz` to
   get the `manager-openapi` folder.

## 4.2 Modify configuration

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
   ```

## 4.3 Start the service

Enter the decompressed directory, execute `sh bin/startup.sh` to start the service, and check the
log `tailf log/manager-openapi.log`. If a log similar to the following appears, the service has started successfully:

```shell
Started InLongOpenApiApplication in 5.341 seconds (JVM running for 6.002)
```

# 5. Service access verification

1) Verify the manager-api service:

   Visit address: <http://[manager_api_ip]:[manager_api_port]/api/inlong/manager/doc.html#/home>

2) Verify the manager-openapi service:

   Visit address: <http://[manager_openapi_ip]:[manager_openapi_port]/openapi/inlong/manager/doc.html#/home>