---
title: 解析 InLongMsg
sidebar_position: 1
---

## 总览
如果直接从消息队列（InLong TubeMQ 或Pulsar)消费数据，需要先对`InLongMsg` 进行解析。可通过以下方式可以解析出源数据。

## 解析
- 增加maven 依赖
```java
<dependency>
        <groupId>org.apache.inlong</groupId>
        <artifactId>inlong-common</artifactId>
        <version>inlong_version</version>
</dependency>
```

- 增加解析逻辑
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
            // agent 发送的原始用户数据
            originalContentByteList.add(bodyBytes);
        }
    }
    return originalContentByteList;
}
```