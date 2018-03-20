// ------ 要求
// 写一个函数，输入字符串，要求将其每个词的首字母变为大写
// 例子
// capitalize('a little') === A Little
// capitalize('my name is lmislm') === My Name Is Lmislm

// 方法二：通过空格i判断首字母
function capitalize(str) {
//    const firstLetter = str[0].toUpperCase();
   let result = str[0].toUpperCase();
   
   for(let i = 1; i < str.length; i++) {
       if(str[i - 1] === ' ') {
           result += str[i].toUpperCase();
       }else {
           result += str[i];
       }
   }

   return result;
}

module.exports = capitalize;

//方法一: 将词组分开
// function capitalize(str) {
//     const words = [];
//     // words.split('')
//     for(let word of str.split(' ')) {
//         // console.log(word)
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return words.join(' ');
// }

// module.exports = capitalize;
