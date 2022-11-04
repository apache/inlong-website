---
title: HBase
sidebar_position: 6
---

import {siteVariables} from '../../version';

## 概览

`HBase Load` 节点支持写数据都 HBase 数据库.

## 支持的版本

| Load 节点                | HBase 版本 |                                                                                                                                                                                                                                                                                                                                                                                           
|-------------------------|------------|
| [HBase](./hbase.md)     | 2.2.x      |  

## 依赖

为了设置 HBase Load 节点, 下面提供了使用构建自动化工具（例如 Maven 或 SBT）和带有 Sort Connector JAR 包的 SQL 客户端的两个项目的依赖关系信息。


### Maven dependency

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-hbase</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>
## 如何创建 HBase Load 节点

### SQL API 用法

所有 HBase 表的列簇必须定义为 ROW 类型，字段名对应列簇名（column family），嵌套的字段名对应列限定符名（column qualifier）。用户只需在表结构中
声明查询中使用的的列簇和列限定符。除了 ROW 类型的列，剩下的原子数据类型字段（比如，STRING, BIGINT）将被识别为 HBase 的 rowkey，一张表中只能声明一个 
rowkey。rowkey 字段的名字可以是任意的，如果是保留关键字，需要用反引号。  

下面这个例子展示了如何用 `Flink SQL` 创建一个 HBase Load 节点:

```sql
-- 在 Flink SQL 中创建 HBase 表 'hbase_load_node'
CREATE TABLE hbase_load_node (
    rowkey STRING,
    family1 ROW<q1 INT>,
    family2 ROW<q2 STRING, q3 BIGINT>,
    family3 ROW<q4 DOUBLE, q5 BOOLEAN, q6 STRING>,
    PRIMARY KEY (rowkey) NOT ENFORCED
) WITH (
      'connector' = 'hbase-2.2-inlong',
      'table-name' = 'mytable',
      'zookeeper.quorum' = 'localhost:2181'
);

-- 使用 ROW(...) 构造函数构造列族和写数据到 HBase 表。
-- 假设表"T"的 schema [rowkey, f1q1, f2q2, f2q3, f3q4, f3q5, f3q6]
INSERT INTO hTable
SELECT rowkey, ROW(f1q1), ROW(f2q2, f2q3), ROW(f3q4, f3q5, f3q6) FROM T;

-- 从 HBase 表中扫描数据
SELECT rowkey, family1, family3.q4, family3.q6 FROM hTable;

-- 将 HBase 表临时连接为维度表
SELECT * FROM myTopic
LEFT JOIN hTable FOR SYSTEM_TIME AS OF myTopic.proctime
ON myTopic.key = hTable.rowkey;
```

### InLong Dashboard 用法

TODO: 将在未来支持此功能。

### InLong Manager Client 用法

TODO: 将在未来支持此功能。

## HBase Load 节点参数

| 参数 | 是否必选 | 默认值 | 数据类型 | 描述 |
|-----|---------|-------|---------|-----|
| connector | 必选 | (none) | String | 指定使用的连接器: hbase-2.2-inlong: 连接 HBase 2.2.x 集群 |
| table-name | 必选 | (none) | String | 连接的 HBase 表名。 |
| zookeeper.quorum | 必选 | (none) | String | HBase Zookeeper quorum 信息。 |
| zookeeper.znode.parent | 可选 | /hbase | String | HBase 集群的 Zookeeper 根目录。|
| null-string-literal | 可选 | null | String | 当字符串值为 null 时的存储形式，默认存成 "null" 字符串。HBase 的 source 和 sink 的编解码将所有数据类型（除字符串外）将 null 值以空字节来存储。 |
| sink.buffer-flush.max-size | 可选 | 2mb | MemorySize | 写入的参数选项。每次写入请求缓存行的最大大小。它能提升写入 HBase 数据库的性能，但是也可能增加延迟。设置为 "0" 关闭此选项。 |
| sink.buffer-flush.max-rows | 可选 | 1000 | Integer | 写入的参数选项。 每次写入请求缓存的最大行数。它能提升写入 HBase 数据库的性能，但是也可能增加延迟。设置为 "0" 关闭此选项。 |
| sink.buffer-flush.interval | 可选 | 1s | Duration | 写入的参数选项。刷写缓存行的间隔。它能提升写入 HBase 数据库的性能，但是也可能增加延迟。设置为 "0" 关闭此选项。注意："sink.buffer-flush.max-size" 和 "sink.buffer-flush.max-rows" 同时设置为 "0"，刷写选项整个异步处理缓存行为。 |
| sink.parallelism | 可选 | (none) | Integer | 为 HBase sink operator 定义并行度。默认情况下，并行度由框架决定，和链在一起的上游 operator 一样。 |
| lookup.async | 可选 | false | Boolean | 是否启用异步查找。如果为真，查找将是异步的。注意：异步方式只支持 hbase-2.2 连接器 |
| lookup.cache.max-rows | 可选 | (none) | Integer | 查找缓存的最大行数，超过这个值，最旧的行将过期。注意："lookup.cache.max-rows" 和 "lookup.cache.ttl" 必须同时被设置。默认情况下，查找缓存是禁用的。 |
| lookup.cache.ttl | 可选 | (none) | Duration | 查找缓存中每一行的最大生存时间，在这段时间内，最老的行将过期。注意："lookup.cache.max-rows" 和 "lookup.cache.ttl" 必须同时被设置。默认情况下，查找缓存是禁用的。 |
| lookup.max-retries | 可选 | 3 | Integer | 查找数据库失败时的最大重试次数。 |
| properties.* | 可选 | (none) | String | 可以设置任意 HBase 的配置项。后缀名必须匹配在 [HBase 配置文档](https://hbase.apache.org/2.3/book.html#hbase_default_configurations) 中定义的配置键。Flink 将移除 "properties." 配置键前缀并将变换后的配置键和值传入底层的 HBase 客户端。 例如您可以设置 'properties.hbase.security.authentication' = 'kerberos' 等kerberos认证参数。 |
| inlong.metric.labels | 可选 | (none) | String | inlong metric 的标签值，该值的构成为groupId=xxgroup&streamId=xxstream&nodeId=xxnode。|

## 数据类型映射

HBase 以字节数组存储所有数据。在读和写过程中要序列化和反序列化数据。

Flink 的 HBase 连接器利用 HBase（Hadoop) 的工具类 org.apache.hadoop.hbase.util.Bytes 进行字节数组和 Flink 数据类型转换。

Flink 的 HBase 连接器将所有数据类型（除字符串外）null 值编码成空字节。对于字符串类型，null 值的字面值由null-string-literal选项值决定。

数据类型映射表如下：

| Flink SQL 类型 | HBase 转换 |
|-----------------|-----------------|
| CHAR <br/> VARCHAR <br/> STRING | byte[] toBytes(String s) <br/> String toString(byte[] b) |
| BOOLEAN | byte[] toBytes(boolean b) <br/> boolean toBoolean(byte[] b) |
| BINARY <br/> VARBINARY | Returns byte[] as is. |
| DECIMAL | byte[] toBytes(BigDecimal v) <br/> BigDecimal toBigDecimal(byte[] b) |
| TINYINT | new byte[] { val } <br/> bytes[0] // returns first and only byte from bytes |
| SMALLINT | byte[] toBytes(short val) <br/> short toShort(byte[] bytes) |
| INT | byte[] toBytes(int val) <br/> int toInt(byte[] bytes) |
| BIGINT | byte[] toBytes(long val) <br/> long toLong(byte[] bytes) |
| FLOAT | byte[] toBytes(float val) <br/> float toFloat(byte[] bytes) |
| DOUBLE | byte[] toBytes(double val) <br/> double toDouble(byte[] bytes) |
| DATE | Stores the number of days since epoch as int value. |
| TIME | Stores the number of milliseconds of the day as int value. |
| TIMESTAMP | Stores the milliseconds since epoch as long value. |
| ARRAY | Not supported |
| MAP <br/> MULTISET | Not supported |
| ROW | Not supported |