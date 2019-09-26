---
title: IE中JS兼容性问题
date: 2019-09-26 16:53:45
categories: js
tags:
- 前端
- javascript
- ie
---

## ie中new Date解析("2019-01-01")提示无效日期
* 短横线格式的日期在IE下不支持这种转换，需要换成斜杠格式的日期,如: 2019/01/01
```
var date = "2019-01-01";
var newDate = date.replace(new RegExp(/-/gm), "/");
var initDate = new Date(newDate);
```

## IE9以上与IE9及一下请求区别
* IE9以上发送的XHR请求
* IE9及一下发送的是其他请求，可以在F12调试中网络里面看到区别