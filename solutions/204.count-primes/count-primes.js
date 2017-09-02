/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
	if(n < 3){
		return 0
	}
	var f = new Array(n).fill(false)
	var count = n / 2
	var max = Math.sqrt(n)
	for(var i = 3;i < max;i+=2){
		for(var j = i*i;j < n;j += 2*i){
			if(!f[j]){
				--count
				f[j] = true
			}
		}
	}
	return parseInt(count)
};