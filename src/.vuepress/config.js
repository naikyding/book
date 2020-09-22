const { description } = require('../../package')

module.exports = {
  // 引用模版
  theme: 'reco',

  base: '/book/',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'NIKEDIN DOCUMENT',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

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
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    // 導覽列
    nav: [
      {
        text: 'JS',
        link: '/js/',
      },
      {
        text: 'GIT',
        link: '/git/',
      },
      {
        text: 'DEPLOY',
        link: '/deploy/',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/',
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false, // 是否折疊
          children: ['', 'using-vue'],
        },
      ],

      '/js/': [
        {
          title: 'Javascript',
          collapsable: true, // 是否折疊,
          children: [
            '',
            'string',
            'number_math',
            'date',
            'for',
            'if',
            'operator',
            'array',
          ],
        },
      ],

      '/git/': [
        {
          title: 'GIT',
          collapsable: true, // 是否折疊,
          children: ['', 'info', 'setting', 'tag', 'reset'],
        },
      ],
      '/deploy/': [
        {
          title: 'DEPLOY',
          collapsable: true, // 是否折疊,
          children: ['', 'githubPages'],
        },
      ],
    },
  },

  // themeConfig: {
  //   // 博客配置
  //   blogConfig: {
  //     category: {
  //       location: 2, // 在导航栏菜单中所占的位置，默认2
  //       text: 'Category', // 默认文案 “分类”
  //     },
  //     tag: {
  //       location: 3, // 在导航栏菜单中所占的位置，默认3
  //       text: 'Tag', // 默认文案 “标签”
  //     },
  //   },
  // },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/last-updated',
  ],
}
