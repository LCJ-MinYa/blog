---
title: flutter修改图标、应用名称、启动图片
date: 2019-11-8 10:05:48
categories: flutter
tags: 
- flutter
- app
- 跨平台app
---

## 应用名称
* `Android` 是在 `android` ▸ `app` ▸ `src` ▸ `main` ▸ `AndroidManifest.xml` 中修改`android:label="XXX"`;
* `iOS` 在 `ios` ▸ `Runner` ▸ `Info.plist` 中修改`CFBundleName`对应的Value

## APP图标
* (https://icon.wuruihong.com/)[图标工场]在线生成所有平台,所有尺寸图标
* ios在 `ios` ▸ `Runner` ▸ `Assets.xcassets` ▸ `AppIcon.appiconset`文件夹中替换相应尺寸的图片,将下载的压缩包中的AppIcon.appiconset直接替换。
* android 在`android` ▸ `app` ▸ `src` ▸ `res` ▸ `mipmap-...`文件夹中替换相应尺寸的图片,将下载的压缩包中的`mipmap-...`等所有文件夹直接替换。

## 启动页

##### ios原生设置启动页
   * 准备三个尺寸图片1x(375×750), 2x(750×1500), 3x(1125×2250)
   * 替换`ios` ▸ `Runner` ▸ `Assets.xcassets` ▸ `LaunchImage.imageset`下图片即可，保持命名一致
   * 让启动图全屏, `launchScreen.storyboard` ▸ `View Controller Scene` ▸ `View Controller` ▸ `View` ▸ `LaunchImage` ▸ `Content Mode`改为`Scale To Fill`.
![image](../../../../../images/flutter/launchImage.jpg)
   * ios需要6个约束来达到原生和flutter启动图效果一致`1.centerX 2.centerY 3.top = 0 4.left = 0 5.right = 0 6.bottom = 0`
> 图中`Content Mode`改为`Scale To Fill`,因为在flutter中BoxFit.fill对应此属性，为了与安卓fill统一

##### android原生设置启动页
   * 在android/app/src/main/res/drawable/launch_background.xml中取消注释切修改fill属性
```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Modify this file to customize your launch splash screen -->
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:drawable="@android:color/white" />

    <!-- 添加下列代码 -->
    <item>
        <bitmap
            android:gravity="fill"
            android:src="@mipmap/launch_image" />
    </item>
</layer-list>
```
   * 然后在mipmap中添加对应的启动图资源即可
   * 需要注意的是安卓的启动图片资源需要和flutter使用的启动图片资源比例要保持一致

##### 如果需要自定义启动图时间，在flutter中再模拟一次启动图
 ```dart
 import 'package:flutter/material.dart';

class LaunchImageScreen extends StatefulWidget {
    @override
    _LaunchImageScreenState createState() => _LaunchImageScreenState();
}

class _LaunchImageScreenState extends State<LaunchImageScreen> {
    @override
    void initState() {
        super.initState();
        _startHome();
    }

    @override
    Widget build(BuildContext context) {
        return Image.asset(
            'lib/images/launch/LaunchImage.png',
            fit: BoxFit.fill
        );
    }

    //显示2秒后跳转到HomeTabPage
    _startHome() async {
        await Future.delayed(const Duration(milliseconds: 2000), () {
            Navigator.pushReplacementNamed(context, '/tabbar');
        });
    }
}
 ```