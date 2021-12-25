import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-13a31933","/pages/contact/",{"title":"联系"},["/pages/contact/index.html","/pages/0联系.html","/pages/0%E8%81%94%E7%B3%BB.html","/pages/0联系.md","/pages/0%E8%81%94%E7%B3%BB.md"]],
  ["v-6a1c50ea","/pages/flask.html",{"title":"Flask"},["/pages/flask","/pages/flask.md"]],
  ["v-66802814","/pages/db/MongoDB.html",{"title":"MongoDB"},["/pages/db/MongoDB","/pages/db/MongoDB.md"]],
  ["v-cbe70db8","/pages/db/Mysql.html",{"title":"Mysql"},["/pages/db/Mysql","/pages/db/Mysql.md"]],
  ["v-03ac7d5a","/pages/linux/Docker.html",{"title":"Docker"},["/pages/linux/Docker","/pages/linux/Docker.md"]],
  ["v-f7103a16","/pages/linux/LinuxVPS.html",{"title":"linuxVPS"},["/pages/linux/LinuxVPS","/pages/linux/LinuxVPS.md"]],
  ["v-3000c634","/pages/softConfig/ESlint-Pretter.html",{"title":"ESlint-Pretter"},["/pages/softConfig/ESlint-Pretter","/pages/softConfig/ESlint-Pretter.md"]],
  ["v-972eace0","/pages/softConfig/VScode.html",{"title":"VScode"},["/pages/softConfig/VScode","/pages/softConfig/VScode.md"]],
  ["v-570c6025","/pages/softConfig/Webstorm.html",{"title":"WebStrom"},["/pages/softConfig/Webstorm","/pages/softConfig/Webstorm.md"]],
  ["v-d8e1bbfc","/pages/web/Axios.html",{"title":"Axios"},["/pages/web/Axios","/pages/web/Axios.md"]],
  ["v-c0fdf6d8","/pages/web/Bootstrap4.html",{"title":"Bootstrap4"},["/pages/web/Bootstrap4","/pages/web/Bootstrap4.md"]],
  ["v-d209e6ec","/pages/web/CSS3.html",{"title":"CSS3"},["/pages/web/CSS3","/pages/web/CSS3.md"]],
  ["v-14017475","/pages/web/Element-ui.html",{"title":"Element-ui"},["/pages/web/Element-ui","/pages/web/Element-ui.md"]],
  ["v-81714fca","/pages/web/JavaScriptNote.html",{"title":"JavaScriptNote"},["/pages/web/JavaScriptNote","/pages/web/JavaScriptNote.md"]],
  ["v-204c1fea","/pages/web/JavaScriptNotePro.html",{"title":"JavaScriptNotePro"},["/pages/web/JavaScriptNotePro","/pages/web/JavaScriptNotePro.md"]],
  ["v-2b28f858","/pages/web/Node.html",{"title":"Node"},["/pages/web/Node","/pages/web/Node.md"]],
  ["v-6a25c9c7","/pages/web/ReactNote.html",{"title":"ReactNote"},["/pages/web/ReactNote","/pages/web/ReactNote.md"]],
  ["v-157b66d5","/pages/web/TypeScript.html",{"title":"TypeScript"},["/pages/web/TypeScript","/pages/web/TypeScript.md"]],
  ["v-5dbdf8d8","/pages/web/uni-app.html",{"title":"uni-app"},["/pages/web/uni-app","/pages/web/uni-app.md"]],
  ["v-34f6f756","/pages/web/vite.html",{"title":"vite"},["/pages/web/vite","/pages/web/vite.md"]],
  ["v-a0a10540","/pages/web/VueNote.html",{"title":"VueNote"},["/pages/web/VueNote","/pages/web/VueNote.md"]],
  ["v-9dab399c","/pages/web/Webpack5.html",{"title":"webpack5"},["/pages/web/Webpack5","/pages/web/Webpack5.md"]],
  ["v-70c142a9","/pages/web/%E5%B0%8F%E7%A8%8B%E5%BA%8F.html",{"title":"小程序"},["/pages/web/小程序.html","/pages/web/%E5%B0%8F%E7%A8%8B%E5%BA%8F","/pages/web/小程序.md","/pages/web/%E5%B0%8F%E7%A8%8B%E5%BA%8F.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
