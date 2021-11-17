const themeConfig = require('./themeConfig.js')

module.exports = {
  base: '/',
  title: 'zyugat个人文档',
  description: 'zyugat个人文档',
  // plugins: ['@vuepress/back-to-top'],
  plugins: [
    '@vuepress/back-to-top',
  ],
  // markdown扩展
  markdown: {
    // 代码块显示行号
    lineNumbers: true,
    // hoistTags: false
  },
  themeConfig,
}
