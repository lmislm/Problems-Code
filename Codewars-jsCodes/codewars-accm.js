/**
 * Created by Administrator on 2017/3/16.
 */
function accum(s) {

    s = s.toUpperCase().split("");

    for(var i=0,l=s.length; i<l; i++) {

        var tmp = s[i].toLowerCase();

        for(var j=0; j<i; j++){
            s[i] += tmp;
        }
    }
    return s.join("-");
}

//
function accum(s){
    var letter = s.split('');
    var result = [];
    for(var i=0;i<letter.length;i++){
        result.push(letter[i].toUpperCase()+Array(i+1).join(letter[i].toLowerCase()));
    }

    return result.join('_');
}
//输出
accum('fds')
F_Dd_Sss

//参考的js方法，其中对
//
// function accm(s){
//     return s.split('').map((x,index) => x.toUpperCase() + Array(index+1).join(x.toLowerCase())).join('-');
// }
//方法三
