## 1、Configuration
```
cd inlong-agent
```

The agent supports two modes of operation: local operation and online operation


### 1.1 Agent configuration

Online operation needs to pull the configuration from inlong-manager, the configuration conf/agent.properties is as follows:
```ini
agent.fetcher.classname=org.apache.inlong.agent.plugin.fetcher.ManagerFetcher (the class name for fetch tasks, default ManagerFetcher）
agent.local.ip=Write local ip
agent.manager.vip.http.host=manager open api host
agent.manager.vip.http.port=manager open api port
```

### 1.2 Proxy configuration
Create a new folder named .inlong in the agent directory, and create a new bid+.local file inside. For example, if the sending bid is set to a, then create a new file a.local

write:
```ini
{"cluster_id":1,"isInterVisit":1,"size":1,"address": [{"port":write proxy port,"host":"write proxy ip"}], "switch":0}
Among them, cluster_id, isInterVisit, and switch are reserved fields, please fill in the default values
```

## 2、run
After decompression, run the following command

```bash
sh agent.sh start
```


## 3、Add job configuration in real time

#### 3.1 agent.propertities Modify the following two places
```ini
# whether enable http service
agent.http.enable=true
# http default port
agent.http.port=Available ports
```

#### 3.2 Execute the following command
```bash
    curl --location --request POST 'http://localhost:8129/config/job' \
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
    "bus": {
  "bid": "bid10",
  "tid": "bid10"
    },
    "op": "add"
    }'
```

    The meaning of each parameter is ：
    - job.dir.pattern: Configure the read file path, which can include regular expressions
    - job.trigger: Trigger name, the default is DirectoryTrigger, the function is to monitor the files under the folder to generate events
    - job.source: The type of data source used, the default is TextFileSource, which reads text files
    - job.sink：The type of writer used, the default is ProxySink, which sends messages to the proxy
    - proxy.bid: The bid type used when writing proxy
    - proxy.tid: The tid type used when writing proxy


## 4、eg for directory config

    E.g:
    /data/inlong-agent/test.log //Represents reading the new file test.log in the inlong-agent folder
    /data/inlong-agent/test[0-9]{1} // means to read the new file test in the inlong-agent folder followed by a number at the end
    /data/inlong-agent/test //If test is a directory, it means to read all new files under test
    /data/inlong-agent/^\\d+(\\.\\d+)? // Start with one or more digits, followed by. or end with one. or more digits (? stands for optional, can match Examples: "5", "1.5" and "2.21"