import {
    createApp
} from 'vue'
import App from './App.vue'

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

app
app.mount('#app')