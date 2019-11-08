---
title: flutter框架学习记录
date: 2019-11-1 10:12:48
categories: flutter
tags: 
- flutter
- app
- 跨平台app
---

## 不能在theme中使用ScreenUtil
* 在主题中设置字体大小 `fontSize: UISize.size(36)`,会报错，直接`fontSize: 18.0`。(`UISize.size()`为封装方法)

## 页面内容不超出屏幕也可以滑动方法
* 在ReactNative中可以使用ScrollView中达到此效果，在flutter中使用ListView来实现此效果(SingleChildScrollView虽然可以实现超出滑动，但是如果内容未超出则无法滑动，ios上的体现)

## 状态栏字体颜色设置

### 全局设置方法一(不推荐)
```dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import './router/app.dart';

void main(){
    runApp(App());
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.dark);
}
```

### 全局设置方法二(推荐)
```dart
theme: ThemeData(
    buttonColor: Color(0xff0d9aff), //按钮背景颜色
    accentTextTheme: TextTheme(
        //默认文本样式
        title: TextStyle(color: Color(0xff0d9aff), fontSize: 14.0)),
    splashColor: Colors.white,
    primaryColor: Color(0xff0d9aff),        //主题色 
    primaryColorLight: Color(0xff0d9aff),   //主题亮色
    appBarTheme: AppBarTheme(               //设置appbar的各个属性
        color: Colors.white,
        iconTheme: IconThemeData(
            color: Color(0xff373737)
        ),
        textTheme: TextTheme(
            title: TextStyle(
                color: Color(0xff373737),
                fontSize: 18.0
            )
        ),
        brightness: Brightness.light        //(全局设置状态栏颜色)
    ),
    ),
```

### 单页设置方法一(不推荐)
* 同全局方法设置一样，只是放在具体某个页面的build方法内(当前页面设置为白色，整体为黑色，进入到下个未设置的页面为黑色，返回还是黑色，不会更改为白色，因为之前页面的生命周期还在，build方法只执行一次)

### 单页设置方法二(推荐)
```dart
@override
Widget build(BuildContext context) {
    UISize.init(context);

    return AnnotatedRegion<SystemUiOverlayStyle>(
        value: SystemUiOverlayStyle.light,
        child: Scaffold(
            backgroundColor: Color(0xFFf5f5f5),
            body: Column(
                children: <Widget>[
                    _banner(),
                    _module(),
                ],
            ),
        ),
    );
}
```


## 安卓状态栏背景透明设置

```dart
void main(){
    runApp(App());
    if(Platform.isAndroid){
        SystemUiOverlayStyle systemUiOverlayStyle = SystemUiOverlayStyle(statusBarColor: Colors.transparent);
        SystemChrome.setSystemUIOverlayStyle(systemUiOverlayStyle);
    }
}
```

## Container不能同时设置border某一边属性（但是可以设置所有）和borderRadius
* 解决方法时嵌套两个Container
```dart
// 可以使用
decoration: BoxDecoration(
    border: Border.all(
        width: UISize.width(1),
        color: Color(0xffb3b3b3)
    ),
    borderRadius: BorderRadius.all(Radius.circular(8)),
),

// 会报错
decoration: BoxDecoration(
    border: Border(
        bottom: BorderSide(
            width: UISize.width(1),
            color: Color(0xffb3b3b3)
        ),
    ),
    borderRadius: BorderRadius.all(Radius.circular(8)),
),
```

## 自适应宽度高度方法

### 外层宽度高度已知
```dart
{
    width: double.infinity,
    height: double.infinity,
}
```

### 外层宽度高度未知
```dart
Expanded(
    child: child
)
```


## 封装方法预设值和必传值
```dart
class ListTitleWidget extends StatelessWidget {
    final Function onTap;           //是否能点击，点击事件
    final String title;             //标题
    final Color bgColor;            //背景颜色 =>默认白色
    final bool showArrow;           //是否显示右侧箭头 =>默认显示
    final String iconName;          //左侧icon
    final double height;            //自定义高度 => 默认50dp
    final double borderRadius;      //是否有圆角 => 默认无圆角
    final bool showBottomBorder;    //是否显示底部边框 => 默认显示

    ListTitleWidget({
        this.onTap,
        @required this.title,
        this.bgColor,
        this.showArrow = true,
        @required this.iconName,
        this.height,
        this.borderRadius,
        this.showBottomBorder = true,
    });
}
```

## 封装StatefulWidget有状态的组件
* 参数必须定义初始化在SubmitButton而不是在_SubmitButtonState中。
* SubmitButton中super不能省略，在StatelessWidget中可以省略。
* 在_SubmitButtonState中可以通过widget（注意是小写）获取参数值。

```dart
import 'package:flutter/material.dart';
import 'package:kjt_bsp/styles/uiSize.dart';
import '../tap/platformTapWidget.dart';

class SubmitButton extends StatefulWidget {
    final bool disable;             //是否能点击
    final Function onTap;           //点击事件
    final String title;             //标题

    SubmitButton({
        Key key,
        this.onTap,
        this.title,
        this.disable,
    }) : super(key: key);

    @override
    _SubmitButtonState createState() => _SubmitButtonState();
}

class _SubmitButtonState extends State<SubmitButton> {
    @override
    Widget build(BuildContext context) {
        UISize.init(context);

        return PlatformTapWidget(
            onTap: widget.onTap,
            child: Container(
                margin: EdgeInsets.only(top: UISize.height(360)),
                width: UISize.width(540),
                height: UISize.height(88),
                alignment: Alignment.center,
                decoration: BoxDecoration(
                    color: Color.fromRGBO(13, 154, 255, 0.3),
                    borderRadius: BorderRadius.all(Radius.circular(UISize.height(44)))
                ),
                child: Text(widget.title, style: TextStyle(color: Colors.white, fontSize: UISize.size(30)),),
            ),
        );
    }
}
```

## 本地图片资源
* 在lib下新建一个images文件夹，如果有2倍或者三倍图，再在images文件夹下新建2.0x, 3.0x文件夹
* 在pubspec.yaml中引入资源
```yaml
  # To add assets to your application, add an assets section, like this:
  # assets:
  #  - images/a_dot_burr.jpeg
  #  - images/a_dot_ham.jpeg
  
  assets:
    - lib/images/banner1.jpg
    - lib/images/banner2.jpg
    - lib/images/banner3.jpg

    # 如果有多张图片需要导入，优化写法如下 =>
    - lib/images/

    # 如果有多个文件夹分类图片需要导入，写法如下 =>
    - lib/images/main/
    - lib/images/login/
    - lib/images/mine/
```
* 在需要调用出调用
```dart
return new Image.asset(
    "lib/images/banner${index + 1}.jpg",
    fit: BoxFit.cover,
);
```