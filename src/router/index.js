import {
  createRouter,
  createWebHistory
} from 'vue-router'
import common from './routers/common'
import demo from './routers/demo'

import NProgress from 'nprogress'


const routes = [
  ...common,
  ...demo
]

const router = createRouter({
  history: createWebHistory(),
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