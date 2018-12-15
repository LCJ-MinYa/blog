---
title: github中webhook配合thinkjs自动化部署
date: 2018-12-14 13:37:50
categories:
- git
tags:
- git
- github
- webhook
- 自动化部署
- thinkjs
- centos
---

## 设置github项目中的webhook
* 项目地址 => Settings => Webhooks => Add webhook
```
Payload URL => 需要出发POST请求的地址
Content type => application/json
Secret => 与服务器验证的密钥（任意字符，无限制）
```

## thinkjs配置
* 创建一个请求地址/webhook/logServer
* 判断post请求是否来自github,并验证密钥
```
//请求头
this.ctx.headers
//加密规则
crypto.createHmac('sha1', model.logServerWebhookSecret).update(JSON.stringify(this.post())).digest().toString('hex')
```
* 验证成功，执行自动化更新网站脚本
```
项目根目录下创建脚本deploy.sh，执行需要更新的操作
#!/bin/bash

cd /root/www/logServer
git pull
pm2 restart logServer

在验证成功后执行该脚本
const exec = require('child_process').exec;

return new Promise((resolve, reject) => {
    const cmdStr = "sh -x /root/www/logServer/deploy.sh";
    let workerProcess = exec(cmdStr);
    workerProcess.stdout.on('data', function(data) {
        //console.log('stdout: ' + data);
        //shell执行日志
        if (data.indexOf('Applying action restartProcessId on app') > -1) {
            resolve(data);
        }
    });

    workerProcess.stderr.on('data', function(data) {
        //shell执行命令
        console.log('stderr: ' + data);
    });
    setTimeout(() => {
        //10秒超时就返回失败
        reject('fail');
    }, 10000);
});
```

## 遇到的错误处理
* process.exit();不能使用这一句，会关闭thinkjs的worker进程，导致没有回调;
* macos和windows本地不会杀死exec进程，centos会杀死进程，需要单独监听
```
node.js 中的child_process有一个exec方法，可以调用shell脚本。今天发现exec没有执行回调方法。后来在网上查阅资料，发现exec的输出有大小限制，当输出数据量过大时，系统会杀死进程，因而不会触发回调。

var workerProcess = child_process.exec('node node_modules/webpack/bin/webpack.js', {})

workerProcess.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

workerProcess.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});
```


