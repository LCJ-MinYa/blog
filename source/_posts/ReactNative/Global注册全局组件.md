---
title: Global注册全局组件
date: 2019-03-12 15:27:56
categories: reactnative
tags:
- reactnative
- app
- 跨平台app
---

## Global注册方法
* 导出一个包含组件的常量
```
let parmam = {
    ...参数
};

export const renderGlobalComponent = ({
    ...param
})=>{
    return <View><Text>自定义组件</Text></View>
}

global.RenderGlobalComponent = renderGlobalComponent;
```

* 导出一个返回组件的函数
```
export function renderGlobalComponent(param){
    return <View><Text>自定义组件</Text></View>
}

global.RenderGlobalComponent = renderGlobalComponent;
```


## 全局调用
> 需要调用的页面直接<code><RenderGlobalComponent /></code>即可。

## global.RenderGlobalComponent首字母必须大写
> 原因是因为react组件的首字母必须大写，全局方法注册也需要大写，否则会报错。
