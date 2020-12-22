---
title: NUXT PLUGINS
date: 2020-12-22
sidebar: 'auto'
categories:
  - vue
  - nxut
tags:
  - plugins
  - 套件
  - 外掛
---

<img :src="$withBase('/img/plugins.svg')" alt="plugins">

## 在 nuxt 擴充全域函式的三個方式

### ① 擴充 自製的 `函式` or `變數`

在 `plugins` 建立的函式，會自帶 `context` 與 `inject` 參數。

:::tip
**function(`context`, `inject`) { todo }**

- `context` 可以讓你找到**實例**
- `inject` 可以設定一個掛載在 `vue` 實例上的**全域方法**

---

**inject(`<全域函式名稱>`, `()=>{ todo }`)**
:::

建立自訂函式：

```js {3-4}
// plugins/hello.js
export default (context, inject) => {
  inject('hello', (name) => {
    console.log(name)
  })
}
```

### ② 擴充 `vue` 套件

```js
// plugins/vue-tooltip.js
import Vue from 'vue'
import VToolitp from 'v-tooltip'

Vue.use(VToolitp)
```

## 載入 `plugins` 到 `nuxt`

在 `nuxt.config.js` 中，加入 `plugins` **陣列**，寫入 **plugins 路徑**

```js {3}
// nuxt.config.js
export default {
  plugins: ['~/plugins/hello.js'], // server && client 都可以使用

  // --- 其它方式 --- //
  plugins: ['~/plugins/hello.server.js'], // 僅 server 可以使用
  plugins: ['~/plugins/hello.clinet.js'], // 僅 clinet 可以使用
}
```

### ③ 使用擴充函式的方法

## 使用 `plugins` 方法

- ### server 使用 `plugins`

  ```js {2-3}
  export default {
    asyncData({ $hello }) {
      $hello('Naiky')
    },
  }

  // SERVE => Naiky
  ```

- ### client 使用 `plugins`

  ```js {3}
  export default {
    mounted() {
      this.$hello('Naiky')
    },
  }

  // CLIENT => Naiky
  ```
