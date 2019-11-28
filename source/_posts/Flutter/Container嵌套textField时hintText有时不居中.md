---
title: Container嵌套textField时hintText有时不居中
date: 2019-11-28 10:41:48
categories: flutter
tags: 
- flutter
- app
- 跨平台app
---

## 问题
> Container嵌套textField时hintText有时会不能居中显示，即便设置了Container的alignment还是无效

## 解决办法
* 设置textField的decoration中contentPadding属性即可（设置为0都可以生效，猜测应该是flutter本身BUG导致）
```
contentPadding: EdgeInsets.zero
```