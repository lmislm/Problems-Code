/*
 * @Author: lmislm 
 * @Date: 2018-03-11 20:31:12 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-12 22:23:32
 */

//  给出一串字符返回其中出现 次数最多 的符号
//example
// maxChar("abbbcde") === "b"
// maxChar("cdfsss 1111223") === "1"

// function maxChar(str) {
    
// }

// module.exports = maxChar;


const string = "hello there!"
const chars = {};

for(let char of string) {
    if(!chars[char]) {
        chars[char] = 1;
    } else {
        chars[char]++;
    }
}
console.log(chars)