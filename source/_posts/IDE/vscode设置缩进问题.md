---
title: vscode设置缩进问题
date: 2019-11-15 11:01:49
categories:
- ide
tags: 
- ide
- vscode
---

## 设置了tabSize为4，打开新文件还是2的缩进
* 配置文件中设置`"editor.tabSize": 4`(设置默认缩进为4)
* 配置文件中设置`"editor.detectIndentation": false`(因为vscode默认启用了根据文件类型自动设置tabsize的选项，此选项关闭自动设置)
* 某类文件的tabsize不能用（例如dart）,在`Open Default Settings`中查=查找关键字`tabsize`,被默认设置为了2，在用户`Open Settings`配置文件中覆盖。
```json
"[dart]": {
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "editor.detectIndentation": false,
},
```




## 配置文件
* `Open Settings`(打开配置文件)
* `Open Default Settings`(打开默认配置文件，只读属性，修改用用户配置文件覆盖即可)