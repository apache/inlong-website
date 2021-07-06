---
 Quick start-Apache inlong-manager
---

# 1. Compile

+ Environment preparation: Java (1.8+) and Maven (3.3+) tools have been installed correctly.

+ Enter the `inlong-manager` directory of the project through the terminal of macOS (or cmd on Windows), and run the following Maven command to package the project:

-Compile and Package
```
mvn clean package -DskipTests
```

+ After the correct packaging is completed, you can see the tar package in the `target` directory of each submodule, manager-web-xxx-incubating-SNAPSHOT.tar.gz


# 2 Dependency Preparation
## 2.1 Database initialization
+ mysql 5.7+, create a database in advance, and import inlong-manager/doc/sql/apache_inlong_manager.sql to complete the initialization of the table structure and basic data, and modify the database connection in application-xx.yml
+ zookeeper 3.5+, configure the information to the corresponding location of the application-xx.yml file
+ Tube cluster information, and modify tube-related configuration information in application-xx.yml
+ hadoop 2.10.x cluster, hive 2.3.x needs to be built and started in advance

# 3. Background service deployment & startup

## 3.1 manager-web deployment
+ 3.1.1 Find the installation package, enter /apache-inlong/inlong-manager/manager-web/target and find manager-web-xxx-incubating-SNAPSHOT.tar.gz
+ 3.1.2 Deploy the installation package and press it to the corresponding directory of the server where the service will be deployed tar -zxvf manager-web-xxx-incubating-SNAPSHOT.tar.gz
+ 3.1.3 Modify the configuration file, change the configuration file in manager-web/conf, take profile.active=dev in application.yml as an example, modify the application-dev.yml file according to the actual content
+ 3.1.4 Start the service, execute the start.sh script in the bin directory, and observe whether the log manager-web/log/manager-web.log and the back-end port are listening normally

## 3.2 manager-apenapi deployment
+ 3.2.1 Find the installation package, enter /apache-inlong/inlong-manager/manager-openapi/target and find manager-openapi-xxx-incubating-SNAPSHOT.tar.gz
+ 3.2.2 Deploy the installation package and press it to the corresponding directory of the server where the service will be deployed tar -zxvf manager-web-0.9.0-incubating-SNAPSHOT.tar.gz
+ 3.2.3 Modify the configuration file, change the configuration file in manager-openapi/conf, take profile.active=dev in application.yml as an example, change the content of the configuration application-dev.yml file to the real content
+ 3.2.4 Start the service, execute the start.sh script in the bin directory, and observe whether the log manager-openapi/log/manager-openapi.log and the backend port are listening normally

## 3.3 Detailed back-end configuration
+ `manager-web/conf/application.yml` file

```yml
logging:
  level:
    root: INFO
    org:
      apache:
        inlong:
          manager:
            dao:
              mapper: debug
            third:
              debug

spring:
  datasource:
    jdbc-url: jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?serverTimezone=GMT%2b8&useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true
    username: xxxxxx
    password: xxxxxx
    driver-class-name: com.mysql.cj.jdbc.Driver
    type: com.alibaba.druid.pool.DruidDataSource
    druid:
      # Configure test query
      validationQuery: SELECT 'x'
      # Initialization size, minimum, maximum
      initialSize: 20
      minIdle: 20
      maxActive: 300
      # Configure the timeout period to wait for the connection to be acquired
      maxWait: 600000
      # Configure the minimum survival time of a connection in the pool, in milliseconds
      minEvictableIdleTimeMillis: 3600000
      # Detect when applying for connection. It is recommended to configure it to true, which does not affect performance and ensures safety
      testWhileIdle: true
      # Perform detection when obtaining a connection, it is recommended to close it, which affects performance
      testOnBorrow: false
      # Perform detection when returning the connection, it is recommended to close it, which affects performance
      testOnReturn: false
      # Configure filters for monitoring statistics interception，stat:Monitoring statistics  log4j:log  wall:Defense against SQL injection
      filters: stat,wall
      # Open the mergeSql function through the connectProperties property；Slow SQL records
      connectionProperties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=5000

# InLong configuration
inlong:
  schedule:
    user:
      enable: false
      update-cron: '0 0 2 * * ?'
  common:
    machineNum: 1
    path: ~/
    modules:
      - agent

# Cluster info
cluster:
  tube:
    manager: http://127.0.0.1:8081
    master: 127.0.0.1:8000,127.0.0.1:8010
  zk:
    url: 127.0.0.1:2181
    root: inlong_hive
  hive:
    metastoreAddress: jdbc:mysql://127.0.0.1:3306/hive?useSSL=false

```

## 3.4 Background service verification:

<http://x.x.x.x/api/inlong/manager/doc.html#/home>

Here `x.x.x.x` is modified to the IP of the server where the application is deployed


