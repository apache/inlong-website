---
title: Inlong Manager 客户端
sidebar_position: 3
---

## 总览

Apache InLong Manager 是整个数据集成平台面向用户的统一管理入口。为方便用户使用在无界面的场景下部署InLong group任务，我们提供了Manager的客户端SDK。

## 依赖

- 增加 maven 依赖
```xml
 <dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>manager-client</artifactId>
    <version>${inlong.version}</version>
</dependency>
```

## 代码

- 我们以单元测试的方式提供了两个客户端用例, 你可以更换其中的参数并在自己的集群上实践;
- 特别要注意的是，在用例中，我们使用了**腾讯云平台**的**Oceanus**与**TDMQ**作为Sort与Cache组件;
- 你可以在自己的Inlong集群上运行任务, 或者像我们提供的用例中一样借助第三方平台运行。

###Kafka2Hive

```java
import org.apache.commons.compress.utils.Lists;
import org.apache.inlong.manager.client.api.*;
import org.apache.inlong.manager.client.api.auth.DefaultAuthentication;
import org.apache.inlong.manager.client.api.sink.HiveSink;
import org.apache.inlong.manager.client.api.source.KafkaSource;
import org.apache.inlong.manager.common.enums.FieldType;
import org.apache.inlong.manager.common.enums.FileFormat;
import org.apache.inlong.manager.common.settings.InlongGroupSettings;
import org.junit.Test;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

public class InlongManagerClientHiveSinkTest {
    
    public static String SERVICE_URL = "9.134.120.127:8083";

    public static DefaultAuthentication INLONG_AUTH = new DefaultAuthentication("admin", "inlong");

    public static String GROUP_NAME = "hery_kafka_hive_4";

    public static String STREAM_NAME = "wedatakafka43";

    public static String FLINK_URL = "oceanus.tencentcloudapi.com";

    public static String FLINK_REGION = "ap-beijing";

    public static String tenant = "pulsar-q52aw2e3rwjj";

    public static String topic = "herywang";


    @Test
    public void testCreateGroupForHive() {
        ClientConfiguration configuration = new ClientConfiguration();
        configuration.setWriteTimeout(10);
        configuration.setReadTimeout(10);
        configuration.setConnectTimeout(10);
        configuration.setTimeUnit(TimeUnit.SECONDS);
        configuration.setAuthentication(INLONG_AUTH);
        InlongClient inlongClient = InlongClient.create(SERVICE_URL, configuration);
        InlongGroupConf groupConf = createGroupConf();
        try {
            InlongGroup group = inlongClient.forGroup(groupConf);
            InlongStreamConf streamConf = createStreamConf();
            InlongStreamBuilder streamBuilder = group.createStream(streamConf);
            streamBuilder.fields(createStreamFields());
            streamBuilder.source(createKafkaSource());
            streamBuilder.sink(createHiveSink());
            streamBuilder.initOrUpdate();
            // start group
            InlongGroupContext inlongGroupContext = group.init();
            System.out.println(inlongGroupContext);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testStopStreamGroup() {
        ClientConfiguration configuration = new ClientConfiguration();
        configuration.setWriteTimeout(10);
        configuration.setReadTimeout(10);
        configuration.setConnectTimeout(10);
        configuration.setTimeUnit(TimeUnit.SECONDS);
        configuration.setAuthentication(INLONG_AUTH);
        InlongClient inlongClient = InlongClient.create(SERVICE_URL, configuration);
        InlongGroupConf groupConf = createGroupConf();
        try {
            InlongGroup group = inlongClient.forGroup(groupConf);
            InlongGroupContext groupInfo = group.delete();
            System.out.println(groupInfo);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public KafkaSource createKafkaSource() {
        KafkaSource kafkaSource = new KafkaSource();
        kafkaSource.setBootstrapServers("9.134.120.127:9092");
        kafkaSource.setTopic("herywang");
        kafkaSource.setSourceName("test-kafka-source");
        kafkaSource.setDataFormat(DataFormat.JSON);
        return kafkaSource;
    }

    private HiveSink createHiveSink() {
        HiveSink hiveSink = new HiveSink();
        hiveSink.setDbName("hery");
        hiveSink.setJdbcUrl("jdbc:hive2://172.17.12.135:7001");
        hiveSink.setAuthentication(new DefaultAuthentication("hive", "hive"));
        hiveSink.setCharset(StandardCharsets.UTF_8);
        hiveSink.setFileFormat(FileFormat.TextFile);
        hiveSink.setDataSeparator(DataSeparator.VERTICAL_BAR);
        hiveSink.setDataPath("hdfs://172.17.147.2:4007/usr/hive/warehouse/hery.db");

        List<SinkField> fields = new ArrayList<SinkField>();
        SinkField field1 = new SinkField(0, FieldType.INT,"age","","","age","int", 0);
        SinkField field2 = new SinkField(0, FieldType.STRING,"name","","","name","string", 0);
        fields.add(field1);
        fields.add(field2);
        hiveSink.setSinkFields(fields);
        hiveSink.setTableName("test");
        hiveSink.setSinkName("test-hive-sink");
        return hiveSink;
    }

    private InlongStreamConf createStreamConf() {
        InlongStreamConf streamConf = new InlongStreamConf();
        streamConf.setName(STREAM_NAME);
        streamConf.setDescription(STREAM_NAME);
        streamConf.setCharset(StandardCharsets.UTF_8);
        streamConf.setDataSeparator(DataSeparator.VERTICAL_BAR);
        // true if you need strictly order for data 
        streamConf.setStrictlyOrdered(true);
        streamConf.setTopic(topic);
        return streamConf;
    }

    private InlongGroupConf createGroupConf() {
        InlongGroupConf inlongGroupConf = new InlongGroupConf();
        inlongGroupConf.setGroupName(GROUP_NAME);
        inlongGroupConf.setDescription(GROUP_NAME);
        inlongGroupConf.setProxyClusterId(1);
        //pulsar conf
        PulsarBaseConf pulsarBaseConf = new PulsarBaseConf();
        inlongGroupConf.setMqBaseConf(pulsarBaseConf);
        pulsarBaseConf.setNamespace("public");
        pulsarBaseConf.setEnableCreateResource(false);
        pulsarBaseConf.setTenant(tenant);

        //flink conf
        FlinkSortBaseConf sortBaseConf = new FlinkSortBaseConf();
        inlongGroupConf.setSortBaseConf(sortBaseConf);
        sortBaseConf.setServiceUrl(FLINK_URL);
        Map<String, String> map = new HashMap<>(16);
        map.put(InlongGroupSettings.REGION, FLINK_REGION);
        sortBaseConf.setProperties(map);
        //enable zk
        inlongGroupConf.setZookeeperEnabled(false);
        inlongGroupConf.setDailyRecords(10000000L);
        inlongGroupConf.setPeakRecords(100000L);
        inlongGroupConf.setMaxLength(10000);
        return inlongGroupConf;
    }

    public List<StreamField> createStreamFields() {
        List<StreamField> streamFieldList = Lists.newArrayList();
        streamFieldList.add(new StreamField(
                0, FieldType.STRING, "name", null, null
        ));
        streamFieldList.add(new StreamField(1, FieldType.INT, "age", null, null));
        return streamFieldList;
    }
}
```

###Binlog2Kafka

```java
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import com.tencent.cloud.wedata.di.common.Constants;
import org.apache.commons.compress.utils.Lists;
import org.apache.inlong.manager.client.api.ClientConfiguration;
import org.apache.inlong.manager.client.api.DataFormat;
import org.apache.inlong.manager.client.api.DataSeparator;
import org.apache.inlong.manager.client.api.FlinkSortBaseConf;
import org.apache.inlong.manager.client.api.InlongClient;
import org.apache.inlong.manager.client.api.InlongGroup;
import org.apache.inlong.manager.client.api.InlongGroupConf;
import org.apache.inlong.manager.client.api.InlongGroupContext;
import org.apache.inlong.manager.client.api.InlongStreamBuilder;
import org.apache.inlong.manager.client.api.InlongStreamConf;
import org.apache.inlong.manager.client.api.StreamField;
import org.apache.inlong.manager.client.api.TdmqPulsarBaseConf;
import org.apache.inlong.manager.client.api.auth.DefaultAuthentication;
import org.apache.inlong.manager.client.api.sink.KafkaSink;
import org.apache.inlong.manager.client.api.source.MySQLBinlogSource;
import org.apache.inlong.manager.common.enums.FieldType;
import org.apache.inlong.manager.common.enums.MqType;
import org.apache.inlong.manager.common.settings.InlongGroupSettings;
import org.junit.Test;

public class InlongManagerClientKafkaSinkTest {
    
    public static String SERVICE_URL = "127.0.0.1:8083";

    public static DefaultAuthentication INLONG_AUTH = new DefaultAuthentication("admin", "inlong");

    public static String GROUP_NAME = "wedata_group_kafka117";

    public static String STREAM_NAME = "wedatakafka43";

    public static String PULSAR_ADMIN_URL = "http://100.76.43.216:8080";

    public static String PULSAR_SERVICE_URL = "pulsar://100.76.43.216:6650";

    public static String FLINK_URL = "oceanus.tencentcloudapi.com";

    public static String FLINK_REGION = "ap-beijing";

    public static String tenant = "pulsar-q52aw2e3rwjj";

    public static String topic = "b_wedatakafka43";
    
    @Test
    public void testCreateGroupForKafka() throws Exception {
        ClientConfiguration configuration = new ClientConfiguration();
        configuration.setWriteTimeout(10);
        configuration.setReadTimeout(10);
        configuration.setConnectTimeout(10);
        configuration.setTimeUnit(TimeUnit.SECONDS);
        configuration.setAuthentication(INLONG_AUTH);
        InlongClient inlongClient = InlongClient.create(SERVICE_URL, configuration);
        InlongGroupConf groupConf = createGroupConf();
        try {
            InlongGroup group = inlongClient.forGroup(groupConf);
            InlongStreamConf streamConf = createStreamConf();
            InlongStreamBuilder streamBuilder = group.createStream(streamConf);
            streamBuilder.source(createMysqlSource());
            streamBuilder.sink(createKafkaSink());
            streamBuilder.initOrUpdate();
            // start group
            InlongGroupContext inlongGroupContext = group.init();
            System.out.println(inlongGroupContext);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testStopStreamGroup() {
        ClientConfiguration configuration = new ClientConfiguration();
        configuration.setWriteTimeout(10);
        configuration.setReadTimeout(10);
        configuration.setConnectTimeout(10);
        configuration.setTimeUnit(TimeUnit.SECONDS);
        configuration.setAuthentication(INLONG_AUTH);
        InlongClient inlongClient = InlongClient.create(SERVICE_URL, configuration);
        InlongGroupConf groupConf = createGroupConf();
        try {
            InlongGroup group = inlongClient.forGroup(groupConf);
            InlongGroupContext groupInfo = group.delete(true);
            System.out.println(groupInfo);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testRestartStreamGroup() {
        ClientConfiguration configuration = new ClientConfiguration();
        configuration.setWriteTimeout(10);
        configuration.setReadTimeout(10);
        configuration.setConnectTimeout(10);
        configuration.setTimeUnit(TimeUnit.SECONDS);
        configuration.setAuthentication(INLONG_AUTH);
        InlongClient inlongClient = InlongClient.create(SERVICE_URL, configuration);
        InlongGroupConf groupConf = createGroupConf();
        try {
            InlongGroup group = inlongClient.forGroup(groupConf);
            InlongGroupContext groupInfo = group.restart(true);
            System.out.println(groupInfo);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testSuspendStreamGroup() {
        ClientConfiguration configuration = new ClientConfiguration();
        configuration.setWriteTimeout(10);
        configuration.setReadTimeout(10);
        configuration.setConnectTimeout(10);
        configuration.setTimeUnit(TimeUnit.SECONDS);
        configuration.setAuthentication(INLONG_AUTH);
        InlongClient inlongClient = InlongClient.create(SERVICE_URL, configuration);
        InlongGroupConf groupConf = createGroupConf();
        try {
            InlongGroup group = inlongClient.forGroup(groupConf);
            InlongGroupContext groupInfo = group.suspend(true);
            System.out.println(groupInfo);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private KafkaSink createKafkaSink() {
        KafkaSink kafkaSink = new KafkaSink();
        kafkaSink.setDataFormat(DataFormat.CANAL);
        kafkaSink.setAddress("172.17.1.3:9092");
        kafkaSink.setTopicName("pacinogong");
        kafkaSink.setNeedCreated(false);
        kafkaSink.setSinkName("kafka");
        Map<String, Object> properties = new HashMap<>();
        properties.put("transaction.timeout.ms", 15*60*1000);
        kafkaSink.setProperties(properties);
        return kafkaSink;
    }

    private InlongStreamConf createStreamConf() {
        InlongStreamConf streamConf = new InlongStreamConf();
        streamConf.setName(STREAM_NAME);
        streamConf.setDescription(STREAM_NAME);
        streamConf.setCharset(StandardCharsets.UTF_8);
        streamConf.setDataSeparator(DataSeparator.VERTICAL_BAR);
        // true if you need strictly order for data
        streamConf.setStrictlyOrdered(true);
        streamConf.setTopic(topic);
        return streamConf;
    }

    private InlongGroupConf createGroupConf() {
        InlongGroupConf inlongGroupConf = new InlongGroupConf();
        inlongGroupConf.setGroupName(GROUP_NAME);
        inlongGroupConf.setDescription(GROUP_NAME);
        inlongGroupConf.setProxyClusterId(1);
        //pulsar conf
        TdmqPulsarBaseConf pulsarBaseConf = new TdmqPulsarBaseConf();
        pulsarBaseConf.setType(MqType.TDMQ_PULSAR);
        inlongGroupConf.setMqBaseConf(pulsarBaseConf);
        pulsarBaseConf.setNamespace("public");
        pulsarBaseConf.setEnableCreateResource(false);
        pulsarBaseConf.setTenant(tenant);

        //flink conf
        FlinkSortBaseConf sortBaseConf = new FlinkSortBaseConf();
        inlongGroupConf.setSortBaseConf(sortBaseConf);
        sortBaseConf.setServiceUrl(FLINK_URL);
        Map<String, String> map = new HashMap<>(16);
        // cluster-3pcta51b
        map.put(InlongGroupSettings.REGION, FLINK_REGION);
        map.put(Constants.INLONG_SORT_COS_BUCKET, "pre-test-1257305158");
        map.put(Constants.INLONG_SORT_COS_RESOURCENAME, "sort-single-tenant-1.1.0-incubating-SNAPSHOT.jar");
        map.put(Constants.INLONG_SORT_COS_PATH, "sort-single-tenant-1.1.0-incubating-SNAPSHOT.jar");
        map.put(Constants.INLONG_SORT_COS_REGION, FLINK_REGION);
        sortBaseConf.setProperties(map);
        //enable zk
        inlongGroupConf.setZookeeperEnabled(false);
        inlongGroupConf.setDailyRecords(10000000L);
        inlongGroupConf.setPeakRecords(100000L);
        inlongGroupConf.setMaxLength(10000);
        return inlongGroupConf;
    }

    public List<StreamField> createStreamFields() {
        List<StreamField> streamFieldList = Lists.newArrayList();
        streamFieldList.add(new StreamField(
                0, FieldType.STRING, "name", null, null
        ));
        streamFieldList.add(new StreamField(1, FieldType.INT, "age", null, null));
        return streamFieldList;
    }

    public MySQLBinlogSource createMysqlSource() {
        MySQLBinlogSource mySQLBinlogSource = new MySQLBinlogSource();
        mySQLBinlogSource.setDbNames(Arrays.asList("test"));
        mySQLBinlogSource.setHostname("9.135.81.137");
        mySQLBinlogSource.setAuthentication(new DefaultAuthentication("root", "inlong"));
        mySQLBinlogSource.setSourceName("mysql");
        mySQLBinlogSource.setAllMigration(true);
        return mySQLBinlogSource;
    }
}

```

## 写在最后

如果你在使用Manager客户端时有任何疑问，请及时与我们沟通