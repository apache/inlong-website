## 一、安装

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
agent.manager.vip.http.host=manager open api host
agent.manager.vip.http.port=manager open api port
```

### 2.2 DataProxy 相关设置
在agent目录下新建.inlong文件夹，内部新建bid+.local文件，例如设置的发送bid为a, 则新建a.local文件

内部将写入：
```ini
{"cluster_id":1,"isInterVisit":1,"size":1,"address": [{"port":写入proxy port,"host":"写入proxy ip"}], "switch":0}
其中cluster_id, isInterVisit，switch为预留字段，请填写默认值
```

### 2.3 agent本地运行job配置
如果不使用线上模式，可以使用本地文件新建读取任务
在conf中新建目录jobs，jobs内部vim job1.json：

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
    
      "bid": "testbid1", 
      "tid": "testtid1"

    }
    
    }
```


其中各个参数含义为：
- job.dir.pattern: 配置读取的文件路径，可包含正则表达式
- job.trigger: 触发器名称，默认为DirectoryTrigger，功能为监听文件夹下的文件产生事件，任务运行时已有的文件不会读取
- job.source: 使用的数据源类型，默认为TextFileSource，读取文本文件
- job.sink：使用的写入器类型，默认为ProxySink，发送消息到dataproxy中
- proxy.bid: 写入proxy时使用的bid类型
- proxy.tid: 写入proxy时使用的tid类型

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
curl --location --request POST 'http://localhost:8018/config/job' \
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
"bid": "bid10",
"tid": "bid10"
},
"op": "add"
}'
```
        
	其中参数分别为：
	pattern: 代表读取/data/inlong-agent/test.log文件，需要新建任务后再创建文件
	proxy.bid: 代表发送到dataproxy使用的bid
	proxy.tid: 代表发送到dataproxy使用的tid

## 三、运行
解压后如下命令运行
```bash
sh agent.sh start
```


## 四、可支持的路径配置方案

    例如：
    /data/inlong-agent/test.log  //代表读取inlong-agent文件夹下的的新增文件test.log
    /data/inlong-agent/test[0-9]{1} //代表读取inlong-agent文件夹下的新增文件test后接一个数字结尾
    /data/inlong-agent/test //如果test为目录，则代表读取test下的所有新增文件
    /data/inlong-agent/^\\d+(\\.\\d+)? // 以一个或多个数字开头,之后可以是.或者一个.或多个数字结尾，?代表可选,可以匹配的实例："5", "1.5" 和 "2.21"


