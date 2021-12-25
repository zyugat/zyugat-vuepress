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
      },
      {
        "text": "项目简介",
        "link": "/pages/web/CSS3.html",
        "type": "secondary"
      }
    ],
    "footer": "粤ICP备2021116118号"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "更新日志",
      "slug": "更新日志",
      "children": []
    }
  ]
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
