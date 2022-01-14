// get：this.$store.state.common.test
// set：this.$store.commit('common/setTest', value)

const state = {
    token: '',
    userInfo: {
        username: 'Admin'
    },
    navData: [],
    collapsed: false
}
const mutations = {
    setToken(state, data) {
        state.token = data
    },
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
const getters = {
    getUserAvatar: state => {
        return state.userInfo.avatar || new URL('../../assets/img/common/avatar.jpg',
                import.meta.url)
            .href
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