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

## 阿里云香港主机
* [购买地址](https://common-buy.aliyun.com/?spm=5176.161059.J_5253785160.2.7864a505EwkksU&commodityCode=swas&request=%257B%2522ord_time%2522%253A%252212%253AMonth%2522%252C%2522order_num%2522%253A1%252C%2522instance_type%2522%253A%2522server%2522%252C%2522datadisk_type%2522%253A%2522essddatadisk%2522%252C%2522version_type%2522%253A%2522swas.s2.c2m1s40b3t04%2522%252C%2522image_type%2522%253A%2522systemimage%2522%252C%2522system_image%2522%253A%252287987f90ac2943c1b23f4c46cc80839c%2522%257D&regionId=cn-hongkong)
* 一键DD脚本，重装厂商自带的系统[(脚本备份)](/blog/html/sh/AutoReinstall.sh)
> 1.默认的用户名和密码，再选择系统后会自动给出，注意记一下！！！
```shell
wget --no-check-certificate -O AutoReinstall.sh https://git.io/AutoReinstall.sh && bash AutoReinstall.sh
```

* 如果有以下报错![image](../../../../../images/centos/dd_error.png)
根据提示信息显示，远程主机的公钥已被更改，因此无法连接远程主机。在使用 ssh 连接时，会将远程主机提供的公钥存储在本地 $HOME/.ssh/known_hosts 文件中。而如果远程主机的公钥信息被更改了，则由于本地公钥信息与远程主机的不匹配而无法连接，此时只需删除本地存储的公钥信息即可。
按如下操作删除原有公钥后再次连接，提示询问时输入 yes 即可登录远程主机
```shell
ssh-keygen -R 阿里云主机地址(xxx.xxx.xxx.xxx)
```

* 修改默认密码<code>passwd</code>

## 服务器安装v2ray

* 一键安装命令,安装完成后可以通过`v2ray`管理V2Ray[(脚本备份)](/blog/html/sh/v2ray.sh)
```shell
bash <(curl -s -L https://git.io/v2ray.sh)
```

* v2ray配置成功，客户端连接不上报错`context deadline exceeded`,必须关闭防火墙（或者开启对应v2ray端口和ss端口）
```shell
systemctl status firewalld.service #查看防火墙状态

systemctl stop firewalld.service #执行停止运行防火墙命令

systemctl disable firewalld.service #禁止防火墙自启动
```

* 防火墙其他命令
```shell
systemctl start firewalld.service #启动
systemctl enable firewalld.service #开机启动
```

## v2ray设置
* 开启bbr加速,<code>v2ray</code>,然后选择11其他，安装bbr即可
* tcl协议最快，但是容易被检测
* ws + tls目前来说较为安全一些，申请一个域名，然后将域名解析指向服务器ip地址，然后脚本可以自动配置tls，只需要正确输入你的域名即可。

## windows客户端配置
* 服务器-添加vmess服务器-配置信息（可以在服务器查看对应信息）
* 参数设置-core基础设置-PAC或者全局选择
* PAC => 参数设置-core路由设置-域名策略(AsIs)
* PAC => 参数设置-core路由设置-点击一键设置默认自定义路由规则生成默认规则（即代理指定的网址例如google,youtube）
![服务器信息](/blog/images/centos/v2ray_server.jpg)
![服务器设置](/blog/images/centos/v2ray.jpg)
![基础设置](/blog/images/centos/v2ray_set1.jpg)
![基础设置](/blog/images/centos/v2ray_set2.jpg)
![KCP设置](/blog/images/centos/v2ray_set3.jpg)
![用户PAC设置](/blog/images/centos/v2ray_set4.jpg)
```json
// 常用自定义pac规则
v2ex.com,
vultr.com,
getadblock.com,
github.blog,
github.com,
tiktok.com,
cloudflare.com,
speedtest.net
```

## Android客户端配置
* 配置-设置-路由设置-AsIs,绕过局域网及大陆地址（此步骤设置后需要服务重启才能生效）

## 借鉴网址
[V2Ray 一键安装脚本](https://github.com/233boy/v2ray/wiki/V2Ray%E4%B8%80%E9%94%AE%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC)
[V2Ray 客户端下载导航地址](https://tlanyan.me/v2ray-clients-download/)
[V2Ray 安卓客户端](https://github.com/2dust/v2rayNG/releases)
[V2Ray Windows客户端](https://github.com/2dust/v2rayN/releases)
