/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var a = x
    var b = 0
    while(a > 0){
      var digit = a%10
      b = b*10 + digit
      a = (a - digit)/10
    }
    return b == x
};