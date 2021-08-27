## 1、配置
```
cd inlong-agent
```

agent 支持本地运行以及线上运行，其中线上运行从inlong manager拉取任务，本地运行可使用http请求提交任务

### 1.1 Agent 线上运行相关设置

线上运行需要从inlong-manager拉取配置，配置conf/agent.properties如下：
```ini
agent.fetcher.classname=org.apache.inlong.agent.plugin.fetcher.ManagerFetcher (设置任务获取的类名，默认为ManagerFetcher）
agent.local.ip=写入本机ip
agent.manager.vip.http.host=manager web host
agent.manager.vip.http.port=manager web port
```

### 1.2 DataProxy 相关设置
在agent目录下新建.inlong文件夹，内部新建bid+.local文件，例如设置的发送bid为a, 则新建a.local文件
bid是指manager界面中，数据接入中业务信息的业务ID，此处不是创建的tube topic名称
内部将写入：
```ini
{"cluster_id":1,"isInterVisit":1,"size":1,"address": [{"port":写入proxy port,"host":"写入proxy ip"}], "switch":0}
其中cluster_id, isInterVisit，switch为预留字段，请填写默认值
```

## 2、运行
解压后如下命令运行
```bash
sh agent.sh start
```

### 3 实时添加job配置

#### 3.1 agent.propertities 修改下面两处
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
"bid": "bid10",
"tid": "bid10"
},
"op": "add"
}'
```

    其中各个参数含义为：
    - job.dir.pattern: 配置读取的文件路径，可包含正则表达式
    - job.trigger: 触发器名称，默认为DirectoryTrigger，功能为监听文件夹下的文件产生事件，任务运行时已有的文件不会读取
    - job.source: 使用的数据源类型，默认为TextFileSource，读取文本文件
    - job.sink：使用的写入器类型，默认为ProxySink，发送消息到dataproxy中
    - proxy.bid: 写入proxy时使用的bid，bid是指manager界面中，数据接入中业务信息的业务ID，此处不是创建的tube topic名称
    - proxy.tid: 写入proxy时使用的tid，tid是指manager界面中，数据接入中数据流的数据流ID

## 4、可支持的路径配置方案

    例如：
    /data/inlong-agent/test.log  //代表读取inlong-agent文件夹下的的新增文件test.log
    /data/inlong-agent/test[0-9]{1} //代表读取inlong-agent文件夹下的新增文件test后接一个数字结尾
    /data/inlong-agent/test //如果test为目录，则代表读取test下的所有新增文件
    /data/inlong-agent/^\\d+(\\.\\d+)? // 以一个或多个数字开头,之后可以是.或者一个.或多个数字结尾，?代表可选,可以匹配的实例："5", "1.5" 和 "2.21"


