## Consumer 示例
  TubeMQ 提供了两种方式来消费消息： PullConsumer and PushConsumer。

### PullConsumer 
   ```
   public class PullConsumerExample {
   
       public static void main(String[] args) throws Throwable {
           final String localHostIP = "127.0.0.1";
           final String masterHostAndPort = "localhost:8000";
           final String topic = "test";
           final String group = "test-group";
           final ConsumerConfig consumerConfig = new ConsumerConfig(localHostIP, masterHostAndPort, group);
           /* consumeModel
            *  Set the start position of the consumer group. The value can be [-1, 0, 1]. Default value is 0.
            * -1: Start from 0 for the first time. Otherwise start from last consume position.
            *  0: Start from the latest position for the first time. Otherwise start from last consume position.
            *  1: Start from the latest consume position.
           */
           consumerConfig.setConsumeModel(0);
           final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);
           final PullMessageConsumer messagePullConsumer = messageSessionFactory.createPullConsumer(consumerConfig);
           messagePullConsumer.subscribe(topic, null);
           messagePullConsumer.completeSubscribe();
           // wait for client to join the exact consumer queue that consumer group allocated
           while (!messagePullConsumer.isPartitionsReady(1000)) {
               ThreadUtils.sleep(1000);
           }
           while(true){
               ConsumerResult result = messagePullConsumer.getMessage();
               if (result.isSuccess()) {
                   List<Message> messageList = result.getMessageList();
                   for (Message message : messageList) {
                       System.out.println("received message : " + message);
                   }
                   messagePullConsumer.confirmConsume(result.getConfirmContext(), true);
               } else{
                   if (result.getErrCode() == 400) {
                       ThreadUtils.sleep(100);
                   } else {
                       if (result.getErrCode() != 404) {
                           System.out.println(String.format("Receive messages errorCode is %d, Error message is %s", result.getErrCode(), result.getErrMsg()));
                       }
                   }
               }
           }
       }
   }
   ``` 
   
### PushConsumer
   ```
   public class PushConsumerExample {
   
       public static void main(String[] args) throws Throwable {
           final String localHostIP = "127.0.0.1";
           final String masterHostAndPort = "localhost:8000";
           final String topic = "test";
           final String group = "test-group";
           final ConsumerConfig consumerConfig = new ConsumerConfig(localHostIP, masterHostAndPort, group);
           /* consumeModel
            *  Set the start position of the consumer group. The value can be [-1, 0, 1]. Default value is 0.
            * -1: Start from 0 for the first time. Otherwise start from last consume position.
            *  0: Start from the latest position for the first time. Otherwise start from last consume position.
            *  1: Start from the latest consume position.
           */
           consumerConfig.setConsumeModel(0);
           final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);
           final PushMessageConsumer pushConsumer = messageSessionFactory.createPushConsumer(consumerConfig);
           pushConsumer.subscribe(topic, null, new MessageListener() {
   
               @Override
               public void receiveMessages(List<Message> messages) throws InterruptedException {
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


