export default {
  'en-us': {
    sidemenu: [
      {
        title: 'User Guide',
        children: [
          {
            title: 'Quick Start',
            link: '/en-us/docs/quick_start.html',
          },
          {
            title: 'Producer Example',
            link: '/en-us/docs/producer_example.html',
          },
          {
            title: 'Consumer Example',
            link: '/en-us/docs/consumer_example.html',
          },
        ],
      },
      {
        title: 'Architecture & Principle',
        children: [
          {
            title: 'Architecture',
            link: '/en-us/docs/architecture.html',
          },
          {
            title: 'Client RPC',
            link: '/en-us/docs/client_rpc.html',
          },
        ],
      },
      {
        title: 'User Manual',
        children: [
          {
            title: 'Deployment',
            link: '/en-us/docs/deployment.html',
          },
          {
            title: 'Configure Introduction',
            link: '/en-us/docs/configure_introduction.html',
          },
          {
            title: 'Console Introduction',
            link: '/en-us/docs/console_introduction.html',
          },
          {
            title: 'Error Code',
            link: '/en-us/docs/error_code.html',
          },
          {
            title: 'API Introduction',
            children: [
               {
                 title: 'HTTP API',
                 link: '/en-us/docs/http_access_api.html',
               },
 			   {
				 title: 'JAVA SDK API',
				 link: '/en-us/docs/clients_java.html',
			   },
			]   
          },
        ],
      },
      {
        title: 'Contact Us',
        link: '/en-us/docs/contact.html',
      }
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '引导',
        children: [
          {
            title: '快速开始',
            link: '/zh-cn/docs/quick_start.html',
          },
          {
            title: '生产者示例',
            link: '/zh-cn/docs/producer_example.html',
          },
          {
            title: '消费者示例',
            link: '/zh-cn/docs/consumer_example.html',
          },
        ],
      },
      {
        title: '架构及原理',
        children: [
          {
            title: '架构介绍',
            link: '/zh-cn/docs/architecture.html',
          },
          {
            title: '客户端RPC',
            link: '/zh-cn/docs/client_rpc.html',
          },
        ],
      },
      {
        title: '用户手册',
        children: [
          {
            title: '部署指引',
            link: '/zh-cn/docs/deployment.html',
          },
          {
            title: '配置参数介绍',
            link: '/zh-cn/docs/configure_introduction.html',
          },
          {
            title: '管控台操作指引',
            link: '/zh-cn/docs/console_introduction.html',
          },
          {
            title: '错误码',
            link: '/zh-cn/docs/error_code.html',
          },
          {
            title: 'API介绍',
            children: [
               {
                 title: 'HTTP API介绍',
                 link: '/zh-cn/docs/http_access_api.html',
               },
 			   {
				 title: 'JAVA SDK API介绍',
				 link: '/zh-cn/docs/clients_java.html',
			   },
			]   
          },
        ],
      },
      {
        title: '联系我们',
        link: '/zh-cn/docs/contact.html'
      }
    ],
    barText: '文档',
  },
};
