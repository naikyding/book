---
title: Slot 組件插槽大全
date: 2020-09-22
categories:
  - vue
tags:
  - slot
  - v-slot
  - 組件
  - 元件
  - slot scope
  - named slot
  - 插槽
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Tn1X7jJNoL4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/TDz6DPZeO0M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 概念 [Vue.js Slot](https://vuejs.org/v2/guide/components-slots.html#Compilation-Scope)

在  compoent 中 `<slot>`提供了一個`插槽`的概念，可以讓你先預留一個位子，後續父層使用時將內容**插入**。

## 基本使用

- 在元件中，設置 `<slot>`
- 在父層引用的標籤中，寫上想插入的內容

**父層使用 BtoomNav 元件**

```vue
<BtoomNav> 父層插入的內容 </BtoomNav>
```

**BtoomNav 元件**

```vue
<template>
  <div>
    <span>這是元件的內容</span>
    <slot></slot> // 這裡是預留位子
  </div>
</template>
```

**實際呈現** 渲染時 `<slot>` 就會被替換成插入的內容

```vue {4}
<template>
  <div>
    <span>這是元件的內容</span>
    父層插入的內容
  </div>
</template>
```

::: warning 注意
如果 `<BtoomNav>` 元件內沒有用 `<slot>` 標籤來預留位子，那父層就算在**標籤**有插入內容，都會被丟棄!!

`<BtoomNav>`我會被丟棄`</BtoomNav>`
:::

## 編譯範圍

雖然 slot 可以由父層任意插入內容，當你在使用時**編譯範圍**只限定在使用的層級。

**父層**

當我在父層組件插入內容時，這個變數只能在父層被找到!!

```vue {2}
<BtoomNav>
  {{ nav.item }}
</BottomNav>
```

**組件**

組件中使用的變數，也只能在組件內被設置及使用，父層無法找到!!

```vue {3}
<template>
  <div>
    <span>這是元件的內容 {{ defaulsData }}</span>
    <slot></slot>
  </div>
</template>
```

::: warning 規則
父模板中的所有內容均在父範圍內進行編譯；

子模板中的所有內容均在子範圍內進行編譯。
:::

## 預設內容

`<slot>` 除了可以預留位子提供給父層插入，也可以提供默認的內容!
只有在未插入 `<slot>` 內容時，才會顯示!

::: tip 常用使用情境
當無資料被插入時，可以顯示 "沒有資料" layout，而有資料就顯示資料!
:::

在元件內的插槽，預先寫入 **默認** 的內容

```vue
<button type="submit">
  <slot>Submit</slot>
</button>
```

如果父層沒有插入

```vue
<submit-button></submit-button>
```

渲染後，就是**預設**的默認內容

```vue
<button type="submit">
  Submit
</button>
```

如果父層有插入內容

```vue
<submit-button>
  Save
</submit-button>
```

渲染後，就會是被父層插入的內容!

```vue
<button type="submit">
  Save
</button>
```

### 實例

<iframe
  src="https://codesandbox.io/embed/quirky-jennings-bz4o7?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
  title="quirky-jennings-bz4o7"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## named slots 命名插槽

組件內部不一定只能有一個 `<slot>` ，但當有多個時，你就需要命名來指定 **什麼樣的內容到哪個插槽**，這個時候就需要使用 `name` 的屬性，如 `<slot name="header"></slot>`。

### 設置命名 slot

在組件中命名插槽，可以讓你更有效率的指定內容到特定的位子。
**當`<slot>`沒有命名時，它的名稱就叫做 `default`**

```vue {5,8,11}
<!-- 元件 base-layout -->
<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
```

### 插入命名的 slot (舊版作法)

如果想把指定的內容，你必須使用 `v-slot:名稱` 來將其插入特定的 `<slot>`
而 `v-slot` 只能在 `<template>` 中被使用!!!

```vue {3,10}
<!-- 父層使用 -->
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

### 插入命名的 slot (最新方法)

此方法不需要使用 `<template>` 只需在要插入的內容加上 `slot` 屬性，`slot="插槽名稱"`，也可以達到一樣的效果，而且更簡潔。

```vue {3,8}
<!-- 父層使用 -->
<base-layout>
  <h1 slot="header">Here might be a page title</h1>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <p slot="footer">Here's some contact info</p>
</base-layout>
```

### 插入命名的 slot (更新更簡潔)

如果你還使用 `<template>` 來插入`<slot>`內容，此方法不需要使用屬性`slot="插槽名稱"` 直接在屬性上 `#插槽名稱` 也可以達到一樣的效果，而且更簡潔。

```vue {3,8}
<!-- 父層使用 -->
<base-layout>
  <template #header>Here might be a page title</template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template #footer>Here's some contact info</template>
</base-layout>
```

:::warning 注意
此方法只能在`<template>`使用!!
:::

以上面的例子，最終被渲染出來的內容會(如下)，
現在 `<template>` 元素內的所有內容都將傳遞到相應的插槽。

```vue {3,6-7,10}
<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>
```

::: warning 未具命 slot
假設你沒有指定 slot 的名稱就插入，那它將被插在 `default (未命名)` 的 slot 上。
:::

## slot scope 插槽資料外傳

大部分都是將資料傳入元件顯示，**但如果你的資料是在元件層**，你可以使用此方法將資料傳給父層!!
或許，會比使用 vuex 更方便!!

### 觀念說明

當你在元件中使用資料來渲染，是在自然不過的事!

```vue
<!-- current-user 元件 -->
<span>
  <slot>{{ user.lastName }}</slot>
</span>
```

但，如果使用的父層，也想使用元件中的資料，是無法的! [編譯範圍規則](#編譯範圍)

```vue {3}
<!-- 父層使用 -->
<current-user>
  {{ user.firstName }} <!-- 無法找到變數 -->
</current-user>
```

### 如何使用 slot-scope

- 元件層．傳入資料 `:發送變數命名="資料"`
- 父層．接受資料 `slot-scope="接收變數命名"`

#### 元件傳送資料

在元件層 `<slot>` 屬性中，命名`送出的資料變數`帶上 `資料`，就像傳 props 一樣!

```vue {3}
<!-- current-user 元件 -->
<span>
  <slot :user="user">
    {{ user.lastName }}
  </slot>
</span>
```

#### 父層接收資料

而父層也是在屬姓上接收資料，`slot-scope` 寫上 `接收資料的變數`，進而來操作`<slot>` 傳來的資料做使用。

```vue {3}
<!-- 父層使用 -->
<current-user>
  <template slot-scope="data">
    {{ data.user.firstName }}
  </template>
</current-user>
```

`slot-scope="data"` 之中的`data` 是可以隨意命名的，他是存在父層的資料變數名稱。

```vue {3}
<!-- 父層使用(簡潔用法) -->
<current-user>
  <template slot-scope="{ user }">
    {{ user.firstName }}
  </template>
</current-user>
```

更簡潔的方式，或許你可以使用 ES6 解構賦值語法，來替代變數寫法。

```vue {3}
<!-- 父層使用(default)) -->
<current-user>
  <template #default="{ user }">
    {{ user.firstName }}
  </template>
</current-user>
```

你還可以用更更簡潔的方式

---

#### 實例

一般來說，slot 都會有命名，在命名情況下接收變數的實例如下：

```vue {3}
<!-- 父層使用(default)) -->
<current-user>
  <h1 slot="title" slot-scope="{ user }">
    {{ user.firstName }}
  </h1>
</current-user>
```
