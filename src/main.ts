import { createApp } from 'vue'
import App from './App.vue'
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

// 当前组件库
import CricUI from '../packages'

const app = createApp(App)

app.use(ElementPlus)
app.use(CricUI)
app.mount('#app')
