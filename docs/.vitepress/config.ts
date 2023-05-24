import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import head from './config/head'
import nav from './config/nav'
import sidebar from './config/sidebar'

const env = process.env.NODE_ENV
export default defineConfig({
    head,
    title: 'CricUI', // 定义在浏览器标签上显示的标题
    description: 'Cric 通用Vue3 组件库',
    base: env === 'production' ? '/cric-ui/' : '/',
    lastUpdated: true,
    lang: 'zh-CN',
    cleanUrls: true, // 简洁化URL
    themeConfig: {
        // aside: true,
        // outline: 'deep',
        siteTitle: 'CricUI',
        lastUpdatedText: '最后更新时间',
        socialLinks: [{ icon: 'github', link: 'https://github.com/seven777777/cric-ui' }],
        nav,
        sidebar,
        docFooter: {
            prev: '上一篇文章',
            next: '下一篇文章'
        }
    },
    markdown: {
        theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark'
        },
        lineNumbers: true,
        config(md) {
            md.use(componentPreview)
            md.use(containerPreview)
        }
    }
})
