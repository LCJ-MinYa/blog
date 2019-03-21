---
title: trim方法
date: 2019-03-21 16:33:51
categories: js
tags:
- 前端
- javascript
---

## 自定义方法
```javascript
//删除左右两端的空格
function trim(str) {
    if (typeof str !== 'string') {
        return str;
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

export {
    trim
}
```

## 问题由来
> 在其他页面调用trim()方法，发现写错方法也没有报错，并且具备了同样的删除左右两端的空格功能
```
import Utils from '../Utils';

test(){
    String.trim();
}
```

## 原因
* String.prototype本身就有trim()方法，所以即便是上面写错了，只要类型是String就不会报错.
