---
title: AnyDesk直连
date: 2020-08-06 2:54:57
categories: centos
tags: 
- 服务器
- anydesk
- centos
- 远程桌面
---

## 问题
> 如果两个设备不在同一个局域网，那么anydesk通过九位数id连接就会非常卡，完全无法正常使用.  

## 解决方案
- ### [搭配frp内网穿透教程](https://blog.ziyiu.com/2020/08/05/Centos%E6%9C%8D%E5%8A%A1%E5%99%A8/AnyDesk%E6%90%AD%E9%85%8Dfrp%E8%BF%9C%E7%A8%8B%E8%BF%9E%E6%8E%A5/)

- ### IP直连（有公网IP）
1. 端口映射，默认7070端口，将受控客户端的7070端口映射到公网7070端口
2. 通过公网ip加端口直连
![image](../../../../images/centos/direct_ip_port.png)
