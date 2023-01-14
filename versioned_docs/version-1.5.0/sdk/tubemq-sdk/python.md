---
title: Python SDK
sidebar_position: 2
---

## Build TubeMQ Python SDK
Python SDK is a wrapper of C++ SDK through [pybind11](https://pybind11.readthedocs.io/en/stable/), so before building Python SDK，ensure the C++ SDK has built. The build process of C++ SDK is in  [Build TubeMQ C++ SDK](./cpp.md)

Then install the C++ SDK library and header files.

```bash
# copy header files
cp -r /tubemq-cpp/include/tubemq /usr/local/include

# copy third party and tubemq library files
cp /tubemq-cpp/build/src/libtubemq.a \
   /tubemq-cpp/build/proto/libtubemq_proto.a \
   /tubemq-cpp/build/third_party/lib/lib* \
   /usr/local/lib64/

```

Install `python3`, requirements and python sdk

```bash
# install requirements
pip3 install -r requirements.txt

# install python sdk
python3 setup.py install
```

After installation，there are compliled so files and python package in `build/lib`, they can be added to python's `site-packages`  or `PYTHONPATH`

## Python SDK API
Similar with C++ SDK ，Python SDK is also divided into Producer and Consumer.

### Producer
First of all, initialize `tubemq.Producer` 

```python
import tubemq

master_addr = "127.0.0.1:8000"
producer = tubemq.Producer(master_addr)
```

then, publish the topic list

```python
topic_list = ["topic_0", "topic_1"]
producer.publish(topic_list)
```

Construct the  `tubemq.Message` and send

```python
send_data = "hello_tubemq"
topic_name = "demo"
msg = tubemq_message.Message(topic_name, send_data, len(send_data))
if is_sync:
    result = producer.send(msg, is_sync=True)
else:
    producer.send(msg, callback=func) # default is async send
```


The Python SDK also supports synchronous and asynchronous sending methods, which are similar to  C++ SDK. When sending asynchronously, a callable object should be provided.


Finally, stop the producer

```python
producer.stop()
```

### Consumer
Consumer API of Python SDK is similar with Producer, this is a simple example

```python
import tubemq

master_addr = "127.0.0.1:8000"
topic_list = ["demo"]
group_name = "test_group"
consumer = tubemq.Consumer(master_addr, group_name, topic_list) # initialize consumer

msgs = consumer.receive()
if msgs:
    consumer.acknowledge()

consumer.stop()
```

### Example
For more detailed python sdk use cases, please refer to  [Python SDK Example](https://github.com/apache/inlong/tree/master/inlong-tubemq/tubemq-client-twins/tubemq-client-python/src/python/example)
