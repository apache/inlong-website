---
title: GO SDK
sidebar_position: 3
---

与 C++/Python SDK 类似，GO SDK 也分为 Producer 和 Consumer 两部分，下面对其进行介绍。

### Producer

首先 import 一些 package

```go
import (
	"github.com/apache/inlong/inlong-tubemq/tubemq-client-twins/tubemq-client-go/client"
	"github.com/apache/inlong/inlong-tubemq/tubemq-client-twins/tubemq-client-go/config"
	"github.com/apache/inlong/inlong-tubemq/tubemq-client-twins/tubemq-client-go/log"
	"github.com/apache/inlong/inlong-tubemq/tubemq-client-twins/tubemq-client-go/util"
)
```

之后设置 producer 的配置，下面例子中访问本地 master，订阅 topic 为 demo_0

```go
cfg, err := config.ParseAddress("127.0.0.1:8715?topic=demo_0")
```

如果有多个 topic 需要进行访问，也可以直接对 config 的 topic 进行修改

```go
cfg.Producer.Topics = []string{"demo", "demo_0", "demo_1"}
```

配置完成后，新建 Producer 的实例，在这个过程中，SDK 会向 TubeMQ Master 申请注册，并发送心跳拿到 topic 的元数据

```go
p, err := client.NewProducer(cfg)
```

之后构造消息并发送即可

```go
demoData := "hello_tubemq"
msg := client.Message{
	Topic:   cfg.Producer.Topics[topicIndex], // 可以从订阅的 topic 列表中选择
	Data:    []byte(demoData), 
	DataLen: int32(len(demoData)),
}

success, errCode, errMsg := p.SendMessage(&msg) // 向 tubemq 发送 message，返回是否成功，错误码以及错误信息
```

### Consumer

Consumer 与 Producer 的大致相同，除了在设置 config 时，有消费 group 的概念

```go
cfg, err := config.ParseAddress("127.0.0.1:8715?topic=demo_0&group=test_group")
```

之后参考 Producer 的用法进行消费即可

```go
c, err := client.NewConsumer(cfg) // 新建 Consumer 实例
cr, err := c.GetMessage() // 获取消息
_, err = c.Confirm(cr.ConfirmContext, true) // 获取后向 tubemq 进行 confirm 
```

### Example

上述文档内容为示例，省去了一些细节，完整可以运行的例子请参考 [GO SDK Example](https://github.com/apache/inlong/tree/master/inlong-tubemq/tubemq-client-twins/tubemq-client-go/example)
