export const data = {
  "key": "v-7f8f05ee",
  "path": "/pages/web/vite%20-%20%E5%89%AF%E6%9C%AC.html",
  "title": "vite",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": []
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
