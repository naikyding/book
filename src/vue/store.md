---
title: STORE
date: 2020-12-30
sidebar: 'auto'
categories:
  - vue
  - vuecli
tags:
  - store
  - vuex
  - state
  - actions
  - mutations
  - mapState
  - mapActions
  - mapMutations
  - module
---

## VUEX 單向資料流

- **`mutations`：** 僅能操作 **同步行為** ，針對 `state` 做操作。
- **`acitons`：**
  可以操作 **非同步行為** 、與 **後端** 溝通，也在此。
  <img :src="$withBase('/img/vuexFlow.png')" >

## store 定義

store/index.js

```js
import Vue from 'vue'
import Vuex from 'vuex'

import list from './list'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // 開發中，請打開 嚴格模式
  modules: { list }, // 模組化的其它 store (如使用，需先引入 import module form './module')

  state: {
    // 數據狀態，類 data
    data: [], // { id: 1, name: 'naiky' }
  },
  mutations: {
    // 更改 數據狀態的唯一方式 (只能同步操作)
    SET_DATA(state, data) {
      // 第一個參數為 state
      state.data = data // { id: 1, name: 'naiky' }
    },
  },
  actions: {
    // 與 api 的互動，可以是非同步操作，提交 mutations 改變數據狀態(不可直接改)
    async get_data(context) {
      // 第一個參數為 vuex
      const { data } = await Vue.axios.get(url)
      context.commit('SET_DATA', data)
    },
  },
  getters: {
    // 計算數據，類 computed
    doneLIST: (state) => {
      return state.data.filter((item) => item.name === 'NICO')
    },
    // doneList: ({ data }) => data.filter(item => item.name === 'NICO')
  },
})
```

---

## store 操作

- ### state

  ```js
  // .vue
  this.$store.state.data.name // naiky ↑
  ```

- ### mutations

  `mutations` 函式，第一個參數為 `state`: 狀態資料、`payload`： 為帶進來的資料。

  ```js {2}
  mutations: {
    increment (state, payload) {
      state.count += payload.amount
    }
  }
  ```

  ```js {5,11,13}
  // store/index.js
  actions: {  // 與 api 的互動，可以是非同步操作，提交 mutations 改變數據狀態(不可直接改)
      async get_data(context){ // 第一個參數為 vuex
        const res = await Vue.axios.get(url)
        context.commit('SET_DATA', res.data)
      }
    },

  // 進階寫法
  actions: {
      async get_data({ commit }){
        const { data } = await Vue.axios.get(url)
        commit('SET_DATA', data)
      }
    },
  ```

  **特殊用法** view 可以直接 commit Mutations

  ```js
  // .vue
  this.$store.commit('SET_DATA', data)
  ```

- ### actions

  `actions` 函式，第一個參數為 `context` 是 `store` 的實例、第二個參數為 `payload` 是傳遞的資料。
  :::tip
  任何操作都在這個實例裡面。
  所以你也可以在 `context` 解構出 `{ commit }`，來打 `mutations`
  :::

  ```js
    actions: {
    increment (context) {
      context.commit('increment')
    }
  }
  ```

  ```js
  // .vue
  this.$store.dispatch('get_data')
  ```

- ### getters

  這是在 `vuex` 中，類似 `computed` 的功能。

  ```js
  // .vue
  this.$store.getters.doneList
  ```

## 模組化

當專案起來越大的時候，`store` 單一單案會過於腫大、也不好分類；這時你可以使用 `模組` 來為你的 `store` 分類。

只要遵守以上的規則，你可以使用任何你想要的方式，如果 `store` 太大，只需要獎 `actions` 、 `mutations` 如 `getters` 分割到單獨的文件。

對於大型的專案，希望你可以把 `vuex` 相關的代碼分割到模塊中，下面是範例：

```js
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```

```js {15-18}
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> `moduleA`'s state
store.state.b // -> `moduleB`'s state
```

:::tip
模組化後，要記得從 `store/index.js` 掛入`modules`，才會生效。
:::

### actions 操作

操作模組 `user` 裡的 `actions`

```js
this.$store.dispatch('user/login', userData)
```
