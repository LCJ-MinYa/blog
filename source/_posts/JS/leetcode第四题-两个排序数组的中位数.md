---
title: leetcode第四题-两个排序数组的中位数
date: 2019-08-13 10:39:17
categories: js
tags:
- javascript
- leetcode
- 算法
---

## 题目
* There are two sorted arrays nums1 and nums2 of size m and n respectively.
* Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
* You may assume nums1 and nums2 cannot be both empty.

* ### Example 1:
```
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
```

* ### Example 2:
```
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```

* ### 题目理解
* 给定两个排序数组，且数组内元素都为数字，数组的位数不定，计算出这两个数组合并之后中间的值（如果合并之后为偶数就取中间两位的平均值，如果为奇数就直接取中间数即可）.


## 首次解题
* ### 答案
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    function compare(a, b) {
        return a - b;
    }    
    
    let isOddNumber = (nums1.length + nums2.length) % 2 !== 0;
    let allArray = nums1.concat(nums2).sort(compare);
    if(isOddNumber){
        return allArray[parseInt((nums1.length + nums2.length) / 2)];
    }else{
        let num1 = allArray[((nums1.length + nums2.length) / 2) - 1];
        let num2 = allArray[(nums1.length + nums2.length) / 2];
        return (num1 + num2) / 2;
    }
};
```

* ### 解题思路
1. 首先将两个数组合并然后排序;
2. 判断中路数是奇数还是偶数返回对应结果.

## 知识点
* <code>array.sort()</code>排序不正确的原因
```js
function compare(a, b) {
    return a - b;
}  

array.sort(compare);
```