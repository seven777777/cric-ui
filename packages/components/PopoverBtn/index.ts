import type { App } from 'vue'

import CPopoverBtn from './src/index.vue'

CPopoverBtn.install = function (app: App) {
    // 组件注册，按需引入
    app.component(CPopoverBtn.name, CPopoverBtn)
    return app
}

export default CPopoverBtn
