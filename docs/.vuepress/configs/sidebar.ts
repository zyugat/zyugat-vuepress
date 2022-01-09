import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/pages/web/': [
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
  '/pages/linux': [
    {
      text: 'Linux',
      children: ['/pages/linux/Docker.md', '/pages/linux/LinuxVPS.md'],
    },
  ],
  '/pages/db': [
    {
      text: '数据库',
      children: ['/pages/db/MongoDB.md', '/pages/db/Mysql.md'],
    },
  ],
  '/pages/uConfig': [
    {
      text: '软件配置',
      children: [
        '/pages/uConfig/VScode.md',
        '/pages/uConfig/Webstorm.md',
        '/pages/uConfig/WebUserConfig.md',
      ],
    },
  ],
  '/pages/else': [
    {
      text: '其他',
      children: [
        '/pages/else/Git.md',
        '/pages/else/flask.md',
        '/pages/else/算法.md',
      ],
    },
  ],
}
