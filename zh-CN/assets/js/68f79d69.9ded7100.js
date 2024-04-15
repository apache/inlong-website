"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[60466],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(t),g=s,d=c["".concat(a,".").concat(g)]||c[g]||p[g]||o;return t?r.createElement(d,u(u({ref:n},m),{},{components:t})):r.createElement(d,u({ref:n},m))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,u=new Array(o);u[0]=g;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i[c]="string"==typeof e?e:s,u[1]=i;for(var l=2;l<o;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},88752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(87462),s=(t(67294),t(3905));const o={title:"\u6d88\u8d39\u8005\u793a\u4f8b",sidebar_position:5},u=void 0,i={unversionedId:"modules/tubemq/consumer_example",id:"version-1.3.0/modules/tubemq/consumer_example",title:"\u6d88\u8d39\u8005\u793a\u4f8b",description:"1 Consumer \u793a\u4f8b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/modules/tubemq/consumer_example.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/consumer_example",permalink:"/zh-CN/docs/1.3.0/modules/tubemq/consumer_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/modules/tubemq/consumer_example.md",tags:[],version:"1.3.0",sidebarPosition:5,frontMatter:{title:"\u6d88\u8d39\u8005\u793a\u4f8b",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u751f\u4ea7\u8005\u793a\u4f8b",permalink:"/zh-CN/docs/1.3.0/modules/tubemq/producer_example"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.3.0/modules/tubemq/tubemq-manager/overview"}},a={},l=[{value:"1 Consumer \u793a\u4f8b",id:"1-consumer-\u793a\u4f8b",level:2},{value:"1.1 PullConsumer",id:"11-pullconsumer",level:3},{value:"1.2 PushConsumer",id:"12-pushconsumer",level:3}],m={toc:l},c="wrapper";function p(e){let{components:n,...t}=e;return(0,s.kt)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1-consumer-\u793a\u4f8b"},"1 Consumer \u793a\u4f8b"),(0,s.kt)("p",null,"  TubeMQ \u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u5f0f\u6765\u6d88\u8d39\u6d88\u606f\uff1a PullConsumer and PushConsumer\u3002"),(0,s.kt)("h3",{id:"11-pullconsumer"},"1.1 PullConsumer"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public class PullConsumerExample {\n    public static void main(String[] args) throws Throwable {\n        final String masterHostAndPort = "localhost:8000";\n        final String topic = "test";\n        final String group = "test-group";\n        final ConsumerConfig consumerConfig = new ConsumerConfig(masterHostAndPort, group);\n        consumerConfig.setConsumePosition(ConsumePosition.CONSUMER_FROM_LATEST_OFFSET);\n        final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);\n        final PullMessageConsumer messagePullConsumer = messageSessionFactory.createPullConsumer(consumerConfig);\n        messagePullConsumer.subscribe(topic, null);\n        messagePullConsumer.completeSubscribe();\n        // wait for client to join the exact consumer queue that consumer group allocated\n        while (!messagePullConsumer.isPartitionsReady(1000)) {\n            ThreadUtils.sleep(1000);\n        }\n        while (true) {\n            ConsumerResult result = messagePullConsumer.getMessage();\n            if (result.isSuccess()) {\n                List<Message> messageList = result.getMessageList();\n                for (Message message : messageList) {\n                    System.out.println("received message : " + message);\n                }\n                messagePullConsumer.confirmConsume(result.getConfirmContext(), true);\n            }\n        }\n    }\n}\n')),(0,s.kt)("h3",{id:"12-pushconsumer"},"1.2 PushConsumer"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'  public class PushConsumerExample {\n  \n       public static void test(String[] args) throws Throwable {\n           final String masterHostAndPort = "localhost:8000";\n           final String topic = "test";\n           final String group = "test-group";\n           final ConsumerConfig consumerConfig = new ConsumerConfig(masterHostAndPort, group);\n           consumerConfig.setConsumePosition(ConsumePosition.CONSUMER_FROM_LATEST_OFFSET);\n           final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);\n           final PushMessageConsumer pushConsumer = messageSessionFactory.createPushConsumer(consumerConfig);\n           pushConsumer.subscribe(topic, null, new MessageListener() {\n               @Override\n               public void receiveMessages(PeerInfo peerInfo, List<Message> messages) throws InterruptedException {\n                   for (Message message : messages) {\n                       System.out.println("received message : " + new String(message.getData()));\n                   }\n               }\n               @Override\n               public Executor getExecutor() {\n                   return null;\n               }\n               @Override\n               public void stop() {\n                   //\n               }\n           });\n           pushConsumer.completeSubscribe();\n           CountDownLatch latch = new CountDownLatch(1);\n           latch.await(10, TimeUnit.MINUTES);\n       }\n   }\n')),(0,s.kt)("hr",null),(0,s.kt)("a",{href:"#top"},"Back to top"))}p.isMDXComponent=!0}}]);