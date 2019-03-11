---
title: hexo优化
date: 2018-12-08 00:22:01
categories:
- hexo
tags: 
- hexo
---

## 谷歌字体导致访问慢问题
> 如果用hexo默认主题，会有该问题，采用next主题即可解决。

## shell命令类似--name解析问题
```
npm install react-native --save
--save在编译会被解析成-save
解决方案是加上转义: -\-save
```