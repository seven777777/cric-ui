# 快速开始

## 全局引入

```js
// main.ts
import { createApp } from 'vue'

import CricUI from 'cric-ui'
import 'cric-ui/lib/style.css'

const app = createApp(App)

app.use(CricUi)
app.mount('#app')
```

## 按需引入

```ts
// main.ts
import { createApp } from 'vue'

import { CButton } from 'cric-ui'
import 'cric-ui/lib/style.css'

const app = createApp(App)

app.use(CButton)
app.mount('#app')
```

## 使用示例

```vue
<c-button></c-button>
```
