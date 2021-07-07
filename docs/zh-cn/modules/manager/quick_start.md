---
快速开始 - Apache inlong-manager
---

# 1. 环境准备

- 安装并配置 JDK（1.8+）、Maven（3.3+）；

- 安装并启动 ZooKeeper 3.5+；

- 安装并启动 Tube 集群；

- 安装并启动 Hadoop 2.10.x 和 Hive 2.3.x；

- 安装并启动 MySQL 5.7+，把 inlong-manager 模块中的 `doc/sql/apache_inlong_manager.sql` 文件拷贝到 MySQL
  数据库所在的服务器（比如拷贝到 `/data/` 目录下），通过下述命令加载此文件，完成表结构及基础数据的初始化：

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

# 2. 修改配置

`inlong-manager/manager-web/src/resources/application.yml` 中默认使用开发环境的配置：

```yaml
spring:
  profiles:
    active: dev
```

所以需要修改 `inlong-manager/manager-web/src/resources/application-dev.yml` 中的相关配置：

1) 修改数据库 URL、用户名和密码：

   ```yaml
   spring:
     datasource:
       jdbc-url: jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?serverTimezone=GMT%2b8&useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true
       username: xxxxxx
       password: xxxxxx
   ```

2) 修改 Tube 和 ZooKeeper 集群的连接信息，其中 `cluster.zk.root` 建议使用默认值：

   ```yaml
   cluster:
     tube:
       manager: http://127.0.0.1:8081
       master: 127.0.0.1:8000,127.0.0.1:8010
     zk:
       url: 127.0.0.1:2181
       root: inlong_hive
   ```

# 3. 编译打包

通过 macOS 的终端（或 Windows 的 cmd）进入项目根目录 `incubator-inlong`，然后执行以下编译命令：

```
mvn clean install -DskipTests
```

编译成功后，前往项目的 `inlong-manager/manager-web` 和 `inlong-manager/manager-openapi` 模块，在各自的 `target` 目录下有打好的 tar
包，名称为 `apache-inlong-manager-web-*.tar.gz`。

# 4. 部署、启动服务

## 4.1 部署 manager-web

1) 将上面的 `inlong-manager/manager-web/target/apache-inlong-manager-web-*.tar.gz` 拷贝到要部署的服务器；

2) 前往部署服务器，解压安装包：`tar -zxvf apache-inlong-manager-web-*.tar.gz`；

3) 进入解压后的目录，执行 `sh bin/start.sh` 启动服务，查看日志 `tailf log/manager-web.log`，若出现类似下面的日志，说明服务启动成功：

   ```shell
   Started InLongWebApplication in 6.795 seconds (JVM running for 7.565)
   ```

## 4.2 部署 manager-openapi

1) 将上面的 `inlong-manager/manager-openapi/target/apache-inlong-manager-openapi-*.tar.gz` 拷贝到要部署的服务器；

2) 前往部署服务器，解压安装包：`tar -zxvf apache-inlong-manager-openapi-*.tar.gz`；

3) 进入解压后的目录，执行 `sh bin/start.sh` 启动服务，查看日志 `tailf log/manager-openapi.log`，若出现类似下面的日志，说明服务启动成功：

   ```shell
   Started InLongOpenApiApplication in 5.341 seconds (JVM running for 6.002)
   ```

## 4.3 服务访问验证

1) 验证 manager-web 服务：

   访问地址：<http://x.x.x.x:8083/api/inlong/manager/doc.html#/home>

   将 `x.x.x.x` 修改为 manager-web 服务对应的 IP 地址，端口号默认是 8083。

2) 验证 manager-openapi 服务：

   访问地址：<http://x.x.x.x:8082/openapi/inlong/manager/doc.html#/home>

   将 `x.x.x.x` 修改为 manager-openapi 服务对应的 IP 地址，端口号默认是 8082。
