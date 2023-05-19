---
title: Python SDK
sidebar_position: 2
---

## 构建 TubeMQ Python SDK
Python SDK 主要基于 [pybind11](https://pybind11.readthedocs.io/en/stable/)，对 C++ SDK 进行封装，因此在构建 Python SDK 之前，需要先构建好 C++ SDK，C++ SDK 的构建过程参考 [构建TubeMQ C++ SDK](./cpp.md)

之后将 C++ SDK 的库文件和源文件安装到对应的位置

```bash
# 拷贝头文件
cp -r /tubemq-cpp/include/tubemq /usr/local/include

# 拷贝三方依赖，以及libtubemq.a
cp /tubemq-cpp/build/src/libtubemq.a \
   /tubemq-cpp/build/proto/libtubemq_proto.a \
   /tubemq-cpp/build/third_party/lib/lib* \
   /usr/local/lib64/

```

之后安装 Python3，以及相应的依赖，最后安装 Python SDK

```bash
# 安装依赖
pip3 install -r requirements.txt

# 安装 python sdk
python3 setup.py install
```

安装后，在 `build/lib` 中可以发现编译好的 so 文件以及 Python 库，直接添加到 Python的 `site-packages` 或者环境变量 `PYTHONPATH` 中均可。

## Python SDK API
与 C++ SDK 类似，Python SDK 也分为 Producer 和 Consumer 两部分，下面对其进行介绍。

### Producer
首先初始化 `tubemq.Producer` 实例

```python
import tubemq

master_addr = "127.0.0.1:8000"
producer = tubemq.Producer(master_addr)
```

之后订阅想要发送消息的 topic 列表。

```python
topic_list = ["topic_0", "topic_1"]
producer.publish(topic_list)
```

订阅完成后，直接构造 `tubemq.Message` 并发送消息即可

```python
send_data = "hello_tubemq"
topic_name = "demo"
msg = tubemq_message.Message(topic_name, send_data, len(send_data))
if is_sync:
	result = producer.send(msg, is_sync=True)
else:
    producer.send(msg, callback=func) # 默认为异步发送
```

Python SDK 也为同步和异步两种发送方式，和 C++ SDK 的 API 类似，异步发送时，需要提供可调用的对象

最后，停止 producer 即可

```python
producer.stop()
```

### Consumer
Python SDK 的 Consumer API 与 Producer 基本相似，下面为一个简单的例子

```python
import tubemq

master_addr = "127.0.0.1:8000"
topic_list = ["demo"]
group_name = "test_group"
consumer = tubemq.Consumer(master_addr, group_name, topic_list) # 初始化 consumer

msgs = consumer.receive()
if msgs:
    consumer.acknowledge()

consumer.stop()
```

### Example
关于 Python SDK 的更加详细的用例，可以参考 [Python SDK Example](https://github.com/apache/inlong/tree/master/inlong-tubemq/tubemq-client-twins/tubemq-client-python/src/python/example)。
