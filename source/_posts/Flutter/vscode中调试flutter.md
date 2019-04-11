---
title: vscode中调试flutter.md
date: 2019-04-11 21:35:09
categories: flutter
tags:
- flutter
- app
- 跨平台app
---

## debugPaintSizeEnabled可视化调试
* 类似于React Native开发菜单中中toggle inspector，对于调试dom结构层级很有帮助.
* 调用方法
```
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart' show debugPaintSizeEnabled;
import './tabNavigation/tabNavigation.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        debugPaintSizeEnabled = !true;
        return new MaterialApp(
            title: 'my app',
            home: new TabNavigation(),
        );
    }
}

```

## vscode中dart devtools插件
* 在首次运行flutter项目时会提示安装该插件，安装完成后会自动在浏览器中打开，类似React Native开发菜单中Debug JS Remotely.
* 下次打开时，首先查看->命令面板（快捷键command+shift+p）,输入dart根据提示选择Dart: Open DevTools即可运行.
