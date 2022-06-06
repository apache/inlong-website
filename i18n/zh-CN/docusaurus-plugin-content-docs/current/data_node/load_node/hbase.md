---
title: HBase
sidebar_position: 10
---
## 概览

HBase写入节点支持写数据到Hbase。

## 写入节点参数

|  参数 | 是否必须  |  默认值 |  数据类型 | 描述  |
|---|---|---|---|---|
|id|必填|(none)|String|节点标识|
|name|可选|(none)|String|节点名称|
|fields|必填|(none)|`List<FieldInfo>`|表字段|
|fieldRelations|必填|(none)|`List<FieldRelation>`|定义输入和输出字段的映射关系|
|properties|可选|(none)|Map<String, String>|连接器其他参数|
|tableName | 必填  | (none)  | String  |  HBase 需要连接的表|
|namespace | 必填  | (none)  |String   | HBase 需要连接的表所在的命名空间 |
| zookeeperQuorum  | 必填  |  String |   | HBase的 Zookeeper quorum地址  |
| rowKey  | 必填  |   | String  | rowkey 生成规则, 例如: MD5(\`name\`)  |
| sinkBufferFlushMaxSize  |可选   |2mb   | String  |  写入的参数选项。每次写入请求缓存行的最大大小。它能提升写入 HBase 数据库的性能，但是也可能增加延迟。设置为 "0" 关闭此选项。 |
| zookeeperZnodeParent  | 可选  | /hbase  | String  |HBase 集群的 Zookeeper 根目录。  |
| sinkBufferFlushMaxRows  | 可选  |  1000 |  String |  写入的参数选项。 每次写入请求缓存的最大行数。它能提升写入 HBase 数据库的性能，但是也可能增加延迟。设置为 "0" 关闭此选项。 |
| sinkBufferFlushInterval  |  可选 |  1s | String  | 写入的参数选项。刷写缓存行的间隔。它能提升写入 HBase 数据库的性能，但是也可能增加延迟。设置为 "0" 关闭此选项。注意："sink.buffer-flush.max-size" 和 "sink.buffer-flush.max-rows" 同时设置为 "0"，刷写选项整个异步处理缓存行为。 |

## 依赖

打包后我们可以找到HBase连接器依赖 `sort-connector-hbase-1.2.0-incubating-SNAPSHOT.jar`。

## 如何使用Flink SQL

```sql
CREATE TABLE `hbaseTable`(
  rowkey STRING,
  cf Row<age BIGINT,name STRING>,
  PRIMARY KEY (rowkey) NOT ENFORCED
) WITH (
  'connector' = 'hbase-2.2',
  'table-name' = 'default:hbaseTable',
  'zookeeper.quorum' = 'localhost:2181'
)
```