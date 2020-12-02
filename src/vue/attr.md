---
title: 屬性綁定 attr
date: 2020-12-02
sidebar: 'auto'
categories:
  - vue
  - vue3
tags:
	- class
  - style
---

## class 綁定

如果你想將 **class** 使用 vue 實例的參數來綁定，可以使用 `:class=""`

### 基礎使用

綁定 vue 實例裡的參數

```html
<input :class="red" />
```

### 動態使用

用 vue 參數 `isOpen` 來決定是否將 `open` 加入 class

```html
<input :class="{open: isOpen}" />
```

### 混合使用

靜態的 class 與動態的 class 同時放一起

```html
<input :class="['red', {open: isOpen}]" />
```
