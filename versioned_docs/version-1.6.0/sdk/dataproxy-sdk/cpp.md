---
title: C++ SDK
sidebar_position: 1
---

import {siteVariables} from '../../version';

## Create real-time synchronization task
Create a task on the Dashboard or through the command line, and use `Auto Push` (autonomous push) as the data source type.

## Import C++ SDK
The header files and libraries of the SDK need to be introduced into the project before using the SDK. Header files and libraries can be self-compiled from source, see [SDK Compile&Use](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp)。

## Data report process
After import the SDK, you can report single or batch data by calling the `send` related interface of the SDK [send_demo.cc](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp/release/demo/send_demo.cc)。The overall process includes the following three steps：

### Initialize SDK
SDK supports object instance and configuration file initialization
- object instance initialization
  Initialize the client configuration firstly, and then call the initialization interface:
``` 
// Initialize client configuration
ClientConfig client;
// Set client-related configuration parameters, proxy_URL_ is a mandatory parameter (the format is as follows), and other parameters are detailed in the client_config.h file
client.proxy_cluster_URL_="http://{Manager url}/inlong/manager/openapi/dataproxy/getIpList";
// Initialize the SDK, a return value of zero means initialization is successful, non-zero means failure
int32_t result = tc_api_init(client);
```

- Config file initialization
  Configuration files are in json format, see [Config file description](#Appendix：Config File Description), initialize the SDK through the configuration file:
```
// Initialize the SDK, the parameter is the path name of the configuration file; a return value of zero means the initialization is successful
int32_t result = tc_api_init("/home/conf/config.json");
```

### Call the send interface to report data
The SDK supports single (recommended) and batch sending, both of which are sent in asynchronous mode, and the data reporting interface is thread-safe. Before data reporting, the callback function can be set to perform callback processing when the data transmission fails. The callback function signature is as follows:
```
int32_t callBackFunc(const char* inlong_group_id, const char* inlong_stream_id, const char* msg, int32_t msg_len, const int64_t report_time, const char* client_ip);
```

- Single data reporting interface
```
// Return value: zero means sending is successful, non-zero means failure, see SDKInvalidReuslt in tc_api.h for specific exception return value
int32_t tc_api_send(const char* inlong_group_id, const char* inlong_stream_id, const char* msg, int32_t msg_len, UserCallBack call_back = NULL);
```

- Batch data reporting interface
```
int32_t tc_api_send_batch(const char* inlong_group_id, const char* inlong_stream_id, const char** msg_list, int32_t msg_cnt, UserCallBack call_back = NULL);
```

### Close SDK
Call the close interface to close the SDK:
```
// A return value of zero means that the shutdown is successful, and subsequent data reporting cannot be performed
// max_waitms：The maximum number of milliseconds to wait before closing the SDK, waiting for the completion of the SDK internal data sending
int32_t tc_api_close(int32_t max_waitms);
```

## Warning
- The initialization and shutdown of the SDK are at the process level, and only need to be initialized once, and the initialization interface needs to be called in the subprocess of the fork before the data is reported;
- It is recommended to use the SDK as a resident service for data reporting to avoid frequent initialization and shutdown of the same process midway, as repeated initialization and shutdown will bring more overhead;
- SDK sending is asynchronous, and a return value of 0 indicates that the data has been successfully stored in the SDK's internal buffer and is waiting for network sending. If `inlong_group_id` itself is misconfigured or the network is abnormal, it will also cause the data to fail to send, so it is recommended that the user set a callback when calling this interface, and execute the callback when the data fails to be sent after multiple retries.

## Appendix：Config File Description
The configuration file format and important parameters are as follows:
```json
{
"init-param": {
"thread_num": 5, // The number of network sending and receiving threads
"enable_pack": true, // Whether to send multiple packages
"pack_size": 409600, // When the data reaches the pack_size size, it will be packaged and sent, unit byte
"ext_pack_size": 409600, // The maximum length of a single piece of data, unit byte
"enable_zip": true, // Whether to perform data compression
"min_ziplen": 4096, // Minimum compression length, unit byte
"enable_retry": true, // Whether to retry if sending fails
"retry_ms": 10000, // retry interval, unit: ms
"retry_num": 3, // Maximum number of retries for sending failures
"max_active_proxy": 4, // The maximum number of tcp connections, used for sending and receiving network data
"max_buf_pool": 548576000, // Single data buffer size, unit byte
"buffer_num_per_groupId": 3, // Number of data buffers for each groupid
"log_num": 10, // Maximum number of log files
"log_size": 10, // The size limit of a single log, unit MB
"log_level": 3, // Log level, trace(4)>debug(3)>info(2)>warn(1)>error(0)
"log_file_type": 2, // Log output type, 2->file, 1->console
"log_path": "./", // log path
"proxy_cfg_preurl": "http://127.0.0.1:8099/inlong/manager/openapi/dataproxy/getIpList", // Visit the URL of the manager
"need_auth": false, // Is authentication required?
"auth_id": "admin", // authentication id
"auth_key": "adminKey" // authentication key
}
}
```