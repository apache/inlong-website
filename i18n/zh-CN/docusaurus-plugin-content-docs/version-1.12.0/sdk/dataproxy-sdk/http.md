---
title: HTTP 上报
sidebar_position: 3
---

## HTTP 上报流程介绍 
InLong 通过 DataProxy 节点处理 HTTP 上报消息，上报源定期从 Manager 获取接入点列表，然后根据自身策略从接入点列表里选择可用的 HTTP 上报节点，再采用 HTTP 协议进行数据生产。总的 HTTP 上报流程如下图示：

![](img/http_report.png)

- 心跳上报：DataProxy 定期上报心跳至 Manager，提供该节点已启用接入的 {IP，Port，Protocol，Load} 信息；

- 在线节点缓存：Manager 缓存 DataProxy 上报的心跳信息，感知集群里可用的接入节点，以及可用的上报接入信息；

- 接入点获取：HTTP SDK（数据上报源采用 DataProxy-SDK 实现的 HttpProxySender，或者据 HTTP 上报协议自行开发的 HTTP 上报 SDK）定期通过“/inlong/manager/openapi/dataproxy/getIpList/{inlongGroupId}”方法从 Manager 获取当前上报的groupId对应的可用上报接入点列表信息；

- 接入点选取：HTTP SDK 根据上报节点选取策略，选择待进行消息上报的 DataProxy 节点；

- 数据上报：HTTP SDK 根据 HTTP 上报协议构造上报消息，向选中的 DataProxy 节点发送请求消息，并在收到响应后根据响应结果做是否重发、异常输出等操作；

- 数据接纳：DataProxy 检查 HTTP 消息，如果成功接纳则返回成功响应，并将消息转发给 MQ 集群；如果消息格式或者数值不符合规范，或者消息处理失败，则 DataProxy 返回失败响应，响应里携带对应的错误码和详细的错误信息。

建议：
  由于 HTTP 上报存在性能低、有效数据占比低、请求消息容易丢失等问题，建议业务尽量用 TCP 方式进行数据上报。

## 新建实时同步任务
在 Dashboard 或者通过命令行工具创建任务，数据源类型使用 `Auto Push` (自主推送)。

## 方式一：调用 URL 上报
```bash
curl -X POST -d 'groupId=give_your_group_id&streamId=give_your_stream_id&dt=data_time&body=give_your_data_body&cnt=1' http://dataproxy_url:46802/dataproxy/message
```
- 参数说明：

| 参数       | 含义       | 备注  |
|----------|----------|-----|
| groupId  | 数据流组 id  |     |
| streamId | 数据流 ID   |     |
| body     | 推送的数据内容  |     |
| dt       | 推送的数据时间  |毫秒为单位的时间戳 |
| cnt      | 推送条数     |     |

- 返回值：

| 返回码 | 含义  |
|-----|-----|
| 1   | 成功  |
| 非1  | 失败  |

## 方式二：封装 HTTP Client（Java)
需要 `httpclient`、`commons-lang3`、`jackson-databind`，代码示例：
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