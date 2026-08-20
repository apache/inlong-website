---
title: Golang SDK
sidebar_position: 4
---

## Create real-time synchronization task
Create a task on the Dashboard or with the command line tool, and set `Auto Push` (autonomous push) as the data source type.

## Import Golang SDK
To use the Golang SDK, you need to import it into your projects. Import the Golang SDK:

```go
import "github.com/apache/inlong/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy"
```


## Data report process
After importing the SDK, you can initialize a [Client](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/client.go) instance, and then call `Send()` or `SendAsync()` to produce messages to DataProxy, SDK will put the messages with a same StreamID into a batch and send them together. A demo can be found at: [example_test.go](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/example_test.go).
Basically, there are 3 steps to produce messages:

### Initialize the SDK
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

Parameters:

- `dataproxy.WithGroupID("test")` sets the GroupID;
- `dataproxy.WithURL("http://127.0.0.1:8083/inlong/manager/openapi/dataproxy/getIpList")` sets the Manager URL;
- `dataproxy.WithMetricsName("test")` sets the value of the metrics label: "name" of the `Client`.

### Call the Send/SendAsync method to send

The send methods of the SDK are goroutine safe, you can send a message synchronously or asynchronously, there are both synchronous and asynchronous examples in the demo.

Send synchronously :

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

Send asynchronously:

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

The asynchronous way is recommended, as the synchronous way has no concurrency, messages can be sent after the previous one is done or timeout, it can't fulfill your requirements when you need high throughput.

### Close the SDK 
Closing the SDK can be done simply by calling the  `Close()` method of the `Client`:

```go
client.Close()
```

## Notes
- `GroupID` and `URL` are mandatory options when you initialize the SDK, you can call `dataproxy.WithGroupID()` and 
  `dataproxy.WithURL()` to set them;
-  When you initialize more the one instance of `Client`, the `MetricsName` must be set to different values, or it will be failed when pulling metrics, you can call `dataproxy.WithMetricsName()` to set it;
- The default values of the config options of the SDK are good enough for production, you don't need the change then unless you really need to do that, the default values are described in a section below;
- The `Send()` method of the SDK has no concurrent, messages are sent one by one, it is NOT recommended;
- The SDK will retry 2 times each message, if it still failed finally, it is up to you to decide what to do next.

## Errors
Some common errors:

| Error                                                       | Desc                                       |
| ------------------------------------------------------------ | ------------------------------------------- |
| errors.New("URL is not given")                               | Manager URL is not set.                                |
| errors.New("group ID is not given")                          | Group ID is not set.                                |
| errors.New("invalid URL")                                    | Manager URL is invalid.                            |
| errors.New("invalid group ID")                               | Group ID is invalid.                                |
| errors.New("service has no endpoints")                       | Service has no endpoints, service discoery failed.                        |
| errors.New("no available worker")                            | No available workers, workers are busy.                              |
| errNo{code: 10001, strCode: "10001", message: "message send timeout"} | Send timeout. |
| errNo{code: 10002, strCode: "10002", message: "message send failed"} | Send failed.                                   |
| errNo{code: 10003, strCode: "10003", message: "producer already been closed"} | Producer is closed.                                   |
| errNo{code: 10004, strCode: "10004", message: "producer send queue is full"} | Send queue is full, return immediately.                                 |
| errNo{code: 10005, strCode: "10005", message: "message context expired"} | Send queue is full, enqueue timeout.            |
| errNo{code: 10010, strCode: "10010", message: "input log is invalid"} | Input message is invalid, the payload may be empty.                              |

## Config options

| Option                      | Default value                | Desc                                                         | Optional                                                     |
| --------------------------- | ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| WithGroupID()               | ""                           | Sets the Group ID.                                           | No                                                           |
| WithURL()                   | ""                           | Sets the Manager URL.                                        | No                                                           |
| WithUpdateInterval()        | 5m                           | Sets the update interval of service discoery.                | Yes                                                          |
| WithConnTimeout()           | 3000ms                       | Sets the connection timeout.                                 | Yes                                                          |
| WriteBufferSize             | 8M                           | Sets the write buffer size.                                  | Yes                                                          |
| WithReadBufferSize          | 1M                           | Sets the read buffer size.                                   | Yes                                                          |
| WithSocketSendBufferSize    | 8M                           | Sets the socket send buffer size.                            | Yes                                                          |
| WithSocketRecvBufferSize    | 1M                           | Sets the socket receive buffer size.                         | Yes                                                          |
| WithBufferPool              | nil                          | Sets the buffer pool to use.                                 | Yes, if the application has one, use the same one is recommended. |
| WithBytePool                | nil                          | Sets the byte pool to use.                                   | Yes, if the application has one, use the same one is recommended. |
| WithBufferPoolSize          | 409600                       | Sets the buffer pool size.                                   | Yes                                                          |
| WithBytePoolSize            | 409600                       | Sets the byte pool size.                                     | Yes                                                          |
| WithBytePoolWidth           | equals to BatchingMaxSize    | Sets the byte pool width.                                    | Yes                                                          |
| WithLogger                  | std.out                      | Sets the debug logger.                                       | Yes, but the default one is not recommended, as it has no log levels control. |
| WithMetricsName             | "dataproxy-go"               | Sets the metrics name of this client.                        | Yes, if there are more than one client instance in one application, the metrics names must be different. |
| WithMetricsRegistry         | prometheus.DefaultRegisterer | Sets the metrics registry.                                   | Yes                                                          |
| WithWorkerNum               | 8                            | Sets the worker number.                                      | Yes                                                          |
| WithSendTimeout             | 30000ms                      | Sets the send timeout.                                       | Yes                                                          |
| WithMaxRetries              | 2                            | Sets the max retry count.                                    | Yes                                                          |
| WithBatchingMaxPublishDelay | 20ms                         | Sets how long a message to wait for batching.                | Yes                                                          |
| WithBatchingMaxMessages     | 50                           | Sets the message number of a batch.                          | Yes                                                          |
| WithBatchingMaxSize         | 40K                          | Sets the batch size in Bytes of a batch.                     | Yes                                                          |
| WithMaxPendingMessages      | 204800                       | Sets the queue length of each worker.                        | Yes                                                          |
| WithBlockIfQueueIsFull      | false                        | Sets if block if the queue is full.                          | Yes                                                          |
| WithAddColumns              | nil                          | Sets the added columns to all the messages, DataProxy supports add addtional columns at specific positions to all messages，for example:\_\_addcol1\_\_worldid=xxx will add a column named 'worldid' at position 1 and its value is 'xxx'. | Yes                                                          |

options refers to [options.go](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/opitons.go)

## Metrics

| Name                         | Type      | Labels                                                         | Desc                                                         |
| ---------------------------- | --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| data_proxy_error_count       | counter   | name: name we set with WithMetricsName()<br />code: error code | count the errors and the error code.                         |
| data_proxy_retry_count       | counter   | name: name we set with WithMetricsName()<br />worker: worker index | count the retry messages and the worker's index.             |
| data_proxy_timeout_count     | counter   | name: name we set with WithMetricsName()<br />worker: worker index | count the timeout messages and the worker's index.           |
| data_proxy_msg_count         | counter   | name: name we set with WithMetricsName()<br />code: error code | count the message handled and error code.                    |
| data_proxy_update_conn_count | counter   | name: name we set with WithMetricsName()<br />code: error code | count the connection update/switch times and error code. when error code is '0', it is a normal update, otherwise, it may be network error. |
| data_proxy_pending_msg_gauge | gauge     | name: name we set with WithMetricsName()<br />worker: error code | count the pending message in each worker and the worker index. |
| data_proxy_batch_size        | histogram | name: name we set with WithMetricsName()<br />code: error code | distribution of the batch size and the error code.           |
| data_proxy_batch_time        | histogram | name: name we set with WithMetricsName()<br />code: error code | distribution of the batch send time duration and the error code. |

metrics refers to [metrics.go](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/metrics.go)

error codes refers to [worker.go](https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/worker.go)