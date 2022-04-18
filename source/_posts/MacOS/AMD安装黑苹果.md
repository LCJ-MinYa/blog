---
title: AMD安装黑苹果
date: 2019-01-09 01:50:17
categories: macos
tags: 
- 操作系统
- macos
- amd
- 黑苹果
---

## 介绍

### 安装相关
* 系统版本MacOS 10.13.3
* 镜像为网上资源（吉米镜像）
* U盘 Clover引导，目前启动还是依赖U盘，暂未研究硬盘引导
* 自带网卡驱动，自己打显卡和声卡驱动（声卡驱动问题待定）

### 配置
* AMD Ryzen 1700x
* 华擎 X370 Killer SLI主板
* 宇瞻（Apacer） 黑豹玩家系列 DDR4 2400 8G x 2
* 技嘉 GTX 1070ti
* 双固态 闪迪(SanDisk) 加强版 120G X 2 + 希捷2T机械硬盘
* 双显示器 2K + 1080P
* 海韵（Seasonic）额定750W G750 电源

### 安装目录
* win10安装在一个固态中
* 黑苹果安装在一个固态中
* 机械硬盘为win10存放资料和安装应用程序的地方



## 准备工具（软件）
* dmg镜像
* TransMac(制作U盘Clover引导和镜像)
* DiskGenius（硬盘管理工具）
* easyUEFI(未使用，做硬盘引导用)
* 大于镜像的U盘（一般8G即可）
* WebDriver-387.10.10.10.25.156

## 步骤

### 1.TransMac制作启动盘
* 格式化U盘，在软件的左侧找到自己的U盘，然后右键选择Formar Disk for Mac意思是将U盘格式化为Mac格式，当然U盘内容提前做好备份。
![image](/blog/images/macos/黑苹果/格式化U盘.png)
* 写入DMG镜像，在软件的左侧找到自己的U盘，然后右键选择Restore with Disk Image来准备将dmg镜像写入到U盘中。(时间较长，等待15-30分钟)，期间会提示你是否格式化u盘，这是因为此时windows不能识别该u盘，点否继续。
![image](/blog/images/macos/黑苹果/写入dmg镜像.png)
* 此时已经可以通过DiskGenius查看到u盘相关信息。（如果要制作硬盘启动，需要像u盘一样，有一个独立的ESP分区，并且将u盘的EFI相关文件拷贝覆盖硬盘ESP的EFI信息）
![image](/blog/images/macos/黑苹果/EFI信息.png)

### 2.开机F11选择U盘UEFI启动（不同主板案按键不同）

### 3.选择AMD_Ryzen_linjimmy_10.13.3_V4，回车确认

### 4.选择磁盘工具-抹除与改名盘名”mcOS“安装即可
* 抹除为HFS + Mac os扩展日志式(如果是英文名称为Mac OS Extended(Journaled),一般是第一个选项)
* 分区形式选择GPT[GUID]
* 当安装完成后重启
![image](/blog/images/macos/黑苹果/格式化固态硬盘格式.jpg)

### 5.安装完毕后再次选择AMD_Ryzen_linjimmy_10.13.3_V4 ,回车确认
* 打开上方的工具-终端运行
* 通过内建的批处理方法安装(就是执行sh脚本)
```
sh /volumes/AMD_Ryzen_linjimmy_10.13.3_V4/linjimmy/linjimmy.sh
```
* 然后会出现很多#####，输入你刚刚安装的系统盘名称后回车,无所谓大小写
* 然后等大概20秒,完成操作,手动重启正式进入macOS High Sierra系统
* 暂时不要登陆苹果账号，会报连接不上服务器，然后无法前进后退，只能重启再次安装。

### 6.系统选择macOS

### 7.安装必要的驱动到SLE,通过Kext Utility重建缓存.(！！！重要，显卡声卡驱动相关问题)
> SLE => MacOS的驱动目录(/System/Library/Extensions)，每次安装kext都需要使用kext utility修复权限。
* 1.显卡驱动,下载WebDriver，直接安装即可(pkg格式)
* 2.声卡驱动,下载驱动Lilu.kext, AppleALC.kext放入SLE目录，Kext Utility重建缓存。（打开系统偏好设置-声音-播放声音效果的设备-切换Line-out即可听到声音，此处怀疑不需要前面声卡驱动，不过未做验证，按照此步骤暂时没有问题）
![image](/blog/images/macos/黑苹果/line-out.png)

### 8.安装完成
* 目前即是双系统（win10 + MacOS）
* 默认进入win10
* 需要进入MacOS，保证之前安装U盘插入，开机F11选择U盘UEFI启动即可，进入系统后即可取下U盘

## 注意事项

## 借鉴网址
[[吉米镜像]黑苹果 AMD Ryzen FX APU 10.13.3 linjimmy V4定制傻瓜安装镜像与安装教程](https://www.amder.club/thread-50-1-1.html)
[[Ryzen黑苹果系统]10.12.5 安装与镜像下载 完整教程~](http://tieba.baidu.com/p/5179723176)
[B 站黑苹果安装教程](https://www.sqlsec.com/2018/08/clover.html)
[U盘改为硬盘EFI引导](https://imac.hk/clover-usb-install-add-boot-menu.html)
[SLE和EE区别和含义](https://zhidao.baidu.com/question/1959725232130161260.html)
[声卡驱动问题](https://www.jianshu.com/p/9be5cef1c1d2)