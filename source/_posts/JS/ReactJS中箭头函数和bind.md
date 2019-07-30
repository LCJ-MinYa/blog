---
title: ReactJS中箭头函数和bind
date: 2019-07-30 15:58:45
categories: js
tags:
- 前端
- javascript
---

## 写法集合
```javascript
/*---- 写法一: ----*/
<div onClick={this.doClick.bind(this)}>


doClick(){
    //do something
}

/*---- 写法二: ----*/
constructor(props) {
    super(props);
    this.doClick = this.doClick.bind(this);
}

<div onClick={this.doClick}>

doClick(){
    //do something
}


/*---- 写法三: ----*/
<div onClick={this.doClick}>

doClick = () => {
    //do something
}

/*---- 写法四: ----*/
<div onClick={()=> this.doClick()}>

doClick = () => {
    //do something
}
```

## 写法分析
* 其实最终代码上2和3是一致的，1和4是一致的;
* 1和4的问题在于，由于绑定是在render中执行，而render是会执行多次的，每次bind和箭头函数都会产生一个新的函数，因而带来了额外的开销
* 2和3避免了每次产生新的函数，效果等同，显然3的写法更简洁，因而推荐3

## 涉及传参
* 写法三如果需要传递参数，必须使用写法四才能正确传递参数

## 借鉴网址
[bind和箭头函数-哪个更好呢](http://bbs.reactnative.cn/topic/2480/bind%E5%92%8C%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0-%E5%93%AA%E4%B8%AA%E6%9B%B4%E5%A5%BD%E5%91%A2)
[涉及传参的时候onClick写法问题](https://segmentfault.com/q/1010000010918131)

















