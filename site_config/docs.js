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
              title: 'User Manual',
              link: '/en-us/docs/cookbooks/user_manual.html',
          },
          {
            title: 'Hive Example',
            link: '/en-us/docs/example.html'
          }
        ],
      },
      {
        title: 'Components',
        children: [
          {
            title: 'Manager',
            children: [
               {
                 title: 'Architecture',
                 link: '/en-us/docs/modules/manager/architecture.html',
               },
		       {
                 title: 'Console Introduction',
                 link: '/en-us/docs/modules/manager/user_manual.html',
               },
 			   {
				 title: 'Build && Deployment',
				 link: '/en-us/docs/modules/manager/quick_start.html',
			   },
			],
          },
          {
              title: 'WebSite',
              children: [
                  {
                      title: 'Build && Deployment',
                      link: '/en-us/docs/modules/website/quick_start.html',
                  },
              ],
          },
          {
            title: 'Agent',
            children: [
               {
                 title: 'Architecture',
                 link: '/en-us/docs/modules/agent/architecture.html',
               },
               {
                 title: 'Build && Deployment',
                 link: '/en-us/docs/modules/agent/quick_start.html',
               },
            ],
          },		
          {
            title: 'DataProxy',
            children: [
               {
                 title: 'Architecture',
                 link: '/en-us/docs/modules/dataproxy/architecture.html',
               },
 			   {
 			     title: 'Build && Deployment',
 			     link: '/en-us/docs/modules/dataproxy/quick_start.html',
 			   },
            ],
          },
          {
            title: 'DataProxy-SDK',
            children: [
               {
                 title: 'Architecture',
                 link: '/en-us/docs/modules/dataproxy-sdk/architecture.html',
               },
 			   {
 			     title: 'Build && Deployment',
 			     link: '/en-us/docs/modules/dataproxy-sdk/quick_start.html',
 			   },
            ],
          },
          {
            title: 'TubeMQ',
            children: [
               {
                 title: 'Architecture',
                 link: '/en-us/docs/modules/tubemq/architecture.html',
               },
               {
                 title: 'Quick Start',
                 link: '/en-us/docs/modules/tubemq/quick_start.html',
               },
               {
                 title: 'Configure Introduction',
                 link: '/en-us/docs/modules/tubemq/configure_introduction.html',
               },
		       {
                 title: 'Console Introduction',
                 link: '/en-us/docs/modules/tubemq/console_introduction.html',
               },
			   {
                 title: 'Client RPC',
                 link: '/en-us/docs/modules/tubemq/client_rpc.html',
               },
               {
                 title: 'Error Code',
                 link: '/en-us/docs/modules/tubemq/error_code.html',
               },
               {
                 title: 'Deployment Demo',
                 link: '/en-us/docs/modules/tubemq/deployment.html',
               },
               {
                 title: 'HTTP API',
                 link: '/en-us/docs/modules/tubemq/http_access_api.html',
               },
               {
                 title: 'SDK Demo',
                 link: '/en-us/docs/modules/tubemq/clients_java.html',
               },
            ],
          },
          {
            title: 'TubeMQ-Manager',
            children: [
               {
                 title: 'Build && Deployment',
                 link: '/en-us/docs/modules/tubemq/tubemq-manager/quick_start.html',
               },
            ],
          },
          {
            title: 'Sort',
            children: [
               {
                 title: 'Architecture',
                 link: '/en-us/docs/modules/sort/introduction.html',
               },
               {
                 title: 'Zookeeper Configure',
                 link: '/en-us/docs/modules/sort/protocol_introduction.html',
               },
               {
                 title: 'Build && Deployment',
                 link: '/en-us/docs/modules/sort/quick_start.html',
               },
            ],
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
              title: '用户手册',
              link: '/zh-cn/docs/cookbooks/user_manual.html',
          },
          {
            title: '入库Hive示例',
            link: '/zh-cn/docs/example.html'
          }
        ],
      },
      {
        title: '组件介绍',
        children: [
          {
            title: 'Manager',
            children: [
               {
                 title: '架构介绍',
                 link: '/zh-cn/docs/modules/manager/architecture.html',
               },
		       {
                 title: '管控台操作指引',
                 link: '/zh-cn/docs/modules/manager/user_manual.html',
               },
               {
                 title: '编译部署',
                 link: '/zh-cn/docs/modules/manager/quick_start.html',
               },
            ],
          },
          {
              title: 'WebSite',
              children: [
                  {
                      title: '编译部署',
                      link: '/zh-cn/docs/modules/website/quick_start.html',
                  },
              ],
          },
        {
            title: 'Agent',
            children: [
               {
                 title: '架构介绍',
                 link: '/zh-cn/docs/modules/agent/architecture.html',
               },
               {
                 title: '编译部署',
                 link: '/zh-cn/docs/modules/agent/quick_start.html',
               },
            ],
          },
          {
            title: 'DataProxy',
            children: [
               {
                 title: '架构介绍',
                 link: '/zh-cn/docs/modules/dataproxy/architecture.html',
               },
               {
                 title: '编译部署',
                 link: '/zh-cn/docs/modules/dataproxy/quick_start.html',
               },
             ],
          },
          {
            title: 'DataProxy-SDK',
            children: [
               {
                 title: '架构介绍',
                 link: '/zh-cn/docs/modules/dataproxy-sdk/architecture.html',
               },
               {
                 title: '编译部署',
                 link: '/zh-cn/docs/modules/dataproxy-sdk/quick_start.html',
               },
             ],
          },
          {
            title: 'TubeMQ',
            children: [
               {
                 title: '架构介绍',
                 link: '/zh-cn/docs/modules/tubemq/architecture.html',
               },
               {
                 title: '快速开始',
                 link: '/zh-cn/docs/modules/tubemq/quick_start.html',
               },
               {
                 title: '配置参数介绍',
                 link: '/zh-cn/docs/modules/tubemq/configure_introduction.html',
               },
		       {
                 title: '管控台操作指引',
                 link: '/zh-cn/docs/modules/tubemq/console_introduction.html',
               },
               {
                 title: '客户端RPC',
                 link: '/zh-cn/docs/modules/tubemq/client_rpc.html',
               },
               {
                 title: '错误码',
                 link: '/zh-cn/docs/modules/tubemq/error_code.html',
               },
               {
                 title: '部署示例',
                 link: '/zh-cn/docs/modules/tubemq/deployment.html',
               },
               {
                 title: 'HTTP API介绍',
                 link: '/zh-cn/docs/modules/tubemq/http_access_api.html',
               },
               {
                 title: 'JAVA SDK使用示例',
                 link: '/zh-cn/docs/modules/tubemq/clients_java.html',
               },
            ],
          },
          {
            title: 'TubeMQ-Manager',
            children: [
               {
                 title: '编译部署',
                 link: '/zh-cn/docs/modules/tubemq/tubemq-manager/quick_start.html',
               },
            ],
          },
          {
            title: 'Sort',
            children: [
               {
                 title: '架构介绍',
                 link: '/zh-cn/docs/modules/sort/introduction.html',
               },
               {
                 title: 'Zookeeper配置介绍',
                 link: '/zh-cn/docs/modules/sort/protocol_introduction.html',
               },
               {
                 title: '编译部署',
                 link: '/zh-cn/docs/modules/sort/quick_start.html',
               },
            ],
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
