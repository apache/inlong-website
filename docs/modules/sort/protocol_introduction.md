---
title: Zookeeper Configure
sidebar_position: 3
---

# Overview
Currently the metadata management of inlong-sort relies on inlong-manager.

Metadata interaction between InLong-Sort and InLong-Manager is performed via MySQL. InLong-Manager will construct a json file based on metadata stored in MySQL and pass it as startup parameter to the InLong-Sort job.

## Protocol
Please reference
`org.apache.inlong.sort.protocol.DataFlowInfo`