---
title: HDFS
sidebar_position: 11
---
## HDFS加载节点
HDFS连接器为Flink内部依赖，支持分区文件。
在Flink中包含了该文件系统连接器，不需要添加额外的依赖。
相应的jar包可以在Flink工程项目的/lib目录下找到。
从文件系统中读取或者向文件系统中写入行时，需要指定相应的format。

## 如何创建HDFS加载节点

### SQL API的使用
使用 `Flink SQL Cli` :

```sql
CREATE TABLE hdfs_load_node (
  id STRING,
  name STRING,
  uv BIGINT,
  pv BIGINT,
  dt STRING,
 `hour` STRING
  ) PARTITIONED BY (dt, `hour`) WITH (
    'connector'='filesystem',
    'path'='...',
    'format'='orc',
    'sink.partition-commit.delay'='1 h',
    'sink.partition-commit.policy.kind'='success-file'
  );
```

#### File Formats
<ul>
<li>CSV(非压缩格式)</li>
<li>JSON(文件系统连接器的 JSON format 与传统的标准的 JSON file 的不同，而是非压缩的。换行符分割的 JSON)</li>
<li>Avro(通过配置 avro.codec 属性支持压缩)</li>
<li>Parquet(与hive兼容)</li>
<li>Orc(与hive兼容)</li>
<li>Debezium-JSON</li>
<li>Canal-JSON</li>
<li>Raw</li>
</ul>

备注：文件格式明细可以查看[Flink Formats](https://nightlies.apache.org/flink/flink-docs-master/zh/docs/connectors/table/formats/overview/)

#### 滚动策略

数据会被加载到文件的目录下的part文件中，每个分区接收到来之subtask的数据至少会为该分区生成一个part文件。同时可以配置滚动策略
来生成part文件，生成part文件会将in-progress part文件关闭。该策略基于大小和指定文件被打开的超时时间来生成part文件。

<table class="table table-bordered">
    <thead>
      <tr>
          <th class="text-left" style={{width: '10%'}}>参数</th>
          <th class="text-left" style={{width: '7%'}}>默认值</th>
          <th class="text-left" style={{width: '10%'}}>数据类型</th>
          <th class="text-left" style={{width: '65%'}}>描述</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td><h5>sink.rolling-policy.file-size</h5></td>
        <td style={{wordWrap: 'break-word'}}>128MB</td>
        <td>MemorySize</td>
        <td>滚动前part文件的最大值。</td>
    </tr>
    <tr>
      <td><h5>sink.rolling-policy.rollover-interval</h5></td>
      <td style={{wordWrap: 'break-word'}}>30 min</td>
      <td>String</td>
      <td>滚动前，part 文件处于打开状态的最大时长（默认值30分钟，以避免产生大量小文件）。
       检查频率是由 'sink.rolling-policy.check-interval' 属性控制的。</td>
    </tr>
    <tr>
      <td><h5>sink.rolling-policy.check-interval</h5></td>
      <td style={{wordWrap: 'break-word'}}>1 min</td>
      <td>String</td>
      <td>基于时间的滚动策略的检查间隔。
      该属性控制了基于 'sink.rolling-policy.rollover-interval' 属性检查文件是否该被滚动的检查频率。</td>
    </tr>
    </tbody>
</table>

#### 文件合并 
支持文件能力，允许在较小的checkpoint下不产生大量的小文件。
<table class="table table-bordered">
    <thead>
      <tr>
          <th class="text-left" style={{width: '10%'}}>参数</th>
          <th class="text-left" style={{width: '7%'}}>默认值</th>
          <th class="text-left" style={{width: '10%'}}>数据类型</th>
          <th class="text-left" style={{width: '65%'}}>描述</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td><h5>auto-compaction</h5></td>
        <td style={{wordWrap: 'break-word'}}>false</td>
        <td>Boolean</td>
        <td>在流式sink中是否开启自动合并功能，数据首先会被写入临时文件。
        当checkpoint完成后，该检查点产生的临时文件会被合并，这些临时文件在合并前不可见。</td>
    </tr>
    <tr>
      <td><h5>compaction.file-size</h5></td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>合并目标文件大小，默认值为滚动文件大小。</td>
    </tr>
    </tbody>
</table>

#### 分区提交 

分区数据写入完成后，一般需要通知下流应用。如：更新hive的元数据信息或者hdfs目录生成_SUCCESS文件。
分区提交策略是配置的，分区提交行为基于triggers和policies的组合。

- Trigger :分区提交时机可以基于分区的watermark或者基于处理时间（process-time）。
- Policy :分区提交策略，内置策略包括提交hive元数据和生成_SUCCESS文件，同时支持自定策略，如生成hive的统计信息、合并小文件等。

备注：分区提交仅支持动态分区插入。

<table class="table table-bordered">
    <thead>
      <tr>
          <th class="text-left" style={{width: '10%'}}>参数</th>
          <th class="text-left" style={{width: '7%'}}>默认值</th>
          <th class="text-left" style={{width: '10%'}}>数据类型</th>
          <th class="text-left" style={{width: '65%'}}>描述</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td><h5>sink.partition-commit.trigger</h5></td>
        <td style={{wordWrap: 'break-word'}}>process-time</td>
        <td>String</td>
        <td>分区提交触发器类型： 'process-time'：基于机器时间既不需要分区时间提取器也不需要watermark生成器。
        一旦 "当前系统时间" 超过了 "分区创建系统时间" 和 'sink.partition-commit.delay' 之和立即提交分区。<br/>
         'partition-time'：基于提取的分区时间，需要 watermark 生成。一旦 watermark 超过了 "分区创建系统时间" 和 'sink.partition-commit.delay' 之和立即提交分区。</td>
    </tr>
    <tr>
      <td><h5>sink.partition-commit.delay</h5></td>
      <td style={{wordWrap: 'break-word'}}>0 s</td>
      <td>Duration</td>
      <td>如果设置分区延迟提交，这个延迟时间之前不会提交。天：'d'；小时：'h';秒：'s'等</td>
    </tr>
    <tr>
      <td><h5>sink.partition-commit.watermark-time-zone</h5></td>
      <td style={{wordWrap: 'break-word'}}>UTC</td>
      <td>String</td>
      <td> 解析Long类型的watermark到TIMESTAMP类型时所采用的时区，
      解析得到的watermark的TIMESTAMP会被用来跟分区时间进行比较以判断是否该被提交。
      这个属性仅当`sink.partition-commit.trigger`被设置为'partition-time'时有效。
      如果这个属性设置的不正确，例如在 TIMESTAMP_LTZ 类型的列上定义了 source rowtime，
      如果没有设置该属性，那么用户可能会在若干个小时后才看到分区的提交。
      默认值为'UTC'意味着 watermark 是定义在 TIMESTAMP 类型的列上或者没有定义 watermark。
      如果watermark定义在TIMESTAMP_LTZ类型的列上，watermark时区必须是会话时区（session time zone）。
      该属性的可选值要么是完整的时区名比如 'America/Los_Angeles'，要么是自定义时区，例如 'GMT-08:00'。</td>
    </tr>
    </tbody>
</table>

#### 分区提交策略

分区提交策略定义了分区提交使用的具体策略。

- metastore：仅在hive时支持该策略。
- success: part文件生成后会生成'_SUCCESS'文件。

<table class="table table-bordered">
    <thead>
      <tr>
        <th class="text-left" style={{width: '25%'}}>参数</th>
        <th class="text-left" style={{width: '8%'}}>是否必须</th>
        <th class="text-center" style={{width: '7%'}}>默认值</th>
        <th class="text-center" style={{width: '10%'}}>数据类型</th>
        <th class="text-center" style={{width: '50%'}}>描述</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td><h5>sink.partition-commit.policy.kind</h5></td>
        <td>可选</td>
        <td style={{wordWrap: 'break-word'}}>(none)</td>
        <td>String</td>
        <td>分区策略通知分区part生成可以被访问，仅hive支持metastore策略，文件系统生成'_success'文件表示文件写入完成。
        两种策略的指定分别为'metastore,success-file'，也可以通过custom的指定的类创建提交策略。</td>
    </tr>
    <tr>
      <td><h5>sink.partition-commit.policy.class</h5></td>
      <td>可选</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>实现 PartitionCommitPolicy 接口的分区提交策略类，只有在 custom 提交策略下才使用该类。</td>
    </tr>
    <tr>
      <td><h5>sink.partition-commit.success-file.name</h5></td>
      <td>可选</td>
      <td style={{wordWrap: 'break-word'}}>_SUCCESS</td>
      <td>String</td>
      <td>使用success-file分区提交策略时的文件名，默认值是 '_SUCCESS'。</td>
    </tr>
    </tbody>
</table>



