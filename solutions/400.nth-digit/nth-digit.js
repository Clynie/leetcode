/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var sub = 9
	var bit = 1
	while(n > sub*bit){
		n -= sub*bit
		sub *= 10
		bit++
	}
	var indexSub = (n-1)/bit
	var indexNum = (n-1)%bit
	var num = Math.pow(10,bit-1)+indexSub
	var result = parseInt((''+num)[indexNum])
	return result
};