---
title: windows安装java、jenkins
date: 2022-6-29 16:10:57
categories: windows
tags: 
- jenkins
- windows
- java
---

## 前置安装java

### 下载
* [java11下载地址](https://www.oracle.com/java/technologies/downloads/#java11-windows)，jenkins推荐安装java11，且注意下载该版本需要登录oracle账号
* 下载完成后，推荐自定义安装目录,类似<code>D:\software\java\jdk-11.0.15.1</code>

### 配置环境变量
* 系统变量 -> 新建，变量名：<code>JAVA_HOME</code>，变量值：<code>D:\software\java\jdk-11.0.15.1</code>
* 系统变量 -> Path -> 编辑 -> 新建，<code>%JAVA_HOME%\bin</code>

### 测试java安装是否成功
* 打开命令行工具,<code>java -version</code>、<code>java</code>、<code>javac</code>以上命令都可以测试


## 安装Jenkins

### 下载
* [jenkins下载地址](https://mirrors.jenkins.io/war-stable/2.332.3/)，打开后点击jenkins.war进行下载。
* 下载完成后，推荐自定义放置目录,类似<code>D:\software\jenkins\jenkins.war</code>

### 运行
* cmd到对应jenkins目录，执行命令<code>java -jar jenkins.war --httpPort=9000</cdoe>，端口可以自行定义
* 打开浏览器，输入localhost:9000，进入Jenkins界面，初始化配置即可。

## 配置gitlab的webhook自动触发jenkins构建

