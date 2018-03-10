/*
 * @Author: lmislm 
 * @Date: 2018-03-10 20:09:24 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-10 20:36:01
 */

 const palindrome = require('./index');

 test('回文函数没有定义', () => {
     expect(typeof palindrome).toEqual('function');
 });

 test('"aba" 是一个回文函数', () => {
     expect(palindrome('aba')).toBeTruthy();
 });

 test('" aba" 带空格不相等的的不是回文', () => {
     expect(palindrome(' aba')).toBeFalsy();
 });

 test('"aba "不是回文', () => {
     expect(palindrome('aba ')).toBeFalsy();
 });

 test('"abcdef" 不是一个回文palindrome', () => {
     expect(palindrome('abcdef')).toBeFalsy();
 });

 test('"张三"不是一个回文', () => {
     expect(palindrome('张三')).toBeTruthy;
 });

 