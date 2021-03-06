---
title: nginx配置静态网页访问与单页路由访问问题
date: 2018-12-08 00:15:01
categories:
- centos
tags: 
- 服务器
- centos
- nginx
---


# nginx配置静态网页访问

> 前后端分离的项目，前端使用vue单页，打包之后项目文件的部署访问.

```
#http访问配置
server {
    listen 80;
    server_name www.ziyiu.com ziyiu.com;
    root /root/www/logWeb/;
    index index.html index.htm;
    access_log /root/nginx/log/logWeb_access.log  main;

    #解决单页路由问题
    location / {
        try_files $uri $uri/ @router;
        index index.html;
    }

    location @router {
        rewrite ^.*$ /index.html last;
    }
}

#https访问配置
server {
    listen 80;
    server_name www.ziyiu.com;
    rewrite ^(.*)$  https://$host$1 permanent;
}

server {
    listen 443 ssl;
    server_name www.ziyiu.com;
    root /root/www/logWeb/;
    index index.html index.htm;
    access_log /root/nginx/log/logWeb_access.log  main;

    ssl on;
    ssl_certificate pem目录;
    ssl_certificate_key  key目录;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    location / {
        try_files $uri $uri/ @router;
    }

    location @router {
        rewrite ^.*$ /index.html last;
    }
}

```

> 重启nginx运行以上配置，发现访问报403 forbidden错误,通过查看ngixn错误日志（如果没有设置log日志目录，默认位于/var/log/nginx/下，服务器与本机时间有出入，如果查看3-10日的，一般查看3-11的日志）
```
"/root/www/logWeb/index.html" is forbidden (13: Permission denied)
```

> 引起nginx 403 forbidden通常是三种情况：一是缺少索引文件，二是权限问题，三是SELinux状态。
* 一、缺少index.html或者index.PHP文件，就是配置文件中index index.html index.htm这行中的指定的文件,如果在目录下面没有index.php,index.html的时候，直接访问域名，找不到文件，会报403 forbidden。
* 二、权限问题，如果nginx没有web目录的操作权限，也会出现403错误。解决办法：修改web目录的读写权限，或者是把nginx的启动用户改成目录的所属用户，重启Nginx即可解决(chmod -R 755 /目录地址)
* 三、SELinux设置为开启状态（enabled）的原因

**********以上都未成功，最终解决办法*********  
```
vi /etc/nginx/nginx.conf
将user nginx修改为user root成功解决
```

# 单页路由问题
> 问题原因：  
> 刷新页面时访问的资源在服务端找不到，因为vue-router设置的路径不是真实存在的路径。  
> 如上的404现象，是因为在nginx配置的根目录下面压根没有对应的这个真实资源存在，这些访问资源都是在js里渲染的。  
```
    #解决单页路由问题
    location / {
        try_files $uri $uri/ @router;
        index index.html;
    }

    location @router {
        rewrite ^.*$ /index.html last;
    }
```