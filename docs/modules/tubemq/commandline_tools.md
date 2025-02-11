---
title: Command-line Tools
sidebar_position: 6
---

## Overview
TubeMQ provides command line tools to manage topics, produce and consume messages, and manage consumer groups.  
The command line tool `tubectl` can be found in the `bin` directory of the TubeMQ installation path.

usage:
```shell
$ bin/tubectl [options] [command] [command options]
```
command:
- `topic`
- `message`
- `group`
> You can also use --help or -h to get help for the above commands, for example:

```shell
$ bin/tubectl topic -h
```

## Topic
`topic` is used to manage topics, including adding, deleting, modifying, checking, etc.

command:
- `list`
- `update`
- `create`
- `delete`

### `list`
```shell
$ bin/tubectl topic list
```
options:

|        **parameter**         | **type** |                    **description**                    | **default** | **required** |
|:----------------------------:|:--------:|:-----------------------------------------------------:|:-----------:|:------------:|
|         -t, --topic          |  String  |                      Topic name                       |             |              |
|   -sid, --topic-status-id    |   Int    |                    Topic status ID                    |      0      |              |
|      -bid, --broker-id       |  String  |           Brokers' ID, separated by commas            |             |              |
|     -dp, --delete-policy     |  String  |                  File aging strategy                  |             |              |
|    -np, --num-partitions     |   Int    |                 Number of partitions                  |      3      |              |
|   -nts, --num-topic-stores   |   Int    |                Number of topic stores                 |      1      |              |
|  -uft, --unflush-threshold   |   Int    |     Maximum allowed disk unflushing message count     |    1000     |              |
|   -ufi, --unflush-interval   |   Int    |       Maximum allowed disk unflushing interval        |    10000    |              |
|   -ufd, --unflush-dataHold   |   Int    |       Maximum allowed disk unflushing data size       |      0      |              |
|  -mc, --memcache-msgcnt-ink  |   Int    | Maximum allowed memory cache unflushing message count |     10      |              |
| -ms, --memcache-msgsize-inmb |   Int    |        Maximum allowed memory cache size in MB        |      2      |              |
| -mfi, --memcache-flush-intvl |   Int    |       Maximum allowed disk unflushing data size       |    20000    |              |
|        -c, --creator         |  String  |                    Record creator                     |             |              |
|        -m, --modifier        |  String  |                    Record modifier                    |             |              |

### `update`
```shell
$ bin/tubectl topic update
```
options:

|        **parameter**         | **type** |                    **description**                    | **default** | **required** |
|:----------------------------:|:--------:|:-----------------------------------------------------:|:-----------:|:------------:|
|         -t, --topic          |  String  |                      Topic name                       |             |     yes      |
|      -bid, --broker-id       |  String  |           Brokers' ID, separated by commas            |             |     yes      |
|        -m, --modifier        |  String  |                    Record modifier                    |             |     yes      |
|      -at, --auth-token       |  String  |         Admin api operation authorization cod         |             |     yes      |
|     -dp, --delete-policy     |  String  |                  File aging strategy                  |             |              |
|    -np, --num-partitions     |   Int    |                 Number of partitions                  |      3      |              |
|  -uft, --unflush-threshold   |   Int    |     Maximum allowed disk unflushing message count     |    1000     |              |
|   -ufi, --unflush-interval   |   Int    |       Maximum allowed disk unflushing interval        |    10000    |              |
|   -ufd, --unflush-datahold   |   Int    |       Maximum allowed disk unflushing data size       |      0      |              |
|   -nts, --num-topic-stores   |   Int    |                Number of topic stores                 |      1      |              |
|  -mc, --memcache-msgcnt-ink  |   Int    | Maximum allowed memory cache unflushing message count |     10      |              |
| -ms, --memcache-msgsize-inmb |   Int    |        Maximum allowed memory cache size in MB        |      2      |              |
| -mfi, --memcache-flush-intvl |   Int    |       Maximum allowed disk unflushing data size       |    20000    |              |
|    -ap, --accept-publish     | Boolean  |                   Enable publishing                   |    true     |              |
|   -as, --accept-subscribe    | Boolean  |                  Enable subscription                  |    true     |              |
|   -mms, --max-msgsize-inmb   |   Int    |        Maximum allowed message length, unit MB        |      1      |              |
|      -md, --modify-date      |  String  |               Record modification date                |             |

### `create`
```shell
$ bin/tubectl topic create
```
options:

|        **parameter**         | **type** |                    **description**                    | **default** | **required** |
|:----------------------------:|:--------:|:-----------------------------------------------------:|:-----------:|:------------:|
|         -t, --topic          |  String  |                      Topic name                       |             |     yes      |
|      -bid, --broker-id       |  String  |           Brokers' ID, separated by commas            |             |     yes      |
|        -c, --creator         |  String  |                    Record creator                     |             |     yes      |
|      -at, --auth-token       |  String  |         Admin api operation authorization cod         |             |     yes      |
|     -dp, --delete-policy     |  String  |                  File aging strategy                  |             |              |
|    -np, --num-partitions     |   Int    |                 Number of partitions                  |     -1      |              |
|  -uft, --unflush-threshold   |   Int    |     Maximum allowed disk unflushing message count     |     -1      |              |
|   -ufi, --unflush-interval   |   Int    |       Maximum allowed disk unflushing interval        |     -1      |              |
|   -ufd, --unflush-datahold   |   Int    |       Maximum allowed disk unflushing data size       |      0      |              |
|   -nts, --num-topic-stores   |   Int    |                Number of topic stores                 |      1      |              |
|  -mc, --memcache-msgcnt-ink  |   Int    | Maximum allowed memory cache unflushing message count |     10      |              |
| -ms, --memcache-msgsize-inmb |   Int    |        Maximum allowed memory cache size in MB        |      2      |              |
| -mfi, --memcache-flush-intvl |   Int    |       Maximum allowed disk unflushing data size       |    20000    |              |
|    -ap, --accept-publish     | Boolean  |                   Enable publishing                   |    true     |              |
|   -as, --accept-subscribe    | Boolean  |                  Enable subscription                  |    true     |              |
|   -mms, --max-msgsize-inmb   |   Int    |        Maximum allowed message length, unit MB        |      1      |              |
|      -cd, --create-date      |  String  |                 Record creation date                  |             |              |

### `delete`
```shell
$ bin/tubectl topic delete
```
options:

|   **parameter**    | **type** |                    **description**                     | **default** | **required** |
|:------------------:|:--------:|:------------------------------------------------------:|:-----------:|:------------:|
|  -o, --delete-opt  |  String  | Delete option, optional values: `soft`, `redo`,`hard`  |   `soft`    |              |
|    -t, --topic     |  String  |                       Topic name                       |             |     yes      |
| -bid, --broker-id  |  String  |            Brokers' ID, separated by commas            |             |     yes      |
|   -m, --modifier   |  String  |                    Record modifier                     |             |     yes      |
| -at, --auth-token  |  String  |         Admin api operation authorization code         |             |     yes      |
| -md, --modify-date |  String  |                Record modification date                |             |              |

<details>
<summary>delete option type</summary>

| delete options type |           description           |
|:-------------------:|:-------------------------------:|
|       `soft`        |          soft deletion          |
|       `redo`        | rollback a previous soft delete |
|       `hard`        |          hard deletion          |

</details>

## Message
`message` is used to produce and consume messages.

command:

- `produce`
- `consume`

### `produce`
```shell
$ bin/tubectl message produce
```
options:

|     **parameter**     | **type** |                                 **description**                                 | **default** | **required** |
|:---------------------:|:--------:|:-------------------------------------------------------------------------------:|:-----------:|:------------:|
|      -t, --topic      |  String  |                                   Topic name                                    |             |     yes      |
| -ms, --master-servers |  String  | The master address to connect to. Format is master1_ip:port\[,master2_ip:port\] |             |     yes      |
|   -mt, --msg-total    |   Long   |         The total number of messages to be produced, -1 means unlimited         |     -1      |              |
|      -m, --mode       |  String  |                 Produce mode, optional values: `sync`, `async`                  |   `async`   |              |

<details>
<summary>produce mode type</summary>

| produce mode type | description |
|:-----------------:|:-----------:|
|      `sync`       |  sync mode  |
|      `async`      | async mode  |

</details>

### `consume`
```shell
$ bin/tubectl message consume
```
options:

|       **parameter**       | **type** |                                                          **description**                                                          | **default** | **required** |
|:-------------------------:|:--------:|:---------------------------------------------------------------------------------------------------------------------------------:|:-----------:|:------------:|
|        -t, --topic        |  String  |                                                            Topic name                                                             |             |     yes      |
|        -g, --group        |  String  |                                                          Consumer group                                                           |             |     yes      |
|   -ms, --master-servers   |  String  |                          The master address to connect to. Format is master1_ip:port\[,master2_ip:port\]                          |             |     yes      |
|      -p, --position       |  String  |                                   Consume position, optional values: `first`, `latest`, `max`                                     |   `first`   |              |
| -po, --partitions-offsets |  String  |          Assign consume partition ids and their offsets. Format is id1:offset1\[,id2:offset2\], for example: 0:0,1:0,2:0          |             |              |
|        -m, --mode         |  String  | Consume mode, optional values: `pull`, `push`, `balance`. When the -po parameter is specified, `balance` mode is used by default. |   `pull`    |              |

<details>
<summary>consume position type</summary>

| consume position |                                          description                                           |
|:----------------:|:----------------------------------------------------------------------------------------------:|
|     `first`      |          Start from 0 for the first time. Otherwise start from last consume position.          |
|     `latest`     | Start from the latest position for the first time. Otherwise start from last consume position. |
|      `max`       |                          Always start from the max consume position.                           |

</details>

<details>
<summary>consume mode type</summary>

| consume mode |     description     |
|:------------:|:-------------------:|
|    `pull`    |      pull mode      |
|    `push`    |      push mode      |
|  `balance`   | client balance mode |

</details>

## Group
`group` is used for consumer group management. It currently supports query, addition, and deletion.    

command：

- `list`
- `create`
- `delete`

### `list`
```shell
$ bin/tubectl group list 
```
options:

| **parameter** | **type** | **description** | **default** | **required** |
|:-------------:|:--------:|:---------------:|:-----------:|:------------:|
|  -t, --topic  |  String  |   Topic name    |             |              |
|  -g, --group  |  String  | Consumer group  |             |              |
| -c, --creator |  String  | Record creator  |             |              |

### `create`
```shell
$ bin/tubectl group create
```
options:

|   **parameter**    | **type** |            **description**             | **default** | **required** |
|:------------------:|:--------:|:--------------------------------------:|:-----------:|:------------:|
|    -t, --topic     |  String  |               Topic name               |             |     yes      |
|    -g, --group     |  String  |             Consumer group             |             |     yes      |
| -at, --auth-token  |  String  | Admin api operation authorization code |             |     yes      |
|    c, --creator    |  String  |             Record creator             |             |     yes      |
| -cd, --create-date |  String  |          Record creation date          |             |              |

### `delete`
```shell
$ bin/tubectl group delete
```
options:

|   **parameter**   | **type** |            **description**             | **default** | **required** |
|:-----------------:|:--------:|:--------------------------------------:|:-----------:|:------------:|
|    -t, --topic    |  String  |               Topic name               |             |     yes      |
| -at, --auth-token |  String  | Admin api operation authorization code |             |     yes      |
|  -m, --modifier   |  String  |            Record modifier             |             |     yes      |
|    -g, --group    |  String  |             Consumer group             |             |              |
