---
title: ThinkJs
date: 2018-12-07 23:53:04
categories: thinkjs
tags:
- 前端
- node
- thinkjs
---

ThinkJs

3. x版本多模块不能默认模块， 访问必须带上模块名.

## 关于api中中断处理

* this.fail(500, '请求错误!');必须带上return false;
* 在thinkjs类中，调用父类的方法，必须在子类return false才能中断api进行结果返回.