// const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  // omit unrelated docusaurus options
  title: 'Apache InLong',
  tagline: 'Apache InLong is a one-stop integration framework for massive data that provides automatic, secure and reliable data transmission capabilities.',
  url: 'https://inlong.apache.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'Apache', // Usually your GitHub org/user name.
  projectName: 'inlong', // Usually your repo name.
  customFields: {
    team: require('./config/team.json'),
    contributors: require('./config/contributors.json'),
    docContributors: require('./config/doc-contributors.json')
  },
  scripts: [
    {
      src: 'https://www.apachecon.com/event-images/snippet.js',
      async: true,
    },
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN"],
    localeConfigs: {
      en: {
        label: "English",
        direction: 'ltr',
      },
      'zh-CN': {
        label: "简体中文",
        direction: 'ltr',
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/apache/inlong-website/edit/master/',
        },
        blog: {
          // showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/apache/inlong-website/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Apache InLong',
        logo: {
          alt: 'Apache',
          src: 'img/logo.svg',
        },
        items: [
          {
            position: 'right',
            label: 'Docs',
            to: "/docs/introduction",
            items: [
              {
                label: "Next",
                to: "/docs/next/introduction",
              },
              {
                label: "1.4.0",
                to: "/docs/introduction",
              },
              {
                label: "1.3.0",
                to: "/docs/1.3.0/introduction",
              },
              {
                label: "1.2.0",
                to: "/docs/1.2.0/introduction",
              },
              {
                label: "All versions",
                to: "/versions/",
              },
            ],
          },
          {
            to: '/downloads',
            position: 'right',
            label: 'Download',
          },
          {
            to: '/community/how-to-contribute',
            label: 'Community',
            position: 'right',
            activeBaseRegex: `/community/`,
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right'
          },
          {
            to: '/team',
            label: 'Team',
            position: 'right'
          },
          {
            label: 'ASF',
            position: 'right',
            items: [
              {
                label: "Apache Software Foundation",
                to: "https://www.apache.org/",
              },
              {
                label: "License",
                to: "https://www.apache.org/licenses/",
              },
              {
                label: "Events",
                to: "https://www.apache.org/events/current-event",
              },
              {
                label: "Security",
                to: "https://www.apache.org/security/",
              },
              {
                label: "Sponsorship",
                to: "https://www.apache.org/foundation/sponsorship.html",
              },
              {
                label: "Privacy",
                to: "https://www.apache.org/foundation/policies/privacy.html",
              },
              {
                label: "Thanks",
                to: "https://www.apache.org/foundation/thanks.html",
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/apache/inlong',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Events',
            items: [
              {
                label: 'ApacheCon',
                href: 'https://www.apachecon.com/',
              },
              {
                html: '<a class="acevent" data-format="square" data-mode="dark" data-event="random"></a>',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/ApacheInlong',
              },
              {
                label: 'WeChat',
                href: 'https://inlong.apache.org/img/apache-inlong-wechat.jpg',
              },
              {
                label: 'Email',
                to: 'mailto:dev@inlong.apache.org',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/apache/inlong',
              },
            ],
          },
        ],
        logo: {
          alt: 'Apache InLong',
          src: 'img/asf_logo.svg',
        },
        copyright: `<div style="font-family: Avenir-Medium;font-size: 14px;color: #999;">
          <div>Copyright © 2020-2022 The Apache Software Foundation. Licensed under the Apache License, Version 2.0.</div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #666;line-height: 20px;">The Apache Software Foundation Apache InLong, InLong, Apache, the Apache feather, and the Apache InLong project logo are either registered trademarks or trademarks of the Apache Software Foundation.</div>
        </div>`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'YUW9QEL53E',
        apiKey: 'fcc3191e7a0fb95834381a6c9faecde9',
        indexName: 'inlong',
        contextualSearch: true,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
  plugins: [
    'docusaurus-plugin-less',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          if (locale !== 'en') {
            return `https://github.com/apache/inlong-website/edit/master/i18n/${locale}/${docPath}`;
          }
          return `https://github.com/apache/inlong-website/edit/master/${versionDocsDirPath}/${docPath}`;
        },
        sidebarPath: require.resolve('./sidebarsDevelopment.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        id: 'download',
        path: 'download',
        routeBasePath: 'download',
      },
    ],
  ]
});
