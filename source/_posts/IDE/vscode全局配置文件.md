---
title: VSCode
date: 2021-09-17 11:07:49
categories:
- ide
tags: 
- ide
- vscode
- 插件
---

## 前置依赖插件
* koroFileHeader 在vscode中用于生成文件头部注释和函数注释的插件
* Prettier 格式化
* Turbo Console Log 快速生成console.log
* Vetur vue工具

## 全局配置
```json
{
    "editor.tabSize": 4,
    "editor.detectIndentation": false,
    "editor.formatOnSave": true,
    "git.ignoreMissingGitWarning": true,
    "window.zoomLevel": 1,
    "workbench.tree.indent": 20,
    "workbench.colorTheme": "Monokai",
    "explorer.confirmDragAndDrop": false,
    "editor.fontSize": 16,
    "explorer.confirmDelete": false,
    "update.mode": "none",
    "prettier.semi": true,  //prettier全局使用分号
    "prettier.singleQuote": true,   //prettier全局使用单引号
    "prettier.printWidth": 50, //prettier全局超过50才换行
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode" //js文件保存时使用prettier格式化
    },
    "[markdown]": {
        "editor.formatOnSave": false //markdown文件保存时使用不格式化
    },
    "[vue]": {
        "editor.tabSize": 4,
        "editor.defaultFormatter": "octref.vetur"
    },
    "vetur.format.defaultFormatter.html": "prettyhtml",
    "vetur.format.options.tabSize": 4,
    "prettier.tabWidth": 4,
    "vetur.format.defaultFormatterOptions": {
        "prettier": {
            "semi": true,
            "singleQuote": true,
            "printWidth": 50,
        },
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "fileheader.customMade": {
        // 头部注释默认字段
        "Author": "LiChaoJun",
        "Date": "Do not edit", // 设置后默认设置文件生成时间
        "LastEditTime": "Do not edit", // 设置后，保存文件更改默认更新最后编辑时间
        "LastEditors": "LiChaoJun", // 设置后，保存文件更改默认更新最后编辑人
    },
    "fileheader.configObj": {
        "autoAddLine": 10, // 文件超过多少行数 不再自动添加头部注释
    },
    "security.workspace.trust.untrustedFiles": "open",
    "turboConsoleLog.addSemicolonInTheEnd": true,
    "turboConsoleLog.delimiterInsideMessage": "-",
    "turboConsoleLog.insertEnclosingFunction": false,
    "turboConsoleLog.logMessagePrefix": "",
    "turboConsoleLog.quote": "'",
    // "editor.renderControlCharacters": true, // 显示tabs
    // "editor.renderWhitespace": "all", // 显示空格
}
```

## Turbo Console Log使用
* 选中变量添加注释（支持多选）`ctrl + alt + L`
* 从当前文档中删除由扩展程序插入的所有日志消息`alt + shift + d`
* 从当前文档中注释由扩展程序插入的所有日志消息`alt + shift + c`
* 从当前文档中取消对扩展程序插入的所有日志消息的注释`alt + shift + u`
