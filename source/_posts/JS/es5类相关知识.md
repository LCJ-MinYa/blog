---
title: es5类相关知识
date: 2019-12-11 16:06:45
categories: js
tags:
- 前端
- javascript
---

## 创建类
```js
function Person(name, age, sex){
    this.name = name || '我是默认姓名';
    this.age = age || 20;
    this.sex = sex || '男性';
    this.run = function(){
        console.log(this.name + '在跑步');
    }
}
```

## 实例化类
* 实例化可以获取this，类的属性和方法
```js
function Person(name, age, sex){
    this.name = name || '我是默认姓名';
    this.age = age || 20;
    this.sex = sex || '男性';
    this.run = function(){
        console.log(this.name + '在跑步');
    }
}

var people = new Person();  //实例化
people.run();   //调用内置run方法
```

## 静态方法
* 不需要实例化类都可以使用的类的方法
* 静态方法不能调用this,不能获取类的属性和方法
```js
function Person(name, age, sex){
    this.name = name || '我是默认姓名';
    this.age = age || 20;
    this.sex = sex || '男性';
    this.run = function(){
        console.log(this.name + '在跑步');
    }
}

Person.doStaticFunc = function(){
    console.log('我是静态方法');
}

Person.doStaticFunc(); //调用静态方法
```