---
title: Auto Consumption
sidebar_position: 1
---

## Overview
**Auto Consumption** meanings receive data from Message Queue Services (TubeMQ or Pulsar) directly, you can consume the message from MQ
by [Pulsar SDK Client](https://pulsar.apache.org/docs/en/2.8.3/client-libraries/) or [TubeMQ SDK Client](modules/tubemq/clients_java.md),
after that, you have to [Parse the InLongMsg](development/inlong_msg.md) to get raw data for forward processing.