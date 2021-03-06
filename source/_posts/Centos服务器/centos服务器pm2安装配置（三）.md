---
title: centos服务器pm2安装配置（三）
date: 2018-12-08 00:04:22
categories: centos
tags: 
- 服务器
- node
- pm2
- centos
---

1.安装npm安装pm2之前先安装cnpm淘宝镜像，翻墙你懂得… 地址:http://npm.taobao.org/  
2.使用cnpm安装pm2管理工具  
<pre>
cnpm install -g pm2
</pre>
3.在root/www下新建2个express站点，以便测试pm2多应用启动和nginx端口转发  

注意：  
<pre>
pm2 start app.js -i 4         # cluster mode 模式启动4个app.js的应用实例
pm2 start app.js –-name siteone # 启动应用程序并命名为siteone
pm2 start app.js –-watch      # 当文件变化时自动重启应用
pm2 list                      # 列表 PM2 启动的所有的应用程序
pm2 monit                     # 显示每个应用程序的CPU和内存占用情况
pm2 show [app-name]           # 显示应用程序的所有信息
pm2 logs                      # 显示所有应用程序的日志
pm2 logs [app-name]           # 显示指定应用程序的日志

pm2 stop all                  # 停止所有的应用程序
pm2 stop 0                    # 停止 id为 0的指定应用程序
pm2 restart all               # 重启所有应用
pm2 reload all                # 重启 cluster mode下的所有应用
pm2 gracefulReload all        # Graceful reload all apps in cluster mode
pm2 delete all                # 关闭并删除所有应用
pm2 delete 0                  # 删除指定应用 id 0
pm2 scale api 10              # 把名字叫api的应用扩展到10个实例
pm2 reset [app-name]          # 重置重启数量
pm2 startup                   # 创建开机自启动命令
pm2 save                      # 保存当前应用列表
pm2 resurrect                 # 重新加载保存的应用列表
</pre>
## pm2实现自启动：
* 1、启动node.js应用
> pm2 start app.js -i 1 --name appName(以fork模式启动1个进程)  
> pm2 start app.js -i 0 --name appName(以cluster模式启动根据cpu个数相同的进程)
* 2、保存脚本
> pm2 save  
* 3、创建开机启动脚本
> pm2 startup systemd   
* 4、重启服务器测试
> reboot  
说明：如果您需要启动多个服务，需要多次运行步骤2即可（建议app.js改成绝对路径，加上–-name参数，或者改成不同的名字，比如server.js,server1.js）
