---
title: vue外部监听生命周期函数
date: 2022-10-26 10:09:38
categories: js
tags:
- 前端
- javascript
- vue
---

## demo
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    </head>
    <body>
        <div id="app">
            <div>
                <h1>{{ message }}</h1>
                <child title="我是child" @hook:updated="handleUpdated" />
            </div>
        </div>
    </body>
</html>
<script>
    var app = new Vue({
        el: '#app',
        components: {
            child: {
                props: {
                    title: String,
                },
                data() {
                    return {
                        ownTitle: 'child自己得title',
                    };
                },
                methods: {
                    changeOwnTitle() {
                        console.log(222);
                        // this.ownTitle += 1;
                    },
                },
                template:
                    '<div><div>{{ title }}</div><div @click="changeOwnTitle">{{ ownTitle }}</div></div>',
            },
        },
        data() {
            return {
                message: '我是主体vue组件',
            };
        },
        mounted() {
            console.log(this);
        },
        methods: {
            handleUpdated() {
                console.log(11);
            },
        },
    });
</script>
```
