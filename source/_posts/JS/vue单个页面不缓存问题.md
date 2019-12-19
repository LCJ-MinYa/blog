---
title: vue单个页面不缓存问题
date: 2019-12-19 16:59:38
categories: js
tags:
- 前端
- javascript
- vue
---

## 前置条件
```js
<template>
    <transition :name="transitionName">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </transition>
</template>
```

## 某个页面不缓存
* 缓存会造成页面mounted再次进入时不会触发，当前页面数据会保留之前状态。

## 解决办法一(重载)
* 粗暴的直接重载页面，用户体验不好
```js
window.location.reload();
```

## 解决办法二(手动触发和清空数据)
* 1.由于添加`<keep-alive>`之后mounted不执行，只有activated,deactivated会执行 
```js
activated() {
    this.dosomething();
}
```
* 2.如果是`vuex`数据源，手动触发重置`vuex`数据，如果是当前页面`data`,手动在当前页面重置
```js
//需要注意的是如果是vuex数据源重置，不能直接重置state，需要重置依次重置state的各个属性
[LOGOUT_PASSWORD](state){
    state.passwordList = {
        social: {
            isRequest: false,
            data: []
        },
        shopping: {
            isRequest: false,
            data: []
        },
        life: {
            isRequest: false,
            data: []
        },
        work: {
            isRequest: false,
            data: []
        },
        other: {
            isRequest: false,
            data: []
        }
    };
    state.activeType = "social";
    state.editPasswordData = {
        index: 0,
        data: {}
    };
    //该重置方法不生效
    // for (var i in initState) {
    //     state[i] = initState[i] // 递归赋值
    // }
}
```

## 解决方法三(手动销毁，未验证)
* 由于添加`<keep-alive>`之后mounted不执行，只有activated,deactivated会执行
```js
// 禁止缓存数据 防止下次选择数据不更新
deactivated () {
    this.$destroy(true)
}
``` 
