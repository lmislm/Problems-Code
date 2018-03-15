const arraychunk = require('./index');

test('函数已定义', () => {
    expect(typeof arraychunk).toEqual('function');
});

test("分割数组中10个元素，每个数组最大为2", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = arraychunk(arr, 2);

  expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test("分割数组中3个元素，每个数组最大为1", () => {
  const arr = [1, 2, 3];
  const chunked = arraychunk(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});

test("分割数组中5个元素，每个数组最大为3", () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = arraychunk(arr, 3);

  expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
});

test("分割数组中13个元素，每个数组最大为5", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = arraychunk(arr, 5);

  expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
});