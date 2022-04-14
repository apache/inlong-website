---
title: Sort 插件
sidebar_position: 3
---

# 总览
InLong-Sort是一个ETL系统，当前支持的sink类型包括hive，kafka，clickhouse以及iceberg。

本文介绍如何在InLong-Sort中扩展一个新的sink类型。

# 扩展flink sink
InLong-Sort是一套基于flink计算引擎的ETL系统，在扩展新的sink到InLong-Sort前，首先需要扩展一个新的flink connector。

如何扩展flink connector请参考flink官方文档[DataStream Connectors ](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/datastream/overview/#datastream-connectors).

# 扩展sink协议
扩展完flink sink后，需要在InLong-Sort中扩展对应的sink协议。该协议用来描述该sink所需要的一些必要信息。

扩展协议首先需要实现一个具体的类，继承父类
`inlong-sort/sort-common/src/main/java/org/apache/inlong/sort/protocol/sink/SinkInfo.java`


举例
```java
public class DemoSinkInfo extends SinkInfo {
    
    // Place necessary attributes here

    @JsonCreator
    public DemoSinkInfo(FieldInfo[] fields) {
        super(fields);
    }
}
```

扩展完协议后，需要将该协议标记为SinkInfo的子类型，通过全局唯一的name进行标识。

举例：扩展一个名为`Constants.SINK_TYPE_DEMO`的协议，该协议类为DemoSinkInfo
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

# 集成新的Sink到InLong-Sort的主流程
扩展完flink sink并实现了对应的sink协议后，我们就可以将该sink集成到InLong-Sort的主流程中了。

InLong-Sort本质是一个flink的job，入口为`inlong-sort/sort-single-tenant/src/main/java/org/apache/inlong/sort/singletenant/flink/Entrance.java`

举例 ：扩展一个名为`Constants.SINK_TYPE_DEMO`的sink

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