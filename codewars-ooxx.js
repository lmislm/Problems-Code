/**
 * Created by Administrator on 2017/3/17.
 */
// function xo(str) {
//     var numX = new RegExp(/x/gi);
//     //g 全局搜索，i 忽略大小写
//     var numO = new RegExp(/o/gi);
//     if(numX.test(str)&&numO.test(str)){
//         if(str.match(/x/gi).length == str.match(/o/gi).length){
//             return true;
//         }else{
//             return false;
//         }
//     }else{
//         return false;
//     }
// }
// console.log(xo('xxoo'))
// console.log(xo('glld'))

//完整
function xo(str) {
    var numX = str.match(/x/gi) || [];
    var numO = str.match(/x/gi) || [];

    return numO.length == numX.length;
}
//方法三大神级别
// let x = str.match(/x/gi);
// let o = str.match(/o/gi);
// return (x && x.length) === (o && o.length);
// }


