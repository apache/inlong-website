---
title: Python SDK
sidebar_position: 5
---

## Create New Data Ingestion
Create data ingestion in the Dashboard or through the command-line tool, using Auto Push as the data source type.

## Import Python SDK
The Python SDK is built by encapsulating the C++ SDK and exposes relevant interfaces. At runtime, it calls the underlying C++ SDK to implement related operations (such as sending, closing, etc.).
Because the underlying layer runs based on the C++ SDK, it is highly bound to the system's C++ environment. If the C++ environment used by the provided software package is not completely consistent with the user's system environment, it may cause runtime errors.
First, you need to compile it from the source code yourself. See [C++ SDK Compilation and Usage](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp).
If compilation is successful, you will find the static library file dataproxy_sdk.a in the dataproxy-sdk-cpp/release/lib directory.
Enter the Python SDK directory [dataproxy-sdk-python](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-python) and execute the following commands in sequence:
```shell
chmod +x ./build.sh
./build.sh
```
When the .so file is generated, you will see the following message, and you can choose to enter the target directory of the .so file. By default, the .so file will be copied to the system python site-packages directory.
```shell
Your system's Python site-packages directory is: xxx/xxx
Enter the target directory for the .so files (Press Enter to use the default site-packages directory):
```
After the build process is completed, you can import the package in your Python project and use the InLong DataProxy SDK to report data.
```python
import inlong_dataproxy
```
> **Note**: When the C++ SDK or the Python version you are using is updated, you need to rebuild it following the steps above.

## Data Reporting Process
After introducing the SDK, you can report single (or batch) data by calling the SDK's send related interfaces. For sending demo, please refer to [send_demo.py](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-python/demo). The overall process includes the following three steps:

### Create SDK Instance

The SDK supports the creation of multiple SDK instances within a process. Each SDK instance is independent, and the SDK instance is thread-safe:
- Create an SDK instance object

```python
inlong_api = inlong_dataproxy.InLongApi()
```
- Configure GroupID, StreamID task parameters, auth_id, auth_auth_key user CMK authentication parameters, and set is_internal to true in the configuration file. For detailed configuration file instructions, see the appendix.

```python
// Initialize the SDK, with the parameter being the path name of the configuration file; a return value of zero indicates successful initialization.
init_status = inlong_api.init_api("./config.json")
```
### Call the Send Interface for Data Reporting

The SDK supports single (recommended) and batch sending, both of which are asynchronous modes, and the data reporting interface is thread-safe. Before reporting data, you can set a callback function to handle callbacks when data sending fails. The callback function signature is as follows:
```python
int CallbackFunc(const char *a, const char *b, const char *c, int32_t d, const int64_t e, const char *f)
```
- Single Data Reporting Interface

```python
// Return value: Zero indicates successful sending, non-zero indicates failure. For specific exception return values, please refer to SDKInvalidResult in tc_api.h of the C++ SDK.
// msg is the data to be sent, msg_len is the length of the data, and call_back_func is the callback function (which can be set to None).
send(inlong_group_id, inlong_stream_id, msg, msg_len, call_back_func)
```
### Close SDK

Call the close interface to close the SDK:
```python
// A return value of zero indicates successful closure, and subsequent data reporting will not be possible.
// max_waitms: The maximum number of milliseconds to wait before closing the SDK, waiting for the internal data sending of the SDK to complete.
inlong_api.close_api(max_waitms)
```
## Notes

- It is recommended to use the SDK as a resident service for data reporting, to avoid frequent initialization and closure in the same process midway. Repeated initialization and closure will bring more overhead.
- The SDK sending is carried out asynchronously, and a return value of 0 indicates that the data has been successfully stored in the SDK internal buffer, waiting for network transmission. If the inlong_group_id itself is incorrectly configured or there is a network exception, it will also lead to data sending failure. Therefore, it is recommended that users set a callback when calling this interface, and execute the callback when data fails to be sent after multiple retries.

## Appendix: Configuration File Parameter Description
|Parameter |Meaning |Default Value |
|----------|---------------------|------------------------------------------------------------------|
|is_internal |Company Internal Use Flag |true |
|inlong_group_ids |List of inlong_group_id |b_inlong_group_test_01, b_inlong_group_test_02 |
|manager_url |Manager Address |http://127.0.0.1:8099/inlong/manager/openapi/dataproxy/getIpList |
|manager_update_interval |Request Manager Interval |2 minutes |
|manager_url_timeout |Pushed Data Time |Timestamp in milliseconds |
|msg_type |Data Type |7 |
|max_proxy_num |Maximum DataProxy Data per Instance |8 |
|per_groupid_thread_nums |Number of Threads per inlong_group_id |1 |
|dispatch_interval_zip |Compression Data Interval Period |8 ms |
|dispatch_interval_send |Data Distribution Interval |10 ms |
|recv_buf_size |Receive Buffer Size |10240000 bytes |
|send_buf_size |Send Buffer Size |10240000 bytes |
|enable_pack |Whether to Allow Packing |true |
|pack_size |Packing Size |409600 bytes |
|pack_timeout |Packing Interval |3000 ms |
|ext_pack_size |Maximum Size of Single Message |409600 bytes |
|enable_zip |Whether to Allow Compression |true |
|min_zip_len |Minimum Compression Size |512 bytes |
|tcp_detection_interval |TCP Detection Period |60000 ms |
|tcp_idle_time |TCP Idle Cycle |600000 ms |
|log_num |Number of Log Files |10 |
|log_size |Size of Single Log File |104857600 bytes |
|log_level |Log Level |3. Log Levels: trace(4)>debug(3)>info(2)>warn(1)>error(0) |
|log_path |Log Directory |./ |
|need_auth |Whether to Enable Authentication |true |
|auth_id |Account | |
|auth_key |Key | |