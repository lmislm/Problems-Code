const removeZeros = require('./index');
test('函数已定义', () => {
  expect(typeof removeZeros).toEqual('function');
});
// test('函数通过第一个测试', () => {
//   expect().toEqual('function');
// });

// var input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14],
//   solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];

// test()
// test.assertEquals(JSON.stringify(removeZeros(input)), JSON.stringify(solution));
