---
title: setup 操作 api
date: 2020-12-02
sidebar: 'auto'
categories:
  - vue
  - vue3
tags:
  - computed
  - methods
---

setup 是用來取代原本 在 vue 實體內的功能

## methods

setup 內，直接使用 命名的函式，就是 methods

```vue {9-12,14-17,19}
<script>
const { ref, reactive } = Vue

const App = {
  setup() {
    const count = ref(0)
    const obj = reactive({ count: 0 })

    const plus = () => {
      count.value++
      obj.count++
    }

    const less = () => {
      count.value--
      obj.count--
    }

    return { count, obj, plus, less }
  },
}
Vue.createApp(App).mount('#app')
</script>
```

:::warning
methods 也是要進行回傳才能被使用
:::

---

## computed

在 `setup` 中，沒有 `computed`，變成要引入 `computed` 函式來操作這個計算方法

:::warning
**computed( `()=>{ // 要回傳的計算值 }` )**
:::

```vue {2,12}
<script>
const { reactive, computed } = Vue

const App = {
  setup() {
    const obj = reactive({ count: 0 })

    const plus = () => {
      obj.count++
    }

    const total = computed(() => obj.count * 40)

    // const copyObj =
    return {
      obj,
      plus,
      total,
    }
  },
}

Vue.createApp(App).mount('#app')
</script>
```

:::danger

## methods 與 compouted 選擇?

兩個方法都可以做到一樣的事情，但在內部運作完全不同!

- computed (不可傳入參數) 會緩存**計算**後的資料，只要資料不變動，就不會再重新執行計算!

- methods (可以傳入參數使用) 不會緩存，每次都要重新執行
  :::
