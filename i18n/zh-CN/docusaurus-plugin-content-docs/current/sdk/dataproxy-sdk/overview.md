---
title: 总览
---

在业务使用消息接入方式时，业务一般仅需将数据按照DataProxy可识别的格式（如六段协议、数字化协议等）
进行组包发送，就可以将数据接入到inlong。但为了保证数据可靠性、负载均衡、动态更新proxy列表等安全特性
用户程序就需要考虑更多最终导致程序过于繁琐臃肿。

API的设计初衷就是为了简化用户接入，承担部分可靠性相关的逻辑。用户通过在服务送程序中集成API后，即可将数据发送到DataProxy，而不用关心组包格式、负载均衡等逻辑。

## 功能说明

|  功能   | 详细描述  |
|  ----  | ----  |
| 组包功能（新）  | 将用户数据按打包发送到DataProxy可识别的组包格式（如六段协议、数字化协议等）打包发送到DataProxy|
| 压缩功能  | 发送打包发送到DataProxy前，将用户数据进行压缩，减少网络带宽占用 |
| 维护DataProxy列表  | 每隔五分钟获取打包发送到DataProxy列表 ，以检测运维侧是否存在上下线DataProxy机器的情况；每隔20s自动剔除不可用连接，以保证已连接的DataProxy能正常运作 |
| 指标统计（新）  | 增加业务分钟级别发送量的指标（接口级） |
| 负载均衡（新）  | 使用新的策略将发送的数据在多个DataProxy间进行负载均衡，不再依靠简单的随机+轮询机制来保证 |
| DataProxy列表持久化（新）  | 根据业务id对DataProxy列表持久化，防止程序启动时配置中心发生故障无法发送数据


## 数据发送

### 同步批量函数
```
    public SendResult sendMessage(List<byte[]> bodyList, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)

    参数说明

    bodyList是用户需要发送的多条数据的集合，总长度建议小于512k。groupId代表业务id，streamId代表接口id。dt表示该数据的时间戳，精确到毫秒级别。也可直接设置为0，此时api会后台获取当前时间作为其时间戳。timeout & timeUnit:这两个参数是设置发送数据的超时时间，一般建议设置成20s。
```


### 同步单条函数
```
    public SendResult sendMessage(byte[] body, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)

    参数说明

    body是用户要发送的单条数据内容，其余各参数涵义基本与批量发送接口一致。
```


### 异步批量函数
```
    public void asyncSendMessage(SendMessageCallback callback, List<byte[]> bodyList, String groupId, String streamId, long dt, long timeout,TimeUnit timeUnit)

    参数说明

    SendMessageCallback 是处理消息的callback。bodyList为用户需要发送的多条数据的集合，多条数据的总长度建议小于512k。groupId是业务id，streamId是接口id。dt表示该数据的时间戳，精确到毫秒级别。也可直接设置为0，此时api会后台获取当前时间作为其时间戳。timeout和timeUnit是发送数据的超时时间，一般建议设置成20s。
```

### 异步单条函数
```
    public void asyncSendMessage(SendMessageCallback callback, byte[] body, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)

    参数说明

    body为单条消息内容，其余各参数涵义基本与批量发送接口一致
```