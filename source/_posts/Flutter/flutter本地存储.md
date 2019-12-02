---
title: flutter本地存储
date: 2019-12-2 16:36:48
categories: flutter
tags: 
- flutter
- app
- 跨平台app
---

## 全局封装
* `common > storage.dart`
```dart
import 'package:shared_preferences/shared_preferences.dart';

//本地存储封装
class Storage{
    static Future setString(key, value) async{
        SharedPreferences sp = await SharedPreferences.getInstance();

        sp.setString(key, value);
    }

    static Future getString(key) async{
        SharedPreferences sp = await SharedPreferences.getInstance();

        return sp.getString(key);
    }

    static Future remove(key) async{
        SharedPreferences sp = await SharedPreferences.getInstance();

        sp.remove(key);
    }

    static Future clear() async{
        SharedPreferences sp = await SharedPreferences.getInstance();

        sp.clear();
    }
}
```

## 单个key封装(搜索历史)
* `storage > searchList.dart`
```dart
import 'dart:convert';

import 'package:kjt_bsp/common/storage.dart';

final String searchListKey = 'searchList';
class SearchListStorage{

    static addValueToStorage(value, data) async{
        data.insert(0, value);
        await Storage.setString(searchListKey, json.encode(data));
    }

    static setData(value) async{
        var data = await Storage.getString(searchListKey);
        if(data != null){
            data = json.decode(data);
            var hasData = data.any((v){
                return v == value;
            });

            //当前值并未被存储过
            if(!hasData){
                addValueToStorage(value, data);
            }
        }else{
            //没有数据，新建数组写入
            addValueToStorage(value, []);
        }
    }

    static getData() async{
        var data = await Storage.getString(searchListKey);
        if(data != null){
            return json.decode(data);
        }else{
            return [];
        }
    }

    static removeData() async{
        await Storage.remove(searchListKey);
    }
}
```