---
title: windows10以msi格式安装mongodb4.2
date: 2019-9-26 10:37:42
categories: mongodb
tags:
- mongodb
- 数据库
- windows
---


## 安装文件以msi格式
* 会直接以应用程序形式安装mongodb

## 安装过程
* 请取消勾选<code>install MongoDB Compass</code>,有墙导致安装缓慢甚至无法安装,可使用Robo 3T或者mongodb compass作为界面可视化管理工具
![image](/images/mongodb/1.webp)

* 安装完成后会出现<code>MongoDB Server</code>服务无法启动,原因是因为安装在非系统盘，<code>mongodb/bin/mongod.cfg</code>文件最后多一行<code>mp:</code>导致的，删除即可运行
![image](/images/mongodb/2.webp)
```
# mongod.conf

# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# Where and how to store data.
storage:
  dbPath: E:\MongoDB\data
  journal:
    enabled: true
#  engine:
#  mmapv1:
#  wiredTiger:

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path:  E:\MongoDB\log\mongod.log

# network interfaces
net:
  port: 27017
  bindIp: 127.0.0.1

#processManagement:

#security:

#operationProfiling:

#replication:

#sharding:

## Enterprise-Only Options:

#auditLog:

#snmp:

#删除下面即可
mp: 
```
* mongo加入path环境变量<code>D:\mongodb\bin</code>

## mongodb配置
* 开启外网访问
```
bindIp 0.0.0.0
```

* 开启身份验证(开启前先添加用户)
```
security:
  authorization: enabled
```

## mongodb服务没有响应控制
* 一般是由于配置文件.cfg格式错误导致

## cmder启动mongodb报错
* 报错信息
```
系统错误 5。
拒绝访问
```

* 报错原因是因为没有使用管理员方式运行

* 解决方法一临时开启管理员权限：
```
1. 快捷键 Ctrl + t 后勾选
2. run as administrator
```
![image](/images/mongodb/3.png)

* 解决方法二永久开启管理员权限：(推荐)
```
1. 快捷键：win + alt + p
2. Startup -> Spedified named task选择{bash::bash as Admin}或者{cmder::cmder as Admin}
```
![image](/images/mongodb/4.png)


## windows启动mongodb命令
```
启动:net start MongoDB 
重启:net restart MongoDB 
关闭:net stop MongoDB 
```

## 借鉴网址
[Win10 安装配置 MongoDB 4.0 踩坑记](https://www.jianshu.com/p/4a91529fbaed)
[MongoDB net start MongoDB启动,提示发生系统错误 5 拒绝访问 解决之道](https://blog.csdn.net/hrainning/article/details/83217051)
[Windows10系统安装MongoDB-4.2版本](https://jingyan.baidu.com/article/e52e3615ed475000c70c5168.html)
[cmder 常用配置（包括默认管理员运行和解决中文乱码）](https://www.cnblogs.com/feigao/p/8717520.html)