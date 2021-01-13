const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'NIKEDIN',
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
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon.png"}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  // 引用模版
  theme: 'reco',

  base: '/book/',

  themeConfig: {
    logo: '/img/profile.png',
    type: 'blog',
    authorAvatar: '/img/profile.png',
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com',
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com',
      },
      // ...
    ],
    // 導覽列
    nav: [
      {
        text: 'VUE',
        link: '/vue/',
      },
      {
        text: 'VUE3',
        link: '/vue3/',
      },
      {
        text: 'JS',
        link: '/js/',
      },
      {
        text: 'NUXT',
        link: '/nuxt/',
      },
      {
        text: 'NPM',
        link: '/npm/',
      },
      {
        text: 'GIT',
        link: '/git/',
      },
      {
        text: 'API',
        link: '/api/',
      },
      {
        text: 'DEPLOY',
        link: '/deploy/',
        icon: 'reco-up',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/naikyding',
        icon: 'reco-github',
      },
    ],

    lastUpdated: 'Last Updated', // string | boolean
  },
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  // themeConfig: {
  //   repo: '',
  //   editLinks: false,
  //   docsDir: '',
  //   editLinkText: '',
  //   lastUpdated: false,
  //   // 導覽列
  //   nav: [
  //     {
  //       text: 'JS',
  //       link: '/js/',
  //     },
  //     {
  //       text: 'GIT',
  //       link: '/git/',
  //     },
  //     {
  //       text: 'DEPLOY',
  //       link: '/deploy/',
  //     },
  //     {
  //       text: 'Guide',
  //       link: '/guide/',
  //     },
  //     {
  //       text: 'Config',
  //       link: '/config/',
  //     },
  //     {
  //       text: 'VuePress',
  //       link: 'https://v1.vuepress.vuejs.org',
  //     },
  //   ],
  //   sidebar: {
  //     '/guide/': [
  //       {
  //         title: 'Guide',
  //         collapsable: false, // 是否折疊
  //         children: ['', 'using-vue'],
  //       },
  //     ],

  //     '/js/': [
  //       {
  //         title: 'Javascript',
  //         collapsable: true, // 是否折疊,
  //         children: [
  //           '',
  //           'string',
  //           'number_math',
  //           'date',
  //           'for',
  //           'if',
  //           'operator',
  //           'array',
  //         ],
  //       },
  //     ],

  //     '/git/': [
  //       {
  //         title: 'GIT',
  //         collapsable: true, // 是否折疊,
  //         children: ['', 'info', 'setting', 'tag', 'reset'],
  //       },
  //     ],
  //     '/deploy/': [
  //       {
  //         title: 'DEPLOY',
  //         collapsable: true, // 是否折疊,
  //         children: ['', 'githubPages'],
  //       },
  //     ],
  //   },
  // },

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
    {
      // 將時間調整為正確的，設定方式 https://vuepress.vuejs.org/plugin/official/plugin-last-updated.html#options
      transformer: (timestamp, lang) => {
        // Don't forget to install moment yourself
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      },
    },
  ],
}
