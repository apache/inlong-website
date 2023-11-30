---
title: HTTP Report
sidebar_position: 3
---

## Introduction to the HTTP Reporting Process
InLong processes HTTP report messages through DataProxy nodes：the reporting source periodically obtains the access point list from the Manager, and then selects available HTTP reporting nodes from the access point list based on its own strategy, after that uses the HTTP protocol for data production. The overall HTTP reporting process is illustrated in the following diagram:

![](img/http_report.png)

- Heartbeat reporting: DataProxy periodically reports heartbeats to the Manager, providing information about the enabled access points, including {IP, Port, Protocol, Load}.
- Online node caching: The Manager caches the heartbeat information reported by DataProxy, sensing the available access nodes in the cluster and the available reporting access information.
- Access point acquisition: The HTTP SDK (either an HttpProxySender implemented by DataProxy-SDK or an HTTP reporting SDK developed according to the HTTP reporting protocol) periodically obtains the available reporting access point list information for the current groupId by calling the "/inlong/manager/openapi/dataproxy/getIpList/{inlongGroupId}" method from the Manager.
- Access point selection: The HTTP SDK selects the DataProxy node for message reporting based on the reporting node selection strategy.
- Data reporting: The HTTP SDK constructs the reporting message according to the HTTP reporting protocol, sends the request message to the selected DataProxy node, and performs actions such as resending or exception output based on the response result after receiving the response.
- Data acceptance: DataProxy checks the HTTP message. If the message is successfully accepted, it returns a success response and forwards the message to the MQ cluster. If the message format or value does not meet the specifications, or if the message processing fails, DataProxy returns a failure response with the corresponding error code and detailed error information.

Suggestion: 
Due to the issues of low performance, low proportion of valid data, and the ease of losing request messages in HTTP reporting, it is recommended for businesses to prioritize using the TCP method for data reporting.

## Create real-time synchronization task
Create a task on the Dashboard or through the command line, and use `Auto Push` (autonomous push) as the data source type.


## Method 1: Call the interface to report (CURL)
```bash
curl -X POST -d 'groupId=give_your_group_id&streamId=give_your_stream_id&dt=data_time&body=give_your_data_body&cnt=1' http://dataproxy_url:46802/dataproxy/message
```
- Parameter Description：

| parameter | meaning                               | Remark  |
|-----------|---------------------------------------|---------|
| groupId   | Data stream group id                  |         |
| streamId  | Data stream ID                        |         |
| body      | Data content to be pushed             |         |
| dt        | Data time to be pushed                |timestamp in millisecond     |
| cnt       | The count of data pieces to be pushed |         |

- Return Value：

| return value | meaning |
|--------------|---------|
| 0            | Success |
| !=0          | Failure |

## Method 2：Encapsulate the HTTP client（Java)
The following packages need to be imported first `httpclient`、`commons-lang3`、`jackson-databind` code example:
```java
public class DataPush {

    private static CloseableHttpClient httpClient;
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();
    private final Random rand = new Random();

    private String sendByHttp(List<String> bodies, String groupId, String streamId, long dataTime,
            long timeout, TimeUnit timeUnit, List<String> addresses) throws Exception {
        if (null == addresses || addresses.isEmpty()) {
            throw new RuntimeException("addresses are null");
        }
        HttpPost httpPost = null;
        CloseableHttpResponse response = null;
        try {
            if (httpClient == null) {
                httpClient = constructHttpClient(timeout, timeUnit);
            }
            int randomNum = rand.nextInt((addresses.size() - 1) + 1);
            String url = "http://" + addresses.get(randomNum) + "/dataproxy/message";

            httpPost = new HttpPost(url);
            httpPost.setHeader(HttpHeaders.CONNECTION, "close");
            httpPost.setHeader(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded");
            ArrayList<BasicNameValuePair> contents = getContents(bodies, groupId, streamId, dataTime);
            String s = URLEncodedUtils.format(contents, StandardCharsets.UTF_8);
            httpPost.setEntity(new StringEntity(s));

            response = httpClient.execute(httpPost);
            String returnStr = EntityUtils.toString(response.getEntity());

            if (StringUtils.isNotBlank(returnStr) && response.getStatusLine().getStatusCode() == 200) {
                JsonNode jsonNode = OBJECT_MAPPER.readTree(returnStr);
                if (jsonNode.has("code")) {
                    int code = jsonNode.get("code").asInt();
                    if (code == 0) {
                        return "success";
                    } else {
                        return "fail";
                    }
                }

            } else {
                throw new Exception("exception to get response from request " + returnStr + " "
                        + response.getStatusLine().getStatusCode());
            }

        } finally {
            if (httpPost != null) {
                httpPost.releaseConnection();
            }
            if (response != null) {
                response.close();
            }
        }
        return "fail";
    }

    private static synchronized CloseableHttpClient constructHttpClient(long timeout, TimeUnit timeUnit) {
        if (httpClient != null) {
            return httpClient;
        }
        long timeoutInMs = timeUnit.toMillis(timeout);
        RequestConfig requestConfig = RequestConfig.custom()
                .setConnectTimeout((int) timeoutInMs)
                .setSocketTimeout((int) timeoutInMs).build();
        HttpClientBuilder httpClientBuilder = HttpClientBuilder.create();
        httpClientBuilder.setDefaultRequestConfig(requestConfig);
        return httpClientBuilder.build();
    }

    private static ArrayList<BasicNameValuePair> getContents(List<String> bodies,
            String groupId, String streamId, long dt) {
        ArrayList<BasicNameValuePair> params = new ArrayList<BasicNameValuePair>();
        params.add(new BasicNameValuePair("groupId", groupId));
        params.add(new BasicNameValuePair("streamId", streamId));
        params.add(new BasicNameValuePair("dt", String.valueOf(dt)));
        params.add(new BasicNameValuePair("body", StringUtils.join(bodies, "\n")));
        params.add(new BasicNameValuePair("cnt", String.valueOf(bodies.size())));
        return params;
    }
}
```