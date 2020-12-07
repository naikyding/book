---
title: transition 轉場
date: 2020-12-07
sidebar: 'auto'
categories:
  - vue
  - vue3
tags:
  - transition
  - 轉場
---

:::danger 注意
轉場，必須在 **v-if** 或 **v-show** 才會被觸發!!
:::

## class 命名

進入與離開，共有六點 hook，可以設置
<img :src="$withBase('/img/transitions.svg')" alt="transitions">
**流程的順序是依：**

- 進入過程：

  - v-enter-from 元素**進來之前**
  - v-enter-active 元素插入的過程控制
  - v-enter-to 元素進來完成(元素 原狀態)

- 離開過程：
  - v-leave-from 元素還在 **將要離開** (元素 原狀態)
  - v-leave-active 元素離開的過程
  - v-leave-to 元素 **離開之後**

## 使用方式

- 定義資料的 `v-if` OR `v-show`
- 需要轉場的內容，包上 `<transition name="fade">`，且命名上 **轉場名稱**
- 定義轉場作動效果

## fade 範例

```html
<div>
  <button @click="status = !status">fade toggle</button>
  <transition name="fade">
    <p v-show="status">FADE TEXT</p>
  </transition>
</div>
```

```css
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
fade-leave-active {
  transition: opacity 0.5s ease;
}
```

<iframe src="https://codesandbox.io/embed/admiring-gauss-nvj3z?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
     title="admiring-gauss-nvj3z"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 位移顯示 render

```css
.render-enter-from,
.render-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.render-enter-active,
.render-leave-active {
  transition: all 0.5s ease;
}
```

## 透過 `animation` 定義

如果要更生動，可以透過 `animation` 來針對 `active` 定義轉場的過渡，會更靈活。
**記得反轉** 會更細緻

```css
/* pop */
.pop-enter-active {
  animation: pop 0.4s ease;
}
.pop-leave-active {
  animation: pop 0.4s ease reverse;
}

@keyframes pop {
  from {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  to {
    transform: scale(1);
  }
}
```
