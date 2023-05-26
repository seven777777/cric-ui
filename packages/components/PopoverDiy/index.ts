import type { App } from 'vue'

import CPopoverDiy from './src/index.vue'

CPopoverDiy.install = function (app: App) {
    // 组件注册，按需引入
    app.component(CPopoverDiy.name, CPopoverDiy)
    return app
}

export default CPopoverDiy
