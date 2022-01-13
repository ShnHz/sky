import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
app = createApp(App)
window.$vueApp = app
app.use(store)
app.use(router)

// css
import '@css/varuables.css'
import '@css/result.scss'
import '@css/skeleton.css'
import '@/assets/iconfont/shn-ui/iconfont.css'



// api
import api from './api';
app.config.globalProperties.$api = api;

// config
app.config.globalProperties.$window = window
app.config.globalProperties.$document = document

// mixin
import Mixins from './utils/mixins';
app.mixin(Mixins)

// components
import {
    loadAllComponents
} from '@/components/components'
loadAllComponents(app)

// plugins
import {
    loadAllPlugins
} from '@/plugins/index'
loadAllPlugins(app)

app.use(router)
app.mount('#app')