---
title: root无法登陆ssh
date: 2020-03-16 09:16:30
categories:
- centos
tags: 
- 服务器
- centos
---

## 问题
* Linux无法远程，返回信息：Permission denied, please try again

## 分析
* 一般这样的信息，第一个反应就是账号和密码不正确。但这个问题场景，账号和密码信息准确无误，使用终端方式登录没有任何问题，主机内部没有限制该账号远程登陆。
* 处理这个问题最好的分析方法就是查看系统登录日志。（举例：centos 系统可以查看 /var/log/secure日志） 
* 从中可以看到这样的记录：pam_tally2(sshd:auth): user xxxxxx  (500) tally 74, deny 5 （账号登录失败次数过多导致被锁定）

## 解决
pam_tally2 --reset -u root 解锁即可(这里root也可以对应其他被锁定的账号) 

