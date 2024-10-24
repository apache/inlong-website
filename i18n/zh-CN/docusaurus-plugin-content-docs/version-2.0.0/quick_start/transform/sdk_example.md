---
title: SDK 使用示例
sidebar_position: 1
---

# 前提条件
- JDK 1.8 或以上
- Maven 2.5 或以上

# 安装 SDK 依赖库
需要在项目中包含 SDK 库，进行 SDK 的使用。库提供以下两种获取方式：
- 获取源码自行编译并将 SDK 包部署到本地仓库，详见[如何编译](https://inlong.apache.org/docs/next/quick_start/how_to_build/)。
- 直接引用 Apache 仓库里的已有库。
```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>transform-sdk</artifactId>
    <version>1.13.0</version>
</dependency>
```

# 具体样例
## Transform 需求
- 将shenzhen地区的视频播放开始数据过滤出来，原始字段包括：
    - event_time，事件时间
    - zone，地区，可选值：[ shenzhen, shanghai, beijing ]
    - video_id，视频ID
    - username，用户名
    - operation_type，操作类型，可选值[ start, end ]
- 原始测试数据，CSV 格式，竖线分隔
```shell
2024-05-09 20:00:01|shenzhen|1111|zhangsan|start
2024-05-09 20:00:02|shanghai|1111|lisi|start
2024-05-09 20:00:03|shanghai|1111|lisi|end
2024-05-09 20:00:04|shenzhen|1111|zhangsan|end
2024-05-09 20:00:05|beijing|1111|zhangsan|start
2024-05-09 20:00:06|beijing|1111|zhangsan|end
```
- 预期结果数据，KV格式
```shell
event_time=2024-05-09 20:00:02&zone=shanghai&video_id=1111&username=lisi&operation_type=start
```
## Transform SDK 实现
### 配置源数据配置
```java
// source
SourceInfo csvSource = new CsvSourceInfo("UTF-8", "|", "\\", null);
```
### 配置结果数据配置
```java
// sink
SinkInfo kvSink = new KvSinkInfo("UTF-8", null);
```
### 执行转换逻辑
```java
String transformSql = "select $1 event_time,$2 zone,$3 video_id,$4 username,$5 operation_type from source where $2='shenzhen' and $5='start' ";
TransformConfig config = new TransformConfig(csvSource, kvSink, transformSql);
```
### 构建SDK对象并执行转换
```java
TransformProcessor processor = new TransformProcessor(config);

String srcString = "2024-05-09 20:00:01|shenzhen|1111|zhangsan|start\n"
  + "2024-05-09 20:00:02|shanghai|1111|lisi|start\n"
  + "2024-05-09 20:00:03|shanghai|1111|lisi|end\n"
  + "2024-05-09 20:00:04|shenzhen|1111|zhangsan|end\n"
  + "2024-05-09 20:00:05|beijing|1111|zhangsan|start\n"
  + "2024-05-09 20:00:06|beijing|1111|zhangsan|end";

List<String> outputs = processor.transform("2024-04-28 00:00:00|ok", new HashMap<>());

// Expected outcome：[event_time=2024-05-09 20:00:02&zone=shanghai&video_id=1111&username=lisi&operation_type=start]
System.out.println(outputs);
```

# 更多 Transform 样例
- 请详见 [更多样例](https://github.com/apache/inlong/blob/master/inlong-sdk/transform-sdk/src/test/java/org/apache/inlong/sdk/transform/process)。
