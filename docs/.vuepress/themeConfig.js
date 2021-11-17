const sidebar = require('./sidebar.js')
module.exports= {
  // 导航栏
  nav: [
    // 链接页面链接的根地址为/docs
    {text: '首页', link: '/'},
    {text: '联系', link: '/pages/contact/'},
    {text: 'Github', link: 'https://github.com/zyugat/zyugat-vuepress'},

  ],
  // 侧边栏深度
  sidebarDepth: 10,
  searchMaxSuggestions: 10,
  editLinkText: '帮助我们改善此页面！',
  lastUpdated: 'Last Updated',
  smoothScroll: true,
  //侧边栏
  sidebar
}