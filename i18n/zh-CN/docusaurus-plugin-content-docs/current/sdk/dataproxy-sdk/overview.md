---
title: 总览
---

DataProxy 支持多种格式的数据的识别，用户既可以按照 DataProxy 可识别的格式（如六段协议、数字化协议等）自定义组装数据发送。
也可以，采用 DataProxy 提供的 SDK 进行数据接入。

DataProxy SDK 提供负载均衡、动态更新 proxy 列表等安全特性，能够保证接入数据的可靠性，简化用户的接入逻辑，降低用户的接入难度，这里建议使用 SDK 方式接入。

## 功能说明

|  功能   | 详细描述  |
|  ----  | ----  |
| 组包功能（新）  | 将用户数据按打包发送到 DataProxy 可识别的组包格式（如六段协议、数字化协议等）打包发送到 DataProxy|
| 压缩功能  | 发送打包发送到 DataProxy 前，将用户数据进行压缩，减少网络带宽占用 |
| 维护 DataProxy 列表  | 每隔五分钟获取打包发送到DataProxy列表 ，以检测运维侧是否存在上下线 DataProxy 机器的情况；每隔20s自动剔除不可用连接，以保证已连接的 DataProxy 能正常运作 |
| 指标统计（新）  | 增加业务分钟级别发送量的指标（接口级） |
| 负载均衡（新）  | 使用新的策略将发送的数据在多个 DataProxy 间进行负载均衡，不再依靠简单的随机+轮询机制来保证 |
| DataProxy 列表持久化（新）  | 根据业务id对 DataProxy 列表持久化，防止程序启动时配置中心发生故障无法发送数据


## 数据发送

### 同步批量函数
```
    public SendResult sendMessage(List<byte[]> bodyList, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)

    参数说明

    bodyList 是用户需要发送的多条数据的集合，总长度建议小于512k。groupId 代表业务 id，streamId 代表接口id。dt 表示该数据的时间戳，精确到毫秒级别。也可直接设置为0，此时api会后台获取当前时间作为其时间戳。timeout & timeUnit:这两个参数是设置发送数据的超时时间，一般建议设置成20s。
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

    SendMessageCallback 是处理消息的 callback。bodyList 为用户需要发送的多条数据的集合，多条数据的总长度建议小于512k。groupId 是业务 id，streamId 是接口 id。dt 表示该数据的时间戳，精确到毫秒级别。也可直接设置为0，此时 api 会后台获取当前时间作为其时间戳。timeout 和timeUnit 是发送数据的超时时间，一般建议设置成 20s。
```

### 异步单条函数
```
    public void asyncSendMessage(SendMessageCallback callback, byte[] body, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)

    参数说明

    body 为单条消息内容，其余各参数涵义基本与批量发送接口一致
```