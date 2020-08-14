---
title: 微信小程序日常技巧
date: 2020-8-14 15:50:45
categories: js
tags:
- 前端
- javascript
- 微信小程序
- wepy
---

## wepy保存没有实时编译
* wepy中除了页面的其他组件，必须放在components文件夹下面，才能触发实时编译，否则每次都需要在引入组件的页面保存一次才能编译。

## hidden不生效
* hidden不生效问题，其节点必须是块级元素display:block

## 组件循环
* 循环子组件时，页面源码应该能看到具体的循环个数，如果只有一个，要检查是否用repeat循环，而不是用微信原生的循环方式

## 原生循环拿不到item数据问题
* repeat已成功渲染子组件，子组件再循环渲染数据，无论怎样都不显示，检查页面是否有微信原生循环渲染，导致子组件内item无法识别的问题

## wepy中

## 借鉴网址
[hidden不生效问题](https://www.cnblogs.com/auto123-num/p/11163862.html)