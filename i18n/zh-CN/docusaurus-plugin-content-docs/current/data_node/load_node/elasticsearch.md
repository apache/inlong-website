---
title: Elasticsearch
sidebar_position: 4
---

import {siteVariables} from '../../version';

## 概览

Elasticsearch Load 节点允许将数据写入到 Elasticsearch 引擎的索引中。本文档描述运行 SQL 查询时如何设置 Elasticsearch Load 节点。

连接器可以工作在 Upsert 模式，使用 DDL 中定义的主键与外部系统交换 UPDATE/DELETE 消息。

如果 DDL 中没有定义主键，那么连接器只能工作在 Append 模式，只能与外部系统交换 INSERT 消息。

## 支持的版本

| Load 节点                             | 版本                                                 | 
|-------------------------------------|----------------------------------------------------|
| [elasticsearch](./elasticsearch.md) | [Elasticsearch](https://www.elastic.co/): 5.x, 6.x, 7.x |

### 依赖

为了设置 Elasticsearch Load 节点，下表提供了使用构建自动化工具（例如 Maven 或 SBT）和带有 Sort Connectors JAR 包的 SQL 客户端的两个项目的依赖关系信息。

- Elasticsearch 6

```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-elasticsearch6</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
```

- Elasticsearch 7

```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-elasticsearch7</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
```

## 如何创建一个 Elasticsearch Load 节点

### SQL API 用法

下面列子展示了如何利用`Flink SQL`创建一个 Elasticsearch Load 节点: 

```sql
CREATE TABLE myUserTable (
  user_id STRING,
  user_name STRING,
  uv BIGINT,
  pv BIGINT,
  PRIMARY KEY (user_id) NOT ENFORCED
) WITH (
  'connector' = 'elasticsearch7-inlong',
  'hosts' = 'http://localhost:9200',
  'index' = 'users'
);
```

### InLong Dashboard 用法

:::note
将在未来支持此功能
:::

### InLong Manager Client 用法

:::note
将在未来支持此功能
:::

## Elasticsearch Load 节点参数

| 参数  | 是否必选 | 默认值 | 数据类型 | 描述                                                                                                                                                                                                         |
| --- | --- | --- | --- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  connector | 必选  | (none) | String | 指定要使用的连接器，有效值为：<br/><br/>- `elasticsearch-6`：连接到 Elasticsearch 5.x and 6.x 的集群。<br/>- `elasticsearch-7`：连接到 Elasticsearch 7.x 及更高版本的集群。                                                                    |
|  hosts | 必选  | (none) | String | 要连接到的一台或多台 Elasticsearch 主机，例如 `'http://host_name:9092;http://host_name:9093'`。                                                                                                                            |
|  index | 必选  | (none) | String | Elasticsearch 中每条记录的索引。可以是一个静态索引（例如 `'myIndex'`）或一个动态索引（例如 `'index-{log_ts\|yyyy-MM-dd}'`）。 更多详细信息，请参见下面的[动态索引](#动态索引)部分。                                                                                  |
|  document-type | 6.x 版本中必选 | (none) | String | Elasticsearch 文档类型。在 `elasticsearch-7` 中不再需要。                                                                                                                                                              |
|  document-id.key-delimiter | 可选  | _   | String | 复合键的分隔符（默认为"_"），例如，指定为"$"将导致文档 ID 为"KEY1\$KEY2\$KEY3"。                                                                                                                                                     |
|  username | 可选  | (none) | String | 用于连接 Elasticsearch 实例的用户名。请注意，Elasticsearch 没有预绑定安全特性，但你可以通过如下[指南](https://www.elastic.co/guide/en/elasticsearch/reference/master/configuring-security.html)启用它来保护 Elasticsearch 集群。                       |
|  password | 可选  | (none) | String | 用于连接 Elasticsearch 实例的密码。如果配置了`username`，则此选项也必须配置为非空字符串。                                                                                                                                                  |
|  failure-handler | 可选  | fail | String | 对 Elasticsearch 请求失败情况下的失败处理策略。有效策略为：<br/><br/>- `fail`：如果请求失败并因此导致作业失败，则抛出异常。<br/>- `ignore`：忽略失败并放弃请求。<br/>- `retry-rejected`：重新添加由于队列容量饱和而失败的请求。<br/>- 自定义类名称：使用 ActionRequestFailureHandler 的子类进行失败处理。 |
|  sink.flush-on-checkpoint | 可选  | true | Boolean | 是否在 checkpoint 时执行 flush。禁用后，在 checkpoint 时 sink 将不会等待所有的 pending 请求被 Elasticsearch 确认。因此，sink 不会为请求的 at-least-once 交付提供任何有力保证。                                                                            |
|  sink.bulk-flush.max-actions | 可选  | 1000 | Integer | 每个批量请求的最大缓冲操作数。 可以设置为`'0'`来禁用它。                                                                                                                                                                            |
|  sink.bulk-flush.max-size | 可选  | 2mb | MemorySize | 每个批量请求的缓冲操作在内存中的最大值。单位必须为 MB。 可以设置为`'0'`来禁用它。                                                                                                                                                              |
|  sink.bulk-flush.interval | 可选  | 1s  | Duration | flush 缓冲操作的间隔。 可以设置为`'0'`来禁用它。注意，`'sink.bulk-flush.max-size'`和`'sink.bulk-flush.max-actions'`都设置为`'0'`的这种 flush 间隔设置允许对缓冲操作进行完全异步处理。                                                                       |
|  sink.bulk-flush.backoff.strategy | 可选  | DISABLED | String | 指定在由于临时请求错误导致任何 flush 操作失败时如何执行重试。有效策略为：<br/><br/>- `DISABLED`：不执行重试，即第一次请求错误后失败。<br/>- `CONSTANT`：等待重试之间的回退延迟。<br/>- `EXPONENTIAL`：先等待回退延迟，然后在重试之间指数递增。                                                   |
|  sink.bulk-flush.backoff.max-retries | 可选  | 8   | Integer | 最大回退重试次数。                                                                                                                                                                                                  |
|  sink.bulk-flush.backoff.delay | 可选  | 50ms | Duration | 每次回退尝试之间的延迟。对于 `CONSTANT` 回退策略，该值是每次重试之间的延迟。对于 `EXPONENTIAL` 回退策略，该值是初始的延迟。                                                                                                                                |
|  connection.max-retry-timeout | 可选  | (none) | Duration | 最大重试超时时间。                                                                                                                                                                                                  |
|  connection.path-prefix | 可选  | (none) | String | 添加到每个 REST 通信中的前缀字符串，例如，`'/v1'`。                                                                                                                                                                           |
|  routing.filed-name | 可选  | (none) | String | 使用 field 值来生成该 field 的动态路由                                                                                                                                                                                 |
|  format | 可选  | json | String | Elasticsearch 连接器支持指定格式。该格式必须生成一个有效的 json 文档。 默认使用内置的 `'json'` 格式。更多详细信息，请参阅 [JSON Format](https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/connectors/table/formats/overview/) 页面。      |
| inlong.metric.labels | 可选  | (none) | String | inlong metric 的标签值，该值的构成为 groupId=[groupId]&streamId=[streamId]&nodeId=[nodeId]。                                                                                                                           |

特性
----------------

### Key 处理

Elasticsearch Load 节点可以根据是否定义了主键来确定是在 Upsert 模式还是 Append 模式下工作。
如果定义了主键，Elasticsearch Load 节点将以 Upsert 模式工作，该模式可以消费包含 UPDATE/DELETE 消息的查询。
如果未定义主键，Elasticsearch Load 节点将以 Append 模式工作，该模式只能消费包含 INSERT 消息的查询。

在 Elasticsearch Load 节点中，主键用于计算 Elasticsearch 的文档 Id，文档 Id 为最多 512 字节且不包含空格的字符串。
Elasticsearch Load 节点通过使用 `document-id.key-delimiter` 指定的键分隔符按照 DDL 中定义的顺序连接所有主键字段，为每一行记录生成一个文档 Id 字符串。
某些类型不允许作为主键字段，因为它们没有对应的字符串表示形式，例如，`BYTES`，`ROW`，`ARRAY`，`MAP` 等。
如果未指定主键，Elasticsearch 将自动生成文档 Id。

有关 PRIMARY KEY 语法的更多详细信息，请参见 [CREATE TABLE DDL](https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/dev/table/sql/create/#create-table)。

### 动态索引

<a name = "dymic-index"></a>

Elasticsearch Load 节点同时支持静态索引和动态索引。

如果你想使用静态索引，则 `index` 选项值应为纯字符串，例如 `myusers`，所有记录都将被写入到 `myusers` 索引中。

如果你想使用动态索引，你可以使用 `{field_name}` 来引用记录中的字段值来动态生成目标索引。
你也可以使用 `'{field_name|date_format_string}'` 将 `TIMESTAMP/DATE/TIME` 类型的字段值转换为 `date_format_string` 指定的格式。
`date_format_string` 与 Java 的 [DateTimeFormatter](https://docs.oracle.com/javase/8/docs/api/index.html) 兼容。
例如，如果选项值设置为 `'myusers-{'{log_ts|yyyy-MM-dd}'}'`，则 `log_ts` 字段值为 `2020-03-27 12:25:55` 的记录将被写入到 "myusers-2020-03-27" 索引中。

## 数据类型映射
| JSON type | Flink SQL type |
| --- | --- |
| string | CHAR / VARCHAR / STRING |
| boolean | BOOLEAN |
| string with encoding: base64 | BINARY / VARBINARY |
| number | DECIMAL |
| number | TINYINT |
| number | SMALLINT |
| number | INT |
| number | BIGINT |
| number | FLOAT |
| number | DOUBLE |
| string with format: date | DATE |
| string with format: time | TIME |
| string with format: date-time | TIMESTAMP |
| string with format: date-time (with UTC time zone) | TIMESTAMP_WITH_LOCAL_TIME_ZONE |
| number | INTERVAL |
| array | ARRAY |
| object | MAP / MULTISET |
| object | ROW |