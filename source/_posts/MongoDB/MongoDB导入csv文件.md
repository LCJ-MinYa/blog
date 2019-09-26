---
title: MongoDB导入csv文件
date: 2019-9-23 14:34:42
categories: mongodb
tags:
- mongodb
- 数据库
---

## 导入注意事项
* --headerline
* 导入命令必须在mongodb之外的环境调用
* 导入的csv数据不能有未关闭或者非法双引号，否则会报<code> Failed: read error on entry #11923: line 11924, column 55: bare " in non-quoted-field</cdoe>错误

## 导入命令
```
 mongoimport -h ip地址:端口号 -u 数据库用户名 -p 数据库密码 -d 数据库名称 -c 集合名称 --type csv --headerline --file /root/hotel_data/1-200W.csv
```
* -h ip地址:端口号
* -u 数据库用户名
* -p 数据库密码
* -d 数据库名称
* -c 集合名称
* --type 指定导入文件类型
* --headerline 如果使用headerline则使用第一行作为字段名称，否则，将第一行作为数据字段导入，仅仅用作csv或tsv文件导入，在导入json时用headerline则会报错
* --ignoreBlanks 忽略csv和tsv导出中的空字段。如果未指定，则mongoimport在导入的文档中创建没有值的字段，ignoreBlanks仅适用于csv或tsv文件导入