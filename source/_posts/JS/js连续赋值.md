---
title: js连续赋值
date: 2020-06-11 10:53:45
categories: js
tags:
- 前端
- javascript
---

```js
// 赋值给ａ一个引用类型
var a = {n:1};
// 拷贝给ｂ，ｂ指向{n:1}
var b = a;
/*
根据js引擎语法解析，从左向右寻找有没有未声明的变量，
如果有将该变量提升至作用域顶部并声明该变量．
因为a.x不存在，而ａ指向是是{n:1}因此在{n:1}的内存区声明了ｘ属性；
而ｘ属性指向的是ａ指向的内存区．
后面a={n:2},将ａ指向了一个新的内存区{n:2};
而ｂ指向{n:1}所在的内存区，故ｂ拥有了ｘ属性
*/
a.x = a = {n:2};
 
console.log(a);
console.log(b);
console.log(a.x);
console.log(b.x)
 
// { n: 2 }
// { n: 1, x: { n: 2 } }
// undefined
// { n: 2 }
```

## 借鉴网址
[js连续赋值（面试题](https://blog.csdn.net/zSY_snake/article/details/83015064)

