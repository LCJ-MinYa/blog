---
title: leetcode第五题-最长回文子串
date: 2019-08-14 09:38:55
categories: js
tags:
- javascript
- leetcode
- 算法
---

## 题目
* Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

* ### Example 1:
```
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

* ### Example 2:
```
Input: "cbbd"
Output: "bb"
```

* ### 题目理解
* 给定一个最长为1000长度得字符串，获取最长得回文子串


## 首次解题(暴力破解)
* ### 答案(答案正确，但是超时)
```js
var longestPalindrome = function (s) {
    //判断是否为回文
    function checkPalindrom(str) {
        return str == str.split('').reverse().join('');
    }

    //字符串转换为数组
    let array = s.split('');
    //当前回文长度
    let maxLength = 0;
    //当前回文字符串
    let palindromStr = '';

    for (let i = 0; i < array.length; i++) {
        //临时存储计算中的回文来与全局回文做比较
        let tempPalindromStr = '';
        for (let j = i; j < array.length; j++) {
            tempPalindromStr += array[j];
            if (checkPalindrom(tempPalindromStr)) {
                if (tempPalindromStr.length > maxLength) {
                    maxLength = tempPalindromStr.length;
                    palindromStr = tempPalindromStr;
                }
            }
        }
    }

    return palindromStr;
};
```

## 二次优化解题(暴力破解 + 剪枝)
* ### 答案(答案正确，但是依然超时)
```js
var longestPalindrome = function (s) {
    //判断是否为回文
    function checkPalindrom(str) {
        return str == str.split('').reverse().join('');
    }

    //字符串转换为数组
    let array = s.split('');
    //当前回文长度
    let maxLength = 0;
    //当前回文字符串
    let palindromStr = '';

    for (let i = 0; i < array.length - maxLength; i++) {
        //临时存储计算中的回文来与全局回文做比较
        let tempPalindromStr = '';
        for (let j = i + maxLength; j < array.length; j++) {
            tempPalindromStr += array[j];
            //剪枝1、如果当前tempPalindromStr长度小于等于palindromStr时，无论是否是回文都跳过
            if (tempPalindromStr.lenght <= palindromStr.lenght) {
                continue;
            }

            //剪枝2、减少函数调用开销，如果end位置的字符与start位置字符不相等，则不可能是回文串。
            if (tempPalindromStr.charAt[i] != tempPalindromStr.charAt[j]) {
                continue;
            }

            if (checkPalindrom(tempPalindromStr)) {
                if (tempPalindromStr.length > maxLength) {
                    maxLength = tempPalindromStr.length;
                    palindromStr = tempPalindromStr;
                }
            }
        }
    }

    return palindromStr;
};
```

## 学习解法(中心扩展法)
* ### 答案
```js
var longestPalindrome = function (s) {
    //获取指定下标开始中心扩展获取最长回文长度
    function searchPalindromeLength(str, left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
        return right - left - 1; //right - left - 2 + 1(减二是因为上一个判断循环了一次left--和right++)
    }


    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        //这里执行两次，传递i和i+1是因为回文可能存在两种情况, 'aba'和'abba'都需要判断到
        let len1 = searchPalindromeLength(s, i, i);
        let len2 = searchPalindromeLength(s, i, i + 1);

        //取最长字符串得回文
        let len = len1 >= len2 ? len1 : len2;

        //当当前循环得回文长度大于之前存储得回文长度时候，覆盖之前存储
        if (len > end - start) {
            /*
                这里有必要说start = i - Math.floor((len - 1) / 2)；end = i + Math.floor(len / 2)是怎么得到的

                假设坐标为i，当length为奇数时，i为中心点，取子字符串
                起始坐标 i_start = i - (len-1)/2  ------------ length为奇数
                终止坐标 i_end = i + (len-1)/2    ------------ length为偶数

                换算=>
                i_start = i - (len-1)/2   ==  i - Math.floor((len-1)/2)                      ------------ length为奇数
                i_start = i - (len)/2 - 1 ==  i - (len-2)/2   ==  i - Math.floor((len-1)/2)  ------------ length为偶数

                假设坐标为i，当length为偶数时，i为中心前置点，取子字符串
                起始坐标 i_start = i - (len)/2 - 1
                终止坐标 i_end = i + (len)/2

                同理换算=>
                i_end = i + (len-1)/2  ==  i + Math.floor(len / 2)      ------------ length为奇数
                i_end = i + (len)/2    ==  i + Math.floor(len / 2)      ------------ length为偶数

             */
            start = i - parseInt((len - 1) / 2);
            end = i + parseInt(len / 2);
        }
    }

    return s.slice(start, end + 1);
}
```
