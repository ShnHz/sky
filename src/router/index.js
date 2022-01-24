import {
  createRouter,
  createWebHistory
} from 'vue-router'
import common from './routers/common'
import template from './routers/template'

import NProgress from 'nprogress'


const routes = [
  ...common,
  ...template
]

console.log(import.meta.env.VITE_APP_NAME)

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_NAME),
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