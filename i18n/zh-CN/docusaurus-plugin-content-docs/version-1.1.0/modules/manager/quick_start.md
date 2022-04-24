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

## 依赖
- 如果后端连接 MySQL 数据库，请下载 [mysql-connector-java-8.0.27.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar), 并将其放入 `lib/` 目录。
- 如果后端连接 PostgreSQL 数据库，不需要引入额外依赖。

## 配置
前往 `inlong-manager` 目录，修改 `conf/application.properties` 文件：

```properties
# manager 服务的端口号
server.port=8083

# 默认使用的配置文件为 dev
spring.profiles.active=dev
```

上面指定了 dev 配置，接下来修改 `conf/application-dev.properties` 文件：

```properties
spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8
spring.datasource.druid.username=root
spring.datasource.druid.password=inlong
```

## Flink 插件
InLong 支持 Manager 发起 Sort 任务进行数据分拣，需要先配置 Flink 环境信息。配置文件为`plugins/flink-sort-plugin.properties`.
```properties
# Flink host split by coma if more than one host, such as 'host1,host2'
flink.rest.address=127.0.0.1
# Flink port
flink.rest.port=8081
# Flink jobmanager port
flink.jobmanager.port=6123
# InLong Audit Proxy Address
metrics.audit.proxy.hosts=127.0.0.1:10081
```

## 启动
```shell
bash +x bin/startup.sh
```

## 注册消息队列
- 若使用InLong TubeMQ，注册命令为：
```bash
curl --header "Content-Type: application/json" --request POST http://localhost:8083/api/inlong/manager/openapi/cluster/save --data '
{
        "name": "tube_cluster",
        "type": "TUBE",
        "mqSetName": "default_set_name",
        "extParams": "{\"cluster_tube_manager\": \"127.0.0.1:8080\", \"tube_masterUrl\": \"127.0.0.1:8715\", \"cluster_tube_clusterId\": \"1\"}",
        "inCharges": "admin"
}'
```

- `extParams`: 集群配置信息，按照JSON格式设置，比如:
```json
{
  "cluster_tube_manager": "http://127.0.0.1:8081",
  "tube_masterUrl": "127.0.0.1:8715",
  "cluster_tube_clusterId": "1"
}
```

- 若使用Pulsar，注册命令为：
```bash
curl --header "Content-Type: application/json" --request POST http://localhost:8083/api/inlong/manager/openapi/cluster/save --data '
{
        "name": "pulsar_cluster",
        "type": "PULSAR",
        "url": "pulsar://pulsar:6650",
        "token": "null",
        "mqSetName": "default_set_name",
        "extParams": "{\"pulsar_adminUrl\": \"http://pulsar:8080\"}",
        "inCharges": "admin",
        "creator": "admin"
}'
```

- `url`为Pulsar集群的地址，形如`pulsar://127.0.0.1:6650,127.0.0.1:6650,127.0.0.1:6650`
- `pulsar_adminUrl`为其它集群配置信息