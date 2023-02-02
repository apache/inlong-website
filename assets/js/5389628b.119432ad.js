"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[37778],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=l(t),g=s,d=c["".concat(i,".").concat(g)]||c[g]||p[g]||o;return t?r.createElement(d,u(u({ref:n},m),{},{components:t})):r.createElement(d,u({ref:n},m))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,u=new Array(o);u[0]=g;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a[c]="string"==typeof e?e:s,u[1]=a;for(var l=2;l<o;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},32206:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(87462),s=(t(67294),t(3905));const o={title:"Consumer Example",sidebar_position:5},u=void 0,a={unversionedId:"modules/tubemq/consumer_example",id:"modules/tubemq/consumer_example",title:"Consumer Example",description:"1 Consumer Example",source:"@site/docs/modules/tubemq/consumer_example.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/consumer_example",permalink:"/docs/next/modules/tubemq/consumer_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/tubemq/consumer_example.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Consumer Example",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Producer Example",permalink:"/docs/next/modules/tubemq/producer_example"},next:{title:"Overview",permalink:"/docs/next/modules/tubemq/tubemq-manager/overview"}},i={},l=[{value:"1 Consumer Example",id:"1-consumer-example",level:2},{value:"1.1 PullConsumer",id:"11-pullconsumer",level:3},{value:"1.2 PushConsumer",id:"12-pushconsumer",level:3}],m={toc:l};function c(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1-consumer-example"},"1 Consumer Example"),(0,s.kt)("p",null,"  TubeMQ provides two ways to consumer message, PullConsumer and PushConsumer:"),(0,s.kt)("h3",{id:"11-pullconsumer"},"1.1 PullConsumer"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'   public class PullConsumerExample {\n       public static void main(String[] args) throws Throwable {\n           final String masterHostAndPort = "localhost:8000";\n           final String topic = "test";\n           final String group = "test-group";\n           final ConsumerConfig consumerConfig = new ConsumerConfig(masterHostAndPort, group);\n           consumerConfig.setConsumePosition(ConsumePosition.CONSUMER_FROM_LATEST_OFFSET);\n           final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);\n           final PullMessageConsumer messagePullConsumer = messageSessionFactory.createPullConsumer(consumerConfig);\n           messagePullConsumer.subscribe(topic, null);\n           messagePullConsumer.completeSubscribe();\n           // wait for client to join the exact consumer queue that consumer group allocated\n           while (!messagePullConsumer.isPartitionsReady(1000)) {\n               ThreadUtils.sleep(1000);\n           }\n           while (true) {\n               ConsumerResult result = messagePullConsumer.getMessage();\n               if (result.isSuccess()) {\n                   List<Message> messageList = result.getMessageList();\n                   for (Message message : messageList) {\n                       System.out.println("received message : " + message);\n                   }\n                   messagePullConsumer.confirmConsume(result.getConfirmContext(), true);\n               }\n           }\n       }   \n   }\n')),(0,s.kt)("h3",{id:"12-pushconsumer"},"1.2 PushConsumer"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'   public class PushConsumerExample {\n  \n       public static void test(String[] args) throws Throwable {\n           final String masterHostAndPort = "localhost:8000";\n           final String topic = "test";\n           final String group = "test-group";\n           final ConsumerConfig consumerConfig = new ConsumerConfig(masterHostAndPort, group);\n           consumerConfig.setConsumePosition(ConsumePosition.CONSUMER_FROM_LATEST_OFFSET);\n           final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);\n           final PushMessageConsumer pushConsumer = messageSessionFactory.createPushConsumer(consumerConfig);\n           pushConsumer.subscribe(topic, null, new MessageListener() {\n               @Override\n               public void receiveMessages(PeerInfo peerInfo, List<Message> messages) throws InterruptedException {\n                   for (Message message : messages) {\n                       System.out.println("received message : " + new String(message.getData()));\n                   }\n               }\n               @Override\n               public Executor getExecutor() {\n                   return null;\n               }\n               @Override\n               public void stop() {\n                   //\n               }\n           });\n           pushConsumer.completeSubscribe();\n           CountDownLatch latch = new CountDownLatch(1);\n           latch.await(10, TimeUnit.MINUTES);\n       }\n   }\n')))}c.isMDXComponent=!0}}]);