import {
  createRouter,
  createWebHistory
} from 'vue-router'
import common from './routers/common'
import demo from './routers/demo'

const routes = [{
    path: '/',
    redirect: '/index'
  },
  ...common,
  ...demo
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router