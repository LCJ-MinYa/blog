---
title: node版本过高导致hexo安装报错
date: 2021-09-11 10:03:41
categories:
    - hexo
tags:
    - hexo
    - next
---

## 方案一 - 直接升级当前项目 hexo 版本

## 方案二 - nvm 管理 node 版本

-   安装 nvm，细节忽略
-   nvm 安装需要的 node 版本<code>nvm install v10.0.0</code>
-   nvm 使用当前安装的 node 版本<code>nvm use v10.0.0</code>
-   全局安装 hexo 指定版本，版本号可根据项目中 package.json 依赖的 hexo 版本`npm install hexo@3.8.0 -g`
