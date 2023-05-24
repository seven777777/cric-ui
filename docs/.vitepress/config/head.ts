import { HeadConfig } from 'vitepress'
export default [
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
] as HeadConfig[]
