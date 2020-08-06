---
title: sourcetree克隆远程仓库
date: 2020-08-06 21:07:20
categories:
- git
tags:
- git
- ssl
- sourcetree
---

## 克隆远程仓库失败
- ### 报错信息
这是一个无效的源路径，报错代码为`SSL certificate problem: self signed certificate`

- ### 解决方案
设置全局忽略SSL认证，命令行执行`git config --global http.sslVerify false`
