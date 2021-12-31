---
title: Overview
---
When the business uses the message access method, the business generally only needs to format the data in a proxy-recognizable format (such as six-segment protocol, digital protocol, etc.)
After group packet transmission, data can be connected to inlong. But in order to ensure data reliability, load balancing, and dynamic update of the proxy list and other security features
The user program needs to consider more and ultimately leads to the program being too cumbersome and bloated.

The original intention of API design is to simplify user access and assume some reliability-related logic. After the user integrates the API in the service delivery program, the data can be sent to the proxy without worrying about the grouping format, load balancing and other logic.

## Functions

|  function   | description  |
|  ----  | ----  |
| Package function (new)  | The user data is packaged and sent to the proxy in a packet format recognized by the proxy (such as six-segment protocol, digital protocol, etc.)|
| Compression function| Before sending proxy, compress user data to reduce network bandwidth usage|
| Maintain proxy list| Get the proxy list every five minutes to detect whether there is a proxy machine on the operation and maintenance side; automatically remove unavailable connections every 20s to ensure that the connected proxy can operate normally |
| Indicator statistics (new)| Increase the indicator of business minute-level sending volume (interface level)|
| Load balancing (new)| Use the new strategy to load balance the sent data among multiple proxies, instead of relying on simple random + polling mechanism to ensure|
| proxy list persistence (new)| Persist the proxy list according to the business group id to prevent the configuration center from failing to send data when the program starts


## Data transmission

### Synchronous batch function
```
    public SendResult sendMessage(List<byte[]> bodyList, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)

    Parameter Description

    bodyListIt is a collection of multiple pieces of data that users need to send. The total length is recommended to be less than 512k. groupId represents the service id, and streamId represents the interface id. dt represents the time stamp of the data, accurate to the millisecond level. It can also be set to 0 directly, and the api will get the current time as its timestamp in the background. timeout & timeUnit: These two parameters are used to set the timeout time for sending data, and it is generally recommended to set it to 20s.
```

### Synchronize a single function
```
    public SendResult sendMessage(byte[] body, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)

    Parameter Description

    body is the content of a single piece of data that the user wants to send, and the meaning of the remaining parameters is basically the same as the batch sending interface.
```

### Asynchronous batch function
```
    public void asyncSendMessage(SendMessageCallback callback, List<byte[]> bodyList, String groupId, String streamId, long dt, long timeout,TimeUnit timeUnit)

    Parameter Description

    SendMessageCallback is a callback for processing messages. The bodyList is a collection of multiple pieces of data that users need to send. The total length of multiple pieces of data is recommended to be less than 512k. groupId is the service id, and streamId is the interface id. dt represents the time stamp of the data, accurate to the millisecond level. It can also be set to 0 directly, and the api will get the current time as its timestamp in the background. timeout and timeUnit are the timeout time for sending data, generally recommended to be set to 20s.
```

### Asynchronous single function
```
    public void asyncSendMessage(SendMessageCallback callback, byte[] body, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)

    Parameter Description

    The body is the content of a single message, and the meaning of the remaining parameters is basically the same as the batch sending interface
```