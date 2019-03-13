---
title: ReactNative深拷贝
date: 2019-03-13 11:20:21
categories: reactnative
tags:
- reactnative
- app
- 跨平台app
---

## JS方法
```
const obj = {
    a:1,
    b:2
}
const newObj = JSON.parse(JSON.stringify(obj));
```

### 延伸问题
* 如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式。而不是时间对象；
* 如果obj里有RegExp、Error对象，则序列化的结果将只得到空对象；
* 如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失；
* 如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null;
* JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor；
* 如果对象中存在循环引用的情况也无法正确实现深拷贝；

## reactnative官方库方法
```
import _ from 'lodash';

const obj = {
    a:1,
    b:2
}

const newObj = _.cloneDeep(obj);
```

## 验证对象是否相等
```
JSON.stringify(obj) == JSON.stringify(newObj)   //true
obj == newObj                                   //false
```
