---
title: ref 元件綁定
date: 2020-12-07
sidebar: 'auto'
categories:
  - vue
  - vue3
tags:
  - ref
  - 綁定
  - 元件綁定
  - dom綁定
---

```html
<input ref="textInput" id="input" type="text" />
```

## 一般綁定

```js
document.querySelect('#input')
```

## ref 綁定

建議使用 `ref` 綁定元素，不要使用 **一般綁定**，這樣更可以直接`響應`到這個**元素**

- 先設立`變數`，指定為 `null`
- 這樣就會自動綁定`元素`
- `.value` 可以訪問到這個 **元素**

```js
setup() {
  const textInput = ref(null)

  onMounted(()=> {
    console.log(textInput.value) // <input type="text" />
  })

  return {
    textInput
  }
}
```
