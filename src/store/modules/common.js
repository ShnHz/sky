// get：this.$store.state.common.test
// set：this.$store.commit('common/setTest', value)

const state = {
    userInfo: {},
    navData: []
}
const mutations = {
    setUserInfo(state, data) {
        state.userInfo = data
    },
    setNavData(state, data) {
        state.navData = data
    },
}
const getters = {
    getUserInfo(state) {
        return state.userInfo
    },
    getNavData(state) {
        return state.navData
    }
}
const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}