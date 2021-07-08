---
快速开始 - Apache inlong-manager
---

# 1. 环境准备

开始安装前，请自行下载并安装下述软件：

- 安装并配置 JDK（1.8+）、Maven（3.3+）；

- 安装并启动 ZooKeeper 3.5+；

- 安装并启动 Hadoop 2.10.x 和 Hive 2.3.x；

- 安装并启动 MySQL 5.7+，把 inlong-manager 模块中的 `doc/sql/apache_inlong_manager.sql` 文件拷贝到 MySQL 数据库所在的服务器（比如拷贝到 `/data/`
  目录下），通过下述命令加载此文件，完成表结构及基础数据的初始化：

  ```shell
  # 通过用户名和密码，登录 MySQL 服务器：
  mysql -u xxx -p xxx
  ...
  # 创建数据库
  CREATE DATABASE IF NOT EXISTS apache_inlong_manager;
  USE apache_inlong_manager;
  # 通过 source 命令加载上述 SQL 文件：
  mysql> source /data/apache_inlong_manager.sql;
  ```

- 参照 [编译部署TubeMQ](https://inlong.apache.org/zh-cn/docs/modules/tubemq/quick_start.html)，安装并启动 Tube 集群；

- 参照 [编译部署TubeMQ Manager](https://inlong.apache.org/zh-cn/docs/modules/tubemq/tubemq-manager/quick_start.html)，安装并启动
  TubeManager。

# 2. 编译打包

通过 macOS 的终端（或 Windows 的命令提示符窗口）进入项目根目录，执行以下编译命令：

```
mvn clean install -DskipTests
```

编译成功后，前往项目的 `inlong-manager/manager-api` 和 `inlong-manager/manager-openapi` 模块，在各自的 `target`
目录下生成了安装包，名称分别为 `apache-inlong-manager-api*.tar.gz` 和 `apache-inlong-manager-openapi*.tar.gz`。

# 3. 部署、启动 manager-api

**manager-api 是与前端页面交互的后台服务。**

## 3.1 上传、解压安装包

1) 将第2步的 `inlong-manager/manager-api/target/apache-inlong-manager-api-*.tar.gz` 拷贝到要部署的服务器；

2) 前往部署服务器，解压安装包：`tar -zxvf apache-inlong-manager-api-*.tar.gz`，得到 `manager-api` 文件夹。

## 3.2 修改配置

前往解压后的 `manager-api` 目录，修改 `conf/application.yml` 文件：

```yaml
# manager-api 服务的端口号
server:
  port: 8083

# 使用的配置文件为 dev
spring:
  profiles:
    active: dev
```

上面指定了 dev 配置，接下来修改 `conf/application-dev.yml` 文件：

1) 修改数据库 URL、用户名和密码：

   ```yaml
   spring:
     datasource:
       jdbc-url: jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true
       username: xxxxxx
       password: xxxxxx
   ```

2) 修改 Tube 和 ZooKeeper 集群的连接信息，其中 `cluster.zk.root` 建议使用默认值：

   ```yaml
   cluster:
     tube:
       manager: http://127.0.0.1:8081 # Tube 集群的 Manager 地址，用来创建 Topic
       master: 127.0.0.1:8000,127.0.0.1:8010 # 用来管理 Tube 的 Broker
       clusterId: 1 # Tube 集群的 ID
     zk:
       url: 127.0.0.1:2181
       root: inlong_hive
   ```

## 3.3 启动服务

进入解压后的目录，执行 `sh bin/startup.sh` 启动服务，查看日志 `tailf log/manager-api.log`，若出现类似下面的日志，说明服务启动成功：

```shell
Started InLongApiApplication in 6.795 seconds (JVM running for 7.565)
```

# 4. 部署、启动 manager-openapi

**manager-openapi 是为其他组件（如 Agent、DataProxy）提供交互接口的服务。**

## 4.1 上传、解压安装包

1) 将第2步的 `inlong-manager/manager-openapi/target/apache-inlong-manager-openapi-*.tar.gz` 拷贝到要部署的服务器；

2) 前往部署服务器，解压安装包：`tar -zxvf apache-inlong-manager-openapi-*.tar.gz`，得到 `manager-openapi` 文件夹。

## 4.2 修改配置

前往解压后的 `manager-openapi` 目录，修改 `conf/application.yml` 文件：

```yaml
# manager-openapi 服务的端口号
server:
  port: 8082

# 使用的配置文件为 dev
spring:
  profiles:
    active: dev
```

上面指定了 dev 配置，接下来修改 `conf/application-dev.yml` 文件：

1) 修改数据库 URL、用户名和密码：

   ```yaml
   spring:
     datasource:
       jdbc-url: jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true
       username: xxxxxx
       password: xxxxxx
   ```

2) 修改 Tube 和 ZooKeeper 集群的连接信息，其中 `cluster.zk.root` 建议使用默认值：

   ```yaml
   cluster:
     tube:
       manager: http://127.0.0.1:8081 # Tube 集群的 Manager 地址，用来创建 Topic
       master: 127.0.0.1:8000,127.0.0.1:8010 # 用来管理 Tube 的 Broker
       clusterId: 1 # Tube 集群的 ID
     zk:
       url: 127.0.0.1:2181
       root: inlong_hive
   ```

## 4.3 启动服务

进入解压后的目录，执行 `sh bin/startup.sh` 启动服务，查看日志 `tailf log/manager-openapi.log`，若出现类似下面的日志，说明服务启动成功：

```shell
Started InLongOpenApiApplication in 5.341 seconds (JVM running for 6.002)
```

# 5. 服务访问验证

1) 验证 manager-api 服务：

   访问地址：<http://[manager_api_ip]:[manager_api_port]/api/inlong/manager/doc.html#/home>

2) 验证 manager-openapi 服务：

   访问地址：<http://[manager_openapi_ip]:[manager_openapi_port]/openapi/inlong/manager/doc.html#/home>
