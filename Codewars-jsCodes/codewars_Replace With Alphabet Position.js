/**
 * Created by Administrator on 2017/5/4.
 */
/*
* 1. transfe to upUpper  2.
* */

function alphabetPosition(text) {
    return text.replace(/[^a-zA-Z]+/g,'').toUpperCase().split('').map(
        function (eachStr) {
            return eachStr.charCodeAt()-64;
        }).join(' ');
}
console.log(alphabetPosition('The testT'))
//优化


/*
 let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');
 Best Practices32Clever118
 8ForkCompare with your solutionLink
 function alphabetPosition(text) {
 var result = "";
 for (var i = 0; i < text.length; i++){
 var code = text.toUpperCase().charCodeAt(i)
 if (code > 64 && code < 91) result += (code - 64) + " ";
 }

 return result.slice(0, result.length-1);
 }


* */

