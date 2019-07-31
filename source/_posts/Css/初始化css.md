---
title: 初始化css
date: 2019-07-31 14:53:35
categories: css
tags:
- 前端
- css
---

## init.css
```css
@charset 'utf-8';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body,
div,
span,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
a,
address,
em,
img,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
tbody,
tfoot,
thead,
tr,
th,
td,
i,
b,
s {
    font-family: pingfang sc, Microsoft YaHei, Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: inherit;
    font-style: inherit;
    margin: 0;
    padding: 0;
    border: 0
}

ul,
ol {
    list-style: none
}

a img {
    vertical-align: top;
    border: none
}

a {
    text-decoration: none
}

button {
    overflow: visible;
    margin: 0;
    padding: 0;
    border: 0 none;
    background-color: transparent
}

button::-moz-focus-inner {
    padding: 0
}

input[type=password] {
    -webkit-text-security: disc
}

textarea:focus,
input:focus,
button:focus {
    outline: none
}

body {
    word-wrap: break-word
}

* {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

.icon {
    display: inline-block;
    zoom: 1;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: left top
}

.btn {
    display: inline-block;
    zoom: 1;
    text-align: center;
    vertical-align: middle
}

.none {
    display: none
}

html {
    font-size: 20px
}

body {
    background: #fff;
    padding-top: 3rem;
}

@media screen and (max-width:320px) {
    html {
        font-size: 17px
    }
}

@media screen and (min-width:321px) and (max-width:360px) {
    html {
        font-size: 19px
    }
}

@media screen and (min-width:361px) and (max-width:375px) {
    html {
        font-size: 20px
    }
}

@media screen and (min-width:376px) and (max-width:414px) {
    html {
        font-size: 22px
    }
}

.bash-box {
    background: #fff;
    width: 100%;
    position: relative;
    overflow: hidden;
}
```
