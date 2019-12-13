---
title: google验证码reCAPTCHA服务
date: 2019-12-13 16:40:45
categories: js
tags:
- 前端
- javascript
---

## 首先注册google验证码reCAPTCHA服务
* 需要翻墙，[注册地址](https://www.google.com/recaptcha/intro/v3.html)
* 本地测试需要配置域名`127.0.0.1`或者`localhost`

## 前端配置
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="recaptcha" class="g-recaptcha"></div>
    <div id="click">重置</div>
</body>
</html>
<script src="https://www.recaptcha.net/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
<script type="text/javascript">
var verifyCallback = function(response) {
    //发送ajax请求进行后端判定
    //成功继续，失败重置grecaptcha.reset();
};

var onloadCallback = function() {
    grecaptcha.render('recaptcha', {
        'sitekey' : '6Ld2hscUAAAAAPymzwE-ql47Kut-yYxOkExKg8Uy',
        'callback': verifyCallback
    });
};

//手动重置
document.getElementById('click').onclick = function(){
    grecaptcha.reset();
};
</script>
```

## 服务端自行配置

## 延申资料
* google验证码reCAPTCHA服务前端镜像
```
https://www.google.com/recaptcha/api.js => https://www.recaptcha.net/recaptcha/api.js
```
* google验证码reCAPTCHA服务后端镜像
```
https://www.google.com/recaptcha/api/siteverify => https://www.recaptcha.net/recaptcha/api/siteverify
```
* github地址`https://github.com/google/recaptcha`
* 示例地址`https://recaptcha-demo.appspot.com/`
