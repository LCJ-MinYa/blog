---
title: antd-desgin-vue
date: 2021-9-8 10:21:45
categories: js
tags:
    - 前端
    - javascript
    - antd design vue
---

## select 中添加新增输入框和按钮

```vue
<!--
text数据结构
text: {
    open: false,
    value: '',
    input: '',
}
-->
<template slot="groupName" slot-scope="text">
    <div
        v-if="text !== null"
        @mousedown="
            (e) => {
                e.preventDefault();
                text.open = true;
            }
        "
    >
        <a-select placeholder="请选择产品组名称" style="width: 200px" v-model="text['value']" :open="text.open" @select="() => (text.open = false)">
            <div slot="dropdownRender" slot-scope="menu" @mousedown="(e) => e.preventDefault()">
                <v-nodes :vnodes="menu" />
                <a-divider style="margin: 4px 0;" />
                <div class="product-group-input">
                    <a-input @click="(e) => e.target.focus()" v-model="text['input']" placeholder="请输入产品组名称" size="small" />
                    <a-button type="primary" size="small" style="margin-left: 10px" @click="() => addProductGroupName(text)">新增</a-button>
                </div>
            </div>
            <a-select-option :value="item" v-for="item in groupNameList" :key="item" @click="() => (text.open = false)">{{ item }}</a-select-option>
        </a-select>
    </div>
    <span v-else>-</span>
</template>
```

## upload 组件 fileList 自定义请求 customRequest 不显示上传进度问题

```vue
<template>
    <a-upload
        ref="uploadRef"
        name="file"
        :multiple="true"
        :showUploadList="true"
        :action="uploadUrl"
        :headers="headers"
        :remove="handRemove"
        :customRequest="customRequestUpload"
        :accept="acceptFile"
        :beforeUpload="beforeUpload"
        :file-list="form.fileList"
        @change="fileChange"
    >
</template>

<script>
export default {
    data () {
        form: {
            fileList: []
        },
    }
    methods: {
        fileChange({ file }){
            if (file.status == "uploading") {
                /** 开始上传加入fileList */
                this.form.fileList.push(file)
            }
            if (file.status == "done") {
                /** 业务处理流程 */
                const {
                    like,
                    key,
                } = file.response.data.data;
                let index = this.form.fileList.findIndex(item=>{
                    return item.uid === file.uid;
                });
                this.form.fileList[index] = {
                    ...this.form.fileList[index],
                    url: like,
                    uid: key,
                    name: file.name
                };
            }
            if (file.status == "error") {
                /** 上传失败移除fileList */
                this.handRemove(file);
            }
        },
        /** 自定义上传 */
        customRequestUpload(data) {
            if (this.form.fileList.length > 3) {
                this.$message.info('附件最多只能上传三个');
                return;
            }

            const formData = new FormData();
            formData.append('file', data.file);
            formData.append('manufacturer', 'TENCENT');

            /** 任何失败都必须调用onError */
            this.$api
                .uploadFile(formData)
                .then((res) => {
                    if (res.data.data && res.data.code === '200') {
                        this.$refs.uploadRef.onSuccess(res, data.file);
                        this.$message.success('上传附件成功');
                    } else {
                        this.$refs.uploadRef.onError(err, err, data.file);
                        this.$message.error('上传附件失败');
                    }
                })
                .catch((err) => {
                    this.$refs.uploadRef.onError(err, err, data.file);
                    this.$message.error('上传附件失败');
                });
        },
        handRemove(file) {
            let index = this.form.fileList.findIndex((item) => {
                return item.uid === file.uid;
            });
            if (index !== -1) {
                this.form.fileList.splice(index, 1);
            }
        },
    }
}
</script>
```

## 递归需要返回值的处理

```js
function dealTreeData(dataArr, catId, result = []){
    for (let i = 0; i < dataArr.length; i++) {
        if (result.length) {
            return;
        }
        if (dataArr[i].catId == catId) {
            /** 重点，必须使用push才能改变到result的值 */
            result.push(...dataArr);
            /**
             * result = dataArr;
             * 这种写法改变了数组内存地址，currentLevelDataArr的值不会改变还是空数组
            */
            return;
        }
        if(dataArr[i].children && dataArr[i].children.length) {
            dealTreeData(dataArr[i].children, catId, result);
        }
    }
},

/** 需要递归的数据 */
const dataArr = [{
    catId: '1000',
    name: '水果',
    childList: [{
        catId: '10000',
        name: '水果分类1',
        children: [{
            catId: '100000',
            name: '苹果',
            children: []
        }],
    },{
        catId: '10001',
        name: '水果分类2',
        children: [],
    }]
},{
    catId: '2000',
    name: '蔬菜',
    childList: []
}];
/** 需要匹配的某个层级id */
const catId = '10001';
/** 返回值(只返回当前层级的所有数据) */
const currentLevelDataArr = [];
dealTreeData(dataArr, catId, currentLevelDataArr);
```

## 按需引入element-ui
* `yarn add element-ui`
* `yarn add babel-plugin-component --dev`
* 编辑babel.config.js
```js
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

const plugins = [
    [
        'component',
        {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
        }
    ]
]
if (IS_PROD) {
  plugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
  // plugins: [
  //   [
  //     "import",
  //     { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
  //   ]
  // ]
}
```
* 在main.js中按需引入
```js
import { Table, TableColumn, Input } from 'element-ui';

Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Input);
```

* 验证按需加载是否成功，每次添加一个组件，然后`yarn build`后查看`www/static/js/chunk-vendors.xxxx.js`文件大小
