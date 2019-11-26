---
title: flutter真机添加网络请求权限
date: 2019-11-25 10:00:48
categories: flutter
tags: 
- flutter
- app
- 跨平台app
---

## android
* 在`android/src/main/AndroidManifest.xml`中添加下列代码
```xml
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
```
> 不要放到application里.