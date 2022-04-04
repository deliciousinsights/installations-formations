// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Installations Delicious Insights',
  tagline: 'Histoire d’arriver préparé·e',
  url: 'https://installations.delicious-insights.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'deliciousinsights', // Usually your GitHub org/user name.
  projectName: 'installations-formations', // Usually your repo name.
  i18n: { defaultLocale: 'fr', locales: ['fr'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/deliciousinsights/installations-formations/tree/v2',
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
        title: 'Installations',
        logo: {
          alt: 'Installations Delicious Insights',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'courses/wam',
            position: 'left',
            label: 'Formations',
          },
          {
            type: 'doc',
            docId: 'software/git',
            position: 'left',
            label: 'Logiciels',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Formations',
                to: '/docs/courses/wam',
              },
              {
                label: 'Logiciels',
                to: '/docs/software/git',
              },
              {
                label: 'JS idiomatique',
                to: 'https://www.youtube.com/playlist?list=PLPoAfTkDs_Jad8tGdMkixD1r7lMjpRstB',
              },
              {
                label: 'Les concepts clés de Git',
                to: 'https://www.youtube.com/playlist?list=PLPoAfTkDs_JbMPY-BXzud0aMhKKhcstRc',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Site officiel',
                href: 'https://delicious-insights.com',
              },
              {
                label: 'Chaîne YouTube',
                href: 'https://youtube/c/DeliciousInsights',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/DelicioInsights',
              },
            ],
          },
          {
            title: 'Explorer',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/deliciousinsights',
              },
              {
                label: 'Articles',
                href: 'https://delicious-insights.com/fr/archives/#articles',
              },
              {
                label: 'Conférences / Talks / Meetups',
                href: 'https://www.youtube.com/playlist?list=PLPoAfTkDs_JZ-bQhbohZYXhMdFWDt3QCJ',
              },
            ],
          },
        ],
        copyright: `Copyright © 2011–${new Date().getFullYear()} Delicious Insights SAS. Propulsé par Docusaurus. Écrit avec ❤️.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
