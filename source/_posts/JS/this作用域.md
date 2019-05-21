---
title: this作用域
date: 2018-12-07 23:24:48
categories: js
tags: 
- 前端
- javascript
---

## 函数内置name属性
```javascript
function test(){
    console.log('this is a func');
}
window.test.name = '重新赋值函数name属性'; //无意义
window.test.otherName = '定义非name关键字的属性';
console.log(window.test.name); //test
console.log(window.test.otherName); //定义非name关键字的属性

// 函数内置name属性就是函数名，且name属性不能重新赋值改变,可以赋值其他非name关键字的属性;
```

## this作用域解析一
```javascript
var name = "The window";

function one() {
    var name = "The one";
    var object = {　　　　
        name: "The object",
        getNameFunc: function() {　　　　　　
            return function() {　　　　　　　　
                return this.name;　　　　　　
            };　　　　
        }　　
    };
    console.log(object.getNameFunc()());
};

window.one(); //The window
/* 结果为The window
 * 调用window.one()方法 =>
 * 步骤一: var声明name变量为The one;
 * 步骤二: var声明object对象,包含name和getNameFunc属性，getNameFunc属性为一个函数;
 * 步骤三: 打印object.getNameFunc()()结果;
 * 解析步骤三 =>
 * object.getNameFunc()函数执行结果返回一个函数，结果如下
 * function() {　　　　　　　　
 *     return this.name;　　　　　　
 * };
 * object.getNameFunc()后面跟(),表示执行返回的函数,return this.name,由于该方法是window.one()调用，this谁调用指向谁，即结果为The window
 */

/* 延伸定义=> 当你要确定 函数中的this指向什么的时候，不要到函数定义的地方去找答案，而是要到函数被调用的地方找答案。
 * 如：a.f(),f()里面的this就是指a，而不管f()里面什么东西；若只是f()，不考虑一些特殊情况，f里面的this就是指全局对象window
 */
```

## this作用域解析二
```javascript
var val = 1;
var obj = {
    val: 2,
    doMath: function(){
        this.val *= 2;
        val *= 2;
        console.log(val);
        console.log(this.val);
    }
}

obj.doMath(); //2 4
var func = obj.doMath;
func(); //8 8
```

## 箭头函数this区别
* <code>箭头函数的this定义：箭头函数的this是在定义函数时绑定的，不是在执行过程中绑定的。简单的说，函数在定义时，this就继承了定义函数的对象。</code>
```javascript
var val = 1;
function test(){
    this.val = 2;
    return ()=>{
        console.log(this.val)
    }
}
test()(); //2
```




