const fib = require('./index');

test('Fib 函数已定义', () => {
  expect(typeof fib).toEqual('function');
});

test('fib(1)值正确', () => {
  expect(fib(1)).toEqual(1);
});

test('fib(2)值正确', () => {
  expect(fib(2)).toEqual(1);
});

test('fib(3)值正确', () => {
  expect(fib(3)).toEqual(2);
});

test('fib(4)值正确', () => {
  expect(fib(4)).toEqual(3);
});

test('fib(39)值正确', () => {
  expect(fib(39)).toEqual(63245986);
});
