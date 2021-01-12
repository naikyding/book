---
title: STORE 進階
date: 2020-12-30
sidebar: 'auto'
categories:
  - vue
  - vuecli
tags:
  - store
  - vuex
  - state
  - actions
  - mutations
  - mapState
  - mapActions
  - mapMutations
  - module
---

## 進階操作 `map` 功能

引入

```js
import { mapState, mapGetters, mapActions } from 'vuex' // 引入
```

### **mapState**

- 方法一 **全部使用**

  ```js
  computed: mapState({
    // 箭头函数可使代码更简练
    count: (state) => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState(state) {
      return state.count + this.localCount
    },
  })
  ```

- 方法二 **局部使用** [參考](https://youtu.be/ksDmbBqpw2A?t=404)

  ```js
  computed: {
  	...mapState({
  		count: state => state.count  // count
  	}),

  	// [參考](https://youtu.be/ksDmbBqpw2A?t=404)影片 如果 computed 資料命名 與 state 裡資料命名相同，可以使用 陣列(與上面效果相同)
  	...mapState([ 'count' ])

  	filterItem() { //filterItem
  		return data.dataAry.filter( item => item.name === 'naiky' )
  	}
  }
  ```

### mapGetters

- `store`

  ```js
  // vuex
  getters:{
    doneList: { data } => data.filter(item => item.name === 'naiky'),
    listLength: { data } => data.length
  }
  ```

- `vue`

  ```js
  // vue
  computer:{
    ...mapGetters([ 'listLength' ]) // 以同樣以 listLength 為名 (與vuex 相同)

    ...mapGetters({ 'stateDataLenth': 'listLength' }) // 另外命名
  }
  ```

### mapActions [參考](https://youtu.be/ksDmbBqpw2A?t=680)

```js {2,10}
methods: {
  ...mapActions(['user/login']),

  userLogin() {
    const userData = {
      username: 'naiky',
      password: ''
    }

    this['user/login'](userData)
  }
}
```

### `mapMutations`

```js
methods: {
  ...mapMutations([''])
}
```
