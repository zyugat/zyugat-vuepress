export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "Zyugat 个人文档",
  "description": "文档以前端方向为主",
  "head": [
    [
      "script",
      {},
      "\n            var _hmt = _hmt || [];\n            (function() {\n            var hm = document.createElement(\"script\");\n            hm.src = \"https://hm.baidu.com/hm.js?97e81f0d99d22f47d5193c628ac07fcb\";\n            var s = document.getElementsByTagName(\"script\")[0]; \n            s.parentNode.insertBefore(hm, s);\n            })();\n        "
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
