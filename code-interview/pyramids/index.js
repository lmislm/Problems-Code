/*
 * @Author: lmislm 
 * @Date: 2018-03-23 18:45:36 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-23 22:09:11
 */
//给出一个数字n,打印输出金字塔，如下：
// --------- 例如 ----
// steps(1)
//      '* '
// steps(2)
//      ' * '
//      '***'
// steps(3)
//      '  *  '
//      ' *** '
//      '*****'
//column ：列数；row 行数；

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '*';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

module.exports = pyramid;
