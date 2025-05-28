---
title: Redis
sidebar_position: 19
---

import {siteVariables} from '../../version';

## Summary

`Redis Load` Node supports writing data to redis.

### Data Type

See detail: [Redis Data Type](https://redis.io/topics/data-types-intro)

#### Plain

| c1     | c2  | c3  | c4  | c5  | c6  | c7  | 
|--------|-----|-----|-----|-----|-----|-----|
| rowKey |     |     |     |     |     |     |

Redis strings commands are used for managing string values in Redis

The first element is Redis row key,must be string type, and the remaining fields(`c2`~`c6`) will be serialized into one value and put into Redis.

#### Hash

* A Redis hash is a data type that represents a mapping between a string field and a string
  value. There are two members in hash DataType:
- Redis Hash  
- Redis Hash value  

#### Set

Redis SET are simply lists of strings, sorted by insertion order. You can add elements in Redis SET in the head or the tail of the list.

#### BitMap

BitMaps are not an actual data type, but a set of bit-oriented operations defined on the String type.Since strings are binary safe blobs and their maximum length is 512 MB, they are suitable to set up to 2^32 different bits.  

### SchemaMappingMode

#### Dynamic

The DYNAMIC mode witch mapping a java.util.Map to RedisDataType. There are two members in DYNAMIC mode:  
- Redis key
- java.util.Map object, witch will be iterated, the entry key is redis key, and the entry value is redis value.  

#### Static Prefix Match

The are at least two fields, the first member is redis key, and each field from the second field represents a redis value.  

```shell
key, field, value1, value2, value3, [value]...
```

#### Static KV Pair

There are two fields, the first field is key, and the other fields are pairs of field and value.  

```shell
 key, field1, value1,field2,value2,field3,value3,[field,value]...
```

### SQL Demo

#### Plain

> Plain only support STATIC_PREFIX_MATCH schema mapping mode

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

The first element is Redis row key, must be string type.
The second element is Redis field name in Hash DataType.
The remaining fields(`c2`~`c7`) will be serialized into one value and put into redis

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

The first element is Redis row key, must be string type.
The odd elements(`c2` / `c4` / `c6`) are Redis field names in Hash DataType, must be String type.
The even elements(`c3` / `c5` / `c7`) are Redis field values in Hash DataType, must be String type.

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

#### Hash with dynamic

| c1     | c2            | 
|--------|---------------|
| rowKey | fieldValueMap |

The first element is Redis row key, must be string type.
The second element is must be `Map<String,String>` type: key is fieldName, value is fieldValue.

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

#### BitMap with static KV pair

| c1     | c2           | c3              | c4            | c5              | c6            | c7              | 
|--------|--------------|-----------------|---------------|-----------------|---------------|-----------------|
| rowKey | field1: Long | value 1:Boolean | field 2: Long | value 2:Boolean | field 3: Long | value 3:Boolean |

The first element is Redis row key, must be string type.
The odd elements(`c2` /`c4` /`c6` ) are Redis offsets in Bitmap DataType, must be Long type.
The even elements(`c3` / `c5` / `c7`) are Redis values in Bitmap DataType, must be Boolean type.

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