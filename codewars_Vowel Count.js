/**
 * Created by Administrator on 2017/4/1.
 */
function getCount(str) {
    var vowelsCount = 0;
        var a = ['a','e','i','o','u'];
        for(var i=0; i<str.length; i++){
            for(var j=0;j<a.length; j++){
                if(a[j]===str[i]){
                    vowelsCount ++;
                }
            }
        }
    return vowelsCount;
}
console.log(getCount('jjjj'));