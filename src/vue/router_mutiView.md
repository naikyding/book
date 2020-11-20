---
title: 多重視圖
date: 2020-11-20
sidebar: 'auto'
categories:
  - vue
  - router
tags:
  - router
  - routes
  - muti
  - routerview
---

有時候在某一個頁面，想要有很多個`<router-view></router-view>`，比如是一個布局
(slider / main) ，你可以使用`多重視圖`，這時 `<router-view></router-view>`就不是只有一個出口而已了!  
[範例](https://jsfiddle.net/posva/6du90epg/)

:::tip
這時`<router-view>` 沒有 `name`的命名，將會是 `default`
:::

```js {1}
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```

```js {6}
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz,
      },
    },
  ],
})
```

:::danger
當有多重視圖時，`components` 要正確加上 `s`，且一定要配置 `default` 的組件
:::

## 嵌套命名視圖

當你有一個比較複雜的布局時，而且還會動態更動布局，這個時候非常適合 `嵌套命名視圖`
[範例](https://jsfiddle.net/posva/22wgksa3/)

```
/settings/emails                                       /settings/profile
+-----------------------------------+                  +------------------------------+
| UserSettings                      |                  | UserSettings                 |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
| | Nav | UserEmailsSubscriptions | |  +------------>  | | Nav | UserProfile        | |
| |     +-------------------------+ |                  | |     +--------------------+ |
| |     |                         | |                  | |     | UserProfilePreview | |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
+-----------------------------------+                  +------------------------------+
```

- Nav 只是一个常规组件。
- UserSettings 是一个视图组件。
- UserEmailsSubscriptions、UserProfile、UserProfilePreview 是嵌套的视图组件。

此時 `/settings` 會依 `emails` 與 `profile` 做不一樣的動態布局

這是 `/settings` template 應是：

```js
// UserSettings.vue
<div>
  <h1>User Settings</h1>
  <NavBar />
  <router-view />
  <router-view name="helper" />
</div>
```

router 布局應該是

```js
{
  path: '/settings',
  // 你也可以在顶级路由就配置命名视图
  component: UserSettings,
  children: [{
    path: 'emails',
    component: UserEmailsSubscriptions
  }, {
    path: 'profile',
    components: {
      default: UserProfile,
      helper: UserProfilePreview
    }
  }]
}
```
