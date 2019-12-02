---
title: flutter父组件调用子组件方法
date: 2019-12-2 16:19:48
categories: flutter
tags: 
- flutter
- app
- 跨平台app
---

## Key
> 概念参考前端react和vue中key值的含义，如果列表key不更改，则即便数据又修改视图也没有更改。
* ValueKey:以一个值为key。
* ObjectKey:以一个对象为key。
* UniqueKey:生成唯一的随机数作为key。
* PageStorageKey:专用于存储页面滚动位置的key。
* GlobalKey每个globalkey都是一个在整个应用内唯一的key。globalkey相对而言是比较昂贵的，如果你并不需要globalkey的某些特性，那么可以考虑使用Key、ValueKey、ObjectKey或UniqueKey。

## GlobalKey用途
*  允许widget在应用程序中的任何位置更改其parent而不丢失其状态。应用场景：在两个不同的屏幕上显示相同的widget，并保持状态相同。
* globalkey唯一定义了某个element，它使你能够访问与element相关联的其他对象，例如buildContext、state等。应用场景：跨widget访问状态

## 父组件调用子组件方法
* 父组件
```dart
import 'package:flutter/material.dart';
import 'package:kjt_bsp/screen/orderEntry/test.dart';

class ParentScreen extends StatefulWidget {
    @override
    _ParentScreenState createState() => _ParentScreenState();
}

class _ParentScreenState extends State<ParentScreen> {
    @override
    Widget build(BuildContext context) {
        return Column(
            children: <Widget>[
                ChildScreen(
                    key: childKey
                ),
                RaisedButton(
                    onPressed: (){
                        childKey.currentState.childFunction();
                    },
                    child: Text('点击我调用子组件方法'),
                )
            ],
        );
    }
}
```

* 子组件
```dart
import 'package:flutter/material.dart';

GlobalKey<_ChildScreenState> childKey = GlobalKey();
class ChildScreen extends StatefulWidget {

    ChildScreen({
        Key key,
    }) : super(key: key);
    @override
    _ChildScreenState createState() => _ChildScreenState();
}

class _ChildScreenState extends State<ChildScreen> {
    @override
    Widget build(BuildContext context) {
        return Container(
            
        );
    }

    childFunction(){
        print('this is a childFunction');
    }
}
```