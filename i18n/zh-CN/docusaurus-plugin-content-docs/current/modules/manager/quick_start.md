---
title: 安装部署
---

## 环境准备
- 安装并启动 MySQL 5.7+
- 初始化数据库
  `inlong-manager` 目录下有 `sql/apache_inlong_manager.sql`文件，通过下述命令加载此文件，完成表结构及基础数据的初始化：

  ```shell
  # 通过用户名和密码，创建DB和表：
  mysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_manager.sql
  ```
  
## 部署manager

manager 是与前端页面交互的后台服务。

### 修改配置

前往 `inlong-manager` 目录，修改 `conf/application.properties` 文件：

```properties
# manager 服务的端口号
server.port=8083

# 默认使用的配置文件为 dev
spring.profiles.active=dev
```

上面指定了 dev 配置，接下来修改 `conf/application-dev.properties` 文件：

1) 修改数据库 URL、用户名和密码：

   ```properties
   spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8
   spring.datasource.druid.username=root
   spring.datasource.druid.password=inlong
   ```

2) 配置消息队列服务，可以使用InLong TubeMQ 或者 Apache Pulsar：

- 若使用TubeMQ，配置TubeMQ 集群信息
   ```properties
   # TubeMQ 集群的 Manager 地址，用来创建 Topic
   cluster.tube.manager=http://127.0.0.1:8081
   # 用来管理 TubeMQ 的 Broker
   cluster.tube.master=127.0.0.1:8000,127.0.0.1:8010
   # TubeMQ 集群的 ID
   cluster.tube.clusterId=1
   ```
   
- 若使用Pulsar，配置Pulsar 集群信息
   ```properties
   # Pulsar admin URL
   pulsar.adminUrl=http://127.0.0.1:8080,127.0.0.2:8080,127.0.0.3:8080
   # Pulsar broker address
   pulsar.serviceUrl=pulsar://127.0.0.1:6650,127.0.0.1:6650,127.0.0.1:6650
   # Default tenant of Pulsar
   pulsar.defaultTenant=public
   ```
   
3) 配置ZooKeeper 集群信息：

   ```properties
   # ZK 集群，用来推送 Sort 的配置
   cluster.zk.url=127.0.0.1:2181
   cluster.zk.root=inlong_hive
   # 应用名称，即InLong Sort 的 cluster-id 参数
   sort.appName=inlong_app
   ```

### 启动服务

进入解压后的目录，执行 `sh bin/startup.sh` 启动服务，查看日志 `tailf log/manager-web.log`，若出现类似下面的日志，说明服务启动成功：

```shell
Started InLongWebApplication in 6.795 seconds (JVM running for 7.565)
```