## ~~~~一、安装

	环境要求：
	java JDK 1.8
	Maven 3.6 +
	
	inlong目录下执行命令
    mvn clean package -DskipTests

    在项目下的agent-release/target里面可以找到tgz安装包



## 二、配置

agent 支持两种运行模式：本地运行以及线上运行

### 2.1 Agent 线上运行相关设置

线上运行需要从inlong-manager拉取配置，配置conf/agent.properties如下：
```ini
agent.fetcher.classname=org.apache.inlong.agent.plugin.fetcher.ManagerFetcher (设置任务获取的类名，默认为ManagerFetcher）
agent.local.ip=写入本机ip
agent.manager.vip.http.host=manager host
agent.manager.vip.http.port=manager port
```

### 2.2 Proxy 相关设置
在agent目录下新建.inlong\.managerIps文件夹，内部新建bid+.local文件，例如设置的发送bid为a, 则新建a.local文件

内部将写入：
```ini
{"cluster_id":1,"isInterVisit":1,"size":1,"address": [{"port":写入proxy port,"host":"写入proxy ip"}], "switch":0}
```

### 2.3 agent本地运行job配置
如果不使用线上模式，可以使用本地文件新建读取任务
在conf中新建目录jobs，
vim job1.json：

写入
```json
    {

    "job": {
    
    "dir": {
    
    "pattern": "需要读取的文件路径，可包含正则表达式，例如test/inlong_[0-9]{1}，监听test下创建的新文件"
    
    },
    
    "trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",
    
    "id": 1,
    
    "name": "fileAgentTest",
    
    "source": "org.apache.inlong.agent.plugin.sources.TextFileSource",
    
    "sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",
    
    "channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"
    
    },
    
    "proxy": {
    
    "bid": "testbid1"
    
    }
    
    }
```


其中各个参数含义为：
- job.dir.pattern: 配置读取的文件路径，可包含正则表达式
- job.trigger: 触发器名称，默认为DirectoryTrigger，功能为监听文件夹下的文件产生事件
- job.source: 使用的数据源类型，默认为TextFileSource，读取文本文件
- job.sink：使用的写入器类型，默认为ProxySink，发送消息到proxy中
- proxy.bid: 写入proxy时使用的bid类型

### 2.4 实时添加job配置

#### 2.4.1 agent.propertities 修改下面两处
```ini
# whether enable http service
agent.http.enable=true
# http default port
agent.http.port=可用端口
```

#### 2.4.2 执行如下命令：
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
}
},
"name": "fileAgentTest",
"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",
"sink": "org.apache.inlong.agent.plugin.sinks.TdBusSink",
"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"
},
"proxy": {
"bid": "thirtybid10"
},
"op": "add"
}'
```

其中参数分别为：
- pattern: 代表读取/data/inlong-agent/test.log文件
- proxy.bid: 代表发送到proxy使用的bid

## 三、运行
解压后如下命令运行
```bash
sh agent.sh start
```