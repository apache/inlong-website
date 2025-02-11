---
title: Customize Flink Metrics in Sort  
sidebar_position: 4
---

# Customize Flink Metrics in Sort-Connector

## Overview

The InLong Sort framework allows users to define and insert custom Flink metrics within different connectors to monitor the data processing pipeline closely. These custom metrics are generally used to track key performance indicators such as serialization/deserialization success/failure counts, latency, snapshot states, transaction completion statuses, etc. These metrics are recorded and reported through `SourceExactlyMetric` and `SinkExactlyMetric` objects at the appropriate logic nodes.

## Steps to Insert Custom Flink Metrics

To create and insert a custom Flink metric within a new connector, you typically need to follow these steps. Using the example of tracking deserialization error count (`numDeserializeError`) in the `inlong-sort/sort-flink/sort-flink-v1.15/sort-connectors/postgres-cdc`, the following steps outline how to insert a custom metric within the InLong Sort framework.

### 1. Create the Metric Object

First, add a new Flink metric object in the `SourceExactlyMetric` or `SinkExactlyMetric` class. Metric objects can typically be of types like `Counter`, `Gauge`, or `Meter`. In this example, a `Counter` is created to track deserialization errors and is added as a class member:

```java
private Counter numDeserializeError;
```

### 2. Implement the `registerMetricsForXXX` Method

To initialize and register this metric object, write a `registerMetricsForNumDeserializeError` method. Within this method, the `Counter` object is registered with Flink's metric system using `registerCounter`, allowing Flink to track the metric.

```java
public void registerMetricsForNumDeserializeError(Counter counter) {
    numDeserializeError = registerCounter("numDeserializeError", counter);
}
```

In this method, the custom `Counter` object is linked to Flink's metric system using `registerCounter`, ensuring that the metric is properly recorded during data processing.

### 3. Call the Registration Method in the Constructor

Within the class constructor, call the registration method with the `MetricOption` and `MetricGroup` parameters. This ensures the metric object is properly initialized and registered upon instantiation:

```java
public SourceExactlyMetric(MetricOption option, MetricGroup metricGroup) {
    this.metricGroup = metricGroup;
    this.labels = option.getLabels();
    registerMetricsForNumDeserializeError(new ThreadSafeCounter());
}
```

By calling the `registerMetricsForNumDeserializeError` method in the constructor, the `numDeserializeError` counter is initialized and ready to record deserialization errors upon each instantiation.

### 4. Write the Metric's Getter, Setter, and Operation Methods

To manipulate the `numDeserializeError` counter externally, implement the necessary getter and operation methods. In this case, an `incNumDeserializeError` method increments the counter whenever a deserialization error occurs:

```java
public void incNumDeserializeError() {
    if (numDeserializeError != null) {
        numDeserializeError.inc();
    }
}
```

This method ensures that `incNumDeserializeError` is called to increment the error count whenever a deserialization error is detected.

### 5. Add the New Metric Output in the `toString` Method

To facilitate debugging, monitoring and ensure the completeness of code, include the custom metric output in the `toString` method:

```java
@Override
public String toString() {
    return "SourceMetricData{" 
        + ", numDeserializeError=" + numDeserializeError.getCount()
        + "}";
}
```

### 6. Insert the Custom Metric in appropriate places

After registering and initializing the metric, invoke it at the appropriate logic node. In this example, call `incNumDeserializeError` in the deserialization method to track each deserialization error. The following code shows how to implement this:

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

This method ensures that each deserialization error triggers `incNumDeserializeError`, accurately reflecting error frequency.

## Testing and Verification

Using `sort-end-to-end-tests` located in the `inlong-sort/sort-end-to-end-tests/` directory:

1. **Set Metric Labels in SQL**: Add `inlong.metric.labels` in the test SQL file to ensure Flink recognizes the metric labels. For example, in `sort-end-to-end-tests/sort-end-to-end-tests-v1.15/src/test/resources/flinkSql/postgres_test.sql`:

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

    -- Keep Flink SQL for sink unchanged
    ```

2. **Configure Log Output for Metric Viewing**: Enable metric log output in the test environment configuration to view results on the console:

    ```properties
    metrics.reporter.slf4j.class: org.apache.flink.metrics.slf4j.Slf4jReporter
    metrics.reporter.slf4j.interval: 5 SECONDS
    ```

3. **Run the end-to-end Test and Verify Output**: Run the specific end-to-end test under path `inlong-sort/sort-end-to-end-tests/sort-end-to-end-tests-v1.15` and check whether `numDeserializeError` is the expected value:

    ```bash
    mvn test -Dtest=Postgres2StarRocksTest
    ```

Note: You may want to insert test code or construct specific data to trigger `incDeserializeError()` and ensure your metrics are functioning as expected.

## Notes

* **Pass `MetricGroup` When Creating Metrics**: Ensure that when creating `SourceExactlyMetric` or `SinkExactlyMetric`, you pass a `MetricGroup` obtained via `runtimeContext` to avoid registration failures.
* **Check for Non-Null `MetricOption`**: Validate that `MetricOption` is non-null before creating metric objects to avoid null pointer exceptions due to missing `inlong.metric.labels`.
* **Handle Null Pointers**: Check for null `SourceExactlyMetric` or `SinkExactlyMetric` objects when operating on custom metrics like `incNumDeserializeSuccess()` to avoid null pointer exceptions if `'inlong.metric.labels'` isn’t specified.
* **End-to-end Test Coverage**: If a new connector metric isn’t covered by an end-to-end test, create a test to verify metric reporting functionality.

This approach allows the insertion of custom Flink metrics in the Postgres connector, verified by testing, to enhance observability.