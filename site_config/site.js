// 全局的一些配置
export default {
  rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'tubemq.apache.org', // 站点部署域名，无需协议和path等
  defaultSearch: 'google', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'en-us',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/quick_start.html',
      },
      {
        key: 'development',
        text: 'DEVELOPMENT',
        link: '/en-us/docs/development/how-to-contribute.html',
      },
      {
        key: 'github',
        text: 'GITHUB',
        link: 'https://github.com/apache/incubator-tubemq',
      },
      {
        key: 'Apache',
        text: 'Apache',
        children: [
          {
            key: 'foundation',
            text: 'Foundation',
            link: '//www.apache.org',
          },
          {
            key: 'licenses',
            text: 'License',
            link: '//www.apache.org/licenses/',
          },
          {
            key: 'current',
            text: 'Events',
            link: '//www.apache.org/events/current-event',
          },
          {
            key: 'sponsorship',
            text: 'Sponsorship',
            link: '//www.apache.org/foundation/sponsorship.html',
          },
          {
            key: 'thanks',
            text: 'Thanks',
            link: '//www.apache.org/foundation/thanks.html',
          },
          {
            key: 'security',
            text: 'Security',
            link: '//www.apache.org/security/',
          }
        ]
      }
      // {
      //   key: 'community',
      //   text: 'COMMUNITY',
      //   link: '/en-us/community/index.html',
      // },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'Apache TubeMQ (incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Overview',
          link: '/en-us/docs/quick_start.html',
        },
        {
          text: 'Quick start',
          link: '/en-us/docs/quick_start.html',
        },
        {
          text: 'Developer guide',
          link: '/en-us/docs/quick_start.html',
        },
      ],
    },
    copyright: 'Copyright © 2019-2020 The Apache Software Foundation. Apache TubeMQ, TubeMQ, and its feather logo are trademarks of The Apache Software Foundation.',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/quick_start.html',
      },
      {
        key: 'development',
        text: '开发',
        link: '/zh-cn/docs/development/how-to-contribute.html',
      },
      {
        key: 'github',
        text: 'GITHUB',
        link: 'https://github.com/apache/incubator-tubemq',
      },
      {
        key: 'Apache',
        text: 'Apache',
        children: [
          {
            key: 'foundation',
            text: '基金会',
            link: '//www.apache.org',
          },
          {
            key: 'licenses',
            text: '证书',
            link: '//www.apache.org/licenses/',
          },
          {
            key: 'events',
            text: '事件',
            link: '//www.apache.org/events/current-event',
          },
          {
            key: 'sponsorship',
            text: '赞助',
            link: '//www.apache.org/foundation/sponsorship.html',
          },
          {
            key: 'thanks',
            text: '致谢',
            link: '//www.apache.org/foundation/thanks.html',
          },
          {
            key: 'security',
            text: 'Security',
            link: '//www.apache.org/security/',
          }
        ]
      },
      // {
      //   key: 'community',
      //   text: '社区',
      //   link: '/zh-cn/community/index.html',
      // },
    ],
    disclaimer: {
      title: '免责声明',
      content: 'Apache TubeMQ (incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '概览',
          link: '/zh-cn/docs/quick_start.html',
        },
        {
          text: '快速开始',
          link: '/zh-cn/docs/quick_start.html',
        },
        {
          text: '开发者指南',
          link: '/zh-cn/docs/quick_start.html',
        },
      ],
    },
    copyright: 'Copyright © 2019-2020 The Apache Software Foundation. Apache TubeMQ, TubeMQ, and its feather logo are trademarks of The Apache Software Foundation.',
  },
};
