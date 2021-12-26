import {defineClientAppEnhance} from '@vuepress/client'

export default defineClientAppEnhance(({app, router, siteData}) => {
  router.beforeEach((to, from, next) => {
    // console.log('切换路由', to.fullPath, from.fullPath)
    // var _hmt = _hmt || [];
    //触发百度的pv统计
    if (typeof _hmt != 'undefined') {
      if (to.path) {
        _hmt.push(['_trackPageview', to.fullPath])
        // console.log('上报百度统计', to.fullPath)
      }
    }

    // continue
    next()
  })
})