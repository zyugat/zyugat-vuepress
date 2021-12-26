export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroText": "Zyugat 个人文档",
    "actions": [
      {
        "text": "快速查看",
        "link": "/pages/web/CSS3.html",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "开发笔记",
        "details": "Web前端、Linux相关(包括Docker)、数据库、算法。"
      },
      {
        "title": "主要方向",
        "details": "以前端技术栈 Vue、JavaScript、Nodejs 的为主。第二方向则是 Docker 偏向服务器运维方向。"
      },
      {
        "title": "个人文档",
        "details": "喜欢学习新技术，有良好的文档编写和代码书写规范。"
      }
    ],
    "footerHtml": true,
    "footer": "Powered by <a href=\"https://github.com/zyugat\" target=\"_blank\"> zyugat </a> 粤ICP备2021116118号<br> Copyright © 2020-2021 zyugat All Rights Reserved. <br> 联系邮箱：zyugatcn@gmail.com"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "更新日志",
      "slug": "更新日志",
      "children": []
    }
  ],
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
