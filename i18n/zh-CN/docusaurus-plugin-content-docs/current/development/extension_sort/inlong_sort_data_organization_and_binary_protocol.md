---
title: InLong 分拣数据组织及协议解析
sidebar_position: 5
---
## 总览

本文面向 InLong-Sort-Formats 数据分拣开发人员, 尝试尽可能全面地阐述开发一个数据格式的数据解析过程。
InLong-Sort-Formats 模块支持两大类的数据格式解析，分别基于 Flink Row 和 Flink RowData 类型实现，这两类实现仅仅是，使用的 Flink API 不同，本文基于 Flink RowData 方式的实现进行描述。
目前，InLong-Sort 支持如下几种格式(通过 InLongMsg 格式封装的 6 种，原始的数据格式 3 种):
- InLongMsg binlog
- InLongMSg CSV
- InLongMsg KV
- InLongMsg Tlog-CSV
- InLongMsg Tlog-KV
- InLongMsg PB
- CSV
- KV
- JSON

## 开发之前

- InLongMsg 格式介绍参照 [InLongMsg](../binary_protocol/inlong_msg.md)；
- 原始数据经过 DataProxy 模块的数据均会使用 InLongMsg 格式进行封装，在选用具体的解析方式时，需要注意。
- InLongMsg 中会包含至少一条数据，解析的时候需要处理包含多条的场景；
- InLongMsg 每条消息由两部分组成，消息头和消息体，其中：
  + 消息头：是由 k1=v1&k2=v2 这种格式的 kv 对组成，至少包含 streamId （流 Id）、dt（数据时间戳）等基本信息。
  + 消息体：由具体要解析的数据格式的二进制数组表示，如 kv、csv 等格式。

## 流程图示
- 原始格式数据
  + 解析流程 <br>
    * 第一步：构建具体格式的 DeserializationFormatFactory 对象，例如：CsvFormatFactory；
    * 第二步：通过 DeserializationFormatFactory 对象，获取对应格式的 DecodingFormat 对象；
    * 第三步：通过 DecodingFormat 对象获取 具体格式对应的 DeserializationSchema 对象；
    * 第四步：通过 DeserializationSchema，调用 deserialize(byte[] message) 或 deserialize(byte[] message, Collector<T> out) 方法，传递要解析的数据及获取数据解析后的结果。

  + 扩展流程 <br>
    如图1 所示，扩展非 InLongMsg 格式封装的原始数据格式的解析，需要实现图1 中的三个接口， 图中箭头表示实现间的调用关系。
    ![非 InLongMsg 格式封装的原始数据格式解析扩展](img/sort_data_raw_format_extend.png) 
    <center>图 1 非 InLongMsg 格式封装的原始数据格式解析扩展</center>

- 经过 InLong Msg 封装的格式数据
  + 解析流程 <br>
    * 第一步：构建具体格式的 DeserializationFormatFactory InLongMsgCsvFormatFactory；
    * 第二步：通过 DeserializationFormatFactory 对象，获取对应格式的 DecodingFormat 对象 （AbstractInLongMsgDecodingFormat 类的子类）；
    * 第三步：通过 DecodingFormat 对象获取 具体格式对应的 DeserializationSchema 对象 （AbstractInLongMsgDeserializationSchema 类的子类）；
    * 第四步：通过 DeserializationSchema，调用 deserialize(byte[] message) 或 deserialize(byte[] message, Collector<T> out) 方法，传递要解析的数据及获取数据解析后的结果。

  + 扩展流程 <br>
    如图2 所示，扩展 InLongMsg 格式封装的数据格式的解析，需要实现图 2 中的1个接口和继承实现3个基类，图中箭头表示实现间的调用关系：

    ![InLongMsg 格式封装的数据格式解析扩展](img/sort_data_inlongmsg_format_extend.png) <center>图 2 InLongMsg 格式封装的数据格式解析扩展</center>
    
    扩ß展流程与图1 中所示流程最大的区别是，中间的获取的 DecodingFormat、DeserializationSchema 分别是 AbstractInLongMsgDecodingFormat 与 AbstractInLongMsgDeserializationSchema 类的子类。
    其中，AbstractInLongMsgDeserializationSchema 子类的实现，建议通过实现 AbstractInLongMsgFormatDeserializer 基类的子类， 并调用实现。

## 参考 Demo

- 原始格式数据解析扩展
  参考：[format-rowdata-kv](https://github.com/apache/inlong/tree/master/inlong-sort/sort-formats/format-rowdata/format-rowdata-kv)
- InLongMsg 封装后的格式数据解析扩展
  参考：[format-inlongmsg-rowdata-kv](https://github.com/apache/inlong/tree/master/inlong-sort/sort-formats/format-rowdata/format-inlongmsg-rowdata-kv)

## 写在最后

我们在 Inlong-Sort-formats 中提供常见的多种数据格式的解析处理实现，以便达到开箱即用的目的，同时设计了统一的数据解析处理框架，方便开发人员基于接入的数据格式特点，自定义实现数据解析、转换等方式。诚然，当前实现方式、架构设计仅仅是为了满足当前的解析处理需求和扩展需求， 当前也仅仅支持了几种常见的数据格式的解析，我们会持续致力于丰富更多数据格式的解析和解析效率的提升、改进，也欢迎您的加入。