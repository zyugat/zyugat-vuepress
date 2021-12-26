export const themeData = {
  "repo": "zyugat/zyugat-vuepress",
  "docsDir": "docs",
  "locales": {
    "/": {
      "navbar": [
        {
          "text": "首页",
          "link": "/"
        },
        {
          "text": "Web",
          "children": [
            {
              "text": "基础",
              "children": [
                "/pages/web/CSS3.md",
                "/pages/web/JavaScriptNote.md",
                "/pages/web/JavaScriptNotePro.md",
                "/pages/web/TypeScript.md",
                "/pages/web/Node.md",
                "/pages/web/Axios.md"
              ]
            },
            {
              "text": "框架",
              "children": [
                "/pages/web/Bootstrap4.md",
                "/pages/web/Element-ui.md",
                "/pages/web/小程序.md",
                "/pages/web/ReactNote.md",
                "/pages/web/VueNote.md"
              ]
            },
            {
              "text": "打包工具",
              "children": [
                "/pages/web/Webpack5.md",
                "/pages/web/vite.md"
              ]
            },
            {
              "text": "附加",
              "children": [
                "/pages/web/Axios.md"
              ]
            }
          ]
        },
        {
          "text": "Linux",
          "children": [
            "/pages/linux/Docker.md",
            "/pages/linux/LinuxVPS.md"
          ]
        },
        {
          "text": "数据库",
          "children": [
            "/pages/db/MongoDB.md",
            "/pages/db/Mysql.md"
          ]
        },
        {
          "text": "软件配置",
          "children": [
            "/pages/softConfig/ESlint-Pretter.md",
            "/pages/softConfig/VScode.md",
            "/pages/softConfig/Webstorm.md"
          ]
        },
        {
          "text": "其他",
          "children": [
            "/pages/else/flask.md",
            "/pages/else/算法.md"
          ]
        }
      ],
      "selectLanguageName": "简体中文",
      "selectLanguageText": "选择语言",
      "selectLanguageAriaLabel": "选择语言",
      "sidebar": {
        "/pages/web/": [
          {
            "text": "基础",
            "children": [
              "/pages/web/CSS3.md",
              "/pages/web/JavaScriptNote.md",
              "/pages/web/JavaScriptNotePro.md",
              "/pages/web/TypeScript.md",
              "/pages/web/Node.md",
              "/pages/web/Axios.md"
            ]
          },
          {
            "text": "框架",
            "children": [
              "/pages/web/Bootstrap4.md",
              "/pages/web/Element-ui.md",
              "/pages/web/小程序.md",
              "/pages/web/ReactNote.md",
              "/pages/web/VueNote.md"
            ]
          },
          {
            "text": "打包工具",
            "children": [
              "/pages/web/Webpack5.md",
              "/pages/web/vite.md"
            ]
          },
          {
            "text": "附加",
            "children": [
              "/pages/web/Axios.md"
            ]
          }
        ],
        "/pages/linux": [
          {
            "text": "Linux",
            "children": [
              "/pages/linux/Docker.md",
              "/pages/linux/LinuxVPS.md"
            ]
          }
        ],
        "/pages/db": [
          {
            "text": "数据库",
            "children": [
              "/pages/db/MongoDB.md",
              "/pages/db/Mysql.md"
            ]
          }
        ],
        "/pages/softConfig": [
          {
            "text": "软件配置",
            "children": [
              "/pages/softConfig/ESlint-Pretter.md",
              "/pages/softConfig/VScode.md",
              "/pages/softConfig/Webstorm.md"
            ]
          }
        ],
        "/pages/else": [
          {
            "text": "其他",
            "children": [
              "/pages/else/flask.md",
              "/pages/else/算法.md"
            ]
          }
        ]
      },
      "editLinkText": "在 GitHub 上编辑此页",
      "lastUpdatedText": "上次更新",
      "tip": "提示",
      "warning": "注意",
      "danger": "警告",
      "notFound": [
        "这里什么都没有",
        "我们怎么到这来了？",
        "这是一个 404 页面",
        "看起来我们进入了错误的链接"
      ],
      "backToHome": "返回首页",
      "openInNewWindow": "在新窗口打开",
      "toggleDarkMode": "切换夜间模式",
      "toggleSidebar": "切换侧边栏"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
