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