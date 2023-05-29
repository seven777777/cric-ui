import type { App } from 'vue'

import CArrowBtn from './src/index.vue'

CArrowBtn.install = function (app: App) {
    // 组件注册，按需引入
    app.component(CArrowBtn.name, CArrowBtn)
    return app
}

export default CArrowBtn
