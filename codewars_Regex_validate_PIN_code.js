/**
 * Created by Administrator on 2017/3/22.
 */
//找四个或者六个数字
function validatePIN(pin) {
    if ((typeof pin === "string") && !~pin.indexOf('.') && !isNaN(Number(pin)) && ( pin.length == 4 || pin.length == 6)) {
        return true;
    } else {
        return false;
    }
}

//     function validatePIN(pin) {
//         return /^(\d{4}|\d{6})$/.test(pin)、
//     }
// }