import {
    createApp
} from 'vue'
import App from './App.vue'
import {
    createPinia
} from 'pinia'

const pinia = createPinia()
const app = createApp(App)

// css
import '@css/result.scss'
import 'nprogress/nprogress.css'

// components
import {
    loadAllComponents
} from '@/components/components'
loadAllComponents(app)

// config
app.config.globalProperties.$window = window
app.config.globalProperties.$document = document

window.$vueApp = app

// plugins  
import {
    loadAllPlugins
} from '@/plugins/index'
loadAllPlugins(app)

app.use(pinia)
app.mount('#app')

import {
    scrollStore
} from './store/scroll'
const store = scrollStore()

window.addEventListener(
    'scroll',
    (e) => {
        store.$patch((state) => {
            state.scrollTop = document.documentElement.scrollTop
            state.flyPx = document.documentElement.scrollHeight - document.documentElement.clientHeight - document.documentElement.scrollTop
        })
    },
    false
)