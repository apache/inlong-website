
## 1、install

	env requirements：
	java JDK 1.8
	Maven 3.6 +
	
    
    mvn clean package -DskipTests

    The tgz installation package can be found in the target under the agent-release



## 2、Configuration
The agent supports two modes of operation: local operation and online operation


###2.1 Agent configuration

Online operation needs to pull the configuration from inlong-manager, the configuration conf/agent.properties is as follows:
agent.fetcher.classname=org.apache.inlong.agent.plugin.fetcher.ManagerFetcher (the class name for fetch tasks, default ManagerFetcher）
agent.local.ip=Write local ip
agent.manager.vip.http.host=manager host
agent.manager.vip.http.port=manager port

###2.2 Proxy configuration
Create a new folder named .inlong\.managerIps in the agent directory, and create a new bid+.local file inside. For example, if the sending bid is set to a, then create a new file a.local

write:

    {"cluster_id":1,"isInterVisit":1,"size":1,"address": [{"port":write proxy port,"host":"write proxy ip"}], "switch":0}

###2.3 local job configuration
If you do not use the online mode, you can use the local file to create a new read task
Create a new directory jobs in conf,
vim job1.json：

put

    "job": {
    
    "dir": {
    
    "pattern": "The path of the file to be read, which can contain regular expressions"
    
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



The meaning of each parameter is ：

    job.dir.pattern: Configure the read file path, which can include regular expressions
    
    job.trigger: Trigger name, the default is DirectoryTrigger, the function is to monitor the files under the folder to generate events

    job.source: The type of data source used, the default is TextFileSource, which reads text files
    
    job.sink：The type of writer used, the default is ProxySink, which sends messages to the proxy

    proxy.bid: The bid type used when writing proxy

###2.4 Add job configuration in real time

##agent.propertities Modify the following two places

	# whether enable http service
	agent.http.enable=true
	# http default port
	agent.http.port=Available ports

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
    "sink": "org.apache.inlong.agent.plugin.sinks.TdBusSink",
    "channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"
    },
    "bus": {
    "bid": "thirtybid10",
    "tdmanager": {
    "port": "8099",
    "host": "http://tl-tdbank-tdmanger.tencent-distribute.com"
    }
    },
    "op": "add"
    }'


##3、run
After decompression, run the following command

    sh agent.sh start
