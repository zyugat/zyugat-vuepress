import {defineUserConfig} from '@vuepress/cli'
import type {DefaultThemeOptions} from '@vuepress/theme-default'

import {sidebar} from './configs/sidebar'
import {navbar} from './configs/navbar'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  title: 'zyugat个人文档',
  description: 'zyugat个人文档',
  // plugins: ['@vuepress/back-to-top'],
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        maxSuggestions: 10,
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
  // markdown扩展
  markdown: {
    // hoistTags: false
  },
  themeConfig: {
    // logo: '/images/hero.png',

    repo: 'zyugat/zyugat-vuepress',

    docsDir: 'docs',

    // theme-level locales config
    locales: {
      '/': {
        // navbar
        navbar: navbar,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // sidebar
        sidebar: sidebar,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        // contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
    },
  },
})
