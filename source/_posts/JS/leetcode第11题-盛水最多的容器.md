---
title: leetcode第11题-盛水最多的容器
date: 2019-08-15 10:24:38
categories: js
tags:
- javascript
- leetcode
- 算法
---


## 首次解题(暴力破解)
* ### 答案
```js
/**
    * @param {number[]} height
    * @return {number}
    */
var maxArea = function (height) {
    let maxValue = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = 0; j < height.length; j++) {
            if (i == j) {
                continue;
            }
            let min = Math.min(height[i], height[j]);
            let abs = Math.abs(i - j);
            if (min * abs > maxValue) {
                maxValue = min * abs;
            }
        }
    }
    return maxValue;
};
```

## 学习解题
* ### 答案
```js
var maxArea = function (height) {
    let maxValue = 0;
    function search(height, left, right) {
        while (left >= 0 && right < height.length && left < right) {
            let min = Math.min(height[left], height[right]);
            let value = (right - left) * min;
            maxValue = value > maxValue ? value : maxValue;
            height[left] <= height[right] ? left++ : right--;
        }
    }

    search(height, 0, height.length - 1);

    return maxValue;
};
```