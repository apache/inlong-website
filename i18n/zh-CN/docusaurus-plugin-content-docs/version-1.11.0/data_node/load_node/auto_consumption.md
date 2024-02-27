---
title: 自主消费
sidebar_position: 2
---

## Overview
**自主消费** 是指直接从消息队列服务中 (TubeMQ or Pulsar) 消费数据, 你可以使用 [Pulsar SDK Client](https://pulsar.apache.org/docs/en/2.8.3/client-libraries/) 或者 [TubeMQ SDK Client](modules/tubemq/clients_java.md) 进行消费， 
获取到数据后，需要通过 [解析 InLongMsg](development/inlong_msg.md) 获取原数据进行下一步处理。