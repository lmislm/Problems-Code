/*
 * @Author: lmislm 
 * @Date: 2018-03-11 20:33:22 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-11 20:47:11
 */

 const maxChar = require('./index');

 test('maxChar 函数已定义', () => {
     expect(typeof maxChar).toEqual('function');
 });

 test('已找到出现次数最多的字符', () => {
     expect(maxChar('a')).toEqual('a');
     expect(maxChar('acdddbeefgs')).toEqual('d');
 });

 test('字符中包含数字', () => {
     expect(maxChar('abcd13a233a4444f')).toEqual('4');
 });

 