/*
 * @Author: lmislm 
 * @Date: 2018-03-15 21:27:05 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-16 12:00:39
 */


// 易位构词游戏：
// 将组成一个词或短句的字母重新排列顺序，
// 原文中所有字母的每次出现都被使用一次，这样构造出另外一些新的词或短句。

//  earth = heart (地球 = 心)
// "Tom Marvolo Riddle" = "I am Lord Voldemort" (汤姆·马沃罗·里德尔 = 我是伏地魔)
// "Semolina ~ is no meal." (粗粒小麦粉 = 不是菜肴)

// --例子(stringA中字符等于stringB中字符）
// anagram('earth', 'heart') --> true

function anagram(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }
    
    for(let char in aCharMap) {
        if(aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

module.exports = anagram;