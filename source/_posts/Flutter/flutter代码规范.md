---
title: flutter代码规范
date: 2019-10-28 17:10:48
categories: flutter
tags: 
- flutter
- app
- 跨平台app
---

## _私有属性或方法的使用
> 如果一个方法只有该文件内使用，则需要加上_表示为私有属性或方法。

## 组件或者方法封装
* 组件的封装需要加上Widget表示返回的为一个组件.并且封装的名称结尾带上Widget
* 方法的封装前面不加任何类型，以此来区别组件
```dart
//方法封装
_doSomeThing(){
    ...
}

//组件封装
Widget _bannerWidget(){
    return Widget;
}
```

## this省略
> 所有的方法或者属性调用，省略掉this