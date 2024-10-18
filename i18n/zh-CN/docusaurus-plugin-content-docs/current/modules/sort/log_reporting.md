---
title: OpenTelemetry 日志上报
sidebar_position: 6
---

## 概览

OpenTelemetry 是一个旨在为分布式系统提供统一的遥测数据收集、处理和导出解决方案。它包括一组用于跟踪、指标和日志记录的 API、库、代理和工具。OpenTelemetry 的目标是简化和标准化云原生应用程序和微服务架构中监控和可观测性的数据收集。

为了将 OpenTelemetry 中上报的日志进行可视化，这里给出两个方案： `SigNoz` 和  `Grafana Loki` ,这里主要介绍如何使用 `SigNoz` 进行日志上报

## SigNoz 

SigNoz 是一个开源的 APM 和可观测性平台，它可以帮助你收集、存储和可视化你的应用程序的遥测数据。SigNoz 提供了丰富的功能，包括跟踪、指标、日志记录和分布式追踪等。

### SigNoz 的安装

你可以通过以下命令来启动 InLong 和 SigNoz

```bash
cd ./docker/docker-compose
docker-compose -f docker-compose.yml up -d
cd log-system/signoz/clickhouse-setup
docker-compose -f docker-compose-minimal.yaml up -d
```

## SigNoz 的使用

SigNoz 的使用可以参考 [log explorer](https://signoz.io/docs/product-features/logs-explorer/)
