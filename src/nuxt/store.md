---
title: STORE
date: 2020-12-30
sidebar: 'auto'
categories:
  - nxut
  - vue
tags:
  - store
  - vuex
  - strict
---

## STORE

`NUXT` 會自動從 `/store` 去找每一個 `.js` 生成**store 的模組** (`index.js 就會是最根的 store`)，

### 基本 store

在 `store/` 新增 `index.js`，就可以直接使用。

- 定義 `index.js`

  ```js {1-3}
  export const state = () => ({
    num: 0,
  })

  export const mutations = {
    ADD_NUM(state) {
      state.num++
    },
    LESS_NUM(state) {
      state.num--
    },
  }

  export const actions = {
    add_num({ commit }) {
      commit('ADD_NUM')
    },
    less_num({ commit }) {
      commit('LESS_NUM')
    },
  }
  ```

- **拆分檔案**方式
  也可以將 `store` 各項目給拆出來另外成立檔案。

  ```
  ├─ store
  │   ├─ state.js
  │   ├─ mutations.js
  │   ├─ actions.js
  │   └─ getters.js
  ```

  :::danger 注意
  每個 `state` 都應該是 `function` 的方式回傳，這是避免被其它實例(server 端)使用時給**汙染**導致互相影響。
  :::

- `.vue` 使用 `store`

  ```vue
  <template>
    <div>
      <button @click="$store.dispatch('add_num')">+</button>
      <p>{{ $store.state.num }}</p>
      <button @click="$store.dispatch('less_num')">-</button>
    </div>
  </template>
  ```

  ```js {3-5,7-9}
  <script>
  export default {
    asyncData({store}) {
       console.log(store.state.num);
    },

    mounted() {
      console.log(this.$store.state.num);
    }
  };
  </script>
  ```

---

### 模組 `store`

在 `/store` 新增的 `.js` 都會是一個 `module`

- 定義 **模組**

  ```js
  // store/todo.js
  export const state = () => ({
    data: 'buyCar',
    status: false,
  })

  export const mutations = {
    SET_STATUS(state) {
      state.status = !state.status
    },
  }

  export const actions = {
    toggleStatus({ commit }) {
      commit('SET_STATUS')
    },
  }
  ```

- **拆分檔案方式**
  也可以定義一個模組的資料夾，在裡面拆分各項目

  ```
  ├─ store
  │   └─ user
  │       ├─ state.js
  │       ├─ mutations.js
  │       ├─ actions.js
  │       └─ getters.js
  ```

- `.vue` 使用

  ```vue
  <template>
    <div>
      <p :class="[todoStatus ? 'did' : '']">
        <input type="checkbox" @click="toggle" />
        {{ $store.state.todo.data }}
      </p>
    </div>
  </template>
  ```

  ```js
  import { mapActions } from 'vuex'

  export default {
    asyncData(context) {},

    computed: {
      todoStatus() {
        return this.$store.state.todo.status
      },
    },

    methods: {
      ...mapActions({
        toggle: 'todo/toggleStatus',
      }),
    },
  }
  ```

## 嚴格模式

`nuxt` 會在 **開發模式** 打開 `嚴格模式`， **production** 自動關閉。
如果想要手動執行，可以在 `store/index.js` 新增：

```js
export const strict = false
```
