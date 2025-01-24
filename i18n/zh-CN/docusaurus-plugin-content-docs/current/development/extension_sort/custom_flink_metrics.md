---
title: Sort 自定义 Flink Metrics 指标
sidebar_position: 4
---
# Sort-Connector 自定义 Flink Metric 指标

## 总览

InLong Sort 框架允许用户在不同的 Connector 中定义和插入自定义 Flink Metric 指标，以便对数据处理过程进行深入监控。自定义指标一般用于衡量（反）序列化成功/失败次数、延迟时间、快照状态、事务完成状态等关键性能指标。这些指标通过 `SourceExactlyMetric` 和 `SinkExactlyMetric` 对象在合适的逻辑节点中进行记录和上报。

## 插入自定义 Flink Metric 指标的步骤

为了在新的 Connector 中创建并插入自定义 Flink Metric 指标，通常需要按照以下步骤进行。以反序列化过程中的错误计数 `numDeserializeError` 以及 `inlong-sort/sort-flink/sort-flink-v1.15/sort-connectors/postgres-cdc` 为例，以下步骤将详细说明如何在 InLong Sort 框架中插入自定义 Metric。

### 1. 创建 Metric 对象

首先，需要在 `SourceExactlyMetric` 或 `SinkExactlyMetric` 类中添加新的 Flink Metric 对象。Metric 对象通常可以是 `Counter`、`Gauge`、`Meter` 等类型。在本例中，选择创建一个用于记录反序列化错误次数的 `Counter`，并将其作为类的成员变量：

```java
private Counter numDeserializeError;
```

### 2. 编写 `registerMetricsForXXX` 方法

为了初始化并注册此 Metric 对象，需要编写一个 `registerMetricsForNumDeserializeError` 方法。在此方法中，通过 `registerCounter` 将该 `Counter` 对象注册到 Flink 的 Metric 系统，以便系统能够跟踪此 Metric。

```java
public void registerMetricsForNumDeserializeError(Counter counter) {
    numDeserializeError = registerCounter("numDeserializeError", counter);
}
```

在该方法中，通过调用 `registerCounter` 方法，将自定义的 `Counter` 对象与 Flink 的 Metric 系统相关联，并确保此 Metric 能够在后续的数据处理过程中被正确记录。

### 3. 在构造函数中调用注册方法

在类的构造函数中，根据传入的 `MetricOption` 和 `MetricGroup` 参数，调用上述编写的注册方法。这样可以确保在实例化时，Metric对象被正确初始化和注册：

```java
public SourceExactlyMetric(MetricOption option, MetricGroup metricGroup) {
    this.metricGroup = metricGroup;
    this.labels = option.getLabels();
    registerMetricsForNumDeserializeError(new ThreadSafeCounter());
}
```

通过在构造函数中调用 `registerMetricsForNumDeserializeError` 方法，确保 `numDeserializeError` 计数器在每次实例化时都已初始化，并准备好在数据处理过程中记录反序列化错误。

### 4. 编写 Metric 的 getter、setter 和操作方法

为了在外部能够操作 `numDeserializeError` 计数器，还需编写相应的getter和操作方法。在本例中，为 `numDeserializeError` 计数器提供一个增加计数的方法 `incNumDeserializeError` ，以便在反序列化过程发生异常时调用此方法递增计数：

```java
public void incNumDeserializeError() {
    if (numDeserializeError != null) {
        numDeserializeError.inc();
    }
}
```

通过编写该操作方法，可以确保在反序列化出现错误时能够调用 `incNumDeserializeError` 递增错误计数。

### 5. 在 `toString` 方法中增加新 Metric 的输出

为了便于调试和监控以及保证代码完整性，需要在 `toString` 方法中增加该自定义 Metric 的输出信息：

```java
@Override
public String toString() {
    return "SourceMetricData{" 
        + ", numDeserializeError=" + numDeserializeError.getCount()
        + "}";
}
```


### 6. 在合适位置插入自定义 Metric

在 Metric 类中完成注册和初始化后，需要在合适的逻辑节点中调用该 Metric。在本例中，在反序列化方法中调用 `incNumDeserializeError` 方法，以记录每次反序列化错误的发生。此操作可以通过以下代码实现：

```java
@Override
public void deserialize(SourceRecord record, Collector<RowData> out) throws Exception {
    try {
        // Execute deserialization logic
    } catch (Exception e) {
        // Increment error count on deserialization failure
        // Ensure sourceExactlyMetric is not null
        if(sourceExactlyMetric != null) {
            sourceExactlyMetric.incNumDeserializeError();
        }
        throw e;
    }
}
```

在反序列化过程中，通过调用 `incNumDeserializeError` 方法，确保每次反序列化失败时都能增加错误计数，从而准确反映反序列化错误的频率。

## 测试和验证
使用 `sort-end-to-end-tests` 测试，位于 `inlong-sort/sort-end-to-end-tests/` 目录下。
1. **设置 SQL 中的 Metric 标签**：在测试SQL文件中增加 `inlong.metric.labels` 标签，确保 Flink 能识别 Metric 标签：
  以 `sort-end-to-end-tests/sort-end-to-end-tests-v1.15/src/test/java/org/apache/inlong/sort/tests/Postgres2StarRocksTest.java` 中的 `sort-end-to-end-tests/sort-end-to-end-tests-v1.15/src/test/resources/flinkSql/postgres_test.sql` 为例：
    ```sql
    CREATE TABLE test_input1 (
        `id` INT primary key,
        name STRING,
        description STRING
    ) WITH (
        'connector' = 'postgres-cdc-inlong',
        'hostname' = 'postgres',
        'port' = '5432',
        'username' = 'flinkuser',
        'password' = 'flinkpw',
        'database-name' = 'test',
        'table-name' = 'test_input1',
        'schema-name' = 'public',
        'decoding.plugin.name' = 'pgoutput',
        'slot.name' = 'inlong_slot',
        'debezium.slot.name' = 'inlong_slot',
        -- Added portion
        'inlong.metric.labels' = 'groupId=pggroup&streamId=pgStream&nodeId=pgNode'
    );

    -- 剩余 Flink SQL 保持不变即
    ```

2. **配置日志输出查看 Metric **：在测试环境配置中启用 Metric 日志输出，以便可以在控制台中看到统计结果：
    ```properties
    metrics.reporter.slf4j.class: org.apache.flink.metrics.slf4j.Slf4jReporter
    metrics.reporter.slf4j.interval: 5 SECONDS
    ```
  
3. **运行 end-to-end 测试并验证输出**：使用以下命令在`inlong-sort/sort-end-to-end-tests/sort-end-to-end-tests-v1.15`运行指定的 end-to-end 测试，并在控制台中查看 `numDeserializeError` 的值是否为预期值。：
  ```bash
  mvn test -Dtest=Postgres2StarRocksTest
  ```
  提示：可以考虑添加一些逻辑或构造一些数据，触发`incDeserializeError()`，以确认 Metric 运作正常

## 注意事项

* **创建Metric时务必传入 `MetricGroup` **：确保在创建 `SourceExactlyMetric` 或 `SinkExactlyMetric` 对象时通过 `runtimeContext` 获取 `MetricGroup` 传入 `SourceExactlyMetric` 或 `SinkExactlyMetric` 的构造函数，以免出现指标注册失败的情况。
* **确认 MetricOption 非空**：在创建 Metric 对象前应检查 `MetricOption` 是否非空，以避免因缺少 `inlong.metric.labels` 而导致空指针异常。
* **处理空指针异常**：在操作 `SourceExactlyMetric` 或 `SinkExactlyMetric` 对象的自定义 `Flink Metric` 时，例如调用 `sourceExactlyMetric.incNumDeserializeSuccess()`，应判断该对`SourceExactlyMetric` 以及对应的 `Counter` `numDeserializeSuccess` 是否为空，以避免在Flink SQL中未指定 `'inlong.metric.labels'` 时出现空指针异常。
* ** End-to-end 测试覆盖**：如果新增指标的 Connector 没有被 end-to-end 测试覆盖，需要自行编写 end-to-end 测试以保障Metric能被正常上报。

通过这种方式，可以在 InLong Sort Connector 中插入自定义 Flink Metric 指标，并通过测试验证其工作状态，从而增强可观测性。