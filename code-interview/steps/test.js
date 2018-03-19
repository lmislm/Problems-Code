const steps = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('函数已定义', () => {
  expect(typeof steps).toEqual('function');
});

test('steps(1)正常', () => {
  steps(1);
  expect(console.log.mock.calls[0][0]).toEqual('*');
  expect(console.log.mock.calls.length).toEqual(1);
});

test('steps(2)正常', () => {
  steps(2);
  expect(console.log.mock.calls[0][0]).toEqual('* ');
  expect(console.log.mock.calls[1][0]).toEqual('**');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('steps(3)正常', () => {
  steps(3);
  expect(console.log.mock.calls[0][0]).toEqual('*  ');
  expect(console.log.mock.calls[1][0]).toEqual('** ');
  expect(console.log.mock.calls[2][0]).toEqual('***');
  expect(console.log.mock.calls.length).toEqual(3);
});
