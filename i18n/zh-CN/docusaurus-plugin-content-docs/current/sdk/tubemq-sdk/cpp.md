---
title: C++ SDK
sidebar_position: 1
---

import {siteVariables} from '../../version';

## 构建 TubeMQ C++ SDK

C++ SDK 主要基于非Boost版本的Asio进行通信，构建时使用CMake，具体操作步骤如下：
```bash
# 进入到 cpp sdk 的根路径
cd `pwd`/inlong/inlong-tubemq/tubemq-client-twins/tubemq-client-cpp

mkdir build && cd build

cmake .. 

make -j8 # 可根据自己机器的核数决定编译时使用的线程数量

```

上述构建过程也可以在InLong提供的[镜像](https://github.com/apache/inlong/tree/master/inlong-tubemq/tubemq-docker/tubemq-cpp)中完成，具体操作如下

```bash
# 拉取镜像
docker pull inlong/tubemq-cpp

# 启动容器，将cpp sdk的源码挂载到容器中
docker run -it --net=host -v ${REPLACE_BY_CPP_SOURCE_DIR_PATH}:/tubemq-cpp/  inlong/tubemq-cpp /bin/bash

# 之后与在物理机上相同
mkdir build && cd build
cmake .. 
make -j8 
```



## C++ SDK API

与其它的消息队列系统类似，C++ SDK 分为生产者(Producer)以及消费者(Consumer)，下面分别介绍Producer和Consumer的API使用。

首先，无论是生产者还是消费者，先启动TubeMQ SDK的后台全局服务 (以下例子都假定使用的默认 C++ `namespace`为`tubemq`)。

```cpp
bool StartTubeMQService(string& err_info, const TubeMQServiceConfig& serviceConfig);
```

通过返回值以及`err_info`判断启动是否成功。

### Producer

对于用户来说，直接接触的类为`TubeMQProducer`，在使用时需要首先创建实例 。

```cpp
#include "tubemq/tubemq_client.h" // TubeMQProducer定义头文件

TubeMQProducer producer;
```

之后设置`producer`的配置，并启动。

```cpp
ProducerConfig producer_config;
producer_config.SetRpcReadTimeoutMs(20000);
producer_config.SetMasterAddrInfo(err_info, master_addr);
bool result = producer.start(); // 启动producer
```

当日志显示注册master成功后，producer会以一定频率向master发送心跳，以获得最新的关于topic的信息，之后用户可以开始订阅想发送消息的topic，支持订阅多个topic，传入的topics参数类型为 `std::set`。

```cpp
std::set topics{"topic_0", "topic_1"};
bool result = producer.Publish(err_info, topics);
```

订阅之后就可以发送消息，首先对消息进行构造

```cpp
#include "tubemq/tubemq_message.h" // tubemq::Message定义头文件

std::string topic_name = "demo";
std::string send_data = "hello_tubemq";
Message message(topic_name, send_data.c_str(), send_data.size()); // 接受数据类型为const char*
```

构造好消息后，即可发送，SDK提供了同步和异步两种发送方式

```cpp
//同步发送
bool TubeMQProducer::SendMessage(string& err_info, const Message& message);
//异步发送
void TubeMQProducer::SendMessage(const Message& message, const std::function<void(const ErrorCode&)>& callback);
```

分别通过如下方式使用

```cpp
bool result = producer.SendMessage(err_info, message);

void callback(const ErrorCode&); 
producer.SendMessage(message, callback); // callback也可以为其它可调用的对象，如lambda函数
```

同步发送在得到结果前将会阻塞，异步发送则不会，调用后通过用户自定义的回调函数接收返回的结果。

最后，关闭producer

```cpp
producer.ShutDown();
```

### Consumer

Consumer同Producer类似，都要先初始化Consumer实例，并设置配置，订阅topic等操作。

```cpp
#include "tubemq/tubemq_client.h" // TubeMQConsumer定义头文件

TubeMQConsumer consumer;

// 消费相关的配置
ConsumerConfig consumer_config;
consumer_config.SetRpcReadTimeoutMs(20000);
consumer_config.SetMasterAddrInfo(err_info, master_addr);
// consumer中除了订阅topic，还要设置消费组
consumer_config.SetGroupConsumeTarget(err_info, group_name, topic_list);

// 启动consumer
consumer.start();
```

启动consumer后，调用`GetMessage`获取消息即可

```cpp
ConsumerResult get_result;
ConsumerResult confirm_result;

bool result = consumer.GetMessage(get_result);
if (result) {
    list<Message> messages = get_result.GetMessageList();
    consumer.Confirm(get_result.GetConfirmContext(), true, confirm_result);
}

// stop the consumer 
consumer.ShutDown();

```



### Example

关于C++ SDK的更加详细的用例，可以参考 [C++ SDK Example](https://github.com/apache/inlong/tree/master/inlong-tubemq/tubemq-client-twins/tubemq-client-cpp/example)，编译好的可执行文件位置在 `build/example/producer` 和 `build/example/consumer`。

