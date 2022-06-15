---
title: Sort 插件
sidebar_position: 3
---

## 总览

InLong-Sort是一个ETL系统，当前支持的extract或load包括elasticsearch、hbase、hive、iceberg、jdbc、kafka、mongodb、mysql、orcale、postgres、pulsar等。InLong-Sort是基于Flink SQL的ETL方案，Flink SQL强大的表达能力带来的高可扩展性、灵活性，基本上Flink SQL支持的语意，InLong-Sort都支持。在个别场景，Flink SQL内置的函数不满足需求时，还可通过各种UDF来扩展。同时对于曾经使用过SQL尤其是使用过Flink SQL的人而言，会更容易上手。

本文介绍如何在InLong-Sort中扩展一个新的source（在InLong中抽象为Extract Node）或一个新的sink（在InLong中抽象为Load Node）。在弄清楚InLong的架构之后，就可以明白source与Extract Node如何对应，sink与Load Node如何对应。InLong-Sort的架构可以由UML对象关系图表示为：

![sort_uml](img/sort_uml.png)

其中各个组件的概念为：

| **名称**          | **描述**                                                    |
| ----------------- | ----------------------------------------------------------- |
| Group             | 数据流组，包含多个数据流，一个Group 代表一个数据接入        |
| Stream            | 数据流，一个数据流有具体的流向                              |
| GroupInfo         | Sort中对数据流向的封装，一个GroupInfo可包含多个DataFlowInfo |
| StreamInfo        | Sort中数据流向的抽象，包含该数据流的各种来源、转换、去向等  |
| Node              | 数据同步中数据源、数据转换、数据去向的抽象                  |
| ExtractNode       | 数据同步的来源端抽象                                        |
| TransformNode     | 数据同步的转换过程抽象                                      |
| LoadNode          | 数据同步的去向端抽象                                        |
| NodeRelationShip  | 数据同步中各个节点关系抽象                                  |
| FieldRelationShip | 数据同步中上下游节点字段间关系的抽象                        |
| FieldInfo         | 节点字段                                                    |
| MetaFieldInfo     | 节点Meta字段                                                |
| Function          | 转换函数的抽象                                              |
| FunctionParam     | 函数的入参抽象                                              |
| ConstantParam     | 常量参数                                                    |

扩展Extract Node 或 Load Node需要做的工作是：

- 继承Node类（例如MyExtractNode），构建具体的extract 或 load使用逻辑；
- 在具体的Node类（例如MyExtractNode）中，指定对应Flink connector；
- 在具体的ETL实现逻辑中使用具体的Node类（例如MyExtractNode）。

其中第二步中可以使用已有的flink connector，或者用户自己扩展，如何扩展flink connector请参考flink官方文档[DataStream Connectors ](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/datastream/overview/#datastream-connectors).

## 扩展Extract Node

扩展一个ExtractNode分为三步骤：

**第一步**：继承ExtractNode类，类的位置在incubator-inlong/inlong-sort/sort-common/src/main/java/org/apache/inlong/sort/protocol/node/ExtractNode.java；在实现的ExtractNode中指定connecter；

```Java
// 继承ExtractNode类，实现具体的类，例如MongoExtractNode
@EqualsAndHashCode(callSuper = true)
@JsonTypeName("MongoExtract")
@Data
public class MongoExtractNode extends ExtractNode implements Serializable {
    @JsonInclude(Include.NON_NULL)
    @JsonProperty("primaryKey")
    private String primaryKey;
		...

    @JsonCreator
    public MongoExtractNode(@JsonProperty("id") String id,
                           ...) { ... }

    @Override
    public Map<String, String> tableOptions() {
        Map<String, String> options = super.tableOptions();
      	// 配置指定的connector, 这里指定的是mongodb-cdc
        options.put("connector", "mongodb-cdc");
      	...
        return options;
    }
}
```

**第二步**：在ExtractNode和Node中的JsonSubTypes添加该Extract

```java
// 在ExtractNode和Node的JsonSubTypes中添加字段
...
@JsonSubTypes({
        @JsonSubTypes.Type(value = MongoExtractNode.class, name = "mongoExtract")
})
...
public abstract class ExtractNode implements Node{...}

...
@JsonSubTypes({
        @JsonSubTypes.Type(value = MongoExtractNode.class, name = "mongoExtract")
})
public interface Node {...}
```

**第三步**：扩展flink connector，查看该（/incubator-inlong/inlong-sort/sort-connectors/mongodb-cdc）目录下是否已经存在对应的connector。如果还没有，则需要参考flink官方文档[DataStream Connectors ](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/datastream/overview/#datastream-connectors)来扩展，直接调用已有的flink-connector（例如incubator-inlong/inlong-sort/sort-connectors/mongodb-cdc）或自行实现相关的connecter。

## 扩展Load Node

扩展一个LoadNode分为三步骤：

**第一步**：继承LoadNode类，类的位置在incubator-inlong/inlong-sort/sort-common/src/main/java/org/apache/inlong/sort/protocol/node/LoadNode.java；在实现的LoadNode中指定connecter；

```java
// 继承LoadNode类，实现具体的类，例如KafkaLoadNode
@EqualsAndHashCode(callSuper = true)
@JsonTypeName("kafkaLoad")
@Data
@NoArgsConstructor
public class KafkaLoadNode extends LoadNode implements Serializable {
    @Nonnull
    @JsonProperty("topic")
    private String topic;
  	...

    @JsonCreator
    public KafkaLoadNode(@Nonnull @JsonProperty("topic") String topic,
                        ...) {...}

  // 根据不同的条件配置使用不同的connector
    @Override
    public Map<String, String> tableOptions() {
      ...
        if (format instanceof JsonFormat || format instanceof AvroFormat || format instanceof CsvFormat) {
            if (StringUtils.isEmpty(this.primaryKey)) {
                options.put("connector", "kafka");   // kafka connector
                options.putAll(format.generateOptions(false));
            } else {
                options.put("connector", "upsert-kafka"); // upsert-kafka connector
                options.putAll(format.generateOptions(true));
            }
        } else if (format instanceof CanalJsonFormat || format instanceof DebeziumJsonFormat) {
            options.put("connector", "kafka-inlong");	 // kafka-inlong connector
            options.putAll(format.generateOptions(false));
        } else {
            throw new IllegalArgumentException("kafka load Node format is IllegalArgument");
        }
        return options;
    }
}
```

**第二步**：在LoadNode和Node中的JsonSubTypes添加该Load

```java
// 在LoadNode和Node的JsonSubTypes中添加字段
...
@JsonSubTypes({
        @JsonSubTypes.Type(value = KafkaLoadNode.class, name = "kafkaLoad")
})
...
public abstract class LoadNode implements Node{...}

...
@JsonSubTypes({
        @JsonSubTypes.Type(value = KafkaLoadNode.class, name = "kafkaLoad")
})
public interface Node {...}
```

**第三步**：扩展flink connector ，Kafka的sort connector在incubator-inlong/inlong-sort/sort-connectors/kafka

## 集成Extract 和Load 到InLong-Sort主流程

将Extract和Load集成到InLong-Sort主流程中，需要构建总览小节中提到的语意：Group、stream、node等。InLong-Sort的入口类在inlong-sort/sort-core/src/main/java/org/apache/inlong/sort/Entrance.java。Extract和Load如何集成至InLong-Sort，可参考下面的UT，首先构建对应的ExtractNode、LoadNode，再构建NodeRelation、streamInfo、groupInfo，最后使用FlinkSqlParser去执行。

```java
public class MongoExtractToKafkaLoad extends AbstractTestBase {

  	// 构建MongoExtractNode
    private MongoExtractNode buildMongoNode() {
        List<FieldInfo> fields = Arrays.asList(new FieldInfo("name", new StringFormatInfo()), ...);
        return new MongoExtractNode(..., fields, ...);
    }

  	// 构建KafkaLoadNode
    private KafkaLoadNode buildAllMigrateKafkaNode() {
        List<FieldInfo> fields = Arrays.asList(new FieldInfo("name", new StringFormatInfo()), ...);
        List<FieldRelation> relations = Arrays.asList(new FieldRelation(new FieldInfo("name", new StringFormatInfo()), ...), ...);
        CsvFormat csvFormat = new CsvFormat();
        return new KafkaLoadNode(..., fields, relations, csvFormat, ...);
    }

  	// 构建NodeRelation
    private NodeRelation buildNodeRelation(List<Node> inputs, List<Node> outputs) {
        List<String> inputIds = inputs.stream().map(Node::getId).collect(Collectors.toList());
        List<String> outputIds = outputs.stream().map(Node::getId).collect(Collectors.toList());
        return new NodeRelation(inputIds, outputIds);
    }

    // 测试主流程 mongodb to kafka
    @Test
    public void testMongoDbToKafka() throws Exception {
        EnvironmentSettings settings = EnvironmentSettings. ... .build();
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
      	...
        StreamTableEnvironment tableEnv = StreamTableEnvironment.create(env, settings);
        Node inputNode = buildMongoNode();
        Node outputNode = buildAllMigrateKafkaNode();
        StreamInfo streamInfo = new StreamInfo("1", Arrays.asList(inputNode, outputNode), ...);
        GroupInfo groupInfo = new GroupInfo("1", Collections.singletonList(streamInfo));
        FlinkSqlParser parser = FlinkSqlParser.getInstance(tableEnv, groupInfo);
        ParseResult result = parser.parse();
        Assert.assertTrue(result.tryExecute());
    }
}
```


