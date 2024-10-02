---
title: 日志上报
sidebar_position: 6
---

## 概览

OpenTelemetry 是一个旨在为分布式系统提供统一的遥测数据收集、处理和导出解决方案。它包括一组用于跟踪、指标和日志记录的 API、库、代理和工具。OpenTelemetry 的目标是简化和标准化云原生应用程序和微服务架构中监控和可观测性的数据收集。

为了将 OpenTelemetry 中上报的日志进行可视化，这里给出两个方案： `SigNoz` 和  `Grafana Loki`

## SigNoz

首先在自己的电脑中下载 [SigNoz](https://github.com/SigNoz/signoz) 到本地

这里我们可以根据自己的需求，选择使用 InLong 还是 SigNoz项目中的 OpenTelemetry

### SigNoz中的OpenTelemetry

如果想要使用 SigNoz 中的 OpenTelemetry 则删除 InLong 项目的 `docker/docker-compose/docker-compose.yml` 中的 OpenTelemetry容器

随后在 SigNoz 项目中进入 `deploy` 目录，使用

```bash
docker-compose -f docker/clickhouse-setup/docker-compose.yaml up -d
```

将 SizNoz 启动起来

### InLong中的OpenTelemetry

如果想要使用 InLong 中的 OpenTelemetry 容器，则删除 SigNoz 项目中 `docker/clickhouse-setup/docker-compose.yaml` 中 OpenTelemetry 相关的配置，并且将以下配置复制到 InLong 项目中的 `docker/docker-compose/docker-compose.yml` 中

```yaml
  otel-collector:
    image: signoz/signoz-otel-collector:0.102.8
    container_name: signoz-otel-collector
    command:
      [
        "--config=/etc/otel-collector-config.yaml",
        "--manager-config=/etc/manager-config.yaml",
        "--copy-path=/var/tmp/collector-config.yaml",
        "--feature-gates=-pkg.translator.prometheus.NormalizeName"
      ]
    user: root # required for reading docker container logs
    volumes:
      - ./otel-collector-config.yaml:/etc/otel-collector-config.yaml
      - ./otel-collector-opamp-config.yaml:/etc/manager-config.yaml
      - /var/lib/docker/containers:/var/lib/docker/containers:ro
      - /:/hostfs:ro
    environment:
      - OTEL_RESOURCE_ATTRIBUTES=host.name=signoz-host,os.type=linux
      - DOCKER_MULTI_NODE_CLUSTER=false
      - LOW_CARDINAL_EXCEPTION_GROUPING=false
    ports:
      # - "1777:1777"     # pprof extension
      - "4317:4317" # OTLP gRPC receiver
      - "4318:4318" # OTLP HTTP receiver
      # - "8888:8888"     # OtelCollector internal metrics
      # - "8889:8889"     # signoz spanmetrics exposed by the agent
      # - "9411:9411"     # Zipkin port
      # - "13133:13133"   # health check extension
      # - "14250:14250"   # Jaeger gRPC
      # - "14268:14268"   # Jaeger thrift HTTP
      # - "55678:55678"   # OpenCensus receiver
      # - "55679:55679"   # zPages extension
    restart: on-failure
    depends_on:
      clickhouse:
        condition: service_healthy
      otel-collector-migrator:
        condition: service_completed_successfully
      query-service:
        condition: service_healthy

```
并将 SigNoz 中 `otel-collector-config.yaml` 和 `otel-collector-opamp-config.yaml` 文件放入 `docker/docker-compose`目录下，随后启动 SigNoz 和 InLong 即可

### 使用

SigNoz 的使用可以参考 [log explorer](https://signoz.io/docs/product-features/logs-explorer/)
