import { createApp } from 'vue'
import App from './App.vue'
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 当前组件库
import CricUI from '../packages'

const app = createApp(App)

// element-plus icon注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.use(CricUI)
app.mount('#app')
