## 部署TubeMQ Manager
安装文件在inlong-tubemq-manager目录.

### 配置
- 在mysql中创建`tubemanager`数据和相应用户.
- 在conf/application.properties中添加mysql信息：

```ini
# mysql configuration for manager
spring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/tubemanager
spring.datasource.username=mysql_username
spring.datasource.password=mysql_password
```

### 启动服务

``` bash
$ bin/start-manager.sh 
```

### 初始化TubeMQ集群

    vim bin/init-tube-cluster.sh

替换如下六个参数
```
TUBE_MANAGER_IP=   //tube manager服务启动ip
TUBE_MANAGER_PORT=   //tube manager服务启动port
TUBE_MASTER_IP=   //tube 集群master ip
TUBE_MASTER_PORT=
TUBE_MASTER_WEB_PORT=
TUBE_MASTER_TOKEN=
```

然后执行以下命令：
```
sh bin/init-tube-cluster.sh
```
如上操作会创建一个clusterId为1的tube集群，注意该操作只进行一次，之后重启服务无需新建集群

### 附录：其它操作接口

#### cluster
查询clusterId以及clusterName全量数据 （get)

示例

【GET】 /v1/cluster

返回值

    {
    "errMsg": "",
    "errCode": 0,
    "result": true,
    "data": "[{\"clusterId\":1,\"clusterName\":\"1124\", \"masterIp\":\"127.0.0.1\"}]"
    }

#### topic

#### 添加topicTask

    type	(必填) 请求类型，字段填写：op_query
    clusterId	(必填) 请求集群id
    addTopicTasks (必填) topicTasks，创建task任务json，
    user	(必填) 之后接入权限验证需要验证用户，这里预留出来

addTopicTasks目前只包括一个字段为topicName
之后接入region设计会新加入region字段表示不同区域的broker
目前一个addTopicTask会在cluster中的所有broker创建topic


AddTopicTasks 为以下对象的List，可携带多个创建topic请求

    topicName	(必填) topic名称

示例

【POST】 /v1/task?method=addTopicTask

    {
    "clusterId": "1",
    "addTopicTasks": [{"topicName": "1"}],
    "user": "test"
    }

返回json格式样例

    {
    "errMsg": "There are topic tasks [a12322] already in adding status",
    "errCode": 200,
    "result": false,
    "data": ""
    }

result为false为写入task失败


#### 查询某一个topic是否创建成功（业务可以写入）

    clusterId	(必填) 请求集群id
    topicName   (必填) 查询topic名称
    user	(必填) 之后接入权限验证需要验证用户，这里预留出来


示例

【POST】 /v1/topic?method=queryCanWrite

    {
    "clusterId": "1",
    "topicName": "1",
    "user": "test"
    }


返回json格式样例

    { "result":true, "errCode":0, "errMsg":"OK", }
    { "result":false, "errCode": 100, "errMsg":"topic test is not writable"}
    { "result":false, "errCode": 101, "errMsg":"no such topic in master"}

result为false为不可写