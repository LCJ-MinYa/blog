---
title: vscode不能识别第三方模拟器
date: 2019-11-25 9:57:48
categories: flutter
tags: 
- flutter
- app
- 跨平台app
---

## 夜神模拟器
* 先打开夜神模拟器
* 进去安装目录bin文件夹下`D:\nox\Nox\bin`
* 然后命令行执行命令`./nox_adb.exe connect 127.0.0.1:62001`(./不能省略，否则不能识别命令)
* 每次关闭模拟器重新开启都需要重新执行一遍以上步骤

## 采用android studio创建的模拟器
* 夜神会导致各种奇怪问题`Unable to load asset: AssetManifest.json`,官方也是建议不要使用其他非标准开发工具
