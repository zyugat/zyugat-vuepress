import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/pages/web/': [
    {
      text: '基础',
      children: [
        '/pages/web/CSS3.md',
        '/pages/web/JavaScriptNote.md',
        '/pages/web/JavaScriptNotePro.md',
        '/pages/web/Node.md',
        '/pages/web/Axios.md',
      ],
    },
    {
      text: '框架',
      children: [
        '/pages/web/Bootstrap4.md',
        '/pages/web/Element-ui.md',
        '/pages/web/小程序.md',
        '/pages/web/ReactNote.md',
        '/pages/web/VueNote.md',
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
  '/pages/Linux': [
    {
      text: 'Linux',
      children: [
        '/pages/linux/Docker.md',
        '/pages/linux/LinuxVPS.md',
      ],
    },
  ],
  '/pages/db': [
    {
      text: '数据库',
      children: [
        '/pages/db/MongoDB.md',
        '/pages/db/Mysql.md',
      ],
    },
  ],
  '/pages/softConfig': [
    {
      text: '软件配置',
      children: [
        '/pages/softConfig/ESlint-Pretter.md',
        '/pages/softConfig/VScode.md',
        '/pages/softConfig/Webstorm.md',
      ],
    },
  ],
  '/pages/else': [
    {
      text: '其他',
      children: [
        '/pages/flask.md',
      ],
    },
  ],
}
