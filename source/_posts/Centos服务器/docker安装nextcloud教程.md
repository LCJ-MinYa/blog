---
title: docker安装nextcloud教程
date: 2019-03-08 14:20:47
categories: centos
tags: 
- 服务器
- docker
- centos
---

## 1.docker安装
* <code>yum install -y docker</code>

## 2.启动docker并设置自启
* <code>systemctl start docker</code>
* <code>systemctl enable docker</code>


## 3.查找并下载nextcloud镜像
* <code>docker search nextcloud</code>
* <code>docker pull docker.io/nextcloud</code>
```
参考输出：
Using default tag: latest
Trying to pull repository docker.io/library/nextcloud ...
latest: Pulling from docker.io/library/nextcloud
802b00ed6f79: Already exists
59f5a5a895f8: Pull complete
6898b2dbcfeb: Pull complete
8e0903aaa47e: Pull complete
2961af1e196a: Pull complete
71f7016f79a0: Pull complete
5e1a48e5719c: Pull complete
7ae5291984f3: Pull complete
725b65166f31: Pull complete
e90b121f9520: Pull complete
b5a272809bbd: Pull complete
f045f3ae0e2b: Pull complete
7f51c9ea2d8e: Pull complete
5aa9d0ed164a: Pull complete
8eea44e2bfc7: Pull complete
5302ebd5abce: Pull complete
78f0335decb3: Pull complete
1a2f85124682: Pull complete
ed4cec78a159: Pull complete
a68e1b656d3d: Pull complete
d0b66f00fda7: Pull complete
45c9777c18b5: Pull complete
Digest: sha256:c8d1091cc86051dc5e8de0114e3121fe0562cb417c56f2644ed92838008d8806
Status: Downloaded newer image for docker.io/nextcloud:latest
```

## 4.启用容器
* <code>docker run -d -\-restart=always -\-name nextcloud -p 8080:80 -v /root/www/nextcloud:/data docker.io/nextcloud</code>

```
参考输出：
ae96013c7f0ab05194a4488d1fa61b1c6274c272a53b3d418418b56a88e2e230

如果有其他报错信息请自行排查，比如我遇到过的
第一种 8080:8080修改端口错误 => 8080:80
第二种 容器已存在
```

## 5.浏览器访问ip:8080配置nextcloud
* 数据目录/var/www/html/data不能修改，否则会造成无法创建或修改目录错误

## 问题
* 大文件上传413错误（即便nextcloud设置了最大上传文件10G）
```
原因是因为使用了nginx代理端口，需要设置nginx最大上传文件限制
vi /etc/nginx/nginx.conf 在http{...}块中加入 =>
client_max_body_size 10G;
```

## docker面板portainer
* <code>docker search portainer</code>
* <code>docker pull docker.io/portainer/portainer</code>
* <code>docker run -d -\-restart=always -\-name prtainer -p 8085:80 -v /var/run/docker.sock:/var/run/docker.sock docker.io/portainer/portainer</code>

## 借鉴网址
[Docker+Nextcloud快速部署个人网盘](https://www.cnblogs.com/Timesi/p/9688463.html)
