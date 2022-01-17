import {
  createStore
} from 'vuex'

// modules
import common from './modules/common'
import tabsBar from './modules/tabsBar'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    common,
    tabsBar
  },
})

export default store