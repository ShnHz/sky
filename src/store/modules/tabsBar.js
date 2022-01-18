const state = () => ({
  visitedRoutes: [],
})
const getters = {
  visitedRoutes: (state) => state.visitedRoutes,
}
const mutations = {
  addVisitedRoute(state, route) {
    let target = state.visitedRoutes.find((item) => item.path === route.path)
    if (target) {
      if (route.fullPath !== target.fullPath) Object.assign(target, route)
      return
    }
    state.visitedRoutes.push(Object.assign({}, route))
  },
  delVisitedRoute(state, route) {
    state.visitedRoutes.forEach((item, index) => {
      if (item.path === route.path) state.visitedRoutes.splice(index, 1)
    })
  },
  delAllVisitedRoutes(state) {
    state.visitedRoutes = state.visitedRoutes.filter((item) => item.meta.affix)
  },
  updateVisitedRoute(state, route) {
    state.visitedRoutes.forEach((item) => {
      if (item.path === route.path) item = Object.assign(item, route)
    })
  },
}
const actions = {
  addVisitedRoute({
    commit
  }, route) {
    commit('addVisitedRoute', route)
  },
  async delRoute({
    dispatch,
    state
  }, route) {
    await dispatch('delVisitedRoute', route)
    return {
      visitedRoutes: [...state.visitedRoutes],
    }
  },
  delVisitedRoute({
    commit,
    state
  }, route) {
    commit('delVisitedRoute', route)
    return [...state.visitedRoutes]
  },
  delOthersVisitedRoute({
    commit,
    state
  }, route) {
    commit('delOthersVisitedRoute', route)
    return [...state.visitedRoutes]
  },
  async delAllRoutes({
    dispatch,
    state
  }, route) {
    await dispatch('delAllVisitedRoutes', route)
    return {
      visitedRoutes: [...state.visitedRoutes],
    }
  },
  delAllVisitedRoutes({
    commit,
    state
  }) {
    commit('delAllVisitedRoutes')
    return [...state.visitedRoutes]
  },
  updateVisitedRoute({
    commit
  }, route) {
    commit('updateVisitedRoute', route)
  },
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}