const state = () => ({
  visitedMenus: [],
})
const getters = {
  visitedMenus: (state) => state.visitedMenus,
}
const mutations = {
  updateVisitedMenus(state, data) {
    state.visitedMenus = data
  },
}
const actions = {

}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}