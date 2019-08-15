---
title: leetcode第12题-整数转罗马数字
date: 2019-08-15 10:26:34
categories: js
tags:
- javascript
- leetcode
- 算法
---



## 首次解题(SB解法...)
* ### 答案
```js
var intToRoman = function (num) {
    function romanValue(int, length, index) {
        switch (true) {
            case int == 0:
                return '';
            case int > 0 && int < 4:
                // if (length == index + 1) {
                //     let str = '';
                //     for (let i = 0; i < int; i++) {
                //         str += 'I';
                //     }
                //     return str;
                // }
                // if (length == index + 2) {
                //     let str = '';
                //     for (let i = 0; i < int; i++) {
                //         str += 'X';
                //     }
                //     return str;
                // }
                // if (length == index + 3) {
                //     let str = '';
                //     for (let i = 0; i < int; i++) {
                //         str += 'C';
                //     }
                //     return str;
                // }
                // if (length == index + 4) {
                //     let str = '';
                //     for (let i = 0; i < int; i++) {
                //         str += 'M';
                //     }
                //     return str;
                // }
                let str1 = '';
                let arr1 = ['I', 'X', 'C', 'M'];
                for (let i = 0; i < int; i++) {
                    str1 += arr1[length - index - 1];
                }
                return str1;
            case int == 4:
                let str2 = '';
                let arr2 = ['IV', 'XL', 'CD'];
                str2 += arr2[length - index - 1];
                return str2;
            case int == 5:
                let str3 = '';
                let arr3 = ['V', 'L', 'D'];
                str3 += arr3[length - index - 1];
                return str3;
            case int > 5 && int < 9:
                let arr4 = ['V', 'L', 'D'];
                let arrMore = ['I', 'X', 'C'];
                let str4 = arr4[length - index - 1];
                for (let i = 0; i < int - 5; i++) {
                    str4 += arrMore[length - index - 1];
                }
                return str4;
            case int == 9:
                let str5 = '';
                let arr5 = ['IX', 'XC', 'CM'];
                str5 += arr5[length - index - 1];
                return str5;
        }
    }

    let result = '';
    let numArr = num.toString().split('');
    for (let i = 0; i < numArr.length; i++) {
        result += romanValue(numArr[i], numArr.length, i);
    }
    return result;
};
```


## 学习解题
* ### 答案
```js
var intToRoman = function (num) {
    var list = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    var valueList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var result = ''
    while (num !== 0) {
        for (var i = 0; i < valueList.length; i++) {
            //当前值大于数组内，将数组内的值赋值给结果，然后去掉已匹配的值;
            //例如1994 > 1000,获取M，然后剪掉最左边的1,即减去1000,剩余994继续下一次循环
            if (num >= valueList[i]) {
                result += list[i]
                num -= valueList[i]
                break
            }
        }
    }
    return result
};
```