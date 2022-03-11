---
title: Dataflow Example
sidebar_position: 3
---

# Examples

To make it easier for you to create inlong-sort jobs, here we list some dataflow configuration examples.

## Pulsar to Kafka

Normal example:

```json
{
    "id": 1,
    "source_info": {
        "type": "pulsar",
        "admin_url": "YOUR_PULSAR_ADMIN_URL",
        "service_url": "YOUR_PULSAR_SERVICE_URL",
        "topic": "YOUR_PULSAR_TOPIC",
        "subscription_name": "debezium2canal",
        "deserialization_info": {
            "type": "debezium_json",
            "ignore_parse_errors": true,
            "timestamp_format_standard": "ISO_8601"
        },
        "fields": [
            {
                "type": "base",
                "name": "name",
                "format_info": {
                    "type": "string"
                }
            },
            {
                "type": "base",
                "name": "age",
                "format_info": {
                    "type": "int"
                }
            }
        ],
        "authentication": null
    },
    "sink_info": {
        "type": "kafka",
        "fields": [
            {
                "type": "base",
                "name": "name",
                "format_info": {
                    "type": "string"
                }
            },
            {
                "type": "base",
                "name": "age",
                "format_info": {
                    "type": "int"
                }
            }
        ],
        "address": "YOUR_KAFKA_ADDRESS",
        "topic": "sort_test_canal",
        "serialization_info": {
            "type": "canal"
        }
    },
    "properties": {
        "consumer.bootstrap-mode": "earliest",
        "transaction.timeout.ms": 900000
    }
}
```

Whole-database migration example：

```json
{
    "id": 123,
    "source_info": {
        "type": "pulsar",
        "admin_url": "YOUR_PULSAR_ADMIN_URL",
        "service_url": "YOUR_PULSAR_SERVICE_URL",
        "topic": "YOUR_PULSAR_TOPIC",
        "subscription_name": "whole-db-migration",
        "deserialization_info": {
            "type": "debezium_json",
            "ignore_parse_errors": false,
            "timestamp_format_standard": "ISO_8601",
            "include_update_before": true
        },
        "fields": [
            {
                "type": "builtin",
                "name": "db",
                "format_info": {
                    "type": "string"
                },
                "builtin_field": "MYSQL_METADATA_DATABASE"
            },
            {
                "type": "builtin",
                "name": "table",
                "format_info": {
                    "type": "string"
                },
                "builtin_field": "MYSQL_METADATA_TABLE"
            },
            {
                "type": "builtin",
                "name": "mydata",
                "format_info": {
                    "type": "string"
                },
                "builtin_field": "MYSQL_METADATA_DATA"
            },
            {
                "type": "builtin",
                "name": "es",
                "format_info": {
                    "type": "long"
                },
                "builtin_field": "MYSQL_METADATA_EVENT_TIME"
            },
            {
                "type": "builtin",
                "name": "isDdl",
                "format_info": {
                    "type": "boolean"
                },
                "builtin_field": "MYSQL_METADATA_IS_DDL"
            },
            {
                "type": "builtin",
                "name": "type",
                "format_info": {
                    "type": "string"
                },
                "builtin_field": "MYSQL_METADATA_EVENT_TYPE"
            }
        ],
        "authentication": null
    },
    "sink_info": {
        "type": "kafka",
        "fields": [
            {
                "type": "builtin",
                "name": "db",
                "format_info": {
                    "type": "string"
                },
                "builtin_field": "MYSQL_METADATA_DATABASE"
            },
            {
                "type": "builtin",
                "name": "table",
                "format_info": {
                    "type": "string"
                },
                "builtin_field": "MYSQL_METADATA_TABLE"
            },
            {
                "type": "builtin",
                "name": "mydata",
                "format_info": {
                    "type": "string"
                },
                "builtin_field": "MYSQL_METADATA_DATA"
            },
            {
                "type": "builtin",
                "name": "es",
                "format_info": {
                    "type": "long"
                },
                "builtin_field": "MYSQL_METADATA_EVENT_TIME"
            },
            {
                "type": "builtin",
                "name": "isDdl",
                "format_info": {
                    "type": "boolean"
                },
                "builtin_field": "MYSQL_METADATA_IS_DDL"
            },
            {
                "type": "builtin",
                "name": "type",
                "format_info": {
                    "type": "string"
                },
                "builtin_field": "MYSQL_METADATA_EVENT_TYPE"
            }
        ],
        "address": "YOUR_KAFKA_ADDRESS",
        "topic": "whole-db-migration",
        "serialization_info": {
            "type": "canal"
        }
    },
    "properties": {
        "transaction.timeout.ms": 900000,
        "consumer.bootstrap-mode": "earliest"
    }
}
```

## Pulsar to Hive

Normal example:

```json
{
    "id": 123,
    "source_info": {
        "type": "pulsar",
        "admin_url": "http://100.76.43.216:8080",
        "service_url": "pulsar://100.76.43.216:6650",
        "topic": "persistent://public/public/b_pzr",
        "subscription_name": "whole-db-migration",
        "deserialization_info": {
            "type": "debezium_json",
            "ignore_parse_errors": false,
            "timestamp_format_standard": "ISO_8601",
            "include_update_before": true
        },
        "fields": [
            {
                "type": "base",
                "name": "f1",
                "format_info": {
                    "type": "string"
                }
            },
            {
                "type": "base",
                "name": "f2",
                "format_info": {
                    "type": "int"
                }
            },
            {
                "type": "builtin",
                "name": "data_time",
                "format_info": {
                    "type": "string"
                },
                "builtin_field": "DATA_TIME"
            }
        ],
        "authentication": null
    },
    "sink_info": {
        "type": "hive",
        "fields": [
            {
                "type": "base",
                "name": "f1",
                "format_info": {
                    "type": "string"
                }
            },
            {
                "type": "base",
                "name": "f2",
                "format_info": {
                    "type": "int"
                }
            },
            {
                "type": "builtin",
                "name": "data_time",
                "format_info": {
                    "type": "string"
                },
                "builtin_field": "DATA_TIME"
            }
        ],
        "hive_server_jdbc_url": "YOUR_HIVE_JDBC_URL",
        "database": "YOUR_HIVE_DB_NAME",
        "table": "YOUR_HIVE_TABLE_NAME",
        "username": "username",
        "password": "password",
        "data_path": "YOUR_HIVE_TABLE_DATA_PATH_ON_HDFS",
        "partitions": [
            {
                "type": "time",
                "field_name": "data_time",
                "date_format": "yyyy-MM-dd"
            },
            {
                "type": "field",
                "field_name": "f2"
            }
        ],
        "file_format": {
            "type": "text",
            "splitter": "|",
            "compression_type": "GZIP"
        },
        "hadoop_proxy_user": "proxyUser"
    },
    "properties": {
        "transaction.timeout.ms": 900000,
        "consumer.bootstrap-mode": "latest"
    }
}
```
