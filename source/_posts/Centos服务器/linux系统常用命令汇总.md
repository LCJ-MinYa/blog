---
title: linux系统常用命令汇总
date: 2018-12-08 00:14:13
categories:
- centos
tags: 
- 服务器
- centos
---

## 重启系统
* <code>reboot</code>

## 查看当前文件夹目录
* <code>ls</code>(不包含隐藏文件)
* <code>ls -l</code>(查看当前文件夹目录详细信息，不包含隐藏文件)
* <code>ls -a</code>(包含隐藏文件)

## 格式化硬盘
* <code>mkfs.ext4 /dev/vdb</code>（格式化vdb这个名称的硬盘，其中ext4为磁盘格式，例如ex2,ex3和window下面的NTFS）

## 查看生效的系统盘和数据盘
* <code>df -h</code>

## 文件操作
> name在下文中统一代表变量，即你自己想要操作的对应的文件或文件名等
* <code>cd name</code>(移动目录)
* <code>cat name</code>(输入文件内容，不能编辑)
* <code>vi name</code>(打开文件编辑，i编辑，ESC退出编辑 :wq保存退出，:q退出不保存 :q!强制退出不保存)
* <code>mkdir name</code>(创建文件或文件夹)
* <code>rm -rf name</code>(删除文件夹或文件，且不需要提示用户)
* <code>cp name1 name2</code>(复制文件1到文件2，文件1必须存在)

## 查看Centos端口命令
* <code>netstat -lntp</code>(查看监听(Listen)的端口)
* <code>netstat -antp</code>(查看所有建立的TCP连接)

## 查看文件夹大小
```
du -h --max-depth=1
m：以M为单位展示查询结果
-h：以K、M、G为单位展示查询结果，提高信息可读性
--max-depth=1：其中，数字“1”是指查询结果中最多显示的目录层数，这里指最多显示一层目录
```
> 查看当前目录下文件夹大小，按照大小依次排序(由于磁盘空间将满,想知道哪些文件夹的内容过大，删除一些大且无用文件不断的du –max-depth=1 -h，筛选出你要删除的文件)

## Linux中查看SSH登录失败次数
```
cat /var/log/secure* | grep 'Failed password' | grep sshd | awk '{print $1,$2}' | sort | uniq -c
```

## 创建用户与更改密码
* adduser username 创建用户
* passwd username  修改密码

## 切换用户
* su root 切换root用户

## ssh相关
* service sshd restart 重启ssh服务

## 终端ssh断开方法
* logout
* Ctrl+D

## 登陆失败限制
> vi /etc/pam.d/sshd(远程失败限制) vi /etc/pam.d/login(本地失败限制)
```
#%PAM-1.0

auth required pam_tally2.so deny=3 unlock_time=300 even_deny_root root_unlock_time=10

/*注释说明*/
#在#%PAM-1.0的下面，即第二行，添加内容，一定要写在前面，如果写在后面，虽然用户被锁定，但是只要用户输入正确的密码，还是可以登录的！
#even_deny_root 也限制root用户;
#deny次数
#unlock_time锁定时间（秒）
```

## 移动文件
```
mv 文件名当前目录 移动后的目录
```

## 查找文件内关键字
在非i（编辑模式）和非ctrl+:(命令模式下)输入 =>
```
/关键字
```

## 查看端口是否占用
* lsof -i:80（带:80查询80端口，不带查询所有端口）

## 查看文件
* <code>find / -name \*.psd</code>(全局查找psd后缀的文件)

## 命令行利用ssh从远程服务器下载或者上传文件
> 端口非22的时候scp -P指定端口，注意大写; -r代表复制文件夹
* <code>scp -r -P 7777 root@ip:/root/www/xxx /Users/minya/Desktop</code>(下载xxx文件夹)
* <code>scp -r /Users/minya/Desktop/xxx -P 7777 root@ip:/root/www/</code>(上传xxx文件夹)