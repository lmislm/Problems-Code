const pyramid = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('pyramids 函数已定义', () => {
  expect(typeof pyramid).toEqual('function');
});

test('打印 n = 2 的金字塔', () => {
  pyramid(2);
  expect(console.log.mock.calls[0][0]).toEqual(' * ');
  expect(console.log.mock.calls[1][0]).toEqual('***');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('打印 n = 3 的金字塔', () => {
  pyramid(3);
  expect(console.log.mock.calls[0][0]).toEqual('  *  ');
  expect(console.log.mock.calls[1][0]).toEqual(' *** ');
  expect(console.log.mock.calls[2][0]).toEqual('*****');
  expect(console.log.mock.calls.length).toEqual(3);
});

test('打印 n = 4 的金字塔', () => {
  pyramid(4);
  expect(console.log.mock.calls[0][0]).toEqual('   *   ');
  expect(console.log.mock.calls[1][0]).toEqual('  ***  ');
  expect(console.log.mock.calls[2][0]).toEqual(' ***** ');
  expect(console.log.mock.calls[3][0]).toEqual('*******');
  expect(console.log.mock.calls.length).toEqual(4);
});
