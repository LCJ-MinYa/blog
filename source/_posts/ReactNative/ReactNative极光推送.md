---
title: ReactNative极光推送
date: 2019-02-14 13:53:55
categories: reactnative
tags:
- reactnative
- app
- 跨平台app
---

## 前提条件

* rn版本: 0.56.0
* com.android.tools.build:gradle:2.3.3
* distributionUrl=https\://services.gradle.org/distributions/gradle-3.5.1-all.zip
* 当前时间2019-02-14(最新版本如下)
* jpush-react-native版本: 2.5.1 => 降级 2.1.3
* jcore-react-native版本: 1.3.1 => 降级 1.2.1
> 首先保证rn版本不变动，采用jpush-react-native因为gradle版本过低会有各种问题，在不改变gradle版本的情况下，降级jpush-react-native插件版本

## 安装极光推送

* 1.安装jpush-react-native, jcore-react-native. <code>npm install jpush-react-native@版本号 jcore-react-native@版本号 --save</code>版本号分别为2.1.3和1.2.1
* 2.<code>react-native link jpush-react-native</code>(针对性的link，避免之前手动配置的其它插件重复配置造成报错)
* 3.<code>react-native link jcore-react-native</code>(针对性的link，避免之前手动配置的其它插件重复配置造成报错)
*

## 问题排查借鉴网址