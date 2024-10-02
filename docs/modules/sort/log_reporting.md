---
title: Log reporting
sidebar_position: 6
---

## 概览

OpenTelemetry is a solution designed to provide a unified telemetry data collection, processing, and export solution for distributed systems. It includes a set of APIs, libraries, agents, and tools for tracing, metrics, and logging. The goal of OpenTelemetry is to simplify and standardize data collection for monitoring and observability in cloud-native applications and microservices architectures.

In order to visualize the logs reported in OpenTelemetry, two solutions are given here: `SigNoz` and `Grafana Loki`

## SigNoz

First, download [SigNoz](https://github.com/SigNoz/signoz) to your local computer.

Here we can choose to use InLong or OpenTelemetry in the SigNoz project according to our needs.

### OpenTelemetry in SigNoz

If you want to use OpenTelemetry in SigNoz, delete the OpenTelemetry container in the InLong project's `docker/docker-compose/docker-compose.yml`

Then enter the `deploy` directory in the SigNoz project and use

```bash
docker-compose -f docker/clickhouse-setup/docker-compose.yaml up -d
```

Start SizNoz

### OpenTelemetry in InLong

If you want to use the OpenTelemetry container in InLong, delete the OpenTelemetry-related configuration in `docker/clickhouse-setup/docker-compose.yaml` in the SigNoz project, and copy the following configuration to `docker/docker-compose/docker-compose.yml` in the InLong project
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
And put the `otel-collector-config.yaml` and `otel-collector-opamp-config.yaml` files in SigNoz into the `docker/docker-compose` directory, then start SigNoz and InLong.

### Usage

For the usage of SigNoz, please refer to [log explorer](https://signoz.io/docs/product-features/logs-explorer/)
