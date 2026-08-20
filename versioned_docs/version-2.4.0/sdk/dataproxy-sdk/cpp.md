---
title: C++ SDK
sidebar_position: 1
---

import {siteVariables} from '../../version';

## Create real-time synchronization task
Create a task on the Dashboard or through the command line, and use `Auto Push` (autonomous push) as the data source
type.

## Import C++ SDK
The header files and libraries of the SDK need to be introduced into the project before using the SDK. Header files and
libraries can be self-compiled from source,
see [SDK Compile&Use](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp)。

## Data report process
After import the SDK, you can report single or batch data by calling the `send` related interface of the
SDK [send_demo.cc](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp/release/demo/send_demo.cc)
。The overall process includes the following three steps：

### Initialize SDK
SDK supports a process to create one SDK instance, which is multi-thread safe. It also supports a process to create
multiple SDK instances. Each SDK instance is independent of each other and each SDK instance is also thread-safe
- Create SDK instance object
```cpp
InLongApi inlong_api
```

- object instance initialization
  Configuration files are in json format, see [Config file description](#Appendix：Config File Description), initialize
  the SDK through the configuration file:
```cpp
// Initialize the SDK, the parameter is the path name of the configuration file; a return value of zero indicates successful initialization
int32_t result = inlong_api.InitApi("/home/conf/config.json");
```

### Call the send interface to report data
The SDK supports single (recommended) and batch sending, both of which are sent in asynchronous mode, and the data
reporting interface is thread-safe. Before data reporting, the callback function can be set to perform callback
processing when the data transmission fails. The callback function signature is as follows:
```cpp
int32_t CallBackFunc(const char* inlong_group_id, const char* inlong_stream_id,
                     const char* msg, int32_t msg_len, 
                     const int64_t report_time, 
                     const char* client_ip);
```

- Single data reporting interface
```cpp
// Return value: zero means sending is successful, non-zero means failure, see SDKInvalidReuslt in tc_api.h for specific exception return value
int32_t Send(const char *inlong_group_id, const char *inlong_stream_id,
             const char *msg, int32_t msg_len,
             UserCallBack call_back = nullptr)
```

### Close SDK
Call the close interface to close the SDK:
```cpp
// A return value of zero means that the shutdown is successful, and subsequent data reporting cannot be performed
// max_waitms：The maximum number of milliseconds to wait before closing the SDK, waiting for the completion of the SDK internal data sending
int32_t CloseApi(int32_t max_waitms);
```

## Warning
- It is recommended to use the SDK as a resident service for data reporting to avoid frequent initialization and
  shutdown of the same process midway, as repeated initialization and shutdown will bring more overhead;
- SDK sending is asynchronous, and a return value of 0 indicates that the data has been successfully stored in the SDK's
  internal buffer and is waiting for network sending. If `inlong_group_id` itself is misconfigured or the network is
  abnormal, it will also cause the data to fail to send, so it is recommended that the user set a callback when calling
  this interface, and execute the callback when the data fails to be sent after multiple retries.

## Appendix：Config File Description
The configuration file format and important parameters are as follows:
```json
{
  "init-param": {
    "inlong_group_ids": "b_inlong_group_test_01, b_inlong_group_test_02",
    "manager_url": "http://127.0.0.1:8099/inlong/manager/openapi/dataproxy/getIpList",
    "manager_update_interval": 2,
    "manager_url_timeout": 5,
    "msg_type": 7,
    "max_proxy_num": 8,
    "per_groupid_thread_nums": 1,
    "dispatch_interval_zip": 8,
    "dispatch_interval_send": 10,
    "recv_buf_size": 10240000,
    "send_buf_size": 10240000,
    "enable_pack": true,
    "pack_size": 409600,
    "pack_timeout": 3000,
    "ext_pack_size": 409600,
    "enable_zip": true,
    "min_zip_len": 512,
    "tcp_detection_interval": 60000,
    "tcp_idle_time": 600000,
    "log_num": 10,
    "log_size": 104857600,
    "log_level": 3,
    "log_path": "./",
    "need_auth": false,
    "auth_id": "****",
    "auth_key": "****"
  }
}
```
| parameter               | meaning                                  | Defaults                                                         |
|-------------------------|------------------------------------------|------------------------------------------------------------------|
| inlong_group_ids        | inlong_group_id list                     | b_inlong_group_test_01, b_inlong_group_test_02                   |
| manager_url             | manager address                          | http://127.0.0.1:8099/inlong/manager/openapi/dataproxy/getIpList |
| manager_update_interval | request manager intervals                | 2 minute                                                         |
| manager_url_timeout     | request manager timeout                  | Timestamp                                                        |
| msg_type                | data type                                | 7                                                                |
| max_proxy_num           | maximum proxy data for a single instance | 8                                                                |
| per_groupid_thread_nums | number of single inlong_group_id threads | 1                                                                |
| dispatch_interval_zip   | compress data intervals                  | 8 ms                                                             |
| dispatch_interval_send  | data distribution intervals              | 10 ms                                                            |
| recv_buf_size           | receive buffer size                      | 10240000 Byte                                                    |
| send_buf_size           | send buffer size                         | 10240000 Byte                                                    |
| enable_pack             | whether to allow packaging               | true                                                             |
| pack_size               | pack size                                | 409600 Byte                                                      |
| pack_timeout            | pack interval                            | 3000 ms                                                          |
| ext_pack_size           | maximum size of a single message         | 409600 Byte                                                      |
| enable_zip              | whether to allow compression             | true                                                             |
| min_zip_len             | minimum compression size                 | 512 Byte                                                         |
| tcp_detection_interval  | tcp detection intervals                  | 60000 ms                                                         |
| tcp_idle_time           | tcp idle time                            | 600000 ms                                                        |
| log_num                 | Number of log files                      | 10                                                               |
| log_size                | single log file size                     | 104857600 Byte                                                   |
| log_level               | log level                                | 3 .trace(4)>debug(3)>info(2)>warn(1)>error(0)                    |
| log_path                | log directory                            | ./                                                               |
| need_auth               | whether to enable authentication         | false                                                            |
| auth_id                 | account                                  |                                                                  |
| auth_key                | password                                 |                            