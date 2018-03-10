/*
 * @Author: lmislm 
 * @Date: 2018-03-10 11:18:05 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-10 12:49:52
 */


// revese("张三") === "三张";
// revese("李四jest") === "tsej四李";

function reverse(str) {
    return str.split('').reverse().join('')
}

module.exports = reverse;
