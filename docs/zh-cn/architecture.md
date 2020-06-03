## TubeMQ Architecture 
经过多年演变，TubeMQ集群分为如下5个部分：
![](img/sys_structure.png)

- **Portal**： 负责对外交互和运维操作的Portal部分，包括API和Web两块，API对接集群之外的管理系统，Web是在API基础上对日常运维功能做的页面封装；

- **Master**： 负责集群控制的Control部分，该部分由1个或多个Master节点组成，Master HA通过Master节点间心跳保活、实时热备切换完成（这是大家使用TubeMQ的Lib时需要填写对应集群所有Master节点地址的原因），主Master负责管理整个集群的状态、资源调度、权限检查、元数据查询等；

- **Broker**： 负责实际数据存储的Store部分，该部分由相互之间独立的Broker节点组成，每个Broker节点对本节点内的Topic集合进行管理，包括Topic的增、删、改、查，Topic内的消息存储、消费、老化、分区扩容、数据消费的offset记录等，集群对外能力，包括Topic数目、吞吐量、容量等，通过水平扩展Broker节点来完成；

- **Client**： 负责数据生产和消费的Client部分，该部分我们以Lib形式对外提供，大家用得最多的是消费端，相比之前，消费端现支持Push、Pull两种数据拉取模式，数据消费行为支持顺序和过滤消费两种。对于Pull消费模式，支持业务通过客户端重置精确offset以支持业务extractly-once消费，同时，消费端新推出跨集群切换免重启的BidConsumer客户端；

- **Zookeeper**： 负责offset存储的zk部分，该部分功能已弱化到仅做offset的持久化存储，考虑到接下来的多节点副本功能该模块暂时保留。- **Zookeeper：** Responsible for the zk part of the offset storage. This part of the function has been weakened to only the persistent storage of the offset. Considering the next multi-node copy function, this module is temporarily reserved;

## Broker文件存储方案改进 
以磁盘为数据持久化媒介的系统都面临各种因磁盘问题导致的系统性能问题，TubeMQ系统也不例外，性能提升很大程度上是在解决消息数据如何读写及存储的问题，在这个方面TubeMQ进行了比较多的改进：

### 文件结构组织形式调整
 TubeMQ的磁盘存储方案类似Kafka，但又不尽相同，如下图示，存储实例由一个索引文件和一个数据文件组成，每个Topic可以分配1个或者多个存储实例，每个Topic单独维护管理存储实例的相关机制，包括老化周期，partition个数，是否可读可写等。
![](img/store_file.png)

### 内存块缓存
 在文件存储基础上，我们针对每个存储实例又额外增加了一个单独的内存缓存块，即在原有写磁盘基础上增加一块内存，隔离硬盘的慢速影响，数据先刷到内存，然后由内存控制块批量地将数据刷到磁盘文件。
![](img/store_mem.png)



