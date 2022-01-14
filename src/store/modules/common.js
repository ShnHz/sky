// get：this.$store.state.common.test
// set：this.$store.commit('common/setTest', value)

const state = {
    userInfo: {
        username: 'Admin'
    },
    navData: [],
    collapsed: false
}
const mutations = {
    setUserInfo(state, data) {
        state.userInfo = data
    },
    setNavData(state, data) {
        state.navData = data
    },
    setCollapsed(state, data) {
        state.collapsed = data
    },
}
const getters = {}
const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}