---
title: Redis
sidebar_position: 19
---

import {siteVariables} from '../../version';

## 概况

`Redis Load` 节点支持将数据写入 Redis 。

### Data Type

详细见：[Redis数据类型](https://redis.io/topics/data-types-intro)

#### Plain

| c1     | c2  | c3  | c4  | c5  | c6  | c7  | 
|--------|-----|-----|-----|-----|-----|-----|
| rowKey |     |     |     |     |     |     |

Redis 字符串命令用于管理 Redis 中的字符串值。

第一个元素是 Redis 行键，必须是字符串类型，其余字段 (`c2` ~ `c6`) 将被序列化为一个值并放入 Redis 中。

#### Hash

Redis Hash 是一种数据类型，表示字符串字段和字符串之间的映射。其有两个成员：  
- Redis 哈希字段  
- Redis 哈希值  

#### Set

Redis SET 是简单的字符串列表，按插入顺序排序。你可以在 Redis Set 的头部或尾部添加元素。

#### BitMap

BITMAP 不是一种实际的数据类型，而是在 String 对象上定义的一组面向 Bit 的类型。由于字符串是 binary safe blobs，其最大长度为512 MB, 它们适合设置多达 2^32 个不同的 Bit。

### SchemaMappingMode

#### Dynamic

Dynamic 模式映射 java.util.map 到 RedisDataType，该模式下有两个成员：  
- Redis key
- java.util.Map, 它将被迭代，其中键为 Redis key，值为 Redis value  

#### Static Prefix Match

其中至少有两个字段，第一个成员是 Redis key，第二个字段中的每个字段代表一个 Redis value

```shell
key, field, value1, value2, value3, [value]...
```

#### Static KV Pair

其有两个字段，第一个字段是 key ，和其他字段是键值对

```shell
 key, field1, value1,field2,value2,field3,value3,[field,value]...
```

### SQL demo

#### Plain

> Plain 只支持 Static Prefix Match 模式

```sql
CREATE TABLE sink (
    key STRING,
    aaa STRING,
    bbb DOUBLE,    
    ccc BIGINT,    
    PRIMARY KEY (`key`) NOT ENFORCED
) WITH (  
    'connector' = 'redis-inlong',  
    'sink.batch-size' = '1',  
    'format' = 'csv',  
    'data-type' = 'PLAIN',  
    'redis-mode' = 'standalone',  
    'host' = 'localhost',  
    'port' = '56615',  
    'maxIdle' = '8',  
    'minIdle' = '1',  
    'maxTotal' = '2',  
    'timeout' = '2000'
);
```

#### Hash with Prefix Match

| c1     | c2            | c3  | c4  | c5  | c6  | c7  | 
|--------|---------------|-----|-----|-----|-----|-----|
| rowKey | field: String |     |     |     |     |     |

第一个元素是 Redis Key，必须是字符串类型  
第二个元素是哈希数据类型中的 Redis 字段名  
其余字段 (` c2 ` ~ ` c7 `) 将被序列化为一个值并放入 Redis 中

```sql
CREATE TABLE sink (
    key STRING, 
    field_name STRING, 
    value_1 DOUBLE,
    value_2 BIGINT, 
    PRIMARY KEY (`key`) NOT ENFORCED
) WITH (
   'connector' = 'redis-inlong',
   'sink.batch-size' = '1',
   'format' = 'csv',
   'data-type' = 'HASH',
   'redis-mode' = 'standalone',
   'host' = 'localhost',
   'port' = '56869',
   'maxIdle' = '8',
   'minIdle' = '1',
   'maxTotal' = '2',
   'timeout' = '2000'
);
```

#### Hash with Static KV Pair

| c1     | c2             | c3             | c4              | c5             | c6              | c7             | 
|--------|----------------|----------------|-----------------|----------------|-----------------|----------------|
| rowKey | field1: String | value 1:String | field 2: String | value 2:String | field 3: String | value 3:String |

第一个元素是 Redis 行键，必须是字符串类型。
奇数元素 (` c2 ` / ` c4 ` / ` c6 `) 是哈希数据类型中的 Redis 字段名，必须是字符串类型。
偶数元素 (` c3 ` / ` c5 ` / ` c7 `) 是哈希数据类型中的 Redis 字段值，必须是字符串类型。

```sql
CREATE TABLE sink (
    key STRING,
    field1 STRING,
    value1 STRING,
    field2 STRING,
    value2 STRING,
    PRIMARY KEY (`key`) NOT ENFORCED
) WITH (
  'connector' = 'redis-inlong',
  'sink.batch-size' = '1',
  'format' = 'csv',
  'data-type' = 'HASH',
  'schema-mapping-mode' = 'STATIC_KV_PAIR',
  'redis-mode' = 'standalone',
  'host' = 'localhost',
  'port' = '6379',
  'maxIdle' = '8',
  'minIdle' = '1',
  'maxTotal' = '2',
  'timeout' = '2000'
);
```

#### Hash with Dynamic

| c1     | c2            | 
|--------|---------------|
| rowKey | fieldValueMap |

第一个元素是 Redis 行键，必须是字符串类型。
第二个元素必须是 Map<String,String>, 其中键是 fieldName ，值是 fieldValue。

```sql
CREATE TABLE sink (
    key STRING,
    fieldValueMap MAP<STRING,STRING>,
    PRIMARY KEY (`key`) NOT ENFORCED
) WITH (
  'connector' = 'redis-inlong',
  'sink.batch-size' = '1',
  'format' = 'csv',
  'data-type' = 'HASH',
  'schema-mapping-mode' = 'DYNAMIC',
  'redis-mode' = 'standalone',
  'host' = 'localhost',
  'port' = '6379',
  'maxIdle' = '8',
  'minIdle' = '1',
  'maxTotal' = '2',
  'timeout' = '2000'
)"
```

#### BitMap with Static KV Pair

| c1     | c2           | c3              | c4            | c5              | c6            | c7              | 
|--------|--------------|-----------------|---------------|-----------------|---------------|-----------------|
| rowKey | field1: Long | value 1:Boolean | field 2: Long | value 2:Boolean | field 3: Long | value 3:Boolean |

第一个元素是 Redis 行键，必须是字符串类型。
奇数元素 (` c2 ` / ` c4 ` / ` c6 `) 是位图数据类型中的 Redis 偏移量，必须是 Long 类型。
偶数元素 (` c3 ` / ` c5 ` / ` c7 `) 是位图数据类型中的 Redis 值，必须是布尔类型。

```sql
CREATE TABLE sink (
    key STRING,
    offset_1 BIGINT,
    value_1 BOOLEAN,
    offset_2 BIGINT,
    value_2 BOOLEAN,
    PRIMARY KEY (`key`) NOT ENFORCED
) WITH (
  'connector' = 'redis-inlong',
  'sink.batch-size' = '1',
  'format' = 'csv',
  'data-type' = 'BITMAP',
  'schema-mapping-mode' = 'STATIC_KV_PAIR',
  'redis-mode' = 'standalone',
  'host' = 'localhost',
  'port' = '6379',
  'maxIdle' = '8',
  'minIdle' = '1',
  'maxTotal' = '2',
  'timeout' = '2000'
)
```