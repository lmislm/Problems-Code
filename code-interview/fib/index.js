// 打印斐波那契数列
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// 后一位数是前两位数之和
// (例如fib(2) === 0 + 1) === 1;

//迭代法
function fib(n) {
  const result = [0, 1];

  for (i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
}

module.exports = fib;
