/**
 * Created by Administrator on 2017/4/20.
 */
var palindromeChainLength = function(n) {
    //非原创
    var re = 1 * n.toString().split('').reverse().join('');
    return n - re && 1 + palindromeChainLength(re + n);
};