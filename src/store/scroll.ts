import { defineStore } from 'pinia'

export const scrollStore = defineStore('scroll', {
    state: () => {
        return {
            scrollTop: 0,
            flyPx: 0
        }
    },
    getters: {},
    actions: {}
})