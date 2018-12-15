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

const cmdStr = "sh -x /root/www/logServer/deploy.sh";
exec(cmdStr, (err, result) => {
    if (err) {
        console.log(err);
        process.exit();
    }
    console.log('执行成功');
    process.exit();
})
```


