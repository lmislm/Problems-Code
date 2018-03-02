/*
 * @Author: lmislm 
 * @Date: 2018-03-02 16:03:40 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-02 20:13:26
 */
var myAtoi = function (str) {   
    //return str.trim().match(/^([+-])?([0-9]+)/m).shift().toString();
    //slice in leetcode cant read property

        // var arr = str.trim().match(/^([+-])?([0-9]+)/m);
        var flag = false; 
        var s=0;
        while(s<str.length && str[s]==' ')
        {
            s++;
        }
        if(s<str.length && str[s]=='+')
        {
            s++;
        }else
        {
            if(s<str.length && str[s]=='-')
            {
                a=true;
                s++;
            }
        }
        for()
        if (arr) {
            var sign = arr[1];
            var strNum = arr[2];
            var number = parseInt(strNum);
            if (sign) {
                if (sign == '-') {
                    number = -1 * number;
                    return Math.max(-2147483648, number);
                }
            }
            return Math.min(2147483647, number);
        } else {
            return 0;
        }
};
console.log(myAtoi('+123'));
