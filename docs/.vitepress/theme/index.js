import theme from 'vitepress/dist/client/theme-default/index'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
// import CricUI from '../../../lib/cric-ui.mjs'
// import '../../../lib/style.css'
// import CricUI from '../../../packages'

import CricUI from 'cric-ui'
import 'cric-ui/lib/style.css'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default {
    ...theme,
    enhanceApp({ app }) {
        app.use(CricUI)
        app.use(ElementPlus)
        app.component('demo-preview', AntDesignContainer)

        // 注册 element-plus Icon
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}
