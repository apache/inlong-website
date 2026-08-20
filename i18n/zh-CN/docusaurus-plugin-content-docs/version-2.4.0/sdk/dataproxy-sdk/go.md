---
title: Golang SDK
sidebar_position: 4
---

## 新建实时同步任务
在 Dashboard 或者通过命令行工具创建任务，数据源类型使用 `Auto Push` (自主推送)。

## 引入 Golang SDK
需要在项目中导入 SDK 的包，进行 SDK 的使用。导入方式如下：

```go
import "github.com/apache/inlong/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy"
```


## 数据上报流程
导入 SDK 后，通过实例化一个 [Client](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/client.go) 接口对象后，调用相关的同步（ `Send()` ）或 异步（ `SendAsync()` ）接口来完成单条数据的上报任务，SDK 内部会根据 StreamID 将相同 StreamID 的数据批量上报。发送 Demo 可参考 [example_test.go](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/example_test.go)。
整体流程包括以下三个步骤：

### 初始化 SDK
```go
client, err := dataproxy.NewClient(
	dataproxy.WithGroupID("test"),		      	
    dataproxy.WithURL("http://127.0.0.1:8083/inlong/manager/openapi/dataproxy/getIpList"),
	dataproxy.WithMetricsName("test"),
)

if err != nil {
	fmt.Println(err)
	return
}
```

参数说明：

- `dataproxy.WithGroupID("test")` 设置了 GroupID ；
- `dataproxy.WithURL("http://127.0.0.1:8083/inlong/manager/openapi/dataproxy/getIpList")` 设置了 Manager 的 URL ；
- `dataproxy.WithMetricsName("test")` 设置了这个 `Client` 的指标中标签 "name" 的值；

### 调用发送接口进行数据上报

SDK 的数据发送接口是协程安全的，支持以同步或者异步模式发送单条数据。Demo 里有同步的方式，也有异步的方式。

同步方式：

```go
for i := 0; i < 1000; i++ {
    err := client.Send(context.Background(), dataproxy.Message{
		GroupID:  "test",
		StreamID: "test",
		Payload:  []byte("test|a|b|c"),
	})
    if err !=nil {
        fmt.Println(err)
    }
}
```

异步方式：

```go
var success atomic.Uint64
var failed atomic.Uint64
for i := 0; i < 1000; i++ {
	client.SendAsync(context.Background(),
		dataproxy.Message{
			GroupID:  "test",
			StreamID: "test",
			Payload:  []byte("test|a|b|c"),
		},
		func(msg dataproxy.Message, err error) {
			if err != nil {
				success.Add(1)
			} else {
				failed.Add(1)
			}
		})
}

// wait async send finish
time.Sleep(3 * time.Second)
fmt.Println("success:", success.Load())
fmt.Println("failed:", failed.Load())
```

我们推荐使用异步的方式发送，因为同步方式是无并发的，调用发送请求后需要等到响应或者超时，才能发下一条，在需要高吞吐量的场景是无法满足需求的。

### 关闭 SDK 
关闭 SDK 只需要简单的调用 `Close()` 方法：

```go
client.Close()
```

## 注意事项
- `GroupID` 和 `URL` 是 SDK 初始化必选的配置，你可以使用 `dataproxy.WithGroupID()` 和 
  `dataproxy.WithURL()` 来设置这些配置；
- 当你在一个进程里初始化多个 `Client` 实例时，`MetricsName` 必须配置不同的名称，否则指标查询将会失败，你可以使用 `dataproxy.WithMetricsName()` 来设置它；
- SDK 的默认配置已经能够满足运营需求，除非你需要调大或者调小配置，一般不需要更改其他配置，配置的默认值请参考后面的章节；
- SDK 的同步发送方法 `Send()` 是无并发的，在发送一个消息后，需要等待响应或者等待到超时才会返回，非必要的情况下不建议使用同步方法；
- SDK 默认会对消息进行2次重传，如果依然失败，需要调用者来决定如何做下一步处理。

## 错误
常见错误如下：

| 错误                                                         | 描述                               |
| ------------------------------------------------------------ | ---------------------------------- |
| errors.New("URL is not given")                               | Manager URL  未设置。             |
| errors.New("group ID is not given")                          | GroupID未设置。                    |
| errors.New("invalid URL")                                    | Manager URL 非法，可能为空。      |
| errors.New("invalid group ID")                               | GroupID 非法，可能为空。           |
| errors.New("service has no endpoints")                       | 服务无端点，服务发现失败           |
| errors.New("no available worker")                            | 没有可用工作者，工作者忙。         |
| errNo{code: 10001, strCode: "10001", message: "message send timeout"} | 发送超时。                         |
| errNo{code: 10002, strCode: "10002", message: "message send failed"} | 发送失败。                         |
| errNo{code: 10003, strCode: "10003", message: "producer already been closed"} | 生产者已关闭。                     |
| errNo{code: 10004, strCode: "10004", message: "producer send queue is full"} | 发送队列满。                       |
| errNo{code: 10005, strCode: "10005", message: "message context expired"} | 发送队列满，超时都未等到空闲位置。 |
| errNo{code: 10010, strCode: "10010", message: "input log is invalid"} | 输入的数据非法，可能为空。         |

## 配置项

| 配置项                      | 默认值                       | 描述                                                         | 可选                                                         |
| --------------------------- | ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| WithGroupID()               | ""                           | 设置GroupID                                                  | 否                                                           |
| WithURL()                   | ""                           | 设置 Manager 的URL                                           | 否                                                           |
| WithUpdateInterval()        | 5m                           | 设置服务发现的更新时间                                       | 是                                                           |
| WithConnTimeout()           | 3000ms                       | 设置连接超时                                                 | 是                                                           |
| WriteBufferSize             | 8M                           | 设置写缓冲区大小                                             | 是                                                           |
| WithReadBufferSize          | 1M                           | 设置读缓冲区大小                                             | 是                                                           |
| WithSocketSendBufferSize    | 8M                           | 设置网络发送缓冲区大小                                       | 是                                                           |
| WithSocketRecvBufferSize    | 1M                           | 设置网络接收缓冲区大小                                       | 是                                                           |
| WithBufferPool              | nil                          | 设置缓冲池                                                   | 是，如果应用有，建议共用                                     |
| WithBytePool                | nil                          | 设置内存池                                                   | 是，如果应用有，建议共用                                     |
| WithBufferPoolSize          | 409600                       | 设置缓冲池大小                                               | 是                                                           |
| WithBytePoolSize            | 409600                       | 设置内存池大小                                               | 是                                                           |
| WithBytePoolWidth           | 同BatchingMaxSize            | 设置内存池宽度                                               | 是                                                           |
| WithLogger                  | std.out                      | 设置调试日志                                                 | 是，不建议，默认的日志没有日志级别控制                       |
| WithMetricsName             | "dataproxy-go"               | 设置指标名                                                   | 是，如果一个应用实例化了多个 client ，必须配置不一样的指标名，否则指标获取会失败 |
| WithMetricsRegistry         | prometheus.DefaultRegisterer | 设置指标存储器                                               | 是                                                           |
| WithWorkerNum               | 8                            | 设置工作者数量                                               | 是                                                           |
| WithSendTimeout             | 30000ms                      | 设置发送超时                                                 | 是                                                           |
| WithMaxRetries              | 2                            | 设置量大重试次数                                             | 是                                                           |
| WithBatchingMaxPublishDelay | 20ms                         | 设置消息发送延迟，超过该时间，不能构成一个批次也会发送       | 是                                                           |
| WithBatchingMaxMessages     | 50                           | 设置批次消息条数，达到条数即批量发送                         | 是                                                           |
| WithBatchingMaxSize         | 40K                          | 设置批次大小，达到该大小即批量发送                           | 是                                                           |
| WithMaxPendingMessages      | 204800                       | 设置每个工作者队列大小                                       | 是                                                           |
| WithBlockIfQueueIsFull      | false                        | 设置队列满是否阻塞                                           | 是                                                           |
| WithAddColumns              | nil                          | 设置附加字段，DataProxy 支持在消息指定的位置增加字段，如 \_\_addcol1\_\_worldid=xxx 表示所有的消息的第一列都是 worldid，值为 xxx 的 | 是                                                           |

配置项请参考 [options.go](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/options.go)

## 指标

| 指标名                       | 类型      | 标签                              | 描述                             |
| ---------------------------- | --------- | --------------------------------- | -------------------------------- |
| data_proxy_error_count       | counter   | name：名称<br />code：错误码      | 统计发生的错误次数及错误码       |
| data_proxy_retry_count       | counter   | name：名称<br />worker：工作者 ID | 统计发生的重试次数及工作者 ID    |
| data_proxy_timeout_count     | counter   | name：名称<br />worker：工作者 ID | 统计发生的超时次数及工作者ID     |
| data_proxy_msg_count         | counter   | name：名称<br />code：错误码      | 统计处理的消息数量和处理结果     |
| data_proxy_update_conn_count | counter   | name：名称<br />code：错误码      | 统计发生的连接更新次数和错误码   |
| data_proxy_pending_msg_gauge | gauge     | name：名称<br />worker：工作者 ID | 统计排队中的消息数量及工作者  ID |
| data_proxy_batch_size        | histogram | name：名称<br />code：错误码      | 统计每个批次的大小和错误码       |
| data_proxy_batch_time        | histogram | name：名称<br />code：错误码      | 统计每个批次的延迟和错误码       |

指标请参考 [metrics.go](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/metrics.go)

错误码请参考 [worker.go](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/worker.go)