---
title: Error Code
---

## 1 Introduction of TubeMQ Error

TubeMQ use `errCode` and `errMsg` combined to return specific operation result. Firstly, determine the type of result(problem) by errCode, and then determine the specific reson of the errCode based on errMsg. The following table summarizes all the errCodes and errMsgs that may return during operation.

## 2 errCodes

| Error Type | errCode | Error Mark | Meaning | Note |
| ---------- | ------- | ---------- | ------- | ---- |
| Operation Success | 200 | Operation Success| Success. ||
| Operation Success| 201| NOT_READY | The request is accepted, but the server is not ready or the service is not running.| unused now, reserved. ||
| Temporary Conflict Resolved | 301 | MOVED| Temporary switching of data results in an unsuccessful operation and a request for a new operation needs to be initiated. ||
| Client Error | 400 | BAD_REQUEST| Client error, including parameter error, status error, etc. |Refer to ErrMsg for detail to location the error. |
| Client Error | 401| UNAUTHORIZED| Unauthorized operation, make sure that the client has permission to perform the operation. | Need to check configuration. ||
| Client Error | 403| FORBIDDEN | Topic not found or already deleted. |||
| Client Error | 404| NOT_FOUND | Consumer has reach the max offset of the topic. |||
| Client Error | 405| ALL_PARTITION_FROZEN | All available partitions are frozen. | The available partition has been frozen by the client, and it needs to be unfrozen or wait a while and try again. ||
| Client Error | 406| NO_PARTITION_ASSIGNED | The current client is not allocated a partition for consumption. | The number of clients exceeds the number of partitions, or the server has not performed load balancing operations, so you need to wait and try again. ||
| Client Error | 407| ALL_PARTITION_WAITING | The current available partitions have reached the maximum consumption position. | Need to wait and try again. ||
| Client Error | 408| ALL_PARTITION_INUSE | Currently available partitions are all used by business but not released. | Need to wait for the business logic to call the confirm API to release the partition, wait and try again. ||
| Client Error | 410| PARTITION_OCCUPIED| Partition consumption conflicts. Ignore it. | Temporary status of internal registration. ||
| Client Error | 411| HB_NO_NODE| Node timeout, need to reduce the frequency of the operation and wait a while before retrying. | It usually occurs when the heartbeat sent from client to the server is timeout, try to reduce the operation frequency and wait for a while for the lib to register successfully before retrying the process. ||
| Client Error | 412| DUPLICATE_PARTITION | Partition consumption conflicts. Ignore it. | Usually caused by node timeout, retry it. ||
| Client Error | 415| CERTIFICATE_FAILURE | Authorization fails, including user authentication and operational authorization. | Usually occurs when the user name and password are inconsistent, the operation is not authorized. ||
| Client Error | 419| SERVER_RECEIVE_OVERFLOW | Server receives overflow and need to retry. | For long-term overflow, try to expand the storage instance or expand the memory cache size. ||
| Client Error | 450| CONSUME_GROUP_FORBIDDEN | Consumer group is forbidden. |||
| Client Error | 452| SERVER_CONSUME_SPEED_LIMIT| Consumption speed is limited. |||
| Client Error | 455| CONSUME_CONTENT_FORBIDDEN | Consumption is rejected, including that the consumer group is forbidden to filter consume and The filter `streamId` set does not match the allowed `streamId` set, etc. | Confirm the setting of filter of message.  ||
| Server Error | 500 | INTERNAL_SERVER_ERROR| Internal server error | Refer to ErrMsg for detail to location the error. |
| Server Error| 503| SERVICE_UNAVILABLE| Temporary ban on reading or writing for business. | Retry it. ||
| Server Error| 510| INTERNAL_SERVER_ERROR_MSGSET_NULL | Can not read Message Set. | Retry it. ||

## 3 Common errMsgs

| Record ID | errMsg | Meaning | Note |
| --------- | ------ | ------- | ---- |
| 1      | Status error: producer has been shutdown! | Producer has been shutdown. ||
| 2      | Illegal parameter: blank topic! | parameter error: blank topic ||
| 3      | Illegal parameter: topicSet is null or empty! | parameter error: empty topic ||
| 4      | Illegal parameter: found blank topic value in topicSet: xxxxx | parameter error: The topic set contains an empty topic. ||
| 5      | Send message failed | Send message failed. ||
| 6      | Illegal parameter: null message package! | Empty message package. ||
| 7      | Illegal parameter: null data in message package! | Empty message content. ||
| 8      | Illegal parameter: over max message length for the total size of message data and attribute, allowed size is XX, message's real size is YY | Message length over specified maximum length. ||
| 9      | Topic XX not publish, please publish first! | Topic is not published yet. ||
| 10     | Topic XX not publish, make sure the topic exist or acceptPublish and try later! | Topic is not published yet or not exist. ||
| 11     | Null partition for topic: XX, please try later! | Topic has not been assigned to a partition. ||
| 12     | No available partition for topic: XX | No available partition. ||
| 13     | Current delayed messages over max allowed count, allowed is xxxxx, current count is yyyy | The number of unanswered messages currently stranded exceeds the allowed value. | Send again later. The maximum amount can be changed by `TubeClientConfig.setSessionMaxAllowedDelayedMsgCount()`, 400000 as default. |
| 14     | The brokers of topic are all forbidden! | Brokers of the topic are blocked due to network problem. | Retry later when the blocking strategy is lifted. |
| 15     | Not found available partition for topic: XX | Can not find available partition. | Partition exists but blocked due to network problem. |
| 16     | Channel is not writable, please try later! | Channel is not writable now. | Modify buffer size by `TubeClientConfig.setNettyWriteBufferHighWaterMark()`, 10M as default. |
| 17     | Put message failed from xxxxx, server receive message overflow! | Server is overloaded when storing messages | Retry sending. If error persists, try to expand the storage size. |
| 18     | Write StoreService temporary unavailable! | Temporary invalid writing operation towards corresponding server. | Retry sending message. If error presists, adjust the partition distribution on the broker, and deal with the abnormal brokers. |
| 19     | Topic xxx not existed, please check your configure | Topic does not exist. | It is possible that the topic was deleted by the administrator during production. Contact the administrator to deal with it. |
| 20     | Partition[xxx:yyy] has been closed | Topic has been deleted. | It is possible that the topic was deleted by the administrator during the production. Contact the administrator to deal with it. |
| 21     | Partition xxx-yyy not existed, please check your configure | Topic does not exist. | Partitions will only be increased, contact the administrator to deal with the situation. |
| 22     | Checksum failure xxx of yyyy not equal to the data's checksum | Inconsistent checksum. | The checksum of the content is incorrectly calculated, or is tampered with during transmission. |
| 23     | Put message failed from xxxxx | Message storage failure. | Retry. Also send the error message to the administrator to confirm the cause of the problem. |
| 24     | Put message failed from | Message storage failure. | Retry. Also send the error message to the administrator to confirm the cause of the problem. |
| 25     | Null brokers to select sent, please try later! | No available broker fro sending message now. | Retry later. If error presists, it may be some exception with broker or there is too many incomplete messages, check the status of broker. |
| 26     | Publish topic failure, make sure the topic xxx exist or acceptPublish and try later! | publish topic failed, make sure that the topic exists and is writable | This error is reported when `void publish(final String topic)` interface is called and the topic is not local or does not exist. Wait about 1 minute or use `Set<String> publish(Set<String> topicSet)` interface to finish publishing the topic. |
| 27     | Register producer failure, response is null! | Fail to register producer. | Contact administrator to deal with it. |
| 28     | Register producer failure, error is XXX | Fail to register producer for some reason. | Check the problem against the cause of the error, and if it is still wrong, contact the administrator. |
| 29     | Register producer exception, error is XXX | Fail to register producer for some reason. | Check the problem against the cause of the error, and if it is still wrong, contact the administrator. |
| 30     | Status error: please call start function first! | Call `start()` firstly. | Producer is not created from sessionFactory, call `createProducer()` in sessionfactory first. |
| 31     | Status error: producer service has been shutdown!| Producer has been shutdowned. | Producer has been shutdowned and stop calling any function. |
| 32     | Listener is null for topic XXX | Callback Listener passed against a topic is null. | Input parameters are not valid, need to check code. |
| 33     | Please complete topic's Subscribe call first! | Call `subscribe()` of the topic first. | Complete the topic subscription before consuming. |
| 34     | ConfirmContext is null ! | Empty ConfirmContext content, illegal contexts. | Check the call of function in code. |
| 35     | ConfirmContext format error: value must be aaaa:bbbb:cccc:ddddd ! | ConfirmContext format incorrect. | Check the call of function in code. |
| 36     | ConfirmContext's format error: item (XXX) is null ! | ConfirmContext contain blank content. | Check the call of function in code. |
| 37     | The confirmContext's value invalid! | Invalid ConfirmContext content. | It is possible that the context does not exist, or has expired because the load balancing corresponding partition has been released. |
| 38     | Confirm XXX 's offset failed! | Fail to confirm offset. | Confirm the cause of the problem based on the log details, and if the problem persists, contact administrator to resolve it. |
| 39     | Not found the partition by confirmContext:XXX | Can not find the coresponding partition. | The corresponding load balancing partition on the server is released. |
| 40     | Illegal parameter: messageSessionFactory or consumerConfig is null! | messageSessionFactory or consumerConfig is null | Check the object initialization logic and the configuration. |
| 41     | Get consumer id failed! | Fail to generate uuid for consumer. | Contact the system administrator to check the exception stack information where error presists. |
| 42     | Parameter error: topic is Blank! | topic inputed is blank.| Blank includes arguments that are null, arguments inputed that are not null but have a content length of 0, or content with the whitespace character |
| 43     | Parameter error: Over max allowed filter count, allowed count is XXX | The number of filter items exceeds the maximum allowed by the system. | Parameter error and modify the amount. |
| 44     | Parameter error: blank filter value in parameter filterConds! | filterConds contain blank content. | Parameter error and modify the parameter. |
| 45     | Parameter error: over max allowed filter length, allowed length is XXX | Exceeded filter length. ||
| 46     | Parameter error: null messageListener | MessageListener inputed is null. |
| 47     | Topic=XXX has been subscribed| Subscribe topic duplicately. ||
| 48     | Not subscribe any topic, please subscribe first! | No topic subscribed. | Check business code for inappropriate call of function. |
| 49     | Duplicated completeSubscribe call! | Call `completeSubscribe()` duplicately. | Check business code for inappropriate call of function. |
| 50     | Subscribe has finished! | Call `completeSubscribe()` duplicately. ||
| 51     | Parameter error: sessionKey is Blank! | Parameter error: sessionKey is not allowed to be blank.||
| 52     | Parameter error: sourceCount must over zero! | Parameter error: sourceCount must over zero! ||
| 53     | Parameter error: partOffsetMap's key XXX format error: value must be aaaa:bbbb:cccc ! | Parameter error: The key content of the partOffsetMap must be in "aaaa:bbbb:cccc" format. ||
| 54     | Parameter error: not included in subscribed topic list: partOffsetMap's key is XXX , subscribed topics are YYY | Parameter error: The specified topic does not exist in the subscription list. ||
| 55     | Parameter error: illegal format error of XXX: value must not include ',' char!" | Parameter error: cannot contain the "," character. ||
| 56     | Parameter error: Offset must over or equal zero of partOffsetMap key XXX, value is YYY | Parameter error: Offset must over or equal zero. ||
| 57     | Duplicated completeSubscribe call! | Call `completeSubscribe()` duplicately. ||
| 58     | Register to master failed! ConsumeGroup forbidden, XXX | Fail to register to master. Consumer group is forbidden | Server prohibits this operation, contact administrator to deal with it. |
| 59     | Register to master failed! Restricted consume content, XXX | Fail to register to master, and comsumption is limited. | Filter consumption of `streamId` sets that are not within the scope of the requested set. |
| 60     | Register to master failed! please check and retry later. | Fail to register to master, retry it. | In this case, check the client log to confirm the cause of the problem, and then contact the administrator to verify that there is no abnormal log and the master address is correct. |
| 61     | Get message error, reason is XXX | Pull message fail by some reason. | Submit the relevant error message to the relevant business owner for action, aligning the cause with the specific error message. |
| 62     | Get message null | Message pulled from topic is null. | Retry it. |
| 63     | Get message failed, topic=XXX,partition=YYY, throw info is ZZZ | Failed to pull message. | Submit the relevant error message to the relevant business owner for action, aligning the cause with the specific error message. |
| 64     | Status error: consumer has been shutdown | The consumer has called shutdown and should not continue to call other functions. ||
| 65     | All partition in waiting, retry later! | All partition in waiting status, retry later. | This erMsg can be ignored, pulling thread will sleep 200-400ms in this case. |
| 66     | The request offset reached maxOffset | The request partition has reached the max offset | Modify the period of waiting for new message in a partition by `ConsumerConfig.setMsgNotFoundWaitPeriodMs()` |
| 67     | No partition info in local, please wait and try later | There is no partition information locally, you need to wait and try again | Possible situations include that the server has not rebalanced, or the number of clients is greater than the number of partitions |
| 68     | No idle partition to consume, please wait and try later | There is no free partition for consumption, need to wait and try again | Need to wait for the business logic to call the confirm API to release the partition, wait and try again |
| 69     | All partition are frozen to consume, please unfreeze partition(s) or wait | All partitions are frozen | It is possible that the business calls the freeze interface to freeze the partitionable consumption, and the business needs to call the unfreeze API to unfreeze |

If there is error not mentioned above, please do contact us.

---
<a href="#top">Back to top</a>