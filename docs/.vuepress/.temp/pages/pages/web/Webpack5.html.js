export const data = {
  "key": "v-9dab399c",
  "path": "/pages/web/Webpack5.html",
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
  ],
  "filePathRelative": "pages/web/Webpack5.md"
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
