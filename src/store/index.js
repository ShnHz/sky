import {
  createStore
} from 'vuex'

// modules
import common from './modules/common'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    common
  },
})

export default store