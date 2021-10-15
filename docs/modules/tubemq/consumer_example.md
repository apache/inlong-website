---
title: Consumer Example
---

## 1 Consumer Example
  TubeMQ provides two ways to consumer message, PullConsumer and PushConsumer:

### 1.1 PullConsumer 
    ```java
    public class PullConsumerExample {

        public static void main(String[] args) throws Throwable {
            final String masterHostAndPort = "localhost:8000";
            final String topic = "test";
            final String group = "test-group";
            final ConsumerConfig consumerConfig = new ConsumerConfig(masterHostAndPort, group);
            consumerConfig.setConsumePosition(ConsumePosition.CONSUMER_FROM_LATEST_OFFSET);
            final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);
            final PullMessageConsumer messagePullConsumer = messageSessionFactory.createPullConsumer(consumerConfig);
            messagePullConsumer.subscribe(topic, null);
            messagePullConsumer.completeSubscribe();
            // wait for client to join the exact consumer queue that consumer group allocated
            while (!messagePullConsumer.isPartitionsReady(1000)) {
                ThreadUtils.sleep(1000);
            }
            while (true) {
                ConsumerResult result = messagePullConsumer.getMessage();
                if (result.isSuccess()) {
                    List<Message> messageList = result.getMessageList();
                    for (Message message : messageList) {
                        System.out.println("received message : " + message);
                    }
                    messagePullConsumer.confirmConsume(result.getConfirmContext(), true);
                }
            }
        }   

    }
    ``` 
   
### 1.2 PushConsumer
    ```java
    public class PushConsumerExample {
   
        public static void test(String[] args) throws Throwable {
            final String masterHostAndPort = "localhost:8000";
            final String topic = "test";
            final String group = "test-group";
            final ConsumerConfig consumerConfig = new ConsumerConfig(masterHostAndPort, group);
            consumerConfig.setConsumePosition(ConsumePosition.CONSUMER_FROM_LATEST_OFFSET);
            final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);
            final PushMessageConsumer pushConsumer = messageSessionFactory.createPushConsumer(consumerConfig);
            pushConsumer.subscribe(topic, null, new MessageListener() {

                @Override
                public void receiveMessages(PeerInfo peerInfo, List<Message> messages) throws InterruptedException {
                    for (Message message : messages) {
                        System.out.println("received message : " + new String(message.getData()));
                    }
                }

                @Override
                public Executor getExecutor() {
                    return null;
                }

                @Override
                public void stop() {
                    //
                }
            });
            pushConsumer.completeSubscribe();
            CountDownLatch latch = new CountDownLatch(1);
            latch.await(10, TimeUnit.MINUTES);
        }
    }
    ```
