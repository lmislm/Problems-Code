const capitalize = require('./index');

test('函数已定义', () => {
  expect(typeof capitalize).toEqual('function');
});

test('字母大写化', () => {
  expect(capitalize('we need to create a new')).toEqual(
    'We Need To Create A New'
  );
});

test('词首字母大写', () => {
  expect(capitalize('my name is lmislm')).toEqual('My Name Is Lmislm');
});
