/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var z = (x ^ y).toString(2)
	var sum = 0
	for(var i = 0;i < z.length;i++){
		z[i] == '1'? sum += 1:null
	}
	return sum
};