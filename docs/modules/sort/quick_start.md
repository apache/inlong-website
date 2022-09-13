---
title: Deployment
sidebar_position: 2
---

## Set up Flink Environment
Currently, InLong Sort is based on Flink, before you run an InLong Sort Application,

you need to set up [Flink Environment](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/).

Currently, InLong Sort relies on Flink-1.13.5. Chose `flink-1.13.5-bin-scala_2.11.tgz` when downloading package.

## Prepare installation files
- InLong Sort file, [Download](https://inlong.apache.org/download/) `apache-inlong-[version]-bin.tar.gz`
- Data Nodes Connectors, [Download](https://inlong.apache.org/download/) `apache-inlong-[version]-sort-connectors.tar.gz`

Notice: Please put required Connectors jars into under `FLINK_HOME/lib/` after download.  
Put [mysql-connector-java:8.0.21.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.21/mysql-connector-java-8.0.21.jar) to `FLINK_HOME/lib/` when you use `mysql-cdc-inlong` connector. 

## Start an inlong-sort application
```shell
./bin/flink run -c org.apache.inlong.sort.Entrance apache-inlong-[version]-bin/inlong-sort/sort-dist-[version].jar \
--sql.script.file mysql-to-postgresql.sql
```

## Configuration
`/YOUR_SQL_SCRIPT_DIR/mysql-to-postgresql.sql` is a sql script file includes multi Flink SQL statements that can be separated by semicolon.  
Statement can support `CREATE TABLE`, `CRETAE VIEW`, `INSERT INTO`. We can write sql to do data integration.  

We can write following SQL script if we want to read data from MySQL and write into PostgreSQL.
```sql
 CREATE TABLE `table_1`(
    `age` INT,
    `name` STRING)
    WITH (
    'connector' = 'mysql-cdc-inlong',
    'hostname' = 'localhost',
    'port' = '3306',
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
    'table-name' = 'public.user'
);
INSERT INTO `table_2` 
    SELECT 
    `name` AS `name`,
    `age` AS `age`
    FROM `table_1`;
```