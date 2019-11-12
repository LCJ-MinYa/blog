---
title: flutter与原生通信
date: 2019-11-12 15:09:48
categories: flutter
tags: 
- flutter
- app
- 跨平台app
---


## flutter调用原生方法
* splash.flutter.io/splash名称可以自定义，但是必须与原生名称对应

```dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class LaunchImageScreen extends StatefulWidget {
    @override
    _LaunchImageScreenState createState() => _LaunchImageScreenState();
}

class _LaunchImageScreenState extends State<LaunchImageScreen> {
    static const platform = const MethodChannel('splash.flutter.io/splash');

    @override
    void initState() {
        super.initState();
        // _startHome();
    }

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            body: Center(
                child: RaisedButton(
                    onPressed: invokeNativeGetResult,
                    child: Text('点击调用原生方法'),
                ),
            ),
        );
    }

    //显示2秒后跳转到HomeTabPage
    _startHome() async {
        await Future.delayed(const Duration(milliseconds: 2000), () {
            Navigator.pushReplacementNamed(context, '/tabbar');
        });
    }

    Future<void> invokeNativeGetResult() async{
        final result = await platform.invokeMethod(
            'getNativeResult',
            {
                "key1": "value1",
                "key2": "value2"
            }
        );
        print(result);
    }
}
```

## ios封装原生方法供flutter调用
* 

```objc
#include "AppDelegate.h"
#include "GeneratedPluginRegistrant.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [GeneratedPluginRegistrant registerWithRegistry:self];
    
    FlutterViewController* flutterViewController = [FlutterViewController new];
    FlutterMethodChannel * splashChannel = [FlutterMethodChannel methodChannelWithName:@"splash.flutter.io/splash" binaryMessenger: flutterViewController];
    [splashChannel setMethodCallHandler:^(FlutterMethodCall * call, FlutterResult result) {
        NSLog(@"method=%@ \narguments = %@", call.method, call.arguments);
        
        if ([call.method isEqualToString:@"getNativeResult"]) {
            NSDictionary *map = @{@"key":@"从map里获取到的数据"};
            
            // 给Flutter回传结果,这个block只能调用一次才有效
            if (result) {
                result(map);
            }
        }
    }];
    
    // Override point for customization after application launch.
    return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

@end
```