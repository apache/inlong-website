import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'tubeMQ',
      briefIntroduction: 'Apache TubeMQ（孵化中）是一个万亿级的分布式消息队列',
      buttons: [
        {
          text: '立即开始',
          link: '/zh-cn/docs/tubemq_user_guide.html',
          type: 'primary',
        },
        {
          text: 'Github',
          link: 'https://github.com/apache/incubator-tubemq',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: '开源产品的介绍',
      desc: '开源产品的简单介绍，提供一些该产品的优点、特性描述等',
      img: '/img/architecture.png',
    },
    features: {
      title: '特性',
      list: [
        {
          img: '/img/advantage-01.png',
          title: 'High Throughput',
          content: 'Throughput arrives 14W TPS under a full load of massive data while the system runs stably.',
        },
        {
          img: '/img/advantage-02.png',
          title: 'Low Latency',
          content: 'Latency is less than 5ms from producer to consumer under a full load of massive data.',
        },
        {
          img: '/img/advantage-03.png',
          title: 'Proven in Production',
          content: 'TubeMQ has been serving over 35 trillion messages process everyday. The operation cost only 1500 machiens and 1 operator.',
        },
        {
          img: '/img/advantage-04.png',
          title: 'Low Cost',
          content: 'Compared with similar systems such as Kafka, for serving the same workload, TubeMQ only requires the utilization of  20% resources according to cross-sectional results.',
        }
      ],
    },
    start: {
      title: '快速开始',
      desc: '简单描述',
      img: '/img/quick_start.png',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/demo1.html',
      },
    },
  },
  'en-us': {
    brand: {
      brandName: 'TubeMQ',
      briefIntroduction: 'Apache TubeMQ（incubating） is a trillion-records-scale distributed messaging system',
      buttons: [
        {
          text: 'Quick Start',
          link: '/en-us/docs/tubemq_user_guide.html',
          type: 'primary',
        },
        {
          text: 'Github',
          link: 'https://github.com/apache/incubator-tubemq',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'introduction title',
      desc: 'some introduction of your product',
      img: '/img/architecture.png',
    },
    features: {
      title: 'Feature',
      list: [
        {
          img: '/img/advantage-01.png',
          title: 'High Throughput',
          content: 'Throughput arrives 14W TPS under a full load of massive data while the system runs stably.',
        },
        {
          img: '/img/advantage-02.png',
          title: 'Low Latency',
          content: 'Latency is less than 5ms from producer to consumer under a full load of massive data.',
        },
        {
          img: '/img/advantage-03.png',
          title: 'Proven in Production',
          content: 'TubeMQ has been serving over 35 trillion messages process everyday. The operation cost only 1500 machiens and 1 operator.',
        },
        {
          img: '/img/advantage-04.png',
          title: 'Low Cost',
          content: 'Compared with similar systems such as Kafka, for serving the same workload, TubeMQ only requires the utilization of  20% resources according to cross-sectional results.',
        }
      ]
    },
    start: {
      title: 'Quick start',
      desc: 'some description text',
      img: '/img/quick_start.png',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/demo1.html',
      },
    },
  },
};
