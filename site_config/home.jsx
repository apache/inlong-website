export default {
  'zh-cn': {
    brand: {
      brandName: 'Apache',
      projectName: 'TubeMQ',
      briefIntroduction: 'Apache TubeMQ，万亿级分布式消息中间件，专注于海量数据下的数据传输和存储，与许多开源MQ项目相比，TubeMQ在稳定性、性能和低成本方面具有独特的优势',
      buttons: [
        {
          text: '立即开始',
          link: '/zh-cn/docs/quick_start.html',
          type: 'primary',
        },
        {
          text: '联系我们',
          link: '/zh-cn/docs/contact.html',
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
      title: '优势',
      list: [
        {
          img: '/img/advantage-01.png',
          title: '高吞吐',
          content: '大数据满负载场景下，消息吞吐量可达14W TPS，且系统运行平稳',
        },
        {
          img: '/img/advantage-02.png',
          title: '低时延',
          content: '满负载场景下，从生产到消费，可以做到5ms以内',
        },
        {
          img: '/img/advantage-03.png',
          title: '稳定性高',
          content: '系统线上运营近7年，目前过35万亿的日均消息接入条数近1500台机器，运维人员不到1个人力资源，系统除了版本发布系统可以连续不间断运营',
        },
        {
          img: '/img/advantage-04.png',
          title: '成本低',
          content: '相比同类使用原生Kafka机器的业务，按照已知的横向数据比较，仅机器成本就可以节约至少4倍资源',
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
      brandName: 'Apache',
      projectName: 'TubeMQ',
      briefIntroduction: 'Apache TubeMQ, a trillion-records-scale distributed messaging queue (MQ) system, focuses on data transmission and storage under massive data. Compared to many open source MQ projects, TubeMQ has unique advantages in terms of stability, performance, and low cost',
      buttons: [
        {
          text: 'Quick Start',
          link: '/en-us/docs/quick_start.html',
          type: 'primary',
        },
        {
          text: 'Contact',
          link: '/en-us/docs/contact.html',
          type: 'normal',
        }
      ],
    },
    introduction: {
      title: 'introduction title',
      desc: 'some introduction of your product',
      img: '/img/architecture.png',
    },
    features: {
      title: 'Advantages',
      list: [
        {
          img: '/img/advantage-01.png',
          title: 'High Throughput',
          content: 'Throughput arrives 14W TPS under a full load of massive data while the system runs stably',
        },
        {
          img: '/img/advantage-02.png',
          title: 'Low Latency',
          content: 'Latency is less than 5ms from producer to consumer under a full load of massive data',
        },
        {
          img: '/img/advantage-03.png',
          title: 'High stability',
          content: 'TubeMQ has been successfully operating for nearly seven years. Currently, there are over 35 trillion messages processed every day. The operation costs 1500 machines and 1 operator. Besides, TubeMQ can run continuously except during releasing',
        },
        {
          img: '/img/advantage-04.png',
          title: 'Low Cost',
          content: 'Compared with similar systems such as Kafka, for serving the same workload, TubeMQ only requires the utilization of  20% resources according to cross-sectional results',
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
