/*
 * @Author: lmislm 
 * @Date: 2018-03-11 20:31:12 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-12 23:01:09
 */

//  给出一串字符返回其中出现 次数最多 的符号
//example
// maxChar("abbbcde") === "b"
// maxChar("cdfsss 1111223") === "1"

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
    
    for(let char of str) {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    // console.log(charMap);
}

module.exports = maxChar;


// const string = "hello there!"
// const chars = {};

// 简化
// for(let char of string) {
//     chars[char] = chars[char] + 1 || 1;
// }
// console.log(chars)

// for(let char of string) {
//     // chars[char] == 如果之前没有出现过该字符chars[0],则为undefined，否则 undefined = undefined + 1 
//     if(!chars[char]) {
//         chars[char] = 1;
//     } else {
//         chars[char]++;
//     }
// }
// console.log(chars)