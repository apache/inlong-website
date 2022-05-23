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
./bin/flink run -c org.apache.inlong.sort.Entrance inlong-sort/sort-[version].jar \
--group.info.file /YOUR_DATAFLOW_INFO_DIR/mysql-to-kafka.json
```

Notice：

- `-c org.apache.inlong.sort.Entrance` is the main class name

- `inlong-sort/sort-[version].jar` is the compiled jar

## Necessary configurations
- `--group.info.file` dataflow configuration file path
- 
**Example**
```
--group.info.file /YOUR_DATAFLOW_INFO_DIR/mysql-to-kafka.json
```

## All configurations
| name                                       | necessary | default value | description                                                                                                                                                                                                                                 |
|--------------------------------------------|:---------:|:-------------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| checkpoint.interval                        |     N     |    600000     | checkpoint interval，unit: ms                                                                                                                                                                                                                |
| min.pause.between.checkpoints.ms           |     N     |      500      | the minimal checkpoint interval, unit：ms                                                                                                                                                                                                    |
| checkpoint.timeout.ms                      |     N     |    600000     | checkpoint timeout，unit: ms                                                                                                                                                                                                                 |