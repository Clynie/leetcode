/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var digit
    var sum = 0
    while(num >= 1){
        digit = num % 10
        num = (num - digit)/10
        sum += digit
    }
    if(sum >= 10){
        return addDigits(sum)
    }
    return sum
};