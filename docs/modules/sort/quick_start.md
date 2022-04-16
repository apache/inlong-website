---
title: Deployment
sidebar_position: 2
---

## Set up flink environment
Currently inlong-sort is based on flink, before you run an inlong-sort application,
you need to set up [flink environment](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/).

Currently, inlong-sort relys on flink-1.13.5. Chose `flink-1.13.5-bin-scala_2.11.tgz` when downloading package.

Once your flink environment is set up, you can visit web ui of flink, whose address is stored in `/${your_flink_path}/conf/masters`.

## Prepare installation files
All installation files at `inlong-sort` directory.

## Starting an inlong-sort application
Now you can submit job to flink with the jar compiled, refer to [how to submit job to flink](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/cli/#submitting-a-job).

Example：
```
./bin/flink run -c org.apache.inlong.sort.singletenant.flink.Entrance inlong-sort/sort-[version].jar \
--cluster-id debezium2hive --dataflow.info.file /YOUR_DATAFLOW_INFO_DIR/debezium-to-hive.json \
--source.type pulsar --sink.type hive --sink.hive.rolling-policy.rollover-interval 60000 \
--metrics.audit.proxy.hosts 127.0.0.1:10081 --sink.hive.rolling-policy.check-interval 30000
```

Notice：

- `-c org.apache.inlong.sort.singletenant.flink.Entrance` is the main class name

- `inlong-sort/sort-[version].jar` is the compiled jar

## Necessary configurations
- `--cluster-id ` represent a specified inlong-sort application, same as the configuration of `sort.appName` in inlong-manager
- `--dataflow.info.file` dataflow configuration file path
- `--source.type` source of the application, currently "pulsar" is supported
- `--sink.type` sink of the application, currently "clickhouse", "hive", "iceberg", "kafka" are supported
- `--metrics.audit.proxy.hosts` audit proxy host address for reporting audit metrics

**Example**
```
--cluster-id debezium2kafka-canal --dataflow.info.file /YOUR_DATAFLOW_INFO_DIR/debezium-to-kafka-canal.json \
--source.type pulsar --sink.type kafka
```

## All configurations
| name                                       | necessary | default value | description                                                                                                                                                                                                                                 |
|--------------------------------------------|:---------:|:-------------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cluster-id                                 |     Y     |      NA       | used to represent a specified inlong-sort application                                                                                                                                                                                       |
| source.type                                |     Y     |      NA       | source of the application, currently "pulsar" is supported                                                                                                                                                                                  |
| sink.type                                  |     Y     |      NA       | sink of the application, currently "clickhouse", "hive", "iceberg" and "kafka" are supported                                                                                                                                                |
| source.parallelism                         |     N     |       1       | parallelism of source                                                                                                                                                                                                                       |
| deserialization.parallelism                |     N     |       1       | parallelism of deserialization                                                                                                                                                                                                              |
| transformation.parallelism                 |     N     |       1       | parallelism of transformation                                                                                                                                                                                                               |
| sink.parallelism                           |     N     |       1       | parallelism of sink                                                                                                                                                                                                                         |
| checkpoint.interval                        |     N     |    600000     | checkpoint interval，unit: ms                                                                                                                                                                                                                |
| min.pause.between.checkpoints.ms           |     N     |      500      | the minimal checkpoint interval, unit：ms                                                                                                                                                                                                    |
| checkpoint.timeout.ms                      |     N     |    600000     | checkpoint timeout，unit: ms                                                                                                                                                                                                                 |
| sink.field.type.string.nullable            |     N     |     false     | whether the sink field of string type can be null or empty                                                                                                                                                                                  |
| sink.field.type.int.nullable               |     N     |     true      | whether the sink field of string type can be null or empty                                                                                                                                                                                  |
| sink.field.type.short.nullable             |     N     |     true      | whether the sink field of string type can be null or empty                                                                                                                                                                                  |
| sink.field.type.long.nullable              |     N     |     true      | whether the sink field of string type can be null or empty                                                                                                                                                                                  |
| sink.hive.rolling-policy.file-size         |     N     |   134217728   | The maximum part file size before rolling，unit: byte                                                                                                                                                                                        |
| sink.hive.rolling-policy.rollover-interval |     N     |    1800000    | The maximum time duration a part file can stay open before rolling(by default long enough to avoid too many small files). The frequency at which this is checked is controlled by the 'sink.rolling-policy.check-interval' option. Unit: ms |
| sink.hive.rolling-policy.check-interval    |     N     |     60000     | The interval for checking time based rolling policies. This controls the frequency to check whether a part file should rollover based on 'sink.rolling-policy.rollover-interval'. Unit: ms                                                  |