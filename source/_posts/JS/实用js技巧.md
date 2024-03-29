---
title: 实用js技巧
date: 2019-08-08 14:09:45
categories: js
tags:
- 前端
- javascript
---

## 1-9数字加任意字母组合
```js
let n = 3 // digits u want
let iterator = {
  [Symbol.iterator]: function*() {
    let num = 0
    let result = ''
    for(;;){
      result = num.toString('36')
      if(result.length > n) break
      yield result
      num += 1
    }
  }
}

let arr = [...iterator]
console.log(arr)
```

## 知识点
* <code>for(;;){}</code>表示无限循环,和<code>while(true){}</code>功能一样.
* <code>num.toString('36')</code>,36进制，可选参数.
```js
1.toString('36') // 'a'
2.toString('36') // 'b'
....
```

## 如何判断一个对象是不是空对象？
```js
// 方法1 Object.keys(obj).length === 0
// 方法2 JSON.stringify(obj) === '{}'
```
