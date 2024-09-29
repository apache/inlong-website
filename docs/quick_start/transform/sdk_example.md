---
title: SDK Usage Example
sidebar_position: 1
---

# Prerequisites
- JDK 1.8 or above
- Maven 2.5 or above

# Installing SDK Dependencies
You need to include the SDK library in your project to use the SDK. The library can be obtained in the following two ways:
- Obtain the source code, compile it yourself, and deploy the SDK package to the local repository. See [How to Compile](https://inlong.apache.org/docs/next/quick_start/how_to_build/) for details.
- Directly reference the existing library in the Apache repository.
xml
```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>transform-sdk</artifactId>
    <version>1.13.0</version>
</dependency>
```

# Specific Examples
## Transform Requirements
- Filter out the video playback start data in the Shenzhen region, the original fields include:
    - event_time
    - zone, optional values: [ shenzhen, shanghai, beijing ]
    - video_id
    - username
    - operation_type, optional values [ start, end ]
- Original test data, CSV format, vertical bar delimited.
```shell
2024-05-09 20:00:01|shenzhen|1111|zhangsan|start
2024-05-09 20:00:02|shanghai|1111|lisi|start
2024-05-09 20:00:03|shanghai|1111|lisi|end
2024-05-09 20:00:04|shenzhen|1111|zhangsan|end
2024-05-09 20:00:05|beijing|1111|zhangsan|start
2024-05-09 20:00:06|beijing|1111|zhangsan|end
```
- Expected result data, KV format
```shell
event_time=2024-05-09 20:00:02&zone=shanghai&video_id=1111&username=lisi&operation_type=start
```
## Transform SDK Implementation
### Configure Source Data Configuration
```java
// source
SourceInfo csvSource = new CsvSourceInfo("UTF-8", "|", "\\", null);
```
### Configure Result Data Configuration
```java
// sink
SinkInfo kvSink = new KvSinkInfo("UTF-8", null);
```
### Execute Transformation Logic
```java
String transformSql = "select $1 event_time,$2 zone,$3 video_id,$4 username,$5 operation_type from source where $2='shenzhen' and $5='start' ";
TransformConfig config = new TransformConfig(csvSource, kvSink, transformSql);
```
### Build SDK Object and Execute Transformation
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

# More Transform Examples
- For more examples, please see [More Examples](https://github.com/apache/inlong/blob/master/inlong-sdk/transform-sdk/src/test/java/org/apache/inlong/sdk/transform/process).
