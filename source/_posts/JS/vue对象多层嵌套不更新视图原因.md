---
title: vue对象多层嵌套不更新视图原因
date: 2018-12-21 09:49:38
categories: js
tags:
- 前端
- javascript
- vue
---

## 背景
* 在vuex中更新如下对象内的data数据不更新
```
taskItem: {
    default: {
        uncomplete: {
            name: 'uncomplete',
            label: '未完成',
            isRequest: false,
            data: []
        },
        complete: {
            name: 'complete',
            label: '已完成',
            isRequest: false,
            data: []
        }
    },
    新增数据对象1:{
        uncomplete: {
            name: 'uncomplete',
            label: '未完成',
            isRequest: false,
            data: []
        },
        complete: {
            name: 'complete',
            label: '已完成',
            isRequest: false,
            data: []
        }
    },
    新增数据对象2:{
        uncomplete: {
            name: 'uncomplete',
            label: '未完成',
            isRequest: false,
            data: []
        },
        complete: {
            name: 'complete',
            label: '已完成',
            isRequest: false,
            data: []
        }
    }
}

vuex初始化时候的原始数据没有新增数据对象这块
新增数据对象是在一次请求之后添加的
添加方式是直接赋值操作（这里是问题原因所在）!!!
```

* 直接对整个taskItem进行深拷贝可以达到更新目的
```
[TYPES.ADD_TASK_ITEM](state, taskItemArrayData) {
    let item = state.taskItem[state.activeTaskListType][state.activeTaskItemType];
    item.isRequest = true;
    item.data = taskItemArrayData;
    state.taskItem = JSON.parse(JSON.stringify(state.taskItem));
}
```

* 上面办法的问题
```
每次添加新的数据源，更新删除更改操作都会重新深拷贝一次，性能问题,代码洁癖不允许
```

## 解决
* 参考api文档
```
有时你想向已有对象上添加一些属性，例如使用 Object.assign() 或 _.extend() 方法来添加属性。但是，添加到对象上的新属性不会触发更新。在这种情况下可以创建一个新的对象，让它包含原对象的属性和新的属性
重点在于已有对象添加属性，直接赋值是不能建立正确的双向绑定，导致在接下来的更新新增数据对象内data时不触发更新，所以从源头下手
for (let i = 0; i < taskListArrayData.length; i++) {
    state.taskItem[taskListArrayData[i]._id] = {
        uncomplete: {
            name: 'uncomplete',
            label: '未完成',
            isRequest: false,
            data: []
        },
        complete: {
            name: 'complete',
            label: '已完成',
            isRequest: false,
            data: []
        }
    }
    if (!taskListArrayData[i].icon) {
        taskListArrayData[i].icon = 'icon-yuandian';
    }
}
state.taskItem = JSON.parse(JSON.stringify(state.taskItem));
在添加新增数据对象时深拷贝数据源，接下来对数据源的操作就能正常更新视图
```
