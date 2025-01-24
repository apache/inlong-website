---
title: C++ SDK
sidebar_position: 1
---

import {siteVariables} from '../../version';

## 新建实时同步任务
在 Dashboard 或者通过命令行工具创建任务，数据源类型使用 `Auto Push` (自主推送)。

## 引入 C++ SDK
需要在项目中包含SDK的头文件和库，进行 SDK
的使用。头文件和库提供可以从源码自行编译，见 [SDK 编译使用](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp)。

## 数据上报流程
引入 SDK 后，可以通过调用 SDK 的`send`相关接口进行单条（批量）数据的上报，发送 demo
可参考 [send_demo.cc](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp/release/demo/send_demo.cc)
。整体流程包括以下三个步骤：

### 创建 SDK实例
SDK 支持进程创建1个SDK实例，多线程安全，也支持进程创建多个SDK实例，各个SDK实例相互独立，各个SDK实例也线程安全：
- 创建SDK实例对象
```cpp
  InLongApi inlong_api
```

- 对象实例初始化 ，配置文件采用 json 格式，见[配置文件说明](#附录：配置文件说明)
```cpp
// 初始化SDK，参数为配置文件的路径名；返回值为零表示初始化成功
int32_t result = inlong_api.InitApi("/home/conf/config.json");
```

### 调用发送接口进行数据上报
SDK 支持单条（推荐）和批量发送，二者发送过程均为异步模式，数据上报接口是线程安全的。在进行数据上报前，可设置回调函数在数据发送失败时进行回调处理，回调函数签名如下：
```cpp
int32_t CallBackFunc(const char* inlong_group_id, const char* inlong_stream_id,
                     const char* msg, int32_t msg_len, 
                     const int64_t report_time, 
                     const char* client_ip);
```

- 单条数据数据上报接口
```cpp
// 返回值：零表示发送成功，非零表示失败，具体异常返回值详见tc_api.h中的SDKInvalidReuslt
int32_t Send(const char *inlong_group_id, const char *inlong_stream_id,
             const char *msg, int32_t msg_len,
             UserCallBack call_back = nullptr)
```

### 关闭 SDK
调用 close 接口关闭 SDK：
```cpp
// 返回值为零表示关闭成功，后续无法再进行数据上报
// max_waitms：关闭SDK前的等待最大毫秒数，等待SDK内部数据发送完成
int32_t CloseApi(int32_t max_waitms);
```

## 注意事项
- 建议采用将 SDK 作为常驻服务来进行数据上报，避免同个进程中途频繁地初始化和关闭，重复初始化和关闭会带来更多开销；
- SDK 发送是异步进行的，返回值为 0 表示数据成功存入了 SDK 内部缓冲区，等待网络发送。如果`inlong_group_id`
  本身配置有误或者网络异常，也会导致数据发送失败，所以建议用户在调用该接口时设置回调，数据多次重试发送仍失败时执行回调。

## 附录：配置文件说明
配置文件格式和重要参数如下：
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
| 参数       | 含义                  | 默认值                                                              |
|----------|---------------------|------------------------------------------------------------------|
| inlong_group_ids  | inlong_group_id列表   | b_inlong_group_test_01, b_inlong_group_test_02                   |
| manager_url | manager地址           | http://127.0.0.1:8099/inlong/manager/openapi/dataproxy/getIpList |
| manager_update_interval     | 请求manager间隔时间       | 2 分钟                                                             |
| manager_url_timeout       | 推送的数据时间             | 毫秒为单位的时间戳                                                        |
| msg_type      | 数据类型                | 7                                                                |
| max_proxy_num      | 单实例最大proxy数据        | 8                                                                |
| per_groupid_thread_nums      | 单inlong_group_id线程数 | 1                                                                |
| dispatch_interval_zip      | 压缩数据间隔周期            | 8 ms                                                             |
| dispatch_interval_send      | 数据分发间隔              | 10 ms                                                            |
| recv_buf_size      | 接收缓冲区大小             | 10240000 字节                                                      |
| send_buf_size      | 发送缓冲区大小             | 10240000 字节                                                      |
| enable_pack      | 是否允许打包              | true                                                             |
| pack_size      | 打包大小                | 409600 字节                                                        |
| pack_timeout      | 打包间隔                | 3000 ms                                                          |
| ext_pack_size      | 单条消息最大大小            | 409600 字节                                                        |
| enable_zip      | 是否允许压缩              | true                                                             |
| min_zip_len      | 最小压缩大小              | 512 字节                                                           |
| tcp_detection_interval      | tcp 探测周期            | 60000 ms                                                         |
| tcp_idle_time      | tcp 死亡周期            | 600000 ms                                                        |
| log_num      | 日志文件个数              | 10                                                               |
| log_size      | 单个日志文件大小            | 104857600 字节                                                     |
| log_level      | 日志级别                | 3。 日志级别，trace(4)>debug(3)>info(2)>warn(1)>error(0)               |
| log_path      | 日志目录                | ./                                                               |
| need_auth      | 是否开启认证              | false                                                            |
| auth_id      | 账号                  |                                                                  |
| auth_key      | 密钥                  |                                                                  |