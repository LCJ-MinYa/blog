---
title: rem.css
date: 2018-12-07 22:35:14
categories: css
tags:
- 前端
- css
---

```css
/*页面初始化*/
@charset 'utf-8';
html,body,div,span,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,a,address,em,img,ol,ul,li,fieldset,form,label,legend,table,tbody,tfoot,thead,tr,th,td,i,b,s{font-family:Helvetica,Arial,sans-serif;font-size:62.5%;font-weight:inherit;font-style:inherit;margin:0;padding:0;border:0}ul,ol{list-style:none}a img{vertical-align:top;border:none}a{text-decoration:none}button{overflow:visible;margin:0;padding:0;border:0 none;background-color:transparent}button::-moz-focus-inner{padding:0}input[type=password]{-webkit-text-security:disc}textarea:focus,input:focus,button:focus{outline:none}body{word-wrap:break-word}*{-webkit-tap-highlight-color:rgba(0,0,0,0)}.icon{display:inline-block;zoom:1;vertical-align:middle;background-repeat:no-repeat;background-position:left top}.btn{display:inline-block;zoom:1;text-align:center;vertical-align:middle}.none{display:none}

/*375的iphone6设计稿转化*/
html{font-size: 20px;}
@media only screen and (max-width: 320px) {html {font-size: 17px;}}
@media only screen and (min-width: 321px) and (max-width: 360px) {html {font-size: 19.2px;}}
@media only screen and (min-width: 361px) and (max-width: 375px) {html {font-size: 20px;}}
@media only screen and (min-width: 376px) and (max-width: 414px) {html {font-size: 22px;}}
@media only screen and (min-width: 415px) and (max-width: 479px) {html {font-size: 23px;}}
@media only screen and (min-width: 480px) {html {font-size: 25.6px;}}
@media only screen and (min-width: 768px) {html {font-size: 27.4px;}}

/*320的iphone5设计稿转化*/
html{font-size: 20px;}
@media only screen and (max-width: 320px) {html {font-size: 20px;}}
@media only screen and (min-width: 321px) and (max-width: 360px) {html {font-size: 22.5px;}}
@media only screen and (min-width: 361px) and (max-width: 375px) {html {font-size: 23.4px;}}
@media only screen and (min-width: 376px) and (max-width: 414px) {html {font-size: 25.8px;}}
@media only screen and (min-width: 415px) and (max-width: 479px) {html {font-size: 27px;}}
@media only screen and (min-width: 480px) {html {font-size: 30px;}}
@media only screen and (min-width: 768px) {html {font-size: 32px;}}


/*IE8 兼容*/
.bg{
    /*background-position 不能连写在background内，否则在ie8会不显示*/
    background: url(img/border_box.png) no-repeat;
    background-position: 50% 50%;
}

.line-height{
    /*在border-box盒子模型下，如果设置了高度，并且存在border，line-height高度要减去border高度*/
    box-sizing: border-box;
    height: 40px;
    border: 1px solid #000;
    line-height: 38px;
}
```