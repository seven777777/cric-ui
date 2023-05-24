import type { App } from 'vue'

import CButton from './src/index.vue'

CButton.install = function (app: App) {
    // 组件注册，按需引入
    app.component(CButton.name, CButton)
    return app
}

export default CButton
