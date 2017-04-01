/**
 * Created by Administrator on 2017/4/1.
 */
// function getCount(str) {
//     var vowelsCount = 0;
//         var a = ['a','e','i','o','u'];
//         for(var i=0; i<str.length; i++){
//             for(var j=0;j<a.length; j++){
//                 if(a[j]===str[i]){
//                     vowelsCount ++;
//                 }
//             }
//         }
//     return vowelsCount;
// }
// console.log(getCount('jjjj'));

// function getCount(str) {
//     var vowelCount = 0;
//     var a = ['a','e','i','o','u'];
//     for(var i=0;i<str.length; i++){
//         if((a.indexOf(str[i]))!==-1){
//             vowelCount ++;
//         }
//     }
//     return vowelCount;
// }
// console.log(getCount('aeyou'));
//
// //最优解 match方法
// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
// }

function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}