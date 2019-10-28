---
title: flutter中dart语言技巧
date: 2019-10-28 17:10:48
categories: flutter
tags: 
- flutter
- app
- 跨平台app
---

## 字符串模板
```dart
int index = 0;
var imgUrl = "lib/images/banner${index + 1}.jpg";
```

## 本地图片资源
* 在lib下新建一个images文件夹，如果有2倍或者三倍图，再在images文件夹下新建2.0x, 3.0x文件夹
* 在pubspec.yaml中引入资源
```
  # To add assets to your application, add an assets section, like this:
  # assets:
  #  - images/a_dot_burr.jpeg
  #  - images/a_dot_ham.jpeg
  
  assets:
    - lib/images/banner1.jpg
    - lib/images/banner2.jpg
    - lib/images/banner3.jpg
```
* 在需要调用出调用
```dart
return new Image.asset(
    "lib/images/banner${index + 1}.jpg",
    fit: BoxFit.cover,
);
```