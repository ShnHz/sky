import {
  createStore
} from 'vuex'

// modules
import common from './modules/common'
import tabsBar from './modules/tabsBar'
import menu from './modules/menu'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    common,
    tabsBar,
    menu
  },
})

export default store