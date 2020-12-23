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

```js {3-4,10-13}
// plugins/hello.js
export default (context, inject) => {
  inject('hello', (name) => {
    console.log(name)
  })
}

// 如果多個函式，你可以這樣做 (回調函式 => 物件) this.$session.get('data')
export default (context, inject) => {
  inject('session', {
    set: (name, data) => sessionStorage.setItem(name, JSON.stringify(data)),
    get: (name) => JSON.parse(sessionStorage.getItem(name)),
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

### ③ 在 nuxt 使用擴充套件的應用

`plugins` 除了載入套件之外，也可以在**全域**使用該套件的其它方法

```js
// plugins/axios.js
export default function({ $axios, redirect }) {
  $axios.onError((error) => {
    if (error.response.status === 404) {
      redirect('/404/')
    }
  })
}
```

:::tip
當 `axios` 已經安裝入 **nuxt** 且 `module` 已經掛上，你也可以在 `plugins` 新增 `axios` 的其它使用方法，比如 攔載、錯誤…等。
:::

---

### ④ 使用一般 `npm` 套件

使用一般的 `npm` 套件，通常需要寫入到 **程式入口 `main.js`**，你就可以寫在 `plugins` 底下。

:::danger
需要注意一下，該套件是否有支援 **ssr** ，及 **ssr** 的載入方式。
當載入的類型不同 `ssr` `spa` ，它的掛載 **nuxt** 方式也會不同。
:::

```js
// plugins/notification.js
import Vue from 'vue'
import Notifications from 'vue-notification'

/*
or for SSR:
import Notifications from 'vue-notification/dist/ssr.js'
*/

Vue.use(Notifications)
```

## 載入套件到 NUXT

- ### Ⓐ 自製程式 `plugins` 載入

  `plugins` 的函式需要載入到 **nuxt** 可以使用此方法。
  :::tip
  在 `nuxt.config.js` 中，加入 `plugins` **陣列**，寫入 **plugins 路徑**
  :::

  ```js {3}
  // nuxt.config.js
  export default {
    plugins: ['~/plugins/hello.js'], // server && client 都可以使用

    // --- 其它方式 --- //
    plugins: ['~/plugins/hello.server.js'], // 僅 server 可以使用
    plugins: ['~/plugins/hello.clinet.js'], // 僅 clinet 可以使用
  }
  ```

- ### Ⓑ 專屬 nuxt 套件 `module` 載入

  如果從 `npm` 安裝了一個套件(nuxt 專屬套件)，想要載入到整個 **nuxt**，可以使用這個方式

  :::tip
  比如最常使用的 `axios`，都會在 `npm install @nuxtjs/axios` 之後，
  使用 `modules` (array) 寫入你的套件名稱。
  :::

  ```js {3}
  // nuxt.config.js
  export default {
    modules: ['@nuxtjs/axios'], // 安裝的套件名稱
  }
  ```

- ### Ⓒ 一般套件載入
  [與自製程式方式一樣](#a-自製程式-plugins-載入)

---

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
