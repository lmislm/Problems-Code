// ------ 要求
// 写一个函数，输入字符串，要求将其每个词的首字母变为大写
// 例子
// capitalize('a little') === A Little
// capitalize('my name is lmislm') === My Name Is Lmislm

function capitalize(str) {
    const words = [];
    // words.split('')
    for(let word of str.split(' ')) {
        // console.log(word)
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

module.exports = capitalize;
