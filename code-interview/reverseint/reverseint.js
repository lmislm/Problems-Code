/*
 * @Author: lmislm 
 * @Date: 2018-03-11 10:38:40 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-11 19:24:06
 */
//给你一个带符号的整数，返回这些数值的倒序

//例如
// reverseint(1243) === 3421
// reverseint(123) === 321
// reverseint(-12) === -21
// reverseint(-10) === -1

function reverseint(n) {
    
}

// 方法一
// function reverseint(n) {
//     return n = (Math.abs(n)
//                     .toString().split('')
//                     .reverse().join('')
//                 )*Math.sign(n);
// }

module.exports = reverseint;