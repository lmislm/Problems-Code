/* 题目描述：
给定一个长度小于50且包含字母和数字的任意字符串，要求按顺序取出当中的数字和英文字母，数字需要去重，重新排列后的字符串数字排前面字母排后面

输入
 需要截取的字符串（包含数字和字母）

输出
按照要求重新排列的字符串


样例输入
携程C2t0r1i8p2020校招

样例输出
2018Ctrip */

function test(str) {
  var number = str.replace(/[^0-9]/gi, '');
  var _str = str.replace(/[^a-z]/gi, '');

  var _number = number.replace(/(.).*\1/g, "$1");
  return str = _number + _str;
}

console.log(test('携程C2t0r1i8p2020校招'));