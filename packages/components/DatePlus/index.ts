import type { App } from 'vue'

import CDatePlus from './src/index.vue'

CDatePlus.install = function (app: App) {
    // 组件注册，按需引入
    app.component(CDatePlus.name, CDatePlus)
    return app
}

export default CDatePlus
