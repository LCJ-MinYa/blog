---
title: 突破!important
date: 2019-07-31 09:48:23
categories: css
tags:
- 前端
- css
---

## 不增加class的情况下如果突破!important
```css
.div{
  width: 200px!important;
  height: 200px;
  background: #fff;
}
```

## 实现
```css
.div{
  width: 200px!important;
  height: 200px;
  background: #fff;
  max-width: 250px;
}
```

## 结论
* 当min-width、max-width、min-height、max-height和!important 发生冲突时，前面4个才是大哥。
* 当min和max发生冲突时，min才是大哥。
