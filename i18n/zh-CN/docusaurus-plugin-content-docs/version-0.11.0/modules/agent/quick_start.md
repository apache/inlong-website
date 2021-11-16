---
title: 编译部署
---

## 1、配置
```
cd inlong-agent
```

agent 支持本地运行以及线上运行，其中线上运行从inlong manager拉取任务，本地运行可使用http请求提交任务

### Agent 线上运行相关设置

线上运行需要从inlong-manager拉取配置，配置conf/agent.properties如下：
```ini
agent.fetcher.classname=org.apache.inlong.agent.plugin.fetcher.ManagerFetcher (设置任务获取的类名，默认为ManagerFetcher）
agent.local.ip=写入本机ip
agent.manager.vip.http.host=manager web host
agent.manager.vip.http.port=manager web port
```

## 2、运行

解压后如下命令运行
```bash
sh agent.sh start
```

### 3 实时添加job配置

#### 3.1 agent.properties 修改下面两处

```ini
# whether enable http service
agent.http.enable=true
# http default port
agent.http.port=可用端口
```

#### 3.2 执行如下命令：

```bash
curl --location --request POST 'http://localhost:8008/config/job' \
--header 'Content-Type: application/json' \
--data '{
"job": {
"dir": {
"path": "",
"pattern": "/data/inlong-agent/test.log"
},
"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",
"id": 1,
"thread": {
"running": {
"core": "4"
}
},
"name": "fileAgentTest",
"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",
"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",
"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"
},
"proxy": {
"groupId": "groupId10",
"streamId": "streamId10"
},
"op": "add"
}'
```

    其中各个参数含义为：
    - job.dir.pattern: 配置读取的文件路径，可包含正则表达式
    - job.trigger: 触发器名称，默认为DirectoryTrigger，功能为监听文件夹下的文件产生事件，任务运行时已有的文件不会读取
    - job.source: 使用的数据源类型，默认为TextFileSource，读取文本文件
    - job.sink：使用的写入器类型，默认为ProxySink，发送消息到dataproxy中
    - proxy.groupId: 写入proxy时使用的groupId，groupId是指manager界面中，数据接入中业务信息的业务ID，此处不是创建的tube topic名称
    - proxy.streamId: 写入proxy时使用的streamId，streamId是指manager界面中，数据接入中数据流的数据流ID

## 4、可支持的路径配置方案

    例如：
    /data/inlong-agent/test.log  //代表读取inlong-agent文件夹下的的新增文件test.log
    /data/inlong-agent/test[0-9]{1} //代表读取inlong-agent文件夹下的新增文件test后接一个数字结尾
    /data/inlong-agent/test //如果test为目录，则代表读取test下的所有新增文件
    /data/inlong-agent/^\\d+(\\.\\d+)? // 以一个或多个数字开头,之后可以是.或者一个.或多个数字结尾，?代表可选,可以匹配的实例："5", "1.5" 和 "2.21"


## 5、支持从文件名称中获取数据时间

    Agent支持从文件名称中获取时间当作数据的生产时间，配置说明如下：
    /data/inlong-agent/***YYYYMMDDHH***
    其中YYYYDDMMHH代表数据时间，YYYY表示年，MM表示月份，DD表示天，HH表示小时
    其中***为任意字符

    同时需要在job conf中加入当前数据的周期，当前支持天周期以及小时周期，
    在添加任务时，加入属性job.cycleUnit
    
    job.cycleUnit 包含如下两种类型：
    1、D : 代表数据时间天维度
    2、H : 代表数据时间小时维度

    例如：
    配置数据源为
    /data/inlong-agent/YYYYMMDDHH.log
    写入数据到 2021020211.log
    配置 job.cycleUnit 为 D
    则agent会在2021020211时间尝试2021020211.log文件，读取文件中的数据时，会将所有数据以20210202这个时间写入到后端proxy
    如果配置 job.cycleUnit 为 H
    则采集2021020211.log文件中的数据时，会将所有数据以2021020211这个时间写入到后端proxy

    
    提交job举例
```bash
curl --location --request POST 'http://localhost:8008/config/job' \
--header 'Content-Type: application/json' \
--data '{
"job": {
"dir": {
"path": "",
"pattern": "/data/inlong-agent/test.log"
},
"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",
"id": 1,
"thread": {
"running": {
"core": "4"
}
},
"name": "fileAgentTest",
"cycleUnit": "D",
"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",
"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",
"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"
},
"proxy": {
"groupId": "groupId",
"streamId": "streamId"
},
"op": "add"
}'
```


## 6、支持时间偏移量offset读取

    在配置按照时间读取之后，如果想要读取当前时间之外的其他时间的数据，可以通过配置时间偏移量完成
    配置job属性名称为job.timeOffset，值为数字 + 时间维度，时间维度包括天和小时
    例如支持如下设置
    1、 1d 读取当前时间后一天的数据 
    2、 -1h 读取当前时间前一个小时的数据


    提交job举例
```bash
curl --location --request POST 'http://localhost:8008/config/job' \
--header 'Content-Type: application/json' \
--data '{
"job": {
"dir": {
"path": "",
"pattern": "/data/inlong-agent/test.log"
},
"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",
"id": 1,
"thread": {
"running": {
"core": "4"
}
},
"name": "fileAgentTest",
"cycleUnit": "D",
"timeOffset": "-1d",
"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",
"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",
"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"
},
"proxy": {
"groupId": "groupId",
"streamId": "streamId"
},
"op": "add"
}'
```