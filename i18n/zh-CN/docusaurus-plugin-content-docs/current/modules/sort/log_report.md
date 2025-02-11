---
title: OpenTelemetry 日志上报
sidebar_position: 6
---



## 概览

由于 `InLong Sort` 会运行在 `Apache Flink` 的不同 `Task Manager` 节点上，每个节点独立存储产生的日志，我们需要到每个节点上查看日志，维护效率低下。为此 `InLong Sort` 提供了基于 OpenTelemetry 的日志集中管理方案，用户可以高效地集中处理`Flink`日志。

`InLong Sort`可以将日志上报功能集成到各个`Connector`中，其日志处理流程如下图所示。日志通过 [OpenTelemetry](https://opentelemetry.io/) 进行上报，经由 [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/) 收集处理后发往 [Grafana Loki](https://grafana.com/oss/loki/) 进行集中管理。 

![日志处理流程](img/LogProcess.png)

## Connector集成日志上报功能

`InLong Sort` 封装了 [OpenTelemetryLogger](https://github.com/apache/inlong/blob/6e78dd2de8e917b9fc17a18d5e990b43089bb804/inlong-sort/sort-flink/base/src/main/java/org/apache/inlong/sort/base/util/OpenTelemetryLogger.java) 类，其提供了一个 `Builder` 来帮助用户快速配置一个 `OpenTelemetryLogger` ，并可以通过调用 `OpenTelemetryLogger` 的 `install` 和 `uninstall` 方法来开启和关闭日志上报功能。借助 `OpenTelemetryLogger` 我们可以很便捷地为 `Connector` 赋予日志上报功能，以下介绍如何借助 `OpenTelemetryLogger` 类为符合 [FLIP-27](https://cwiki.apache.org/confluence/display/FLINK/FLIP-27%3A+Refactor+Source+Interface#FLIP27:RefactorSourceInterface-Motivation) 标准的 `Connector` 集成日志上报功能：

1. 在connector `SourceReader` 类构造方法中使用 `OpenTelemetryLogger.Builder()` 构造一个 `openTelemetryLogger` 对象
2. 在 `SourceReader` 的 `Start` 接口中调用 `openTelemetryLogger` 对象的 `install()` 方法
3. 在 `SourceReader` 的 `close` 接口中调用 `openTelemetryLogger` 对象的 `uninstall()` 方法

**注意**：如果使用了 `maven-shade-plugin` 插件，需要将 `opentelemetry` 及 `okhttp` 相关包包含在内：

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-shade-plugin</artifactId>
            <version>${plugin.shade.version}</version>
            <executions>
                <execution>
                    <id>shade-flink</id>
                    <goals>
                        <goal>shade</goal>
                    </goals>
                    <phase>package</phase>
                    <configuration>
                        <createDependencyReducedPom>false</createDependencyReducedPom>
                        <artifactSet>
                            <includes>
                                <include>io.opentelemetry*</include>
                                <include>com.squareup.*</include>
                            </includes>
                        </artifactSet>
                    </configuration>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```


使用示例如下：

```java
import org.apache.inlong.sort.base.util.OpenTelemetryLogger;

public class XXXSourceReader<T>
{

    private static final Logger LOG = LoggerFactory.getLogger(XXXSourceReader.class);

    private final OpenTelemetryLogger openTelemetryLogger;

    public XXXSourceReader() {
        ...
        // 初始化 OpenTelemetryLogger
        this.openTelemetryLogger = new OpenTelemetryLogger.Builder()
                .setServiceName(this.getClass().getSimpleName())
                .setLocalHostIp(this.context.getLocalHostName()).build();
    }

    @Override
    public void start() {
        openTelemetryLogger.install(); //  开启日志上报功能
        ...
    }

    @Override
    public void close() throws Exception {
        super.close();
        openTelemetryLogger.uninstall(); // 关闭日志上报功能
    }
    
    ...
}
```

目前 `OpenTelemetryLogger` 提供如下配置项：

| 配置项      | 说明                               | 默认值 |
| ----------- | ---------------------------------- | -------- |
|`endpoint`    | `OpenTelemetry Collector`地址，如未指定则尝试从`OTEL_EXPORTER_ENDPOINT`环境变量获取；如环境变量也未配置则采用默认值 | `localhost:4317` |
| `serviceName` | `OpenTelemetry `服务名，可以用来区分不同的`connector` |`unnamed_service  `|
| `layout` | `Log4j2` 的日志格式，应设置为一个`PatternLayout`对象 |`%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n`|
| `logLevel` | 上报的日志级别 |`Level.INFO`|
| `localHostIp` | 所在`Flink`节点IP，可在`SourceReader`中通过`this.context.getLocalHostName()`获取 |`null`|

## 容器配置

除了要为 `Connector` 集成日志上报功能外，还需要增加 `opentelemetry-collector`、`grafana loki`、`grafana` 三个docker容器，并为 `Flink` 容器配置 `OTEL_EXPORTER_ENDPOINT` 环境变量。

> 此部分配置在 `/inlong/docker/docker-compose/docker-compose.yml` 中已提供，仅需在启动 `docker compose` 时增加 `--profile sort-report` 选项即可，完整启动命令为 `docker compose --profile sort-report up -d`

也可以参考下面的内容配置，`docker-compose.yml` 文件参考如下：

```docker
# flink jobmanager
jobmanager:
  image: apache/flink:1.15-scala_2.12
  container_name: jobmanager
  environment:
    - |
      FLINK_PROPERTIES=
      jobmanager.rpc.address: jobmanager
    - OTEL_EXPORTER_ENDPOINT=logcollector:4317
  ports:
    - "8081:8081"
  command: jobmanager

# flink taskmanager
taskmanager:
  image: apache/flink:1.15-scala_2.12
  container_name: taskmanager
  environment:
    - |
      FLINK_PROPERTIES=
      jobmanager.rpc.address: jobmanager
      taskmanager.numberOfTaskSlots: 2
    - OTEL_EXPORTER_ENDPOINT=logcollector:4317
  command: taskmanager

# opentelemetry collector
logcollector:
  image: otel/opentelemetry-collector-contrib:0.110.0
  container_name: logcollector
  volumes:
    - ./log-system/otel-config.yaml:/otel-config.yaml
  command: [ "--config=/otel-config.yaml"]
  ports:
    - "4317:4317"

# grafana loki
loki:
  image: grafana/loki:3.0.0
  ports:
    - "3100:3100"
  volumes:
    - ./log-system/loki.yaml:/etc/loki/local-config.yaml
  command: -config.file=/etc/loki/local-config.yaml

# grafana
grafana:
  environment:
    - GF_PATHS_PROVISIONING=/etc/grafana/provisioning
    - GF_AUTH_ANONYMOUS_ENABLED=true
    - GF_AUTH_ANONYMOUS_ORG_ROLE=Admin
  entrypoint:
    - sh
    - -euc
    - |
      mkdir -p /etc/grafana/provisioning/datasources
      cat <<EOF > /etc/grafana/provisioning/datasources/ds.yaml
      apiVersion: 1
      datasources:
      - name: Loki
        type: loki
        access: proxy 
        orgId: 1
        url: http://loki:3100
        basicAuth: false
        isDefault: true
        version: 1
        editable: false
      EOF
      /run.sh
  image: grafana/grafana:latest
  ports:
    - "3000:3000"
```

还需要为 `logcollector` 和 `Loki` 分别提供一个名为 `otel-config.yaml` 和 `loki.yaml` 的配置文件， `otel-config.yaml` 文件内容如下：

```yaml
receivers:
  otlp:
    protocols:
      grpc:
        endpoint: logcollector:4317
processors:
  batch:

exporters:
  logging:
    verbosity: detailed
  otlphttp:
    endpoint: http://loki:3100/otlp
    tls:
      insecure: true

service:
  pipelines:
    logs:
      receivers: [otlp]
      processors: [batch]
      exporters: [otlphttp, logging]
```

`loki.yaml` 文件内容如下：

```yaml
auth_enabled: false

limits_config:
  allow_structured_metadata: true
  volume_enabled: true
  otlp_config:
    resource_attributes:
      attributes_config:
        - action: index_label
          attributes:
            - level
server:
  http_listen_port: 3100

common:
  ring:
    instance_addr: 0.0.0.0
    kvstore:
      store: inmemory
  replication_factor: 1
  path_prefix: /tmp/loki

schema_config:
  configs:
    - from: 2020-05-15
      store: tsdb
      object_store: filesystem
      schema: v13
      index:
        prefix: index_
        period: 24h

storage_config:
  tsdb_shipper:
    active_index_directory: /tmp/loki/index
    cache_location: /tmp/loki/index_cache
  filesystem:
    directory: /tmp/loki/chunks

pattern_ingester:
  enabled: true
```

## 使用说明

在 `inlong/docker/` 路径下执行 `docker compose --profile sort-report up -d` 来启动相关容器，并按照 [数据接入](quick_start/data_ingestion/file_pulsar_clickhouse_example.md) 流程创建并启动一个任务流程(使用到的 `connector` 需要集成好 `OpenTelemetryAppender` )，通过访问 `http://127.0.0.1:3000/explore` 地址进入 `Grafana Loki` 界面，使用 `service_name` 字段进行日志查询：

![日志查询](img/loki1.png)

点击相应的日志项，可以查看到日志的详细信息（**注意：**默认设置的日志上报级别为 `ERROR`）：

![日志信息](img/loki2.png)
