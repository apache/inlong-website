---
title: MySQL to ClickHouse Example
sidebar_position: 1
---

Here we use an example to introduce how to use Apache InLong creating `MySQL -> ClickHouse` data synchronization.

## Deployment
### Install InLong

Before we begin, we need to install InLong. Here we provide two ways:
- [Docker Deployment](deployment/docker.md) (Recommended)
- [Bare Metal Deployment](deployment/bare_metal.md)

### Add Connectors

Download the [connectors](https://inlong.apache.org/downloads/) corresponding to Flink version, and after decompression, place `sort-connector-jdbc-[version]-SNAPSHOT.jar` in `/inlong-sort/connectors/` directory.

### Install ClickHouse
```shell
docker run -d --rm --net=host --name clickhouse -e CLICKHOUSE_USER=admin -e CLICKHOUSE_PASSWORD=inlong -e CLICKHOUSE_DEFAULT_ACCESS_MANAGEMENT=1 clickhouse/clickhouse-server:22.8
```

## Cluster Initialize
When all containers are successfully started, you can access the InLong dashboard address http://localhost, and use the following default account to log in.
```properties
User: admin
Password: inlong
```

### Register ClickHouse DataNodes

Click [DataNodes] -> [Create] on the page to register ClickHouse DataNodes.

![Create Clickhouse Datanode](img/mysql_clickhouse/clickhouse_datanode.png)

## Create Task
### Create Data Streams Group

Click [Synchronization] → [Create] on the page and input the Group ID and Steam ID:

![Create Group_Stream](img/mysql_clickhouse/group_stream.png)

### Create Data Source
In the data source, click [New] → [MySQL] to configure the source name, address, databases and tables information.

![Create Source](img/mysql_clickhouse/source.png)

:::note
- Please create the test.source_table database table in advance, the schema is: CREATE TABLE test.source_table (id INT PRIMARY KEY, name VARCHAR(50));
:::

### Create Data Sink

In the data target, click [New] → [ClickHouse] to configure the name, DB name, table name, and created ck data node.

![Create Sink](img/mysql_clickhouse/sink.png)

### Configuration Fields

Configure fields mapping in [Source Field] and [Target Field] respectively, and click [Submit] after completion.

![Create Fields](img/mysql_clickhouse/sink_fields.png)

### Approve Data Stream

Click [Approval] -> [MyApproval] -> [Approval] -> [Ok].

![Approve](img/mysql_clickhouse/approve.png)

Back to [Synchronization] page, wait for [success].

## Test Data
### Send Data

```shell
#!/bin/bash

# MySQL info
DB_HOST="mysql"
DB_USER="root"
DB_PASS="inlong"
DB_NAME="test"
DB_TABLE="source_table"

# Insert data in a loop
for ((i=1; i<=1000; i++))
do
# Generate data
id=$i
name="name_$i"

    # Build an insert SQL
    query="INSERT INTO $DB_TABLE (id, name) VALUES ($id, '$name');"

    # Execute insert SQL
    mysql -h $DB_HOST -u $DB_USER -p$DB_PASS $DB_NAME -e "$query"
done
```

Insert 1000 pieces of data in total:

![Source_data](img/mysql_clickhouse/source_data.png)

### Verify Data

Then enter the ClickHouse container and view the source table data:

![Source_data](img/mysql_clickhouse/sink_data.png)

You can also view audit data on the page:

![Source_data](img/mysql_clickhouse/audit.png)

## FAQ
ClickHouse fails to write data, you can view the error on the Flink page and check the permissions of the user and table engine used.