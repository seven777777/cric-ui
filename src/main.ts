import { createApp } from 'vue'
import App from './App.vue'
import CricUi from '../packages'

const app = createApp(App)
app.use(CricUi)

app.mount('#app')
