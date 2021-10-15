---
title: 生产者示例
---

## 1 Producer 示例
TubeMQ提供了两种方式来初始化 session factory: TubeSingleSessionFactory 和 TubeMultiSessionFactory。
  - TubeSingleSessionFactory 在整个生命周期只会创建一个 session
  - TubeMultiSessionFactory 每次调用都会创建一个session

### 1.1 TubeSingleSessionFactory
   #### 1.1.1 Send Message Synchronously
     ```java
     public final class SyncProducerExample {
    
        public static void main(String[] args) throws Throwable {
            final String masterHostAndPort = "localhost:8000";
            final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);
            final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(clientConfig);
            final MessageProducer messageProducer = messageSessionFactory.createProducer();
            final String topic = "test";
            final String body = "This is a test message from single-session-factory!";
            byte[] bodyData = StringUtils.getBytesUtf8(body);
            messageProducer.publish(topic);
            Message message = new Message(topic, bodyData);
            MessageSentResult result = messageProducer.sendMessage(message);
            if (result.isSuccess()) {
                System.out.println("sync send message : " + message);
            }
            messageProducer.shutdown();
        }
    }
    ```
     
   #### 1.1.2 Send Message Asynchronously
     ```java
     public final class AsyncProducerExample {
     
        public static void main(String[] args) throws Throwable {
            final String masterHostAndPort = "localhost:8000";
            final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);
            final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(clientConfig);
            final MessageProducer messageProducer = messageSessionFactory.createProducer();
            final String topic = "test";
            final String body = "async send message from single-session-factory!";
            byte[] bodyData = StringUtils.getBytesUtf8(body);
            messageProducer.publish(topic);
            final Message message = new Message(topic, bodyData);
            messageProducer.sendMessage(message, new MessageSentCallback(){
                @Override
                public void onMessageSent(MessageSentResult result) {
                    if (result.isSuccess()) {
                        System.out.println("async send message : " + message);
                    } else {
                        System.out.println("async send message failed : " + result.getErrMsg());
                    }
                }
                @Override
                public void onException(Throwable e) {
                    System.out.println("async send message error : " + e);
                }
            });
            messageProducer.shutdown();
        }

    }
    ```
     
   #### 1.1.3 Send Message With Attributes
     ```java
     public final class ProducerWithAttributeExample {
     
        public static void main(String[] args) throws Throwable {
            final String masterHostAndPort = "localhost:8000";
            final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);
            final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(clientConfig);
            final MessageProducer messageProducer = messageSessionFactory.createProducer();
            final String topic = "test";
            final String body = "send message with attribute from single-session-factory!";
            byte[] bodyData = StringUtils.getBytesUtf8(body);
            messageProducer.publish(topic);
            Message message = new Message(topic, bodyData);
            //set attribute
            message.setAttrKeyVal("test_key", "test value");
            //msgType is used for consumer filtering, and msgTime(accurate to minute) is used as the pipe to send and receive statistics
            SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmm");
            message.putSystemHeader("test", sdf.format(new Date()));
            messageProducer.sendMessage(message);
            messageProducer.shutdown();
        }

    }
    ```
     
### 1.2 TubeMultiSessionFactory

    ```java
    public class MultiSessionProducerExample {
        
        public static void main(String[] args) throws Throwable {
            final int SESSION_FACTORY_NUM = 10;
            final String masterHostAndPort = "localhost:8000";
            final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);
            final List<MessageSessionFactory> sessionFactoryList = new ArrayList<>(SESSION_FACTORY_NUM);
            final ExecutorService sendExecutorService = Executors.newFixedThreadPool(SESSION_FACTORY_NUM);
            final CountDownLatch latch = new CountDownLatch(SESSION_FACTORY_NUM);
            for (int i = 0; i < SESSION_FACTORY_NUM; i++) {
                TubeMultiSessionFactory tubeMultiSessionFactory = new TubeMultiSessionFactory(clientConfig);
                sessionFactoryList.add(tubeMultiSessionFactory);
                MessageProducer producer = tubeMultiSessionFactory.createProducer();
                Sender sender = new Sender(producer, latch);
                sendExecutorService.submit(sender);
            }
            latch.await();
            sendExecutorService.shutdownNow();
            for (MessageSessionFactory sessionFactory : sessionFactoryList) {
                sessionFactory.shutdown();
            }
        }
    
        private static class Sender implements Runnable {
            
            private MessageProducer producer;
            
            private CountDownLatch latch;
    
            public Sender(MessageProducer producer, CountDownLatch latch) {
                this.producer = producer;
                this.latch = latch;
            }
    
            @Override
            public void run() {
                final String topic = "test";
                try {
                    producer.publish(topic);
                    final byte[] bodyData = StringUtils.getBytesUtf8("This is a test message from multi-session factory");
                    Message message = new Message(topic, bodyData);
                    producer.sendMessage(message);
                    producer.shutdown();
                } catch (Throwable ex) {
                    System.out.println("send message error : " + ex);
                } finally {
                    latch.countDown();
                }
            }
        }
    }
    ```
---
<a href="#top">Back to top</a>    
