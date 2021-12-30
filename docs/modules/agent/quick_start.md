---
title: Deployment
sidebar_position: 2
---

```
cd inlong-agent
```

### Configuration

Online operation needs to pull the configuration from inlong-manager, the configuration conf/agent.properties is as follows:
```ini
# whether enable http service
agent.http.enable=true
# http default port
agent.http.port=Available ports
agent.fetcher.classname=org.apache.inlong.agent.plugin.fetcher.ManagerFetcher (the class name for fetch tasks, default ManagerFetcher）
agent.local.ip=Write local ip
agent.manager.vip.http.host=manager web host
agent.manager.vip.http.port=manager web port
```

## Start
After decompression, run the following command

```bash
sh agent.sh start
```


## Add job configuration in real time

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
    },
    "onejob": true
    },
    "name": "fileAgentTest",
    "source": "org.apache.inlong.agent.plugin.sources.TextFileSource",
    "sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",
    "channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"
    },
    "proxy": {
  "inlongGroupId": "groupId10",
  "inlongStreamId": "groupId10"
    },
    "op": "add"
    }'
```

The meaning of each parameter is ：
- job.dir.pattern: Configure the read file path, which can include regular expressions
- job.trigger: Trigger name, the default is DirectoryTrigger, the function is to monitor the files under the folder to generate events
- job.source: The type of data source used, the default is TextFileSource, which reads text files
- job.sink：The type of writer used, the default is ProxySink, which sends messages to the proxy
- proxy.groupId: The groupId type used when writing proxy, groupId is group id showed on data access in inlong-manager, not the topic name.
- proxy.streamId: The streamId type used when writing proxy, streamId is the data flow id showed on data flow window in inlong-manager