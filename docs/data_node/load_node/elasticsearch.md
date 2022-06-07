---
title: Elasticsearch
sidebar_position: 8
---

## Elasticsearch Load Node

The Elasticsearch Load Node allows for writing into an index of the Elasticsearch engine. This document describes how to setup the Elasticsearch Load Node to run SQL queries against Elasticsearch.

The Load Node can operate in upsert mode for exchanging UPDATE/DELETE messages with the external system using the primary key defined on the DDL.

If no primary key is defined on the DDL, the connector can only operate in append mode for exchanging INSERT only messages with external system.

### Dependencies

- Elasticsearch 6

```
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-elasticsearch6</artifactId>
    <version>inlong_version</version>
</dependency>
```
- Elasticsearch 7

```
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-elasticsearch7</artifactId>
    <version>inlong_version</version>
</dependency>
```

### How to create an Elasticsearch Load Node

The example below shows how to create an Elasticsearch Load Node:

```sql
CREATE TABLE myUserTable (
  user_id STRING,
  user_name STRING,
  uv BIGINT,
  pv BIGINT,
  PRIMARY KEY (user_id) NOT ENFORCED
) WITH (
  'connector' = 'elasticsearch-7',
  'hosts' = 'http://localhost:9200',
  'index' = 'users'
);
```

### Connector Options

<table class="table table-bordered">
    <thead>
      <tr>
        <th class="text-left" style="width: 25%">Option</th>
        <th class="text-center" style="width: 8%">Required</th>
        <th class="text-center" style="width: 8%">Forwarded</th>
        <th class="text-center" style="width: 7%">Default</th>
        <th class="text-center" style="width: 10%">Type</th>
        <th class="text-center" style="width: 42%">Description</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td><h5>connector</h5></td>
      <td>required</td>
      <td>no</td>
      <td style="word-wrap: break-word;">(none)</td>
      <td>String</td>
      <td>Specify what connector to use, valid values are:
      <ul>
      <li><code>elasticsearch-6</code>: connect to Elasticsearch 6.x cluster.</li>
      <li><code>elasticsearch-7</code>: connect to Elasticsearch 7.x cluster.</li>
      </ul></td>
    </tr>
    <tr>
      <td><h5>hosts</h5></td>
      <td>required</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">(none)</td>
      <td>String</td>
      <td>One or more Elasticsearch hosts to connect to, e.g. <code>'http://host_name:9092;http://host_name:9093'</code>.</td>
    </tr>
    <tr>
      <td><h5>index</h5></td>
      <td>required</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">(none)</td>
      <td>String</td>
      <td>Elasticsearch index for every record. Can be a static index (e.g. <code>'myIndex'</code>) or
       a dynamic index (e.g. <code>'index-{log_ts|yyyy-MM-dd}'</code>).
       See the following <a href="#dynamic-index">Dynamic Index</a> section for more details.</td>
    </tr>
    <tr>
      <td><h5>document-type</h5></td>
      <td>required in 6.x</td>
      <td>yes in 6.x</td>
      <td style="word-wrap: break-word;">(none)</td>
      <td>String</td>
      <td>Elasticsearch document type. Not necessary anymore in <code>elasticsearch-7</code>.</td>
    </tr>
    <tr>
      <td><h5>document-id.key-delimiter</h5></td>
      <td>optional</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">_</td>
      <td>String</td>
      <td>Delimiter for composite keys ("_" by default), e.g., "$" would result in IDs "KEY1$KEY2$KEY3".</td>
    </tr>
    <tr>
      <td><h5>username</h5></td>
      <td>optional</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">(none)</td>
      <td>String</td>
      <td>Username used to connect to Elasticsearch instance. Please notice that Elasticsearch doesn't pre-bundled security feature, but you can enable it by following the <a href="https://www.elastic.co/guide/en/elasticsearch/reference/master/configuring-security.html">guideline</a> to secure an Elasticsearch cluster.</td>
    </tr>
    <tr>
      <td><h5>password</h5></td>
      <td>optional</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">(none)</td>
      <td>String</td>
      <td>Password used to connect to Elasticsearch instance. If <code>username</code> is configured, this option must be configured with non-empty string as well.</td>
    </tr>
    <tr>
      <td><h5>failure-handler</h5></td>
      <td>optional</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">fail</td>
      <td>String</td>
      <td>Failure handling strategy in case a request to Elasticsearch fails. Valid strategies are:
      <ul>
        <li><code>fail</code>: throws an exception if a request fails and thus causes a job failure.</li>
        <li><code>ignore</code>: ignores failures and drops the request.</li>
        <li><code>retry-rejected</code>: re-adds requests that have failed due to queue capacity saturation.</li>
        <li>custom class name: for failure handling with a ActionRequestFailureHandler subclass.</li>
      </ul>
      </td>
    </tr>
    <tr>
      <td><h5>sink.flush-on-checkpoint</h5></td>
      <td>optional</td>
      <td></td>
      <td style="word-wrap: break-word;">true</td>
      <td>Boolean</td>
      <td>Flush on checkpoint or not. When disabled, a sink will not wait for all pending action requests
       to be acknowledged by Elasticsearch on checkpoints. Thus, a sink does NOT provide any strong
       guarantees for at-least-once delivery of action requests.
      </td>
    </tr>
    <tr>
      <td><h5>sink.bulk-flush.max-actions</h5></td>
      <td>optional</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">1000</td>
      <td>Integer</td>
      <td>Maximum number of buffered actions per bulk request.
      Can be set to <code>'0'</code> to disable it.
      </td>
    </tr>
    <tr>
      <td><h5>sink.bulk-flush.max-size</h5></td>
      <td>optional</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">2mb</td>
      <td>MemorySize</td>
      <td>Maximum size in memory of buffered actions per bulk request. Must be in MB granularity.
      Can be set to <code>'0'</code> to disable it.
      </td>
    </tr>
    <tr>
      <td><h5>sink.bulk-flush.interval</h5></td>
      <td>optional</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">1s</td>
      <td>Duration</td>
      <td>The interval to flush buffered actions.
        Can be set to <code>'0'</code> to disable it. Note, both <code>'sink.bulk-flush.max-size'</code> and <code>'sink.bulk-flush.max-actions'</code>
        can be set to <code>'0'</code> with the flush interval set allowing for complete async processing of buffered actions.
      </td>
    </tr>
    <tr>
      <td><h5>sink.bulk-flush.backoff.strategy</h5></td>
      <td>optional</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">DISABLED</td>
      <td>String</td>
      <td>Specify how to perform retries if any flush actions failed due to a temporary request error. Valid strategies are:
      <ul>
        <li><code>DISABLED</code>: no retry performed, i.e. fail after the first request error.</li>
        <li><code>CONSTANT</code>: wait for backoff delay between retries.</li>
        <li><code>EXPONENTIAL</code>: initially wait for backoff delay and increase exponentially between retries.</li>
      </ul>
      </td>
    </tr>
    <tr>
      <td><h5>sink.bulk-flush.backoff.max-retries</h5></td>
      <td>optional</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">(none)</td>
      <td>Integer</td>
      <td>Maximum number of backoff retries.</td>
    </tr>
    <tr>
      <td><h5>sink.bulk-flush.backoff.delay</h5></td>
      <td>optional</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">(none)</td>
      <td>Duration</td>
      <td>Delay between each backoff attempt. For <code>CONSTANT</code> backoff, this is simply the delay between each retry. For <code>EXPONENTIAL</code> backoff, this is the initial base delay.</td>
    </tr>
    <tr>
      <td><h5>connection.path-prefix</h5></td>
      <td>optional</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">(none)</td>
      <td>String</td>
      <td>Prefix string to be added to every REST communication, e.g., <code>'/v1'</code>.</td>
    </tr>
    <tr>
      <td><h5>connection.request-timeout</h5></td>
      <td>optional</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">(none)</td>
      <td>Duration</td>
      <td>The timeout in milliseconds for requesting a connection from the connection manager.
        The timeout must be larger than or equal to 0.
        A timeout value of zero is interpreted as an infinite timeout.
      </td>
    </tr>
    <tr>
      <td><h5>connection.timeout</h5></td>
      <td>optional</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">(none)</td>
      <td>Duration</td>
      <td>The timeout in milliseconds for establishing a connection.
        The timeout must be larger than or equal to 0.
        A timeout value of zero is interpreted as an infinite timeout.
      </td>
    </tr>
    <tr>
      <td><h5>socket.timeout</h5></td>
      <td>optional</td>
      <td>yes</td>
      <td style="word-wrap: break-word;">(none)</td>
      <td>Duration</td>
      <td>The socket timeout (SO_TIMEOUT) for waiting for data or, put differently,
        a maximum period inactivity between two consecutive data packets.
        The timeout must be larger than or equal to 0.
        A timeout value of zero is interpreted as an infinite timeout.
      </td>
    </tr>
    <tr>
      <td><h5>format</h5></td>
      <td>optional</td>
      <td>no</td>
      <td style="word-wrap: break-word;">json</td>
      <td>String</td>
      <td>Elasticsearch connector supports to specify a format. The format must produce a valid json document.
       By default uses built-in <code>'json'</code> format. Please refer to <a href="{{< ref "docs/connectors/table/formats/overview" >}}">JSON Format</a> page for more details.
      </td>
    </tr>
    </tbody>
</table>

### Data Type Mapping

<table class="table table-bordered">
    <thead>
      <tr>
        <th class="text-left">JSON type</th>
        <th class="text-left">Flink SQL type</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td><code>string</code></td>
      <td><code>CHAR / VARCHAR / STRING</code></td>
    </tr>
    <tr>
      <td><code>boolean</code></td>
      <td><code>BOOLEAN</code></td>
    </tr>
    <tr>
      <td><code>string with encoding: base64</code></td>
      <td><code>BINARY / VARBINARY</code></td>
    </tr>
    <tr>
      <td><code>number</code></td>
      <td><code>DECIMAL</code></td>
    </tr>
    <tr>
      <td><code>number</code></td>
      <td><code>TINYINT</code></td>
    </tr>
    <tr>
      <td><code>number</code></td>
      <td><code>SMALLINT</code></td>
    </tr>
    <tr>
      <td><code>number</code></td>
      <td><code>INT</code></td>
    </tr>
    <tr>
      <td><code>number</code></td>
      <td><code>BIGINT</code></td>
    </tr>
    <tr>
      <td><code>number</code></td>
      <td><code>FLOAT</code></td>
    </tr>
    <tr>
      <td><code>number</code></td>
      <td><code>DOUBLE</code></td>
    </tr>
    <tr>
      <td><code>string with format: date</code></td>
      <td><code>DATE</code></td>
    </tr>
    <tr>
      <td><code>string with format: time</code></td>
      <td><code>TIME</code></td>
    </tr>
    <tr>
      <td><code>string with format: date-time</code></td>
      <td><code>TIMESTAMP</code></td>
    </tr>
    <tr>
      <td><code>string with format: date-time (with UTC time zone)</code></td>
      <td><code>TIMESTAMP_WITH_LOCAL_TIME_ZONE</code></td>
    </tr>
    <tr>
      <td><code>number</code></td>
      <td><code>INTERVAL</code></td>
    </tr>
    <tr>
      <td><code>array</code></td>
      <td><code>ARRAY</code></td>
    </tr>
    <tr>
      <td><code>object</code></td>
      <td><code>MAP / MULTISET</code></td>
    </tr>
    <tr>
      <td><code>object</code></td>
      <td><code>ROW</code></td>
    </tr>
    </tbody>
</table>