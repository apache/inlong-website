## Overview
TubeMQ provides command-line tools to view and manage the topics as well as the production and consumption of messages.  
`tubectl` can be run from TubeMQ bin directory.

usage:
```
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
`topic` is used to manage topics in TubeMQ, including adding, deleting, modifying, checking, etc.

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
$ bin/tubectl create
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

|   **parameter**    | **type** |                                                **description**                                                 | **default** | **required** |
|:------------------:|:--------:|:--------------------------------------------------------------------------------------------------------------:|:-----------:|:------------:|
|  -o, --delete-opt  |  String  | Delete options, must in { soft &#124; redo &#124; hard }, represents soft deletion, rollback and hard deletion |    soft     |              |
|    -t, --topic     |  String  |                                                   Topic name                                                   |             |     yes      |
| -bid, --broker-id  |  String  |                                        Brokers' ID, separated by commas                                        |             |     yes      |
|   -m, --modifier   |  String  |                                                Record modifier                                                 |             |     yes      |
| -at, --auth-token  |  String  |                                     Admin api operation authorization code                                     |             |     yes      |
| -md, --modify-date |  String  |                                            Record modification date                                            |             |              |

## Message
`message` is used for message management, including production and consumption.

command:

- `produce`
- `consume`
### `produce`
```shell
$ bin/tubectl message produce
```
options:

|     **parameter**     | **type** |                                         **description**                                          | **default** | **required** |
|:---------------------:|:--------:|:------------------------------------------------------------------------------------------------:|:-----------:|:------------:|
|      -t, --topic      |  String  |                                            Topic name                                            |             |     yes      |
| -ms, --master-servers |  String  |       The master address(es) to connect to. Format is master1_ip:port\[,master2_ip:port\]        |             |     yes      |
|   -mt, --msg-total    |   Long   |                 The total number of messages to be produced. -1 means unlimited.                 |     -1      |              |
|      -m, --mode       |  String  | Produce mode, must in { sync &#124; async }, represents synchronous and asynchronous production. |    async    |              |

### `consume`
```shell
$ bin/tubectl message consume
```
options:

|       **parameter**       | **type** |                                                         **description**                                                          | **default** | **required** |
|:-------------------------:|:--------:|:--------------------------------------------------------------------------------------------------------------------------------:|:-----------:|:------------:|
|        -t, --topic        |  String  |                                                            Topic name                                                            |             |     yes      |
|        -g, --group        |  String  |                                                          Consumer group                                                          |             |     yes      |
|   -ms, --master-servers   |  String  |                       The master address(es) to connect to. Format is master1_ip:port\[,master2_ip:port\]                        |             |     yes      |
|      -p, --position       |  String  |                                   Consume position, must in { first &#124; latest &#124; max }                                   |   latest    |              |
| -po, --partitions-offsets |  String  |       Assign consume partitions and their offsets, format is id1:offset1\[,id2:offset2\]\[...\], for example: 0:0,1:0,2:0        |             |              |
|        -m, --mode         |  String  | Consume mode, must in { pull &#124; push &#124; balance }. When the -po parameter is specified, balance mode is used by default. |    pull     |              |


## Group
`group` is used for consumer group management. Currently, it supports query, addition, and deletion.    

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

