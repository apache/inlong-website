---
title: Sort Plugin
sidebar_position: 3
---

# Overview
InLong-Sort is known as a real-time ETL system. Currently, supported sinks are hive, kafka, clickhouse and iceberg.
This article introduces how to extend a new type of sink in InLong-Sort.

# Extend a new sink function
InLong-Sort is based on flink, when extending a new type of sink in InLong-Sort, either a new type of flink sink
or a predefined sink in flink is required.
refer to [DataStream Connectors ](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/datastream/overview/#datastream-connectors).

# Extend a new sink protocol
Firstly, implement a new sink protocol which extends
`inlong-sort/sort-common/src/main/java/org/apache/inlong/sort/protocol/sink/SinkInfo.java`

All necessary attributes used by the corresponding flink sink which extended before should be placed in the protocol

Example
```java
public class DemoSinkInfo extends SinkInfo {
    
    // Place necessary attributes here

    @JsonCreator
    public DemoSinkInfo(FieldInfo[] fields) {
        super(fields);
    }
}
```

Secondly, mark the new sink protocol as subtype of SinkInfo and give it a name

Example : A new sink protocol DemoSinkInfo whose subtype name is `Constants.SINK_TYPE_DEMO`
```java
/**
 * The base class of the data sink in the metadata.
 */
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type")
@JsonSubTypes({
        @Type(value = ClickHouseSinkInfo.class, name = Constants.SINK_TYPE_CLICKHOUSE),
        @Type(value = HiveSinkInfo.class, name = Constants.SINK_TYPE_HIVE),
        @Type(value = KafkaSinkInfo.class, name = Constants.SINK_TYPE_KAFKA),
        @Type(value = IcebergSinkInfo.class, name = Constants.SINK_TYPE_ICEBERG),
        
        // The new sink protocol
        @Type(value = DemoSinkInfo.class, name = Constants.SINK_TYPE_DEMO)}
)
public abstract class SinkInfo implements Serializable {

    private static final long serialVersionUID = 1485856855405721745L;

    @JsonProperty("fields")
    private final FieldInfo[] fields;

    public SinkInfo(@JsonProperty("fields") FieldInfo[] fields) {
        this.fields = checkNotNull(fields);
    }

    @JsonProperty("fields")
    public FieldInfo[] getFields() {
        return fields;
    }
}
```

# Bundle the new sink, make it an alternative sink in Inlong_sort
After extending a new flink sink and a new sink protocol in InLong-Sort, we can bundle the new sink into the flink job
(the entrance of InLong-Sort)

The entrance of the flink job is `inlong-sort/sort-single-tenant/src/main/java/org/apache/inlong/sort/singletenant/flink/Entrance.java`

Example

``` java
private static void buildSinkStream(
        DataStream<Row> sourceStream,
        Configuration config,
        SinkInfo sinkInfo,
        Map<String, Object> properties,
        long dataflowId) throws IOException, ClassNotFoundException {
    final String sinkType = checkNotNull(config.getString(Constants.SINK_TYPE));

    switch (sinkType) {
        case Constants.SINK_TYPE_CLICKHOUSE:
            break;
        case Constants.SINK_TYPE_HIVE:
            break;
        case Constants.SINK_TYPE_ICEBERG:
            break;
        case Constants.SINK_TYPE_KAFKA:
            break;
        case Constants.SINK_TYPE_DEMO:
            // Add the extended sink function here
            break;
        default:
            throw new IllegalArgumentException("Unsupported sink type " + sinkType);
    }

}

```