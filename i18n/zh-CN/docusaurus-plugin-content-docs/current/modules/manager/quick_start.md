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
  
## 配置

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
   
2) 配置ZooKeeper 集群信息：

   ```properties
   # ZK 集群，用来推送 Sort 的配置
   cluster.zk.url=127.0.0.1:2181
   cluster.zk.root=inlong_hive
   # 应用名称，即InLong Sort 的 cluster-id 参数
   sort.appName=inlong_app
   ```

## 依赖
- 如果后端连接 MySQL 数据库，请下载 [mysql-connector-java-8.0.26.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.26/mysql-connector-java-8.0.26.jar), 并将其放入 `lib/` 目录。
- 如果后端连接 PostgreSQL 数据库，不需要引入额外依赖。

## 配置消息队列
消息队列服务可以使用InLong TubeMQ 或者 Apache Pulsar：
- 若使用TubeMQ，SQL语句为：

```sql
INSERT INTO apache_inlong_manager.third_party_cluster 
(name, type, url, ext_params, mq_set_name, in_charges, creator)
VALUES 
('tube_cluster', 'TUBE', 'tubemq_master_list', 'tube_config', 'default_set_name', 'admin', 'admin');
```
其中，`tubemq_master_list`为TubeMQ集群的master地址，多个则逗号分隔，形如`127.0.0.1:8000,127.0.0.1:8010`；`tube_config`为集群配置信息，按照JSON格式设置：

```json
{
  "cluster_tube_manager": "http://127.0.0.1:8081",
  "cluster_tube_clusterId": "1"
}
```

- 若使用Pulsar，SQL语句为：

```sql
INSERT INTO apache_inlong_manager.third_party_cluster 
(name, type, url, token, ext_params, mq_set_name, in_charges, creator)
VALUES 
('pulsar_cluster', 'PULSAR', 'puslar_service_url', 'pulsar_token', 'pulsar_config', 'default_set_name', 'admin', 'admin');
```
其中，`puslar_service_url`为Pulsar集群的地址，形如`pulsar://127.0.0.1:6650,127.0.0.1:6650,127.0.0.1:6650`；`pulsar_config`为集群配置信息，按照JSON格式设置：

```json
{
  "pulsar_adminUrl": "http://127.0.0.1:8080,127.0.0.2:8080,127.0.0.3:8080"
}
```

## 启动

进入解压后的目录，执行 `sh bin/startup.sh` 启动服务，查看日志 `tailf log/manager-web.log`，若出现类似下面的日志，说明服务启动成功：

```shell
Started InLongWebApplication in 6.795 seconds (JVM running for 7.565)
```