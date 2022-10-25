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

[//]: # (To be added)

## Update

`create` is used to update resources, currently update by using a json file.

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

