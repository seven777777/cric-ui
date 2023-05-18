import theme from 'vitepress/dist/client/theme-default/index'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import CricUi from '../../../lib/cric-ui.mjs'
import '../../../lib/style.css'
// import CricUi from '../../../packages'

export default {
    ...theme,
    enhanceApp({ app }) {
        app.use(CricUi)
        app.component('demo-preview', AntDesignContainer)
    }
}
