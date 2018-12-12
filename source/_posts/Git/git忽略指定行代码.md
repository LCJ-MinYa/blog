---
title: git忽略指定行代码
date: 2018-12-11 18:03:20
categories:
- git
tags:
- git
- macos
---

## .gitattributes文件指定规则（前提）
```
文件范围 filter=规则名称
示例: src/config/adapter.js filter=gitignore
示例: src/ filter=gitignore
```

## 全局忽略指定行或多行内容(方法一)

###单行过滤//#gitignore
```
git config --global filter.gitignore.clean "sed '/\/\/#gitignore$/'d"
git config --global filter.gitignore.smudge cat

示例:
this.doSomething(); //#gitignore
```

###多行过滤//#BEGIN到//#END之间信息
```
git config --global filter.gitignore.clean "sed '/\/\/#BEGIN/,/\/\/#END$/d'"
git config --global filter.gitignore.smudge cat

示例:
//#smudge
//#BEGIN
if(this.doSomething){
    this.doSomething();
}
//#END

1.执行git config -l查看当前生效的全局配置
2.通过vi /Users/minya/.gitconfig查看当前全局配置
[filter "gitignore"]
        clean = "sed '/\\/\\/#BEGIN/,/\\/\\/#END$/d'"
        smudge = cat
这里与命令行键入的有区别，能生效，考虑转义问题
```
* clean命令 git add时触发(提交时删除//#BEGIN到//#END之间信息)
* smudge命令 git checkout触发（cat不做任何操作）
* 多行过滤目前只支持上传时过滤，下载的sed正则不会写，期望目标如下
```
1.复制//#BEGIN到//#END之间的内容到内存内
2.找到//#smudge注释行
3.将上面复制内容添加到//#smudge注释行下面
4.需要考虑如果文件内有多个//#smudge注释行的处理
```

## 全局忽略指定行或多行内容(方法二)

###命令行添加
```
上线将localhost:4000替换成blog.ziyiu.com
拉取将blog.ziyiu.com替换成localhost:4000
git config --global filter.gitignore.clean 'sed "s/localhost:4000/blog.ziyiu.com/g"'
git config --global filter.gitignore.smudge 'sed "s/yaowenjie.github.io/localhost:4000/g"'
```

###项目内添加(.git/config)
```
[filter "gitignore"]
        clean = sed \"s/localhost:4000/blog.ziyiu.com/g\"
        smudge = sed \"s/blog.ziyiu.com/localhost:4000/g\"

尝试执行多次sed
```

## git在mac下用户配置文件
```
vi /Users/minya/.gitconfig
```

## git常用命令
```
git config -l //查看当前生效的git配置
git config -e --global //打开系统全局配置文件，默认没有存储目录，可以新建引用
```




