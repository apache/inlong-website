---
title: 安装部署
sidebar_position: 2
---

## 配置 Flink 运行环境
当前 InLong-Sort 是基于 Flink 的一个应用，因此运行 InLong-Sort 应用前，需要准备好 [Flink 环境](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/)。

由于当前 InLong-Sort 依赖的是 Flink1.13.5 版本，因此在下载部署包时，请选择`flink-1.13.5-bin-scala_2.11.tgz`

Flink 环境配置完成后，可以通过浏览器访问 Flink 的 Web UI，对应的地址是`/{Flink 部署路径}/conf/masters`文件中的地址

## 准备安装文件
我们需要`sort-dist-[version].jar`和`sort-connector-[database]-[version].jar`。 

`sort-dist-[version].jar` 包含主类 `org.apache.inlong.sort.Entrance`。

`sort-connector-[database]-[version].jar` 是连接器 jar。  

我们可以根据我们的数据集成要求选择所需的连接器 jar。  

我们可以[下载](https://inlong.apache.org/zh-CN/download/main/) `apache-inlong-[version]-bin.tar.gz` 解压后从 `inlong-sort` 目录拿到 `sort-dist-[version].jar` 。  

我们可以[下载](https://inlong.apache.org/zh-CN/download/main/) `apache-inlong-{version}-sort-connectors.tar.gz` 解压后拿到 `sort-connector-[database]-[version].jar`。

下载后我们可以将需要的jars放到`FLINK_HOME/lib/`下。

## 启动 InLong-Sort 应用
有了上述编译阶段产出的jar包后，就可以启动 InLong-Sort 的应用了。提交方式可以参考[如何提交 Flink 作业](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/cli/#submitting-a-job)。

示例：
```
./bin/flink run -c org.apache.inlong.sort.Entrance FLINK_HOME/lib/sort-dist-[version].jar \
--sql.script.file /YOUR_SQL_SCRIPT_DIR/mysql-to-postgresql.sql
```

## 必要的配置
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