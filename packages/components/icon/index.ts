import type { App } from 'vue'

import CIcon from './src/index.vue'

CIcon.install = function (app: App) {
    // 组件注册，按需引入
    app.component(CIcon.name, CIcon)
    return app
}

export default CIcon
