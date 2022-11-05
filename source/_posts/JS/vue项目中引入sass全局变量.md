---
title: vue项目中引入sass全局变量
date: 2022-10-25 14:20:38
categories: js
tags:
- 前端
- javascript
- vue
---

## 页面引入
场景说明
```scss
// 这是一个存放变量的scss文件 "@/styles/_variables.scss"
$cf-light: #B6B6B6;
$cf-gray: #8C8C8C;
$cf-med: #505050;
$cf-dark: #333333;
$cf-highlight: #1775F0;
```
我要在其他文件内都用这个来保证样式统一。比如某个组件
```vue
<template>
  <div class="notice">注意！</div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.notice {
  color: $cf-highlight;
}
</style>
```

## sass-resources-loader
