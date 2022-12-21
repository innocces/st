// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const gh = !!process.env.GH

const url = gh ? 'https://innocces.github.io' : 'https://self-talk.deno.dev'
const baseUrl = gh ? '/st/' : '/'
const copyright = `Copyright © ${new Date().getFullYear()} innocces, Inc.Built with st.`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Self Talk',
  tagline: 'self talk, like blog!!!',
  url,
  baseUrl,
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'innocces', // Usually your GitHub org/user name.
  projectName: 'st', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans']
  },

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          routeBasePath: '/',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright,
            language: 'zh-Hans'
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/innocces/st/tree/main/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [],
          filename: 'sitemap.xml',
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: ' ',
        apiKey: ' ',
        indexName: ' ',
        contextualSearch: true,
        searchPagePath: 'search'
      },
      metadata: [
        { name: 'keywords', content: 'self-talk, blog, news, fe, javascript' }
      ],
      navbar: {
        title: 'Self Talk',
        logo: {
          alt: 'Self Talk Logo',
          src: 'img/logo.svg'
        },
        items: [
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/innocces/st',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Doc',
            items: [
              {
                label: 'Blog',
                to: '/'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/innocces/st'
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/N82HK72uJk'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'taro-hook',
                href: 'https://github.com/innocces/taro-hooks'
              },
              {
                label: 'useKFC',
                href: 'https://github.com/crazy-thursday/useKFC'
              },
              {
                label: 'dumi-theme-chakra',
                href: 'https://github.com/innocces/dumi-theme-chakra'
              }
            ]
          }
        ],
        copyright,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
