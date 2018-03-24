const vowels = require('./index');

test('Vowels函数已定义', () => {
  expect(typeof vowels).toEqual('function');
});

test('返回元音字母数', () => {
  expect(vowels('aeiou')).toEqual(5);
});

test('返回大写的元音字母数', () => {
  expect(vowels('AEIOU')).toEqual(5);
});

test('返回字符串中元音字母数', () => {
  expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('返回字符串中元音字母数', () => {
  expect(vowels('bcdfghjkl')).toEqual(0);
});
