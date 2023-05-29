# CricUI

A Vue.js 3 UI library

[![CricUI](https://img.shields.io/badge/npm-v1.0.2-brightgreen)](https://www.npmjs.com/package/cric-ui)

---

-   🔭 [Vite](https://vitejs.dev)
-   💪 [Vue3](https://vuejs.org)
-   🔥 TypeScript

## 环境支持

node：>=16.0.0

> 由于 Vue3 不支持 IE11，CricUI 也不支持 IE 浏览器

## 安装

`npm i cric-ui`

## 快速开始

### 全局引入

```js
// main.ts
import { createApp } from 'vue'

import CricUI from 'cric-ui'
import 'cric-ui/lib/style.css'

const app = createApp(App)

app.use(CricUi)
app.mount('#app')
```

### 按需引入

```ts
// main.ts
import { createApp } from 'vue'

import { CButton } from 'cric-ui'
import 'cric-ui/lib/style.css'

const app = createApp(App)

app.use(CButton)
app.mount('#app')
```

### 使用示例

```vue
<c-button></c-button>
```

---

## 版本记录

-   2023/05/24 1.0.2 测试版
-   2023/05/29 1.0.6 增加 popoverBtn 组件

有问题欢迎 issue...

## 项目操作

```
//启动服务
npm run dev

//组件库build
npm run build

//组件库版本更改（保证当前代码已提交）
npm version prerelease //1.0.0 --> 1.0.1-0
npm version prepatch //1.0.1-1 --> 1.0.2-0
npm version preminor //1.0.2-0 --> 1.1.0-0
npm version premajor //1.1.0-0 --> 2.0.0-0
npm version patch //2.0.0-0 --> 2.0.0 || 2.0.0 --> 2.0.1
npm version minor //2.0.1 --> 2.1.0
npm version major //3.1.0 --> 4.0.0

//npm 发布
npm publish
//若没登录，须先登录npm
npm login

//组件库文档编译
npm run docs:build

```
