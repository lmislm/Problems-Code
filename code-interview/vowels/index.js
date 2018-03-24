/*
 * @Author: lmislm 
 * @Date: 2018-03-24 21:40:18 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-24 21:50:50
 */
// 找出字符串中的元音字母（大小写）'a','e','i','o','u'个数
// 例如
// vowels('hello') ---> 3
// vowels('why?') ---> 0
// vowels('lmislm') ---> 1
// str.includes()方法
function vowels(str) {
  let count = 0;
  const checker = 'aeiou';

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }
  return count;
}

module.exports = vowels;
