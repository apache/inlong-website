---
title: HTTP Report
sidebar_position: 3
---

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