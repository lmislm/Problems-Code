/*
 * @Author: lmislm 
 * @Date: 2018-03-13 14:34:02 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-13 16:41:13
 */
//FizzBuzz 
//    给出整数n,从1到n打印每个数，如果某个数被3整除打印fizz,
// 能被5整除打印buzz，同时被3和5整除则打印fizzbuzz
//例如
// fizzbuzz(5);
// 1
// 2
// fizz
// 4
// buzz

// ---------测试用例中给出了fizzbuzz(15)的解

function fizzbuzz(n) {
    //打印‘1’到‘n’
    for(let i = 1; i <= n; i++) {
        // 检查是否有3,5的倍数
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if(i % 3 === 0) {
            console.log('fizz');
        }else if(i % 5 === 0) {
            console.log('buzz');
        }else {
            console.log(i)
        }
    }
}

module.exports = fizzbuzz;