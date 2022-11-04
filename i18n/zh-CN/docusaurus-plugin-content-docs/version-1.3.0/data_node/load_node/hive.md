---
title: Hive
sidebar_position: 8
---

import {siteVariables} from '../../version';

## 概览
Hive 加载节点可以将数据写入 Hive。使用 Flink 方言，目前仅支持 Insert 操作，Upsert 模式下的数据会转换成 Insert 方式
目前暂时不支持使用 Hive 方言操作 Hive 表。

## 支持的版本

| Load Node                           | Version                                            | 
|-------------------------------------|----------------------------------------------------|
| [Hive](./hive.md) | [Hive](https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/hive/overview/#supported-hive-version): 1.x, 2.x, 3.x |

### 依赖

通过 Maven 引入 sort-connector-hive 构建自己的项目。
当然，你也可以直接使用 INLONG 提供的 jar 包。([sort-connector-hive](https://inlong.apache.org/download))

### Maven 依赖

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-hive</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>
## 如何配置 Hive 数据加载节点

### SQL API 的使用

使用 `Flink SQL Cli` :

```sql
CREATE TABLE hiveTableName (
  id STRING,
  name STRING,
  uv BIGINT,
  pv BIGINT
) WITH (
  'connector' = 'hive',
  'default-database' = 'default',
  'hive-version' = '3.1.2',
  'hive-conf-dir' = 'hdfs://localhost:9000/user/hive/hive-site.xml'
);
```
### InLong Dashboard 方式

#### 配置
在创建数据流时，选择数据落地为 'Hive' 然后点击 'Add' 来配置 Hive 的相关信息。

![Hive Configuration](img/hive.png)

### InLong Manager Client 方式

TODO: 未来版本支持

## Hive 加载节点参数信息
<table class="table table-bordered">
    <thead>
      <tr>
              <th class="text-left" style={{width: '10%'}}>参数</th>
              <th class="text-left" style={{width: '8%'}}>是否必须</th>
              <th class="text-left" style={{width: '7%'}}>默认值</th>
              <th class="text-left" style={{width: '10%'}}>数据类型</th>
              <th class="text-left" style={{width: '65%'}}>描述</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td><h5>connector</h5></td>
        <td>必须</td>
        <td style={{wordWrap: 'break-word'}}>(none)</td>
        <td>String</td>
        <td>指定使用什么连接器，这里应该是  'hive'。</td>
    </tr>
    <tr>
      <td><h5>default-database</h5></td>
      <td>必须</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>指定数据库名称。</td>
    </tr>
    <tr>
      <td><h5>hive-conf-dir</h5></td>
      <td>必须</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>本地构建项目可以将hive-site.xml构建到 classpath 中，未来 Dashboard 将支持本地上传能力。
      目前通用方式只支持配置已经上传文件后的 HDFS 路径。</td>
    </tr>
    <tr>
      <td><h5>sink.partition-commit.trigger</h5></td>
      <td>可选</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>如果表是分区表，可以配置触发模式。如：(process-time)</td>
    </tr>
    <tr>
      <td><h5>partition.time-extractor.timestamp-pattern</h5></td>
      <td>可选</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>如果表是分区表，可以配置时间戳。如：(yyyy-MM-dd)</td>
    </tr>
    <tr>
      <td><h5>sink.partition-commit.delay</h5></td>
      <td>可选</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>如果表是分区表，可以配置延迟时间。如：(10s,20s,1m...)</td>
    </tr>
    <tr>
      <td><h5>sink.partition-commit.policy.kind</h5></td>
      <td>可选</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>分区提交策略通知下游某个分区已经写完毕可以被读取了。 
      metastore：向 metadata 增加分区。仅 hive 支持 metastore 策略，文件系统通过目录结构管理分区； 
      success-file：在目录中增加 '_success' 文件； 
      上述两个策略可以同时指定：'metastore,success-file'。 
      custom：通过指定的类来创建提交策略， 
      支持同时指定多个提交策略：'metastore,success-file'。</td>
    </tr>
    <tr>
      <td>inlong.metric.labels</td>
      <td>可选</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>inlong metric 的标签值，该值的构成为groupId=xxgroup&streamId=xxstream&nodeId=xxnode。</td> 
     </tr>
    </tbody>
</table>

## 数据类型映射
<div class="wy-table-responsive">
<table class="colwidths-auto docutils">
    <thead>
      <tr>
        <th class="text-left">Hive type</th>
        <th class="text-left">Flink SQL type</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td>char(p)</td>
      <td>CHAR(p)</td>
    </tr>
    <tr>
      <td>varchar(p)</td>
      <td>VARCHAR(p)</td>
    </tr>
    <tr>
      <td>string</td>
      <td>STRING</td>
    </tr>
    <tr>
      <td>boolean</td>
      <td>BOOLEAN</td>
    </tr>
    <tr>
      <td>tinyint</td>
      <td>TINYINT</td>
    </tr>     
    <tr>
      <td>smallint</td>
      <td>SMALLINT</td>
    </tr>    
   <tr>
      <td>int</td>
      <td>INT</td>
    </tr>
    <tr>
      <td>bigint</td>
      <td>BIGINT</td>
    </tr>
    <tr>
      <td>float</td>
      <td>FLOAT</td>
    </tr>
    <tr>
      <td>double</td>
      <td>DOUBLE</td>
    </tr>
    <tr>
      <td>decimal(p, s)</td>
      <td>DECIMAL(p, s)</td>
    </tr>
    <tr>
      <td>date</td>
      <td>DATE</td>
    </tr>
    <tr>
      <td>timestamp(9)</td>
      <td>TIMESTAMP</td>
    </tr>
    <tr>
      <td>bytes</td>
      <td>BINARY</td>
    </tr>   
    <tr>
      <td>array</td>
      <td>LIST</td>
    </tr>
    <tr>
      <td>map</td>
      <td>MAP</td>
    </tr>
    <tr>
      <td>row</td>
      <td>STRUCT</td>
    </tr>       
    </tbody>
</table>
</div>
