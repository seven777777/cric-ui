import { DefaultTheme, defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

const nav: DefaultTheme.NavItem[] = [
    { text: '指南', link: '/guide/' },
    { text: '组件', link: '/components/basic-component1' }
]
const sidebar: DefaultTheme.Sidebar = {
    '/guide': [
        {
            text: '指南',
            items: [
                { text: '组件库介绍', link: '/guide/' },
                { text: '快速开始', link: '/guide/quickstart' }
            ]
        }
    ],
    '/components': [
        {
            text: '通用基础组件',
            items: [{ text: '基础组件 1', link: '/components/basic-component1' }]
        }
    ]
}

export default defineConfig({
    title: 'Hello VitePress',
    description: 'Just playing around',
    lang: 'cn-ZH',
    base: '/',
    lastUpdated: true,
    themeConfig: {
        logo: '/logo.png',
        siteTitle: 'Cric-Ui',
        outline: 3,
        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
        nav,
        sidebar
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
