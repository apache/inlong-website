---
title: Overview
sidebar_position: 1
---

InLong audit is a subsystem independent of InLong, which performs real-time audit and reconciliation on the incoming and outgoing traffic of the Agent, DataProxy, and Sort modules of the InLong system.
There are three granularities for reconciliation: minutes, hours, and days.

The audit reconciliation is based on the log reporting time, and each service participating in the audit will conduct real-time reconciliation according to the same log time. Through audit reconciliation, we can clearly understand InLong
The transmission status of each module, and whether the data stream is lost or repeated

## Architecture
![](img/audit_architecture.png)
1. The audit SDK is nested in the service that needs to be audited, audits the service, and sends the audit result to the audit access layer
2. The audit proxy writes audit data to MQ (Pulsar, Kafka or TubeMQ)
3. The distribution service consumes the audit data of MQ, and writes the audit data to MySQL, Elasticsearch and ClickHouse.
4. The interface layer encapsulates the data of MySQL, Elasticsearch and ClickHouse.
5. Application scenarios mainly include report display, audit reconciliation, etc.
6. Support audit and reconciliation of data supplementary recording scenarios.
7. Support audit reconciliation in Flink checkpoint scenarios.

## Audit Dimension
| | | || | | | | | |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Machine ip | Container ID | Thread ID | Log time (minutes) | Audit ID | inlong_group_id | inlong_stream_id | Number of records | Size | Transmission delay (ms) |
## Audit ID
The receiving and sending of each module are respectively an independent audit item ID

|Inlong Service Module |Audit ID |
|----|----|
|Inlong API Received Successfully	|1 |
|Inlong API Send Successfully	|2|
|Inlong Agent Received Successfully	|3|
|Inlong Agent Send Successfully	|4|
|Inlong DataProxy Received Successfully	|5|
|Inlong DataProxy Send Successfully	|6|
|Inlong Sort Received Successfully	|7|
|Inlong Sort Send Successfully	|8|

## Data Transfer Protocol
The transmission protocol between sdk, access layer, and distribution layer is Protocol Buffers
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
  AuditMessageHeader msg_header = 1;   
  repeated AuditMessageBody msg_body = 2;   
}

message AuditMessageHeader {
  string ip = 1;            
  string docker_id = 2;     
  string thread_id = 3;     
  uint64 sdk_ts = 4;        
  uint64 packet_id = 5;     
}

message AuditMessageBody {
  uint64 log_ts = 1;   
  string inlong_group_id= 2;   
  string inlong_stream_id= 3; 
  string audit_id = 4;   
  uint64 count = 5;     
  uint64 size = 6;      
  int64  delay = 7;      
}

message AuditReply {
  enum RSP_CODE {
    SUCCESS  = 0;  
    FAILED   = 1;   
    DISASTER = 2; 
  }
  RSP_CODE rsp_code = 1;   
  optional string message = 2;
}
```
## Audit SDK Implementation Details
### Target
***1. Support local disaster recovery***
***2. Data Uniqueness***
***3. Reduce data loss caused by abnormal restart***

### Service Discovery
Audit name discovery between sdk and access layer, support plug-in, including domain name, vip, etc.

### Disaster Recovery
* When the SDK fails to send the access layer, it will be placed in the failure queue. 
* When the failure queue reaches the threshold, it will be written to the local disaster recovery file. 
* When the local disaster recovery file reaches the threshold, the old data will be eliminated (eliminated by time).

## Access layer Implementation
### Target
***1.High reliability***  
***2.at least once***

## Distribution Implementation
### Target
***1. High real-time performance (minute level)***
***2. Can operate tens of billions of audit data per day***
***3. Can be deduplicated***

## OpenAPI Implementation
### Architecture
![](img/audit_openapi.png)
* The audit interface layer provides OpenAPI capabilities to the outside world through real-time aggregation and local caching of multiple audit data sources.

### UI Interface display
### Architecture
![](img/audit_ui.png)
* The front-end page pulls the audit data of each module through the interface layer and displays it.