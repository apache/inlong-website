---
title: Deployment
sidebar_position: 2
---

All deploying files at `inlong-agent` directory.

## Configuration
Agent needs to pull the configuration from Manager, the configuration conf/agent.properties is as follows:
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

## Dependencies
- If the backend database is MySQL, please download [mysql-connector-java-8.0.27.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar) and put it into `lib/` directory.

- If the backend database is PostgreSQL, there's no need for additional dependencies.


## Start
```bash
bash +x bin/agent.sh start
```


## Example: Add job configuration in real time

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