---
title: vscode中wepy初始化代码片段
date: 2019-12-27 15:43:51
categories: js
tags:
- 小程序
- 前端
- javascript
- ide
---

## vscode中wepy-page初始化代码片段
```json
{
	// Place your 全局 snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Example:
	// "Print to console": {
	// 	"scope": "javascript,typescript",
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
    // }
    "WePY Class": {
        "prefix": "wepy",
        "body": [
            "<style lang=\"less\">",
            "view,scroll-view,swiper,swiper-item,movable-area,movable-view,cover-view,cover-image,icon,text,rich-text,progress,button,checkbox-group,checkbox,form,input,label,picker,picker-view,radio-group,radio,slider,switch,textarea,navigator,functional-page-navigator,image,video,camera,live-player,live-pusher,map,canvas,open-data,web-view,ad{",
            "    box-sizing: border-box;",
            "}",
            "",
            "</style>",

            "<template>",
            "    <view class=\"container\">",
            "",
            "        <view>$TM_FILENAME_BASE</view>",
            "",
            "    </view>",
            "</template>",
            "",
            "<script>",
            "import wepy from 'wepy';",
            "export default class $TM_FILENAME_BASE extends wepy.page {",
            "    config = {",
            "        navigationBarTitleText: '$TM_FILENAME_BASE',",
            "    }",
            "",
            "    components = {",
            "",
            "    }",
            "",
            "    data = {",
            "",
            "    }",
            "",
            "    methods = {",
            "",
            "    }",
            "}",
            "</script>",
        ]
    }
}
```

## vscode中wepy-component初始化代码片段
```json
{
	// Place your 全局 snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Example:
	// "Print to console": {
	// 	"scope": "javascript,typescript",
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
    "WePY Component Class": {
        "prefix": "wepy component",
        "body": [
            "<style lang=\"less\">",
            "view,scroll-view,swiper,swiper-item,movable-area,movable-view,cover-view,cover-image,icon,text,rich-text,progress,button,checkbox-group,checkbox,form,input,label,picker,picker-view,radio-group,radio,slider,switch,textarea,navigator,functional-page-navigator,image,video,camera,live-player,live-pusher,map,canvas,open-data,web-view,ad{",
            "    box-sizing: border-box;",
            "}",
            "",
            "</style>",
            "<template>",
            "    <view>$TM_FILENAME_BASE</view>",
            "</template>",
            "",
            "<script>",
            "import wepy from 'wepy';",
            "export default class $TM_FILENAME_BASE extends wepy.component {",
            "    props = {",
            "",
            "    }",
            "",
            "    data = {",
            "",
            "    }",
            "",
            "    methods = {",
            "",
            "    }",
            "}",
            "</script>",
        ]
    }
}
```
