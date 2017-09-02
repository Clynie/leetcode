/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    var real,imaginary
	a = a.split('+')
	a[1] = a[1].slice(0,-1)
	b = b.split('+')
	b[1] = b[1].slice(0,-1)
	real = a[0]*b[0]-a[1]*b[1]
	imaginary = a[0]*b[1]+a[1]*b[0]
	return real+'+'+imaginary+'i'
};