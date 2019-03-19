---
title: hexo添加搜索功能
date: 2019-03-19 13:49:41
categories:
- hexo
tags:
- hexo
- next
---

## 安装插件
* <code>npm install hexo-generator-searchdb -\-save</code>

## 修改hexo站点配置文件
* 路径: <code>blog/_config.yml</code>
```
search:
    path: search.xml
    field: post
    format: html
    limit: 10000

PS:每个冒号后面都有空格。
```


## 修改next主题配置文件
* 路径: <code>/blog/themes/next/_config.yml</code>
```
local_search:
    enable: true

PS: enable由false改为true。
```


## 问题汇总
* LocalSearch一直转圈，卡死问题.
> 由于使用的是localSearch，会透过编译完后public里面的search.xml作为搜寻主体，有了搜寻主体后就要先去验证格式的正确性.内容量太大也没办法肉眼去验证，就找了线上验证的网站，
把 search.xml 的内容全部丢下去验证后跳出了这个错误。
[验证xml文件格式](https://www.xmlvalidation.com/)

* 编译后缺少index.html
> <code>npm ls --depth 0</code>(查看npm安装各hexo插件的情况),然后逐一安装缺失的包即可。