---
title: Python SDK
sidebar_position: 5
---

## 新建数据接入
在 Dashboard 或者通过命令行工具创建数据接入，数据源类型使用 `Auto Push` (自主推送)。

## 引入 Python SDK
 Python SDK 通过封装 C++ SDK 构建得到，对外暴露相关接口。运行时调用底层 C++ SDK 实现相关操作(如发送、关闭等)。
因为底层是基于 C++ SDK 运行的，与系统 C++ 环境高度绑定，如果提供的软件包使用的 C++ 环境与用户系统环境不完全一致，可能会导致运行报错。
首先需要从源码自行编译，见 [C++ SDK 编译使用](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp)。
若成功编译，会在 dataproxy-sdk-cpp/release/lib 目录下发现静态库文件 dataproxy_sdk.a 。
进入 Python SDK 目录 [dataproxy-sdk-python](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-python)，依次执行以下命令:
```shell
chmod +x ./build.sh
./build.sh
```
当 .so 文件生成时，您会看到以下消息，您可以选择进入 .so 文件的目标目录。默认情况下，.so 文件将被复制到系统 python site-packages 目录。
```shell
Your system's Python site-packages directory is: xxx/xxx
Enter the target directory for the .so files (Press Enter to use the default site-packages directory):
```
构建过程完成后，您可以在 Python 项目中导入该软件包，使用 InLong DataProxy SDK 上报数据。
```python
import inlong_dataproxy
```
> **Note**: 当 C++ SDK 或您正在使用的 Python 版本更新时，您需要按照上述步骤重新构建它。

## 数据上报流程
引入 SDK 后，可以通过调用 SDK 的 `send` 相关接口进行单条（批量）数据的上报，发送 demo 可参考 [send_demo.py](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-python/demo) 。整体流程包括以下三个步骤：

### 创建 SDK 实例

 SDK 支持进程创建多个 SDK 实例，各个 SDK 实例相互独立，SDK 实例线程安全：
- 创建 SDK 实例对象

```python
inlong_api = inlong_dataproxy.InLongApi()
```
- 在配置文件中配置 GroupID、StreamID 任务参数，auth_id、auth_key 用户 cmk 认证参数，及 is_internal 为 `true`，详细配置文件说明见附录

```python
// Initialize the SDK, with the parameter being the path name of the configuration file; a return value of zero indicates successful initialization.
init_status = inlong_api.init_api("./config.json")
```
### 调用发送接口进行数据上报

 SDK 支持单条（推荐）和批量发送，二者发送过程均为异步模式，数据上报接口是线程安全的。在进行数据上报前，可设置回调函数在数据发送失败时进行回调处理，回调函数签名如下：
```python
int CallbackFunc(const char *a, const char *b, const char *c, int32_t d, const int64_t e, const char *f)
```
- 单条数据数据上报接口

```python
// Return value: Zero indicates successful sending, non-zero indicates failure. For specific exception return values, please refer to SDKInvalidResult in tc_api.h of the C++ SDK.
// msg is the data to be sent, msg_len is the length of the data, and call_back_func is the callback function (which can be set to None).
send(inlong_group_id, inlong_stream_id, msg, msg_len, call_back_func)
```
### 关闭 SDK

调用 close 接口关闭 SDK：
```python
// A return value of zero indicates successful closure, and subsequent data reporting will not be possible.
// max_waitms: The maximum number of milliseconds to wait before closing the SDK, waiting for the internal data sending of the SDK to complete.
inlong_api.close_api(max_waitms)
```
## 注意事项

- 建议采用将 SDK 作为常驻服务来进行数据上报，避免同个进程中途频繁地初始化和关闭，重复初始化和关闭会带来更多开销。
-  SDK 发送是异步进行的，返回值为 0 表示数据成功存入了 SDK 内部缓冲区，等待网络发送。如果 `inlong_group_id` 本身配置有误或者网络异常，也会导致数据发送失败，所以建议用户在调用该接口时设置回调，数据多次重试发送仍失败时执行回调。

## 附录：配置文件参数说明
|参数 |含义 |默认值 |
|----------|---------------------|------------------------------------------------------------------|
|is_internal |公司内部使用标志 |true |
|inlong_group_ids |inlong_group_id 列表 |b_inlong_group_test_01, b_inlong_group_test_02 |
|manager_url |manager 地址 |http://127.0.0.1:8099/inlong/manager/openapi/dataproxy/getIpList |
|manager_update_interval |请求 manager 间隔时间 |2 分钟 |
|manager_url_timeout |推送的数据时间 |毫秒为单位的时间戳 |
|msg_type |数据类型 |7 |
|max_proxy_num |单实例最大 DataProxy 数据 |8 |
|per_groupid_thread_nums |单 inlong_group_id 线程数 |1 |
|dispatch_interval_zip |压缩数据间隔周期 |8 ms |
|dispatch_interval_send |数据分发间隔 |10 ms |
|recv_buf_size |接收缓冲区大小 |10240000 字节 |
|send_buf_size |发送缓冲区大小 |10240000 字节 |
|enable_pack |是否允许打包 |true |
|pack_size |打包大小 |409600 字节 |
|pack_timeout |打包间隔 |3000 ms |
|ext_pack_size |单条消息最大大小 |409600 字节 |
|enable_zip |是否允许压缩 |true |
|min_zip_len |最小压缩大小 |512 字节 |
|tcp_detection_interval |tcp 探测周期 |60000 ms |
|tcp_idle_time |tcp 死亡周期 |600000 ms |
|log_num |日志文件个数 |10 |
|log_size |单个日志文件大小 |104857600 字节 |
|log_level |日志级别 |3。 日志级别，trace(4)>debug(3)>info(2)>warn(1)>error(0) |
|log_path |日志目录 |./ |
|need_auth |是否开启认证 |true |
|auth_id |账号 | |
|auth_key |密钥 | |