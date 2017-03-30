/**
 * Created by Administrator on 2017/3/23.
 */
function disemvowel(str) {
    //除去所有元音
    return str.replace(/[aeiou]/gi,'');
}
// console.log(disemvowel('aabbbccee'));

// 还是mdn靠谱
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace