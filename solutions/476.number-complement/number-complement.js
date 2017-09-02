/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var complement = num.toString(2).split('')
	return parseInt(complement.map(it => it == '0'?1:0).join(''),2)
};