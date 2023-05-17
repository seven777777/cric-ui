import type { App } from 'vue'

import CTag from './src/index.vue'

CTag.install = function (app: App) {
    // 组件注册，按需引入
    app.component(CTag.name, CTag)
    return app
}

export default CTag
