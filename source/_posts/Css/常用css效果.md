---
title: 常用css效果
date: 2018-12-07 22:37:23
categories: css
tags:
- 前端
- css
---

## modal中内容(未知宽度高度)绝对居中
```css
.father-box{
    display: none;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    background: rgba(0,0,0,0.6);
}
.child-box{
    position: absolute;
    width: 240px;
    overflow: hidden;
    top: 50%;
    left: 50%;
    -o-transform: translate3d(-50%,-50%,0);
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
}
```

## modal侧滑效果
```css
.father-box{
    display: none;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    background: rgba(0,0,0,0.6);
}
.child-box{
    position: absolute;
    top: 0;
    right: -45%;
    width: 45%;
    height: 100%;
    background: #fff;
    padding-top: 4.2rem;
}
```

```javascript
/* 显示和隐藏modal
 * 显示=》先显示modal，再显示对应的内容节点
 * 隐藏=》先隐藏内容节点，再隐藏modal
 * 拿显示来说，为什么不将内容节点的显示放在modal显示的回调中，从测试来看，并行UI更舒服一些
 */
var hideModal = function() {
    $(".child-box").animate({
        right: '-45%'
    }, 300);
    $(".father-box").fadeOut(300);
}

var showModal = function() {
    $(".father-box").fadeIn(300);
    $(".child-box").animate({
        right: 0
    }, 300);
}

/* 点击内容节点外的空白区域隐藏（事件冒泡）*/
$(".child-box").on('click', function() {
    event.stopPropagation();
})
```

## 安卓字体未垂直居中
```css
/*安卓浏览器字体不垂直居中，REM计算后小数点会导致，如果用偶数大于12px可以解决，如果使用REM则可以通过table布局来解决*/
<p class="h2">
    <span>无缝对接<i>云ERP进销存、网店版</i></span>
</p>

.header-content p.h2{
    display: table;
    width: 12.8rem;
    height: 1.35rem;
    background: url(../img/wulianbao/header_title_dec.png) no-repeat 50% 50%;
    background-size: cover;
    text-align: center;
    margin: 0 auto 0.5rem;
}
.header-content p.h2 span{
    display: table-cell;
    font-size: 0.75rem;
    vertical-align: middle;
    color: #fff;
}
.header-content p.h2 i{
    font-size: 0.75rem;
    color: #fff;
    font-weight: bold;
}

/*注意点: 父元素不能设置line-height，vertical-align: middle设置在子元素上*/
```

## img图片（未知宽高）在div中居中显示
```css
.father-box{
    width: 100%;
    height: 9.35rem;
    position: relative;
    overflow: hidden;
}
.father-box img{
    display: block;
    width: 80%;
    height: auto;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
```

## css中计算属性calc
```css
div{
    width:-webkit-calc(100% - 2.5rem);
    width:-moz-calc(100% - 2.5rem);
    width:calc(100% - 2.5rem);
}
```

## 手机端1px实现
```css
/* 第一种
 * 伪类缩放
 */
div:before{
    content: "";
    display: block;
    position: absolute;
    left: -50%;
    width: 200%;
    height: 1px;
    background: #eaeaea;
    bottom: 0;
    -webkit-transform:scale(0.5);
    transform: scale(0.5);
}
```

## 安卓浏览器字体不垂直居中
```css
.banner-box > a:before{
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 100%;
    margin-top: 1px;
}
```

## 确定高度多行文本垂直居中
```css
//最外层确定高度，第二层容器包含文本，不要确定高度，由内容撑开（table布局vertical-align: middle实现）
.footerBox {
    background: #fff;
    width: 100%;
    position: relative;
    overflow: hidden;
    text-align: center;
    height: 3.8rem;
    display: table;
}

.footerTextBox{
    position: relative;
    width: 100%;
    display: table-cell;
    vertical-align: middle;
}

.footerTextBox>p {
    font-size: .5rem;
    color: #999;
    line-height: 150%;
}
```

## input修改placeholder提示文本属性
```css
input::-webkit-input-placeholder{
    color: #999;
}
input:-moz-placeholder{
    color: #999;
}
input::-moz-placeholder{
    color: #999;
}
input:-ms-input-placeholder{
    color: #999;
}
```

## 超出显示省略号
```css
/*---- 单行 ----*/
p{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}

/*---- 多行 ----*/
p{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow:ellipsis;
}
```

## safair下input设置disabled导致透明
```css
input:disabled{
    color: blue;
    opacity: 1;
    -webkit-text-fill-color: blue;
}
```

## flex布局时不被挤压
```css
/*
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
*/
.child{
    flex-shrink: 0;
}
```

## flex布局占据剩余宽度
```css
/*
flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
*/
.child{
    flex-grow: 1;
}
```

## 打字效果
```html
<!-- html部分 -->
<div class="wrapper">
    <div class="typing-demo">
      有趣且实用的 CSS 小技巧
    </div>
</div>
```
```css
/* css部分 */
.wrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.typing-demo {
    /*
     * 1ch = 1个英文 = 1个数字
     * 2ch = 1个中文
     * ch 是一个相对单位，所谓相对，意思是 ch 会根据当前容器的 ****font-size**** 变化而变化。
     * ch单位在chrome效果完好，在firfox中显示有问题，兼容性待商榷
     */
    width: 22ch;
    animation: typing 2s steps(22), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
}

@keyframes typing {
    from {
        width: 0
    }
}
    
@keyframes blink {
    50% {
        border-color: transparent
    }
}
```

## 自定义滚动条样式
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            .wrapper {
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .mr-1 {
                margin-right: 1em;
            }

            .tile {
                overflow: auto;
                display: inline-block;
                background-color: #ccc;
                height: 200px;
                width: 180px;
            }

            .tile-custom-scrollbar::-webkit-scrollbar {
                width: 12px;
                background-color: #eff1f5;
            }

            .tile-custom-scrollbar::-webkit-scrollbar-track {
                border-radius: 3px;
                background-color: transparent;
            }

            .tile-custom-scrollbar::-webkit-scrollbar-thumb {
                border-radius: 5px;
                background-color: #515769;
                border: 2px solid #eff1f5;
            }

            .tile-content {
                padding: 20px;
                height: 500px;
            }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div>
                <div class="tile mr-1">
                    <div class="tile-content">默认滚动条</div>
                </div>

                <div class="tile tile-custom-scrollbar">
                    <div class="tile-content">自定义滚动条</div>
                </div>
            </div>
        </div>
    </body>
</html>
```

## 圆形渐变边框
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            .gradient-border {
                border: solid 5px transparent;
                border-radius: 10px;
                background-image: linear-gradient(white, white), 
                linear-gradient(315deg,#833ab4,#fd1d1d 50%,#fcb045);
                background-origin: border-box;
                background-clip: content-box, border-box;
            }
            .box {
                width: 350px;
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 100px auto;
            }
        </style>
    </head>
    <body>
        <div class="box gradient-border">炫酷渐变边框</div>
    </body>
</html>
```

