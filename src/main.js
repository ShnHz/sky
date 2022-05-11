import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// mixin
import Mixins from './utils/mixins';

const app = createApp(App)

// css
import '@css/varuables.css'
import '@css/result.scss'
import '@css/skeleton.css'
import '@/assets/iconfont/shn-ui/iconfont.css'
import '@css/cover-arco-design/index.scss'
import 'nprogress/nprogress.css'

// api
import api from './api';
app.config.globalProperties.$api = api;

// bus
import Bus from './utils/bus';
app.config.globalProperties.$bus = new Bus()

// config
app.config.globalProperties.$window = window
app.config.globalProperties.$document = document
window.$vueApp = app

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

app.use(store).use(router).mixin(Mixins)

app.mount('#app')