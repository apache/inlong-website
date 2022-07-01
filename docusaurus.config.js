const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  // omit unrelated docusaurus options
  title: 'Apache Inlong',
  tagline: 'Apache Inlong',
  url: 'https://inlong.apache.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'Apache Inlong', // Usually your GitHub org/user name.
  projectName: 'Apache Inlong', // Usually your repo name.
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
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `⭐️ &nbsp; If you like Apache InLong , give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/apache/inlong">GitHub</a>`,
        backgroundColor: "#BBDFFF",
      },
      navbar: {
        title: 'Apache InLong',
        logo: {
          alt: 'Apache',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/',
            position: 'right',
            label: 'HOME',
            activeBaseRegex: `^/$`,
          },
          {
            position: 'right',
            label: 'DOC',
            to: "/docs/introduction",
            items: [
              {
                label: "Next",
                to: "/docs/next/introduction",
              },
              {
                label: "1.2.0",
                to: "/docs/introduction",
              },
              {
                label: "1.1.0",
                to: "/docs/1.1.0/introduction",
              },
              {
                label: "1.0.0",
                to: "/docs/1.0.0/introduction",
              },
              {
                label: "0.12.0",
                to: "/docs/0.12.0/introduction",
              },
              {
                label: "0.11.0",
                to: "/docs/0.11.0/user_guide/quick_start",
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
            label: 'DOWNLOAD',
          },
          {
            to: '/community/how-to-contribute',
            label: 'COMMUNITY',
            position: 'right',
            activeBaseRegex: `/community/`,
          },
          {
            to: '/blog',
            label: 'BLOG',
            position: 'right'
          },
          {
            to: '/team',
            label: 'TEAM',
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
        // style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/quick_start',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/apache/inlong',
        //       },
        //     ],
        //   },
        // ],
        // logo: {
        //   alt: 'Apache Inlong',
        //   src: 'img/logo.svg',
        //   href: 'https://inlong.apache.org',
        // },
        copyright: `<div style="text-align: left;">
          <div style="display: flex; align-items: flex-end;">
            <p style="font-family: Avenir-Medium;font-size: 14px;color: #999; flex: 1;">Copyright © 2020-2022 The Apache Software Foundation. Licensed under the Apache License, Version 2.0.</p>
            <a class="acevent" data-format="square" data-mode="dark" data-event="random"></a>
          </div>
          <div style="border-top: 1px solid #ccc;min-height: 60px;line-height: 20px;font-family: Avenir-Medium;font-size: 14px;color: #999;display: flex;align-items: center;"><span>The Apache Software Foundation Apache InLong, InLong, Apache, the Apache feather, and the Apache InLong project logo are either registered trademarks or trademarks of the Apache Software Foundation.</span></div>
        </div>`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'YUW9QEL53E',
        apiKey: '644ca189e445f85a881e4d96307b1f07',
        indexName: 'inlong',
        contextualSearch: true,
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
      '@docusaurus/plugin-content-docs',
      {
        id: 'download',
        path: 'download',
        routeBasePath: 'download',
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          if (locale !== 'en') {
            return `https://github.com/apache/inlong-website/edit/master/i18n/${locale}/${docPath}`;
          }
          return `https://github.com/apache/inlong-website/edit/master/${versionDocsDirPath}/${docPath}`;
        },
        sidebarPath: require.resolve('./sidebarsDevelopment.js'),
        async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          const gen = (item) => item.id
            ?.match(/release-([\d|\.]+)/)?.[1]
            ?.split('.')
          return sidebarItems.sort((a, b) => {
            let i = 0;
            const arr1 = gen(a);
            const arr2 = gen(b);
            while (true) {
              const s1 = arr1?.[i];
              const s2 = arr2?.[i++];
              if (s1 === s2) continue;
              return s2 - s1 || 1;
            }
          });
        },
      },
    ],
  ]
});
