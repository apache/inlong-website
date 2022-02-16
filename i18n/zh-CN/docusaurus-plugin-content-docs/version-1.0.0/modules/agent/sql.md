---
title: MySQL SQL
sidebar_position: 3
---

## 总览
目前 Agent 支持 MySQL 版本为5.1.x , 5.5.x , 5.6.x , 5.7.x , 8.0.x
目前 Agent 只支持 curl 请求创建 Job 方式提交采集任务，暂时不支持 manager 前端创建 SQL 采集

## MySQL Job创建步骤

1、在 manager 上申请接入，填写数据信息时，选择消息来源为"自主推送"
2、选择源数据字段分隔符
3、填写源数据字段，字段顺序与 sql 查询结果中的字段顺序保持一致
4、使用 curl 请求创建一个 SQL 读取任务

## 参数说明

```
SQL Agent Job 中各个使用参数说明为
1、job.sql.command: 实际执行的 sql 语句，举例: select * from apache_inlong_manager.user
2、job.sql.user: 连接数据库时使用的 user，举例: abc
3、job.sql.password: 连接数据库时使用的 password, 举例: 123456
4、job.sql.hostname: 连接的数据库 ip 地址，举例：127.0.0.1
5、job.sql.port：连接的数据库端口，举例：3306
6、job.sql.separator: 使用的分割符来分割多个字段，需要与 manager 前端
```

## 举例

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