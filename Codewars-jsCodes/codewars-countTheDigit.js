/**
 * Created by Administrator on 2017/3/20.
 */
//wodewars count digit
function nbDig(n,d) {
    var s = '';
    for(var i=0;i<=n;i++){
        s += Math.pow(i,2);
    }
    return s.split(d).length-1
}
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9)
// as an integer. Square all numbers k (0 <= k <= n) between 0 and
// n. Count the numbers of digits d used in the writing of all the k**
// 2. Call nb_dig (or nbDig or ...) the function taking n
// and d as parameters and returning this count.