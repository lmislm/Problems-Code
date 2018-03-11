/*
 * @Author: lmislm 
 * @Date: 2018-03-11 10:38:35 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-11 11:15:22
 */
const reverseint = require('./reverseint');

test('函数已定义', () => {
    expect(reverseint).toBeDefined();
});

test('把0当成一个输入', () => {
    expect(reverseint(0)).toEqual(0);
});

test('正整数反转', () => {
    expect(reverseint(1243)).toEqual(3421);
    expect(reverseint(123)).toEqual(321);
    expect(reverseint(-12)).toEqual(-21);
    expect(reverseint(-10)).toEqual(-1);
});

test('负整数反转', () => {
    expect(reverseint(-5)).toEqual(-5);
    expect(reverseint(-15)).toEqual(-51);
    expect(reverseint(-90)).toEqual(-9);
    expect(reverseint(-2359)).toEqual(-9532);
});

