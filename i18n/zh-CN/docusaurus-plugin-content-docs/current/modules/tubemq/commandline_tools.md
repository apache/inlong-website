## 总览
TubeMQ提供命令行工具来查看管理Topic，以及消息的生产与消费。

命令行工具`tubectl`可以在TubeMQ的bin目录运行。
用法
```
$ bin/tubectl [options] [command] [command options]
```
命令：

- `topic`
- `message`
- `group`

> 同时也可以使用--help或者-h获取上述命令的帮助，例如：

```shell
$ bin/tubectl topic -h
```
## Topic
`topic`命令用于对TubeMQ内的topic进行管理，包括增删改查等等。

命令：

- `list`
- `update`
- `create`
- `delete`
### `list`
```shell
$ bin/tubectl topic list
```
选项：

|            **参数**            | **类型** |            **描述**            | **默认值** | **必需** |
|:----------------------------:|:------:|:----------------------------:|:-------:|:------:|
|         -t, --topic          | String |           topic名称            |         |        |
|   -sid, --topic-status-id    |  Int   |          topic记录状态           |    0    |        |
|      -bid, --broker-id       | String |  broker的ID，多个broker之间以逗号间隔   |         |        |
|     -dp, --delete-policy     | String | topic数据删除策略，类似"delete,168"定义 |         |        |
|    -np, --num-partitions     |  Int   |      topic在该broker上的分区量      |    3    |        |
|   -nts, --num-topic-stores   |  Int   |    允许建立Topic数据块和分区管理组的个数     |    1    |        |
|  -uft, --unflush-threshold   |  Int   |        最大允许的待刷新的记录条数         |  1000   |        |
|   -ufi, --unflush-interval   |  Int   |         最大允许的待刷新的间隔          |  10000  |        |
|   -ufd, --unflush-dataHold   |  Int   |        缺省最大允许的待刷新数据大小        |    0    |        |
|  -mc, --memcache-msgcnt-ink  |  Int   |          缺省最大内存缓存包量          |   10    |        |
| -ms, --memcache-msgsize-inmb |  Int   |       缺省内存缓存包总的Size大小        |    2    |        |
| -mfi, --memcache-flush-intvl |  Int   |        内存缓存最大允许的待刷新间隔        |  20000  |        |
|        -c, --creator         | String |           topic创建者           |         |        |
|        -m, --modifier        | String |           topic修改者           |         |        |

### `update`
```shell
$ bin/tubectl topic update
```
选项：

|            **参数**            | **类型**  |            **描述**            | **默认值** | **必需** |
|:----------------------------:|:-------:|:----------------------------:|:-------:|:------:|
|         -t, --topic          | String  |           topic名称            |         |   是    |
|      -bid, --broker-id       | String  |  broker的ID，多个broker之间以逗号间隔   |         |   是    |
|        -m, --modifier        | String  |           topic修改者           |         |   是    |
|      -at, --auth-token       | String  |          配置修改授权key           |         |   是    |
|     -dp, --delete-policy     | String  | topic数据删除策略，类似"delete,168"定义 |         |        |
|    -np, --num-partitions     |   Int   |      topic在该broker上的分区量      |    3    |        |
|  -uft, --unflush-threshold   |   Int   |        最大允许的待刷新的记录条数         |  1000   |        |
|   -ufi, --unflush-interval   |   Int   |         最大允许的待刷新的间隔          |  10000  |        |
|   -ufd, --unflush-datahold   |   Int   |        缺省最大允许的待刷新数据大小        |    0    |        |
|   -nts, --num-topic-stores   |   Int   |    允许建立Topic数据块和分区管理组的个数     |    1    |        |
|  -mc, --memcache-msgcnt-ink  |   Int   |          缺省最大内存缓存包量          |   10    |        |
| -ms, --memcache-msgsize-inmb |   Int   |       缺省内存缓存包总的Size大小        |    2    |        |
| -mfi, --memcache-flush-intvl |   Int   |        内存缓存最大允许的待刷新间隔        |  20000  |        |
|    -ap, --accept-publish     | Boolean |        topic是否接收发布请求         |  true   |        |
|   -as, --accept-subscribe    | Boolean |        topic是否接收订阅请求         |  true   |        |
|   -mms, --max-msgsize-inmb   |   Int   |           最大消息包长设置           |    1    |        |
|      -md, --modify-date      | String  |             修改时间             |         |        |

### `create`
```shell
$ bin/tubectl create
```
选项：

|            **参数**            | **类型**  |            **描述**            | **默认值** | **必需** |
|:----------------------------:|:-------:|:----------------------------:|:-------:|:------:|
|         -t, --topic          | String  |           topic名称            |         |   是    |
|      -bid, --broker-id       | String  |  broker的ID，多个broker之间以逗号间隔   |         |   是    |
|        -c, --creator         | String  |           topic创建者           |         |   是    |
|      -at, --auth-token       | String  |          配置修改授权key           |         |   是    |
|     -dp, --delete-policy     | String  | topic数据删除策略，类似"delete,168"定义 |         |        |
|    -np, --num-partitions     |   Int   |      topic在该broker上的分区量      |   -1    |        |
|  -uft, --unflush-threshold   |   Int   |        最大允许的待刷新的记录条数         |   -1    |        |
|   -ufi, --unflush-interval   |   Int   |         最大允许的待刷新的间隔          |   -1    |        |
|   -ufd, --unflush-datahold   |   Int   |        缺省最大允许的待刷新数据大小        |    0    |        |
|   -nts, --num-topic-stores   |   Int   |    允许建立Topic数据块和分区管理组的个数     |    1    |        |
|  -mc, --memcache-msgcnt-ink  |   Int   |          缺省最大内存缓存包量          |   10    |        |
| -ms, --memcache-msgsize-inmb |   Int   |       缺省内存缓存包总的Size大小        |    2    |        |
| -mfi, --memcache-flush-intvl |   Int   |        内存缓存最大允许的待刷新间隔        |  20000  |        |
|    -ap, --accept-publish     | Boolean |        topic是否接收发布请求         |  true   |        |
|   -as, --accept-subscribe    | Boolean |        topic是否接收订阅请求         |  true   |        |
|   -mms, --max-msgsize-inmb   |   Int   |           最大消息包长设置           |    1    |        |
|      -cd, --create-date      | String  |             创建时间             |         |        |

### `delete`
```shell
$ bin/tubectl topic delete
```
选项：

|       **参数**       | **类型** |                          **描述**                          | **默认值** | **必需** |
|:------------------:|:------:|:--------------------------------------------------------:|:-------:|:------:|
|  -o, --delete-opt  | String | 删除选项, 可选 { soft &#124; redo &#124; hard }，分别代表软删除、回滚和硬删除 |  soft   |        |
|    -t, --topic     | String |                         topic名称                          |         |   是    |
| -bid, --broker-id  | String |                broker的ID，多个broker之间以逗号间隔                 |         |   是    |
|   -m, --modifier   | String |                         topic修改者                         |         |   是    |
| -at, --auth-token  | String |                        配置修改授权key                         |         |   是    |
| -md, --modify-date | String |                           修改时间                           |         |        |

## Message
`message`命令用于消息管理，包括生产和消费。

命令：

- `produce`
- `consume`

### `produce`
```shell
$ bin/tubectl message produce
```
选项：

|        **参数**         | **类型** |                       **描述**                        | **默认值** | **必需** |
|:---------------------:|:------:|:---------------------------------------------------:|:-------:|:------:|
|      -t, --topic      | String |                       topic名称                       |         |   是    |
| -ms, --master-servers | String | 连接的master地址, 格式为master1_ip:port\[,master2_ip:port\] |         |   是    |
|   -mt, --msg-total    |  Long  |                 需要生产的消息总条数，-1代表不限制。                 |   -1    |        |
|      -m, --mode       | String |     生产模式, 可选 { sync &#124; async }，分别代表同步和异步生产      |  async  |        |

### `consume`
```shell
$ bin/tubectl message consume
```
选项：

|          **参数**           | **类型** |                                **描述**                                | **默认值** | **必需** |
|:-------------------------:|:------:|:--------------------------------------------------------------------:|:-------:|:------:|
|        -t, --topic        | String |                               topic名称                                |         |   是    |
|        -g, --group        | String |                                 消费者组                                 |         |   是    |
|   -ms, --master-servers   | String |          连接的master地址,格式为master1_ip:port\[,master2_ip:port\]          |         |   是    |
|      -p, --position       | String |              消费位置，可选 { first &#124; latest &#124; max }              |  first  |        |
| -po, --partitions-offsets | String | 指定消费分区和offsets，格式为 id1:offset1\[,id2:offset2\]\[...\]，例如：0:0,1:0,2:0 |         |        |
|        -m, --mode         | String | 消费模式，可选 { pull &#124; push &#124; balance },当指定了-po参数时，默认使用balance模式 |  pull   |        |

## Group
`group`命令用于消费者组管理，目前支持查询、增加和删除。

命令：

- `list`
- `create`
- `delete`
### `list`
```shell
$ bin/tubectl cgroup list 
```
选项：

|    **参数**     | **类型** | **描述**  | **默认值** | **必需** |
|:-------------:|:------:|:-------:|:-------:|:------:|
|  -t, --topic  | String | topic名称 |         |
|  -g, --group  | String |  消费者组   |         |
| -c, --creator | String |   创建者   |         |        |

### `create`
```shell
$ bin/tubectl cgroup create
```
选项：

|       **参数**       | **类型** |  **描述**   | **默认值** | **必需** |
|:------------------:|:------:|:---------:|:-------:|:------:|
|    -t, --topic     | String |  topic名称  |         |   是    |
|    -g, --group     | String |   消费者组    |         |   是    |
| -at, --auth-token  | String | 配置修改授权key |         |   是    |
|    c, --creator    | String |    创建者    |         |   是    |
| -cd, --create-date | String |   创建时间    |         |

### `delete`
```shell
$ bin/tubectl cgroup delete
```
选项：

|      **参数**       | **类型** |  **描述**   | **默认值** | **必需** |
|:-----------------:|:------:|:---------:|:-------:|:------:|
|    -t, --topic    | String |  topic名称  |         |   是    |
| -at, --auth-token | String | 配置修改授权key |         |   是    |
|  -m, --modifier   | String |    修改者    |         |   是    |
|    -g, --group    | String |   消费者组    |         |

