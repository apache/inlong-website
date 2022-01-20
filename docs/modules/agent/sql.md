---
title: MySQL SQL
sidebar_position: 3
---

## Overview
Currently, Agent supports MYSQL version 5.1.x , 5.5.x , 5.6.x , 5.7.x , 8.0.x
Currently, the Agent only supports the curl request to create a Job to submit collection tasks, and temporarily does not support the manager front-end to create SQL collection

## Create A MySQL Job

1. Apply for access on the manager, when filling in the data information, select the message source as "Independent Push"
2. Select the source data field separator
3. Fill in the source data fields, and the field order should be consistent with the field order in the sql query result
4. Create a SQL read task using curl request

## Parameter Description

````
Each parameter used in SQL Agent Job is described as
1. job.sql.command: The actual executed sql statement, for example: select * from apache_inlong_manager.user
2. job.sql.user: the user used when connecting to the database, for example: abc
3. job.sql.password: The password used when connecting to the database, for example: 123456
4. job.sql.hostname: The IP address of the connected database, for example: 127.0.0.1
5. job.sql.port: the connected database port, for example: 3306
6. job.sql.separator: The separator used to separate multiple fields needs to be used with the manager front-end
````

## Example

```bash
curl --location --request POST 'http://localhost:8008/config/job' \--header 'Content-Type: application/json' \--data '{
  "job": {
    "sql": {
      "command": "select * from apache_inlong_manager.user",
      "user":  "root",
      "password": "inlong",
      "hostname": "10.0.0.6",
      "port": "3306",
      "separator": "|"
    },
    "id": 1,
    "thread": {
      "running": {
        "core": "4"
      }
    },
    "name": "test",
    "source": "org.apache.inlong.agent.plugin.sources.DataBaseSource",
    "sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",
    "channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"
  },
  "proxy": {
    "inlongGroupId": "b_test_tube_hive_20211221_01",
    "inlongStreamId": "test_data_stream_20211221_01_01"
  },
  "op": "add"
}
'
```