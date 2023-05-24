import type { App } from 'vue'

// 完整引入组件
const install = function (app: App) {
    const modulesFiles = import.meta.glob('./components/**/index.ts', { eager: true })
    Object.keys(modulesFiles).forEach((key: any) => {
        const com: any = modulesFiles[key]
        app.use(com.default)
    })
}

export default {
    install
}
