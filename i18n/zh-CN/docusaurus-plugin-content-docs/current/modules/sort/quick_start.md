---
title: 安装部署
sidebar_position: 2
---

## 配置 Flink 运行环境
当前 InLong Sort 是基于 Flink 的一个应用，因此运行 InLong Sort 应用前，需要准备好 [Flink 环境](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/)。

由于当前 InLong Sort 依赖的是 Flink1.13.5 版本，因此在下载部署包时，请选择`flink-1.13.5-bin-scala_2.11.tgz`

## 准备安装文件
- InLong Sort 运行文件，[下载](https://inlong.apache.org/zh-CN/download/) `apache-inlong-[version]-bin.tar.gz`
- 数据节点 Connectors，[下载](https://inlong.apache.org/zh-CN/download/) `apache-inlong-[version]-sort-connectors.tar.gz`

注意：Connectors 下载后可以将需要的 jars 放到`FLINK_HOME/lib/`下。  
如果使用`mysql-cdc-inlong` 连接器，请将 [mysql-connector-java:8.0.21.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.21/mysql-connector-java-8.0.21.jar)  包放到 `FLINK_HOME/lib/`下。

## 启动 InLong Sort
```
./bin/flink run -c org.apache.inlong.sort.Entrance apache-inlong-[version]-bin/inlong-sort/sort-dist-[version].jar \
--sql.script.file mysql-to-postgresql.sql
```

## 配置
`/YOUR_SQL_SCRIPT_DIR/mysql-to-postgresql.sql` 是一个 sql 脚本文件，包含多个 Flink SQL 语句，可以用分号分隔。
语句可以支持`CREATE TABLE`、`CRETAE VIEW`、`INSERT INTO`。 我们可以写sql来做数据集成。

如果我们想从 MySQL 读取数据并写入 PostgreSQL，我们可以编写以下 SQL 脚本。
```sql
 CREATE TABLE `table_1`(
    `age` INT,
    `name` STRING)
    WITH (
    'connector' = 'mysql-cdc-inlong',
    'hostname' = 'localhost',
    'username' = 'root',
    'password' = 'inlong',
    'database-name' = 'test',
    'scan.incremental.snapshot.enabled' = 'false',
    'server-time-zone' = 'GMT+8',
    'table-name' = 'user'
);
CREATE TABLE `table_2`(
    PRIMARY KEY (`name`) NOT ENFORCED,
    `name` STRING,
    `age` INT)
    WITH (
    'connector' = 'jdbc',
    'url' = 'jdbc:postgresql://localhost:5432/postgres',
    'username' = 'postgres',
    'password' = 'inlong',
    'table-name' = 'public.user',
    'port' = '3306'
);
INSERT INTO `table_2` 
    SELECT 
    `name` AS `name`,
    `age` AS `age`
    FROM `table_1`;
```