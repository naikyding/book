---
title: Component 元件
date: 2020-09-24
categories:
  - vue
tags:
  - component
  - 組件
  - 元件
---

# 資料傳遞

# 動態切換

使用屬姓的 `is="元件名稱"` 來切換想要顯示的 compontent 元件。

當你使用 tab 想要可以即時切換顯示內容時，可以使用此方法。

<iframe src="https://codesandbox.io/embed/modern-pine-6q3qj?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
     title="modern-pine-6q3qj"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

**父層**

```vue
<component :is="layout" />
```

```js
<script>
export default {
  name: "App",
  components: {
    HelloWorld,
    ContentA,
    ContentB
  },

  data: () => ({
    status: true
  }),

  computed: {
    layout() {
      if (this.status) return "ContentA";
      return "ContentB";
    }
  }
};
</script>
```
