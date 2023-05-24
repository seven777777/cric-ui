import { DefaultTheme, defineConfig, HeadConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

const nav: DefaultTheme.NavItem[] = [
    { text: '指南', link: '/guide/' },
    { text: '组件', link: '/components/basic-component1' },
    {
        text: '更多',
        items: [{ text: 'Blog', link: 'https://seven777777.github.io/myblog/' }]
    }
]
const sidebar: DefaultTheme.Sidebar = {
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
}
const head: HeadConfig[] = [
    [
        'link',
        {
            rel: 'icon',
            href: 'https://seven777777.github.io/cric-ui/favicon.ico',
            type: 'image'
        }
    ],
    [
        'meta',
        {
            name: 'theme-color',
            content: '#ffffff'
        }
    ],
    ['meta', { rel: 'referrer', href: `same-origin` }],
    ['meta', { name: 'keywords', content: `CricUI` }],
    ['meta', { name: 'description', content: `Cric 通用Vue3 组件库` }],
    ['meta', { name: 'author', content: `seven` }],
    ['meta', { name: 'baidu-site-verification', content: `code-bakUos2v8l` }],
    [
        'script',
        {},
        `
        var _hmt = _hmt || [];
        (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?6ed2373c23fdfe4ba75fed2dc36d428b";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        })();
    `
    ]
]

const env = process.env.NODE_ENV
export default defineConfig({
    head,
    title: 'CricUI',
    description: 'Cric 通用Vue3 组件库',
    base: env === 'production' ? '/cric-ui/' : '/',
    lastUpdated: true,
    lang: 'zh-CN',
    themeConfig: {
        siteTitle: 'Cric-UI',
        outline: 3,
        socialLinks: [{ icon: 'github', link: 'https://github.com/seven777777/cric-ui' }],
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
