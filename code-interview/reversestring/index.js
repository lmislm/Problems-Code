/*
 * @Author: lmislm 
 * @Date: 2018-03-10 11:18:05 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-10 19:27:03
 */


// revese("张三") === "三张";
// revese("李四jest") === "tsej四李";

//方法三
function reverse(str) {
    return str.split('').reduce((reversed, character) => character + reversed,'');
}

module.exports = reverse;

//方法二
// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {

//         // reversed = character + reversed is wrong;
//         reversed = character + reversed;
//     }

//     return reversed;
// }


// 方法一
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }