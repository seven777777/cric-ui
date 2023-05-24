import { DefaultTheme } from 'vitepress'
export default {
    '/guide': [
        {
            text: '指南',
            items: [
                { text: '安装', link: '/guide/' },
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
} as DefaultTheme.Sidebar
