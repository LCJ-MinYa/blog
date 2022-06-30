---
title: centos安装java、jenkins
date: 2022-6-29 16:10:57
categories: centos
tags: 
- jenkins
- centos
- java
---

## 前置安装java

### 查看云端目前支持安装的java-11的JDK版本
* <code>yum search java-11|grep jdk</code>

### 选择JDK版本，并安装
* <code>yum install -y java-11-openjdk-devel.x86_64</code>

### 测试java安装是否成功
* <code>java -version</code>、<code>java</code>、<code>javac</code>以上命令都可以测试

## 安装Jenkins

### 拉取库的配置到本地对应文件
* <code>sudo wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo</code>
* wget如果不存在，可通过yum安装<cdoe>yum -y install wget</code>

### 导入公钥
* <code>sudo rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key</cdoe>

### 安装
* <code>sudo yum -y install jenkins</code>
```shell
vi /etc/sysconfig/jenkins           #Jenkins配置文件
JENKINS_USER="root"                 #必须root用户运行jenkins中shell命令

vi /usr/lib/systemd/system/jenkins.service
Environment="JENKINS_PORT=9999"     #修改端口

systemctl daemon-reload             #命令行中执行，重新加载配置文件
```

## 启动
* <code>systemctl start jenkins</code>
```
//报错信息,重新再启动就好了。。。。
Starting jenkins (via systemctl):  Job for jenkins.service failed. See "systemctl status jenkins.service" and "journalctl -xe" for details.
```

## 开机自启动
* <code>systemctl enable jenkins</code>

## 重启
* <code>systemctl restart jenkins</code>

## 查看状态
* <code>systemctl status jenkins</code>

## 配置gitlab的webhook自动触发jenkins构建

