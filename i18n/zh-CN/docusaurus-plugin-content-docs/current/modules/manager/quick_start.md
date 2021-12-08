---
title: 安装部署
---

## 环境准备
- 安装并启动 MySQL 5.7+
- 初始化数据库
  `inlong-manager-web` 目录下有 `sql/apache_inlong_manager.sql`文件，通过下述命令加载此文件，完成表结构及基础数据的初始化：

  ```shell
  # 通过用户名和密码，创建DB和表：
  mysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_manager.sql
  ```
  
## 部署、启动 manager-web

**manager-web 是与前端页面交互的后台服务。**

### 修改配置

前往 `inlong-manager-web` 目录，修改 `conf/application.properties` 文件：

```properties
# manager-web 服务的端口号
server.port=8083

# 默认使用的配置文件为 dev
spring.profiles.active=dev
```

上面指定了 dev 配置，接下来修改 `conf/application-dev.properties` 文件：

1) 修改数据库 URL、用户名和密码：

   ```properties
   spring.datasource.jdbc-url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8
   spring.datasource.username=DB_USER
   spring.datasource.password=DB_PASSWD
   ```

2) 修改 Tube 和 ZooKeeper 集群的连接信息，其中 `cluster.zk.root` 建议使用默认值：

   ```properties
   # Tube 集群的 Manager 地址，用来创建 Topic
   cluster.tube.manager=http://127.0.0.1:8081
   # 用来管理 Tube 的 Broker
   cluster.tube.master=127.0.0.1:8000,127.0.0.1:8010
   # Tube 集群的 ID
   cluster.tube.clusterId=1
   
   # ZK 集群，用来推送 Sort 的配置
   cluster.zk.url=127.0.0.1:2181
   cluster.zk.root=inlong_hive
   
   # Sort 应用名称，即设置 Sort 的 cluster-id 参数，默认值为"inlong_app"
   sort.appName=inlong_app
   ```

### 启动服务

进入解压后的目录，执行 `sh bin/startup.sh` 启动服务，查看日志 `tailf log/manager-web.log`，若出现类似下面的日志，说明服务启动成功：

```shell
Started InLongWebApplication in 6.795 seconds (JVM running for 7.565)
```