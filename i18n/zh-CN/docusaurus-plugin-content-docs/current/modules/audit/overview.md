---
title: 总览
sidebar_position: 1
---

* InLong 审计是独立于 InLong 的一个子系统，对 InLong 系统的 Agent、DataProxy、Sort 模块的入流量、出流量进行实时审计对账。
* 对账的粒度有分钟、10分钟、30分钟、小时、天等等。

审计对账以日志上报时间为统一的口径，参与审计的各个服务将按照相同的日志时间进行实时对账。通过审计对账，我们可以清晰的了解 InLong 
各个模块的传输情况，以及数据流是否有丢失或者重复

## 架构
![](img/audit_architecture.png)
1. 审计SDK嵌套在需要审计的服务，对服务进行审计，将审计结果发送到审计接入层。
2. 审计接入层将审计数据写到 MQ (Pulsar、Kafka 或者 TubeMQ)。
3. 分发服务消费 MQ 的审计数据，将审计数据写到 MySQL、StarRocks。
4. 接口层将 MySQL、StarRocks 的数据进行实时聚合并且 cache,对外提供 OpenAPI。
5. 应用场景主要包括报表展示、审计对账等等。
6. 支持数据补录场景的审计对账。
7. 支持 Flink CheckPoint 场景的审计对账。

## 模块

| 模块             | 描述                                                 |
|:---------------|:---------------------------------------------------|
| audit-sdk      | 审计埋点上报，各个模块使用该 SDK 上报审计数据                          |
| audit-proxy    | 审计代理层，接收 SDK 上报数据，转发到 MQ (pulsar / kafka / tubeMQ) |
| audit-store    | 审计存储层，支持通用的 JDBC 协议                                |
| audit-service  | 审计服务层，提供聚合、cache、OpenAPI 等能力                       |

## 审计维度
|       |       |       || |       | | | | |
|-------|-------|-------| ---- |-------| ---- | ---- | ---- | ---- | ---- |
| 机器 ip | 容器 ID | 线程 ID | 日志时间(分钟) | 审计 ID | inlong_group_id | inlong_stream_id | 条数 | 大小 | 传输时延(ms) |

## 审计项 ID
每个模块的接收与发送分别为一个独立的审计项 ID

| InLong 服务模块            | 审计 ID |
|------------------------|-------|
| InLong API 接收成功	       | 1     |
| InLong API 发送成功	       | 2     |
| InLong Agent 接收成功	     | 3     |
| InLong Agent 发送成功	     | 4     |
| InLong DataProxy 接收成功	 | 5     |
| InLong DataProxy 发送成功	 | 6     |

## 数据传输协议
SDK、接入层、分发层之间的传输协议为 Protocol Buffers
```markdown
syntax = "proto3";

package org.apache.inlong.audit.protocol;

message BaseCommand {
    enum Type {
        PING          = 0;
        PONG          = 1;
        AUDITREQUEST  = 2;
        AUDITREPLY    = 3;
    }
    Type type                            = 1;
    optional AuditRequest audit_request  = 2;
    optional AuditReply audit_reply      = 3;
    optional Ping ping                   = 4;
    optional Pong pong                   = 5;
}

message Ping {
}

message Pong {
}

message AuditRequest {
  AuditMessageHeader msg_header = 1;   // 包头
  repeated AuditMessageBody msg_body = 2;   // 包体
}

message AuditMessageHeader {
  string ip = 1;            // SDK 客户端 ip
  string docker_id = 2;     // SDK 所在容器 ID
  string thread_id = 3;     // SDK 所在的线程 ID
  uint64 sdk_ts = 4;        // SDK 上报时间
  uint64 packet_id = 5;     // SDK 上报的包 ID
}

message AuditMessageBody {
  uint64 log_ts = 1;    // 日志时间
  string inlong_group_id= 2;   // InLong Group ID
  string inlong_stream_id= 3; // InLong Stream ID
  string audit_id = 4;   // 审计 ID
  uint64 count = 5;     // 条数
  uint64 size = 6;      // 大小
  int64  delay = 7;      // 总传输延时
}

message AuditReply {
  enum RSP_CODE {
    SUCCESS  = 0;  // 成功
    FAILED   = 1;   // 失败
    DISASTER = 2; // 容灾
  }
  RSP_CODE rsp_code = 1;   // 服务端返回码
  optional string message = 2;
}
```