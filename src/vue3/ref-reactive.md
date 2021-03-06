---
title: 資料響應 ref reactive
date: 2020-12-02
sidebar: 'auto'
categories:
  - vue
  - vue3
tags:
  - ref
  - reactive
---

## 響應綁定

在 `position api` 裡資料有兩種方式，可以進行綁定

- ### ref

  可以定義任何`型別`的資料且**響應**，但 `object`、`array` 不會進行監聽**響應**!!

  取值需要使用 `.value`

  所以在 setimeout 後，`title`會綁定而改變，`obj1`將不會改變

```vue {1,6-7,10}
<script>
const { ref, reactive } = Vue // 先引入方法

const App = {
  setup() {
    let title = ref('HELLO') // ref 來定義 資料可以響應
    let obj1 = ref({ name: 'nico', age: 44 })

    setTimeout(() => {
      title.value = 'WORLD'
      obj1.name = 'NNNNNN'
    }, 1000)

    return {
      title,
      obj1,
    }
  },
}
Vue.createApp(App).mount('#app')
</script>
```

:::danger
在使用 `ref` 時，必須要使用 `.value` 來重新修改`值`

建議 **物件** **陣列** 不要使用 `ref` 因為不會被綁定!!!!
:::

- ### reactive
  只可以定義 `物件` 與 `陣列` 這兩種型別，而且會 **深度監聽** 所以可以響應。
  **使用的時候不需要再用 `.value` 來覆寫。**

```vue
<script>
const { ref, reactive } = Vue

const App = {
  setup() {
    let title = ref('HELLO') // ref 來定義 資料可以響應
    let obj1 = ref({ name: 'nico', age: 44 })
    let obj = reactive({
      // 只能定義 {} []
      name: 'niki',
      age: 33,
    })

    setTimeout(() => {
      obj.name = 'naiky'
      obj1.name = 'NNNNNN'
    }, 1000)

    return {
      title,
      obj,
      obj1,
    }
  },
}
Vue.createApp(App).mount('#app')
</script>
```

:::danger
只可以用來定義 `物件` 與 `陣列`
:::

## 進階觀念

### `reactive` 裡的 `ref`

- `reactive` **會自動解封** 在內部的 `ref` 對象，這時就算是修改內部的 `ref`，也不用加上 `.value`

  ```js {2-4,6}
  const count = ref(0)
  const state = reactive({
    count,
  })

  console.log(state.count) // 0

  state.count = 1
  console.log(count.value) // 1
  ```

- 承上，`reactive` 內部可以直接替代別的 `ref`

  ```js
  const otherCount = ref(2)

  state.count = otherCount
  console.log(state.count) // 2
  console.log(count.value) // 1
  ```

- 這種情況 `ref` 不會被解封，還是需要 `.value`

  :::danger
  當內部的 `ref` 被 `[]` 包起來 或 `map`
  :::

  ```js
  const arr = reactive([ref(0)])
  // 这里需要 .value
  console.log(arr[0].value)

  const map = reactive(new Map([['foo', ref(0)]]))
  // 这里需要 .value
  console.log(map.get('foo').value)
  ```
