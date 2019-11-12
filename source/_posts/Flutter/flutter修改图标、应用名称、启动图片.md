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
1. ios原生设置启动页
   * 准备三个尺寸图片1x(375×750), 2x(750×1500), 3x(1125×2250)
   * 替换`ios` ▸ `Runner` ▸ `Assets.xcassets` ▸ `LaunchImage.imageset`下图片即可，保持命名一致
   * 让启动图全屏, `launchScreen.storyboard` ▸ `View Controller Scene` ▸ `View Controller` ▸ `View` ▸ `LaunchImage` ▸ `Content Mode`改为`Aspect Fill`.
![image](/images/flutter/launchImage.jpg)

> 刚开始这样设置, 不知道为什么总是先白屏一下然后才显示启动页，然后再进入APP,试过很多方法，最后又按照最初的方法莫名其妙好了。。。。未知。。。  
> `Content Mode`改为`Scale To Fill`,因为在flutter中BoxFit.fill对应此属性，为了与安卓fill统一(在真机ipone5测试中，Scale To Fill与BoxFit.fill最后其实效果还是不一样，所以还是考虑自己封装原生方法给flutter调用)

2. android原生设置启动页
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