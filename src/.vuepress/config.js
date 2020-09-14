const { description } = require('../../package')

module.exports = {
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
          title: '觀念',
          collapsable: false,
          children: ['', 'using-vue'],
        },
        {
          title: '進階',
          collapsable: false,
          children: ['', 'using-vue'],
        },
        {
          title: '技巧',
          collapsable: false,
          children: ['', 'using-vue'],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
}
