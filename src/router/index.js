import {
  createRouter,
  createWebHistory
} from 'vue-router'
import common from './routers/common'
import template from './routers/template'

import NProgress from 'nprogress'


let routes = [
  ...common,
  ...template
]

routes = checkPermissions(routes)

const router = createRouter({
  history: createWebHistory(
    import.meta.env.VITE_APP_NAME),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return {
      top: 0
    }
  },
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router

function checkPermissions(arr) {
  return arr.filter(item => {
    if (item.children) {
      item.children = checkPermissions(item.children)
    }
    if (item.meta && item.meta.hasPermissions == false) {
      return false
    } else {
      return true
    }
  })
}