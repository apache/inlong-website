---
title: HTTP 上报
sidebar_position: 3
---

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
| dt       | 推送的数据时间  |     |
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