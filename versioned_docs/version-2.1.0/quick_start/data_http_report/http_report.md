---
title: HTTP Report Example
sidebar_position: 1
---

In the following content, we will use a complete example to introduce how to use HTTP to report data, quickly verify whether the applied {groupId, streamId} is effective, and whether the data is accepted by InLong DataProxy and correctly written to the MQ cluster.

## Prepare resources
### Apply for InLong group and stream
We need to apply for {groupId, streamId} in InLong Manager first. As shown in the following figure, we have applied for {test_http, test_stream} information and the administrator has approved it:
![prepare group and stream](img/http_group_stream_en.png)

In the application report stream, we defined that the data of this report stream is reported in CSV format. The data content consists of three fields (ID, Name, Desc) separated by vertical bars ("|"):
![define report stream](img/http_stream_define_en.png)

### Find the IP and port of the DataProxy node that supports HTTP access
InLong supports direct data reporting via HTTP. In this reporting example, we directly select a DataProxy that supports HTTP reporting from the resource details page of the InLong group to report the message. In the demonstration environment, the HTTP receiving port opened by DataProxy is 47805, as shown below:
![DataProxy information](img/http_dataproxy_en.png)

At this point, we have obtained the InLong group and stream information required for data reporting, as well as the DataProxy node IP and port information to be reported by HTTP reporting. Next, we can report data through HTTP to verify whether the requested InLong group and stream, pipeline are available. 

## Report data via HTTP
According to the HTTP reporting protocol requirements of InLong, we use curl tool to construct an HTTP instruction as shown below for execution. In the body part, we construct a record containing three field values according to the format definition of test_stream. {dataproxy_ip:dataproxy_httpport} is the DataProxy IP and port for receiving the reported message. You can replace it with the corresponding information in your environment:

```bash
curl -X POST -d 'groupId=test_http&streamId=test_stream&dt=data_time&body=1|name_1|desc_record_one&cnt=1' http://{dataproxy_ip:dataproxy_httpport}/dataproxy/message
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

## Check the reported data
We use the data preview function of the data stream test_http:test_stream to view the HTTP reporting status. This function directly samples the latest data from the MQ cluster corresponding to the data stream:
![data_preview](img/http_data_preview_en.png)

We can see that the data just reported has been successfully written to the MQ cluster:
![viewed_data](img/http_data_view_en.png)

At this point, we quickly and clearly know that the requested InLong group and stream, as well as the pipeline resources, are all available.

## FAQ
The return code and error message in the HTTP response will clearly indicate the specific cause of the error, such as the group or stream does not exist, the reporting protocol format is not equal, etc., and the problem can be quickly solved by adjusting according to the corresponding error prompt or aligning with the system administrator.