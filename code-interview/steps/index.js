//给出一个数字n,打印出n行左对齐，右边呈从上到下递增一个符号的梯形
// ----例如
// steps(2)
//      '* '
//      '**'
// steps(3)
//      '*  '
//      '** '
//      '***'
// steps(4)
//      '*   '
//      '**  '
//      '*** '
//      '****'
//column 行；row 列；
/* 以下为示例参考代码 */
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  // 代码简化
  const add = stair.length <= row ? '*' : ' ';
  steps(n, row, stair + add);

  /*   if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair)
 */
}

module.exports = steps;

// 99乘法表
// function steps(n) {
//   for (let row = 1; row <= n; row++) {
//     let stair = '';
//     for (let column = 1; column <= n; column++) {
//       if (column <= row) {
//         stair += `${column}*${row}=${row * column}\t`;
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

// 方法一
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '*';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

// module.exports = steps;
