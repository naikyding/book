---
title: compositon api
date: 2020-12-02
sidebar: 'auto'
categories:
  - vue
  - vue3
tags:
  - computed
  - methods
---

## setup

`setup` 是 `Composition Api` 的入口，也算是一個 hook，

- `setup` 出現的時機 (在 created 之前)：
  - vue 實體創立
  - 初始化 `props`
  - 調用 `setup` ✅

## 🧰 methods

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

## 🖥 computed

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

### setup 內操作 computed

:::danger 注意
在 setup 裡，使用 computed 產生的`參數`時，還是需要使用 `.value` 來提取內容。
**不然會是一個被包裝的物件!!(如下)**
<img :src="$withBase('/img/console_computed.png')" alt="swaggerUi">

```js {4}
const filterList = computed(() => listArr.filter((item) => item.money > 500))

const BoxHeight = computed(() => {
  return isOpen.value ? `${filterList.value.length * 40}px` : '0px'
})
```

:::

## methods 與 compouted 選擇?

兩個方法都可以做到一樣的事情，但在內部運作完全不同!

- computed (不可傳入參數) 會緩存**計算**後的資料，只要資料不變動，就不會再重新執行計算!

- methods (可以傳入參數使用) 不會緩存，每次都要重新執行

---

## 👂 watch

可以透過 `watch()` 來監聽資料，當指定資料變動時，將會執行裡面的`函式`。

- ### 監聽 `ref` 資料

  `watch( ref資料名稱, (新資料, 舊資料)=>{ // 變動時執行函式 } )`

  ```js {8-10}
  const { watch, ref } = Vue

  const App = {
    setup() {
      const title = ref('Hello')
      const text = ref('Wrold')

      watch(title, (newVal, oldVal) => {
        console.log(`這是新的值${newVal} 這是舊的值 ${oldVal}`)
      })

      const setTitle = () => {
        setTimeout(() => {
          title.value = 'World'
        }, 1000)
      }

      return {
        title, text
      }
    },
  }
  ```

  **同時監聽多組 `ref`**，使用 `[]`陣列包起

  ```js {1}
  watch([title, text], ([newTitle, newText], [preTitle, preText]) => {
    console.log(`
        title 新的值：${newTitle} 舊的值: ${preTitle}
        text 新的值：${newText} 舊的值: ${preText}
    `)
  })
  ```

  **若 `ref` 為物件**
  此時就要`監聽的對像`，必須是**函式的返回**

  ```js {4}
  const data = ref({ id: 1 })

  watch(
    () => data.id,
    (newVal, oldVal) => {
      console.log(`
      data 新的值： ${newVal} , 舊的值：${oldVal}
    `)
    }
  )

  const setData = () => {
    setTimeout(() => {
      data.value.id = 2
    }, 1000)
  }
  ```

  :::warning
  `ref` **無法監控** 物件型別 `ref({})`!!

  只能指定內部的某一個對象，且使用 `() =>`(函式回傳) 才可以監控

  ```js
  // ×
  const data = ref({ id: 1 })
  watch(data, () => {})
  ```

  ```js
  // ○
  const data = ref({ id: 1 })
  watch(
    () => data.id,
    () => {}
  )
  ```

  **🧨 深度監控掃描!! 非不得已監聽方式，這樣就可以監聽到 `ref` 的變動，但非常耗效能，每次都要掃描內部資料。**

  ```js
  const data = ref({ id: 1 })
  watch(data, () => {}, { deep: true })
  ```

  :::

- ### 監聽 `reactvie` 資料

`reactive` 都是 **物件型別**，所以在監聽整個 `物件` 時，回調函式只會有一個 `參數` 更改後的值。

`watch( reactiveData, (newVal) => { //要執行的事 } )`

```js {3-5}
const data = reactive({ id: 1 })

watch(data, (newVal) => {
  console.log(`這是新的 id： ${newVal}`)
})

const setData = () => {
  setTimeout(() => {
    data.id = 2
  }, 1000)
}
```

**監聽 `reactvie` 內部，對象必須是函式回調 `()=>`**

這個時候，在**回調函式**的 `參數` 可以使用 **新的值與舊的值**。

```js {4-5}
const data = reactive({ id: 1 })

watch(
  () => data.id,
  (newVal, oldVal) => {
    console.log(`
    這是新的 id： ${newVal}
    這是舊的 id: ${oldVal}
    `)
  }
)

const setData = () => {
  setTimeout(() => {
    data.id = 2
  }, 1000)
}
```

**監聽多組 `reactive`**

```js
watch(
  [() => data.id, () => data2.id],
  ([newData, newData2], [oldData, oldData2]) => {}
)
```

## 👁wawtchEffect 追蹤監聽

只要被設置，載入頁面時就會運作，當內部`有使用的資料`**變更**時，就會再次 **調用**

- ### 監聽方式

  只要被放入執行的項目的**資料**，就會被加入 **追蹤監聽**，當內部有任何一個資料被更新，就會馬上執行內部的項目。
  :::tip
  建立監聽時，載入頁面同時也被執行 !!
  :::

  `watchEffect( ()=> { // 執行項目(同時受監聽) } )`

  ```js {3}
  const count = ref(0)

  watchEffect(() => console.log(count.value))
  // -> 載入頁面時先 logs 0

  setTimeout(() => {
    count.value++
    // -> 資料變動時 logs 1
  }, 100)
  ```

- ### 停止監聽

  當 `watchEffect` 這個方法，在 `setup` 或 `其它生命周期`時，
  將 `watchEffect` 用變數接下，想停止時 **執行** 這個`變數`

  ```js {5,7}
  setup() {
      const count = ref(0)

      // 將 watchEffect 用變數接起
      const stop = watchEffect(() => {
        console.log(count.value)
        if (count.value === 5) return stop() // 執行變數函式，將停止
      })

      // 執行每秒累加
      setInterval(() => {
        count.value++
      }, 1000)

      return {
        count,
      }
    },
  }
  ```

- ### 停止監聽執行中的**非同步**

  有些時候，你停止了監聽的函式運作，但函式裡如果有**非同步函式**正在運行，還是會被回傳，這時就需要清掉 **非同步的函式運行**

  **如果 `非同步函式` 是一個變數**

  ```js
  watchEffect((onInvalidate) => {
    const token = performAsyncOperation(id.value)
    onInvalidate(() => {
      // id has changed or watcher is stopped.
      // invalidate previously pending async operation
      token.cancel()
    })
  })
  ```

  **如果使用 `async` `await`**

  要在 `await` 之前，先註冊清除的方法。

  ```js
  const data = ref(null)
  watchEffect(async onInvalidate => {
  onInvalidate(() => {...}) // we register cleanup function before Promise resolves
  data.value = await fetchData(props.id)
  })
  ```

  [參考](https://v3.vuejs.org/guide/reactivity-computed-watchers.html#side-effect-invalidation)

## 🆚 watch VS watchEffect

| -    | watch                  | watchEffect           |
| ---- | ---------------------- | --------------------- |
| 說明 | 被動監聽               | 主動監聽              |
| O    | 可以拿到`參數` 新/舊值 | 可以停止監聽          |
| x    | 無法停止監聽           | 無法取`參數`得新/舊值 |

### watch 轉 watchEffect

主動監聽方式 => `{immediate: true}`

```js
watch(data, () => {}, { immediate: true })
```
