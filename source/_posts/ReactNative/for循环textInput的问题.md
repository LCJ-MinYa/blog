---
title: for循环textInput的问题
date: 2018-12-07 23:50:46
categories: reactnative
tags: 
- reactnative
- app
- 跨平台app
---

需求:  
for循环未知个数输入框，然后用户点击对应的输入框，更改对应数据.  
1 2 3 4 5假如5个输入框，用户点击第三个输入框改变第三个输入框的值.

实现中出现的问题:  
onChangeText只接受更改后的文本值一个参数，对应的key无法传进去，无法判断当前需要更改第几个数据。
换个思路就是，怎样知道用户当前点击修改的输入框是第几个，如果我能知道是第几个就可以修改对应数据的第i个

尝试过的解决办法:  
1.onChangeText传入的时候将key传入，只接受一个参数，(不成立)
2.onChangeText绑定外部一个方法，无法传入参数（不成立）
3.ref的形式绑定组件，在点击的时候无法得到点击的textinput对应的ref，（不成立）

结果: 目前暂时无法解决
采用迂回方式，点击修改时弹出modal层，然后在外层包裹TouchableOpacity点击方法可以传入对应的key

2017-11-1: 采用闭包传入i
```javascript
解法1: 
for(var i=0; i< input.length; i++){
  (function(i){
    CODE;
  })(i);
}

解法2:
for(let i=0; i< input.length; i++){
  CODE;
}
```

