---
title: android在根路由处点击两次返回键最小化APP
date: 2019-11-19 15:05:48
categories: flutter
tags: 
- flutter
- app
- 跨平台app
---

## android原生封装最小化APP方法
* 打开`android\app\src\main\java\com\example\kjt_bsp\MainActivity.java`
```java
package com.example.kjt_bsp;

import android.os.Bundle;
import io.flutter.app.FlutterActivity;
import io.flutter.plugins.GeneratedPluginRegistrant;

//引入需要调用资源  ==> 新增第一处
import android.view.KeyEvent;
import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel;

public class MainActivity extends FlutterActivity {
    //通讯名称,回到手机桌面 ==> 新增第二处
	private  final String CHANNEL = "android/back/desktop";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        GeneratedPluginRegistrant.registerWith(this);

        //定义方法 ==> 新增第三处
        new MethodChannel(getFlutterView(), CHANNEL).setMethodCallHandler(
			new MethodChannel.MethodCallHandler() {
				@Override
				public void onMethodCall(MethodCall methodCall, MethodChannel.Result result) {
					if (methodCall.method.equals("backDesktop")) {
						result.success(true);
						moveTaskToBack(false);
					} 
				}
			}
		);
    }
}
```

## flutter开发中封装一个类
* 新建`lib\common\androidBackDeakTop.dart`
```dart
import 'package:flutter/services.dart';
import 'package:flutter/material.dart';

class AndroidBackTop {
	//初始化通信管道-设置退出到手机桌面
	static const String CHANNEL = "android/back/desktop";

	//设置回退到手机桌面
	static Future<bool> backDeskTop() async {
		final platform = MethodChannel(CHANNEL);
		//通知安卓返回,到手机桌面
		try {
			final bool out = await platform.invokeMethod('backDesktop');
			if (out){
                debugPrint('返回到桌面');
            }
		} on PlatformException catch (e) {
			debugPrint("通信失败(设置回退到安卓手机桌面:设置失败)");
			print(e.toString());
		}
		return Future.value(false);
	}
}
```

## 在根路由页面调用
* 此处为项目封装地址，自行根据项目在对应位置添加`lib\screen\tabbar\tabNavScreen.dart`
```dart
//返回得BuildContext
return WillPopScope(
    onWillPop: () async {
        // 点击返回键的操作
        if(lastPopTime == null || DateTime.now().difference(lastPopTime) > Duration(seconds: 2)){
            lastPopTime = DateTime.now();
            toast('再按一次退出APP');
        }else{
            lastPopTime = DateTime.now();

            //设置为返回不退出app
            AndroidBackTop.backDeskTop();
        }
        //必须返回
        return false;
    },
    child: Text('这里是内容');
}
```