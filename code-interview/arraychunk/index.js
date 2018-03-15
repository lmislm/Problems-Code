/*
 * @Author: lmislm 
 * @Date: 2018-03-13 16:49:17 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-15 21:13:42
 */

//数组分割
//给出一个数组，和分类大小，将数组划分为多个子数组。
// --Example
// arraychunk([1,2,3,4], 2) --> [[1,2], [3,4]]
// arraychunk([1,2,3,4,5], 2) --> [[1,2], [3,4],[5]]
// arraychunk([1,2,3,4,5,6,7,8], 3) --> [[1,2,3], [4,5,6],[7,8]]

function arraychunk(array, size) {
    //slice(start(include)_point, end(noinclude)_point)
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}


//方法一
// function arraychunk(array, size) {
//     const chunked = [];

//     for(let element of array) {
//         const last = chunked[chunked.length - 1];

//         if(!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }

//     return chunked;
// }

module.exports = arraychunk;