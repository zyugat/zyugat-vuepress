import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { sidebar } from './configs/sidebar'
import { navbar } from './configs/navbar'

const { path } = require('@vuepress/utils')
const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',

  title: 'Zyugat 个人文档',
  description: '文档以前端方向为主',

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://img.zyugat.cn/zyuimg/2022-03-14_a694cf3fa809e.ico',
      },
    ],
    [
      'script',
      {},
      `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?97e81f0d99d22f47d5193c628ac07fcb";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();

        `,
    ],
  ],
  theme: path.resolve(__dirname, './theme'),

  themeConfig: {
    // logo: '/images/hero.png',

    repo: 'zyugat/zyugat-vuepress',

    docsBranch: 'dev',

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
})
