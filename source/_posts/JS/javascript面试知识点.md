---
title: javascript面试知识点
date: 2020-12-2 16:52:45
categories: js
tags:
- 前端
- javascript
- 面试
---

## js数据类型
根据ES6规范，共7种数据类型，分为基本数据类型（值类型）和对象数据类型（引用类型）
> 不能按照typeof函数的返回值划分简单类型：string,number,boolean,undefined; 复杂类型：object,function, typeof只是作为判断数据类型的存在

+ 基本数据类型（值类型）
    * 数字`number`
    * 字符串`string`
    * 布尔值`boolean`
    * 空值`null`
    * 未定义`undefined`
    * 符号`symbol`
+ 对象数据类型（引用类型）：   
    * 对象`object`
---



## undefined和null的区别
`null`表示没有对象，即该处不应该有值,`undefined`表示缺少值，即此处应该有值，但没有定义
```js
console.log(null == undefined);     //true  因为两者都默认转换成了false
console.log(typeof undefined);      //"undefined"  
console.log(typeof null);           //"object"  
console.log(null === undefined);    //false   "==="表示绝对相等，null和undefined类型是不一样的，所以输出“false”
```

---
## 扁平化数组

### toString
```js
```