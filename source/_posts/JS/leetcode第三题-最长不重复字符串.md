---
title: leetcode第三题-最长不重复字符串.md
date: 2019-08-13 10:07:15
categories: js
tags:
- javascript
- leetcode
- 算法
---

## 题目
* Given a string, find the length of the longest substring without repeating characters.

* ### Example 1:
```
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
```

* ### Example 2:
```
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

* ### Example 3:
```
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

* ### 题目理解
* 给定任意一个字符串，找到这个字符串中最长不重复的子字符串

## 首次解题
* ### 答案
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = s.split('');
    let maxLength = 0;
    let result = '';
    for(let j=0; j<arr.length; j++){
        let maxString = '';
        for(let i=j; i<arr.length; i++){
            if(maxString.indexOf(arr[i]) > -1){
                if(maxString.length > maxLength){
                    maxLength = maxString.length;
                    result = maxString;
                }
                break;
            }
            maxString += arr[i];
            if(maxString.length + j === arr.length && maxString.length > maxLength){
                return maxString.length;
            }
        }
    }
    return maxLength;
};
```

* ### 解题思路
1. 首先将字符串转换为数组;
2. 循环该数组 => 再次循环，首字符循环所有次数，第二个字符循环所有次数-1，以此类推，得到所有组合.
3. 记录每次组合的最大字符长度和该字符的值
4. 注意: 如果字符串为" "或者"bba"需要添加一些限制条件。