/**
 * Created by Administrator on 2017/3/22.
 */
function minMax(arr) {
    var max = Math.max.apply(null,arr);
    var min = Math.min.apply(null,arr);
    return [min,max];
    //from mdn ,有一些例子
}