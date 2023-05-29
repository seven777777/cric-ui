import theme from 'vitepress/dist/client/theme-default/index'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
// import CricUI from '../../../lib/cric-ui.mjs'
// import '../../../lib/style.css'
// import CricUI from '../../../packages'

import CricUI from 'cric-ui'
import 'cric-ui/lib/style.css'

export default {
    ...theme,
    enhanceApp({ app }) {
        app.use(CricUI)
        app.component('demo-preview', AntDesignContainer)
    }
}
