---
title: Parse InLongMsg
sidebar_position: 1
---

import {siteVariables} from '../version';

## Overview
If you consume data directly from a message queue (InLong TubeMQ or Pulsar), you need to parse `InLongMsg` first. Origin data can be parsed in the following ways.

## Dependency
- Add Maven Dependency
<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>inlong-common</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

- Add Parse Method
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
            // Origin data sended by InLong agent
            originalContentByteList.add(bodyBytes);
        }
    }
    return originalContentByteList;
}
```