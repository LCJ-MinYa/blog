---
title: flutter渠道和版本管理
date: 2019-10-21 15:00:48
categories: flutter
tags: 
- flutter
- app
- 跨平台app
---

## flutter渠道
* 查看渠道命令 `flutter channel`
* 切换渠道命令 `flutter channel master`(master dev beta stable, 正式开发建议使用master)

## flutter版本
* 查看当前版本 `flutter --version`
* 查看所有存在版本 `flutter version`
* 切换版本 `flutter version v1.9.0`(对应版本号)

## 黑苹果xcode版本导致高版本flutter不能运行
* 通过切换低版本来兼容xcode版本