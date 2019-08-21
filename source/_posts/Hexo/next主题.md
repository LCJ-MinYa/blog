---
title: next主题
date: 2018-12-08 00:20:48
categories:
- hexo
tags: 
- hexo
- next
---

## 安装

* cd 项目根目录
* git clone https://github.com/iissnan/hexo-theme-next themes/next

## 启用和选择主题模式

* ### 启用主题
1. 打开站点配置文件_config.yml，找到 theme 字段，并将其值更改为 next

* ### 选择主题模式
1. 项目根目录/theme/next/_config.yml,将scheme: Mist切换

## 添加分类标签
1. 打开<code>/themes/next/languages/zh-Hans.yml</code>文件，在menu目录下添加:
```
menu:
  home: 首页
  archives: 归档
  categories: 分类
  tags: 标签
  about: 关于
  search: 搜索
  schedule: 日程表
  sitemap: 站点地图
  commonweal: 公益404
  reactnative: ReactNative
  apidoc: ApiDoc
  js: Javascript
  css: Css
  flutter: Flutter
  html: Html
  ios: iOS
  macos: MacOS
  mongodb: MongoDB
  thinkjs: ThinkJS
  vmware: VMware
  centos: CentOS
  hexo: Hexo
  ide: IDE
  git: Git
  docker: Docker
  android: Android
```

2. 打开<code>/themes/next/_config.yml</code>文件，在menu目录下添加:
```
menu:
  home: / || home
  # about: /about/ || user
  # categories: /categories/ || th
  # archives: /archives/ || archive
  # schedule: /schedule/ || calendar
  # sitemap: /sitemap.xml || sitemap
  # commonweal: /404/ || heartbeat
  centos: /categories/centos/
  git: /categories/git/
  js: /categories/js/
  css: /categories/css/
  reactnative: /categories/reactnative/
  apidoc: /categories/apidoc/
  flutter: /categories/flutter/
  html: /categories/html/
  ios: /categories/ios/
  macos: /categories/macos/
  mongodb: /categories/mongodb/
  thinkjs: /categories/thinkjs/
  hexo: /categories/hexo/
  vmware: /categories/vmware/
  ide: /categories/ide/
  docker: /categories/docker/
  android: /categories/android/

  tags: /tags/ || tags
```

3. 在<code>/source/_posts/</code>目录下新建对应名称文件夹(如新建Android，目录为<code>/source/_posts/Android</code>)，后续该分类文章就放在该目录下(非必要步骤，建议添加使目录更清晰)

