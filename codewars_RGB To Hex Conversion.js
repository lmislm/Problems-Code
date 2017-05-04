/**
 * Created by Administrator on 2017/5/3.
 */
/*
* 1.limit from 0 to F   2.prototype.call receive the args   3.tostring()
* */
function rgb(r, g, b){
    var i, j, k = "";

    var x = r.toString(16).toUpperCase();
    var y = g.toString(16).toUpperCase();
    var z = b.toString(16).toUpperCase();

    x.length == 1 ? i = "0" + x : i = x;
    y.length == 1 ? j = "0" + y : j = y;
    z.length == 1 ? k = "0" + z : k = z;

    if (i < 0) {i = "00"};
    if (j < 0) {j = "00"};
    if (k < 0) {k = "00"};

    if (r > 255) {i = "FF"};
    if (g > 255) {j = "FF"};
    if (b > 255) {k = "FF"};

    return (i+j+k);
};
//比较好的办法
/*
function rgb(r, g, b) {

    return [].map.call(arguments,function (args) {
        return args <= 0 ? '00' : args > 255 ? 'FF' : args.toString(16);
    }).join('').toUpperCase();
}
console.log(rgb(255,255,255))
*/
//others
/*   the best practices and the clever
 function rgb(r, g, b){
 return toHex(r)+toHex(g)+toHex(b);
 }

 function toHex(d) {
 if(d < 0 ) {return "00";}
 if(d > 255 ) {return "FF";}
 return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
 }
* */