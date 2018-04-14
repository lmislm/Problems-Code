// 1. 以下代码输出的结果是：
const obj = {
  a: 1,
  b: 'foo',
  c() {
    return this.d() + this.b;
  },
  d: (function() {
    return () => this.a;
  })()
};

console.log(obj.c());
