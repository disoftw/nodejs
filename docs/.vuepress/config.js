const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Node.js',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/nodejs/',

  /**
   * AntDocs theme for AntDesign for vue
   * Ref: https://antdocs.seeyoz.cn/guide/getting-started.html#引用主题
   */
  theme: 'antdocs',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/rnovec',
    editLinks: false,
    logo: 'https://pablomagaz.com/content/images/2020/01/NodeJs.png',
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Intro',
        link: '/intro/'
      },
      {
        text: 'Core',
        link: '/core/'
      },
      {
        text: 'Streams',
        link: '/streams/'
      },
      {
        text: 'REST',
        link: '/rest/'
      },
      {
        text: 'Middlewares',
        link: '/middlewares/'
      },
      {
        text: 'Base de datos',
        link: '/db/'
      },
      {
        text: 'Glosario',
        link: '/glossary/'
      }
    ],
    sidebar: {
      '/intro/': [
        {
          title: 'Intro',
          collapsable: false,
          children: ['', '2-npm', '3-config', '4-modules']
        }
      ],
      '/core/': [
        {
          title: 'Core',
          collapsable: false,
          children: [
            '',
            '6-http_server',
            '7-fs_module',
            '8-update_files',
            '9-async_vs_sync',
            '10-path_module',
            '11-events',
            '12-timers',
            '13-canceling_timers'
          ]
        }
      ],
      '/streams/': [
        {
          title: 'Streams',
          collapsable: false,
          children: [
            '',
            'write-and-read-streams',
            'write-stream-events',
            'write-stream-functions',
          ]
        }
      ],
      '/rest/': [
        {
          title: 'API REST',
          collapsable: false,
          children: [
            '',
            '1-setup',
            '2-request-handler',
            '3-api-requests',
            '4-get-users',
            '5-users-route',
            '6-users-post',
            '7-get-users-id',
            '8-update-users',
            '9-status-codes',
            '10-nodemon'
          ]
        }
      ],
       '/middlewares/': [
        {
          title: 'Middlewares',
          collapsable: false,
          children: [
            '',
            '11-error_handling',
            '12-routes-code',
            '13-body_parser',
            '14-body_parser',
            '15-cors',
          ]
        }
      ],
      '/db/': [
        {
          title: 'Base de datos',
          collapsable: false,
          children: [
            '',
            '2-mongodb',
            '3-install_mongodb',
            '4-mongoose',
            '5-config',
            '6-config',
            '7-models',
            '8-code-model'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
}
