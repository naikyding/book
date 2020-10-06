---
title: Custom Event 客製化事件
date: 2020-10-05
sidebar: 'auto'
categories:
  - vue
tags:
  - component
  - 組件
  - 元件
  - emit
  - vmodel
  - 傳子
  - 傳父
---

## \$emit 傳父

如果組件想要修改資料，只能透過**事件** 來驅動父層(資料源)來修改，不可以直接由組件修改!

### 範列

<iframe src="https://codesandbox.io/embed/blazing-night-foswr?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
     title="blazing-night-foswr"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### 使用方式

**組件**

組件 `props` 接收 **父層** 的資料，
如果要修改資料的話，要在**事件**上使用 `$emit`

```vue {19}
<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="changeText">修改文字</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      requied: true,
    },
  },

  methods: {
    changeText() {
      this.$emit('change-text', 'From component text')
    },
  },
}
</script>
```

**父層**

在**屬性**上接收**子層** 打過來的事件，使用 `@事件名稱="父層要執行的事件"`
再利用本地的事件，來修改資料!

```vue {2,12-14}
<template>
  <CustomEvent :msg="message" @change-text="change" />
</template>

<script>
export default {
  data: () => ({
    message: 'From App text',
  }),

  methods: {
    change(text) {
      this.message = text
    },
  },
}
</script>
```

:::warning
只能從資料的來源，來修改資料，不可以接收資料的組件修改。
:::

---

## 組件的 v-model

除了可以使用 `$emit` 讓子層傳遞事件來修改**父層**的資料外，也可以使用 `v-model` 來讓 **子層** 與 **父層** 同步資料!
:::tip
同時，你也不需要像一般的 `$emit` 要在 `父層` 綁定欲接收的**事件屬性**
:::

### 範例

<iframe src="https://codesandbox.io/embed/keen-lake-875y5?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
     title="keen-lake-875y5"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### 使用方式

**父層**

- 將資料以 `v-model` 綁至組件 (傳遞至組件內部)

  ```vue {4-5,18}
  <template>
    <div id="app">
      <p>父層的資料： {{ name }}</p>
      <!-- 使用 v-model 綁定資料 -->
      <CustomEvent v-model="name" />
    </div>
  </template>

  <script>
  import CustomEvent from './components/CustomEvent'

  export default {
    name: 'App',
    components: {
      CustomEvent,
    },
    data: () => ({
      name: 'naiky',
    }),
  }
  </script>
  ```

**子層** CustomEvent.vue

- 以 `model` 參數接下 **父層** 傳遞的資料
  - `prop` 定義在 **組件** 中，資料的`變數名稱`
  - `event` 定義欲修改 **父層** 資料的`事件名稱` (只能用 `kebab-case` 命名)
- `props` 定義此 `prop` 資料的資料格式
  - 索引為 `變數名稱`
- 雙向綁定 **this.\$emit(`事件名稱`, `傳送資料`)**
  `傳送資料` 將會直接替換 **父層** 的資源

  ```vue {23-25,28-30,32-35}
  <template>
    <div class="event">
      <div>
        使用者名稱：
        <h4>{{ name }}</h4>
      </div>
      <input
        placeholder="輸入想要修改父層的資料"
        @keypress.enter="submit"
        type="text"
        v-model="newName"
      />
      <button @click="submit">修改</button>
    </div>
  </template>

  <script>
  export default {
    data: () => ({
      newName: '',
    }),
    // ------------- 宣告綁定變數與綁定事件
    model: {
      prop: 'name',
      event: 'edit-name',
    },
    // ------------- 資料格式
    props: {
      name: String,
    },
    // ------------- 執行綁定事件
    methods: {
      submit() {
        this.$emit('edit-name', this.newName)
      },
    },
  }
  </script>
  ```

:::warning 注意
就算在 `model` 已經宣告資料的變數，仍需要在 `props` 宣告資料的格式! **這是必須的!**
:::
