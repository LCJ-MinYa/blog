---
title: vue单文件中添加多个组件
date: 2022-10-25 14:09:38
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
                <!-- <child1 title="我是child1" /> 用单标签的时候，只会显示第一个组件，改成双标签后，就会显示两个组件了。 -->
                <child1 title="我是child1"></child1>
                <child2 title="我是child2"></child2>
                <child3 title="我是child3"></child3>
            </div>
        </div>
    </body>
</html>
<script>
    var app = new Vue({
        el: '#app',
        components: {
            child1: {
                /*
                 * 函数式组件，$children中不会存在该组件
                 * 函数式组件即无状态组件，没有data、computed、watch，也没有生命周期方法，组件中也没有this上下文，只有props传参和slots插槽
                 * 它只会原封不动的接收传递给组件的数据做处理，并渲染需要的内容。因此作为纯粹的函数可以也大大降低渲染的开销
                 */
                functional: true,
                props: {
                    title: String,
                },
                render: (h, ctx) => {
                    return h('div', {}, ctx.props.title);
                },
            },
            child2: {
                props: {
                    title: String,
                },
                template: '<div>{{ title }}</div>',
            },
            child3: {
                props: {
                    title: String,
                },
                template: '<div>{{ title }}</div>',
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
    });
</script>
```
