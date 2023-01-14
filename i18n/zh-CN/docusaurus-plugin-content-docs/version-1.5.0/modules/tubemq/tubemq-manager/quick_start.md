---
title: 安装部署
---

安装文件在inlong-tubemq-manager目录.

## 环境准备
- 安装并启动 MySQL 5.7+
- 通过下述命令加载`sql/apache_tube_manager.sql`，完成表结构及基础数据的初始化：

```shell
# 通过用户名和密码，创建 DB 和表：
mysql -uDB_USER -pDB_PASSWD < sql/apache_tube_manager.sql
```
  
## 配置
- 在mysql中创建`tubemanager`数据和相应用户.
- 在conf/application.properties中添加mysql信息：

```ini
# mysql configuration for manager
spring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/tubemanager
spring.datasource.username=mysql_username
spring.datasource.password=mysql_password
```

### 依赖
- 请下载 [hibernate-commons-annotations-5.1.2.Final.jar](https://repo1.maven.org/maven2/org/hibernate/common/hibernate-commons-annotations/5.1.2.Final/hibernate-commons-annotations-5.1.2.Final.jar),
  [hibernate-core-5.6.7.Final.jar](https://repo1.maven.org/maven2/org/hibernate/hibernate-core/5.6.7.Final/hibernate-core-5.6.7.Final.jar),
  [antlr-2.7.7.jar](https://repo1.maven.org/maven2/antlr/antlr/2.7.7/antlr-2.7.7.jar),
  [jboss-logging-3.4.3.Final.jar](https://repo1.maven.org/maven2/org/jboss/logging/jboss-logging/3.4.3.Final/jboss-logging-3.4.3.Final.jar),  并将其放入 `lib/` 目录。
- 如果后端连接 MySQL 数据库，请下载 [mysql-connector-java-8.0.27.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar), 并将其放入 `lib/` 目录。
- 如果后端连接 PostgreSQL 数据库，不需要引入额外依赖。

## 启动

``` bash
$ bin/start-manager.sh 
```

## 初始化TubeMQ集群

    vim bin/init-tube-cluster.sh

替换如下六个参数
```
TUBE_MANAGER_IP=   //tube manager服务启动ip
TUBE_MANAGER_PORT=   //tube manager服务启动port
TUBE_MASTER_IP=   //tube 集群master ip
TUBE_MASTER_PORT=
TUBE_MASTER_WEB_PORT=
TUBE_MASTER_TOKEN=
```

然后执行以下命令：
```
sh bin/init-tube-cluster.sh
```
如上操作会创建一个clusterId为1的tube集群，注意该操作只进行一次，之后重启服务无需新建集群