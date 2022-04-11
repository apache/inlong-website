---
title: 安装部署
sidebar_position: 2
---
安装文件在 `inlong-agent` 目录。

## 配置
Agent 需要从 Manager 拉取配置，配置conf/agent.properties如下：
```ini
# replace by agent IP
agent.local.ip=127.0.0.1
agent.http.port=8008
# manager IP
agent.manager.vip.http.host=127.0.0.1
# manager port
agent.manager.vip.http.port=8083
# audit proxy address
audit.proxys=127.0.0.1:10081
```

## 依赖
- 如果后端连接 MySQL 数据库，请下载 [mysql-connector-java-8.0.27.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar), 并将其放入 `lib/` 目录。
- 如果后端连接 PostgreSQL 数据库，不需要引入额外依赖。

## 启动
```bash
bash +x bin/agent.sh start
```

## 示例：实时添加job配置

```bash
curl --location --request POST 'http://localhost:8008/config/job' \
--header 'Content-Type: application/json' \
--data '{
  "job": {
    "dir": {
      "path": "",
      "pattern": "/data/inlong-agent/test.log"
    },
    "sourceType": 3,
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
    "inlongGroupId": "groupId10",
    "inlongStreamId": "streamId10"
  },
  "op": "add"
}'
```

其中各个参数含义为：
- job.dir.pattern: 配置读取的文件路径，可包含正则表达式
- job.trigger: 触发器名称，默认为DirectoryTrigger，功能为监听文件夹下的文件产生事件，任务运行时已有的文件不会读取
- job.sourceType: 作业类型，可选的值为：0(DATABASE_MIGRATION)、1(SQL)、2(BINLOG)、3(FILE)、4(KAFKA)。  
- job.source: 使用的数据源类型，默认为TextFileSource，读取文本文件
- job.sink：使用的写入器类型，默认为ProxySink，发送消息到dataproxy中
- proxy.groupId: 写入proxy时使用的groupId，groupId是指manager界面中，数据接入中业务信息的业务ID，此处不是创建的tube topic名称
- proxy.streamId: 写入proxy时使用的streamId，streamId是指manager界面中，数据接入中数据流的数据流ID