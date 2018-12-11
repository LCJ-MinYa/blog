---
title: gitlab和sourcetree的配合使用
date: 2018-12-07 23:30:21
categories: git
tags: 
- 操作系统
- macos
- git
---

## gitlab和sourcetree的配合使用
* 本地创建密钥，生成ssh key  
    1.在终端中输入ssh-keygen -t rsa -C "开通git的邮箱",连续回车完成创建  
    2.登录gitlab服务器，将本地ssh key值上传  
    3.ssh key的值获取方式: cat ssh key的位置  
    4.安装sourcetree，远程拉取代码即可.  
