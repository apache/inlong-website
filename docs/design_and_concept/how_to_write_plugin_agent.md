---
title: InLong-Agent Plugin Development Guide
sidebar_position: 1
---

# InLong-Agent Plugin Development Guide

This article is aimed at InLong-Agent plug-in developers, trying to explain the process of developing an Agent plug-in as comprehensively as possible, and strive to eliminate the confusion of developers and make plug-in development easier.

## before development

As a data collection framework, InLong Agent itself is built with a channel + plugin architecture. Abstract data source reading and writing into Reader/Writer plugins, incorporated into the entire framework.

- Reader: Reader is a data collection module, which is responsible for collecting data from the data source and sending the data to the channel.
- Writer: Writer is a data writing module, responsible for continuously fetching data from the channel and writing the data to the destination.
- Channel: Channel is used to connect reader and writer, as a data transmission channel for both, and plays a role in monitoring data writing and reading

So as a developer, in fact, you only need to develop a specific Reader and Sink. If the data needs to be persisted to the local disk, use the persistent sink, otherwise use the memory sink.

## Plugin perspective to see the framework

### Logic execution model

Developers need to be clear about the concepts of Job and Task:

- `Job`: `Job` is used by Agent to describe the synchronization job from a source to a destination, and is the smallest business unit of Agent data synchronization. For example: read all files in a file directory
- `Task`: `Task` is the smallest execution unit obtained by splitting `Job`. For example, if there are multiple files in the folder that need to be read, then a job will be split into multiple tasks, and each task will read the corresponding file


### Programming interface

First, the entry class of the plug-in must implement the `Reader` or `Writer` interface. If it implements Reader, it needs to implement the corresponding Source


`Reader`
```java
private class ReaderImpl implements Reader {

    private int count = 0;

    @Override
    public Message read() {
        count += 1;
        return new DefaultMessage("".getBytes(StandardCharsets.UTF_8));
    }

    @Override
    public boolean isFinished() {
        return count > 99999;
    }

    @Override
    public String getReadSource() {
        return null;
    }

    @Override
    public void setReadTimeout(long mill) {

    }
}
```

The `Reader` interface functions as follows:
- `read`: Called by a single Task, and returns a read message after the call, and the message inside the Agent is encapsulated by Message
- `isFinished`: judge whether the reading is completed, for example: if it is an SQL task, judge whether all the contents in the ResultSet have been read; if it is a file task, judge whether there is still data written after the waiting time set by the user
- `getReadSource`: Get the acquisition source, for example: if it is a file task, it will return the file name currently read
- `setReadTimeout`: set read timeout

`Sink:`

```java
public interface Sink extends Stage {

    /**
     * Write data into data center
     *
     * @param message - message
     */
    void write(Message message);

    /**
     * set source file name where the message is generated
     * @param sourceName
     */
    void setSourceName(String sourceName);

    /**
     * every sink should include a message filter to filter out stream id
     */
    MessageFilter initMessageFilter(JobProfile jobConf);
}

```

The `Sink` interface functions as follows:
- `write`: called by a single Task, reads a message from the Channel in the Task and writes it to a specific storage medium. Taking PulsarSink as an example, it needs to be sent to Pulsar through PulsarSender
- `setSourceName`: set the data source name, if it is a file, the file name
- `initMessageFilter`: Initialize MessageFilter , the user can create a message filter to filter each message by setting agent.message.filter.classname in the Job configuration file. For details, please refer to the MessageFilter interface

`Source:`

```java
/**
 * Source can be split into multiple reader.
 */
public interface Source {

    /**
     * Split source into a list of readers.
     *
     * @param conf job conf
     * @return - list of reader
     */
    List<Reader> split(JobProfile conf);
}

```

The `Source` interface functions as follows:
- `split`: Called by a single job to generate multiple Readers, for example: a read file task, matching multiple files in a folder, when the job starts, it will specify TextFileSource as the Source entry,
  After calling the split function, TextFileSource will detect how many paths match the path matching expression in the folder set by the user, and generate TextFileReader to read

### Job and Task startup process

- 1. JOB starts, reads the Source , Sink , Channel configured by the user
- 2. According to the Source configured by the user, the Source entity is generated by reflection, and the Split function is called to generate several corresponding Readers.
- 3. For each Reader, the framework generates a Task execution, and at the same time generates the Channel and Sink corresponding to the current Reader
- 3. The Reader starts, reads the data to the Channel, and the Sink reads the data from the Channel and sends it


### plugin definition

The code is written, have you ever wondered how the framework finds the entry class of the plugin? How does the framework load plugins?

When submitting a task, you will find information about the plugin defined in the task, including the entry class. For example:

```json
{
"job": {
"name": "fileAgentTest",
"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",
"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",
"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"
}
}
```

- `source`: The fully qualified name of the Source class, the instance of which the framework imports the plugin through reflection.
- `sink`: The fully qualified name of the Sink class, the instance of which the framework imports through the reflection plugin.
- `channel`: The name of the Channel class used by the framework, the instance of the entry class of the plugin through reflection.

### Plugin data transfer

Like the general `producer-consumer` model, the `Reader` plugin and the `Sink` plugin also use `channel` to achieve data transmission.
`channel` can be in-memory or persistent, plugins don't have to care. Plugins write data to `channel` through `RecordSender` and read data from `channel` through `RecordReceiver`.

A piece of data in `channel` is a `Message` object, `Message` contains a byte array and attribute data represented by a Map

`Message` has the following methods:

```java
public interface Message {

    /**
     * Data content of message.
     *
     * @return bytes body
     */
    byte[] getBody();

    /**
     * Data attribute of message
     *
     * @return map header
     */
    Map<String, String> getHeader();
}
```

Developers can expand customized Message according to this interface. For example, ProxyMessage contains InLongGroupId, InLongStreamId and other attributes


## Last but not Least

All new plugins must have a document in the `InLong` official wiki. The document needs to include but not limited to the following:

1. **Quick introduction**: Introduce the usage scenarios and features of the plug-in.
2. **Implementation principle**: Introduce the underlying principle of plug-in implementation, such as `sqlReader` to read data in the database by executing Sql query
3. **Configuration Instructions**
    - Give the json configuration file of synchronization tasks in typical scenarios.
    - Introduce the meaning of each parameter, whether it is required, default value, value range and other constraints.
4. **Restrictions**: Are there other restrictions on use.
5. **FAQ**: Frequently asked questions by users.
