import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  // 链接页面链接的根地址为/docs
  { text: '首页', link: '/' },
  {
    text: 'Web',
    children: [
      {
        text: '基础',
        children: [
          '/pages/web/CSS3.md',
          '/pages/web/JavaScriptNote.md',
          '/pages/web/JavaScriptNotePro.md',
          '/pages/web/TypeScript.md',
          '/pages/web/Node.md',
          '/pages/web/Axios.md',
        ],
      },
      {
        text: '框架',
        children: [
          '/pages/web/Bootstrap4.md',
          '/pages/web/Element-ui.md',
          '/pages/web/wxWeb.md',
          '/pages/web/uni-app.md',
          '/pages/web/ReactNote.md',
          '/pages/web/VueNote.md',
          '/pages/web/VueCLI&TypeScript.md',
        ],
      },
      {
        text: '打包工具',
        children: ['/pages/web/Webpack5.md', '/pages/web/vite.md'],
      },
      {
        text: '附加',
        children: ['/pages/web/Axios.md'],
      },
    ],
  },
  {
    text: 'Linux',
    children: ['/pages/linux/Docker.md', '/pages/linux/LinuxVPS.md'],
  },
  {
    text: '数据库',
    children: ['/pages/db/MongoDB.md', '/pages/db/Mysql.md'],
  },
  {
    text: '软件配置',
    children: [
      '/pages/uConfig/VScode.md',
      '/pages/uConfig/Webstorm.md',
      '/pages/uConfig/WebUserConfig.md',
    ],
  },
  {
    text: '其他',
    children: [
      '/pages/else/Git.md',
      '/pages/else/flask.md',
      '/pages/else/suanfa.md',
      '/pages/else/htmlLayout.md',
    ],
  },
]
