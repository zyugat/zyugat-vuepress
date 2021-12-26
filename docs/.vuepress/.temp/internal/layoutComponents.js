import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/Project/ProjectCode/real/zyugat-vuepress/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/Project/ProjectCode/real/zyugat-vuepress/docs/.vuepress/theme/layouts/Layout.vue")),
}
