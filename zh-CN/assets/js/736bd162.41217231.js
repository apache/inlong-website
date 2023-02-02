"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[83686],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=s.createContext({}),c=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return s.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,p=d["".concat(l,".").concat(m)]||d[m]||g[m]||o;return t?s.createElement(p,a(a({ref:n},u),{},{components:t})):s.createElement(p,a({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5103:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=t(87462),r=(t(67294),t(3905));const o={title:"\u751f\u4ea7\u8005\u793a\u4f8b",sidebar_position:4},a=void 0,i={unversionedId:"modules/tubemq/producer_example",id:"version-1.4.0/modules/tubemq/producer_example",title:"\u751f\u4ea7\u8005\u793a\u4f8b",description:"1 Producer \u793a\u4f8b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/modules/tubemq/producer_example.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/producer_example",permalink:"/zh-CN/docs/1.4.0/modules/tubemq/producer_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.4.0/modules/tubemq/producer_example.md",tags:[],version:"1.4.0",sidebarPosition:4,frontMatter:{title:"\u751f\u4ea7\u8005\u793a\u4f8b",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/1.4.0/modules/tubemq/quick_start"},next:{title:"\u6d88\u8d39\u8005\u793a\u4f8b",permalink:"/zh-CN/docs/1.4.0/modules/tubemq/consumer_example"}},l={},c=[{value:"1 Producer \u793a\u4f8b",id:"1-producer-\u793a\u4f8b",level:2},{value:"1.1 TubeSingleSessionFactory",id:"11-tubesinglesessionfactory",level:3},{value:"1.1.1 Send Message Synchronously",id:"111-send-message-synchronously",level:4},{value:"1.1.2 Send Message Asynchronously",id:"112-send-message-asynchronously",level:4},{value:"1.1.3 Send Message With Attributes",id:"113-send-message-with-attributes",level:4},{value:"1.2 TubeMultiSessionFactory",id:"12-tubemultisessionfactory",level:3}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-producer-\u793a\u4f8b"},"1 Producer \u793a\u4f8b"),(0,r.kt)("p",null,"TubeMQ\u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u5f0f\u6765\u521d\u59cb\u5316 session factory: TubeSingleSessionFactory \u548c TubeMultiSessionFactory\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TubeSingleSessionFactory \u5728\u6574\u4e2a\u751f\u547d\u5468\u671f\u53ea\u4f1a\u521b\u5efa\u4e00\u4e2a session"),(0,r.kt)("li",{parentName:"ul"},"TubeMultiSessionFactory \u6bcf\u6b21\u8c03\u7528\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2asession")),(0,r.kt)("h3",{id:"11-tubesinglesessionfactory"},"1.1 TubeSingleSessionFactory"),(0,r.kt)("h4",{id:"111-send-message-synchronously"},"1.1.1 Send Message Synchronously"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'   \n   public final class SyncProducerExample {\n   \n       public static void main(String[] args) throws Throwable {\n           final String masterHostAndPort = "localhost:8000";\n           final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n           final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(clientConfig);\n           final MessageProducer messageProducer = messageSessionFactory.createProducer();\n           final String topic = "test";\n           final String body = "This is a test message from single-session-factory!";\n           byte[] bodyData = StringUtils.getBytesUtf8(body);\n           messageProducer.publish(topic);\n           Message message = new Message(topic, bodyData);\n           MessageSentResult result = messageProducer.sendMessage(message);\n           if (result.isSuccess()) {\n               System.out.println("sync send message : " + message);\n           }\n           messageProducer.shutdown();\n       }\n   }\n')),(0,r.kt)("h4",{id:"112-send-message-asynchronously"},"1.1.2 Send Message Asynchronously"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'   public final class AsyncProducerExample {\n   \n      public static void main(String[] args) throws Throwable {\n          final String masterHostAndPort = "localhost:8000";\n          final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n          final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(clientConfig);\n          final MessageProducer messageProducer = messageSessionFactory.createProducer();\n          final String topic = "test";\n          final String body = "async send message from single-session-factory!";\n          byte[] bodyData = StringUtils.getBytesUtf8(body);\n          messageProducer.publish(topic);\n          final Message message = new Message(topic, bodyData);\n          messageProducer.sendMessage(message, new MessageSentCallback(){\n              @Override\n              public void onMessageSent(MessageSentResult result) {\n                  if (result.isSuccess()) {\n                      System.out.println("async send message : " + message);\n                  } else {\n                      System.out.println("async send message failed : " + result.getErrMsg());\n                  }\n              }\n              @Override\n              public void onException(Throwable e) {\n                  System.out.println("async send message error : " + e);\n              }\n          });\n          messageProducer.shutdown();\n      }\n')),(0,r.kt)("h4",{id:"113-send-message-with-attributes"},"1.1.3 Send Message With Attributes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'   public final class ProducerWithAttributeExample {\n   \n      public static void main(String[] args) throws Throwable {\n          final String masterHostAndPort = "localhost:8000";\n          final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n          final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(clientConfig);\n          final MessageProducer messageProducer = messageSessionFactory.createProducer();\n          final String topic = "test";\n          final String body = "send message with attribute from single-session-factory!";\n          byte[] bodyData = StringUtils.getBytesUtf8(body);\n          messageProducer.publish(topic);\n          Message message = new Message(topic, bodyData);\n          //set attribute\n          message.setAttrKeyVal("test_key", "test value");\n          //msgType is used for consumer filtering, and msgTime(accurate to minute) is used as the pipe to send and receive statistics\n          SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmm");\n          message.putSystemHeader("test", sdf.format(new Date()));\n          messageProducer.sendMessage(message);\n          messageProducer.shutdown();\n      }\n')),(0,r.kt)("h3",{id:"12-tubemultisessionfactory"},"1.2 TubeMultiSessionFactory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'   public class MultiSessionProducerExample {\n       \n       public static void main(String[] args) throws Throwable {\n           final int SESSION_FACTORY_NUM = 10;\n           final String masterHostAndPort = "localhost:8000";\n           final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n           final List<MessageSessionFactory> sessionFactoryList = new ArrayList<>(SESSION_FACTORY_NUM);\n           final ExecutorService sendExecutorService = Executors.newFixedThreadPool(SESSION_FACTORY_NUM);\n           final CountDownLatch latch = new CountDownLatch(SESSION_FACTORY_NUM);\n           for (int i = 0; i < SESSION_FACTORY_NUM; i++) {\n               TubeMultiSessionFactory tubeMultiSessionFactory = new TubeMultiSessionFactory(clientConfig);\n               sessionFactoryList.add(tubeMultiSessionFactory);\n               MessageProducer producer = tubeMultiSessionFactory.createProducer();\n               Sender sender = new Sender(producer, latch);\n               sendExecutorService.submit(sender);\n           }\n           latch.await();\n           sendExecutorService.shutdownNow();\n           for (MessageSessionFactory sessionFactory : sessionFactoryList) {\n               sessionFactory.shutdown();\n           }\n       }\n   \n       private static class Sender implements Runnable {\n           \n           private MessageProducer producer;\n           \n           private CountDownLatch latch;\n   \n           public Sender(MessageProducer producer, CountDownLatch latch) {\n               this.producer = producer;\n               this.latch = latch;\n           }\n   \n           @Override\n           public void run() {\n               final String topic = "test";\n               try {\n                   producer.publish(topic);\n                   final byte[] bodyData = StringUtils.getBytesUtf8("This is a test message from multi-session factory");\n                   Message message = new Message(topic, bodyData);\n                   producer.sendMessage(message);\n                   producer.shutdown();\n               } catch (Throwable ex) {\n                   System.out.println("send message error : " + ex);\n               } finally {\n                   latch.countDown();\n               }\n           }\n       }\n   }\n')),(0,r.kt)("hr",null),(0,r.kt)("a",{href:"#top"},"Back to top"))}d.isMDXComponent=!0}}]);