import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// css
import '@css/result.scss'
import 'nprogress/nprogress.css'

// config
app.config.globalProperties.$window = window
app.config.globalProperties.$document = document
window.$vueApp = app

// plugins  
import {
    loadAllPlugins
} from '@/plugins/index'
loadAllPlugins(app)

app.use(store).use(router)
app.mount('#app')