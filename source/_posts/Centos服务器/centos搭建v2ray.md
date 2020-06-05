---
title: centos搭建v2ray
date: 2020-6-5 10:51:57
categories: centos
tags: 
- 服务器
- ss
- shadowsocks
- centos
- varay
---

## 服务器安装v2ray

* 一键安装命令,安装完成后可以通过`v2ray`管理V2Ray
```shell
bash <(curl -s -L https://git.io/v2ray.sh)
```

* v2ray配置成功，客户端连接不上报错`context deadline exceeded`,必须关闭防火墙（或者开启对应v2ray端口和ss端口）
```shell
systemctl status firewalld.service #查看防火墙状态

systemctl stop firewalld.service #执行停止运行防火墙命令
```

## windows客户端配置
* 服务器-添加vmess服务器-配置信息（可以在服务器查看对应信息）
* 参数设置-core基础设置-PAC或者全局选择
* PAC => 参数设置-core路由设置-域名策略(AsIs)
* PAC => 参数设置-core路由设置-点击一键设置默认自定义路由规则生成默认规则（即代理指定的网址例如google,youtube）

## Android客户端配置
* 配置-设置-路由设置-AsIs,绕过局域网及大陆地址（此步骤设置后需要服务重启才能生效）

## 借鉴网址
[V2Ray 一键安装脚本](https://github.com/233boy/v2ray/wiki/V2Ray%E4%B8%80%E9%94%AE%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC)
[V2Ray 客户端下载导航地址](https://tlanyan.me/v2ray-clients-download/)
[V2Ray 安卓客户端](https://github.com/2dust/v2rayNG/releases)
[V2Ray Windows客户端](https://github.com/2dust/v2rayN/releases)
