/*
 * @Author: lmislm 
 * @Date: 2018-03-10 20:09:50 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-10 21:07:14
 */

// palindrome('abba') === true
// palindrome('cbcaacbc') === flase
//回文指的是：字符串正着读反着读都完全一样

function palindrome(str) {
    return str.split('').every((char, index) => {
        //字符串“前后”对比是否相等
        return char === str[str.length - index - 1];
    })
}

//方法一 和反转字符串比对
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');

//     return str === reversed;
// }

module.exports = palindrome;