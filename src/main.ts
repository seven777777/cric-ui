import { createApp } from 'vue'
import App from './App.vue'
import CricUI from '../packages'

const app = createApp(App)
app.use(CricUI)
app.mount('#app')
