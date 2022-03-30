---
title: Deployment
sidebar_position: 2
---

```
cd inlong-agent
```

## Environment Preparation
- Install and start MySQL 5.7+
- Initialize the database
  `sql/apache_tube_manager.sql` file, load this file through the command to complete the initialization of the table structure and basic data:

  ```` shell
  # Create database and table with username and password:
  mysql -uDB_USER -pDB_PASSWD < sql/apache_tube_manager.sql
  ````
  
## Configuration

Online operation needs to pull the configuration from inlong-manager, the configuration conf/agent.properties is as follows:
```ini
agent.local.ip=Write local ip
agent.manager.vip.http.host=manager host
agent.manager.vip.http.port=manager port
# audit proxy address
audit.proxys=127.0.0.1:10081
```

## Dependencies
- If the backend database is MySQL, please download [mysql-connector-java-8.0.26.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.26/mysql-connector-java-8.0.26.jar) and put it into `lib/` directory.

- If the backend database is PostgreSQL, there's no need for additional dependencies.


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