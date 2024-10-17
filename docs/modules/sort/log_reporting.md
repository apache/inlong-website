---
title: OpenTelemetry log reporting
sidebar_position: 6
---

## Overview

OpenTelemetry is a solution designed to provide a unified telemetry data collection, processing, and export solution for distributed systems. It includes a set of APIs, libraries, agents, and tools for tracing, metrics, and logging. The goal of OpenTelemetry is to simplify and standardize the data collection for monitoring and observability in cloud-native applications and microservice architectures.

In order to visualize the logs reported in OpenTelemetry, two solutions are given here: `SigNoz` and `Grafana Loki`. Here we mainly introduce how to use `SigNoz` for log reporting

## SigNoz

SigNoz is an open source APM and observability platform that helps you collect, store, and visualize telemetry data for your applications. SigNoz provides a wealth of features, including tracing, metrics, logging, and distributed tracing.

### Installation of SigNoz

You can start InLong and SigNoz with one click using the following command

```bash
cd ./docker/docker-compose
docker-compose -f docker-compose.yml up -d
cd log-system/signoz/clickhouse-setup
docker-compose -f docker-compose-minimal.yaml up -d
```

## Use of SigNoz

For the use of SigNoz, please refer to [log explorer](https://signoz.io/docs/product-features/logs-explorer/)