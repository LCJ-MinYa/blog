---
title: flutter在安卓模拟器上花屏问题
date: 2019-11-25 10:00:48
categories: flutter
tags: 
- flutter
- app
- 跨平台app
---

## 原因
> 这种问题，也许是你使用圆角属性，也许是你使用按钮组件

## 解决方案
> 将显卡渲染模式设置成兼容模式即可
![image](../../../../../images/flutter/android_show.png)