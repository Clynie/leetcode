/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
	var sum = 0
	while(b != 0){
		debugger
		sum = a^b
		b = (a&b) << 1
		a = sum
	}
	return sum
};