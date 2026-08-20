---
title: Golang SDK
sidebar_position: 3
---

Similar to the C++/Python SDK, the Golang SDK is also divided into two parts: `Producer` and `Consumer`. Here is an introduction to both.

### Producer

First, import necessary packages:

```go
import (
	"github.com/apache/inlong/inlong-tubemq/tubemq-client-twins/tubemq-client-go/client"
	"github.com/apache/inlong/inlong-tubemq/tubemq-client-twins/tubemq-client-go/config"
	"github.com/apache/inlong/inlong-tubemq/tubemq-client-twins/tubemq-client-go/log"
	"github.com/apache/inlong/inlong-tubemq/tubemq-client-twins/tubemq-client-go/util"
)
```

Then, set the producer's configuration. In the following example, we access the local `Master` and subscribe to the topic `demo_0`:

```go
cfg, err := config.ParseAddress("127.0.0.1:8715?topic=demo_0")
```

If there are multiple topics, you can directly modify the `Topics` in the `config`:

```go
cfg.Producer.Topics = []string{"demo", "demo_0", "demo_1"}
```

After the configuration is completed, create a new instance of `Producer`. During this process, the `SDK` will register to the `TubeMQ Master` and send a heartbeat to get the metadata of the topic:

```go
p, err := client.NewProducer(cfg)
```

Then, construct and send the message:

```go
demoData := "hello_tubemq"
msg := client.Message{
	Topic:   cfg.Producer.Topics[topicIndex], // You can choose from the subscribed topic list
	Data:    []byte(demoData), 
	DataLen: int32(len(demoData)),
}

success, errCode, errMsg := p.SendMessage(&msg) // Send a message to TubeMQ, return whether it is successful, the error code, and the error message
```

### Consumer

The `Consumer` is roughly the same as the `Producer`, except that there is the concept of a consumer group when setting the `config`:

```go
cfg, err := config.ParseAddress("127.0.0.1:8715?topic=demo_0&group=test_group")
```

Then, refer to the usage of the `Producer` to consume:

```go
c, err := client.NewConsumer(cfg) // Create a new Consumer instance
cr, err := c.GetMessage() // Get message
_, err = c.Confirm(cr.ConfirmContext, true) // Confirm to TubeMQ after getting the data
```

### Example

The above content is a demo and ignores some details. For a complete and runnable example, please refer to [Golang SDK Example](https://github.com/apache/inlong/tree/master/inlong-tubemq/tubemq-client-twins/tubemq-client-go/example).
