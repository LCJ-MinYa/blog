---
title: Docker基本知识
date: 2019-03-08 13:32:36
categories: docker
tags:
- docker
- centos
---

## docker安装
* <code>yum install -y docker</code>

## docker 启动,重启和开机启动
* <code>systemctl start docker</code>
* <code>systemctl enable docker</code>
* <code>systemctl restart docker</code>

## docker查找和下载Nextcloud网盘的镜像(启用命令)
* <code>docker search nextcloud</code>
* <code>docker pull docker.io/nextcloud</code>
* <code>docker run -d -\-restart=always -\-name nextcloud -p 8080:80 -v /root/www/nextcloud:/data docker.io/nextcloud</code>

## docker导出某个容器
* <code>docker export 容器名称</code>

## docker导入某个容器
* <code>docker import url</code>

## docker删除某个容器（加上-f可以删除运行中的容器）
* <code>docker rm -f 容器名称</code>

## docker查看运行容器
*  <code>docker ps -a</code>

## 登录docker容器
* <code>docker exec -it 容器名称 /bin/sh</code>

## docker nextcloud文件位置
```
/var/lib/docker/volumes/容器名称/_data/data/用户名/files/所有文件
```