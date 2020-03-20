---
title: 实时监听input值的实时改变
date: 2020-3-20 15:52:45
categories: js
tags:
- 前端
- html
- javascript
---

## html结构
```html
<!--   register内容开始  -->
<ul class="bash-box register-box">
    <li>
        <span>手机号</span>
        <input id="js_tel" type="number" maxlength="11" placeholder="请输入手机号" />
    </li>
    <li class="code">
        <span>验证码</span>
        <input id="js_code" type="number" maxlength="11" placeholder="请输入验证码" />
        <button id="js_get_code_btn">获取验证码</button>
    </li>
</ul>
<!--   register内容结束  -->

<a class="wx-register-btn">一键注册</a>
```

## js逻辑
```js
//因为当前页面就两个input，所以这里直接用的属性名选择器
$('input').bind('input propertychange', function() { 
    var tel = $("#js_tel").val();
    var code = $("#js_code").val();

    if(tel && code){
        $(".wx-register-btn").addClass("active");
    }else{
        $(".wx-register-btn").removeClass("active");
    }
});
```

## 分析
* `onchange`事件是在输入框失去焦点`onblur`时候触发，不符合实时改变。
* `keyPress`在Android可以触发，iOS不可以。(`keyDown`和`keyUp`可以)。

## js动态改变input值不触发propertychange
* 使用Js动态改变input的值时，没有任何鼠标和键盘的事件，所以并不能触发监听
* 解决办法是在Js改变这个值之前加上以下代码。
```js
$("#inputId").trigger("input");
```