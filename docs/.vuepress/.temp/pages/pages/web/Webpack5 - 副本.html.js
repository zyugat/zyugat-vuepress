export const data = {
  "key": "v-7f3d6992",
  "path": "/pages/web/Webpack5%20-%20%E5%89%AF%E6%9C%AC.html",
  "title": "webpack5",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "开发环境",
      "slug": "开发环境",
      "children": []
    },
    {
      "level": 2,
      "title": "css兼容性处理",
      "slug": "css兼容性处理",
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
