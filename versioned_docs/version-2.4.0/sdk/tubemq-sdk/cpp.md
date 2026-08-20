---
title: C++ SDK
sidebar_position: 1
---

## Build TubeMQ C++ SDK
C++ SDK is based on the non-boost asio, and the CMake is used for building, the commands are：
```bash
# enter the root directory of c++ sdk source
git clone https://github.com/apache/inlong.git
cd inlong/inlong-tubemq/tubemq-client-twins/tubemq-client-cpp

mkdir build && cd build

cmake .. 

make -j8 # the thread num is based on the cpu cores
```

The building can also be completed in [docker](https://github.com/apache/inlong/tree/master/inlong-tubemq/tubemq-docker/tubemq-cpp) environment provided by InLong.

```bash
# pull image
docker pull inlong/tubemq-cpp

# start container and mount the source code
docker run -it --net=host -v ${REPLACE_BY_CPP_SOURCE_DIR_PATH}:/tubemq-cpp/  inlong/tubemq-cpp /bin/bash

# same as the build process in physical machines
mkdir build && cd build
cmake .. 
make -j8 
```

## C++ SDK API
Similar with other MQ systems，C++ SDK is diveded into **Producer** and **Consumer**. The API of Producer and Consumer are introduced respectively below.

First of all, regardless of role, start the background global TubeMQ SDK service (support the default C++ `namespace` is `tubemq`)。

```cpp
bool StartTubeMQService(string& err_info, const TubeMQServiceConfig& serviceConfig);
```

Look up the return boolean value and the `err_info` to check the start process is successful。

### Producer
The user-level api class is `TubeMQProducer`，the first thing is initializing the class.

```cpp
#include "tubemq/tubemq_client.h" // header file of TubeMQProducer

TubeMQProducer producer;
```

Set the config of producer, then start the producer

```cpp
ProducerConfig producer_config;
producer_config.SetRpcReadTimeoutMs(20000);
producer_config.SetMasterAddrInfo(err_info, master_addr);
bool result = producer.start(); // start producer
```

When `register2Master` is successed，producer will send heartbeat request to master periodically to update the meta info of topics. Then users can publish topics, multiple topics can be published at once,  and the param type is `std::set`.

```cpp
std::set topics{"topic_0", "topic_1"};
bool result = producer.Publish(err_info, topics);
```

After publishing, construct the message

```cpp
#include "tubemq/tubemq_message.h" // header file of tubemq::Message

std::string topic_name = "demo";
std::string send_data = "hello_world";
Message message(topic_name, send_data.c_str(), send_data.size()); // type is const char*
```

There are two `SendMessage` API: synchronous sending and asynchronous sending.

```cpp
// sync send
bool TubeMQProducer::SendMessage(string& err_info, const Message& message);
// async send
void TubeMQProducer::SendMessage(const Message& message, const std::function<void(const ErrorCode&)>& callback);
```

How to use these two `SendMessage`

```cpp
bool result = producer.SendMessage(err_info, message);

void callback(const ErrorCode&); 
producer.SendMessage(message, callback); // callback can be other invoked objects
```

Synchronous sending will block until the result is returned, asynchronous sending will not, and the returnted result is received through the user-defined callback function.

Finally, close the producer.

```cpp
producer.ShutDown();
```

### Consumer
Similar with producer，initialize the consumer object and set the config.

```cpp
#include "tubemq/tubemq_client.h" // header file of TubeMQConsumer

TubeMQConsumer consumer;

// config of consumption
ConsumerConfig consumer_config;
consumer_config.SetRpcReadTimeoutMs(20000);
consumer_config.SetMasterAddrInfo(err_info, master_addr);
// set the consume group and the topic 
consumer_config.SetGroupConsumeTarget(err_info, group_name, topic_list);

// start the consumer
consumer.start();
```

After starting the consumer, invoke the `GetMessage` to get messages.

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
There are more detailed examples about C++ SDK in  [C++ SDK Example](https://github.com/apache/inlong/tree/master/inlong-tubemq/tubemq-client-twins/tubemq-client-cpp/example)，the compiled executable is located in `build/example/producer` and `build/example/consumer`
