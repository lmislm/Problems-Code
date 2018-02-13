/**
 * Created by lmislm on 2018/2/13- 20:55.
 */

function Reverse(x) {
    //number Reverse,sign: get the sign
    var a = (Math.abs(x).toString().split('').reverse().join(''))*Math.sign(x);
    //range
    return (a>Math.pow(2, 31) - 1||a<-Math.pow(2, 31))?0:a;
}

console.log(Reverse(1534236469)) //Except output：0
console.log(Reverse(-123)) //Except output：-321

// Java
/*
class Solution {
    public int reverse(int x) {
    long res = 0;
    while(x!=0){
    res = res*10 + (x%10);
    x /= 10;
}
if( res>Integer.MAX_VALUE || res<Integer.MIN_VALUE ) {
    return 0;
}
return (int)res;
}
}*/

// C++
/*
class Solution {
    public:
        int reverse(int x) {
    long long a = 0;
    //max min
    const int maxint = 0x7fffffff;
    const int minint = 0x80000000;
    while( x!=0 )
{
    a=a*10+(x%10);
    x/=10;
}
if(a>maxint || a<minint)
{
    a=0;
}
return a;
}
};*/
