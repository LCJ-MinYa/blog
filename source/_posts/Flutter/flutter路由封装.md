---
title: flutter路由封装
date: 2019-11-8 10:00:48
categories: flutter
tags: 
- flutter
- app
- 跨平台app
---


## 封装RouteConfig
```dart
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../screen/tabbar/tabNavScreen.dart';

import '../screen/mine/mineMessageScreen.dart';
import '../screen/mine/aboutUsScreen.dart';
import '../screen/mine/feedbackScreen.dart';
import '../screen/mine/settingScreen.dart';
import '../screen/mine/modifyPwdScreen.dart';

import '../screen/login/loginScreen.dart';
import '../screen/login/forgetPwdScreen.dart';

class RouteConfig{
    static final initRouteName = '/';

    static final Map<String, WidgetBuilder> router = {
        '/': (BuildContext context) => TabNavScreen(),
        '/mineMessage': (BuildContext context) => MineMessageScreen(),
        '/aboutUs': (BuildContext context) => AboutUsScreen(),
        '/feedback': (BuildContext context) => FeedbackScreen(),
        '/login': (BuildContext context) => LoginScreen(),
        '/forgetPwd': (BuildContext context) => ForgetPwdScreen(),
        '/setting': (BuildContext context) => SettingScreen(),
        '/modifyPwd': (BuildContext context) => ModifyPwdScreen(),
    };

    static Route<dynamic> onGenerateRoute(RouteSettings settings){

        // 统一处理路由
        final String name = settings.name; 
        final Function pageContentBuilder = router[name];

        //定义当前需要返回得route对象
        Route route;
        if (pageContentBuilder != null) {
            if (settings.arguments != null) {
                //带参数的处理方式
                switch(name){
                    default:
                        route = CupertinoPageRoute(
                            builder: (context) => pageContentBuilder(context, arguments: settings.arguments)
                        );
                        break;
                }
            }else{
                //不带参数的处理方式
                switch(name){
                    case '/login':
                        route = CupertinoPageRoute(
                            builder: (context) => pageContentBuilder(context),
                            fullscreenDialog: true
                        );
                        break;
                    default:
                        route = CupertinoPageRoute(
                            builder: (context) => pageContentBuilder(context)
                        );
                        break;
                }
            }
        }
        return route;
    }
}
```

## 调用RouteConfig
```dart
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart' show debugPaintSizeEnabled;
import './router.dart';
import '../styles/theme.dart';

class App extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        debugPaintSizeEnabled = false;
        return MaterialApp(
            title: 'title',
            initialRoute: RouteConfig.initRouteName,
            theme: ThemeConfig.themeData(),
            onGenerateRoute: RouteConfig.onGenerateRoute,
        );
    }
}
```