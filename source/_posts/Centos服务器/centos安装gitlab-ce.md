---
title: centos安装gitlab-ce
date: 2022-6-29 16:10:57
categories: centos
tags: 
- gitlab-ce
- centos
---

## 安装依赖
* <code>yum -y install policycoreutils openssh-server openssh-clients policycoreutils-python</code>

## 添加GitLab包存储库
* <code>curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | bash</code>

## 安装gitlab-ce
* <code>yum -y install gitlab-ce</code>

## 修改配置
```shell
vi /etc/gitlab/gitlab.rb
external_url：http://localhost:10000    #修改端口

gitlab-ctl reconfigure                  #重新配置服务,第一次时间很长需要耐心等待。
```

## 启动
* <code>gitlab-ctl start</code>启动完成后用户名为root,密码存储在<code>/etc/gitlab/initial_root_password</code>

## 服务命令
* <code>gitlab-ctl start</code>启动
* <code>gitlab-ctl stop</code>停止
* <code>gitlab-ctl restart</code>重启
* <code>systemctl enable gitlab-runsvdir.service</code>开机启动
* <code>systemctl disable gitlab-runsvdir.service</code>禁止开机自启动