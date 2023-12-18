---
title: MySQL to StarRocks Example
sidebar_position: 2
---

Here we use an example to introduce how to use Apache InLong creating `MySQL -> StarRocks` data synchronization.

## Deployment
### Install InLong

Before we begin, we need to install InLong. Here we provide two ways:
- [Docker Deployment](deployment/docker.md) (Recommended)
- [Bare Metal Deployment](deployment/bare_metal.md)

### Install StarRocks
Please refer to the [Installation Tutorial](https://iceberg.apache.org/hive-quickstart) on the Apache StarRocks official website

## Cluster Initialize
When all containers are successfully started, you can access the InLong dashboard address http://localhost, and use the following default account to log in.
```
User: admin
Password: inlong
```

### Create Cluster Tag
Click [Clusters] -> [ClusterTags] -> [Create] on the page to specify the cluster label name and person in charge.
![Create Cluster Tag](img/mysql_starrocks/create_cluster_tag.png)

:::caution
Since each component reports the ClusterTags as `default_cluster` by default, do not use other names.
:::

### Register Pulsar Cluster
Click [Clusters] -> [Cluster] -> [Create] on the page to register Pulsar Cluster.
![Create Pulsar Cluster](img/mysql_starrocks/create_pulsar_cluster.png)


:::note
The ClusterTags selects the newly created `default_cluster`, the Pulsar cluster deployed by docker:

Service URL is `pulsar://pulsar:6650`, Admin URL is `http://pulsar:8080`.
:::

### Register StarRocks DataNodes
Click [DataNodes] -> [Create] on the page to register StarRocks DataNodes.
![Create StarRocks DataNode](img/mysql_starrocks/create_starrocks_datanode.png)

:::note
- Please do not fill in `http://` for LOAD URL, just fill in `IP:PORT`.
:::

## Create Task
### Create Data Streams Group
Click [Synchronization] → [Create] on the page and input the Group ID, Steam ID and Full database migration:
![Create Group Stream](img/mysql_starrocks/create_group_stream.png)

### Create Data Source
In the data source, click [New] → [MySQL] to configure the source name, address, databases and tables information.
![Create Stream_Source](img/mysql_starrocks/create_source.png)

:::note
- When the read mode is selected as `Full + Incremental`, the existing data in the table will also be collected, but not in the `Incremental` mode.
- The table white list format is `<dbName>.<tableName>` and supports regular expressions.
:::

### Create Data Sink
In the data sink, click [New] → [StarRocks] to configure the sink name, database name, table name and created StarRocks data node.

![Create data object](img/mysql_starrocks/create_sink.png)

### Approve Data Stream
Click [Approval] -> [MyApproval] -> [Approval] -> [Ok].

![Approve](img/mysql_starrocks/approve.png)

Back to [Synchronization] page, wait for [success].

![Success](img/mysql_starrocks/success.png)

## Test Data
### Send Data
```
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

Add a total of 1000 pieces of data to the `source_table`:

![Result Source](img/mysql_iceberg/result_mysql.png)

### Verify Data
Enter StarRocks, check data in `sink_table`.

![Result Sink](img/mysql_starrocks/result_sink.png)