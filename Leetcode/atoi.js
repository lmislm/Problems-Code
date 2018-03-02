/*
 * @Author: lmislm 
 * @Date: 2018-03-02 16:03:40 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-02 22:03:43
 */
var myAtoi = function (str) {   
    //return str.trim().match(/^([+-])?([0-9]+)/m).shift().toString();
    //slice in leetcode cant read property

    var arr = str.trim().match(/^([+-])?([0-9]+)/);
    if(arr)
    {   
        console.log('this is string: '+arr)
        var s = arr[1];
        var n = parseInt(arr[2]);
        console.log(s)
        if (s) 
        {
            if (s == '-') 
            {
                n = -1 * n;
                return Math.max(-2147483648,n);
            }
        }
        return Math.min(2147483647, n);
    }
    else
    {
        return 0;
    }
};

console.log(myAtoi(' 123'));
console.log(myAtoi('-123'));
console.log(myAtoi('123'));
console.log(myAtoi(' -123'));
