---
title: aliyun-oss
date: 2022-4-15 16:09:45
categories: js
tags:
- 前端
- javascript
- 阿里云oss
---

## 断点续传
```js
/*  aliOssUpload.js简单封装文件
 *  需要自定义字段,folderPath、bucket、options
 *  options中需要传递requestApi(请求服务器获得sts凭证)
 */

import OSS from 'ali-oss';
import Cookie from 'js-cookie';
const isProd = process.env.VUE_APP_CURRENTMODE === 'prod';

export default class AliOssUpload {
    /** oss实例 */
    client = null;
    /** 上传文件夹自定义路径 */
    folderPath = '/test/';
    /** 上传阿里云配置 */
    options = {
        /** bucket 所在的区域，默认 oss-cn-hangzhou */
        region: 'oss-cn-chengdu',
        /** 通过控制台创建的bucket */
        bucket: isProd ? 'prodBucketName' : 'bucketName',
        /** (secure: true) 则使用 HTTPS， (secure: false) 则使用 HTTP */
        secure: true,
        /** 是否使用阿里云内网访问，默认false。比如通过ECS访问OSS，则设置为true，采用internal的endpoint可节约费用 */
        internal: false,
        // endpoint: 'oss-cn-chengdu-internal.aliyuncs.com',
    };

    constructor(options = {}) {
        this.options = { ...this.options, ...options };
    }

    getStsToken(forceUpdate = false) {
        return new Promise((resolve, reject) => {
            /** 通过阿里云控制台创建的access key */
            const accessKeyId = Cookie.get('accessKeyId');
            /** 通过阿里云控制台创建的access secret */
            const accessKeySecret = Cookie.get('accessKeySecret');
            /** 使用临时授权方式token */
            const stsToken = Cookie.get('stsToken');
            console.log(this.options);
            if (accessKeyId && accessKeySecret && stsToken && !forceUpdate) {
                this.client = new OSS({ ...this.options, accessKeyId, accessKeySecret, stsToken });
                resolve(this.client);
            } else {
                this.options
                    .requestApi()
                    .then((result = {}) => {
                        Cookie.set('accessKeyId', result.accessKeyId, { expires: 0.5 });
                        Cookie.set('accessKeySecret', result.accessKeySecret, { expires: 0.5 });
                        Cookie.set('stsToken', result.securityToken, { expires: 0.5 });
                        this.client = new OSS({ ...this.options, ...result, stsToken: result.securityToken });
                        resolve(this.client);
                    })
                    .catch((err) => {
                        console.log(err, '获取stsToken失败');
                        reject(err);
                    });
            }
        });
    }

    resumeBreakpointUpload(filename, file, options = {}) {
        return this.client.multipartUpload(`${this.folderPath}${filename}`, file, options);
    }
}
```

## sts到期自动更新思路
* 1.此为网上看到的资料觉得在理，备份下![image](../../../../../images/js/sts.jpg)