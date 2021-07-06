

---
 快速开始 - Apache inlong-manager
---

# 1. 编译

+ 环境准备：已正确安装 Java（1.8+）、Maven（3.3+） 工具。
+ 通过 macOS 的终端（或 Windows 的 cmd）进入项目根目录`Inlong`执行编译打包命令：
```
mvn clean package -DskipTests
```
+  进入Inlong-manager子项目`inlong-manager` 目录，运行以下 Maven 命令打包项目，仅编译打包manager子项目：
```
mvn clean package -DskipTests
```

+ 正确打包完成后，可在各个子模块的 `target` 目录下看到打好的tar包，manager-web-xxx-incubating-SNAPSHOT.tar.gz


# 2 依赖准备
## 2.1 数据库初始化
+ 基于mysql 5.7+，提前创建好数据库，如``CREATE DATABASE IF NOT EXISTS inlong; USE inlong``， 并导入inlong-manager/doc/sql/apache_inlong_manager.sql完成表结构及基础数据的初始化
+ 修改inlong-manager/manager-web/src/resources/application-xx.yml中数据库连接地址
+ zookeeper 3.5+ ，信息配置到inlong-manager/manager-web/src/resources/application-xx.yml文件对应位置
+ Tube集群信息，修改inlong-manager/manager-web/src/resources/application-xx.yml中tube相关配置信息
+ hadoop2.10.x 集群 , hive 2.3.x需提前构建并启动完成

# 3. 后台服务部署&启动

## 3.1 manager-web部署

+ （1）找到安装包,进入 /apache-inlong/inlong-manager/manager-web/target 找到 manager-web-xxx-incubating-SNAPSHOT.tar.gz
+ （2）部署安装包,压到即将部署服务的服务器对应目录  tar -zxvf manager-web-xxx-incubating-SNAPSHOT.tar.gz
+ （3） 修改配置文件，将manager-web/conf中的配置文件, 以application.yml中profile.active=dev为例，将application-dev.yml文件按真实内容修改
+ （4）启动服务，执行bin目录下的start.sh脚本，观察日志manager-web/log/manager-web.log和后端端口是否正常监听，manager-web默认使用8083端口

## 3.2 manager-openapi部署
+ （1） 找到安装包,进入 /apache-inlong/inlong-manager/manager-openapi/target 找到 manager-openapi-xxx-incubating-SNAPSHOT.tar.gz
+ （2） 部署安装包,压到即将部署服务的服务器对应目录  tar -zxvf manager-web-0.9.0-incubating-SNAPSHOT.tar.gz
+ （3）修改配置文件，将manager-openapi/conf中的配置文件, 以application.yml中profile.active=dev为例，将配置application-dev.yml文件内容改为真实内容
+ （4）启动服务，执行bin目录下的start.sh脚本，观察日志manager-openapi/log/manager-openapi.log和后端端口是否正常监听，manager-openapi默认使用8082端口


## 3.3 后端配置详解
+ `manager-web/conf/application-xx.yml` 示例

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

## 3.4 后台服务验证：

<http://x.x.x.x:8083/api/inlong/manager/doc.html#/home>

其中 `x.x.x.x` 修改为manager-web所部署的机器IP地址
