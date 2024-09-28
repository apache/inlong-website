---
title: InLongMsg 格式定义及使用
sidebar_position: 1
---

## 概述

用户通过 SDK、HTTP、Agent 等数据上报方式将数据上报到 InLong 系统，InLong 的 DataProxy 组件将接收到的数据打包成 `InLongMsg` 格式并存储到 MQ 消息的消息体里。用户从 MQ 消费数据后需要按照 `InLongMsg` 格式解码才能获得原始上报数据。本文主要介绍 `InLongMsg` 格式的数据结构，以及用户收到这类数据后如何解析。


## 解析 InLongMsg 类型的消息

直接从 InLong 的消息队列（InLong TubeMQ 或 Pulsar)消费数据，需要先对`InLongMsg` 进行解析。可通过以下方式可以解析出源数据。

### 增加 maven 依赖

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>inlong-common</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

### 增加解析逻辑

```java
public static List<byte[]> parserInLongMsg(byte[] bytes) {
    List<byte[]> originalContentByteList = new ArrayList<>();
    InLongMsg inLongMsg = InLongMsg.parseFrom(bytes);
    Set<String> attrs = inLongMsg.getAttrs();
    if (CollectionUtils.isEmpty(attrs)) {
        return originalContentByteList;
    }
    for (String attr : attrs) {
        if (attr == null) {
            continue;
        }
        Iterator<byte[]> iterator = inLongMsg.getIterator(attr);
        if (iterator == null) {
            continue;
        }
        while (iterator.hasNext()) {
            byte[] bodyBytes = iterator.next();
            if (bodyBytes == null || bodyBytes.length == 0) {
                continue;
            }
            // 上报方发送的原始用户数据
            originalContentByteList.add(bodyBytes);
        }
    }
    return originalContentByteList;
}
```
