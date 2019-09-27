---
title: vue组件中data必须时函数
date: 2019-09-27 16:35:57
categories: js
tags: 
- 前端
- javascript
- vue
---

## 示例
* 在`new Vue()`中，`data`是可以作为一个对象进行操作的，然而在`component`中，`data`只能以函数的形式存在，不能直接将对象赋值给它

```js
new Vue({
    el: '#app',
    data: {
        message: 'Love'
    },
    template: '<p>It’s great to love cakes.</p>'
})

Vue.comments('todo-item', {
    data: function(){
        return {
            message: 'Love'
        }
    },
    template: '<p>It’s great to love cakes.</p>'
})
```

## 原因
* 这并非是 Vue 自身如此设计，而是跟 JavaScript 特性相关，我们来回顾下 JavaScript 的原型链
```js
var Component = function() {};
Component.prototype.data = {
    message: 'Love'
}
var component1 = new Component(),
    component2 = new Component();
component1.data.message = 'Peace';
console.log(component2.data.message);  // Peace
```

* 以上两个实例都引用同一个对象，当其中一个实例属性改变时，另一个实例属性也随之改变，只有当两个实例拥有自己的作用域时，才不会互相干扰
```js
var Component = function() {
    this.data = this.data()
}
Component.prototype.data = function(){
    return {
        message: 'Love'
    }
}
var component1 = new Component(),
    component2 = new Component();
component1.data.message = 'Peace';
console.log(component2.data.message); 
```

## 总结
> 其实就是对象的引用问题，返回函数就是不同对象，可以随意处理，返回对象，某个组件的修改会导致其他引用该组件的对象也跟着修改。