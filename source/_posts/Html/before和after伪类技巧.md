---
title: before和after伪类技巧
date: 2019-07-19 10:27:38
categories: html
tags:
- 前端
- html
- css
---

## 伪类实现（发布日期：2019-05-14）
* 一般来说，发布日期是固定文本，后面的日期是由服务器动态拉去渲染的，按照普通做法
```
/*-- html --*/
<p class="date">发布日期：2019-05-14</p>

/*-- css --*/
.date{
    font-size: 14px;
    color: #333;
}

/*-- js --*/
var date = new Date();
$(".date").html('发布日期：' + date);
```

* 伪类实现
```
/*-- html --*/
<p class="date">2019-05-14</p>

/*-- css --*/
.date{
    font-size: 14px;
    color: #333;
}
.date:before{
    content: '发布日期：'
}
/*-- js --*/
var date = new Date();
$(".date").html(date);
```





