---
title: 配置说明
sidebar_position: 2
---

# 参数配置说明
## TransformConfig 配置说明
```java
public class TransformConfig {
    @JsonProperty("sourceInfo")
    private SourceInfo sourceInfo;    // 数据源的解码定义
    @JsonProperty("sinkInfo")
    private SinkInfo sinkInfo;        // 数据结果的编码定义
    @JsonProperty("transformSql")
    private String transformSql;    // 数据转换的 SQL
}
```

## SourceInfo 配置说明
### CSV
```java
public CsvSourceInfo(
    @JsonProperty("charset") String charset,		// 字符集
    @JsonProperty("delimiter") String delimiter,	// 分隔符
    @JsonProperty("escapeChar") String escapeChar,	// 转义符，如果为空，则解码时不进行反转义操作
    @JsonProperty("fields") List<FieldInfo> fields)	// 字段列表，如果为空，则解码时默认按分隔符解析，字段名按 $1、$2、$3...来分配，注意从1开始；
);
```

### KV
```java
public KvSourceInfo(
    @JsonProperty("charset") String charset,		// 字符集
    @JsonProperty("fields") List<FieldInfo> fields)	// 字段列表，如果为空，则解码时默认按 KV 里的 Key 作为字段名
);
```

### ProtoBuffer
```java
public PbSourceInfo(
    @JsonProperty("charset") String charset,					// 字符集
    @JsonProperty("protoDescription") String protoDescription,	// ProtoBuf 协议描述的 Base64 编码
    @JsonProperty("rootMessageType") String rootMessageType,	// 解码源数据的 MessageType ，MessageType 需要在 ProtoBuf 协议中已定义
    @JsonProperty("rowsNodePath") String rowsNodePath)			// ProtoBuf 协议包含多条待转换数据的数组节点路径
);
```

#### 生成ProtoBuf 协议描述
- 安装 Protocol Buffers compiler
```shell
PB_REL="https://github.com/protocolbuffers/protobuf/releases"
curl -LO $PB_REL/download/v3.15.8/protoc-3.15.8-linux-x86_64.zip
unzip protoc-3.15.8-linux-x86_64.zip -d $HOME/.local
export PATH="$HOME/.local/bin:$PATH"
protoc --version
#显示libprotoc 3.15.8
```
- 解析协议生成描述的 Base64 编码
```shell
# transform.proto 是 proto 协议文件，transform.description 是协议解析后的二进制描述文件
protoc --descriptor_set_out=transform.description ./transform.proto --proto_path=.
# 将协议解析后的二进制描述文件 transform.description 进行 Base64 编码，写入文件 transform.base64，这个文件内容就是配置接口中的参数：protoDescription
base64 transform.description |tr -d '\n' > transform.base64
```
- transform.proto 样例
```protobuf
syntax = "proto3";
package test;
message SdkMessage {
  bytes msg = 1;
  int64 msgTime = 2;
  map<string, string> extinfo = 3;
}
message SdkDataRequest {
  string sid = 1;
  repeated SdkMessage msgs = 2;
  uint64 packageID = 3;
}
```
- transform.base64 样例
```
CrcCCg90cmFuc2Zvcm0ucHJvdG8SBHRlc3QirQEKClNka01lc3NhZ2USEAoDbXNnGAEgASgMUgNtc2cSGAoHbXNnVGltZRgCIAEoA1IHbXNnVGltZRI3CgdleHRpbmZvGAMgAygLMh0udGVzdC5TZGtNZXNzYWdlLkV4dGluZm9FbnRyeVIHZXh0aW5mbxo6CgxFeHRpbmZvRW50cnkSEAoDa2V5GAEgASgJUgNrZXkSFAoFdmFsdWUYAiABKAlSBXZhbHVlOgI4ASJmCg5TZGtEYXRhUmVxdWVzdBIQCgNzaWQYASABKAlSA3NpZBIkCgRtc2dzGAIgAygLMhAudGVzdC5TZGtNZXNzYWdlUgRtc2dzEhwKCXBhY2thZ2VJRBgDIAEoBFIJcGFja2FnZUlEYgZwcm90bzM=
```
- transform.description 样例
![](img/transform_description.png)

### Json
```java
public JsonSourceInfo(
    @JsonProperty("charset") String charset,			// 字符集
    @JsonProperty("rowsNodePath") String rowsNodePath)	// Json 协议包含多条待转换数据的数组节点路径
);
```
## SinkInfo 配置说明
### CSV
```java
public CsvSinkInfo(
    @JsonProperty("charset") String charset,		// 字符集
    @JsonProperty("delimiter") String delimiter,	// 分隔符
    @JsonProperty("escapeChar") String escapeChar,	// 转义符，如果为空，则编码时不进行转义操作
    @JsonProperty("fields") List<FieldInfo> fields)	// 字段列表，如果为空，则编码时默认按 TransformSQL 的 Select 字段顺序拼接
);
```
### KV
```java
public KvSinkInfo(
    @JsonProperty("charset") String charset,		// 字符集
    @JsonProperty("fields") List<FieldInfo> fields)	// 字段列表，如果为空，则编码时默认按 TransformSQL 的 Select 字段 Alias 作为 Key 拼接
);
```
# TransformSQL 配置说明
## CSV / KV 字段引用
- SourceInfo 没有配置字段列表。
    - CSV 格式，字段名用 $1、$2、$3... 来引用。
    - KV 格式，字段名直接引用源数据中的 Key。
- SourceInfo 的字段名和 SinkInfo 字段名不一致，可以通过 Select 字段的别名映射转换。
## ProtoBuf / Json 树形字段引用
- 所有字段只能以 $root.、$child. 作为前缀，$root 表示根节点，$child 表示多行的数组节点。
- 多级节点，用小数点分隔，如 $root.extParams.name。
- 对于数组节点，用小括号标识数组下标，如 $root.msgs(1).msgTime。
## 运算符支持
- 目前已支持运算符
    - 算术运算符，+、-、*、/、(、)
    - 比较运算符，=、!=、>、>=、<、<=
    - 逻辑运算符，and、or、!、not、(、)
## 函数说明
- CONCAT(string1, string2, ...)，返回连接 string1，string2， … 的字符串。如果有任一参数为 NULL，则返回 NULL。 例如 CONCAT('AA', 'BB', 'CC') 返回 "AABBCC"。
- NOW()，返回本地时区的当前 SQL 时间戳。
- 详见函数说明章节。
## SQL 样例
```sql
SELECT ftime,extinfo FROM source WHERE extinfo='ok'

SELECT $1 ftime,$2 extinfo FROM source WHERE $2!='ok'

SELECT $root.sid,$root.packageID,$child.msgTime,$child.msg FROM source

SELECT $root.sid,$root.packageID,$root.msgs(1).msgTime,$root.msgs(0).msg FROM source

SELECT $root.sid,
  ($root.msgs(1).msgTime-$root.msgs(0).msgTime)/$root.packageID field2,
  $root.packageID*($root.msgs(0).msgTime*$root.packageID+$root.msgs(1).msgTime/$root.packageID)*$root.packageID field3,
  $root.msgs(0).msg field4
FROM source 
WHERE $root.packageID<($root.msgs(0).msgTime+$root.msgs(1).msgTime+$root.msgs(0).msgTime+$root.msgs(1).msgTime)

SELECT $root.sid,
  $root.packageID,
  $child.msgTime,
  concat($root.sid,$root.packageID,$child.msgTime,$child.msg) msg,$root.msgs.msgTime.msg
FROM source

SELECT now() FROM source
```
# 常见问题
- SDK 调用是线程安全的。
- 配置变更，直接修改配置对象的参数是不起效果的，需要重建 SDK 对象。
- 如果 CSV、KV 格式的转换源数据里包含换行符、分隔符（竖线、逗号等）、反斜杠(转义符)，需要配置正确的转义符和行分隔符。
    - 如果不配置，那么转换后数据的字段顺序会发生错乱，换行符会导致一条数据变两条，竖线分隔符会导致字段错位。
- 避免在处理每条数据时都创建一个 SDK 对象，SDK 对象初始化需要编译转换 SQL 并建立 AST 语义解析树，频繁调用会引发性能问题，推荐的使用方式为在程序中复用一个初始化好的 SDK 对象处理数据。