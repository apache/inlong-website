---
title: 安装部署
sidebar_position: 2
---

## 配置flink运行环境
当前inlong-sort是基于flink的一个应用，因此运行inlong-sort应用前，需要准备好[flink 环境](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/)。

由于当前inlong-sort依赖的是flink1.13.5版本，因此在下载部署包时，请选择`flink-1.13.5-bin-scala_2.11.tgz`

flink环境配置完成后，可以通过浏览器访问flink的web ui，对应的地址是`/{flink部署路径}/conf/masters`文件中的地址

## 准备安装文件
安装文件在`inlong-sort`目录。

## 启动inlong-sort应用
有了上述编译阶段产出的jar包后，就可以启动inlong-sort的应用了。提交方式可以参考[如何提交flink作业](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/cli/#submitting-a-job)。

示例：
```
./bin/flink run -c org.apache.inlong.sort.Entrance inlong-sort/sort-[version].jar \
--group.info.file /YOUR_DATAFLOW_INFO_DIR/mysql-to-kafka.json
```

注意：

- `-c org.apache.inlong.sort.Entrance` 表示main class name

- `inlong-sort/sort-[version].jar` 为编译阶段产出的jar包

## 必要的配置
- `--group.info.file` 流配置文件路径

**启动参数配置示例**
```
--group.info.file /YOUR_DATAFLOW_INFO_DIR/mysql-to-kafka.json
```

## 所有支持的配置
| 配置名                                        |  是否必须  |     默认值     | 描述                                                |
|--------------------------------------------|:------:|:-----------:|---------------------------------------------------|
| checkpoint.interval                        |   N    |   600000    | checkpoint间隔，单位：毫秒                                |
| min.pause.between.checkpoints.ms           |   N    |     500     | checkpoint之间的最小间隔，单位：毫秒                           |
| checkpoint.timeout.ms                      |   N    |   600000    | checkpoint超时时间，单位：毫秒                              |