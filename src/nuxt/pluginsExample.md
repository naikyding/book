---
title: NUXT PLUGINS 實例
date: 2020-12-29
sidebar: 'auto'
categories:
  - vue
  - nxut
tags:
  - plugins
  - 套件
  - 外掛
---

## 定義說明

如果，方法裡面有多組功能(比如 get set …)，可以在 `inject` 使用 `{}` 物件來定義。
之後可以使用 `this.$demo.get()`

## localStorage Plugins

透過 `plugins` 來寫 [`localStorage`](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/localStorage) 功能

- 定義 `plugins` 文件 `plugins/storage.js`

  ```js {4-8,10-12,14-16}
  export default (context, inject) => {
    inject('local', {
      // get 需要 return 回傳資料
      get(item = '') {
        const data = JSON.parse(localStorage.getItem(item))
        if (data) return data
        return {} // 若沒有這個 item ，就回復空件件，避免沒有此項目時會報錯!
      },

      set(key = '', value = {}) {
        localStorage.setItem(key, JSON.stringify(value))
      },

      remove(item = '') {
        localStorage.removeItem(item)
      },
    })
  }
  ```

- 掛載 套件

  ```js {3}
  // nuxt.config.js
  export default {
    plugins: ['~/plugins/storage.js'],
  }
  ```

- 使用套件 `this.$套件名稱`

  這個套件是`localStorage`，所以無法在 `asyncData()` 使用，我們使用 `mounted` 示範。

  ```js
  // vue component
  export default {
    mounted() {
      this.$local.set('userData', { id: 1, name: 'NIKI' })
      console.log(this.$local.get('userData')) // {id: 1, name: "NIKI"}
      this.$local.remove('userData')
    },
  }
  ```

## cookie Plugins

[`js-cookie`](https://github.com/js-cookie/js-cookie) 是一個方便操作 `cookie` 的方法，

- 定義套件 `plugins/cookie.js`

  ```js {5-7,9-11,13-15,17-19}
  import Cookie from 'js-cookie'

  export default (context, inject) => {
    inject('cookie', {
      set(key = '', value = '') {
        Cookie.set(key, value)
      },

      get(key) {
        return Cookie.get(key)
      },

      remove(key) {
        Cookie.remove(key)
      },

      removeAll() {
        Object.keys(Cookie.get()).forEach((item) => this.remove(item))
      },
    })
  }
  ```

  由於，`js-cookie` 本身就沒有 **刪除全部** 的功能，所以我們自已做 `removeAll`。

- 掛載套件 `nuxt.config.js`
  ```js {2}
  export default {
    plugins: ['~/plugins/cookie.js'],
  }
  ```
