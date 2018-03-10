/*
 * @Author: lmislm 
 * @Date: 2018-03-10 11:15:22 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-10 13:06:47
 */

 const reverse = require('./index');

 test('函数存在', () => {
     expect(reverse).toBeDefined();
 });

 test('字符串反转', () => {
     expect(reverse('张三')).toEqual('三张');
 });

 test('字符反转', () => {
     expect(reverse(' 李 四')).toEqual('四 李 ');
 });

 test('字符反转', () => {
     expect(reverse('李四jest')).toEqual('tsej四李');
 });
