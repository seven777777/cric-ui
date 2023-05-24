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

有问题欢迎 issue...
