---
title: Command-line Tools
sidebar_position: 2
---

## Overview

In addition to [InLong Dashboard](user_guide/dashboard_usage.md), you can view and create data resources through
command-line tools.

`inlongctl` can be run from InLong's `bin` directory.

usage:

```
$ bin/inlongctl [options] [command] [command options]
```

command:

- `list`
- `describe`
- `create`
- `update`
- `delete`
- `log`

> You can also use `--help` or `-h` to get help for the above commands, for example:

```
$ bin/inlongctl list -h
```

## Configuration

Go to the `inlong-manager` directory , modify the following configurations of the `conf/application.properties` file.

```
server.host=127.0.0.1
server.port=8080
default.admin.user=admin
default.admin.password=inlong
```

## List

`list` is used to display the core information of resources and display them in a table.

command:

- `group`
- `stream`
- `source`
- `sink`
- `cluster`
- `cluster-tag`
- `cluster-node`
- `user`

### `group`

```
$ bin/inlongctl list group
```

options:

| parameter        | description                                                                                                                                           | default |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `-g`, `--group`  | inlong group id, support fuzzy query                                                                                                                  |         |
| `-s`, `--status` | inlong group status , Optional values: `CREATE`, `REJECTED`, `INITIALIZING`, `OPERATING`, <br/> `STARTED`, `FAILED`, `STOPPED`, `FINISHED`, `DELETED` |         |
| `-n`, `--num`    | maximum number of displays                                                                                                                            | 10      |

<details>
<summary>group status</summary>

| group status   | description                          |
|----------------|--------------------------------------|
| `CREATE`       | to be submit or to be approval       |
| `REJECTED`     | approval rejected                    |
| `INITIALIZING` | configuring                          |
| `OPERATING`    | deleting, stopping or restarting     |
| `STARTED`      | successful configuration and restart |
| `FAILED`       | failed to configure                  |
| `STOPPED`      | suspended                            |
| `FINISHED`     | finish                               |
| `DELETED`      | deleted                              |

</details>

### `stream`

```
$ bin/inlongctl list stream
```

options:

| parameter         | description     | default |
|-------------------|-----------------|---------|
| `-g`, `--group` * | inlong group id |         |

> \* means required parameter.

### `source`

```
$ bin/inlongctl list source
```

options:

| parameter          | description                                                                                                                                                                      | default |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `-g`, `--group` *  | inlong group id                                                                                                                                                                  |         |
| `-s`, `--stream` * | inlong stream id                                                                                                                                                                 |         |
| `-t`, `--type`     | stream source type, Optional values: `AUTO_PUSH`, `TUBEMQ`, `PULSAR`, `KAFKA`, `FILE`, `MYSQL_SQL`,<br/> `MYSQL_BINLOG`, `POSTGRESQL`, `ORACLE`, `SQLSERVER`, `MONGODB`, `REDIS` |         |

<details>
<summary>stream source type</summary>

| stream source type | description |
|--------------------|-------------|
| `AUTO_PUSH`        | Auto Push   |
| `TUBEMQ`           | TubeMQ      |
| `PULSAR`           | Pulsar      |
| `KAFKA`            | Kafka       |
| `FILE`             | File        |
| `MYSQL_SQL`        | SQL         |
| `MYSQL_BINLOG`     | Binlog      |
| `POSTGRESQL`       | PostgreSQL  |
| `ORACLE`           | Oracle      |
| `SQLSERVER`        | SQL server  |
| `MONGODB`          | MongoDB     |
| `REDIS`            | Redis       |

</details>

### `sink`

```
$ bin/inlongctl list sink
```

options:

| parameter          | description      | default |
|--------------------|------------------|---------|
| `-g`, `--group` *  | inlong group id  |         |
| `-s`, `--stream` * | inlong stream id |         |

### `cluster-tag`

```
$ bin/inlongctl list cluster-tag
```

options:

| parameter | description                      | default |
|-----------|----------------------------------|---------|
| `--tag`   | cluster tag, support fuzzy query |         |

### `cluster`

```
$ bin/inlongctl list cluster
```

options:

| parameter | description                                                                      | default |
|-----------|----------------------------------------------------------------------------------|---------|
| `--tag`   | cluster tag                                                                      |         |
| `--type`  | cluster type, Optional values: `AGENT`, `TUBEMQ`, `PULSAR`, `DATAPROXY`, `KAFKA` |         |

<details>
<summary>cluster type</summary>

| cluster type | description |
|--------------|-------------|
| `AGENT`      | Agent       |
| `TUBEMQ`     | TubeMQ      |
| `PULSAR`     | Pulsar      |
| `DATAPROXY`  | DataProxy   |
| `KAFKA`      | Kafka       |

</details>

### `cluster-node`

```
$ bin/inlongctl list cluster-node
```

options:

| parameter | description                                                                      | default |
|-----------|----------------------------------------------------------------------------------|---------|
| `--tag` * | cluster tag                                                                      |         |
| `--type`  | cluster type, Optional values: `AGENT`, `TUBEMQ`, `PULSAR`, `DATAPROXY`, `KAFKA` |         |

### `user`

```
$ bin/inlongctl list user
```

options:

| parameter          | description                                     | default |
|--------------------|-------------------------------------------------|---------|
| `-u`, `--username` | username, support fuzzy query                   |         |
| `--type`           | user type, Optional values: `ADMIN`, `OPERATOR` |         |

<details>
<summary>user type</summary>

| user type  | description |
|------------|-------------|
| `ADMIN`    | admin       |
| `OPERATOR` | other user  |

</details>

## Describe

`describe` is used to display detailed information and output in json format.

command:

- `group`
- `stream`
- `source`
- `sink`
- `cluster`
- `cluster-tag`
- `cluster-node`
- `user`

### `group`

```
$ bin/inlongctl describe group
```

options:

| parameter        | description                                                                                                                                           | default |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `-g`, `--group`  | inlong group id, support fuzzy query                                                                                                                  |         |
| `-s`, `--status` | inlong group status , Optional values: `CREATE`, `REJECTED`, `INITIALIZING`, `OPERATING`, <br/> `STARTED`, `FAILED`, `STOPPED`, `FINISHED`, `DELETED` |         |
| `-n`, `--num`    | maximum number of displays                                                                                                                            | 10      |

<details>
<summary>group status</summary>

| group status   | description                          |
|----------------|--------------------------------------|
| `CREATE`       | to be submit or to be approval       |
| `REJECTED`     | approval rejected                    |
| `INITIALIZING` | configuring                          |
| `OPERATING`    | deleting, stopping or restarting     |
| `STARTED`      | successful configuration and restart |
| `FAILED`       | failed to configure                  |
| `STOPPED`      | suspended                            |
| `FINISHED`     | finish                               |
| `DELETED`      | deleted                              |

</details>

### `stream`

```
$ bin/inlongctl describe stream
```

options:

| parameter         | description     | default |
|-------------------|-----------------|---------|
| `-g`, `--group` * | inlong group id |         |

### `source`

```
$ bin/inlongctl describe source
```

options:

| parameter          | description                                                                                                                                                                      | default |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `-g`, `--group` *  | inlong group id                                                                                                                                                                  |         |
| `-s`, `--stream` * | inlong stream id                                                                                                                                                                 |         |
| `-t`, `--type`     | stream source type, Optional values: `AUTO_PUSH`, `TUBEMQ`, `PULSAR`, `KAFKA`, `FILE`, `MYSQL_SQL`,<br/> `MYSQL_BINLOG`, `POSTGRESQL`, `ORACLE`, `SQLSERVER`, `MONGODB`, `REDIS` |         |

<details>
<summary>stream source type</summary>

| stream source type | description |
|--------------------|-------------|
| `AUTO_PUSH`        | Auto Push   |
| `TUBEMQ`           | TubeMQ      |
| `PULSAR`           | Pulsar      |
| `KAFKA`            | Kafka       |
| `FILE`             | File        |
| `MYSQL_SQL`        | SQL         |
| `MYSQL_BINLOG`     | Binlog      |
| `POSTGRESQL`       | PostgreSQL  |
| `ORACLE`           | Oracle      |
| `SQLSERVER`        | SQL server  |
| `MONGODB`          | MongoDB     |
| `REDIS`            | Redis       |

</details>

### `sink`

```
$ bin/inlongctl describe sink
```

options:

| parameter          | description      | default |
|--------------------|------------------|---------|
| `-g`, `--group` *  | inlong group id  |         |
| `-s`, `--stream` * | inlong stream id |         |

### `cluster-tag`

```
$ bin/inlongctl describe cluster-tag
```

options:

| parameter       | description    | default |
|-----------------|----------------|---------|
| `-id`, `--id` * | cluster tag id |         |

### `cluster`

```
$ bin/inlongctl describe cluster
```

options:

| parameter       | description | default |
|-----------------|-------------|---------|
| `-id`, `--id` * | cluster id  |         |

### `cluster-node`

```
$ bin/inlongctl describe cluster-node
```

options:

| parameter       | description     | default |
|-----------------|-----------------|---------|
| `-id`, `--id` * | cluster node id |         |

### `user`

```
$ bin/inlongctl describe user
```

options:

| parameter       | description | default |
|-----------------|-------------|---------|
| `-id`, `--id` * | user id     |         |

[//]: # (To be added)

## Create

`create` is used to create resources, currently created by using a json file.

command:

- `cluster`
- `cluster-tag`
- `cluster-node`
- `user`

### `cluster`

```
$ bin/inlongctl create cluster
```

options:

| parameter      | description    | default |
|----------------|----------------|---------|
| `-f`, `--file` | json file name |         |

json:

```json
{
  "name": "test_cluster",
  "url": "127.0.0.1:8080",
  "clusterTags": "test_cluster_tag",
  "extTag": null,
  "description": null,
  "inCharges": "admin",
  "type": "PULSAR",
  "adminUrl": "http://127.0.0.1:8080",
  "tenant": "public"
}
```

### `cluster-tag`

```
$ bin/inlongctl create cluster-tag
```

options:

| parameter      | description     | default |
|----------------|-----------------|---------|
| `-f`, `--file` | json file  name |         |

json:

```json
{
  "clusterTag": "test_cluster_tag",
  "inCharges": "ctl",
  "extParams": null,
  "description": null
}
```

### `cluster-node`

```
$ bin/inlongctl create cluster-node
```

options:

| parameter      | description     | default |
|----------------|-----------------|---------|
| `-f`, `--file` | json file  name |         |

json:

```json
{
  "parentId": 1,
  "type": "AGENT",
  "ip": "127.0.0.1",
  "port": 8008,
  "extParams": null,
  "description": "null"
}
```

> `parentId` is the corresponding cluster id of this node, and the cluster id can be obtained through `list cluster` or `describe cluster`

### `user`

```
$ bin/inlongctl create user
```

options:

| parameter          | description  | default |
|--------------------|--------------|---------|
| `-u`, `--username` | username     |         |
| `-p`, `--password` | password     |         |
| `-t`, `--type`     | account type |         |
| `-d`, `--day`      | valid days   |         |

[//]: # (To be added)

## Update

`update` is used to update resources, currently update by using a json file.

command:

- `cluster`
- `cluster-tag`
- `cluster-node`
- `user`

> The json file required by `update` can be modified on the json obtained by `describe`.

### `cluster`

```
$ bin/inlongctl update cluster
```

options:

| parameter      | description    | default |
|----------------|----------------|---------|
| `-f`, `--file` | json file name |         |

### `cluster-tag`

```
$ bin/inlongctl update cluster-tag
```

options:

| parameter      | description    | default |
|----------------|----------------|---------|
| `-f`, `--file` | json file name |         |

### `cluster-node`

```
$ bin/inlongctl update cluster-node
```

options:

| parameter      | description    | default |
|----------------|----------------|---------|
| `-f`, `--file` | json file name |         |

### `user`

```
$ bin/inlongctl update user
```

options:

| parameter          | description    | default |
|--------------------|----------------|---------|
| `-u`, `--username` | username       |         |
| `-p`, `--password` | new password   |         |
| `-d`, `--day`      | new valid days |         |

## Delete

`delete` is used to delete resources.

command:

- `group`
- `stream`
- `source`
- `sink`
- `cluster`
- `cluster-tag`
- `cluster-node`
- `user`

### `group`

```
$ bin/inlongctl delete group
```

options:

| parameter        | description                                                                                                                                           | default |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `-g`, `--group`  | inlong group id, support fuzzy query                                                                                                                  |         |
| `-s`, `--status` | inlong group status , Optional values: `CREATE`, `REJECTED`, `INITIALIZING`, `OPERATING`, <br/> `STARTED`, `FAILED`, `STOPPED`, `FINISHED`, `DELETED` |         |
| `-n`, `--num`    | maximum number of displays                                                                                                                            | 10      |

<details>
<summary>group status</summary>

| group status   | description                          |
|----------------|--------------------------------------|
| `CREATE`       | to be submit or to be approval       |
| `REJECTED`     | approval rejected                    |
| `INITIALIZING` | configuring                          |
| `OPERATING`    | deleting, stopping or restarting     |
| `STARTED`      | successful configuration and restart |
| `FAILED`       | failed to configure                  |
| `STOPPED`      | suspended                            |
| `FINISHED`     | finish                               |
| `DELETED`      | deleted                              |

</details>

### `stream`

```
$ bin/inlongctl delete stream
```

options:

| parameter         | description     | default |
|-------------------|-----------------|---------|
| `-g`, `--group` * | inlong group id |         |

### `source`

```
$ bin/inlongctl delete source
```

options:

| parameter          | description                                                                                                                                                                      | default |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `-g`, `--group` *  | inlong group id                                                                                                                                                                  |         |
| `-s`, `--stream` * | inlong stream id                                                                                                                                                                 |         |
| `-t`, `--type`     | stream source type, Optional values: `AUTO_PUSH`, `TUBEMQ`, `PULSAR`, `KAFKA`, `FILE`, `MYSQL_SQL`,<br/> `MYSQL_BINLOG`, `POSTGRESQL`, `ORACLE`, `SQLSERVER`, `MONGODB`, `REDIS` |         |

<details>
<summary>stream source type</summary>

| stream source type | description |
|--------------------|-------------|
| `AUTO_PUSH`        | Auto Push   |
| `TUBEMQ`           | TubeMQ      |
| `PULSAR`           | Pulsar      |
| `KAFKA`            | Kafka       |
| `FILE`             | File        |
| `MYSQL_SQL`        | SQL         |
| `MYSQL_BINLOG`     | Binlog      |
| `POSTGRESQL`       | PostgreSQL  |
| `ORACLE`           | Oracle      |
| `SQLSERVER`        | SQL server  |
| `MONGODB`          | MongoDB     |
| `REDIS`            | Redis       |

</details>

### `sink`

```
$ bin/inlongctl delete sink
```

options:

| parameter          | description      | default |
|--------------------|------------------|---------|
| `-g`, `--group` *  | inlong group id  |         |
| `-s`, `--stream` * | inlong stream id |         |

### `cluster-tag`

```
$ bin/inlongctl delete cluster-tag
```

options:

| parameter       | description    | default |
|-----------------|----------------|---------|
| `-id`, `--id` * | cluster tag id |         |

### `cluster`

```
$ bin/inlongctl delete cluster
```

options:

| parameter       | description | default |
|-----------------|-------------|---------|
| `-id`, `--id` * | cluster id  |         |

### `cluster-node`

```
$ bin/inlongctl delete cluster-node
```

options:

| parameter       | description     | default |
|-----------------|-----------------|---------|
| `-id`, `--id` * | cluster node id |         |

### `user`

```
$ bin/inlongctl delete user
```

options:

| parameter       | description | default |
|-----------------|-------------|---------|
| `-id`, `--id` * | user id     |         |

[//]: # (To be added)

## Log

After creating the task process, you can use the `log` command to view the execution log of each stage of the task.

command:

- `group`

### `group`

```
$ bin/inlongctl log group
```

options:

| parameter       | description                              | default |
|-----------------|------------------------------------------|---------|
| `-g`, `--group` | inlong group id, not support fuzzy query |         |

