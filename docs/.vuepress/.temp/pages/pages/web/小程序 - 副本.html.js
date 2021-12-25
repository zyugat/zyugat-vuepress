export const data = {
  "key": "v-7fd50dfb",
  "path": "/pages/web/%E5%B0%8F%E7%A8%8B%E5%BA%8F%20-%20%E5%89%AF%E6%9C%AC.html",
  "title": "wxWeb",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "基础",
      "slug": "基础",
      "children": []
    },
    {
      "level": 2,
      "title": "组件",
      "slug": "组件",
      "children": []
    },
    {
      "level": 2,
      "title": "生命周期",
      "slug": "生命周期",
      "children": []
    },
    {
      "level": 2,
      "title": "扩展",
      "slug": "扩展",
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
