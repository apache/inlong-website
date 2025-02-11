---
title: 命令行工具
sidebar_position: 6
---

## 总览
TubeMQ 提供命令行工具来管理主题，生产和消费消息，以及管理消费者组。      
命令行工具 `tubectl` 可以在 TubeMQ 安装路径的 `bin` 目录下找到。

用法
```shell
$ bin/tubectl [options] [command] [command options]
```
命令：

- `topic`
- `message`
- `group`

> 同时也可以使用 `--help` 或者 `-h` 获取上述命令的帮助，例如：

```shell
$ bin/tubectl topic -h
```

## Topic
`topic` 命令用于管理主题，包括增删改查等。

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

|            **参数**            | **类型** |             **描述**              | **默认值** | **必需** |
|:----------------------------:|:------:|:-------------------------------:|:-------:|:------:|
|         -t, --topic          | String |            topic 名称             |         |        |
|   -sid, --topic-status-id    |  Int   |           topic 记录状态            |    0    |        |
|      -bid, --broker-id       | String | broker 的 ID，多个 broker 之间以英文逗号间隔 |         |        |
|     -dp, --delete-policy     | String | topic 数据删除策略，类似 "delete,168" 定义 |         |        |
|    -np, --num-partitions     |  Int   |      topic 在该 broker 上的分区量      |    3    |        |
|   -nts, --num-topic-stores   |  Int   |     允许建立 topic 数据块和分区管理组的个数     |    1    |        |
|  -uft, --unflush-threshold   |  Int   |          最大允许的待刷新的记录条数          |  1000   |        |
|   -ufi, --unflush-interval   |  Int   |           最大允许的待刷新的间隔           |  10000  |        |
|   -ufd, --unflush-dataHold   |  Int   |         缺省最大允许的待刷新数据大小          |    0    |        |
|  -mc, --memcache-msgcnt-ink  |  Int   |           缺省最大内存缓存包量            |   10    |        |
| -ms, --memcache-msgsize-inmb |  Int   |        缺省内存缓存包总的 size 大小        |    2    |        |
| -mfi, --memcache-flush-intvl |  Int   |         内存缓存最大允许的待刷新间隔          |  20000  |        |
|        -c, --creator         | String |            topic 创建者            |         |        |
|        -m, --modifier        | String |            topic 修改者            |         |        |

### `update`
```shell
$ bin/tubectl topic update
```
选项：

|            **参数**            | **类型**  |             **描述**              | **默认值** | **必需** |
|:----------------------------:|:-------:|:-------------------------------:|:-------:|:------:|
|         -t, --topic          | String  |            topic 名称             |         |   是    |
|      -bid, --broker-id       | String  | broker 的 ID，多个 broker 之间以英文逗号间隔 |         |   是    |
|        -m, --modifier        | String  |            topic 修改者            |         |   是    |
|      -at, --auth-token       | String  |           配置修改授权 key            |         |   是    |
|     -dp, --delete-policy     | String  | topic 数据删除策略，类似 "delete,168" 定义 |         |        |
|    -np, --num-partitions     |   Int   |      topic 在该 broker 上的分区量      |    3    |        |
|  -uft, --unflush-threshold   |   Int   |          最大允许的待刷新的记录条数          |  1000   |        |
|   -ufi, --unflush-interval   |   Int   |           最大允许的待刷新的间隔           |  10000  |        |
|   -ufd, --unflush-datahold   |   Int   |         缺省最大允许的待刷新数据大小          |    0    |        |
|   -nts, --num-topic-stores   |   Int   |     允许建立 topic 数据块和分区管理组的个数     |    1    |        |
|  -mc, --memcache-msgcnt-ink  |   Int   |           缺省最大内存缓存包量            |   10    |        |
| -ms, --memcache-msgsize-inmb |   Int   |        缺省内存缓存包总的 size 大小        |    2    |        |
| -mfi, --memcache-flush-intvl |   Int   |         内存缓存最大允许的待刷新间隔          |  20000  |        |
|    -ap, --accept-publish     | Boolean |         topic 是否接收发布请求          |  true   |        |
|   -as, --accept-subscribe    | Boolean |         topic 是否接收订阅请求          |  true   |        |
|   -mms, --max-msgsize-inmb   |   Int   |            最大消息包长设置             |    1    |        |
|      -md, --modify-date      | String  |              修改时间               |         |        |

### `create`
```shell
$ bin/tubectl create
```
选项：

|            **参数**            | **类型**  |             **描述**              | **默认值** | **必需** |
|:----------------------------:|:-------:|:-------------------------------:|:-------:|:------:|
|         -t, --topic          | String  |            topic 名称             |         |   是    |
|      -bid, --broker-id       | String  | broker 的 ID，多个 broker 之间以英文逗号间隔 |         |   是    |
|        -c, --creator         | String  |            topic 创建者            |         |   是    |
|      -at, --auth-token       | String  |           配置修改授权 key            |         |   是    |
|     -dp, --delete-policy     | String  | topic 数据删除策略，类似 "delete,168" 定义 |         |        |
|    -np, --num-partitions     |   Int   |      topic 在该 broker 上的分区量      |   -1    |        |
|  -uft, --unflush-threshold   |   Int   |          最大允许的待刷新的记录条数          |   -1    |        |
|   -ufi, --unflush-interval   |   Int   |           最大允许的待刷新的间隔           |   -1    |        |
|   -ufd, --unflush-datahold   |   Int   |         缺省最大允许的待刷新数据大小          |    0    |        |
|   -nts, --num-topic-stores   |   Int   |     允许建立 topic 数据块和分区管理组的个数     |    1    |        |
|  -mc, --memcache-msgcnt-ink  |   Int   |           缺省最大内存缓存包量            |   10    |        |
| -ms, --memcache-msgsize-inmb |   Int   |        缺省内存缓存包总的 size 大小        |    2    |        |
| -mfi, --memcache-flush-intvl |   Int   |         内存缓存最大允许的待刷新间隔          |  20000  |        |
|    -ap, --accept-publish     | Boolean |         topic 是否接收发布请求          |  true   |        |
|   -as, --accept-subscribe    | Boolean |         topic 是否接收订阅请求          |  true   |        |
|   -mms, --max-msgsize-inmb   |   Int   |            最大消息包长设置             |    1    |        |
|      -cd, --create-date      | String  |              创建时间               |         |        |

### `delete`
```shell
$ bin/tubectl topic delete
```
选项：

|       **参数**       | **类型** |             **描述**              | **默认值** | **必需** |
|:------------------:|:------:|:-------------------------------:|:-------:|:------:|
|  -o, --delete-opt  | String |  删除选项，可选值：`soft`，`redo`，`hard`  | `soft`  |        |
|    -t, --topic     | String |            topic 名称             |         |   是    |
| -bid, --broker-id  | String | broker 的 ID，多个 broker 之间以英文逗号间隔 |         |   是    |
|   -m, --modifier   | String |            topic 修改者            |         |   是    |
| -at, --auth-token  | String |           配置修改授权 key            |         |   是    |
| -md, --modify-date | String |              修改时间               |         |        |

<details>
<summary>删除选项说明</summary>

|  删除选项  |    描述    |
|:------:|:--------:|
| `soft` |   软删除    |
| `redo` | 回滚之前的软删除 |
| `hard` |   硬删除    |

</details>

## Message
`message` 命令用于生产和消费消息。

命令：
- `produce`
- `consume`

### `produce`
```shell
$ bin/tubectl message produce
```
选项：

|        **参数**         | **类型** |                        **描述**                         | **默认值** | **必需** |
|:---------------------:|:------:|:-----------------------------------------------------:|:-------:|:------:|
|      -t, --topic      | String |                       topic 名称                        |         |   是    |
| -ms, --master-servers | String | 连接的 master 地址，格式为 master1_ip:port\[,master2_ip:port\] |         |   是    |
|   -mt, --msg-total    |  Long  |                  需要生产的消息总条数，-1表示不限制                   |   -1    |        |
|      -m, --mode       | String |                生产模式，可选值：`sync`，`async`                | `async` |        |

<details>
<summary>生产模式说明</summary>

|  生产模式   |    描述    |
|:-------:|:--------:|
| `sync`  |   同步模式   |
| `async` |   异步模式   |

</details>

### `consume`
```shell
$ bin/tubectl message consume
```
选项：

|          **参数**           | **类型** |                               **描述**                               | **默认值** | **必需** |
|:-------------------------:|:------:|:------------------------------------------------------------------:|:-------:|:------:|
|        -t, --topic        | String |                              topic 名称                              |         |   是    |
|        -g, --group        | String |                                消费者组                                |         |   是    |
|   -ms, --master-servers   | String |       连接的 master 地址，格式为 master1_ip:port\[,master2_ip:port\]        |         |   是    |
|      -p, --position       | String |                  消费位置，可选值：`first`，`latest`，`max`                   | `first` |        |
| -po, --partitions-offsets | String | 指定消费分区 ID 和 offset ，格式为 id1:offset1\[,id2:offset2\]，例如：0:0,1:0,2:0 |         |        |
|        -m, --mode         | String |  消费模式，可选值：`pull`，`push`，`balance`；当指定了 -po 参数时，默认使用 `balance` 模式   | `pull`  |        |

<details>
<summary>消费位置说明</summary>

|   消费位置   |           描述            |
|:--------:|:-----------------------:|
| `first`  | 第一次消费时从0开始，否则从上次消费位置开始  |
| `latest` | 第一次从最新的位置开始，否则从上次消费位置开始 |
|  `max`   |       始终从最大消费位置开始       |

</details>

<details>
<summary>消费模式说明</summary>

|   消费模式    |    描述     |
|:---------:|:---------:|
|  `pull`   |  pull 模式  |
|  `push`   |  push 模式  |
| `balance` | 客户端分区分配模式 |

</details>

## Group
`group` 命令用于消费者组管理，目前支持查询、增加和删除。

命令：
- `list`
- `create`
- `delete`

### `list`
```shell
$ bin/tubectl cgroup list 
```
选项：

|    **参数**     | **类型** |  **描述**  | **默认值** | **必需** |
|:-------------:|:------:|:--------:|:-------:|:------:|
|  -t, --topic  | String | topic 名称 |         |        |
|  -g, --group  | String |   消费者组   |         |        |
| -c, --creator | String |   创建者    |         |        |

### `create`
```shell
$ bin/tubectl cgroup create
```
选项：

|       **参数**       | **类型** |   **描述**   | **默认值** | **必需** |
|:------------------:|:------:|:----------:|:-------:|:------:|
|    -t, --topic     | String |  topic 名称  |         |   是    |
|    -g, --group     | String |    消费者组    |         |   是    |
| -at, --auth-token  | String | 配置修改授权 key |         |   是    |
|    c, --creator    | String |    创建者     |         |   是    |
| -cd, --create-date | String |    创建时间    |         |        |

### `delete`
```shell
$ bin/tubectl cgroup delete
```
选项：

|      **参数**       | **类型** |   **描述**   | **默认值** | **必需** |
|:-----------------:|:------:|:----------:|:-------:|:------:|
|    -t, --topic    | String |  topic 名称  |         |   是    |
| -at, --auth-token | String | 配置修改授权 key |         |   是    |
|  -m, --modifier   | String |    修改者     |         |   是    |
|    -g, --group    | String |    消费者组    |         |        |
