---
title: InLongMsg format definition and usage
sidebar_position: 1
---

## Overview

Users report data to the InLong system through SDK, HTTP, Agent and other data reporting methods. InLong's DataProxy component packages the received data into the `InLongMsg` format and stores it in the message body of the MQ message. After consuming data from MQ, users need to decode it according to the `InLongMsg` format to obtain the original reported data. This article mainly introduces the data structure of the `InLongMsg` format and how users parse this type of data after receiving it.

## Parsing messages of type InLongMsg

The data consumed directly from InLong's message queue (InLong TubeMQ or Pulsar), you need to parse InLongMsg first. You can parse the source data in the following ways.

### Add Maven dependency

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>inlong-common</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

### Add Parse Method

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
            // Origin data sent by InLong reporter
            originalContentByteList.add(bodyBytes);
        }
    }
    return originalContentByteList;
}
```
