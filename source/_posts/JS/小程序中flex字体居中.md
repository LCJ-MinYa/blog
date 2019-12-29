---
title: 小程序中flex字体居中
date: 2019-12-29 22:39:51
categories: js
tags:
- 小程序
- 前端
- javascript
---

## flex布局文本无法居中
```js
<style lang="less">
.step-index{
    width: 30rpx;
    height: 30rpx;
    background: #D2D2D2;
    border-radius: 100%;
    font-size: 16rpx;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

<template>
  <view class="step-index">1</view>
</template>
```

## 文本类行内元素采用line-height
```js
<style lang="less">
.step-index{
    width: 30rpx;
    height: 30rpx;
    line-height: 30rpx;
    background: #D2D2D2;
    border-radius: 100%;
    font-size: 16rpx;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

<template>
  <view class="step-index">1</view>
</template>
```
