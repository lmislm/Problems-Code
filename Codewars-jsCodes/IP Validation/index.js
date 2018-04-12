/**
 * Created by lmislm on 2018/2/10.
 * Github：https://github.com/lmislm/
 */
function isValidIP(str) {
  var arr = str.split('.');

  return (
    arr.filter(function(value) {
      //Number
      return value == Number(value).toString() && Number(value) <= 255;
    }).length == 4
  );
}

module.exports = isValidIP;
//这个还要自己写测试代码，晕，大概这么个意思
// var
//     v,
//     x,
//     arr = [];
// for(x=1; x<100; x++) {
//     arr.push(x);
// }
// r = isValidIP(str);
// if()
